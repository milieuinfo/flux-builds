"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[1998],{"./libs/components/src/spotlight/stories/vl-spotlight.stories.ts":(t,e,s)=>{s.r(e),s.d(e,{__namedExportsOrder:()=>m,default:()=>n,spotLightDefault:()=>o,spotlightNoLink:()=>p,spotlightWithContent:()=>c,spotlightWithImage:()=>d,spotlightWithLink:()=>r,spotlightWithSubtitle:()=>u,spotlightWithText:()=>g});var l=s("./node_modules/lit-html/lit-html.js");s("./libs/components/src/spotlight/vl-spotlight.component.ts");var a=s("./libs/components/src/spotlight/vl-spotlight.model.ts"),i=s("./libs/common/storybook/src/index.ts");let n={title:"components/spotlight",tags:["autodocs"],args:{...i._O,link:"",alt:!1,size:a.N.S,imgSrc:"",imgAlt:"",title:"Premies voor renovatie",subtitle:"",text:"",content:""},argTypes:{...(0,i.Wp)(),link:{name:"data-vl-link",description:"De component wordt een link. Door te klikken op de component wordt de gebruiker doorgestuurd naar de link die gezet is in dit attribuut.",table:{type:{summary:i.vK.STRING,required:!1},defaultValue:{summary:""},category:i.aA.ATTRIBUTES}},alt:{name:"data-vl-alt",description:"Geeft de component een alternatieve stijl. De achtergrond wordt grijs.",table:{type:{summary:i.vK.BOOLEAN,required:!1},defaultValue:{summary:!1},category:i.aA.ATTRIBUTES}},size:{name:"data-vl-size",description:"Dit attribuut bepaalt de grootte van de component.",table:{type:{summary:`${a.N.XS} | ${a.N.S} | ${a.N.L}`,required:!1},category:i.aA.ATTRIBUTES,defaultValue:{summary:`${a.N.S}`}},control:{type:"select",options:[a.N.XS,a.N.S,a.N.L]}},imgSrc:{name:"data-vl-img-src",description:"Het path van de image dat getoond moet worden in de spotlight.",table:{type:{summary:i.vK.STRING,required:!1},defaultValue:{summary:""},category:i.aA.ATTRIBUTES}},imgAlt:{name:"data-vl-img-alt",description:"De alternatieve tekst van de image dat getoond moet worden in de spotlight.",table:{type:{summary:i.vK.STRING,required:!1},defaultValue:{summary:""},category:i.aA.ATTRIBUTES}},title:{name:"title",description:"Titel van de spotlight.",table:{type:{summary:i.vK.STRING,required:!1},defaultValue:{summary:""},category:i.aA.SLOTS}},subtitle:{name:"subtitle",description:"Subtitle van de spotlight.",table:{type:{summary:i.vK.STRING,required:!1},defaultValue:{summary:""},category:i.aA.SLOTS}},text:{name:"text",description:"Text van de spotlight.",table:{type:{summary:i.vK.STRING,required:!1},defaultValue:{summary:""},category:i.aA.SLOTS}},content:{name:"content",description:"Content van de spotlight.",table:{type:{summary:i.vK.STRING,required:!1},defaultValue:{summary:""},category:i.aA.SLOTS}}},parameters:{controls:{hideNoControlsWarning:!0}}},o=(({link:t,alt:e,size:s,imgSrc:a,imgAlt:i,title:n,subtitle:o,text:r,content:p})=>(0,l.dy)`
    <vl-spotlight
        data-vl-link=${t}
        ?data-vl-alt=${e}
        data-vl-size=${s}
        data-vl-img-src=${a}
        data-vl-img-alt=${i}
    >
        ${n?(0,l.dy)`<span slot="title"> ${n} </span>`:""}
        ${o?(0,l.dy)`<span slot="subtitle"> ${o} </span>`:""}
        ${r?(0,l.dy)`<span slot="text"> ${r} </span>`:""}
        ${p?(0,l.dy)`<span slot="content"> ${p} </span>`:""}
    </vl-spotlight>
