"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[7889],{"../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(e,t,a)=>{a.d(t,{f:()=>h});var r=a("../../node_modules/react/index.js"),n=a("../../node_modules/react-dom/client.js"),o=new Map,i=({callback:e,children:t})=>{let a=(0,r.useRef)();return(0,r.useLayoutEffect)(()=>{a.current!==e&&(a.current=e,e())},[e]),t},s=async(e,t)=>{let a=await d(t);return new Promise(t=>{a.render(r.createElement(i,{callback:()=>t(null)},e))})},l=(e,t)=>{let a=o.get(e);a&&(a.unmount(),o.delete(e))},d=async e=>{let t=o.get(e);return t||(t=n.createRoot(e),o.set(e,t)),t},m=a("../../node_modules/@storybook/blocks/dist/index.mjs"),c={code:m.XA,a:m.zE,...m.Sw},g=class extends r.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:r.createElement(r.Fragment,null,t)}},h=class{constructor(){this.render=async(e,t,n)=>{let o={...c,...t?.components},i=m.kQ;return new Promise((l,d)=>{a.e(814).then(a.bind(a,"../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:a})=>s(r.createElement(g,{showException:d,key:Math.random()},r.createElement(a,{components:o},r.createElement(i,{context:e,docsParameter:t}))),n)).then(()=>l())})},this.unmount=e=>{l(e)}}}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(e,t,a)=>{a.d(t,{Hl:()=>r.Hl,W8:()=>r.W8,kL:()=>r.kL,ov:()=>r.ov}),a("../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var r=a("../../node_modules/@storybook/blocks/dist/index.mjs")},"../../libs/components/src/next/doormat/stories/vl-doormat.stories.ts":(e,t,a)=>{a.r(t),a.d(t,{DoormatAlt:()=>S,DoormatDefault:()=>j,DoormatGraphic:()=>_,DoormatImage:()=>w,__namedExportsOrder:()=>k,default:()=>y});var r=a("../../libs/common/storybook/src/index.ts"),n=a("../../node_modules/lit-html/lit-html.js"),o=a("../../libs/common/utilities/src/index.ts"),i=a("../../libs/common/utilities/src/css/index.ts");let s={href:"",external:!1,alt:!1,imageSrc:"",imageAlt:"",imageWidth:null,imageHeight:null,graphic:!1};var l=a("../../node_modules/lit/index.js"),d=a("../../node_modules/lit/directives/class-map.js");let m="0.5rem",c=(0,l.AH)`
    /* Doormat styles (gebaseerd op DV _doormat.scss) */
    .vl-doormat {
        display: flex;
        position: relative;
        padding: var(--vl-spacing--small) var(--vl-spacing--normal);
        background-color: var(--vl-background-color);
        text-decoration: none;
        border: ${(0,l.iz)("1px")} solid var(--vl-border-color);
        align-items: flex-start;

        &:before,
        .vl-doormat__graphic-wrapper:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            background-color: var(--vl-accent-color);
            width: ${(0,l.iz)(m)};
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
            ${i.Qw}
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
            width: calc(100% + (var(--vl-spacing--normal) + ${(0,l.iz)("1px")}) * 2);
            margin-left: calc(
                (var(--vl-spacing--small) + ${(0,l.iz)(m)} + ${(0,l.iz)("1px")}) * -1
            );
            margin-top: calc((var(--vl-spacing--small) + ${(0,l.iz)("1px")}) * -1);
            margin-bottom: var(--vl-spacing--small);

            &:before {
                background-color: var(--vl-doormat-graphic-border-color);
                width: calc(${(0,l.iz)(m)} + ${(0,l.iz)("1px")});
                z-index: 2;
            }
        }

        .vl-doormat__graphic {
            display: block;
            width: 100%;
            transition: transform 0.2s;
        }
    }
`;class g extends o.jW{static get styles(){return[(0,i.L3)(),c]}static get properties(){return{href:{type:String},external:{type:Boolean},alt:{type:Boolean},imageSrc:{type:String,attribute:"image-src"},imageAlt:{type:String,attribute:"image-alt"},imageWidth:{type:Number,attribute:"image-width"},imageHeight:{type:Number,attribute:"image-height"},graphic:{type:Boolean}}}render(){let e={"vl-doormat":!0,"vl-doormat--alt":this.alt,"vl-doormat--graphic":this.graphic},t=this.external?"_blank":l.s6;return(0,l.qy)`
            <a class=${(0,d.H)(e)} href=${this.href} target=${t}>
                ${this.imageSrc?this.renderImage():l.s6}
                <div class="vl-doormat__content">
                    <h2 class="vl-doormat__title">
                        <slot name="title"></slot>
                    </h2>
                    <div class="vl-doormat__text">
                        <slot name="text"></slot>
                    </div>
                </div>
            </a>
        `}renderImage(){return this.graphic?(0,l.qy)`
                <div class="vl-doormat__graphic-wrapper">
                    <img
                        class="vl-doormat__graphic"
                        src=${this.imageSrc}
                        alt=${this.imageAlt||l.s6}
                        width=${this.imageWidth||l.s6}
                        height=${this.imageHeight||l.s6}
                    />
                </div>
            `:(0,l.qy)`
            <img
                class="vl-doormat__image"
                src=${this.imageSrc}
                alt=${this.imageAlt||l.s6}
                width=${this.imageWidth||l.s6}
                height=${this.imageHeight||l.s6}
            />
        `}constructor(...e){super(...e),this.href=s.href,this.external=s.external,this.alt=s.alt,this.imageSrc=s.imageSrc,this.imageAlt=s.imageAlt,this.imageWidth=s.imageWidth,this.imageHeight=s.imageHeight,this.graphic=s.graphic}}g=function(e,t,a,r){var n,o=arguments.length,i=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(i=(o<3?n(i):o>3?n(t,a,i):n(t,a))||i);return o>3&&i&&Object.defineProperty(t,a,i),i}([(0,o.M1)("vl-doormat-next")],g);let h={...r.D8,...s,titleSlot:"",textSlot:""},p={...(0,r.RN)(!0),href:{name:"href",description:"De url waar de link naar verwijst.",table:{type:{summary:r.QE.STRING},category:r.R6.ATTRIBUTES,defaultValue:{summary:h.href}}},external:{name:"external",description:"Opent de link in een nieuw tabblad.",table:{type:{summary:r.QE.BOOLEAN},category:r.R6.ATTRIBUTES,defaultValue:{summary:h.external}}},alt:{name:"alt",description:"Beeldt de doormat af in een alternatieve stijl.",table:{type:{summary:r.QE.BOOLEAN},category:r.R6.ATTRIBUTES,defaultValue:{summary:h.alt}}},imageSrc:{name:"image-src",description:"De url van de afbeelding.",table:{type:{summary:r.QE.STRING},category:r.R6.ATTRIBUTES,defaultValue:{summary:h.imageSrc}}},imageAlt:{name:"image-alt",description:"De alt tekst van de afbeelding.",table:{type:{summary:r.QE.STRING},category:r.R6.ATTRIBUTES,defaultValue:{summary:h.imageAlt}}},imageWidth:{name:"image-width",description:"Past de breedte van de afbeelding aan.<br/>De maximum toegelaten breedte is 150px.<br/>Niet van toepassing als `graphic` op `true` staat.",control:{type:r.VH.NUMBER},table:{type:{summary:r.QE.NUMBER},category:r.R6.ATTRIBUTES,defaultValue:{summary:h.imageWidth}}},imageHeight:{name:"image-height",description:"Past de hoogte van de afbeelding aan.<br/>Niet van toepassing als `graphic` op `true` staat.",control:{type:r.VH.NUMBER},table:{type:{summary:r.QE.NUMBER},category:r.R6.ATTRIBUTES,defaultValue:{summary:h.imageHeight}}},graphic:{name:"graphic",description:"Beeldt de afbeelding af als een graphic.<br/>Zorg ervoor dat de afbeelding die je meegeeft de correcte afmetingen heeft.",table:{type:{summary:r.QE.BOOLEAN},category:r.R6.ATTRIBUTES,defaultValue:{summary:h.graphic}}},titleSlot:{name:"title",description:"De titel van de doormat.",table:{type:{summary:r.QE.HTML},category:r.R6.SLOTS,defaultValue:{summary:h.titleSlot}}},textSlot:{name:"text",description:"De tekst van de doormat.",table:{type:{summary:r.QE.HTML},category:r.R6.SLOTS,defaultValue:{summary:h.textSlot}}}};var u=a("../../node_modules/lit/directives/unsafe-html.js");a("../../node_modules/react/index.js");var v=a("../../node_modules/react/jsx-runtime.js"),x=a("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),f=a("../../node_modules/@storybook/addon-docs/dist/index.mjs");function b(e){let t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",a:"a"},(0,x.RP)(),e.components),{VluxMetaData:a}=t;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VluxMetaData",!0),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(t.h1,{id:"doormat---next",children:"Doormat - next"}),"\n",(0,v.jsx)(a,{id:"components-next-doormat"}),"\n",(0,v.jsxs)(t.p,{children:["Gebruik de ",(0,v.jsx)(t.code,{children:"doormat-next"})," component om een snel en duidelijk overzicht weer te geven van de informatie op je website.",(0,v.jsx)("br",{}),"\nElke doormat krijgt zijn eigen titel, tekst, optionele afbeelding en linkt naar een pagina binnen je website."]}),"\n",(0,v.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:"language-js",children:"import { VlDoormatComponent } from '@domg-wc/components/next/doormat';\n"})}),"\n",(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:"language-html",children:"<vl-doormat-next></vl-doormat-next>\n"})}),"\n",(0,v.jsx)(f.Hl,{of:j}),"\n",(0,v.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,v.jsx)(f.ov,{of:j}),"\n",(0,v.jsx)(t.h2,{id:"varianten",children:"Varianten"}),"\n",(0,v.jsx)(t.h3,{id:"alternatieve-stijl",children:"Alternatieve stijl"}),"\n",(0,v.jsx)(f.Hl,{of:S}),"\n",(0,v.jsx)(t.h3,{id:"met-afbeelding",children:"Met afbeelding"}),"\n",(0,v.jsx)(f.Hl,{of:w}),"\n",(0,v.jsx)(t.h3,{id:"met-grafisch-element",children:"Met grafisch element"}),"\n",(0,v.jsx)(f.Hl,{of:_}),"\n",(0,v.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,v.jsx)(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,v.jsx)(t.p,{children:(0,v.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-doormat",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Doormat"})})]})}(0,o.gy)([g]);let y={id:"components-next-doormat",title:"Components-next/doormat",tags:["autodocs"],args:h,argTypes:p,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,x.RP)(),e.components);return t?(0,v.jsx)(t,Object.assign({},e,{children:(0,v.jsx)(b,e)})):b(e)}}}},$=(0,r._7)(h,({href:e,external:t,alt:a,imageSrc:r,imageAlt:o,imageHeight:i,imageWidth:s,graphic:l,textSlot:d,titleSlot:m})=>(0,n.qy)`
            <div class="story--fixed-width">
                <vl-doormat-next
                    href=${e}
                    ?external=${t}
                    ?alt=${a}
                    image-src=${r}
                    image-alt=${o}
                    image-height=${i}
                    image-width=${s}
                    ?graphic=${l}
                >
                    <span slot="title">${(0,u._)(m)}</span>
                    <span slot="text">${(0,u._)(d)}</span>
                </vl-doormat-next>
            </div>
        `),j=$.bind({});j.storyName="vl-doormat-next - default",j.args={href:"https://www.vlaanderen.be/bouwen-wonen-en-energie",titleSlot:"Bouwen, wonen en energie",textSlot:`De overheid zet zich in om betaalbaar en kwaliteitsvol wonen voor iedereen beschikbaar te
                maken. Ze biedt sociale woningen aan, geeft premies aan wie zijn woning verbouwt en
                energiezuinig maakt en zoekt oplossingen om de stijging van de vastgoedprijzen onder controle te
                houden.`};let S=$.bind({});S.storyName="vl-doormat-next - alt",S.args={...j.args,alt:!0};let w=$.bind({});w.storyName="vl-doormat-next - image",w.args={...j.args,imageSrc:"https://picsum.photos/100/150?image=1048",imageAlt:"Bouwen in Brussel"};let _=$.bind({});_.storyName="vl-doormat-next - graphic",_.args={...j.args,imageSrc:"https://picsum.photos/1600/400?image=1048",imageAlt:"Bouwen in Brussel",graphic:!0},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:'story(doormatArgs, ({\n  href,\n  external,\n  alt,\n  imageSrc,\n  imageAlt,\n  imageHeight,\n  imageWidth,\n  graphic,\n  textSlot,\n  titleSlot\n}) => html`\n            <div class="story--fixed-width">\n                <vl-doormat-next\n                    href=${href}\n                    ?external=${external}\n                    ?alt=${alt}\n                    image-src=${imageSrc}\n                    image-alt=${imageAlt}\n                    image-height=${imageHeight}\n                    image-width=${imageWidth}\n                    ?graphic=${graphic}\n                >\n                    <span slot="title">${unsafeHTML(titleSlot)}</span>\n                    <span slot="text">${unsafeHTML(textSlot)}</span>\n                </vl-doormat-next>\n            </div>\n        `)',...j.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:'story(doormatArgs, ({\n  href,\n  external,\n  alt,\n  imageSrc,\n  imageAlt,\n  imageHeight,\n  imageWidth,\n  graphic,\n  textSlot,\n  titleSlot\n}) => html`\n            <div class="story--fixed-width">\n                <vl-doormat-next\n                    href=${href}\n                    ?external=${external}\n                    ?alt=${alt}\n                    image-src=${imageSrc}\n                    image-alt=${imageAlt}\n                    image-height=${imageHeight}\n                    image-width=${imageWidth}\n                    ?graphic=${graphic}\n                >\n                    <span slot="title">${unsafeHTML(titleSlot)}</span>\n                    <span slot="text">${unsafeHTML(textSlot)}</span>\n                </vl-doormat-next>\n            </div>\n        `)',...S.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:'story(doormatArgs, ({\n  href,\n  external,\n  alt,\n  imageSrc,\n  imageAlt,\n  imageHeight,\n  imageWidth,\n  graphic,\n  textSlot,\n  titleSlot\n}) => html`\n            <div class="story--fixed-width">\n                <vl-doormat-next\n                    href=${href}\n                    ?external=${external}\n                    ?alt=${alt}\n                    image-src=${imageSrc}\n                    image-alt=${imageAlt}\n                    image-height=${imageHeight}\n                    image-width=${imageWidth}\n                    ?graphic=${graphic}\n                >\n                    <span slot="title">${unsafeHTML(titleSlot)}</span>\n                    <span slot="text">${unsafeHTML(textSlot)}</span>\n                </vl-doormat-next>\n            </div>\n        `)',...w.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:'story(doormatArgs, ({\n  href,\n  external,\n  alt,\n  imageSrc,\n  imageAlt,\n  imageHeight,\n  imageWidth,\n  graphic,\n  textSlot,\n  titleSlot\n}) => html`\n            <div class="story--fixed-width">\n                <vl-doormat-next\n                    href=${href}\n                    ?external=${external}\n                    ?alt=${alt}\n                    image-src=${imageSrc}\n                    image-alt=${imageAlt}\n                    image-height=${imageHeight}\n                    image-width=${imageWidth}\n                    ?graphic=${graphic}\n                >\n                    <span slot="title">${unsafeHTML(titleSlot)}</span>\n                    <span slot="text">${unsafeHTML(textSlot)}</span>\n                </vl-doormat-next>\n            </div>\n        `)',..._.parameters?.docs?.source}}};let k=["DoormatDefault","DoormatAlt","DoormatImage","DoormatGraphic"]},"../../node_modules/lit/directives/unsafe-html.js":(e,t,a)=>{a.d(t,{_:()=>i});var r=a("../../node_modules/lit-html/lit-html.js"),n=a("../../node_modules/lit-html/directive.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class o extends n.WL{constructor(e){if(super(e),this.et=r.s6,e.type!==n.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===r.s6||null==e)return this.vt=void 0,this.et=e;if(e===r.c0)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;var t=[e];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}}o.directiveName="unsafeHTML",o.resultType=1;var i=(0,n.u$)(o)},"../../node_modules/react-dom/client.js":(e,t,a)=>{var r=a("../../node_modules/react-dom/index.js");t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot}}]);