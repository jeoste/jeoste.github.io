import { b as createAstro, c as createComponent, e as addAttribute, d as renderScript, a as renderTemplate, r as renderComponent, g as renderSlot, l as renderHead, u as unescapeHTML, m as maybeRenderHead, s as spreadAttributes } from './astro/server_DdaBn-83.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
import { S as SITE } from './config_JJhEf13K.mjs';
import { jsx } from 'react/jsx-runtime';
import { toast, Toaster as Toaster$1 } from 'sonner';
import { useState, useEffect } from 'react';

const $$Astro$4 = createAstro("https://jeoste.github.io/");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/GitHubPro/jeoste.github.io/node_modules/.pnpm/astro@5.12.6_@types+node@24_4b0b243eeb6beefd9575ee07a242c1d7/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/GitHubPro/jeoste.github.io/node_modules/.pnpm/astro@5.12.6_@types+node@24_4b0b243eeb6beefd9575ee07a242c1d7/node_modules/astro/components/ClientRouter.astro", void 0);

if (typeof window !== "undefined") {
  window.toast = toast;
  window.showToast = (type, message) => {
    if (toast && typeof toast[type] === "function") {
      toast[type](message);
    }
  };
}
const Toaster = ({ ...props }) => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const updateTheme = () => {
      const dataTheme = document.documentElement.getAttribute("data-theme");
      setTheme(dataTheme === "dark" ? "dark" : "light");
    };
    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"]
    });
    return () => observer.disconnect();
  }, []);
  const getThemeColors = () => {
    if (theme === "dark") {
      return {
        "--normal-bg": "hsl(0, 0%, 15%)",
        "--normal-text": "hsl(0, 0%, 92%)",
        "--normal-border": "hsl(36, 94%, 52%, 0.3)",
        "--success-bg": "hsl(36, 94%, 52%, 0.15)",
        "--success-text": "hsl(36, 94%, 52%)",
        "--success-border": "hsl(36, 94%, 52%, 0.4)",
        "--error-bg": "hsl(0, 84%, 60%, 0.15)",
        "--error-text": "hsl(0, 84%, 60%)",
        "--error-border": "hsl(0, 84%, 60%, 0.4)"
      };
    } else {
      return {
        "--normal-bg": "hsl(190, 60%, 96%)",
        "--normal-text": "hsl(222, 14%, 15%)",
        "--normal-border": "hsl(190, 100%, 38%, 0.3)",
        "--success-bg": "hsl(120, 84%, 60%, 0.1)",
        "--success-text": "hsl(120, 84%, 60%)",
        "--success-border": "hsl(120, 84%, 60%, 0.3)",
        "--error-bg": "hsl(0, 84%, 60%, 0.1)",
        "--error-text": "hsl(0, 84%, 60%)",
        "--error-border": "hsl(0, 84%, 60%, 0.3)"
      };
    }
  };
  return /* @__PURE__ */ jsx(
    Toaster$1,
    {
      theme,
      className: "toaster group",
      style: getThemeColors(),
      position: "top-right",
      richColors: true,
      ...props
    }
  );
};

