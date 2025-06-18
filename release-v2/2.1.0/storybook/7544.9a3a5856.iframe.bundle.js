"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[7544],{"../../libs/components/src/compliance/accessibility/vl-accessibility.component.ts":(e,i,t)=>{var l=t("../../libs/common/src/index.ts"),a=t("../../libs/styles/src/index.ts"),n=t("../../node_modules/lit/index.js"),o=t("../../node_modules/lit/decorators.js"),s=t("../../libs/components/src/atom/link/index.ts"),v=t("../../libs/components/src/block/functional-header/index.ts"),c=t("../../libs/components/src/atom/index.ts"),d=t("../../libs/components/src/block/contact-card/index.ts"),r=t("../../libs/components/src/block/infoblock/index.ts"),p=t("../../libs/components/src/block/properties/index.ts");(0,l.gy)([s.m]);let g=()=>(0,n.qy)`
    <vl-link href="https://www.w3.org/TR/WCAG21" external icon-placement="after">
        Web Content Accessibility Guidelines versie 2.1 niveau AA
    </vl-link>
`,m=({compliance:e,evaluation:i})=>(0,n.qy)`
        <div id="compliance-status" class="vl-column vl-column--12 vl-column--m-12">
            <vl-title type="h2">Nalevingsstatus</vl-title>
            ${"NOT_EVALUATED"===i?(0,n.qy)`Deze website voldoet niet aan de ${g()}.`:(()=>{switch(e){case"FULLY_COMPLIANT":return(0,n.qy)`Deze website voldoet volledig aan de ${g()}.`;case"PARTIALLY_COMPLIANT":return(0,n.qy)`Deze website voldoet gedeeltelijk aan de ${g()} omdat nog niet aan de onderstaande
                eisen is voldaan.`;case"NOT_COMPLIANT":return(0,n.qy)`Deze website voldoet niet aan de ${g()} omdat nog niet aan de onderstaande eisen is
                voldaan.`;default:return null}})()}
        </div>
    `;var u=t("../../libs/components/src/block/typography/index.ts");let b=({compliance:e,evaluation:i,limitations:t})=>(0,n.qy)` <div
        style=${"FULLY_COMPLIANT"===e&&"display: none"}
        id="inaccessible-content"
        class="vl-column vl-column--12 vl-column--m-12"
    >
        <vl-title type="h2">Niet-toegankelijke inhoud</vl-title>
        ${"NOT_EVALUATED"===i?(0,n.qy)`De niet-toegankelijke inhoud is onbekend omdat de website niet is getest.`:"FULLY_COMPLIANT"===e?(0,n.qy)`Er is geen niet-toegankelijke inhoud omdat de website volledig toegankelijk is.`:(0,n.qy)`
            <vl-typography>
                <p>De onderstaande inhoud is niet-toegankelijk om de volgende reden(en):</p>
                ${t&&t.withTiming&&(0,n.qy)`<h3>Niet-naleving van het bestuursdecreet</h3>
                    <ul>
                        ${t.withTiming.map(e=>(0,n.qy)` <li><p>${e}</p></li>`)}
                    </ul>`}
                ${t&&t.withoutTiming&&(0,n.qy)`<h3>Onevenredige last</h3>
                    <ul>
                        ${t.withoutTiming.map(e=>(0,n.qy)` <li><p>${e}</p></li>`)}
                    </ul>`}
                ${t&&t.outsideApplicableLaw&&(0,n.qy)`<h3>De inhoud valt buiten de werkingssfeer van de toepasselijke wetgeving</h3>
                    <ul>
                        ${t.outsideApplicableLaw.map(e=>(0,n.qy)` <li><p>${e}</p></li>`)}
                    </ul>`}
            </vl-typography>
        `}
    </div>`,h=({evaluation:e,date:i,dateModified:t})=>(0,n.qy)` <div id="setup-accessibility-statement" class="vl-column vl-column--12 vl-column--m-12">
        <vl-title type="h2">Opstelling van deze toegankelijkheidsverklaring</vl-title>
        <p>${(()=>{switch(e){case"EXPERT_EVALUATED":return(0,n.qy)`Deze toegankelijkheidsverklaring is opgesteld op ${i} en gebaseerd op een analyse van een
                web accessibility specialist, gecertificeerd door the International Association of Accessibility
                Professionals (IAAP). Deze toegankelijkheidsverklaring is voor het laatst herzien op ${t}.`;case"SELF_EVALUATED":return(0,n.qy)`Deze toegankelijkheidsverklaring is opgesteld op ${i} en gebaseerd op een analyse van
                Departement Omgeving. Deze toegankelijkheidsverklaring is voor het laatst herzien op ${t}.`;case"NOT_EVALUATED":return(0,n.qy)`Deze toegankelijkheidsverklaring is opgesteld op ${i} en werd voor het laatst herzien op
                ${t}.`;default:return null}})()}</p>
    </div>`;t("../../libs/components/src/block/side-navigation/index.ts");let k=({compliance:e})=>(0,n.qy)` <div
        class="vl-column vl-column--4 vl-column--m-4 vl-column--s-4 vl-column--xs-0"
    >
        <vl-side-navigation  id="side-nav-accessibility" aria-label="inhoudsopgave">
            <vl-side-navigation-h1 >Op deze pagina</vl-side-navigation-h1>
            <vl-side-navigation-content >
                <vl-side-navigation-group >
                    <vl-side-navigation-item  parent>
                        <vl-side-navigation-toggle  href="#compliance-status">
                            Nalevingsstatus
                            <i class="vl-vi vl-vi-arrow-right-fat"></i>
                        </vl-side-navigation-toggle>
                    </vl-side-navigation-item>
                    <vl-side-navigation-item
                        style=${"FULLY_COMPLIANT"===e&&"display: none"}

                        parent
                    >
                        <vl-side-navigation-toggle  href="#inaccessible-content">
                            Niet-toegankelijke inhoud
                            <i class="vl-vi vl-vi-arrow-right-fat"></i>
                        </vl-side-navigation-toggle>
                    </vl-side-navigation-item>
                    <vl-side-navigation-item  parent>
                        <vl-side-navigation-toggle  href="#setup-accessibility-statement">
                            Opstelling van deze toegankelijkheidsverklaring
                            <i class="vl-vi vl-vi-arrow-right-fat"></i>
                        </vl-side-navigation-toggle>
                    </vl-side-navigation-item>
                    <vl-side-navigation-item  parent>
                        <vl-side-navigation-toggle  href="#feedback-contact">
                            Feedback en contactgegevens
                            <i class="vl-vi vl-vi-arrow-right-fat"></i>
                        </vl-side-navigation-toggle>
                    </vl-side-navigation-item>
                    <vl-side-navigation-item  parent>
                        <vl-side-navigation-toggle  href="#enforcement-procedure">
                            Handhavingsprocedure
                            <i class="vl-vi vl-vi-arrow-right-fat"></i>
                        </vl-side-navigation-toggle>
                    </vl-side-navigation-item>
                </vl-side-navigation-group>
            </div>
        </vl-side-navigation>
    </div>`,f=()=>[d.Y,r.P,p.L],y=({application:e,compliance:i,date:t,dateModified:l,evaluation:a,limitations:o})=>(0,n.qy)` <section id="content" class="vl-section">
        <div class="vl-content-block">
            <div class="vl-grid vl-stacked-medium vl-content-block">
                <div class="vl-column vl-column--8 vl-column--m-8 vl-column--s-8 vl-column--xs-12">
                    <vl-side-navigation-reference scrollspy-content>
                        <div class="vl-grid vl-stacked-large">
                            <div class="vl-column vl-column--12 vl-column--m-12">
                                <p>
                                    De Vlaamse overheid streeft ernaar haar websites en mobiele applicaties toegankelijk
                                    te maken, overeenkomstig het
                                    <vl-link
                                        href="http://www.ejustice.just.fgov.be/cgi_loi/loi_a1.pl?language=nl&cn=2018120705&table_name=wet&caller=list&fromtab=wet#LNK0011"
                                        external
                                        inline
                                        >bestuursdecreet van 7 december 2018
                                    </vl-link>
                                    waarmee de
                                    <vl-link
                                        href="https://eur-lex.europa.eu/legal-content/NL/TXT/?uri=uriserv:OJ.L_.2016.327.01.0001.01.NLD&toc=OJ:L:2016:327:TOC"
                                        external
                                        inline
                                        >Europese Richtlijn 2016/2102
                                    </vl-link>
                                    is omgezet.
                                </p>
                                <br />
                                <p>Deze toegankelijkheidsverklaring is van toepassing op ${e}.</p>
                            </div>
                            ${m({compliance:i,evaluation:a})}
                            ${b({compliance:i,evaluation:a,limitations:o})}
                            ${h({evaluation:a,date:t,dateModified:l})}
                            <div id="feedback-contact" class="vl-column vl-column--12 vl-column--m-12">
                                <vl-title type="h2">Feedback en contactgegevens</vl-title>
                                <p>
                                    Ondervindt u problemen en wenst u hulp bij het vinden van informatie of het
                                    uitvoeren van een actie? Hebt u een vraag of opmerking over de toegankelijkheid van
                                    deze website of toepassing, of over deze toegankelijkheidsverklaring? Neem contact
                                    op met Departement Omgeving.
                                </p>
                                <br />
                                <vl-contact-card id="contact-card-1">
                                    <vl-infoblock slot="info" type="contact">
                                        <h3 slot="title">Departement Omgeving</h3>
                                    </vl-infoblock>
                                    <vl-properties slot="properties">
                                        <label>Adres</label>
                                        <data>
                                            <div>Havenlaan 88</div>
                                            <div>1000 Brussel</div>
                                            <div>België</div>
                                        </data>
                                        <label>Telefoon</label>
                                        <data>
                                            <vl-link href="tel:02 553 80 11" icon-placement="after" icon="phone">
                                                02 553 80 11
                                            </vl-link>
                                        </data>
                                        <label>E-mail</label>
                                        <data>
                                            <vl-link
                                                href="mailto:omgeving@vlaanderen.be"
                                                icon-placement="after"
                                                icon="mail"
                                            >
                                                omgeving@vlaanderen.be
                                            </vl-link>
                                        </data>
                                    </vl-properties>
                                </vl-contact-card>
                            </div>
                            <div id="enforcement-procedure" class="vl-column vl-column--12 vl-column--m-12">
                                <vl-title type="h2">Handhavingsprocedure</vl-title>
                                <p>
                                    Heeft u contact opgenomen via omgeving@vlaanderen.be maar bent u niet tevreden met
                                    het antwoord? Stuur dan uw klacht naar de klachtenbehandelaar van Departement
                                    Omgeving.
                                </p>
                                <br />
                                <vl-contact-card id="contact-card-2">
                                    <vl-infoblock slot="info" type="contact">
                                        <h3 slot="title">Klachtenbehandelaar</h3>
                                    </vl-infoblock>
                                    <vl-properties slot="properties">
                                        <label>Adres</label>
                                        <data>
                                            <div>Havenlaan 88</div>
                                            <div>1000 Brussel</div>
                                            <div>België</div>
                                        </data>
                                        <label>E-mail</label>
                                        <data>
                                            <vl-link
                                                href="mailto:klachten.omgeving@vlaanderen.be"
                                                icon-placement="after"
                                                icon="mail"
                                            >
                                                klachten.omgeving@vlaanderen.be
                                            </vl-link>
                                        </data>
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
                                    <vl-infoblock slot="info" type="contact">
                                        <h3 slot="title">Vlaamse ombudsdienst</h3>
                                    </vl-infoblock>
                                    <vl-properties slot="properties">
                                        <label>Adres</label>
                                        <data>
                                            <div>Leuvenseweg 86</div>
                                            <div>1000 Brussel</div>
                                            <div>België</div>
                                        </data>
                                        <label>Telefoon</label>
                                        <data>
                                            <vl-link href="tel:08 002 40 50" icon-placement="after" icon="phone">
                                                08 002 40 50
                                            </vl-link>
                                        </data>
                                        <label>E-mail</label>
                                        <data>
                                            <vl-link
                                                href="mailto:klachten@vlaamseombudsdienst.be"
                                                icon-placement="after"
                                                icon="mail"
                                            >
                                                klachten@vlaamseombudsdienst.be
                                            </vl-link>
                                        </data>
                                        <label>Website</label>
                                        <data>
                                            <vl-link href="http://www.vlaamseombudsdienst.be" external>
                                                http://www.vlaamseombudsdienst.be
                                            </vl-link>
                                        </data>
                                    </vl-properties>
                                </vl-contact-card>
                            </div>
                        </div>
                    </vl-side-navigation-reference>
                </div>
                ${k({compliance:i})}
            </div>
        </div>
    </section>`,L=()=>[v.a],A=({disableBackLink:e,hideBackLink:i})=>(0,n.qy)`
    <vl-functional-header
        title="Departement Omgeving"
        sub-title="Toegankelijkheid en gebruiksvoorwaarden"
        link="https://omgeving.vlaanderen.be"
        ?disable-back-link=${e}
        ?hide-back-link=${i}
    ></vl-functional-header>
