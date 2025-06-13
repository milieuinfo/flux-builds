"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[7494],{"./libs/components/src/accordion/vl-accordion.component.ts":(e,t,o)=>{o.d(t,{b:()=>d});var i=o("./libs/common/utilities/src/index.ts"),n=o("./node_modules/@domg/govflanders-style/component/index.js"),s=o("./node_modules/@domg/govflanders-style/common/index.js"),r=o("./node_modules/lit/index.js");let l=(0,r.iv)`
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
`;o("./node_modules/@govflanders/vl-ui-util/dist/js/util.js"),o("./node_modules/@govflanders/vl-ui-accordion/dist/js/accordion.js"),o("./node_modules/reflect-metadata/Reflect.js");class d extends(0,i.W$)(HTMLElement){static get _observedAttributes(){return["toggle-text","open-toggle-text","close-toggle-text","content-padding"]}static get _observedClassAttributes(){return["bold","disabled"]}get _classPrefix(){return"vl-accordion--"}constructor(){super(`
          <style>
           ${s.YN}
           ${n.jn}
           ${n.oQ}
           ${n.RP}
           ${n.ob}
           ${n.R1}
           ${l}
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
        `)}connectedCallback(){super.connectedCallback(),this.dress(),this._hasTitleSlot()&&this._propagateTitleSlotClickToAccordion(),this.hasAttribute("icon")&&(this._addIconElement(),this._accordionElement.classList.add("vl-accordion--has-icon")),this.hasAttribute("default-open")&&this.open(),this._buttonElement?.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("vl-on-toggle",{detail:{open:this._isOpen}}))})}_propagateTitleSlotClickToAccordion(){this._titleElement.addEventListener("click",e=>{e.stopPropagation(),this._buttonElement.click()})}_addIconElement(){let e=this.getAttribute("icon"),t=document.createElement("i");t.classList.add("vl-accordion__icon","vl-link__icon","vl-link__icon--before","vl-toggle__icon","vl-vi",`vl-vi-${e}`),t.setAttribute("aria-hidden","true"),this._buttonElement?.prepend(t)}_hasTitleSlot(){return this._titleElement.assignedElements().length>0}get _accordionElement(){return this._element.querySelector("[data-vl-accordion]")}get _buttonElement(){return this._element.querySelector("button")}get _titleElement(){return this._buttonElement.querySelector('slot[name="title"]')}get _openToggleTextAttribute(){return this.getAttribute("open-toggle-text")}get _closeToggleTextAttribute(){return this.getAttribute("close-toggle-text")}get _dressedAttribute(){return this.getAttribute("accordion-dressed")}get _isDressed(){return!!this._dressedAttribute}get _isOpen(){return this._accordionElement.classList.contains("js-vl-accordion--open")}dress(){this._isDressed||vl.accordion.dress(this._buttonElement)}open(){vl.accordion.open(this._accordionElement)}close(){this._isOpen&&this.toggle()}toggle(){vl.accordion.toggle(this._accordionElement)}_toggleTextChangedCallback(e,t){this._titleElement.textContent=t}_openToggleTextChangedCallback(e,t){this._titleElement.classList.add("js-vl-accordion__toggle__text"),this._titleElement.setAttribute("data-vl-accordion-open-text",t)}_closeToggleTextChangedCallback(e,t){this._titleElement.classList.add("js-vl-accordion__toggle__text"),this._titleElement.setAttribute("data-vl-accordion-close-text",t)}_contentPaddingChangedCallback(e,t){let o=i.RE[t],n=this._element.querySelector(".vl-accordion__panel");o?n.style.padding=o:n.style.removeProperty("padding")}_disabledChangedCallback(e,t){void 0!=t?this._buttonElement?.setAttribute("disabled",""):this._buttonElement?.removeAttribute("disabled")}}d=function(e,t,o,i){var n,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(r=(s<3?n(r):s>3?n(t,o,r):n(t,o))||r);return s>3&&r&&Object.defineProperty(t,o,r),r}([(0,i.a6)("vl-accordion")],d)},"./libs/components/src/popover/index.ts":(e,t,o)=>{o.d(t,{Pr:()=>n.P,m5:()=>i.m});var i=o("./libs/components/src/popover/vl-popover.component.ts");o("./libs/components/src/popover/vl-popover-action.component.ts");var n=o("./libs/components/src/popover/vl-popover-action-list.component.ts")},"./libs/components/src/popover/vl-popover-action-list.component.ts":(e,t,o)=>{o.d(t,{P:()=>c});var i=o("./node_modules/lit/index.js"),n=o("./libs/common/utilities/src/index.ts"),s=o("./node_modules/@domg/govflanders-style/common/index.js"),r=o("./libs/elements/src/index.ts"),l=o("./node_modules/lit/decorators.js");let d=(0,i.iv)`
    :host {
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 5px;
    }
