(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[8218],{"./libs/components/src/accordion-list/vl-accordion-list.component.ts":(e,t,s)=>{"use strict";var i=s("./node_modules/lit/index.js"),l=s("./node_modules/@domg/govflanders-style/component/index.js"),r=s("./node_modules/@domg/govflanders-style/common/index.js");s("./node_modules/reflect-metadata/Reflect.js");var o=s("./libs/common/utilities/src/index.ts"),n=s("./node_modules/lit/decorators.js");function a(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}class c extends o.fS{constructor(){super(),this.observer=null,this.bordered=!1,this.bordered=!1}static get styles(){return[r.YN,l.R1]}firstUpdated(){this.observer=new MutationObserver(()=>{this.requestUpdate()}),this.observer.observe(this,{subtree:!0,childList:!0})}disconnectedCallback(){this.observer?.disconnect()}render(){return(0,i.dy)`
            <ul class="vl-accordion-list ${this.bordered?"vl-accordion-list--bordered":""}">
                ${[...Array.from(this.children)].map((e,t)=>{let s=`item-${t}`;return e.setAttribute("slot",s),(0,i.dy)`
                        <li class="vl-accordion-list__item">
                            <slot name="${s}"> </slot>
                        </li>
                    `})}
            </ul>
        `}}a([(0,n.Cb)({type:Boolean,attribute:"data-vl-bordered",reflect:!0})],c.prototype,"bordered",void 0),c=a([(0,o.a6)("vl-accordion-list")],c)},"./libs/components/src/accordion/vl-accordion.component.ts":(e,t,s)=>{"use strict";s.d(t,{b:()=>a});var i=s("./libs/common/utilities/src/index.ts"),l=s("./node_modules/@domg/govflanders-style/component/index.js"),r=s("./node_modules/@domg/govflanders-style/common/index.js"),o=s("./node_modules/lit/index.js");let n=(0,o.iv)`
    :host(.vl-accordion--bold) .vl-accordion__title,
    :host(.vl-accordion--bold) .vl-accordion__icon::before {
        font-weight: 700;
    }

    :host(.vl-accordion--disabled) .vl-toggle {
        cursor: not-allowed;
        text-decoration: none;
    }
    :host(.vl-accordion--disabled) .vl-accordion__title,
    :host(.vl-accordion--disabled) .vl-accordion__icon::before {
        color: #687483;
    }

    .vl-accordion:not(.js-vl-accordion--open) .vl-accordion__content {
        display: none;
    }

    .vl-accordion.vl-accordion--has-icon .vl-vi-arrow-right-fat {
        order: 2;
        margin-left: auto;
        padding-right: 0;
        padding-left: 0.4rem;
    }

    .vl-accordion__subtitle {
        margin-left: 22px;
        padding-left: 0.4rem;
    }

    .vl-accordion__button-container {
        display: flex;
    }

    .js-vl-accordion--open > .vl-accordion__button-container > .vl-toggle > .vl-vi-arrow-right-fat::before {
        transform: rotate(-90deg);
    }
`;s("./node_modules/@govflanders/vl-ui-util/dist/js/util.js"),s("./node_modules/@govflanders/vl-ui-accordion/dist/js/accordion.js"),s("./node_modules/reflect-metadata/Reflect.js");class a extends(0,i.W$)(HTMLElement){static get _observedAttributes(){return["toggle-text","open-toggle-text","close-toggle-text","content-padding"]}static get _observedClassAttributes(){return["bold","disabled"]}get _classPrefix(){return"vl-accordion--"}constructor(){super(`
          <style>
           ${r.YN}
           ${l.jn}
           ${l.oQ}
           ${l.RP}
           ${l.ob}
           ${l.R1}
           ${n}
          </style>
          <div class="js">
            <div class="vl-accordion" data-vl-accordion>
            <div class="vl-accordion__button-container">
              <button class="vl-toggle vl-link vl-link--bold" data-vl-accordion-toggle>
                <i class="vl-accordion__icon vl-link__icon vl-link__icon--before vl-toggle__icon vl-vi vl-vi-arrow-right-fat" aria-hidden="true"></i>
                <slot name="title" class="vl-accordion__title"></slot>
              </button>
              <div class="vl-accordion__menu">
                <slot name="menu"></slot>
              </div>
            </div>
              <div class="vl-accordion__subtitle">
                <slot name="subtitle"></slot>
              </div>
              <div class="vl-accordion__content js-vl-accordion__content">
                <div class="vl-accordion__panel">
                  <slot id="accordion-slot"></slot>
                </div>
              </div>
            </div>
          </div>
        `)}connectedCallback(){super.connectedCallback(),this.dress(),this._hasTitleSlot()&&this._propagateTitleSlotClickToAccordion(),this.hasAttribute("icon")&&(this._addIconElement(),this._accordionElement.classList.add("vl-accordion--has-icon")),this.hasAttribute("default-open")&&this.open(),this._buttonElement?.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("vl-on-toggle",{detail:{open:this._isOpen}}))})}_propagateTitleSlotClickToAccordion(){this._titleElement.addEventListener("click",e=>{e.stopPropagation(),this._buttonElement.click()})}_addIconElement(){let e=this.getAttribute("icon"),t=document.createElement("i");t.classList.add("vl-accordion__icon","vl-link__icon","vl-link__icon--before","vl-toggle__icon","vl-vi",`vl-vi-${e}`),t.setAttribute("aria-hidden","true"),this._buttonElement?.prepend(t)}_hasTitleSlot(){return this._titleElement.assignedElements().length>0}get _accordionElement(){return this._element.querySelector("[data-vl-accordion]")}get _buttonElement(){return this._element.querySelector("button")}get _titleElement(){return this._buttonElement.querySelector('slot[name="title"]')}get _openToggleTextAttribute(){return this.getAttribute("open-toggle-text")}get _closeToggleTextAttribute(){return this.getAttribute("close-toggle-text")}get _dressedAttribute(){return this.getAttribute("accordion-dressed")}get _isDressed(){return!!this._dressedAttribute}get _isOpen(){return this._accordionElement.classList.contains("js-vl-accordion--open")}dress(){this._isDressed||vl.accordion.dress(this._buttonElement)}open(){vl.accordion.open(this._accordionElement)}close(){this._isOpen&&this.toggle()}toggle(){vl.accordion.toggle(this._accordionElement)}_toggleTextChangedCallback(e,t){this._titleElement.textContent=t}_openToggleTextChangedCallback(e,t){this._titleElement.classList.add("js-vl-accordion__toggle__text"),this._titleElement.setAttribute("data-vl-accordion-open-text",t)}_closeToggleTextChangedCallback(e,t){this._titleElement.classList.add("js-vl-accordion__toggle__text"),this._titleElement.setAttribute("data-vl-accordion-close-text",t)}_contentPaddingChangedCallback(e,t){let s=i.RE[t],l=this._element.querySelector(".vl-accordion__panel");s?l.style.padding=s:l.style.removeProperty("padding")}_disabledChangedCallback(e,t){void 0!=t?this._buttonElement?.setAttribute("disabled",""):this._buttonElement?.removeAttribute("disabled")}}a=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,i.a6)("vl-accordion")],a)},"./libs/components/src/alert/vl-alert.component.ts":(e,t,s)=>{"use strict";s.d(t,{q:()=>d});var i=s("./node_modules/lit/index.js"),l=s("./node_modules/lit/decorators.js"),r=s("./libs/common/utilities/src/index.ts"),o=s("./node_modules/@domg/govflanders-style/component/index.js"),n=s("./node_modules/@domg/govflanders-style/common/index.js"),a=s("./libs/components/src/alert/vl-alert.model.ts"),c=s("./node_modules/lit/directives/class-map.js");class d extends r.fS{static get styles(){return[n.YN,o.L1,o.oQ,n.PC,n.VB]}static get properties(){return{icon:{type:String,attribute:"data-vl-icon",reflect:!0},title:{type:String,attribute:"data-vl-title",reflect:!0},closable:{type:Boolean,attribute:"data-vl-closable",reflect:!0},type:{type:String,attribute:"data-vl-type",reflect:!0},size:{type:String,attribute:"data-vl-size",reflect:!0},naked:{type:Boolean,attribute:"data-vl-naked",reflect:!0},message:{type:String,attribute:"data-vl-message",reflect:!0}}}updated(e){super.updated(e),this.processButtons()}render(){let e={"vl-alert":!0,[`vl-alert--${this.type}`]:!!this.type,"vl-alert--small":"small"===this.size,"vl-alert--naked":this.naked},t=this.naked?`vl-u-mark--${this.type}`:"";return(0,i.dy)`
            <div id="alert" class=${(0,c.$)(e)} role="alert">
                ${this.icon&&(0,i.dy)` <div class="vl-alert__icon">
                    <span is="vl-icon" data-vl-icon="${this.icon}"></span>
                </div>`}
                <div id="content" class="vl-alert__content">
                    <p id="title" class="vl-alert__title">
                        <slot class=${t} name="title">${this.title}</slot>
                    </p>
                    <div id="message" class="vl-alert__message">
                        <p class=${t}>${this.message}</p>
                        <slot id="message-slot"></slot>
                    </div>
                    <div id="actions" class="vl-alert__actions">
                        <slot id="actions-slot" name="actions"></slot>
                    </div>
                </div>
                ${this.closable?(0,i.dy)`
                          <button id="close" class="vl-alert__close" type="button" @click=${this.removeAlert}>
                              <i class="vl-vi vl-vi-cross" aria-hidden="true"></i>
                              <span class="vl-u-visually-hidden">Melding sluiten</span>
                          </button>
                      `:""}
            </div>
        `}removeAlert(){this.parentElement?.removeChild(this),this.dispatchEvent(new a.zL)}processButtons(){let e=this.renderRoot.querySelector('slot[name="actions"]');(e?.assignedNodes().filter(e=>e instanceof HTMLButtonElement)).forEach(e=>e.setAttribute("data-vl-narrow",""))}constructor(...e){super(...e),this.icon="",this.title="",this.type="",this.size="",this.message="",this.naked=!1,this.closable=!1}}d=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,l.Mo)("vl-alert")],d)},"./libs/components/src/alert/vl-alert.model.ts":(e,t,s)=>{"use strict";s.d(t,{Xo:()=>i,ms:()=>l,tO:()=>r,zL:()=>o});let i={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error"},l={WARNING:"warning",CHECK:"check",INFO_CIRCLE:"info-circle"},r={SMALL:"small"};class o extends Event{static{this.eventType="vl-alert-closed"}constructor(){super(o.eventType,{bubbles:!0})}}},"./libs/components/src/annotation/vl-annotation.component.ts":(e,t,s)=>{"use strict";s.d(t,{P:()=>a});var i=s("./node_modules/@domg/govflanders-style/component/index.js"),l=s("./node_modules/@domg/govflanders-style/common/index.js"),r=s("./node_modules/lit/index.js"),o=s("./node_modules/lit/decorators.js"),n=s("./libs/common/utilities/src/index.ts");class a extends n.fS{static get styles(){return[l.YN,i.po]}static get properties(){return{small:{type:Boolean,attribute:"data-vl-small",reflect:!0}}}render(){return(0,r.dy)`<span class="vl-annotation ${this.small?"vl-annotation--small":""}"><slot></slot></span>`}constructor(...e){super(...e),this.small=!1}}a=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,o.Mo)("vl-annotation")],a)},"./libs/components/src/autocomplete/vl-autocomplete.component.ts":(e,t,s)=>{"use strict";s.d(t,{dY:()=>m,$3:()=>h,r2:()=>u});var i=s("./libs/common/utilities/src/index.ts"),l=s("./libs/elements/src/index.ts"),r=s("./node_modules/@domg/govflanders-style/common/index.js"),o=s("./node_modules/@domg/govflanders-style/component/index.js"),n=s("./node_modules/lit/index.js"),a=s("./node_modules/lit/decorators.js");s("./node_modules/reflect-metadata/Reflect.js");var c=s("./libs/components/src/autocomplete/vl-autocomplete.model.ts");let d=(0,n.iv)`
    :is(input[name='vl-autocomplete-1-input-name'][show-clear=''].vl-input-field) {
        padding-right: 3rem;

        &:hover {
            padding-right: 2.9rem;
        }

        &:hover:focus {
            padding-right: 3rem;
        }
    }

    label.small {
        font-size: 14px;
    }

    li.uig-autocomplete-group {
        font-weight: bold;
    }

    .js-vl-autocomplete div.vl-autocomplete__list-wrapper,
    .js-vl-autocomplete div.autocomplete__list-wrapper {
        max-height: 100vh;
    }

    .js-vl-autocomplete .ui-autocomplete__loader-with-clear {
        right: 20px;
    }

    .uig-autocomplete__clear {
        position: absolute;
        top: 0px;
        right: 0px;
        width: 25px;
        height: 3.5rem;
        z-index: 2;
    }

    .uig-autocomplete__clear .uig-autocomplete__clear-icon::before {
        display: block;
        position: absolute;
        width: 20px;
        height: 20px;
        margin-top: 4px;
        cursor: pointer;
        line-height: 1.5;
        font-size: 1.8rem;
    }
`,h=15,u=3,m=c.w.TITLE_SUBTITLE_VERTICAL;class p extends i.fS{static{(0,i.YV)([l.Gi])}static get styles(){return[r.YN,r.Oh,o.Tb,o.K$,d]}static get properties(){return{minChars:{type:Number,attribute:"data-vl-min-chars",reflect:!0},items:Array,loading:{type:Boolean,reflect:!0},opened:{type:Boolean,reflect:!0},firstValidItemIndex:{type:Number,reflect:!0},maxSuggestions:{type:Number,attribute:"data-vl-max-suggestions"},groupBy:{type:String,attribute:"data-vl-group-by"},captionFormat:{type:String,attribute:"data-vl-caption-format"},placeholder:{type:String,attribute:"placeholder"},initialValue:{type:String,attribute:"data-vl-initial-value",reflect:!0},showClear:{type:Boolean,attribute:"data-vl-show-clear",reflect:!0},label:{type:String,attribute:"data-vl-label",reflect:!0},noMatchesText:{type:String,attribute:"data-vl-no-matches-text",reflect:!0},labelSmall:{type:Boolean,attribute:"data-vl-label-small",reflect:!0},clearTooltip:{type:String,attribute:"data-vl-clear-tooltip",reflect:!0},disableLoading:{type:Boolean,attribute:"data-vl-disable-loading",reflect:!0}}}get contentElement(){return this._inputEl?this._inputEl:this.shadowRoot?(this._inputEl=this.shadowRoot.getElementById(this.defaultInputId),this._inputEl):null}set dataMinChars(e){this.minChars=e}constructor(){super(),this.minChars=0,this.items=[],this.loading=!1,this.opened=!1,this.maxSuggestions=0,this.groupBy="",this.captionFormat="",this.placeholder="",this.defaultInputId="",this.clearTooltip="",this.labelSmall="",this._blur=!1,this._mouseEnter=!1,this.defaultInputId="autocompleteDefaultInput",this.initialised=!1,this._eventReferences={},this._matches=[],this._groupedMatches=new Map,this.firstValidItemIndex=null,this.minChars=u,this.items=[],this.initialValue="",this._inputEl=null,this._highlightedEl=null,this._suggestionEl=null,this.loading=!1,this.opened=!1,this.showClear=!1,this.disableLoading=!1,this.maxSuggestions=h,this.captionFormat=m,this.noMatchesText="Geen resultaat",this.clearTooltip="Wissen"}firstUpdated(){this._suggestionEl=this.shadowRoot.getElementById("suggestions"),this._suggestionEl&&(this._suggestionEl.style.width="100%"),this._eventReferences.onFocus=this._onFocus.bind(this),this._eventReferences.onBlur=this._onBlur.bind(this),this._eventReferences.onKeyDown=this._onKeyDown.bind(this),this._eventReferences.onKeyUp=this._onKeyUp.bind(this),this.contentElement&&(this.contentElement.addEventListener("focus",this._eventReferences.onFocus),this.contentElement.addEventListener("blur",this._eventReferences.onBlur),this.contentElement.addEventListener("keydown",this._eventReferences.onKeyDown),this.contentElement.addEventListener("keyup",this._eventReferences.onKeyUp))}updated(e){let{_suggestionEl:t}=this;if((e.has("opened")||e.has("firstValidItemIndex"))&&this.opened&&t&&t.childElementCount){for(let e of t.children)e.classList.remove("vl-autocomplete__cta--focus");null!=this.firstValidItemIndex&&(this._highlightedEl=t.children[this.firstValidItemIndex],this._highlightedEl&&this._highlightedEl.classList.add("vl-autocomplete__cta--focus"))}}disconnectedCallback(){this.contentElement&&(this.contentElement.removeEventListener("keydown",this._eventReferences.onKeyDown),this.contentElement.removeEventListener("keyup",this._eventReferences.onKeyUp),this.contentElement.removeEventListener("focus",this._eventReferences.onFocus),this.contentElement.removeEventListener("blur",this._eventReferences.onBlur))}_onKeyDown(e){("ArrowUp"===e.key||"ArrowDown"===e.key)&&(e.preventDefault(),e.stopPropagation())}_onKeyUp(e){switch(e.key){case"ArrowUp":e.preventDefault(),e.stopPropagation(),this._markPreviousElement();break;case"ArrowDown":e.preventDefault(),e.stopPropagation(),this._markNextElement();break;case"Enter":this._highlightedEl&&this._highlightedEl.click()}}formatCaption(e){switch(this.captionFormat){case c.w.TITLE:return(0,n.dy)`<span class="uig-autocomplete_title">${e.title}</span>`;case c.w.SUBTITLE:return(0,n.dy)`<span class="uig-autocomplete_subtitle">${e.subtitle}</span>`;case c.w.VALUE:return(0,n.dy)`<span class="uig-autocomplete_value">${e.value}</span>`}if(null!=e.subtitle){if(this.captionFormat===c.w.TITLE_SUBTITLE_VERTICAL||null==this.captionFormat)return(0,n.dy)`<span class="uig-autocomplete_title uig-autocomplete_title">${e.title}</span
                    ><span class="uig-autocomplete_subtitle vl-autocomplete__cta__sub">${e.subtitle}</span>`;if(this.captionFormat===c.w.TITLE_SUBTITLE_HORIZONTAL)return(0,n.dy)`<span class="uig-autocomplete_title">${e.title}</span>:
                    <span class="uig-autocomplete_subtitle">${e.subtitle}</span>`;if(this.captionFormat===c.w.SUBTITLE_TITLE_HORIZONTAL)return(0,n.dy)`<span class="uig-autocomplete_subtitle">${e.subtitle}</span>:
                    <span class="uig-autocomplete_title">${e.title}</span>`}return(0,n.dy)`<span class="uig-autocomplete_title vl-autocomplete__cta__title">${e.title}</span>`}filterAndSuggest(e,t){let s=[];s=e&&t.filter(t=>-1!==t.title.replace(",","").replace(/\s/g,"").toLowerCase().search(e.replace(",","").replace(/\s/g,"").toLowerCase())).slice(0,this.maxSuggestions),this.suggest(s)}_markPreviousElement(){this._highlightedEl&&this._highlightedEl.previousElementSibling&&(this._highlightedEl.classList.remove("vl-autocomplete__cta--focus"),this._highlightedEl=this._highlightedEl.previousElementSibling,this._highlightedEl.classList.add("vl-autocomplete__cta--focus"),this._highlightedEl.scrollIntoView())}_markNextElement(){this._highlightedEl&&this._highlightedEl.nextElementSibling&&(this._highlightedEl.classList.remove("vl-autocomplete__cta--focus"),this._highlightedEl=this._highlightedEl.nextElementSibling,this._highlightedEl.classList.add("vl-autocomplete__cta--focus"),this._highlightedEl.scrollIntoView())}_onFocus(){this._blur=!1}_onBlur(){this._blur=!0,this._mouseEnter||this.close()}_handleItemMouseEnter(){this._mouseEnter=!0}_handleItemMouseLeave(){this._mouseEnter=!1,this._blur&&setTimeout(()=>this.close(),500)}open(){this._matches.length&&(this.opened=!0)}close(){this.opened=!1,this._highlightedEl=null}set matches(e){this.suggest(e)}suggest(e){let t=this.contentElement?this.contentElement.value:null;t&&t.length>=this.minChars?(this._matches=e||[],this._groupedMatches=new Map,this._matches.length>0?null!=this.groupBy&&this.groupBy.length>0?(this._matches.forEach(e=>{let t=e[this.groupBy],s=this._groupedMatches.get(t);null==s&&(s=[],this._groupedMatches.set(t,s)),s[s.length]=e}),this.firstValidItemIndex=1):this.firstValidItemIndex=0:(this._matches=[],this._matches.push({value:null,title:this.noMatchesText}),this.firstValidItemIndex=null)):this._matches=[],this._matches.length?this.open():this.close(),this.loading=!1,this.requestUpdate()}generateItems(){let e=0;if(this.groupBy&&this._groupedMatches.size>0){let t=[];return this._groupedMatches.forEach((s,i)=>{t.push((0,n.dy)` <li
                    class="vl-autocomplete__cta uig-autocomplete-group"
                    groupindex="${e}"
                >
                    ${i}
                </li>`),s.forEach(s=>t.push(this.generateItem(s,e))),e+=1}),(0,n.dy)`${t}`}return(0,n.dy)`${this._matches.map(t=>this.generateItem(t,e))}`}generateItem(e,t){return(0,n.dy)` <li
            @click=${()=>this.autocomplete(e.title,e.value?e.value:null)}
            class="vl-autocomplete__cta uig-autocomplete-item"
            groupindex="${t}"
            role="option"
            tabindex="-1"
        >
            ${this.formatCaption(e)}
        </li>`}autocomplete(e,t){null!=t&&(this.contentElement&&(this.contentElement.value=e),this.close(),this.dispatchEvent(new CustomEvent("selected-autocomplete",{detail:{title:e,value:t},composed:!0,bubbles:!0})))}_hasSearchTerm(){return this.contentElement&&this.contentElement.value&&this.contentElement.value.length>0}async _notify(){this.loading=!0;try{let e=this.contentElement&&this.contentElement.value;e&&e.length>=this.minChars?this.items&&this.items.length?this.filterAndSuggest(e,this.items):this.dispatchEvent(new CustomEvent("search",{detail:{searchTerm:e},bubbles:!0,composed:!0})):this.suggest([])}catch(e){throw this.loading=!1,e}}_clear(){this.contentElement&&(this.contentElement.value=""),this.suggest([]),this.dispatchEvent(new CustomEvent("clear",{bubbles:!0,composed:!0}))}_generateClear(){return this.showClear&&(this._hasSearchTerm()||!this.initialised&&this.initialValue)?(0,n.dy)` <div class="uig-autocomplete__clear" aria-hidden="true">
                <span
                    class="uig-autocomplete__clear-icon"
                    is="vl-icon"
                    icon="close"
                    @click="${this._clear}"
                    title="${this.clearTooltip}"
                ></span>
            </div>`:""}_wrapInLabel(e){return this.label&&0!==this.label.length?(0,n.dy)`<label class=${this.labelSmall?"small":""} for="${this.defaultInputId}">${this.label}</label
            >${e}`:e}render(){let e=this._wrapInLabel((0,n.dy)`
                <div class="js-vl-autocomplete">
                    <slot id="dropdown-input">
                        <input
                            type="text"
                            name="vl-autocomplete-1-input-name"
                            id="${this.defaultInputId}"
                            placeholder="${this.placeholder}"
                            ?show-clear="${this.showClear}"
                            class="vl-input-field vl-input-field--block"
                            aria-describedby="vl-autocomplete-1-hint"
                            autocomplete="off"
                            autocapitalize="off"
                            spellcheck="off"
                            aria-autocomplete="list"
                            aria-owns="suggestions"
                            aria-controls="suggestions"
                            aria-haspopup="listbox"
                            .value=${this.initialValue}
                            @input=${this._notify}
                        />
                    </slot>
                    <div
                        class="vl-autocomplete__loader ${this._hasSearchTerm()?"ui-autocomplete__loader-with-clear":""}"
                        aria-hidden="true"
                        ?hidden=${!this.loading||this.disableLoading}
                    ></div>
                    ${this._generateClear()}
                    <div
                        class="vl-autocomplete"
                        ?hidden=${!this.opened}
                        @mouseenter=${this._handleItemMouseEnter}
                        @mouseleave=${this._handleItemMouseLeave}
                        aria-hidden="false"
                        aria-labelledby="vl-autocomplete-1-input"
                    >
                        <div class="vl-autocomplete__list-wrapper uig-autocomplete__list-wrapper">
                            <ul id="suggestions" class="vl-autocomplete__list" role="listbox">
                                ${this.generateItems()}
                            </ul>
                        </div>
                    </div>
                </div>
            `);return this.initialised=!0,e}}p=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,a.Mo)("vl-autocomplete")],p)},"./libs/components/src/autocomplete/vl-autocomplete.model.ts":(e,t,s)=>{"use strict";s.d(t,{K:()=>l,w:()=>i});let i={TITLE:"title-only",SUBTITLE:"subtitle-only",VALUE:"value-only",TITLE_SUBTITLE_VERTICAL:"title-subtitle-vertical",TITLE_SUBTITLE_HORIZONTAL:"title-subtitle-horizontal",SUBTITLE_TITLE_HORIZONTAL:"subtitle-title-horizontal"},l={TITLE:"title",SUBTITLE:"subtitle"}},"./libs/components/src/breadcrumb/vl-breadcrumb-item.component.ts":(e,t,s)=>{"use strict";s.d(t,{h:()=>c});var i=s("./node_modules/@domg/govflanders-style/component/index.js"),l=s("./node_modules/@domg/govflanders-style/common/index.js"),r=s("./node_modules/lit/index.js"),o=s("./node_modules/lit/decorators.js"),n=s("./libs/components/src/breadcrumb/vl-breadcrumb.uig-css.ts"),a=s("./libs/common/utilities/src/index.ts");class c extends a.fS{static get properties(){return{href:{type:String,attribute:"data-vl-href",reflect:!0}}}static get styles(){return[l.YN,i.nC,n.Z]}render(){return this.href?(0,r.dy)`
                <a href=${this.href} class="vl-breadcrumb__list__item__cta">
                    <slot></slot>
                </a>
            `:(0,r.dy)`
            <span class="vl-breadcrumb__list__item__cta">
                <slot></slot>
            </span>
        `}constructor(...e){super(...e),this.href=""}}c=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,o.Mo)("vl-breadcrumb-item")],c)},"./libs/components/src/breadcrumb/vl-breadcrumb.component.ts":(e,t,s)=>{"use strict";s.d(t,{c:()=>c});var i=s("./node_modules/@domg/govflanders-style/component/index.js"),l=s("./node_modules/@domg/govflanders-style/common/index.js"),r=s("./node_modules/lit/index.js"),o=s("./node_modules/lit/decorators.js"),n=s("./libs/common/utilities/src/index.ts"),a=s("./libs/components/src/breadcrumb/vl-breadcrumb.uig-css.ts");class c extends n.fS{static get styles(){return[l.YN,i.nC,a.Z]}firstUpdated(){new MutationObserver(()=>{this.requestUpdate()}).observe(this,{subtree:!0,childList:!0})}render(){return(0,r.dy)`
            <nav aria-label="U bent hier: " class="vl-breadcrumb">
                <ol class="vl-breadcrumb__list">
                    ${[...Array.from(this.children)].map((e,t)=>{let s=`item-${t}`;return e.setAttribute("slot",s),(0,r.dy)`
                            <li class="vl-breadcrumb__list__item">
                                <span class="vl-breadcrumb__list__item__separator" aria-hidden="true"></span>
                                <slot name=${s}></slot>
                            </li>
                        `})}
                </ol>
            </nav>
        `}}c=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,o.Mo)("vl-breadcrumb")],c)},"./libs/components/src/breadcrumb/vl-breadcrumb.uig-css.ts":(e,t,s)=>{"use strict";s.d(t,{Z:()=>l});var i=s("./node_modules/lit/index.js");let l=(0,i.iv)`
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
`},"./libs/components/src/checkbox/vl-checkbox.component.ts":(e,t,s)=>{"use strict";s.d(t,{E:()=>o});var i=s("./libs/common/utilities/src/index.ts"),l=s("./node_modules/@domg/govflanders-style/component/index.js"),r=s("./node_modules/@domg/govflanders-style/common/index.js");class o extends(0,i.W$)(HTMLElement){static get formAssociated(){return!0}static get _observedAttributes(){return["label","name","value","checked","switch"]}static get _observedChildClassAttributes(){return["block","single","disabled","error"]}constructor(){super(`
      <style>
        ${r.YN}
        ${r.Oh}
        ${l.k3}
      </style>
    `),void 0!==this.dataset.vlSwitch?this._shadow.append(this._template(`
                <div class="vl-checkbox--switch__wrapper">
                  <input class="vl-checkbox--switch" type="checkbox" id="checkbox" name="checkbox" value="1" />
                  <label class="vl-checkbox__label" for="checkbox">
                    <span class="vl-checkbox--switch__label">
                      <span aria-hidden="true"></span>
                    </span>
                    <span>
                      <slot></slot>
                    </span>
                  </label>
                </div>
              `)):this._shadow.append(this._template(`
                <label id="label" class="vl-checkbox" for="checkbox">
                  <input class="vl-checkbox__toggle" type="checkbox" id="checkbox" name="checkbox"/>
                  <div class="vl-checkbox__label">
                    <i class="vl-checkbox__box" aria-hidden="true"></i>
                    <span>
                      <slot></slot>
                    </span>
                  </div>
                </label>
              `)),this.attachInternals?this._internals=this.attachInternals():this._internals=null}connectedCallback(){super.connectedCallback(),this._inputElement.onchange=this._toggle,this._inputElement.oninput=e=>e.stopPropagation(),this._registerChangeEvent()}formResetCallback(){this.checked=this.hasAttribute("checked")}get form(){return this._internals.form}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}get checked(){return this._inputElement.checked}set checked(e){this._inputElement.checked=e}toggle(){this._inputElement.click()}get _isSingle(){return this.hasAttribute("single")}get _classPrefix(){return"vl-checkbox--"}get _inputElement(){return this._element.querySelector("input")}get _labelElement(){return this._element.querySelector(".vl-checkbox__label > span:not(.vl-checkbox--switch__label)")}get _labelSlotElement(){return this._element.querySelector("slot")}_toggle(){let e;let t=this.getRootNode().host;if(t._checked&&Array.isArray(t._checked)){let s=JSON.parse(this.value);t._checked.indexOf(s)>-1?t._checked.splice(t._checked.indexOf(s),1):t._checked.push(s),e=t._checked,t.setAttribute("data-vl-checked",JSON.stringify(e))}else e=this.checked;t.dispatchEvent(new CustomEvent("input",{detail:this.checked,bubbles:!0,composed:!0}))}_labelChangedCallback(e,t){this._labelElement.textContent=t}_nameChangedCallback(e,t){this._inputElement.name!=t&&(this._inputElement.name=t,this.setAttribute("name",t))}_valueChangedCallback(e,t){this._inputElement.value=t}_checkedChangedCallback(e,t){try{this._checked=JSON.parse(t)}catch(e){this._checked=void 0!=t}Array.isArray(this._checked)?this._checked.indexOf(JSON.parse(this._inputElement.value))>-1&&(this._inputElement.checked=!0):this._inputElement.checked=this._checked}_disabledChangedCallback(e,t){this._inputElement.disabled=void 0!=t}_singleChangedCallback(e,t){this._toggleClass(this._labelElement,t,"vl-u-visually-hidden")}_isTextNode(e){return e.nodeType===Node.TEXT_NODE}_removeNode(e){e.remove()}_registerChangeEvent(){this._inputElement.addEventListener("change",()=>this.dispatchEvent(new Event("change")))}}o=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,i.a6)("vl-checkbox")],o)},"./libs/components/src/code-preview/vl-code-preview.component.ts":(e,t,s)=>{"use strict";var i=s("./libs/common/utilities/src/index.ts"),l=s("./node_modules/@domg/govflanders-style/common/index.js"),r=s("./node_modules/@domg/govflanders-style/component/index.js");s("./node_modules/@govflanders/vl-ui-code-preview/dist/js/code-preview.js"),s("./node_modules/@govflanders/vl-ui-core/dist/js/core.js"),s("./node_modules/@govflanders/vl-ui-util/dist/js/util.js");class o extends(0,i.W$)(HTMLElement){constructor(){super(`
          <style>
            ${l.YN}
            ${r.MM}
          </style>
          <div class="vl-code-preview" data-vl-code-preview data-vl-code-preview-no-copy-button>
            <pre class="line-numbers">
              <code class="language-markup auto-indent" tabindex="0"></code>
            </pre>
          </div>
        `),this._dress()}get _codeElement(){return this.shadowRoot.querySelector("code")}_dress(){[...this.children].forEach(e=>this._codeElement.append(e)),vl.codePreview.dress(this._element)}}o=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,i.a6)("vl-code-preview")],o)},"./libs/components/src/contact-card/vl-contact-card.component.ts":(e,t,s)=>{"use strict";s.d(t,{d:()=>c});var i=s("./libs/common/utilities/src/index.ts"),l=s("./libs/elements/src/index.ts"),r=s("./node_modules/@domg/govflanders-style/common/index.js"),o=s("./node_modules/@domg/govflanders-style/component/index.js"),n=s("./node_modules/lit/index.js");let a=(0,n.iv)`
    :root {
        --vl-theme-primary-color: #ffe615;
        --vl-theme-primary-color-60: #fff073;
        --vl-theme-primary-color-70: #ffee5b;
        --vl-theme-primary-color-rgba-30: rgba(255, 230, 21, 0.3);
        --vl-theme-fg-color: #333332;
        --vl-theme-fg-color-60: #858584;
        --vl-theme-fg-color-70: #707070;
    }

    .vl-vi::before,
    .vl-vi::after {
        font-family: 'vlaanderen-icon' !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-style: normal;
        font-variant: normal;
        font-weight: normal;
        text-decoration: none;
        text-transform: none;
        display: inline-block;
        vertical-align: middle;
    }
    .vl-vi.vl-vi-u-180deg::before {
        display: inline-block;
        transform: rotate(180deg);
        vertical-align: middle;
    }

    .vl-vi-u-xs::before {
        font-size: 0.8rem;
    }

    .vl-vi-u-s::before {
        font-size: 1.3rem;
    }

    .vl-vi-u-m::before {
        font-size: 1.7rem;
    }

    .vl-vi-u-l::before {
        font-size: 2rem;
    }

    .vl-vi-u-xl::before {
        font-size: 2.2rem;
    }

    .vl-vi-u-90deg::before {
        display: inline-block;
        transform: rotate(90deg);
    }

    .vl-vi-u-180deg::before {
        display: inline-block;
        transform: rotate(180deg);
    }

    .vl-contact-card__title,
    .vl-link.vl-contact-card__title {
        font-size: 2.2rem;
        font-family: 'Flanders Art Sans', sans-serif;
        font-weight: 500;
        margin-bottom: 1.8rem;
        line-height: 1.36;
        border-radius: 0;
        appearance: none;
        -webkit-appearance: none;
        border: 0;
        background-color: transparent;
        padding: 0;
        margin-bottom: 1rem;
        display: block;
        line-height: 3rem;
        overflow: hidden;
    }
    @media screen and (max-width: 767px) {
        .vl-contact-card__title,
        .vl-link.vl-contact-card__title {
            font-size: 2rem;
            margin-bottom: 1.4rem;
        }
    }

    .vl-contact-card__content {
        padding: 2.5rem;
        display: flex;
        flex-wrap: wrap;
        font-size: 1.6rem;
        line-height: 2rem;
    }
    @media screen and (min-width: 767px) {
        .vl-region--alt .vl-contact-card__content {
            padding: 0;
        }
    }
    @media screen and (max-width: 767px) {
        .vl-contact-card__content {
            display: block;
            font-size: 1.5rem;
            padding: 1.5rem;
        }
    }
    .no-flexbox .vl-contact-card__content::before,
    .no-flexbox .vl-contact-card__content::after {
        content: '';
        display: table;
    }
    .no-flexbox .vl-contact-card__content::after {
        clear: both;
    }
    .vl-contact-card__content .vl-map__container {
        height: 100%;
        margin-bottom: 0;
    }

    .vl-contact-card__data,
    .vl-contact-card__map {
        width: 50%;
    }
    .no-flexbox .vl-contact-card__data,
    .no-flexbox .vl-contact-card__map {
        float: left;
    }
    @media screen and (max-width: 767px) {
        .vl-contact-card__data,
        .vl-contact-card__map {
            width: auto;
        }
    }

    .vl-contact-card__data {
        padding-right: 1.5rem;
        line-height: 2.4rem;
    }
    @media screen and (max-width: 767px) {
        .vl-contact-card__data {
            padding-right: 0;
        }
    }

    .vl-contact-card__data__title {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        float: left;
        clear: left;
        width: 30%;
        padding-right: 0.5rem;
        margin-bottom: 1rem;
        white-space: normal;
        color: #687483;
    }
    @media screen and (max-width: 767px) {
        .vl-contact-card__data__title {
            display: none;
        }
    }

    .vl-contact-card__data__content {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        float: left;
        width: 70%;
        margin-bottom: 2.5rem;
        white-space: normal;
    }
    @media screen and (max-width: 767px) {
        .vl-contact-card__data__content {
            float: none;
            width: auto;
            margin-bottom: 1.25rem;
        }
    }

    .vl-contact-card__data__title *,
    .vl-contact-card__data__content * {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
    }

    .vl-contact-card__data__name {
        font-weight: 700;
    }

    .vl-contact-card__map {
        height: 25rem;
        padding-left: 1.5rem;
        position: relative;
        min-height: 25rem;
        overflow: hidden;
    }
    @media screen and (max-width: 767px) {
        .vl-contact-card__map {
            padding-left: 0;
            margin-top: 2rem;
            min-height: 0;
        }
    }
    .vl-contact-card__map .vl-map {
        width: 100%;
        height: 100%;
        border: 1px solid #cbd2da;
    }
    @media screen and (max-width: 767px) {
        .vl-contact-card__map .vl-map {
            position: relative;
            min-height: 15rem;
            height: auto;
        }
    }
    .no-js .vl-contact-card__map {
        height: auto;
        min-height: 0;
    }
    .no-js .vl-contact-card__map .vl-map {
        height: auto;
    }

    .vl-contact-card__footer {
        width: 100%;
        margin-top: 2.5rem;
        padding-top: 1rem;
        border-top: 1px solid #cbd2da;
        font-size: 1.6rem;
        overflow: hidden;
    }
    @media screen and (max-width: 767px) {
        .vl-contact-card__footer {
            margin-top: 1.5rem;
            font-size: 1.6rem;
        }
    }

    .vl-contact-card.js-vl-accordion .vl-contact-card__title {
        padding-left: 2rem;
        position: relative;
        cursor: pointer;
        margin-bottom: 0;
        transition: margin-bottom 0.3s;
    }
    .vl-contact-card.js-vl-accordion .vl-contact-card__title .vl-vi {
        position: absolute;
        left: 0;
        top: 0;
        transition: transform 0.2s;
        color: #333332;
        font-size: 1.3rem;
        line-height: 3.2rem;
    }
    .vl-contact-card.js-vl-accordion .vl-contact-card__content-wrapper {
        overflow: hidden;
        visibility: hidden;
        max-height: 0;
        transition: max-height 0.3s cubic-bezier(0, 1.05, 0, 1);
    }
    .vl-contact-card.js-vl-accordion .vl-contact-card__content-wrapper .vl-map {
        display: none;
    }
    .vl-contact-card.js-vl-accordion--open .vl-contact-card__title {
        margin-bottom: 1rem;
    }
    .vl-contact-card.js-vl-accordion--open .vl-contact-card__content-wrapper {
        max-height: 9999px;
        visibility: visible;
        transition: max-height 0.3s ease-in;
    }
    .vl-contact-card.js-vl-accordion--open .vl-contact-card__content-wrapper .vl-map {
        display: block;
    }
`;class c extends(0,i.W$)(HTMLElement){static{(0,i.YV)([l.CH,l.YY])}constructor(){super(`
            <style>
                ${r.YN}
                ${r.R8}
                ${o.o7}
                ${a}
            </style>
            <div class="vl-contact-data">
                <div is="vl-grid" data-vl-is-stacked>
                    <div is="vl-column" data-vl-size="3" data-vl-medium-size="12">
                        <slot name="info"></slot>
                    </div>
                    <div is="vl-column" data-vl-size="8" data-vl-medium-size="12" data-vl-push="1" class="vl-push--reset--m">
                        <slot name="properties"></slot>
                    </div>
                </div>
            </div>
         `)}}c=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,i.a6)("vl-contact-card")],c)},"./libs/components/src/content-header/vl-content-header.component.ts":(e,t,s)=>{"use strict";s.d(t,{q:()=>o});var i=s("./libs/common/utilities/src/index.ts"),l=s("./node_modules/@domg/govflanders-style/component/index.js"),r=s("./node_modules/@domg/govflanders-style/common/index.js");class o extends(0,i.W$)(HTMLElement){constructor(){super(`
          <style>
            ${r.YN}
            ${r.Oh}
            ${r.LF}
            ${l.iT}
          </style>
          <header class="vl-content-header vl-content-header--large vl-content-header--show-mobile vl-content-header--has-context">
            <div class="vl-content-header__wrapper">
              <picture id="picture" class="vl-content-header__bg"></picture>
              <div class="vl-layout">
                <div class="vl-content-header__content">
                <div id="context" class="vl-content-header__context vl-content-header__context--has-link"></div>
                  <h2 id="title" class="vl-content-header__title vl-content-header__title--has-link"></h2>
                </div>
              </div>
            </div>
          </header>
        `)}connectedCallback(){super.connectedCallback(),this.__processSlotElements(),this._observer=this.__observeSlotElements(()=>this.__processSlotElements())}disconnectedCallback(){this._observer.disconnect()}get pictureElement(){return this._shadow.querySelector("#picture")}get pictureSlotElement(){return this.querySelector('img[slot="image"]')}get contextElement(){return this._shadow.querySelector("#context")}get contextSlotElement(){return this.querySelector('a[slot="context-link"]')}get titleElement(){return this._shadow.querySelector("#title")}get titleSlotElement(){return this.querySelector('a[slot="title-link"]')}__processSlotElements(){this.__processSlot(this.pictureElement,this.pictureSlotElement),this.__processSlot(this.contextElement,this.contextSlotElement).classList.add("vl-content-header__context__link"),this.__processSlot(this.titleElement,this.titleSlotElement).classList.add("vl-content-header__title__link")}__clearChildren(e){for(;e.hasChildNodes();)e.firstChild?.remove()}__processSlot(e,t){this.__clearChildren(e);let s=t.cloneNode(!0);return e.appendChild(s),s}__observeSlotElements(e){let t=new MutationObserver(e);return t.observe(this,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),t}}o=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,i.a6)("vl-content-header")],o)},"./libs/components/src/description-data/vl-description-data-item.component.ts":(e,t,s)=>{"use strict";var i=s("./node_modules/@domg/govflanders-style/component/index.js"),l=s("./node_modules/@domg/govflanders-style/common/index.js"),r=s("./node_modules/lit/index.js"),o=s("./node_modules/lit/decorators.js"),n=s("./libs/common/utilities/src/index.ts");class a extends n.fS{static get styles(){return[l.YN,i.GS]}static get properties(){return{label:{type:String,attribute:"data-vl-label",reflect:!0},value:{type:String,attribute:"data-vl-value",reflect:!0}}}hasSlot(e){return[...Array.from(this.children)].find(t=>t.getAttribute("slot")===e)}render(){let e="vl-description-data__label",t="vl-description-data__value";return(0,r.dy)`
            ${this.hasSlot("label")?(0,r.dy)` <slot name="label" class=${e}></slot>`:(0,r.dy)`<span class=${e}>${this.label}</span>`}
            ${this.hasSlot("value")?(0,r.dy)`
                    <slot name="value" class=${t}></span>`:(0,r.dy)`<span class=${t}>${this.value}</span>`}
        `}constructor(...e){super(...e),this.label="",this.value=""}}a=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,o.Mo)("vl-description-data-item")],a)},"./libs/components/src/description-data/vl-description-data.component.ts":(e,t,s)=>{"use strict";var i=s("./node_modules/@domg/govflanders-style/component/index.js"),l=s("./node_modules/@domg/govflanders-style/common/index.js"),r=s("./node_modules/lit/index.js"),o=s("./node_modules/lit/decorators.js"),n=s("./libs/common/utilities/src/index.ts"),a=s("./libs/elements/src/index.ts");class c extends n.fS{static{(0,n.YV)([a.CH,a.YY])}static get styles(){return[l.YN,l.R8,i.GS]}static get properties(){return{size:{type:Number,attribute:"data-vl-items-size",reflect:!0},maxSize:{type:Number,attribute:"data-vl-items-max-size",reflect:!0},mediumSize:{type:Number,attribute:"data-vl-items-medium-size",reflect:!0},mediumMaxSize:{type:Number,attribute:"data-vl-items-medium-max-size",reflect:!0},smallSize:{type:Number,attribute:"data-vl-items-small-size",reflect:!0},smallMaxSize:{type:Number,attribute:"data-vl-items-small-max-size",reflect:!0},extraSmallSize:{type:Number,attribute:"data-vl-items-extra-small-size",reflect:!0},extraSmallMaxSize:{type:Number,attribute:"data-vl-items-extra-small-max-size",reflect:!0}}}firstUpdated(){new MutationObserver(()=>{this.requestUpdate()}).observe(this,{subtree:!0,childList:!0})}render(){return this.size=this.size||12/this.children.length,(0,r.dy)` <div class="vl-description-data">
            <div is="vl-grid">
                ${[...Array.from(this.children)].map((e,t)=>{let s=`item-${t}`;return e.setAttribute("slot",s),(0,r.dy)` <div
                        is="vl-column"
                        data-vl-size=${this.size}
                        data-vl-max-size=${this.maxSize}
                        data-vl-medium-size=${this.mediumSize}
                        data-vl-medium-max-size=${this.mediumMaxSize}
                        data-vl-small-size=${this.smallSize}
                        data-vl-small-max-size=${this.smallMaxSize}
                        data-vl-extra-small-size=${this.extraSmallSize}
                        data-vl-extra-small-max-size=${this.extraSmallMaxSize}
                    >
                        <slot name=${s}></slot>
                    </div>`})}
            </div>
        </div>`}constructor(...e){super(...e),this.size=0,this.maxSize=0,this.mediumSize=0,this.mediumMaxSize=0,this.smallSize=0,this.smallMaxSize=0,this.extraSmallSize=0,this.extraSmallMaxSize=0}}c=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,o.Mo)("vl-description-data")],c)},"./libs/components/src/document/vl-document.component.ts":(e,t,s)=>{"use strict";s.d(t,{J:()=>o});var i=s("./libs/common/utilities/src/index.ts"),l=s("./node_modules/@domg/govflanders-style/common/index.js"),r=s("./node_modules/@domg/govflanders-style/component/index.js");class o extends i.F9{static get _observedAttributes(){return["href","target"]}constructor(){super(`
          <style>
            ${l.YN}
            ${l.Oh}
            ${l.QT}
            ${r.A1}
            ${r.oQ}
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
        `)}_hrefChangedCallback(e,t){this._element.href=t}_targetChangedCallback(e,t){t?this._element.setAttribute("target",t):this._element.removeAttribute("target")}}o=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,i.a6)("vl-document")],o)},"./libs/components/src/functional-header/vl-functional-header.component.ts":(e,t,s)=>{"use strict";s.d(t,{D:()=>a});var i=s("./libs/common/utilities/src/index.ts"),l=s("./libs/elements/src/index.ts"),r=s("./node_modules/@domg/govflanders-style/component/index.js"),o=s("./node_modules/lit/index.js");let n=(0,o.iv)`
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
`;class a extends(0,i.W$)(HTMLElement){static{(0,i.YV)([l.Gi,l.gG])}static get _observedAttributes(){return["back","back-link","disable-back-link","hide-back-link","link","margin-bottom","sub-title","title"]}static get _observedClassAttributes(){return["full-width"]}get _classPrefix(){return"vl-functional-header--"}constructor(){super(`
          <style>
            ${l.CX}
            ${r.kb}
            ${n}
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
    `)}_getSubHeaderTemplate(e){return this._getSubHeaderTemplateWithValue(e.outerHTML)}_getSubHeaderTemplateWithValue(e){return this._template(`<li class="vl-functional-header__sub__action">${e}</li>`)}_titleChangedCallback(e,t){this._titleElement.innerText=t}_subTitleChangedCallback(e,t){this._subTitleElement.innerText=t}_linkChangedCallback(e,t){this._titleElement.href=t}_backChangedCallback(e,t){this._backLinkTextElement.innerText=t}_backLinkChangedCallback(e,t){this._backLinkElement.href=t||document.referrer}_marginBottomChangedCallback(e,t){let s=i.mt[t],l=this._shadow.querySelector(".vl-functional-header");s?l.style.marginBottom=s:l.style.removeProperty("margin-bottom")}_hideBackLinkChangedCallback(e,t){void 0!=t&&this._backLinkContainer?.remove()}_handleClickBackLink(e){this.hasAttribute("disable-back-link")&&e.preventDefault(),this.dispatchEvent(new CustomEvent("vl-click-back",{bubbles:!0,composed:!0}))}set backLinkEventListener(e){this._backLinkEventListener&&this._backLinkElement.removeEventListener("click",this._backLinkEventListener),this._backLinkEventListener=e,this._backLinkElement.addEventListener("click",this._backLinkEventListener)}__processSlotElements(){this.__processSlotActions()}__processSlotSubHeader(){this._subHeaderListElement.innerHTML="";let e=this.querySelector('[slot="sub-header"]');e?([...e.children].map(e=>this._getSubHeaderTemplate(e)).forEach(e=>this._subHeaderListElement.append(e)),this._defaultSubHeaderElement.hidden=!0):this._subHeaderElement.hidden=!0}__processSlotActions(){this._actionsListElement.innerHTML="";let e=this.querySelector('[slot="actions"]');e?[...e.children].map(e=>this._getActionTemplate(e)).forEach(e=>this._actionsListElement.append(e)):this._actionsElement.hidden=!0}__observeSlotElements(e){let t=new MutationObserver(e);return t.observe(this,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),t}}a=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,i.a6)("vl-functional-header")],a)},"./libs/components/src/http-error-message/vl-http-error-message.component.ts":(e,t,s)=>{"use strict";s.d(t,{k:()=>c});var i=s("./libs/common/utilities/src/index.ts"),l=s("./libs/elements/src/index.ts"),r=s("./libs/components/src/typography/vl-typography.component.ts"),o=s("./node_modules/lit/index.js");let n=(0,o.iv)`
    #info {
        font-size: small;
    }
    td {
        padding-right: 15px;
    }
    table {
        color: dimgray;
    }
`,a={400:{title:"Oeps, dat ging fout",image:"https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg",imageAlt:"Verkeerd verzoek",errorText:(0,o.dy)` <p>
            <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 400">Mail de helpdesk</a> en vermeld daarbij de
            URL hierboven en de foutcode 400.
        </p>`,errorActions:(0,o.dy)` <div>
            <a is="vl-link-button" href="/">Terug naar de startpagina</a>
        </div>`},401:{title:"Meld u eerst aan",image:"https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg",imageAlt:"Niet aangemeld",errorText:(0,o.dy)` <p>
            Om toegang te krijgen tot deze pagina, moet u eerst aangemeld zijn.
            <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 401">Mail de helpdesk</a> en vermeld daarbij de
            URL hierboven en de foutcode 401.
        </p>`,errorActions:(0,o.dy)` <div>
            <a is="vl-link-button" href="/">Terug naar de startpagina</a>
        </div>`},403:{title:"Geen toegang tot deze pagina",image:"https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg",imageAlt:"Onvoldoende rechten",errorText:(0,o.dy)` <p>
            U heeft daarvoor onvoldoende rechten.
            <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 403">Mail de helpdesk</a> en vermeld daarbij de
            URL hierboven en de foutcode 403.
        </p>`,errorActions:(0,o.dy)` <div>
            <a is="vl-link-button" href="/">Terug naar de startpagina</a>
        </div>`},404:{title:"Pagina niet gevonden",image:"https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/page-not-found.svg",imageAlt:"Pagina niet gevonden",errorText:(0,o.dy)` <p>
            We vonden de pagina niet terug. Controleer even of u een tikfout heeft gemaakt. Bent u via een link of
            website op deze pagina gekomen.
            <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 404">Mail dan de helpdesk</a> en vermeld
            daarbij de URL hierboven en de foutcode 404.
        </p>`,errorActions:(0,o.dy)` <div>
            <a is="vl-link-button" href="/">Terug naar de startpagina</a>
        </div>`},405:{title:"Niet toegelaten",image:"https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg",imageAlt:"Niet toegelaten",errorText:(0,o.dy)` <p>
            Er ging iets fout.
            <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 405">Mail de helpdesk</a> en vermeld daarbij de
            URL hierboven en de foutcode 405.
        </p>`,errorActions:(0,o.dy)` <div>
            <a is="vl-link-button" href="/">Terug naar de startpagina</a>
        </div>`},408:{title:"Oeps, dat duurde te lang",image:"https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg",imageAlt:"Verzoek duurt te lang",errorText:(0,o.dy)` <p>
            Het laden van de pagina duurde te lang. Probeer het opnieuw en als het nog niet lukt:
            <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 408">mail dan de helpdesk</a> en vermeld
            daarbij de URL hierboven en de foutcode 408.
        </p>`,errorActions:(0,o.dy)` <div>
            <a is="vl-link-button" href="/">Terug naar de startpagina</a>
        </div>`},410:{title:"Pagina bestaat niet meer",image:"https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/page-not-found.svg",imageAlt:"Verzoek bestaat niet meer",errorText:(0,o.dy)` <p>
            Deze pagina bestaat niet meer.
            <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 410">Mail de helpdesk</a> en vermeld daarbij de
            URL hierboven en de foutcode 410.
        </p>`,errorActions:(0,o.dy)` <div>
            <a is="vl-link-button" href="/">Terug naar de startpagina</a>
        </div>`},411:{title:"Onvolledig verzoek",image:"https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg",imageAlt:"Verzoek onvolledig",errorText:(0,o.dy)` <p>
            Er ontbreekt blijkbaar iets.
            <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 411">Mail de helpdesk</a> en vermeld daarbij de
            URL hierboven en de foutcode 411.
        </p>`,errorActions:(0,o.dy)` <div>
            <a is="vl-link-button" href="/">Terug naar de startpagina</a>
        </div>`},412:{title:"Voorwaarden voldoen niet",image:"https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg",imageAlt:"Voorwaarden niet voldaan",errorText:(0,o.dy)` <p>
            Er ging iets fout.
            <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 412">Mail de helpdesk</a> en vermeld daarbij de
            URL hierboven en de foutcode 412.
        </p>`,errorActions:(0,o.dy)` <div>
            <a is="vl-link-button" href="/">Terug naar de startpagina</a>
        </div>`},413:{title:"Limiet overschreden",image:"https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg",imageAlt:"Verzoek te groot",errorText:(0,o.dy)` <p>
            Er ging iets fout.
            <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 413">Mail de helpdesk</a> en vermeld daarbij de
            URL hierboven en de foutcode 413.
        </p>`,errorActions:(0,o.dy)` <div>
            <a is="vl-link-button" href="/">Terug naar de startpagina</a>
        </div>`},414:{title:"URL te groot",image:"https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg",imageAlt:"URI te groot",errorText:(0,o.dy)` <p>
            Er ging iets fout.
            <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 414">Mail de helpdesk</a> en vermeld daarbij de
            URL hierboven en de foutcode 414.
        </p>`,errorActions:(0,o.dy)` <div>
            <a is="vl-link-button" href="/">Terug naar de startpagina</a>
        </div>`},415:{title:"Mediatype niet ondersteund",image:"https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg",imageAlt:"Media type niet ondersteund",errorText:(0,o.dy)` <p>
            Het mediatype van de gevraagde gegevens wordt niet ondersteund door de server.
            <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 415">Mail de helpdesk</a> en vermeld daarbij de
            URL hierboven en de foutcode 415.
        </p>`,errorActions:(0,o.dy)` <div>
            <a is="vl-link-button" href="/">Terug naar de startpagina</a>
        </div>`},500:{title:"Interne fout",image:"https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg",imageAlt:"Onverwachte fout",errorText:(0,o.dy)` <p>
            Er ging iets fout. Probeer het nog eens. Lukt het nog niet,
            <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 500">mail dan de helpdesk</a> en vermeld
            daarbij de URL hierboven en de foutcode 500.
        </p>`,errorActions:(0,o.dy)` <div>
            <a is="vl-link-button" href="/">Terug naar de startpagina</a>
        </div>`},501:{title:"Verzoek niet ondersteund",image:"https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg",imageAlt:"Niet ondersteund",errorText:(0,o.dy)` <p>
            Er ging iets fout.
            <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 501">Mail de helpdesk</a> en vermeld daarbij de
            URL hierboven en de foutcode 501.
        </p>`,errorActions:(0,o.dy)` <div>
            <a is="vl-link-button" href="/">Terug naar de startpagina</a>
        </div>`},502:{title:"Tijdelijk niet bereikbaar",image:"https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg",imageAlt:"Tijdelijk niet bereikbaar",errorText:(0,o.dy)` <p>
            De website is tijdelijk niet bereikbaar. Probeer later opnieuw. Heb je vragen:
            <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 502">mail dan de helpdesk</a> en vermeld
            daarbij de URL hierboven en de foutcode 502.
        </p>`,errorActions:(0,o.dy)` <div>
            <a is="vl-link-button" href="/">Terug naar de startpagina</a>
        </div>`},503:{title:"De website is tijdelijk niet beschikbaar",image:"https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg",imageAlt:"Tijdelijk niet bereikbaar",errorText:(0,o.dy)` <p>
            Probeer later opnieuw. Heb je vragen:
            <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 503">mail dan de helpdesk</a> en vermeld
            daarbij de URL hierboven en de foutcode 503.
        </p>`,errorActions:(0,o.dy)` <div>
            <a is="vl-link-button" href="/">Terug naar de startpagina</a>
        </div>`},504:{title:"Tijdelijk niet bereikbaar",image:"https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg",imageAlt:"Tijdelijk niet bereikbaar",errorText:(0,o.dy)` <p>
            De website is tijdelijk niet bereikbaar. Probeer later opnieuw. Heb je vragen:
            <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 504">mail dan de helpdesk</a> en vermeld
            daarbij de URL hierboven en de foutcode 504.
        </p>`,errorActions:(0,o.dy)` <div>
            <a is="vl-link-button" href="/">Terug naar de startpagina</a>
        </div>`},505:{title:"HTTP-versie niet ondersteund",image:"https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg",imageAlt:"Niet ondersteunde HTTP versie",errorText:(0,o.dy)` <p>
            De HTTP-versie van uw verzoek wordt niet ondersteund door onze server.
            <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 505">Mail de helpdesk</a> en vermeld daarbij de
            URL hierboven en de foutcode 505.
        </p>`,errorActions:(0,o.dy)` <div>
            <a is="vl-link-button" href="/">Terug naar de startpagina</a>
        </div>`},506:{title:"Interne configuratiefout",image:"https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg",imageAlt:"Interne configuratiefout",errorText:(0,o.dy)` <p>
            Er ging iets fout.
            <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 506">Mail de helpdesk</a> en vermeld daarbij de
            URL hierboven en de foutcode 506.
        </p>`,errorActions:(0,o.dy)` <div>
            <a is="vl-link-button" href="/">Terug naar de startpagina</a>
        </div>`}};class c extends(0,i.W$)(HTMLElement){static{(0,i.YV)([l.CH,l.YY,l.Br,r.P])}static get _observedAttributes(){return["title","image","image-alt","error-code"]}constructor(){super(`
          <style>
            ${l.CX}
            ${n}
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
                  <vl-typography id="error-text"></vl-typography>
                </div>
                <div id="info">
                  <table>
                    <tr>
                      <td>URL:</td>
                      <td id="url"></td>
                    </tr>
                    <tr>
                      <td>Tijd:</td>
                      <td id="time"></td>
                    </tr>
                    <tr>
                      <td>User-agent:</td>
                      <td id="user-agent"></td>
                    </tr>
                  </table>
                </div>
                <div id="actions" is="vl-column" data-vl-size="12"><div id="error-actions"><slot name="actions"></slot></div></div>
              </div>
            </div>
            <div is="vl-column" data-vl-size="6" data-vl-medium-size="6" data-vl-small-size="6" class="vl-u-hidden--s">
              <div class="vl-u-display-flex vl-u-flex-align-center vl-u-flex-v-center">
                <img id="image-normal"/>
              </div>
            </div>
          </div>
        `)}connectedCallback(){super.connectedCallback(),this.__processAttributes(),this.__setDebugInfo()}get _title(){return this.dataset.vlTitle||this._defaults?.title}get _image(){return this.dataset.vlImage||this._defaults?.image}get _imageAlt(){return this.dataset.vlImageAlt||this._defaults?.imageAlt}get _errorCode(){return this.dataset.vlErrorCode||this._defaults?.errorCode}_titleChangedCallback(){this.__processTitle()}_imageChangedCallback(){this.__processImage()}_imageAltChangedCallback(){this.__processImageAlt()}_errorCodeChangedCallback(){this.__processErrorCode()}__setImageAttribute(e,t){this.__imageForSmallScreensElement.setAttribute(e,t),this.__imageForNormalScreensElement.setAttribute(e,t)}__setDebugInfo(){let e=navigator.userAgent,t=window.parent.location.href,s=new Date().toISOString();this.__urlElement.textContent=t,this.__timeElement.textContent=s,this.__userAgentElement.textContent=e}get __titleElement(){return this._element.querySelector("#title")}get __textElement(){return this._element.querySelector("#text")}get __actionsElement(){return this._element.querySelector("#actions")}get __actionElement(){return this._element.querySelector("#actions > *")}get __imageForSmallScreensElement(){return this._element.querySelector("#image-small")}get __imageForNormalScreensElement(){return this._element.querySelector("#image-normal")}get __urlElement(){return this._element.querySelector("#url")}get __timeElement(){return this._element.querySelector("#time")}get __userAgentElement(){return this._element.querySelector("#user-agent")}get __errorTextElement(){return this._element.querySelector("#error-text")}get __errorActionsElement(){return this._element.querySelector("#error-actions")}__processTitle(){let e=this._title||a[this._errorCode]?.title;this.__titleElement.textContent=e}__processImage(){let e=this._image||a[this._errorCode]?.image;this.__setImageAttribute("src",e)}__processImageAlt(){let e=this._imageAlt||a[this._errorCode]?.imageAlt;this.__setImageAttribute("alt",e)}__processErrorText(){if(this.__hasSlot(this.__textElement,"text"))(0,o.sY)("",this.__errorTextElement);else{let e=a[this._errorCode]?.errorText;(0,o.sY)(e,this.__errorTextElement)}}__processErrorActions(){if(this.__hasSlot(this.__actionElement,"actions"))(0,o.sY)("",this.__errorActionsElement);else{let e=a[this._errorCode]?.errorActions;(0,o.sY)(e,this.__errorActionsElement)}}__processAttributes(){this.__processTitle(),this.__processImage(),this.__processImageAlt(),this.__processErrorText(),this.__processErrorActions()}__processErrorCode(){this.__processAttributes()}__hasSlot(e,t){let s=e.querySelector(`slot[name=${t}]`);return(s?.assignedNodes()||[]).length>0}}c=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,i.a6)("vl-http-error-message")],c)},"./libs/components/src/index.ts":(e,t,s)=>{"use strict";s.d(t,{b8:()=>i.b,q1:()=>l.q,P7:()=>r.P,EM:()=>o.E,d4:()=>n.d,Jy:()=>a.J,D3:()=>c.D,RW:()=>I.R,Ui:()=>z.U,xd:()=>M.x,M$:()=>D.M,pK:()=>B.p,m5:()=>H.m5,g1:()=>q.g,vG:()=>N.v,e9:()=>V.e,Pz:()=>F.P});var i=s("./libs/components/src/accordion/vl-accordion.component.ts");s("./libs/components/src/accordion-list/vl-accordion-list.component.ts");var l=s("./libs/components/src/alert/vl-alert.component.ts");s("./libs/components/src/alert/vl-alert.model.ts");var r=s("./libs/components/src/annotation/vl-annotation.component.ts");s("./libs/components/src/autocomplete/vl-autocomplete.component.ts"),s("./libs/components/src/breadcrumb/vl-breadcrumb.component.ts"),s("./libs/components/src/breadcrumb/vl-breadcrumb-item.component.ts"),s("./libs/components/src/next/cascader/vl-cascader.component.ts"),s("./libs/components/src/next/cascader/vl-cascader-item.component.ts"),s("./libs/components/src/next/cascader/vl-cascader.model.ts");var o=s("./libs/components/src/checkbox/vl-checkbox.component.ts");s("./libs/components/src/code-preview/vl-code-preview.component.ts");var n=s("./libs/components/src/contact-card/vl-contact-card.component.ts");s("./libs/components/src/content-header/vl-content-header.component.ts"),s("./libs/components/src/datepicker/vl-datepicker.component.ts"),s("./libs/components/src/description-data/vl-description-data.component.ts"),s("./libs/components/src/description-data/vl-description-data-item.component.ts");var a=s("./libs/components/src/document/vl-document.component.ts"),c=s("./libs/components/src/functional-header/vl-functional-header.component.ts"),d=s("./libs/common/utilities/src/index.ts"),h=s("./libs/elements/src/index.ts"),u=s("./node_modules/@domg/govflanders-style/common/index.js"),m=s("./node_modules/@domg/govflanders-style/component/index.js"),p=s("./node_modules/lit/index.js"),v=s("./libs/components/src/http-error-message/vl-http-error-message.component.ts");class g extends d.fS{static{(0,d.YV)([v.k,h.uu])}static get styles(){return[u.Oh,m.jn]}render(){return(0,p.dy)`<vl-http-error-message data-vl-error-code="400"> </vl-http-error-message> `}}g=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,d.a6)("vl-http-400-message")],g);class b extends d.fS{static{(0,d.YV)([v.k,h.uu])}static get styles(){return[u.Oh,m.jn]}render(){return(0,p.dy)`<vl-http-error-message data-vl-error-code="401"> </vl-http-error-message> `}}b=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,d.a6)("vl-http-401-message")],b);class _ extends d.fS{static{(0,d.YV)([v.k,h.uu])}static get styles(){return[u.Oh,m.jn]}render(){return(0,p.dy)`<vl-http-error-message data-vl-error-code="403"> </vl-http-error-message> `}}_=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,d.a6)("vl-http-403-message")],_);class f extends d.fS{static{(0,d.YV)([v.k,h.uu])}static get styles(){return[u.Oh,m.jn]}render(){return(0,p.dy)`<vl-http-error-message data-vl-error-code="404"> </vl-http-error-message> `}}f=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,d.a6)("vl-http-404-message")],f);class y extends d.fS{static{(0,d.YV)([v.k,h.uu])}static get styles(){return[u.Oh,m.jn]}render(){return(0,p.dy)`<vl-http-error-message data-vl-error-code="405"> </vl-http-error-message> `}}y=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,d.a6)("vl-http-405-message")],y);class x extends d.fS{static{(0,d.YV)([v.k,h.uu])}static get styles(){return[u.Oh,m.jn]}render(){return(0,p.dy)`<vl-http-error-message data-vl-error-code="408"> </vl-http-error-message> `}}x=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,d.a6)("vl-http-408-message")],x);class k extends d.fS{static{(0,d.YV)([v.k,h.uu])}static get styles(){return[u.Oh,m.jn]}render(){return(0,p.dy)`<vl-http-error-message data-vl-error-code="410"> </vl-http-error-message> `}}k=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,d.a6)("vl-http-410-message")],k);class E extends d.fS{static{(0,d.YV)([v.k,h.uu])}static get styles(){return[u.Oh,m.jn]}render(){return(0,p.dy)`<vl-http-error-message data-vl-error-code="411"> </vl-http-error-message> `}}E=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,d.a6)("vl-http-411-message")],E);class w extends d.fS{static{(0,d.YV)([v.k,h.uu])}static get styles(){return[u.Oh,m.jn]}render(){return(0,p.dy)`<vl-http-error-message data-vl-error-code="412"> </vl-http-error-message> `}}w=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,d.a6)("vl-http-412-message")],w);class j extends d.fS{static{(0,d.YV)([v.k,h.uu])}static get styles(){return[u.Oh,m.jn]}render(){return(0,p.dy)`<vl-http-error-message data-vl-error-code="413"> </vl-http-error-message> `}}j=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,d.a6)("vl-http-413-message")],j);class S extends d.fS{static{(0,d.YV)([v.k,h.uu])}static get styles(){return[u.Oh,m.jn]}render(){return(0,p.dy)`<vl-http-error-message data-vl-error-code="414"> </vl-http-error-message> `}}S=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,d.a6)("vl-http-414-message")],S);class C extends d.fS{static{(0,d.YV)([v.k,h.uu])}static get styles(){return[u.Oh,m.jn]}render(){return(0,p.dy)`<vl-http-error-message data-vl-error-code="415"> </vl-http-error-message> `}}C=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,d.a6)("vl-http-415-message")],C);class T extends d.fS{static{(0,d.YV)([v.k,h.uu])}static get styles(){return[u.Oh,m.jn]}render(){return(0,p.dy)`<vl-http-error-message data-vl-error-code="500"> </vl-http-error-message> `}}T=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,d.a6)("vl-http-500-message")],T);class R extends d.fS{static{(0,d.YV)([v.k,h.uu])}static get styles(){return[u.Oh,m.jn]}render(){return(0,p.dy)`<vl-http-error-message data-vl-error-code="501"> </vl-http-error-message> `}}R=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,d.a6)("vl-http-501-message")],R);class L extends d.fS{static{(0,d.YV)([v.k,h.uu])}static get styles(){return[u.Oh,m.jn]}render(){return(0,p.dy)`<vl-http-error-message data-vl-error-code="502"> </vl-http-error-message> `}}L=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,d.a6)("vl-http-502-message")],L);class A extends d.fS{static{(0,d.YV)([v.k,h.uu])}static get styles(){return[u.Oh,m.jn]}render(){return(0,p.dy)`<vl-http-error-message data-vl-error-code="503"> </vl-http-error-message> `}}A=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,d.a6)("vl-http-503-message")],A);class O extends d.fS{static{(0,d.YV)([v.k,h.uu])}static get styles(){return[u.Oh,m.jn]}render(){return(0,p.dy)`<vl-http-error-message data-vl-error-code="504"> </vl-http-error-message> `}}O=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,d.a6)("vl-http-504-message")],O);class $ extends d.fS{static{(0,d.YV)([v.k,h.uu])}static get styles(){return[u.Oh,m.jn]}render(){return(0,p.dy)`<vl-http-error-message data-vl-error-code="505"> </vl-http-error-message> `}}$=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,d.a6)("vl-http-505-message")],$);class P extends d.fS{static{(0,d.YV)([v.k,h.uu])}static get styles(){return[u.Oh,m.jn]}render(){return(0,p.dy)`<vl-http-error-message data-vl-error-code="506"> </vl-http-error-message> `}}P=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,d.a6)("vl-http-506-message")],P);var I=s("./libs/components/src/info-tile/vl-info-tile.component.ts"),z=s("./libs/components/src/infoblock/vl-infoblock.component.ts");s("./libs/components/src/input-slider/vl-input-slider.component.ts");var M=s("./libs/components/src/loader/vl-loader.component.ts"),D=s("./libs/components/src/modal/vl-modal.component.ts");s("./libs/components/src/pager/vl-pager.component.ts"),s("./libs/components/src/pill/vl-button-pill.component.ts");var B=s("./libs/components/src/pill/vl-pill.component.ts");s("./libs/components/src/pill/vl-pill.model.ts");var H=s("./libs/components/src/popover/index.ts");s("./libs/components/src/progress-bar/vl-progress-bar.component.ts"),s("./libs/components/src/proza-message/vl-proza-message.component.ts"),s("./libs/components/src/proza-message/vl-proza-message-preloader.component.ts"),s("./libs/components/src/radio/vl-radio.component.ts"),s("./libs/components/src/radio/vl-radio-group.component.ts"),s("./libs/components/src/rich-data/vl-rich-data.component.ts"),s("./libs/components/src/rich-data-table/vl-rich-data-field.component.ts"),s("./libs/components/src/rich-data-table/vl-rich-data-sorter.component.ts"),s("./libs/components/src/rich-data-table/vl-rich-data-table.component.ts");var q=s("./libs/components/src/search/vl-search.component.ts");s("./libs/components/src/share-buttons/vl-share-button.component.ts"),s("./libs/components/src/share-buttons/vl-share-button.model.ts"),s("./libs/components/src/share-buttons/vl-share-buttons.component.ts");var N=s("./libs/components/src/side-sheet/vl-side-sheet.component.ts");s("./libs/components/src/spotlight/vl-spotlight.component.ts"),s("./libs/components/src/steps/vl-duration-step.component.ts"),s("./libs/components/src/steps/vl-step.component.ts"),s("./libs/components/src/steps/vl-steps.component.ts"),s("./libs/components/src/tabs/vl-tabs.component.ts"),s("./libs/components/src/template/vl-template.component.ts"),s("./libs/components/src/textarea/vl-textarea.element.ts"),s("./libs/components/src/textarea/vl-textarea-modal.component.ts"),s("./libs/components/src/toaster/vl-toaster.element.ts");var V=s("./libs/components/src/toggle-button/index.ts");s("./libs/components/src/tooltip/vl-tooltip.component.ts");var F=s("./libs/components/src/typography/vl-typography.component.ts");s("./libs/components/src/upload/vl-upload.component.ts"),s("./libs/components/src/wizard/vl-wizard.component.ts"),s("./libs/components/src/wizard/vl-wizard-pane.component.ts")},"./libs/components/src/info-tile/vl-info-tile.component.ts":(e,t,s)=>{"use strict";s.d(t,{R:()=>d});var i=s("./libs/common/utilities/src/index.ts"),l=s("./node_modules/@domg/govflanders-style/component/index.js"),r=s("./node_modules/@domg/govflanders-style/common/index.js"),o=s("./node_modules/lit/index.js");let n=(0,o.iv)`
    :host([data-vl-toggleable]) .vl-info-tile__header__wrapper {
        width: 100%;
        z-index: 1;
    }
    :host([data-vl-toggleable]) .vl-info-tile__header__wrapper .vl-toggle {
        width: 100%;
        text-decoration: none;
    }
    :host([data-vl-toggleable]) .vl-info-tile__header__wrapper .vl-toggle:hover,
    :host([data-vl-toggleable]) .vl-info-tile__header__wrapper .vl-toggle:focus {
        text-decoration: underline;
    }
    :host([data-vl-toggleable]) .vl-info-tile__header__title {
        flex-grow: 1;
    }
    :host([data-vl-toggleable]) .vl-info-tile__header__subtitle {
        margin-left: 2rem;
    }
    :host([data-vl-toggleable]) .vl-info-tile.js-vl-accordion:not(.js-vl-accordion--open) .vl-info-tile__content {
        visibility: hidden;
        overflow: hidden;
        max-height: 0;
        margin: 0;
    }
    :host([data-vl-toggleable]) .vl-info-tile.js-vl-accordion.js-vl-accordion--open .vl-info-tile__content {
        visibility: visible;
        max-height: 100%;
        margin-left: 2rem;
    }

    :host([data-vl-toggleable])
        .vl-info-tile.js-vl-accordion.js-vl-accordion--open
        .vl-toggle
        > .vl-vi-arrow-right-fat::before {
        transform: rotate(-90deg);
    }

    slot[name='title-label'] {
        display: inline-block;
        margin-left: 3rem;
    }
`;s("./node_modules/@govflanders/vl-ui-util/dist/js/util.js"),s("./node_modules/@govflanders/vl-ui-accordion/dist/js/accordion.js"),s("./node_modules/reflect-metadata/Reflect.js");var a=s("./libs/elements/src/index.ts"),c=s("./libs/components/src/accordion/vl-accordion.component.ts");class d extends i.F9{static{(0,i.YV)([c.b])}static get _observedAttributes(){return["auto-open","toggleable","center"]}constructor(){super(`
          <style>
            ${r.YN}
            ${r.Oh}
            ${a.CX}
            ${l.a9}
            ${n}
            ${l.RP}
            ${l.ob}
            ${l.R1}
            ${l.oQ}
          </style>
          <div class="vl-info-tile">
            <header class="vl-info-tile__header" role="presentation">
              <div id="wrapper" class="vl-info-tile__header__wrapper">
                <h3 id="title" class="vl-info-tile__header__title">
                  <slot name="title"></slot><slot name="title-label"></slot>
                </h3>
                <p class="vl-info-tile__header__subtitle">
                  <slot name="subtitle"></slot>
                </p>
              </div>
            </header>

            <div class="vl-info-tile__content">
              <slot name="content"></slot>
            </div>

            <footer class="vl-info-tile__footer">
              <slot name="footer"></slot>
            </footer>
          </div>
        `)}connectedCallback(){super.connectedCallback(),this.__processAutoOpen(),this.__processSlots(),this.__processAutoOpen()}get isToggleable(){return null!==this.getAttribute("toggleable")}get isOpen(){return!this.isToggleable||this._element?.classList.contains("js-vl-accordion--open")}get _headerWrapperElement(){return this._element?.querySelector("#wrapper")}get _titleElement(){return this._headerWrapperElement?.querySelector("#title")}get _titleSlot(){return this.querySelector(":scope > slot[name='title']")}get _titleLabelSlot(){return this.querySelector("[slot='title-label']")}get _titleLabelSlotElement(){return this._titleElement?.querySelector('[name="title-label"]')}get _buttonElement(){return this._element?.querySelector("button")}toggle(){this._toggleElement?.click()}open(){this.isOpen||this.toggle()}close(){this.isOpen&&this.toggle()}get _toggleElement(){return this._shadow?.querySelector(".js-vl-accordion__toggle")}get _subtitleElement(){return this._shadow?.querySelector('slot[name="subtitle"]')}get _contentElement(){return this._shadow?.querySelector('slot[name="content"]')}_centerChangedCallback(e,t){null===t?this._element?.classList.remove("vl-info-tile--center"):this._element?.classList.add("vl-info-tile--center")}_toggleableChangedCallback(e,t){null===t?(this.__removeAccordionElements(),this.__removePreventContentClickPropagation()):(this.__prepareAccordionElements(),vl.accordion.dress(this._buttonElement),this.__preventContentClickPropagation(),this.__processAutoOpen())}__prepareAccordionElements(){this._element?.classList.add("js-vl-accordion");let e=this._template(`
          <button class="vl-toggle vl-link vl-link--bold js-vl-accordion__toggle">
            <i class="vl-link__icon vl-link__icon--before vl-toggle__icon vl-vi vl-vi-arrow-right-fat" aria-hidden="true"></i>
          </button>
        `).firstElementChild;this._titleElement&&e?.appendChild(this._titleElement),e&&this._headerWrapperElement?.prepend(e)}__removeAccordionElements(){this._element?.classList.remove("js-vl-accordion"),this._titleElement&&this._buttonElement&&this._headerWrapperElement?.replaceChild(this._titleElement,this._buttonElement)}__preventContentClickPropagation(){this._subtitleElement?.addEventListener("click",e=>e.stopPropagation()),this._contentElement?.addEventListener("click",e=>e.stopPropagation())}__removePreventContentClickPropagation(){this._subtitleElement?.removeEventListener("click",e=>e.stopPropagation()),this._contentElement?.removeEventListener("click",e=>e.stopPropagation())}_hasTitleSlot(){return this._titleSlot&&this._titleSlot.assignedElements()?.length>0}__processAutoOpen(){this.isToggleable&&(void 0===this.dataset.vlAutoOpen?this.close():this.open())}__processSlots(){this._titleLabelSlot||this._titleLabelSlotElement?.remove(),this._titleElement?.addEventListener("click",e=>{e.stopPropagation(),this._buttonElement?.click()})}}d=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,i.a6)("vl-info-tile")],d)},"./libs/components/src/infoblock/vl-infoblock.component.ts":(e,t,s)=>{"use strict";s.d(t,{U:()=>n});var i=s("./libs/common/utilities/src/index.ts"),l=s("./libs/elements/src/index.ts"),r=s("./node_modules/@domg/govflanders-style/common/index.js"),o=s("./node_modules/@domg/govflanders-style/component/index.js");class n extends i.F9{static{(0,i.YV)([l.Br,l.Gi])}static get _observedAttributes(){return["title","icon","type"]}constructor(){super(`
          <style>
            ${r.YN}
            ${o.Ep}
          </style>
          <section id="infoblock-element" class="vl-infoblock">
            <header class="vl-infoblock__header" role="presentation">
              <span is="vl-icon" id="infoblock_icon" class="vl-infoblock__header__icon"></span>
              <slot name="title">
                    <h2 id="title_content" is="vl-h2" class="vl-infoblock__title"></h2>
              </slot>
            </header>
            <div class="vl-infoblock__content" id="infoblock_content">
              <slot></slot>
            </div>
          </section>
        `)}connectedCallback(){super.connectedCallback();let e=this.getAttribute("title");e&&this._titleChangedCallback("",e)}_titleChangedCallback(e,t){let s=this.shadowRoot?.querySelector("#title_content");s&&(s.innerText=t)}_iconChangedCallback(e,t){this._iconElement.setAttribute("data-vl-icon",t)}_typeChangedCallback(e,t){let s="vl-infoblock--";e&&this._element.classList.remove(s+e),t&&this._element.classList.add(s+t)}get _iconElement(){return this._element.querySelector("#infoblock_icon")}}n=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,i.a6)("vl-infoblock")],n)},"./libs/components/src/input-slider/vl-input-slider.component.ts":(e,t,s)=>{"use strict";var i=s("./node_modules/@domg/govflanders-style/component/index.js"),l=s("./node_modules/@domg/govflanders-style/common/index.js"),r=s("./node_modules/lit/index.js"),o=s("./node_modules/lit/decorators.js");s("./node_modules/reflect-metadata/Reflect.js");let n=(0,r.iv)`
    .vl-input-slider {
        display: flex;
        align-items: center;
    }
    .vl-input-slider .vl-input-slider__input-range {
        width: calc(100% - 1rem);
    }
    .vl-input-slider .vl-input-slider__input-number {
        font-size: 1.4rem;
        width: 4.7rem;
        margin-left: 1.5rem;
        padding: 0 0 0 0.6rem !important;
        height: 2.4rem;
        line-height: 2.4rem;
    }
    .vl-input-slider input[type='range'] {
        -webkit-appearance: none;
        height: 2.4rem;
    }
    .vl-input-slider input[type='range']::-webkit-slider-runnable-track {
        background: #c6cdd3;
        height: 0.4rem;
        width: 100%;
        cursor: pointer;
    }
    .vl-input-slider input[type='range']::-moz-range-track {
        background: #c6cdd3;
        height: 0.4rem;
        width: 100%;
        cursor: pointer;
    }
    .vl-input-slider input[type='range']::-webkit-slider-thumb {
        -webkit-appearance: none;
        cursor: pointer;
        width: 1.5rem;
        height: 2.4rem;
        background-color: #4d88db;
        border-radius: 0.3rem;
        margin-top: -1rem;
        border-left: 0.7rem solid #05c;
        border-right: 0.7rem solid #05c;
        border-top: 0.55rem solid #05c;
        border-bottom: 0.55rem solid #05c;
    }
    .vl-input-slider input[type='range']::-moz-range-thumb {
        cursor: pointer;
        width: 0.1rem;
        height: 1.3rem;
        background-color: #4d88db;
        border-radius: 0.3rem;
        margin-top: -1rem;
        border-left: 0.7rem solid #05c;
        border-right: 0.7rem solid #05c;
        border-top: 0.55rem solid #05c;
        border-bottom: 0.55rem solid #05c;
    }
`;var a=s("./libs/common/utilities/src/index.ts");class c extends a.fS{static get styles(){return[l.YN,i.K$,n]}static get properties(){return{maxValue:{type:Number,attribute:"data-vl-max-value",reflect:!0},minValue:{type:Number,attribute:"data-vl-min-value",reflect:!0},value:{type:Number,attribute:"data-vl-value",reflect:!0}}}updated(e){if(e.has("value")||e.has("minValue")||e.has("maxValue")){let t=this.validateValue(this.value);if(this.value!==t){this.value=t;return}e.has("value")&&!isNaN(this.value)&&this.dispatchEvent(new CustomEvent("vl-change-value",{detail:{value:this.value}}))}}render(){return(0,r.dy)`
            <div class="vl-input-slider">
                <input
                    id="input-range"
                    type="range"
                    aria-label="schuifregelaar"
                    class="vl-input-slider__input-range"
                    min=${this.minValue}
                    max=${this.maxValue}
                    .value=${this.value}
                    @input=${this.handleInput}
                />
                <input
                    id="input-number"
                    type="number"
                    aria-label="nummerinvoer"
                    class="vl-input-slider__input-number vl-input-field"
                    min=${this.minValue}
                    max=${this.maxValue}
                    .value=${this.value}
                    @input=${this.handleInput}
                />
            </div>
        `}handleInput(e){let t=e.target,s=parseInt(t?.value??"");this.value=s}validateValue(e){let t=e;return t<this.minValue&&(t=this.minValue),t>this.maxValue&&(t=this.maxValue),t}constructor(...e){super(...e),this.maxValue=100,this.minValue=0,this.value=0}}c=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,o.Mo)("vl-input-slider")],c)},"./libs/components/src/loader/vl-loader.component.ts":(e,t,s)=>{"use strict";s.d(t,{x:()=>o});var i=s("./libs/common/utilities/src/index.ts"),l=s("./node_modules/@domg/govflanders-style/component/index.js"),r=s("./node_modules/@domg/govflanders-style/common/index.js");class o extends(0,i.W$)(HTMLElement){static get _observedAttributes(){return["light","text","single"]}constructor(){super(`
          <style>
            ${r.YN}
            ${l.tR}
            ${r.GU}
            ${r.PC}
          </style>
          <div class="vl-u-align-center">
            <div class="vl-loader" role="alert" aria-busy="true"></div>
            <p id="text">
              <slot>
                Pagina is aan het laden
              </slot>
            </p>
          </div>
        `)}get _loader(){return this._shadow.querySelector(".vl-loader")}get _text(){return this._shadow.querySelector("#text")}get _slot(){return this._shadow.querySelector("slot")}_lightChangedCallback(e,t){this._toggleClass(this._loader,t,"vl-loader--light")}_textChangedCallback(e,t){this._slot.innerText=t}_singleChangedCallback(e,t){this._toggleClass(this._text,t,"vl-u-visually-hidden")}}o=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,i.a6)("vl-loader")],o)},"./libs/components/src/next/cascader/vl-cascader-item.component.ts":(e,t,s)=>{"use strict";s.d(t,{D:()=>h});var i=s("./node_modules/lit/index.js"),l=s("./libs/common/utilities/src/index.ts"),r=s("./node_modules/lit/decorators.js"),o=s("./node_modules/@domg/govflanders-style/common/index.js"),n=s("./libs/elements/src/index.ts");let a=(0,i.iv)`
    :host {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
    }

    .space-between {
        justify-content: space-between;
        align-items: center;
    }

    .vl-cascader-link {
        display: flex;
        min-height: 4rem;
        align-items: center;
        width: 100%;
    }
`;var c=s("./libs/components/src/next/cascader/vl-cascader.model.ts"),d=s("./libs/components/src/next/cascader/vl-cascader.utils.ts");class h extends l.fS{static get properties(){return{label:{type:String},templateType:{type:String,attribute:"template-type"},item:{type:Object},annotation:{type:String}}}static get styles(){return[o.YN,n.CX,a]}connectedCallback(){super.connectedCallback(),this.updateItemData()}updateItemData(){null!=this.label&&(this.item.label=this.label,this.item.templateType=this.templateType),this.item.annotation=this.annotation}render(){let e;let t=this.cascaderRef,s=!!d.hZ(this,c.r.LABEL)?.length,{templateType:l}=this.item;return l&&t?e=(0,d.F4)(this.item,t):t&&(e=(0,d.lB)(this.item,t,s)),t&&e?(0,i.dy)`${e} ${(0,i.dy)`<slot name="content"></<slot>`}`:(0,i.dy)`
                  ${s?(0,i.dy)`<slot name="label"></slot>`:(0,d.GV)(this.item)}
                  <slot name="content"></slot>
              `}constructor(...e){super(...e),this.item={label:c.L.LABEL_MISSING},this.label=c.L.LABEL_MISSING}}h=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,r.Mo)("vl-cascader-item")],h)},"./libs/components/src/next/cascader/vl-cascader.component.ts":(e,t,s)=>{"use strict";var i=s("./node_modules/lit/index.js"),l=s("./libs/common/utilities/src/index.ts"),r=s("./node_modules/lit/decorators.js"),o=s("./node_modules/@domg/govflanders-style/common/index.js"),n=s("./libs/elements/src/index.ts"),a=s("./node_modules/@domg/govflanders-style/component/index.js");let c=(0,i.iv)`
    :host {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    header {
        border-bottom: 1px solid #cbd2da;
        padding-left: 1.5rem;
    }

    h4 {
        margin: 1.8rem 0;
    }

    div.content {
        overflow: hidden;
    }

    div.content section {
        transition: transform 0.3s;
        position: relative;
        display: flex;
        flex-direction: column;
        align-content: space-between;
        left: 0;
        right: 0;
        opacity: 1;
        width: 100%;
        padding: 0 1.5rem 0.5rem 1.5rem;
    }

    div.content section.slide-in {
        animation: slideIn 0.3s ease-in-out;
    }
    div.content section.slide-out {
        animation: slideOut 0.3s ease-in-out;
    }

    @keyframes slideIn {
        from {
            left: 100%;
        }
        to {
            left: 0;
        }
    }

    @keyframes slideOut {
        from {
            left: -100%;
        }
        to {
            left: 0;
        }
    }

    .vl-breadcrumb-placeholder {
        padding: 0.5rem 1.5rem;
        min-height: 4rem;
        border-bottom: 1px solid rgb(203, 210, 218);
        display: flex;
        align-items: center;
    }

    .vl-breadcrumb {
        padding: 0.5rem 1.5rem;
        min-height: 4rem;
        border-bottom: 1px solid rgb(203, 210, 218);
    }

    .vl-breadcrumb__list__item__cta {
        display: flex;
        align-items: center;
        position: relative;
        top: -1px;
    }

    .vl-breadcrumb__list__item__separator {
        justify-content: center;
    }

    .vl-breadcrumb__list__item__cta:hover {
        text-decoration: none;
    }

    .vl-breadcrumb__list__item .vl-vi {
        text-decoration: none;
    }

    vl-loader {
        padding-top: 2rem;
    }

    .vl-cascader-link {
        display: flex;
        min-height: 4rem;
        align-items: center;
        width: 100%;
    }

    .vl-cascader-item,
    vl-cascader-item {
        padding: 1rem 0;
        display: flex;
        flex-direction: column;
    }

    .vl-cascader-item:not(:last-child),
    vl-cascader-item:not(:last-child) {
        border-bottom: 1px solid #cbd2da;
    }

    .space-between {
        justify-content: space-between;
    }
`;var d=s("./node_modules/lit/directives/class-map.js"),h=s("./libs/components/src/next/cascader/vl-cascader.utils.ts"),u=s("./libs/components/src/next/cascader/vl-cascader.model.ts"),m=s("./libs/components/src/next/cascader/vl-cascader-item.component.ts");class p extends l.fS{static{(0,l.YV)([m.D])}static get properties(){return{headerText:{type:String,attribute:"header-text",reflect:!0},level:{type:Number,attribute:"level",reflect:!0},hideBreadcrumb:{type:Boolean,attribute:"hide-breadcrumb",reflect:!0},loadingMessage:{type:String,attribute:"loading-message",reflect:!0},isLoading:{type:Boolean,attribute:"loading",reflect:!0},itemListFn:{type:Function},nodeData:{type:Array,state:!0},templates:{type:Map}}}static get styles(){return[o.YN,n.CX,a.nC,c]}connectedCallback(){super.connectedCallback(),this.setData()}isDeclarativeMode(){return!this.items||!this.items.length}set items(e){this.nodeData=e}get items(){return this.nodeData}setData(){let e=this.traverseTreeAndMapItems(this);this.isDeclarativeMode()&&e?.length?this.nodeData=e:this.nodeData=this.items}pushItemStack(e,t){e&&t&&(this.level=this.navigationLevelStack.push(t),this.breadCrumbHistory.push({label:e,index:this.level}))}popItemStack(){this.nodeData=this.navigationLevelStack.pop()||[],this.level=(this.breadCrumbHistory.pop()?.index||1)-1}goBack(){this.isLoading||(this.navigationLevelStack.length>0&&(this.slidingOut=!0,this.popItemStack()),this.requestUpdate())}jumpToLevel(e){if(this.isLoading)return;let t=this.navigationLevelStack.length-e;t>0&&Array.from({length:t}).map(()=>{this.goBack()})}renderHeader(){return h.hZ(this,"header")?.length?(0,i.dy)`
                  <header>
                      <slot name="header"></slot>
                  </header>
              `:this.headerText?(0,i.dy)`
                  <header class="vl-header">
                      <h4 is="vl-h4" class="vl-header__title vl-label vl-label--h4">${this.headerText}</h4>
                  </header>
              `:i.Ld}renderBreadcrumb(){let e=this.breadCrumbHistory?.length,t=!!h.hZ(this,u.r.BREADCRUMB_PLACEHOLDER)?.length;return(0,i.dy)`
            ${e&&!this.hideBreadcrumb?(0,i.dy)`
                      <nav aria-label="U bent hier: " class="vl-breadcrumb">
                          <ol class="vl-breadcrumb__list">
                              ${this.renderBreadcrumbHome()} ${this.breadCrumbHistory?.map(this.renderBreadcrumbItem)}
                          </ol>
                      </nav>
                  `:t||!this.hideBreadcrumb?(0,i.dy)`
                      <nav class="vl-breadcrumb-placeholder">
                          <slot name="breadcrumb-placeholder"></slot>
                      </nav>
                  `:i.Ld}
        `}defaultItemTemplate(e){return(0,h.lB)(e,this)}updated(e){super.updated(e),e.has("level")?this.jumpToLevel(this.level):e.has("items")&&(this.nodeData=this.items)}render(){let e={"slide-in":this.slidingIn&&!this.slidingOut,"slide-out":this.slidingOut&&!this.slidingIn};return(0,i.dy)`
            <div>
                ${this.renderBreadcrumb()} ${this.renderHeader()}
                <div class="content">
                    <section class=${(0,d.$)(e)} @animationend=${this.handleAnimationEnd}>
                        ${this.isLoading?(0,i.dy)` <vl-loader data-vl-text=${this.loadingMessage}></vl-loader> `:this.nodeData?.map(this.renderItem)}
                    </section>
                </div>
            </div>
        `}handleAnimationEnd(){this.slidingIn=!1,this.slidingOut=!1,this.requestUpdate()}constructor(...e){super(...e),this.navigationLevelStack=[],this.nodeData=[],this.breadCrumbHistory=[],this.slidingIn=!1,this.slidingOut=!1,this.hideBreadcrumb=!1,this.level=0,this.isLoading=!1,this.loadingMessage=u.L.LOADING,this.declarativeMode=!1,this.processNarrowDown=async e=>{if(this.isLoading)return;let{label:t,children:s,narrowDown:i}=e;s?.length?(this.pushItemStack(t,this.nodeData),this.nodeData=s,this.slidingIn=!0,this.requestUpdate()):i&&this.itemListFn&&(this.isLoading=!0,this.pushItemStack(t,this.nodeData),this.requestUpdate(),this.nodeData=await this.itemListFn(e),this.isLoading=!1,this.slidingIn=!0,this.requestUpdate())},this.renderBreadcrumbHome=()=>{let e=!!h.hZ(this,u.r.HOME)?.length;return(0,i.dy)`
            <li class="vl-breadcrumb__list__item">
                <span class="vl-breadcrumb__list__item__separator" aria-hidden="true"></span>
                ${e?(0,i.dy)`
                              <span
                                  @click=${()=>this.jumpToLevel(0)}
                                  class="vl-breadcrumb__list__item__cta vl-breadcrumb-home-slot"
                              >
                                  <slot name="home"></slot>
                              </span>
                          `:(0,i.dy)`
                              <span
                                  is="vl-icon"
                                  data-vl-icon="places-home"
                                  class="vl-breadcrumb__list__item__cta"
                                  @click=${()=>this.jumpToLevel(0)}
                              ></span>
                          `}
                </span>
            </li>
        `},this.renderBreadcrumbItem=({label:e,index:t})=>{let s=this.breadCrumbHistory?.length;return(0,i.dy)`
            <li class="vl-breadcrumb__list__item ${(0,d.$)({"vl-breadcrumb__list__item--deactivated":s===t})}">
                <span class="vl-breadcrumb__list__item__separator" aria-hidden="true"></span>
                <span class="vl-breadcrumb__list__item__cta" @click=${()=>this.jumpToLevel(t)}>${e}</span>
            </li>
        `},this.renderItem=e=>{let t=(0,h.F4)(e,this);return e.component?e.component:t||this.defaultItemTemplate(e)},this.getChildCascaderNodes=e=>e.querySelectorAll(":scope > vl-cascader-item"),this.traverseTreeAndMapItems=e=>{let t=this.getChildCascaderNodes(e),s=[];return t.forEach(e=>{let t=this.traverseTreeAndMapItems(e);e.item&&(e.item.children=t),e.cascaderRef=this,s.push({...e.item,label:e.label,component:e,children:t})}),s}}}p=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,r.Mo)("vl-cascader")],p)},"./libs/components/src/next/cascader/vl-cascader.model.ts":(e,t,s)=>{"use strict";s.d(t,{L:()=>i,r:()=>l});let i={LOADING:"Aan het laden",LABEL_MISSING:"geen label"},l={HEADER:"header",BREADCRUMB_PLACEHOLDER:"breadcrumb-placeholder",CONTENT:"content",HOME:"home",LABEL:"label"}},"./libs/components/src/next/cascader/vl-cascader.utils.ts":(e,t,s)=>{"use strict";s.d(t,{F4:()=>o,GV:()=>a,hZ:()=>r,lB:()=>n});var i=s("./node_modules/lit/index.js"),l=s("./node_modules/lit/directives/class-map.js");let r=(e,t)=>e?.querySelectorAll(`:scope > [slot=${t}]`),o=(e,t)=>{let{templateType:s}=e;if(!t)return;let{templates:i}=t;if(s&&i&&i instanceof Map){let l=i.get(s);return l&&l(e,t.processNarrowDown)}},n=(e,t,s=!1)=>{let r={"vl-cascader-item":!t.isDeclarativeMode()};return(0,i.dy)`
        <div
            class=${(0,l.$)(r)}
            @click=${s=>{t?.processNarrowDown(e)}}
        >
            ${s?(0,i.dy)`<slot name="label">${e.label}</slot>`:a(e)}
        </div>
    `},a=e=>{let t=e.children&&e.children.length||e.narrowDown;return(0,i.dy)`
        <a is="vl-link" class="vl-link--bold vl-cascader-link ${(0,l.$)({"space-between":!!t})}">
            <span>${e.label}</span> ${t?(0,i.dy)` <span is="vl-icon" data-vl-icon="arrow-right-fat"></span> `:""}
        </a>
        ${e.annotation?(0,i.dy)`<vl-annotation>${e.annotation}</vl-annotation>`:i.Ld}
    `}},"./libs/components/src/pill/vl-button-pill.component.ts":(e,t,s)=>{"use strict";var i=s("./libs/common/utilities/src/index.ts");class l extends(0,i.W$)(HTMLButtonElement){static get _observedAttributes(){return["type"]}static get _observedChildClassAttributes(){return["disabled"]}get _classPrefix(){return"vl-pill--"}_typeChangedCallback(e,t){["success","warning","error"].indexOf(t)>=0?this._changeClass(this._element,e,t):this._element.classList.remove(this._classPrefix+e)}constructor(){super(),this.classList.add("vl-pill"),this.classList.add(`${this._classPrefix}clickable`)}}l=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,i.a6)("vl-button-pill",{extends:"button"})],l)},"./libs/components/src/pill/vl-pill.component.ts":(e,t,s)=>{"use strict";s.d(t,{p:()=>u});var i=s("./node_modules/@domg/govflanders-style/component/index.js"),l=s("./node_modules/@domg/govflanders-style/common/index.js"),r=s("./node_modules/lit/index.js"),o=s("./node_modules/lit/decorators.js"),n=s("./node_modules/lit/directives/class-map.js"),a=s("./node_modules/lit/directives/ref.js"),c=s("./libs/components/src/pill/vl-pill.model.ts");let d=(0,r.iv)`
    :root {
        --vl-theme-primary-color: #ffe615;
        --vl-theme-primary-color-60: #fff073;
        --vl-theme-primary-color-70: #ffee5b;
        --vl-theme-primary-color-rgba-30: rgba(255, 230, 21, 0.3);
        --vl-theme-fg-color: #333332;
        --vl-theme-fg-color-60: #858584;
        --vl-theme-fg-color-70: #707070;
    }

    .vl-vi::before,
    .vl-vi::after {
        font-family: 'vlaanderen-icon' !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-style: normal;
        font-variant: normal;
        font-weight: normal;
        text-decoration: none;
        text-transform: none;
        display: inline-block;
        vertical-align: middle;
    }
    .vl-vi.vl-vi-u-180deg::before {
        display: inline-block;
        transform: rotate(180deg);
        vertical-align: middle;
    }

    .vl-vi-u-xs::before {
        font-size: 0.8rem;
    }

    .vl-vi-u-s::before {
        font-size: 1.3rem;
    }

    .vl-vi-u-m::before {
        font-size: 1.7rem;
    }

    .vl-vi-u-l::before {
        font-size: 2rem;
    }

    .vl-vi-u-xl::before {
        font-size: 2.2rem;
    }

    .vl-vi-u-90deg::before {
        display: inline-block;
        transform: rotate(90deg);
    }

    .vl-vi-u-180deg::before {
        display: inline-block;
        transform: rotate(180deg);
    }

    .vl-pill--map {
        background-color: rgba(255, 255, 255, 0.8);
    }
    .vl-pill__close {
        font-family: 'vlaanderen-icon' !important;
    }
    .vl-pill__close::before {
        content: '\\f181';
    }
    .vl-pill--checkable__checkbox:disabled:checked + span::before {
        transform: translateZ(0) translate(-50%, -50%) scale(1);
    }
`;var h=s("./libs/common/utilities/src/index.ts");class u extends h.fS{static get styles(){return[l.YN,i.im,d,l.Oh,l.PC]}static get properties(){return{disabled:{type:Boolean,attribute:"data-vl-disabled",reflect:!0},type:{type:String,attribute:"data-vl-type",reflect:!0},closable:{type:Boolean,attribute:"data-vl-closable",reflect:!0},checkable:{type:Boolean,attribute:"data-vl-checkable",reflect:!0},checked:{type:Boolean||void 0,attribute:"data-vl-checked",reflect:!0}}}constructor(){super(),this.disabled=!1,this.type="",this.closable=!1,this.checkable=!1,this.isInMap=!1,this.disabled=!1,this.closable=!1,this.checkable=!1,this.checked=!1,this.checkboxRef=(0,a.V)()}updated(e){e.forEach((e,t)=>{"checked"===t&&this.checkboxRef.value&&(this.checkboxRef.value.checked=this.checked)})}render(){let e={"vl-pill":!0,"vl-pill--disabled":this.disabled,"vl-pill--data-vl-disabled":this.disabled,"vl-pill--success":this.type===c.w.SUCCESS,"vl-pill--warning":this.type===c.w.WARNING,"vl-pill--error":this.type===c.w.ERROR,"vl-pill--map":this.isInMap},t={...e,"vl-pill--closable":this.closable},s={...e,"vl-pill--checkable":this.checkable};return this.closable?(0,r.dy)`
                <div class="${(0,n.$)(t)}">
                    <slot></slot>
                    <button
                        class="vl-pill__close"
                        type="button"
                        @click=${()=>this.dispatchEvent(new CustomEvent("close"))}
                    >
                        <span class="vl-u-visually-hidden">Optie verwijderen</span>
                    </button>
                </div>
                </div>
            `:this.checkable?(0,r.dy)`
                <label class="${(0,n.$)(s)}" for="checkbox">
                    <input
                        class="vl-pill--checkable__checkbox"
                        type="checkbox"
                        id="checkbox"
                        name="checkbox"
                        ?disabled=${this.disabled}
                        ?checked=${this.checked}
                        ${(0,a.i)(this.checkboxRef)}
                        value="checked"
                        @input=${e=>{this.checked=e.target.checked,this.dispatchEvent(new CustomEvent("check",{bubbles:!0,composed:!0,detail:{checked:this.checked}}))}}
                    />
                    <span></span>
                    <slot></slot>
                </label>
            `:(0,r.dy)`
            <span class="${(0,n.$)(e)}">
                <slot></slot>
            </span>
        `}}u=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,o.Mo)("vl-pill")],u)},"./libs/components/src/pill/vl-pill.model.ts":(e,t,s)=>{"use strict";s.d(t,{w:()=>i});let i={SUCCESS:"success",WARNING:"warning",ERROR:"error"}},"./libs/components/src/popover/index.ts":(e,t,s)=>{"use strict";s.d(t,{m5:()=>i.m});var i=s("./libs/components/src/popover/vl-popover.component.ts");s("./libs/components/src/popover/vl-popover-action.component.ts"),s("./libs/components/src/popover/vl-popover-action-list.component.ts")},"./libs/components/src/radio/vl-radio-group.component.ts":(e,t,s)=>{"use strict";s.d(t,{J:()=>r,i:()=>l});var i=s("./libs/common/utilities/src/index.ts");let l={setKeyEventsRegistered(){this._parentElement().setAttribute("data-vl-key-events-registered","")},hasKeyEventsRegistered(){return this._parentElement().hasAttribute("data-vl-key-events-registered")},setFocusTransmitted(){this._parentElement().setAttribute("data-vl-focus-transmitted","")},hasFocusTransmitted(){return this._parentElement().hasAttribute("data-vl-focus-transmitted")},registerKeyEvents(e){if(!this.hasKeyEventsRegistered()){let t={left:37,up:38,right:39,down:40};this._parentElement().addEventListener("keydown",s=>{let i=e.filter(e=>!e.disabled);if(Object.values(t).includes(s.keyCode)){s.preventDefault();let e=i.find(e=>e.hasFocus),l=i[0],r=i[i.length-1];switch(s.keyCode){case t.up:case t.left:(i[i.indexOf(e)-1]||r).check();break;case t.down:case t.right:(i[i.indexOf(e)+1]||l).check()}}})}this.setKeyEventsRegistered()},transmitFocus(e){if(!this.hasFocusTransmitted()){let t=this._parentElement();t.addEventListener("focus",()=>{let s=e.filter(e=>!e.disabled);t.addEventListener("keyup",e=>{if(e.shiftKey){let e=s.find(e=>e.checked),t=s[s.length-1];(e||t).focus()}},{once:!0});let i=s.find(e=>e.checked),l=s[0];(i||l)&&(i||l).focus()})}this.setFocusTransmitted()},_parentElement(){return this.parentElement||this.getRootNode().host||this.getRootNode()}};class r extends(0,i.W$)(HTMLElement){constructor(){super("<slot></slot>"),this.vlRadioGroupComponent=void 0,Object.assign(this,l)}connectedCallback(){super.connectedCallback(),this._groupRadios(),this._processTabIndex(),this._transmitFocus()}get radios(){return[...this.querySelectorAll("vl-radio")]}get checkedRadio(){return this.radios.find(e=>e.checked)}_groupRadios(){this.radios.forEach(e=>e.setAttribute("data-vl-name","radio"))}_processTabIndex(){this.tabIndex=0,this.radios.forEach(e=>e.addEventListener("focus",()=>{this.tabIndex=-1})),this.radios.forEach(e=>e.addEventListener("blur",()=>{this.tabIndex=0}))}_transmitFocus(){this.tabIndex=0,this.addEventListener("focus",()=>{this.addEventListener("keyup",e=>{e.shiftKey&&this.radios[this.radios.length-1].focus()},{once:!0}),this.radios[0].focus()}),this.radios.forEach(e=>e.addEventListener("focus",()=>{this.tabIndex=-1})),this.radios.forEach(e=>e.addEventListener("blur",()=>{this.tabIndex=0}))}}r=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,i.a6)("vl-radio-group")],r)},"./libs/components/src/radio/vl-radio.component.ts":(e,t,s)=>{"use strict";s.d(t,{O:()=>c});var i=s("./libs/common/utilities/src/index.ts"),l=s("./libs/components/src/radio/vl-radio-group.component.ts"),r=s("./node_modules/@domg/govflanders-style/component/index.js"),o=s("./node_modules/@domg/govflanders-style/common/index.js"),n=s("./node_modules/lit/index.js");let a=(0,n.iv)`
    .vl-radio--disabled .vl-radio__toggle:checked + .vl-radio__label::before {
        background-color: #fff;
    }
`;class c extends(0,i.W$)(HTMLElement){static get formAssociated(){return!0}static get _observedAttributes(){return["label","name","value","checked"]}static get _observedChildClassAttributes(){return["block","single","disabled","error"]}constructor(){super(`
          <style>
            ${o.YN}
            ${o.Oh}
            ${r.SC}
            ${a}
            ${o.PC}
          </style>
          <label class="vl-radio" for="radio">
            <input class="vl-radio__toggle" type="radio" id="radio" name="radio"/>
            <div class="vl-radio__label">
              <span id="label-text">
                <slot></slot>
              </span>
            </div>
          </label>
        `),Object.assign(this,l.i),this.attachInternals&&(this._internals=this.attachInternals())}connectedCallback(){super.connectedCallback(),this._inputElement.addEventListener("change",()=>this._check()),this._registerChangeEvent(),setTimeout(()=>{this.registerKeyEvents(this._radios),this.transmitFocus(this._radios)})}formResetCallback(){this.checked=this.hasAttribute("checked")}get form(){return this._internals?this._internals.form:void 0}get validity(){return this._internals?this._internals.validity:void 0}get validationMessage(){return this._internals?this._internals.validationMessage:void 0}get willValidate(){return this._internals?this._internals.willValidate:void 0}get value(){return this._inputElement.value}get checked(){return this._inputElement.checked}set checked(e){this._inputElement.checked=e,e&&this._check()}get disabled(){return this._inputElement.disabled}set disabled(e){this._inputElement.disabled=e}get hasFocus(){return this._inputElement==this._getActiveElement()}get _classPrefix(){return"vl-radio--"}get _inputElement(){return this._element.querySelector("input")}get _labelText(){return this._element.querySelector("#label-text")}get _radios(){return[...((void 0!=this.assignedSlot?this.closest("vl-radio-group"):this.getRootNode())||this.getRootNode()).querySelectorAll(`vl-radio[data-vl-name='${this.dataset.vlName}']`)]}check(){this._inputElement.click()}focus(){this._inputElement.focus()}_check(){this.focus(),this._inputElement.tabIndex=0,this._radios.filter(e=>e.checked).filter(e=>e!==this).forEach(e=>e.checked=!1),this._radios.filter(e=>!e.checked).forEach(e=>e._inputElement.tabIndex="-1")}_labelChangedCallback(e,t){this._labelText.textContent=t}_valueChangedCallback(e,t){this._inputElement.value=t}_nameChangedCallback(e,t){this._inputElement.name!=t&&(this._inputElement.name=t,this.setAttribute("name",t))}_checkedChangedCallback(e,t){this._inputElement.checked=null!=t}_disabledChangedCallback(e,t){this._inputElement.disabled=null!=t}_singleChangedCallback(e,t){this._toggleClass(this._labelText,t,"vl-u-visually-hidden")}_getActiveElement(e=document){return e.activeElement&&e.activeElement.shadowRoot?this._getActiveElement(e.activeElement.shadowRoot):e.activeElement||e}_registerChangeEvent(){this._inputElement.addEventListener("change",()=>this.dispatchEvent(new Event("change")))}}c=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,i.a6)("vl-radio")],c)},"./libs/components/src/rich-data-table/vl-rich-data-table.component.ts":(e,t,s)=>{"use strict";var i=s("./libs/common/utilities/src/index.ts"),l=s("./libs/elements/src/index.ts"),r=s("./libs/components/src/rich-data/vl-rich-data.component.ts"),o=s("./libs/components/src/rich-data-table/vl-rich-data-field.component.ts"),n=s("./libs/components/src/rich-data-table/vl-rich-data-sorter.component.ts"),a=s("./libs/components/src/rich-data-table/vl-rich-data-table.uig-css.ts");class c extends r.B{static{(0,i.YV)([l.Dt])}static get _observedAttributes(){return super._observedAttributes.concat(["data","collapsed-m","collapsed-s","collapsed-xs"])}static get _tableAttributes(){return["data-vl-collapsed-m","data-vl-collapsed-s","data-vl-collapsed-xs"]}static get is(){return"vl-rich-data-table"}constructor(){super(`
          <style>
            ${a.Z}
          </style>`,`
          <table is="vl-data-table" slot="content">
            <thead>
              <tr></tr>
            </thead>
            <tbody></tbody>
          </table>
        `),this.__observeSorters()}connectedCallback(){super.connectedCallback(),this._render(),this.__observeFields()}attributeChangedCallback(e,t,s){if(super.attributeChangedCallback(e,t,s),c._tableAttributes.includes(e)){let t=e.substring(8);this.__table.toggleAttribute(t)}}set data(e){let t=this.data?this.data.data:void 0;if(super.data=e,t!==this.data.data)try{this._validate(this.data.data),this._renderBody()}catch(e){throw this._data&&(this._data.data=[]),e}}get data(){return super.data}get __activeSorters(){return this.__sorters&&void 0!==this.__sorters?Array.from(this.__sorters).filter(e=>void 0!==e.direction).sort(n.F.PRIORITY_COMPARATOR):void 0}get __contentColumn(){return this.shadowRoot.querySelector("#content")}get __fields(){return this.querySelectorAll(o._.is)}get __richDataFields(){return[...this.__fields].filter(e=>e.constructor===o._)}get __sorters(){return this.__tableHeaderRow?this.__tableHeaderRow.querySelectorAll(n.F.is):void 0}get __sortingState(){return this.__activeSorters&&this.__activeSorters.length>0?this.__activeSorters.map(e=>({name:e.for,priority:e.priority,direction:e.direction})):null}get __table(){return this.shadowRoot.querySelector("table")}get __tableHeader(){return this.__table.querySelector("thead")}get __tableHeaderRow(){let e=this.__tableHeader;return e?e.querySelector("tr"):void 0}get __tableBody(){return this.__table.querySelector("tbody")}__getState({paging:e}){let t=super.__getState({paging:e});return t.sorting=this.__sortingState,t}get _isMultisortingEnabled(){return void 0!==this.dataset.vlMultisort}_validate(e){if(e&&!Array.isArray(e))throw Error("vl-rich-data-table verwacht een Array als data")}set _sorting(e){e&&this.__sorters&&this.__sorters.forEach(t=>{let s=e.find(e=>e.name===t.for);t.direction=s?s.direction:void 0,t.priority=s?s.priority:void 0})}get _hasResults(){return!!this._data}_render(){this._renderHeaders(),this._renderBody()}_renderHeaders(){let{__tableHeaderRow:e,__richDataFields:t,__addHeaderColumn:s}=this;e&&(e.innerHTML="");let i=t.map(e=>e.headerTemplate());i.some(e=>!!e.textContent)?(i.forEach(s.bind(this)),this.__showHeader()):this.__hideHeader()}__addHeaderColumn(e){this.__initializeSortingOnHeaderColumn(e),this.__tableHeaderRow&&this.__tableHeaderRow.appendChild(e)}__hideHeader(){this.__tableHeader&&this.__tableHeader.setAttribute("hidden","")}__showHeader(){this.__tableHeader&&this.__tableHeader.removeAttribute("hidden")}__initializeSortingOnHeaderColumn(e){let t=e.querySelector("th[data-vl-sortable] > a");t&&t.addEventListener("click",e=>{t.querySelector("vl-rich-data-sorter").nextDirection()})}_renderBody(){let{__tableBody:e,data:t}=this;t&&t.data&&e&&(e.innerHTML="",this.data.data.forEach(t=>{let s=this._template("<tr></tr>").firstElementChild;this.__richDataFields.map(e=>{s.appendChild(e.valueTemplate(t))}),e.appendChild(s)}))}_dataChangedCallback(e,t){this.data=JSON.parse(t)}__listenToFieldChanges(e){e.addEventListener("change",this.__fieldChanged.bind(this))}__stopListeningToFieldChanges(e){e.removeEventListener("change",this.__fieldChanged.bind(this))}__listenToSortChanges(e){e.addEventListener("change",this.__sortingChanged.bind(this))}__stopListeningToSortChanges(e){e.removeEventListener("change",this.__sortingChanged.bind(this))}__fieldChanged(e){let t=e.detail.properties;t&&(t.some(e=>o._.headerAttributes.includes(e))&&this._renderHeaders(),t.some(e=>o._.bodyAttributes.includes(e))&&this._renderBody())}__sortingChanged(e){this._isMultisortingEnabled?this.__activeSorters&&this.__activeSorters.forEach((e,t)=>e.priority=t+1):this.__activeSorters&&this.__activeSorters.filter(t=>t!==e.target).forEach(e=>e.direction=void 0),this.__onStateChange(e)}__createObserver(e,t,s){return new MutationObserver(i=>{let l=!1;i.forEach(s=>{(s.addedNodes||s.removedNodes)&&(l=!0,s.addedNodes&&s.addedNodes.forEach(e),s.removedNodes&&s.removedNodes.forEach(t))}),s&&l&&this._render()})}__observeFields(){this.__fields.forEach(this.__listenToFieldChanges.bind(this)),this.__createObserver(this.__listenToFieldChanges.bind(this),this.__stopListeningToFieldChanges.bind(this),!0).observe(this,{childList:!0})}__observeSorters(){let e=e=>t=>{let s=t.querySelector(n.F.is);s&&e(s)};this.__tableHeaderRow&&this.__createObserver(e(e=>this.__listenToSortChanges(e)),e(e=>this.__stopListeningToSortChanges(e)),!1).observe(this.__tableHeaderRow,{childList:!0})}}c=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,i.$x)([customElements.whenDefined(o._.is),customElements.whenDefined(n.F.is)],"vl-rich-data-table")],c)},"./libs/components/src/search/vl-search.component.ts":(e,t,s)=>{"use strict";s.d(t,{g:()=>c});var i=s("./libs/common/utilities/src/index.ts"),l=s("./libs/elements/src/index.ts"),r=s("./node_modules/@domg/govflanders-style/common/index.js"),o=s("./node_modules/@domg/govflanders-style/component/index.js"),n=s("./node_modules/lit/index.js");let a=(0,n.iv)`
    :root {
        --vl-theme-primary-color: #ffe615;
        --vl-theme-primary-color-60: #fff073;
        --vl-theme-primary-color-70: #ffee5b;
        --vl-theme-primary-color-rgba-30: rgba(255, 230, 21, 0.3);
        --vl-theme-fg-color: #333332;
        --vl-theme-fg-color-60: #858584;
        --vl-theme-fg-color-70: #707070;
    }

    .vl-vi::before,
    .vl-vi::after {
        font-family: 'vlaanderen-icon' !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-style: normal;
        font-variant: normal;
        font-weight: normal;
        text-decoration: none;
        text-transform: none;
        display: inline-block;
        vertical-align: middle;
    }
    .vl-vi.vl-vi-u-180deg::before {
        display: inline-block;
        transform: rotate(180deg);
        vertical-align: middle;
    }

    .vl-vi-u-xs::before {
        font-size: 0.8rem;
    }

    .vl-vi-u-s::before {
        font-size: 1.3rem;
    }

    .vl-vi-u-m::before {
        font-size: 1.7rem;
    }

    .vl-vi-u-l::before {
        font-size: 2rem;
    }

    .vl-vi-u-xl::before {
        font-size: 2.2rem;
    }

    .vl-vi-u-90deg::before {
        display: inline-block;
        transform: rotate(90deg);
    }

    .vl-vi-u-180deg::before {
        display: inline-block;
        transform: rotate(180deg);
    }

    .vl-search {
        position: relative;
    }
    .vl-search--inline {
        display: inline-block;
        width: 25rem;
        max-width: 100%;
    }
    @media screen and (max-width: 767px) {
        .vl-search--inline {
            display: block;
            width: auto;
        }
    }
    .vl-search--inline .vl-search__submit,
    .vl-search--inline .vl-search__label {
        display: block;
        padding: 0;
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 4.3rem;
        color: #fff;
        font-size: 0 !important;
    }
    .vl-search--inline .vl-search__submit .vl-vi,
    .vl-search--inline .vl-search__label .vl-vi {
        font-size: 1.7rem;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .vl-search--inline .vl-search__label {
        color: #333332;
    }
    .vl-search--inline .vl-search__submit {
        z-index: -1;
        opacity: 0;
        transform: translateX(100%);
        margin-bottom: -2rem;
        height: 3.5rem;
    }
    .vl-search--inline .vl-search__submit:focus,
    .vl-search--inline .vl-search__submit:focus + .vl-search__submit,
    .vl-search--inline .vl-search__input:focus,
    .vl-search--inline slot[name='input']:focus,
    .vl-search--inline .vl-search__input:focus + .vl-search__submit,
    .vl-search--inline slot[name='input']:focus + .vl-search__submit {
        z-index: 1;
        opacity: 1;
        transform: translateX(0%);
    }
    .vl-search--inline .vl-search__submit:focus {
        transition: none;
    }
    .vl-search--inline .vl-search__input,
    .vl-search--inline slot[name='input'] {
        display: block;
        width: 100%;
        text-align: left;
    }
    .vl-search--inline .vl-search__input:focus,
    .vl-search--inline slot[name='input']:focus {
        width: calc(100% - 4.7rem);
        padding-right: 0;
    }
    .vl-search--inline .vl-search__input:valid + .vl-search__submit,
    .vl-search--inline slot[name='input']:valid + .vl-search__submit {
        transition: none;
        z-index: 1;
        opacity: 1;
        transform: translateX(0%);
    }
    .vl-search--block {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 2rem 1.5rem;
        background-color: #f7f9fc;
    }
    @media screen and (max-width: 767px) {
        .vl-search--block {
            padding-left: 3%;
            padding-right: 3%;
            position: relative;
            width: 100vw;
            left: 50%;
            right: 50%;
            margin-left: -50vw;
            margin-right: -50vw;
        }
    }
    @media screen and (max-width: 767px) {
        .vl-search--block {
            display: block;
            padding: 1.5rem 1rem;
        }
    }
    .vl-search--block .vl-search__label {
        color: #4d4d4b;
        font-weight: 400;
        font-size: 1.6rem;
        flex: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    @media screen and (max-width: 767px) {
        .vl-search--block .vl-search__label {
            font-size: 1.6rem;
        }
    }
    .vl-search--block .vl-search__input,
    .vl-search--block slot[name='input'] {
        flex: 6;
        margin: 0 2rem;
    }
    @media screen and (max-width: 1023px) {
        .vl-search--block .vl-search__input,
        .vl-search--block slot[name='input'] {
            margin: 0 1rem;
            flex: 4;
        }
    }
    @media screen and (max-width: 767px) {
        .vl-search--block .vl-search__input,
        .vl-search--block slot[name='input'] {
            margin: 0;
            display: block;
            width: 100%;
            margin-bottom: 1.5rem;
        }
    }
    .vl-search--block.vl-search--alt {
        background-color: #fff;
    }

    slot[name='input'] {
        display: block;
    }

    :host([data-vl-inline][data-vl-has-input-slot]) .vl-search__label {
        z-index: 1000;
    }

    :host([data-vl-inline]) .vl-search {
        width: var(--vl-search-width, 25rem);
    }
    :host([data-vl-inline]) slot[name='input'] {
        box-sizing: content-box;
    }
    :host([data-vl-inline]) slot[name='input'] + .vl-search__submit {
        display: none;
    }
    :host([data-vl-inline]) slot[name='input'].is-open + .vl-search__submit {
        transition: opacity 0.2s, transform 0.2s;
        z-index: 1000;
        opacity: 1;
        transform: translateX(0%);
        display: block;
    }
    :host([data-vl-inline]) ::slotted(.js-vl-select) {
        background: white !important;
        box-shadow: 0px 0px 0px 1px inset #687483;
        margin-right: 0rem !important;
    }
    :host([data-vl-inline]) ::slotted(.js-vl-select:hover) {
        box-shadow: 0px 0px 0px 2px inset rgba(0, 85, 204, 0.65);
    }
    :host([data-vl-inline]) ::slotted(.is-open),
    :host([data-vl-inline]) ::slotted(.is-focused) {
        margin-right: 4.7rem !important;
        border: 0.1rem solid #687483 !important;
    }
`;class c extends(0,i.W$)(HTMLElement){static{(0,i.YV)([l.d7,l.Gi,l.my])}static get _observedAttributes(){return["label","submit-label"]}static get _observedChildClassAttributes(){return["inline","block","alt"]}constructor(){super(`
      <style>
        ${r.YN}
        ${o.jn}
        ${o.K$}
        ${o.he}
        ${a}
      </style>
      <div class="vl-search">
        <slot name="input"></slot>
        <input is="vl-input-field" class="vl-search__input" type="search" id="search-input" value="" title="Zoekterm"/>
      </div>
    `)}connectedCallback(){super.connectedCallback(),this._isInline||this._isBlock||this.setAttribute("data-vl-block",""),this.__processInputSlot(),this.__setupChangeEventTriggers()}disconnectedCallback(){this._observer&&this._observer.disconnect()}get value(){return this.__inputElement.value}get _isInline(){return this.hasAttribute("data-vl-inline")}get _isBlock(){return this.hasAttribute("data-vl-block")}get _classPrefix(){return"vl-search--"}get __labelElement(){return this._element.querySelector("#search-label")}get __buttonElement(){return this._element.querySelector("#search-button")}get __inputElement(){return this._element.querySelector("#search-input")}get __inputSlotElement(){return this._element.querySelector('slot[name="input"]')}get __inputSlot(){return this.querySelector('[slot="input"]')}_inlineChangedCallback(e,t){this.toggleAttribute("data-vl-block",void 0==t),this.__render()}_blockChangedCallback(e,t){this.toggleAttribute("data-vl-inline",void 0==t),this.__render()}_labelChangedCallback(){this.__renderLabel()}_submitLabelChangedCallback(){this.__renderButton()}__setupChangeEventTriggers(){this.__inputElement&&this.__inputElement.addEventListener("change",e=>{e.stopPropagation(),this._submit()}),this.__labelElement&&this.__labelElement.addEventListener("click",()=>{let e=this.querySelector(":scope > [slot=input]");e?.querySelector("input")?.click()})}_submit(){this.dispatchEvent(new Event("change"))}__render(){this.__renderLabel(),this.__renderButton()}__renderLabel(){this.__labelElement&&this.__labelElement.remove(),this._element.prepend(this.__getLabelTemplate())}__renderButton(){this.__buttonElement&&this.__buttonElement.remove(),this._element.append(this.__getButtonTemplate())}__iconTemplate(){return'<span is="vl-icon" data-vl-icon="magnifier" aria-hidden="true"></span>'}__getLabelTemplate(){let e=this.dataset.vlLabel||"Zoekterm",t=this._isInline?`<span class="vl-u-visually-hidden">${e}</span> ${this.__iconTemplate()}`:e;return this._template(`
      <label id="search-label" class="vl-search__label" for="search-input">
        <slot name="label">
          ${t}
        </slot>
      </label>
    `)}__getButtonTemplate(){let e=this._isInline?this.__iconTemplate():"";return this._template(`
          <button is="vl-button" id="search-button" class="vl-search__submit" type="submit">
            ${e}
            <slot name="submit-label">
              ${this.dataset.vlSubmitLabel||"Zoeken"}
            </slot>
          </button>
        `)}__processInputSlot(){let e=this.querySelector('[slot="input"]');e?(customElements.whenDefined("vl-select").then(async()=>{e instanceof l.Kj&&(this.setAttribute("data-vl-has-input-slot",""),await e.ready(),this.__observeInputSlot(e=>{let t=e=>e.target.classList.contains("is-open"),s=e=>e.target.classList.contains("is-focused");e.find(e=>t(e)||s(e))?this.__inputSlotElement.classList.add("is-open"):this.__inputSlotElement.classList.remove("is-open")}),this.append(e._wrapperElement))}),this.__inputElement&&this.__inputElement.remove()):this.__inputSlotElement.remove()}__observeInputSlot(e){this._observer=new MutationObserver(e),this._observer.observe(this.__inputSlot,{attributes:!0,attributeFilter:["class"]})}}c=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,i.a6)("vl-search")],c)},"./libs/components/src/share-buttons/vl-share-button.component.ts":(e,t,s)=>{"use strict";var i=s("./node_modules/@domg/govflanders-style/component/index.js"),l=s("./node_modules/@domg/govflanders-style/common/index.js"),r=s("./node_modules/lit/index.js"),o=s("./node_modules/lit/decorators.js"),n=s("./libs/components/src/share-buttons/vl-share-button.model.ts");let a=(0,r.iv)`
    .vl-share-button {
        margin: 1rem 0.6rem;
        position: relative;
        display: inline-block;
        background-color: #05c;
        color: #e6eefa !important;
        font-size: 0;
        width: 3.2rem;
        height: 3.2rem;
        transition: background-color 0.1s;
        line-height: 2.6rem;
        vertical-align: middle;
        text-decoration: none;
        overflow: hidden;
        padding: 0.3rem;
        appearance: none;
        border: 0;
    }
    .vl-share-button .vl-vi {
        position: absolute;
        font-size: 1.8rem;
        text-align: center;
        right: 0;
        left: 0;
    }
    .vl-share-button:active {
        background-color: #004099;
    }
    .vl-share-button:active::after {
        position: absolute;
        display: block;
        background-color: #000;
        height: 0.3rem;
        opacity: 0.3;
        content: '';
        top: 0;
        right: 0;
        left: 0;
    }
    .vl-share-button:hover,
    .vl-share-button:focus {
        background-color: #003bb0;
    }

    .vl-share-button--facebook {
        background-color: #36609f;
    }
    .vl-share-button--facebook:hover,
    .vl-share-button--facebook:focus {
        background-color: #4a70a9;
    }

    .vl-share-button--twitter {
        background-color: #2caae1;
    }
    .vl-share-button--twitter:hover,
    .vl-share-button--twitter:focus {
        background-color: #41b3e4;
    }

    .vl-share-button--linkedin {
        background-color: #0a6c9b;
    }
    .vl-share-button--linkedin:hover,
    .vl-share-button--linkedin:focus {
        background-color: #237ba5;
    }

    .vl-share-button--googleplus {
        background-color: #dc5442;
    }
    .vl-share-button--googleplus:hover,
    .vl-share-button--googleplus:focus {
        background-color: #e06555;
    }
`;var c=s("./libs/common/utilities/src/index.ts");class d extends c.fS{static get styles(){return[l.YN,l.Oh,a,i.oQ]}static get properties(){return{medium:{type:String,attribute:"data-vl-medium",reflect:!0},href:{type:String,attribute:"href",reflect:!0}}}render(){let e=n.x[this.medium];return(0,r.dy)`<a
            href=${this.href}
            class="vl-share-button vl-share-button--${this.medium}"
            title="Deel op ${e}"
        >
            <i class="vl-vi vl-vi-${this.medium}" aria-hidden="true"></i>
            ${e}
        </a>`}constructor(...e){super(...e),this.medium="",this.href=""}}d=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,o.Mo)("vl-share-button")],d)},"./libs/components/src/share-buttons/vl-share-button.model.ts":(e,t,s)=>{"use strict";s.d(t,{i:()=>i,x:()=>l});let i={FACEBOOK:"facebook",TWITTER:"twitter",LINKED_IN:"linkedin",GOOGLE_PLUS:"googleplus",MAIL:"mail"},l={[i.FACEBOOK]:"Facebook",[i.TWITTER]:"Twitter",[i.LINKED_IN]:"LinkedIn",[i.GOOGLE_PLUS]:"Google Plus",[i.MAIL]:"mail"}},"./libs/components/src/share-buttons/vl-share-buttons.component.ts":(e,t,s)=>{"use strict";var i=s("./libs/common/utilities/src/index.ts"),l=s("./node_modules/lit/index.js"),r=s("./node_modules/lit/decorators.js"),o=s("./node_modules/lit/directives/class-map.js");let n=(0,l.iv)`
    .vl-share-buttons {
        display: flex;
        align-items: center;
    }

    .vl-share-buttons:not(.vl-share-buttons--alt) {
        border-top: 0.1rem solid #f7f9fc;
    }

    .vl-share-buttons__label {
        font-size: 1.6rem;
        font-weight: 500;
        color: #333332;
        text-transform: uppercase;
        margin: 0;
    }
`;class a extends i.fS{static get styles(){return[n]}static get properties(){return{alt:{type:Boolean,attribute:"data-vl-alt",reflect:!0}}}render(){return(0,l.dy)` <div class=${(0,o.$)({"vl-share-buttons":!0,"vl-share-buttons--alt":this.alt})}>
            <div class="vl-share-buttons__label">Deel:</div>
            <slot></slot>
        </div>`}constructor(...e){super(...e),this.alt=""}}a=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,r.Mo)("vl-share-buttons")],a)},"./libs/components/src/side-sheet/vl-side-sheet.component.ts":(e,t,s)=>{"use strict";s.d(t,{v:()=>d});var i=s("./libs/common/utilities/src/index.ts"),l=s("./libs/components/src/toggle-button/index.ts"),r=s("./libs/elements/src/index.ts"),o=s("./node_modules/swipe-detect/dist/index.js"),n=s("./node_modules/lit/index.js");let a=(0,n.iv)`
    .vl-vi::before,
    .vl-vi::after {
        font-family: 'vlaanderen-icon' !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-style: normal;
        font-variant: normal;
        font-weight: normal;
        text-decoration: none;
        text-transform: none;
        display: inline-block;
        vertical-align: middle;
    }
    .vl-vi.vl-vi-u-180deg::before {
        display: inline-block;
        transform: rotate(180deg);
        vertical-align: middle;
    }

    .vl-vi-u-xs::before {
        font-size: 0.8rem;
    }

    .vl-vi-u-s::before {
        font-size: 1.3rem;
    }

    .vl-vi-u-m::before {
        font-size: 1.7rem;
    }

    .vl-vi-u-l::before {
        font-size: 2rem;
    }

    .vl-vi-u-xl::before {
        font-size: 2.2rem;
    }

    .vl-vi-u-90deg::before {
        display: inline-block;
        transform: rotate(90deg);
    }

    .vl-vi-u-180deg::before {
        display: inline-block;
        transform: rotate(180deg);
    }

    :host {
        position: fixed;
        top: 0px;
        right: 0px;
        z-index: 1001;
        width: var(--vl-side-sheet-width, 33.3333333333%);
    }
    :host #vl-side-sheet {
        position: absolute;
        display: none;
        width: 100%;
        height: 100%;
        padding-top: 43px;
        z-index: 2;
        background: white;
        overflow: auto;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
    }
    :host #vl-side-sheet [is='vl-layout'] {
        min-width: auto;
    }
    :host #vl-side-sheet-backdrop {
        display: none;
    }
    :host #vl-side-sheet-toggle-text {
        white-space: nowrap;
    }
    :host .vl-side-sheet__toggle {
        position: absolute;
        top: calc(1rem + 43px);
        right: 0px;
        background-color: white !important;
        color: #333332 !important;
        cursor: pointer !important;
        z-index: 1;
    }
    :host .vl-side-sheet__toggle::part(button template) {
        border: 1px solid #cbd2da !important;
        border-right-width: 0px !important;
        border-radius: 0.3rem 0px 0px 0.3rem;
    }

    :host(.vl-side-sheet--left) {
        right: initial;
        left: 0;
    }
    :host(.vl-side-sheet--left) .vl-side-sheet__toggle {
        right: initial;
        left: 0px;
    }
    :host(.vl-side-sheet--left) .vl-side-sheet__toggle::part(button template) {
        border-right-width: 1px !important;
        border-left-width: 0px !important;
        border-radius: 0px 0.3rem 0.3rem 0px;
    }

    :host([data-vl-open]) {
        height: 100%;
        z-index: 1002;
    }
    @media screen and (max-width: 767px) {
        :host([data-vl-open]) {
            width: var(--vl-side-sheet-width-mobile, calc(100vw - 56px));
        }
    }
    :host([data-vl-open]) #vl-side-sheet {
        display: block;
    }
    :host([data-vl-open]) #vl-side-sheet-backdrop {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(2px);
    }
    @media screen and (max-width: 767px) {
        :host([data-vl-open]) #vl-side-sheet-backdrop {
            display: block;
        }
    }
    :host([data-vl-open]) .vl-side-sheet__toggle {
        right: 100%;
    }

    :host(.vl-side-sheet--left[data-vl-open]) .vl-side-sheet__toggle {
        right: initial;
        left: 100%;
    }

    :host(.vl-side-sheet--absolute) {
        position: absolute;
    }
    :host(.vl-side-sheet--absolute) #vl-side-sheet {
        padding-top: 0px;
        padding: 15px;
    }
    :host(.vl-side-sheet--absolute) .vl-side-sheet__toggle {
        top: 1rem;
    }
    :host(.vl-side-sheet--absolute) .vl-side-sheet__toggle::part(button template) {
        border-left-width: 1px !important;
        border-right-width: 1px !important;
    }

    :host(.vl-side-sheet--absolute.vl-side-sheet--left) {
        right: initial;
        left: 0px;
    }

    :host(.vl-side-sheet--absolute[data-vl-open]) .vl-side-sheet__toggle::part(button template) {
        border-right-width: 0px !important;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
    }

    :host(.vl-side-sheet--absolute.vl-side-sheet--left[data-vl-open]) .vl-side-sheet__toggle::part(button template) {
        border-right-width: 1px !important;
        border-left-width: 0px !important;
        border-radius: 0px 0.3rem 0.3rem 0px;
    }
