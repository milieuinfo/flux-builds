import{b as o,r,V as l,c as m,d as n}from"./iframe-Cv28D2NX.js";import"./vl-checkbox.component-Cl-C3bHb.js";import"./vl-datepicker.component-gIhsylI-.js";import"./vl-fieldset.component-DAfAyWPV.js";import"./vl-input-field-masked.component-DrIBY--W.js";import"./vl-radio.component-BMGk1PbP.js";import"./vl-radio-group.component-BVQMwWW-.js";import"./vl-select.component-DAztbrd3.js";import"./vl-select-rich.component-Bt8ZFZBv.js";import"./vl-textarea.component-1SQHWSt5.js";import"./vl-textarea-rich.component-jUqK0iT2.js";import"./vl-upload.component-RSddKL9f.js";r([l,m,n]);const i={title:"Patronen/Formulier/validatie"},e=()=>o`
    <form onsubmit="return false;">
        <vl-form-message variant="annotation">Alle velden zijn verplicht.</vl-form-message>
        <vl-form-label for="voornaam" label="Voornaam"></vl-form-label>
        <vl-input-field id="voornaam" name="voornaam" autocomplete="given-name" required></vl-input-field>
        <vl-form-message for="voornaam" state="valueMissing"> Gelieve een voornaam in te vullen. </vl-form-message>
    </form>
`;e.storyName="formulier - validatie verplicht";const a=()=>o`
    <form onsubmit="return false;">
        <vl-form-label for="familienaam" label="Familienaam" annotation="(optioneel)"></vl-form-label>
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
`;a.storyName="formulier - validatie patroon";const t=["FormulierValidatieVerplicht","FormulierValidatiePatroon"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => html\`
    <form onsubmit="return false;">
        <vl-form-message variant="annotation">Alle velden zijn verplicht.</vl-form-message>
        <vl-form-label for="voornaam" label="Voornaam"></vl-form-label>
        <vl-input-field id="voornaam" name="voornaam" autocomplete="given-name" required></vl-input-field>
        <vl-form-message for="voornaam" state="valueMissing"> Gelieve een voornaam in te vullen. </vl-form-message>
    </form>
\``,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => html\`
    <form onsubmit="return false;">
        <vl-form-label for="familienaam" label="Familienaam" annotation="(optioneel)"></vl-form-label>
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
\``,...a.parameters?.docs?.source}}};const _=Object.freeze(Object.defineProperty({__proto__:null,FormulierValidatiePatroon:a,FormulierValidatieVerplicht:e,__namedExportsOrder:t,default:i},Symbol.toStringTag,{value:"Module"}));export{e as F,a,_ as f};