function ToasterWrapper() {
  return /* @__PURE__ */ jsx(Toaster, {});
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$Astro$3 = createAstro("https://jeoste.github.io/");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const googleSiteVerification = "your_google_site_verification_code_here";
  const {
    title = SITE.title,
    author = SITE.author,
    profile = SITE.profile,
    description = SITE.desc,
    ogImage = `/${SITE.ogImage}` ,
    canonicalURL = new URL(Astro2.url.pathname, Astro2.url),
    pubDatetime,
    modDatetime,
    scrollSmooth = false
  } = Astro2.props;
  const socialImageURL = new URL(ogImage, Astro2.url);
  const isContactPage = Astro2.url.pathname === "/contact";
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: `${title}`,
    image: `${socialImageURL}`,
    datePublished: `${pubDatetime?.toISOString()}`,
    ...modDatetime && { dateModified: modDatetime.toISOString() },
    author: [
      {
        "@type": "Person",
        name: `${author}`,
        ...profile && { url: profile }
      }
    ]
  };
  return renderTemplate(
    _b || (_b = __template(['<html lang="en"', ' data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/x-icon" href="/favicon.ico"><link rel="canonical"', '><meta name="generator"', "><!-- General Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', '><meta name="author"', '><link rel="sitemap" href="/sitemap-index.xml"><!-- Open Graph / Facebook --><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><meta property="og:image"', "><!-- Article Published/Modified time -->", "", '<!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', "><!-- reCAPTCHA (only on contact page) -->", '<!-- Google JSON-LD Structured data --><script type="application/ld+json">', '</script><!-- Enable RSS feed auto-discovery  --><!-- https://docs.astro.build/en/recipes/rss/#enabling-rss-feed-auto-discovery --><link rel="alternate" type="application/rss+xml"', "", '><meta name="theme-color" content="">', '<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">', '<script src="/toggle-theme.js"></script>', "</head> <body data-astro-cid-sckkx6r4> ", " ", " </body></html>"])),
    addAttribute(`${scrollSmooth && "scroll-smooth"}`, "class"),
    addAttribute(canonicalURL, "href"),
    addAttribute(Astro2.generator, "content"),
    SITE.browserTitle,
    addAttribute(title, "content"),
    addAttribute(description, "content"),
    addAttribute(author, "content"),
    addAttribute(title, "content"),
    addAttribute(description, "content"),
    addAttribute(canonicalURL, "content"),
    addAttribute(socialImageURL, "content"),
    pubDatetime && renderTemplate`<meta property="article:published_time"${addAttribute(pubDatetime.toISOString(), "content")}>`,
    modDatetime && renderTemplate`<meta property="article:modified_time"${addAttribute(modDatetime.toISOString(), "content")}>`,
    addAttribute(canonicalURL, "content"),
    addAttribute(title, "content"),
    addAttribute(description, "content"),
    addAttribute(socialImageURL, "content"),
    isContactPage && renderTemplate(_a || (_a = __template(["<script", " async defer></script>"])), addAttribute(`https://www.google.com/recaptcha/api.js?render=${"6LcLeoUrAAAAAJeks1ZOCrTlhLuFIUU0ewMT8Tbc"}`, "src")),
    unescapeHTML(JSON.stringify(structuredData)),
    addAttribute(SITE.title, "title"),
    addAttribute(new URL("rss.xml", Astro2.site), "href"),
    // If PUBLIC_GOOGLE_SITE_VERIFICATION is set in the environment variable,
    // include google-site-verification tag in the heading
    // Learn more: https://support.google.com/webmasters/answer/9008080#meta_tag_verification&zippy=%2Chtml-tag
    renderTemplate`<meta name="google-site-verification"${addAttribute(googleSiteVerification, "content")}>`,
    renderComponent($$result, "ClientRouter", $$ClientRouter, { "data-astro-cid-sckkx6r4": true }),
    renderHead(),
    renderSlot($$result, $$slots["default"]),
    renderComponent($$result, "ToasterWrapper", ToasterWrapper, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/ToasterWrapper", "client:component-export": "default", "data-astro-cid-sckkx6r4": true })
  );
}, "C:/GitHubPro/jeoste.github.io/src/layouts/Layout.astro", void 0);

const $$Astro$2 = createAstro("https://jeoste.github.io/");
const $$Hr = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Hr;
  const { noPadding = false, ariaHidden = true } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`max-w-3xl mx-auto ${noPadding ? "px-0" : "px-4"}`, "class")}> <hr class="border-border"${addAttribute(ariaHidden, "aria-hidden")}> </div>`;
}, "C:/GitHubPro/jeoste.github.io/src/components/Hr.astro", void 0);

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  Object.defineProperty(Component, "toJSON", {
    value: () => meta,
    enumerable: false
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const IconX = createSvgComponent({"meta":{"src":"/_astro/IconX.DK0Dc7zq.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-x"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M18 6l-12 12\" /><path d=\"M6 6l12 12\" />"});

const IconMoon = createSvgComponent({"meta":{"src":"/_astro/IconMoon.CRxdR147.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-moon"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z\" />"});

const IconSunHigh = createSvgComponent({"meta":{"src":"/_astro/IconSunHigh.EHu4P2Sl.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-sun-high"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z\" /><path d=\"M6.343 17.657l-1.414 1.414\" /><path d=\"M6.343 6.343l-1.414 -1.414\" /><path d=\"M17.657 6.343l1.414 -1.414\" /><path d=\"M17.657 17.657l1.414 1.414\" /><path d=\"M4 12h-2\" /><path d=\"M12 4v-2\" /><path d=\"M20 12h2\" /><path d=\"M12 20v2\" />"});

const IconMenuDeep = createSvgComponent({"meta":{"src":"/_astro/IconMenuDeep.CczWFiGg.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-menu-deep"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M4 6h16\" /><path d=\"M7 12h13\" /><path d=\"M10 18h10\" />"});

const $$Astro$1 = createAstro("https://jeoste.github.io/");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const { pathname } = Astro2.url;
  const currentPath = pathname.replace(/\/$/, "");
  const isActive = (path) => {
    path = path.replace(/\/$/, "");
    if (path === "/" && currentPath === "") return true;
    return currentPath === path;
  };
  return renderTemplate`${maybeRenderHead()}<header style="background: transparent;"> <a id="skip-to-content" href="#main-content" class="absolute -top-full left-16 z-50 bg-background px-3 py-2 text-accent backdrop-blur-lg transition-all focus:top-4">
