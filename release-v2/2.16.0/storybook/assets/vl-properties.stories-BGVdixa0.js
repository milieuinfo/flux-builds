import{Z as v,_ as h,W as g,cq as b,X as x,u as y,j as r,C as i,b8 as j,s as c,x as m,r as f,Y as w,bt as P}from"./iframe-B0laZkYe.js";import"./preload-helper-D9Z9MdNV.js";const n={...x,...b},k={...g,labelWidth:{name:"label-width",description:"De breedte van de labels, in %. Heeft geen impact als de properties 'stacked' worden.",table:{type:{summary:h.NUMBER},category:v.ATTRIBUTES,defaultValue:{summary:String(n.labelWidth)}}},props:{name:"props",description:"De props in JSON formaat.",table:{type:{summary:h.ARRAY},category:v.PROPERTIES,defaultValue:{summary:String(n.props)}}},noPaddingBottom:{name:"no-padding-bottom",description:"Haalt de witruimte onder het laatste item weg. Gebruik dit indien er via stacking al witruimte aanwezig is.",table:{type:{summary:h.BOOLEAN},category:v.ATTRIBUTES,defaultValue:{summary:String(n.noPaddingBottom)}}}};function u(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...y(),...o.components},{FluxComponentMetaData:t}=e;return t||B("FluxComponentMetaData"),r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"properties",children:"Properties"}),`
`,r.jsx(t,{id:"components-block-properties"}),`
`,r.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,r.jsxs(e.p,{children:["Gebruik de ",r.jsx(e.code,{children:"properties"}),` component om properties te tonen op een pagina. Je kan de properties specifiëren als
inner-html of als json-structuur meegeven aan het `,r.jsx(e.code,{children:"props"})," attribuut."]}),`
`,r.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-js",children:`import { VlPropertiesComponent } from '@domg-wc/components/block';
`})}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-html",children:`<vl-properties></vl-properties>
`})}),`
`,r.jsx(i,{of:s}),`
`,r.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,r.jsx(j,{of:s}),`
`,r.jsx(e.h3,{id:"props",children:"Props"}),`
`,r.jsx(e.p,{children:"De props zijn als volgt gespecifiëerd:"}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-ts",children:`export type Props = Column[];

