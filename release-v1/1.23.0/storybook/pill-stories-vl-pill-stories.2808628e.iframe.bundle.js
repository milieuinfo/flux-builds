"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[6949],{"./libs/components/src/pill/stories/vl-pill.stories.ts":(e,t,l)=>{l.r(t),l.d(t,{PillDefault:()=>a,__namedExportsOrder:()=>n,default:()=>r});var i=l("./node_modules/lit-html/lit-html.js");l("./libs/components/src/pill/vl-pill.component.ts");var s=l("./libs/common/storybook/src/index.ts"),o=l("./node_modules/@storybook/addon-actions/dist/index.mjs");let r={title:"Components/pill/pill",tags:["autodocs"],args:{...s._O,closable:!1,checkable:!1,checked:!1,type:"",disabled:!1,close:(0,o.aD)("close"),check:(0,o.aD)("check")},argTypes:{...(0,s.Wp)(),closable:{name:"data-vl-closable",description:"The attribute that determines whether the pill can be removed or not (cannot be used in combination with checkable).",table:{type:{summary:"boolean"},category:"Attributes",defaultValue:{summary:"false"}}},checkable:{name:"data-vl-checkable",description:"The attribute that determines whether the pill can be checked or not (cannot be used in combination with closable).",table:{type:{summary:"boolean"},category:"Attributes",defaultValue:{summary:"false"}}},checked:{name:"checked",description:"The property that determines whether the pill is checked or not.",table:{type:{summary:"boolean"},category:"Properties",defaultValue:{summary:"false"}}},type:{name:"data-vl-type",description:"The attribute that determines the type. ",control:{type:"select",options:["success","warning","error"]},table:{type:{summary:"success | warning | error"},category:"Attributes",defaultValue:{summary:""}}},disabled:{name:"data-vl-disabled",description:"The attribute that determines whether the pill is disabled or not.",table:{type:{summary:"boolean"},category:"Attributes",defaultValue:{summary:"false"}}},close:{name:"close",description:"The custom event that is triggered on click of the pill's close button.",table:{category:"Events"}},check:{name:"check",description:"The custom event that is triggered on input of the pill's checkbox. In the detail of the event you can find whether the pill is getting checked or unchecked.",table:{category:"Events"}}}},a=({closable:e,checkable:t,checked:l,type:s,disabled:o,close:r,check:a})=>(0,i.dy)`
    <vl-pill
        ?data-vl-closable=${e}
        ?data-vl-checkable=${t}
        data-vl-type=${s}
        ?data-vl-disabled=${o}
        .checked=${l}
        @close=${e=>r(e)}
        @check=${e=>a(e.detail)}
        data-cy="pill"
        >Optie 1
    </vl-pill>
