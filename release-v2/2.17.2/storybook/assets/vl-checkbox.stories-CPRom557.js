import{Z as t,_ as c,u as S,j as e,C as m,b8 as N,s as w,x as T,T as q,r as z}from"./iframe-BAEsER5t.js";import{o as C}from"./unsafe-html-BCucnB9c.js";import{c as B,V as O}from"./vl-checkbox.component-37MCbxxg.js";import{f as E,a as L}from"./form-control.stories-arg-Df5Bmxno.js";import{M as _}from"./form-control.public-methods-doc-CPsS0EYW.js";import"./preload-helper-D9Z9MdNV.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,o={...E,...B,contentSlot:"",onVlChange:j("vl-change"),onVlInput:j("vl-input"),onVlValid:j("vl-valid")},H={...L,block:{name:"block",description:"Duidt aan dat de component de volledige breedte van zijn parent mag innemen.",table:{type:{summary:c.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(o.block)}}},id:{name:"id",description:"De id van het veld.<br>Bij de switch variant moet je een id instellen.",type:{name:c.STRING,required:!1},table:{type:{summary:c.STRING},category:t.ATTRIBUTES,defaultValue:{summary:E.id}}},value:{name:"value",description:"De value van de checkbox.",table:{type:{summary:c.STRING},category:t.ATTRIBUTES,defaultValue:{summary:String(o.value)}}},checked:{name:"checked",description:"Vinkt de checkbox aan of uit.",table:{type:{summary:c.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(o.checked)}}},indeterminate:{name:"indeterminate",description:"Toont de indeterminate state van de checkbox. De switch-variant ondersteunt geen indeterminate state.",table:{type:{summary:c.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(o.indeterminate)}}},isSwitch:{name:"switch",description:"Beeldt de checkbox af als een switch.",table:{type:{summary:c.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(o.isSwitch)}}},contentSlot:{name:"content",description:"De content van de checkbox.",table:{category:t.SLOTS,type:{summary:c.HTML},defaultValue:{summary:o.contentSlot}}},onVlChange:{name:"vl-change",description:"Event dat afgevuurd wordt als de checkbox aangevinkt of uitgevinkt wordt (zowel programmatorisch als door een gebruiker).<br>Het detail object van het event bevat de checked state en de waarde van de checkbox indien deze aangevinkt is.",table:{type:{summary:"{ value: string }"},category:t.EVENTS}},onVlInput:{name:"vl-input",description:"Event dat alleen afgevuurd wordt als de gebruiker de checkbox aanvinkt of uitvinkt.<br>Het detail object van het event bevat de checked state en de waarde van de checkbox indien deze aangevinkt is.",table:{type:{summary:"{ checked: boolean, value?: string }"},category:t.EVENTS}},onVlValid:{name:"vl-valid",description:"Event dat afgevuurd wordt als de checkbox valid is.<br>Het detail object van het event bevat de checked state en de waarde van de checkbox indien deze aangevinkt is.",table:{type:{summary:"{ checked: boolean, value?: string }"},category:t.EVENTS}}};function y(a){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...S(),...a.components},{FluxComponentMetaData:s}=n;return s||U("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"checkbox",children:"Checkbox"}),`
`,e.jsx(s,{id:"components-form-checkbox"}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(n.p,{children:["Gebruik de ",e.jsx(n.code,{children:"checkbox"}),` component om de gebruiker de mogelijkheid te geven om 1 of meerdere dingen te selecteren in een
lijst.`,e.jsx("br",{}),`
Zie het `,e.jsx(n.a,{href:"/docs/patronen-formulier-demo--documentatie",children:"form demo"})," voorbeeld voor het gebruik binnen een form."]}),`
`,e.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { VlCheckboxComponent } from '@domg-wc/components/form';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-checkbox></vl-checkbox>
`})}),`
`,e.jsx(m,{of:i}),`
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(N,{of:i}),`
`,e.jsx(n.h2,{id:"publieke-methodes",children:"Publieke methodes"}),`
`,e.jsx(_,{}),`
`,e.jsx(n.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(n.h3,{id:"met-value",children:"Met value"}),`
`,e.jsxs(n.p,{children:["Indien er geen value meegegeven wordt aan de checkbox, wordt er tijdens het submitten van een form de value ",e.jsx(n.code,{children:"on"})," teruggegeven.",e.jsx("br",{}),`
Dit is zoals de HTML5 standaard het voorschrijft. Indien er wel een value meegegeven wordt, zal deze value teruggegeven worden.`]}),`
`,e.jsx(m,{of:r}),`
`,e.jsx(n.h3,{id:"switch",children:"Switch"}),`
`,e.jsx(n.h4,{id:"gebruik",children:"Gebruik"}),`
`,e.jsxs(n.p,{children:["Semantisch gezien moet een switch gebruikt worden om onmiddellijk een actie te ondernemen, zoals het aan- en uitzetten van een instelling.",e.jsx("br",{}),`
`,e.jsx(n.em,{children:"NIET"}),`: een switch gebruiken om een selectie te valideren, bv. "gelezen & goedgekeurd"
`,e.jsx(n.em,{children:"WEL"}),": dark mode aan- en uitzetten, adresgegevens tonen of verbergen"]}),`
`,e.jsx(m,{of:l}),`
`,e.jsx(n.h2,{id:"validatie",children:"Validatie"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Meer info over validatie binnen onze form componenten vind je hier: ",e.jsx(n.a,{href:"/docs/patronen-formulier-validatie--documentatie",children:"Form - Validatie"})]}),`
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
`,e.jsx(m,{of:d}),`
`,e.jsx(n.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(n.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/componenten/checkbox",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Checkbox"})})]})}function F(a={}){const{wrapper:n}={...S(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(y,{...a})}):y(a)}function U(a,n){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}z([O]);const K={id:"components-form-checkbox",title:"Components - Form/checkbox",tags:["autodocs"],args:o,argTypes:H,parameters:{docs:{page:F}}},V=w(o,({id:a,name:n,label:s,required:b,disabled:v,error:k,success:x,blurValidation:p,block:h,value:u,checked:g,indeterminate:$,isSwitch:f,contentSlot:D,onVlChange:A,onVlInput:I,onVlReset:R,onVlValid:M})=>T`
        <vl-checkbox
            id=${a}
            name=${n}
            label=${s}
            ?required=${b}
            ?disabled=${v}
            ?error=${k}
            ?success=${x}
            ?blur-validation=${p}
            ?block=${h}
            value=${u}
            ?checked=${g}
            ?indeterminate=${$}
            ?switch=${f}
            @vl-input=${I}
            @vl-change=${A}
            @vl-reset=${R}
            @vl-valid=${M}
        >
            ${C(D)}
        </vl-checkbox>
    `),i=V.bind({});i.storyName="vl-checkbox - default";i.args={id:"checkbox-default",name:"checkbox",contentSlot:"<span>Bevestig</span>"};const r=V.bind({});r.storyName="vl-checkbox - value";r.args={id:"checkbox-value",name:"checkbox",value:"bevestigd",contentSlot:"<span>Bevestig</span>"};const l=V.bind({});l.storyName="vl-checkbox - switch";l.args={id:"checkbox-switch",name:"checkbox",isSwitch:!0,contentSlot:"<span>Instellingen toepassen</span>"};const d=w(o,({id:a,name:n,label:s,required:b,disabled:v,error:k,success:x,block:p,value:h,checked:u,isSwitch:g,contentSlot:$,onVlInput:f})=>T`
        <vl-checkbox
            id=${a}
            name=${n}
            label=${s}
            ?required=${b}
            ?disabled=${v}
            ?error=${k}
            ?success=${x}
            ?block=${p}
            value=${h}
            ?checked=${u}
            ?switch=${g}
            @vl-input=${f}
        >
            ${C($)}
        </vl-checkbox>
        <input type="hidden" name=${n} value=${u?h||"on":q} />
    `);d.storyName="vl-checkbox - readonly";d.args={id:"checkbox-readonly",name:"checkbox",disabled:!0,checked:!0,value:"bevestigd",contentSlot:"<span>Bevestig</span>"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`story(checkboxArgs, ({
  id,
  name,
  label,
  required,
  disabled,
  error,
  success,
  blurValidation,
  block,
  value,
  checked,
  indeterminate,
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
            ?blur-validation=\${blurValidation}
            ?block=\${block}
            value=\${value}
            ?checked=\${checked}
            ?indeterminate=\${indeterminate}
            ?switch=\${isSwitch}
            @vl-input=\${onVlInput}
            @vl-change=\${onVlChange}
            @vl-reset=\${onVlReset}
            @vl-valid=\${onVlValid}
        >
            \${unsafeHTML(contentSlot)}
        </vl-checkbox>
    \`)`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(checkboxArgs, ({
  id,
  name,
  label,
  required,
  disabled,
  error,
  success,
  blurValidation,
  block,
  value,
  checked,
  indeterminate,
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
            ?blur-validation=\${blurValidation}
            ?block=\${block}
            value=\${value}
            ?checked=\${checked}
            ?indeterminate=\${indeterminate}
            ?switch=\${isSwitch}
            @vl-input=\${onVlInput}
            @vl-change=\${onVlChange}
            @vl-reset=\${onVlReset}
            @vl-valid=\${onVlValid}
        >
            \${unsafeHTML(contentSlot)}
        </vl-checkbox>
    \`)`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`story(checkboxArgs, ({
  id,
  name,
  label,
  required,
  disabled,
  error,
  success,
  blurValidation,
  block,
  value,
  checked,
  indeterminate,
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
            ?blur-validation=\${blurValidation}
            ?block=\${block}
            value=\${value}
            ?checked=\${checked}
            ?indeterminate=\${indeterminate}
            ?switch=\${isSwitch}
            @vl-input=\${onVlInput}
            @vl-change=\${onVlChange}
            @vl-reset=\${onVlReset}
            @vl-valid=\${onVlValid}
        >
            \${unsafeHTML(contentSlot)}
        </vl-checkbox>
    \`)`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`story(checkboxArgs, ({
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
    \`)`,...d.parameters?.docs?.source}}};const J=["CheckboxDefault","CheckboxValue","CheckboxSwitch","CheckboxReadonly"];export{i as CheckboxDefault,d as CheckboxReadonly,l as CheckboxSwitch,r as CheckboxValue,J as __namedExportsOrder,K as default};
