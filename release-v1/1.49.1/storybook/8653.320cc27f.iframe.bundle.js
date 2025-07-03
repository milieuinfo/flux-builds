"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[8653],{"../../libs/sections/src/cookie-statement/vl-cookie-statement.section.ts":(e,t,n)=>{var i=n("../../libs/common/utilities/src/index.ts"),o=n("../../libs/common/utilities/src/css/index.ts"),a=n("../../libs/components/src/index.ts"),l=n("../../libs/components/src/next/link/index.ts"),r=n("../../libs/components/src/next/paragraph/index.ts"),s=n("../../libs/components/src/next/properties/index.ts"),d=n("../../libs/components/src/next/side-navigation/index.ts"),c=n("../../libs/components/src/next/title/index.ts"),v=n("../../libs/elements/src/index.ts"),p=n("../../node_modules/lit-html/lit-html.js"),k=n("../../node_modules/lit/index.js");let u=()=>[a.a7],m=()=>(0,k.qy)`
    <vl-functional-header
        data-vl-title="Departement Omgeving"
        data-vl-sub-title="Cookieverklaring"
        data-vl-link="https://omgeving.vlaanderen.be"
    ></vl-functional-header>
`,g=(0,k.AH)`
    :host {
        display: block;
    }

    vl-header-cookie,
    vl-header-authentication-cookie,
    vl-authentication-cookie,
    vl-jsessionid-cookie,
    vl-sticky-session-cookie,
    ::slotted(vl-cookie:not(:last-of-type)) {
        margin-bottom: 1.8rem;
    }
