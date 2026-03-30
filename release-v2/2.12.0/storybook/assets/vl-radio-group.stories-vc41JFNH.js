import{Y as a,Z as t,u as c,j as e,C as y,bb as V,s as k,x as $,r as C}from"./iframe-BJy2lIHs.js";import{a as E,f as D}from"./form-control.stories-arg-CG2IzGZn.js";import{r as R,V as w}from"./vl-radio-group.component-BFwurkS5.js";import{V as T}from"./vl-radio.component-DybCu6Ag.js";import{M as G}from"./form-control.public-methods-doc-CUizWOw6.js";import"./preload-helper-D9Z9MdNV.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,i={...D,...R,onVlChange:l("vl-change"),onVlInput:l("vl-input"),onVlValid:l("vl-valid")},S={...E,readonly:{name:"readonly",description:"Duidt aan dat het veld enkel leesbaar is.",table:{type:{summary:t.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(i.readonly)}}},value:{name:"value",description:"De value van de radio.",table:{type:{summary:t.STRING},category:a.ATTRIBUTES,defaultValue:{summary:String(i.value)}}},onVlChange:{name:"vl-change",description:"Event dat afgevuurd wordt als een radio aangevinkt of uitgevinkt wordt (zowel programmatorisch als door een gebruiker).<br>Het detail object van het event bevat de checked state en de waarde van de radio.",table:{type:{summary:"{ checked: boolean, value?: string }"},category:a.EVENTS}},onVlInput:{name:"vl-input",description:"Event dat alleen afgevuurd wordt als een gebruiker een radio aanvinkt.<br>Het detail object van het event bevat de checked state en de waarde van de radio.",table:{type:{summary:"{ checked: boolean, value?: string }"},category:a.EVENTS}},onVlValid:{name:"vl-valid",description:"Event dat afgevuurd wordt als een radio aangevinkt wordt.<br>Het detail object van het event bevat de checked state en de waarde van de radio.",table:{type:{summary:"{ checked: boolean, value?: string }"},category:a.EVENTS}}};function s(o){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...c(),...o.components},{FluxComponentMetaData:d}=n;return d||A("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"radio-group",children:"Radio Group"}),`
`,e.jsx(d,{id:"components-form-radio-group"}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(n.p,{children:["Gebruik de ",e.jsx(n.code,{children:"radio-group"})," component om de gebruiker de mogelijkheid te geven om 1 keuze te selecteren in een lijst.",e.jsx("br",{}),`
Wanneer mogelijk, selecteer geen `,e.jsx(n.code,{children:"radio"})," van vooraf zodat de gebruiker een bewuste keuze kan maken.",e.jsx("br",{}),`
De `,e.jsx(n.code,{children:"radio"})," component is een onderdeel van de ",e.jsx(n.code,{children:"radio-group"})," component.",e.jsx("br",{}),`
Zie het `,e.jsx(n.a,{href:"/docs/patronen-formulier-demo--documentatie",children:"form demo"})," voorbeeld voor het gebruik binnen een form."]}),`
`,e.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { VlRadioComponent, VlRadioGroupComponent } from '@domg-wc/components/form';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-radio-group>
    <vl-radio></vl-radio>
    <vl-radio></vl-radio>
    <vl-radio></vl-radio>
</vl-radio-group>
`})}),`
`,e.jsx(y,{of:r}),`
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(V,{of:r}),`
`,e.jsx(n.h2,{id:"publieke-methodes",children:"Publieke methodes"}),`
`,e.jsx(G,{}),`
`,e.jsx(n.h2,{id:"validatie",children:"Validatie"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Meer info over validatie binnen onze form componenten vind je hier: ",e.jsx(n.a,{href:"/docs/patronen-formulier-validatie--documentatie",children:"Form - Validatie"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"required",children:"Required"}),`
`,e.jsxs(n.p,{children:["De ",e.jsx(n.code,{children:"radio-group"})," component kan ingesteld worden als ",e.jsx(n.code,{children:"required"}),". Dit betekent dat er minstens 1 ",e.jsx(n.code,{children:"vl-radio"})," geselecteerd moet worden."]}),`
`,e.jsx(n.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(n.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/forms/vl-ui-radio/",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen"})})]})}function _(o={}){const{wrapper:n}={...c(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}function A(o,n){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}C([T,w]);const L={id:"components-form-radio-group",title:"Components - Form/radio-group",tags:["autodocs"],args:i,argTypes:S,parameters:{docs:{page:_}}},r=k(i,({id:o,required:n,readonly:d,disabled:u,error:v,success:m,label:p,name:h,value:g,onVlChange:b,onVlInput:f,onVlReset:j,onVlValid:x})=>$`
        <vl-radio-group
            id=${o}
            name=${h}
            label=${p}
            value=${g}
            ?required=${n}
            ?readonly=${d}
            ?disabled=${u}
            ?error=${v}
            ?success=${m}
            @vl-change=${b}
            @vl-input=${f}
            @vl-reset=${j}
            @vl-valid=${x}
        >
            <vl-radio value="land">Land</vl-radio>
            <vl-radio value="zee">Zee</vl-radio>
            <vl-radio value="lucht">Lucht</vl-radio>
        </vl-radio-group>
    `);r.storyName="vl-radio-group - default";r.args={id:"land-zee",name:"land-zee",label:"land-zee",value:"land"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(radioGroupArgs, ({
  id,
  required,
  readonly,
  disabled,
  error,
  success,
  label,
  name,
  value,
  onVlChange,
  onVlInput,
  onVlReset,
  onVlValid
}) => html\`
        <vl-radio-group
            id=\${id}
            name=\${name}
            label=\${label}
            value=\${value}
            ?required=\${required}
            ?readonly=\${readonly}
            ?disabled=\${disabled}
            ?error=\${error}
            ?success=\${success}
            @vl-change=\${onVlChange}
            @vl-input=\${onVlInput}
            @vl-reset=\${onVlReset}
            @vl-valid=\${onVlValid}
        >
            <vl-radio value="land">Land</vl-radio>
            <vl-radio value="zee">Zee</vl-radio>
            <vl-radio value="lucht">Lucht</vl-radio>
        </vl-radio-group>
    \`)`,...r.parameters?.docs?.source}}};const F=["RadioGroupDefault"];export{r as RadioGroupDefault,F as __namedExportsOrder,L as default};
