"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[967],{"../../libs/sections/src/accessibility/stories/vl-accessibility.stories.ts":(e,t,i)=>{i.r(t),i.d(t,{AccessibilityDefault:()=>C,AccessibilityHeaderSlot:()=>M,__namedExportsOrder:()=>H,default:()=>I});var n=i("../../node_modules/lit-html/lit-html.js"),a=i("../../node_modules/lit/directives/unsafe-html.js"),l=i("../../libs/common/utilities/src/index.ts"),s=i("../../libs/common/utilities/src/css/index.ts"),o=i("../../libs/components/src/index.ts"),r=i("../../libs/components/src/next/link/index.ts"),d=i("../../libs/components/src/next/title/index.ts"),c=i("../../libs/elements/src/index.ts"),v=i("../../node_modules/lit/index.js"),p=i("../../node_modules/lit/decorators.js"),m=i("../../libs/components/src/next/properties/index.ts");(0,l.gy)([r.m]);let u=()=>(0,v.qy)`
    <vl-link-next href="https://www.w3.org/TR/WCAG21" external icon="external" icon-placement="after">
        Web Content Accessibility Guidelines versie 2.1 niveau AA
    </vl-link-next>
`,h=({compliance:e,evaluation:t})=>(0,v.qy)`
        <div id="compliance-status" class="vl-column-next vl-column-next--12 vl-column-next--m-12">
            <vl-title-next type="h2">Nalevingsstatus</vl-title-next>
            ${"NOT_EVALUATED"===t?(0,v.qy)`Deze website voldoet niet aan de ${u()}.`:(()=>{switch(e){case"FULLY_COMPLIANT":return(0,v.qy)`Deze website voldoet volledig aan de ${u()}.`;case"PARTIALLY_COMPLIANT":return(0,v.qy)`Deze website voldoet gedeeltelijk aan de ${u()} omdat nog niet aan de onderstaande
                eisen is voldaan.`;case"NOT_COMPLIANT":return(0,v.qy)`Deze website voldoet niet aan de ${u()} omdat nog niet aan de onderstaande eisen is
                voldaan.`;default:return null}})()}
        </div>
    `,g=({compliance:e,evaluation:t,limitations:i})=>(0,v.qy)` <div
        style=${"FULLY_COMPLIANT"===e&&"display: none"}
        id="inaccessible-content"
        class="vl-column-next vl-column-next--12 vl-column-next--m-12"
    >
        <vl-title-next type="h2">Niet-toegankelijke inhoud</vl-title-next>
        ${"NOT_EVALUATED"===t?(0,v.qy)`De niet-toegankelijke inhoud is onbekend omdat de website niet is getest.`:"FULLY_COMPLIANT"===e?(0,v.qy)`Er is geen niet-toegankelijke inhoud omdat de website volledig toegankelijk is.`:(0,v.qy)`
            <vl-typography>
                <p>De onderstaande inhoud is niet-toegankelijk om de volgende reden(en):</p>
                ${i&&i.withTiming&&(0,v.qy)`<h3>Niet-naleving van het bestuursdecreet</h3>
                    <ul>
                        ${i.withTiming.map(e=>(0,v.qy)` <li><p>${e}</p></li>`)}
                    </ul>`}
                ${i&&i.withoutTiming&&(0,v.qy)`<h3>Onevenredige last</h3>
                    <ul>
                        ${i.withoutTiming.map(e=>(0,v.qy)` <li><p>${e}</p></li>`)}
                    </ul>`}
                ${i&&i.outsideApplicableLaw&&(0,v.qy)`<h3>De inhoud valt buiten de werkingssfeer van de toepasselijke wetgeving</h3>
                    <ul>
                        ${i.outsideApplicableLaw.map(e=>(0,v.qy)` <li><p>${e}</p></li>`)}
                    </ul>`}
            </vl-typography>
        `}
    </div>`,b=({evaluation:e,date:t,dateModified:i})=>(0,v.qy)` <div id="setup-accessibility-statement" class="vl-column-next vl-column-next--12 vl-column-next--m-12">
        <vl-title-next type="h2">Opstelling van deze toegankelijkheidsverklaring</vl-title-next>
        <p>${(()=>{switch(e){case"EXPERT_EVALUATED":return(0,v.qy)`Deze toegankelijkheidsverklaring is opgesteld op ${t} en gebaseerd op een analyse van een
                web accessibility specialist, gecertificeerd door the International Association of Accessibility
                Professionals (IAAP). Deze toegankelijkheidsverklaring is voor het laatst herzien op ${i}.`;case"SELF_EVALUATED":return(0,v.qy)`Deze toegankelijkheidsverklaring is opgesteld op ${t} en gebaseerd op een analyse van
                Departement Omgeving. Deze toegankelijkheidsverklaring is voor het laatst herzien op ${i}.`;case"NOT_EVALUATED":return(0,v.qy)`Deze toegankelijkheidsverklaring is opgesteld op ${t} en werd voor het laatst herzien op
                ${i}.`;default:return null}})()}</p>
    </div>`;i("../../libs/components/src/next/side-navigation/index.ts");let k=({compliance:e})=>(0,v.qy)` <div
        class="vl-column-next vl-column-next--4 vl-column-next--m-4 vl-column-next--s-4 vl-column-next--xs-0"
    >
        <vl-side-navigation-next  id="side-nav-accessibility" aria-label="inhoudsopgave">
            <vl-side-navigation-h1-next >Op deze pagina</vl-side-navigation-h1-next>
            <vl-side-navigation-content-next >
                <vl-side-navigation-group-next >
                    <vl-side-navigation-item-next  parent>
                        <vl-side-navigation-toggle-next  href="#compliance-status">
                            Nalevingsstatus
                            <i class="vl-vi vl-vi-arrow-right-fat"></i>
                        </vl-side-navigation-toggle-next>
                    </vl-side-navigation-item-next>
                    <vl-side-navigation-item-next
                        style=${"FULLY_COMPLIANT"===e&&"display: none"}

                        parent
                    >
                        <vl-side-navigation-toggle-next  href="#inaccessible-content">
                            Niet-toegankelijke inhoud
                            <i class="vl-vi vl-vi-arrow-right-fat"></i>
                        </vl-side-navigation-toggle-next>
                    </vl-side-navigation-item-next>
                    <vl-side-navigation-item-next  parent>
                        <vl-side-navigation-toggle-next  href="#setup-accessibility-statement">
                            Opstelling van deze toegankelijkheidsverklaring
                            <i class="vl-vi vl-vi-arrow-right-fat"></i>
                        </vl-side-navigation-toggle-next>
                    </vl-side-navigation-item-next>
                    <vl-side-navigation-item-next  parent>
                        <vl-side-navigation-toggle-next  href="#feedback-contact">
                            Feedback en contactgegevens
                            <i class="vl-vi vl-vi-arrow-right-fat"></i>
                        </vl-side-navigation-toggle-next>
                    </vl-side-navigation-item-next>
                    <vl-side-navigation-item-next  parent>
                        <vl-side-navigation-toggle-next  href="#enforcement-procedure">
                            Handhavingsprocedure
                            <i class="vl-vi vl-vi-arrow-right-fat"></i>
                        </vl-side-navigation-toggle-next>
                    </vl-side-navigation-item-next>
                </vl-side-navigation-group-next>
            </div>
        </vl-side-navigation-next>
    </div>`,y=()=>[o.Y4,o.Pq,m.L],f=({application:e,compliance:t,date:i,dateModified:n,evaluation:a,limitations:l})=>(0,v.qy)` <section id="content" is="vl-region">
        <div class="vl-content-block-next">
            <div class="vl-grid-next vl-stacked-next-medium vl-content-block-next">
                <div
                    class="vl-column-next vl-column-next--8 vl-column-next--m-8 vl-column-next--s-8 vl-column-next--xs-12"
                >
                    <vl-side-navigation-reference-next data-vl--scrollspy-content>
                        <div class="vl-grid-next vl-stacked-next-large">
                            <div class="vl-column-next vl-column-next--12 vl-column-next--m-12">
                                <p>
                                    De Vlaamse overheid streeft ernaar haar websites en mobiele applicaties toegankelijk
                                    te maken, overeenkomstig het
                                    <vl-link-next
                                        href="http://www.ejustice.just.fgov.be/cgi_loi/loi_a1.pl?language=nl&cn=2018120705&table_name=wet&caller=list&fromtab=wet#LNK0011"
                                        external
                                        data-vl-inline
                                        >bestuursdecreet van 7 december 2018<span
                                            is="vl-icon"
                                            data-vl-icon="external"
                                            data-vl-after
                                            data-vl-light
                                        ></span
                                    ></vl-link-next>
                                    waarmee de
                                    <vl-link-next
                                        href="https://eur-lex.europa.eu/legal-content/NL/TXT/?uri=uriserv:OJ.L_.2016.327.01.0001.01.NLD&toc=OJ:L:2016:327:TOC"
                                        external
                                        data-vl-inline
                                        >Europese Richtlijn 2016/2102<span
                                            is="vl-icon"
                                            data-vl-icon="external"
                                            data-vl-after
                                            data-vl-light
                                        ></span
                                    ></vl-link-next>
                                    is omgezet.
                                </p>
                                <br />
                                <p>Deze toegankelijkheidsverklaring is van toepassing op ${e}.</p>
                            </div>
                            ${h({compliance:t,evaluation:a})}
                            ${g({compliance:t,evaluation:a,limitations:l})}
                            ${b({evaluation:a,date:i,dateModified:n})}
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
                ${k({compliance:t})}
            </div>
        </div>
    </section>`,x=()=>[o.a7],j=({disableBackLink:e,hideBackLink:t})=>(0,v.qy)`
    <vl-functional-header
        data-vl-title="Departement Omgeving"
        data-vl-sub-title="Toegankelijkheid en gebruiksvoorwaarden"
        data-vl-link="https://omgeving.vlaanderen.be"
        ?data-vl-disable-back-link=${e}
        ?data-vl-hide-back-link=${t}
    ></vl-functional-header>
