import{X as p,Z as a,_ as i,W as u,u as d,j as e,C as m,bc as y,s as v,x as h}from"./iframe-CsDE-vVI.js";import"./preload-helper-D9Z9MdNV.js";const g={title:"",source:"",subtitles:"",poster:""},r={...p,...g},f={...u,title:{name:"title",description:"Stelt de titel van de video in.",table:{type:{summary:i.STRING},category:a.ATTRIBUTES,defaultValue:{summary:r.title}}},source:{name:"source",description:"Stelt de bron van de video in.",table:{type:{summary:i.STRING},category:a.ATTRIBUTES,defaultValue:{summary:r.source}}},subtitles:{name:"subtitles",description:"Stelt de bron van de ondertitels in.",table:{type:{summary:i.STRING},category:a.ATTRIBUTES,defaultValue:{summary:r.subtitles}}},poster:{name:"poster",description:"Stelt een afbeelding in die wordt weergegeven totdat de video wordt afgespeeld.",table:{type:{summary:i.STRING},category:a.ATTRIBUTES,defaultValue:{summary:r.poster}}}};function l(o){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components},{FluxComponentMetaData:n}=t;return n||b("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"videoplayer",children:"VideoPlayer"}),`
`,e.jsx(n,{id:"components-block-video-player"}),`
`,e.jsx(t.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(t.p,{children:["Gebruik de ",e.jsx(t.code,{children:"video-player"})," component om een video-player af te beelden.",e.jsx("br",{})]}),`
`,e.jsxs(t.p,{children:["Deze component is de nieuwe versie van het ",e.jsx(t.a,{href:"/docs/elements-video-player--documentatie",children:"vl-video-player"}),` element, we raden aan om op termijn deze versie
te gebruiken.`]}),`
`,e.jsx(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import { VlVideoPlayerComponent } from '@domg-wc/components/block';
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<vl-video-player></vl-video-player>
`})}),`
`,e.jsx(m,{of:s}),`
`,e.jsx(t.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(y,{of:s}),`
`,e.jsx(t.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/componenten/video-player",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - VideoPlayer"})})]})}function x(o={}){const{wrapper:t}={...d(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(l,{...o})}):l(o)}function b(o,t){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}const S={id:"components-block-video-player",title:"Components - Block/video-player",tags:["autodocs"],args:r,argTypes:f,parameters:{docs:{page:x}}},s=v(r,({source:o,subtitles:t,poster:n,title:c})=>h`
        <vl-video-player title=${c} source=${o} subtitles=${t} poster=${n}> </vl-video-player>
    `);s.storyName="vl-video-player - default";s.args={title:"Sprite Fright",source:"https://files.vidstack.io/sprite-fight/720p.mp4",subtitles:"https://files.vidstack.io/sprite-fight/subs/english.vtt",poster:"https://files.vidstack.io/sprite-fight/poster.webp"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story<VideoPlayerArgs>(videoPlayerArgs, ({
  source,
  subtitles,
  poster,
  title
}) => html\`
        <vl-video-player title=\${title} source=\${source} subtitles=\${subtitles} poster=\${poster}> </vl-video-player>
    \`)`,...s.parameters?.docs?.source}}};const V=["VideoPlayerDefault"];export{s as VideoPlayerDefault,V as __namedExportsOrder,S as default};
