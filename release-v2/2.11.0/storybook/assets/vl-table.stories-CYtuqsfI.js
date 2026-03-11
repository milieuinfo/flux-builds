import{Z as c,Y as m,u as w,j as t,C as g,bk as k,S as v,s as x,x as j,r as H,cy as z}from"./iframe-BWsn3Pr7.js";import"./preload-helper-D9Z9MdNV.js";const $={hover:!1,matrix:!1,grid:!1,zebra:!1,fluxZebra:!1,collapsedM:!1,collapsedS:!1,collapsedXS:!1},d={...$},T={hover:{name:"hover",description:"Attribuut wordt gebruikt om een rij te highlighten wanneer de gebruiker erover hovert met muiscursor.",table:{category:m.ATTRIBUTES,type:{summary:c.BOOLEAN},defaultValue:{summary:String(d.hover)}}},matrix:{name:"matrix",description:"Attribuut wordt gebruikt om data in 2 dimensies te tonen. Zowel de rijen als de kolommen krijgen een titel. Deze titels worden gescheiden door een dikke lijn.",table:{category:m.ATTRIBUTES,type:{summary:c.BOOLEAN},defaultValue:{summary:String(d.matrix)}}},grid:{name:"grid",description:"Variant met een lijn tussen elke rij en kolom.",table:{category:m.ATTRIBUTES,type:{summary:c.BOOLEAN},defaultValue:{summary:String(d.grid)}}},zebra:{name:"zebra",description:"Variant waarin de rijen afwisselend een andere achtergrondkleur krijgen. Dit maakt de tabel makkelijker leesbaar. Deze zebra werkt niet voor tabellen met detail rijen, gebruik hiervoor flux-zebra.",table:{category:m.ATTRIBUTES,type:{summary:c.BOOLEAN},defaultValue:{summary:String(d.zebra)}}},fluxZebra:{name:"flux-zebra",description:"Variant waarin de rijen afwisselend een andere achtergrondkleur krijgen. Dit maakt de tabel makkelijker leesbaar. Deze zebra werkt voor tabellen met en zonder detail rijen.",table:{category:m.ATTRIBUTES,type:{summary:c.BOOLEAN},defaultValue:{summary:String(d.fluxZebra)}}},collapsedM:{name:"collapsed-m",description:"Vanaf een medium schermgrootte zullen de cellen van elke rij onder elkaar ipv naast elkaar getoond worden.",table:{category:m.ATTRIBUTES,type:{summary:c.BOOLEAN},defaultValue:{summary:String(d.collapsedM)}}},collapsedS:{name:"collapsed-s",description:"Vanaf een small schermgrootte zullen de cellen van elke rij onder elkaar ipv naast elkaar getoond worden.",table:{category:m.ATTRIBUTES,type:{summary:c.BOOLEAN},defaultValue:{summary:String(d.collapsedS)}}},collapsedXS:{name:"collapsed-xs",description:"Vanaf een extra small schermgrootte zullen de cellen van elke rij onder elkaar ipv naast elkaar getoond worden.",table:{category:m.ATTRIBUTES,type:{summary:c.BOOLEAN},defaultValue:{summary:String(d.collapsedXS)}}}};function E(a){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...w(),...a.components},{FluxAlert:n,FluxComponentMetaData:r}=e;return n||f("FluxAlert"),r||f("FluxComponentMetaData"),t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"table",children:"Table"}),`
`,t.jsx(r,{id:"components-block-table"}),`
`,t.jsx(n,{type:"info",children:`
  In de v2 versie van deze component gebruik je hem via de custom-tag, de interne implementatie is voor de rest
  gelijk gebleven aan deze van de v1 versie. In de toekomst zal deze component grondig herwerkt worden; in de
  context van een herwerking van de vl-table.
`}),`
`,t.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,t.jsxs(e.p,{children:["Gebruik de ",t.jsx(e.code,{children:"table"})," component om op een gestructureerde manier (grote hoeveelheden) relationele data te tonen."]}),`
`,t.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`import { VlTableComponent } from '@domg-wc/components/block';
`})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<vl-table>
    <table>
        <caption>
             Table
        </caption>
        <thead>
            <tr>
                <th>Entry Header 1</th>
                <th>Entry Header 2</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td data-title="Entry Header 1">Entry line 1</td>
                <td data-title="Entry Header 2">Entry line 2</td>
            </tr>
            <tr>
                <td data-title="Entry Header 1">Entry line 1</td>
                <td data-title="Entry Header 2">Entry line 2</td>
            </tr>
        </tbody>
    </table>
