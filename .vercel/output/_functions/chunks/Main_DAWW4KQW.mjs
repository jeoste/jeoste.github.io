import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, a as renderTemplate, r as renderComponent, g as renderSlot, d as renderScript, f as renderTransition } from './astro/server_DdaBn-83.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro$1 = createAstro("https://jeoste.github.io/");
const $$Breadcrumb = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Breadcrumb;
  const currentUrlPath = Astro2.url.pathname.replace(/\/+$/, "");
  const breadcrumbList = currentUrlPath.split("/").slice(1).filter((segment) => segment !== "en");
  if (breadcrumbList[0] === "posts") {
    breadcrumbList.splice(0, 2, `Posts (page ${breadcrumbList[1] || 1})`);
  }
  if (breadcrumbList[0] === "tags" && !isNaN(Number(breadcrumbList[2]))) {
    breadcrumbList.splice(
      1,
      3,
      `${breadcrumbList[1]} ${Number(breadcrumbList[2]) === 1 ? "" : "(page " + breadcrumbList[2] + ")"}`
    );
  }
  return renderTemplate`${maybeRenderHead()}<nav class="mx-auto mt-8 mb-1 w-full max-w-3xl px-4" aria-label="breadcrumb"> <ul class="font-light whitespace-nowrap overflow-hidden text-ellipsis [&>li]:inline [&>li:not(:last-child)>a]:hover:opacity-100"> <li> <a href="/" class="opacity-80">Home</a> <span aria-hidden="true" class="opacity-80">&raquo;</span> </li> ${breadcrumbList.map(
    (breadcrumb, index) => index + 1 === breadcrumbList.length ? renderTemplate`<li> <span${addAttribute(["capitalize opacity-75 whitespace-nowrap", { lowercase: index > 0 }], "class:list")} aria-current="page">  ${decodeURIComponent(breadcrumb)} </span> </li>` : renderTemplate`<li> <a${addAttribute(`/${breadcrumb}/`, "href")} class="capitalize opacity-70"> ${breadcrumb} </a> <span aria-hidden="true">&raquo;</span> </li>`
  )} </ul> </nav>`;
}, "C:/GitHubPro/jeoste.github.io/src/components/Breadcrumb.astro", void 0);

const $$Astro = createAstro("https://jeoste.github.io/");
const $$Main = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Main;
  const { props } = Astro2;
  const backUrl = Astro2.url.pathname ;
  return renderTemplate`${renderComponent($$result, "Breadcrumb", $$Breadcrumb, {})} ${maybeRenderHead()}<main${addAttribute(backUrl, "data-backUrl")} id="main-content" class="mx-auto w-full max-w-3xl px-4 pb-4"> ${"titleTransition" in props ? renderTemplate`<h1 class="text-2xl font-semibold sm:text-3xl"> ${props.pageTitle[0]} <span${addAttribute(renderTransition($$result, "hn2qarie", "", props.titleTransition), "data-astro-transition-scope")}> ${props.pageTitle[1]} </span> </h1>` : props.pageTitle ? renderTemplate`<h1 class="text-2xl font-semibold sm:text-3xl">${props.pageTitle}</h1>` : null} <p class="mt-2 mb-6 italic">${props.pageDesc}</p> ${renderSlot($$result, $$slots["default"])} </main> ${renderScript($$result, "C:/GitHubPro/jeoste.github.io/src/layouts/Main.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/GitHubPro/jeoste.github.io/src/layouts/Main.astro", "self");

export { $$Main as $ };
