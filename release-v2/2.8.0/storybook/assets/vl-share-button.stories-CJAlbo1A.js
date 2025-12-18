import{Q as o,P as a,H as n,b9 as e,I as u,x as h}from"./iframe-BQb9mjVp.js";import"./preload-helper-D9Z9MdNV.js";const i={...u,href:"#",medium:e.FACEBOOK},m={...n,medium:{name:"medium",control:{type:a.SELECT},options:Object.values(e),description:"This attribute is used to pass the medium.",table:{type:{summary:o(Object.values(e))}}},href:{type:"string",description:"The href attribute specifies the link's destination."}},p={id:"components-block-share-buttons-share-button",title:"Components - Block/share-buttons/share-button",tags:["autodocs"],args:i,argTypes:m},t=({href:s,medium:r})=>h` <vl-share-buttons>
        <vl-share-button href=${s} medium=${r}></vl-share-button>
    </vl-share-buttons>`;t.storyName="vl-share-button - default";t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  href,
  medium
}: typeof shareButtonArgs) => html\` <vl-share-buttons>
        <vl-share-button href=\${href} medium=\${medium}></vl-share-button>
    </vl-share-buttons>\``,...t.parameters?.docs?.source}}};const c=["shareButtonDefault"];export{c as __namedExportsOrder,p as default,t as shareButtonDefault};