`;class c extends n.fS{static get styles(){return[s.YN,r.CX,d]}render(){return(0,i.dy)` <slot></slot> `}}c=function(e,t,o,i){var n,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(r=(s<3?n(r):s>3?n(t,o,r):n(t,o))||r);return s>3&&r&&Object.defineProperty(t,o,r),r}([(0,l.Mo)("vl-popover-action-list")],c)},"./libs/components/src/popover/vl-popover-action.component.ts":(e,t,o)=>{o.d(t,{z:()=>c});var i=o("./node_modules/lit/index.js"),n=o("./libs/common/utilities/src/index.ts"),s=o("./node_modules/@domg/govflanders-style/common/index.js"),r=o("./libs/elements/src/index.ts"),l=o("./node_modules/lit/decorators.js");let d=(0,i.iv)`
    :host {
        display: flex;
        align-items: center;
        gap: 1rem;
        cursor: pointer;
        color: #0055cc;
        font-weight: 500;
        font-size: 16px;
    }

    :host(:hover) {
        text-decoration: underline;
    }

    :host(:focus, :focus-within) {
        box-shadow: none;
        outline: 3px solid rgba(0, 85, 204, 0.65);
        outline-offset: 2px;
    }
`;class c extends n.fS{static get styles(){return[s.YN,r.CX,d]}static get properties(){return{icon:{type:String,attribute:"icon",reflect:!0},action:{type:String,attribute:"action"}}}render(){return(0,i.dy)`
            ${this.icon&&""!==this.icon?(0,i.dy)`<span is="vl-icon" data-vl-icon=${this.icon}></span>`:i.Ld}
            <slot></slot>
        `}constructor(...e){super(...e),this.icon=""}}c=function(e,t,o,i){var n,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(r=(s<3?n(r):s>3?n(t,o,r):n(t,o))||r);return s>3&&r&&Object.defineProperty(t,o,r),r}([(0,l.Mo)("vl-popover-action")],c)},"./libs/components/src/popover/vl-popover.component.ts":(e,t,o)=>{o.d(t,{m:()=>m});var i=o("./libs/common/utilities/src/index.ts"),n=o("./libs/elements/src/index.ts"),s=o("./node_modules/@domg/govflanders-style/common/index.js"),r=o("./node_modules/lit/index.js"),l=o("./node_modules/lit/decorators.js"),d=o("./node_modules/lit/directives/class-map.js"),c=o("./node_modules/composed-offset-position/dist/composed-offset-position.browser.min.mjs"),a=o("./node_modules/@floating-ui/core/dist/floating-ui.core.mjs"),h=o("./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs");class p{constructor(e,t){this.hoverTimeout=0,this.handleClick=()=>{this.host.toggle()},this.handleMouseOver=()=>{clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.host.show(),this.options.showDelay)},this.handleMouseOut=()=>{clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.host.hide(),this.options.hideDelay)},this.handleFocusIn=()=>{this.host.show()},this.handleFocusOut=()=>{this.host.hide()},this.handleClickOutside=e=>{let t=e.target;this.host.contains(t)||this.getReferenceElement()?.contains(t)||0!==e.button||this.host.hide()},this.handleKeyDown=e=>{this.host.open&&"Escape"===e.key&&(e.stopPropagation(),this.host.hide())},this.handleResize=()=>{this.host.open&&this.host.hide()},this.setOptions(t),this.host=e,this.host.addController(this)}hostConnected(){this.addEventListeners()}hostDisconnected(){this.removeEventListeners()}getReferenceElement(){let e=`#${this.options.reference}`,t=this.host.getRootNode();return document.querySelector(e)||t.querySelector(e)||(console.warn(this.host.tagName," could not find reference element with id: #",e),null)}getArrowElement(){return this.host.shadowRoot.querySelector("i#popover-arrow")}buildMiddlewares(){return[(0,a.cv)(this.options.distance),(0,a.RR)(),(0,a.uY)(),(0,a.x7)({element:this.getArrowElement(),padding:8})]}async updatePosition(){if(!this.getReferenceElement)return;let{x:e,y:t,strategy:o,placement:i,middlewareData:n}=await (0,h.oo)(this.getReferenceElement(),this.host,{placement:this.options.placement,middleware:this.buildMiddlewares(),platform:{...h.Jv,getOffsetParent:e=>h.Jv.getOffsetParent(e,c.y8)}});Object.assign(this.host.style,{position:o,left:`${e}px`,top:`${t}px`});let s={top:"bottom",right:"left",bottom:"top",left:"right"}[i.split("-")[0]];if(n.arrow&&this.getArrowElement()){let{x:e,y:t}=n.arrow;Object.assign(this.getArrowElement().style,{left:null!=e?`${e}px`:"",top:null!=t?`${t}px`:"",[s]:`${-this.getArrowElement().offsetWidth/2}px`})}}setOptions(e){this.options=e}addEventListeners(){let e=this.getReferenceElement();e?.addEventListener("keydown",this.handleKeyDown),this.hasTrigger("click")&&(e?.addEventListener("click",this.handleClick),document.addEventListener("click",this.handleClickOutside,!0),this.options.hideOnClick&&this.host.addEventListener("click",this.host.hide)),this.hasTrigger("hover")&&(e?.addEventListener("mouseover",this.handleMouseOver),e?.addEventListener("mouseout",this.handleMouseOut)),this.hasTrigger("focus")&&(e?.addEventListener("focusin",this.handleFocusIn,!0),e?.addEventListener("focusout",this.handleFocusOut,!0)),window.addEventListener("resize",this.handleResize)}removeEventListeners(){let e=this.getReferenceElement();e?.removeEventListener("keydown",this.handleKeyDown),this.hasTrigger("click")&&(e?.removeEventListener("click",this.handleClick),document.removeEventListener("click",this.handleClickOutside,!0),this.host.removeEventListener("click",this.host.hide)),this.hasTrigger("hover")&&(e?.removeEventListener("mouseover",this.handleMouseOver),e?.removeEventListener("mouseout",this.handleMouseOut)),this.hasTrigger("focus")&&(e?.removeEventListener("focusin",this.handleFocusIn,!0),e?.removeEventListener("focusout",this.handleFocusOut,!0)),window.removeEventListener("resize",this.handleResize)}hasTrigger(e){return this.options.trigger.split(" ").includes(e)}}var u=o("./libs/components/src/popover/vl-popover-action-list.component.ts"),v=o("./libs/components/src/popover/vl-popover-action.component.ts");let g=(0,r.iv)`
    :host {
        position: absolute;
        width: max-content;
        top: 0;
        left: 0;
        z-index: 10010;
    }

    i#popover-arrow {
        position: absolute;
        display: block;
        width: 10px;
        height: 10px;
        background-color: #fff;
        z-index: -1;
        pointer-events: none;
        transform: rotate(45deg);
    }

    .popover-content {
        /* combinatie van 3 drop-shadows:
          - de eerste is de styling voor schaduw (deze weglaten als je geen schaduw wilt)
          - de 2e & 3e is de styling voor border (deze weglaten als je geen border wilt)
        */
        filter: drop-shadow(rgba(0, 0, 0, 0.1) 0px 0px 2.1rem) drop-shadow(rgb(207, 213, 221) -1px -1px 1px)
            drop-shadow(rgb(207, 213, 221) 1px 1px 1px);
        will-change: filter;
        background-color: #fff;
        padding: 1rem;
    }

    .padding-none {
        padding: 0;
    }
    .padding-small {
        padding: 1rem;
    }
    .padding-medium {
        padding: 1.5rem;
    }
    .padding-large {
        padding: 2rem;
    }
