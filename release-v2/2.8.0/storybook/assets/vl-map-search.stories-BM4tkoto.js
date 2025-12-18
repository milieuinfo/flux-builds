import{K as c,L as l,H as x,I as b,u,j as a,C as m,bd as v,s as y,x as f}from"./iframe-BQb9mjVp.js";import"./vl-map-base-layer-BdAzFV8b.js";import"./vl-map-base-layer-grb-gray-DZZs_CZf.js";import"./vl-map-search-OAyLIhbe.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-checkbox.component-DXi6WwO0.js";import"./vl-datepicker.component-CVLjVc3J.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-input-field-masked.component-qycCnsrx.js";import"./vl-radio.component-HF0vGzer.js";import"./vl-radio-group.component-D0wYPqVJ.js";import"./vl-select.component-BypI6XzH.js";import"./vl-select-rich.component-Cx8fXtGT.js";import"./vl-textarea.component-DzPq4Vrh.js";import"./vl-textarea-rich.component-D2wM1BUa.js";import"./vl-upload.component-CiF30Vri.js";import"./vl-upload-progress.component-DYyNM58H.js";import"./vl-select-location-Bq5mOnKR.js";const t={...b,placeholder:"Zoeken op kaart",searchEmptyText:"Geen adres gevonden",searchNoResultsText:"Geen adres gevonden",searchPlaceholder:"Zoeken op adres of coördinaat",withOffset:!1},T={...x,placeholder:{name:"placeholder",description:"De placeholder van het select element.<br>Dit attribuut is niet reactief.",table:{type:{summary:l.STRING},category:c.ATTRIBUTES,defaultValue:{summary:t.placeholder}}},searchEmptyText:{name:"search-empty-text",description:"De tekst wanneer er geen zoekresultaten zijn.<br>Dit attribuut is niet reactief.",table:{type:{summary:l.STRING},category:c.ATTRIBUTES,defaultValue:{summary:t.searchEmptyText}}},searchNoResultsText:{name:"search-no-results-text",description:"De tekst wanneer er geen zoekresultaten zijn.<br>Dit attribuut is niet reactief.",table:{type:{summary:l.STRING},category:c.ATTRIBUTES,defaultValue:{summary:t.searchNoResultsText}}},searchPlaceholder:{name:"search-placeholder",description:"De placeholder van het input element.<br>Dit attribuut is niet reactief.",table:{type:{summary:l.STRING},category:c.ATTRIBUTES,defaultValue:{summary:t.searchPlaceholder}}},withOffset:{name:"with-offset",description:"Beeldt de search-bar af met een linkse offset.<br>Wordt gebruikt als er een map-side-sheet is aan de linkerkant zodat de toggle van de map-side-sheet niet afgebeeld wordt over de search-bar.",table:{type:{summary:l.BOOLEAN},category:c.ATTRIBUTES,defaultValue:{summary:String(t.withOffset)}}}};function h(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...u(),...r.components},{FluxComponentMetaData:n}=e;return n||S("FluxComponentMetaData"),a.jsxs(a.Fragment,{children:[a.jsx(e.h1,{id:"map-search",children:"Map Search"}),`
`,a.jsx(n,{id:"map-components-search"}),`
`,a.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,a.jsxs(e.p,{children:["Gebruik de ",a.jsx(e.code,{children:"map-search"})," component om een zoekbalk toe te voegen aan de map waarmee gebruikers kunnen zoeken op adres.",a.jsx("br",{}),`
Deze component maakt gebruik van de `,a.jsx(e.a,{href:"/docs/map-select-location--select-location-default",children:"select-location"}),` component en
van de `,a.jsx(e.a,{href:"/docs/components-block-search--search-default",children:"search"})," component."]}),`
`,a.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-js",children:`import { VlMapSearch } from '@domg-wc/map';
`})}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-html",children:`<vl-map-search></vl-map-search>
`})}),`
`,a.jsx(m,{of:s}),`
`,a.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,a.jsx(v,{of:s}),`
`,a.jsx(e.h2,{id:"varianten",children:"Varianten"}),`
`,a.jsx(e.h3,{id:"buiten-de-map",children:"Buiten de map"}),`
`,a.jsx(m,{of:o}),`
`,a.jsx(e.h2,{id:"referenties",children:"Referenties"}),`
`,a.jsx(e.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,a.jsx(e.p,{children:a.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-map-vl-map-search--default",rel:"nofollow",children:"Legacy Storybook - Map Search"})}),`
`,a.jsx(e.p,{children:a.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlMapSearch.html",rel:"nofollow",children:"Legacy Documentatie - Map Search"})}),`
`,a.jsx(e.p,{children:a.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-search.html",rel:"nofollow",children:"Legacy Demo - Map Search"})})]})}function j(r={}){const{wrapper:e}={...u(),...r.components};return e?a.jsx(e,{...r,children:a.jsx(h,{...r})}):h(r)}function S(r,e){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}var i=Object.freeze,w=Object.defineProperty,k=(r,e)=>i(w(r,"raw",{value:i(r.slice())})),d;const q={id:"map-search",title:"map/search",tags:["autodocs"],args:t,argTypes:T,parameters:{docs:{page:j}}},s=y(t,({placeholder:r,searchEmptyText:e,searchNoResultsText:n,searchPlaceholder:p,withOffset:g})=>f`
            <vl-map lambert2008>
                <vl-map-search
                    placeholder=${r}
                    search-empty-text=${e}
                    search-no-results-text=${n}
                    search-placeholder=${p}
                    ?with-offset=${g}
                ></vl-map-search>
                <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            </vl-map>
        `);s.storyName="vl-map-search - default";const o=y(t,({placeholder:r,searchEmptyText:e,searchNoResultsText:n,searchPlaceholder:p})=>f(d||(d=k([`
        <vl-map-search
            placeholder=`,`
            search-empty-text=`,`
            search-no-results-text=`,`
            search-placeholder=`,`
        ></vl-map-search>
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        </vl-map>
        <script>
            document.querySelector('vl-map-search').bindMap(document.querySelector('vl-map'));
        <\/script>
    `])),r,e,n,p));o.storyName="vl-map-search - outside map";s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story(mapSearchArgs, ({
  placeholder,
  searchEmptyText,
  searchNoResultsText,
  searchPlaceholder,
  withOffset
}) => html\`
            <vl-map lambert2008>
                <vl-map-search
                    placeholder=\${placeholder}
                    search-empty-text=\${searchEmptyText}
                    search-no-results-text=\${searchNoResultsText}
                    search-placeholder=\${searchPlaceholder}
                    ?with-offset=\${withOffset}
                ></vl-map-search>
                <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            </vl-map>
        \`)`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`story(mapSearchArgs, ({
  placeholder,
  searchEmptyText,
  searchNoResultsText,
  searchPlaceholder
}) => html\`
        <vl-map-search
            placeholder=\${placeholder}
            search-empty-text=\${searchEmptyText}
            search-no-results-text=\${searchNoResultsText}
            search-placeholder=\${searchPlaceholder}
        ></vl-map-search>
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        </vl-map>
        <script>
            document.querySelector('vl-map-search').bindMap(document.querySelector('vl-map'));
        <\/script>
    \`)`,...o.parameters?.docs?.source}}};const F=["MapSearchDefault","MapSearchOutsideMap"];export{s as MapSearchDefault,o as MapSearchOutsideMap,F as __namedExportsOrder,q as default};
