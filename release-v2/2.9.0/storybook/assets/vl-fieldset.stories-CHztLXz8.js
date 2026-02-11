import{L as m,K as c,H as b,I as j,u as g,j as n,C as u,bc as x,s as p,x as f,r as S}from"./iframe-CYuKbPIU.js";import{o as d}from"./unsafe-html-DQsG5exK.js";import{f as y,V as z}from"./vl-fieldset.component-BT-o0TdA.js";import"./preload-helper-D9Z9MdNV.js";const o={...j,...y,contentSlot:"",legendSlot:""},T={...b,border:{name:"border",description:"Duidt aan of de fieldset een rand moet tonen.",table:{category:c.ATTRIBUTES,type:{summary:m.BOOLEAN},defaultValue:{summary:String(o.border)}}},horizontal:{name:"horizontal",description:"Duidt aan of de inhoud van de fieldset horizontaal moet worden uitgelijnd.",table:{category:c.ATTRIBUTES,type:{summary:m.BOOLEAN},defaultValue:{summary:String(o.horizontal)}}},legendClasses:{name:"legend-classes",description:"Extra CSS-classes voor de legend van de fieldset (space-separated).",table:{category:c.ATTRIBUTES,type:{summary:m.STRING},defaultValue:{summary:String(o.legendClasses)}}},legendSlot:{name:"legend slot (vereist)",description:"De legend van de fieldset.",table:{category:c.SLOTS,type:{summary:m.HTML},defaultValue:{summary:String(o.legendSlot)}}},contentSlot:{name:"content slot (vereist)",description:"De inhoud van de fieldset.",table:{category:c.SLOTS,type:{summary:m.STRING},defaultValue:{summary:String(o.contentSlot)}}}};function v(l){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...g(),...l.components},{FluxComponentMetaData:t}=e;return t||k("FluxComponentMetaData"),n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"form-fieldset",children:"Form Fieldset"}),`
`,n.jsx(t,{id:"components-form-fieldset"}),`
`,n.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,n.jsxs(e.p,{children:["Gebruik de ",n.jsx(e.code,{children:"vl-fieldset"})," component om een fieldset af te beelden."]}),`
`,n.jsx(e.p,{children:"Fieldsets worden gebruikt om gerelateerde formulierelementen te groeperen binnen een formulier."}),`
`,n.jsx(e.p,{children:`In uitzonderlijke gevallen kan dit gebruikt worden om verschillende input fields te groeperen onder één label. Gebruik
dit enkel wanneer andere layoutmogelijkheden niet mogelijk zijn.`}),`
`,n.jsxs(e.p,{children:["Zie het ",n.jsx(e.a,{href:"/docs/ontwerp-form-demo--documentatie",children:"form demo"})," voorbeeld voor het gebruik binnen een form."]}),`
`,n.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`import { VlFieldsetComponent } from '@domg-wc/components/form';
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<vl-fieldset legend="Fieldset legend"></vl-fieldset>
`})}),`
`,n.jsx(u,{of:a}),`
`,n.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,n.jsx(x,{of:a}),`
`,n.jsx(e.h2,{id:"varianten",children:"Varianten"}),`
`,n.jsx(e.h3,{id:"horizontale-fieldset",children:"Horizontale fieldset"}),`
`,n.jsxs(e.p,{children:["Wanneer je een horizontale layout wenst, kan je het ",n.jsx(e.code,{children:"horizontal"})," attribuut toevoegen aan de ",n.jsx(e.code,{children:"vl-fieldset"}),` component.
In dit geval krijgt de legend ook een vaste breedte van `,n.jsx(e.code,{children:"vl-column--4"}),", dit is aanpasbaar adhv het ",n.jsx(e.code,{children:"legend-classes"}),`
attribuut (een space-separated list van classes).`]}),`
`,n.jsxs(e.p,{children:[`De breedte van de inhoud dien je zelf te bepalen door de juiste column classes toe te voegen aan de directe child van de
`,n.jsx(e.code,{children:"vl-fieldset"})," component (bv. ",n.jsx(e.code,{children:"vl-column vl-column--8 vl-column--s-12"}),")."]}),`
`,n.jsx(u,{of:s}),`
`,n.jsx(e.h3,{id:"met-rand",children:"Met rand"}),`
`,n.jsx(u,{of:r}),`
`,n.jsx(e.h2,{id:"toegankelijkheid",children:"Toegankelijkheid"}),`
`,n.jsxs(e.p,{children:["Het ",n.jsx(e.code,{children:"legend"})," attribuut is verplicht en wordt gebruikt om de groep van formulierelementen te beschrijven."]}),`
`,n.jsx(e.p,{children:"Gebruik steeds gelabelde formulierelementen binnen de fieldset om de toegankelijkheid te garanderen."})]})}function $(l={}){const{wrapper:e}={...g(),...l.components};return e?n.jsx(e,{...l,children:n.jsx(v,{...l})}):v(l)}function k(l,e){throw new Error("Expected component `"+l+"` to be defined: you likely forgot to import, pass, or provide it.")}S([z]);const M={id:"components-form-fieldset",title:"Components - Form/fieldset",tags:["autodocs"],args:o,argTypes:T,parameters:{docs:{page:$}}},a=p(o,({border:l,horizontal:e,legendSlot:t,contentSlot:i})=>f`<vl-fieldset ?border=${l} ?horizontal=${e}
        ><span slot="legend">${d(t)}</span>${d(i)}</vl-fieldset
    >`);a.storyName="vl-fieldset - default";a.args={legendSlot:"Volledige naam",contentSlot:`
        <div class="vl-group vl-group--collapse-xs">
            <vl-input-field name="voornaam" id="voornaam" placeholder="Voornaam" label="Voornaam"></vl-input-field>
            <vl-input-field name="naam" id="naam" placeholder="Naam" label="Naam"></vl-input-field>
        </div>
    `};const r=p(o,({border:l,horizontal:e,legendSlot:t,contentSlot:i})=>f`<vl-fieldset ?border=${l} ?horizontal=${e}
        ><span slot="legend">${d(t)}</span>${d(i)}</vl-fieldset
    >`);r.storyName="vl-fieldset - with border";r.args={border:!0,legendSlot:"Volledige naam",contentSlot:`
        <div class="vl-grid">
            <vl-form-label for="voornaam" class="vl-column vl-column--3 vl-column--s-12">Voornaam</vl-form-label>
            <vl-input-field name="voornaam" id="voornaam" placeholder="Voornaam" label="Voornaam" class="vl-column vl-column--9 vl-column--s-12"></vl-input-field>
            <vl-form-label for="naam" class="vl-column vl-column--3 vl-column--s-12">Naam</vl-form-label>
            <vl-input-field name="naam" id="naam" placeholder="Naam" label="Naam" class="vl-column vl-column--9 vl-column--s-12"></vl-input-field>
        </div>
    `};const s=p(o,({border:l,horizontal:e,legendSlot:t,legendClasses:i,contentSlot:h})=>f`<vl-fieldset ?border=${l} ?horizontal=${e} legend-classes="${i}"
            ><span slot="legend">${d(t)}</span>${d(h)}</vl-fieldset
        >`);s.storyName="vl-fieldset - horizontal";s.args={horizontal:!0,legendSlot:"Volledige naam",legendClasses:"vl-column--6",contentSlot:`
        <div class="vl-column vl-column--6 vl-column--s-12 vl-group vl-group--collapse-xs">
            <vl-input-field name="voornaam" id="voornaam" placeholder="Voornaam" label="Voornaam"></vl-input-field>
            <vl-input-field name="naam" id="naam" placeholder="Naam" label="Naam"></vl-input-field>
        </div>
    `};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`story(fieldsetArgs, ({
  border,
  horizontal,
  legendSlot,
  contentSlot
}) => {
  return html\`<vl-fieldset ?border=\${border} ?horizontal=\${horizontal}
        ><span slot="legend">\${unsafeHTML(legendSlot)}</span>\${unsafeHTML(contentSlot)}</vl-fieldset
    >\`;
})`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(fieldsetArgs, ({
  border,
  horizontal,
  legendSlot,
  contentSlot
}) => {
  return html\`<vl-fieldset ?border=\${border} ?horizontal=\${horizontal}
        ><span slot="legend">\${unsafeHTML(legendSlot)}</span>\${unsafeHTML(contentSlot)}</vl-fieldset
    >\`;
})`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story(fieldsetArgs, ({
  border,
  horizontal,
  legendSlot,
  legendClasses,
  contentSlot
}) => {
  return html\`<vl-fieldset ?border=\${border} ?horizontal=\${horizontal} legend-classes="\${legendClasses}"
            ><span slot="legend">\${unsafeHTML(legendSlot)}</span>\${unsafeHTML(contentSlot)}</vl-fieldset
        >\`;
})`,...s.parameters?.docs?.source}}};const A=["FieldsetDefault","FieldsetWithBorder","FieldsetHorizontal"];export{a as FieldsetDefault,s as FieldsetHorizontal,r as FieldsetWithBorder,A as __namedExportsOrder,M as default};
