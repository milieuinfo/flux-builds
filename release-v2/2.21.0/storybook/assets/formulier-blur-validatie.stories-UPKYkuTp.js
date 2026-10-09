import{b as r,r as o,V as m,c as l,d as n}from"./iframe-CsVpDM3d.js";import"./vl-checkbox.component-dwTM-Wy8.js";import"./vl-datepicker.component-C2EPt_Iw.js";import"./vl-fieldset.component-D3SniA08.js";import"./vl-input-field-masked.component-Bp81wQF6.js";import"./vl-radio.component-Dq4icxGt.js";import"./vl-radio-group.component-zNwhQE1k.js";import"./vl-select.component-13WHQuOs.js";import"./vl-select-rich.component-CEJRQQv1.js";import"./vl-textarea.component-DW_fGO92.js";import"./vl-textarea-rich.component-CXyX5T1n.js";import"./vl-upload.component-CJwCXL7V.js";o([m,l,n]);const i={title:"Patronen/Formulier/blur validatie"},e=()=>r`
    <form onsubmit="return false;">
        <vl-form-label for="voornaam" label="Voornaam *"></vl-form-label>
        <vl-input-field
            id="voornaam"
            name="voornaam"
            autocomplete="given-name"
            required
            min-length="3"
            pattern="^[a-zA-Z]*$"
            blur-validation
        ></vl-input-field>
        <vl-form-message for="voornaam" state="valueMissing">Gelieve een voornaam in te vullen.</vl-form-message>
        <vl-form-message for="voornaam" state="tooShort">Gelieve minimum 3 karakters te gebruiken.</vl-form-message>
        <vl-form-message for="voornaam" state="patternMismatch"
            >Gelieve geen nummers of speciale tekens in te vullen.</vl-form-message
        >
    </form>
`;e.storyName="formulier - blur-validatie per veld";const a=()=>r`
    <form onsubmit="return false;" blur-validation>
        <vl-form-label for="voornaam" label="Voornaam *"></vl-form-label>
        <vl-input-field id="voornaam" name="voornaam" autocomplete="given-name" required min-length="3">
        </vl-input-field>
        <vl-form-message for="voornaam" state="valueMissing">Gelieve een voornaam in te vullen.</vl-form-message>
        <vl-form-message for="voornaam" state="tooShort">Gelieve minimum 3 karakters te gebruiken.</vl-form-message>

        <vl-form-label for="familienaam" label="Familienaam *"></vl-form-label>
        <vl-input-field id="familienaam" name="familienaam" autocomplete="family-name" required min-length="2">
        </vl-input-field>
        <vl-form-message for="familienaam" state="valueMissing">Gelieve een familienaam in te vullen.</vl-form-message>
        <vl-form-message for="familienaam" state="tooShort">Gelieve minimum 2 karakters te gebruiken.</vl-form-message>
    </form>
`;a.storyName="formulier - blur-validatie op de form";e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => html\`
    <form onsubmit="return false;">
        <vl-form-label for="voornaam" label="Voornaam *"></vl-form-label>
        <vl-input-field
            id="voornaam"
            name="voornaam"
            autocomplete="given-name"
            required
            min-length="3"
            pattern="^[a-zA-Z]*$"
            blur-validation
        ></vl-input-field>
        <vl-form-message for="voornaam" state="valueMissing">Gelieve een voornaam in te vullen.</vl-form-message>
        <vl-form-message for="voornaam" state="tooShort">Gelieve minimum 3 karakters te gebruiken.</vl-form-message>
        <vl-form-message for="voornaam" state="patternMismatch"
            >Gelieve geen nummers of speciale tekens in te vullen.</vl-form-message
        >
    </form>
\``,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => html\`
    <form onsubmit="return false;" blur-validation>
        <vl-form-label for="voornaam" label="Voornaam *"></vl-form-label>
        <vl-input-field id="voornaam" name="voornaam" autocomplete="given-name" required min-length="3">
        </vl-input-field>
        <vl-form-message for="voornaam" state="valueMissing">Gelieve een voornaam in te vullen.</vl-form-message>
        <vl-form-message for="voornaam" state="tooShort">Gelieve minimum 3 karakters te gebruiken.</vl-form-message>

        <vl-form-label for="familienaam" label="Familienaam *"></vl-form-label>
        <vl-input-field id="familienaam" name="familienaam" autocomplete="family-name" required min-length="2">
        </vl-input-field>
        <vl-form-message for="familienaam" state="valueMissing">Gelieve een familienaam in te vullen.</vl-form-message>
        <vl-form-message for="familienaam" state="tooShort">Gelieve minimum 2 karakters te gebruiken.</vl-form-message>
    </form>
\``,...a.parameters?.docs?.source}}};const t=["FormulierBlurValidatiePerVeld","FormulierBlurValidatieForm"],G=Object.freeze(Object.defineProperty({__proto__:null,FormulierBlurValidatieForm:a,FormulierBlurValidatiePerVeld:e,__namedExportsOrder:t,default:i},Symbol.toStringTag,{value:"Module"}));export{e as F,a,G as f};
