"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[967],{"../../libs/sections/src/accessibility/stories/vl-accessibility.stories.ts":(e,i,a)=>{a.r(i),a.d(i,{AccessibilityDefault:()=>R,AccessibilityHeaderSlot:()=>I,__namedExportsOrder:()=>C,default:()=>z});var t=a("../../node_modules/lit-html/lit-html.js"),n=a("../../node_modules/lit/directives/unsafe-html.js"),l=a("../../libs/common/utilities/src/index.ts"),s=a("../../libs/components/src/index.ts"),o=a("../../libs/elements/src/index.ts"),d=a("../../node_modules/lit/index.js"),r=a("../../node_modules/lit/decorators.js");let c=({evaluation:e,date:i,dateModified:a})=>(0,d.qy)` <div id="setup-accessibility-statement" is="vl-column" data-vl-size="12" data-vl-medium-size="12">
        <h2 is="vl-h2">Opstelling van deze toegankelijkheidsverklaring</h2>
        <p>${(()=>{switch(e){case"EXPERT_EVALUATED":return(0,d.qy)`Deze toegankelijkheidsverklaring is opgesteld op ${i} en gebaseerd op een analyse van een
                web accessibility specialist, gecertificeerd door the International Association of Accessibility
                Professionals (IAAP). Deze toegankelijkheidsverklaring is voor het laatst herzien op ${a}.`;case"SELF_EVALUATED":return(0,d.qy)`Deze toegankelijkheidsverklaring is opgesteld op ${i} en gebaseerd op een analyse van
                Departement Omgeving. Deze toegankelijkheidsverklaring is voor het laatst herzien op ${a}.`;case"NOT_EVALUATED":return(0,d.qy)`Deze toegankelijkheidsverklaring is opgesteld op ${i} en werd voor het laatst herzien op
                ${a}.`;default:return null}})()}</p>
    </div>`,v=({compliance:e,evaluation:i,limitations:a})=>(0,d.qy)` <div
        style=${"FULLY_COMPLIANT"===e&&"display: none"}
        id="inaccessible-content"
        is="vl-column"
        data-vl-size="12"
        data-vl-medium-size="12"
    >
        <h2 is="vl-h2">Niet-toegankelijke inhoud</h2>
        ${"NOT_EVALUATED"===i?(0,d.qy)`De niet-toegankelijke inhoud is onbekend omdat de website niet is getest.`:"FULLY_COMPLIANT"===e?(0,d.qy)`Er is geen niet-toegankelijke inhoud omdat de website volledig toegankelijk is.`:(0,d.qy)`
            <vl-typography>
                <p>De onderstaande inhoud is niet-toegankelijk om de volgende reden(en):</p>
                ${a&&a.withTiming&&(0,d.qy)`<h3>Niet-naleving van het bestuursdecreet</h3>
                    <ul>
                        ${a.withTiming.map(e=>(0,d.qy)` <li><p>${e}</p></li>`)}
                    </ul>`}
                ${a&&a.withoutTiming&&(0,d.qy)`<h3>Onevenredige last</h3>
                    <ul>
                        ${a.withoutTiming.map(e=>(0,d.qy)` <li><p>${e}</p></li>`)}
                    </ul>`}
                ${a&&a.outsideApplicableLaw&&(0,d.qy)`<h3>De inhoud valt buiten de werkingssfeer van de toepasselijke wetgeving</h3>
                    <ul>
                        ${a.outsideApplicableLaw.map(e=>(0,d.qy)` <li><p>${e}</p></li>`)}
                    </ul>`}
            </vl-typography>
        `}
    </div>`,p=({compliance:e})=>(0,d.qy)` <div
        is="vl-column"
        data-vl-size="4"
        data-vl-medium-size="4"
        data-vl-small-size="4"
        data-vl-extra-small-size="0"
    >
        <nav is="vl-side-navigation" id="side-nav-accessibility" aria-label="inhoudsopgave">
            <h1 is="vl-side-navigation-h1">Op deze pagina</h1>
            <div is="vl-side-navigation-content">
                <ul is="vl-side-navigation-group">
                    <li is="vl-side-navigation-item" data-vl-parent>
                        <a is="vl-side-navigation-toggle" href="#compliance-status">
                            Nalevingsstatus
                            <i class="vl-vi vl-vi-arrow-right-fat"></i>
                        </a>
                    </li>
                    <li
                        style=${"FULLY_COMPLIANT"===e&&"display: none"}
                        is="vl-side-navigation-item"
                        data-vl-parent
                    >
                        <a is="vl-side-navigation-toggle" href="#inaccessible-content">
                            Niet-toegankelijke inhoud
                            <i class="vl-vi vl-vi-arrow-right-fat"></i>
                        </a>
                    </li>
                    <li is="vl-side-navigation-item" data-vl-parent>
                        <a is="vl-side-navigation-toggle" href="#setup-accessibility-statement">
                            Opstelling van deze toegankelijkheidsverklaring
                            <i class="vl-vi vl-vi-arrow-right-fat"></i>
                        </a>
                    </li>
                    <li is="vl-side-navigation-item" data-vl-parent>
                        <a is="vl-side-navigation-toggle" href="#feedback-contact">
                            Feedback en contactgegevens
                            <i class="vl-vi vl-vi-arrow-right-fat"></i>
                        </a>
                    </li>
                    <li is="vl-side-navigation-item" data-vl-parent>
                        <a is="vl-side-navigation-toggle" href="#enforcement-procedure">
                            Handhavingsprocedure
                            <i class="vl-vi vl-vi-arrow-right-fat"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>`,m=()=>(0,d.qy)`<a is="vl-link" href="https://www.w3.org/TR/WCAG21" target="_blank" data-vl-inline>
    Web Content Accessibility Guidelines versie 2.1 niveau AA<span
        is="vl-icon"
        data-vl-icon="external"
        data-vl-after
        data-vl-light
    ></span
