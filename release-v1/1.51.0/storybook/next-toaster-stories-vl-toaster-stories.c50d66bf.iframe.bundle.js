"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[113],{"../../libs/components/src/next/toaster/stories/vl-toaster.stories.ts":(e,t,n)=>{n.r(t),n.d(t,{ToasterDefault:()=>y,ToasterDefaultSlot:()=>j,ToasterFadeOut:()=>k,ToasterShowAlert:()=>w,__namedExportsOrder:()=>T,default:()=>x});var o=n("../../libs/common/storybook/src/index.ts"),r=n("../../libs/common/utilities/src/index.ts"),a=n("../../node_modules/lit-html/lit-html.js"),l=n("../../node_modules/lit/directives/unsafe-html.js"),s=n("../../libs/components/src/loader/index.ts"),i=n("../../libs/components/src/next/button/index.ts"),d=n("../../libs/components/src/next/toaster/vl-toaster.component.ts"),c=n("../../libs/components/src/next/toaster/vl-toaster.defaults.ts");let u={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right"},m={...o.D8,...c.P,defaultSlot:""},p={...(0,o.RN)(!0),fadeOut:{name:"fade-out",description:"Elke alert verdwijnt automatisch 5 seconden na openen.<br>Dit attribuut is niet reactief.",table:{type:{summary:o.QE.BOOLEAN},category:o.R6.ATTRIBUTES,defaultValue:{summary:!1}}},placement:{name:"placement",description:"Positioneert de toaster.<br>Standaard worden die geplaatst in de rechterbovenhoek.",options:Object.values(u),table:{type:{summary:Object.values(u)},category:o.R6.ATTRIBUTES,defaultValue:{summary:"top-right"}}},defaultSlot:{name:"[default]",description:"De inhoud van de toaster. Dit is meestal een alert.",table:{type:{summary:o.QE.HTML},category:o.R6.SLOTS}}};n("../../node_modules/react/index.js");var h=n("../../node_modules/react/jsx-runtime.js"),v=n("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),f=n("../../node_modules/@storybook/blocks/dist/index.mjs");function g(e){let t=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",h3:"h3"},(0,v.RP)(),e.components),{VluxMetaData:n,VluxAlert:o}=t;return o||b("VluxAlert",!0),n||b("VluxMetaData",!0),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(t.h1,{id:"toaster---next",children:"Toaster - next"}),"\n",(0,h.jsx)(n,{id:"components-next-toaster"}),"\n",(0,h.jsxs)(t.p,{children:["Gebruik de ",(0,h.jsx)(t.code,{children:"toaster-next"})," component om meldingen af te beelden.",(0,h.jsx)("br",{})]}),"\n",(0,h.jsxs)(t.p,{children:["Deze component is de nieuwe versie van het ",(0,h.jsx)(t.a,{href:"/docs/elements-toaster-h1--documentatie",children:"vl-toaster"})," element."]}),"\n",(0,h.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:"language-js",children:"import { VlToasterComponent } from '@domg-wc/components/next/toaster';\n"})}),"\n",(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:"language-html",children:"<vl-toaster-next></vl-toaster-next>\n"})}),"\n",(0,h.jsx)(f.Hl,{of:y}),"\n",(0,h.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,h.jsx)(f.ov,{of:y}),"\n",(0,h.jsx)(t.h2,{id:"gebruik",children:"Gebruik"}),"\n",(0,h.jsx)(t.h3,{id:"declaratief",children:"Declaratief"}),"\n",(0,h.jsxs)(t.p,{children:["Je kan de meldingen declaratief toevoegen in het default slot van de ",(0,h.jsx)(t.code,{children:"vl-toaster"}),", typisch gebruiken we\nhiervoor de ",(0,h.jsx)(t.a,{href:"/docs/components-alert--documentatie",children:"vl-alert"})," component.\nHet element verschijnt dan automatisch op de gekozen positie."]}),"\n",(0,h.jsx)(f.Hl,{of:j}),"\n",(0,h.jsx)(t.h3,{id:"dynamisch",children:"Dynamisch"}),"\n",(0,h.jsxs)(t.p,{children:["De ",(0,h.jsx)(t.code,{children:"showAlert()"}),"-methode, is de eenvoudigste manier om een melding te tonen.\nAchterliggend maken we een ",(0,h.jsx)(t.a,{href:"/docs/components-block-alert--documentatie",children:"vl-alert"})," component aan met de\nopgegeven parameters."]}),"\n",(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:"language-js",children:"const toaster = document.querySelector('vl-toaster-next');\ntoaster.showAlert({\n  type: 'error',\n  title: 'Fout',\n  message: 'Dit is een foutmelding'\n  fadeOut: true // optioneel, standaard is false\n});\n"})}),"\n",(0,h.jsxs)(t.p,{children:["Je kan het meegegeven object uitbreiden met de properties van de ",(0,h.jsx)(t.a,{href:"/docs/components-alert--documentatie",children:"vl-alert"}),"\ncomponent."]}),"\n",(0,h.jsx)(f.Hl,{of:w}),"\n",(0,h.jsxs)(t.p,{children:["Als je meer controle wilt over de melding, kan je ook de ",(0,h.jsx)(t.code,{children:"show()"})," methode gebruiken om een zelf samengesteld\nHTML-element te tonen als melding."]}),"\n",(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:"language-js",children:"const toaster = document.querySelector('vl-toaster-next');\n// toont de melding gedeclareerd in het default slot van de toaster\ntoaster.show(document.querySelector('#warning-123')); // deze methode toont het meegegeven HTML element als toast\n"})}),"\n",(0,h.jsx)(t.h3,{id:"fade-out",children:"Fade out"}),"\n",(0,h.jsxs)(t.p,{children:["We bieden de mogelijkheid aan om meldingen automatisch te laten verdwijnen na een bepaalde tijd met\nde ",(0,h.jsx)(t.code,{children:"fade-out"})," property."]}),"\n",(0,h.jsx)(o,{type:"warning",children:`
   Echter raden we aan om dit te vermijden waar mogelijk gezien dit de toegankelijkheid van de
   toaster negatief kan be\xefnvloeden. Gebruikers kunnen de melding mogelijk niet op tijd lezen of begrijpen,
   vooral als ze gebruik maken van schermlezers of andere hulpmiddelen.
`}),"\n",(0,h.jsx)(f.Hl,{of:k}),"\n",(0,h.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,h.jsx)(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,h.jsx)(t.p,{children:(0,h.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/atoms/vl-ui-toasters",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Toaster"})})]})}function b(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}(0,r.gy)([i.Y,d.c,s.H]);let x={id:"components-next-toaster",title:"Components-next/toaster",tags:["autodocs"],args:m,argTypes:p,parameters:{contentPadding:"large",docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,v.RP)(),e.components);return t?(0,h.jsx)(t,Object.assign({},e,{children:(0,h.jsx)(g,e)})):g(e)},story:{inline:!0}},controls:{hideNoControlsWarning:!0}},decorators:[e=>(0,a.qy)` <div style="height: 400px;">${e()}</div>`]},y=(0,o._7)(m,({placement:e,fadeOut:t,defaultSlot:n})=>(0,a.qy)`
        <script>
            document.querySelector('#default-toaster-button')?.addEventListener('click', () => {
                const toaster = document.querySelector('vl-toaster-next');
                const template = document.querySelector('template');

                if (template && toaster) {
                    const clone = template.content.cloneNode(true);
                    const alert = clone.querySelector('#alert-success');
                    toaster.appendChild(alert);
                }
            });
        </script>
        <template>
            <vl-alert
                id="alert-success"
                data-vl-type="success"
                data-vl-icon="check"
                data-vl-title="Gelukt"
                data-vl-closable
            >
                <p>Wij hebben uw melding goed ontvangen en nemen deze spoedig in behandeling.</p>
            </vl-alert>
        </template>
        <vl-toaster-next id="default-toaster" placement=${e} ?fade-out=${t}>
            ${(0,l._)(n)}
        </vl-toaster-next>
        <vl-button-next id="default-toaster-button"> Toon succesmelding</vl-button-next>
    `);y.storyName="vl-toaster - default";let j=(0,o._7)(m,({placement:e,fadeOut:t,defaultSlot:n})=>(0,a.qy)`
        <vl-toaster-next id="default-toaster" placement=${e} ?fade-out=${t}>
            ${(0,l._)(n)}
        </vl-toaster-next>
    `);j.storyName="vl-toaster - default slot",j.args={placement:"bottom-right",defaultSlot:`<vl-alert
                    id="alert-default"
                    data-vl-type="error"
                    data-vl-icon="warning"
                    data-vl-title="Foutmelding"
                    data-vl-small
                >
                    <p>Voorwaarden niet voldaan.</p>
                </vl-alert>`};let w=(0,o._7)(m,({placement:e,fadeOut:t})=>(0,a.qy)`
        <script>
            document.querySelector('#button-technical-error')?.addEventListener('vl-click', () => {
                const toaster = document.querySelector('#toaster-show-alert');
                toaster.showAlert({
                    title: 'Technische storing',
                    icon: 'warning',
                    type: 'warning',
                    message: 'Door een technische storing is dit loket tijdelijk niet beschikbaar.',
                    closable: true,
                });
            });
        </script>
        <vl-toaster-next id="toaster-show-alert" ?fade-out=${t} placement=${e}></vl-toaster-next>
        <vl-button-next id="button-technical-error"> Toon waarschuwing</vl-button-next>
    `);w.storyName="vl-toaster - show alert",w.parameters={controls:{exclude:["defaultSlot"]}};let k=(0,o._7)(m,({placement:e,fadeOut:t,defaultSlot:n})=>(0,a.qy)`
        <script>
            document.querySelector('#button-error')?.addEventListener('vl-click', () => {
                const toaster = document.querySelector('#toaster-fade-out');
                toaster.show('#alert-error');
            });
            document.querySelector('#button-loader')?.addEventListener('vl-click', () => {
                const toaster = document.querySelector('#toaster-fade-out');
                toaster.show('#alert-loader');
            });
        </script>
        <template>
            <vl-alert id="alert-error" data-vl-type="error" data-vl-icon="warning" data-vl-title="Error">
                <p>Er is een fout opgetreden.</p>
            </vl-alert>
            <vl-alert id="alert-loader" data-vl-title="Melding">
                <vl-loader></vl-loader>
            </vl-alert>
        </template>
        <vl-toaster-next id="toaster-fade-out" placement=${e} ?fade-out=${t}>
            ${(0,l._)(n)}
        </vl-toaster-next>
        <vl-button-next id="button-error"> Toon foutmelding</vl-button-next>
        <vl-button-next id="button-loader"> Toon melding met lader</vl-button-next>
    `);k.storyName="vl-toaster - fade out",k.args={fadeOut:!0},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:'story<ToasterArgs>(toasterArgs, ({\n  placement,\n  fadeOut,\n  defaultSlot\n}) => {\n  return html`\n        <script>\n            document.querySelector(\'#default-toaster-button\')?.addEventListener(\'click\', () => {\n                const toaster = document.querySelector(\'vl-toaster-next\');\n                const template = document.querySelector(\'template\');\n\n                if (template && toaster) {\n                    const clone = template.content.cloneNode(true);\n                    const alert = clone.querySelector(\'#alert-success\');\n                    toaster.appendChild(alert);\n                }\n            });\n        </script>\n        <template>\n            <vl-alert\n                id="alert-success"\n                data-vl-type="success"\n                data-vl-icon="check"\n                data-vl-title="Gelukt"\n                data-vl-closable\n            >\n                <p>Wij hebben uw melding goed ontvangen en nemen deze spoedig in behandeling.</p>\n            </vl-alert>\n        </template>\n        <vl-toaster-next id="default-toaster" placement=${placement} ?fade-out=${fadeOut}>\n            ${unsafeHTML(defaultSlot)}\n        </vl-toaster-next>\n        <vl-button-next id="default-toaster-button"> Toon succesmelding</vl-button-next>\n    `;\n})',...y.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:'story<ToasterArgs>(toasterArgs, ({\n  placement,\n  fadeOut,\n  defaultSlot\n}) => {\n  return html`\n        <vl-toaster-next id="default-toaster" placement=${placement} ?fade-out=${fadeOut}>\n            ${unsafeHTML(defaultSlot)}\n        </vl-toaster-next>\n    `;\n})',...j.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:"story<ToasterArgs>(toasterArgs, ({\n  placement,\n  fadeOut\n}) => {\n  return html`\n        <script>\n            document.querySelector('#button-technical-error')?.addEventListener('vl-click', () => {\n                const toaster = document.querySelector('#toaster-show-alert');\n                toaster.showAlert({\n                    title: 'Technische storing',\n                    icon: 'warning',\n                    type: 'warning',\n                    message: 'Door een technische storing is dit loket tijdelijk niet beschikbaar.',\n                    closable: true,\n                });\n            });\n        </script>\n        <vl-toaster-next id=\"toaster-show-alert\" ?fade-out=${fadeOut} placement=${placement}></vl-toaster-next>\n        <vl-button-next id=\"button-technical-error\"> Toon waarschuwing</vl-button-next>\n    `;\n})",...w.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:'story<ToasterArgs>(toasterArgs, ({\n  placement,\n  fadeOut,\n  defaultSlot\n}) => {\n  return html`\n        <script>\n            document.querySelector(\'#button-error\')?.addEventListener(\'vl-click\', () => {\n                const toaster = document.querySelector(\'#toaster-fade-out\');\n                toaster.show(\'#alert-error\');\n            });\n            document.querySelector(\'#button-loader\')?.addEventListener(\'vl-click\', () => {\n                const toaster = document.querySelector(\'#toaster-fade-out\');\n                toaster.show(\'#alert-loader\');\n            });\n        </script>\n        <template>\n            <vl-alert id="alert-error" data-vl-type="error" data-vl-icon="warning" data-vl-title="Error">\n                <p>Er is een fout opgetreden.</p>\n            </vl-alert>\n            <vl-alert id="alert-loader" data-vl-title="Melding">\n                <vl-loader></vl-loader>\n            </vl-alert>\n        </template>\n        <vl-toaster-next id="toaster-fade-out" placement=${placement} ?fade-out=${fadeOut}>\n            ${unsafeHTML(defaultSlot)}\n        </vl-toaster-next>\n        <vl-button-next id="button-error"> Toon foutmelding</vl-button-next>\n        <vl-button-next id="button-loader"> Toon melding met lader</vl-button-next>\n    `;\n})',...k.parameters?.docs?.source}}};let T=["ToasterDefault","ToasterDefaultSlot","ToasterShowAlert","ToasterFadeOut"]},"../../node_modules/lit-html/directives/unsafe-html.js":(e,t,n)=>{n.d(t,{_:()=>l});var o=n("../../node_modules/lit-html/lit-html.js"),r=n("../../node_modules/lit-html/directive.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class a extends r.WL{constructor(e){if(super(e),this.et=o.s6,e.type!==r.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===o.s6||null==e)return this.vt=void 0,this.et=e;if(e===o.c0)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;var t=[e];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}}a.directiveName="unsafeHTML",a.resultType=1;var l=(0,r.u$)(a)},"../../node_modules/lit/directives/unsafe-html.js":(e,t,n)=>{n.d(t,{_:()=>o._});var o=n("../../node_modules/lit-html/directives/unsafe-html.js")},"../../libs/components/src/next/toaster/vl-toaster.component.ts":(e,t,n)=>{n.d(t,{c:()=>i});var o=n("../../libs/common/utilities/src/index.ts"),r=n("../../node_modules/lit/index.js"),a=n("../../libs/components/src/alert/index.ts");let l=(0,r.AH)`
    :host {
        position: fixed;
        width: 100%;
        max-width: 30rem;
        top: 0;
        right: 0;
        z-index: var(--vl-z-layer--toaster);

        ::slotted(vl-alert),
        vl-alert {
            display: block;
            margin: 1rem 1rem 0 0;
        }
    }

    :host([placement='top-left']) {
        right: auto;
        left: 0;

        ::slotted(vl-alert),
        vl-alert {
            margin: 1rem 0 0 1rem;
        }
    }

    :host([placement='bottom-right']) {
        top: auto;
        bottom: 0;

        ::slotted(vl-alert),
        vl-alert {
            margin: 0 1rem 1rem 0;
        }
    }

    :host([placement='bottom-left']) {
        top: auto;
        right: auto;
        bottom: 0;
        left: 0;

        ::slotted(vl-alert),
        vl-alert {
            margin: 0 0 1rem 1rem;
        }
    }

    :host output * {
        animation: fade-in 0.3s ease;
    }

    :host([fade-out]) output * {
        animation: fade-in 0.3s ease, fade-out 0.3s ease 4.4s;
    }

    @keyframes fade-in {
        from {
            opacity: 0;
        }
    }

    @keyframes fade-out {
        to {
            opacity: 0;
        }
    }
`;var s=n("../../libs/components/src/next/toaster/vl-toaster.defaults.ts");(0,o.gy)([a.rC]);class i extends o.jW{static get styles(){return[l]}static get properties(){return{fadeOut:{type:Boolean,attribute:"fade-out"},placement:{type:String}}}render(){return(0,r.qy)`
            <output class="vl-toaster">
                <slot></slot>
            </output>
        `}disconnectedCallback(){this.abortController.abort("animationend")}show(e){let t;let n=this.children[0]?.cloneNode(!0);if(!e&&n)t=n,t?.removeAttribute("id"),t?.removeAttribute("slot");else if(e&&"string"==typeof e){let n=document.querySelector(e);t=n?.cloneNode(!0),t?.removeAttribute("id"),t?.removeAttribute("slot")}else e instanceof HTMLElement&&(t=e);t&&this.showToast(t)}showAlert(e){let t=document.createElement("vl-alert");Object.entries(e).forEach(([e,n])=>{n&&t.setAttribute(`data-vl-${e}`,n)}),this.showToast(t)}get outputElement(){return this.shadowRoot?.querySelector("output")}constructor(...e){super(...e),this.fadeOut=s.P.fadeOut,this.placement=s.P.placement,this.abortController=new AbortController,this.initialized=!1,this.showToast=async e=>{this.initialized||(this.initialized=!0,await this.updateComplete),"bottom-right"===this.placement||"bottom-left"===this.placement?this.outputElement?.appendChild(e):this.outputElement?.prepend(e),this.fadeOut&&e.addEventListener("animationend",t=>{t?.animationName==="fade-out"&&e.remove()},{signal:this.abortController.signal})}}}i=function(e,t,n,o){var r,a=arguments.length,l=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(l=(a<3?r(l):a>3?r(t,n,l):r(t,n))||l);return a>3&&l&&Object.defineProperty(t,n,l),l}([(0,o.M1)("vl-toaster-next")],i)},"../../libs/components/src/next/toaster/vl-toaster.defaults.ts":(e,t,n)=>{n.d(t,{P:()=>o});let o={fadeOut:!1,placement:"top-right"}}}]);