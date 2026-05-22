import{u as l,j as e,C as D,bc as k,s as w,x as M,r as T}from"./iframe-D9dm7PbY.js";import{V as _}from"./vl-textarea.component-DoL2u81l.js";import{t as F,a as s}from"./vl-textarea.stories-arg-Bi66HskK.js";import{M as L}from"./form-control.public-methods-doc-xy650on_.js";import"./preload-helper-D9Z9MdNV.js";import"./form-control.stories-arg-DQUeU6HR.js";function o(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...l(),...r.components},{FluxComponentMetaData:t}=n;return t||q("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"textarea",children:"Textarea"}),`
`,e.jsx(t,{id:"components-form-textarea"}),`
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
`,e.jsx(D,{of:a}),`
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(k,{of:a}),`
`,e.jsx(n.h2,{id:"publieke-methodes",children:"Publieke methodes"}),`
`,e.jsx(L,{}),`
`,e.jsx(n.h2,{id:"validatie",children:"Validatie"}),`
`,e.jsxs(n.p,{children:["Meer info over validatie binnen onze form componenten vind je hier: ",e.jsx(n.a,{href:"/docs/patronen-formulier-validatie--documentatie",children:"Form - Validatie"})]}),`
`,e.jsx(n.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(n.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/forms/vl-ui-textarea",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Textarea"})})]})}function R(r={}){const{wrapper:n}={...l(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}function q(r,n){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}T([_]);const G={id:"components-form-textarea",title:"Components - Form/textarea",tags:["autodocs"],args:s,argTypes:F,parameters:{docs:{page:R}}},a=w(s,({id:r,name:n,label:t,required:i,disabled:d,error:c,success:m,block:h,readonly:x,value:p,placeholder:u,autocomplete:v,minLength:$,maxLength:g,rows:f,cols:j,onVlChange:b,onVlInput:V,onVlReset:C,onVlValid:y})=>M` <vl-textarea
            id=${r}
            name=${n}
            label=${t}
            ?required=${i}
            ?disabled=${d}
            ?error=${c}
            ?success=${m}
            ?block=${h}
            ?readonly=${x}
            value=${p}
            placeholder=${u}
            autocomplete=${v}
            min-length=${$}
            max-length=${g}
            rows=${f}
            cols=${j}
            @vl-change=${b}
            @vl-input=${V}
            @vl-reset=${C}
            @vl-valid=${y}
        ></vl-textarea>`);a.storyName="vl-textarea - default";a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`story(textareaArgs, ({
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
})`,...a.parameters?.docs?.source}}};const O=["TextareaDefault"];export{a as TextareaDefault,O as __namedExportsOrder,G as default};
