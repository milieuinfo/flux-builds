import{K as t,L as i,Q as G,P as J,H as P,I as X,bT as B,u as w,j as n,C as v,bd as Y,s as L,x as T,r as Q,d as Z,f as q,g as ee,bU as ne,l as te}from"./iframe-C7eocPW2.js";import{o as c}from"./unsafe-html-DGst3qpG.js";import"./preload-helper-D9Z9MdNV.js";const{action:ae}=__STORYBOOK_MODULE_ACTIONS__,l={...X,back:"Terug",backLink:"document.referrer",disableBackLink:!1,fullWidth:!1,hideBackLink:!1,hideSubHeader:!1,link:"",marginBottom:"large",subTitle:"",title:"",actionsSlot:"",backSlot:"",backLinkSlot:"",sticky:!1,subHeaderSlot:"",subTitleSlot:"",titleSlot:"",topLeftSlot:"",topRightSlot:"",onClickBack:ae("vl-click-back")},ie={...P,back:{name:"back",description:"Tekst van de terug-link.",table:{type:{summary:i.STRING},category:t.ATTRIBUTES,defaultValue:{summary:l.back}}},backLink:{name:"back-link",description:"URL van de terug-link.",table:{type:{summary:i.URL},category:t.ATTRIBUTES,defaultValue:{summary:l.backLink}}},disableBackLink:{name:"disable-back-link",description:"Schakelt de terug-link uit. Dit zorgt ervoor dat de terug-link gerenderd wordt als button in plaats van als link.<br/><br/> **Let op**: indien je dit attribuut gebruikt, moet je zelf het event `vl-click-back` afhandelen. Het `back-link` attribuut wordt genegeerd indien dit attribuut gebruikt wordt.",table:{type:{summary:i.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(l.disableBackLink)}}},fullWidth:{name:"full-width",description:"Gebruik de volledige breedte van het scherm.",table:{type:{summary:i.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(l.fullWidth)}}},hideBackLink:{name:"hide-back-link",description:"Verbergt de terug link.<br>Dit attribuut is niet reactief.",table:{type:{summary:i.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(l.hideBackLink)}}},hideSubHeader:{name:"hide-sub-header",description:"Verbergt de sub header.",table:{type:{summary:i.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(l.hideSubHeader)}}},link:{name:"link",description:"URL van de titel-link.",table:{type:{summary:i.URL},category:t.ATTRIBUTES,defaultValue:{summary:l.link}}},marginBottom:{name:"margin-bottom",description:"De grootte van de margin onder de functional header.",control:{type:J.SELECT},options:[...Object.keys(B)],table:{type:{summary:G(Object.keys(B))},category:t.ATTRIBUTES,defaultValue:{summary:l.marginBottom}}},sticky:{name:"sticky",description:"Maakt de functional header sticky.",table:{type:{summary:i.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(l.sticky)}}},subTitle:{name:"sub-title",description:"Tekst van de subtitel.",table:{type:{summary:i.STRING},category:t.ATTRIBUTES,defaultValue:{summary:l.subTitle}}},title:{name:"title",description:"Tekst van de titel.",table:{type:{summary:i.STRING},category:t.ATTRIBUTES,defaultValue:{summary:l.title}}},actionsSlot:{name:"actions",description:"Acties die worden afgebeeld in de rechterbovenhoek.",table:{type:{summary:i.HTML},category:t.SLOTS}},backSlot:{name:"back",description:"Wordt afgebeeld ipv de tekst van de terug-link.<br>Kan niet in combinatie gebruikt worden met:<br>• back attribuut<br>• back-link slot<br>• sub-header slot",table:{type:{summary:i.HTML},category:t.SLOTS}},backLinkSlot:{name:"back-link",description:"Wordt afgebeeld ipv de terug-link.<br>Kan niet in combinatie gebruikt worden met:<br>• back attribuut<br>• back-link attribuut<br>• disable-back-link <br>• back slot<br>• sub-header slot",table:{type:{summary:i.HTML},category:t.SLOTS}},subHeaderSlot:{name:"sub-header",description:"Wordt afgebeeld onder de horizontale lijn.<br>Kan niet in combinatie gebruikt worden met:<br>• back attribuut<br>• back-link attribuut<br>• disable-back-link attribuut<br>• sub-title attribuut<br>• back slot<br>• back-link slot<br>• sub-title slot",table:{type:{summary:i.HTML},category:t.SLOTS}},subTitleSlot:{name:"sub-title",description:"Wordt afgebeeld ipv de tekst van de subtitel.<br>Kan niet in combinatie gebruikt worden met:<br>• sub-title<br>• sub-header slot",table:{type:{summary:i.HTML},category:t.SLOTS}},titleSlot:{name:"title",description:"Wordt afgebeeld ipv de tekst van de titel.<br>Kan niet in combinatie gebruikt worden met:<br>• title",table:{type:{summary:i.HTML},category:t.SLOTS}},topLeftSlot:{name:"top-left",description:"Wordt afgebeeld in de linkerbovenhoek.<br>Kan niet in combinatie gebruikt worden met:<br>• actions slot",table:{type:{summary:i.HTML},category:t.SLOTS}},topRightSlot:{name:"top-right",description:"Wordt afgebeeld in de rechterbovenhoek.<br>Kan niet in combinatie gebruikt worden met:<br>• actions slot",table:{type:{summary:i.HTML},category:t.SLOTS}},onClickBack:{name:"vl-click-back",description:"Afgevuurd na het klikken op de terug-link.",table:{type:{summary:"-"},category:t.EVENTS}}};function x(a){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...w(),...a.components},{FluxAlert:o,FluxComponentMetaData:r}=e;return o||M("FluxAlert"),r||M("FluxComponentMetaData"),n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"functional-header",children:"Functional Header"}),`
`,n.jsx(r,{id:"components-block-functional-header"}),`
`,n.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,n.jsxs(e.p,{children:["Gebruik de ",n.jsx(e.code,{children:"functional-header"}),` component om bovenaan de pagina generieke informatie te tonen zoals bijvoorbeeld
een titel en acties.`]}),`
`,n.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`import { VlFunctionalHeaderComponent } from '@domg-wc/components/block';
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<vl-functional-header></vl-functional-header>
`})}),`
`,n.jsx(v,{of:d}),`
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
`,n.jsx(e.h2,{id:"sticky-functional-header",children:"Sticky functional header"}),`
`,n.jsxs(e.p,{children:['Je kan de functional header "sticky" maken door het ',n.jsx(e.code,{children:"sticky"}),`-attribuut toe te voegen. Dit zorgt ervoor dat de header
bovenaan het scherm blijft plakken wanneer je naar beneden scrollt. Indien er een side navigation aanwezig is op de
pagina, houdt die rekening met de hoogte van de sticky functional header bij het bepalen van de scroll offset. Een
demo van deze opzet vind je hier: `,n.jsx(e.a,{href:"/docs/ontwerp-functional-header-voorbeeld-met-sticky-en-side-navigation--functional-header-sticky-with-side-navigation",children:"Voorbeeld Met Sticky En Side Navigation"}),"."]}),`
`,n.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,n.jsx(Y,{of:d}),`
`,n.jsx(e.h2,{id:"varianten",children:"Varianten"}),`
`,n.jsx(e.h3,{id:"met-acties",children:"Met acties"}),`
`,n.jsx(v,{of:u}),`
`,n.jsx(e.h3,{id:"met-slots",children:"Met slots"}),`
`,n.jsx(v,{of:b}),`
`,n.jsx(e.h3,{id:"met-tabs",children:"Met tabs"}),`
`,n.jsxs(e.p,{children:["Gebruik het ",n.jsx(e.a,{href:"/docs/components-block-tabs-tabs--documentatie",children:"vl-tabs"})," component in het ",n.jsx(e.code,{children:"sub-header"})," slot om tabs af te beelden binnen de ",n.jsx(e.code,{children:"functional-header"}),"."]}),`
`,n.jsx(o,{type:"info",children:"\n  Opgelet: het `vl-tabs` component moet in dit geval het attribuut `within-functional-header` meekrijgen.\n"}),`
`,n.jsx(v,{of:k}),`
`,n.jsx(e.h3,{id:"met-breadcrumb",children:"Met breadcrumb"}),`
`,n.jsxs(e.p,{children:["Gebruik de ",n.jsx(e.a,{href:"/docs/components-block-breadcrumb--breadcrumb-default",children:"vl-breadcrumb"})," component in het ",n.jsx(e.code,{children:"sub-title"}),` slot om een breadcrumb af te beelden binnen de
`,n.jsx(e.code,{children:"functional-header"}),".",n.jsx("br",{})," Plaats het ",n.jsx(e.code,{children:"hide-back-link"})," attribuut om de terug-link te verbergen."]}),`
`,n.jsx(v,{of:m}),`
`,n.jsx(e.h3,{id:"andere-patronen",children:"Andere patronen"}),`
`,n.jsxs(e.p,{children:["Zie ",n.jsx(e.a,{href:"/docs/ontwerp-functional-header-voorbeeld-met-button--documentatie",children:"Ontwerp/Functional Header"}),' voor voorbeelden van functional headers met een extra button of search component, of met de combinatie van "Terug"-link en tabs.']}),`
`,n.jsx(e.h2,{id:"referenties",children:"Referenties"}),`
`,n.jsx(e.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-functional-header",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Functional Header"})}),`
`,n.jsx(e.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-functional-header--default",rel:"nofollow",children:"Legacy Storybook - Functional Header"})}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlFunctionalHeader.html",rel:"nofollow",children:"Legacy Documentatie - Functional Header"})}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-functional-header.html",rel:"nofollow",children:"Legacy Demo  - Functional Header"})})]})}function le(a={}){const{wrapper:e}={...w(),...a.components};return e?n.jsx(e,{...a,children:n.jsx(x,{...a})}):x(a)}function M(a,e){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}const{action:R}=__STORYBOOK_MODULE_ACTIONS__;Q([Z,q,ee,ne,te]);const fe={id:"components-block-functional-header",title:"Components - Block/functional-header",tags:["autodocs"],args:l,argTypes:ie,parameters:{docs:{page:le}}},S=L(l,({back:a,backLink:e,disableBackLink:o,fullWidth:r,hideBackLink:$,hideSubHeader:A,link:C,marginBottom:F,subTitle:O,title:W,actionsSlot:E,backSlot:V,backLinkSlot:D,subHeaderSlot:N,subTitleSlot:I,titleSlot:U,topLeftSlot:_,topRightSlot:z,onClickBack:K})=>T`
        <vl-functional-header
            back=${a}
            back-link=${e}
            ?disable-back-link=${o}
            ?full-width=${r}
            ?hide-back-link=${$}
            ?hide-sub-header=${A}
            link=${C}
            margin-bottom=${F}
            sub-title=${O}
            title=${W}
            @vl-click-back=${K}
        >
            ${c(E)}${c(V)}${c(D)}${c(N)}
            ${c(I)}${c(U)}${c(_)}${c(z)}
        </vl-functional-header>
    `),H="Voor lager, middelbaar en hoger onderwijs",s="School- en studietoelagen",y="Terug",oe=`<div slot="actions">
        <a href="#">Actie 1</a>
        <a href="#">Actie 2</a>
    </div>`,re=`<span slot="back">${y}</span>`,se=`<a slot="back-link" href="#">${y}</a>`,ce='<span slot="sub-header">Sub header content</span>',j=`<span slot="sub-title">${H}</span>`,de=`<span slot="title">${s}</span>`,ue='<span slot="top-left">Linkerbovenhoek content</span>',be='<span slot="top-right">Rechterbovenhoek content</span>',d=S.bind({});d.storyName="vl-functional-header - default";d.args={subTitle:H,title:s};const u=S.bind({});u.storyName="vl-functional-header - actions";u.args={subTitle:H,title:s,actionsSlot:oe};const b=S.bind({});b.storyName="vl-functional-header - slots";b.args={backSlot:re,backLinkSlot:se,subHeaderSlot:ce,subTitleSlot:j,titleSlot:de,topLeftSlot:ue,topRightSlot:be};const k=L(l,({fullWidth:a,marginBottom:e,title:o,link:r})=>T`
        <vl-functional-header ?full-width=${a} link=${r} margin-bottom=${e} title=${o}>
            <vl-tabs
                slot="sub-header"
                disable-links
                within-functional-header
                active-tab="trein"
                @change=${$=>R("change")($.detail)}
            >
                <vl-tabs-pane id="trein" title="Trein"></vl-tabs-pane>
                <vl-tabs-pane id="metro" title="Metro, tram en bus"></vl-tabs-pane>
                <vl-tabs-pane id="fiets" title="Fiets"></vl-tabs-pane>
            </vl-tabs>
        </vl-functional-header>
    `);k.storyName="vl-functional-header - tabs";k.args={title:s};const m=L(l,({fullWidth:a,marginBottom:e,title:o,link:r})=>T`
        <vl-functional-header
            ?full-width=${a}
            link=${r}
            margin-bottom=${e}
            title=${o}
            hide-back-link
        >
            <vl-breadcrumb slot="sub-title">
                <vl-breadcrumb-item href=${"1"}>Vlaanderen Intern</vl-breadcrumb-item>
                <vl-breadcrumb-item href=${"2"}>Regelgeving</vl-breadcrumb-item>
                <vl-breadcrumb-item href=${"3"}>Webuniversum</vl-breadcrumb-item>
                <vl-breadcrumb-item>Componenten</vl-breadcrumb-item>
            </vl-breadcrumb>
        </vl-functional-header>
    `);m.storyName="vl-functional-header - breadcrumb";m.args={title:s};const h=L(l,({fullWidth:a,marginBottom:e,title:o,link:r})=>T`
        <vl-functional-header ?full-width=${a} link=${r} margin-bottom=${e} title=${o}>
            <span slot="sub-title">Full width</span>
        </vl-functional-header>
    `);h.storyName="vl-functional-header - full width";h.args={title:s,fullWidth:!0};const f=S.bind({});f.storyName="vl-functional-header - disable back link";f.args={title:s,subTitleSlot:j,back:y,disableBackLink:!0,onClickBack:a=>{a.preventDefault(),R("vl-click-back")(a)}};const g=S.bind({});g.storyName="vl-functional-header - hide back link";g.args={title:s,subTitleSlot:j,hideBackLink:!0};const p=S.bind({});p.storyName="vl-functional-header - hide sub header";p.args={title:s,hideSubHeader:!0};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`story(functionalHeaderArgs, ({
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
    \`)`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`story(functionalHeaderArgs, ({
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
    \`)`,...b.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`story(functionalHeaderArgs, ({
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
    \`)`,...k.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`story(functionalHeaderArgs, ({
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
    \`)`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`story(functionalHeaderArgs, ({
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
    \`)`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`story(functionalHeaderArgs, ({
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
    \`)`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`story(functionalHeaderArgs, ({
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
    \`)`,...p.parameters?.docs?.source}}};const ge=["FunctionalHeaderDefault","FunctionalHeaderActions","FunctionalHeaderSlots","FunctionalHeaderTabs","FunctionalHeaderBreadcrumb","FunctionalHeaderFullWidth","FunctionalHeaderDisableBackLink","FunctionalHeaderHideBackLink","FunctionalHeaderHideSubHeader"];export{u as FunctionalHeaderActions,m as FunctionalHeaderBreadcrumb,d as FunctionalHeaderDefault,f as FunctionalHeaderDisableBackLink,h as FunctionalHeaderFullWidth,g as FunctionalHeaderHideBackLink,p as FunctionalHeaderHideSubHeader,b as FunctionalHeaderSlots,k as FunctionalHeaderTabs,ge as __namedExportsOrder,fe as default};
