"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[7911],{"../../libs/components/src/search/stories/vl-search.stories.ts":(e,t,l)=>{l.r(t),l.d(t,{__namedExportsOrder:()=>r,default:()=>n,searchDefault:()=>a});var i=l("../../libs/common/storybook/src/index.ts"),s=l("../../node_modules/lit-html/lit-html.js");l("../../libs/components/src/search/vl-search.component.ts");let n={title:"Components/search",tags:["autodocs"],args:i.D8,argTypes:(0,i.RN)()},a=(0,i._7)({},()=>(0,s.qy)` <vl-search id="search-inline" data-vl-inline="" data-cy="search"></vl-search> `);a.storyName="vl-search - default",a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:'story({}, () => html` <vl-search id="search-inline" data-vl-inline="" data-cy="search"></vl-search> `)',...a.parameters?.docs?.source}}};let r=["searchDefault"]},"../../libs/components/src/search/vl-search.component.ts":(e,t,l)=>{l.d(t,{g:()=>c});var i=l("../../libs/common/utilities/src/index.ts"),s=l("../../libs/elements/src/index.ts"),n=l("../../node_modules/@domg/govflanders-style/common/index.js"),a=l("../../node_modules/@domg/govflanders-style/component/index.js"),r=l("../../node_modules/lit/index.js");let o=(0,r.AH)`
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

    .vl-search {
        position: relative;
    }
    .vl-search--inline {
        display: inline-block;
        width: 25rem;
        max-width: 100%;
    }
    @media screen and (max-width: 767px) {
        .vl-search--inline {
            display: block;
            width: auto;
        }
    }
    .vl-search--inline .vl-search__submit,
    .vl-search--inline .vl-search__label {
        display: block;
        padding: 0;
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 4.3rem;
        color: #fff;
        font-size: 0 !important;
    }
    .vl-search--inline .vl-search__submit .vl-vi,
    .vl-search--inline .vl-search__label .vl-vi {
        font-size: 1.7rem;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .vl-search--inline .vl-search__label {
        color: #333332;
    }
    .vl-search--inline .vl-search__submit {
        z-index: -1;
        opacity: 0;
        transform: translateX(100%);
        margin-bottom: -2rem;
        height: 3.5rem;
    }
    .vl-search--inline .vl-search__submit:focus,
    .vl-search--inline .vl-search__submit:focus + .vl-search__submit,
    .vl-search--inline .vl-search__input:focus,
    .vl-search--inline slot[name='input']:focus,
    .vl-search--inline .vl-search__input:focus + .vl-search__submit,
    .vl-search--inline slot[name='input']:focus + .vl-search__submit {
        z-index: 1;
        opacity: 1;
        transform: translateX(0%);
    }
    .vl-search--inline .vl-search__submit:focus {
        transition: none;
    }
    .vl-search--inline .vl-search__input,
    .vl-search--inline slot[name='input'] {
        display: block;
        width: 100%;
        text-align: left;
    }
    .vl-search--inline .vl-search__input:focus,
    .vl-search--inline slot[name='input']:focus {
        width: calc(100% - 4.7rem);
        padding-right: 0;
    }
    .vl-search--inline .vl-search__input:valid + .vl-search__submit,
    .vl-search--inline slot[name='input']:valid + .vl-search__submit {
        transition: none;
        z-index: 1;
        opacity: 1;
        transform: translateX(0%);
    }
    .vl-search--block {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 2rem 1.5rem;
        background-color: #f7f9fc;
    }
    @media screen and (max-width: 767px) {
        .vl-search--block {
            padding-left: 3%;
            padding-right: 3%;
            position: relative;
            width: 100vw;
            left: 50%;
            right: 50%;
            margin-left: -50vw;
            margin-right: -50vw;
        }
    }
    @media screen and (max-width: 767px) {
        .vl-search--block {
            display: block;
            padding: 1.5rem 1rem;
        }
    }
    .vl-search--block .vl-search__label {
        color: #4d4d4b;
        font-weight: 400;
        font-size: 1.6rem;
        flex: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    @media screen and (max-width: 767px) {
        .vl-search--block .vl-search__label {
            font-size: 1.6rem;
        }
    }
    .vl-search--block .vl-search__input,
    .vl-search--block slot[name='input'] {
        flex: 6;
        margin: 0 2rem;
    }
    @media screen and (max-width: 1023px) {
        .vl-search--block .vl-search__input,
        .vl-search--block slot[name='input'] {
            margin: 0 1rem;
            flex: 4;
        }
    }
    @media screen and (max-width: 767px) {
        .vl-search--block .vl-search__input,
        .vl-search--block slot[name='input'] {
            margin: 0;
            display: block;
            width: 100%;
            margin-bottom: 1.5rem;
        }
    }
    .vl-search--block.vl-search--alt {
        background-color: #fff;
    }

    slot[name='input'] {
        display: block;
    }

    :host([data-vl-inline][data-vl-has-input-slot]) .vl-search__label {
        z-index: 1000;
    }

    :host([data-vl-inline]) .vl-search {
        width: var(--vl-search-width, 25rem);
    }
    :host([data-vl-inline]) slot[name='input'] {
        box-sizing: content-box;
    }
    :host([data-vl-inline]) slot[name='input'] + .vl-search__submit {
        display: none;
    }
    :host([data-vl-inline]) slot[name='input'].is-open + .vl-search__submit {
        transition: opacity 0.2s, transform 0.2s;
        z-index: 1000;
        opacity: 1;
        transform: translateX(0%);
        display: block;
    }
    :host([data-vl-inline]) ::slotted(.js-vl-select) {
        background: white !important;
        box-shadow: 0px 0px 0px 1px inset #687483;
        margin-right: 0rem !important;
    }
    :host([data-vl-inline]) ::slotted(.js-vl-select:hover) {
        box-shadow: 0px 0px 0px 2px inset rgba(0, 85, 204, 0.65);
    }
    :host([data-vl-inline]) ::slotted(.is-open),
    :host([data-vl-inline]) ::slotted(.is-focused) {
        margin-right: 4.7rem !important;
        border: 0.1rem solid #687483 !important;
    }
`;class c extends(0,i.H3)(HTMLElement){static{(0,i.gy)([s.lC,s.yF,s.nb])}static get _observedAttributes(){return["label","submit-label"]}static get _observedChildClassAttributes(){return["inline","block","alt"]}constructor(){super(`
      <style>
        ${n.h8}
        ${a.i9}
        ${a._T}
        ${a.mL}
        ${o}
      </style>
      <div class="vl-search">
        <slot name="input"></slot>
        <input is="vl-input-field" class="vl-search__input" type="search" id="search-input" value="" title="Zoekterm"/>
      </div>
    `)}connectedCallback(){super.connectedCallback(),this._isInline||this._isBlock||this.setAttribute("data-vl-block",""),this.__processInputSlot(),this.__setupChangeEventTriggers()}disconnectedCallback(){this._observer&&this._observer.disconnect()}get value(){return this.__inputElement.value}get _isInline(){return this.hasAttribute("data-vl-inline")}get _isBlock(){return this.hasAttribute("data-vl-block")}get _classPrefix(){return"vl-search--"}get __labelElement(){return this._element.querySelector("#search-label")}get __buttonElement(){return this._element.querySelector("#search-button")}get __inputElement(){return this._element.querySelector("#search-input")}get __inputSlotElement(){return this._element.querySelector('slot[name="input"]')}get __inputSlot(){return this.querySelector('[slot="input"]')}_inlineChangedCallback(e,t){this.toggleAttribute("data-vl-block",void 0==t),this.__render()}_blockChangedCallback(e,t){this.toggleAttribute("data-vl-inline",void 0==t),this.__render()}_labelChangedCallback(){this.__renderLabel()}_submitLabelChangedCallback(){this.__renderButton()}__setupChangeEventTriggers(){this.__inputElement&&this.__inputElement.addEventListener("change",e=>{e.stopPropagation(),this._submit()}),this.__labelElement&&this.__labelElement.addEventListener("click",()=>{let e=this.querySelector(":scope > [slot=input]");e?.querySelector("input")?.click()})}_submit(){this.dispatchEvent(new Event("change"))}__render(){this.__renderLabel(),this.__renderButton()}__renderLabel(){this.__labelElement&&this.__labelElement.remove(),this._element.prepend(this.__getLabelTemplate())}__renderButton(){this.__buttonElement&&this.__buttonElement.remove(),this._element.append(this.__getButtonTemplate())}__iconTemplate(){return'<span is="vl-icon" data-vl-icon="magnifier" aria-hidden="true"></span>'}__getLabelTemplate(){let e=this.dataset.vlLabel||"Zoekterm",t=this._isInline?`<span class="vl-u-visually-hidden">${e}</span> ${this.__iconTemplate()}`:e;return this._template(`
      <label id="search-label" class="vl-search__label" for="search-input">
        <slot name="label">
          ${t}
        </slot>
      </label>
    `)}__getButtonTemplate(){let e=this._isInline?this.__iconTemplate():"";return this._template(`
          <button is="vl-button" id="search-button" class="vl-search__submit" type="submit">
            ${e}
            <slot name="submit-label">
              ${this.dataset.vlSubmitLabel||"Zoeken"}
            </slot>
          </button>
        `)}__processInputSlot(){let e=this.querySelector('[slot="input"]');e?(customElements.whenDefined("vl-select").then(async()=>{e instanceof s.Pg&&(this.setAttribute("data-vl-has-input-slot",""),await e.ready(),this.__observeInputSlot(e=>{let t=e=>e.target.classList.contains("is-open"),l=e=>e.target.classList.contains("is-focused");e.find(e=>t(e)||l(e))?this.__inputSlotElement.classList.add("is-open"):this.__inputSlotElement.classList.remove("is-open")}),this.append(e._wrapperElement))}),this.__inputElement&&this.__inputElement.remove()):this.__inputSlotElement.remove()}__observeInputSlot(e){this._observer=new MutationObserver(e),this._observer.observe(this.__inputSlot,{attributes:!0,attributeFilter:["class"]})}}c=function(e,t,l,i){var s,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,l):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,l,i);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(a=(n<3?s(a):n>3?s(t,l,a):s(t,l))||a);return n>3&&a&&Object.defineProperty(t,l,a),a}([(0,i.M1)("vl-search")],c)}}]);