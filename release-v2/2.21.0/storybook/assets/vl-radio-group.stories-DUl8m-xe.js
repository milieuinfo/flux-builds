import{Z as l,_ as s,u as c,j as e,C as y,b7 as k,s as C,b as R,r as w}from"./iframe-CsVpDM3d.js";import{a as D,f as E}from"./form-control.stories-arg-CeEv9zk2.js";import{r as T,V as G}from"./vl-radio-group.component-zNwhQE1k.js";import{V as q}from"./vl-radio.component-Dq4icxGt.js";import{M as z}from"./form-control.public-methods-doc-D6K7I0CG.js";import{M as S}from"./form-control.describedby-doc-BSAyQfx0.js";import"./preload-helper-PPVm8Dsz.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,i={...E,...T,onVlChange:t("vl-change"),onVlInput:t("vl-input"),onVlValid:t("vl-valid")},M={...D,readonly:{name:"readonly",description:"Duidt aan dat het veld enkel leesbaar is.",table:{type:{summary:s.BOOLEAN},category:l.ATTRIBUTES,defaultValue:{summary:String(i.readonly)}}},value:{name:"value",description:"De value van de radio.",table:{type:{summary:s.STRING},category:l.ATTRIBUTES,defaultValue:{summary:String(i.value)}}},onVlChange:{name:"vl-change",description:"Event dat afgevuurd wordt als een radio aangevinkt of uitgevinkt wordt (zowel programmatorisch als door een gebruiker).<br>Het detail object van het event bevat de checked state en de waarde van de radio.",table:{type:{summary:"{ checked: boolean, value?: string }"},category:l.EVENTS}},onVlInput:{name:"vl-input",description:"Event dat alleen afgevuurd wordt als een gebruiker een radio aanvinkt.<br>Het detail object van het event bevat de checked state en de waarde van de radio.",table:{type:{summary:"{ checked: boolean, value?: string }"},category:l.EVENTS}},onVlValid:{name:"vl-valid",description:"Event dat afgevuurd wordt als een radio aangevinkt wordt.<br>Het detail object van het event bevat de checked state en de waarde van de radio.",table:{type:{summary:"{ checked: boolean, value?: string }"},category:l.EVENTS}}};function u(a){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...c(),...a.components},{FluxComponentMetaData:d}=n;return d||A("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"radio-group",children:"Radio Group"}),`
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
`,e.jsx(y,{of:o}),`
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(k,{of:o}),`
`,e.jsx(n.h2,{id:"publieke-methodes",children:"Publieke methodes"}),`
`,e.jsx(z,{}),`
`,e.jsx(n.h2,{id:"beschrijving",children:"Beschrijving"}),`
`,e.jsx(S,{}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-radio-group label="Contactmethode" describedby="contactmethode-info">
    <vl-radio value="e-mail">e-mail</vl-radio>
    <vl-radio value="telefoon">telefoon</vl-radio>
</vl-radio-group>
<vl-form-message variant="annotation" id="contactmethode-info">
    We contacteren je enkel over je aanvraag.
</vl-form-message>
`})}),`
`,e.jsx(n.h2,{id:"validatie",children:"Validatie"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Meer info over validatie binnen onze form componenten vind je hier: ",e.jsx(n.a,{href:"/docs/patronen-formulier-validatie--documentatie",children:"Form - Validatie"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"required",children:"Required"}),`
`,e.jsxs(n.p,{children:["De ",e.jsx(n.code,{children:"radio-group"})," component kan ingesteld worden als ",e.jsx(n.code,{children:"required"}),". Dit betekent dat er minstens 1 ",e.jsx(n.code,{children:"vl-radio"})," geselecteerd moet worden."]}),`
`,e.jsx(n.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(n.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/componenten/radio",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen"})})]})}function _(a={}){const{wrapper:n}={...c(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(u,{...a})}):u(a)}function A(a,n){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}w([q,G]);const Z={id:"components-form-radio-group",title:"Components - Form/radio-group",tags:["autodocs"],args:i,argTypes:M,parameters:{docs:{page:_}}},o=C(i,({id:a,required:n,readonly:d,disabled:v,error:m,success:p,blurValidation:h,label:g,name:b,value:j,onVlChange:f,onVlInput:x,onVlReset:V,onVlValid:$})=>R`
        <vl-radio-group
            id=${a}
            name=${b}
            label=${g}
            value=${j}
            ?required=${n}
            ?readonly=${d}
            ?disabled=${v}
            ?error=${m}
            ?success=${p}
            ?blur-validation=${h}
            @vl-change=${f}
            @vl-input=${x}
            @vl-reset=${V}
            @vl-valid=${$}
        >
            <vl-radio value="land">Land</vl-radio>
            <vl-radio value="zee">Zee</vl-radio>
            <vl-radio value="lucht">Lucht</vl-radio>
        </vl-radio-group>
    `);o.storyName="vl-radio-group - default";o.args={id:"land-zee",name:"land-zee",label:"land-zee",value:"land"};const r=o.bind({});r.storyName="vl-radio-group - blur validation";r.args={id:"land-zee-validation",name:"land-zee-validation",label:"land-zee-validation",value:"",required:!0,blurValidation:!0};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`story(radioGroupArgs, ({
  id,
  required,
  readonly,
  disabled,
  error,
  success,
  blurValidation,
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
            ?blur-validation=\${blurValidation}
            @vl-change=\${onVlChange}
            @vl-input=\${onVlInput}
            @vl-reset=\${onVlReset}
            @vl-valid=\${onVlValid}
        >
            <vl-radio value="land">Land</vl-radio>
            <vl-radio value="zee">Zee</vl-radio>
            <vl-radio value="lucht">Lucht</vl-radio>
        </vl-radio-group>
    \`)`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(radioGroupArgs, ({
  id,
  required,
  readonly,
  disabled,
  error,
  success,
  blurValidation,
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
            ?blur-validation=\${blurValidation}
            @vl-change=\${onVlChange}
            @vl-input=\${onVlInput}
            @vl-reset=\${onVlReset}
            @vl-valid=\${onVlValid}
        >
            <vl-radio value="land">Land</vl-radio>
            <vl-radio value="zee">Zee</vl-radio>
            <vl-radio value="lucht">Lucht</vl-radio>
        </vl-radio-group>
    \`)`,...r.parameters?.docs?.source}}};const H=["RadioGroupDefault","RadioGroupBlurValidation"];export{r as RadioGroupBlurValidation,o as RadioGroupDefault,H as __namedExportsOrder,Z as default};
