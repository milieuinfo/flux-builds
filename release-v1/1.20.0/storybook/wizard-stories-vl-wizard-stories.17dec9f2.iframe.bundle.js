"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[1246],{"./node_modules/@govflanders/vl-ui-progress-bar/src/js/progress-bar.js":(e,t,i)=>{i.d(t,{Z:()=>n});var s="".concat(vl.ns,"progress-bar__step"),a="".concat(vl.ns,"progress-bar__step--active"),l="".concat(vl.ns,"progress-bar__bullet");class r{updateStep(e,t){var i=!(arguments.length>2)||void 0===arguments[2]||arguments[2],r=e.querySelectorAll(".".concat(s));vl.util.each(r,e=>{var s=r[t-1],n=e.querySelector(".".concat(l)),o=s.querySelector(".".concat(l));vl.util.removeClass(e,a),vl.util.addClass(s,a),n.removeAttribute("aria-current"),o.setAttribute("aria-current","step"),i&&o.focus()})}}let n=r},"./node_modules/lit-html/directive.js":(e,t,i)=>{i.d(t,{XM:()=>a,Xe:()=>l,pX:()=>s});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},a=e=>function(){for(var t=arguments.length,i=Array(t),s=0;s<t;s++)i[s]=arguments[s];return{_$litDirective$:e,values:i}};class l{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},"./node_modules/lit/decorators.js":(e,t,i)=>{var s;i.d(t,{Mo:()=>a,Cb:()=>n});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let a=e=>t=>"function"==typeof t?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{let{kind:i,elements:s}=t;return{kind:i,elements:s,finisher(t){customElements.define(e,t)}}})(e,t),l=(e,t)=>"method"!==t.kind||!t.descriptor||"value"in t.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}}:{...t,finisher(i){i.createProperty(t.key,e)}},r=(e,t,i)=>{t.constructor.createProperty(i,e)};function n(e){return(t,i)=>void 0!==i?r(e,t,i):l(e,t)}null!=(null===(s=window.HTMLSlotElement)||void 0===s?void 0:s.prototype.assignedElements)||((e,t)=>e.assignedNodes(t).filter(e=>e.nodeType===Node.ELEMENT_NODE))},"./node_modules/lit/directives/class-map.js":(e,t,i)=>{i.d(t,{$:()=>l});var s=i("./node_modules/lit-html/lit-html.js"),a=i("./node_modules/lit-html/directive.js"),l=(0,a.XM)(class extends a.Xe{constructor(e){var t;if(super(e),e.type!==a.pX.ATTRIBUTE||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,t){var i,a,[l]=t;if(void 0===this.it){for(var r in this.it=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),l)!l[r]||(null===(i=this.nt)||void 0===i?void 0:i.has(r))||this.it.add(r);return this.render(l)}var n=e.element.classList;for(var o in this.it.forEach(e=>{e in l||(n.remove(e),this.it.delete(e))}),l){var d=!!l[o];d===this.it.has(o)||(null===(a=this.nt)||void 0===a?void 0:a.has(o))||(d?(n.add(o),this.it.add(o)):(n.remove(o),this.it.delete(o)))}return s.Jb}})},"./libs/components/src/progress-bar/vl-progress-bar.component.ts":(e,t,i)=>{i.d(t,{f:()=>p});var s=i("./libs/common/utilities/src/index.ts"),a=i("./node_modules/@domg/govflanders-style/common/index.js"),l=i("./node_modules/@domg/govflanders-style/component/index.js"),r=i("./node_modules/@govflanders/vl-ui-progress-bar/src/js/progress-bar.js");i("./node_modules/@govflanders/vl-ui-util/dist/js/util.js");var n=i("./node_modules/lit/index.js"),o=i("./node_modules/lit/decorators.js"),d=i("./node_modules/lit/directives/class-map.js");i("./node_modules/reflect-metadata/Reflect.js");var c=i("./libs/components/src/tooltip/vl-tooltip.component.ts");let v=(0,n.iv)`
    .vl-progress-bar__step[disabled] > button {
        cursor: default;
    }
