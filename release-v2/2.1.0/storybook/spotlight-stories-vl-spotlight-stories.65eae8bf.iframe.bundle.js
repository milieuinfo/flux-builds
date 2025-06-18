"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[1199],{"../../libs/components/src/block/spotlight/stories/vl-spotlight.stories.ts":(t,e,s)=>{s.r(e),s.d(e,{SpotLightDefault:()=>g,SpotlightWithContent:()=>v,SpotlightWithImage:()=>h,SpotlightWithLink:()=>m,SpotlightWithSubtitle:()=>b,SpotlightWithText:()=>d,__namedExportsOrder:()=>y,default:()=>c,spotlightNoLink:()=>u});var l=s("../../node_modules/lit-html/lit-html.js");s("../../libs/components/src/block/spotlight/vl-spotlight.component.ts");var n=s("../../libs/components/src/block/spotlight/vl-spotlight.model.ts"),a=s("../../resources/utils-storybook/index.ts");let o={...a.D8,link:"",external:!1,alt:!1,noBorder:!1,size:n.S.S,imgSrc:"",imgAlt:"",title:"",subtitle:"",text:"",content:""},i={...a.RN,link:{name:"link",description:"De component wordt een link. Door te klikken op de component wordt de gebruiker doorgestuurd naar de link die gezet is in dit attribuut.",table:{type:{summary:a.QE.STRING},defaultValue:o.link,category:a.R6.ATTRIBUTES}},external:{name:"external",description:"Opent de link in een nieuw tabblad. Dit attribuut wordt enkel gebruikt als het attribuut `link` gezet is.",table:{type:{summary:a.QE.STRING},defaultValue:o.external,category:a.R6.ATTRIBUTES}},alt:{name:"alt",description:"Geeft de component een alternatieve stijl. De achtergrond wordt grijs.",table:{type:{summary:a.QE.BOOLEAN},defaultValue:o.alt,category:a.R6.ATTRIBUTES}},noBorder:{name:"no-border",description:"Geeft de component weer zonder border.",table:{type:{summary:a.QE.BOOLEAN},defaultValue:o.noBorder,category:a.R6.ATTRIBUTES}},size:{name:"size",description:"Dit attribuut bepaalt de grootte van de component.",table:{type:{summary:(0,a.uf)(Object.values(n.S)),required:!1},category:a.R6.ATTRIBUTES,defaultValue:o.size},control:{type:a.VH.SELECT},options:Object.values(n.S)},imgSrc:{name:"img-src",description:"Het path van de image dat getoond moet worden in de spotlight.",table:{type:{summary:a.QE.STRING},defaultValue:o.imgSrc,category:a.R6.ATTRIBUTES}},imgAlt:{name:"img-alt",description:"De alternatieve tekst van de image dat getoond moet worden in de spotlight.",table:{type:{summary:a.QE.STRING},defaultValue:o.imgAlt,category:a.R6.ATTRIBUTES}},title:{name:"title",description:"Titel van de spotlight.",table:{type:{summary:a.QE.STRING},defaultValue:o.title,category:a.R6.SLOTS}},subtitle:{name:"subtitle",description:"Subtitle van de spotlight.",table:{type:{summary:a.QE.STRING},defaultValue:o.subtitle,category:a.R6.SLOTS}},text:{name:"text",description:"Text van de spotlight.",table:{type:{summary:a.QE.STRING},defaultValue:o.text,category:a.R6.SLOTS}},content:{name:"content",description:"Content van de spotlight.",table:{type:{summary:a.QE.STRING},defaultValue:o.content,category:a.R6.SLOTS}}};var r=s("../../libs/common/src/index.ts"),p=s("../../libs/components/src/block/document/index.ts");(0,r.gy)([p.F]);let c={id:"components-block-spotlight",title:"Components - Block/spotlight",tags:["autodocs"],args:o,argTypes:i},g=(0,a._7)(o,({link:t,alt:e,size:s,imgSrc:n,imgAlt:a,title:o,subtitle:i,text:r,content:p,external:c,noBorder:g})=>(0,l.qy)`
        <vl-spotlight
            link=${t}
            ?alt=${e}
            ?no-border=${g}
            ?external=${c}
            size=${s}
            img-src=${n}
            img-alt=${a}
        >
            ${o?(0,l.qy)`<span slot="title"> ${o} </span>`:""}
            ${i?(0,l.qy)`<span slot="subtitle"> ${i} </span>`:""}
            ${r?(0,l.qy)`<span slot="text"> ${r} </span>`:""}
            ${p?(0,l.qy)`<span slot="content"> ${p} </span>`:""}
        </vl-spotlight>
    `).bind({});g.storyName="vl-spotlight - default",g.args={title:"Premies voor renovatie"};let m=(0,a._7)(o,({external:t})=>(0,l.qy)`
        <vl-spotlight link="http://www.google.com" ?external=${t}>
            <span slot="title">
                Premies voor renovatie
                <span class="vl-icon vl-icon--light vl-vi vl-vi-external"></span>
                <span class="vl-u-visually-hidden">Opent in nieuw venster</span>
            </span>
        </vl-spotlight>
    `);m.storyName="vl-spotlight - with link",m.parameters={controls:{include:["external"]}};let u=()=>(0,l.qy)`
    <vl-spotlight>
        <span slot="title"> Premies voor renovatie </span>
    </vl-spotlight>
`;u.storyName="vl-spotlight - no link";let v=()=>(0,l.qy)`
    <vl-spotlight link="https://google.be" alt size="${n.S.S}">
        <span slot="title"> Verslag bestuursvergadering </span>
        <vl-document slot="content">
            <span slot="type">DOCX</span>
            <span slot="title">document</span>
            <span slot="metadata">DOCX-112kb</span>
        </vl-document>
    </vl-spotlight>
