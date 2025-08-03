import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DdaBn-83.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_D-55IOiQ.mjs';
import { $ as $$Main } from '../../chunks/Main_DAWW4KQW.mjs';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../../chunks/Footer_B1vQ6u90.mjs';
import { $ as $$Card } from '../../chunks/Card_D27OR-4M.mjs';
import { $ as $$Pagination } from '../../chunks/Pagination_BhxmcgeY.mjs';
import { g as getSortedPosts } from '../../chunks/getSortedPosts_BvTFy216.mjs';
import { S as SITE } from '../../chunks/config_JJhEf13K.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://jeoste.github.io/");
const getStaticPaths = async ({ paginate }) => {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  return paginate(getSortedPosts(posts), { pageSize: SITE.postPerPage });
};
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Articles | ${SITE.title}` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Main", $$Main, { "pageTitle": "Articles", "pageDesc": "Tous mes articles." }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<ul> ${page.data.map((data) => renderTemplate`${renderComponent($$result3, "Card", $$Card, { ...data })}`)} </ul> ` })} ${renderComponent($$result2, "Pagination", $$Pagination, { "page": page })} ${renderComponent($$result2, "Footer", $$Footer, { "noMarginTop": page.lastPage > 1 })} ` })}`;
}, "C:/GitHubPro/jeoste.github.io/src/pages/articles/[...page].astro", void 0);

const $$file = "C:/GitHubPro/jeoste.github.io/src/pages/articles/[...page].astro";
const $$url = "/articles/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
