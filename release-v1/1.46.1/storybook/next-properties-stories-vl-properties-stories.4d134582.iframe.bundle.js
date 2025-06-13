"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[3710],{"../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(e,t,r)=>{r.d(t,{f:()=>h});var s=r("../../node_modules/react/index.js"),n=r("../../node_modules/react-dom/client.js"),o=new Map,l=({callback:e,children:t})=>{let r=(0,s.useRef)();return(0,s.useLayoutEffect)(()=>{r.current!==e&&(r.current=e,e())},[e]),t},a=async(e,t)=>{let r=await d(t);return new Promise(t=>{r.render(s.createElement(l,{callback:()=>t(null)},e))})},i=(e,t)=>{let r=o.get(e);r&&(r.unmount(),o.delete(e))},d=async e=>{let t=o.get(e);return t||(t=n.createRoot(e),o.set(e,t)),t},p=r("../../node_modules/@storybook/blocks/dist/index.mjs"),c={code:p.XA,a:p.zE,...p.Sw},m=class extends s.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:s.createElement(s.Fragment,null,t)}},h=class{constructor(){this.render=async(e,t,n)=>{let o={...c,...t?.components},l=p.kQ;return new Promise((i,d)=>{r.e(814).then(r.bind(r,"../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:r})=>a(s.createElement(m,{showException:d,key:Math.random()},s.createElement(r,{components:o},s.createElement(l,{context:e,docsParameter:t}))),n)).then(()=>i())})},this.unmount=e=>{i(e)}}}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(e,t,r)=>{r.d(t,{Hl:()=>s.Hl,W8:()=>s.W8,kL:()=>s.kL,ov:()=>s.ov}),r("../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var s=r("../../node_modules/@storybook/blocks/dist/index.mjs")},"../../libs/components/src/next/properties/stories/vl-properties.stories.ts":(e,t,r)=>{r.r(t),r.d(t,{PropertiesCollapsed:()=>j,PropertiesColumns:()=>f,PropertiesDefault:()=>g,PropertiesHtmlEnriched:()=>v,PropertiesWithProps:()=>x,__namedExportsOrder:()=>y,default:()=>b});var s=r("../../libs/common/storybook/src/index.ts"),n=r("../../libs/common/utilities/src/index.ts"),o=r("../../node_modules/lit-html/lit-html.js"),l=r("../../libs/components/src/next/icon/index.ts"),a=r("../../libs/components/src/next/properties/vl-properties.component.ts");r("../../node_modules/react/index.js");var i=r("../../node_modules/react/jsx-runtime.js"),d=r("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),p=r("../../node_modules/@storybook/addon-docs/dist/index.mjs");function c(e){let t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",a:"a"},(0,d.RP)(),e.components),{VluxMetaData:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VluxMetaData",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"properties---next",children:"Properties - next"}),"\n",(0,i.jsx)(r,{id:"components-next-properties"}),"\n",(0,i.jsxs)(t.p,{children:["Gebruik de ",(0,i.jsx)(t.code,{children:"properties-next"})," component om properties te tonen op een pagina. Je kan de properties specifiëren als\ninner-html of als json-structuur meegeven aan het ",(0,i.jsx)(t.code,{children:"props"})," attribuut."]}),"\n",(0,i.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"import { VlPropertiesComponent } from '@domg-wc/components/next/properties';\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:"<vl-properties-next></vl-properties-next>\n"})}),"\n",(0,i.jsx)(p.Hl,{of:g}),"\n",(0,i.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,i.jsx)(p.ov,{of:g}),"\n",(0,i.jsx)(t.h3,{id:"props",children:"Props"}),"\n",(0,i.jsx)(t.p,{children:"De props zijn als volgt gespecifiëerd:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"export type Props = Column[];\n\nexport interface Column {\n    class?: string; // column / column--full-width / collapsed\n    items: Item[];\n}\n\nexport interface Item {\n    labels: string[] | Node[][];\n    data: string[] | Node[][];\n}\n"})}),"\n",(0,i.jsx)(t.p,{children:"Bijvoorbeeld:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"[\n    {\n        class: 'column',\n        items: [\n            {\n                labels: ['Straat'],\n                data: ['Appelstraat', 'Perenstraat'],\n            },\n        ],\n    },\n]\n"})}),"\n",(0,i.jsx)(t.h2,{id:"varianten",children:"Varianten"}),"\n",(0,i.jsx)(t.h3,{id:"met-props",children:"Met props"}),"\n",(0,i.jsxs)(t.p,{children:["Door bovenstaande ",(0,i.jsx)(t.code,{children:"props"})," te zetten krijg je een mix van de attribuut-data en de via inner-html gespecifieerde data."]}),"\n",(0,i.jsx)(p.Hl,{of:x}),"\n",(0,i.jsx)(t.h3,{id:"met-html-verrijking",children:"Met html verrijking"}),"\n",(0,i.jsx)(t.p,{children:"Naast gewone tekst kan zowel in 'label' als in 'data' html-code gestoken worden die dan 1 op 1 wordt overgenomen."}),"\n",(0,i.jsx)(p.Hl,{of:v}),"\n",(0,i.jsx)(t.h3,{id:"collapsed",children:"Collapsed"}),"\n",(0,i.jsxs)(t.p,{children:["In mobiele-mode (< 767px) worden labels en data onder i.p.v. naast elkaar getoond. Deze layout kan ook expliciet\nafgedwongen worden via de ",(0,i.jsx)(t.code,{children:"collapsed"})," class."]}),"\n",(0,i.jsx)(p.Hl,{of:j}),"\n",(0,i.jsx)(t.h3,{id:"columns",children:"Columns"}),"\n",(0,i.jsxs)(t.p,{children:["M.b.v. de ",(0,i.jsx)(t.code,{children:"column"})," (en ",(0,i.jsx)(t.code,{children:"column--full-width"}),") class kunnen er 2 kolommen gespecifiëerd worden."]}),"\n",(0,i.jsx)(p.Hl,{of:f}),"\n",(0,i.jsx)(t.h2,{id:"gekende-beperkingen",children:"Gekende beperkingen"}),"\n",(0,i.jsxs)(t.p,{children:["Er is ondersteuning om meerdere labels en data op te geven in de lijst. 1 label met meerdere data waardes en\nmeerdere labels met 1 data waarde zien er logisch uit. De combinatie van meerdere labels en meerdere data waardes\nneemt meer wit ruimte in dan nodig. Dit fundamenteel oplossen kan met de\n",(0,i.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Masonry_layout",target:"_blank",rel:"nofollow noopener noreferrer",children:"Masonry layout"}),", deze wordt echter\nnog niet ondersteund door alle browsers, vandaar is dat momenteel niet voorzien. Een manier om er rond te werken\n(enkel als je het nodig hebt) is 1 label en 1 data te gebruiken en de verschillende waardes te wrappen in een ",(0,i.jsx)(t.code,{children:"<div>"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,i.jsxs)(t.p,{children:["Technisch zal de component zich in zijn shadow-dom renderen als een\n",(0,i.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl",target:"_blank",rel:"nofollow noopener noreferrer",children:"description list"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["De look & feel van de component is conform de\n",(0,i.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-properties",target:"_blank",rel:"nofollow noopener noreferrer",children:"Properties"}),"\ncomponent van Digitaal Vlaanderen."]})]})}var m=r("../../libs/components/src/next/properties/vl-properties.defaults.ts");let h={...s.D8,...m.g},u={...(0,s.RN)(!0),labelWidth:{name:"label-width",description:"De breedte van de labels, in %. Heeft geen impact als de properties 'collapsed' worden.",table:{type:{summary:s.QE.NUMBER},category:s.R6.ATTRIBUTES,defaultValue:{summary:h.labelWidth}}},props:{name:"props",description:"De props in JSON formaat.",table:{type:{summary:s.QE.ARRAY},category:s.R6.PROPERTIES,defaultValue:{summary:h.props}}}};(0,n.gy)([a.L,l.b]);let b={id:"components-next-properties",title:"Components-next/properties",tags:["autodocs"],args:h,argTypes:u,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,d.RP)(),e.components);return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(c,e)})):c(e)}}}},g=(0,s._7)(h,({labelWidth:e,props:t})=>(0,o.qy)`
        <vl-properties-next label-width=${e} .props=${t}>
            <label>Woonplaats</label>
            <data>Brussel</data>
            <label>Postcode</label>
            <data>1000</data>
        </vl-properties-next>
    `).bind({});g.storyName="vl-properties-next - default";let x=g.bind({});x.storyName="vl-properties-next - with props",x.args={props:[{class:"column",items:[{labels:["Straat"],data:["Appelstraat","Perenstraat"]}]}]};let v=(0,s._7)(h,({labelWidth:e,props:t})=>(0,o.qy)`
        <vl-properties-next label-width=${e} .props=${t}>
            <label>
                <vl-icon-next icon="location" small right-margin=""></vl-icon-next>
                <span>Woonplaats</span></label
            >
            <data>
                <vl-icon-next icon="alert-triangle" small right-margin=""></vl-icon-next>
                <span>Brussel</span></data
            >
            <label>Postcode</label>
            <data>1000</data>
        </vl-properties-next>
    `);v.storyName="vl-properties-next - html enriched";let j=(0,s._7)(h,({labelWidth:e,props:t})=>(0,o.qy)`
        <vl-properties-next label-width=${e} .props=${t}>
            <div class="collapsed">
                <label>Woonplaats</label>
                <data>Brussel</data>
                <label>Postcode</label>
                <data>1000</data>
            </div>
        </vl-properties-next>
    `);j.storyName="vl-properties-next - collapsed";let f=(0,s._7)(h,({labelWidth:e,props:t})=>(0,o.qy)`
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
    `);f.storyName="vl-properties-next - columns",g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"story(propertiesArgs, ({\n  labelWidth,\n  props\n}) => html`\n        <vl-properties-next label-width=${labelWidth} .props=${props}>\n            <label>Woonplaats</label>\n            <data>Brussel</data>\n            <label>Postcode</label>\n            <data>1000</data>\n        </vl-properties-next>\n    `)",...g.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"PropertiesTemplate.bind({})",...x.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:'story(propertiesArgs, ({\n  labelWidth,\n  props\n}) => html`\n        <vl-properties-next label-width=${labelWidth} .props=${props}>\n            <label>\n                <vl-icon-next icon="location" small right-margin=""></vl-icon-next>\n                <span>Woonplaats</span></label\n            >\n            <data>\n                <vl-icon-next icon="alert-triangle" small right-margin=""></vl-icon-next>\n                <span>Brussel</span></data\n            >\n            <label>Postcode</label>\n            <data>1000</data>\n        </vl-properties-next>\n    `)',...v.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:'story(propertiesArgs, ({\n  labelWidth,\n  props\n}) => html`\n        <vl-properties-next label-width=${labelWidth} .props=${props}>\n            <div class="collapsed">\n                <label>Woonplaats</label>\n                <data>Brussel</data>\n                <label>Postcode</label>\n                <data>1000</data>\n            </div>\n        </vl-properties-next>\n    `)',...j.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:'story(propertiesArgs, ({\n  labelWidth,\n  props\n}) => html`\n        <vl-properties-next label-width=${labelWidth} .props=${props}>\n            <div class="column">\n                <label>Woonplaats</label>\n                <data>Brussel</data>\n            </div>\n            <div class="column">\n                <label>Postcode</label>\n                <data>1000</data>\n            </div>\n            <div class="column column--full-width">\n                <label>Gewest</label>\n                <data>Brussel</data>\n            </div>\n        </vl-properties-next>\n    `)',...f.parameters?.docs?.source}}};let y=["PropertiesDefault","PropertiesWithProps","PropertiesHtmlEnriched","PropertiesCollapsed","PropertiesColumns"]},"../../node_modules/react-dom/client.js":(e,t,r)=>{var s=r("../../node_modules/react-dom/index.js");t.createRoot=s.createRoot,t.hydrateRoot=s.hydrateRoot},"../../libs/components/src/next/properties/vl-properties.component.ts":(e,t,r)=>{r.d(t,{L:()=>g});var s=r("../../libs/common/utilities/src/index.ts"),n=r("../../libs/elements/src/index.ts"),o=r("../../node_modules/lit/index.js");let l=e=>e.map(e=>e.cloneNode(!0)),a=e=>{let t=[],r=[],s=[];return e.forEach(e=>{switch(e.localName){case"label":r.length&&s.length&&(t.push({labels:r,data:s}),r=[],s=[]),r.push(e.children.length>0?l([...e.children]):e.innerHTML);break;case"data":s.push(e.children.length>0?l([...e.children]):e.innerHTML)}}),r.length&&t.push({labels:r,data:s}),t},i=e=>null==e||0==e.length?(console.warn("vl-properties - geen props opgegeven"),[]):e[0]?.localName==="div"?e.map(e=>({class:e.className,items:a([...e.children])})):[{items:a(e)}];var d=r("../../libs/common/utilities/src/css/index.ts");let p=e=>(0,o.AH)`
        width: calc(${e}% - 1rem);
    `,c=()=>(0,o.AH)`
        font-size: 1.6rem;
    `,m=()=>(0,o.AH)`
        grid-column: 1;
        font-size: 1.6rem;
    `,h=e=>(0,o.AH)`
        dl .item {
            grid-template-columns: [labels] ${e}% [data] auto;
        }

        @media screen and (max-width: ${d.gT}px) {
            dl {
                grid-template-columns: 100%;
            }

            dl .item {
                grid-template-columns: 100%;
            }
        }
    `,u=(0,o.AH)`
    :host {
        display: block;
    }

    .column {
        ${p(50)};
        float: left;
    }

    .column--full-width {
        ${p(100)};
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
        ${c()}
    }

    dd {
        font-size: 1.8rem;
        grid-column: 2;
    }

    .collapsed dd {
        ${m()}
    }

    @media screen and (max-width: ${d.gT}px) {
        dd {
            ${m()}
        }

        dt {
            ${c()}
        }
    }
`;var b=r("../../libs/components/src/next/properties/vl-properties.defaults.ts");class g extends s.jW{static get styles(){return[n.hF,u]}static get properties(){return{props:{type:Array},aggregatedProps:{type:Array,state:!0},labelWidth:{type:Number,attribute:"label-width"}}}set props(e){this.attributeProps=e,this.buildInternalProperties()}get props(){return this.attributeProps}connectedCallback(){super.connectedCallback(),this.buildInternalProperties(),this.observeLightPropertiesChange()}firstUpdated(e){super.firstUpdated(e),this.shadowRoot&&(this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,this.labelWidthSheet])}updated(e){super.updated(e),e.has("labelWidth")&&this.labelWidth&&this.labelWidthSheet.replace(h(this.labelWidth).toString())}disconnectedCallback(){super.disconnectedCallback(),this.disconnectMutationObservers()}render(){return(0,o.qy)` <dl>${this.aggregatedProps.map(e=>this.renderColumn(e))}</dl> `}renderColumn(e){return e.class?(0,o.qy)` <div class="${e.class}">${e.items.map(e=>this.renderItem(e))}</div>`:(0,o.qy)` ${e.items.map(e=>this.renderItem(e))}`}renderItem(e){return(0,o.qy)` <div class="item">${this.renderLabels(e.labels)} ${this.renderData(e.data)}</div>`}renderLabels(e){return e.map(e=>(0,o.qy)` <dt>${e}</dt>`)}renderData(e){return e.map(e=>(0,o.qy)` <dd>${e}</dd>`)}buildInternalProperties(){this.aggregatedProps=[...this.attributeProps,...i([...this.children])]}disconnectMutationObservers(){this.mutationObserverList.forEach(e=>e.disconnect()),this.mutationObserverList=[]}observeLightPropertiesChange(){this.disconnectMutationObservers(),this.mutationObserverList=[...this.mutationObserverList,(0,s.U_)(this,e=>{this.buildInternalProperties(),this.observeLightPropertiesChange()})],this.children.length>0&&"div"===this.children[0].localName&&[...this.children].forEach(e=>this.mutationObserverList=[...this.mutationObserverList,(0,s.U_)(e,e=>{this.buildInternalProperties()})])}constructor(...e){super(...e),this.attributeProps=b.g.props,this.aggregatedProps=b.g.props,this.mutationObserverList=[],this.labelWidth=b.g.labelWidth,this.labelWidthSheet=new CSSStyleSheet}}g=function(e,t,r,s){var n,o=arguments.length,l=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,s);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(l=(o<3?n(l):o>3?n(t,r,l):n(t,r))||l);return o>3&&l&&Object.defineProperty(t,r,l),l}([(0,s.M1)("vl-properties-next")],g)},"../../libs/components/src/next/properties/vl-properties.defaults.ts":(e,t,r)=>{r.d(t,{g:()=>s});let s={labelWidth:25,props:[]}}}]);