></a>`,u=({compliance:e,evaluation:i})=>(0,d.qy)` <div id="compliance-status" is="vl-column" data-vl-size="12" data-vl-medium-size="12">
        <h2 is="vl-h2">Nalevingsstatus</h2>
        ${"NOT_EVALUATED"===i?(0,d.qy)`Deze website voldoet niet aan de ${m()}.`:(()=>{switch(e){case"FULLY_COMPLIANT":return(0,d.qy)`Deze website voldoet volledig aan de ${m()}.`;case"PARTIALLY_COMPLIANT":return(0,d.qy)`Deze website voldoet gedeeltelijk aan de ${m()} omdat nog niet aan de onderstaande
                eisen is voldaan.`;case"NOT_COMPLIANT":return(0,d.qy)`Deze website voldoet niet aan de ${m()} omdat nog niet aan de onderstaande eisen is
                voldaan.`;default:return null}})()}
    </div>`,g=()=>[o.Q1,o.zY,o.dI,o.xC,o.D,o.nJ,s.Y4,s.Pq,o.Lp,o.mR,o.io,o.RC,o.yF,o.xf],h=({application:e,compliance:i,date:a,dateModified:t,evaluation:n,limitations:l})=>(0,d.qy)` <section id="content" is="vl-region">
        <div is="vl-layout">
            <div is="vl-grid" data-vl-is-stacked>
                <div
                    is="vl-column"
                    data-vl-size="8"
                    data-vl-medium-size="8"
                    data-vl-small-size="8"
                    data-vl-extra-small-size="12"
                >
                    <div is="vl-side-navigation-reference" data-vl--scrollspy-content>
                        <div is="vl-grid" data-vl-is-stacked-large>
                            <div is="vl-column" data-vl-size="12" data-vl-medium-size="12">
                                <p>
                                    De Vlaamse overheid streeft ernaar haar websites en mobiele applicaties toegankelijk
                                    te maken, overeenkomstig het
                                    <a
                                        is="vl-link"
                                        href="http://www.ejustice.just.fgov.be/cgi_loi/loi_a1.pl?language=nl&cn=2018120705&table_name=wet&caller=list&fromtab=wet#LNK0011"
                                        target="_blank"
                                        data-vl-inline
                                        >bestuursdecreet van 7 december 2018<span
                                            is="vl-icon"
                                            data-vl-icon="external"
                                            data-vl-after
                                            data-vl-light
                                        ></span
                                    ></a>
                                    waarmee de
                                    <a
                                        is="vl-link"
                                        href="https://eur-lex.europa.eu/legal-content/NL/TXT/?uri=uriserv:OJ.L_.2016.327.01.0001.01.NLD&toc=OJ:L:2016:327:TOC"
                                        target="_blank"
                                        data-vl-inline
                                        >Europese Richtlijn 2016/2102<span
                                            is="vl-icon"
                                            data-vl-icon="external"
                                            data-vl-after
                                            data-vl-light
                                        ></span
                                    ></a>
                                    is omgezet.
                                </p>
                                <br />
                                <p>Deze toegankelijkheidsverklaring is van toepassing op ${e}.</p>
                            </div>
                            ${u({compliance:i,evaluation:n})}
                            ${v({compliance:i,evaluation:n,limitations:l})}
                            ${c({evaluation:n,date:a,dateModified:t})}
                            <div id="feedback-contact" is="vl-column" data-vl-size="12" data-vl-medium-size="12">
                                <h2 is="vl-h2">Feedback en contactgegevens</h2>
                                <p>
                                    Ondervindt u problemen en wenst u hulp bij het vinden van informatie of het
                                    uitvoeren van een actie? Hebt u een vraag of opmerking over de toegankelijkheid van
                                    deze website of toepassing, of over deze toegankelijkheidsverklaring? Neem contact
                                    op met Departement Omgeving.
                                </p>
                                <br />
                                <vl-contact-card id="contact-card-1">
                                    <vl-infoblock slot="info" data-vl-type="contact">
                                        <h3 slot="title">Departement Omgeving</h3>
                                    </vl-infoblock>
                                    <vl-properties slot="properties">
                                        <dl is="vl-properties-list">
                                            <dt is="vl-property-term">Adres</dt>
                                            <dd is="vl-property-value">Havenlaan 88<br />1000 Brussel<br />België</dd>
                                            <dt is="vl-property-term">Telefoon</dt>
                                            <dd is="vl-property-value">
                                                <p>
                                                    <a is="vl-link" href="tel:02 553 80 11"
                                                        >02 553 80 11<span
                                                            is="vl-icon"
                                                            data-vl-icon="phone"
                                                            data-vl-after
                                                        ></span
                                                    ></a>
                                                </p>
                                            </dd>
                                            <dt is="vl-property-term">E-mail</dt>
                                            <dd is="vl-property-value">
                                                <a is="vl-link" href="mailto:omgeving@vlaanderen.be"
                                                    >omgeving@vlaanderen.be<span
                                                        is="vl-icon"
                                                        data-vl-icon="mail"
                                                        data-vl-after
                                                    ></span
                                                ></a>
                                            </dd>
                                        </dl>
                                    </vl-properties>
                                </vl-contact-card>
                            </div>
                            <div id="enforcement-procedure" is="vl-column" data-vl-size="12" data-vl-medium-size="12">
                                <h2 is="vl-h2">Handhavingsprocedure</h2>
                                <p>
                                    Heeft u contact opgenomen via omgeving@vlaanderen.be maar bent u niet tevreden met
                                    het antwoord? Stuur dan uw klacht naar de klachtenbehandelaar van Departement
                                    Omgeving.
                                </p>
                                <br />
                                <vl-contact-card id="contact-card-2">
                                    <vl-infoblock slot="info" data-vl-type="contact">
                                        <h3 slot="title">Klachtenbehandelaar</h3>
                                    </vl-infoblock>
                                    <vl-properties slot="properties">
                                        <dl is="vl-properties-list">
                                            <dt is="vl-property-term">Adres</dt>
                                            <dd is="vl-property-value">Havenlaan 88<br />1000 Brussel<br />België</dd>
                                            <dt is="vl-property-term">E-mail</dt>
                                            <dd is="vl-property-value">
                                                <a is="vl-link" href="mailto:klachten.omgeving@vlaanderen.be"
                                                    >klachten.omgeving@vlaanderen.be<span
                                                        is="vl-icon"
                                                        data-vl-icon="mail"
                                                        data-vl-after
                                                    ></span
                                                ></a>
                                            </dd>
                                        </dl>
                                    </vl-properties>
                                </vl-contact-card>
                                <br />
                                <p>
                                    Heeft u contact opgenomen met de klachtenbehandelaar van het Departement Omgeving,
                                    maar bent u niet tevreden met het antwoord? Stuur dan uw klacht naar de Vlaamse
                                    Ombudsdienst.
                                </p>
                                <br />
                                <vl-contact-card id="contact-card-3">
                                    <vl-infoblock slot="info" data-vl-type="contact">
                                        <h3 slot="title">Vlaamse ombudsdienst</h3>
                                    </vl-infoblock>
                                    <vl-properties slot="properties">
                                        <dl is="vl-properties-list">
                                            <dt is="vl-property-term">Adres</dt>
                                            <dd is="vl-property-value">Leuvenseweg 86<br />1000 Brussel<br />België</dd>
                                            <dt is="vl-property-term">Telefoon</dt>
                                            <dd is="vl-property-value">
                                                <p>
                                                    <a is="vl-link" href="tel:08 002 40 50"
                                                        >08 002 40 50<span
                                                            is="vl-icon"
                                                            data-vl-icon="phone"
                                                            data-vl-after=""
                                                        ></span
                                                    ></a>
                                                </p>
                                            </dd>
                                            <dt is="vl-property-term">E-mail</dt>
                                            <dd is="vl-property-value">
                                                <a is="vl-link" href="mailto:klachten@vlaamseombudsdienst.be"
                                                    >klachten@vlaamseombudsdienst.be<span
                                                        is="vl-icon"
                                                        data-vl-icon="mail"
                                                        data-vl-after
                                                    ></span
                                                ></a>
                                            </dd>
                                            <dt is="vl-property-term">Website</dt>
                                            <dd is="vl-property-value">
                                                <a is="vl-link" href="http://www.vlaamseombudsdienst.be" target="_blank"
                                                    >http://www.vlaamseombudsdienst.be<span
                                                        is="vl-icon"
                                                        data-vl-icon="external"
                                                        data-vl-after
                                                    ></span
                                                ></a>
                                            </dd>
                                        </dl>
                                    </vl-properties>
                                </vl-contact-card>
                            </div>
                        </div>
                    </div>
                </div>
                ${p({compliance:i})}
            </div>
        </div>
    </section>`,b=()=>[s.a7],k=({disableBackLink:e})=>(0,d.qy)`
    <vl-functional-header
        data-vl-title="Departement Omgeving"
        data-vl-sub-title="Toegankelijkheid en gebruiksvoorwaarden"
        data-vl-link="https://omgeving.vlaanderen.be"
        ?data-vl-disable-back-link=${e}
    ></vl-functional-header>