`,c=[...r.CX,a];class d extends(0,i.W$)(HTMLElement){static{(0,i.YV)([r.bs,r.lV,r.yK,l.e])}static get _observedAttributes(){return["enable-swipe","toggle-text","tooltip-text","custom-icon","hide-toggle-button","icon-position","custom-size"]}static get _observedClassAttributes(){return["left","right","absolute"]}constructor(e=""){super(`
          <style>
            ${c}
          </style>
          <div>
              <vl-toggle-button
                  aria-expanded="false"
                  data-vl-icon="nav-left"
                  data-vl-icon-placement="before"
                  class="vl-side-sheet__toggle"
              >
                <span id="vl-side-sheet-toggle-text" is="vl-text"></span>
              </vl-toggle-button>
              <div id="vl-side-sheet-backdrop"></div>
              <div id="vl-side-sheet">
                <section is="vl-region">
                  <div is="vl-layout">
                    <slot></slot>
                  </div>
                </section>
              </div>
          </div>
        `)}connectedCallback(){super.connectedCallback(),this._toggle=()=>this.toggle(),this._toggleButton.addEventListener("click",this._toggle),this._toggleButton.active=!1,this.updateToggleText(this.toggleText),"after"!==this.iconPlacement?this._toggleButton.setAttribute("data-vl-icon-placement","before"):this._toggleButton.setAttribute("data-vl-icon-placement","after")}disconnectedCallback(){this._toggleButton.removeEventListener("click",this._toggle)}get isOpen(){return this.hasAttribute("open")}get isLeft(){return this.hasAttribute("left")}get toggleText(){return this.getAttribute("toggle-text")}get hideToggleButton(){return this.getAttribute("hide-toggle-button")}get customIcon(){return this.getAttribute("data-vl-custom-icon")}get iconPlacement(){return this.getAttribute("data-vl-icon-placement")}get _classPrefix(){return"vl-side-sheet--"}get _toggleButton(){return this._shadow.querySelector(".vl-side-sheet__toggle")}get _toggleButtonTextElement(){return this._shadow.querySelector("#vl-side-sheet-toggle-text")}get _sheetElement(){return this._shadow.querySelector("#vl-side-sheet")}get _regionElement(){return this._sheetElement.querySelector('[is="vl-region"]')}get _backdropElement(){return this._shadow.querySelector("#vl-side-sheet-backdrop")}get _slotElement(){return this._shadow.querySelector("slot")}toggle(){this.isOpen?this.close():this.open()}open(){let e;this.setAttribute("data-vl-open",""),this._toggleButton.setAttribute("aria-expanded","true"),e=this.customIcon?this.customIcon:this.isLeft?"nav-left":"nav-right",this._toggleButton.setAttribute("data-vl-icon",e)}close(){let e;this.removeAttribute("data-vl-open"),this._toggleButton.setAttribute("aria-expanded","false"),e=this.customIcon?this.customIcon:this.isLeft?"nav-right":"nav-left",this._toggleButton.setAttribute("data-vl-icon",e),this._onClose&&this._onClose()}onClose(e){this._onClose=e}_enableSwipeChangedCallback(e,t){null!==t?(0,o.Z)(this._sheetElement,e=>{(this.isLeft&&"left"===e||!this.isLeft&&"right"===e)&&this.close()},50):o.Z.disable()}_absoluteChangedCallback(e,t){void 0!=t&&this._regionElement&&(this._sheetElement.append(this._slotElement),this._regionElement.remove())}_leftChangedCallback(e,t){this.customIcon||(void 0!=t?this._toggleButton.setAttribute("data-vl-icon","nav-right"):this._toggleButton.setAttribute("data-vl-icon","nav-left"))}updateToggleText(e){e&&""!==e?this._toggleButton.removeAttribute("data-vl-text-hidden"):this._toggleButton.setAttribute("data-vl-text-hidden",""),this._toggleButtonTextElement.textContent=e}_toggleTextChangedCallback(e,t){this.updateToggleText(t)}_tooltipTextChangedCallback(e,t){this._toggleButton.title=t}_hideToggleButtonChangedCallback(e,t){null===t?this._toggleButton.classList.remove("vl-u-visually-hidden"):this._toggleButton.classList.add("vl-u-visually-hidden")}_customIconChangedCallback(e,t){t&&this._toggleButton.setAttribute("data-vl-icon",t)}}d=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,i.a6)("vl-side-sheet")],d)},"./libs/components/src/spotlight/vl-spotlight.component.ts":(e,t,s)=>{"use strict";var i=s("./node_modules/lit/index.js"),l=s("./node_modules/lit/decorators.js"),r=s("./node_modules/@domg/govflanders-style/component/index.js");let o=[...s("./libs/elements/src/index.ts").CX,r.EM,r.A1,r.kv];var n=s("./libs/components/src/spotlight/vl-spotlight.model.ts"),a=s("./libs/common/utilities/src/index.ts");class c extends a.fS{static get styles(){return[(0,i.iv)`
                ${(0,i.$m)(o)}
            `]}constructor(){super(),this.link="",this.alt=!1,this.size="",this.imgSrc="",this.imgAlt="",this.alt=!1}static get properties(){return{link:{type:String,attribute:"data-vl-link"},alt:{type:Boolean,attribute:"data-vl-alt",reflect:!0},size:{type:String,attribute:"data-vl-size",reflect:!0},imgSrc:{type:String,attribute:"data-vl-img-src"},imgAlt:{type:String,attribute:"data-vl-img-alt"}}}__getSlot(e){return(0,i.dy)` <slot name="${e}"></slot>`}__processSlotTitle(){return this._getTitleTemplateWithValue(this.__getSlot("title"))}__processSlotSubTitle(){return this._getSubTitleTemplateWithValue(this.__getSlot("subtitle"))}__processSlotTitleInHeader(){return this._getTitleTemplateWithValue(this.__getSlot("title"))}__processSlotContent(){return this._getContentTemplateWithValue(this.__getSlot("content"))}__processSlotText(){return this._getTextTemplateWithValue(this.__getSlot("text"))}_getTitleTemplateWithValue(e){return(0,i.dy)`<h3 class="vl-spotlight__title">${e}</h3>`}_getSubTitleTemplateWithValue(e){return(0,i.dy)`<p class="vl-spotlight__subtitle">${e}</p>`}_getContentTemplateWithValue(e){return(0,i.dy)` <div class="vl-spotlight__content">${e}</div>`}_getTextTemplateWithValue(e){return(0,i.dy)`<p class="vl-spotlight__text">${e}</p>`}__fallbackIfEmpty(e,t){return e&&e.length>0?t:""}render(){return this.link?(0,i.dy)`<a href="${this.link}" class="${this.__applySpotlightStyling()}">
                <article role="none">
                    ${this.__processHeader()} ${this.__processSlotTitle()} ${this.__processSlotSubTitle()}
                    ${this.__processSlotContent()} ${this.__processSlotText()}
                </article>
            </a>`:(0,i.dy)` <article class="${this.__applySpotlightStyling()}" role="none">
            ${this.__processHeader()} ${this.__processSlotTitle()} ${this.__processSlotSubTitle()}
            ${this.__processSlotContent()} ${this.__processSlotText()}
        </article>`}__applySpotlightStyling(){let e=this.size===n.N.S,t=this.size===n.N.XS,s=this.size===n.N.L;return`vl-spotlight ${this.alt?"vl-spotlight--alt":""} ${t?"vl-spotlight--xs":""}
    ${e?"vl-spotlight--s":""} ${s?"vl-spotlight--l":""}`}__processHeader(){return this.imgSrc?(0,i.dy)` <header role="none" class="vl-spotlight__header">
            <div class="vl-spotlight__image vl-spotlight__image--focus-center-center">
                <img class="vl-spotlight__image__img" src="${this.imgSrc}" alt="${this.imgAlt}" />
            </div>
            <div class="vl-spotlight__title-wrapper">${this.__processSlotTitleInHeader()}</div>
        </header>`:(0,i.dy)``}}c=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,l.Mo)("vl-spotlight")],c)},"./libs/components/src/spotlight/vl-spotlight.model.ts":(e,t,s)=>{"use strict";s.d(t,{N:()=>i});let i={XS:"xs",S:"s",L:"l"}},"./libs/components/src/steps/vl-duration-step.component.ts":(e,t,s)=>{"use strict";s.d(t,{Y:()=>l});var i=s("./libs/common/utilities/src/index.ts");class l extends(0,i.W$)(HTMLElement){constructor(){super(`
      <li class="vl-duration-step"></li>
    `)}connectedCallback(){super.connectedCallback(),this._processSlots()}get template(){return this._element.cloneNode(!0)}_processSlots(){[...this.childNodes].forEach(e=>this._element.append(e.cloneNode(!0)))}}l=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,i.a6)("vl-duration-step")],l)},"./libs/components/src/steps/vl-step.component.ts":(e,t,s)=>{"use strict";s.d(t,{a:()=>r});var i=s("./libs/common/utilities/src/index.ts"),l=s("./libs/components/src/accordion/vl-accordion.component.ts");class r extends(0,i.W$)(HTMLElement){static{(0,i.YV)([l.b])}static get _observedAttributes(){return["type","toggleable"]}static get _observedChildClassAttributes(){return["disabled"]}constructor(){super(`
      <li class="vl-step">
        <div class="vl-step__container">
          <div id="icon" class="vl-step__icon">
            <span slot="identifier"></span>
            <span id="sub-icon" class="vl-step__icon__sub">
              <span slot="identifier-annotation"></span>
            </span>
          </div>
          <div class="vl-step__wrapper">
            <div class="vl-step__header">
              <div class="vl-step__header__titles">
                <h3 id="title" class="vl-step__title">
                  <span slot="title"></span>
                  <span id="title-label">
                    <span slot="title-label"></span>
                  </span>
                  <span id="title-annotation" class="vl-step__title__annotation">
                    <span slot="title-annotation"></span>
                  </span>
                </h3>
                <p id="sub-title" class="vl-step__subtitle">
                  <span slot="sub-title"></span>
                </p>
              </div>
            </div>
            <div class="vl-step__content-wrapper">
              <p id="content" class="vl-step__content">
                <span slot="content"></span>
              </p>
            </div>
          </div>
        </div>
      </li>
    `),this._processSlots()}get template(){this._processSlots();let e=this._element.cloneNode(!0);return this._isToggleable&&(vl.accordion.dress(e),e.querySelector("#content").addEventListener("click",e=>e.stopPropagation())),e}get _iconElement(){return this._shadow.querySelector("#icon")}get _subIconElement(){return this._iconElement.querySelector("#sub-icon")}get _wrapperElement(){return this._shadow.querySelector(".vl-step__wrapper")}get _headerElement(){return this._wrapperElement.querySelector(".vl-step__header")}get _titleElement(){return this._headerElement.querySelector("#title")}get _titleLabelElement(){return this._headerElement.querySelector("#title-label")}get _titleAnnotationElement(){return this._headerElement.querySelector("#title-annotation")}get _subTitleElement(){return this._headerElement.querySelector("#sub-title")}get _contentElement(){return this._shadow.querySelector("#content")}get _classPrefix(){return"vl-step--"}get _isToggleable(){return this.hasAttribute("toggleable")}_getSlot(e){return this._shadow.querySelector(`[slot="${e}"]`)}_getToggleableHeaderHTML(){return`
      <button class="vl-step__header js-vl-accordion__toggle">
        <div class="vl-step__header__titles">
          <h3 id="title" class="vl-step__title">
            <span slot="title"></span>
            <span id="title-label">
              <span slot="title-label"></span>
            </span>
          </h3>
        </div>
        <div class="vl-step__header__info" aria-hidden="true">
          <em class="vl-step__accordion-toggle"></em>
        </div>
      </button>
    `}_typeChangedCallback(e,t){this._changeClass(this._element,e,t,this._classPrefix)}_toggleableChangedCallback(e,t){void 0!=t&&(this._element.classList.add("vl-step--accordion"),this._element.classList.add("js-vl-accordion"),this._headerElement.remove(),this._wrapperElement.insertAdjacentHTML("afterbegin",this._getToggleableHeaderHTML()),this.__processSlot(this._titleElement,"title"),this.__processSlot(this._titleLabelElement,"title-label"))}_processSlots(){this.__processSlot(this._iconElement,"identifier"),this.__processSlot(this._subIconElement,"identifier-annotation"),this.__processSlot(this._titleElement,"title"),this.__processSlot(this._titleLabelElement,"title-label"),this.__processSlot(this._titleAnnotationElement,"title-annotation"),this.__processSlot(this._subTitleElement,"sub-title"),this.__processSlot(this._contentElement,"content")}__processSlot(e,t){let s=this.querySelector(`[slot="${t}"]`);s?this.__replaceSlot(e,s,t):this.__hideSlot(e,this._getSlot(t))}__replaceSlot(e,t,s){e.hidden=!1,e.replaceChild(t.cloneNode(!0),this._getSlot(s))}__hideSlot(e,t){e&&(e.hidden=!0),t&&(t.innerHTML="")}}r=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,i.a6)("vl-step")],r)},"./libs/components/src/steps/vl-steps.component.ts":(e,t,s)=>{"use strict";s.d(t,{N:()=>a});var i=s("./libs/common/utilities/src/index.ts"),l=s("./node_modules/@domg/govflanders-style/component/index.js"),r=s("./node_modules/@domg/govflanders-style/common/index.js"),o=s("./node_modules/lit/index.js");let n=(0,o.iv)`
    #title-label:not([hidden]) {
        display: inline-block;
        margin-left: 3rem;
    }

    .vl-step--accordion.js-vl-accordion--open .vl-step__content-wrapper {
        overflow: inherit;
    }
