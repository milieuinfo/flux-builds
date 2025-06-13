"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[7889],{"../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(e,t,o)=>{o.d(t,{f:()=>h});var r=o("../../node_modules/react/index.js"),i=o("../../node_modules/react-dom/client.js"),a=new Map,n=({callback:e,children:t})=>{let o=(0,r.useRef)();return(0,r.useLayoutEffect)(()=>{o.current!==e&&(o.current=e,e())},[e]),t},l=async(e,t)=>{let o=await m(t);return new Promise(t=>{o.render(r.createElement(n,{callback:()=>t(null)},e))})},s=(e,t)=>{let o=a.get(e);o&&(o.unmount(),a.delete(e))},m=async e=>{let t=a.get(e);return t||(t=i.createRoot(e),a.set(e,t)),t},c=o("../../node_modules/@storybook/blocks/dist/index.mjs"),d={code:c.XA,a:c.zE,...c.Sw},g=class extends r.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:r.createElement(r.Fragment,null,t)}},h=class{constructor(){this.render=async(e,t,i)=>{let a={...d,...t?.components},n=c.kQ;return new Promise((s,m)=>{o.e(814).then(o.bind(o,"../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:o})=>l(r.createElement(g,{showException:m,key:Math.random()},r.createElement(o,{components:a},r.createElement(n,{context:e,docsParameter:t}))),i)).then(()=>s())})},this.unmount=e=>{s(e)}}}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(e,t,o)=>{o.d(t,{Hl:()=>r.Hl,W8:()=>r.W8,kL:()=>r.kL,ov:()=>r.ov}),o("../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var r=o("../../node_modules/@storybook/blocks/dist/index.mjs")},"../../libs/components/src/next/doormat/stories/vl-doormat.stories.ts":(e,t,o)=>{o.r(t),o.d(t,{DoormatAlt:()=>z,DoormatDefault:()=>S,DoormatGraphic:()=>_,DoormatImage:()=>A,__namedExportsOrder:()=>k,default:()=>w});var r=o("../../libs/common/storybook/src/index.ts"),i=o("../../node_modules/lit-html/lit-html.js"),a=o("../../libs/common/utilities/src/index.ts"),n=o("../../libs/common/utilities/src/css/global-styles-decorator.ts"),l=o("../../libs/common/utilities/src/css/link/link.css.ts");let s={href:"",external:!1,alt:!1,imageSrc:"",imageAlt:"",imageWidth:null,imageHeight:null,graphic:!1};var m=o("../../node_modules/lit/index.js"),c=o("../../node_modules/lit/directives/class-map.js"),d=o("../../libs/common/utilities/src/css/mixin/title.mixin.css.ts");let g="0.5rem",h=(0,m.AH)`
    /* Doormat styles (gebaseerd op DV _doormat.scss) */
    .vl-doormat {
        display: flex;
        position: relative;
        padding: var(--vl-spacing--small) var(--vl-spacing--normal);
        background-color: var(--vl-background-color);
        text-decoration: none;
        border: ${(0,m.iz)("1px")} solid var(--vl-border-color);
        align-items: flex-start;

        &:before,
        .vl-doormat__graphic-wrapper:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            background-color: var(--vl-accent-color);
            width: ${(0,m.iz)(g)};
            height: 100%;
        }

        &:hover,
        &:focus {
            .vl-doormat__title {
                text-decoration: underline;
            }

            .vl-doormat__graphic {
                transform: scale(1.05);
            }
        }

        .vl-doormat__title {
            ${(0,d.D)(5)}
        }

        .vl-doormat__text {
            color: var(--vl-text-color);
            margin-top: var(--vl-spacing--xsmall);
        }

        .vl-doormat__image {
            max-width: 15rem;
            margin-left: var(--vl-spacing--small);
            order: 2;
        }

        &.vl-doormat--alt {
            background-color: var(--vl-background-alt-color);
        }

        &.vl-doormat--graphic {
            flex-direction: column;
        }

        .vl-doormat__graphic-wrapper {
            display: flex;
            position: relative;
            overflow: hidden;
            width: calc(100% + (var(--vl-spacing--normal) + ${(0,m.iz)("1px")}) * 2);
            margin-left: calc(
                (var(--vl-spacing--small) + ${(0,m.iz)(g)} + ${(0,m.iz)("1px")}) * -1
            );
            margin-top: calc((var(--vl-spacing--small) + ${(0,m.iz)("1px")}) * -1);
            margin-bottom: var(--vl-spacing--small);

            &:before {
                background-color: var(--vl-doormat-graphic-border-color);
                width: calc(${(0,m.iz)(g)} + ${(0,m.iz)("1px")});
                z-index: 2;
            }
        }

        .vl-doormat__graphic {
            display: block;
            width: 100%;
            transition: transform 0.2s;
        }
    }
`;class v extends a.jW{static get styles(){return[l.A,h]}static get properties(){return{href:{type:String},external:{type:Boolean},alt:{type:Boolean},imageSrc:{type:String,attribute:"image-src"},imageAlt:{type:String,attribute:"image-alt"},imageWidth:{type:Number,attribute:"image-width"},imageHeight:{type:Number,attribute:"image-height"},graphic:{type:Boolean}}}render(){let e={"vl-doormat":!0,"vl-doormat--alt":this.alt,"vl-doormat--graphic":this.graphic},t=this.external?"_blank":m.s6;return(0,m.qy)`
            <a class=${(0,c.H)(e)} href=${this.href} target=${t}>
                ${this.imageSrc?this.renderImage():m.s6}
                <div class="vl-doormat__content">
                    <h2 class="vl-doormat__title">
                        <slot name="title"></slot>
                    </h2>
                    <div class="vl-doormat__text">
                        <slot name="text"></slot>
                    </div>
                </div>
            </a>
        `}renderImage(){return this.graphic?(0,m.qy)`
                <div class="vl-doormat__graphic-wrapper">
                    <img
                        class="vl-doormat__graphic"
                        src=${this.imageSrc}
                        alt=${this.imageAlt||m.s6}
                        width=${this.imageWidth||m.s6}
                        height=${this.imageHeight||m.s6}
                    />
                </div>
            `:(0,m.qy)`
            <img
                class="vl-doormat__image"
                src=${this.imageSrc}
                alt=${this.imageAlt||m.s6}
                width=${this.imageWidth||m.s6}
                height=${this.imageHeight||m.s6}
            />
        `}constructor(...e){super(...e),this.href=s.href,this.external=s.external,this.alt=s.alt,this.imageSrc=s.imageSrc,this.imageAlt=s.imageAlt,this.imageWidth=s.imageWidth,this.imageHeight=s.imageHeight,this.graphic=s.graphic}}v=function(e,t,o,r){var i,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(n=(a<3?i(n):a>3?i(t,o,n):i(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n}([(0,n.n)(),(0,a.M1)("vl-doormat-next")],v);let f={...r.D8,...s,titleSlot:"",textSlot:""},u={...(0,r.RN)(!0),href:{name:"href",description:"De url waar de link naar verwijst.",table:{type:{summary:r.QE.STRING},category:r.R6.ATTRIBUTES,defaultValue:{summary:f.href}}},external:{name:"external",description:"Opent de link in een nieuw tabblad.",table:{type:{summary:r.QE.BOOLEAN},category:r.R6.ATTRIBUTES,defaultValue:{summary:f.external}}},alt:{name:"alt",description:"Beeldt de doormat af in een alternatieve stijl.",table:{type:{summary:r.QE.BOOLEAN},category:r.R6.ATTRIBUTES,defaultValue:{summary:f.alt}}},imageSrc:{name:"image-src",description:"De url van de afbeelding.",table:{type:{summary:r.QE.STRING},category:r.R6.ATTRIBUTES,defaultValue:{summary:f.imageSrc}}},imageAlt:{name:"image-alt",description:"De alt tekst van de afbeelding.",table:{type:{summary:r.QE.STRING},category:r.R6.ATTRIBUTES,defaultValue:{summary:f.imageAlt}}},imageWidth:{name:"image-width",description:"Past de breedte van de afbeelding aan.<br/>De maximum toegelaten breedte is 150px.<br/>Niet van toepassing als `graphic` op `true` staat.",control:{type:r.VH.NUMBER},table:{type:{summary:r.QE.NUMBER},category:r.R6.ATTRIBUTES,defaultValue:{summary:f.imageWidth}}},imageHeight:{name:"image-height",description:"Past de hoogte van de afbeelding aan.<br/>Niet van toepassing als `graphic` op `true` staat.",control:{type:r.VH.NUMBER},table:{type:{summary:r.QE.NUMBER},category:r.R6.ATTRIBUTES,defaultValue:{summary:f.imageHeight}}},graphic:{name:"graphic",description:"Beeldt de afbeelding af als een graphic.<br/>Zorg ervoor dat de afbeelding die je meegeeft de correcte afmetingen heeft.",table:{type:{summary:r.QE.BOOLEAN},category:r.R6.ATTRIBUTES,defaultValue:{summary:f.graphic}}},titleSlot:{name:"title",description:"De titel van de doormat.",table:{type:{summary:r.QE.HTML},category:r.R6.SLOTS,defaultValue:{summary:f.titleSlot}}},textSlot:{name:"text",description:"De tekst van de doormat.",table:{type:{summary:r.QE.HTML},category:r.R6.SLOTS,defaultValue:{summary:f.textSlot}}}};var p=o("../../node_modules/lit/directives/unsafe-html.js");o("../../node_modules/react/index.js");var x=o("../../node_modules/react/jsx-runtime.js"),b=o("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),$=o("../../node_modules/@storybook/addon-docs/dist/index.mjs");function y(e){let t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",a:"a"},(0,b.RP)(),e.components),{VluxMetaData:o}=t;return o||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VluxMetaData",!0),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(t.h1,{id:"doormat---next",children:"Doormat - next"}),"\n",(0,x.jsx)(o,{id:"components-next-doormat"}),"\n",(0,x.jsxs)(t.p,{children:["Gebruik de ",(0,x.jsx)(t.code,{children:"doormat-next"})," component om een snel en duidelijk overzicht weer te geven van de informatie op je website.",(0,x.jsx)("br",{}),"\nElke doormat krijgt zijn eigen titel, tekst, optionele afbeelding en linkt naar een pagina binnen je website."]}),"\n",(0,x.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,x.jsx)(t.pre,{children:(0,x.jsx)(t.code,{className:"language-js",children:"import { VlDoormatComponent } from '@domg-wc/components/next/doormat';\n"})}),"\n",(0,x.jsx)(t.pre,{children:(0,x.jsx)(t.code,{className:"language-html",children:"<vl-doormat-next></vl-doormat-next>\n"})}),"\n",(0,x.jsx)($.Hl,{of:S}),"\n",(0,x.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,x.jsx)($.ov,{of:S}),"\n",(0,x.jsx)(t.h2,{id:"varianten",children:"Varianten"}),"\n",(0,x.jsx)(t.h3,{id:"alternatieve-stijl",children:"Alternatieve stijl"}),"\n",(0,x.jsx)($.Hl,{of:z}),"\n",(0,x.jsx)(t.h3,{id:"met-afbeelding",children:"Met afbeelding"}),"\n",(0,x.jsx)($.Hl,{of:A}),"\n",(0,x.jsx)(t.h3,{id:"met-grafisch-element",children:"Met grafisch element"}),"\n",(0,x.jsx)($.Hl,{of:_}),"\n",(0,x.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,x.jsx)(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,x.jsx)(t.p,{children:(0,x.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-doormat",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Doormat"})})]})}(0,a.gy)([v]);let w={id:"components-next-doormat",title:"Components-next/doormat",tags:["autodocs"],args:f,argTypes:u,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,b.RP)(),e.components);return t?(0,x.jsx)(t,Object.assign({},e,{children:(0,x.jsx)(y,e)})):y(e)}}}},j=(0,r._7)(f,({href:e,external:t,alt:o,imageSrc:r,imageAlt:a,imageHeight:n,imageWidth:l,graphic:s,textSlot:m,titleSlot:c})=>(0,i.qy)`
            <div class="story--fixed-width">
                <vl-doormat-next
                    href=${e}
                    ?external=${t}
                    ?alt=${o}
                    image-src=${r}
                    image-alt=${a}
                    image-height=${n}
                    image-width=${l}
                    ?graphic=${s}
                >
                    <span slot="title">${(0,p._)(c)}</span>
                    <span slot="text">${(0,p._)(m)}</span>
                </vl-doormat-next>
            </div>
        `),S=j.bind({});S.storyName="vl-doormat-next - default",S.args={href:"https://www.vlaanderen.be/bouwen-wonen-en-energie",titleSlot:"Bouwen, wonen en energie",textSlot:`De overheid zet zich in om betaalbaar en kwaliteitsvol wonen voor iedereen beschikbaar te
                maken. Ze biedt sociale woningen aan, geeft premies aan wie zijn woning verbouwt en
                energiezuinig maakt en zoekt oplossingen om de stijging van de vastgoedprijzen onder controle te
                houden.`};let z=j.bind({});z.storyName="vl-doormat-next - alt",z.args={...S.args,alt:!0};let A=j.bind({});A.storyName="vl-doormat-next - image",A.args={...S.args,imageSrc:"https://picsum.photos/100/150?image=1048",imageAlt:"Bouwen in Brussel"};let _=j.bind({});_.storyName="vl-doormat-next - graphic",_.args={...S.args,imageSrc:"https://picsum.photos/1600/400?image=1048",imageAlt:"Bouwen in Brussel",graphic:!0},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:'story(doormatArgs, ({\n  href,\n  external,\n  alt,\n  imageSrc,\n  imageAlt,\n  imageHeight,\n  imageWidth,\n  graphic,\n  textSlot,\n  titleSlot\n}) => html`\n            <div class="story--fixed-width">\n                <vl-doormat-next\n                    href=${href}\n                    ?external=${external}\n                    ?alt=${alt}\n                    image-src=${imageSrc}\n                    image-alt=${imageAlt}\n                    image-height=${imageHeight}\n                    image-width=${imageWidth}\n                    ?graphic=${graphic}\n                >\n                    <span slot="title">${unsafeHTML(titleSlot)}</span>\n                    <span slot="text">${unsafeHTML(textSlot)}</span>\n                </vl-doormat-next>\n            </div>\n        `)',...S.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:'story(doormatArgs, ({\n  href,\n  external,\n  alt,\n  imageSrc,\n  imageAlt,\n  imageHeight,\n  imageWidth,\n  graphic,\n  textSlot,\n  titleSlot\n}) => html`\n            <div class="story--fixed-width">\n                <vl-doormat-next\n                    href=${href}\n                    ?external=${external}\n                    ?alt=${alt}\n                    image-src=${imageSrc}\n                    image-alt=${imageAlt}\n                    image-height=${imageHeight}\n                    image-width=${imageWidth}\n                    ?graphic=${graphic}\n                >\n                    <span slot="title">${unsafeHTML(titleSlot)}</span>\n                    <span slot="text">${unsafeHTML(textSlot)}</span>\n                </vl-doormat-next>\n            </div>\n        `)',...z.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:'story(doormatArgs, ({\n  href,\n  external,\n  alt,\n  imageSrc,\n  imageAlt,\n  imageHeight,\n  imageWidth,\n  graphic,\n  textSlot,\n  titleSlot\n}) => html`\n            <div class="story--fixed-width">\n                <vl-doormat-next\n                    href=${href}\n                    ?external=${external}\n                    ?alt=${alt}\n                    image-src=${imageSrc}\n                    image-alt=${imageAlt}\n                    image-height=${imageHeight}\n                    image-width=${imageWidth}\n                    ?graphic=${graphic}\n                >\n                    <span slot="title">${unsafeHTML(titleSlot)}</span>\n                    <span slot="text">${unsafeHTML(textSlot)}</span>\n                </vl-doormat-next>\n            </div>\n        `)',...A.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:'story(doormatArgs, ({\n  href,\n  external,\n  alt,\n  imageSrc,\n  imageAlt,\n  imageHeight,\n  imageWidth,\n  graphic,\n  textSlot,\n  titleSlot\n}) => html`\n            <div class="story--fixed-width">\n                <vl-doormat-next\n                    href=${href}\n                    ?external=${external}\n                    ?alt=${alt}\n                    image-src=${imageSrc}\n                    image-alt=${imageAlt}\n                    image-height=${imageHeight}\n                    image-width=${imageWidth}\n                    ?graphic=${graphic}\n                >\n                    <span slot="title">${unsafeHTML(titleSlot)}</span>\n                    <span slot="text">${unsafeHTML(textSlot)}</span>\n                </vl-doormat-next>\n            </div>\n        `)',..._.parameters?.docs?.source}}};let k=["DoormatDefault","DoormatAlt","DoormatImage","DoormatGraphic"]},"../../node_modules/lit/directives/unsafe-html.js":(e,t,o)=>{o.d(t,{_:()=>n});var r=o("../../node_modules/lit-html/lit-html.js"),i=o("../../node_modules/lit-html/directive.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class a extends i.WL{constructor(e){if(super(e),this.et=r.s6,e.type!==i.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===r.s6||null==e)return this.vt=void 0,this.et=e;if(e===r.c0)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;var t=[e];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}}a.directiveName="unsafeHTML",a.resultType=1;var n=(0,i.u$)(a)},"../../node_modules/react-dom/client.js":(e,t,o)=>{var r=o("../../node_modules/react-dom/index.js");t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},"../../libs/common/utilities/src/css/global-styles-decorator.ts":(e,t,o)=>{o.d(t,{n:()=>x});var r=o("../../node_modules/lit/index.js");let i=(0,r.AH)`
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
`,a=(0,r.AH)`
    :root {
        --vl-border-radius: 0.3rem;
    }
`,n=(0,r.AH)`
    :root {
        --vl-spacing--xxsmall: 0.5rem;
        --vl-spacing--xsmall: 1rem;
        --vl-spacing--small: 1.5rem;
        --vl-spacing--normal: 2rem;
        --vl-spacing--medium: 3rem;
        --vl-spacing--large: 6rem;
    }
`;var l="https://cdn.omgeving.vlaanderen.be/domg/govflanders-font/22.0.2",s="FlandersArtSans",m="FlandersArtSerif",c="vlaanderen-icon-classic",d="".concat(l,"/iconfont/").concat(c);let g=(0,r.AH)`
    :root {
        /* Flanders font */
        --vl-font: ${(0,r.iz)(s)}, sans-serif;
        --vl-accent-font: ${(0,r.iz)(m)}, serif;

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
        --vl-icon-font: ${(0,r.iz)(c)};
    }
`,h=(e,t,o,i)=>(0,r.AH)`
    @font-face {
        font-family: ${(0,r.iz)(e)};
        src: url(${(0,r.iz)(`${t}.woff2`)}) format('woff2'),
            url(${(0,r.iz)(`${t}.woff`)}) format('woff');
        font-weight: ${(0,r.iz)(o)};
        font-style: ${(0,r.iz)(i)};
    }
`,v=(0,r.AH)`
    /* Flanders font */
    ${h(s,`${l}/flanders/sans/${s}-Light`,300,"normal")}
    ${h(s,`${l}/flanders/sans/${s}-Regular`,400,"normal")}
    ${h(s,`${l}/flanders/sans/${s}-Medium`,500,"normal")}
    ${h(s,`${l}/flanders/sans/${s}-Bold`,700,"normal")}

    ${h(s,`${l}/flanders/italic/${s}-Light`,300,"italic")}
    ${h(s,`${l}/flanders/italic/${s}-Regular`,400,"italic")}
    ${h(s,`${l}/flanders/italic/${s}-Medium`,500,"italic")}
    ${h(s,`${l}/flanders/italic/${s}-Bold`,700,"italic")}

    ${h(m,`${l}/flanders/serif/${m}-Light`,300,"normal")}
    ${h(m,`${l}/flanders/serif/${m}-Regular`,400,"normal")}
    ${h(m,`${l}/flanders/serif/${m}-Medium`,500,"normal")}
    ${h(m,`${l}/flanders/serif/${m}-Bold`,700,"normal")}

    /* Icon font */
    ${h(c,d,"normal","normal")}
`;var f=o("../../libs/common/utilities/src/css/mixin/media-queries.mixin.css.ts");let u=[i,a,n,g,v,(0,r.AH)`
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

        ${(0,f.i)((0,r.AH)`
                font-size: var(--vl-font-size--mobile);
                line-height: var(--vl-line-height--mobile);
            `)}
    }
`];class p{static{this.registered=!1}static register(){this.registered||(document.adoptedStyleSheets=[...document.adoptedStyleSheets,...u.map(e=>e.styleSheet)],this.registered=!0,console.log("RegisterGlobalStyles: global styling toegevoegd aan het document"))}}let x=()=>e=>{p.register()}},"../../libs/common/utilities/src/css/link/link.css.ts":(e,t,o)=>{o.d(t,{A:()=>n});var r=o("../../node_modules/lit/index.js"),i=o("../../libs/common/utilities/src/css/mixin/outline.mixin.css.ts"),a=o("../../libs/common/utilities/src/css/mixin/media-queries.mixin.css.ts");let n=(0,r.AH)`
    a {
        /* Reset styles (gebaseerd op DV _reset.scss) */
        margin: 0;
        border: 0;
        padding: 0;

        /* Link styles (gebaseerd op DV _anchor.scss en _link.scss) */
        display: inline-flex;
        align-items: center;
        word-break: break-word;
        color: var(--vl-action-color);

        &:hover {
            color: var(--vl-action-color--hover);
            text-decoration: none;
        }

        &:focus {
            ${(0,i.H)()}
        }

        &:focus,
        &:active {
            color: var(--vl-action-color--active);
        }

        &:visited {
            color: var(--vl-action-color--visited);
        }

        &.bold {
            font-weight: 500;
            text-decoration: none;

            &:hover,
            &:focus,
            &:active {
                text-decoration: underline;
            }
        }

        &.small {
            font-size: var(--vl-font-size--small);

            ${(0,a.i)((0,r.AH)`
                    font-size: calc(var(--vl-font-size--small) - 0.1rem);
                `)}
        }

        &.large {
            font-size: var(--vl-font-size--large);

            ${(0,a.i)((0,r.AH)`
                    font-size: calc(var(--vl-font-size--large) - 0.2rem);
                `)}
        }

        &.error {
            color: var(--vl-error-color);

            &:hover,
            &:focus,
            &:active,
            &:visited {
                color: var(--vl-error-color--hover);
            }
        }

        /* Icon styles */
        .vl-icon {
            &:before {
                display: inline-block;
                text-decoration: none;
            }

            &.vl-icon--before {
                margin-right: 0.4rem;
            }

            &.vl-icon--after {
                margin-left: 0.4rem;
            }

            &.vl-icon--external {
                color: var(--vl-light-text-color);
            }
        }

        &:hover,
        &:focus,
        &:active {
            .vl-icon.vl-icon--external {
                color: var(--vl-light-text-color);
            }
        }

        &:visited .vl-icon {
            /* Moet op deze manier gedefinieerd worden of de styles werken niet, visited doet raar. */
            color: var(--vl-action-color--visited);
        }

        &:visited .vl-icon.vl-icon--external {
            /* Moet op deze manier gedefinieerd worden of de styles werken niet, visited doet raar. */
            color: var(--vl-light-text-color);
        }

        &.error:visited .vl-icon {
            /* Moet op deze manier gedefinieerd worden of de styles werken niet, visited doet raar. */
            color: var(--vl-error-color--hover);
        }

        &.error:visited .vl-icon.vl-icon--external {
            /* Moet op deze manier gedefinieerd worden of de styles werken niet, visited doet raar. */
            color: var(--vl-light-text-color);
        }
    }
`},"../../libs/common/utilities/src/css/mixin/media-queries.mixin.css.ts":(e,t,o)=>{o.d(t,{M:()=>a,i:()=>i});var r=o("../../node_modules/lit/index.js");let i=e=>(0,r.AH)`
    @media screen and (max-width: 767px) {
        ${e}
    }
`,a=e=>(0,r.AH)`
    @media screen and (max-width: 1023px) {
        ${e}
    }
`},"../../libs/common/utilities/src/css/mixin/outline.mixin.css.ts":(e,t,o)=>{o.d(t,{H:()=>i});var r=o("../../node_modules/lit/index.js");let i=()=>(0,r.AH)`
    box-shadow: none;
    outline: 3px solid var(--vl-focus-color);
    outline-offset: 2px;
`},"../../libs/common/utilities/src/css/mixin/title.mixin.css.ts":(e,t,o)=>{o.d(t,{D:()=>n});var r=o("../../node_modules/lit/index.js"),i=o("../../libs/common/utilities/src/css/mixin/media-queries.mixin.css.ts");let a={1:(0,r.AH)`
        font-size: 4.4rem;
        margin-bottom: 6rem;
        line-height: 1.18;

        ${(0,i.M)((0,r.AH)`
                font-size: 4rem;
                margin-bottom: 4.5rem;
            `)}

        ${(0,i.i)((0,r.AH)`
                font-size: 3rem;
                margin-bottom: 3rem;
            `)}
    `,2:(0,r.AH)`
        font-size: 3.2rem;
        margin-bottom: 2rem;
        line-height: 1.24;

        ${(0,i.i)((0,r.AH)`
                font-size: 2.6rem;
                margin-bottom: 1.5rem;
            `)}
    `,3:(0,r.AH)`
        font-size: 2.6rem;
        margin-bottom: 2rem;
        line-height: 1.3;

        ${(0,i.i)((0,r.AH)`
                font-size: 2.2rem;
                margin-bottom: 1.5rem;
            `)}
    `,4:(0,r.AH)`
        font-size: 2.2rem;
        margin-bottom: 1.8rem;
        line-height: 1.36;

        ${(0,i.i)((0,r.AH)`
                font-size: 2rem;
                margin-bottom: 1.4rem;
            `)}
    `,5:(0,r.AH)`
        font-size: 2rem;
        margin-bottom: 1.6rem;
        line-height: 1.4;

        ${(0,i.i)((0,r.AH)`
                font-size: 1.8rem;
                margin-bottom: 1.2rem;
            `)}
    `,6:(0,r.AH)`
        font-size: 1.8rem;
        margin-bottom: 1.4rem;
        line-height: 1.44;

        ${(0,i.i)((0,r.AH)`
                font-size: 1.8rem;
                margin-bottom: 1rem;
            `)}
    `},n=e=>(0,r.AH)`
    /* Reset styles (gebaseerd op DV _reset.scss) */
    margin: 0;
    border: 0;
    padding: 0;
    vertical-align: baseline;

    /* Title styles (gebaseerd op DV vl-ui-titles/src/scss/_titles.scss) */
    font-weight: 500;
    ${a[e]}
`}}]);