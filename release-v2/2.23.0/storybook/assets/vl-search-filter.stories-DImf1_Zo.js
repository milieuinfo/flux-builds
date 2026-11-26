import{C as i,T as n,a as f,d as h,s as g}from"./stories.helper-DYHi_5m6.js";import{u as p,j as e,C as k,b4 as y,cn as j,b as x,r as T,V as S,c as F,e as C,co as z,P as M}from"./iframe-Cv28D2NX.js";import{V as w}from"./vl-select.component-DAztbrd3.js";import"./preload-helper-PPVm8Dsz.js";function c(t){const l={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...p(),...t.components},{FluxAlert:s,FluxComponentMetaData:d}=l;return s||m("FluxAlert"),d||m("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(l.h1,{id:"search-filter",children:"Search Filter"}),`
`,e.jsx(d,{id:"components-block-search-filter"}),`
`,e.jsx(s,{type:"info",children:`
  In de v2 versie van deze component gebruik je hem via de custom-tag, de interne implementatie is voor de rest
  gelijk gebleven aan deze van de v1 versie. In de toekomst zal deze component grondig herwerkt worden; in de context
  van een herwerking van de vl-table.
`}),`
`,e.jsx(l.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(l.p,{children:["Gebruik de ",e.jsx(l.code,{children:"search-filter"})," component om een zoek filter te tonen op een pagina."]}),`
`,e.jsx(l.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(l.pre,{children:e.jsx(l.code,{className:"language-js",children:`import { VlSearchFilterComponent } from '@domg-wc/components/block';
`})}),`
`,e.jsx(l.pre,{children:e.jsx(l.code,{className:"language-html",children:`<vl-search-filter></vl-search-filter>
`})}),`
`,e.jsx(k,{of:o}),`
`,e.jsx(l.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(y,{of:o}),`
`,e.jsx(l.h2,{id:"toegankelijkheid",children:"Toegankelijkheid"}),`
`,e.jsx(l.h3,{id:"gedrag",children:"Gedrag"}),`
`,e.jsxs(l.p,{children:["Op een klein scherm (",e.jsx(l.code,{children:"mobile-modal"}),") toont de zoekfilter zich over het volledige scherm. Met ",e.jsx(l.code,{children:"mobile-modal-closable"}),`
staat naast de titel een knop "Filter sluiten"; die verbergt de zoekfilter en vuurt `,e.jsx(l.code,{children:"vl-close"}),` af. De focus staat dan
nog op een verborgen knop: zet bij `,e.jsx(l.code,{children:"vl-close"}),` de focus terug op de knop die de filter opende. In een
`,e.jsx(l.code,{children:"vl-rich-data"}),` hoef je daar niets voor te doen: die zet het attribuut zelf, maakt van de filter een modale dialoog en
zet de focus na het sluiten terug op de filterknop (zie "Toegankelijkheid" bij
`,e.jsx(l.a,{href:"?path=/docs/components-block-rich-data--documentatie#toegankelijkheid",children:"Rich Data"}),")."]})]})}function A(t={}){const{wrapper:l}={...p(),...t.components};return l?e.jsx(l,{...t,children:e.jsx(c,{...t})}):c(t)}function m(t,l){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const{action:V}=__STORYBOOK_MODULE_ACTIONS__,a={...f,...j,onVlClose:V("vl-close")},E={...h,filterTitle:{name:"filter-title",description:"De titel van deze zoekfilter.",table:{type:{summary:n.STRING},category:i.ATTRIBUTES,defaultValue:{summary:a.filterTitle}}},alt:{name:"alt",description:"Alternatieve (transparante) achtergrond.",table:{type:{summary:n.BOOLEAN},category:i.ATTRIBUTES,defaultValue:{summary:String(a.alt)}}},mobileModal:{name:"mobile-modal",description:"Activeert geoptimaliseerde weergave voor mobiele apparaten.<br>Dit wordt ook geactiveerd als de viewport kleiner is dan 768px.",table:{type:{summary:n.STRING},category:i.ATTRIBUTES,defaultValue:{summary:String(a.mobileModal)}}},mobileModalTitle:{name:"mobile-modal-title",description:"Stelt de titel in van deze zoekfilter op mobiele apparaten.<br> Als die niet gedeclareerd is, wordt de waarde van filter-title gebruikt.",table:{type:{summary:n.STRING},category:i.ATTRIBUTES,defaultValue:{summary:a.mobileModalTitle}}},mobileModalClosable:{name:"mobile-modal-closable",description:'Toont in de mobiele weergave een knop "Filter sluiten" naast de titel. Die verbergt de zoekfilter en vuurt `vl-close` af.<br>vl-rich-data zet dit attribuut zelf.',table:{type:{summary:n.BOOLEAN},category:i.ATTRIBUTES,defaultValue:{summary:String(a.mobileModalClosable)}}},onVlClose:{name:"vl-close",description:"Event dat afgevuurd wordt wanneer de sluitknop van de mobiele weergave de zoekfilter verbergt.<br>Zet bij `vl-close` de focus terug op de knop die de filter opende. vl-rich-data doet dit zelf.",table:{category:i.EVENTS}}},R={id:"components-block-search-filter",title:"Components - Block/search-filter",tags:["autodocs"],args:a,argTypes:E,parameters:{docs:{page:A}}};T([S,F,w,C,z,M]);const v=g(a,({filterTitle:t,alt:l,mobileModal:s,mobileModalTitle:d,mobileModalClosable:u,onVlClose:b})=>x`
        <vl-search-filter
            filter-title=${t}
            ?alt=${l}
            ?mobile-modal=${s}
            mobile-modal-title=${d}
            ?mobile-modal-closable=${u}
            @vl-close=${b}
        >
            <form>
                <div>
                    <section>
                        <vl-title type="h2" alt no-space-bottom="">Doorzoek projecten</vl-title>
                        <div>
                            <vl-form-label for="filterOpId" label="Project id" light></vl-form-label>
                            <vl-input-field id="filterOpId" type="text" name="id" block></vl-input-field>
                        </div>
                        <div>
                            <vl-form-label for="filterOpNaamProject" label="Project naam" light></vl-form-label>
                            <vl-input-field
                                type="text"
                                id="filterOpNaamProject"
                                name="name"
                                block
                                autocomplete="given-name"
                            ></vl-input-field>
                        </div>
                        <div>
                            <vl-form-label for="filterOpNaamManager" label="Manager familienaam" light></vl-form-label>
                            <vl-input-field
                                type="text"
                                id="filterOpNaamManager"
                                name="name"
                                block
                                autocomplete="family-name"
                            ></vl-input-field>
                        </div>
                    </section>
                    <section>
                        <vl-title type="h2" alt no-space-bottom="">Locatie</vl-title>
                        <div>
                            <vl-form-label for="vl-select-city" label="Stad" light></vl-form-label>
                            <vl-select
                                name="vl-select-city"
                                deletable
                                block
                                autocomplete="address-level2"
                                placeholder="Kies een stad"
                                .options=${[{label:"Kies een stad",value:""},{label:"Brussel",value:"brussel"},{label:"Gent",value:"gent"}]}
                            >
                            </vl-select>
                        </div>
                        <div>
                            <vl-form-label for="vl-select-country" label="Land" light></vl-form-label>
                            <vl-select
                                name="vl-select-country"
                                deletable
                                block
                                autocomplete="address-level2"
                                placeholder="Kies een land"
                                .options=${[{label:"Kies een land",value:""},{label:"België",value:"België"},{label:"Frankrijk",value:"Frankrijk"},{label:"Nederland",value:"Nederland"}]}
                            >
                            </vl-select>
                        </div>
                    </section>
                </div>
                <footer>
                    <div class="vl-group vl-group--wrap">
                        <vl-button type="submit">Zoeken</vl-button>
                        <vl-button type="reset" secondary>Reset</vl-button>
                    </div>
                </footer>
            </form>
        </vl-search-filter>
    `),o=v.bind({});o.storyName="vl-search-filter - default";const r=v.bind({});r.storyName="vl-search-filter - mobile";r.args={mobileModal:!0,mobileModalTitle:"Mobile title"};r.parameters={layout:"fullscreen",viewport:{defaultViewport:"mobile1"}};const B=["SearchFilterDefault","SearchFilterMobile"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"searchFilterTemplate.bind({}) as any",...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"searchFilterTemplate.bind({}) as any",...r.parameters?.docs?.source}}};export{o as SearchFilterDefault,r as SearchFilterMobile,B as __namedExportsOrder,R as default};
