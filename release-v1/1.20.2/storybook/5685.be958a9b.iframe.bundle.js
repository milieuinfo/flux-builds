"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[5685],{"./libs/components/src/proza-message/vl-proza-message-preloader.component.ts":(e,t,a)=>{a.d(t,{T:()=>r});var s=a("./libs/common/utilities/src/index.ts"),o=a("./libs/components/src/proza-message/vl-proza-rest-client.util.ts");let r=class extends(0,s.W$)(HTMLElement){static get _observedAttributes(){return["domain"]}constructor(){super(),this._preload()}_domainChangedCallback(){this._preload()}get _domain(){return this.dataset.vlDomain}get _baseUrl(){return this.dataset.vlBaseUrl}_preload(){this._domain&&r._preload(this._domain,this._baseUrl)}static _preload(e,t){r.isPreloaded(e)||r.__setPreloadedMessagesCacheForDomain(e,o.o.getMessages(e,t))}static getMessage(e,t){return r._getMessages(e).then(a=>{let s=a[t];if(s)return s;throw Error(`Bericht voor {domein: ${e}, code: ${t}} niet gevonden`)})}static async getProzaCodes(e,t,a){r._preload(e,a);let s=await r._getMessages(e);return Object.keys(s).filter(e=>e.startsWith(t))}static isPreloaded(e){return!!r.__getPreloadedMessagesCacheForDomain(e)}static _getMessages(e){return r.isPreloaded(e)?r.__getPreloadedMessagesCacheForDomain(e):Promise.reject(Error(`Berichten voor domein ${e} zijn niet preloaded`))}static get __domainCache(){return r.__cache||(r.__cache={}),r.__cache}static __getCacheForDomain(e){let t=r.__domainCache;return t[e]||(t[e]={}),t[e]}static __getPreloadedMessagesCacheForDomain(e){return r.__getCacheForDomain(e).messages}static __setPreloadedMessagesCacheForDomain(e,t){r.__getCacheForDomain(e).messages=t}};r=function(e,t,a,s){var o,r=arguments.length,n=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,a):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,s);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(n=(r<3?o(n):r>3?o(t,a,n):o(t,a))||n);return r>3&&n&&Object.defineProperty(t,a,n),n}([(0,s.a6)("vl-proza-message-preloader")],r)},"./libs/components/src/proza-message/vl-proza-message.component.ts":(e,t,a)=>{a.d(t,{y:()=>p});var s=a("./libs/common/utilities/src/index.ts"),o=a("./libs/elements/src/index.ts"),r=a("./libs/components/src/typography/vl-typography.component.ts"),n=a("./libs/components/src/proza-message/vl-proza-message-preloader.component.ts"),i=a("./node_modules/lit/index.js");let l=(0,i.iv)`
    :host {
        display: inline-block;
        position: relative;
    }

    .vl-proza-message--updatable:hover {
        box-shadow: 0 0 0 1px #e8ebee;
    }

    .vl-proza-message--updatable {
        display: inline-flex;
        align-items: center;
    }
    .vl-proza-message--updatable > *:not(:last-child) {
        padding-right: 0.5em;
    }
    .vl-proza-message--updatable #actions {
        display: inline-flex;
        align-items: center;
    }
    .vl-proza-message--updatable #actions > *:not(:last-child) {
        margin-right: 0.3em;
    }

    :host(.vl-proza-message__block) .vl-proza-message--updatable {
        align-items: end;
    }

    [is='vl-button'] {
        cursor: pointer !important;
        height: 1.5em !important;
        width: 1.5em !important;
        background-color: #e8ebee !important;
    }
    [is='vl-button']:hover {
        background-color: #cbd2da !important;
    }
    [is='vl-button'] [is='vl-icon'] {
        color: #000;
    }
    [is='vl-button'] [is='vl-icon']:hover {
        mix-blend-mode: hard-light;
    }

    [is='vl-icon'] {
        font: icon !important;
        vertical-align: middle !important;
    }
