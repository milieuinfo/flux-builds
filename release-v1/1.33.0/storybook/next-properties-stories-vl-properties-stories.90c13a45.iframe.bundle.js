(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[5271],{"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(e,t,r)=>{"use strict";r.d(t,{r:()=>h});var s=r("./node_modules/react/index.js"),o=r("./node_modules/react-dom/client.js"),n=new Map,l=({callback:e,children:t})=>{let r=(0,s.useRef)();return(0,s.useLayoutEffect)(()=>{r.current!==e&&(r.current=e,e())},[e]),t},a=async(e,t)=>{let r=await d(t);return new Promise(t=>{r.render(s.createElement(l,{callback:()=>t(null)},e))})},i=(e,t)=>{let r=n.get(e);r&&(r.unmount(),n.delete(e))},d=async e=>{let t=n.get(e);return t||(t=o.createRoot(e),n.set(e,t)),t},c=r("./node_modules/@storybook/blocks/dist/index.mjs"),p={code:c.bD,a:c.Ct,...c.lO},m=class extends s.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:s.createElement(s.Fragment,null,t)}},h=class{constructor(){this.render=async(e,t,o)=>{let n={...p,...t?.components},l=c.WI;return new Promise((i,d)=>{r.e(9506).then(r.bind(r,"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:r})=>a(s.createElement(m,{showException:d,key:Math.random()},s.createElement(r,{components:n},s.createElement(l,{context:e,docsParameter:t}))),o)).then(()=>i())})},this.unmount=e=>{i(e)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(e,t,r)=>{"use strict";r.d(t,{$4:()=>s.$4,Ed:()=>s.Ed,Hw:()=>s.Hw,Uh:()=>s.Uh,Xz:()=>s.Xz,Z$:()=>s.Z$,h_:()=>s.h_}),r("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var s=r("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(e,t,r)=>{"use strict";r.d(t,{NF:()=>n,Zo:()=>i,ah:()=>l,pC:()=>o});var s=r("./node_modules/react/index.js");let o=s.createContext({});function n(e){return function(t){let r=l(t.components);return s.createElement(e,{...t,allComponents:r})}}function l(e){let t=s.useContext(o);return s.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let a={};function i({components:e,children:t,disableParentContext:r}){let n;return n=r?"function"==typeof e?e({}):e||a:l(e),s.createElement(o.Provider,{value:n},t)}},"./libs/components/src/next/properties/stories/vl-properties.stories.ts":(e,t,r)=>{"use strict";r.r(t),r.d(t,{PropertiesCollapsed:()=>W,PropertiesColumns:()=>C,PropertiesDefault:()=>S,PropertiesHtmlEnriched:()=>E,PropertiesWithProps:()=>z,__namedExportsOrder:()=>O,default:()=>P});var s=r("./libs/common/storybook/src/index.ts"),o=r("./libs/common/utilities/src/index.ts"),n=r("./node_modules/lit-html/lit-html.js"),l=r("./libs/common/utilities/src/css/global-styles-decorator.ts"),a=r("./node_modules/lit/index.js");let i=e=>e.map(e=>e.cloneNode(!0)),d=e=>{let t=[],r=[],s=[];return e.forEach(e=>{switch(e.localName){case"label":r.length&&s.length&&(t.push({labels:r,data:s}),r=[],s=[]),r.push(e.children.length>0?i([...e.children]):e.innerHTML);break;case"data":s.push(e.children.length>0?i([...e.children]):e.innerHTML)}}),r.length&&t.push({labels:r,data:s}),t},c=e=>null==e||0==e.length?(console.warn("vl-properties - geen props opgegeven"),[]):e[0]?.localName==="div"?e.map(e=>({class:e.className,items:d([...e.children])})):[{items:d(e)}];var p=r("./libs/common/utilities/src/css/mixin/media-queries.mixin.css.ts");let m=e=>(0,a.iv)`
        width: calc(${e}% - 1rem);
    `,h=()=>(0,a.iv)`
        font-size: 1.6rem;
    `,u=()=>(0,a.iv)`
        grid-column: 1;
        font-size: 1.6rem;
    `,v=e=>(0,a.iv)`
        dl {
            grid-template-columns: [labels] ${e}rem [data] auto;
        }

        dl .item {
            grid-template-columns: [labels] ${e}rem [data] auto;
        }
    `,b=(0,a.iv)`
    :host {
        display: block;
    }

    .column {
        ${m(50)};
        float: left;
    }

    .column--full-width {
        ${m(100)};
        float: left;
    }

    dl {
        display: grid;
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
        color: var(--vl-label-color);
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

    ${(0,p.R)((0,a.iv)`
            .column {
                ${m(100)};
            }

            dd {
                ${u()}
            }

            dt {
                ${h()}
            }
        `)};
`;var g=r("./libs/elements/src/index.ts");let f={labelWidth:17,props:[]};class x extends o.fS{static get styles(){return[g.CX,b]}static get properties(){return{props:{type:Array},aggregatedProps:{type:Array,state:!0},labelWidth:{type:Number,attribute:"label-width"}}}set props(e){this.attributeProps=e,this.buildInternalProperties()}get props(){return this.attributeProps}connectedCallback(){super.connectedCallback(),this.buildInternalProperties(),this.observeLightPropertiesChange()}firstUpdated(e){super.firstUpdated(e),this.shadowRoot&&(this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,this.labelWidthSheet])}updated(e){super.updated(e),e.has("labelWidth")&&this.labelWidth&&this.labelWidthSheet.replace(v(this.labelWidth).toString())}disconnectedCallback(){super.disconnectedCallback(),this.disconnectMutationObservers()}render(){return(0,a.dy)` <dl>${this.aggregatedProps.map(e=>this.renderColumn(e))}</dl> `}renderColumn(e){return e.class?(0,a.dy)` <div class="${e.class}">${e.items.map(e=>this.renderItem(e))}</div>`:(0,a.dy)` ${e.items.map(e=>this.renderItem(e))}`}renderItem(e){return(0,a.dy)` <div class="item">${this.renderLabels(e.labels)} ${this.renderData(e.data)}</div>`}renderLabels(e){return e.map(e=>(0,a.dy)` <dt>${e}</dt>`)}renderData(e){return e.map(e=>(0,a.dy)` <dd>${e}</dd>`)}buildInternalProperties(){this.aggregatedProps=[...this.attributeProps,...c([...this.children])]}disconnectMutationObservers(){this.mutationObserverList.forEach(e=>e.disconnect()),this.mutationObserverList=[]}observeLightPropertiesChange(){this.disconnectMutationObservers(),this.mutationObserverList=[...this.mutationObserverList,(0,o.Gh)(this,e=>{this.buildInternalProperties(),this.observeLightPropertiesChange()})],this.children.length>0&&"div"===this.children[0].localName&&[...this.children].forEach(e=>this.mutationObserverList=[...this.mutationObserverList,(0,o.Gh)(e,e=>{this.buildInternalProperties()})])}constructor(...e){super(...e),this.attributeProps=f.props,this.aggregatedProps=f.props,this.mutationObserverList=[],this.labelWidth=f.labelWidth,this.labelWidthSheet=new CSSStyleSheet}}x=function(e,t,r,s){var o,n=arguments.length,l=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(n<3?o(l):n>3?o(t,r,l):o(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l}([(0,l.Q)(),(0,o.a6)("vl-properties-next")],x),r("./node_modules/react/index.js");var y=r("./node_modules/react/jsx-runtime.js"),j=r("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),$=r("./node_modules/@storybook/addon-docs/dist/index.mjs");function w(e){let t=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",h3:"h3"},(0,j.ah)(),e.components);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(t.h1,{id:"properties---next",children:"Properties - next"}),"\n",(0,y.jsxs)(t.p,{children:["Gebruik de ",(0,y.jsx)(t.code,{children:"properties-next"})," component om properties te tonen op een pagina. Je kan de properties specifiëren als\ninner-html of als json-structuur meegeven aan het ",(0,y.jsx)(t.code,{children:"props"})," attribuut."]}),"\n",(0,y.jsxs)(t.p,{children:["Deze component is de nieuwste variant die de (nog als element geschreven)\n",(0,y.jsx)(t.a,{href:"/docs/elements-properties--documentatie",children:"vl-properties"})," vervangt."]}),"\n",(0,y.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,y.jsx)(t.pre,{children:(0,y.jsx)(t.code,{className:"language-js",children:"import { VlPropertiesComponent } from '@domg-wc/components/next/properties';\n"})}),"\n",(0,y.jsx)(t.pre,{children:(0,y.jsx)(t.code,{className:"language-html",children:"<vl-properties-next></vl-properties-next>\n"})}),"\n",(0,y.jsx)($.Xz,{of:S}),"\n",(0,y.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,y.jsx)($.Ed,{of:S}),"\n",(0,y.jsx)(t.h3,{id:"props",children:"Props"}),"\n",(0,y.jsx)(t.p,{children:"De props zijn als volgt gespecifiëerd:"}),"\n",(0,y.jsx)(t.pre,{children:(0,y.jsx)(t.code,{className:"language-ts",children:"export type Props = Column[];\n\nexport interface Column {\n    class?: string; // column / column--full-width / collapsed\n    items: Item[];\n}\n\nexport interface Item {\n    labels: string[] | Node[][];\n    data: string[] | Node[][];\n}\n"})}),"\n",(0,y.jsx)(t.p,{children:"Bijvoorbeeld:"}),"\n",(0,y.jsx)(t.pre,{children:(0,y.jsx)(t.code,{className:"language-ts",children:"[\n    {\n        class: 'column',\n        items: [\n            {\n                labels: ['Straat'],\n                data: ['Appelstraat', 'Perenstraat'],\n            },\n        ],\n    },\n]\n"})}),"\n",(0,y.jsx)(t.h2,{id:"varianten",children:"Varianten"}),"\n",(0,y.jsx)(t.h3,{id:"met-props",children:"Met props"}),"\n",(0,y.jsxs)(t.p,{children:["Door bovenstaande ",(0,y.jsx)(t.code,{children:"props"})," te zetten krijg je een mix van de attribuut-data en de via inner-html gespecifieerde data."]}),"\n",(0,y.jsx)($.Xz,{of:z}),"\n",(0,y.jsx)(t.h3,{id:"met-html-verrijking",children:"Met html verrijking"}),"\n",(0,y.jsx)(t.p,{children:"Naast gewone tekst kan zowel in 'label' als in 'data' html-code gestoken worden die dan 1 op 1 wordt overgenomen."}),"\n",(0,y.jsx)($.Xz,{of:E}),"\n",(0,y.jsx)(t.h3,{id:"collapsed",children:"Collapsed"}),"\n",(0,y.jsxs)(t.p,{children:["In mobiele-mode (< 767px) worden labels en data onder i.p.v. naast elkaar getoond. Deze layout kan ook expliciet\nafgedwongen worden via de ",(0,y.jsx)(t.code,{children:"collapsed"})," class."]}),"\n",(0,y.jsx)($.Xz,{of:W}),"\n",(0,y.jsx)(t.h3,{id:"columns",children:"Columns"}),"\n",(0,y.jsxs)(t.p,{children:["M.b.v. de ",(0,y.jsx)(t.code,{children:"column"})," (en ",(0,y.jsx)(t.code,{children:"column--full-width"}),") class kunnen er 2 kolommen gespecifiëerd worden."]}),"\n",(0,y.jsx)($.Xz,{of:C}),"\n",(0,y.jsx)(t.h2,{id:"gekende-beperkingen",children:"Gekende beperkingen"}),"\n",(0,y.jsxs)(t.p,{children:["Er is ondersteuning om meerdere labels en data op te geven in de lijst. 1 label met meerdere data waardes en\nmeerdere labels met 1 data waarde zien er logisch uit. De combinatie van meerdere labels en meerdere data waardes\nneemt meer wit ruimte in dan nodig. Dit fundamenteel oplossen kan met de\n",(0,y.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Masonry_layout",target:"_blank",rel:"nofollow noopener noreferrer",children:"Masonry layout"}),", deze wordt echter\nnog niet ondersteund door alle browsers, vandaar is dat momenteel niet voorzien. Een manier om er rond te werken\n(enkel als je het nodig hebt) is 1 label en 1 data te gebruiken en de verschillende waardes te wrappen in een ",(0,y.jsx)(t.code,{children:"<div>"}),"."]}),"\n",(0,y.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,y.jsxs)(t.p,{children:["Technisch zal de component zich in zijn shadow-dom renderen als een\n",(0,y.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl",target:"_blank",rel:"nofollow noopener noreferrer",children:"description list"}),"."]}),"\n",(0,y.jsxs)(t.p,{children:["De look & feel van de component is conform de\n",(0,y.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-properties",target:"_blank",rel:"nofollow noopener noreferrer",children:"Properties"}),"\ncomponent van Digitaal Vlaanderen."]})]})}let k={...s._O,...f},_={...(0,s.Wp)(!0),labelWidth:{name:"label-width",description:"De breedte van de labels, in REM. Heeft geen impact als de properties 'collapsed' worden.",table:{type:{summary:s.vK.NUMBER},category:s.aA.ATTRIBUTES,defaultValue:{summary:k.labelWidth}}},props:{name:"props",description:"De props in JSON formaat.",table:{type:{summary:s.vK.ARRAY},category:s.aA.PROPERTIES,defaultValue:{summary:k.props}}}};(0,o.YV)([x]);let P={title:"Components-next/properties",tags:["autodocs"],args:k,argTypes:_,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,j.ah)(),e.components);return t?(0,y.jsx)(t,Object.assign({},e,{children:(0,y.jsx)(w,e)})):w(e)}}}},S=(0,s.yg)(k,({labelWidth:e,props:t})=>(0,n.dy)`
        <vl-properties-next label-width=${e} .props=${t}>
            <label>Woonplaats</label>
            <data>Brussel</data>
            <label>Postcode</label>
            <data>1000</data>
        </vl-properties-next>
    `).bind({});S.storyName="vl-properties-next - default";let z=S.bind({});z.storyName="vl-properties-next - with props",z.args={props:[{class:"column",items:[{labels:["Straat"],data:["Appelstraat","Perenstraat"]}]}]};let E=(0,s.yg)(k,({labelWidth:e,props:t})=>(0,n.dy)`
        <vl-properties-next label-width=${e} .props=${t}>
            <label
                ><span is="vl-icon" data-vl-icon="location" data-vl-size="small" data-vl-before></span
                ><span>Woonplaats</span></label
            >
            <data
                ><span is="vl-icon" data-vl-icon="alert-triangle" data-vl-size="small" data-vl-before></span
                ><span>Brussel</span></data
            >
            <label>Postcode</label>
            <data>1000</data>
        </vl-properties-next>
    `);E.storyName="vl-properties-next - html enriched";let W=(0,s.yg)(k,({labelWidth:e,props:t})=>(0,n.dy)`
        <vl-properties-next label-width=${e} .props=${t}>
            <div class="collapsed">
                <label>Woonplaats</label>
                <data>Brussel</data>
                <label>Postcode</label>
                <data>1000</data>
            </div>
        </vl-properties-next>
    `);W.storyName="vl-properties-next - collapsed";let C=(0,s.yg)(k,({labelWidth:e,props:t})=>(0,n.dy)`
        <vl-properties-next label-width=${e} .props=${t}>
            <div class="column">
                <label>Woonplaats</label>
                <data>Brussel</data>
            </div>
            <div class="column">
                <label>Postcode</label>
                <data>1000</data>
            </div>
            <div class="column column--full-width">
                <label>Gewest</label>
                <data>Brussel</data>
            </div>
        </vl-properties-next>
    `);C.storyName="vl-properties-next - columns",S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"story(propertiesArgs, ({\n  labelWidth,\n  props\n}) => html`\n        <vl-properties-next label-width=${labelWidth} .props=${props}>\n            <label>Woonplaats</label>\n            <data>Brussel</data>\n            <label>Postcode</label>\n            <data>1000</data>\n        </vl-properties-next>\n    `)",...S.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:"PropertiesTemplate.bind({})",...z.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:'story(propertiesArgs, ({\n  labelWidth,\n  props\n}) => html`\n        <vl-properties-next label-width=${labelWidth} .props=${props}>\n            <label\n                ><span is="vl-icon" data-vl-icon="location" data-vl-size="small" data-vl-before></span\n                ><span>Woonplaats</span></label\n            >\n            <data\n                ><span is="vl-icon" data-vl-icon="alert-triangle" data-vl-size="small" data-vl-before></span\n                ><span>Brussel</span></data\n            >\n            <label>Postcode</label>\n            <data>1000</data>\n        </vl-properties-next>\n    `)',...E.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:'story(propertiesArgs, ({\n  labelWidth,\n  props\n}) => html`\n        <vl-properties-next label-width=${labelWidth} .props=${props}>\n            <div class="collapsed">\n                <label>Woonplaats</label>\n                <data>Brussel</data>\n                <label>Postcode</label>\n                <data>1000</data>\n            </div>\n        </vl-properties-next>\n    `)',...W.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:'story(propertiesArgs, ({\n  labelWidth,\n  props\n}) => html`\n        <vl-properties-next label-width=${labelWidth} .props=${props}>\n            <div class="column">\n                <label>Woonplaats</label>\n                <data>Brussel</data>\n            </div>\n            <div class="column">\n                <label>Postcode</label>\n                <data>1000</data>\n            </div>\n            <div class="column column--full-width">\n                <label>Gewest</label>\n                <data>Brussel</data>\n            </div>\n        </vl-properties-next>\n    `)',...C.parameters?.docs?.source}}};let O=["PropertiesDefault","PropertiesWithProps","PropertiesHtmlEnriched","PropertiesCollapsed","PropertiesColumns"]},"./node_modules/memoizerific sync recursive":e=>{function t(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id="./node_modules/memoizerific sync recursive",e.exports=t},"./node_modules/react-dom/client.js":(e,t,r)=>{"use strict";var s=r("./node_modules/react-dom/index.js");t.createRoot=s.createRoot,t.hydrateRoot=s.hydrateRoot},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,r)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=r("./node_modules/react/index.js"),o=Symbol.for("react.element"),n=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var s,n={},d=null,c=null;for(s in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)l.call(t,s)&&!i.hasOwnProperty(s)&&(n[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===n[s]&&(n[s]=t[s]);return{$$typeof:o,type:e,key:d,ref:c,props:n,_owner:a.current}}t.Fragment=n,t.jsx=d,t.jsxs=d},"./node_modules/react/jsx-runtime.js":(e,t,r)=>{"use strict";e.exports=r("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./libs/common/utilities/src/css/global-styles-decorator.ts":(e,t,r)=>{"use strict";r.d(t,{Q:()=>f});var s=r("./node_modules/lit/index.js");let o=(0,s.iv)`
    :root {
        --vl-white: #ffffff;

        --vl-background-color: var(--vl-white);
        --vl-map-background-color: #ffffff;
        --vl-background-alt-color: #f7f9fc;

        --vl-text-color: #333332;
        --vl-text-alt-color: #687483;

        --vl-border-color: #8695a8;

        --vl-action-color: #0055cc;
        --vl-action-color--hover: #003bb0;
        --vl-action-color--active: #004099; /* --vl-action-color 10% darker */
        --vl-action-color--visited: #660599;
        --vl-action-color--disabled: #687483;
        --vl-action-background-color--disabled: #cbd2d9;

        --vl-action-tertiary-color: var(--vl-action-color); /* --vl-action-color */
        --vl-action-tertiary-color--hover: var(--vl-action-color); /* --vl-action-color */
        --vl-action-tertiary-border-color: #c6cdd3;
        --vl-action-tertiary-border-color--hover: #5990de;

        --vl-error-color: #d2373c;
        --vl-error-color--hover: #aa2729;

        --vl-focus-color: #0055cca6; /* --vl-action-color 65% opacity */

        --vl-label-color: #687483;
    }
`,n=(0,s.iv)`
    :root {
        --vl-border-radius: 0.3rem;
    }
`,l=(0,s.iv)`
    :root {
        --vl-spacing--xxsmall: 0.5rem;
        --vl-spacing--xsmall: 1rem;
        --vl-spacing--small: 1.5rem;
        --vl-spacing--normal: 2rem;
        --vl-spacing--medium: 3rem;
        --vl-spacing--large: 6rem;
    }
`,a=(e,t,r,o)=>(0,s.iv)`
    @font-face {
        font-family: ${(0,s.$m)(e)};
        src: url(${(0,s.$m)(`${t}.woff2`)}) format('woff2'),
            url(${(0,s.$m)(`${t}.woff`)}) format('woff');
        font-weight: ${r};
        font-style: ${(0,s.$m)(o)};
    }
`,i="Flanders Art Sans",d="Flanders Art Serif",c="FlandersArtSans",p="FlandersArtSerif",m="https://cdn.omgeving.vlaanderen.be/domg/govflanders-font/22.0.2/flanders/",h=(0,s.iv)`
    ${a(i,`${m}sans/${c}-Light`,300,"normal")}
    ${a(i,`${m}sans/${c}-Regular`,400,"normal")}
    ${a(i,`${m}sans/${c}-Medium`,500,"normal")}
    ${a(i,`${m}sans/${c}-Bold`,700,"normal")}

    ${a(i,`${m}italic/${c}-Light`,300,"italic")}
    ${a(i,`${m}italic/${c}-Regular`,400,"italic")}
    ${a(i,`${m}italic/${c}-Medium`,500,"italic")}
    ${a(i,`${m}italic/${c}-Bold`,700,"italic")}

    ${a(d,`${m}serif/${p}-Light`,300,"normal")}
    ${a(d,`${m}serif/${p}-Regular`,400,"normal")}
    ${a(d,`${m}serif/${p}-Medium`,500,"normal")}
    ${a(d,`${m}serif/${p}-Bold`,700,"normal")}
`,u=(0,s.iv)`
    :root {
        --vl-font: ${(0,s.$m)(i)}, sans-serif;
        --vl-accent-font: ${(0,s.$m)(d)}, serif;

        --vl-font-size: 1.8rem;
        --vl-font-size--mobile: 1.6rem;
        --vl-font-size--small: 1.6rem;
        --vl-font-size--large: 2rem;

        --vl-line-height: 1.5;
        --vl-line-height--mobile: 1.33;
    }
`;var v=r("./libs/common/utilities/src/css/mixin/media-queries.mixin.css.ts");let b=[o,n,l,u,h,(0,s.iv)`
    html {
        font-family: var(--vl-font);
        /* 62.5% Font Size Trick  */
        font-size: 62.5%;
    }

    body {
        font-size: var(--vl-font-size);
        line-height: var(--vl-line-height);
        color: var(--vl-text-color);
    }

    ${(0,v.R)((0,s.iv)`
            body {
                font-size: var(--vl-font-size--mobile);
                line-height: var(--vl-line-height--mobile);
            }
        `)}
`];class g{static{this.registered=!1}static register(){this.registered||(document.adoptedStyleSheets=[...document.adoptedStyleSheets,...b.map(e=>e.styleSheet)],this.registered=!0,console.log("RegisterGlobalStyles: global styling toegevoegd aan het document"))}}let f=()=>e=>{g.register()}},"./libs/common/utilities/src/css/mixin/media-queries.mixin.css.ts":(e,t,r)=>{"use strict";r.d(t,{R:()=>o,Y:()=>n});var s=r("./node_modules/lit/index.js");let o=e=>(0,s.iv)`
    @media screen and (max-width: 767px) {
        ${e}
    }
`,n=e=>(0,s.iv)`
    @media screen and (max-width: 1023px) {
        ${e}
    }
`}}]);