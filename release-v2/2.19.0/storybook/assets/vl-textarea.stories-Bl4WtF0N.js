import{u as c,j as e,C as s,b8 as q,s as M,x as R,r as A}from"./iframe-CY-ZM549.js";import{V as I}from"./vl-textarea.component-C2i5Nva7.js";import{t as _,a as d}from"./vl-textarea.stories-arg-Db-0RiST.js";import{M as F}from"./form-control.public-methods-doc-DkaRTqkF.js";import"./preload-helper-D9Z9MdNV.js";import"./form-control.stories-arg-B6yBTQ6J.js";function i(a){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...c(),...a.components},{FluxComponentMetaData:l}=n;return l||E("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"textarea",children:"Textarea"}),`
`,e.jsx(l,{id:"components-form-textarea"}),`
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
`,e.jsx(s,{of:r}),`
`,e.jsx(n.h2,{id:"karakterteller",children:"Karakterteller"}),`
`,e.jsxs(n.p,{children:["Zet het ",e.jsx(n.code,{children:"character-count"})," attribute samen met ",e.jsx(n.code,{children:"max-length"})," om onder de textarea een teller ",e.jsx(n.code,{children:"{huidig}/{max}"}),` te tonen
die live meetelt terwijl je typt. Vanaf de laatste 10 resterende tekens wordt het aantal beschikbare tekens
toegankelijk aangekondigd voor screenreader-gebruikers.`]}),`
`,e.jsx(s,{of:t}),`
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(q,{of:r}),`
`,e.jsx(n.h2,{id:"publieke-methodes",children:"Publieke methodes"}),`
`,e.jsx(F,{}),`
`,e.jsx(n.h2,{id:"validatie",children:"Validatie"}),`
`,e.jsxs(n.p,{children:["Meer info over validatie binnen onze form componenten vind je hier: ",e.jsx(n.a,{href:"/docs/patronen-formulier-validatie--documentatie",children:"Form - Validatie"})]}),`
`,e.jsx(n.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(n.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/componenten/text-area",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Textarea"})})]})}function N(a={}){const{wrapper:n}={...c(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(i,{...a})}):i(a)}function E(a,n){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}A([I]);const K={id:"components-form-textarea",title:"Components - Form/textarea",tags:["autodocs"],args:d,argTypes:_,parameters:{docs:{page:N}}},r=M(d,({id:a,name:n,label:l,required:u,disabled:m,error:h,success:x,blurValidation:p,block:$,readonly:g,characterCount:v,value:b,placeholder:V,autocomplete:j,minLength:f,maxLength:C,rows:k,cols:y,onVlChange:w,onVlInput:L,onVlReset:T,onVlValid:D})=>R` <vl-textarea
            id=${a}
            name=${n}
            label=${l}
            ?required=${u}
            ?disabled=${m}
            ?error=${h}
            ?success=${x}
            ?blur-validation=${p}
            ?block=${$}
            ?readonly=${g}
            ?character-count=${v}
            value=${b}
            placeholder=${V}
            autocomplete=${j}
            min-length=${f}
            max-length=${C}
            rows=${k}
            cols=${y}
            @vl-change=${w}
            @vl-input=${L}
            @vl-reset=${T}
            @vl-valid=${D}
        ></vl-textarea>`);r.storyName="vl-textarea - default";const o=r.bind({});o.storyName="vl-textarea - blur validation";o.args={required:!0,minLength:5,blurValidation:!0,placeholder:"Min. 5 karakters"};const t=r.bind({});t.storyName="vl-textarea - character count";t.args={block:!0,characterCount:!0,maxLength:250};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(textareaArgs, ({
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
  characterCount,
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
            ?character-count=\${characterCount}
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
})`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`story(textareaArgs, ({
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
  characterCount,
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
            ?character-count=\${characterCount}
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
})`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`story(textareaArgs, ({
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
  characterCount,
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
            ?character-count=\${characterCount}
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
})`,...t.parameters?.docs?.source}}};const O=["TextareaDefault","TextareaBlurValidation","TextareaCharacterCount"];export{o as TextareaBlurValidation,t as TextareaCharacterCount,r as TextareaDefault,O as __namedExportsOrder,K as default};
