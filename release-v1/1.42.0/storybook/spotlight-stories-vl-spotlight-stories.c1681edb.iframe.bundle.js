"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[1199],{"../../libs/components/src/spotlight/stories/vl-spotlight.stories.ts":(t,e,a)=>{a.r(e),a.d(e,{SpotLightDefault:()=>c,SpotlightWithContent:()=>m,SpotlightWithImage:()=>h,SpotlightWithLink:()=>v,SpotlightWithSubtitle:()=>b,SpotlightWithText:()=>u,__namedExportsOrder:()=>y,default:()=>d,spotlightNoLink:()=>g});var l=a("../../node_modules/lit-html/lit-html.js");a("../../libs/components/src/spotlight/vl-spotlight.component.ts");var s=a("../../libs/components/src/spotlight/vl-spotlight.model.ts"),n=a("../../libs/common/storybook/src/index.ts");let i={...n.D8,link:"",external:!1,alt:!1,noBorder:!1,size:s.S.S,imgSrc:"",imgAlt:"",title:"",subtitle:"",text:"",content:""},o={...(0,n.RN)(),link:{name:"data-vl-link",description:"De component wordt een link. Door te klikken op de component wordt de gebruiker doorgestuurd naar de link die gezet is in dit attribuut.",table:{type:{summary:n.QE.STRING},defaultValue:i.link,category:n.R6.ATTRIBUTES}},external:{name:"data-vl-external",description:"Opent de link in een nieuw tabblad. Dit attribuut wordt enkel gebruikt als het attribuut `data-vl-link` gezet is.",table:{type:{summary:n.QE.STRING},defaultValue:i.external,category:n.R6.ATTRIBUTES}},alt:{name:"data-vl-alt",description:"Geeft de component een alternatieve stijl. De achtergrond wordt grijs.",table:{type:{summary:n.QE.BOOLEAN},defaultValue:i.alt,category:n.R6.ATTRIBUTES}},noBorder:{name:"data-vl-no-border",description:"Geeft de component weer zonder border.",table:{type:{summary:n.QE.BOOLEAN},defaultValue:i.noBorder,category:n.R6.ATTRIBUTES}},size:{name:"data-vl-size",description:"Dit attribuut bepaalt de grootte van de component.",table:{type:{summary:(0,n.uf)(Object.values(s.S)),required:!1},category:n.R6.ATTRIBUTES,defaultValue:i.size},control:{type:n.VH.SELECT},options:Object.values(s.S)},imgSrc:{name:"data-vl-img-src",description:"Het path van de image dat getoond moet worden in de spotlight.",table:{type:{summary:n.QE.STRING},defaultValue:i.imgSrc,category:n.R6.ATTRIBUTES}},imgAlt:{name:"data-vl-img-alt",description:"De alternatieve tekst van de image dat getoond moet worden in de spotlight.",table:{type:{summary:n.QE.STRING},defaultValue:i.imgAlt,category:n.R6.ATTRIBUTES}},title:{name:"title",description:"Titel van de spotlight.",table:{type:{summary:n.QE.STRING},defaultValue:i.title,category:n.R6.SLOTS}},subtitle:{name:"subtitle",description:"Subtitle van de spotlight.",table:{type:{summary:n.QE.STRING},defaultValue:i.subtitle,category:n.R6.SLOTS}},text:{name:"text",description:"Text van de spotlight.",table:{type:{summary:n.QE.STRING},defaultValue:i.text,category:n.R6.SLOTS}},content:{name:"content",description:"Content van de spotlight.",table:{type:{summary:n.QE.STRING},defaultValue:i.content,category:n.R6.SLOTS}}};var r=a("../../libs/common/utilities/src/index.ts"),p=a("../../libs/components/src/document/index.ts");(0,r.gy)([p.F]);let d={id:"components-spotlight",title:"components/spotlight",tags:["autodocs"],args:i,argTypes:o},c=(0,n._7)(i,({link:t,alt:e,size:a,imgSrc:s,imgAlt:n,title:i,subtitle:o,text:r,content:p,external:d,noBorder:c})=>(0,l.qy)`
        <vl-spotlight
            data-vl-link=${t}
            ?data-vl-alt=${e}
            ?data-vl-no-border=${c}
            ?data-vl-external=${d}
            data-vl-size=${a}
            data-vl-img-src=${s}
            data-vl-img-alt=${n}
        >
            ${i?(0,l.qy)`<span slot="title"> ${i} </span>`:""}
            ${o?(0,l.qy)`<span slot="subtitle"> ${o} </span>`:""}
            ${r?(0,l.qy)`<span slot="text"> ${r} </span>`:""}
            ${p?(0,l.qy)`<span slot="content"> ${p} </span>`:""}
        </vl-spotlight>
    `).bind({});c.storyName="vl-spotlight - default",c.args={title:"Premies voor renovatie"};let v=(0,n._7)(i,({external:t})=>(0,l.qy)`
        <vl-spotlight data-vl-link="http://www.google.com" ?data-vl-external=${t}>
            <span slot="title">
                Premies voor renovatie
                <span class="vl-icon vl-icon--light vl-vi vl-vi-external"></span>
                <span class="vl-u-visually-hidden">Opent in nieuw venster</span>
            </span>
        </vl-spotlight>
    `);v.storyName="vl-spotlight - with link",v.parameters={controls:{include:["data-vl-external"]}};let g=()=>(0,l.qy)`
    <vl-spotlight>
        <span slot="title"> Premies voor renovatie </span>
    </vl-spotlight>
