import{Y as i,Z as d,a0 as u,c4 as j,W as x,U as B,u as h,j as e,C as g,bk as k,s as T,c1 as b,x as $,r as D,c5 as E}from"./iframe-BWsn3Pr7.js";import"./preload-helper-D9Z9MdNV.js";const a={...x,...j},S={...B,value:{name:"value",description:"De voortgang (0% - 100%).",control:{type:u.RANGE,min:0,max:100,step:1},table:{type:{summary:d.NUMBER},category:i.ATTRIBUTES,defaultValue:{summary:String(a.value)}}},label:{name:"label",description:"Stelt het `aria-label` attribuut van de progress bar in.",table:{type:{summary:d.STRING},category:i.ATTRIBUTES,defaultValue:{summary:a.label}}},labelledby:{name:"labelledby",description:"Stelt het `aria-labelledby` attribuut van de progress bar in. Dit moet de ID zijn van het HTML element dat dient als label voor de progress bar.",table:{type:{summary:d.STRING},category:i.ATTRIBUTES,defaultValue:{summary:a.labelledby}}},indeterminate:{name:"indeterminate",description:'Bepaalt of de progress bar een "indeterminate" animatie zal tonen. Gebruik dit indien de voortgang niet exact bepaald kan worden.',control:{type:u.BOOLEAN},table:{type:{summary:d.BOOLEAN},category:i.ATTRIBUTES,defaultValue:{summary:String(a.indeterminate)}}},error:{name:"error",description:'Past de "error" stijl toe.',control:{type:u.BOOLEAN},table:{type:{summary:d.BOOLEAN},category:i.ATTRIBUTES,defaultValue:{summary:String(a.indeterminate)}}},success:{name:"success",description:'Past de "success" stijl toe.',control:{type:u.BOOLEAN},table:{type:{summary:d.BOOLEAN},category:i.ATTRIBUTES,defaultValue:{summary:String(a.success)}}}};function p(n){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...h(),...n.components},{FluxComponentMetaData:c}=r;return c||w("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"progress-bar",children:"Progress Bar"}),`
`,e.jsx(c,{id:"components-block-progress-bar"}),`
`,e.jsx(r.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(r.p,{children:["Gebruik een ",e.jsx(r.code,{children:"vl-progress-bar"})," om procentuele voortgang te tonen."]}),`
`,e.jsx(r.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-js",children:`import { VlProgressBarComponent } from '@domg-wc/components/block';
`})}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<vl-progress-bar></vl-progress-bar>
`})}),`
`,e.jsx(g,{of:s}),`
`,e.jsx(r.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(k,{of:s}),`
`,e.jsx(r.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(r.h3,{id:"onbepaalde-voortgang",children:"Onbepaalde voortgang"}),`
`,e.jsxs(r.p,{children:["Indien de voortgang niet bepaald kan worden, kan je het attribuut ",e.jsx(r.code,{children:"indeterminate"})," gebruiken."]}),`
`,e.jsx(g,{of:t}),`
`,e.jsx(r.h3,{id:"error",children:"Error"}),`
`,e.jsxs(r.p,{children:["Indien de voortgang faalde, kan je het attribuut ",e.jsx(r.code,{children:"error"})," gebruiken."]}),`
`,e.jsx(g,{of:o}),`
`,e.jsx(r.h3,{id:"succes",children:"Succes"}),`
`,e.jsxs(r.p,{children:["Indien de voortgang succesvol afgerond is, kan je het attribuut ",e.jsx(r.code,{children:"success"})," gebruiken."]}),`
`,e.jsx(g,{of:l}),`
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
uitgeschakeld. In het geval van "indeterminate" blijft er enkel een fade-in/fade-out animatie zichtbaar.`})]})}function A(n={}){const{wrapper:r}={...h(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(p,{...n})}):p(n)}function w(n,r){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}D([E]);const O={id:"components-block-progress-bar",title:"Components - Block/progress-bar",tags:["autodocs"],args:a,argTypes:S,parameters:{docs:{page:A}}},m=T(a,({value:n,indeterminate:r,label:c,labelledby:v,error:y,success:f})=>$`
        <vl-progress-bar
            value="${n}"
            label=${b(c)}
            labelledby=${b(v)}
            ?indeterminate=${r}
            ?error=${y}
            ?success=${f}
        ></vl-progress-bar>
    `),s=m.bind({});s.storyName="vl-progress-bar - default";s.args={label:"Voortgang",value:50};const t=m.bind({});t.storyName="vl-progress-bar - indeterminate";t.args={indeterminate:!0};const o=m.bind({});o.storyName="vl-progress-bar - error";o.args={error:!0,value:75};const l=m.bind({});l.storyName="vl-progress-bar - success";l.args={success:!0,value:100};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story(progressBarDefaultArgs, ({
  value,
  indeterminate,
  label,
  labelledby,
  error,
  success
}) => html\`
        <vl-progress-bar
            value="\${value}"
            label=\${ifDefined(label)}
            labelledby=\${ifDefined(labelledby)}
            ?indeterminate=\${indeterminate}
            ?error=\${error}
            ?success=\${success}
        ></vl-progress-bar>
    \`)`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`story(progressBarDefaultArgs, ({
  value,
  indeterminate,
  label,
  labelledby,
  error,
  success
}) => html\`
        <vl-progress-bar
            value="\${value}"
            label=\${ifDefined(label)}
            labelledby=\${ifDefined(labelledby)}
            ?indeterminate=\${indeterminate}
            ?error=\${error}
            ?success=\${success}
        ></vl-progress-bar>
    \`)`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`story(progressBarDefaultArgs, ({
  value,
  indeterminate,
  label,
  labelledby,
  error,
  success
}) => html\`
        <vl-progress-bar
            value="\${value}"
            label=\${ifDefined(label)}
            labelledby=\${ifDefined(labelledby)}
            ?indeterminate=\${indeterminate}
            ?error=\${error}
            ?success=\${success}
        ></vl-progress-bar>
    \`)`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`story(progressBarDefaultArgs, ({
  value,
  indeterminate,
  label,
  labelledby,
  error,
  success
}) => html\`
        <vl-progress-bar
            value="\${value}"
            label=\${ifDefined(label)}
            labelledby=\${ifDefined(labelledby)}
            ?indeterminate=\${indeterminate}
            ?error=\${error}
            ?success=\${success}
        ></vl-progress-bar>
    \`)`,...l.parameters?.docs?.source}}};const P=["ProgressBarDefault","ProgressBarIndeterminate","ProgressBarError","ProgressBarSuccess"];export{s as ProgressBarDefault,o as ProgressBarError,t as ProgressBarIndeterminate,l as ProgressBarSuccess,P as __namedExportsOrder,O as default};
