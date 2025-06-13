"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[9469],{"../../libs/components/src/next/video-player/stories/vl-video-player.stories.ts":(e,t,o)=>{o.r(t),o.d(t,{VideoPlayerDefault:()=>$,__namedExportsOrder:()=>k,default:()=>x});var l=o("../../libs/common/storybook/src/index.ts"),r=o("../../node_modules/lit-html/lit-html.js"),i=o("../../libs/common/utilities/src/index.ts"),s=o("../../libs/common/utilities/src/css/global-styles-decorator.ts"),n=o("../../node_modules/lit/index.js"),a=o("../../node_modules/vidstack/prod/global/vidstack-player.js"),d=o("../../node_modules/raw-loader/dist/cjs.js!../../node_modules/vidstack/player/styles/base.css"),c=o("../../node_modules/raw-loader/dist/cjs.js!../../node_modules/vidstack/player/styles/plyr/theme.css");let m=[(0,n.AH)`
        ${(0,n.iz)(d.A)}
    `,(0,n.AH)`
        ${(0,n.iz)(c.A)}
    `,(0,n.AH)`
        :host {
            --plyr-color-main: var(--vl-action-color);

            --plyr-font-family: inherit;

            --plyr-control-spacing: 15px;

            --plyr-tooltip-bg: var(--vl-page-bg);
            --plyr-tooltip-color: var(--vl-text-color);
            --plyr-tooltip-padding: 3px;
            --plyr-tooltip-arrow-size: 6px;
            --plyr-tooltip-radius: 0;
        }

        .plyr__control {
            border-radius: var(--vl-border-radius);
        }

        .plyr > .plyr__control {
            padding: 15px 2rem;
        }

        .plyr .plyr__slider__track {
            background-image: linear-gradient(
                to right,
                var(--vl-accent-color) var(--value, 0%),
                transparent var(--value, 0%)
            );
        }

        .plyr media-menu-button {
            display: none;
        }
    `],v={"Caption Styles":"Ondertitelstijlen","Captions look like this":"Ondertitels zien er zo uit","Disable captions":"Ondertitels uitzetten","Enable captions":"Ondertitels aanzetten","Display Background":"Achtergrond weergeven","Enter Fullscreen":"Volledig scherm","Enter PiP":"Picture-in-Picture activeren","Exit Fullscreen":"Volledig scherm verlaten","Exit PiP":"Picture-in-Picture verlaten","Google Cast":"Google Cast","Keyboard Animations":"Toetsenbordanimaties","Seek Backward":"Achteruit zoeken","Seek Forward":"Vooruit zoeken","Skip To Live":"Naar live overslaan","Text Background":"Tekstachtergrond",Accessibility:"Toegankelijkheid",AirPlay:"AirPlay",Announcements:"Aankondigingen",Audio:"Audio",Auto:"Automatisch",Boost:"Boost",Captions:"Ondertitels",Chapters:"Hoofdstukken",Color:"Kleur",Connected:"Verbonden",Connecting:"Verbinden",Continue:"Doorgaan",Default:"Standaard",Disabled:"Uitgeschakeld",Disconnected:"Verbroken",Download:"Downloaden",Family:"Familie",Font:"Lettertype",Fullscreen:"Volledig scherm",LIVE:"LIVE",Loop:"Herhalen",Mute:"Dempen",Normal:"Normaal",Off:"Uit",Opacity:"Dekking",Pause:"Pauzeren",PiP:"Picture in Picture-modus",Play:"Afspelen",Playback:"Afspelen",Quality:"Kwaliteit",Replay:"Opnieuw afspelen",Reset:"Herstellen",Seek:"Zoeken",Settings:"Instellingen",Shadow:"Schaduw",Size:"Grootte",Speed:"Snelheid",Text:"Tekst",Track:"Track",Unmute:"Dempen opheffen",Volume:"Volume"};class p extends i.jW{static get styles(){return[...m]}static get properties(){return{title:{type:String},poster:{type:String},source:{type:String},subtitles:{type:String}}}async firstUpdated(e){super.firstUpdated(e);let t={src:this.subtitles,label:"Nederlands",language:"nl-BE",kind:"subtitles",default:!0},o=this.shadowRoot?.querySelector("video");o&&(this.playerInstance=await a.FA.create({target:o,title:this.title,src:this.source,poster:this.poster,layout:new a.AP({translations:v,clickToPlay:!0})}),this.playerInstance?.textTracks.add(t))}render(){return(0,n.qy)`
            <div>
                <video controls crossorigin playsinline></video>
            </div>
        `}}p=function(e,t,o,l){var r,i=arguments.length,s=i<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,o):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,l);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(s=(i<3?r(s):i>3?r(t,o,s):r(t,o))||s);return i>3&&s&&Object.defineProperty(t,o,s),s}([(0,s.n)(),(0,i.M1)("vl-video-player-next")],p);let u={...l.D8,title:"",source:"",subtitles:"",poster:""},f={...(0,l.RN)(!0),title:{name:"title",description:"Stelt de titel van de video in.",table:{type:{summary:l.QE.STRING},category:l.R6.ATTRIBUTES,defaultValue:{summary:u.title}}},source:{name:"source",description:"Stelt de bron van de video in.",table:{type:{summary:l.QE.STRING},category:l.R6.ATTRIBUTES,defaultValue:{summary:u.source}}},subtitles:{name:"subtitles",description:"Stelt de bron van de ondertitels in.",table:{type:{summary:l.QE.STRING},category:l.R6.ATTRIBUTES,defaultValue:{summary:u.subtitles}}},poster:{name:"poster",description:"Stelt een afbeelding in die wordt weergegeven totdat de video wordt afgespeeld.",table:{type:{summary:l.QE.STRING},category:l.R6.ATTRIBUTES,defaultValue:{summary:u.poster}}}};o("../../node_modules/react/index.js");var g=o("../../node_modules/react/jsx-runtime.js"),y=o("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),h=o("../../node_modules/@storybook/blocks/dist/index.mjs");function b(e){let t=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",h3:"h3"},(0,y.RP)(),e.components),{VluxMetaData:o}=t;return o||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VluxMetaData",!0),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(t.h1,{id:"videoplayer---next",children:"VideoPlayer - next"}),"\n",(0,g.jsx)(o,{id:"components-next-video-player"}),"\n",(0,g.jsxs)(t.p,{children:["Gebruik de ",(0,g.jsx)(t.code,{children:"video-player-next"})," component om een video-player af te beelden.",(0,g.jsx)("br",{})]}),"\n",(0,g.jsxs)(t.p,{children:["Deze component is de nieuwe versie van het ",(0,g.jsx)(t.a,{href:"/docs/elements-video-player--documentatie",children:"vl-video-player"})," element, we raden aan om op termijn deze versie te gebruiken."]}),"\n",(0,g.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:"language-js",children:"import { VlVideoPlayerComponent } from '@domg-wc/components/next/video-player';\n"})}),"\n",(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:"language-html",children:"<vl-video-player-next></vl-video-player-next>\n"})}),"\n",(0,g.jsx)(h.Hl,{of:$}),"\n",(0,g.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,g.jsx)(h.ov,{of:$}),"\n",(0,g.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,g.jsx)(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,g.jsx)(t.p,{children:(0,g.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/atoms/vl-ui-video-players",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - VideoPlayer"})})]})}let x={id:"components-next-video-player",title:"Components-next/video-player",tags:["autodocs"],args:u,argTypes:f,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,y.RP)(),e.components);return t?(0,g.jsx)(t,Object.assign({},e,{children:(0,g.jsx)(b,e)})):b(e)}}}},$=(0,l._7)(u,({source:e,subtitles:t,poster:o,title:l})=>(0,r.qy)`
        <vl-video-player-next title=${l} source=${e} subtitles=${t} poster=${o}>
        </vl-video-player-next>
    `);$.storyName="vl-video-player-next - default",$.args={title:"Sprite Fright",source:"https://files.vidstack.io/sprite-fight/720p.mp4",subtitles:"https://files.vidstack.io/sprite-fight/subs/english.vtt",poster:"https://files.vidstack.io/sprite-fight/poster.webp"},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:"story<VideoPlayerArgs>(videoPlayerArgs, ({\n  source,\n  subtitles,\n  poster,\n  title\n}) => html`\n        <vl-video-player-next title=${title} source=${source} subtitles=${subtitles} poster=${poster}>\n        </vl-video-player-next>\n    `)",...$.parameters?.docs?.source}}};let k=["VideoPlayerDefault"]},"../../libs/common/utilities/src/css/global-styles-decorator.ts":(e,t,o)=>{o.d(t,{n:()=>h});var l=o("../../node_modules/lit/index.js");let r=(0,l.AH)`
    :root {
        --vl-white: #ffffff;

        --vl-background-color: var(--vl-white);
        --vl-map-background-color: #ffffff;
        --vl-background-alt-color: #f7f9fc;
        --vl-accent-color: #ffe615;

        --vl-text-color: #333332;
        --vl-text-alt-color: #687483;
        --vl-light-text-color: #8695a8;

        --vl-border-color: #cbd2da;
        --vl-alt-border-color: #8695a8;
        --vl-doormat-graphic-border-color: #33333233;

        --vl-action-color: #0055cc;
        --vl-action-color--hover: #003bb0;
        --vl-action-color--active: #004099; /* --vl-action-color 10% darker */
        --vl-action-color--visited: #660599;
        --vl-action-color--disabled: #687483;
        --vl-action-background-color--disabled: #cbd2d9;

        --vl-action-tertiary-color: var(--vl-action-color); /* --vl-action-color */
        --vl-action-tertiary-color--hover: var(--vl-action-color); /* --vl-action-color */
        --vl-action-tertiary-border-color: #c6cdd3;
        --vl-action-tertiary-border-color--hover: #5990de;

        --vl-error-color: #d2373c;
        --vl-error-color--hover: #aa2729;

        --vl-focus-color: #0055cca6; /* --vl-action-color 65% opacity */

        --vl-label-color: #687483;
    }