</vl-table>
`})}),`
`,t.jsx(e.h2,{id:"default",children:"Default"}),`
`,t.jsx(g,{of:h,layout:"padded"}),`
`,t.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,t.jsx(k,{of:h}),`
`,t.jsx(e.h2,{id:"functionaliteit",children:"Functionaliteit"}),`
`,t.jsxs(e.p,{children:["Standaard is er geen sorteer, filtering of paginatie functionaliteit beschikbaar voor de ",t.jsx(e.code,{children:"table"}),`. Hiervoor is de
`,t.jsx(e.a,{href:"?path=/docs/components-block-rich-table--rich-table-default",children:"rich-table"})," beschikbaar.",t.jsx("br",{}),`
Wat dit component wel méér heeft dan die van Digitaal Vlaanderen zijn expandable/collapsible rows. Zie de specifieke
stories hieronder.`,t.jsx("br",{}),`
De visuele mark-up volgt standaard die van Digitaal Vlaanderen, inclusief responsiveness.`]}),`
`,t.jsx(e.h2,{id:"lege-cellen",children:"Lege cellen"}),`
`,t.jsxs(e.p,{children:["Het is aan te raden om in lege cellen de waarde ",t.jsx(e.code,{children:"&nbsp;"}),` te plaatsen, dit zorgt ervoor dat rijen hun hoogte behouden
indien elke cel van een rij leeg is.`]}),`
`,t.jsx(e.h2,{id:"joined-row-titles",children:"Joined row titles"}),`
`,t.jsxs(e.p,{children:[`Gebruik de matrix-variant om gegevens met 2 dimensies weer te geven. Zowel de rijen als de kolommen krijgen een titel.
De titels zijn gescheiden van de inhoud met een vetgedrukte lijn.`,t.jsx("br",{}),`
Om dit toe passen maak je zelf gebruik van native html-attribuut `,t.jsx(e.code,{children:"rowspan"}),"."]}),`
`,t.jsx(g,{of:p,layout:"padded"}),`
`,t.jsx(e.h2,{id:"expandable",children:"Expandable"}),`
`,t.jsxs(e.p,{children:['Om een rijen te laten uitklappen ("expanden") moet je het volgende doen:',t.jsx("br",{}),`
Als je 2 rijen hebt, en je wil rij A altijd zichtbaar zetten en rij B verborgen tot die wordt opengeklapt:`]}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"maak een nieuwe rij B direct na rij A"}),`
`,t.jsxs(e.li,{children:["zet je het attribuut ",t.jsx(e.code,{children:"data-details-id"})," op de rij B"]}),`
`,t.jsxs(e.li,{children:["je kan ook meerdere rijen uitklapbaar maken, zolang je maar dezelfde ",t.jsx(e.code,{children:"data-details-id"})," hergebruikt"]}),`
`]}),`
`,t.jsxs("details",{children:[t.jsx("summary",{children:"voorbeeld expandable row"}),t.jsx(v,{language:"html",dark:!0,format:!0,code:`
            <tr id="rij-A">
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
            </tr>
            <tr data-details-id="details-row-A" id="rij-B">
                <td>details on previous row</td>
            </tr>`})]}),`
