"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[2884],{"./libs/components/src/popover/vl-popover-action-list.component.ts":(e,t,s)=>{s.d(t,{P:()=>a});var o=s("./node_modules/lit/index.js"),i=s("./libs/common/utilities/src/index.ts"),n=s("./node_modules/@domg/govflanders-style/common/index.js"),r=s("./libs/elements/src/index.ts"),l=s("./node_modules/lit/decorators.js");let d=(0,o.iv)`
    :host {
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 5px;
    }
`;class a extends i.fS{static get styles(){return[n.YN,r.CX,d]}render(){return(0,o.dy)` <slot></slot> `}}a=function(e,t,s,o){var i,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,s,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(r=(n<3?i(r):n>3?i(t,s,r):i(t,s))||r);return n>3&&r&&Object.defineProperty(t,s,r),r}([(0,l.Mo)("vl-popover-action-list")],a)},"./libs/components/src/popover/vl-popover-action.component.ts":(e,t,s)=>{s.d(t,{z:()=>a});var o=s("./node_modules/lit/index.js"),i=s("./libs/common/utilities/src/index.ts"),n=s("./node_modules/@domg/govflanders-style/common/index.js"),r=s("./libs/elements/src/index.ts"),l=s("./node_modules/lit/decorators.js");let d=(0,o.iv)`
    :host {
        display: flex;
        align-items: center;
        gap: 1rem;
        cursor: pointer;
        color: #0055cc;
        font-weight: 500;
        font-size: 16px;
        padding-left: 0.7rem;
        padding-right: 0.7rem;
    }

    :host(:hover) {
        text-decoration: underline;
    }

    :host(:focus, :focus-within) {
        box-shadow: none;
        outline: 3px solid rgba(0, 85, 204, 0.65);
        outline-offset: 2px;
    }

    :host([selected]) {
        border-left: 0.3rem solid #0055cc;
        padding-left: 0.4rem;
    }
