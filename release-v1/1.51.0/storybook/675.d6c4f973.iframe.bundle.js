"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[675],{"../../libs/sections/src/accessibility/vl-accessibility.model.ts":(e,t,n)=>{n.d(t,{$:()=>i,o:()=>a});let i={FULLY_COMPLIANT:"FULLY_COMPLIANT",PARTIALLY_COMPLIANT:"PARTIALLY_COMPLIANT",NOT_COMPLIANT:"NOT_COMPLIANT"},a={EXPERT_EVALUATED:"EXPERT_EVALUATED",SELF_EVALUATED:"SELF_EVALUATED",NOT_EVALUATED:"NOT_EVALUATED"}},"../../libs/sections/src/accessibility/vl-accessibility.section.ts":(e,t,n)=>{var i=n("../../libs/common/utilities/src/index.ts"),a=n("../../libs/common/utilities/src/css/index.ts"),l=n("../../libs/components/src/index.ts"),o=n("../../libs/components/src/next/link/index.ts"),s=n("../../libs/components/src/next/title/index.ts"),d=n("../../libs/elements/src/index.ts"),v=n("../../node_modules/lit/index.js"),c=n("../../node_modules/lit/decorators.js"),r=n("../../libs/components/src/next/properties/index.ts"),p=n("../../libs/components/src/next/side-navigation/index.ts");(0,i.gy)([o.m]);let m=()=>(0,v.qy)`
    <vl-link-next href="https://www.w3.org/TR/WCAG21" external icon-placement="after">
        Web Content Accessibility Guidelines versie 2.1 niveau AA
    </vl-link-next>
