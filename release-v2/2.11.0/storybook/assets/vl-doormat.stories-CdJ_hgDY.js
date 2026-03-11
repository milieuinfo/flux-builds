import{Y as r,Z as i,a0 as p,bX as w,W as A,U as D,u as f,j as e,C as g,bk as L,s as E,x as B,r as M,bY as H}from"./iframe-BWsn3Pr7.js";import{o as u}from"./unsafe-html-B89ecE4O.js";import"./preload-helper-D9Z9MdNV.js";const a={...A,...w,linkLabel:"",titleSlot:"",textSlot:""},R={...D,href:{name:"href",description:"De url waar de link naar verwijst.",table:{type:{summary:i.STRING},category:r.ATTRIBUTES,defaultValue:{summary:a.href}}},linkLabel:{name:"link-label",description:'Aria-label voor de link. Aanbevolen voor toegankelijkheid. Let op: `aria-label` vervangt de volledige linktekst, bv. "Bouwen, wonen en energie - opent in nieuw venster" bij external links.',table:{type:{summary:i.STRING},category:r.ATTRIBUTES,defaultValue:{summary:a.linkLabel}}},external:{name:"external",description:"Opent de link in een nieuw tabblad.",table:{type:{summary:i.BOOLEAN},category:r.ATTRIBUTES,defaultValue:{summary:String(a.external)}}},alt:{name:"alt",description:"Beeldt de doormat af in een alternatieve stijl.",table:{type:{summary:i.BOOLEAN},category:r.ATTRIBUTES,defaultValue:{summary:String(a.alt)}}},imageSrc:{name:"image-src",description:"De url van de afbeelding.",table:{type:{summary:i.STRING},category:r.ATTRIBUTES,defaultValue:{summary:String(a.imageSrc)}}},imageAlt:{name:"image-alt",description:"De alt tekst van de afbeelding.",table:{type:{summary:i.STRING},category:r.ATTRIBUTES,defaultValue:{summary:a.imageAlt}}},imageWidth:{name:"image-width",description:"Past de breedte van de afbeelding aan.<br/>De maximum toegelaten breedte is 150px.<br/>Niet van toepassing als `graphic` op `true` staat.",control:{type:p.NUMBER},table:{type:{summary:i.NUMBER},category:r.ATTRIBUTES,defaultValue:{summary:String(a.imageWidth)}}},imageHeight:{name:"image-height",description:"Past de hoogte van de afbeelding aan.<br/>Niet van toepassing als `graphic` op `true` staat.",control:{type:p.NUMBER},table:{type:{summary:i.NUMBER},category:r.ATTRIBUTES,defaultValue:{summary:String(a.imageHeight)}}},graphic:{name:"graphic",description:"Beeldt de afbeelding af als een graphic.<br/>Zorg ervoor dat de afbeelding die je meegeeft de correcte afmetingen heeft.",table:{type:{summary:i.BOOLEAN},category:r.ATTRIBUTES,defaultValue:{summary:String(a.graphic)}}},titleSlot:{name:"title",description:"De titel van de doormat.",table:{type:{summary:i.HTML},category:r.SLOTS,defaultValue:{summary:a.titleSlot}}},textSlot:{name:"text",description:"De tekst van de doormat.",table:{type:{summary:i.HTML},category:r.SLOTS,defaultValue:{summary:a.textSlot}}}};function x(o){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...f(),...o.components},{FluxComponentMetaData:h}=t;return h||V("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"doormat",children:"Doormat"}),`
`,e.jsx(h,{id:"components-block-doormat"}),`
`,e.jsx(t.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(t.p,{children:["Gebruik de ",e.jsx(t.code,{children:"doormat"})," component om een snel en duidelijk overzicht weer te geven van de informatie op je website.",e.jsx("br",{}),`
Elke doormat krijgt zijn eigen titel, tekst, optionele afbeelding en linkt naar een pagina binnen je website.`]}),`
`,e.jsx(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import { VlDoormatComponent } from '@domg-wc/components/block';
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<vl-doormat></vl-doormat>
`})}),`
`,e.jsx(g,{of:n}),`
`,e.jsx(t.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(L,{of:n}),`
`,e.jsx(t.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(t.h3,{id:"externe-link-met-aria-label",children:"Externe link met aria-label"}),`
`,e.jsx(g,{of:l}),`
`,e.jsx(t.h3,{id:"alternatieve-stijl",children:"Alternatieve stijl"}),`
`,e.jsx(g,{of:s}),`
`,e.jsx(t.h3,{id:"met-afbeelding",children:"Met afbeelding"}),`
`,e.jsx(g,{of:m}),`
`,e.jsx(t.h3,{id:"met-grafisch-element",children:"Met grafisch element"}),`
`,e.jsx(g,{of:d}),`
`,e.jsx(t.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-doormat",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Doormat"})})]})}function N(o={}){const{wrapper:t}={...f(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(x,{...o})}):x(o)}function V(o,t){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}M([H]);const W={id:"components-block-doormat",title:"Components - Block/doormat",tags:["autodocs"],args:a,argTypes:R,parameters:{docs:{page:N}}},c=E(a,({href:o,linkLabel:t,external:h,alt:b,imageSrc:v,imageAlt:S,imageHeight:y,imageWidth:$,graphic:T,textSlot:k,titleSlot:j})=>B`
            <div class="story--fixed-width">
                <vl-doormat
                    href=${o}
                    link-label=${t}
                    ?external=${h}
                    ?alt=${b}
                    image-src=${v}
                    image-alt=${S}
                    image-height=${y}
                    image-width=${$}
                    ?graphic=${T}
                >
                    <span slot="title">${u(j)}</span>
                    <span slot="text">${u(k)}</span>
                </vl-doormat>
            </div>
        `),n=c.bind({});n.storyName="vl-doormat - default";n.args={href:"https://www.vlaanderen.be/bouwen-wonen-en-energie",titleSlot:"Bouwen, wonen en energie",textSlot:`De overheid zet zich in om betaalbaar en kwaliteitsvol wonen voor iedereen beschikbaar te
                maken. Ze biedt sociale woningen aan, geeft premies aan wie zijn woning verbouwt en
                energiezuinig maakt en zoekt oplossingen om de stijging van de vastgoedprijzen onder controle te
                houden.`};const l=c.bind({});l.storyName="vl-doormat - external";l.args={...n.args,external:!0,linkLabel:"Bouwen, wonen en energie - opent in nieuw venster"};const s=c.bind({});s.storyName="vl-doormat - alt";s.args={...n.args,alt:!0};const m=c.bind({});m.storyName="vl-doormat - image";m.args={...n.args,imageSrc:"https://picsum.photos/100/150?image=1048",imageAlt:"Bouwen in Brussel"};const d=c.bind({});d.storyName="vl-doormat - graphic";d.args={...n.args,imageSrc:"https://picsum.photos/1600/400?image=1048",imageAlt:"Bouwen in Brussel",graphic:!0};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`story(doormatArgs, ({
  href,
  linkLabel,
  external,
  alt,
  imageSrc,
  imageAlt,
  imageHeight,
  imageWidth,
  graphic,
  textSlot,
  titleSlot
}) => html\`
            <div class="story--fixed-width">
                <vl-doormat
                    href=\${href}
                    link-label=\${linkLabel}
                    ?external=\${external}
                    ?alt=\${alt}
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
        \`)`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`story(doormatArgs, ({
  href,
  linkLabel,
  external,
  alt,
  imageSrc,
  imageAlt,
  imageHeight,
  imageWidth,
  graphic,
  textSlot,
  titleSlot
}) => html\`
            <div class="story--fixed-width">
                <vl-doormat
                    href=\${href}
                    link-label=\${linkLabel}
                    ?external=\${external}
                    ?alt=\${alt}
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
        \`)`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story(doormatArgs, ({
  href,
  linkLabel,
  external,
  alt,
  imageSrc,
  imageAlt,
  imageHeight,
  imageWidth,
  graphic,
  textSlot,
  titleSlot
}) => html\`
            <div class="story--fixed-width">
                <vl-doormat
                    href=\${href}
                    link-label=\${linkLabel}
                    ?external=\${external}
                    ?alt=\${alt}
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
  textSlot,
  titleSlot
}) => html\`
            <div class="story--fixed-width">
                <vl-doormat
                    href=\${href}
                    link-label=\${linkLabel}
                    ?external=\${external}
                    ?alt=\${alt}
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
  textSlot,
  titleSlot
}) => html\`
            <div class="story--fixed-width">
                <vl-doormat
                    href=\${href}
                    link-label=\${linkLabel}
                    ?external=\${external}
                    ?alt=\${alt}
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
        \`)`,...d.parameters?.docs?.source}}};const O=["DoormatDefault","DoormatExternal","DoormatAlt","DoormatImage","DoormatGraphic"];export{s as DoormatAlt,n as DoormatDefault,l as DoormatExternal,d as DoormatGraphic,m as DoormatImage,O as __namedExportsOrder,W as default};