`;a.storyName="vl-pill - default",a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:'({\n  closable,\n  checkable,\n  checked,\n  type,\n  disabled,\n  close,\n  check\n}: typeof pillArgs) => html`\n    <vl-pill\n        ?data-vl-closable=${closable}\n        ?data-vl-checkable=${checkable}\n        data-vl-type=${type}\n        ?data-vl-disabled=${disabled}\n        .checked=${checked}\n        @close=${(event: any) => close(event)}\n        @check=${(event: any) => check(event.detail)}\n        data-cy="pill"\n        >Optie 1\n    </vl-pill>\n`',...a.parameters?.docs?.source}}};let n=["PillDefault"]},"./node_modules/lit-html/async-directive.js":(e,t,l)=>{l.d(t,{sR:()=>h});var i=l("./node_modules/lit-html/directive-helpers.js"),s=l("./node_modules/lit-html/directive.js"),o=(e,t)=>{var l,i=e._$AN;if(void 0===i)return!1;for(var s of i)null!==(l=s._$AO)&&void 0!==l&&l.call(s,t,!1),o(s,t);return!0},r=e=>{var t,l,i;do{if(void 0===(t=e._$AM))break;(l=t._$AN).delete(e),e=t}while(0===(null===(i=l)||void 0===i?void 0:i.size))},a=e=>{for(var t;t=e._$AM;e=t){var l=t._$AN;if(void 0===l)t._$AN=l=new Set;else if(l.has(e))break;l.add(e),d(t)}};function n(e){void 0!==this._$AN?(r(this),this._$AM=e,a(this)):this._$AM=e}function c(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=this._$AH,s=this._$AN;if(void 0!==s&&0!==s.size){if(t){if(Array.isArray(i))for(var a=l;a<i.length;a++)o(i[a],!1),r(i[a]);else null!=i&&(o(i,!1),r(i))}else o(this,e)}}var d=e=>{var t,l;e.type==s.pX.CHILD&&(null!==(t=e._$AP)&&void 0!==t||(e._$AP=c),null!==(l=e._$AQ)&&void 0!==l||(e._$AQ=n))};class h extends s.Xe{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,l){super._$AT(e,t,l),a(this),this.isConnected=e._$AU}_$AO(e){var t,l,i=!(arguments.length>1)||void 0===arguments[1]||arguments[1];e!==this.isConnected&&(this.isConnected=e,e?null===(t=this.reconnected)||void 0===t||t.call(this):null===(l=this.disconnected)||void 0===l||l.call(this)),i&&(o(this,e),r(this))}setValue(e){if((0,i.OR)(this._$Ct))this._$Ct._$AI(e,this);else{var t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}},"./node_modules/lit-html/directive.js":(e,t,l)=>{l.d(t,{XM:()=>s,Xe:()=>o,pX:()=>i});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var i={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},s=e=>function(){for(var t=arguments.length,l=Array(t),i=0;i<t;i++)l[i]=arguments[i];return{_$litDirective$:e,values:l}};class o{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,l){this._$Ct=e,this._$AM=t,this._$Ci=l}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},"./node_modules/lit/decorators.js":(e,t,l)=>{l.d(t,{Mo:()=>i,Cb:()=>c});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var i=e=>(t,l)=>{void 0!==l?l.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},s=l("./node_modules/lit/node_modules/@lit/reactive-element/reactive-element.js");function o(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),l.push.apply(l,i)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?o(Object(l),!0).forEach(function(t){!function(e,t,l){(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var l=e[Symbol.toPrimitive];if(void 0!==l){var i=l.call(e,t||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l}(e,t,l[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))})}return e}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var a={attribute:!0,type:String,converter:s.Ts,reflect:!1,hasChanged:s.Qu},n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0,l=arguments.length>2?arguments[2]:void 0,{kind:i,metadata:s}=l,o=globalThis.litPropertyMetadata.get(s);if(void 0===o&&globalThis.litPropertyMetadata.set(s,o=new Map),o.set(l.name,e),"accessor"===i){var{name:r}=l;return{set(l){var i=t.get.call(this);t.set.call(this,l),this.requestUpdate(r,i,e)},init(t){return void 0!==t&&this.C(r,void 0,e),t}}}if("setter"===i){var{name:n}=l;return function(l){var i=this[n];t.call(this,l),this.requestUpdate(n,i,e)}}throw Error("Unsupported decorator location: "+i)};function c(e){return(t,l)=>"object"==typeof l?n(e,t,l):((e,t,l)=>{var i=t.hasOwnProperty(l);return t.constructor.createProperty(l,i?r(r({},e),{},{wrapped:!0}):e),i?Object.getOwnPropertyDescriptor(t,l):void 0})(e,t,l)}},"./node_modules/lit/directives/class-map.js":(e,t,l)=>{l.d(t,{$:()=>o});var i=l("./node_modules/lit-html/lit-html.js"),s=l("./node_modules/lit-html/directive.js"),o=(0,s.XM)(class extends s.Xe{constructor(e){var t;if(super(e),e.type!==s.pX.ATTRIBUTE||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,t){var[l]=t;if(void 0===this.it){for(var s in this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),l)l[s]&&!(null!==(n=this.st)&&void 0!==n&&n.has(s))&&this.it.add(s);return this.render(l)}var o=e.element.classList;for(var r of this.it)r in l||(o.remove(r),this.it.delete(r));for(var a in l){var n,c,d=!!l[a];d===this.it.has(a)||(null===(c=this.st)||void 0===c?void 0:c.has(a))||(d?(o.add(a),this.it.add(a)):(o.remove(a),this.it.delete(a)))}return i.Jb}})},"./node_modules/lit/directives/ref.js":(e,t,l)=>{l.d(t,{V:()=>r,i:()=>c});var i=l("./node_modules/lit-html/lit-html.js"),s=l("./node_modules/lit-html/async-directive.js"),o=l("./node_modules/lit-html/directive.js"),r=()=>new a;class a{}var n=new WeakMap,c=(0,o.XM)(class extends s.sR{render(e){return i.Ld}update(e,t){var l,[s]=t,o=s!==this.G;return o&&void 0!==this.G&&this.ot(void 0),(o||this.rt!==this.lt)&&(this.G=s,this.ct=null===(l=e.options)||void 0===l?void 0:l.host,this.ot(this.lt=e.element)),i.Ld}ot(e){if("function"==typeof this.G){var t,l=null!==(t=this.ct)&&void 0!==t?t:globalThis,i=n.get(l);void 0===i&&(i=new WeakMap,n.set(l,i)),void 0!==i.get(this.G)&&this.G.call(this.ct,void 0),i.set(this.G,e),void 0!==e&&this.G.call(this.ct,e)}else this.G.value=e}get rt(){var e,t,l;return"function"==typeof this.G?null===(e=n.get(null!==(t=this.ct)&&void 0!==t?t:globalThis))||void 0===e?void 0:e.get(this.G):null===(l=this.G)||void 0===l?void 0:l.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}})},"./libs/components/src/pill/vl-pill.component.ts":(e,t,l)=>{l.d(t,{p:()=>v});var i=l("./node_modules/@domg/govflanders-style/component/index.js"),s=l("./node_modules/@domg/govflanders-style/common/index.js"),o=l("./node_modules/lit/index.js"),r=l("./node_modules/lit/decorators.js"),a=l("./node_modules/lit/directives/class-map.js"),n=l("./node_modules/lit/directives/ref.js"),c=l("./libs/components/src/pill/vl-pill.model.ts");let d=(0,o.iv)`
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
`;var h=l("./libs/common/utilities/src/index.ts");class v extends h.fS{static get styles(){return[s.YN,i.im,d,s.Oh,s.PC]}static get properties(){return{disabled:{type:Boolean,attribute:"data-vl-disabled",reflect:!0},type:{type:String,attribute:"data-vl-type",reflect:!0},closable:{type:Boolean,attribute:"data-vl-closable",reflect:!0},checkable:{type:Boolean,attribute:"data-vl-checkable",reflect:!0},checked:{type:Boolean||void 0,attribute:"data-vl-checked",reflect:!0}}}constructor(){super(),this.disabled=!1,this.type="",this.closable=!1,this.checkable=!1,this.isInMap=!1,this.disabled=!1,this.closable=!1,this.checkable=!1,this.checked=!1,this.checkboxRef=(0,n.V)()}updated(e){e.forEach((e,t)=>{"checked"===t&&this.checkboxRef.value&&(this.checkboxRef.value.checked=this.checked)})}render(){let e={"vl-pill":!0,"vl-pill--disabled":this.disabled,"vl-pill--data-vl-disabled":this.disabled,"vl-pill--success":this.type===c.w.SUCCESS,"vl-pill--warning":this.type===c.w.WARNING,"vl-pill--error":this.type===c.w.ERROR,"vl-pill--map":this.isInMap},t={...e,"vl-pill--closable":this.closable},l={...e,"vl-pill--checkable":this.checkable};return this.closable?(0,o.dy)`
                <div class="${(0,a.$)(t)}">
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
            `:this.checkable?(0,o.dy)`
                <label class="${(0,a.$)(l)}" for="checkbox">
                    <input
                        class="vl-pill--checkable__checkbox"
                        type="checkbox"
                        id="checkbox"
                        name="checkbox"
                        ?disabled=${this.disabled}
                        ?checked=${this.checked}
                        ${(0,n.i)(this.checkboxRef)}
                        value="checked"
                        @input=${e=>{this.checked=e.target.checked,this.dispatchEvent(new CustomEvent("check",{bubbles:!0,composed:!0,detail:{checked:this.checked}}))}}
                    />
                    <span></span>
                    <slot></slot>
                </label>
            `:(0,o.dy)`
            <span class="${(0,a.$)(e)}">
                <slot></slot>
            </span>
        `}}v=function(e,t,l,i){var s,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,l):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,l,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o<3?s(r):o>3?s(t,l,r):s(t,l))||r);return o>3&&r&&Object.defineProperty(t,l,r),r}([(0,r.Mo)("vl-pill")],v)},"./libs/components/src/pill/vl-pill.model.ts":(e,t,l)=>{l.d(t,{w:()=>i});let i={SUCCESS:"success",WARNING:"warning",ERROR:"error"}}}]);