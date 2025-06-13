"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[6697],{"./libs/components/src/http-error-message/stories/vl-http-error-message.stories.ts":(e,t,s)=>{s.r(t),s.d(t,{__namedExportsOrder:()=>o,default:()=>r,httpErrorMessageDefault:()=>i});var a=s("./node_modules/lit-html/lit-html.js");s("./libs/components/src/http-error-message/vl-http-error-message.component.ts");var l=s("./libs/common/storybook/src/index.ts");let r={title:"components/http-error-message",tags:["autodocs"],args:{...l._O,title:"Niets gevonden hiervoor.",image:"https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg",alt:"Niets gevonden",textSlotText:"Sorry, er liep iets onverwachts mis.",actionsSlotText:"Opnieuw opstarten"},argTypes:{...(0,l.Wp)(),title:{name:"data-vl-title",type:{name:l.vK.STRING,required:!1},description:"Changes the title of the error message.",table:{type:{summary:l.vK.STRING},defaultValue:{summary:void 0},category:l.aA.ATTRIBUTES}},image:{name:"data-vl-image",type:{name:l.vK.STRING,required:!1},description:"Changes the URL of the image that is shown.",table:{type:{summary:l.vK.STRING},defaultValue:{summary:void 0},category:l.aA.ATTRIBUTES}},alt:{name:"data-vl-image-alt",type:{name:l.vK.STRING,required:!1},description:"Changes the alternative text of the image.",table:{type:{summary:l.vK.STRING},defaultValue:{summary:void 0},category:l.aA.ATTRIBUTES}},textSlotText:{name:"text",type:{name:l.vK.STRING,required:!1},description:"Changes the descriptive text that is shown under the title.",table:{category:l.aA.SLOTS,defaultValue:{summary:void 0}}},actionsSlotText:{name:"actions",type:{name:l.vK.STRING,required:!1},description:"Defines the actions that need to be shown.",table:{category:l.aA.SLOTS,defaultValue:{summary:void 0}}}}},i=({title:e,image:t,alt:s,textSlotText:l,actionsSlotText:r})=>(0,a.dy)`
    <vl-http-error-message data-vl-title=${e} data-vl-image=${t} data-vl-image-alt=${s}>
        <p slot="text">${l}</p>
        <div slot="actions">
            <a is="vl-link-button" href="#">${r}</a>
        </div>
    </vl-http-error-message>