export interface Column {
    class?: string; // column / column--full-width / stacked (collapsed)
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
`,r.jsx(i,{of:a}),`
`,r.jsx(e.h3,{id:"met-html-verrijking",children:"Met html verrijking"}),`
`,r.jsx(e.p,{children:"Naast gewone tekst kan zowel in 'label' als in 'data' html-code gestoken worden die dan 1 op 1 wordt overgenomen."}),`
`,r.jsx(i,{of:p}),`
`,r.jsx(e.h3,{id:"stacked",children:"Stacked"}),`
`,r.jsxs(e.p,{children:[`In mobiele-mode (< 767px) worden labels en data onder i.p.v. naast elkaar getoond. Deze layout kan ook expliciet
afgedwongen worden via de `,r.jsx(e.code,{children:"stacked"})," class (",r.jsx(e.code,{children:"stacked"})," vervangt de deprecated class ",r.jsx(e.code,{children:"collapsed"}),")."]}),`
`,r.jsx(i,{of:l}),`
`,r.jsx(e.h3,{id:"columns",children:"Columns"}),`
`,r.jsxs(e.p,{children:["M.b.v. de ",r.jsx(e.code,{children:"column"})," (en ",r.jsx(e.code,{children:"column--full-width"}),") class kunnen er 2 kolommen gespecifiëerd worden."]}),`
`,r.jsx(i,{of:d}),`
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
`,r.jsx(e.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/componenten/properties",rel:"nofollow",children:"Properties"}),`
component van Digitaal Vlaanderen.`]})]})}function $(o={}){const{wrapper:e}={...y(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(u,{...o})}):u(o)}function B(o,e){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}const W=[{class:"column",items:[{labels:["Straat"],data:["Appelstraat","Perenstraat"]}]}],S=[{class:"column",items:[{labels:["Gemeente"],data:["Antwerpen","Berchem"]}]}];f([w,P]);const T={id:"components-block-properties",title:"Components - Block/properties",tags:["autodocs"],args:n,argTypes:k,parameters:{docs:{page:$}}},C=c(n,({labelWidth:o,props:e,noPaddingBottom:t})=>m`
        <vl-properties label-width=${o} .props=${e} ?no-padding-bottom=${t}>
            <vl-property>Woonplaats</vl-property>
            <vl-property-data>Brussel</vl-property-data>
            <vl-property>Postcode</vl-property>
            <vl-property-data>1000</vl-property-data>
        </vl-properties>
    `),A=c(n,({labelWidth:o,props:e,noPaddingBottom:t})=>m`
        <vl-properties label-width=${o} .props=${e} ?no-padding-bottom=${t}></vl-properties>
    `),s=C.bind({});s.storyName="vl-properties - default";const a=A.bind({});a.storyName="vl-properties - with props";a.args={props:[...W,...S]};const p=c(n,({labelWidth:o,props:e,noPaddingBottom:t})=>m`
        <vl-properties label-width=${o} .props=${e} ?no-padding-bottom=${t}>
            <vl-property>
                <vl-icon icon="location" small right-margin=""></vl-icon>
                Woonplaats
            </vl-property>
            <vl-property-data>
                <vl-icon icon="alert-triangle" small right-margin=""></vl-icon>
                Brussel
            </vl-property-data>
            <vl-property>Postcode</vl-property>
            <vl-property-data>1000</vl-property-data>
        </vl-properties>
    `);p.storyName="vl-properties - html enriched";const l=c(n,({labelWidth:o,props:e,noPaddingBottom:t})=>m`
        <vl-properties label-width=${o} .props=${e} ?no-padding-bottom=${t}>
            <div class="stacked">
                <vl-property>Woonplaats</vl-property>
                <vl-property-data>Brussel</vl-property-data>
                <vl-property>Postcode</vl-property>
                <vl-property-data>1000</vl-property-data>
            </div>
        </vl-properties>
    `);l.storyName="vl-properties - stacked";const d=c(n,({labelWidth:o,props:e,noPaddingBottom:t})=>m`
        <vl-properties label-width=${o} .props=${e} ?no-padding-bottom=${t}>
            <div class="column">
                <vl-property>Woonplaats</vl-property>
                <vl-property-data>Brussel</vl-property-data>
            </div>
            <div class="column">
                <vl-property>Postcode</vl-property>
                <vl-property-data>1000</vl-property-data>
            </div>
            <div class="column column--full-width">
                <vl-property>Gewest</vl-property>
                <vl-property-data>Brussel</vl-property-data>
            </div>
        </vl-properties>
    `);d.storyName="vl-properties - columns";s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story(propertiesArgs, ({
  labelWidth,
  props,
  noPaddingBottom
}) => html\`
        <vl-properties label-width=\${labelWidth} .props=\${props} ?no-padding-bottom=\${noPaddingBottom}>
            <vl-property>Woonplaats</vl-property>
            <vl-property-data>Brussel</vl-property-data>
            <vl-property>Postcode</vl-property>
            <vl-property-data>1000</vl-property-data>
        </vl-properties>
    \`)`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`story(propertiesArgs, ({
  labelWidth,
  props,
  noPaddingBottom
}) => html\`
        <vl-properties label-width=\${labelWidth} .props=\${props} ?no-padding-bottom=\${noPaddingBottom}></vl-properties>
    \`)`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`story(propertiesArgs, ({
  labelWidth,
  props,
  noPaddingBottom
}) => html\`
        <vl-properties label-width=\${labelWidth} .props=\${props} ?no-padding-bottom=\${noPaddingBottom}>
            <vl-property>
                <vl-icon icon="location" small right-margin=""></vl-icon>
                Woonplaats
            </vl-property>
            <vl-property-data>
                <vl-icon icon="alert-triangle" small right-margin=""></vl-icon>
                Brussel
            </vl-property-data>
            <vl-property>Postcode</vl-property>
            <vl-property-data>1000</vl-property-data>
        </vl-properties>
    \`)`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`story(propertiesArgs, ({
  labelWidth,
  props,
  noPaddingBottom
}) => html\`
        <vl-properties label-width=\${labelWidth} .props=\${props} ?no-padding-bottom=\${noPaddingBottom}>
            <div class="stacked">
                <vl-property>Woonplaats</vl-property>
                <vl-property-data>Brussel</vl-property-data>
                <vl-property>Postcode</vl-property>
                <vl-property-data>1000</vl-property-data>
            </div>
        </vl-properties>
    \`)`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`story(propertiesArgs, ({
  labelWidth,
  props,
  noPaddingBottom
}) => html\`
        <vl-properties label-width=\${labelWidth} .props=\${props} ?no-padding-bottom=\${noPaddingBottom}>
            <div class="column">
                <vl-property>Woonplaats</vl-property>
                <vl-property-data>Brussel</vl-property-data>
            </div>
            <div class="column">
                <vl-property>Postcode</vl-property>
                <vl-property-data>1000</vl-property-data>
            </div>
            <div class="column column--full-width">
                <vl-property>Gewest</vl-property>
                <vl-property-data>Brussel</vl-property-data>
            </div>
        </vl-properties>
    \`)`,...d.parameters?.docs?.source}}};const M=["PropertiesDefault","PropertiesWithProps","PropertiesHtmlEnriched","PropertiesStacked","PropertiesColumns"];export{d as PropertiesColumns,s as PropertiesDefault,p as PropertiesHtmlEnriched,l as PropertiesStacked,a as PropertiesWithProps,M as __namedExportsOrder,T as default};
