import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, r as renderComponent, s as spreadAttributes, a as renderTemplate } from './astro/server_DdaBn-83.mjs';
import { s as slugifyStr } from './postFilter_CqXOWmtw.mjs';
import { a as getPath } from './getSortedPosts_BvTFy216.mjs';
import { c as calculateReadingTime, f as formatReadingTime, $ as $$Datetime } from './Datetime_DGlCk07k.mjs';

const $$Astro = createAstro("https://jeoste.github.io/");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { variant = "h2", data, id, filePath, body } = Astro2.props;
  const { title, description, pubDatetime, modDatetime, timezone } = data;
  const readingTimeMinutes = calculateReadingTime(body || "");
  const readingTimeText = formatReadingTime(readingTimeMinutes);
  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    class: "text-lg font-medium decoration-dashed hover:underline"
  };
  return renderTemplate`${maybeRenderHead()}<li class="my-6"> <a${addAttribute(getPath(id, filePath), "href")} class="inline-block text-lg font-medium text-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"> ${variant === "h2" ? renderTemplate`<h2${spreadAttributes(headerProps)}>${title}</h2>` : renderTemplate`<h3${spreadAttributes(headerProps)}>${title}</h3>`} </a> <div class="flex items-end space-x-2 opacity-80 text-skin-base/70"> ${renderComponent($$result, "Datetime", $$Datetime, { "pubDatetime": pubDatetime, "modDatetime": modDatetime, "timezone": timezone })} <span class="mx-2 text-sm italic">•</span> <span class="text-sm italic">${readingTimeText}</span> </div> <p>${description}</p> </li>`;
}, "C:/GitHubPro/jeoste.github.io/src/components/Card.astro", void 0);

export { $$Card as $ };
