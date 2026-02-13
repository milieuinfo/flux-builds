import{R as o,U as s,Z as x,Y as T,O as j,P as w,u as c,j as t,C as p,bh as $,s as h,x as g}from"./iframe-FlvNZLqI.js";import{o as d}from"./unsafe-html-DF5XElkr.js";import"./vl-map-base-layer-CnkWBJRC.js";import"./vl-map-base-layer-grb-gray-CrvS-DXx.js";import"./vl-map-side-sheet-IHGtpf7f.js";import"./vl-map-side-sheet-menu-item-Bp_4-YZI.js";import"./preload-helper-D9Z9MdNV.js";const n={...w,customIcon:"",enableSwipe:!1,hideToggleButton:!1,open:!1,iconPlacement:"before",right:!1,toggleText:"",tooltipText:"",defaultSlot:""},M={...j,customIcon:{name:"custom-icon",description:"Het icoon van de toggle button.",table:{type:{summary:s.STRING},category:o.ATTRIBUTES,defaultValue:{summary:n.customIcon}}},enableSwipe:{name:"enable-swipe",description:"Het zijpaneel kan gesloten worden door te swipen.",table:{type:{summary:s.BOOLEAN},category:o.ATTRIBUTES,defaultValue:{summary:String(n.enableSwipe)}}},hideToggleButton:{name:"hide-toggle-button",description:"Verbergt de toggle button.",table:{type:{summary:s.BOOLEAN},category:o.ATTRIBUTES,defaultValue:{summary:String(n.hideToggleButton)}}},iconPlacement:{name:"icon-placement",description:"De positie van het icoon van de toggle button.<br>Dit attribuut is niet reactief.",control:{type:T.SELECT},options:["before","after"],table:{type:{summary:x(["before","after"])},category:o.ATTRIBUTES,defaultValue:{summary:n.iconPlacement}}},open:{name:"open",description:"Duidt aan dat het zijpaneel open is.",table:{type:{summary:s.BOOLEAN},category:o.ATTRIBUTES,defaultValue:{summary:String(n.open)}}},right:{name:"right",description:"Positioneert het zijpaneel aan de rechterrand.",table:{type:{summary:s.BOOLEAN},category:o.ATTRIBUTES,defaultValue:{summary:String(n.right)}}},toggleText:{name:"toggle-text",description:"De tekst van de toggle button.",table:{type:{summary:s.STRING},category:o.ATTRIBUTES,defaultValue:{summary:n.toggleText}}},tooltipText:{name:"tooltip-text",description:"De tooltip van de toggle button.",table:{type:{summary:s.STRING},category:o.ATTRIBUTES,defaultValue:{summary:n.tooltipText}}},defaultSlot:{name:"[default]",description:"Element dat afgebeeld wordt in het zijpaneel.",table:{type:{summary:s.HTML},category:o.SLOTS}}};function m(a){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...c(),...a.components},{FluxComponentMetaData:r}=e;return r||A("FluxComponentMetaData"),t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"map-side-sheet",children:"Map Side Sheet"}),`
`,t.jsx(r,{id:"map-components-side-sheet"}),`
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
`,t.jsx($,{of:i}),`
`,t.jsx(e.h2,{id:"varianten",children:"Varianten"}),`
`,t.jsx(e.h3,{id:"met-menu-item",children:"Met menu item"}),`
`,t.jsxs(e.p,{children:["Zie de story onder ",t.jsx(e.a,{href:"/docs/map-side-sheet-side-sheet-menu-item--documentatie",children:"side-sheet-menu-item"})," voor een voorbeeld."]}),`
`,t.jsx(e.h3,{id:"2-zijpanelen",children:"2 zijpanelen"}),`
`,t.jsx(p,{of:l}),`
`,t.jsx(e.h2,{id:"referenties",children:"Referenties"}),`
`,t.jsx(e.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-map-vl-map-side-sheet--default",rel:"nofollow",children:"Legacy Storybook - Map Side Sheet"})}),`
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlMapSideSheet.html",rel:"nofollow",children:"Legacy Documentatie - Map Side Sheet"})}),`
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-side-sheet.html",rel:"nofollow",children:"Legacy Demo - Map Side Sheet"})})]})}function E(a={}){const{wrapper:e}={...c(),...a.components};return e?t.jsx(e,{...a,children:t.jsx(m,{...a})}):m(a)}function A(a,e){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}const C={id:"map-side-sheet-side-sheet",title:"map/side-sheet/side-sheet",tags:["autodocs"],args:n,argTypes:M,parameters:{docs:{page:E}}},i=h(n,({right:a,open:e,enableSwipe:r,defaultSlot:u,toggleText:b,tooltipText:f,customIcon:y,iconPlacement:S,hideToggleButton:v})=>g`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray/>
            </vl-map-baselayer-grb-gray>
            <vl-map-side-sheet
                ?open=${e}
                ?right=${a}
                ?enable-swipe=${r}
                toggle-text=${b}
                tooltip-text=${f}
                custom-icon=${y}
                icon-placement=${S}
                ?hide-toggle-button=${v}
            >
                ${d(u)}
            </vl-map-side-sheet>
        </vl-map>
    `);i.storyName="vl-map-side-sheet - default";i.args={defaultSlot:"<div>Plaats hier je zijpaneel content.</div>"};const l=h(n,({enableSwipe:a,defaultSlot:e,open:r})=>g`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-side-sheet>${d(e)}</vl-map-side-sheet>
            <vl-map-side-sheet right ?open=${r} ?enable-swipe=${a}
                >${d(e)}
            </vl-map-side-sheet>
        </vl-map>
    `);l.storyName="vl-map-side-sheet - dual";l.args={defaultSlot:"<div>Plaats hier je zijpaneel content.</div>"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`story(mapSideSheetArgs, ({
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
    \`)`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`story(mapSideSheetArgs, ({
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
    \`)`,...l.parameters?.docs?.source}}};const N=["MapSideSheetDefault","MapSideSheetDual"];export{i as MapSideSheetDefault,l as MapSideSheetDual,N as __namedExportsOrder,C as default};
