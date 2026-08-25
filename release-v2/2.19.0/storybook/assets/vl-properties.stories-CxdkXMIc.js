import{Z as h,_ as y,W as x,cu as w,X as f,u as b,j as r,C as d,b8 as P,s as m,x as u,r as B,Y as k,bt as $}from"./iframe-CY-ZM549.js";import"./preload-helper-D9Z9MdNV.js";const n={...f,...w},S={...x,labelWidth:{name:"label-width",description:"De breedte van de labels, in %. Heeft geen impact als de properties 'stacked' worden.",table:{type:{summary:y.NUMBER},category:h.ATTRIBUTES,defaultValue:{summary:String(n.labelWidth)}}},props:{name:"props",description:"De props in JSON formaat.",table:{type:{summary:y.ARRAY},category:h.PROPERTIES,defaultValue:{summary:String(n.props)}}},noPaddingBottom:{name:"no-padding-bottom",description:"Haalt de witruimte onder het laatste item weg. Gebruik dit indien er via stacking al witruimte aanwezig is.",table:{type:{summary:y.BOOLEAN},category:h.ATTRIBUTES,defaultValue:{summary:String(n.noPaddingBottom)}}},valueBold:{name:"value-bold",description:"Toont de data in bold zodat deze visueel meer opvalt.",table:{type:{summary:y.BOOLEAN},category:h.ATTRIBUTES,defaultValue:{summary:String(n.valueBold)}}}};function g(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...b(),...o.components},{FluxComponentMetaData:t}=e;return t||E("FluxComponentMetaData"),r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"properties",children:"Properties"}),`
`,r.jsx(t,{id:"components-block-properties"}),`
`,r.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,r.jsxs(e.p,{children:["Gebruik de ",r.jsx(e.code,{children:"properties"}),` component om properties te tonen op een pagina. Je kan de properties specifiëren als
inner-html of als json-structuur meegeven aan het `,r.jsx(e.code,{children:"props"})," attribuut."]}),`
`,r.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-js",children:`import { VlPropertiesComponent } from '@domg-wc/components/block';
`})}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-html",children:`<vl-properties></vl-properties>
`})}),`
`,r.jsx(d,{of:l}),`
`,r.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,r.jsx(P,{of:l}),`
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
`,r.jsx(d,{of:p}),`
`,r.jsx(e.h3,{id:"met-html-verrijking",children:"Met html verrijking"}),`
`,r.jsx(e.p,{children:"Naast gewone tekst kan zowel in 'label' als in 'data' html-code gestoken worden die dan 1 op 1 wordt overgenomen."}),`
`,r.jsx(d,{of:i}),`
`,r.jsx(e.h3,{id:"stacked",children:"Stacked"}),`
`,r.jsxs(e.p,{children:[`In mobiele-mode (< 767px) worden labels en data onder i.p.v. naast elkaar getoond. Deze layout kan ook expliciet
afgedwongen worden via de `,r.jsx(e.code,{children:"stacked"})," class (",r.jsx(e.code,{children:"stacked"})," vervangt de deprecated class ",r.jsx(e.code,{children:"collapsed"}),")."]}),`
`,r.jsx(d,{of:c}),`
`,r.jsx(e.h3,{id:"columns",children:"Columns"}),`
`,r.jsxs(e.p,{children:["M.b.v. de ",r.jsx(e.code,{children:"column"})," (en ",r.jsx(e.code,{children:"column--full-width"}),") class kunnen er 2 kolommen gespecifiëerd worden."]}),`
`,r.jsx(d,{of:v}),`
`,r.jsx(e.h3,{id:"value-bold",children:"Value bold"}),`
`,r.jsxs(e.p,{children:["Via het ",r.jsx(e.code,{children:"value-bold"})," attribuut wordt de waarde, de inhoud van ",r.jsx(e.code,{children:"vl-property-data"}),`, in bold getoond zodat ze visueel
meer opvalt. Vergelijkbaar met de weergave van `,r.jsx(e.code,{children:"vl-description-data"}),", maar met het label links en de waarde rechts."]}),`
`,r.jsx(d,{of:s}),`
`,r.jsx(e.h2,{id:"spacing-aanpassen",children:"Spacing aanpassen"}),`
`,r.jsxs(e.p,{children:["De verticale ruimte tussen properties staat in de custom property ",r.jsx(e.code,{children:"--vl-properties--row-gap"})," (standaard ",r.jsx(e.code,{children:"2rem"}),`).
Meerdere data-waardes onder eenzelfde label horen bij elkaar en krijgen die ruimte niet, ze blijven in de
column-layout tegen elkaar staan. Wie een compactere of ruimere weergave nodig heeft, zet de property van buitenaf
op de component:`]}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-css",children:`vl-properties {
    --vl-properties--row-gap: 1rem;
}
`})}),`
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
component van Digitaal Vlaanderen.`]})]})}function W(o={}){const{wrapper:e}={...b(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(g,{...o})}):g(o)}function E(o,e){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}const z=[{class:"column",items:[{labels:["Straat"],data:["Appelstraat","Perenstraat"]}]}],A=[{class:"column",items:[{labels:["Gemeente"],data:["Antwerpen","Berchem"]}]}];B([k,$]);const N={id:"components-block-properties",title:"Components - Block/properties",tags:["autodocs"],args:n,argTypes:S,parameters:{docs:{page:W}}},j=m(n,({labelWidth:o,props:e,noPaddingBottom:t,valueBold:a})=>u`
        <vl-properties
            label-width=${o}
            .props=${e}
            ?no-padding-bottom=${t}
            ?value-bold=${a}
        >
            <vl-property>Woonplaats</vl-property>
            <vl-property-data>Brussel</vl-property-data>
            <vl-property>Postcode</vl-property>
            <vl-property-data>1000</vl-property-data>
        </vl-properties>
    `),C=m(n,({labelWidth:o,props:e,noPaddingBottom:t,valueBold:a})=>u`
        <vl-properties
            label-width=${o}
            .props=${e}
            ?no-padding-bottom=${t}
            ?value-bold=${a}
        ></vl-properties>
    `),l=j.bind({});l.storyName="vl-properties - default";const p=C.bind({});p.storyName="vl-properties - with props";p.args={props:[...z,...A]};const i=m(n,({labelWidth:o,props:e,noPaddingBottom:t,valueBold:a})=>u`
        <vl-properties
            label-width=${o}
            .props=${e}
            ?no-padding-bottom=${t}
            ?value-bold=${a}
        >
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
    `);i.storyName="vl-properties - html enriched";const c=m(n,({labelWidth:o,props:e,noPaddingBottom:t,valueBold:a})=>u`
        <vl-properties
            label-width=${o}
            .props=${e}
            ?no-padding-bottom=${t}
            ?value-bold=${a}
        >
            <div class="stacked">
                <vl-property>Woonplaats</vl-property>
                <vl-property-data>Brussel</vl-property-data>
                <vl-property>Postcode</vl-property>
                <vl-property-data>1000</vl-property-data>
            </div>
        </vl-properties>
    `);c.storyName="vl-properties - stacked";const v=m(n,({labelWidth:o,props:e,noPaddingBottom:t,valueBold:a})=>u`
        <vl-properties
            label-width=${o}
            .props=${e}
            ?no-padding-bottom=${t}
            ?value-bold=${a}
        >
            <div class="column">
                <vl-property>Woonplaats</vl-property>
                <vl-property-data>Brussel</vl-property-data>
                <vl-property>Postcode</vl-property>
                <vl-property-data>1000</vl-property-data>
            </div>
            <div class="column">
                <vl-property>Straat</vl-property>
                <vl-property-data>Havenlaan</vl-property-data>
                <vl-property>Huisnummer</vl-property>
                <vl-property-data>88</vl-property-data>
            </div>
            <div class="column column--full-width">
                <vl-property>Gewest</vl-property>
                <vl-property-data>Brussels Hoofdstedelijk Gewest</vl-property-data>
                <vl-property>Omschrijving</vl-property>
                <vl-property-data>
                    Een wat langere omschrijving zodat meteen duidelijk is dat een property over meerdere regels correct
                    wrapt binnen een column.
                </vl-property-data>
            </div>
        </vl-properties>
    `);v.storyName="vl-properties - columns";const s=j.bind({});s.storyName="vl-properties - value bold";s.args={valueBold:!0};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`story(propertiesArgs, ({
  labelWidth,
  props,
  noPaddingBottom,
  valueBold
}) => html\`
        <vl-properties
            label-width=\${labelWidth}
            .props=\${props}
            ?no-padding-bottom=\${noPaddingBottom}
            ?value-bold=\${valueBold}
        >
            <vl-property>Woonplaats</vl-property>
            <vl-property-data>Brussel</vl-property-data>
            <vl-property>Postcode</vl-property>
            <vl-property-data>1000</vl-property-data>
        </vl-properties>
    \`)`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`story(propertiesArgs, ({
  labelWidth,
  props,
  noPaddingBottom,
  valueBold
}) => html\`
        <vl-properties
            label-width=\${labelWidth}
            .props=\${props}
            ?no-padding-bottom=\${noPaddingBottom}
            ?value-bold=\${valueBold}
        ></vl-properties>
    \`)`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`story(propertiesArgs, ({
  labelWidth,
  props,
  noPaddingBottom,
  valueBold
}) => html\`
        <vl-properties
            label-width=\${labelWidth}
            .props=\${props}
            ?no-padding-bottom=\${noPaddingBottom}
            ?value-bold=\${valueBold}
        >
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
    \`)`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`story(propertiesArgs, ({
  labelWidth,
  props,
  noPaddingBottom,
  valueBold
}) => html\`
        <vl-properties
            label-width=\${labelWidth}
            .props=\${props}
            ?no-padding-bottom=\${noPaddingBottom}
            ?value-bold=\${valueBold}
        >
            <div class="stacked">
                <vl-property>Woonplaats</vl-property>
                <vl-property-data>Brussel</vl-property-data>
                <vl-property>Postcode</vl-property>
                <vl-property-data>1000</vl-property-data>
            </div>
        </vl-properties>
    \`)`,...c.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`story(propertiesArgs, ({
  labelWidth,
  props,
  noPaddingBottom,
  valueBold
}) => html\`
        <vl-properties
            label-width=\${labelWidth}
            .props=\${props}
            ?no-padding-bottom=\${noPaddingBottom}
            ?value-bold=\${valueBold}
        >
            <div class="column">
                <vl-property>Woonplaats</vl-property>
                <vl-property-data>Brussel</vl-property-data>
                <vl-property>Postcode</vl-property>
                <vl-property-data>1000</vl-property-data>
            </div>
            <div class="column">
                <vl-property>Straat</vl-property>
                <vl-property-data>Havenlaan</vl-property-data>
                <vl-property>Huisnummer</vl-property>
                <vl-property-data>88</vl-property-data>
            </div>
            <div class="column column--full-width">
                <vl-property>Gewest</vl-property>
                <vl-property-data>Brussels Hoofdstedelijk Gewest</vl-property-data>
                <vl-property>Omschrijving</vl-property>
                <vl-property-data>
                    Een wat langere omschrijving zodat meteen duidelijk is dat een property over meerdere regels correct
                    wrapt binnen een column.
                </vl-property-data>
            </div>
        </vl-properties>
    \`)`,...v.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story(propertiesArgs, ({
  labelWidth,
  props,
  noPaddingBottom,
  valueBold
}) => html\`
        <vl-properties
            label-width=\${labelWidth}
            .props=\${props}
            ?no-padding-bottom=\${noPaddingBottom}
            ?value-bold=\${valueBold}
        >
            <vl-property>Woonplaats</vl-property>
            <vl-property-data>Brussel</vl-property-data>
            <vl-property>Postcode</vl-property>
            <vl-property-data>1000</vl-property-data>
        </vl-properties>
    \`)`,...s.parameters?.docs?.source}}};const M=["PropertiesDefault","PropertiesWithProps","PropertiesHtmlEnriched","PropertiesStacked","PropertiesColumns","PropertiesValueBold"];export{v as PropertiesColumns,l as PropertiesDefault,i as PropertiesHtmlEnriched,c as PropertiesStacked,s as PropertiesValueBold,p as PropertiesWithProps,M as __namedExportsOrder,N as default};
