"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[555],{"../../node_modules/@storybook/addon-docs/dist/index.mjs":(e,t,l)=>{l.d(t,{Hl:()=>o.Hl,W8:()=>o.W8,kL:()=>o.kL,ov:()=>o.ov}),l("../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var o=l("../../node_modules/@storybook/addon-docs/node_modules/@storybook/blocks/dist/index.mjs")},"../../libs/components/src/next/search-filter/stories/vl-search-filter.stories.ts":(e,t,l)=>{l.r(t),l.d(t,{SearchFilterDefault:()=>j,SearchFilterMobile:()=>_,__namedExportsOrder:()=>$,default:()=>y});var o=l("../../libs/common/storybook/src/index.ts"),s=l("../../libs/common/utilities/src/index.ts"),r=l("../../libs/form/src/next/form-label/index.ts"),n=l("../../libs/form/src/next/input-field/index.ts"),i=l("../../libs/form/src/next/select/index.ts"),a=l("../../node_modules/lit-html/lit-html.js"),c=l("../../libs/components/src/next/button/index.ts");l("../../node_modules/react/index.js");var d=l("../../node_modules/react/jsx-runtime.js"),p=l("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),m=l("../../node_modules/@storybook/addon-docs/dist/index.mjs");function u(e){let t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",a:"a"},(0,p.RP)(),e.components),{VluxMetaData:l,VluxAlert:o}=t;return o||h("VluxAlert",!0),l||h("VluxMetaData",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.h1,{id:"search-filter---next",children:"Search Filter - next"}),"\n",(0,d.jsx)(l,{id:"components-next-search-filter"}),"\n",(0,d.jsx)("br",{}),"\n",(0,d.jsx)(o,{type:"info",children:`
    In de v2 versie van deze component gebruik je hem via de custom-tag, de interne implementatie is voor de rest
    gelijk gebleven aan deze van de v1 versie. In de toekomst zal deze component grondig herwerkt worden; in de context
    van een herwerking van de vl-table.
`}),"\n",(0,d.jsxs)(t.p,{children:["Gebruik de ",(0,d.jsx)(t.code,{children:"search-filter-next"})," component om een zoek filter te tonen op een pagina."]}),"\n",(0,d.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-js",children:"import { VlSearchFilterComponent } from '@domg-wc/components/next/search-filter';\n"})}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-html",children:"<vl-search-filter-next></vl-search-filter-next>\n"})}),"\n",(0,d.jsx)(m.Hl,{of:j}),"\n",(0,d.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,d.jsx)(m.ov,{of:j}),"\n",(0,d.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,d.jsx)(t.p,{children:(0,d.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-search-filter",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Search Filter"})})]})}function h(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var v=l("../../libs/components/src/next/title/index.ts"),b=l("../../libs/components/src/next/search-filter/vl-search-filter.component.ts"),f=l("../../libs/components/src/next/search-filter/vl-search-filter.defaults.ts");let x={...o.D8,...f.v},g={...(0,o.RN)(!0),filterTitle:{name:"filter-title",description:"De titel van deze zoekfilter.",table:{type:{summary:o.QE.STRING},category:o.R6.ATTRIBUTES,defaultValue:{summary:x.filterTitle}}},alt:{name:"alt",description:"Alternatieve (transparante) achtergrond.",table:{type:{summary:o.QE.BOOLEAN},category:o.R6.ATTRIBUTES,defaultValue:{summary:x.alt}}},mobileModal:{name:"mobile-modal",description:"Activeert geoptimaliseerde weergave voor mobiele apparaten.<br>Dit wordt ook geactiveerd als de viewport kleiner is dan 768px.",table:{type:{summary:o.QE.STRING},category:o.R6.ATTRIBUTES,defaultValue:{summary:x.mobileModal}}},mobileModalTitle:{name:"mobile-modal-title",description:"Stelt de titel in van deze zoekfilter op mobiele apparaten.<br> Als die niet gedeclareerd is, wordt de waarde van filter-title gebruikt.",table:{type:{summary:o.QE.STRING},category:o.R6.ATTRIBUTES,defaultValue:{summary:x.mobileModalTitle}}}},y={id:"components-next-search-filter",title:"Components-next/search-filter",tags:["autodocs"],args:x,argTypes:g,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,p.RP)(),e.components);return t?(0,d.jsx)(t,Object.assign({},e,{children:(0,d.jsx)(u,e)})):u(e)}}}};(0,s.gy)([n.Y,r.E,i.Y,c.Y,b.E,v.I]);let k=(0,o._7)(x,({filterTitle:e,alt:t,mobileModal:l,mobileModalTitle:o})=>(0,a.qy)`
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
                    <vl-button-next type="submit" custom-css="button {flex:1}">Zoeken</vl-button-next>
                    <vl-button-next type="reset" custom-css="button {flex:1}" secondary>Reset</vl-button-next-->
                </footer>
            </form>
        </vl-search-filter-next>
    `),j=k.bind({});j.storyName="vl-search-filter - default";let _=k.bind({});_.storyName="vl-search-filter - mobile",_.args={mobileModal:!0,mobileModalTitle:"Mobile title"},_.parameters={layout:"fullscreen",viewport:{defaultViewport:"mobile1"}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:"searchFilterTemplate.bind({}) as any",...j.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:"searchFilterTemplate.bind({}) as any",..._.parameters?.docs?.source}}};let $=["SearchFilterDefault","SearchFilterMobile"]},"../../node_modules/lit/directives/live.js":(e,t,l)=>{l.d(t,{V:()=>n});var o=l("../../node_modules/lit-html/lit-html.js"),s=l("../../node_modules/lit-html/directive.js"),r=l("../../node_modules/lit-html/directive-helpers.js"),n=(0,s.u$)(class extends s.WL{constructor(e){if(super(e),e.type!==s.OA.PROPERTY&&e.type!==s.OA.ATTRIBUTE&&e.type!==s.OA.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,r.Rt)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,t){var[l]=t;if(l===o.c0||l===o.s6)return l;var n=e.element,i=e.name;if(e.type===s.OA.PROPERTY){if(l===n[i])return o.c0}else if(e.type===s.OA.BOOLEAN_ATTRIBUTE){if(!!l===n.hasAttribute(i))return o.c0}else if(e.type===s.OA.ATTRIBUTE&&n.getAttribute(i)===l+"")return o.c0;return(0,r.mY)(e),l}})},"../../libs/components/src/next/title/index.ts":(e,t,l)=>{l.d(t,{I:()=>o.I});var o=l("../../libs/components/src/next/title/vl-title.component.ts")},"../../libs/components/src/next/title/vl-title.component.ts":(e,t,l)=>{l.d(t,{I:()=>p});var o=l("../../libs/common/utilities/src/index.ts");l("../../node_modules/@lit/reactive-element/reactive-element.js");var s=l("../../node_modules/lit-html/lit-html.js");l("../../node_modules/lit-element/lit-element.js");/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var r=(e,t,l)=>{for(var o of t)if(o[0]===e)return(0,o[1])();return null==l?void 0:l()},n=l("../../node_modules/lit/directives/class-map.js"),i=l("../../libs/common/utilities/src/css/index.ts"),a=l("../../node_modules/lit/index.js");let c=[(0,a.AH)`
        h1 {
            ${i.Cv}
        }

        h2 {
            ${i.J9}
        }

        h3 {
            ${i.QL}
        }

        h4 {
            ${i.JU}
        }

        h5 {
            ${i.Qw}
        }

        h6 {
            ${i.Jd}
        }
    `,...[1,2,3,4,5,6].map(e=>(0,a.AH)`
                h${e} {
                    display: flex;
                    align-items: center;
                }

                h${e}.alt {
                    text-transform: uppercase;
                    font-weight: 500;
                    border-bottom: 3px solid rgb(232, 235, 238);
                    padding: 1.3rem 0 0.7rem;
                    margin: 0 0 2rem;
                }

                h${e}.underline {
                    border-bottom: 1px solid #cbd2da;
                    margin-bottom: 1.5rem;
                }

                h${e}.no-space-bottom {
                    margin-bottom: 0;
                }

                @media screen and (max-width: ${i.gT}px) {
                    h${e}.underline {
                        margin-bottom: 1rem;
                    }
                }
            `)];var d=l("../../libs/components/src/next/title/vl-title.defaults.ts");class p extends o.jW{static get styles(){return[c]}static get properties(){return{type:{type:String},underline:{type:Boolean},noSpaceBottom:{type:Boolean,attribute:"no-space-bottom"},alt:{type:Boolean}}}render(){let e={underline:this.underline,"no-space-bottom":this.noSpaceBottom,alt:this.alt};return(0,s.qy)`
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
        `}constructor(...e){super(...e),this.type=d.D.type,this.underline=d.D.underline,this.noSpaceBottom=d.D.noSpaceBottom,this.alt=d.D.alt}}p=function(e,t,l,o){var s,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,l):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,l,o);else for(var i=e.length-1;i>=0;i--)(s=e[i])&&(n=(r<3?s(n):r>3?s(t,l,n):s(t,l))||n);return r>3&&n&&Object.defineProperty(t,l,n),n}([(0,o.M1)("vl-title-next")],p)},"../../libs/components/src/next/title/vl-title.defaults.ts":(e,t,l)=>{l.d(t,{D:()=>o});let o={type:"h1",underline:!1,alt:!1,noSpaceBottom:!1}},"../../libs/form/src/next/input-field/index.ts":(e,t,l)=>{l.d(t,{Y:()=>o.Y});var o=l("../../libs/form/src/next/input-field/vl-input-field.component.ts")},"../../libs/form/src/next/select/index.ts":(e,t,l)=>{l.d(t,{Y:()=>o.Y});var o=l("../../libs/form/src/next/select/vl-select.component.ts")},"../../libs/form/src/next/select/vl-select.component.ts":(e,t,l)=>{l.d(t,{Y:()=>u});var o=l("../../libs/common/utilities/src/index.ts"),s=l("../../node_modules/@domg/govflanders-style/common/index.js"),r=l("../../node_modules/@domg/govflanders-style/component/index.js"),n=l("../../node_modules/lit/index.js"),i=l("../../node_modules/lit/directives/class-map.js"),a=l("../../node_modules/lit/directives/live.js"),c=l("../../libs/form/src/next/form-control/form-control.ts");let d=(0,n.AH)`
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

        &:hover {
            border: #05c 0.1rem solid;
            background-color: #e6eefa;
            color: #003bb0;
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
`;var m=l("../../libs/form/src/next/select/vl-select.defaults.ts");class u extends c.M{static get styles(){return[s.h8,s.BI,d,r.py,p]}static get properties(){return{options:{type:Array},block:{type:Boolean},readonly:{type:Boolean},placeholder:{type:String},autocomplete:{type:String},notDeletable:{type:Boolean,attribute:"not-deletable"},value:{type:String,state:!0}}}connectedCallback(){super.connectedCallback();let e=this.getSelectedOption();this.value=e?.value??null,this.initialOptions=JSON.parse(JSON.stringify(this.options))}updated(e){if(super.updated(e),e.has("options")){let e=this.getSelectedOption();this.value=e?.value??null}if(e.has("value")){let e={value:this.value};this.setValue(this.value),this.dispatchEvent(new CustomEvent("vl-change",{composed:!0,bubbles:!0,detail:e})),this.dispatchInput&&(this.dispatchEvent(new CustomEvent("vl-input",{bubbles:!0,composed:!0,detail:e})),this.dispatchInput=!1),this.dispatchEventIfValid(e)}}render(){let e={"vl-select__container":!0,"vl-select__container--block":this.block},t={"vl-select":!0,"vl-select--disabled":this.disabled,"vl-select--error":this.isInvalid||this.error,"vl-select--success":this.success,"vl-select--block":this.block},l=null!==this.value,o=this.options.some(e=>e.group);return(0,n.qy)`
            <div class=${(0,i.H)(e)}>
                <select
                    id=${this.id||n.s6}
                    name=${this.name||n.s6}
                    class=${(0,i.H)(t)}
                    aria-label=${this.label||n.s6}
                    ?required=${this.required}
                    ?disabled=${this.disabled}
                    ?error=${this.error}
                    .value=${(0,a.V)(this.value)}
                    autocomplete=${this.autocomplete||n.s6}
                    @change=${this.onChange}
                    @input=${this.onSelect}
                >
                    ${this.placeholder?this.renderPlaceholder(l):n.s6}
                    ${o?this.renderGroupedOptions():this.renderSelectOptions(this.options)}
                </select>
                ${l&&!this.notDeletable?this.renderClearButton():n.s6}
                <span class="vl-icon vl-vi vl-vi-nav-down"></span>
            </div>
        `}renderPlaceholder(e){return(0,n.qy)` <option class="vl-select__placeholder" value="" ?selected=${!e} disabled>
            ${this.placeholder}
        </option>`}renderClearButton(){return(0,n.qy)` <button class="vl-select__button" aria-label="Verwijder keuze" @click=${this.clearValue}>
            <span class="vl-icon vl-vi vl-vi-close"></span>
        </button>`}renderGroupedOptions(){return Object.entries(this.getGroupedOptions()).map(([e,t])=>(0,n.qy)` <optgroup label=${e}>${this.renderSelectOptions(t)}</optgroup>`)}renderSelectOptions(e){return e.map(e=>(0,n.qy)` <option
                value=${e.value}
                ?selected=${this.value===e.value}
                ?disabled=${e.disabled}
            >
                ${e.label||e.value}
            </option>`)}get validationTarget(){return this.shadowRoot?.querySelector("select")}resetFormControl(){for(super.resetFormControl();this.options.length;)this.options.pop();this.initialOptions.forEach(e=>this.options.push({...e})),this.value&&this.requestUpdate("options")}onChange(e){this.value=e?.target?.value}onSelect(){this.dispatchInput=!0}clearValue(){this.dispatchInput=!0,this.value=null}getSelectedOption(){return[...this.options].reverse().find(e=>e.selected)}getGroupedOptions(){return this.options.reduce((e,t)=>{let l=t.group||this.DEFAULT_GROUP_LABEL;return e[l]?e[l].push(t):e[l]=[t],e},{})}constructor(...e){super(...e),this.options=m.p.options,this.block=m.p.block,this.placeholder=m.p.placeholder,this.autocomplete=m.p.autocomplete,this.notDeletable=m.p.notDeletable,this.value=null,this.initialOptions=[],this.DEFAULT_GROUP_LABEL="Overig",this.dispatchInput=!1}}u=function(e,t,l,o){var s,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,l):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,l,o);else for(var i=e.length-1;i>=0;i--)(s=e[i])&&(n=(r<3?s(n):r>3?s(t,l,n):s(t,l))||n);return r>3&&n&&Object.defineProperty(t,l,n),n}([(0,o.M1)("vl-select-next")],u)},"../../libs/form/src/next/select/vl-select.defaults.ts":(e,t,l)=>{l.d(t,{p:()=>o});let o={...l("../../libs/form/src/next/form-control/form-control.defaults.ts").i,options:[],block:!1,placeholder:"",autocomplete:"",notDeletable:!1}}}]);