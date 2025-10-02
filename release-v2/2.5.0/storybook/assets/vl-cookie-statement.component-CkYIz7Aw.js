import{g as h,x as D,n as j,r as b,I as w,aW as v,m as s,p as f,q as y,cx as A,cy as z,cz as V,aZ as P,b8 as x,aX as E,aG as I,cB as G,by as T,cA as $,cJ as H}from"./iframe-CflcmDUD.js";const M=()=>[h],B=()=>D`
    <vl-functional-header
        title="Departement Omgeving"
        sub-title="Cookieverklaring"
        link="https://omgeving.vlaanderen.be"
    ></vl-functional-header>
`,O=j`
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
`;var L=Object.getOwnPropertyDescriptor,F=(t,n,a,o)=>{for(var e=o>1?void 0:o?L(n,a):n,i=t.length-1,l;i>=0;i--)(l=t[i])&&(e=l(e)||e);return e};let r=class extends f{constructor({title:t,name:n,purpose:a,domain:o,processor:e,validity:i}={}){const l="<div></div>",S=[...y.map(d=>d.styleSheet),O.styleSheet];super(l,S);const C=()=>{const d=n||this.getAttribute("name");return Array.isArray(d)?`
                    <vl-typography>
                        <ul>
                            ${d.map(_=>`<li>${_}</li>`).join("")}
                        </ul>
                    </vl-typography>
                `:d};this._element.insertAdjacentHTML("afterend",`
                <vl-title type="h3">${t||this.getAttribute("title")}</vl-title>
                <vl-properties slot="properties">
                    <label>Naam</label>
                    <data>${C()}</data>
                    <label>Doel</label>
                    <data>${a||this.getAttribute("purpose")}</data>
                    <label>Type</label>
                    <data>Cookie</data>
                    <label>Domein</label>
                    <data>${o||this.getAttribute("domain")}</data>
                    <label>Verwerker</label>
                    <data>${e||this.getAttribute("processor")}</data>
                    <label>Geldigheid</label>
                    <data>${i||this.getAttribute("validity")}</data>
                </vl-properties>
            `)}};b([w,v]);r=F([s("vl-cookie")],r);var N=Object.getOwnPropertyDescriptor,K=(t,n,a,o)=>{for(var e=o>1?void 0:o?N(n,a):n,i=t.length-1,l;i>=0;i--)(l=t[i])&&(e=l(e)||e);return e};let c=class extends r{constructor(){super({title:"Departement Omgeving toegangsbeheer cookies",name:["KEYCLOAK_SESSION","KEYCLOAK_SESSION_LEGACY"],purpose:"Sessiegebaseerde cookies die het mogelijk maken om gebruikers te herkennen op een webpagina van Departement Omgeving.",domain:window.location.hostname,processor:"Departement Omgeving",validity:"10 uur"})}};c=K([s("vl-authentication-cookie")],c);var Y=Object.getOwnPropertyDescriptor,W=(t,n,a,o)=>{for(var e=o>1?void 0:o?Y(n,a):n,i=t.length-1,l;i>=0;i--)(l=t[i])&&(e=l(e)||e);return e};let p=class extends r{constructor(){super({title:"Vlaams toegangsbeheer cookies",name:["AMWEBJCT!%2Fsps!JSESSIONID","https%3A%2F%2Fauthenticatie.vlaanderen.be%2Fsps%2Fvidp%2Fsaml20FIMSAML20","PD_STATEFUL_5bb64e42-0d53-11e2-a712-52540052f0ed","PD-H-SESSION-ID","tbsession"],purpose:"Sessiegebaseerde cookies die het mogelijk maken om gebruikers te herkennen op een webpagina van het Vlaams toegangsbeheer.",domain:"authenticatie.vlaanderen.be",processor:"Vlaamse overheid",validity:"Sessie"})}};p=W([s("vl-header-authentication-cookie")],p);var U=Object.getOwnPropertyDescriptor,J=(t,n,a,o)=>{for(var e=o>1?void 0:o?U(n,a):n,i=t.length-1,l;i>=0;i--)(l=t[i])&&(e=l(e)||e);return e};let k=class extends r{constructor(){super({title:"Vlaanderen header cookie",name:"VOGANONUSER",purpose:"De Reverse Proxy van de Vlaamse overheid plaats dit cookie in kader van de Vlaanderen header op Vlaanderen.be om de goede uitvoering van de verzending van communicatie over een elektronisch communicatienetwerk van de Vlaamse overheid te verzekeren.",domain:"vlaanderen.be",processor:"Vlaamse overheid",validity:"Permanente cookies met een geldigheid van maximaal 24 uur"})}};k=J([s("vl-header-cookie")],k);var q=Object.getOwnPropertyDescriptor,R=(t,n,a,o)=>{for(var e=o>1?void 0:o?q(n,a):n,i=t.length-1,l;i>=0;i--)(l=t[i])&&(e=l(e)||e);return e};let m=class extends r{constructor(){super({title:"Sessie cookie voor betere gebruikerservaring",name:["JSESSIONID","KEYCLOAK_IDENTITY","KEYCLOAK_IDENTITY_LEGACY"],purpose:"De cookie wordt gebruikt om een sessie tussen de applicatieserver en een gebruiker in stand te houden. Dankzij deze cookie kan een gebruiker door de server op een uniek manier geïdentificeerd worden.",domain:window.location.hostname,processor:"Departement Omgeving",validity:"Beperkt tot de duur van de sessie"})}};m=R([s("vl-jsessionid-cookie")],m);var X=Object.getOwnPropertyDescriptor,Z=(t,n,a,o)=>{for(var e=o>1?void 0:o?X(n,a):n,i=t.length-1,l;i>=0;i--)(l=t[i])&&(e=l(e)||e);return e};let u=class extends r{constructor(){super({title:"Persistentie sessie cookie voor betere gebruikerservaring",name:['BIGipServerPool-AUTO-* (vb. "BIGipServerPOOL-AUTO-app=2016879114.37407.0000")','BIGipServerPool-sso-pr-* (vb. "BIGipServerPOOL-sso-pr-app=2016879114.37407.0000")'],purpose:'Dankzij de cookie kan er verzekerd worden dat verzoeken van een gebruiker voor de duur van een sessie worden gedistribueerd naar de server waarop ze zijn gestart. De cookies worden daarom vaak beschreven als "sticky sessions". Hierdoor kan een betere gebruikerservaring gerealiseerd worden. Bovendien kan de infrastructuur optimaal gebruikt worden.',domain:window.location.hostname,processor:"Departement Omgeving",validity:"Beperkt tot de duur van de sessie"})}};u=Z([s("vl-sticky-session-cookie")],u);var Q=Object.getOwnPropertyDescriptor,ee=(t,n,a,o)=>{for(var e=o>1?void 0:o?Q(n,a):n,i=t.length-1,l;i>=0;i--)(l=t[i])&&(e=l(e)||e);return e};let g=class extends f{constructor(){const t=`
            <slot name="header"></slot>
        `,n=[I.styleSheet,...y.map(o=>o.styleSheet),O.styleSheet,G.styleSheet,T.styleSheet,$.styleSheet];super(t,n);const a=this.shadowRoot?.querySelector('slot[name="header"]');a&&H(B(),a),this.allowCustomCSS=!1,this._element.insertAdjacentHTML("afterend",`
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
                            <div class="vl-column vl-column--8 vl-column--m-9 vl-column--s-12 vl-column--xs-12">
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
                                                mobiele apparaat worden geïnstalleerd wanneer u een website bezoekt of
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
                                                    geïnstalleerde cookies van uw computer of mobiele apparaat
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

                            <div class="vl-column vl-column--3 vl-column--m-3 vl-column--s-12 vl-column--xs-12 vl-column--start-10 vl-column--s-start-1">
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
                                            <div>1000 Brussel, België</div>
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
            `)}static get _observedAttributes(){return["date","disable-back-link","hide-back-link","version"]}_versionChangedCallback(t,n){const a=this._shadow?.getElementById("introduction-version");a.innerText=n}_dateChangedCallback(t,n){const a=this._shadow?.getElementById("introduction-date");a.innerText=n}_disableBackLinkChangedCallback(){const t=this._shadow?.querySelector("vl-functional-header");this.hasAttribute("disable-back-link")?t?.setAttribute("disable-back-link",""):t?.removeAttribute("disable-back-link")}_hideBackLinkChangedCallback(){const t=this._shadow?.querySelector("vl-functional-header");this.hasAttribute("hide-back-link")?t?.setAttribute("hide-back-link",""):t?.removeAttribute("hide-back-link")}};b([A,z,w,V,P,v,x,E,h,v,...M()]);g=ee([s("vl-cookie-statement")],g);
