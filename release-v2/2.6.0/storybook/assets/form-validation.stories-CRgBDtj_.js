import{x as o,r,V as m,b as n,c as l}from"./iframe-Ds54rb_7.js";import"./vl-checkbox.component-B_Wb-zxb.js";import"./vl-datepicker.component-BU4fAy14.js";import"./vl-input-field-masked.component-DMyex7F8.js";import"./vl-radio.component-DE3tpZPo.js";import"./vl-radio-group.component-jPwXzViL.js";import"./vl-select.component-DYcw1fiu.js";import"./vl-select-rich.component-yLANTGDJ.js";import"./vl-textarea.component-fzCTRgKQ.js";import"./vl-textarea-rich.component-D_oG-Kmq.js";import"./vl-upload.component-wEbI9gTL.js";r([m,n,l]);const t={title:"Ontwerp/Form/Validation"},e=()=>o`
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
\``,...a.parameters?.docs?.source}}};const i=["ValidationRequired","ValidationPattern"],F=Object.freeze(Object.defineProperty({__proto__:null,ValidationPattern:a,ValidationRequired:e,__namedExportsOrder:i,default:t},Symbol.toStringTag,{value:"Module"}));export{e as V,a,F as f};
