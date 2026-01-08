import{K as i,L as o,P as h,bR as j,I as w,H as A,u as f,j as e,C as g,bd as D,s as B,x as E,r as M,bS as H}from"./iframe-C7eocPW2.js";import{o as p}from"./unsafe-html-DGst3qpG.js";import"./preload-helper-D9Z9MdNV.js";const a={...w,...j,titleSlot:"",textSlot:""},R={...A,href:{name:"href",description:"De url waar de link naar verwijst.",table:{type:{summary:o.STRING},category:i.ATTRIBUTES,defaultValue:{summary:a.href}}},external:{name:"external",description:"Opent de link in een nieuw tabblad.",table:{type:{summary:o.BOOLEAN},category:i.ATTRIBUTES,defaultValue:{summary:String(a.external)}}},alt:{name:"alt",description:"Beeldt de doormat af in een alternatieve stijl.",table:{type:{summary:o.BOOLEAN},category:i.ATTRIBUTES,defaultValue:{summary:String(a.alt)}}},imageSrc:{name:"image-src",description:"De url van de afbeelding.",table:{type:{summary:o.STRING},category:i.ATTRIBUTES,defaultValue:{summary:String(a.imageSrc)}}},imageAlt:{name:"image-alt",description:"De alt tekst van de afbeelding.",table:{type:{summary:o.STRING},category:i.ATTRIBUTES,defaultValue:{summary:a.imageAlt}}},imageWidth:{name:"image-width",description:"Past de breedte van de afbeelding aan.<br/>De maximum toegelaten breedte is 150px.<br/>Niet van toepassing als `graphic` op `true` staat.",control:{type:h.NUMBER},table:{type:{summary:o.NUMBER},category:i.ATTRIBUTES,defaultValue:{summary:String(a.imageWidth)}}},imageHeight:{name:"image-height",description:"Past de hoogte van de afbeelding aan.<br/>Niet van toepassing als `graphic` op `true` staat.",control:{type:h.NUMBER},table:{type:{summary:o.NUMBER},category:i.ATTRIBUTES,defaultValue:{summary:String(a.imageHeight)}}},graphic:{name:"graphic",description:"Beeldt de afbeelding af als een graphic.<br/>Zorg ervoor dat de afbeelding die je meegeeft de correcte afmetingen heeft.",table:{type:{summary:o.BOOLEAN},category:i.ATTRIBUTES,defaultValue:{summary:String(a.graphic)}}},titleSlot:{name:"title",description:"De titel van de doormat.",table:{type:{summary:o.HTML},category:i.SLOTS,defaultValue:{summary:a.titleSlot}}},textSlot:{name:"text",description:"De tekst van de doormat.",table:{type:{summary:o.HTML},category:i.SLOTS,defaultValue:{summary:a.textSlot}}}};function u(r){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...f(),...r.components},{FluxComponentMetaData:d}=t;return d||N("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"doormat",children:"Doormat"}),`
`,e.jsx(d,{id:"components-block-doormat"}),`
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
`,e.jsx(D,{of:n}),`
`,e.jsx(t.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(t.h3,{id:"alternatieve-stijl",children:"Alternatieve stijl"}),`
`,e.jsx(g,{of:s}),`
`,e.jsx(t.h3,{id:"met-afbeelding",children:"Met afbeelding"}),`
`,e.jsx(g,{of:l}),`
`,e.jsx(t.h3,{id:"met-grafisch-element",children:"Met grafisch element"}),`
`,e.jsx(g,{of:m}),`
`,e.jsx(t.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-doormat",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Doormat"})})]})}function k(r={}){const{wrapper:t}={...f(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(u,{...r})}):u(r)}function N(r,t){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}M([H]);const C={id:"components-block-doormat",title:"Components - Block/doormat",tags:["autodocs"],args:a,argTypes:R,parameters:{docs:{page:k}}},c=B(a,({href:r,external:t,alt:d,imageSrc:x,imageAlt:S,imageHeight:y,imageWidth:v,graphic:b,textSlot:$,titleSlot:T})=>E`
            <div class="story--fixed-width">
                <vl-doormat
                    href=${r}
                    ?external=${t}
                    ?alt=${d}
                    image-src=${x}
                    image-alt=${S}
                    image-height=${y}
                    image-width=${v}
                    ?graphic=${b}
                >
                    <span slot="title">${p(T)}</span>
                    <span slot="text">${p($)}</span>
                </vl-doormat>
            </div>
        `),n=c.bind({});n.storyName="vl-doormat - default";n.args={href:"https://www.vlaanderen.be/bouwen-wonen-en-energie",titleSlot:"Bouwen, wonen en energie",textSlot:`De overheid zet zich in om betaalbaar en kwaliteitsvol wonen voor iedereen beschikbaar te
                maken. Ze biedt sociale woningen aan, geeft premies aan wie zijn woning verbouwt en
                energiezuinig maakt en zoekt oplossingen om de stijging van de vastgoedprijzen onder controle te
                houden.`};const s=c.bind({});s.storyName="vl-doormat - alt";s.args={...n.args,alt:!0};const l=c.bind({});l.storyName="vl-doormat - image";l.args={...n.args,imageSrc:"https://picsum.photos/100/150?image=1048",imageAlt:"Bouwen in Brussel"};const m=c.bind({});m.storyName="vl-doormat - graphic";m.args={...n.args,imageSrc:"https://picsum.photos/1600/400?image=1048",imageAlt:"Bouwen in Brussel",graphic:!0};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`story(doormatArgs, ({
  href,
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
        \`)`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story(doormatArgs, ({
  href,
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
        \`)`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`story(doormatArgs, ({
  href,
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
        \`)`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`story(doormatArgs, ({
  href,
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
        \`)`,...m.parameters?.docs?.source}}};const O=["DoormatDefault","DoormatAlt","DoormatImage","DoormatGraphic"];export{s as DoormatAlt,n as DoormatDefault,m as DoormatGraphic,l as DoormatImage,O as __namedExportsOrder,C as default};
