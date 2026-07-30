import{k as n,x as l,r as s,d as i,V as p}from"./iframe-DynOw9qF.js";import"./vl-checkbox.component-BFWyhwF-.js";import"./vl-datepicker.component-CDbT1ywF.js";import"./vl-fieldset.component-Cn1m5Esg.js";import"./vl-input-field-masked.component-DdXfAdAC.js";import"./vl-radio.component-V9fz9CTI.js";import"./vl-radio-group.component-CiIaRUE-.js";import"./vl-select.component-DladKYQf.js";import"./vl-select-rich.component-CaoTbphr.js";import"./vl-textarea.component-DgY8k7Uy.js";import"./vl-textarea-rich.component-CdstHoUA.js";import"./vl-upload.component-CxW_ou6b.js";s([i,p]);const u={title:"Patronen/Zoeken/loading state"},m=1500,c=o=>{o.preventDefault();const r=o.currentTarget,t=r.querySelector("vl-button");if(t.hasAttribute("loading"))return;const a=r.querySelector("[data-search-status]");t.toggleAttribute("loading",!0),a.textContent="Bezig met zoeken…",window.setTimeout(()=>{t.toggleAttribute("loading",!1),a.textContent="8 resultaten geladen."},m)},e=()=>l`
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
\``,...e.parameters?.docs?.source}}};const d=["ZoekenLoadingState"],C=Object.freeze(Object.defineProperty({__proto__:null,ZoekenLoadingState:e,__namedExportsOrder:d,default:u},Symbol.toStringTag,{value:"Module"}));export{e as Z,C as z};
