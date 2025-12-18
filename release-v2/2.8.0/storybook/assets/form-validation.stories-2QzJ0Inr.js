import{x as o,r,V as m,b as n,c as l}from"./iframe-BQb9mjVp.js";import"./vl-checkbox.component-DXi6WwO0.js";import"./vl-datepicker.component-CVLjVc3J.js";import"./vl-input-field-masked.component-qycCnsrx.js";import"./vl-radio.component-HF0vGzer.js";import"./vl-radio-group.component-D0wYPqVJ.js";import"./vl-select.component-BypI6XzH.js";import"./vl-select-rich.component-Cx8fXtGT.js";import"./vl-textarea.component-DzPq4Vrh.js";import"./vl-textarea-rich.component-D2wM1BUa.js";import"./vl-upload.component-CiF30Vri.js";r([m,n,l]);const t={title:"Ontwerp/Form/Validation"},e=()=>o`
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
