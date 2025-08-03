import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DdaBn-83.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_B1vQ6u90.mjs';
import { $ as $$Main } from '../chunks/Main_DAWW4KQW.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "";
  const pageDesc = "> Feel free to contact me for any inquiries.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Main", $$Main, { "pageTitle": pageTitle, "pageDesc": pageDesc }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="prose prose-lg prose-slate dark:prose-invert"> <h2>Contact form</h2> </div> ${renderComponent($$result3, "ContactForm", null, { "recaptchaSiteKey": "6LcLeoUrAAAAAJeks1ZOCrTlhLuFIUU0ewMT8Tbc", "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/ContactForm.tsx", "client:component-export": "default" })} ` })} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/GitHubPro/jeoste.github.io/src/pages/contact.astro", void 0);
const $$file = "C:/GitHubPro/jeoste.github.io/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
