import{x as o,r,V as m,b as l,c as i}from"./iframe-BgD7f6Cn.js";import"./vl-checkbox.component-BI-8WbFC.js";import"./vl-datepicker.component-BH6hFvSl.js";import"./vl-fieldset.component-D3CXkpKa.js";import"./vl-input-field-masked.component-D5ECsW97.js";import"./vl-radio.component-DxXjedGG.js";import"./vl-radio-group.component-CSjbPTDR.js";import"./vl-select.component-DD168V7z.js";import"./vl-select-rich.component-Bxf89huo.js";import"./vl-textarea.component-gjn4lrXx.js";import"./vl-textarea-rich.component-Cr5hLJgB.js";import"./vl-upload.component-ZyZbl5Gk.js";r([m,l,i]);const n={title:"Patronen/Formulier/validatie"},e=()=>o`
    <form onsubmit="return false;">
        <vl-form-label for="voornaam" label="Voornaam *"></vl-form-label>
        <vl-input-field id="voornaam" name="voornaam" autocomplete="given-name" required></vl-input-field>
        <vl-form-message for="voornaam" state="valueMissing"> Gelieve een voornaam in te vullen. </vl-form-message>
    </form>
`;e.storyName="formulier - validatie verplicht";const a=()=>o`
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
`;a.storyName="formulier - validatie patroon";e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => html\`
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
\``,...a.parameters?.docs?.source}}};const t=["FormulierValidatieVerplicht","FormulierValidatiePatroon"],_=Object.freeze(Object.defineProperty({__proto__:null,FormulierValidatiePatroon:a,FormulierValidatieVerplicht:e,__namedExportsOrder:t,default:n},Symbol.toStringTag,{value:"Module"}));export{e as F,a,_ as f};
