import{Z as e,_ as n,a2 as f,a1 as A,W as N,b9 as u,X as I,s as S,x as s,r as L,ba as E}from"./iframe-CY-ZM549.js";import"./preload-helper-D9Z9MdNV.js";const t={...I,link:"",linkLabel:"",external:!1,alt:!1,noBorder:!1,size:u.S,imgSrc:"",imgAlt:"",title:"",subtitle:"",text:"",content:""},O={...N,link:{name:"link",description:"De component wordt een link. Door te klikken op de component wordt de gebruiker doorgestuurd naar de link die gezet is in dit attribuut.",table:{type:{summary:n.STRING},defaultValue:{summary:t.link},category:e.ATTRIBUTES}},linkLabel:{name:"link-label",description:'Aria-label voor de link. Aanbevolen voor toegankelijkheid. Let op: `aria-label` vervangt de volledige linktekst, bv. "Premies voor renovatie - opent in nieuw venster" bij external links.',table:{type:{summary:n.STRING},defaultValue:{summary:t.linkLabel},category:e.ATTRIBUTES}},external:{name:"external",description:"Opent de link in een nieuw tabblad. Dit attribuut wordt enkel gebruikt als het attribuut `link` gezet is.",table:{type:{summary:n.STRING},defaultValue:{summary:String(t.external)},category:e.ATTRIBUTES}},alt:{name:"alt",description:"Geeft de component een alternatieve stijl. De achtergrond wordt grijs.",table:{type:{summary:n.BOOLEAN},defaultValue:{summary:String(t.alt)},category:e.ATTRIBUTES}},noBorder:{name:"no-border",description:"Geeft de component weer zonder border.",table:{type:{summary:n.BOOLEAN},defaultValue:{summary:String(t.noBorder)},category:e.ATTRIBUTES}},size:{name:"size",description:"Dit attribuut bepaalt de grootte van de component.",type:{name:n.STRING,required:!1},control:{type:A.SELECT},options:Object.values(u),table:{type:{summary:f(Object.values(u))},category:e.ATTRIBUTES,defaultValue:{summary:String(t.size)}}},imgSrc:{name:"img-src",description:"Het path van de image dat getoond moet worden in de spotlight.",table:{type:{summary:n.STRING},defaultValue:{summary:String(t.imgSrc)},category:e.ATTRIBUTES}},imgAlt:{name:"img-alt",description:"De alternatieve tekst van de image dat getoond moet worden in de spotlight.",table:{type:{summary:n.STRING},defaultValue:{summary:String(t.imgAlt)},category:e.ATTRIBUTES}},title:{name:"title",description:"Titel van de spotlight.",table:{type:{summary:n.STRING},defaultValue:{summary:String(t.title)},category:e.SLOTS}},subtitle:{name:"subtitle",description:"Subtitle van de spotlight.",table:{type:{summary:n.STRING},defaultValue:{summary:String(t.subtitle)},category:e.SLOTS}},text:{name:"text",description:"Text van de spotlight.",table:{type:{summary:n.STRING},defaultValue:{summary:String(t.text)},category:e.SLOTS}},content:{name:"content",description:"Content van de spotlight.",table:{type:{summary:n.STRING},defaultValue:{summary:String(t.content)},category:e.SLOTS}}};L([E]);const P={id:"components-block-spotlight",title:"Components - Block/spotlight",tags:["autodocs"],args:t,argTypes:O},R=S(t,({link:a,linkLabel:c,alt:y,size:k,imgSrc:T,imgAlt:w,title:d,subtitle:v,text:h,content:b,external:$,noBorder:x})=>s`
        <vl-spotlight
            link=${a}
            link-label=${c}
            ?alt=${y}
            ?no-border=${x}
            ?external=${$}
            size=${k}
            img-src=${T}
            img-alt=${w}
        >
            ${d?s`<span slot="title"> ${d} </span>`:""}
            ${v?s`<span slot="subtitle"> ${v} </span>`:""}
            ${h?s`<span slot="text"> ${h} </span>`:""}
            ${b?s`<span slot="content"> ${b} </span>`:""}
        </vl-spotlight>
    `),l=R.bind({});l.storyName="vl-spotlight - default";l.args={title:"Premies voor renovatie"};const o=S(t,({external:a,linkLabel:c})=>s`
        <vl-spotlight
            link="http://www.google.com"
            link-label=${c||(a?"Premies voor renovatie - opent in nieuw venster":"Premies voor renovatie")}
            ?external=${a}
        >
            <span slot="title">Premies voor renovatie</span>
        </vl-spotlight>
    `);o.storyName="vl-spotlight - with link";o.parameters={controls:{include:["external","linkLabel"]}};const r=()=>s`
    <vl-spotlight>
        <span slot="title"> Premies voor renovatie </span>
    </vl-spotlight>
`;r.storyName="vl-spotlight - no link";const p=()=>s`
    <vl-spotlight link="https://google.be" alt size="${u.S}">
        <span slot="title"> Verslag bestuursvergadering </span>
        <vl-document slot="content">
            <span slot="type">DOCX</span>
            <span slot="title">document</span>
            <span slot="metadata">DOCX-112kb</span>
        </vl-document>
    </vl-spotlight>
`;p.storyName="vl-spotlight - with content";const m=()=>s`
    <vl-spotlight link="https://google.be" external link-label="Premies voor renovatie - opent in nieuw venster">
        <span slot="title">Premies voor renovatie</span>
        <span slot="text"
            >Gaat u bouwen of verbouwen? Investeer in energiebesparende maatregelen en bespaar heel wat op uw
            energiefactuur.</span
        >
    </vl-spotlight>
`;m.storyName="vl-spotlight - with text";const i=()=>s`
    <vl-spotlight img-src="dak.jpg" img-alt="spotlight image">
        <span slot="title"> Premies voor renovatie </span>
        <span slot="subtitle">Er zijn er verschillende...</span>
        <span slot="text"
            >Gaat u bouwen of verbouwen? Investeer in energiebesparende maatregelen en bespaar heel wat op uw
            energiefactuur.</span
        >
    </vl-spotlight>
`;i.storyName="vl-spotlight - with image";i.decorators=[a=>s` <div style="width: 600px;">${a()}</div>`];const g=()=>s`
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
`;g.storyName="vl-spotlight - with subtitle";l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:'story(spotlightArgs, ({\n  link,\n  linkLabel,\n  alt,\n  size,\n  imgSrc,\n  imgAlt,\n  title,\n  subtitle,\n  text,\n  content,\n  external,\n  noBorder\n}: typeof spotlightArgs) => html`\n        <vl-spotlight\n            link=${link}\n            link-label=${linkLabel}\n            ?alt=${alt}\n            ?no-border=${noBorder}\n            ?external=${external}\n            size=${size}\n            img-src=${imgSrc}\n            img-alt=${imgAlt}\n        >\n            ${title ? html`<span slot="title"> ${title} </span>` : ``}\n            ${subtitle ? html`<span slot="subtitle"> ${subtitle} </span>` : ``}\n            ${text ? html`<span slot="text"> ${text} </span>` : ``}\n            ${content ? html`<span slot="content"> ${content} </span>` : ``}\n        </vl-spotlight>\n    `)',...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`story(spotlightArgs, ({
  external,
  linkLabel
}: typeof spotlightArgs) => html\`
        <vl-spotlight
            link="http://www.google.com"
            link-label=\${linkLabel || (external ? 'Premies voor renovatie - opent in nieuw venster' : 'Premies voor renovatie')}
            ?external=\${external}
        >
            <span slot="title">Premies voor renovatie</span>
        </vl-spotlight>
    \`)`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => html\`
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
\``,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => html\`
    <vl-spotlight link="https://google.be" external link-label="Premies voor renovatie - opent in nieuw venster">
        <span slot="title">Premies voor renovatie</span>
        <span slot="text"
            >Gaat u bouwen of verbouwen? Investeer in energiebesparende maatregelen en bespaar heel wat op uw
            energiefactuur.</span
        >
    </vl-spotlight>
\``,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => html\`
    <vl-spotlight img-src="dak.jpg" img-alt="spotlight image">
        <span slot="title"> Premies voor renovatie </span>
        <span slot="subtitle">Er zijn er verschillende...</span>
        <span slot="text"
            >Gaat u bouwen of verbouwen? Investeer in energiebesparende maatregelen en bespaar heel wat op uw
            energiefactuur.</span
        >
    </vl-spotlight>
\``,...i.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => html\`
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
\``,...g.parameters?.docs?.source}}};const V=["SpotLightDefault","SpotlightWithLink","spotlightNoLink","SpotlightWithContent","SpotlightWithText","SpotlightWithImage","SpotlightWithSubtitle"];export{l as SpotLightDefault,p as SpotlightWithContent,i as SpotlightWithImage,o as SpotlightWithLink,g as SpotlightWithSubtitle,m as SpotlightWithText,V as __namedExportsOrder,P as default,r as spotlightNoLink};
