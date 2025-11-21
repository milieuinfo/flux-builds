import{K as s,L as n,Q as $,P as f,H as N,ba as c,I,s as b,x as e,r as A,bb as O}from"./iframe-BRJWU34U.js";import"./preload-helper-D9Z9MdNV.js";const t={...I,link:"",external:!1,alt:!1,noBorder:!1,size:c.S,imgSrc:"",imgAlt:"",title:"",subtitle:"",text:"",content:""},E={...N,link:{name:"link",description:"De component wordt een link. Door te klikken op de component wordt de gebruiker doorgestuurd naar de link die gezet is in dit attribuut.",table:{type:{summary:n.STRING},defaultValue:{summary:t.link},category:s.ATTRIBUTES}},external:{name:"external",description:"Opent de link in een nieuw tabblad. Dit attribuut wordt enkel gebruikt als het attribuut `link` gezet is.",table:{type:{summary:n.STRING},defaultValue:{summary:String(t.external)},category:s.ATTRIBUTES}},alt:{name:"alt",description:"Geeft de component een alternatieve stijl. De achtergrond wordt grijs.",table:{type:{summary:n.BOOLEAN},defaultValue:{summary:String(t.alt)},category:s.ATTRIBUTES}},noBorder:{name:"no-border",description:"Geeft de component weer zonder border.",table:{type:{summary:n.BOOLEAN},defaultValue:{summary:String(t.noBorder)},category:s.ATTRIBUTES}},size:{name:"size",description:"Dit attribuut bepaalt de grootte van de component.",type:{name:n.STRING,required:!1},control:{type:f.SELECT},options:Object.values(c),table:{type:{summary:$(Object.values(c))},category:s.ATTRIBUTES,defaultValue:{summary:String(t.size)}}},imgSrc:{name:"img-src",description:"Het path van de image dat getoond moet worden in de spotlight.",table:{type:{summary:n.STRING},defaultValue:{summary:String(t.imgSrc)},category:s.ATTRIBUTES}},imgAlt:{name:"img-alt",description:"De alternatieve tekst van de image dat getoond moet worden in de spotlight.",table:{type:{summary:n.STRING},defaultValue:{summary:String(t.imgAlt)},category:s.ATTRIBUTES}},title:{name:"title",description:"Titel van de spotlight.",table:{type:{summary:n.STRING},defaultValue:{summary:String(t.title)},category:s.SLOTS}},subtitle:{name:"subtitle",description:"Subtitle van de spotlight.",table:{type:{summary:n.STRING},defaultValue:{summary:String(t.subtitle)},category:s.SLOTS}},text:{name:"text",description:"Text van de spotlight.",table:{type:{summary:n.STRING},defaultValue:{summary:String(t.text)},category:s.SLOTS}},content:{name:"content",description:"Content van de spotlight.",table:{type:{summary:n.STRING},defaultValue:{summary:String(t.content)},category:s.SLOTS}}};A([O]);const G={id:"components-block-spotlight",title:"Components - Block/spotlight",tags:["autodocs"],args:t,argTypes:E},R=b(t,({link:o,alt:S,size:y,imgSrc:T,imgAlt:k,title:u,subtitle:v,text:d,content:h,external:w,noBorder:x})=>e`
        <vl-spotlight
            link=${o}
            ?alt=${S}
            ?no-border=${x}
            ?external=${w}
            size=${y}
            img-src=${T}
            img-alt=${k}
        >
            ${u?e`<span slot="title"> ${u} </span>`:""}
            ${v?e`<span slot="subtitle"> ${v} </span>`:""}
            ${d?e`<span slot="text"> ${d} </span>`:""}
            ${h?e`<span slot="content"> ${h} </span>`:""}
        </vl-spotlight>
    `),a=R.bind({});a.storyName="vl-spotlight - default";a.args={title:"Premies voor renovatie"};const l=b(t,({external:o})=>e`
        <vl-spotlight link="http://www.google.com" ?external=${o}>
            <span slot="title">
                Premies voor renovatie
                <span class="vl-icon vl-icon--light vl-vi vl-vi-external"></span>
                <span class="vl-u-visually-hidden">Opent in nieuw venster</span>
            </span>
        </vl-spotlight>
    `);l.storyName="vl-spotlight - with link";l.parameters={controls:{include:["external"]}};const r=()=>e`
    <vl-spotlight>
        <span slot="title"> Premies voor renovatie </span>
    </vl-spotlight>
`;r.storyName="vl-spotlight - no link";const p=()=>e`
    <vl-spotlight link="https://google.be" alt size="${c.S}">
        <span slot="title"> Verslag bestuursvergadering </span>
        <vl-document slot="content">
            <span slot="type">DOCX</span>
            <span slot="title">document</span>
            <span slot="metadata">DOCX-112kb</span>
        </vl-document>
    </vl-spotlight>
`;p.storyName="vl-spotlight - with content";const g=()=>e`
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
`;g.storyName="vl-spotlight - with text";const i=()=>e`
    <vl-spotlight img-src="dak.jpg" img-alt="spotlight image">
        <span slot="title"> Premies voor renovatie </span>
        <span slot="subtitle">Er zijn er verschillende...</span>
        <span slot="text"
            >Gaat u bouwen of verbouwen? Investeer in energiebesparende maatregelen en bespaar heel wat op uw
            energiefactuur.</span
        >
    </vl-spotlight>
`;i.storyName="vl-spotlight - with image";i.decorators=[o=>e` <div style="width: 600px;">${o()}</div>`];const m=()=>e`
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
`;m.storyName="vl-spotlight - with subtitle";a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:'story(spotlightArgs, ({\n  link,\n  alt,\n  size,\n  imgSrc,\n  imgAlt,\n  title,\n  subtitle,\n  text,\n  content,\n  external,\n  noBorder\n}: typeof spotlightArgs) => html`\n        <vl-spotlight\n            link=${link}\n            ?alt=${alt}\n            ?no-border=${noBorder}\n            ?external=${external}\n            size=${size}\n            img-src=${imgSrc}\n            img-alt=${imgAlt}\n        >\n            ${title ? html`<span slot="title"> ${title} </span>` : ``}\n            ${subtitle ? html`<span slot="subtitle"> ${subtitle} </span>` : ``}\n            ${text ? html`<span slot="text"> ${text} </span>` : ``}\n            ${content ? html`<span slot="content"> ${content} </span>` : ``}\n        </vl-spotlight>\n    `)',...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`story(spotlightArgs, ({
  external
}: typeof spotlightArgs) => html\`
        <vl-spotlight link="http://www.google.com" ?external=\${external}>
            <span slot="title">
                Premies voor renovatie
                <span class="vl-icon vl-icon--light vl-vi vl-vi-external"></span>
                <span class="vl-u-visually-hidden">Opent in nieuw venster</span>
            </span>
        </vl-spotlight>
    \`)`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => html\`
    <vl-spotlight>
        <span slot="title"> Premies voor renovatie </span>
    </vl-spotlight>
\``,...r.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => html\`
    <vl-spotlight link="https://google.be" alt size="\${SIZE.S}">
        <span slot="title"> Verslag bestuursvergadering </span>
        <vl-document slot="content">
            <span slot="type">DOCX</span>
            <span slot="title">document</span>
            <span slot="metadata">DOCX-112kb</span>
        </vl-document>
    </vl-spotlight>
\``,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => html\`
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
\``,...g.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => html\`
    <vl-spotlight img-src="dak.jpg" img-alt="spotlight image">
        <span slot="title"> Premies voor renovatie </span>
        <span slot="subtitle">Er zijn er verschillende...</span>
        <span slot="text"
            >Gaat u bouwen of verbouwen? Investeer in energiebesparende maatregelen en bespaar heel wat op uw
            energiefactuur.</span
        >
    </vl-spotlight>
\``,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => html\`
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
\``,...m.parameters?.docs?.source}}};const V=["SpotLightDefault","SpotlightWithLink","spotlightNoLink","SpotlightWithContent","SpotlightWithText","SpotlightWithImage","SpotlightWithSubtitle"];export{a as SpotLightDefault,p as SpotlightWithContent,i as SpotlightWithImage,l as SpotlightWithLink,m as SpotlightWithSubtitle,g as SpotlightWithText,V as __namedExportsOrder,G as default,r as spotlightNoLink};
