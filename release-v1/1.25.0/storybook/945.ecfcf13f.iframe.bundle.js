(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[945],{"./node_modules/memoizerific sync recursive":e=>{function l(e){var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}l.keys=()=>[],l.resolve=l,l.id="./node_modules/memoizerific sync recursive",e.exports=l},"./libs/form/src/next/error-message/vl-error-message.component.ts":(e,l,t)=>{"use strict";t.d(l,{WU:()=>n,ml:()=>d,p$:()=>a});var i=t("./node_modules/lit/decorators.js"),s=t("./libs/common/utilities/src/index.ts"),o=t("./node_modules/lit/index.js"),r=t("./node_modules/@domg/govflanders-style/component/index.js"),c=t("./node_modules/@domg/govflanders-style/common/index.js");let n="vl-error-message-next",a={for:"",state:null,show:!1};class d extends s.fS{static get styles(){return[c.YN,r.J8]}static get properties(){return{for:{type:String},state:{type:String},show:{type:Boolean,reflect:!0}}}render(){return(0,o.dy)` <p class="vl-form__error" ?hidden=${!this.show}><slot></slot></p> `}constructor(...e){super(...e),this.for=a.for,this.state=a.state,this.show=a.show}}d=function(e,l,t,i){var s,o=arguments.length,r=o<3?l:null===i?i=Object.getOwnPropertyDescriptor(l,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,l,t,i);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(r=(o<3?s(r):o>3?s(l,t,r):s(l,t))||r);return o>3&&r&&Object.defineProperty(l,t,r),r}([(0,i.Mo)(n)],d)},"./libs/form/src/next/form-control/form-control.ts":(e,l,t)=>{"use strict";t.d(l,{N:()=>d,O:()=>a});var i=t("./node_modules/@open-wc/form-control/src/FormControlMixin.js"),s=t("./node_modules/@open-wc/form-control/src/validators.js"),o=t("./node_modules/lit/index.js"),r=t("./node_modules/@open-wc/form-helpers/src/index.js"),c=t("./libs/form/src/next/error-message/vl-error-message.component.ts"),n=t("./libs/common/utilities/src/index.ts");t("./node_modules/reflect-metadata/Reflect.js");let a={id:"",name:"",label:"",required:!1,disabled:!1,error:!1,success:!1};class d extends(0,i.N)(n.fS){static{this.formControlValidators=[s.np,s.OP,s.dH,s.Hg]}static{this.shadowRootOptions={...o.oi.shadowRootOptions,delegatesFocus:!0}}static get properties(){return{id:{type:String},name:{type:String},label:{type:String},required:{type:Boolean},disabled:{type:Boolean},error:{type:Boolean},success:{type:Boolean},isInvalid:{type:Boolean,state:!0}}}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.onKeydown),this.addEventListener("invalid",this.onInvalid),this.label||(this.label=this.internals.labels[0]?.innerText||"")}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.onKeydown),this.removeEventListener("invalid",this.onInvalid)}updated(e){super.updated(e),e.has("isInvalid")||(this.isInvalid=!1,this.hideErrorMessages())}resetFormControl(){this.isInvalid=!1,this.hideErrorMessages(),this.dispatchEvent(new Event("reset"))}onKeydown(e){"Enter"===e.code&&this.form&&(0,r.Ps)(this.form)}onInvalid(e){e.preventDefault(),this.isInvalid=!0,this.focusFirstInvalidInput(),this.showErrorMessage()}focusFirstInvalidInput(){let e=this.form?.querySelector(":invalid");this===e&&(e?.focus(),e?.scrollIntoView({behavior:"smooth",block:"center"}))}showErrorMessage(){let e="";for(let l in this.validity)if(this.validity[l]){e=l;break}let l=this.form?.querySelector(`${c.WU}[for="${this.id}"][state="${e}"]`);l||(l=this.form?.querySelector(`${c.WU}[for="${this.id}"]`)),l?.setAttribute("show","")}hideErrorMessages(){let e=this.form?.querySelectorAll(`${c.WU}[for="${this.id}"]`);e?.forEach(e=>{e.removeAttribute("show")})}constructor(...e){super(...e),this.id=a.id,this.name=a.name,this.label=a.label,this.required=a.required,this.disabled=a.disabled,this.error=a.error,this.success=a.success,this.isInvalid=!1}}},"./libs/form/src/next/form-control/index.ts":(e,l,t)=>{"use strict";t.d(l,{N:()=>i.N,O:()=>i.O});var i=t("./libs/form/src/next/form-control/form-control.ts")},"./libs/form/src/next/select/index.ts":(e,l,t)=>{"use strict";t.d(l,{St:()=>i.St,Vs:()=>i.Vs,kI:()=>i.kI});var i=t("./libs/form/src/next/select/vl-select.component.ts")},"./libs/form/src/next/select/vl-select.component.ts":(e,l,t)=>{"use strict";t.d(l,{Vs:()=>h,St:()=>v,kI:()=>_});var i=t("./node_modules/lit/index.js"),s=t("./node_modules/lit/decorators.js"),o=t("./node_modules/lit/directives/class-map.js"),r=t("./libs/form/src/next/form-control/index.ts"),c=t("./node_modules/choices.js/public/assets/scripts/choices.js"),n=t.n(c),a=t("./node_modules/@domg/govflanders-style/component/index.js"),d=t("./node_modules/@domg/govflanders-style/common/index.js");let m=(0,i.iv)`
    .js-vl-select .vl-select__inner .vl-select,
    .js-vl-select .vl-select__inner .vl-multiselect {
        display: none;
    }

    .js-vl-select .vl-select__item--choice.vl-select__placeholder {
        display: none;
    }

    .js-vl-select .vl-select__inner:has(select.vl-select--error) {
        border-color: #d2373c;
        background-color: #fbebec;
    }

    .js-vl-select .vl-select__inner:has(select.vl-select--success) {
        border-color: #009e47;
        background-color: #e6f5ed;
    }

    .js-vl-select .vl-select__item.vl-select__placeholder {
        opacity: 1;
        color: #687483;
    }

    .js-vl-select[data-type='select-one'] .vl-select__inner .vl-pill__close {
        margin: 0.1rem 0 0 auto;
        border-radius: 0.3rem;

        &:hover {
            box-shadow: none;
        }
    }

    .js-vl-select .vl-select__list--dropdown .vl-select__list .vl-select__group {
        border-top: none;
    }

    .js-vl-select .vl-select__list--dropdown .vl-select__list .vl-select__group ~ .vl-select__group {
        border-top: 0.1rem solid rgb(104, 116, 131);
    }

    .js-vl-select
        .vl-select__list--dropdown
        .vl-select__list
        :not(.vl-select__group)
        .vl-select__item:not(.vl-select__placeholder) {
        border-top: none;
    }

    .js-vl-select
        .vl-select__list--dropdown
        .vl-select__list
        :not(.vl-select__group)
        .vl-select__item:not(.vl-select__placeholder)
        ~ .vl-select__item {
        border-top: 0.1rem solid rgb(104, 116, 131);
    }

    .js-vl-select.vl-vi.vl-vi-nav-down:before {
        color: #6e7985;
        position: absolute;
        right: 1.3rem;
        font-size: 1.3rem;
        top: 50%;
        transform: translateY(-50%);
    }
`,p=(0,i.iv)`
    :root {
        --vl-theme-primary-color: #ffe615;
        --vl-theme-primary-color-60: #fff073;
        --vl-theme-primary-color-70: #ffee5b;
        --vl-theme-primary-color-rgba-30: rgba(255, 230, 21, 0.3);
        --vl-theme-fg-color: #333332;
        --vl-theme-fg-color-60: #858584;
        --vl-theme-fg-color-70: #707070;
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
    .vl-select:hover:not([disabled]).vl-select--error,
    .vl-select:hover:not([disabled]).invalid.validated {
        border-color: #d2373c;
    }
    .vl-select:hover:not([disabled]).vl-select--success,
    .vl-select:hover:not([disabled]).valid.validated {
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
    .no-js [data-vl-select]:focus::-ms-value {
        background: inherit;
        color: inherit;
    }
    .js-vl-select {
        position: relative;
        border-radius: 0.3rem;
        z-index: 999;
    }
    .js-vl-select.is-disabled {
        border-color: #687483;
        background-color: #f3f5f6 !important;
        outline: 0;
    }
    .js-vl-select.is-disabled .vl-select__inner {
        border-color: #8695a8;
    }
    .js-vl-select.is-disabled .vl-select__item {
        color: var(--vl-theme-fg-color-70);
        cursor: default;
    }
    .js-vl-select.is-focused {
        box-shadow: 0 0 0 2px #fff, 0 0 0 5px rgba(0, 85, 204, 0.65);
        outline: transparent solid 0.2rem;
    }
    @supports (outline-offset: 2px) {
        .js-vl-select.is-focused {
            box-shadow: none;
            outline: 3px solid rgba(0, 85, 204, 0.65);
            outline-offset: 2px;
        }
    }
    .js-vl-select.is-open {
        z-index: 1000;
    }
    .js-vl-select.is-open .vl-select__inner {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }
    .js-vl-select.is-open::after {
        transform: translateY(-0.75rem);
        border-color: transparent transparent #000;
    }
    .js-vl-select.is-flipped .vl-select__inner {
        border-radius: 0 0 0.3rem 0.3rem;
    }
    .js-vl-select.is-flipped .vl-select__list--dropdown {
        top: auto;
        bottom: 100%;
        transform: translateY(0.1rem);
        border-radius: 0.3rem 0.3rem 0 0;
    }
    .js-vl-select:hover:not(.is-disabled) .vl-select__inner {
        border-color: rgba(0, 85, 204, 0.65);
        box-shadow: inset 0 0 0 0.1rem rgba(0, 85, 204, 0.65);
    }
    .js-vl-select[data-type*='select-one'] .vl-input-field {
        display: block;
        padding: 0;
        color: #333332;
        overflow: hidden;
        white-space: nowrap;
    }
    .js-vl-select[data-type*='select-one'] .vl-select__list--dropdown .vl-input-field {
        width: calc(100% - (2 * 2rem));
        margin: 2rem;
        padding: 0 1rem;
        border: 0.1rem solid #687483;
    }
    .js-vl-select[data-type*='select-one'] .vl-select__item--selectable {
        min-height: calc(3.5rem - 1.2rem);
        height: calc(3.5rem - 1.2rem);
    }
    .js-vl-select[data-type*='select-one'] .vl-select__inner {
        height: 3.5rem;
        line-height: 3.5rem;
        padding-right: 3.5rem;
    }
    .js-vl-select[data-type*='select-one'][dir='rtl']::after {
        right: auto;
        left: 1.15rem;
    }
    .js-vl-select[data-type*='select-one'][dir='rtl'] .vl-pill__close {
        margin-right: auto;
        margin-left: 0;
    }
    .js-vl-select[data-type*='select-one'] .vl-pill__close {
        border: 0;
        display: inline-flex;
        margin-left: auto;
    }
    .js-vl-select[data-type*='select-one'] .vl-pill__close:hover,
    .js-vl-select[data-type*='select-one'] .vl-pill__close:focus,
    .js-vl-select[data-type*='select-one'] .vl-pill__close:active {
        color: #003bb0;
    }
    .js-vl-select[data-type*='select-one'].is-disabled .vl-pill__close,
    .js-vl-select[data-type*='select-one'] .vl-select__placeholder .vl-pill__close {
        display: none;
    }
    .js-vl-select[data-type*='select-multiple'],
    .js-vl-select[data-type*='text'] {
        background-color: #fff;
    }
    .js-vl-select[data-type*='select-multiple'] .vl-select__inner,
    .js-vl-select[data-type*='text'] .vl-select__inner {
        cursor: text;
    }
    .js-vl-select[data-type*='select-multiple'] .vl-input-field,
    .js-vl-select[data-type*='text'] .vl-input-field {
        display: inline;
        padding: 0;
        line-height: 2.2rem;
        height: 2.4rem;
    }
    .js-vl-select[data-type*='select-multiple'] .vl-input-field:focus,
    .js-vl-select[data-type*='text'] .vl-input-field:focus {
        outline: 0;
        box-shadow: none;
    }
    .js-vl-select__group {
        padding: 0.3rem 0.5rem 0.3rem 0;
        border-top: 0.1rem solid #687483;
        text-decoration: none;
    }
    .js-vl-select .vl-select__inner {
        padding: 0.5rem 6rem 0.4rem 1rem;
        border: 0.1rem solid #687483;
        border-radius: 0.3rem;
        color: #666;
        font-family: 'Flanders Art Sans', sans-serif;
        overflow: hidden;
    }
    .is-open .js-vl-select .vl-select__inner {
        border-bottom: 0;
    }
    .js-vl-select .vl-select__list {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .js-vl-select .vl-select__list--single {
        display: inline-block;
        width: 100%;
    }
    [dir='rtl'] .js-vl-select .vl-select__list--single {
        padding-right: 0.5rem;
        padding-left: 1.5rem;
    }
    .js-vl-select .vl-select__list--multiple {
        display: inline-flex;
        align-content: center;
        max-width: 100%;
    }
    .js-vl-select .vl-select__list--multiple .vl-select__item {
        margin: 0.2rem 0.6rem 0.5rem 0;
        display: inline-flex;
    }
    .js-vl-select .vl-select__list--multiple .vl-select__item[data-deletable] {
        padding-right: 0;
    }
    [dir='rtl'] .js-vl-select .vl-select__list--multiple--multiple {
        margin-right: 0;
        margin-left: 0.375rem;
    }
    .js-vl-select .vl-select__list--multiple .vl-input-field {
        padding: 0.4rem 0 0.4rem 0.2rem;
    }
    .js-vl-select .vl-select__list--dropdown {
        display: none;
        position: absolute;
        top: 100%;
        width: 100%;
        transform: translateY(-0.1rem);
        border: 0.1rem #687483 solid;
        background-color: #fff;
        z-index: 1;
        border-bottom-left-radius: 0.3rem;
        border-bottom-right-radius: 0.3rem;
    }
    .js-vl-select .vl-select__list--dropdown.is-active {
        display: block;
    }
    .js-vl-select .vl-select__list--dropdown .vl-select__list {
        position: relative;
        max-height: 35vh;
        overflow: auto;
        will-change: scroll-position;
        -webkit-overflow-scrolling: touch;
    }
    .js-vl-select .vl-select__list--dropdown .vl-input-field + .vl-select__list {
        border-top: 0.1rem solid #687483;
    }
    .js-vl-select .vl-select__list--dropdown .vl-select__item {
        width: 100%;
        min-height: 0;
        height: auto;
        padding-top: 0.8rem;
        padding-bottom: 0.8rem;
        padding-left: 3rem;
        border: 0;
        color: #000;
        font-weight: normal;
        text-decoration: none;
    }
    .js-vl-select .vl-select__list--dropdown .vl-select__item:not(:first-of-type) {
        border-top: 0.1rem #cbd2da solid;
    }
    [dir='rtl'] .js-vl-select .vl-select__list--dropdown .vl-select__item {
        text-align: right;
    }
    @media screen and (min-width: 767px) {
        .js-vl-select .vl-select__list--dropdown .vl-select__item--selectable {
            padding-right: 10rem;
        }
        .js-vl-select .vl-select__list--dropdown .vl-select__item--selectable::after {
            position: absolute;
            top: 50%;
            right: 1rem;
            transform: translateY(-50%);
            content: attr('data-select-text');
            opacity: 0.5;
        }
        [dir='rtl'] .js-vl-select .vl-select__list--dropdown .vl-select__item--selectable {
            padding-right: 1rem;
            padding-left: 10rem;
            text-align: right;
        }
        [dir='rtl'] .js-vl-select .vl-select__list--dropdown .vl-select__item--selectable::after {
            right: auto;
            left: 1rem;
        }
    }
    .js-vl-select .vl-select__list--dropdown .vl-select__item--selectable.is-highlighted {
        position: relative;
        background-color: rgba(179, 207, 245, 0.3);
    }
    .js-vl-select .vl-select__list--dropdown .vl-select__item[aria-selected='true'] {
        background-color: rgba(179, 207, 245, 0.3);
    }
    .js-vl-select .vl-select__item {
        cursor: default;
        display: flex;
        align-items: center;
    }
    .js-vl-select .vl-select__item--disabled {
        background-color: #f3f5f6 !important;
        border-color: #8695a8;
        color: var(--vl-theme-fg-color-70) !important;
        cursor: not-allowed;
        user-select: none;
    }
    .js-vl-select .vl-select__item--disabled:hover {
        background-color: #f3f5f6;
    }
    .js-vl-select .vl-select__item span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .js-vl-select .vl-input-field {
        display: inline-block;
        max-width: 100%;
        border: 0;
        background-color: transparent;
        vertical-align: baseline;
    }
    [dir='rtl'] .js-vl-select .vl-input-field {
        padding-right: 0.2rem;
        padding-left: 0;
    }
    .js-vl-select .vl-select__placeholder {
        opacity: 0.5;
    }
    .js-vl-select .vl-select__group {
        display: block;
    }
    .js-vl-select .vl-select__group:not(:first-of-type) {
        border-top: 0.1rem solid #687483;
    }
    .js-vl-select .vl-select__group .vl-select__heading {
        padding: 0.6rem 2rem;
        color: #4d4d4b;
        font-weight: 500;
    }
    .vl-select--error .js-vl-select {
        background-color: #d2373c;
        border: 0.2rem solid #d2373c;
        box-shadow: inset 0 0 0 0.1rem #d2373c;
    }
    .vl-select--error .js-vl-select:focus {
        background-color: #fff;
    }
    .vl-select--success .js-vl-select {
        border-color: #009e47;
        background-color: #e6f5ed;
        border-width: 0.2rem;
        border-style: solid;
    }
`,u=(0,i.iv)`
    .vl-pill {
        display: inline-flex;
        max-width: 100%;
        align-items: center;
        background-color: #fff;
        font-size: 1.4rem;
        font-weight: 500;
        color: #4d4d4b;
        text-decoration: none;
        vertical-align: middle;
        border-radius: 0.3rem;
        border: 0.1rem solid #687483;
        transition: color 0.2s, background-color 0.2s, box-shadow 0.2s;
        padding: 0 1.4rem;
        line-height: calc(2.4rem - 0.2rem);
        min-width: 0;
    }
    .vl-pill__text {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
    }
    .vl-pill__close {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: #05c;
        width: 2.4rem;
        height: 2.4rem;
        border: 0.1rem solid #687483;
        text-decoration: none;
        margin-left: 1.4rem;
        padding: 0;
        border-radius: 0 0.3rem 0.3rem 0;
        transition: color 0.2s, background-color 0.2s, box-shadow 0.2s;
        margin-top: -0.1rem;
        margin-right: -0.1rem;
        margin-bottom: -0.1rem;
        min-width: 2.4rem;
    }
    .vl-pill__close:hover:not([disabled]) {
        color: #003bb0;
        box-shadow: inset 0 0 0 0.1rem #05c;
        border: #05c 0.1rem solid;
        background-color: #e6eefa;
    }
    .vl-pill__close:focus {
        outline: transparent solid 0.2rem;
        border: #05c 0.1rem solid;
        box-shadow: 0 0 0 2px #fff, 0 0 0 5px rgba(0, 85, 204, 0.65), inset 0 0 0 0.1rem #05c;
    }
    [dir='rtl'] .vl-pill__close {
        border-left: 0;
        border-right: #687483 0.1rem solid;
    }
    .is-disabled .vl-pill__close,
    .vl-pill__close[disabled] {
        color: #687483;
        cursor: default;
    }
    .vl-pill__close__icon {
        line-height: 0;
    }
    .vl-pill__close__icon::before {
        display: inline-block;
        font-size: 0.8rem;
        text-indent: 0;
        line-height: 1;
        font-weight: bold;
    }
    .vl-pill--success {
        background-color: #e6f5ed;
        border-color: #009e47;
    }
    .vl-pill--warning {
        background-color: #fff6e7;
        border-color: #ffa10a;
    }
    .vl-pill--error {
        background-color: #fbebec;
        border-color: #d2373c;
    }
    .vl-pill--disabled {
        background-color: #cbd2d9;
        color: #687483;
    }
    .vl-pill--disabled:hover,
    .vl-pill--disabled:active {
        background-color: #cbd2d9;
        color: #687483;
    }
    .vl-pill--closable {
        padding-right: 0;
    }
    .vl-pill--clickable:not(.vl-pill--disabled) {
        color: #05c;
    }
    .vl-pill--clickable:not(.vl-pill--disabled):hover {
        background-color: #e6eefa;
        color: #003bb0;
        border-color: #5991de;
        box-shadow: inset 0 0 0 0.1rem #05c;
    }
    .vl-pill--clickable:not(.vl-pill--disabled):focus {
        outline: transparent solid 0.2rem;
        border-color: #5991de;
        box-shadow: 0 0 0 2px #fff, 0 0 0 5px rgba(0, 85, 204, 0.65), inset 0 0 0 0.1rem #05c;
    }

    .vl-multiselect .multiselect__loading-enter-active,
    .vl-multiselect .multiselect__loading-leave-active {
        transition: opacity 0.4s ease-in-out;
        opacity: 1;
    }
    .vl-multiselect .multiselect__loading-enter,
    .vl-multiselect .multiselect__loading-leave-active {
        opacity: 0;
    }
    .vl-multiselect .multiselect,
    .vl-multiselect .multiselect__input,
    .vl-multiselect .multiselect__single {
        font-size: 1.6rem;
        touch-action: manipulation;
    }
    .vl-multiselect .multiselect--disabled {
        opacity: 0.6;
    }
    .vl-multiselect .multiselect--active {
        z-index: 10013;
    }
    .vl-multiselect .multiselect--active .multiselect__input {
        position: relative !important;
        border: 0.1rem solid #687483;
    }
    .vl-multiselect .multiselect--active .multiselect__tags {
        border-radius: 0.3rem 0.3rem 0 0;
        border-bottom: 1px solid #8695a8;
    }
    .vl-multiselect .multiselect {
        display: block;
        position: relative;
        max-width: 100%;
        text-decoration: none;
        color: #333332;
        font-family: 'Flanders Art Sans', sans-serif;
        font-size: 1.6rem;
        -webkit-appearance: none;
    }
    .vl-multiselect .multiselect:focus::-ms-value {
        background: inherit;
        color: inherit;
    }
    .vl-multiselect .multiselect--active:not(.multiselect--above) .multiselect__current,
    .vl-multiselect .multiselect--active:not(.multiselect--above) .multiselect__tags {
        padding: 6px 45px 0 10px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }
    .vl-multiselect .multiselect--above--active .multiselect__current,
    .vl-multiselect .multiselect--above--active .multiselect__input,
    .vl-multiselect .multiselect--above--active .multiselect__tags {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
    .vl-multiselect .multiselect--above--active .multiselect__input {
        display: inline-block;
    }
    .vl-multiselect .multiselect--disabled {
        pointer-events: none;
    }
    .vl-multiselect .multiselect--disabled .multiselect__tags {
        border-color: #8695a8;
        background-color: #f3f5f6;
    }
    .vl-multiselect .multiselect__input {
        margin: 10px 5px 15px 2px;
        display: inline-block;
        background: #fff;
        font-family: 'Flanders Art Sans', sans-serif;
        font-size: 1.6rem;
        color: #333332;
        max-width: 100%;
        height: 3.5rem;
        line-height: 3.5rem;
        border-radius: 0.3rem;
        border: 0;
        -webkit-appearance: none;
        padding: 0 1rem;
        transition: background-color 0.2s;
    }
    @media screen and (max-width: 767px) {
        .vl-multiselect .multiselect__input {
            font-size: 1.6rem;
        }
    }
    .vl-multiselect .multiselect__input:hover {
        border: 0.2rem solid rgba(0, 85, 204, 0.65);
        padding: 0 0.9rem;
    }
    .vl-multiselect .multiselect__input:hover.vl-input-field--error,
    .vl-multiselect .multiselect__input:hover.invalid.validated {
        border-color: #d2373c;
    }
    .vl-multiselect .multiselect__input:hover.vl-input-field--success {
        border-color: #009e47;
    }
    .vl-multiselect .multiselect__input:hover.vl-input-field--small {
        padding: 0 0.7rem;
    }
    .vl-multiselect .multiselect__input:focus,
    .vl-multiselect .multiselect__input--focus {
        box-shadow: 0 0 0 2px #fff, 0 0 0 5px rgba(0, 85, 204, 0.65);
        outline: transparent solid 0.2rem;
        border: 0.1rem solid #687483;
        padding: 0 1rem;
    }
    @supports (outline-offset: 2px) {
        .vl-multiselect .multiselect__input:focus,
        .vl-multiselect .multiselect__input--focus {
            box-shadow: none;
            outline: 3px solid rgba(0, 85, 204, 0.65);
            outline-offset: 2px;
        }
    }
    .vl-multiselect .multiselect__input:focus.vl-input-field--error,
    .vl-multiselect .multiselect__input:focus.invalid.validated,
    .vl-multiselect .multiselect__input--focus.vl-input-field--error,
    .vl-multiselect .multiselect__input--focus.invalid.validated {
        border-color: #d2373c;
    }
    .vl-multiselect .multiselect__input:focus.vl-input-field--success,
    .vl-multiselect .multiselect__input--focus.vl-input-field--success {
        border-color: #009e47;
    }
    .vl-multiselect .multiselect__input:focus:hover,
    .vl-multiselect .multiselect__input--focus:hover {
        padding: 0 1rem;
    }
    .vl-multiselect .multiselect__input:focus.vl-input-field--small,
    .vl-multiselect .multiselect__input--focus.vl-input-field--small {
        padding: 0 0.8rem;
    }
    .vl-multiselect .multiselect__input::placeholder {
        color: #687483;
    }
    .vl-multiselect .multiselect__input::-webkit-search-cancel-button {
        -webkit-appearance: none;
    }
    .vl-multiselect .multiselect__single {
        position: relative;
        display: inline-block;
        min-height: 20px;
        line-height: 20px;
        border: 0;
        border-radius: 5px;
        padding: 0 0 0 5px;
        margin-bottom: 8px;
        width: 100%;
        transition: border 0.1s ease;
        box-sizing: border-box;
        vertical-align: top;
        color: #687483;
    }
    .multiselect__tag ~ .vl-multiselect .multiselect__single {
        width: auto;
    }
    .vl-multiselect .multiselect__single:focus {
        outline: 0;
    }
    .vl-multiselect--single .multiselect__single {
        padding-top: 3px;
        min-height: 17px;
        line-height: 17px;
        color: #333332;
    }
    .vl-multiselect .multiselect__tags-wrap {
        display: inline;
    }
    .vl-multiselect .multiselect--active .multiselect__tags-wrap {
        margin: 0 -4px;
    }
    .vl-multiselect .multiselect__tags {
        min-height: 35px;
        display: block;
        padding: 6px 45px 0 6px;
        border: 1px solid #8695a8;
        background-color: #fff;
        font-size: 14px;
        border-radius: 3px;
    }
    .vl-multiselect .multiselect__tag {
        position: relative;
        display: inline-block;
        padding: 4px 30px 4px 10px;
        border-radius: 0.3rem;
        margin-right: 6px;
        line-height: 1;
        background: #fff;
        margin-bottom: 5px;
        white-space: nowrap;
        max-width: 100%;
        text-overflow: ellipsis;
        color: #333332;
        font-family: 'Flanders Art Sans', sans-serif;
        font-weight: 500;
        font-size: 1.4rem;
        vertical-align: middle;
        border: 1px solid #8695a8;
        transition: color 0.2s, background-color 0.2s, box-shadow 0.2s;
    }
    .vl-multiselect .multiselect__current {
        min-height: 40px;
        overflow: hidden;
        padding: 8px 12px 0;
        padding-right: 30px;
        white-space: nowrap;
        border-radius: 5px;
        border: 1px solid #e8ebee;
    }
    .vl-multiselect .multiselect__current,
    .vl-multiselect .multiselect__select {
        line-height: 16px;
        box-sizing: border-box;
        display: block;
        margin: 0;
        text-decoration: none;
        cursor: pointer;
    }
    .vl-multiselect .multiselect__select {
        position: absolute;
        width: 40px;
        right: 0;
        top: 0;
        height: 100%;
        padding: 4px 8px;
        text-align: center;
        transition: transform 0.2s ease;
    }
    // UIG-2707: styles verwijderd voor CSP compliance
    // .vl-multiselect .multiselect__select::before {
    //     background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8.07' height='4.74' viewBox='0 0 8.07 4.74'%3E%3Cpolyline points='7.57 0.5 4.04 4.04 0.5 0.5' fill='none' stroke='%236d7884' stroke-linecap='round'/%3E%3C/svg%3E");
    //     background-repeat: no-repeat;
    //     background-size: 9px 5px;
    //     background-position: calc(100% - 1.5rem) center;
    //     appearance: none;
    //     position: absolute;
    //     display: block;
    //     right: 0;
    //     top: 0;
    //     bottom: 0;
    //     content: '';
    //     width: 100%;
    // }
    .vl-multiselect .multiselect__placeholder {
        display: inline-block;
        padding: 0 0 0 5px;
        color: #687483;
        font-family: 'Flanders Art Sans', sans-serif;
        font-size: 1.6rem;
        white-space: nowrap;
        max-width: 100%;
        overflow: hidden;
    }
    .multiselect--active .vl-multiselect .multiselect__placeholder {
        display: none;
    }
    .vl-multiselect .multiselect__content-wrapper {
        position: absolute;
        display: block;
        background: #fff;
        width: 100%;
        max-height: 240px;
        overflow: auto;
        border: 1px solid #8695a8;
        border-top: 0;
        border-bottom-left-radius: 0.3rem;
        border-bottom-right-radius: 0.3rem;
        z-index: 1;
        -webkit-overflow-scrolling: touch;
    }
    .vl-multiselect .multiselect__content {
        list-style: none;
        display: inline-block;
        padding: 0;
        margin: -1px 0;
        min-width: 100%;
        vertical-align: top;
    }
    .vl-multiselect .multiselect__content::webkit-scrollbar {
        display: none;
    }
    .vl-multiselect .multiselect--above .multiselect__content-wrapper {
        bottom: 100%;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        border-bottom: none;
        border-top: 1px solid #f7f9fc;
    }
    .vl-multiselect .multiselect__element {
        display: block;
    }
    .vl-multiselect .multiselect__strong {
        margin-bottom: 8px;
        line-height: 20px;
        display: inline-block;
        vertical-align: top;
    }
    .vl-multiselect [dir='rtl'] .multiselect {
        text-align: right;
    }
    .vl-multiselect [dir='rtl'] .multiselect__select {
        right: auto;
        left: 1px;
    }
    .vl-multiselect [dir='rtl'] .multiselect__tags {
        padding: 8px 8px 0 40px;
    }
    .vl-multiselect [dir='rtl'] .multiselect__content {
        text-align: right;
    }
    .vl-multiselect [dir='rtl'] .multiselect__clear {
        right: auto;
        left: 12px;
    }
    .vl-multiselect [dir='rtl'] .multiselect__spinner {
        right: auto;
        left: 1px;
    }
    .vl-multiselect--error .multiselect__current,
    .vl-multiselect--error .multiselect__tags,
    .vl-multiselect.invalid.validated .multiselect__current,
    .vl-multiselect.invalid.validated .multiselect__tags {
        border-color: #d2373c;
        background-color: #fbebec;
    }
    .vl-multiselect--success .multiselect__current,
    .vl-multiselect--success .multiselect__tags,
    .vl-multiselect.valid.validated .multiselect__current,
    .vl-multiselect.valid.validated .multiselect__tags {
        border-color: #009e47;
        background-color: #e6f5ed;
    }
`,v={AUTO:"auto",TOP:"top",BOTTOM:"bottom"},h={...r.O,options:[],placeholder:"",deletable:!1,multiple:!1,search:!1,position:v.AUTO,resultLimit:4,noResultsText:"Geen resultaten gevonden",noChoicesText:"Geen resterende opties gevonden",searchPlaceholder:"Zoek item"};class _ extends r.N{static get styles(){return[d.YN,d.Oh,a.K$,p,u,a.oQ,m]}static get properties(){return{options:{type:Array},placeholder:{type:String},deletable:{type:Boolean},multiple:{type:Boolean},search:{type:Boolean},position:{type:String},resultLimit:{type:Number,attribute:"result-limit"},noResultsText:{type:String,attribute:"no-results-text"},noChoicesText:{type:String,attribute:"no-choices-text"},searchPlaceholder:{type:String,attribute:"search-placeholder"}}}firstUpdated(e){super.firstUpdated(e),this.choices=new(n())(this.validationTarget,this.getChoicesConfig()),this.initialOptions=[...JSON.parse(JSON.stringify(this.options))],setTimeout(()=>{this.choicesElement?.addEventListener("click",this.onClickChoices),this.internals.labels[0]?.addEventListener("click",this.onClickChoices),this.value||this.setValue("")},0)}updated(e){super.updated(e),this.choices&&(e.has("options")&&(this.choices.clearStore(),this.choices.setChoices(this.getOptions(),"value","label",!0),this.onChange()),e.has("disabled")&&(this.disabled?this.choices.disable():this.choices.enable()),e.has("deletable")&&(this.choices.config.removeItemButton=this.deletable,this.choices.config.removeItems=this.deletable),e.has("error")&&this.internals.setValidity({customError:this.error},"custom-error"))}disconnectedCallback(){super.disconnectedCallback(),this.choicesElement?.removeEventListener("click",this.onClickChoices),this.internals.labels[0]?.removeEventListener("click",this.onClickChoices)}render(){let e={"vl-select":!this.multiple,"vl-multiselect":this.multiple,"vl-select--disabled":this.disabled,"vl-select--error":this.isInvalid||this.error,"vl-select--success":this.success};return(0,i.dy)`
            <select
                id=${this.id}
                name=${this.name||this.id}
                class=${(0,o.$)(e)}
                aria-label=${this.label}
                ?required=${this.required}
                ?disabled=${this.disabled}
                ?error=${this.error}
                ?multiple=${this.multiple}
                @change=${this.onChange}
            ></select>
        `}get validationTarget(){return this.shadowRoot?.querySelector("select")}get choicesElement(){return this.shadowRoot?.querySelector(".js-vl-select")}resetFormControl(){super.resetFormControl(),this.options=[...this.initialOptions]}getChoicesConfig(){return{shouldSort:!1,removeItemButton:this.deletable,removeItems:this.deletable,searchEnabled:this.search,placeholder:!!this.placeholder,placeholderValue:this.placeholder,position:this.position,searchResultLimit:this.resultLimit,noResultsText:this.noResultsText,noChoicesText:this.noChoicesText,searchPlaceholderValue:this.searchPlaceholder,classNames:{...c.DEFAULT_CLASSNAMES,containerOuter:"js-vl-select",containerInner:"vl-select__inner",input:"vl-input-field",inputCloned:"vl-input-field-cloned",list:"vl-select__list",listItems:"vl-select__list--multiple",listSingle:"vl-select__list--single",listDropdown:"vl-select__list--dropdown",item:"vl-select__item",itemSelectable:"vl-select__item--selectable",itemDisabled:"vl-select__item--disabled",itemChoice:"vl-select__item--choice",placeholder:"vl-select__placeholder",group:"vl-select__group",groupHeading:"vl-select__heading",button:"vl-select__button"},callbackOnCreateTemplates:e=>({containerOuter:()=>e(`<div
                                class="js-vl-select vl-vi vl-vi-nav-down"
                                data-type="${this.multiple?"select-multiple":"select-one"}"
                                ${this.search?'aria-autocomplete="list"':""}
                                role="combobox"
                                aria-haspopup="true"
                                aria-expanded="false"
                                tabindex="0"
                                aria-controls="vl-select__list"
                                aria-label="${this.multiple?"selecteer één of meerdere opties":"selecteer één optie"}">
                            </div>`),item:(l,t)=>this.deletable?e(`<div class="
                                    vl-select__item
                                    ${t.highlighted?"is-highlighted":""}
                                    ${t.disabled?"":"vl-select__item--selectable"}
                                    ${this.multiple?"vl-pill":""}
                                    ${t.placeholder?"vl-select__placeholder":""}"
                                    data-item
                                    data-id="${t.id}"
                                    data-value="${t.value}"
                                    ${t.disabled?'aria-disabled="true"':"data-deletable"}
                                >
                                    <span>${t.label}</span>
                                    <button class="vl-pill__close ${this.multiple?"":"vl-vi vl-vi-close"}" data-button aria-label="verwijder">
                                        ${this.multiple?'<span class="vl-pill__close__icon vl-vi vl-vi-close" aria-hidden="true"></span>':""}
                                    </button>
                                </div>`):e(`
                            <div class="vl-select__item
                                ${t.highlighted?"is-highlighted":"vl-select__item--selectable"}
                                ${this.multiple?"vl-pill":""}
                                ${t.placeholder?"vl-select__placeholder":""}"
                                data-item
                                data-id="${t.id}"
                                data-value="${t.value}"
                                ${t.disabled?'aria-disabled="true"':""}
                            >
                                ${t.label}
                            </div>
                        `),itemList:()=>this.multiple?e('<div class="vl-input-field vl-select__list--multiple"></div>'):e('<div class="vl-input-field"></div>'),input:()=>e('<input type="text" class="vl-input-field vl-input-field-cloned" autocomplete="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" aria-label="zoek item">'),dropdown:()=>e('<div class="vl-select__list vl-select__list--dropdown" role="group" id="vl-select__list"></div>'),choiceList:()=>e('<div class="vl-select__list" role="listbox" aria-label="item lijst" tabindex="0"></div>')})}}getOptions(){let e=[...this.options];if(this.placeholder&&!this.multiple){let l={value:"",label:this.placeholder,placeholder:!0,disabled:!0,selected:!0};e.unshift(l)}return e}onChange(){let e=Array.from(this.shadowRoot.querySelectorAll("option:checked")).map(e=>e.value).join(";")||"";this.value!==e&&(this.value=e,this.setValue(e),this.dispatchEvent(new CustomEvent("vl-select",{bubbles:!0,composed:!0,detail:{value:e}})),this.requestUpdate())}constructor(...e){super(...e),this.options=h.options,this.placeholder=h.placeholder,this.deletable=h.deletable,this.multiple=h.multiple,this.search=h.search,this.position=h.position,this.resultLimit=h.resultLimit,this.noResultsText=h.noResultsText,this.noChoicesText=h.noChoicesText,this.searchPlaceholder=h.searchPlaceholder,this.choices=null,this.initialOptions=[],this.value="",this.onClickChoices=e=>{e.stopPropagation(),this.disabled||this.choices?.showDropdown()}}}_=function(e,l,t,i){var s,o=arguments.length,r=o<3?l:null===i?i=Object.getOwnPropertyDescriptor(l,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,l,t,i);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(r=(o<3?s(r):o>3?s(l,t,r):s(l,t))||r);return o>3&&r&&Object.defineProperty(l,t,r),r}([(0,s.Mo)("vl-select-next")],_)}}]);