`,t.jsxs(e.p,{children:["Dan zal er automatisch een ",t.jsx(e.code,{children:"button"}),` toegevoegd worden die de gebruiker toelaat de rij B te zien wanneer op de
desbetreffende knop bij rij A wordt gedrukt.`]}),`
`,t.jsx(g,{of:u,layout:"padded"}),`
`,t.jsx(e.h3,{id:"colspan",children:"Colspan"}),`
`,t.jsxs(e.p,{children:["We berekenen automatisch de ",t.jsx(e.code,{children:"colspan"}),` van de rij die uitklapt, zodat de rij die uitklapt de volledige breedte
van de tabel inneemt.
Dit doen we enkel als de rij die uitklapt een enkele cel bevat. Als de rij die uitklapt meerdere cellen bevat,
moet je zelf de `,t.jsx(e.code,{children:"colspan"})," instellen."]}),`
`,t.jsx(e.h3,{id:"expandable-with-custom-toggle",children:"Expandable with custom toggle"}),`
`,t.jsxs(e.p,{children:["Je kan ook de knop die de rij open en dicht klapt zelf kiezen.",t.jsx("br",{}),`
Als je 2 rijen hebt, en je wil rij A altijd zichtbaar zetten en rij B verborgen tot die word opengeklapt:`,t.jsx("br",{}),`
Om dit te doen, doe het volgende:`,t.jsx("br",{})]}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"op de rij die meer details geeft op de voorgaande rij, moet de juiste id worden toegekend"}),`
`]}),`
`,t.jsx(v,{language:"html",format:!0,code:`
      <tr data-details-id="details-row1">
          <td>Details 1</td>
      </tr>
        `}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:["op rij die meer details heeft, een cel toevoegen die:",`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:[t.jsx(e.code,{children:"data-with-expand-details"})," heeft als attribuut"]}),`
`,t.jsxs(e.li,{children:["een element naar keuze heeft, die ",t.jsx(e.code,{children:"toggleDetails([id])"}),` gaat aanroepen met de juiste id voor de openklapbare rij
bv.:`]}),`
`]}),`
`]}),`
`]}),`
`,t.jsx(v,{language:"html",format:!0,code:`
     <td data-with-expand-details>
         <vl-button onclick="table.toggleDetails('details-row-1')">click to toggle details</vl-button>
     </td>
        `}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:t.jsxs(e.em,{children:["In dit voorbeeld vind je bij ",t.jsx(e.code,{children:"Show code"})," broncode in ",t.jsx(e.code,{children:"lit-html"}),`-syntax. Voor code voorbeelden in HTML/JavaScript
verwijzen we naar hierboven.`]})})}),`
`,t.jsx(g,{of:b,layout:"padded"}),`
`,t.jsx(e.h2,{id:"styling",children:"Styling"}),`
`,t.jsx(e.p,{children:"De tabel ondersteunt verschillende stijlen voor de rijen, om de status van gegevens aan te geven:"}),`
`,t.jsx(e.h3,{id:"rij-styling",children:"Rij styling"}),`
`,t.jsx(e.p,{children:"Je kunt de volgende CSS-klassen gebruiken om specifieke stijlen toe te passen op hele rijen of individuele cellen:"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"Success"}),": Gebruik ",t.jsx(e.code,{children:"vl-table--success"})," voor een groene achtergrond (met groene rand)"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"Warning"}),": Gebruik ",t.jsx(e.code,{children:"vl-table--warning"})," voor een oranje achtergrond (met oranje rand)"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"Error"}),": Gebruik ",t.jsx(e.code,{children:"vl-table--error"})," voor een rode achtergrond (met rode rand)"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"Disabled"}),": Gebruik ",t.jsx(e.code,{children:"vl-table--disabled"})," voor een grijze achtergrond"]}),`
`]}),`
`,t.jsxs(e.p,{children:["Deze klassen kunnen zowel op een ",t.jsx(e.code,{children:"<tr>"})," element worden toegepast om een hele rij te stylen, als op een ",t.jsx(e.code,{children:"<td>"})," element om een individuele cel te stylen."]}),`
`,t.jsx(g,{of:y,layout:"padded"}),`
`,t.jsx(e.h2,{id:"referenties",children:"Referenties"}),`
`,t.jsx(e.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,t.jsx(e.p,{children:"We nemen de functionaliteit & styling over van het equivalente component van Digitaal Vlaanderen."}),`
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-data-table",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Data Table"})})]})}function S(a={}){const{wrapper:e}={...w(),...a.components};return e?t.jsx(e,{...a,children:t.jsx(E,{...a})}):E(a)}function f(a,e){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}H([z]);const O={id:"components-block-table",title:"Components - Block/table",tags:["autodocs"],args:d,argTypes:T,parameters:{docs:{page:S}}},h=x(d,({hover:a,matrix:e,grid:n,zebra:r,fluxZebra:l,collapsedM:i,collapsedS:o,collapsedXS:s})=>j`
        <vl-table
            ?hover=${a}
            ?matrix=${e}
            ?grid=${n}
            ?zebra=${r}
            ?flux-zebra=${l}
            ?collapsed-m=${i}
            ?collapsed-s=${o}
            ?collapsed-xs=${s}
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
        </vl-table>
    `);h.storyName="vl-table - default";const p=x(d,({hover:a,matrix:e,grid:n,zebra:r,fluxZebra:l,collapsedM:i,collapsedS:o,collapsedXS:s})=>j`
        <vl-table
            ?hover=${a}
            ?matrix=${e}
            ?grid=${n}
            ?zebra=${r}
            ?flux-zebra=${l}
            ?collapsed-m=${i}
            ?collapsed-s=${o}
            ?collapsed-xs=${s}
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
        </vl-table>
    `);p.storyName="vl-table - joined row titles";const u=x(d,({hover:a,matrix:e,grid:n,zebra:r,fluxZebra:l,collapsedM:i,collapsedS:o,collapsedXS:s})=>j`
            <vl-table
                ?hover=${a}
                ?matrix=${e}
                ?grid=${n}
                ?zebra=${r}
                ?flux-zebra=${l}
                ?collapsed-m=${i}
                ?collapsed-s=${o}
                ?collapsed-xs=${s}
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
            </vl-table>
        `);u.storyName="vl-table - expandable";const b=x(d,({hover:a,matrix:e,grid:n,zebra:r,fluxZebra:l,collapsedM:i,collapsedS:o,collapsedXS:s})=>j`
            <vl-table
                id="vl-table-with-custom-expandable-details"
                ?hover=${a}
                ?matrix=${e}
                ?grid=${n}
                ?zebra=${r}
                ?flux-zebra=${l}
                ?collapsed-m=${i}
                ?collapsed-s=${o}
                ?collapsed-xs=${s}
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
                                <vl-button
                                    @click=${()=>{document.querySelector("vl-table")?.toggleDetails("details-row1")}}
                                >
                                    click to toggle details
                                </vl-button>
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
            </vl-table>
        `);b.storyName="vl-table - expandable custom toggle details column";b.parameters={docs:{language:"html",source:{format:!0,type:"code"}}};const y=x(d,({hover:a,matrix:e,grid:n,zebra:r,fluxZebra:l,collapsedM:i,collapsedS:o,collapsedXS:s})=>j`
        <vl-table
            ?hover=${a}
            ?matrix=${e}
            ?grid=${n}
            ?zebra=${r}
            ?flux-zebra=${l}
            ?collapsed-m=${i}
            ?collapsed-s=${o}
            ?collapsed-xs=${s}
        >
            <table>
                <thead>
                    <tr>
                        <th>Naam</th>
                        <th>Verzamelaar</th>
                        <th>Verzamelaarnummer</th>
                        <th>Familie</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Standaard rij</th>
                        <td>Van Hoeck Eddy</td>
                        <td>42</td>
                        <td>Onagraceae</td>
                    </tr>
                    <tr class="vl-table--success">
                        <th>Success rij</th>
                        <td>Franz Heylemans</td>
                        <td>160</td>
                        <td>Onagraceae</td>
                    </tr>
                    <tr class="vl-table--warning">
                        <th>Warning rij</th>
                        <td>Brunel J.F.</td>
                        <td>7603</td>
                        <td>Euphorbiaceae</td>
                    </tr>
                    <tr class="vl-table--error">
                        <th>Error rij</th>
                        <td>Bamps P.</td>
                        <td>7549</td>
                        <td>Euphorbiaceae</td>
                    </tr>
                    <tr class="vl-table--disabled">
                        <th>Disabled rij</th>
                        <td>Rammeloo J.</td>
                        <td>9438</td>
                        <td>Trichiaceae</td>
                    </tr>
                    <tr>
                        <th>Individuele cellen</th>
                        <td class="vl-table--success">Success</td>
                        <td class="vl-table--warning">Warning</td>
                        <td class="vl-table--error">Error</td>
                    </tr>
                </tbody>
            </table>
        </vl-table>
    `);y.storyName="vl-table - row styling";h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`story(tableArgs, ({
  hover,
  matrix,
  grid,
  zebra,
  fluxZebra,
  collapsedM,
  collapsedS,
  collapsedXS
}) => html\`
        <vl-table
            ?hover=\${hover}
            ?matrix=\${matrix}
            ?grid=\${grid}
            ?zebra=\${zebra}
            ?flux-zebra=\${fluxZebra}
            ?collapsed-m=\${collapsedM}
            ?collapsed-s=\${collapsedS}
            ?collapsed-xs=\${collapsedXS}
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
        </vl-table>
    \`)`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`story(tableArgs, ({
  hover,
  matrix,
  grid,
  zebra,
  fluxZebra,
  collapsedM,
  collapsedS,
  collapsedXS
}) => html\`
        <vl-table
            ?hover=\${hover}
            ?matrix=\${matrix}
            ?grid=\${grid}
            ?zebra=\${zebra}
            ?flux-zebra=\${fluxZebra}
            ?collapsed-m=\${collapsedM}
            ?collapsed-s=\${collapsedS}
            ?collapsed-xs=\${collapsedXS}
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
        </vl-table>
    \`)`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`story(tableArgs, ({
  hover,
  matrix,
  grid,
  zebra,
  fluxZebra,
  collapsedM,
  collapsedS,
  collapsedXS
}: typeof tableArgs) => {
  return html\`
            <vl-table
                ?hover=\${hover}
                ?matrix=\${matrix}
                ?grid=\${grid}
                ?zebra=\${zebra}
                ?flux-zebra=\${fluxZebra}
                ?collapsed-m=\${collapsedM}
                ?collapsed-s=\${collapsedS}
                ?collapsed-xs=\${collapsedXS}
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
            </vl-table>
        \`;
})`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`story(tableArgs, ({
  hover,
  matrix,
  grid,
  zebra,
  fluxZebra,
  collapsedM,
  collapsedS,
  collapsedXS
}) => {
  return html\`
            <vl-table
                id="vl-table-with-custom-expandable-details"
                ?hover=\${hover}
                ?matrix=\${matrix}
                ?grid=\${grid}
                ?zebra=\${zebra}
                ?flux-zebra=\${fluxZebra}
                ?collapsed-m=\${collapsedM}
                ?collapsed-s=\${collapsedS}
                ?collapsed-xs=\${collapsedXS}
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
                                <vl-button
                                    @click=\${() => {
    document.querySelector<VlTableComponent & Element>('vl-table')?.toggleDetails('details-row1');
  }}
                                >
                                    click to toggle details
                                </vl-button>
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
            </vl-table>
        \`;
})`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`story(tableArgs, ({
  hover,
  matrix,
  grid,
  zebra,
  fluxZebra,
  collapsedM,
  collapsedS,
  collapsedXS
}) => html\`
        <vl-table
            ?hover=\${hover}
            ?matrix=\${matrix}
            ?grid=\${grid}
            ?zebra=\${zebra}
            ?flux-zebra=\${fluxZebra}
            ?collapsed-m=\${collapsedM}
            ?collapsed-s=\${collapsedS}
            ?collapsed-xs=\${collapsedXS}
        >
            <table>
                <thead>
                    <tr>
                        <th>Naam</th>
                        <th>Verzamelaar</th>
                        <th>Verzamelaarnummer</th>
                        <th>Familie</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Standaard rij</th>
                        <td>Van Hoeck Eddy</td>
                        <td>42</td>
                        <td>Onagraceae</td>
                    </tr>
                    <tr class="vl-table--success">
                        <th>Success rij</th>
                        <td>Franz Heylemans</td>
                        <td>160</td>
                        <td>Onagraceae</td>
                    </tr>
                    <tr class="vl-table--warning">
                        <th>Warning rij</th>
                        <td>Brunel J.F.</td>
                        <td>7603</td>
                        <td>Euphorbiaceae</td>
                    </tr>
                    <tr class="vl-table--error">
                        <th>Error rij</th>
                        <td>Bamps P.</td>
                        <td>7549</td>
                        <td>Euphorbiaceae</td>
                    </tr>
                    <tr class="vl-table--disabled">
                        <th>Disabled rij</th>
                        <td>Rammeloo J.</td>
                        <td>9438</td>
                        <td>Trichiaceae</td>
                    </tr>
                    <tr>
                        <th>Individuele cellen</th>
                        <td class="vl-table--success">Success</td>
                        <td class="vl-table--warning">Warning</td>
                        <td class="vl-table--error">Error</td>
                    </tr>
                </tbody>
            </table>
        </vl-table>
    \`)`,...y.parameters?.docs?.source}}};const B=["TableDefault","TableJoinedRowTitles","TableExpandable","TableExpandableCustomToggleDetailsColumn","TableRowStyling"];export{h as TableDefault,u as TableExpandable,b as TableExpandableCustomToggleDetailsColumn,p as TableJoinedRowTitles,y as TableRowStyling,B as __namedExportsOrder,O as default};
