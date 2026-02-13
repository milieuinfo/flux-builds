import{U as r,u as k,j as o,M as L,C as w,F as b,x as S,r as E,bD as O,h as B,bJ as M,ch as V}from"./iframe-FlvNZLqI.js";import"./preload-helper-D9Z9MdNV.js";const N={group:!0,collapseL:!1,collapseM:!1,collapseS:!1,collapseXS:!1,column:!1,justifyStart:!1,justifyCenter:!1,justifyEnd:!1,alignStart:!1,alignCenter:!1,alignEnd:!1,separatorColumn:!1,separatorRow:!1,spaceBetween:!1,stretchChildren:!1},G={group:{name:"vl-group",table:{type:{summary:r.BOOLEAN},category:"block style",defaultValue:{summary:String(!1)}},description:"Verplichte root style."},collapseL:{name:"vl-group--collapse-l",table:{type:{summary:r.BOOLEAN},category:"modifier style",defaultValue:{summary:String(!1)}},description:"Lijnt de items verticaal uit op een groot scherm (>1023px)."},collapseM:{name:"vl-group--collapse-m",table:{type:{summary:r.BOOLEAN},category:"modifier style",defaultValue:{summary:String(!1)}},description:"Lijnt de items verticaal uit op een gemiddeld scherm (<1023px)."},collapseS:{name:"vl-group--collapse-s",table:{type:{summary:r.BOOLEAN},category:"modifier style",defaultValue:{summary:String(!1)}},description:"Lijnt de items verticaal uit op een klein scherm (<767px)."},collapseXS:{name:"vl-group--collapse-xs",table:{type:{summary:r.BOOLEAN},category:"modifier style",defaultValue:{summary:String(!1)}},description:"Lijnt de items verticaal uit op een extra klein scherm (<500px)."},column:{name:"vl-group--column",table:{type:{summary:r.BOOLEAN},category:"modifier style",defaultValue:{summary:String(!1)}},description:"Lijnt de items uit in een kolom."},justifyStart:{name:"vl-group--justify-start",table:{type:{summary:r.BOOLEAN},category:"modifier style",defaultValue:{summary:String(!1)}},description:"Lijnt de items uit naar het begin op de hoofdas."},justifyCenter:{name:"vl-group--justify-center",table:{type:{summary:r.BOOLEAN},category:"modifier style",defaultValue:{summary:String(!1)}},description:"Lijnt de items centraal uit op de hoofdas."},justifyEnd:{name:"vl-group--justify-end",table:{type:{summary:r.BOOLEAN},category:"modifier style",defaultValue:{summary:String(!1)}},description:"Lijnt de items uit naar het einde op de hoofdas."},alignStart:{name:"vl-group--align-start",table:{type:{summary:r.BOOLEAN},category:"modifier style",defaultValue:{summary:String(!1)}},description:"Lijnt de items uit naar het begin op de dwarsas."},alignCenter:{name:"vl-group--align-center",table:{type:{summary:r.BOOLEAN},category:"modifier style",defaultValue:{summary:String(!1)}},description:"Lijnt de items centraal uit op de dwarsas."},alignEnd:{name:"vl-group--align-end",table:{type:{summary:r.BOOLEAN},category:"modifier style",defaultValue:{summary:String(!1)}},description:"Lijnt de items uit naar het einde op de dwarsas."},separatorColumn:{name:"vl-group--separator-column",table:{type:{summary:r.BOOLEAN},category:"modifier style",defaultValue:{summary:String(!1)}},description:"Voegt horizontale scheidingslijnen toe boven en onder items."},separatorRow:{name:"vl-group--separator-row",table:{type:{summary:r.BOOLEAN},category:"modifier style",defaultValue:{summary:String(!1)}},description:"Voegt verticale scheidingslijnen toe links en rechts tussen items."},spaceBetween:{name:"vl-group--space-between",table:{type:{summary:r.BOOLEAN},category:"modifier style",defaultValue:{summary:String(!1)}},description:"Het eerste item staat in het begin, het laatste op het einde,de overige items staan verdeelt met gelijke ruimte ertussen."},stretchChildren:{name:"vl-group--stretch-children",table:{type:{summary:r.BOOLEAN},category:"modifier style",defaultValue:{summary:String(!1)}},description:"Laat de kinderen van de groep de volledige breedte van de groep innemen. Enkel te gebruiken in combinatie met vl-group--column."}};function C(l){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...k(),...l.components},{FluxComponentMetaData:n}=e;return n||D("FluxComponentMetaData"),o.jsxs(o.Fragment,{children:[o.jsx(L,{title:"Styles/Layout (afnemers)/group"}),`
`,o.jsx(e.h1,{id:"group",children:"Group"}),`
`,o.jsx(n,{id:"styles-layout-group"}),`
`,o.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"vl-group"}),` voorziet style-classes om horizontaal en verticaal (identieke) componenten te groeperen. De CSS
is een specifieke implementatie gebruik makend van de `,o.jsx(e.a,{href:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/",rel:"nofollow",children:"CSS Flexbox Layout"}),`,
die standaard door `,o.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout",rel:"nofollow",children:"browsers"})," voorzien wordt."]}),`
`,o.jsx(e.h2,{id:"gebruik",children:"Gebruik"}),`
`,o.jsx(e.h3,{id:"default",children:"Default"}),`
`,o.jsxs(e.p,{children:["Default worden items in een ",o.jsx(e.code,{children:"vl-group"})," naast elkaar (horizontaal) gegroepeerd."]}),`
`,o.jsx(w,{of:y}),`
`,o.jsx(e.h3,{id:"verticaal-groeperen",children:"Verticaal Groeperen"}),`
`,o.jsxs(e.p,{children:["Met ",o.jsx(e.code,{children:"vl-group--column"}),` worden items onder elkaar gegroepeerd. In onderstaand voorbeeld wordt ook
`,o.jsx(e.code,{children:"vl-group--separator-column"})," toegevoegd en ",o.jsx(e.code,{children:"vl-group--stretch-children"})," om de volledige breedte in te nemen."]}),`
`,o.jsx(w,{of:f}),`
`,o.jsx(e.h3,{id:"uitlijning",children:"Uitlijning"}),`
`,o.jsx(e.p,{children:"De uitlijning volgt de opzet van flex-box:"}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsxs(e.li,{children:["op de ",o.jsx(e.strong,{children:"hoofdas uitlijnen"})," doe je met ",o.jsx(e.code,{children:"vl-group--justify-start"}),", ",o.jsx(e.code,{children:"vl-group--justify-center"}),` en
`,o.jsx(e.code,{children:"vl-group--justify-end"})]}),`
`,o.jsxs(e.li,{children:["op de ",o.jsx(e.strong,{children:"dwarsas uitlijnen"})," doe je met ",o.jsx(e.code,{children:"vl-group--align-start"}),", ",o.jsx(e.code,{children:"vl-group--align-center"}),` en
`,o.jsx(e.code,{children:"vl-group--align-end"})]}),`
`]}),`
`,o.jsxs(e.p,{children:["Met ",o.jsx(e.code,{children:"vl-group--space-between"}),` wordt het eerste item in het begin gezet, het laatste op het einde en de overige
ertussen - gelijkmatig verdeeld.`]}),`
`,o.jsxs(e.p,{children:["Met ",o.jsx(e.code,{children:"vl-group--baseline"}),` worden de items uitgelijnd volgens de tekst basis van hun eerste element.
Dit is vooral handig voor items met een verschillende `,o.jsx(e.code,{children:"font-size"}),", zoals een heading met daarnaast een tekstuele link."]}),`
`,o.jsx(e.p,{children:"De container waarin uitgelijnd wordt dient voldoende ruimte te hebben om uit te lijnen!"}),`
`,o.jsx(e.h3,{id:"scheidingslijnen",children:"Scheidingslijnen"}),`
`,o.jsxs(e.p,{children:["Tussen items kan een grijze lijn getoond worden. In row layout (default) gebruik je ",o.jsx(e.code,{children:"vl-group--separator-row"}),`,
in kolom layout `,o.jsx(e.code,{children:"vl-group--separator-column"}),"."]}),`
`,o.jsx(e.h3,{id:"responsief",children:"Responsief"}),`
`,o.jsxs(e.p,{children:["Er bestaan 4 responsieve style-classes ",o.jsx(e.code,{children:"vl-group--collapse-l"})," / ",o.jsx(e.code,{children:"vl-group--collapse-m"}),` /
`,o.jsx(e.code,{children:"vl-group--collapse-s"})," / ",o.jsx(e.code,{children:"vl-group--collapse-cs"})," voor de verschillende scherm groottes: ",o.jsx(e.strong,{children:"large"}),` (>1023px),
`,o.jsx(e.strong,{children:"medium"})," (<1023px), ",o.jsx(e.strong,{children:"small"})," (<767px) en ",o.jsx(e.strong,{children:"extra-small"}),` (<500px). Door de desbetreffende class toe te
voegen wordt er bij / vanaf die desbetreffende scherm grootte links uitgelijnd in kolom layout.`]}),`
`,o.jsx(e.h3,{id:"input-group",children:"Input Group"}),`
`,o.jsxs(e.p,{children:["De style-class ",o.jsx(e.code,{children:"vl-group--input-group"}),` is er om de groep een specifieke stijl te geven bij een combinatie van een knop
en een input veld. De class heeft enkel effect bij die combinatie. Zie `,o.jsx(e.a,{href:"/docs/components-form-input-group--documentatie",children:"Input Group [next]"}),`
voor meer informatie en voorbeelden.`]})]})}function I(l={}){const{wrapper:e}={...k(),...l.components};return e?o.jsx(e,{...l,children:o.jsx(C,{...l})}):C(l)}function D(l,e){throw new Error("Expected component `"+l+"` to be defined: you likely forgot to import, pass, or provide it.")}const z={id:"styles-layout-group",title:"Styles/Layout (afnemers)/group",tags:["autodocs"],args:N,argTypes:G,parameters:{docs:{page:I}}};E([O,B,M,V]);const y=({group:l,collapseL:e,collapseM:n,collapseS:t,collapseXS:a,column:s,justifyStart:i,justifyCenter:c,justifyEnd:p,alignStart:u,alignCenter:d,alignEnd:g,separatorColumn:v,separatorRow:m,spaceBetween:h})=>S` <div
    class=${b({"vl-group":l,"vl-group--collapse-l":e,"vl-group--collapse-m":n,"vl-group--collapse-s":t,"vl-group--collapse-xs":a,"vl-group--column":s,"vl-group--justify-start":i,"vl-group--justify-center":c,"vl-group--justify-end":p,"vl-group--align-start":u,"vl-group--align-center":d,"vl-group--align-end":g,"vl-group--separator-column":v,"vl-group--separator-row":m,"vl-group--space-between":h})}
>
    <vl-button>Aanvraag starten</vl-button>
    <vl-button secondary>Annuleren</vl-button>
</div>`;y.storyName="vl-group - buttons";const j=({group:l,collapseL:e,collapseM:n,collapseS:t,collapseXS:a,column:s,justifyStart:i,justifyCenter:c,justifyEnd:p,alignStart:u,alignCenter:d,alignEnd:g,separatorColumn:v,separatorRow:m,spaceBetween:h})=>S` <div
    class=${b({"vl-group":l,"vl-group--collapse-l":e,"vl-group--collapse-m":n,"vl-group--collapse-s":t,"vl-group--collapse-xs":a,"vl-group--column":s,"vl-group--justify-start":i,"vl-group--justify-center":c,"vl-group--justify-end":p,"vl-group--align-start":u,"vl-group--align-center":d,"vl-group--align-end":g,"vl-group--separator-column":v,"vl-group--separator-row":m,"vl-group--space-between":h})}
    style="height: 140px"
>
    <vl-link href="#" icon="bell"> Notificaties</vl-link>
    <vl-link href="#" icon="graduate"> Opleidingen</vl-link>
    <vl-link href="#" icon="pin"> Locaties</vl-link>
</div>`;j.storyName="vl-group - links";j.args={separatorRow:!0};const f=({group:l,collapseL:e,collapseM:n,collapseS:t,collapseXS:a,column:s,justifyStart:i,justifyCenter:c,justifyEnd:p,alignStart:u,alignCenter:d,alignEnd:g,separatorColumn:v,separatorRow:m,spaceBetween:h,stretchChildren:A})=>S` <div
    class=${b({"vl-group":l,"vl-group--collapse-l":e,"vl-group--collapse-m":n,"vl-group--collapse-s":t,"vl-group--collapse-xs":a,"vl-group--column":s,"vl-group--justify-start":i,"vl-group--justify-center":c,"vl-group--justify-end":p,"vl-group--align-start":u,"vl-group--align-center":d,"vl-group--align-end":g,"vl-group--separator-column":v,"vl-group--separator-row":m,"vl-group--space-between":h,"vl-group--stretch-children":A})}
>
    <vl-accordion toggle-text="Accordion 1" heading-level="2">
        <div class="vl-group vl-group--column vl-group--stretch-children">
            <vl-accordion toggle-text="Accordion 1.1" heading-level="3"> Inhoud accordion 1.1</vl-accordion>
            <vl-accordion toggle-text="Accordion 1.2" heading-level="3"> Inhoud accordion 1.2</vl-accordion>
        </div>
    </vl-accordion>
    <vl-accordion toggle-text="Accordion 2" heading-level="2">
        <div class="vl-group vl-group--column vl-group--stretch-children">
            <vl-accordion toggle-text="Accordion 2.1" heading-level="3"> Inhoud accordion 2.1</vl-accordion>
            <vl-accordion toggle-text="Accordion 2.2" heading-level="3"> Inhoud accordion 2.2</vl-accordion>
        </div>
    </vl-accordion>
    <vl-accordion toggle-text="Accordion 3" heading-level="2">
        <div class="vl-group vl-group--column vl-group--stretch-children">
            <vl-accordion toggle-text="Accordion 3.1" heading-level="3"> Inhoud accordion 3.1</vl-accordion>
            <vl-accordion toggle-text="Accordion 3.2" heading-level="3"> Inhoud accordion 3.2</vl-accordion>
        </div>
    </vl-accordion>
</div>`;f.storyName="vl-group - accordions";f.args={column:!0,separatorColumn:!0,stretchChildren:!0};const x=({group:l,collapseL:e,collapseM:n,collapseS:t,collapseXS:a,column:s,justifyStart:i,justifyCenter:c,justifyEnd:p,alignStart:u,alignCenter:d,alignEnd:g,separatorColumn:v,separatorRow:m,spaceBetween:h})=>S` <div
    class=${b({"vl-group":l,"vl-group--collapse-l":e,"vl-group--collapse-m":n,"vl-group--collapse-s":t,"vl-group--collapse-xs":a,"vl-group--column":s,"vl-group--justify-start":i,"vl-group--justify-center":c,"vl-group--justify-end":p,"vl-group--align-start":u,"vl-group--align-center":d,"vl-group--align-end":g,"vl-group--separator-column":v,"vl-group--separator-row":m,"vl-group--space-between":h})}
    style="height: 140px"
>
    <vl-icon href="#" icon="bell"></vl-icon>
    <vl-icon href="#" icon="graduate"></vl-icon>
    <vl-icon href="#" icon="pin"></vl-icon>
</div>`;x.storyName="vl-group - icons";x.args={column:!0};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`({
  group,
  collapseL,
  collapseM,
  collapseS,
  collapseXS,
  column,
  justifyStart,
  justifyCenter,
  justifyEnd,
  alignStart,
  alignCenter,
  alignEnd,
  separatorColumn,
  separatorRow,
  spaceBetween
}: typeof vlGroupArgs) => html\` <div
    class=\${classMap({
  'vl-group': group,
  'vl-group--collapse-l': collapseL,
  'vl-group--collapse-m': collapseM,
  'vl-group--collapse-s': collapseS,
  'vl-group--collapse-xs': collapseXS,
  'vl-group--column': column,
  'vl-group--justify-start': justifyStart,
  'vl-group--justify-center': justifyCenter,
  'vl-group--justify-end': justifyEnd,
  'vl-group--align-start': alignStart,
  'vl-group--align-center': alignCenter,
  'vl-group--align-end': alignEnd,
  'vl-group--separator-column': separatorColumn,
  'vl-group--separator-row': separatorRow,
  'vl-group--space-between': spaceBetween
})}
>
    <vl-button>Aanvraag starten</vl-button>
    <vl-button secondary>Annuleren</vl-button>
</div>\``,...y.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`({
  group,
  collapseL,
  collapseM,
  collapseS,
  collapseXS,
  column,
  justifyStart,
  justifyCenter,
  justifyEnd,
  alignStart,
  alignCenter,
  alignEnd,
  separatorColumn,
  separatorRow,
  spaceBetween
}: typeof vlGroupArgs) => html\` <div
    class=\${classMap({
  'vl-group': group,
  'vl-group--collapse-l': collapseL,
  'vl-group--collapse-m': collapseM,
  'vl-group--collapse-s': collapseS,
  'vl-group--collapse-xs': collapseXS,
  'vl-group--column': column,
  'vl-group--justify-start': justifyStart,
  'vl-group--justify-center': justifyCenter,
  'vl-group--justify-end': justifyEnd,
  'vl-group--align-start': alignStart,
  'vl-group--align-center': alignCenter,
  'vl-group--align-end': alignEnd,
  'vl-group--separator-column': separatorColumn,
  'vl-group--separator-row': separatorRow,
  'vl-group--space-between': spaceBetween
})}
    style="height: 140px"
>
    <vl-link href="#" icon="bell"> Notificaties</vl-link>
    <vl-link href="#" icon="graduate"> Opleidingen</vl-link>
    <vl-link href="#" icon="pin"> Locaties</vl-link>
</div>\``,...j.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`({
  group,
  collapseL,
  collapseM,
  collapseS,
  collapseXS,
  column,
  justifyStart,
  justifyCenter,
  justifyEnd,
  alignStart,
  alignCenter,
  alignEnd,
  separatorColumn,
  separatorRow,
  spaceBetween,
  stretchChildren
}: typeof vlGroupArgs) => html\` <div
    class=\${classMap({
  'vl-group': group,
  'vl-group--collapse-l': collapseL,
  'vl-group--collapse-m': collapseM,
  'vl-group--collapse-s': collapseS,
  'vl-group--collapse-xs': collapseXS,
  'vl-group--column': column,
  'vl-group--justify-start': justifyStart,
  'vl-group--justify-center': justifyCenter,
  'vl-group--justify-end': justifyEnd,
  'vl-group--align-start': alignStart,
  'vl-group--align-center': alignCenter,
  'vl-group--align-end': alignEnd,
  'vl-group--separator-column': separatorColumn,
  'vl-group--separator-row': separatorRow,
  'vl-group--space-between': spaceBetween,
  'vl-group--stretch-children': stretchChildren
})}
>
    <vl-accordion toggle-text="Accordion 1" heading-level="2">
        <div class="vl-group vl-group--column vl-group--stretch-children">
            <vl-accordion toggle-text="Accordion 1.1" heading-level="3"> Inhoud accordion 1.1</vl-accordion>
            <vl-accordion toggle-text="Accordion 1.2" heading-level="3"> Inhoud accordion 1.2</vl-accordion>
        </div>
    </vl-accordion>
    <vl-accordion toggle-text="Accordion 2" heading-level="2">
        <div class="vl-group vl-group--column vl-group--stretch-children">
            <vl-accordion toggle-text="Accordion 2.1" heading-level="3"> Inhoud accordion 2.1</vl-accordion>
            <vl-accordion toggle-text="Accordion 2.2" heading-level="3"> Inhoud accordion 2.2</vl-accordion>
        </div>
    </vl-accordion>
    <vl-accordion toggle-text="Accordion 3" heading-level="2">
        <div class="vl-group vl-group--column vl-group--stretch-children">
            <vl-accordion toggle-text="Accordion 3.1" heading-level="3"> Inhoud accordion 3.1</vl-accordion>
            <vl-accordion toggle-text="Accordion 3.2" heading-level="3"> Inhoud accordion 3.2</vl-accordion>
        </div>
    </vl-accordion>
</div>\``,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`({
  group,
  collapseL,
  collapseM,
  collapseS,
  collapseXS,
  column,
  justifyStart,
  justifyCenter,
  justifyEnd,
  alignStart,
  alignCenter,
  alignEnd,
  separatorColumn,
  separatorRow,
  spaceBetween
}: typeof vlGroupArgs) => html\` <div
    class=\${classMap({
  'vl-group': group,
  'vl-group--collapse-l': collapseL,
  'vl-group--collapse-m': collapseM,
  'vl-group--collapse-s': collapseS,
  'vl-group--collapse-xs': collapseXS,
  'vl-group--column': column,
  'vl-group--justify-start': justifyStart,
  'vl-group--justify-center': justifyCenter,
  'vl-group--justify-end': justifyEnd,
  'vl-group--align-start': alignStart,
  'vl-group--align-center': alignCenter,
  'vl-group--align-end': alignEnd,
  'vl-group--separator-column': separatorColumn,
  'vl-group--separator-row': separatorRow,
  'vl-group--space-between': spaceBetween
})}
    style="height: 140px"
>
    <vl-icon href="#" icon="bell"></vl-icon>
    <vl-icon href="#" icon="graduate"></vl-icon>
    <vl-icon href="#" icon="pin"></vl-icon>
</div>\``,...x.parameters?.docs?.source}}};const _=["GroupButtons","GroupLinks","GroupAccordions","GroupIcons"];export{f as GroupAccordions,y as GroupButtons,x as GroupIcons,j as GroupLinks,_ as __namedExportsOrder,z as default};
