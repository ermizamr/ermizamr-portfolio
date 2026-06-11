import { useEffect } from "react";

const SITE_URL = "https://www.ermizamr.tech";
const FULL_NAME = "Ermyas Misiker";
const TITLE = "Ermyas Misiker — Full-Stack Developer & Founder";
const DESCRIPTION = "Full-stack developer and founder based in Addis Ababa, Ethiopia. Building production-grade B2B SaaS platforms, AI-powered Telegram bots, and mobile apps with Django, React, Flutter, and Supabase.";
const KEYWORDS = "Ermyas Misiker, Ermias Misiker, Ermyas, Ermias, Misiker, ermizamr, website developer, developer, fullstack developer, full-stack developer, coder, coding, tech, Ethiopia, Ethiopian developer, Ethiopian coder, software engineer, software developer, web developer, Django developer, React developer, Flutter developer, Python developer, Telegram bot developer, B2B SaaS developer, Addis Ababa developer, African developer, backend developer, frontend developer, mobile developer";

const PERSON_SCHEMA = { "@context": "https://schema.org", "@type": "Person", name: FULL_NAME, url: SITE_URL, email: "ermizamr197@gmail.com", telephone: "+251937845575", jobTitle: "Full-Stack Software Developer", description: DESCRIPTION, image: `${SITE_URL}/og-image.jpg`, address: { "@type": "PostalAddress", addressLocality: "Addis Ababa", addressCountry: "ET" }, sameAs: ["https://github.com/ermizamr", "https://linkedin.com/in/ermiyas-misiker"], knowsAbout: ["Python", "Django", "JavaScript", "TypeScript", "React", "Flutter", "PostgreSQL", "Supabase", "REST APIs", "Telegram Bot API"], alumniOf: { "@type": "CollegeOrUniversity", name: "Addis Ababa University" } };
const WEBSITE_SCHEMA = { "@context": "https://schema.org", "@type": "WebSite", name: FULL_NAME, url: SITE_URL, description: DESCRIPTION, author: { "@type": "Person", name: FULL_NAME, url: SITE_URL } };

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
    setMeta("robots", "index, follow");
    setMeta("theme-color", "#ffffff");
    setLink("canonical", SITE_URL);
    setLink("preconnect", "https://images.unsplash.com");
    setMeta("og:type", "website", true);
    setMeta("og:url", SITE_URL, true);
    setMeta("og:title", TITLE, true);
    setMeta("og:description", DESCRIPTION, true);
    setMeta("og:site_name", FULL_NAME, true);
    setMeta("og:locale", "en_US", true);
    setMeta("og:image", `${SITE_URL}/og-image.jpg`, true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:site", "@ermizamr");
    setMeta("twitter:creator", "@ermizamr");
    setMeta("twitter:title", TITLE);
    setMeta("twitter:description", DESCRIPTION);
    injectJsonLd(PERSON_SCHEMA, "schema-person");
    injectJsonLd(WEBSITE_SCHEMA, "schema-website");
  }, []);
  return null;
}
