import{I as p,K as i,L as n,H as u,u as d,j as e,C as m,bd as y,s as v,x as h}from"./iframe-Ds54rb_7.js";import"./preload-helper-D9Z9MdNV.js";const g={title:"",source:"",subtitles:"",poster:""},o={...p,...g},f={...u,title:{name:"title",description:"Stelt de titel van de video in.",table:{type:{summary:n.STRING},category:i.ATTRIBUTES,defaultValue:{summary:o.title}}},source:{name:"source",description:"Stelt de bron van de video in.",table:{type:{summary:n.STRING},category:i.ATTRIBUTES,defaultValue:{summary:o.source}}},subtitles:{name:"subtitles",description:"Stelt de bron van de ondertitels in.",table:{type:{summary:n.STRING},category:i.ATTRIBUTES,defaultValue:{summary:o.subtitles}}},poster:{name:"poster",description:"Stelt een afbeelding in die wordt weergegeven totdat de video wordt afgespeeld.",table:{type:{summary:n.STRING},category:i.ATTRIBUTES,defaultValue:{summary:o.poster}}}};function l(r){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...r.components},{FluxMetaData:a}=t;return a||b("FluxMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"videoplayer",children:"VideoPlayer"}),`
`,e.jsx(a,{id:"components-block-video-player"}),`
`,e.jsxs(t.p,{children:["Gebruik de ",e.jsx(t.code,{children:"video-player"})," component om een video-player af te beelden.",e.jsx("br",{})]}),`
`,e.jsxs(t.p,{children:["Deze component is de nieuwe versie van het ",e.jsx(t.a,{href:"/docs/elements-video-player--documentatie",children:"vl-video-player"})," element, we raden aan om op termijn deze versie te gebruiken."]}),`
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
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/atoms/vl-ui-video-players",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - VideoPlayer"})})]})}function x(r={}){const{wrapper:t}={...d(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(l,{...r})}):l(r)}function b(r,t){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}const S={id:"components-block-video-player",title:"Components - Block/video-player",tags:["autodocs"],args:o,argTypes:f,parameters:{docs:{page:x}}},s=v(o,({source:r,subtitles:t,poster:a,title:c})=>h`
        <vl-video-player title=${c} source=${r} subtitles=${t} poster=${a}> </vl-video-player>
    `);s.storyName="vl-video-player - default";s.args={title:"Sprite Fright",source:"https://files.vidstack.io/sprite-fight/720p.mp4",subtitles:"https://files.vidstack.io/sprite-fight/subs/english.vtt",poster:"https://files.vidstack.io/sprite-fight/poster.webp"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story<VideoPlayerArgs>(videoPlayerArgs, ({
  source,
  subtitles,
  poster,
  title
}) => html\`
        <vl-video-player title=\${title} source=\${source} subtitles=\${subtitles} poster=\${poster}> </vl-video-player>
    \`)`,...s.parameters?.docs?.source}}};const V=["VideoPlayerDefault"];export{s as VideoPlayerDefault,V as __namedExportsOrder,S as default};
