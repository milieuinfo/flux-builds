"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[9791],{"../../libs/components/src/toaster/stories/vl-toaster.stories.ts":(t,e,o)=>{o.r(e),o.d(e,{ToasterDefault:()=>v,__namedExportsOrder:()=>h,default:()=>p});var n=o("../../libs/common/utilities/src/index.ts"),a=o("../../libs/elements/src/index.ts"),r=o("../../node_modules/lit-html/lit-html.js"),l=o("../../libs/components/src/alert/vl-alert.component.ts"),s=o("../../libs/components/src/toaster/vl-toaster.element.ts"),i=o("../../libs/common/storybook/src/index.ts");let c={topLeft:{name:"data-vl-top-left",description:"Positioneert de toaster op linkerbovenhoek.",table:{type:{summary:i.QE.BOOLEAN},category:"Attributes",defaultValue:{summary:!1}}},topRight:{name:"data-vl-top-right",description:"Positioneert de toaster op rechterbovenhoek. Standaard gaat de toaster altijd in de rechterbovenhoek getoond worden.",table:{type:{summary:i.QE.BOOLEAN},category:"Attributes",defaultValue:{summary:!1}}},bottomLeft:{name:"data-vl-bottom-left",description:"Positioneert de toaster op linkeronderhoek.",table:{type:{summary:i.QE.BOOLEAN},category:"Attributes",defaultValue:{summary:!1}}},bottomRight:{name:"data-vl-bottom-right",description:"Positioneert de toaster op rechteronderhoek.",table:{type:{summary:i.QE.BOOLEAN},category:"Attributes",defaultValue:{summary:!1}}},fadeOut:{name:"data-vl-fadeout",description:"Elke alert verdwijnt automatisch 5 seconden na openen.",table:{type:{summary:i.QE.BOOLEAN},category:"Attributes",defaultValue:{summary:!1}}}};o("../../node_modules/react/index.js");var d=o("../../node_modules/react/jsx-runtime.js"),u=o("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),b=o("../../node_modules/@storybook/blocks/dist/index.mjs");function m(t){let e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",a:"a"},(0,u.RP)(),t.components),{VluxMetaData:o}=e;return o||function(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("VluxMetaData",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(e.h1,{id:"toaster",children:"Toaster"}),"\n",(0,d.jsx)(o,{id:"elements-toaster"}),"\n",(0,d.jsxs)(e.p,{children:["Gebruik een ",(0,d.jsx)(e.code,{children:"toaster"})," om de gebruiker te informeren over een actie of status van een actie."]}),"\n",(0,d.jsx)(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-js",children:"import { VlToaster } from '@domg-wc/components';\n"})}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-html",children:'<div is="vl-toaster"></div>\n'})}),"\n",(0,d.jsx)(b.Hl,{of:v}),"\n",(0,d.jsx)(e.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,d.jsx)(b.ov,{of:v}),"\n",(0,d.jsx)(e.h2,{id:"gebruik",children:"Gebruik"}),"\n",(0,d.jsxs)(e.p,{children:["Definiëer de ",(0,d.jsx)(e.code,{children:"vl-toaster"})," als laatste element in de body van je HTML. Dit zorgt ervoor dat de toaster bovenaan de pagina verschijnt zonder dat de z-index van andere elementen moet worden aangepast."]}),"\n",(0,d.jsx)(e.h2,{id:"referenties",children:"Referenties"}),"\n",(0,d.jsx)(e.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/js-components/vl-ui-toaster/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Toaster"})}),"\n",(0,d.jsx)(e.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/story/legacy-vl-toaster--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Toaster"})}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlToaster.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Toaster"})}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-toaster.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - Toaster"})})]})}(0,n.gy)([l.r,a.lC,s.L]);let p={id:"components-toaster",title:"Components/toaster",tags:["autodocs"],args:{topLeft:!1,topRight:!1,bottomLeft:!1,bottomRight:!1,fadeOut:!1},argTypes:c,parameters:{docs:{page:function(t={}){let{wrapper:e}=Object.assign({},(0,u.RP)(),t.components);return e?(0,d.jsx)(e,Object.assign({},t,{children:(0,d.jsx)(m,t)})):m(t)}},controls:{hideNoControlsWarning:!0}}},v=({topLeft:t,topRight:e,bottomLeft:o,bottomRight:n,fadeOut:a})=>(0,r.qy)`
    <div id="top-left-toaster" is="vl-toaster" data-vl-top-left data-vl-fadeout data-cy="toaster-top-left"></div>
    <div id="top-right-toaster" is="vl-toaster" data-vl-top-right data-cy="toaster-top-right"></div>
    <div id="bottom-left-toaster" is="vl-toaster" data-vl-bottom-left data-cy="toaster-bottom-left"></div>
    <div id="bottom-right-toaster" is="vl-toaster" data-vl-bottom-right data-cy="toaster-bottom-right"></div>

    <button is="vl-button" onclick="dynamicToaster().push(newSuccessAlert());" data-cy="button-success">Success</button>
    <button is="vl-button" onclick="dynamicToaster().push(newWarningAlert());" data-cy="button-warning">
        Warning toaster
    </button>
    <button is="vl-button" onclick="dynamicToaster().push(newSuccessAlert());" data-cy="button-error">
        Error toaster
    </button>
    <button is="vl-button" onclick="dynamicToaster().push(newCtaAlert());" data-cy="button-cta">CTA toaster</button>

    <br />
    <br />

    <button is="vl-button" onclick="topLeftToaster().push(newSuccessAlert());" data-cy="button-top-left">
        Top-left
    </button>
    <button is="vl-button" onclick="topRightToaster().push(newSuccessAlert());" data-cy="button-top-right">
        Top-right
    </button>
    <button is="vl-button" onclick="bottomLeftToaster().push(newSuccessAlert());" data-cy="button-bottom-left">
        Bottom-left
    </button>
    <button is="vl-button" onclick="bottomRightToaster().push(newSuccessAlert());" data-cy="button-bottom-right">
        Bottom-right
    </button>

    <br />
    <br />
    <vl-alert
        id="alert-1"
        data-vl-type="warning"
        data-vl-icon="warning"
        data-vl-title="Technische storing"
        data-vl-closable
    >
        <p>Door een technische storing is dit loket tijdelijk niet beschikbaar.</p>
    </vl-alert>
    <br />
    <vl-alert id="alert-2" data-vl-type="error" data-vl-icon="warning" data-vl-title="Error" data-vl-closable>
        <p>Er is een fout opgetreden.</p>
    </vl-alert>
    <br />
    <vl-alert id="alert-3" data-vl-type="success" data-vl-icon="check" data-vl-title="Gelukt" data-vl-closable>
        <p>Wij hebben uw melding goed ontvangen en nemen deze spoedig in behandeling.</p>
    </vl-alert>
    <br />
    <vl-alert id="alert-4" data-vl-type="cta" data-vl-icon="info" data-vl-title="Opgelet!" data-vl-closable>
        <p>U heeft geen rechten om deze actie uit te voeren. <a href="#">Vraag rechten aan</a>.</p>
        <button slot="actions" is="vl-button" id="b1">Fout melden</button>
    </vl-alert>
    <div
        id="dynamic-toaster"
        is="vl-toaster"
        ?data-vl-top-left=${t}
        ?data-vl-top-right=${e}
        ?data-vl-bottom-left=${o}
        ?data-vl-bottom-right=${n}
        ?data-vl-fadeout=${a}
        data-cy="dynamic-toaster"
    ></div>
    <script>
        const newWarningAlert = () => document.querySelector('#alert-1').cloneNode(true);
        const newErrorAlert = () => document.querySelector('#alert-2').cloneNode(true);
        const newSuccessAlert = () => document.querySelector('#alert-3').cloneNode(true);
        const newCtaAlert = () => document.querySelector('#alert-4').cloneNode(true);

        const topLeftToaster = () => document.querySelector('#top-left-toaster');
        const topRightToaster = () => document.querySelector('#top-right-toaster');
        const bottomLeftToaster = () => document.querySelector('#bottom-left-toaster');
        const bottomRightToaster = () => document.querySelector('#bottom-right-toaster');

        const dynamicToaster = () => document.querySelector('#dynamic-toaster');
    </script>