`,c=[...o.CX,l];var d=a("./libs/components/src/proza-message/vl-proza-rest-client.util.ts");let p=class extends(0,s.W$)(HTMLElement){static{(0,s.YV)([o.d7,o.Gi,o.yK,r.P])}static get _observedAttributes(){return["domain","code","block","parameters"]}constructor(){super(),this.shadow(`
          <style>
            ${c}
          </style>
          <div>
            <vl-typography></vl-typography>
          </div>
        `)}async connectedCallback(){super.connectedCallback(),await this.__updatenIsToegelaten()&&this.__setupUpdatableMessage()}get _typographyElement(){return this.shadowRoot.querySelector("vl-typography")}get _actionsElement(){return this.shadowRoot.querySelector("#actions")}get _editButton(){return this.shadowRoot.querySelector("#edit-button")}get _refreshButton(){return this.shadowRoot.querySelector("#refresh-button")}_domainChangedCallback(){this._loadMessage()}_codeChangedCallback(){this._loadMessage()}_blockChangedCallback(){let e="vl-proza-message__block";this.hasAttribute("data-vl-block")?this.classList.add(e):this.classList.remove(e)}_parametersChangedCallback(){this._typographyElement&&this._parameters&&(this._typographyElement.dataset.vlParameters=this._parameters)}get _domain(){return this.dataset.vlDomain}get _code(){return this.dataset.vlCode}get _parameters(){return this.dataset.vlParameters}get _baseUrl(){return this.dataset.vlBaseUrl}_loadMessage(){this._domain&&this._code?p.getMessage(this._domain,this._code,null,this._baseUrl).then(e=>{this._typographyElement.innerHTML=e,this.__containsBlockElement()?this.toggleAttribute("data-vl-block",!0):this.toggleAttribute("data-vl-block",!1)}):this._typographyElement.innerHTML=null}_reloadMessage(){p.__getSingleMessage(this._domain,this._code,{forceUpdate:!0},this._baseUrl),this._loadMessage()}static async getMessage(e,t,a,s){let o=await p.__getRawMessage(e,t,s);return a?r.P.replaceTemplateParameters(o,a):o}static async __getRawMessage(e,t,a){let s=p.__getMessageCacheForDomain(e);if(s[t])return s[t];try{return await p.__getMessageFromPreloaderCache(e,t)}catch(s){return console.info(s),p.__getSingleMessage(e,t,void 0,a)}}static __getMessageFromPreloaderCache(e,t){return n.T.getMessage(e,t).catch(a=>{throw n.T.isPreloaded(e)&&console.warn(`Bericht voor {domein: ${e}, code: ${t}} kon niet opgevraagd worden uit de preload cache`,a),a})}static __getSingleMessage(e,t,a={forceUpdate:!1},s){let o=p.__getMessageCacheForDomain(e);return(!o[t]||a&&a.forceUpdate)&&p._putMessageInCache(e,t,a,s),o[t]}static _putMessageInCache(e,t,a,s){p.__getMessageCacheForDomain(e)[t]=d.o.getMessage(e,t,a,s)}static _getToegelatenOperaties(e,t){let a=p.__getToegelatenOperatiesCacheForDomain(e);return a||(a=d.o.getToegelatenOperaties(e,t),p.__setToegelatenOperatiesCacheForDomain(e,a)),a}static get __domainCache(){return p.__cache||(p.__cache={}),p.__cache}static __getCacheForDomain(e){let t=p.__domainCache;return t[e]||(t[e]={}),t[e]}static __getToegelatenOperatiesCacheForDomain(e){return p.__getCacheForDomain(e).toegelatenOperaties}static __setToegelatenOperatiesCacheForDomain(e,t){p.__getCacheForDomain(e).toegelatenOperaties=t}static __getMessageCacheForDomain(e){let t=p.__getCacheForDomain(e);return t.messages||(t.messages={}),t.messages}__containsBlockElement(){return[...this._typographyElement.children].some(e=>["block","inline-block","flex","grid","table"].includes(window.getComputedStyle(e).display))}async __updatenIsToegelaten(){return(await p._getToegelatenOperaties(this._domain,this._baseUrl)).update}__setupUpdatableMessage(){this._element.classList.add("vl-proza-message--updatable"),this._actionsElement||this._element.appendChild(this.__actionsElementTemplate())}__actionsElementTemplate(){let e=this._template(`
        <div id="actions"></div>
    `);return e.firstElementChild.appendChild(this.__editButtonTemplate()),e.firstElementChild.appendChild(this.__refreshButtonTemplate()),e}__editButtonTemplate(){let e=this._template(`
        <button is="vl-button" id="edit-button">
            <span is="vl-icon" data-vl-icon="pencil"></span>
            <span is="vl-text" data-vl-visually-hidden>edit</span>
        </button>
    `);return e.firstElementChild.addEventListener("click",e=>{e.stopPropagation(),e.preventDefault(),window.open(`/proza/domeinen/${this._domain}/codes/${this._code}`,"_blank")}),e}__refreshButtonTemplate(){let e=this._template(`
        <button is="vl-button" id="refresh-button">
            <span is="vl-icon" data-vl-icon="text-redo"></span>
            <span is="vl-text" data-vl-visually-hidden>refresh</span>
        </button>
    `);return e.firstElementChild.addEventListener("click",e=>{e.stopPropagation(),e.preventDefault(),this._reloadMessage()}),e}};p=function(e,t,a,s){var o,r=arguments.length,n=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,a):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,s);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(n=(r<3?o(n):r>3?o(t,a,n):o(t,a))||n);return r>3&&n&&Object.defineProperty(t,a,n),n}([(0,s.a6)("vl-proza-message")],p)},"./libs/components/src/proza-message/vl-proza-rest-client.util.ts":(e,t,a)=>{a.d(t,{o:()=>s});class s{static getMessage(e,t,a={},o){let r={},n=o?`${o}proza/domein/${e}/${t}`:`proza/domein/${e}/${t}`;return a.forceUpdate&&(r.cache="no-store"),s.__fetchJson(n,r).then(e=>e.tekst).catch(a=>(console.error(`Er is iets fout gelopen bij het ophalen van het Proza bericht voor {domein: ${e}, code: ${t}}`,a),Promise.reject(a)))}static getMessages(e,t){let a=t?`${t}proza/domein/${e}`:`proza/domein/${e}`;return s.__fetchJson(a,{cache:"no-cache"}).then(e=>Object.assign({},...e.map(e=>({[e.code]:e.tekst})))).catch(t=>(console.error(`Er is iets fout gelopen bij het ophalen van de Proza berichten voor domein ${e}`,t),Promise.reject(t)))}static getToegelatenOperaties(e,t){let a=t?`${t}proza/domein/${e}/toegelatenoperaties`:`proza/domein/${e}/toegelatenoperaties`;return s.__fetchJson(a,null).catch(t=>(console.error(`Er is iets fout gelopen bij het ophalen van de toegelaten Proza operaties voor domein ${e}`,t),Promise.reject(t)))}static __fetchJson(e,t){return fetch(e,t??{}).then(s.__handleError)}static __handleError(e){if(e.ok)return e.json();throw Error(`Response geeft aan dat er een fout is: ${e.statusText}`)}}},"./libs/components/src/typography/vl-typography.component.ts":(e,t,a)=>{a.d(t,{P:()=>c});var s=a("./libs/common/utilities/src/index.ts"),o=a("./node_modules/@domg/govflanders-style/common/index.js"),r=a("./node_modules/@domg/govflanders-style/component/index.js"),n=a("./node_modules/lit/index.js");let i=(0,n.iv)`
    .vl-typography {
        display: inline;
    }
