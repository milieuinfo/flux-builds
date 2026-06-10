import{Z as o,_ as s,a2 as x,a1 as v,W as j,X as $,u as c,j as t,C as p,bc as E,s as g,x as u}from"./iframe-CsDE-vVI.js";import{o as d}from"./unsafe-html-ogfylwJ3.js";import"./vl-map-base-layer-CgI99i60.js";import"./vl-map-base-layer-grb-gray-BEd-NMxn.js";import"./vl-map-side-sheet-omb3tSEG.js";import"./vl-map-side-sheet-menu-item-CisgDops.js";import"./preload-helper-D9Z9MdNV.js";const n={...$,customIcon:"",enableSwipe:!1,hideToggleButton:!1,open:!1,iconPlacement:"before",right:!1,toggleText:"",tooltipText:"",defaultSlot:""},w={...j,customIcon:{name:"custom-icon",description:"Het icoon van de toggle button.",table:{type:{summary:s.STRING},category:o.ATTRIBUTES,defaultValue:{summary:n.customIcon}}},enableSwipe:{name:"enable-swipe",description:"Het zijpaneel kan gesloten worden door te swipen.",table:{type:{summary:s.BOOLEAN},category:o.ATTRIBUTES,defaultValue:{summary:String(n.enableSwipe)}}},hideToggleButton:{name:"hide-toggle-button",description:"Verbergt de toggle button.",table:{type:{summary:s.BOOLEAN},category:o.ATTRIBUTES,defaultValue:{summary:String(n.hideToggleButton)}}},iconPlacement:{name:"icon-placement",description:"De positie van het icoon van de toggle button.<br>Dit attribuut is niet reactief.",control:{type:v.SELECT},options:["before","after"],table:{type:{summary:x(["before","after"])},category:o.ATTRIBUTES,defaultValue:{summary:n.iconPlacement}}},open:{name:"open",description:"Duidt aan dat het zijpaneel open is.",table:{type:{summary:s.BOOLEAN},category:o.ATTRIBUTES,defaultValue:{summary:String(n.open)}}},right:{name:"right",description:"Positioneert het zijpaneel aan de rechterrand.",table:{type:{summary:s.BOOLEAN},category:o.ATTRIBUTES,defaultValue:{summary:String(n.right)}}},toggleText:{name:"toggle-text",description:"De tekst van de toggle button.",table:{type:{summary:s.STRING},category:o.ATTRIBUTES,defaultValue:{summary:n.toggleText}}},tooltipText:{name:"tooltip-text",description:"De tooltip van de toggle button.",table:{type:{summary:s.STRING},category:o.ATTRIBUTES,defaultValue:{summary:n.tooltipText}}},defaultSlot:{name:"[default]",description:"Element dat afgebeeld wordt in het zijpaneel.",table:{type:{summary:s.HTML},category:o.SLOTS}}};function m(a){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...c(),...a.components},{FluxComponentMetaData:l}=e;return l||M("FluxComponentMetaData"),t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"map-side-sheet",children:"Map Side Sheet"}),`
`,t.jsx(l,{id:"map-components-side-sheet"}),`
`,t.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,t.jsxs(e.p,{children:["Gebruik de ",t.jsx(e.code,{children:"map-side-sheet"})," component om een uitklapbaar zijpaneel af te beelden over de map.",t.jsx("br",{}),`
Deze component erft over van de `,t.jsx(e.a,{href:"/docs/components-block-side-sheet--side-sheet-default",children:"side-sheet"})," component en heeft ook al diens functionaliteit.",t.jsx("br",{}),`
`,t.jsx(e.strong,{children:"Let op"}),": de default positie van de ",t.jsx(e.code,{children:"map-side-sheet"}),` is links, terwijl de default positie van de
`,t.jsx(e.a,{href:"/docs/components-block-side-sheet--side-sheet-default",children:"side-sheet"})," rechts is."]}),`
`,t.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`import { VlMapSideSheet } from '@domg-wc/map';
`})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<vl-map-side-sheet></vl-map-side-sheet>
`})}),`
`,t.jsx(p,{of:i}),`
`,t.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,t.jsx(E,{of:i}),`
`,t.jsx(e.h2,{id:"varianten",children:"Varianten"}),`
`,t.jsx(e.h3,{id:"met-menu-item",children:"Met menu item"}),`
`,t.jsxs(e.p,{children:["Zie de story onder ",t.jsx(e.a,{href:"/docs/map-side-sheet-side-sheet-menu-item--documentatie",children:"side-sheet-menu-item"})," voor een voorbeeld."]}),`
`,t.jsx(e.h3,{id:"2-zijpanelen",children:"2 zijpanelen"}),`
`,t.jsx(p,{of:r})]})}function A(a={}){const{wrapper:e}={...c(),...a.components};return e?t.jsx(e,{...a,children:t.jsx(m,{...a})}):m(a)}function M(a,e){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}const N={id:"map-side-sheet-side-sheet",title:"map/side-sheet/side-sheet",tags:["autodocs"],args:n,argTypes:w,parameters:{docs:{page:A}}},i=g(n,({right:a,open:e,enableSwipe:l,defaultSlot:h,toggleText:b,tooltipText:y,customIcon:f,iconPlacement:S,hideToggleButton:T})=>u`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray/>
            </vl-map-baselayer-grb-gray>
            <vl-map-side-sheet
                ?open=${e}
                ?right=${a}
                ?enable-swipe=${l}
                toggle-text=${b}
                tooltip-text=${y}
                custom-icon=${f}
                icon-placement=${S}
                ?hide-toggle-button=${T}
            >
                ${d(h)}
            </vl-map-side-sheet>
        </vl-map>
    `);i.storyName="vl-map-side-sheet - default";i.args={defaultSlot:"<div>Plaats hier je zijpaneel content.</div>"};const r=g(n,({enableSwipe:a,defaultSlot:e,open:l})=>u`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-side-sheet>${d(e)}</vl-map-side-sheet>
            <vl-map-side-sheet right ?open=${l} ?enable-swipe=${a}
                >${d(e)}
            </vl-map-side-sheet>
        </vl-map>
    `);r.storyName="vl-map-side-sheet - dual";r.args={defaultSlot:"<div>Plaats hier je zijpaneel content.</div>"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`story(mapSideSheetArgs, ({
  right,
  open,
  enableSwipe,
  defaultSlot,
  toggleText,
  tooltipText,
  customIcon,
  iconPlacement,
  hideToggleButton
}) => html\`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray/>
            </vl-map-baselayer-grb-gray>
            <vl-map-side-sheet
                ?open=\${open}
                ?right=\${right}
                ?enable-swipe=\${enableSwipe}
                toggle-text=\${toggleText}
                tooltip-text=\${tooltipText}
                custom-icon=\${customIcon}
                icon-placement=\${iconPlacement}
                ?hide-toggle-button=\${hideToggleButton}
            >
                \${unsafeHTML(defaultSlot)}
            </vl-map-side-sheet>
        </vl-map>
    \`)`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(mapSideSheetArgs, ({
  enableSwipe,
  defaultSlot,
  open
}) => html\`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-side-sheet>\${unsafeHTML(defaultSlot)}</vl-map-side-sheet>
            <vl-map-side-sheet right ?open=\${open} ?enable-swipe=\${enableSwipe}
                >\${unsafeHTML(defaultSlot)}
            </vl-map-side-sheet>
        </vl-map>
    \`)`,...r.parameters?.docs?.source}}};const V=["MapSideSheetDefault","MapSideSheetDual"];export{i as MapSideSheetDefault,r as MapSideSheetDual,V as __namedExportsOrder,N as default};
