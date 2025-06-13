"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[208],{"../../libs/components/src/side-sheet/vl-side-sheet.component.ts":(t,e,o)=>{o.d(e,{V:()=>h});var i=o("../../libs/common/utilities/src/index.ts"),s=o("../../libs/components/src/toggle-button/index.ts"),l=o("../../libs/elements/src/index.ts"),n=o("../../node_modules/swipe-detect/dist/index.js"),a=o("../../node_modules/lit/index.js");let r=(0,a.AH)`
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
        /* 
            UIG-3004: z-index op dit niveau verwijderd, de z-index staat ook al op de host.
            Zoek andere oplossing indien dit voor problemen zorgt.
        */
        /* z-index: 2; */
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
`,d=[...l.hF,r];class h extends(0,i.H3)(HTMLElement){static{(0,i.gy)([l.zY,l.Q1,l.I5,s.U])}static get _observedAttributes(){return["enable-swipe","toggle-text","tooltip-text","custom-icon","hide-toggle-button","icon-position","custom-size","open"]}static get _observedClassAttributes(){return["left","right","absolute"]}constructor(t=""){super(`
          <style>
            ${d}
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
        `)}connectedCallback(){super.connectedCallback(),this._toggle=()=>this.toggle(),this._toggleButton.addEventListener("click",this._toggle),this._toggleButton.active=!1,this.updateToggleText(this.toggleText),"after"!==this.iconPlacement?this._toggleButton.setAttribute("data-vl-icon-placement","before"):this._toggleButton.setAttribute("data-vl-icon-placement","after")}disconnectedCallback(){this._toggleButton.removeEventListener("click",this._toggle)}get isOpen(){return this.hasAttribute("open")}get isLeft(){return this.hasAttribute("left")}get toggleText(){return this.getAttribute("toggle-text")}get hideToggleButton(){return this.getAttribute("hide-toggle-button")}get customIcon(){return this.getAttribute("data-vl-custom-icon")}get iconPlacement(){return this.getAttribute("data-vl-icon-placement")}get _classPrefix(){return"vl-side-sheet--"}get _toggleButton(){return this._shadow.querySelector(".vl-side-sheet__toggle")}get _toggleButtonTextElement(){return this._shadow.querySelector("#vl-side-sheet-toggle-text")}get _sheetElement(){return this._shadow.querySelector("#vl-side-sheet")}get _regionElement(){return this._sheetElement.querySelector('[is="vl-region"]')}get _backdropElement(){return this._shadow.querySelector("#vl-side-sheet-backdrop")}get _slotElement(){return this._shadow.querySelector("slot")}toggle(){this.isOpen?this.close():this.open()}open(){this.setAttribute("data-vl-open","")}_handleOnOpen(){let t;this._toggleButton.setAttribute("aria-expanded","true"),t=this.customIcon?this.customIcon:this.isLeft?"nav-left":"nav-right",this._toggleButton.setAttribute("data-vl-icon",t)}close(){this.removeAttribute("data-vl-open"),this._handleOnClose()}_handleOnClose(){let t;this._toggleButton.setAttribute("aria-expanded","false"),t=this.customIcon?this.customIcon:this.isLeft?"nav-right":"nav-left",this._toggleButton.setAttribute("data-vl-icon",t),this._onClose&&this._onClose()}onClose(t){this._onClose=t}_enableSwipeChangedCallback(t,e){null!==e?(0,n.A)(this._sheetElement,t=>{(this.isLeft&&"left"===t||!this.isLeft&&"right"===t)&&this.close()},50):n.A.disable()}_absoluteChangedCallback(t,e){void 0!=e&&this._regionElement&&(this._sheetElement.append(this._slotElement),this._regionElement.remove())}_leftChangedCallback(t,e){this.customIcon||this._openChangedCallback()}_openChangedCallback(){this.isOpen?this._handleOnOpen():this._handleOnClose()}updateToggleText(t){t&&""!==t?this._toggleButton.removeAttribute("data-vl-text-hidden"):this._toggleButton.setAttribute("data-vl-text-hidden",""),this._toggleButtonTextElement.textContent=t}_toggleTextChangedCallback(t,e){this.updateToggleText(e)}_tooltipTextChangedCallback(t,e){e?this._toggleButton?.setAttribute("title",e):this._toggleButton?.removeAttribute("title")}_hideToggleButtonChangedCallback(t,e){null===e?this._toggleButton.classList.remove("vl-u-visually-hidden"):this._toggleButton.classList.add("vl-u-visually-hidden")}_customIconChangedCallback(t,e){e&&this._toggleButton.setAttribute("data-vl-icon",e)}}h=function(t,e,o,i){var s,l=arguments.length,n=l<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(l<3?s(n):l>3?s(e,o,n):s(e,o))||n);return l>3&&n&&Object.defineProperty(e,o,n),n}([(0,i.M1)("vl-side-sheet")],h)},"../../libs/components/src/toggle-button/index.ts":(t,e,o)=>{o.d(e,{U:()=>i.U});var i=o("../../libs/components/src/toggle-button/vl-toggle-button.component.ts");o("../../libs/components/src/toggle-button/vl-toggle-button.model.ts")},"../../libs/components/src/toggle-button/vl-toggle-button.component.ts":(t,e,o)=>{o.d(e,{U:()=>g});var i=o("../../libs/common/utilities/src/index.ts"),s=o("../../libs/elements/src/index.ts"),l=o("../../node_modules/@domg/govflanders-style/common/index.js"),n=o("../../node_modules/@domg/govflanders-style/component/index.js"),a=o("../../node_modules/lit/index.js"),r=o("../../node_modules/lit/decorators.js"),d=o("../../node_modules/lit/directives/class-map.js"),h=o("../../libs/components/src/toggle-button/vl-toggle-button.model.ts");let c=(0,a.AH)`
    .vl-button--map.vl-button--tertiary {
        background-color: #fff;
    }
    .vl-button--map.vl-button--tertiary:hover,
    .vl-button--map.vl-button--tertiary:active {
        background-color: #fff;
    }