`,u=({compliance:e,evaluation:t})=>(0,v.qy)`
        <div id="compliance-status" class="vl-column-next vl-column-next--12 vl-column-next--m-12">
            <vl-title-next type="h2">Nalevingsstatus</vl-title-next>
            ${"NOT_EVALUATED"===t?(0,v.qy)`Deze website voldoet niet aan de ${m()}.`:(()=>{switch(e){case"FULLY_COMPLIANT":return(0,v.qy)`Deze website voldoet volledig aan de ${m()}.`;case"PARTIALLY_COMPLIANT":return(0,v.qy)`Deze website voldoet gedeeltelijk aan de ${m()} omdat nog niet aan de onderstaande
                eisen is voldaan.`;case"NOT_COMPLIANT":return(0,v.qy)`Deze website voldoet niet aan de ${m()} omdat nog niet aan de onderstaande eisen is
                voldaan.`;default:return null}})()}
        </div>
    `,g=({compliance:e,evaluation:t,limitations:n})=>(0,v.qy)` <div
        style=${"FULLY_COMPLIANT"===e?"display: none":""}
        id="inaccessible-content"
        class="vl-column-next vl-column-next--12 vl-column-next--m-12"
    >
        <vl-title-next type="h2">Niet-toegankelijke inhoud</vl-title-next>
        ${"NOT_EVALUATED"===t?(0,v.qy)`De niet-toegankelijke inhoud is onbekend omdat de website niet is getest.`:"FULLY_COMPLIANT"===e?(0,v.qy)`Er is geen niet-toegankelijke inhoud omdat de website volledig toegankelijk is.`:(0,v.qy)`
            <vl-typography>
                <p>De onderstaande inhoud is niet-toegankelijk om de volgende reden(en):</p>
                ${n&&n.withTiming&&(0,v.qy)`<h3>Niet-naleving van het bestuursdecreet</h3>
                    <ul>
                        ${n.withTiming.map(e=>(0,v.qy)` <li><p>${e}</p></li>`)}
                    </ul>`}
                ${n&&n.withoutTiming&&(0,v.qy)`<h3>Onevenredige last</h3>
                    <ul>
                        ${n.withoutTiming.map(e=>(0,v.qy)` <li><p>${e}</p></li>`)}
                    </ul>`}
                ${n&&n.outsideApplicableLaw&&(0,v.qy)`<h3>De inhoud valt buiten de werkingssfeer van de toepasselijke wetgeving</h3>
                    <ul>
                        ${n.outsideApplicableLaw.map(e=>(0,v.qy)` <li><p>${e}</p></li>`)}
                    </ul>`}
            </vl-typography>
        `}
    </div>`,h=({evaluation:e,date:t,dateModified:n})=>(0,v.qy)` <div id="setup-accessibility-statement" class="vl-column-next vl-column-next--12 vl-column-next--m-12">
        <vl-title-next type="h2">Opstelling van deze toegankelijkheidsverklaring</vl-title-next>
        <p>${(()=>{switch(e){case"EXPERT_EVALUATED":return(0,v.qy)`Deze toegankelijkheidsverklaring is opgesteld op ${t} en gebaseerd op een analyse van een
                web accessibility specialist, gecertificeerd door the International Association of Accessibility
                Professionals (IAAP). Deze toegankelijkheidsverklaring is voor het laatst herzien op ${n}.`;case"SELF_EVALUATED":return(0,v.qy)`Deze toegankelijkheidsverklaring is opgesteld op ${t} en gebaseerd op een analyse van
                Departement Omgeving. Deze toegankelijkheidsverklaring is voor het laatst herzien op ${n}.`;case"NOT_EVALUATED":return(0,v.qy)`Deze toegankelijkheidsverklaring is opgesteld op ${t} en werd voor het laatst herzien op
                ${n}.`;default:return null}})()}</p>
    </div>`,b=({compliance:e})=>(0,v.qy)` <div
        class="vl-column-next vl-column-next--4 vl-column-next--m-4 vl-column-next--s-12 vl-column-next--xs-12"
    >
        <vl-side-navigation-next id="side-nav-accessibility" aria-label="inhoudsopgave">
            <vl-side-navigation-h1-next>Op deze pagina</vl-side-navigation-h1-next>
            <vl-side-navigation-content-next>
                <vl-side-navigation-group-next>
                    <vl-side-navigation-item-next>
                        <a href="#compliance-status">
                            Nalevingsstatus
                        </a>
                    </vl-side-navigation-item-next>
                    <vl-side-navigation-item-next
                        style=${"FULLY_COMPLIANT"===e&&"display: none"}
                        parent
                    >
                        <a href="#inaccessible-content">
                            Niet-toegankelijke inhoud
                        </a>
                    </vl-side-navigation-item-next>
                    <vl-side-navigation-item-next>
                        <a href="#setup-accessibility-statement">
                            Opstelling van deze toegankelijkheidsverklaring
                        </a>
                    </vl-side-navigation-item-next>
                    <vl-side-navigation-item-next>
                        <a href="#feedback-contact">
                            Feedback en contactgegevens
                        </a>
                    </vl-side-navigation-item-next>
                    <vl-side-navigation-item-next>
                        <a href="#enforcement-procedure">
                            Handhavingsprocedure
                        </a>
                    </vl-side-navigation-item-next>
                </vl-side-navigation-group-next>
            </vl-side-navigation-content-next>
        </vl-side-navigation-next>
    </div>`,k=()=>[l.Y4,l.Pq,r.L,s.I,p.gw],x=({application:e,compliance:t,date:n,dateModified:i,evaluation:a,limitations:l})=>(0,v.qy)` <section id="content" class="vl-section-next">
        <div class="vl-content-block-next">
            <div class="vl-grid-next vl-stacked-next-medium">
                <div
                    class="vl-column-next vl-column-next--8 vl-column-next--m-8 vl-column-next--s-12 vl-column-next--xs-12"
                >
                    <vl-side-navigation-reference-next>
                        <div class="vl-grid-next vl-stacked-next-large">
                            <div class="vl-column-next vl-column-next--12 vl-column-next--m-12">
                                <p>
                                    De Vlaamse overheid streeft ernaar haar websites en mobiele applicaties toegankelijk
                                    te maken, overeenkomstig het
                                    <vl-link-next
                                        href="http://www.ejustice.just.fgov.be/cgi_loi/loi_a1.pl?language=nl&cn=2018120705&table_name=wet&caller=list&fromtab=wet#LNK0011"
                                        external
                                        data-vl-inline
                                        >bestuursdecreet van 7 december 2018
                                    </vl-link-next>
                                    waarmee de
                                    <vl-link-next
                                        href="https://eur-lex.europa.eu/legal-content/NL/TXT/?uri=uriserv:OJ.L_.2016.327.01.0001.01.NLD&toc=OJ:L:2016:327:TOC"
                                        external
                                        data-vl-inline
                                        >Europese Richtlijn 2016/2102
                                    </vl-link-next>
                                    is omgezet.
                                </p>
                                <br />
                                <p>Deze toegankelijkheidsverklaring is van toepassing op ${e}.</p>
                            </div>
                            ${u({compliance:t,evaluation:a})}
                            ${g({compliance:t,evaluation:a,limitations:l})}
                            ${h({evaluation:a,date:n,dateModified:i})}
                            <div id="feedback-contact" class="vl-column-next vl-column-next--12 vl-column-next--m-12">
                                <vl-title-next type="h2">Feedback en contactgegevens</vl-title-next>
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
                                    <vl-properties-next slot="properties">
                                        <label>Adres</label>
                                        <data>
                                            <div>Havenlaan 88</div>
                                            <div>1000 Brussel</div>
                                            <div>België</div>
                                        </data>
                                        <label>Telefoon</label>
                                        <data>
                                            <vl-link-next href="tel:02 553 80 11" icon-placement="after" icon="phone">
                                                02 553 80 11
                                            </vl-link-next>
                                        </data>
                                        <label>E-mail</label>
                                        <data>
                                            <vl-link-next
                                                href="mailto:omgeving@vlaanderen.be"
                                                icon-placement="after"
                                                icon="mail"
                                            >
                                                omgeving@vlaanderen.be
                                            </vl-link-next>
                                        </data>
                                    </vl-properties-next>
                                </vl-contact-card>
                            </div>
                            <div
                                id="enforcement-procedure"
                                class="vl-column-next vl-column-next--12 vl-column-next--m-12"
                            >
                                <vl-title-next type="h2">Handhavingsprocedure</vl-title-next>
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
                                    <vl-properties-next slot="properties">
                                        <label>Adres</label>
                                        <data>
                                            <div>Havenlaan 88</div>
                                            <div>1000 Brussel</div>
                                            <div>België</div>
                                        </data>
                                        <label>E-mail</label>
                                        <data>
                                            <vl-link-next
                                                href="mailto:klachten.omgeving@vlaanderen.be"
                                                icon-placement="after"
                                                icon="mail"
                                            >
                                                klachten.omgeving@vlaanderen.be
                                            </vl-link-next>
                                        </data>
                                    </vl-properties-next>
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
                                    <vl-properties-next slot="properties">
                                        <label>Adres</label>
                                        <data>
                                            <div>Leuvenseweg 86</div>
                                            <div>1000 Brussel</div>
                                            <div>België</div>
                                        </data>
                                        <label>Telefoon</label>
                                        <data>
                                            <vl-link-next href="tel:08 002 40 50" icon-placement="after" icon="phone">
                                                08 002 40 50
                                            </vl-link-next>
                                        </data>
                                        <label>E-mail</label>
                                        <data>
                                            <vl-link-next
                                                href="mailto:klachten@vlaamseombudsdienst.be"
                                                icon-placement="after"
                                                icon="mail"
                                            >
                                                klachten@vlaamseombudsdienst.be
                                            </vl-link-next>
                                        </data>
                                        <label>Website</label>
                                        <data>
                                            <vl-link-next href="http://www.vlaamseombudsdienst.be" external>
                                                http://www.vlaamseombudsdienst.be
                                            </vl-link-next>
                                        </data>
                                    </vl-properties-next>
                                </vl-contact-card>
                            </div>
                        </div>
                    </vl-side-navigation-reference-next>
                </div>
                ${b({compliance:t})}
            </div>
        </div>
    </section>`,f=()=>[l.a7],y=({disableBackLink:e,hideBackLink:t})=>(0,v.qy)`
    <vl-functional-header
        data-vl-title="Departement Omgeving"
        data-vl-sub-title="Toegankelijkheid en gebruiksvoorwaarden"
        data-vl-link="https://omgeving.vlaanderen.be"
        ?data-vl-disable-back-link=${e}
        ?data-vl-hide-back-link=${t}
    ></vl-functional-header>
