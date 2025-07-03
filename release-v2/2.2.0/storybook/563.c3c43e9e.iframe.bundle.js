"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[563],{"../../libs/components/src/compliance/cookie-statement/vl-cookie-statement.component.ts":(e,t,i)=>{var n=i("../../libs/common/src/index.ts"),o=i("../../libs/styles/src/index.ts"),a=i("../../node_modules/lit-html/lit-html.js"),l=i("../../libs/components/src/atom/index.ts"),r=i("../../libs/components/src/atom/link/index.ts"),s=i("../../libs/components/src/atom/paragraph/index.ts"),d=i("../../libs/components/src/block/contact-card/index.ts"),c=i("../../libs/components/src/block/functional-header/index.ts"),v=i("../../libs/components/src/block/infoblock/index.ts"),p=i("../../libs/components/src/block/properties/index.ts"),k=i("../../libs/components/src/block/side-navigation/index.ts"),u=i("../../libs/components/src/block/typography/index.ts"),m=i("../../node_modules/lit/index.js");let b=()=>[c.a],g=()=>(0,m.qy)`
    <vl-functional-header
        title="Departement Omgeving"
        sub-title="Cookieverklaring"
        link="https://omgeving.vlaanderen.be"
    ></vl-functional-header>
`,h=(0,m.AH)`
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
`;class f extends n.F9{static{(0,n.gy)([p.L,l.IM])}constructor({title:e,name:t,purpose:i,domain:n,processor:a,validity:l}={}){super(`
            <style>
                ${o.oi.join("")}
                ${h}
            </style>
    `),this._element.insertAdjacentHTML("afterend",`
                <vl-title type="h3">${e||this.getAttribute("title")}</vl-title>
                <vl-properties slot="properties">
                    <label>Naam</label>
                    <data>${(()=>{let e=t||this.getAttribute("name");return Array.isArray(e)?`
                    <vl-typography>
                        <ul>
                            ${e.map(e=>`<li>${e}</li>`).join("")}
                        </ul>
                    </vl-typography>
                `:e})()}</data>
                    <label>Doel</label>
                    <data>${i||this.getAttribute("purpose")}</data>
                    <label>Type</label>
                    <data>Cookie</data>
                    <label>Domein</label>
                    <data>${n||this.getAttribute("domain")}</data>
                    <label>Verwerker</label>
                    <data>${a||this.getAttribute("processor")}</data>
                    <label>Geldigheid</label>
                    <data>${l||this.getAttribute("validity")}</data>
                </vl-properties>
            `)}}f=function(e,t,i,n){var o,a=arguments.length,l=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(l=(a<3?o(l):a>3?o(t,i,l):o(t,i))||l);return a>3&&l&&Object.defineProperty(t,i,l),l}([(0,n.M1)("vl-cookie")],f);class w extends f{constructor(){super({title:"Departement Omgeving toegangsbeheer cookies",name:["KEYCLOAK_SESSION","KEYCLOAK_SESSION_LEGACY"],purpose:"Sessiegebaseerde cookies die het mogelijk maken om gebruikers te herkennen op een webpagina van Departement Omgeving.",domain:window.location.hostname,processor:"Departement Omgeving",validity:"10 uur"})}}w=function(e,t,i,n){var o,a=arguments.length,l=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(l=(a<3?o(l):a>3?o(t,i,l):o(t,i))||l);return a>3&&l&&Object.defineProperty(t,i,l),l}([(0,n.M1)("vl-authentication-cookie")],w);class y extends f{constructor(){super({title:"Vlaams toegangsbeheer cookies",name:["AMWEBJCT!%2Fsps!JSESSIONID","https%3A%2F%2Fauthenticatie.vlaanderen.be%2Fsps%2Fvidp%2Fsaml20FIMSAML20","PD_STATEFUL_5bb64e42-0d53-11e2-a712-52540052f0ed","PD-H-SESSION-ID","tbsession"],purpose:"Sessiegebaseerde cookies die het mogelijk maken om gebruikers te herkennen op een webpagina van het Vlaams toegangsbeheer.",domain:"authenticatie.vlaanderen.be",processor:"Vlaamse overheid",validity:"Sessie"})}}y=function(e,t,i,n){var o,a=arguments.length,l=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(l=(a<3?o(l):a>3?o(t,i,l):o(t,i))||l);return a>3&&l&&Object.defineProperty(t,i,l),l}([(0,n.M1)("vl-header-authentication-cookie")],y);class O extends f{constructor(){super({title:"Vlaanderen header cookie",name:"VOGANONUSER",purpose:"De Reverse Proxy van de Vlaamse overheid plaats dit cookie in kader van de Vlaanderen header op Vlaanderen.be om de goede uitvoering van de verzending van communicatie over een elektronisch communicatienetwerk van de Vlaamse overheid te verzekeren.",domain:"vlaanderen.be",processor:"Vlaamse overheid",validity:"Permanente cookies met een geldigheid van maximaal 24 uur"})}}O=function(e,t,i,n){var o,a=arguments.length,l=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(l=(a<3?o(l):a>3?o(t,i,l):o(t,i))||l);return a>3&&l&&Object.defineProperty(t,i,l),l}([(0,n.M1)("vl-header-cookie")],O);class j extends f{constructor(){super({title:"Sessie cookie voor betere gebruikerservaring",name:["JSESSIONID","KEYCLOAK_IDENTITY","KEYCLOAK_IDENTITY_LEGACY"],purpose:"De cookie wordt gebruikt om een sessie tussen de applicatieserver en een gebruiker in stand te houden. Dankzij deze cookie kan een gebruiker door de server op een uniek manier geïdentificeerd worden.",domain:window.location.hostname,processor:"Departement Omgeving",validity:"Beperkt tot de duur van de sessie"})}}j=function(e,t,i,n){var o,a=arguments.length,l=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(l=(a<3?o(l):a>3?o(t,i,l):o(t,i))||l);return a>3&&l&&Object.defineProperty(t,i,l),l}([(0,n.M1)("vl-jsessionid-cookie")],j);class x extends f{constructor(){super({title:"Persistentie sessie cookie voor betere gebruikerservaring",name:['BIGipServerPool-AUTO-* (vb. "BIGipServerPOOL-AUTO-app=2016879114.37407.0000")','BIGipServerPool-sso-pr-* (vb. "BIGipServerPOOL-sso-pr-app=2016879114.37407.0000")'],purpose:'Dankzij de cookie kan er verzekerd worden dat verzoeken van een gebruiker voor de duur van een sessie worden gedistribueerd naar de server waarop ze zijn gestart. De cookies worden daarom vaak beschreven als "sticky sessions". Hierdoor kan een betere gebruikerservaring gerealiseerd worden. Bovendien kan de infrastructuur optimaal gebruikt worden.',domain:window.location.hostname,processor:"Departement Omgeving",validity:"Beperkt tot de duur van de sessie"})}}x=function(e,t,i,n){var o,a=arguments.length,l=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(l=(a<3?o(l):a>3?o(t,i,l):o(t,i))||l);return a>3&&l&&Object.defineProperty(t,i,l),l}([(0,n.M1)("vl-sticky-session-cookie")],x);class A extends n.F9{static{(0,n.gy)([d.Y,v.P,p.L,u.I,k.N8,l.IM,r.m,s.Q,c.a,l.IM,...b()])}constructor(){super(`
            <style>
                ${o.qO}
                ${o.oi.join("")}
                ${h}
                ${o.as}
                ${o.B2}
                ${o.DE}
            </style>
             <slot name="header"></slot>
            `);let e=this.shadowRoot?.querySelector('slot[name="header"]');e&&(0,a.XX)(g(),e),this.allowCustomCSS=!1,this._element.insertAdjacentHTML("afterend",`
                <section class="vl-section">
                    <div class="vl-content-block">
                        <div class="vl-grid vl-stacked-small">
                            <div class="vl-column vl-column--10">
                                <vl-title type="h1" no-space-bottom>Cookieverklaring</vl-title>
                            </div>
                            <div class="vl-column vl-column--10">
                                <vl-paragraph introduction>
                                    <span>Versie</span> <span id="introduction-version">1.0.0</span> -
                                    <span id="introduction-date">3 maart 2021</span>
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

                <section class="vl-section">
                    <div class="vl-content-block">
                        <div class="vl-grid vl-stacked-medium">
                            <div class="vl-column vl-column--8 vl-column--m-8 vl-column--s-12 vl-column--xs-12">
                                <vl-side-navigation-reference>
                                    <div class="vl-grid vl-stacked-large">
                                        <div id="cookie-policy" class="vl-column vl-column--12 vl-column--m-12">
                                            <vl-title type="h2">Cookiebeleid</vl-title>
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

                                        <div id="cookie-definition" class="vl-column vl-column--12 vl-column--m-12">
                                            <vl-title type="h2">Wat zijn cookies precies?</vl-title>
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

                                        <div id="cookie-management" class="vl-column vl-column--12 vl-column--m-12">
                                            <vl-title type="h2"
                                                >Hoe kan ik het gebruik van cookies op deze onlinediensten weigeren of
                                                beheren?</vl-title
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
                                                        <vl-link
                                                            href="https://support.microsoft.com/nl-be/help/17479/windows-internet-explorer-11-change-security-privacy-settings"
                                                            external
                                                            >Microsoft Internet Explorer</vl-link
                                                        >
                                                    </li>
                                                    <li>
                                                        <vl-link
                                                            href="https://support.microsoft.com/nl-nl/help/4468242/microsoft-edge-browsing-data-and-privacy-microsoft-privacy"
                                                            external
                                                            >Microsoft Edge</vl-link
                                                        >
                                                    </li>
                                                    <li>
                                                        <vl-link
                                                            href="http://support.google.com/chrome/bin/answer.py?hl=nl&amp;answer=95647"
                                                            external
                                                            >Google Chrome</vl-link
                                                        >
                                                    </li>
                                                    <li>
                                                        <vl-link
                                                            href="http://support.mozilla.org/nl/kb/cookies-in-en-uitschakelen-websites-voorkeuren?redirectlocale=nl&amp;redirectslug=Cookies+in-+en+uitschakelen"
                                                            external
                                                            >Mozilla Firefox</vl-link
                                                        >
                                                    </li>
                                                    <li>
                                                        <vl-link href="http://support.apple.com/kb/PH5042" external
                                                            >Apple Safari</vl-link
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

                                        <div id="cookie-usage" class="vl-column vl-column--12 vl-column--m-12">
                                            <vl-title type="h2">Gebruikte cookies</vl-title>
                                            <vl-header-cookie></vl-header-cookie>
                                            <vl-header-authentication-cookie></vl-header-authentication-cookie>
                                            <vl-authentication-cookie></vl-authentication-cookie>
                                            <vl-jsessionid-cookie></vl-jsessionid-cookie>
                                            <vl-sticky-session-cookie></vl-sticky-session-cookie>
                                            <slot></slot>
                                        </div>
                                    </div>
                                </vl-side-navigation-reference>
                            </div>

                            <div class="vl-column vl-column--4 vl-column--m-4 vl-column--s-12 vl-column--xs-12">
                                <vl-side-navigation aria-label="inhoudsopgave">
                                    <vl-side-navigation-h2>Op deze pagina</vl-side-navigation-h2>
                                    <vl-side-navigation-content>
                                        <vl-side-navigation-group>
                                            <vl-side-navigation-item>
                                                <a href="#cookie-policy">
                                                    Cookiebeleid
                                                </a>
                                            </vl-side-navigation-item>
                                            <vl-side-navigation-item>
                                                <a href="#cookie-definition">
                                                    Wat zijn cookies precies
                                                </a>
                                            </vl-side-navigation-item>
                                            <vl-side-navigation-item>
                                                <a href="#cookie-management">
                                                    Hoe kan ik het gebruik van cookies op deze onlinediensten weigeren
                                                    of beheren?
                                                </a>
                                            </vl-side-navigation-item>
                                            <vl-side-navigation-item>
                                                <a href="#cookie-usage">
                                                    Gebruikte cookies
                                                </a>
                                            </vl-side-navigation-item>
                                        </vl-side-navigation-group>
                                    </vl-side-navigation-content>
                                </vl-side-navigation>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="vl-section vl-section--overlap">
                    <div class="vl-content-block">
                        <div class="vl-grid vl-stacked-medium">
                            <div class="vl-column vl-column--12 vl-column--m-12">
                                <vl-contact-card>
                                    <vl-infoblock slot="info" type="contact">
                                        <h3 slot="title">Departement Omgeving</h3>
                                    </vl-infoblock>
                                    <vl-properties slot="properties">
                                        <label>Adres</label>
                                        <data>
                                            <div>Herman Teirlinckgebouw</div>
                                            <div>Havenlaan 88</div>
                                            <div>1000 Brussel, Belgi\xeb</div>
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
                                        <label>Website</label>
                                        <data>
                                            <vl-link href="http://www.omgevingvlaanderen.be" external>
                                                http://www.omgevingvlaanderen.be
                                            </vl-link>
                                        </data>
                                    </vl-properties>
                                </vl-contact-card>
                            </div>
                        </div>
                    </div>
                </section>
            `)}static get _observedAttributes(){return["date","disable-back-link","hide-back-link","version"]}_versionChangedCallback(e,t){(this._shadow?.getElementById("introduction-version")).innerText=t}_dateChangedCallback(e,t){(this._shadow?.getElementById("introduction-date")).innerText=t}_disableBackLinkChangedCallback(){let e=this._shadow?.querySelector("vl-functional-header");this.hasAttribute("disable-back-link")?e?.setAttribute("disable-back-link",""):e?.removeAttribute("disable-back-link")}_hideBackLinkChangedCallback(){let e=this._shadow?.querySelector("vl-functional-header");this.hasAttribute("hide-back-link")?e?.setAttribute("hide-back-link",""):e?.removeAttribute("hide-back-link")}}A=function(e,t,i,n){var o,a=arguments.length,l=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(l=(a<3?o(l):a>3?o(t,i,l):o(t,i))||l);return a>3&&l&&Object.defineProperty(t,i,l),l}([(0,n.M1)("vl-cookie-statement")],A)}}]);