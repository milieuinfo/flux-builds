import{Z as t,_ as i,a2 as G,a1 as J,W as X,X as P,bW as x,u as C,j as n,C as T,bc as Y,s as $,x as L,r as Z,l as q,m as Q,n as ee,g as ne}from"./iframe-D9dm7PbY.js";import{o as d}from"./unsafe-html-DRRKv-ng.js";import{V as te}from"./vl-tabs.component-B13AjMd4.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-checkbox.component-CTssVSja.js";import"./vl-datepicker.component-BdyOMgdW.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-fieldset.component-BtuuUfav.js";import"./vl-input-field-masked.component-B41Wbgbh.js";import"./vl-radio.component-BJRVPCas.js";import"./vl-radio-group.component-BOLoNZwp.js";import"./vl-select.component-CVn7Sb7E.js";import"./vl-select-rich.component-BEDJuxRx.js";import"./vl-textarea.component-DoL2u81l.js";import"./vl-textarea-rich.component-CiD6zwd0.js";import"./vl-upload.component-anH3-fcY.js";import"./vl-upload-progress.component-BSxlhh7Y.js";const{action:ae}=__STORYBOOK_MODULE_ACTIONS__,l={...P,back:"Terug",backLink:"document.referrer",disableBackLink:!1,fullWidth:!1,hideBackLink:!1,hideSubHeader:!1,link:"",marginBottom:"large",subTitle:"",title:"",actionsSlot:"",backSlot:"",backLinkSlot:"",sticky:!1,subHeaderSlot:"",subTitleSlot:"",titleSlot:"",topLeftSlot:"",topRightSlot:"",skipToContentId:"",onClickBack:ae("vl-click-back")},ie={...X,back:{name:"back",description:"Tekst van de terug-link.",table:{type:{summary:i.STRING},category:t.ATTRIBUTES,defaultValue:{summary:l.back}}},backLink:{name:"back-link",description:"URL van de terug-link.",table:{type:{summary:i.URL},category:t.ATTRIBUTES,defaultValue:{summary:l.backLink}}},disableBackLink:{name:"disable-back-link",description:"Schakelt de terug-link uit. Dit zorgt ervoor dat de terug-link gerenderd wordt als button in plaats van als link.<br/><br/> **Let op**: indien je dit attribuut gebruikt, moet je zelf het event `vl-click-back` afhandelen. Het `back-link` attribuut wordt genegeerd indien dit attribuut gebruikt wordt.",table:{type:{summary:i.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(l.disableBackLink)}}},fullWidth:{name:"full-width",description:"Gebruik de volledige breedte van het scherm.",table:{type:{summary:i.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(l.fullWidth)}}},hideBackLink:{name:"hide-back-link",description:"Verbergt de terug link.<br>Dit attribuut is niet reactief.",table:{type:{summary:i.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(l.hideBackLink)}}},hideSubHeader:{name:"hide-sub-header",description:"Verbergt de sub header.",table:{type:{summary:i.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(l.hideSubHeader)}}},link:{name:"link",description:"URL van de titel-link.",table:{type:{summary:i.URL},category:t.ATTRIBUTES,defaultValue:{summary:l.link}}},marginBottom:{name:"margin-bottom",description:"De grootte van de margin onder de functional header.",control:{type:J.SELECT},options:[...Object.keys(x)],table:{type:{summary:G(Object.keys(x))},category:t.ATTRIBUTES,defaultValue:{summary:l.marginBottom}}},skipToContentId:{name:"skip-to-content-id",description:"Aanbevolen voor [toegankelijkheidsrichtlijn 2.4 Blokken omzeilen](/?path=/docs/richtlijnen-toegankelijkheid-aanpak-2-bedienbaar-2-4-navigeerbaar--documentatie#blokken-omzeilen). Vul hier de ID in van de eerste heading van de content.",table:{type:{summary:i.STRING},category:t.ATTRIBUTES,defaultValue:{summary:String(l.skipToContentId)}}},sticky:{name:"sticky",description:"Maakt de functional header sticky.",table:{type:{summary:i.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(l.sticky)}}},subTitle:{name:"sub-title",description:"Tekst van de subtitel.",table:{type:{summary:i.STRING},category:t.ATTRIBUTES,defaultValue:{summary:l.subTitle}}},title:{name:"title",description:"Tekst van de titel.",table:{type:{summary:i.STRING},category:t.ATTRIBUTES,defaultValue:{summary:l.title}}},actionsSlot:{name:"actions",description:"Acties die worden afgebeeld in de rechterbovenhoek.",table:{type:{summary:i.HTML},category:t.SLOTS}},backSlot:{name:"back",description:"Wordt afgebeeld ipv de tekst van de terug-link.<br>Kan niet in combinatie gebruikt worden met:<br>• back attribuut<br>• back-link slot<br>• sub-header slot",table:{type:{summary:i.HTML},category:t.SLOTS}},backLinkSlot:{name:"back-link",description:"Wordt afgebeeld ipv de terug-link.<br>Kan niet in combinatie gebruikt worden met:<br>• back attribuut<br>• back-link attribuut<br>• disable-back-link <br>• back slot<br>• sub-header slot",table:{type:{summary:i.HTML},category:t.SLOTS}},subHeaderSlot:{name:"sub-header",description:"Wordt afgebeeld onder de horizontale lijn.<br>Kan niet in combinatie gebruikt worden met:<br>• back attribuut<br>• back-link attribuut<br>• disable-back-link attribuut<br>• sub-title attribuut<br>• back slot<br>• back-link slot<br>• sub-title slot",table:{type:{summary:i.HTML},category:t.SLOTS}},subTitleSlot:{name:"sub-title",description:"Wordt afgebeeld ipv de tekst van de subtitel.<br>Kan niet in combinatie gebruikt worden met:<br>• sub-title<br>• sub-header slot",table:{type:{summary:i.HTML},category:t.SLOTS}},titleSlot:{name:"title",description:"Wordt afgebeeld ipv de tekst van de titel.<br>Kan niet in combinatie gebruikt worden met:<br>• title",table:{type:{summary:i.HTML},category:t.SLOTS}},topLeftSlot:{name:"top-left",description:"Wordt afgebeeld in de linkerbovenhoek.<br>Kan niet in combinatie gebruikt worden met:<br>• actions slot",table:{type:{summary:i.HTML},category:t.SLOTS}},topRightSlot:{name:"top-right",description:"Wordt afgebeeld in de rechterbovenhoek.<br>Kan niet in combinatie gebruikt worden met:<br>• actions slot",table:{type:{summary:i.HTML},category:t.SLOTS}},onClickBack:{name:"vl-click-back",description:"Afgevuurd na het klikken op de terug-link.",table:{type:{summary:"-"},category:t.EVENTS}}};function B(a){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...C(),...a.components},{FluxAlert:o,FluxComponentMetaData:r}=e;return o||M("FluxAlert"),r||M("FluxComponentMetaData"),n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"functional-header",children:"Functional Header"}),`
`,n.jsx(r,{id:"components-block-functional-header"}),`
`,n.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,n.jsxs(e.p,{children:["Gebruik de ",n.jsx(e.code,{children:"functional-header"}),` component om bovenaan de pagina generieke informatie te tonen zoals bijvoorbeeld
een titel en acties.`]}),`
`,n.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`import { VlFunctionalHeaderComponent } from '@domg-wc/components/block';
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<vl-functional-header></vl-functional-header>
`})}),`
`,n.jsx(T,{of:c}),`
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
demo van deze opzet vind je hier: `,n.jsx(e.a,{href:"/docs/patronen-navigatie-functionele-header-sticky-met-side-navigation--documentatie",children:"Voorbeeld Met Sticky En Side Navigation"}),"."]}),`
`,n.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,n.jsx(Y,{of:c}),`
`,n.jsx(e.h2,{id:"varianten",children:"Varianten"}),`
`,n.jsx(e.h3,{id:"met-acties",children:"Met acties"}),`
`,n.jsx(T,{of:b}),`
`,n.jsx(e.h3,{id:"met-slots",children:"Met slots"}),`
`,n.jsx(T,{of:k}),`
`,n.jsx(e.h3,{id:"met-tabs",children:"Met tabs"}),`
`,n.jsxs(e.p,{children:["Gebruik het ",n.jsx(e.a,{href:"/docs/components-block-tabs-tabs--documentatie",children:"vl-tabs"})," component in het ",n.jsx(e.code,{children:"sub-header"})," slot om tabs af te beelden binnen de ",n.jsx(e.code,{children:"functional-header"}),"."]}),`
`,n.jsx(o,{type:"info",children:"\n  Opgelet: het `vl-tabs` component moet in dit geval het attribuut `within-functional-header` meekrijgen.\n"}),`
`,n.jsx(T,{of:m}),`
`,n.jsx(e.h3,{id:"met-breadcrumb",children:"Met breadcrumb"}),`
`,n.jsxs(e.p,{children:["Gebruik de ",n.jsx(e.a,{href:"/docs/components-block-breadcrumb--breadcrumb-default",children:"vl-breadcrumb"})," component in het ",n.jsx(e.code,{children:"sub-title"}),` slot om een breadcrumb af te beelden binnen de
`,n.jsx(e.code,{children:"functional-header"}),".",n.jsx("br",{})," Plaats het ",n.jsx(e.code,{children:"hide-back-link"})," attribuut om de terug-link te verbergen."]}),`
`,n.jsx(T,{of:h}),`
`,n.jsx(e.h3,{id:"andere-patronen",children:"Andere patronen"}),`
`,n.jsxs(e.p,{children:["Zie ",n.jsx(e.a,{href:"/docs/patronen-navigatie-functionele-header-met-button--documentatie",children:"Patronen/Navigatie/Functionele Header"}),` voor voorbeelden
van functional headers met een extra button of search component, of met de combinatie van "Terug"-link en tabs.`]}),`
`,n.jsx(e.h2,{id:"toegankelijkheid",children:"Toegankelijkheid"}),`
`,n.jsxs(e.p,{children:["Vul steeds ",n.jsx(e.code,{children:"skip-to-content-id"}),` in. Kies hiervoor de ID van de eerste heading van de content.
Indien er uitzonderlijk geen headings zijn, kies dan voor de ID van de content zelf.
Indien deze ID's niet bestaan, moeten ze voorzien worden in de content.`]}),`
`,n.jsxs(e.p,{children:["Een ingevulde ",n.jsx(e.code,{children:"skip-to-content-id"}),` zorgt ervoor dat er een skip-link gerenderd wordt. Dit laat gebruikers toe om meteen
te skippen naar de content en de header over te slaan. Vooral voor screenreader-gebruikers vormt dit een grote
tijdswinst bij het navigeren. Ook voor andere gebruikers kan dit interessant zijn, daarom wordt deze link zichtbaar
bij focus.`]}),`
`,n.jsxs(e.p,{children:["Meer info vind je in de ",n.jsx(e.a,{href:"/docs/richtlijnen-toegankelijkheid-aanpak-2-bedienbaar-2-4-navigeerbaar--documentatie#blokken-omzeilen",children:'documentatie over toegankelijke navigatie: "Blokken omzeilen"'}),"."]}),`
`,n.jsx(e.h2,{id:"referenties",children:"Referenties"}),`
`,n.jsx(e.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-functional-header",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Functional Header"})})]})}function le(a={}){const{wrapper:e}={...C(),...a.components};return e?n.jsx(e,{...a,children:n.jsx(B,{...a})}):B(a)}function M(a,e){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}const{action:oe}=__STORYBOOK_MODULE_ACTIONS__;Z([q,Q,ee,te,ne]);const Ie={id:"components-block-functional-header",title:"Components - Block/functional-header",tags:["autodocs"],args:l,argTypes:ie,parameters:{docs:{page:le}}},v=$(l,({back:a,backLink:e,disableBackLink:o,fullWidth:r,hideBackLink:u,hideSubHeader:I,link:R,marginBottom:w,subTitle:A,title:O,actionsSlot:V,backSlot:W,backLinkSlot:F,subHeaderSlot:E,subTitleSlot:z,titleSlot:D,topLeftSlot:N,topRightSlot:U,skipToContentId:_,onClickBack:K})=>L`
        <vl-functional-header
            back=${a}
            back-link=${e}
            ?disable-back-link=${o}
            ?full-width=${r}
            ?hide-back-link=${u}
            ?hide-sub-header=${I}
            link=${R}
            margin-bottom=${w}
            sub-title=${A}
            title=${O}
            skip-to-content-id=${_}
            @vl-click-back=${K}
        >
            ${d(V)}${d(W)}${d(F)}${d(E)}
            ${d(z)}${d(D)}${d(N)}${d(U)}
        </vl-functional-header>
    `),H="Voor lager, middelbaar en hoger onderwijs",s="School- en studietoelagen",y="Terug",re=`<div slot="actions">
        <a href="#">Actie 1</a>
        <a href="#">Actie 2</a>
    </div>`,se=`<span slot="back">${y}</span>`,de=`<a slot="back-link" href="#">${y}</a>`,ce='<span slot="sub-header">Sub header content</span>',j=`<span slot="sub-title">${H}</span>`,ue=`<span slot="title">${s}</span>`,be='<span slot="top-left">Linkerbovenhoek content</span>',ke='<span slot="top-right">Rechterbovenhoek content</span>',c=v.bind({});c.storyName="vl-functional-header - default";c.args={subTitle:H,title:s};const b=v.bind({});b.storyName="vl-functional-header - actions";b.args={subTitle:H,title:s,actionsSlot:re};const k=v.bind({});k.storyName="vl-functional-header - slots";k.args={backSlot:se,backLinkSlot:de,subHeaderSlot:ce,subTitleSlot:j,titleSlot:ue,topLeftSlot:be,topRightSlot:ke};const m=$(l,({fullWidth:a,marginBottom:e,title:o,link:r,skipToContentId:u})=>L`
        <vl-functional-header
            ?full-width=${a}
            link=${r}
            margin-bottom=${e}
            title=${o}
            skip-to-content-id="${u}"
        >
            <vl-tabs-next slot="sub-header" horizontal-navigation label="Transportmiddelen">
                <vl-tab-link-next href="#trein">Trein</vl-tab-link-next>
                <vl-tab-link-next href="#metro">Metro, tram en bus</vl-tab-link-next>
                <vl-tab-link-next href="#fiets">Fiets</vl-tab-link-next>
            </vl-tabs-next>
        </vl-functional-header>
    `);m.storyName="vl-functional-header - tabs";m.args={title:s};const h=$(l,({fullWidth:a,marginBottom:e,title:o,link:r,skipToContentId:u})=>L`
        <vl-functional-header
            ?full-width=${a}
            link=${r}
            margin-bottom=${e}
            title=${o}
            skipToContentId=${u}
            hide-back-link
        >
            <vl-breadcrumb slot="sub-title">
                <vl-breadcrumb-item href=${"1"}>Vlaanderen Intern</vl-breadcrumb-item>
                <vl-breadcrumb-item href=${"2"}>Regelgeving</vl-breadcrumb-item>
                <vl-breadcrumb-item href=${"3"}>Webuniversum</vl-breadcrumb-item>
                <vl-breadcrumb-item>Componenten</vl-breadcrumb-item>
            </vl-breadcrumb>
        </vl-functional-header>
    `);h.storyName="vl-functional-header - breadcrumb";h.args={title:s};const p=$(l,({fullWidth:a,marginBottom:e,title:o,link:r,skipToContentId:u})=>L`
        <vl-functional-header
            ?full-width=${a}
            link=${r}
            margin-bottom=${e}
            title=${o}
            skip-to-content-id=${u}
        >
            <span slot="sub-title">Full width</span>
        </vl-functional-header>
    `);p.storyName="vl-functional-header - full width";p.args={title:s,fullWidth:!0};const f=v.bind({});f.storyName="vl-functional-header - disable back link";f.args={title:s,subTitleSlot:j,back:y,disableBackLink:!0,onClickBack:a=>{a.preventDefault(),oe("vl-click-back")(a)}};const g=v.bind({});g.storyName="vl-functional-header - hide back link";g.args={title:s,subTitleSlot:j,hideBackLink:!0};const S=v.bind({});S.storyName="vl-functional-header - hide sub header";S.args={title:s,hideSubHeader:!0};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`story(functionalHeaderArgs, ({
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
            title=\${title}
            skip-to-content-id=\${skipToContentId}
            @vl-click-back=\${onClickBack}
        >
            \${unsafeHTML(actionsSlot)}\${unsafeHTML(backSlot)}\${unsafeHTML(backLinkSlot)}\${unsafeHTML(subHeaderSlot)}
            \${unsafeHTML(subTitleSlot)}\${unsafeHTML(titleSlot)}\${unsafeHTML(topLeftSlot)}\${unsafeHTML(topRightSlot)}
        </vl-functional-header>
    \`)`,...c.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`story(functionalHeaderArgs, ({
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
            title=\${title}
            skip-to-content-id=\${skipToContentId}
            @vl-click-back=\${onClickBack}
        >
            \${unsafeHTML(actionsSlot)}\${unsafeHTML(backSlot)}\${unsafeHTML(backLinkSlot)}\${unsafeHTML(subHeaderSlot)}
            \${unsafeHTML(subTitleSlot)}\${unsafeHTML(titleSlot)}\${unsafeHTML(topLeftSlot)}\${unsafeHTML(topRightSlot)}
        </vl-functional-header>
    \`)`,...b.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`story(functionalHeaderArgs, ({
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
            title=\${title}
            skip-to-content-id=\${skipToContentId}
            @vl-click-back=\${onClickBack}
        >
            \${unsafeHTML(actionsSlot)}\${unsafeHTML(backSlot)}\${unsafeHTML(backLinkSlot)}\${unsafeHTML(subHeaderSlot)}
            \${unsafeHTML(subTitleSlot)}\${unsafeHTML(titleSlot)}\${unsafeHTML(topLeftSlot)}\${unsafeHTML(topRightSlot)}
        </vl-functional-header>
    \`)`,...k.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`story(functionalHeaderArgs, ({
  fullWidth,
  marginBottom,
  title,
  link,
  skipToContentId
}) => html\`
        <vl-functional-header
            ?full-width=\${fullWidth}
            link=\${link}
            margin-bottom=\${marginBottom}
            title=\${title}
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
  title,
  link,
  skipToContentId
}) => html\`
        <vl-functional-header
            ?full-width=\${fullWidth}
            link=\${link}
            margin-bottom=\${marginBottom}
            title=\${title}
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
  title,
  link,
  skipToContentId
}) => html\`
        <vl-functional-header
            ?full-width=\${fullWidth}
            link=\${link}
            margin-bottom=\${marginBottom}
            title=\${title}
            skip-to-content-id=\${skipToContentId}
        >
            <span slot="sub-title">Full width</span>
        </vl-functional-header>
    \`)`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`story(functionalHeaderArgs, ({
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
            title=\${title}
            skip-to-content-id=\${skipToContentId}
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
            title=\${title}
            skip-to-content-id=\${skipToContentId}
            @vl-click-back=\${onClickBack}
        >
            \${unsafeHTML(actionsSlot)}\${unsafeHTML(backSlot)}\${unsafeHTML(backLinkSlot)}\${unsafeHTML(subHeaderSlot)}
            \${unsafeHTML(subTitleSlot)}\${unsafeHTML(titleSlot)}\${unsafeHTML(topLeftSlot)}\${unsafeHTML(topRightSlot)}
        </vl-functional-header>
    \`)`,...g.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`story(functionalHeaderArgs, ({
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
            title=\${title}
            skip-to-content-id=\${skipToContentId}
            @vl-click-back=\${onClickBack}
        >
            \${unsafeHTML(actionsSlot)}\${unsafeHTML(backSlot)}\${unsafeHTML(backLinkSlot)}\${unsafeHTML(subHeaderSlot)}
            \${unsafeHTML(subTitleSlot)}\${unsafeHTML(titleSlot)}\${unsafeHTML(topLeftSlot)}\${unsafeHTML(topRightSlot)}
        </vl-functional-header>
    \`)`,...S.parameters?.docs?.source}}};const Re=["FunctionalHeaderDefault","FunctionalHeaderActions","FunctionalHeaderSlots","FunctionalHeaderTabs","FunctionalHeaderBreadcrumb","FunctionalHeaderFullWidth","FunctionalHeaderDisableBackLink","FunctionalHeaderHideBackLink","FunctionalHeaderHideSubHeader"];export{b as FunctionalHeaderActions,h as FunctionalHeaderBreadcrumb,c as FunctionalHeaderDefault,f as FunctionalHeaderDisableBackLink,p as FunctionalHeaderFullWidth,g as FunctionalHeaderHideBackLink,S as FunctionalHeaderHideSubHeader,k as FunctionalHeaderSlots,m as FunctionalHeaderTabs,Re as __namedExportsOrder,Ie as default};
