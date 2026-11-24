// Crawl the local production build and report every link's status.
const ORIGIN = "http://localhost:3100";
const START = ["/", "/work", "/about", "/notes", "/contact", "/beyond"];

const seen = new Map(); // url -> {status, from}
const internalQueue = [...START];
const internalSeen = new Set(START);
const external = new Set();
const anchors = new Set();
const failures = [];

function resolve(href, base) {
  try {
    return new URL(href, ORIGIN + base).toString();
  } catch {
    return null;
  }
}

async function fetchPage(path) {
  const res = await fetch(ORIGIN + path, { redirect: "follow" });
  return { status: res.status, html: await res.text(), final: res.url };
}

for (const path of START) {
  seen.set(path, { status: 200 });
}

// Crawl internal pages.
for (let i = 0; i < internalQueue.length; i += 1) {
  const path = internalQueue[i];
  let page;
  try {
    page = await fetchPage(path);
  } catch (error) {
    failures.push(`${path} — request failed: ${error.message}`);
    continue;
  }

  if (page.status !== 200) {
    failures.push(`${path} — HTTP ${page.status}`);
    continue;
  }

  for (const m of page.html.matchAll(/href="([^"]+)"/g)) {
    const raw = m[1].replace(/&amp;/g, "&");
    if (raw.startsWith("#") || raw.startsWith("mailto:") || raw.startsWith("tel:")) {
      if (raw.startsWith("#") && raw.length > 1) anchors.add(raw);
      continue;
    }
    const url = resolve(raw, path);
    if (!url) continue;
    if (url.startsWith(ORIGIN)) {
      const p = url.slice(ORIGIN.length) || "/";
      if (!internalSeen.has(p)) {
        internalSeen.add(p);
        internalQueue.push(p);
      }
    } else {
      external.add(url);
    }
  }
}

// Check every internal URL status.
for (const path of internalQueue) {
  if (path === "/") continue;
  try {
    const res = await fetch(ORIGIN + path, { redirect: "follow" });
    const type = res.headers.get("content-type") || "";
    seen.set(path, { status: res.status, type });
    if (res.status >= 400) failures.push(`${path} — HTTP ${res.status}`);
  } catch (error) {
    failures.push(`${path} — request failed: ${error.message}`);
  }
}

// Check external links, politely and sequentially.
const externalResults = [];
for (const url of external) {
  try {
    const res = await fetch(url, {
      method: "GET",
      redirect: "follow",
      headers: { "user-agent": "Mozilla/5.0 (portfolio link check)" },
    });
    externalResults.push({ url, status: res.status });
  } catch (error) {
    externalResults.push({ url, status: `ERR ${error.message}` });
  }
}

const internalList = [...seen.entries()].map(([path, info]) => ({ path, ...info }));
const badExternal = externalResults.filter(
  (r) => typeof r.status !== "number" || r.status >= 400,
);

console.log(
  JSON.stringify(
    {
      pagesCrawled: internalQueue.length,
      internal: internalList,
      external: externalResults,
      failures,
      badExternal,
      anchors: [...anchors],
    },
    null,
    2,
  ),
);