`,L=()=>[o.Ic],T=({version:e,date:t})=>(0,v.qy)`
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
`;class $ extends l.jW{static{(0,l.gy)([...new Set([o.a7,...y(),...x(),...L()]),d.I,r.m])}static get styles(){return[...c.hF,s.yy]}static get properties(){return{application:{type:String,attribute:"data-vl-application",reflect:!0},compliance:{type:String,attribute:"data-vl-compliance",reflect:!0},date:{type:String,attribute:"data-vl-date",reflect:!0},dateModified:{type:String,attribute:"data-vl-date-modified",reflect:!0},disableBackLink:{type:Boolean,attribute:"data-vl-disable-back-link",reflect:!0},hideBackLink:{type:Boolean,attribute:"data-vl-hide-back-link",reflect:!0},evaluation:{type:String,attribute:"data-vl-evaluation",reflect:!0},version:{type:String,attribute:"data-vl-version",reflect:!0},limitations:{type:Object}}}constructor(){super(),this.allowCustomCSS=!1,this.application="deze applicatie",this.compliance="PARTIALLY_COMPLIANT",this.date="20 juli 2021",this.dateModified="20 juli 2021",this.disableBackLink=!1,this.hideBackLink=!1,this.evaluation="NOT_EVALUATED",this.version="1.0.0"}render(){let e={application:this.application,compliance:this.compliance,date:this.date,dateModified:this.dateModified,disableBackLink:this.disableBackLink,hideBackLink:this.hideBackLink,evaluation:this.evaluation,version:this.version,limitations:this.limitations};return(0,v.qy)` <slot name="header">${j(e)}</slot> ${T(e)} ${f(e)} `}}$=function(e,t,i,n){var a,l=arguments.length,s=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(s=(l<3?a(s):l>3?a(t,i,s):a(t,i))||s);return l>3&&s&&Object.defineProperty(t,i,s),s}([(0,p.EM)("vl-accessibility")],$),i("../../node_modules/react/index.js");var w=i("../../node_modules/react/jsx-runtime.js"),A=i("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),O=i("../../node_modules/@storybook/blocks/dist/index.mjs");function E(e){let t=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",a:"a",h3:"h3"},(0,A.RP)(),e.components),{VluxMetaData:i}=t;return i||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VluxMetaData",!0),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(t.h1,{id:"accessibility",children:"Accessibility"}),"\n",(0,w.jsx)(i,{id:"sections-accessibility"}),"\n",(0,w.jsx)(t.p,{children:"Toegankelijkheidsverklaring pagina."}),"\n",(0,w.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,w.jsx)(t.pre,{children:(0,w.jsx)(t.code,{className:"language-js",children:"import { VlAccessibility } from '@domg-lib/sections';\n"})}),"\n",(0,w.jsx)(t.pre,{children:(0,w.jsx)(t.code,{className:"language-html",children:"<vl-accessibility></vl-accessibility>\n"})}),"\n",(0,w.jsx)(O.Hl,{of:C}),"\n",(0,w.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,w.jsx)(O.ov,{of:C}),"\n",(0,w.jsx)(t.h2,{id:"header-slot",children:"Header Slot"}),"\n",(0,w.jsxs)(t.p,{children:["Standaard wordt deze template gebruikt om de ",(0,w.jsx)(t.code,{children:"functional-header"})," te bepalen in deze component."]}),"\n",(0,w.jsx)(O.kL,{code:'import { html } from \'lit\';\nimport { VlFunctionalHeaderComponent } from \'@domg-wc/components\';\nexport const headerElements = ()=>[\n        VlFunctionalHeaderComponent\n    ];\nexport const header = ({ disableBackLink, hideBackLink })=>html`\n    <vl-functional-header\n        data-vl-title="Departement Omgeving"\n        data-vl-sub-title="Toegankelijkheid en gebruiksvoorwaarden"\n        data-vl-link="https://omgeving.vlaanderen.be"\n        ?data-vl-disable-back-link=${disableBackLink}\n        ?data-vl-hide-back-link=${hideBackLink}\n    ></vl-functional-header>\n`;\n',language:"ts",dark:!0}),"\n",(0,w.jsxs)(t.p,{children:["Als je wijzigingen wil aanbrengen in de functional header, kan je de standaard ",(0,w.jsx)(t.code,{children:"vl-functional-header"})," vervangen door een\nander, eventueel aangepaste header element."]}),"\n",(0,w.jsx)(t.p,{children:"Je kan dit bijvoorbeeld vervangen door:"}),"\n",(0,w.jsxs)(t.ul,{children:["\n",(0,w.jsxs)(t.li,{children:["een ",(0,w.jsx)(t.a,{href:"/docs/components-content-header--content-header-default",children:"vl-content-header"})]}),"\n",(0,w.jsxs)(t.li,{children:["of een ",(0,w.jsx)(t.a,{href:"/docs/components-functional-header--functional-header-default",children:"vl-functional-header"})," met andere opties dan de\nstandaard ",(0,w.jsx)(t.code,{children:"functional-header"})," van dit component."]}),"\n"]}),"\n",(0,w.jsxs)(t.p,{children:["In het voorbeeld hieronder kan je zien hoe je voor de ",(0,w.jsx)(t.code,{children:"vl-functional-header"})," bij de teruglink (",(0,w.jsx)(t.code,{children:"data-vl-back"}),') "Start"\nals label kan geven in plaats van "Terug".']}),"\n",(0,w.jsx)(O.Hl,{of:M}),"\n",(0,w.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,w.jsx)(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,w.jsx)(t.p,{children:(0,w.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-accessibility--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Accessibility"})}),"\n",(0,w.jsx)(t.p,{children:(0,w.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlAccessibility.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Accessibility"})}),"\n",(0,w.jsx)(t.p,{children:(0,w.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-accessibility.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - Accessibility"})})]})}let S={FULLY_COMPLIANT:"FULLY_COMPLIANT",PARTIALLY_COMPLIANT:"PARTIALLY_COMPLIANT",NOT_COMPLIANT:"NOT_COMPLIANT"},D={EXPERT_EVALUATED:"EXPERT_EVALUATED",SELF_EVALUATED:"SELF_EVALUATED",NOT_EVALUATED:"NOT_EVALUATED"};var _=i("../../libs/common/storybook/src/index.ts"),B=i("../../node_modules/@storybook/addon-actions/dist/index.mjs");let N={application:"deze applicatie",compliance:`${S.PARTIALLY_COMPLIANT}`,date:"20 juli 2021",dateModified:"20 juli 2021",disableBackLink:!1,hideBackLink:!1,evaluation:`${D.NOT_EVALUATED}`,version:"1.0.0",limitations:null,onClickBack:(0,B.XI)("vl-click-back"),headerSlot:""},P={application:{name:"data-vl-application",description:"De applicatie waar de verklaring over gaat.",table:{type:{summary:_.QE.STRING},category:_.R6.ATTRIBUTES,defaultValue:{summary:N.application}}},compliance:{name:"data-vl-compliance",description:"De nalevingsstatus van de verklaring.",control:{type:_.VH.SELECT},options:Object.values(S),table:{type:(0,_.uf)(Object.values(S)),category:_.R6.ATTRIBUTES,defaultValue:{summary:N.compliance}}},date:{name:"data-vl-date",description:"De aanmaakdatum van de verklaring.",table:{type:{summary:_.QE.STRING},category:_.R6.ATTRIBUTES,defaultValue:{summary:N.date}}},dateModified:{name:"data-vl-date-modified",description:"De datum van de laatste wijziging van de verklaring.",table:{type:{summary:_.QE.STRING},category:_.R6.ATTRIBUTES,defaultValue:{summary:N.dateModified}}},disableBackLink:{name:"data-vl-disable-back-link",description:"Zet de terug-link uit.",table:{type:{summary:_.QE.BOOLEAN},category:_.R6.ATTRIBUTES,defaultValue:{summary:N.disableBackLink}}},hideBackLink:{name:"data-vl-hide-back-link",description:"Verwijdert de terug-link.",table:{type:{summary:_.QE.BOOLEAN},category:_.R6.ATTRIBUTES,defaultValue:{summary:N.hideBackLink}}},evaluation:{name:"data-vl-evaluation",description:"De evaluatiestatus van de verklaring.",control:{type:_.VH.SELECT},options:Object.values(D),table:{type:{summary:(0,_.uf)(Object.values(D))},category:_.R6.ATTRIBUTES,defaultValue:{summary:N.evaluation}}},version:{name:"data-vl-version",description:"De huidige versie van de verklaring.",table:{type:{summary:_.QE.STRING},category:_.R6.ATTRIBUTES,defaultValue:{summary:N.version}}},limitations:{name:"limitations",description:"Property om limitaties mee te geven aan de verklaring. Het object bevat 3 optionele properties. De `withTiming` limitaties vallen onder 'Niet-naleving van het bestuursdecreet'. Dit zijn tijdelijke limitaties. `withoutTiming` limitaties vallen onder 'Onevenredige last'. Dit zijn permanente limitaties. De `outsideApplicableLaw` limitaties vallen onder 'De inhoud valt buiten de werkingssfeer van de toepasselijke wetgeving'. Dit zijn limitaties die buiten de werkingssfeer van de toepasselijke wetgeving vallen.",table:{type:{summary:"object"},category:_.R6.PROPERTIES}},onClickBack:{name:"vl-click-back",description:"Afgevuurd na het klikken op de terug-link.",table:{type:{summary:"-"},category:_.R6.EVENTS}},headerSlot:{name:"header",description:"Hiermee kan je de standaard functional header vervangen door een header naar keuze.",table:{type:{summary:_.QE.HTML},category:_.R6.SLOTS,defaultValue:N.headerSlot}}},I={id:"sections-accessibility",title:"sections/accessibility",tags:["autodocs"],args:N,argTypes:P,parameters:{layout:"fullscreen",docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,A.RP)(),e.components);return t?(0,w.jsx)(t,Object.assign({},e,{children:(0,w.jsx)(E,e)})):E(e)}}}},R=(0,_._7)(N,({application:e,compliance:t,date:i,dateModified:l,disableBackLink:s,hideBackLink:o,evaluation:r,version:d,limitations:c,onClickBack:v,headerSlot:p})=>(0,n.qy)`
        <vl-accessibility
            data-vl-application=${e}
            data-vl-compliance=${t}
            data-vl-date=${i}
            data-vl-date-modified=${l}
            ?data-vl-disable-back-link=${s}
            ?data-vl-hide-back-link=${o}
            data-vl-evaluation=${r}
            data-vl-version=${d}
            .limitations=${c}
            @vl-click-back=${v}
        >
            ${(0,a._)(p)}
        </vl-accessibility>
    `),q={withTiming:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],withoutTiming:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],outsideApplicableLaw:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]},C=R.bind({});C.storyName="vl-accessibility - default",C.args={limitations:q};let M=R.bind({});M.storyName="vl-accessibility - header slot",M.args={limitations:q,headerSlot:`
    <vl-functional-header
        slot="header"
        data-vl-title="Departement Omgeving & Andere"
        data-vl-sub-title="Toegankelijkheid en gebruiksvoorwaarden "
        data-vl-link="https://omgeving.vlaanderen.be"
        data-vl-back="Start"
    ></vl-functional-header>`},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:"story(accessibilityArgs, ({\n  application,\n  compliance,\n  date,\n  dateModified,\n  disableBackLink,\n  hideBackLink,\n  evaluation,\n  version,\n  limitations,\n  onClickBack,\n  headerSlot\n}) => html`\n        <vl-accessibility\n            data-vl-application=${application}\n            data-vl-compliance=${compliance}\n            data-vl-date=${date}\n            data-vl-date-modified=${dateModified}\n            ?data-vl-disable-back-link=${disableBackLink}\n            ?data-vl-hide-back-link=${hideBackLink}\n            data-vl-evaluation=${evaluation}\n            data-vl-version=${version}\n            .limitations=${limitations}\n            @vl-click-back=${onClickBack}\n        >\n            ${unsafeHTML(headerSlot)}\n        </vl-accessibility>\n    `)",...C.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:"story(accessibilityArgs, ({\n  application,\n  compliance,\n  date,\n  dateModified,\n  disableBackLink,\n  hideBackLink,\n  evaluation,\n  version,\n  limitations,\n  onClickBack,\n  headerSlot\n}) => html`\n        <vl-accessibility\n            data-vl-application=${application}\n            data-vl-compliance=${compliance}\n            data-vl-date=${date}\n            data-vl-date-modified=${dateModified}\n            ?data-vl-disable-back-link=${disableBackLink}\n            ?data-vl-hide-back-link=${hideBackLink}\n            data-vl-evaluation=${evaluation}\n            data-vl-version=${version}\n            .limitations=${limitations}\n            @vl-click-back=${onClickBack}\n        >\n            ${unsafeHTML(headerSlot)}\n        </vl-accessibility>\n    `)",...M.parameters?.docs?.source}}};let H=["AccessibilityDefault","AccessibilityHeaderSlot"]},"../../node_modules/lit-html/directives/unsafe-html.js":(e,t,i)=>{i.d(t,{_:()=>s});var n=i("../../node_modules/lit-html/lit-html.js"),a=i("../../node_modules/lit-html/directive.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class l extends a.WL{constructor(e){if(super(e),this.et=n.s6,e.type!==a.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===n.s6||null==e)return this.vt=void 0,this.et=e;if(e===n.c0)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;var t=[e];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}}l.directiveName="unsafeHTML",l.resultType=1;var s=(0,a.u$)(l)},"../../node_modules/lit/directives/unsafe-html.js":(e,t,i)=>{i.d(t,{_:()=>n._});var n=i("../../node_modules/lit-html/directives/unsafe-html.js")},"../../libs/components/src/next/properties/index.ts":(e,t,i)=>{i.d(t,{L:()=>n.L});var n=i("../../libs/components/src/next/properties/vl-properties.component.ts")},"../../libs/components/src/next/properties/vl-properties.component.ts":(e,t,i)=>{i.d(t,{L:()=>g});var n=i("../../libs/common/utilities/src/index.ts"),a=i("../../libs/elements/src/index.ts"),l=i("../../node_modules/lit/index.js");let s=e=>e.map(e=>e.cloneNode(!0)),o=e=>{let t=[],i=[],n=[];return e.forEach(e=>{switch(e.localName){case"label":i.length&&n.length&&(t.push({labels:i,data:n}),i=[],n=[]),i.push(e.children.length>0?s([...e.children]):e.innerHTML);break;case"data":n.push(e.children.length>0?s([...e.children]):e.innerHTML)}}),i.length&&t.push({labels:i,data:n}),t},r=e=>null==e||0==e.length?(console.warn("vl-properties - geen props opgegeven"),[]):e[0]?.localName==="div"?e.map(e=>({class:e.className,items:o([...e.children])})):[{items:o(e)}];var d=i("../../libs/common/utilities/src/css/index.ts");let c=e=>(0,l.AH)`
        width: calc(${e}% - 1rem);
    `,v=()=>(0,l.AH)`
        font-size: 1.6rem;
    `,p=()=>(0,l.AH)`
        grid-column: 1;
        font-size: 1.6rem;
    `,m=e=>(0,l.AH)`
        dl,
        dl .item {
            grid-template-columns: [labels] ${e}% [data] auto;
        }

        dl .column--full-width,
        dl .column--full-width .item {
            grid-template-columns: [labels] ${e/2}% [data] auto;
        }

        @media screen and (max-width: ${d.gT}px) {
            dl {
                grid-template-columns: 100%;
            }

            dl .item {
                grid-template-columns: 100%;
            }
        }
    `,u=(0,l.AH)`
    :host {
        display: block;
    }

    .column {
        ${c(50)};
        float: left;
    }

    .column--full-width {
        ${c(100)};
        float: left;
    }

    dl {
        display: grid;
        word-break: break-word;
    }

    dl:has(.item) {
        display: initial;
    }

    dl .item {
        display: grid;
        padding-bottom: 2rem;
    }

    dt {
        font-size: 1.8rem;
        color: var(--vl-color--label);
        padding-right: 1rem;
        grid-column: 1;
    }

    .collapsed dt {
        ${v()}
    }

    dd {
        font-size: 1.8rem;
        grid-column: 2;
    }

    .collapsed dd {
        ${p()}
    }

    @media screen and (max-width: ${d.gT}px) {
        .column {
            ${c(100)};
        }

        dd {
            ${p()}
        }

        dt {
            ${v()}
        }
    }
