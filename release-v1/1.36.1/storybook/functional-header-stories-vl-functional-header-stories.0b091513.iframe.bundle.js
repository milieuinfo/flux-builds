(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[9289],{"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(e,t,a)=>{"use strict";a.d(t,{NF:()=>i,Zo:()=>s,ah:()=>r,pC:()=>l});var n=a("./node_modules/react/index.js");let l=n.createContext({});function i(e){return function(t){let a=r(t.components);return n.createElement(e,{...t,allComponents:a})}}function r(e){let t=n.useContext(l);return n.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let o={};function s({components:e,children:t,disableParentContext:a}){let i;return i=a?"function"==typeof e?e({}):e||o:r(e),n.createElement(l.Provider,{value:i},t)}},"./libs/components/src/functional-header/stories/vl-functional-header.stories.ts":(e,t,a)=>{"use strict";a.r(t),a.d(t,{FunctionalHeaderActions:()=>y,FunctionalHeaderBreadcrumb:()=>T,FunctionalHeaderDefault:()=>g,FunctionalHeaderSlots:()=>S,FunctionalHeaderTabs:()=>L,__namedExportsOrder:()=>$,default:()=>p});var n=a("./libs/common/storybook/src/index.ts"),l=a("./libs/common/utilities/src/index.ts"),i=a("./node_modules/@storybook/addon-actions/dist/index.mjs"),r=a("./node_modules/lit-html/lit-html.js"),o=a("./node_modules/lit/directives/unsafe-html.js"),s=a("./libs/components/src/breadcrumb/vl-breadcrumb-item.component.ts"),d=a("./libs/components/src/breadcrumb/vl-breadcrumb.component.ts"),c=a("./libs/components/src/tabs/vl-tabs.component.ts"),u=a("./libs/components/src/functional-header/vl-functional-header.component.ts");let b={...n._O,back:"Terug",backLink:"document.referrer",disableBackLink:!1,fullWidth:!1,hideBackLink:!1,link:"",marginBottom:"large",subTitle:"",title:"",actionsSlot:"",backSlot:"",backLinkSlot:"",subHeaderSlot:"",subTitleSlot:"",titleSlot:"",topLeftSlot:"",topRightSlot:"",onClickBack:(0,i.aD)("vl-click-back")},m={...(0,n.Wp)(),back:{name:"data-vl-back",description:"Tekst van de terug-link.",table:{type:{summary:n.vK.STRING},category:n.aA.ATTRIBUTES,defaultValue:{summary:b.back}}},backLink:{name:"data-vl-back-link",description:"URL van de terug-link.",table:{type:{summary:n.vK.URL},category:n.aA.ATTRIBUTES,defaultValue:{summary:b.backLink}}},disableBackLink:{name:"data-vl-disable-back-link",description:"Zet de terug-link uit.",table:{type:{summary:n.vK.BOOLEAN},category:n.aA.ATTRIBUTES,defaultValue:{summary:b.disableBackLink}}},fullWidth:{name:"data-vl-full-width",description:"Gebruik de volledige breedte van het scherm.",table:{type:{summary:n.vK.BOOLEAN},category:n.aA.ATTRIBUTES,defaultValue:{summary:b.fullWidth}}},hideBackLink:{name:"data-vl-hide-back-link",description:"Verbergt de terug link.<br>Dit attribuut is niet reactief.",table:{type:{summary:n.vK.BOOLEAN},category:n.aA.ATTRIBUTES,defaultValue:{summary:b.hideBackLink}}},link:{name:"data-vl-link",description:"URL van de titel-link.",table:{type:{summary:n.vK.URL},category:n.aA.ATTRIBUTES,defaultValue:{summary:b.link}}},marginBottom:{name:"data-vl-margin-bottom",description:"De grootte van de margin onder de functional header.",control:{type:n.Hy.SELECT},options:[...Object.keys(l.mt)],table:{type:{summary:(0,n.G_)(Object.keys(l.mt))},category:n.aA.ATTRIBUTES,defaultValue:{summary:b.marginBottom}}},subTitle:{name:"data-vl-sub-title",description:"Tekst van de subtitel.",table:{type:{summary:n.vK.STRING},category:n.aA.ATTRIBUTES,defaultValue:{summary:b.subTitle}}},title:{name:"data-vl-title",description:"Tekst van de titel.",table:{type:{summary:n.vK.STRING},category:n.aA.ATTRIBUTES,defaultValue:{summary:b.title}}},actionsSlot:{name:"actions",description:"Acties die worden afgebeeld in de rechterbovenhoek.",table:{type:{summary:n.vK.HTML},category:n.aA.SLOTS}},backSlot:{name:"back",description:"Wordt afgebeeld ipv de tekst van de terug-link.<br>Kan niet in combinatie gebruikt worden met:<br>• data-vl-back attribuut<br>• back-link slot<br>• sub-header slot",table:{type:{summary:n.vK.HTML},category:n.aA.SLOTS}},backLinkSlot:{name:"back-link",description:"Wordt afgebeeld ipv de terug-link.<br>Kan niet in combinatie gebruikt worden met:<br>• data-vl-back attribuut<br>• data-vl-back-link attribuut<br>• data-vl-disable-back-link attribuutt<br>• back slot<br>• sub-header slot",table:{type:{summary:n.vK.HTML},category:n.aA.SLOTS}},subHeaderSlot:{name:"sub-header",description:"Wordt afgebeeld onder de horizontale lijn.<br>Kan niet in combinatie gebruikt worden met:<br>• data-vl-back attribuut<br>• data-vl-back-link attribuut<br>• data-vl-disable-back-link attribuut<br>• data-vl-sub-title attribuut<br>• back slot<br>• back-link slot<br>• sub-title slot",table:{type:{summary:n.vK.HTML},category:n.aA.SLOTS}},subTitleSlot:{name:"sub-title",description:"Wordt afgebeeld ipv de tekst van de subtitel.<br>Kan niet in combinatie gebruikt worden met:<br>• data-vl-sub-title<br>• sub-header slot",table:{type:{summary:n.vK.HTML},category:n.aA.SLOTS}},titleSlot:{name:"title",description:"Wordt afgebeeld ipv de tekst van de titel.<br>Kan niet in combinatie gebruikt worden met:<br>• data-vl-title",table:{type:{summary:n.vK.HTML},category:n.aA.SLOTS}},topLeftSlot:{name:"top-left",description:"Wordt afgebeeld in de linkerbovenhoek.<br>Kan niet in combinatie gebruikt worden met:<br>• actions slot",table:{type:{summary:n.vK.HTML},category:n.aA.SLOTS}},topRightSlot:{name:"top-right",description:"Wordt afgebeeld in de rechterbovenhoek.<br>Kan niet in combinatie gebruikt worden met:<br>• actions slot",table:{type:{summary:n.vK.HTML},category:n.aA.SLOTS}},onClickBack:{name:"vl-click-back",description:"Afgevuurd na het klikken op de terug-link.",table:{type:{summary:"-"},category:n.aA.EVENTS}}};a("./node_modules/react/index.js");var h=a("./node_modules/react/jsx-runtime.js"),v=a("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),k=a("./node_modules/@storybook/blocks/dist/index.mjs");function f(e){let t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",a:"a"},(0,v.ah)(),e.components);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(t.h1,{id:"functional-header",children:"Functional Header"}),"\n",(0,h.jsxs)(t.p,{children:["Gebruik de ",(0,h.jsx)(t.code,{children:"functional-header"})," component om bovenaan de pagina generieke informatie te tonen zoals bijvoorbeeld\neen titel en acties."]}),"\n",(0,h.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:"language-js",children:"import { VlFunctionalHeaderComponent } from '@domg-lib/components';\n"})}),"\n",(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:"language-html",children:"<vl-functional-header></vl-functional-header>\n"})}),"\n",(0,h.jsx)(k.Xz,{of:g}),"\n",(0,h.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,h.jsx)(k.Ed,{of:g}),"\n",(0,h.jsx)(t.h2,{id:"varianten",children:"Varianten"}),"\n",(0,h.jsx)(t.h3,{id:"met-acties",children:"Met acties"}),"\n",(0,h.jsx)(k.Xz,{of:y}),"\n",(0,h.jsx)(t.h3,{id:"met-slots",children:"Met slots"}),"\n",(0,h.jsx)(k.Xz,{of:S}),"\n",(0,h.jsx)(t.h3,{id:"met-tabs",children:"Met tabs"}),"\n",(0,h.jsxs)(t.p,{children:["Gebruik de ",(0,h.jsx)(t.a,{href:"/docs/components-tabs--tabs-default",children:"vl-tabs"})," component in het ",(0,h.jsx)(t.code,{children:"sub-header"})," slot om tabs af te beelden binnen de ",(0,h.jsx)(t.code,{children:"functional-header"}),"."]}),"\n",(0,h.jsx)(k.Xz,{of:L}),"\n",(0,h.jsx)(t.h3,{id:"met-breadcrumb",children:"Met breadcrumb"}),"\n",(0,h.jsxs)(t.p,{children:["Gebruik de ",(0,h.jsx)(t.a,{href:"/docs/components-breadcrumb--breadcrumb-default",children:"vl-breadcrumb"})," component in het ",(0,h.jsx)(t.code,{children:"sub-title"})," slot om een breadcrumb af te beelden binnen de\n",(0,h.jsx)(t.code,{children:"functional-header"}),".",(0,h.jsx)("br",{})," Plaats het ",(0,h.jsx)(t.code,{children:"data-vl-hide-back-link"})," attribuut om de terug-link te verbergen."]}),"\n",(0,h.jsx)(k.Xz,{of:T}),"\n",(0,h.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,h.jsx)(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,h.jsx)(t.p,{children:(0,h.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-functional-header",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Functional Header"})}),"\n",(0,h.jsx)(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,h.jsx)(t.p,{children:(0,h.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-functional-header--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Functional Header"})}),"\n",(0,h.jsx)(t.p,{children:(0,h.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlFunctionalHeader.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Functional Header"})}),"\n",(0,h.jsx)(t.p,{children:(0,h.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-functional-header.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo  - Functional Header"})})]})}(0,l.YV)([d.c,s.h,u.D,c.z]);let p={title:"Components/functional-header",tags:["autodocs"],args:b,argTypes:m,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,v.ah)(),e.components);return t?(0,h.jsx)(t,Object.assign({},e,{children:(0,h.jsx)(f,e)})):f(e)}}}},_=(0,n.yg)(b,({back:e,backLink:t,disableBackLink:a,fullWidth:n,hideBackLink:l,link:i,marginBottom:s,subTitle:d,title:c,actionsSlot:u,backSlot:b,backLinkSlot:m,subHeaderSlot:h,subTitleSlot:v,titleSlot:k,topLeftSlot:f,topRightSlot:p,onClickBack:_})=>(0,r.dy)`
        <vl-functional-header
            data-vl-back=${e}
            data-vl-back-link=${t}
            ?data-vl-disable-back-link=${a}
            ?data-vl-full-width=${n}
            ?data-vl-hide-back-link=${l}
            data-vl-link=${i}
            data-vl-margin-bottom=${s}
            data-vl-sub-title=${d}
            data-vl-title=${c}
            @vl-click-back=${_}
        >
            ${(0,o.A)(u)}${(0,o.A)(b)}${(0,o.A)(m)}${(0,o.A)(h)}
            ${(0,o.A)(v)}${(0,o.A)(k)}${(0,o.A)(f)}${(0,o.A)(p)}
        </vl-functional-header>
    `),g=_.bind({});g.storyName="vl-functional-header - default",g.args={subTitle:"Voor lager, middelbaar en hoger onderwijs",title:"School- en studietoelagen"};let y=_.bind({});y.storyName="vl-functional-header - actions",y.args={subTitle:"Voor lager, middelbaar en hoger onderwijs",title:"School- en studietoelagen",actionsSlot:`<div slot="actions">
        <a href="#">Actie 1</a>
        <a href="#">Actie 2</a>
    </div>`};let S=_.bind({});S.storyName="vl-functional-header - slots",S.args={backSlot:'<span slot="back">Terug</span>',backLinkSlot:'<a slot="back-link" href="#">Terug</a>',subHeaderSlot:'<span slot="sub-header">Sub header content</span>',subTitleSlot:'<span slot="sub-title">Voor lager, middelbaar en hoger onderwijs</span>',titleSlot:'<span slot="title">School- en studietoelagen</span>',topLeftSlot:'<span slot="top-left">Linkerbovenhoek content</span>',topRightSlot:'<span slot="top-right">Rechterbovenhoek content</span>'};let L=(0,n.yg)(b,({fullWidth:e,marginBottom:t,title:a,link:n})=>(0,r.dy)`
        <vl-functional-header
            ?data-vl-full-width=${e}
            data-vl-link=${n}
            data-vl-margin-bottom=${t}
            data-vl-title=${a}
        >
            <vl-tabs
                slot="sub-header"
                data-vl-disable-links
                data-vl-within-functional-header
                data-vl-active-tab="trein"
                @change=${e=>(0,i.aD)("change")(e.detail)}
            >
                <vl-tabs-pane data-vl-id="trein" data-vl-title="Trein"></vl-tabs-pane>
                <vl-tabs-pane data-vl-id="metro" data-vl-title="Metro, tram en bus"></vl-tabs-pane>
                <vl-tabs-pane data-vl-id="fiets" data-vl-title="Fiets"></vl-tabs-pane>
            </vl-tabs>
        </vl-functional-header>
    `);L.storyName="vl-functional-header - tabs",L.args={title:"School- en studietoelagen"};let T=(0,n.yg)(b,({fullWidth:e,marginBottom:t,title:a,link:n})=>(0,r.dy)`
        <vl-functional-header
            ?data-vl-full-width=${e}
            data-vl-link=${n}
            data-vl-margin-bottom=${t}
            data-vl-title=${a}
            data-vl-hide-back-link
        >
            <vl-breadcrumb slot="sub-title">
                <vl-breadcrumb-item data-vl-href=${"1"}>Vlaanderen Intern</vl-breadcrumb-item>
                <vl-breadcrumb-item data-vl-href=${"2"}>Regelgeving</vl-breadcrumb-item>
                <vl-breadcrumb-item data-vl-href=${"3"}>Webuniversum</vl-breadcrumb-item>
                <vl-breadcrumb-item>Componenten</vl-breadcrumb-item>
            </vl-breadcrumb>
        </vl-functional-header>
    `);T.storyName="vl-functional-header - breadcrumb",T.args={title:"School- en studietoelagen"},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"story(functionalHeaderArgs, ({\n  back,\n  backLink,\n  disableBackLink,\n  fullWidth,\n  hideBackLink,\n  link,\n  marginBottom,\n  subTitle,\n  title,\n  actionsSlot,\n  backSlot,\n  backLinkSlot,\n  subHeaderSlot,\n  subTitleSlot,\n  titleSlot,\n  topLeftSlot,\n  topRightSlot,\n  onClickBack\n}) => html`\n        <vl-functional-header\n            data-vl-back=${back}\n            data-vl-back-link=${backLink}\n            ?data-vl-disable-back-link=${disableBackLink}\n            ?data-vl-full-width=${fullWidth}\n            ?data-vl-hide-back-link=${hideBackLink}\n            data-vl-link=${link}\n            data-vl-margin-bottom=${marginBottom}\n            data-vl-sub-title=${subTitle}\n            data-vl-title=${title}\n            @vl-click-back=${onClickBack}\n        >\n            ${unsafeHTML(actionsSlot)}${unsafeHTML(backSlot)}${unsafeHTML(backLinkSlot)}${unsafeHTML(subHeaderSlot)}\n            ${unsafeHTML(subTitleSlot)}${unsafeHTML(titleSlot)}${unsafeHTML(topLeftSlot)}${unsafeHTML(topRightSlot)}\n        </vl-functional-header>\n    `)",...g.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:"story(functionalHeaderArgs, ({\n  back,\n  backLink,\n  disableBackLink,\n  fullWidth,\n  hideBackLink,\n  link,\n  marginBottom,\n  subTitle,\n  title,\n  actionsSlot,\n  backSlot,\n  backLinkSlot,\n  subHeaderSlot,\n  subTitleSlot,\n  titleSlot,\n  topLeftSlot,\n  topRightSlot,\n  onClickBack\n}) => html`\n        <vl-functional-header\n            data-vl-back=${back}\n            data-vl-back-link=${backLink}\n            ?data-vl-disable-back-link=${disableBackLink}\n            ?data-vl-full-width=${fullWidth}\n            ?data-vl-hide-back-link=${hideBackLink}\n            data-vl-link=${link}\n            data-vl-margin-bottom=${marginBottom}\n            data-vl-sub-title=${subTitle}\n            data-vl-title=${title}\n            @vl-click-back=${onClickBack}\n        >\n            ${unsafeHTML(actionsSlot)}${unsafeHTML(backSlot)}${unsafeHTML(backLinkSlot)}${unsafeHTML(subHeaderSlot)}\n            ${unsafeHTML(subTitleSlot)}${unsafeHTML(titleSlot)}${unsafeHTML(topLeftSlot)}${unsafeHTML(topRightSlot)}\n        </vl-functional-header>\n    `)",...y.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"story(functionalHeaderArgs, ({\n  back,\n  backLink,\n  disableBackLink,\n  fullWidth,\n  hideBackLink,\n  link,\n  marginBottom,\n  subTitle,\n  title,\n  actionsSlot,\n  backSlot,\n  backLinkSlot,\n  subHeaderSlot,\n  subTitleSlot,\n  titleSlot,\n  topLeftSlot,\n  topRightSlot,\n  onClickBack\n}) => html`\n        <vl-functional-header\n            data-vl-back=${back}\n            data-vl-back-link=${backLink}\n            ?data-vl-disable-back-link=${disableBackLink}\n            ?data-vl-full-width=${fullWidth}\n            ?data-vl-hide-back-link=${hideBackLink}\n            data-vl-link=${link}\n            data-vl-margin-bottom=${marginBottom}\n            data-vl-sub-title=${subTitle}\n            data-vl-title=${title}\n            @vl-click-back=${onClickBack}\n        >\n            ${unsafeHTML(actionsSlot)}${unsafeHTML(backSlot)}${unsafeHTML(backLinkSlot)}${unsafeHTML(subHeaderSlot)}\n            ${unsafeHTML(subTitleSlot)}${unsafeHTML(titleSlot)}${unsafeHTML(topLeftSlot)}${unsafeHTML(topRightSlot)}\n        </vl-functional-header>\n    `)",...S.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:'story(functionalHeaderArgs, ({\n  fullWidth,\n  marginBottom,\n  title,\n  link\n}) => html`\n        <vl-functional-header\n            ?data-vl-full-width=${fullWidth}\n            data-vl-link=${link}\n            data-vl-margin-bottom=${marginBottom}\n            data-vl-title=${title}\n        >\n            <vl-tabs\n                slot="sub-header"\n                data-vl-disable-links\n                data-vl-within-functional-header\n                data-vl-active-tab="trein"\n                @change=${(event: CustomEvent) => action(\'change\')(event.detail)}\n            >\n                <vl-tabs-pane data-vl-id="trein" data-vl-title="Trein"></vl-tabs-pane>\n                <vl-tabs-pane data-vl-id="metro" data-vl-title="Metro, tram en bus"></vl-tabs-pane>\n                <vl-tabs-pane data-vl-id="fiets" data-vl-title="Fiets"></vl-tabs-pane>\n            </vl-tabs>\n        </vl-functional-header>\n    `)',...L.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:"story(functionalHeaderArgs, ({\n  fullWidth,\n  marginBottom,\n  title,\n  link\n}) => html`\n        <vl-functional-header\n            ?data-vl-full-width=${fullWidth}\n            data-vl-link=${link}\n            data-vl-margin-bottom=${marginBottom}\n            data-vl-title=${title}\n            data-vl-hide-back-link\n        >\n            <vl-breadcrumb slot=\"sub-title\">\n                <vl-breadcrumb-item data-vl-href=${'1'}>Vlaanderen Intern</vl-breadcrumb-item>\n                <vl-breadcrumb-item data-vl-href=${'2'}>Regelgeving</vl-breadcrumb-item>\n                <vl-breadcrumb-item data-vl-href=${'3'}>Webuniversum</vl-breadcrumb-item>\n                <vl-breadcrumb-item>Componenten</vl-breadcrumb-item>\n            </vl-breadcrumb>\n        </vl-functional-header>\n    `)",...T.parameters?.docs?.source}}};let $=["FunctionalHeaderDefault","FunctionalHeaderActions","FunctionalHeaderSlots","FunctionalHeaderTabs","FunctionalHeaderBreadcrumb"]},"./node_modules/lit-html/directive.js":(e,t,a)=>{"use strict";a.d(t,{XM:()=>l,Xe:()=>i,pX:()=>n});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},l=e=>function(){for(var t=arguments.length,a=Array(t),n=0;n<t;n++)a[n]=arguments[n];return{_$litDirective$:e,values:a}};class i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,a){this._$Ct=e,this._$AM=t,this._$Ci=a}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},"./node_modules/lit/decorators.js":(e,t,a)=>{"use strict";a.d(t,{Mo:()=>n,Cb:()=>o});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let n=e=>(t,a)=>{void 0!==a?a.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};var l=a("./node_modules/@lit/reactive-element/reactive-element.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let i={attribute:!0,type:String,converter:l.Ts,reflect:!1,hasChanged:l.Qu},r=(e=i,t,a)=>{let{kind:n,metadata:l}=a,r=globalThis.litPropertyMetadata.get(l);if(void 0===r&&globalThis.litPropertyMetadata.set(l,r=new Map),r.set(a.name,e),"accessor"===n){let{name:n}=a;return{set(a){let l=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,l,e)},init(t){return void 0!==t&&this.C(n,void 0,e),t}}}if("setter"===n){let{name:n}=a;return function(a){let l=this[n];t.call(this,a),this.requestUpdate(n,l,e)}}throw Error("Unsupported decorator location: "+n)};function o(e){return(t,a)=>"object"==typeof a?r(e,t,a):((e,t,a)=>{let n=t.hasOwnProperty(a);return t.constructor.createProperty(a,n?{...e,wrapped:!0}:e),n?Object.getOwnPropertyDescriptor(t,a):void 0})(e,t,a)}},"./node_modules/lit/directives/unsafe-html.js":(e,t,a)=>{"use strict";a.d(t,{A:()=>r});var n=a("./node_modules/lit-html/lit-html.js"),l=a("./node_modules/lit-html/directive.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class i extends l.Xe{constructor(e){if(super(e),this.et=n.Ld,e.type!==l.pX.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===n.Ld||null==e)return this.vt=void 0,this.et=e;if(e===n.Jb)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;var t=[e];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}}i.directiveName="unsafeHTML",i.resultType=1;var r=(0,l.XM)(i)},"./node_modules/memoizerific sync recursive":e=>{function t(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id="./node_modules/memoizerific sync recursive",e.exports=t},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,a)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=a("./node_modules/react/index.js"),l=Symbol.for("react.element"),i=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,a){var n,i={},d=null,c=null;for(n in void 0!==a&&(d=""+a),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)r.call(t,n)&&!s.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:l,type:e,key:d,ref:c,props:i,_owner:o.current}}t.Fragment=i,t.jsx=d,t.jsxs=d},"./node_modules/react/jsx-runtime.js":(e,t,a)=>{"use strict";e.exports=a("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./libs/components/src/breadcrumb/vl-breadcrumb-item.component.ts":(e,t,a)=>{"use strict";a.d(t,{h:()=>d});var n=a("./node_modules/@domg/govflanders-style/component/index.js"),l=a("./node_modules/@domg/govflanders-style/common/index.js"),i=a("./node_modules/lit/index.js"),r=a("./node_modules/lit/decorators.js"),o=a("./libs/components/src/breadcrumb/vl-breadcrumb.uig-css.ts"),s=a("./libs/common/utilities/src/index.ts");class d extends s.fS{static get properties(){return{href:{type:String,attribute:"data-vl-href",reflect:!0}}}static get styles(){return[l.YN,n.nC,o.Z]}render(){return this.href?(0,i.dy)`
                <a href=${this.href} class="vl-breadcrumb__list__item__cta">
                    <slot></slot>
                </a>
            `:(0,i.dy)`
            <span class="vl-breadcrumb__list__item__cta">
                <slot></slot>
            </span>
        `}constructor(...e){super(...e),this.href=""}}d=function(e,t,a,n){var l,i=arguments.length,r=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,n);else for(var o=e.length-1;o>=0;o--)(l=e[o])&&(r=(i<3?l(r):i>3?l(t,a,r):l(t,a))||r);return i>3&&r&&Object.defineProperty(t,a,r),r}([(0,r.Mo)("vl-breadcrumb-item")],d)},"./libs/components/src/breadcrumb/vl-breadcrumb.component.ts":(e,t,a)=>{"use strict";a.d(t,{c:()=>d});var n=a("./node_modules/@domg/govflanders-style/component/index.js"),l=a("./node_modules/@domg/govflanders-style/common/index.js"),i=a("./node_modules/lit/index.js"),r=a("./node_modules/lit/decorators.js"),o=a("./libs/common/utilities/src/index.ts"),s=a("./libs/components/src/breadcrumb/vl-breadcrumb.uig-css.ts");class d extends o.fS{static get styles(){return[l.YN,n.nC,s.Z]}firstUpdated(){new MutationObserver(()=>{this.requestUpdate()}).observe(this,{subtree:!0,childList:!0})}render(){return(0,i.dy)`
            <nav aria-label="U bent hier: " class="vl-breadcrumb">
                <ol class="vl-breadcrumb__list">
                    ${[...Array.from(this.children)].map((e,t)=>{let a=`item-${t}`;return e.setAttribute("slot",a),(0,i.dy)`
                            <li class="vl-breadcrumb__list__item">
                                <span class="vl-breadcrumb__list__item__separator" aria-hidden="true"></span>
                                <slot name=${a}></slot>
                            </li>
                        `})}
                </ol>
            </nav>
        `}}d=function(e,t,a,n){var l,i=arguments.length,r=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,n);else for(var o=e.length-1;o>=0;o--)(l=e[o])&&(r=(i<3?l(r):i>3?l(t,a,r):l(t,a))||r);return i>3&&r&&Object.defineProperty(t,a,r),r}([(0,r.Mo)("vl-breadcrumb")],d)},"./libs/components/src/breadcrumb/vl-breadcrumb.uig-css.ts":(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var n=a("./node_modules/lit/index.js");let l=(0,n.iv)`
    .vl-breadcrumb__list__item__cta {
        display: flex;
        position: relative;
        top: -1px;
    }

    span.vl-breadcrumb__list__item__cta {
        color: unset;
        cursor: default;
        text-decoration: none;
    }

    span.vl-breadcrumb__list__item__cta:hover {
        text-decoration: none;
    }

    .vl-breadcrumb__list__item__separator {
        justify-content: center;
    }
`},"./libs/components/src/functional-header/vl-functional-header.component.ts":(e,t,a)=>{"use strict";a.d(t,{D:()=>s});var n=a("./libs/common/utilities/src/index.ts"),l=a("./libs/elements/src/index.ts"),i=a("./node_modules/@domg/govflanders-style/component/index.js"),r=a("./node_modules/lit/index.js");let o=(0,r.iv)`
    .uig-functional-header__content {
        display: flex;
        flex-flow: column;
    }

    .uig-functional-header__row {
        display: flex;
        flex-direction: row;
    }

    @media (max-width: 767px) {
        .uig-functional-header__row {
            flex-direction: column;
        }
        .uig-functional-header__top-right {
            padding: 0.5rem 1rem 0 1rem;
        }
    }
    :host(.vl-functional-header--full-width) .vl-layout {
        max-width: 100%;
    }
`;class s extends(0,n.W$)(HTMLElement){static{(0,n.YV)([l.Gi,l.gG])}static get _observedAttributes(){return["back","back-link","disable-back-link","hide-back-link","link","margin-bottom","sub-title","title"]}static get _observedClassAttributes(){return["full-width"]}get _classPrefix(){return"vl-functional-header--"}constructor(){super(`
          <style>
            ${l.CX}
            ${i.kb}
            ${o}
          </style>
          <header class="vl-functional-header">
            <div class="vl-layout">
              <div class="vl-functional-header__row uig-functional-header__row">
                <div class="uig-functional-header__content">
                    <div class="vl-functional-header__content">
                        <slot name="top-left"></slot>
                    </div>
                    <div class="vl-functional-header__content">
                        <h1 class="vl-functional-header__title vl-title vl-title--h1 vl-title--no-space-bottom">
                            <a id="title" class="vl-link vl-link--neutral" tabindex="0">
                                <slot name="title"></slot>
                            </a>
                        </h1>
                    </div>
                </div>
                <div class="uig-functional-header__top-right">
                    <slot name="top-right"></slot>
                </div>
                <div id="actions" class="vl-functional-header__actions">
                    <ul></ul>
                </div>
              </div>
              <div class="vl-functional-header__sub" id="sub-header">
                <slot name="sub-header">
                  <ul class="vl-functional-header__sub-row vl-functional-header__sub-actions">
                      <li id="back-link-container" class="vl-functional-header__sub__action">
                          <slot name="back-link">
                              <a id="back-link" is="vl-link" tabindex="0" href="${document.referrer}">
                                  <span is="vl-icon" data-vl-icon="arrow-left-fat" data-vl-before></span><slot id="back-link-text" name="back"><span>Terug</span></slot>
                              </a>
                          </slot>
                      </li>
                      <li id="sub-title" class="vl-functional-header__sub__action">
                          <slot name="sub-title"></slot>
                      </li>
                  </ul>
                </slot>
              </div>
            </div>
          </header>
        `)}connectedCallback(){super.connectedCallback(),this._observer=this.__observeSlotElements(()=>this.__processSlotElements()),this.__processSlotElements(),this._backLinkElement&&(this._backLinkElement.onclick=e=>this._handleClickBackLink(e))}disconnectedCallback(){this._observer.disconnect()}get _titleElement(){return this._shadow.querySelector("#title")}get _subTitleElement(){return this._shadow.querySelector("#sub-title")}get _backLinkContainer(){return this._shadow.querySelector("#back-link-container")}get _backLinkElement(){return this._shadow.querySelector("#back-link")}get _backLinkTextElement(){return this._backLinkElement.querySelector("#back-link-text")}get _actionsElement(){return this._shadow.querySelector("#actions")}get _subHeaderElement(){return this._shadow.querySelector("#sub-header")}get _defaultSubHeaderElement(){return this._shadow.querySelector("#default-sub-header")}get _actionsListElement(){return this._actionsElement.querySelector("ul")}get _subHeaderListElement(){return this._subHeaderElement.querySelector("ul")}get _subTitleListElements(){return this._subTitleListElement.querySelectorAll("li")}_getActionTemplate(e){return this._template(`
      <li class="vl-functional-header__action">
        <p>${e.outerHTML}</p>
      </li>
    `)}_getSubHeaderTemplate(e){return this._getSubHeaderTemplateWithValue(e.outerHTML)}_getSubHeaderTemplateWithValue(e){return this._template(`<li class="vl-functional-header__sub__action">${e}</li>`)}_titleChangedCallback(e,t){this._titleElement.innerText=t}_subTitleChangedCallback(e,t){this._subTitleElement.innerText=t}_linkChangedCallback(e,t){this._titleElement.href=t}_backChangedCallback(e,t){this._backLinkTextElement.innerText=t}_backLinkChangedCallback(e,t){this._backLinkElement.href=t||document.referrer}_marginBottomChangedCallback(e,t){let a=n.mt[t],l=this._shadow.querySelector(".vl-functional-header");a?l.style.marginBottom=a:l.style.removeProperty("margin-bottom")}_hideBackLinkChangedCallback(e,t){void 0!=t&&this._backLinkContainer?.remove()}_handleClickBackLink(e){this.hasAttribute("disable-back-link")&&e.preventDefault(),this.dispatchEvent(new CustomEvent("vl-click-back",{bubbles:!0,composed:!0}))}set backLinkEventListener(e){this._backLinkEventListener&&this._backLinkElement.removeEventListener("click",this._backLinkEventListener),this._backLinkEventListener=e,this._backLinkElement.addEventListener("click",this._backLinkEventListener)}__processSlotElements(){this.__processSlotActions()}__processSlotSubHeader(){this._subHeaderListElement.innerHTML="";let e=this.querySelector('[slot="sub-header"]');e?([...e.children].map(e=>this._getSubHeaderTemplate(e)).forEach(e=>this._subHeaderListElement.append(e)),this._defaultSubHeaderElement.hidden=!0):this._subHeaderElement.hidden=!0}__processSlotActions(){this._actionsListElement.innerHTML="";let e=this.querySelector('[slot="actions"]');e?[...e.children].map(e=>this._getActionTemplate(e)).forEach(e=>this._actionsListElement.append(e)):this._actionsElement.hidden=!0}__observeSlotElements(e){let t=new MutationObserver(e);return t.observe(this,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),t}}s=function(e,t,a,n){var l,i=arguments.length,r=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,n);else for(var o=e.length-1;o>=0;o--)(l=e[o])&&(r=(i<3?l(r):i>3?l(t,a,r):l(t,a))||r);return i>3&&r&&Object.defineProperty(t,a,r),r}([(0,n.a6)("vl-functional-header")],s)}}]);