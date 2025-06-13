"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[3710],{"../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(e,t,r)=>{r.d(t,{f:()=>h});var s=r("../../node_modules/react/index.js"),n=r("../../node_modules/react-dom/client.js"),a=new Map,o=({callback:e,children:t})=>{let r=(0,s.useRef)();return(0,s.useLayoutEffect)(()=>{r.current!==e&&(r.current=e,e())},[e]),t},l=async(e,t)=>{let r=await i(t);return new Promise(t=>{r.render(s.createElement(o,{callback:()=>t(null)},e))})},d=(e,t)=>{let r=a.get(e);r&&(r.unmount(),a.delete(e))},i=async e=>{let t=a.get(e);return t||(t=n.createRoot(e),a.set(e,t)),t},p=r("../../node_modules/@storybook/blocks/dist/index.mjs"),c={code:p.XA,a:p.zE,...p.Sw},m=class extends s.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:s.createElement(s.Fragment,null,t)}},h=class{constructor(){this.render=async(e,t,n)=>{let a={...c,...t?.components},o=p.kQ;return new Promise((d,i)=>{r.e(814).then(r.bind(r,"../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:r})=>l(s.createElement(m,{showException:i,key:Math.random()},s.createElement(r,{components:a},s.createElement(o,{context:e,docsParameter:t}))),n)).then(()=>d())})},this.unmount=e=>{d(e)}}}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(e,t,r)=>{r.d(t,{Hl:()=>s.Hl,W8:()=>s.W8,kL:()=>s.kL,ov:()=>s.ov}),r("../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var s=r("../../node_modules/@storybook/blocks/dist/index.mjs")},"../../libs/components/src/next/properties/stories/vl-properties.stories.ts":(e,t,r)=>{r.r(t),r.d(t,{PropertiesCollapsed:()=>E,PropertiesColumns:()=>C,PropertiesDefault:()=>$,PropertiesHtmlEnriched:()=>S,PropertiesWithProps:()=>_,__namedExportsOrder:()=>R,default:()=>W});var s=r("../../libs/common/storybook/src/index.ts"),n=r("../../libs/common/utilities/src/index.ts"),a=r("../../node_modules/lit-html/lit-html.js"),o=r("../../libs/common/utilities/src/css/index.ts"),l=r("../../libs/elements/src/index.ts"),d=r("../../node_modules/lit/index.js");let i=e=>e.map(e=>e.cloneNode(!0)),p=e=>{let t=[],r=[],s=[];return e.forEach(e=>{switch(e.localName){case"label":r.length&&s.length&&(t.push({labels:r,data:s}),r=[],s=[]),r.push(e.children.length>0?i([...e.children]):e.innerHTML);break;case"data":s.push(e.children.length>0?i([...e.children]):e.innerHTML)}}),r.length&&t.push({labels:r,data:s}),t},c=e=>null==e||0==e.length?(console.warn("vl-properties - geen props opgegeven"),[]):e[0]?.localName==="div"?e.map(e=>({class:e.className,items:p([...e.children])})):[{items:p(e)}],m=e=>(0,d.AH)`
        width: calc(${e}% - 1rem);
    `,h=()=>(0,d.AH)`
        font-size: 1.6rem;
    `,u=()=>(0,d.AH)`
        grid-column: 1;
        font-size: 1.6rem;
    `,b=e=>(0,d.AH)`
        dl {
            grid-template-columns: [labels] ${e}rem [data] auto;
        }

        dl .item {
            grid-template-columns: [labels] ${e}rem [data] auto;
        }
    `,v=(0,d.AH)`
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

    @media screen and (max-width: ${o.gT}px) {
        .column {
            ${m(100)};
        }

        dd {
            ${u()}
        }

        dt {
            ${h()}
        }
    }
`,g={labelWidth:17,props:[]};class x extends n.jW{static get styles(){return[l.hF,v]}static get properties(){return{props:{type:Array},aggregatedProps:{type:Array,state:!0},labelWidth:{type:Number,attribute:"label-width"}}}set props(e){this.attributeProps=e,this.buildInternalProperties()}get props(){return this.attributeProps}connectedCallback(){super.connectedCallback(),this.buildInternalProperties(),this.observeLightPropertiesChange()}firstUpdated(e){super.firstUpdated(e),this.shadowRoot&&(this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,this.labelWidthSheet])}updated(e){super.updated(e),e.has("labelWidth")&&this.labelWidth&&this.labelWidthSheet.replace(b(this.labelWidth).toString())}disconnectedCallback(){super.disconnectedCallback(),this.disconnectMutationObservers()}render(){return(0,d.qy)` <dl>${this.aggregatedProps.map(e=>this.renderColumn(e))}</dl> `}renderColumn(e){return e.class?(0,d.qy)` <div class="${e.class}">${e.items.map(e=>this.renderItem(e))}</div>`:(0,d.qy)` ${e.items.map(e=>this.renderItem(e))}`}renderItem(e){return(0,d.qy)` <div class="item">${this.renderLabels(e.labels)} ${this.renderData(e.data)}</div>`}renderLabels(e){return e.map(e=>(0,d.qy)` <dt>${e}</dt>`)}renderData(e){return e.map(e=>(0,d.qy)` <dd>${e}</dd>`)}buildInternalProperties(){this.aggregatedProps=[...this.attributeProps,...c([...this.children])]}disconnectMutationObservers(){this.mutationObserverList.forEach(e=>e.disconnect()),this.mutationObserverList=[]}observeLightPropertiesChange(){this.disconnectMutationObservers(),this.mutationObserverList=[...this.mutationObserverList,(0,n.U_)(this,e=>{this.buildInternalProperties(),this.observeLightPropertiesChange()})],this.children.length>0&&"div"===this.children[0].localName&&[...this.children].forEach(e=>this.mutationObserverList=[...this.mutationObserverList,(0,n.U_)(e,e=>{this.buildInternalProperties()})])}constructor(...e){super(...e),this.attributeProps=g.props,this.aggregatedProps=g.props,this.mutationObserverList=[],this.labelWidth=g.labelWidth,this.labelWidthSheet=new CSSStyleSheet}}x=function(e,t,r,s){var n,a=arguments.length,o=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,s);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o}([(0,o.nX)(),(0,n.M1)("vl-properties-next")],x),r("../../node_modules/react/index.js");var j=r("../../node_modules/react/jsx-runtime.js"),f=r("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),y=r("../../node_modules/@storybook/addon-docs/dist/index.mjs");function w(e){let t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",a:"a"},(0,f.RP)(),e.components),{VluxMetaData:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VluxMetaData",!0),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(t.h1,{id:"properties---next",children:"Properties - next"}),"\n",(0,j.jsx)(r,{id:"components-next-properties"}),"\n",(0,j.jsxs)(t.p,{children:["Gebruik de ",(0,j.jsx)(t.code,{children:"properties-next"})," component om properties te tonen op een pagina. Je kan de properties specifiëren als\ninner-html of als json-structuur meegeven aan het ",(0,j.jsx)(t.code,{children:"props"})," attribuut."]}),"\n",(0,j.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,j.jsx)(t.pre,{children:(0,j.jsx)(t.code,{className:"language-js",children:"import { VlPropertiesComponent } from '@domg-wc/components/next/properties';\n"})}),"\n",(0,j.jsx)(t.pre,{children:(0,j.jsx)(t.code,{className:"language-html",children:"<vl-properties-next></vl-properties-next>\n"})}),"\n",(0,j.jsx)(y.Hl,{of:$}),"\n",(0,j.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,j.jsx)(y.ov,{of:$}),"\n",(0,j.jsx)(t.h3,{id:"props",children:"Props"}),"\n",(0,j.jsx)(t.p,{children:"De props zijn als volgt gespecifiëerd:"}),"\n",(0,j.jsx)(t.pre,{children:(0,j.jsx)(t.code,{className:"language-ts",children:"export type Props = Column[];\n\nexport interface Column {\n    class?: string; // column / column--full-width / collapsed\n    items: Item[];\n}\n\nexport interface Item {\n    labels: string[] | Node[][];\n    data: string[] | Node[][];\n}\n"})}),"\n",(0,j.jsx)(t.p,{children:"Bijvoorbeeld:"}),"\n",(0,j.jsx)(t.pre,{children:(0,j.jsx)(t.code,{className:"language-ts",children:"[\n    {\n        class: 'column',\n        items: [\n            {\n                labels: ['Straat'],\n                data: ['Appelstraat', 'Perenstraat'],\n            },\n        ],\n    },\n]\n"})}),"\n",(0,j.jsx)(t.h2,{id:"varianten",children:"Varianten"}),"\n",(0,j.jsx)(t.h3,{id:"met-props",children:"Met props"}),"\n",(0,j.jsxs)(t.p,{children:["Door bovenstaande ",(0,j.jsx)(t.code,{children:"props"})," te zetten krijg je een mix van de attribuut-data en de via inner-html gespecifieerde data."]}),"\n",(0,j.jsx)(y.Hl,{of:_}),"\n",(0,j.jsx)(t.h3,{id:"met-html-verrijking",children:"Met html verrijking"}),"\n",(0,j.jsx)(t.p,{children:"Naast gewone tekst kan zowel in 'label' als in 'data' html-code gestoken worden die dan 1 op 1 wordt overgenomen."}),"\n",(0,j.jsx)(y.Hl,{of:S}),"\n",(0,j.jsx)(t.h3,{id:"collapsed",children:"Collapsed"}),"\n",(0,j.jsxs)(t.p,{children:["In mobiele-mode (< 767px) worden labels en data onder i.p.v. naast elkaar getoond. Deze layout kan ook expliciet\nafgedwongen worden via de ",(0,j.jsx)(t.code,{children:"collapsed"})," class."]}),"\n",(0,j.jsx)(y.Hl,{of:E}),"\n",(0,j.jsx)(t.h3,{id:"columns",children:"Columns"}),"\n",(0,j.jsxs)(t.p,{children:["M.b.v. de ",(0,j.jsx)(t.code,{children:"column"})," (en ",(0,j.jsx)(t.code,{children:"column--full-width"}),") class kunnen er 2 kolommen gespecifiëerd worden."]}),"\n",(0,j.jsx)(y.Hl,{of:C}),"\n",(0,j.jsx)(t.h2,{id:"gekende-beperkingen",children:"Gekende beperkingen"}),"\n",(0,j.jsxs)(t.p,{children:["Er is ondersteuning om meerdere labels en data op te geven in de lijst. 1 label met meerdere data waardes en\nmeerdere labels met 1 data waarde zien er logisch uit. De combinatie van meerdere labels en meerdere data waardes\nneemt meer wit ruimte in dan nodig. Dit fundamenteel oplossen kan met de\n",(0,j.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Masonry_layout",target:"_blank",rel:"nofollow noopener noreferrer",children:"Masonry layout"}),", deze wordt echter\nnog niet ondersteund door alle browsers, vandaar is dat momenteel niet voorzien. Een manier om er rond te werken\n(enkel als je het nodig hebt) is 1 label en 1 data te gebruiken en de verschillende waardes te wrappen in een ",(0,j.jsx)(t.code,{children:"<div>"}),"."]}),"\n",(0,j.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,j.jsxs)(t.p,{children:["Technisch zal de component zich in zijn shadow-dom renderen als een\n",(0,j.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl",target:"_blank",rel:"nofollow noopener noreferrer",children:"description list"}),"."]}),"\n",(0,j.jsxs)(t.p,{children:["De look & feel van de component is conform de\n",(0,j.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-properties",target:"_blank",rel:"nofollow noopener noreferrer",children:"Properties"}),"\ncomponent van Digitaal Vlaanderen."]})]})}let k={...s.D8,...g},P={...(0,s.RN)(!0),labelWidth:{name:"label-width",description:"De breedte van de labels, in REM. Heeft geen impact als de properties 'collapsed' worden.",table:{type:{summary:s.QE.NUMBER},category:s.R6.ATTRIBUTES,defaultValue:{summary:k.labelWidth}}},props:{name:"props",description:"De props in JSON formaat.",table:{type:{summary:s.QE.ARRAY},category:s.R6.PROPERTIES,defaultValue:{summary:k.props}}}};(0,n.gy)([x]);let W={id:"components-next-properties",title:"Components-next/properties",tags:["autodocs"],args:k,argTypes:P,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,f.RP)(),e.components);return t?(0,j.jsx)(t,Object.assign({},e,{children:(0,j.jsx)(w,e)})):w(e)}}}},$=(0,s._7)(k,({labelWidth:e,props:t})=>(0,a.qy)`
        <vl-properties-next label-width=${e} .props=${t}>
            <label>Woonplaats</label>
            <data>Brussel</data>
            <label>Postcode</label>
            <data>1000</data>
        </vl-properties-next>
    `).bind({});$.storyName="vl-properties-next - default";let _=$.bind({});_.storyName="vl-properties-next - with props",_.args={props:[{class:"column",items:[{labels:["Straat"],data:["Appelstraat","Perenstraat"]}]}]};let S=(0,s._7)(k,({labelWidth:e,props:t})=>(0,a.qy)`
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
    `);S.storyName="vl-properties-next - html enriched";let E=(0,s._7)(k,({labelWidth:e,props:t})=>(0,a.qy)`
        <vl-properties-next label-width=${e} .props=${t}>
            <div class="collapsed">
                <label>Woonplaats</label>
                <data>Brussel</data>
                <label>Postcode</label>
                <data>1000</data>
            </div>
        </vl-properties-next>
    `);E.storyName="vl-properties-next - collapsed";let C=(0,s._7)(k,({labelWidth:e,props:t})=>(0,a.qy)`
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
    `);C.storyName="vl-properties-next - columns",$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:"story(propertiesArgs, ({\n  labelWidth,\n  props\n}) => html`\n        <vl-properties-next label-width=${labelWidth} .props=${props}>\n            <label>Woonplaats</label>\n            <data>Brussel</data>\n            <label>Postcode</label>\n            <data>1000</data>\n        </vl-properties-next>\n    `)",...$.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:"PropertiesTemplate.bind({})",..._.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:'story(propertiesArgs, ({\n  labelWidth,\n  props\n}) => html`\n        <vl-properties-next label-width=${labelWidth} .props=${props}>\n            <label\n                ><span is="vl-icon" data-vl-icon="location" data-vl-size="small" data-vl-before></span\n                ><span>Woonplaats</span></label\n            >\n            <data\n                ><span is="vl-icon" data-vl-icon="alert-triangle" data-vl-size="small" data-vl-before></span\n                ><span>Brussel</span></data\n            >\n            <label>Postcode</label>\n            <data>1000</data>\n        </vl-properties-next>\n    `)',...S.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:'story(propertiesArgs, ({\n  labelWidth,\n  props\n}) => html`\n        <vl-properties-next label-width=${labelWidth} .props=${props}>\n            <div class="collapsed">\n                <label>Woonplaats</label>\n                <data>Brussel</data>\n                <label>Postcode</label>\n                <data>1000</data>\n            </div>\n        </vl-properties-next>\n    `)',...E.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:'story(propertiesArgs, ({\n  labelWidth,\n  props\n}) => html`\n        <vl-properties-next label-width=${labelWidth} .props=${props}>\n            <div class="column">\n                <label>Woonplaats</label>\n                <data>Brussel</data>\n            </div>\n            <div class="column">\n                <label>Postcode</label>\n                <data>1000</data>\n            </div>\n            <div class="column column--full-width">\n                <label>Gewest</label>\n                <data>Brussel</data>\n            </div>\n        </vl-properties-next>\n    `)',...C.parameters?.docs?.source}}};let R=["PropertiesDefault","PropertiesWithProps","PropertiesHtmlEnriched","PropertiesCollapsed","PropertiesColumns"]},"../../node_modules/react-dom/client.js":(e,t,r)=>{var s=r("../../node_modules/react-dom/index.js");t.createRoot=s.createRoot,t.hydrateRoot=s.hydrateRoot}}]);