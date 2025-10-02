import{J as t,K as a,P as E,O as W,G as I,H as D,bR as S,u as $,j as n,C as k,bd as N,s as p,x as g,r as U,d as _,f as K,g as z,bS as G,l as J}from"./iframe-CflcmDUD.js";import{o}from"./unsafe-html-Bzfy4gdb.js";import"./preload-helper-D9Z9MdNV.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,l={...D,back:"Terug",backLink:"document.referrer",disableBackLink:!1,fullWidth:!1,hideBackLink:!1,hideSubHeader:!1,link:"",marginBottom:"large",subTitle:"",title:"",actionsSlot:"",backSlot:"",backLinkSlot:"",subHeaderSlot:"",subTitleSlot:"",titleSlot:"",topLeftSlot:"",topRightSlot:"",onClickBack:P("vl-click-back")},X={...I,back:{name:"back",description:"Tekst van de terug-link.",table:{type:{summary:a.STRING},category:t.ATTRIBUTES,defaultValue:{summary:l.back}}},backLink:{name:"back-link",description:"URL van de terug-link.",table:{type:{summary:a.URL},category:t.ATTRIBUTES,defaultValue:{summary:l.backLink}}},disableBackLink:{name:"disable-back-link",description:"Zet de terug-link uit.",table:{type:{summary:a.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(l.disableBackLink)}}},fullWidth:{name:"full-width",description:"Gebruik de volledige breedte van het scherm.",table:{type:{summary:a.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(l.fullWidth)}}},hideBackLink:{name:"hide-back-link",description:"Verbergt de terug link.<br>Dit attribuut is niet reactief.",table:{type:{summary:a.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(l.hideBackLink)}}},hideSubHeader:{name:"hide-sub-header",description:"Verbergt de sub header.",table:{type:{summary:a.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(l.hideSubHeader)}}},link:{name:"link",description:"URL van de titel-link.",table:{type:{summary:a.URL},category:t.ATTRIBUTES,defaultValue:{summary:l.link}}},marginBottom:{name:"margin-bottom",description:"De grootte van de margin onder de functional header.",control:{type:W.SELECT},options:[...Object.keys(S)],table:{type:{summary:E(Object.keys(S))},category:t.ATTRIBUTES,defaultValue:{summary:l.marginBottom}}},subTitle:{name:"sub-title",description:"Tekst van de subtitel.",table:{type:{summary:a.STRING},category:t.ATTRIBUTES,defaultValue:{summary:l.subTitle}}},title:{name:"title",description:"Tekst van de titel.",table:{type:{summary:a.STRING},category:t.ATTRIBUTES,defaultValue:{summary:l.title}}},actionsSlot:{name:"actions",description:"Acties die worden afgebeeld in de rechterbovenhoek.",table:{type:{summary:a.HTML},category:t.SLOTS}},backSlot:{name:"back",description:"Wordt afgebeeld ipv de tekst van de terug-link.<br>Kan niet in combinatie gebruikt worden met:<br>• back attribuut<br>• back-link slot<br>• sub-header slot",table:{type:{summary:a.HTML},category:t.SLOTS}},backLinkSlot:{name:"back-link",description:"Wordt afgebeeld ipv de terug-link.<br>Kan niet in combinatie gebruikt worden met:<br>• back attribuut<br>• back-link attribuut<br>• disable-back-link attribuutt<br>• back slot<br>• sub-header slot",table:{type:{summary:a.HTML},category:t.SLOTS}},subHeaderSlot:{name:"sub-header",description:"Wordt afgebeeld onder de horizontale lijn.<br>Kan niet in combinatie gebruikt worden met:<br>• back attribuut<br>• back-link attribuut<br>• disable-back-link attribuut<br>• sub-title attribuut<br>• back slot<br>• back-link slot<br>• sub-title slot",table:{type:{summary:a.HTML},category:t.SLOTS}},subTitleSlot:{name:"sub-title",description:"Wordt afgebeeld ipv de tekst van de subtitel.<br>Kan niet in combinatie gebruikt worden met:<br>• sub-title<br>• sub-header slot",table:{type:{summary:a.HTML},category:t.SLOTS}},titleSlot:{name:"title",description:"Wordt afgebeeld ipv de tekst van de titel.<br>Kan niet in combinatie gebruikt worden met:<br>• title",table:{type:{summary:a.HTML},category:t.SLOTS}},topLeftSlot:{name:"top-left",description:"Wordt afgebeeld in de linkerbovenhoek.<br>Kan niet in combinatie gebruikt worden met:<br>• actions slot",table:{type:{summary:a.HTML},category:t.SLOTS}},topRightSlot:{name:"top-right",description:"Wordt afgebeeld in de rechterbovenhoek.<br>Kan niet in combinatie gebruikt worden met:<br>• actions slot",table:{type:{summary:a.HTML},category:t.SLOTS}},onClickBack:{name:"vl-click-back",description:"Afgevuurd na het klikken op de terug-link.",table:{type:{summary:"-"},category:t.EVENTS}}};function T(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...$(),...i.components},{FluxMetaData:r}=e;return r||Z("FluxMetaData"),n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"functional-header",children:"Functional Header"}),`
`,n.jsx(r,{id:"components-block-functional-header"}),`
`,n.jsxs(e.p,{children:["Gebruik de ",n.jsx(e.code,{children:"functional-header"}),` component om bovenaan de pagina generieke informatie te tonen zoals bijvoorbeeld
een titel en acties.`]}),`
`,n.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`import { VlFunctionalHeaderComponent } from '@domg-wc/components/block';
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<vl-functional-header></vl-functional-header>
`})}),`
`,n.jsx(k,{of:s}),`
`,n.jsx(e.h2,{id:"consistent-gebruik-van-de-terug-link",children:'Consistent gebruik van de "Terug"-link'}),`
`,n.jsx(e.p,{children:'De volgende richtlijnen gelden voor het instellen van de "Terug"-link:'}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Vermijd het gebruik van ",n.jsx(e.code,{children:"history.back()"}),". De gebruiker kan op verschillende manieren op je pagina belandt zijn."]}),`
`,n.jsxs(e.li,{children:["Je moet expliciet een URL instellen.",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:`De ingestelde URL verwijst naar een vast en logisch startpunt,
relatief tov de pagina waarop de gebruiker zich bevindt.`}),`
`,n.jsx(e.li,{children:`Kies als URL het startpunt van de toepassing, tenzij deze meerdere luiken bevat. Kies in dat geval het startpunt
van het huidige luik.`}),`
`,n.jsxs(e.li,{children:['Je kan de URL van de "Terug"-link vervangen met het ',n.jsx(e.code,{children:"back-link"}),"-attribuut."]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`"Terug" moet vermeden worden als naam, want het zegt niet naar waar je terugkeert.
Je kan de tekst van de "Terug"-link vervangen met het `,n.jsx(e.code,{children:"back"}),"-slot."]}),`
`,n.jsxs(e.li,{children:[`Indien de functional header "breadcrumbs" bevat ipv een "Terug"-link,
zoals in de `,n.jsx(e.a,{href:"#met-breadcrumb",children:"breadcrumbs variant"}),`, dan wijst de eerste link altijd naar het "startpunt" van de
toepassing. Vermijd termen als "Home" of "Start", maar gebruik de naam van de toepassing of de naam van het luik
waar je naar terugkeert.`]}),`
`,n.jsxs(e.li,{children:[`Vergeet de "Terug"-link ook niet in te stellen op de statische pagina's:
`,n.jsx(e.a,{href:"/docs/components-compliance-privacy--documentatie",children:"privacy"}),`,
`,n.jsx(e.a,{href:"/docs/components-compliance-accessibility--documentatie",children:"toegankelijkheid"}),` en
`,n.jsx(e.a,{href:"/docs/components-compliance-cookie-statement--documentatie",children:"cookieverklaring"}),`.
Je kan de standaard functional header in deze componenten vervangen
met het `,n.jsx(e.code,{children:"header"}),"-slot."]}),`
`,n.jsxs(e.li,{children:['Je kan de "Terug"-link in zijn geheel vervangen met het ',n.jsx(e.code,{children:"back-link"}),"-slot."]}),`
`]}),`
`,n.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,n.jsx(N,{of:s}),`
`,n.jsx(e.h2,{id:"varianten",children:"Varianten"}),`
`,n.jsx(e.h3,{id:"met-acties",children:"Met acties"}),`
`,n.jsx(k,{of:c}),`
`,n.jsx(e.h3,{id:"met-slots",children:"Met slots"}),`
`,n.jsx(k,{of:u}),`
`,n.jsx(e.h3,{id:"met-tabs",children:"Met tabs"}),`
`,n.jsxs(e.p,{children:["Gebruik de ",n.jsx(e.a,{href:"/docs/components-block-tabs--tabs-default",children:"vl-tabs"})," component in het ",n.jsx(e.code,{children:"sub-header"})," slot om tabs af te beelden binnen de ",n.jsx(e.code,{children:"functional-header"}),"."]}),`
`,n.jsx(k,{of:b}),`
`,n.jsx(e.h3,{id:"met-breadcrumb",children:"Met breadcrumb"}),`
`,n.jsxs(e.p,{children:["Gebruik de ",n.jsx(e.a,{href:"/docs/components-block-breadcrumb--breadcrumb-default",children:"vl-breadcrumb"})," component in het ",n.jsx(e.code,{children:"sub-title"}),` slot om een breadcrumb af te beelden binnen de
`,n.jsx(e.code,{children:"functional-header"}),".",n.jsx("br",{})," Plaats het ",n.jsx(e.code,{children:"hide-back-link"})," attribuut om de terug-link te verbergen."]}),`
`,n.jsx(k,{of:m}),`
`,n.jsx(e.h3,{id:"andere-patronen",children:"Andere patronen"}),`
`,n.jsxs(e.p,{children:["Zie ",n.jsx(e.a,{href:"/docs/ontwerp-functional-header-voorbeeld-met-button--documentatie",children:"Ontwerp/Functional Header"}),' voor voorbeelden van functional headers met een extra button of search component, of met de combinatie van "Terug"-link en tabs.']}),`
`,n.jsx(e.h2,{id:"referenties",children:"Referenties"}),`
`,n.jsx(e.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-functional-header",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Functional Header"})}),`
`,n.jsx(e.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-functional-header--default",rel:"nofollow",children:"Legacy Storybook - Functional Header"})}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlFunctionalHeader.html",rel:"nofollow",children:"Legacy Documentatie - Functional Header"})}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-functional-header.html",rel:"nofollow",children:"Legacy Demo  - Functional Header"})})]})}function Y(i={}){const{wrapper:e}={...$(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(T,{...i})}):T(i)}function Z(i,e){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}const{action:q}=__STORYBOOK_MODULE_ACTIONS__;U([_,K,z,G,J]);const te={id:"components-block-functional-header",title:"Components - Block/functional-header",tags:["autodocs"],args:l,argTypes:X,parameters:{docs:{page:Y}}},v=p(l,({back:i,backLink:e,disableBackLink:r,fullWidth:d,hideBackLink:f,hideSubHeader:L,link:y,marginBottom:j,subTitle:x,title:H,actionsSlot:B,backSlot:w,backLinkSlot:M,subHeaderSlot:R,subTitleSlot:A,titleSlot:O,topLeftSlot:C,topRightSlot:V,onClickBack:F})=>g`
        <vl-functional-header
            back=${i}
            back-link=${e}
            ?disable-back-link=${r}
            ?full-width=${d}
            ?hide-back-link=${f}
            ?hide-sub-header=${L}
            link=${y}
            margin-bottom=${j}
            sub-title=${x}
            title=${H}
            @vl-click-back=${F}
        >
            ${o(B)}${o(w)}${o(M)}${o(R)}
            ${o(A)}${o(O)}${o(C)}${o(V)}
        </vl-functional-header>
    `),s=v.bind({});s.storyName="vl-functional-header - default";s.args={subTitle:"Voor lager, middelbaar en hoger onderwijs",title:"School- en studietoelagen"};const c=v.bind({});c.storyName="vl-functional-header - actions";c.args={subTitle:"Voor lager, middelbaar en hoger onderwijs",title:"School- en studietoelagen",actionsSlot:`<div slot="actions">
        <a href="#">Actie 1</a>
        <a href="#">Actie 2</a>
    </div>`};const u=v.bind({});u.storyName="vl-functional-header - slots";u.args={backSlot:'<span slot="back">Terug</span>',backLinkSlot:'<a slot="back-link" href="#">Terug</a>',subHeaderSlot:'<span slot="sub-header">Sub header content</span>',subTitleSlot:'<span slot="sub-title">Voor lager, middelbaar en hoger onderwijs</span>',titleSlot:'<span slot="title">School- en studietoelagen</span>',topLeftSlot:'<span slot="top-left">Linkerbovenhoek content</span>',topRightSlot:'<span slot="top-right">Rechterbovenhoek content</span>'};const b=p(l,({fullWidth:i,marginBottom:e,title:r,link:d})=>g`
        <vl-functional-header ?full-width=${i} link=${d} margin-bottom=${e} title=${r}>
            <vl-tabs
                slot="sub-header"
                disable-links
                within-functional-header
                active-tab="trein"
                @change=${f=>q("change")(f.detail)}
            >
                <vl-tabs-pane id="trein" title="Trein"></vl-tabs-pane>
                <vl-tabs-pane id="metro" title="Metro, tram en bus"></vl-tabs-pane>
                <vl-tabs-pane id="fiets" title="Fiets"></vl-tabs-pane>
            </vl-tabs>
        </vl-functional-header>
    `);b.storyName="vl-functional-header - tabs";b.args={title:"School- en studietoelagen"};const m=p(l,({fullWidth:i,marginBottom:e,title:r,link:d})=>g`
        <vl-functional-header
            ?full-width=${i}
            link=${d}
            margin-bottom=${e}
            title=${r}
            hide-back-link
        >
            <vl-breadcrumb slot="sub-title">
                <vl-breadcrumb-item href=${"1"}>Vlaanderen Intern</vl-breadcrumb-item>
                <vl-breadcrumb-item href=${"2"}>Regelgeving</vl-breadcrumb-item>
                <vl-breadcrumb-item href=${"3"}>Webuniversum</vl-breadcrumb-item>
                <vl-breadcrumb-item>Componenten</vl-breadcrumb-item>
            </vl-breadcrumb>
        </vl-functional-header>
    `);m.storyName="vl-functional-header - breadcrumb";m.args={title:"School- en studietoelagen"};const h=p(l,({fullWidth:i,marginBottom:e,title:r,link:d})=>g`
        <vl-functional-header ?full-width=${i} link=${d} margin-bottom=${e} title=${r}>
            <span slot="sub-title">Full width</span>
        </vl-functional-header>
    `);h.storyName="vl-functional-header - full width";h.args={title:"School- en studietoelagen",fullWidth:!0};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story(functionalHeaderArgs, ({
  back,
  backLink,
  disableBackLink,
  fullWidth,
  hideBackLink,
  hideSubHeader,
  link,
  marginBottom,
  subTitle,
  title,
  actionsSlot,
  backSlot,
  backLinkSlot,
  subHeaderSlot,
  subTitleSlot,
  titleSlot,
  topLeftSlot,
  topRightSlot,
  onClickBack
}) => html\`
        <vl-functional-header
            back=\${back}
            back-link=\${backLink}
            ?disable-back-link=\${disableBackLink}
            ?full-width=\${fullWidth}
            ?hide-back-link=\${hideBackLink}
            ?hide-sub-header=\${hideSubHeader}
            link=\${link}
            margin-bottom=\${marginBottom}
            sub-title=\${subTitle}
            title=\${title}
            @vl-click-back=\${onClickBack}
        >
            \${unsafeHTML(actionsSlot)}\${unsafeHTML(backSlot)}\${unsafeHTML(backLinkSlot)}\${unsafeHTML(subHeaderSlot)}
            \${unsafeHTML(subTitleSlot)}\${unsafeHTML(titleSlot)}\${unsafeHTML(topLeftSlot)}\${unsafeHTML(topRightSlot)}
        </vl-functional-header>
    \`)`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`story(functionalHeaderArgs, ({
  back,
  backLink,
  disableBackLink,
  fullWidth,
  hideBackLink,
  hideSubHeader,
  link,
  marginBottom,
  subTitle,
  title,
  actionsSlot,
  backSlot,
  backLinkSlot,
  subHeaderSlot,
  subTitleSlot,
  titleSlot,
  topLeftSlot,
  topRightSlot,
  onClickBack
}) => html\`
        <vl-functional-header
            back=\${back}
            back-link=\${backLink}
            ?disable-back-link=\${disableBackLink}
            ?full-width=\${fullWidth}
            ?hide-back-link=\${hideBackLink}
            ?hide-sub-header=\${hideSubHeader}
            link=\${link}
            margin-bottom=\${marginBottom}
            sub-title=\${subTitle}
            title=\${title}
            @vl-click-back=\${onClickBack}
        >
            \${unsafeHTML(actionsSlot)}\${unsafeHTML(backSlot)}\${unsafeHTML(backLinkSlot)}\${unsafeHTML(subHeaderSlot)}
            \${unsafeHTML(subTitleSlot)}\${unsafeHTML(titleSlot)}\${unsafeHTML(topLeftSlot)}\${unsafeHTML(topRightSlot)}
        </vl-functional-header>
    \`)`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`story(functionalHeaderArgs, ({
  back,
  backLink,
  disableBackLink,
  fullWidth,
  hideBackLink,
  hideSubHeader,
  link,
  marginBottom,
  subTitle,
  title,
  actionsSlot,
  backSlot,
  backLinkSlot,
  subHeaderSlot,
  subTitleSlot,
  titleSlot,
  topLeftSlot,
  topRightSlot,
  onClickBack
}) => html\`
        <vl-functional-header
            back=\${back}
            back-link=\${backLink}
            ?disable-back-link=\${disableBackLink}
            ?full-width=\${fullWidth}
            ?hide-back-link=\${hideBackLink}
            ?hide-sub-header=\${hideSubHeader}
            link=\${link}
            margin-bottom=\${marginBottom}
            sub-title=\${subTitle}
            title=\${title}
            @vl-click-back=\${onClickBack}
        >
            \${unsafeHTML(actionsSlot)}\${unsafeHTML(backSlot)}\${unsafeHTML(backLinkSlot)}\${unsafeHTML(subHeaderSlot)}
            \${unsafeHTML(subTitleSlot)}\${unsafeHTML(titleSlot)}\${unsafeHTML(topLeftSlot)}\${unsafeHTML(topRightSlot)}
        </vl-functional-header>
    \`)`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`story(functionalHeaderArgs, ({
  fullWidth,
  marginBottom,
  title,
  link
}) => html\`
        <vl-functional-header ?full-width=\${fullWidth} link=\${link} margin-bottom=\${marginBottom} title=\${title}>
            <vl-tabs
                slot="sub-header"
                disable-links
                within-functional-header
                active-tab="trein"
                @change=\${(event: CustomEvent) => action('change')(event.detail)}
            >
                <vl-tabs-pane id="trein" title="Trein"></vl-tabs-pane>
                <vl-tabs-pane id="metro" title="Metro, tram en bus"></vl-tabs-pane>
                <vl-tabs-pane id="fiets" title="Fiets"></vl-tabs-pane>
            </vl-tabs>
        </vl-functional-header>
    \`)`,...b.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`story(functionalHeaderArgs, ({
  fullWidth,
  marginBottom,
  title,
  link
}) => html\`
        <vl-functional-header
            ?full-width=\${fullWidth}
            link=\${link}
            margin-bottom=\${marginBottom}
            title=\${title}
            hide-back-link
        >
            <vl-breadcrumb slot="sub-title">
                <vl-breadcrumb-item href=\${'1'}>Vlaanderen Intern</vl-breadcrumb-item>
                <vl-breadcrumb-item href=\${'2'}>Regelgeving</vl-breadcrumb-item>
                <vl-breadcrumb-item href=\${'3'}>Webuniversum</vl-breadcrumb-item>
                <vl-breadcrumb-item>Componenten</vl-breadcrumb-item>
            </vl-breadcrumb>
        </vl-functional-header>
    \`)`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`story(functionalHeaderArgs, ({
  fullWidth,
  marginBottom,
  title,
  link
}) => html\`
        <vl-functional-header ?full-width=\${fullWidth} link=\${link} margin-bottom=\${marginBottom} title=\${title}>
            <span slot="sub-title">Full width</span>
        </vl-functional-header>
    \`)`,...h.parameters?.docs?.source}}};const ae=["FunctionalHeaderDefault","FunctionalHeaderActions","FunctionalHeaderSlots","FunctionalHeaderTabs","FunctionalHeaderBreadcrumb","FunctionalHeaderFullWidth"];export{c as FunctionalHeaderActions,m as FunctionalHeaderBreadcrumb,s as FunctionalHeaderDefault,h as FunctionalHeaderFullWidth,u as FunctionalHeaderSlots,b as FunctionalHeaderTabs,ae as __namedExportsOrder,te as default};