`;class a extends(0,i.W$)(HTMLElement){static get _observedChildClassAttributes(){return["timeline"]}constructor(){super(`
          <style>
            ${r.YN}
            ${l.vV}
            ${n}
          </style>
          <div class="vl-steps">
            <ul id="steps" class="vl-steps__list"></ul>
          </div>
        `)}connectedCallback(){super.connectedCallback(),this._observer=this.__observeChildElements(()=>this._processSteps()),this._processSteps()}disconnectedCallback(){this._observer.disconnect()}get _stepsElement(){return this._shadow.querySelector("#steps")}get _classPrefix(){return"vl-steps--"}_processSteps(){customElements.whenDefined("vl-step").then(()=>{customElements.whenDefined("vl-duration-step").then(()=>{this._stepsElement.innerHTML="",this.querySelectorAll("vl-step, vl-duration-step").forEach(e=>this._stepsElement.append(e.template))})})}__observeChildElements(e){let t=new MutationObserver(e);return t.observe(this,{childList:!0,attributes:!0,subtree:!0,characterData:!0}),t}}a=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,i.a6)("vl-steps")],a)},"./libs/components/src/template/vl-template.component.ts":(e,t,s)=>{"use strict";var i=s("./libs/common/utilities/src/index.ts"),l=s("./node_modules/@domg/govflanders-style/common/index.js"),r=s("./node_modules/lit/index.js");let o=(0,r.iv)`
    :host {
        position: relative;
    }

    :host([data-vl-v-center]) > div {
        position: absolute;
        height: 100%;
        width: 100%;
    }
    :host([data-vl-v-center]) > div .vl-page {
        top: 50%;
        transform: translate(0, -50%);
    }

    :host([data-vl-v-stretch]) > div {
        position: absolute;
        height: 100%;
        width: 100%;
    }
    :host([data-vl-v-stretch]) > div .vl-page {
        height: 100%;
    }
    :host([data-vl-v-stretch]) > div .vl-page .vl-main-content {
        height: 100%;
    }
    :host([data-vl-v-stretch]) > div .vl-page .vl-main-content ::slotted(*) {
        height: 100%;
    }
