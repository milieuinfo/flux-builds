import{J as a,K as l,u as m,j as e,C as L,bd as Q,s as W,x as X,r as K}from"./iframe-CflcmDUD.js";import{f as Y,a as J}from"./form-control.stories-arg-BDTLe9sO.js";import{u as g,V as Z}from"./vl-upload.component-Blk6WjMY.js";import{M as ee}from"./form-control.public-methods-doc-CM1idlGD.js";import"./preload-helper-D9Z9MdNV.js";const{action:r}=__STORYBOOK_MODULE_ACTIONS__,t={...Y,...g,onVlChange:r("vl-change"),onVlInput:r("vl-input"),onVlValid:r("vl-valid"),onVlAddedFile:r("vl-addedfile"),onVlRemovedFile:r("vl-removedfile"),onVlSuccess:r("vl-success"),onVlError:r("vl-error"),onVlUploadProgress:r("vl-upload-progress"),onVlComplete:r("vl-complete"),onVlQueueComplete:r("vl-queuecomplete"),onVlInitialised:r("vl-initialised")},ne={...J,readonly:{name:"readonly",description:"Duidt aan dat het veld enkel leesbaar is.",table:{type:{summary:l.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(t.readonly)}}},acceptedFiles:{name:"accepted-files",description:"Attribuut om te bepalen welke bestanden worden geaccepteerd door de component (extensie en mimetype).<br>Bv. `image/*,application/pdf,.psd`",table:{type:{summary:l.STRING},category:a.ATTRIBUTES,defaultValue:{summary:t.acceptedFiles}}},autoProcess:{name:"auto-process",description:"Attribuut om te activeren of deactiveren dat het het gedropte bestand direct moet opgeladen worden.",table:{type:{summary:l.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(t.autoProcess)}}},disallowDuplicates:{name:"disallow-duplicates",description:"Bepaalt dat het niet is toegelaten om dezelfde bijlage meerdere keren te uploaden. Niet reactief.",table:{type:{summary:l.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(t.disallowDuplicates)}}},errorMessageAcceptedFiles:{name:"error-message-accepted-files",description:"Attribuut om de message te definiëren wanneer er bestanden zijn toegevoegd die niet voldoen aan hetgevraagde bestandstype.",table:{type:{summary:l.STRING},category:a.ATTRIBUTES,defaultValue:{summary:t.errorMessageAcceptedFiles}}},errorMessageFilesize:{name:"error-message-filesize",description:"Attribuut om de message te definiëren wanneer er te grote bestanden zijn toegevoegd. <br> Gebruik {{maxSize}} om de maximum grootte weer te geven in MB.",table:{type:{summary:l.STRING},category:a.ATTRIBUTES,defaultValue:{summary:t.errorMessageFilesize}}},errorMessageMaxFiles:{name:"error-message-maxfiles",description:"Attribuut om de boodschap te bepalen wanneer er te veel bestanden zijn toegevoegd. <br> Gebruik {{maxFiles}} om het maximum aantal bestanden weer te geven.",table:{type:{summary:l.STRING},category:a.ATTRIBUTES,defaultValue:{summary:t.errorMessageMaxFiles}}},maxFiles:{name:"max-files",description:"Bepaalt aantal upload-bestanden",table:{type:{summary:"number"},category:a.ATTRIBUTES,defaultValue:{summary:String(t.maxFiles)}}},maxSize:{name:"max-size",description:"Bepaalt de maximum grootte per upload-bestand in MB.",table:{type:{summary:"number"},category:a.ATTRIBUTES,defaultValue:{summary:String(t.maxSize)}}},subTitle:{name:"sub-title",description:`De annotatietekst voor de upload knop.
Niet reactief.`,table:{type:{summary:l.STRING},category:a.ATTRIBUTES,defaultValue:{summary:t.subTitle}}},mainTitle:{name:"main-title",description:`De tekst die op de upload knop komt te staan.
Niet reactief.`,table:{type:{summary:l.STRING},category:a.ATTRIBUTES,defaultValue:{summary:t.mainTitle}}},parallelUploads:{name:"parallel-uploads",description:"Bepaalt het aantal bestanden dat tegelijkertijd geüpload kan worden.",table:{type:{summary:"number"},category:a.ATTRIBUTES,defaultValue:{summary:String(t.parallelUploads)}}},url:{name:"url",description:`Bepaalt de upload url.
Niet reactief.`,table:{type:{summary:l.STRING},category:a.ATTRIBUTES,defaultValue:{summary:t.url}}},chunking:{name:"chunking",description:"Attribuut om te activeren of deactiveren dat het bestand in stukken wordt geüpload.<br> Dit moet aanstaan om upload progress te verkrijgen.",table:{type:{summary:l.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(t.chunking)}}},uploadProgressFn:{name:"uploadProgressFn",description:"Functie die wordt aangeroepen wanneer een bestand wordt geüpload.<br> Deze functie geeft de voortgang van de upload in percentage en de bytes die zijn verzonden.",table:{type:{summary:l.FUNCTION},category:a.PROPERTIES,defaultValue:{summary:String(t.uploadProgressFn)}}},onVlChange:{name:"vl-change",description:"Event dat afgevuurd wordt als bestanden worden toegevoegd of verwijderd (zowel programmatorisch als door een gebruiker).<br>Het detail object van het event bevat de ingegeven waarde.<br>Daarnaast geeft het ook aan welke file werd verwijderd of toegevoegd.",table:{type:{summary:"{ value: string, type: string, file: File}"},category:a.EVENTS}},onVlInput:{name:"vl-input",description:"Event dat alleen afgevuurd wordt als bestanden worden toegevoegd of verwijderd door een gebruiker.<br>Het detail object van het event bevat de ingegeven waarde.<br>Daarnaast geeft het ook aan welke file werd verwijderd of toegevoegd.",table:{type:{summary:"{ value: string, type: string, file: File}"},category:a.EVENTS}},onVlValid:{name:"vl-valid",description:"Event dat afgevuurd wordt als de waarde van het input veld valid is.<br>Het detail object van het event bevat de ingegeven waarde.",table:{type:{summary:"{ value: string }"},category:a.EVENTS}},onVlAddedFile:{name:"vl-addedfile",description:"Event dat afgevuurd wordt als een bestand wordt toegevoegd.<br>Daarnaast geeft het ook de file die werd toegevoegd.",table:{type:{summary:"{ value: string, type: string, file: File}"},category:a.EVENTS}},onVlRemovedFile:{name:"vl-removedfile",description:"Event dat afgevuurd wordt als een bestand wordt verwijderd.<br>Daarnaast geeft het ook de file die werd verwijderd.",table:{type:{summary:"{ value: string, type: string, file: File}"},category:a.EVENTS}},onVlError:{name:"vl-error",description:"Event dat afgevuurd wordt als een bestand niet voldoet aan de validatie.<br>Het detail object van het event bevat de ingegeven waarde.<br>Daarnaast geeft het ook de file met de fout.",table:{type:{summary:"{ value: string, type: string, file: File, errorMessage: string}"},category:a.EVENTS}},onVlUploadProgress:{name:"vl-upload-progress",description:"Event dat afgevuurd wordt als een bestand wordt geüpload.<br>Het detail object van het event bevat de voortgang van de upload in percentage en de bytes die zijn verzonden.<br>Dit werkt alleen als het `chunking` attribuut ingesteld is.",table:{type:{summary:"{ file: File, progress: number, bytesSent: number }"},category:a.EVENTS}},onVlSuccess:{name:"vl-success",description:"Event dat afgevuurd wordt als de upload van een bestand succesvol is.",table:{type:{summary:"{ value: string, type: string, file: File, response: object | string}"},category:a.EVENTS}},onVlComplete:{name:"vl-complete",description:"Event dat afgevuurd wordt als de upload van een bestand compleet is.",table:{type:{summary:"{ value: string, type: string, file: File}"},category:a.EVENTS}},onVlQueueComplete:{name:"vl-queuecomplete",description:"Event dat afgevuurd wordt als de upload van alle bestanden compleet is.",table:{type:{summary:"{ value: string, type: string, file: File}"},category:a.EVENTS}},onVlInitialised:{name:"vl-initialised",description:"Event dat afgevuurd wordt als de upload component geïnitialiseerd is. Hierna kunnen bv. events geregistreerd worden.",table:{type:{summary:"{ type: string}"},category:a.EVENTS}}};function p(o){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...m(),...o.components},{FluxMetaData:d}=n;return d||te("FluxMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"upload",children:"Upload"}),`
`,e.jsx(d,{id:"components-form-upload"}),`
`,e.jsxs(n.p,{children:["Gebruik de ",e.jsx(n.code,{children:"upload"})," component om één of meerdere bestanden te selecteren of te slepen naar het upload-veld."]}),`
`,e.jsxs(n.p,{children:["Zie het ",e.jsx(n.a,{href:"/docs/ontwerp-form-demo--documentatie",children:"form demo"})," voorbeeld voor het gebruik binnen een form."]}),`
`,e.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { VlUploadComponent } from '@domg-wc/components/form';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-upload></vl-upload>
`})}),`
`,e.jsx(L,{of:i}),`
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(Q,{of:i}),`
`,e.jsx(n.h2,{id:"publieke-methodes",children:"Publieke methodes"}),`
`,e.jsxs(n.p,{children:["De volgende publieke methodes zijn beschikbaar op het ",e.jsx(n.code,{children:"VlUploadComponent"}),":"]}),`
`,e.jsx(ee,{}),`
`,e.jsx(n.h3,{id:"getfiles-dropzonefile",children:"getFiles(): DropzoneFile[]"}),`
`,e.jsx(n.p,{children:"Geeft een lijst van geaccepteerde bestanden terug."}),`
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
`,e.jsx(n.a,{href:"/docs/ontwerp-form-validation--documentatie",children:"Form - Validatie"})]}),`
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
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/forms/vl-ui-upload",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Upload"})})]})}function ae(o={}){const{wrapper:n}={...m(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(p,{...o})}):p(o)}function te(o,n){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}K([Z]);const se={id:"components-form-upload",title:"Components - Form/upload",tags:["autodocs"],args:t,argTypes:ne,parameters:{docs:{page:ae}}},i=W(t,({id:o,name:n,label:d,required:v,disabled:b,readonly:h,error:f,success:y,url:x,disallowDuplicates:j,maxSize:w,maxFiles:k,chunking:V,parallelUploads:T,autoProcess:$,acceptedFiles:s,subTitle:u,mainTitle:S,errorMessageMaxFiles:E,errorMessageFilesize:F,errorMessageAcceptedFiles:z,onVlChange:D,onVlInput:A,onVlValid:C,onVlError:M,onVlSuccess:U,onVlComplete:I,onVlQueueComplete:N,onVlInitialised:R,onVlRemovedFile:B,onVlAddedFile:P,onVlUploadProgress:O})=>{let c;if(u.toString()==="Symbol(lit-nothing)"){const{maxFiles:H,subTitle:q,maxSize:G}=g,_=s.toString()!=="Symbol(lit-nothing)"?`
 De toegestane bestandstypes zijn: ${s}
`:"";c=`${q} 
Upload ${H} bestand(en) van maximaal ${G} MB${_}`}else c=u;return X`
            <vl-upload
                id=${o}
                name=${n}
                label=${d}
                ?required=${v}
                ?disabled=${b}
                ?readonly=${h}
                ?error=${f}
                ?success=${y}
                ?disallow-duplicates=${j}
                ?auto-process=${$}
                accepted-files=${s}
                max-size=${w}
                max-files=${k}
                chunking=${V}
                parallel-uploads=${T}
                url=${x}
                sub-title=${c}
                main-title=${S}
                error-message-max-files=${E}
                error-message-filesize=${F}
                error-message-accepted-files=${z}
                @vl-upload-progress=${O}
                @vl-change=${D}
                @vl-input=${A}
                @vl-valid=${C}
                @vl-error=${M}
                @vl-success=${U}
                @vl-complete=${I}
                @vl-queuecomplete=${N}
                @vl-initialised=${R}
                @vl-addedfile=${P}
                @vl-removedfile=${B}
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
      maxFiles,
      subTitle: subtitleDefault,
      maxSize
    } = uploadDefaults;
    const acceptedFilesMessage = !(acceptedFiles.toString() === 'Symbol(lit-nothing)') ? \`\\n De toegestane bestandstypes zijn: \${acceptedFiles}\\n\` : '';
    subtitleComposed = \`\${subtitleDefault} \\nUpload \${maxFiles} bestand(en) van maximaal \${maxSize} MB\${acceptedFilesMessage}\`;
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
})`,...i.parameters?.docs?.source}}};const ce=["UploadDefault"];export{i as UploadDefault,ce as __namedExportsOrder,se as default};
