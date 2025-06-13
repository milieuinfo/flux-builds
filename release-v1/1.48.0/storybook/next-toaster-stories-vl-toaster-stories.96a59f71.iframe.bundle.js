"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[113],{"../../libs/components/src/next/toaster/stories/vl-toaster.stories.ts":(e,t,o)=>{o.r(t),o.d(t,{ToasterDefault:()=>j,ToasterFadeOut:()=>w,ToasterShowAlert:()=>T,__namedExportsOrder:()=>k,default:()=>y});var n=o("../../libs/common/storybook/src/index.ts"),r=o("../../libs/common/utilities/src/index.ts"),s=o("../../node_modules/lit-html/lit-html.js"),a=o("../../node_modules/lit/directives/unsafe-html.js"),l=o("../../libs/components/src/loader/index.ts"),i=o("../../libs/components/src/next/button/index.ts"),d=o("../../node_modules/lit/index.js"),c=o("../../libs/components/src/alert/index.ts");let u=(0,d.AH)`
    :host {
        position: fixed;
        width: 30rem;
        top: 0;
        right: 0;
        z-index: var(--vl-z-layer--toaster);
    }

    :host([placement='top-left']) {
        right: auto;
        left: 0;
    }

    :host([placement='bottom-right']) {
        top: auto;
        bottom: 0;
    }

    :host([placement='bottom-left']) {
        top: auto;
        right: auto;
        bottom: 0;
        left: 0;
    }

    :host > * {
        animation: fade-in 0.3s ease;
    }

    :host([fade-out]) > * {
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
`,m={fadeOut:!1,placement:"top-right"};(0,r.gy)([c.rC]);class h extends r.jW{static get styles(){return[u]}static get properties(){return{fadeOut:{type:Boolean,attribute:"fade-out"},placement:{type:String}}}render(){return(0,d.qy)` <output class="vl-toaster"></output> `}disconnectedCallback(){this.abortController.abort("animationend")}show(e){let t;let o=this.children[0]?.cloneNode(!0);if(!e&&o)t=o;else if(e&&"string"==typeof e){let o=this.querySelector(e);(t=o?.cloneNode(!0)).removeAttribute("id")}else e instanceof HTMLElement&&(t=e);t&&this.showToast(t)}showAlert(e){let t=document.createElement("vl-alert");Object.entries(e).forEach(([e,o])=>{o&&t.setAttribute(`data-vl-${e}`,o)}),this.appendChild(t),this.showToast(t)}showToast(e){"bottom-right"===this.placement||"bottom-left"===this.placement?this.shadowRoot?.appendChild(e):this.shadowRoot?.prepend(e),this.fadeOut&&e.addEventListener("animationend",t=>{t?.animationName==="fade-out"&&e.remove()},{signal:this.abortController.signal})}constructor(...e){super(...e),this.fadeOut=m.fadeOut,this.placement=m.placement,this.abortController=new AbortController}}h=function(e,t,o,n){var r,s=arguments.length,a=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(s<3?r(a):s>3?r(t,o,a):r(t,o))||a);return s>3&&a&&Object.defineProperty(t,o,a),a}([(0,r.M1)("vl-toaster-next")],h);let p={...n.D8,...m,defaultSlot:""},v={...(0,n.RN)(!0),fadeOut:{name:"fade-out",description:"Elke alert verdwijnt automatisch 5 seconden na openen. \n Dit attribuut is niet reactief.",table:{type:{summary:n.QE.BOOLEAN},category:n.R6.ATTRIBUTES,defaultValue:{summary:!1}}},placement:{name:"placement",description:"Positioneert de toaster. \nStandaard worden die geplaatst in de rechterbovenhoek.",options:Object.values({TOP_LEFT:"top-left",TOP_RIGHT:"top-right",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right"}),table:{type:{summary:n.QE.STRING},category:n.R6.ATTRIBUTES,defaultValue:{summary:!1}}},defaultSlot:{name:"[default]",table:{type:{summary:n.QE.HTML},category:n.R6.SLOTS}}};o("../../node_modules/react/index.js");var f=o("../../node_modules/react/jsx-runtime.js"),b=o("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),g=o("../../node_modules/@storybook/blocks/dist/index.mjs");function x(e){let t=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",h3:"h3"},(0,b.RP)(),e.components),{VluxMetaData:o}=t;return o||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VluxMetaData",!0),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.h1,{id:"toaster---next",children:"Toaster - next"}),"\n",(0,f.jsx)(o,{id:"components-next-toaster"}),"\n",(0,f.jsxs)(t.p,{children:["Gebruik de ",(0,f.jsx)(t.code,{children:"toaster-next"})," component om een toaster af te beelden.",(0,f.jsx)("br",{})]}),"\n",(0,f.jsxs)(t.p,{children:["Deze component is de nieuwe versie van het ",(0,f.jsx)(t.a,{href:"/docs/elements-toaster-h1--documentatie",children:"vl-toaster"})," element."]}),"\n",(0,f.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:"language-js",children:"import { VlToasterComponent } from '@domg-wc/components/next/toaster';\n"})}),"\n",(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:"language-html",children:"<vl-toaster-next></vl-toaster-next>\n"})}),"\n",(0,f.jsx)(g.Hl,{of:j,inline:!0}),"\n",(0,f.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,f.jsx)(g.ov,{of:j}),"\n",(0,f.jsx)(t.h2,{id:"meldingen-tonen",children:"Meldingen tonen"}),"\n",(0,f.jsx)(t.h3,{id:"dynamisch",children:"Dynamisch"}),"\n",(0,f.jsxs)(t.p,{children:["Om een melding te tonen, gebruik je de ",(0,f.jsx)(t.code,{children:"showAlert()"})," methode."]}),"\n",(0,f.jsx)(t.p,{children:"Deze methode roep je op de volgende manier op:"}),"\n",(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:"language-ts",children:"const toaster = document.querySelector('vl-toaster-next');\ntoaster.showAlert({\n  type: 'error',\n  title: 'Fout',\n  message: 'Dit is een foutmelding'\n});\n"})}),"\n",(0,f.jsxs)(t.p,{children:["Je kan het meegegeven object uitbreiden met de properties van de ",(0,f.jsx)(t.a,{href:"/docs/components-alert--documentatie",children:"vl-alert"})," component."]}),"\n",(0,f.jsx)(g.Hl,{of:T}),"\n",(0,f.jsx)(t.h3,{id:"declaratief",children:"Declaratief"}),"\n",(0,f.jsxs)(t.p,{children:["Daarnaast kan je de meldingen ook declaratief toevoegen in het default slot van de ",(0,f.jsx)(t.code,{children:"vl-toaster"}),", typisch gebruiken we\nhiervoor de ",(0,f.jsx)(t.a,{href:"/docs/components-alert--documentatie",children:"vl-alert"})," component."]}),"\n",(0,f.jsxs)(t.p,{children:["Om een melding te tonen, gebruik je de ",(0,f.jsx)(t.code,{children:"show()"})," methode:"]}),"\n",(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:"language-ts",children:"const toaster = document.querySelector('vl-toaster-next');\n// toont de melding gedeclareerd in het default slot van de toaster\ntoaster.show();\n"})}),"\n",(0,f.jsx)(g.Hl,{of:w}),"\n",(0,f.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,f.jsx)(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,f.jsx)(t.p,{children:(0,f.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/atoms/vl-ui-toasters",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Toaster"})})]})}(0,r.gy)([i.Y,h,l.H]);let y={id:"components-next-toaster",title:"Components-next/toaster",tags:["autodocs"],args:p,argTypes:v,parameters:{contentPadding:"large",docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,b.RP)(),e.components);return t?(0,f.jsx)(t,Object.assign({},e,{children:(0,f.jsx)(x,e)})):x(e)},story:{inline:!0}},controls:{hideNoControlsWarning:!0}},decorators:[e=>(0,s.qy)` <div style="height: 400px;">${e()}</div>`]},j=(0,n._7)(p,({placement:e,fadeOut:t,defaultSlot:o})=>(0,s.qy)`
        <script>
            const button = document.querySelector('vl-button-next');
            button.addEventListener('vl-click', () => {
                const toaster = document.querySelector('vl-toaster-next');
                toaster.show();
            });
        </script>
        <vl-toaster-next id="default-toaster" placement=${e} ?fade-out=${t}>
            ${(0,a._)(o)}
        </vl-toaster-next>
        <vl-button-next> Toon succesmelding </vl-button-next>
    `);j.storyName="vl-toaster - default",j.args={defaultSlot:'<vl-alert data-vl-type="success" data-vl-icon="check" data-vl-title="Gelukt" data-vl-closable>\n <p>Wij hebben uw melding goed ontvangen en nemen deze spoedig in behandeling.</p>\n</vl-alert>'};let T=(0,n._7)(p,({placement:e,fadeOut:t})=>(0,s.qy)`
        <script>
            const buttonTechnicalError = document.querySelector('#button-technical-error');
            buttonTechnicalError.addEventListener('vl-click', () => {
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
        <vl-toaster-next id="toaster-show-alert" ?fade-out=${t} placement=${e}> </vl-toaster-next>
        <vl-button-next id="button-technical-error"> Toon waarschuwing </vl-button-next>
    `);T.storyName="vl-toaster - show alert",T.parameters={controls:{exclude:["defaultSlot"]}};let w=(0,n._7)(p,({placement:e,fadeOut:t,defaultSlot:o})=>(0,s.qy)`
        <script>
            const buttonError = document.querySelector('#button-error');
            console.log('buttonError', buttonError);
            buttonError.addEventListener('vl-click', () => {
                const toaster = document.querySelector('#toaster-fade-out');
                toaster.show('#alert-error');
            });
            const buttonLoader = document.querySelector('#button-loader');
            buttonLoader.addEventListener('vl-click', () => {
                const toaster = document.querySelector('#toaster-fade-out');
                toaster.show('#alert-loader');
            });
        </script>
        <vl-toaster-next id="toaster-fade-out" placement=${e} ?fade-out=${t}>
            ${(0,a._)(o)}
        </vl-toaster-next>
        <vl-button-next id="button-error"> Toon foutmelding </vl-button-next>
        <vl-button-next id="button-loader"> Toon melding met lader </vl-button-next>
    `);w.storyName="vl-toaster - fade out",w.args={fadeOut:!0,defaultSlot:'<vl-alert id="alert-error" data-vl-type="error" data-vl-icon="warning" data-vl-title="Error">\n<p>Er is een fout opgetreden.</p>\n </vl-alert>\n<vl-alert id="alert-loader" data-vl-title="Melding">\n<vl-loader></vl-loader>\n </vl-alert>'},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:"story<ToasterArgs>(toasterArgs, ({\n  placement,\n  fadeOut,\n  defaultSlot\n}) => {\n  return html`\n        <script>\n            const button = document.querySelector('vl-button-next');\n            button.addEventListener('vl-click', () => {\n                const toaster = document.querySelector('vl-toaster-next');\n                toaster.show();\n            });\n        </script>\n        <vl-toaster-next id=\"default-toaster\" placement=${placement} ?fade-out=${fadeOut}>\n            ${unsafeHTML(defaultSlot)}\n        </vl-toaster-next>\n        <vl-button-next> Toon succesmelding </vl-button-next>\n    `;\n})",...j.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:"story<ToasterArgs>(toasterArgs, ({\n  placement,\n  fadeOut\n}) => {\n  return html`\n        <script>\n            const buttonTechnicalError = document.querySelector('#button-technical-error');\n            buttonTechnicalError.addEventListener('vl-click', () => {\n                const toaster = document.querySelector('#toaster-show-alert');\n                toaster.showAlert({\n                    title: 'Technische storing',\n                    icon: 'warning',\n                    type: 'warning',\n                    message: 'Door een technische storing is dit loket tijdelijk niet beschikbaar.',\n                    closable: true,\n                });\n            });\n        </script>\n        <vl-toaster-next id=\"toaster-show-alert\" ?fade-out=${fadeOut} placement=${placement}> </vl-toaster-next>\n        <vl-button-next id=\"button-technical-error\"> Toon waarschuwing </vl-button-next>\n    `;\n})",...T.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:"story<ToasterArgs>(toasterArgs, ({\n  placement,\n  fadeOut,\n  defaultSlot\n}) => {\n  return html`\n        <script>\n            const buttonError = document.querySelector('#button-error');\n            console.log('buttonError', buttonError);\n            buttonError.addEventListener('vl-click', () => {\n                const toaster = document.querySelector('#toaster-fade-out');\n                toaster.show('#alert-error');\n            });\n            const buttonLoader = document.querySelector('#button-loader');\n            buttonLoader.addEventListener('vl-click', () => {\n                const toaster = document.querySelector('#toaster-fade-out');\n                toaster.show('#alert-loader');\n            });\n        </script>\n        <vl-toaster-next id=\"toaster-fade-out\" placement=${placement} ?fade-out=${fadeOut}>\n            ${unsafeHTML(defaultSlot)}\n        </vl-toaster-next>\n        <vl-button-next id=\"button-error\"> Toon foutmelding </vl-button-next>\n        <vl-button-next id=\"button-loader\"> Toon melding met lader </vl-button-next>\n    `;\n})",...w.parameters?.docs?.source}}};let k=["ToasterDefault","ToasterShowAlert","ToasterFadeOut"]},"../../node_modules/lit-html/directives/unsafe-html.js":(e,t,o)=>{o.d(t,{_:()=>a});var n=o("../../node_modules/lit-html/lit-html.js"),r=o("../../node_modules/lit-html/directive.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class s extends r.WL{constructor(e){if(super(e),this.et=n.s6,e.type!==r.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===n.s6||null==e)return this.vt=void 0,this.et=e;if(e===n.c0)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;var t=[e];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}}s.directiveName="unsafeHTML",s.resultType=1;var a=(0,r.u$)(s)},"../../node_modules/lit/directives/unsafe-html.js":(e,t,o)=>{o.d(t,{_:()=>n._});var n=o("../../node_modules/lit-html/directives/unsafe-html.js")}}]);