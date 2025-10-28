import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_C5TXy_38.mjs';
import { manifest } from './manifest_CqBeeuPg.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/sponsor.astro.mjs');
const _page3 = () => import('./pages/blog.astro.mjs');
const _page4 = () => import('./pages/contacts.astro.mjs');
const _page5 = () => import('./pages/en/blog.astro.mjs');
const _page6 = () => import('./pages/en/contacts.astro.mjs');
const _page7 = () => import('./pages/en/sponsor-join.astro.mjs');
const _page8 = () => import('./pages/en/team.astro.mjs');
const _page9 = () => import('./pages/en.astro.mjs');
const _page10 = () => import('./pages/sponsor-join.astro.mjs');
const _page11 = () => import('./pages/team.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/sponsor.ts", _page2],
    ["src/pages/blog/index.astro", _page3],
    ["src/pages/contacts.astro", _page4],
    ["src/pages/en/blog/index.astro", _page5],
    ["src/pages/en/contacts.astro", _page6],
    ["src/pages/en/sponsor-join.astro", _page7],
    ["src/pages/en/team.astro", _page8],
    ["src/pages/en/index.astro", _page9],
    ["src/pages/sponsor-join.astro", _page10],
    ["src/pages/team.astro", _page11],
    ["src/pages/index.astro", _page12]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "5c3afd21-0bb4-4082-bbbc-5eb5cd2eafd6",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