`;class m extends i.fS{static{(0,i.YV)([v.z,u.P])}static get styles(){return[s.YN,n.CX,g]}static get properties(){return{for:{type:String,attribute:"for",reflect:!0},contentPadding:{type:String,attribute:"content-padding",reflect:!0},open:{type:Boolean,attribute:"open",reflect:!0},trigger:{type:String,attribute:"trigger",reflect:!0},placement:{type:String,attribute:"placement",reflect:!0},distance:{type:Number,attribute:"distance",reflect:!0},hideArrow:{type:Boolean,attribute:"hide-arrow",reflect:!0},hideOnClick:{type:Boolean,attribute:"hide-on-click",reflect:!0}}}firstUpdated(){this.hidden=!this.open,this.popup=new p(this,this.popupOptions()),this.open&&this.popup.updatePosition()}render(){let e={"popover-content":!0,[`padding-${this.contentPadding}`]:!0};return(0,r.dy)`
            <div class=${(0,d.$)(e)}>
                <slot role="content"></slot>
                ${this.hideArrow?null:(0,r.dy)`<i id="popover-arrow" role="presentation"></i>`}
            </div>
        `}updated(e){e.has("open")?this.handleOpenChange():(this.popup.setOptions(this.popupOptions()),this.popup.updatePosition())}handleOpenChange(){this.open?(this.popup.updatePosition(),this.hidden=!1):this.hidden=!0,this.popup.getReferenceElement()?.setAttribute("aria-expanded",this.open?"true":"false")}toggle(){this.open?this.hide():this.show()}popupOptions(){return{reference:this.for,trigger:this.trigger,distance:this.distance,placement:this.placement,showDelay:0,hideDelay:0,hideOnClick:this.hideOnClick}}constructor(...e){super(...e),this.for="",this.trigger="click",this.placement="bottom",this.distance=10,this.open=!1,this.hideArrow=!1,this.contentPadding="small",this.hideOnClick=!1,this.show=()=>{this.open=!0},this.hide=()=>{this.open=!1}}}m=function(e,t,o,i){var n,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(r=(s<3?n(r):s>3?n(t,o,r):n(t,o))||r);return s>3&&r&&Object.defineProperty(t,o,r),r}([(0,l.Mo)("vl-popover")],m)}}]);