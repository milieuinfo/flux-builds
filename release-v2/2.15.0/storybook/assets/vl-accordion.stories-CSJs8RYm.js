import{Z as t,a1 as f,_ as l,a2 as I,W as P,X as V,bM as S,u as $,j as e,C as i,bc as N,s as D,x as R,r as _,bB as U,bI as G}from"./iframe-CsDE-vVI.js";import{o as h}from"./unsafe-html-ogfylwJ3.js";import"./preload-helper-D9Z9MdNV.js";const{action:K}=__STORYBOOK_MODULE_ACTIONS__,o={...V,altBackground:!1,bold:!1,closeToggleText:"",contentPadding:null,disabled:!1,defaultOpen:!1,icon:"",openToggleText:"",toggleText:"",defaultSlot:"",titleSlot:"",subtitleSlot:"",menuSlot:"",headingLevel:"",onToggle:K("vl-on-toggle")},X={...P,altBackground:{name:"alt-background",description:"Toont de accordion met een alternatieve grijze achtergrond.",table:{type:{summary:l.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(o.altBackground)}}},bold:{name:"bold",description:"Beeldt de toggle-text van de accordion af in bold.",table:{type:{summary:l.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(o.bold)}}},closeToggleText:{name:"close-toggle-text",description:"Tekst waarop de gebruiker kan klikken om de accordion te sluiten.<br>Kan niet in combinatie gebruikt worden met:<br>• toggle-text attribuut<br>• title slot",table:{type:{summary:l.STRING},category:t.ATTRIBUTES,defaultValue:{summary:String(o.closeToggleText)}}},contentPadding:{name:"content-padding",description:"De grootte van de padding van de content.<br>Deze padding wordt toegepast op zowel desktop als mobile.",control:{type:f.SELECT},options:[...Object.keys(S)],table:{type:{summary:I(Object.keys(S))},category:t.ATTRIBUTES,defaultValue:{summary:String(o.contentPadding)}}},disabled:{name:"disabled",description:"Schakelt het openen en het sluiten van de accordion uit.",table:{type:{summary:l.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(o.disabled)}}},defaultOpen:{name:"default-open",description:"Indien gezet zal de accordion standaard geopend zijn.<br>Dit attribuut is niet reactief.",table:{type:{summary:l.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(o.defaultOpen)}}},icon:{name:"icon",description:"Icoon dat getoond wordt voor de tekst van de toggle.<br>Dit attribuut is niet reactief.",table:{type:{summary:l.STRING},category:t.ATTRIBUTES,defaultValue:{summary:o.icon}}},openToggleText:{name:"open-toggle-text",description:"Tekst waarop de gebruiker kan klikken om de accordion te openen.<br>Kan niet in combinatie gebruikt worden met:<br>• toggle-text attribuut<br>• title slot",table:{type:{summary:l.STRING},category:t.ATTRIBUTES,defaultValue:{summary:o.openToggleText}}},toggleText:{name:"toggle-text",description:"Tekst waarop de gebruiker kan klikken om de accordion te openen of te sluiten.<br>Kan niet in combinatie gebruikt worden met:<br>• close-toggle-text attribuut<br>• open-toggle-text attribuut<br>• title slot",table:{type:{summary:l.STRING},category:t.ATTRIBUTES,defaultValue:{summary:o.toggleText}}},defaultSlot:{name:"[default]",description:"Element dat getoond en verborgen wordt wanneer de gebruiker de accordion opent of sluit.",table:{type:{summary:l.HTML},category:t.SLOTS,defaultValue:{summary:o.defaultSlot}}},titleSlot:{name:"title",description:"Element waarop de gebruiker kan klikken om de accordion te openen of te sluiten.<br>Kan niet in combinatie gebruikt worden met:<br>Kan niet in combinatie gebruikt worden met:<br>• close-toggle-text attribuut<br>• open-toggle-text attribuut<br>• toggle-text attribuut",table:{type:{summary:l.HTML},category:t.SLOTS,defaultValue:{summary:o.titleSlot}}},subtitleSlot:{name:"subtitle",description:"Subtitel slotelement. Wordt getoond in open en gesloten toestand.",table:{type:{summary:l.HTML},category:t.SLOTS,defaultValue:{summary:o.subtitleSlot}}},menuSlot:{name:"menu",description:"Slotelement om menu item toe te voegen in rechterbovenhoek.",table:{type:{summary:l.HTML},category:t.SLOTS,defaultValue:{summary:o.menuSlot}}},headingLevel:{name:"heading-level",description:"Het heading-level van de titel (h1 t.e.m. h6). Indien niet opgegeven of ongeldig, wordt standaard h3 gebruikt.",control:{type:f.SELECT},options:["1","2","3","4","5","6"],table:{type:{summary:"1 | 2 | 3 | 4 | 5 | 6"},category:t.ATTRIBUTES,defaultValue:{summary:""}}},onToggle:{name:"vl-on-toggle",description:"Afgevuurd bij het openen of sluiten van de accordion.<br>Het event bevat of de accordion geopend of gesloten is.",table:{type:{summary:"{ open: boolean }"},category:t.EVENTS}}};function x(a){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...$(),...a.components},{FluxComponentMetaData:v}=n;return v||W("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"accordion",children:"Accordion"}),`
`,e.jsx(v,{id:"components-block-accordion"}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(n.p,{children:["Gebruik de ",e.jsx(n.code,{children:"accordion"}),` component om informatie te tonen of te verbergen aan de hand van een toggle.
Voor meer informatie over het afbeelden van meerdere accordions zie de
`,e.jsx(n.a,{href:"/docs/components-block-accordion-list--documentatie",children:"accordion-list"})," component."]}),`
`,e.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { VlAccordionComponent } from '@domg-wc/components/block';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-accordion></vl-accordion>
`})}),`
`,e.jsx(i,{of:s}),`
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(N,{of:s}),`
`,e.jsx(n.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(n.h3,{id:"heading",children:"Heading"}),`
`,e.jsxs(n.p,{children:["Je kan een heading (h1-h6) laten renderen in de accordion toggle door gebruik te maken van de ",e.jsx(n.code,{children:"heading-level"})," attribute."]}),`
`,e.jsx(i,{of:r}),`
`,e.jsx(n.h3,{id:"dynamische-toggle",children:"Dynamische toggle"}),`
`,e.jsx(i,{of:g}),`
`,e.jsx(n.h3,{id:"icoon",children:"Icoon"}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(n.h3,{id:"titel-slot",children:"Titel slot"}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(n.h3,{id:"subtitel-slot",children:"Subtitel slot"}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h3,{id:"subtitel-image-slot",children:"Subtitel Image slot"}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h3,{id:"menu-slot",children:"Menu slot"}),`
`,e.jsx(i,{of:b}),`
`,e.jsx(n.h3,{id:"alternatieve-achtergrond",children:"Alternatieve achtergrond"}),`
`,e.jsx(i,{of:T}),`
`,e.jsx(n.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(n.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/componenten/accordion",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Accordion"})})]})}function F(a={}){const{wrapper:n}={...$(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(x,{...a})}):x(a)}function W(a,n){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}_([U,G]);const q={id:"components-block-accordion",title:"Components - Block/accordion",tags:["autodocs"],args:o,argTypes:X,parameters:{docs:{page:F}}},d=D(o,({altBackground:a,bold:n,closeToggleText:v,contentPadding:k,disabled:j,defaultOpen:y,icon:w,openToggleText:L,toggleText:A,defaultSlot:O,titleSlot:H,subtitleSlot:z,menuSlot:M,headingLevel:B,onToggle:E})=>R`
        <vl-accordion
            ?alt-background=${a}
            ?bold=${n}
            content-padding=${k}
            close-toggle-text=${v}
            icon=${w}
            ?disabled=${j}
            ?default-open=${y}
            open-toggle-text=${L}
            toggle-text=${A}
            heading-level=${B}
            @vl-on-toggle=${C=>E(C.detail)}
        >
            ${h(O)}${h(H)}${h(z)}${h(M)}
        </vl-accordion>
    `),s=d.bind({});s.storyName="vl-accordion - default";s.args={toggleText:"Lees meer over de onderwijsdoelstelling",defaultSlot:"<span>Onderwijs helpt jonge mensen en volwassenen om zichzelf te ontwikkelen en hun weg te vinden in onze samenleving. Het hoger onderwijs speelt daarnaast een belangrijke rol in innovatie dankzij het belang van wetenschappelijk onderzoek.</span>"};const r=d.bind({});r.storyName="vl-accordion - heading";r.args={toggleText:"Dit is een heading van ingevouwen inhoud",defaultSlot:"<span>Onderwijs helpt jonge mensen en volwassenen om zichzelf te ontwikkelen en hun weg te vinden in onze samenleving. Het hoger onderwijs speelt daarnaast een belangrijke rol in innovatie dankzij het belang van wetenschappelijk onderzoek.</span>",headingLevel:"3"};const g=d.bind({});g.storyName="vl-accordion - dynamic toggle";g.args={closeToggleText:"Sluit de onderwijsdoelstelling",openToggleText:"Open de onderwijsdoelstelling",defaultSlot:"<span>Onderwijs helpt jonge mensen en volwassenen om zichzelf te ontwikkelen en hun weg te vinden in onze samenleving. Het hoger onderwijs speelt daarnaast een belangrijke rol in innovatie dankzij het belang van wetenschappelijk onderzoek.</span>"};const c=d.bind({});c.storyName="vl-accordion - icon";c.args={toggleText:"Lees meer over de onderwijsdoelstelling",icon:"university",defaultSlot:"<span>Onderwijs helpt jonge mensen en volwassenen om zichzelf te ontwikkelen en hun weg te vinden in onze samenleving. Het hoger onderwijs speelt daarnaast een belangrijke rol in innovatie dankzij het belang van wetenschappelijk onderzoek.</span>"};const u=d.bind({});u.storyName="vl-accordion - title slot";u.args={defaultSlot:"<span>Onderwijs helpt jonge mensen en volwassenen om zichzelf te ontwikkelen en hun weg te vinden in onze samenleving. Het hoger onderwijs speelt daarnaast een belangrijke rol in innovatie dankzij het belang van wetenschappelijk onderzoek.</span>",titleSlot:'<span slot="title">Lees meer over de onderwijsdoelstelling</span>'};const p=d.bind({});p.storyName="vl-accordion - subtitle slot";p.args={defaultSlot:"<span>Onderwijs helpt jonge mensen en volwassenen om zichzelf te ontwikkelen en hun weg te vinden in onze samenleving. Het hoger onderwijs speelt daarnaast een belangrijke rol in innovatie dankzij het belang van wetenschappelijk onderzoek.</span>",titleSlot:'<span slot="title">Lees meer over de onderwijsdoelstelling</span>',subtitleSlot:'<vl-annotation slot="subtitle">Lorem ipsum</vl-annotation>'};const m=d.bind({});m.storyName="vl-accordion - subtitle slot";m.args={defaultSlot:"<span>Onderwijs helpt jonge mensen en volwassenen om zichzelf te ontwikkelen en hun weg te vinden in onze samenleving. Het hoger onderwijs speelt daarnaast een belangrijke rol in innovatie dankzij het belang van wetenschappelijk onderzoek.</span>",titleSlot:'<span slot="title">Lees meer over de onderwijsdoelstelling</span>',subtitleSlot:'<img style="width: 50px" src="cat.jpeg" slot="subtitle"/>'};const b=d.bind({});b.storyName="vl-accordion - menu slot";b.args={defaultSlot:"<span>Onderwijs helpt jonge mensen en volwassenen om zichzelf te ontwikkelen en hun weg te vinden in onze samenleving. Het hoger onderwijs speelt daarnaast een belangrijke rol in innovatie dankzij het belang van wetenschappelijk onderzoek.</span>",titleSlot:'<span slot="title">Lees meer over de onderwijsdoelstelling</span>',subtitleSlot:'<vl-annotation slot="subtitle">Lorem ipsum</vl-annotation>',menuSlot:`<span slot="menu">
                 <vl-button ghost icon="nav-show-more-vertical" id="btn-acties" label="onderwijs-menu"></vl-button>
                 <vl-popover for="btn-acties" placement="bottom-end">
                   <vl-popover-action-list>
                     <vl-popover-action icon="search">Zoeken</vl-popover-action>
                     <vl-popover-action icon="edit">Aanpassen</vl-popover-action>
                     <vl-popover-action icon="bin">Verwijderen</vl-popover-action>
                   </vl-popover-action-list>
                 </vl-popover>
               </span>`};const T=d.bind({});T.storyName="vl-accordion - alt background";T.args={toggleText:"Lees meer over de onderwijsdoelstelling",altBackground:!0,defaultSlot:"<span>Onderwijs helpt jonge mensen en volwassenen om zichzelf te ontwikkelen en hun weg te vinden in onze samenleving. Het hoger onderwijs speelt daarnaast een belangrijke rol in innovatie dankzij het belang van wetenschappelijk onderzoek.</span>"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story(accordionArgs, ({
  altBackground,
  bold,
  closeToggleText,
  contentPadding,
  disabled,
  defaultOpen,
  icon,
  openToggleText,
  toggleText,
  defaultSlot,
  titleSlot,
  subtitleSlot,
  menuSlot,
  headingLevel,
  onToggle
}) => html\`
        <vl-accordion
            ?alt-background=\${altBackground}
            ?bold=\${bold}
            content-padding=\${contentPadding}
            close-toggle-text=\${closeToggleText}
            icon=\${icon}
            ?disabled=\${disabled}
            ?default-open=\${defaultOpen}
            open-toggle-text=\${openToggleText}
            toggle-text=\${toggleText}
            heading-level=\${headingLevel}
            @vl-on-toggle=\${(event: CustomEvent) => onToggle(event.detail)}
        >
            \${unsafeHTML(defaultSlot)}\${unsafeHTML(titleSlot)}\${unsafeHTML(subtitleSlot)}\${unsafeHTML(menuSlot)}
        </vl-accordion>
    \`)`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(accordionArgs, ({
  altBackground,
  bold,
  closeToggleText,
  contentPadding,
  disabled,
  defaultOpen,
  icon,
  openToggleText,
  toggleText,
  defaultSlot,
  titleSlot,
  subtitleSlot,
  menuSlot,
  headingLevel,
  onToggle
}) => html\`
        <vl-accordion
            ?alt-background=\${altBackground}
            ?bold=\${bold}
            content-padding=\${contentPadding}
            close-toggle-text=\${closeToggleText}
            icon=\${icon}
            ?disabled=\${disabled}
            ?default-open=\${defaultOpen}
            open-toggle-text=\${openToggleText}
            toggle-text=\${toggleText}
            heading-level=\${headingLevel}
            @vl-on-toggle=\${(event: CustomEvent) => onToggle(event.detail)}
        >
            \${unsafeHTML(defaultSlot)}\${unsafeHTML(titleSlot)}\${unsafeHTML(subtitleSlot)}\${unsafeHTML(menuSlot)}
        </vl-accordion>
    \`)`,...r.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`story(accordionArgs, ({
  altBackground,
  bold,
  closeToggleText,
  contentPadding,
  disabled,
  defaultOpen,
  icon,
  openToggleText,
  toggleText,
  defaultSlot,
  titleSlot,
  subtitleSlot,
  menuSlot,
  headingLevel,
  onToggle
}) => html\`
        <vl-accordion
            ?alt-background=\${altBackground}
            ?bold=\${bold}
            content-padding=\${contentPadding}
            close-toggle-text=\${closeToggleText}
            icon=\${icon}
            ?disabled=\${disabled}
            ?default-open=\${defaultOpen}
            open-toggle-text=\${openToggleText}
            toggle-text=\${toggleText}
            heading-level=\${headingLevel}
            @vl-on-toggle=\${(event: CustomEvent) => onToggle(event.detail)}
        >
            \${unsafeHTML(defaultSlot)}\${unsafeHTML(titleSlot)}\${unsafeHTML(subtitleSlot)}\${unsafeHTML(menuSlot)}
        </vl-accordion>
    \`)`,...g.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`story(accordionArgs, ({
  altBackground,
  bold,
  closeToggleText,
  contentPadding,
  disabled,
  defaultOpen,
  icon,
  openToggleText,
  toggleText,
  defaultSlot,
  titleSlot,
  subtitleSlot,
  menuSlot,
  headingLevel,
  onToggle
}) => html\`
        <vl-accordion
            ?alt-background=\${altBackground}
            ?bold=\${bold}
            content-padding=\${contentPadding}
            close-toggle-text=\${closeToggleText}
            icon=\${icon}
            ?disabled=\${disabled}
            ?default-open=\${defaultOpen}
            open-toggle-text=\${openToggleText}
            toggle-text=\${toggleText}
            heading-level=\${headingLevel}
            @vl-on-toggle=\${(event: CustomEvent) => onToggle(event.detail)}
        >
            \${unsafeHTML(defaultSlot)}\${unsafeHTML(titleSlot)}\${unsafeHTML(subtitleSlot)}\${unsafeHTML(menuSlot)}
        </vl-accordion>
    \`)`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`story(accordionArgs, ({
  altBackground,
  bold,
  closeToggleText,
  contentPadding,
  disabled,
  defaultOpen,
  icon,
  openToggleText,
  toggleText,
  defaultSlot,
  titleSlot,
  subtitleSlot,
  menuSlot,
  headingLevel,
  onToggle
}) => html\`
        <vl-accordion
            ?alt-background=\${altBackground}
            ?bold=\${bold}
            content-padding=\${contentPadding}
            close-toggle-text=\${closeToggleText}
            icon=\${icon}
            ?disabled=\${disabled}
            ?default-open=\${defaultOpen}
            open-toggle-text=\${openToggleText}
            toggle-text=\${toggleText}
            heading-level=\${headingLevel}
            @vl-on-toggle=\${(event: CustomEvent) => onToggle(event.detail)}
        >
            \${unsafeHTML(defaultSlot)}\${unsafeHTML(titleSlot)}\${unsafeHTML(subtitleSlot)}\${unsafeHTML(menuSlot)}
        </vl-accordion>
    \`)`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`story(accordionArgs, ({
  altBackground,
  bold,
  closeToggleText,
  contentPadding,
  disabled,
  defaultOpen,
  icon,
  openToggleText,
  toggleText,
  defaultSlot,
  titleSlot,
  subtitleSlot,
  menuSlot,
  headingLevel,
  onToggle
}) => html\`
        <vl-accordion
            ?alt-background=\${altBackground}
            ?bold=\${bold}
            content-padding=\${contentPadding}
            close-toggle-text=\${closeToggleText}
            icon=\${icon}
            ?disabled=\${disabled}
            ?default-open=\${defaultOpen}
            open-toggle-text=\${openToggleText}
            toggle-text=\${toggleText}
            heading-level=\${headingLevel}
            @vl-on-toggle=\${(event: CustomEvent) => onToggle(event.detail)}
        >
            \${unsafeHTML(defaultSlot)}\${unsafeHTML(titleSlot)}\${unsafeHTML(subtitleSlot)}\${unsafeHTML(menuSlot)}
        </vl-accordion>
    \`)`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`story(accordionArgs, ({
  altBackground,
  bold,
  closeToggleText,
  contentPadding,
  disabled,
  defaultOpen,
  icon,
  openToggleText,
  toggleText,
  defaultSlot,
  titleSlot,
  subtitleSlot,
  menuSlot,
  headingLevel,
  onToggle
}) => html\`
        <vl-accordion
            ?alt-background=\${altBackground}
            ?bold=\${bold}
            content-padding=\${contentPadding}
            close-toggle-text=\${closeToggleText}
            icon=\${icon}
            ?disabled=\${disabled}
            ?default-open=\${defaultOpen}
            open-toggle-text=\${openToggleText}
            toggle-text=\${toggleText}
            heading-level=\${headingLevel}
            @vl-on-toggle=\${(event: CustomEvent) => onToggle(event.detail)}
        >
            \${unsafeHTML(defaultSlot)}\${unsafeHTML(titleSlot)}\${unsafeHTML(subtitleSlot)}\${unsafeHTML(menuSlot)}
        </vl-accordion>
    \`)`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`story(accordionArgs, ({
  altBackground,
  bold,
  closeToggleText,
  contentPadding,
  disabled,
  defaultOpen,
  icon,
  openToggleText,
  toggleText,
  defaultSlot,
  titleSlot,
  subtitleSlot,
  menuSlot,
  headingLevel,
  onToggle
}) => html\`
        <vl-accordion
            ?alt-background=\${altBackground}
            ?bold=\${bold}
            content-padding=\${contentPadding}
            close-toggle-text=\${closeToggleText}
            icon=\${icon}
            ?disabled=\${disabled}
            ?default-open=\${defaultOpen}
            open-toggle-text=\${openToggleText}
            toggle-text=\${toggleText}
            heading-level=\${headingLevel}
            @vl-on-toggle=\${(event: CustomEvent) => onToggle(event.detail)}
        >
            \${unsafeHTML(defaultSlot)}\${unsafeHTML(titleSlot)}\${unsafeHTML(subtitleSlot)}\${unsafeHTML(menuSlot)}
        </vl-accordion>
    \`)`,...b.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`story(accordionArgs, ({
  altBackground,
  bold,
  closeToggleText,
  contentPadding,
  disabled,
  defaultOpen,
  icon,
  openToggleText,
  toggleText,
  defaultSlot,
  titleSlot,
  subtitleSlot,
  menuSlot,
  headingLevel,
  onToggle
}) => html\`
        <vl-accordion
            ?alt-background=\${altBackground}
            ?bold=\${bold}
            content-padding=\${contentPadding}
            close-toggle-text=\${closeToggleText}
            icon=\${icon}
            ?disabled=\${disabled}
            ?default-open=\${defaultOpen}
            open-toggle-text=\${openToggleText}
            toggle-text=\${toggleText}
            heading-level=\${headingLevel}
            @vl-on-toggle=\${(event: CustomEvent) => onToggle(event.detail)}
        >
            \${unsafeHTML(defaultSlot)}\${unsafeHTML(titleSlot)}\${unsafeHTML(subtitleSlot)}\${unsafeHTML(menuSlot)}
        </vl-accordion>
    \`)`,...T.parameters?.docs?.source}}};const Q=["AccordionDefault","AccordionHeading","AccordionDynamicToggle","AccordionIcon","AccordionTitleSlot","AccordionSubtitleSlot","AccordionImageSubtitleSlot","AccordionMenuSlot","AccordionAltBackground"];export{T as AccordionAltBackground,s as AccordionDefault,g as AccordionDynamicToggle,r as AccordionHeading,c as AccordionIcon,m as AccordionImageSubtitleSlot,b as AccordionMenuSlot,p as AccordionSubtitleSlot,u as AccordionTitleSlot,Q as __namedExportsOrder,q as default};