`;v.storyName="vl-spotlight - with content";let d=()=>(0,l.qy)`
    <vl-spotlight link="https://google.be">
        <span slot="title">
            Premies voor renovatie
            <span class="vl-icon vl-icon--light vl-vi vl-vi-external"></span>
            <span class="vl-u-visually-hidden">Opent in nieuw venster</span>
        </span>
        <span slot="text"
            >Gaat u bouwen of verbouwen? Investeer in energiebesparende maatregelen en bespaar heel wat op uw
            energiefactuur.</span
        >
    </vl-spotlight>
`;d.storyName="vl-spotlight - with text";let h=()=>(0,l.qy)`
    <vl-spotlight img-src="dak.jpg" img-alt="spotlight image">
        <span slot="title"> Premies voor renovatie </span>
        <span slot="subtitle">Er zijn er verschillende...</span>
        <span slot="text"
            >Gaat u bouwen of verbouwen? Investeer in energiebesparende maatregelen en bespaar heel wat op uw
            energiefactuur.</span
        >
    </vl-spotlight>
`;h.storyName="vl-spotlight - with image",h.decorators=[t=>(0,l.qy)` <div style="width: 600px;">${t()}</div>`];let b=()=>(0,l.qy)`
    <vl-spotlight link="https://google.be">
        <span slot="title">Communicatiespecialist te Willebroek - contract 1 jaar</span>
        <span slot="subtitle">Niveau A (universitair diploma)</span>
        <span slot="text">
            <ul class="vl-icon-list">
                <li class="vl-icon-list__item">Waterwegen en Zeekanaal NV in Brussel</li>
                <li class="vl-icon-list__item">Natuur en bos</li>
                <li class="vl-icon-list__item"></li>
            </ul>
        </span>
    </vl-spotlight>
`;b.storyName="vl-spotlight - with subtitle",g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:'story(spotlightArgs, ({\n  link,\n  alt,\n  size,\n  imgSrc,\n  imgAlt,\n  title,\n  subtitle,\n  text,\n  content,\n  external,\n  noBorder\n}: typeof spotlightArgs) => html`\n        <vl-spotlight\n            link=${link}\n            ?alt=${alt}\n            ?no-border=${noBorder}\n            ?external=${external}\n            size=${size}\n            img-src=${imgSrc}\n            img-alt=${imgAlt}\n        >\n            ${title ? html`<span slot="title"> ${title} </span>` : ``}\n            ${subtitle ? html`<span slot="subtitle"> ${subtitle} </span>` : ``}\n            ${text ? html`<span slot="text"> ${text} </span>` : ``}\n            ${content ? html`<span slot="content"> ${content} </span>` : ``}\n        </vl-spotlight>\n    `)',...g.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:'story(spotlightArgs, ({\n  external\n}: typeof spotlightArgs) => html`\n        <vl-spotlight link="http://www.google.com" ?external=${external}>\n            <span slot="title">\n                Premies voor renovatie\n                <span class="vl-icon vl-icon--light vl-vi vl-vi-external"></span>\n                <span class="vl-u-visually-hidden">Opent in nieuw venster</span>\n            </span>\n        </vl-spotlight>\n    `)',...m.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:'() => html`\n    <vl-spotlight>\n        <span slot="title"> Premies voor renovatie </span>\n    </vl-spotlight>\n`',...u.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:'() => html`\n    <vl-spotlight link="https://google.be" alt size="${SIZE.S}">\n        <span slot="title"> Verslag bestuursvergadering </span>\n        <vl-document slot="content">\n            <span slot="type">DOCX</span>\n            <span slot="title">document</span>\n            <span slot="metadata">DOCX-112kb</span>\n        </vl-document>\n    </vl-spotlight>\n`',...v.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:'() => html`\n    <vl-spotlight link="https://google.be">\n        <span slot="title">\n            Premies voor renovatie\n            <span class="vl-icon vl-icon--light vl-vi vl-vi-external"></span>\n            <span class="vl-u-visually-hidden">Opent in nieuw venster</span>\n        </span>\n        <span slot="text"\n            >Gaat u bouwen of verbouwen? Investeer in energiebesparende maatregelen en bespaar heel wat op uw\n            energiefactuur.</span\n        >\n    </vl-spotlight>\n`',...d.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:'() => html`\n    <vl-spotlight img-src="dak.jpg" img-alt="spotlight image">\n        <span slot="title"> Premies voor renovatie </span>\n        <span slot="subtitle">Er zijn er verschillende...</span>\n        <span slot="text"\n            >Gaat u bouwen of verbouwen? Investeer in energiebesparende maatregelen en bespaar heel wat op uw\n            energiefactuur.</span\n        >\n    </vl-spotlight>\n`',...h.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:'() => html`\n    <vl-spotlight link="https://google.be">\n        <span slot="title">Communicatiespecialist te Willebroek - contract 1 jaar</span>\n        <span slot="subtitle">Niveau A (universitair diploma)</span>\n        <span slot="text">\n            <ul class="vl-icon-list">\n                <li class="vl-icon-list__item">Waterwegen en Zeekanaal NV in Brussel</li>\n                <li class="vl-icon-list__item">Natuur en bos</li>\n                <li class="vl-icon-list__item"></li>\n            </ul>\n        </span>\n    </vl-spotlight>\n`',...b.parameters?.docs?.source}}};let y=["SpotLightDefault","SpotlightWithLink","spotlightNoLink","SpotlightWithContent","SpotlightWithText","SpotlightWithImage","SpotlightWithSubtitle"]}}]);