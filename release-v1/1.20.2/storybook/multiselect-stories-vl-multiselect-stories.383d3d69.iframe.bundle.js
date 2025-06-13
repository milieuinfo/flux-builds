"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[2021],{"./libs/elements/src/multiselect/stories/vl-multiselect.stories.ts":(e,t,l)=>{l.r(t),l.d(t,{default:()=>n,multiselectDefault:()=>r,multiselectGroupedItems:()=>u,multiselectPredefinedOption:()=>i});var o=l("./node_modules/lit-html/lit-html.js");l("./libs/elements/src/link/vl-link.element.ts"),l("./libs/elements/src/multiselect/vl-multiselect.element.ts");var s=l("./libs/common/storybook/src/index.ts");let a={block:{name:"data-vl-block",description:"Attribuut wordt gebruikt om ervoor te zorgen dat de textarea getoond wordt als een block element en bijgevolg de breedte van de parent zal aannemen.",table:{type:{summary:s.vK.STRING},category:s.aA.ATTRIBUTES,defaultValue:{summary:!1}}},error:{name:"data-vl-error",description:"Attribuut wordt gebruikt om aan te duiden dat het select element verplicht is of ongeldige tekst bevat.",table:{type:{summary:s.vK.BOOLEAN},category:s.aA.ATTRIBUTES,defaultValue:{summary:!1}}},success:{name:"data-vl-success",description:"Attribuut wordt gebruikt om aan te duiden dat het select element correct werd ingevuld.",table:{type:{summary:s.vK.BOOLEAN},category:s.aA.ATTRIBUTES,defaultValue:{summary:!1}}},disabled:{name:"data-vl-disabled",description:"Attribuut wordt gebruikt om te voorkomen dat de gebruiker iets kan kiezen uit het select element.",table:{type:{summary:s.vK.BOOLEAN},category:s.aA.ATTRIBUTES,defaultValue:{summary:!1}}}},n={title:"Elements/multiselect",tags:["autodocs"],args:{block:!1,error:!1,success:!1,disabled:!1},argTypes:a,parameters:{controls:{hideNoControlsWarning:!0}}},r=({block:e,error:t,success:l,disabled:s})=>(0,o.dy)`
    <select
        is="vl-multiselect"
        ?data-vl-block=${e}
        ?data-vl-error=${t}
        ?data-vl-success=${l}
        ?data-vl-disabled=${s}
    >
        <option value="Belgium">België</option>
        <option value="Germany">Duitsland</option>
        <option value="France">Frankrijk</option>
    </select>
`;r.storyName="vl-multiselect - default";let i=({block:e,error:t,success:l,disabled:s})=>(0,o.dy)`
    <select
        is="vl-multiselect"
        ?data-vl-block=${e}
        ?data-vl-error=${t}
        ?data-vl-success=${l}
        ?data-vl-disabled=${s}
    >
        <option selected="" value="Bruges">Brugge</option>
        <option value="Brussels">Brussel</option>
        <option value="Ghent">Gent</option>
    </select>
`;i.storyName="vl-multiselect - predefined option";let u=({block:e,error:t,success:l,disabled:s})=>(0,o.dy)`
    <select
        is="vl-multiselect"
        ?data-vl-block=${e}
        ?data-vl-error=${t}
        ?data-vl-success=${l}
        ?data-vl-disabled=${s}
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
`;u.storyName="vl-multiselect - grouped items",r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:'({\n  block,\n  error,\n  success,\n  disabled\n}: typeof multiselectArgs) => html`\n    <select\n        is="vl-multiselect"\n        ?data-vl-block=${block}\n        ?data-vl-error=${error}\n        ?data-vl-success=${success}\n        ?data-vl-disabled=${disabled}\n    >\n        <option value="Belgium">Belgi\xeb</option>\n        <option value="Germany">Duitsland</option>\n        <option value="France">Frankrijk</option>\n    </select>\n`',...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:'({\n  block,\n  error,\n  success,\n  disabled\n}: typeof multiselectArgs) => html`\n    <select\n        is="vl-multiselect"\n        ?data-vl-block=${block}\n        ?data-vl-error=${error}\n        ?data-vl-success=${success}\n        ?data-vl-disabled=${disabled}\n    >\n        <option selected="" value="Bruges">Brugge</option>\n        <option value="Brussels">Brussel</option>\n        <option value="Ghent">Gent</option>\n    </select>\n`',...i.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:'({\n  block,\n  error,\n  success,\n  disabled\n}: typeof multiselectArgs) => html`\n    <select\n        is="vl-multiselect"\n        ?data-vl-block=${block}\n        ?data-vl-error=${error}\n        ?data-vl-success=${success}\n        ?data-vl-disabled=${disabled}\n    >\n        <optgroup label="Landen">\n            <option selected="" value="Belgium">Belgi\xeb</option>\n            <option value="Germany">Duitsland</option>\n            <option value="France">Frankrijk</option>\n        </optgroup>\n        <optgroup label="Steden">\n            <option selected="" value="Bruges">Brugge</option>\n            <option value="Brussels">Brussel</option>\n            <option value="Ghent">Gent</option>\n        </optgroup>\n    </select>\n`',...u.parameters?.docs?.source}}}}}]);