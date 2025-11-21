import{K as a,L as n,Q as p,P as u,H as d,I as c,s as y,x as i}from"./iframe-BRJWU34U.js";import"./preload-helper-D9Z9MdNV.js";const t={...c,href:"#",target:"_self",type:"",title:"",metadata:""},g={...d,href:{name:"href",description:"Bepaalt de download link.",table:{type:{summary:n.STRING},category:a.ATTRIBUTES,defaultValue:{summary:t.href}}},target:{name:"target",control:{type:u.SELECT},options:["_blank","_self","_parent","_top","timeline","question"],description:"Bepaalt waar de link geopend wordt. Mogelijke waarden zijn `_blank`, `_self`, `_parent` en `_top`.",table:{type:{summary:p(["_blank","_self","_parent","_top","timeline","question"])},category:a.ATTRIBUTES,defaultValue:{summary:t.target}}},type:{name:"type",table:{type:{summary:n.HTML},category:a.SLOTS,defaultValue:{summary:t.type}}},title:{name:"title",table:{type:{summary:n.HTML},category:a.SLOTS,defaultValue:{summary:t.title}}},metadata:{name:"metadata",table:{type:{summary:n.HTML},category:a.SLOTS,defaultValue:{summary:t.metadata}}}},_={id:"components-block-document",title:"Components - Block/document",tags:["autodocs"],args:t,argTypes:g},e=y(t,({href:s,target:r,type:o,title:l,metadata:m})=>i`
        <vl-document href=${s} target=${r}>
            <span slot="type">${o}</span>
            <span slot="title">${l}</span>
            <span slot="metadata">${m}</span>
        </vl-document>
    `);e.storyName="vl-document - default";e.args={type:"PDF",title:"Hubert en Jan van Eyck, Vlaamse Primitieven",metadata:"PDF - 580 kB"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`story(documentArgs, ({
  href,
  target,
  type,
  title,
  metadata
}) => html\`
        <vl-document href=\${href} target=\${target}>
            <span slot="type">\${type}</span>
            <span slot="title">\${title}</span>
            <span slot="metadata">\${metadata}</span>
        </vl-document>
    \`)`,...e.parameters?.docs?.source}}};const S=["DocumentDefault"];export{e as DocumentDefault,S as __namedExportsOrder,_ as default};
