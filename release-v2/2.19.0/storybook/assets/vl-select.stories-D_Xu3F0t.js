import{Z as t,_ as m,u as C,j as e,C as o,S as v,b8 as P,s as I,x as A,r as O}from"./iframe-CY-ZM549.js";import{f as q,a as L}from"./form-control.stories-arg-B6yBTQ6J.js";import{s as N,V as K}from"./vl-select.component-BFzkdhOR.js";import{M as B}from"./form-control.public-methods-doc-DkaRTqkF.js";import"./preload-helper-D9Z9MdNV.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,a={...q,...N,onVlChange:T("vl-change"),onVlInput:T("vl-input"),onVlValid:T("vl-valid")},M={...L,block:{name:"block",description:"Duidt aan dat de component de volledige breedte van zijn parent mag innemen.",table:{type:{summary:m.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(a.block)}}},placeholder:{name:"placeholder",description:"De placeholder tekst van het veld.",table:{type:{summary:m.STRING},category:t.ATTRIBUTES,defaultValue:{summary:a.placeholder}}},autocomplete:{name:"autocomplete",description:"De autocomplete van het veld. Dit moet een waarde zijn die door de browser ondersteund wordt.<br>Een lijst van waarden kan je vinden op [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#values).",table:{type:{summary:m.STRING},category:t.ATTRIBUTES,defaultValue:{summary:a.autocomplete}}},notDeletable:{name:"not-deletable",description:"Duidt aan dat de selectie niet verwijderbaar is.",table:{type:{summary:m.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(a.notDeletable)}}},initialOptions:{name:"initial-options",description:"De opties die geselecteerd worden bij reset van de form.<br>Zie de documentatie pagina voor meer info.",table:{type:{summary:"SelectOption"},category:t.PROPERTIES,defaultValue:{summary:String(a.options)}}},options:{name:"options",description:"De opties die geselecteerd kunnen worden.<br>Zie de documentatie pagina voor meer info.",table:{type:{summary:"SelectOption"},category:t.PROPERTIES,defaultValue:{summary:String(a.options)}}},onVlChange:{name:"vl-change",description:"Event dat afgevuurd wordt als er een optie selecteerd of verwijderd wordt (zowel programmatorisch als door een gebruiker).<br>Het detail object van het event bevat de waarde van de geselecteerde optie.",table:{type:{summary:"{ value: string }"},category:t.EVENTS}},onVlInput:{name:"vl-input",description:"Event dat alleen afgevuurd wordt als de gebruiker een optie selecteert of verwijdert.<br>Het detail object van het event bevat de waarde van de geselecteerde optie.",table:{type:{summary:"{ value: string }"},category:t.EVENTS}},onVlValid:{name:"vl-valid",description:"Event dat afgevuurd wordt als de select valid is.<br>Het detail object van het event bevat de waarde van de geselecteerde optie.",table:{type:{summary:"{ value: string }"},category:t.EVENTS}}};function H(l){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...C(),...l.components},{FluxComponentMetaData:b}=n;return b||_("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"select",children:"Select"}),`
`,e.jsx(b,{id:"components-form-select"}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(n.p,{children:["Gebruik de ",e.jsx(n.code,{children:"select"})," component om een select veld toe te voegen aan een pagina.",e.jsx("br",{}),`
Zie het `,e.jsx(n.a,{href:"/docs/patronen-formulier-demo--documentatie",children:"form demo"})," voorbeeld voor het gebruik binnen een form."]}),`
`,e.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { VlSelectComponent } from '@domg-wc/components/form';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-select></vl-select>
`})}),`
`,e.jsx(o,{of:r}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"options"}),e.jsx(v,{code:`
  [
      { label: 'Hasselt', value: 'hasselt' },
      { label: 'Turnhout', value: 'turnhout' },
      { label: 'Knokke-Heist', value: 'knokke-heist' },
      { label: 'Waregem', value: 'waregem' },
      { label: 'Lier', value: 'lier' },
      { label: 'Rio Piedras', value: 'rio piedras' }
]`,language:"ts",dark:!0})]}),`
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(P,{of:r}),`
`,e.jsx(n.h2,{id:"publieke-methodes",children:"Publieke methodes"}),`
`,e.jsx(B,{}),`
`,e.jsx(n.h2,{id:"styles",children:"Styles"}),`
`,e.jsxs(n.p,{children:["De styles van DV zijn lokaal gezet en aangepast omdat deze niet CSP compliant waren.",e.jsx("br",{}),`
Er werd gebruik gemaakt van een `,e.jsx(n.code,{children:"data:"}),` attribuut om een SVG op te halen van w3.org.
Hierdoor breekt de CSP compliance tenzij je alle `,e.jsx(n.code,{children:"data:"})," attributen whitelist, wat niet de bedoeling is."]}),`
`,e.jsx(n.h2,{id:"events",children:"Events"}),`
`,e.jsx(n.h3,{id:"change-event",children:"Change event"}),`
`,e.jsxs(n.p,{children:["Bij het selecteren of verwijderen van een optie (zowel programmatorisch als door een gebruiker), wordt het ",e.jsx(n.code,{children:"vl-change"})," event afgevuurd. Het detail object van dit event bevat de value van de geselecteerde opties.",e.jsx("br",{})]}),`
`,e.jsx(n.h3,{id:"input-event",children:"Input event"}),`
`,e.jsxs(n.p,{children:["Als de gebruiker een optie selecteert of verwijdert, wordt het ",e.jsx(n.code,{children:"vl-input"})," event afgevuurd. Het detail object van dit event bevat de value van de geselecteerde opties.",e.jsx("br",{})]}),`
`,e.jsx(n.h2,{id:"select-opties",children:"Select opties"}),`
`,e.jsx(n.p,{children:"Er zijn twee manieren om opties toe te voegen aan de select component:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Programmatorisch"})," via de ",e.jsx(n.code,{children:"options"})," property"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Declaratief"})," via HTML ",e.jsx(n.code,{children:"<option>"})," en ",e.jsx(n.code,{children:"<optgroup>"})," elementen"]}),`
`]}),`
`,e.jsxs(n.h3,{id:"programmatorische-opties-via-options-property",children:["Programmatorische opties via ",e.jsx(n.code,{children:"options"})," property"]}),`
`,e.jsxs(n.p,{children:["De ",e.jsx(n.code,{children:"options"})," property bevat een array van objecten die de opties van de select component bevatten."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-code",children:`<vl-select
    .options=\${[
               { label: 'Hasselt', value: 'hasselt' },
               { label: 'Turnhout', value: 'turnhout' }
           ]}
