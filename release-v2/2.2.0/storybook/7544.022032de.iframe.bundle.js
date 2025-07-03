"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[7544],{"../../libs/components/src/compliance/accessibility/vl-accessibility.component.ts":(e,t,i)=>{var l=i("../../libs/common/src/index.ts"),a=i("../../libs/styles/src/index.ts"),n=i("../../node_modules/lit/index.js"),o=i("../../node_modules/lit/decorators.js"),s=i("../../libs/components/src/atom/link/index.ts"),c=i("../../libs/components/src/block/functional-header/index.ts"),d=i("../../libs/components/src/atom/index.ts"),v=i("../../libs/components/src/block/contact-card/index.ts"),r=i("../../libs/components/src/block/infoblock/index.ts"),p=i("../../libs/components/src/block/properties/index.ts"),m=i("../../libs/components/src/block/side-navigation/index.ts");(0,l.gy)([s.m]);let u=()=>(0,n.qy)`
    <vl-link href="https://www.w3.org/TR/WCAG21" external icon-placement="after">
        Web Content Accessibility Guidelines versie 2.1 niveau AA
    </vl-link>
`,g=({compliance:e,evaluation:t})=>(0,n.qy)`
        <div id="compliance-status" class="vl-column vl-column--12 vl-column--m-12">
            <vl-title type="h2">Nalevingsstatus</vl-title>
            ${"NOT_EVALUATED"===t?(0,n.qy)`Deze website voldoet niet aan de ${u()}.`:(()=>{switch(e){case"FULLY_COMPLIANT":return(0,n.qy)`Deze website voldoet volledig aan de ${u()}.`;case"PARTIALLY_COMPLIANT":return(0,n.qy)`Deze website voldoet gedeeltelijk aan de ${u()} omdat nog niet aan de onderstaande
                eisen is voldaan.`;case"NOT_COMPLIANT":return(0,n.qy)`Deze website voldoet niet aan de ${u()} omdat nog niet aan de onderstaande eisen is
                voldaan.`;default:return null}})()}
        </div>
    `;var b=i("../../libs/components/src/block/typography/index.ts");let h=({compliance:e,evaluation:t,limitations:i})=>(0,n.qy)` <div
        style=${"FULLY_COMPLIANT"===e?"display: none":""}
        id="inaccessible-content"
        class="vl-column vl-column--12 vl-column--m-12" 
    >
        <vl-title type="h2">Niet-toegankelijke inhoud</vl-title>
        ${"NOT_EVALUATED"===t?(0,n.qy)`De niet-toegankelijke inhoud is onbekend omdat de website niet is getest.`:"FULLY_COMPLIANT"===e?(0,n.qy)`Er is geen niet-toegankelijke inhoud omdat de website volledig toegankelijk is.`:(0,n.qy)`
            <vl-typography>
                <p>De onderstaande inhoud is niet-toegankelijk om de volgende reden(en):</p>
                ${i&&i.withTiming&&(0,n.qy)`<h3>Niet-naleving van het bestuursdecreet</h3>
                    <ul>
                        ${i.withTiming.map(e=>(0,n.qy)` <li><p>${e}</p></li>`)}
                    </ul>`}
                ${i&&i.withoutTiming&&(0,n.qy)`<h3>Onevenredige last</h3>
                    <ul>
                        ${i.withoutTiming.map(e=>(0,n.qy)` <li><p>${e}</p></li>`)}
                    </ul>`}
                ${i&&i.outsideApplicableLaw&&(0,n.qy)`<h3>De inhoud valt buiten de werkingssfeer van de toepasselijke wetgeving</h3>
                    <ul>
                        ${i.outsideApplicableLaw.map(e=>(0,n.qy)` <li><p>${e}</p></li>`)}
                    </ul>`}
            </vl-typography>
        `}
    </div>`,k=({evaluation:e,date:t,dateModified:i})=>(0,n.qy)` <div id="setup-accessibility-statement" class="vl-column vl-column--12 vl-column--m-12">
        <vl-title type="h2">Opstelling van deze toegankelijkheidsverklaring</vl-title>
        <p>${(()=>{switch(e){case"EXPERT_EVALUATED":return(0,n.qy)`Deze toegankelijkheidsverklaring is opgesteld op ${t} en gebaseerd op een analyse van een
                web accessibility specialist, gecertificeerd door the International Association of Accessibility
                Professionals (IAAP). Deze toegankelijkheidsverklaring is voor het laatst herzien op ${i}.`;case"SELF_EVALUATED":return(0,n.qy)`Deze toegankelijkheidsverklaring is opgesteld op ${t} en gebaseerd op een analyse van
                Departement Omgeving. Deze toegankelijkheidsverklaring is voor het laatst herzien op ${i}.`;case"NOT_EVALUATED":return(0,n.qy)`Deze toegankelijkheidsverklaring is opgesteld op ${t} en werd voor het laatst herzien op
                ${i}.`;default:return null}})()}</p>
    </div>`,y=({compliance:e})=>(0,n.qy)` <div
        class="vl-column vl-column--4 vl-column--m-4 vl-column--s-12 vl-column--xs-12"
    >
        <vl-side-navigation id="side-nav-accessibility" aria-label="inhoudsopgave">
            <vl-side-navigation-h1 >Op deze pagina</vl-side-navigation-h1>
            <vl-side-navigation-content>
                <vl-side-navigation-group>
                    <vl-side-navigation-item>
                        <a href="#compliance-status">
                            Nalevingsstatus
                        </a>
                    </vl-side-navigation-item>
                    <vl-side-navigation-item 
                        style=${"FULLY_COMPLIANT"===e&&"display: none"}
                    >
                        <a href="#inaccessible-content">
                            Niet-toegankelijke inhoud
                        </a>
                    </vl-side-navigation-item>
                    <vl-side-navigation-item>
                        <a href="#setup-accessibility-statement">
                            Opstelling van deze toegankelijkheidsverklaring
                        </a>
                    </vl-side-navigation-item>
                    <vl-side-navigation-item>
                        <a href="#feedback-contact">
                            Feedback en contactgegevens
                        </a>
                    </vl-side-navigation-item>
                    <vl-side-navigation-item>
                        <a href="#enforcement-procedure">
                            Handhavingsprocedure
                        </a>
                    </vl-side-navigation-item>
                </vl-side-navigation-group>
            </vl-side-navigation-content>
        </vl-side-navigation>
    </div>`,f=()=>[v.Y,r.P,p.L,d.IM,m.gw],L=({application:e,compliance:t,date:i,dateModified:l,evaluation:a,limitations:o})=>(0,n.qy)` <section id="content" class="vl-section">
        <div class="vl-content-block">
            <div class="vl-grid vl-stacked-medium">
                <div class="vl-column vl-column--8 vl-column--m-8 vl-column--s-12 vl-column--xs-12">
                    <vl-side-navigation-reference>
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
                            ${g({compliance:t,evaluation:a})}
                            ${h({compliance:t,evaluation:a,limitations:o})}
                            ${k({evaluation:a,date:i,dateModified:l})}
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
                                        <vl-title type="h3" slot="title" custom-css="h3 {font-size: var(--vl-font-size); margin-top: 1rem; }">Departement Omgeving</vl-title>
                                    </vl-infoblock>
                                    <vl-properties slot="properties" custom-css="dl:has(.item) { margin-top: 0.8rem; display: block; }">
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
                                        <vl-title type="h3" slot="title" custom-css="h3 {font-size: var(--vl-font-size); margin-top: 1rem; }">Klachten&shy;behandelaar</vl-title>
                                    </vl-infoblock>
                                    <vl-properties slot="properties" custom-css="dl:has(.item) { margin-top: 0.8rem; display: block; }">
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
                                        <vl-title type="h3" slot="title" custom-css="h3 {font-size: var(--vl-font-size); margin-top: 1rem; }">Vlaamse ombudsdienst</vl-title>
                                    </vl-infoblock>
                                    <vl-properties slot="properties" custom-css="dl:has(.item) { margin-top: 0.8rem; display: block; }">
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
                ${y({compliance:t})}
            </div>
        </div>
    </section>`,A=()=>[c.a],T=({disableBackLink:e,hideBackLink:t})=>(0,n.qy)`
    <vl-functional-header
        title="Departement Omgeving"
        sub-title="Toegankelijkheid en gebruiksvoorwaarden"
        link="https://omgeving.vlaanderen.be"
        ?disable-back-link=${e}
        ?hide-back-link=${t}
    ></vl-functional-header>
