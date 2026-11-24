/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async redirects() {
    return [
      {
        source: "/projects/:slug",
        destination: "/work/:slug",
        permanent: true,
      },
      {
        source: "/projects",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/notes",
        permanent: true,
      },
      {
        source: "/experience",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/skills",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/resume",
        destination: "/Varun_Nair_Resume.pdf",
        permanent: true,
      },
      {
        source: "/Varun_Nair.pdf",
        destination: "/Varun_Nair_Resume.pdf",
        permanent: true,
      },
      {
        source: "/work/my-learnings",
        destination: "/work",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
