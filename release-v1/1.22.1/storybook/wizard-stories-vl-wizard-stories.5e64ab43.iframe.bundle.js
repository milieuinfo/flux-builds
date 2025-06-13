"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[1246],{"./libs/components/src/wizard/stories/vl-wizard.stories.ts":(e,t,i)=>{i.r(t),i.d(t,{__namedExportsOrder:()=>p,default:()=>c,wizardDefault:()=>v});var r=i("./node_modules/lit-html/lit-html.js");i("./libs/components/src/wizard/vl-wizard-pane.component.ts"),i("./libs/components/src/wizard/vl-wizard.component.ts");var s=i("./libs/common/storybook/src/index.ts"),a=i("./node_modules/@storybook/addon-actions/dist/index.mjs");let l={...s._O,activeStepSlider:1,title:"Wizard title",header:"You're a wizard Harry",onClickStep:(0,a.aD)("vl-click-step")},n={...(0,s.Wp)(),activeStepSlider:{name:"data-vl-active-step",description:"Sets the active step of the wizard.",control:{type:"range",min:1,max:2,step:1},table:{type:{summary:"Number"},category:"Attributes",defaultValue:{summary:1}}},activeStep:{description:"Sets the active step of the wizard.",table:{type:{summary:"Number"},category:"Properties",defaultValue:{summary:1}}},title:{description:"Slot to place a title in the wizard.",table:{category:"Slots"}},header:{description:"Slot to place a header in the wizard.",table:{category:"Slots"}},onClickStep:{name:"vl-click-step",description:"The custom event fired on click of a step. In the detail of the event, you can find the number and name of the clicked step.",table:{category:"Events"}}},o=e=>{let[t]=[...document.querySelectorAll(e)].slice(-1);return t},d=()=>o("vl-wizard"),c={title:"Components/wizard/wizard",tags:["autodocs"],args:l,argTypes:n},v=({activeStepSlider:e,title:t,header:i,onClickStep:s})=>(0,r.dy)` <div
    style="max-width: 780px;"
>
    <vl-wizard
        data-vl-active-step=${e}
        @vl-click-step=${e=>{s(e.detail),d().activeStep=e.detail.number}}
    >
        <h2 slot="title" is="vl-h2">${t}</h2>
        <p slot="header">${i}</p>
        <vl-wizard-pane data-vl-name="Stap 1">
            <h3 is="vl-h3">Stap 1</h3>
            <div is="vl-grid" data-vl-is-stacked>
                <div is="vl-column" data-vl-size="12">
                    <div is="vl-form-grid" data-vl-is-stacked>
                        <div is="vl-form-column" data-vl-size="12">
                            <label is="vl-form-label" for="naam" data-vl-block> Naam </label>
                            <input id="naam" is="vl-input-field" data-vl-block />
                        </div>
                    </div>
                </div>
                <div is="vl-column">
                    <button @click=${()=>d().activeStep+=1} is="vl-button" type="button">Volgende</button>
                </div>
            </div>
        </vl-wizard-pane>
        <vl-wizard-pane data-vl-name="Stap 2">
            <h3 is="vl-h3">Stap 2</h3>
            <div is="vl-grid" data-vl-is-stacked>
                <div is="vl-column" data-vl-size="12">
                    <div is="vl-form-grid" data-vl-is-stacked>
                        <div is="vl-form-column" data-vl-size="12">
                            <label is="vl-form-label" for="years" data-vl-block> Aantal jaren dienst </label>
                            <input id="years" is="vl-input-field" data-vl-block />
                        </div>
                    </div>
                </div>
                <div is="vl-column">
                    <button @click=${()=>d().activeStep-=1} is="vl-button-link" type="button">
                        <span is="vl-icon" data-vl-icon="arrow-left-fat" data-vl-before></span>
                        Vorige
                    </button>
                </div>
            </div>
        </vl-wizard-pane>
    </vl-wizard>
