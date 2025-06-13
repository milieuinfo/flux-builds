(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[6073],{"./libs/components/src/toaster/stories/vl-toaster.stories.ts":(t,e,o)=>{"use strict";o.r(e),o.d(e,{__namedExportsOrder:()=>v,default:()=>d,toasterDefault:()=>u});var a=o("./libs/common/utilities/src/index.ts"),s=o("./libs/elements/src/index.ts"),r=o("./node_modules/lit-html/lit-html.js"),n=o("./libs/components/src/alert/vl-alert.component.ts"),l=o("./libs/components/src/toaster/vl-toaster.element.ts"),i=o("./libs/common/storybook/src/index.ts");let c={topLeft:{name:"data-vl-top-left",description:"Positioneert de toaster op linkerbovenhoek.",table:{type:{summary:i.vK.BOOLEAN},category:"Attributes",defaultValue:{summary:!1}}},topRight:{name:"data-vl-top-right",description:"Positioneert de toaster op rechterbovenhoek. Standaard gaat de toaster altijd in de rechterbovenhoek getoond worden.",table:{type:{summary:i.vK.BOOLEAN},category:"Attributes",defaultValue:{summary:!1}}},bottomLeft:{name:"data-vl-bottom-left",description:"Positioneert de toaster op linkeronderhoek.",table:{type:{summary:i.vK.BOOLEAN},category:"Attributes",defaultValue:{summary:!1}}},bottomRight:{name:"data-vl-bottom-right",description:"Positioneert de toaster op rechteronderhoek.",table:{type:{summary:i.vK.BOOLEAN},category:"Attributes",defaultValue:{summary:!1}}},fadeOut:{name:"data-vl-fadeout",description:"Elke alert verdwijnt automatisch 5 seconden na openen.",table:{type:{summary:i.vK.BOOLEAN},category:"Attributes",defaultValue:{summary:!1}}}};(0,a.YV)([n.q,s.d7,l.x]);let d={title:"Components/toaster",tags:["autodocs"],args:{topLeft:!1,topRight:!1,bottomLeft:!1,bottomRight:!1,fadeOut:!1},argTypes:c,parameters:{controls:{hideNoControlsWarning:!0}}},u=({topLeft:t,topRight:e,bottomLeft:o,bottomRight:a,fadeOut:s})=>(0,r.dy)`
    <div
        id="dynamic-toaster"
        is="vl-toaster"
        ?data-vl-top-left=${t}
        ?data-vl-top-right=${e}
        ?data-vl-bottom-left=${o}
        ?data-vl-bottom-right=${a}
        ?data-vl-fadeout=${s}
        data-cy="dynamic-toaster"
    ></div>

    <div id="top-left-toaster" is="vl-toaster" data-vl-top-left data-vl-fadeout data-cy="toaster-top-left"></div>
    <div id="top-right-toaster" is="vl-toaster" data-vl-top-right data-cy="toaster-top-right"></div>
    <div id="bottom-left-toaster" is="vl-toaster" data-vl-bottom-left data-cy="toaster-bottom-left"></div>
    <div id="bottom-right-toaster" is="vl-toaster" data-vl-bottom-right data-cy="toaster-bottom-right"></div>

    <button is="vl-button" onclick="dynamicToaster().push(newSuccessAlert());" data-cy="button-success">Success</button>
    <button is="vl-button" onclick="dynamicToaster().push(newWarningAlert());" data-cy="button-warning">
        Warning toaster
    </button>
    <button is="vl-button" onclick="dynamicToaster().push(newSuccessAlert());" data-cy="button-error">
        Error toaster
    </button>
    <button is="vl-button" onclick="dynamicToaster().push(newCtaAlert());" data-cy="button-cta">CTA toaster</button>

    <br />
    <br />

    <button is="vl-button" onclick="topLeftToaster().push(newSuccessAlert());" data-cy="button-top-left">
        Top-left
    </button>
    <button is="vl-button" onclick="topRightToaster().push(newSuccessAlert());" data-cy="button-top-right">
        Top-right
    </button>
    <button is="vl-button" onclick="bottomLeftToaster().push(newSuccessAlert());" data-cy="button-bottom-left">
        Bottom-left
    </button>
    <button is="vl-button" onclick="bottomRightToaster().push(newSuccessAlert());" data-cy="button-bottom-right">
        Bottom-right
    </button>

    <br />
    <br />

    <vl-alert
        id="alert-1"
        data-vl-type="warning"
        data-vl-icon="warning"
        data-vl-title="Technische storing"
        data-vl-closable
    >
        <p>Door een technische storing is dit loket tijdelijk niet beschikbaar.</p>
    </vl-alert>
    <br />
    <vl-alert id="alert-2" data-vl-type="error" data-vl-icon="warning" data-vl-title="Error" data-vl-closable>
        <p>Er is een fout opgetreden.</p>
    </vl-alert>
    <br />
    <vl-alert id="alert-3" data-vl-type="success" data-vl-icon="check" data-vl-title="Gelukt" data-vl-closable>
        <p>Wij hebben uw melding goed ontvangen en nemen deze spoedig in behandeling.</p>
    </vl-alert>
    <br />
    <vl-alert id="alert-4" data-vl-type="cta" data-vl-icon="info" data-vl-title="Opgelet!" data-vl-closable>
        <p>U heeft geen rechten om deze actie uit te voeren. <a href="#">Vraag rechten aan</a>.</p>
        <button slot="actions" is="vl-button" id="b1">Fout melden</button>
    </vl-alert>
    <script>
        const newWarningAlert = () => document.querySelector('#alert-1').cloneNode(true);
        const newErrorAlert = () => document.querySelector('#alert-2').cloneNode(true);
        const newSuccessAlert = () => document.querySelector('#alert-3').cloneNode(true);
        const newCtaAlert = () => document.querySelector('#alert-4').cloneNode(true);

        const topLeftToaster = () => document.querySelector('#top-left-toaster');
        const topRightToaster = () => document.querySelector('#top-right-toaster');
        const bottomLeftToaster = () => document.querySelector('#bottom-left-toaster');
        const bottomRightToaster = () => document.querySelector('#bottom-right-toaster');

        const dynamicToaster = () => document.querySelector('#dynamic-toaster');
    </script>
`;u.storyName="vl-toaster - default",u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:'({\n  topLeft,\n  topRight,\n  bottomLeft,\n  bottomRight,\n  fadeOut\n}: typeof toasterArgTypes) => html`\n    <div\n        id="dynamic-toaster"\n        is="vl-toaster"\n        ?data-vl-top-left=${topLeft}\n        ?data-vl-top-right=${topRight}\n        ?data-vl-bottom-left=${bottomLeft}\n        ?data-vl-bottom-right=${bottomRight}\n        ?data-vl-fadeout=${fadeOut}\n        data-cy="dynamic-toaster"\n    ></div>\n\n    <div id="top-left-toaster" is="vl-toaster" data-vl-top-left data-vl-fadeout data-cy="toaster-top-left"></div>\n    <div id="top-right-toaster" is="vl-toaster" data-vl-top-right data-cy="toaster-top-right"></div>\n    <div id="bottom-left-toaster" is="vl-toaster" data-vl-bottom-left data-cy="toaster-bottom-left"></div>\n    <div id="bottom-right-toaster" is="vl-toaster" data-vl-bottom-right data-cy="toaster-bottom-right"></div>\n\n    <button is="vl-button" onclick="dynamicToaster().push(newSuccessAlert());" data-cy="button-success">Success</button>\n    <button is="vl-button" onclick="dynamicToaster().push(newWarningAlert());" data-cy="button-warning">\n        Warning toaster\n    </button>\n    <button is="vl-button" onclick="dynamicToaster().push(newSuccessAlert());" data-cy="button-error">\n        Error toaster\n    </button>\n    <button is="vl-button" onclick="dynamicToaster().push(newCtaAlert());" data-cy="button-cta">CTA toaster</button>\n\n    <br />\n    <br />\n\n    <button is="vl-button" onclick="topLeftToaster().push(newSuccessAlert());" data-cy="button-top-left">\n        Top-left\n    </button>\n    <button is="vl-button" onclick="topRightToaster().push(newSuccessAlert());" data-cy="button-top-right">\n        Top-right\n    </button>\n    <button is="vl-button" onclick="bottomLeftToaster().push(newSuccessAlert());" data-cy="button-bottom-left">\n        Bottom-left\n    </button>\n    <button is="vl-button" onclick="bottomRightToaster().push(newSuccessAlert());" data-cy="button-bottom-right">\n        Bottom-right\n    </button>\n\n    <br />\n    <br />\n\n    <vl-alert\n        id="alert-1"\n        data-vl-type="warning"\n        data-vl-icon="warning"\n        data-vl-title="Technische storing"\n        data-vl-closable\n    >\n        <p>Door een technische storing is dit loket tijdelijk niet beschikbaar.</p>\n    </vl-alert>\n    <br />\n    <vl-alert id="alert-2" data-vl-type="error" data-vl-icon="warning" data-vl-title="Error" data-vl-closable>\n        <p>Er is een fout opgetreden.</p>\n    </vl-alert>\n    <br />\n    <vl-alert id="alert-3" data-vl-type="success" data-vl-icon="check" data-vl-title="Gelukt" data-vl-closable>\n        <p>Wij hebben uw melding goed ontvangen en nemen deze spoedig in behandeling.</p>\n    </vl-alert>\n    <br />\n    <vl-alert id="alert-4" data-vl-type="cta" data-vl-icon="info" data-vl-title="Opgelet!" data-vl-closable>\n        <p>U heeft geen rechten om deze actie uit te voeren. <a href="#">Vraag rechten aan</a>.</p>\n        <button slot="actions" is="vl-button" id="b1">Fout melden</button>\n    </vl-alert>\n    <script>\n        const newWarningAlert = () => document.querySelector(\'#alert-1\').cloneNode(true);\n        const newErrorAlert = () => document.querySelector(\'#alert-2\').cloneNode(true);\n        const newSuccessAlert = () => document.querySelector(\'#alert-3\').cloneNode(true);\n        const newCtaAlert = () => document.querySelector(\'#alert-4\').cloneNode(true);\n\n        const topLeftToaster = () => document.querySelector(\'#top-left-toaster\');\n        const topRightToaster = () => document.querySelector(\'#top-right-toaster\');\n        const bottomLeftToaster = () => document.querySelector(\'#bottom-left-toaster\');\n        const bottomRightToaster = () => document.querySelector(\'#bottom-right-toaster\');\n\n        const dynamicToaster = () => document.querySelector(\'#dynamic-toaster\');\n    </script>\n`',...u.parameters?.docs?.source}}};let v=["toasterDefault"]},"./node_modules/lit-html/directive.js":(t,e,o)=>{"use strict";o.d(e,{XM:()=>s,Xe:()=>r,pX:()=>a});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var a={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},s=t=>function(){for(var e=arguments.length,o=Array(e),a=0;a<e;a++)o[a]=arguments[a];return{_$litDirective$:t,values:o}};class r{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},"./node_modules/lit/decorators.js":(t,e,o)=>{"use strict";o.d(e,{Mo:()=>a,Cb:()=>l});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let a=t=>(e,o)=>{void 0!==o?o.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};var s=o("./node_modules/@lit/reactive-element/reactive-element.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let r={attribute:!0,type:String,converter:s.Ts,reflect:!1,hasChanged:s.Qu},n=(t=r,e,o)=>{let{kind:a,metadata:s}=o,n=globalThis.litPropertyMetadata.get(s);if(void 0===n&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(o.name,t),"accessor"===a){let{name:a}=o;return{set(o){let s=e.get.call(this);e.set.call(this,o),this.requestUpdate(a,s,t)},init(e){return void 0!==e&&this.C(a,void 0,t),e}}}if("setter"===a){let{name:a}=o;return function(o){let s=this[a];e.call(this,o),this.requestUpdate(a,s,t)}}throw Error("Unsupported decorator location: "+a)};function l(t){return(e,o)=>"object"==typeof o?n(t,e,o):((t,e,o)=>{let a=e.hasOwnProperty(o);return e.constructor.createProperty(o,a?{...t,wrapped:!0}:t),a?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}},"./node_modules/lit/directives/class-map.js":(t,e,o)=>{"use strict";o.d(e,{$:()=>r});var a=o("./node_modules/lit-html/lit-html.js"),s=o("./node_modules/lit-html/directive.js"),r=(0,s.XM)(class extends s.Xe{constructor(t){var e;if(super(t),t.type!==s.pX.ATTRIBUTE||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,e){var[o]=e;if(void 0===this.it){for(var s in this.it=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t))),o)o[s]&&!(null!==(i=this.st)&&void 0!==i&&i.has(s))&&this.it.add(s);return this.render(o)}var r=t.element.classList;for(var n of this.it)n in o||(r.remove(n),this.it.delete(n));for(var l in o){var i,c,d=!!o[l];d===this.it.has(l)||(null===(c=this.st)||void 0===c?void 0:c.has(l))||(d?(r.add(l),this.it.add(l)):(r.remove(l),this.it.delete(l)))}return a.Jb}})},"./libs/components/src/alert/vl-alert.component.ts":(t,e,o)=>{"use strict";o.d(e,{q:()=>d});var a=o("./node_modules/lit/index.js"),s=o("./node_modules/lit/decorators.js"),r=o("./libs/common/utilities/src/index.ts"),n=o("./node_modules/@domg/govflanders-style/component/index.js"),l=o("./node_modules/@domg/govflanders-style/common/index.js"),i=o("./libs/components/src/alert/vl-alert.model.ts"),c=o("./node_modules/lit/directives/class-map.js");class d extends r.fS{static get styles(){return[l.YN,n.L1,n.oQ,l.PC,l.VB]}static get properties(){return{icon:{type:String,attribute:"data-vl-icon",reflect:!0},title:{type:String,attribute:"data-vl-title",reflect:!0},closable:{type:Boolean,attribute:"data-vl-closable",reflect:!0},type:{type:String,attribute:"data-vl-type",reflect:!0},size:{type:String,attribute:"data-vl-size",reflect:!0},naked:{type:Boolean,attribute:"data-vl-naked",reflect:!0},message:{type:String,attribute:"data-vl-message",reflect:!0}}}updated(t){super.updated(t),this.processButtons()}render(){let t={"vl-alert":!0,[`vl-alert--${this.type}`]:!!this.type,"vl-alert--small":"small"===this.size,"vl-alert--naked":this.naked},e=this.naked?`vl-u-mark--${this.type}`:"";return(0,a.dy)`
            <div id="alert" class=${(0,c.$)(t)} role="alert">
                ${this.icon&&(0,a.dy)` <div class="vl-alert__icon">
                    <span is="vl-icon" data-vl-icon="${this.icon}"></span>
                </div>`}
                <div id="content" class="vl-alert__content">
                    <p id="title" class="vl-alert__title">
                        <slot class=${e} name="title">${this.title}</slot>
                    </p>
                    <div id="message" class="vl-alert__message">
                        <p class=${e}>${this.message}</p>
                        <slot id="message-slot"></slot>
                    </div>
                    <div id="actions" class="vl-alert__actions">
                        <slot id="actions-slot" name="actions"></slot>
                    </div>
                </div>
                ${this.closable?(0,a.dy)`
                          <button id="close" class="vl-alert__close" type="button" @click=${this.removeAlert}>
                              <i class="vl-vi vl-vi-cross" aria-hidden="true"></i>
                              <span class="vl-u-visually-hidden">Melding sluiten</span>
                          </button>
                      `:""}
            </div>
        `}removeAlert(){this.parentElement?.removeChild(this),this.dispatchEvent(new i.zL)}processButtons(){let t=this.renderRoot.querySelector('slot[name="actions"]');(t?.assignedNodes().filter(t=>t instanceof HTMLButtonElement)).forEach(t=>t.setAttribute("data-vl-narrow",""))}constructor(...t){super(...t),this.icon="",this.title="",this.type="",this.size="",this.message="",this.naked=!1,this.closable=!1}}d=function(t,e,o,a){var s,r=arguments.length,n=r<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,o):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,a);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(n=(r<3?s(n):r>3?s(e,o,n):s(e,o))||n);return r>3&&n&&Object.defineProperty(e,o,n),n}([(0,s.Mo)("vl-alert")],d)},"./libs/components/src/alert/vl-alert.model.ts":(t,e,o)=>{"use strict";o.d(e,{Xo:()=>a,ms:()=>s,tO:()=>r,zL:()=>n});let a={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error"},s={WARNING:"warning",CHECK:"check",INFO_CIRCLE:"info-circle"},r={SMALL:"small"};class n extends Event{static{this.eventType="vl-alert-closed"}constructor(){super(n.eventType,{bubbles:!0})}}},"./libs/components/src/toaster/vl-toaster.element.ts":(t,e,o)=>{"use strict";o.d(e,{x:()=>s});var a=o("./libs/common/utilities/src/index.ts");o("./node_modules/@govflanders/vl-ui-core/dist/js/core.js"),o("./node_modules/@govflanders/vl-ui-util/dist/js/util.js"),o("./libs/components/src/toaster/vl-toaster.lib.js");class s extends(0,a.W$)(HTMLDivElement){static get _observedAttributes(){return["fadeout"]}static get _observedClassAttributes(){return["top-left","top-right","bottom-left","bottom-right"]}static get _dressedAttributeName(){return"data-vl-toaster-dressed"}connectedCallback(){this.classList.add("vl-toaster"),this._dress()}get _classPrefix(){return"vl-toaster--"}get toasterFadeClass(){return"vl-alert--fade-out"}get _dressed(){return!!this.getAttribute(s._dressedAttributeName)}push(t){setTimeout(()=>{this._element.appendChild(t)})}closeAlert(t){vl.util.addClass(t,this.toasterFadeClass),window.setTimeout(()=>{t.remove()},300)}_fadeoutChangedCallback(t,e){void 0!=e?this._element.setAttribute("data-vl-toaster-fadeout",!0):this._element.removeAttribute("data-vl-toaster-fadeout")}_dress(){this._dressed||vl.toaster.dress(this)}}s=function(t,e,o,a){var s,r=arguments.length,n=r<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,o):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,a);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(n=(r<3?s(n):r>3?s(e,o,n):s(e,o))||n);return r>3&&n&&Object.defineProperty(e,o,n),n}([(0,a.a6)("vl-toaster",{extends:"div"})],s)},"./libs/components/src/toaster/vl-toaster.lib.js":function(t){!function(e,o){t.exports=o()}(this||window,function(){function t(t,e){for(var o=0;o<e.length;o++){var a=e[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var e="".concat(vl.ns,"toaster"),o="".concat(vl.ns,"alert"),a="".concat(o,"--fade-out"),s="".concat(o,"__close"),r="data-".concat(vl.ns),n="".concat(r,"toaster"),l="".concat(n,"-dressed"),i="".concat(n,"-fadeout"),c=function(t){vl.util.addClass(t,a),window.setTimeout(function(){vl.util.removeClass(t,a)},300)},d=function(t){vl.util.addClass(t,a),window.setTimeout(function(){t.remove()},300)},u=function(t){vl.util.each(t,function(t){t.addEventListener("click",function(t){d(t.currentTarget.parentElement)})})},v=function(t){var e=t[0].target,o=e.firstElementChild,a=e.lastElementChild;t[0].addedNodes.length>0&&(c(a),u(a.shadowRoot?a.shadowRoot.querySelectorAll(".".concat(s)):a.querySelectorAll(".".concat(s))),"true"===e.getAttribute(i)&&window.setTimeout(function(){d(a)},5e3)),e.childElementCount>5&&d(o)},b=function(){function o(){!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,o)}return!function(e,o,a){o&&t(e.prototype,o),a&&t(e,a)}(o,[{key:"dress",value:function(t){t.setAttribute(l,!0);var e=new window.MutationObserver(v),o=t.shadowRoot?t.shadowRoot.querySelectorAll(".".concat(s)):t.querySelectorAll(".".concat(s));e.observe(t,{attributes:!0,childList:!0}),u(o)}},{key:"dressAll",value:function(){var t=this,o=document.querySelectorAll(".".concat(e,":not([").concat(l,"]):not([data-").concat(vl.ns,'js-dress="false"]),\n      [').concat(n,"]:not([").concat(l,"]):not([data-").concat(vl.ns,'js-dress="false"])'));vl.util.each(o,function(e){t.dress(e)})}}]),o}();return"toaster"in vl||(vl.toaster=new b,vl.toaster.dressAll()),b})}}]);