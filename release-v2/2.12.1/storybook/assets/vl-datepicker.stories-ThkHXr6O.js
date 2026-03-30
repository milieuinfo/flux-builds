import{Y as a,Z as r,a0 as x,a1 as Z,u as I,j as n,C as Q,bb as ee,s as ne,x as y,r as ae,c as te,b as ie,d as re}from"./iframe-B6HStWZE.js";import{d as le,f as D,V as oe}from"./vl-datepicker.component-C_GYwEcM.js";import{f as de,a as se}from"./form-control.stories-arg-BABlIkHx.js";import{M as me}from"./form-control.public-methods-doc-BSQ80Dry.js";import"./preload-helper-D9Z9MdNV.js";import"./cleave-esm-DfUhcNrv.js";const S=["date","range","time","date-time"],ce=["auto","above","below","auto left","above left","below left","auto center","above center","below center","auto right","above right","below right"],{action:k}=__STORYBOOK_MODULE_ACTIONS__,i={...de,...le,onVlChange:k("vl-change"),onVlInput:k("vl-input"),onVlValid:k("vl-valid"),helperText:""},pe={...se,block:{name:"block",description:"Duidt aan dat de component de volledige breedte van zijn parent mag innemen.",table:{type:{summary:r.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(i.block)}}},readonly:{name:"readonly",description:"Duidt aan dat het veld enkel `readonly` is.",table:{type:{summary:r.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(i.readonly)}}},type:{name:"type",description:"Type van de datepicker",control:{type:x.SELECT},options:S,table:{type:{summary:Z([...S])},category:a.ATTRIBUTES,defaultValue:{summary:i.type}}},value:{name:"value",description:"De waarde van het veld.",table:{type:{summary:r.STRING},category:a.ATTRIBUTES,defaultValue:{summary:i.value}}},placeholder:{name:"placeholder",description:"De placeholder van het veld.",table:{type:{summary:r.STRING},category:a.ATTRIBUTES,defaultValue:{summary:i.placeholder}}},autocomplete:{name:"autocomplete",description:"De autocomplete van het veld. Dit moet een waarde zijn die door de browser ondersteund wordt.<br>Een lijst van waarden kan je vinden op [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#values).",table:{type:{summary:r.STRING},category:a.ATTRIBUTES,defaultValue:{summary:i.autocomplete}}},format:{name:"format",description:"Het formaat van de datum/tijd waarde. Voor een datum is het standaard formaat `d.m.Y` (-> 31.12.2019).<br>Voor tijd, is `H:i` het standaard formaat (-> 23:59).",table:{type:{summary:r.STRING},category:a.ATTRIBUTES,defaultValue:{summary:i.format}}},minDate:{name:"min-date",description:"Minimum datum conform het ingestelde formaat (bv. '01-01-2019') of 'today' voor vandaag.",control:{type:x.DATE},table:{type:{summary:r.STRING},category:a.ATTRIBUTES,defaultValue:{summary:i.minDate}}},maxDate:{name:"max-date",description:"Maximum datum conform het ingestelde format (bv. '31-12-2019') of 'today' voor vandaag.",control:{type:x.DATE},table:{type:{summary:r.STRING},category:a.ATTRIBUTES,defaultValue:{summary:i.maxDate}}},minTime:{name:"min-time",description:"Minimum tijd conform het ingestelde formaat (bv. '09:00').<br/>Enkel van toepassing bij type: `time` of `date-time`.",table:{type:{summary:r.STRING},category:a.ATTRIBUTES,defaultValue:{summary:i.minTime}}},maxTime:{name:"max-time",description:"Maximum tijd conform het ingestelde format (bv. '17:00').<br/>Enkel van toepassing bij type: `time` of `date-time`.",table:{type:{summary:r.STRING},category:a.ATTRIBUTES,defaultValue:{summary:i.maxTime}}},amPm:{name:"am-pm",description:"Activeert de 12-uurs AM/PM timepicker.<br/>Enkel van toepassing bij type: `time` of `date-time`.",table:{type:{summary:r.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(i.amPm)}}},disableMaskValidation:{name:"disable-mask-validation",description:"Schakelt de automatische mask validatie uit.",table:{type:{summary:r.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(i.disableMaskValidation)}}},disableMobileNativeInput:{name:"disable-mobile-native-input",description:"Rendert de native datepicker op mobiele toestellen in plaats van flatpickr calendar. [Meer Info](https://flatpickr.js.org/mobile-support/)",table:{type:{summary:r.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(i.disableMobileNativeInput)}}},pattern:{name:"pattern",description:"Het patroon dat je moet volgen bij het ingeven van een waarde.<br>Dit kan gebruikt worden voor eenvoudige validatie.<br>Gebruik de `regex` property voor complexe validatie.",table:{type:{summary:r.STRING},category:a.ATTRIBUTES,defaultValue:{summary:i.pattern}}},regex:{name:"regex",description:"Het patroon dat je moet volgen bij het ingeven van een waarde.<br>Dit kan gebruikt worden voor complexe validatie.",control:!1,table:{type:{summary:r.REGEX},category:a.PROPERTIES,defaultValue:{summary:String(i.regex)}}},onVlInput:{name:"vl-input",description:"Event dat alleen afgevuurd wordt als de gebruiker de waarde van het datepicker-input veld verandert.<br>Het detail object van het event bevat de ingegeven waarde.",table:{type:{summary:"{ value: string }"},category:a.EVENTS}},onVlChange:{name:"vl-change",description:"Event dat afgevuurd wordt als de waarde van het datepicker-input veld verandert (zowel programmatorisch als door een gebruiker).<br>Het detail object van het event bevat de ingegeven waarde.",table:{type:{summary:"{ value: string }"},category:a.EVENTS}},onVlValid:{name:"vl-valid",description:"Event dat afgevuurd wordt als de waarde van het datepicker-input veld valid is.<br>Het detail object van het event bevat de ingegeven waarde.",table:{type:{summary:"{ value: string }"},category:a.EVENTS}},position:{name:"position",description:"Configuratie optie overgenomen van Flatpickr. (https://flatpickr.js.org/options/)",table:{type:{summary:r.STRING},category:a.ATTRIBUTES,defaultValue:{summary:i.position}},options:ce,control:{type:"select"}},isStatic:{name:"static",description:"Configuratie optie overgenomen van Flatpickr. (https://flatpickr.js.org/options/)",table:{type:{summary:r.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(i.isStatic)}},control:!1}};function w(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...I(),...t.components},{FluxComponentMetaData:o}=e;return o||ve("FluxComponentMetaData"),n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"datepicker",children:"Datepicker"}),`
`,n.jsx(o,{id:"components-form-datepicker"}),`
`,n.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,n.jsxs(e.p,{children:["Gebruik de ",n.jsx(e.code,{children:"datepicker"})," component om de gebruiker op een gebruiksvriendelijke manier een datum of tijd te laten selecteren.",n.jsx("br",{}),`
Zie het `,n.jsx(e.a,{href:"/docs/patronen-formulier-demo--documentatie",children:"form demo"})," voorbeeld voor het gebruik binnen een form."]}),`
`,n.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`import { VlDatepickerComponent } from '@domg-wc/components/form';
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<vl-datepicker></vl-datepicker>
`})}),`
`,n.jsx(Q,{of:l}),`
`,n.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,n.jsx(ee,{of:l}),`
`,n.jsx(e.h2,{id:"publieke-methodes",children:"Publieke methodes"}),`
`,n.jsx(me,{}),`
`,n.jsx(e.h2,{id:"positionering",children:"Positionering"}),`
`,n.jsx(e.p,{children:`De datepicker kalender positioneert zichzelf automatisch. Indien de automatische positionering niet het gewenste
resultaat oplevert, kan dit op twee manieren aangepast worden:`}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Het ",n.jsx(e.code,{children:"position"}),` attribuut: mogelijke waarden zijn: "auto" (default), "above", "below", "auto left", "auto center",
"auto right", "above left", "above center", "above right", "below left", "below center", "below right".`]}),`
`,n.jsxs(e.li,{children:["Het ",n.jsx(e.code,{children:"static"}),` attribuut: indien aanwezig wordt andere positionering genegeerd en wordt de kalender
op een vaste plaats onder het datum invulveld getoond.`]}),`
`]}),`
`,n.jsx(e.h2,{id:"formaat",children:"Formaat"}),`
`,n.jsxs(e.p,{children:["Je kan het ",n.jsx(e.code,{children:"format"})," attribuut gebruiken om de datumnotatie te wijzigen. Het default formaat is ",n.jsx(e.code,{children:"d.m.Y"}),".",n.jsx("br",{})]}),`
`,n.jsxs(e.p,{children:["In het onderstaande voorbeeld wordt de datumnotatie expliciet ingesteld op ",n.jsx(e.code,{children:"d/m/Y"}),"."]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:'format="d/m/Y"'})," zal de gekozen datum weergeven als ",n.jsx(e.code,{children:"31/12/2023"})]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<vl-datepicker format="d/m/Y"></vl-datepicker>
`})}),`
`,n.jsx(e.h2,{id:"waarde",children:"Waarde"}),`
`,n.jsxs(e.p,{children:["Je kan de datum instellen met het ",n.jsx(e.code,{children:"value"})," attribuut. De waarde moet conform het ",n.jsx(e.a,{href:"https://en.wikipedia.org/wiki/ISO_8601",rel:"nofollow",children:"ISO-formaat"})," zijn."]}),`
`,n.jsxs(e.p,{children:["De uitgelezen waarde volgt eveneens het ",n.jsx(e.a,{href:"https://en.wikipedia.org/wiki/ISO_8601",rel:"nofollow",children:"ISO-formaat"}),". Per type datepicker wordt de waarde standaard als volgt weergegeven:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"date"}),": ",n.jsx(e.code,{children:"2023-12-31"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"time"}),": ",n.jsx(e.code,{children:"23:59"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"date-time"}),": ",n.jsx(e.code,{children:"2023-12-31T23:59"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"range"}),": ",n.jsx(e.code,{children:"2023-12-31/2023-12-31"})]}),`
`]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:'value="2023-12-31"'})," zal de ingestelde datum weergeven als ",n.jsx(e.code,{children:"31.12.2023"})]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<vl-datepicker value="2023-12-31"></vl-datepicker>
`})}),`
`,n.jsx(e.h2,{id:"validatie",children:"Validatie"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["Meer info over validatie binnen onze form componenten vind je hier: ",n.jsx(e.a,{href:"/docs/patronen-formulier-validatie--documentatie",children:"Form - Validatie"})]}),`
`]}),`
`,n.jsx(e.h3,{id:"mask-validatie",children:"Mask Validatie"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Er wordt standaard mask validatie toegevoegd aan de datepicker met type ",n.jsx(e.code,{children:"date"})," (standaard) of type ",n.jsx(e.code,{children:"time"}),"."]}),`
`,n.jsxs(e.li,{children:["De mask wordt opgebouwd op basis van het ",n.jsx(e.code,{children:"format"})," attribuut."]}),`
`,n.jsxs(e.li,{children:["Je kan standaard mask validatie uitschakelen met het ",n.jsx(e.code,{children:"disable-mask-validation"})," attribuut."]}),`
`,n.jsxs(e.li,{children:["De ",n.jsx(e.code,{children:"patternMismatch"})," ValidityState key wordt gebruikt voor de mask validatie error."]}),`
`]}),`
`,n.jsx(e.h3,{id:"pattern-validatie",children:"Pattern Validatie"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Als de mask validatie is uitgeschakeld, kan je met het ",n.jsx(e.code,{children:"pattern"})," attribuut een regex patroon instellen. Je kan ook de ",n.jsx(e.code,{children:"regex"})," property gebruiken voor complexere validatie."]}),`
`,n.jsxs(e.li,{children:["De ",n.jsx(e.code,{children:"patternMismatch"})," ValidityState key wordt gebruikt voor de pattern validatie error."]}),`
`]}),`
`,n.jsx(e.h2,{id:"mobile-ondersteuning",children:"Mobile ondersteuning"}),`
`,n.jsxs(e.p,{children:["Standaard wordt de datepicker weergegeven als een kalender. Voor mobiele toestellen is het mogelijk de datepicker weer te geven als een input veld met een datepicker door het ",n.jsx(e.code,{children:"enable-mobile-native-input"})," attribuut toe te voegen."]}),`
`,n.jsx(e.h2,{id:"gekende-beperkingen",children:"Gekende Beperkingen"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"De datepicker is gedeeltelijk toegankelijk voor gebruikers die enkel met het toetsenbord navigeren. Ze kunnen wel manueel een datum invullen."}),`
`,n.jsxs(e.li,{children:["Voor datepicker met type ",n.jsx(e.code,{children:"date-time"})," & ",n.jsx(e.code,{children:"range"})," is er geen standaard mask validatie voorzien gezien ",n.jsx(e.code,{children:"cleave.js"})," hiervoor geen ondersteuning biedt."]}),`
`]}),`
`,n.jsx(e.h2,{id:"referenties",children:"Referenties"}),`
`,n.jsx(e.h3,{id:"flatpickr",children:"Flatpickr"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://flatpickr.js.org/",rel:"nofollow",children:"Documentatie Flatpickr"})}),`
`,n.jsx(e.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-datepicker/",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Datepicker"})})]})}function ue(t={}){const{wrapper:e}={...I(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(w,{...t})}):w(t)}function ve(t,e){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const T=(t,e,o="d.m.Y",$="")=>{if(t&&e){const g=new Date(t),b=new Date(t);g.setDate(g.getDate()-e),b.setDate(b.getDate()+e);const f=[D.formatDate(g,o),D.formatDate(b,o)];return $?f.join($):f}else return""};ae([oe,te,ie,re]);const De={id:"components-form-datepicker",title:"Components - Form/datepicker",tags:["autodocs"],args:i,argTypes:pe,parameters:{docs:{page:ue,story:{inline:!1,iframeHeight:440}}},decorators:[t=>y` <div style="height: 400px">${t()}</div> `]},d=ne(i,({id:t,type:e,format:o,minDate:$,maxDate:g,minTime:b,maxTime:f,amPm:M,success:E,block:R,disabled:A,error:N,readonly:C,required:O,disableMobileNativeInput:Y,disableMaskValidation:P,value:q,placeholder:U,autocomplete:W,label:j,pattern:B,regex:z,name:_,onVlChange:G,onVlInput:H,onVlReset:F,onVlValid:L,position:K,isStatic:X,helperText:V})=>y`
            <form @submit=${J=>J.preventDefault()} class="vl-grid">
                <div class="vl-column vl-column--12">
                    <vl-form-label for="${t}">${j}</vl-form-label>
                    <div>
                        <vl-datepicker
                            id=${t}
                            name=${_}
                            label=${j}
                            value=${q}
                            placeholder=${U}
                            autocomplete=${W}
                            ?error=${N}
                            ?success=${E}
                            ?required=${O}
                            ?readonly=${C}
                            ?disabled=${A}
                            ?block=${R}
                            ?disable-mobile-native-input=${Y}
                            ?disable-mask-validation=${P}
                            type=${e}
                            format=${o}
                            min-date=${$}
                            max-date=${g}
                            min-time=${b}
                            max-time=${f}
                            am-pm=${M}
                            pattern=${B}
                            .regex=${z}
                            @vl-change=${G}
                            @vl-input=${H}
                            @vl-reset=${F}
                            @vl-valid=${L}
                            position=${K}
                            static=${X}
                        >
                        </vl-datepicker>
                    </div>
                    ${!!V&&y`<vl-text annotation>${V}</vl-text>`}
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
        `),l=d.bind({});l.storyName="vl-datepicker - default";l.args={id:"datepicker-default",name:"datepicker-default",placeholder:"dd.mm.YYYY",label:"Datum",helperText:"Typ of selecteer een datum"};const h="d.m.Y",[ge,be]=T(new Date,2,h),s=d.bind({});s.storyName="vl-datepicker - min-date en max-date";s.args={id:"datepicker-min-max-date",name:"datepicker-min-max-date",minDate:ge,maxDate:be,value:new Date().toISOString(),format:h,placeholder:"dd.mm.YYYY",label:"Datum",helperText:"Typ of selecteer een datum tussen de minimum en maximum data"};const m=d.bind({});m.storyName="vl-datepicker - static";m.args={id:"datepicker-static",name:"datepicker-static",isStatic:!0,placeholder:"dd.mm.YYYY",label:"Datum",helperText:"Typ of selecteer een datum"};const[he,$e]=T(new Date,10,h),fe=T(new Date,4,"Y-m-d","/"),c=d.bind({});c.storyName="vl-datepicker - range";c.args={id:"datepicker-range",name:"datepicker-range",type:"range",minDate:he,maxDate:$e,format:h,value:fe,label:"Start- en einddatum",placeholder:"dd.mm.YYYY tot en met dd.mm.YYYY",helperText:"Kies een start- en einddatum"};const p=d.bind({});p.storyName="vl-datepicker - time";p.args={id:"datepicker-time",name:"datepicker-time",type:"time",format:"H:i",label:"Tijd",placeholder:"hh:mm",helperText:"Kies een tijd"};const u=d.bind({});u.storyName="vl-datepicker - min-time en max-time";u.args={id:"datepicker-min-max-time",name:"datepicker-min-max-time",minTime:"10:00",maxTime:"11:00",type:"time",format:"H:i",label:"Tijd",placeholder:"hh:mm",helperText:"Kies een tijd tussen een minimum en maximum"};const v=d.bind({});v.storyName="vl-datepicker - date-time";v.args={id:"datepicker-datetime",name:"datepicker-datetime",type:"date-time",format:`${h} H:i`,label:"Datum en tijd",placeholder:"dd.mm.YYYY hh:mm",helperText:"Kies een datum en tijd"};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`story(datepickerArgs, ({
  id,
  type,
  format,
  minDate,
  maxDate,
  minTime,
  maxTime,
  amPm,
  success,
  block,
  disabled,
  error,
  readonly,
  required,
  disableMobileNativeInput,
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
                            ?required=\${required}
                            ?readonly=\${readonly}
                            ?disabled=\${disabled}
                            ?block=\${block}
                            ?disable-mobile-native-input=\${disableMobileNativeInput}
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
})`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story(datepickerArgs, ({
  id,
  type,
  format,
  minDate,
  maxDate,
  minTime,
  maxTime,
  amPm,
  success,
  block,
  disabled,
  error,
  readonly,
  required,
  disableMobileNativeInput,
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
                            ?required=\${required}
                            ?readonly=\${readonly}
                            ?disabled=\${disabled}
                            ?block=\${block}
                            ?disable-mobile-native-input=\${disableMobileNativeInput}
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
  block,
  disabled,
  error,
  readonly,
  required,
  disableMobileNativeInput,
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
                            ?required=\${required}
                            ?readonly=\${readonly}
                            ?disabled=\${disabled}
                            ?block=\${block}
                            ?disable-mobile-native-input=\${disableMobileNativeInput}
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
  block,
  disabled,
  error,
  readonly,
  required,
  disableMobileNativeInput,
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
                            ?required=\${required}
                            ?readonly=\${readonly}
                            ?disabled=\${disabled}
                            ?block=\${block}
                            ?disable-mobile-native-input=\${disableMobileNativeInput}
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
})`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`story(datepickerArgs, ({
  id,
  type,
  format,
  minDate,
  maxDate,
  minTime,
  maxTime,
  amPm,
  success,
  block,
  disabled,
  error,
  readonly,
  required,
  disableMobileNativeInput,
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
                            ?required=\${required}
                            ?readonly=\${readonly}
                            ?disabled=\${disabled}
                            ?block=\${block}
                            ?disable-mobile-native-input=\${disableMobileNativeInput}
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
})`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`story(datepickerArgs, ({
  id,
  type,
  format,
  minDate,
  maxDate,
  minTime,
  maxTime,
  amPm,
  success,
  block,
  disabled,
  error,
  readonly,
  required,
  disableMobileNativeInput,
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
                            ?required=\${required}
                            ?readonly=\${readonly}
                            ?disabled=\${disabled}
                            ?block=\${block}
                            ?disable-mobile-native-input=\${disableMobileNativeInput}
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
})`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`story(datepickerArgs, ({
  id,
  type,
  format,
  minDate,
  maxDate,
  minTime,
  maxTime,
  amPm,
  success,
  block,
  disabled,
  error,
  readonly,
  required,
  disableMobileNativeInput,
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
                            ?required=\${required}
                            ?readonly=\${readonly}
                            ?disabled=\${disabled}
                            ?block=\${block}
                            ?disable-mobile-native-input=\${disableMobileNativeInput}
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
})`,...v.parameters?.docs?.source}}};const Se=["DatepickerDefault","DatepickerMinDateAndMaxDate","DatepickerStatic","DatepickerRange","DatepickerTime","DatepickerMinTimeAndMaxTime","DatepickerDateTime"];export{v as DatepickerDateTime,l as DatepickerDefault,s as DatepickerMinDateAndMaxDate,u as DatepickerMinTimeAndMaxTime,c as DatepickerRange,m as DatepickerStatic,p as DatepickerTime,Se as __namedExportsOrder,De as default};
