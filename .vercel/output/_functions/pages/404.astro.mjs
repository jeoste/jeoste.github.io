import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DdaBn-83.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_B1vQ6u90.mjs';
import { $ as $$LinkButton } from '../chunks/LinkButton_DS9wxOgD.mjs';
import { S as SITE } from '../chunks/config_JJhEf13K.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `404 Not Found | ${SITE.title}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main id="main-content" class="mx-auto flex max-w-3xl flex-1 items-center justify-center"> <div class="mb-14 flex flex-col items-center justify-center"> <h1 class="text-9xl font-bold text-accent">404</h1> <span aria-hidden="true">¯\\_(ツ)_/¯</span> <p class="mt-4 text-2xl sm:text-3xl">Oops this page does not exist (yet?)</p> ${renderComponent($$result2, "LinkButton", $$LinkButton, { "href": "/", "class": "my-8 px-6 py-3 rounded-lg bg-accent text-background font-semibold text-lg shadow-md transition-all duration-200 hover:scale-105 hover:-translate-y-1 hover:bg-accent-hover hover:text-background focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-dashed", "aria-label": "Go back to homepage" }, { "default": ($$result3) => renderTemplate`
Go to homepage
` })} </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/GitHubPro/jeoste.github.io/src/pages/404.astro", void 0);

const $$file = "C:/GitHubPro/jeoste.github.io/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
