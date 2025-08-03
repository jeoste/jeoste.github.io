import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as renderScript, e as addAttribute, u as unescapeHTML } from '../chunks/astro/server_DdaBn-83.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_D-55IOiQ.mjs';
import { c as createSvgComponent, $ as $$Layout, a as $$Header, d as IconKakao, e as IconLinkedin, f as IconGitHub, I as IconMail, g as $$Hr, b as $$Footer } from '../chunks/Footer_B1vQ6u90.mjs';
import { $ as $$LinkButton } from '../chunks/LinkButton_DS9wxOgD.mjs';
import { $ as $$Card } from '../chunks/Card_D27OR-4M.mjs';
import { g as getSortedPosts } from '../chunks/getSortedPosts_BvTFy216.mjs';
import { I as IconArrowRight } from '../chunks/IconArrowRight_BmVEXYUo.mjs';
import { S as SITE } from '../chunks/config_JJhEf13K.mjs';
export { renderers } from '../renderers.mjs';

const IconRss = createSvgComponent({"meta":{"src":"/_astro/IconRss.BYWRoVjV.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-rss"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M4 4a16 16 0 0 1 16 16\" /><path d=\"M4 11a9 9 0 0 1 9 9\" />"});

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);
  const recentPosts = sortedPosts.filter(({ data }) => !data.featured);
  const currentProjects = [
    {
      id: "data-consulting",
      collection: "portfolio",
      data: {
        title: "Data Consultant",
        description: "Clients are french & european companies. <br>The mission is to synchronize their business applications to the information system in order to optimize their supply chain, logistics and customer service."
      },
      slug: "/portfolio#data-consulting"
    },
    {
      id: "startup-entrepreneurship",
      collection: "portfolio",
      data: {
        title: "Startup & Entrepreneurship",
        description: "Developing a Data Platform that focus on Observability for B2B companies. <br>Know what, where, when and why your data contains errors, your dataflows are failing, your information system has issues and how to solve them.<br> Check by yourself : <a href='https://focusdata.dev' target='_blank' class='text-accent hover:underline transition-colors'>focusdata.dev</a>"
      },
      slug: "/portfolio#startup-entrepreneurship"
    },
    {
      id: "trading",
      collection: "portfolio",
      data: {
        title: "Trading",
        description: "When the market offers good opportunities, I trade on the crypto market. I'm using my own trading indicators built on TradingView.<br>My strategy is based on high timeframe reversal (Daily or Weekly) to short the market."
      },
      slug: "/portfolio#trading"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main id="main-content" data-layout="index"> <section id="hero" class="pt-8 pb-6"> <h1 class="my-4 inline-block text-4xl font-bold sm:my-8 sm:text-5xl">
Bienvenue!
<a target="_blank" href="/rss.xml" class="ml-2 inline-block" aria-label="rss feed" title="RSS Feed"> ${renderComponent($$result2, "IconRss", IconRss, { "width": 20, "height": 20, "class": "scale-125 stroke-accent stroke-3" })} <span class="sr-only">RSS Feed</span> </a> </h1> <div class="mb-6 flex items-start gap-6"> <img src="/assets/profile.jpg" alt="Profil" class="h-32 w-32 rounded-full border-4 border-accent object-cover"> <div class="flex-1"> <div class="mb-4"> <h2 class="mb-2 text-2xl font-semibold">Jeoffrey Stéphan</h2> <p class="text-lg text-accent">Data Consultant & Entrepreneur & Trader</p> </div> <div class="mb-4"> <p class="text-gray-600 dark:text-gray-300">
With eight years of consulting experience, your data challenges are
              no longer a problem. Whether it’s architecture, design, auditing,
              development, testing, or business process definition, I’m here to
              support you on your journey.
</p> </div> <div class="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-300"> <div class="flex items-center gap-2"> ${renderComponent($$result2, "IconKakao", IconKakao, { "class": "h-5 w-5" })} <a href="https://open.kakao.com/jeoffrey" target="_blank" class="transition-colors hover:text-accent">
Kakao ID : jeoffrey
</a> </div> <div class="flex items-center gap-2"> ${renderComponent($$result2, "IconLinkedin", IconLinkedin, { "class": "h-5 w-5" })} <a href="https://linkedin.com/in/jeoffrey-stephan/" target="_blank" class="transition-colors hover:text-accent">
linkedin.com/in/jeoffrey-stephan/
</a> </div> <div class="flex items-center gap-2"> ${renderComponent($$result2, "IconGitHub", IconGitHub, { "class": "h-5 w-5" })} <a href="https://github.com/jeoste" target="_blank" class="transition-colors hover:text-accent">
github.com/jeoste
</a> </div> <div class="flex items-center gap-2"> ${renderComponent($$result2, "IconMail", IconMail, { "class": "h-5 w-5" })} <a href="mailto:jeoffrey.stephan@gmail.com" target="_blank" class="transition-colors hover:text-accent">
jeoffrey.stephan@gmail.com
</a> </div> <div class="flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path> </svg> <span>From France</span> </div> <div class="mt-4 flex items-center gap-2"> <a href="https://rxresu.me/jeoste/en-data-consultant" target="_blank" class="inline-flex items-center justify-center rounded-lg bg-accent/10 px-4 py-2 text-accent border border-accent/20 transition-all hover:bg-accent/20 hover:border-accent/40">
Resume
${renderComponent($$result2, "IconArrowRight", IconArrowRight, { "class": "ml-2 h-4 w-4 flex-shrink-0" })} </a> </div> </div> </div> </div> ${renderComponent($$result2, "Hr", $$Hr, { "noPadding": true })} ${recentPosts.length > 0 && renderTemplate`<section id="recent-posts" class="pt-12 pb-6"> <h2 class="text-2xl font-semibold tracking-wide">Recent Posts</h2> <ul> ${recentPosts.map(
    (data, index) => index < SITE.postPerIndex && renderTemplate`${renderComponent($$result2, "Card", $$Card, { "variant": "h3", ...data })}`
  )} </ul> </section>`} <div class="my-8 text-center"> ${renderComponent($$result2, "LinkButton", $$LinkButton, { "href": "/articles" }, { "default": async ($$result3) => renderTemplate`
All Posts
${renderComponent($$result3, "IconArrowRight", IconArrowRight, { "class": "inline-block" })} ` })} </div> ${renderComponent($$result2, "Hr", $$Hr, { "noPadding": true })} ${currentProjects.length > 0 && renderTemplate`<section id="current-projects" class="pt-12 pb-6"> <h2 class="text-2xl font-semibold tracking-wide">
Current Projects
</h2> <ul class="space-y-6"> ${currentProjects.map((project) => renderTemplate`<li class="my-6"> <a${addAttribute(project.slug, "href")} class="inline-block text-lg font-medium text-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"> <h3 class="text-lg font-medium decoration-dashed hover:underline"> ${project.data.title} </h3> </a> <p class="text-gray-600 dark:text-gray-300">${unescapeHTML(project.data.description)}</p> </li>`)} </ul> </section>`} </section> ${renderComponent($$result2, "Footer", $$Footer, {})} </main> ${renderScript($$result2, "C:/GitHubPro/jeoste.github.io/src/pages/index.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/GitHubPro/jeoste.github.io/src/pages/index.astro", void 0);

const $$file = "C:/GitHubPro/jeoste.github.io/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
