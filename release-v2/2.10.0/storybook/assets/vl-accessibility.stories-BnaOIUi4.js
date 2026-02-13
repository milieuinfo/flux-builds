import{R as a,U as l,Z as b,Y as v,u as y,j as e,C as h,bh as x,S as B,s as O,x as C}from"./iframe-FlvNZLqI.js";import{o as D}from"./unsafe-html-DF5XElkr.js";import"./vl-accessibility.component-Cj9UtMZl.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-side-navigation.component-Daoa2h3U.js";import"./vl-side-navigation-layout.component-CNRZTDKB.js";const m={FULLY_COMPLIANT:"FULLY_COMPLIANT",PARTIALLY_COMPLIANT:"PARTIALLY_COMPLIANT",NOT_COMPLIANT:"NOT_COMPLIANT"},d={EXPERT_EVALUATED:"EXPERT_EVALUATED",SELF_EVALUATED:"SELF_EVALUATED",NOT_EVALUATED:"NOT_EVALUATED"},{action:N}=__STORYBOOK_MODULE_ACTIONS__,n={application:"deze applicatie",compliance:`${m.PARTIALLY_COMPLIANT}`,date:"20 juli 2021",dateModified:"20 juli 2021",disableBackLink:!1,hideBackLink:!1,evaluation:`${d.NOT_EVALUATED}`,version:"1.0.0",limitations:null,onClickBack:N("vl-click-back"),headerSlot:""},M={application:{name:"application",description:"De applicatie waar de verklaring over gaat.",table:{type:{summary:l.STRING},category:a.ATTRIBUTES,defaultValue:{summary:n.application}}},compliance:{name:"compliance",description:"De nalevingsstatus van de verklaring.",control:{type:v.SELECT},options:Object.values(m),table:{type:b(Object.values(m)),category:a.ATTRIBUTES,defaultValue:{summary:n.compliance}}},date:{name:"date",description:"De aanmaakdatum van de verklaring.",table:{type:{summary:l.STRING},category:a.ATTRIBUTES,defaultValue:{summary:n.date}}},dateModified:{name:"date-modified",description:"De datum van de laatste wijziging van de verklaring.",table:{type:{summary:l.STRING},category:a.ATTRIBUTES,defaultValue:{summary:n.dateModified}}},disableBackLink:{name:"disable-back-link",description:"Zet de terug-link uit.",table:{type:{summary:l.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(n.disableBackLink)}}},hideBackLink:{name:"hide-back-link",description:"Verwijdert de terug-link.",table:{type:{summary:l.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(n.hideBackLink)}}},evaluation:{name:"evaluation",description:"De evaluatiestatus van de verklaring.",control:{type:v.SELECT},options:Object.values(d),table:{type:{summary:b(Object.values(d))},category:a.ATTRIBUTES,defaultValue:{summary:n.evaluation}}},version:{name:"version",description:"De huidige versie van de verklaring.",table:{type:{summary:l.STRING},category:a.ATTRIBUTES,defaultValue:{summary:n.version}}},limitations:{name:"limitations",description:"Property om limitaties mee te geven aan de verklaring. Het object bevat 3 optionele properties. De `withTiming` limitaties vallen onder 'Niet-naleving van het bestuursdecreet'. Dit zijn tijdelijke limitaties. `withoutTiming` limitaties vallen onder 'Onevenredige last'. Dit zijn permanente limitaties. De `outsideApplicableLaw` limitaties vallen onder 'De inhoud valt buiten de werkingssfeer van de toepasselijke wetgeving'. Dit zijn limitaties die buiten de werkingssfeer van de toepasselijke wetgeving vallen.",table:{type:{summary:"object"},category:a.PROPERTIES}},onClickBack:{name:"vl-click-back",description:"Afgevuurd na het klikken op de terug-link.",table:{type:{summary:"-"},category:a.EVENTS}},headerSlot:{name:"header",description:"Hiermee kan je de standaard functional header vervangen door een header naar keuze.",table:{type:{summary:l.HTML},category:a.SLOTS,defaultValue:{summary:n.headerSlot}}}},_=`import { html } from 'lit';
import { VlFunctionalHeaderComponent } from '../../../block/functional-header';
import type { AccessibilityProperties } from '../vl-accessibility.model';

export type HeaderProps = Pick<AccessibilityProperties, 'disableBackLink' | 'hideBackLink'>;

export const headerElements = () => [VlFunctionalHeaderComponent];

export const header = ({ disableBackLink, hideBackLink }: HeaderProps) => html\`
    <vl-functional-header
        title="Departement Omgeving"
        sub-title="Toegankelijkheid en gebruiksvoorwaarden"
        link="https://omgeving.vlaanderen.be"
        ?disable-back-link=\${disableBackLink}
        ?hide-back-link=\${hideBackLink}
        skip-to-content-id="#main-content"
    ></vl-functional-header>
\`;
`;function g(t){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...y(),...t.components},{FluxComponentMetaData:p}=i;return p||w("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(i.h1,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(p,{id:"components-compliance-accessibility"}),`
`,e.jsx(i.h2,{id:"doel",children:"Doel"}),`
`,e.jsx(i.p,{children:"Toegankelijkheidsverklaring pagina."}),`
`,e.jsx(i.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-js",children:`import { VlAccessibility } from '@domg-wc/components/compliance';
`})}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<vl-accessibility></vl-accessibility>
`})}),`
`,e.jsx(h,{of:o}),`
`,e.jsx(i.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(x,{of:o}),`
`,e.jsx(i.h2,{id:"header-slot",children:"Header Slot"}),`
`,e.jsxs(i.p,{children:["Standaard wordt deze template gebruikt om de ",e.jsx(i.code,{children:"functional-header"})," te bepalen in deze component."]}),`
`,e.jsx(B,{code:_,language:"ts",dark:!0}),`
`,e.jsxs(i.p,{children:["Als je wijzigingen wil aanbrengen in de functional header, kan je de standaard ",e.jsx(i.code,{children:"vl-functional-header"}),` vervangen door een
ander, eventueel aangepaste header element.`]}),`
`,e.jsx(i.p,{children:"Je kan dit bijvoorbeeld vervangen door:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["een ",e.jsx(i.a,{href:"/docs/components-block-content-header--content-header-default",children:"vl-content-header"})]}),`
`,e.jsxs(i.li,{children:["of een ",e.jsx(i.a,{href:"/docs/components-block-functional-header--functional-header-default",children:"vl-functional-header"}),` met andere opties dan de
standaard `,e.jsx(i.code,{children:"functional-header"})," van dit component."]}),`
`]}),`
`,e.jsxs(i.p,{children:["In het voorbeeld hieronder kan je zien hoe je voor de ",e.jsx(i.code,{children:"vl-functional-header"})," bij de teruglink (",e.jsx(i.code,{children:"back"}),`) "Start"
als label kan geven in plaats van "Terug".`]}),`
`,e.jsx(h,{of:s}),`
`,e.jsx(i.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(i.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-accessibility--default",rel:"nofollow",children:"Legacy Storybook - Accessibility"})}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlAccessibility.html",rel:"nofollow",children:"Legacy Documentatie - Accessibility"})}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-accessibility.html",rel:"nofollow",children:"Legacy Demo - Accessibility"})})]})}function I(t={}){const{wrapper:i}={...y(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(g,{...t})}):g(t)}function w(t,i){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const F={id:"components-compliance-accessibility",title:"Components - Compliance/accessibility",tags:["autodocs"],args:n,argTypes:M,parameters:{layout:"fullscreen",docs:{page:I}}},u=O(n,({application:t,compliance:i,date:p,dateModified:T,disableBackLink:f,hideBackLink:L,evaluation:A,version:j,limitations:E,onClickBack:S,headerSlot:$})=>C`
        <vl-accessibility
            application=${t}
            compliance=${i}
            date=${p}
            date-modified=${T}
            ?disable-back-link=${f}
            ?hide-back-link=${L}
            evaluation=${A}
            version=${j}
            .limitations=${E}
            @vl-click-back=${S}
        >
            ${D($)}
        </vl-accessibility>
    `),k={withTiming:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],withoutTiming:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],outsideApplicableLaw:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]},o=u.bind({});o.storyName="vl-accessibility - default";o.args={evaluation:d.NOT_EVALUATED};const c=u.bind({});c.storyName="vl-accessibility - self evaluated";c.args={evaluation:d.SELF_EVALUATED,compliance:m.NOT_COMPLIANT,limitations:k};const r=u.bind({});r.storyName="vl-accessibility - expert evaluated";r.args={evaluation:d.EXPERT_EVALUATED,compliance:m.NOT_COMPLIANT,limitations:k};const s=u.bind({});s.storyName="vl-accessibility - header slot";s.args={limitations:k,headerSlot:`
    <vl-functional-header
        slot="header"
        title="Departement Omgeving & Andere"
        sub-title="Toegankelijkheid en gebruiksvoorwaarden "
        link="https://omgeving.vlaanderen.be"
        back="Start"
        skip-to-content-id="#main-content"
    ></vl-functional-header>`};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`story(accessibilityArgs, ({
  application,
  compliance,
  date,
  dateModified,
  disableBackLink,
  hideBackLink,
  evaluation,
  version,
  limitations,
  onClickBack,
  headerSlot
}) => html\`
        <vl-accessibility
            application=\${application}
            compliance=\${compliance}
            date=\${date}
            date-modified=\${dateModified}
            ?disable-back-link=\${disableBackLink}
            ?hide-back-link=\${hideBackLink}
            evaluation=\${evaluation}
            version=\${version}
            .limitations=\${limitations}
            @vl-click-back=\${onClickBack}
        >
            \${unsafeHTML(headerSlot)}
        </vl-accessibility>
    \`)`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`story(accessibilityArgs, ({
  application,
  compliance,
  date,
  dateModified,
  disableBackLink,
  hideBackLink,
  evaluation,
  version,
  limitations,
  onClickBack,
  headerSlot
}) => html\`
        <vl-accessibility
            application=\${application}
            compliance=\${compliance}
            date=\${date}
            date-modified=\${dateModified}
            ?disable-back-link=\${disableBackLink}
            ?hide-back-link=\${hideBackLink}
            evaluation=\${evaluation}
            version=\${version}
            .limitations=\${limitations}
            @vl-click-back=\${onClickBack}
        >
            \${unsafeHTML(headerSlot)}
        </vl-accessibility>
    \`)`,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(accessibilityArgs, ({
  application,
  compliance,
  date,
  dateModified,
  disableBackLink,
  hideBackLink,
  evaluation,
  version,
  limitations,
  onClickBack,
  headerSlot
}) => html\`
        <vl-accessibility
            application=\${application}
            compliance=\${compliance}
            date=\${date}
            date-modified=\${dateModified}
            ?disable-back-link=\${disableBackLink}
            ?hide-back-link=\${hideBackLink}
            evaluation=\${evaluation}
            version=\${version}
            .limitations=\${limitations}
            @vl-click-back=\${onClickBack}
        >
            \${unsafeHTML(headerSlot)}
        </vl-accessibility>
    \`)`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story(accessibilityArgs, ({
  application,
  compliance,
  date,
  dateModified,
  disableBackLink,
  hideBackLink,
  evaluation,
  version,
  limitations,
  onClickBack,
  headerSlot
}) => html\`
        <vl-accessibility
            application=\${application}
            compliance=\${compliance}
            date=\${date}
            date-modified=\${dateModified}
            ?disable-back-link=\${disableBackLink}
            ?hide-back-link=\${hideBackLink}
            evaluation=\${evaluation}
            version=\${version}
            .limitations=\${limitations}
            @vl-click-back=\${onClickBack}
        >
            \${unsafeHTML(headerSlot)}
        </vl-accessibility>
    \`)`,...s.parameters?.docs?.source}}};const Y=["AccessibilityDefault","AccessibilitySelfEvaluated","AccessibilityExpertEvaluated","AccessibilityHeaderSlot"];export{o as AccessibilityDefault,r as AccessibilityExpertEvaluated,s as AccessibilityHeaderSlot,c as AccessibilitySelfEvaluated,Y as __namedExportsOrder,F as default};
