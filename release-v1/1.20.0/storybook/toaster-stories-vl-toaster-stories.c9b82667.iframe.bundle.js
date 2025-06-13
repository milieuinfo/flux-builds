(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[6073],{"./node_modules/lit-html/directive.js":(t,e,o)=>{"use strict";o.d(e,{XM:()=>a,Xe:()=>s,pX:()=>n});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},a=t=>function(){for(var e=arguments.length,o=Array(e),n=0;n<e;n++)o[n]=arguments[n];return{_$litDirective$:t,values:o}};class s{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},"./node_modules/lit/decorators.js":(t,e,o)=>{"use strict";var n;o.d(e,{Mo:()=>a,Cb:()=>l});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let a=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{let{kind:o,elements:n}=e;return{kind:o,elements:n,finisher(e){customElements.define(t,e)}}})(t,e),s=(t,e)=>"method"!==e.kind||!e.descriptor||"value"in e.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}}:{...e,finisher(o){o.createProperty(e.key,t)}},r=(t,e,o)=>{e.constructor.createProperty(o,t)};function l(t){return(e,o)=>void 0!==o?r(t,e,o):s(t,e)}null!=(null===(n=window.HTMLSlotElement)||void 0===n?void 0:n.prototype.assignedElements)||((t,e)=>t.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE))},"./node_modules/lit/directives/class-map.js":(t,e,o)=>{"use strict";o.d(e,{$:()=>s});var n=o("./node_modules/lit-html/lit-html.js"),a=o("./node_modules/lit-html/directive.js"),s=(0,a.XM)(class extends a.Xe{constructor(t){var e;if(super(t),t.type!==a.pX.ATTRIBUTE||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,e){var o,a,[s]=e;if(void 0===this.it){for(var r in this.it=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t))),s)!s[r]||(null===(o=this.nt)||void 0===o?void 0:o.has(r))||this.it.add(r);return this.render(s)}var l=t.element.classList;for(var i in this.it.forEach(t=>{t in s||(l.remove(t),this.it.delete(t))}),s){var c=!!s[i];c===this.it.has(i)||(null===(a=this.nt)||void 0===a?void 0:a.has(i))||(c?(l.add(i),this.it.add(i)):(l.remove(i),this.it.delete(i)))}return n.Jb}})},"./libs/components/src/alert/vl-alert.component.ts":(t,e,o)=>{"use strict";o.d(e,{q:()=>d});var n=o("./node_modules/lit/index.js"),a=o("./node_modules/lit/decorators.js"),s=o("./libs/common/utilities/src/index.ts"),r=o("./node_modules/@domg/govflanders-style/component/index.js"),l=o("./node_modules/@domg/govflanders-style/common/index.js"),i=o("./libs/components/src/alert/vl-alert.model.ts"),c=o("./node_modules/lit/directives/class-map.js");let d=class extends s.fS{static get styles(){return[l.YN,r.L1,r.oQ,l.PC,l.VB]}static get properties(){return{icon:{type:String,attribute:"data-vl-icon",reflect:!0},title:{type:String,attribute:"data-vl-title",reflect:!0},closable:{type:Boolean,attribute:"data-vl-closable",reflect:!0},type:{type:String,attribute:"data-vl-type",reflect:!0},size:{type:String,attribute:"data-vl-size",reflect:!0},naked:{type:Boolean,attribute:"data-vl-naked",reflect:!0},message:{type:String,attribute:"data-vl-message",reflect:!0}}}updated(t){super.updated(t),this.processButtons()}render(){let t={"vl-alert":!0,[`vl-alert--${this.type}`]:!!this.type,"vl-alert--small":"small"===this.size,"vl-alert--naked":this.naked},e=this.naked?`vl-u-mark--${this.type}`:"";return(0,n.dy)`
            <div id="alert" class=${(0,c.$)(t)} role="alert">
                ${this.icon&&(0,n.dy)` <div class="vl-alert__icon">
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
                ${this.closable?(0,n.dy)`
                          <button id="close" class="vl-alert__close" type="button" @click=${this.removeAlert}>
                              <i class="vl-vi vl-vi-cross" aria-hidden="true"></i>
                              <span class="vl-u-visually-hidden">Melding sluiten</span>
                          </button>
                      `:""}
            </div>
        `}removeAlert(){this.parentElement?.removeChild(this),this.dispatchEvent(new i.zL)}processButtons(){let t=this.renderRoot.querySelector('slot[name="actions"]'),e=t?.assignedNodes().filter(t=>t instanceof HTMLButtonElement);e.forEach(t=>t.setAttribute("data-vl-narrow",""))}constructor(...t){super(...t),this.icon="",this.title="",this.type="",this.size="",this.message="",this.naked=!1,this.closable=!1}};d=function(t,e,o,n){var a,s=arguments.length,r=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,n);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(r=(s<3?a(r):s>3?a(e,o,r):a(e,o))||r);return s>3&&r&&Object.defineProperty(e,o,r),r}([(0,a.Mo)("vl-alert")],d)},"./libs/components/src/alert/vl-alert.model.ts":(t,e,o)=>{"use strict";o.d(e,{Xo:()=>n,ms:()=>a,tO:()=>s,zL:()=>r});let n={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error"},a={WARNING:"warning",CHECK:"check",INFO_CIRCLE:"info-circle"},s={SMALL:"small"};class r extends Event{static{this.eventType="vl-alert-closed"}constructor(){super(r.eventType,{bubbles:!0})}}},"./libs/components/src/toaster/vl-toaster.element.ts":(t,e,o)=>{"use strict";o.d(e,{x:()=>a});var n=o("./libs/common/utilities/src/index.ts");o("./node_modules/@govflanders/vl-ui-core/dist/js/core.js"),o("./node_modules/@govflanders/vl-ui-util/dist/js/util.js"),o("./libs/components/src/toaster/vl-toaster.lib.js");let a=class extends(0,n.W$)(HTMLDivElement){static get _observedAttributes(){return["fadeout"]}static get _observedClassAttributes(){return["top-left","top-right","bottom-left","bottom-right"]}static get _dressedAttributeName(){return"data-vl-toaster-dressed"}connectedCallback(){this.classList.add("vl-toaster"),this._dress()}get _classPrefix(){return"vl-toaster--"}get toasterFadeClass(){return"vl-alert--fade-out"}get _dressed(){return!!this.getAttribute(a._dressedAttributeName)}push(t){setTimeout(()=>{this._element.appendChild(t)})}closeAlert(t){vl.util.addClass(t,this.toasterFadeClass),window.setTimeout(()=>{t.remove()},300)}_fadeoutChangedCallback(t,e){void 0!=e?this._element.setAttribute("data-vl-toaster-fadeout",!0):this._element.removeAttribute("data-vl-toaster-fadeout")}_dress(){this._dressed||vl.toaster.dress(this)}};a=function(t,e,o,n){var a,s=arguments.length,r=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,n);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(r=(s<3?a(r):s>3?a(e,o,r):a(e,o))||r);return s>3&&r&&Object.defineProperty(e,o,r),r}([(0,n.a6)("vl-toaster",{extends:"div"})],a)},"./libs/components/src/toaster/vl-toaster.lib.js":function(t){!function(e,o){t.exports=o()}(this||window,function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var e="".concat(vl.ns,"toaster"),o="".concat(vl.ns,"alert"),n="".concat(o,"--fade-out"),a="".concat(o,"__close"),s="data-".concat(vl.ns),r="".concat(s,"toaster"),l="".concat(r,"-dressed"),i="".concat(r,"-fadeout"),c=function(t){vl.util.addClass(t,n),window.setTimeout(function(){vl.util.removeClass(t,n)},300)},d=function(t){vl.util.addClass(t,n),window.setTimeout(function(){t.remove()},300)},u=function(t){vl.util.each(t,function(t){t.addEventListener("click",function(t){d(t.currentTarget.parentElement)})})},v=function(t){var e=t[0].target,o=e.firstElementChild,n=e.lastElementChild;t[0].addedNodes.length>0&&(c(n),u(n.shadowRoot?n.shadowRoot.querySelectorAll(".".concat(a)):n.querySelectorAll(".".concat(a))),"true"===e.getAttribute(i)&&window.setTimeout(function(){d(n)},5e3)),e.childElementCount>5&&d(o)},b=function(){function o(){!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,o)}return!function(e,o,n){o&&t(e.prototype,o),n&&t(e,n)}(o,[{key:"dress",value:function(t){t.setAttribute(l,!0);var e=new window.MutationObserver(v),o=t.shadowRoot?t.shadowRoot.querySelectorAll(".".concat(a)):t.querySelectorAll(".".concat(a));e.observe(t,{attributes:!0,childList:!0}),u(o)}},{key:"dressAll",value:function(){var t=this,o=document.querySelectorAll(".".concat(e,":not([").concat(l,"]):not([data-").concat(vl.ns,'js-dress="false"]),\n      [').concat(r,"]:not([").concat(l,"]):not([data-").concat(vl.ns,'js-dress="false"])'));vl.util.each(o,function(e){t.dress(e)})}}]),o}();return"toaster"in vl||(vl.toaster=new b,vl.toaster.dressAll()),b})},"./libs/components/src/toaster/stories/vl-toaster.stories.ts":(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>d,toasterDefault:()=>u});var n=o("./libs/common/utilities/src/index.ts"),a=o("./libs/elements/src/index.ts"),s=o("./node_modules/lit-html/lit-html.js"),r=o("./libs/components/src/alert/vl-alert.component.ts"),l=o("./libs/components/src/toaster/vl-toaster.element.ts"),i=o("./libs/common/storybook/src/index.ts");let c={topLeft:{name:"data-vl-top-left",description:"Positioneert de toaster op linkerbovenhoek.",table:{type:{summary:i.vK.BOOLEAN},category:"Attributes",defaultValue:{summary:!1}}},topRight:{name:"data-vl-top-right",description:"Positioneert de toaster op rechterbovenhoek. Standaard gaat de toaster altijd in de rechterbovenhoek getoond worden.",table:{type:{summary:i.vK.BOOLEAN},category:"Attributes",defaultValue:{summary:!1}}},bottomLeft:{name:"data-vl-bottom-left",description:"Positioneert de toaster op linkeronderhoek.",table:{type:{summary:i.vK.BOOLEAN},category:"Attributes",defaultValue:{summary:!1}}},bottomRight:{name:"data-vl-bottom-right",description:"Positioneert de toaster op rechteronderhoek.",table:{type:{summary:i.vK.BOOLEAN},category:"Attributes",defaultValue:{summary:!1}}},fadeOut:{name:"data-vl-fadeout",description:"Elke alert verdwijnt automatisch 5 seconden na openen.",table:{type:{summary:i.vK.BOOLEAN},category:"Attributes",defaultValue:{summary:!1}}}};(0,n.YV)([r.q,a.d7,l.x]);let d={title:"Components/toaster",tags:["autodocs"],args:{topLeft:!1,topRight:!1,bottomLeft:!1,bottomRight:!1,fadeOut:!1},argTypes:c,parameters:{controls:{hideNoControlsWarning:!0}}},u=({topLeft:t,topRight:e,bottomLeft:o,bottomRight:n,fadeOut:a})=>(0,s.dy)`
    <div
        id="dynamic-toaster"
        is="vl-toaster"
        ?data-vl-top-left=${t}
        ?data-vl-top-right=${e}
        ?data-vl-bottom-left=${o}
        ?data-vl-bottom-right=${n}
        ?data-vl-fadeout=${a}
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
`;u.storyName="vl-toaster - default",u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:'({\n  topLeft,\n  topRight,\n  bottomLeft,\n  bottomRight,\n  fadeOut\n}: typeof toasterArgTypes) => html`\n    <div\n        id="dynamic-toaster"\n        is="vl-toaster"\n        ?data-vl-top-left=${topLeft}\n        ?data-vl-top-right=${topRight}\n        ?data-vl-bottom-left=${bottomLeft}\n        ?data-vl-bottom-right=${bottomRight}\n        ?data-vl-fadeout=${fadeOut}\n        data-cy="dynamic-toaster"\n    ></div>\n\n    <div id="top-left-toaster" is="vl-toaster" data-vl-top-left data-vl-fadeout data-cy="toaster-top-left"></div>\n    <div id="top-right-toaster" is="vl-toaster" data-vl-top-right data-cy="toaster-top-right"></div>\n    <div id="bottom-left-toaster" is="vl-toaster" data-vl-bottom-left data-cy="toaster-bottom-left"></div>\n    <div id="bottom-right-toaster" is="vl-toaster" data-vl-bottom-right data-cy="toaster-bottom-right"></div>\n\n    <button is="vl-button" onclick="dynamicToaster().push(newSuccessAlert());" data-cy="button-success">Success</button>\n    <button is="vl-button" onclick="dynamicToaster().push(newWarningAlert());" data-cy="button-warning">\n        Warning toaster\n    </button>\n    <button is="vl-button" onclick="dynamicToaster().push(newSuccessAlert());" data-cy="button-error">\n        Error toaster\n    </button>\n    <button is="vl-button" onclick="dynamicToaster().push(newCtaAlert());" data-cy="button-cta">CTA toaster</button>\n\n    <br />\n    <br />\n\n    <button is="vl-button" onclick="topLeftToaster().push(newSuccessAlert());" data-cy="button-top-left">\n        Top-left\n    </button>\n    <button is="vl-button" onclick="topRightToaster().push(newSuccessAlert());" data-cy="button-top-right">\n        Top-right\n    </button>\n    <button is="vl-button" onclick="bottomLeftToaster().push(newSuccessAlert());" data-cy="button-bottom-left">\n        Bottom-left\n    </button>\n    <button is="vl-button" onclick="bottomRightToaster().push(newSuccessAlert());" data-cy="button-bottom-right">\n        Bottom-right\n    </button>\n\n    <br />\n    <br />\n\n    <vl-alert\n        id="alert-1"\n        data-vl-type="warning"\n        data-vl-icon="warning"\n        data-vl-title="Technische storing"\n        data-vl-closable\n    >\n        <p>Door een technische storing is dit loket tijdelijk niet beschikbaar.</p>\n    </vl-alert>\n    <br />\n    <vl-alert id="alert-2" data-vl-type="error" data-vl-icon="warning" data-vl-title="Error" data-vl-closable>\n        <p>Er is een fout opgetreden.</p>\n    </vl-alert>\n    <br />\n    <vl-alert id="alert-3" data-vl-type="success" data-vl-icon="check" data-vl-title="Gelukt" data-vl-closable>\n        <p>Wij hebben uw melding goed ontvangen en nemen deze spoedig in behandeling.</p>\n    </vl-alert>\n    <br />\n    <vl-alert id="alert-4" data-vl-type="cta" data-vl-icon="info" data-vl-title="Opgelet!" data-vl-closable>\n        <p>U heeft geen rechten om deze actie uit te voeren. <a href="#">Vraag rechten aan</a>.</p>\n        <button slot="actions" is="vl-button" id="b1">Fout melden</button>\n    </vl-alert>\n    <script>\n        const newWarningAlert = () => document.querySelector(\'#alert-1\').cloneNode(true);\n        const newErrorAlert = () => document.querySelector(\'#alert-2\').cloneNode(true);\n        const newSuccessAlert = () => document.querySelector(\'#alert-3\').cloneNode(true);\n        const newCtaAlert = () => document.querySelector(\'#alert-4\').cloneNode(true);\n\n        const topLeftToaster = () => document.querySelector(\'#top-left-toaster\');\n        const topRightToaster = () => document.querySelector(\'#top-right-toaster\');\n        const bottomLeftToaster = () => document.querySelector(\'#bottom-left-toaster\');\n        const bottomRightToaster = () => document.querySelector(\'#bottom-right-toaster\');\n\n        const dynamicToaster = () => document.querySelector(\'#dynamic-toaster\');\n    </script>\n`',...u.parameters?.docs?.source}}}}}]);