import{r as v,b8 as d,x as e,cC as g,cD as b,J as h,aX as p,ck as k,cE as m,g as u,A as f,B as y,aH as w,E as L,v as A,cQ as T}from"./iframe-BRJWU34U.js";v([d]);const o=()=>e`
    <vl-link
        href="https://www.w3.org/TR/WCAG21"
        external
        icon-placement="after"
        label="Ga naar Web Content Accessibility Guidelines versie 2.1 niveau AA (opent in een nieuw venster)"
    >
        Web Content Accessibility Guidelines versie 2.1 niveau AA
    </vl-link>
`,$=({compliance:t,evaluation:a})=>e`
        <div id="compliance-status" class="vl-column vl-column--12 vl-column--m-12">
            <vl-title type="h2">Nalevingsstatus</vl-title>
            ${a==="NOT_EVALUATED"?e`Deze website voldoet niet aan de ${o()}.`:(()=>{switch(t){case"FULLY_COMPLIANT":return e`Deze website voldoet volledig aan de ${o()}.`;case"PARTIALLY_COMPLIANT":return e`Deze website voldoet gedeeltelijk aan de ${o()} omdat nog niet aan de onderstaande
                eisen is voldaan.`;case"NOT_COMPLIANT":return e`Deze website voldoet niet aan de ${o()} omdat nog niet aan de onderstaande eisen is
                voldaan.`;default:return null}})()}
        </div>
    `,j=({compliance:t,evaluation:a,limitations:n})=>e` <div
        style=${t==="FULLY_COMPLIANT"?"display: none":""}
        id="inaccessible-content"
        class="vl-column vl-column--12 vl-column--m-12" 
    >
        <vl-title type="h2">Niet-toegankelijke inhoud</vl-title>
        ${a==="NOT_EVALUATED"?e`De niet-toegankelijke inhoud is onbekend omdat de website niet is getest.`:t==="FULLY_COMPLIANT"?e`Er is geen niet-toegankelijke inhoud omdat de website volledig toegankelijk is.`:e`
            <vl-typography>
                <p>De onderstaande inhoud is niet-toegankelijk om de volgende reden(en):</p>
                ${n&&n.withTiming&&e`<h3>Niet-naleving van het bestuursdecreet</h3>
                    <ul>
                        ${n.withTiming.map(l=>e` <li><p>${l}</p></li>`)}
                    </ul>`}
                ${n&&n.withoutTiming&&e`<h3>Onevenredige last</h3>
                    <ul>
                        ${n.withoutTiming.map(l=>e` <li><p>${l}</p></li>`)}
                    </ul>`}
                ${n&&n.outsideApplicableLaw&&e`<h3>De inhoud valt buiten de werkingssfeer van de toepasselijke wetgeving</h3>
                    <ul>
                        ${n.outsideApplicableLaw.map(l=>e` <li><p>${l}</p></li>`)}
                    </ul>`}
            </vl-typography>
        `}
    </div>`,O=({evaluation:t,date:a,dateModified:n})=>e` <div id="setup-accessibility-statement" class="vl-column vl-column--12 vl-column--m-12">
        <vl-title type="h2">Opstelling van deze toegankelijkheidsverklaring</vl-title>
        <p>${(()=>{switch(t){case"EXPERT_EVALUATED":return e`Deze toegankelijkheidsverklaring is opgesteld op ${a} en gebaseerd op een analyse van een
                web accessibility specialist, gecertificeerd door the International Association of Accessibility
                Professionals (IAAP). Deze toegankelijkheidsverklaring is voor het laatst herzien op ${n}.`;case"SELF_EVALUATED":return e`Deze toegankelijkheidsverklaring is opgesteld op ${a} en gebaseerd op een analyse van
                Departement Omgeving. Deze toegankelijkheidsverklaring is voor het laatst herzien op ${n}.`;case"NOT_EVALUATED":return e`Deze toegankelijkheidsverklaring is opgesteld op ${a} en werd voor het laatst herzien op
                ${n}.`;default:return null}})()}</p>
    </div>`,D=({compliance:t})=>e` <div
        class="vl-column vl-column--3 vl-column--m-3 vl-column--s-12 vl-column--xs-12 vl-column--start-10 vl-column--s-start-1"
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
                        style=${t==="FULLY_COMPLIANT"&&"display: none"}
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
    </div>`,C=()=>[g,b,h,p,k,m],E=({application:t,compliance:a,date:n,dateModified:i,evaluation:l,limitations:s})=>e` <section id="content" class="vl-section">
        <div class="vl-content-block">
            <div class="vl-grid vl-stacked-medium">
                <div class="vl-column vl-column--8 vl-column--m-9 vl-column--s-12 vl-column--xs-12">
                    <vl-side-navigation-reference>
                        <div class="vl-grid vl-stacked-large">
                            <div class="vl-column vl-column--12 vl-column--m-12">
                                <p>
                                    De Vlaamse overheid streeft ernaar haar websites en mobiele applicaties toegankelijk
                                    te maken, overeenkomstig het bestuursdecreet van 7 december 2018 waarmee de Europese
                                    Richtlijn 2016/2102 is omgezet.
                                </p>
                                <div class="vl-margin--small">
                                    <vl-typography>
                                        <ul>
                                            <li>
                                                <vl-link
                                                    href="http://www.ejustice.just.fgov.be/cgi_loi/loi_a1.pl?language=nl&cn=2018120705&table_name=wet&caller=list&fromtab=wet#LNK0011"
                                                    external
                                                    inline
                                                    label="Ga naar het bestuursdecreet van 7 december 2018 (opent in een nieuw venster)"
                                                    >Ga naar het bestuursdecreet van 7 december 2018
                                                </vl-link>
                                            </li>
                                            <li>
                                                <vl-link
                                                    href="https://eur-lex.europa.eu/legal-content/NL/TXT/?uri=uriserv:OJ.L_.2016.327.01.0001.01.NLD&toc=OJ:L:2016:327:TOC"
                                                    external
                                                    inline
                                                    label="Ga naar de Europese richtlijn 2016/2102 (opent in een nieuw venster)"
                                                    >Ga naar de Europese Richtlijn 2016/2102
                                                </vl-link>
                                            </li>
                                        </ul>
                                    </vl-typography>
                                </div>
                                <p>Deze toegankelijkheidsverklaring is van toepassing op ${t}.</p>
                            </div>
                            ${$({compliance:a,evaluation:l})}
                            ${j({compliance:a,evaluation:l,limitations:s})}
                            ${O({evaluation:l,date:n,dateModified:i})}
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
                                        <vl-title
                                            type="h3"
                                            slot="title"
                                            custom-css="h3 {font-size: var(--vl-font-size); margin-top: 1rem; }"
                                            >Departement Omgeving</vl-title
                                        >
                                    </vl-infoblock>
                                    <vl-properties
                                        slot="properties"
                                        custom-css="dl:has(.item) { margin-top: 0.8rem; display: block; }"
                                    >
                                        <label>Adres</label>
                                        <data>
                                            <address aria-label="Adresgegevens">
                                                Havenlaan 88<br />
                                                1000 Brussel<br />
                                                België
                                            </address>
                                        </data>
                                        <label>Telefoon</label>
                                        <data>
                                            <vl-link
                                                href="tel:02 553 80 11"
                                                icon-placement="after"
                                                icon="phone"
                                                label="Bel naar 02 553 80 11"
                                            >
                                                02 553 80 11
                                            </vl-link>
                                        </data>
                                        <label>E-mail</label>
                                        <data>
                                            <vl-link
                                                href="mailto:omgeving@vlaanderen.be"
                                                icon-placement="after"
                                                icon="mail"
                                                label="Mail naar omgeving@vlaanderen.be"
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
                                        <vl-title
                                            type="h3"
                                            slot="title"
                                            custom-css="h3 {font-size: var(--vl-font-size); margin-top: 1rem; }"
                                            >Klachten&shy;behandelaar</vl-title
                                        >
                                    </vl-infoblock>
                                    <vl-properties
                                        slot="properties"
                                        custom-css="dl:has(.item) { margin-top: 0.8rem; display: block; }"
                                    >
                                        <label>Adres</label>
                                        <data>
                                            <address aria-label="Adresgegevens">
                                                Havenlaan 88<br />
                                                1000 Brussel<br />
                                                België
                                            </address>
                                        </data>
                                        <label>E-mail</label>
                                        <data>
                                            <vl-link
                                                href="mailto:klachten.omgeving@vlaanderen.be"
                                                icon-placement="after"
                                                icon="mail"
                                                label="Mail naar klachten.omgeving@vlaanderen.be"
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
                                        <vl-title
                                            type="h3"
                                            slot="title"
                                            custom-css="h3 {font-size: var(--vl-font-size); margin-top: 1rem; }"
                                            >Vlaamse ombudsdienst</vl-title
                                        >
                                    </vl-infoblock>
                                    <vl-properties
                                        slot="properties"
                                        custom-css="dl:has(.item) { margin-top: 0.8rem; display: block; }"
                                    >
                                        <label>Adres</label>
                                        <data>
                                            <address aria-label="Adresgegevens">
                                                Leuvenseweg 86<br />
                                                1000 Brussel<br />
                                                België
                                            </address>
                                        </data>
                                        <label>Telefoon</label>
                                        <data>
                                            <vl-link
                                                href="tel:08 002 40 50"
                                                icon-placement="after"
                                                icon="phone"
                                                label="Bel naar 08 002 40 50"
                                            >
                                                08 002 40 50
                                            </vl-link>
                                        </data>
                                        <label>E-mail</label>
                                        <data>
                                            <vl-link
                                                href="mailto:klachten@vlaamseombudsdienst.be"
                                                icon-placement="after"
                                                icon="mail"
                                                label="Mail naar klachten@vlaamseombudsdienst.be"
                                            >
                                                klachten@vlaamseombudsdienst.be
                                            </vl-link>
                                        </data>
                                        <label>Website</label>
                                        <data>
                                            <vl-link
                                                href="http://www.vlaamseombudsdienst.be"
                                                external
                                                label="Ga naar vlaamseombudsdienst.be (opent in een nieuw venster)"
                                            >
                                                http://www.vlaamseombudsdienst.be
                                            </vl-link>
                                        </data>
                                    </vl-properties>
                                </vl-contact-card>
                            </div>
                        </div>
                    </vl-side-navigation-reference>
                </div>
                ${D({compliance:a})}
            </div>
        </div>
    </section>`,z=()=>[u],N=({disableBackLink:t,hideBackLink:a})=>e`
    <vl-functional-header
        title="Departement Omgeving"
        sub-title="Toegankelijkheid en gebruiksvoorwaarden"
        link="https://omgeving.vlaanderen.be"
        ?disable-back-link=${t}
        ?hide-back-link=${a}
    ></vl-functional-header>
`,S=()=>[m],_=({version:t,date:a})=>e`
    <section class="vl-section">
        <div class="vl-content-block">
            <div class="vl-grid vl-stacked-medium">
                <div class="vl-column vl-column--10">
                    <vl-title type="h1" no-space-bottom>Toegankelijkheidsverklaring</vl-title>
                </div>
                <div class="vl-column vl-column--10">
                    <vl-paragraph introduction>
                        <span>Versie ${t} - ${a}</span>
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
`;var B=Object.getOwnPropertyDescriptor,V=(t,a,n,i)=>{for(var l=i>1?void 0:i?B(a,n):a,s=t.length-1,r;s>=0;s--)(r=t[s])&&(l=r(l)||l);return l};let c=class extends y{constructor(){super(),this.allowCustomCSS=!1,this.application="deze applicatie",this.compliance="PARTIALLY_COMPLIANT",this.date="20 juli 2021",this.dateModified="20 juli 2021",this.disableBackLink=!1,this.hideBackLink=!1,this.evaluation="NOT_EVALUATED",this.version="1.0.0"}static get styles(){return[w,...L,A,T]}static get properties(){return{application:{type:String,attribute:"application",reflect:!0},compliance:{type:String,attribute:"compliance",reflect:!0},date:{type:String,attribute:"date",reflect:!0},dateModified:{type:String,attribute:"date-modified",reflect:!0},disableBackLink:{type:Boolean,attribute:"disable-back-link",reflect:!0},hideBackLink:{type:Boolean,attribute:"hide-back-link",reflect:!0},evaluation:{type:String,attribute:"evaluation",reflect:!0},version:{type:String,attribute:"version",reflect:!0},limitations:{type:Object}}}render(){const t={application:this.application,compliance:this.compliance,date:this.date,dateModified:this.dateModified,disableBackLink:this.disableBackLink,hideBackLink:this.hideBackLink,evaluation:this.evaluation,version:this.version,limitations:this.limitations};return e` <slot name="header">${N(t)}</slot> ${_(t)} ${E(t)} `}};v([...new Set([u,...C(),...z(),...S()]),p,d]);c=V([f("vl-accessibility")],c);
