import{Y as s,Z as a,a0 as p,U as S,W as B,u as b,j as e,C as m,bk as A,s as O,c1 as c,x as R,r as k}from"./iframe-BWsn3Pr7.js";import{u as n,V as N}from"./vl-upload-progress.component-By6VmyDp.js";import"./preload-helper-D9Z9MdNV.js";const{action:f}=__STORYBOOK_MODULE_ACTIONS__,h={...B,...n,onVlUploadProgressRetry:f("vl-upload-progress-retry"),onVlUploadProgressCancel:f("vl-upload-progress-cancel")},z={...S,filename:{name:"filename",description:"De naam van het bestand dat wordt geupload.",table:{type:{summary:a.STRING},category:s.ATTRIBUTES,defaultValue:{summary:n.filename}}},filesize:{name:"filesize",description:'De grootte van het bestand dat wordt geupload, inclusief de eenheid. bv. "1.2 MB".',table:{type:{summary:a.STRING},category:s.ATTRIBUTES,defaultValue:{summary:n.filesize}}},label:{name:"label",description:"Voegt een label toe vóór de bestandsnaam.",table:{type:{summary:a.STRING},category:s.ATTRIBUTES,defaultValue:{summary:n.label}}},progress:{name:"progress",description:"De procentuele voortgang van het uploaden.",control:{type:"range",min:0,max:100,step:1},table:{type:{summary:a.NUMBER},category:s.ATTRIBUTES,defaultValue:{summary:String(n.progress)}}},indeterminate:{name:"indeterminate",description:'Bepaalt of de progress bar een "indeterminate" animatie zal tonen. Gebruik dit indien de voortgang niet exact bepaald kan worden.',control:{type:p.BOOLEAN},table:{type:{summary:a.BOOLEAN},category:s.ATTRIBUTES,defaultValue:{summary:String(n.indeterminate)}}},cancellable:{name:"cancellable",description:"Bepaalt of de upload geannuleerd kan worden.",control:{type:p.BOOLEAN},table:{type:{summary:a.BOOLEAN},category:s.ATTRIBUTES,defaultValue:{summary:String(n.cancellable)}}},retryable:{name:"retryable",description:"Bepaalt of de upload opnieuw geprobeerd kan worden.",control:{type:p.BOOLEAN},table:{type:{summary:a.BOOLEAN},category:s.ATTRIBUTES,defaultValue:{summary:String(n.retryable)}}},error:{name:"error",description:'Past de "error" stijl toe.',control:{type:p.BOOLEAN},table:{type:{summary:a.BOOLEAN},category:s.ATTRIBUTES,defaultValue:{summary:String(n.error)}}},success:{name:"success",description:'Past de "success" stijl toe.',control:{type:p.BOOLEAN},table:{type:{summary:a.BOOLEAN},category:s.ATTRIBUTES,defaultValue:{summary:String(n.success)}}},message:{name:"message",description:"Toont een boodschap bij het uploaden.",table:{type:{summary:a.STRING},category:s.ATTRIBUTES,defaultValue:{summary:n.message}}},hideProgress:{name:"hide-progress",description:"Verberg de progress bar.",control:{type:p.BOOLEAN},table:{type:{summary:a.BOOLEAN},category:s.ATTRIBUTES,defaultValue:{summary:String(n.hideProgress)}}},onVlUploadProgressRetry:{name:"vl-upload-progress-retry",description:"Event dat afgevuurd wordt bij het klikken op de retry-knop.",table:{category:s.EVENTS}},onVlUploadProgressCancel:{name:"vl-upload-progress-cancel",description:"Event dat afgevuurd wordt bij het klikken op de cancel-knop.",table:{category:s.EVENTS}}};function y(o){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...b(),...o.components},{FluxComponentMetaData:g}=r;return g||I("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"upload-progress",children:"Upload progress"}),`
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
`,e.jsx(m,{of:l}),`
`,e.jsx(r.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(A,{of:l}),`
`,e.jsx(r.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(r.h3,{id:"onbepaalde-voortgang",children:"Onbepaalde voortgang"}),`
`,e.jsxs(r.p,{children:["Indien de voortgang niet bepaald kan worden, kan je het attribuut ",e.jsx(r.code,{children:"indeterminate"})," gebruiken."]}),`
`,e.jsx(m,{of:t}),`
`,e.jsx(r.h3,{id:"error",children:"Error"}),`
`,e.jsxs(r.p,{children:["Indien de voortgang faalde, kan je het attribuut ",e.jsx(r.code,{children:"error"})," gebruiken."]}),`
`,e.jsx(m,{of:i}),`
`,e.jsx(r.h3,{id:"success",children:"Success"}),`
`,e.jsxs(r.p,{children:["Indien de voortgang succesvol was, kan je het attribuut ",e.jsx(r.code,{children:"success"})," gebruiken."]}),`
`,e.jsx(m,{of:d}),`
`,e.jsx(r.h2,{id:"witruimte",children:"Witruimte"}),`
`,e.jsxs(r.p,{children:[`Deze component heeft geen eigen witruimte om zo flexibel mogelijk ingezet te kunnen worden. Extra padding of margin
kan eenvoudig toegevoegd worden met de `,e.jsx(r.a,{href:"/docs/styles-layout-afnemers-padding--documentatie",children:"vl-padding"}),` of
`,e.jsx(r.a,{href:"/docs/styles-layout-afnemers-margin--documentatie",children:"vl-margin"})," styles:"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<vl-upload-progress filename="document.pdf" filesize="123 MB" class="vl-padding vl-padding--small" progress="50"></vl-upload-progress>
`})})]})}function C(o={}){const{wrapper:r}={...b(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(y,{...o})}):y(o)}function I(o,r){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}k([N]);const _={id:"components-block-upload-progress",title:"Components - Block/upload-progress",tags:["autodocs"],args:h,argTypes:z,parameters:{docs:{page:C}}},u=O(h,({filename:o,filesize:r,progress:g,indeterminate:v,label:$,cancellable:P,retryable:j,error:x,success:T,message:U,hideProgress:E,onVlUploadProgressRetry:V,onVlUploadProgressCancel:D})=>R`
        <vl-upload-progress
            filename=${c(o)}
            filesize=${c(r)}
            progress=${c(g)}
            label=${c($)}
            ?indeterminate=${v}
            ?cancellable=${P}
            ?retryable=${j}
            ?error=${x}
            ?success=${T}
            ?hide-progress=${E}
            message=${c(U)}
            @vl-upload-progress-retry=${V}
            @vl-upload-progress-cancel=${D}
        ></vl-upload-progress>
    `),l=u.bind({});l.storyName="vl-upload-progress - default";l.args={filename:"Document.pdf",filesize:"123 MB",progress:50,retryable:!1};const t=u.bind({});t.storyName="vl-upload-progress - indeterminate";t.args={filename:"Document.pdf",filesize:"123 MB",indeterminate:!0,retryable:!1};const i=u.bind({});i.storyName="vl-upload-progress - error";i.args={filename:"Document.pdf",filesize:"123 MB",progress:23,error:!0,message:"Er liep iets fout bij het uploaden, gelieve opnieuw te proberen of de upload te annuleren.",retryable:!0,cancellable:!0};const d=u.bind({});d.storyName="vl-upload-progress - success";d.args={filename:"Document.pdf",filesize:"123 MB",progress:100,success:!0,message:"Upload voltooid"};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`story(uploadProgressArgs, ({
  filename,
  filesize,
  progress,
  indeterminate,
  label,
  cancellable,
  retryable,
  error,
  success,
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
            ?success=\${success}
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
  success,
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
            ?success=\${success}
            ?hide-progress=\${hideProgress}
            message=\${ifDefined(message)}
            @vl-upload-progress-retry=\${onVlUploadProgressRetry}
            @vl-upload-progress-cancel=\${onVlUploadProgressCancel}
        ></vl-upload-progress>
    \`)`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`story(uploadProgressArgs, ({
  filename,
  filesize,
  progress,
  indeterminate,
  label,
  cancellable,
  retryable,
  error,
  success,
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
            ?success=\${success}
            ?hide-progress=\${hideProgress}
            message=\${ifDefined(message)}
            @vl-upload-progress-retry=\${onVlUploadProgressRetry}
            @vl-upload-progress-cancel=\${onVlUploadProgressCancel}
        ></vl-upload-progress>
    \`)`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`story(uploadProgressArgs, ({
  filename,
  filesize,
  progress,
  indeterminate,
  label,
  cancellable,
  retryable,
  error,
  success,
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
            ?success=\${success}
            ?hide-progress=\${hideProgress}
            message=\${ifDefined(message)}
            @vl-upload-progress-retry=\${onVlUploadProgressRetry}
            @vl-upload-progress-cancel=\${onVlUploadProgressCancel}
        ></vl-upload-progress>
    \`)`,...d.parameters?.docs?.source}}};const G=["UploadProgressDefault","UploadProgressIndeterminate","UploadProgressError","UploadProgressSuccess"];export{l as UploadProgressDefault,i as UploadProgressError,t as UploadProgressIndeterminate,d as UploadProgressSuccess,G as __namedExportsOrder,_ as default};
