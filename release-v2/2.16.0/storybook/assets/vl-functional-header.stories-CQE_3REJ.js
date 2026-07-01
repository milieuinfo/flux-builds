import{Z as t,_ as a,a2 as P,a1 as X,W as Y,X as Z,bV as x,u as C,j as e,C as T,b8 as q,s as L,T as B,x as $,r as Q,l as ee,m as ne,n as te,g as ae}from"./iframe-B0laZkYe.js";import{o as d}from"./unsafe-html-C_AhUnex.js";import{V as ie}from"./vl-tabs.component-CF5yJHaN.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-checkbox.component-Di7peM8v.js";import"./vl-datepicker.component-DlRL_EoA.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-fieldset.component-Bn8r0_Ra.js";import"./vl-input-field-masked.component-CxOJldmZ.js";import"./vl-radio.component-B0VzWM9w.js";import"./vl-radio-group.component-Bbvuqwo7.js";import"./vl-select.component-DvDVJX_H.js";import"./vl-select-rich.component-CrlR4fif.js";import"./vl-textarea.component-CKzynvyQ.js";import"./vl-textarea-rich.component-B47eK6zY.js";import"./vl-upload.component-DnznfWTr.js";import"./vl-upload-progress.component-nq3Nhojs.js";const{action:le}=__STORYBOOK_MODULE_ACTIONS__,l={...Z,back:"Terug",backLink:"document.referrer",disableBackLink:!1,fullWidth:!1,hideBackLink:!1,hideSubHeader:!1,link:"",marginBottom:"large",subTitle:"",title:"",titleLabel:"",actionsSlot:"",backSlot:"",backLinkSlot:"",sticky:!1,subHeaderSlot:"",subTitleSlot:"",titleSlot:"",topLeftSlot:"",topRightSlot:"",skipToContentId:"",onClickBack:le("vl-click-back")},oe={...Y,back:{name:"back",description:"Tekst van de terug-link.",table:{type:{summary:a.STRING},category:t.ATTRIBUTES,defaultValue:{summary:l.back}}},backLink:{name:"back-link",description:"URL van de terug-link.",table:{type:{summary:a.URL},category:t.ATTRIBUTES,defaultValue:{summary:l.backLink}}},disableBackLink:{name:"disable-back-link",description:"Schakelt de terug-link uit. Dit zorgt ervoor dat de terug-link gerenderd wordt als button in plaats van als link.<br/><br/> **Let op**: indien je dit attribuut gebruikt, moet je zelf het event `vl-click-back` afhandelen. Het `back-link` attribuut wordt genegeerd indien dit attribuut gebruikt wordt.",table:{type:{summary:a.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(l.disableBackLink)}}},fullWidth:{name:"full-width",description:"Gebruik de volledige breedte van het scherm.",table:{type:{summary:a.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(l.fullWidth)}}},hideBackLink:{name:"hide-back-link",description:"Verbergt de terug link.<br>Dit attribuut is niet reactief.",table:{type:{summary:a.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(l.hideBackLink)}}},hideSubHeader:{name:"hide-sub-header",description:"Verbergt de sub header.",table:{type:{summary:a.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(l.hideSubHeader)}}},link:{name:"link",description:"URL van de titel-link.",table:{type:{summary:a.URL},category:t.ATTRIBUTES,defaultValue:{summary:l.link}}},marginBottom:{name:"margin-bottom",description:"De grootte van de margin onder de functional header.",control:{type:X.SELECT},options:[...Object.keys(x)],table:{type:{summary:P(Object.keys(x))},category:t.ATTRIBUTES,defaultValue:{summary:l.marginBottom}}},skipToContentId:{name:"skip-to-content-id",description:"Aanbevolen voor [toegankelijkheidsrichtlijn 2.4 Blokken omzeilen](/?path=/docs/richtlijnen-toegankelijkheid-aanpak-2-bedienbaar-2-4-navigeerbaar--documentatie#blokken-omzeilen). Vul hier de ID in van de eerste heading van de content.",table:{type:{summary:a.STRING},category:t.ATTRIBUTES,defaultValue:{summary:String(l.skipToContentId)}}},sticky:{name:"sticky",description:"Maakt de functional header sticky.",table:{type:{summary:a.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(l.sticky)}}},subTitle:{name:"sub-title",description:"Tekst van de subtitel.",table:{type:{summary:a.STRING},category:t.ATTRIBUTES,defaultValue:{summary:l.subTitle}}},titleLabel:{name:"title-label",description:"Tekst van de titel.",table:{type:{summary:a.STRING},category:t.ATTRIBUTES,defaultValue:{summary:l.titleLabel}}},title:{name:"title",description:"**Deprecated** - gebruik `title-label`. Het standaard HTML `title`-attribuut toont een ongewenste native browser-tooltip. Bestaande `title`-waarden blijven werken (de tooltip wordt weggenomen), maar migreer best naar `title-label`.",table:{type:{summary:a.STRING},category:t.ATTRIBUTES,defaultValue:{summary:l.title}}},actionsSlot:{name:"actions",description:"Acties die worden afgebeeld in de rechterbovenhoek.",table:{type:{summary:a.HTML},category:t.SLOTS}},backSlot:{name:"back",description:"Wordt afgebeeld ipv de tekst van de terug-link.<br>Kan niet in combinatie gebruikt worden met:<br>• back attribuut<br>• back-link slot<br>• sub-header slot",table:{type:{summary:a.HTML},category:t.SLOTS}},backLinkSlot:{name:"back-link",description:"Wordt afgebeeld ipv de terug-link.<br>Kan niet in combinatie gebruikt worden met:<br>• back attribuut<br>• back-link attribuut<br>• disable-back-link <br>• back slot<br>• sub-header slot",table:{type:{summary:a.HTML},category:t.SLOTS}},subHeaderSlot:{name:"sub-header",description:"Wordt afgebeeld onder de horizontale lijn.<br>Kan niet in combinatie gebruikt worden met:<br>• back attribuut<br>• back-link attribuut<br>• disable-back-link attribuut<br>• sub-title attribuut<br>• back slot<br>• back-link slot<br>• sub-title slot",table:{type:{summary:a.HTML},category:t.SLOTS}},subTitleSlot:{name:"sub-title",description:"Wordt afgebeeld ipv de tekst van de subtitel.<br>Kan niet in combinatie gebruikt worden met:<br>• sub-title<br>• sub-header slot",table:{type:{summary:a.HTML},category:t.SLOTS}},titleSlot:{name:"title",description:"Wordt afgebeeld ipv de tekst van de titel.<br>Kan niet in combinatie gebruikt worden met:<br>• title",table:{type:{summary:a.HTML},category:t.SLOTS}},topLeftSlot:{name:"top-left",description:"Wordt afgebeeld in de linkerbovenhoek.<br>Kan niet in combinatie gebruikt worden met:<br>• actions slot",table:{type:{summary:a.HTML},category:t.SLOTS}},topRightSlot:{name:"top-right",description:"Wordt afgebeeld in de rechterbovenhoek.<br>Kan niet in combinatie gebruikt worden met:<br>• actions slot",table:{type:{summary:a.HTML},category:t.SLOTS}},onClickBack:{name:"vl-click-back",description:"Afgevuurd na het klikken op de terug-link.",table:{type:{summary:"-"},category:t.EVENTS}}};function M(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...C(),...i.components},{FluxAlert:o,FluxComponentMetaData:r}=n;return o||w("FluxAlert"),r||w("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"functional-header",children:"Functional Header"}),`
`,e.jsx(r,{id:"components-block-functional-header"}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(n.p,{children:["Gebruik de ",e.jsx(n.code,{children:"functional-header"}),` component om bovenaan de pagina generieke informatie te tonen zoals bijvoorbeeld
een titel en acties.`]}),`
`,e.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { VlFunctionalHeaderComponent } from '@domg-wc/components/block';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-functional-header></vl-functional-header>
`})}),`
`,e.jsx(T,{of:c}),`
`,e.jsx(n.h2,{id:"consistent-gebruik-van-de-terug-link",children:'Consistent gebruik van de "Terug"-link'}),`
`,e.jsx(n.p,{children:'De volgende richtlijnen gelden voor het instellen van de "Terug"-link:'}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Vermijd het gebruik van ",e.jsx(n.code,{children:"history.back()"}),". De gebruiker kan op verschillende manieren op je pagina beland zijn."]}),`
`,e.jsxs(n.li,{children:["Je moet expliciet een URL instellen.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`De ingestelde URL verwijst naar een vast en logisch startpunt,
relatief tov de pagina waarop de gebruiker zich bevindt.`}),`
`,e.jsx(n.li,{children:`Kies als URL het startpunt van de toepassing, tenzij deze meerdere luiken bevat. Kies in dat geval het startpunt
van het huidige luik.`}),`
`,e.jsxs(n.li,{children:['Je kan de URL van de "Terug"-link vervangen met het ',e.jsx(n.code,{children:"back-link"}),"-attribuut."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`"Terug" moet vermeden worden als naam, want het zegt niet naar waar je terugkeert.
Je kan de tekst van de "Terug"-link vervangen met het `,e.jsx(n.code,{children:"back"}),"-slot."]}),`
`,e.jsxs(n.li,{children:[`Indien de functional header "breadcrumbs" bevat ipv een "Terug"-link,
zoals in de `,e.jsx(n.a,{href:"#met-breadcrumb",children:"breadcrumbs variant"}),`, dan wijst de eerste link altijd naar het "startpunt" van de
toepassing. Vermijd termen als "Home" of "Start", maar gebruik de naam van de toepassing of de naam van het luik
waar je naar terugkeert.`]}),`
`,e.jsxs(n.li,{children:[`Vergeet de "Terug"-link ook niet in te stellen op de statische pagina's:
`,e.jsx(n.a,{href:"/docs/components-compliance-privacy--documentatie",children:"privacy"}),`,
`,e.jsx(n.a,{href:"/docs/components-compliance-accessibility--documentatie",children:"toegankelijkheid"}),` en
`,e.jsx(n.a,{href:"/docs/components-compliance-cookie-statement--documentatie",children:"cookieverklaring"}),`.
Je kan de standaard functional header in deze componenten vervangen
met het `,e.jsx(n.code,{children:"header"}),"-slot."]}),`
`,e.jsxs(n.li,{children:['Je kan de "Terug"-link in zijn geheel vervangen met het ',e.jsx(n.code,{children:"back-link"}),"-slot."]}),`
`]}),`
`,e.jsx(n.h2,{id:"sticky-functional-header",children:"Sticky functional header"}),`
`,e.jsxs(n.p,{children:['Je kan de functional header "sticky" maken door het ',e.jsx(n.code,{children:"sticky"}),`-attribuut toe te voegen. Dit zorgt ervoor dat de header
bovenaan het scherm blijft plakken wanneer je naar beneden scrollt. Indien er een side navigation aanwezig is op de
pagina, houdt die rekening met de hoogte van de sticky functional header bij het bepalen van de scroll offset. Een
demo van deze opzet vind je hier: `,e.jsx(n.a,{href:"/docs/patronen-navigatie-functionele-header-sticky-met-side-navigation--documentatie",children:"Voorbeeld Met Sticky En Side Navigation"}),"."]}),`
`,e.jsx(n.h2,{id:"titel",children:"Titel"}),`
`,e.jsxs(n.p,{children:["Zet de titel met het ",e.jsx(n.code,{children:"title-label"}),"-attribuut."]}),`
`,e.jsx(o,{type:"warning",children:"\n  Het standaard HTML `title`-attribuut wordt afgeraden: de browser toont het als native tooltip. Gebruik in\n  plaats daarvan `title-label`. Bestaande `title`-waarden blijven werken - de tooltip wordt automatisch\n  weggenomen - migreer naar `title-label`.\n"}),`
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(q,{of:c}),`
`,e.jsx(n.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(n.h3,{id:"met-acties",children:"Met acties"}),`
`,e.jsx(T,{of:u}),`
`,e.jsx(n.h3,{id:"met-slots",children:"Met slots"}),`
`,e.jsx(T,{of:k}),`
`,e.jsx(n.h3,{id:"met-tabs",children:"Met tabs"}),`
`,e.jsxs(n.p,{children:["Gebruik het ",e.jsx(n.a,{href:"/docs/components-block-tabs-tabs--documentatie",children:"vl-tabs"})," component in het ",e.jsx(n.code,{children:"sub-header"})," slot om tabs af te beelden binnen de ",e.jsx(n.code,{children:"functional-header"}),"."]}),`
`,e.jsx(o,{type:"info",children:"\n  Opgelet: het `vl-tabs` component moet in dit geval het attribuut `within-functional-header` meekrijgen.\n"}),`
`,e.jsx(T,{of:m}),`
`,e.jsx(n.h3,{id:"met-breadcrumb",children:"Met breadcrumb"}),`
`,e.jsxs(n.p,{children:["Gebruik de ",e.jsx(n.a,{href:"/docs/components-block-breadcrumb--breadcrumb-default",children:"vl-breadcrumb"})," component in het ",e.jsx(n.code,{children:"sub-title"}),` slot om een breadcrumb af te beelden binnen de
`,e.jsx(n.code,{children:"functional-header"}),".",e.jsx("br",{})," Plaats het ",e.jsx(n.code,{children:"hide-back-link"})," attribuut om de terug-link te verbergen."]}),`
`,e.jsx(T,{of:h}),`
`,e.jsx(n.h3,{id:"andere-patronen",children:"Andere patronen"}),`
`,e.jsxs(n.p,{children:["Zie ",e.jsx(n.a,{href:"/docs/patronen-navigatie-functionele-header-met-button--documentatie",children:"Patronen/Navigatie/Functionele Header"}),` voor voorbeelden
van functional headers met een extra button of search component, of met de combinatie van "Terug"-link en tabs.`]}),`
`,e.jsx(n.h2,{id:"toegankelijkheid",children:"Toegankelijkheid"}),`
`,e.jsxs(n.p,{children:["Vul steeds ",e.jsx(n.code,{children:"skip-to-content-id"}),` in. Kies hiervoor de ID van de eerste heading van de content.
Indien er uitzonderlijk geen headings zijn, kies dan voor de ID van de content zelf.
Indien deze ID's niet bestaan, moeten ze voorzien worden in de content.`]}),`
`,e.jsxs(n.p,{children:["Een ingevulde ",e.jsx(n.code,{children:"skip-to-content-id"}),` zorgt ervoor dat er een skip-link gerenderd wordt. Dit laat gebruikers toe om meteen
te skippen naar de content en de header over te slaan. Vooral voor screenreader-gebruikers vormt dit een grote
tijdswinst bij het navigeren. Ook voor andere gebruikers kan dit interessant zijn, daarom wordt deze link zichtbaar
bij focus.`]}),`
`,e.jsxs(n.p,{children:["Meer info vind je in de ",e.jsx(n.a,{href:"/docs/richtlijnen-toegankelijkheid-aanpak-2-bedienbaar-2-4-navigeerbaar--documentatie#blokken-omzeilen",children:'documentatie over toegankelijke navigatie: "Blokken omzeilen"'}),"."]}),`
`,e.jsx(o,{type:"info",children:"\n  Plaats deze component binnen een `<main>`, `<section>`, `<article>` of `<aside>`, zodat\n  de interne `<header>` geen impliciete banner-role krijgt. De banner-role is voorbehouden voor\n  de globale `<vl-header>` en moet uniek zijn per pagina.\n"}),`
`,e.jsx(n.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(n.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/componenten/application-header",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Functional Header"})})]})}function re(i={}){const{wrapper:n}={...C(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(M,{...i})}):M(i)}function w(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}const{action:se}=__STORYBOOK_MODULE_ACTIONS__;Q([ee,ne,te,ie,ae]);const Re={id:"components-block-functional-header",title:"Components - Block/functional-header",tags:["autodocs"],args:l,argTypes:oe,parameters:{docs:{page:re}}},v=L(l,({back:i,backLink:n,disableBackLink:o,fullWidth:r,hideBackLink:b,hideSubHeader:I,link:R,marginBottom:A,subTitle:V,title:O,titleLabel:z,actionsSlot:F,backSlot:W,backLinkSlot:E,subHeaderSlot:D,subTitleSlot:N,titleSlot:U,topLeftSlot:_,topRightSlot:G,skipToContentId:K,onClickBack:J})=>$`
        <vl-functional-header
            back=${i}
            back-link=${n}
            ?disable-back-link=${o}
            ?full-width=${r}
            ?hide-back-link=${b}
            ?hide-sub-header=${I}
            link=${R}
            margin-bottom=${A}
            sub-title=${V}
            title=${O||B}
            title-label=${z||B}
            skip-to-content-id=${K}
            @vl-click-back=${J}
        >
            ${d(F)}${d(W)}${d(E)}${d(D)}
            ${d(N)}${d(U)}${d(_)}${d(G)}
        </vl-functional-header>
    `),H="Voor lager, middelbaar en hoger onderwijs",s="School- en studietoelagen",j="Terug",de=`<div slot="actions">
        <a href="#">Actie 1</a>
        <a href="#">Actie 2</a>
    </div>`,ce=`<span slot="back">${j}</span>`,be=`<a slot="back-link" href="#">${j}</a>`,ue='<span slot="sub-header">Sub header content</span>',y=`<span slot="sub-title">${H}</span>`,ke=`<span slot="title">${s}</span>`,me='<span slot="top-left">Linkerbovenhoek content</span>',he='<span slot="top-right">Rechterbovenhoek content</span>',c=v.bind({});c.storyName="vl-functional-header - default";c.args={subTitle:H,titleLabel:s};const u=v.bind({});u.storyName="vl-functional-header - actions";u.args={subTitle:H,titleLabel:s,actionsSlot:de};const k=v.bind({});k.storyName="vl-functional-header - slots";k.args={backSlot:ce,backLinkSlot:be,subHeaderSlot:ue,subTitleSlot:y,titleSlot:ke,topLeftSlot:me,topRightSlot:he};const m=L(l,({fullWidth:i,marginBottom:n,titleLabel:o,link:r,skipToContentId:b})=>$`
        <vl-functional-header
            ?full-width=${i}
            link=${r}
            margin-bottom=${n}
            title-label=${o}
            skip-to-content-id="${b}"
        >
            <vl-tabs-next slot="sub-header" horizontal-navigation label="Transportmiddelen">
                <vl-tab-link-next href="#trein">Trein</vl-tab-link-next>
                <vl-tab-link-next href="#metro">Metro, tram en bus</vl-tab-link-next>
                <vl-tab-link-next href="#fiets">Fiets</vl-tab-link-next>
            </vl-tabs-next>
        </vl-functional-header>
    `);m.storyName="vl-functional-header - tabs";m.args={titleLabel:s};const h=L(l,({fullWidth:i,marginBottom:n,titleLabel:o,link:r,skipToContentId:b})=>$`
        <vl-functional-header
            ?full-width=${i}
            link=${r}
            margin-bottom=${n}
            title-label=${o}
            skipToContentId=${b}
            hide-back-link
        >
            <vl-breadcrumb slot="sub-title">
                <vl-breadcrumb-item href=${"1"}>Vlaanderen Intern</vl-breadcrumb-item>
                <vl-breadcrumb-item href=${"2"}>Regelgeving</vl-breadcrumb-item>
                <vl-breadcrumb-item href=${"3"}>Webuniversum</vl-breadcrumb-item>
                <vl-breadcrumb-item>Componenten</vl-breadcrumb-item>
            </vl-breadcrumb>
        </vl-functional-header>
    `);h.storyName="vl-functional-header - breadcrumb";h.args={titleLabel:s};const p=L(l,({fullWidth:i,marginBottom:n,titleLabel:o,link:r,skipToContentId:b})=>$`
        <vl-functional-header
            ?full-width=${i}
            link=${r}
            margin-bottom=${n}
            title-label=${o}
            skip-to-content-id=${b}
        >
            <span slot="sub-title">Full width</span>
        </vl-functional-header>
    `);p.storyName="vl-functional-header - full width";p.args={titleLabel:s,fullWidth:!0};const g=v.bind({});g.storyName="vl-functional-header - disable back link";g.args={titleLabel:s,subTitleSlot:y,back:j,disableBackLink:!0,onClickBack:i=>{i.preventDefault(),se("vl-click-back")(i)}};const f=v.bind({});f.storyName="vl-functional-header - hide back link";f.args={titleLabel:s,subTitleSlot:y,hideBackLink:!0};const S=v.bind({});S.storyName="vl-functional-header - hide sub header";S.args={titleLabel:s,hideSubHeader:!0};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`story(functionalHeaderArgs, ({
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
  titleLabel,
  actionsSlot,
  backSlot,
  backLinkSlot,
  subHeaderSlot,
  subTitleSlot,
  titleSlot,
  topLeftSlot,
  topRightSlot,
  skipToContentId,
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
            title=\${title || nothing}
            title-label=\${titleLabel || nothing}
            skip-to-content-id=\${skipToContentId}
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
  titleLabel,
  actionsSlot,
  backSlot,
  backLinkSlot,
  subHeaderSlot,
  subTitleSlot,
  titleSlot,
  topLeftSlot,
  topRightSlot,
  skipToContentId,
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
            title=\${title || nothing}
            title-label=\${titleLabel || nothing}
            skip-to-content-id=\${skipToContentId}
            @vl-click-back=\${onClickBack}
        >
            \${unsafeHTML(actionsSlot)}\${unsafeHTML(backSlot)}\${unsafeHTML(backLinkSlot)}\${unsafeHTML(subHeaderSlot)}
            \${unsafeHTML(subTitleSlot)}\${unsafeHTML(titleSlot)}\${unsafeHTML(topLeftSlot)}\${unsafeHTML(topRightSlot)}
        </vl-functional-header>
    \`)`,...u.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`story(functionalHeaderArgs, ({
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
  titleLabel,
  actionsSlot,
  backSlot,
  backLinkSlot,
  subHeaderSlot,
  subTitleSlot,
  titleSlot,
  topLeftSlot,
  topRightSlot,
  skipToContentId,
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
            title=\${title || nothing}
            title-label=\${titleLabel || nothing}
            skip-to-content-id=\${skipToContentId}
            @vl-click-back=\${onClickBack}
        >
            \${unsafeHTML(actionsSlot)}\${unsafeHTML(backSlot)}\${unsafeHTML(backLinkSlot)}\${unsafeHTML(subHeaderSlot)}
            \${unsafeHTML(subTitleSlot)}\${unsafeHTML(titleSlot)}\${unsafeHTML(topLeftSlot)}\${unsafeHTML(topRightSlot)}
        </vl-functional-header>
    \`)`,...k.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`story(functionalHeaderArgs, ({
  fullWidth,
  marginBottom,
  titleLabel,
  link,
  skipToContentId
}) => html\`
        <vl-functional-header
            ?full-width=\${fullWidth}
            link=\${link}
            margin-bottom=\${marginBottom}
            title-label=\${titleLabel}
            skip-to-content-id="\${skipToContentId}"
        >
            <vl-tabs-next slot="sub-header" horizontal-navigation label="Transportmiddelen">
                <vl-tab-link-next href="#trein">Trein</vl-tab-link-next>
                <vl-tab-link-next href="#metro">Metro, tram en bus</vl-tab-link-next>
                <vl-tab-link-next href="#fiets">Fiets</vl-tab-link-next>
            </vl-tabs-next>
        </vl-functional-header>
    \`)`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`story(functionalHeaderArgs, ({
  fullWidth,
  marginBottom,
  titleLabel,
  link,
  skipToContentId
}) => html\`
        <vl-functional-header
            ?full-width=\${fullWidth}
            link=\${link}
            margin-bottom=\${marginBottom}
            title-label=\${titleLabel}
            skipToContentId=\${skipToContentId}
            hide-back-link
        >
            <vl-breadcrumb slot="sub-title">
                <vl-breadcrumb-item href=\${'1'}>Vlaanderen Intern</vl-breadcrumb-item>
                <vl-breadcrumb-item href=\${'2'}>Regelgeving</vl-breadcrumb-item>
                <vl-breadcrumb-item href=\${'3'}>Webuniversum</vl-breadcrumb-item>
                <vl-breadcrumb-item>Componenten</vl-breadcrumb-item>
            </vl-breadcrumb>
        </vl-functional-header>
    \`)`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`story(functionalHeaderArgs, ({
  fullWidth,
  marginBottom,
  titleLabel,
  link,
  skipToContentId
}) => html\`
        <vl-functional-header
            ?full-width=\${fullWidth}
            link=\${link}
            margin-bottom=\${marginBottom}
            title-label=\${titleLabel}
            skip-to-content-id=\${skipToContentId}
        >
            <span slot="sub-title">Full width</span>
        </vl-functional-header>
    \`)`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`story(functionalHeaderArgs, ({
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
  titleLabel,
  actionsSlot,
  backSlot,
  backLinkSlot,
  subHeaderSlot,
  subTitleSlot,
  titleSlot,
  topLeftSlot,
  topRightSlot,
  skipToContentId,
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
            title=\${title || nothing}
            title-label=\${titleLabel || nothing}
            skip-to-content-id=\${skipToContentId}
            @vl-click-back=\${onClickBack}
        >
            \${unsafeHTML(actionsSlot)}\${unsafeHTML(backSlot)}\${unsafeHTML(backLinkSlot)}\${unsafeHTML(subHeaderSlot)}
            \${unsafeHTML(subTitleSlot)}\${unsafeHTML(titleSlot)}\${unsafeHTML(topLeftSlot)}\${unsafeHTML(topRightSlot)}
        </vl-functional-header>
    \`)`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`story(functionalHeaderArgs, ({
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
  titleLabel,
  actionsSlot,
  backSlot,
  backLinkSlot,
  subHeaderSlot,
  subTitleSlot,
  titleSlot,
  topLeftSlot,
  topRightSlot,
  skipToContentId,
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
            title=\${title || nothing}
            title-label=\${titleLabel || nothing}
            skip-to-content-id=\${skipToContentId}
            @vl-click-back=\${onClickBack}
        >
            \${unsafeHTML(actionsSlot)}\${unsafeHTML(backSlot)}\${unsafeHTML(backLinkSlot)}\${unsafeHTML(subHeaderSlot)}
            \${unsafeHTML(subTitleSlot)}\${unsafeHTML(titleSlot)}\${unsafeHTML(topLeftSlot)}\${unsafeHTML(topRightSlot)}
        </vl-functional-header>
    \`)`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`story(functionalHeaderArgs, ({
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
  titleLabel,
  actionsSlot,
  backSlot,
  backLinkSlot,
  subHeaderSlot,
  subTitleSlot,
  titleSlot,
  topLeftSlot,
  topRightSlot,
  skipToContentId,
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
            title=\${title || nothing}
            title-label=\${titleLabel || nothing}
            skip-to-content-id=\${skipToContentId}
            @vl-click-back=\${onClickBack}
        >
            \${unsafeHTML(actionsSlot)}\${unsafeHTML(backSlot)}\${unsafeHTML(backLinkSlot)}\${unsafeHTML(subHeaderSlot)}
            \${unsafeHTML(subTitleSlot)}\${unsafeHTML(titleSlot)}\${unsafeHTML(topLeftSlot)}\${unsafeHTML(topRightSlot)}
        </vl-functional-header>
    \`)`,...S.parameters?.docs?.source}}};const Ae=["FunctionalHeaderDefault","FunctionalHeaderActions","FunctionalHeaderSlots","FunctionalHeaderTabs","FunctionalHeaderBreadcrumb","FunctionalHeaderFullWidth","FunctionalHeaderDisableBackLink","FunctionalHeaderHideBackLink","FunctionalHeaderHideSubHeader"];export{u as FunctionalHeaderActions,h as FunctionalHeaderBreadcrumb,c as FunctionalHeaderDefault,g as FunctionalHeaderDisableBackLink,p as FunctionalHeaderFullWidth,f as FunctionalHeaderHideBackLink,S as FunctionalHeaderHideSubHeader,k as FunctionalHeaderSlots,m as FunctionalHeaderTabs,Ae as __namedExportsOrder,Re as default};
