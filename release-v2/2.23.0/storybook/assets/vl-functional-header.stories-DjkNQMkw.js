import{cf as B,u as I,j as e,C as f,b4 as Y,b as $,A as M,r as Z,l as q,m as Q,n as ee,g as ne}from"./iframe-Cv28D2NX.js";import{C as t,T as i,b as te,d as ie,a as ae,g as le,s as j}from"./stories.helper-DYHi_5m6.js";import{o as s}from"./unsafe-html-7Tp0Sqh9.js";import{V as oe}from"./vl-tabs.component-DK-cBMq7.js";import"./preload-helper-PPVm8Dsz.js";import"./vl-checkbox.component-Cl-C3bHb.js";import"./vl-datepicker.component-gIhsylI-.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-fieldset.component-DAfAyWPV.js";import"./vl-input-field-masked.component-DrIBY--W.js";import"./vl-radio.component-BMGk1PbP.js";import"./vl-radio-group.component-BVQMwWW-.js";import"./vl-select.component-DAztbrd3.js";import"./vl-select-rich.component-Bt8ZFZBv.js";import"./vl-textarea.component-1SQHWSt5.js";import"./vl-textarea-rich.component-jUqK0iT2.js";import"./vl-upload.component-RSddKL9f.js";import"./vl-upload-progress.component-DOm2qrBt.js";const{action:re}=__STORYBOOK_MODULE_ACTIONS__,l={...ae,back:"Terug",backLink:"document.referrer",disableBackLink:!1,fullWidth:!1,hideBackLink:!1,hideSubHeader:!1,link:"",marginBottom:"large",subTitle:"",title:"",titleLabel:"",actionsSlot:"",backSlot:"",backLinkSlot:"",headingSlot:"",sticky:!1,subHeaderSlot:"",subTitleSlot:"",titleSlot:"",topLeftSlot:"",topRightSlot:"",skipToContentId:"",onClickBack:re("vl-click-back")},de={...ie,back:{name:"back",description:"Tekst van de terug-link.",table:{type:{summary:i.STRING},category:t.ATTRIBUTES,defaultValue:{summary:l.back}}},backLink:{name:"back-link",description:"URL van de terug-link.",table:{type:{summary:i.URL},category:t.ATTRIBUTES,defaultValue:{summary:l.backLink}}},disableBackLink:{name:"disable-back-link",description:"Schakelt de terug-link uit. Dit zorgt ervoor dat de terug-link gerenderd wordt als button in plaats van als link.<br/><br/> **Let op**: indien je dit attribuut gebruikt, moet je zelf het event `vl-click-back` afhandelen. Het `back-link` attribuut wordt genegeerd indien dit attribuut gebruikt wordt.",table:{type:{summary:i.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(l.disableBackLink)}}},fullWidth:{name:"full-width",description:"Gebruik de volledige breedte van het scherm.",table:{type:{summary:i.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(l.fullWidth)}}},hideBackLink:{name:"hide-back-link",description:"Verbergt de terug link.<br>Dit attribuut is niet reactief.",table:{type:{summary:i.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(l.hideBackLink)}}},hideSubHeader:{name:"hide-sub-header",description:"Verbergt de sub header.",table:{type:{summary:i.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(l.hideSubHeader)}}},link:{name:"link",description:"URL van de titel-link.",table:{type:{summary:i.URL},category:t.ATTRIBUTES,defaultValue:{summary:l.link}}},marginBottom:{name:"margin-bottom",description:"De grootte van de margin onder de functional header.",control:{type:te.SELECT},options:[...Object.keys(B)],table:{type:{summary:le(Object.keys(B))},category:t.ATTRIBUTES,defaultValue:{summary:l.marginBottom}}},skipToContentId:{name:"skip-to-content-id",description:"Aanbevolen voor [toegankelijkheidsrichtlijn 2.4 Blokken omzeilen](/?path=/docs/richtlijnen-toegankelijkheid-aanpak-2-bedienbaar-2-4-navigeerbaar--documentatie#blokken-omzeilen). Vul hier de ID in van de eerste heading van de content.",table:{type:{summary:i.STRING},category:t.ATTRIBUTES,defaultValue:{summary:String(l.skipToContentId)}}},sticky:{name:"sticky",description:"Maakt de functional header sticky.",table:{type:{summary:i.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(l.sticky)}}},subTitle:{name:"sub-title",description:"Tekst van de subtitel.",table:{type:{summary:i.STRING},category:t.ATTRIBUTES,defaultValue:{summary:l.subTitle}}},titleLabel:{name:"title-label",description:"Tekst van de titel.",table:{type:{summary:i.STRING},category:t.ATTRIBUTES,defaultValue:{summary:l.titleLabel}}},title:{name:"title",description:"**Deprecated** - gebruik `title-label`. Het standaard HTML `title`-attribuut toont een ongewenste native browser-tooltip. Bestaande `title`-waarden blijven werken (de tooltip wordt weggenomen), maar migreer best naar `title-label`.",table:{type:{summary:i.STRING},category:t.ATTRIBUTES,defaultValue:{summary:l.title}}},actionsSlot:{name:"actions",description:"Acties die worden afgebeeld in de rechterbovenhoek.",table:{type:{summary:i.HTML},category:t.SLOTS}},backSlot:{name:"back",description:"Wordt afgebeeld ipv de tekst van de terug-link.<br>Kan niet in combinatie gebruikt worden met:<br>• back attribuut<br>• back-link slot<br>• sub-header slot",table:{type:{summary:i.HTML},category:t.SLOTS}},backLinkSlot:{name:"back-link",description:"Wordt afgebeeld ipv de terug-link.<br>Kan niet in combinatie gebruikt worden met:<br>• back attribuut<br>• back-link attribuut<br>• disable-back-link <br>• back slot<br>• sub-header slot",table:{type:{summary:i.HTML},category:t.SLOTS}},headingSlot:{name:"heading",description:"Wordt afgebeeld ipv de standaard kop, dus inclusief het `h1`-element. Gebruik dit om de applicatietitel geen kop-rol te geven - best een `a`-element dat doorlinkt naar de startpagina of een andere logische plaats.<br>Kan niet in combinatie gebruikt worden met:<br>• title attribuut<br>• title-label attribuut<br>• link attribuut<br>• title slot",table:{type:{summary:i.HTML},category:t.SLOTS}},subHeaderSlot:{name:"sub-header",description:"Wordt afgebeeld onder de horizontale lijn.<br>Kan niet in combinatie gebruikt worden met:<br>• back attribuut<br>• back-link attribuut<br>• disable-back-link attribuut<br>• sub-title attribuut<br>• back slot<br>• back-link slot<br>• sub-title slot",table:{type:{summary:i.HTML},category:t.SLOTS}},subTitleSlot:{name:"sub-title",description:"Wordt afgebeeld ipv de tekst van de subtitel.<br>Kan niet in combinatie gebruikt worden met:<br>• sub-title<br>• sub-header slot",table:{type:{summary:i.HTML},category:t.SLOTS}},titleSlot:{name:"title",description:"Wordt afgebeeld ipv de tekst van de titel.<br>Kan niet in combinatie gebruikt worden met:<br>• title",table:{type:{summary:i.HTML},category:t.SLOTS}},topLeftSlot:{name:"top-left",description:"Wordt afgebeeld in de linkerbovenhoek.<br>Kan niet in combinatie gebruikt worden met:<br>• actions slot",table:{type:{summary:i.HTML},category:t.SLOTS}},topRightSlot:{name:"top-right",description:"Wordt afgebeeld in de rechterbovenhoek.<br>Kan niet in combinatie gebruikt worden met:<br>• actions slot",table:{type:{summary:i.HTML},category:t.SLOTS}},onClickBack:{name:"vl-click-back",description:"Afgevuurd na het klikken op de terug-link.",table:{type:{summary:"-"},category:t.EVENTS}}};function w(a){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...I(),...a.components},{FluxAlert:o,FluxComponentMetaData:r}=n;return o||C("FluxAlert"),r||C("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"functional-header",children:"Functional Header"}),`
`,e.jsx(r,{id:"components-block-functional-header"}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(n.p,{children:["Gebruik de ",e.jsx(n.code,{children:"functional-header"}),` component om bovenaan de pagina generieke informatie te tonen zoals bijvoorbeeld
een titel en acties.`]}),`
`,e.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { VlFunctionalHeaderComponent } from '@domg-wc/components/block';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-functional-header></vl-functional-header>
`})}),`
`,e.jsx(f,{of:c}),`
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
`,e.jsxs(n.p,{children:["Zet de titel met het ",e.jsx(n.code,{children:"title-label"}),`-attribuut. De titel is de naam van de applicatie; de paginatitel hoort in het
`,e.jsx(n.code,{children:"sub-title"}),"-attribuut of het ",e.jsx(n.code,{children:"sub-title"}),"-slot. De sub-titel is nooit de ",e.jsx(n.code,{children:"h1"})," van de pagina."]}),`
`,e.jsx(o,{type:"warning",children:"\n  Het standaard HTML `title`-attribuut wordt afgeraden: de browser toont het als native tooltip. Gebruik in\n  plaats daarvan `title-label`. Bestaande `title`-waarden blijven werken - de tooltip wordt automatisch\n  weggenomen - migreer naar `title-label`.\n"}),`
`,e.jsx(n.h3,{id:"kopniveau-van-de-titel",children:"Kopniveau van de titel"}),`
`,e.jsxs(n.p,{children:["De titel is standaard een ",e.jsx(n.code,{children:"h1"}),". Een pagina heeft maar een ",e.jsx(n.code,{children:"h1"}),`, dus staat die al in de content - bijvoorbeeld de
paginatitel - dan mag de applicatietitel geen kop zijn. Vervang de kop in dat geval via het `,e.jsx(n.code,{children:"heading"}),`-slot, best
door een `,e.jsx(n.code,{children:"a"}),"-element dat doorlinkt naar de startpagina of een andere logische plaats:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-functional-header sub-title="Paginatitel" skip-to-content-id="page-title">
    <a slot="heading" href="/">Naam applicatie</a>
</vl-functional-header>
`})}),`
`,e.jsxs(n.p,{children:["Het ",e.jsx(n.code,{children:"heading"}),"-slot vervangt de volledige kop, dus ook de titel-link: ",e.jsx(n.code,{children:"title-label"}),", ",e.jsx(n.code,{children:"link"})," en het ",e.jsx(n.code,{children:"title"}),`-slot
worden dan genegeerd. De component styleert het element in het slot als titel: kleur, grootte en gewicht liggen
vast, en een link krijgt enkel bij hover een onderlijning, zoals de titel met `,e.jsx(n.code,{children:"link"}),`. Een eigen stijl daarvoor wordt
genegeerd. Geneste markup bereikt de component niet - een link binnen een eigen kop (bv. `,e.jsx(n.code,{children:'<h2 slot="heading"><a ...>'}),`)
brengt dus zijn eigen styling mee.`]}),`
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(Y,{of:c}),`
`,e.jsx(n.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(n.h3,{id:"met-acties",children:"Met acties"}),`
`,e.jsx(f,{of:u}),`
`,e.jsx(n.h3,{id:"met-heading-slot",children:"Met heading slot"}),`
`,e.jsx(f,{of:k}),`
`,e.jsx(n.h3,{id:"met-slots",children:"Met slots"}),`
`,e.jsx(f,{of:h}),`
`,e.jsx(n.h3,{id:"met-tabs",children:"Met tabs"}),`
`,e.jsxs(n.p,{children:["Gebruik het ",e.jsx(n.a,{href:"/docs/components-block-tabs-tabs--documentatie",children:"vl-tabs"})," component in het ",e.jsx(n.code,{children:"sub-header"})," slot om tabs af te beelden binnen de ",e.jsx(n.code,{children:"functional-header"}),"."]}),`
`,e.jsx(o,{type:"info",children:"\n  Opgelet: het `vl-tabs` component moet in dit geval het attribuut `within-functional-header` meekrijgen.\n"}),`
`,e.jsx(f,{of:m}),`
`,e.jsx(n.h3,{id:"met-breadcrumb",children:"Met breadcrumb"}),`
`,e.jsxs(n.p,{children:["Gebruik de ",e.jsx(n.a,{href:"/docs/components-block-breadcrumb--breadcrumb-default",children:"vl-breadcrumb"})," component in het ",e.jsx(n.code,{children:"sub-title"}),` slot om een breadcrumb af te beelden binnen de
`,e.jsx(n.code,{children:"functional-header"}),".",e.jsx("br",{})," Plaats het ",e.jsx(n.code,{children:"hide-back-link"})," attribuut om de terug-link te verbergen."]}),`
`,e.jsx(f,{of:g}),`
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
`,e.jsxs(n.p,{children:["De skip link van ",e.jsx(n.a,{href:"/docs/components-compliance-next-header--documentatie",children:"vl-header-next"}),` springt op zijn beurt naar
deze component. Gebruik daarvoor `,e.jsx(n.code,{children:'skip-to-content-id="title"'}),`: zonder eigen kop staat die id op de titel, met een
eigen kop in het `,e.jsx(n.code,{children:"heading"}),"-slot op het blok met die kop."]}),`
`,e.jsxs(n.p,{children:["De tabvolgorde binnen de component is: ",e.jsx(n.code,{children:"top-left"}),"-slot, titel, skip link, ",e.jsx(n.code,{children:"top-right"}),`-slot, acties, terug-link. De
titel is enkel een tabstop wanneer er met `,e.jsx(n.code,{children:"link"})," een URL ingesteld is."]}),`
`,e.jsx(o,{type:"info",children:"\n  Plaats deze component binnen een `<main>`, `<section>`, `<article>` of `<aside>`, zodat\n  de interne `<header>` geen impliciete banner-role krijgt. De banner-role is voorbehouden voor\n  de globale `<vl-header>` en moet uniek zijn per pagina.\n"}),`
`,e.jsx(n.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(n.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/componenten/application-header",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Functional Header"})})]})}function se(a={}){const{wrapper:n}={...I(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(w,{...a})}):w(a)}function C(a,n){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}const{action:ce}=__STORYBOOK_MODULE_ACTIONS__;Z([q,Q,ee,oe,ne]);const Ve={id:"components-block-functional-header",title:"Components - Block/functional-header",tags:["autodocs"],args:l,argTypes:de,parameters:{docs:{page:se}}},p=j(l,({back:a,backLink:n,disableBackLink:o,fullWidth:r,hideBackLink:b,hideSubHeader:R,link:A,marginBottom:z,subTitle:O,title:V,titleLabel:D,actionsSlot:F,backSlot:W,backLinkSlot:E,headingSlot:N,subHeaderSlot:U,subTitleSlot:_,titleSlot:G,topLeftSlot:K,topRightSlot:J,skipToContentId:P,onClickBack:X})=>$`
        <vl-functional-header
            back=${a}
            back-link=${n}
            ?disable-back-link=${o}
            ?full-width=${r}
            ?hide-back-link=${b}
            ?hide-sub-header=${R}
            link=${A}
            margin-bottom=${z}
            sub-title=${O}
            title=${V||M}
            title-label=${D||M}
            skip-to-content-id=${P}
            @vl-click-back=${X}
        >
            ${s(F)}${s(W)}${s(E)}${s(N)}
            ${s(U)}${s(_)}${s(G)}${s(K)}
            ${s(J)}
        </vl-functional-header>
    `),H="Voor lager, middelbaar en hoger onderwijs",d="School- en studietoelagen",x="Terug",be=`<div slot="actions">
        <a href="#">Actie 1</a>
        <a href="#">Actie 2</a>
    </div>`,ue=`<span slot="back">${x}</span>`,ke=`<a slot="back-link" href="#">${x}</a>`,he=`<a slot="heading" href="/">${d}</a>`,me='<span slot="sub-header">Sub header content</span>',y=`<span slot="sub-title">${H}</span>`,ge=`<span slot="title">${d}</span>`,pe='<span slot="top-left">Linkerbovenhoek content</span>',fe='<span slot="top-right">Rechterbovenhoek content</span>',c=p.bind({});c.storyName="vl-functional-header - default";c.args={subTitle:H,titleLabel:d};const u=p.bind({});u.storyName="vl-functional-header - actions";u.args={subTitle:H,titleLabel:d,actionsSlot:be};const k=p.bind({});k.storyName="vl-functional-header - heading slot";k.args={subTitle:H,headingSlot:he};const h=p.bind({});h.storyName="vl-functional-header - slots";h.args={backSlot:ue,backLinkSlot:ke,subHeaderSlot:me,subTitleSlot:y,titleSlot:ge,topLeftSlot:pe,topRightSlot:fe};const m=j(l,({fullWidth:a,marginBottom:n,titleLabel:o,link:r,skipToContentId:b})=>$`
        <vl-functional-header
            ?full-width=${a}
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
    `);m.storyName="vl-functional-header - tabs";m.args={titleLabel:d};const g=j(l,({fullWidth:a,marginBottom:n,titleLabel:o,link:r,skipToContentId:b})=>$`
        <vl-functional-header
            ?full-width=${a}
            link=${r}
            margin-bottom=${n}
            title-label=${o}
            skip-to-content-id=${b}
            hide-back-link
        >
            <vl-breadcrumb slot="sub-title">
                <vl-breadcrumb-item href=${"1"}>Vlaanderen Intern</vl-breadcrumb-item>
                <vl-breadcrumb-item href=${"2"}>Regelgeving</vl-breadcrumb-item>
                <vl-breadcrumb-item href=${"3"}>Webuniversum</vl-breadcrumb-item>
                <vl-breadcrumb-item>Componenten</vl-breadcrumb-item>
            </vl-breadcrumb>
        </vl-functional-header>
    `);g.storyName="vl-functional-header - breadcrumb";g.args={titleLabel:d};const S=j(l,({fullWidth:a,marginBottom:n,titleLabel:o,link:r,skipToContentId:b})=>$`
        <vl-functional-header
            ?full-width=${a}
            link=${r}
            margin-bottom=${n}
            title-label=${o}
            skip-to-content-id=${b}
        >
            <span slot="sub-title">Full width</span>
        </vl-functional-header>
    `);S.storyName="vl-functional-header - full width";S.args={titleLabel:d,fullWidth:!0};const v=p.bind({});v.storyName="vl-functional-header - disable back link";v.args={titleLabel:d,subTitleSlot:y,back:x,disableBackLink:!0,onClickBack:a=>{a.preventDefault(),ce("vl-click-back")(a)}};const T=p.bind({});T.storyName="vl-functional-header - hide back link";T.args={titleLabel:d,subTitleSlot:y,hideBackLink:!0};const L=p.bind({});L.storyName="vl-functional-header - hide sub header";L.args={titleLabel:d,hideSubHeader:!0};const De=["FunctionalHeaderDefault","FunctionalHeaderActions","FunctionalHeaderHeadingSlot","FunctionalHeaderSlots","FunctionalHeaderTabs","FunctionalHeaderBreadcrumb","FunctionalHeaderFullWidth","FunctionalHeaderDisableBackLink","FunctionalHeaderHideBackLink","FunctionalHeaderHideSubHeader"];c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`story(functionalHeaderArgs, ({
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
  headingSlot,
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
            \${unsafeHTML(actionsSlot)}\${unsafeHTML(backSlot)}\${unsafeHTML(backLinkSlot)}\${unsafeHTML(headingSlot)}
            \${unsafeHTML(subHeaderSlot)}\${unsafeHTML(subTitleSlot)}\${unsafeHTML(titleSlot)}\${unsafeHTML(topLeftSlot)}
            \${unsafeHTML(topRightSlot)}
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
  headingSlot,
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
            \${unsafeHTML(actionsSlot)}\${unsafeHTML(backSlot)}\${unsafeHTML(backLinkSlot)}\${unsafeHTML(headingSlot)}
            \${unsafeHTML(subHeaderSlot)}\${unsafeHTML(subTitleSlot)}\${unsafeHTML(titleSlot)}\${unsafeHTML(topLeftSlot)}
            \${unsafeHTML(topRightSlot)}
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
  headingSlot,
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
            \${unsafeHTML(actionsSlot)}\${unsafeHTML(backSlot)}\${unsafeHTML(backLinkSlot)}\${unsafeHTML(headingSlot)}
            \${unsafeHTML(subHeaderSlot)}\${unsafeHTML(subTitleSlot)}\${unsafeHTML(titleSlot)}\${unsafeHTML(topLeftSlot)}
            \${unsafeHTML(topRightSlot)}
        </vl-functional-header>
    \`)`,...k.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`story(functionalHeaderArgs, ({
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
  headingSlot,
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
            \${unsafeHTML(actionsSlot)}\${unsafeHTML(backSlot)}\${unsafeHTML(backLinkSlot)}\${unsafeHTML(headingSlot)}
            \${unsafeHTML(subHeaderSlot)}\${unsafeHTML(subTitleSlot)}\${unsafeHTML(titleSlot)}\${unsafeHTML(topLeftSlot)}
            \${unsafeHTML(topRightSlot)}
        </vl-functional-header>
    \`)`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`story(functionalHeaderArgs, ({
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
    \`)`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`story(functionalHeaderArgs, ({
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
            hide-back-link
        >
            <vl-breadcrumb slot="sub-title">
                <vl-breadcrumb-item href=\${'1'}>Vlaanderen Intern</vl-breadcrumb-item>
                <vl-breadcrumb-item href=\${'2'}>Regelgeving</vl-breadcrumb-item>
                <vl-breadcrumb-item href=\${'3'}>Webuniversum</vl-breadcrumb-item>
                <vl-breadcrumb-item>Componenten</vl-breadcrumb-item>
            </vl-breadcrumb>
        </vl-functional-header>
    \`)`,...g.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`story(functionalHeaderArgs, ({
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
    \`)`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`story(functionalHeaderArgs, ({
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
  headingSlot,
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
            \${unsafeHTML(actionsSlot)}\${unsafeHTML(backSlot)}\${unsafeHTML(backLinkSlot)}\${unsafeHTML(headingSlot)}
            \${unsafeHTML(subHeaderSlot)}\${unsafeHTML(subTitleSlot)}\${unsafeHTML(titleSlot)}\${unsafeHTML(topLeftSlot)}
            \${unsafeHTML(topRightSlot)}
        </vl-functional-header>
    \`)`,...v.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`story(functionalHeaderArgs, ({
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
  headingSlot,
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
            \${unsafeHTML(actionsSlot)}\${unsafeHTML(backSlot)}\${unsafeHTML(backLinkSlot)}\${unsafeHTML(headingSlot)}
            \${unsafeHTML(subHeaderSlot)}\${unsafeHTML(subTitleSlot)}\${unsafeHTML(titleSlot)}\${unsafeHTML(topLeftSlot)}
            \${unsafeHTML(topRightSlot)}
        </vl-functional-header>
    \`)`,...T.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`story(functionalHeaderArgs, ({
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
  headingSlot,
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
            \${unsafeHTML(actionsSlot)}\${unsafeHTML(backSlot)}\${unsafeHTML(backLinkSlot)}\${unsafeHTML(headingSlot)}
            \${unsafeHTML(subHeaderSlot)}\${unsafeHTML(subTitleSlot)}\${unsafeHTML(titleSlot)}\${unsafeHTML(topLeftSlot)}
            \${unsafeHTML(topRightSlot)}
        </vl-functional-header>
    \`)`,...L.parameters?.docs?.source}}};export{u as FunctionalHeaderActions,g as FunctionalHeaderBreadcrumb,c as FunctionalHeaderDefault,v as FunctionalHeaderDisableBackLink,S as FunctionalHeaderFullWidth,k as FunctionalHeaderHeadingSlot,T as FunctionalHeaderHideBackLink,L as FunctionalHeaderHideSubHeader,h as FunctionalHeaderSlots,m as FunctionalHeaderTabs,De as __namedExportsOrder,Ve as default};
