import{r as d,bD as v,x as e,cD as b,cE as g,X as h,P as p,cF as m,n as u,t as k,B as f,bs as y,v as w,a_ as L}from"./iframe-BJy2lIHs.js";import"./vl-side-navigation.component-CraNfZX_.js";import{V as A}from"./vl-side-navigation-layout.component-CgoZlKiw.js";d([v]);const s=()=>e`
    <vl-link
        href="https://www.w3.org/TR/WCAG21"
        external
        icon-placement="after"
        label="Ga naar Web Content Accessibility Guidelines versie 2.1 niveau AA (opent in een nieuw venster)"
    >
        Web Content Accessibility Guidelines versie 2.1 niveau AA
    </vl-link>
`,T=({compliance:t,evaluation:l})=>e`
        <div class="vl-column vl-column--12 vl-column--m-12">
            <vl-title type="h2" id="compliance-status">Nalevingsstatus</vl-title>
            ${l==="NOT_EVALUATED"?e`Deze website voldoet niet aan de ${s()}.`:(()=>{switch(t){case"FULLY_COMPLIANT":return e`Deze website voldoet volledig aan de ${s()}.`;case"PARTIALLY_COMPLIANT":return e`Deze website voldoet gedeeltelijk aan de ${s()} omdat nog niet aan de onderstaande
                eisen is voldaan.`;case"NOT_COMPLIANT":return e`Deze website voldoet niet aan de ${s()} omdat nog niet aan de onderstaande eisen is
                voldaan.`;default:return null}})()}
        </div>
    `,$=({compliance:t,evaluation:l,limitations:a})=>e` <div
        style=${t==="FULLY_COMPLIANT"?"display: none":""}
        class="vl-column vl-column--12 vl-column--m-12"
    >
        <vl-title type="h2" id="inaccessible-content">Niet-toegankelijke inhoud</vl-title>
        ${l==="NOT_EVALUATED"?e`De niet-toegankelijke inhoud is onbekend omdat de website niet is getest.`:t==="FULLY_COMPLIANT"?e`Er is geen niet-toegankelijke inhoud omdat de website volledig toegankelijk is.`:e`
            <vl-typography>
                <p>De onderstaande inhoud is niet-toegankelijk om de volgende reden(en):</p>
                ${a&&a.withTiming&&e`<h3>Niet-naleving van het bestuursdecreet</h3>
                    <ul>
                        ${a.withTiming.map(n=>e` <li><p>${n}</p></li>`)}
                    </ul>`}
                ${a&&a.withoutTiming&&e`<h3>Onevenredige last</h3>
                    <ul>
                        ${a.withoutTiming.map(n=>e` <li><p>${n}</p></li>`)}
                    </ul>`}
                ${a&&a.outsideApplicableLaw&&e`<h3>De inhoud valt buiten de werkingssfeer van de toepasselijke wetgeving</h3>
                    <ul>
                        ${a.outsideApplicableLaw.map(n=>e` <li><p>${n}</p></li>`)}
                    </ul>`}
            </vl-typography>
        `}
    </div>`,D=({evaluation:t,date:l,dateModified:a})=>e` <div class="vl-column vl-column--12 vl-column--m-12">
        <vl-title type="h2" id="setup-accessibility-statement">Opstelling van deze toegankelijkheidsverklaring</vl-title>
        <p>${(()=>{switch(t){case"EXPERT_EVALUATED":return e`Deze toegankelijkheidsverklaring is opgesteld op ${l} en gebaseerd op een analyse van een
                web accessibility specialist, gecertificeerd door the International Association of Accessibility
                Professionals (IAAP). Deze toegankelijkheidsverklaring is voor het laatst herzien op ${a}.`;case"SELF_EVALUATED":return e`Deze toegankelijkheidsverklaring is opgesteld op ${l} en gebaseerd op een analyse van
                Departement Omgeving. Deze toegankelijkheidsverklaring is voor het laatst herzien op ${a}.`;case"NOT_EVALUATED":return e`Deze toegankelijkheidsverklaring is opgesteld op ${l} en werd voor het laatst herzien op
                ${a}.`;default:return null}})()}</p>
    </div>`,j=()=>[b,g,h,p,m],O=({application:t,compliance:l,date:a,dateModified:i,evaluation:n,limitations:o})=>e` <div slot="content" id="content" class="vl-grid vl-stacked-large">
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
                ${T({compliance:l,evaluation:n})}
                ${$({compliance:l,evaluation:n,limitations:o})}
                ${D({evaluation:n,date:a,dateModified:i})}
                <div class="vl-column vl-column--12 vl-column--m-12">
                    <vl-title type="h2" id="feedback-contact">Feedback en contactgegevens</vl-title>
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
                <div class="vl-column vl-column--12 vl-column--m-12">
                    <vl-title type="h2" id="enforcement-procedure">Handhavingsprocedure</vl-title>
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
            </div>`,E=()=>[u],C=({disableBackLink:t,hideBackLink:l})=>e`
    <vl-functional-header
        title="Departement Omgeving"
        sub-title="Toegankelijkheid en gebruiksvoorwaarden"
        link="https://omgeving.vlaanderen.be"
        ?disable-back-link=${t}
        ?hide-back-link=${l}
        skip-to-content-id="#main-content"
    ></vl-functional-header>
`,z=()=>[m],_=({version:t,date:l})=>e`
    <section class="vl-section">
        <div class="vl-content-block">
            <div class="vl-grid vl-stacked-medium">
                <div class="vl-column vl-column--10">
                    <vl-title type="h1" no-space-bottom id="main-content">Toegankelijkheidsverklaring</vl-title>
                </div>
                <div class="vl-column vl-column--10">
                    <vl-paragraph introduction>
                        <span>Versie ${t} - ${l}</span>
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
`;var B=Object.getOwnPropertyDescriptor,S=(t,l,a,i)=>{for(var n=i>1?void 0:i?B(l,a):l,o=t.length-1,r;o>=0;o--)(r=t[o])&&(n=r(n)||n);return n};let c=class extends f{constructor(){super(),this.allowCustomCSS=!1,this.application="deze applicatie",this.compliance="PARTIALLY_COMPLIANT",this.date="20 juli 2021",this.dateModified="20 juli 2021",this.disableBackLink=!1,this.hideBackLink=!1,this.evaluation="NOT_EVALUATED",this.version="1.0.0"}static get styles(){return[y,...w,...L]}static get properties(){return{application:{type:String,attribute:"application",reflect:!0},compliance:{type:String,attribute:"compliance",reflect:!0},date:{type:String,attribute:"date",reflect:!0},dateModified:{type:String,attribute:"date-modified",reflect:!0},disableBackLink:{type:Boolean,attribute:"disable-back-link",reflect:!0},hideBackLink:{type:Boolean,attribute:"hide-back-link",reflect:!0},evaluation:{type:String,attribute:"evaluation",reflect:!0},version:{type:String,attribute:"version",reflect:!0},limitations:{type:Object}}}render(){const t={application:this.application,compliance:this.compliance,date:this.date,dateModified:this.dateModified,disableBackLink:this.disableBackLink,hideBackLink:this.hideBackLink,evaluation:this.evaluation,version:this.version,limitations:this.limitations};return e`
            <div>
                <slot name="header">${C(t)}</slot> ${_(t)}
                <vl-side-navigation-layout-next
                    content-block
                    heading-root-selector="#content"
                    min-level="2"
                    max-level="2"
                    max-depth="0"
                >
                    ${O(t)}
                </vl-side-navigation-layout-next>
            </div>
        `}};d([...new Set([u,A,...j(),...E(),...z()]),p,v]);c=S([k("vl-accessibility")],c);
