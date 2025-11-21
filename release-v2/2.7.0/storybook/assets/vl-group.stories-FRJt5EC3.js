import{L as r,u as b,j as o,M as k,C as j,aO as f,x as y,r as S,bA as A,h as C,b8 as L,ca as E}from"./iframe-BRJWU34U.js";import"./preload-helper-D9Z9MdNV.js";const O={group:!0,collapseL:!1,collapseM:!1,collapseS:!1,collapseXS:!1,column:!1,justifyCenter:!1,justifyEnd:!1,separatorColumn:!1,separatorRow:!1,spaceBetween:!1,stretchChildren:!1},M={group:{name:"vl-group",table:{type:{summary:r.BOOLEAN},category:"block style",defaultValue:{summary:String(!1)}},description:"Verplichte root style."},collapseL:{name:"vl-group--collapse-l",table:{type:{summary:r.BOOLEAN},category:"modifier style",defaultValue:{summary:String(!1)}},description:"Lijnt de items verticaal uit op een groot scherm (>1023px)."},collapseM:{name:"vl-group--collapse-m",table:{type:{summary:r.BOOLEAN},category:"modifier style",defaultValue:{summary:String(!1)}},description:"Lijnt de items verticaal uit op een gemiddeld scherm (<1023px)."},collapseS:{name:"vl-group--collapse-s",table:{type:{summary:r.BOOLEAN},category:"modifier style",defaultValue:{summary:String(!1)}},description:"Lijnt de items verticaal uit op een klein scherm (<767px)."},collapseXS:{name:"vl-group--collapse-xs",table:{type:{summary:r.BOOLEAN},category:"modifier style",defaultValue:{summary:String(!1)}},description:"Lijnt de items verticaal uit op een extra klein scherm (<500px)."},column:{name:"vl-group--column",table:{type:{summary:r.BOOLEAN},category:"modifier style",defaultValue:{summary:String(!1)}},description:"Lijnt de items uit in een kolom."},justifyCenter:{name:"vl-group--justify-center",table:{type:{summary:r.BOOLEAN},category:"modifier style",defaultValue:{summary:String(!1)}},description:"Lijnt de items centraal uit."},justifyEnd:{name:"vl-group--justify-end",table:{type:{summary:r.BOOLEAN},category:"modifier style",defaultValue:{summary:String(!1)}},description:"Lijnt de items uit naar het einde."},separatorColumn:{name:"vl-group--separator-column",table:{type:{summary:r.BOOLEAN},category:"modifier style",defaultValue:{summary:String(!1)}},description:"Voegt horizontale scheidingslijnen toe boven en onder items."},separatorRow:{name:"vl-group--separator-row",table:{type:{summary:r.BOOLEAN},category:"modifier style",defaultValue:{summary:String(!1)}},description:"Voegt verticale scheidingslijnen toe links en rechts tussen items."},spaceBetween:{name:"vl-group--space-between",table:{type:{summary:r.BOOLEAN},category:"modifier style",defaultValue:{summary:String(!1)}},description:"Het eerste item staat in het begin, het laatste op het einde,de overige items staan verdeelt met gelijke ruimte ertussen."},stretchChildren:{name:"vl-group--stretch-children",table:{type:{summary:r.BOOLEAN},category:"modifier style",defaultValue:{summary:String(!1)}},description:"Laat de kinderen van de groep de volledige breedte van de groep innemen. Enkel te gebruiken in combinatie met vl-group--column."}};function x(l){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...b(),...l.components},{FluxMetaData:n}=e;return n||G("FluxMetaData"),o.jsxs(o.Fragment,{children:[o.jsx(k,{title:"Styles/Layout (afnemers)/group"}),`
`,o.jsx(e.h1,{id:"group",children:"Group"}),`
`,o.jsx(n,{id:"styles-layout-afnemers-group"}),`
`,o.jsx("br",{}),`
`,o.jsx(e.h2,{id:"inhoudstafel",children:"Inhoudstafel"}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsx(e.li,{children:o.jsx(e.a,{href:"#doel",children:"Doel"})}),`
`,o.jsx(e.li,{children:o.jsx(e.a,{href:"#gebruik",children:"Gebruik"})}),`
`]}),`
`,o.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"vl-group"}),` voorziet style-classes om horizontaal en verticaal (identieke) componenten te groeperen. De CSS
is een specifieke implementatie gebruik makend van de `,o.jsx(e.a,{href:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/",rel:"nofollow",children:"CSS Flexbox Layout"}),`,
die standaard door `,o.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout",rel:"nofollow",children:"browsers"})," voorzien wordt."]}),`
`,o.jsx(e.h2,{id:"gebruik",children:"Gebruik"}),`
`,o.jsx(e.h3,{id:"default",children:"Default"}),`
`,o.jsxs(e.p,{children:["Default worden items in een ",o.jsx(e.code,{children:"vl-group"})," naast elkaar (horizontaal) gegroepeerd."]}),`
`,o.jsx(j,{of:v}),`
`,o.jsx(e.h3,{id:"verticaal-groeperen",children:"Verticaal Groeperen"}),`
`,o.jsxs(e.p,{children:["Met ",o.jsx(e.code,{children:"vl-group--column"}),` worden items onder elkaar gegroepeerd. In onderstaand voorbeeld wordt ook
`,o.jsx(e.code,{children:"vl-group--separator-column"})," toegevoegd en ",o.jsx(e.code,{children:"vl-group--stretch-children"})," om de volledige breedte in te nemen."]}),`
`,o.jsx(j,{of:g}),`
`,o.jsx(e.h3,{id:"uitlijning",children:"Uitlijning"}),`
`,o.jsxs(e.p,{children:["Default worden items links uitgelijnd. Centreren kan met ",o.jsx(e.code,{children:"vl-group--justify-center"}),`, rechts uitlijnen
met `,o.jsx(e.code,{children:"vl-group--justify-end"}),". In combinatie met de kolom layout (",o.jsx(e.code,{children:"vl-group--column"}),`), wijzigt de richting.
Er wordt dan respectievelijk boven, midden of onderaan uitgelijnd.`]}),`
`,o.jsxs(e.p,{children:["Met ",o.jsx(e.code,{children:"vl-group--space-between"}),` wordt het eerste item uiterst links gezet, het laaste uiterst rechts en de
overige ertussen, gelijkmatig verdeeld.`]}),`
`,o.jsxs(e.p,{children:["Met ",o.jsx(e.code,{children:"vl-group--baseline"}),` worden de items uitgelijnd volgens de tekst basis van hun eerste element.
Dit is vooral handig voor items met een verschillende `,o.jsx(e.code,{children:"font-size"}),", zoals een heading met daarnaast een tekstuele link."]}),`
`,o.jsx(e.p,{children:"De container waarin uitgelijnd wordt dient ruimte te hebben om uit te lijnen!"}),`
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
voor meer informatie en voorbeelden.`]})]})}function B(l={}){const{wrapper:e}={...b(),...l.components};return e?o.jsx(e,{...l,children:o.jsx(x,{...l})}):x(l)}function G(l,e){throw new Error("Expected component `"+l+"` to be defined: you likely forgot to import, pass, or provide it.")}const N={id:"styles-layout-afnemers-group",title:"Styles/Layout (afnemers)/group",tags:["autodocs"],args:O,argTypes:M,parameters:{docs:{page:B}}};S([A,C,L,E]);const v=({group:l,collapseL:e,collapseM:n,collapseS:s,collapseXS:t,column:a,justifyCenter:c,justifyEnd:i,separatorColumn:p,separatorRow:u,spaceBetween:d})=>y` <div
    class=${f({"vl-group":l,"vl-group--collapse-l":e,"vl-group--collapse-m":n,"vl-group--collapse-s":s,"vl-group--collapse-xs":t,"vl-group--column":a,"vl-group--justify-center":c,"vl-group--justify-end":i,"vl-group--separator-column":p,"vl-group--separator-row":u,"vl-group--space-between":d})}
>
    <vl-button>Aanvraag starten</vl-button>
    <vl-button secondary>Annuleren</vl-button>
</div>`;v.storyName="vl-group - buttons";const m=({group:l,collapseL:e,collapseM:n,collapseS:s,collapseXS:t,column:a,justifyCenter:c,justifyEnd:i,separatorColumn:p,separatorRow:u,spaceBetween:d})=>y` <div
    class=${f({"vl-group":l,"vl-group--collapse-l":e,"vl-group--collapse-m":n,"vl-group--collapse-s":s,"vl-group--collapse-xs":t,"vl-group--column":a,"vl-group--justify-center":c,"vl-group--justify-end":i,"vl-group--separator-column":p,"vl-group--separator-row":u,"vl-group--space-between":d})}
    style="height: 140px"
>
    <vl-link href="#" icon="bell"> Notificaties</vl-link>
    <vl-link href="#" icon="graduate"> Opleidingen</vl-link>
    <vl-link href="#" icon="pin"> Locaties</vl-link>
</div>`;m.storyName="vl-group - links";m.args={separatorRow:!0};const g=({group:l,collapseL:e,collapseM:n,collapseS:s,collapseXS:t,column:a,justifyCenter:c,justifyEnd:i,separatorColumn:p,separatorRow:u,spaceBetween:d,stretchChildren:w})=>y` <div
    class=${f({"vl-group":l,"vl-group--collapse-l":e,"vl-group--collapse-m":n,"vl-group--collapse-s":s,"vl-group--collapse-xs":t,"vl-group--column":a,"vl-group--justify-center":c,"vl-group--justify-end":i,"vl-group--separator-column":p,"vl-group--separator-row":u,"vl-group--space-between":d,"vl-group--stretch-children":w})}
>
    <vl-accordion toggle-text="Accordion 1">
        <div class="vl-group vl-group--column vl-group--stretch-children">
            <vl-accordion toggle-text="Accordion 1.1"> Inhoud accordion 1.1</vl-accordion>
            <vl-accordion toggle-text="Accordion 1.2"> Inhoud accordion 1.2</vl-accordion>
        </div>
    </vl-accordion>
    <vl-accordion toggle-text="Accordion 2">
        <div class="vl-group vl-group--column vl-group--stretch-children">
            <vl-accordion toggle-text="Accordion 2.1"> Inhoud accordion 2.1</vl-accordion>
            <vl-accordion toggle-text="Accordion 2.2"> Inhoud accordion 2.2</vl-accordion>
        </div>
    </vl-accordion>
    <vl-accordion toggle-text="Accordion 3">
        <div class="vl-group vl-group--column vl-group--stretch-children">
            <vl-accordion toggle-text="Accordion 3.1"> Inhoud accordion 3.1</vl-accordion>
            <vl-accordion toggle-text="Accordion 3.2"> Inhoud accordion 3.2</vl-accordion>
        </div>
    </vl-accordion>
</div>`;g.storyName="vl-group - accordions";g.args={column:!0,separatorColumn:!0,stretchChildren:!0};const h=({group:l,collapseL:e,collapseM:n,collapseS:s,collapseXS:t,column:a,justifyCenter:c,justifyEnd:i,separatorColumn:p,separatorRow:u,spaceBetween:d})=>y` <div
    class=${f({"vl-group":l,"vl-group--collapse-l":e,"vl-group--collapse-m":n,"vl-group--collapse-s":s,"vl-group--collapse-xs":t,"vl-group--column":a,"vl-group--justify-center":c,"vl-group--justify-end":i,"vl-group--separator-column":p,"vl-group--separator-row":u,"vl-group--space-between":d})}
    style="height: 140px"
>
    <vl-icon href="#" icon="bell"></vl-icon>
    <vl-icon href="#" icon="graduate"></vl-icon>
    <vl-icon href="#" icon="pin"></vl-icon>
</div>`;h.storyName="vl-group - icons";h.args={column:!0};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`({
  group,
  collapseL,
  collapseM,
  collapseS,
  collapseXS,
  column,
  justifyCenter,
  justifyEnd,
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
  'vl-group--justify-center': justifyCenter,
  'vl-group--justify-end': justifyEnd,
  'vl-group--separator-column': separatorColumn,
  'vl-group--separator-row': separatorRow,
  'vl-group--space-between': spaceBetween
})}
>
    <vl-button>Aanvraag starten</vl-button>
    <vl-button secondary>Annuleren</vl-button>
