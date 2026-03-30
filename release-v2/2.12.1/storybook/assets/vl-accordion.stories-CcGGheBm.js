import{Y as t,a0 as h,Z as l,a1 as C,U as D,W as I,bH as f,u as S,j as e,C as i,bb as V,s as P,x as N,r as R,bw as B,bD as _}from"./iframe-B6HStWZE.js";import{o as v}from"./unsafe-html-CkfFEmZp.js";import"./preload-helper-D9Z9MdNV.js";const{action:U}=__STORYBOOK_MODULE_ACTIONS__,o={...I,bold:!1,closeToggleText:"",contentPadding:null,disabled:!1,defaultOpen:!1,icon:"",openToggleText:"",toggleText:"",defaultSlot:"",titleSlot:"",subtitleSlot:"",menuSlot:"",headingLevel:"",onToggle:U("vl-on-toggle")},G={...D,bold:{name:"bold",description:"Beeldt de toggle-text van de accordion af in bold.",table:{type:{summary:l.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(o.bold)}}},closeToggleText:{name:"close-toggle-text",description:"Tekst waarop de gebruiker kan klikken om de accordion te sluiten.<br>Kan niet in combinatie gebruikt worden met:<br>• toggle-text attribuut<br>• title slot",table:{type:{summary:l.STRING},category:t.ATTRIBUTES,defaultValue:{summary:String(o.closeToggleText)}}},contentPadding:{name:"content-padding",description:"De grootte van de padding van de content.<br>Deze padding wordt toegepast op zowel desktop als mobile.",control:{type:h.SELECT},options:[...Object.keys(f)],table:{type:{summary:C(Object.keys(f))},category:t.ATTRIBUTES,defaultValue:{summary:String(o.contentPadding)}}},disabled:{name:"disabled",description:"Schakelt het openen en het sluiten van de accordion uit.",table:{type:{summary:l.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(o.disabled)}}},defaultOpen:{name:"default-open",description:"Indien gezet zal de accordion standaard geopend zijn.<br>Dit attribuut is niet reactief.",table:{type:{summary:l.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(o.defaultOpen)}}},icon:{name:"icon",description:"Icoon dat getoond wordt voor de tekst van de toggle.<br>Dit attribuut is niet reactief.",table:{type:{summary:l.STRING},category:t.ATTRIBUTES,defaultValue:{summary:o.icon}}},openToggleText:{name:"open-toggle-text",description:"Tekst waarop de gebruiker kan klikken om de accordion te openen.<br>Kan niet in combinatie gebruikt worden met:<br>• toggle-text attribuut<br>• title slot",table:{type:{summary:l.STRING},category:t.ATTRIBUTES,defaultValue:{summary:o.openToggleText}}},toggleText:{name:"toggle-text",description:"Tekst waarop de gebruiker kan klikken om de accordion te openen of te sluiten.<br>Kan niet in combinatie gebruikt worden met:<br>• close-toggle-text attribuut<br>• open-toggle-text attribuut<br>• title slot",table:{type:{summary:l.STRING},category:t.ATTRIBUTES,defaultValue:{summary:o.toggleText}}},defaultSlot:{name:"[default]",description:"Element dat getoond en verborgen wordt wanneer de gebruiker de accordion opent of sluit.",table:{type:{summary:l.HTML},category:t.SLOTS,defaultValue:{summary:o.defaultSlot}}},titleSlot:{name:"title",description:"Element waarop de gebruiker kan klikken om de accordion te openen of te sluiten.<br>Kan niet in combinatie gebruikt worden met:<br>Kan niet in combinatie gebruikt worden met:<br>• close-toggle-text attribuut<br>• open-toggle-text attribuut<br>• toggle-text attribuut",table:{type:{summary:l.HTML},category:t.SLOTS,defaultValue:{summary:o.titleSlot}}},subtitleSlot:{name:"subtitle",description:"Subtitel slotelement. Wordt getoond in open en gesloten toestand.",table:{type:{summary:l.HTML},category:t.SLOTS,defaultValue:{summary:o.subtitleSlot}}},menuSlot:{name:"menu",description:"Slotelement om menu item toe te voegen in rechterbovenhoek.",table:{type:{summary:l.HTML},category:t.SLOTS,defaultValue:{summary:o.menuSlot}}},headingLevel:{name:"heading-level",description:"Het heading-level van de titel (h1 t.e.m. h6). Indien niet opgegeven of ongeldig, wordt standaard h3 gebruikt.",control:{type:h.SELECT},options:["1","2","3","4","5","6"],table:{type:{summary:"1 | 2 | 3 | 4 | 5 | 6"},category:t.ATTRIBUTES,defaultValue:{summary:""}}},onToggle:{name:"vl-on-toggle",description:"Afgevuurd bij het openen of sluiten van de accordion.<br>Het event bevat of de accordion geopend of gesloten is.",table:{type:{summary:"{ open: boolean }"},category:t.EVENTS}}};function x(a){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...S(),...a.components},{FluxComponentMetaData:T}=n;return T||F("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"accordion",children:"Accordion"}),`
`,e.jsx(T,{id:"components-block-accordion"}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(n.p,{children:["Gebruik de ",e.jsx(n.code,{children:"accordion"}),` component om informatie te tonen of te verbergen aan de hand van een toggle.
Voor meer informatie over het afbeelden van meerdere accordions zie de
`,e.jsx(n.a,{href:"/docs/components-block-accordion-list--documentatie",children:"accordion-list"})," component."]}),`
`,e.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { VlAccordionComponent } from '@domg-wc/components/block';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-accordion></vl-accordion>
`})}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(V,{of:d}),`
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
`,e.jsx(n.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(n.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/js-components/vl-ui-accordion",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Accordion"})}),`
`,e.jsx(n.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-accordion--default",rel:"nofollow",children:"Legacy Storybook - Accordion"})}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlAccordion.html",rel:"nofollow",children:"Legacy Documentatie - Accordion"})}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-accordion.html",rel:"nofollow",children:"Legacy Demo - Accordion"})})]})}function K(a={}){const{wrapper:n}={...S(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(x,{...a})}):x(a)}function F(a,n){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}R([B,_]);const Z={id:"components-block-accordion",title:"Components - Block/accordion",tags:["autodocs"],args:o,argTypes:G,parameters:{docs:{page:K}}},s=P(o,({bold:a,closeToggleText:n,contentPadding:T,disabled:$,defaultOpen:j,icon:k,openToggleText:y,toggleText:w,defaultSlot:L,titleSlot:A,subtitleSlot:H,menuSlot:O,headingLevel:M,onToggle:z})=>N`
        <vl-accordion
            ?bold=${a}
            content-padding=${T}
            close-toggle-text=${n}
            icon=${k}
            ?disabled=${$}
            ?default-open=${j}
            open-toggle-text=${y}
            toggle-text=${w}
            heading-level=${M}
            @vl-on-toggle=${E=>z(E.detail)}
        >
            ${v(L)}${v(A)}${v(H)}${v(O)}
        </vl-accordion>
    `),d=s.bind({});d.storyName="vl-accordion - default";d.args={toggleText:"Lees meer over de onderwijsdoelstelling",defaultSlot:"<span>Onderwijs helpt jonge mensen en volwassenen om zichzelf te ontwikkelen en hun weg te vinden in onze samenleving. Het hoger onderwijs speelt daarnaast een belangrijke rol in innovatie dankzij het belang van wetenschappelijk onderzoek.</span>"};const r=s.bind({});r.storyName="vl-accordion - heading";r.args={toggleText:"Dit is een heading van ingevouwen inhoud",defaultSlot:"<span>Onderwijs helpt jonge mensen en volwassenen om zichzelf te ontwikkelen en hun weg te vinden in onze samenleving. Het hoger onderwijs speelt daarnaast een belangrijke rol in innovatie dankzij het belang van wetenschappelijk onderzoek.</span>",headingLevel:"3"};const g=s.bind({});g.storyName="vl-accordion - dynamic toggle";g.args={closeToggleText:"Sluit de onderwijsdoelstelling",openToggleText:"Open de onderwijsdoelstelling",defaultSlot:"<span>Onderwijs helpt jonge mensen en volwassenen om zichzelf te ontwikkelen en hun weg te vinden in onze samenleving. Het hoger onderwijs speelt daarnaast een belangrijke rol in innovatie dankzij het belang van wetenschappelijk onderzoek.</span>"};const c=s.bind({});c.storyName="vl-accordion - icon";c.args={toggleText:"Lees meer over de onderwijsdoelstelling",icon:"university",defaultSlot:"<span>Onderwijs helpt jonge mensen en volwassenen om zichzelf te ontwikkelen en hun weg te vinden in onze samenleving. Het hoger onderwijs speelt daarnaast een belangrijke rol in innovatie dankzij het belang van wetenschappelijk onderzoek.</span>"};const u=s.bind({});u.storyName="vl-accordion - title slot";u.args={defaultSlot:"<span>Onderwijs helpt jonge mensen en volwassenen om zichzelf te ontwikkelen en hun weg te vinden in onze samenleving. Het hoger onderwijs speelt daarnaast een belangrijke rol in innovatie dankzij het belang van wetenschappelijk onderzoek.</span>",titleSlot:'<span slot="title">Lees meer over de onderwijsdoelstelling</span>'};const p=s.bind({});p.storyName="vl-accordion - subtitle slot";p.args={defaultSlot:"<span>Onderwijs helpt jonge mensen en volwassenen om zichzelf te ontwikkelen en hun weg te vinden in onze samenleving. Het hoger onderwijs speelt daarnaast een belangrijke rol in innovatie dankzij het belang van wetenschappelijk onderzoek.</span>",titleSlot:'<span slot="title">Lees meer over de onderwijsdoelstelling</span>',subtitleSlot:'<vl-annotation slot="subtitle">Lorem ipsum</vl-annotation>'};const m=s.bind({});m.storyName="vl-accordion - subtitle slot";m.args={defaultSlot:"<span>Onderwijs helpt jonge mensen en volwassenen om zichzelf te ontwikkelen en hun weg te vinden in onze samenleving. Het hoger onderwijs speelt daarnaast een belangrijke rol in innovatie dankzij het belang van wetenschappelijk onderzoek.</span>",titleSlot:'<span slot="title">Lees meer over de onderwijsdoelstelling</span>',subtitleSlot:'<img style="width: 50px" src="cat.jpeg" slot="subtitle"/>'};const b=s.bind({});b.storyName="vl-accordion - menu slot";b.args={defaultSlot:"<span>Onderwijs helpt jonge mensen en volwassenen om zichzelf te ontwikkelen en hun weg te vinden in onze samenleving. Het hoger onderwijs speelt daarnaast een belangrijke rol in innovatie dankzij het belang van wetenschappelijk onderzoek.</span>",titleSlot:'<span slot="title">Lees meer over de onderwijsdoelstelling</span>',subtitleSlot:'<vl-annotation slot="subtitle">Lorem ipsum</vl-annotation>',menuSlot:`<span slot="menu">
                 <vl-button ghost icon="nav-show-more-vertical" id="btn-acties" label="onderwijs-menu"></vl-button>
                 <vl-popover for="btn-acties" placement="bottom-end">
                   <vl-popover-action-list>
                     <vl-popover-action icon="search">Zoeken</vl-popover-action>
                     <vl-popover-action icon="edit">Aanpassen</vl-popover-action>
                     <vl-popover-action icon="bin">Verwijderen</vl-popover-action>
                   </vl-popover-action-list>
                 </vl-popover>
               </span>`};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`story(accordionArgs, ({
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
    \`)`,...d.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(accordionArgs, ({
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
    \`)`,...b.parameters?.docs?.source}}};const J=["AccordionDefault","AccordionHeading","AccordionDynamicToggle","AccordionIcon","AccordionTitleSlot","AccordionSubtitleSlot","AccordionImageSubtitleSlot","AccordionMenuSlot"];export{d as AccordionDefault,g as AccordionDynamicToggle,r as AccordionHeading,c as AccordionIcon,m as AccordionImageSubtitleSlot,b as AccordionMenuSlot,p as AccordionSubtitleSlot,u as AccordionTitleSlot,J as __namedExportsOrder,Z as default};