`,p=class extends s.fS{static{(0,s.YV)([c.y])}static get styles(){return[a.YN,l.LN,v,a.PC]}static get properties(){return{numeric:{type:Boolean,attribute:"data-vl-numeric",reflect:!0},activeStep:{type:Number,attribute:"data-vl-active-step",reflect:!0},focusOnChange:{type:Boolean,attribute:"data-vl-focus-on-change",reflect:!0},steps:{type:Array}}}constructor(){super(),this.numeric=!1,this.focusOnChange=!1,this.activeStep=1,this.progressBar=new r.Z,this.steps=[],this.numeric=!1,this.focusOnChange=!1,this.activeStep=1,this.progressBar=new r.Z,this.steps=[]}updated(){this.progressBar.updateStep(this.shadowRoot,this.activeStep,this.focusOnChange)}render(){let e={"vl-progress-bar":!0,"vl-progress-bar--numeric":this.numeric,"vl-progress-bar--data-vl-numeric":this.numeric};return(0,n.dy)` <div class=${(0,d.$)(e)}>
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
        </div>`}};p=function(e,t,i,s){var a,l=arguments.length,r=l<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(r=(l<3?a(r):l>3?a(t,i,r):a(t,i))||r);return l>3&&r&&Object.defineProperty(t,i,r),r}([(0,o.Mo)("vl-progress-bar")],p)},"./libs/components/src/wizard/vl-wizard-pane.component.ts":(e,t,i)=>{var s=i("./libs/common/utilities/src/index.ts"),a=i("./node_modules/lit/index.js"),l=i("./node_modules/lit/decorators.js");let r=class extends s.fS{static get properties(){return{isActive:{type:Boolean},name:{type:String,attribute:"data-vl-name",reflect:!0}}}updated(e){[...e].forEach(([e])=>"name"===e&&this.parentElement?.onslotchange?.(e))}render(){return(0,a.dy)`${this.isActive?(0,a.dy)`<slot></slot>`:a.Ld}`}constructor(...e){super(...e),this.isActive=!1,this.name=""}};r=function(e,t,i,s){var a,l=arguments.length,r=l<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(r=(l<3?a(r):l>3?a(t,i,r):a(t,i))||r);return l>3&&r&&Object.defineProperty(t,i,r),r}([(0,l.Mo)("vl-wizard-pane")],r)},"./libs/components/src/wizard/vl-wizard.component.ts":(e,t,i)=>{var s=i("./node_modules/@domg/govflanders-style/component/index.js"),a=i("./node_modules/@domg/govflanders-style/common/index.js"),l=i("./node_modules/lit/index.js"),r=i("./node_modules/lit/decorators.js"),n=i("./libs/components/src/progress-bar/vl-progress-bar.component.ts"),o=i("./libs/common/utilities/src/index.ts");let d=class extends o.fS{static{(0,o.YV)([n.f])}static get styles(){return[a.YN,s.UJ]}static get properties(){return{panes:{type:Array},activeStep:{type:Number,attribute:"data-vl-active-step",reflect:!0}}}constructor(){super(),this.panes=[],this.activeStep=1}onSlotChange(){this.panes=[...Array(this.querySelectorAll("vl-wizard-pane"))]}updated(){this.panes.forEach((e,t)=>{e.isActive=this.activeStep===t+1})}render(){return(0,l.dy)`
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
        `}};d=function(e,t,i,s){var a,l=arguments.length,r=l<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(r=(l<3?a(r):l>3?a(t,i,r):a(t,i))||r);return l>3&&r&&Object.defineProperty(t,i,r),r}([(0,r.Mo)("vl-wizard")],d)},"./libs/components/src/wizard/stories/vl-wizard.stories.ts":(e,t,i)=>{i.r(t),i.d(t,{default:()=>d,wizardDefault:()=>c});var s=i("./libs/common/storybook/src/index.ts"),a=i("./node_modules/lit-html/lit-html.js");i("./libs/components/src/wizard/vl-wizard-pane.component.ts"),i("./libs/components/src/wizard/vl-wizard.component.ts");var l=i("./node_modules/@storybook/addon-actions/dist/index.mjs");let r={activeStepSlider:1,title:"Wizard title",header:"You're a wizard Harry",onClickStep:(0,l.aD)("vl-click-step")},n=e=>{let[t]=[...Array(document.querySelectorAll(e))].slice(-1);return t},o=()=>n("vl-wizard"),d={title:"Components/wizard/wizard",tags:["autodocs"],args:(0,s.T8)(r),argTypes:(0,s.xj)({activeStepSlider:{name:"data-vl-active-step",description:"Sets the active step of the wizard.",control:{type:"range",min:1,max:2,step:1},table:{type:{summary:"Number"},category:"Attributes",defaultValue:{summary:1}}},activeStep:{description:"Sets the active step of the wizard.",table:{type:{summary:"Number"},category:"Properties",defaultValue:{summary:1}}},title:{description:"Slot to place a title in the wizard.",table:{category:"Slots"}},header:{description:"Slot to place a header in the wizard.",table:{category:"Slots"}},onClickStep:{name:"vl-click-step",description:"The custom event fired on click of a step. In the detail of the event, you can find the number and name of the clicked step.",table:{category:"Events"}}})},c=({activeStepSlider:e,title:t,header:i,onClickStep:s})=>(0,a.dy)` <div
    style="max-width: 780px;"
