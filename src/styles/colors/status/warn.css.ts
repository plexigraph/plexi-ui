import { css } from "lit"
export default css`
:root{--gold-1: #070300;--gold-2: #0d0600;--gold-5: #190f00;--gold-10: #271900;--gold-20: #422d00;--gold-30: #5e4200;--gold-40: #7d5800;--gold-50: #9c6f00;--gold-60: #bd8700;--gold-70: #dca11d;--gold-80: #fbbc3b;--gold-90: #ffdea9;--gold-95: #ffeed8;--gold-98: #fff8f3;--gold-99: #fffbff;--pg-warn-fg: var(--gold-5);--pg-warn-fg-accent: var(--gold-20);--pg-warn-mid: var(--gold-40);--pg-warn-mid-accent: var(--gold-60);--pg-warn-bg-accent: var(--gold-80);--pg-warn-bg: var(--gold-95)}@media(prefers-color-scheme: dark){:root{--pg-warn-bg: var(--gold-5);--pg-warn-bg-accent: var(--gold-20);--pg-warn-mid-accent: var(--gold-40);--pg-warn-mid: var(--gold-60);--pg-warn-fg-accent: var(--gold-80);--pg-warn-fg: var(--gold-95)}}.warn{--pg-fg: var(--pg-warn-fg);--pg-fg-accent: var(--pg-warn-fg-accent);--pg-mid: var(--pg-warn-mid);--pg-mid-accent: var(--pg-warn-mid-accent);--pg-bg-accent: var(--pg-warn-bg-accent);--pg-bg: var(--pg-warn-bg);--pg-cursor: var(--pg-mid)}
`