import{O as n,P as i,x as s}from"./iframe-iHJvAyUB.js";import"./preload-helper-D9Z9MdNV.js";const d={...i,light:!1,text:"Pagina is aan het laden",single:!1},g={...n,light:{name:"light",description:"Attribute is used to obtain an alternative rendering in combination with a dark background. ",table:{type:{summary:"boolean"},category:"Attributes",defaultValue:{summary:"false"}}},text:{name:"text",description:"Attribute is used to display an informative text during loading. ",table:{type:{summary:"string"},category:"Attributes",defaultValue:{summary:""}}},single:{name:"single",description:"Attribute is used to indicate that no text should be displayed. ",table:{type:{summary:"boolean"},category:"Attributes",defaultValue:{summary:"false"}}}},m={id:"components-block-loader",title:"Components - Block/loader",tags:["autodocs"],args:d,argTypes:g},o=({light:a,text:l,single:r})=>s`
    <vl-loader ?light=${a} text=${l} ?single=${r} data-cy="loader"></vl-loader>
`;o.storyName="vl-loader - default";const t=({light:a,text:l,single:r})=>s`
    <div class="vl-section" style="background: #b7b7b7">
        <vl-loader ?light=${a} text=${l} ?single=${r} data-cy="loader-light-without-text"></vl-loader>
    </div>
`;t.storyName="vl-loader - light without text";t.args={light:!0,single:!0};const e=({light:a,single:l})=>s`
    <vl-loader ?light=${a} ?single=${l} data-cy="loader-with-custom-content">
        <span><strong>Informatie</strong> is aan het laden</span>
    </vl-loader>
`;e.storyName="vl-loader - with custom content";e.argTypes={text:{control:{disable:!0}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  light,
  text,
  single
}: typeof loaderArgs) => html\`
    <vl-loader ?light=\${light} text=\${text} ?single=\${single} data-cy="loader"></vl-loader>
\``,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  light,
  text,
  single
}: typeof loaderArgs) => html\`
    <div class="vl-section" style="background: #b7b7b7">
        <vl-loader ?light=\${light} text=\${text} ?single=\${single} data-cy="loader-light-without-text"></vl-loader>
    </div>
\``,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  light,
  single
}: typeof loaderArgs) => html\`
    <vl-loader ?light=\${light} ?single=\${single} data-cy="loader-with-custom-content">
        <span><strong>Informatie</strong> is aan het laden</span>
    </vl-loader>
\``,...e.parameters?.docs?.source}}};const h=["loaderDefault","loaderLightWithoutText","loaderWithCustomContent"];export{h as __namedExportsOrder,m as default,o as loaderDefault,t as loaderLightWithoutText,e as loaderWithCustomContent};
