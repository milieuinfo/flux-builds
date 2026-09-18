"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[9460],{"../../libs/components/src/next/steps/stories/vl-step.stories.ts":(t,e,s)=>{s.r(e),s.d(e,{StepsStates:()=>r,StepsToggleable:()=>p,__namedExportsOrder:()=>c,default:()=>i});var n=s("../../libs/common/storybook/src/index.ts"),l=s("../../node_modules/lit-html/lit-html.js");s("../../libs/components/src/next/steps/vl-steps.component.ts");let a={...n.D8,toggleable:!1,type:null},o={...(0,n.RN)(),toggleable:{name:"data-vl-toggleable",description:"Beeldt een stap af als een accordion.",control:!1,table:{type:{summary:n.QE.BOOLEAN},category:n.R6.ATTRIBUTES,defaultValue:{summary:a.toggleable}}},type:{name:"data-vl-type",description:"Beeldt een stap af in een bepaalde staat.",control:!1,table:{type:{summary:["highlighted","disabled","success","warning","error"]},category:n.R6.ATTRIBUTES,defaultValue:{summary:a.type}}}},i={id:"components-next-steps-step",title:"Components-next/steps/step",tags:["autodocs"],args:a,argTypes:o,parameters:{controls:{hideNoControlsWarning:!0}}},p=(0,n._7)(a,()=>(0,l.qy)`
        <vl-steps-next>
            <vl-step-next data-vl-toggleable>
                <span slot="icon">1</span>
                <span slot="title">Stap 1: eerste actie</span>
                <span slot="subtitle">Dit is de eerste subtitel.</span>
                <span slot="content">Dit is de eerste stap content.</span>
            </vl-step-next>
            <vl-step-next data-vl-toggleable>
                <span slot="icon">2</span>
                <span slot="title">Stap 2: tweede actie</span>
                <span slot="subtitle">Dit is de tweede subtitel.</span>
                <span slot="content">Dit is de tweede stap content.</span>
            </vl-step-next>
            <vl-step-next data-vl-toggleable>
                <span slot="icon">3</span>
                <span slot="title">Stap 3: derde actie</span>
                <span slot="subtitle">Dit is de derde subtitel.</span>
                <span slot="content">Dit is de derde stap content.</span>
            </vl-step-next>
        </vl-steps-next>
    `);p.storyName="vl-step-next - toggleable";let r=(0,n._7)(a,()=>(0,l.qy)`
        <vl-steps-next>
            <vl-step-next>
                <span slot="icon">1</span>
                <span slot="title">Stap 1: eerste actie</span>
                <span slot="subtitle">Dit is de eerste subtitel.</span>
                <span slot="content">Dit is de eerste stap content.</span>
            </vl-step-next>
            <vl-step-next data-vl-type="highlighted">
                <span slot="icon">2</span>
                <span slot="title">Stap 2: tweede actie</span>
                <span slot="subtitle">Dit is de tweede subtitel.</span>
                <span slot="content">Dit is de tweede stap content.</span>
            </vl-step-next>
            <vl-step-next data-vl-type="disabled">
                <span slot="icon">3</span>
                <span slot="title">Stap 3: derde actie</span>
                <span slot="subtitle">Dit is de derde subtitel.</span>
                <span slot="content">Deze stap is geannuleerd.</span>
            </vl-step-next>
            <vl-step-next data-vl-type="success">
                <span slot="icon">4</span>
                <span slot="title">Stap 4: vierde actie</span>
                <span slot="subtitle">Dit is de vierde subtitel.</span>
                <span slot="content">Dit is de vierde stap content.</span>
            </vl-step-next>
            <vl-step-next data-vl-type="warning">
                <span slot="icon">5</span>
                <span slot="title">Stap 5: vijfde actie</span>
                <span slot="subtitle">Dit is de vijfde subtitel.</span>
                <span slot="content">Dit is de vijfde stap content.</span>
            </vl-step-next>
            <vl-step-next data-vl-type="error">
                <span slot="icon">6</span>
                <span slot="title">Stap 6: zesde actie</span>
                <span slot="subtitle">Dit is de zesde subtitel.</span>
                <span slot="content">Dit is de zesde stap content.</span>
            </vl-step-next>
        </vl-steps-next>
    `);r.storyName="vl-step-next - states",p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:'story(stepArgs, () => html`\n        <vl-steps-next>\n            <vl-step-next data-vl-toggleable>\n                <span slot="icon">1</span>\n                <span slot="title">Stap 1: eerste actie</span>\n                <span slot="subtitle">Dit is de eerste subtitel.</span>\n                <span slot="content">Dit is de eerste stap content.</span>\n            </vl-step-next>\n            <vl-step-next data-vl-toggleable>\n                <span slot="icon">2</span>\n                <span slot="title">Stap 2: tweede actie</span>\n                <span slot="subtitle">Dit is de tweede subtitel.</span>\n                <span slot="content">Dit is de tweede stap content.</span>\n            </vl-step-next>\n            <vl-step-next data-vl-toggleable>\n                <span slot="icon">3</span>\n                <span slot="title">Stap 3: derde actie</span>\n                <span slot="subtitle">Dit is de derde subtitel.</span>\n                <span slot="content">Dit is de derde stap content.</span>\n            </vl-step-next>\n        </vl-steps-next>\n    `)',...p.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:'story(stepArgs, () => html`\n        <vl-steps-next>\n            <vl-step-next>\n                <span slot="icon">1</span>\n                <span slot="title">Stap 1: eerste actie</span>\n                <span slot="subtitle">Dit is de eerste subtitel.</span>\n                <span slot="content">Dit is de eerste stap content.</span>\n            </vl-step-next>\n            <vl-step-next data-vl-type="highlighted">\n                <span slot="icon">2</span>\n                <span slot="title">Stap 2: tweede actie</span>\n                <span slot="subtitle">Dit is de tweede subtitel.</span>\n                <span slot="content">Dit is de tweede stap content.</span>\n            </vl-step-next>\n            <vl-step-next data-vl-type="disabled">\n                <span slot="icon">3</span>\n                <span slot="title">Stap 3: derde actie</span>\n                <span slot="subtitle">Dit is de derde subtitel.</span>\n                <span slot="content">Deze stap is geannuleerd.</span>\n            </vl-step-next>\n            <vl-step-next data-vl-type="success">\n                <span slot="icon">4</span>\n                <span slot="title">Stap 4: vierde actie</span>\n                <span slot="subtitle">Dit is de vierde subtitel.</span>\n                <span slot="content">Dit is de vierde stap content.</span>\n            </vl-step-next>\n            <vl-step-next data-vl-type="warning">\n                <span slot="icon">5</span>\n                <span slot="title">Stap 5: vijfde actie</span>\n                <span slot="subtitle">Dit is de vijfde subtitel.</span>\n                <span slot="content">Dit is de vijfde stap content.</span>\n            </vl-step-next>\n            <vl-step-next data-vl-type="error">\n                <span slot="icon">6</span>\n                <span slot="title">Stap 6: zesde actie</span>\n                <span slot="subtitle">Dit is de zesde subtitel.</span>\n                <span slot="content">Dit is de zesde stap content.</span>\n            </vl-step-next>\n        </vl-steps-next>\n    `)',...r.parameters?.docs?.source}}};let c=["StepsToggleable","StepsStates"]},"../../libs/components/src/next/steps/vl-steps.component.ts":(t,e,s)=>{var n=s("../../libs/common/utilities/src/index.ts"),l=s("../../node_modules/@domg/govflanders-style/common/index.js"),a=s("../../libs/elements/src/index.ts"),o=s("../../node_modules/lit/index.js"),i=s("../../node_modules/lit/decorators.js"),p=s("../../node_modules/lit/directives/class-map.js"),r=s("../../node_modules/@domg/govflanders-style/component/index.js"),c=s("../../libs/components/src/accordion/vl-accordion.component.ts");let d=(0,o.AH)`
    ::slotted(span.vl-icon) {
        vertical-align: inherit !important;
    }
