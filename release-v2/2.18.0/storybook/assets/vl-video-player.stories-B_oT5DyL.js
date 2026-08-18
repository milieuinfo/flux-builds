import{X as m,Z as r,_ as i,W as u,u as l,j as e,C as y,b8 as v,s as h,x as g}from"./iframe-COmpMQdF.js";import"./preload-helper-D9Z9MdNV.js";const x={title:"",source:"",subtitles:"",poster:"",type:""},o={...m,...x},b={...u,title:{name:"title",description:"Stelt de titel van de video in.",table:{type:{summary:i.STRING},category:r.ATTRIBUTES,defaultValue:{summary:o.title}}},source:{name:"source",description:"Stelt de bron van de video in.",table:{type:{summary:i.STRING},category:r.ATTRIBUTES,defaultValue:{summary:o.source}}},subtitles:{name:"subtitles",description:"Stelt de bron van de ondertitels in.",table:{type:{summary:i.STRING},category:r.ATTRIBUTES,defaultValue:{summary:o.subtitles}}},poster:{name:"poster",description:"Stelt een afbeelding in die wordt weergegeven totdat de video wordt afgespeeld.",table:{type:{summary:i.STRING},category:r.ATTRIBUTES,defaultValue:{summary:o.poster}}},type:{name:"type",description:'Stelt het mediatype (mimetype) van de bron in, bv. "video/mp4". Nodig wanneer de source-URL geen bestandsextensie bevat; anders wordt het type uit de extensie afgeleid.',table:{type:{summary:i.STRING},category:r.ATTRIBUTES,defaultValue:{summary:o.type}}}};function d(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...l(),...n.components},{FluxComponentMetaData:a}=t;return a||j("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"videoplayer",children:"VideoPlayer"}),`
`,e.jsx(a,{id:"components-block-video-player"}),`
`,e.jsx(t.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(t.p,{children:["Gebruik de ",e.jsx(t.code,{children:"video-player"})," component om een video-player af te beelden.",e.jsx("br",{})]}),`
`,e.jsxs(t.p,{children:["Deze component is de nieuwe versie van het ",e.jsx(t.a,{href:"/docs/elements-video-player--documentatie",children:"vl-video-player"}),` element, we raden aan om op termijn deze versie
te gebruiken.`]}),`
`,e.jsx(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import { VlVideoPlayerComponent } from '@domg-wc/components/block';
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<vl-video-player></vl-video-player>
`})}),`
`,e.jsx(y,{of:s}),`
`,e.jsx(t.h2,{id:"mediatype-instellen",children:"Mediatype instellen"}),`
`,e.jsxs(t.p,{children:["Standaard leidt de speler het mediatype af uit de bestandsextensie in de ",e.jsx(t.code,{children:"source"}),"-URL (bv. ",e.jsx(t.code,{children:".mp4"}),`).
Wanneer de bron-URL geen extensie bevat - bijvoorbeeld een download- of API-link zoals
`,e.jsx(t.code,{children:"https://.../stukken/123/download"})," - kan het type niet afgeleid worden. Zet het ",e.jsx(t.code,{children:"type"}),`-attribuut in dat geval
expliciet:`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<vl-video-player source="https://.../stukken/123/download" type="video/mp4"></vl-video-player>
`})}),`
`,e.jsxs(t.p,{children:["Ondersteunde waarden zijn de video-mimetypes van de speler, o.a. ",e.jsx(t.code,{children:"video/mp4"}),", ",e.jsx(t.code,{children:"video/webm"}),", ",e.jsx(t.code,{children:"video/ogg"}),"."]}),`
`,e.jsx(t.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(v,{of:s}),`
`,e.jsx(t.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/componenten/video-player",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - VideoPlayer"})})]})}function f(n={}){const{wrapper:t}={...l(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(d,{...n})}):d(n)}function j(n,t){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const S={id:"components-block-video-player",title:"Components - Block/video-player",tags:["autodocs"],args:o,argTypes:b,parameters:{docs:{page:f}}},s=h(o,({source:n,subtitles:t,poster:a,title:p,type:c})=>g`
        <vl-video-player title=${p} source=${n} subtitles=${t} poster=${a} type=${c}>
        </vl-video-player>
    `);s.storyName="vl-video-player - default";s.args={title:"Sprite Fright",source:"https://files.vidstack.io/sprite-fight/720p.mp4",subtitles:"https://files.vidstack.io/sprite-fight/subs/english.vtt",poster:"https://files.vidstack.io/sprite-fight/poster.webp"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story<VideoPlayerArgs>(videoPlayerArgs, ({
  source,
  subtitles,
  poster,
  title,
  type
}) => html\`
        <vl-video-player title=\${title} source=\${source} subtitles=\${subtitles} poster=\${poster} type=\${type}>
        </vl-video-player>
    \`)`,...s.parameters?.docs?.source}}};const R=["VideoPlayerDefault"];export{s as VideoPlayerDefault,R as __namedExportsOrder,S as default};
