import{Z as i,_ as s,W as w,X as I,u as N,j as e,C as j,b8 as G,s as V,x as z,r as P,d as _}from"./iframe-DynOw9qF.js";import{o as L}from"./unsafe-html-CPadS5Zd.js";import"./preload-helper-D9Z9MdNV.js";const a={...I,title:"",image:"",alt:"",errorCode:"",textSlot:"",actionsSlot:""},B={...w,title:{name:"title",type:{name:s.STRING,required:!1},description:"Past de title van de error message aan.",table:{type:{summary:s.STRING},defaultValue:{summary:a.title},category:i.ATTRIBUTES}},image:{name:"image",type:{name:s.STRING,required:!1},description:"De URL voor de afbeelding die weergegeven moet worden.",table:{type:{summary:s.STRING},defaultValue:{summary:a.image},category:i.ATTRIBUTES}},alt:{name:"image-alt",type:{name:s.STRING,required:!1},description:"Past de alternatieve tekst van de afbeelding aan.",table:{type:{summary:s.STRING},defaultValue:{summary:a.alt},category:i.ATTRIBUTES}},errorCode:{name:"error-code",type:{name:s.STRING,required:!1},description:"Geeft de default titel, afbeelding, tekst en actie voor een specifieke error code weer.",table:{type:{summary:s.STRING},defaultValue:{summary:a.errorCode},category:i.ATTRIBUTES}},textSlot:{name:"text",description:"Past de omschrijvende tekst onder de titel aan. Dit slot is niet reactief",table:{type:{summary:s.HTML},category:i.SLOTS,defaultValue:{summary:a.textSlot}}},actionsSlot:{name:"actions",description:"Past de acties aan. Dit slot is niet reactief",table:{type:{summary:s.HTML},category:i.SLOTS,defaultValue:{summary:a.actionsSlot}}}};function H(o){const r={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...N(),...o.components},{FluxComponentMetaData:A}=r;return A||U("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"http-error-message",children:"HTTP Error Message"}),`
`,e.jsx(A,{id:"components-block-http-error-message"}),`
`,e.jsx(r.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(r.p,{children:["Gebruik de ",e.jsx(r.code,{children:"http-error-message"})," component om een error boodschap aan de gebruiker te tonen."]}),`
`,e.jsx(r.h2,{id:"aanbevolen-gebruik",children:"Aanbevolen gebruik"}),`
`,e.jsxs(r.p,{children:["Plaats ",e.jsx(r.code,{children:"vl-http-error-message"})," ",e.jsx(r.strong,{children:"standalone"})," op de foutpagina, zonder ",e.jsx(r.code,{children:"vl-functional-header"}),`,
`,e.jsx(r.code,{children:"vl-content-header"}),", ",e.jsx(r.code,{children:"vl-header"})," of ",e.jsx(r.code,{children:"vl-footer"})," eromheen."]}),`
`,e.jsxs(r.p,{children:["De motivering is ",e.jsx(r.em,{children:"less = safer"}),`: hoe meer in te laden content er op een foutpagina staat, hoe groter
de kans dat het tonen van die foutpagina zélf opnieuw faalt. Een foutpagina verschijnt per definitie
wanneer er al iets misging - extra header/footer/navigatie die data ophaalt of afhankelijkheden laadt,
vergroot het risico op een tweede fout. Door enkel de error-component te tonen blijft de pagina zo
robuust mogelijk.`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<main>
    <vl-http-error-message error-code="500"></vl-http-error-message>
</main>
`})}),`
`,e.jsx(r.h3,{id:"toegankelijkheid",children:"Toegankelijkheid"}),`
`,e.jsxs(r.p,{children:["De ",e.jsx(r.code,{children:"vl-http-error-message"})," zelf is WCAG 2.1 AA-conform (titel als ",e.jsx(r.code,{children:"<h2>"}),`, alt-tekst op de afbeelding).
Zorg dat de omringende pagina een toegankelijke basis houdt: een `,e.jsx(r.code,{children:"lang"}),"-attribuut op ",e.jsx(r.code,{children:"<html>"}),`, een
zinvolle `,e.jsx(r.code,{children:"<title>"}),", en de error-component binnen een ",e.jsx(r.code,{children:"<main>"}),`-landmark - zoals in het voorbeeld -
zodat assistive technology de inhoud als hoofdinhoud herkent.`]}),`
`,e.jsx(r.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-js",children:`import { VlHttpErrorMessage } from '@domg-wc/components/block';
`})}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<vl-http-error-message></vl-http-error-message>
`})}),`
`,e.jsx(j,{of:n}),`
`,e.jsx(r.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(G,{of:n}),`
`,e.jsx(r.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsxs(r.p,{children:["Het gebruik van ",e.jsx(r.code,{children:"vl-http-400-message"}),` en andere specifieke http error messages is deprecated.
Deze kunnen met de `,e.jsx(r.code,{children:"http-error-message"})," gecreëerd worden d.m.v. het ",e.jsx(r.code,{children:"error-code"})," attribuut."]}),`
`,e.jsx(r.h3,{id:"400-error",children:"400 error"}),`
`,e.jsx(j,{of:l})]})}function O(o={}){const{wrapper:r}={...N(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(H,{...o})}):H(o)}function U(o,r){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}P([_]);const W={id:"components-block-http-error-message",title:"Components - Block/http-error-message",tags:["autodocs"],args:a,argTypes:B,parameters:{docs:{page:O}}},t=V(a,({title:o,image:r,alt:A,errorCode:k,textSlot:R,actionsSlot:D})=>z`
        <vl-http-error-message title=${o} image=${r} image-alt=${A} error-code=${k}>
            ${L(R)} ${L(D)}
        </vl-http-error-message>
    `),n=t.bind({});n.storyName="vl-http-error-message - default";n.args={title:"Niets gevonden hiervoor.",image:"https://cdn.omgeving.vlaanderen.be/http-error-message-assets/LATEST/img/unexpected-error.svg",alt:"Niets gevonden",textSlot:'<p slot="text">Sorry, er liep iets onverwachts mis.</p>',actionsSlot:`<div slot="actions">
                    <vl-button cta-link="#">Opnieuw opstarten</vl-button>
                  </div>`};const l=t.bind({});l.storyName="vl-http-error-message - 400";l.args={errorCode:"400"};const g=t.bind({});g.storyName="vl-http-error-message - 401";g.args={errorCode:"401"};const m=t.bind({});m.storyName="vl-http-error-message - 403";m.args={errorCode:"403"};const p=t.bind({});p.storyName="vl-http-error-message - 404";p.args={errorCode:"404"};const d=t.bind({});d.storyName="vl-http-error-message - 405";d.args={errorCode:"405"};const c=t.bind({});c.storyName="vl-http-error-message - 408";c.args={errorCode:"408"};const h=t.bind({});h.storyName="vl-http-error-message - 410";h.args={errorCode:"410"};const u=t.bind({});u.storyName="vl-http-error-message - 411";u.args={errorCode:"411"};const M=t.bind({});M.storyName="vl-http-error-message - 412";M.args={errorCode:"412"};const S=t.bind({});S.storyName="vl-http-error-message - 413";S.args={errorCode:"413"};const $=t.bind({});$.storyName="vl-http-error-message - 414";$.args={errorCode:"414"};const f=t.bind({});f.storyName="vl-http-error-message - 415";f.args={errorCode:"415"};const v=t.bind({});v.storyName="vl-http-error-message - 500";v.args={errorCode:"500"};const x=t.bind({});x.storyName="vl-http-error-message - 501";x.args={errorCode:"501"};const E=t.bind({});E.storyName="vl-http-error-message - 502";E.args={errorCode:"502"};const y=t.bind({});y.storyName="vl-http-error-message - 503";y.args={errorCode:"503"};const T=t.bind({});T.storyName="vl-http-error-message - 504";T.args={errorCode:"504"};const C=t.bind({});C.storyName="vl-http-error-message - 505";C.args={errorCode:"505"};const b=t.bind({});b.storyName="vl-http-error-message - 506";b.args={errorCode:"506"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`story(httpErrorMessageArgs, ({
  title,
  image,
  alt,
  errorCode,
  textSlot,
  actionsSlot
}: typeof httpErrorMessageArgs) => html\`
        <vl-http-error-message title=\${title} image=\${image} image-alt=\${alt} error-code=\${errorCode}>
            \${unsafeHTML(textSlot)} \${unsafeHTML(actionsSlot)}
        </vl-http-error-message>
    \`)`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`story(httpErrorMessageArgs, ({
  title,
  image,
  alt,
  errorCode,
  textSlot,
  actionsSlot
}: typeof httpErrorMessageArgs) => html\`
        <vl-http-error-message title=\${title} image=\${image} image-alt=\${alt} error-code=\${errorCode}>
            \${unsafeHTML(textSlot)} \${unsafeHTML(actionsSlot)}
        </vl-http-error-message>
    \`)`,...l.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`story(httpErrorMessageArgs, ({
  title,
  image,
  alt,
  errorCode,
  textSlot,
  actionsSlot
}: typeof httpErrorMessageArgs) => html\`
        <vl-http-error-message title=\${title} image=\${image} image-alt=\${alt} error-code=\${errorCode}>
            \${unsafeHTML(textSlot)} \${unsafeHTML(actionsSlot)}
        </vl-http-error-message>
    \`)`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`story(httpErrorMessageArgs, ({
  title,
  image,
  alt,
  errorCode,
  textSlot,
  actionsSlot
}: typeof httpErrorMessageArgs) => html\`
        <vl-http-error-message title=\${title} image=\${image} image-alt=\${alt} error-code=\${errorCode}>
            \${unsafeHTML(textSlot)} \${unsafeHTML(actionsSlot)}
        </vl-http-error-message>
    \`)`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`story(httpErrorMessageArgs, ({
  title,
  image,
  alt,
  errorCode,
  textSlot,
  actionsSlot
}: typeof httpErrorMessageArgs) => html\`
        <vl-http-error-message title=\${title} image=\${image} image-alt=\${alt} error-code=\${errorCode}>
            \${unsafeHTML(textSlot)} \${unsafeHTML(actionsSlot)}
        </vl-http-error-message>
    \`)`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`story(httpErrorMessageArgs, ({
  title,
  image,
  alt,
  errorCode,
  textSlot,
  actionsSlot
}: typeof httpErrorMessageArgs) => html\`
        <vl-http-error-message title=\${title} image=\${image} image-alt=\${alt} error-code=\${errorCode}>
            \${unsafeHTML(textSlot)} \${unsafeHTML(actionsSlot)}
        </vl-http-error-message>
    \`)`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`story(httpErrorMessageArgs, ({
  title,
  image,
  alt,
  errorCode,
  textSlot,
  actionsSlot
}: typeof httpErrorMessageArgs) => html\`
        <vl-http-error-message title=\${title} image=\${image} image-alt=\${alt} error-code=\${errorCode}>
            \${unsafeHTML(textSlot)} \${unsafeHTML(actionsSlot)}
        </vl-http-error-message>
    \`)`,...c.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`story(httpErrorMessageArgs, ({
  title,
  image,
  alt,
  errorCode,
  textSlot,
  actionsSlot
}: typeof httpErrorMessageArgs) => html\`
        <vl-http-error-message title=\${title} image=\${image} image-alt=\${alt} error-code=\${errorCode}>
            \${unsafeHTML(textSlot)} \${unsafeHTML(actionsSlot)}
        </vl-http-error-message>
    \`)`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`story(httpErrorMessageArgs, ({
  title,
  image,
  alt,
  errorCode,
  textSlot,
  actionsSlot
}: typeof httpErrorMessageArgs) => html\`
        <vl-http-error-message title=\${title} image=\${image} image-alt=\${alt} error-code=\${errorCode}>
            \${unsafeHTML(textSlot)} \${unsafeHTML(actionsSlot)}
        </vl-http-error-message>
    \`)`,...u.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`story(httpErrorMessageArgs, ({
  title,
  image,
  alt,
  errorCode,
  textSlot,
  actionsSlot
}: typeof httpErrorMessageArgs) => html\`
        <vl-http-error-message title=\${title} image=\${image} image-alt=\${alt} error-code=\${errorCode}>
            \${unsafeHTML(textSlot)} \${unsafeHTML(actionsSlot)}
        </vl-http-error-message>
    \`)`,...M.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`story(httpErrorMessageArgs, ({
  title,
  image,
  alt,
  errorCode,
  textSlot,
  actionsSlot
}: typeof httpErrorMessageArgs) => html\`
        <vl-http-error-message title=\${title} image=\${image} image-alt=\${alt} error-code=\${errorCode}>
            \${unsafeHTML(textSlot)} \${unsafeHTML(actionsSlot)}
        </vl-http-error-message>
    \`)`,...S.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`story(httpErrorMessageArgs, ({
  title,
  image,
  alt,
  errorCode,
  textSlot,
  actionsSlot
}: typeof httpErrorMessageArgs) => html\`
        <vl-http-error-message title=\${title} image=\${image} image-alt=\${alt} error-code=\${errorCode}>
            \${unsafeHTML(textSlot)} \${unsafeHTML(actionsSlot)}
        </vl-http-error-message>
    \`)`,...$.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`story(httpErrorMessageArgs, ({
  title,
  image,
  alt,
  errorCode,
  textSlot,
  actionsSlot
}: typeof httpErrorMessageArgs) => html\`
        <vl-http-error-message title=\${title} image=\${image} image-alt=\${alt} error-code=\${errorCode}>
            \${unsafeHTML(textSlot)} \${unsafeHTML(actionsSlot)}
        </vl-http-error-message>
    \`)`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`story(httpErrorMessageArgs, ({
  title,
  image,
  alt,
  errorCode,
  textSlot,
  actionsSlot
}: typeof httpErrorMessageArgs) => html\`
        <vl-http-error-message title=\${title} image=\${image} image-alt=\${alt} error-code=\${errorCode}>
            \${unsafeHTML(textSlot)} \${unsafeHTML(actionsSlot)}
        </vl-http-error-message>
    \`)`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`story(httpErrorMessageArgs, ({
  title,
  image,
  alt,
  errorCode,
  textSlot,
  actionsSlot
}: typeof httpErrorMessageArgs) => html\`
        <vl-http-error-message title=\${title} image=\${image} image-alt=\${alt} error-code=\${errorCode}>
            \${unsafeHTML(textSlot)} \${unsafeHTML(actionsSlot)}
        </vl-http-error-message>
    \`)`,...x.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`story(httpErrorMessageArgs, ({
  title,
  image,
  alt,
  errorCode,
  textSlot,
  actionsSlot
}: typeof httpErrorMessageArgs) => html\`
        <vl-http-error-message title=\${title} image=\${image} image-alt=\${alt} error-code=\${errorCode}>
            \${unsafeHTML(textSlot)} \${unsafeHTML(actionsSlot)}
        </vl-http-error-message>
    \`)`,...E.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`story(httpErrorMessageArgs, ({
  title,
  image,
  alt,
  errorCode,
  textSlot,
  actionsSlot
}: typeof httpErrorMessageArgs) => html\`
        <vl-http-error-message title=\${title} image=\${image} image-alt=\${alt} error-code=\${errorCode}>
            \${unsafeHTML(textSlot)} \${unsafeHTML(actionsSlot)}
        </vl-http-error-message>
    \`)`,...y.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`story(httpErrorMessageArgs, ({
  title,
  image,
  alt,
  errorCode,
  textSlot,
  actionsSlot
}: typeof httpErrorMessageArgs) => html\`
        <vl-http-error-message title=\${title} image=\${image} image-alt=\${alt} error-code=\${errorCode}>
            \${unsafeHTML(textSlot)} \${unsafeHTML(actionsSlot)}
        </vl-http-error-message>
    \`)`,...T.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`story(httpErrorMessageArgs, ({
  title,
  image,
  alt,
  errorCode,
  textSlot,
  actionsSlot
}: typeof httpErrorMessageArgs) => html\`
        <vl-http-error-message title=\${title} image=\${image} image-alt=\${alt} error-code=\${errorCode}>
            \${unsafeHTML(textSlot)} \${unsafeHTML(actionsSlot)}
        </vl-http-error-message>
    \`)`,...C.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`story(httpErrorMessageArgs, ({
  title,
  image,
  alt,
  errorCode,
  textSlot,
  actionsSlot
}: typeof httpErrorMessageArgs) => html\`
        <vl-http-error-message title=\${title} image=\${image} image-alt=\${alt} error-code=\${errorCode}>
            \${unsafeHTML(textSlot)} \${unsafeHTML(actionsSlot)}
        </vl-http-error-message>
    \`)`,...b.parameters?.docs?.source}}};const Z=["httpErrorMessageDefault","httpErrorMessage400","httpErrorMessage401","httpErrorMessage403","httpErrorMessage404","httpErrorMessage405","httpErrorMessage408","httpErrorMessage410","httpErrorMessage411","httpErrorMessage412","httpErrorMessage413","httpErrorMessage414","httpErrorMessage415","httpErrorMessage500","httpErrorMessage501","httpErrorMessage502","httpErrorMessage503","httpErrorMessage504","httpErrorMessage505","httpErrorMessage506"];export{Z as __namedExportsOrder,W as default,l as httpErrorMessage400,g as httpErrorMessage401,m as httpErrorMessage403,p as httpErrorMessage404,d as httpErrorMessage405,c as httpErrorMessage408,h as httpErrorMessage410,u as httpErrorMessage411,M as httpErrorMessage412,S as httpErrorMessage413,$ as httpErrorMessage414,f as httpErrorMessage415,v as httpErrorMessage500,x as httpErrorMessage501,E as httpErrorMessage502,y as httpErrorMessage503,T as httpErrorMessage504,C as httpErrorMessage505,b as httpErrorMessage506,n as httpErrorMessageDefault};