`).bind({});o.storyName="vl-spotlight - default";let r=()=>(0,l.dy)`
    <vl-spotlight data-vl-link="http://www.google.com">
        <span slot="title">
            Premies voor renovatie
            <span class="vl-icon vl-icon--light vl-vi vl-vi-external"></span>
            <span class="vl-u-visually-hidden">Opent in nieuw venster</span>
        </span>
    </vl-spotlight>
`;r.storyName="vl-spotlight - with link";let p=()=>(0,l.dy)`
    <vl-spotlight>
        <span slot="title"> Premies voor renovatie </span>
    </vl-spotlight>
`;p.storyName="vl-spotlight - no link";let c=()=>(0,l.dy)`
    <vl-spotlight data-vl-link="https://google.be" data-vl-alt data-vl-size="${a.N.S}">
        <span slot="title">
            Verslag bestuursvergadering
            <br />
            <br />
            <br />
            <br />
        </span>
        <vl-document slot="content">
            <span slot="type">DOCX</span>
            <span slot="title">document</span>
            <span slot="metadata">DOCX-112kb</span>
        </vl-document>
    </vl-spotlight>
`;c.storyName="vl-spotlight - with content";let g=()=>(0,l.dy)`
    <vl-spotlight data-vl-link="https://google.be">
        <span slot="title">
            Premies voor renovatie
            <span class="vl-icon vl-icon--light vl-vi vl-vi-external"></span>
            <span class="vl-u-visually-hidden">Opent in nieuw venster</span>
        </span>
        <span slot="text"
            >Gaat u bouwen of verbouwen? Investeer in energiebesparende maatregelen en bespaar heel wat op uw
            energiefactuur.</span
        >
    </vl-spotlight>
`;g.storyName="vl-spotlight - with text";let d=()=>(0,l.dy)`
    <vl-spotlight
        data-vl-img-src="//d201gzvprbtpxy.cloudfront.net/sites/default/files/styles/medium/public/images/vla_themateaser_350_dakisolatie.jpg?itok=cKDE21Pe"
        data-vl-img-alt="spotlight image"
    >
        <span slot="title"> Premies voor renovatie </span>
        <span slot="subtitle">Er zijn er verschillende...</span>
        <span slot="text"
            >Gaat u bouwen of verbouwen? Investeer in energiebesparende maatregelen en bespaar heel wat op uw
            energiefactuur.</span
        >
    </vl-spotlight>
`;d.storyName="vl-spotlight - with image";let u=()=>(0,l.dy)`
    <vl-spotlight data-vl-link="https://google.be">
        <span slot="title">Communicatiespecialist te Willebroek - contract 1 jaar</span>
        <span slot="subtitle">Niveau A (universitair diploma)</span>
        <span slot="text">
            <ul class="vl-icon-list">
                <li class="vl-icon-list__item">Waterwegen en Zeekanaal NV in Brussel</li>
                <li class="vl-icon-list__item">Natuur en bos</li>
                <li class="vl-icon-list__item"></li>
            </ul>
        </span>
    </vl-spotlight>
