"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[417],{"../../libs/elements/src/multiselect/stories/vl-multiselect.stories.ts":(e,t,l)=>{l.r(t),l.d(t,{MultiselectDefault:()=>u,MultiselectGroupedItems:()=>p,MultiselectPredefinedOption:()=>m,__namedExportsOrder:()=>v,default:()=>d});var o=l("../../node_modules/lit-html/lit-html.js");l("../../libs/elements/src/link/vl-link.element.ts"),l("../../libs/elements/src/multiselect/vl-multiselect.element.ts");var n=l("../../libs/common/storybook/src/index.ts");let s={block:{name:"data-vl-block",description:"Attribuut wordt gebruikt om ervoor te zorgen dat de textarea getoond wordt als een block element en bijgevolg de breedte van de parent zal aannemen.",table:{type:{summary:n.QE.STRING},category:n.R6.ATTRIBUTES,defaultValue:{summary:!1}}},error:{name:"data-vl-error",description:"Attribuut wordt gebruikt om aan te duiden dat het select element verplicht is of ongeldige tekst bevat.",table:{type:{summary:n.QE.BOOLEAN},category:n.R6.ATTRIBUTES,defaultValue:{summary:!1}}},success:{name:"data-vl-success",description:"Attribuut wordt gebruikt om aan te duiden dat het select element correct werd ingevuld.",table:{type:{summary:n.QE.BOOLEAN},category:n.R6.ATTRIBUTES,defaultValue:{summary:!1}}},disabled:{name:"data-vl-disabled",description:"Attribuut wordt gebruikt om te voorkomen dat de gebruiker iets kan kiezen uit het select element.",table:{type:{summary:n.QE.BOOLEAN},category:n.R6.ATTRIBUTES,defaultValue:{summary:!1}}}};l("../../node_modules/react/index.js");var r=l("../../node_modules/react/jsx-runtime.js"),a=l("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),i=l("../../node_modules/@storybook/blocks/dist/index.mjs");function c(e){let t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",a:"a"},(0,a.RP)(),e.components),{VluxMetaData:l}=t;return l||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VluxMetaData",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"multiselect",children:"MultiSelect"}),"\n",(0,r.jsx)(l,{id:"elements-multiselect"}),"\n",(0,r.jsxs)(t.p,{children:["Gebruik de ",(0,r.jsx)(t.code,{children:"multiselect"})," component om een gebruiker 1 of meerdere keuzes te laten maken uit een voorgedefinieerde lijst."]}),"\n",(0,r.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"import { VlMultiSelect } from '@domg-wc/elements';\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:'<select is="vl-multiselect"></select>\n'})}),"\n",(0,r.jsx)(i.Hl,{of:u}),"\n",(0,r.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,r.jsx)(i.ov,{of:u}),"\n",(0,r.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,r.jsx)(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/forms/vl-ui-multiselect",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - MultiSelect"})}),"\n",(0,r.jsx)(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlMultiSelect.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - MultiSelect"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-multiselect.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - MultiSelect"})})]})}let d={id:"elements-multiselect",title:"Elements/multiselect",tags:["autodocs"],args:{block:!1,error:!1,success:!1,disabled:!1},argTypes:s,parameters:{controls:{hideNoControlsWarning:!0},docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,a.RP)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}}}},u=({block:e,error:t,success:l,disabled:n})=>(0,o.qy)`
    <select
        is="vl-multiselect"
        ?data-vl-block=${e}
        ?data-vl-error=${t}
        ?data-vl-success=${l}
        ?data-vl-disabled=${n}
    >
        <option value="Belgium">België</option>
        <option value="Germany">Duitsland</option>
        <option value="France">Frankrijk</option>
    </select>
`;u.storyName="vl-multiselect - default";let m=({block:e,error:t,success:l,disabled:n})=>(0,o.qy)`
    <select
        is="vl-multiselect"
        ?data-vl-block=${e}
        ?data-vl-error=${t}
        ?data-vl-success=${l}
        ?data-vl-disabled=${n}
    >
        <option selected="" value="Bruges">Brugge</option>
        <option value="Brussels">Brussel</option>
        <option value="Ghent">Gent</option>
    </select>
`;m.storyName="vl-multiselect - predefined option";let p=({block:e,error:t,success:l,disabled:n})=>(0,o.qy)`
    <select
        is="vl-multiselect"
        ?data-vl-block=${e}
        ?data-vl-error=${t}
        ?data-vl-success=${l}
        ?data-vl-disabled=${n}
    >
        <optgroup label="Landen">
            <option selected="" value="Belgium">België</option>
            <option value="Germany">Duitsland</option>
            <option value="France">Frankrijk</option>
        </optgroup>
        <optgroup label="Steden">
            <option selected="" value="Bruges">Brugge</option>
            <option value="Brussels">Brussel</option>
            <option value="Ghent">Gent</option>
        </optgroup>
    </select>
`;p.storyName="vl-multiselect - grouped items",u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:'({\n  block,\n  error,\n  success,\n  disabled\n}: typeof multiselectArgs) => html`\n    <select\n        is="vl-multiselect"\n        ?data-vl-block=${block}\n        ?data-vl-error=${error}\n        ?data-vl-success=${success}\n        ?data-vl-disabled=${disabled}\n    >\n        <option value="Belgium">België</option>\n        <option value="Germany">Duitsland</option>\n        <option value="France">Frankrijk</option>\n    </select>\n`',...u.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:'({\n  block,\n  error,\n  success,\n  disabled\n}: typeof multiselectArgs) => html`\n    <select\n        is="vl-multiselect"\n        ?data-vl-block=${block}\n        ?data-vl-error=${error}\n        ?data-vl-success=${success}\n        ?data-vl-disabled=${disabled}\n    >\n        <option selected="" value="Bruges">Brugge</option>\n        <option value="Brussels">Brussel</option>\n        <option value="Ghent">Gent</option>\n    </select>\n`',...m.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:'({\n  block,\n  error,\n  success,\n  disabled\n}: typeof multiselectArgs) => html`\n    <select\n        is="vl-multiselect"\n        ?data-vl-block=${block}\n        ?data-vl-error=${error}\n        ?data-vl-success=${success}\n        ?data-vl-disabled=${disabled}\n    >\n        <optgroup label="Landen">\n            <option selected="" value="Belgium">België</option>\n            <option value="Germany">Duitsland</option>\n            <option value="France">Frankrijk</option>\n        </optgroup>\n        <optgroup label="Steden">\n            <option selected="" value="Bruges">Brugge</option>\n            <option value="Brussels">Brussel</option>\n            <option value="Ghent">Gent</option>\n        </optgroup>\n    </select>\n`',...p.parameters?.docs?.source}}};let v=["MultiselectDefault","MultiselectPredefinedOption","MultiselectGroupedItems"]}}]);