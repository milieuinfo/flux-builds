"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[1998],{"./libs/components/src/spotlight/stories/vl-spotlight.stories.ts":(t,e,l)=>{l.r(e),l.d(e,{SpotLightDefault:()=>c,SpotlightWithContent:()=>m,SpotlightWithImage:()=>h,SpotlightWithLink:()=>v,SpotlightWithSubtitle:()=>b,SpotlightWithText:()=>g,__namedExportsOrder:()=>_,default:()=>d,spotlightNoLink:()=>u});var s=l("./node_modules/lit-html/lit-html.js");l("./libs/components/src/spotlight/vl-spotlight.component.ts");var a=l("./libs/components/src/spotlight/vl-spotlight.model.ts"),i=l("./libs/common/storybook/src/index.ts");let n={...i._O,link:"",external:!1,alt:!1,noBorder:!1,size:a.N.S,imgSrc:"",imgAlt:"",title:"",subtitle:"",text:"",content:""},o={...(0,i.Wp)(),link:{name:"data-vl-link",description:"De component wordt een link. Door te klikken op de component wordt de gebruiker doorgestuurd naar de link die gezet is in dit attribuut.",table:{type:{summary:i.vK.STRING},defaultValue:n.link,category:i.aA.ATTRIBUTES}},external:{name:"data-vl-external",description:"Opent de link in een nieuw tabblad. Dit attribuut wordt enkel gebruikt als het attribuut `data-vl-link` gezet is.",table:{type:{summary:i.vK.STRING},defaultValue:n.external,category:i.aA.ATTRIBUTES}},alt:{name:"data-vl-alt",description:"Geeft de component een alternatieve stijl. De achtergrond wordt grijs.",table:{type:{summary:i.vK.BOOLEAN},defaultValue:n.alt,category:i.aA.ATTRIBUTES}},noBorder:{name:"data-vl-no-border",description:"Geeft de component weer zonder border.",table:{type:{summary:i.vK.BOOLEAN},defaultValue:n.noBorder,category:i.aA.ATTRIBUTES}},size:{name:"data-vl-size",description:"Dit attribuut bepaalt de grootte van de component.",table:{type:{summary:(0,i.G_)(Object.values(a.N)),required:!1},category:i.aA.ATTRIBUTES,defaultValue:n.size},control:{type:i.Hy.SELECT},options:Object.values(a.N)},imgSrc:{name:"data-vl-img-src",description:"Het path van de image dat getoond moet worden in de spotlight.",table:{type:{summary:i.vK.STRING},defaultValue:n.imgSrc,category:i.aA.ATTRIBUTES}},imgAlt:{name:"data-vl-img-alt",description:"De alternatieve tekst van de image dat getoond moet worden in de spotlight.",table:{type:{summary:i.vK.STRING},defaultValue:n.imgAlt,category:i.aA.ATTRIBUTES}},title:{name:"title",description:"Titel van de spotlight.",table:{type:{summary:i.vK.STRING},defaultValue:n.title,category:i.aA.SLOTS}},subtitle:{name:"subtitle",description:"Subtitle van de spotlight.",table:{type:{summary:i.vK.STRING},defaultValue:n.subtitle,category:i.aA.SLOTS}},text:{name:"text",description:"Text van de spotlight.",table:{type:{summary:i.vK.STRING},defaultValue:n.text,category:i.aA.SLOTS}},content:{name:"content",description:"Content van de spotlight.",table:{type:{summary:i.vK.STRING},defaultValue:n.content,category:i.aA.SLOTS}}};var r=l("./libs/common/utilities/src/index.ts"),p=l("./libs/components/src/document/index.ts");(0,r.YV)([p.J]);let d={title:"components/spotlight",tags:["autodocs"],args:n,argTypes:o},c=(0,i.yg)(n,({link:t,alt:e,size:l,imgSrc:a,imgAlt:i,title:n,subtitle:o,text:r,content:p,external:d,noBorder:c})=>(0,s.dy)`
        <vl-spotlight
            data-vl-link=${t}
            ?data-vl-alt=${e}
            ?data-vl-no-border=${c}
            ?data-vl-external=${d}
            data-vl-size=${l}
            data-vl-img-src=${a}
            data-vl-img-alt=${i}
        >
            ${n?(0,s.dy)`<span slot="title"> ${n} </span>`:""}
            ${o?(0,s.dy)`<span slot="subtitle"> ${o} </span>`:""}
            ${r?(0,s.dy)`<span slot="text"> ${r} </span>`:""}
            ${p?(0,s.dy)`<span slot="content"> ${p} </span>`:""}
        </vl-spotlight>
    `).bind({});c.storyName="vl-spotlight - default",c.args={title:"Premies voor renovatie"};let v=(0,i.yg)(n,({external:t})=>(0,s.dy)`
        <vl-spotlight data-vl-link="http://www.google.com" ?data-vl-external=${t}>
            <span slot="title">
                Premies voor renovatie
                <span class="vl-icon vl-icon--light vl-vi vl-vi-external"></span>
                <span class="vl-u-visually-hidden">Opent in nieuw venster</span>
            </span>
        </vl-spotlight>
    `);v.storyName="vl-spotlight - with link",v.parameters={controls:{include:["data-vl-external"]}};let u=()=>(0,s.dy)`
    <vl-spotlight>
        <span slot="title"> Premies voor renovatie </span>
    </vl-spotlight>
