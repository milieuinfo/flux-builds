"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[1998],{"./node_modules/lit/decorators.js":(t,e,l)=>{var s;l.d(e,{Mo:()=>i,Cb:()=>o});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let i=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{let{kind:l,elements:s}=e;return{kind:l,elements:s,finisher(e){customElements.define(t,e)}}})(t,e),a=(t,e)=>"method"!==e.kind||!e.descriptor||"value"in e.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(l){l.createProperty(e.key,t)}}:{...e,finisher(l){l.createProperty(e.key,t)}},n=(t,e,l)=>{e.constructor.createProperty(l,t)};function o(t){return(e,l)=>void 0!==l?n(t,e,l):a(t,e)}null!=(null===(s=window.HTMLSlotElement)||void 0===s?void 0:s.prototype.assignedElements)||((t,e)=>t.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE))},"./libs/components/src/spotlight/vl-spotlight.component.ts":(t,e,l)=>{var s=l("./node_modules/lit/index.js"),i=l("./node_modules/lit/decorators.js"),a=l("./node_modules/@domg/govflanders-style/component/index.js"),n=l("./libs/elements/src/index.ts");let o=[...n.CX,a.EM,a.A1,a.kv];var r=l("./libs/components/src/spotlight/vl-spotlight.model.ts"),p=l("./libs/common/utilities/src/index.ts");let c=class extends p.fS{static get styles(){return[(0,s.iv)`
                ${(0,s.$m)(o)}
            `]}constructor(){super(),this.link="",this.alt=!1,this.size="",this.imgSrc="",this.imgAlt="",this.alt=!1}static get properties(){return{link:{type:String,attribute:"data-vl-link"},alt:{type:Boolean,attribute:"data-vl-alt",reflect:!0},size:{type:String,attribute:"data-vl-size",reflect:!0},imgSrc:{type:String,attribute:"data-vl-img-src"},imgAlt:{type:String,attribute:"data-vl-img-alt"}}}__getSlot(t){return(0,s.dy)` <slot name="${t}"></slot>`}__processSlotTitle(){return this._getTitleTemplateWithValue(this.__getSlot("title"))}__processSlotSubTitle(){return this._getSubTitleTemplateWithValue(this.__getSlot("subtitle"))}__processSlotTitleInHeader(){return this._getTitleTemplateWithValue(this.__getSlot("title"))}__processSlotContent(){return this._getContentTemplateWithValue(this.__getSlot("content"))}__processSlotText(){return this._getTextTemplateWithValue(this.__getSlot("text"))}_getTitleTemplateWithValue(t){return(0,s.dy)`<h3 class="vl-spotlight__title">${t}</h3>`}_getSubTitleTemplateWithValue(t){return(0,s.dy)`<p class="vl-spotlight__subtitle">${t}</p>`}_getContentTemplateWithValue(t){return(0,s.dy)` <div class="vl-spotlight__content">${t}</div>`}_getTextTemplateWithValue(t){return(0,s.dy)`<p class="vl-spotlight__text">${t}</p>`}__fallbackIfEmpty(t,e){return t&&t.length>0?e:""}render(){return this.link?(0,s.dy)`<a href="${this.link}" class="${this.__applySpotlightStyling()}">
                <article role="none">
                    ${this.__processHeader()} ${this.__processSlotTitle()} ${this.__processSlotSubTitle()}
                    ${this.__processSlotContent()} ${this.__processSlotText()}
                </article>
            </a>`:(0,s.dy)` <article class="${this.__applySpotlightStyling()}" role="none">
            ${this.__processHeader()} ${this.__processSlotTitle()} ${this.__processSlotSubTitle()}
            ${this.__processSlotContent()} ${this.__processSlotText()}
        </article>`}__applySpotlightStyling(){let t=this.size===r.N.S,e=this.size===r.N.XS,l=this.size===r.N.L;return`vl-spotlight ${this.alt?"vl-spotlight--alt":""} ${e?"vl-spotlight--xs":""}
    ${t?"vl-spotlight--s":""} ${l?"vl-spotlight--l":""}`}__processHeader(){return this.imgSrc?(0,s.dy)` <header role="none" class="vl-spotlight__header">
            <div class="vl-spotlight__image vl-spotlight__image--focus-center-center">
                <img class="vl-spotlight__image__img" src="${this.imgSrc}" alt="${this.imgAlt}" />
            </div>
            <div class="vl-spotlight__title-wrapper">${this.__processSlotTitleInHeader()}</div>
        </header>`:(0,s.dy)``}};c=function(t,e,l,s){var i,a=arguments.length,n=a<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,l):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,l,s);else for(var o=t.length-1;o>=0;o--)(i=t[o])&&(n=(a<3?i(n):a>3?i(e,l,n):i(e,l))||n);return a>3&&n&&Object.defineProperty(e,l,n),n}([(0,i.Mo)("vl-spotlight")],c)},"./libs/components/src/spotlight/vl-spotlight.model.ts":(t,e,l)=>{l.d(e,{N:()=>s});let s={XS:"xs",S:"s",L:"l"}},"./libs/components/src/spotlight/stories/vl-spotlight.stories.ts":(t,e,l)=>{l.r(e),l.d(e,{default:()=>r,spotLightDefault:()=>p,spotlightNoLink:()=>d,spotlightWithContent:()=>g,spotlightWithImage:()=>u,spotlightWithLink:()=>c,spotlightWithSubtitle:()=>v,spotlightWithText:()=>m});var s=l("./node_modules/lit-html/lit-html.js"),i=l("./libs/components/src/spotlight/vl-spotlight.model.ts"),a=l("./libs/common/storybook/src/index.ts");let n={link:"",alt:!1,size:i.N.S,imgSrc:"",imgAlt:"",title:"Premies voor renovatie",subtitle:"",text:"",content:""},o={link:{name:"data-vl-link",description:"De component wordt een link. Door te klikken op de component wordt de gebruiker doorgestuurd naar de link die gezet is in dit attribuut.",table:{type:{summary:a.vK.STRING,required:!1},defaultValue:{summary:""},category:a.aA.ATTRIBUTES}},alt:{name:"data-vl-alt",description:"Geeft de component een alternatieve stijl. De achtergrond wordt grijs.",table:{type:{summary:a.vK.BOOLEAN,required:!1},defaultValue:{summary:!1},category:a.aA.ATTRIBUTES}},size:{name:"data-vl-size",description:"Dit attribuut bepaalt de grootte van de component.",table:{type:{summary:`${i.N.XS} | ${i.N.S} | ${i.N.L}`,required:!1},category:a.aA.ATTRIBUTES,defaultValue:{summary:`${i.N.S}`}},control:{type:"select",options:[i.N.XS,i.N.S,i.N.L]}},imgSrc:{name:"data-vl-img-src",description:"Het path van de image dat getoond moet worden in de spotlight.",table:{type:{summary:a.vK.STRING,required:!1},defaultValue:{summary:""},category:a.aA.ATTRIBUTES}},imgAlt:{name:"data-vl-img-alt",description:"De alternatieve tekst van de image dat getoond moet worden in de spotlight.",table:{type:{summary:a.vK.STRING,required:!1},defaultValue:{summary:""},category:a.aA.ATTRIBUTES}},title:{name:"title",description:"Titel van de spotlight.",table:{type:{summary:a.vK.STRING,required:!1},defaultValue:{summary:""},category:a.aA.SLOTS}},subtitle:{name:"subtitle",description:"Subtitle van de spotlight.",table:{type:{summary:a.vK.STRING,required:!1},defaultValue:{summary:""},category:a.aA.SLOTS}},text:{name:"text",description:"Text van de spotlight.",table:{type:{summary:a.vK.STRING,required:!1},defaultValue:{summary:""},category:a.aA.SLOTS}},content:{name:"content",description:"Content van de spotlight.",table:{type:{summary:a.vK.STRING,required:!1},defaultValue:{summary:""},category:a.aA.SLOTS}}};l("./libs/components/src/spotlight/vl-spotlight.component.ts");let r={title:"components/spotlight",tags:["autodocs"],args:(0,a.T8)(n),argTypes:(0,a.xj)(o),parameters:{controls:{hideNoControlsWarning:!0}}},p=(({link:t,alt:e,size:l,imgSrc:i,imgAlt:a,title:n,subtitle:o,text:r,content:p})=>(0,s.dy)`
    <vl-spotlight
        data-vl-link=${t}
        ?data-vl-alt=${e}
        data-vl-size=${l}
        data-vl-img-src=${i}
        data-vl-img-alt=${a}
    >
        ${n?(0,s.dy)`<span slot="title"> ${n} </span>`:""}
        ${o?(0,s.dy)`<span slot="subtitle"> ${o} </span>`:""}
        ${r?(0,s.dy)`<span slot="text"> ${r} </span>`:""}
        ${p?(0,s.dy)`<span slot="content"> ${p} </span>`:""}
    </vl-spotlight>
