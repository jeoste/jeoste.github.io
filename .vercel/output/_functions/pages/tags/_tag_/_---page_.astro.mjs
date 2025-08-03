import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, e as addAttribute, f as renderTransition, m as maybeRenderHead } from '../../../chunks/astro/server_DdaBn-83.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../../chunks/_astro_content_D-55IOiQ.mjs';
import { $ as $$Main } from '../../../chunks/Main_DAWW4KQW.mjs';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../../../chunks/Footer_B1vQ6u90.mjs';
import { $ as $$Card } from '../../../chunks/Card_D27OR-4M.mjs';
import { $ as $$Pagination } from '../../../chunks/Pagination_BhxmcgeY.mjs';
import { g as getUniqueTags } from '../../../chunks/getUniqueTags_COKJUI18.mjs';
import { g as getSortedPosts } from '../../../chunks/getSortedPosts_BvTFy216.mjs';
import { a as slugifyAll } from '../../../chunks/postFilter_CqXOWmtw.mjs';
import { S as SITE } from '../../../chunks/config_JJhEf13K.mjs';
/* empty css                                       */
export { renderers } from '../../../renderers.mjs';

const getPostsByTag = (posts, tag) => getSortedPosts(
  posts.filter((post) => slugifyAll(post.data.tags).includes(tag))
);

const $$Astro = createAstro("https://jeoste.github.io/");
async function getStaticPaths({ paginate }) {
  const posts = await getCollection("blog");
  const tags = getUniqueTags(posts);
  return tags.flatMap(({ tag, tagName }) => {
    const tagPosts = getPostsByTag(posts, tag);
    return paginate(tagPosts, {
      params: { tag },
      props: { tagName },
      pageSize: SITE.postPerPage
    });
  });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const params = Astro2.params;
  const { tag } = params;
  const { page, tagName } = Astro2.props;
  if (!page) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Tag: ${tagName} | ${SITE.title}` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Main", $$Main, { "pageTitle": [`Tag:`, `${tagName}`], "titleTransition": tag, "pageDesc": `All the articles with the tag "${tagName}".` }, { "default": async ($$result3) => renderTemplate`  ${maybeRenderHead()}<ul> ${page.data?.map((data) => renderTemplate`${renderComponent($$result3, "Card", $$Card, { ...data })}`) || []} </ul> `, "title": async ($$result3) => renderTemplate`<h1${addAttribute(renderTransition($$result3, "7yucybdb", "", tag), "data-astro-transition-scope")}>${`Tag:${tag}`}</h1>` })} ${renderComponent($$result2, "Pagination", $$Pagination, { "page": page })} ${renderComponent($$result2, "Footer", $$Footer, { "noMarginTop": (page.lastPage || 1) > 1 })} ` })}`;
}, "C:/GitHubPro/jeoste.github.io/src/pages/tags/[tag]/[...page].astro", "self");

const $$file = "C:/GitHubPro/jeoste.github.io/src/pages/tags/[tag]/[...page].astro";
const $$url = "/tags/[tag]/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
