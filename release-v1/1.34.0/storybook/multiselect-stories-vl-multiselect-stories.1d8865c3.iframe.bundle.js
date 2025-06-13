(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[2021],{"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(e,t,o)=>{"use strict";o.d(t,{NF:()=>r,Zo:()=>i,ah:()=>s,pC:()=>l});var n=o("./node_modules/react/index.js");let l=n.createContext({});function r(e){return function(t){let o=s(t.components);return n.createElement(e,{...t,allComponents:o})}}function s(e){let t=n.useContext(l);return n.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let a={};function i({components:e,children:t,disableParentContext:o}){let r;return r=o?"function"==typeof e?e({}):e||a:s(e),n.createElement(l.Provider,{value:r},t)}},"./libs/elements/src/multiselect/stories/vl-multiselect.stories.ts":(e,t,o)=>{"use strict";o.r(t),o.d(t,{MultiselectDefault:()=>u,MultiselectGroupedItems:()=>p,MultiselectPredefinedOption:()=>m,__namedExportsOrder:()=>v,default:()=>d});var n=o("./node_modules/lit-html/lit-html.js");o("./libs/elements/src/link/vl-link.element.ts"),o("./libs/elements/src/multiselect/vl-multiselect.element.ts");var l=o("./libs/common/storybook/src/index.ts");let r={block:{name:"data-vl-block",description:"Attribuut wordt gebruikt om ervoor te zorgen dat de textarea getoond wordt als een block element en bijgevolg de breedte van de parent zal aannemen.",table:{type:{summary:l.vK.STRING},category:l.aA.ATTRIBUTES,defaultValue:{summary:!1}}},error:{name:"data-vl-error",description:"Attribuut wordt gebruikt om aan te duiden dat het select element verplicht is of ongeldige tekst bevat.",table:{type:{summary:l.vK.BOOLEAN},category:l.aA.ATTRIBUTES,defaultValue:{summary:!1}}},success:{name:"data-vl-success",description:"Attribuut wordt gebruikt om aan te duiden dat het select element correct werd ingevuld.",table:{type:{summary:l.vK.BOOLEAN},category:l.aA.ATTRIBUTES,defaultValue:{summary:!1}}},disabled:{name:"data-vl-disabled",description:"Attribuut wordt gebruikt om te voorkomen dat de gebruiker iets kan kiezen uit het select element.",table:{type:{summary:l.vK.BOOLEAN},category:l.aA.ATTRIBUTES,defaultValue:{summary:!1}}}};o("./node_modules/react/index.js");var s=o("./node_modules/react/jsx-runtime.js"),a=o("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),i=o("./node_modules/@storybook/blocks/dist/index.mjs");function c(e){let t=Object.assign({h1:"h1",p:"p",a:"a",code:"code",h2:"h2",pre:"pre",h3:"h3"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"multiselect",children:"MultiSelect"}),"\n",(0,s.jsxs)(t.p,{children:["❗DEPRECATED: Gebruik de ",(0,s.jsx)(t.a,{href:"/docs/form-next-select--documentatie",children:"vl-select-next"}),", in v2.0.0 verdwijnt deze component."]}),"\n",(0,s.jsxs)(t.p,{children:["Gebruik de ",(0,s.jsx)(t.code,{children:"multiselect"})," component om een gebruiker 1 of meerdere keuzes te laten maken uit een voorgedefinieerde lijst."]}),"\n",(0,s.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import { VlMultiSelect } from '@domg-wc/elements';\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'<select is="vl-multiselect"></select>\n'})}),"\n",(0,s.jsx)(i.Xz,{of:u}),"\n",(0,s.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,s.jsx)(i.Ed,{of:u}),"\n",(0,s.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,s.jsx)(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/forms/vl-ui-multiselect",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - MultiSelect"})}),"\n",(0,s.jsx)(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlMultiSelect.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - MultiSelect"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-multiselect.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - MultiSelect"})})]})}let d={title:"Elements/multiselect",tags:["autodocs"],args:{block:!1,error:!1,success:!1,disabled:!1},argTypes:r,parameters:{controls:{hideNoControlsWarning:!0},docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}}}},u=({block:e,error:t,success:o,disabled:l})=>(0,n.dy)`
    <select
        is="vl-multiselect"
        ?data-vl-block=${e}
        ?data-vl-error=${t}
        ?data-vl-success=${o}
        ?data-vl-disabled=${l}
    >
        <option value="Belgium">België</option>
        <option value="Germany">Duitsland</option>
        <option value="France">Frankrijk</option>
    </select>
`;u.storyName="vl-multiselect - default";let m=({block:e,error:t,success:o,disabled:l})=>(0,n.dy)`
    <select
        is="vl-multiselect"
        ?data-vl-block=${e}
        ?data-vl-error=${t}
        ?data-vl-success=${o}
        ?data-vl-disabled=${l}
    >
        <option selected="" value="Bruges">Brugge</option>
        <option value="Brussels">Brussel</option>
        <option value="Ghent">Gent</option>
    </select>
`;m.storyName="vl-multiselect - predefined option";let p=({block:e,error:t,success:o,disabled:l})=>(0,n.dy)`
    <select
        is="vl-multiselect"
        ?data-vl-block=${e}
        ?data-vl-error=${t}
        ?data-vl-success=${o}
        ?data-vl-disabled=${l}
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
`;p.storyName="vl-multiselect - grouped items",u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:'({\n  block,\n  error,\n  success,\n  disabled\n}: typeof multiselectArgs) => html`\n    <select\n        is="vl-multiselect"\n        ?data-vl-block=${block}\n        ?data-vl-error=${error}\n        ?data-vl-success=${success}\n        ?data-vl-disabled=${disabled}\n    >\n        <option value="Belgium">België</option>\n        <option value="Germany">Duitsland</option>\n        <option value="France">Frankrijk</option>\n    </select>\n`',...u.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:'({\n  block,\n  error,\n  success,\n  disabled\n}: typeof multiselectArgs) => html`\n    <select\n        is="vl-multiselect"\n        ?data-vl-block=${block}\n        ?data-vl-error=${error}\n        ?data-vl-success=${success}\n        ?data-vl-disabled=${disabled}\n    >\n        <option selected="" value="Bruges">Brugge</option>\n        <option value="Brussels">Brussel</option>\n        <option value="Ghent">Gent</option>\n    </select>\n`',...m.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:'({\n  block,\n  error,\n  success,\n  disabled\n}: typeof multiselectArgs) => html`\n    <select\n        is="vl-multiselect"\n        ?data-vl-block=${block}\n        ?data-vl-error=${error}\n        ?data-vl-success=${success}\n        ?data-vl-disabled=${disabled}\n    >\n        <optgroup label="Landen">\n            <option selected="" value="Belgium">België</option>\n            <option value="Germany">Duitsland</option>\n            <option value="France">Frankrijk</option>\n        </optgroup>\n        <optgroup label="Steden">\n            <option selected="" value="Bruges">Brugge</option>\n            <option value="Brussels">Brussel</option>\n            <option value="Ghent">Gent</option>\n        </optgroup>\n    </select>\n`',...p.parameters?.docs?.source}}};let v=["MultiselectDefault","MultiselectPredefinedOption","MultiselectGroupedItems"]},"./node_modules/memoizerific sync recursive":e=>{function t(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id="./node_modules/memoizerific sync recursive",e.exports=t},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,o)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=o("./node_modules/react/index.js"),l=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,o){var n,r={},c=null,d=null;for(n in void 0!==o&&(c=""+o),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,n)&&!i.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===r[n]&&(r[n]=t[n]);return{$$typeof:l,type:e,key:c,ref:d,props:r,_owner:a.current}}t.Fragment=r,t.jsx=c,t.jsxs=c},"./node_modules/react/jsx-runtime.js":(e,t,o)=>{"use strict";e.exports=o("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);