`,y=()=>[o.Q1,o.zY,o.dI,o.D,o.mq,o.Z$,s.Ic],f=({version:e,date:i})=>(0,d.qy)` <section is="vl-region">
    <div is="vl-layout">
        <div is="vl-grid" data-vl-is-stacked>
            <div is="vl-column" data-vl-size="10">
                <h1 is="vl-h1" data-vl-no-space-bottom>Toegankelijkheidsverklaring</h1>
            </div>
            <div is="vl-column" data-vl-size="10">
                <p is="vl-introduction">
                    <span>Versie ${e} - ${i}</span>
                </p>
            </div>
            <div is="vl-column" data-vl-size="12" data-vl-medium-size="12">
                <vl-typography>
                    <hr />
                </vl-typography>
            </div>
        </div>
    </div>
</section>`;class j extends l.jW{static{(0,l.gy)([...new Set([s.a7,...g(),...b(),...y()])])}static get styles(){return o.hF}static get properties(){return{application:{type:String,attribute:"data-vl-application",reflect:!0},compliance:{type:String,attribute:"data-vl-compliance",reflect:!0},date:{type:String,attribute:"data-vl-date",reflect:!0},dateModified:{type:String,attribute:"data-vl-date-modified",reflect:!0},disableBackLink:{type:Boolean,attribute:"data-vl-disable-back-link",reflect:!0},evaluation:{type:String,attribute:"data-vl-evaluation",reflect:!0},version:{type:String,attribute:"data-vl-version",reflect:!0},limitations:{type:Object}}}constructor(){super(),this.allowCustomCSS=!1,this.application="deze applicatie",this.compliance="PARTIALLY_COMPLIANT",this.date="20 juli 2021",this.dateModified="20 juli 2021",this.disableBackLink=!1,this.evaluation="NOT_EVALUATED",this.version="1.0.0"}render(){let e={application:this.application,compliance:this.compliance,date:this.date,dateModified:this.dateModified,disableBackLink:this.disableBackLink,evaluation:this.evaluation,version:this.version,limitations:this.limitations};return(0,d.qy)` <slot name="header">${k(e)}</slot> ${f(e)} ${h(e)} `}}j=function(e,i,a,t){var n,l=arguments.length,s=l<3?i:null===t?t=Object.getOwnPropertyDescriptor(i,a):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,i,a,t);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(s=(l<3?n(s):l>3?n(i,a,s):n(i,a))||s);return l>3&&s&&Object.defineProperty(i,a,s),s}([(0,r.EM)("vl-accessibility")],j),a("../../node_modules/react/index.js");var T=a("../../node_modules/react/jsx-runtime.js"),L=a("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),A=a("../../node_modules/@storybook/blocks/dist/index.mjs");function w(e){let i=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",a:"a",h3:"h3"},(0,L.RP)(),e.components),{VluxMetaData:a}=i;return a||function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VluxMetaData",!0),(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(i.h1,{id:"accessibility",children:"Accessibility"}),"\n",(0,T.jsx)(a,{id:"sections-accessibility"}),"\n",(0,T.jsx)(i.p,{children:"Toegankelijkheidsverklaring pagina."}),"\n",(0,T.jsx)(i.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,T.jsx)(i.pre,{children:(0,T.jsx)(i.code,{className:"language-js",children:"import { VlAccessibility } from '@domg-lib/sections';\n"})}),"\n",(0,T.jsx)(i.pre,{children:(0,T.jsx)(i.code,{className:"language-html",children:"<vl-accessibility></vl-accessibility>\n"})}),"\n",(0,T.jsx)(A.Hl,{of:R}),"\n",(0,T.jsx)(i.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,T.jsx)(A.ov,{of:R}),"\n",(0,T.jsx)(i.h2,{id:"header-slot",children:"Header Slot"}),"\n",(0,T.jsxs)(i.p,{children:["Standaard wordt deze template gebruikt om de ",(0,T.jsx)(i.code,{children:"functional-header"})," te bepalen in deze component."]}),"\n",(0,T.jsx)(A.kL,{code:'import { html } from \'lit\';\nimport { VlFunctionalHeaderComponent } from \'@domg-wc/components\';\nexport const headerElements = ()=>[\n        VlFunctionalHeaderComponent\n    ];\nexport const header = ({ disableBackLink })=>html`\n    <vl-functional-header\n        data-vl-title="Departement Omgeving"\n        data-vl-sub-title="Toegankelijkheid en gebruiksvoorwaarden"\n        data-vl-link="https://omgeving.vlaanderen.be"\n        ?data-vl-disable-back-link=${disableBackLink}\n    ></vl-functional-header>\n`;\n',language:"ts",dark:!0}),"\n",(0,T.jsxs)(i.p,{children:["Als je wijzigingen wil aanbrengen in de functional header, kan je de standaard ",(0,T.jsx)(i.code,{children:"vl-functional-header"})," vervangen door een\nander, eventueel aangepaste header element."]}),"\n",(0,T.jsx)(i.p,{children:"Je kan dit bijvoorbeeld vervangen door:"}),"\n",(0,T.jsxs)(i.ul,{children:["\n",(0,T.jsxs)(i.li,{children:["een ",(0,T.jsx)(i.a,{href:"/docs/components-content-header--content-header-default",children:"vl-content-header"})]}),"\n",(0,T.jsxs)(i.li,{children:["of een ",(0,T.jsx)(i.a,{href:"/docs/components-functional-header--functional-header-default",children:"vl-functional-header"})," met andere opties dan de\nstandaard ",(0,T.jsx)(i.code,{children:"functional-header"})," van dit component."]}),"\n"]}),"\n",(0,T.jsxs)(i.p,{children:["In het voorbeeld hieronder kan je zien hoe je voor de ",(0,T.jsx)(i.code,{children:"vl-functional-header"})," bij de teruglink (",(0,T.jsx)(i.code,{children:"data-vl-back"}),') "Start"\nals label kan geven in plaats van "Terug".']}),"\n",(0,T.jsx)(A.Hl,{of:I}),"\n",(0,T.jsx)(i.h2,{id:"referenties",children:"Referenties"}),"\n",(0,T.jsx)(i.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,T.jsx)(i.p,{children:(0,T.jsx)(i.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-accessibility--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Accessibility"})}),"\n",(0,T.jsx)(i.p,{children:(0,T.jsx)(i.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlAccessibility.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Accessibility"})}),"\n",(0,T.jsx)(i.p,{children:(0,T.jsx)(i.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-accessibility.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - Accessibility"})})]})}let $={FULLY_COMPLIANT:"FULLY_COMPLIANT",PARTIALLY_COMPLIANT:"PARTIALLY_COMPLIANT",NOT_COMPLIANT:"NOT_COMPLIANT"},E={EXPERT_EVALUATED:"EXPERT_EVALUATED",SELF_EVALUATED:"SELF_EVALUATED",NOT_EVALUATED:"NOT_EVALUATED"};var x=a("../../libs/common/storybook/src/index.ts"),O=a("../../node_modules/@storybook/addon-actions/dist/index.mjs");let D={application:"deze applicatie",compliance:`${$.PARTIALLY_COMPLIANT}`,date:"20 juli 2021",dateModified:"20 juli 2021",disableBackLink:!1,evaluation:`${E.NOT_EVALUATED}`,version:"1.0.0",limitations:null,onClickBack:(0,O.XI)("vl-click-back"),headerSlot:""},_={application:{name:"data-vl-application",description:"De applicatie waar de verklaring over gaat.",table:{type:{summary:x.QE.STRING},category:x.R6.ATTRIBUTES,defaultValue:{summary:D.application}}},compliance:{name:"data-vl-compliance",description:"De nalevingsstatus van de verklaring.",control:{type:x.VH.SELECT},options:Object.values($),table:{type:(0,x.uf)(Object.values($)),category:x.R6.ATTRIBUTES,defaultValue:{summary:D.compliance}}},date:{name:"data-vl-date",description:"De aanmaakdatum van de verklaring.",table:{type:{summary:x.QE.STRING},category:x.R6.ATTRIBUTES,defaultValue:{summary:D.date}}},dateModified:{name:"data-vl-date-modified",description:"De datum van de laatste wijziging van de verklaring.",table:{type:{summary:x.QE.STRING},category:x.R6.ATTRIBUTES,defaultValue:{summary:D.dateModified}}},disableBackLink:{name:"data-vl-disable-back-link",description:"Zet de terug-link uit.",table:{type:{summary:x.QE.BOOLEAN},category:x.R6.ATTRIBUTES,defaultValue:{summary:D.disableBackLink}}},evaluation:{name:"data-vl-evaluation",description:"De evaluatiestatus van de verklaring.",control:{type:x.VH.SELECT},options:Object.values(E),table:{type:{summary:(0,x.uf)(Object.values(E))},category:x.R6.ATTRIBUTES,defaultValue:{summary:D.evaluation}}},version:{name:"data-vl-version",description:"De huidige versie van de verklaring.",table:{type:{summary:x.QE.STRING},category:x.R6.ATTRIBUTES,defaultValue:{summary:D.version}}},limitations:{name:"limitations",description:"Property om limitaties mee te geven aan de verklaring. Het object bevat 3 optionele properties. De `withTiming` limitaties vallen onder 'Niet-naleving van het bestuursdecreet'. Dit zijn tijdelijke limitaties. `withoutTiming` limitaties vallen onder 'Onevenredige last'. Dit zijn permanente limitaties. De `outsideApplicableLaw` limitaties vallen onder 'De inhoud valt buiten de werkingssfeer van de toepasselijke wetgeving'. Dit zijn limitaties die buiten de werkingssfeer van de toepasselijke wetgeving vallen.",table:{type:{summary:"object"},category:x.R6.PROPERTIES}},onClickBack:{name:"vl-click-back",description:"Afgevuurd na het klikken op de terug-link.",table:{type:{summary:"-"},category:x.R6.EVENTS}},headerSlot:{name:"header",description:"Hiermee kan je de standaard functional header vervangen door een header naar keuze.",table:{type:{summary:x.QE.HTML},category:x.R6.SLOTS,defaultValue:D.headerSlot}}},z={id:"sections-accessibility",title:"sections/accessibility",tags:["autodocs"],args:D,argTypes:_,parameters:{layout:"fullscreen",docs:{page:function(e={}){let{wrapper:i}=Object.assign({},(0,L.RP)(),e.components);return i?(0,T.jsx)(i,Object.assign({},e,{children:(0,T.jsx)(w,e)})):w(e)}}}},S=(0,x._7)(D,({application:e,compliance:i,date:a,dateModified:l,disableBackLink:s,evaluation:o,version:d,limitations:r,onClickBack:c,headerSlot:v})=>(0,t.qy)`
        <vl-accessibility
            data-vl-application=${e}
            data-vl-compliance=${i}
            data-vl-date=${a}
            data-vl-date-modified=${l}
            ?data-vl-disable-back-link=${s}
            data-vl-evaluation=${o}
            data-vl-version=${d}
            .limitations=${r}
            @vl-click-back=${c}
        >
            ${(0,n._)(v)}
        </vl-accessibility>
    `),N={withTiming:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],withoutTiming:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],outsideApplicableLaw:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]},R=S.bind({});R.storyName="vl-accessibility - default",R.args={limitations:N};let I=S.bind({});I.storyName="vl-accessibility - header slot",I.args={limitations:N,headerSlot:`
    <vl-functional-header
        slot="header"
        data-vl-title="Departement Omgeving & Andere"
        data-vl-sub-title="Toegankelijkheid en gebruiksvoorwaarden "
        data-vl-link="https://omgeving.vlaanderen.be"
        data-vl-back="Start"
    ></vl-functional-header>`},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:"story(accessibilityArgs, ({\n  application,\n  compliance,\n  date,\n  dateModified,\n  disableBackLink,\n  evaluation,\n  version,\n  limitations,\n  onClickBack,\n  headerSlot\n}) => html`\n        <vl-accessibility\n            data-vl-application=${application}\n            data-vl-compliance=${compliance}\n            data-vl-date=${date}\n            data-vl-date-modified=${dateModified}\n            ?data-vl-disable-back-link=${disableBackLink}\n            data-vl-evaluation=${evaluation}\n            data-vl-version=${version}\n            .limitations=${limitations}\n            @vl-click-back=${onClickBack}\n        >\n            ${unsafeHTML(headerSlot)}\n        </vl-accessibility>\n    `)",...R.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:"story(accessibilityArgs, ({\n  application,\n  compliance,\n  date,\n  dateModified,\n  disableBackLink,\n  evaluation,\n  version,\n  limitations,\n  onClickBack,\n  headerSlot\n}) => html`\n        <vl-accessibility\n            data-vl-application=${application}\n            data-vl-compliance=${compliance}\n            data-vl-date=${date}\n            data-vl-date-modified=${dateModified}\n            ?data-vl-disable-back-link=${disableBackLink}\n            data-vl-evaluation=${evaluation}\n            data-vl-version=${version}\n            .limitations=${limitations}\n            @vl-click-back=${onClickBack}\n        >\n            ${unsafeHTML(headerSlot)}\n        </vl-accessibility>\n    `)",...I.parameters?.docs?.source}}};let C=["AccessibilityDefault","AccessibilityHeaderSlot"]},"../../node_modules/lit/directives/unsafe-html.js":(e,i,a)=>{a.d(i,{_:()=>s});var t=a("../../node_modules/lit-html/lit-html.js"),n=a("../../node_modules/lit-html/directive.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class l extends n.WL{constructor(e){if(super(e),this.et=t.s6,e.type!==n.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===t.s6||null==e)return this.vt=void 0,this.et=e;if(e===t.c0)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;var i=[e];return i.raw=i,this.vt={_$litType$:this.constructor.resultType,strings:i,values:[]}}}l.directiveName="unsafeHTML",l.resultType=1;var s=(0,n.u$)(l)}}]);