</div>`;v.storyName="vl-wizard - default",v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:'({\n  activeStepSlider,\n  title,\n  header,\n  onClickStep\n}: typeof wizardArgs) => html` <div\n    style="max-width: 780px;"\n>\n    <vl-wizard\n        data-vl-active-step=${activeStepSlider}\n        @vl-click-step=${(event: any) => {\n  onClickStep(event.detail);\n  getWizard().activeStep = event.detail.number;\n}}\n    >\n        <h2 slot="title" is="vl-h2">${title}</h2>\n        <p slot="header">${header}</p>\n        <vl-wizard-pane data-vl-name="Stap 1">\n            <h3 is="vl-h3">Stap 1</h3>\n            <div is="vl-grid" data-vl-is-stacked>\n                <div is="vl-column" data-vl-size="12">\n                    <div is="vl-form-grid" data-vl-is-stacked>\n                        <div is="vl-form-column" data-vl-size="12">\n                            <label is="vl-form-label" for="naam" data-vl-block> Naam </label>\n                            <input id="naam" is="vl-input-field" data-vl-block />\n                        </div>\n                    </div>\n                </div>\n                <div is="vl-column">\n                    <button @click=${() => getWizard().activeStep += 1} is="vl-button" type="button">Volgende</button>\n                </div>\n            </div>\n        </vl-wizard-pane>\n        <vl-wizard-pane data-vl-name="Stap 2">\n            <h3 is="vl-h3">Stap 2</h3>\n            <div is="vl-grid" data-vl-is-stacked>\n                <div is="vl-column" data-vl-size="12">\n                    <div is="vl-form-grid" data-vl-is-stacked>\n                        <div is="vl-form-column" data-vl-size="12">\n                            <label is="vl-form-label" for="years" data-vl-block> Aantal jaren dienst </label>\n                            <input id="years" is="vl-input-field" data-vl-block />\n                        </div>\n                    </div>\n                </div>\n                <div is="vl-column">\n                    <button @click=${() => getWizard().activeStep -= 1} is="vl-button-link" type="button">\n                        <span is="vl-icon" data-vl-icon="arrow-left-fat" data-vl-before></span>\n                        Vorige\n                    </button>\n                </div>\n            </div>\n        </vl-wizard-pane>\n    </vl-wizard>\n</div>`',...v.parameters?.docs?.source}}};let p=["wizardDefault"]},"./node_modules/@govflanders/vl-ui-progress-bar/src/js/progress-bar.js":(e,t,i)=>{i.d(t,{Z:()=>n});var r="".concat(vl.ns,"progress-bar__step"),s="".concat(vl.ns,"progress-bar__step--active"),a="".concat(vl.ns,"progress-bar__bullet");class l{updateStep(e,t){var i=!(arguments.length>2)||void 0===arguments[2]||arguments[2],l=e.querySelectorAll(".".concat(r));vl.util.each(l,e=>{var r=l[t-1],n=e.querySelector(".".concat(a)),o=r.querySelector(".".concat(a));vl.util.removeClass(e,s),vl.util.addClass(r,s),n.removeAttribute("aria-current"),o.setAttribute("aria-current","step"),i&&o.focus()})}}let n=l},"./node_modules/lit-html/directive.js":(e,t,i)=>{i.d(t,{XM:()=>s,Xe:()=>a,pX:()=>r});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var r={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},s=e=>function(){for(var t=arguments.length,i=Array(t),r=0;r<t;r++)i[r]=arguments[r];return{_$litDirective$:e,values:i}};class a{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},"./node_modules/lit/decorators.js":(e,t,i)=>{i.d(t,{Mo:()=>r,Cb:()=>d});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var r=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},s=i("./node_modules/lit/node_modules/@lit/reactive-element/reactive-element.js");function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,r)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach(function(t){!function(e,t,i){(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i}(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n={attribute:!0,type:String,converter:s.Ts,reflect:!1,hasChanged:s.Qu},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,t=arguments.length>1?arguments[1]:void 0,i=arguments.length>2?arguments[2]:void 0,{kind:r,metadata:s}=i,a=globalThis.litPropertyMetadata.get(s);if(void 0===a&&globalThis.litPropertyMetadata.set(s,a=new Map),a.set(i.name,e),"accessor"===r){var{name:l}=i;return{set(i){var r=t.get.call(this);t.set.call(this,i),this.requestUpdate(l,r,e)},init(t){return void 0!==t&&this.C(l,void 0,e),t}}}if("setter"===r){var{name:o}=i;return function(i){var r=this[o];t.call(this,i),this.requestUpdate(o,r,e)}}throw Error("Unsupported decorator location: "+r)};function d(e){return(t,i)=>"object"==typeof i?o(e,t,i):((e,t,i)=>{var r=t.hasOwnProperty(i);return t.constructor.createProperty(i,r?l(l({},e),{},{wrapped:!0}):e),r?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}},"./node_modules/lit/directives/class-map.js":(e,t,i)=>{i.d(t,{$:()=>a});var r=i("./node_modules/lit-html/lit-html.js"),s=i("./node_modules/lit-html/directive.js"),a=(0,s.XM)(class extends s.Xe{constructor(e){var t;if(super(e),e.type!==s.pX.ATTRIBUTE||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,t){var[i]=t;if(void 0===this.it){for(var s in this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),i)i[s]&&!(null!==(o=this.st)&&void 0!==o&&o.has(s))&&this.it.add(s);return this.render(i)}var a=e.element.classList;for(var l of this.it)l in i||(a.remove(l),this.it.delete(l));for(var n in i){var o,d,c=!!i[n];c===this.it.has(n)||(null===(d=this.st)||void 0===d?void 0:d.has(n))||(c?(a.add(n),this.it.add(n)):(a.remove(n),this.it.delete(n)))}return r.Jb}})},"./libs/components/src/progress-bar/vl-progress-bar.component.ts":(e,t,i)=>{i.d(t,{f:()=>p});var r=i("./libs/common/utilities/src/index.ts"),s=i("./node_modules/@domg/govflanders-style/common/index.js"),a=i("./node_modules/@domg/govflanders-style/component/index.js"),l=i("./node_modules/@govflanders/vl-ui-progress-bar/src/js/progress-bar.js");i("./node_modules/@govflanders/vl-ui-util/dist/js/util.js");var n=i("./node_modules/lit/index.js"),o=i("./node_modules/lit/decorators.js"),d=i("./node_modules/lit/directives/class-map.js");i("./node_modules/reflect-metadata/Reflect.js");var c=i("./libs/components/src/tooltip/vl-tooltip.component.ts");let v=(0,n.iv)`
    .vl-progress-bar__step[disabled] > button {
        cursor: default;
    }
