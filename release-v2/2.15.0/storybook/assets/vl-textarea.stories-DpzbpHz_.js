import{u as s,j as e,C as D,bc as T,s as M,x as L,r as q}from"./iframe-CsDE-vVI.js";import{V as R}from"./vl-textarea.component-Cf6kOsHf.js";import{t as _,a as i}from"./vl-textarea.stories-arg-7jDgNCEF.js";import{M as A}from"./form-control.public-methods-doc-DbQMXrC5.js";import"./preload-helper-D9Z9MdNV.js";import"./form-control.stories-arg-Cx_e2RbH.js";function l(a){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...a.components},{FluxComponentMetaData:o}=n;return o||E("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"textarea",children:"Textarea"}),`
`,e.jsx(o,{id:"components-form-textarea"}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(n.p,{children:["Gebruik de ",e.jsx(n.code,{children:"textarea"})," component om een textarea veld toe te voegen aan een pagina.",e.jsx("br",{}),`
Zie het `,e.jsx(n.a,{href:"/docs/patronen-formulier-demo--documentatie",children:"form demo"})," voorbeeld voor het gebruik binnen een form."]}),`
`,e.jsxs(n.p,{children:[`Deze component bevat geen rich-text modus: gebruik daarvoor
`,e.jsx(n.a,{href:"/docs/components-form--text-area-rich--documentatie",children:"vl-textarea-rich"}),"."]}),`
`,e.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { VlTextareaComponent } from '@domg-wc/components/form';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-textarea></vl-textarea>
`})}),`
`,e.jsx(D,{of:r}),`
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(T,{of:r}),`
`,e.jsx(n.h2,{id:"publieke-methodes",children:"Publieke methodes"}),`
`,e.jsx(A,{}),`
`,e.jsx(n.h2,{id:"validatie",children:"Validatie"}),`
`,e.jsxs(n.p,{children:["Meer info over validatie binnen onze form componenten vind je hier: ",e.jsx(n.a,{href:"/docs/patronen-formulier-validatie--documentatie",children:"Form - Validatie"})]}),`
`,e.jsx(n.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(n.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/componenten/text-area",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Textarea"})})]})}function F(a={}){const{wrapper:n}={...s(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(l,{...a})}):l(a)}function E(a,n){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}q([R]);const G={id:"components-form-textarea",title:"Components - Form/textarea",tags:["autodocs"],args:i,argTypes:_,parameters:{docs:{page:F}}},r=M(i,({id:a,name:n,label:o,required:d,disabled:c,error:m,success:u,blurValidation:h,block:p,readonly:x,value:$,placeholder:v,autocomplete:g,minLength:b,maxLength:f,rows:V,cols:j,onVlChange:y,onVlInput:C,onVlReset:k,onVlValid:w})=>L` <vl-textarea
            id=${a}
            name=${n}
            label=${o}
            ?required=${d}
            ?disabled=${c}
            ?error=${m}
            ?success=${u}
            ?blur-validation=${h}
            ?block=${p}
            ?readonly=${x}
            value=${$}
            placeholder=${v}
            autocomplete=${g}
            min-length=${b}
            max-length=${f}
            rows=${V}
            cols=${j}
            @vl-change=${y}
            @vl-input=${C}
            @vl-reset=${k}
            @vl-valid=${w}
        ></vl-textarea>`);r.storyName="vl-textarea - default";const t=r.bind({});t.storyName="vl-textarea - blur validation";t.args={required:!0,minLength:5,blurValidation:!0,placeholder:"Min. 5 karakters"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(textareaArgs, ({
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
  rows,
  cols,
  onVlChange,
  onVlInput,
  onVlReset,
  onVlValid
}) => {
  return html\` <vl-textarea
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
            rows=\${rows}
            cols=\${cols}
            @vl-change=\${onVlChange}
            @vl-input=\${onVlInput}
            @vl-reset=\${onVlReset}
            @vl-valid=\${onVlValid}
        ></vl-textarea>\`;
})`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`story(textareaArgs, ({
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
  rows,
  cols,
  onVlChange,
  onVlInput,
  onVlReset,
  onVlValid
}) => {
  return html\` <vl-textarea
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
            rows=\${rows}
            cols=\${cols}
            @vl-change=\${onVlChange}
            @vl-input=\${onVlInput}
            @vl-reset=\${onVlReset}
            @vl-valid=\${onVlValid}
        ></vl-textarea>\`;
})`,...t.parameters?.docs?.source}}};const O=["TextareaDefault","TextareaBlurValidation"];export{t as TextareaBlurValidation,r as TextareaDefault,O as __namedExportsOrder,G as default};
