import{Z as t,_ as i,a1 as k,a2 as Z,u as M,j as e,C as v,bc as Q,s as ee,x as j,r as ne,c as ae,b as te,d as re}from"./iframe-D9dm7PbY.js";import{d as ie,f as S,V as le}from"./vl-datepicker.component-BdyOMgdW.js";import{f as oe,a as de}from"./form-control.stories-arg-DQUeU6HR.js";import{M as se}from"./form-control.public-methods-doc-xy650on_.js";import"./preload-helper-D9Z9MdNV.js";import"./cleave-esm-DfUhcNrv.js";const w=["date","range","time","date-time"],me=["auto","above","below","auto left","above left","below left","auto center","above center","below center","auto right","above right","below right"],{action:y}=__STORYBOOK_MODULE_ACTIONS__,r={...oe,...ie,onVlChange:y("vl-change"),onVlInput:y("vl-input"),onVlValid:y("vl-valid"),helperText:""},ce={...de,block:{name:"block",description:"Duidt aan dat de component de volledige breedte van zijn parent mag innemen.",table:{type:{summary:i.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(r.block)}}},readonly:{name:"readonly",description:"Duidt aan dat het veld enkel `readonly` is.",table:{type:{summary:i.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(r.readonly)}}},type:{name:"type",description:"Type van de datepicker",control:{type:k.SELECT},options:w,table:{type:{summary:Z([...w])},category:t.ATTRIBUTES,defaultValue:{summary:r.type}}},value:{name:"value",description:"De waarde van het veld.",table:{type:{summary:i.STRING},category:t.ATTRIBUTES,defaultValue:{summary:r.value}}},placeholder:{name:"placeholder",description:"De placeholder van het veld.",table:{type:{summary:i.STRING},category:t.ATTRIBUTES,defaultValue:{summary:r.placeholder}}},autocomplete:{name:"autocomplete",description:"De autocomplete van het veld. Dit moet een waarde zijn die door de browser ondersteund wordt.<br>Een lijst van waarden kan je vinden op [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#values).",table:{type:{summary:i.STRING},category:t.ATTRIBUTES,defaultValue:{summary:r.autocomplete}}},format:{name:"format",description:"Het formaat van de datum/tijd waarde. Voor een datum is het standaard formaat `d.m.Y` (-> 31.12.2019).<br>Voor tijd, is `H:i` het standaard formaat (-> 23:59).",table:{type:{summary:i.STRING},category:t.ATTRIBUTES,defaultValue:{summary:r.format}}},minDate:{name:"min-date",description:"Minimum datum conform het ingestelde formaat (bv. '01.01.2019') of 'today' voor vandaag.",control:{type:k.DATE},table:{type:{summary:i.STRING},category:t.ATTRIBUTES,defaultValue:{summary:r.minDate}}},maxDate:{name:"max-date",description:"Maximum datum conform het ingestelde formaat (bv. '31.12.2019') of 'today' voor vandaag.",control:{type:k.DATE},table:{type:{summary:i.STRING},category:t.ATTRIBUTES,defaultValue:{summary:r.maxDate}}},minTime:{name:"min-time",description:"Minimum tijd conform het ingestelde formaat (bv. '09:00').<br/>Enkel van toepassing bij type: `time` of `date-time`.",table:{type:{summary:i.STRING},category:t.ATTRIBUTES,defaultValue:{summary:r.minTime}}},maxTime:{name:"max-time",description:"Maximum tijd conform het ingestelde format (bv. '17:00').<br/>Enkel van toepassing bij type: `time` of `date-time`.",table:{type:{summary:i.STRING},category:t.ATTRIBUTES,defaultValue:{summary:r.maxTime}}},amPm:{name:"am-pm",description:"Activeert de 12-uurs AM/PM timepicker.<br/>Enkel van toepassing bij type: `time` of `date-time`.",table:{type:{summary:i.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(r.amPm)}}},disableMaskValidation:{name:"disable-mask-validation",description:"Schakelt de automatische mask validatie uit.",table:{type:{summary:i.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(r.disableMaskValidation)}}},pattern:{name:"pattern",description:"Het patroon dat je moet volgen bij het ingeven van een waarde.<br>Dit kan gebruikt worden voor eenvoudige validatie.<br>Gebruik de `regex` property voor complexe validatie.",table:{type:{summary:i.STRING},category:t.ATTRIBUTES,defaultValue:{summary:r.pattern}}},regex:{name:"regex",description:"Het patroon dat je moet volgen bij het ingeven van een waarde.<br>Dit kan gebruikt worden voor complexe validatie.",control:!1,table:{type:{summary:i.REGEX},category:t.PROPERTIES,defaultValue:{summary:String(r.regex)}}},onVlInput:{name:"vl-input",description:"Event dat alleen afgevuurd wordt als de gebruiker de waarde van het datepicker-input veld verandert.<br>Het detail object van het event bevat de ingegeven waarde.",table:{type:{summary:"{ value: string }"},category:t.EVENTS}},onVlChange:{name:"vl-change",description:"Event dat afgevuurd wordt als de waarde van het datepicker-input veld verandert (zowel programmatorisch als door een gebruiker).<br>Het detail object van het event bevat de ingegeven waarde.",table:{type:{summary:"{ value: string }"},category:t.EVENTS}},onVlValid:{name:"vl-valid",description:"Event dat afgevuurd wordt als de waarde van het datepicker-input veld valid is.<br>Het detail object van het event bevat de ingegeven waarde.",table:{type:{summary:"{ value: string }"},category:t.EVENTS}},position:{name:"position",description:"Configuratie optie overgenomen van Flatpickr. (https://flatpickr.js.org/options/)",table:{type:{summary:i.STRING},category:t.ATTRIBUTES,defaultValue:{summary:r.position}},options:me,control:{type:"select"}},isStatic:{name:"static",description:"Configuratie optie overgenomen van Flatpickr. (https://flatpickr.js.org/options/)",table:{type:{summary:i.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(r.isStatic)}},control:!1}};function E(a){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...M(),...a.components},{FluxComponentMetaData:o}=n;return o||ue("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"datepicker",children:"Datepicker"}),`
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
`,e.jsx(Q,{of:l}),`
`,e.jsx(n.h2,{id:"publieke-methodes",children:"Publieke methodes"}),`
`,e.jsx(se,{}),`
`,e.jsx(n.h2,{id:"positionering",children:"Positionering"}),`
`,e.jsx(n.p,{children:`De datepicker kalender positioneert zichzelf automatisch. Indien de automatische positionering niet het gewenste
resultaat oplevert, kan dit op twee manieren aangepast worden:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Het ",e.jsx(n.code,{children:"position"}),` attribuut: mogelijke waarden zijn: "auto" (default), "above", "below", "auto left", "auto center",
"auto right", "above left", "above center", "above right", "below left", "below center", "below right".`]}),`
`,e.jsxs(n.li,{children:["Het ",e.jsx(n.code,{children:"static"}),` attribuut: indien aanwezig wordt andere positionering genegeerd en wordt de kalender
op een vaste plaats onder het datum invulveld getoond.`]}),`
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
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-datepicker/",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Datepicker"})})]})}function pe(a={}){const{wrapper:n}={...M(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(E,{...a})}):E(a)}function ue(a,n){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}const T=(a,n,o="d.m.Y",b="")=>{if(a&&n){const h=new Date(a),f=new Date(a);h.setDate(h.getDate()-n),f.setDate(f.getDate()+n);const $=[S.formatDate(h,o),S.formatDate(f,o)];return b?$.join(b):$}else return""};ne([le,ae,te,re]);const Ve={id:"components-form-datepicker",title:"Components - Form/datepicker",tags:["autodocs"],args:r,argTypes:ce,parameters:{docs:{page:pe,story:{inline:!1,iframeHeight:440}}},decorators:[a=>j` <div style="height: 400px">${a()}</div> `]},u=ee(r,({id:a,type:n,format:o,minDate:b,maxDate:h,minTime:f,maxTime:$,amPm:I,success:R,block:A,disabled:C,error:O,readonly:Y,required:N,disableMaskValidation:q,value:P,placeholder:U,autocomplete:W,label:V,pattern:B,regex:z,name:_,onVlChange:G,onVlInput:H,onVlReset:F,onVlValid:L,position:K,isStatic:J,helperText:D})=>j`
            <form @submit=${X=>X.preventDefault()} class="vl-grid">
                <div class="vl-column vl-column--12">
                    <vl-form-label for="${a}">${V}</vl-form-label>
                    <div>
                        <vl-datepicker
                            id=${a}
                            name=${_}
                            label=${V}
                            value=${P}
                            placeholder=${U}
                            autocomplete=${W}
                            ?error=${O}
                            ?success=${R}
                            ?required=${N}
                            ?readonly=${Y}
                            ?disabled=${C}
                            ?block=${A}
                            ?disable-mask-validation=${q}
                            type=${n}
                            format=${o}
                            min-date=${b}
                            max-date=${h}
                            min-time=${f}
                            max-time=${$}
                            am-pm=${I}
                            pattern=${B}
                            .regex=${z}
                            @vl-change=${G}
                            @vl-input=${H}
                            @vl-reset=${F}
                            @vl-valid=${L}
                            position=${K}
                            static=${J}
                        >
                        </vl-datepicker>
                    </div>
                    ${!!D&&j`<vl-text annotation>${D}</vl-text>`}
                    <vl-form-message for="${a}" state="patternMismatch"
                        >Waarde voldoet niet aan het opgegeven patroon.</vl-form-message
                    >
                    <vl-form-message for="${a}" state="rangeOverflow"
                        >Waarde overschrijdt het toegestane maximum.</vl-form-message
                    >
                    <vl-form-message for="${a}" state="rangeUnderflow"
                        >Waarde ligt onder het toegestane minimum.</vl-form-message
                    >
                </div>
                <div class="vl-column vl-column--12">
                    <vl-button type="submit">Submit</vl-button>
                </div>
            </form>
        `),l=u.bind({});l.storyName="vl-datepicker - default";l.args={id:"datepicker-default",name:"datepicker-default",placeholder:"dd.mm.YYYY",label:"Datum",helperText:"Typ of selecteer een datum"};const x="d.m.Y",[ve,ge]=T(new Date,2,x),d=u.bind({});d.storyName="vl-datepicker - min-date en max-date";d.args={id:"datepicker-min-max-date",name:"datepicker-min-max-date",minDate:ve,maxDate:ge,value:new Date().toISOString(),format:x,placeholder:"dd.mm.YYYY",label:"Datum",helperText:"Typ of selecteer een datum tussen de minimum en maximum data"};const s=u.bind({});s.storyName="vl-datepicker - static";s.args={id:"datepicker-static",name:"datepicker-static",isStatic:!0,placeholder:"dd.mm.YYYY",label:"Datum",helperText:"Typ of selecteer een datum"};const[he,fe]=T(new Date,10,x),xe=T(new Date,4,"Y-m-d","/"),m=u.bind({});m.storyName="vl-datepicker - range";m.args={id:"datepicker-range",name:"datepicker-range",type:"range",minDate:he,maxDate:fe,format:x,value:xe,label:"Start- en einddatum",placeholder:"dd.mm.YYYY tot en met dd.mm.YYYY",helperText:"Kies een start- en einddatum"};const c=u.bind({});c.storyName="vl-datepicker - time";c.args={id:"datepicker-time",name:"datepicker-time",type:"time",format:"H:i",label:"Tijd",placeholder:"hh:mm",helperText:"Kies een tijd"};const g=u.bind({});g.storyName="vl-datepicker - min-time en max-time";g.args={id:"datepicker-min-max-time",name:"datepicker-min-max-time",minTime:"10:00",maxTime:"11:00",type:"time",format:"H:i",label:"Tijd",placeholder:"hh:mm",helperText:"Kies een tijd tussen een minimum en maximum"};const p=u.bind({});p.storyName="vl-datepicker - date-time";p.args={id:"datepicker-datetime",name:"datepicker-datetime",type:"date-time",format:`${x} H:i`,label:"Datum en tijd",placeholder:"dd.mm.YYYY hh:mm",helperText:"Kies een datum en tijd"};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`story(datepickerArgs, ({
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
})`,...p.parameters?.docs?.source}}};const De=["DatepickerDefault","DatepickerMinDateAndMaxDate","DatepickerStatic","DatepickerRange","DatepickerTime","DatepickerMinTimeAndMaxTime","DatepickerDateTime"];export{p as DatepickerDateTime,l as DatepickerDefault,d as DatepickerMinDateAndMaxDate,g as DatepickerMinTimeAndMaxTime,m as DatepickerRange,s as DatepickerStatic,c as DatepickerTime,De as __namedExportsOrder,Ve as default};
