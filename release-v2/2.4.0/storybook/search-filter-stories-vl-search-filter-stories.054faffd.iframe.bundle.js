"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[7313],{"../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(e,t,l)=>{l.d(t,{f:()=>u});var o=l("../../node_modules/react/index.js"),r=l("../../node_modules/react-dom/client.js"),s=new Map,i=({callback:e,children:t})=>{let l=(0,o.useRef)();return(0,o.useLayoutEffect)(()=>{l.current!==e&&(l.current=e,e())},[e]),t},n=async(e,t)=>{let l=await c(t);return new Promise(t=>{l.render(o.createElement(i,{callback:()=>t(null)},e))})},a=(e,t)=>{let l=s.get(e);l&&(l.unmount(),s.delete(e))},c=async e=>{let t=s.get(e);return t||(t=r.createRoot(e),s.set(e,t)),t},d=l("../../node_modules/@storybook/blocks/dist/index.mjs"),p={code:d.XA,a:d.zE,...d.Sw},m=class extends o.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:o.createElement(o.Fragment,null,t)}},u=class{constructor(){this.render=async(e,t,r)=>{let s={...p,...t?.components},i=d.kQ;return new Promise((a,c)=>{l.e(814).then(l.bind(l,"../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:l})=>n(o.createElement(m,{showException:c,key:Math.random()},o.createElement(l,{components:s},o.createElement(i,{context:e,docsParameter:t}))),r)).then(()=>a())})},this.unmount=e=>{a(e)}}}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(e,t,l)=>{l.d(t,{Hl:()=>o.Hl,W8:()=>o.W8,kL:()=>o.kL,ov:()=>o.ov}),l("../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var o=l("../../node_modules/@storybook/blocks/dist/index.mjs")},"../../libs/components/src/block/search-filter/stories/vl-search-filter.stories.ts":(e,t,l)=>{l.r(t),l.d(t,{SearchFilterDefault:()=>j,SearchFilterMobile:()=>_,__namedExportsOrder:()=>w,default:()=>k});var o=l("../../resources/utils-storybook/index.ts"),r=l("../../libs/common/src/index.ts"),s=l("../../node_modules/lit-html/lit-html.js"),i=l("../../libs/components/src/atom/button/index.ts");l("../../node_modules/react/index.js");var n=l("../../node_modules/react/jsx-runtime.js"),a=l("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),c=l("../../node_modules/@storybook/addon-docs/dist/index.mjs");function d(e){let t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",a:"a"},(0,a.RP)(),e.components),{FluxMetaData:l,FluxAlert:o}=t;return o||p("FluxAlert",!0),l||p("FluxMetaData",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"search-filter",children:"Search Filter"}),"\n",(0,n.jsx)(l,{id:"components-block-search-filter"}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(o,{type:"info",children:`
    In de v2 versie van deze component gebruik je hem via de custom-tag, de interne implementatie is voor de rest
    gelijk gebleven aan deze van de v1 versie. In de toekomst zal deze component grondig herwerkt worden; in de context
    van een herwerking van de vl-table.
`}),"\n",(0,n.jsxs)(t.p,{children:["Gebruik de ",(0,n.jsx)(t.code,{children:"search-filter"})," component om een zoek filter te tonen op een pagina."]}),"\n",(0,n.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"import { VlSearchFilterComponent } from '@domg-wc/components/block';\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:"<vl-search-filter></vl-search-filter>\n"})}),"\n",(0,n.jsx)(c.Hl,{of:j}),"\n",(0,n.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,n.jsx)(c.ov,{of:j}),"\n",(0,n.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-search-filter",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Search Filter"})})]})}function p(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var m=l("../../libs/components/src/atom/title/index.ts"),u=l("../../libs/components/src/block/search-filter/vl-search-filter.component.ts"),h=l("../../libs/components/src/block/search-filter/vl-search-filter.defaults.ts");let v={...o.D8,...h.v},b={...o.RN,filterTitle:{name:"filter-title",description:"De titel van deze zoekfilter.",table:{type:{summary:o.QE.STRING},category:o.R6.ATTRIBUTES,defaultValue:{summary:v.filterTitle}}},alt:{name:"alt",description:"Alternatieve (transparante) achtergrond.",table:{type:{summary:o.QE.BOOLEAN},category:o.R6.ATTRIBUTES,defaultValue:{summary:v.alt}}},mobileModal:{name:"mobile-modal",description:"Activeert geoptimaliseerde weergave voor mobiele apparaten.<br>Dit wordt ook geactiveerd als de viewport kleiner is dan 768px.",table:{type:{summary:o.QE.STRING},category:o.R6.ATTRIBUTES,defaultValue:{summary:v.mobileModal}}},mobileModalTitle:{name:"mobile-modal-title",description:"Stelt de titel in van deze zoekfilter op mobiele apparaten.<br> Als die niet gedeclareerd is, wordt de waarde van filter-title gebruikt.",table:{type:{summary:o.QE.STRING},category:o.R6.ATTRIBUTES,defaultValue:{summary:v.mobileModalTitle}}}};var f=l("../../libs/components/src/form/input-field/index.ts"),g=l("../../libs/components/src/form/form-label/index.ts"),y=l("../../libs/components/src/form/select/index.ts");let k={id:"components-block-search-filter",title:"Components - Block/search-filter",tags:["autodocs"],args:v,argTypes:b,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,a.RP)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}}}};(0,r.gy)([f.Y,g.E,y.Y,i.Y,u.E,m.I]);let x=(0,o._7)(v,({filterTitle:e,alt:t,mobileModal:l,mobileModalTitle:o})=>(0,s.qy)`
        <vl-search-filter
            filter-title=${e}
            ?alt=${t}
            ?mobile-modal=${l}
            mobile-modal-title=${o}
        >
            <form>
                <div>
                    <section>
                        <vl-title type="h2" alt no-space-bottom="">Doorzoek projecten</vl-title>
                        <div>
                            <vl-form-label for="filterOpId" label="Project id" light></vl-form-label>
                            <vl-input-field id="filterOpId" type="text" name="id" block></vl-input-field>
                        </div>
                        <div>
                            <vl-form-label for="filterOpNaamProject" label="Project naam" light></vl-form-label>
                            <vl-input-field
                                type="text"
                                id="filterOpNaamProject"
                                name="name"
                                block
                                autocomplete="given-name"
                            ></vl-input-field>
                        </div>
                        <div>
                            <vl-form-label for="filterOpNaamManager" label="Manager familienaam" light></vl-form-label>
                            <vl-input-field
                                type="text"
                                id="filterOpNaamManager"
                                name="name"
                                block
                                autocomplete="family-name"
                            ></vl-input-field>
                        </div>
                    </section>
                    <section>
                        <vl-title type="h2" alt no-space-bottom="">Locatie</vl-title>
                        <div>
                            <vl-form-label for="vl-select-city" label="Stad" light></vl-form-label>
                            <vl-select
                                name="vl-select-city"
                                deletable
                                block
                                autocomplete="address-level2"
                                placeholder="Kies een stad"
                                .options=${[{label:"Kies een stad",value:""},{label:"Brussel",value:"brussel"},{label:"Gent",value:"gent"}]}
                            >
                            </vl-select>
                        </div>
                        <div>
                            <vl-form-label for="vl-select-country" label="Land" light></vl-form-label>
                            <vl-select
                                name="vl-select-country"
                                deletable
                                block
                                autocomplete="address-level2"
                                placeholder="Kies een land"
                                .options=${[{label:"Kies een land",value:""},{label:"België",value:"België"},{label:"Frankrijk",value:"Frankrijk"},{label:"Nederland",value:"Nederland"}]}
                            >
                            </vl-select>
                        </div>
                    </section>
                </div>
                <footer>
                    <vl-button type="submit">Zoeken</vl-button>
                    <vl-button type="reset" secondary>Reset</vl-button>
                </footer>
            </form>
        </vl-search-filter>
    `),j=x.bind({});j.storyName="vl-search-filter - default";let _=x.bind({});_.storyName="vl-search-filter - mobile",_.args={mobileModal:!0,mobileModalTitle:"Mobile title"},_.parameters={layout:"fullscreen",viewport:{defaultViewport:"mobile1"}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:"searchFilterTemplate.bind({}) as any",...j.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:"searchFilterTemplate.bind({}) as any",..._.parameters?.docs?.source}}};let w=["SearchFilterDefault","SearchFilterMobile"]},"../../node_modules/react-dom/client.js":(e,t,l)=>{var o=l("../../node_modules/react-dom/index.js");t.createRoot=o.createRoot,t.hydrateRoot=o.hydrateRoot},"../../libs/components/src/form/select/index.ts":(e,t,l)=>{l.d(t,{Y:()=>o.Y});var o=l("../../libs/components/src/form/select/vl-select.component.ts")},"../../libs/components/src/form/select/vl-select.component.ts":(e,t,l)=>{l.d(t,{Y:()=>u});var o=l("../../libs/common/src/index.ts"),r=l("../../node_modules/@domg/govflanders-style/common/index.js"),s=l("../../node_modules/@domg/govflanders-style/component/index.js"),i=l("../../node_modules/lit/index.js"),n=l("../../node_modules/lit/directives/class-map.js"),a=l("../../node_modules/lit/directives/live.js"),c=l("../../libs/components/src/form/form-control/index.ts");let d=(0,i.AH)`
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
`,p=(0,i.AH)`
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
`;var m=l("../../libs/components/src/form/select/vl-select.defaults.ts");class u extends c.M{static get styles(){return[r.h8,r.BI,d,s.py,p]}static get properties(){return{options:{type:Array},initialOptions:{type:Array,attribute:"initial-options"},block:{type:Boolean},readonly:{type:Boolean},placeholder:{type:String},autocomplete:{type:String},notDeletable:{type:Boolean,attribute:"not-deletable"},value:{type:String}}}get validationTarget(){return this.shadowRoot?.querySelector("select")}connectedCallback(){super.connectedCallback();let e=this.getSelectedOption();this.value=e?.value||"",this.initialOptions=structuredClone(this.options)}updated(e){if(super.updated(e),e.has("options")){let e=this.getSelectedOption();this.value=e?.value||""}if(e.has("value")){let e={value:this.value};this.setValue(this.value),this.dispatchEvent(new CustomEvent("vl-change",{composed:!0,bubbles:!0,detail:e})),this.dispatchInput&&(this.dispatchEvent(new CustomEvent("vl-input",{bubbles:!0,composed:!0,detail:e})),this.dispatchInput=!1),this.dispatchEventIfValid(e)}}render(){let e={"vl-select__container":!0,"vl-select__container--block":this.block},t={"vl-select":!0,"vl-select--disabled":this.disabled,"vl-select--error":this.isInvalid||this.error,"vl-select--success":this.success,"vl-select--block":this.block},l=!!this.value,o=this.options.some(e=>e.group);return(0,i.qy)`
            <div class=${(0,n.H)(e)}>
                <select
                    id=${this.id||i.s6}
                    name=${this.name||i.s6}
                    class=${(0,n.H)(t)}
                    aria-label=${this.label||i.s6}
                    aria-invalid=${this.isInvalid||i.s6}
                    ?required=${this.required}
                    ?disabled=${this.disabled}
                    ?aria-disabled=${this.disabled}
                    ?error=${this.error}
                    .value=${(0,a.V)(this.value)}
                    autocomplete=${this.autocomplete||i.s6}
                    @change=${this.onChange}
                    @input=${this.onSelect}
                >
                    ${this.placeholder?this.renderPlaceholder(l):i.s6}
                    ${o?this.renderGroupedOptions():this.renderSelectOptions(this.options)}
                </select>
                ${l&&!this.notDeletable?this.renderClearButton():i.s6}
                <span class="vl-icon vl-vi vl-vi-nav-down" aria-hidden="true"></span>
            </div>
        `}renderPlaceholder(e){return(0,i.qy)` <option class="vl-select__placeholder" value="" ?selected=${!e} disabled>
            ${this.placeholder}
        </option>`}renderClearButton(){return(0,i.qy)`
            <button
                type="button"
                class="vl-select__button"
                aria-label=${`Verwijder ${this.label} keuze ${this.getSelectedOption()?.label||this.value||""}`}
                @click=${this.clearValue}
            >
                <span class="vl-icon vl-vi vl-vi-close" aria-hidden="true"></span>
            </button>
        `}renderGroupedOptions(){return Object.entries(this.getGroupedOptions()).map(([e,t])=>(0,i.qy)` <optgroup label=${e}>${this.renderSelectOptions(t)}</optgroup>`)}renderSelectOptions(e){return e.map(e=>(0,i.qy)` <option
                value=${e.value}
                ?selected=${this.value===e.value}
                ?disabled=${e.disabled}
            >
                ${e.label||e.value}
            </option>`)}resetFormControl(){super.resetFormControl(),this.options=structuredClone(this.initialOptions);let e=this.getSelectedOption();this.value=e?.value||""}onChange(e){this.value=e?.target?.value}onSelect(){this.dispatchInput=!0}clearValue(){this.dispatchInput=!0,this.value=""}getSelectedOption(){return[...this.options].reverse().find(e=>e.selected)}getGroupedOptions(){return this.options.reduce((e,t)=>{let l=t.group||this.DEFAULT_GROUP_LABEL;return e[l]?e[l].push(t):e[l]=[t],e},{})}constructor(...e){super(...e),this.options=m.p.options,this.initialOptions=m.p.initialOptions,this.value="",this.block=m.p.block,this.placeholder=m.p.placeholder,this.autocomplete=m.p.autocomplete,this.notDeletable=m.p.notDeletable,this.DEFAULT_GROUP_LABEL="Overig",this.dispatchInput=!1}}u=function(e,t,l,o){var r,s=arguments.length,i=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,l):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,l,o);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(i=(s<3?r(i):s>3?r(t,l,i):r(t,l))||i);return s>3&&i&&Object.defineProperty(t,l,i),i}([(0,o.M1)("vl-select")],u)},"../../libs/components/src/form/select/vl-select.defaults.ts":(e,t,l)=>{l.d(t,{p:()=>o});let o={...l("../../libs/components/src/form/form-control/form-control.defaults.ts").i,options:[],initialOptions:[],block:!1,placeholder:"",autocomplete:"",notDeletable:!1}}}]);