></vl-select>
`})}),`
`,e.jsxs(n.p,{children:["Als de referentie van deze array verandert, wordt de Lit lifecycle getriggerd en wordt de select opnieuw opgebouwd op basis van de nieuwe opties.",e.jsx("br",{}),`
Hierdoor is het noodzakelijk om de opties door te geven aan de select component met behulp van een variabele, en de opties niet direct in de template te zetten.`,e.jsx("br",{}),`
Indien je de opties direct in de template zet, zal bij elke render de select opnieuw opgebouwd worden en de gekozen opties verwijderd worden.`]}),`
`,e.jsxs(n.p,{children:["Dit betekent ook dat als je programmatorisch een optie wil veranderen, toevoegen of verwijderen, je de referentie van de array moet aanpassen.",e.jsx("br",{}),`
Dit kan je doen door de opties de spreaden in een nieuwe array (`,e.jsx(n.code,{children:"[...options]"}),")."]}),`
`,e.jsx(n.h3,{id:"declaratieve-opties-via-html-elementen",children:"Declaratieve opties via HTML elementen"}),`
`,e.jsxs(n.p,{children:["Als alternatief voor de ",e.jsx(n.code,{children:"options"})," property kan je ook gebruik maken van standaard HTML ",e.jsx(n.code,{children:"<option>"})," en ",e.jsx(n.code,{children:"<optgroup>"}),`
elementen binnen de `,e.jsx(n.code,{children:"<vl-select>"}),` component. Deze aanpak biedt meer flexibiliteit en
volgt de native HTML select implementatie.`]}),`
`,e.jsx(o,{of:s}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Ondersteunde option attributen:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value"}),": De waarde van de optie"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"selected"}),": Markeert de optie als geselecteerd"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"disabled"}),": Schakelt de optie uit"]}),`
`]}),`
`,e.jsxs(n.h3,{id:"initial-options-property",children:[e.jsx(n.code,{children:"initial-options"})," property"]}),`
`,e.jsxs(n.p,{children:["De ",e.jsx(n.code,{children:"initial-options"})," property is een array van objecten die de opties van de select component bevatten.",e.jsx("br",{}),`
Deze zijn de standaard opties die worden getoond bij het laden van de pagina.`,e.jsx("br",{})]}),`
`,e.jsxs(n.p,{children:["Als de form reset, worden deze opties getoond in de select component.",e.jsx("br",{})]}),`
`,e.jsxs(n.p,{children:["Indien je declaratieve opties gebruikt bij het laden van de ",e.jsx(n.code,{children:"vl-select"}),", worden deze intern ingesteld als de ",e.jsx(n.code,{children:"initial-options"})," property.",e.jsx("br",{})]}),`
`,e.jsxs(n.h3,{id:"value-attribuut",children:[e.jsx(n.code,{children:"value"})," attribuut"]}),`
`,e.jsxs(n.p,{children:["Je kan ook de geselecteerde optie(s) van de select component instellen door het ",e.jsx(n.code,{children:"value"})," attribuut te gebruiken.",e.jsx("br",{})]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["Dit component is volledig accessible, we raden aan waar mogelijk gebruik te maken van dit component in plaats van de ",e.jsx(n.a,{href:"/docs/components-form-select-rich--documentatie",children:"vl-select-rich"}),".",e.jsx("br",{}),`
Indien er minder dan 7 opties zijn raden we aan checkboxes of radio buttons te gebruiken.`]}),`
`,e.jsx(n.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(n.h3,{id:"niet-verwijderbaar",children:"Niet Verwijderbaar"}),`
`,e.jsx(o,{of:i}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"options"}),e.jsx(v,{code:`
  [
      { label: 'Hasselt', value: 'hasselt' },
      { label: 'Turnhout', value: 'turnhout' },
      { label: 'Knokke-Heist', value: 'knokke-heist' },
      { label: 'Waregem', value: 'waregem' },
      { label: 'Lier', value: 'lier' },
      { label: 'Rio Piedras', value: 'rio piedras' }
]`,language:"ts",dark:!0})]}),`
`,e.jsx(n.h3,{id:"groepen",children:"Groepen"}),`
`,e.jsx(o,{of:d}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"options"}),e.jsx(v,{code:`
  [
      { label: 'Hasselt', value: 'hasselt', group: 'België' },
      { label: 'Turnhout', value: 'turnhout', group: 'België' },
      { label: 'Knokke-Heist', value: 'knokke-heist', group: 'België' },
      { label: 'Waregem', value: 'waregem', group: 'België' },
      { label: 'Lier', value: 'lier', group: 'België' },
      { label: 'Rio Piedras', value: 'rio piedras', group: 'Puerto Rico' }
]`,language:"ts",dark:!0})]}),`
`,e.jsx(n.h3,{id:"geselecteerde-optie",children:"Geselecteerde optie"}),`
`,e.jsx(n.p,{children:"Als je een optie programmatorisch wil selecteren moet je voor deze optie de 'selected' boolean op true zetten."}),`
`,e.jsx(o,{of:c}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"options"}),e.jsx(v,{code:`
  [
      { label: 'Hasselt', value: 'hasselt', selected: true },
      { label: 'Turnhout', value: 'turnhout' },
      { label: 'Knokke-Heist', value: 'knokke-heist' },
      { label: 'Waregem', value: 'waregem' },
      { label: 'Lier', value: 'lier' },
      { label: 'Rio Piedras', value: 'rio piedras' }
]`,language:"ts",dark:!0})]}),`
`,e.jsx(n.h3,{id:"disabled-optie",children:"Disabled optie"}),`
`,e.jsx(n.p,{children:"Als je een optie programmatorisch wil uitzetten moet je voor deze optie de 'disabled' boolean op true zetten."}),`
`,e.jsx(o,{of:u}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"options"}),e.jsx(v,{code:`
  [
      { label: 'Hasselt', value: 'hasselt', disabled: true },
      { label: 'Turnhout', value: 'turnhout' },
      { label: 'Knokke-Heist', value: 'knokke-heist' },
      { label: 'Waregem', value: 'waregem' },
      { label: 'Lier', value: 'lier' },
      { label: 'Rio Piedras', value: 'rio piedras' }
]`,language:"ts",dark:!0})]}),`
`,e.jsx(n.h3,{id:"read-only",children:"Read only"}),`
`,e.jsxs(n.p,{children:["Als je wil dat de select read only is, moet je voor alle opties de 'disabled' boolean op true zetten.",e.jsx("br",{}),`
Indien de 'required' boolean op true staat, moet je een value programmatorisch selecteren of je form wordt unsubmittable.`]}),`
`,e.jsx(o,{of:p}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"options"}),e.jsx(v,{code:`
  [
      { label: 'Hasselt', value: 'hasselt', selected: true, disabled: true },
      { label: 'Turnhout', value: 'turnhout', disabled: true },
      { label: 'Knokke-Heist', value: 'knokke-heist', disabled: true },
      { label: 'Waregem', value: 'waregem', disabled: true },
      { label: 'Lier', value: 'lier', disabled: true },
      { label: 'Rio Piedras', value: 'rio piedras', disabled: true }
]`,language:"ts",dark:!0})]}),`
`,e.jsx(n.h3,{id:"declaratieve-opties",children:"Declaratieve opties"}),`
`,e.jsxs(n.p,{children:["In plaats van de ",e.jsx(n.code,{children:"options"})," property te gebruiken, kan je ook gebruik maken van standaard HTML ",e.jsx(n.code,{children:"<option>"}),` elementen
binnen de `,e.jsx(n.code,{children:"<vl-select>"})," component."]}),`
`,e.jsx(o,{of:s}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Ondersteunde option attributen:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value"}),": De waarde van de optie"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"selected"}),": Markeert de optie als geselecteerd"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"disabled"}),": Schakelt de optie uit"]}),`
`]}),`
`,e.jsx(n.h2,{id:"validatie",children:"Validatie"}),`
`,e.jsxs(n.p,{children:["Meer info over validatie binnen onze form componenten vind je hier: ",e.jsx(n.a,{href:"/docs/patronen-formulier-validatie--documentatie",children:"Form - Validatie"})]}),`
`,e.jsx(n.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(n.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/componenten/select",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Select"})})]})}function W(l={}){const{wrapper:n}={...C(),...l.components};return n?e.jsx(n,{...l,children:e.jsx(H,{...l})}):H(l)}function _(l,n){throw new Error("Expected component `"+l+"` to be defined: you likely forgot to import, pass, or provide it.")}O([K]);const J={id:"components-form-select",title:"Components - Form/select",tags:["autodocs"],args:a,argTypes:M,parameters:{docs:{page:W}}},h=I(a,({id:l,name:n,label:b,required:g,disabled:j,error:x,success:$,blurValidation:k,options:V,placeholder:y,notDeletable:w,autocomplete:f,block:S,onVlChange:D,onVlInput:R,onVlValid:E,onVlReset:z})=>A` <vl-select
            id=${l}
            name=${n}
            label=${b}
            ?required=${g}
            ?disabled=${j}
            ?error=${x}
            ?success=${$}
            ?blur-validation=${k}
            .options=${V}
            placeholder=${y}
            ?not-deletable=${w}
            ?block=${S}
            autocomplete=${f}
            @vl-change=${D}
            @vl-input=${R}
            @vl-valid=${E}
            @vl-reset=${z}
        ></vl-select>`),r=h.bind({});r.storyName="vl-select - default";r.args={id:"geboorteplaats",name:"geboorteplaats",placeholder:"Kies je geboorteplaats",options:[{label:"Hasselt",value:"hasselt"},{label:"Turnhout",value:"turnhout"},{label:"Knokke-Heist",value:"knokke-heist"},{label:"Waregem",value:"waregem"},{label:"Lier",value:"lier"},{label:"Rio Piedras",value:"rio piedras"}]};const i=h.bind({});i.storyName="vl-select - not-deletable";i.args={id:"geboorteplaats",name:"geboorteplaats",placeholder:"Kies je geboorteplaats",notDeletable:!0,options:[{label:"Hasselt",value:"hasselt"},{label:"Turnhout",value:"turnhout"},{label:"Knokke-Heist",value:"knokke-heist"},{label:"Waregem",value:"waregem"},{label:"Lier",value:"lier"},{label:"Rio Piedras",value:"rio piedras"}]};const d=h.bind({});d.storyName="vl-select - groups";d.args={id:"geboorteplaats",name:"geboorteplaats",placeholder:"Kies je geboorteplaats",options:[{label:"Hasselt",value:"hasselt",group:"België"},{label:"Turnhout",value:"turnhout",group:"België"},{label:"Knokke-Heist",value:"knokke-heist",group:"België"},{label:"Waregem",value:"waregem",group:"België"},{label:"Lier",value:"lier",group:"België"},{label:"Rio Piedras",value:"rio piedras",group:"Puerto Rico"}]};const c=h.bind({});c.storyName="vl-select - selected option";c.args={id:"geboorteplaats",name:"geboorteplaats",placeholder:"Kies je geboorteplaats",options:[{label:"Hasselt",value:"hasselt",selected:!0},{label:"Turnhout",value:"turnhout"},{label:"Knokke-Heist",value:"knokke-heist"},{label:"Waregem",value:"waregem"},{label:"Lier",value:"lier"},{label:"Rio Piedras",value:"rio piedras"}]};const u=h.bind({});u.storyName="vl-select - disabled option";u.args={id:"geboorteplaats",name:"geboorteplaats",placeholder:"Kies je geboorteplaats",options:[{label:"Hasselt",value:"hasselt",disabled:!0},{label:"Turnhout",value:"turnhout"},{label:"Knokke-Heist",value:"knokke-heist"},{label:"Waregem",value:"waregem"},{label:"Lier",value:"lier"},{label:"Rio Piedras",value:"rio piedras"}]};const p=h.bind({});p.storyName="vl-select - read only";p.args={id:"geboorteplaats",name:"geboorteplaats",placeholder:"Kies je geboorteplaats",notDeletable:!0,options:[{label:"Hasselt",value:"hasselt",disabled:!0,selected:!0},{label:"Turnhout",value:"turnhout",disabled:!0},{label:"Knokke-Heist",value:"knokke-heist",disabled:!0},{label:"Waregem",value:"waregem",disabled:!0},{label:"Rio Piedras",value:"rio piedras",disabled:!0}]};const G=I(a,({id:l,name:n,label:b,required:g,disabled:j,error:x,success:$,placeholder:k,notDeletable:V,autocomplete:y,block:w,onVlChange:f,onVlInput:S,onVlValid:D,onVlReset:R})=>A` <vl-select
            id=${l}
            name=${n}
            label=${b}
            ?required=${g}
            ?disabled=${j}
            ?error=${x}
            ?success=${$}
            placeholder=${k}
            ?not-deletable=${V}
            ?block=${w}
            autocomplete=${y}
            @vl-change=${f}
            @vl-input=${S}
            @vl-valid=${D}
            @vl-reset=${R}
        >
            <option value="antwerpen">Antwerpen</option>
            <option value="brussel" selected>Brussel</option>
            <option value="gent">gent</option>
            <option value="hasselt" disabled>Hasselt (niet beschikbaar)</option>
            <option value="waregem">Waregem</option>
            <option value="lier">Lier</option>
            <option value="rio-piedras">Rio Piedras</option>
        </vl-select>`),s=G.bind({});s.storyName="vl-select - declarative options";s.args={id:"woonplaats",name:"woonplaats",label:"Kies je woonplaats",placeholder:"Kies je woonplaats"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(selectArgs, ({
  id,
  name,
  label,
  required,
  disabled,
  error,
  success,
  blurValidation,
  options,
  placeholder,
  notDeletable,
  autocomplete,
  block,
  onVlChange,
  onVlInput,
  onVlValid,
  onVlReset
}) => {
  return html\` <vl-select
            id=\${id}
            name=\${name}
            label=\${label}
            ?required=\${required}
            ?disabled=\${disabled}
            ?error=\${error}
            ?success=\${success}
            ?blur-validation=\${blurValidation}
            .options=\${options}
            placeholder=\${placeholder}
            ?not-deletable=\${notDeletable}
            ?block=\${block}
            autocomplete=\${autocomplete}
            @vl-change=\${onVlChange}
            @vl-input=\${onVlInput}
            @vl-valid=\${onVlValid}
            @vl-reset=\${onVlReset}
        ></vl-select>\`;
})`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`story(selectArgs, ({
  id,
  name,
  label,
  required,
  disabled,
  error,
  success,
  blurValidation,
  options,
  placeholder,
  notDeletable,
  autocomplete,
  block,
  onVlChange,
  onVlInput,
  onVlValid,
  onVlReset
}) => {
  return html\` <vl-select
            id=\${id}
            name=\${name}
            label=\${label}
            ?required=\${required}
            ?disabled=\${disabled}
            ?error=\${error}
            ?success=\${success}
            ?blur-validation=\${blurValidation}
            .options=\${options}
            placeholder=\${placeholder}
            ?not-deletable=\${notDeletable}
            ?block=\${block}
            autocomplete=\${autocomplete}
            @vl-change=\${onVlChange}
            @vl-input=\${onVlInput}
            @vl-valid=\${onVlValid}
            @vl-reset=\${onVlReset}
        ></vl-select>\`;
})`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`story(selectArgs, ({
  id,
  name,
  label,
  required,
  disabled,
  error,
  success,
  blurValidation,
  options,
  placeholder,
  notDeletable,
  autocomplete,
  block,
  onVlChange,
  onVlInput,
  onVlValid,
  onVlReset
}) => {
  return html\` <vl-select
            id=\${id}
            name=\${name}
            label=\${label}
            ?required=\${required}
            ?disabled=\${disabled}
            ?error=\${error}
            ?success=\${success}
            ?blur-validation=\${blurValidation}
            .options=\${options}
            placeholder=\${placeholder}
            ?not-deletable=\${notDeletable}
            ?block=\${block}
            autocomplete=\${autocomplete}
            @vl-change=\${onVlChange}
            @vl-input=\${onVlInput}
            @vl-valid=\${onVlValid}
            @vl-reset=\${onVlReset}
        ></vl-select>\`;
})`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`story(selectArgs, ({
  id,
  name,
  label,
  required,
  disabled,
  error,
  success,
  blurValidation,
  options,
  placeholder,
  notDeletable,
  autocomplete,
  block,
  onVlChange,
  onVlInput,
  onVlValid,
  onVlReset
}) => {
  return html\` <vl-select
            id=\${id}
            name=\${name}
            label=\${label}
            ?required=\${required}
            ?disabled=\${disabled}
            ?error=\${error}
            ?success=\${success}
            ?blur-validation=\${blurValidation}
            .options=\${options}
            placeholder=\${placeholder}
            ?not-deletable=\${notDeletable}
            ?block=\${block}
            autocomplete=\${autocomplete}
            @vl-change=\${onVlChange}
            @vl-input=\${onVlInput}
            @vl-valid=\${onVlValid}
            @vl-reset=\${onVlReset}
        ></vl-select>\`;
})`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`story(selectArgs, ({
  id,
  name,
  label,
  required,
  disabled,
  error,
  success,
  blurValidation,
  options,
  placeholder,
  notDeletable,
  autocomplete,
  block,
  onVlChange,
  onVlInput,
  onVlValid,
  onVlReset
}) => {
  return html\` <vl-select
            id=\${id}
            name=\${name}
            label=\${label}
            ?required=\${required}
            ?disabled=\${disabled}
            ?error=\${error}
            ?success=\${success}
            ?blur-validation=\${blurValidation}
            .options=\${options}
            placeholder=\${placeholder}
            ?not-deletable=\${notDeletable}
            ?block=\${block}
            autocomplete=\${autocomplete}
            @vl-change=\${onVlChange}
            @vl-input=\${onVlInput}
            @vl-valid=\${onVlValid}
            @vl-reset=\${onVlReset}
        ></vl-select>\`;
})`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`story(selectArgs, ({
  id,
  name,
  label,
  required,
  disabled,
  error,
  success,
  blurValidation,
  options,
  placeholder,
  notDeletable,
  autocomplete,
  block,
  onVlChange,
  onVlInput,
  onVlValid,
  onVlReset
}) => {
  return html\` <vl-select
            id=\${id}
            name=\${name}
            label=\${label}
            ?required=\${required}
            ?disabled=\${disabled}
            ?error=\${error}
            ?success=\${success}
            ?blur-validation=\${blurValidation}
            .options=\${options}
            placeholder=\${placeholder}
            ?not-deletable=\${notDeletable}
            ?block=\${block}
            autocomplete=\${autocomplete}
            @vl-change=\${onVlChange}
            @vl-input=\${onVlInput}
            @vl-valid=\${onVlValid}
            @vl-reset=\${onVlReset}
        ></vl-select>\`;
})`,...p.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story(selectArgs, ({
  id,
  name,
  label,
  required,
  disabled,
  error,
  success,
  placeholder,
  notDeletable,
  autocomplete,
  block,
  onVlChange,
  onVlInput,
  onVlValid,
  onVlReset
}) => {
  return html\` <vl-select
            id=\${id}
            name=\${name}
            label=\${label}
            ?required=\${required}
            ?disabled=\${disabled}
            ?error=\${error}
            ?success=\${success}
            placeholder=\${placeholder}
            ?not-deletable=\${notDeletable}
            ?block=\${block}
            autocomplete=\${autocomplete}
            @vl-change=\${onVlChange}
            @vl-input=\${onVlInput}
            @vl-valid=\${onVlValid}
            @vl-reset=\${onVlReset}
        >
            <option value="antwerpen">Antwerpen</option>
            <option value="brussel" selected>Brussel</option>
            <option value="gent">gent</option>
            <option value="hasselt" disabled>Hasselt (niet beschikbaar)</option>
            <option value="waregem">Waregem</option>
            <option value="lier">Lier</option>
            <option value="rio-piedras">Rio Piedras</option>
        </vl-select>\`;
})`,...s.parameters?.docs?.source}}};const Q=["SelectDefault","SelectNotDeletable","SelectGroups","SelectSelectedOption","SelectDisabledOption","SelectReadOnly","SelectDeclarativeStates"];export{s as SelectDeclarativeStates,r as SelectDefault,u as SelectDisabledOption,d as SelectGroups,i as SelectNotDeletable,p as SelectReadOnly,c as SelectSelectedOption,Q as __namedExportsOrder,J as default};