`).bind({});p.storyName="vl-spotlight - default";let c=()=>(0,s.dy)`
    <vl-spotlight data-vl-link="http://www.google.com">
        <span slot="title">
            Premies voor renovatie
            <span class="vl-icon vl-icon--light vl-vi vl-vi-external"></span>
            <span class="vl-u-visually-hidden">Opent in nieuw venster</span>
        </span>
    </vl-spotlight>
`;c.storyName="vl-spotlight - with link";let d=()=>(0,s.dy)`
    <vl-spotlight>
        <span slot="title"> Premies voor renovatie </span>
    </vl-spotlight>
`;d.storyName="vl-spotlight - no link";let g=()=>(0,s.dy)`
    <vl-spotlight data-vl-link="https://google.be" data-vl-alt data-vl-size="${i.N.S}">
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
`;g.storyName="vl-spotlight - with content";let m=()=>(0,s.dy)`
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
`;m.storyName="vl-spotlight - with text";let u=()=>(0,s.dy)`
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
`;u.storyName="vl-spotlight - with image";let v=()=>(0,s.dy)`
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
`;v.storyName="vl-spotlight - with subtitle",p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:'({\n  link,\n  alt,\n  size,\n  imgSrc,\n  imgAlt,\n  title,\n  subtitle,\n  text,\n  content\n}: typeof spotlightArgs) => html`\n    <vl-spotlight\n        data-vl-link=${link}\n        ?data-vl-alt=${alt}\n        data-vl-size=${size}\n        data-vl-img-src=${imgSrc}\n        data-vl-img-alt=${imgAlt}\n    >\n        ${title ? html`<span slot="title"> ${title} </span>` : ``}\n        ${subtitle ? html`<span slot="subtitle"> ${subtitle} </span>` : ``}\n        ${text ? html`<span slot="text"> ${text} </span>` : ``}\n        ${content ? html`<span slot="content"> ${content} </span>` : ``}\n    </vl-spotlight>\n`',...p.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:'() => html`\n    <vl-spotlight data-vl-link="http://www.google.com">\n        <span slot="title">\n            Premies voor renovatie\n            <span class="vl-icon vl-icon--light vl-vi vl-vi-external"></span>\n            <span class="vl-u-visually-hidden">Opent in nieuw venster</span>\n        </span>\n    </vl-spotlight>\n`',...c.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:'() => html`\n    <vl-spotlight>\n        <span slot="title"> Premies voor renovatie </span>\n    </vl-spotlight>\n`',...d.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:'() => html`\n    <vl-spotlight data-vl-link="https://google.be" data-vl-alt data-vl-size="${SIZE.S}">\n        <span slot="title">\n            Verslag bestuursvergadering\n            <br />\n            <br />\n            <br />\n            <br />\n        </span>\n        <vl-document slot="content">\n            <span slot="type">DOCX</span>\n            <span slot="title">document</span>\n            <span slot="metadata">DOCX-112kb</span>\n        </vl-document>\n    </vl-spotlight>\n`',...g.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:'() => html`\n    <vl-spotlight data-vl-link="https://google.be">\n        <span slot="title">\n            Premies voor renovatie\n            <span class="vl-icon vl-icon--light vl-vi vl-vi-external"></span>\n            <span class="vl-u-visually-hidden">Opent in nieuw venster</span>\n        </span>\n        <span slot="text"\n            >Gaat u bouwen of verbouwen? Investeer in energiebesparende maatregelen en bespaar heel wat op uw\n            energiefactuur.</span\n        >\n    </vl-spotlight>\n`',...m.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:'() => html`\n    <vl-spotlight\n        data-vl-img-src="//d201gzvprbtpxy.cloudfront.net/sites/default/files/styles/medium/public/images/vla_themateaser_350_dakisolatie.jpg?itok=cKDE21Pe"\n        data-vl-img-alt="spotlight image"\n    >\n        <span slot="title"> Premies voor renovatie </span>\n        <span slot="subtitle">Er zijn er verschillende...</span>\n        <span slot="text"\n            >Gaat u bouwen of verbouwen? Investeer in energiebesparende maatregelen en bespaar heel wat op uw\n            energiefactuur.</span\n        >\n    </vl-spotlight>\n`',...u.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:'() => html`\n    <vl-spotlight data-vl-link="https://google.be">\n        <span slot="title">Communicatiespecialist te Willebroek - contract 1 jaar</span>\n        <span slot="subtitle">Niveau A (universitair diploma)</span>\n        <span slot="text">\n            <ul class="vl-icon-list">\n                <li class="vl-icon-list__item">Waterwegen en Zeekanaal NV in Brussel</li>\n                <li class="vl-icon-list__item">Natuur en bos</li>\n                <li class="vl-icon-list__item"></li>\n            </ul>\n        </span>\n    </vl-spotlight>\n`',...v.parameters?.docs?.source}}}}}]);