import{l as n,b as l,r as s,f as i,V as p}from"./iframe-CsVpDM3d.js";import"./vl-checkbox.component-dwTM-Wy8.js";import"./vl-datepicker.component-C2EPt_Iw.js";import"./vl-fieldset.component-D3SniA08.js";import"./vl-input-field-masked.component-Bp81wQF6.js";import"./vl-radio.component-Dq4icxGt.js";import"./vl-radio-group.component-zNwhQE1k.js";import"./vl-select.component-13WHQuOs.js";import"./vl-select-rich.component-CEJRQQv1.js";import"./vl-textarea.component-DW_fGO92.js";import"./vl-textarea-rich.component-CXyX5T1n.js";import"./vl-upload.component-CJwCXL7V.js";s([i,p]);const u={title:"Patronen/Zoeken/loading state"},m=1500,c=o=>{o.preventDefault();const r=o.currentTarget,t=r.querySelector("vl-button");if(t.hasAttribute("loading"))return;const a=r.querySelector("[data-search-status]");t.toggleAttribute("loading",!0),a.textContent="Bezig met zoeken…",window.setTimeout(()=>{t.toggleAttribute("loading",!1),a.textContent="8 resultaten geladen."},m)},e=()=>l`
    <style>
        ${n}
    </style>
    <form role="search" aria-label="Zoeken op deze site" @submit=${c}>
        <div class="vl-group vl-group--input-group">
            <vl-input-field input-group block type="search" name="zoekterm" label="Zoekterm"></vl-input-field>
            <vl-button input-group icon="search" type="submit" label="Zoeken" tertiary></vl-button>
        </div>
        <p data-search-status role="status" aria-live="polite"></p>
    </form>
`;e.storyName="zoeken - loading state";e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => html\`
    <style>
        \${vlGroupStyles}
    </style>
    <form role="search" aria-label="Zoeken op deze site" @submit=\${handleSearch}>
        <div class="vl-group vl-group--input-group">
            <vl-input-field input-group block type="search" name="zoekterm" label="Zoekterm"></vl-input-field>
            <vl-button input-group icon="search" type="submit" label="Zoeken" tertiary></vl-button>
        </div>
        <p data-search-status role="status" aria-live="polite"></p>
    </form>
\``,...e.parameters?.docs?.source}}};const d=["ZoekenLoadingState"],L=Object.freeze(Object.defineProperty({__proto__:null,ZoekenLoadingState:e,__namedExportsOrder:d,default:u},Symbol.toStringTag,{value:"Module"}));export{e as Z,L as z};
