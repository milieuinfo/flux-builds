import{Y as i,Z as o,U as I,W as w,u as j,j as e,C as L,bb as G,s as V,x as B,r as P,d as U}from"./iframe-aAtdr__L.js";import{o as H}from"./unsafe-html-Cn5duKT2.js";import"./preload-helper-D9Z9MdNV.js";const a={...w,title:"",image:"",alt:"",errorCode:"",textSlot:"",actionsSlot:""},_={...I,title:{name:"title",type:{name:o.STRING,required:!1},description:"Past de title van de error message aan.",table:{type:{summary:o.STRING},defaultValue:{summary:a.title},category:i.ATTRIBUTES}},image:{name:"image",type:{name:o.STRING,required:!1},description:"De URL voor de afbeelding die weergegeven moet worden.",table:{type:{summary:o.STRING},defaultValue:{summary:a.image},category:i.ATTRIBUTES}},alt:{name:"image-alt",type:{name:o.STRING,required:!1},description:"Past de alternatieve tekst van de afbeelding aan.",table:{type:{summary:o.STRING},defaultValue:{summary:a.alt},category:i.ATTRIBUTES}},errorCode:{name:"error-code",type:{name:o.STRING,required:!1},description:"Geeft de default titel, afbeelding, tekst en actie voor een specifieke error code weer.",table:{type:{summary:o.STRING},defaultValue:{summary:a.errorCode},category:i.ATTRIBUTES}},textSlot:{name:"text",description:"Past de omschrijvende tekst onder de titel aan. Dit slot is niet reactief",table:{type:{summary:o.HTML},category:i.SLOTS,defaultValue:{summary:a.textSlot}}},actionsSlot:{name:"actions",description:"Past de acties aan. Dit slot is niet reactief",table:{type:{summary:o.HTML},category:i.SLOTS,defaultValue:{summary:a.actionsSlot}}}};function N(s){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...j(),...s.components},{FluxComponentMetaData:b}=r;return b||q("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"http-error-message",children:"HTTP Error Message"}),`
`,e.jsx(b,{id:"components-block-http-error-message"}),`
`,e.jsx(r.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(r.p,{children:["Gebruik de ",e.jsx(r.code,{children:"http-error-message"})," component om een error boodschap aan de gebruiker te tonen."]}),`
`,e.jsx(r.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-js",children:`import { VlHttpErrorMessage } from '@domg-wc/components/block';
`})}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<vl-http-error-message></vl-http-error-message>
`})}),`
`,e.jsx(L,{of:n}),`
`,e.jsx(r.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(G,{of:n}),`
`,e.jsx(r.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsxs(r.p,{children:["Het gebruik van ",e.jsx(r.code,{children:"vl-http-400-message"}),` en andere specifieke http error messages is deprecated.
Deze kunnen met de `,e.jsx(r.code,{children:"http-error-message"})," gecreëerd worden d.m.v. het ",e.jsx(r.code,{children:"error-code"})," attribuut."]}),`
`,e.jsx(r.h3,{id:"400-error",children:"400 error"}),`
`,e.jsx(L,{of:l}),`
`,e.jsx(r.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(r.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,e.jsx(r.p,{children:e.jsx(r.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-http-error-message--default",rel:"nofollow",children:"Legacy Storybook - Http Error Message"})})]})}function O(s={}){const{wrapper:r}={...j(),...s.components};return r?e.jsx(r,{...s,children:e.jsx(N,{...s})}):N(s)}function q(s,r){throw new Error("Expected component `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}P([U]);const Y={id:"components-block-http-error-message",title:"Components - Block/http-error-message",tags:["autodocs"],args:a,argTypes:_,parameters:{docs:{page:O}}},t=V(a,({title:s,image:r,alt:b,errorCode:k,textSlot:R,actionsSlot:D})=>B`
        <vl-http-error-message title=${s} image=${r} image-alt=${b} error-code=${k}>
            ${H(R)} ${H(D)}
        </vl-http-error-message>
    `),n=t.bind({});n.storyName="vl-http-error-message - default";n.args={title:"Niets gevonden hiervoor.",image:"https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg",alt:"Niets gevonden",textSlot:'<p slot="text">Sorry, er liep iets onverwachts mis.</p>',actionsSlot:`<div slot="actions">
                    <vl-button cta-link="#">Opnieuw opstarten</vl-button>
                  </div>`};const l=t.bind({});l.storyName="vl-http-error-message - 400";l.args={errorCode:"400"};const g=t.bind({});g.storyName="vl-http-error-message - 401";g.args={errorCode:"401"};const m=t.bind({});m.storyName="vl-http-error-message - 403";m.args={errorCode:"403"};const p=t.bind({});p.storyName="vl-http-error-message - 404";p.args={errorCode:"404"};const c=t.bind({});c.storyName="vl-http-error-message - 405";c.args={errorCode:"405"};const d=t.bind({});d.storyName="vl-http-error-message - 408";d.args={errorCode:"408"};const h=t.bind({});h.storyName="vl-http-error-message - 410";h.args={errorCode:"410"};const u=t.bind({});u.storyName="vl-http-error-message - 411";u.args={errorCode:"411"};const M=t.bind({});M.storyName="vl-http-error-message - 412";M.args={errorCode:"412"};const S=t.bind({});S.storyName="vl-http-error-message - 413";S.args={errorCode:"413"};const $=t.bind({});$.storyName="vl-http-error-message - 414";$.args={errorCode:"414"};const f=t.bind({});f.storyName="vl-http-error-message - 415";f.args={errorCode:"415"};const y=t.bind({});y.storyName="vl-http-error-message - 500";y.args={errorCode:"500"};const E=t.bind({});E.storyName="vl-http-error-message - 501";E.args={errorCode:"501"};const v=t.bind({});v.storyName="vl-http-error-message - 502";v.args={errorCode:"502"};const x=t.bind({});x.storyName="vl-http-error-message - 503";x.args={errorCode:"503"};const T=t.bind({});T.storyName="vl-http-error-message - 504";T.args={errorCode:"504"};const C=t.bind({});C.storyName="vl-http-error-message - 505";C.args={errorCode:"505"};const A=t.bind({});A.storyName="vl-http-error-message - 506";A.args={errorCode:"506"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`story(httpErrorMessageArgs, ({
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
    \`)`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`story(httpErrorMessageArgs, ({
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
    \`)`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`story(httpErrorMessageArgs, ({
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
    \`)`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`story(httpErrorMessageArgs, ({
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
    \`)`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`story(httpErrorMessageArgs, ({
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
    \`)`,...y.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`story(httpErrorMessageArgs, ({
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
    \`)`,...E.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`story(httpErrorMessageArgs, ({
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
    \`)`,...x.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`story(httpErrorMessageArgs, ({
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
    \`)`,...C.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`story(httpErrorMessageArgs, ({
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
    \`)`,...A.parameters?.docs?.source}}};const z=["httpErrorMessageDefault","httpErrorMessage400","httpErrorMessage401","httpErrorMessage403","httpErrorMessage404","httpErrorMessage405","httpErrorMessage408","httpErrorMessage410","httpErrorMessage411","httpErrorMessage412","httpErrorMessage413","httpErrorMessage414","httpErrorMessage415","httpErrorMessage500","httpErrorMessage501","httpErrorMessage502","httpErrorMessage503","httpErrorMessage504","httpErrorMessage505","httpErrorMessage506"];export{z as __namedExportsOrder,Y as default,l as httpErrorMessage400,g as httpErrorMessage401,m as httpErrorMessage403,p as httpErrorMessage404,c as httpErrorMessage405,d as httpErrorMessage408,h as httpErrorMessage410,u as httpErrorMessage411,M as httpErrorMessage412,S as httpErrorMessage413,$ as httpErrorMessage414,f as httpErrorMessage415,y as httpErrorMessage500,E as httpErrorMessage501,v as httpErrorMessage502,x as httpErrorMessage503,T as httpErrorMessage504,C as httpErrorMessage505,A as httpErrorMessage506,n as httpErrorMessageDefault};