Skip to content
</a> <div id="nav-container" class="mx-auto flex max-w-3xl flex-col items-center justify-between sm:flex-row sm:items-center w-full p-4 sm:py-6"> <a href="/" class="text-2xl leading-7 font-semibold whitespace-nowrap flex flex-col items-end"> <span>${SITE.title}</span> <span class="text-xs opacity-70">v1.1.0</span> </a> <div class="flex items-center gap-4"> <nav id="nav-menu" class="flex w-full flex-col items-center sm:ml-0 sm:flex-row sm:justify-end sm:space-x-6 sm:py-0"> <button id="menu-btn" class="focus-outline self-end p-2 sm:hidden" aria-label="Open Menu" aria-expanded="false" aria-controls="menu-items"> ${renderComponent($$result, "IconX", IconX, { "id": "close-icon", "class": "hidden" })} ${renderComponent($$result, "IconMenuDeep", IconMenuDeep, { "id": "menu-icon" })} </button> <ul id="menu-items"${addAttribute([
    "mt-4 grid w-60 grid-cols-2 place-content-center gap-3",
    "[&>li>a]:block [&>li>a]:px-4 [&>li>a]:py-3 [&>li>a]:text-center [&>li>a]:font-medium [&>li>a]:hover:text-accent sm:[&>li>a]:px-4 sm:[&>li>a]:py-2",
    "hidden",
    "sm:mt-0 sm:ml-0 sm:flex sm:w-auto sm:gap-x-6 sm:gap-y-0 sm:items-center"
  ], "class:list")}> <li class="col-span-2"> <a href="/"${addAttribute({ "active-nav": isActive("/") }, "class:list")} style="box-shadow: 0 2px 8px 0 var(--header-shadow-color); border-radius: 0.5rem;">
