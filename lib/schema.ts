import { site } from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";
import type { ProjectItem } from "@/lib/content";

const PERSON_ID = `${site.url}/#person`;
const WEBSITE_ID = `${site.url}/#website`;

export function personSchema() {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: site.name,
    jobTitle: site.role,
    description: site.bio.description,
    image: absoluteUrl("/images/varun-portrait-suit.jpg"),
    url: site.url,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: site.education.institution,
    },
    knowsAbout: [
      "DevOps",
      "Cloud infrastructure",
      "Kubernetes",
      "DevSecOps",
      "AIOps",
      "Linux",
      "Terraform",
      "Observability",
    ],
    sameAs: [
      "https://github.com/coderv1304",
      "https://www.linkedin.com/in/connectvarun13",
      "https://varun-nair-13.hashnode.dev/",
    ],
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: site.url,
    name: `${site.name} — Portfolio`,
    description: site.bio.description,
    inLanguage: "en",
    publisher: { "@id": PERSON_ID },
  };
}

export function breadcrumbSchema(
  crumbs: Array<{ name: string; path: string }>,
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function projectSchema(project: ProjectItem) {
  return {
    "@type": "SoftwareSourceCode",
    "@id": `${absoluteUrl(`/work/${project.slug}`)}#project`,
    name: project.title,
    description: project.blurb,
    url: absoluteUrl(`/work/${project.slug}`),
    codeRepository: project.repo,
    image: absoluteUrl(project.image),
    keywords: project.stack.join(", "),
    author: { "@id": PERSON_ID },
    isPartOf: { "@id": WEBSITE_ID },
    ...(project.demo ? { sameAs: project.demo } : {}),
  };
}

export function collectionPageSchema({
  path,
  name,
  description,
  items,
}: {
  path: string;
  name: string;
  description: string;
  items?: Array<{ name: string; path: string }>;
}) {
  return {
    "@type": "CollectionPage",
    "@id": `${absoluteUrl(path)}#collection`,
    url: absoluteUrl(path),
    name,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": PERSON_ID },
    ...(items
      ? {
          hasPart: items.map((item) => ({
            "@type": "CreativeWork",
            name: item.name,
            url: absoluteUrl(item.path),
          })),
        }
      : {}),
  };
}
