"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[7625],{"../../libs/components/src/next/title/stories/vl-title.stories.ts":(e,t,n)=>{n.r(t),n.d(t,{TitleDefault:()=>j,__namedExportsOrder:()=>g,default:()=>$});var l=n("../../libs/common/storybook/src/index.ts"),o=n("../../node_modules/lit-html/lit-html.js"),i=n("../../libs/common/utilities/src/index.ts"),r=n("../../libs/common/utilities/src/css/index.ts");n("../../node_modules/@lit/reactive-element/reactive-element.js"),n("../../node_modules/lit-element/lit-element.js");/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s=(e,t,n)=>{for(var l of t)if(l[0]===e)return(0,l[1])();return null==n?void 0:n()},a=n("../../node_modules/lit/directives/class-map.js"),d=n("../../node_modules/lit/index.js");let c=[(0,d.AH)`
        h1 {
            ${r.Cv}
        }

        h2 {
            ${r.J9}
        }

        h3 {
            ${r.QL}
        }

        h4 {
            ${r.JU}
        }

        h5 {
            ${r.Qw}
        }

        h6 {
            ${r.Jd}
        }
    `,...[1,2,3,4,5,6].map(e=>(0,d.AH)`
                h${e} {
                    display: flex;
                    align-items: center;
                }

                h${e}.alt {
                    text-transform: uppercase;
                    font-weight: 500;
                    border-bottom: 3px solid rgb(232, 235, 238);
                    padding: 1.3rem 0 0.7rem;
                    margin: 0 0 2rem;
                }

                h${e}.underline {
                    border-bottom: 1px solid #cbd2da;
                    margin-bottom: 1.5rem;
                }

                h${e}.no-space-bottom {
                    margin-bottom: 0;
                }

                @media screen and (max-width: ${r.gT}px) {
                    h${e}.underline {
                        margin-bottom: 1rem;
                    }
                }
            `)],h={type:"h1",underline:!1,alt:!1,noSpaceBottom:!1};class u extends i.jW{static get styles(){return[c]}static get properties(){return{type:{type:String},underline:{type:Boolean},noSpaceBottom:{type:Boolean,attribute:"no-space-bottom"},alt:{type:Boolean}}}render(){let e={underline:this.underline,"no-space-bottom":this.noSpaceBottom,alt:this.alt};return(0,o.qy)`
            ${s(this.type,[["h1",()=>(0,o.qy)` <h1 class=${(0,a.H)(e)}>
                            <slot></slot>
                        </h1>`],["h2",()=>(0,o.qy)` <h2 class=${(0,a.H)(e)}>
                            <slot></slot>
                        </h2>`],["h3",()=>(0,o.qy)` <h3 class=${(0,a.H)(e)}>
                            <slot></slot>
                        </h3>`],["h4",()=>(0,o.qy)` <h4 class=${(0,a.H)(e)}>
                            <slot></slot>
                        </h4>`],["h5",()=>(0,o.qy)` <h5 class=${(0,a.H)(e)}>
                            <slot></slot>
                        </h5>`],["h6",()=>(0,o.qy)` <h6 class=${(0,a.H)(e)}>
                            <slot></slot>
                        </h6>`]],()=>(0,o.qy)` <h1 class=${(0,a.H)(e)}>
                    <slot></slot>
                </h1>`)}
        `}constructor(...e){super(...e),this.type=h.type,this.underline=h.underline,this.noSpaceBottom=h.noSpaceBottom,this.alt=h.alt}}u=function(e,t,n,l){var o,i=arguments.length,r=i<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,n):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,l);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r}([(0,r.nX)(),(0,i.M1)("vl-title-next")],u);let m={...l.D8,...h,defaultSlot:""},p={...(0,l.RN)(!0),type:{name:"type",description:"Het type van de titel.",control:{type:l.VH.INLINE_RADIO},options:["h1","h2","h3","h4","h5","h6"],table:{type:{summary:l.QE.STRING},category:l.R6.ATTRIBUTES,defaultValue:{summary:m.type}}},underline:{name:"underline",description:"Voegt een subtiele lijn toe onder de titel.",table:{type:{summary:l.QE.BOOLEAN},category:l.R6.ATTRIBUTES,defaultValue:{summary:m.underline}}},alt:{name:"alt",description:"Zet alle letters om in uppercase en zal altijd een lijn toevoegen onder de titel.",table:{type:{summary:l.QE.BOOLEAN},category:l.R6.ATTRIBUTES,defaultValue:{summary:m.alt}}},noSpaceBottom:{name:"no-space-bottom",description:"Vermindert ruimte onder de titel.",table:{type:{summary:l.QE.BOOLEAN},category:l.R6.ATTRIBUTES,defaultValue:{summary:m.noSpaceBottom}}},defaultSlot:{name:"[default]",table:{type:{summary:l.QE.HTML},category:l.R6.SLOTS}}};n("../../node_modules/react/index.js");var x=n("../../node_modules/react/jsx-runtime.js"),v=n("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),y=n("../../node_modules/@storybook/blocks/dist/index.mjs");function b(e){let t=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",h3:"h3",strong:"strong"},(0,v.RP)(),e.components),{VluxMetaData:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VluxMetaData",!0),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(t.h1,{id:"title---next",children:"Title - next"}),"\n",(0,x.jsx)(n,{id:"components-next-title"}),"\n",(0,x.jsxs)(t.p,{children:["Gebruik de ",(0,x.jsx)(t.code,{children:"title-next"})," component om een title af te beelden.",(0,x.jsx)("br",{})]}),"\n",(0,x.jsxs)(t.p,{children:["Deze component is de nieuwe versie van het ",(0,x.jsx)(t.a,{href:"/docs/elements-title-h1--documentatie",children:"vl-title"})," element, we raden aan om op termijn deze versie te gebruiken."]}),"\n",(0,x.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,x.jsx)(t.pre,{children:(0,x.jsx)(t.code,{className:"language-js",children:"import { VlTitleComponent } from '@domg-wc/components/next/title';\n"})}),"\n",(0,x.jsx)(t.pre,{children:(0,x.jsx)(t.code,{className:"language-html",children:"<vl-title-next></vl-title-next>\n"})}),"\n",(0,x.jsx)(y.Hl,{of:j}),"\n",(0,x.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,x.jsx)(y.ov,{of:j}),"\n",(0,x.jsx)(t.h2,{id:"toegankelijkheid",children:"Toegankelijkheid"}),"\n",(0,x.jsx)(t.h3,{id:"richtlijnen",children:"Richtlijnen:"}),"\n",(0,x.jsx)(t.p,{children:"Gebruik opeenvolgende rangorde om de titel te bepalen en sla geen rangorde over."}),"\n",(0,x.jsxs)(t.p,{children:[(0,x.jsx)(t.strong,{children:"WEL"})," bv. ",(0,x.jsx)(t.code,{children:"h1"})," voor de hoofdtitel, ",(0,x.jsx)(t.code,{children:"h2"})," voor de subtitel, ",(0,x.jsx)(t.code,{children:"h3"})," voor de subsubtitel"]}),"\n",(0,x.jsxs)(t.p,{children:[(0,x.jsx)(t.strong,{children:"NIET"})," bv. ",(0,x.jsx)(t.code,{children:"h2"})," voor de hoofdtitel, ",(0,x.jsx)(t.code,{children:"h4"})," voor de subtitel."]}),"\n",(0,x.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,x.jsx)(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,x.jsx)(t.p,{children:(0,x.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/atoms/vl-ui-titles",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Title"})})]})}var f=n("../../node_modules/lit/directives/unsafe-html.js");let $={id:"components-next-title",title:"Components-next/title",tags:["autodocs"],args:m,argTypes:p,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,v.RP)(),e.components);return t?(0,x.jsx)(t,Object.assign({},e,{children:(0,x.jsx)(b,e)})):b(e)}}}},j=(0,l._7)(m,({underline:e,noSpaceBottom:t,alt:n,defaultSlot:l})=>(0,o.qy)`
            <vl-title-next type="h1" underline=${e} no-space-bottom=${t} alt=${n}>
                h1 - ${(0,f._)(l)}
            </vl-title-next>
            <vl-title-next type="h2" underline=${e} no-space-bottom=${t} alt=${n}>
                h2 - ${(0,f._)(l)}
            </vl-title-next>
            <vl-title-next type="h3" underline=${e} no-space-bottom=${t} alt=${n}>
                h3 - ${(0,f._)(l)}
            </vl-title-next>
            <vl-title-next type="h4" underline=${e} no-space-bottom=${t} alt=${n}>
                h4 - ${(0,f._)(l)}
            </vl-title-next>
            <vl-title-next type="h5" underline=${e} no-space-bottom=${t} alt=${n}>
                h5 - ${(0,f._)(l)}
            </vl-title-next>
            <vl-title-next type="h6" underline=${e} no-space-bottom=${t} alt=${n}>
                h6 - ${(0,f._)(l)}
            </vl-title-next>
        `);j.storyName="vl-title-next - default",j.args={defaultSlot:"Ik ben een titel"},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:'story<TitleArgs>(titleArgs, ({\n  underline,\n  noSpaceBottom,\n  alt,\n  defaultSlot\n}) => html`\n            <vl-title-next type="h1" underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt}>\n                h1 - ${unsafeHTML(defaultSlot)}\n            </vl-title-next>\n            <vl-title-next type="h2" underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt}>\n                h2 - ${unsafeHTML(defaultSlot)}\n            </vl-title-next>\n            <vl-title-next type="h3" underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt}>\n                h3 - ${unsafeHTML(defaultSlot)}\n            </vl-title-next>\n            <vl-title-next type="h4" underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt}>\n                h4 - ${unsafeHTML(defaultSlot)}\n            </vl-title-next>\n            <vl-title-next type="h5" underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt}>\n                h5 - ${unsafeHTML(defaultSlot)}\n            </vl-title-next>\n            <vl-title-next type="h6" underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt}>\n                h6 - ${unsafeHTML(defaultSlot)}\n            </vl-title-next>\n        `)',...j.parameters?.docs?.source}}};let g=["TitleDefault"]},"../../node_modules/lit/directives/unsafe-html.js":(e,t,n)=>{n.d(t,{_:()=>r});var l=n("../../node_modules/lit-html/lit-html.js"),o=n("../../node_modules/lit-html/directive.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class i extends o.WL{constructor(e){if(super(e),this.et=l.s6,e.type!==o.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===l.s6||null==e)return this.vt=void 0,this.et=e;if(e===l.c0)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;var t=[e];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}}i.directiveName="unsafeHTML",i.resultType=1;var r=(0,o.u$)(i)}}]);