"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[1655],{"./libs/components/src/toggle-button/stories/vl-toggle-button.stories.ts":(t,e,a)=>{a.r(e),a.d(e,{__namedExportsOrder:()=>p,default:()=>v,toggleButtonControlled:()=>m,toggleButtonDefault:()=>g,toggleButtonWithIcon:()=>b});var n=a("./node_modules/lit-html/lit-html.js");a("./libs/components/src/toggle-button/vl-toggle-button.component.ts");var o=a("./libs/components/src/toggle-button/vl-toggle-button.model.ts"),r=a("./libs/common/storybook/src/index.ts"),l=a("./node_modules/@storybook/addon-actions/dist/index.mjs");let i={...r._O,loading:!1,disabled:!1,error:!1,block:!1,large:!1,wide:!1,narrow:!1,content:null},s={...(0,r.Wp)(),disabled:{description:"Used to indicate to the user that the functionality is not active.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},error:{name:"data-vl-error",description:"Used to emphasize the importance or consequences of an action.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},block:{name:"data-vl-block",description:"Used to ensure that the button is shown as a block element and will therefore take the width of the parent.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},large:{name:"data-vl-large",description:"Used to grab the user's attention by increasing the font size.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},wide:{name:"data-vl-wide",description:"Makes the button appear wider on the screen.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},narrow:{name:"data-vl-narrow",description:"Causes the button to appear narrower on the screen.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},loading:{name:"data-vl-loading",description:"Used to indicate to the user that their action is currently being processed.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},content:{name:"content (for demo purposes)",table:{type:{summary:"String"}}}},d={...i,active:!1,icon:void 0,iconPlacement:void 0,content:"Toggle button",textHidden:!1,disabled:!1,click:(0,l.aD)("click"),change:(0,l.aD)("change")},c={...s,active:{name:"active",description:"Controls the active state of the toggle button.",table:{type:{summary:"Boolean"},category:"Properties"},control:{disabled:!0}},icon:{name:"data-vl-icon",type:{name:r.vK.STRING,required:!1},description:"Sets the icon of the toggle button.",table:{type:{summary:r.vK.STRING},category:"Attributes"}},iconPlacement:{name:"data-vl-icon-placement",description:"Determines where the icon should be rendered before or after the text.",table:{type:{summary:`${o.T.BEFORE} | ${o.T.AFTER}`},category:"Attributes",defaultValue:{summary:o.T.AFTER}},control:{type:"select",options:[o.T.BEFORE,o.T.AFTER]}},textHidden:{name:"data-vl-text-hidden",description:"Determines whether the toggle button text is shown.",table:{type:{summary:"Boolean"},category:"Attributes",defaultValue:{summary:"false"}}},change:{name:"change",description:"Custom event that is triggered when the active state of the toggle button changes.",table:{category:"Events"}},click:{name:"click",description:"Event fired on click of the toggle button.",table:{category:"Events"}}},u=t=>{let[e]=[...Array(document.querySelectorAll(t))].slice(-1);return e},v={title:"Components/toggle-button",tags:["autodocs"],args:d,argTypes:c},g=({active:t,icon:e,iconPlacement:a,textHidden:o,error:r,block:l,large:i,wide:s,narrow:d,loading:c,disabled:u,change:v,click:g,content:b})=>(0,n.dy)` <vl-toggle-button
        .active=${t}
        data-vl-icon=${e}
        data-vl-icon-placement=${a}
        ?data-vl-text-hidden=${o}
        ?data-vl-error=${r}
        ?data-vl-block=${l}
        ?data-vl-large=${i}
        ?data-vl-wide=${s}
        ?data-vl-narrow=${d}
        ?data-vl-loading=${c}
        ?disabled=${u}
        @change=${t=>v(t.detail)}
        @click=${t=>{g(t)}}
        data-cy="toggle-button"
        >${b}
    </vl-toggle-button>`;g.storyName="vl-toggle-button - default";let b=({active:t,icon:e,iconPlacement:a,textHidden:o,error:r,block:l,large:i,wide:s,narrow:d,loading:c,disabled:u,change:v,click:g,content:b})=>(0,n.dy)` <vl-toggle-button
        .active=${t}
        data-vl-icon=${e}
        data-vl-icon-placement=${a}
        ?data-vl-text-hidden=${o}
        ?data-vl-error=${r}
        ?data-vl-block=${l}
        ?data-vl-large=${i}
        ?data-vl-wide=${s}
        ?data-vl-narrow=${d}
        ?data-vl-loading=${c}
        ?disabled=${u}
        @change=${t=>v(t.detail)}
        @click=${t=>{g(t)}}
        data-cy="toggle-button-with-icon"
        >${b}
    </vl-toggle-button>`;b.storyName="vl-toggle-button - with icon",b.args={icon:"pencil",iconPlacement:o.T.AFTER};let h=()=>u("vl-toggle-button"),m=({active:t,icon:e,iconPlacement:a,textHidden:o,error:r,block:l,large:i,wide:s,narrow:d,loading:c,disabled:u,change:v,click:g,content:b})=>(0,n.dy)` <vl-toggle-button
    .active=${t}
    data-vl-icon=${e}
    data-vl-icon-placement=${a}
    ?data-vl-text-hidden=${o}
    ?data-vl-error=${r}
    ?data-vl-block=${l}
    ?data-vl-large=${i}
    ?data-vl-wide=${s}
    ?data-vl-narrow=${d}
    ?data-vl-loading=${c}
    ?disabled=${u}
    @change=${t=>v(t.detail)}
    @click=${t=>{g(t);let e=h();e.active=!e.active}}
    data-cy="toggle-button-controlled"
    >${b}
</vl-toggle-button>`;m.storyName="vl-toggle-button - controlled",m.args={active:!1},m.argTypes={active:{control:{disabled:!1}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:'({\n  active,\n  icon,\n  iconPlacement,\n  textHidden,\n  error,\n  block,\n  large,\n  wide,\n  narrow,\n  loading,\n  disabled,\n  change,\n  click,\n  content\n}: typeof toggleButtonArgs) => html` <vl-toggle-button\n        .active=${active}\n        data-vl-icon=${icon}\n        data-vl-icon-placement=${iconPlacement}\n        ?data-vl-text-hidden=${textHidden}\n        ?data-vl-error=${error}\n        ?data-vl-block=${block}\n        ?data-vl-large=${large}\n        ?data-vl-wide=${wide}\n        ?data-vl-narrow=${narrow}\n        ?data-vl-loading=${loading}\n        ?disabled=${disabled}\n        @change=${(event: any) => change(event.detail)}\n        @click=${(event: any) => {\n  click(event);\n}}\n        data-cy="toggle-button"\n        >${content}\n    </vl-toggle-button>`',...g.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:'({\n  active,\n  icon,\n  iconPlacement,\n  textHidden,\n  error,\n  block,\n  large,\n  wide,\n  narrow,\n  loading,\n  disabled,\n  change,\n  click,\n  content\n}: typeof toggleButtonArgs) => html` <vl-toggle-button\n        .active=${active}\n        data-vl-icon=${icon}\n        data-vl-icon-placement=${iconPlacement}\n        ?data-vl-text-hidden=${textHidden}\n        ?data-vl-error=${error}\n        ?data-vl-block=${block}\n        ?data-vl-large=${large}\n        ?data-vl-wide=${wide}\n        ?data-vl-narrow=${narrow}\n        ?data-vl-loading=${loading}\n        ?disabled=${disabled}\n        @change=${(event: any) => change(event.detail)}\n        @click=${(event: any) => {\n  click(event);\n}}\n        data-cy="toggle-button-with-icon"\n        >${content}\n    </vl-toggle-button>`',...b.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:'({\n  active,\n  icon,\n  iconPlacement,\n  textHidden,\n  error,\n  block,\n  large,\n  wide,\n  narrow,\n  loading,\n  disabled,\n  change,\n  click,\n  content\n}: typeof toggleButtonArgs) => html` <vl-toggle-button\n    .active=${active}\n    data-vl-icon=${icon}\n    data-vl-icon-placement=${iconPlacement}\n    ?data-vl-text-hidden=${textHidden}\n    ?data-vl-error=${error}\n    ?data-vl-block=${block}\n    ?data-vl-large=${large}\n    ?data-vl-wide=${wide}\n    ?data-vl-narrow=${narrow}\n    ?data-vl-loading=${loading}\n    ?disabled=${disabled}\n    @change=${(event: any) => change(event.detail)}\n    @click=${(event: any) => {\n  click(event);\n  const toggleButton = getToggleButton();\n  toggleButton.active = !toggleButton.active;\n}}\n    data-cy="toggle-button-controlled"\n    >${content}\n</vl-toggle-button>`',...m.parameters?.docs?.source}}};let p=["toggleButtonDefault","toggleButtonWithIcon","toggleButtonControlled"]},"./node_modules/lit-html/directive.js":(t,e,a)=>{a.d(e,{XM:()=>o,Xe:()=>r,pX:()=>n});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},o=t=>function(){for(var e=arguments.length,a=Array(e),n=0;n<e;n++)a[n]=arguments[n];return{_$litDirective$:t,values:a}};class r{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,a){this._$Ct=t,this._$AM=e,this._$Ci=a}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},"./node_modules/lit/decorators.js":(t,e,a)=>{a.d(e,{Mo:()=>n,Cb:()=>d});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n=t=>(e,a)=>{void 0!==a?a.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},o=a("./node_modules/lit/node_modules/@lit/reactive-element/reactive-element.js");function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach(function(e){!function(t,e,a){(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var a=t[Symbol.toPrimitive];if(void 0!==a){var n=a.call(t,e||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a}(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var i={attribute:!0,type:String,converter:o.Ts,reflect:!1,hasChanged:o.Qu},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,e=arguments.length>1?arguments[1]:void 0,a=arguments.length>2?arguments[2]:void 0,{kind:n,metadata:o}=a,r=globalThis.litPropertyMetadata.get(o);if(void 0===r&&globalThis.litPropertyMetadata.set(o,r=new Map),r.set(a.name,t),"accessor"===n){var{name:l}=a;return{set(a){var n=e.get.call(this);e.set.call(this,a),this.requestUpdate(l,n,t)},init(e){return void 0!==e&&this.C(l,void 0,t),e}}}if("setter"===n){var{name:s}=a;return function(a){var n=this[s];e.call(this,a),this.requestUpdate(s,n,t)}}throw Error("Unsupported decorator location: "+n)};function d(t){return(e,a)=>"object"==typeof a?s(t,e,a):((t,e,a)=>{var n=e.hasOwnProperty(a);return e.constructor.createProperty(a,n?l(l({},t),{},{wrapped:!0}):t),n?Object.getOwnPropertyDescriptor(e,a):void 0})(t,e,a)}},"./node_modules/lit/directives/class-map.js":(t,e,a)=>{a.d(e,{$:()=>r});var n=a("./node_modules/lit-html/lit-html.js"),o=a("./node_modules/lit-html/directive.js"),r=(0,o.XM)(class extends o.Xe{constructor(t){var e;if(super(t),t.type!==o.pX.ATTRIBUTE||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,e){var[a]=e;if(void 0===this.it){for(var o in this.it=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t))),a)a[o]&&!(null!==(s=this.st)&&void 0!==s&&s.has(o))&&this.it.add(o);return this.render(a)}var r=t.element.classList;for(var l of this.it)l in a||(r.remove(l),this.it.delete(l));for(var i in a){var s,d,c=!!a[i];c===this.it.has(i)||(null===(d=this.st)||void 0===d?void 0:d.has(i))||(c?(r.add(i),this.it.add(i)):(r.remove(i),this.it.delete(i)))}return n.Jb}})},"./libs/components/src/toggle-button/vl-toggle-button.component.ts":(t,e,a)=>{a.d(e,{e:()=>v});var n=a("./libs/common/utilities/src/index.ts"),o=a("./libs/elements/src/index.ts"),r=a("./node_modules/@domg/govflanders-style/common/index.js"),l=a("./node_modules/@domg/govflanders-style/component/index.js"),i=a("./node_modules/lit/index.js"),s=a("./node_modules/lit/decorators.js"),d=a("./node_modules/lit/directives/class-map.js"),c=a("./libs/components/src/toggle-button/vl-toggle-button.model.ts");let u=(0,i.iv)`
    .vl-button--map.vl-button--tertiary {
        background-color: #fff;
    }
    .vl-button--map.vl-button--tertiary:hover,
    .vl-button--map.vl-button--tertiary:active {
        background-color: #fff;
    }
`;class v extends n.fS{static{(0,n.YV)([o.d7,o.Gi,o.yK])}static get properties(){return{icon:{type:String,attribute:"data-vl-icon",reflect:!0},iconPlacement:{type:String,attribute:"data-vl-icon-placement",reflect:!0},textHidden:{type:Boolean,attribute:"data-vl-text-hidden",reflect:!0},error:{type:Boolean,attribute:"data-vl-error",reflect:!0},block:{type:Boolean,attribute:"data-vl-block",reflect:!0},large:{type:Boolean,attribute:"data-vl-large",reflect:!0},wide:{type:Boolean,attribute:"data-vl-wide",reflect:!0},narrow:{type:Boolean,attribute:"data-vl-narrow",reflect:!0},loading:{type:Boolean,attribute:"data-vl-loading",reflect:!0},disabled:{type:Boolean,attribute:"disabled",reflect:!0},_active:{type:Boolean,state:!0},active:{type:Boolean||void 0}}}static get styles(){return[r.YN,l.jn,u,r.PC,l.oQ]}createRenderRoot(){let t=super.createRenderRoot();return t.addEventListener("click",t=>{let{disabled:e}=this;e&&t.stopPropagation()}),t}constructor(){super(),this.icon="",this.iconPlacement="",this.textHidden=!1,this.error=!1,this.block=!1,this.large=!1,this.wide=!1,this.narrow=!1,this.loading=!1,this.disabled=!1,this.isInMap=!1,this._active=!1,this.active=void 0,this.iconPlacement=c.T.AFTER,this.textHidden=!1,this.disabled=!1}_isControlled(){return void 0!==this.active}_fireChange(){this.dispatchEvent(new CustomEvent("change",{detail:{isActive:this._active}}))}updated(t){t.forEach((t,e)=>{switch(e){case"active":this._isControlled()&&(this._active=this.active);break;case"_active":(!this._isControlled()||this._isControlled()&&void 0!==t)&&this._fireChange()}})}_buttonWrap(t){return(0,i.dy)`
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
        `}_iconTemplate(){return this.textHidden?(0,i.dy)`${this._buttonWrap((0,i.dy)`<span is="vl-icon" data-vl-icon=${this.icon}></span>
                    <span is="vl-text" data-vl-visually-hidden><slot></slot></span>`)}`:this.iconPlacement===c.T.BEFORE?(0,i.dy)`${this._buttonWrap((0,i.dy)`<span is="vl-icon" data-vl-icon=${this.icon} data-vl-before></span> <slot></slot>`)}`:(0,i.dy)`${this._buttonWrap((0,i.dy)` <slot></slot><span is="vl-icon" data-vl-icon=${this.icon} data-vl-after></span>`)}`}render(){return this.icon?this._iconTemplate():(0,i.dy)`${this._buttonWrap((0,i.dy)` <slot></slot>`)}`}}v=function(t,e,a,n){var o,r=arguments.length,l=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,a,n);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(l=(r<3?o(l):r>3?o(e,a,l):o(e,a))||l);return r>3&&l&&Object.defineProperty(e,a,l),l}([(0,s.Mo)("vl-toggle-button")],v)},"./libs/components/src/toggle-button/vl-toggle-button.model.ts":(t,e,a)=>{a.d(e,{T:()=>n});let n={BEFORE:"before",AFTER:"after"}}}]);