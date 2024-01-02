import { css } from "lit"
export default css` :root{--rose-1: #100000;--rose-2: #190000;--rose-5: #2a0301;--rose-10: #390b05;--rose-20: #542017;--rose-30: #70362b;--rose-40: #8d4c41;--rose-50: #aa6458;--rose-60: #c87d70;--rose-70: #e79788;--rose-80: #ffb4a7;--rose-90: #ffdad4;--rose-95: #ffedea;--rose-98: #fff8f6;--rose-99: #fffbff;--pg-rose-fg: var(--rose-5);--pg-rose-fg-accent: var(--rose-20);--pg-rose-mid: var(--rose-40);--pg-rose-mid-accent: var(--rose-60);--pg-rose-bg-accent: var(--rose-80);--pg-rose-bg: var(--rose-95)}@media(prefers-color-scheme: dark){:root{--pg-rose-bg: var(--rose-5);--pg-rose-bg-accent: var(--rose-20);--pg-rose-mid-accent: var(--rose-40);--pg-rose-mid: var(--rose-60);--pg-rose-fg-accent: var(--rose-80);--pg-rose-fg: var(--rose-95)}}.rose{--pg-fg: var(--pg-rose-fg);--pg-fg-accent: var(--pg-rose-fg-accent);--pg-mid: var(--pg-rose-mid);--pg-mid-accent: var(--pg-rose-mid-accent);--pg-bg-accent: var(--pg-rose-bg-accent);--pg-bg: var(--pg-rose-bg);--pg-cursor: var(--pg-mid)}`