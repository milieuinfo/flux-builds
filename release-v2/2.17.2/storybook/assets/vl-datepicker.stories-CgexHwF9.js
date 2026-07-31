import{Z as a,_ as r,a1 as k,a2 as ee,u as M,j as e,C as v,b8 as ne,s as ae,x as j,r as te,c as ie,b as re,d as le}from"./iframe-BAEsER5t.js";import{d as oe,f as S,V as de}from"./vl-datepicker.component-UC8l26UU.js";import{f as se,a as me}from"./form-control.stories-arg-Df5Bmxno.js";import{M as ce}from"./form-control.public-methods-doc-CPsS0EYW.js";import"./preload-helper-D9Z9MdNV.js";import"./cleave-esm-DfUhcNrv.js";const w=["date","range","time","date-time"],pe=["auto","above","below","auto left","above left","below left","auto center","above center","below center","auto right","above right","below right"],{action:y}=__STORYBOOK_MODULE_ACTIONS__,i={...se,...oe,onVlChange:y("vl-change"),onVlInput:y("vl-input"),onVlValid:y("vl-valid"),inlinePositioning:!1,helperText:""},ue={...me,block:{name:"block",description:"Duidt aan dat de component de volledige breedte van zijn parent mag innemen.",table:{type:{summary:r.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(i.block)}}},readonly:{name:"readonly",description:"Duidt aan dat het veld enkel `readonly` is.",table:{type:{summary:r.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(i.readonly)}}},type:{name:"type",description:"Type van de datepicker",control:{type:k.SELECT},options:w,table:{type:{summary:ee([...w])},category:a.ATTRIBUTES,defaultValue:{summary:i.type}}},value:{name:"value",description:"De waarde van het veld.",table:{type:{summary:r.STRING},category:a.ATTRIBUTES,defaultValue:{summary:i.value}}},placeholder:{name:"placeholder",description:"De placeholder van het veld.",table:{type:{summary:r.STRING},category:a.ATTRIBUTES,defaultValue:{summary:i.placeholder}}},autocomplete:{name:"autocomplete",description:"De autocomplete van het veld. Dit moet een waarde zijn die door de browser ondersteund wordt.<br>Een lijst van waarden kan je vinden op [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#values).",table:{type:{summary:r.STRING},category:a.ATTRIBUTES,defaultValue:{summary:i.autocomplete}}},format:{name:"format",description:"Het formaat van de datum/tijd waarde. Voor een datum is het standaard formaat `d.m.Y` (-> 31.12.2019).<br>Voor tijd, is `H:i` het standaard formaat (-> 23:59).",table:{type:{summary:r.STRING},category:a.ATTRIBUTES,defaultValue:{summary:i.format}}},minDate:{name:"min-date",description:"Minimum datum conform het ingestelde formaat (bv. '01.01.2019') of 'today' voor vandaag.",control:{type:k.DATE},table:{type:{summary:r.STRING},category:a.ATTRIBUTES,defaultValue:{summary:i.minDate}}},maxDate:{name:"max-date",description:"Maximum datum conform het ingestelde formaat (bv. '31.12.2019') of 'today' voor vandaag.",control:{type:k.DATE},table:{type:{summary:r.STRING},category:a.ATTRIBUTES,defaultValue:{summary:i.maxDate}}},minTime:{name:"min-time",description:"Minimum tijd conform het ingestelde formaat (bv. '09:00').<br/>Enkel van toepassing bij type: `time` of `date-time`.",table:{type:{summary:r.STRING},category:a.ATTRIBUTES,defaultValue:{summary:i.minTime}}},maxTime:{name:"max-time",description:"Maximum tijd conform het ingestelde format (bv. '17:00').<br/>Enkel van toepassing bij type: `time` of `date-time`.",table:{type:{summary:r.STRING},category:a.ATTRIBUTES,defaultValue:{summary:i.maxTime}}},amPm:{name:"am-pm",description:"Activeert de 12-uurs AM/PM timepicker.<br/>Enkel van toepassing bij type: `time` of `date-time`.",table:{type:{summary:r.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(i.amPm)}}},disableMaskValidation:{name:"disable-mask-validation",description:"Schakelt de automatische mask validatie uit.",table:{type:{summary:r.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(i.disableMaskValidation)}}},pattern:{name:"pattern",description:"Het patroon dat je moet volgen bij het ingeven van een waarde.<br>Dit kan gebruikt worden voor eenvoudige validatie.<br>Gebruik de `regex` property voor complexe validatie.",table:{type:{summary:r.STRING},category:a.ATTRIBUTES,defaultValue:{summary:i.pattern}}},regex:{name:"regex",description:"Het patroon dat je moet volgen bij het ingeven van een waarde.<br>Dit kan gebruikt worden voor complexe validatie.",control:!1,table:{type:{summary:r.REGEX},category:a.PROPERTIES,defaultValue:{summary:String(i.regex)}}},onVlInput:{name:"vl-input",description:"Event dat alleen afgevuurd wordt als de gebruiker de waarde van het datepicker-input veld verandert.<br>Het detail object van het event bevat de ingegeven waarde.",table:{type:{summary:"{ value: string }"},category:a.EVENTS}},onVlChange:{name:"vl-change",description:"Event dat afgevuurd wordt als de waarde van het datepicker-input veld verandert (zowel programmatorisch als door een gebruiker).<br>Het detail object van het event bevat de ingegeven waarde.",table:{type:{summary:"{ value: string }"},category:a.EVENTS}},onVlValid:{name:"vl-valid",description:"Event dat afgevuurd wordt als de waarde van het datepicker-input veld valid is.<br>Het detail object van het event bevat de ingegeven waarde.",table:{type:{summary:"{ value: string }"},category:a.EVENTS}},position:{name:"position",description:"Configuratie optie overgenomen van Flatpickr. (https://flatpickr.js.org/options/)",table:{type:{summary:r.STRING},category:a.ATTRIBUTES,defaultValue:{summary:i.position}},options:pe,control:{type:"select"}},isStatic:{name:"static",description:"Configuratie optie overgenomen van Flatpickr. (https://flatpickr.js.org/options/)",table:{type:{summary:r.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(i.isStatic)}},control:!1},inlinePositioning:{name:"inline-positioning",description:"Schakelt terug naar de klassieke flatpickr-positionering: de kalender rendert inline in de shadow DOM in plaats van de top-layer. Standaard (zonder dit attribuut) gebruikt de datepicker CSS Anchor Positioning + Popover API, zodat de kalender niet wordt afgekapt door overflow of transform op ancestor-elementen (bijv. in een modal).",table:{type:{summary:r.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:"false"}}}};function E(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...M(),...t.components},{FluxComponentMetaData:o}=n;return o||ge("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"datepicker",children:"Datepicker"}),`
`,e.jsx(o,{id:"components-form-datepicker"}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(n.p,{children:["Gebruik de ",e.jsx(n.code,{children:"datepicker"})," component om de gebruiker op een gebruiksvriendelijke manier een datum of tijd te laten selecteren.",e.jsx("br",{}),`
Zie het `,e.jsx(n.a,{href:"/docs/patronen-formulier-demo--documentatie",children:"form demo"})," voorbeeld voor het gebruik binnen een form."]}),`
`,e.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { VlDatepickerComponent } from '@domg-wc/components/form';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-datepicker></vl-datepicker>
`})}),`
`,e.jsx(v,{of:l}),`
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(ne,{of:l}),`
`,e.jsx(n.h2,{id:"publieke-methodes",children:"Publieke methodes"}),`
`,e.jsx(ce,{}),`
`,e.jsx(n.h2,{id:"positionering",children:"Positionering"}),`
`,e.jsxs(n.p,{children:[`De datepicker kalender positioneert zichzelf automatisch. Standaard rendert de kalender in de browser top-layer
(via CSS Anchor Positioning + Popover API), zodat ancestor `,e.jsx(n.code,{children:"transform"}),", ",e.jsx(n.code,{children:"overflow"})," of ",e.jsx(n.code,{children:"sticky"}),` de positionering
niet kan breken. Indien de automatische positionering niet het gewenste resultaat oplevert, kan dit op drie
manieren aangepast worden:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Het ",e.jsx(n.code,{children:"position"}),` attribuut: mogelijke waarden zijn: "auto" (default), "above", "below", "auto left", "auto center",
"auto right", "above left", "above center", "above right", "below left", "below center", "below right".`]}),`
`,e.jsxs(n.li,{children:["Het ",e.jsx(n.code,{children:"static"}),` attribuut: indien aanwezig wordt andere positionering genegeerd en wordt de kalender
op een vaste plaats onder het datum invulveld getoond.`]}),`
`,e.jsxs(n.li,{children:["Het ",e.jsx(n.code,{children:"inline-positioning"}),` attribuut: schakelt terug naar de klassieke flatpickr-positionering, waarbij de
kalender inline in de shadow DOM rendert in plaats van de top-layer.`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-datepicker inline-positioning></vl-datepicker>
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["⚠️ ",e.jsx(n.code,{children:"inline-positioning"}),` valt terug op het oude render-model (shadow DOM ipv top-layer) en kan opnieuw
afgekapt worden door ancestor `,e.jsx(n.code,{children:"overflow"})," of ",e.jsx(n.code,{children:"transform"}),`. Gebruik dit enkel als je app afhankelijk is van
de huidige DOM-positie of stacking volgorde van de kalender.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"formaat",children:"Formaat"}),`
`,e.jsxs(n.p,{children:["Je kan het ",e.jsx(n.code,{children:"format"})," attribuut gebruiken om de datumnotatie te wijzigen. Het default formaat is ",e.jsx(n.code,{children:"d.m.Y"}),".",e.jsx("br",{})]}),`
`,e.jsxs(n.p,{children:["In het onderstaande voorbeeld wordt de datumnotatie expliciet ingesteld op ",e.jsx(n.code,{children:"d/m/Y"}),"."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:'format="d/m/Y"'})," zal de gekozen datum weergeven als ",e.jsx(n.code,{children:"31/12/2023"})]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-datepicker format="d/m/Y"></vl-datepicker>
`})}),`
`,e.jsx(n.h2,{id:"waarde",children:"Waarde"}),`
`,e.jsxs(n.p,{children:["Je kan de datum instellen met het ",e.jsx(n.code,{children:"value"})," attribuut. De waarde moet conform het ",e.jsx(n.a,{href:"https://en.wikipedia.org/wiki/ISO_8601",rel:"nofollow",children:"ISO-formaat"})," zijn."]}),`
`,e.jsxs(n.p,{children:["De uitgelezen waarde volgt eveneens het ",e.jsx(n.a,{href:"https://en.wikipedia.org/wiki/ISO_8601",rel:"nofollow",children:"ISO-formaat"}),". Per type datepicker wordt de waarde standaard als volgt weergegeven:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"date"}),": ",e.jsx(n.code,{children:"2023-12-31"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"time"}),": ",e.jsx(n.code,{children:"23:59"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"date-time"}),": ",e.jsx(n.code,{children:"2023-12-31T23:59"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"range"}),": ",e.jsx(n.code,{children:"2023-12-31/2023-12-31"})]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:'value="2023-12-31"'})," zal de ingestelde datum weergeven als ",e.jsx(n.code,{children:"31.12.2023"})]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-datepicker value="2023-12-31"></vl-datepicker>
`})}),`
`,e.jsx(n.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(n.h3,{id:"static",children:"Static"}),`
`,e.jsx(v,{of:s}),`
`,e.jsx(n.h3,{id:"range",children:"Range"}),`
`,e.jsx(v,{of:m}),`
`,e.jsx(n.h3,{id:"time",children:"Time"}),`
`,e.jsx(v,{of:c}),`
`,e.jsx(n.h3,{id:"min-date-en-max-date",children:"Min-date en Max-date"}),`
`,e.jsxs(n.p,{children:["Je kan de selecteerbare datumrange beperken via de ",e.jsx(n.code,{children:"min-date"})," en ",e.jsx(n.code,{children:"max-date"}),` attributen.
De waarde moet conform het ingestelde `,e.jsx(n.code,{children:"format"})," zijn (standaard ",e.jsx(n.code,{children:"d.m.Y"}),"), of de speciale waarde ",e.jsx(n.code,{children:"'today'"})," voor de huidige datum."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Met ",e.jsx(n.code,{children:'format="d.m.Y"'})," (standaard): ",e.jsx(n.code,{children:'min-date="01.01.2019"'})," en ",e.jsx(n.code,{children:'max-date="31.12.2019"'})]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-datepicker min-date="01.01.2019" max-date="31.12.2019"></vl-datepicker>
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Gebruik ",e.jsx(n.code,{children:"'today'"})," om de huidige datum als grens in te stellen:"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-datepicker min-date="today"></vl-datepicker>
`})}),`
`,e.jsx(v,{of:d}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Dagen buiten de opgegeven range worden uitgeschakeld in de kalender."}),`
`,e.jsxs(n.li,{children:["Ingetypte datums buiten de range worden gevalideerd via respectievelijk de ",e.jsx(n.code,{children:"rangeUnderflow"})," en ",e.jsx(n.code,{children:"rangeOverflow"})," ValidityState keys."]}),`
`]}),`
`,e.jsx(n.h3,{id:"date-time",children:"Date-time"}),`
`,e.jsx(v,{of:p}),`
`,e.jsx(n.h2,{id:"validatie",children:"Validatie"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Meer info over validatie binnen onze form componenten vind je hier: ",e.jsx(n.a,{href:"/docs/patronen-formulier-validatie--documentatie",children:"Form - Validatie"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"mask-validatie",children:"Mask Validatie"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Er wordt standaard mask validatie toegevoegd aan de datepicker met type ",e.jsx(n.code,{children:"date"})," (standaard) of type ",e.jsx(n.code,{children:"time"}),"."]}),`
`,e.jsxs(n.li,{children:["De mask wordt opgebouwd op basis van het ",e.jsx(n.code,{children:"format"})," attribuut."]}),`
`,e.jsxs(n.li,{children:["Je kan standaard mask validatie uitschakelen met het ",e.jsx(n.code,{children:"disable-mask-validation"})," attribuut."]}),`
`,e.jsxs(n.li,{children:["De ",e.jsx(n.code,{children:"patternMismatch"})," ValidityState key wordt gebruikt voor de mask validatie error."]}),`
`]}),`
`,e.jsx(n.h3,{id:"pattern-validatie",children:"Pattern Validatie"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Als de mask validatie is uitgeschakeld, kan je met het ",e.jsx(n.code,{children:"pattern"})," attribuut een regex patroon instellen. Je kan ook de ",e.jsx(n.code,{children:"regex"})," property gebruiken voor complexere validatie."]}),`
`,e.jsxs(n.li,{children:["De ",e.jsx(n.code,{children:"patternMismatch"})," ValidityState key wordt gebruikt voor de pattern validatie error."]}),`
`]}),`
`,e.jsx(n.h2,{id:"gekende-beperkingen",children:"Gekende Beperkingen"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"De datepicker is gedeeltelijk toegankelijk voor gebruikers die enkel met het toetsenbord navigeren. Ze kunnen wel manueel een datum invullen."}),`
`,e.jsxs(n.li,{children:["Voor datepicker met type ",e.jsx(n.code,{children:"date-time"})," & ",e.jsx(n.code,{children:"range"})," is er geen standaard mask validatie voorzien gezien ",e.jsx(n.code,{children:"cleave.js"})," hiervoor geen ondersteuning biedt."]}),`
`]}),`
`,e.jsx(n.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(n.h3,{id:"flatpickr",children:"Flatpickr"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://flatpickr.js.org/",rel:"nofollow",children:"Documentatie Flatpickr"})}),`
`,e.jsx(n.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/componenten/datepicker",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Datepicker"})})]})}function ve(t={}){const{wrapper:n}={...M(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(E,{...t})}):E(t)}function ge(t,n){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const T=(t,n,o="d.m.Y",x="")=>{if(t&&n){const h=new Date(t),b=new Date(t);h.setDate(h.getDate()-n),b.setDate(b.getDate()+n);const $=[S.formatDate(h,o),S.formatDate(b,o)];return x?$.join(x):$}else return""};te([de,ie,re,le]);const Se={id:"components-form-datepicker",title:"Components - Form/datepicker",tags:["autodocs"],args:i,argTypes:ue,parameters:{docs:{page:ve,story:{inline:!1,iframeHeight:440}}},decorators:[t=>j` <div style="height: 400px">${t()}</div> `]},u=ae(i,({id:t,type:n,format:o,minDate:x,maxDate:h,minTime:b,maxTime:$,amPm:A,success:I,blurValidation:R,block:P,disabled:C,error:O,readonly:N,required:Y,disableMaskValidation:q,value:U,placeholder:W,autocomplete:B,label:V,pattern:z,regex:G,name:_,onVlChange:H,onVlInput:F,onVlReset:L,onVlValid:K,position:J,isStatic:X,inlinePositioning:Z,helperText:D})=>j`
            <form @submit=${Q=>Q.preventDefault()} class="vl-grid">
                <div class="vl-column vl-column--12">
                    <vl-form-label for="${t}">${V}</vl-form-label>
                    <div>
                        <vl-datepicker
                            id=${t}
                            name=${_}
                            label=${V}
                            value=${U}
                            placeholder=${W}
                            autocomplete=${B}
                            ?error=${O}
                            ?success=${I}
                            ?blur-validation=${R}
                            ?required=${Y}
                            ?readonly=${N}
                            ?disabled=${C}
                            ?block=${P}
                            ?disable-mask-validation=${q}
                            type=${n}
                            format=${o}
                            min-date=${x}
                            max-date=${h}
                            min-time=${b}
                            max-time=${$}
                            am-pm=${A}
                            pattern=${z}
                            .regex=${G}
                            @vl-change=${H}
                            @vl-input=${F}
                            @vl-reset=${L}
                            @vl-valid=${K}
                            position=${J}
                            static=${X}
                            ?inline-positioning=${Z}
                        >
                        </vl-datepicker>
                    </div>
                    ${!!D&&j`<vl-text annotation>${D}</vl-text>`}
                    <vl-form-message for="${t}" state="patternMismatch"
                        >Waarde voldoet niet aan het opgegeven patroon.</vl-form-message
                    >
                    <vl-form-message for="${t}" state="rangeOverflow"
                        >Waarde overschrijdt het toegestane maximum.</vl-form-message
                    >
                    <vl-form-message for="${t}" state="rangeUnderflow"
                        >Waarde ligt onder het toegestane minimum.</vl-form-message
                    >
                </div>
                <div class="vl-column vl-column--12">
                    <vl-button type="submit">Submit</vl-button>
                </div>
            </form>
        `),l=u.bind({});l.storyName="vl-datepicker - default";l.args={id:"datepicker-default",name:"datepicker-default",placeholder:"dd.mm.YYYY",label:"Datum",helperText:"Typ of selecteer een datum"};const f="d.m.Y",[he,be]=T(new Date,2,f),d=u.bind({});d.storyName="vl-datepicker - min-date en max-date";d.args={id:"datepicker-min-max-date",name:"datepicker-min-max-date",minDate:he,maxDate:be,value:new Date().toISOString(),format:f,placeholder:"dd.mm.YYYY",label:"Datum",helperText:"Typ of selecteer een datum tussen de minimum en maximum data"};const s=u.bind({});s.storyName="vl-datepicker - static";s.args={id:"datepicker-static",name:"datepicker-static",isStatic:!0,placeholder:"dd.mm.YYYY",label:"Datum",helperText:"Typ of selecteer een datum"};const[fe,xe]=T(new Date,10,f),$e=T(new Date,4,"Y-m-d","/"),m=u.bind({});m.storyName="vl-datepicker - range";m.args={id:"datepicker-range",name:"datepicker-range",type:"range",minDate:fe,maxDate:xe,format:f,value:$e,label:"Start- en einddatum",placeholder:"dd.mm.YYYY tot en met dd.mm.YYYY",helperText:"Kies een start- en einddatum"};const c=u.bind({});c.storyName="vl-datepicker - time";c.args={id:"datepicker-time",name:"datepicker-time",type:"time",format:"H:i",label:"Tijd",placeholder:"hh:mm",helperText:"Kies een tijd"};const g=u.bind({});g.storyName="vl-datepicker - min-time en max-time";g.args={id:"datepicker-min-max-time",name:"datepicker-min-max-time",minTime:"10:00",maxTime:"11:00",type:"time",format:"H:i",label:"Tijd",placeholder:"hh:mm",helperText:"Kies een tijd tussen een minimum en maximum"};const p=u.bind({});p.storyName="vl-datepicker - date-time";p.args={id:"datepicker-datetime",name:"datepicker-datetime",type:"date-time",format:`${f} H:i`,label:"Datum en tijd",placeholder:"dd.mm.YYYY hh:mm",helperText:"Kies een datum en tijd"};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`story(datepickerArgs, ({
  id,
  type,
  format,
  minDate,
  maxDate,
  minTime,
  maxTime,
  amPm,
  success,
  blurValidation,
  block,
  disabled,
  error,
  readonly,
  required,
  disableMaskValidation,
  value,
  placeholder,
  autocomplete,
  label,
  pattern,
  regex,
  name,
  onVlChange,
  onVlInput,
  onVlReset,
  onVlValid,
  position,
  isStatic,
  inlinePositioning,
  helperText
}: typeof datepickerArgs) => {
  return html\`
            <form @submit=\${(e: Event) => e.preventDefault()} class="vl-grid">
                <div class="vl-column vl-column--12">
                    <vl-form-label for="\${id}">\${label}</vl-form-label>
                    <div>
                        <vl-datepicker
                            id=\${id}
                            name=\${name}
                            label=\${label}
                            value=\${value}
                            placeholder=\${placeholder}
                            autocomplete=\${autocomplete}
                            ?error=\${error}
                            ?success=\${success}
                            ?blur-validation=\${blurValidation}
                            ?required=\${required}
                            ?readonly=\${readonly}
                            ?disabled=\${disabled}
                            ?block=\${block}
                            ?disable-mask-validation=\${disableMaskValidation}
                            type=\${type}
                            format=\${format}
                            min-date=\${minDate}
                            max-date=\${maxDate}
                            min-time=\${minTime}
                            max-time=\${maxTime}
                            am-pm=\${amPm}
                            pattern=\${pattern}
                            .regex=\${regex}
                            @vl-change=\${onVlChange}
                            @vl-input=\${onVlInput}
                            @vl-reset=\${onVlReset}
                            @vl-valid=\${onVlValid}
                            position=\${position}
                            static=\${isStatic}
                            ?inline-positioning=\${inlinePositioning}
                        >
                        </vl-datepicker>
                    </div>
                    \${!!helperText && html\`<vl-text annotation>\${helperText}</vl-text>\`}
                    <vl-form-message for="\${id}" state="patternMismatch"
                        >Waarde voldoet niet aan het opgegeven patroon.</vl-form-message
                    >
                    <vl-form-message for="\${id}" state="rangeOverflow"
                        >Waarde overschrijdt het toegestane maximum.</vl-form-message
                    >
                    <vl-form-message for="\${id}" state="rangeUnderflow"
                        >Waarde ligt onder het toegestane minimum.</vl-form-message
                    >
                </div>
                <div class="vl-column vl-column--12">
                    <vl-button type="submit">Submit</vl-button>
                </div>
            </form>
        \`;
})`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`story(datepickerArgs, ({
  id,
  type,
  format,
  minDate,
  maxDate,
  minTime,
  maxTime,
  amPm,
  success,
  blurValidation,
  block,
  disabled,
  error,
  readonly,
  required,
  disableMaskValidation,
  value,
  placeholder,
  autocomplete,
  label,
  pattern,
  regex,
  name,
  onVlChange,
  onVlInput,
  onVlReset,
  onVlValid,
  position,
  isStatic,
  inlinePositioning,
  helperText
}: typeof datepickerArgs) => {
  return html\`
            <form @submit=\${(e: Event) => e.preventDefault()} class="vl-grid">
                <div class="vl-column vl-column--12">
                    <vl-form-label for="\${id}">\${label}</vl-form-label>
                    <div>
                        <vl-datepicker
                            id=\${id}
                            name=\${name}
                            label=\${label}
                            value=\${value}
                            placeholder=\${placeholder}
                            autocomplete=\${autocomplete}
                            ?error=\${error}
                            ?success=\${success}
                            ?blur-validation=\${blurValidation}
                            ?required=\${required}
                            ?readonly=\${readonly}
                            ?disabled=\${disabled}
                            ?block=\${block}
                            ?disable-mask-validation=\${disableMaskValidation}
                            type=\${type}
                            format=\${format}
                            min-date=\${minDate}
                            max-date=\${maxDate}
                            min-time=\${minTime}
                            max-time=\${maxTime}
                            am-pm=\${amPm}
                            pattern=\${pattern}
                            .regex=\${regex}
                            @vl-change=\${onVlChange}
                            @vl-input=\${onVlInput}
                            @vl-reset=\${onVlReset}
                            @vl-valid=\${onVlValid}
                            position=\${position}
                            static=\${isStatic}
                            ?inline-positioning=\${inlinePositioning}
                        >
                        </vl-datepicker>
                    </div>
                    \${!!helperText && html\`<vl-text annotation>\${helperText}</vl-text>\`}
                    <vl-form-message for="\${id}" state="patternMismatch"
                        >Waarde voldoet niet aan het opgegeven patroon.</vl-form-message
                    >
                    <vl-form-message for="\${id}" state="rangeOverflow"
                        >Waarde overschrijdt het toegestane maximum.</vl-form-message
                    >
                    <vl-form-message for="\${id}" state="rangeUnderflow"
                        >Waarde ligt onder het toegestane minimum.</vl-form-message
                    >
                </div>
                <div class="vl-column vl-column--12">
                    <vl-button type="submit">Submit</vl-button>
                </div>
            </form>
        \`;
})`,...d.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story(datepickerArgs, ({
  id,
  type,
  format,
  minDate,
  maxDate,
  minTime,
  maxTime,
  amPm,
  success,
  blurValidation,
  block,
  disabled,
  error,
  readonly,
  required,
  disableMaskValidation,
  value,
  placeholder,
  autocomplete,
  label,
  pattern,
  regex,
  name,
  onVlChange,
  onVlInput,
  onVlReset,
  onVlValid,
  position,
  isStatic,
  inlinePositioning,
  helperText
}: typeof datepickerArgs) => {
  return html\`
            <form @submit=\${(e: Event) => e.preventDefault()} class="vl-grid">
                <div class="vl-column vl-column--12">
                    <vl-form-label for="\${id}">\${label}</vl-form-label>
                    <div>
                        <vl-datepicker
                            id=\${id}
                            name=\${name}
                            label=\${label}
                            value=\${value}
                            placeholder=\${placeholder}
                            autocomplete=\${autocomplete}
                            ?error=\${error}
                            ?success=\${success}
                            ?blur-validation=\${blurValidation}
                            ?required=\${required}
                            ?readonly=\${readonly}
                            ?disabled=\${disabled}
                            ?block=\${block}
                            ?disable-mask-validation=\${disableMaskValidation}
                            type=\${type}
                            format=\${format}
                            min-date=\${minDate}
                            max-date=\${maxDate}
                            min-time=\${minTime}
                            max-time=\${maxTime}
                            am-pm=\${amPm}
                            pattern=\${pattern}
                            .regex=\${regex}
                            @vl-change=\${onVlChange}
                            @vl-input=\${onVlInput}
                            @vl-reset=\${onVlReset}
                            @vl-valid=\${onVlValid}
                            position=\${position}
                            static=\${isStatic}
                            ?inline-positioning=\${inlinePositioning}
                        >
                        </vl-datepicker>
                    </div>
                    \${!!helperText && html\`<vl-text annotation>\${helperText}</vl-text>\`}
                    <vl-form-message for="\${id}" state="patternMismatch"
                        >Waarde voldoet niet aan het opgegeven patroon.</vl-form-message
                    >
                    <vl-form-message for="\${id}" state="rangeOverflow"
                        >Waarde overschrijdt het toegestane maximum.</vl-form-message
                    >
                    <vl-form-message for="\${id}" state="rangeUnderflow"
                        >Waarde ligt onder het toegestane minimum.</vl-form-message
                    >
                </div>
                <div class="vl-column vl-column--12">
                    <vl-button type="submit">Submit</vl-button>
                </div>
            </form>
        \`;
})`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`story(datepickerArgs, ({
  id,
  type,
  format,
  minDate,
  maxDate,
  minTime,
  maxTime,
  amPm,
  success,
  blurValidation,
  block,
  disabled,
  error,
  readonly,
  required,
  disableMaskValidation,
  value,
  placeholder,
  autocomplete,
  label,
  pattern,
  regex,
  name,
  onVlChange,
  onVlInput,
  onVlReset,
  onVlValid,
  position,
  isStatic,
  inlinePositioning,
  helperText
}: typeof datepickerArgs) => {
  return html\`
            <form @submit=\${(e: Event) => e.preventDefault()} class="vl-grid">
                <div class="vl-column vl-column--12">
                    <vl-form-label for="\${id}">\${label}</vl-form-label>
                    <div>
                        <vl-datepicker
                            id=\${id}
                            name=\${name}
                            label=\${label}
                            value=\${value}
                            placeholder=\${placeholder}
                            autocomplete=\${autocomplete}
                            ?error=\${error}
                            ?success=\${success}
                            ?blur-validation=\${blurValidation}
                            ?required=\${required}
                            ?readonly=\${readonly}
                            ?disabled=\${disabled}
                            ?block=\${block}
                            ?disable-mask-validation=\${disableMaskValidation}
                            type=\${type}
                            format=\${format}
                            min-date=\${minDate}
                            max-date=\${maxDate}
                            min-time=\${minTime}
                            max-time=\${maxTime}
                            am-pm=\${amPm}
                            pattern=\${pattern}
                            .regex=\${regex}
                            @vl-change=\${onVlChange}
                            @vl-input=\${onVlInput}
                            @vl-reset=\${onVlReset}
                            @vl-valid=\${onVlValid}
                            position=\${position}
                            static=\${isStatic}
                            ?inline-positioning=\${inlinePositioning}
                        >
                        </vl-datepicker>
                    </div>
                    \${!!helperText && html\`<vl-text annotation>\${helperText}</vl-text>\`}
                    <vl-form-message for="\${id}" state="patternMismatch"
                        >Waarde voldoet niet aan het opgegeven patroon.</vl-form-message
                    >
                    <vl-form-message for="\${id}" state="rangeOverflow"
                        >Waarde overschrijdt het toegestane maximum.</vl-form-message
                    >
                    <vl-form-message for="\${id}" state="rangeUnderflow"
                        >Waarde ligt onder het toegestane minimum.</vl-form-message
                    >
                </div>
                <div class="vl-column vl-column--12">
                    <vl-button type="submit">Submit</vl-button>
                </div>
            </form>
        \`;
})`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`story(datepickerArgs, ({
  id,
  type,
  format,
  minDate,
  maxDate,
  minTime,
  maxTime,
  amPm,
  success,
  blurValidation,
  block,
  disabled,
  error,
  readonly,
  required,
  disableMaskValidation,
  value,
  placeholder,
  autocomplete,
  label,
  pattern,
  regex,
  name,
  onVlChange,
  onVlInput,
  onVlReset,
  onVlValid,
  position,
  isStatic,
  inlinePositioning,
  helperText
}: typeof datepickerArgs) => {
  return html\`
            <form @submit=\${(e: Event) => e.preventDefault()} class="vl-grid">
                <div class="vl-column vl-column--12">
                    <vl-form-label for="\${id}">\${label}</vl-form-label>
                    <div>
                        <vl-datepicker
                            id=\${id}
                            name=\${name}
                            label=\${label}
                            value=\${value}
                            placeholder=\${placeholder}
                            autocomplete=\${autocomplete}
                            ?error=\${error}
                            ?success=\${success}
                            ?blur-validation=\${blurValidation}
                            ?required=\${required}
                            ?readonly=\${readonly}
                            ?disabled=\${disabled}
                            ?block=\${block}
                            ?disable-mask-validation=\${disableMaskValidation}
                            type=\${type}
                            format=\${format}
                            min-date=\${minDate}
                            max-date=\${maxDate}
                            min-time=\${minTime}
                            max-time=\${maxTime}
                            am-pm=\${amPm}
                            pattern=\${pattern}
                            .regex=\${regex}
                            @vl-change=\${onVlChange}
                            @vl-input=\${onVlInput}
                            @vl-reset=\${onVlReset}
                            @vl-valid=\${onVlValid}
                            position=\${position}
                            static=\${isStatic}
                            ?inline-positioning=\${inlinePositioning}
                        >
                        </vl-datepicker>
                    </div>
                    \${!!helperText && html\`<vl-text annotation>\${helperText}</vl-text>\`}
                    <vl-form-message for="\${id}" state="patternMismatch"
                        >Waarde voldoet niet aan het opgegeven patroon.</vl-form-message
                    >
                    <vl-form-message for="\${id}" state="rangeOverflow"
                        >Waarde overschrijdt het toegestane maximum.</vl-form-message
                    >
                    <vl-form-message for="\${id}" state="rangeUnderflow"
                        >Waarde ligt onder het toegestane minimum.</vl-form-message
                    >
                </div>
                <div class="vl-column vl-column--12">
                    <vl-button type="submit">Submit</vl-button>
                </div>
            </form>
        \`;
})`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`story(datepickerArgs, ({
  id,
  type,
  format,
  minDate,
  maxDate,
  minTime,
  maxTime,
  amPm,
  success,
  blurValidation,
  block,
  disabled,
  error,
  readonly,
  required,
  disableMaskValidation,
  value,
  placeholder,
  autocomplete,
  label,
  pattern,
  regex,
  name,
  onVlChange,
  onVlInput,
  onVlReset,
  onVlValid,
  position,
  isStatic,
  inlinePositioning,
  helperText
}: typeof datepickerArgs) => {
  return html\`
            <form @submit=\${(e: Event) => e.preventDefault()} class="vl-grid">
                <div class="vl-column vl-column--12">
                    <vl-form-label for="\${id}">\${label}</vl-form-label>
                    <div>
                        <vl-datepicker
                            id=\${id}
                            name=\${name}
                            label=\${label}
                            value=\${value}
                            placeholder=\${placeholder}
                            autocomplete=\${autocomplete}
                            ?error=\${error}
                            ?success=\${success}
                            ?blur-validation=\${blurValidation}
                            ?required=\${required}
                            ?readonly=\${readonly}
                            ?disabled=\${disabled}
                            ?block=\${block}
                            ?disable-mask-validation=\${disableMaskValidation}
                            type=\${type}
                            format=\${format}
                            min-date=\${minDate}
                            max-date=\${maxDate}
                            min-time=\${minTime}
                            max-time=\${maxTime}
                            am-pm=\${amPm}
                            pattern=\${pattern}
                            .regex=\${regex}
                            @vl-change=\${onVlChange}
                            @vl-input=\${onVlInput}
                            @vl-reset=\${onVlReset}
                            @vl-valid=\${onVlValid}
                            position=\${position}
                            static=\${isStatic}
                            ?inline-positioning=\${inlinePositioning}
                        >
                        </vl-datepicker>
                    </div>
                    \${!!helperText && html\`<vl-text annotation>\${helperText}</vl-text>\`}
                    <vl-form-message for="\${id}" state="patternMismatch"
                        >Waarde voldoet niet aan het opgegeven patroon.</vl-form-message
                    >
                    <vl-form-message for="\${id}" state="rangeOverflow"
                        >Waarde overschrijdt het toegestane maximum.</vl-form-message
                    >
                    <vl-form-message for="\${id}" state="rangeUnderflow"
                        >Waarde ligt onder het toegestane minimum.</vl-form-message
                    >
                </div>
                <div class="vl-column vl-column--12">
                    <vl-button type="submit">Submit</vl-button>
                </div>
            </form>
        \`;
})`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`story(datepickerArgs, ({
  id,
  type,
  format,
  minDate,
  maxDate,
  minTime,
  maxTime,
  amPm,
  success,
  blurValidation,
  block,
  disabled,
  error,
  readonly,
  required,
  disableMaskValidation,
  value,
  placeholder,
  autocomplete,
  label,
  pattern,
  regex,
  name,
  onVlChange,
  onVlInput,
  onVlReset,
  onVlValid,
  position,
  isStatic,
  inlinePositioning,
  helperText
}: typeof datepickerArgs) => {
  return html\`
            <form @submit=\${(e: Event) => e.preventDefault()} class="vl-grid">
                <div class="vl-column vl-column--12">
                    <vl-form-label for="\${id}">\${label}</vl-form-label>
                    <div>
                        <vl-datepicker
                            id=\${id}
                            name=\${name}
                            label=\${label}
                            value=\${value}
                            placeholder=\${placeholder}
                            autocomplete=\${autocomplete}
                            ?error=\${error}
                            ?success=\${success}
                            ?blur-validation=\${blurValidation}
                            ?required=\${required}
                            ?readonly=\${readonly}
                            ?disabled=\${disabled}
                            ?block=\${block}
                            ?disable-mask-validation=\${disableMaskValidation}
                            type=\${type}
                            format=\${format}
                            min-date=\${minDate}
                            max-date=\${maxDate}
                            min-time=\${minTime}
                            max-time=\${maxTime}
                            am-pm=\${amPm}
                            pattern=\${pattern}
                            .regex=\${regex}
                            @vl-change=\${onVlChange}
                            @vl-input=\${onVlInput}
                            @vl-reset=\${onVlReset}
                            @vl-valid=\${onVlValid}
                            position=\${position}
                            static=\${isStatic}
                            ?inline-positioning=\${inlinePositioning}
                        >
                        </vl-datepicker>
                    </div>
                    \${!!helperText && html\`<vl-text annotation>\${helperText}</vl-text>\`}
                    <vl-form-message for="\${id}" state="patternMismatch"
                        >Waarde voldoet niet aan het opgegeven patroon.</vl-form-message
                    >
                    <vl-form-message for="\${id}" state="rangeOverflow"
                        >Waarde overschrijdt het toegestane maximum.</vl-form-message
                    >
                    <vl-form-message for="\${id}" state="rangeUnderflow"
                        >Waarde ligt onder het toegestane minimum.</vl-form-message
                    >
                </div>
                <div class="vl-column vl-column--12">
                    <vl-button type="submit">Submit</vl-button>
                </div>
            </form>
        \`;
})`,...p.parameters?.docs?.source}}};const we=["DatepickerDefault","DatepickerMinDateAndMaxDate","DatepickerStatic","DatepickerRange","DatepickerTime","DatepickerMinTimeAndMaxTime","DatepickerDateTime"];export{p as DatepickerDateTime,l as DatepickerDefault,d as DatepickerMinDateAndMaxDate,g as DatepickerMinTimeAndMaxTime,m as DatepickerRange,s as DatepickerStatic,c as DatepickerTime,we as __namedExportsOrder,Se as default};