>
    <vl-wizard
        data-vl-active-step=${e}
        @vl-click-step=${e=>{s(e.detail),o().activeStep=e.detail.number}}
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
                    <button @click=${()=>o().activeStep+=1} is="vl-button" type="button">Volgende</button>
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
                    <button @click=${()=>o().activeStep-=1} is="vl-button-link" type="button">
                        <span is="vl-icon" data-vl-icon="arrow-left-fat" data-vl-before></span>
                        Vorige
                    </button>
                </div>
            </div>
        </vl-wizard-pane>
    </vl-wizard>
</div>`;c.storyName="vl-wizard - default",c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:'({\n  activeStepSlider,\n  title,\n  header,\n  onClickStep\n}: typeof wizardArgs) => html` <div\n    style="max-width: 780px;"\n>\n    <vl-wizard\n        data-vl-active-step=${activeStepSlider}\n        @vl-click-step=${(event: any) => {\n  onClickStep(event.detail);\n  getWizard().activeStep = event.detail.number;\n}}\n    >\n        <h2 slot="title" is="vl-h2">${title}</h2>\n        <p slot="header">${header}</p>\n        <vl-wizard-pane data-vl-name="Stap 1">\n            <h3 is="vl-h3">Stap 1</h3>\n            <div is="vl-grid" data-vl-is-stacked>\n                <div is="vl-column" data-vl-size="12">\n                    <div is="vl-form-grid" data-vl-is-stacked>\n                        <div is="vl-form-column" data-vl-size="12">\n                            <label is="vl-form-label" for="naam" data-vl-block> Naam </label>\n                            <input id="naam" is="vl-input-field" data-vl-block />\n                        </div>\n                    </div>\n                </div>\n                <div is="vl-column">\n                    <button @click=${() => getWizard().activeStep += 1} is="vl-button" type="button">Volgende</button>\n                </div>\n            </div>\n        </vl-wizard-pane>\n        <vl-wizard-pane data-vl-name="Stap 2">\n            <h3 is="vl-h3">Stap 2</h3>\n            <div is="vl-grid" data-vl-is-stacked>\n                <div is="vl-column" data-vl-size="12">\n                    <div is="vl-form-grid" data-vl-is-stacked>\n                        <div is="vl-form-column" data-vl-size="12">\n                            <label is="vl-form-label" for="years" data-vl-block> Aantal jaren dienst </label>\n                            <input id="years" is="vl-input-field" data-vl-block />\n                        </div>\n                    </div>\n                </div>\n                <div is="vl-column">\n                    <button @click=${() => getWizard().activeStep -= 1} is="vl-button-link" type="button">\n                        <span is="vl-icon" data-vl-icon="arrow-left-fat" data-vl-before></span>\n                        Vorige\n                    </button>\n                </div>\n            </div>\n        </vl-wizard-pane>\n    </vl-wizard>\n</div>`',...c.parameters?.docs?.source}}}}}]);