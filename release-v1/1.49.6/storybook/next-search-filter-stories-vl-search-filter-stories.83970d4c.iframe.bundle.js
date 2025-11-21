"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[555],{"../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(e,t,l)=>{l.d(t,{f:()=>m});var o=l("../../node_modules/react/index.js"),s=l("../../node_modules/react-dom/client.js"),r=new Map,n=({callback:e,children:t})=>{let l=(0,o.useRef)();return(0,o.useLayoutEffect)(()=>{l.current!==e&&(l.current=e,e())},[e]),t},i=async(e,t)=>{let l=await c(t);return new Promise(t=>{l.render(o.createElement(n,{callback:()=>t(null)},e))})},a=(e,t)=>{let l=r.get(e);l&&(l.unmount(),r.delete(e))},c=async e=>{let t=r.get(e);return t||(t=s.createRoot(e),r.set(e,t)),t},d=l("../../node_modules/@storybook/blocks/dist/index.mjs"),p={code:d.XA,a:d.zE,...d.Sw},u=class extends o.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:o.createElement(o.Fragment,null,t)}},m=class{constructor(){this.render=async(e,t,s)=>{let r={...p,...t?.components},n=d.kQ;return new Promise((a,c)=>{l.e(814).then(l.bind(l,"../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:l})=>i(o.createElement(u,{showException:c,key:Math.random()},o.createElement(l,{components:r},o.createElement(n,{context:e,docsParameter:t}))),s)).then(()=>a())})},this.unmount=e=>{a(e)}}}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(e,t,l)=>{l.d(t,{Hl:()=>o.Hl,W8:()=>o.W8,kL:()=>o.kL,ov:()=>o.ov}),l("../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var o=l("../../node_modules/@storybook/blocks/dist/index.mjs")},"../../libs/components/src/next/search-filter/stories/vl-search-filter.stories.ts":(e,t,l)=>{l.r(t),l.d(t,{SearchFilterDefault:()=>j,SearchFilterMobile:()=>O,__namedExportsOrder:()=>_,default:()=>y});var o=l("../../libs/common/storybook/src/index.ts"),s=l("../../libs/common/utilities/src/index.ts"),r=l("../../libs/form/src/next/form-label/index.ts"),n=l("../../libs/form/src/next/input-field/index.ts"),i=l("../../libs/form/src/next/select/index.ts"),a=l("../../node_modules/lit-html/lit-html.js"),c=l("../../libs/components/src/next/button/index.ts");l("../../node_modules/react/index.js");var d=l("../../node_modules/react/jsx-runtime.js"),p=l("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),u=l("../../node_modules/@storybook/addon-docs/dist/index.mjs");function m(e){let t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",a:"a"},(0,p.RP)(),e.components),{VluxMetaData:l,VluxAlert:o}=t;return o||h("VluxAlert",!0),l||h("VluxMetaData",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.h1,{id:"search-filter---next",children:"Search Filter - next"}),"\n",(0,d.jsx)(l,{id:"components-next-search-filter"}),"\n",(0,d.jsx)("br",{}),"\n",(0,d.jsx)(o,{type:"info",children:`
    In de v2 versie van deze component gebruik je hem via de custom-tag, de interne implementatie is voor de rest
    gelijk gebleven aan deze van de v1 versie. In de toekomst zal deze component grondig herwerkt worden; in de context
    van een herwerking van de vl-table.
`}),"\n",(0,d.jsxs)(t.p,{children:["Gebruik de ",(0,d.jsx)(t.code,{children:"search-filter-next"})," component om een zoek filter te tonen op een pagina."]}),"\n",(0,d.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-js",children:"import { VlSearchFilterComponent } from '@domg-wc/components/next/search-filter';\n"})}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-html",children:"<vl-search-filter-next></vl-search-filter-next>\n"})}),"\n",(0,d.jsx)(u.Hl,{of:j}),"\n",(0,d.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,d.jsx)(u.ov,{of:j}),"\n",(0,d.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,d.jsx)(t.p,{children:(0,d.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-search-filter",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Search Filter"})})]})}function h(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var v=l("../../libs/components/src/next/title/index.ts"),b=l("../../libs/components/src/next/search-filter/vl-search-filter.component.ts"),f=l("../../libs/components/src/next/search-filter/vl-search-filter.defaults.ts");let g={...o.D8,...f.v},x={...(0,o.RN)(!0),filterTitle:{name:"filter-title",description:"De titel van deze zoekfilter.",table:{type:{summary:o.QE.STRING},category:o.R6.ATTRIBUTES,defaultValue:{summary:g.filterTitle}}},alt:{name:"alt",description:"Alternatieve (transparante) achtergrond.",table:{type:{summary:o.QE.BOOLEAN},category:o.R6.ATTRIBUTES,defaultValue:{summary:g.alt}}},mobileModal:{name:"mobile-modal",description:"Activeert geoptimaliseerde weergave voor mobiele apparaten.<br>Dit wordt ook geactiveerd als de viewport kleiner is dan 768px.",table:{type:{summary:o.QE.STRING},category:o.R6.ATTRIBUTES,defaultValue:{summary:g.mobileModal}}},mobileModalTitle:{name:"mobile-modal-title",description:"Stelt de titel in van deze zoekfilter op mobiele apparaten.<br> Als die niet gedeclareerd is, wordt de waarde van filter-title gebruikt.",table:{type:{summary:o.QE.STRING},category:o.R6.ATTRIBUTES,defaultValue:{summary:g.mobileModalTitle}}}},y={id:"components-next-search-filter",title:"Components-next/search-filter",tags:["autodocs"],args:g,argTypes:x,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,p.RP)(),e.components);return t?(0,d.jsx)(t,Object.assign({},e,{children:(0,d.jsx)(m,e)})):m(e)}}}};(0,s.gy)([n.Y,r.E,i.Y,c.Y,b.E,v.I]);let k=(0,o._7)(g,({filterTitle:e,alt:t,mobileModal:l,mobileModalTitle:o})=>(0,a.qy)`
        <vl-search-filter-next
            filter-title=${e}
            ?alt=${t}
            ?mobile-modal=${l}
            mobile-modal-title=${o}
        >
            <form>
                <div>
                    <section>
                        <vl-title-next type="h2" alt no-space-bottom="">Doorzoek projecten</vl-title-next>
                        <div>
                            <vl-form-label-next
                                for="filterOpId"
                                label="Project id"
                                light
                            ></vl-form-label-next>
                            <vl-input-field-next
                                id="filterOpId"
                                type="text"
                                name="id"
                                block
                            ></vl-input-field-next>
                        </div>
                        <div>
                            <vl-form-label-next for="filterOpNaamProject" label="Project naam" light></vl-form-label-next>
                            <vl-input-field-next
                                type="text"
                                id="filterOpNaamProject"
                                name="name"
                                block
                                autocomplete="given-name"
                            ></vl-input-field-next>
                        </div><div>
                            <vl-form-label-next for="filterOpNaamManager" label="Manager familienaam" light></vl-form-label-next>
                            <vl-input-field-next
                                type="text"
                                id="filterOpNaamManager"
                                name="name"
                                block
                                autocomplete="family-name"
                            ></vl-input-field-next>
                        </div>
                    </section>
                    <section>
                        <vl-title-next type="h2" alt no-space-bottom="">Locatie</vl-title-next>
                        <div>
                            <vl-form-label-next for="vl-select-city" label="Stad" light></vl-form-label-next>
                            <vl-select-next
                                name="vl-select-city"
                                deletable
                                block
                                autocomplete="address-level2"
                                placeholder="Kies een stad"
                                .options=${[{label:"Kies een stad",value:""},{label:"Brussel",value:"brussel"},{label:"Gent",value:"gent"}]}
                            >
                            </vl-select-next>
                        </div>
                        <div>
                            <vl-form-label-next for="vl-select-country" label="Land" light></vl-form-label-next>
                            <vl-select-next
                                name="vl-select-country"
                                deletable
                                block
                                autocomplete="address-level2"
                                placeholder="Kies een land"
                                .options=${[{label:"Kies een land",value:""},{label:"België",value:"België"},{label:"Frankrijk",value:"Frankrijk"},{label:"Nederland",value:"Nederland"}]}
                            >
                            </vl-select-next>
                        </div>
                    </section>
                </div>
                <footer>
                    <vl-button-next type="submit">Zoeken</vl-button-next>
                    <vl-button-next type="reset" secondary>Reset</vl-button-next>
                </footer>
            </form>
        </vl-search-filter-next>
    `),j=k.bind({});j.storyName="vl-search-filter - default";let O=k.bind({});O.storyName="vl-search-filter - mobile",O.args={mobileModal:!0,mobileModalTitle:"Mobile title"},O.parameters={layout:"fullscreen",viewport:{defaultViewport:"mobile1"}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:"searchFilterTemplate.bind({}) as any",...j.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:"searchFilterTemplate.bind({}) as any",...O.parameters?.docs?.source}}};let _=["SearchFilterDefault","SearchFilterMobile"]},"../../node_modules/react-dom/client.js":(e,t,l)=>{var o=l("../../node_modules/react-dom/index.js");t.createRoot=o.createRoot,t.hydrateRoot=o.hydrateRoot},"../../libs/components/src/next/title/index.ts":(e,t,l)=>{l.d(t,{I:()=>o.I});var o=l("../../libs/components/src/next/title/vl-title.component.ts")},"../../libs/components/src/next/title/vl-title.component.ts":(e,t,l)=>{l.d(t,{I:()=>c});var o=l("../../libs/common/utilities/src/index.ts");l("../../node_modules/@lit/reactive-element/reactive-element.js");var s=l("../../node_modules/lit-html/lit-html.js");l("../../node_modules/lit-element/lit-element.js");/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var r=(e,t,l)=>{for(var o of t)if(o[0]===e)return(0,o[1])();return null==l?void 0:l()},n=l("../../node_modules/lit/directives/class-map.js"),i=l("../../libs/components/src/next/title/vl-title.css.ts"),a=l("../../libs/components/src/next/title/vl-title.defaults.ts");class c extends o.jW{static get styles(){return[i.Z]}static get properties(){return{type:{type:String},underline:{type:Boolean},noSpaceBottom:{type:Boolean,attribute:"no-space-bottom"},alt:{type:Boolean}}}render(){let e={underline:this.underline,"no-space-bottom":this.noSpaceBottom,alt:this.alt};return(0,s.qy)`
            ${r(this.type,[["h1",()=>(0,s.qy)` <h1 class=${(0,n.H)(e)} part="h1">
                            <slot></slot>
                        </h1>`],["h2",()=>(0,s.qy)` <h2 class=${(0,n.H)(e)} part="h2">
                            <slot></slot>
                        </h2>`],["h3",()=>(0,s.qy)` <h3 class=${(0,n.H)(e)} part="h3">
                            <slot></slot>
                        </h3>`],["h4",()=>(0,s.qy)` <h4 class=${(0,n.H)(e)} part="h4">
                            <slot></slot>
                        </h4>`],["h5",()=>(0,s.qy)` <h5 class=${(0,n.H)(e)} part="h5">
                            <slot></slot>
                        </h5>`],["h6",()=>(0,s.qy)` <h6 class=${(0,n.H)(e)} part="h6">
                            <slot></slot>
                        </h6>`]],()=>(0,s.qy)` <h1 class=${(0,n.H)(e)} part="h1">
                    <slot></slot>
                </h1>`)}
        `}constructor(...e){super(...e),this.type=a.D.type,this.underline=a.D.underline,this.noSpaceBottom=a.D.noSpaceBottom,this.alt=a.D.alt}}c=function(e,t,l,o){var s,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,l):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,l,o);else for(var i=e.length-1;i>=0;i--)(s=e[i])&&(n=(r<3?s(n):r>3?s(t,l,n):s(t,l))||n);return r>3&&n&&Object.defineProperty(t,l,n),n}([(0,o.M1)("vl-title-next")],c)},"../../libs/components/src/next/title/vl-title.defaults.ts":(e,t,l)=>{l.d(t,{D:()=>o});let o={type:"h1",underline:!1,alt:!1,noSpaceBottom:!1}},"../../libs/form/src/next/select/index.ts":(e,t,l)=>{l.d(t,{Y:()=>o.Y});var o=l("../../libs/form/src/next/select/vl-select.component.ts")},"../../libs/form/src/next/select/vl-select.component.ts":(e,t,l)=>{l.d(t,{Y:()=>m});var o=l("../../libs/common/utilities/src/index.ts"),s=l("../../node_modules/@domg/govflanders-style/common/index.js"),r=l("../../node_modules/@domg/govflanders-style/component/index.js"),n=l("../../node_modules/lit/index.js"),i=l("../../node_modules/lit/directives/class-map.js"),a=l("../../node_modules/lit/directives/live.js"),c=l("../../libs/form/src/next/form-control/form-control.ts");let d=(0,n.AH)`
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
`,p=(0,n.AH)`
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
`;var u=l("../../libs/form/src/next/select/vl-select.defaults.ts");class m extends c.M{static get styles(){return[s.h8,s.BI,d,r.py,p]}static get properties(){return{options:{type:Array,attribute:!1},initialOptions:{type:Array,attribute:"initial-options"},block:{type:Boolean},readonly:{type:Boolean},placeholder:{type:String},autocomplete:{type:String},notDeletable:{type:Boolean,attribute:"not-deletable"},value:{type:String}}}get validationTarget(){return this.shadowRoot?.querySelector("select")}connectedCallback(){super.connectedCallback(),this.parseSlottedOptions();let e=this.getSelectedOption();this.value=e?.value||"",this.initialOptions=structuredClone(this.getAllOptions()),this.setupSlotObserver()}disconnectedCallback(){super.disconnectedCallback(),this.slotObserver?.disconnect()}updated(e){if(super.updated(e),e.has("options")){let e=this.getSelectedOption();this.value=e?.value||""}if(e.has("value")){let e={value:this.value};this.setValue(this.value),this.dispatchEvent(new CustomEvent("vl-change",{composed:!0,bubbles:!0,detail:e})),this.dispatchInput&&(this.dispatchEvent(new CustomEvent("vl-input",{bubbles:!0,composed:!0,detail:e})),this.dispatchInput=!1),this.dispatchEventIfValid(e)}}render(){let e={"vl-select__container":!0,"vl-select__container--block":this.block},t={"vl-select":!0,"vl-select--disabled":this.disabled,"vl-select--error":this.isInvalid||this.error,"vl-select--success":this.success,"vl-select--block":this.block},l=!!this.value,o=this.getAllOptions().some(e=>e.group);return(0,n.qy)`
            <div class=${(0,i.H)(e)}>
                <select
                    id=${this.id||n.s6}
                    name=${this.name||n.s6}
                    class=${(0,i.H)(t)}
                    aria-label=${this.label||n.s6}
                    aria-invalid=${this.isInvalid||n.s6}
                    ?required=${this.required}
                    ?disabled=${this.disabled}
                    ?aria-disabled=${this.disabled}
                    ?error=${this.error}
                    .value=${(0,a.V)(this.value)}
                    autocomplete=${this.autocomplete||n.s6}
                    @change=${this.onChange}
                    @input=${this.onSelect}
                >
                    ${this.placeholder?this.renderPlaceholder(l):n.s6}
                    ${o?this.renderGroupedOptions():this.renderSelectOptions(this.getAllOptions())}
                </select>
                ${l&&!this.notDeletable?this.renderClearButton():n.s6}
                <span class="vl-icon vl-vi vl-vi-nav-down" aria-hidden="true"></span>
            </div>
            <div class="slot-container">
                <slot @slotchange=${this.onSlotChange}></slot>
            </div>
        `}renderPlaceholder(e){return(0,n.qy)` <option class="vl-select__placeholder" value="" ?selected=${!e} disabled>
            ${this.placeholder}
        </option>`}renderClearButton(){return(0,n.qy)`
            <button
                type="button"
                class="vl-select__button"
                aria-label=${`Verwijder ${this.label} keuze ${this.getSelectedOption()?.label||this.value||""}`}
                @click=${this.clearValue}
            >
                <span class="vl-icon vl-vi vl-vi-close" aria-hidden="true"></span>
            </button>
        `}renderGroupedOptions(){return Object.entries(this.getGroupedOptions()).map(([e,t])=>(0,n.qy)` <optgroup label=${e}>${this.renderSelectOptions(t)}</optgroup>`)}renderSelectOptions(e){return e.map(e=>(0,n.qy)` <option
                value=${e.value}
                ?selected=${this.value===e.value}
                ?disabled=${e.disabled}
            >
                ${e.label||e.value}
            </option>`)}resetFormControl(){super.resetFormControl(),this.options.length>0?this.options=structuredClone(this.initialOptions):this.parseSlottedOptions();let e=this.getSelectedOption();this.value=e?.value||""}onChange(e){this.value=e?.target?.value}onSelect(){this.dispatchInput=!0}clearValue(){this.dispatchInput=!0,this.value=""}onSlotChange(){this.parseSlottedOptions(),this.requestUpdate()}getSelectedOption(){return[...this.getAllOptions()].reverse().find(e=>e.selected)}getGroupedOptions(){return this.getAllOptions().reduce((e,t)=>{let l=t.group||this.DEFAULT_GROUP_LABEL;return e[l]?e[l].push(t):e[l]=[t],e},{})}setupSlotObserver(){this.slotObserver=new MutationObserver(()=>{this.parseSlottedOptions(),this.requestUpdate()}),this.slotObserver.observe(this,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value","label","selected","disabled"]})}parseSlottedOptions(){let e=Array.from(this.children);this.parsedOptions=e.reduce((e,t)=>{if("option"===t.tagName.toLowerCase())e.push(this.parseOptionElement(t));else if("optgroup"===t.tagName.toLowerCase()){let l=t.label||this.DEFAULT_GROUP_LABEL,o=Array.from(t.querySelectorAll("option")).map(e=>{let t=this.parseOptionElement(e);return t.group=l,t});e.push(...o)}return e},[])}parseOptionElement(e){return{value:e.value||e.textContent?.trim()||"",label:e.textContent?.trim()||e.value||"",selected:e.selected,disabled:e.disabled}}getAllOptions(){return this.options.length>0?this.options:this.parsedOptions}constructor(...e){super(...e),this.options=u.p.options,this.initialOptions=u.p.initialOptions,this.value="",this.block=u.p.block,this.placeholder=u.p.placeholder,this.autocomplete=u.p.autocomplete,this.notDeletable=u.p.notDeletable,this.DEFAULT_GROUP_LABEL="Overig",this.dispatchInput=!1,this.parsedOptions=[]}}m=function(e,t,l,o){var s,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,l):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,l,o);else for(var i=e.length-1;i>=0;i--)(s=e[i])&&(n=(r<3?s(n):r>3?s(t,l,n):s(t,l))||n);return r>3&&n&&Object.defineProperty(t,l,n),n}([(0,o.M1)("vl-select-next")],m)},"../../libs/form/src/next/select/vl-select.defaults.ts":(e,t,l)=>{l.d(t,{p:()=>o});let o={...l("../../libs/form/src/next/form-control/form-control.defaults.ts").i,options:[],initialOptions:[],block:!1,placeholder:"",autocomplete:"",notDeletable:!1}}}]);