import { useEffect } from "react";

const SITE_URL = "https://www.ermizamr.tech";
const FULL_NAME = "Ermyas Misiker";
const TITLE = "Ermyas Misiker | Full-Stack Developer & Founder | ermizamr.tech";
const DESCRIPTION =
  "Ermyas Misiker (ermizamr) is a full-stack developer and founder from Addis Ababa, Ethiopia. Expert in Django, React, Flutter, Python, and Supabase. Building B2B SaaS platforms, AI Telegram bots, and mobile apps. Available for freelance and collaboration.";
const KEYWORDS = [
  "Ermyas Misiker", "Ermias Misiker", "Ermyas", "Ermias", "Misiker", "ermizamr",
  "website developer", "developer", "fullstack developer", "full-stack developer",
  "coder", "coding", "tech", "Ethiopia", "Ethiopian developer", "Ethiopian coder",
  "software engineer Ethiopia", "software developer Ethiopia",
  "web developer Ethiopia", "web developer Addis Ababa",
  "Django developer", "React developer", "Flutter developer",
  "Python developer", "Telegram bot developer",
  "B2B SaaS developer", "African developer",
  "backend developer", "frontend developer", "mobile developer",
  "freelance developer Ethiopia", "Addis Ababa University developer",
  "ermizamr.tech",
].join(", ");

const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: FULL_NAME,
  alternateName: ["Ermias Misiker", "ermizamr"],
  url: SITE_URL,
  email: "ermizamr197@gmail.com",
  telephone: "+251937845575",
  jobTitle: "Full-Stack Software Developer",
  description: DESCRIPTION,
  image: `${SITE_URL}/Ermi_Cartoon.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Addis Ababa",
    addressRegion: "Addis Ababa",
    addressCountry: "ET",
  },
  sameAs: [
    "https://github.com/ermizamr",
    "https://www.linkedin.com/in/ermiyas-misiker/",
    "https://x.com/ermizamr",
    "https://t.me/ermijemmy",
  ],
  knowsAbout: [
    "Python", "Django", "JavaScript", "TypeScript", "React",
    "Flutter", "PostgreSQL", "Supabase", "REST APIs",
    "Telegram Bot API", "Full-Stack Development", "B2B SaaS",
    "Web Development", "Mobile Development", "Software Engineering",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Addis Ababa University",
    address: { "@type": "PostalAddress", addressLocality: "Addis Ababa", addressCountry: "ET" },
  },
  hasOccupation: {
    "@type": "Occupation",
    name: "Full-Stack Software Developer",
    occupationLocation: { "@type": "City", name: "Addis Ababa" },
    skills: "Django, React, Flutter, Python, PostgreSQL, Supabase, REST APIs",
  },
};

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${FULL_NAME} — Portfolio`,
  url: SITE_URL,
  description: DESCRIPTION,
  inLanguage: "en",
  author: { "@type": "Person", name: FULL_NAME, url: SITE_URL },
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

function setMeta(name: string, content: string, isProperty = false) {
  const attr = isProperty ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
  el.setAttribute("content", content);
}
function setLink(rel: string, href: string, attrs?: Record<string, string>) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) { el = document.createElement("link"); el.setAttribute("rel", rel); document.head.appendChild(el); }
  el.setAttribute("href", href);
  if (attrs) Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
}
function injectJsonLd(schema: object, id: string) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) { el = document.createElement("script"); el.type = "application/ld+json"; el.id = id; document.head.appendChild(el); }
  el.textContent = JSON.stringify(schema);
}

export function SEOHead() {
  useEffect(() => {
    document.documentElement.lang = "en";
    document.title = TITLE;
    setMeta("description", DESCRIPTION);
    setMeta("keywords", KEYWORDS);
    setMeta("author", FULL_NAME);
    setMeta("robots", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");
    setMeta("googlebot", "index, follow");
    setMeta("theme-color", "#ffffff");
    setMeta("viewport", "width=device-width, initial-scale=1");
    setLink("canonical", SITE_URL);
    setLink("preconnect", "https://images.unsplash.com");
    // Open Graph
    setMeta("og:type", "profile", true);
    setMeta("og:url", SITE_URL, true);
    setMeta("og:title", TITLE, true);
    setMeta("og:description", DESCRIPTION, true);
    setMeta("og:site_name", `${FULL_NAME} — Portfolio`, true);
    setMeta("og:locale", "en_US", true);
    setMeta("og:image", `${SITE_URL}/Ermi_Cartoon.jpg`, true);
    setMeta("og:image:width", "800", true);
    setMeta("og:image:height", "800", true);
    setMeta("og:image:alt", `${FULL_NAME} — Full-Stack Developer`, true);
    setMeta("profile:first_name", "Ermyas", true);
    setMeta("profile:last_name", "Misiker", true);
    setMeta("profile:username", "ermizamr", true);
    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:site", "@ermizamr");
    setMeta("twitter:creator", "@ermizamr");
    setMeta("twitter:title", TITLE);
    setMeta("twitter:description", DESCRIPTION);
    setMeta("twitter:image", `${SITE_URL}/Ermi_Cartoon.jpg`);
    setMeta("twitter:image:alt", `${FULL_NAME} — Full-Stack Developer`);
    // JSON-LD
    injectJsonLd(PERSON_SCHEMA, "schema-person");
    injectJsonLd(WEBSITE_SCHEMA, "schema-website");
  }, []);
  return null;
}
