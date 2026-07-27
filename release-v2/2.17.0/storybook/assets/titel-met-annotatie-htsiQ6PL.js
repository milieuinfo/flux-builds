import{u as a,j as e,M as i,C as r,S as l}from"./iframe-BgD7f6Cn.js";import{t as s,T as d}from"./titel-met-annotatie.stories-BUQps8hj.js";import"./preload-helper-D9Z9MdNV.js";function o(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:s}),`
`,e.jsx(t.h1,{id:"titel---met-annotatie",children:"Titel - met Annotatie"}),`
`,e.jsx(t.p,{children:"Een annotatie kan naast of onder een titel geplaatst worden om extra context te bieden."}),`
`,e.jsx(t.h2,{id:"aanbeveling",children:"Aanbeveling"}),`
`,e.jsx(t.p,{children:"De combinatie van een titel met annotatie gebeurt best met een vl-group."}),`
`,e.jsx(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsxs(t.p,{children:[`Dit voorbeeld zet de annotatie standaard rechts van de titel, wanneer de plaats beperkter wordt wrapped de
annotatie onder de titel. De `,e.jsx(t.code,{children:"vl-group--baseline"}),` lijnt de titel en annotatie onderaan uit, de
`,e.jsx(t.code,{children:"vl-group--no-row-gap"})," beperkt de verticale wit-ruimte bij wrapping."]}),`
`,e.jsx(r,{of:d,sourceState:"none"}),`
`,e.jsxs("details",{open:!0,children:[e.jsx("summary",{children:"Code"}),e.jsx(l,{code:`<div class="vl-group vl-group--baseline vl-group--wrap vl-group--no-row-gap">
          <vl-title type="h2" no-space-bottom>Een titel die wat langer is dan normaal</vl-title>
          <vl-text annotation>Optioneel voeg je een annotatie toe.</vl-text>
      </div>`,language:"html",dark:!0})]})]})}function x(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{x as default};
