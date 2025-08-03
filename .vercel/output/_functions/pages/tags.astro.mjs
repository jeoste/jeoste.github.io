import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DdaBn-83.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_D-55IOiQ.mjs';
import { $ as $$Main } from '../chunks/Main_DAWW4KQW.mjs';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_B1vQ6u90.mjs';
import { $ as $$Tag } from '../chunks/Tag_VfbR6h0e.mjs';
import { g as getUniqueTags } from '../chunks/getUniqueTags_COKJUI18.mjs';
import { S as SITE } from '../chunks/config_JJhEf13K.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("blog");
  let tags = getUniqueTags(posts);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Tags | ${SITE.title}` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Main", $$Main, { "pageTitle": "Tags", "pageDesc": "All the tags used in posts." }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<ul> ${tags.map(({ tag, tagName }) => renderTemplate`${renderComponent($$result3, "Tag", $$Tag, { "tag": tag, "tagName": tagName, "size": "lg" })}`)} </ul> ` })} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/GitHubPro/jeoste.github.io/src/pages/tags/index.astro", void 0);

const $$file = "C:/GitHubPro/jeoste.github.io/src/pages/tags/index.astro";
const $$url = "/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
