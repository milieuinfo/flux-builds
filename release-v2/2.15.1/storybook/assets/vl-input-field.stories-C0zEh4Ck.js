import{u as c,j as e,C as d,bc as R,s as z,x as N,r as _,V as Z}from"./iframe-nqJ0ju39.js";import{i as T,a as u}from"./vl-input-field.stories-arg-BPtaZmaj.js";import{M as H}from"./form-control.public-methods-doc-DD8_xsU0.js";import"./preload-helper-D9Z9MdNV.js";import"./form-control.stories-arg-D4NfPAYM.js";function s(i){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...c(),...i.components},{FluxComponentMetaData:o}=n;return o||X("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"input-field",children:"Input Field"}),`
`,e.jsx(o,{id:"components-form-input-field"}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(n.p,{children:["Gebruik de ",e.jsx(n.code,{children:"input-field"})," component om een input veld toe te voegen aan een pagina.",e.jsx("br",{}),`
Zie het `,e.jsx(n.a,{href:"/docs/patronen-formulier-demo--documentatie",children:"form demo"})," voorbeeld voor het gebruik binnen een form."]}),`
`,e.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { VlInputFieldComponent } from '@domg-wc/components/form';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-input-field></vl-input-field>
`})}),`
`,e.jsx(d,{of:r}),`
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(R,{of:r}),`
`,e.jsx(n.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(n.h3,{id:"number",children:"Number"}),`
`,e.jsx(d,{of:l}),`
`,e.jsx(n.h3,{id:"input-group",children:"Input Group"}),`
`,e.jsxs(n.p,{children:["Het ",e.jsx(n.code,{children:"input-group"}),` attribuut is er om het input veld een specifieke stijl te geven in combinatie met een knop. Het
attribuut doet enkel iets in die combinatie. Zie `,e.jsx(n.a,{href:"/docs/components-form-input-group--documentatie",children:"Input Group [next]"}),`
voor meer informatie en voorbeelden.`]}),`
`,e.jsx(n.h2,{id:"type",children:"Type"}),`
`,e.jsxs(n.p,{children:["Momenteel ondersteunen we volgende ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types",rel:"nofollow",children:"input types"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"text"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"number"})}),`
`]}),`
`,e.jsx(n.p,{children:"Daarnaast voorzien we voor enkele andere types ook een eigen component:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"date"}),": ",e.jsx(n.a,{href:"/docs/components-form-datepicker--documentatie",children:"vl-datepicker"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"file"}),": ",e.jsx(n.a,{href:"/docs/components-form-upload--documentatie",children:"vl-upload"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"checkbox"}),": ",e.jsx(n.a,{href:"/docs/components-form-checkbox--documentatie",children:"vl-checkbox"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"radio-group"}),": ",e.jsx(n.a,{href:"/docs/components-form-radio-group--documentatie",children:"vl-radio-group"})]}),`
`]}),`
`,e.jsx(n.p,{children:"De andere types instellen kan onverwachte gevolgen hebben op vlak van validatie."}),`
`,e.jsx(n.h2,{id:"publieke-methodes",children:"Publieke methodes"}),`
`,e.jsx(H,{}),`
`,e.jsx(n.h2,{id:"pattern-validatie",children:"Pattern validatie"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Meer info over validatie binnen onze form componenten vind je hier: ",e.jsx(n.a,{href:"/docs/patronen-formulier-validatie--documentatie",children:"Form - Validatie"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Pattern validatie kan op 2 manieren gebeuren:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Via het ",e.jsx(n.code,{children:"pattern"})," attribuut"]}),`
`,e.jsxs(n.li,{children:["Via de ",e.jsx(n.code,{children:"regex"})," property"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Het ",e.jsx(n.code,{children:"pattern"})," attribuut kan gebruikt worden voor eenvoudige validatie.",e.jsx("br",{}),`
De `,e.jsx(n.code,{children:"regex"})," property kan gebruikt worden voor complexere validatie."]}),`
`,e.jsx(n.h3,{id:"e-mail",children:"E-mail"}),`
`,e.jsxs(n.p,{children:["Voor envoudige e-mailadres validatie kan je gebruik maken van het ",e.jsx(n.code,{children:"pattern"})," attribuut."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`.+@vlaanderen.be$
`})}),`
`,e.jsxs(n.p,{children:["Voor complexere e-mailadres validatie kan je gebruik maken van de ",e.jsx(n.code,{children:"regex"})," property.",e.jsx("br",{}),`
Zie `,e.jsx(n.a,{href:"https://emailregex.com/",rel:"nofollow",children:"emailregex.com"})," voor een uitgebreid voorbeeld, zie hieronder voor één van de simpelere voorbeelden."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$/
`})}),`
`,e.jsx(n.h3,{id:"integer",children:"Integer"}),`
`,e.jsxs(n.p,{children:["Voor het valideren van een integer kan je gebruik maken van het ",e.jsx(n.code,{children:"pattern"})," attribuut.",e.jsx("br",{}),`
Je gebruikt dit best in combinatie met `,e.jsx(n.code,{children:'type="number"'}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`^[0-9]*$
`})}),`
`,e.jsx(n.h3,{id:"masks",children:"Masks"}),`
`,e.jsxs(n.p,{children:["Voor mask validatie kan je gebruik maken van de ",e.jsx(n.a,{href:"/docs/components-form-input-field-masked--documentatie",children:"vl-input-field-masked"})," component."]}),`
`,e.jsx(n.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(n.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/componenten/input-field",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Input field"})})]})}function S(i={}){const{wrapper:n}={...c(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}function X(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}_([Z]);const U={id:"components-form-input-field",title:"Components - Form/input-field",tags:["autodocs"],args:u,argTypes:T,parameters:{docs:{page:S}}},a=z(u,({id:i,name:n,label:o,required:p,disabled:m,error:h,success:x,blurValidation:v,block:$,readonly:g,type:b,value:j,placeholder:f,autocomplete:k,minLength:V,maxLength:y,min:F,max:I,minExclusive:C,maxExclusive:E,pattern:w,inputGroup:D,regex:L,onVlInput:q,onVlReset:M,onVlChange:G,onVlValid:A})=>N` <vl-input-field
            id=${i}
            name=${n}
            label=${o}
            ?required=${p}
            ?disabled=${m}
            ?error=${h}
            ?success=${x}
            ?blur-validation=${v}
            ?block=${$}
            ?readonly=${g}
            type=${b}
            value=${j}
            placeholder=${f}
            autocomplete=${k}
            min-length=${V}
            max-length=${y}
            min=${F}
            max=${I}
            min-exclusive=${C}
            max-exclusive=${E}
            pattern=${w}
            inputGroup=${D}
            .regex=${L}
            @vl-change=${G}
            @vl-input=${q}
            @vl-reset=${M}
            @vl-valid=${A}
        ></vl-input-field>`),r=a.bind({});r.storyName="vl-input-field - default";const l=a.bind({});l.storyName="vl-input-field - number";l.args={type:"number"};const t=a.bind({});t.storyName="vl-input-field - blur validation";t.args={required:!0,minLength:3,pattern:"^[a-zA-Z]+$",blurValidation:!0,placeholder:"Min. 3 letters"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(inputFieldArgs, ({
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
  type,
  value,
  placeholder,
  autocomplete,
  minLength,
  maxLength,
  min,
  max,
  minExclusive,
  maxExclusive,
  pattern,
  inputGroup,
  regex,
  onVlInput,
  onVlReset,
  onVlChange,
  onVlValid
}) => {
  return html\` <vl-input-field
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
            type=\${type}
            value=\${value}
            placeholder=\${placeholder}
            autocomplete=\${autocomplete}
            min-length=\${minLength}
            max-length=\${maxLength}
            min=\${min}
            max=\${max}
            min-exclusive=\${minExclusive}
            max-exclusive=\${maxExclusive}
            pattern=\${pattern}
            inputGroup=\${inputGroup}
            .regex=\${regex}
            @vl-change=\${onVlChange}
            @vl-input=\${onVlInput}
            @vl-reset=\${onVlReset}
            @vl-valid=\${onVlValid}
        ></vl-input-field>\`;
})`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`story(inputFieldArgs, ({
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
  type,
  value,
  placeholder,
  autocomplete,
  minLength,
  maxLength,
  min,
  max,
  minExclusive,
  maxExclusive,
  pattern,
  inputGroup,
  regex,
  onVlInput,
  onVlReset,
  onVlChange,
  onVlValid
}) => {
  return html\` <vl-input-field
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
            type=\${type}
            value=\${value}
            placeholder=\${placeholder}
            autocomplete=\${autocomplete}
            min-length=\${minLength}
            max-length=\${maxLength}
            min=\${min}
            max=\${max}
            min-exclusive=\${minExclusive}
            max-exclusive=\${maxExclusive}
            pattern=\${pattern}
            inputGroup=\${inputGroup}
            .regex=\${regex}
            @vl-change=\${onVlChange}
            @vl-input=\${onVlInput}
            @vl-reset=\${onVlReset}
            @vl-valid=\${onVlValid}
        ></vl-input-field>\`;
})`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`story(inputFieldArgs, ({
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
  type,
  value,
  placeholder,
  autocomplete,
  minLength,
  maxLength,
  min,
  max,
  minExclusive,
  maxExclusive,
  pattern,
  inputGroup,
  regex,
  onVlInput,
  onVlReset,
  onVlChange,
  onVlValid
}) => {
  return html\` <vl-input-field
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
            type=\${type}
            value=\${value}
            placeholder=\${placeholder}
            autocomplete=\${autocomplete}
            min-length=\${minLength}
            max-length=\${maxLength}
            min=\${min}
            max=\${max}
            min-exclusive=\${minExclusive}
            max-exclusive=\${maxExclusive}
            pattern=\${pattern}
            inputGroup=\${inputGroup}
            .regex=\${regex}
            @vl-change=\${onVlChange}
            @vl-input=\${onVlInput}
            @vl-reset=\${onVlReset}
            @vl-valid=\${onVlValid}
        ></vl-input-field>\`;
})`,...t.parameters?.docs?.source}}};const K=["InputFieldDefault","InputFieldNumber","InputFieldBlurValidation"];export{t as InputFieldBlurValidation,r as InputFieldDefault,l as InputFieldNumber,K as __namedExportsOrder,U as default};
