import{K as n,L as s,P as i,H as V,I as D,u as y,j as e,C as c,bd as B,s as A,b_ as p,x as O,r as S}from"./iframe-BQb9mjVp.js";import{u as a,V as R}from"./vl-upload-progress.component-DYyNM58H.js";import"./preload-helper-D9Z9MdNV.js";const{action:u}=__STORYBOOK_MODULE_ACTIONS__,b={...D,...a,onVlUploadProgressRetry:u("vl-upload-progress-retry"),onVlUploadProgressCancel:u("vl-upload-progress-cancel")},k={...V,filename:{name:"filename",description:"De naam van het bestand dat wordt geupload.",table:{type:{summary:s.STRING},category:n.ATTRIBUTES,defaultValue:{summary:a.filename}}},filesize:{name:"filesize",description:'De grootte van het bestand dat wordt geupload, inclusief de eenheid. bv. "1.2 MB".',table:{type:{summary:s.STRING},category:n.ATTRIBUTES,defaultValue:{summary:a.filesize}}},label:{name:"label",description:"Voegt een label toe vóór de bestandsnaam.",table:{type:{summary:s.STRING},category:n.ATTRIBUTES,defaultValue:{summary:a.label}}},progress:{name:"progress",description:"De procentuele voortgang van het uploaden.",control:{type:"range",min:0,max:100,step:1},table:{type:{summary:s.NUMBER},category:n.ATTRIBUTES,defaultValue:{summary:String(a.progress)}}},indeterminate:{name:"indeterminate",description:'Bepaalt of de progress bar een "indeterminate" animatie zal tonen. Gebruik dit indien de voortgang niet exact bepaald kan worden.',control:{type:i.BOOLEAN},table:{type:{summary:s.BOOLEAN},category:n.ATTRIBUTES,defaultValue:{summary:String(a.indeterminate)}}},cancellable:{name:"cancellable",description:"Bepaalt of de upload geannuleerd kan worden.",control:{type:i.BOOLEAN},table:{type:{summary:s.BOOLEAN},category:n.ATTRIBUTES,defaultValue:{summary:String(a.cancellable)}}},retryable:{name:"retryable",description:"Bepaalt of de upload opnieuw geprobeerd kan worden.",control:{type:i.BOOLEAN},table:{type:{summary:s.BOOLEAN},category:n.ATTRIBUTES,defaultValue:{summary:String(a.retryable)}}},error:{name:"error",description:'Past de "error" stijl toe.',control:{type:i.BOOLEAN},table:{type:{summary:s.BOOLEAN},category:n.ATTRIBUTES,defaultValue:{summary:String(a.error)}}},message:{name:"message",description:"Toont een boodschap bij het uploaden.",table:{type:{summary:s.STRING},category:n.ATTRIBUTES,defaultValue:{summary:a.message}}},hideProgress:{name:"hide-progress",description:"Verberg de progress bar.",control:{type:i.BOOLEAN},table:{type:{summary:s.BOOLEAN},category:n.ATTRIBUTES,defaultValue:{summary:String(a.hideProgress)}}},onVlUploadProgressRetry:{name:"vl-upload-progress-retry",description:"Event dat afgevuurd wordt bij het klikken op de retry-knop.",table:{category:n.EVENTS}},onVlUploadProgressCancel:{name:"vl-upload-progress-cancel",description:"Event dat afgevuurd wordt bij het klikken op de cancel-knop.",table:{category:n.EVENTS}}};function f(o){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...y(),...o.components},{FluxComponentMetaData:g}=r;return g||C("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"upload-progress",children:"Upload progress"}),`
`,e.jsx(g,{id:"components-block-upload-progress"}),`
`,e.jsx(r.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(r.p,{children:["Gebruik ",e.jsx(r.code,{children:"vl-upload-progress"})," om procentuele voortgang van een bestandsupload te tonen."]}),`
`,e.jsx(r.p,{children:`Dit component laadt toe om de upload te annuleren of te herstarten en heeft de mogelijkheid om een foutboodschap
weer te geven.`}),`
`,e.jsx(r.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-js",children:`import { VlUploadProgressComponent } from '@domg-wc/components/block';
`})}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<vl-upload-progress></vl-upload-progress>
`})}),`
`,e.jsx(c,{of:l}),`
`,e.jsx(r.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(B,{of:l}),`
`,e.jsx(r.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(r.h3,{id:"onbepaalde-voortgang",children:"Onbepaalde voortgang"}),`
`,e.jsxs(r.p,{children:["Indien de voortgang niet bepaald kan worden, kan je het attribuut ",e.jsx(r.code,{children:"indeterminate"})," gebruiken."]}),`
`,e.jsx(c,{of:t}),`
`,e.jsx(r.h3,{id:"error",children:"Error"}),`
`,e.jsxs(r.p,{children:["Indien de voortgang faalde, kan je het attribuut ",e.jsx(r.code,{children:"error"})," gebruiken."]}),`
`,e.jsx(c,{of:d}),`
`,e.jsx(r.h2,{id:"witruimte",children:"Witruimte"}),`
`,e.jsxs(r.p,{children:[`Deze component heeft geen eigen witruimte om zo flexibel mogelijk ingezet te kunnen worden. Extra padding of margin
kan eenvoudig toegevoegd worden met de `,e.jsx(r.a,{href:"/docs/styles-layout-afnemers-padding--documentatie",children:"vl-padding"}),` of
`,e.jsx(r.a,{href:"/docs/styles-layout-afnemers-margin--documentatie",children:"vl-margin"})," styles:"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<vl-upload-progress filename="document.pdf" filesize="123 MB" class="vl-padding vl-padding--small" progress="50"></vl-upload-progress>
`})})]})}function N(o={}){const{wrapper:r}={...y(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(f,{...o})}):f(o)}function C(o,r){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}S([R]);const L={id:"components-block-upload-progress",title:"Components - Block/upload-progress",tags:["autodocs"],args:b,argTypes:k,parameters:{docs:{page:N}}},m=A(b,({filename:o,filesize:r,progress:g,indeterminate:h,label:v,cancellable:$,retryable:T,error:x,message:j,hideProgress:P,onVlUploadProgressRetry:E,onVlUploadProgressCancel:U})=>O`
        <vl-upload-progress
            filename=${p(o)}
            filesize=${p(r)}
            progress=${p(g)}
            label=${p(v)}
            ?indeterminate=${h}
            ?cancellable=${$}
            ?retryable=${T}
            ?error=${x}
            ?hide-progress=${P}
            message=${p(j)}
            @vl-upload-progress-retry=${E}
            @vl-upload-progress-cancel=${U}
        ></vl-upload-progress>
    `),l=m.bind({});l.storyName="vl-upload-progress - default";l.args={filename:"Document.pdf",filesize:"123 MB",progress:50,retryable:!1};const t=m.bind({});t.storyName="vl-upload-progress - indeterminate";t.args={filename:"Document.pdf",filesize:"123 MB",indeterminate:!0,retryable:!1};const d=m.bind({});d.storyName="vl-upload-progress - error";d.args={filename:"Document.pdf",filesize:"123 MB",progress:23,error:!0,message:"Er liep iets fout bij het uploaden, gelieve opnieuw te proberen of de upload te annuleren.",retryable:!0,cancellable:!0};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`story(uploadProgressArgs, ({
  filename,
  filesize,
  progress,
  indeterminate,
  label,
  cancellable,
  retryable,
  error,
  message,
  hideProgress,
  onVlUploadProgressRetry,
  onVlUploadProgressCancel
}) => html\`
        <vl-upload-progress
            filename=\${ifDefined(filename)}
            filesize=\${ifDefined(filesize)}
            progress=\${ifDefined(progress)}
            label=\${ifDefined(label)}
            ?indeterminate=\${indeterminate}
            ?cancellable=\${cancellable}
            ?retryable=\${retryable}
            ?error=\${error}
            ?hide-progress=\${hideProgress}
            message=\${ifDefined(message)}
            @vl-upload-progress-retry=\${onVlUploadProgressRetry}
            @vl-upload-progress-cancel=\${onVlUploadProgressCancel}
        ></vl-upload-progress>
    \`)`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`story(uploadProgressArgs, ({
  filename,
  filesize,
  progress,
  indeterminate,
  label,
  cancellable,
  retryable,
  error,
  message,
  hideProgress,
  onVlUploadProgressRetry,
  onVlUploadProgressCancel
}) => html\`
        <vl-upload-progress
            filename=\${ifDefined(filename)}
            filesize=\${ifDefined(filesize)}
            progress=\${ifDefined(progress)}
            label=\${ifDefined(label)}
            ?indeterminate=\${indeterminate}
            ?cancellable=\${cancellable}
            ?retryable=\${retryable}
            ?error=\${error}
            ?hide-progress=\${hideProgress}
            message=\${ifDefined(message)}
            @vl-upload-progress-retry=\${onVlUploadProgressRetry}
            @vl-upload-progress-cancel=\${onVlUploadProgressCancel}
        ></vl-upload-progress>
    \`)`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`story(uploadProgressArgs, ({
  filename,
  filesize,
  progress,
  indeterminate,
  label,
  cancellable,
  retryable,
  error,
  message,
  hideProgress,
  onVlUploadProgressRetry,
  onVlUploadProgressCancel
}) => html\`
        <vl-upload-progress
            filename=\${ifDefined(filename)}
            filesize=\${ifDefined(filesize)}
            progress=\${ifDefined(progress)}
            label=\${ifDefined(label)}
            ?indeterminate=\${indeterminate}
            ?cancellable=\${cancellable}
            ?retryable=\${retryable}
            ?error=\${error}
            ?hide-progress=\${hideProgress}
            message=\${ifDefined(message)}
            @vl-upload-progress-retry=\${onVlUploadProgressRetry}
            @vl-upload-progress-cancel=\${onVlUploadProgressCancel}
        ></vl-upload-progress>
    \`)`,...d.parameters?.docs?.source}}};const M=["UploadProgressDefault","UploadProgressIndeterminate","UploadProgressError"];export{l as UploadProgressDefault,d as UploadProgressError,t as UploadProgressIndeterminate,M as __namedExportsOrder,L as default};
