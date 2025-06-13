(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[7064],{"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(e,t,r)=>{"use strict";r.d(t,{r:()=>v});var o=r("./node_modules/react/index.js"),i=r("./node_modules/react-dom/client.js"),a=new Map,n=({callback:e,children:t})=>{let r=(0,o.useRef)();return(0,o.useLayoutEffect)(()=>{r.current!==e&&(r.current=e,e())},[e]),t},s=async(e,t)=>{let r=await d(t);return new Promise(t=>{r.render(o.createElement(n,{callback:()=>t(null)},e))})},l=(e,t)=>{let r=a.get(e);r&&(r.unmount(),a.delete(e))},d=async e=>{let t=a.get(e);return t||(t=i.createRoot(e),a.set(e,t)),t},c=r("./node_modules/@storybook/blocks/dist/index.mjs"),m={code:c.bD,a:c.Ct,...c.lO},g=class extends o.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:o.createElement(o.Fragment,null,t)}},v=class{constructor(){this.render=async(e,t,i)=>{let a={...m,...t?.components},n=c.WI;return new Promise((l,d)=>{r.e(9506).then(r.bind(r,"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:r})=>s(o.createElement(g,{showException:d,key:Math.random()},o.createElement(r,{components:a},o.createElement(n,{context:e,docsParameter:t}))),i)).then(()=>l())})},this.unmount=e=>{l(e)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(e,t,r)=>{"use strict";r.d(t,{$4:()=>o.$4,Ed:()=>o.Ed,Hw:()=>o.Hw,Uh:()=>o.Uh,Xz:()=>o.Xz,Z$:()=>o.Z$,h_:()=>o.h_}),r("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var o=r("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(e,t,r)=>{"use strict";r.d(t,{NF:()=>a,Zo:()=>l,ah:()=>n,pC:()=>i});var o=r("./node_modules/react/index.js");let i=o.createContext({});function a(e){return function(t){let r=n(t.components);return o.createElement(e,{...t,allComponents:r})}}function n(e){let t=o.useContext(i);return o.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let s={};function l({components:e,children:t,disableParentContext:r}){let a;return a=r?"function"==typeof e?e({}):e||s:n(e),o.createElement(i.Provider,{value:a},t)}},"./libs/components/src/next/doormat/stories/vl-doormat.stories.ts":(e,t,r)=>{"use strict";r.r(t),r.d(t,{DoormatAlt:()=>S,DoormatDefault:()=>w,DoormatGraphic:()=>A,DoormatImage:()=>k,__namedExportsOrder:()=>T,default:()=>_});var o=r("./libs/common/storybook/src/index.ts"),i=r("./node_modules/lit-html/lit-html.js"),a=r("./node_modules/lit/index.js"),n=r("./node_modules/lit/directives/class-map.js"),s=r("./libs/common/utilities/src/index.ts"),l=r("./libs/common/utilities/src/css/global-styles-decorator.ts"),d=r("./libs/common/utilities/src/css/link/link.css.ts"),c=r("./libs/common/utilities/src/css/mixin/title.mixin.css.ts");let m="0.5rem",g=(0,a.iv)`
    /* Doormat styles (gebaseerd op DV _doormat.scss) */
    .vl-doormat {
        display: flex;
        position: relative;
        padding: var(--vl-spacing--small) var(--vl-spacing--normal);
        background-color: var(--vl-background-color);
        text-decoration: none;
        border: ${(0,a.$m)("1px")} solid var(--vl-border-color);
        align-items: flex-start;

        &:before,
        .vl-doormat__graphic-wrapper:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            background-color: var(--vl-accent-color);
            width: ${(0,a.$m)(m)};
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
            ${(0,c.T)(5)}
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
            width: calc(100% + (var(--vl-spacing--normal) + ${(0,a.$m)("1px")}) * 2);
            margin-left: calc(
                (var(--vl-spacing--small) + ${(0,a.$m)(m)} + ${(0,a.$m)("1px")}) * -1
            );
            margin-top: calc((var(--vl-spacing--small) + ${(0,a.$m)("1px")}) * -1);
            margin-bottom: var(--vl-spacing--small);

            &:before {
                background-color: var(--vl-doormat-graphic-border-color);
                width: calc(${(0,a.$m)(m)} + ${(0,a.$m)("1px")});
                z-index: 2;
            }
        }

        .vl-doormat__graphic {
            display: block;
            width: 100%;
            transition: transform 0.2s;
        }
    }
`,v={href:"",external:!1,alt:!1,imageSrc:"",imageAlt:"",imageWidth:null,imageHeight:null,graphic:!1};class h extends s.fS{static get styles(){return[d.Z,g]}static get properties(){return{href:{type:String},external:{type:Boolean},alt:{type:Boolean},imageSrc:{type:String,attribute:"image-src"},imageAlt:{type:String,attribute:"image-alt"},imageWidth:{type:Number,attribute:"image-width"},imageHeight:{type:Number,attribute:"image-height"},graphic:{type:Boolean}}}render(){let e={"vl-doormat":!0,"vl-doormat--alt":this.alt,"vl-doormat--graphic":this.graphic},t=this.external?"_blank":a.Ld;return(0,a.dy)`
            <a class=${(0,n.$)(e)} href=${this.href} target=${t}>
                ${this.imageSrc?this.renderImage():a.Ld}
                <div class="vl-doormat__content">
                    <h2 class="vl-doormat__title"><slot name="title"></slot></h2>
                    <div class="vl-doormat__text"><slot name="text"></slot></div>
                </div>
            </a>
        `}renderImage(){return this.graphic?(0,a.dy)`
                <div class="vl-doormat__graphic-wrapper">
                    <img
                        class="vl-doormat__graphic"
                        src=${this.imageSrc}
                        alt=${this.imageAlt||a.Ld}
                        width=${this.imageWidth||a.Ld}
                        height=${this.imageHeight||a.Ld}
                    />
                </div>
            `:(0,a.dy)`
            <img
                class="vl-doormat__image"
                src=${this.imageSrc}
                alt=${this.imageAlt||a.Ld}
                width=${this.imageWidth||a.Ld}
                height=${this.imageHeight||a.Ld}
            />
        `}constructor(...e){super(...e),this.href=v.href,this.external=v.external,this.alt=v.alt,this.imageSrc=v.imageSrc,this.imageAlt=v.imageAlt,this.imageWidth=v.imageWidth,this.imageHeight=v.imageHeight,this.graphic=v.graphic}}h=function(e,t,r,o){var i,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(n=(a<3?i(n):a>3?i(t,r,n):i(t,r))||n);return a>3&&n&&Object.defineProperty(t,r,n),n}([(0,l.Q)(),(0,s.a6)("vl-doormat-next")],h);let u={...o._O,...v,titleSlot:"",textSlot:""},f={...(0,o.Wp)(!0),href:{name:"href",description:"De url waar de link naar verwijst.",table:{type:{summary:o.vK.STRING},category:o.aA.ATTRIBUTES,defaultValue:{summary:u.href}}},external:{name:"external",description:"Opent de link in een nieuw tabblad.",table:{type:{summary:o.vK.BOOLEAN},category:o.aA.ATTRIBUTES,defaultValue:{summary:u.external}}},alt:{name:"alt",description:"Beeldt de doormat af in een alternatieve stijl.",table:{type:{summary:o.vK.BOOLEAN},category:o.aA.ATTRIBUTES,defaultValue:{summary:u.alt}}},imageSrc:{name:"image-src",description:"De url van de afbeelding.",table:{type:{summary:o.vK.STRING},category:o.aA.ATTRIBUTES,defaultValue:{summary:u.imageSrc}}},imageAlt:{name:"image-alt",description:"De alt tekst van de afbeelding.",table:{type:{summary:o.vK.STRING},category:o.aA.ATTRIBUTES,defaultValue:{summary:u.imageAlt}}},imageWidth:{name:"image-width",description:"Past de breedte van de afbeelding aan.<br/>De maximum toegelaten breedte is 150px.<br/>Niet van toepassing als `graphic` op `true` staat.",control:{type:o.Hy.NUMBER},table:{type:{summary:o.vK.NUMBER},category:o.aA.ATTRIBUTES,defaultValue:{summary:u.imageWidth}}},imageHeight:{name:"image-height",description:"Past de hoogte van de afbeelding aan.<br/>Niet van toepassing als `graphic` op `true` staat.",control:{type:o.Hy.NUMBER},table:{type:{summary:o.vK.NUMBER},category:o.aA.ATTRIBUTES,defaultValue:{summary:u.imageHeight}}},graphic:{name:"graphic",description:"Beeldt de afbeelding af als een graphic.<br/>Zorg ervoor dat de afbeelding die je meegeeft de correcte afmetingen heeft.",table:{type:{summary:o.vK.BOOLEAN},category:o.aA.ATTRIBUTES,defaultValue:{summary:u.graphic}}},titleSlot:{name:"title",description:"De titel van de doormat.",table:{type:{summary:o.vK.HTML},category:o.aA.SLOTS,defaultValue:{summary:u.titleSlot}}},textSlot:{name:"text",description:"De tekst van de doormat.",table:{type:{summary:o.vK.HTML},category:o.aA.SLOTS,defaultValue:{summary:u.textSlot}}}};var p=r("./node_modules/lit/directives/unsafe-html.js");r("./node_modules/react/index.js");var x=r("./node_modules/react/jsx-runtime.js"),b=r("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),$=r("./node_modules/@storybook/addon-docs/dist/index.mjs");function y(e){let t=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",h3:"h3"},(0,b.ah)(),e.components);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(t.h1,{id:"doormat---next",children:"Doormat - next"}),"\n",(0,x.jsxs)(t.p,{children:["Gebruik de ",(0,x.jsx)(t.code,{children:"doormat-next"})," component om een snel en duidelijk overzicht weer te geven van de informatie op je website.",(0,x.jsx)("br",{}),"\nElke doormat krijgt zijn eigen titel, tekst, optionele afbeelding en linkt naar een pagina binnen je website."]}),"\n",(0,x.jsxs)(t.p,{children:["Dit component is de volgende versie van de ",(0,x.jsx)(t.a,{href:"/docs/elements-doormat-doormat--documentatie",children:"vl-doormat"})," component."]}),"\n",(0,x.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,x.jsx)(t.pre,{children:(0,x.jsx)(t.code,{className:"language-js",children:"import { VlDoormatComponent } from '@domg-wc/components/next/doormat';\n"})}),"\n",(0,x.jsx)(t.pre,{children:(0,x.jsx)(t.code,{className:"language-html",children:"<vl-doormat-next></vl-doormat-next>\n"})}),"\n",(0,x.jsx)($.Xz,{of:w}),"\n",(0,x.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,x.jsx)($.Ed,{of:w}),"\n",(0,x.jsx)(t.h2,{id:"varianten",children:"Varianten"}),"\n",(0,x.jsx)(t.h3,{id:"alternatieve-stijl",children:"Alternatieve stijl"}),"\n",(0,x.jsx)($.Xz,{of:S}),"\n",(0,x.jsx)(t.h3,{id:"met-afbeelding",children:"Met afbeelding"}),"\n",(0,x.jsx)($.Xz,{of:k}),"\n",(0,x.jsx)(t.h3,{id:"met-grafisch-element",children:"Met grafisch element"}),"\n",(0,x.jsx)($.Xz,{of:A}),"\n",(0,x.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,x.jsx)(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,x.jsx)(t.p,{children:(0,x.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-doormat",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Doormat"})})]})}(0,s.YV)([h]);let _={title:"Components-next/doormat",tags:["autodocs"],args:u,argTypes:f,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,b.ah)(),e.components);return t?(0,x.jsx)(t,Object.assign({},e,{children:(0,x.jsx)(y,e)})):y(e)}}}},j=(0,o.yg)(u,({href:e,external:t,alt:r,imageSrc:o,imageAlt:a,imageHeight:n,imageWidth:s,graphic:l,textSlot:d,titleSlot:c})=>(0,i.dy)`
            <div class="story--fixed-width">
                <vl-doormat-next
                    href=${e}
                    ?external=${t}
                    ?alt=${r}
                    image-src=${o}
                    image-alt=${a}
                    image-height=${n}
                    image-width=${s}
                    ?graphic=${l}
                >
                    <span slot="title">${(0,p.A)(c)}</span>
                    <span slot="text">${(0,p.A)(d)}</span>
                </vl-doormat-next>
            </div>
        `),w=j.bind({});w.storyName="vl-doormat-next - default",w.args={href:"https://www.vlaanderen.be/bouwen-wonen-en-energie",titleSlot:"Bouwen, wonen en energie",textSlot:`De overheid zet zich in om betaalbaar en kwaliteitsvol wonen voor iedereen beschikbaar te
                maken. Ze biedt sociale woningen aan, geeft premies aan wie zijn woning verbouwt en
                energiezuinig maakt en zoekt oplossingen om de stijging van de vastgoedprijzen onder controle te
                houden.`};let S=j.bind({});S.storyName="vl-doormat-next - alt",S.args={...w.args,alt:!0};let k=j.bind({});k.storyName="vl-doormat-next - image",k.args={...w.args,imageSrc:"https://picsum.photos/100/150?image=1048",imageAlt:"Bouwen in Brussel"};let A=j.bind({});A.storyName="vl-doormat-next - graphic",A.args={...w.args,imageSrc:"https://picsum.photos/1600/400?image=1048",imageAlt:"Bouwen in Brussel",graphic:!0},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:'story(doormatArgs, ({\n  href,\n  external,\n  alt,\n  imageSrc,\n  imageAlt,\n  imageHeight,\n  imageWidth,\n  graphic,\n  textSlot,\n  titleSlot\n}) => html`\n            <div class="story--fixed-width">\n                <vl-doormat-next\n                    href=${href}\n                    ?external=${external}\n                    ?alt=${alt}\n                    image-src=${imageSrc}\n                    image-alt=${imageAlt}\n                    image-height=${imageHeight}\n                    image-width=${imageWidth}\n                    ?graphic=${graphic}\n                >\n                    <span slot="title">${unsafeHTML(titleSlot)}</span>\n                    <span slot="text">${unsafeHTML(textSlot)}</span>\n                </vl-doormat-next>\n            </div>\n        `)',...w.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:'story(doormatArgs, ({\n  href,\n  external,\n  alt,\n  imageSrc,\n  imageAlt,\n  imageHeight,\n  imageWidth,\n  graphic,\n  textSlot,\n  titleSlot\n}) => html`\n            <div class="story--fixed-width">\n                <vl-doormat-next\n                    href=${href}\n                    ?external=${external}\n                    ?alt=${alt}\n                    image-src=${imageSrc}\n                    image-alt=${imageAlt}\n                    image-height=${imageHeight}\n                    image-width=${imageWidth}\n                    ?graphic=${graphic}\n                >\n                    <span slot="title">${unsafeHTML(titleSlot)}</span>\n                    <span slot="text">${unsafeHTML(textSlot)}</span>\n                </vl-doormat-next>\n            </div>\n        `)',...S.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:'story(doormatArgs, ({\n  href,\n  external,\n  alt,\n  imageSrc,\n  imageAlt,\n  imageHeight,\n  imageWidth,\n  graphic,\n  textSlot,\n  titleSlot\n}) => html`\n            <div class="story--fixed-width">\n                <vl-doormat-next\n                    href=${href}\n                    ?external=${external}\n                    ?alt=${alt}\n                    image-src=${imageSrc}\n                    image-alt=${imageAlt}\n                    image-height=${imageHeight}\n                    image-width=${imageWidth}\n                    ?graphic=${graphic}\n                >\n                    <span slot="title">${unsafeHTML(titleSlot)}</span>\n                    <span slot="text">${unsafeHTML(textSlot)}</span>\n                </vl-doormat-next>\n            </div>\n        `)',...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:'story(doormatArgs, ({\n  href,\n  external,\n  alt,\n  imageSrc,\n  imageAlt,\n  imageHeight,\n  imageWidth,\n  graphic,\n  textSlot,\n  titleSlot\n}) => html`\n            <div class="story--fixed-width">\n                <vl-doormat-next\n                    href=${href}\n                    ?external=${external}\n                    ?alt=${alt}\n                    image-src=${imageSrc}\n                    image-alt=${imageAlt}\n                    image-height=${imageHeight}\n                    image-width=${imageWidth}\n                    ?graphic=${graphic}\n                >\n                    <span slot="title">${unsafeHTML(titleSlot)}</span>\n                    <span slot="text">${unsafeHTML(textSlot)}</span>\n                </vl-doormat-next>\n            </div>\n        `)',...A.parameters?.docs?.source}}};let T=["DoormatDefault","DoormatAlt","DoormatImage","DoormatGraphic"]},"./node_modules/lit-html/directive.js":(e,t,r)=>{"use strict";r.d(t,{XM:()=>i,Xe:()=>a,pX:()=>o});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var o={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},i=e=>function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return{_$litDirective$:e,values:r}};class a{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},"./node_modules/lit/directives/class-map.js":(e,t,r)=>{"use strict";r.d(t,{$:()=>a});var o=r("./node_modules/lit-html/lit-html.js"),i=r("./node_modules/lit-html/directive.js"),a=(0,i.XM)(class extends i.Xe{constructor(e){var t;if(super(e),e.type!==i.pX.ATTRIBUTE||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,t){var[r]=t;if(void 0===this.it){for(var i in this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),r)r[i]&&!(null!==(l=this.st)&&void 0!==l&&l.has(i))&&this.it.add(i);return this.render(r)}var a=e.element.classList;for(var n of this.it)n in r||(a.remove(n),this.it.delete(n));for(var s in r){var l,d,c=!!r[s];c===this.it.has(s)||(null===(d=this.st)||void 0===d?void 0:d.has(s))||(c?(a.add(s),this.it.add(s)):(a.remove(s),this.it.delete(s)))}return o.Jb}})},"./node_modules/lit/directives/unsafe-html.js":(e,t,r)=>{"use strict";r.d(t,{A:()=>n});var o=r("./node_modules/lit-html/lit-html.js"),i=r("./node_modules/lit-html/directive.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class a extends i.Xe{constructor(e){if(super(e),this.et=o.Ld,e.type!==i.pX.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===o.Ld||null==e)return this.vt=void 0,this.et=e;if(e===o.Jb)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;var t=[e];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}}a.directiveName="unsafeHTML",a.resultType=1;var n=(0,i.XM)(a)},"./node_modules/memoizerific sync recursive":e=>{function t(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id="./node_modules/memoizerific sync recursive",e.exports=t},"./node_modules/react-dom/client.js":(e,t,r)=>{"use strict";var o=r("./node_modules/react-dom/index.js");t.createRoot=o.createRoot,t.hydrateRoot=o.hydrateRoot},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,r)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=r("./node_modules/react/index.js"),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var o,a={},d=null,c=null;for(o in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)n.call(t,o)&&!l.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===a[o]&&(a[o]=t[o]);return{$$typeof:i,type:e,key:d,ref:c,props:a,_owner:s.current}}t.Fragment=a,t.jsx=d,t.jsxs=d},"./node_modules/react/jsx-runtime.js":(e,t,r)=>{"use strict";e.exports=r("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./libs/common/utilities/src/css/global-styles-decorator.ts":(e,t,r)=>{"use strict";r.d(t,{Q:()=>x});var o=r("./node_modules/lit/index.js");let i=(0,o.iv)`
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
`,a=(0,o.iv)`
    :root {
        --vl-border-radius: 0.3rem;
    }
`,n=(0,o.iv)`
    :root {
        --vl-spacing--xxsmall: 0.5rem;
        --vl-spacing--xsmall: 1rem;
        --vl-spacing--small: 1.5rem;
        --vl-spacing--normal: 2rem;
        --vl-spacing--medium: 3rem;
        --vl-spacing--large: 6rem;
    }
`;var s="https://cdn.omgeving.vlaanderen.be/domg/govflanders-font/22.0.2",l="FlandersArtSans",d="FlandersArtSerif",c="vlaanderen-icon-classic",m="".concat(s,"/iconfont/").concat(c);let g=(0,o.iv)`
    :root {
        /* Flanders font */
        --vl-font: ${(0,o.$m)(l)}, sans-serif;
        --vl-accent-font: ${(0,o.$m)(d)}, serif;

        --vl-font-size: 1.8rem;
        --vl-font-size--mobile: 1.6rem;
        --vl-font-size--small: 1.6rem;
        --vl-font-size--large: 2rem;

        --vl-line-height: 1.5;
        --vl-line-height--mobile: 1.33;

        /* Icon font */
        --vl-icon-font: ${(0,o.$m)(c)};
    }
`,v=(e,t,r,i)=>(0,o.iv)`
    @font-face {
        font-family: ${(0,o.$m)(e)};
        src: url(${(0,o.$m)(`${t}.woff2`)}) format('woff2'),
            url(${(0,o.$m)(`${t}.woff`)}) format('woff');
        font-weight: ${(0,o.$m)(r)};
        font-style: ${(0,o.$m)(i)};
    }
`,h=(0,o.iv)`
    /* Flanders font */
    ${v(l,`${s}/flanders/sans/${l}-Light`,300,"normal")}
    ${v(l,`${s}/flanders/sans/${l}-Regular`,400,"normal")}
    ${v(l,`${s}/flanders/sans/${l}-Medium`,500,"normal")}
    ${v(l,`${s}/flanders/sans/${l}-Bold`,700,"normal")}

    ${v(l,`${s}/flanders/italic/${l}-Light`,300,"italic")}
    ${v(l,`${s}/flanders/italic/${l}-Regular`,400,"italic")}
    ${v(l,`${s}/flanders/italic/${l}-Medium`,500,"italic")}
    ${v(l,`${s}/flanders/italic/${l}-Bold`,700,"italic")}

    ${v(d,`${s}/flanders/serif/${d}-Light`,300,"normal")}
    ${v(d,`${s}/flanders/serif/${d}-Regular`,400,"normal")}
    ${v(d,`${s}/flanders/serif/${d}-Medium`,500,"normal")}
    ${v(d,`${s}/flanders/serif/${d}-Bold`,700,"normal")}

    /* Icon font */
    ${v(c,m,"normal","normal")}
`;var u=r("./libs/common/utilities/src/css/mixin/media-queries.mixin.css.ts");let f=[i,a,n,g,h,(0,o.iv)`
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

        ${(0,u.R)((0,o.iv)`
                font-size: var(--vl-font-size--mobile);
                line-height: var(--vl-line-height--mobile);
            `)}
    }
`];class p{static{this.registered=!1}static register(){this.registered||(document.adoptedStyleSheets=[...document.adoptedStyleSheets,...f.map(e=>e.styleSheet)],this.registered=!0,console.log("RegisterGlobalStyles: global styling toegevoegd aan het document"))}}let x=()=>e=>{p.register()}},"./libs/common/utilities/src/css/link/link.css.ts":(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var o=r("./node_modules/lit/index.js"),i=r("./libs/common/utilities/src/css/mixin/outline.mixin.css.ts"),a=r("./libs/common/utilities/src/css/mixin/media-queries.mixin.css.ts");let n=(0,o.iv)`
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
            ${(0,i.B)()}
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

            ${(0,a.R)((0,o.iv)`
                    font-size: calc(var(--vl-font-size--small) - 0.1rem);
                `)}
        }

        &.large {
            font-size: var(--vl-font-size--large);

            ${(0,a.R)((0,o.iv)`
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
`},"./libs/common/utilities/src/css/mixin/media-queries.mixin.css.ts":(e,t,r)=>{"use strict";r.d(t,{R:()=>i,Y:()=>a});var o=r("./node_modules/lit/index.js");let i=e=>(0,o.iv)`
    @media screen and (max-width: 767px) {
        ${e}
    }
`,a=e=>(0,o.iv)`
    @media screen and (max-width: 1023px) {
        ${e}
    }
`},"./libs/common/utilities/src/css/mixin/outline.mixin.css.ts":(e,t,r)=>{"use strict";r.d(t,{B:()=>i});var o=r("./node_modules/lit/index.js");let i=()=>(0,o.iv)`
    box-shadow: none;
    outline: 3px solid var(--vl-focus-color);
    outline-offset: 2px;
`},"./libs/common/utilities/src/css/mixin/title.mixin.css.ts":(e,t,r)=>{"use strict";r.d(t,{T:()=>n});var o=r("./node_modules/lit/index.js"),i=r("./libs/common/utilities/src/css/mixin/media-queries.mixin.css.ts");let a={1:(0,o.iv)`
        font-size: 4.4rem;
        margin-bottom: 6rem;
        line-height: 1.18;

        ${(0,i.Y)((0,o.iv)`
                font-size: 4rem;
                margin-bottom: 4.5rem;
            `)}

        ${(0,i.R)((0,o.iv)`
                font-size: 3rem;
                margin-bottom: 3rem;
            `)}
    `,2:(0,o.iv)`
        font-size: 3.2rem;
        margin-bottom: 2rem;
        line-height: 1.24;

        ${(0,i.R)((0,o.iv)`
                font-size: 2.6rem;
                margin-bottom: 1.5rem;
            `)}
    `,3:(0,o.iv)`
        font-size: 2.6rem;
        margin-bottom: 2rem;
        line-height: 1.3;

        ${(0,i.R)((0,o.iv)`
                font-size: 2.2rem;
                margin-bottom: 1.5rem;
            `)}
    `,4:(0,o.iv)`
        font-size: 2.2rem;
        margin-bottom: 1.8rem;
        line-height: 1.36;

        ${(0,i.R)((0,o.iv)`
                font-size: 2rem;
                margin-bottom: 1.4rem;
            `)}
    `,5:(0,o.iv)`
        font-size: 2rem;
        margin-bottom: 1.6rem;
        line-height: 1.4;

        ${(0,i.R)((0,o.iv)`
                font-size: 1.8rem;
                margin-bottom: 1.2rem;
            `)}
    `,6:(0,o.iv)`
        font-size: 1.8rem;
        margin-bottom: 1.4rem;
        line-height: 1.44;

        ${(0,i.R)((0,o.iv)`
                font-size: 1.8rem;
                margin-bottom: 1rem;
            `)}
    `},n=e=>(0,o.iv)`
    /* Reset styles (gebaseerd op DV _reset.scss) */
    margin: 0;
    border: 0;
    padding: 0;
    vertical-align: baseline;

    /* Title styles (gebaseerd op DV vl-ui-titles/src/scss/_titles.scss) */
    font-weight: 500;
    ${a[e]}
`}}]);