`,b=[...v.hF,g];class h extends(0,i.H3)(HTMLElement){static{(0,i.gy)([s.L,c.I])}constructor({title:e,name:t,purpose:n,domain:i,processor:o,validity:a}={}){super(`
            <style>
              ${b.join("")}
            </style>
    `),this._element.insertAdjacentHTML("afterend",`
                <vl-title-next type="h3">${e||this.dataset.vlTitle}</vl-title-next>
                <vl-properties-next slot="properties">
                    <label>Naam</label>
                    <data>${(()=>{let e=t||this.dataset.vlName;return Array.isArray(e)?`
                    <vl-typography>
                        <ul>
                            ${e.map(e=>`<li>${e}</li>`).join("")}
                        </ul>
                    </vl-typography>
                `:e})()}</data>
                    <label>Doel</label>
                    <data>${n||this.dataset.vlPurpose}</data>
                    <label>Type</label>
                    <data>Cookie</data>
                    <label>Domein</label>
                    <data>${i||this.dataset.vlDomain}</data>
                    <label>Verwerker</label>
                    <data>${o||this.dataset.vlProcessor}</data>
                    <label>Geldigheid</label>
                    <data>${a||this.dataset.vlValidity}</data>
                </vl-properties-next>
            `)}}h=function(e,t,n,i){var o,a=arguments.length,l=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(l=(a<3?o(l):a>3?o(t,n,l):o(t,n))||l);return a>3&&l&&Object.defineProperty(t,n,l),l}([(0,i.M1)("vl-cookie")],h);class x extends h{constructor(){super({title:"Departement Omgeving toegangsbeheer cookies",name:["KEYCLOAK_SESSION","KEYCLOAK_SESSION_LEGACY"],purpose:"Sessiegebaseerde cookies die het mogelijk maken om gebruikers te herkennen op een webpagina van Departement Omgeving.",domain:window.location.hostname,processor:"Departement Omgeving",validity:"10 uur"})}}x=function(e,t,n,i){var o,a=arguments.length,l=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(l=(a<3?o(l):a>3?o(t,n,l):o(t,n))||l);return a>3&&l&&Object.defineProperty(t,n,l),l}([(0,i.M1)("vl-authentication-cookie")],x);class f extends h{constructor(){super({title:"Vlaams toegangsbeheer cookies",name:["AMWEBJCT!%2Fsps!JSESSIONID","https%3A%2F%2Fauthenticatie.vlaanderen.be%2Fsps%2Fvidp%2Fsaml20FIMSAML20","PD_STATEFUL_5bb64e42-0d53-11e2-a712-52540052f0ed","PD-H-SESSION-ID","tbsession"],purpose:"Sessiegebaseerde cookies die het mogelijk maken om gebruikers te herkennen op een webpagina van het Vlaams toegangsbeheer.",domain:"authenticatie.vlaanderen.be",processor:"Vlaamse overheid",validity:"Sessie"})}}f=function(e,t,n,i){var o,a=arguments.length,l=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(l=(a<3?o(l):a>3?o(t,n,l):o(t,n))||l);return a>3&&l&&Object.defineProperty(t,n,l),l}([(0,i.M1)("vl-header-authentication-cookie")],f);class w extends h{constructor(){super({title:"Vlaanderen header cookie",name:"VOGANONUSER",purpose:"De Reverse Proxy van de Vlaamse overheid plaats dit cookie in kader van de Vlaanderen header op Vlaanderen.be om de goede uitvoering van de verzending van communicatie over een elektronisch communicatienetwerk van de Vlaamse overheid te verzekeren.",domain:"vlaanderen.be",processor:"Vlaamse overheid",validity:"Permanente cookies met een geldigheid van maximaal 24 uur"})}}w=function(e,t,n,i){var o,a=arguments.length,l=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(l=(a<3?o(l):a>3?o(t,n,l):o(t,n))||l);return a>3&&l&&Object.defineProperty(t,n,l),l}([(0,i.M1)("vl-header-cookie")],w);class y extends h{constructor(){super({title:"Sessie cookie voor betere gebruikerservaring",name:["JSESSIONID","KEYCLOAK_IDENTITY","KEYCLOAK_IDENTITY_LEGACY"],purpose:"De cookie wordt gebruikt om een sessie tussen de applicatieserver en een gebruiker in stand te houden. Dankzij deze cookie kan een gebruiker door de server op een uniek manier geïdentificeerd worden.",domain:window.location.hostname,processor:"Departement Omgeving",validity:"Beperkt tot de duur van de sessie"})}}y=function(e,t,n,i){var o,a=arguments.length,l=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(l=(a<3?o(l):a>3?o(t,n,l):o(t,n))||l);return a>3&&l&&Object.defineProperty(t,n,l),l}([(0,i.M1)("vl-jsessionid-cookie")],y);class O extends h{constructor(){super({title:"Persistentie sessie cookie voor betere gebruikerservaring",name:['BIGipServerPool-AUTO-* (vb. "BIGipServerPOOL-AUTO-app=2016879114.37407.0000")','BIGipServerPool-sso-pr-* (vb. "BIGipServerPOOL-sso-pr-app=2016879114.37407.0000")'],purpose:'Dankzij de cookie kan er verzekerd worden dat verzoeken van een gebruiker voor de duur van een sessie worden gedistribueerd naar de server waarop ze zijn gestart. De cookies worden daarom vaak beschreven als "sticky sessions". Hierdoor kan een betere gebruikerservaring gerealiseerd worden. Bovendien kan de infrastructuur optimaal gebruikt worden.',domain:window.location.hostname,processor:"Departement Omgeving",validity:"Beperkt tot de duur van de sessie"})}}O=function(e,t,n,i){var o,a=arguments.length,l=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(l=(a<3?o(l):a>3?o(t,n,l):o(t,n))||l);return a>3&&l&&Object.defineProperty(t,n,l),l}([(0,i.M1)("vl-sticky-session-cookie")],O);class j extends(0,i.H3)(HTMLElement){static{(0,i.gy)([v.D,v.dI,v.mq,v.xf,v.Z$,v.zY,v.nJ,v.Q1,a.Y4,a.Pq,s.L,a.Ic,d.N8,c.I,l.m,r.Q,a.a7,...u()])}static get _observedAttributes(){return["date","disable-back-link","hide-back-link","version"]}constructor(){super(`
            <style>
                ${b.join("")}
                ${o.as}
                ${o.B2}
                ${o.DE}
            </style>
             <slot name="header"></slot>
            `);let e=this.shadowRoot.querySelector('slot[name="header"]');e&&(0,p.XX)(m(),e),this.allowCustomCSS=!1,this._element.insertAdjacentHTML("afterend",`
                <section class="vl-section-next">
                    <div class="vl-content-block-next">
                        <div class="vl-grid-next vl-stacked-next-small">
                            <div class="vl-column-next vl-column-next--10">
                                <vl-title-next type="h1" no-space-bottom>Cookieverklaring</vl-title-next>
                            </div>
                            <div class="vl-column-next vl-column-next--10">
                                <vl-paragraph-next introduction>
                                    <span>Versie</span> <span id="introduction-version">1.0.0</span> -
                                    <span id="introduction-date">3 maart 2021</span>
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

                <section class="vl-section-next">
                    <div class="vl-content-block-next">
                        <div class="vl-grid-next vl-stacked-next-medium">
                            <div
                                class="vl-column-next vl-column-next--8 vl-column-next--m-8 vl-column-next--s-12 vl-column-next--xs-12"
                            >
                                <vl-side-navigation-reference-next>
                                    <div class="vl-grid-next vl-stacked-next-large">
                                        <div
                                            id="cookie-policy"
                                            class="vl-column-next vl-column-next--12 vl-column-next--m-12"
                                        >
                                            <vl-title-next type="h2">Cookiebeleid</vl-title-next>
                                            <p>
                                                Departement Omgeving (verder ‘dOMG’) vindt het belangrijk dat u op
                                                iedere plaats en elk ogenblik haar dOMG-inhoud kan bekijken,
                                                beluisteren, lezen of beleven via diverse mediaplatformen. dOMG wil ook
                                                werken aan interactieve diensten en diensten op uw maat. Op
                                                dOMG-onlinediensten worden technieken gehanteerd om dit mogelijk te
                                                maken, bijvoorbeeld met behulp van cookies en scripts. Deze technieken
                                                worden hierna gemakkelijkheidshalve cookies genoemd. In dit cookiebeleid
                                                wenst dOMG u te informeren welke cookies worden gebruikt en waarom dit
                                                gebeurt. Verder wordt toegelicht in welke mate u als gebruiker het
                                                gebruik kan controleren. dOMG wil namelijk graag uw privacy en de
                                                gebruiksvriendelijkheid van haar onlinediensten zoveel mogelijk
                                                waarborgen.
                                            </p>
                                            <br />
                                            <p>
                                                Dit cookiebeleid is van toepassing op alle 'dOMG-onlinediensten', met
                                                name alle websites, (mobiele) applicaties en internetdiensten die dOMG
                                                aanbiedt en die toegang geven tot dOMG-inhoud.
                                            </p>
                                            <br />
                                            <p>
                                                dOMG kan het cookiebeleid op elk moment veranderen. Dat kan bijvoorbeeld
                                                gebeuren in het kader van veranderingen aan haar diensten of de geldende
                                                wetgeving. Het gewijzigde beleid wordt dan bekendgemaakt op de relevante
                                                onlinediensten en geldt vanaf het moment dat deze bekendgemaakt wordt.
                                            </p>
                                        </div>

                                        <div
                                            id="cookie-definition"
                                            class="vl-column-next vl-column-next--12 vl-column-next--m-12"
                                        >
                                            <vl-title-next type="h2">Wat zijn cookies precies?</vl-title-next>
                                            <p>
                                                Cookies zijn kleine gegevens- of tekstbestanden die op uw computer of
                                                mobiele apparaat worden ge\xefnstalleerd wanneer u een website bezoekt of
                                                een (mobiele) toepassing gebruikt. Het cookiebestand bevat een unieke
                                                code waarmee uw browser herkend kan worden tijdens het bezoek aan de
                                                online service of tijdens opeenvolgende, herhaalde bezoeken. Cookies
                                                kunnen worden geplaatst door de server van de website of applicatie die
                                                u bezoekt, maar ook door servers van derden die al dan niet met deze
                                                website of applicatie samenwerken.
                                            </p>
                                            <br />
                                            <p>
                                                Cookies maken over het algemeen de interactie tussen de bezoeker en de
                                                website of applicatie gemakkelijker en sneller en helpen de bezoeker om
                                                te navigeren tussen de verschillende delen van een website of
                                                applicatie.
                                            </p>
                                        </div>

                                        <div
                                            id="cookie-management"
                                            class="vl-column-next vl-column-next--12 vl-column-next--m-12"
                                        >
                                            <vl-title-next type="h2"
                                                >Hoe kan ik het gebruik van cookies op deze onlinediensten weigeren of
                                                beheren?</vl-title-next
                                            >
                                            <vl-typography>
                                                <p>
                                                    U kunt de installatie van cookies weigeren via uw
                                                    browserinstellingen. U kunt op elk gewenst moment ook de reeds
                                                    ge\xefnstalleerde cookies van uw computer of mobiele apparaat
                                                    verwijderen. Instructies vindt u op de website van uw browser:
                                                </p>
                                                <ul>
                                                    <li>
                                                        <vl-link-next
                                                            href="https://support.microsoft.com/nl-be/help/17479/windows-internet-explorer-11-change-security-privacy-settings"
                                                            external
                                                            >Microsoft Internet Explorer</vl-link-next
                                                        >
                                                    </li>
                                                    <li>
                                                        <vl-link-next
                                                            href="https://support.microsoft.com/nl-nl/help/4468242/microsoft-edge-browsing-data-and-privacy-microsoft-privacy"
                                                            external
                                                            >Microsoft Edge</vl-link-next
                                                        >
                                                    </li>
                                                    <li>
                                                        <vl-link-next
                                                            href="http://support.google.com/chrome/bin/answer.py?hl=nl&amp;answer=95647"
                                                            external
                                                            >Google Chrome</vl-link-next
                                                        >
                                                    </li>
                                                    <li>
                                                        <vl-link-next
                                                            href="http://support.mozilla.org/nl/kb/cookies-in-en-uitschakelen-websites-voorkeuren?redirectlocale=nl&amp;redirectslug=Cookies+in-+en+uitschakelen"
                                                            external
                                                            >Mozilla Firefox</vl-link-next
                                                        >
                                                    </li>
                                                    <li>
                                                        <vl-link-next href="http://support.apple.com/kb/PH5042" external
                                                            >Apple Safari</vl-link-next
                                                        >
                                                    </li>
                                                </ul>
                                                <p>
                                                    Wanneer u cookies uitschakelt, moet u er rekening mee houden dat
                                                    bepaalde grafische elementen er niet mooi kunnen uitzien, of dat u
                                                    bepaalde toepassingen niet kunt gebruiken. Hieronder vindt u een
                                                    gedetailleerde lijst van alle cookies die in deze website of
                                                    toepassing worden gebruikt.
                                                </p>
                                            </vl-typography>
                                        </div>

                                        <div
                                            id="cookie-usage"
                                            class="vl-column-next vl-column-next--12 vl-column-next--m-12"
                                        >
                                            <vl-title-next type="h2">Gebruikte cookies</vl-title-next>
                                            <vl-header-cookie></vl-header-cookie>
                                            <vl-header-authentication-cookie></vl-header-authentication-cookie>
                                            <vl-authentication-cookie></vl-authentication-cookie>
                                            <vl-jsessionid-cookie></vl-jsessionid-cookie>
                                            <vl-sticky-session-cookie></vl-sticky-session-cookie>
                                            <slot></slot>
                                        </div>
                                    </div>
                                </vl-side-navigation-reference-next>
                            </div>

                            <div
                                class="vl-column-next vl-column-next--4 vl-column-next--m-4 vl-column-next--s-12 vl-column-next--xs-12"
                            >
                                <vl-side-navigation-next aria-label="inhoudsopgave">
                                    <vl-side-navigation-h2-next>Op deze pagina</vl-side-navigation-h2-next>
                                    <vl-side-navigation-content-next>
                                        <vl-side-navigation-group-next>
                                            <vl-side-navigation-item-next>
                                                <a href="#cookie-policy">
                                                    Cookiebeleid
                                                </a>
                                            </vl-side-navigation-item-next>
                                            <vl-side-navigation-item-next>
                                                <a href="#cookie-definition">
                                                    Wat zijn cookies precies
                                                </a>
                                            </vl-side-navigation-item-next>
                                            <vl-side-navigation-item-next>
                                                <a href="#cookie-management">
                                                    Hoe kan ik het gebruik van cookies op deze onlinediensten weigeren
                                                    of beheren?
                                                </a>
                                            </vl-side-navigation-item-next>
                                            <vl-side-navigation-item-next>
                                                <a href="#cookie-usage">
                                                    Gebruikte cookies
                                                </a>
                                            </vl-side-navigation-item-next>
                                        </vl-side-navigation-group-next>
                                    </vl-side-navigation-content-next>
                                </vl-side-navigation-next>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="vl-section-next vl-section-next--overlap">
                    <div class="vl-content-block-next">
                        <div class="vl-grid-next vl-stacked-next-medium">
                            <div class="vl-column-next vl-column-next--12 vl-column-next--m-12">
                                <vl-contact-card>
                                    <vl-infoblock slot="info" data-vl-type="contact">
                                        <h3 slot="title">Departement Omgeving</h3>
                                    </vl-infoblock>
                                    <vl-properties-next slot="properties">
                                        <label>Adres</label>
                                        <data>
                                            <div>Herman Teirlinckgebouw</div>
                                            <div>Havenlaan 88</div>
                                            <div>1000 Brussel, Belgi\xeb</div>
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
                                        <label>Website</label>
                                        <data>
                                            <vl-link-next href="http://www.omgevingvlaanderen.be" external>
                                                http://www.omgevingvlaanderen.be
                                            </vl-link-next>
                                        </data>
                                    </vl-properties-next>
                                </vl-contact-card>
                            </div>
                        </div>
                    </div>
                </section>
            `)}_versionChangedCallback(e,t){this._shadow.getElementById("introduction-version").innerText=t}_dateChangedCallback(e,t){this._shadow.getElementById("introduction-date").innerText=t}_disableBackLinkChangedCallback(){let e=this._shadow.querySelector("vl-functional-header");this.hasAttribute("disable-back-link")?e.setAttribute("data-vl-disable-back-link",""):e.removeAttribute("data-vl-disable-back-link")}_hideBackLinkChangedCallback(){let e=this._shadow.querySelector("vl-functional-header");this.hasAttribute("hide-back-link")?e.setAttribute("data-vl-hide-back-link",""):e.removeAttribute("data-vl-hide-back-link")}}j=function(e,t,n,i){var o,a=arguments.length,l=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(l=(a<3?o(l):a>3?o(t,n,l):o(t,n))||l);return a>3&&l&&Object.defineProperty(t,n,l),l}([(0,i.M1)("vl-cookie-statement")],j)}}]);