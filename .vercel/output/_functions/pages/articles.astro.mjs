import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DdaBn-83.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_D-55IOiQ.mjs';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_B1vQ6u90.mjs';
import { $ as $$Main } from '../chunks/Main_DAWW4KQW.mjs';
import { $ as $$Card } from '../chunks/Card_D27OR-4M.mjs';
import { g as getSortedPosts } from '../chunks/getSortedPosts_BvTFy216.mjs';
export { renderers } from '../renderers.mjs';

const $$Articles = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);
  const pageTitle = "";
  const pageDesc = ">The articles I've written or thoughts I've shared";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Main", $$Main, { "pageTitle": pageTitle, "pageDesc": pageDesc }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="prose prose-lg prose-slate dark:prose-invert"> <h2>Blog Posts & Insights</h2> </div> <ul class="mt-8"> ${sortedPosts.map((data) => renderTemplate`${renderComponent($$result3, "Card", $$Card, { "variant": "h3", ...data })}`)} </ul> ` })} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/GitHubPro/jeoste.github.io/src/pages/articles.astro", void 0);

const $$file = "C:/GitHubPro/jeoste.github.io/src/pages/articles.astro";
const $$url = "/articles";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Articles,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
