import{Z as r,_ as o,u as p,j as e,C as d,b8 as f,S,s as j,x}from"./iframe-B0laZkYe.js";import{o as s}from"./unsafe-html-C_AhUnex.js";import{p as T}from"./vl-privacy.component-ChT9ghUq.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-side-navigation.component-BoIdkX-M.js";import"./vl-side-navigation-layout.component-Dz6BvOOc.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,t={...T,onClickBack:L("vl-click-back")},B={date:{name:"date",description:"De datum waarop de pagina werd uitgegeven.",table:{type:{summary:o.STRING},category:r.ATTRIBUTES,defaultValue:{summary:t.date}}},disableBackLink:{name:"disable-back-link",description:"Zet de terug-link uit.",table:{type:{summary:o.BOOLEAN},category:r.ATTRIBUTES,defaultValue:{summary:String(t.disableBackLink)}}},hideBackLink:{name:"hide-back-link",description:"Verwijdert de terug-link.",table:{type:{summary:o.BOOLEAN},category:r.ATTRIBUTES,defaultValue:{summary:String(t.hideBackLink)}}},version:{name:"version",description:"De pagina versie.",table:{type:{summary:o.STRING},category:r.ATTRIBUTES,defaultValue:{summary:t.version}}},onClickBack:{name:"vl-click-back",description:"Afgevuurd na het klikken op de terug-link.",table:{type:{summary:"-"},category:r.EVENTS}},headerSlot:{name:"header",description:"Hiermee kan je de standaard functional header vervangen door een header naar keuze.",table:{type:{summary:o.HTML},category:r.SLOTS,defaultValue:{summary:t.headerSlot}}},versionSlot:{name:"version",description:"Hiermee kan je de standaard versie sectie vervangen door een sectie naar keuze.",table:{type:{summary:o.HTML},category:r.SLOTS,defaultValue:{summary:t.versionSlot}}},contentSlot:{name:"content",description:"Hiermee kan je de standaard content sectie vervangen door een sectie naar keuze.",table:{type:{summary:o.HTML},category:r.SLOTS,defaultValue:{summary:t.contentSlot}}},bottomSlot:{name:"bottom",description:"Hiermee kan je de standaard footer sectie vervangen door een sectie naar keuze.",table:{type:{summary:o.HTML},category:r.SLOTS,defaultValue:{summary:t.bottomSlot}}}},$=`import { html } from 'lit';
import { VlFunctionalHeaderComponent } from '../../../block/functional-header';

export const privacyHeaderElements = () => [VlFunctionalHeaderComponent];

export const header = ({ disableBackLink, hideBackLink }: { disableBackLink: boolean; hideBackLink: boolean }) => html\`
    <vl-functional-header
        title-label="Departement Omgeving"
        sub-title="Privacy"
        link="https://omgeving.vlaanderen.be"
        ?disable-back-link=\${disableBackLink}
        ?hide-back-link=\${hideBackLink}
        skip-to-content-id="#main-content"
    ></vl-functional-header>
\`;
`;function m(a){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...p(),...a.components},{FluxComponentMetaData:l}=n;return l||C("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"privacy",children:"Privacy"}),`
`,e.jsx(l,{id:"components-compliance-privacy"}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsx(n.p,{children:"Privacy pagina."}),`
`,e.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { VlPrivacy } from '@domg-wc/components/compliance';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-privacy></vl-privacy>
`})}),`
`,e.jsx(d,{of:i}),`
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(f,{of:i}),`
`,e.jsx(n.h2,{id:"header-slot",children:"Header Slot"}),`
`,e.jsxs(n.p,{children:["Standaard wordt deze template gebruikt om de ",e.jsx(n.code,{children:"functional-header"})," te bepalen in dit component."]}),`
`,e.jsx(S,{code:$,language:"ts",dark:!0}),`
`,e.jsxs(n.p,{children:["Als je wijzigingen wil aanbrengen in de functional header, kan je de standaard ",e.jsx(n.code,{children:"vl-functional-header"}),` vervangen door
een ander, eventueel aangepaste header element.`]}),`
`,e.jsx(n.p,{children:"Je kan dit bijvoorbeeld vervangen door:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["een ",e.jsx(n.a,{href:"/docs/components-block-content-header--content-header-default",children:"vl-content-header"})]}),`
`,e.jsxs(n.li,{children:["of een ",e.jsx(n.a,{href:"/docs/components-block-functional-header--functional-header-default",children:"vl-functional-header"})," met andere opties dan de standaard ",e.jsx(n.code,{children:"functional-header"})," van dit component."]}),`
`]}),`
`,e.jsxs(n.p,{children:["In het voorbeeld hieronder kan je zien hoe je voor de ",e.jsx(n.code,{children:"vl-functional-header"})," bij de teruglink (",e.jsx(n.code,{children:"back"}),`) "Start"
als label kan geven in plaats van "Terug".`]}),`
`,e.jsx(d,{of:c})]})}function H(a={}){const{wrapper:n}={...p(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(m,{...a})}):m(a)}function C(a,n){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}const _={id:"components-compliance-privacy",title:"Components - Compliance/privacy",tags:["autodocs"],args:t,argTypes:B,parameters:{layout:"fullscreen",docs:{page:H}}},u=j(t,({date:a,disableBackLink:n,hideBackLink:l,version:k,onClickBack:v,headerSlot:h,versionSlot:y,contentSlot:b,bottomSlot:g})=>x`
            <vl-privacy
                date=${a}
                ?disable-back-link=${n}
                ?hide-back-link=${l}
                version=${k}
                @vl-click-back=${v}
            >
                ${s(h)} ${s(y)} ${s(b)}
                ${s(g)}
            </vl-privacy>
        `),i=u.bind({});i.storyName="vl-privacy - default";const c=u.bind({});c.storyName="vl-privacy - header slot";c.args={headerSlot:`
    <vl-functional-header
        slot="header"
        title="Departement Omgeving"
        sub-title="Privacy"
        link="https://omgeving.vlaanderen.be"
        back="Start"
        skip-to-content-id="#main-content"
    ></vl-functional-header>
`};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`story(privacyArgs, ({
  date,
  disableBackLink,
  hideBackLink,
  version,
  onClickBack,
  headerSlot,
  versionSlot,
  contentSlot,
  bottomSlot
}) => html\`
            <vl-privacy
                date=\${date}
                ?disable-back-link=\${disableBackLink}
                ?hide-back-link=\${hideBackLink}
                version=\${version}
                @vl-click-back=\${onClickBack}
            >
                \${unsafeHTML(headerSlot)} \${unsafeHTML(versionSlot)} \${unsafeHTML(contentSlot)}
                \${unsafeHTML(bottomSlot)}
            </vl-privacy>
        \`)`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`story(privacyArgs, ({
  date,
  disableBackLink,
  hideBackLink,
  version,
  onClickBack,
  headerSlot,
  versionSlot,
  contentSlot,
  bottomSlot
}) => html\`
            <vl-privacy
                date=\${date}
                ?disable-back-link=\${disableBackLink}
                ?hide-back-link=\${hideBackLink}
                version=\${version}
                @vl-click-back=\${onClickBack}
            >
                \${unsafeHTML(headerSlot)} \${unsafeHTML(versionSlot)} \${unsafeHTML(contentSlot)}
                \${unsafeHTML(bottomSlot)}
            </vl-privacy>
        \`)`,...c.parameters?.docs?.source}}};const P=["PrivacyDefault","PrivacyHeaderSlot"];export{i as PrivacyDefault,c as PrivacyHeaderSlot,P as __namedExportsOrder,_ as default};
