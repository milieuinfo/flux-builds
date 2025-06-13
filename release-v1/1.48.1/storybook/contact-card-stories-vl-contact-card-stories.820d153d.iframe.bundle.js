"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[1523],{"../../libs/components/src/contact-card/stories/vl-contact-card.stories.ts":(e,t,n)=>{n.r(t),n.d(t,{__namedExportsOrder:()=>d,contactCardDefault:()=>o,default:()=>a});var l=n("../../libs/common/storybook/src/index.ts"),r=n("../../libs/common/utilities/src/index.ts"),s=n("../../libs/components/src/next/properties/index.ts"),i=n("../../node_modules/lit-html/lit-html.js");n("../../libs/components/src/infoblock/vl-infoblock.component.ts"),n("../../libs/components/src/contact-card/vl-contact-card.component.ts");let a={id:"components-contact-card",title:"Components/contact-card",tags:["autodocs"],args:l.D8,argTypes:(0,l.RN)(),parameters:{controls:{hideNoControlsWarning:!0}}};(0,r.gy)([s.L]);let o=(0,l._7)({},()=>(0,i.qy)`
        <vl-contact-card>
            <vl-infoblock
                    slot="info"
                    data-vl-title="Departement Onderwijs en Vorming"
                    data-vl-type="contact"
            ></vl-infoblock>
            <vl-properties-next slot="properties">
                <label>Adres</label>
                <data>
                    <div>Hendrik Consciencegebouw</div>
                    <div>Koning Albert II-laan 15</div>
                    <div>1210 Brussel</div>
                    <vl-link-next href="#">Routeplanner</vl-link-next>
                </data>
                <label>Telefoon</label>
                <data>
                    <p>
                        <vl-link-next href="#" icon-placement="after" icon="phone">
                            02 553 72 02
                        </vl-link-next>
                        (Onthaal Consciencegebouw)
                    </p>
                    <p>
                        <vl-link-next href="#" icon-placement="after" icon="phone">
                            1700
                        </vl-link-next>
                        (Infolijn Onderwijs)
                    </p>
                </data>
                <label>E-mail</label>
                <data>
                    <vl-link-next href="#" icon-placement="after" icon="mail">
                        onderwijs.vlaanderen@vlaanderen.be
                    </vl-link-next>
                </data>
                <label>Website</label>
                <data>
                    <vl-link-next href="#" external>
                        http://onderwijs.vlaanderen.be
                    </vl-link-next>
                </data>
            </vl-properties-next>
        </vl-contact-card>
    `);o.storyName="vl-contact-card - default",o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:'story({}, () => html`\n        <vl-contact-card>\n            <vl-infoblock\n                    slot="info"\n                    data-vl-title="Departement Onderwijs en Vorming"\n                    data-vl-type="contact"\n            ></vl-infoblock>\n            <vl-properties-next slot="properties">\n                <label>Adres</label>\n                <data>\n                    <div>Hendrik Consciencegebouw</div>\n                    <div>Koning Albert II-laan 15</div>\n                    <div>1210 Brussel</div>\n                    <vl-link-next href="#">Routeplanner</vl-link-next>\n                </data>\n                <label>Telefoon</label>\n                <data>\n                    <p>\n                        <vl-link-next href="#" icon-placement="after" icon="phone">\n                            02 553 72 02\n                        </vl-link-next>\n                        (Onthaal Consciencegebouw)\n                    </p>\n                    <p>\n                        <vl-link-next href="#" icon-placement="after" icon="phone">\n                            1700\n                        </vl-link-next>\n                        (Infolijn Onderwijs)\n                    </p>\n                </data>\n                <label>E-mail</label>\n                <data>\n                    <vl-link-next href="#" icon-placement="after" icon="mail">\n                        onderwijs.vlaanderen@vlaanderen.be\n                    </vl-link-next>\n                </data>\n                <label>Website</label>\n                <data>\n                    <vl-link-next href="#" external>\n                        http://onderwijs.vlaanderen.be\n                    </vl-link-next>\n                </data>\n            </vl-properties-next>\n        </vl-contact-card>\n    `)',...o.parameters?.docs?.source}}};let d=["contactCardDefault"]},"../../libs/components/src/next/properties/index.ts":(e,t,n)=>{n.d(t,{L:()=>l.L});var l=n("../../libs/components/src/next/properties/vl-properties.component.ts")},"../../libs/components/src/next/properties/vl-properties.component.ts":(e,t,n)=>{n.d(t,{L:()=>v});var l=n("../../libs/common/utilities/src/index.ts"),r=n("../../libs/elements/src/index.ts"),s=n("../../node_modules/lit/index.js");let i=e=>e.map(e=>e.cloneNode(!0)),a=e=>{let t=[],n=[],l=[];return e.forEach(e=>{switch(e.localName){case"label":n.length&&l.length&&(t.push({labels:n,data:l}),n=[],l=[]),n.push(e.children.length>0?i([...e.children]):e.innerHTML);break;case"data":l.push(e.children.length>0?i([...e.children]):e.innerHTML)}}),n.length&&t.push({labels:n,data:l}),t},o=e=>null==e||0==e.length?(console.warn("vl-properties - geen props opgegeven"),[]):e[0]?.localName==="div"?e.map(e=>({class:e.className,items:a([...e.children])})):[{items:a(e)}];var d=n("../../libs/common/utilities/src/css/index.ts");let c=e=>(0,s.AH)`
        width: calc(${e}% - 1rem);
    `,p=e=>(0,s.AH)`
        dl,
        dl .item {
            grid-template-columns: [labels] ${e}% [data] auto;
        }

        dl .column--full-width,
        dl .column--full-width .item {
            grid-template-columns: [labels] ${e/2}% [data] auto;
        }
    `,h=(0,s.AH)`
    @media screen and (max-width: ${d.gT}px) {
        dl,
        dl .item {
            grid-template-columns: 100%;
        }
    }
