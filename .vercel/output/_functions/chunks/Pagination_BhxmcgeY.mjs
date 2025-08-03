import { b as createAstro, c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from './astro/server_DdaBn-83.mjs';
import 'kleur/colors';
import { c as createSvgComponent } from './Footer_B1vQ6u90.mjs';
import { I as IconArrowRight } from './IconArrowRight_BmVEXYUo.mjs';
import { $ as $$LinkButton } from './LinkButton_DS9wxOgD.mjs';

const IconArrowLeft = createSvgComponent({"meta":{"src":"/_astro/IconArrowLeft.7rKuNJsZ.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M5 12l14 0\" /><path d=\"M5 12l6 6\" /><path d=\"M5 12l6 -6\" />"});

const $$Astro = createAstro("https://jeoste.github.io/");
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { page } = Astro2.props;
  return renderTemplate`${page.lastPage > 1 && renderTemplate`${maybeRenderHead()}<nav class="mt-auto mb-8 flex justify-center" aria-label="Pagination">${renderComponent($$result, "LinkButton", $$LinkButton, { "disabled": !page.url.prev, "href": page.url.prev, "class:list": ["mr-4 select-none", { "opacity-50": !page.url.prev }], "ariaLabel": "Previous" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "IconArrowLeft", IconArrowLeft, { "class": "inline-block" })}
Prev
` })}${page.currentPage} / ${page.lastPage}${renderComponent($$result, "LinkButton", $$LinkButton, { "disabled": !page.url.next, "href": page.url.next, "class:list": ["ml-4 select-none", { "opacity-50": !page.url.next }], "ariaLabel": "Next" }, { "default": ($$result2) => renderTemplate`
Next
${renderComponent($$result2, "IconArrowRight", IconArrowRight, { "class": "inline-block" })}` })}</nav>`}`;
}, "C:/GitHubPro/jeoste.github.io/src/components/Pagination.astro", void 0);

export { $$Pagination as $ };
