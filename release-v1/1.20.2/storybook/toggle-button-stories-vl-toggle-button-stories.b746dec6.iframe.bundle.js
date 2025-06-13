"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[1655],{"./node_modules/lit-html/directive.js":(t,e,a)=>{a.d(e,{XM:()=>o,Xe:()=>l,pX:()=>n});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},o=t=>function(){for(var e=arguments.length,a=Array(e),n=0;n<e;n++)a[n]=arguments[n];return{_$litDirective$:t,values:a}};class l{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,a){this._$Ct=t,this._$AM=e,this._$Ci=a}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},"./node_modules/lit/decorators.js":(t,e,a)=>{var n;a.d(e,{Mo:()=>o,Cb:()=>r});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let o=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{let{kind:a,elements:n}=e;return{kind:a,elements:n,finisher(e){customElements.define(t,e)}}})(t,e),l=(t,e)=>"method"!==e.kind||!e.descriptor||"value"in e.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(a){a.createProperty(e.key,t)}}:{...e,finisher(a){a.createProperty(e.key,t)}},i=(t,e,a)=>{e.constructor.createProperty(a,t)};function r(t){return(e,a)=>void 0!==a?i(t,e,a):l(t,e)}null!=(null===(n=window.HTMLSlotElement)||void 0===n?void 0:n.prototype.assignedElements)||((t,e)=>t.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE))},"./node_modules/lit/directives/class-map.js":(t,e,a)=>{a.d(e,{$:()=>l});var n=a("./node_modules/lit-html/lit-html.js"),o=a("./node_modules/lit-html/directive.js"),l=(0,o.XM)(class extends o.Xe{constructor(t){var e;if(super(t),t.type!==o.pX.ATTRIBUTE||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,e){var a,o,[l]=e;if(void 0===this.it){for(var i in this.it=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t))),l)!l[i]||(null===(a=this.nt)||void 0===a?void 0:a.has(i))||this.it.add(i);return this.render(l)}var r=t.element.classList;for(var s in this.it.forEach(t=>{t in l||(r.remove(t),this.it.delete(t))}),l){var d=!!l[s];d===this.it.has(s)||(null===(o=this.nt)||void 0===o?void 0:o.has(s))||(d?(r.add(s),this.it.add(s)):(r.remove(s),this.it.delete(s)))}return n.Jb}})},"./libs/components/src/toggle-button/vl-toggle-button.component.ts":(t,e,a)=>{a.d(e,{e:()=>v});var n=a("./libs/common/utilities/src/index.ts"),o=a("./libs/elements/src/index.ts"),l=a("./node_modules/@domg/govflanders-style/common/index.js"),i=a("./node_modules/@domg/govflanders-style/component/index.js"),r=a("./node_modules/lit/index.js"),s=a("./node_modules/lit/decorators.js"),d=a("./node_modules/lit/directives/class-map.js"),c=a("./libs/components/src/toggle-button/vl-toggle-button.model.ts");let u=(0,r.iv)`
    .vl-button--map.vl-button--tertiary {
        background-color: #fff;
    }
    .vl-button--map.vl-button--tertiary:hover,
    .vl-button--map.vl-button--tertiary:active {
        background-color: #fff;
    }
