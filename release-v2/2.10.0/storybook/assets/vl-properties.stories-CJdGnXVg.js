import{R as m,U as h,O as g,cq as x,P as j,u as v,j as r,C as d,bh as f,s as p,x as c,r as w,Q as y,ch as P}from"./iframe-FlvNZLqI.js";import"./preload-helper-D9Z9MdNV.js";const a={...j,...x},k={...g,labelWidth:{name:"label-width",description:"De breedte van de labels, in %. Heeft geen impact als de properties 'collapsed' worden.",table:{type:{summary:h.NUMBER},category:m.ATTRIBUTES,defaultValue:{summary:String(a.labelWidth)}}},noClone:{name:"no-clone",description:"Default wordt de inhoud van label en data ge-cloned: van de Light DOM naar de shadow DOM, met no-clone actief wordt de inhoud verplaatst.",table:{type:{summary:h.BOOLEAN},category:m.ATTRIBUTES,defaultValue:{summary:String(a.noClone)}}},props:{name:"props",description:"De props in JSON formaat.",table:{type:{summary:h.ARRAY},category:m.PROPERTIES,defaultValue:{summary:String(a.props)}}}};function b(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...v(),...n.components},{FluxComponentMetaData:u}=e;return u||W("FluxComponentMetaData"),r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"properties",children:"Properties"}),`
`,r.jsx(u,{id:"components-block-properties"}),`
`,r.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,r.jsxs(e.p,{children:["Gebruik de ",r.jsx(e.code,{children:"properties"}),` component om properties te tonen op een pagina. Je kan de properties specifiëren als
inner-html of als json-structuur meegeven aan het `,r.jsx(e.code,{children:"props"})," attribuut."]}),`
`,r.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-js",children:`import { VlPropertiesComponent } from '@domg-wc/components/block';
`})}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-html",children:`<vl-properties></vl-properties>
`})}),`
`,r.jsx(d,{of:s}),`
`,r.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,r.jsx(f,{of:s}),`
`,r.jsx(e.h3,{id:"props",children:"Props"}),`
`,r.jsx(e.p,{children:"De props zijn als volgt gespecifiëerd:"}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-ts",children:`export type Props = Column[];

export interface Column {
    class?: string; // column / column--full-width / collapsed
    items: Item[];
}