`;class v extends n.jW{static{(0,n.gy)([c.i])}static get styles(){return[l.h8,a.hF,r.xo,d]}static get properties(){return{type:{type:String,attribute:"data-vl-type",reflect:!0},toggleable:{type:Boolean,attribute:"data-vl-toggleable",reflect:!0},isTitleAnnotationSlotAssigned:{attribute:!1}}}connectedCallback(){super.connectedCallback(),this.shadowRoot&&(this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,this.customCSSStyleSheet])}firstUpdated(t){if(super.firstUpdated(t),this.toggleable){let t=this.shadowRoot?.querySelector(".js-vl-accordion__toggle");t?.hasAttribute("data-vl-accordion-dressed")||(vl.accordion.dress(t),this.shadowRoot?.querySelector('slot[name="title"]')?.addEventListener("click",t=>{t.stopPropagation(),this.shadowRoot?.querySelector("button.js-vl-accordion__toggle")?.click()}))}let e=this.shadowRoot?.querySelector('slot[name="title-annotation"]');this.isTitleAnnotationSlotAssigned=e&&e.assignedNodes().length>0||!1}render(){let t=this.type,e=this.toggleable?this.getAccordionStepHeaderTemplate():this.getStepHeaderTemplate(),s={"vl-step":!0,[`vl-step--${t}`]:!!t,"vl-step--accordion js-vl-accordion":this.toggleable};return(0,o.qy)`
            <li role="listitem" class=${(0,p.H)(s)}>
                <div class="vl-step__container">
                    <div class="vl-step__icon">
                        <slot name="icon"></slot>
                        <span class="vl-step__icon__sub">
                            <slot name="sub-icon"></slot>
                        </span>
                    </div>
                    <div class="vl-step__wrapper">
                        ${e}
                        <div class="vl-step__content-wrapper">
                            <div class="vl-step__content">
                                <slot name="content"></slot>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        `}getStepHeaderTemplate(){let t=this.getStepHeaderTitleTemplate();return(0,o.qy)` <div class="vl-step__header">${t}</div>`}getAccordionStepHeaderTemplate(){let t=this.getStepHeaderTitleTemplate();return(0,o.qy)`
            <button class="vl-step__header js-vl-accordion__toggle">
                ${t}
                <div class="vl-step__header__info" aria-hidden="true">
                    <em class="vl-step__accordion-toggle"></em>
                </div>
            </button>
        `}getStepHeaderTitleTemplate(){return(0,o.qy)`
            <div class="vl-step__header__titles">
                <h3 class="vl-step__title">
                    <slot name="title"></slot>
                    ${this.isTitleAnnotationSlotAssigned?(0,o.qy)`
                              <span class="vl-step__title__annotation">
                                  <slot name="title-annotation"></slot>
                              </span>
                          `:""}
                </h3>
                <p class="vl-step__subtitle">
                    <slot name="subtitle"></slot>
                </p>
            </div>
        `}setCustomStyles(t){this.customCSSStyleSheet.replaceSync(t)}constructor(...t){super(...t),this.type=null,this.toggleable=!1,this.isTitleAnnotationSlotAssigned=!0,this.customCSSStyleSheet=new CSSStyleSheet}}v=function(t,e,s,n){var l,a=arguments.length,o=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,n);else for(var i=t.length-1;i>=0;i--)(l=t[i])&&(o=(a<3?l(o):a>3?l(e,s,o):l(e,s))||o);return a>3&&o&&Object.defineProperty(e,s,o),o}([(0,i.EM)("vl-step-next")],v);class m extends n.jW{static get styles(){return[l.h8,a.hF,r.xo]}render(){return(0,o.qy)`
            <li role="listitem" class="vl-duration-step">
                <slot></slot>
            </li>
        `}}m=function(t,e,s,n){var l,a=arguments.length,o=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,n);else for(var i=t.length-1;i>=0;i--)(l=t[i])&&(o=(a<3?l(o):a>3?l(e,s,o):l(e,s))||o);return a>3&&o&&Object.defineProperty(e,s,o),o}([(0,i.EM)("vl-duration-step-next")],m);class u extends n.jW{static{(0,n.gy)([v,m])}static get styles(){return[l.h8,a.hF,r.xo]}static get properties(){return{line:{type:Boolean,attribute:"data-vl-line",reflect:!0},timeline:{type:Boolean,attribute:"data-vl-timeline",reflect:!0},simpleTimeline:{type:Boolean,attribute:"data-vl-simple-timeline",reflect:!0},lastStepNoLine:{type:Boolean,attribute:"data-vl-last-step-no-line",reflect:!0}}}connectedCallback(){super.connectedCallback(),this.observer=new MutationObserver(()=>{this.setStepStyles()}),this.observer.observe(this,{childList:!0})}updated(t){super.updated(t),this.setStepStyles()}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect()}render(){let t={"vl-steps":!0,"vl-steps--has-line":this.line,"vl-steps--timeline":this.timeline,"vl-steps--timeline-simple":this.simpleTimeline,"vl-steps--last-step-no-line":this.lastStepNoLine};return(0,o.qy)`
            <div class=${(0,p.H)(t)}>
                <ul role="list" class="vl-steps__list">
                    <slot></slot>
                </ul>
            </div>
        `}setStepStyles(){[...Array.from(this.children)].forEach((t,e,s)=>{if(t instanceof v){let n=this.getStepStyles(e,s);t.setCustomStyles(n)}})}getStepStyles(t,e){let s=t===e.length-1,n=e[t-1]instanceof m,l="";return 0===t||n||(l+=`
                .vl-step {
                    margin-top: 5rem;
                }

                @media screen and (max-width: 767px) {
                    .vl-step {
                        margin-top: 2rem;
                    }
                }
            `),this.line&&(l+=`
            .vl-step::before {
                position: absolute;
                display: block;
                background-color: #cbd2da;
                content: '';
                width: 0.3rem;
                top: calc(4.2rem + 0.4rem);
                bottom: calc(-5rem + 0.4rem);
                left: -5rem;
            }
                
            @media screen and (max-width: 767px) {
                .vl-step::before {
                    top: 3.9rem;
                    bottom: -2rem;
                    left: -3.35rem;
                }
            }
            `),this.lastStepNoLine&&s&&(l+=`
                .vl-step::before {
                    display: none !important;
                }    
            `),this.timeline&&(l+=`
            .vl-step::before {
                position: absolute;
                display: block;
                background-color: #cbd2da;
                content: '';
                width: 0.3rem;
                top: 6rem;
                bottom: -4.6rem;
                left: -5rem;
            }
            @media screen and (max-width: 767px) {
                .vl-step::before {
                    top: 4.4rem;
                    bottom: -1.6rem;
                    left: -3.35rem;
                }
            }
            .vl-step > .vl-step__container > .vl-step__icon {
                font-size: 1.8rem;
                height: auto;
                line-height: 1.5rem;
                border-radius: 0;
                padding: 1.2rem 0;
                top: 0;
            }
            @media screen and (max-width: 767px) {
                .vl-step > .vl-step__container > .vl-step__icon {
                    font-size: 1.5rem;
                    padding: 0.5rem 0;
                }
            }
            .vl-step--success .vl-step__icon {
                background-color: #007a37;
                color: #fff;
            }
            .vl-step--warning .vl-step__icon {
                background-color: #ffa10a;
                color: #333332;
            }
            .vl-step--error .vl-step__icon {
                background-color: #d2373c;
                color: #fff;
            }
            `),this.simpleTimeline&&(l+=`
                .vl-step {
                    padding-top: 0;
                }
                .vl-step::before {
                    position: absolute;
                    display: block;
                    background-color: #cbd2da;
                    content: '';
                    width: 0.3rem;
                    top: 2.2rem;
                    bottom: -7.2rem;
                    left: -5rem;
                }
                @media screen and (max-width: 767px) {
                    .vl-step::before {
                        left: -3.35rem;
                    }
                }
                .vl-step > .vl-step__container > .vl-step__icon {
                    background-color: #687483;
                    height: 2.2rem;
                    width: 2.2rem;
                    transform: translateX(-6rem);
                    margin-top: 0.5rem;
                }
                .vl-step
                    > .vl-step__container
                    > .vl-step__icon
                    > .vl-step__icon__text,
                .vl-step
                    > .vl-step__container
                    > .vl-step__icon
                    > .vl-step__icon__sub {
                    display: none;
                }
                @media screen and (max-width: 767px) {
                    .vl-step > .vl-step__container > .vl-step__icon {
                        transform: translateX(-4.3rem);
                    }
                }
                .vl-step__header__titles {
                    margin-top: 0.1rem;
                }
            `),this.simpleTimeline&&s&&(l+=`
                .vl-step::before {
                    bottom: 0;
                }
            `),l}constructor(...t){super(...t),this.line=!1,this.timeline=!1,this.simpleTimeline=!1,this.lastStepNoLine=!1,this.observer=null}}u=function(t,e,s,n){var l,a=arguments.length,o=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,n);else for(var i=t.length-1;i>=0;i--)(l=t[i])&&(o=(a<3?l(o):a>3?l(e,s,o):l(e,s))||o);return a>3&&o&&Object.defineProperty(e,s,o),o}([(0,i.EM)("vl-steps-next")],u)}}]);