`,w=()=>[b.I],O=({version:e,date:t})=>(0,n.qy)`
    <section class="vl-section">
        <div class="vl-content-block">
            <div class="vl-grid vl-stacked-medium">
                <div class="vl-column vl-column--10">
                    <vl-title type="h1" no-space-bottom>Toegankelijkheidsverklaring</vl-title>
                </div>
                <div class="vl-column vl-column--10">
                    <vl-paragraph introduction>
                        <span>Versie ${e} - ${t}</span>
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
`;class E extends l.jW{static{(0,l.gy)([...new Set([c.a,...f(),...A(),...w()]),d.IM,s.m])}constructor(){super(),this.allowCustomCSS=!1,this.application="deze applicatie",this.compliance="PARTIALLY_COMPLIANT",this.date="20 juli 2021",this.dateModified="20 juli 2021",this.disableBackLink=!1,this.hideBackLink=!1,this.evaluation="NOT_EVALUATED",this.version="1.0.0"}static get styles(){return[a.qO,...a.oi,a.yy]}static get properties(){return{application:{type:String,attribute:"application",reflect:!0},compliance:{type:String,attribute:"compliance",reflect:!0},date:{type:String,attribute:"date",reflect:!0},dateModified:{type:String,attribute:"date-modified",reflect:!0},disableBackLink:{type:Boolean,attribute:"disable-back-link",reflect:!0},hideBackLink:{type:Boolean,attribute:"hide-back-link",reflect:!0},evaluation:{type:String,attribute:"evaluation",reflect:!0},version:{type:String,attribute:"version",reflect:!0},limitations:{type:Object}}}render(){let e={application:this.application,compliance:this.compliance,date:this.date,dateModified:this.dateModified,disableBackLink:this.disableBackLink,hideBackLink:this.hideBackLink,evaluation:this.evaluation,version:this.version,limitations:this.limitations};return(0,n.qy)` <slot name="header">${T(e)}</slot> ${O(e)} ${L(e)} `}}E=function(e,t,i,l){var a,n=arguments.length,o=n<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,i):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,l);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(o=(n<3?a(o):n>3?a(t,i,o):a(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o}([(0,o.EM)("vl-accessibility")],E)},"../../libs/components/src/compliance/accessibility/vl-accessibility.model.ts":(e,t,i)=>{i.d(t,{$:()=>l,o:()=>a});let l={FULLY_COMPLIANT:"FULLY_COMPLIANT",PARTIALLY_COMPLIANT:"PARTIALLY_COMPLIANT",NOT_COMPLIANT:"NOT_COMPLIANT"},a={EXPERT_EVALUATED:"EXPERT_EVALUATED",SELF_EVALUATED:"SELF_EVALUATED",NOT_EVALUATED:"NOT_EVALUATED"}}}]);