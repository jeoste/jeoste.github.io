import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CSmuO3pl.mjs';
import { manifest } from './manifest_DF5EXXfz.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/send-mail.astro.mjs');
const _page3 = () => import('./pages/articles.astro.mjs');
const _page4 = () => import('./pages/articles/_---page_.astro.mjs');
const _page5 = () => import('./pages/articles/_---slug_.astro.mjs');
const _page6 = () => import('./pages/contact.astro.mjs');
const _page7 = () => import('./pages/og.png.astro.mjs');
const _page8 = () => import('./pages/portfolio.astro.mjs');
const _page9 = () => import('./pages/robots.txt.astro.mjs');
const _page10 = () => import('./pages/rss.xml.astro.mjs');
const _page11 = () => import('./pages/tags/_tag_/_---page_.astro.mjs');
const _page12 = () => import('./pages/tags.astro.mjs');
const _page13 = () => import('./pages/vault.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.12.6_@types+node@24_4b0b243eeb6beefd9575ee07a242c1d7/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/send-mail.ts", _page2],
    ["src/pages/articles.astro", _page3],
    ["src/pages/articles/[...page].astro", _page4],
    ["src/pages/articles/[...slug]/index.astro", _page5],
    ["src/pages/contact.astro", _page6],
    ["src/pages/og.png.ts", _page7],
    ["src/pages/portfolio.astro", _page8],
    ["src/pages/robots.txt.ts", _page9],
    ["src/pages/rss.xml.ts", _page10],
    ["src/pages/tags/[tag]/[...page].astro", _page11],
    ["src/pages/tags/index.astro", _page12],
    ["src/pages/vault.astro", _page13],
    ["src/pages/index.astro", _page14]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "ffab3697-0ebe-42fc-9dcd-0507a35edca8",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
