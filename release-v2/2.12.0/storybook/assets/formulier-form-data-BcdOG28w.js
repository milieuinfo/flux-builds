import{u as t,j as e,M as o,a as d,C as i}from"./iframe-BJy2lIHs.js";import{f as l,F as s}from"./formulier-form-data.stories-CPpn32yD.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-form-data.component-DDvmo-Br.js";import"./vl-checkbox.component-CaqQ6QEH.js";import"./vl-datepicker.component-CWL1bX9Y.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-fieldset.component-D0auMTxx.js";import"./vl-input-field-masked.component-CtLiafSG.js";import"./vl-radio.component-DybCu6Ag.js";import"./vl-radio-group.component-BFwurkS5.js";import"./vl-select.component-Dh8HWgqz.js";import"./vl-select-rich.component-h5mxQ5Uo.js";import"./vl-textarea.component-DlAkTIGX.js";import"./vl-textarea-rich.component-DzLPkTaW.js";import"./vl-upload.component-Mpazn3jo.js";import"./vl-upload-progress.component-BshNTd-7.js";function a(r){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:l}),`
`,e.jsx(n.h1,{id:"formulier---form-data",children:"Formulier - Form Data"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[`Meer informatie over validatie binnen de formulier componenten vind je op
`,e.jsx(n.a,{href:"/docs/patronen-formulier-validatie--documentatie",children:"Formulier - Validatie"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["Om de form data te verzamelen, kan je de ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/FormData",rel:"nofollow",children:"FormData"})," API gebruiken."]}),`
`,e.jsxs(n.p,{children:["Echter, deze API is niet altijd even handig in gebruik. Als je ",e.jsx(n.code,{children:"FormData.entries()"}),` gebruikt, dan krijg je een iterator
van de waardes. Dit is voldoende voor inputs met 1 waarde, maar voor inputs met meerdere waardes krijg je enkel de
laatst gekozen waarde terug. Wanneer je `,e.jsx(n.code,{children:"FormData.getAll()"}),` gebruikt, krijg je dan weer altijd een array van waardes
terug, ook voor inputs die maar 1 waarde kunnen bevatten.`]}),`
`,e.jsx(n.p,{children:`Het gebruik is niet intuïtief en kan leiden tot verwarring, vooral wanneer je werkt met form controls die meerdere
waardes kunnen bevatten, zoals een multiselect.`}),`
`,e.jsx(n.h2,{id:"formaat",children:"formaat"}),`
`,e.jsx(n.p,{children:"Daarom leek het ons aangewezen dat je altijd met een consistent object werkt voor de form data:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"voor form controls met 1 waarde, krijg je altijd een enkele waarde"}),`
`,e.jsx(n.li,{children:"voor form controls met meerdere waardes (bv. multiselect), krijg je altijd een array van waardes"}),`
`]}),`
`,e.jsx(n.p,{children:`Dan kun je op een vereenvoudigde manier de form data verwerken,
zonder dat je rekening moet houden met het type van de form control.`}),`
`,e.jsx(n.p,{children:"bv."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`{
          "naam": "Dehbi",
          "startDate": "2025-07-11"
}
`})}),`
`,e.jsx(n.h2,{id:"parseformdataformelement",children:"parseFormData(formElement)"}),`
`,e.jsxs(n.p,{children:[`We hebben een helper functie voorzien om de data uit de form te parsen naar een object met de waardes van de velden,
in het voorgestelde formaat zoals hierboven beschreven. Intern gebruikt deze functie
de `,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/FormData",rel:"nofollow",children:"FormData"})," API en werkt die ook met native form controls."]}),`
`,e.jsx(n.p,{children:"Deze functie aanvaard 2 parameters:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"formElement: Form"}),": het Form element waarvan je de data wil parsen"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"multiFormControlNames?: string[]"}),`: (optioneel) een array van form control namen die meerdere waardes kunnen bevatten.
Als deze parameter niet wordt meegegeven, dan zoekt de functie zelf naar form controls die meerdere waardes kunnen
bevatten (bv. vl-select-rich met `,e.jsx(n.code,{children:"multiple"})," attribuut...). Deze parameter is in de meeste gevallen niet nodig."]}),`
`]}),`
`,e.jsx(n.h3,{id:"gebruik",children:"Gebruik"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { parseFormData } from "@domg-wc/components/form";
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<form @submit=\${this.onSubmit}>
  ...
</form>
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`onSubmit(event: Event): void {
    // voorkomt het standaardgedrag van het formulier,
    // zodat we de formulierinzending zelf kunnen afhandelen.
    event.preventDefault();

    // parse de form data
    const data = parseFormData(event.target as HTMLFormElement);
    // print de form data in de console
    console.log(data);
}
`})}),`
`,e.jsx(n.h3,{id:"voorbeeld-resultaat",children:"Voorbeeld resultaat"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`{
          "naam": "Dehbi",
          "startDate": "2025-07-11"
}
`})}),`
`,e.jsx(n.h2,{id:"setformdataformelement-data",children:"setFormData(formElement, data)"}),`
`,e.jsx(n.p,{children:`We hebben een helper functie voorzien om de data in te stellen op een form element, zodat je op een eenvoudiger manier
de waardes van de form controls kan aanpassen. Deze functie is compatibel met al onze vl-form componenten maar ook met
native HTML form controls.`}),`
`,e.jsx(n.p,{children:"Deze functie aanvaard 2 parameters:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"formElement: Form"}),": het Form element waarvan je de data wil zetten"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"data: { [p: string]: FormDataEntryValue[] | File | string }"}),": een object met de waardes van de velden"]}),`
`]}),`
`,e.jsx(n.h3,{id:"gebruik-1",children:"Gebruik"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { setFormData } from "@domg-wc/components/form";
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<form id="example-form">
    <input type="text" name="naam" />
    <select name="hobbies" multiple>
        <option value="value1">Value 1</option>
        <option value="value2">Value 2</option>
        <option value="value3">Value 3</option>
    </select>
    <input type="checkbox" name="waarheidsgetrouw" value="spreekt-de-waarheid">
</form>
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const formElement = document.getElementById('example-form') as HTMLFormElement;
// stel de form data in
setFormData(formElement, {
    naam: 'Dehbi',
    hobbies: ['Drummen', 'Zwemmen']
    });
`})}),`
`,e.jsx("vl-alert",{type:"info",title:"Ter info",icon:"info-circle",size:"small","custom-css":".vl-alert{margin-bottom: 3rem;}",children:e.jsx(d,{options:{forceInline:!0},style:{fontSize:"14px"},children:`
De parameter om form data in te stellen bij setFormData() is hetzelfde formaat als de data die parseFormData()
functie retourneert.
`})}),`
`,e.jsx(n.h3,{id:"checkbox",children:"Checkbox"}),`
`,e.jsxs(n.p,{children:[`De checkbox werkt op een andere manier dan de andere form controls.
De value die meegegeven wordt gaat het `,e.jsx(n.code,{children:"checked"})," attribuut van de checkbox bepalen maar gaat nooit de ",e.jsx(n.code,{children:"value"})," van de checkbox wijzigen."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Om een checkbox aan te vinken, dien je de value mee te geven die op de checkbox ingesteld staat. Als je de verkeerde string meegeeft wordt niets veranderd."}),`
`,e.jsxs(n.li,{children:["Om een checkbox uit te vinken kan je de value ",e.jsx(n.code,{children:"null"})," of ",e.jsx(n.code,{children:"undefined"})," meegeven."]}),`
`,e.jsxs(n.li,{children:["Je kan tevens ook ofwel een boolean meegeven, waarbij ",e.jsx(n.code,{children:"true"})," de checkbox aanvinkt en ",e.jsx(n.code,{children:"false"})," de checkbox uitvinkt."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Meer info vind je bij de ",e.jsx(n.a,{href:"?path=/docs/components-form-checkbox--documentatie#formdata",children:"Checkbox Documentatie - FormData"}),"."]}),`
`,e.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsxs(n.p,{children:[`Dit component toont een formulier met verschillende types van form controls. Het formulier kan worden ingevuld met
`,e.jsx(n.a,{href:"#setformdataformelement-data",children:"setFormData()"}),` en de data kan worden opgehaald met
`,e.jsx(n.a,{href:"#parseformdataformelement",children:"parseFormData()"})," (die wordt dan onderaan de form geprint)."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["De data kan worden ingesteld met de ",e.jsx(n.code,{children:"Stel in"})," knop. (",e.jsx(n.a,{href:"#setformdataformelement-data",children:"setFormData()"}),")"]}),`
`,e.jsxs(n.li,{children:["De data kan worden opgehaald met de ",e.jsx(n.code,{children:"Verstuur"})," knop. (",e.jsx(n.a,{href:"#parseformdataformelement",children:"parseFormData()"}),")"]}),`
`]}),`
`,e.jsx(i,{of:s,sourceState:"none"})]})}function E(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(a,{...r})}):a(r)}export{E as default};