`;g.storyName="vl-spotlight - no link",g.parameters={controls:{disable:!0}};let m=()=>(0,l.qy)`
    <vl-spotlight data-vl-link="https://google.be" data-vl-alt data-vl-size="${s.S.S}">
        <span slot="title"> Verslag bestuursvergadering </span>
        <vl-document slot="content">
            <span slot="type">DOCX</span>
            <span slot="title">document</span>
            <span slot="metadata">DOCX-112kb</span>
        </vl-document>
    </vl-spotlight>
`;m.storyName="vl-spotlight - with content",m.parameters={controls:{disable:!0}};let u=()=>(0,l.qy)`
    <vl-spotlight data-vl-link="https://google.be">
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
`;u.storyName="vl-spotlight - with text",u.parameters={controls:{disable:!0}};let h=()=>(0,l.qy)`
    <vl-spotlight
        data-vl-img-src="//d201gzvprbtpxy.cloudfront.net/sites/default/files/styles/medium/public/images/vla_themateaser_350_dakisolatie.jpg?itok=cKDE21Pe"
        data-vl-img-alt="spotlight image"
    >
        <span slot="title"> Premies voor renovatie </span>
        <span slot="subtitle">Er zijn er verschillende...</span>
        <span slot="text"
            >Gaat u bouwen of verbouwen? Investeer in energiebesparende maatregelen en bespaar heel wat op uw
            energiefactuur.</span
        >
    </vl-spotlight>
`;h.storyName="vl-spotlight - with image",h.parameters={controls:{disable:!0}},h.decorators=[t=>(0,l.qy)` <div style="width: 600px;">${t()}</div>`];let b=()=>(0,l.qy)`
    <vl-spotlight data-vl-link="https://google.be">
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
`;b.storyName="vl-spotlight - with subtitle",b.parameters={controls:{disable:!0}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:'story(spotlightArgs, ({\n  link,\n  alt,\n  size,\n  imgSrc,\n  imgAlt,\n  title,\n  subtitle,\n  text,\n  content,\n  external,\n  noBorder\n}: typeof spotlightArgs) => html`\n        <vl-spotlight\n            data-vl-link=${link}\n            ?data-vl-alt=${alt}\n            ?data-vl-no-border=${noBorder}\n            ?data-vl-external=${external}\n            data-vl-size=${size}\n            data-vl-img-src=${imgSrc}\n            data-vl-img-alt=${imgAlt}\n        >\n            ${title ? html`<span slot="title"> ${title} </span>` : ``}\n            ${subtitle ? html`<span slot="subtitle"> ${subtitle} </span>` : ``}\n            ${text ? html`<span slot="text"> ${text} </span>` : ``}\n            ${content ? html`<span slot="content"> ${content} </span>` : ``}\n        </vl-spotlight>\n    `)',...c.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:'story(spotlightArgs, ({\n  external\n}: typeof spotlightArgs) => html`\n        <vl-spotlight data-vl-link="http://www.google.com" ?data-vl-external=${external}>\n            <span slot="title">\n                Premies voor renovatie\n                <span class="vl-icon vl-icon--light vl-vi vl-vi-external"></span>\n                <span class="vl-u-visually-hidden">Opent in nieuw venster</span>\n            </span>\n        </vl-spotlight>\n    `)',...v.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:'() => html`\n    <vl-spotlight>\n        <span slot="title"> Premies voor renovatie </span>\n    </vl-spotlight>\n`',...g.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:'() => html`\n    <vl-spotlight data-vl-link="https://google.be" data-vl-alt data-vl-size="${SIZE.S}">\n        <span slot="title"> Verslag bestuursvergadering </span>\n        <vl-document slot="content">\n            <span slot="type">DOCX</span>\n            <span slot="title">document</span>\n            <span slot="metadata">DOCX-112kb</span>\n        </vl-document>\n    </vl-spotlight>\n`',...m.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:'() => html`\n    <vl-spotlight data-vl-link="https://google.be">\n        <span slot="title">\n            Premies voor renovatie\n            <span class="vl-icon vl-icon--light vl-vi vl-vi-external"></span>\n            <span class="vl-u-visually-hidden">Opent in nieuw venster</span>\n        </span>\n        <span slot="text"\n            >Gaat u bouwen of verbouwen? Investeer in energiebesparende maatregelen en bespaar heel wat op uw\n            energiefactuur.</span\n        >\n    </vl-spotlight>\n`',...u.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:'() => html`\n    <vl-spotlight\n        data-vl-img-src="//d201gzvprbtpxy.cloudfront.net/sites/default/files/styles/medium/public/images/vla_themateaser_350_dakisolatie.jpg?itok=cKDE21Pe"\n        data-vl-img-alt="spotlight image"\n    >\n        <span slot="title"> Premies voor renovatie </span>\n        <span slot="subtitle">Er zijn er verschillende...</span>\n        <span slot="text"\n            >Gaat u bouwen of verbouwen? Investeer in energiebesparende maatregelen en bespaar heel wat op uw\n            energiefactuur.</span\n        >\n    </vl-spotlight>\n`',...h.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:'() => html`\n    <vl-spotlight data-vl-link="https://google.be">\n        <span slot="title">Communicatiespecialist te Willebroek - contract 1 jaar</span>\n        <span slot="subtitle">Niveau A (universitair diploma)</span>\n        <span slot="text">\n            <ul class="vl-icon-list">\n                <li class="vl-icon-list__item">Waterwegen en Zeekanaal NV in Brussel</li>\n                <li class="vl-icon-list__item">Natuur en bos</li>\n                <li class="vl-icon-list__item"></li>\n            </ul>\n        </span>\n    </vl-spotlight>\n`',...b.parameters?.docs?.source}}};let y=["SpotLightDefault","SpotlightWithLink","spotlightNoLink","SpotlightWithContent","SpotlightWithText","SpotlightWithImage","SpotlightWithSubtitle"]}}]);