`;i.storyName="vl-http-error-message - default",i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:'({\n  title,\n  image,\n  alt,\n  textSlotText,\n  actionsSlotText\n}: typeof httpErrorMessageArgs) => html`\n    <vl-http-error-message data-vl-title=${title} data-vl-image=${image} data-vl-image-alt=${alt}>\n        <p slot="text">${textSlotText}</p>\n        <div slot="actions">\n            <a is="vl-link-button" href="#">${actionsSlotText}</a>\n        </div>\n    </vl-http-error-message>\n`',...i.parameters?.docs?.source}}};let o=["httpErrorMessageDefault"]},"./libs/components/src/http-error-message/vl-http-error-message.component.ts":(e,t,s)=>{s.d(t,{k:()=>i});var a=s("./libs/common/utilities/src/index.ts"),l=s("./libs/elements/src/index.ts"),r=s("./libs/components/src/typography/vl-typography.component.ts");class i extends(0,a.W$)(HTMLElement){static{(0,a.YV)([l.CH,l.YY,l.Br,r.P])}static get _observedAttributes(){return["title","image","image-alt"]}constructor(){super(`
          <style>
            ${l.CX}
          </style>
          <div is="vl-grid" data-vl-is-stacked data-vl-align-center data-vl-v-center>
            <div is="vl-column" data-vl-size="6" data-vl-medium-size="6" data-vl-small-size="6" data-vl-extra-small-size="6" class="vl-u-hidden vl-u-visible--s">
              <div class="vl-u-display-flex vl-u-flex-align-center vl-u-flex-v-center">
                <img id="image-small"/>
              </div>
            </div>
            <div is="vl-column" data-vl-size="6" data-vl-medium-size="6" data-vl-small-size="8">
              <div is="vl-grid" data-vl-is-stacked>
                <div is="vl-column" data-vl-size="12">
                  <h2 id="title" is="vl-h2"></h2>
                  <vl-typography id="text"><slot slot="text" name="text"></slot></vl-typography>
                </div>
                <div id="actions" is="vl-column" data-vl-size="12"><slot name="actions"></slot></div>
              </div>
            </div>
            <div is="vl-column" data-vl-size="6" data-vl-medium-size="6" data-vl-small-size="6" class="vl-u-hidden--s">
              <div class="vl-u-display-flex vl-u-flex-align-center vl-u-flex-v-center">
                <img id="image-normal"/>
              </div>
            </div>
          </div>
        `)}connectedCallback(){super.connectedCallback(),this.__processAttributes()}get _title(){return this.dataset.vlTitle||this._defaults.title}get _image(){return this.dataset.vlImage||this._defaults.image}get _imageAlt(){return this.dataset.vlImageAlt||this._defaults.imageAlt}_titleChangedCallback(){this.__processTitle()}_imageChangedCallback(){this.__processImage()}_imageAltChangedCallback(){this.__processImageAlt()}__setImageAttribute(e,t){this.__imageForSmallScreensElement.setAttribute(e,t),this.__imageForNormalScreensElement.setAttribute(e,t)}get __titleElement(){return this._element.querySelector("#title")}get __textElement(){return this._element.querySelector("#text")}get __actionsElement(){return this._element.querySelector("#actions")}get __actionElement(){return this._element.querySelector("#actions > *")}get __imageForSmallScreensElement(){return this._element.querySelector("#image-small")}get __imageForNormalScreensElement(){return this._element.querySelector("#image-normal")}__processTitle(){this.__titleElement.textContent=this._title}__processImage(){this.__setImageAttribute("src",this._image)}__processImageAlt(){this.__setImageAttribute("alt",this._imageAlt)}__processAttributes(){this.__processTitle(),this.__processImage(),this.__processImageAlt()}}i=function(e,t,s,a){var l,r=arguments.length,i=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,s,a);else for(var o=e.length-1;o>=0;o--)(l=e[o])&&(i=(r<3?l(i):r>3?l(t,s,i):l(t,s))||i);return r>3&&i&&Object.defineProperty(t,s,i),i}([(0,a.a6)("vl-http-error-message")],i)},"./libs/components/src/typography/vl-typography.component.ts":(e,t,s)=>{s.d(t,{P:()=>m});var a=s("./libs/common/utilities/src/index.ts"),l=s("./node_modules/@domg/govflanders-style/common/index.js"),r=s("./node_modules/@domg/govflanders-style/component/index.js"),i=s("./node_modules/lit/index.js");let o=(0,i.iv)`
    .vl-typography {
        display: inline;
    }
`,n=[l.$4,o];class m extends(0,a.W$)(HTMLElement){static get _observedAttributes(){return["parameters"]}constructor(){super(`
          <style>
            ${l.YN}
            ${l.Oh}
            ${l.QT}
            ${r.$4}
            ${n}
            ${r.Bc}
          </style>
          <div id="content" class="vl-typography"></div>
        `),this._observer=this.__observeSlotElements(()=>this.__processSlotElements())}connectedCallback(){super.connectedCallback(),this.__processSlotElements()}disconnectedCallback(){this._observer.disconnect()}_parametersChangedCallback(e,t){this.__processSlotElements()}__processSlotElements(){this.__clearChildren();let e=this.dataset.vlParameters?JSON.parse(this.dataset.vlParameters):{},t=m.replaceTemplateParameters(this.innerHTML,e);this._element.insertAdjacentHTML("afterbegin",t)}__clearChildren(){for(;this._element.hasChildNodes();)this._element.firstChild.remove()}__observeSlotElements(e){let t=new MutationObserver(e);return t.observe(this,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),t}static replaceTemplateParameters(e,t){return Object.keys(t).forEach(s=>e=e.replaceAll("${parameter."+s+"}",t[s])),e=e.replace(/\${parameter.\w+}/g,"")}}m=function(e,t,s,a){var l,r=arguments.length,i=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,s,a);else for(var o=e.length-1;o>=0;o--)(l=e[o])&&(i=(r<3?l(i):r>3?l(t,s,i):l(t,s))||i);return r>3&&i&&Object.defineProperty(t,s,i),i}([(0,a.a6)("vl-typography")],m)}}]);