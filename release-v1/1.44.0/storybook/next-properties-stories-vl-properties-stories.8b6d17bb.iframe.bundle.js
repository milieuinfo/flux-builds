"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[3710],{"../../node_modules/@storybook/addon-docs/dist/index.mjs":(e,t,s)=>{s.d(t,{Hl:()=>r.Hl,W8:()=>r.W8,kL:()=>r.kL,ov:()=>r.ov}),s("../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var r=s("../../node_modules/@storybook/addon-docs/node_modules/@storybook/blocks/dist/index.mjs")},"../../libs/components/src/next/properties/stories/vl-properties.stories.ts":(e,t,s)=>{s.r(t),s.d(t,{PropertiesCollapsed:()=>x,PropertiesColumns:()=>f,PropertiesDefault:()=>b,PropertiesHtmlEnriched:()=>g,PropertiesWithProps:()=>v,__namedExportsOrder:()=>j,default:()=>u});var r=s("../../libs/common/storybook/src/index.ts"),n=s("../../libs/common/utilities/src/index.ts"),a=s("../../node_modules/lit-html/lit-html.js"),l=s("../../libs/components/src/next/properties/vl-properties.component.ts");s("../../node_modules/react/index.js");var o=s("../../node_modules/react/jsx-runtime.js"),i=s("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),d=s("../../node_modules/@storybook/addon-docs/dist/index.mjs");function p(e){let t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",a:"a"},(0,i.RP)(),e.components),{VluxMetaData:s}=t;return s||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VluxMetaData",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"properties---next",children:"Properties - next"}),"\n",(0,o.jsx)(s,{id:"components-next-properties"}),"\n",(0,o.jsxs)(t.p,{children:["Gebruik de ",(0,o.jsx)(t.code,{children:"properties-next"})," component om properties te tonen op een pagina. Je kan de properties specifiëren als\ninner-html of als json-structuur meegeven aan het ",(0,o.jsx)(t.code,{children:"props"})," attribuut."]}),"\n",(0,o.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"import { VlPropertiesComponent } from '@domg-wc/components/next/properties';\n"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-html",children:"<vl-properties-next></vl-properties-next>\n"})}),"\n",(0,o.jsx)(d.Hl,{of:b}),"\n",(0,o.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,o.jsx)(d.ov,{of:b}),"\n",(0,o.jsx)(t.h3,{id:"props",children:"Props"}),"\n",(0,o.jsx)(t.p,{children:"De props zijn als volgt gespecifiëerd:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"export type Props = Column[];\n\nexport interface Column {\n    class?: string; // column / column--full-width / collapsed\n    items: Item[];\n}\n\nexport interface Item {\n    labels: string[] | Node[][];\n    data: string[] | Node[][];\n}\n"})}),"\n",(0,o.jsx)(t.p,{children:"Bijvoorbeeld:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"[\n    {\n        class: 'column',\n        items: [\n            {\n                labels: ['Straat'],\n                data: ['Appelstraat', 'Perenstraat'],\n            },\n        ],\n    },\n]\n"})}),"\n",(0,o.jsx)(t.h2,{id:"varianten",children:"Varianten"}),"\n",(0,o.jsx)(t.h3,{id:"met-props",children:"Met props"}),"\n",(0,o.jsxs)(t.p,{children:["Door bovenstaande ",(0,o.jsx)(t.code,{children:"props"})," te zetten krijg je een mix van de attribuut-data en de via inner-html gespecifieerde data."]}),"\n",(0,o.jsx)(d.Hl,{of:v}),"\n",(0,o.jsx)(t.h3,{id:"met-html-verrijking",children:"Met html verrijking"}),"\n",(0,o.jsx)(t.p,{children:"Naast gewone tekst kan zowel in 'label' als in 'data' html-code gestoken worden die dan 1 op 1 wordt overgenomen."}),"\n",(0,o.jsx)(d.Hl,{of:g}),"\n",(0,o.jsx)(t.h3,{id:"collapsed",children:"Collapsed"}),"\n",(0,o.jsxs)(t.p,{children:["In mobiele-mode (< 767px) worden labels en data onder i.p.v. naast elkaar getoond. Deze layout kan ook expliciet\nafgedwongen worden via de ",(0,o.jsx)(t.code,{children:"collapsed"})," class."]}),"\n",(0,o.jsx)(d.Hl,{of:x}),"\n",(0,o.jsx)(t.h3,{id:"columns",children:"Columns"}),"\n",(0,o.jsxs)(t.p,{children:["M.b.v. de ",(0,o.jsx)(t.code,{children:"column"})," (en ",(0,o.jsx)(t.code,{children:"column--full-width"}),") class kunnen er 2 kolommen gespecifiëerd worden."]}),"\n",(0,o.jsx)(d.Hl,{of:f}),"\n",(0,o.jsx)(t.h2,{id:"gekende-beperkingen",children:"Gekende beperkingen"}),"\n",(0,o.jsxs)(t.p,{children:["Er is ondersteuning om meerdere labels en data op te geven in de lijst. 1 label met meerdere data waardes en\nmeerdere labels met 1 data waarde zien er logisch uit. De combinatie van meerdere labels en meerdere data waardes\nneemt meer wit ruimte in dan nodig. Dit fundamenteel oplossen kan met de\n",(0,o.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Masonry_layout",target:"_blank",rel:"nofollow noopener noreferrer",children:"Masonry layout"}),", deze wordt echter\nnog niet ondersteund door alle browsers, vandaar is dat momenteel niet voorzien. Een manier om er rond te werken\n(enkel als je het nodig hebt) is 1 label en 1 data te gebruiken en de verschillende waardes te wrappen in een ",(0,o.jsx)(t.code,{children:"<div>"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,o.jsxs)(t.p,{children:["Technisch zal de component zich in zijn shadow-dom renderen als een\n",(0,o.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl",target:"_blank",rel:"nofollow noopener noreferrer",children:"description list"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["De look & feel van de component is conform de\n",(0,o.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-properties",target:"_blank",rel:"nofollow noopener noreferrer",children:"Properties"}),"\ncomponent van Digitaal Vlaanderen."]})]})}var c=s("../../libs/components/src/next/properties/vl-properties.defaults.ts");let m={...r.D8,...c.g},h={...(0,r.RN)(!0),labelWidth:{name:"label-width",description:"De breedte van de labels, in REM. Heeft geen impact als de properties 'collapsed' worden.",table:{type:{summary:r.QE.NUMBER},category:r.R6.ATTRIBUTES,defaultValue:{summary:m.labelWidth}}},props:{name:"props",description:"De props in JSON formaat.",table:{type:{summary:r.QE.ARRAY},category:r.R6.PROPERTIES,defaultValue:{summary:m.props}}}};(0,n.gy)([l.L]);let u={id:"components-next-properties",title:"Components-next/properties",tags:["autodocs"],args:m,argTypes:h,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,i.RP)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(p,e)})):p(e)}}}},b=(0,r._7)(m,({labelWidth:e,props:t})=>(0,a.qy)`
        <vl-properties-next label-width=${e} .props=${t}>
            <label>Woonplaats</label>
            <data>Brussel</data>
            <label>Postcode</label>
            <data>1000</data>
        </vl-properties-next>
    `).bind({});b.storyName="vl-properties-next - default";let v=b.bind({});v.storyName="vl-properties-next - with props",v.args={props:[{class:"column",items:[{labels:["Straat"],data:["Appelstraat","Perenstraat"]}]}]};let g=(0,r._7)(m,({labelWidth:e,props:t})=>(0,a.qy)`
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
    `);g.storyName="vl-properties-next - html enriched";let x=(0,r._7)(m,({labelWidth:e,props:t})=>(0,a.qy)`
        <vl-properties-next label-width=${e} .props=${t}>
            <div class="collapsed">
                <label>Woonplaats</label>
                <data>Brussel</data>
                <label>Postcode</label>
                <data>1000</data>
            </div>
        </vl-properties-next>
    `);x.storyName="vl-properties-next - collapsed";let f=(0,r._7)(m,({labelWidth:e,props:t})=>(0,a.qy)`
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
    `);f.storyName="vl-properties-next - columns",b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"story(propertiesArgs, ({\n  labelWidth,\n  props\n}) => html`\n        <vl-properties-next label-width=${labelWidth} .props=${props}>\n            <label>Woonplaats</label>\n            <data>Brussel</data>\n            <label>Postcode</label>\n            <data>1000</data>\n        </vl-properties-next>\n    `)",...b.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:"PropertiesTemplate.bind({})",...v.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:'story(propertiesArgs, ({\n  labelWidth,\n  props\n}) => html`\n        <vl-properties-next label-width=${labelWidth} .props=${props}>\n            <label\n                ><span is="vl-icon" data-vl-icon="location" data-vl-size="small" data-vl-before></span\n                ><span>Woonplaats</span></label\n            >\n            <data\n                ><span is="vl-icon" data-vl-icon="alert-triangle" data-vl-size="small" data-vl-before></span\n                ><span>Brussel</span></data\n            >\n            <label>Postcode</label>\n            <data>1000</data>\n        </vl-properties-next>\n    `)',...g.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:'story(propertiesArgs, ({\n  labelWidth,\n  props\n}) => html`\n        <vl-properties-next label-width=${labelWidth} .props=${props}>\n            <div class="collapsed">\n                <label>Woonplaats</label>\n                <data>Brussel</data>\n                <label>Postcode</label>\n                <data>1000</data>\n            </div>\n        </vl-properties-next>\n    `)',...x.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:'story(propertiesArgs, ({\n  labelWidth,\n  props\n}) => html`\n        <vl-properties-next label-width=${labelWidth} .props=${props}>\n            <div class="column">\n                <label>Woonplaats</label>\n                <data>Brussel</data>\n            </div>\n            <div class="column">\n                <label>Postcode</label>\n                <data>1000</data>\n            </div>\n            <div class="column column--full-width">\n                <label>Gewest</label>\n                <data>Brussel</data>\n            </div>\n        </vl-properties-next>\n    `)',...f.parameters?.docs?.source}}};let j=["PropertiesDefault","PropertiesWithProps","PropertiesHtmlEnriched","PropertiesCollapsed","PropertiesColumns"]},"../../libs/components/src/next/properties/vl-properties.component.ts":(e,t,s)=>{s.d(t,{L:()=>v});var r=s("../../libs/common/utilities/src/index.ts"),n=s("../../libs/elements/src/index.ts"),a=s("../../node_modules/lit/index.js");let l=e=>e.map(e=>e.cloneNode(!0)),o=e=>{let t=[],s=[],r=[];return e.forEach(e=>{switch(e.localName){case"label":s.length&&r.length&&(t.push({labels:s,data:r}),s=[],r=[]),s.push(e.children.length>0?l([...e.children]):e.innerHTML);break;case"data":r.push(e.children.length>0?l([...e.children]):e.innerHTML)}}),s.length&&t.push({labels:s,data:r}),t},i=e=>null==e||0==e.length?(console.warn("vl-properties - geen props opgegeven"),[]):e[0]?.localName==="div"?e.map(e=>({class:e.className,items:o([...e.children])})):[{items:o(e)}];var d=s("../../libs/common/utilities/src/css/index.ts");let p=e=>(0,a.AH)`
        width: calc(${e}% - 1rem);
    `,c=()=>(0,a.AH)`
        font-size: 1.6rem;
    `,m=()=>(0,a.AH)`
        grid-column: 1;
        font-size: 1.6rem;
    `,h=e=>(0,a.AH)`
        dl {
            grid-template-columns: [labels] ${e}rem [data] auto;
        }

        dl .item {
            grid-template-columns: [labels] ${e}rem [data] auto;
        }
    `,u=(0,a.AH)`
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
        .column {
            ${p(100)};
        }

        dd {
            ${m()}
        }

        dt {
            ${c()}
        }
    }
`;var b=s("../../libs/components/src/next/properties/vl-properties.defaults.ts");class v extends r.jW{static get styles(){return[n.hF,u]}static get properties(){return{props:{type:Array},aggregatedProps:{type:Array,state:!0},labelWidth:{type:Number,attribute:"label-width"}}}set props(e){this.attributeProps=e,this.buildInternalProperties()}get props(){return this.attributeProps}connectedCallback(){super.connectedCallback(),this.buildInternalProperties(),this.observeLightPropertiesChange()}firstUpdated(e){super.firstUpdated(e),this.shadowRoot&&(this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,this.labelWidthSheet])}updated(e){super.updated(e),e.has("labelWidth")&&this.labelWidth&&this.labelWidthSheet.replace(h(this.labelWidth).toString())}disconnectedCallback(){super.disconnectedCallback(),this.disconnectMutationObservers()}render(){return(0,a.qy)` <dl>${this.aggregatedProps.map(e=>this.renderColumn(e))}</dl> `}renderColumn(e){return e.class?(0,a.qy)` <div class="${e.class}">${e.items.map(e=>this.renderItem(e))}</div>`:(0,a.qy)` ${e.items.map(e=>this.renderItem(e))}`}renderItem(e){return(0,a.qy)` <div class="item">${this.renderLabels(e.labels)} ${this.renderData(e.data)}</div>`}renderLabels(e){return e.map(e=>(0,a.qy)` <dt>${e}</dt>`)}renderData(e){return e.map(e=>(0,a.qy)` <dd>${e}</dd>`)}buildInternalProperties(){this.aggregatedProps=[...this.attributeProps,...i([...this.children])]}disconnectMutationObservers(){this.mutationObserverList.forEach(e=>e.disconnect()),this.mutationObserverList=[]}observeLightPropertiesChange(){this.disconnectMutationObservers(),this.mutationObserverList=[...this.mutationObserverList,(0,r.U_)(this,e=>{this.buildInternalProperties(),this.observeLightPropertiesChange()})],this.children.length>0&&"div"===this.children[0].localName&&[...this.children].forEach(e=>this.mutationObserverList=[...this.mutationObserverList,(0,r.U_)(e,e=>{this.buildInternalProperties()})])}constructor(...e){super(...e),this.attributeProps=b.g.props,this.aggregatedProps=b.g.props,this.mutationObserverList=[],this.labelWidth=b.g.labelWidth,this.labelWidthSheet=new CSSStyleSheet}}v=function(e,t,s,r){var n,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,r);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(l=(a<3?n(l):a>3?n(t,s,l):n(t,s))||l);return a>3&&l&&Object.defineProperty(t,s,l),l}([(0,r.M1)("vl-properties-next")],v)},"../../libs/components/src/next/properties/vl-properties.defaults.ts":(e,t,s)=>{s.d(t,{g:()=>r});let r={labelWidth:17,props:[]}}}]);