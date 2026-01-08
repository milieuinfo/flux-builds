import{z as h,N as v,aG as b,aM as g,aI as m,cf as f,aO as p,T as i,aP as O,x as a,y}from"./iframe-C7eocPW2.js";const $=h`
    .vl-select {
        background-color: #fff;
        appearance: none;
        display: inline-block;
        position: relative;
        padding: 0 4rem 0 1.5rem;
        max-width: 100%;
        height: 3.5rem;
        line-height: calc(3.5rem - 0.2rem);
        border: 1px solid #8695a8;
        border-radius: 0.3rem;
        text-decoration: none;
        color: #333332;
        font-family: 'Flanders Art Sans', sans-serif;
        font-size: 1.6rem;
        -webkit-appearance: none;
    }

    .vl-select:focus::-ms-value {
        background: inherit;
        color: inherit;
    }

    .vl-select::-ms-expand {
        display: none;
    }

    .vl-select:hover:not([disabled]) {
        border: 0.2rem solid rgba(0, 85, 204, 0.65);
        padding: 0 3.9rem 0 1.4rem;
        line-height: 3.2rem;
        background-position: calc(100% - 1.4rem) 50%;
    }

    .vl-select:hover:not([disabled]).vl-select--error {
        border-color: #d2373c;
    }

    .vl-select:hover:not([disabled]).vl-select--success {
        border-color: #009e47;
    }

    .vl-select:focus {
        box-shadow: 0 0 0 2px #fff, 0 0 0 5px rgba(0, 85, 204, 0.65);
        outline: transparent solid 0.2rem;
    }

    @supports (outline-offset: 2px) {
        .vl-select:focus {
            box-shadow: none;
            outline: 3px solid rgba(0, 85, 204, 0.65);
            outline-offset: 2px;
        }
    }

    .vl-select[disabled],
    .vl-select--disabled {
        border-color: #8695a8;
        background-color: #f3f5f6;
        color: var(--vl-theme-fg-color-70);
    }

    .vl-select--error {
        border-color: #d2373c;
        background-color: #fbebec;
    }

    .vl-select--success {
        border-color: #009e47;
        background-color: #e6f5ed;
    }

    .vl-select--block {
        display: block;
        width: 100%;
    }

    @media screen and (max-width: 767px) {
        .vl-select {
            height: 3.5rem;
            line-height: 3.5rem;
            font-size: 1.6rem;
        }
    }

    @media all and (min-width: 0\\0) and (min-resolution: 0.001dpcm) {
        .vl-select {
            padding-right: 0;
            background-image: none;
        }
    }
`,_=h`
    .vl-select {
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .vl-select__container {
        position: relative;
        display: inline-block;
    }

    .vl-select__container.vl-select__container--block {
        display: block;
    }

    .vl-select:has(option.vl-select__placeholder[selected]) {
        color: #687483 !important;
    }

    .vl-select.vl-select--disabled ~ .vl-select__button {
        display: none;
    }

    .vl-select ~ .vl-select__button {
        color: #05c;
        position: absolute;
        width: 2.4rem;
        height: 2.4rem;
        top: 0.6rem;
        right: 3.6rem;
        font-size: 1.4rem;
        border-radius: 0.3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;

        span.vl-icon:before {
            margin-top: -0.2rem;
        }

        &:hover,
        &:focus {
            border: #05c 0.1rem solid;
            background-color: #e6eefa;
            color: #003bb0;
            outline: none;
        }
    }

    .vl-select:not(.vl-select--disabled) {
        &:has(~ .vl-select__button) {
            padding-right: 6rem;
            &:hover {
                padding-right: 5.9rem;
                &:focus {
                    padding-right: 6rem;
                }
            }
        }

        &:focus:hover {
            border-width: 0.1rem;
            padding-right: 4rem;
            padding-left: 1.5rem;
        }
    }

    .vl-vi.vl-vi-nav-down:before {
        color: #6e7985;
        position: absolute;
        right: 1.3rem;
        font-size: 1.3rem;
        top: 0.8rem;
        pointer-events: none;
    }

    .slot-container {
        display: none;
    }
`,r={...v,options:[],initialOptions:[],block:!1,placeholder:"",autocomplete:"",notDeletable:!1};var k=Object.getOwnPropertyDescriptor,S=(e,t,s,l)=>{for(var o=l>1?void 0:l?k(t,s):t,n=e.length-1,c;n>=0;n--)(c=e[n])&&(o=c(o)||o);return o};let u=class extends b{constructor(){super(...arguments),this.options=r.options,this.initialOptions=r.initialOptions,this.value="",this.block=r.block,this.placeholder=r.placeholder,this.autocomplete=r.autocomplete,this.notDeletable=r.notDeletable,this.DEFAULT_GROUP_LABEL="Overig",this.dispatchInput=!1,this.parsedOptions=[]}static get styles(){return[g,m,$,f,_]}static get properties(){return{options:{type:Array,attribute:!1},initialOptions:{type:Array,attribute:"initial-options"},block:{type:Boolean},readonly:{type:Boolean},placeholder:{type:String},autocomplete:{type:String},notDeletable:{type:Boolean,attribute:"not-deletable"},value:{type:String}}}get validationTarget(){return this.shadowRoot?.querySelector("select")}connectedCallback(){super.connectedCallback(),this.parseSlottedOptions();const e=this.getSelectedOption();this.value=e?.value||"",this.initialOptions=structuredClone(this.getAllOptions()),this.setupSlotObserver()}disconnectedCallback(){super.disconnectedCallback(),this.slotObserver?.disconnect()}updated(e){if(super.updated(e),e.has("options")){const t=this.getSelectedOption();this.value=t?.value||""}if(e.has("value")){const t={value:this.value};this.setValue(this.value),this.dispatchEvent(new CustomEvent("vl-change",{composed:!0,bubbles:!0,detail:t})),this.dispatchInput&&(this.dispatchEvent(new CustomEvent("vl-input",{bubbles:!0,composed:!0,detail:t})),this.dispatchInput=!1),this.dispatchEventIfValid(t)}}render(){const e={"vl-select__container":!0,"vl-select__container--block":this.block},t={"vl-select":!0,"vl-select--disabled":this.disabled,"vl-select--error":this.isInvalid||this.error,"vl-select--success":this.success,"vl-select--block":this.block},s=!!this.value,l=this.getAllOptions().some(o=>o.group);return a`
            <div class=${p(e)}>
                <select
                    id=${this.id||i}
                    name=${this.name||i}
                    class=${p(t)}
                    aria-label=${this.label||i}
                    aria-invalid=${this.isInvalid||i}
                    ?required=${this.required}
                    ?disabled=${this.disabled}
                    ?aria-disabled=${this.disabled}
                    ?error=${this.error}
                    .value=${O(this.value)}
                    autocomplete=${this.autocomplete||i}
                    @change=${this.onChange}
                    @input=${this.onSelect}
                >
                    ${this.placeholder?this.renderPlaceholder(s):i}
                    ${l?this.renderGroupedOptions():this.renderSelectOptions(this.getAllOptions())}
                </select>
                ${s&&!this.notDeletable?this.renderClearButton():i}
                <span class="vl-icon vl-vi vl-vi-nav-down" aria-hidden="true"></span>
            </div>
            <div class="slot-container">
                <slot @slotchange=${this.onSlotChange}></slot>
            </div>
        `}renderPlaceholder(e){return a` <option class="vl-select__placeholder" value="" ?selected=${!e} disabled>
            ${this.placeholder}
        </option>`}renderClearButton(){return a`
            <button
                type="button"
                class="vl-select__button"
                aria-label=${`Verwijder ${this.label} keuze ${this.getSelectedOption()?.label||this.value||""}`}
                @click=${this.clearValue}
            >
                <span class="vl-icon vl-vi vl-vi-close" aria-hidden="true"></span>
            </button>
        `}renderGroupedOptions(){const e=this.getGroupedOptions();return Object.entries(e).map(([t,s])=>a` <optgroup label=${t}>${this.renderSelectOptions(s)}</optgroup>`)}renderSelectOptions(e){return e.map(t=>a` <option
                value=${t.value}
                ?selected=${this.value===t.value}
                ?disabled=${t.disabled}
            >
                ${t.label||t.value}
            </option>`)}resetFormControl(){super.resetFormControl(),this.options.length>0?this.options=structuredClone(this.initialOptions):this.parseSlottedOptions();const e=this.getSelectedOption();this.value=e?.value||""}onChange(e){this.value=e?.target?.value}onSelect(){this.dispatchInput=!0}clearValue(){this.dispatchInput=!0,this.value=""}onSlotChange(){this.parseSlottedOptions(),this.requestUpdate()}getSelectedOption(){return[...this.getAllOptions()].reverse().find(e=>e.selected)}getGroupedOptions(){return this.getAllOptions().reduce((t,s)=>{const l=s.group||this.DEFAULT_GROUP_LABEL;return t[l]?t[l].push(s):t[l]=[s],t},{})}setupSlotObserver(){this.slotObserver=new MutationObserver(()=>{this.parseSlottedOptions(),this.requestUpdate()}),this.slotObserver.observe(this,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value","label","selected","disabled"]})}parseSlottedOptions(){const e=Array.from(this.children);this.parsedOptions=e.reduce((t,s)=>{if(s.tagName.toLowerCase()==="option")t.push(this.parseOptionElement(s));else if(s.tagName.toLowerCase()==="optgroup"){const l=s.label||this.DEFAULT_GROUP_LABEL,n=Array.from(s.querySelectorAll("option")).map(c=>{const d=this.parseOptionElement(c);return d.group=l,d});t.push(...n)}return t},[])}parseOptionElement(e){return{value:e.value||e.textContent?.trim()||"",label:e.textContent?.trim()||e.value||"",selected:e.selected,disabled:e.disabled}}getAllOptions(){return this.options.length>0?this.options:this.parsedOptions}};u=S([y("vl-select")],u);export{u as V,r as s};
