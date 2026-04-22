import{u as a,j as o,C as D,bb as L,s as C,x as i,r as S}from"./iframe-aAtdr__L.js";import{s as T,p as k,V as R}from"./vl-select-location-zA4X1tux.js";import{s as M}from"./vl-select-rich.stories-arg-B5O9fdnM.js";import{s as w}from"./vl-select-rich.component-DUfvf59G.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-checkbox.component-DIOV2u4x.js";import"./vl-datepicker.component-DroSrUTc.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-fieldset.component-CBJ3Dwav.js";import"./vl-input-field-masked.component-Chq9N1ul.js";import"./vl-radio.component-Bio8-SwX.js";import"./vl-radio-group.component-B8TpxYt_.js";import"./vl-select.component-CPY3amz9.js";import"./vl-textarea.component-BMidRRhi.js";import"./vl-textarea-rich.component-CIG315zy.js";import"./vl-upload.component-DUjTvZh5.js";import"./vl-upload-progress.component-DCbMC6_6.js";import"./form-control.stories-arg-D0EnoiSC.js";const r={...w};delete r.multiple;delete r.search;delete r.searchStrategy;const A={...r,placeholder:k,searchPlaceholder:T},d={...A},l={...M};delete l.multiple;delete l.search;delete l.searchStrategy;const _={...l};function c(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...a(),...t.components},{FluxComponentMetaData:s}=e;return s||z("FluxComponentMetaData"),o.jsxs(o.Fragment,{children:[o.jsx(e.h1,{id:"select-location",children:"Select Location"}),`
`,o.jsx(s,{id:"map-components-select-location"}),`
`,o.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,o.jsxs(e.p,{children:["Gebruik de ",o.jsx(e.code,{children:"vl-select-location"})," component om een zoekbalk af te beelden waarmee er een adres geselecteerd kan worden."]}),`
`,o.jsxs(e.p,{children:["Deze component erft over van de ",o.jsx(e.a,{href:"/docs/components-form-select-rich--documentatie",children:"vl-select-rich"})," component."]}),`
`,o.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-js",children:`import { VlSelectLocationComponent } from '@domg-wc/map';
`})}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-html",children:`<vl-select-location></vl-select-location>
`})}),`
`,o.jsx(D,{of:n}),`
`,o.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,o.jsx(L,{of:n})]})}function q(t={}){const{wrapper:e}={...a(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(c,{...t})}):c(t)}function z(t,e){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}S([R]);const oe={id:"map-select-location",title:"map/select-location",tags:["autodocs"],args:d,argTypes:_,parameters:{docs:{page:q}},decorators:[t=>i` <div style="height: 400px;">${t()}</div>`]},E=C(d,({id:t,name:e,label:s,required:p,disabled:m,error:h,success:u,options:x,placeholder:$,notDeletable:f,position:g,resultLimit:b,noResultsText:j,noChoicesText:v,searchPlaceholder:y})=>i` <vl-select-location
            id=${t}
            name=${e}
            label=${s}
            ?required=${p}
            ?disabled=${m}
            ?error=${h}
            ?success=${u}
            .options=${x}
            placeholder=${$}
            ?not-deletable=${f}
            position=${g}
            result-limit=${b}
            no-results-text=${j}
            no-choices-text=${v}
            search-placeholder=${y}
        ></vl-select-location>`),n=E.bind({});n.storyName="vl-select-location - default";n.args={id:"zoeken-op-kaart",name:"zoeken-op-kaart"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`story(selectLocationArgs, ({
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
  position,
  resultLimit,
  noResultsText,
  noChoicesText,
  searchPlaceholder
}) => {
  return html\` <vl-select-location
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
            position=\${position}
            result-limit=\${resultLimit}
            no-results-text=\${noResultsText}
            no-choices-text=\${noChoicesText}
            search-placeholder=\${searchPlaceholder}
        ></vl-select-location>\`;
})`,...n.parameters?.docs?.source}}};const te=["SelectLocationDefault"];export{n as SelectLocationDefault,te as __namedExportsOrder,oe as default};
