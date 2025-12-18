import{u as a,j as e,C as t,bd as L,s as A,x as _,r as z,V as N}from"./iframe-BQb9mjVp.js";import{i as R,a as s}from"./vl-input-field.stories-arg-eMYMPK8T.js";import{M as T}from"./form-control.public-methods-doc-BSToGT0S.js";import"./preload-helper-D9Z9MdNV.js";import"./form-control.stories-arg-CUDCTdRn.js";function d(i){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...a(),...i.components},{FluxComponentMetaData:o}=n;return o||H("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"input-field",children:"Input Field"}),`
`,e.jsx(o,{id:"components-form-input-field"}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(n.p,{children:["Gebruik de ",e.jsx(n.code,{children:"input-field"})," component om een input veld toe te voegen aan een pagina.",e.jsx("br",{}),`
Zie het `,e.jsx(n.a,{href:"/docs/ontwerp-form-demo--documentatie",children:"form demo"})," voorbeeld voor het gebruik binnen een form."]}),`
`,e.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { VlInputFieldComponent } from '@domg-wc/components/form';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-input-field></vl-input-field>
`})}),`
`,e.jsx(t,{of:r}),`
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(L,{of:r}),`
`,e.jsx(n.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(n.h3,{id:"number",children:"Number"}),`
`,e.jsx(t,{of:l}),`
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
`,e.jsx(T,{}),`
`,e.jsx(n.h2,{id:"pattern-validatie",children:"Pattern validatie"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Meer info over validatie binnen onze form componenten vind je hier: ",e.jsx(n.a,{href:"/docs/ontwerp-form-validation--documentatie",children:"Form - Validatie"})]}),`
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
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/forms/vl-ui-input-field",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Input field"})})]})}function Z(i={}){const{wrapper:n}={...a(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(d,{...i})}):d(i)}function H(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}z([N]);const O={id:"components-form-input-field",title:"Components - Form/input-field",tags:["autodocs"],args:s,argTypes:R,parameters:{docs:{page:Z}}},c=A(s,({id:i,name:n,label:o,required:p,disabled:u,error:m,success:h,block:x,readonly:v,type:j,value:g,placeholder:$,autocomplete:b,minLength:f,maxLength:k,min:y,max:V,minExclusive:F,maxExclusive:C,pattern:I,inputGroup:w,regex:D,onVlInput:E,onVlReset:M,onVlChange:q,onVlValid:G})=>_` <vl-input-field
            id=${i}
            name=${n}
            label=${o}
            ?required=${p}
            ?disabled=${u}
            ?error=${m}
            ?success=${h}
            ?block=${x}
            ?readonly=${v}
            type=${j}
            value=${g}
            placeholder=${$}
            autocomplete=${b}
            min-length=${f}
            max-length=${k}
            min=${y}
            max=${V}
            min-exclusive=${F}
            max-exclusive=${C}
            pattern=${I}
            inputGroup=${w}
            .regex=${D}
            @vl-change=${q}
            @vl-input=${E}
            @vl-reset=${M}
            @vl-valid=${G}
        ></vl-input-field>`),r=c.bind({});r.storyName="vl-input-field - default";const l=c.bind({});l.storyName="vl-input-field - number";l.args={type:"number"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(inputFieldArgs, ({
  id,
  name,
  label,
  required,
  disabled,
  error,
  success,
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
})`,...l.parameters?.docs?.source}}};const U=["InputFieldDefault","InputFieldNumber"];export{r as InputFieldDefault,l as InputFieldNumber,U as __namedExportsOrder,O as default};
