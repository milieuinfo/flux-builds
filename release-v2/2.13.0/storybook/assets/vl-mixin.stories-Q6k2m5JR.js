import{u as l,j as e,M as u,C as a,be as m,x as d,bf as x,b7 as c}from"./iframe-69xRVzLO.js";import"./preload-helper-D9Z9MdNV.js";function r(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...l(),...i.components},{FluxComponentMetaData:o}=n;return o||p("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(u,{title:"Styles/Base (intern)/mixin"}),`
`,e.jsx(n.h1,{id:"mixin",children:"Mixin"}),`
`,e.jsx(o,{id:"styles-base-mixin"}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsx(n.p,{children:`Om in CSS duplicatie tegen te gaan voorzien we mixins. Het concept is gelijk aan SCSS mixins: geparametriseerde
methodes die styling encapsuleren. Al onze code wordt in TypeScript geschreven, daardoor zijn de mixins geschreven als
'css-in-ts'.`}),`
`,e.jsx(n.h2,{id:"voorbeelden",children:"Voorbeelden"}),`
`,e.jsx(n.h3,{id:"vlwaveanimationmixin",children:"vlWaveAnimationMixin"}),`
`,e.jsxs(n.p,{children:["De ",e.jsx(n.code,{children:"vlWaveAnimationMixin"}),` wordt hier ge-wrapped in een custom style-class. Dit is de animatie die gebruikt wordt in
`,e.jsx(n.code,{children:"<vl-button>"}),"."]}),`
`,e.jsx(a,{of:t}),`
`,e.jsx(n.h3,{id:"vlfocusoutlinemixin",children:"vlFocusOutlineMixin"}),`
`,e.jsxs(n.p,{children:["De ",e.jsx(n.code,{children:"vlFocusOutlineMixin"}),` wordt hier ge-wrapped in een custom style-class. Dit zorgt voor de specifieke stijl van een
item dat de focus krijgt. Wordt gebruikt in `,e.jsx(n.code,{children:"<vl-link>"}),", ",e.jsx(n.code,{children:"<vl-button>"})," en ",e.jsx(n.code,{children:"vl-link-button."})]}),`
`,e.jsx(a,{of:s})]})}function v(i={}){const{wrapper:n}={...l(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}function p(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}const j={id:"styles-base-mixin",title:"Styles/Base (intern)/mixin",tags:["autodocs"],parameters:{docs:{page:v}}},t=({})=>d`
    <style>
        .sb-wave-animation-blue {
            animation: sb-wave-animation-blue infinite 1s linear;
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
        }

        ${m("sb-wave-animation-blue","lightblue")}
    </style>
    <div class="sb-wave-animation-blue"></div>
`;t.storyName="vl-mixin - vlWaveAnimationMixin";t.parameters=c;const s=({})=>d` <style>
        .sb-focus-outline {
            ${x()}
            width: 200px;
            padding: 10px;
            text-align: center;
        }
    </style>
    <div class="sb-focus-outline">outline bij focus</div>`;s.storyName="vl-mixin - vlFocusOutlineMixin";s.parameters=c;t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({}) => html\`
    <style>
        .sb-wave-animation-blue {
            animation: sb-wave-animation-blue infinite 1s linear;
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
        }

        \${vlWaveAnimationMixin('sb-wave-animation-blue', 'lightblue')}
    </style>
    <div class="sb-wave-animation-blue"></div>
\``,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({}) => html\` <style>
        .sb-focus-outline {
            \${vlFocusOutlineMixin()}
            width: 200px;
            padding: 10px;
            text-align: center;
        }
    </style>
    <div class="sb-focus-outline">outline bij focus</div>\``,...s.parameters?.docs?.source}}};const f=["WaveAnimationMixinDefault","FocusOutlineMixinDefault"];export{s as FocusOutlineMixinDefault,t as WaveAnimationMixinDefault,f as __namedExportsOrder,j as default};
