import{u as p,j as e,C as u,b8 as f,c2 as b,X as h,Z as s,_ as d,W as g,s as y,x,r as T,V as j,b as k,d as S,c3 as F,Q as M}from"./iframe-BAEsER5t.js";import{V as C}from"./vl-select.component-C03IO6jd.js";import"./preload-helper-D9Z9MdNV.js";function c(t){const l={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...p(),...t.components},{FluxAlert:i,FluxComponentMetaData:n}=l;return i||m("FluxAlert"),n||m("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(l.h1,{id:"search-filter",children:"Search Filter"}),`
`,e.jsx(n,{id:"components-block-search-filter"}),`
`,e.jsx(i,{type:"info",children:`
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
`,e.jsx(u,{of:a}),`
`,e.jsx(l.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(f,{of:a})]})}function A(t={}){const{wrapper:l}={...p(),...t.components};return l?e.jsx(l,{...t,children:e.jsx(c,{...t})}):c(t)}function m(t,l){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const o={...h,...b},w={...g,filterTitle:{name:"filter-title",description:"De titel van deze zoekfilter.",table:{type:{summary:d.STRING},category:s.ATTRIBUTES,defaultValue:{summary:o.filterTitle}}},alt:{name:"alt",description:"Alternatieve (transparante) achtergrond.",table:{type:{summary:d.BOOLEAN},category:s.ATTRIBUTES,defaultValue:{summary:String(o.alt)}}},mobileModal:{name:"mobile-modal",description:"Activeert geoptimaliseerde weergave voor mobiele apparaten.<br>Dit wordt ook geactiveerd als de viewport kleiner is dan 768px.",table:{type:{summary:d.STRING},category:s.ATTRIBUTES,defaultValue:{summary:String(o.mobileModal)}}},mobileModalTitle:{name:"mobile-modal-title",description:"Stelt de titel in van deze zoekfilter op mobiele apparaten.<br> Als die niet gedeclareerd is, wordt de waarde van filter-title gebruikt.",table:{type:{summary:d.STRING},category:s.ATTRIBUTES,defaultValue:{summary:o.mobileModalTitle}}}},D={id:"components-block-search-filter",title:"Components - Block/search-filter",tags:["autodocs"],args:o,argTypes:w,parameters:{docs:{page:A}}};T([j,k,C,S,F,M]);const v=y(o,({filterTitle:t,alt:l,mobileModal:i,mobileModalTitle:n})=>x`
        <vl-search-filter
            filter-title=${t}
            ?alt=${l}
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
                    <div class="vl-group vl-group--wrap">
                        <vl-button type="submit">Zoeken</vl-button>
                        <vl-button type="reset" secondary>Reset</vl-button>
                    </div>
                </footer>
            </form>
        </vl-search-filter>
    `),a=v.bind({});a.storyName="vl-search-filter - default";const r=v.bind({});r.storyName="vl-search-filter - mobile";r.args={mobileModal:!0,mobileModalTitle:"Mobile title"};r.parameters={layout:"fullscreen",viewport:{defaultViewport:"mobile1"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"searchFilterTemplate.bind({}) as any",...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"searchFilterTemplate.bind({}) as any",...r.parameters?.docs?.source}}};const E=["SearchFilterDefault","SearchFilterMobile"];export{a as SearchFilterDefault,r as SearchFilterMobile,E as __namedExportsOrder,D as default};