home
</a> </li> <li class="col-span-2"> <a href="/portfolio"${addAttribute({ "active-nav": isActive("/portfolio") }, "class:list")} style="box-shadow: 0 2px 8px 0 var(--header-shadow-color); border-radius: 0.5rem;">
portfolio
</a> </li> <li class="col-span-2"> <a href="/articles"${addAttribute({ "active-nav": isActive("/articles") }, "class:list")} style="box-shadow: 0 2px 8px 0 var(--header-shadow-color); border-radius: 0.5rem;">
articles
</a> </li> <li class="col-span-2"> <a href="/vault"${addAttribute({ "active-nav": isActive("/vault") }, "class:list")} style="box-shadow: 0 2px 8px 0 var(--header-shadow-color); border-radius: 0.5rem;">
vault
</a> </li> <li class="col-span-2"> <a href="/contact"${addAttribute({ "active-nav": isActive("/contact") }, "class:list")} style="box-shadow: 0 2px 8px 0 var(--header-shadow-color); border-radius: 0.5rem;">
contact
</a> </li> </ul> </nav> ${renderTemplate`<button id="theme-btn" class="focus-outline relative size-10 p-2 hover:bg-muted/50 hover:text-accent ml-8" style="box-shadow: 0 2px 8px 0 var(--header-shadow-color); border-radius: 0.5rem;" title="Light/Dark" aria-label="Toggle theme" aria-live="polite"> ${renderComponent($$result, "IconMoon", IconMoon, { "class": "absolute top-[50%] left-[50%] -translate-[50%] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" })} ${renderComponent($$result, "IconSunHigh", IconSunHigh, { "class": "absolute top-[50%] left-[50%] -translate-[50%] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" })} </button>`} </div> </div> ${renderComponent($$result, "Hr", $$Hr, {})} </header> ${renderScript($$result, "C:/GitHubPro/jeoste.github.io/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/GitHubPro/jeoste.github.io/src/components/Header.astro", void 0);

const IconKakao = createSvgComponent({"meta":{"src":"/_astro/IconKakao.DauLeCVd.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-brand-kako-talk"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M10 8v7\" /><path d=\"M14 10l-2 2.5l2 2.5\" /><path d=\"M12 4c4.97 0 9 3.358 9 7.5c0 4.142 -4.03 7.5 -9 7.5c-.67 0 -1.323 -.061 -1.95 -.177l-3.05 2.177l.592 -2.962c-2.741 -1.284 -4.592 -3.73 -4.592 -6.538c0 -4.142 4.03 -7.5 9 -7.5z\" />"});

const IconLinkedin = createSvgComponent({"meta":{"src":"/_astro/IconLinkedin.CgFOWy_H.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M8 11v5\" /><path d=\"M8 8v.01\" /><path d=\"M12 16v-5\" /><path d=\"M16 16v-3a2 2 0 1 0 -4 0\" /><path d=\"M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z\" />"});

const IconGitHub = createSvgComponent({"meta":{"src":"/_astro/IconGitHub.D4TpU-sh.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-brand-github"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5\" />"});

const IconMail = createSvgComponent({"meta":{"src":"/_astro/IconMail.BsR8RxJL.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-mail"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z\" /><path d=\"M3 7l9 6l9 -6\" />"});

const $$Astro = createAstro("https://jeoste.github.io/");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const { noMarginTop = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute(["w-full", { "mt-auto": !noMarginTop }], "class:list")}> ${renderComponent($$result, "Hr", $$Hr, { "noPadding": true })} <div class="flex flex-col items-center justify-between py-6 sm:flex-row-reverse sm:py-4"> <div class="flex items-center gap-4"> <a href="https://open.kakao.com/jeoffrey" target="_blank" class="hover:text-accent transition-colors" aria-label="Kakao"> ${renderComponent($$result, "IconKakao", IconKakao, { "class": "h-5 w-5" })} </a> <a href="https://linkedin.com/in/jeoffrey-stephan/" target="_blank" class="hover:text-accent transition-colors" aria-label="LinkedIn"> ${renderComponent($$result, "IconLinkedin", IconLinkedin, { "class": "h-5 w-5" })} </a> <a href="https://github.com/jeoste" target="_blank" class="hover:text-accent transition-colors" aria-label="GitHub"> ${renderComponent($$result, "IconGitHub", IconGitHub, { "class": "h-5 w-5" })} </a> <a href="mailto:jeoffrey.stephan@gmail.com" target="_blank" class="hover:text-accent transition-colors" aria-label="Email"> ${renderComponent($$result, "IconMail", IconMail, { "class": "h-5 w-5" })} </a> </div> <div class="my-2 flex flex-col items-center whitespace-nowrap sm:flex-row"> <span>Copyright &#169; ${currentYear}</span> <span class="hidden sm:inline">&nbsp;|&nbsp;</span> <span>All rights reserved</span> </div> </div> </footer>`;
}, "C:/GitHubPro/jeoste.github.io/src/components/Footer.astro", void 0);

export { $$Layout as $, IconMail as I, $$Header as a, $$Footer as b, createSvgComponent as c, IconKakao as d, IconLinkedin as e, IconGitHub as f, $$Hr as g };
