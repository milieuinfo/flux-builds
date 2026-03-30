import{u as x,j as e,C as a,S as s,bb as M,s as W,x as j,r as N}from"./iframe-B6HStWZE.js";import{s as E,a as $}from"./vl-select-rich.stories-arg-B0w2wOO9.js";import{V as O}from"./vl-select-rich.component-BD7c3N1Y.js";import{M as F}from"./form-control.public-methods-doc-BSQ80Dry.js";import"./preload-helper-D9Z9MdNV.js";import"./form-control.stories-arg-BABlIkHx.js";function g(l){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...x(),...l.components},{FluxComponentMetaData:b}=n;return b||_("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"select-rich",children:"Select Rich"}),`
`,e.jsx(b,{id:"components-form-select-rich"}),`
`,e.jsx(n.h2,{id:"inhoudstafel",children:"Inhoudstafel"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#doel",children:"Doel"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#voorbeeld",children:"Voorbeeld"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#configuratie",children:"Configuratie"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#publieke-methodes",children:"Publieke methodes"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#styles",children:"Styles"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#events",children:"Events"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#select-opties",children:"Select opties"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#accessibility",children:"Accessibility"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#varianten",children:"Varianten"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#zoek-strategie%C3%ABn",children:"Zoek strategieën"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#validatie",children:"Validatie"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#referenties",children:"Referenties"})}),`
`]}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(n.p,{children:["Gebruik de ",e.jsx(n.code,{children:"select-rich"})," component om een uitgebreid select of multiselect veld toe te voegen aan een pagina.",e.jsx("br",{}),`
Zie het `,e.jsx(n.a,{href:"/docs/patronen-formulier-demo--documentatie",children:"form demo"})," voorbeeld voor het gebruik binnen een form."]}),`
`,e.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { VlSelectRichComponent } from '@domg-wc/components/form';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-select-rich></vl-select-rich>
`})}),`
`,e.jsx(a,{of:r}),`
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
`,e.jsx(M,{of:r}),`
`,e.jsx(n.h2,{id:"publieke-methodes",children:"Publieke methodes"}),`
`,e.jsx(F,{}),`
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
`,e.jsx(a,{of:r}),`
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
`,e.jsx(a,{of:i}),`
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
`,e.jsx(a,{of:o}),`
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
`,e.jsx(a,{of:c}),`
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
`,e.jsx(a,{of:d}),`
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
`,e.jsx(a,{of:h}),`
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
`,e.jsx(a,{of:u}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"options"}),e.jsx(s,{code:`
  [
      { label: 'Hasselt', value: 'hasselt', disabled: true, selected: true },
      { label: 'Turnhout', value: 'turnhout', disabled: true },
      { label: 'Knokke-Heist', value: 'knokke-heist', disabled: true },
      { label: 'Waregem', value: 'waregem', disabled: true },
      { label: 'Lier', value: 'lier', disabled: true },
      { label: 'Rio Piedras', value: 'rio piedras', disabled: true }
]`,language:"ts",dark:!0})]}),`
`,e.jsx(n.h2,{id:"zoek-strategieën",children:"Zoek strategieën"}),`
`,e.jsxs(n.p,{children:["Het ",e.jsx(n.code,{children:"search-strategy"})," attribuut (reactief) bepaalt hoe de zoekfunctie werkt bij het filteren van opties.",e.jsx("br",{}),`
Er zijn drie zoek strategieën beschikbaar: `,e.jsx(n.code,{children:"default"}),", ",e.jsx(n.code,{children:"exact-and"})," en ",e.jsx(n.code,{children:"exact-or"}),".",e.jsx("br",{})]}),`
`,e.jsx(n.h3,{id:"default",children:"default"}),`
`,e.jsxs(n.p,{children:["De standaard zoek strategie gebruikt de native Choices.js fuzzy matching van ",e.jsx(n.a,{href:"https://www.fusejs.io/",rel:"nofollow",children:"Fuse.js"}),".",e.jsx("br",{}),`
Dit betekent dat de zoekterm niet exact hoeft voor te komen in de optie.`]}),`
`,e.jsx(n.h3,{id:"exact-and",children:"exact-and"}),`
`,e.jsxs(n.p,{children:["Bij de ",e.jsx(n.code,{children:"exact-and"})," strategie moeten ",e.jsx(n.strong,{children:"alle"}),` zoekwoorden exact voorkomen in het label of value van een optie
(substring match). Bij invoer van meerdere woorden, worden alleen de opties getoond die alle woorden bevatten
(AND-logica).`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Voorbeeld:"}),` Als je zoekt op "standaard gent", wordt alleen "De Standaard van Gent" getoond, omdat dit de enige optie
is die zowel "standaard" als "gent" bevat.`]}),`
`,e.jsx(n.p,{children:"Deze strategie is geschikt wanneer je precies wil kunnen filteren op meerdere criteria tegelijk."}),`
`,e.jsx(n.h3,{id:"exact-or",children:"exact-or"}),`
`,e.jsxs(n.p,{children:["Bij de ",e.jsx(n.code,{children:"exact-or"})," strategie moet ",e.jsx(n.strong,{children:"minstens één"}),` zoekwoord exact voorkomen in het label of value van een optie
(substring match). Wanneer je meerdere woorden invoert, worden alle opties getoond die één of meer woorden bevatten
(OR-logica).`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Voorbeeld:"}),' Als je zoekt op "standaard gent", worden alle opties getoond die "standaard" ',e.jsx(n.strong,{children:"of"}),` "gent" bevatten,
zoals "De Standaard van gisteren", "De Standaard van morgen", "De Standaard van Berchem", "De Standaard van Gent"
en "Brussel Antwerpen Gent".`]}),`
`,e.jsx(n.p,{children:"Deze strategie is geschikt wanneer je breed wil kunnen zoeken op meerdere termen tegelijk."}),`
`,e.jsx(n.h2,{id:"validatie",children:"Validatie"}),`
`,e.jsxs(n.p,{children:[`Meer info over validatie binnen onze form componenten vind je hier:
`,e.jsx(n.a,{href:"/docs/patronen-formulier-validatie--documentatie",children:"Form - Validatie"})]}),`
`,e.jsx(n.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(n.h3,{id:"choicesjs",children:"Choices.js"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://github.com/Choices-js/Choices",rel:"nofollow",children:"Documentatie Choices.js"})}),`
`,e.jsx(n.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/forms/vl-ui-select",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Select"})}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/forms/vl-ui-multiselect",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Multiselect"})})]})}function Z(l={}){const{wrapper:n}={...x(),...l.components};return n?e.jsx(n,{...l,children:e.jsx(g,{...l})}):g(l)}function _(l,n){throw new Error("Expected component `"+l+"` to be defined: you likely forgot to import, pass, or provide it.")}N([O]);const ne={id:"components-form-select-rich",title:"Components - Form/select-rich",tags:["autodocs"],args:$,argTypes:E,parameters:{docs:{page:Z}},decorators:[l=>j` <div style="height: 400px;">${l()}</div>`]},t=W($,({id:l,name:n,label:b,required:S,disabled:k,error:V,success:y,options:f,placeholder:D,notDeletable:R,multiple:w,search:C,position:T,resultLimit:z,noResultsText:P,noChoicesText:L,searchPlaceholder:A,searchStrategy:q,onVlChange:H,onVlInput:B,onVlSelectSearch:I,onVlReset:G,onVlValid:K})=>j` <vl-select-rich
            id=${l}
            name=${n}
            label=${b}
            ?required=${S}
            ?disabled=${k}
            ?error=${V}
            ?success=${y}
            .options=${f}
            placeholder=${D}
            ?not-deletable=${R}
            ?multiple=${w}
            ?search=${C}
            position=${T}
            result-limit=${z}
            no-results-text=${P}
            no-choices-text=${L}
            search-placeholder=${A}
            search-strategy=${q}
            @vl-change=${H}
            @vl-input=${B}
            @vl-select-search=${I}
            @vl-reset=${G}
            @vl-valid=${K}
        ></vl-select-rich>`),r=t.bind({});r.storyName="vl-select-rich - default";r.args={id:"geboorteplaats",name:"geboorteplaats",placeholder:"Kies je geboorteplaats",options:[{label:"Hasselt",value:"hasselt"},{label:"Turnhout",value:"turnhout"},{label:"Knokke-Heist",value:"knokke-heist"},{label:"Waregem",value:"waregem"},{label:"Lier",value:"lier"},{label:"Rio Piedras",value:"rio piedras"}]};const p=t.bind({});p.storyName="vl-select-rich - search default";p.args={id:"krant",name:"krant",placeholder:"Kies een krant",search:!0,searchStrategy:"default",resultLimit:20,options:[{label:"De Morgen van gisteren",value:"De Morgen van gisteren"},{label:"De Standaard van gisteren",value:"De Standaard van gisteren"},{label:"De Standaard van morgen",value:"De Standaard van morgen"},{label:"De Standaard van Berchem",value:"De Standaard van Berchem"},{label:"De Standaard van Gent",value:"De Standaard van Gent"},{label:"Brussel Antwerpen Gent",value:"Brussel Antwerpen Gent"}]};const v=t.bind({});v.storyName="vl-select-rich - search exact-and";v.args={id:"krant",name:"krant",placeholder:"Kies een krant",search:!0,searchStrategy:"exact-and",resultLimit:20,options:[{label:"De Morgen van gisteren",value:"De Morgen van gisteren"},{label:"De Standaard van gisteren",value:"De Standaard van gisteren"},{label:"De Standaard van morgen",value:"De Standaard van morgen"},{label:"De Standaard van Berchem",value:"De Standaard van Berchem"},{label:"De Standaard van Gent",value:"De Standaard van Gent"},{label:"Brussel Antwerpen Gent",value:"Brussel Antwerpen Gent"}]};const m=t.bind({});m.storyName="vl-select-rich - search exact-or";m.args={id:"krant",name:"krant",placeholder:"Kies een krant",search:!0,searchStrategy:"exact-or",resultLimit:20,options:[{label:"De Morgen van gisteren",value:"De Morgen van gisteren"},{label:"De Standaard van gisteren",value:"De Standaard van gisteren"},{label:"De Standaard van morgen",value:"De Standaard van morgen"},{label:"De Standaard van Berchem",value:"De Standaard van Berchem"},{label:"De Standaard van Gent",value:"De Standaard van Gent"},{label:"Brussel Antwerpen Gent",value:"Brussel Antwerpen Gent"}]};const i=t.bind({});i.storyName="vl-select-rich - not-deletable";i.args={id:"geboorteplaats",name:"geboorteplaats",placeholder:"Kies je geboorteplaats",notDeletable:!0,options:[{label:"Hasselt",value:"hasselt"},{label:"Turnhout",value:"turnhout"},{label:"Knokke-Heist",value:"knokke-heist"},{label:"Waregem",value:"waregem"},{label:"Lier",value:"lier"},{label:"Rio Piedras",value:"rio piedras"}]};const o=t.bind({});o.storyName="vl-select-rich - groups";o.args={id:"geboorteplaats",name:"geboorteplaats",placeholder:"Kies je geboorteplaats",options:[{label:"België",value:"",choices:[{label:"Hasselt",value:"hasselt"},{label:"Turnhout",value:"turnhout"},{label:"Knokke-Heist",value:"knokke-heist"},{label:"Waregem",value:"waregem"},{label:"Lier",value:"lier"}]},{label:"Puerto Rico",value:"",choices:[{label:"Rio Piedras",value:"rio piedras"}]}]};const c=t.bind({});c.storyName="vl-select-rich - multiple";c.args={id:"hobby's",name:"hobby's",placeholder:"Kies je hobby's",multiple:!0,options:[{label:"Padel",value:"padel"},{label:"Dans",value:"dans"},{label:"Drummen",value:"drummen"},{label:"Zwemmen",value:"zwemmen"},{label:"Boardgames",value:"boardgames"},{label:"Fietsen",value:"fietsen"}]};const d=t.bind({});d.storyName="vl-select-rich - selected option";d.args={id:"geboorteplaats",name:"geboorteplaats",placeholder:"Kies je geboorteplaats",options:[{label:"Hasselt",value:"hasselt",selected:!0},{label:"Turnhout",value:"turnhout"},{label:"Knokke-Heist",value:"knokke-heist"},{label:"Waregem",value:"waregem"},{label:"Lier",value:"lier"},{label:"Rio Piedras",value:"rio piedras"}]};const h=t.bind({});h.storyName="vl-select-rich - disabled option";h.args={id:"geboorteplaats",name:"geboorteplaats",placeholder:"Kies je geboorteplaats",options:[{label:"Hasselt",value:"hasselt",disabled:!0},{label:"Turnhout",value:"turnhout"},{label:"Knokke-Heist",value:"knokke-heist"},{label:"Waregem",value:"waregem"},{label:"Lier",value:"lier"},{label:"Rio Piedras",value:"rio piedras"}]};const u=t.bind({});u.storyName="vl-select-rich - read only";u.args={id:"geboorteplaats",name:"geboorteplaats",placeholder:"Kies je geboorteplaats",options:[{label:"Hasselt",value:"hasselt",disabled:!0,selected:!0},{label:"Turnhout",value:"turnhout",disabled:!0},{label:"Knokke-Heist",value:"knokke-heist",disabled:!0},{label:"Waregem",value:"waregem",disabled:!0},{label:"Lier",value:"lier",disabled:!0},{label:"Rio Piedras",value:"rio piedras",disabled:!0}]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(selectRichArgs, ({
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
  searchStrategy,
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
            search-strategy=\${searchStrategy}
            @vl-change=\${onVlChange}
            @vl-input=\${onVlInput}
            @vl-select-search=\${onVlSelectSearch}
            @vl-reset=\${onVlReset}
            @vl-valid=\${onVlValid}
        ></vl-select-rich>\`;
})`,...r.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`story(selectRichArgs, ({
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
  searchStrategy,
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
            search-strategy=\${searchStrategy}
            @vl-change=\${onVlChange}
            @vl-input=\${onVlInput}
            @vl-select-search=\${onVlSelectSearch}
            @vl-reset=\${onVlReset}
            @vl-valid=\${onVlValid}
        ></vl-select-rich>\`;
})`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`story(selectRichArgs, ({
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
  searchStrategy,
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
            search-strategy=\${searchStrategy}
            @vl-change=\${onVlChange}
            @vl-input=\${onVlInput}
            @vl-select-search=\${onVlSelectSearch}
            @vl-reset=\${onVlReset}
            @vl-valid=\${onVlValid}
        ></vl-select-rich>\`;
})`,...v.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`story(selectRichArgs, ({
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
  searchStrategy,
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
            search-strategy=\${searchStrategy}
            @vl-change=\${onVlChange}
            @vl-input=\${onVlInput}
            @vl-select-search=\${onVlSelectSearch}
            @vl-reset=\${onVlReset}
            @vl-valid=\${onVlValid}
        ></vl-select-rich>\`;
})`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`story(selectRichArgs, ({
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
  searchStrategy,
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
            search-strategy=\${searchStrategy}
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
  searchStrategy,
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
            search-strategy=\${searchStrategy}
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
  searchStrategy,
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
            search-strategy=\${searchStrategy}
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
  searchStrategy,
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
            search-strategy=\${searchStrategy}
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
  searchStrategy,
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
            search-strategy=\${searchStrategy}
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
  searchStrategy,
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
            search-strategy=\${searchStrategy}
            @vl-change=\${onVlChange}
            @vl-input=\${onVlInput}
            @vl-select-search=\${onVlSelectSearch}
            @vl-reset=\${onVlReset}
            @vl-valid=\${onVlValid}
        ></vl-select-rich>\`;
})`,...u.parameters?.docs?.source}}};const le=["SelectRichDefault","SelectRichSearchStrategyDefault","SelectRichSearchStrategyExactAnd","SelectRichSearchStrategyExactOr","SelectRichNotDeletable","SelectRichGroups","SelectRichMultiple","SelectRichSelectedOption","SelectRichDisabledOption","SelectRichReadOnly"];export{r as SelectRichDefault,h as SelectRichDisabledOption,o as SelectRichGroups,c as SelectRichMultiple,i as SelectRichNotDeletable,u as SelectRichReadOnly,p as SelectRichSearchStrategyDefault,v as SelectRichSearchStrategyExactAnd,m as SelectRichSearchStrategyExactOr,d as SelectRichSelectedOption,le as __namedExportsOrder,ne as default};
