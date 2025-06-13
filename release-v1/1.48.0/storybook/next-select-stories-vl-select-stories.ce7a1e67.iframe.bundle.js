"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[9369],{"../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(e,t,l)=>{l.d(t,{f:()=>b});var n=l("../../node_modules/react/index.js"),o=l("../../node_modules/react-dom/client.js"),r=new Map,a=({callback:e,children:t})=>{let l=(0,n.useRef)();return(0,n.useLayoutEffect)(()=>{l.current!==e&&(l.current=e,e())},[e]),t},s=async(e,t)=>{let l=await d(t);return new Promise(t=>{l.render(n.createElement(a,{callback:()=>t(null)},e))})},i=(e,t)=>{let l=r.get(e);l&&(l.unmount(),r.delete(e))},d=async e=>{let t=r.get(e);return t||(t=o.createRoot(e),r.set(e,t)),t},c=l("../../node_modules/@storybook/blocks/dist/index.mjs"),u={code:c.XA,a:c.zE,...c.Sw},p=class extends n.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:n.createElement(n.Fragment,null,t)}},b=class{constructor(){this.render=async(e,t,o)=>{let r={...u,...t?.components},a=c.kQ;return new Promise((i,d)=>{l.e(814).then(l.bind(l,"../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:l})=>s(n.createElement(p,{showException:d,key:Math.random()},n.createElement(l,{components:r},n.createElement(a,{context:e,docsParameter:t}))),o)).then(()=>i())})},this.unmount=e=>{i(e)}}}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(e,t,l)=>{l.d(t,{Hl:()=>n.Hl,W8:()=>n.W8,kL:()=>n.kL,ov:()=>n.ov}),l("../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var n=l("../../node_modules/@storybook/blocks/dist/index.mjs")},"../../libs/form/src/next/select/stories/vl-select.stories.ts":(e,t,l)=>{l.r(t),l.d(t,{SelectDefault:()=>j,SelectDisabledOption:()=>$,SelectGroups:()=>f,SelectNotDeletable:()=>k,SelectReadOnly:()=>w,SelectSelectedOption:()=>y,__namedExportsOrder:()=>V,default:()=>g});var n=l("../../libs/common/storybook/src/index.ts"),o=l("../../libs/form/src/next/form-control/stories/form-control.stories-arg.ts"),r=l("../../libs/form/src/next/select/vl-select.defaults.ts"),a=l("../../node_modules/@storybook/addon-actions/dist/index.mjs");let s={...o.Z,...r.p,onVlChange:(0,a.XI)("vl-change"),onVlInput:(0,a.XI)("vl-input"),onVlValid:(0,a.XI)("vl-valid")},i={...o.x,block:{name:"block",description:"Duidt aan dat de component de volledige breedte van zijn parent mag innemen.",table:{type:{summary:n.QE.BOOLEAN},category:n.R6.ATTRIBUTES,defaultValue:{summary:s.block}}},placeholder:{name:"placeholder",description:"De placeholder tekst van het veld.",table:{type:{summary:n.QE.STRING},category:n.R6.ATTRIBUTES,defaultValue:{summary:s.placeholder}}},autocomplete:{name:"autocomplete",description:"De autocomplete van het veld. Dit moet een waarde zijn die door de browser ondersteund wordt.<br>Een lijst van waarden kan je vinden op [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#values).",table:{type:{summary:n.QE.STRING},category:n.R6.ATTRIBUTES,defaultValue:{summary:s.autocomplete}}},notDeletable:{name:"not-deletable",description:"Duidt aan dat de selectie niet verwijderbaar is.",table:{type:{summary:n.QE.BOOLEAN},category:n.R6.ATTRIBUTES,defaultValue:{summary:s.notDeletable}}},options:{name:"options",description:"De opties die geselecteerd kunnen worden.<br>Zie de documentatie pagina voor meer info.",table:{type:{summary:"SelectOption"},category:n.R6.PROPERTIES,defaultValue:{summary:s.options}}},onVlChange:{name:"vl-change",description:"Event dat afgevuurd wordt als er een optie selecteerd of verwijderd wordt (zowel programmatorisch als door een gebruiker).<br>Het detail object van het event bevat de waarde van de geselecteerde optie.",table:{type:{summary:"{ value: string }"},category:n.R6.EVENTS}},onVlInput:{name:"vl-input",description:"Event dat alleen afgevuurd wordt als de gebruiker een optie selecteert of verwijdert.<br>Het detail object van het event bevat de waarde van de geselecteerde optie.",table:{type:{summary:"{ value: string }"},category:n.R6.EVENTS}},onVlValid:{name:"vl-valid",description:"Event dat afgevuurd wordt als de select valid is.<br>Het detail object van het event bevat de waarde van de geselecteerde optie.",table:{type:{summary:"{ value: string }"},category:n.R6.EVENTS}}};var d=l("../../node_modules/lit/index.js");l("../../node_modules/react/index.js");var c=l("../../node_modules/react/jsx-runtime.js"),u=l("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),p=l("../../node_modules/@storybook/addon-docs/dist/index.mjs"),b=l("../../libs/form/src/next/form-control/stories/form-control.public-methods-doc.mdx");function m(e){let t=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",h3:"h3"},(0,u.RP)(),e.components),{VluxMetaData:l}=t;return l||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VluxMetaData",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h1,{id:"select---next",children:"Select - next"}),"\n",(0,c.jsx)(l,{id:"form-next-select"}),"\n",(0,c.jsxs)(t.p,{children:["Gebruik de ",(0,c.jsx)(t.code,{children:"select-next"})," component om een select veld toe te voegen aan een pagina.",(0,c.jsx)("br",{}),"\nZie het ",(0,c.jsx)(t.a,{href:"/docs/ontwerp-form-demo--documentatie",children:"form demo"})," voorbeeld voor het gebruik binnen een form."]}),"\n",(0,c.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-js",children:"import { VlSelectComponent } from '@domg-wc/form/next/select';\n"})}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-html",children:"<vl-select-next></vl-select-next>\n"})}),"\n",(0,c.jsx)(p.Hl,{of:j}),"\n",(0,c.jsxs)("details",{children:[(0,c.jsx)("summary",{children:"options"}),(0,c.jsx)(p.kL,{code:`
    [
        { label: 'Hasselt', value: 'hasselt' },
        { label: 'Turnhout', value: 'turnhout' },
        { label: 'Knokke-Heist', value: 'knokke-heist' },
        { label: 'Waregem', value: 'waregem' },
        { label: 'Lier', value: 'lier' },
        { label: 'Rio Piedras', value: 'rio piedras' }
]`,language:"ts",dark:!0})]}),"\n",(0,c.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,c.jsx)(p.ov,{of:j}),"\n",(0,c.jsx)(t.h2,{id:"publieke-methodes",children:"Publieke methodes"}),"\n",(0,c.jsx)(b.A,{}),"\n",(0,c.jsx)(t.h2,{id:"styles",children:"Styles"}),"\n",(0,c.jsxs)(t.p,{children:["De styles van DV zijn lokaal gezet en aangepast omdat deze niet CSP compliant waren.",(0,c.jsx)("br",{}),"\nEr werd gebruik gemaakt van een ",(0,c.jsx)(t.code,{children:"data:"})," attribuut om een SVG op te halen van w3.org.\nHierdoor breekt de CSP compliance tenzij je alle ",(0,c.jsx)(t.code,{children:"data:"})," attributen whitelist, wat niet de bedoeling is."]}),"\n",(0,c.jsx)(t.h2,{id:"change-event",children:"Change event"}),"\n",(0,c.jsxs)(t.p,{children:["Bij het selecteren of verwijderen van een optie (zowel programmatorisch als door een gebruiker), wordt het ",(0,c.jsx)(t.code,{children:"vl-change"})," event afgevuurd. Het detail object van dit event bevat de value van de geselecteerde opties.",(0,c.jsx)("br",{})]}),"\n",(0,c.jsx)(t.h2,{id:"input-event",children:"Input event"}),"\n",(0,c.jsxs)(t.p,{children:["Als de gebruiker een optie selecteert of verwijdert, wordt het ",(0,c.jsx)(t.code,{children:"vl-input"})," event afgevuurd. Het detail object van dit event bevat de value van de geselecteerde opties.",(0,c.jsx)("br",{})]}),"\n",(0,c.jsx)(t.h2,{id:"select-opties",children:"Select opties"}),"\n",(0,c.jsxs)(t.p,{children:["De ",(0,c.jsx)(t.code,{children:"options"})," property bevat een array van objecten die de opties van de select component bevatten."]}),"\n",(0,c.jsxs)(t.p,{children:["Als de referentie van deze array verandert, wordt de Lit lifecycle getriggerd en wordt de select opnieuw opgebouwd op basis van de nieuwe opties.",(0,c.jsx)("br",{}),"\nHierdoor is het noodzakelijk om de opties door te geven aan de select component met behulp van een variabele, en de opties niet direct in de template te zetten.",(0,c.jsx)("br",{}),"\nIndien je de opties direct in de template zet, zal bij elke render de select opnieuw opgebouwd worden en de gekozen opties verwijderd worden."]}),"\n",(0,c.jsxs)(t.p,{children:["Dit betekent ook dat als je programmatorisch een optie wil veranderen, toevoegen of verwijderen, je de referentie van de array moet aanpassen.",(0,c.jsx)("br",{}),"\nDit kan je doen door de opties de spreaden in een nieuwe array (",(0,c.jsx)(t.code,{children:"[...options]"}),")."]}),"\n",(0,c.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,c.jsxs)(t.p,{children:["Dit component is volledig accessible, we raden aan waar mogelijk gebruik te maken van dit component in plaats van de ",(0,c.jsx)(t.a,{href:"/docs/form-next-select-rich--documentatie",children:"vl-select-rich"}),".",(0,c.jsx)("br",{}),"\nIndien er minder dan 7 opties zijn raden we aan checkboxes of radio buttons te gebruiken."]}),"\n",(0,c.jsx)(t.h2,{id:"varianten",children:"Varianten"}),"\n",(0,c.jsx)(t.h3,{id:"niet-verwijderbaar",children:"Niet Verwijderbaar"}),"\n",(0,c.jsx)(p.Hl,{of:k}),"\n",(0,c.jsxs)("details",{children:[(0,c.jsx)("summary",{children:"options"}),(0,c.jsx)(p.kL,{code:`
    [
        { label: 'Hasselt', value: 'hasselt' },
        { label: 'Turnhout', value: 'turnhout' },
        { label: 'Knokke-Heist', value: 'knokke-heist' },
        { label: 'Waregem', value: 'waregem' },
        { label: 'Lier', value: 'lier' },
        { label: 'Rio Piedras', value: 'rio piedras' }
]`,language:"ts",dark:!0})]}),"\n",(0,c.jsx)(t.h3,{id:"groepen",children:"Groepen"}),"\n",(0,c.jsx)(p.Hl,{of:f}),"\n",(0,c.jsxs)("details",{children:[(0,c.jsx)("summary",{children:"options"}),(0,c.jsx)(p.kL,{code:`
    [
        { label: 'Hasselt', value: 'hasselt', group: 'Belgi\xeb' },
        { label: 'Turnhout', value: 'turnhout', group: 'Belgi\xeb' },
        { label: 'Knokke-Heist', value: 'knokke-heist', group: 'Belgi\xeb' },
        { label: 'Waregem', value: 'waregem', group: 'Belgi\xeb' },
        { label: 'Lier', value: 'lier', group: 'Belgi\xeb' },
        { label: 'Rio Piedras', value: 'rio piedras', group: 'Puerto Rico' }
]`,language:"ts",dark:!0})]}),"\n",(0,c.jsx)(t.h3,{id:"geselecteerde-optie",children:"Geselecteerde optie"}),"\n",(0,c.jsx)(t.p,{children:"Als je een optie programmatorisch wil selecteren moet je voor deze optie de 'selected' boolean op true zetten."}),"\n",(0,c.jsx)(p.Hl,{of:y}),"\n",(0,c.jsxs)("details",{children:[(0,c.jsx)("summary",{children:"options"}),(0,c.jsx)(p.kL,{code:`
    [
        { label: 'Hasselt', value: 'hasselt', selected: true },
        { label: 'Turnhout', value: 'turnhout' },
        { label: 'Knokke-Heist', value: 'knokke-heist' },
        { label: 'Waregem', value: 'waregem' },
        { label: 'Lier', value: 'lier' },
        { label: 'Rio Piedras', value: 'rio piedras' }
]`,language:"ts",dark:!0})]}),"\n",(0,c.jsx)(t.h3,{id:"disabled-optie",children:"Disabled optie"}),"\n",(0,c.jsx)(t.p,{children:"Als je een optie programmatorisch wil uitzetten moet je voor deze optie de 'disabled' boolean op true zetten."}),"\n",(0,c.jsx)(p.Hl,{of:$}),"\n",(0,c.jsxs)("details",{children:[(0,c.jsx)("summary",{children:"options"}),(0,c.jsx)(p.kL,{code:`
    [
        { label: 'Hasselt', value: 'hasselt', disabled: true },
        { label: 'Turnhout', value: 'turnhout' },
        { label: 'Knokke-Heist', value: 'knokke-heist' },
        { label: 'Waregem', value: 'waregem' },
        { label: 'Lier', value: 'lier' },
        { label: 'Rio Piedras', value: 'rio piedras' }
]`,language:"ts",dark:!0})]}),"\n",(0,c.jsx)(t.h3,{id:"read-only",children:"Read only"}),"\n",(0,c.jsxs)(t.p,{children:["Als je wil dat de select read only is, moet je voor alle opties de 'disabled' boolean op true zetten.",(0,c.jsx)("br",{}),"\nIndien de 'required' boolean op true staat, moet je een value programmatorisch selecteren of je form wordt unsubmittable."]}),"\n",(0,c.jsx)(p.Hl,{of:w}),"\n",(0,c.jsxs)("details",{children:[(0,c.jsx)("summary",{children:"options"}),(0,c.jsx)(p.kL,{code:`
    [
        { label: 'Hasselt', value: 'hasselt', selected: true, disabled: true },
        { label: 'Turnhout', value: 'turnhout', disabled: true },
        { label: 'Knokke-Heist', value: 'knokke-heist', disabled: true },
        { label: 'Waregem', value: 'waregem', disabled: true },
        { label: 'Lier', value: 'lier', disabled: true },
        { label: 'Rio Piedras', value: 'rio piedras', disabled: true }
]`,language:"ts",dark:!0})]}),"\n",(0,c.jsx)(t.h2,{id:"validatie",children:"Validatie"}),"\n",(0,c.jsxs)(t.p,{children:["Meer info over validatie binnen onze form componenten vind je hier: ",(0,c.jsx)(t.a,{href:"/docs/ontwerp-form-validation--documentatie",children:"Form - Validatie"})]}),"\n",(0,c.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,c.jsx)(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/forms/vl-ui-select",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Select"})})]})}var h=l("../../libs/common/utilities/src/index.ts"),v=l("../../libs/form/src/next/select/vl-select.component.ts");(0,h.gy)([v.Y]);let g={id:"form-next-select",title:"Form-next/select",tags:["autodocs"],args:s,argTypes:i,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,u.RP)(),e.components);return t?(0,c.jsx)(t,Object.assign({},e,{children:(0,c.jsx)(m,e)})):m(e)}}}},x=(0,n._7)(s,({id:e,name:t,label:l,required:n,disabled:o,error:r,success:a,options:s,placeholder:i,notDeletable:c,autocomplete:u,block:p,onVlChange:b,onVlInput:m,onVlValid:h,onVlReset:v})=>(0,d.qy)` <vl-select-next
            id=${e}
            name=${t}
            label=${l}
            ?required=${n}
            ?disabled=${o}
            ?error=${r}
            ?success=${a}
            .options=${s}
            placeholder=${i}
            ?not-deletable=${c}
            ?block=${p}
            autocomplete=${u}
            @vl-change=${b}
            @vl-input=${m}
            @vl-valid=${h}
            @vl-reset=${v}
        ></vl-select-next>`),j=x.bind({});j.storyName="vl-select-next - default",j.args={id:"geboorteplaats",name:"geboorteplaats",placeholder:"Kies je geboorteplaats",options:[{label:"Hasselt",value:"hasselt"},{label:"Turnhout",value:"turnhout"},{label:"Knokke-Heist",value:"knokke-heist"},{label:"Waregem",value:"waregem"},{label:"Lier",value:"lier"},{label:"Rio Piedras",value:"rio piedras"}]};let k=x.bind({});k.storyName="vl-select-next - not-deletable",k.args={id:"geboorteplaats",name:"geboorteplaats",placeholder:"Kies je geboorteplaats",notDeletable:!0,options:[{label:"Hasselt",value:"hasselt"},{label:"Turnhout",value:"turnhout"},{label:"Knokke-Heist",value:"knokke-heist"},{label:"Waregem",value:"waregem"},{label:"Lier",value:"lier"},{label:"Rio Piedras",value:"rio piedras"}]};let f=x.bind({});f.storyName="vl-select-next - groups",f.args={id:"geboorteplaats",name:"geboorteplaats",placeholder:"Kies je geboorteplaats",options:[{label:"Hasselt",value:"hasselt",group:"België"},{label:"Turnhout",value:"turnhout",group:"België"},{label:"Knokke-Heist",value:"knokke-heist",group:"België"},{label:"Waregem",value:"waregem",group:"België"},{label:"Lier",value:"lier",group:"België"},{label:"Rio Piedras",value:"rio piedras",group:"Puerto Rico"}]};let y=x.bind({});y.storyName="vl-select-next - selected option",y.args={id:"geboorteplaats",name:"geboorteplaats",placeholder:"Kies je geboorteplaats",options:[{label:"Hasselt",value:"hasselt",selected:!0},{label:"Turnhout",value:"turnhout"},{label:"Knokke-Heist",value:"knokke-heist"},{label:"Waregem",value:"waregem"},{label:"Lier",value:"lier"},{label:"Rio Piedras",value:"rio piedras"}]};let $=x.bind({});$.storyName="vl-select-next - disabled option",$.args={id:"geboorteplaats",name:"geboorteplaats",placeholder:"Kies je geboorteplaats",options:[{label:"Hasselt",value:"hasselt",disabled:!0},{label:"Turnhout",value:"turnhout"},{label:"Knokke-Heist",value:"knokke-heist"},{label:"Waregem",value:"waregem"},{label:"Lier",value:"lier"},{label:"Rio Piedras",value:"rio piedras"}]};let w=x.bind({});w.storyName="vl-select-next - read only",w.args={id:"geboorteplaats",name:"geboorteplaats",placeholder:"Kies je geboorteplaats",notDeletable:!0,options:[{label:"Hasselt",value:"hasselt",disabled:!0,selected:!0},{label:"Turnhout",value:"turnhout",disabled:!0},{label:"Knokke-Heist",value:"knokke-heist",disabled:!0},{label:"Waregem",value:"waregem",disabled:!0},{label:"Rio Piedras",value:"rio piedras",disabled:!0}]},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:"story(selectArgs, ({\n  id,\n  name,\n  label,\n  required,\n  disabled,\n  error,\n  success,\n  options,\n  placeholder,\n  notDeletable,\n  autocomplete,\n  block,\n  onVlChange,\n  onVlInput,\n  onVlValid,\n  onVlReset\n}) => {\n  return html` <vl-select-next\n            id=${id}\n            name=${name}\n            label=${label}\n            ?required=${required}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?success=${success}\n            .options=${options}\n            placeholder=${placeholder}\n            ?not-deletable=${notDeletable}\n            ?block=${block}\n            autocomplete=${autocomplete}\n            @vl-change=${onVlChange}\n            @vl-input=${onVlInput}\n            @vl-valid=${onVlValid}\n            @vl-reset=${onVlReset}\n        ></vl-select-next>`;\n})",...j.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:"story(selectArgs, ({\n  id,\n  name,\n  label,\n  required,\n  disabled,\n  error,\n  success,\n  options,\n  placeholder,\n  notDeletable,\n  autocomplete,\n  block,\n  onVlChange,\n  onVlInput,\n  onVlValid,\n  onVlReset\n}) => {\n  return html` <vl-select-next\n            id=${id}\n            name=${name}\n            label=${label}\n            ?required=${required}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?success=${success}\n            .options=${options}\n            placeholder=${placeholder}\n            ?not-deletable=${notDeletable}\n            ?block=${block}\n            autocomplete=${autocomplete}\n            @vl-change=${onVlChange}\n            @vl-input=${onVlInput}\n            @vl-valid=${onVlValid}\n            @vl-reset=${onVlReset}\n        ></vl-select-next>`;\n})",...k.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"story(selectArgs, ({\n  id,\n  name,\n  label,\n  required,\n  disabled,\n  error,\n  success,\n  options,\n  placeholder,\n  notDeletable,\n  autocomplete,\n  block,\n  onVlChange,\n  onVlInput,\n  onVlValid,\n  onVlReset\n}) => {\n  return html` <vl-select-next\n            id=${id}\n            name=${name}\n            label=${label}\n            ?required=${required}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?success=${success}\n            .options=${options}\n            placeholder=${placeholder}\n            ?not-deletable=${notDeletable}\n            ?block=${block}\n            autocomplete=${autocomplete}\n            @vl-change=${onVlChange}\n            @vl-input=${onVlInput}\n            @vl-valid=${onVlValid}\n            @vl-reset=${onVlReset}\n        ></vl-select-next>`;\n})",...f.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:"story(selectArgs, ({\n  id,\n  name,\n  label,\n  required,\n  disabled,\n  error,\n  success,\n  options,\n  placeholder,\n  notDeletable,\n  autocomplete,\n  block,\n  onVlChange,\n  onVlInput,\n  onVlValid,\n  onVlReset\n}) => {\n  return html` <vl-select-next\n            id=${id}\n            name=${name}\n            label=${label}\n            ?required=${required}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?success=${success}\n            .options=${options}\n            placeholder=${placeholder}\n            ?not-deletable=${notDeletable}\n            ?block=${block}\n            autocomplete=${autocomplete}\n            @vl-change=${onVlChange}\n            @vl-input=${onVlInput}\n            @vl-valid=${onVlValid}\n            @vl-reset=${onVlReset}\n        ></vl-select-next>`;\n})",...y.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:"story(selectArgs, ({\n  id,\n  name,\n  label,\n  required,\n  disabled,\n  error,\n  success,\n  options,\n  placeholder,\n  notDeletable,\n  autocomplete,\n  block,\n  onVlChange,\n  onVlInput,\n  onVlValid,\n  onVlReset\n}) => {\n  return html` <vl-select-next\n            id=${id}\n            name=${name}\n            label=${label}\n            ?required=${required}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?success=${success}\n            .options=${options}\n            placeholder=${placeholder}\n            ?not-deletable=${notDeletable}\n            ?block=${block}\n            autocomplete=${autocomplete}\n            @vl-change=${onVlChange}\n            @vl-input=${onVlInput}\n            @vl-valid=${onVlValid}\n            @vl-reset=${onVlReset}\n        ></vl-select-next>`;\n})",...$.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:"story(selectArgs, ({\n  id,\n  name,\n  label,\n  required,\n  disabled,\n  error,\n  success,\n  options,\n  placeholder,\n  notDeletable,\n  autocomplete,\n  block,\n  onVlChange,\n  onVlInput,\n  onVlValid,\n  onVlReset\n}) => {\n  return html` <vl-select-next\n            id=${id}\n            name=${name}\n            label=${label}\n            ?required=${required}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?success=${success}\n            .options=${options}\n            placeholder=${placeholder}\n            ?not-deletable=${notDeletable}\n            ?block=${block}\n            autocomplete=${autocomplete}\n            @vl-change=${onVlChange}\n            @vl-input=${onVlInput}\n            @vl-valid=${onVlValid}\n            @vl-reset=${onVlReset}\n        ></vl-select-next>`;\n})",...w.parameters?.docs?.source}}};let V=["SelectDefault","SelectNotDeletable","SelectGroups","SelectSelectedOption","SelectDisabledOption","SelectReadOnly"]},"../../libs/form/src/next/form-control/stories/form-control.public-methods-doc.mdx":(e,t,l)=>{l.d(t,{A:()=>a}),l("../../node_modules/react/index.js");var n=l("../../node_modules/react/jsx-runtime.js"),o=l("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");function r(e){let t=Object.assign({h3:"h3",p:"p",blockquote:"blockquote"},(0,o.RP)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h3,{id:"resetformcontrol",children:"resetFormControl()"}),"\n",(0,n.jsxs)(t.p,{children:["Reset de form control.",(0,n.jsx)("br",{}),"\nDe value van de control wordt teruggezet op de initiële value. Deze methode wordt ook aangeroepen als de form zelf\ngereset wordt."]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Opgelet: het is belangrijk de initiële waarde in te stellen op de form control vóór de form control gerenderd wordt.\nAnders wordt een lege value ingesteld als initiële waarde."}),"\n"]})]})}let a=function(e={}){let{wrapper:t}=Object.assign({},(0,o.RP)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(r,e)})):r(e)}},"../../node_modules/react-dom/client.js":(e,t,l)=>{var n=l("../../node_modules/react-dom/index.js");t.createRoot=n.createRoot,t.hydrateRoot=n.hydrateRoot},"../../libs/form/src/next/form-control/stories/form-control.stories-arg.ts":(e,t,l)=>{l.d(t,{Z:()=>a,x:()=>s});var n=l("../../libs/common/storybook/src/index.ts"),o=l("../../libs/form/src/next/form-control/form-control.defaults.ts"),r=l("../../node_modules/@storybook/addon-actions/dist/index.mjs");let a={...n.D8,...o.i,onVlReset:(0,r.XI)("vl-reset")},s={...(0,n.RN)(!0),id:{name:"id",description:"Het id van het veld.",table:{type:{summary:n.QE.STRING},category:n.R6.ATTRIBUTES,defaultValue:{summary:a.id}}},name:{name:"name",description:"De naam van het veld.",table:{type:{summary:n.QE.STRING},category:n.R6.ATTRIBUTES,defaultValue:{summary:a.name}}},label:{name:"label",description:"Vult het aria-label attribuut van het veld in.<br/>Kan gebruikt worden als er geen bijhorend label element of vl-form-label component is.",table:{type:{summary:n.QE.STRING},category:n.R6.ATTRIBUTES,defaultValue:{summary:a.label}}},required:{name:"required",description:"Duidt aan dat het veld verplicht is.",table:{type:{summary:n.QE.BOOLEAN},category:n.R6.ATTRIBUTES,defaultValue:{summary:a.required}}},disabled:{name:"disabled",description:"Beeldt de component in een disabled state af.",table:{type:{summary:n.QE.BOOLEAN},category:n.R6.ATTRIBUTES,defaultValue:{summary:a.disabled}}},error:{name:"error",description:"Beeldt de component in een error state af.",table:{type:{summary:n.QE.BOOLEAN},category:n.R6.ATTRIBUTES,defaultValue:{summary:a.error}}},success:{name:"success",description:"Beeldt de component in een success state af.",table:{type:{summary:n.QE.BOOLEAN},category:n.R6.ATTRIBUTES,defaultValue:{summary:a.success}}},onVlReset:{name:"vl-reset",description:"Event dat afgevuurd wordt wanneer het veld gereset wordt.",table:{category:n.R6.EVENTS}}}},"../../libs/form/src/next/select/vl-select.component.ts":(e,t,l)=>{l.d(t,{Y:()=>b});var n=l("../../libs/common/utilities/src/index.ts"),o=l("../../node_modules/@domg/govflanders-style/common/index.js"),r=l("../../node_modules/@domg/govflanders-style/component/index.js"),a=l("../../node_modules/lit/index.js"),s=l("../../node_modules/lit/directives/class-map.js"),i=l("../../node_modules/lit/directives/live.js"),d=l("../../libs/form/src/next/form-control/form-control.ts");let c=(0,a.AH)`
    .vl-select {
        background-color: #fff;
        appearance: none;
        display: inline-block;
        position: relative;
        padding: 0 4rem 0 1.5rem;
        max-width: 100%;
        height: 3.5rem;
        line-height: calc(3.5rem - 0.2rem);
        border: 1px solid #8695a8;
        border-radius: 0.3rem;
        text-decoration: none;
        color: #333332;
        font-family: 'Flanders Art Sans', sans-serif;
        font-size: 1.6rem;
        -webkit-appearance: none;
    }
    .vl-select:focus::-ms-value {
        background: inherit;
        color: inherit;
    }
    .vl-select::-ms-expand {
        display: none;
    }
    .vl-select:hover:not([disabled]) {
        border: 0.2rem solid rgba(0, 85, 204, 0.65);
        padding: 0 3.9rem 0 1.4rem;
        line-height: 3.2rem;
        background-position: calc(100% - 1.4rem) 50%;
    }
    .vl-select:hover:not([disabled]).vl-select--error {
        border-color: #d2373c;
    }
    .vl-select:hover:not([disabled]).vl-select--success {
        border-color: #009e47;
    }
    .vl-select:focus {
        box-shadow: 0 0 0 2px #fff, 0 0 0 5px rgba(0, 85, 204, 0.65);
        outline: transparent solid 0.2rem;
    }
    @supports (outline-offset: 2px) {
        .vl-select:focus {
            box-shadow: none;
            outline: 3px solid rgba(0, 85, 204, 0.65);
            outline-offset: 2px;
        }
    }
    .vl-select[disabled],
    .vl-select--disabled {
        border-color: #8695a8;
        background-color: #f3f5f6;
        color: var(--vl-theme-fg-color-70);
    }
    .vl-select--error {
        border-color: #d2373c;
        background-color: #fbebec;
    }
    .vl-select--success {
        border-color: #009e47;
        background-color: #e6f5ed;
    }
    .vl-select--block {
        display: block;
        width: 100%;
    }
    @media screen and (max-width: 767px) {
        .vl-select {
            height: 3.5rem;
            line-height: 3.5rem;
            font-size: 1.6rem;
        }
    }

    @media all and (min-width: 0\\0) and (min-resolution: 0.001dpcm) {
        .vl-select {
            padding-right: 0;
            background-image: none;
        }
    }
`,u=(0,a.AH)`
    .vl-select {
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .vl-select__container {
        position: relative;
        display: inline-block;
    }

    .vl-select__container.vl-select__container--block {
        display: block;
    }

    .vl-select:has(option.vl-select__placeholder[selected]) {
        color: #687483 !important;
    }

    .vl-select.vl-select--disabled ~ .vl-select__button {
        display: none;
    }

    .vl-select ~ .vl-select__button {
        color: #05c;
        position: absolute;
        width: 2.4rem;
        height: 2.4rem;
        top: 0.6rem;
        right: 3.6rem;
        font-size: 1.4rem;
        border-radius: 0.3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;

        span.vl-icon:before {
            margin-top: -0.2rem;
        }

        &:hover,
        &:focus {
            border: #05c 0.1rem solid;
            background-color: #e6eefa;
            color: #003bb0;
            outline: none;
        }
    }

    .vl-select:not(.vl-select--disabled) {
        &:has(~ .vl-select__button) {
            padding-right: 6rem;
            &:hover {
                padding-right: 5.9rem;
                &:focus {
                    padding-right: 6rem;
                }
            }
        }

        &:focus:hover {
            border-width: 0.1rem;
            padding-right: 4rem;
            padding-left: 1.5rem;
        }
    }

    .vl-vi.vl-vi-nav-down:before {
        color: #6e7985;
        position: absolute;
        right: 1.3rem;
        font-size: 1.3rem;
        top: 0.8rem;
        pointer-events: none;
    }
`;var p=l("../../libs/form/src/next/select/vl-select.defaults.ts");class b extends d.M{static get styles(){return[o.h8,o.BI,c,r.py,u]}static get properties(){return{options:{type:Array},block:{type:Boolean},readonly:{type:Boolean},placeholder:{type:String},autocomplete:{type:String},notDeletable:{type:Boolean,attribute:"not-deletable"},value:{type:String,state:!0}}}connectedCallback(){super.connectedCallback();let e=this.getSelectedOption();this.value=e?.value||"",this.initialOptions=JSON.parse(JSON.stringify(this.options))}updated(e){if(super.updated(e),e.has("options")){let e=this.getSelectedOption();this.value=e?.value||""}if(e.has("value")){let e={value:this.value};this.setValue(this.value),this.dispatchEvent(new CustomEvent("vl-change",{composed:!0,bubbles:!0,detail:e})),this.dispatchInput&&(this.dispatchEvent(new CustomEvent("vl-input",{bubbles:!0,composed:!0,detail:e})),this.dispatchInput=!1),this.dispatchEventIfValid(e)}}render(){let e={"vl-select__container":!0,"vl-select__container--block":this.block},t={"vl-select":!0,"vl-select--disabled":this.disabled,"vl-select--error":this.isInvalid||this.error,"vl-select--success":this.success,"vl-select--block":this.block},l=!!this.value,n=this.options.some(e=>e.group);return(0,a.qy)`
            <div class=${(0,s.H)(e)}>
                <select
                    id=${this.id||a.s6}
                    name=${this.name||a.s6}
                    class=${(0,s.H)(t)}
                    aria-label=${this.label||a.s6}
                    aria-invalid=${this.isInvalid||a.s6}
                    ?required=${this.required}
                    ?disabled=${this.disabled}
                    ?aria-disabled=${this.disabled}
                    ?error=${this.error}
                    .value=${(0,i.V)(this.value)}
                    autocomplete=${this.autocomplete||a.s6}
                    @change=${this.onChange}
                    @input=${this.onSelect}
                >
                    ${this.placeholder?this.renderPlaceholder(l):a.s6}
                    ${n?this.renderGroupedOptions():this.renderSelectOptions(this.options)}
                </select>
                ${l&&!this.notDeletable?this.renderClearButton():a.s6}
                <span class="vl-icon vl-vi vl-vi-nav-down" aria-hidden="true"></span>
            </div>
        `}renderPlaceholder(e){return(0,a.qy)` <option class="vl-select__placeholder" value="" ?selected=${!e} disabled>
            ${this.placeholder}
        </option>`}renderClearButton(){return(0,a.qy)`
            <button
                type="button"
                class="vl-select__button"
                aria-label=${`Verwijder ${this.label} keuze ${this.getSelectedOption()?.label||this.value||""}`}
                @click=${this.clearValue}
            >
                <span class="vl-icon vl-vi vl-vi-close" aria-hidden="true"></span>
            </button>
        `}renderGroupedOptions(){return Object.entries(this.getGroupedOptions()).map(([e,t])=>(0,a.qy)` <optgroup label=${e}>${this.renderSelectOptions(t)}</optgroup>`)}renderSelectOptions(e){return e.map(e=>(0,a.qy)` <option
                value=${e.value}
                ?selected=${this.value===e.value}
                ?disabled=${e.disabled}
            >
                ${e.label||e.value}
            </option>`)}get validationTarget(){return this.shadowRoot?.querySelector("select")}resetFormControl(){for(super.resetFormControl();this.options.length;)this.options.pop();this.initialOptions.forEach(e=>this.options.push({...e})),this.value&&this.requestUpdate("options")}onChange(e){this.value=e?.target?.value}onSelect(){this.dispatchInput=!0}clearValue(){this.dispatchInput=!0,this.value=""}getSelectedOption(){return[...this.options].reverse().find(e=>e.selected)}getGroupedOptions(){return this.options.reduce((e,t)=>{let l=t.group||this.DEFAULT_GROUP_LABEL;return e[l]?e[l].push(t):e[l]=[t],e},{})}constructor(...e){super(...e),this.options=p.p.options,this.block=p.p.block,this.placeholder=p.p.placeholder,this.autocomplete=p.p.autocomplete,this.notDeletable=p.p.notDeletable,this.value="",this.initialOptions=[],this.DEFAULT_GROUP_LABEL="Overig",this.dispatchInput=!1}}b=function(e,t,l,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,l):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,l,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,l,a):o(t,l))||a);return r>3&&a&&Object.defineProperty(t,l,a),a}([(0,n.M1)("vl-select-next")],b)},"../../libs/form/src/next/select/vl-select.defaults.ts":(e,t,l)=>{l.d(t,{p:()=>n});let n={...l("../../libs/form/src/next/form-control/form-control.defaults.ts").i,options:[],block:!1,placeholder:"",autocomplete:"",notDeletable:!1}}}]);