`;class n extends(0,i.W$)(HTMLElement){constructor(){super(`
      <style>
        ${l.YN}
        ${o}
        ${l.Oh}
      </style>
      <div>
        <slot name="header"></slot>
        <div class="vl-page">
          <main class="vl-main-content">
            <slot name="main"></slot>
          </main>
        </div>
        <slot name="footer"></slot>
      </div>
    `)}}n=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,i.a6)("vl-template")],n)},"./libs/components/src/textarea/vl-textarea-modal.component.ts":(e,t,s)=>{"use strict";s.d(t,{c:()=>o});var i=s("./libs/common/utilities/src/index.ts"),l=s("./libs/elements/src/index.ts"),r=s("./libs/components/src/modal/vl-modal.component.ts");class o extends(0,i.W$)(HTMLElement){static{(0,i.YV)([l.d7,l.Hs,l.Hd,l.kQ,l.tB,l.ZZ,l.my,r.M])}constructor(){super(`
          <vl-modal id="modal-cl" data-vl-title="Link toevoegen">
            <form is="vl-form" id="link-form" slot="content" data-vl-validate>
              <div is="vl-form-grid" is-stacked>
                <div is="vl-form-column" size="12">
                  <label is="vl-form-label" for="text" data-vl-block>Tekst</label>
                  <input id="text" is="vl-input-field" placeholder="Link" data-vl-block data-required="true" data-vl-error-message="Gelieve een tekst in te vullen" data-vl-error-placeholder="text-error" name="link">
                  <p is="vl-form-validation-message" data-vl-error data-vl-error-id="text-error"></p>
                </div>
                <div is="vl-form-column" data-vl-size="12">
                  <label is="vl-form-label" for="url" data-vl-block>URL</label>
                  <input id="url" is="vl-input-field" placeholder="https://vlaanderen.be" data-vl-block data-required="true" data-vl-error-message="Gelieve een URL in te vullen" data-vl-error-placeholder="url-error" name="url">
                  <p is="vl-form-validation-message" data-vl-error data-vl-error-id="url-error"></p>
                </div>
              </div>
            </form>
            <button is="vl-button" slot="button" type="submit" form="link-form">Bewaar</button>
          </vl-modal>
        `)}connectedCallback(){super.connectedCallback(),this._modal.on("close",()=>setTimeout(()=>this.clear()))}get text(){return this._textInputField.value}set text(e){this._textInputField.value=e}get url(){return this._urlInputField.value}set url(e){this._urlInputField.value=e}focusUrl(){this._urlInputField.setAttribute("autofocus","")}get _textInputField(){return this.shadowRoot.querySelector("input#text")}get _urlInputField(){return this.shadowRoot.querySelector("input#url")}get _form(){return this.shadowRoot.querySelector("form")}get _submitButton(){return this.shadowRoot.querySelector("button")}get _modal(){return this.shadowRoot.querySelector("vl-modal")}open(){this._modal.open()}close(){this._modal.close()}clear(){this._textInputField.value="",this._urlInputField.value="",this._textInputField.removeAttribute("autofocus"),this._urlInputField.removeAttribute("autofocus")}onSubmit(e){this._submitButton.addEventListener("click",e=>e.stopPropagation()),this._form.addEventListener("submit",t=>{t.target.checkValidity()&&(this.close(),e(t))},{once:!0})}}o=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,i.mV)("vl-modal","vl-textarea-modal")],o)},"./libs/components/src/textarea/vl-textarea.element.ts":(e,t,s)=>{"use strict";s.d(t,{f:()=>n});var i=s("./libs/common/utilities/src/index.ts"),l=s("./libs/elements/src/index.ts");s("./node_modules/tinymce/tinymce.js");var r=s("./libs/components/src/textarea/vl-textarea-modal.component.ts");class o{static{(0,i.YV)([r.c])}create(e){return{icon:"link",title:"Link",tooltip:"Link",onSetup:()=>{let t=e.targetElm,s=t.parentElement||t.getRootNode();if(!s.querySelector("vl-textarea-modal")){let e=document.createElement("vl-textarea-modal");s.append(e)}},onAction:()=>{let t=e.targetElm,s=(t.parentElement||t.getRootNode()).querySelector("vl-textarea-modal");customElements.whenDefined("vl-textarea-modal").then(()=>{let t=e.selection.getNode(),i=e.selection.getContent({format:"text"});t&&t.href?(s.text=t.textContent,s.url=t.href,s.onSubmit(()=>{t.text=s.text,t.href=s.url})):(i&&(s.text=i,s.focusUrl()),s.onSubmit(()=>{e.insertContent(`<a target="_blank" href="${s.url}">${s.text}</a>`)})),s.open()})}}}}let n="undo redo | bold italic underline strikethrough";class a extends(0,l.uf)((0,i.W$)(HTMLTextAreaElement)){static get _observedAttributes(){return l.I7._observedAttributes().concat(["error","success"])}static get _observedClassAttributes(){return["disabled","block","error","success","focus","rich","readonly"]}connectedCallback(){this.classList.add("vl-textarea"),this._dressFormValidation(),this.isRich&&this._configureWysiwyg()}disconnectedCallback(){this.observers?.forEach(e=>e?.disconnect()),this.isRich&&this._destroyWysiwyg()}get isRich(){return this.hasAttribute("data-vl-rich")}get isReadonly(){return this.hasAttribute("data-vl-readonly")}get isDisabled(){return this.hasAttribute("data-vl-disabled")}get editor(){return this._editor}get _classPrefix(){return"vl-textarea--"}get _toolbar(){return this.getAttribute("toolbar")}get _wysiwygConfig(){return{target:this,menubar:!1,resize:!0,elementpath:!1,branding:!1,powerpaste_word_import:"clean",powerpaste_html_import:"clean",content_css:"https://cdn.omgeving.vlaanderen.be/domg/govflanders-style/14.1.0/custom/tinymce.css",verify_html:!1,forced_root_block:"p",body_class:"vl-typography",plugins:"hr lists advlist paste",formats:{bold:{inline:"b"},italic:{inline:"i"},underline:{inline:"u"},strikethrough:{inline:"s"}},toolbar:this._toolbar||n,setup:e=>{this._registerVlLinkToolbar(e),this._initWysiwyg(e);let t=new MutationObserver(()=>{let t=e.targetElm;e.setContent(t.value)});this.observers.push(t),t.observe(this,{childList:!0,characterData:!0,subtree:!0}),e.on("init",()=>{this.__disableActiveEditor(this.isDisabled),this.__toggleEditorToolbar(this.isReadonly),this.__toggleEditorReadonly(this.isReadonly||this.isDisabled),this.initialised=!0})}}}_addBlockAttribute(){this.setAttribute("data-vl-block","")}_configureWysiwyg(){this.disabled=!0,this._addBlockAttribute(),tinyMCE.baseURL="https://cdn.omgeving.vlaanderen.be/domg/tinymce/5.10.6";try{tinyMCE.init(this._wysiwygConfig)}catch(e){console.error(e)}}_initWysiwyg(e){this._editor=e,this.focus=()=>e.focus(),e.on("focus",()=>{this.isDisabled||(e.editorContainer.classList.add("focus"),e.getBody()?.classList.add("focus"))}),e.on("blur",()=>{e.editorContainer&&e.editorContainer.classList.remove("focus"),e.getBody&&e.getBody()?.classList.remove("focus"),e.save(),this.dispatchEvent(new Event("change"))})}_destroyWysiwyg(){this._editor&&(this.disabled=!1,this._editor.destroy())}_registerVlLinkToolbar(e){e.ui.registry.addButton("vlLink",new o().create(e))}_errorChangedCallback(e,t){this.__toggleValidationClass(t,"error")}_successChangedCallback(e,t){this.__toggleValidationClass(t,"success")}_richChangedCallback(e,t){null!==t?this.isConnected&&this._configureWysiwyg():this._destroyWysiwyg()}_disabledChangedCallback(e,t){let s=null!==t;this.isRich&&this.initialised&&(this.__toggleEditorReadonly(s),this.__disableActiveEditor(s))}_readonlyChangedCallback(e,t){let s=null!==t;this.__toggleEditorReadonly(s),this.__toggleEditorToolbar(s)}__disableActiveEditor(e){if(this.isRich&&tinyMCE?.activeEditor){let t=tinyMCE?.activeEditor,s="vl-textarea--disabled";e?(t.ui?.disable(),t.getBody()?.classList.add(s)):(t.ui?.enable(),t.getBody()?.classList.remove(s))}}__toggleEditorReadonly(e){tinyMCE?.activeEditor?.getBody()&&(e?tinyMCE.activeEditor?.mode?.set("readonly"):tinyMCE.activeEditor?.mode?.set("design"))}__toggleEditorToolbar(e){tinyMCE&&(e?tinyMCE?.activeEditor?.getContainer().querySelector("div.tox-editor-header")?.classList.add("vl-u-hidden"):tinyMCE?.activeEditor?.getContainer().querySelector("div.tox-editor-header")?.classList.remove("vl-u-hidden"))}__toggleValidationClass(e,t){this.isRich&&(0,i.wA)(()=>this._editor&&this._editor.getContainer()).then(()=>{this._editor?.getContainer()&&(this._toggleClass(this._editor.getContainer(),e,t),this._toggleClass(this._editor.getBody(),e,t))})}constructor(...e){super(...e),this.initialised=!1,this.observers=[]}}a=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,i.$x)([l.I7.ready()],"vl-textarea",{extends:"textarea"})],a)},"./libs/components/src/toaster/vl-toaster.element.ts":(e,t,s)=>{"use strict";s.d(t,{x:()=>l});var i=s("./libs/common/utilities/src/index.ts");s("./node_modules/@govflanders/vl-ui-core/dist/js/core.js"),s("./node_modules/@govflanders/vl-ui-util/dist/js/util.js"),s("./libs/components/src/toaster/vl-toaster.lib.js");class l extends(0,i.W$)(HTMLDivElement){static get _observedAttributes(){return["fadeout"]}static get _observedClassAttributes(){return["top-left","top-right","bottom-left","bottom-right"]}static get _dressedAttributeName(){return"data-vl-toaster-dressed"}connectedCallback(){this.classList.add("vl-toaster"),this._dress()}get _classPrefix(){return"vl-toaster--"}get toasterFadeClass(){return"vl-alert--fade-out"}get _dressed(){return!!this.getAttribute(l._dressedAttributeName)}push(e){setTimeout(()=>{this._element.appendChild(e)})}closeAlert(e){vl.util.addClass(e,this.toasterFadeClass),window.setTimeout(()=>{e.remove()},300)}_fadeoutChangedCallback(e,t){void 0!=t?this._element.setAttribute("data-vl-toaster-fadeout",!0):this._element.removeAttribute("data-vl-toaster-fadeout")}_dress(){this._dressed||vl.toaster.dress(this)}}l=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,i.a6)("vl-toaster",{extends:"div"})],l)},"./libs/components/src/toggle-button/index.ts":(e,t,s)=>{"use strict";s.d(t,{e:()=>i.e});var i=s("./libs/components/src/toggle-button/vl-toggle-button.component.ts");s("./libs/components/src/toggle-button/vl-toggle-button.model.ts")},"./libs/components/src/toggle-button/vl-toggle-button.component.ts":(e,t,s)=>{"use strict";s.d(t,{e:()=>u});var i=s("./libs/common/utilities/src/index.ts"),l=s("./libs/elements/src/index.ts"),r=s("./node_modules/@domg/govflanders-style/common/index.js"),o=s("./node_modules/@domg/govflanders-style/component/index.js"),n=s("./node_modules/lit/index.js"),a=s("./node_modules/lit/decorators.js"),c=s("./node_modules/lit/directives/class-map.js"),d=s("./libs/components/src/toggle-button/vl-toggle-button.model.ts");let h=(0,n.iv)`
    .vl-button--map.vl-button--tertiary {
        background-color: #fff;
    }
    .vl-button--map.vl-button--tertiary:hover,
    .vl-button--map.vl-button--tertiary:active {
        background-color: #fff;
    }
