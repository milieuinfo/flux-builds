import{i as c,B as g,a$ as h,aS as v,F as a,x as u,w as f}from"./iframe-CY-ZM549.js";const p=c`
    fieldset {
        display: block;
        border: none;
        font-size: inherit;
        font-family: inherit;
        font-weight: inherit;
        color: inherit;
        line-height: inherit;
        padding: 0;
        margin: 0;
    }
    
    .vl-fieldset {
        &.vl-fieldset--border {
            & > slot {
                display: block;
                border: 1px solid var(--vl-color--border-default);
                padding: var(--vl-spacing--normal);
                border-radius: var(--vl-border--radius);
            }
        }
    }
`,n={border:!1,horizontal:!1,legendClasses:"vl-column--4"};var b=Object.getOwnPropertyDescriptor,m=(e,t,l,s)=>{for(var r=s>1?void 0:s?b(t,l):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(r=i(r)||r);return r};let d=class extends g{constructor(){super(...arguments),this.border=n.border,this.horizontal=n.horizontal,this.legendClasses=n.legendClasses,this.legendText="",this.onLegendClick=e=>{e.preventDefault(),this.getFirstFocusableElement()?.focus()}}static get styles(){return[...h,p,v]}static get properties(){return{border:{type:Boolean},horizontal:{type:Boolean},legendClasses:{type:String,attribute:"legend-classes"},legendText:{type:String,state:!0}}}firstUpdated(e){super.firstUpdated(e);const t=this.shadowRoot?.querySelector('slot[name="legend"]');(!t||t.assignedNodes().length===0)&&console.warn('vl-fieldset: De "legend" slot is vereist.')}getFirstFocusableElement(){const e=["vl-input-field","vl-checkbox","vl-radio","vl-datepicker","vl-select","vl-select-rich","vl-textarea","vl-textarea-rich","vl-upload"];return this.querySelector(e.map(t=>`${t}:not([disabled])`).join(","))}onLegendSlotChange(e){const t=e.target;this.legendText=t.assignedNodes().map(l=>l.textContent).join("")}render(){const e={"vl-fieldset":!0,"vl-fieldset--border":this.border,"vl-grid":this.horizontal},t={"vl-fieldset__legend":!0,"vl-column":this.horizontal,"vl-column--s-12":this.horizontal,...this.legendClasses.split(" ").reduce((l,s)=>({...l,[s]:!0}),{})};return u`
            <fieldset class=${a(e)}>
                <legend class="vl-visually-hidden">${this.legendText}</legend>
                <vl-form-label class=${a(t)} @click="${this.onLegendClick}" aria-hidden="true">
                    <slot name="legend" @slotchange=${this.onLegendSlotChange}></slot>
                </vl-form-label>
                <slot></slot>
            </fieldset>
        `}};d=m([f("vl-fieldset")],d);export{d as V,n as f};