`;class g extends i.jW{static{(0,i.gy)([s.lC,s.yF,s.I5])}static get properties(){return{icon:{type:String,attribute:"data-vl-icon",reflect:!0},iconPlacement:{type:String,attribute:"data-vl-icon-placement",reflect:!0},textHidden:{type:Boolean,attribute:"data-vl-text-hidden",reflect:!0},error:{type:Boolean,attribute:"data-vl-error",reflect:!0},block:{type:Boolean,attribute:"data-vl-block",reflect:!0},large:{type:Boolean,attribute:"data-vl-large",reflect:!0},wide:{type:Boolean,attribute:"data-vl-wide",reflect:!0},narrow:{type:Boolean,attribute:"data-vl-narrow",reflect:!0},loading:{type:Boolean,attribute:"data-vl-loading",reflect:!0},disabled:{type:Boolean,attribute:"disabled",reflect:!0},_active:{type:Boolean,state:!0},active:{type:Boolean||void 0}}}static get styles(){return[l.h8,n.i9,c,l.Wq,n.py]}createRenderRoot(){let t=super.createRenderRoot();return t.addEventListener("click",t=>{let{disabled:e}=this;e&&t.stopPropagation()}),t}constructor(){super(),this.icon="",this.iconPlacement="",this.textHidden=!1,this.error=!1,this.block=!1,this.large=!1,this.wide=!1,this.narrow=!1,this.loading=!1,this.disabled=!1,this.isInMap=!1,this._active=!1,this.active=void 0,this.iconPlacement=h.a.AFTER,this.textHidden=!1,this.disabled=!1}_isControlled(){return void 0!==this.active}_fireChange(){this.dispatchEvent(new CustomEvent("change",{detail:{isActive:this._active}}))}updated(t){t.forEach((t,e)=>{switch(e){case"active":this._isControlled()&&(this._active=this.active);break;case"_active":(!this._isControlled()||this._isControlled()&&void 0!==t)&&this._fireChange()}})}_buttonWrap(t){return(0,a.qy)`
            <button
                class=${(0,d.H)({"vl-button--map":this.isInMap})}
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
                ${t}
            </button>
        `}_iconTemplate(){return this.textHidden?(0,a.qy)`${this._buttonWrap((0,a.qy)`<span is="vl-icon" data-vl-icon=${this.icon}></span>
                    <span is="vl-text" data-vl-visually-hidden><slot></slot></span>`)}`:this.iconPlacement===h.a.BEFORE?(0,a.qy)`${this._buttonWrap((0,a.qy)`<span is="vl-icon" data-vl-icon=${this.icon} data-vl-before></span> <slot></slot>`)}`:(0,a.qy)`${this._buttonWrap((0,a.qy)` <slot></slot><span is="vl-icon" data-vl-icon=${this.icon} data-vl-after></span>`)}`}render(){return this.icon?this._iconTemplate():(0,a.qy)`${this._buttonWrap((0,a.qy)` <slot></slot>`)}`}}g=function(t,e,o,i){var s,l=arguments.length,n=l<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(l<3?s(n):l>3?s(e,o,n):s(e,o))||n);return l>3&&n&&Object.defineProperty(e,o,n),n}([(0,r.EM)("vl-toggle-button")],g)},"../../libs/components/src/toggle-button/vl-toggle-button.model.ts":(t,e,o)=>{o.d(e,{a:()=>i});let i={BEFORE:"before",AFTER:"after"}}}]);