import{x as o,r,V as m,b as n,c as l}from"./iframe-FlvNZLqI.js";import"./vl-checkbox.component-O-6c3-uw.js";import"./vl-datepicker.component-DI-MKEnX.js";import"./vl-fieldset.component-DeeFbOFG.js";import"./vl-input-field-masked.component-D8PAcClr.js";import"./vl-radio.component-BnTiVhkS.js";import"./vl-radio-group.component-DtZQv1s3.js";import"./vl-select.component-BzFfrDA1.js";import"./vl-select-rich.component-C8ulU5S-.js";import"./vl-textarea.component-CyGK04gO.js";import"./vl-textarea-rich.component-DleGgzbo.js";import"./vl-upload.component-BjH8U9s-.js";r([m,n,l]);const t={title:"Ontwerp/Form/Validation"},e=()=>o`
    <form onsubmit="return false;">
        <vl-form-label for="voornaam" label="Voornaam *"></vl-form-label>
        <vl-input-field id="voornaam" name="voornaam" autocomplete="given-name" required></vl-input-field>
        <vl-form-message for="voornaam" state="valueMissing"> Gelieve een voornaam in te vullen. </vl-form-message>
    </form>
`,a=()=>o`
    <form onsubmit="return false;">
        <vl-form-label for="familienaam" label="Familienaam"></vl-form-label>
        <vl-input-field
            id="familienaam"
            name="familienaam"
            autocomplete="family-name"
            pattern="^[a-zA-Z]*$"
        ></vl-input-field>
        <vl-form-message for="familienaam" state="patternMismatch">
            Gelieve geen nummers of speciale tekens in te vullen.
        </vl-form-message>
    </form>
`;e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => html\`
    <form onsubmit="return false;">
        <vl-form-label for="voornaam" label="Voornaam *"></vl-form-label>
        <vl-input-field id="voornaam" name="voornaam" autocomplete="given-name" required></vl-input-field>
        <vl-form-message for="voornaam" state="valueMissing"> Gelieve een voornaam in te vullen. </vl-form-message>
    </form>
\``,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => html\`
    <form onsubmit="return false;">
        <vl-form-label for="familienaam" label="Familienaam"></vl-form-label>
        <vl-input-field
            id="familienaam"
            name="familienaam"
            autocomplete="family-name"
            pattern="^[a-zA-Z]*$"
        ></vl-input-field>
        <vl-form-message for="familienaam" state="patternMismatch">
            Gelieve geen nummers of speciale tekens in te vullen.
        </vl-form-message>
    </form>
\``,...a.parameters?.docs?.source}}};const i=["ValidationRequired","ValidationPattern"],M=Object.freeze(Object.defineProperty({__proto__:null,ValidationPattern:a,ValidationRequired:e,__namedExportsOrder:i,default:t},Symbol.toStringTag,{value:"Module"}));export{e as V,a,M as f};
