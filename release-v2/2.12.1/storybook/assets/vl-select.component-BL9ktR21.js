import{bt as p,i as h,_ as b,br as g,bs as m,K as v,T as r,ce as f,x as a,w as O}from"./iframe-B6HStWZE.js";const S=`:host {
    /* Font sizing (62.5% = 10px base for rem calculations) */
    font-size: 62.5%;

    /* Dimensions */
    --vl-select--height: 3.5rem;
    --vl-select--padding: 0 4rem 0 1.5rem;

    /* Clear button */
    --vl-select--button-color: #0055cc;
    --vl-select--button-hover-bg: #e6eefa;
    --vl-select--button-hover-color: #003bb0;
    --vl-select--button-hover-border: #0055cc;

    /* Nav-down icon */
    --vl-select--nav-icon-color: #6e7985;
}
`,C=h`
    ${p(S)}

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    /* ===================================================================
       Icon Font Base
       =================================================================== */

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

    .vl-vi-nav-down::before {
        content: '\\f21a';
    }

    .vl-vi-close::before {
        content: '\\f162';
    }

    /* ===================================================================
       Select Container
       =================================================================== */

    .vl-select__container {
        position: relative;
        display: inline-block;
    }

    .vl-select__container.vl-select__container--block {
        display: block;
    }

    /* ===================================================================
       Select Base Styles
       =================================================================== */

    .vl-select {
        background-color: var(--vl-color--white);
        appearance: none;
        -webkit-appearance: none;
        display: inline-block;
        position: relative;
        padding: var(--vl-select--padding);
        max-width: 100%;
        height: var(--vl-select--height);
        line-height: calc(var(--vl-select--height) - 0.2rem);
        border: 1px solid var(--vl-color--border-alt);
        border-radius: var(--vl-border--radius);
        text-decoration: none;
        color: var(--vl-color--text);
        font-family: var(--vl-font);
        font-size: var(--vl-font-size--small);
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    @media screen and (max-width: 767px) {
        .vl-select {
            height: var(--vl-select--height);
            line-height: var(--vl-select--height);
            font-size: var(--vl-font-size--small);
        }
    }

    @media all and (min-width: 0\0) and (min-resolution: 0.001dpcm) {
        .vl-select {
            padding-right: 0;
            background-image: none;
        }
    }

    /* ===================================================================
       Select States (Hover, Focus)
       =================================================================== */

    /* Hover state */

    .vl-select:hover:not([disabled]) {
        border: 0.2rem solid var(--vl-color--focus);
        padding: 0 3.9rem 0 1.4rem;
        line-height: 3.2rem;
    }

    .vl-select:hover:not([disabled]).vl-select--error {
        border-color: var(--vl-color--error);
    }

    .vl-select:hover:not([disabled]).vl-select--success {
        border-color: var(--vl-color--success);
    }

    /* Focus state */

    .vl-select:focus {
        box-shadow: var(--vl-focus--shadow);
        outline: transparent solid 0.2rem;
    }

    @supports (outline-offset: 2px) {
        .vl-select:focus {
            box-shadow: none;
            outline: var(--vl-focus--outline);
            outline-offset: var(--vl-focus--outline-offset);
        }
    }

    /* Placeholder color */

    .vl-select:has(option.vl-select__placeholder[selected]) {
        color: var(--vl-color--text-alt) !important;
    }

    /* ===================================================================
       Select With Clear Button — Padding Adjustments
       =================================================================== */

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

    /* ===================================================================
       Select Validation States (Error, Success)
       =================================================================== */

    /* Error state */

    .vl-select--error {
        border-color: var(--vl-color--error);
        background-color: var(--vl-color--error-background);
    }

    /* Success state */

    .vl-select--success {
        border-color: var(--vl-color--success);
        background-color: var(--vl-color--success-bg);
    }

    /* ===================================================================
       Select Disabled State
       =================================================================== */

    .vl-select[disabled],
    .vl-select--disabled {
        border-color: var(--vl-color--border-alt);
        background-color: var(--vl-color--border-alt--background);
        color: var(--vl-color--text-alt);
    }

    .vl-select.vl-select--disabled ~ .vl-select__button {
        display: none;
    }

    /* ===================================================================
       Select Block Variant
       =================================================================== */

    .vl-select--block {
        display: block;
        width: 100%;
    }

    /* ===================================================================
       Clear Button
       =================================================================== */

    .vl-select ~ .vl-select__button {
        color: var(--vl-select--button-color);
        position: absolute;
        width: 2.4rem;
        height: 2.4rem;
        top: 0.6rem;
        right: 3.6rem;
        font-size: 1.4rem;
        border-radius: var(--vl-border--radius);
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;

        span.vl-icon:before {
            margin-top: -0.2rem;
        }

        &:hover,
        &:focus {
            border: var(--vl-select--button-hover-border) 0.1rem solid;
            background-color: var(--vl-select--button-hover-bg);
            color: var(--vl-select--button-hover-color);
            outline: none;
        }
    }

    /* ===================================================================
       Nav-Down Icon
       =================================================================== */

    .vl-vi.vl-vi-nav-down:before {
        color: var(--vl-select--nav-icon-color);
        position: absolute;
        right: 1.3rem;
        font-size: 1.3rem;
        top: 0.8rem;
        pointer-events: none;
    }

    /* ===================================================================
       Slot Container (Hidden)
       =================================================================== */

    .slot-container {
        display: none;
    }
`,i={...b,options:[],initialOptions:[],block:!1,placeholder:"",autocomplete:"",notDeletable:!1};var y=Object.getOwnPropertyDescriptor,w=(e,t,l,o)=>{for(var s=o>1?void 0:o?y(t,l):t,n=e.length-1,c;n>=0;n--)(c=e[n])&&(s=c(s)||s);return s};let u=class extends g{constructor(){super(...arguments),this.options=i.options,this.initialOptions=i.initialOptions,this.value="",this.block=i.block,this.placeholder=i.placeholder,this.autocomplete=i.autocomplete,this.notDeletable=i.notDeletable,this.DEFAULT_GROUP_LABEL="Overig",this.dispatchInput=!1,this.parsedOptions=[]}static get styles(){return[m,C]}static get properties(){return{options:{type:Array,attribute:!1},initialOptions:{type:Array,attribute:"initial-options"},block:{type:Boolean},readonly:{type:Boolean},placeholder:{type:String},autocomplete:{type:String},notDeletable:{type:Boolean,attribute:"not-deletable"},value:{type:String}}}get validationTarget(){return this.shadowRoot?.querySelector("select")}connectedCallback(){super.connectedCallback(),this.parseSlottedOptions();const e=this.getSelectedOption();this.value=e?.value||"",this.initialOptions=structuredClone(this.getAllOptions()),this.setupSlotObserver()}disconnectedCallback(){super.disconnectedCallback(),this.slotObserver?.disconnect()}updated(e){if(super.updated(e),e.has("options")){const t=this.getSelectedOption();this.value=t?.value||""}if(e.has("value")){const t={value:this.value};this.setValue(this.value),this.dispatchEvent(new CustomEvent("vl-change",{composed:!0,bubbles:!0,detail:t})),this.dispatchInput&&(this.dispatchEvent(new CustomEvent("vl-input",{bubbles:!0,composed:!0,detail:t})),this.dispatchInput=!1),this.dispatchEventIfValid(t)}}render(){const e={"vl-select__container":!0,"vl-select__container--block":this.block},t={"vl-select":!0,"vl-select--disabled":this.disabled,"vl-select--error":this.isInvalid||this.error,"vl-select--success":this.success,"vl-select--block":this.block},l=!!this.value,o=this.getAllOptions().some(s=>s.group);return a`
            <div class=${v(e)}>
                <select
                    id=${this.id||r}
                    name=${this.name||r}
                    class=${v(t)}
                    aria-label=${this.label||r}
                    aria-invalid=${this.isInvalid||r}
                    ?required=${this.required}
                    ?disabled=${this.disabled}
                    ?aria-disabled=${this.disabled}
                    ?error=${this.error}
                    .value=${f(this.value)}
                    autocomplete=${this.autocomplete||r}
                    @change=${this.onChange}
                    @input=${this.onSelect}
                >
                    ${this.placeholder?this.renderPlaceholder(l):r}
                    ${o?this.renderGroupedOptions():this.renderSelectOptions(this.getAllOptions())}
                </select>
                ${l&&!this.notDeletable?this.renderClearButton():r}
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
        `}renderGroupedOptions(){const e=this.getGroupedOptions();return Object.entries(e).map(([t,l])=>a` <optgroup label=${t}>${this.renderSelectOptions(l)}</optgroup>`)}renderSelectOptions(e){return e.map(t=>a` <option
                value=${t.value}
                ?selected=${this.value===t.value}
                ?disabled=${t.disabled}
            >
                ${t.label||t.value}
            </option>`)}resetFormControl(){super.resetFormControl(),this.options.length>0?this.options=structuredClone(this.initialOptions):this.parseSlottedOptions();const e=this.getSelectedOption();this.value=e?.value||""}onChange(e){this.value=e?.target?.value}onSelect(){this.dispatchInput=!0}clearValue(){this.dispatchInput=!0,this.value=""}onSlotChange(){this.parseSlottedOptions(),this.requestUpdate()}getSelectedOption(){return[...this.getAllOptions()].reverse().find(e=>e.selected)}getGroupedOptions(){return this.getAllOptions().reduce((t,l)=>{const o=l.group||this.DEFAULT_GROUP_LABEL;return t[o]?t[o].push(l):t[o]=[l],t},{})}setupSlotObserver(){this.slotObserver=new MutationObserver(()=>{this.parseSlottedOptions(),this.requestUpdate()}),this.slotObserver.observe(this,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value","label","selected","disabled"]})}parseSlottedOptions(){const e=Array.from(this.children);this.parsedOptions=e.reduce((t,l)=>{if(l.tagName.toLowerCase()==="option")t.push(this.parseOptionElement(l));else if(l.tagName.toLowerCase()==="optgroup"){const o=l.label||this.DEFAULT_GROUP_LABEL,n=Array.from(l.querySelectorAll("option")).map(c=>{const d=this.parseOptionElement(c);return d.group=o,d});t.push(...n)}return t},[])}parseOptionElement(e){return{value:e.value||e.textContent?.trim()||"",label:e.textContent?.trim()||e.value||"",selected:e.selected,disabled:e.disabled}}getAllOptions(){return this.options.length>0?this.options:this.parsedOptions}};u=w([O("vl-select")],u);export{u as V,i as s};