`;class a extends i.fS{static get styles(){return[n.YN,r.CX,d]}static get properties(){return{icon:{type:String,reflect:!0},action:{type:String},selected:{type:Boolean}}}render(){return(0,o.dy)`
            ${this.icon&&""!==this.icon?(0,o.dy)`<span is="vl-icon" data-vl-icon=${this.icon}></span>`:o.Ld}
            <slot></slot>
        `}updated(e){e.has("selected")&&(this.selected?this.setAttribute("aria-selected","true"):this.removeAttribute("aria-selected"))}constructor(...e){super(...e),this.icon="",this.selected=!1}}a=function(e,t,s,o){var i,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,s,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(r=(n<3?i(r):n>3?i(t,s,r):i(t,s))||r);return n>3&&r&&Object.defineProperty(t,s,r),r}([(0,l.Mo)("vl-popover-action")],a)},"./libs/components/src/popover/vl-popover.component.ts":(e,t,s)=>{s.d(t,{m:()=>v});var o=s("./libs/common/utilities/src/index.ts"),i=s("./libs/elements/src/index.ts"),n=s("./node_modules/@domg/govflanders-style/common/index.js"),r=s("./node_modules/lit/index.js"),l=s("./node_modules/lit/decorators.js"),d=s("./node_modules/lit/directives/class-map.js"),a=s("./node_modules/composed-offset-position/dist/composed-offset-position.browser.min.mjs"),c=s("./node_modules/@floating-ui/core/dist/floating-ui.core.mjs"),h=s("./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs");class p{constructor(e,t){this.hoverTimeout=0,this.handleClick=()=>{this.host.toggle()},this.handleMouseOver=()=>{clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.host.show(),this.options.showDelay)},this.handleMouseOut=()=>{clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.host.hide(),this.options.hideDelay)},this.handleFocusIn=()=>{this.host.show()},this.handleFocusOut=()=>{this.host.hide()},this.handleClickOutside=e=>{let t=e.target;this.host.contains(t)||this.getReferenceElement()?.contains(t)||0!==e.button||this.host.hide()},this.handleKeyDown=e=>{this.host.open&&"Escape"===e.key&&(e.stopPropagation(),this.host.hide())},this.handleResize=()=>{this.host.open&&this.host.hide()},this.setOptions(t),this.host=e,this.host.addController(this)}hostConnected(){this.addEventListeners()}hostDisconnected(){this.removeEventListeners()}getReferenceElement(){let e=`#${this.options.reference}`,t=this.host.getRootNode();return document.querySelector(e)||t.querySelector(e)||null}getArrowElement(){return this.host.shadowRoot.querySelector("i#popover-arrow")}buildMiddlewares(){return[(0,c.cv)(this.options.distance),(0,h.RR)(),(0,h.uY)(),(0,h.x7)({element:this.getArrowElement(),padding:8})]}async updatePosition(){if(!this.getReferenceElement){console.warn(this.host.tagName," could not find reference element with id: #",this.options?.reference);return}let{x:e,y:t,strategy:s,placement:o,middlewareData:i}=await (0,h.oo)(this.getReferenceElement(),this.host,{placement:this.options.placement,middleware:this.buildMiddlewares(),platform:{...h.Jv,getOffsetParent:e=>h.Jv.getOffsetParent(e,a.y8)}});Object.assign(this.host.style,{position:s,left:`${e}px`,top:`${t}px`});let n={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(i.arrow&&this.getArrowElement()){let{x:e,y:t}=i.arrow;Object.assign(this.getArrowElement().style,{left:null!=e?`${e}px`:"",top:null!=t?`${t}px`:"",[n]:`${-this.getArrowElement().offsetWidth/2}px`})}}setOptions(e){this.options=e}addEventListeners(){let e=this.getReferenceElement();e?.addEventListener("keydown",this.handleKeyDown),this.hasTrigger("click")&&(e?.addEventListener("click",this.handleClick),document.addEventListener("click",this.handleClickOutside,!0),this.options.hideOnClick&&this.host.addEventListener("click",this.host.hide)),this.hasTrigger("hover")&&(e?.addEventListener("mouseover",this.handleMouseOver),e?.addEventListener("mouseout",this.handleMouseOut)),this.hasTrigger("focus")&&(e?.addEventListener("focusin",this.handleFocusIn,!0),e?.addEventListener("focusout",this.handleFocusOut,!0)),window.addEventListener("resize",this.handleResize)}removeEventListeners(){let e=this.getReferenceElement();if(!e){console.warn(this.host.tagName," could not find reference element with id: #",this.options?.reference);return}e.removeEventListener("keydown",this.handleKeyDown),this.hasTrigger("click")&&(e.removeEventListener("click",this.handleClick),document.removeEventListener("click",this.handleClickOutside,!0),this.host.removeEventListener("click",this.host.hide)),this.hasTrigger("hover")&&(e.removeEventListener("mouseover",this.handleMouseOver),e.removeEventListener("mouseout",this.handleMouseOut)),this.hasTrigger("focus")&&(e.removeEventListener("focusin",this.handleFocusIn,!0),e.removeEventListener("focusout",this.handleFocusOut,!0)),window.removeEventListener("resize",this.handleResize)}hasTrigger(e){return this.options.trigger.split(" ").includes(e)}}var u=s("./libs/components/src/popover/vl-popover-action-list.component.ts"),m=s("./libs/components/src/popover/vl-popover-action.component.ts");let g=(0,r.iv)`
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
        font-size: 1.6rem;
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
`;class v extends o.fS{static{(0,o.YV)([m.z,u.P])}static get styles(){return[n.YN,i.CX,g]}static get properties(){return{for:{type:String,attribute:"for"},contentPadding:{type:String,attribute:"content-padding"},open:{type:Boolean,attribute:"open",reflect:!0},trigger:{type:String,attribute:"trigger"},placement:{type:String,attribute:"placement",reflect:!0},distance:{type:Number,attribute:"distance"},hideArrow:{type:Boolean,attribute:"hide-arrow"},hideOnClick:{type:Boolean,attribute:"hide-on-click"}}}firstUpdated(){this.hidden=!this.open,this.popup=new p(this,this.popupOptions()),this.open&&this.popup.updatePosition()}render(){let e={"popover-content":!0,[`padding-${this.contentPadding}`]:!0};return(0,r.dy)`
            <div class=${(0,d.$)(e)}>
                <slot role="content"></slot>
                ${this.hideArrow?null:(0,r.dy)`<i id="popover-arrow" role="presentation"></i>`}
            </div>
        `}updated(e){e.has("open")?this.handleOpenChange():(this.popup.setOptions(this.popupOptions()),this.popup.updatePosition())}handleOpenChange(){this.open?(this.popup.updatePosition(),this.hidden=!1):this.hidden=!0,this.popup.getReferenceElement()?.setAttribute("aria-expanded",this.open?"true":"false")}toggle(){this.open?this.hide():this.show()}popupOptions(){return{reference:this.for,trigger:this.trigger,distance:this.distance,placement:this.placement,showDelay:0,hideDelay:0,hideOnClick:this.hideOnClick}}constructor(...e){super(...e),this.open=!1,this.for="",this.trigger="click",this.placement="bottom",this.distance=10,this.hideArrow=!1,this.contentPadding="small",this.hideOnClick=!1,this.show=()=>{this.open=!0},this.hide=()=>{this.open=!1}}}v=function(e,t,s,o){var i,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,s,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(r=(n<3?i(r):n>3?i(t,s,r):i(t,s))||r);return n>3&&r&&Object.defineProperty(t,s,r),r}([(0,l.Mo)("vl-popover")],v)},"./libs/components/src/progress-bar/vl-progress-bar.component.ts":(e,t,s)=>{s.d(t,{f:()=>p});var o=s("./libs/common/utilities/src/index.ts"),i=s("./node_modules/@domg/govflanders-style/common/index.js"),n=s("./node_modules/@domg/govflanders-style/component/index.js"),r=s("./node_modules/@govflanders/vl-ui-progress-bar/src/js/progress-bar.js");s("./node_modules/@govflanders/vl-ui-util/dist/js/util.js");var l=s("./node_modules/lit/index.js"),d=s("./node_modules/lit/decorators.js"),a=s("./node_modules/lit/directives/class-map.js");s("./node_modules/reflect-metadata/Reflect.js");var c=s("./libs/components/src/popover/vl-popover.component.ts");let h=(0,l.iv)`
    .vl-progress-bar__step[disabled] > button {
        cursor: default;
    }
