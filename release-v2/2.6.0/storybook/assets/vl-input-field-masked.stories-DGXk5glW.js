import{K as $,L as v,Q as Z,P as H,u as j,j as e,C as l,bd as W,s as K,x as V,r as Q,b as Y}from"./iframe-Ds54rb_7.js";import{i as J,m as g,V as ee}from"./vl-input-field-masked.component-DMyex7F8.js";import{a as ne,i as ae}from"./vl-input-field.stories-arg-yKTD_bnc.js";import{M as le}from"./form-control.public-methods-doc-BIKNMlgx.js";import"./preload-helper-D9Z9MdNV.js";import"./cleave-esm-DfUhcNrv.js";import"./form-control.stories-arg-kbGf1n98.js";const p={...ne,...J},ie={...ae,mask:{name:"mask",description:"Het mask dat gebruikt moet worden.<br/>Dit attribuut is niet reactief.",control:{type:H.SELECT},options:Object.keys(g),table:{type:{summary:Z(Object.keys(g))},category:$.ATTRIBUTES,defaultValue:{summary:p.mask}}},maskPrefix:{name:"mask-prefix",description:"Zet de prefix van het mask.<br/>De prefix wordt automatisch toegevoegd aan de value van het input veld indien de value niet begint met de prefix.<br/>Dit attribuut is niet reactief.",table:{type:{summary:v.STRING},category:$.ATTRIBUTES,defaultValue:{summary:String(p.maskPrefix)}}},rawValue:{name:"raw-value",description:"Geeft de raw value terug bij het submitten van een form.",table:{type:{summary:v.BOOLEAN},category:$.ATTRIBUTES,defaultValue:{summary:String(p.rawValue)}}},disableMaskValidation:{name:"disable-mask-validation",description:"Schakelt de automatische mask validatie uit.",table:{type:{summary:v.BOOLEAN},category:$.ATTRIBUTES,defaultValue:{summary:String(p.disableMaskValidation)}}},regex:{name:"regex",description:"Overschrijft de regex die gebruikt wordt bij de mask validatie.<br/>Bij het testen van de regex wordt altijd de raw value gebruikt.",control:!1,table:{type:{summary:v.REGEX},category:$.PROPERTIES,defaultValue:{summary:String(p.regex)}}}};function b(a){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...j(),...a.components},{FluxMetaData:k}=n;return k||re("FluxMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"input-field-masked",children:"Input Field Masked"}),`
`,e.jsx(k,{id:"components-form-input-field-masked"}),`
`,e.jsxs(n.p,{children:["Gebruik de ",e.jsx(n.code,{children:"input-field-masked"})," component om een input veld met een mask toe te voegen aan een pagina.",e.jsx("br",{}),`
Zie het `,e.jsx(n.a,{href:"/docs/ontwerp-form-demo--documentatie",children:"form demo"})," voorbeeld voor het gebruik binnen een form."]}),`
`,e.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { VlInputFieldMaskedComponent } from '@domg-wc/components/form';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-input-field-masked></vl-input-field-masked>
`})}),`
`,e.jsx(l,{of:i}),`
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(W,{of:i}),`
`,e.jsx(n.h2,{id:"publieke-methodes",children:"Publieke methodes"}),`
`,e.jsx(le,{}),`
`,e.jsx(n.h3,{id:"getrawvalue-string",children:"getRawValue(): string"}),`
`,e.jsxs(n.p,{children:["Geeft de raw value van de input terug (zonder mask).",e.jsx("br",{}),`
Bij het `,e.jsx(n.code,{children:"price"})," mask wordt de prefix weggelaten."]}),`
`,e.jsx(n.h2,{id:"validatie",children:"Validatie"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Meer info over validatie binnen onze form componenten vind je hier: ",e.jsx(n.a,{href:"/docs/ontwerp-form-validation--documentatie",children:"Form - Validatie"})]}),`
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
`,e.jsx(l,{of:h}),`
`,e.jsx(n.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(n.h3,{id:"cleavejs",children:"Cleave.js"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://nosir.github.io/cleave.js/",rel:"nofollow",children:"Documentatie Cleave.js"})})]})}function se(a={}){const{wrapper:n}={...j(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(b,{...a})}):b(a)}function re(a,n){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}Q([ee,Y]);const he={id:"components-form-input-field-masked",title:"Components - Form/input-field-masked",tags:["autodocs"],args:p,argTypes:ie,parameters:{controls:{exclude:["pattern","type"]},docs:{page:se}}},s=K(p,({id:a,name:n,label:k,required:f,disabled:y,error:M,success:E,block:w,readonly:I,value:F,placeholder:R,autocomplete:L,minLength:P,maxLength:C,min:q,max:S,minExclusive:A,maxExclusive:D,mask:T,maskPrefix:N,rawValue:B,disableMaskValidation:O,regex:U,onVlChange:z,onVlInput:G,onVlReset:_,onVlValid:X})=>V`
            <vl-input-field-masked
                id=${a}
                name=${n}
                label=${k}
                ?required=${f}
                ?disabled=${y}
                ?error=${M}
                ?success=${E}
                ?block=${w}
                ?readonly=${I}
                value=${F}
                placeholder=${R}
                autocomplete=${L}
                min-length=${P}
                max-length=${C}
                min=${q}
                max=${S}
                min-exclusive=${A}
                max-exclusive=${D}
                mask=${T}
                mask-prefix=${N}
                ?raw-value=${B}
                ?disable-mask-validation=${O}
                .regex=${U}
                @vl-change=${z}
                @vl-input=${G}
                @vl-reset=${_}
                @vl-valid=${X}
            ></vl-input-field-masked>
        `),r=a=>n=>V` <div><vl-form-label for="story-input" label=${a} block></vl-form-label>${n()}</div> `,i=s.bind({});i.storyName="vl-input-field-masked - iban";i.decorators=[r("IBAN")];i.args={id:"story-input",mask:"iban"};const d=s.bind({});d.storyName="vl-input-field-masked - rrn";d.decorators=[r("Rijkregisternummer")];d.args={id:"story-input",mask:"rrn"};const t=s.bind({});t.storyName="vl-input-field-masked - uuid";t.decorators=[r("UUID")];t.args={id:"story-input",mask:"uuid"};const o=s.bind({});o.storyName="vl-input-field-masked - date";o.decorators=[r("Date")];o.args={id:"story-input",mask:"date"};const m=s.bind({});m.storyName="vl-input-field-masked - numerical";m.decorators=[r("Numerical")];m.args={id:"story-input",mask:"numerical"};const c=s.bind({});c.storyName="vl-input-field-masked - price";c.decorators=[r("Price")];c.args={id:"story-input",mask:"price"};const u=s.bind({});u.storyName="vl-input-field-masked - phone";u.decorators=[r("Phone")];u.args={id:"story-input",mask:"phone"};const x=s.bind({});x.storyName="vl-input-field-masked - phoneinternational";x.decorators=[r("Phone international")];x.args={id:"story-input",mask:"phoneinternational"};const h=s.bind({});h.storyName="vl-input-field-masked - mobile";h.decorators=[r("Mobile")];h.args={id:"story-input",mask:"mobile"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`story(inputFieldMaskedArgs, ({
  id,
  name,
  label,
  required,
  disabled,
  error,
  success,
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
})`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`story(inputFieldMaskedArgs, ({
  id,
  name,
  label,
  required,
  disabled,
  error,
  success,
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
})`,...h.parameters?.docs?.source}}};const pe=["InputFieldMaskedIban","InputFieldMaskedRrn","InputFieldMaskedUuid","InputFieldMaskedDate","InputFieldMaskedNumerical","InputFieldMaskedPrice","InputFieldMaskedPhone","InputFieldMaskedPhoneInternational","InputFieldMaskedMobile"];export{o as InputFieldMaskedDate,i as InputFieldMaskedIban,h as InputFieldMaskedMobile,m as InputFieldMaskedNumerical,u as InputFieldMaskedPhone,x as InputFieldMaskedPhoneInternational,c as InputFieldMaskedPrice,d as InputFieldMaskedRrn,t as InputFieldMaskedUuid,pe as __namedExportsOrder,he as default};
