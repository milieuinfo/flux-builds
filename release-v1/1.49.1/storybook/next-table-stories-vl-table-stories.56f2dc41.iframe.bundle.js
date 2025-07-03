"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[8233],{"../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(t,e,a)=>{a.d(e,{f:()=>b});var d=a("../../node_modules/react/index.js"),n=a("../../node_modules/react-dom/client.js"),r=new Map,l=({callback:t,children:e})=>{let a=(0,d.useRef)();return(0,d.useLayoutEffect)(()=>{a.current!==t&&(a.current=t,t())},[t]),e},i=async(t,e)=>{let a=await s(e);return new Promise(e=>{a.render(d.createElement(l,{callback:()=>e(null)},t))})},o=(t,e)=>{let a=r.get(t);a&&(a.unmount(),r.delete(t))},s=async t=>{let e=r.get(t);return e||(e=n.createRoot(t),r.set(t,e)),e},c=a("../../node_modules/@storybook/blocks/dist/index.mjs"),m={code:c.XA,a:c.zE,...c.Sw},h=class extends d.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){let{showException:e}=this.props;e(t)}render(){let{hasError:t}=this.state,{children:e}=this.props;return t?null:d.createElement(d.Fragment,null,e)}},b=class{constructor(){this.render=async(t,e,n)=>{let r={...m,...e?.components},l=c.kQ;return new Promise((o,s)=>{a.e(814).then(a.bind(a,"../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:a})=>i(d.createElement(h,{showException:s,key:Math.random()},d.createElement(a,{components:r},d.createElement(l,{context:t,docsParameter:e}))),n)).then(()=>o())})},this.unmount=t=>{o(t)}}}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(t,e,a)=>{a.d(e,{Hl:()=>d.Hl,W8:()=>d.W8,kL:()=>d.kL,ov:()=>d.ov}),a("../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var d=a("../../node_modules/@storybook/blocks/dist/index.mjs")},"../../libs/components/src/next/table/stories/vl-table.stories.ts":(t,e,a)=>{a.r(e),a.d(e,{TableDefault:()=>u,TableExpandable:()=>g,TableExpandableCustomToggleDetailsColumn:()=>x,TableJoinedRowTitles:()=>y,__namedExportsOrder:()=>E,default:()=>p});var d=a("../../libs/common/storybook/src/index.ts"),n=a("../../node_modules/lit-html/lit-html.js"),r=a("../../libs/common/utilities/src/index.ts"),l=a("../../libs/components/src/next/table/vl-table.component.ts");let i={hover:!1,matrix:!1,grid:!1,zebra:!1,uigZebra:!1,collapsedM:!1,collapsedS:!1,collapsedXS:!1},o={hover:{name:"hover",description:"Attribuut wordt gebruikt om een rij te highlighten wanneer de gebruiker erover hovert met muiscursor.",table:{category:d.R6.ATTRIBUTES,type:{summary:d.QE.BOOLEAN},defaultValue:{summary:i.hover}}},matrix:{name:"matrix",description:"Attribuut wordt gebruikt om data in 2 dimensies te tonen. Zowel de rijen als de kolommen krijgen een titel. Deze titels worden gescheiden door een dikke lijn.",table:{category:d.R6.ATTRIBUTES,type:{summary:d.QE.BOOLEAN},defaultValue:{summary:i.matrix}}},grid:{name:"grid",description:"Variant met een lijn tussen elke rij en kolom.",table:{category:d.R6.ATTRIBUTES,type:{summary:d.QE.BOOLEAN},defaultValue:{summary:i.grid}}},zebra:{name:"zebra",description:"Variant waarin de rijen afwisselend een andere achtergrondkleur krijgen. Dit maakt de tabel makkelijker leesbaar. Deze zebra werkt niet voor tabellen met detail rijen, gebruik hiervoor uig-zebra.",table:{category:d.R6.ATTRIBUTES,type:{summary:d.QE.BOOLEAN},defaultValue:{summary:i.zebra}}},uigZebra:{name:"uig-zebra",description:"Variant waarin de rijen afwisselend een andere achtergrondkleur krijgen. Dit maakt de tabel makkelijker leesbaar. Deze zebra werkt voor tabellen met en zonder detail rijen.",table:{category:d.R6.ATTRIBUTES,type:{summary:d.QE.BOOLEAN},defaultValue:{summary:i.uigZebra}}},collapsedM:{name:"collapsed-m",description:"Vanaf een medium schermgrootte zullen de cellen van elke rij onder elkaar ipv naast elkaar getoond worden.",table:{category:d.R6.ATTRIBUTES,type:{summary:d.QE.BOOLEAN},defaultValue:{summary:i.collapsedM}}},collapsedS:{name:"collapsed-s",description:"Vanaf een small schermgrootte zullen de cellen van elke rij onder elkaar ipv naast elkaar getoond worden.",table:{category:d.R6.ATTRIBUTES,type:{summary:d.QE.BOOLEAN},defaultValue:{summary:i.collapsedS}}},collapsedXS:{name:"collapsed-xs",description:"Vanaf een extra small schermgrootte zullen de cellen van elke rij onder elkaar ipv naast elkaar getoond worden.",table:{category:d.R6.ATTRIBUTES,type:{summary:d.QE.BOOLEAN},defaultValue:{summary:i.collapsedXS}}}};a("../../node_modules/react/index.js");var s=a("../../node_modules/react/jsx-runtime.js"),c=a("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),m=a("../../node_modules/@storybook/addon-docs/dist/index.mjs");function h(t){let e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",a:"a",ul:"ul",li:"li",h3:"h3",strong:"strong",em:"em"},(0,c.RP)(),t.components),{VluxMetaData:a,VluxAlert:d}=e;return d||b("VluxAlert",!0),a||b("VluxMetaData",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"table---next",children:"Table - next"}),"\n",(0,s.jsx)(a,{id:"components-next-table"}),"\n",(0,s.jsxs)(e.p,{children:["Gebruik de ",(0,s.jsx)(e.code,{children:"table"})," component om op een gestructureerde manier (grote hoeveelheden) relationele data te tonen."]}),"\n",(0,s.jsx)(d,{type:"info",children:`
    In de v2 versie van deze component gebruik je hem via de custom-tag, de interne implementatie is voor de rest
    gelijk gebleven aan deze van de v1 versie. In de toekomst zal deze component grondig herwerkt worden; in de
    context van een herwerking van de vl-table.
`}),"\n",(0,s.jsx)(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"import { VlTableComponent } from '@domg-wc/components/next/table';\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:'<vl-table-next>\n    <table is="vl-table">\n        <caption>\n             Table\n        </caption>\n        <thead>\n            <tr>\n                <th>Entry Header 1</th>\n                <th>Entry Header 2</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n                <td data-title="Entry Header 1">Entry line 1</td>\n                <td data-title="Entry Header 2">Entry line 2</td>\n            </tr>\n            <tr>\n                <td data-title="Entry Header 1">Entry line 1</td>\n                <td data-title="Entry Header 2">Entry line 2</td>\n            </tr>\n        </tbody>\n    </table>\n</vl-table-next>\n'})}),"\n",(0,s.jsx)(e.h2,{id:"default",children:"Default"}),"\n",(0,s.jsx)(m.Hl,{of:u,layout:"padded"}),"\n",(0,s.jsx)(e.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,s.jsx)(m.ov,{of:u}),"\n",(0,s.jsx)(e.h2,{id:"functionaliteit",children:"Functionaliteit"}),"\n",(0,s.jsxs)(e.p,{children:["Standaard is er geen sorteer, filtering of paginatie functionaliteit beschikbaar voor de ",(0,s.jsx)(e.code,{children:"table"}),". Hiervoor is de\n",(0,s.jsx)(e.a,{href:"?path=/docs/components-rich-table--rich-table-default",children:"rich-table"})," beschikbaar.",(0,s.jsx)("br",{}),"\nWat dit component wel méér heeft dan die van Digitaal Vlaanderen zijn expandable/collapsible rows. Zie de specifieke\nstories hieronder.",(0,s.jsx)("br",{}),"\nDe visuele mark-up volgt standaard die van Digitaal Vlaanderen, inclusief responsiveness."]}),"\n",(0,s.jsx)(e.h2,{id:"lege-cellen",children:"Lege cellen"}),"\n",(0,s.jsxs)(e.p,{children:["Het is aan te raden om in lege cellen de waarde ",(0,s.jsx)(e.code,{children:"&nbsp;"})," te plaatsen, dit zorgt ervoor dat rijen hun hoogte behouden\nindien elke cel van een rij leeg is."]}),"\n",(0,s.jsx)(e.h2,{id:"joined-row-titles",children:"Joined row titles"}),"\n",(0,s.jsxs)(e.p,{children:["Gebruik de matrix-variant om gegevens met 2 dimensies weer te geven. Zowel de rijen als de kolommen krijgen een titel.\nDe titels zijn gescheiden van de inhoud met een vetgedrukte lijn.",(0,s.jsx)("br",{}),"\nOm dit toe passen maak je zelf gebruik van native html-attribuut ",(0,s.jsx)(e.code,{children:"rowspan"}),"."]}),"\n",(0,s.jsx)(m.Hl,{of:y,layout:"padded"}),"\n",(0,s.jsx)(e.h2,{id:"expandable",children:"Expandable"}),"\n",(0,s.jsxs)(e.p,{children:['Om een rijen te laten uitklappen ("expanden") moet je het volgende doen:',(0,s.jsx)("br",{}),"\nAls je 2 rijen hebt, en je wil rij A altijd zichtbaar zetten en rij B verborgen tot die wordt opengeklapt:"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"maak een nieuwe rij B direct na rij A"}),"\n",(0,s.jsxs)(e.li,{children:["zet je het attribuut ",(0,s.jsx)(e.code,{children:"data-details-id"})," op de rij B"]}),"\n",(0,s.jsxs)(e.li,{children:["je kan ook meerdere rijen uitklapbaar maken, zolang je maar dezelfde ",(0,s.jsx)(e.code,{children:"data-details-id"})," hergebruikt"]}),"\n"]}),"\n",(0,s.jsxs)("details",{children:[(0,s.jsx)("summary",{children:"voorbeeld expandable row"}),(0,s.jsx)(m.kL,{language:"html",dark:!0,format:!0,code:`
              <tr id="rij-A">
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
              </tr>
              <tr data-details-id="details-row-A" id="rij-B">
                  <td>details on previous row</td>
              </tr>`})]}),"\n",(0,s.jsxs)(e.p,{children:["Dan zal er automatisch een ",(0,s.jsx)(e.code,{children:"button"})," toegevoegd worden die de gebruiker toelaat de rij B te zien wanneer op de\ndesbetreffende knop bij rij A wordt gedrukt."]}),"\n",(0,s.jsx)(m.Hl,{of:g,layout:"padded"}),"\n",(0,s.jsx)(e.h3,{id:"colspan",children:"Colspan"}),"\n",(0,s.jsxs)(e.p,{children:["We berekenen automatisch de ",(0,s.jsx)(e.code,{children:"colspan"})," van de rij die uitklapt, zodat de rij die uitklapt de volledige breedte\nvan de tabel inneemt.\nDit doen we enkel als de rij die uitklapt een enkele cel bevat. Als de rij die uitklapt meerdere cellen bevat,\nmoet je zelf de ",(0,s.jsx)(e.code,{children:"colspan"})," instellen."]}),"\n",(0,s.jsx)(e.h3,{id:"expandable-with-custom-toggle",children:"Expandable with custom toggle"}),"\n",(0,s.jsxs)(e.p,{children:["Je kan ook de knop die de rij open en dicht klapt zelf kiezen.",(0,s.jsx)("br",{}),"\nAls je 2 rijen hebt, en je wil rij A altijd zichtbaar zetten en rij B verborgen tot die word opengeklapt:",(0,s.jsx)("br",{}),"\nOm dit te doen, doe het volgende:",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"op de rij die meer details geeft op de voorgaande rij, moet de juiste id worden toegekend"}),"\n"]}),"\n",(0,s.jsx)(m.kL,{language:"html",format:!0,code:`
        <tr data-details-id="details-row1">
            <td>Details 1</td>
        </tr>
          `}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["op rij die meer details heeft, een cel toevoegen die:","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"data-with-expand-details"})," heeft als attribuut"]}),"\n",(0,s.jsxs)(e.li,{children:["een element naar keuze heeft, die ",(0,s.jsx)(e.code,{children:"toggleDetails([id])"})," gaat aanroepen met de juiste id voor de openklapbare rij\nbv.:"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(m.kL,{language:"html",format:!0,code:`
       <td data-with-expand-details>
           <button is="vl-button" onclick="table.toggleDetails('details-row-1')">click to toggle details</button>
       </td>
          `}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:(0,s.jsxs)(e.em,{children:["In dit voorbeeld vind je bij ",(0,s.jsx)(e.code,{children:"Show code"})," broncode in ",(0,s.jsx)(e.code,{children:"lit-html"}),"-syntax. Voor code voorbeelden in HTML/JavaScript\nverwijzen we naar hierboven."]})})}),"\n",(0,s.jsx)(m.Hl,{of:x,layout:"padded"}),"\n",(0,s.jsx)(e.h2,{id:"referenties",children:"Referenties"}),"\n",(0,s.jsx)(e.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,s.jsx)(e.p,{children:"We nemen de functionaliteit & styling over van het equivalente component van Digitaal Vlaanderen."}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-data-table",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Data Table"})})]})}function b(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}(0,r.gy)([l.U]);let p={id:"components-next-table",title:"Components-next/table",tags:["autodocs"],args:i,argTypes:o,parameters:{docs:{page:function(t={}){let{wrapper:e}=Object.assign({},(0,c.RP)(),t.components);return e?(0,s.jsx)(e,Object.assign({},t,{children:(0,s.jsx)(h,t)})):h(t)}}}},u=(0,d._7)(i,({hover:t,matrix:e,grid:a,zebra:d,uigZebra:r,collapsedM:l,collapsedS:i,collapsedXS:o})=>(0,n.qy)`
        <vl-table-next
            ?hover=${t}
            ?matrix=${e}
            ?grid=${a}
            ?zebra=${d}
            ?uig-zebra=${r}
            ?collapsed-m=${l}
            ?collapsed-s=${i}
            ?collapsed-xs=${o}
        >
            <table>
                <caption>
                    Meise Botanic Garden herbarium collections
                </caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Collector</th>
                        <th>Collector number</th>
                        <th>Family</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th rowspan="3">Didymium clavus</th>
                        <td>Thomas H. &amp; Marie L. Farr</td>
                        <td>110</td>
                        <td>Didymiaceae</td>
                    </tr>
                    <tr>
                        <td>Critchfield R.L.</td>
                        <td>715</td>
                        <td>Didymiaceae</td>
                    </tr>
                    <tr>
                        <td>Rammeloo J.</td>
                        <td>4572</td>
                        <td>Didymiaceae</td>
                    </tr>
                    <tr>
                        <th rowspan="3">Epilobium angustifolium</th>
                        <td>Franz Heylemans</td>
                        <td>160</td>
                        <td>Onagraceae</td>
                    </tr>
                    <tr>
                        <td>Stam A.B.</td>
                        <td>477</td>
                        <td>Onagraceae</td>
                    </tr>
                    <tr>
                        <td>Van Hoeck Eddy</td>
                        <td>42</td>
                        <td>Onagraceae</td>
                    </tr>
                    <tr>
                        <th rowspan="3">Euphorbia scordifolia</th>
                        <td>Mission O. Olufsen</td>
                        <td>125</td>
                        <td>Euphorbiaceae</td>
                    </tr>
                    <tr>
                        <td>Brunel J.F.</td>
                        <td>7603</td>
                        <td>Euphorbiaceae</td>
                    </tr>
                    <tr>
                        <td>Bamps P.</td>
                        <td>7549</td>
                        <td>Euphorbiaceae</td>
                    </tr>
                    <tr>
                        <th rowspan="3">Hemitrichia</th>
                        <td>Madame F. Meyer</td>
                        <td>198</td>
                        <td>Trichiaceae</td>
                    </tr>
                    <tr>
                        <td>Johannesen E.W.</td>
                        <td>50B</td>
                        <td>Trichiaceae</td>
                    </tr>
                    <tr>
                        <td>Rammeloo J.</td>
                        <td>9438</td>
                        <td>Trichiaceae</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>
                            <div class="vl-annotation">Table annotation</div>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </vl-table-next>
    `);u.storyName="vl-table-next - default";let y=(0,d._7)(i,({hover:t,matrix:e,grid:a,zebra:d,uigZebra:r,collapsedM:l,collapsedS:i,collapsedXS:o})=>(0,n.qy)`
        <vl-table-next
                ?hover=${t}
                ?matrix=${e}
                ?grid=${a}
                ?zebra=${d}
                ?uig-zebra=${r}
                ?collapsed-m=${l}
                ?collapsed-s=${i}
                ?collapsed-xs=${o}
        >
            <table>
                <caption>
                    Table Matrix - Joined row titles
                </caption>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th rowspan="3" scope="rowgroup">Horizontal title 1</th>
                        <td>Thomas H. &amp; Marie L. Farr</td>
                        <td>110</td>
                        <td>Didymiaceae</td>
                    </tr>
                    <tr>
                        <td>Critchfield R.L.</td>
                        <td>715</td>
                        <td>Didymiaceae</td>
                    </tr>
                    <tr>
                        <td>Rammeloo J.</td>
                        <td>4572</td>
                        <td>Didymiaceae</td>
                    </tr>
                    <tr>
                        <th rowspan="3" scope="rowgroup">Horizontal title 2</th>
                        <td>Franz Heylemans</td>
                        <td>160</td>
                        <td>Onagraceae</td>
                    </tr>
                    <tr>
                        <td>Stam A.B.</td>
                        <td>477</td>
                        <td>Onagraceae</td>
                    </tr>
                    <tr>
                        <td>Van Hoeck Eddy</td>
                        <td>42</td>
                        <td>Onagraceae</td>
                    </tr>
                </tbody>
            </table>
        </vl-table-next>
    `);y.storyName="vl-table-next - joined row titles";let g=(0,d._7)(i,({hover:t,matrix:e,grid:a,zebra:d,uigZebra:r,collapsedM:l,collapsedS:i,collapsedXS:o})=>(0,n.qy)`
            <vl-table-next
                ?hover=${t}
                ?matrix=${e}
                ?grid=${a}
                ?zebra=${d}
                ?uig-zebra=${r}
                ?collapsed-m=${l}
                ?collapsed-s=${i}
                ?collapsed-xs=${o}
            >
                <table id="vl-data-table-with-expandable-details">
                    <caption>
                        Table with expandable details
                    </caption>
                    <thead>
                        <tr>
                            <th>Entry Header 1</th>
                            <th>Entry Header 2</th>
                            <th>Entry Header 3</th>
                            <th>Entry Header 4</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-title="Entry Header 1">Entry line 1</td>
                            <td data-title="Entry Header 2">Entry line 2</td>
                            <td data-title="Entry Header 3">Entry line 3</td>
                            <td data-title="Entry Header 4">Entry line 4</td>
                        </tr>
                        <tr data-details-id="details-row1">
                            <td data-title="details-title 1">Title 1: generic details</td>
                        </tr>
                        <tr>
                            <td data-title="Entry Header 1">Entry line 1</td>
                            <td data-title="Entry Header 2" colspan="2">Entry line 2</td>
                            <td data-title="Entry Header 3">Entry line 3</td>
                        </tr>
                        <tr data-details-id="details-row2">
                            <td data-title="details-title 2">Title 2: generic details</td>
                        </tr>
                        <tr id="multiple-cells">
                            <td data-title="Entry Header 1">Entry line 1</td>
                            <td data-title="Entry Header 2">Entry line 2</td>
                            <td data-title="Entry Header 3">Entry line 3</td>
                            <td data-title="Entry Header 4">Entry line 4</td>
                        </tr>
                        <tr data-details-id="details-row3">
                            <td data-title="details-title 3">Al die willen te kaap'ren varen:</td>
                            <td>*</td>
                            <td>*</td>
                            <td>*</td>
                        </tr>
                        <tr data-details-id="details-row3">
                            <td data-title="naam">Jan</td>
                            <td data-title="familienaam">familienaam</td>
                            <td data-title="telefoon">telefoon</td>
                            <td data-title="adres">adres</td>
                        </tr>
                        <tr data-details-id="details-row3">
                            <td data-title="naam">Piet</td>
                            <td data-title="familienaam">familienaam</td>
                            <td data-title="telefoon">telefoon</td>
                            <td data-title="adres">adres</td>
                        </tr>
                        <tr data-details-id="details-row3">
                            <td data-title="naam">Joris</td>
                            <td data-title="familienaam">familienaam</td>
                            <td data-title="telefoon">telefoon</td>
                            <td data-title="adres">adres</td>
                        </tr>
                        <tr data-details-id="details-row3">
                            <td data-title="naam">Korneel</td>
                            <td data-title="familienaam">familienaam</td>
                            <td data-title="telefoon">telefoon</td>
                            <td data-title="adres">adres</td>
                        </tr>
                    </tbody>
                </table>
            </vl-table-next>
        `);g.storyName="vl-table-next - expandable";let x=(0,d._7)(i,({hover:t,matrix:e,grid:a,zebra:d,uigZebra:r,collapsedM:l,collapsedS:i,collapsedXS:o})=>{let s;return customElements.whenDefined("vl-data-table").then(()=>{s=document.querySelector("#vl-table-with-custom-expandable-details")}),(0,n.qy)`
            <vl-table-next
                id="vl-table-with-custom-expandable-details"
                ?hover=${t}
                ?matrix=${e}
                ?grid=${a}
                ?zebra=${d}
                ?uig-zebra=${r}
                ?collapsed-m=${l}
                ?collapsed-s=${i}
                ?collapsed-xs=${o}
            >
                <table>
                    <caption>
                        Table
                    </caption>
                    <thead>
                        <tr>
                            <th>Entry Header 1</th>
                            <th data-title="Entry Header 2" colspan="2">Entry line 2</th>
                            <th>Entry Header 3</th>
                            <th>Entry Header 4</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-title="Entry Header 1">Entry line 1</td>
                            <td data-title="Entry Header 2">Entry line 2</td>
                            <td data-title="Entry Header 3">Entry line 3</td>
                            <td data-title="Entry Header 4">Entry line 4</td>
                            <td data-with-expand-details>
                                <button
                                    is="vl-button"
                                    @click=${()=>{console.log("clicked table",s),s?.toggleDetails("details-row1")}}
                                >
                                    click to toggle details
                                </button>
                            </td>
                        </tr>
                        <tr data-details-id="details-row1">
                            <td data-title="details-title 1" colspan="5">
                                <div>
                                    <ul>
                                        <li>Extra Details 1</li>
                                        <li>Extra Details 1</li>
                                        <li>Extra Details 1</li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td data-title="Entry Header 1">Entry line 1</td>
                            <td data-title="Entry Header 2" colspan="2">Entry line 2</td>
                            <td data-title="Entry Header 3">Entry line 3</td>
                        </tr>
                        <tr data-details-id="details-row2">
                            <td data-title="details-title 2" colspan="1">
                                <div>
                                    <ul>
                                        <li>Extra Details 2</li>
                                        <li>Extra Details 2</li>
                                        <li>Extra Details 2</li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td data-title="Entry Header 1">Entry line 1</td>
                            <td data-title="Entry Header 2">Entry line 2</td>
                            <td data-title="Entry Header 3">Entry line 3</td>
                            <td data-title="Entry Header 4">Entry line 4</td>
                        </tr>
                        <tr data-details-id="details-row3">
                            <td data-title="naam">Jan</td>
                            <td data-title="familienaam">familienaam</td>
                            <td data-title="telefoon">telefoon</td>
                            <td data-title="adres">adres</td>
                        </tr>
                        <tr data-details-id="details-row3">
                            <td data-title="naam">Piet</td>
                            <td data-title="familienaam">familienaam</td>
                            <td data-title="telefoon">telefoon</td>
                            <td data-title="adres">adres</td>
                        </tr>
                        <tr data-details-id="details-row3">
                            <td data-title="naam">Joris</td>
                            <td data-title="familienaam">familienaam</td>
                            <td data-title="telefoon">telefoon</td>
                            <td data-title="adres">adres</td>
                        </tr>
                        <tr data-details-id="details-row3">
                            <td data-title="naam">Korneel</td>
                            <td data-title="familienaam">familienaam</td>
                            <td data-title="telefoon">telefoon</td>
                            <td data-title="adres">adres</td>
                        </tr>
                    </tbody>
                </table>
            </vl-table-next>
        `});x.storyName="vl-table-next - expandable custom toggle details column",x.parameters={docs:{language:"html",source:{format:!0,type:"code"}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:'story(tableArgs, ({\n  hover,\n  matrix,\n  grid,\n  zebra,\n  uigZebra,\n  collapsedM,\n  collapsedS,\n  collapsedXS\n}) => html`\n        <vl-table-next\n            ?hover=${hover}\n            ?matrix=${matrix}\n            ?grid=${grid}\n            ?zebra=${zebra}\n            ?uig-zebra=${uigZebra}\n            ?collapsed-m=${collapsedM}\n            ?collapsed-s=${collapsedS}\n            ?collapsed-xs=${collapsedXS}\n        >\n            <table>\n                <caption>\n                    Meise Botanic Garden herbarium collections\n                </caption>\n                <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Collector</th>\n                        <th>Collector number</th>\n                        <th>Family</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <th rowspan="3">Didymium clavus</th>\n                        <td>Thomas H. &amp; Marie L. Farr</td>\n                        <td>110</td>\n                        <td>Didymiaceae</td>\n                    </tr>\n                    <tr>\n                        <td>Critchfield R.L.</td>\n                        <td>715</td>\n                        <td>Didymiaceae</td>\n                    </tr>\n                    <tr>\n                        <td>Rammeloo J.</td>\n                        <td>4572</td>\n                        <td>Didymiaceae</td>\n                    </tr>\n                    <tr>\n                        <th rowspan="3">Epilobium angustifolium</th>\n                        <td>Franz Heylemans</td>\n                        <td>160</td>\n                        <td>Onagraceae</td>\n                    </tr>\n                    <tr>\n                        <td>Stam A.B.</td>\n                        <td>477</td>\n                        <td>Onagraceae</td>\n                    </tr>\n                    <tr>\n                        <td>Van Hoeck Eddy</td>\n                        <td>42</td>\n                        <td>Onagraceae</td>\n                    </tr>\n                    <tr>\n                        <th rowspan="3">Euphorbia scordifolia</th>\n                        <td>Mission O. Olufsen</td>\n                        <td>125</td>\n                        <td>Euphorbiaceae</td>\n                    </tr>\n                    <tr>\n                        <td>Brunel J.F.</td>\n                        <td>7603</td>\n                        <td>Euphorbiaceae</td>\n                    </tr>\n                    <tr>\n                        <td>Bamps P.</td>\n                        <td>7549</td>\n                        <td>Euphorbiaceae</td>\n                    </tr>\n                    <tr>\n                        <th rowspan="3">Hemitrichia</th>\n                        <td>Madame F. Meyer</td>\n                        <td>198</td>\n                        <td>Trichiaceae</td>\n                    </tr>\n                    <tr>\n                        <td>Johannesen E.W.</td>\n                        <td>50B</td>\n                        <td>Trichiaceae</td>\n                    </tr>\n                    <tr>\n                        <td>Rammeloo J.</td>\n                        <td>9438</td>\n                        <td>Trichiaceae</td>\n                    </tr>\n                </tbody>\n                <tfoot>\n                    <tr>\n                        <td>\n                            <div class="vl-annotation">Table annotation</div>\n                        </td>\n                    </tr>\n                </tfoot>\n            </table>\n        </vl-table-next>\n    `)',...u.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:'story(tableArgs, ({\n  hover,\n  matrix,\n  grid,\n  zebra,\n  uigZebra,\n  collapsedM,\n  collapsedS,\n  collapsedXS\n}) => html`\n        <vl-table-next\n                ?hover=${hover}\n                ?matrix=${matrix}\n                ?grid=${grid}\n                ?zebra=${zebra}\n                ?uig-zebra=${uigZebra}\n                ?collapsed-m=${collapsedM}\n                ?collapsed-s=${collapsedS}\n                ?collapsed-xs=${collapsedXS}\n        >\n            <table>\n                <caption>\n                    Table Matrix - Joined row titles\n                </caption>\n                <thead>\n                    <tr>\n                        <th></th>\n                        <th></th>\n                        <th></th>\n                        <th></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <th rowspan="3" scope="rowgroup">Horizontal title 1</th>\n                        <td>Thomas H. &amp; Marie L. Farr</td>\n                        <td>110</td>\n                        <td>Didymiaceae</td>\n                    </tr>\n                    <tr>\n                        <td>Critchfield R.L.</td>\n                        <td>715</td>\n                        <td>Didymiaceae</td>\n                    </tr>\n                    <tr>\n                        <td>Rammeloo J.</td>\n                        <td>4572</td>\n                        <td>Didymiaceae</td>\n                    </tr>\n                    <tr>\n                        <th rowspan="3" scope="rowgroup">Horizontal title 2</th>\n                        <td>Franz Heylemans</td>\n                        <td>160</td>\n                        <td>Onagraceae</td>\n                    </tr>\n                    <tr>\n                        <td>Stam A.B.</td>\n                        <td>477</td>\n                        <td>Onagraceae</td>\n                    </tr>\n                    <tr>\n                        <td>Van Hoeck Eddy</td>\n                        <td>42</td>\n                        <td>Onagraceae</td>\n                    </tr>\n                </tbody>\n            </table>\n        </vl-table-next>\n    `)',...y.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:'story(tableArgs, ({\n  hover,\n  matrix,\n  grid,\n  zebra,\n  uigZebra,\n  collapsedM,\n  collapsedS,\n  collapsedXS\n}: typeof tableArgs) => {\n  return html`\n            <vl-table-next\n                ?hover=${hover}\n                ?matrix=${matrix}\n                ?grid=${grid}\n                ?zebra=${zebra}\n                ?uig-zebra=${uigZebra}\n                ?collapsed-m=${collapsedM}\n                ?collapsed-s=${collapsedS}\n                ?collapsed-xs=${collapsedXS}\n            >\n                <table id="vl-data-table-with-expandable-details">\n                    <caption>\n                        Table with expandable details\n                    </caption>\n                    <thead>\n                        <tr>\n                            <th>Entry Header 1</th>\n                            <th>Entry Header 2</th>\n                            <th>Entry Header 3</th>\n                            <th>Entry Header 4</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td data-title="Entry Header 1">Entry line 1</td>\n                            <td data-title="Entry Header 2">Entry line 2</td>\n                            <td data-title="Entry Header 3">Entry line 3</td>\n                            <td data-title="Entry Header 4">Entry line 4</td>\n                        </tr>\n                        <tr data-details-id="details-row1">\n                            <td data-title="details-title 1">Title 1: generic details</td>\n                        </tr>\n                        <tr>\n                            <td data-title="Entry Header 1">Entry line 1</td>\n                            <td data-title="Entry Header 2" colspan="2">Entry line 2</td>\n                            <td data-title="Entry Header 3">Entry line 3</td>\n                        </tr>\n                        <tr data-details-id="details-row2">\n                            <td data-title="details-title 2">Title 2: generic details</td>\n                        </tr>\n                        <tr id="multiple-cells">\n                            <td data-title="Entry Header 1">Entry line 1</td>\n                            <td data-title="Entry Header 2">Entry line 2</td>\n                            <td data-title="Entry Header 3">Entry line 3</td>\n                            <td data-title="Entry Header 4">Entry line 4</td>\n                        </tr>\n                        <tr data-details-id="details-row3">\n                            <td data-title="details-title 3">Al die willen te kaap\'ren varen:</td>\n                            <td>*</td>\n                            <td>*</td>\n                            <td>*</td>\n                        </tr>\n                        <tr data-details-id="details-row3">\n                            <td data-title="naam">Jan</td>\n                            <td data-title="familienaam">familienaam</td>\n                            <td data-title="telefoon">telefoon</td>\n                            <td data-title="adres">adres</td>\n                        </tr>\n                        <tr data-details-id="details-row3">\n                            <td data-title="naam">Piet</td>\n                            <td data-title="familienaam">familienaam</td>\n                            <td data-title="telefoon">telefoon</td>\n                            <td data-title="adres">adres</td>\n                        </tr>\n                        <tr data-details-id="details-row3">\n                            <td data-title="naam">Joris</td>\n                            <td data-title="familienaam">familienaam</td>\n                            <td data-title="telefoon">telefoon</td>\n                            <td data-title="adres">adres</td>\n                        </tr>\n                        <tr data-details-id="details-row3">\n                            <td data-title="naam">Korneel</td>\n                            <td data-title="familienaam">familienaam</td>\n                            <td data-title="telefoon">telefoon</td>\n                            <td data-title="adres">adres</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </vl-table-next>\n        `;\n})',...g.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:'story(tableArgs, ({\n  hover,\n  matrix,\n  grid,\n  zebra,\n  uigZebra,\n  collapsedM,\n  collapsedS,\n  collapsedXS\n}) => {\n  let table: (VlTableComponent & Element) | null;\n  customElements.whenDefined(\'vl-data-table\').then(() => {\n    table = document.querySelector<VlTableComponent & Element>(\'#vl-table-with-custom-expandable-details\');\n  });\n  return html`\n            <vl-table-next\n                id="vl-table-with-custom-expandable-details"\n                ?hover=${hover}\n                ?matrix=${matrix}\n                ?grid=${grid}\n                ?zebra=${zebra}\n                ?uig-zebra=${uigZebra}\n                ?collapsed-m=${collapsedM}\n                ?collapsed-s=${collapsedS}\n                ?collapsed-xs=${collapsedXS}\n            >\n                <table>\n                    <caption>\n                        Table\n                    </caption>\n                    <thead>\n                        <tr>\n                            <th>Entry Header 1</th>\n                            <th data-title="Entry Header 2" colspan="2">Entry line 2</th>\n                            <th>Entry Header 3</th>\n                            <th>Entry Header 4</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td data-title="Entry Header 1">Entry line 1</td>\n                            <td data-title="Entry Header 2">Entry line 2</td>\n                            <td data-title="Entry Header 3">Entry line 3</td>\n                            <td data-title="Entry Header 4">Entry line 4</td>\n                            <td data-with-expand-details>\n                                <button\n                                    is="vl-button"\n                                    @click=${() => {\n    console.log(\'clicked table\', table);\n    table?.toggleDetails(\'details-row1\');\n  }}\n                                >\n                                    click to toggle details\n                                </button>\n                            </td>\n                        </tr>\n                        <tr data-details-id="details-row1">\n                            <td data-title="details-title 1" colspan="5">\n                                <div>\n                                    <ul>\n                                        <li>Extra Details 1</li>\n                                        <li>Extra Details 1</li>\n                                        <li>Extra Details 1</li>\n                                    </ul>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td data-title="Entry Header 1">Entry line 1</td>\n                            <td data-title="Entry Header 2" colspan="2">Entry line 2</td>\n                            <td data-title="Entry Header 3">Entry line 3</td>\n                        </tr>\n                        <tr data-details-id="details-row2">\n                            <td data-title="details-title 2" colspan="1">\n                                <div>\n                                    <ul>\n                                        <li>Extra Details 2</li>\n                                        <li>Extra Details 2</li>\n                                        <li>Extra Details 2</li>\n                                    </ul>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td data-title="Entry Header 1">Entry line 1</td>\n                            <td data-title="Entry Header 2">Entry line 2</td>\n                            <td data-title="Entry Header 3">Entry line 3</td>\n                            <td data-title="Entry Header 4">Entry line 4</td>\n                        </tr>\n                        <tr data-details-id="details-row3">\n                            <td data-title="naam">Jan</td>\n                            <td data-title="familienaam">familienaam</td>\n                            <td data-title="telefoon">telefoon</td>\n                            <td data-title="adres">adres</td>\n                        </tr>\n                        <tr data-details-id="details-row3">\n                            <td data-title="naam">Piet</td>\n                            <td data-title="familienaam">familienaam</td>\n                            <td data-title="telefoon">telefoon</td>\n                            <td data-title="adres">adres</td>\n                        </tr>\n                        <tr data-details-id="details-row3">\n                            <td data-title="naam">Joris</td>\n                            <td data-title="familienaam">familienaam</td>\n                            <td data-title="telefoon">telefoon</td>\n                            <td data-title="adres">adres</td>\n                        </tr>\n                        <tr data-details-id="details-row3">\n                            <td data-title="naam">Korneel</td>\n                            <td data-title="familienaam">familienaam</td>\n                            <td data-title="telefoon">telefoon</td>\n                            <td data-title="adres">adres</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </vl-table-next>\n        `;\n})',...x.parameters?.docs?.source}}};let E=["TableDefault","TableJoinedRowTitles","TableExpandable","TableExpandableCustomToggleDetailsColumn"]},"../../node_modules/react-dom/client.js":(t,e,a)=>{var d=a("../../node_modules/react-dom/index.js");e.createRoot=d.createRoot,e.hydrateRoot=d.hydrateRoot}}]);