`;class p extends o.fS{static{(0,o.YV)([c.m])}static get styles(){return[i.YN,n.LN,h,i.PC]}static get properties(){return{activeStep:{type:Number,attribute:"data-vl-active-step",reflect:!0},focusOnChange:{type:Boolean,attribute:"data-vl-focus-on-change",reflect:!0},numeric:{type:Boolean,attribute:"data-vl-numeric",reflect:!0},steps:{type:Array},showLabels:{type:Boolean,attribute:"data-vl-show-labels",reflect:!0}}}constructor(){super(),this.activeStep=1,this.focusOnChange=!1,this.numeric=!1,this.progressBar=new r.Z,this.steps=[],this.showLabels=!1,this.renderStep=(e,t)=>{let s={"vl-progress-bar__step":!0,"vl-progress-bar__step--active":this.activeStep===t+1};return(0,l.dy)` <div class=${(0,a.$)(s)}>
            <button
                @click=${()=>this.handleStepClick(e,t+1)}
                class="vl-progress-bar__bullet"
                aria-label=${e}
                id="step-${t+1}"
            >
                ${this.showLabels?l.Ld:(0,l.dy)`
                          <vl-popover for="step-${t+1}" placement="top" trigger="focus hover">
                              ${e}
                          </vl-popover>
                      `}
                ${this.showLabels?(0,l.dy)`<span class="vl-progress-bar__bullet__text" title=${e}>${e}</span>`:""}
            </button>
        </div>`},this.numeric=!1,this.focusOnChange=!1,this.activeStep=1,this.progressBar=new r.Z,this.steps=[],this.showLabels=!1}updated(){this.progressBar.updateStep(this.shadowRoot,this.activeStep,this.focusOnChange)}render(){let e={"vl-progress-bar":!0,"vl-progress-bar--numeric":this.numeric,"vl-progress-bar--data-vl-numeric":this.numeric};return(0,l.dy)` <div class=${(0,a.$)(e)}>
            ${this.steps.map((e,t)=>this.renderStep(e,t))}
        </div>`}handleStepClick(e,t){this.dispatchEvent(new CustomEvent("vl-click-step",{bubbles:!0,composed:!0,detail:{step:e,number:t}}))}}p=function(e,t,s,o){var i,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,s,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(r=(n<3?i(r):n>3?i(t,s,r):i(t,s))||r);return n>3&&r&&Object.defineProperty(t,s,r),r}([(0,d.Mo)("vl-progress-bar")],p)}}]);