`,L=()=>[l.Ic],A=({version:e,date:t})=>(0,v.qy)`
    <section class="vl-section-next">
        <div class="vl-content-block-next">
            <div class="vl-grid-next vl-stacked-next-medium">
                <div class="vl-column-next vl-column-next--10">
                    <vl-title-next type="h1" no-space-bottom>Toegankelijkheidsverklaring</vl-title-next>
                </div>
                <div class="vl-column-next vl-column-next--10">
                    <vl-paragraph-next introduction>
                        <span>Versie ${e} - ${t}</span>
                    </vl-paragraph-next>
                </div>
                <div class="vl-column-next vl-column-next--12 vl-column-next--m-12">
                    <vl-typography>
                        <hr />
                    </vl-typography>
                </div>
            </div>
        </div>
    </section>
`;class T extends i.jW{static{(0,i.gy)([...new Set([l.a7,...k(),...f(),...L()]),s.I,o.m])}static get styles(){return[...d.hF,a.yy]}static get properties(){return{application:{type:String,attribute:"data-vl-application",reflect:!0},compliance:{type:String,attribute:"data-vl-compliance",reflect:!0},date:{type:String,attribute:"data-vl-date",reflect:!0},dateModified:{type:String,attribute:"data-vl-date-modified",reflect:!0},disableBackLink:{type:Boolean,attribute:"data-vl-disable-back-link",reflect:!0},hideBackLink:{type:Boolean,attribute:"data-vl-hide-back-link",reflect:!0},evaluation:{type:String,attribute:"data-vl-evaluation",reflect:!0},version:{type:String,attribute:"data-vl-version",reflect:!0},limitations:{type:Object}}}constructor(){super(),this.allowCustomCSS=!1,this.application="deze applicatie",this.compliance="PARTIALLY_COMPLIANT",this.date="20 juli 2021",this.dateModified="20 juli 2021",this.disableBackLink=!1,this.hideBackLink=!1,this.evaluation="NOT_EVALUATED",this.version="1.0.0"}render(){let e={application:this.application,compliance:this.compliance,date:this.date,dateModified:this.dateModified,disableBackLink:this.disableBackLink,hideBackLink:this.hideBackLink,evaluation:this.evaluation,version:this.version,limitations:this.limitations};return(0,v.qy)` <slot name="header">${y(e)}</slot> ${A(e)} ${x(e)} `}}T=function(e,t,n,i){var a,l=arguments.length,o=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(o=(l<3?a(o):l>3?a(t,n,o):a(t,n))||o);return l>3&&o&&Object.defineProperty(t,n,o),o}([(0,c.EM)("vl-accessibility")],T)}}]);