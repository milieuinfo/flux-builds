import{Z as t,_ as l,u as b,j as e,C as X,bc as Y,s as Z,x as K,r as J}from"./iframe-CsDE-vVI.js";import{u as h,V as ee}from"./vl-upload.component-CFNkhe3E.js";import{f as ne,a as te}from"./form-control.stories-arg-Cx_e2RbH.js";import{M as ae}from"./form-control.public-methods-doc-DbQMXrC5.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-upload-progress.component-BIDd-DNQ.js";const{action:r}=__STORYBOOK_MODULE_ACTIONS__,a={...ne,...h,onVlChange:r("vl-change"),onVlInput:r("vl-input"),onVlValid:r("vl-valid"),onVlAddedFile:r("vl-addedfile"),onVlRemovedFile:r("vl-removedfile"),onVlSuccess:r("vl-success"),onVlError:r("vl-error"),onVlUploadProgress:r("vl-upload-progress"),onVlComplete:r("vl-complete"),onVlQueueComplete:r("vl-queuecomplete"),onVlInitialised:r("vl-initialised")},le={...te,readonly:{name:"readonly",description:"Duidt aan dat het veld enkel leesbaar is.",table:{type:{summary:l.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(a.readonly)}}},acceptedFiles:{name:"accepted-files",description:"Attribuut om te bepalen welke bestanden worden geaccepteerd door de component (extensie en mimetype).<br>Bv. `image/*,application/pdf,.psd`",table:{type:{summary:l.STRING},category:t.ATTRIBUTES,defaultValue:{summary:a.acceptedFiles}}},autoProcess:{name:"auto-process",description:"Attribuut om te activeren of deactiveren dat het het gedropte bestand direct moet opgeladen worden.",table:{type:{summary:l.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(a.autoProcess)}}},disallowDuplicates:{name:"disallow-duplicates",description:"Bepaalt dat het niet is toegelaten om dezelfde bijlage meerdere keren te uploaden. Niet reactief.",table:{type:{summary:l.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(a.disallowDuplicates)}}},errorMessageAcceptedFiles:{name:"error-message-accepted-files",description:"Attribuut om de message te definiëren wanneer er bestanden zijn toegevoegd die niet voldoen aan hetgevraagde bestandstype.",table:{type:{summary:l.STRING},category:t.ATTRIBUTES,defaultValue:{summary:a.errorMessageAcceptedFiles}}},errorMessageFilesize:{name:"error-message-filesize",description:"Attribuut om de message te definiëren wanneer er te grote bestanden zijn toegevoegd. <br> Gebruik {{maxSize}} om de maximum grootte weer te geven in MB.",table:{type:{summary:l.STRING},category:t.ATTRIBUTES,defaultValue:{summary:a.errorMessageFilesize}}},errorMessageMaxFiles:{name:"error-message-maxfiles",description:"Attribuut om de boodschap te bepalen wanneer er te veel bestanden zijn toegevoegd. <br> Gebruik {{maxFiles}} om het maximum aantal bestanden weer te geven.",table:{type:{summary:l.STRING},category:t.ATTRIBUTES,defaultValue:{summary:a.errorMessageMaxFiles}}},maxFiles:{name:"max-files",description:"Bepaalt aantal upload-bestanden",table:{type:{summary:"number"},category:t.ATTRIBUTES,defaultValue:{summary:String(a.maxFiles)}}},maxSize:{name:"max-size",description:"Bepaalt de maximum grootte per upload-bestand in MB.",table:{type:{summary:"number"},category:t.ATTRIBUTES,defaultValue:{summary:String(a.maxSize)}}},subTitle:{name:"sub-title",description:`De annotatietekst voor de upload knop.
Niet reactief.`,table:{type:{summary:l.STRING},category:t.ATTRIBUTES,defaultValue:{summary:a.subTitle}}},mainTitle:{name:"main-title",description:`De tekst die op de upload knop komt te staan.
Niet reactief.`,table:{type:{summary:l.STRING},category:t.ATTRIBUTES,defaultValue:{summary:a.mainTitle}}},parallelUploads:{name:"parallel-uploads",description:"Bepaalt het aantal bestanden dat tegelijkertijd geüpload kan worden.",table:{type:{summary:"number"},category:t.ATTRIBUTES,defaultValue:{summary:String(a.parallelUploads)}}},url:{name:"url",description:`Bepaalt de upload url.
Niet reactief.`,table:{type:{summary:l.STRING},category:t.ATTRIBUTES,defaultValue:{summary:a.url}}},chunking:{name:"chunking",description:"Attribuut om te activeren of deactiveren dat het bestand in stukken wordt geüpload.<br> Dit moet aanstaan om upload progress te verkrijgen.",table:{type:{summary:l.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(a.chunking)}}},uploadProgressFn:{name:"uploadProgressFn",description:"Functie die wordt aangeroepen wanneer een bestand wordt geüpload.<br> Deze functie geeft de voortgang van de upload in percentage en de bytes die zijn verzonden.",table:{type:{summary:l.FUNCTION},category:t.PROPERTIES,defaultValue:{summary:String(a.uploadProgressFn)}}},onVlChange:{name:"vl-change",description:"Event dat afgevuurd wordt als bestanden worden toegevoegd of verwijderd (zowel programmatorisch als door een gebruiker).<br>Het detail object van het event bevat de ingegeven waarde.<br>Daarnaast geeft het ook aan welke file werd verwijderd of toegevoegd.",table:{type:{summary:"{ value: string, type: string, file: File}"},category:t.EVENTS}},onVlInput:{name:"vl-input",description:"Event dat alleen afgevuurd wordt als bestanden worden toegevoegd of verwijderd door een gebruiker.<br>Het detail object van het event bevat de ingegeven waarde.<br>Daarnaast geeft het ook aan welke file werd verwijderd of toegevoegd.",table:{type:{summary:"{ value: string, type: string, file: File}"},category:t.EVENTS}},onVlValid:{name:"vl-valid",description:"Event dat afgevuurd wordt als de waarde van het input veld valid is.<br>Het detail object van het event bevat de ingegeven waarde.",table:{type:{summary:"{ value: string }"},category:t.EVENTS}},onVlAddedFile:{name:"vl-addedfile",description:"Event dat afgevuurd wordt als een bestand wordt toegevoegd.<br>Daarnaast geeft het ook de file die werd toegevoegd.",table:{type:{summary:"{ value: string, type: string, file: File}"},category:t.EVENTS}},onVlRemovedFile:{name:"vl-removedfile",description:"Event dat afgevuurd wordt als een bestand wordt verwijderd.<br>Daarnaast geeft het ook de file die werd verwijderd.",table:{type:{summary:"{ value: string, type: string, file: File}"},category:t.EVENTS}},onVlError:{name:"vl-error",description:"Event dat afgevuurd wordt als een bestand niet voldoet aan de validatie.<br>Het detail object van het event bevat de ingegeven waarde.<br>Daarnaast geeft het ook de file met de fout.",table:{type:{summary:"{ value: string, type: string, file: File, errorMessage: string}"},category:t.EVENTS}},onVlUploadProgress:{name:"vl-upload-progress",description:"Event dat afgevuurd wordt als een bestand wordt geüpload.<br>Het detail object van het event bevat de voortgang van de upload in percentage en de bytes die zijn verzonden.<br>Dit werkt alleen als het `chunking` attribuut ingesteld is.",table:{type:{summary:"{ file: File, progress: number, bytesSent: number }"},category:t.EVENTS}},onVlSuccess:{name:"vl-success",description:"Event dat afgevuurd wordt als de upload van een bestand succesvol is.",table:{type:{summary:"{ value: string, type: string, file: File, response: object | string}"},category:t.EVENTS}},onVlComplete:{name:"vl-complete",description:"Event dat afgevuurd wordt als de upload van een bestand compleet is.",table:{type:{summary:"{ value: string, type: string, file: File}"},category:t.EVENTS}},onVlQueueComplete:{name:"vl-queuecomplete",description:"Event dat afgevuurd wordt als de upload van alle bestanden compleet is.",table:{type:{summary:"{ value: string, type: string, file: File}"},category:t.EVENTS}},onVlInitialised:{name:"vl-initialised",description:"Event dat afgevuurd wordt als de upload component geïnitialiseerd is. Hierna kunnen bv. events geregistreerd worden.",table:{type:{summary:"{ type: string}"},category:t.EVENTS}}};function v(o){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...b(),...o.components},{FluxComponentMetaData:d}=n;return d||oe("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"upload",children:"Upload"}),`
`,e.jsx(d,{id:"components-form-upload"}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(n.p,{children:["Gebruik de ",e.jsx(n.code,{children:"upload"})," component om één of meerdere bestanden te selecteren of te slepen naar het upload-veld."]}),`
`,e.jsxs(n.p,{children:["Zie het ",e.jsx(n.a,{href:"/docs/patronen-formulier-demo--documentatie",children:"form demo"})," voorbeeld voor het gebruik binnen een form."]}),`
`,e.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { VlUploadComponent } from '@domg-wc/components/form';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-upload></vl-upload>
`})}),`
`,e.jsx(X,{of:i}),`
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(Y,{of:i}),`
`,e.jsx(n.h2,{id:"publieke-methodes",children:"Publieke methodes"}),`
`,e.jsxs(n.p,{children:["De volgende publieke methodes zijn beschikbaar op het ",e.jsx(n.code,{children:"VlUploadComponent"}),":"]}),`
`,e.jsx(ae,{}),`
`,e.jsx(n.h3,{id:"getfiles-dropzonefile",children:"getFiles(): DropzoneFile[]"}),`
`,e.jsx(n.p,{children:"Geeft een lijst van geaccepteerde bestanden terug."}),`
`,e.jsx(n.h3,{id:"getrejectedfiles-dropzonefile",children:"getRejectedFiles(): DropzoneFile[]"}),`
`,e.jsx(n.p,{children:"Geeft een lijst van geweigerde bestanden terug."}),`
`,e.jsx(n.h3,{id:"addfilefile-file-void",children:"addFile(file: File): void"}),`
`,e.jsx(n.p,{children:"Handmatig bestand toevoegen aan de lijst van opgeladen bestanden zonder achterliggende upload"}),`
`,e.jsx(n.h3,{id:"removefilefile-file-void",children:"removeFile(file: File): void"}),`
`,e.jsx(n.p,{children:"Handmatig bestand verwijderen van de lijst van opgeladen bestanden"}),`
`,e.jsx(n.h3,{id:"removeallfiles-void",children:"removeAllFiles(): void"}),`
`,e.jsx(n.p,{children:"Handmatig verwijderen van alle geselecteerde bestanden"}),`
`,e.jsx(n.h3,{id:"uploadurl-string-void",children:"upload(url?: string): void"}),`
`,e.jsx(n.p,{children:"Handmatig de upload aanroepen. Indien een url gegeven is, laad op naar die url."}),`
`,e.jsx(n.h3,{id:"onevent-string-callback-args-unknown--void",children:"on(event: string, callback: (...args: unknown[]) => void)"}),`
`,e.jsx(n.p,{children:"Event listener toevoegen aan de Dropzone instantie van het upload component."}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Opgelet: je kan pas events registeren nadat de component geïnitialiseerd is met behulp van het ",e.jsx(n.code,{children:"vl-initialised"}),"-event"]}),`
`]}),`
`,e.jsx(n.h3,{id:"offevent-string-callback-args-unknown--void",children:"off(event: string, callback: (...args: unknown[]) => void)"}),`
`,e.jsx(n.p,{children:"Event listener verwijderen van de Dropzone instantie van het upload component."}),`
`,e.jsx(n.h2,{id:"validatie",children:"Validatie"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[`Meer info over validatie binnen onze form componenten vind je hier:
`,e.jsx(n.a,{href:"/docs/patronen-formulier-validatie--documentatie",children:"Form - Validatie"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["De component gebruikt achterliggend de ",e.jsx(n.a,{href:"https://www.dropzonejs.com/",rel:"nofollow",children:"Dropzone"})," library."]}),`
`,e.jsx(n.p,{children:`Dropzone genereert achterliggend ook fouten, typisch wanneer er een bestand te veel is toegevoegd of het bestand
te groot is.
Deze fouten worden getoond in de preview van het toegevoegde bestand en tellen mee in de validatie van het formulier.`}),`
`,e.jsxs(n.p,{children:["Om deze functionaliteit te bekomen wordt er een ",e.jsx(n.code,{children:"dropzoneValidator"})," gebruikt die overeenkomt met de ",e.jsx(n.code,{children:"customError"})," ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/ValidityState",rel:"nofollow",children:"ValidityState"}),` key.
Via de `,e.jsx(n.code,{children:"customError"})," ValidityState key kan je een error message linken aan de ",e.jsx(n.code,{children:"dropzoneValidator"}),"."]}),`
`,e.jsx(n.h3,{id:"aanbevelingen",children:"Aanbevelingen"}),`
`,e.jsxs(n.p,{children:["Breid de ",e.jsx(n.code,{children:"sub-title"}),"-attribuut uit met een korte uitleg over maximaal aantal bestanden, maximale bestandsgrootte en de toegestane bestandstypes indien relevant."]}),`
`,e.jsx(n.p,{children:"De reden hiervoor is dat het belangrijk is om de gebruiker te informeren over de beperkingen van het upload-veld. Het is cruciaal om duidelijke instructies te geven aan de gebruiker, zodat het risico op validatiefouten wordt verkleind."}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"voorbeeld aangepaste sub-titel"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:"const {maxFiles, subTitle: subtitleDefault, maxSize} = uploadDefaults;\nconst acceptedFilesMessage = acceptedFiles ? `\\n De toegestane bestandstypes zijn: ${acceptedFiles}\\n` : '';\nsubtitleComposed = `${subtitleDefault} \\nUpload ${maxFiles} bestand(en) van maximaal\n${maxSize} MB${acceptedFilesMessage}`;\n"})})]}),`
`,e.jsx(n.h2,{id:"toevoegen-van-bestanden",children:"Toevoegen van bestanden"}),`
`,e.jsxs(n.p,{children:[`Naast het slepen van bestanden, kan de gebruiker ook één of meerdere bestanden uploaden door op de
link in het upload-veld te klikken en de bestanden
selecteren in het bestandsmenu. Tenslotte is ook het ook mogelijk bestanden programmatorisch toe te voegen via de `,e.jsx(n.code,{children:"addFile()"})," methode."]}),`
`,e.jsx(n.h3,{id:"duplicaat-detectie",children:"Duplicaat detectie"}),`
`,e.jsxs(n.p,{children:["Het is mogelijk om duplicaten van eenzelfde bestand te vermijden met het ",e.jsx(n.code,{children:"disallow-duplicates"}),` attribuut. Achterliggend
wordt er gecontroleerd op ofwel bestandsnaam en aantal bytes, of wordt een hex string vergeleken met eerder toegevoegde
bestanden. In dat geval worden de duplicaten meteen verwijderd.`]}),`
`,e.jsxs(n.p,{children:["Wanneer een duplicaat wordt verwijderd kan je luisteren naar het ",e.jsx(n.code,{children:"duplicateRemoved"}),` event om de gebruiker te informeren
dat bestanden werden verwijderd wegens duplicaat detectie.`]}),`
`,e.jsx(n.h3,{id:"content-security-policy",children:"Content Security Policy"}),`
`,e.jsxs(n.p,{children:["De ",e.jsx(n.code,{children:"vl-upload"})," component maakt gebruik van de ",e.jsx(n.a,{href:"https://www.dropzonejs.com/",rel:"nofollow",children:"Dropzone"}),` library. Deze library maakt
gebruik van inline styles. Deze inline styles worden niet toegelaten in een strikte `,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP",rel:"nofollow",children:"Content Security Policy"}),` policy.
Deze inline styles zijn echter niet nodig voor de werking van de `,e.jsx(n.code,{children:"vl-upload"})," component."]}),`
`,e.jsx(n.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(n.h3,{id:"dropzone",children:"Dropzone"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.dropzonejs.com/#configuration-options",rel:"nofollow",children:"Documentatie Dropzone"})}),`
`,e.jsx(n.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/componenten/upload",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Upload"})})]})}function re(o={}){const{wrapper:n}={...b(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(v,{...o})}):v(o)}function oe(o,n){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}J([ee]);const me={id:"components-form-upload",title:"Components - Form/upload",tags:["autodocs"],args:a,argTypes:le,parameters:{docs:{page:re}}},i=Z(a,({id:o,name:n,label:d,required:f,disabled:y,readonly:x,error:j,success:w,blurValidation:V,url:k,disallowDuplicates:T,maxSize:s,maxFiles:c,chunking:$,parallelUploads:S,autoProcess:F,acceptedFiles:u,subTitle:m,mainTitle:E,errorMessageMaxFiles:z,errorMessageFilesize:D,errorMessageAcceptedFiles:M,onVlChange:A,onVlInput:C,onVlValid:U,onVlError:I,onVlSuccess:N,onVlComplete:R,onVlQueueComplete:B,onVlInitialised:P,onVlRemovedFile:O,onVlAddedFile:G,onVlUploadProgress:H})=>{let p;if(m.toString()==="Symbol(lit-nothing)"){const{maxFiles:_,subTitle:q,maxSize:L}=h,Q=u.toString()!=="Symbol(lit-nothing)"?`
 De toegestane bestandstypes zijn: ${u}
