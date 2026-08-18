import{Z as r,_ as l,a1 as x,bT as B,X as E,W as M,u as y,j as e,C as c,b8 as N,s as f,x as v,r as R,bU as V}from"./iframe-COmpMQdF.js";import{o as b}from"./unsafe-html-DkF6qbYn.js";import"./preload-helper-D9Z9MdNV.js";const n={...E,...B,linkLabel:"",titleSlot:"",textSlot:""},O={...M,href:{name:"href",description:"De url waar de link naar verwijst.",table:{type:{summary:l.STRING},category:r.ATTRIBUTES,defaultValue:{summary:n.href}}},linkLabel:{name:"link-label",description:'Aria-label voor de link. Aanbevolen voor toegankelijkheid. Let op: `aria-label` vervangt de volledige linktekst, bv. "Bouwen, wonen en energie - opent in nieuw venster" bij external links.',table:{type:{summary:l.STRING},category:r.ATTRIBUTES,defaultValue:{summary:n.linkLabel}}},external:{name:"external",description:"Opent de link in een nieuw tabblad.",table:{type:{summary:l.BOOLEAN},category:r.ATTRIBUTES,defaultValue:{summary:String(n.external)}}},alt:{name:"alt",description:"Beeldt de doormat af in een alternatieve stijl.",table:{type:{summary:l.BOOLEAN},category:r.ATTRIBUTES,defaultValue:{summary:String(n.alt)}}},imageSrc:{name:"image-src",description:"De url van de afbeelding.",table:{type:{summary:l.STRING},category:r.ATTRIBUTES,defaultValue:{summary:String(n.imageSrc)}}},imageAlt:{name:"image-alt",description:"De alt tekst van de afbeelding.",table:{type:{summary:l.STRING},category:r.ATTRIBUTES,defaultValue:{summary:n.imageAlt}}},imageWidth:{name:"image-width",description:"Past de breedte van de afbeelding aan.<br/>De maximum toegelaten breedte is 150px.<br/>Niet van toepassing als `graphic` op `true` staat.",control:{type:x.NUMBER},table:{type:{summary:l.NUMBER},category:r.ATTRIBUTES,defaultValue:{summary:String(n.imageWidth)}}},imageHeight:{name:"image-height",description:"Past de hoogte van de afbeelding aan.<br/>Niet van toepassing als `graphic` op `true` staat.",control:{type:x.NUMBER},table:{type:{summary:l.NUMBER},category:r.ATTRIBUTES,defaultValue:{summary:String(n.imageHeight)}}},fullHeight:{name:"full-height",description:"Strekt de doormat verticaal uit om de volledige hoogte van de container te vullen.",table:{type:{summary:l.BOOLEAN},category:r.ATTRIBUTES,defaultValue:{summary:String(n.fullHeight)}}},graphic:{name:"graphic",description:"Beeldt de afbeelding af als een graphic.<br/>Zorg ervoor dat de afbeelding die je meegeeft de correcte afmetingen heeft.",table:{type:{summary:l.BOOLEAN},category:r.ATTRIBUTES,defaultValue:{summary:String(n.graphic)}}},titleSlot:{name:"title",description:"De titel van de doormat.",table:{type:{summary:l.HTML},category:r.SLOTS,defaultValue:{summary:n.titleSlot}}},textSlot:{name:"text",description:"De tekst van de doormat.",table:{type:{summary:l.HTML},category:r.SLOTS,defaultValue:{summary:n.textSlot}}}};function w(a){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...y(),...a.components},{FluxComponentMetaData:u}=t;return u||W("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"doormat",children:"Doormat"}),`
`,e.jsx(u,{id:"components-block-doormat"}),`
`,e.jsx(t.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(t.p,{children:["Gebruik de ",e.jsx(t.code,{children:"doormat"})," component om een snel en duidelijk overzicht weer te geven van de informatie op je website.",e.jsx("br",{}),`
Elke doormat krijgt zijn eigen titel, tekst, optionele afbeelding en linkt naar een pagina binnen je website.`]}),`
`,e.jsx(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import { VlDoormatComponent } from '@domg-wc/components/block';
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<vl-doormat></vl-doormat>
`})}),`
`,e.jsx(c,{of:o}),`
`,e.jsx(t.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(N,{of:o}),`
`,e.jsx(t.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(t.h3,{id:"externe-link-met-aria-label",children:"Externe link met aria-label"}),`
`,e.jsx(c,{of:i}),`
`,e.jsx(t.h3,{id:"alternatieve-stijl",children:"Alternatieve stijl"}),`
`,e.jsx(c,{of:s}),`
`,e.jsx(t.h3,{id:"met-afbeelding",children:"Met afbeelding"}),`
`,e.jsx(c,{of:m}),`
`,e.jsx(t.h3,{id:"met-grafisch-element",children:"Met grafisch element"}),`
`,e.jsx(c,{of:d}),`
`,e.jsx(t.h3,{id:"verticaal-vullend",children:"Verticaal vullend"}),`
`,e.jsx(t.p,{children:"De doormat krijgt een hoogte van 100%. Dit werkt enkel wanneer de container een vaste hoogte heeft."}),`
`,e.jsxs(t.p,{children:["Dit kan je doen door bv. met een ",e.jsx(t.code,{children:"vl-grid"}),` layout werken, met meerdere doormat components als directe kinderen.
Vervolgens op elke doormat de CSS-classes `,e.jsx(t.code,{children:"vl-column"}),", ",e.jsx(t.code,{children:"vl-column--align-self-stretch"}),` en de gewenste breedteclasses
plaatsen.`]}),`
`,e.jsx(c,{of:g}),`
`,e.jsx(t.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/componenten/doormat",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Doormat"})})]})}function I(a={}){const{wrapper:t}={...y(),...a.components};return t?e.jsx(t,{...a,children:e.jsx(w,{...a})}):w(a)}function W(a,t){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}R([V]);const F={id:"components-block-doormat",title:"Components - Block/doormat",tags:["autodocs"],args:n,argTypes:O,parameters:{docs:{page:I}}},p=f(n,({href:a,linkLabel:t,external:u,alt:S,imageSrc:$,imageAlt:T,imageHeight:k,imageWidth:j,graphic:A,fullHeight:D,textSlot:H,titleSlot:L})=>v`
            <div class="story--fixed-width">
                <vl-doormat
                    href=${a}
                    link-label=${t}
                    ?external=${u}
                    ?alt=${S}
                    ?full-height=${D}
                    image-src=${$}
                    image-alt=${T}
                    image-height=${k}
                    image-width=${j}
                    ?graphic=${A}
                >
                    <span slot="title">${b(L)}</span>
                    <span slot="text">${b(H)}</span>
                </vl-doormat>
            </div>
        `),o=p.bind({});o.storyName="vl-doormat - default";o.args={href:"https://www.vlaanderen.be/bouwen-wonen-en-energie",titleSlot:"Bouwen, wonen en energie",textSlot:`De overheid zet zich in om betaalbaar en kwaliteitsvol wonen voor iedereen beschikbaar te
                maken. Ze biedt sociale woningen aan, geeft premies aan wie zijn woning verbouwt en
                energiezuinig maakt en zoekt oplossingen om de stijging van de vastgoedprijzen onder controle te
                houden.`};const i=p.bind({});i.storyName="vl-doormat - external";i.args={...o.args,external:!0,linkLabel:"Bouwen, wonen en energie - opent in nieuw venster"};const s=p.bind({});s.storyName="vl-doormat - alt";s.args={...o.args,alt:!0};const m=p.bind({});m.storyName="vl-doormat - image";m.args={...o.args,imageSrc:"https://picsum.photos/100/150?image=1048",imageAlt:"Bouwen in Brussel"};const d=p.bind({});d.storyName="vl-doormat - graphic";d.args={...o.args,imageSrc:"https://picsum.photos/1600/400?image=1048",imageAlt:"Bouwen in Brussel",graphic:!0};const C=f(n,({fullHeight:a})=>v`
        <div class="vl-grid">
            <vl-doormat
                ?full-height=${a}
                href="https://www.vlaanderen.be/bouwen-wonen-en-energie"
                class="vl-column vl-column--6 vl-column--align-self-stretch"
            >
                <span slot="title">Bouwen, wonen en energie</span>
                <span slot="text">Weinig tekst.</span>
            </vl-doormat>
            <vl-doormat
                ?full-height=${a}
                href="https://www.vlaanderen.be/bouwen-wonen-en-energie"
                class="vl-column vl-column--6 vl-column--align-self-stretch"
            >
                <span slot="title">Grotere doormat</span>
                <span slot="text"
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span
                >
            </vl-doormat>
        </div>
    `),g=C.bind({});g.storyName="vl-doormat - full height";g.args={fullHeight:!0};const U=f(n,({href:a})=>v`
        <div class="story--fixed-width">
            <vl-doormat href=${a}>
                <span slot="title">Bouwen, wonen en energie</span>
            </vl-doormat>
        </div>
    `),h=U.bind({});h.storyName="vl-doormat - title only";h.args={href:"https://www.vlaanderen.be/bouwen-wonen-en-energie"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`story(doormatArgs, ({
  href,
  linkLabel,
  external,
  alt,
  imageSrc,
  imageAlt,
  imageHeight,
  imageWidth,
  graphic,
  fullHeight,
  textSlot,
  titleSlot
}) => html\`
            <div class="story--fixed-width">
                <vl-doormat
                    href=\${href}
                    link-label=\${linkLabel}
                    ?external=\${external}
                    ?alt=\${alt}
                    ?full-height=\${fullHeight}
                    image-src=\${imageSrc}
                    image-alt=\${imageAlt}
                    image-height=\${imageHeight}
                    image-width=\${imageWidth}
                    ?graphic=\${graphic}
                >
                    <span slot="title">\${unsafeHTML(titleSlot)}</span>
                    <span slot="text">\${unsafeHTML(textSlot)}</span>
                </vl-doormat>
            </div>
        \`)`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`story(doormatArgs, ({
  href,
  linkLabel,
  external,
  alt,
  imageSrc,
  imageAlt,
  imageHeight,
  imageWidth,
  graphic,
  fullHeight,
  textSlot,
  titleSlot
}) => html\`
            <div class="story--fixed-width">
                <vl-doormat
                    href=\${href}
                    link-label=\${linkLabel}
                    ?external=\${external}
                    ?alt=\${alt}
                    ?full-height=\${fullHeight}
                    image-src=\${imageSrc}
                    image-alt=\${imageAlt}
                    image-height=\${imageHeight}
                    image-width=\${imageWidth}
                    ?graphic=\${graphic}
                >
                    <span slot="title">\${unsafeHTML(titleSlot)}</span>
                    <span slot="text">\${unsafeHTML(textSlot)}</span>
                </vl-doormat>
            </div>
        \`)`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story(doormatArgs, ({
  href,
  linkLabel,
  external,
  alt,
  imageSrc,
  imageAlt,
  imageHeight,
  imageWidth,
  graphic,
  fullHeight,
  textSlot,
  titleSlot
}) => html\`
            <div class="story--fixed-width">
                <vl-doormat
                    href=\${href}
                    link-label=\${linkLabel}
                    ?external=\${external}
                    ?alt=\${alt}
                    ?full-height=\${fullHeight}
                    image-src=\${imageSrc}
                    image-alt=\${imageAlt}
                    image-height=\${imageHeight}
                    image-width=\${imageWidth}
                    ?graphic=\${graphic}
                >
                    <span slot="title">\${unsafeHTML(titleSlot)}</span>
                    <span slot="text">\${unsafeHTML(textSlot)}</span>
                </vl-doormat>
            </div>
        \`)`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`story(doormatArgs, ({
  href,
  linkLabel,
  external,
  alt,
  imageSrc,
  imageAlt,
  imageHeight,
  imageWidth,
  graphic,
  fullHeight,
  textSlot,
  titleSlot
}) => html\`
            <div class="story--fixed-width">
                <vl-doormat
                    href=\${href}
                    link-label=\${linkLabel}
                    ?external=\${external}
                    ?alt=\${alt}
                    ?full-height=\${fullHeight}
                    image-src=\${imageSrc}
                    image-alt=\${imageAlt}
                    image-height=\${imageHeight}
                    image-width=\${imageWidth}
                    ?graphic=\${graphic}
                >
                    <span slot="title">\${unsafeHTML(titleSlot)}</span>
                    <span slot="text">\${unsafeHTML(textSlot)}</span>
                </vl-doormat>
            </div>
        \`)`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`story(doormatArgs, ({
  href,
  linkLabel,
  external,
  alt,
  imageSrc,
  imageAlt,
  imageHeight,
  imageWidth,
  graphic,
  fullHeight,
  textSlot,
  titleSlot
}) => html\`
            <div class="story--fixed-width">
                <vl-doormat
                    href=\${href}
                    link-label=\${linkLabel}
                    ?external=\${external}
                    ?alt=\${alt}
                    ?full-height=\${fullHeight}
                    image-src=\${imageSrc}
                    image-alt=\${imageAlt}
                    image-height=\${imageHeight}
                    image-width=\${imageWidth}
                    ?graphic=\${graphic}
                >
                    <span slot="title">\${unsafeHTML(titleSlot)}</span>
                    <span slot="text">\${unsafeHTML(textSlot)}</span>
                </vl-doormat>
            </div>
        \`)`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`story(doormatArgs, ({
  fullHeight
}) => html\`
        <div class="vl-grid">
            <vl-doormat
                ?full-height=\${fullHeight}
                href="https://www.vlaanderen.be/bouwen-wonen-en-energie"
                class="vl-column vl-column--6 vl-column--align-self-stretch"
            >
                <span slot="title">Bouwen, wonen en energie</span>
                <span slot="text">Weinig tekst.</span>
            </vl-doormat>
            <vl-doormat
                ?full-height=\${fullHeight}
                href="https://www.vlaanderen.be/bouwen-wonen-en-energie"
                class="vl-column vl-column--6 vl-column--align-self-stretch"
            >
                <span slot="title">Grotere doormat</span>
                <span slot="text"
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span
                >
            </vl-doormat>
        </div>
    \`)`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`story(doormatArgs, ({
  href
}) => html\`
        <div class="story--fixed-width">
            <vl-doormat href=\${href}>
                <span slot="title">Bouwen, wonen en energie</span>
            </vl-doormat>
        </div>
    \`)`,...h.parameters?.docs?.source}}};const X=["DoormatDefault","DoormatExternal","DoormatAlt","DoormatImage","DoormatGraphic","DoormatFullHeight","DoormatTitleOnly"];export{s as DoormatAlt,o as DoormatDefault,i as DoormatExternal,g as DoormatFullHeight,d as DoormatGraphic,m as DoormatImage,h as DoormatTitleOnly,X as __namedExportsOrder,F as default};