`,w=()=>[u.I],T=({version:e,date:i})=>(0,n.qy)`
    <section class="vl-section">
        <div class="vl-content-block">
            <div class="vl-grid vl-stacked-medium">
                <div class="vl-column vl-column--10">
                    <vl-title type="h1" no-space-bottom>Toegankelijkheidsverklaring</vl-title>
                </div>
                <div class="vl-column vl-column--10">
                    <vl-paragraph introduction>
                        <span>Versie ${e} - ${i}</span>
                    </vl-paragraph>
                </div>
                <div class="vl-column vl-column--12 vl-column--m-12">
                    <vl-typography>
                        <hr />
                    </vl-typography>
                </div>
            </div>
        </div>
    </section>
`;class O extends l.jW{static{(0,l.gy)([...new Set([v.a,...f(),...L(),...w()]),c.IM,s.m])}constructor(){super(),this.allowCustomCSS=!1,this.application="deze applicatie",this.compliance="PARTIALLY_COMPLIANT",this.date="20 juli 2021",this.dateModified="20 juli 2021",this.disableBackLink=!1,this.hideBackLink=!1,this.evaluation="NOT_EVALUATED",this.version="1.0.0"}static get styles(){return[a.qO,...a.oi,a.yy]}static get properties(){return{application:{type:String,attribute:"application",reflect:!0},compliance:{type:String,attribute:"compliance",reflect:!0},date:{type:String,attribute:"date",reflect:!0},dateModified:{type:String,attribute:"date-modified",reflect:!0},disableBackLink:{type:Boolean,attribute:"disable-back-link",reflect:!0},hideBackLink:{type:Boolean,attribute:"hide-back-link",reflect:!0},evaluation:{type:String,attribute:"evaluation",reflect:!0},version:{type:String,attribute:"version",reflect:!0},limitations:{type:Object}}}render(){let e={application:this.application,compliance:this.compliance,date:this.date,dateModified:this.dateModified,disableBackLink:this.disableBackLink,hideBackLink:this.hideBackLink,evaluation:this.evaluation,version:this.version,limitations:this.limitations};return(0,n.qy)` <slot name="header">${A(e)}</slot> ${T(e)} ${y(e)} `}}O=function(e,i,t,l){var a,n=arguments.length,o=n<3?i:null===l?l=Object.getOwnPropertyDescriptor(i,t):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,i,t,l);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(o=(n<3?a(o):n>3?a(i,t,o):a(i,t))||o);return n>3&&o&&Object.defineProperty(i,t,o),o}([(0,o.EM)("vl-accessibility")],O)},"../../libs/components/src/compliance/accessibility/vl-accessibility.model.ts":(e,i,t)=>{t.d(i,{$:()=>l,o:()=>a});let l={FULLY_COMPLIANT:"FULLY_COMPLIANT",PARTIALLY_COMPLIANT:"PARTIALLY_COMPLIANT",NOT_COMPLIANT:"NOT_COMPLIANT"},a={EXPERT_EVALUATED:"EXPERT_EVALUATED",SELF_EVALUATED:"SELF_EVALUATED",NOT_EVALUATED:"NOT_EVALUATED"}}}]);