`;class p extends r.fS{static{(0,r.YV)([c.y])}static get styles(){return[s.YN,a.LN,v,s.PC]}static get properties(){return{numeric:{type:Boolean,attribute:"data-vl-numeric",reflect:!0},activeStep:{type:Number,attribute:"data-vl-active-step",reflect:!0},focusOnChange:{type:Boolean,attribute:"data-vl-focus-on-change",reflect:!0},steps:{type:Array}}}constructor(){super(),this.numeric=!1,this.focusOnChange=!1,this.activeStep=1,this.progressBar=new l.Z,this.steps=[],this.numeric=!1,this.focusOnChange=!1,this.activeStep=1,this.progressBar=new l.Z,this.steps=[]}updated(){this.progressBar.updateStep(this.shadowRoot,this.activeStep,this.focusOnChange)}render(){let e={"vl-progress-bar":!0,"vl-progress-bar--numeric":this.numeric,"vl-progress-bar--data-vl-numeric":this.numeric};return(0,n.dy)` <div class=${(0,d.$)(e)}>
            ${this.steps.map((e,t)=>(0,n.dy)` <div class="vl-progress-bar__step">
                    <button
                        @click=${()=>this.dispatchEvent(new CustomEvent("vl-click-step",{bubbles:!0,composed:!0,detail:{step:e,number:t+1}}))}
                        class="vl-progress-bar__bullet"
                        aria-label=${e}
                    >
                        <vl-tooltip placement="top">${e}</vl-tooltip>
                        <span class="vl-u-visually-hidden">${e}</span>
                    </button>
                </div>`)}
        </div>`}}p=function(e,t,i,r){var s,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(l=(a<3?s(l):a>3?s(t,i,l):s(t,i))||l);return a>3&&l&&Object.defineProperty(t,i,l),l}([(0,o.Mo)("vl-progress-bar")],p)},"./libs/components/src/wizard/vl-wizard-pane.component.ts":(e,t,i)=>{var r=i("./libs/common/utilities/src/index.ts");i("./node_modules/@govflanders/vl-ui-util/dist/js/util.js");var s=i("./node_modules/lit/index.js"),a=i("./node_modules/lit/decorators.js");class l extends r.fS{static get properties(){return{isActive:{type:Boolean},name:{type:String,attribute:"data-vl-name",reflect:!0}}}updated(e){[...e].forEach(([e])=>"name"===e&&this.parentElement?.onslotchange?.(e))}render(){return(0,s.dy)`${this.isActive?(0,s.dy)` <slot></slot>`:s.Ld}`}constructor(...e){super(...e),this.isActive=!1,this.name=""}}l=function(e,t,i,r){var s,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(l=(a<3?s(l):a>3?s(t,i,l):s(t,i))||l);return a>3&&l&&Object.defineProperty(t,i,l),l}([(0,a.Mo)("vl-wizard-pane")],l)},"./libs/components/src/wizard/vl-wizard.component.ts":(e,t,i)=>{var r=i("./libs/common/utilities/src/index.ts"),s=i("./node_modules/@domg/govflanders-style/common/index.js"),a=i("./node_modules/@domg/govflanders-style/component/index.js");i("./node_modules/@govflanders/vl-ui-util/dist/js/util.js");var l=i("./node_modules/lit/index.js"),n=i("./node_modules/lit/decorators.js"),o=i("./libs/components/src/progress-bar/vl-progress-bar.component.ts");class d extends r.fS{static{(0,r.YV)([o.f])}static get styles(){return[s.YN,a.UJ]}static get properties(){return{panes:{type:Array},activeStep:{type:Number,attribute:"data-vl-active-step",reflect:!0}}}constructor(){super(),this.panes=[],this.activeStep=1}onSlotChange(){this.panes=[...this.querySelectorAll("vl-wizard-pane")]}updated(){this.panes.forEach((e,t)=>{e.isActive=this.activeStep===t+1})}render(){return(0,l.dy)`
            <section class="vl-wizard" data-vl-wizard>
                <header class="vl-wizard__heading" role="none">
                    <slot name="title"></slot>
                    <slot name="header"></slot>
                </header>
                <vl-progress-bar
                    data-vl-active-step=${this.activeStep}
                    .steps=${this.panes.map(e=>e.name)}
                ></vl-progress-bar>
                <div class="vl-wizard__panes">
                    <section class="vl-wizard__pane">
                        <slot @slotchange=${this.onSlotChange}></slot>
                    </section>
                </div>
            </section>
        `}}d=function(e,t,i,r){var s,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(l=(a<3?s(l):a>3?s(t,i,l):s(t,i))||l);return a>3&&l&&Object.defineProperty(t,i,l),l}([(0,n.Mo)("vl-wizard")],d)}}]);