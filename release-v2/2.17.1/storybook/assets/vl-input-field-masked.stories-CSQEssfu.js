import{Z as v,_ as b,a2 as J,a1 as W,u as f,j as e,C as l,b8 as Y,s as Q,x as g,r as ee,b as ne,T as ae}from"./iframe-DynOw9qF.js";import{i as le,D as V,V as y}from"./vl-input-field-masked.component-DdXfAdAC.js";import{a as ie,i as re}from"./vl-input-field.stories-arg-DnE4zfK-.js";import{M as se}from"./form-control.public-methods-doc-VCr5AkLW.js";import"./preload-helper-D9Z9MdNV.js";import"./cleave-esm-DfUhcNrv.js";import"./form-control.stories-arg-BtJ2It1_.js";const $={...ie,...le},de={...re,mask:{name:"mask",description:"Het mask dat gebruikt moet worden.<br/>Dit attribuut is niet reactief.",control:{type:W.SELECT},options:Object.keys(V),table:{type:{summary:J(Object.keys(V))},category:v.ATTRIBUTES,defaultValue:{summary:$.mask}}},maskPrefix:{name:"mask-prefix",description:"Zet de prefix van het mask.<br/>De prefix wordt automatisch toegevoegd aan de value van het input veld indien de value niet begint met de prefix.<br/>Dit attribuut is niet reactief.",table:{type:{summary:b.STRING},category:v.ATTRIBUTES,defaultValue:{summary:String($.maskPrefix)}}},rawValue:{name:"raw-value",description:"Geeft de raw value terug bij het submitten van een form.",table:{type:{summary:b.BOOLEAN},category:v.ATTRIBUTES,defaultValue:{summary:String($.rawValue)}}},disableMaskValidation:{name:"disable-mask-validation",description:"Schakelt de automatische mask validatie uit.",table:{type:{summary:b.BOOLEAN},category:v.ATTRIBUTES,defaultValue:{summary:String($.disableMaskValidation)}}},regex:{name:"regex",description:"Overschrijft de regex die gebruikt wordt bij de mask validatie.<br/>Bij het testen van de regex wordt altijd de raw value gebruikt.",control:!1,table:{type:{summary:b.REGEX},category:v.PROPERTIES,defaultValue:{summary:String($.regex)}}}};function j(a){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...f(),...a.components},{FluxComponentMetaData:k}=n;return k||oe("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"input-field-masked",children:"Input Field Masked"}),`
`,e.jsx(k,{id:"components-form-input-field-masked"}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(n.p,{children:["Gebruik de ",e.jsx(n.code,{children:"input-field-masked"})," component om een input veld met een mask toe te voegen aan een pagina.",e.jsx("br",{}),`
Zie het `,e.jsx(n.a,{href:"/docs/patronen-formulier-demo--documentatie",children:"form demo"})," voorbeeld voor het gebruik binnen een form."]}),`
`,e.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { VlInputFieldMaskedComponent } from '@domg-wc/components/form';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-input-field-masked></vl-input-field-masked>
`})}),`
`,e.jsx(l,{of:i}),`
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(Y,{of:i}),`
`,e.jsx(n.h2,{id:"publieke-methodes",children:"Publieke methodes"}),`
`,e.jsx(se,{}),`
`,e.jsx(n.h3,{id:"getrawvalue-string",children:"getRawValue(): string"}),`
`,e.jsxs(n.p,{children:["Geeft de raw value van de input terug (zonder mask).",e.jsx("br",{}),`
Bij het `,e.jsx(n.code,{children:"price"})," mask wordt de prefix weggelaten."]}),`
`,e.jsx(n.h2,{id:"validatie",children:"Validatie"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Meer info over validatie binnen onze form componenten vind je hier: ",e.jsx(n.a,{href:"/docs/patronen-formulier-validatie--documentatie",children:"Form - Validatie"})]}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Er wordt automatisch mask validatie toegevoegd aan het input veld, je kan dit uitschakelen met het ",e.jsx(n.code,{children:"disable-mask-validation"})," attribuut."]}),`
`,e.jsxs(n.li,{children:["Bij de mask validatie wordt er gebruik gemaakt van een regex, deze kan je overschrijven met de ",e.jsx(n.code,{children:"regex"})," property."]}),`
`,e.jsx(n.li,{children:"Bij het testen van de regex wordt altijd de raw value van het input veld gebruikt."}),`
`,e.jsxs(n.li,{children:["De ",e.jsx(n.code,{children:"patternMismatch"})," ValidityState key wordt gebruikt voor de mask validatie error."]}),`
`,e.jsxs(n.li,{children:["Het is mogelijk om de mask validatie te combineren met andere validaties, bv. ",e.jsx(n.code,{children:"required"}),", ",e.jsx(n.code,{children:"min"}),", ",e.jsx(n.code,{children:"max"}),"."]}),`
`,e.jsxs(n.li,{children:["We voorzien momenteel enkel validatie voor de ",e.jsx(n.code,{children:"text"})," input type."]}),`
`]}),`
`,e.jsx(n.h2,{id:"masks",children:"Masks"}),`
`,e.jsx(n.h3,{id:"iban",children:"Iban"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Enkel nummers"}),`
`,e.jsxs(n.li,{children:["Prefix: ",e.jsx(n.code,{children:"BE"})]}),`
`,e.jsxs(n.li,{children:["Formaat: ",e.jsx(n.code,{children:"BE00 0000 0000 0000"})]}),`
`,e.jsxs(n.li,{children:["Regex: ",e.jsx(n.code,{children:"/^[A-Z]{2}[0-9]{14}$/"})]}),`
`]}),`
`,e.jsx(l,{of:i}),`
`,e.jsx(n.h3,{id:"rijksregisternummer",children:"Rijksregisternummer"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Enkel nummers"}),`
`,e.jsxs(n.li,{children:["Formaat: ",e.jsx(n.code,{children:"00.00.00-000.00"})]}),`
`,e.jsxs(n.li,{children:["Regex: ",e.jsx(n.code,{children:"/^[0-9]{11}$/"})]}),`
`]}),`
`,e.jsx(l,{of:d}),`
`,e.jsx(n.h3,{id:"uuid",children:"UUID"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Enkel hexadecimale karakters"}),`
`,e.jsxs(n.li,{children:["Formaat: ",e.jsx(n.code,{children:"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"})]}),`
`,e.jsxs(n.li,{children:["Regex: ",e.jsx(n.code,{children:"/^[0-9a-fA-F]{32}$/"})]}),`
`]}),`
`,e.jsx(l,{of:t}),`
`,e.jsx(n.h3,{id:"date",children:"Date"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Enkel nummers"}),`
`,e.jsxs(n.li,{children:["Formaat: ",e.jsx(n.code,{children:"dd.mm.yyyy"})]}),`
`,e.jsxs(n.li,{children:["Regex: ",e.jsx(n.code,{children:"/^[0-9]{8}$/"})]}),`
`]}),`
`,e.jsx(l,{of:o}),`
`,e.jsx(n.h3,{id:"numerical",children:"Numerical"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Enkel nummers"}),`
`,e.jsx(n.li,{children:"2 decimalen"}),`
`,e.jsxs(n.li,{children:["Decimaal karakter: ",e.jsx(n.code,{children:","})]}),`
`,e.jsxs(n.li,{children:["Duizendtal karakter: ",e.jsx(n.code,{children:"."})]}),`
`,e.jsxs(n.li,{children:["Regex: ",e.jsx(n.code,{children:"/^[0-9]+(.[0-9]+)?$/"})]}),`
`]}),`
`,e.jsx(l,{of:m}),`
`,e.jsx(n.h3,{id:"price",children:"Price"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Enkel nummers"}),`
`,e.jsx(n.li,{children:"2 decimalen"}),`
`,e.jsxs(n.li,{children:["Prefix: ",e.jsx(n.code,{children:"€"})]}),`
`,e.jsxs(n.li,{children:["Decimaal karakter: ",e.jsx(n.code,{children:","})]}),`
`,e.jsxs(n.li,{children:["Duizendtal karakter: ",e.jsx(n.code,{children:"."})]}),`
`,e.jsxs(n.li,{children:["Regex: ",e.jsx(n.code,{children:"/^[0-9]+(.[0-9]+)?$/"})]}),`
`,e.jsx(n.li,{children:"De prefix wordt weggelaten bij de raw value."}),`
`]}),`
`,e.jsx(l,{of:c}),`
`,e.jsx(n.h3,{id:"phone",children:"Phone"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Enkel nummers"}),`
`,e.jsxs(n.li,{children:["Prefix: ",e.jsx(n.code,{children:"+32"})]}),`
`,e.jsxs(n.li,{children:["Formaat: ",e.jsx(n.code,{children:"+32 00 00 00 00"})]}),`
`,e.jsxs(n.li,{children:["Regex: ",e.jsx(n.code,{children:"/^\\+[0-9]{10}$/"})]}),`
`]}),`
`,e.jsx(l,{of:u}),`
`,e.jsx(n.h3,{id:"phone-international",children:"Phone international"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Enkel nummers"}),`
`,e.jsxs(n.li,{children:["Regex: ",e.jsx(n.code,{children:"/^[0-9]*$/"})]}),`
`]}),`
`,e.jsx(l,{of:x}),`
`,e.jsx(n.h3,{id:"mobile",children:"Mobile"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Enkel nummers"}),`
`,e.jsxs(n.li,{children:["Prefix: ",e.jsx(n.code,{children:"+32"})]}),`
`,e.jsxs(n.li,{children:["Formaat: ",e.jsx(n.code,{children:"+32 000 00 00 00"})]}),`
`,e.jsxs(n.li,{children:["Regex: ",e.jsx(n.code,{children:"/^\\+[0-9]{11}$/"})]}),`
`]}),`
`,e.jsx(l,{of:p}),`
`,e.jsx(n.h3,{id:"custom",children:"Custom"}),`
`,e.jsxs(n.p,{children:["Je kan ook zelf masks toevoegen door de functie ",e.jsx(n.code,{children:"VlInputFieldMasked.setMasks()"})," aan te roepen."]}),`
`,e.jsx(n.p,{children:"Hieronder volgt een code voorbeeld:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`export const CUSTOM_MASK = {
  blocks: [8, 4],
  delimiters: ['-'],
  numericOnly: true,
  numeralPositiveOnly: true,
  regex: /^[0-9]{12}$/
}

