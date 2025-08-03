import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, r as renderComponent, F as Fragment, a as renderTemplate } from './astro/server_DdaBn-83.mjs';
import 'kleur/colors';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import timezone from 'dayjs/plugin/timezone.js';
import relativeTime from 'dayjs/plugin/relativeTime.js';
import { S as SITE } from './config_JJhEf13K.mjs';

function calculateReadingTime(content, wordsPerMinute = 200) {
  const words = content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(words / wordsPerMinute);
  return readingTime;
}
function formatReadingTime(minutes) {
  if (minutes === 1) {
    return "1 min read time";
  }
  return `${minutes} min read time`;
}

dayjs.extend(relativeTime);
function getRelativeTime(date) {
  const dayjsDate = dayjs(date);
  const now = dayjs();
  const diffInYears = now.diff(dayjsDate, "year");
  const diffInMonths = now.diff(dayjsDate, "month");
  const diffInWeeks = now.diff(dayjsDate, "week");
  const diffInDays = now.diff(dayjsDate, "day");
  const diffInHours = now.diff(dayjsDate, "hour");
  const diffInMinutes = now.diff(dayjsDate, "minute");
  const isFuture = diffInYears < 0 || diffInMonths < 0 || diffInWeeks < 0 || diffInDays < 0 || diffInHours < 0 || diffInMinutes < 0;
  const absYears = Math.abs(diffInYears);
  const absMonths = Math.abs(diffInMonths);
  const absWeeks = Math.abs(diffInWeeks);
  const absDays = Math.abs(diffInDays);
  const absHours = Math.abs(diffInHours);
  const absMinutes = Math.abs(diffInMinutes);
  if (absYears >= 1) {
    const timeText = absYears === 1 ? "a year" : `${absYears} years`;
    return isFuture ? `in ${timeText}` : `${timeText} ago`;
  } else if (absMonths >= 1) {
    const timeText = absMonths === 1 ? "a month" : `${absMonths} months`;
    return isFuture ? `in ${timeText}` : `${timeText} ago`;
  } else if (absWeeks >= 1) {
    const timeText = absWeeks === 1 ? "a week" : `${absWeeks} weeks`;
    return isFuture ? `in ${timeText}` : `${timeText} ago`;
  } else if (absDays >= 1) {
    if (absDays === 1) {
      return isFuture ? "tomorrow" : "yesterday";
    } else {
      const timeText = `${absDays} days`;
      return isFuture ? `in ${timeText}` : `${timeText} ago`;
    }
  } else if (absHours >= 1) {
    const timeText = absHours === 1 ? "an hour" : `${absHours} hours`;
    return isFuture ? `in ${timeText}` : `${timeText} ago`;
  } else if (absMinutes >= 1) {
    const timeText = absMinutes === 1 ? "a minute" : `${absMinutes} minutes`;
    return isFuture ? `in ${timeText}` : `${timeText} ago`;
  } else {
    return isFuture ? "in a few seconds" : "a few seconds ago";
  }
}

const $$Astro = createAstro("https://jeoste.github.io/");
const $$Datetime = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Datetime;
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.extend(relativeTime);
  const {
    pubDatetime,
    modDatetime,
    size = "sm",
    class: className = "",
    timezone: postTimezone,
    showRelative = true
  } = Astro2.props;
  const pubDate = dayjs(pubDatetime).tz(postTimezone || SITE.timezone);
  const modDate = modDatetime ? dayjs(modDatetime).tz(postTimezone || SITE.timezone) : null;
  const formatDate = (date) => date.format("D MMM, YYYY");
  const formatTime = (date) => date.format("hh:mm A");
  const pubRelativeDate = getRelativeTime(pubDatetime);
  const modRelativeDate = modDatetime ? getRelativeTime(modDatetime) : null;
  const shouldShowRelative = showRelative;
  const displayPubDate = shouldShowRelative ? pubRelativeDate : formatDate(pubDate);
  const displayModDate = modDatetime && shouldShowRelative ? modRelativeDate : modDatetime ? formatDate(modDate) : null;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["flex items-end space-x-2 opacity-80", className], "class:list")}> <span${addAttribute(["text-sm italic", { "sm:text-base": size === "lg" }], "class:list")}> <span>Publication date:${" "}</span> <time${addAttribute(pubDate.toISOString(), "datetime")}${addAttribute(`${formatDate(pubDate)} | ${formatTime(pubDate)}`, "title")}> ${displayPubDate} </time> ${!shouldShowRelative && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <span aria-hidden="true"> | </span> <span class="sr-only">&nbsp;at&nbsp;</span> <span class="text-nowrap">${formatTime(pubDate)}</span> ` })}`} ${modDatetime && modDate && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <span class="mx-2">•</span> <span>Last update:${" "}</span> <time${addAttribute(modDate.toISOString(), "datetime")}${addAttribute(`${formatDate(modDate)} | ${formatTime(modDate)}`, "title")}> ${displayModDate} </time> ${!shouldShowRelative && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <span aria-hidden="true"> | </span> <span class="sr-only">&nbsp;at&nbsp;</span> <span class="text-nowrap">${formatTime(modDate)}</span> ` })}`}` })}`} </span> </div>`;
}, "C:/GitHubPro/jeoste.github.io/src/components/Datetime.astro", void 0);

export { $$Datetime as $, calculateReadingTime as c, formatReadingTime as f };