`;u.storyName="vl-spotlight - no link",u.parameters={controls:{disable:!0}};let m=()=>(0,s.dy)`
    <vl-spotlight data-vl-link="https://google.be" data-vl-alt data-vl-size="${a.N.S}">
        <span slot="title"> Verslag bestuursvergadering </span>
        <vl-document slot="content">
            <span slot="type">DOCX</span>
            <span slot="title">document</span>
            <span slot="metadata">DOCX-112kb</span>
        </vl-document>
    </vl-spotlight>
`;m.storyName="vl-spotlight - with content",m.parameters={controls:{disable:!0}};let g=()=>(0,s.dy)`
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
`;g.storyName="vl-spotlight - with text",g.parameters={controls:{disable:!0}};let h=()=>(0,s.dy)`
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
`;h.storyName="vl-spotlight - with image",h.parameters={controls:{disable:!0}},h.decorators=[t=>(0,s.dy)` <div style="width: 600px;">${t()}</div>`];let b=()=>(0,s.dy)`
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
`;b.storyName="vl-spotlight - with subtitle",b.parameters={controls:{disable:!0}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:'story(spotlightArgs, ({\n  link,\n  alt,\n  size,\n  imgSrc,\n  imgAlt,\n  title,\n  subtitle,\n  text,\n  content,\n  external,\n  noBorder\n}: typeof spotlightArgs) => html`\n        <vl-spotlight\n            data-vl-link=${link}\n            ?data-vl-alt=${alt}\n            ?data-vl-no-border=${noBorder}\n            ?data-vl-external=${external}\n            data-vl-size=${size}\n            data-vl-img-src=${imgSrc}\n            data-vl-img-alt=${imgAlt}\n        >\n            ${title ? html`<span slot="title"> ${title} </span>` : ``}\n            ${subtitle ? html`<span slot="subtitle"> ${subtitle} </span>` : ``}\n            ${text ? html`<span slot="text"> ${text} </span>` : ``}\n            ${content ? html`<span slot="content"> ${content} </span>` : ``}\n        </vl-spotlight>\n    `)',...c.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:'story(spotlightArgs, ({\n  external\n}: typeof spotlightArgs) => html`\n        <vl-spotlight data-vl-link="http://www.google.com" ?data-vl-external=${external}>\n            <span slot="title">\n                Premies voor renovatie\n                <span class="vl-icon vl-icon--light vl-vi vl-vi-external"></span>\n                <span class="vl-u-visually-hidden">Opent in nieuw venster</span>\n            </span>\n        </vl-spotlight>\n    `)',...v.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:'() => html`\n    <vl-spotlight>\n        <span slot="title"> Premies voor renovatie </span>\n    </vl-spotlight>\n`',...u.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:'() => html`\n    <vl-spotlight data-vl-link="https://google.be" data-vl-alt data-vl-size="${SIZE.S}">\n        <span slot="title"> Verslag bestuursvergadering </span>\n        <vl-document slot="content">\n            <span slot="type">DOCX</span>\n            <span slot="title">document</span>\n            <span slot="metadata">DOCX-112kb</span>\n        </vl-document>\n    </vl-spotlight>\n`',...m.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:'() => html`\n    <vl-spotlight data-vl-link="https://google.be">\n        <span slot="title">\n            Premies voor renovatie\n            <span class="vl-icon vl-icon--light vl-vi vl-vi-external"></span>\n            <span class="vl-u-visually-hidden">Opent in nieuw venster</span>\n        </span>\n        <span slot="text"\n            >Gaat u bouwen of verbouwen? Investeer in energiebesparende maatregelen en bespaar heel wat op uw\n            energiefactuur.</span\n        >\n    </vl-spotlight>\n`',...g.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:'() => html`\n    <vl-spotlight\n        data-vl-img-src="//d201gzvprbtpxy.cloudfront.net/sites/default/files/styles/medium/public/images/vla_themateaser_350_dakisolatie.jpg?itok=cKDE21Pe"\n        data-vl-img-alt="spotlight image"\n    >\n        <span slot="title"> Premies voor renovatie </span>\n        <span slot="subtitle">Er zijn er verschillende...</span>\n        <span slot="text"\n            >Gaat u bouwen of verbouwen? Investeer in energiebesparende maatregelen en bespaar heel wat op uw\n            energiefactuur.</span\n        >\n    </vl-spotlight>\n`',...h.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:'() => html`\n    <vl-spotlight data-vl-link="https://google.be">\n        <span slot="title">Communicatiespecialist te Willebroek - contract 1 jaar</span>\n        <span slot="subtitle">Niveau A (universitair diploma)</span>\n        <span slot="text">\n            <ul class="vl-icon-list">\n                <li class="vl-icon-list__item">Waterwegen en Zeekanaal NV in Brussel</li>\n                <li class="vl-icon-list__item">Natuur en bos</li>\n                <li class="vl-icon-list__item"></li>\n            </ul>\n        </span>\n    </vl-spotlight>\n`',...b.parameters?.docs?.source}}};let _=["SpotLightDefault","SpotlightWithLink","spotlightNoLink","SpotlightWithContent","SpotlightWithText","SpotlightWithImage","SpotlightWithSubtitle"]},"./node_modules/lit-html/directive.js":(t,e,l)=>{l.d(e,{XM:()=>a,Xe:()=>i,pX:()=>s});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},a=t=>function(){for(var e=arguments.length,l=Array(e),s=0;s<e;s++)l[s]=arguments[s];return{_$litDirective$:t,values:l}};class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,l){this._$Ct=t,this._$AM=e,this._$Ci=l}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},"./node_modules/lit/decorators.js":(t,e,l)=>{l.d(e,{Mo:()=>s,Cb:()=>o});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let s=t=>(e,l)=>{void 0!==l?l.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};var a=l("./node_modules/@lit/reactive-element/reactive-element.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let i={attribute:!0,type:String,converter:a.Ts,reflect:!1,hasChanged:a.Qu},n=(t=i,e,l)=>{let{kind:s,metadata:a}=l,n=globalThis.litPropertyMetadata.get(a);if(void 0===n&&globalThis.litPropertyMetadata.set(a,n=new Map),n.set(l.name,t),"accessor"===s){let{name:s}=l;return{set(l){let a=e.get.call(this);e.set.call(this,l),this.requestUpdate(s,a,t)},init(e){return void 0!==e&&this.C(s,void 0,t),e}}}if("setter"===s){let{name:s}=l;return function(l){let a=this[s];e.call(this,l),this.requestUpdate(s,a,t)}}throw Error("Unsupported decorator location: "+s)};function o(t){return(e,l)=>"object"==typeof l?n(t,e,l):((t,e,l)=>{let s=e.hasOwnProperty(l);return e.constructor.createProperty(l,s?{...t,wrapped:!0}:t),s?Object.getOwnPropertyDescriptor(e,l):void 0})(t,e,l)}},"./node_modules/lit/directives/class-map.js":(t,e,l)=>{l.d(e,{$:()=>i});var s=l("./node_modules/lit-html/lit-html.js"),a=l("./node_modules/lit-html/directive.js"),i=(0,a.XM)(class extends a.Xe{constructor(t){var e;if(super(t),t.type!==a.pX.ATTRIBUTE||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,e){var[l]=e;if(void 0===this.it){for(var a in this.it=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t))),l)l[a]&&!(null!==(r=this.st)&&void 0!==r&&r.has(a))&&this.it.add(a);return this.render(l)}var i=t.element.classList;for(var n of this.it)n in l||(i.remove(n),this.it.delete(n));for(var o in l){var r,p,d=!!l[o];d===this.it.has(o)||(null===(p=this.st)||void 0===p?void 0:p.has(o))||(d?(i.add(o),this.it.add(o)):(i.remove(o),this.it.delete(o)))}return s.Jb}})},"./libs/components/src/document/index.ts":(t,e,l)=>{l.d(e,{J:()=>s.J});var s=l("./libs/components/src/document/vl-document.component.ts")},"./libs/components/src/document/vl-document.component.ts":(t,e,l)=>{l.d(e,{J:()=>n});var s=l("./libs/common/utilities/src/index.ts"),a=l("./node_modules/@domg/govflanders-style/common/index.js"),i=l("./node_modules/@domg/govflanders-style/component/index.js");class n extends s.F9{static get _observedAttributes(){return["href","target"]}constructor(){super(`
          <style>
            ${a.YN}
            ${a.Oh}
            ${a.QT}
            ${i.A1}
            ${i.oQ}
          </style>
          <a class="vl-document" href="#" download>
            <div class="vl-document__type">
              <i class="vl-vi vl-vi-document" aria-hidden="true"></i>
              <span class="vl-document__type__text">
                <slot name="type"></slot>
              </span>
            </div>
            <div class="vl-document__content">
              <div class="vl-document__title vl-link">
                <slot name="title"></slot>
              </div>
              <div class="vl-document__metadata">
                <slot name="metadata"></slot>
              </div>
            </div>
          </a>
        `)}_hrefChangedCallback(t,e){this._element.href=e}_targetChangedCallback(t,e){e?this._element.setAttribute("target",e):this._element.removeAttribute("target")}}n=function(t,e,l,s){var a,i=arguments.length,n=i<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,l):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,l,s);else for(var o=t.length-1;o>=0;o--)(a=t[o])&&(n=(i<3?a(n):i>3?a(e,l,n):a(e,l))||n);return i>3&&n&&Object.defineProperty(e,l,n),n}([(0,s.a6)("vl-document")],n)},"./libs/components/src/spotlight/vl-spotlight.component.ts":(t,e,l)=>{var s=l("./node_modules/lit/index.js"),a=l("./node_modules/lit/decorators.js"),i=l("./node_modules/@domg/govflanders-style/component/index.js");let n=[...l("./libs/elements/src/index.ts").CX,i.EM,i.A1,i.kv];var o=l("./libs/components/src/spotlight/vl-spotlight.model.ts"),r=l("./libs/common/utilities/src/index.ts"),p=l("./node_modules/lit/directives/class-map.js");class d extends r.fS{static get styles(){return[(0,s.iv)`
                ${(0,s.$m)(n)}
            `]}static get properties(){return{link:{type:String,attribute:"data-vl-link"},external:{type:Boolean,attribute:"data-vl-external"},alt:{type:Boolean,attribute:"data-vl-alt",reflect:!0},noBorder:{type:Boolean,attribute:"data-vl-no-border",reflect:!0},size:{type:String,attribute:"data-vl-size",reflect:!0},imgSrc:{type:String,attribute:"data-vl-img-src"},imgAlt:{type:String,attribute:"data-vl-img-alt"}}}__getSlot(t){return(0,s.dy)` <slot name="${t}"></slot>`}__processSlotTitle(){return this._getTitleTemplateWithValue(this.__getSlot("title"))}__processSlotSubTitle(){return this._getSubTitleTemplateWithValue(this.__getSlot("subtitle"))}__processSlotTitleInHeader(){return this._getTitleTemplateWithValue(this.__getSlot("title"))}__processSlotContent(){return this._getContentTemplateWithValue(this.__getSlot("content"))}__processSlotText(){return this._getTextTemplateWithValue(this.__getSlot("text"))}_getTitleTemplateWithValue(t){return(0,s.dy)`<h3 class="vl-spotlight__title">${t}</h3>`}_getSubTitleTemplateWithValue(t){return(0,s.dy)`<p class="vl-spotlight__subtitle">${t}</p>`}_getContentTemplateWithValue(t){return(0,s.dy)` <div class="vl-spotlight__content">${t}</div>`}_getTextTemplateWithValue(t){return(0,s.dy)`<p class="vl-spotlight__text">${t}</p>`}__fallbackIfEmpty(t,e){return t&&t.length>0?e:""}render(){let t={"vl-spotlight":!0,"vl-spotlight--alt":this.alt,"vl-spotlight--xs":this.size===o.N.XS,"vl-spotlight--s":this.size===o.N.S,"vl-spotlight--l":this.size===o.N.L,"vl-spotlight--no-border":this.noBorder};return this.link?(0,s.dy)`<a
                href="${this.link}"
                class="${(0,p.$)(t)}"
                target=${this.external?"_blank":s.Ld}
            >
                <article role="none">
                    ${this.__processHeader()} ${this.__processSlotTitle()} ${this.__processSlotSubTitle()}
                    ${this.__processSlotContent()} ${this.__processSlotText()}
                </article>
            </a>`:(0,s.dy)`
            <article class="${(0,p.$)(t)}" role="none">
                ${this.__processHeader()} ${this.__processSlotTitle()} ${this.__processSlotSubTitle()}
                ${this.__processSlotContent()} ${this.__processSlotText()}
            </article>
        `}__processHeader(){return this.imgSrc?(0,s.dy)` <header role="none" class="vl-spotlight__header">
            <div class="vl-spotlight__image vl-spotlight__image--focus-center-center">
                <img class="vl-spotlight__image__img" src="${this.imgSrc}" alt="${this.imgAlt}" />
            </div>
            <div class="vl-spotlight__title-wrapper">${this.__processSlotTitleInHeader()}</div>
        </header>`:(0,s.dy)``}constructor(...t){super(...t),this.link="",this.external=!1,this.alt=!1,this.noBorder=!1,this.size="",this.imgSrc="",this.imgAlt=""}}d=function(t,e,l,s){var a,i=arguments.length,n=i<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,l):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,l,s);else for(var o=t.length-1;o>=0;o--)(a=t[o])&&(n=(i<3?a(n):i>3?a(e,l,n):a(e,l))||n);return i>3&&n&&Object.defineProperty(e,l,n),n}([(0,a.Mo)("vl-spotlight")],d)},"./libs/components/src/spotlight/vl-spotlight.model.ts":(t,e,l)=>{l.d(e,{N:()=>s});let s={XS:"xs",S:"s",L:"l"}}}]);