`,i=(0,l.AH)`
    :root {
        --vl-border-radius: 0.3rem;
    }
`,s=(0,l.AH)`
    :root {
        --vl-spacing--xxsmall: 0.5rem;
        --vl-spacing--xsmall: 1rem;
        --vl-spacing--small: 1.5rem;
        --vl-spacing--normal: 2rem;
        --vl-spacing--medium: 3rem;
        --vl-spacing--large: 6rem;
    }
`;var n="https://cdn.omgeving.vlaanderen.be/domg/govflanders-font/22.0.2",a="FlandersArtSans",d="FlandersArtSerif",c="vlaanderen-icon-classic",m="".concat(n,"/iconfont/").concat(c);let v=(0,l.AH)`
    :root {
        /* Flanders font */
        --vl-font: ${(0,l.iz)(a)}, sans-serif;
        --vl-accent-font: ${(0,l.iz)(d)}, serif;

        --vl-font-size--xxlarge: 2.8rem; /* DV: $vl-base-font-size--xxlarge */
        --vl-font-size--xlarge: 2.2rem; /* DV: $vl-base-font-size--xlarge */
        --vl-font-size--large: 2rem; /* DV: $vl-base-font-size--large */
        --vl-font-size: 1.8rem; /* DV: $vl-base-font-size */
        --vl-font-size--mobile: 1.6rem; /* DV: $vl-base-mobile-font-size */
        --vl-font-size--small: 1.6rem; /* DV: $vl-base-font-size--small */
        --vl-font-size--xsmall: 1.4rem; /* DV: $vl-base-font-size--xsmall */
        --vl-font-size--xxsmall: 1.2rem; /* DV: $vl-base-font-size--xxsmall */

        --vl-line-height: 1.5; /* DV: $vl-base-line-height */
        --vl-line-height--mobile: 1.33; /* DV: $vl-base-mobile-line-height */

        /* Icon font */
        --vl-icon-font: ${(0,l.iz)(c)};
    }