`;v.storyName="vl-toaster - default",v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:'({\n  topLeft,\n  topRight,\n  bottomLeft,\n  bottomRight,\n  fadeOut\n}: typeof toasterArgTypes) => html`\n    <div id="top-left-toaster" is="vl-toaster" data-vl-top-left data-vl-fadeout data-cy="toaster-top-left"></div>\n    <div id="top-right-toaster" is="vl-toaster" data-vl-top-right data-cy="toaster-top-right"></div>\n    <div id="bottom-left-toaster" is="vl-toaster" data-vl-bottom-left data-cy="toaster-bottom-left"></div>\n    <div id="bottom-right-toaster" is="vl-toaster" data-vl-bottom-right data-cy="toaster-bottom-right"></div>\n\n    <button is="vl-button" onclick="dynamicToaster().push(newSuccessAlert());" data-cy="button-success">Success</button>\n    <button is="vl-button" onclick="dynamicToaster().push(newWarningAlert());" data-cy="button-warning">\n        Warning toaster\n    </button>\n    <button is="vl-button" onclick="dynamicToaster().push(newSuccessAlert());" data-cy="button-error">\n        Error toaster\n    </button>\n    <button is="vl-button" onclick="dynamicToaster().push(newCtaAlert());" data-cy="button-cta">CTA toaster</button>\n\n    <br />\n    <br />\n\n    <button is="vl-button" onclick="topLeftToaster().push(newSuccessAlert());" data-cy="button-top-left">\n        Top-left\n    </button>\n    <button is="vl-button" onclick="topRightToaster().push(newSuccessAlert());" data-cy="button-top-right">\n        Top-right\n    </button>\n    <button is="vl-button" onclick="bottomLeftToaster().push(newSuccessAlert());" data-cy="button-bottom-left">\n        Bottom-left\n    </button>\n    <button is="vl-button" onclick="bottomRightToaster().push(newSuccessAlert());" data-cy="button-bottom-right">\n        Bottom-right\n    </button>\n\n    <br />\n    <br />\n    <vl-alert\n        id="alert-1"\n        data-vl-type="warning"\n        data-vl-icon="warning"\n        data-vl-title="Technische storing"\n        data-vl-closable\n    >\n        <p>Door een technische storing is dit loket tijdelijk niet beschikbaar.</p>\n    </vl-alert>\n    <br />\n    <vl-alert id="alert-2" data-vl-type="error" data-vl-icon="warning" data-vl-title="Error" data-vl-closable>\n        <p>Er is een fout opgetreden.</p>\n    </vl-alert>\n    <br />\n    <vl-alert id="alert-3" data-vl-type="success" data-vl-icon="check" data-vl-title="Gelukt" data-vl-closable>\n        <p>Wij hebben uw melding goed ontvangen en nemen deze spoedig in behandeling.</p>\n    </vl-alert>\n    <br />\n    <vl-alert id="alert-4" data-vl-type="cta" data-vl-icon="info" data-vl-title="Opgelet!" data-vl-closable>\n        <p>U heeft geen rechten om deze actie uit te voeren. <a href="#">Vraag rechten aan</a>.</p>\n        <button slot="actions" is="vl-button" id="b1">Fout melden</button>\n    </vl-alert>\n    <div\n        id="dynamic-toaster"\n        is="vl-toaster"\n        ?data-vl-top-left=${topLeft}\n        ?data-vl-top-right=${topRight}\n        ?data-vl-bottom-left=${bottomLeft}\n        ?data-vl-bottom-right=${bottomRight}\n        ?data-vl-fadeout=${fadeOut}\n        data-cy="dynamic-toaster"\n    ></div>\n    <script>\n        const newWarningAlert = () => document.querySelector(\'#alert-1\').cloneNode(true);\n        const newErrorAlert = () => document.querySelector(\'#alert-2\').cloneNode(true);\n        const newSuccessAlert = () => document.querySelector(\'#alert-3\').cloneNode(true);\n        const newCtaAlert = () => document.querySelector(\'#alert-4\').cloneNode(true);\n\n        const topLeftToaster = () => document.querySelector(\'#top-left-toaster\');\n        const topRightToaster = () => document.querySelector(\'#top-right-toaster\');\n        const bottomLeftToaster = () => document.querySelector(\'#bottom-left-toaster\');\n        const bottomRightToaster = () => document.querySelector(\'#bottom-right-toaster\');\n\n        const dynamicToaster = () => document.querySelector(\'#dynamic-toaster\');\n    </script>\n`',...v.parameters?.docs?.source}}};let h=["ToasterDefault"]}}]);