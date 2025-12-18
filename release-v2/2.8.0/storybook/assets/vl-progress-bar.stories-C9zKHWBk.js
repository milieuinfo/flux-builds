import{K as l,L as i,P as g,bZ as f,I as y,H as x,u,j as e,C as m,bd as j,s as B,b_ as b,x as k,r as T,b$ as D}from"./iframe-BQb9mjVp.js";import"./preload-helper-D9Z9MdNV.js";const s={...y,...f},E={...x,value:{name:"value",description:"De voortgang (0% - 100%).",control:{type:g.RANGE,min:0,max:100,step:1},table:{type:{summary:i.NUMBER},category:l.ATTRIBUTES,defaultValue:{summary:String(s.value)}}},label:{name:"label",description:"Stelt het `aria-label` attribuut van de progress bar in.",table:{type:{summary:i.STRING},category:l.ATTRIBUTES,defaultValue:{summary:s.label}}},labelledby:{name:"labelledby",description:"Stelt het `aria-labelledby` attribuut van de progress bar in. Dit moet de ID zijn van het HTML element dat dient als label voor de progress bar.",table:{type:{summary:i.STRING},category:l.ATTRIBUTES,defaultValue:{summary:s.labelledby}}},indeterminate:{name:"indeterminate",description:'Bepaalt of de progress bar een "indeterminate" animatie zal tonen. Gebruik dit indien de voortgang niet exact bepaald kan worden.',control:{type:g.BOOLEAN},table:{type:{summary:i.BOOLEAN},category:l.ATTRIBUTES,defaultValue:{summary:String(s.indeterminate)}}},error:{name:"error",description:'Past de "error" stijl toe.',control:{type:g.BOOLEAN},table:{type:{summary:i.BOOLEAN},category:l.ATTRIBUTES,defaultValue:{summary:String(s.indeterminate)}}}};function p(n){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...u(),...n.components},{FluxComponentMetaData:d}=r;return d||w("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"progress-bar",children:"Progress Bar"}),`
`,e.jsx(d,{id:"components-block-progress-bar"}),`
`,e.jsx(r.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(r.p,{children:["Gebruik een ",e.jsx(r.code,{children:"vl-progress-bar"})," om procentuele voortgang te tonen."]}),`
`,e.jsx(r.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-js",children:`import { VlProgressBarComponent } from '@domg-wc/components/block';
`})}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<vl-progress-bar></vl-progress-bar>
`})}),`
`,e.jsx(m,{of:a}),`
`,e.jsx(r.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(j,{of:a}),`
`,e.jsx(r.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(r.h3,{id:"onbepaalde-voortgang",children:"Onbepaalde voortgang"}),`
`,e.jsxs(r.p,{children:["Indien de voortgang niet bepaald kan worden, kan je het attribuut ",e.jsx(r.code,{children:"indeterminate"})," gebruiken."]}),`
`,e.jsx(m,{of:t}),`
`,e.jsx(r.h3,{id:"error",children:"Error"}),`
`,e.jsxs(r.p,{children:["Indien de voortgang faalde, kan je het attribuut ",e.jsx(r.code,{children:"error"})," gebruiken."]}),`
`,e.jsx(m,{of:o}),`
`,e.jsx(r.h2,{id:"witruimte",children:"Witruimte"}),`
`,e.jsxs(r.p,{children:[`Deze component heeft geen eigen witruimte om zo flexibel mogelijk ingezet te kunnen worden. Extra padding of margin
kan eenvoudig toegevoegd worden met de `,e.jsx(r.a,{href:"/docs/styles-layout-afnemers-padding--documentatie",children:"vl-padding"}),` of
`,e.jsx(r.a,{href:"/docs/styles-layout-afnemers-margin--documentatie",children:"vl-margin"})," styles:"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<vl-progress-bar class="vl-padding vl-padding--small" value="50" label="Progress bar met witruimte"></vl-progress-bar>
`})}),`
`,e.jsx(r.h2,{id:"toegankelijkheid",children:"Toegankelijkheid"}),`
`,e.jsxs(r.p,{children:["De progress bar wordt opgebouwd met ",e.jsx(r.code,{children:'role="progressbar"'})," en de bijhorende ",e.jsx(r.code,{children:"aria-valuenow"}),`. Het is noodzakelijk om een
waarde voor `,e.jsx(r.code,{children:"label"})," of ",e.jsx(r.code,{children:"labelledby"})," in te vullen, zodat een screenreader kan voorlezen over welke voortgang het gaat."]}),`
`,e.jsx(r.p,{children:`Indien de gebruiker "verminderde beweging" heeft ingesteld in diens besturingssyteem, worden de bewegende animaties
uitgeschakeld. In het geval van "indeterminate" blijft er enkel een fade-in/fade-out animatie zichtbaar.`})]})}function $(n={}){const{wrapper:r}={...u(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(p,{...n})}):p(n)}function w(n,r){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}T([D]);const I={id:"components-block-progress-bar",title:"Components - Block/progress-bar",tags:["autodocs"],args:s,argTypes:E,parameters:{docs:{page:$}}},c=B(s,({value:n,indeterminate:r,label:d,labelledby:h,error:v})=>k`
        <vl-progress-bar
            value="${n}"
            label=${b(d)}
            labelledby=${b(h)}
            ?indeterminate=${r}
            ?error=${v}
        ></vl-progress-bar>
    `),a=c.bind({});a.storyName="vl-progress-bar - default";a.args={label:"Voortgang",value:50};const t=c.bind({});t.storyName="vl-progress-bar - indeterminate";t.args={indeterminate:!0};const o=c.bind({});o.storyName="vl-progress-bar - error";o.args={error:!0};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`story(progressBarDefaultArgs, ({
  value,
  indeterminate,
  label,
  labelledby,
  error
}) => html\`
        <vl-progress-bar
            value="\${value}"
            label=\${ifDefined(label)}
            labelledby=\${ifDefined(labelledby)}
            ?indeterminate=\${indeterminate}
            ?error=\${error}
        ></vl-progress-bar>
    \`)`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`story(progressBarDefaultArgs, ({
  value,
  indeterminate,
  label,
  labelledby,
  error
}) => html\`
        <vl-progress-bar
            value="\${value}"
            label=\${ifDefined(label)}
            labelledby=\${ifDefined(labelledby)}
            ?indeterminate=\${indeterminate}
            ?error=\${error}
        ></vl-progress-bar>
    \`)`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`story(progressBarDefaultArgs, ({
  value,
  indeterminate,
  label,
  labelledby,
  error
}) => html\`
        <vl-progress-bar
            value="\${value}"
            label=\${ifDefined(label)}
            labelledby=\${ifDefined(labelledby)}
            ?indeterminate=\${indeterminate}
            ?error=\${error}
        ></vl-progress-bar>
    \`)`,...o.parameters?.docs?.source}}};const N=["ProgressBarDefault","ProgressBarIndeterminate","ProgressBarError"];export{a as ProgressBarDefault,o as ProgressBarError,t as ProgressBarIndeterminate,N as __namedExportsOrder,I as default};
