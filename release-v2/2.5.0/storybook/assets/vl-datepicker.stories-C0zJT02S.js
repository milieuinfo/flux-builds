import{J as a,K as i,O as $,P as X,u as T,j as n,C as K,bd as W,s as Z,x as D,r as Q}from"./iframe-CflcmDUD.js";import{d as ee,f,V as ne}from"./vl-datepicker.component-CgELEzZR.js";import{f as ae,a as te}from"./form-control.stories-arg-BDTLe9sO.js";import{M as ie}from"./form-control.public-methods-doc-CM1idlGD.js";import"./preload-helper-D9Z9MdNV.js";import"./cleave-esm-DfUhcNrv.js";const j=["date","range","time","date-time"],re=["auto","above","below","auto left","above left","below left","auto center","above center","below center","auto right","above right","below right"],{action:x}=__STORYBOOK_MODULE_ACTIONS__,t={...ae,...ee,onVlChange:x("vl-change"),onVlInput:x("vl-input"),onVlValid:x("vl-valid")},oe={...te,block:{name:"block",description:"Duidt aan dat de component de volledige breedte van zijn parent mag innemen.",table:{type:{summary:i.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(t.block)}}},readonly:{name:"readonly",description:"Duidt aan dat het veld enkel `readonly` is.",table:{type:{summary:i.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(t.readonly)}}},type:{name:"type",description:"Type van de datepicker",control:{type:$.SELECT},options:j,table:{type:{summary:X([...j])},category:a.ATTRIBUTES,defaultValue:{summary:t.type}}},value:{name:"value",description:"De waarde van het veld.",table:{type:{summary:i.STRING},category:a.ATTRIBUTES,defaultValue:{summary:t.value}}},placeholder:{name:"placeholder",description:"De placeholder van het veld.",table:{type:{summary:i.STRING},category:a.ATTRIBUTES,defaultValue:{summary:t.placeholder}}},autocomplete:{name:"autocomplete",description:"De autocomplete van het veld. Dit moet een waarde zijn die door de browser ondersteund wordt.<br>Een lijst van waarden kan je vinden op [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#values).",table:{type:{summary:i.STRING},category:a.ATTRIBUTES,defaultValue:{summary:t.autocomplete}}},format:{name:"format",description:"Het formaat van de datum/tijd waarde. Voor een datum is het standaard formaat `d.m.Y` (-> 31.12.2019).<br>Voor tijd, is `H:i` het standaard formaat (-> 23:59).",table:{type:{summary:i.STRING},category:a.ATTRIBUTES,defaultValue:{summary:t.format}}},minDate:{name:"min-date",description:"Minimum datum conform het ingestelde formaat (bv. '01-01-2019') of 'today' voor vandaag.",control:{type:$.DATE},table:{type:{summary:i.STRING},category:a.ATTRIBUTES,defaultValue:{summary:t.minDate}}},maxDate:{name:"max-date",description:"Maximum datum conform het ingestelde format (bv. '31-12-2019') of 'today' voor vandaag.",control:{type:$.DATE},table:{type:{summary:i.STRING},category:a.ATTRIBUTES,defaultValue:{summary:t.maxDate}}},minTime:{name:"min-time",description:"Minimum tijd conform het ingestelde formaat (bv. '09:00').<br/>Enkel van toepassing bij type: `time` of `date-time`.",table:{type:{summary:i.STRING},category:a.ATTRIBUTES,defaultValue:{summary:t.minTime}}},maxTime:{name:"max-time",description:"Maximum tijd conform het ingestelde format (bv. '17:00').<br/>Enkel van toepassing bij type: `time` of `date-time`.",table:{type:{summary:i.STRING},category:a.ATTRIBUTES,defaultValue:{summary:t.maxTime}}},amPm:{name:"am-pm",description:"Activeert de 12-uurs AM/PM timepicker.<br/>Enkel van toepassing bij type: `time` of `date-time`.",table:{type:{summary:i.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(t.amPm)}}},disableMaskValidation:{name:"disable-mask-validation",description:"Schakelt de automatische mask validatie uit.",table:{type:{summary:i.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(t.disableMaskValidation)}}},disableMobileNativeInput:{name:"disable-mobile-native-input",description:"Rendert de native datepicker op mobiele toestellen in plaats van flatpickr calendar. [Meer Info](https://flatpickr.js.org/mobile-support/)",table:{type:{summary:i.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(t.disableMobileNativeInput)}}},pattern:{name:"pattern",description:"Het patroon dat je moet volgen bij het ingeven van een waarde.<br>Dit kan gebruikt worden voor eenvoudige validatie.<br>Gebruik de `regex` property voor complexe validatie.",table:{type:{summary:i.STRING},category:a.ATTRIBUTES,defaultValue:{summary:t.pattern}}},regex:{name:"regex",description:"Het patroon dat je moet volgen bij het ingeven van een waarde.<br>Dit kan gebruikt worden voor complexe validatie.",control:!1,table:{type:{summary:i.REGEX},category:a.PROPERTIES,defaultValue:{summary:String(t.regex)}}},onVlInput:{name:"vl-input",description:"Event dat alleen afgevuurd wordt als de gebruiker de waarde van het datepicker-input veld verandert.<br>Het detail object van het event bevat de ingegeven waarde.",table:{type:{summary:"{ value: string }"},category:a.EVENTS}},onVlChange:{name:"vl-change",description:"Event dat afgevuurd wordt als de waarde van het datepicker-input veld verandert (zowel programmatorisch als door een gebruiker).<br>Het detail object van het event bevat de ingegeven waarde.",table:{type:{summary:"{ value: string }"},category:a.EVENTS}},onVlValid:{name:"vl-valid",description:"Event dat afgevuurd wordt als de waarde van het datepicker-input veld valid is.<br>Het detail object van het event bevat de ingegeven waarde.",table:{type:{summary:"{ value: string }"},category:a.EVENTS}},position:{name:"position",description:"Configuratie optie overgenomen van Flatpickr. (https://flatpickr.js.org/options/)",table:{type:{summary:i.STRING},category:a.ATTRIBUTES,defaultValue:{summary:t.position}},options:re,control:{type:"select"}},isStatic:{name:"static",description:"Configuratie optie overgenomen van Flatpickr. (https://flatpickr.js.org/options/)",table:{type:{summary:i.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(t.isStatic)}},control:!1}};function V(r){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...T(),...r.components},{FluxMetaData:l}=e;return l||de("FluxMetaData"),n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"datepicker",children:"Datepicker"}),`
`,n.jsx(l,{id:"components-form-datepicker"}),`
`,n.jsxs(e.p,{children:["Gebruik de ",n.jsx(e.code,{children:"datepicker"})," component om de gebruiker op een gebruiksvriendelijke manier een datum of tijd te laten selecteren.",n.jsx("br",{}),`
Zie het `,n.jsx(e.a,{href:"/docs/ontwerp-form-demo--documentatie",children:"form demo"})," voorbeeld voor het gebruik binnen een form."]}),`
`,n.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`import { VlDatepickerComponent } from '@domg-wc/components/form';
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<vl-datepicker></vl-datepicker>
`})}),`
`,n.jsx(K,{of:o}),`
`,n.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,n.jsx(W,{of:o}),`
`,n.jsx(e.h2,{id:"publieke-methodes",children:"Publieke methodes"}),`
`,n.jsx(ie,{}),`
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
`,n.jsxs(e.p,{children:["Meer info over validatie binnen onze form componenten vind je hier: ",n.jsx(e.a,{href:"/docs/ontwerp-form-validation--documentatie",children:"Form - Validatie"})]}),`
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
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-datepicker/",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Datepicker"})})]})}function le(r={}){const{wrapper:e}={...T(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(V,{...r})}):V(r)}function de(r,e){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}const y=(r,e,l="d.m.Y",g="")=>{if(r&&e){const v=new Date(r),b=new Date(r);v.setDate(v.getDate()-e),b.setDate(b.getDate()+e);const k=[f.formatDate(v,l),f.formatDate(b,l)];return g?k.join(g):k}else return""};Q([ne]);const xe={id:"components-form-datepicker",title:"Components - Form/datepicker",tags:["autodocs"],args:t,argTypes:oe,parameters:{docs:{page:le,story:{inline:!1,iframeHeight:400}}},decorators:[r=>D` <div style="height: 400px">${r()}</div> `]},u=Z(t,({id:r,type:e,format:l,minDate:g,maxDate:v,minTime:b,maxTime:k,amPm:S,success:w,block:I,disabled:E,error:M,readonly:R,required:N,disableMobileNativeInput:A,disableMaskValidation:C,value:O,placeholder:P,autocomplete:B,label:q,pattern:U,regex:z,name:_,onVlChange:G,onVlInput:H,onVlReset:L,onVlValid:Y,position:F,isStatic:J})=>D`
            <vl-datepicker
                id=${r}
                name=${_}
                label=${q}
                value=${O}
                placeholder=${P}
                autocomplete=${B}
                ?error=${M}
                ?success=${w}
                ?required=${N}
                ?readonly=${R}
                ?disabled=${E}
                ?block=${I}
                ?disable-mobile-native-input=${A}
                ?disable-mask-validation=${C}
                type=${e}
                format=${l}
                min-date=${g}
                max-date=${v}
                min-time=${b}
                max-time=${k}
                am-pm=${S}
                pattern=${U}
                .regex=${z}
                @vl-change=${G}
                @vl-input=${H}
                @vl-reset=${L}
                @vl-valid=${Y}
                position=${F}
                static=${J}
            >
            </vl-datepicker>
        `),o=u.bind({});o.storyName="vl-datepicker - default";o.args={id:"datepicker-default",name:"datepicker-default"};const h="d.m.Y",[se,me]=y(new Date,2,h),d=u.bind({});d.storyName="vl-datepicker - min-date en max-date";d.args={id:"datepicker-default",name:"datepicker-default",minDate:se,maxDate:me,value:new Date().toISOString(),format:h};const s=u.bind({});s.storyName="vl-datepicker - static";s.args={id:"datepicker-static",name:"datepicker-static",isStatic:!0};const[ce,pe]=y(new Date,10,h),ue=y(new Date,4,"Y-m-d","/"),m=u.bind({});m.storyName="vl-datepicker - range";m.args={id:"datepicker-range",name:"datepicker-range",type:"range",minDate:ce,maxDate:pe,format:h,value:ue};const c=u.bind({});c.storyName="vl-datepicker - time";c.args={id:"datepicker-time",name:"datepicker-time",type:"time",format:"H:i"};const p=u.bind({});p.storyName="vl-datepicker - date-time";p.args={id:"datepicker-datetime",name:"datepicker-datetime",type:"date-time",format:`${h} H:i`};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`story(datepickerArgs, ({
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
  isStatic
}) => {
  return html\`
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
        \`;
})`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`story(datepickerArgs, ({
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
  isStatic
}) => {
  return html\`
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
  isStatic
}) => {
  return html\`
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
  isStatic
}) => {
  return html\`
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
  isStatic
}) => {
  return html\`
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
  isStatic
}) => {
  return html\`
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
        \`;
})`,...p.parameters?.docs?.source}}};const ye=["DatepickerDefault","DatepickerMinDateAndMaxDate","DatepickerStatic","DatepickerRange","DatepickerTime","DatepickerDateTime"];export{p as DatepickerDateTime,o as DatepickerDefault,d as DatepickerMinDateAndMaxDate,m as DatepickerRange,s as DatepickerStatic,c as DatepickerTime,ye as __namedExportsOrder,xe as default};
