"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[1321],{"../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(n,e,o)=>{o.d(e,{f:()=>m});var t=o("../../node_modules/react/index.js"),r=o("../../node_modules/react-dom/client.js"),l=new Map,a=({callback:n,children:e})=>{let o=(0,t.useRef)();return(0,t.useLayoutEffect)(()=>{o.current!==n&&(o.current=n,n())},[n]),e},i=async(n,e)=>{let o=await s(e);return new Promise(e=>{o.render(t.createElement(a,{callback:()=>e(null)},n))})},c=(n,e)=>{let o=l.get(n);o&&(o.unmount(),l.delete(n))},s=async n=>{let e=l.get(n);return e||(e=r.createRoot(n),l.set(n,e)),e},d=o("../../node_modules/@storybook/blocks/dist/index.mjs"),u={code:d.XA,a:d.zE,...d.Sw},g=class extends t.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(n){let{showException:e}=this.props;e(n)}render(){let{hasError:n}=this.state,{children:e}=this.props;return n?null:t.createElement(t.Fragment,null,e)}},m=class{constructor(){this.render=async(n,e,r)=>{let l={...u,...e?.components},a=d.kQ;return new Promise((c,s)=>{o.e(814).then(o.bind(o,"../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:o})=>i(t.createElement(g,{showException:s,key:Math.random()},t.createElement(o,{components:l},t.createElement(a,{context:n,docsParameter:e}))),r)).then(()=>c())})},this.unmount=n=>{c(n)}}}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(n,e,o)=>{o.d(e,{Hl:()=>t.Hl,W8:()=>t.W8,kL:()=>t.kL,ov:()=>t.ov}),o("../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var t=o("../../node_modules/@storybook/blocks/dist/index.mjs")},"../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(n,e,o)=>{o.d(e,{BN:()=>r,RP:()=>a,gz:()=>l,xA:()=>c});var t=o("../../node_modules/react/index.js");let r=t.createContext({});function l(n){return function(e){let o=a(e.components);return t.createElement(n,{...e,allComponents:o})}}function a(n){let e=t.useContext(r);return t.useMemo(()=>"function"==typeof n?n(e):{...e,...n},[e,n])}let i={};function c({components:n,children:e,disableParentContext:o}){let l;return l=o?"function"==typeof n?n({}):n||i:a(n),t.createElement(r.Provider,{value:l},e)}},"../../libs/components/src/next/button/stories/vl-button.stories.ts":(n,e,o)=>{o.r(e),o.d(e,{ButtonBlock:()=>j,ButtonDisabled:()=>k,ButtonError:()=>w,ButtonIcon:()=>B,ButtonIconOnly:()=>V,ButtonLarge:()=>T,ButtonLoading:()=>O,ButtonNarrow:()=>S,ButtonPrimary:()=>h,ButtonSecondary:()=>x,ButtonTertiary:()=>f,ButtonToggle:()=>_,ButtonWide:()=>E,__namedExportsOrder:()=>A,default:()=>v});var t=o("../../libs/common/storybook/src/index.ts"),r=o("../../libs/common/utilities/src/constants/index.ts"),l=o("../../node_modules/@storybook/addon-actions/dist/index.mjs"),a=o("../../libs/components/src/next/button/vl-button.defaults.ts");let i={...t.D8,...a.j,defaultSlot:"",onVlClick:(0,l.XI)("vl-click"),onVlToggle:(0,l.XI)("vl-toggle")},c={...(0,t.RN)(!0),type:{name:"type",description:"Het type van de button.",table:{type:{summary:t.QE.STRING},category:t.R6.ATTRIBUTES,defaultValue:{summary:i.type}}},disabled:{name:"disabled",description:"Duidt aan dat de button uitgeschakeld is.",table:{type:{summary:t.QE.BOOLEAN},category:t.R6.ATTRIBUTES,defaultValue:{summary:i.disabled}}},error:{name:"error",description:"Beeldt de button af als een error button.",table:{type:{summary:t.QE.BOOLEAN},category:t.R6.ATTRIBUTES,defaultValue:{summary:i.error}}},block:{name:"block",description:"Duidt aan dat de button de volledige breedte van zijn parent mag innemen.",table:{type:{summary:t.QE.BOOLEAN},category:t.R6.ATTRIBUTES,defaultValue:{summary:i.block}}},large:{name:"large",description:"Beeldt de button groot af.",table:{type:{summary:t.QE.BOOLEAN},category:t.R6.ATTRIBUTES,defaultValue:{summary:i.large}}},wide:{name:"wide",description:"Beeldt de button breed af.",table:{type:{summary:t.QE.BOOLEAN},category:t.R6.ATTRIBUTES,defaultValue:{summary:i.wide}}},narrow:{name:"narrow",description:"Beeldt de button smal af.",table:{type:{summary:t.QE.BOOLEAN},category:t.R6.ATTRIBUTES,defaultValue:{summary:i.narrow}}},secondary:{name:"secondary",description:"Beeldt de button af als een secondary button.",table:{type:{summary:t.QE.BOOLEAN},category:t.R6.ATTRIBUTES,defaultValue:{summary:i.secondary}}},tertiary:{name:"tertiary",description:"Beeldt de button af als een tertiary button.",table:{type:{summary:t.QE.BOOLEAN},category:t.R6.ATTRIBUTES,defaultValue:{summary:i.tertiary}}},loading:{name:"loading",description:"Beeldt de button af als een loading button.<br/>We raden aan dit enkel te gebruiken voor primary buttons.",table:{type:{summary:t.QE.BOOLEAN},category:t.R6.ATTRIBUTES,defaultValue:{summary:i.loading}}},icon:{name:"icon",description:"Beeldt een icoon af in de button.<br/>Standaard wordt dit icoon voor de tekst afgebeeld.",table:{type:{summary:t.QE.STRING},category:t.R6.ATTRIBUTES,defaultValue:{summary:i.icon}}},iconPlacement:{name:"icon-placement",description:"De positie van het icoon ten opzichte van de tekst.",control:{type:t.VH.SELECT},options:Object.values(r.aK),table:{type:{summary:(0,t.uf)(Object.values(r.aK))},category:t.R6.ATTRIBUTES,defaultValue:{summary:i.iconPlacement}}},iconOnly:{name:"icon-only",description:"Beeldt de button correct af als er enkel een icoon is en geen tekst.<br/>Te gebruiken in combinatie met het `icon` attribuut.",table:{type:{summary:t.QE.BOOLEAN},category:t.R6.ATTRIBUTES,defaultValue:{summary:i.iconOnly}}},toggle:{name:"toggle",description:"Beeldt de button af als een toggle button.",table:{type:{summary:t.QE.BOOLEAN},category:t.R6.ATTRIBUTES,defaultValue:{summary:i.toggle}}},on:{name:"on",description:"Duidt aan dat de toggle button aan staat.<br>Te gebruiken in combinatie met het `toggle` attribuut.",table:{type:{summary:t.QE.BOOLEAN},category:t.R6.ATTRIBUTES,defaultValue:{summary:i.on}}},controlled:{name:"controlled",description:"Duidt aan dat de state van de toggle button gecontroleerd wordt door een parent component.<br>De button zal zijn eigen `on` attribuut niet veranderen.<br>Te gebruiken in combinatie met het `toggle` attribuut.",table:{type:{summary:t.QE.BOOLEAN},category:t.R6.ATTRIBUTES,defaultValue:{summary:i.controlled}}},defaultSlot:{name:"[default]",description:"De content van de button.",table:{type:{summary:t.QE.HTML},category:t.R6.SLOTS,defaultValue:{summary:i.defaultSlot}}},onVlClick:{name:"vl-click",description:"Event dat afgevuurd wordt bij het klikken op de button.",table:{category:t.R6.EVENTS}},onVlToggle:{name:"vl-toggle",description:"Event dat afgevuurd wordt als het `on` attribuut van de button verandert.",table:{type:{summary:"{ on: boolean }"},category:t.R6.EVENTS}}};var s=o("../../node_modules/lit/index.js"),d=o("../../libs/components/src/next/button/vl-button.component.ts"),u=o("../../libs/common/utilities/src/index.ts"),g=o("../../node_modules/lit/directives/unsafe-html.js");o("../../node_modules/react/index.js");var m=o("../../node_modules/react/jsx-runtime.js"),b=o("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),p=o("../../node_modules/@storybook/addon-docs/dist/index.mjs");function y(n){let e=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",h3:"h3"},(0,b.RP)(),n.components);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(e.h1,{id:"button---next",children:"Button - next"}),"\n",(0,m.jsxs)(e.p,{children:["Gebruik de ",(0,m.jsx)(e.code,{children:"button-next"})," component om een button af te beelden op een pagina."]}),"\n",(0,m.jsxs)(e.p,{children:["Dit component is de volgende versie van de ",(0,m.jsx)(e.a,{href:"/docs/elements-button-button--documentatie",children:"vl-button"})," component."]}),"\n",(0,m.jsx)(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,m.jsx)(e.pre,{children:(0,m.jsx)(e.code,{className:"language-js",children:"import { VlButtonComponent } from '@domg-wc/components/next/button';\n"})}),"\n",(0,m.jsx)(e.pre,{children:(0,m.jsx)(e.code,{className:"language-html",children:"<vl-button-next></vl-button-next>\n"})}),"\n",(0,m.jsx)(p.Hl,{of:h}),"\n",(0,m.jsx)(e.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,m.jsx)(p.ov,{of:h}),"\n",(0,m.jsx)(e.h2,{id:"varianten",children:"Varianten"}),"\n",(0,m.jsx)(e.h3,{id:"secondary",children:"Secondary"}),"\n",(0,m.jsx)(e.p,{children:"Gebruik een secondary button om een 1 of meerdere buttons af te beelden in combinatie met een primary button."}),"\n",(0,m.jsx)(p.Hl,{of:x}),"\n",(0,m.jsx)(e.h3,{id:"tertiary",children:"Tertiary"}),"\n",(0,m.jsxs)(e.p,{children:["Gebruik een tertiary button om een 1 of meerdere buttons af te beelden in combinatie met een primary button.",(0,m.jsx)("br",{}),"\nEen tertiary button is subtieler dan een secondary button."]}),"\n",(0,m.jsx)(p.Hl,{of:f}),"\n",(0,m.jsx)(e.h3,{id:"disabled",children:"Disabled"}),"\n",(0,m.jsx)(e.p,{children:"Gebruik een disabled button om aan te tonen dat een actie niet uitgevoerd kan worden."}),"\n",(0,m.jsx)(p.Hl,{of:k}),"\n",(0,m.jsx)(e.h3,{id:"error",children:"Error"}),"\n",(0,m.jsx)(e.p,{children:"Gebruik een error button om de belangrijkheid van een actie aan te tonen."}),"\n",(0,m.jsx)(p.Hl,{of:w}),"\n",(0,m.jsx)(e.h3,{id:"block",children:"Block"}),"\n",(0,m.jsx)(p.Hl,{of:j}),"\n",(0,m.jsx)(e.h3,{id:"large",children:"Large"}),"\n",(0,m.jsx)(p.Hl,{of:T}),"\n",(0,m.jsx)(e.h3,{id:"wide",children:"Wide"}),"\n",(0,m.jsx)(p.Hl,{of:E}),"\n",(0,m.jsx)(e.h3,{id:"narrow",children:"Narrow"}),"\n",(0,m.jsx)(p.Hl,{of:S}),"\n",(0,m.jsx)(e.h3,{id:"loading",children:"Loading"}),"\n",(0,m.jsxs)(e.p,{children:["Gebruik een loading button om aan te tonen dat een actie enige tijd in beslag neemt.",(0,m.jsx)("br",{}),"\nGedurende het uitvoeren van de actie kan je de button als een loading button afbeelden.",(0,m.jsx)("br",{}),"\nWe raden aan een loading button enkel te gebruiken voor primary buttons.",(0,m.jsx)("br",{}),"\nIndien je wil dat de loading button ook disabled is, kan je het ",(0,m.jsx)(e.code,{children:"disabled"})," attribuut in combinatie met het ",(0,m.jsx)(e.code,{children:"loading"})," attribuut gebruiken."]}),"\n",(0,m.jsx)(p.Hl,{of:O}),"\n",(0,m.jsx)(e.h3,{id:"icoon",children:"Icoon"}),"\n",(0,m.jsx)(p.Hl,{of:B}),"\n",(0,m.jsx)(e.h3,{id:"enkel-icoon",children:"Enkel icoon"}),"\n",(0,m.jsx)(p.Hl,{of:V}),"\n",(0,m.jsx)(e.h3,{id:"toggle",children:"Toggle"}),"\n",(0,m.jsxs)(e.p,{children:["Gebruik een toggle button om aan te duiden dat een actie aan of uit staat.",(0,m.jsx)("br",{}),"\nDe button wordt aan- of uitgezet door er op te klikken.",(0,m.jsx)("br",{}),"\nGebruik het ",(0,m.jsx)(e.code,{children:"on"})," attribuut om de button programmatorisch aan- of uit te zetten.",(0,m.jsx)("br",{}),"\nGebruik het ",(0,m.jsx)(e.code,{children:"controlled"})," attribuut als je wil dat de button zich niet zelf aan- of uitzet, gebruik dan het ",(0,m.jsx)(e.code,{children:"on"})," attribuut om de button aan- of uit te zetten."]}),"\n",(0,m.jsx)(p.Hl,{of:_}),"\n",(0,m.jsx)(e.h2,{id:"referenties",children:"Referenties"}),"\n",(0,m.jsx)(e.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,m.jsx)(e.p,{children:(0,m.jsx)(e.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/atoms/vl-ui-button",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Button"})})]})}(0,u.gy)([d.Y]);let v={title:"Components-next/button",tags:["autodocs"],args:i,argTypes:c,parameters:{docs:{page:function(n={}){let{wrapper:e}=Object.assign({},(0,b.RP)(),n.components);return e?(0,m.jsx)(e,Object.assign({},n,{children:(0,m.jsx)(y,n)})):y(n)}}}},$=(0,t._7)(i,({type:n,disabled:e,error:o,block:t,large:r,wide:l,narrow:a,secondary:i,tertiary:c,loading:d,icon:u,iconPlacement:m,iconOnly:b,toggle:p,on:y,controlled:v,defaultSlot:$,onVlClick:h,onVlToggle:x})=>(0,s.qy)`
        <vl-button-next
            type=${n}
            ?disabled=${e}
            ?error=${o}
            ?block=${t}
            ?large=${r}
            ?wide=${l}
            ?narrow=${a}
            ?secondary=${i}
            ?tertiary=${c}
            ?loading=${d}
            icon=${u}
            icon-placement=${m}
            ?icon-only=${b}
            ?toggle=${p}
            ?on=${y}
            ?controlled=${v}
            @vl-click=${h}
            @vl-toggle=${x}
        >
            ${(0,g._)($)}
        </vl-button-next>
    `),h=$.bind({});h.storyName="vl-button-next - primary",h.args={defaultSlot:"Klik op mij"};let x=$.bind({});x.storyName="vl-button-next - secondary",x.args={defaultSlot:"Klik op mij",secondary:!0};let f=$.bind({});f.storyName="vl-button-next - tertiary",f.args={defaultSlot:"Klik op mij",tertiary:!0};let k=$.bind({});k.storyName="vl-button-next - disabled",k.args={defaultSlot:"Klik op mij",disabled:!0};let w=$.bind({});w.storyName="vl-button-next - error",w.args={defaultSlot:"Klik op mij",error:!0};let j=$.bind({});j.storyName="vl-button-next - block",j.args={defaultSlot:"Klik op mij",block:!0};let T=$.bind({});T.storyName="vl-button-next - large",T.args={defaultSlot:"Klik op mij",large:!0};let E=$.bind({});E.storyName="vl-button-next - wide",E.args={defaultSlot:"Klik op mij",wide:!0};let S=$.bind({});S.storyName="vl-button-next - narrow",S.args={defaultSlot:"Klik op mij",narrow:!0};let O=$.bind({});O.storyName="vl-button-next - loading",O.args={defaultSlot:"Klik op mij",loading:!0};let B=$.bind({});B.storyName="vl-button-next - icon",B.args={defaultSlot:"Klik op mij",icon:"location"};let V=$.bind({});V.storyName="vl-button-next - icon only",V.args={icon:"location",iconOnly:!0};let _=$.bind({});_.storyName="vl-button-next - toggle",_.args={defaultSlot:"Klik op mij",toggle:!0},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"story(buttonArgs, ({\n  type,\n  disabled,\n  error,\n  block,\n  large,\n  wide,\n  narrow,\n  secondary,\n  tertiary,\n  loading,\n  icon,\n  iconPlacement,\n  iconOnly,\n  toggle,\n  on,\n  controlled,\n  defaultSlot,\n  onVlClick,\n  onVlToggle\n}) => html`\n        <vl-button-next\n            type=${type}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?block=${block}\n            ?large=${large}\n            ?wide=${wide}\n            ?narrow=${narrow}\n            ?secondary=${secondary}\n            ?tertiary=${tertiary}\n            ?loading=${loading}\n            icon=${icon}\n            icon-placement=${iconPlacement}\n            ?icon-only=${iconOnly}\n            ?toggle=${toggle}\n            ?on=${on}\n            ?controlled=${controlled}\n            @vl-click=${onVlClick}\n            @vl-toggle=${onVlToggle}\n        >\n            ${unsafeHTML(defaultSlot)}\n        </vl-button-next>\n    `)",...h.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"story(buttonArgs, ({\n  type,\n  disabled,\n  error,\n  block,\n  large,\n  wide,\n  narrow,\n  secondary,\n  tertiary,\n  loading,\n  icon,\n  iconPlacement,\n  iconOnly,\n  toggle,\n  on,\n  controlled,\n  defaultSlot,\n  onVlClick,\n  onVlToggle\n}) => html`\n        <vl-button-next\n            type=${type}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?block=${block}\n            ?large=${large}\n            ?wide=${wide}\n            ?narrow=${narrow}\n            ?secondary=${secondary}\n            ?tertiary=${tertiary}\n            ?loading=${loading}\n            icon=${icon}\n            icon-placement=${iconPlacement}\n            ?icon-only=${iconOnly}\n            ?toggle=${toggle}\n            ?on=${on}\n            ?controlled=${controlled}\n            @vl-click=${onVlClick}\n            @vl-toggle=${onVlToggle}\n        >\n            ${unsafeHTML(defaultSlot)}\n        </vl-button-next>\n    `)",...x.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"story(buttonArgs, ({\n  type,\n  disabled,\n  error,\n  block,\n  large,\n  wide,\n  narrow,\n  secondary,\n  tertiary,\n  loading,\n  icon,\n  iconPlacement,\n  iconOnly,\n  toggle,\n  on,\n  controlled,\n  defaultSlot,\n  onVlClick,\n  onVlToggle\n}) => html`\n        <vl-button-next\n            type=${type}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?block=${block}\n            ?large=${large}\n            ?wide=${wide}\n            ?narrow=${narrow}\n            ?secondary=${secondary}\n            ?tertiary=${tertiary}\n            ?loading=${loading}\n            icon=${icon}\n            icon-placement=${iconPlacement}\n            ?icon-only=${iconOnly}\n            ?toggle=${toggle}\n            ?on=${on}\n            ?controlled=${controlled}\n            @vl-click=${onVlClick}\n            @vl-toggle=${onVlToggle}\n        >\n            ${unsafeHTML(defaultSlot)}\n        </vl-button-next>\n    `)",...f.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:"story(buttonArgs, ({\n  type,\n  disabled,\n  error,\n  block,\n  large,\n  wide,\n  narrow,\n  secondary,\n  tertiary,\n  loading,\n  icon,\n  iconPlacement,\n  iconOnly,\n  toggle,\n  on,\n  controlled,\n  defaultSlot,\n  onVlClick,\n  onVlToggle\n}) => html`\n        <vl-button-next\n            type=${type}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?block=${block}\n            ?large=${large}\n            ?wide=${wide}\n            ?narrow=${narrow}\n            ?secondary=${secondary}\n            ?tertiary=${tertiary}\n            ?loading=${loading}\n            icon=${icon}\n            icon-placement=${iconPlacement}\n            ?icon-only=${iconOnly}\n            ?toggle=${toggle}\n            ?on=${on}\n            ?controlled=${controlled}\n            @vl-click=${onVlClick}\n            @vl-toggle=${onVlToggle}\n        >\n            ${unsafeHTML(defaultSlot)}\n        </vl-button-next>\n    `)",...k.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:"story(buttonArgs, ({\n  type,\n  disabled,\n  error,\n  block,\n  large,\n  wide,\n  narrow,\n  secondary,\n  tertiary,\n  loading,\n  icon,\n  iconPlacement,\n  iconOnly,\n  toggle,\n  on,\n  controlled,\n  defaultSlot,\n  onVlClick,\n  onVlToggle\n}) => html`\n        <vl-button-next\n            type=${type}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?block=${block}\n            ?large=${large}\n            ?wide=${wide}\n            ?narrow=${narrow}\n            ?secondary=${secondary}\n            ?tertiary=${tertiary}\n            ?loading=${loading}\n            icon=${icon}\n            icon-placement=${iconPlacement}\n            ?icon-only=${iconOnly}\n            ?toggle=${toggle}\n            ?on=${on}\n            ?controlled=${controlled}\n            @vl-click=${onVlClick}\n            @vl-toggle=${onVlToggle}\n        >\n            ${unsafeHTML(defaultSlot)}\n        </vl-button-next>\n    `)",...w.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:"story(buttonArgs, ({\n  type,\n  disabled,\n  error,\n  block,\n  large,\n  wide,\n  narrow,\n  secondary,\n  tertiary,\n  loading,\n  icon,\n  iconPlacement,\n  iconOnly,\n  toggle,\n  on,\n  controlled,\n  defaultSlot,\n  onVlClick,\n  onVlToggle\n}) => html`\n        <vl-button-next\n            type=${type}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?block=${block}\n            ?large=${large}\n            ?wide=${wide}\n            ?narrow=${narrow}\n            ?secondary=${secondary}\n            ?tertiary=${tertiary}\n            ?loading=${loading}\n            icon=${icon}\n            icon-placement=${iconPlacement}\n            ?icon-only=${iconOnly}\n            ?toggle=${toggle}\n            ?on=${on}\n            ?controlled=${controlled}\n            @vl-click=${onVlClick}\n            @vl-toggle=${onVlToggle}\n        >\n            ${unsafeHTML(defaultSlot)}\n        </vl-button-next>\n    `)",...j.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:"story(buttonArgs, ({\n  type,\n  disabled,\n  error,\n  block,\n  large,\n  wide,\n  narrow,\n  secondary,\n  tertiary,\n  loading,\n  icon,\n  iconPlacement,\n  iconOnly,\n  toggle,\n  on,\n  controlled,\n  defaultSlot,\n  onVlClick,\n  onVlToggle\n}) => html`\n        <vl-button-next\n            type=${type}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?block=${block}\n            ?large=${large}\n            ?wide=${wide}\n            ?narrow=${narrow}\n            ?secondary=${secondary}\n            ?tertiary=${tertiary}\n            ?loading=${loading}\n            icon=${icon}\n            icon-placement=${iconPlacement}\n            ?icon-only=${iconOnly}\n            ?toggle=${toggle}\n            ?on=${on}\n            ?controlled=${controlled}\n            @vl-click=${onVlClick}\n            @vl-toggle=${onVlToggle}\n        >\n            ${unsafeHTML(defaultSlot)}\n        </vl-button-next>\n    `)",...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:"story(buttonArgs, ({\n  type,\n  disabled,\n  error,\n  block,\n  large,\n  wide,\n  narrow,\n  secondary,\n  tertiary,\n  loading,\n  icon,\n  iconPlacement,\n  iconOnly,\n  toggle,\n  on,\n  controlled,\n  defaultSlot,\n  onVlClick,\n  onVlToggle\n}) => html`\n        <vl-button-next\n            type=${type}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?block=${block}\n            ?large=${large}\n            ?wide=${wide}\n            ?narrow=${narrow}\n            ?secondary=${secondary}\n            ?tertiary=${tertiary}\n            ?loading=${loading}\n            icon=${icon}\n            icon-placement=${iconPlacement}\n            ?icon-only=${iconOnly}\n            ?toggle=${toggle}\n            ?on=${on}\n            ?controlled=${controlled}\n            @vl-click=${onVlClick}\n            @vl-toggle=${onVlToggle}\n        >\n            ${unsafeHTML(defaultSlot)}\n        </vl-button-next>\n    `)",...E.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"story(buttonArgs, ({\n  type,\n  disabled,\n  error,\n  block,\n  large,\n  wide,\n  narrow,\n  secondary,\n  tertiary,\n  loading,\n  icon,\n  iconPlacement,\n  iconOnly,\n  toggle,\n  on,\n  controlled,\n  defaultSlot,\n  onVlClick,\n  onVlToggle\n}) => html`\n        <vl-button-next\n            type=${type}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?block=${block}\n            ?large=${large}\n            ?wide=${wide}\n            ?narrow=${narrow}\n            ?secondary=${secondary}\n            ?tertiary=${tertiary}\n            ?loading=${loading}\n            icon=${icon}\n            icon-placement=${iconPlacement}\n            ?icon-only=${iconOnly}\n            ?toggle=${toggle}\n            ?on=${on}\n            ?controlled=${controlled}\n            @vl-click=${onVlClick}\n            @vl-toggle=${onVlToggle}\n        >\n            ${unsafeHTML(defaultSlot)}\n        </vl-button-next>\n    `)",...S.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:"story(buttonArgs, ({\n  type,\n  disabled,\n  error,\n  block,\n  large,\n  wide,\n  narrow,\n  secondary,\n  tertiary,\n  loading,\n  icon,\n  iconPlacement,\n  iconOnly,\n  toggle,\n  on,\n  controlled,\n  defaultSlot,\n  onVlClick,\n  onVlToggle\n}) => html`\n        <vl-button-next\n            type=${type}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?block=${block}\n            ?large=${large}\n            ?wide=${wide}\n            ?narrow=${narrow}\n            ?secondary=${secondary}\n            ?tertiary=${tertiary}\n            ?loading=${loading}\n            icon=${icon}\n            icon-placement=${iconPlacement}\n            ?icon-only=${iconOnly}\n            ?toggle=${toggle}\n            ?on=${on}\n            ?controlled=${controlled}\n            @vl-click=${onVlClick}\n            @vl-toggle=${onVlToggle}\n        >\n            ${unsafeHTML(defaultSlot)}\n        </vl-button-next>\n    `)",...O.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:"story(buttonArgs, ({\n  type,\n  disabled,\n  error,\n  block,\n  large,\n  wide,\n  narrow,\n  secondary,\n  tertiary,\n  loading,\n  icon,\n  iconPlacement,\n  iconOnly,\n  toggle,\n  on,\n  controlled,\n  defaultSlot,\n  onVlClick,\n  onVlToggle\n}) => html`\n        <vl-button-next\n            type=${type}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?block=${block}\n            ?large=${large}\n            ?wide=${wide}\n            ?narrow=${narrow}\n            ?secondary=${secondary}\n            ?tertiary=${tertiary}\n            ?loading=${loading}\n            icon=${icon}\n            icon-placement=${iconPlacement}\n            ?icon-only=${iconOnly}\n            ?toggle=${toggle}\n            ?on=${on}\n            ?controlled=${controlled}\n            @vl-click=${onVlClick}\n            @vl-toggle=${onVlToggle}\n        >\n            ${unsafeHTML(defaultSlot)}\n        </vl-button-next>\n    `)",...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:"story(buttonArgs, ({\n  type,\n  disabled,\n  error,\n  block,\n  large,\n  wide,\n  narrow,\n  secondary,\n  tertiary,\n  loading,\n  icon,\n  iconPlacement,\n  iconOnly,\n  toggle,\n  on,\n  controlled,\n  defaultSlot,\n  onVlClick,\n  onVlToggle\n}) => html`\n        <vl-button-next\n            type=${type}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?block=${block}\n            ?large=${large}\n            ?wide=${wide}\n            ?narrow=${narrow}\n            ?secondary=${secondary}\n            ?tertiary=${tertiary}\n            ?loading=${loading}\n            icon=${icon}\n            icon-placement=${iconPlacement}\n            ?icon-only=${iconOnly}\n            ?toggle=${toggle}\n            ?on=${on}\n            ?controlled=${controlled}\n            @vl-click=${onVlClick}\n            @vl-toggle=${onVlToggle}\n        >\n            ${unsafeHTML(defaultSlot)}\n        </vl-button-next>\n    `)",...V.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:"story(buttonArgs, ({\n  type,\n  disabled,\n  error,\n  block,\n  large,\n  wide,\n  narrow,\n  secondary,\n  tertiary,\n  loading,\n  icon,\n  iconPlacement,\n  iconOnly,\n  toggle,\n  on,\n  controlled,\n  defaultSlot,\n  onVlClick,\n  onVlToggle\n}) => html`\n        <vl-button-next\n            type=${type}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?block=${block}\n            ?large=${large}\n            ?wide=${wide}\n            ?narrow=${narrow}\n            ?secondary=${secondary}\n            ?tertiary=${tertiary}\n            ?loading=${loading}\n            icon=${icon}\n            icon-placement=${iconPlacement}\n            ?icon-only=${iconOnly}\n            ?toggle=${toggle}\n            ?on=${on}\n            ?controlled=${controlled}\n            @vl-click=${onVlClick}\n            @vl-toggle=${onVlToggle}\n        >\n            ${unsafeHTML(defaultSlot)}\n        </vl-button-next>\n    `)",..._.parameters?.docs?.source}}};let A=["ButtonPrimary","ButtonSecondary","ButtonTertiary","ButtonDisabled","ButtonError","ButtonBlock","ButtonLarge","ButtonWide","ButtonNarrow","ButtonLoading","ButtonIcon","ButtonIconOnly","ButtonToggle"]},"../../node_modules/lit-html/directive.js":(n,e,o)=>{o.d(e,{OA:()=>t,WL:()=>l,u$:()=>r});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},r=n=>function(){for(var e=arguments.length,o=Array(e),t=0;t<e;t++)o[t]=arguments[t];return{_$litDirective$:n,values:o}};class l{constructor(n){}get _$AU(){return this._$AM._$AU}_$AT(n,e,o){this._$Ct=n,this._$AM=e,this._$Ci=o}_$AS(n,e){return this.update(n,e)}update(n,e){return this.render(...e)}}},"../../node_modules/lit/directives/class-map.js":(n,e,o)=>{o.d(e,{H:()=>l});var t=o("../../node_modules/lit-html/lit-html.js"),r=o("../../node_modules/lit-html/directive.js"),l=(0,r.u$)(class extends r.WL{constructor(n){var e;if(super(n),n.type!==r.OA.ATTRIBUTE||"class"!==n.name||(null===(e=n.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(n){return" "+Object.keys(n).filter(e=>n[e]).join(" ")+" "}update(n,e){var[o]=e;if(void 0===this.it){for(var r in this.it=new Set,void 0!==n.strings&&(this.st=new Set(n.strings.join(" ").split(/\s/).filter(n=>""!==n))),o)o[r]&&!(null!==(c=this.st)&&void 0!==c&&c.has(r))&&this.it.add(r);return this.render(o)}var l=n.element.classList;for(var a of this.it)a in o||(l.remove(a),this.it.delete(a));for(var i in o){var c,s,d=!!o[i];d===this.it.has(i)||(null===(s=this.st)||void 0===s?void 0:s.has(i))||(d?(l.add(i),this.it.add(i)):(l.remove(i),this.it.delete(i)))}return t.c0}})},"../../node_modules/lit/directives/unsafe-html.js":(n,e,o)=>{o.d(e,{_:()=>a});var t=o("../../node_modules/lit-html/lit-html.js"),r=o("../../node_modules/lit-html/directive.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class l extends r.WL{constructor(n){if(super(n),this.et=t.s6,n.type!==r.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(n){if(n===t.s6||null==n)return this.vt=void 0,this.et=n;if(n===t.c0)return n;if("string"!=typeof n)throw Error(this.constructor.directiveName+"() called with a non-string value");if(n===this.et)return this.vt;this.et=n;var e=[n];return e.raw=e,this.vt={_$litType$:this.constructor.resultType,strings:e,values:[]}}}l.directiveName="unsafeHTML",l.resultType=1;var a=(0,r.u$)(l)},"../../node_modules/react-dom/client.js":(n,e,o)=>{var t=o("../../node_modules/react-dom/index.js");e.createRoot=t.createRoot,e.hydrateRoot=t.hydrateRoot},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(n,e,o)=>{/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t=o("../../node_modules/react/index.js"),r=Symbol.for("react.element"),l=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function s(n,e,o){var t,l={},s=null,d=null;for(t in void 0!==o&&(s=""+o),void 0!==e.key&&(s=""+e.key),void 0!==e.ref&&(d=e.ref),e)a.call(e,t)&&!c.hasOwnProperty(t)&&(l[t]=e[t]);if(n&&n.defaultProps)for(t in e=n.defaultProps)void 0===l[t]&&(l[t]=e[t]);return{$$typeof:r,type:n,key:s,ref:d,props:l,_owner:i.current}}e.Fragment=l,e.jsx=s,e.jsxs=s},"../../node_modules/react/jsx-runtime.js":(n,e,o)=>{n.exports=o("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../libs/common/utilities/src/constants/index.ts":(n,e,o)=>{o.d(e,{J3:()=>t.J3,aK:()=>t.aK,qm:()=>t.qm});var t=o("../../libs/common/utilities/src/constants/constants.ts")},"../../libs/components/src/next/button/vl-button.component.ts":(n,e,o)=>{o.d(e,{Y:()=>y});var t=o("../../libs/common/utilities/src/index.ts"),r=o("../../libs/common/utilities/src/css/global-styles-decorator.ts"),l=o("../../libs/common/utilities/src/css/icon/icon.css.ts"),a=o("../../node_modules/lit/index.js"),i=o("../../node_modules/lit/directives/class-map.js"),c=o("../../libs/common/utilities/src/css/mixin/media-queries.mixin.css.ts"),s=o("../../libs/common/utilities/src/css/mixin/outline.mixin.css.ts");let d="0.2rem",u="0.1rem",g=`calc(${d} - ${u})`,m="waving-light",b=(0,a.AH)`
    /* Importeer loading animation, moet op dit niveau geïmporteerd worden. */
    ${((n,e)=>(0,a.AH)`
    @keyframes ${(0,a.iz)(n)} {
        0% {
            box-shadow: 10px -0px ${(0,a.iz)(e)}, 20px -0px ${(0,a.iz)(e)}, 30px 0px ${(0,a.iz)(e)};
        }

        10% {
            box-shadow: 10px -3px ${(0,a.iz)(e)}, 20px -0px ${(0,a.iz)(e)}, 30px -0px ${(0,a.iz)(e)};
        }

        20% {
            box-shadow: 10px -6px ${(0,a.iz)(e)}, 20px -3px ${(0,a.iz)(e)}, 30px -0px ${(0,a.iz)(e)};
        }

        30% {
            box-shadow: 10px -3px ${(0,a.iz)(e)}, 20px -6px ${(0,a.iz)(e)}, 30px -3px ${(0,a.iz)(e)};
        }

        40% {
            box-shadow: 10px -0px ${(0,a.iz)(e)}, 20px -3px ${(0,a.iz)(e)}, 30px -6px ${(0,a.iz)(e)};
        }

        50% {
            box-shadow: 10px -0px ${(0,a.iz)(e)}, 20px -0px ${(0,a.iz)(e)}, 30px -3px ${(0,a.iz)(e)};
        }

        60% {
            box-shadow: 10px -0px ${(0,a.iz)(e)}, 20px -0px ${(0,a.iz)(e)}, 30px -0px ${(0,a.iz)(e)};
        }

        100% {
            box-shadow: 10px -0px ${(0,a.iz)(e)}, 20px -0px ${(0,a.iz)(e)}, 30px -0px ${(0,a.iz)(e)};
        }
    }
`)(m,"var(--vl-action-color--disabled)")}

    button {
        /* Reset styles - gebaseerd op DV mixin > _buttons.scss */
        border-radius: 0;
        appearance: none;
        -webkit-appearance: none; // doesn't work without prefix on Safari iOS11
        border: 0;
        background-color: transparent;
        padding: 0;

        /* Button styles - gebaseerd op DV _button.scss */
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 3.5rem;
        font-family: inherit;
        font-size: var(--vl-font-size--small);
        font-weight: 500;
        padding: var(--vl-spacing--xxsmall) var(--vl-spacing--normal);
        background-color: var(--vl-action-color);
        border: ${(0,a.iz)(d)} solid var(--vl-action-color);
        border-radius: var(--vl-border-radius);
        color: var(--vl-white);
        max-width: 100%;

        ${(0,c.i)((0,a.AH)`
                padding: var(--vl-spacing--xsmall);
            `)}

        &:focus {
            ${(0,s.H)()}
        }

        &:hover {
            border-color: var(--vl-action-color--hover);
            background-color: var(--vl-action-color--hover);
        }

        &:active {
            border-color: var(--vl-action-color--active);
            background-color: var(--vl-action-color--active);
        }

        &.secondary {
            color: var(--vl-action-color);
            background-color: transparent;
            border: ${(0,a.iz)(d)} solid currentColor;
            transition: color 0.2s, border-color 0.2s;

            &:focus {
                color: var(--vl-action-color--active);
            }

            &:hover,
            &:active {
                color: var(--vl-action-color--hover);
            }
        }

        &.tertiary {
            color: var(--vl-action-color);
            background-color: transparent;
            border: ${(0,a.iz)(u)} var(--vl-action-tertiary-border-color) solid;
            transition: background-color 0.2s;
            padding: 0 calc(var(--vl-spacing--normal) + ${(0,a.iz)(g)});

            &:focus {
                color: var(--vl-action-tertiary-color--hover);
                border-color: var(--vl-action-tertiary-border-color);
            }

            &:hover,
            &:active {
                color: var(--vl-action-tertiary-color--hover);
                border-color: var(--vl-action-tertiary-border-color--hover);
                border-width: ${(0,a.iz)(d)};
                padding: 0 var(--vl-spacing--normal);
            }

            ${(0,c.i)((0,a.AH)`
                    padding: calc(
                        var(--vl-spacing--xsmall) + ${(0,a.iz)(g)}
                    );

                    &:hover,
                    &:active {
                        padding: var(--vl-spacing--xsmall);
                    }
                `)}
        }

        &.error {
            background-color: var(--vl-error-color);
            border-color: var(--vl-error-color);

            &:hover,
            &:active {
                background-color: var(--vl-error-color--hover);
                border-color: var(--vl-error-color--hover);
            }

            &.secondary {
                color: var(--vl-error-color);
                background-color: transparent;

                &:hover,
                &:active {
                    color: var(--vl-error-color--hover);
                }
            }

            &.tertiary {
                color: var(--vl-error-color);
                border-color: var(--vl-error-color);
                background-color: transparent;

                &:hover,
                &:active {
                    color: var(--vl-error-color--hover);
                    border-color: var(--vl-error-color--hover);
                }
            }
        }

        &.block {
            display: flex;
            width: 100%;
        }

        &.large {
            padding-top: var(--vl-spacing--small);
            padding-bottom: var(--vl-spacing--small);
            font-size: var(--vl-font-size);

            &.tertiary {
                padding-top: calc(
                    var(--vl-spacing--small) + ${(0,a.iz)(g)}
                );
                padding-bottom: calc(
                    var(--vl-spacing--small) + ${(0,a.iz)(g)}
                );

                &:hover,
                &:active {
                    padding-top: var(--vl-spacing--small);
                    padding-bottom: var(--vl-spacing--small);
                }
            }
        }

        &.wide {
            padding-left: 6rem;
            padding-right: 6rem;

            &.tertiary {
                padding-left: calc(6rem + ${(0,a.iz)(g)});
                padding-right: calc(6rem + ${(0,a.iz)(g)});

                &:hover,
                &:active {
                    padding-left: 6rem;
                    padding-right: 6rem;
                }
            }
        }

        &.narrow {
            padding-left: var(--vl-spacing--xsmall);
            padding-right: var(--vl-spacing--xsmall);

            &.tertiary {
                padding: 0 calc(var(--vl-spacing--xsmall) + ${(0,a.iz)(g)});

                &:hover,
                &:active {
                    padding: 0 var(--vl-spacing--xsmall);
                }

                ${(0,c.i)((0,a.AH)`
                        padding: calc(
                            var(--vl-spacing--xsmall) + ${(0,a.iz)(g)}
                        );

                        &:hover,
                        &:active {
                            padding: var(--vl-spacing--xsmall);
                        }
                    `)}
            }
        }

        &.disabled {
            color: var(--vl-action-color--disabled);
            background-color: var(--vl-action-background-color--disabled);
            border-color: var(--vl-action-background-color--disabled);
            cursor: not-allowed;

            &:focus,
            &:hover,
            &:active {
                color: var(--vl-action-color--disabled);
                background-color: var(--vl-action-background-color--disabled);
                border-color: var(--vl-action-background-color--disabled);
            }
        }

        &.loading {
            color: var(--vl-white);
            background-color: var(--vl-action-background-color--disabled);
            border-color: var(--vl-action-background-color--disabled);
            padding: var(--vl-spacing--xsmall) 8rem var(--vl-spacing--xsmall) 4rem;
            position: relative;

            &::after {
                animation: ${(0,a.iz)(m)} infinite 1s linear;
                content: '';
                display: block;
                position: absolute;
                top: 50%;
                right: 4rem;
                margin-top: -0.2rem;
                margin-right: 3.2rem;
                width: 0.4rem;
                height: 0.4rem;
                background-color: var(--vl-action-background-color--disabled);
                border-radius: 50%;
                box-shadow: 1rem 0 var(--vl-background-color), 2rem 0 var(--vl-background-color),
                    3rem 0 var(--vl-background-color);
            }

            &:focus,
            &:hover,
            &:active {
                color: var(--vl-white);
            }

            &.disabled {
                cursor: not-allowed;
            }
        }

        /* In map styles */
        &.button-in-map {
            &.tertiary {
                background-color: var(--vl-map-background-color);
            }
        }

        /* Icon styles */
        &.icon-only {
            width: 3.5rem;
            padding: 0;
        }
    }
`;var p=o("../../libs/components/src/next/button/vl-button.defaults.ts");class y extends t.jW{static get styles(){return[b,l.A]}static get properties(){return{type:{type:String},disabled:{type:Boolean},error:{type:Boolean},block:{type:Boolean},large:{type:Boolean},wide:{type:Boolean},narrow:{type:Boolean},secondary:{type:Boolean},tertiary:{type:Boolean},loading:{type:Boolean},icon:{type:String},iconPlacement:{type:String,attribute:"icon-placement",reflect:!0},iconOnly:{type:Boolean,attribute:"icon-only"},toggle:{type:Boolean},on:{type:Boolean,reflect:!0,hasChanged:(n,e)=>void 0!==e},controlled:{type:Boolean}}}updated(n){super.updated(n),n.has("on")&&this.toggle&&this.dispatchEvent(new CustomEvent("vl-toggle",{detail:{on:this.on},bubbles:!0,composed:!0})),n.has("iconPlacement")&&!this.iconPlacement&&(this.iconPlacement=p.j.iconPlacement)}render(){let n=null!==this.closest("vl-map"),e=this.tertiary||this.toggle&&!this.on,o={disabled:this.disabled,error:this.error,block:this.block,large:this.large,wide:this.wide,narrow:this.narrow,secondary:this.secondary,tertiary:e,loading:this.loading,"icon-only":this.icon&&this.iconOnly,"button-in-map":n};return(0,a.qy)` <button
            class=${(0,i.H)(o)}
            type=${this.type}
            ?disabled=${this.disabled}
            @click=${this.handleClick}
        >
            ${this.renderIcon(t.aK.BEFORE)}
            <slot></slot>
            ${this.renderIcon(t.aK.AFTER)}
        </button>`}renderIcon(n){if(!this.icon||n!==this.iconPlacement)return a.s6;let e={"vl-icon":!0,[`vl-icon--${this.icon}`]:!0,"vl-icon--right-margin":!this.iconOnly&&"before"===this.iconPlacement,"vl-icon--left-margin":!this.iconOnly&&"after"===this.iconPlacement};return(0,a.qy)`<span class=${(0,i.H)(e)}></span>`}handleClick(n){n.preventDefault(),n.stopPropagation(),this.toggle&&!this.controlled&&(this.on=!this.on),"submit"===this.type&&this.closest("form")?.requestSubmit(),"reset"===this.type&&this.closest("form")?.reset(),this.dispatchEvent(new CustomEvent("vl-click",{bubbles:!0,composed:!0}))}constructor(...n){super(...n),this.type=p.j.type,this.disabled=p.j.disabled,this.error=p.j.error,this.block=p.j.block,this.large=p.j.large,this.wide=p.j.wide,this.narrow=p.j.narrow,this.secondary=p.j.secondary,this.tertiary=p.j.tertiary,this.loading=p.j.loading,this.icon=p.j.icon,this.iconPlacement=p.j.iconPlacement,this.iconOnly=p.j.iconOnly,this.toggle=p.j.toggle,this.on=p.j.on,this.controlled=p.j.controlled}}y=function(n,e,o,t){var r,l=arguments.length,a=l<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,o,t);else for(var i=n.length-1;i>=0;i--)(r=n[i])&&(a=(l<3?r(a):l>3?r(e,o,a):r(e,o))||a);return l>3&&a&&Object.defineProperty(e,o,a),a}([(0,r.n)(),(0,t.M1)("vl-button-next")],y)},"../../libs/components/src/next/button/vl-button.defaults.ts":(n,e,o)=>{o.d(e,{j:()=>t});let t={type:"button",disabled:!1,error:!1,block:!1,large:!1,wide:!1,narrow:!1,secondary:!1,tertiary:!1,loading:!1,icon:"",iconPlacement:"before",iconOnly:!1,toggle:!1,on:!1,controlled:!1}}}]);