`,v=class extends n.fS{static{(0,n.YV)([o.d7,o.Gi,o.yK])}static get properties(){return{icon:{type:String,attribute:"data-vl-icon",reflect:!0},iconPlacement:{type:String,attribute:"data-vl-icon-placement",reflect:!0},textHidden:{type:Boolean,attribute:"data-vl-text-hidden",reflect:!0},error:{type:Boolean,attribute:"data-vl-error",reflect:!0},block:{type:Boolean,attribute:"data-vl-block",reflect:!0},large:{type:Boolean,attribute:"data-vl-large",reflect:!0},wide:{type:Boolean,attribute:"data-vl-wide",reflect:!0},narrow:{type:Boolean,attribute:"data-vl-narrow",reflect:!0},loading:{type:Boolean,attribute:"data-vl-loading",reflect:!0},disabled:{type:Boolean,attribute:"disabled",reflect:!0},_active:{type:Boolean,state:!0},active:{type:Boolean||void 0}}}static get styles(){return[l.YN,i.jn,u,l.PC,i.oQ]}createRenderRoot(){let t=super.createRenderRoot();return t.addEventListener("click",t=>{let{disabled:e}=this;e&&t.stopPropagation()}),t}constructor(){super(),this.icon="",this.iconPlacement="",this.textHidden=!1,this.error=!1,this.block=!1,this.large=!1,this.wide=!1,this.narrow=!1,this.loading=!1,this.disabled=!1,this.isInMap=!1,this._active=!1,this.active=void 0,this.iconPlacement=c.T.AFTER,this.textHidden=!1,this.disabled=!1}_isControlled(){return void 0!==this.active}_fireChange(){this.dispatchEvent(new CustomEvent("change",{detail:{isActive:this._active}}))}updated(t){t.forEach((t,e)=>{switch(e){case"active":this._isControlled()&&(this._active=this.active);break;case"_active":(!this._isControlled()||this._isControlled()&&void 0!==t)&&this._fireChange()}})}_buttonWrap(t){return(0,r.dy)`
            <button
                class=${(0,d.$)({"vl-button--map":this.isInMap})}
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
        `}_iconTemplate(){return this.textHidden?(0,r.dy)`${this._buttonWrap((0,r.dy)`<span is="vl-icon" data-vl-icon=${this.icon}></span>
                    <span is="vl-text" data-vl-visually-hidden><slot></slot></span>`)}`:this.iconPlacement===c.T.BEFORE?(0,r.dy)`${this._buttonWrap((0,r.dy)`<span is="vl-icon" data-vl-icon=${this.icon} data-vl-before></span> <slot></slot>`)}`:(0,r.dy)`${this._buttonWrap((0,r.dy)` <slot></slot><span is="vl-icon" data-vl-icon=${this.icon} data-vl-after></span>`)}`}render(){return this.icon?this._iconTemplate():(0,r.dy)`${this._buttonWrap((0,r.dy)` <slot></slot>`)}`}};v=function(t,e,a,n){var o,l=arguments.length,i=l<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,a,n);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(i=(l<3?o(i):l>3?o(e,a,i):o(e,a))||i);return l>3&&i&&Object.defineProperty(e,a,i),i}([(0,s.Mo)("vl-toggle-button")],v)},"./libs/components/src/toggle-button/vl-toggle-button.model.ts":(t,e,a)=>{a.d(e,{T:()=>n});let n={BEFORE:"before",AFTER:"after"}},"./libs/components/src/toggle-button/stories/vl-toggle-button.stories.ts":(t,e,a)=>{a.r(e),a.d(e,{default:()=>c,toggleButtonControlled:()=>b,toggleButtonDefault:()=>u,toggleButtonWithIcon:()=>v});var n=a("./node_modules/lit-html/lit-html.js");a("./libs/components/src/toggle-button/vl-toggle-button.component.ts");var o=a("./libs/common/storybook/src/index.ts"),l=a("./node_modules/@storybook/addon-actions/dist/index.mjs"),i=a("./libs/components/src/toggle-button/vl-toggle-button.model.ts");let r={loading:!1,disabled:!1,error:!1,block:!1,large:!1,wide:!1,narrow:!1,content:null,active:!1,icon:void 0,iconPlacement:void 0,content:"Toggle button",textHidden:!1,disabled:!1,click:(0,l.aD)("click"),change:(0,l.aD)("change")},s={disabled:{description:"Used to indicate to the user that the functionality is not active.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},error:{name:"data-vl-error",description:"Used to emphasize the importance or consequences of an action.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},block:{name:"data-vl-block",description:"Used to ensure that the button is shown as a block element and will therefore take the width of the parent.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},large:{name:"data-vl-large",description:"Used to grab the user's attention by increasing the font size.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},wide:{name:"data-vl-wide",description:"Makes the button appear wider on the screen.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},narrow:{name:"data-vl-narrow",description:"Causes the button to appear narrower on the screen.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},loading:{name:"data-vl-loading",description:"Used to indicate to the user that their action is currently being processed.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},content:{name:"content (for demo purposes)",table:{type:{summary:"String"}}},active:{name:"active",description:"Controls the active state of the toggle button.",table:{type:{summary:"Boolean"},category:"Properties"},control:{disabled:!0}},icon:{name:"data-vl-icon",type:{name:o.vK.STRING,required:!1},description:"Sets the icon of the toggle button.",table:{type:{summary:o.vK.STRING},category:"Attributes"}},iconPlacement:{name:"data-vl-icon-placement",description:"Determines where the icon should be rendered before or after the text.",table:{type:{summary:`${i.T.BEFORE} | ${i.T.AFTER}`},category:"Attributes",defaultValue:{summary:i.T.AFTER}},control:{type:"select",options:[i.T.BEFORE,i.T.AFTER]}},textHidden:{name:"data-vl-text-hidden",description:"Determines whether the toggle button text is shown.",table:{type:{summary:"Boolean"},category:"Attributes",defaultValue:{summary:"false"}}},change:{name:"change",description:"Custom event that is triggered when the active state of the toggle button changes.",table:{category:"Events"}},click:{name:"click",description:"Event fired on click of the toggle button.",table:{category:"Events"}}},d=t=>{let[e]=[...Array(document.querySelectorAll(t))].slice(-1);return e},c={title:"Components/toggle-button",tags:["autodocs"],args:(0,o.T8)(r),argTypes:(0,o.xj)(s)},u=({active:t,icon:e,iconPlacement:a,textHidden:o,error:l,block:i,large:r,wide:s,narrow:d,loading:c,disabled:u,change:v,click:g,content:b})=>(0,n.dy)` <vl-toggle-button
        .active=${t}
        data-vl-icon=${e}
        data-vl-icon-placement=${a}
        ?data-vl-text-hidden=${o}
        ?data-vl-error=${l}
        ?data-vl-block=${i}
        ?data-vl-large=${r}
        ?data-vl-wide=${s}
        ?data-vl-narrow=${d}
        ?data-vl-loading=${c}
        ?disabled=${u}
        @change=${t=>v(t.detail)}
        @click=${t=>{g(t)}}
        data-cy="toggle-button"
        >${b}
    </vl-toggle-button>`;u.storyName="vl-toggle-button - default";let v=({active:t,icon:e,iconPlacement:a,textHidden:o,error:l,block:i,large:r,wide:s,narrow:d,loading:c,disabled:u,change:v,click:g,content:b})=>(0,n.dy)` <vl-toggle-button
        .active=${t}
        data-vl-icon=${e}
        data-vl-icon-placement=${a}
        ?data-vl-text-hidden=${o}
        ?data-vl-error=${l}
        ?data-vl-block=${i}
        ?data-vl-large=${r}
        ?data-vl-wide=${s}
        ?data-vl-narrow=${d}
        ?data-vl-loading=${c}
        ?disabled=${u}
        @change=${t=>v(t.detail)}
        @click=${t=>{g(t)}}
        data-cy="toggle-button-with-icon"
        >${b}
    </vl-toggle-button>`;v.storyName="vl-toggle-button - with icon",v.args={icon:"pencil",iconPlacement:i.T.AFTER};let g=()=>d("vl-toggle-button"),b=({active:t,icon:e,iconPlacement:a,textHidden:o,error:l,block:i,large:r,wide:s,narrow:d,loading:c,disabled:u,change:v,click:b,content:h})=>(0,n.dy)` <vl-toggle-button
    .active=${t}
    data-vl-icon=${e}
    data-vl-icon-placement=${a}
    ?data-vl-text-hidden=${o}
    ?data-vl-error=${l}
    ?data-vl-block=${i}
    ?data-vl-large=${r}
    ?data-vl-wide=${s}
    ?data-vl-narrow=${d}
    ?data-vl-loading=${c}
    ?disabled=${u}
    @change=${t=>v(t.detail)}
    @click=${t=>{b(t);let e=g();e.active=!e.active}}
    data-cy="toggle-button-controlled"
    >${h}
