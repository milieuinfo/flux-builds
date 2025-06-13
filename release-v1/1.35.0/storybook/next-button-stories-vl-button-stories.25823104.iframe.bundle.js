"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[3532],{"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(n,e,o)=>{o.d(e,{r:()=>m});var t=o("./node_modules/react/index.js"),r=o("./node_modules/react-dom/client.js"),l=new Map,a=({callback:n,children:e})=>{let o=(0,t.useRef)();return(0,t.useLayoutEffect)(()=>{o.current!==n&&(o.current=n,n())},[n]),e},i=async(n,e)=>{let o=await d(e);return new Promise(e=>{o.render(t.createElement(a,{callback:()=>e(null)},n))})},c=(n,e)=>{let o=l.get(n);o&&(o.unmount(),l.delete(n))},d=async n=>{let e=l.get(n);return e||(e=r.createRoot(n),l.set(n,e)),e},s=o("./node_modules/@storybook/blocks/dist/index.mjs"),u={code:s.bD,a:s.Ct,...s.lO},g=class extends t.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(n){let{showException:e}=this.props;e(n)}render(){let{hasError:n}=this.state,{children:e}=this.props;return n?null:t.createElement(t.Fragment,null,e)}},m=class{constructor(){this.render=async(n,e,r)=>{let l={...u,...e?.components},a=s.WI;return new Promise((c,d)=>{o.e(9506).then(o.bind(o,"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:o})=>i(t.createElement(g,{showException:d,key:Math.random()},t.createElement(o,{components:l},t.createElement(a,{context:n,docsParameter:e}))),r)).then(()=>c())})},this.unmount=n=>{c(n)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(n,e,o)=>{o.d(e,{$4:()=>t.$4,Ed:()=>t.Ed,Hw:()=>t.Hw,Uh:()=>t.Uh,Xz:()=>t.Xz,Z$:()=>t.Z$,h_:()=>t.h_}),o("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var t=o("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(n,e,o)=>{o.d(e,{NF:()=>l,Zo:()=>c,ah:()=>a,pC:()=>r});var t=o("./node_modules/react/index.js");let r=t.createContext({});function l(n){return function(e){let o=a(e.components);return t.createElement(n,{...e,allComponents:o})}}function a(n){let e=t.useContext(r);return t.useMemo(()=>"function"==typeof n?n(e):{...e,...n},[e,n])}let i={};function c({components:n,children:e,disableParentContext:o}){let l;return l=o?"function"==typeof n?n({}):n||i:a(n),t.createElement(r.Provider,{value:l},e)}},"./libs/components/src/next/button/stories/vl-button.stories.ts":(n,e,o)=>{o.r(e),o.d(e,{ButtonBlock:()=>k,ButtonDisabled:()=>x,ButtonError:()=>f,ButtonIcon:()=>O,ButtonIconOnly:()=>B,ButtonLarge:()=>w,ButtonLoading:()=>S,ButtonNarrow:()=>T,ButtonPrimary:()=>v,ButtonSecondary:()=>$,ButtonTertiary:()=>h,ButtonToggle:()=>V,ButtonWide:()=>j,__namedExportsOrder:()=>E,default:()=>p});var t=o("./libs/common/storybook/src/index.ts"),r=o("./libs/components/src/next/button/vl-button.component.ts"),l=o("./node_modules/@storybook/addon-actions/dist/index.mjs"),a=o("./libs/common/utilities/src/index.ts");let i={...t._O,...r.O,defaultSlot:"",onVlClick:(0,l.aD)("vl-click"),onVlToggle:(0,l.aD)("vl-toggle")},c={...(0,t.Wp)(!0),type:{name:"type",description:"Het type van de button.",table:{type:{summary:t.vK.STRING},category:t.aA.ATTRIBUTES,defaultValue:{summary:i.type}}},disabled:{name:"disabled",description:"Duidt aan dat de button uitgeschakeld is.",table:{type:{summary:t.vK.BOOLEAN},category:t.aA.ATTRIBUTES,defaultValue:{summary:i.disabled}}},error:{name:"error",description:"Beeldt de button af als een error button.",table:{type:{summary:t.vK.BOOLEAN},category:t.aA.ATTRIBUTES,defaultValue:{summary:i.error}}},block:{name:"block",description:"Duidt aan dat de button de volledige breedte van zijn parent mag innemen.",table:{type:{summary:t.vK.BOOLEAN},category:t.aA.ATTRIBUTES,defaultValue:{summary:i.block}}},large:{name:"large",description:"Beeldt de button groot af.",table:{type:{summary:t.vK.BOOLEAN},category:t.aA.ATTRIBUTES,defaultValue:{summary:i.large}}},wide:{name:"wide",description:"Beeldt de button breed af.",table:{type:{summary:t.vK.BOOLEAN},category:t.aA.ATTRIBUTES,defaultValue:{summary:i.wide}}},narrow:{name:"narrow",description:"Beeldt de button smal af.",table:{type:{summary:t.vK.BOOLEAN},category:t.aA.ATTRIBUTES,defaultValue:{summary:i.narrow}}},secondary:{name:"secondary",description:"Beeldt de button af als een secondary button.",table:{type:{summary:t.vK.BOOLEAN},category:t.aA.ATTRIBUTES,defaultValue:{summary:i.secondary}}},tertiary:{name:"tertiary",description:"Beeldt de button af als een tertiary button.",table:{type:{summary:t.vK.BOOLEAN},category:t.aA.ATTRIBUTES,defaultValue:{summary:i.tertiary}}},loading:{name:"loading",description:"Beeldt de button af als een loading button.<br/>We raden aan dit enkel te gebruiken voor primary buttons.",table:{type:{summary:t.vK.BOOLEAN},category:t.aA.ATTRIBUTES,defaultValue:{summary:i.loading}}},icon:{name:"icon",description:"Beeldt een icoon af in de button.<br/>Standaard wordt dit icoon voor de tekst afgebeeld.",table:{type:{summary:t.vK.STRING},category:t.aA.ATTRIBUTES,defaultValue:{summary:i.icon}}},iconPlacement:{name:"icon-placement",description:"De positie van het icoon ten opzichte van de tekst.",control:{type:t.Hy.SELECT},options:Object.values(a.T1),table:{type:{summary:(0,t.G_)(Object.values(a.T1))},category:t.aA.ATTRIBUTES,defaultValue:{summary:i.iconPlacement}}},iconOnly:{name:"icon-only",description:"Beeldt de button correct af als er enkel een icoon is en geen tekst.<br/>Te gebruiken in combinatie met het `icon` attribuut.",table:{type:{summary:t.vK.BOOLEAN},category:t.aA.ATTRIBUTES,defaultValue:{summary:i.iconOnly}}},toggle:{name:"toggle",description:"Beeldt de button af als een toggle button.",table:{type:{summary:t.vK.BOOLEAN},category:t.aA.ATTRIBUTES,defaultValue:{summary:i.toggle}}},on:{name:"on",description:"Duidt aan dat de toggle button aan staat.<br>Te gebruiken in combinatie met het `toggle` attribuut.",table:{type:{summary:t.vK.BOOLEAN},category:t.aA.ATTRIBUTES,defaultValue:{summary:i.on}}},controlled:{name:"controlled",description:"Duidt aan dat de state van de toggle button gecontroleerd wordt door een parent component.<br>De button zal zijn eigen `on` attribuut niet veranderen.<br>Te gebruiken in combinatie met het `toggle` attribuut.",table:{type:{summary:t.vK.BOOLEAN},category:t.aA.ATTRIBUTES,defaultValue:{summary:i.controlled}}},defaultSlot:{name:"[default]",description:"De content van de button.",table:{type:{summary:t.vK.HTML},category:t.aA.SLOTS,defaultValue:{summary:i.defaultSlot}}},onVlClick:{name:"vl-click",description:"Event dat afgevuurd wordt bij het klikken op de button.",table:{category:t.aA.EVENTS}},onVlToggle:{name:"vl-toggle",description:"Event dat afgevuurd wordt als het `on` attribuut van de button verandert.",table:{type:{summary:"{ on: boolean }"},category:t.aA.EVENTS}}};var d=o("./node_modules/lit/index.js"),s=o("./node_modules/lit/directives/unsafe-html.js");o("./node_modules/react/index.js");var u=o("./node_modules/react/jsx-runtime.js"),g=o("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),m=o("./node_modules/@storybook/addon-docs/dist/index.mjs");function b(n){let e=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",h3:"h3"},(0,g.ah)(),n.components);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(e.h1,{id:"button---next",children:"Button - next"}),"\n",(0,u.jsxs)(e.p,{children:["Gebruik de ",(0,u.jsx)(e.code,{children:"button-next"})," component om een button af te beelden op een pagina."]}),"\n",(0,u.jsxs)(e.p,{children:["Dit component is de volgende versie van de ",(0,u.jsx)(e.a,{href:"/docs/elements-button-button--documentatie",children:"vl-button"})," component."]}),"\n",(0,u.jsx)(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,u.jsx)(e.pre,{children:(0,u.jsx)(e.code,{className:"language-js",children:"import { VlButtonComponent } from '@domg-wc/components/next/button';\n"})}),"\n",(0,u.jsx)(e.pre,{children:(0,u.jsx)(e.code,{className:"language-html",children:"<vl-button-next></vl-button-next>\n"})}),"\n",(0,u.jsx)(m.Xz,{of:v}),"\n",(0,u.jsx)(e.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,u.jsx)(m.Ed,{of:v}),"\n",(0,u.jsx)(e.h2,{id:"varianten",children:"Varianten"}),"\n",(0,u.jsx)(e.h3,{id:"secondary",children:"Secondary"}),"\n",(0,u.jsx)(e.p,{children:"Gebruik een secondary button om een 1 of meerdere buttons af te beelden in combinatie met een primary button."}),"\n",(0,u.jsx)(m.Xz,{of:$}),"\n",(0,u.jsx)(e.h3,{id:"tertiary",children:"Tertiary"}),"\n",(0,u.jsxs)(e.p,{children:["Gebruik een tertiary button om een 1 of meerdere buttons af te beelden in combinatie met een primary button.",(0,u.jsx)("br",{}),"\nEen tertiary button is subtieler dan een secondary button."]}),"\n",(0,u.jsx)(m.Xz,{of:h}),"\n",(0,u.jsx)(e.h3,{id:"disabled",children:"Disabled"}),"\n",(0,u.jsx)(e.p,{children:"Gebruik een disabled button om aan te tonen dat een actie niet uitgevoerd kan worden."}),"\n",(0,u.jsx)(m.Xz,{of:x}),"\n",(0,u.jsx)(e.h3,{id:"error",children:"Error"}),"\n",(0,u.jsx)(e.p,{children:"Gebruik een error button om de belangrijkheid van een actie aan te tonen."}),"\n",(0,u.jsx)(m.Xz,{of:f}),"\n",(0,u.jsx)(e.h3,{id:"block",children:"Block"}),"\n",(0,u.jsx)(m.Xz,{of:k}),"\n",(0,u.jsx)(e.h3,{id:"large",children:"Large"}),"\n",(0,u.jsx)(m.Xz,{of:w}),"\n",(0,u.jsx)(e.h3,{id:"wide",children:"Wide"}),"\n",(0,u.jsx)(m.Xz,{of:j}),"\n",(0,u.jsx)(e.h3,{id:"narrow",children:"Narrow"}),"\n",(0,u.jsx)(m.Xz,{of:T}),"\n",(0,u.jsx)(e.h3,{id:"loading",children:"Loading"}),"\n",(0,u.jsxs)(e.p,{children:["Gebruik een loading button om aan te tonen dat een actie enige tijd in beslag neemt.",(0,u.jsx)("br",{}),"\nGedurende het uitvoeren van de actie kan je de button als een loading button afbeelden.",(0,u.jsx)("br",{}),"\nWe raden aan een loading button enkel te gebruiken voor primary buttons.",(0,u.jsx)("br",{}),"\nIndien je wil dat de loading button ook disabled is, kan je het ",(0,u.jsx)(e.code,{children:"disabled"})," attribuut in combinatie met het ",(0,u.jsx)(e.code,{children:"loading"})," attribuut gebruiken."]}),"\n",(0,u.jsx)(m.Xz,{of:S}),"\n",(0,u.jsx)(e.h3,{id:"icoon",children:"Icoon"}),"\n",(0,u.jsx)(m.Xz,{of:O}),"\n",(0,u.jsx)(e.h3,{id:"enkel-icoon",children:"Enkel icoon"}),"\n",(0,u.jsx)(m.Xz,{of:B}),"\n",(0,u.jsx)(e.h3,{id:"toggle",children:"Toggle"}),"\n",(0,u.jsxs)(e.p,{children:["Gebruik een toggle button om aan te duiden dat een actie aan of uit staat.",(0,u.jsx)("br",{}),"\nDe button wordt aan- of uitgezet door er op te klikken.",(0,u.jsx)("br",{}),"\nGebruik het ",(0,u.jsx)(e.code,{children:"on"})," attribuut om de button programmatorisch aan- of uit te zetten.",(0,u.jsx)("br",{}),"\nGebruik het ",(0,u.jsx)(e.code,{children:"controlled"})," attribuut als je wil dat de button zich niet zelf aan- of uitzet, gebruik dan het ",(0,u.jsx)(e.code,{children:"on"})," attribuut om de button aan- of uit te zetten."]}),"\n",(0,u.jsx)(m.Xz,{of:V}),"\n",(0,u.jsx)(e.h2,{id:"referenties",children:"Referenties"}),"\n",(0,u.jsx)(e.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,u.jsx)(e.p,{children:(0,u.jsx)(e.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/atoms/vl-ui-button",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Button"})})]})}(0,a.YV)([r.Z]);let p={title:"Components-next/button",tags:["autodocs"],args:i,argTypes:c,parameters:{docs:{page:function(n={}){let{wrapper:e}=Object.assign({},(0,g.ah)(),n.components);return e?(0,u.jsx)(e,Object.assign({},n,{children:(0,u.jsx)(b,n)})):b(n)}}}},y=(0,t.yg)(i,({type:n,disabled:e,error:o,block:t,large:r,wide:l,narrow:a,secondary:i,tertiary:c,loading:u,icon:g,iconPlacement:m,iconOnly:b,toggle:p,on:y,controlled:v,defaultSlot:$,onVlClick:h,onVlToggle:x})=>(0,d.dy)`
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
            ?loading=${u}
            icon=${g}
            icon-placement=${m}
            ?icon-only=${b}
            ?toggle=${p}
            ?on=${y}
            ?controlled=${v}
            @vl-click=${h}
            @vl-toggle=${x}
        >
            ${(0,s.A)($)}
        </vl-button-next>
    `),v=y.bind({});v.storyName="vl-button-next - primary",v.args={defaultSlot:"Klik op mij"};let $=y.bind({});$.storyName="vl-button-next - secondary",$.args={defaultSlot:"Klik op mij",secondary:!0};let h=y.bind({});h.storyName="vl-button-next - tertiary",h.args={defaultSlot:"Klik op mij",tertiary:!0};let x=y.bind({});x.storyName="vl-button-next - disabled",x.args={defaultSlot:"Klik op mij",disabled:!0};let f=y.bind({});f.storyName="vl-button-next - error",f.args={defaultSlot:"Klik op mij",error:!0};let k=y.bind({});k.storyName="vl-button-next - block",k.args={defaultSlot:"Klik op mij",block:!0};let w=y.bind({});w.storyName="vl-button-next - large",w.args={defaultSlot:"Klik op mij",large:!0};let j=y.bind({});j.storyName="vl-button-next - wide",j.args={defaultSlot:"Klik op mij",wide:!0};let T=y.bind({});T.storyName="vl-button-next - narrow",T.args={defaultSlot:"Klik op mij",narrow:!0};let S=y.bind({});S.storyName="vl-button-next - loading",S.args={defaultSlot:"Klik op mij",loading:!0};let O=y.bind({});O.storyName="vl-button-next - icon",O.args={defaultSlot:"Klik op mij",icon:"location"};let B=y.bind({});B.storyName="vl-button-next - icon only",B.args={icon:"location",iconOnly:!0};let V=y.bind({});V.storyName="vl-button-next - toggle",V.args={defaultSlot:"Klik op mij",toggle:!0},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:"story(buttonArgs, ({\n  type,\n  disabled,\n  error,\n  block,\n  large,\n  wide,\n  narrow,\n  secondary,\n  tertiary,\n  loading,\n  icon,\n  iconPlacement,\n  iconOnly,\n  toggle,\n  on,\n  controlled,\n  defaultSlot,\n  onVlClick,\n  onVlToggle\n}) => html`\n        <vl-button-next\n            type=${type}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?block=${block}\n            ?large=${large}\n            ?wide=${wide}\n            ?narrow=${narrow}\n            ?secondary=${secondary}\n            ?tertiary=${tertiary}\n            ?loading=${loading}\n            icon=${icon}\n            icon-placement=${iconPlacement}\n            ?icon-only=${iconOnly}\n            ?toggle=${toggle}\n            ?on=${on}\n            ?controlled=${controlled}\n            @vl-click=${onVlClick}\n            @vl-toggle=${onVlToggle}\n        >\n            ${unsafeHTML(defaultSlot)}\n        </vl-button-next>\n    `)",...v.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:"story(buttonArgs, ({\n  type,\n  disabled,\n  error,\n  block,\n  large,\n  wide,\n  narrow,\n  secondary,\n  tertiary,\n  loading,\n  icon,\n  iconPlacement,\n  iconOnly,\n  toggle,\n  on,\n  controlled,\n  defaultSlot,\n  onVlClick,\n  onVlToggle\n}) => html`\n        <vl-button-next\n            type=${type}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?block=${block}\n            ?large=${large}\n            ?wide=${wide}\n            ?narrow=${narrow}\n            ?secondary=${secondary}\n            ?tertiary=${tertiary}\n            ?loading=${loading}\n            icon=${icon}\n            icon-placement=${iconPlacement}\n            ?icon-only=${iconOnly}\n            ?toggle=${toggle}\n            ?on=${on}\n            ?controlled=${controlled}\n            @vl-click=${onVlClick}\n            @vl-toggle=${onVlToggle}\n        >\n            ${unsafeHTML(defaultSlot)}\n        </vl-button-next>\n    `)",...$.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"story(buttonArgs, ({\n  type,\n  disabled,\n  error,\n  block,\n  large,\n  wide,\n  narrow,\n  secondary,\n  tertiary,\n  loading,\n  icon,\n  iconPlacement,\n  iconOnly,\n  toggle,\n  on,\n  controlled,\n  defaultSlot,\n  onVlClick,\n  onVlToggle\n}) => html`\n        <vl-button-next\n            type=${type}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?block=${block}\n            ?large=${large}\n            ?wide=${wide}\n            ?narrow=${narrow}\n            ?secondary=${secondary}\n            ?tertiary=${tertiary}\n            ?loading=${loading}\n            icon=${icon}\n            icon-placement=${iconPlacement}\n            ?icon-only=${iconOnly}\n            ?toggle=${toggle}\n            ?on=${on}\n            ?controlled=${controlled}\n            @vl-click=${onVlClick}\n            @vl-toggle=${onVlToggle}\n        >\n            ${unsafeHTML(defaultSlot)}\n        </vl-button-next>\n    `)",...h.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"story(buttonArgs, ({\n  type,\n  disabled,\n  error,\n  block,\n  large,\n  wide,\n  narrow,\n  secondary,\n  tertiary,\n  loading,\n  icon,\n  iconPlacement,\n  iconOnly,\n  toggle,\n  on,\n  controlled,\n  defaultSlot,\n  onVlClick,\n  onVlToggle\n}) => html`\n        <vl-button-next\n            type=${type}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?block=${block}\n            ?large=${large}\n            ?wide=${wide}\n            ?narrow=${narrow}\n            ?secondary=${secondary}\n            ?tertiary=${tertiary}\n            ?loading=${loading}\n            icon=${icon}\n            icon-placement=${iconPlacement}\n            ?icon-only=${iconOnly}\n            ?toggle=${toggle}\n            ?on=${on}\n            ?controlled=${controlled}\n            @vl-click=${onVlClick}\n            @vl-toggle=${onVlToggle}\n        >\n            ${unsafeHTML(defaultSlot)}\n        </vl-button-next>\n    `)",...x.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"story(buttonArgs, ({\n  type,\n  disabled,\n  error,\n  block,\n  large,\n  wide,\n  narrow,\n  secondary,\n  tertiary,\n  loading,\n  icon,\n  iconPlacement,\n  iconOnly,\n  toggle,\n  on,\n  controlled,\n  defaultSlot,\n  onVlClick,\n  onVlToggle\n}) => html`\n        <vl-button-next\n            type=${type}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?block=${block}\n            ?large=${large}\n            ?wide=${wide}\n            ?narrow=${narrow}\n            ?secondary=${secondary}\n            ?tertiary=${tertiary}\n            ?loading=${loading}\n            icon=${icon}\n            icon-placement=${iconPlacement}\n            ?icon-only=${iconOnly}\n            ?toggle=${toggle}\n            ?on=${on}\n            ?controlled=${controlled}\n            @vl-click=${onVlClick}\n            @vl-toggle=${onVlToggle}\n        >\n            ${unsafeHTML(defaultSlot)}\n        </vl-button-next>\n    `)",...f.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:"story(buttonArgs, ({\n  type,\n  disabled,\n  error,\n  block,\n  large,\n  wide,\n  narrow,\n  secondary,\n  tertiary,\n  loading,\n  icon,\n  iconPlacement,\n  iconOnly,\n  toggle,\n  on,\n  controlled,\n  defaultSlot,\n  onVlClick,\n  onVlToggle\n}) => html`\n        <vl-button-next\n            type=${type}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?block=${block}\n            ?large=${large}\n            ?wide=${wide}\n            ?narrow=${narrow}\n            ?secondary=${secondary}\n            ?tertiary=${tertiary}\n            ?loading=${loading}\n            icon=${icon}\n            icon-placement=${iconPlacement}\n            ?icon-only=${iconOnly}\n            ?toggle=${toggle}\n            ?on=${on}\n            ?controlled=${controlled}\n            @vl-click=${onVlClick}\n            @vl-toggle=${onVlToggle}\n        >\n            ${unsafeHTML(defaultSlot)}\n        </vl-button-next>\n    `)",...k.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:"story(buttonArgs, ({\n  type,\n  disabled,\n  error,\n  block,\n  large,\n  wide,\n  narrow,\n  secondary,\n  tertiary,\n  loading,\n  icon,\n  iconPlacement,\n  iconOnly,\n  toggle,\n  on,\n  controlled,\n  defaultSlot,\n  onVlClick,\n  onVlToggle\n}) => html`\n        <vl-button-next\n            type=${type}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?block=${block}\n            ?large=${large}\n            ?wide=${wide}\n            ?narrow=${narrow}\n            ?secondary=${secondary}\n            ?tertiary=${tertiary}\n            ?loading=${loading}\n            icon=${icon}\n            icon-placement=${iconPlacement}\n            ?icon-only=${iconOnly}\n            ?toggle=${toggle}\n            ?on=${on}\n            ?controlled=${controlled}\n            @vl-click=${onVlClick}\n            @vl-toggle=${onVlToggle}\n        >\n            ${unsafeHTML(defaultSlot)}\n        </vl-button-next>\n    `)",...w.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:"story(buttonArgs, ({\n  type,\n  disabled,\n  error,\n  block,\n  large,\n  wide,\n  narrow,\n  secondary,\n  tertiary,\n  loading,\n  icon,\n  iconPlacement,\n  iconOnly,\n  toggle,\n  on,\n  controlled,\n  defaultSlot,\n  onVlClick,\n  onVlToggle\n}) => html`\n        <vl-button-next\n            type=${type}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?block=${block}\n            ?large=${large}\n            ?wide=${wide}\n            ?narrow=${narrow}\n            ?secondary=${secondary}\n            ?tertiary=${tertiary}\n            ?loading=${loading}\n            icon=${icon}\n            icon-placement=${iconPlacement}\n            ?icon-only=${iconOnly}\n            ?toggle=${toggle}\n            ?on=${on}\n            ?controlled=${controlled}\n            @vl-click=${onVlClick}\n            @vl-toggle=${onVlToggle}\n        >\n            ${unsafeHTML(defaultSlot)}\n        </vl-button-next>\n    `)",...j.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:"story(buttonArgs, ({\n  type,\n  disabled,\n  error,\n  block,\n  large,\n  wide,\n  narrow,\n  secondary,\n  tertiary,\n  loading,\n  icon,\n  iconPlacement,\n  iconOnly,\n  toggle,\n  on,\n  controlled,\n  defaultSlot,\n  onVlClick,\n  onVlToggle\n}) => html`\n        <vl-button-next\n            type=${type}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?block=${block}\n            ?large=${large}\n            ?wide=${wide}\n            ?narrow=${narrow}\n            ?secondary=${secondary}\n            ?tertiary=${tertiary}\n            ?loading=${loading}\n            icon=${icon}\n            icon-placement=${iconPlacement}\n            ?icon-only=${iconOnly}\n            ?toggle=${toggle}\n            ?on=${on}\n            ?controlled=${controlled}\n            @vl-click=${onVlClick}\n            @vl-toggle=${onVlToggle}\n        >\n            ${unsafeHTML(defaultSlot)}\n        </vl-button-next>\n    `)",...T.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"story(buttonArgs, ({\n  type,\n  disabled,\n  error,\n  block,\n  large,\n  wide,\n  narrow,\n  secondary,\n  tertiary,\n  loading,\n  icon,\n  iconPlacement,\n  iconOnly,\n  toggle,\n  on,\n  controlled,\n  defaultSlot,\n  onVlClick,\n  onVlToggle\n}) => html`\n        <vl-button-next\n            type=${type}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?block=${block}\n            ?large=${large}\n            ?wide=${wide}\n            ?narrow=${narrow}\n            ?secondary=${secondary}\n            ?tertiary=${tertiary}\n            ?loading=${loading}\n            icon=${icon}\n            icon-placement=${iconPlacement}\n            ?icon-only=${iconOnly}\n            ?toggle=${toggle}\n            ?on=${on}\n            ?controlled=${controlled}\n            @vl-click=${onVlClick}\n            @vl-toggle=${onVlToggle}\n        >\n            ${unsafeHTML(defaultSlot)}\n        </vl-button-next>\n    `)",...S.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:"story(buttonArgs, ({\n  type,\n  disabled,\n  error,\n  block,\n  large,\n  wide,\n  narrow,\n  secondary,\n  tertiary,\n  loading,\n  icon,\n  iconPlacement,\n  iconOnly,\n  toggle,\n  on,\n  controlled,\n  defaultSlot,\n  onVlClick,\n  onVlToggle\n}) => html`\n        <vl-button-next\n            type=${type}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?block=${block}\n            ?large=${large}\n            ?wide=${wide}\n            ?narrow=${narrow}\n            ?secondary=${secondary}\n            ?tertiary=${tertiary}\n            ?loading=${loading}\n            icon=${icon}\n            icon-placement=${iconPlacement}\n            ?icon-only=${iconOnly}\n            ?toggle=${toggle}\n            ?on=${on}\n            ?controlled=${controlled}\n            @vl-click=${onVlClick}\n            @vl-toggle=${onVlToggle}\n        >\n            ${unsafeHTML(defaultSlot)}\n        </vl-button-next>\n    `)",...O.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:"story(buttonArgs, ({\n  type,\n  disabled,\n  error,\n  block,\n  large,\n  wide,\n  narrow,\n  secondary,\n  tertiary,\n  loading,\n  icon,\n  iconPlacement,\n  iconOnly,\n  toggle,\n  on,\n  controlled,\n  defaultSlot,\n  onVlClick,\n  onVlToggle\n}) => html`\n        <vl-button-next\n            type=${type}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?block=${block}\n            ?large=${large}\n            ?wide=${wide}\n            ?narrow=${narrow}\n            ?secondary=${secondary}\n            ?tertiary=${tertiary}\n            ?loading=${loading}\n            icon=${icon}\n            icon-placement=${iconPlacement}\n            ?icon-only=${iconOnly}\n            ?toggle=${toggle}\n            ?on=${on}\n            ?controlled=${controlled}\n            @vl-click=${onVlClick}\n            @vl-toggle=${onVlToggle}\n        >\n            ${unsafeHTML(defaultSlot)}\n        </vl-button-next>\n    `)",...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:"story(buttonArgs, ({\n  type,\n  disabled,\n  error,\n  block,\n  large,\n  wide,\n  narrow,\n  secondary,\n  tertiary,\n  loading,\n  icon,\n  iconPlacement,\n  iconOnly,\n  toggle,\n  on,\n  controlled,\n  defaultSlot,\n  onVlClick,\n  onVlToggle\n}) => html`\n        <vl-button-next\n            type=${type}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?block=${block}\n            ?large=${large}\n            ?wide=${wide}\n            ?narrow=${narrow}\n            ?secondary=${secondary}\n            ?tertiary=${tertiary}\n            ?loading=${loading}\n            icon=${icon}\n            icon-placement=${iconPlacement}\n            ?icon-only=${iconOnly}\n            ?toggle=${toggle}\n            ?on=${on}\n            ?controlled=${controlled}\n            @vl-click=${onVlClick}\n            @vl-toggle=${onVlToggle}\n        >\n            ${unsafeHTML(defaultSlot)}\n        </vl-button-next>\n    `)",...V.parameters?.docs?.source}}};let E=["ButtonPrimary","ButtonSecondary","ButtonTertiary","ButtonDisabled","ButtonError","ButtonBlock","ButtonLarge","ButtonWide","ButtonNarrow","ButtonLoading","ButtonIcon","ButtonIconOnly","ButtonToggle"]},"./node_modules/lit-html/directive.js":(n,e,o)=>{o.d(e,{XM:()=>r,Xe:()=>l,pX:()=>t});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},r=n=>function(){for(var e=arguments.length,o=Array(e),t=0;t<e;t++)o[t]=arguments[t];return{_$litDirective$:n,values:o}};class l{constructor(n){}get _$AU(){return this._$AM._$AU}_$AT(n,e,o){this._$Ct=n,this._$AM=e,this._$Ci=o}_$AS(n,e){return this.update(n,e)}update(n,e){return this.render(...e)}}},"./node_modules/lit/directives/class-map.js":(n,e,o)=>{o.d(e,{$:()=>l});var t=o("./node_modules/lit-html/lit-html.js"),r=o("./node_modules/lit-html/directive.js"),l=(0,r.XM)(class extends r.Xe{constructor(n){var e;if(super(n),n.type!==r.pX.ATTRIBUTE||"class"!==n.name||(null===(e=n.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(n){return" "+Object.keys(n).filter(e=>n[e]).join(" ")+" "}update(n,e){var[o]=e;if(void 0===this.it){for(var r in this.it=new Set,void 0!==n.strings&&(this.st=new Set(n.strings.join(" ").split(/\s/).filter(n=>""!==n))),o)o[r]&&!(null!==(c=this.st)&&void 0!==c&&c.has(r))&&this.it.add(r);return this.render(o)}var l=n.element.classList;for(var a of this.it)a in o||(l.remove(a),this.it.delete(a));for(var i in o){var c,d,s=!!o[i];s===this.it.has(i)||(null===(d=this.st)||void 0===d?void 0:d.has(i))||(s?(l.add(i),this.it.add(i)):(l.remove(i),this.it.delete(i)))}return t.Jb}})},"./node_modules/lit/directives/unsafe-html.js":(n,e,o)=>{o.d(e,{A:()=>a});var t=o("./node_modules/lit-html/lit-html.js"),r=o("./node_modules/lit-html/directive.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class l extends r.Xe{constructor(n){if(super(n),this.et=t.Ld,n.type!==r.pX.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(n){if(n===t.Ld||null==n)return this.vt=void 0,this.et=n;if(n===t.Jb)return n;if("string"!=typeof n)throw Error(this.constructor.directiveName+"() called with a non-string value");if(n===this.et)return this.vt;this.et=n;var e=[n];return e.raw=e,this.vt={_$litType$:this.constructor.resultType,strings:e,values:[]}}}l.directiveName="unsafeHTML",l.resultType=1;var a=(0,r.XM)(l)},"./node_modules/react-dom/client.js":(n,e,o)=>{var t=o("./node_modules/react-dom/index.js");e.createRoot=t.createRoot,e.hydrateRoot=t.hydrateRoot},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(n,e,o)=>{/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t=o("./node_modules/react/index.js"),r=Symbol.for("react.element"),l=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(n,e,o){var t,l={},d=null,s=null;for(t in void 0!==o&&(d=""+o),void 0!==e.key&&(d=""+e.key),void 0!==e.ref&&(s=e.ref),e)a.call(e,t)&&!c.hasOwnProperty(t)&&(l[t]=e[t]);if(n&&n.defaultProps)for(t in e=n.defaultProps)void 0===l[t]&&(l[t]=e[t]);return{$$typeof:r,type:n,key:d,ref:s,props:l,_owner:i.current}}e.Fragment=l,e.jsx=d,e.jsxs=d},"./node_modules/react/jsx-runtime.js":(n,e,o)=>{n.exports=o("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./libs/components/src/next/button/vl-button.component.ts":(n,e,o)=>{let t;o.d(e,{Z:()=>v,O:()=>y});var r=o("./node_modules/lit/index.js"),l=o("./libs/common/utilities/src/css/mixin/media-queries.mixin.css.ts"),a=o("./libs/common/utilities/src/css/mixin/outline.mixin.css.ts");let i="0.2rem",c="0.1rem",d=`calc(${i} - ${c})`,s="waving-light",u=(0,r.iv)`
    /* Importeer loading animation, moet op dit niveau geïmporteerd worden. */
    ${(t="var(--vl-action-color--disabled)",(0,r.iv)`
    @keyframes ${(0,r.$m)(s)} {
        0% {
            box-shadow: 10px -0px ${(0,r.$m)(t)}, 20px -0px ${(0,r.$m)(t)}, 30px 0px ${(0,r.$m)(t)};
        }

        10% {
            box-shadow: 10px -3px ${(0,r.$m)(t)}, 20px -0px ${(0,r.$m)(t)}, 30px -0px ${(0,r.$m)(t)};
        }

        20% {
            box-shadow: 10px -6px ${(0,r.$m)(t)}, 20px -3px ${(0,r.$m)(t)}, 30px -0px ${(0,r.$m)(t)};
        }

        30% {
            box-shadow: 10px -3px ${(0,r.$m)(t)}, 20px -6px ${(0,r.$m)(t)}, 30px -3px ${(0,r.$m)(t)};
        }

        40% {
            box-shadow: 10px -0px ${(0,r.$m)(t)}, 20px -3px ${(0,r.$m)(t)}, 30px -6px ${(0,r.$m)(t)};
        }

        50% {
            box-shadow: 10px -0px ${(0,r.$m)(t)}, 20px -0px ${(0,r.$m)(t)}, 30px -3px ${(0,r.$m)(t)};
        }

        60% {
            box-shadow: 10px -0px ${(0,r.$m)(t)}, 20px -0px ${(0,r.$m)(t)}, 30px -0px ${(0,r.$m)(t)};
        }

        100% {
            box-shadow: 10px -0px ${(0,r.$m)(t)}, 20px -0px ${(0,r.$m)(t)}, 30px -0px ${(0,r.$m)(t)};
        }
    }
`)}

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
        border: ${(0,r.$m)(i)} solid var(--vl-action-color);
        border-radius: var(--vl-border-radius);
        color: var(--vl-white);
        max-width: 100%;

        ${(0,l.R)((0,r.iv)`
                padding: var(--vl-spacing--xsmall);
            `)}

        &:focus {
            ${(0,a.B)()}
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
            border: ${(0,r.$m)(i)} solid currentColor;
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
            border: ${(0,r.$m)(c)} var(--vl-action-tertiary-border-color) solid;
            transition: background-color 0.2s;
            padding: 0 calc(var(--vl-spacing--normal) + ${(0,r.$m)(d)});

            &:focus {
                color: var(--vl-action-tertiary-color--hover);
                border-color: var(--vl-action-tertiary-border-color);
            }

            &:hover,
            &:active {
                color: var(--vl-action-tertiary-color--hover);
                border-color: var(--vl-action-tertiary-border-color--hover);
                border-width: ${(0,r.$m)(i)};
                padding: 0 var(--vl-spacing--normal);
            }

            ${(0,l.R)((0,r.iv)`
                    padding: calc(
                        var(--vl-spacing--xsmall) + ${(0,r.$m)(d)}
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
                    var(--vl-spacing--small) + ${(0,r.$m)(d)}
                );
                padding-bottom: calc(
                    var(--vl-spacing--small) + ${(0,r.$m)(d)}
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
                padding-left: calc(6rem + ${(0,r.$m)(d)});
                padding-right: calc(6rem + ${(0,r.$m)(d)});

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
                padding: 0 calc(var(--vl-spacing--xsmall) + ${(0,r.$m)(d)});

                &:hover,
                &:active {
                    padding: 0 var(--vl-spacing--xsmall);
                }

                ${(0,l.R)((0,r.iv)`
                        padding: calc(
                            var(--vl-spacing--xsmall) + ${(0,r.$m)(d)}
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
                animation: ${(0,r.$m)(s)} infinite 1s linear;
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
`;var g=o("./libs/common/utilities/src/css/icon/icon.css.ts"),m=o("./libs/common/utilities/src/index.ts"),b=o("./node_modules/lit/directives/class-map.js"),p=o("./libs/common/utilities/src/css/global-styles-decorator.ts");let y={type:"button",disabled:!1,error:!1,block:!1,large:!1,wide:!1,narrow:!1,secondary:!1,tertiary:!1,loading:!1,icon:"",iconPlacement:"before",iconOnly:!1,toggle:!1,on:!1,controlled:!1};class v extends m.fS{static get styles(){return[u,g.Z]}static get properties(){return{type:{type:String},disabled:{type:Boolean},error:{type:Boolean},block:{type:Boolean},large:{type:Boolean},wide:{type:Boolean},narrow:{type:Boolean},secondary:{type:Boolean},tertiary:{type:Boolean},loading:{type:Boolean},icon:{type:String},iconPlacement:{type:String,attribute:"icon-placement",reflect:!0},iconOnly:{type:Boolean,attribute:"icon-only"},toggle:{type:Boolean},on:{type:Boolean,reflect:!0,hasChanged:(n,e)=>void 0!==e},controlled:{type:Boolean}}}updated(n){super.updated(n),n.has("on")&&this.toggle&&this.dispatchEvent(new CustomEvent("vl-toggle",{detail:{on:this.on},bubbles:!0,composed:!0})),n.has("iconPlacement")&&!this.iconPlacement&&(this.iconPlacement=y.iconPlacement)}render(){let n=null!==this.closest("vl-map"),e=this.tertiary||this.toggle&&!this.on,o={disabled:this.disabled,error:this.error,block:this.block,large:this.large,wide:this.wide,narrow:this.narrow,secondary:this.secondary,tertiary:e,loading:this.loading,"icon-only":this.icon&&this.iconOnly,"button-in-map":n};return(0,r.dy)` <button
            class=${(0,b.$)(o)}
            type=${this.type}
            ?disabled=${this.disabled}
            @click=${this.handleClick}
        >
            ${this.renderIcon(m.T1.BEFORE)}
            <slot></slot>
            ${this.renderIcon(m.T1.AFTER)}
        </button>`}renderIcon(n){if(!this.icon||n!==this.iconPlacement)return r.Ld;let e={"vl-icon":!0,[`vl-icon--${this.icon}`]:!0,"vl-icon--right-margin":!this.iconOnly&&"before"===this.iconPlacement,"vl-icon--left-margin":!this.iconOnly&&"after"===this.iconPlacement};return(0,r.dy)`<span class=${(0,b.$)(e)}></span>`}handleClick(n){n.preventDefault(),n.stopPropagation(),this.toggle&&!this.controlled&&(this.on=!this.on),"submit"===this.type&&this.closest("form")?.requestSubmit(),"reset"===this.type&&this.closest("form")?.reset(),this.dispatchEvent(new CustomEvent("vl-click",{bubbles:!0,composed:!0}))}constructor(...n){super(...n),this.type=y.type,this.disabled=y.disabled,this.error=y.error,this.block=y.block,this.large=y.large,this.wide=y.wide,this.narrow=y.narrow,this.secondary=y.secondary,this.tertiary=y.tertiary,this.loading=y.loading,this.icon=y.icon,this.iconPlacement=y.iconPlacement,this.iconOnly=y.iconOnly,this.toggle=y.toggle,this.on=y.on,this.controlled=y.controlled}}v=function(n,e,o,t){var r,l=arguments.length,a=l<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,o,t);else for(var i=n.length-1;i>=0;i--)(r=n[i])&&(a=(l<3?r(a):l>3?r(e,o,a):r(e,o))||a);return l>3&&a&&Object.defineProperty(e,o,a),a}([(0,p.Q)(),(0,m.a6)("vl-button-next")],v)}}]);