"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[9791],{"../../libs/components/src/block/toaster/stories/vl-toaster.stories.ts":(e,t,n)=>{n.r(t),n.d(t,{ToasterDefault:()=>k,ToasterDefaultSlot:()=>y,ToasterFadeOut:()=>w,ToasterShowAlert:()=>x,__namedExportsOrder:()=>T,default:()=>j});var o=n("../../resources/utils-storybook/index.ts"),r=n("../../libs/common/src/index.ts"),a=n("../../node_modules/lit-html/lit-html.js"),l=n("../../node_modules/lit/directives/unsafe-html.js"),s=n("../../libs/components/src/block/loader/index.ts"),d=n("../../libs/components/src/atom/button/index.ts"),i=n("../../libs/components/src/block/toaster/vl-toaster.component.ts"),c=n("../../libs/components/src/block/toaster/vl-toaster.defaults.ts");let u={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right"},m={...o.D8,...c.P,defaultSlot:""},p={...o.RN,fadeOut:{name:"fade-out",description:"Elke alert verdwijnt automatisch 5 seconden na openen. \n\n Dit kan toegankelijkheidsproblemen veroorzaken. Meer info [hier](?path=/docs/components-block-toaster--documentatie#fade-out).",table:{type:{summary:o.QE.BOOLEAN},category:o.R6.ATTRIBUTES,defaultValue:{summary:c.P.fadeOut}}},placement:{name:"placement",description:"Positioneert de toaster.<br>Standaard worden die geplaatst in de rechterbovenhoek.",options:Object.values(u),table:{type:{summary:Object.values(u)},category:o.R6.ATTRIBUTES,defaultValue:{summary:c.P.placement}}},defaultSlot:{name:"[default]",description:"De inhoud van de toaster. Dit is typisch een vl-alert.",table:{type:{summary:o.QE.HTML},category:o.R6.SLOTS}}};n("../../node_modules/react/index.js");var h=n("../../node_modules/react/jsx-runtime.js"),v=n("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),g=n("../../node_modules/@storybook/blocks/dist/index.mjs");function f(e){let t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",a:"a"},(0,v.RP)(),e.components),{FluxMetaData:n,FluxAlert:o}=t;return o||b("FluxAlert",!0),n||b("FluxMetaData",!0),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(t.h1,{id:"toaster",children:"Toaster"}),"\n",(0,h.jsx)(n,{id:"components-block-toaster"}),"\n",(0,h.jsxs)(t.p,{children:["Gebruik de ",(0,h.jsx)(t.code,{children:"toaster"})," component om meldingen af te beelden.",(0,h.jsx)("br",{})]}),"\n",(0,h.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:"language-js",children:"import { VlToasterComponent } from '@domg-wc/components/block';\n"})}),"\n",(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:"language-html",children:"<vl-toaster></vl-toaster>\n"})}),"\n",(0,h.jsx)(g.Hl,{of:k}),"\n",(0,h.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,h.jsx)(g.ov,{of:k}),"\n",(0,h.jsx)(t.h2,{id:"gebruik",children:"Gebruik"}),"\n",(0,h.jsx)(t.h3,{id:"declaratief",children:"Declaratief"}),"\n",(0,h.jsxs)(t.p,{children:["Je kan de meldingen declaratief toevoegen in het default slot van de ",(0,h.jsx)(t.code,{children:"vl-toaster"}),", typisch gebruiken we\nhiervoor de ",(0,h.jsx)(t.a,{href:"/docs/components-block-alert--documentatie",children:"vl-alert"})," component.\nHet element verschijnt dan automatisch op de gekozen positie."]}),"\n",(0,h.jsx)(g.Hl,{of:y}),"\n",(0,h.jsx)(t.h3,{id:"dynamisch",children:"Dynamisch"}),"\n",(0,h.jsxs)(t.p,{children:["De ",(0,h.jsx)(t.code,{children:"showAlert()"}),"-methode, is de eenvoudigste manier om een melding te tonen.\nAchterliggend maken we een ",(0,h.jsx)(t.a,{href:"/docs/components-block-alert--documentatie",children:"vl-alert"})," component aan met de\nopgegeven parameters."]}),"\n",(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:"language-js",children:"const toaster = document.querySelector('vl-toaster');\ntoaster.showAlert({\n  type: 'error',\n  title: 'Fout',\n  message: 'Dit is een foutmelding'\n  fadeOut: true // optioneel, standaard is false\n});\n"})}),"\n",(0,h.jsxs)(t.p,{children:["Je kan het meegegeven object uitbreiden met de properties van de ",(0,h.jsx)(t.a,{href:"/docs/components-block-alert--documentatie",children:"vl-alert"}),"\ncomponent."]}),"\n",(0,h.jsx)(g.Hl,{of:x}),"\n",(0,h.jsxs)(t.p,{children:["Als je meer controle wilt over de melding, kan je ook de ",(0,h.jsx)(t.code,{children:"show()"})," methode gebruiken om een zelf samengesteld\nHTML-element te tonen als melding."]}),"\n",(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:"language-js",children:"const toaster = document.querySelector('vl-toaster');\n// toont de melding gedeclareerd in het default slot van de toaster\ntoaster.show(document.querySelector('#warning-123')); // deze methode toont het meegegeven HTML element als toast\n"})}),"\n",(0,h.jsx)(t.h3,{id:"fade-out",children:"Fade out"}),"\n",(0,h.jsxs)(t.p,{children:["We bieden de mogelijkheid aan om meldingen automatisch te laten verdwijnen na een bepaalde tijd met\nde ",(0,h.jsx)(t.code,{children:"fade-out"})," property."]}),"\n",(0,h.jsx)(o,{type:"warning",children:`
   Echter raden we aan om dit te vermijden waar mogelijk gezien dit de toegankelijkheid van de
   toaster negatief kan be\xefnvloeden. Gebruikers kunnen de melding mogelijk niet op tijd lezen of begrijpen,
   vooral als ze gebruik maken van schermlezers of andere hulpmiddelen.
`}),"\n",(0,h.jsx)(g.Hl,{of:w}),"\n",(0,h.jsx)(t.h2,{id:"toegankelijkheid",children:"Toegankelijkheid"}),"\n",(0,h.jsx)(t.h3,{id:"fade-out-1",children:"fade-out"}),"\n",(0,h.jsxs)(t.p,{children:["We bieden de mogelijkheid aan om meldingen automatisch te laten verdwijnen na een bepaalde tijd met\nde ",(0,h.jsx)(t.code,{children:"fade-out"})," property."]}),"\n",(0,h.jsx)(t.p,{children:"Echter raden we aan om dit te vermijden waar mogelijk gezien dit de toegankelijkheid van de\ntoaster negatief kan beïnvloeden. Gebruikers kunnen de melding mogelijk niet op tijd lezen of begrijpen, vooral als ze\ngebruik maken van schermlezers of andere hulpmiddelen."}),"\n",(0,h.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,h.jsx)(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,h.jsx)(t.p,{children:(0,h.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/atoms/vl-ui-toasters",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Toaster"})})]})}function b(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}(0,r.gy)([d.Y,i.c,s.H]);let j={id:"components-block-toaster",title:"Components - Block/toaster",tags:["autodocs"],args:m,argTypes:p,parameters:{contentPadding:"large",docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,v.RP)(),e.components);return t?(0,h.jsx)(t,Object.assign({},e,{children:(0,h.jsx)(f,e)})):f(e)},story:{inline:!0}},controls:{hideNoControlsWarning:!0}},decorators:[e=>(0,a.qy)` <div style="height: 400px;">${e()}</div>`]},k=(0,o._7)(m,({placement:e,fadeOut:t,defaultSlot:n})=>(0,a.qy)`
        <script>
            document.querySelector('#default-toaster-button')?.addEventListener('click', () => {
                const toaster = document.querySelector('vl-toaster');
                const template = document.querySelector('template');

                if (template && toaster) {
                    const clone = template.content.cloneNode(true);
                    const alert = clone.querySelector('#alert-success');
                    toaster.appendChild(alert);
                }
            });
        </script>
        <template>
            <vl-alert id="alert-success" type="success" icon="check" title="Gelukt" closable>
                <p>Wij hebben uw melding goed ontvangen en nemen deze spoedig in behandeling.</p>
            </vl-alert>
        </template>
        <vl-toaster id="default-toaster" placement=${e} ?fade-out=${t}>
            ${(0,l._)(n)}
        </vl-toaster>
        <vl-button id="default-toaster-button"> Toon succesmelding</vl-button>
    `);k.storyName="vl-toaster - default";let y=(0,o._7)(m,({placement:e,fadeOut:t,defaultSlot:n})=>(0,a.qy)`
        <vl-toaster id="default-toaster" placement=${e} ?fade-out=${t}>
            ${(0,l._)(n)}
        </vl-toaster>
    `);y.storyName="vl-toaster - default slot",y.args={placement:"bottom-right",defaultSlot:`<vl-alert
                    id="alert-default"
                    type="error"
                    icon="warning"
                    title="Foutmelding"
                    small
                >
                    <p>Voorwaarden niet voldaan.</p>
                </vl-alert>`};let x=(0,o._7)(m,({placement:e,fadeOut:t})=>(0,a.qy)`
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
        <vl-toaster id="toaster-show-alert" ?fade-out=${t} placement=${e}></vl-toaster>
        <vl-button id="button-technical-error"> Toon waarschuwing</vl-button>
    `);x.storyName="vl-toaster - show alert",x.parameters={controls:{exclude:["defaultSlot"]}};let w=(0,o._7)(m,({placement:e,fadeOut:t,defaultSlot:n})=>(0,a.qy)`
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
            <vl-alert id="alert-error" type="error" icon="warning" title="Error">
                <p>Er is een fout opgetreden.</p>
            </vl-alert>
            <vl-alert id="alert-loader" title="Melding">
                <vl-loader></vl-loader>
            </vl-alert>
        </template>
        <vl-toaster id="toaster-fade-out" placement=${e} ?fade-out=${t}>
            ${(0,l._)(n)}
        </vl-toaster>
        <vl-button id="button-error"> Toon foutmelding</vl-button>
        <vl-button id="button-loader"> Toon melding met lader</vl-button>
    `);w.storyName="vl-toaster - fade out",w.args={fadeOut:!0},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:'story<ToasterArgs>(toasterArgs, ({\n  placement,\n  fadeOut,\n  defaultSlot\n}) => {\n  return html`\n        <script>\n            document.querySelector(\'#default-toaster-button\')?.addEventListener(\'click\', () => {\n                const toaster = document.querySelector(\'vl-toaster\');\n                const template = document.querySelector(\'template\');\n\n                if (template && toaster) {\n                    const clone = template.content.cloneNode(true);\n                    const alert = clone.querySelector(\'#alert-success\');\n                    toaster.appendChild(alert);\n                }\n            });\n        </script>\n        <template>\n            <vl-alert id="alert-success" type="success" icon="check" title="Gelukt" closable>\n                <p>Wij hebben uw melding goed ontvangen en nemen deze spoedig in behandeling.</p>\n            </vl-alert>\n        </template>\n        <vl-toaster id="default-toaster" placement=${placement} ?fade-out=${fadeOut}>\n            ${unsafeHTML(defaultSlot)}\n        </vl-toaster>\n        <vl-button id="default-toaster-button"> Toon succesmelding</vl-button>\n    `;\n})',...k.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:'story<ToasterArgs>(toasterArgs, ({\n  placement,\n  fadeOut,\n  defaultSlot\n}) => {\n  return html`\n        <vl-toaster id="default-toaster" placement=${placement} ?fade-out=${fadeOut}>\n            ${unsafeHTML(defaultSlot)}\n        </vl-toaster>\n    `;\n})',...y.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"story<ToasterArgs>(toasterArgs, ({\n  placement,\n  fadeOut\n}) => {\n  return html`\n        <script>\n            document.querySelector('#button-technical-error')?.addEventListener('vl-click', () => {\n                const toaster = document.querySelector('#toaster-show-alert');\n                toaster.showAlert({\n                    title: 'Technische storing',\n                    icon: 'warning',\n                    type: 'warning',\n                    message: 'Door een technische storing is dit loket tijdelijk niet beschikbaar.',\n                    closable: true,\n                });\n            });\n        </script>\n        <vl-toaster id=\"toaster-show-alert\" ?fade-out=${fadeOut} placement=${placement}></vl-toaster>\n        <vl-button id=\"button-technical-error\"> Toon waarschuwing</vl-button>\n    `;\n})",...x.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:'story<ToasterArgs>(toasterArgs, ({\n  placement,\n  fadeOut,\n  defaultSlot\n}) => {\n  return html`\n        <script>\n            document.querySelector(\'#button-error\')?.addEventListener(\'vl-click\', () => {\n                const toaster = document.querySelector(\'#toaster-fade-out\');\n                toaster.show(\'#alert-error\');\n            });\n            document.querySelector(\'#button-loader\')?.addEventListener(\'vl-click\', () => {\n                const toaster = document.querySelector(\'#toaster-fade-out\');\n                toaster.show(\'#alert-loader\');\n            });\n        </script>\n        <template>\n            <vl-alert id="alert-error" type="error" icon="warning" title="Error">\n                <p>Er is een fout opgetreden.</p>\n            </vl-alert>\n            <vl-alert id="alert-loader" title="Melding">\n                <vl-loader></vl-loader>\n            </vl-alert>\n        </template>\n        <vl-toaster id="toaster-fade-out" placement=${placement} ?fade-out=${fadeOut}>\n            ${unsafeHTML(defaultSlot)}\n        </vl-toaster>\n        <vl-button id="button-error"> Toon foutmelding</vl-button>\n        <vl-button id="button-loader"> Toon melding met lader</vl-button>\n    `;\n})',...w.parameters?.docs?.source}}};let T=["ToasterDefault","ToasterDefaultSlot","ToasterShowAlert","ToasterFadeOut"]},"../../node_modules/lit-html/directives/unsafe-html.js":(e,t,n)=>{n.d(t,{_:()=>l});var o=n("../../node_modules/lit-html/lit-html.js"),r=n("../../node_modules/lit-html/directive.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class a extends r.WL{constructor(e){if(super(e),this.et=o.s6,e.type!==r.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===o.s6||null==e)return this.vt=void 0,this.et=e;if(e===o.c0)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;var t=[e];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}}a.directiveName="unsafeHTML",a.resultType=1;var l=(0,r.u$)(a)},"../../node_modules/lit/directives/unsafe-html.js":(e,t,n)=>{n.d(t,{_:()=>o._});var o=n("../../node_modules/lit-html/directives/unsafe-html.js")}}]);