`;u.storyName="vl-spotlight - with subtitle",o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:'({\n  link,\n  alt,\n  size,\n  imgSrc,\n  imgAlt,\n  title,\n  subtitle,\n  text,\n  content\n}: typeof spotlightArgs) => html`\n    <vl-spotlight\n        data-vl-link=${link}\n        ?data-vl-alt=${alt}\n        data-vl-size=${size}\n        data-vl-img-src=${imgSrc}\n        data-vl-img-alt=${imgAlt}\n    >\n        ${title ? html`<span slot="title"> ${title} </span>` : ``}\n        ${subtitle ? html`<span slot="subtitle"> ${subtitle} </span>` : ``}\n        ${text ? html`<span slot="text"> ${text} </span>` : ``}\n        ${content ? html`<span slot="content"> ${content} </span>` : ``}\n    </vl-spotlight>\n`',...o.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:'() => html`\n    <vl-spotlight data-vl-link="http://www.google.com">\n        <span slot="title">\n            Premies voor renovatie\n            <span class="vl-icon vl-icon--light vl-vi vl-vi-external"></span>\n            <span class="vl-u-visually-hidden">Opent in nieuw venster</span>\n        </span>\n    </vl-spotlight>\n`',...r.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:'() => html`\n    <vl-spotlight>\n        <span slot="title"> Premies voor renovatie </span>\n    </vl-spotlight>\n`',...p.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:'() => html`\n    <vl-spotlight data-vl-link="https://google.be" data-vl-alt data-vl-size="${SIZE.S}">\n        <span slot="title">\n            Verslag bestuursvergadering\n            <br />\n            <br />\n            <br />\n            <br />\n        </span>\n        <vl-document slot="content">\n            <span slot="type">DOCX</span>\n            <span slot="title">document</span>\n            <span slot="metadata">DOCX-112kb</span>\n        </vl-document>\n    </vl-spotlight>\n`',...c.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:'() => html`\n    <vl-spotlight data-vl-link="https://google.be">\n        <span slot="title">\n            Premies voor renovatie\n            <span class="vl-icon vl-icon--light vl-vi vl-vi-external"></span>\n            <span class="vl-u-visually-hidden">Opent in nieuw venster</span>\n        </span>\n        <span slot="text"\n            >Gaat u bouwen of verbouwen? Investeer in energiebesparende maatregelen en bespaar heel wat op uw\n            energiefactuur.</span\n        >\n    </vl-spotlight>\n`',...g.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:'() => html`\n    <vl-spotlight\n        data-vl-img-src="//d201gzvprbtpxy.cloudfront.net/sites/default/files/styles/medium/public/images/vla_themateaser_350_dakisolatie.jpg?itok=cKDE21Pe"\n        data-vl-img-alt="spotlight image"\n    >\n        <span slot="title"> Premies voor renovatie </span>\n        <span slot="subtitle">Er zijn er verschillende...</span>\n        <span slot="text"\n            >Gaat u bouwen of verbouwen? Investeer in energiebesparende maatregelen en bespaar heel wat op uw\n            energiefactuur.</span\n        >\n    </vl-spotlight>\n`',...d.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:'() => html`\n    <vl-spotlight data-vl-link="https://google.be">\n        <span slot="title">Communicatiespecialist te Willebroek - contract 1 jaar</span>\n        <span slot="subtitle">Niveau A (universitair diploma)</span>\n        <span slot="text">\n            <ul class="vl-icon-list">\n                <li class="vl-icon-list__item">Waterwegen en Zeekanaal NV in Brussel</li>\n                <li class="vl-icon-list__item">Natuur en bos</li>\n                <li class="vl-icon-list__item"></li>\n            </ul>\n        </span>\n    </vl-spotlight>\n`',...u.parameters?.docs?.source}}};let m=["spotLightDefault","spotlightWithLink","spotlightNoLink","spotlightWithContent","spotlightWithText","spotlightWithImage","spotlightWithSubtitle"]},"./node_modules/lit/decorators.js":(t,e,s)=>{s.d(e,{Mo:()=>l,Cb:()=>o});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let l=t=>(e,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};var a=s("./node_modules/@lit/reactive-element/reactive-element.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let i={attribute:!0,type:String,converter:a.Ts,reflect:!1,hasChanged:a.Qu},n=(t=i,e,s)=>{let{kind:l,metadata:a}=s,n=globalThis.litPropertyMetadata.get(a);if(void 0===n&&globalThis.litPropertyMetadata.set(a,n=new Map),n.set(s.name,t),"accessor"===l){let{name:l}=s;return{set(s){let a=e.get.call(this);e.set.call(this,s),this.requestUpdate(l,a,t)},init(e){return void 0!==e&&this.C(l,void 0,t),e}}}if("setter"===l){let{name:l}=s;return function(s){let a=this[l];e.call(this,s),this.requestUpdate(l,a,t)}}throw Error("Unsupported decorator location: "+l)};function o(t){return(e,s)=>"object"==typeof s?n(t,e,s):((t,e,s)=>{let l=e.hasOwnProperty(s);return e.constructor.createProperty(s,l?{...t,wrapped:!0}:t),l?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}},"./libs/components/src/spotlight/vl-spotlight.component.ts":(t,e,s)=>{var l=s("./node_modules/lit/index.js"),a=s("./node_modules/lit/decorators.js"),i=s("./node_modules/@domg/govflanders-style/component/index.js");let n=[...s("./libs/elements/src/index.ts").CX,i.EM,i.A1,i.kv];var o=s("./libs/components/src/spotlight/vl-spotlight.model.ts"),r=s("./libs/common/utilities/src/index.ts");class p extends r.fS{static get styles(){return[(0,l.iv)`
                ${(0,l.$m)(n)}
            `]}constructor(){super(),this.link="",this.alt=!1,this.size="",this.imgSrc="",this.imgAlt="",this.alt=!1}static get properties(){return{link:{type:String,attribute:"data-vl-link"},alt:{type:Boolean,attribute:"data-vl-alt",reflect:!0},size:{type:String,attribute:"data-vl-size",reflect:!0},imgSrc:{type:String,attribute:"data-vl-img-src"},imgAlt:{type:String,attribute:"data-vl-img-alt"}}}__getSlot(t){return(0,l.dy)` <slot name="${t}"></slot>`}__processSlotTitle(){return this._getTitleTemplateWithValue(this.__getSlot("title"))}__processSlotSubTitle(){return this._getSubTitleTemplateWithValue(this.__getSlot("subtitle"))}__processSlotTitleInHeader(){return this._getTitleTemplateWithValue(this.__getSlot("title"))}__processSlotContent(){return this._getContentTemplateWithValue(this.__getSlot("content"))}__processSlotText(){return this._getTextTemplateWithValue(this.__getSlot("text"))}_getTitleTemplateWithValue(t){return(0,l.dy)`<h3 class="vl-spotlight__title">${t}</h3>`}_getSubTitleTemplateWithValue(t){return(0,l.dy)`<p class="vl-spotlight__subtitle">${t}</p>`}_getContentTemplateWithValue(t){return(0,l.dy)` <div class="vl-spotlight__content">${t}</div>`}_getTextTemplateWithValue(t){return(0,l.dy)`<p class="vl-spotlight__text">${t}</p>`}__fallbackIfEmpty(t,e){return t&&t.length>0?e:""}render(){return this.link?(0,l.dy)`<a href="${this.link}" class="${this.__applySpotlightStyling()}">
                <article role="none">
                    ${this.__processHeader()} ${this.__processSlotTitle()} ${this.__processSlotSubTitle()}
                    ${this.__processSlotContent()} ${this.__processSlotText()}
                </article>
            </a>`:(0,l.dy)` <article class="${this.__applySpotlightStyling()}" role="none">
            ${this.__processHeader()} ${this.__processSlotTitle()} ${this.__processSlotSubTitle()}
            ${this.__processSlotContent()} ${this.__processSlotText()}
        </article>`}__applySpotlightStyling(){let t=this.size===o.N.S,e=this.size===o.N.XS,s=this.size===o.N.L;return`vl-spotlight ${this.alt?"vl-spotlight--alt":""} ${e?"vl-spotlight--xs":""}
    ${t?"vl-spotlight--s":""} ${s?"vl-spotlight--l":""}`}__processHeader(){return this.imgSrc?(0,l.dy)` <header role="none" class="vl-spotlight__header">
            <div class="vl-spotlight__image vl-spotlight__image--focus-center-center">
                <img class="vl-spotlight__image__img" src="${this.imgSrc}" alt="${this.imgAlt}" />
            </div>
            <div class="vl-spotlight__title-wrapper">${this.__processSlotTitleInHeader()}</div>
        </header>`:(0,l.dy)``}}p=function(t,e,s,l){var a,i=arguments.length,n=i<3?e:null===l?l=Object.getOwnPropertyDescriptor(e,s):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,l);else for(var o=t.length-1;o>=0;o--)(a=t[o])&&(n=(i<3?a(n):i>3?a(e,s,n):a(e,s))||n);return i>3&&n&&Object.defineProperty(e,s,n),n}([(0,a.Mo)("vl-spotlight")],p)},"./libs/components/src/spotlight/vl-spotlight.model.ts":(t,e,s)=>{s.d(e,{N:()=>l});let l={XS:"xs",S:"s",L:"l"}}}]);