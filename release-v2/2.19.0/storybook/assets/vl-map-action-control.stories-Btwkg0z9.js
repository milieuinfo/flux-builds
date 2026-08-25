import{Z as m,_ as p,W as f,X as h,u,j as a,C as d,b8 as x,s as y,x as g}from"./iframe-CY-ZM549.js";import"./vl-map-base-layer-BdyzNi5-.js";import"./vl-map-draw-polygon-action-Damrt1fi.js";import"./vl-map-delete-action-Cl08sItc.js";import"./vl-map-modify-action-BbQ_O8xJ.js";import"./vl-map-base-layer-grb-gray-D0d8kmNt.js";import"./vl-map-features-layer-Bw14ba3R.js";import"./vl-map-action-controls-BHDa8nI8.js";import"./vl-map-action-control-BOXrZuBz.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-draw-action-Bzh_ambS.js";import"./vl-map-layer-action-q8mfqCFR.js";import"./composite-vector-layer-fFVJWLGh.js";import"./vl-map-vector-layer-C3_HId6n.js";import"./select-action-C0qTuwez.js";import"./vl-map-control.mixin-aGd0eWF0.js";const r={...h,actionId:"",icon:"",label:"",defaultActive:!1},A={...f,actionId:{name:"action-id",description:"Het id van de actie die gelinkt is aan deze map-action-control.<br>Houd dit in sync met het id attribuut dat je op de actie plaatst.",table:{type:{summary:p.STRING},category:m.ATTRIBUTES,defaultValue:{summary:r.actionId}}},icon:{name:"icon",description:"Het icoon van de toggle-button.",table:{type:{summary:p.STRING},category:m.ATTRIBUTES,defaultValue:{summary:r.icon}}},label:{name:"label",description:"Het label van de toggle-button.",table:{type:{summary:p.STRING},category:m.ATTRIBUTES,defaultValue:{summary:r.label}}},defaultActive:{name:"default-active",description:"Voeg `default-active` toe om de control default te activeren bij het renderen.",table:{type:{summary:p.BOOLEAN},category:m.ATTRIBUTES,defaultValue:{summary:String(r.defaultActive)}}}};function v(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...u(),...n.components},{FluxComponentMetaData:c}=o;return c||w("FluxComponentMetaData"),a.jsxs(a.Fragment,{children:[a.jsx(o.h1,{id:"map-action-control",children:"Map Action Control"}),`
`,a.jsx(c,{id:"map-components-controls-action-control"}),`
`,a.jsx(o.h2,{id:"doel",children:"Doel"}),`
`,a.jsxs(o.p,{children:["Gebruik de ",a.jsx(o.code,{children:"map-action-control"}),` component om een map-actie aan of uit te zetten met behulp van een
`,a.jsx(o.a,{href:"/docs/components-atom-button--documentatie#toggle",children:"button met toggle"}),".",a.jsx("br",{}),`
Een `,a.jsx(o.code,{children:"map-action-control"})," linken aan een map-actie gebeurt op de volgende manier:"]}),`
`,a.jsxs(o.ul,{children:[`
`,a.jsxs(o.li,{children:["plaats op de ",a.jsx(o.code,{children:"map-action-control"})," het attribuut ",a.jsx(o.code,{children:"action-id"})," met als waarde bv. 'draw-polygon-action'"]}),`
`,a.jsxs(o.li,{children:["plaats op de map-actie het attribuut ",a.jsx(o.code,{children:"id"})," en geef hier dezelfde waarde mee als in de vorige stap"]}),`
`]}),`
`,a.jsx(o.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,a.jsx(o.pre,{children:a.jsx(o.code,{className:"language-js",children:`import { VlMapActionControl } from '@domg-wc/map';
`})}),`
`,a.jsx(o.pre,{children:a.jsx(o.code,{className:"language-html",children:`<vl-map-action-control></vl-map-action-control>
`})}),`
`,a.jsx(d,{of:t}),`
`,a.jsx(o.h2,{id:"configuratie",children:"Configuratie"}),`
`,a.jsx(x,{of:t}),`
`,a.jsx(o.h2,{id:"varianten",children:"Varianten"}),`
`,a.jsx(o.h3,{id:"default-actief",children:"Default actief"}),`
`,a.jsx(d,{of:e}),`
`,a.jsx(o.h3,{id:"met-icoon",children:"Met icoon"}),`
`,a.jsx(d,{of:l}),`
`,a.jsx(o.h3,{id:"meerdere-acties",children:"Meerdere acties"}),`
`,a.jsx(d,{of:i})]})}function j(n={}){const{wrapper:o}={...u(),...n.components};return o?a.jsx(o,{...n,children:a.jsx(v,{...n})}):v(n)}function w(n,o){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const O={id:"map-controls-action-control",title:"map/controls/action-control",tags:["autodocs"],args:r,argTypes:A,parameters:{docs:{page:j},controls:{hideNoControlsWarning:!0}}},s=y(r,({actionId:n,icon:o,label:c,defaultActive:b})=>g`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer>
                <vl-map-draw-polygon-action id=${n}></vl-map-draw-polygon-action>
            </vl-map-features-layer>
            <vl-map-action-controls>
                <vl-map-action-control
                    action-id=${n}
                    icon=${o}
                    label=${c}
                    ?default-active=${b}
                ></vl-map-action-control>
            </vl-map-action-controls>
        </vl-map>
    `),t=s.bind({});t.storyName="vl-map-action-control - default";t.args={actionId:"draw-polygon-action",label:"Teken"};const e=s.bind({});e.storyName="vl-map-action-control - default active";e.args={actionId:"draw-polygon-action",label:"Teken",defaultActive:!0};const l=s.bind({});l.storyName="vl-map-action-control - icon";l.args={actionId:"draw-polygon-action",icon:"pencil"};const i=y({},()=>g`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer>
                <vl-map-draw-polygon-action id="draw-action"></vl-map-draw-polygon-action>
                <vl-map-modify-action id="modify-action"></vl-map-modify-action>
                <vl-map-delete-action id="delete-action"></vl-map-delete-action>
            </vl-map-features-layer>
            <vl-map-action-controls>
                <vl-map-action-control action-id="draw-action" label="Teken"></vl-map-action-control>
                <vl-map-action-control action-id="modify-action" label="Editeer"></vl-map-action-control>
                <vl-map-action-control action-id="delete-action" label="Verwijder"></vl-map-action-control>
            </vl-map-action-controls>
        </vl-map>
    `);i.storyName="vl-map-action-control - multiple";t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`story(mapActionControlArgs, ({
  actionId,
  icon,
  label,
  defaultActive
}) => html\`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer>
                <vl-map-draw-polygon-action id=\${actionId}></vl-map-draw-polygon-action>
            </vl-map-features-layer>
            <vl-map-action-controls>
                <vl-map-action-control
                    action-id=\${actionId}
                    icon=\${icon}
                    label=\${label}
                    ?default-active=\${defaultActive}
                ></vl-map-action-control>
            </vl-map-action-controls>
        </vl-map>
    \`)`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`story(mapActionControlArgs, ({
  actionId,
  icon,
  label,
  defaultActive
}) => html\`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer>
                <vl-map-draw-polygon-action id=\${actionId}></vl-map-draw-polygon-action>
            </vl-map-features-layer>
            <vl-map-action-controls>
                <vl-map-action-control
                    action-id=\${actionId}
                    icon=\${icon}
                    label=\${label}
                    ?default-active=\${defaultActive}
                ></vl-map-action-control>
            </vl-map-action-controls>
        </vl-map>
    \`)`,...e.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`story(mapActionControlArgs, ({
  actionId,
  icon,
  label,
  defaultActive
}) => html\`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer>
                <vl-map-draw-polygon-action id=\${actionId}></vl-map-draw-polygon-action>
            </vl-map-features-layer>
            <vl-map-action-controls>
                <vl-map-action-control
                    action-id=\${actionId}
                    icon=\${icon}
                    label=\${label}
                    ?default-active=\${defaultActive}
                ></vl-map-action-control>
            </vl-map-action-controls>
        </vl-map>
    \`)`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`story({}, () => html\`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer>
                <vl-map-draw-polygon-action id="draw-action"></vl-map-draw-polygon-action>
                <vl-map-modify-action id="modify-action"></vl-map-modify-action>
                <vl-map-delete-action id="delete-action"></vl-map-delete-action>
            </vl-map-features-layer>
            <vl-map-action-controls>
                <vl-map-action-control action-id="draw-action" label="Teken"></vl-map-action-control>
                <vl-map-action-control action-id="modify-action" label="Editeer"></vl-map-action-control>
                <vl-map-action-control action-id="delete-action" label="Verwijder"></vl-map-action-control>
            </vl-map-action-controls>
        </vl-map>
    \`)`,...i.parameters?.docs?.source}}};const U=["MapActionControlDefault","MapActionControlDefaultActive","MapActionControlIcon","MapActionControlMultiple"];export{t as MapActionControlDefault,e as MapActionControlDefaultActive,l as MapActionControlIcon,i as MapActionControlMultiple,U as __namedExportsOrder,O as default};
