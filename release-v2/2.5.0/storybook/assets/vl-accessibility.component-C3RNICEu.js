import{r as c,b8 as d,x as e,cx as u,cy as g,I as h,aW as p,ci as k,g as m,cz as b,o as f,B as y,aG as w,q as L,v as T}from"./iframe-CflcmDUD.js";c([d]);const s=()=>e`
    <vl-link href="https://www.w3.org/TR/WCAG21" external icon-placement="after">
        Web Content Accessibility Guidelines versie 2.1 niveau AA
    </vl-link>
`,A=({compliance:t,evaluation:i})=>e`
        <div id="compliance-status" class="vl-column vl-column--12 vl-column--m-12">
            <vl-title type="h2">Nalevingsstatus</vl-title>
            ${i==="NOT_EVALUATED"?e`Deze website voldoet niet aan de ${s()}.`:(()=>{switch(t){case"FULLY_COMPLIANT":return e`Deze website voldoet volledig aan de ${s()}.`;case"PARTIALLY_COMPLIANT":return e`Deze website voldoet gedeeltelijk aan de ${s()} omdat nog niet aan de onderstaande
                eisen is voldaan.`;case"NOT_COMPLIANT":return e`Deze website voldoet niet aan de ${s()} omdat nog niet aan de onderstaande eisen is
                voldaan.`;default:return null}})()}
        </div>
    `,$=({compliance:t,evaluation:i,limitations:a})=>e` <div
        style=${t==="FULLY_COMPLIANT"?"display: none":""}
        id="inaccessible-content"
        class="vl-column vl-column--12 vl-column--m-12" 
    >
        <vl-title type="h2">Niet-toegankelijke inhoud</vl-title>
        ${i==="NOT_EVALUATED"?e`De niet-toegankelijke inhoud is onbekend omdat de website niet is getest.`:t==="FULLY_COMPLIANT"?e`Er is geen niet-toegankelijke inhoud omdat de website volledig toegankelijk is.`:e`
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
    </div>`,O=({evaluation:t,date:i,dateModified:a})=>e` <div id="setup-accessibility-statement" class="vl-column vl-column--12 vl-column--m-12">
        <vl-title type="h2">Opstelling van deze toegankelijkheidsverklaring</vl-title>
        <p>${(()=>{switch(t){case"EXPERT_EVALUATED":return e`Deze toegankelijkheidsverklaring is opgesteld op ${i} en gebaseerd op een analyse van een
                web accessibility specialist, gecertificeerd door the International Association of Accessibility
                Professionals (IAAP). Deze toegankelijkheidsverklaring is voor het laatst herzien op ${a}.`;case"SELF_EVALUATED":return e`Deze toegankelijkheidsverklaring is opgesteld op ${i} en gebaseerd op een analyse van
                Departement Omgeving. Deze toegankelijkheidsverklaring is voor het laatst herzien op ${a}.`;case"NOT_EVALUATED":return e`Deze toegankelijkheidsverklaring is opgesteld op ${i} en werd voor het laatst herzien op
                ${a}.`;default:return null}})()}</p>
    </div>`,j=({compliance:t})=>e` <div
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
    </div>`,D=()=>[u,g,h,p,k],z=({application:t,compliance:i,date:a,dateModified:l,evaluation:n,limitations:o})=>e` <section id="content" class="vl-section">
        <div class="vl-content-block">
            <div class="vl-grid vl-stacked-medium">
                <div class="vl-column vl-column--8 vl-column--m-9 vl-column--s-12 vl-column--xs-12">
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
                                <p>Deze toegankelijkheidsverklaring is van toepassing op ${t}.</p>
                            </div>
                            ${A({compliance:i,evaluation:n})}
                            ${$({compliance:i,evaluation:n,limitations:o})}
                            ${O({evaluation:n,date:a,dateModified:l})}
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
                ${j({compliance:i})}
            </div>
        </div>
    </section>`,C=()=>[m],E=({disableBackLink:t,hideBackLink:i})=>e`
    <vl-functional-header
        title="Departement Omgeving"
        sub-title="Toegankelijkheid en gebruiksvoorwaarden"
        link="https://omgeving.vlaanderen.be"
        ?disable-back-link=${t}
        ?hide-back-link=${i}
    ></vl-functional-header>
`,N=()=>[b],_=({version:t,date:i})=>e`
    <section class="vl-section">
        <div class="vl-content-block">
            <div class="vl-grid vl-stacked-medium">
                <div class="vl-column vl-column--10">
                    <vl-title type="h1" no-space-bottom>Toegankelijkheidsverklaring</vl-title>
                </div>
                <div class="vl-column vl-column--10">
                    <vl-paragraph introduction>
                        <span>Versie ${t} - ${i}</span>
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
`;var S=Object.getOwnPropertyDescriptor,V=(t,i,a,l)=>{for(var n=l>1?void 0:l?S(i,a):i,o=t.length-1,r;o>=0;o--)(r=t[o])&&(n=r(n)||n);return n};let v=class extends y{constructor(){super(),this.allowCustomCSS=!1,this.application="deze applicatie",this.compliance="PARTIALLY_COMPLIANT",this.date="20 juli 2021",this.dateModified="20 juli 2021",this.disableBackLink=!1,this.hideBackLink=!1,this.evaluation="NOT_EVALUATED",this.version="1.0.0"}static get styles(){return[w,...L,T]}static get properties(){return{application:{type:String,attribute:"application",reflect:!0},compliance:{type:String,attribute:"compliance",reflect:!0},date:{type:String,attribute:"date",reflect:!0},dateModified:{type:String,attribute:"date-modified",reflect:!0},disableBackLink:{type:Boolean,attribute:"disable-back-link",reflect:!0},hideBackLink:{type:Boolean,attribute:"hide-back-link",reflect:!0},evaluation:{type:String,attribute:"evaluation",reflect:!0},version:{type:String,attribute:"version",reflect:!0},limitations:{type:Object}}}render(){const t={application:this.application,compliance:this.compliance,date:this.date,dateModified:this.dateModified,disableBackLink:this.disableBackLink,hideBackLink:this.hideBackLink,evaluation:this.evaluation,version:this.version,limitations:this.limitations};return e` <slot name="header">${E(t)}</slot> ${_(t)} ${z(t)} `}};c([...new Set([m,...D(),...C(),...N()]),p,d]);v=V([f("vl-accessibility")],v);
