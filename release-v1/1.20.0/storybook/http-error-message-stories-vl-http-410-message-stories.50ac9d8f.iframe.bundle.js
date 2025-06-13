"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[7059],{"./libs/components/src/http-error-message/vl-http-410-message.component.ts":(e,t,s)=>{var l=s("./libs/common/utilities/src/index.ts"),a=s("./libs/elements/src/index.ts"),r=s("./node_modules/@domg/govflanders-style/common/index.js"),i=s("./node_modules/@domg/govflanders-style/component/index.js"),n=s("./node_modules/lit/index.js"),o=s("./libs/components/src/http-error-message/vl-http-error-message.component.ts");let c=class extends l.fS{static{(0,l.YV)([o.k,a.uu])}static get styles(){return[r.Oh,i.jn]}render(){return(0,n.dy)`
            <vl-http-error-message
                data-vl-title="Pagina bestaat niet meer"
                data-vl-image="https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/page-not-found.svg"
                data-vl-image-alt="Verzoek bestaat niet meer"
            >
                <p slot="text">
                    Deze pagina bestaat niet meer.
                    <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 410">Mail de helpdesk</a> en vermeld
                    daarbij de URL hierboven en de foutcode 410.
                </p>
                <div slot="actions">
                    <a is="vl-link-button" href="/">Terug naar de startpagina</a>
                </div>
            </vl-http-error-message>
        `}};c=function(e,t,s,l){var a,r=arguments.length,i=r<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,s):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,s,l);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(i=(r<3?a(i):r>3?a(t,s,i):a(t,s))||i);return r>3&&i&&Object.defineProperty(t,s,i),i}([(0,l.a6)("vl-http-410-message")],c)},"./libs/components/src/http-error-message/vl-http-error-message.component.ts":(e,t,s)=>{s.d(t,{k:()=>i});var l=s("./libs/common/utilities/src/index.ts"),a=s("./libs/elements/src/index.ts"),r=s("./libs/components/src/typography/vl-typography.component.ts");let i=class extends(0,l.W$)(HTMLElement){static{(0,l.YV)([a.CH,a.YY,a.Br,r.P])}static get _observedAttributes(){return["title","image","image-alt"]}constructor(){super(`
          <style>
            ${a.CX}
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
        `)}connectedCallback(){super.connectedCallback(),this.__processAttributes()}get _title(){return this.dataset.vlTitle||this._defaults.title}get _image(){return this.dataset.vlImage||this._defaults.image}get _imageAlt(){return this.dataset.vlImageAlt||this._defaults.imageAlt}_titleChangedCallback(){this.__processTitle()}_imageChangedCallback(){this.__processImage()}_imageAltChangedCallback(){this.__processImageAlt()}__setImageAttribute(e,t){this.__imageForSmallScreensElement.setAttribute(e,t),this.__imageForNormalScreensElement.setAttribute(e,t)}get __titleElement(){return this._element.querySelector("#title")}get __textElement(){return this._element.querySelector("#text")}get __actionsElement(){return this._element.querySelector("#actions")}get __actionElement(){return this._element.querySelector("#actions > *")}get __imageForSmallScreensElement(){return this._element.querySelector("#image-small")}get __imageForNormalScreensElement(){return this._element.querySelector("#image-normal")}__processTitle(){this.__titleElement.textContent=this._title}__processImage(){this.__setImageAttribute("src",this._image)}__processImageAlt(){this.__setImageAttribute("alt",this._imageAlt)}__processAttributes(){this.__processTitle(),this.__processImage(),this.__processImageAlt()}};i=function(e,t,s,l){var a,r=arguments.length,i=r<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,s):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,s,l);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(i=(r<3?a(i):r>3?a(t,s,i):a(t,s))||i);return r>3&&i&&Object.defineProperty(t,s,i),i}([(0,l.a6)("vl-http-error-message")],i)},"./libs/components/src/typography/vl-typography.component.ts":(e,t,s)=>{s.d(t,{P:()=>c});var l=s("./libs/common/utilities/src/index.ts"),a=s("./node_modules/@domg/govflanders-style/common/index.js"),r=s("./node_modules/@domg/govflanders-style/component/index.js"),i=s("./node_modules/lit/index.js");let n=(0,i.iv)`
    .vl-typography {
        display: inline;
    }
`,o=[a.$4,n],c=class extends(0,l.W$)(HTMLElement){static get _observedAttributes(){return["parameters"]}constructor(){super(`
          <style>
            ${a.YN}
            ${a.Oh}
            ${a.QT}
            ${r.$4}
            ${o}
            ${r.Bc}
          </style>
          <div id="content" class="vl-typography"></div>
        `),this._observer=this.__observeSlotElements(()=>this.__processSlotElements())}connectedCallback(){super.connectedCallback(),this.__processSlotElements()}disconnectedCallback(){this._observer.disconnect()}_parametersChangedCallback(e,t){this.__processSlotElements()}__processSlotElements(){this.__clearChildren();let e=this.dataset.vlParameters?JSON.parse(this.dataset.vlParameters):{},t=c.replaceTemplateParameters(this.innerHTML,e);this._element.insertAdjacentHTML("afterbegin",t)}__clearChildren(){for(;this._element.hasChildNodes();)this._element.firstChild.remove()}__observeSlotElements(e){let t=new MutationObserver(e);return t.observe(this,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),t}static replaceTemplateParameters(e,t){return Object.keys(t).forEach(s=>e=e.replaceAll("${parameter."+s+"}",t[s])),e=e.replace(/\${parameter.\w+}/g,"")}};c=function(e,t,s,l){var a,r=arguments.length,i=r<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,s):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,s,l);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(i=(r<3?a(i):r>3?a(t,s,i):a(t,s))||i);return r>3&&i&&Object.defineProperty(t,s,i),i}([(0,l.a6)("vl-typography")],c)},"./libs/components/src/http-error-message/stories/vl-http-410-message.stories.ts":(e,t,s)=>{s.r(t),s.d(t,{default:()=>a,http410MessageDefault:()=>r});var l=s("./node_modules/lit-html/lit-html.js");s("./libs/components/src/http-error-message/vl-http-410-message.component.ts");let a={title:"components/http-error-message"},r=()=>(0,l.dy)` <vl-http-410-message></vl-http-410-message>`;r.storyName="vl-http-410-message - default",r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"() => html` <vl-http-410-message></vl-http-410-message>`",...r.parameters?.docs?.source}}}}}]);