`;class u extends i.fS{static{(0,i.YV)([l.d7,l.Gi,l.yK])}static get properties(){return{icon:{type:String,attribute:"data-vl-icon",reflect:!0},iconPlacement:{type:String,attribute:"data-vl-icon-placement",reflect:!0},textHidden:{type:Boolean,attribute:"data-vl-text-hidden",reflect:!0},error:{type:Boolean,attribute:"data-vl-error",reflect:!0},block:{type:Boolean,attribute:"data-vl-block",reflect:!0},large:{type:Boolean,attribute:"data-vl-large",reflect:!0},wide:{type:Boolean,attribute:"data-vl-wide",reflect:!0},narrow:{type:Boolean,attribute:"data-vl-narrow",reflect:!0},loading:{type:Boolean,attribute:"data-vl-loading",reflect:!0},disabled:{type:Boolean,attribute:"disabled",reflect:!0},_active:{type:Boolean,state:!0},active:{type:Boolean||void 0}}}static get styles(){return[r.YN,o.jn,h,r.PC,o.oQ]}createRenderRoot(){let e=super.createRenderRoot();return e.addEventListener("click",e=>{let{disabled:t}=this;t&&e.stopPropagation()}),e}constructor(){super(),this.icon="",this.iconPlacement="",this.textHidden=!1,this.error=!1,this.block=!1,this.large=!1,this.wide=!1,this.narrow=!1,this.loading=!1,this.disabled=!1,this.isInMap=!1,this._active=!1,this.active=void 0,this.iconPlacement=d.T.AFTER,this.textHidden=!1,this.disabled=!1}_isControlled(){return void 0!==this.active}_fireChange(){this.dispatchEvent(new CustomEvent("change",{detail:{isActive:this._active}}))}updated(e){e.forEach((e,t)=>{switch(t){case"active":this._isControlled()&&(this._active=this.active);break;case"_active":(!this._isControlled()||this._isControlled()&&void 0!==e)&&this._fireChange()}})}_buttonWrap(e){return(0,n.dy)`
            <button
                class=${(0,c.$)({"vl-button--map":this.isInMap})}
                is="vl-button"
                aria-label="toggle-button"
                part="button template"
                ?data-vl-error=${this.error}
                ?data-vl-block=${this.block}
                ?data-vl-large=${this.large}
                ?data-vl-wide=${this.wide}
                ?data-vl-narrow=${this.narrow}
                ?data-vl-loading=${this.loading}
                ?disabled=${this.disabled}
                ?data-vl-tertiary=${!this._active}
                @click=${()=>{this._isControlled()||(this._active=!this._active)}}
            >
                ${e}
            </button>
        `}_iconTemplate(){return this.textHidden?(0,n.dy)`${this._buttonWrap((0,n.dy)`<span is="vl-icon" data-vl-icon=${this.icon}></span>
                    <span is="vl-text" data-vl-visually-hidden><slot></slot></span>`)}`:this.iconPlacement===d.T.BEFORE?(0,n.dy)`${this._buttonWrap((0,n.dy)`<span is="vl-icon" data-vl-icon=${this.icon} data-vl-before></span> <slot></slot>`)}`:(0,n.dy)`${this._buttonWrap((0,n.dy)` <slot></slot><span is="vl-icon" data-vl-icon=${this.icon} data-vl-after></span>`)}`}render(){return this.icon?this._iconTemplate():(0,n.dy)`${this._buttonWrap((0,n.dy)` <slot></slot>`)}`}}u=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,a.Mo)("vl-toggle-button")],u)},"./libs/components/src/toggle-button/vl-toggle-button.model.ts":(e,t,s)=>{"use strict";s.d(t,{T:()=>i});let i={BEFORE:"before",AFTER:"after"}},"./libs/components/src/wizard/vl-wizard-pane.component.ts":(e,t,s)=>{"use strict";s.d(t,{F:()=>o});var i=s("./libs/common/utilities/src/index.ts"),l=s("./node_modules/lit/index.js"),r=s("./node_modules/lit/decorators.js");class o extends i.fS{static get properties(){return{isActive:{type:Boolean},name:{type:String,attribute:"data-vl-name",reflect:!0}}}updated(e){[...e].forEach(([e])=>"name"===e&&this.parentElement?.onslotchange?.(e))}render(){return(0,l.dy)`${this.isActive?(0,l.dy)` <slot></slot>`:l.Ld}`}constructor(...e){super(...e),this.isActive=!1,this.name=""}}o=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,r.Mo)("vl-wizard-pane")],o)},"./libs/components/src/wizard/vl-wizard.component.ts":(e,t,s)=>{"use strict";var i=s("./libs/common/utilities/src/index.ts"),l=s("./node_modules/@domg/govflanders-style/common/index.js"),r=s("./node_modules/@domg/govflanders-style/component/index.js");s("./node_modules/@govflanders/vl-ui-util/dist/js/util.js");var o=s("./node_modules/lit/index.js"),n=s("./node_modules/lit/decorators.js"),a=s("./libs/components/src/progress-bar/vl-progress-bar.component.ts"),c=s("./libs/components/src/wizard/vl-wizard-pane.component.ts");class d extends i.fS{static{(0,i.YV)([a.f,c.F])}static get styles(){return[l.YN,r.UJ]}static get properties(){return{panes:{type:Array},activeStep:{type:Number,attribute:"data-vl-active-step",reflect:!0},hideLabels:{type:Boolean,attribute:"data-vl-hide-labels"}}}constructor(){super(),this.panes=[],this.activeStep=1,this.hideLabels=!1}onSlotChange(){this.panes=[...this.querySelectorAll("vl-wizard-pane")]}updated(){this.panes.forEach((e,t)=>{e.isActive=this.activeStep===t+1})}render(){return(0,o.dy)`
            <section class="vl-wizard" data-vl-wizard>
                <header class="vl-wizard__heading" role="none">
                    <slot name="title"></slot>
                    <slot name="header"></slot>
                </header>
                <vl-progress-bar
                    data-vl-active-step=${this.activeStep}
                    ?data-vl-show-labels=${!this.hideLabels}
                    .steps=${this.panes.map(e=>e.name)}
                ></vl-progress-bar>
                <div class="vl-wizard__panes">
                    <section class="vl-wizard__pane">
                        <slot @slotchange=${this.onSlotChange}></slot>
                    </section>
                </div>
            </section>
        `}}d=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,n.Mo)("vl-wizard")],d)},"./libs/components/src/toaster/vl-toaster.lib.js":function(e){var t;this||window,t=function(){var e="".concat(vl.ns,"toaster"),t="".concat(vl.ns,"alert"),s="".concat(t,"--fade-out"),i="".concat(t,"__close"),l="data-".concat(vl.ns),r="".concat(l,"toaster"),o="".concat(r,"-dressed"),n="".concat(r,"-fadeout"),a=function(e){vl.util.addClass(e,s),window.setTimeout(function(){vl.util.removeClass(e,s)},300)},c=function(e){vl.util.addClass(e,s),window.setTimeout(function(){e.remove()},300)},d=function(e){vl.util.each(e,function(e){e.addEventListener("click",function(e){c(e.currentTarget.parentElement)})})},h=function(e){var t=e[0].target,s=t.firstElementChild,l=t.lastElementChild;e[0].addedNodes.length>0&&(a(l),d(l.shadowRoot?l.shadowRoot.querySelectorAll(".".concat(i)):l.querySelectorAll(".".concat(i))),"true"===t.getAttribute(n)&&window.setTimeout(function(){c(l)},5e3)),t.childElementCount>5&&c(s)},u=function(){var t;function s(){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,s)}return t=[{key:"dress",value:function(e){e.setAttribute(o,!0);var t=new window.MutationObserver(h),s=e.shadowRoot?e.shadowRoot.querySelectorAll(".".concat(i)):e.querySelectorAll(".".concat(i));t.observe(e,{attributes:!0,childList:!0}),d(s)}},{key:"dressAll",value:function(){var t=this,s=document.querySelectorAll(".".concat(e,":not([").concat(o,"]):not([data-").concat(vl.ns,'js-dress="false"]),\n      [').concat(r,"]:not([").concat(o,"]):not([data-").concat(vl.ns,'js-dress="false"])'));vl.util.each(s,function(e){t.dress(e)})}}],function(e,t){for(var s=0;s<t.length;s++){var i=t[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(s.prototype,t),s}();return"toaster"in vl||(vl.toaster=new u,vl.toaster.dressAll()),u},e.exports=t()}}]);