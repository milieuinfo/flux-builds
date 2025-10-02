import{n as c,aP as h,B as u,aL as p,aH as v,q as b,aI as y,aN as f,T as o,aO as g,x as m,m as k}from"./iframe-CflcmDUD.js";const _=c`
    .vl-radio--disabled .vl-radio__toggle:checked + .vl-radio__label::before {
        background-color: #fff;
    }
    .vl-radio__toggle:read-only + .vl-radio__label::before {
        pointer-events: none !important;
    }
`,e={id:"radio",name:"",value:null,label:"",block:!1,readonly:!1,disabled:!1,error:!1,success:!1,checked:!1};var $=Object.getOwnPropertyDescriptor,w=(t,s,n,r)=>{for(var a=r>1?void 0:r?$(s,n):s,l=t.length-1,d;l>=0;l--)(d=t[l])&&(a=d(a)||a);return a};let i=class extends u{constructor(){super(...arguments),this.id=e.id,this.name=e.name,this.value=e.value,this.label=e.label,this.block=e.block,this.readonly=e.readonly,this.disabled=e.disabled,this.error=e.error,this.success=e.success,this.checked=e.checked,this.dispatchInput=!1}static get styles(){return[p,v,b,y,_]}static get properties(){return{id:{type:String},name:{type:String},value:{type:String},label:{type:String},disabled:{type:Boolean},readonly:{type:Boolean},error:{type:Boolean},success:{type:Boolean},block:{type:Boolean},checked:{type:Boolean,reflect:!0}}}updated(t){if(super.updated(t),(t.has("checked")||t.has("value"))&&this.checked){const s={checked:!0,value:this.value};this.dispatchEvent(new CustomEvent("vl-change",{composed:!0,bubbles:!0,detail:s})),this.dispatchInput&&(this.dispatchEvent(new CustomEvent("vl-input",{bubbles:!0,composed:!0,detail:s})),this.dispatchInput=!1),this.dispatchEvent(new CustomEvent("vl-valid",{composed:!0,bubbles:!0,detail:s}))}}render(){const t={"vl-radio":!0,"vl-radio--block":this.block,"vl-radio--disabled":this.disabled,"vl-radio--error":this.error,"vl-radio--success":this.success};return m`
            <label id="radio-label" class=${f(t)} for=${this.id}>
                <input
                    id=${this.id||o}
                    name=${this.name||o}
                    class="vl-radio__toggle"
                    type="radio"
                    aria-label=${this.label||o}
                    .value=${g(this.value)}
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
        `}get validationTarget(){return this.shadowRoot?.querySelector("input")}onChange(){this.checked=!this.checked}onInput(){this.dispatchInput=!0}};i.shadowRootOptions={...h.shadowRootOptions,delegatesFocus:!0};i=w([k("vl-radio")],i);export{i as V,e as r,_ as v};