`,l=[o.$4,i],c=class extends(0,s.W$)(HTMLElement){static get _observedAttributes(){return["parameters"]}constructor(){super(`
          <style>
            ${o.YN}
            ${o.Oh}
            ${o.QT}
            ${r.$4}
            ${l}
            ${r.Bc}
          </style>
          <div id="content" class="vl-typography"></div>
        `),this._observer=this.__observeSlotElements(()=>this.__processSlotElements())}connectedCallback(){super.connectedCallback(),this.__processSlotElements()}disconnectedCallback(){this._observer.disconnect()}_parametersChangedCallback(e,t){this.__processSlotElements()}__processSlotElements(){this.__clearChildren();let e=this.dataset.vlParameters?JSON.parse(this.dataset.vlParameters):{},t=c.replaceTemplateParameters(this.innerHTML,e);this._element.insertAdjacentHTML("afterbegin",t)}__clearChildren(){for(;this._element.hasChildNodes();)this._element.firstChild.remove()}__observeSlotElements(e){let t=new MutationObserver(e);return t.observe(this,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),t}static replaceTemplateParameters(e,t){return Object.keys(t).forEach(a=>e=e.replaceAll("${parameter."+a+"}",t[a])),e=e.replace(/\${parameter.\w+}/g,"")}};c=function(e,t,a,s){var o,r=arguments.length,n=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,a):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,s);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(n=(r<3?o(n):r>3?o(t,a,n):o(t,a))||n);return r>3&&n&&Object.defineProperty(t,a,n),n}([(0,s.a6)("vl-typography")],c)}}]);