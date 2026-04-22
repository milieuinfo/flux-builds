import{Y as u,Z as h,U as p,W as v,u as i,j as e,C as n,bb as m,x as c,r as b,c2 as x,c3 as g,c4 as V}from"./iframe-aAtdr__L.js";import"./preload-helper-D9Z9MdNV.js";const d={...v,defaultSlot:""},j={...p,defaultSlot:{name:"[default]",description:"De inhoud van het zoekresultaat",table:{type:{summary:h.HTML},category:u.SLOTS,defaultValue:{summary:d.defaultSlot}}}};function o(a){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...a.components},{FluxComponentMetaData:s}=r;return s||f("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"search-result",children:"Search Result"}),`
`,e.jsx(s,{id:"components-block-search-result"}),`
`,e.jsx(r.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(r.p,{children:["Gebruik de ",e.jsx(r.code,{children:"search-result"})," component om een zoekresultaat weer te geven.",e.jsx("br",{})]}),`
`,e.jsx(r.p,{children:"Volgende sub-componenten zijn beschikbaar om het zoekresultaat op te bouwen:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["VlSearchResultProperties ",e.jsx(r.code,{children:"[vl-search-result-properties]"})]}),`
`,e.jsxs(r.li,{children:["VlSearchResultText ",e.jsx(r.code,{children:"[vl-search-result-text]"})]}),`
`,e.jsxs(r.li,{children:["VlSearchResultTitle ",e.jsx(r.code,{children:"[vl-search-result-title]"})]}),`
`]}),`
`,e.jsx(r.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-js",children:`import { VlSearchResultComponent } from '@domg-wc/components/block';
`})}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<vl-search-result></vl-search-result>
`})}),`
`,e.jsx(n,{of:t}),`
`,e.jsx(r.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(m,{of:t}),`
`,e.jsx(r.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(r.h3,{id:"lijst",children:"Lijst"}),`
`,e.jsxs(r.p,{children:[`Om een lijst van zoekresultaten te tonen kan je ze groeperen met de
`,e.jsx(r.a,{href:"/docs/styles-layout-group--documentatie",children:"Group"})," layout."]}),`
`,e.jsx(n,{of:l}),`
`,e.jsx(r.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(r.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(r.p,{children:e.jsx(r.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-search-results",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Search Results"})})]})}function k(a={}){const{wrapper:r}={...i(),...a.components};return r?e.jsx(r,{...a,children:e.jsx(o,{...a})}):o(a)}function f(a,r){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}const y={id:"components-block-search-result",title:"Components - Block/search-result",tags:["autodocs"],args:d,argTypes:j,parameters:{docs:{page:k}}};b([x,g,V]);const t=()=>c`
    <vl-search-result>
        <vl-search-result-title>
            <a href="#">Vlaanderenkiest.be</a>
        </vl-search-result-title>
        <vl-search-result-text>
            <time>Maandag 22 oktober 2018</time>
        </vl-search-result-text>
        <vl-search-result-properties>
            <label>Vlaanderenkiest.be</label>
            <data>Verkiezingsresultaten op Vlaanderenkiest.be...</data>
            <label>Vlaanderen intern</label>
            <data>Werkt u bij de Vlaamse overheid...</data>
        </vl-search-result-properties>
    </vl-search-result>
`;t.storyName="vl-search-result - default";const l=()=>c`
    <div class="vl-group vl-group--column vl-group--stretch-children vl-group--no-gap">
        <vl-search-result>
            <vl-search-result-title>
                <a href="#">Vlaanderenkiest.be</a>
            </vl-search-result-title>
            <vl-search-result-text>
                <time>Maandag 22 oktober 2018</time>
            </vl-search-result-text>
            <vl-search-result-properties>
                <label>Vlaanderenkiest.be</label>
                <data>Verkiezingsresultaten op Vlaanderenkiest.be...</data>
                <label>Vlaanderen intern</label>
                <data>Werkt u bij de Vlaamse overheid...</data>
            </vl-search-result-properties>
        </vl-search-result>
        <vl-search-result>
            <vl-search-result-title>
                <a href="#">Vlaanderenkiest.be</a>
            </vl-search-result-title>
            <vl-search-result-text>
                <time>Maandag 22 oktober 2018</time>
            </vl-search-result-text>
            <vl-search-result-properties>
                <label>Vlaanderenkiest.be</label>
                <data>Verkiezingsresultaten op Vlaanderenkiest.be...</data>
                <label>Vlaanderen intern</label>
                <data>Werkt u bij de Vlaamse overheid...</data>
            </vl-search-result-properties>
        </vl-search-result>
    </div>
`;l.storyName="vl-search-result - group";t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => html\`
    <vl-search-result>
        <vl-search-result-title>
            <a href="#">Vlaanderenkiest.be</a>
        </vl-search-result-title>
        <vl-search-result-text>
            <time>Maandag 22 oktober 2018</time>
        </vl-search-result-text>
        <vl-search-result-properties>
            <label>Vlaanderenkiest.be</label>
            <data>Verkiezingsresultaten op Vlaanderenkiest.be...</data>
            <label>Vlaanderen intern</label>
            <data>Werkt u bij de Vlaamse overheid...</data>
        </vl-search-result-properties>
    </vl-search-result>
\``,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => html\`
    <div class="vl-group vl-group--column vl-group--stretch-children vl-group--no-gap">
        <vl-search-result>
            <vl-search-result-title>
                <a href="#">Vlaanderenkiest.be</a>
            </vl-search-result-title>
            <vl-search-result-text>
                <time>Maandag 22 oktober 2018</time>
            </vl-search-result-text>
            <vl-search-result-properties>
                <label>Vlaanderenkiest.be</label>
                <data>Verkiezingsresultaten op Vlaanderenkiest.be...</data>
                <label>Vlaanderen intern</label>
                <data>Werkt u bij de Vlaamse overheid...</data>
            </vl-search-result-properties>
        </vl-search-result>
        <vl-search-result>
            <vl-search-result-title>
                <a href="#">Vlaanderenkiest.be</a>
            </vl-search-result-title>
            <vl-search-result-text>
                <time>Maandag 22 oktober 2018</time>
            </vl-search-result-text>
            <vl-search-result-properties>
                <label>Vlaanderenkiest.be</label>
                <data>Verkiezingsresultaten op Vlaanderenkiest.be...</data>
                <label>Vlaanderen intern</label>
                <data>Werkt u bij de Vlaamse overheid...</data>
            </vl-search-result-properties>
        </vl-search-result>
    </div>
\``,...l.parameters?.docs?.source}}};const C=["SearchResultDefault","SearchResultGroup"];export{t as SearchResultDefault,l as SearchResultGroup,C as __namedExportsOrder,y as default};