</vl-toggle-button>`;b.storyName="vl-toggle-button - controlled",b.args={active:!1},b.argTypes={active:{control:{disabled:!1}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:'({\n  active,\n  icon,\n  iconPlacement,\n  textHidden,\n  error,\n  block,\n  large,\n  wide,\n  narrow,\n  loading,\n  disabled,\n  change,\n  click,\n  content\n}: typeof toggleButtonArgs) => html` <vl-toggle-button\n        .active=${active}\n        data-vl-icon=${icon}\n        data-vl-icon-placement=${iconPlacement}\n        ?data-vl-text-hidden=${textHidden}\n        ?data-vl-error=${error}\n        ?data-vl-block=${block}\n        ?data-vl-large=${large}\n        ?data-vl-wide=${wide}\n        ?data-vl-narrow=${narrow}\n        ?data-vl-loading=${loading}\n        ?disabled=${disabled}\n        @change=${(event: any) => change(event.detail)}\n        @click=${(event: any) => {\n  click(event);\n}}\n        data-cy="toggle-button"\n        >${content}\n    </vl-toggle-button>`',...u.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:'({\n  active,\n  icon,\n  iconPlacement,\n  textHidden,\n  error,\n  block,\n  large,\n  wide,\n  narrow,\n  loading,\n  disabled,\n  change,\n  click,\n  content\n}: typeof toggleButtonArgs) => html` <vl-toggle-button\n        .active=${active}\n        data-vl-icon=${icon}\n        data-vl-icon-placement=${iconPlacement}\n        ?data-vl-text-hidden=${textHidden}\n        ?data-vl-error=${error}\n        ?data-vl-block=${block}\n        ?data-vl-large=${large}\n        ?data-vl-wide=${wide}\n        ?data-vl-narrow=${narrow}\n        ?data-vl-loading=${loading}\n        ?disabled=${disabled}\n        @change=${(event: any) => change(event.detail)}\n        @click=${(event: any) => {\n  click(event);\n}}\n        data-cy="toggle-button-with-icon"\n        >${content}\n    </vl-toggle-button>`',...v.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:'({\n  active,\n  icon,\n  iconPlacement,\n  textHidden,\n  error,\n  block,\n  large,\n  wide,\n  narrow,\n  loading,\n  disabled,\n  change,\n  click,\n  content\n}: typeof toggleButtonArgs) => html` <vl-toggle-button\n    .active=${active}\n    data-vl-icon=${icon}\n    data-vl-icon-placement=${iconPlacement}\n    ?data-vl-text-hidden=${textHidden}\n    ?data-vl-error=${error}\n    ?data-vl-block=${block}\n    ?data-vl-large=${large}\n    ?data-vl-wide=${wide}\n    ?data-vl-narrow=${narrow}\n    ?data-vl-loading=${loading}\n    ?disabled=${disabled}\n    @change=${(event: any) => change(event.detail)}\n    @click=${(event: any) => {\n  click(event);\n  const toggleButton = getToggleButton();\n  toggleButton.active = !toggleButton.active;\n}}\n    data-cy="toggle-button-controlled"\n    >${content}\n</vl-toggle-button>`',...b.parameters?.docs?.source}}}}}]);