export interface Item {
    labels: string[] | Node[][];
    data: string[] | Node[][];
}
`})}),`
`,r.jsx(e.p,{children:"Bijvoorbeeld:"}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-ts",children:`[
    {
        class: 'column',
        items: [
            {
                labels: ['Straat'],
                data: ['Appelstraat', 'Perenstraat'],
            },
        ],
    },
]
`})}),`
`,r.jsx(e.h2,{id:"varianten",children:"Varianten"}),`
`,r.jsx(e.h3,{id:"met-props",children:"Met props"}),`
`,r.jsxs(e.p,{children:["Door bovenstaande ",r.jsx(e.code,{children:"props"})," te zetten krijg je een mix van de attribuut-data en de via inner-html gespecifieerde data."]}),`
`,r.jsx(d,{of:o}),`
`,r.jsx(e.h3,{id:"met-html-verrijking",children:"Met html verrijking"}),`
`,r.jsx(e.p,{children:"Naast gewone tekst kan zowel in 'label' als in 'data' html-code gestoken worden die dan 1 op 1 wordt overgenomen."}),`
`,r.jsx(d,{of:l}),`
`,r.jsx(e.h3,{id:"collapsed",children:"Collapsed"}),`
`,r.jsxs(e.p,{children:[`In mobiele-mode (< 767px) worden labels en data onder i.p.v. naast elkaar getoond. Deze layout kan ook expliciet
afgedwongen worden via de `,r.jsx(e.code,{children:"collapsed"})," class."]}),`
`,r.jsx(d,{of:t}),`
`,r.jsx(e.h3,{id:"columns",children:"Columns"}),`
`,r.jsxs(e.p,{children:["M.b.v. de ",r.jsx(e.code,{children:"column"})," (en ",r.jsx(e.code,{children:"column--full-width"}),") class kunnen er 2 kolommen gespecifiëerd worden."]}),`
`,r.jsx(d,{of:i}),`
`,r.jsx(e.h2,{id:"gekende-beperkingen",children:"Gekende beperkingen"}),`
`,r.jsxs(e.p,{children:[`Er is ondersteuning om meerdere labels en data op te geven in de lijst. 1 label met meerdere data waardes en
meerdere labels met 1 data waarde zien er logisch uit. De combinatie van meerdere labels en meerdere data waardes
neemt meer wit ruimte in dan nodig. Dit fundamenteel oplossen kan met de
`,r.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Masonry_layout",rel:"nofollow",children:"Masonry layout"}),`, deze wordt echter
nog niet ondersteund door alle browsers, vandaar is dat momenteel niet voorzien. Een manier om er rond te werken
(enkel als je het nodig hebt) is 1 label en 1 data te gebruiken en de verschillende waardes te wrappen in een `,r.jsx(e.code,{children:"<div>"}),"."]}),`
`,r.jsx(e.h2,{id:"referenties",children:"Referenties"}),`
`,r.jsxs(e.p,{children:[`Technisch zal de component zich in zijn shadow DOM renderen als een
`,r.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl",rel:"nofollow",children:"description list"}),"."]}),`
`,r.jsxs(e.p,{children:[`De look & feel van de component is conform de
`,r.jsx(e.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-properties",rel:"nofollow",children:"Properties"}),`
component van Digitaal Vlaanderen.`]})]})}function C(n={}){const{wrapper:e}={...v(),...n.components};return e?r.jsx(e,{...n,children:r.jsx(b,{...n})}):b(n)}function W(n,e){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const D=[{class:"column",items:[{labels:["Straat"],data:["Appelstraat","Perenstraat"]}]}],S=[{class:"column",items:[{labels:["Gemeente"],data:["Antwerpen","Berchem"]}]}];w([y,P]);const M={id:"components-block-properties",title:"Components - Block/properties",tags:["autodocs"],args:a,argTypes:k,parameters:{docs:{page:C}}},$=p(a,({labelWidth:n,props:e})=>c`
        <vl-properties label-width=${n} .props=${e}>
            <label>Woonplaats</label>
            <data>Brussel</data>
            <label>Postcode</label>
            <data>1000</data>
        </vl-properties>
    `),A=p(a,({labelWidth:n,props:e})=>c` <vl-properties label-width=${n} .props=${e}></vl-properties> `),s=$.bind({});s.storyName="vl-properties - default";const o=A.bind({});o.storyName="vl-properties - with props";o.args={props:[...D,...S]};const l=p(a,({labelWidth:n,props:e})=>c`
        <vl-properties label-width=${n} .props=${e}>
            <label>
                <vl-icon icon="location" small right-margin=""></vl-icon>
                Woonplaats
            </label>
            <data>
                <vl-icon icon="alert-triangle" small right-margin=""></vl-icon>
                Brussel
            </data>
            <label>Postcode</label>
            <data>1000</data>
        </vl-properties>
    `);l.storyName="vl-properties - html enriched";const t=p(a,({labelWidth:n,props:e})=>c`
        <vl-properties label-width=${n} .props=${e}>
            <div class="collapsed">
                <label>Woonplaats</label>
                <data>Brussel</data>
                <label>Postcode</label>
                <data>1000</data>
            </div>
        </vl-properties>
    `);t.storyName="vl-properties - collapsed";const i=p(a,({labelWidth:n,props:e})=>c`
        <vl-properties label-width=${n} .props=${e}>
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
        </vl-properties>
    `);i.storyName="vl-properties - columns";s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story(propertiesArgs, ({
  labelWidth,
  props
}) => html\`
        <vl-properties label-width=\${labelWidth} .props=\${props}>
            <label>Woonplaats</label>
            <data>Brussel</data>
            <label>Postcode</label>
            <data>1000</data>
        </vl-properties>
    \`)`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"story(propertiesArgs, ({\n  labelWidth,\n  props\n}) => html` <vl-properties label-width=${labelWidth} .props=${props}></vl-properties> `)",...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`story(propertiesArgs, ({
  labelWidth,
  props
}) => html\`
        <vl-properties label-width=\${labelWidth} .props=\${props}>
            <label>
                <vl-icon icon="location" small right-margin=""></vl-icon>
                Woonplaats
            </label>
            <data>
                <vl-icon icon="alert-triangle" small right-margin=""></vl-icon>
                Brussel
            </data>
            <label>Postcode</label>
            <data>1000</data>
        </vl-properties>
    \`)`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`story(propertiesArgs, ({
  labelWidth,
  props
}) => html\`
        <vl-properties label-width=\${labelWidth} .props=\${props}>
            <div class="collapsed">
                <label>Woonplaats</label>
                <data>Brussel</data>
                <label>Postcode</label>
                <data>1000</data>
            </div>
        </vl-properties>
    \`)`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`story(propertiesArgs, ({
  labelWidth,
  props
}) => html\`
        <vl-properties label-width=\${labelWidth} .props=\${props}>
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
        </vl-properties>
    \`)`,...i.parameters?.docs?.source}}};const T=["PropertiesDefault","PropertiesWithProps","PropertiesHtmlEnriched","PropertiesCollapsed","PropertiesColumns"];export{t as PropertiesCollapsed,i as PropertiesColumns,s as PropertiesDefault,l as PropertiesHtmlEnriched,o as PropertiesWithProps,T as __namedExportsOrder,M as default};
