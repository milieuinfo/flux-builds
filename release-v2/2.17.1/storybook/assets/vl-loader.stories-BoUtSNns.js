import{W as g,X as h,u as c,j as t,C as d,b8 as u,x as s}from"./iframe-DynOw9qF.js";import"./preload-helper-D9Z9MdNV.js";const m={...h,light:!1,text:"Pagina is aan het laden",single:!1},p={...g,light:{name:"light",description:"Attribute is used to obtain an alternative rendering in combination with a dark background. ",table:{type:{summary:"boolean"},category:"Attributes",defaultValue:{summary:"false"}}},text:{name:"text",description:"Attribute is used to display an informative text during loading. ",table:{type:{summary:"string"},category:"Attributes",defaultValue:{summary:""}}},single:{name:"single",description:"Attribute is used to indicate that no text should be displayed. ",table:{type:{summary:"boolean"},category:"Attributes",defaultValue:{summary:"false"}}}};function i(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...c(),...n.components},{FluxComponentMetaData:l}=e;return l||v("FluxComponentMetaData"),t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"loader",children:"Loader"}),`
`,t.jsx(l,{id:"components-block-loader"}),`
`,t.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,t.jsxs(e.p,{children:["Gebruik ",t.jsx(e.code,{children:"vl-loader"}),` om aan te geven dat er iets aan het laden is. De component toont een animerende
laadindicator met daaronder een informatieve tekst.`]}),`
`,t.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`import { VlLoaderComponent } from '@domg-wc/components/block';
`})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<vl-loader></vl-loader>
`})}),`
`,t.jsx(d,{of:a}),`
`,t.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,t.jsx(u,{of:a}),`
`,t.jsx(e.h2,{id:"varianten",children:"Varianten"}),`
`,t.jsx(e.h3,{id:"light",children:"Light"}),`
`,t.jsxs(e.p,{children:["Gebruik het attribuut ",t.jsx(e.code,{children:"light"})," voor een alternatieve weergave op een donkere achtergrond."]}),`
`,t.jsx(d,{of:r}),`
`,t.jsx(e.h3,{id:"aangepaste-inhoud",children:"Aangepaste inhoud"}),`
`,t.jsx(e.p,{children:"Gebruik de slot om de standaardtekst te vervangen door eigen (opgemaakte) inhoud."}),`
`,t.jsx(d,{of:o}),`
`,t.jsx(e.h2,{id:"toegankelijkheid",children:"Toegankelijkheid"}),`
`,t.jsxs(e.p,{children:["De tekst van de loader staat in een ",t.jsx(e.code,{children:'role="status"'}),` live region. Daardoor kondigt een screenreader de
laadstatus `,t.jsx(e.strong,{children:"beleefd"})," (",t.jsx(e.code,{children:'aria-live="polite"'}),`) aan: de melding onderbreekt andere aankondigingen niet, maar
wordt voorgelezen zodra de gebruiker even pauzeert.`]}),`
`,t.jsxs(e.p,{children:["Een live region wordt echter enkel voorgelezen wanneer de screenreader een ",t.jsx(e.strong,{children:"wijziging"}),` in de inhoud
detecteert. Een `,t.jsx(e.code,{children:"vl-loader"}),` die je op het moment van laden in de DOM injecteert, wordt door de meeste
screenreaders niet betrouwbaar aangekondigd — de inhoud was er immers "altijd al".`]}),`
`,t.jsx(e.p,{children:"Om de laadstatus wél betrouwbaar te laten voorlezen, hou je je aan dit patroon:"}),`
`,t.jsxs(e.ol,{children:[`
`,t.jsxs(e.li,{children:["Plaats de ",t.jsx(e.code,{children:"vl-loader"})," ",t.jsx(e.strong,{children:"van bij het laden van de pagina"})," in de DOM, maar verborgen en zonder tekst."]}),`
`,t.jsxs(e.li,{children:["Zodra het laden begint, maak je de loader zichtbaar en vul je de tekst in (bv. ",t.jsx(e.code,{children:"Pagina is aan het laden"}),")."]}),`
`]}),`
`,t.jsx(e.p,{children:"Het is de overgang van lege tekst naar tekst die de screenreader triggert om voor te lezen."}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<!-- Bij paginalaad: aanwezig, verborgen en zonder tekst -->
<vl-loader hidden text=""></vl-loader>
`})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`// Zodra het laden start: zichtbaar maken en tekst invullen
const loader = document.querySelector('vl-loader');
loader.hidden = false;
loader.setAttribute('text', 'Pagina is aan het laden');
`})})]})}function x(n={}){const{wrapper:e}={...c(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(i,{...n})}):i(n)}function v(n,e){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const f={id:"components-block-loader",title:"Components - Block/loader",tags:["autodocs"],args:m,argTypes:p,parameters:{docs:{page:x}}},a=({light:n,text:e,single:l})=>s`
    <vl-loader ?light=${n} text=${e} ?single=${l} data-cy="loader"></vl-loader>
`;a.storyName="vl-loader - default";const r=({light:n,text:e,single:l})=>s`
    <div class="vl-section" style="background: #b7b7b7">
        <vl-loader ?light=${n} text=${e} ?single=${l} data-cy="loader-light-without-text"></vl-loader>
    </div>
`;r.storyName="vl-loader - light without text";r.args={light:!0,single:!0};const o=({light:n,single:e})=>s`
    <vl-loader ?light=${n} ?single=${e} data-cy="loader-with-custom-content">
        <span><strong>Informatie</strong> is aan het laden</span>
    </vl-loader>
`;o.storyName="vl-loader - with custom content";o.argTypes={text:{control:{disable:!0}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
  light,
  text,
  single
}: typeof loaderArgs) => html\`
    <vl-loader ?light=\${light} text=\${text} ?single=\${single} data-cy="loader"></vl-loader>
\``,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`({
  light,
  text,
  single
}: typeof loaderArgs) => html\`
    <div class="vl-section" style="background: #b7b7b7">
        <vl-loader ?light=\${light} text=\${text} ?single=\${single} data-cy="loader-light-without-text"></vl-loader>
    </div>
\``,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  light,
  single
}: typeof loaderArgs) => html\`
    <vl-loader ?light=\${light} ?single=\${single} data-cy="loader-with-custom-content">
        <span><strong>Informatie</strong> is aan het laden</span>
    </vl-loader>
\``,...o.parameters?.docs?.source}}};const y=["loaderDefault","loaderLightWithoutText","loaderWithCustomContent"];export{y as __namedExportsOrder,f as default,a as loaderDefault,r as loaderLightWithoutText,o as loaderWithCustomContent};
