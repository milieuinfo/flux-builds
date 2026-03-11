import{_ as c,aQ as h,aU as p,aV as d,aW as m,aS as v,aX as b,T as e,K as g,aY as y,x,w as f}from"./iframe-BWsn3Pr7.js";const a={...c,block:!1,readonly:!1,value:"",placeholder:"",autocomplete:"",minLength:null,maxLength:null,rows:null,cols:null};var $=Object.getOwnPropertyDescriptor,w=(t,s,u,o)=>{for(var l=o>1?void 0:o?$(s,u):s,r=t.length-1,n;r>=0;r--)(n=t[r])&&(l=n(l)||l);return l};let i=class extends h{constructor(){super(...arguments),this.block=a.block,this.readonly=a.readonly,this.value=a.value,this.placeholder=a.placeholder,this.autocomplete=a.autocomplete,this.minLength=a.minLength,this.maxLength=a.maxLength,this.rows=a.rows,this.cols=a.cols,this.initialValue="",this.dispatchInput=!1}static get styles(){return[m,v,b]}static get properties(){return{block:{type:Boolean},readonly:{type:Boolean},value:{type:String,reflect:!0},placeholder:{type:String},autocomplete:{type:String},minLength:{type:Number,attribute:"min-length"},maxLength:{type:Number,attribute:"max-length"},rows:{type:Number},cols:{type:Number}}}connectedCallback(){super.connectedCallback(),this.initialValue||(this.initialValue=this.value)}updated(t){if(super.updated(t),t.has("value")){const s={value:this.value};this.setValue(this.value),this.dispatchEvent(new CustomEvent("vl-change",{composed:!0,bubbles:!0,detail:s})),this.dispatchInput&&(this.dispatchEvent(new CustomEvent("vl-input",{composed:!0,bubbles:!0,detail:s})),this.dispatchInput=!1),this.dispatchEventIfValid(s)}}render(){const t={"vl-textarea":!0,"vl-textarea--disabled":this.disabled,"vl-textarea--error":this.isInvalid||this.error,"vl-textarea--success":this.success,"vl-textarea--block":this.block};return x`
            <textarea
                id=${this.id||e}
                name=${this.name||e}
                class=${g(t)}
                aria-label=${this.label||e}
                aria-invalid=${this.isInvalid||e}
                ?required=${this.required}
                ?disabled=${this.disabled}
                ?error=${this.error}
                ?readonly=${this.readonly}
                .value=${y(this.value)}
                placeholder=${this.placeholder||e}
                autocomplete=${this.autocomplete||e}
                minlength=${this.minLength??e}
                maxlength=${this.maxLength??e}
                rows=${this.rows??e}
                cols=${this.cols??e}
                @input=${this.onInput}
            />
        `}get validationTarget(){return this.shadowRoot?.querySelector("textarea")}resetFormControl(){super.resetFormControl(),this.value=this.initialValue}onKeydown(t){t.key==="Enter"&&(t.bubbles=!1),super.onKeydown(t)}onInput(t){this.dispatchInput=!0,this.value=t?.target?.value}};i.formControlValidators=[...h.formControlValidators,p,d];i=w([f("vl-textarea")],i);export{i as V,a as t};