VlInputFieldMaskedComponent.setMasks({'custom-mask': CUSTOM_MASK})
`})}),`
`,e.jsxs(n.p,{children:[`Je roept deze best aan bij het entry point van je applicatie. Daarna is de mask beschikbaar voor elke
`,e.jsx(n.code,{children:"vl-input-field-masked"}),"."]}),`
`,e.jsx(l,{of:h}),`
`,e.jsx(n.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(n.h3,{id:"cleavejs",children:"Cleave.js"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://nosir.github.io/cleave.js/",rel:"nofollow",children:"Documentatie Cleave.js"})})]})}function te(a={}){const{wrapper:n}={...f(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(j,{...a})}):j(a)}function oe(a,n){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}ee([y,ne]);const me={blocks:[8,4],delimiters:["-"],numericOnly:!0,numeralPositiveOnly:!0,regex:/^[0-9]{12}$/};y.setMasks({"custom-mask":me});const ve={id:"components-form-input-field-masked",title:"Components - Form/input-field-masked",tags:["autodocs"],args:$,argTypes:de,parameters:{controls:{exclude:["pattern","type"]},docs:{page:te}}},r=Q($,({id:a,name:n,label:k,required:M,disabled:E,error:I,success:F,blurValidation:w,block:C,readonly:L,value:R,placeholder:P,autocomplete:q,minLength:S,maxLength:D,min:A,max:T,minExclusive:N,maxExclusive:O,mask:B,maskPrefix:U,rawValue:_,disableMaskValidation:z,regex:G,onVlChange:X,onVlInput:K,onVlReset:Z,onVlValid:H})=>g`
            <vl-input-field-masked
                id=${a}
                name=${n}
                label=${k}
                ?required=${M}
                ?disabled=${E}
                ?error=${I}
                ?success=${F}
                ?blur-validation=${w}
                ?block=${C}
                ?readonly=${L}
                value=${R}
                placeholder=${P}
                autocomplete=${q}
                min-length=${S}
                max-length=${D}
                min=${A}
                max=${T}
                min-exclusive=${N}
                max-exclusive=${O}
                mask=${B}
                mask-prefix=${U}
                ?raw-value=${_}
                ?disable-mask-validation=${z}
                .regex=${G}
                @vl-change=${X}
                @vl-input=${K}
                @vl-reset=${Z}
                @vl-valid=${H}
            ></vl-input-field-masked>
        `),s=(a,n)=>k=>g`
        <div>
            <vl-form-label for="story-input" label=${a} block></vl-form-label>
            ${k()} ${n?g`<br /><vl-text annotation small>${n}</vl-text>`:ae}
        </div>
    `,i=r.bind({});i.storyName="vl-input-field-masked - iban";i.decorators=[s("IBAN","bv. BE94 7310 5568 1914")];i.args={id:"story-input",mask:"iban"};const d=r.bind({});d.storyName="vl-input-field-masked - rrn";d.decorators=[s("Rijkregisternummer","bv. 85.01.05-123.40")];d.args={id:"story-input",mask:"rrn"};const t=r.bind({});t.storyName="vl-input-field-masked - uuid";t.decorators=[s("UUID","bv. 234DFF23-423F-DF23-4D34-53D3296018DC")];t.args={id:"story-input",mask:"uuid"};const o=r.bind({});o.storyName="vl-input-field-masked - date";o.decorators=[s("Date","bv. 21.12.2025")];o.args={id:"story-input",mask:"date"};const m=r.bind({});m.storyName="vl-input-field-masked - numerical";m.decorators=[s("Numerical","bv. 123")];m.args={id:"story-input",mask:"numerical"};const c=r.bind({});c.storyName="vl-input-field-masked - price";c.decorators=[s("Price","bv. € 1.000,59")];c.args={id:"story-input",mask:"price"};const u=r.bind({});u.storyName="vl-input-field-masked - phone";u.decorators=[s("Phone","bv. +32 24 42 26 00")];u.args={id:"story-input",mask:"phone"};const x=r.bind({});x.storyName="vl-input-field-masked - phoneinternational";x.decorators=[s("Phone international","bv. 032422600")];x.args={id:"story-input",mask:"phoneinternational"};const p=r.bind({});p.storyName="vl-input-field-masked - mobile";p.decorators=[s("Mobile","bv. +32 478 34 23 12")];p.args={id:"story-input",mask:"mobile"};const h=r.bind({});h.storyName="vl-input-field-masked - custom";h.decorators=[s("Custom","bv. 5345-44523431")];h.args={id:"story-input",mask:"custom-mask"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`story(inputFieldMaskedArgs, ({
  id,
  name,
  label,
  required,
  disabled,
  error,
  success,
  blurValidation,
  block,
  readonly,
  value,
  placeholder,
  autocomplete,
  minLength,
  maxLength,
  min,
  max,
  minExclusive,
  maxExclusive,
  mask,
  maskPrefix,
  rawValue,
  disableMaskValidation,
  regex,
  onVlChange,
  onVlInput,
  onVlReset,
  onVlValid
}) => {
  return html\`
            <vl-input-field-masked
                id=\${id}
                name=\${name}
                label=\${label}
                ?required=\${required}
                ?disabled=\${disabled}
                ?error=\${error}
                ?success=\${success}
                ?blur-validation=\${blurValidation}
                ?block=\${block}
                ?readonly=\${readonly}
                value=\${value}
                placeholder=\${placeholder}
                autocomplete=\${autocomplete}
                min-length=\${minLength}
                max-length=\${maxLength}
                min=\${min}
                max=\${max}
                min-exclusive=\${minExclusive}
                max-exclusive=\${maxExclusive}
                mask=\${mask}
                mask-prefix=\${maskPrefix}
                ?raw-value=\${rawValue}
                ?disable-mask-validation=\${disableMaskValidation}
                .regex=\${regex}
                @vl-change=\${onVlChange}
                @vl-input=\${onVlInput}
                @vl-reset=\${onVlReset}
                @vl-valid=\${onVlValid}
            ></vl-input-field-masked>
        \`;
})`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`story(inputFieldMaskedArgs, ({
  id,
  name,
  label,
  required,
  disabled,
  error,
  success,
  blurValidation,
  block,
  readonly,
  value,
  placeholder,
  autocomplete,
  minLength,
  maxLength,
  min,
  max,
  minExclusive,
  maxExclusive,
  mask,
  maskPrefix,
  rawValue,
  disableMaskValidation,
  regex,
  onVlChange,
  onVlInput,
  onVlReset,
  onVlValid
}) => {
  return html\`
            <vl-input-field-masked
                id=\${id}
                name=\${name}
                label=\${label}
                ?required=\${required}
                ?disabled=\${disabled}
                ?error=\${error}
                ?success=\${success}
                ?blur-validation=\${blurValidation}
                ?block=\${block}
                ?readonly=\${readonly}
                value=\${value}
                placeholder=\${placeholder}
                autocomplete=\${autocomplete}
                min-length=\${minLength}
                max-length=\${maxLength}
                min=\${min}
                max=\${max}
                min-exclusive=\${minExclusive}
                max-exclusive=\${maxExclusive}
                mask=\${mask}
                mask-prefix=\${maskPrefix}
                ?raw-value=\${rawValue}
                ?disable-mask-validation=\${disableMaskValidation}
                .regex=\${regex}
                @vl-change=\${onVlChange}
                @vl-input=\${onVlInput}
                @vl-reset=\${onVlReset}
                @vl-valid=\${onVlValid}
            ></vl-input-field-masked>
        \`;
})`,...d.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`story(inputFieldMaskedArgs, ({
  id,
  name,
  label,
  required,
  disabled,
  error,
  success,
  blurValidation,
  block,
  readonly,
  value,
  placeholder,
  autocomplete,
  minLength,
  maxLength,
  min,
  max,
  minExclusive,
  maxExclusive,
  mask,
  maskPrefix,
  rawValue,
  disableMaskValidation,
  regex,
  onVlChange,
  onVlInput,
  onVlReset,
  onVlValid
}) => {
  return html\`
            <vl-input-field-masked
                id=\${id}
                name=\${name}
                label=\${label}
                ?required=\${required}
                ?disabled=\${disabled}
                ?error=\${error}
                ?success=\${success}
                ?blur-validation=\${blurValidation}
                ?block=\${block}
                ?readonly=\${readonly}
                value=\${value}
                placeholder=\${placeholder}
                autocomplete=\${autocomplete}
                min-length=\${minLength}
                max-length=\${maxLength}
                min=\${min}
                max=\${max}
                min-exclusive=\${minExclusive}
                max-exclusive=\${maxExclusive}
                mask=\${mask}
                mask-prefix=\${maskPrefix}
                ?raw-value=\${rawValue}
                ?disable-mask-validation=\${disableMaskValidation}
                .regex=\${regex}
                @vl-change=\${onVlChange}
                @vl-input=\${onVlInput}
                @vl-reset=\${onVlReset}
                @vl-valid=\${onVlValid}
            ></vl-input-field-masked>
        \`;
})`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`story(inputFieldMaskedArgs, ({
  id,
  name,
  label,
  required,
  disabled,
  error,
  success,
  blurValidation,
  block,
  readonly,
  value,
  placeholder,
  autocomplete,
  minLength,
  maxLength,
  min,
  max,
  minExclusive,
  maxExclusive,
  mask,
  maskPrefix,
  rawValue,
  disableMaskValidation,
  regex,
  onVlChange,
  onVlInput,
  onVlReset,
  onVlValid
}) => {
  return html\`
            <vl-input-field-masked
                id=\${id}
                name=\${name}
                label=\${label}
                ?required=\${required}
                ?disabled=\${disabled}
                ?error=\${error}
                ?success=\${success}
                ?blur-validation=\${blurValidation}
                ?block=\${block}
                ?readonly=\${readonly}
                value=\${value}
                placeholder=\${placeholder}
                autocomplete=\${autocomplete}
                min-length=\${minLength}
                max-length=\${maxLength}
                min=\${min}
                max=\${max}
                min-exclusive=\${minExclusive}
                max-exclusive=\${maxExclusive}
                mask=\${mask}
                mask-prefix=\${maskPrefix}
                ?raw-value=\${rawValue}
                ?disable-mask-validation=\${disableMaskValidation}
                .regex=\${regex}
                @vl-change=\${onVlChange}
                @vl-input=\${onVlInput}
                @vl-reset=\${onVlReset}
                @vl-valid=\${onVlValid}
            ></vl-input-field-masked>
        \`;
})`,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`story(inputFieldMaskedArgs, ({
  id,
  name,
  label,
  required,
  disabled,
  error,
  success,
  blurValidation,
  block,
  readonly,
  value,
  placeholder,
  autocomplete,
  minLength,
  maxLength,
  min,
  max,
  minExclusive,
  maxExclusive,
  mask,
  maskPrefix,
  rawValue,
  disableMaskValidation,
  regex,
  onVlChange,
  onVlInput,
  onVlReset,
  onVlValid
}) => {
  return html\`
            <vl-input-field-masked
                id=\${id}
                name=\${name}
                label=\${label}
                ?required=\${required}
                ?disabled=\${disabled}
                ?error=\${error}
                ?success=\${success}
                ?blur-validation=\${blurValidation}
                ?block=\${block}
                ?readonly=\${readonly}
                value=\${value}
                placeholder=\${placeholder}
                autocomplete=\${autocomplete}
                min-length=\${minLength}
                max-length=\${maxLength}
                min=\${min}
                max=\${max}
                min-exclusive=\${minExclusive}
                max-exclusive=\${maxExclusive}
                mask=\${mask}
                mask-prefix=\${maskPrefix}
                ?raw-value=\${rawValue}
                ?disable-mask-validation=\${disableMaskValidation}
                .regex=\${regex}
                @vl-change=\${onVlChange}
                @vl-input=\${onVlInput}
                @vl-reset=\${onVlReset}
                @vl-valid=\${onVlValid}
            ></vl-input-field-masked>
        \`;
})`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`story(inputFieldMaskedArgs, ({
  id,
  name,
  label,
  required,
  disabled,
  error,
  success,
  blurValidation,
  block,
  readonly,
  value,
  placeholder,
  autocomplete,
  minLength,
  maxLength,
  min,
  max,
  minExclusive,
  maxExclusive,
  mask,
  maskPrefix,
  rawValue,
  disableMaskValidation,
  regex,
  onVlChange,
  onVlInput,
  onVlReset,
  onVlValid
}) => {
  return html\`
            <vl-input-field-masked
                id=\${id}
                name=\${name}
                label=\${label}
                ?required=\${required}
                ?disabled=\${disabled}
                ?error=\${error}
                ?success=\${success}
                ?blur-validation=\${blurValidation}
                ?block=\${block}
                ?readonly=\${readonly}
                value=\${value}
                placeholder=\${placeholder}
                autocomplete=\${autocomplete}
                min-length=\${minLength}
                max-length=\${maxLength}
                min=\${min}
                max=\${max}
                min-exclusive=\${minExclusive}
                max-exclusive=\${maxExclusive}
                mask=\${mask}
                mask-prefix=\${maskPrefix}
                ?raw-value=\${rawValue}
                ?disable-mask-validation=\${disableMaskValidation}
                .regex=\${regex}
                @vl-change=\${onVlChange}
                @vl-input=\${onVlInput}
                @vl-reset=\${onVlReset}
                @vl-valid=\${onVlValid}
            ></vl-input-field-masked>
        \`;
})`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`story(inputFieldMaskedArgs, ({
  id,
  name,
  label,
  required,
  disabled,
  error,
  success,
  blurValidation,
  block,
  readonly,
  value,
  placeholder,
  autocomplete,
  minLength,
  maxLength,
  min,
  max,
  minExclusive,
  maxExclusive,
  mask,
  maskPrefix,
  rawValue,
  disableMaskValidation,
  regex,
  onVlChange,
  onVlInput,
  onVlReset,
  onVlValid
}) => {
  return html\`
            <vl-input-field-masked
                id=\${id}
                name=\${name}
                label=\${label}
                ?required=\${required}
                ?disabled=\${disabled}
                ?error=\${error}
                ?success=\${success}
                ?blur-validation=\${blurValidation}
                ?block=\${block}
                ?readonly=\${readonly}
                value=\${value}
                placeholder=\${placeholder}
                autocomplete=\${autocomplete}
                min-length=\${minLength}
                max-length=\${maxLength}
                min=\${min}
                max=\${max}
                min-exclusive=\${minExclusive}
                max-exclusive=\${maxExclusive}
                mask=\${mask}
                mask-prefix=\${maskPrefix}
                ?raw-value=\${rawValue}
                ?disable-mask-validation=\${disableMaskValidation}
                .regex=\${regex}
                @vl-change=\${onVlChange}
                @vl-input=\${onVlInput}
                @vl-reset=\${onVlReset}
                @vl-valid=\${onVlValid}
            ></vl-input-field-masked>
        \`;
})`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`story(inputFieldMaskedArgs, ({
  id,
  name,
  label,
  required,
  disabled,
  error,
  success,
  blurValidation,
  block,
  readonly,
  value,
  placeholder,
  autocomplete,
  minLength,
  maxLength,
  min,
  max,
  minExclusive,
  maxExclusive,
  mask,
  maskPrefix,
  rawValue,
  disableMaskValidation,
  regex,
  onVlChange,
  onVlInput,
  onVlReset,
  onVlValid
}) => {
  return html\`
            <vl-input-field-masked
                id=\${id}
                name=\${name}
                label=\${label}
                ?required=\${required}
                ?disabled=\${disabled}
                ?error=\${error}
                ?success=\${success}
                ?blur-validation=\${blurValidation}
                ?block=\${block}
                ?readonly=\${readonly}
                value=\${value}
                placeholder=\${placeholder}
                autocomplete=\${autocomplete}
                min-length=\${minLength}
                max-length=\${maxLength}
                min=\${min}
                max=\${max}
                min-exclusive=\${minExclusive}
                max-exclusive=\${maxExclusive}
                mask=\${mask}
                mask-prefix=\${maskPrefix}
                ?raw-value=\${rawValue}
                ?disable-mask-validation=\${disableMaskValidation}
                .regex=\${regex}
                @vl-change=\${onVlChange}
                @vl-input=\${onVlInput}
                @vl-reset=\${onVlReset}
                @vl-valid=\${onVlValid}
            ></vl-input-field-masked>
        \`;
})`,...x.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`story(inputFieldMaskedArgs, ({
  id,
  name,
  label,
  required,
  disabled,
  error,
  success,
  blurValidation,
  block,
  readonly,
  value,
  placeholder,
  autocomplete,
  minLength,
  maxLength,
  min,
  max,
  minExclusive,
  maxExclusive,
  mask,
  maskPrefix,
  rawValue,
  disableMaskValidation,
  regex,
  onVlChange,
  onVlInput,
  onVlReset,
  onVlValid
}) => {
  return html\`
            <vl-input-field-masked
                id=\${id}
                name=\${name}
                label=\${label}
                ?required=\${required}
                ?disabled=\${disabled}
                ?error=\${error}
                ?success=\${success}
                ?blur-validation=\${blurValidation}
                ?block=\${block}
                ?readonly=\${readonly}
                value=\${value}
                placeholder=\${placeholder}
                autocomplete=\${autocomplete}
                min-length=\${minLength}
                max-length=\${maxLength}
                min=\${min}
                max=\${max}
                min-exclusive=\${minExclusive}
                max-exclusive=\${maxExclusive}
                mask=\${mask}
                mask-prefix=\${maskPrefix}
                ?raw-value=\${rawValue}
                ?disable-mask-validation=\${disableMaskValidation}
                .regex=\${regex}
                @vl-change=\${onVlChange}
                @vl-input=\${onVlInput}
                @vl-reset=\${onVlReset}
                @vl-valid=\${onVlValid}
            ></vl-input-field-masked>
        \`;
})`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`story(inputFieldMaskedArgs, ({
  id,
  name,
  label,
  required,
  disabled,
  error,
  success,
  blurValidation,
  block,
  readonly,
  value,
  placeholder,
  autocomplete,
  minLength,
  maxLength,
  min,
  max,
  minExclusive,
  maxExclusive,
  mask,
  maskPrefix,
  rawValue,
  disableMaskValidation,
  regex,
  onVlChange,
  onVlInput,
  onVlReset,
  onVlValid
}) => {
  return html\`
            <vl-input-field-masked
                id=\${id}
                name=\${name}
                label=\${label}
                ?required=\${required}
                ?disabled=\${disabled}
                ?error=\${error}
                ?success=\${success}
                ?blur-validation=\${blurValidation}
                ?block=\${block}
                ?readonly=\${readonly}
                value=\${value}
                placeholder=\${placeholder}
                autocomplete=\${autocomplete}
                min-length=\${minLength}
                max-length=\${maxLength}
                min=\${min}
                max=\${max}
                min-exclusive=\${minExclusive}
                max-exclusive=\${maxExclusive}
                mask=\${mask}
                mask-prefix=\${maskPrefix}
                ?raw-value=\${rawValue}
                ?disable-mask-validation=\${disableMaskValidation}
                .regex=\${regex}
                @vl-change=\${onVlChange}
                @vl-input=\${onVlInput}
                @vl-reset=\${onVlReset}
                @vl-valid=\${onVlValid}
            ></vl-input-field-masked>
        \`;
})`,...h.parameters?.docs?.source}}};const be=["InputFieldMaskedIban","InputFieldMaskedRrn","InputFieldMaskedUuid","InputFieldMaskedDate","InputFieldMaskedNumerical","InputFieldMaskedPrice","InputFieldMaskedPhone","InputFieldMaskedPhoneInternational","InputFieldMaskedMobile","InputFieldMaskedCustom"];export{h as InputFieldMaskedCustom,o as InputFieldMaskedDate,i as InputFieldMaskedIban,p as InputFieldMaskedMobile,m as InputFieldMaskedNumerical,u as InputFieldMaskedPhone,x as InputFieldMaskedPhoneInternational,c as InputFieldMaskedPrice,d as InputFieldMaskedRrn,t as InputFieldMaskedUuid,be as __namedExportsOrder,ve as default};
