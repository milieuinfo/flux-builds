import{u as v,j as e,C as t,S as s,bd as A,s as W,x as g,r as M}from"./iframe-BQb9mjVp.js";import{s as N,a as j}from"./vl-select-rich.stories-arg-CUM3T2d-.js";import{V as B}from"./vl-select-rich.component-Cx8fXtGT.js";import{M as G}from"./form-control.public-methods-doc-BSToGT0S.js";import"./preload-helper-D9Z9MdNV.js";import"./form-control.stories-arg-CUDCTdRn.js";function b(l){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...v(),...l.components},{FluxComponentMetaData:m}=n;return m||E("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"select-rich",children:"Select Rich"}),`
`,e.jsx(m,{id:"components-form-select-rich"}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(n.p,{children:["Gebruik de ",e.jsx(n.code,{children:"select-rich"})," component om een uitgebreid select of multiselect veld toe te voegen aan een pagina.",e.jsx("br",{}),`
Zie het `,e.jsx(n.a,{href:"/docs/ontwerp-form-demo--documentatie",children:"form demo"})," voorbeeld voor het gebruik binnen een form."]}),`
`,e.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { VlSelectRichComponent } from '@domg-wc/components/form';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-select-rich></vl-select-rich>
`})}),`
`,e.jsx(t,{of:r}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"options"}),e.jsx(s,{code:`
  [
      { label: 'Hasselt', value: 'hasselt' },
      { label: 'Turnhout', value: 'turnhout' },
      { label: 'Knokke-Heist', value: 'knokke-heist' },
      { label: 'Waregem', value: 'waregem' },
      { label: 'Lier', value: 'lier' },
      { label: 'Rio Piedras', value: 'rio piedras' }
]`,language:"ts",dark:!0})]}),`
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(A,{of:r}),`
`,e.jsx(n.h2,{id:"publieke-methodes",children:"Publieke methodes"}),`
`,e.jsx(G,{}),`
`,e.jsx(n.h3,{id:"getselected-string--string",children:"getSelected(): string | string[]"}),`
`,e.jsxs(n.p,{children:["Geeft de geselecteerde values terug.",e.jsx("br",{}),`
Bij de single select geeft deze methode een string terug, bij de multi select een array van strings.`]}),`
`,e.jsx(n.h3,{id:"selectbyvaluevalue-string--string-void",children:"selectByValue(value: string | string[]): void"}),`
`,e.jsx(n.p,{children:"Vinkt 1 of meerdere opties aan op basis van de value."}),`
`,e.jsx(n.h3,{id:"removeselectionbyvaluevalue-string--string-void",children:"removeSelectionByValue(value: string | string[]): void"}),`
`,e.jsx(n.p,{children:"Vinkt 1 of meerdere opties uit op basis van de value."}),`
`,e.jsx(n.h3,{id:"removeallselections-void",children:"removeAllSelections(): void"}),`
`,e.jsx(n.p,{children:"Vinkt alle opties uit."}),`
`,e.jsx(n.h2,{id:"styles",children:"Styles"}),`
`,e.jsxs(n.p,{children:["De styles van DV zijn lokaal gezet en aangepast omdat deze niet CSP compliant waren.",e.jsx("br",{}),`
Er werd gebruik gemaakt van een `,e.jsx(n.code,{children:"data:"}),` attribuut om een SVG op te halen van w3.org.
Hierdoor breekt de CSP compliance tenzij je alle `,e.jsx(n.code,{children:"data:"})," attributen whitelist, wat niet de bedoeling is."]}),`
`,e.jsx(n.h2,{id:"events",children:"Events"}),`
`,e.jsx(n.h3,{id:"change-event",children:"Change event"}),`
`,e.jsxs(n.p,{children:["Bij het selecteren of verwijderen van een optie (zowel programmatorisch als door de gebruiker) wordt het ",e.jsx(n.code,{children:"vl-change"}),`
event afgevuurd, het detail object van dit event bevat de value van de geselecteerde opties.`,e.jsx("br",{}),`
Gelijkaardig aan de `,e.jsx(n.code,{children:"getSelected()"}),` methode, bevat de value bij de single select 1 string en bij de
multi select een array van strings.`]}),`
`,e.jsx(n.h3,{id:"input-event",children:"Input event"}),`
`,e.jsxs(n.p,{children:["Wanneer de gebruiker een optie verwijdert of selecteert, wordt het ",e.jsx(n.code,{children:"vl-input"}),` event afgevuurd, het detail object van
dit event bevat de value van de geselecteerde opties.`,e.jsx("br",{}),`
Gelijkaardig aan de `,e.jsx(n.code,{children:"getSelected()"}),` methode, bevat de value bij de single select 1 string en bij de multi select
een array van strings.`]}),`
`,e.jsx(n.h3,{id:"search-event",children:"Search Event"}),`
`,e.jsxs(n.p,{children:["Wanneer de gebruiker een zoekopdracht uitvoert, wordt het ",e.jsx(n.code,{children:"vl-search"}),` event afgevuurd,
het detail object van dit event bevat de zoekterm die de gebruiker heeft ingegeven.`,e.jsx("br",{})]}),`
`,e.jsx(n.h2,{id:"select-opties",children:"Select opties"}),`
`,e.jsxs(n.p,{children:["De ",e.jsx(n.code,{children:"select-rich"}),` component kan 1 of meerdere waardes bevatten. Die waardes worden weergegeven als opties in de select
component.`,e.jsx("br",{})," Om die opties te beheren, zijn er verschillende mogelijkheden:"]}),`
`,e.jsx(n.h3,{id:"met-methods",children:"met methods"}),`
`,e.jsxs(n.p,{children:["De ",e.jsx(n.code,{children:"select-rich"})," component heeft een aantal methodes die je kan gebruiken om de opties te beheren:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"selectByValue(value: string | string[])"}),": vinkt 1 of meerdere optie(s) aan"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"removeSelectionByValue(value: string | string[])"}),": vinkt 1 of meerdere optie(s) uit"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"removeAllSelections()"}),": vinkt alle opties uit"]}),`
`]}),`
`,e.jsxs(n.h3,{id:"options-property",children:[e.jsx(n.code,{children:"options"})," property"]}),`
`,e.jsxs(n.p,{children:["De ",e.jsx(n.code,{children:"options"})," property bevat een array van objecten die de opties van de select component bevatten."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-code",children:`<vl-select-rich
    .options=\${[
               { label: 'Hasselt', value: 'hasselt' },
               { label: 'Turnhout', value: 'turnhout' }
           ]}