`,p=(e,t,o,r)=>(0,l.AH)`
    @font-face {
        font-family: ${(0,l.iz)(e)};
        src: url(${(0,l.iz)(`${t}.woff2`)}) format('woff2'),
            url(${(0,l.iz)(`${t}.woff`)}) format('woff');
        font-weight: ${(0,l.iz)(o)};
        font-style: ${(0,l.iz)(r)};
    }
`,u=(0,l.AH)`
    /* Flanders font */
    ${p(a,`${n}/flanders/sans/${a}-Light`,300,"normal")}
    ${p(a,`${n}/flanders/sans/${a}-Regular`,400,"normal")}
    ${p(a,`${n}/flanders/sans/${a}-Medium`,500,"normal")}
    ${p(a,`${n}/flanders/sans/${a}-Bold`,700,"normal")}

    ${p(a,`${n}/flanders/italic/${a}-Light`,300,"italic")}
    ${p(a,`${n}/flanders/italic/${a}-Regular`,400,"italic")}
    ${p(a,`${n}/flanders/italic/${a}-Medium`,500,"italic")}
    ${p(a,`${n}/flanders/italic/${a}-Bold`,700,"italic")}

    ${p(d,`${n}/flanders/serif/${d}-Light`,300,"normal")}
    ${p(d,`${n}/flanders/serif/${d}-Regular`,400,"normal")}
    ${p(d,`${n}/flanders/serif/${d}-Medium`,500,"normal")}
    ${p(d,`${n}/flanders/serif/${d}-Bold`,700,"normal")}

    /* Icon font */
    ${p(c,m,"normal","normal")}
`;var f=o("../../libs/common/utilities/src/css/mixin/media-queries.mixin.css.ts");let g=[r,i,s,v,u,(0,l.AH)`
    html {
        font-family: var(--vl-font);
        /* 62.5% Font Size Trick  */
        font-size: 62.5%;
    }

    body {
        font-size: var(--vl-font-size);
        line-height: var(--vl-line-height);
        color: var(--vl-text-color);

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: none;

        ${(0,f.i)((0,l.AH)`
                font-size: var(--vl-font-size--mobile);
                line-height: var(--vl-line-height--mobile);
            `)}
    }
`];class y{static{this.registered=!1}static register(){this.registered||(document.adoptedStyleSheets=[...document.adoptedStyleSheets,...g.map(e=>e.styleSheet)],this.registered=!0,console.log("RegisterGlobalStyles: global styling toegevoegd aan het document"))}}let h=()=>e=>{y.register()}},"../../libs/common/utilities/src/css/mixin/media-queries.mixin.css.ts":(e,t,o)=>{o.d(t,{M:()=>i,i:()=>r});var l=o("../../node_modules/lit/index.js");let r=e=>(0,l.AH)`
    @media screen and (max-width: 767px) {
        ${e}
    }
`,i=e=>(0,l.AH)`
    @media screen and (max-width: 1023px) {
        ${e}
    }
`}}]);