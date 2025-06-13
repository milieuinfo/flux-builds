(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[2400],{"./libs/sections/src/accessibility/stories/vl-accessibility.stories.ts":(e,a,i)=>{"use strict";i.r(a),i.d(a,{AccessibilityDefault:()=>z,AccessibilityHeaderSlot:()=>N,__namedExportsOrder:()=>S,default:()=>O});var t=i("./node_modules/lit-html/lit-html.js"),n=i("./node_modules/lit/directives/unsafe-html.js"),l=i("./libs/common/utilities/src/index.ts"),s=i("./libs/components/src/index.ts"),d=i("./libs/elements/src/index.ts"),o=i("./node_modules/lit/index.js"),r=i("./node_modules/lit/decorators.js");let c=({evaluation:e,date:a,dateModified:i})=>(0,o.dy)` <div id="setup-accessibility-statement" is="vl-column" data-vl-size="12" data-vl-medium-size="12">
        <h2 is="vl-h2">Opstelling van deze toegankelijkheidsverklaring</h2>
        <p>${(()=>{switch(e){case"EXPERT_EVALUATED":return(0,o.dy)`Deze toegankelijkheidsverklaring is opgesteld op ${a} en gebaseerd op een analyse van een
                web accessibility specialist, gecertificeerd door the International Association of Accessibility
                Professionals (IAAP). Deze toegankelijkheidsverklaring is voor het laatst herzien op ${i}.`;case"SELF_EVALUATED":return(0,o.dy)`Deze toegankelijkheidsverklaring is opgesteld op ${a} en gebaseerd op een analyse van
                Departement Omgeving. Deze toegankelijkheidsverklaring is voor het laatst herzien op ${i}.`;case"NOT_EVALUATED":return(0,o.dy)`Deze toegankelijkheidsverklaring is opgesteld op ${a} en werd voor het laatst herzien op
                ${i}.`;default:return null}})()}</p>
    </div>`,v=({compliance:e,evaluation:a,limitations:i})=>(0,o.dy)` <div
        style=${"FULLY_COMPLIANT"===e&&"display: none"}
        id="inaccessible-content"
        is="vl-column"
        data-vl-size="12"
        data-vl-medium-size="12"
    >
        <h2 is="vl-h2">Niet-toegankelijke inhoud</h2>
        ${(()=>"NOT_EVALUATED"===a?(0,o.dy)`De niet-toegankelijke inhoud is onbekend omdat de website niet is getest.`:"FULLY_COMPLIANT"===e?(0,o.dy)`Er is geen niet-toegankelijke inhoud omdat de website volledig toegankelijk is.`:(0,o.dy)`
            <vl-typography>
                <p>De onderstaande inhoud is niet-toegankelijk om de volgende reden(en):</p>
                ${i&&i.withTiming&&(0,o.dy)`<h3>Niet-naleving van het bestuursdecreet</h3>
                    <ul>
                        ${i.withTiming.map(e=>(0,o.dy)` <li><p>${e}</p></li>`)}
                    </ul>`}
                ${i&&i.withoutTiming&&(0,o.dy)`<h3>Onevenredige last</h3>
                    <ul>
                        ${i.withoutTiming.map(e=>(0,o.dy)` <li><p>${e}</p></li>`)}
                    </ul>`}
                ${i&&i.outsideApplicableLaw&&(0,o.dy)`<h3>De inhoud valt buiten de werkingssfeer van de toepasselijke wetgeving</h3>
                    <ul>
                        ${i.outsideApplicableLaw.map(e=>(0,o.dy)` <li><p>${e}</p></li>`)}
                    </ul>`}
            </vl-typography>
        `)()}
    </div>`,p=({compliance:e})=>(0,o.dy)` <div
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
    </div>`,m=()=>(0,o.dy)`<a is="vl-link" href="https://www.w3.org/TR/WCAG21" target="_blank" data-vl-inline>
    Web Content Accessibility Guidelines versie 2.1 niveau AA<span
        is="vl-icon"
        data-vl-icon="external"
        data-vl-after
        data-vl-light
    ></span
></a>`,u=({compliance:e,evaluation:a})=>(0,o.dy)` <div id="compliance-status" is="vl-column" data-vl-size="12" data-vl-medium-size="12">
        <h2 is="vl-h2">Nalevingsstatus</h2>
        ${"NOT_EVALUATED"===a?(0,o.dy)`Deze website voldoet niet aan de ${m()}.`:(()=>{switch(e){case"FULLY_COMPLIANT":return(0,o.dy)`Deze website voldoet volledig aan de ${m()}.`;case"PARTIALLY_COMPLIANT":return(0,o.dy)`Deze website voldoet gedeeltelijk aan de ${m()} omdat nog niet aan de onderstaande
                eisen is voldaan.`;case"NOT_COMPLIANT":return(0,o.dy)`Deze website voldoet niet aan de ${m()} omdat nog niet aan de onderstaande eisen is
                voldaan.`;default:return null}})()}
    </div>`,g=e=>{let{application:a}=e;return(0,o.dy)` <section id="content" is="vl-region">
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
                                <p>Deze toegankelijkheidsverklaring is van toepassing op ${a}.</p>
                            </div>
                            ${u(e)} ${v(e)} ${c(e)}
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
                                            <dd is="vl-property-value">
                                                Koning Albert II-laan 20 bus 8<br />1000 Brussel<br />België
                                            </dd>
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
                                            <dd is="vl-property-value">
                                                Koning Albert II-laan 20 bus 8<br />1000 Brussel<br />België
                                            </dd>
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
                ${p(e)}
            </div>
        </div>
    </section>`},h=({disableBackLink:e})=>(0,o.dy)`
    <vl-functional-header
        data-vl-title="Departement Omgeving"
        data-vl-sub-title="Toegankelijkheid en gebruiksvoorwaarden"
        data-vl-link="https://omgeving.vlaanderen.be"
        ?data-vl-disable-back-link=${e}
    ></vl-functional-header>
`,b=({version:e,date:a})=>(0,o.dy)` <section is="vl-region">
    <div is="vl-layout">
        <div is="vl-grid" data-vl-is-stacked>
            <div is="vl-column" data-vl-size="10">
                <h1 is="vl-h1" data-vl-no-space-bottom>Toegankelijkheidsverklaring</h1>
            </div>
            <div is="vl-column" data-vl-size="10">
                <p is="vl-introduction">
                    <span>Versie ${e} - ${a}</span>
                </p>
            </div>
            <div is="vl-column" data-vl-size="12" data-vl-medium-size="12">
                <vl-typography>
                    <hr />
                </vl-typography>
            </div>
        </div>
    </div>
</section>`;class k extends l.fS{static{(0,l.YV)([s.D3])}static get styles(){return d.CX}static get properties(){return{application:{type:String,attribute:"data-vl-application",reflect:!0},compliance:{type:String,attribute:"data-vl-compliance",reflect:!0},date:{type:String,attribute:"data-vl-date",reflect:!0},dateModified:{type:String,attribute:"data-vl-date-modified",reflect:!0},disableBackLink:{type:Boolean,attribute:"data-vl-disable-back-link",reflect:!0},evaluation:{type:String,attribute:"data-vl-evaluation",reflect:!0},version:{type:String,attribute:"data-vl-version",reflect:!0},limitations:{type:Object}}}constructor(){super(),this.allowCustomCSS=!1,this.application="deze applicatie",this.compliance="PARTIALLY_COMPLIANT",this.date="20 juli 2021",this.dateModified="20 juli 2021",this.disableBackLink=!1,this.evaluation="NOT_EVALUATED",this.version="1.0.0"}render(){let e={application:this.application,compliance:this.compliance,date:this.date,dateModified:this.dateModified,disableBackLink:this.disableBackLink,evaluation:this.evaluation,version:this.version,limitations:this.limitations};return(0,o.dy)` <slot name="header">${h(e)}</slot> ${b(e)} ${g(e)} `}}k=function(e,a,i,t){var n,l=arguments.length,s=l<3?a:null===t?t=Object.getOwnPropertyDescriptor(a,i):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,a,i,t);else for(var d=e.length-1;d>=0;d--)(n=e[d])&&(s=(l<3?n(s):l>3?n(a,i,s):n(a,i))||s);return l>3&&s&&Object.defineProperty(a,i,s),s}([(0,r.Mo)("vl-accessibility")],k),i("./node_modules/react/index.js");var y=i("./node_modules/react/jsx-runtime.js"),f=i("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),A=i("./node_modules/@storybook/blocks/dist/index.mjs");function T(e){let a=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",a:"a",h3:"h3"},(0,f.ah)(),e.components);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(a.h1,{id:"accessibility",children:"Accessibility"}),"\n",(0,y.jsx)(a.p,{children:"Toegankelijkheidsverklaring pagina."}),"\n",(0,y.jsx)(a.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,y.jsx)(a.pre,{children:(0,y.jsx)(a.code,{className:"language-js",children:"import { VlAccessibility } from '@domg-lib/sections';\n"})}),"\n",(0,y.jsx)(a.pre,{children:(0,y.jsx)(a.code,{className:"language-html",children:"<vl-accessibility></vl-accessibility>\n"})}),"\n",(0,y.jsx)(A.Xz,{of:z}),"\n",(0,y.jsx)(a.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,y.jsx)(A.Ed,{of:z}),"\n",(0,y.jsx)(a.h2,{id:"header-slot",children:"Header Slot"}),"\n",(0,y.jsxs)(a.p,{children:["Standaard wordt deze template gebruikt om de ",(0,y.jsx)(a.code,{children:"functional-header"})," te bepalen in deze component."]}),"\n",(0,y.jsx)(A.Hw,{code:'import { html } from \'lit\';\nexport const header = ({ disableBackLink })=>html`\n    <vl-functional-header\n        data-vl-title="Departement Omgeving"\n        data-vl-sub-title="Toegankelijkheid en gebruiksvoorwaarden"\n        data-vl-link="https://omgeving.vlaanderen.be"\n        ?data-vl-disable-back-link=${disableBackLink}\n    ></vl-functional-header>\n`;\n',language:"ts",dark:!0}),"\n",(0,y.jsxs)(a.p,{children:["Als je wijzigingen wil aanbrengen in de functional header, kan je de standaard ",(0,y.jsx)(a.code,{children:"vl-functional-header"})," vervangen door een\nander, eventueel aangepaste header element."]}),"\n",(0,y.jsx)(a.p,{children:"Je kan dit bijvoorbeeld vervangen door:"}),"\n",(0,y.jsxs)(a.ul,{children:["\n",(0,y.jsxs)(a.li,{children:["een ",(0,y.jsx)(a.a,{href:"/docs/components-content-header--content-header-default",children:"vl-content-header"})]}),"\n",(0,y.jsxs)(a.li,{children:["of een ",(0,y.jsx)(a.a,{href:"/docs/components-functional-header--functional-header-default",children:"vl-functional-header"})," met andere opties dan de\nstandaard ",(0,y.jsx)(a.code,{children:"functional-header"})," van dit component."]}),"\n"]}),"\n",(0,y.jsxs)(a.p,{children:["In het voorbeeld hieronder kan je zien hoe je voor de ",(0,y.jsx)(a.code,{children:"vl-functional-header"})," bij de teruglink (",(0,y.jsx)(a.code,{children:"data-vl-back"}),') "Start"\nals label kan geven in plaats van "Terug".']}),"\n",(0,y.jsx)(A.Xz,{of:N}),"\n",(0,y.jsx)(a.h2,{id:"referenties",children:"Referenties"}),"\n",(0,y.jsx)(a.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,y.jsx)(a.p,{children:(0,y.jsx)(a.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-accessibility--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Accessibility"})}),"\n",(0,y.jsx)(a.p,{children:(0,y.jsx)(a.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlAccessibility.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Accessibility"})}),"\n",(0,y.jsx)(a.p,{children:(0,y.jsx)(a.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-accessibility.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - Accessibility"})})]})}let L={FULLY_COMPLIANT:"FULLY_COMPLIANT",PARTIALLY_COMPLIANT:"PARTIALLY_COMPLIANT",NOT_COMPLIANT:"NOT_COMPLIANT"},j={EXPERT_EVALUATED:"EXPERT_EVALUATED",SELF_EVALUATED:"SELF_EVALUATED",NOT_EVALUATED:"NOT_EVALUATED"};var w=i("./libs/common/storybook/src/index.ts"),E=i("./node_modules/@storybook/addon-actions/dist/index.mjs");let $={application:"deze applicatie",compliance:`${L.PARTIALLY_COMPLIANT}`,date:"20 juli 2021",dateModified:"20 juli 2021",disableBackLink:!1,evaluation:`${j.NOT_EVALUATED}`,version:"1.0.0",limitations:null,onClickBack:(0,E.aD)("vl-click-back"),headerSlot:""},_={application:{name:"data-vl-application",description:"De applicatie waar de verklaring over gaat.",table:{type:{summary:w.vK.STRING},category:w.aA.ATTRIBUTES,defaultValue:{summary:$.application}}},compliance:{name:"data-vl-compliance",description:"De nalevingsstatus van de verklaring.",control:{type:"select",options:[L.FULLY_COMPLIANT,L.PARTIALLY_COMPLIANT,L.NOT_COMPLIANT]},table:{type:{summary:`"${L.FULLY_COMPLIANT}" |
                "${L.PARTIALLY_COMPLIANT}" |
                "${L.NOT_COMPLIANT}"`},category:w.aA.ATTRIBUTES,defaultValue:{summary:$.compliance}}},date:{name:"data-vl-date",description:"De aanmaakdatum van de verklaring.",table:{type:{summary:w.vK.STRING},category:w.aA.ATTRIBUTES,defaultValue:{summary:$.date}}},dateModified:{name:"data-vl-date-modified",description:"De datum van de laatste wijziging van de verklaring.",table:{type:{summary:w.vK.STRING},category:w.aA.ATTRIBUTES,defaultValue:{summary:$.dateModified}}},disableBackLink:{name:"data-vl-disable-back-link",description:"Zet de terug-link uit.",table:{type:{summary:w.vK.BOOLEAN},category:w.aA.ATTRIBUTES,defaultValue:{summary:$.disableBackLink}}},evaluation:{name:"data-vl-evaluation",description:"De evaluatiestatus van de verklaring.",control:{type:"select",options:[j.EXPERT_EVALUATED,j.SELF_EVALUATED,j.NOT_EVALUATED]},table:{type:{summary:`"${j.EXPERT_EVALUATED}" |
                    "${j.SELF_EVALUATED}" |
                    "${j.NOT_EVALUATED}"`},category:w.aA.ATTRIBUTES,defaultValue:{summary:$.evaluation}}},version:{name:"data-vl-version",description:"De huidige versie van de verklaring.",table:{type:{summary:w.vK.STRING},category:w.aA.ATTRIBUTES,defaultValue:{summary:$.version}}},limitations:{name:"limitations",description:"Property om limitaties mee te geven aan de verklaring. Het object bevat 3 optionele properties. De `withTiming` limitaties vallen onder 'Niet-naleving van het bestuursdecreet'. Dit zijn tijdelijke limitaties. `withoutTiming` limitaties vallen onder 'Onevenredige last'. Dit zijn permanente limitaties. De `outsideApplicableLaw` limitaties vallen onder 'De inhoud valt buiten de werkingssfeer van de toepasselijke wetgeving'. Dit zijn limitaties die buiten de werkingssfeer van de toepasselijke wetgeving vallen.",table:{type:{summary:"object"},category:w.aA.PROPERTIES}},onClickBack:{name:"vl-click-back",description:"Afgevuurd na het klikken op de terug-link.",table:{type:{summary:"-"},category:w.aA.EVENTS}},headerSlot:{name:"header",description:"Hiermee kan je de standaard functional header vervangen door een header naar keuze.",table:{type:{summary:w.vK.HTML},category:w.aA.SLOTS,defaultValue:$.headerSlot}}},O={title:"sections/accessibility",tags:["autodocs"],args:$,argTypes:_,parameters:{layout:"fullscreen",docs:{page:function(e={}){let{wrapper:a}=Object.assign({},(0,f.ah)(),e.components);return a?(0,y.jsx)(a,Object.assign({},e,{children:(0,y.jsx)(T,e)})):T(e)}}}},D=(0,w.yg)($,({application:e,compliance:a,date:i,dateModified:l,disableBackLink:s,evaluation:d,version:o,limitations:r,onClickBack:c,headerSlot:v})=>(0,t.dy)`
        <vl-accessibility
            data-vl-application=${e}
            data-vl-compliance=${a}
            data-vl-date=${i}
            data-vl-date-modified=${l}
            ?data-vl-disable-back-link=${s}
            data-vl-evaluation=${d}
            data-vl-version=${o}
            .limitations=${r}
            @vl-click-back=${c}
        >
            ${(0,n.A)(v)}
        </vl-accessibility>
    `),x={withTiming:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],withoutTiming:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],outsideApplicableLaw:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]},z=D.bind({});z.storyName="vl-accessibility - default",z.args={limitations:x};let N=D.bind({});N.storyName="vl-accessibility - header slot",N.args={limitations:x,headerSlot:`
    <vl-functional-header
        slot="header"
        data-vl-title="Departement Omgeving & Andere"
        data-vl-sub-title="Toegankelijkheid en gebruiksvoorwaarden "
        data-vl-link="https://omgeving.vlaanderen.be"
        data-vl-back="Start"
    ></vl-functional-header>`},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:"story(accessibilityArgs, ({\n  application,\n  compliance,\n  date,\n  dateModified,\n  disableBackLink,\n  evaluation,\n  version,\n  limitations,\n  onClickBack,\n  headerSlot\n}) => html`\n        <vl-accessibility\n            data-vl-application=${application}\n            data-vl-compliance=${compliance}\n            data-vl-date=${date}\n            data-vl-date-modified=${dateModified}\n            ?data-vl-disable-back-link=${disableBackLink}\n            data-vl-evaluation=${evaluation}\n            data-vl-version=${version}\n            .limitations=${limitations}\n            @vl-click-back=${onClickBack}\n        >\n            ${unsafeHTML(headerSlot)}\n        </vl-accessibility>\n    `)",...z.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:"story(accessibilityArgs, ({\n  application,\n  compliance,\n  date,\n  dateModified,\n  disableBackLink,\n  evaluation,\n  version,\n  limitations,\n  onClickBack,\n  headerSlot\n}) => html`\n        <vl-accessibility\n            data-vl-application=${application}\n            data-vl-compliance=${compliance}\n            data-vl-date=${date}\n            data-vl-date-modified=${dateModified}\n            ?data-vl-disable-back-link=${disableBackLink}\n            data-vl-evaluation=${evaluation}\n            data-vl-version=${version}\n            .limitations=${limitations}\n            @vl-click-back=${onClickBack}\n        >\n            ${unsafeHTML(headerSlot)}\n        </vl-accessibility>\n    `)",...N.parameters?.docs?.source}}};let S=["AccessibilityDefault","AccessibilityHeaderSlot"]},"./node_modules/memoizerific sync recursive":e=>{function a(e){var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}a.keys=()=>[],a.resolve=a,a.id="./node_modules/memoizerific sync recursive",e.exports=a}}]);