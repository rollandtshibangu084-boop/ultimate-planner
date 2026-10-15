import { cp, mkdir, rm } from 'node:fs/promises';
const out = new URL('../www/', import.meta.url);
await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
for (const item of ['index.html','manifest.webmanifest','service-worker.js','icons']) { await cp(new URL(`../${item}`, import.meta.url), new URL(`../www/${item}`, import.meta.url), { recursive: true }); }
console.log('Built ULTIMATE PLANNER by Ro into www/');