></vl-select-rich>
`})}),`
`,e.jsxs(n.p,{children:[`Als de referentie van deze array verandert, wordt de Lit lifecycle getriggerd en wordt de select opnieuw
opgebouwd op basis van de nieuwe opties.`,e.jsx("br",{}),`
Hierdoor is het noodzakelijk om de opties door te geven aan de select component met behulp van een variabele,
en de opties niet direct in de template te zetten.`,e.jsx("br",{}),`
Indien je de opties direct in de template zet, zal bij elke render de select opnieuw opgebouwd worden en de
gekozen opties verwijderd worden.`]}),`
`,e.jsxs(n.p,{children:[`Dit betekent ook dat als je programmatorisch een optie wil veranderen, toevoegen of verwijderen,
je de referentie van de array moet aanpassen.`,e.jsx("br",{}),`
Dit kan je doen door de opties de spreaden in een nieuwe array (`,e.jsx(n.code,{children:"[...options]"}),")."]}),`
`,e.jsxs(n.h3,{id:"initial-options-property",children:[e.jsx(n.code,{children:"initial-options"})," property"]}),`
`,e.jsxs(n.p,{children:["De ",e.jsx(n.code,{children:"initial-options"})," property is een array van objecten die de opties van de select component bevatten.",e.jsx("br",{}),`
Deze zijn de standaard opties die worden getoond bij het laden van de pagina.`,e.jsx("br",{})]}),`
`,e.jsxs(n.p,{children:["Als de form reset, worden deze opties getoond in de select component.",e.jsx("br",{})]}),`
`,e.jsxs(n.p,{children:["Indien je de ",e.jsx(n.code,{children:"opties"})," direct in de template zet bij het laden van de ",e.jsx(n.code,{children:"vl-select-rich"}),`, worden deze intern ingesteld als
de `,e.jsx(n.code,{children:"initial-options"})," property.",e.jsx("br",{})]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["Door de complexiteit van dit component is het niet mogelijk om het WCAG-compliant aan te bieden.",e.jsx("br",{}),`
We raden aan waar mogelijk gebruik te maken van de `,e.jsx(n.a,{href:"/docs/components-form-select--documentatie",children:"vl-select"}),".",e.jsx("br",{}),`
Indien er minder dan 7 opties zijn raden we aan checkboxes of radio buttons te gebruiken.`]}),`
`,e.jsx(n.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(n.h3,{id:"zoekfunctie",children:"Zoekfunctie"}),`
`,e.jsx(n.p,{children:"De zoekfunctie is standaard geactiveerd voor de multiselect."}),`
`,e.jsx(t,{of:i}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"options"}),e.jsx(s,{code:`
  [
      { label: 'Hasselt', value: 'hasselt' },
      { label: 'Turnhout', value: 'turnhout' },
      { label: 'Knokke-Heist', value: 'knokke-heist' },
      { label: 'Waregem', value: 'waregem' },
      { label: 'Lier', value: 'lier' },
      { label: 'Rio Piedras', value: 'rio piedras' }
]`,language:"ts",dark:!0})]}),`
`,e.jsx(n.h3,{id:"niet-verwijderbaar",children:"Niet verwijderbaar"}),`
`,e.jsx(t,{of:o}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"options"}),e.jsx(s,{code:`
  [
      { label: 'Hasselt', value: 'hasselt' },
      { label: 'Turnhout', value: 'turnhout' },
      { label: 'Knokke-Heist', value: 'knokke-heist' },
      { label: 'Waregem', value: 'waregem' },
      { label: 'Lier', value: 'lier' },
      { label: 'Rio Piedras', value: 'rio piedras' }
]`,language:"ts",dark:!0})]}),`
`,e.jsx(n.h3,{id:"groepen",children:"Groepen"}),`
`,e.jsx(t,{of:c}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"options"}),e.jsx(s,{code:`
  [
       {
          label: 'België',
          value: '',
          choices: [
              { label: 'Hasselt', value: 'hasselt' },
              { label: 'Turnhout', value: 'turnhout' },
              { label: 'Knokke-Heist', value: 'knokke-heist' },
              { label: 'Waregem', value: 'waregem' },
              { label: 'Lier', value: 'lier' },
          ],
      },
      {
          label: 'Puerto Rico',
          value: '',
          choices: [{ label: 'Rio Piedras', value: 'rio piedras' }],
      }
]`,language:"ts",dark:!0})]}),`
`,e.jsx(n.h3,{id:"multiselect",children:"Multiselect"}),`
`,e.jsx(n.p,{children:"De zoekfunctie is standaard geactiveerd voor de multiselect."}),`
`,e.jsx(t,{of:d}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"options"}),e.jsx(s,{code:`
  [
      { label: 'Padel', value: 'padel' },
      { label: 'Dans', value: 'dans' },
      { label: 'Drummen', value: 'drummen' },
      { label: 'Zwemmen', value: 'zwemmen' },
      { label: 'Boardgames', value: 'boardgames' },
      { label: 'Fietsen', value: 'fietsen' }
]`,language:"ts",dark:!0})]}),`
`,e.jsx(n.h3,{id:"geselecteerde-optie",children:"Geselecteerde optie"}),`
`,e.jsx(n.p,{children:"Als je een optie programmatorisch wil selecteren moet je voor deze optie de 'selected' boolean op true zetten."}),`
`,e.jsx(t,{of:h}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"options"}),e.jsx(s,{code:`
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
`,e.jsx(t,{of:u}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"options"}),e.jsx(s,{code:`
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
`,e.jsx(t,{of:p}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"options"}),e.jsx(s,{code:`
  [
      { label: 'Hasselt', value: 'hasselt', disabled: true, selected: true },
      { label: 'Turnhout', value: 'turnhout', disabled: true },
      { label: 'Knokke-Heist', value: 'knokke-heist', disabled: true },
      { label: 'Waregem', value: 'waregem', disabled: true },
      { label: 'Lier', value: 'lier', disabled: true },
      { label: 'Rio Piedras', value: 'rio piedras', disabled: true }
]`,language:"ts",dark:!0})]}),`
`,e.jsx(n.h2,{id:"validatie",children:"Validatie"}),`
`,e.jsxs(n.p,{children:[`Meer info over validatie binnen onze form componenten vind je hier:
`,e.jsx(n.a,{href:"/docs/ontwerp-form-validation--documentatie",children:"Form - Validatie"})]}),`
`,e.jsx(n.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(n.h3,{id:"choicesjs",children:"Choices.js"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://github.com/Choices-js/Choices",rel:"nofollow",children:"Documentatie Choices.js"})}),`
`,e.jsx(n.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/forms/vl-ui-select",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Select"})}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/forms/vl-ui-multiselect",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Multiselect"})})]})}function O(l={}){const{wrapper:n}={...v(),...l.components};return n?e.jsx(n,{...l,children:e.jsx(b,{...l})}):b(l)}function E(l,n){throw new Error("Expected component `"+l+"` to be defined: you likely forgot to import, pass, or provide it.")}M([B]);const U={id:"components-form-select-rich",title:"Components - Form/select-rich",tags:["autodocs"],args:j,argTypes:N,parameters:{docs:{page:O}},decorators:[l=>g` <div style="height: 400px;">${l()}</div>`]},a=W(j,({id:l,name:n,label:m,required:x,disabled:$,error:k,success:V,options:R,placeholder:S,notDeletable:f,multiple:w,search:y,position:D,resultLimit:C,noResultsText:T,noChoicesText:P,searchPlaceholder:z,onVlChange:L,onVlInput:H,onVlSelectSearch:q,onVlReset:K,onVlValid:I})=>g` <vl-select-rich
            id=${l}
            name=${n}
            label=${m}
            ?required=${x}
            ?disabled=${$}
            ?error=${k}
            ?success=${V}
            .options=${R}
            placeholder=${S}
            ?not-deletable=${f}
            ?multiple=${w}
            ?search=${y}
            position=${D}
            result-limit=${C}
            no-results-text=${T}
            no-choices-text=${P}
            search-placeholder=${z}
            @vl-change=${L}
            @vl-input=${H}
            @vl-select-search=${q}
            @vl-reset=${K}
            @vl-valid=${I}
        ></vl-select-rich>`),r=a.bind({});r.storyName="vl-select-rich - default";r.args={id:"geboorteplaats",name:"geboorteplaats",placeholder:"Kies je geboorteplaats",options:[{label:"Hasselt",value:"hasselt"},{label:"Turnhout",value:"turnhout"},{label:"Knokke-Heist",value:"knokke-heist"},{label:"Waregem",value:"waregem"},{label:"Lier",value:"lier"},{label:"Rio Piedras",value:"rio piedras"}]};const i=a.bind({});i.storyName="vl-select-rich - search";i.args={id:"geboorteplaats",name:"geboorteplaats",placeholder:"Kies je geboorteplaats",search:!0,options:[{label:"Hasselt",value:"hasselt"},{label:"Turnhout",value:"turnhout"},{label:"Knokke-Heist",value:"knokke-heist"},{label:"Waregem",value:"waregem"},{label:"Lier",value:"lier"},{label:"Rio Piedras",value:"rio piedras"}]};const o=a.bind({});o.storyName="vl-select-rich - not-deletable";o.args={id:"geboorteplaats",name:"geboorteplaats",placeholder:"Kies je geboorteplaats",notDeletable:!0,options:[{label:"Hasselt",value:"hasselt"},{label:"Turnhout",value:"turnhout"},{label:"Knokke-Heist",value:"knokke-heist"},{label:"Waregem",value:"waregem"},{label:"Lier",value:"lier"},{label:"Rio Piedras",value:"rio piedras"}]};const c=a.bind({});c.storyName="vl-select-rich - groups";c.args={id:"geboorteplaats",name:"geboorteplaats",placeholder:"Kies je geboorteplaats",options:[{label:"België",value:"",choices:[{label:"Hasselt",value:"hasselt"},{label:"Turnhout",value:"turnhout"},{label:"Knokke-Heist",value:"knokke-heist"},{label:"Waregem",value:"waregem"},{label:"Lier",value:"lier"}]},{label:"Puerto Rico",value:"",choices:[{label:"Rio Piedras",value:"rio piedras"}]}]};const d=a.bind({});d.storyName="vl-select-rich - multiple";d.args={id:"hobby's",name:"hobby's",placeholder:"Kies je hobby's",multiple:!0,options:[{label:"Padel",value:"padel"},{label:"Dans",value:"dans"},{label:"Drummen",value:"drummen"},{label:"Zwemmen",value:"zwemmen"},{label:"Boardgames",value:"boardgames"},{label:"Fietsen",value:"fietsen"}]};const h=a.bind({});h.storyName="vl-select-rich - selected option";h.args={id:"geboorteplaats",name:"geboorteplaats",placeholder:"Kies je geboorteplaats",options:[{label:"Hasselt",value:"hasselt",selected:!0},{label:"Turnhout",value:"turnhout"},{label:"Knokke-Heist",value:"knokke-heist"},{label:"Waregem",value:"waregem"},{label:"Lier",value:"lier"},{label:"Rio Piedras",value:"rio piedras"}]};const u=a.bind({});u.storyName="vl-select-rich - disabled option";u.args={id:"geboorteplaats",name:"geboorteplaats",placeholder:"Kies je geboorteplaats",options:[{label:"Hasselt",value:"hasselt",disabled:!0},{label:"Turnhout",value:"turnhout"},{label:"Knokke-Heist",value:"knokke-heist"},{label:"Waregem",value:"waregem"},{label:"Lier",value:"lier"},{label:"Rio Piedras",value:"rio piedras"}]};const p=a.bind({});p.storyName="vl-select-rich - read only";p.args={id:"geboorteplaats",name:"geboorteplaats",placeholder:"Kies je geboorteplaats",options:[{label:"Hasselt",value:"hasselt",disabled:!0,selected:!0},{label:"Turnhout",value:"turnhout",disabled:!0},{label:"Knokke-Heist",value:"knokke-heist",disabled:!0},{label:"Waregem",value:"waregem",disabled:!0},{label:"Lier",value:"lier",disabled:!0},{label:"Rio Piedras",value:"rio piedras",disabled:!0}]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(selectRichArgs, ({
  id,
  name,
  label,
  required,
  disabled,
  error,
  success,
  options,
  placeholder,
  notDeletable,
  multiple,
  search,
  position,
  resultLimit,
  noResultsText,
  noChoicesText,
  searchPlaceholder,
  onVlChange,
  onVlInput,
  onVlSelectSearch,
  onVlReset,
  onVlValid
}) => {
  return html\` <vl-select-rich
            id=\${id}
            name=\${name}
            label=\${label}
            ?required=\${required}
            ?disabled=\${disabled}
            ?error=\${error}
            ?success=\${success}
            .options=\${options}
            placeholder=\${placeholder}
            ?not-deletable=\${notDeletable}
            ?multiple=\${multiple}
            ?search=\${search}
            position=\${position}
            result-limit=\${resultLimit}
            no-results-text=\${noResultsText}
            no-choices-text=\${noChoicesText}
            search-placeholder=\${searchPlaceholder}
            @vl-change=\${onVlChange}
            @vl-input=\${onVlInput}
            @vl-select-search=\${onVlSelectSearch}
            @vl-reset=\${onVlReset}
            @vl-valid=\${onVlValid}
        ></vl-select-rich>\`;
})`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`story(selectRichArgs, ({
  id,
  name,
  label,
  required,
  disabled,
  error,
  success,
  options,
  placeholder,
  notDeletable,
  multiple,
  search,
  position,
  resultLimit,
  noResultsText,
  noChoicesText,
  searchPlaceholder,
  onVlChange,
  onVlInput,
  onVlSelectSearch,
  onVlReset,
  onVlValid
}) => {
  return html\` <vl-select-rich
            id=\${id}
            name=\${name}
            label=\${label}
            ?required=\${required}
            ?disabled=\${disabled}
            ?error=\${error}
            ?success=\${success}
            .options=\${options}
            placeholder=\${placeholder}
            ?not-deletable=\${notDeletable}
            ?multiple=\${multiple}
            ?search=\${search}
            position=\${position}
            result-limit=\${resultLimit}
            no-results-text=\${noResultsText}
            no-choices-text=\${noChoicesText}
            search-placeholder=\${searchPlaceholder}
            @vl-change=\${onVlChange}
            @vl-input=\${onVlInput}
            @vl-select-search=\${onVlSelectSearch}
            @vl-reset=\${onVlReset}
            @vl-valid=\${onVlValid}
        ></vl-select-rich>\`;
})`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`story(selectRichArgs, ({
  id,
  name,
  label,
  required,
  disabled,
  error,
  success,
  options,
  placeholder,
  notDeletable,
  multiple,
  search,
  position,
  resultLimit,
  noResultsText,
  noChoicesText,
  searchPlaceholder,
  onVlChange,
  onVlInput,
  onVlSelectSearch,
  onVlReset,
  onVlValid
}) => {
  return html\` <vl-select-rich
            id=\${id}
            name=\${name}
            label=\${label}
            ?required=\${required}
            ?disabled=\${disabled}
            ?error=\${error}
            ?success=\${success}
            .options=\${options}
            placeholder=\${placeholder}
            ?not-deletable=\${notDeletable}
            ?multiple=\${multiple}
            ?search=\${search}
            position=\${position}
            result-limit=\${resultLimit}
            no-results-text=\${noResultsText}
            no-choices-text=\${noChoicesText}
            search-placeholder=\${searchPlaceholder}
            @vl-change=\${onVlChange}
            @vl-input=\${onVlInput}
            @vl-select-search=\${onVlSelectSearch}
            @vl-reset=\${onVlReset}
            @vl-valid=\${onVlValid}
        ></vl-select-rich>\`;
})`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`story(selectRichArgs, ({
  id,
  name,
  label,
  required,
  disabled,
  error,
  success,
  options,
  placeholder,
  notDeletable,
  multiple,
  search,
  position,
  resultLimit,
  noResultsText,
  noChoicesText,
  searchPlaceholder,
  onVlChange,
  onVlInput,
  onVlSelectSearch,
  onVlReset,
  onVlValid
}) => {
  return html\` <vl-select-rich
            id=\${id}
            name=\${name}
            label=\${label}
            ?required=\${required}
            ?disabled=\${disabled}
            ?error=\${error}
            ?success=\${success}
            .options=\${options}
            placeholder=\${placeholder}
            ?not-deletable=\${notDeletable}
            ?multiple=\${multiple}
            ?search=\${search}
            position=\${position}
            result-limit=\${resultLimit}
            no-results-text=\${noResultsText}
            no-choices-text=\${noChoicesText}
            search-placeholder=\${searchPlaceholder}
            @vl-change=\${onVlChange}
            @vl-input=\${onVlInput}
            @vl-select-search=\${onVlSelectSearch}
            @vl-reset=\${onVlReset}
            @vl-valid=\${onVlValid}
        ></vl-select-rich>\`;
})`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`story(selectRichArgs, ({
  id,
  name,
  label,
  required,
  disabled,
  error,
  success,
  options,
  placeholder,
  notDeletable,
  multiple,
  search,
  position,
  resultLimit,
  noResultsText,
  noChoicesText,
  searchPlaceholder,
  onVlChange,
  onVlInput,
  onVlSelectSearch,
  onVlReset,
  onVlValid
}) => {
  return html\` <vl-select-rich
            id=\${id}
            name=\${name}
            label=\${label}
            ?required=\${required}
            ?disabled=\${disabled}
            ?error=\${error}
            ?success=\${success}
            .options=\${options}
            placeholder=\${placeholder}
            ?not-deletable=\${notDeletable}
            ?multiple=\${multiple}
            ?search=\${search}
            position=\${position}
            result-limit=\${resultLimit}
            no-results-text=\${noResultsText}
            no-choices-text=\${noChoicesText}
            search-placeholder=\${searchPlaceholder}
            @vl-change=\${onVlChange}
            @vl-input=\${onVlInput}
            @vl-select-search=\${onVlSelectSearch}
            @vl-reset=\${onVlReset}
            @vl-valid=\${onVlValid}
        ></vl-select-rich>\`;
})`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`story(selectRichArgs, ({
  id,
  name,
  label,
  required,
  disabled,
  error,
  success,
  options,
  placeholder,
  notDeletable,
  multiple,
  search,
  position,
  resultLimit,
  noResultsText,
  noChoicesText,
  searchPlaceholder,
  onVlChange,
  onVlInput,
  onVlSelectSearch,
  onVlReset,
  onVlValid
}) => {
  return html\` <vl-select-rich
            id=\${id}
            name=\${name}
            label=\${label}
            ?required=\${required}
            ?disabled=\${disabled}
            ?error=\${error}
            ?success=\${success}
            .options=\${options}
            placeholder=\${placeholder}
            ?not-deletable=\${notDeletable}
            ?multiple=\${multiple}
            ?search=\${search}
            position=\${position}
            result-limit=\${resultLimit}
            no-results-text=\${noResultsText}
            no-choices-text=\${noChoicesText}
            search-placeholder=\${searchPlaceholder}
            @vl-change=\${onVlChange}
            @vl-input=\${onVlInput}
            @vl-select-search=\${onVlSelectSearch}
            @vl-reset=\${onVlReset}
            @vl-valid=\${onVlValid}
        ></vl-select-rich>\`;
})`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`story(selectRichArgs, ({
  id,
  name,
  label,
  required,
  disabled,
  error,
  success,
  options,
  placeholder,
  notDeletable,
  multiple,
  search,
  position,
  resultLimit,
  noResultsText,
  noChoicesText,
  searchPlaceholder,
  onVlChange,
  onVlInput,
  onVlSelectSearch,
  onVlReset,
  onVlValid
}) => {
  return html\` <vl-select-rich
            id=\${id}
            name=\${name}
            label=\${label}
            ?required=\${required}
            ?disabled=\${disabled}
            ?error=\${error}
            ?success=\${success}
            .options=\${options}
            placeholder=\${placeholder}
            ?not-deletable=\${notDeletable}
            ?multiple=\${multiple}
            ?search=\${search}
            position=\${position}
            result-limit=\${resultLimit}
            no-results-text=\${noResultsText}
            no-choices-text=\${noChoicesText}
            search-placeholder=\${searchPlaceholder}
            @vl-change=\${onVlChange}
            @vl-input=\${onVlInput}
            @vl-select-search=\${onVlSelectSearch}
            @vl-reset=\${onVlReset}
            @vl-valid=\${onVlValid}
        ></vl-select-rich>\`;
})`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`story(selectRichArgs, ({
  id,
  name,
  label,
  required,
  disabled,
  error,
  success,
  options,
  placeholder,
  notDeletable,
  multiple,
  search,
  position,
  resultLimit,
  noResultsText,
  noChoicesText,
  searchPlaceholder,
  onVlChange,
  onVlInput,
  onVlSelectSearch,
  onVlReset,
  onVlValid
}) => {
  return html\` <vl-select-rich
            id=\${id}
            name=\${name}
            label=\${label}
            ?required=\${required}
            ?disabled=\${disabled}
            ?error=\${error}
            ?success=\${success}
            .options=\${options}
            placeholder=\${placeholder}
            ?not-deletable=\${notDeletable}
            ?multiple=\${multiple}
            ?search=\${search}
            position=\${position}
            result-limit=\${resultLimit}
            no-results-text=\${noResultsText}
            no-choices-text=\${noChoicesText}
            search-placeholder=\${searchPlaceholder}
            @vl-change=\${onVlChange}
            @vl-input=\${onVlInput}
            @vl-select-search=\${onVlSelectSearch}
            @vl-reset=\${onVlReset}
            @vl-valid=\${onVlValid}
        ></vl-select-rich>\`;
})`,...p.parameters?.docs?.source}}};const Y=["SelectRichDefault","SelectRichSearch","SelectRichNotDeletable","SelectRichGroups","SelectRichMultiple","SelectRichSelectedOption","SelectRichDisabledOption","SelectRichReadOnly"];export{r as SelectRichDefault,u as SelectRichDisabledOption,c as SelectRichGroups,d as SelectRichMultiple,o as SelectRichNotDeletable,p as SelectRichReadOnly,i as SelectRichSearch,h as SelectRichSelectedOption,Y as __namedExportsOrder,U as default};
