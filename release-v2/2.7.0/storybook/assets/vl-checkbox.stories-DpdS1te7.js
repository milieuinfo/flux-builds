import{K as o,L as r,u as w,j as e,C as b,bd as R,s as S,x as T,T as M,r as q}from"./iframe-BRJWU34U.js";import{f as C,a as z}from"./form-control.stories-arg-CUD096Q9.js";import{c as N,V as L}from"./vl-checkbox.component-hEBJWAHV.js";import{o as E}from"./unsafe-html-HT10cyGK.js";import{M as B}from"./form-control.public-methods-doc-BO7BByku.js";import"./preload-helper-D9Z9MdNV.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,t={...C,...N,contentSlot:"",onVlChange:j("vl-change"),onVlInput:j("vl-input"),onVlValid:j("vl-valid")},O={...z,block:{name:"block",description:"Duidt aan dat de component de volledige breedte van zijn parent mag innemen.",table:{type:{summary:r.BOOLEAN},category:o.ATTRIBUTES,defaultValue:{summary:String(t.block)}}},id:{name:"id",description:"De id van het veld.<br>Bij de switch variant moet je een id instellen.",type:{name:r.STRING,required:!1},table:{type:{summary:r.STRING},category:o.ATTRIBUTES,defaultValue:{summary:C.id}}},value:{name:"value",description:"De value van de checkbox.",table:{type:{summary:r.STRING},category:o.ATTRIBUTES,defaultValue:{summary:String(t.value)}}},checked:{name:"checked",description:"Vinkt de checkbox aan of uit.",table:{type:{summary:r.BOOLEAN},category:o.ATTRIBUTES,defaultValue:{summary:String(t.checked)}}},isSwitch:{name:"switch",description:"Beeldt de checkbox af als een switch.",table:{type:{summary:r.BOOLEAN},category:o.ATTRIBUTES,defaultValue:{summary:String(t.isSwitch)}}},contentSlot:{name:"content",description:"De content van de checkbox.",table:{category:o.SLOTS,type:{summary:r.HTML},defaultValue:{summary:t.contentSlot}}},onVlChange:{name:"vl-change",description:"Event dat afgevuurd wordt als de checkbox aangevinkt of uitgevinkt wordt (zowel programmatorisch als door een gebruiker).<br>Het detail object van het event bevat de checked state en de waarde van de checkbox indien deze aangevinkt is.",table:{type:{summary:"{ value: string }"},category:o.EVENTS}},onVlInput:{name:"vl-input",description:"Event dat alleen afgevuurd wordt als de gebruiker de checkbox aanvinkt of uitvinkt.<br>Het detail object van het event bevat de checked state en de waarde van de checkbox indien deze aangevinkt is.",table:{type:{summary:"{ checked: boolean, value?: string }"},category:o.EVENTS}},onVlValid:{name:"vl-valid",description:"Event dat afgevuurd wordt als de checkbox valid is.<br>Het detail object van het event bevat de checked state en de waarde van de checkbox indien deze aangevinkt is.",table:{type:{summary:"{ checked: boolean, value?: string }"},category:o.EVENTS}}};function y(a){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...w(),...a.components},{FluxMetaData:s}=n;return s||H("FluxMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"checkbox",children:"Checkbox"}),`
`,e.jsx(s,{id:"components-form-checkbox"}),`
`,e.jsxs(n.p,{children:["Gebruik de ",e.jsx(n.code,{children:"checkbox"})," component om de gebruiker de mogelijkheid te geven om 1 of meerdere dingen te selecteren in een lijst.",e.jsx("br",{}),`
Zie het `,e.jsx(n.a,{href:"/docs/ontwerp-form-demo--documentatie",children:"form demo"})," voorbeeld voor het gebruik binnen een form."]}),`
`,e.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { VlCheckboxComponent } from '@domg-wc/components/form';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-checkbox></vl-checkbox>
`})}),`
`,e.jsx(b,{of:c}),`
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(R,{of:c}),`
`,e.jsx(n.h2,{id:"publieke-methodes",children:"Publieke methodes"}),`
`,e.jsx(B,{}),`
`,e.jsx(n.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(n.h3,{id:"met-value",children:"Met value"}),`
`,e.jsxs(n.p,{children:["Indien er geen value meegegeven wordt aan de checkbox, wordt er tijdens het submitten van een form de value ",e.jsx(n.code,{children:"on"})," teruggegeven.",e.jsx("br",{}),`
Dit is zoals de HTML5 standaard het voorschrijft. Indien er wel een value meegegeven wordt, zal deze value teruggegeven worden.`]}),`
`,e.jsx(b,{of:l}),`
`,e.jsx(n.h3,{id:"switch",children:"Switch"}),`
`,e.jsx(n.h4,{id:"gebruik",children:"Gebruik"}),`
`,e.jsxs(n.p,{children:["Semantisch gezien moet een switch gebruikt worden om onmiddellijk een actie te ondernemen, zoals het aan- en uitzetten van een instelling.",e.jsx("br",{}),`
`,e.jsx(n.em,{children:"NIET"}),`: een switch gebruiken om een selectie te valideren, bv. "gelezen & goedgekeurd"
`,e.jsx(n.em,{children:"WEL"}),": dark mode aan- en uitzetten, adresgegevens tonen of verbergen"]}),`
`,e.jsx(b,{of:i}),`
`,e.jsx(n.h2,{id:"validatie",children:"Validatie"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Meer info over validatie binnen onze form componenten vind je hier: ",e.jsx(n.a,{href:"/docs/ontwerp-form-validation--documentatie",children:"Form - Validatie"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"formdata",children:"FormData"}),`
`,e.jsx(n.p,{children:"De value van een checkbox werkt op een andere manier dan de value van een input."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Als een checkbox gecheckt is, dan pas komt de value van de checkbox mee in de data."}),`
`,e.jsx(n.li,{children:"Als een checkbox niet gecheckt is, dan is er geen value voor de checkbox in de FormData, ook al is de value van de checkbox ingesteld."}),`
`,e.jsxs(n.li,{children:["Als er geen value is ingesteld, dan krijgt de checkbox de value ",e.jsx(n.code,{children:"on"})," mee in de FormData als de checkbox gecheckt is."]}),`
`]}),`
`,e.jsx(n.p,{children:"De werking volgt het native gedrag (en gebruikt ook een native checkbox input)."}),`
`,e.jsxs(n.p,{children:["Meer info hier: ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#value",rel:"nofollow",children:"Checkbox - Value op MDN"})]}),`
`,e.jsx(n.h3,{id:"read-only",children:"Read only"}),`
`,e.jsxs(n.p,{children:["Readonly zorgt ervoor dat de value van een input niet aangepast kan worden, hierdoor heeft readonly plaatsen op een checkbox geen effect aangezien het aan- en uitvinken de checked state aanpast en niet de value.",e.jsx("br",{}),`
Als je een checkbox als readonly wilt gebruiken, moet je het `,e.jsx(n.code,{children:"disabled"})," attribuut meegeven en gebruik maken van een hidden input zodat de value toch mee met het form gesubmit wordt.",e.jsx("br",{}),`
Zie dat de value van de hidden input overeenkomt met de checked state en de value van de disabled checkbox.`]}),`
`,e.jsx(b,{of:d}),`
`,e.jsx(n.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(n.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/forms/vl-ui-checkbox/",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Checkbox"})})]})}function _(a={}){const{wrapper:n}={...w(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(y,{...a})}):y(a)}function H(a,n){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}q([L]);const P={id:"components-form-checkbox",title:"Components - Form/checkbox",tags:["autodocs"],args:t,argTypes:O,parameters:{docs:{page:_}}},V=S(t,({id:a,name:n,label:s,required:m,disabled:v,error:k,success:x,block:p,value:h,checked:u,isSwitch:g,contentSlot:$,onVlChange:f,onVlInput:D,onVlReset:I,onVlValid:A})=>T`
        <vl-checkbox
            id=${a}
            name=${n}
            label=${s}
            ?required=${m}
            ?disabled=${v}
            ?error=${k}
            ?success=${x}
            ?block=${p}
            value=${h}
            ?checked=${u}
            ?switch=${g}
            @vl-input=${D}
            @vl-change=${f}
            @vl-reset=${I}
            @vl-valid=${A}
        >
            ${E($)}
        </vl-checkbox>
    `),c=V.bind({});c.storyName="vl-checkbox - default";c.args={id:"checkbox-default",name:"checkbox",contentSlot:"<span>Bevestig</span>"};const l=V.bind({});l.storyName="vl-checkbox - value";l.args={id:"checkbox-value",name:"checkbox",value:"bevestigd",contentSlot:"<span>Bevestig</span>"};const i=V.bind({});i.storyName="vl-checkbox - switch";i.args={id:"checkbox-switch",name:"checkbox",isSwitch:!0,contentSlot:"<span>Instellingen toepassen</span>"};const d=S(t,({id:a,name:n,label:s,required:m,disabled:v,error:k,success:x,block:p,value:h,checked:u,isSwitch:g,contentSlot:$,onVlInput:f})=>T`
        <vl-checkbox
            id=${a}
            name=${n}
            label=${s}
            ?required=${m}
            ?disabled=${v}
            ?error=${k}
            ?success=${x}
            ?block=${p}
            value=${h}
            ?checked=${u}
            ?switch=${g}
            @vl-input=${f}
        >
            ${E($)}
        </vl-checkbox>
        <input type="hidden" name=${n} value=${u?h||"on":M} />
    `);d.storyName="vl-checkbox - readonly";d.args={id:"checkbox-readonly",name:"checkbox",disabled:!0,checked:!0,value:"bevestigd",contentSlot:"<span>Bevestig</span>"};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`story(checkboxArgs, ({
  id,
  name,
  label,
  required,
  disabled,
  error,
  success,
  block,
  value,
  checked,
  isSwitch,
  contentSlot,
  onVlChange,
  onVlInput,
  onVlReset,
  onVlValid
}) => html\`
        <vl-checkbox
            id=\${id}
            name=\${name}
            label=\${label}
            ?required=\${required}
            ?disabled=\${disabled}
            ?error=\${error}
            ?success=\${success}
            ?block=\${block}
            value=\${value}
            ?checked=\${checked}
            ?switch=\${isSwitch}
            @vl-input=\${onVlInput}
            @vl-change=\${onVlChange}
            @vl-reset=\${onVlReset}
            @vl-valid=\${onVlValid}
        >
            \${unsafeHTML(contentSlot)}
        </vl-checkbox>
    \`)`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`story(checkboxArgs, ({
  id,
  name,
  label,
  required,
  disabled,
  error,
  success,
  block,
  value,
  checked,
  isSwitch,
  contentSlot,
  onVlChange,
  onVlInput,
  onVlReset,
  onVlValid
}) => html\`
        <vl-checkbox
            id=\${id}
            name=\${name}
            label=\${label}
            ?required=\${required}
            ?disabled=\${disabled}
            ?error=\${error}
            ?success=\${success}
            ?block=\${block}
            value=\${value}
            ?checked=\${checked}
            ?switch=\${isSwitch}
            @vl-input=\${onVlInput}
            @vl-change=\${onVlChange}
            @vl-reset=\${onVlReset}
            @vl-valid=\${onVlValid}
        >
            \${unsafeHTML(contentSlot)}
        </vl-checkbox>
    \`)`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`story(checkboxArgs, ({
  id,
  name,
  label,
  required,
  disabled,
  error,
  success,
  block,
  value,
  checked,
  isSwitch,
  contentSlot,
  onVlChange,
  onVlInput,
  onVlReset,
  onVlValid
}) => html\`
        <vl-checkbox
            id=\${id}
            name=\${name}
            label=\${label}
            ?required=\${required}
            ?disabled=\${disabled}
            ?error=\${error}
            ?success=\${success}
            ?block=\${block}
            value=\${value}
            ?checked=\${checked}
            ?switch=\${isSwitch}
            @vl-input=\${onVlInput}
            @vl-change=\${onVlChange}
            @vl-reset=\${onVlReset}
            @vl-valid=\${onVlValid}
        >
            \${unsafeHTML(contentSlot)}
        </vl-checkbox>
    \`)`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`story(checkboxArgs, ({
  id,
  name,
  label,
  required,
  disabled,
  error,
  success,
  block,
  value,
  checked,
  isSwitch,
  contentSlot,
  onVlInput
}) => html\`
        <vl-checkbox
            id=\${id}
            name=\${name}
            label=\${label}
            ?required=\${required}
            ?disabled=\${disabled}
            ?error=\${error}
            ?success=\${success}
            ?block=\${block}
            value=\${value}
            ?checked=\${checked}
            ?switch=\${isSwitch}
            @vl-input=\${onVlInput}
        >
            \${unsafeHTML(contentSlot)}
        </vl-checkbox>
        <input type="hidden" name=\${name} value=\${checked ? value || 'on' : nothing} />
    \`)`,...d.parameters?.docs?.source}}};const Y=["CheckboxDefault","CheckboxValue","CheckboxSwitch","CheckboxReadonly"];export{c as CheckboxDefault,d as CheckboxReadonly,i as CheckboxSwitch,l as CheckboxValue,Y as __namedExportsOrder,P as default};
