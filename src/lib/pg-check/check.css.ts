import { css } from "lit"
export default css` pg-check-inner label{--size: 16px;--neg-size-05: -8px;--padding: 0px;--color: var(--pg-fg-accent);display:flex;padding:8px;align-items:center;border-radius:4px;gap:8px;min-width:fit-content;white-space:nowrap;width:100%;color:var(--color);position:relative}pg-check-inner input{height:calc(var(--size) - 4px);width:calc(var(--size) - 4px);margin:2px;position:relative}pg-check-inner input::before{content:"";display:inline-block;position:absolute;top:-2px;left:-2px;width:var(--size);height:var(--size);border-radius:4px;border:2px solid var(--color);background-color:var(--pg-bg);transition:background-color .2s ease}pg-check-inner input::after{content:"";display:inline-block;position:absolute;width:calc(var(--size) - 4px);height:calc(var(--size) - 4px);border-radius:1px;background-color:var(--color);transform-origin:50% 50%;transform:scale(0);transition:transform .2s ease,background-color .2s ease}@media(hover: hover){pg-check-inner input:hover::after{transform:scale(0.33)}pg-check-inner input:hover:checked::after{background-color:var(--pg-mid)}pg-check-inner input:hover:checked:disabled::after{background-color:var(--color)}}pg-check-inner input:checked::after{transform:scale(1);background:var(--color)}pg-check-inner label:has(input:disabled){background-color:var(--pg-bg);--color: var(--pg-mid-accent)}pg-check-inner input:disabled:hover::after{transform:scale(0)}pg-check-inner input:disabled:hover:checked::after{transform:scale(1)}pg-check-inner label:has(input:invalid){--pg-fg: var(--pg-error-fg);--pg-fg-accent: var(--pg-error-fg-accent);--pg-mid: var(--pg-error-mid);--pg-mid-accent: var(--pg-error-mid-accent);--pg-bg-accent: var(--pg-error-bg-accent);--pg-bg: var(--pg-error-bg);--pg-cursor: var(--pg-mid)}pg-check-inner label:has(input:invalid)::after{content:"is required.";position:absolute;top:70%;left:calc(var(--size)*3);font-size:12px}pg-check-inner label:has(input:invalid:checked)::after{content:"should be unchecked."}`