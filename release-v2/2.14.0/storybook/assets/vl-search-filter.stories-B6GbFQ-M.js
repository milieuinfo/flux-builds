import{u as p,j as e,C as u,bc as f,c3 as b,X as h,Z as s,_ as c,W as g,s as y,x,r as j,V as T,b as k,d as S,c4 as F,Q as M}from"./iframe-D9dm7PbY.js";import{V as C}from"./vl-select.component-CVn7Sb7E.js";import"./preload-helper-D9Z9MdNV.js";function d(l){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...p(),...l.components},{FluxAlert:i,FluxComponentMetaData:n}=t;return i||m("FluxAlert"),n||m("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"search-filter",children:"Search Filter"}),`
`,e.jsx(n,{id:"components-block-search-filter"}),`
`,e.jsx(i,{type:"info",children:`
  In de v2 versie van deze component gebruik je hem via de custom-tag, de interne implementatie is voor de rest
  gelijk gebleven aan deze van de v1 versie. In de toekomst zal deze component grondig herwerkt worden; in de context
  van een herwerking van de vl-table.
`}),`
`,e.jsx(t.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(t.p,{children:["Gebruik de ",e.jsx(t.code,{children:"search-filter"})," component om een zoek filter te tonen op een pagina."]}),`
`,e.jsx(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import { VlSearchFilterComponent } from '@domg-wc/components/block';
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<vl-search-filter></vl-search-filter>
`})}),`
`,e.jsx(u,{of:a}),`
`,e.jsx(t.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(f,{of:a}),`
`,e.jsx(t.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-search-filter",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Search Filter"})})]})}function w(l={}){const{wrapper:t}={...p(),...l.components};return t?e.jsx(t,{...l,children:e.jsx(d,{...l})}):d(l)}function m(l,t){throw new Error("Expected component `"+l+"` to be defined: you likely forgot to import, pass, or provide it.")}const o={...h,...b},A={...g,filterTitle:{name:"filter-title",description:"De titel van deze zoekfilter.",table:{type:{summary:c.STRING},category:s.ATTRIBUTES,defaultValue:{summary:o.filterTitle}}},alt:{name:"alt",description:"Alternatieve (transparante) achtergrond.",table:{type:{summary:c.BOOLEAN},category:s.ATTRIBUTES,defaultValue:{summary:String(o.alt)}}},mobileModal:{name:"mobile-modal",description:"Activeert geoptimaliseerde weergave voor mobiele apparaten.<br>Dit wordt ook geactiveerd als de viewport kleiner is dan 768px.",table:{type:{summary:c.STRING},category:s.ATTRIBUTES,defaultValue:{summary:String(o.mobileModal)}}},mobileModalTitle:{name:"mobile-modal-title",description:"Stelt de titel in van deze zoekfilter op mobiele apparaten.<br> Als die niet gedeclareerd is, wordt de waarde van filter-title gebruikt.",table:{type:{summary:c.STRING},category:s.ATTRIBUTES,defaultValue:{summary:o.mobileModalTitle}}}},I={id:"components-block-search-filter",title:"Components - Block/search-filter",tags:["autodocs"],args:o,argTypes:A,parameters:{docs:{page:w}}};j([T,k,C,S,F,M]);const v=y(o,({filterTitle:l,alt:t,mobileModal:i,mobileModalTitle:n})=>x`
        <vl-search-filter
            filter-title=${l}
            ?alt=${t}
            ?mobile-modal=${i}
            mobile-modal-title=${n}
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
                    <vl-button type="submit">Zoeken</vl-button>
                    <vl-button type="reset" secondary>Reset</vl-button>
                </footer>
            </form>
        </vl-search-filter>
    `),a=v.bind({});a.storyName="vl-search-filter - default";const r=v.bind({});r.storyName="vl-search-filter - mobile";r.args={mobileModal:!0,mobileModalTitle:"Mobile title"};r.parameters={layout:"fullscreen",viewport:{defaultViewport:"mobile1"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"searchFilterTemplate.bind({}) as any",...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"searchFilterTemplate.bind({}) as any",...r.parameters?.docs?.source}}};const E=["SearchFilterDefault","SearchFilterMobile"];export{a as SearchFilterDefault,r as SearchFilterMobile,E as __namedExportsOrder,I as default};
