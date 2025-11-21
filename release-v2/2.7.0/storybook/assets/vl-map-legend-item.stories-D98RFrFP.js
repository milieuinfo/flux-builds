import"./vl-map-base-layer-mxB9Jgb1.js";import"./vl-map-base-layer-grb-gray-Di19ej0R.js";import"./vl-map-layer-circle-style-BYHuRewh.js";import"./vl-map-features-layer-B_ClZkbk.js";import"./vl-map-legend-BL1i3oFb.js";import{K as d,L as y,H as x,I as f,u,j as e,C as p,bd as h,s as S,x as I}from"./iframe-BRJWU34U.js";import{o as g}from"./unsafe-html-HT10cyGK.js";import"./vl-map-vector-layer-BFohRpWd.js";import"./preload-helper-D9Z9MdNV.js";const i={...f,layer:"",iconText:"",iconSlot:"",labelSlot:""},z={...x,layer:{name:"layer",description:"Laagnaam van de laag waarvoor het custom lengende item van toepassing is.<br>Indien geen icon en label slot toegevoegd is zal het default icon en label van deze laag gebruikt worden.",table:{type:{summary:y.STRING},category:d.ATTRIBUTES,defaultValue:{summary:i.layer}}},iconText:{name:"icon-text",description:"Text die in het icon wordt toegevoegd. Niet van toepassing bij het custom toevoegen van icon en label via de slots.",table:{type:{summary:y.STRING},category:d.ATTRIBUTES,defaultValue:{summary:i.layer}}},iconSlot:{name:"icon",description:"Element dat als icon van het legend item getoond wordt.",table:{type:{summary:y.HTML},category:d.SLOTS,defaultValue:{summary:i.iconSlot}}},labelSlot:{name:"label",description:"Element dat als label van het legend item getoond wordt.",table:{type:{summary:y.HTML},category:d.SLOTS,defaultValue:{summary:i.labelSlot}}}};function b(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...u(),...r.components},{FluxMetaData:c}=t;return c||L("FluxMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"map-legend-item",children:"Map Legend Item"}),`
`,e.jsx(c,{id:"map-legend-item"}),`
`,e.jsxs(t.p,{children:["Gebruik de ",e.jsx(t.code,{children:"map-legend-item"})," component om een custom legende af te beelden op de kaart."]}),`
`,e.jsxs(t.p,{children:["Indien geen icon- en labelslots meegegeven zijn zal het ",e.jsx(t.code,{children:"map-legend-item"})," de default style items van de bijhorende laag tonen."]}),`
`,e.jsx(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import { VlMapLegendItem } from '@domg-wc/map';
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<vl-map-legend-item></vl-map-legend-item>
`})}),`
`,e.jsx(p,{of:a}),`
`,e.jsx(t.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(h,{of:a}),`
`,e.jsx(t.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(t.h3,{id:"custom-icon",children:"Custom Icon"}),`
`,e.jsx(p,{of:l}),`
`,e.jsx(t.h3,{id:"custom-label",children:"Custom Label"}),`
`,e.jsx(p,{of:o}),`
`,e.jsx(t.h3,{id:"custom-icon-en-label",children:"Custom Icon en Label"}),`
`,e.jsx(p,{of:n}),`
`,e.jsx(t.h3,{id:"icon-tekst",children:"Icon tekst"}),`
`,e.jsx(p,{of:s})]})}function T(r={}){const{wrapper:t}={...u(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(b,{...r})}):b(r)}function L(r,t){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}const H={id:"map-legend-item",title:"Map/legend-item",tags:["autodocs"],args:i,argTypes:z,parameters:{docs:{page:T}}},m=S(i,({layer:r,iconText:t,iconSlot:c,labelSlot:v})=>I` <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-action-controls>
                <vl-map-measure-control></vl-map-measure-control>
            </vl-map-action-controls>
            <vl-map-features-layer
                name="Shapes"
                features='{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[153055,203908]},"properties":{"styleId":"style-1"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[141000,200908]},"properties":{"styleId":"style-2"}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[147055,197908],[157055,197908],[157055,187908],[147055,187908],[147055,197908]]]},"properties":{"styleId":"style-3"}}]}'
                projection-code="EPSG:31370"
            >
                <vl-map-layer-circle-style
                    id="style-1"
                    name="Openbaar onderzoek"
                    color="#ffe615"
                    size="5"
                    border-color="#000"
                    border-size="1"
                ></vl-map-layer-circle-style>
                <vl-map-layer-circle-style
                    id="style-2"
                    name="Beslissing"
                    color="red"
                    size="5"
                    border-color="#000"
                    border-size="1"
                ></vl-map-layer-circle-style>
                <vl-map-layer-style
                    id="style-3"
                    name="Wateroppervlaktes"
                    color="rgba(255,0,0,0.5)"
                    border-color="rgba(255,255,100,1)"
                    border-size="2"
                    text-feature-attribute-name="label"
                    text-background-color="rgba(0,0,255,0.2)"
                    text-border-color="rgba(0,255,0,1)"
                    text-border-size="3"
                    text-color="rgba(20,50,100,1)"
                    text-offset-x="10"
                    text-offset-y="-10"
                    text-size="13px"
                ></vl-map-layer-style>
            </vl-map-features-layer>
            <vl-map-legend>
                <vl-map-legend-item layer=${r} icon-text=${t}>
                    ${g(v)} ${g(c)}
                </vl-map-legend-item>
            </vl-map-legend>
        </vl-map>`),n=m.bind({});n.storyName="vl-map-legend-item - default";n.args={layer:"Openbaar onderzoek",iconSlot:`<span slot="icon"
                    ><div
                        style="
                    height: 0.8em;
                    width: 0.8em;
                    border: 1px solid #000;
                    background-color:purple;"
                    ></div>
                </span>`,labelSlot:'<span slot="label">Custom label</span>'};n.parameters={controls:{exclude:["icon-text"]}};const l=m.bind({});l.storyName="vl-map-legend-item - icon";l.args={layer:"Wateroppervlaktes",iconSlot:`<span slot="icon"
                    ><div
                        style="
                    height: 0.8em;
                    width: 0.8em;
                    border: 1px solid #000;
                    background-color:purple;"
                    ></div>
                </span>`};l.parameters={controls:{exclude:["icon-text"]}};const o=m.bind({});o.storyName="vl-map-legend-item - icon";o.args={layer:"Wateroppervlaktes",labelSlot:'<span slot="label">Custom label</span>'};o.parameters={controls:{exclude:["icon-text"]}};const s=m.bind({});s.storyName="vl-map-legend-item - icon text";s.args={layer:"Wateroppervlaktes",iconText:"W"};const a=m.bind({});a.storyName="vl-map-legend-item - default icon en label";a.args={layer:"Wateroppervlaktes"};a.parameters={controls:{exclude:["icon-text"]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`story(mapLegendItemArgs, ({
  layer,
  iconText,
  iconSlot,
  labelSlot
}) => html\` <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-action-controls>
                <vl-map-measure-control></vl-map-measure-control>
            </vl-map-action-controls>
            <vl-map-features-layer
                name="Shapes"
                features='{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[153055,203908]},"properties":{"styleId":"style-1"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[141000,200908]},"properties":{"styleId":"style-2"}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[147055,197908],[157055,197908],[157055,187908],[147055,187908],[147055,197908]]]},"properties":{"styleId":"style-3"}}]}'
                projection-code="EPSG:31370"
            >
                <vl-map-layer-circle-style
                    id="style-1"
                    name="Openbaar onderzoek"
                    color="#ffe615"
                    size="5"
                    border-color="#000"
                    border-size="1"
                ></vl-map-layer-circle-style>
                <vl-map-layer-circle-style
                    id="style-2"
                    name="Beslissing"
                    color="red"
                    size="5"
                    border-color="#000"
                    border-size="1"
                ></vl-map-layer-circle-style>
                <vl-map-layer-style
                    id="style-3"
                    name="Wateroppervlaktes"
                    color="rgba(255,0,0,0.5)"
                    border-color="rgba(255,255,100,1)"
                    border-size="2"
                    text-feature-attribute-name="label"
                    text-background-color="rgba(0,0,255,0.2)"
                    text-border-color="rgba(0,255,0,1)"
                    text-border-size="3"
                    text-color="rgba(20,50,100,1)"
                    text-offset-x="10"
                    text-offset-y="-10"
                    text-size="13px"
                ></vl-map-layer-style>
            </vl-map-features-layer>
            <vl-map-legend>
                <vl-map-legend-item layer=\${layer} icon-text=\${iconText}>
                    \${unsafeHTML(labelSlot)} \${unsafeHTML(iconSlot)}
                </vl-map-legend-item>
            </vl-map-legend>
        </vl-map>\`)`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`story(mapLegendItemArgs, ({
  layer,
  iconText,
  iconSlot,
  labelSlot
}) => html\` <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-action-controls>
                <vl-map-measure-control></vl-map-measure-control>
            </vl-map-action-controls>
            <vl-map-features-layer
                name="Shapes"
                features='{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[153055,203908]},"properties":{"styleId":"style-1"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[141000,200908]},"properties":{"styleId":"style-2"}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[147055,197908],[157055,197908],[157055,187908],[147055,187908],[147055,197908]]]},"properties":{"styleId":"style-3"}}]}'
                projection-code="EPSG:31370"
            >
                <vl-map-layer-circle-style
                    id="style-1"
                    name="Openbaar onderzoek"
                    color="#ffe615"
                    size="5"
                    border-color="#000"
                    border-size="1"
                ></vl-map-layer-circle-style>
                <vl-map-layer-circle-style
                    id="style-2"
                    name="Beslissing"
                    color="red"
                    size="5"
                    border-color="#000"
                    border-size="1"
                ></vl-map-layer-circle-style>
                <vl-map-layer-style
                    id="style-3"
                    name="Wateroppervlaktes"
                    color="rgba(255,0,0,0.5)"
                    border-color="rgba(255,255,100,1)"
                    border-size="2"
                    text-feature-attribute-name="label"
                    text-background-color="rgba(0,0,255,0.2)"
                    text-border-color="rgba(0,255,0,1)"
                    text-border-size="3"
                    text-color="rgba(20,50,100,1)"
                    text-offset-x="10"
                    text-offset-y="-10"
                    text-size="13px"
                ></vl-map-layer-style>
            </vl-map-features-layer>
            <vl-map-legend>
                <vl-map-legend-item layer=\${layer} icon-text=\${iconText}>
                    \${unsafeHTML(labelSlot)} \${unsafeHTML(iconSlot)}
                </vl-map-legend-item>
            </vl-map-legend>
        </vl-map>\`)`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`story(mapLegendItemArgs, ({
  layer,
  iconText,
  iconSlot,
  labelSlot
}) => html\` <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-action-controls>
                <vl-map-measure-control></vl-map-measure-control>
            </vl-map-action-controls>
            <vl-map-features-layer
                name="Shapes"
                features='{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[153055,203908]},"properties":{"styleId":"style-1"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[141000,200908]},"properties":{"styleId":"style-2"}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[147055,197908],[157055,197908],[157055,187908],[147055,187908],[147055,197908]]]},"properties":{"styleId":"style-3"}}]}'
                projection-code="EPSG:31370"
            >
                <vl-map-layer-circle-style
                    id="style-1"
                    name="Openbaar onderzoek"
                    color="#ffe615"
                    size="5"
                    border-color="#000"
                    border-size="1"
                ></vl-map-layer-circle-style>
                <vl-map-layer-circle-style
                    id="style-2"
                    name="Beslissing"
                    color="red"
                    size="5"
                    border-color="#000"
                    border-size="1"
                ></vl-map-layer-circle-style>
                <vl-map-layer-style
                    id="style-3"
                    name="Wateroppervlaktes"
                    color="rgba(255,0,0,0.5)"
                    border-color="rgba(255,255,100,1)"
                    border-size="2"
                    text-feature-attribute-name="label"
                    text-background-color="rgba(0,0,255,0.2)"
                    text-border-color="rgba(0,255,0,1)"
                    text-border-size="3"
                    text-color="rgba(20,50,100,1)"
                    text-offset-x="10"
                    text-offset-y="-10"
                    text-size="13px"
                ></vl-map-layer-style>
            </vl-map-features-layer>
            <vl-map-legend>
                <vl-map-legend-item layer=\${layer} icon-text=\${iconText}>
                    \${unsafeHTML(labelSlot)} \${unsafeHTML(iconSlot)}
                </vl-map-legend-item>
            </vl-map-legend>
        </vl-map>\`)`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story(mapLegendItemArgs, ({
  layer,
  iconText,
  iconSlot,
  labelSlot
}) => html\` <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-action-controls>
                <vl-map-measure-control></vl-map-measure-control>
            </vl-map-action-controls>
            <vl-map-features-layer
                name="Shapes"
                features='{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[153055,203908]},"properties":{"styleId":"style-1"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[141000,200908]},"properties":{"styleId":"style-2"}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[147055,197908],[157055,197908],[157055,187908],[147055,187908],[147055,197908]]]},"properties":{"styleId":"style-3"}}]}'
                projection-code="EPSG:31370"
            >
                <vl-map-layer-circle-style
                    id="style-1"
                    name="Openbaar onderzoek"
                    color="#ffe615"
                    size="5"
                    border-color="#000"
                    border-size="1"
                ></vl-map-layer-circle-style>
                <vl-map-layer-circle-style
                    id="style-2"
                    name="Beslissing"
                    color="red"
                    size="5"
                    border-color="#000"
                    border-size="1"
                ></vl-map-layer-circle-style>
                <vl-map-layer-style
                    id="style-3"
                    name="Wateroppervlaktes"
                    color="rgba(255,0,0,0.5)"
                    border-color="rgba(255,255,100,1)"
                    border-size="2"
                    text-feature-attribute-name="label"
                    text-background-color="rgba(0,0,255,0.2)"
                    text-border-color="rgba(0,255,0,1)"
                    text-border-size="3"
                    text-color="rgba(20,50,100,1)"
                    text-offset-x="10"
                    text-offset-y="-10"
                    text-size="13px"
                ></vl-map-layer-style>
            </vl-map-features-layer>
            <vl-map-legend>
                <vl-map-legend-item layer=\${layer} icon-text=\${iconText}>
                    \${unsafeHTML(labelSlot)} \${unsafeHTML(iconSlot)}
                </vl-map-legend-item>
            </vl-map-legend>
        </vl-map>\`)`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`story(mapLegendItemArgs, ({
  layer,
  iconText,
  iconSlot,
  labelSlot
}) => html\` <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-action-controls>
                <vl-map-measure-control></vl-map-measure-control>
            </vl-map-action-controls>
            <vl-map-features-layer
                name="Shapes"
                features='{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[153055,203908]},"properties":{"styleId":"style-1"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[141000,200908]},"properties":{"styleId":"style-2"}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[147055,197908],[157055,197908],[157055,187908],[147055,187908],[147055,197908]]]},"properties":{"styleId":"style-3"}}]}'
                projection-code="EPSG:31370"
            >
                <vl-map-layer-circle-style
                    id="style-1"
                    name="Openbaar onderzoek"
                    color="#ffe615"
                    size="5"
                    border-color="#000"
                    border-size="1"
                ></vl-map-layer-circle-style>
                <vl-map-layer-circle-style
                    id="style-2"
                    name="Beslissing"
                    color="red"
                    size="5"
                    border-color="#000"
                    border-size="1"
                ></vl-map-layer-circle-style>
                <vl-map-layer-style
                    id="style-3"
                    name="Wateroppervlaktes"
                    color="rgba(255,0,0,0.5)"
                    border-color="rgba(255,255,100,1)"
                    border-size="2"
                    text-feature-attribute-name="label"
                    text-background-color="rgba(0,0,255,0.2)"
                    text-border-color="rgba(0,255,0,1)"
                    text-border-size="3"
                    text-color="rgba(20,50,100,1)"
                    text-offset-x="10"
                    text-offset-y="-10"
                    text-size="13px"
                ></vl-map-layer-style>
            </vl-map-features-layer>
            <vl-map-legend>
                <vl-map-legend-item layer=\${layer} icon-text=\${iconText}>
                    \${unsafeHTML(labelSlot)} \${unsafeHTML(iconSlot)}
                </vl-map-legend-item>
            </vl-map-legend>
        </vl-map>\`)`,...a.parameters?.docs?.source}}};const w=["MapLegendItemIconLabel","MapLegendItemIcon","MapLegendItemLabel","MapLegendItemIconText","MapLegendItemDefault"];export{a as MapLegendItemDefault,l as MapLegendItemIcon,n as MapLegendItemIconLabel,s as MapLegendItemIconText,o as MapLegendItemLabel,w as __namedExportsOrder,H as default};
