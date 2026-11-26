import{b5 as u,b as a,r as x,b6 as I}from"./iframe-Cv28D2NX.js";import{C as t,T as n,b as N,d as z,a as A,g as O,s as k}from"./stories.helper-DYHi_5m6.js";import"./preload-helper-PPVm8Dsz.js";const e={...A,link:"",linkLabel:"",external:!1,alt:!1,noBorder:!1,size:u.S,imgSrc:"",imgAlt:"",title:"",subtitle:"",text:"",content:""},L={...z,link:{name:"link",description:"De titel wordt een link naar de url in dit attribuut, en de hele spotlight blijft klikbaar. De titel is de naam van de link: geef een spotlight met `link` dus altijd een titel. Ontbreken zowel de titel als `link-label`, dan geeft de component een waarschuwing in de console. Subtitel, tekst en content worden los van de link voorgelezen.<br/>Zet een link of knop in de spotlight enkel in het slot `content`. In de slots `subtitle` en `text` ligt die onder het klikvlak van de spotlight en is ze niet bereikbaar met de muis; dat wordt niet ondersteund.",table:{type:{summary:n.STRING},defaultValue:{summary:e.link},category:t.ATTRIBUTES}},linkLabel:{name:"link-label",description:'Vult het aria-label attribuut van de link op de titel in en vervangt zo de titel als voorgelezen linktekst. Gebruik het enkel als de titel niet volstaat, bv. om bij `external` te melden dat de link in een nieuw venster opent.<br/>Het label moet de zichtbare titel bevatten, bij voorkeur vooraan (WCAG 2.5.3 Label in Name), bv. "Premies voor renovatie - opent in nieuw venster".',table:{type:{summary:n.STRING},defaultValue:{summary:e.linkLabel},category:t.ATTRIBUTES}},external:{name:"external",description:"Opent de link in een nieuw tabblad. Dit attribuut wordt enkel gebruikt als het attribuut `link` gezet is.",table:{type:{summary:n.STRING},defaultValue:{summary:String(e.external)},category:t.ATTRIBUTES}},alt:{name:"alt",description:"Geeft de component een alternatieve stijl. De achtergrond wordt grijs. Dit is geen alternatieve tekst voor de afbeelding: gebruik daarvoor `img-alt`.",table:{type:{summary:n.BOOLEAN},defaultValue:{summary:String(e.alt)},category:t.ATTRIBUTES}},noBorder:{name:"no-border",description:"Geeft de component weer zonder border.",table:{type:{summary:n.BOOLEAN},defaultValue:{summary:String(e.noBorder)},category:t.ATTRIBUTES}},size:{name:"size",description:"Dit attribuut bepaalt de grootte van de component.",type:{name:n.STRING,required:!1},control:{type:N.SELECT},options:Object.values(u),table:{type:{summary:O(Object.values(u))},category:t.ATTRIBUTES,defaultValue:{summary:String(e.size)}}},imgSrc:{name:"img-src",description:"Het pad van de afbeelding die getoond wordt in de spotlight. Zet er altijd het attribuut `img-alt` bij.",table:{type:{summary:n.STRING},defaultValue:{summary:String(e.imgSrc)},category:t.ATTRIBUTES}},imgAlt:{name:"img-alt",description:'De alternatieve tekst van de afbeelding. Beschrijf wat er te zien is als de afbeelding informatie toevoegt, bv. "Oud pannendak met verweerde dakpannen". Is de afbeelding louter decoratief, zet dan een leeg `img-alt=""` zodat schermlezers ze overslaan. Ontbreekt het attribuut bij een `img-src`, dan geeft de component een waarschuwing in de console. Let op: het attribuut `alt` is de grijze stijlvariant en geen alternatieve tekst.',table:{type:{summary:n.STRING},defaultValue:{summary:String(e.imgAlt)},category:t.ATTRIBUTES}},title:{name:"title",description:"Titel van de spotlight. Met het attribuut `link` is de titel de link.",table:{type:{summary:n.STRING},defaultValue:{summary:String(e.title)},category:t.SLOTS}},subtitle:{name:"subtitle",description:"Subtitel van de spotlight. Zet hier geen link of knop in als het attribuut `link` gezet is.",table:{type:{summary:n.STRING},defaultValue:{summary:String(e.subtitle)},category:t.SLOTS}},text:{name:"text",description:"Tekst van de spotlight. Zet hier geen link of knop in als het attribuut `link` gezet is.",table:{type:{summary:n.STRING},defaultValue:{summary:String(e.text)},category:t.SLOTS}},content:{name:"content",description:"Content van de spotlight. Een link of knop in dit slot, bv. een `vl-document`, blijft apart bereikbaar naast de link op de titel. Een klik op de content volgt de link van de spotlight niet.",table:{type:{summary:n.STRING},defaultValue:{summary:String(e.content)},category:t.SLOTS}}};x([I]);const G={id:"components-block-spotlight",title:"Components - Block/spotlight",tags:["autodocs"],args:e,argTypes:L},E=k(e,({link:l,linkLabel:d,alt:S,size:y,imgSrc:f,imgAlt:w,title:c,subtitle:v,text:b,content:h,external:T,noBorder:$})=>a`
        <vl-spotlight
            link=${l}
            link-label=${d}
            ?alt=${S}
            ?no-border=${$}
            ?external=${T}
            size=${y}
            img-src=${f}
            img-alt=${w}
        >
            ${c?a`<span slot="title"> ${c} </span>`:""}
            ${v?a`<span slot="subtitle"> ${v} </span>`:""}
            ${b?a`<span slot="text"> ${b} </span>`:""}
            ${h?a`<span slot="content"> ${h} </span>`:""}
        </vl-spotlight>
    `),i=E.bind({});i.storyName="vl-spotlight - default";i.args={title:"Premies voor renovatie"};const s=k(e,({external:l,linkLabel:d})=>a`
        <vl-spotlight
            link="http://www.google.com"
            link-label=${d||(l?"Premies voor renovatie - opent in nieuw venster":"")}
            ?external=${l}
        >
            <span slot="title">Premies voor renovatie</span>
        </vl-spotlight>
    `);s.storyName="vl-spotlight - with link";s.parameters={controls:{include:["external","linkLabel"]}};const r=()=>a`
    <vl-spotlight>
        <span slot="title"> Premies voor renovatie </span>
    </vl-spotlight>
`;r.storyName="vl-spotlight - no link";const p=()=>a`
    <vl-spotlight link="https://google.be" alt size="${u.S}">
        <span slot="title"> Verslag bestuursvergadering </span>
        <vl-document slot="content">
            <span slot="type">DOCX</span>
            <span slot="title">document</span>
            <span slot="metadata">DOCX-112kb</span>
        </vl-document>
    </vl-spotlight>
`;p.storyName="vl-spotlight - with content";const g=()=>a`
    <vl-spotlight link="https://google.be" external link-label="Premies voor renovatie - opent in nieuw venster">
        <span slot="title">Premies voor renovatie</span>
        <span slot="text"
            >Gaat u bouwen of verbouwen? Investeer in energiebesparende maatregelen en bespaar heel wat op uw
            energiefactuur.</span
        >
    </vl-spotlight>
`;g.storyName="vl-spotlight - with text";const o=()=>a`
    <vl-spotlight img-src="dak.jpg" img-alt="Oud pannendak met verweerde dakpannen">
        <span slot="title"> Premies voor renovatie </span>
        <span slot="subtitle">Er zijn er verschillende...</span>
        <span slot="text"
            >Gaat u bouwen of verbouwen? Investeer in energiebesparende maatregelen en bespaar heel wat op uw
            energiefactuur.</span
        >
    </vl-spotlight>
`;o.storyName="vl-spotlight - with image";o.decorators=[l=>a` <div style="width: 600px;">${l()}</div>`];const m=()=>a`
    <vl-spotlight link="https://google.be">
        <span slot="title">Communicatiespecialist te Willebroek - contract 1 jaar</span>
        <span slot="subtitle">Niveau A (universitair diploma)</span>
        <span slot="text">
            <ul class="vl-icon-list">
                <li class="vl-icon-list__item">Waterwegen en Zeekanaal NV in Brussel</li>
                <li class="vl-icon-list__item">Natuur en bos</li>
            </ul>
        </span>
    </vl-spotlight>
`;m.storyName="vl-spotlight - with subtitle";const C=["SpotLightDefault","SpotlightWithLink","spotlightNoLink","SpotlightWithContent","SpotlightWithText","SpotlightWithImage","SpotlightWithSubtitle"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:'story(spotlightArgs, ({\n  link,\n  linkLabel,\n  alt,\n  size,\n  imgSrc,\n  imgAlt,\n  title,\n  subtitle,\n  text,\n  content,\n  external,\n  noBorder\n}: typeof spotlightArgs) => html`\n        <vl-spotlight\n            link=${link}\n            link-label=${linkLabel}\n            ?alt=${alt}\n            ?no-border=${noBorder}\n            ?external=${external}\n            size=${size}\n            img-src=${imgSrc}\n            img-alt=${imgAlt}\n        >\n            ${title ? html`<span slot="title"> ${title} </span>` : ``}\n            ${subtitle ? html`<span slot="subtitle"> ${subtitle} </span>` : ``}\n            ${text ? html`<span slot="text"> ${text} </span>` : ``}\n            ${content ? html`<span slot="content"> ${content} </span>` : ``}\n        </vl-spotlight>\n    `)',...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story(spotlightArgs, ({
  external,
  linkLabel
}: typeof spotlightArgs) => html\`
        <vl-spotlight
            link="http://www.google.com"
            link-label=\${linkLabel || (external ? 'Premies voor renovatie - opent in nieuw venster' : '')}
            ?external=\${external}
        >
            <span slot="title">Premies voor renovatie</span>
        </vl-spotlight>
    \`)`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => html\`
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
    <vl-spotlight link="https://google.be" external link-label="Premies voor renovatie - opent in nieuw venster">
        <span slot="title">Premies voor renovatie</span>
        <span slot="text"
            >Gaat u bouwen of verbouwen? Investeer in energiebesparende maatregelen en bespaar heel wat op uw
            energiefactuur.</span
        >
    </vl-spotlight>
\``,...g.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => html\`
    <vl-spotlight img-src="dak.jpg" img-alt="Oud pannendak met verweerde dakpannen">
        <span slot="title"> Premies voor renovatie </span>
        <span slot="subtitle">Er zijn er verschillende...</span>
        <span slot="text"
            >Gaat u bouwen of verbouwen? Investeer in energiebesparende maatregelen en bespaar heel wat op uw
            energiefactuur.</span
        >
    </vl-spotlight>
\``,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => html\`
    <vl-spotlight link="https://google.be">
        <span slot="title">Communicatiespecialist te Willebroek - contract 1 jaar</span>
        <span slot="subtitle">Niveau A (universitair diploma)</span>
        <span slot="text">
            <ul class="vl-icon-list">
                <li class="vl-icon-list__item">Waterwegen en Zeekanaal NV in Brussel</li>
                <li class="vl-icon-list__item">Natuur en bos</li>
            </ul>
        </span>
    </vl-spotlight>
\``,...m.parameters?.docs?.source}}};export{i as SpotLightDefault,p as SpotlightWithContent,o as SpotlightWithImage,s as SpotlightWithLink,m as SpotlightWithSubtitle,g as SpotlightWithText,C as __namedExportsOrder,G as default,r as spotlightNoLink};