`:"",g=typeof c=="number"?c:_,W=typeof s=="number"?s:L;p=`${q} 
Upload ${g} ${g>1?"bestanden":"bestand"} van maximaal ${W} MB${Q}.`}else p=m;return K`
            <vl-upload
                id=${o}
                name=${n}
                label=${d}
                ?required=${f}
                ?disabled=${y}
                ?readonly=${x}
                ?error=${j}
                ?success=${w}
                ?blur-validation=${V}
                ?disallow-duplicates=${T}
                ?auto-process=${F}
                accepted-files=${u}
                max-size=${s}
                max-files=${c}
                chunking=${$}
                parallel-uploads=${S}
                url=${k}
                sub-title=${p}
                main-title=${E}
                error-message-max-files=${z}
                error-message-filesize=${D}
                error-message-accepted-files=${M}
                @vl-upload-progress=${H}
                @vl-change=${A}
                @vl-input=${C}
                @vl-valid=${U}
                @vl-error=${I}
                @vl-success=${N}
                @vl-complete=${R}
                @vl-queuecomplete=${B}
                @vl-initialised=${P}
                @vl-addedfile=${G}
                @vl-removedfile=${O}
            >
            </vl-upload>
        `});i.storyName="vl-upload - default";i.args={label:"bestand uploaden",url:"http://httpbin.org/post"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`story(uploadArgs, ({
  id,
  name,
  label,
  required,
  disabled,
  readonly,
  error,
  success,
  blurValidation,
  url,
  disallowDuplicates,
  maxSize,
  maxFiles,
  chunking,
  parallelUploads,
  autoProcess,
  acceptedFiles,
  subTitle,
  mainTitle,
  errorMessageMaxFiles,
  errorMessageFilesize,
  errorMessageAcceptedFiles,
  onVlChange,
  onVlInput,
  onVlValid,
  onVlError,
  onVlSuccess,
  onVlComplete,
  onVlQueueComplete,
  onVlInitialised,
  onVlRemovedFile,
  onVlAddedFile,
  onVlUploadProgress
}) => {
  let subtitleComposed;
  if (subTitle.toString() === 'Symbol(lit-nothing)') {
    const {
      maxFiles: maxFilesDefault,
      subTitle: subtitleDefault,
      maxSize: maxSizeDefault
    } = uploadDefaults;
    const acceptedFilesMessage = !(acceptedFiles.toString() === 'Symbol(lit-nothing)') ? \`\\n De toegestane bestandstypes zijn: \${acceptedFiles}\\n\` : '';
    const storyMaxFiles = typeof maxFiles === 'number' ? maxFiles : maxFilesDefault;
    const storyMaxSize = typeof maxSize === 'number' ? maxSize : maxSizeDefault;
    subtitleComposed = \`\${subtitleDefault} \\nUpload \${storyMaxFiles} \${storyMaxFiles > 1 ? 'bestanden' : 'bestand'} van maximaal \${storyMaxSize} MB\${acceptedFilesMessage}.\`;
  } else {
    subtitleComposed = subTitle;
  }
  return html\`
            <vl-upload
                id=\${id}
                name=\${name}
                label=\${label}
                ?required=\${required}
                ?disabled=\${disabled}
                ?readonly=\${readonly}
                ?error=\${error}
                ?success=\${success}
                ?blur-validation=\${blurValidation}
                ?disallow-duplicates=\${disallowDuplicates}
                ?auto-process=\${autoProcess}
                accepted-files=\${acceptedFiles}
                max-size=\${maxSize}
                max-files=\${maxFiles}
                chunking=\${chunking}
                parallel-uploads=\${parallelUploads}
                url=\${url}
                sub-title=\${subtitleComposed}
                main-title=\${mainTitle}
                error-message-max-files=\${errorMessageMaxFiles}
                error-message-filesize=\${errorMessageFilesize}
                error-message-accepted-files=\${errorMessageAcceptedFiles}
                @vl-upload-progress=\${onVlUploadProgress}
                @vl-change=\${onVlChange}
                @vl-input=\${onVlInput}
                @vl-valid=\${onVlValid}
                @vl-error=\${onVlError}
                @vl-success=\${onVlSuccess}
                @vl-complete=\${onVlComplete}
                @vl-queuecomplete=\${onVlQueueComplete}
                @vl-initialised=\${onVlInitialised}
                @vl-addedfile=\${onVlAddedFile}
                @vl-removedfile=\${onVlRemovedFile}
            >
            </vl-upload>
        \`;
})`,...i.parameters?.docs?.source}}};const ge=["UploadDefault"];export{i as UploadDefault,ge as __namedExportsOrder,me as default};
