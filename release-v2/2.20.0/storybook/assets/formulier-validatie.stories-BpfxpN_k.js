import{b as o,r,V as m,c as l,d as i}from"./iframe-BoAZAq4i.js";import"./vl-checkbox.component-BOXqtNWb.js";import"./vl-datepicker.component-DjlXFHEl.js";import"./vl-fieldset.component-ChHjnN1i.js";import"./vl-input-field-masked.component-xgAwa1Uf.js";import"./vl-radio.component-DGlLMB-h.js";import"./vl-radio-group.component-D2h4yERQ.js";import"./vl-select.component-DubDIdHF.js";import"./vl-select-rich.component-B-ryN6LK.js";import"./vl-textarea.component-Cv_HVWwa.js";import"./vl-textarea-rich.component-Bw6R3_t6.js";import"./vl-upload.component-DPyi8C5w.js";r([m,l,i]);const n={title:"Patronen/Formulier/validatie"},e=()=>o`
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
