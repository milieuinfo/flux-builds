import{C as l,T as t,d as u,a as b,s as g}from"./stories.helper-DYHi_5m6.js";import{u as d,j as r,C as v,b4 as S,b as T}from"./iframe-Cv28D2NX.js";import"./vl-map-base-layer-CmFLB2kf.js";import"./vl-map-base-layer-grb-gray-B3yI26-B.js";import"./vl-map-features-layer-CEF7bfWd.js";import"./vl-map-draw-polygon-action-DdgA_1zp.js";import"./vl-map-draw-action-enDB39H3.js";import"./preload-helper-PPVm8Dsz.js";import"./vl-map-vector-layer-CQXQ1CFV.js";import"./vl-map-layer-action-BuSnoCGf.js";import"./composite-vector-layer-CSSpqbq6.js";const o={...b,color:"",borderColor:"",borderSize:"",circleColor:"",circleBorderColor:"",circleBorderSize:"",circleSize:""},f={...u,color:{name:"color",description:"Bepaalt de fill kleur bij het tekenen van een polygoon.",table:{type:{summary:t.STRING},category:l.ATTRIBUTES,defaultValue:{summary:o.color}}},borderColor:{name:"border-color",description:"Bepaalt de kleur van de rand bij de teken actie.",table:{type:{summary:t.STRING},category:l.ATTRIBUTES,defaultValue:{summary:o.borderColor}}},borderSize:{name:"border-size",description:"Bepaalt de breedte van de rand bij de teken actie.",table:{type:{summary:t.STRING},category:l.ATTRIBUTES,defaultValue:{summary:o.borderSize}}},circleColor:{name:"circle-color",description:"Bepaalt de fill kleur van de punten tijdens het tekenen.",table:{type:{summary:t.STRING},category:l.ATTRIBUTES,defaultValue:{summary:o.circleColor}}},circleBorderColor:{name:"circle-border-color",description:"Bepaalt de kleur van de rand van de cirkels tijdens het tekenen.",table:{type:{summary:t.STRING},category:l.ATTRIBUTES,defaultValue:{summary:o.circleBorderColor}}},circleBorderSize:{name:"circle-border-size",description:"Bepaalt de breedte van de rand van de cirkels tijdens het tekenen.",table:{type:{summary:t.STRING},category:l.ATTRIBUTES,defaultValue:{summary:o.circleBorderSize}}},circleSize:{name:"circle-size",description:"Bepaalt de grootte van de cirkels tijdens het tekenen.",table:{type:{summary:t.STRING},category:l.ATTRIBUTES,defaultValue:{summary:o.circleSize}}}};function i(a){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...d(),...a.components},{FluxComponentMetaData:n}=e;return n||h("FluxComponentMetaData"),r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"map-draw-action-style",children:"Map Draw Action Style"}),`
`,r.jsx(n,{id:"map-components-action-draw-action-style"}),`
`,r.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,r.jsxs(e.p,{children:["Gebruik de ",r.jsx(e.code,{children:"map-draw-action-style"})," component om een style mee te geven aan de ",r.jsx(e.code,{children:"map-draw-action"}),"."]}),`
`,r.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-js",children:`import { VlMapDrawActionStyle } from '@domg-wc/map';
`})}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-html",children:`<vl-map-draw-action-style></vl-map-draw-action-style>
`})}),`
`,r.jsx(v,{of:c}),`
`,r.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,r.jsx(S,{of:c})]})}function w(a={}){const{wrapper:e}={...d(),...a.components};return e?r.jsx(e,{...a,children:r.jsx(i,{...a})}):i(a)}function h(a,e){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}const E={id:"map-action-draw-action-draw-action-style",title:"map/action/draw-action/draw-action-style",tags:["autodocs"],args:o,argTypes:f,parameters:{docs:{page:w}}},c=g(o,({color:a,borderColor:e,borderSize:n,circleColor:s,circleBorderColor:m,circleBorderSize:p,circleSize:y})=>T`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer>
                <vl-map-draw-polygon-action .active=${!0} default-active=${!0}>
                    <vl-map-draw-action-style
                        color=${a}
                        border-color=${e}
                        border-size=${n}
                        circle-color=${s}
                        circle-border-color=${m}
                        circle-border-size=${p}
                        circle-size=${y}
                    ></vl-map-draw-action-style>
                </vl-map-draw-polygon-action>
                <vl-map-layer-style
                    border-size="2"
                    color="rgba(255, 127, 80, 0.8)"
                    border-color="rgba(64, 224, 208, 0.8)"
                ></vl-map-layer-style>
            </vl-map-features-layer>
        </vl-map>
    `);c.args={color:"rgba(255, 105, 180, 0.8)",borderColor:"rgba(0, 191, 255, 0.8)",borderSize:"3",circleColor:"rgba(255, 255, 0, 0.8)",circleBorderColor:"rgba(76, 187, 23, 0.8)",circleBorderSize:"5",circleSize:"10"};const M=["MapDrawActionStyleDefault"];c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`story(mapDrawActionStyleArgs, ({
  color,
  borderColor,
  borderSize,
  circleColor,
  circleBorderColor,
  circleBorderSize,
  circleSize
}) => html\`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer>
                <vl-map-draw-polygon-action .active=\${true} default-active=\${true}>
                    <vl-map-draw-action-style
                        color=\${color}
                        border-color=\${borderColor}
                        border-size=\${borderSize}
                        circle-color=\${circleColor}
                        circle-border-color=\${circleBorderColor}
                        circle-border-size=\${circleBorderSize}
                        circle-size=\${circleSize}
                    ></vl-map-draw-action-style>
                </vl-map-draw-polygon-action>
                <vl-map-layer-style
                    border-size="2"
                    color="rgba(255, 127, 80, 0.8)"
                    border-color="rgba(64, 224, 208, 0.8)"
                ></vl-map-layer-style>
            </vl-map-features-layer>
        </vl-map>
    \`)`,...c.parameters?.docs?.source}}};export{c as MapDrawActionStyleDefault,M as __namedExportsOrder,E as default};