`;var h=i("../../libs/components/src/next/properties/vl-properties.defaults.ts");class g extends n.jW{static get styles(){return[a.hF,u]}static get properties(){return{props:{type:Array},aggregatedProps:{type:Array,state:!0},labelWidth:{type:Number,attribute:"label-width"}}}set props(e){this.attributeProps=e,this.buildInternalProperties()}get props(){return this.attributeProps}connectedCallback(){super.connectedCallback(),this.buildInternalProperties(),this.observeLightPropertiesChange()}firstUpdated(e){super.firstUpdated(e),this.shadowRoot&&(this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,this.labelWidthSheet])}updated(e){super.updated(e),e.has("labelWidth")&&this.labelWidth&&this.labelWidthSheet.replace(m(this.labelWidth).toString())}disconnectedCallback(){super.disconnectedCallback(),this.disconnectMutationObservers()}render(){return(0,l.qy)` <dl>${this.aggregatedProps.map(e=>this.renderColumn(e))}</dl> `}renderColumn(e){return e.class?(0,l.qy)` <div class="${e.class}">${e.items.map(e=>this.renderItem(e))}</div>`:(0,l.qy)` ${e.items.map(e=>this.renderItem(e))}`}renderItem(e){return(0,l.qy)` <div class="item">${this.renderLabels(e.labels)} ${this.renderData(e.data)}</div>`}renderLabels(e){return e.map(e=>(0,l.qy)` <dt>${e}</dt>`)}renderData(e){return e.map(e=>(0,l.qy)` <dd>${e}</dd>`)}buildInternalProperties(){this.aggregatedProps=[...this.attributeProps,...r([...this.children])]}disconnectMutationObservers(){this.mutationObserverList.forEach(e=>e.disconnect()),this.mutationObserverList=[]}observeLightPropertiesChange(){this.disconnectMutationObservers(),this.mutationObserverList=[...this.mutationObserverList,(0,n.U_)(this,e=>{this.buildInternalProperties(),this.observeLightPropertiesChange()})],this.children.length>0&&"div"===this.children[0].localName&&[...this.children].forEach(e=>this.mutationObserverList=[...this.mutationObserverList,(0,n.U_)(e,e=>{this.buildInternalProperties()})])}constructor(...e){super(...e),this.attributeProps=h.g.props,this.aggregatedProps=h.g.props,this.mutationObserverList=[],this.labelWidth=h.g.labelWidth,this.labelWidthSheet=new CSSStyleSheet}}g=function(e,t,i,n){var a,l=arguments.length,s=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(s=(l<3?a(s):l>3?a(t,i,s):a(t,i))||s);return l>3&&s&&Object.defineProperty(t,i,s),s}([(0,n.M1)("vl-properties-next")],g)},"../../libs/components/src/next/properties/vl-properties.defaults.ts":(e,t,i)=>{i.d(t,{g:()=>n});let n={labelWidth:25,props:[]}},"../../libs/components/src/next/title/index.ts":(e,t,i)=>{i.d(t,{I:()=>n.I});var n=i("../../libs/components/src/next/title/vl-title.component.ts")},"../../libs/components/src/next/title/vl-title.component.ts":(e,t,i)=>{i.d(t,{I:()=>d});var n=i("../../libs/common/utilities/src/index.ts");i("../../node_modules/@lit/reactive-element/reactive-element.js");var a=i("../../node_modules/lit-html/lit-html.js");i("../../node_modules/lit-element/lit-element.js");/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l=(e,t,i)=>{for(var n of t)if(n[0]===e)return(0,n[1])();return null==i?void 0:i()},s=i("../../node_modules/lit/directives/class-map.js"),o=i("../../libs/components/src/next/title/vl-title.css.ts"),r=i("../../libs/components/src/next/title/vl-title.defaults.ts");class d extends n.jW{static get styles(){return[o.Z]}static get properties(){return{type:{type:String},underline:{type:Boolean},noSpaceBottom:{type:Boolean,attribute:"no-space-bottom"},alt:{type:Boolean}}}render(){let e={underline:this.underline,"no-space-bottom":this.noSpaceBottom,alt:this.alt};return(0,a.qy)`
            ${l(this.type,[["h1",()=>(0,a.qy)` <h1 class=${(0,s.H)(e)} part="h1">
                            <slot></slot>
                        </h1>`],["h2",()=>(0,a.qy)` <h2 class=${(0,s.H)(e)} part="h2">
                            <slot></slot>
                        </h2>`],["h3",()=>(0,a.qy)` <h3 class=${(0,s.H)(e)} part="h3">
                            <slot></slot>
                        </h3>`],["h4",()=>(0,a.qy)` <h4 class=${(0,s.H)(e)} part="h4">
                            <slot></slot>
                        </h4>`],["h5",()=>(0,a.qy)` <h5 class=${(0,s.H)(e)} part="h5">
                            <slot></slot>
                        </h5>`],["h6",()=>(0,a.qy)` <h6 class=${(0,s.H)(e)} part="h6">
                            <slot></slot>
                        </h6>`]],()=>(0,a.qy)` <h1 class=${(0,s.H)(e)} part="h1">
                    <slot></slot>
                </h1>`)}
        `}constructor(...e){super(...e),this.type=r.D.type,this.underline=r.D.underline,this.noSpaceBottom=r.D.noSpaceBottom,this.alt=r.D.alt}}d=function(e,t,i,n){var a,l=arguments.length,s=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(s=(l<3?a(s):l>3?a(t,i,s):a(t,i))||s);return l>3&&s&&Object.defineProperty(t,i,s),s}([(0,n.M1)("vl-title-next")],d)},"../../libs/components/src/next/title/vl-title.defaults.ts":(e,t,i)=>{i.d(t,{D:()=>n});let n={type:"h1",underline:!1,alt:!1,noSpaceBottom:!1}}}]);