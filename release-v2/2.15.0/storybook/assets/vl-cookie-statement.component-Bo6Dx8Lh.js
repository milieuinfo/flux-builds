import{n as h,x as D,i as A,r as b,Y as y,Q as v,w as s,f as w,v as f,cF as j,cG as V,cH as z,bI as G,aY as x,bt as E,A as I,z as P,D as M,cS as $}from"./iframe-CsDE-vVI.js";import"./vl-side-navigation.component-DEaBsh9X.js";import{V as T}from"./vl-side-navigation-layout.component-DqQyLAZ-.js";const H=()=>[h],L=()=>D`
    <vl-functional-header
        title-label="Departement Omgeving"
        sub-title="Cookieverklaring"
        link="https://omgeving.vlaanderen.be"
        skip-to-content-id="main-content"
    ></vl-functional-header>
`,S=A`
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
`;var B=Object.getOwnPropertyDescriptor,F=(t,o,r,i)=>{for(var e=i>1?void 0:i?B(o,r):o,n=t.length-1,a;n>=0;n--)(a=t[n])&&(e=a(e)||e);return e};let l=class extends w{constructor({title:t,name:o,purpose:r,domain:i,processor:e,validity:n}={}){const a="<div></div>",O=[...f.map(d=>d.styleSheet),S.styleSheet];super(a,O);const C=()=>{const d=o||this.getAttribute("name");return Array.isArray(d)?`
                    <vl-typography>
                        <ul>
                            ${d.map(_=>`<li>${_}</li>`).join("")}
                        </ul>
                    </vl-typography>
                `:d};this._element.insertAdjacentHTML("afterend",`
                <vl-title type="h3" id="${t||this.getAttribute("title")}">${t||this.getAttribute("title")}</vl-title>
                <vl-properties slot="properties">
                    <vl-property>Naam</vl-property>
                    <vl-property-data>${C()}</vl-property-data>
                    <vl-property>Doel</vl-property>
                    <vl-property-data>${r||this.getAttribute("purpose")}</vl-property-data>
                    <vl-property>Type</vl-property>
                    <vl-property-data>Cookie</vl-property-data>
                    <vl-property>Domein</vl-property>
                    <vl-property-data>${i||this.getAttribute("domain")}</vl-property-data>
                    <vl-property>Verwerker</vl-property>
                    <vl-property-data>${e||this.getAttribute("processor")}</vl-property-data>
                    <vl-property>Geldigheid</vl-property>
                    <vl-property-data>${n||this.getAttribute("validity")}</vl-property-data>
                </vl-properties>
            `)}};b([y,v]);l=F([s("vl-cookie")],l);var N=Object.getOwnPropertyDescriptor,Y=(t,o,r,i)=>{for(var e=i>1?void 0:i?N(o,r):o,n=t.length-1,a;n>=0;n--)(a=t[n])&&(e=a(e)||e);return e};let p=class extends l{constructor(){super({title:"Departement Omgeving toegangsbeheer cookies",name:["KEYCLOAK_SESSION","KEYCLOAK_SESSION_LEGACY"],purpose:"Sessiegebaseerde cookies die het mogelijk maken om gebruikers te herkennen op een webpagina van Departement Omgeving.",domain:window.location.hostname,processor:"Departement Omgeving",validity:"10 uur"})}};p=Y([s("vl-authentication-cookie")],p);var K=Object.getOwnPropertyDescriptor,U=(t,o,r,i)=>{for(var e=i>1?void 0:i?K(o,r):o,n=t.length-1,a;n>=0;n--)(a=t[n])&&(e=a(e)||e);return e};let c=class extends l{constructor(){super({title:"Vlaams toegangsbeheer cookies",name:["AMWEBJCT!%2Fsps!JSESSIONID","https%3A%2F%2Fauthenticatie.vlaanderen.be%2Fsps%2Fvidp%2Fsaml20FIMSAML20","PD_STATEFUL_5bb64e42-0d53-11e2-a712-52540052f0ed","PD-H-SESSION-ID","tbsession"],purpose:"Sessiegebaseerde cookies die het mogelijk maken om gebruikers te herkennen op een webpagina van het Vlaams toegangsbeheer.",domain:"authenticatie.vlaanderen.be",processor:"Vlaamse overheid",validity:"Sessie"})}};c=U([s("vl-header-authentication-cookie")],c);var W=Object.getOwnPropertyDescriptor,J=(t,o,r,i)=>{for(var e=i>1?void 0:i?W(o,r):o,n=t.length-1,a;n>=0;n--)(a=t[n])&&(e=a(e)||e);return e};let k=class extends l{constructor(){super({title:"Vlaanderen header cookie",name:"VOGANONUSER",purpose:"De Reverse Proxy van de Vlaamse overheid plaats dit cookie in kader van de Vlaanderen header op Vlaanderen.be om de goede uitvoering van de verzending van communicatie over een elektronisch communicatienetwerk van de Vlaamse overheid te verzekeren.",domain:"vlaanderen.be",processor:"Vlaamse overheid",validity:"Permanente cookies met een geldigheid van maximaal 24 uur"})}};k=J([s("vl-header-cookie")],k);var R=Object.getOwnPropertyDescriptor,q=(t,o,r,i)=>{for(var e=i>1?void 0:i?R(o,r):o,n=t.length-1,a;n>=0;n--)(a=t[n])&&(e=a(e)||e);return e};let m=class extends l{constructor(){super({title:"Sessie cookie voor betere gebruikerservaring",name:["JSESSIONID","KEYCLOAK_IDENTITY","KEYCLOAK_IDENTITY_LEGACY"],purpose:"De cookie wordt gebruikt om een sessie tussen de applicatieserver en een gebruiker in stand te houden. Dankzij deze cookie kan een gebruiker door de server op een uniek manier geïdentificeerd worden.",domain:window.location.hostname,processor:"Departement Omgeving",validity:"Beperkt tot de duur van de sessie"})}};m=q([s("vl-jsessionid-cookie")],m);var Q=Object.getOwnPropertyDescriptor,X=(t,o,r,i)=>{for(var e=i>1?void 0:i?Q(o,r):o,n=t.length-1,a;n>=0;n--)(a=t[n])&&(e=a(e)||e);return e};let u=class extends l{constructor(){super({title:"Persistentie sessie cookie voor betere gebruikerservaring",name:['BIGipServerPool-AUTO-* (vb. "BIGipServerPOOL-AUTO-app=2016879114.37407.0000")','BIGipServerPool-sso-pr-* (vb. "BIGipServerPOOL-sso-pr-app=2016879114.37407.0000")'],purpose:'Dankzij de cookie kan er verzekerd worden dat verzoeken van een gebruiker voor de duur van een sessie worden gedistribueerd naar de server waarop ze zijn gestart. De cookies worden daarom vaak beschreven als "sticky sessions". Hierdoor kan een betere gebruikerservaring gerealiseerd worden. Bovendien kan de infrastructuur optimaal gebruikt worden.',domain:window.location.hostname,processor:"Departement Omgeving",validity:"Beperkt tot de duur van de sessie"})}};u=X([s("vl-sticky-session-cookie")],u);var Z=Object.getOwnPropertyDescriptor,ee=(t,o,r,i)=>{for(var e=i>1?void 0:i?Z(o,r):o,n=t.length-1,a;n>=0;n--)(a=t[n])&&(e=a(e)||e);return e};let g=class extends w{constructor(){const t=`
            <slot name="header"></slot>
        `,o=[E.styleSheet,...f.map(i=>i.styleSheet),S.styleSheet,I.styleSheet,P.styleSheet,M.styleSheet];super(t,o);const r=this.shadowRoot?.querySelector('slot[name="header"]');r&&$(L(),r),this.allowCustomCSS=!1,this._element.insertAdjacentHTML("afterend",`
                <section class="vl-section">
                    <div class="vl-content-block">
                        <div class="vl-grid vl-stacked-small">
                            <div class="vl-column vl-column--10">
                                <vl-title type="h1" no-space-bottom id="main-content">Cookieverklaring</vl-title>
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
                    <vl-side-navigation-layout-next content-block max-depth="1">
                        <div slot="content" class="vl-grid vl-stacked-large">
                            <div class="vl-column vl-column--12 vl-column--m-12">
                                <vl-title type="h2" id="cookie-policy">Cookiebeleid</vl-title>
                                <p>
                                    Departement Omgeving (verder 'dOMG') vindt het belangrijk dat u op
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

                            <div class="vl-column vl-column--12 vl-column--m-12">
                                <vl-title type="h2" id="cookie-definition">Wat zijn cookies precies?</vl-title>
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

                            <div class="vl-column vl-column--12 vl-column--m-12">
                                <vl-title type="h2" id="cookie-management"
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
                                                label="Ga naar Microsoft Internet Explorer (opent in een nieuw venster)"
                                                >Microsoft Internet Explorer</vl-link
                                            >
                                        </li>
                                        <li>
                                            <vl-link
                                                href="https://support.microsoft.com/nl-nl/help/4468242/microsoft-edge-browsing-data-and-privacy-microsoft-privacy"
                                                external
                                                label="Ga naar Microsoft Edge (opent in een nieuw venster)"
                                                >Microsoft Edge</vl-link
                                            >
                                        </li>
                                        <li>
                                            <vl-link
                                                href="http://support.google.com/chrome/bin/answer.py?hl=nl&amp;answer=95647"
                                                external
                                                label="Ga naar Google Chrome (opent in een nieuw venster)"
                                                >Google Chrome</vl-link
                                            >
                                        </li>
                                        <li>
                                            <vl-link
                                                href="http://support.mozilla.org/nl/kb/cookies-in-en-uitschakelen-websites-voorkeuren?redirectlocale=nl&amp;redirectslug=Cookies+in-+en+uitschakelen"
                                                external
                                                label="Ga naar Mozilla Firefox (opent in een nieuw venster)"
                                                >Mozilla Firefox</vl-link
                                            >
                                        </li>
                                        <li>
                                            <vl-link href="http://support.apple.com/kb/PH5042" external
                                                label="Ga naar Apple Safari (opent in een nieuw venster)"
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

                            <div class="vl-column vl-column--12 vl-column--m-12">
                                <vl-title type="h2" id="cookie-usage">Gebruikte cookies</vl-title>
                                <vl-header-cookie></vl-header-cookie>
                                <vl-header-authentication-cookie></vl-header-authentication-cookie>
                                <vl-authentication-cookie></vl-authentication-cookie>
                                <vl-jsessionid-cookie></vl-jsessionid-cookie>
                                <vl-sticky-session-cookie></vl-sticky-session-cookie>
                                <slot></slot>
                            </div>
                        </div>
                    </vl-side-navigation-layout-next>
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
                                        <vl-property>Adres</vl-property>
                                        <vl-property-data>
                                            <address aria-label="Adresgegevens">
                                                Herman Teirlinckgebouw<br />
                                                Havenlaan 88<br />
                                                1000 Brussel, België
                                            </address>
                                        </vl-property-data>
                                        <vl-property>Telefoon</vl-property>
                                        <vl-property-data>
                                            <vl-link href="tel:02 553 80 11" icon-placement="after" icon="phone" label="Bel naar 02 553 80 11">
                                                02 553 80 11
                                            </vl-link>
                                        </vl-property-data>
                                        <vl-property>E-mail</vl-property>
                                        <vl-property-data>
                                            <vl-link
                                                href="mailto:omgeving@vlaanderen.be"
                                                icon-placement="after"
                                                icon="mail"
                                                label="Mail naar omgeving@vlaanderen.be"
                                            >
                                                omgeving@vlaanderen.be
                                            </vl-link>
                                        </vl-property-data>
                                        <vl-property>Website</vl-property>
                                        <vl-property-data>
                                            <vl-link href="http://www.omgevingvlaanderen.be" external label="Ga naar omgevingvlaanderen.be (opent in een nieuw venster)">
                                                http://www.omgevingvlaanderen.be
                                            </vl-link>
                                        </vl-property-data>
                                    </vl-properties>
                                </vl-contact-card>
                            </div>
                        </div>
                    </div>
                </section>
            `)}static get _observedAttributes(){return["date","disable-back-link","hide-back-link","version"]}_versionChangedCallback(t,o){const r=this._shadow?.getElementById("introduction-version");r.innerText=o}_dateChangedCallback(t,o){const r=this._shadow?.getElementById("introduction-date");r.innerText=o}_disableBackLinkChangedCallback(){const t=this._shadow?.querySelector("vl-functional-header");this.hasAttribute("disable-back-link")?t?.setAttribute("disable-back-link",""):t?.removeAttribute("disable-back-link")}_hideBackLinkChangedCallback(){const t=this._shadow?.querySelector("vl-functional-header");this.hasAttribute("hide-back-link")?t?.setAttribute("hide-back-link",""):t?.removeAttribute("hide-back-link")}};b([j,V,y,z,T,v,G,x,h,v,...H()]);g=ee([s("vl-cookie-statement")],g);
