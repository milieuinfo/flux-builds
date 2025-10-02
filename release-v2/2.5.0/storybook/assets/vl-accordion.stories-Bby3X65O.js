import{J as o,K as l,P as z,O as H,G as E,H as C,bH as v,u as S,j as e,C as s,bd as D,s as I,x as V,r as P,bz as N,b8 as R}from"./iframe-CflcmDUD.js";import{o as T}from"./unsafe-html-Bzfy4gdb.js";import"./preload-helper-D9Z9MdNV.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,t={...C,bold:!1,closeToggleText:"",contentPadding:null,disabled:!1,defaultOpen:!1,icon:"",openToggleText:"",toggleText:"",defaultSlot:"",titleSlot:"",subtitleSlot:"",menuSlot:"",onToggle:B("vl-on-toggle")},_={...E,bold:{name:"bold",description:"Beeldt de toggle-text van de accordion af in bold.",table:{type:{summary:l.BOOLEAN},category:o.ATTRIBUTES,defaultValue:{summary:String(t.bold)}}},closeToggleText:{name:"close-toggle-text",description:"Tekst waarop de gebruiker kan klikken om de accordion te sluiten.<br>Kan niet in combinatie gebruikt worden met:<br>• toggle-text attribuut<br>• title slot",table:{type:{summary:l.STRING},category:o.ATTRIBUTES,defaultValue:{summary:String(t.closeToggleText)}}},contentPadding:{name:"content-padding",description:"De grootte van de padding van de content.<br>Deze padding wordt toegepast op zowel desktop als mobile.",control:{type:H.SELECT},options:[...Object.keys(v)],table:{type:{summary:z(Object.keys(v))},category:o.ATTRIBUTES,defaultValue:{summary:String(t.contentPadding)}}},disabled:{name:"disabled",description:"Schakelt het openen en het sluiten van de accordion uit.",table:{type:{summary:l.BOOLEAN},category:o.ATTRIBUTES,defaultValue:{summary:String(t.disabled)}}},defaultOpen:{name:"default-open",description:"Indien gezet zal de accordion standaard geopend zijn.<br>Dit attribuut is niet reactief.",table:{type:{summary:l.BOOLEAN},category:o.ATTRIBUTES,defaultValue:{summary:String(t.defaultOpen)}}},icon:{name:"icon",description:"Icoon dat getoond wordt voor de tekst van de toggle.<br>Dit attribuut is niet reactief.",table:{type:{summary:l.STRING},category:o.ATTRIBUTES,defaultValue:{summary:t.icon}}},openToggleText:{name:"open-toggle-text",description:"Tekst waarop de gebruiker kan klikken om de accordion te openen.<br>Kan niet in combinatie gebruikt worden met:<br>• toggle-text attribuut<br>• title slot",table:{type:{summary:l.STRING},category:o.ATTRIBUTES,defaultValue:{summary:t.openToggleText}}},toggleText:{name:"toggle-text",description:"Tekst waarop de gebruiker kan klikken om de accordion te openen of te sluiten.<br>Kan niet in combinatie gebruikt worden met:<br>• close-toggle-text attribuut<br>• open-toggle-text attribuut<br>• title slot",table:{type:{summary:l.STRING},category:o.ATTRIBUTES,defaultValue:{summary:t.toggleText}}},defaultSlot:{name:"[default]",description:"Element dat getoond en verborgen wordt wanneer de gebruiker de accordion opent of sluit.",table:{type:{summary:l.HTML},category:o.SLOTS,defaultValue:{summary:t.defaultSlot}}},titleSlot:{name:"title",description:"Element waarop de gebruiker kan klikken om de accordion te openen of te sluiten.<br>Kan niet in combinatie gebruikt worden met:<br>Kan niet in combinatie gebruikt worden met:<br>• close-toggle-text attribuut<br>• open-toggle-text attribuut<br>• toggle-text attribuut",table:{type:{summary:l.HTML},category:o.SLOTS,defaultValue:{summary:t.titleSlot}}},subtitleSlot:{name:"subtitle",description:"Subtitel slotelement. Wordt getoond in open en gesloten toestand.",table:{type:{summary:l.HTML},category:o.SLOTS,defaultValue:{summary:t.subtitleSlot}}},menuSlot:{name:"menu",description:"Slotelement om menu item toe te voegen in rechterbovenhoek.",table:{type:{summary:l.HTML},category:o.SLOTS,defaultValue:{summary:t.menuSlot}}},onToggle:{name:"vl-on-toggle",description:"Afgevuurd bij het openen of sluiten van de accordion.<br>Het event bevat of de accordion geopend of gesloten is.",table:{type:{summary:"{ open: boolean }"},category:o.EVENTS}}};function f(a){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...S(),...a.components},{FluxMetaData:b}=n;return b||G("FluxMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"accordion",children:"Accordion"}),`
`,e.jsx(b,{id:"components-block-accordion"}),`
`,e.jsxs(n.p,{children:["Gebruik de ",e.jsx(n.code,{children:"accordion"}),` component om informatie te tonen of te verbergen aan de hand van een toggle.
Voor meer informatie over het afbeelden van meerdere accordions zie de
`,e.jsx(n.a,{href:"/docs/components-block-accordion-list--documentatie",children:"accordion-list"})," component."]}),`
`,e.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { VlAccordionComponent } from '@domg-wc/components/block';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-accordion></vl-accordion>
`})}),`
`,e.jsx(s,{of:i}),`
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(D,{of:i}),`
`,e.jsx(n.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(n.h3,{id:"dynamische-toggle",children:"Dynamische toggle"}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(n.h3,{id:"icoon",children:"Icoon"}),`
`,e.jsx(s,{of:r}),`
`,e.jsx(n.h3,{id:"titel-slot",children:"Titel slot"}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(n.h3,{id:"subtitel-slot",children:"Subtitel slot"}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(n.h3,{id:"subtitel-image-slot",children:"Subtitel Image slot"}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.h3,{id:"menu-slot",children:"Menu slot"}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(n.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/js-components/vl-ui-accordion",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Accordion"})}),`
`,e.jsx(n.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-accordion--default",rel:"nofollow",children:"Legacy Storybook - Accordion"})}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlAccordion.html",rel:"nofollow",children:"Legacy Documentatie - Accordion"})}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-accordion.html",rel:"nofollow",children:"Legacy Demo - Accordion"})})]})}function U(a={}){const{wrapper:n}={...S(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(f,{...a})}):f(a)}function G(a,n){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}P([N,R]);const W={id:"components-block-accordion",title:"Components - Block/accordion",tags:["autodocs"],args:t,argTypes:_,parameters:{docs:{page:U}}},m=I(t,({bold:a,closeToggleText:n,contentPadding:b,disabled:x,defaultOpen:h,icon:$,openToggleText:j,toggleText:y,defaultSlot:k,titleSlot:w,subtitleSlot:L,menuSlot:A,onToggle:O})=>V`
        <vl-accordion
            ?bold=${a}
            content-padding=${b}
            close-toggle-text=${n}
            icon=${$}
            ?disabled=${x}
            ?default-open=${h}
            open-toggle-text=${j}
            toggle-text=${y}
            @vl-on-toggle=${M=>O(M.detail)}
        >
            ${T(k)}${T(w)}${T(L)}${T(A)}
        </vl-accordion>
    `),i=m.bind({});i.storyName="vl-accordion - default";i.args={toggleText:"Lees meer over de onderwijsdoelstelling",defaultSlot:"<span>Onderwijs helpt jonge mensen en volwassenen om zichzelf te ontwikkelen en hun weg te vinden in onze samenleving. Het hoger onderwijs speelt daarnaast een belangrijke rol in innovatie dankzij het belang van wetenschappelijk onderzoek.</span>"};const d=m.bind({});d.storyName="vl-accordion - dynamic toggle";d.args={closeToggleText:"Sluit de onderwijsdoelstelling",openToggleText:"Open de onderwijsdoelstelling",defaultSlot:"<span>Onderwijs helpt jonge mensen en volwassenen om zichzelf te ontwikkelen en hun weg te vinden in onze samenleving. Het hoger onderwijs speelt daarnaast een belangrijke rol in innovatie dankzij het belang van wetenschappelijk onderzoek.</span>"};const r=m.bind({});r.storyName="vl-accordion - icon";r.args={toggleText:"Lees meer over de onderwijsdoelstelling",icon:"university",defaultSlot:"<span>Onderwijs helpt jonge mensen en volwassenen om zichzelf te ontwikkelen en hun weg te vinden in onze samenleving. Het hoger onderwijs speelt daarnaast een belangrijke rol in innovatie dankzij het belang van wetenschappelijk onderzoek.</span>"};const c=m.bind({});c.storyName="vl-accordion - title slot";c.args={defaultSlot:"<span>Onderwijs helpt jonge mensen en volwassenen om zichzelf te ontwikkelen en hun weg te vinden in onze samenleving. Het hoger onderwijs speelt daarnaast een belangrijke rol in innovatie dankzij het belang van wetenschappelijk onderzoek.</span>",titleSlot:'<span slot="title">Lees meer over de onderwijsdoelstelling</span>'};const g=m.bind({});g.storyName="vl-accordion - subtitle slot";g.args={defaultSlot:"<span>Onderwijs helpt jonge mensen en volwassenen om zichzelf te ontwikkelen en hun weg te vinden in onze samenleving. Het hoger onderwijs speelt daarnaast een belangrijke rol in innovatie dankzij het belang van wetenschappelijk onderzoek.</span>",titleSlot:'<span slot="title">Lees meer over de onderwijsdoelstelling</span>',subtitleSlot:'<vl-annotation slot="subtitle">Lorem ipsum</vl-annotation>'};const u=m.bind({});u.storyName="vl-accordion - subtitle slot";u.args={defaultSlot:"<span>Onderwijs helpt jonge mensen en volwassenen om zichzelf te ontwikkelen en hun weg te vinden in onze samenleving. Het hoger onderwijs speelt daarnaast een belangrijke rol in innovatie dankzij het belang van wetenschappelijk onderzoek.</span>",titleSlot:'<span slot="title">Lees meer over de onderwijsdoelstelling</span>',subtitleSlot:'<img style="width: 50px" src="cat.jpeg" slot="subtitle"/>'};const p=m.bind({});p.storyName="vl-accordion - menu slot";p.args={defaultSlot:"<span>Onderwijs helpt jonge mensen en volwassenen om zichzelf te ontwikkelen en hun weg te vinden in onze samenleving. Het hoger onderwijs speelt daarnaast een belangrijke rol in innovatie dankzij het belang van wetenschappelijk onderzoek.</span>",titleSlot:'<span slot="title">Lees meer over de onderwijsdoelstelling</span>',subtitleSlot:'<vl-annotation slot="subtitle">Lorem ipsum</vl-annotation>',menuSlot:`<span slot="menu">
                 <vl-button ghost icon="menu" id="btn-acties" label="onderwijs-menu"></vl-button>
                 <vl-popover for="btn-acties" placement="bottom-end">
                   <vl-popover-action-list>
                     <vl-popover-action icon="search">Zoeken</vl-popover-action>
                     <vl-popover-action icon="edit">Aanpassen</vl-popover-action>
                     <vl-popover-action icon="bin">Verwijderen</vl-popover-action>
                   </vl-popover-action-list>
                 </vl-popover>
               </span>`};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`story(accordionArgs, ({
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
            @vl-on-toggle=\${(event: CustomEvent) => onToggle(event.detail)}
        >
            \${unsafeHTML(defaultSlot)}\${unsafeHTML(titleSlot)}\${unsafeHTML(subtitleSlot)}\${unsafeHTML(menuSlot)}
        </vl-accordion>
    \`)`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`story(accordionArgs, ({
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
            @vl-on-toggle=\${(event: CustomEvent) => onToggle(event.detail)}
        >
            \${unsafeHTML(defaultSlot)}\${unsafeHTML(titleSlot)}\${unsafeHTML(subtitleSlot)}\${unsafeHTML(menuSlot)}
        </vl-accordion>
    \`)`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`story(accordionArgs, ({
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
            @vl-on-toggle=\${(event: CustomEvent) => onToggle(event.detail)}
        >
            \${unsafeHTML(defaultSlot)}\${unsafeHTML(titleSlot)}\${unsafeHTML(subtitleSlot)}\${unsafeHTML(menuSlot)}
        </vl-accordion>
    \`)`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`story(accordionArgs, ({
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
            @vl-on-toggle=\${(event: CustomEvent) => onToggle(event.detail)}
        >
            \${unsafeHTML(defaultSlot)}\${unsafeHTML(titleSlot)}\${unsafeHTML(subtitleSlot)}\${unsafeHTML(menuSlot)}
        </vl-accordion>
    \`)`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`story(accordionArgs, ({
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
            @vl-on-toggle=\${(event: CustomEvent) => onToggle(event.detail)}
        >
            \${unsafeHTML(defaultSlot)}\${unsafeHTML(titleSlot)}\${unsafeHTML(subtitleSlot)}\${unsafeHTML(menuSlot)}
        </vl-accordion>
    \`)`,...p.parameters?.docs?.source}}};const Y=["AccordionDefault","AccordionDynamicToggle","AccordionIcon","AccordionTitleSlot","AccordionSubtitleSlot","AccordionImageSubtitleSlot","AccordionMenuSlot"];export{i as AccordionDefault,d as AccordionDynamicToggle,r as AccordionIcon,u as AccordionImageSubtitleSlot,p as AccordionMenuSlot,g as AccordionSubtitleSlot,c as AccordionTitleSlot,Y as __namedExportsOrder,W as default};
