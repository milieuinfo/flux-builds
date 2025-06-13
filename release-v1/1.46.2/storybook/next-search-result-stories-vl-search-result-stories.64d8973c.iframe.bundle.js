"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[7913],{"../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(e,t,r)=>{r.d(t,{f:()=>p});var s=r("../../node_modules/react/index.js"),n=r("../../node_modules/react-dom/client.js"),l=new Map,a=({callback:e,children:t})=>{let r=(0,s.useRef)();return(0,s.useLayoutEffect)(()=>{r.current!==e&&(r.current=e,e())},[e]),t},o=async(e,t)=>{let r=await c(t);return new Promise(t=>{r.render(s.createElement(a,{callback:()=>t(null)},e))})},i=(e,t)=>{let r=l.get(e);r&&(r.unmount(),l.delete(e))},c=async e=>{let t=l.get(e);return t||(t=n.createRoot(e),l.set(e,t)),t},d=r("../../node_modules/@storybook/blocks/dist/index.mjs"),h={code:d.XA,a:d.zE,...d.Sw},u=class extends s.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:s.createElement(s.Fragment,null,t)}},p=class{constructor(){this.render=async(e,t,n)=>{let l={...h,...t?.components},a=d.kQ;return new Promise((i,c)=>{r.e(814).then(r.bind(r,"../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:r})=>o(s.createElement(u,{showException:c,key:Math.random()},s.createElement(r,{components:l},s.createElement(a,{context:e,docsParameter:t}))),n)).then(()=>i())})},this.unmount=e=>{i(e)}}}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(e,t,r)=>{r.d(t,{Hl:()=>s.Hl,W8:()=>s.W8,kL:()=>s.kL,ov:()=>s.ov}),r("../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var s=r("../../node_modules/@storybook/blocks/dist/index.mjs")},"../../libs/components/src/next/search-result/stories/vl-search-result.stories.ts":(e,t,r)=>{r.r(t),r.d(t,{SearchResultDefault:()=>b,SearchResultGroup:()=>v,__namedExportsOrder:()=>g,default:()=>x});var s=r("../../libs/common/utilities/src/index.ts"),n=r("../../node_modules/lit-html/lit-html.js"),l=r("../../libs/components/src/next/search-result/vl-search-result-properties.component.ts"),a=r("../../libs/components/src/next/search-result/vl-search-result-title.component.ts"),o=r("../../libs/components/src/next/search-result/vl-search-result.component.ts"),i=r("../../libs/common/storybook/src/index.ts");let c={...i.D8,defaultSlot:""},d={...(0,i.RN)(!0),defaultSlot:{name:"[default]",description:"De inhoud van het zoekresultaat",table:{type:{summary:i.QE.HTML},category:i.R6.SLOTS,defaultValue:{summary:c.defaultSlot}}}};r("../../node_modules/react/index.js");var h=r("../../node_modules/react/jsx-runtime.js"),u=r("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),p=r("../../node_modules/@storybook/addon-docs/dist/index.mjs");function m(e){let t=Object.assign({h1:"h1",p:"p",code:"code",ul:"ul",li:"li",h2:"h2",pre:"pre",h3:"h3",a:"a"},(0,u.RP)(),e.components),{VluxMetaData:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VluxMetaData",!0),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(t.h1,{id:"search-result---next",children:"Search Result - next"}),"\n",(0,h.jsx)(r,{id:"components-next-search-result"}),"\n",(0,h.jsxs)(t.p,{children:["Gebruik de ",(0,h.jsx)(t.code,{children:"search-result-next"})," component om een zoekresultaat weer te geven.",(0,h.jsx)("br",{})]}),"\n",(0,h.jsx)(t.p,{children:"Volgende sub-componenten zijn beschikbaar om het zoekresultaat op te bouwen:"}),"\n",(0,h.jsxs)(t.ul,{children:["\n",(0,h.jsxs)(t.li,{children:["VlSearchResultProperties ",(0,h.jsx)(t.code,{children:"[vl-search-result-properties-next]"})]}),"\n",(0,h.jsxs)(t.li,{children:["VlSearchResultText ",(0,h.jsx)(t.code,{children:"[vl-search-result-text-next]"})]}),"\n",(0,h.jsxs)(t.li,{children:["VlSearchResultTitle ",(0,h.jsx)(t.code,{children:"[vl-search-result-title-next]"})]}),"\n"]}),"\n",(0,h.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:"language-js",children:"import { VlSearchResultComponent } from '@domg-wc/components/next/search-result';\n"})}),"\n",(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:"language-html",children:"<vl-search-result-next></vl-search-result-next>\n"})}),"\n",(0,h.jsx)(p.Hl,{of:b}),"\n",(0,h.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,h.jsx)(p.ov,{of:b}),"\n",(0,h.jsx)(t.h2,{id:"varianten",children:"Varianten"}),"\n",(0,h.jsx)(t.h3,{id:"lijst",children:"Lijst"}),"\n",(0,h.jsxs)(t.p,{children:["Om een lijst van zoekresultaten te tonen kan je ze groeperen met de\n",(0,h.jsx)(t.a,{href:"/docs/styles-next-layout-afnemers-group--documentatie",children:"Group"})," layout."]}),"\n",(0,h.jsx)(p.Hl,{of:v}),"\n",(0,h.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,h.jsx)(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,h.jsx)(t.p,{children:(0,h.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-search-results",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Search Results"})})]})}let x={id:"components-next-search-result",title:"Components-next/search-result",tags:["autodocs"],args:c,argTypes:d,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,u.RP)(),e.components);return t?(0,h.jsx)(t,Object.assign({},e,{children:(0,h.jsx)(m,e)})):m(e)}}}};(0,s.gy)([o.z,a.J,l.y]);let b=()=>(0,n.qy)`
    <vl-search-result-next>
        <vl-search-result-title-next>
            <a href="#">Vlaanderenkiest.be</a>
        </vl-search-result-title-next>
        <vl-search-result-text-next>
            <time>Maandag 22 oktober 2018</time>
        </vl-search-result-text-next>
        <vl-search-result-properties-next>
            <label>Vlaanderenkiest.be</label>
            <data>Verkiezingsresultaten op Vlaanderenkiest.be...</data>
            <label>Vlaanderen intern</label>
            <data>Werkt u bij de Vlaamse overheid...</data>
        </vl-search-result-properties-next>
    </vl-search-result-next>
`;b.storyName="vl-search-result-next - default";let v=()=>(0,n.qy)`
    <div class="vl-group-next vl-group-next--column vl-group-next--stretch-children vl-group-next--no-gap">
        <vl-search-result-next>
            <vl-search-result-title-next>
                <a href="#">Vlaanderenkiest.be</a>
            </vl-search-result-title-next>
            <vl-search-result-text-next>
                <time>Maandag 22 oktober 2018</time>
            </vl-search-result-text-next>
            <vl-search-result-properties-next>
                <label>Vlaanderenkiest.be</label>
                <data>Verkiezingsresultaten op Vlaanderenkiest.be...</data>
                <label>Vlaanderen intern</label>
                <data>Werkt u bij de Vlaamse overheid...</data>
            </vl-search-result-properties-next>
        </vl-search-result-next>
        <vl-search-result-next>
            <vl-search-result-title-next>
                <a href="#">Vlaanderenkiest.be</a>
            </vl-search-result-title-next>
            <vl-search-result-text-next>
                <time>Maandag 22 oktober 2018</time>
            </vl-search-result-text-next>
            <vl-search-result-properties-next>
                <label>Vlaanderenkiest.be</label>
                <data>Verkiezingsresultaten op Vlaanderenkiest.be...</data>
                <label>Vlaanderen intern</label>
                <data>Werkt u bij de Vlaamse overheid...</data>
            </vl-search-result-properties-next>
        </vl-search-result-next>
    </div>
`;v.storyName="vl-search-result-next - group",b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:'() => html`\n    <vl-search-result-next>\n        <vl-search-result-title-next>\n            <a href="#">Vlaanderenkiest.be</a>\n        </vl-search-result-title-next>\n        <vl-search-result-text-next>\n            <time>Maandag 22 oktober 2018</time>\n        </vl-search-result-text-next>\n        <vl-search-result-properties-next>\n            <label>Vlaanderenkiest.be</label>\n            <data>Verkiezingsresultaten op Vlaanderenkiest.be...</data>\n            <label>Vlaanderen intern</label>\n            <data>Werkt u bij de Vlaamse overheid...</data>\n        </vl-search-result-properties-next>\n    </vl-search-result-next>\n`',...b.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:'() => html`\n    <div class="vl-group-next vl-group-next--column vl-group-next--stretch-children vl-group-next--no-gap">\n        <vl-search-result-next>\n            <vl-search-result-title-next>\n                <a href="#">Vlaanderenkiest.be</a>\n            </vl-search-result-title-next>\n            <vl-search-result-text-next>\n                <time>Maandag 22 oktober 2018</time>\n            </vl-search-result-text-next>\n            <vl-search-result-properties-next>\n                <label>Vlaanderenkiest.be</label>\n                <data>Verkiezingsresultaten op Vlaanderenkiest.be...</data>\n                <label>Vlaanderen intern</label>\n                <data>Werkt u bij de Vlaamse overheid...</data>\n            </vl-search-result-properties-next>\n        </vl-search-result-next>\n        <vl-search-result-next>\n            <vl-search-result-title-next>\n                <a href="#">Vlaanderenkiest.be</a>\n            </vl-search-result-title-next>\n            <vl-search-result-text-next>\n                <time>Maandag 22 oktober 2018</time>\n            </vl-search-result-text-next>\n            <vl-search-result-properties-next>\n                <label>Vlaanderenkiest.be</label>\n                <data>Verkiezingsresultaten op Vlaanderenkiest.be...</data>\n                <label>Vlaanderen intern</label>\n                <data>Werkt u bij de Vlaamse overheid...</data>\n            </vl-search-result-properties-next>\n        </vl-search-result-next>\n    </div>\n`',...v.parameters?.docs?.source}}};let g=["SearchResultDefault","SearchResultGroup"]},"../../node_modules/react-dom/client.js":(e,t,r)=>{var s=r("../../node_modules/react-dom/index.js");t.createRoot=s.createRoot,t.hydrateRoot=s.hydrateRoot},"../../libs/components/src/next/properties/index.ts":(e,t,r)=>{r.d(t,{L:()=>s.L});var s=r("../../libs/components/src/next/properties/vl-properties.component.ts")},"../../libs/components/src/next/properties/vl-properties.component.ts":(e,t,r)=>{r.d(t,{L:()=>b});var s=r("../../libs/common/utilities/src/index.ts"),n=r("../../libs/elements/src/index.ts"),l=r("../../node_modules/lit/index.js");let a=e=>e.map(e=>e.cloneNode(!0)),o=e=>{let t=[],r=[],s=[];return e.forEach(e=>{switch(e.localName){case"label":r.length&&s.length&&(t.push({labels:r,data:s}),r=[],s=[]),r.push(e.children.length>0?a([...e.children]):e.innerHTML);break;case"data":s.push(e.children.length>0?a([...e.children]):e.innerHTML)}}),r.length&&t.push({labels:r,data:s}),t},i=e=>null==e||0==e.length?(console.warn("vl-properties - geen props opgegeven"),[]):e[0]?.localName==="div"?e.map(e=>({class:e.className,items:o([...e.children])})):[{items:o(e)}];var c=r("../../libs/common/utilities/src/css/index.ts");let d=e=>(0,l.AH)`
        width: calc(${e}% - 1rem);
    `,h=()=>(0,l.AH)`
        font-size: 1.6rem;
    `,u=()=>(0,l.AH)`
        grid-column: 1;
        font-size: 1.6rem;
    `,p=e=>(0,l.AH)`
        dl .item {
            grid-template-columns: [labels] ${e}% [data] auto;
        }

        @media screen and (max-width: ${c.gT}px) {
            dl {
                grid-template-columns: 100%;
            }

            dl .item {
                grid-template-columns: 100%;
            }
        }
    `,m=(0,l.AH)`
    :host {
        display: block;
    }

    .column {
        ${d(50)};
        float: left;
    }

    .column--full-width {
        ${d(100)};
        float: left;
    }

    dl {
        display: grid;
        word-break: break-word;
    }

    dl:has(.item) {
        display: initial;
    }

    dl .item {
        display: grid;
        padding-bottom: 2rem;
    }

    dt {
        font-size: 1.8rem;
        color: var(--vl-color--label);
        padding-right: 1rem;
        grid-column: 1;
    }

    .collapsed dt {
        ${h()}
    }

    dd {
        font-size: 1.8rem;
        grid-column: 2;
    }

    .collapsed dd {
        ${u()}
    }

    @media screen and (max-width: ${c.gT}px) {
        dd {
            ${u()}
        }

        dt {
            ${h()}
        }
    }
`;var x=r("../../libs/components/src/next/properties/vl-properties.defaults.ts");class b extends s.jW{static get styles(){return[n.hF,m]}static get properties(){return{props:{type:Array},aggregatedProps:{type:Array,state:!0},labelWidth:{type:Number,attribute:"label-width"}}}set props(e){this.attributeProps=e,this.buildInternalProperties()}get props(){return this.attributeProps}connectedCallback(){super.connectedCallback(),this.buildInternalProperties(),this.observeLightPropertiesChange()}firstUpdated(e){super.firstUpdated(e),this.shadowRoot&&(this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,this.labelWidthSheet])}updated(e){super.updated(e),e.has("labelWidth")&&this.labelWidth&&this.labelWidthSheet.replace(p(this.labelWidth).toString())}disconnectedCallback(){super.disconnectedCallback(),this.disconnectMutationObservers()}render(){return(0,l.qy)` <dl>${this.aggregatedProps.map(e=>this.renderColumn(e))}</dl> `}renderColumn(e){return e.class?(0,l.qy)` <div class="${e.class}">${e.items.map(e=>this.renderItem(e))}</div>`:(0,l.qy)` ${e.items.map(e=>this.renderItem(e))}`}renderItem(e){return(0,l.qy)` <div class="item">${this.renderLabels(e.labels)} ${this.renderData(e.data)}</div>`}renderLabels(e){return e.map(e=>(0,l.qy)` <dt>${e}</dt>`)}renderData(e){return e.map(e=>(0,l.qy)` <dd>${e}</dd>`)}buildInternalProperties(){this.aggregatedProps=[...this.attributeProps,...i([...this.children])]}disconnectMutationObservers(){this.mutationObserverList.forEach(e=>e.disconnect()),this.mutationObserverList=[]}observeLightPropertiesChange(){this.disconnectMutationObservers(),this.mutationObserverList=[...this.mutationObserverList,(0,s.U_)(this,e=>{this.buildInternalProperties(),this.observeLightPropertiesChange()})],this.children.length>0&&"div"===this.children[0].localName&&[...this.children].forEach(e=>this.mutationObserverList=[...this.mutationObserverList,(0,s.U_)(e,e=>{this.buildInternalProperties()})])}constructor(...e){super(...e),this.attributeProps=x.g.props,this.aggregatedProps=x.g.props,this.mutationObserverList=[],this.labelWidth=x.g.labelWidth,this.labelWidthSheet=new CSSStyleSheet}}b=function(e,t,r,s){var n,l=arguments.length,a=l<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,s);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(a=(l<3?n(a):l>3?n(t,r,a):n(t,r))||a);return l>3&&a&&Object.defineProperty(t,r,a),a}([(0,s.M1)("vl-properties-next")],b)},"../../libs/components/src/next/properties/vl-properties.defaults.ts":(e,t,r)=>{r.d(t,{g:()=>s});let s={labelWidth:25,props:[]}},"../../libs/components/src/next/search-result/vl-search-result-properties.component.ts":(e,t,r)=>{r.d(t,{y:()=>o});var s=r("../../libs/common/utilities/src/index.ts"),n=r("../../libs/components/src/next/properties/index.ts"),l=r("../../node_modules/lit/index.js");let a=(0,l.AH)`
    dl {
        margin: initial;
    }

    dt {
        display: inline;
        font-weight: 500;
        float: left;

        &::after {
            display: block;
            content: ":";
            float: right;
            margin-right: 0.5rem;
        }
    }

    dd {
        display: inline;
        margin-inline-start: initial;
    }
`;class o extends n.L{static get styles(){return[a]}}o=function(e,t,r,s){var n,l=arguments.length,a=l<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,s);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(a=(l<3?n(a):l>3?n(t,r,a):n(t,r))||a);return l>3&&a&&Object.defineProperty(t,r,a),a}([(0,s.M1)("vl-search-result-properties-next")],o)},"../../libs/components/src/next/search-result/vl-search-result-text.component.ts":(e,t,r)=>{r.d(t,{k:()=>n});var s=r("../../libs/common/utilities/src/index.ts");class n extends s.jW{createRenderRoot(){return this}}n=function(e,t,r,s){var n,l=arguments.length,a=l<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,s);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(a=(l<3?n(a):l>3?n(t,r,a):n(t,r))||a);return l>3&&a&&Object.defineProperty(t,r,a),a}([(0,s.M1)("vl-search-result-text-next")],n)},"../../libs/components/src/next/search-result/vl-search-result-title.component.ts":(e,t,r)=>{r.d(t,{J:()=>n});var s=r("../../libs/common/utilities/src/index.ts");class n extends s.jW{createRenderRoot(){return this}}n=function(e,t,r,s){var n,l=arguments.length,a=l<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,s);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(a=(l<3?n(a):l>3?n(t,r,a):n(t,r))||a);return l>3&&a&&Object.defineProperty(t,r,a),a}([(0,s.M1)("vl-search-result-title-next")],n)},"../../libs/components/src/next/search-result/vl-search-result.component.ts":(e,t,r)=>{r.d(t,{z:()=>h});var s=r("../../libs/common/utilities/src/index.ts"),n=r("../../libs/elements/src/index.ts"),l=r("../../libs/components/src/next/search-result/vl-search-result-properties.component.ts"),a=r("../../libs/components/src/next/search-result/vl-search-result-text.component.ts"),o=r("../../libs/components/src/next/search-result/vl-search-result-title.component.ts"),i=r("../../libs/common/utilities/src/css/index.ts"),c=r("../../node_modules/lit/index.js");let d=(0,c.AH)`
    :host {
        display: block;
        margin-bottom: 3.5rem;

        > * {
            display: block;
        }
    }

    vl-search-result-text-next {
        margin-bottom: 1.5rem;
    }

    vl-search-result-title-next {
        font-weight: 500;
        font-size: 2rem;
        height: 2.7rem;
        line-height: 2.7rem;

        @media screen and (max-width: ${i.gT}px) {
            font-size: 1.6rem;
        }

        a {
            font-size: 2rem;
            text-decoration: none;

            &:hover,
            &:focus {
                text-decoration: underline;
            }
        }
    }
`;class h extends s.jW{static{(0,s.gy)([a.k,o.J,l.y])}static get styles(){return[...n.hF,d]}connectedCallback(){super.connectedCallback(),this.shadowRoot?.append(...this.childNodes)}}h=function(e,t,r,s){var n,l=arguments.length,a=l<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,s);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(a=(l<3?n(a):l>3?n(t,r,a):n(t,r))||a);return l>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.fD)(),(0,s.M1)("vl-search-result-next")],h)}}]);