`,m=(0,s.AH)`
    :host {
        display: block;
    }

    .column {
        ${c(50)};
        float: left;
    }

    .column--full-width {
        ${c(100)};
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
        ${(0,s.AH)`
        font-size: 1.6rem;
    `}
    }

    dd {
        font-size: 1.8rem;
        grid-column: 2;
    }

    .collapsed dd {
        ${(0,s.AH)`
        grid-column: 1;
        font-size: 1.6rem;
    `}
    }

    .collapsed .item,
    dl:has(.collapsed) {
        grid-template-columns: 100%;
    }
`;var b=n("../../libs/components/src/next/properties/vl-properties.defaults.ts");class v extends l.jW{static get styles(){return[r.hF,m]}static get properties(){return{props:{type:Array},aggregatedProps:{type:Array,state:!0},labelWidth:{type:Number,attribute:"label-width"}}}set props(e){this.attributeProps=e,this.buildInternalProperties()}get props(){return this.attributeProps}connectedCallback(){super.connectedCallback(),this.buildInternalProperties(),this.observeLightPropertiesChange()}firstUpdated(e){super.firstUpdated(e),this.shadowRoot&&(this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,this.labelWidthSheet,h.styleSheet])}updated(e){super.updated(e),e.has("labelWidth")&&this.labelWidth&&this.labelWidthSheet.replace(p(this.labelWidth).toString())}disconnectedCallback(){super.disconnectedCallback(),this.disconnectMutationObservers()}render(){return(0,s.qy)` <dl>${this.aggregatedProps.map(e=>this.renderColumn(e))}</dl> `}renderColumn(e){return e.class?(0,s.qy)` <div class="${e.class}">${e.items.map(e=>this.renderItem(e))}</div>`:(0,s.qy)` ${e.items.map(e=>this.renderItem(e))}`}renderItem(e){return(0,s.qy)` <div class="item">${this.renderLabels(e.labels)} ${this.renderData(e.data)}</div>`}renderLabels(e){return e.map(e=>(0,s.qy)` <dt>${e}</dt>`)}renderData(e){return e.map(e=>(0,s.qy)` <dd>${e}</dd>`)}buildInternalProperties(){this.aggregatedProps=[...this.attributeProps,...o([...this.children])]}disconnectMutationObservers(){this.mutationObserverList.forEach(e=>e.disconnect()),this.mutationObserverList=[]}observeLightPropertiesChange(){this.disconnectMutationObservers(),this.mutationObserverList=[...this.mutationObserverList,(0,l.U_)(this,e=>{this.buildInternalProperties(),this.observeLightPropertiesChange()})],this.children.length>0&&"div"===this.children[0].localName&&[...this.children].forEach(e=>this.mutationObserverList=[...this.mutationObserverList,(0,l.U_)(e,e=>{this.buildInternalProperties()})])}constructor(...e){super(...e),this.attributeProps=b.g.props,this.aggregatedProps=b.g.props,this.mutationObserverList=[],this.labelWidth=b.g.labelWidth,this.labelWidthSheet=new CSSStyleSheet}}v=function(e,t,n,l){var r,s=arguments.length,i=s<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,n):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,l);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(s<3?r(i):s>3?r(t,n,i):r(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i}([(0,l.M1)("vl-properties-next")],v)},"../../libs/components/src/next/properties/vl-properties.defaults.ts":(e,t,n)=>{n.d(t,{g:()=>l});let l={labelWidth:25,props:[]}}}]);