</div>\``,...v.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`({
  group,
  collapseL,
  collapseM,
  collapseS,
  collapseXS,
  column,
  justifyCenter,
  justifyEnd,
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
  'vl-group--justify-center': justifyCenter,
  'vl-group--justify-end': justifyEnd,
  'vl-group--separator-column': separatorColumn,
  'vl-group--separator-row': separatorRow,
  'vl-group--space-between': spaceBetween
})}
    style="height: 140px"
>
    <vl-link href="#" icon="bell"> Notificaties</vl-link>
    <vl-link href="#" icon="graduate"> Opleidingen</vl-link>
    <vl-link href="#" icon="pin"> Locaties</vl-link>
</div>\``,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`({
  group,
  collapseL,
  collapseM,
  collapseS,
  collapseXS,
  column,
  justifyCenter,
  justifyEnd,
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
  'vl-group--justify-center': justifyCenter,
  'vl-group--justify-end': justifyEnd,
  'vl-group--separator-column': separatorColumn,
  'vl-group--separator-row': separatorRow,
  'vl-group--space-between': spaceBetween,
  'vl-group--stretch-children': stretchChildren
})}
>
    <vl-accordion toggle-text="Accordion 1">
        <div class="vl-group vl-group--column vl-group--stretch-children">
            <vl-accordion toggle-text="Accordion 1.1"> Inhoud accordion 1.1</vl-accordion>
            <vl-accordion toggle-text="Accordion 1.2"> Inhoud accordion 1.2</vl-accordion>
        </div>
    </vl-accordion>
    <vl-accordion toggle-text="Accordion 2">
        <div class="vl-group vl-group--column vl-group--stretch-children">
            <vl-accordion toggle-text="Accordion 2.1"> Inhoud accordion 2.1</vl-accordion>
            <vl-accordion toggle-text="Accordion 2.2"> Inhoud accordion 2.2</vl-accordion>
        </div>
    </vl-accordion>
    <vl-accordion toggle-text="Accordion 3">
        <div class="vl-group vl-group--column vl-group--stretch-children">
            <vl-accordion toggle-text="Accordion 3.1"> Inhoud accordion 3.1</vl-accordion>
            <vl-accordion toggle-text="Accordion 3.2"> Inhoud accordion 3.2</vl-accordion>
        </div>
    </vl-accordion>
</div>\``,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`({
  group,
  collapseL,
  collapseM,
  collapseS,
  collapseXS,
  column,
  justifyCenter,
  justifyEnd,
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
  'vl-group--justify-center': justifyCenter,
  'vl-group--justify-end': justifyEnd,
  'vl-group--separator-column': separatorColumn,
  'vl-group--separator-row': separatorRow,
  'vl-group--space-between': spaceBetween
})}
    style="height: 140px"
>
    <vl-icon href="#" icon="bell"></vl-icon>
    <vl-icon href="#" icon="graduate"></vl-icon>
    <vl-icon href="#" icon="pin"></vl-icon>
</div>\``,...h.parameters?.docs?.source}}};const D=["GroupButtons","GroupLinks","GroupAccordions","GroupIcons"];export{g as GroupAccordions,v as GroupButtons,h as GroupIcons,m as GroupLinks,D as __namedExportsOrder,N as default};
