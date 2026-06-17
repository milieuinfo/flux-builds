import{x as r,r as o,V as m,b as l,c as n}from"./iframe-nqJ0ju39.js";import"./vl-checkbox.component-kcGdx0dA.js";import"./vl-datepicker.component-LrijvSQq.js";import"./vl-fieldset.component-DHSdhx9W.js";import"./vl-input-field-masked.component-SpAs0qTF.js";import"./vl-radio.component-VdH70-oI.js";import"./vl-radio-group.component-BY5xfCg3.js";import"./vl-select.component-DRh-HxGq.js";import"./vl-select-rich.component-_K_EXuZK.js";import"./vl-textarea.component-D1tzSi4A.js";import"./vl-textarea-rich.component-CDfdsccr.js";import"./vl-upload.component-DC3JX4LC.js";o([m,l,n]);const i={title:"Patronen/Formulier/blur validatie"},e=()=>r`
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
