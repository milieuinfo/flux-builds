"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[5665],{"../../libs/form/src/next/radio-group/stories/vl-radio.stories.ts":(e,t,a)=>{a.r(t),a.d(t,{RadioDefault:()=>v,__namedExportsOrder:()=>h,default:()=>m});var l=a("../../libs/common/storybook/src/index.ts"),s=a("../../libs/common/utilities/src/index.ts"),o=a("../../node_modules/lit/directives/unsafe-html.js"),r=a("../../node_modules/@storybook/addon-actions/dist/index.mjs"),d=a("../../libs/form/src/next/radio-group/vl-radio.defaults.ts");let n={...l.D8,...d.Q,defaultSlot:"",onVlChange:(0,r.XI)("vl-change"),onVlInput:(0,r.XI)("vl-input"),onVlValid:(0,r.XI)("vl-valid")},i={...(0,l.RN)(!0),id:{name:"id",description:"Het id van het veld.",table:{type:{summary:l.QE.STRING},category:l.R6.ATTRIBUTES,defaultValue:{summary:n.id}}},value:{name:"value",description:"De value van de radio.",table:{type:{summary:l.QE.STRING},category:l.R6.ATTRIBUTES,defaultValue:{summary:n.value}}},name:{name:"name",description:"De naam van het veld.",table:{type:{summary:l.QE.STRING},category:l.R6.ATTRIBUTES,defaultValue:{summary:n.name}}},label:{name:"label",description:"Het label van het veld.<br>Standaard wordt de tekst van het bijhorende label element gebruikt, indien dit niet aanwezig is of geen tekst bevat kan je dit attribuut gebruiken om het label te definiëren.",table:{type:{summary:l.QE.STRING},category:l.R6.ATTRIBUTES,defaultValue:{summary:n.label}}},block:{name:"block",description:"Duidt aan dat de component de volledige breedte van zijn parent mag innemen.",table:{type:{summary:l.QE.BOOLEAN},category:l.R6.ATTRIBUTES,defaultValue:{summary:n.block}}},readonly:{name:"readonly",description:"Duidt aan dat het veld enkel leesbaar is.",table:{type:{summary:l.QE.BOOLEAN},category:l.R6.ATTRIBUTES,defaultValue:{summary:n.readonly}}},disabled:{name:"disabled",description:"Beeldt de component in een disabled state af.",table:{type:{summary:l.QE.BOOLEAN},category:l.R6.ATTRIBUTES,defaultValue:{summary:n.disabled}}},error:{name:"error",description:"Beeldt de component in een error state af.",table:{type:{summary:l.QE.BOOLEAN},category:l.R6.ATTRIBUTES,defaultValue:{summary:n.error}}},success:{name:"success",description:"Beeldt de component in een success state af.",table:{type:{summary:l.QE.BOOLEAN},category:l.R6.ATTRIBUTES,defaultValue:{summary:n.success}}},checked:{name:"checked",description:"Vinkt de radio aan of uit.",table:{type:{summary:l.QE.BOOLEAN},category:l.R6.ATTRIBUTES,defaultValue:{summary:n.checked}}},defaultSlot:{name:"[default]",description:"De content van de radio.",table:{category:l.R6.SLOTS,type:{summary:l.QE.HTML},defaultValue:{summary:n.defaultSlot}}},onVlChange:{name:"vl-change",description:"Event dat afgevuurd wordt als de radio aangevinkt of uitgevinkt wordt (zowel programmatorisch als door een gebruiker).<br>Het detail object van het event bevat de checked state en de waarde van de radio.",table:{type:{summary:"{ checked: boolean, value?: string }"},category:l.R6.EVENTS}},onVlInput:{name:"vl-input",description:"Event dat afgevuurd wordt als de radio aangevinkt wordt.<br>Het detail object van het event bevat de checked state en de waarde van de radio.",table:{type:{summary:"{ checked: boolean, value?: string }"},category:l.R6.EVENTS}},onVlValid:{name:"vl-valid",description:"Event dat afgevuurd wordt als de radio aangevinkt wordt.<br>Het detail object van het event bevat de checked state en de waarde van de radio.",table:{type:{summary:"{ checked: boolean, value?: string }"},category:l.R6.EVENTS}}};var c=a("../../node_modules/lit/index.js"),u=a("../../libs/form/src/next/radio-group/vl-radio.component.ts");(0,s.gy)([u.Z]);let m={id:"form-next-radio-group",title:"Form-next/radio-group",tags:["autodocs"],args:n,argTypes:i},v=(0,l._7)(n,({id:e,name:t,label:a,block:l,readonly:s,checked:r,disabled:d,error:n,success:i,value:u,defaultSlot:m,onVlChange:v,onVlInput:h,onVlValid:b})=>(0,c.qy)`
        <vl-radio-next
            id=${e}
            name=${t}
            label=${a}
            value=${u}
            ?block=${l}
            ?readonly=${s}
            ?checked=${r}
            ?disabled=${d}
            ?error=${n}
            ?success=${i}
            @vl-change=${v}
            @vl-input=${h}
            @vl-valid=${b}
        >
            ${(0,o._)(m)}
        </vl-radio-next>
    `);v.storyName="vl-radio-next - default",v.args={value:"Optie 1",defaultSlot:"Optie 1"},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:"story(radioArgs, ({\n  id,\n  name,\n  label,\n  block,\n  readonly,\n  checked,\n  disabled,\n  error,\n  success,\n  value,\n  defaultSlot,\n  onVlChange,\n  onVlInput,\n  onVlValid\n}) => html`\n        <vl-radio-next\n            id=${id}\n            name=${name}\n            label=${label}\n            value=${value}\n            ?block=${block}\n            ?readonly=${readonly}\n            ?checked=${checked}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?success=${success}\n            @vl-change=${onVlChange}\n            @vl-input=${onVlInput}\n            @vl-valid=${onVlValid}\n        >\n            ${unsafeHTML(defaultSlot)}\n        </vl-radio-next>\n    `)",...v.parameters?.docs?.source}}};let h=["RadioDefault"]},"../../node_modules/lit-html/directives/unsafe-html.js":(e,t,a)=>{a.d(t,{_:()=>r});var l=a("../../node_modules/lit-html/lit-html.js"),s=a("../../node_modules/lit-html/directive.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class o extends s.WL{constructor(e){if(super(e),this.et=l.s6,e.type!==s.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===l.s6||null==e)return this.vt=void 0,this.et=e;if(e===l.c0)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;var t=[e];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}}o.directiveName="unsafeHTML",o.resultType=1;var r=(0,s.u$)(o)},"../../node_modules/lit/directives/unsafe-html.js":(e,t,a)=>{a.d(t,{_:()=>l._});var l=a("../../node_modules/lit-html/directives/unsafe-html.js")},"../../libs/form/src/next/radio-group/vl-radio.component.ts":(e,t,a)=>{a.d(t,{Z:()=>m});var l=a("../../libs/common/utilities/src/index.ts"),s=a("../../libs/elements/src/index.ts"),o=a("../../node_modules/@domg/govflanders-style/common/index.js"),r=a("../../node_modules/@domg/govflanders-style/component/index.js"),d=a("../../node_modules/lit/index.js"),n=a("../../node_modules/lit/directives/class-map.js"),i=a("../../node_modules/lit/directives/live.js"),c=a("../../libs/form/src/next/radio-group/vl-radio.component.uig-css.ts"),u=a("../../libs/form/src/next/radio-group/vl-radio.defaults.ts");class m extends l.jW{static{this.shadowRootOptions={...d.WF.shadowRootOptions,delegatesFocus:!0}}static get styles(){return[o.h8,o.BI,s.hF,r.T9,c.A]}static get properties(){return{id:{type:String},name:{type:String},value:{type:String},label:{type:String},disabled:{type:Boolean},readonly:{type:Boolean},error:{type:Boolean},success:{type:Boolean},block:{type:Boolean},checked:{type:Boolean,reflect:!0}}}updated(e){if(super.updated(e),(e.has("checked")||e.has("value"))&&this.checked){let e={checked:!0,value:this.value};this.dispatchEvent(new CustomEvent("vl-change",{composed:!0,bubbles:!0,detail:e})),this.dispatchInput&&(this.dispatchEvent(new CustomEvent("vl-input",{bubbles:!0,composed:!0,detail:e})),this.dispatchInput=!1),this.dispatchEvent(new CustomEvent("vl-valid",{composed:!0,bubbles:!0,detail:e}))}}render(){let e={"vl-radio":!0,"vl-radio--block":this.block,"vl-radio--disabled":this.disabled,"vl-radio--error":this.error,"vl-radio--success":this.success};return(0,d.qy)`
            <label id="radio-label" class=${(0,n.H)(e)} for=${this.id}>
                <input
                    id=${this.id||d.s6}
                    name=${this.name||d.s6}
                    class="vl-radio__toggle"
                    type="radio"
                    aria-label=${this.label||d.s6}
                    .value=${(0,i.V)(this.value)}
                    .checked=${this.checked}
                    ?disabled=${this.disabled}
                    ?readonly=${this.readonly}
                    @change=${this.onChange}
                    @input=${this.onInput}
                />
                <div class="vl-radio__label">
                    <span id="label-text">
                        <slot></slot>
                    </span>
                </div>
            </label>
        `}get validationTarget(){return this.shadowRoot?.querySelector("input")}onChange(){this.checked=!this.checked}onInput(){this.dispatchInput=!0}constructor(...e){super(...e),this.id=u.Q.id,this.name=u.Q.name,this.value=u.Q.value,this.label=u.Q.label,this.block=u.Q.block,this.readonly=u.Q.readonly,this.disabled=u.Q.disabled,this.error=u.Q.error,this.success=u.Q.success,this.checked=u.Q.checked,this.dispatchInput=!1}}m=function(e,t,a,l){var s,o=arguments.length,r=o<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,a):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,l);else for(var d=e.length-1;d>=0;d--)(s=e[d])&&(r=(o<3?s(r):o>3?s(t,a,r):s(t,a))||r);return o>3&&r&&Object.defineProperty(t,a,r),r}([(0,l.M1)("vl-radio-next")],m)},"../../libs/form/src/next/radio-group/vl-radio.component.uig-css.ts":(e,t,a)=>{a.d(t,{A:()=>s});var l=a("../../node_modules/lit/index.js");let s=(0,l.AH)`
    .vl-radio--disabled .vl-radio__toggle:checked + .vl-radio__label::before {
        background-color: #fff;
    }
    .vl-radio__toggle:read-only + .vl-radio__label::before {
        pointer-events: none !important;
    }
`},"../../libs/form/src/next/radio-group/vl-radio.defaults.ts":(e,t,a)=>{a.d(t,{Q:()=>l});let l={id:"radio",name:"",value:null,label:"",block:!1,readonly:!1,disabled:!1,error:!1,success:!1,checked:!1}}}]);