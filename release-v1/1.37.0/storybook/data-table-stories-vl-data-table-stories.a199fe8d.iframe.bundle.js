(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[3131],{"../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(t,e,a)=>{"use strict";a.d(e,{BN:()=>n,RP:()=>r,gz:()=>l,xA:()=>o});var d=a("../../node_modules/react/index.js");let n=d.createContext({});function l(t){return function(e){let a=r(e.components);return d.createElement(t,{...e,allComponents:a})}}function r(t){let e=d.useContext(n);return d.useMemo(()=>"function"==typeof t?t(e):{...e,...t},[e,t])}let i={};function o({components:t,children:e,disableParentContext:a}){let l;return l=a?"function"==typeof t?t({}):t||i:r(t),d.createElement(n.Provider,{value:l},e)}},"../../libs/elements/src/data-table/stories/vl-data-table.stories.ts":(t,e,a)=>{"use strict";a.r(e),a.d(e,{DataTableDefault:()=>h,DataTableExpandable:()=>y,DataTableExpandableCustomToggleDetailsColumn:()=>p,DataTableJoinedRowTitles:()=>b,__namedExportsOrder:()=>u,default:()=>m});var d=a("../../node_modules/lit-html/lit-html.js");a("../../libs/elements/src/data-table/vl-data-table.element.ts");var n=a("../../libs/common/storybook/src/index.ts");let l={hover:!1,matrix:!1,grid:!1,zebra:!1,uigZebra:!1,collapsedM:!1,collapsedS:!1,collapsedXS:!1},r={hover:{name:"data-vl-hover",description:"Attribuut wordt gebruikt om een rij te highlighten wanneer de gebruiker erover hovert met muiscursor.",table:{category:n.R6.ATTRIBUTES,type:{summary:n.QE.BOOLEAN},defaultValue:{summary:l.hover}}},matrix:{name:"data-vl-matrix",description:"Attribuut wordt gebruikt om data in 2 dimensies te tonen. Zowel de rijen als de kolommen krijgen een titel. Deze titels worden gescheiden door een dikke lijn.",table:{category:n.R6.ATTRIBUTES,type:{summary:n.QE.BOOLEAN},defaultValue:{summary:l.matrix}}},grid:{name:"data-vl-grid",description:"Variant met een lijn tussen elke rij en kolom.",table:{category:n.R6.ATTRIBUTES,type:{summary:n.QE.BOOLEAN},defaultValue:{summary:l.grid}}},zebra:{name:"data-vl-zebra",description:"Variant waarin de rijen afwisselend een andere achtergrondkleur krijgen. Dit maakt de tabel makkelijker leesbaar. Deze zebra werkt niet voor tabellen met detail rijen, gebruik hiervoor data-vl-uig-zebra.",table:{category:n.R6.ATTRIBUTES,type:{summary:n.QE.BOOLEAN},defaultValue:{summary:l.zebra}}},uigZebra:{name:"data-vl-uig-zebra",description:"Variant waarin de rijen afwisselend een andere achtergrondkleur krijgen. Dit maakt de tabel makkelijker leesbaar. Deze zebra werkt voor tabellen met en zonder detail rijen.",table:{category:n.R6.ATTRIBUTES,type:{summary:n.QE.BOOLEAN},defaultValue:{summary:l.uigZebra}}},collapsedM:{name:"data-vl-collapsed-m",description:"Vanaf een medium schermgrootte zullen de cellen van elke rij onder elkaar ipv naast elkaar getoond worden.",table:{category:n.R6.ATTRIBUTES,type:{summary:n.QE.BOOLEAN},defaultValue:{summary:l.collapsedM}}},collapsedS:{name:"data-vl-collapsed-s",description:"Vanaf een small schermgrootte zullen de cellen van elke rij onder elkaar ipv naast elkaar getoond worden.",table:{category:n.R6.ATTRIBUTES,type:{summary:n.QE.BOOLEAN},defaultValue:{summary:l.collapsedS}}},collapsedXS:{name:"data-vl-collapsed-xs",description:"Vanaf een extra small schermgrootte zullen de cellen van elke rij onder elkaar ipv naast elkaar getoond worden.",table:{category:n.R6.ATTRIBUTES,type:{summary:n.QE.BOOLEAN},defaultValue:{summary:l.collapsedXS}}}};a("../../node_modules/react/index.js");var i=a("../../node_modules/react/jsx-runtime.js"),o=a("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),s=a("../../node_modules/@storybook/blocks/dist/index.mjs");function c(t){let e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",a:"a",ul:"ul",li:"li",h3:"h3",strong:"strong",em:"em"},(0,o.RP)(),t.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"data-table",children:"Data Table"}),"\n",(0,i.jsxs)(e.p,{children:["Gebruik de ",(0,i.jsx)(e.code,{children:"data-table"})," component om op een gestructureerde manier (grote hoeveelheden) relationele data te tonen."]}),"\n",(0,i.jsx)(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"import { VlDataTable } from '@domg-wc/components';\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-html",children:'<table is="vl-data-table">\n    <caption>\n        Data table\n    </caption>\n    <thead>\n        <tr>\n            <th>Entry Header 1</th>\n            <th>Entry Header 2</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td data-title="Entry Header 1">Entry line 1</td>\n            <td data-title="Entry Header 2">Entry line 2</td>\n        </tr>\n        <tr>\n            <td data-title="Entry Header 1">Entry line 1</td>\n            <td data-title="Entry Header 2">Entry line 2</td>\n        </tr>\n    </tbody>\n</table>\n'})}),"\n",(0,i.jsx)(e.h2,{id:"default",children:"Default"}),"\n",(0,i.jsx)(s.Hl,{of:h,layout:"padded"}),"\n",(0,i.jsx)(e.h2,{id:"functionaliteit",children:"Functionaliteit"}),"\n",(0,i.jsxs)(e.p,{children:["Standaard is er geen sorteer, filtering of paginatie functionaliteit beschikbaar voor de ",(0,i.jsx)(e.code,{children:"data-table"}),". Hiervoor is de\n",(0,i.jsx)(e.a,{href:"?path=/docs/components-rich-data-table--rich-data-table-default",children:"rich-data-table"})," beschikbaar.",(0,i.jsx)("br",{}),"\nWat dit component wel méér heeft dan die van Digitaal Vlaanderen zijn expandable/collapsible rows. Zie de specifieke\nstories hieronder.",(0,i.jsx)("br",{}),"\nDe visuele mark-up volgt standaard die van Digitaal Vlaanderen, inclusief responsiveness."]}),"\n",(0,i.jsx)(e.h2,{id:"lege-cellen",children:"Lege cellen"}),"\n",(0,i.jsxs)(e.p,{children:["Het is aan te raden om in lege cellen de waarde ",(0,i.jsx)(e.code,{children:"&nbsp;"})," te plaatsen, dit zorgt ervoor dat rijen hun hoogte behouden\nindien elke cel van een rij leeg is."]}),"\n",(0,i.jsx)(e.h2,{id:"joined-row-titles",children:"Joined row titles"}),"\n",(0,i.jsxs)(e.p,{children:["Gebruik de matrix-variant om gegevens met 2 dimensies weer te geven. Zowel de rijen als de kolommen krijgen een titel.\nDe titels zijn gescheiden van de inhoud met een vetgedrukte lijn.",(0,i.jsx)("br",{}),"\nOm dit toe passen maak je zelf gebruik van native html-attribuut ",(0,i.jsx)(e.code,{children:"rowspan"}),"."]}),"\n",(0,i.jsx)(s.Hl,{of:b,layout:"padded"}),"\n",(0,i.jsx)(e.h2,{id:"expandable",children:"Expandable"}),"\n",(0,i.jsxs)(e.p,{children:['Om een rijen te laten uitklappen ("expanden") moet je het volgende doen:',(0,i.jsx)("br",{}),"\nAls je 2 rijen hebt, en je wil rij A altijd zichtbaar zetten en rij B verborgen tot die wordt opengeklapt:"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"maak een nieuwe rij B direct na rij A"}),"\n",(0,i.jsxs)(e.li,{children:["zet je het attribuut ",(0,i.jsx)(e.code,{children:"data-details-id"})," op de rij B"]}),"\n",(0,i.jsxs)(e.li,{children:["je kan ook meerdere rijen uitklapbaar maken, zolang je maar dezelfde ",(0,i.jsx)(e.code,{children:"data-details-id"})," hergebruikt"]}),"\n"]}),"\n",(0,i.jsxs)("details",{children:[(0,i.jsx)("summary",{children:"voorbeeld expandable row"}),(0,i.jsx)(s.kL,{language:"html",dark:!0,format:!0,code:`
              <tr id="rij-A">
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
              </tr>
              <tr data-details-id="details-row-A" id="rij-B">
                  <td>details on previous row</td>
              </tr>`})]}),"\n",(0,i.jsxs)(e.p,{children:["Dan zal er automatisch een ",(0,i.jsx)(e.code,{children:"button"})," toegevoegd worden die de gebruiker toelaat de rij B te zien wanneer op de\ndesbetreffende knop bij rij A wordt gedrukt."]}),"\n",(0,i.jsx)(s.Hl,{of:y,layout:"padded"}),"\n",(0,i.jsx)(e.h3,{id:"colspan",children:"Colspan"}),"\n",(0,i.jsxs)(e.p,{children:["We berekenen automatisch de ",(0,i.jsx)(e.code,{children:"colspan"})," van de rij die uitklapt, zodat de rij die uitklapt de volledige breedte van de tabel inneemt.\nDit doen we enkel als de rij die uitklapt een enkele cel bevat. Als de rij die uitklapt meerdere cellen bevat, moet je zelf de ",(0,i.jsx)(e.code,{children:"colspan"})," instellen."]}),"\n",(0,i.jsx)(e.h3,{id:"expandable-with-custom-toggle",children:"Expandable with custom toggle"}),"\n",(0,i.jsxs)(e.p,{children:["Je kan ook de knop die de rij open en dicht klapt zelf kiezen.",(0,i.jsx)("br",{}),"\nAls je 2 rijen hebt, en je wil rij A altijd zichtbaar zetten en rij B verborgen tot die word opengeklapt:",(0,i.jsx)("br",{}),"\nOm dit te doen, doe het volgende:",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"op de rij die meer details geeft op de voorgaande rij, moet de juiste id worden toegekend"}),"\n"]}),"\n",(0,i.jsx)(s.kL,{language:"html",format:!0,code:`
        <tr data-details-id="details-row1">
            <td>Details 1</td>
        </tr>
          `}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["op rij die meer details heeft, een cel toevoegen die:","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"with-expand-details"})," heeft als attribuut"]}),"\n",(0,i.jsxs)(e.li,{children:["een element naar keuze heeft, die ",(0,i.jsx)(e.code,{children:"toggleDetails([id])"})," gaat aanroepen met de juiste id voor de openklapbare rij\nbv.:"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.kL,{language:"html",format:!0,code:`
       <td with-expand-details>
           <button is="vl-button" onclick="table.toggleDetails('details-row-1')">click to toggle details</button>
       </td>
          `}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:(0,i.jsxs)(e.em,{children:["In dit voorbeeld vind je bij ",(0,i.jsx)(e.code,{children:"Show code"})," broncode in ",(0,i.jsx)(e.code,{children:"lit-html"}),"-syntax. Voor code voorbeelden in HTML/JavaScript\nverwijzen we naar hierboven."]})})}),"\n",(0,i.jsx)(s.Hl,{of:p,layout:"padded"}),"\n",(0,i.jsx)(e.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,i.jsx)(s.ov,{of:h}),"\n",(0,i.jsx)(e.h2,{id:"referenties",children:"Referenties"}),"\n",(0,i.jsx)(e.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,i.jsx)(e.p,{children:"We nemen de functionaliteit & styling over van het equivalente component van Digitaal Vlaanderen."}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-data-table",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Data Table"})}),"\n",(0,i.jsx)(e.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/native-elements-vl-data-table--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Data Table"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlDataTable.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Data Table"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-data-table.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - Data Table"})})]})}let m={title:"Elements/data-table",tags:["autodocs"],args:l,argTypes:r,parameters:{docs:{page:function(t={}){let{wrapper:e}=Object.assign({},(0,o.RP)(),t.components);return e?(0,i.jsx)(e,Object.assign({},t,{children:(0,i.jsx)(c,t)})):c(t)}},layout:"fullscreen",controls:{hideNoControlsWarning:!0}}},h=(0,n._7)(l,({hover:t,matrix:e,grid:a,zebra:n,uigZebra:l,collapsedM:r,collapsedS:i,collapsedXS:o})=>(0,d.qy)`
        <table
            is="vl-data-table"
            ?data-vl-hover=${t}
            ?data-vl-matrix=${e}
            ?data-vl-grid=${a}
            ?data-vl-zebra=${n}
            ?data-vl-uig-zebra=${l}
            ?data-vl-collapsed-m=${r}
            ?data-vl-collapsed-s=${i}
            ?data-vl-collapsed-xs=${o}
        >
            <caption>
                Data table
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
                <tr>
                    <td data-title="Entry Header 1">Entry line 1</td>
                    <td data-title="Entry Header 2" colspan="2">Entry line 2</td>
                    <td data-title="Entry Header 3">Entry line 3</td>
                </tr>
                <tr>
                    <td data-title="Entry Header 1">Entry line 1</td>
                    <td data-title="Entry Header 2">Entry line 2</td>
                    <td data-title="Entry Header 3">Entry line 3</td>
                    <td data-title="Entry Header 4">Entry line 4</td>
                </tr>
            </tbody>
        </table>
    `);h.storyName="vl-data-table - default";let b=(0,n._7)(l,({hover:t,matrix:e,grid:a,zebra:n,uigZebra:l,collapsedM:r,collapsedS:i,collapsedXS:o})=>(0,d.qy)`
        <table
            is="vl-data-table"
            ?data-vl-hover=${t}
            ?data-vl-matrix=${e}
            ?data-vl-grid=${a}
            ?data-vl-zebra=${n}
            ?data-vl-uig-zebra=${l}
            ?data-vl-collapsed-m=${r}
            ?data-vl-collapsed-s=${i}
            ?data-vl-collapsed-xs=${o}
        >
            <caption>
                Data table Matrix - Joined row titles
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
    `);b.storyName="vl-data-table - joined row titles";let y=(0,n._7)(l,({hover:t,matrix:e,grid:a,zebra:n,uigZebra:l,collapsedM:r,collapsedS:i,collapsedXS:o})=>(0,d.qy)`
            <table
                is="vl-data-table"
                id="vl-data-table-with-expandable-details"
                ?data-vl-hover=${t}
                ?data-vl-matrix=${e}
                ?data-vl-grid=${a}
                ?data-vl-zebra=${n}
                ?data-vl-uig-zebra=${l}
                ?data-vl-collapsed-m=${r}
                ?data-vl-collapsed-s=${i}
                ?data-vl-collapsed-xs=${o}
            >
                <caption>
                    Data table
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
                    <tr class="vl-data-table__element--disabled">
                        <td data-title="Entry Header 1">Entry line 1</td>
                        <td data-title="Entry Header 2">Entry line 2</td>
                        <td data-title="Entry Header 3">Entry line 3</td>
                        <td data-title="Entry Header 4">Entry line 4</td>
                    </tr>
                    <tr class="vl-data-table__element--disabled" data-details-id="details-row1">
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
                        <td data-title="details-title 3">Title 3: Zij die ter kaperen varen:</td>
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
        `);y.storyName="vl-data-table - expandable";let p=(0,n._7)(l,({hover:t,matrix:e,grid:a,zebra:n,uigZebra:l,collapsedM:r,collapsedS:i,collapsedXS:o})=>{let s;return customElements.whenDefined("vl-data-table").then(()=>{s=document.querySelector("#vl-data-table-with-custom-expandable-details")}),(0,d.qy)`
            <table
                is="vl-data-table"
                id="vl-data-table-with-custom-expandable-details"
                ?data-vl-hover=${t}
                ?data-vl-matrix=${e}
                ?data-vl-grid=${a}
                ?data-vl-zebra=${n}
                ?data-vl-uig-zebra=${l}
                ?data-vl-collapsed-m=${r}
                ?data-vl-collapsed-s=${i}
                ?data-vl-collapsed-xs=${o}
            >
                <caption>
                    Data table
                </caption>
                <thead>
                    <tr>
                        <th>Entry Header 1</th>
                        <th data-title="Entry Header 2" colspan="2">Entry line 2</th>
                        <th>Entry Header 3</th>
                        <th>Entry Header 4</th>
                    </tr>
                </thead>
                <tbody></tbody>
                <tbody>
                    <tr>
                        <td data-title="Entry Header 1">Entry line 1</td>
                        <td data-title="Entry Header 2">Entry line 2</td>
                        <td data-title="Entry Header 3">Entry line 3</td>
                        <td data-title="Entry Header 4">Entry line 4</td>
                        <td with-expand-details>
                            <button
                                is="vl-button"
                                @click=${()=>{s?.toggleDetails("details-row1")}}
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
        `});p.storyName="vl-data-table - expandable custom toggle details column",p.parameters={docs:{language:"html",source:{format:!0,type:"code"}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:'story(dataTableArgs, ({\n  hover,\n  matrix,\n  grid,\n  zebra,\n  uigZebra,\n  collapsedM,\n  collapsedS,\n  collapsedXS\n}) => html`\n        <table\n            is="vl-data-table"\n            ?data-vl-hover=${hover}\n            ?data-vl-matrix=${matrix}\n            ?data-vl-grid=${grid}\n            ?data-vl-zebra=${zebra}\n            ?data-vl-uig-zebra=${uigZebra}\n            ?data-vl-collapsed-m=${collapsedM}\n            ?data-vl-collapsed-s=${collapsedS}\n            ?data-vl-collapsed-xs=${collapsedXS}\n        >\n            <caption>\n                Data table\n            </caption>\n            <thead>\n                <tr>\n                    <th>Entry Header 1</th>\n                    <th>Entry Header 2</th>\n                    <th>Entry Header 3</th>\n                    <th>Entry Header 4</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td data-title="Entry Header 1">Entry line 1</td>\n                    <td data-title="Entry Header 2">Entry line 2</td>\n                    <td data-title="Entry Header 3">Entry line 3</td>\n                    <td data-title="Entry Header 4">Entry line 4</td>\n                </tr>\n                <tr>\n                    <td data-title="Entry Header 1">Entry line 1</td>\n                    <td data-title="Entry Header 2" colspan="2">Entry line 2</td>\n                    <td data-title="Entry Header 3">Entry line 3</td>\n                </tr>\n                <tr>\n                    <td data-title="Entry Header 1">Entry line 1</td>\n                    <td data-title="Entry Header 2">Entry line 2</td>\n                    <td data-title="Entry Header 3">Entry line 3</td>\n                    <td data-title="Entry Header 4">Entry line 4</td>\n                </tr>\n            </tbody>\n        </table>\n    `)',...h.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:'story(dataTableArgs, ({\n  hover,\n  matrix,\n  grid,\n  zebra,\n  uigZebra,\n  collapsedM,\n  collapsedS,\n  collapsedXS\n}) => html`\n        <table\n            is="vl-data-table"\n            ?data-vl-hover=${hover}\n            ?data-vl-matrix=${matrix}\n            ?data-vl-grid=${grid}\n            ?data-vl-zebra=${zebra}\n            ?data-vl-uig-zebra=${uigZebra}\n            ?data-vl-collapsed-m=${collapsedM}\n            ?data-vl-collapsed-s=${collapsedS}\n            ?data-vl-collapsed-xs=${collapsedXS}\n        >\n            <caption>\n                Data table Matrix - Joined row titles\n            </caption>\n            <thead>\n                <tr>\n                    <th></th>\n                    <th></th>\n                    <th></th>\n                    <th></th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <th rowspan="3" scope="rowgroup">Horizontal title 1</th>\n                    <td>Thomas H. &amp; Marie L. Farr</td>\n                    <td>110</td>\n                    <td>Didymiaceae</td>\n                </tr>\n\n                <tr>\n                    <td>Critchfield R.L.</td>\n                    <td>715</td>\n                    <td>Didymiaceae</td>\n                </tr>\n\n                <tr>\n                    <td>Rammeloo J.</td>\n                    <td>4572</td>\n                    <td>Didymiaceae</td>\n                </tr>\n                <tr>\n                    <th rowspan="3" scope="rowgroup">Horizontal title 2</th>\n                    <td>Franz Heylemans</td>\n                    <td>160</td>\n                    <td>Onagraceae</td>\n                </tr>\n\n                <tr>\n                    <td>Stam A.B.</td>\n                    <td>477</td>\n                    <td>Onagraceae</td>\n                </tr>\n\n                <tr>\n                    <td>Van Hoeck Eddy</td>\n                    <td>42</td>\n                    <td>Onagraceae</td>\n                </tr>\n            </tbody>\n        </table>\n    `)',...b.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:'story(dataTableArgs, ({\n  hover,\n  matrix,\n  grid,\n  zebra,\n  uigZebra,\n  collapsedM,\n  collapsedS,\n  collapsedXS\n}: typeof dataTableArgs) => {\n  return html`\n            <table\n                is="vl-data-table"\n                id="vl-data-table-with-expandable-details"\n                ?data-vl-hover=${hover}\n                ?data-vl-matrix=${matrix}\n                ?data-vl-grid=${grid}\n                ?data-vl-zebra=${zebra}\n                ?data-vl-uig-zebra=${uigZebra}\n                ?data-vl-collapsed-m=${collapsedM}\n                ?data-vl-collapsed-s=${collapsedS}\n                ?data-vl-collapsed-xs=${collapsedXS}\n            >\n                <caption>\n                    Data table\n                </caption>\n                <thead>\n                    <tr>\n                        <th>Entry Header 1</th>\n                        <th>Entry Header 2</th>\n                        <th>Entry Header 3</th>\n                        <th>Entry Header 4</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr class="vl-data-table__element--disabled">\n                        <td data-title="Entry Header 1">Entry line 1</td>\n                        <td data-title="Entry Header 2">Entry line 2</td>\n                        <td data-title="Entry Header 3">Entry line 3</td>\n                        <td data-title="Entry Header 4">Entry line 4</td>\n                    </tr>\n                    <tr class="vl-data-table__element--disabled" data-details-id="details-row1">\n                        <td data-title="details-title 1">Title 1: generic details</td>\n                    </tr>\n                    <tr>\n                        <td data-title="Entry Header 1">Entry line 1</td>\n                        <td data-title="Entry Header 2" colspan="2">Entry line 2</td>\n                        <td data-title="Entry Header 3">Entry line 3</td>\n                    </tr>\n                    <tr data-details-id="details-row2">\n                        <td data-title="details-title 2">Title 2: generic details</td>\n                    </tr>\n                    <tr id="multiple-cells">\n                        <td data-title="Entry Header 1">Entry line 1</td>\n                        <td data-title="Entry Header 2">Entry line 2</td>\n                        <td data-title="Entry Header 3">Entry line 3</td>\n                        <td data-title="Entry Header 4">Entry line 4</td>\n                    </tr>\n                    <tr data-details-id="details-row3">\n                        <td data-title="details-title 3">Title 3: Zij die ter kaperen varen:</td>\n                        <td>*</td>\n                        <td>*</td>\n                        <td>*</td>\n                    </tr>\n                    <tr data-details-id="details-row3">\n                        <td data-title="naam">Jan</td>\n                        <td data-title="familienaam">familienaam</td>\n                        <td data-title="telefoon">telefoon</td>\n                        <td data-title="adres">adres</td>\n                    </tr>\n                    <tr data-details-id="details-row3">\n                        <td data-title="naam">Piet</td>\n                        <td data-title="familienaam">familienaam</td>\n                        <td data-title="telefoon">telefoon</td>\n                        <td data-title="adres">adres</td>\n                    </tr>\n                    <tr data-details-id="details-row3">\n                        <td data-title="naam">Joris</td>\n                        <td data-title="familienaam">familienaam</td>\n                        <td data-title="telefoon">telefoon</td>\n                        <td data-title="adres">adres</td>\n                    </tr>\n                    <tr data-details-id="details-row3">\n                        <td data-title="naam">Korneel</td>\n                        <td data-title="familienaam">familienaam</td>\n                        <td data-title="telefoon">telefoon</td>\n                        <td data-title="adres">adres</td>\n                    </tr>\n                </tbody>\n            </table>\n        `;\n})',...y.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:'story(dataTableArgs, ({\n  hover,\n  matrix,\n  grid,\n  zebra,\n  uigZebra,\n  collapsedM,\n  collapsedS,\n  collapsedXS\n}) => {\n  let table: (VlDataTable & Element) | null;\n  customElements.whenDefined(\'vl-data-table\').then(() => {\n    table = document.querySelector<VlDataTable & Element>(\'#vl-data-table-with-custom-expandable-details\');\n  });\n  return html`\n            <table\n                is="vl-data-table"\n                id="vl-data-table-with-custom-expandable-details"\n                ?data-vl-hover=${hover}\n                ?data-vl-matrix=${matrix}\n                ?data-vl-grid=${grid}\n                ?data-vl-zebra=${zebra}\n                ?data-vl-uig-zebra=${uigZebra}\n                ?data-vl-collapsed-m=${collapsedM}\n                ?data-vl-collapsed-s=${collapsedS}\n                ?data-vl-collapsed-xs=${collapsedXS}\n            >\n                <caption>\n                    Data table\n                </caption>\n                <thead>\n                    <tr>\n                        <th>Entry Header 1</th>\n                        <th data-title="Entry Header 2" colspan="2">Entry line 2</th>\n                        <th>Entry Header 3</th>\n                        <th>Entry Header 4</th>\n                    </tr>\n                </thead>\n                <tbody></tbody>\n                <tbody>\n                    <tr>\n                        <td data-title="Entry Header 1">Entry line 1</td>\n                        <td data-title="Entry Header 2">Entry line 2</td>\n                        <td data-title="Entry Header 3">Entry line 3</td>\n                        <td data-title="Entry Header 4">Entry line 4</td>\n                        <td with-expand-details>\n                            <button\n                                is="vl-button"\n                                @click=${() => {\n    table?.toggleDetails(\'details-row1\');\n  }}\n                            >\n                                click to toggle details\n                            </button>\n                        </td>\n                    </tr>\n                    <tr data-details-id="details-row1">\n                        <td data-title="details-title 1" colspan="5">\n                            <div>\n                                <ul>\n                                    <li>Extra Details 1</li>\n                                    <li>Extra Details 1</li>\n                                    <li>Extra Details 1</li>\n                                </ul>\n                            </div>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td data-title="Entry Header 1">Entry line 1</td>\n                        <td data-title="Entry Header 2" colspan="2">Entry line 2</td>\n                        <td data-title="Entry Header 3">Entry line 3</td>\n                    </tr>\n                    <tr data-details-id="details-row2">\n                        <td data-title="details-title 2" colspan="1">\n                            <div>\n                                <ul>\n                                    <li>Extra Details 2</li>\n                                    <li>Extra Details 2</li>\n                                    <li>Extra Details 2</li>\n                                </ul>\n                            </div>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td data-title="Entry Header 1">Entry line 1</td>\n                        <td data-title="Entry Header 2">Entry line 2</td>\n                        <td data-title="Entry Header 3">Entry line 3</td>\n                        <td data-title="Entry Header 4">Entry line 4</td>\n                    </tr>\n                    <tr data-details-id="details-row3">\n                        <td data-title="naam">Jan</td>\n                        <td data-title="familienaam">familienaam</td>\n                        <td data-title="telefoon">telefoon</td>\n                        <td data-title="adres">adres</td>\n                    </tr>\n                    <tr data-details-id="details-row3">\n                        <td data-title="naam">Piet</td>\n                        <td data-title="familienaam">familienaam</td>\n                        <td data-title="telefoon">telefoon</td>\n                        <td data-title="adres">adres</td>\n                    </tr>\n                    <tr data-details-id="details-row3">\n                        <td data-title="naam">Joris</td>\n                        <td data-title="familienaam">familienaam</td>\n                        <td data-title="telefoon">telefoon</td>\n                        <td data-title="adres">adres</td>\n                    </tr>\n                    <tr data-details-id="details-row3">\n                        <td data-title="naam">Korneel</td>\n                        <td data-title="familienaam">familienaam</td>\n                        <td data-title="telefoon">telefoon</td>\n                        <td data-title="adres">adres</td>\n                    </tr>\n                </tbody>\n            </table>\n        `;\n})',...p.parameters?.docs?.source}}};let u=["DataTableDefault","DataTableJoinedRowTitles","DataTableExpandable","DataTableExpandableCustomToggleDetailsColumn"]},"../../node_modules/memoizerific sync recursive":t=>{function e(t){var e=Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=()=>[],e.resolve=e,e.id="../../node_modules/memoizerific sync recursive",t.exports=e},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(t,e,a)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d=a("../../node_modules/react/index.js"),n=Symbol.for("react.element"),l=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function s(t,e,a){var d,l={},s=null,c=null;for(d in void 0!==a&&(s=""+a),void 0!==e.key&&(s=""+e.key),void 0!==e.ref&&(c=e.ref),e)r.call(e,d)&&!o.hasOwnProperty(d)&&(l[d]=e[d]);if(t&&t.defaultProps)for(d in e=t.defaultProps)void 0===l[d]&&(l[d]=e[d]);return{$$typeof:n,type:t,key:s,ref:c,props:l,_owner:i.current}}e.Fragment=l,e.jsx=s,e.jsxs=s},"../../node_modules/react/jsx-runtime.js":(t,e,a)=>{"use strict";t.exports=a("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);