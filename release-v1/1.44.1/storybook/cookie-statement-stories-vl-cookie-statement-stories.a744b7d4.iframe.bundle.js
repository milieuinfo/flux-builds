"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[9815],{"../../libs/sections/src/cookie-statement/stories/vl-cookie-statement.stories.ts":(e,t,a)=>{a.r(t),a.d(t,{CookieStatementDefault:()=>E,CookieStatementHeaderSlot:()=>B,__namedExportsOrder:()=>L,default:()=>C});var n=a("../../node_modules/lit-html/lit-html.js"),i=a("../../libs/common/utilities/src/index.ts"),o=a("../../libs/components/src/index.ts"),l=a("../../libs/elements/src/index.ts"),r=a("../../node_modules/lit/index.js");let s=()=>[o.a7],d=()=>(0,r.qy)`
    <vl-functional-header
        data-vl-title="Departement Omgeving"
        data-vl-sub-title="Cookieverklaring"
        data-vl-link="https://omgeving.vlaanderen.be"
    ></vl-functional-header>
`,c=(0,r.AH)`
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
`,v=[...l.hF,c];class p extends(0,i.H3)(HTMLElement){static{(0,i.gy)([l.Lp,l.mR,l.io,l.RC,o.Ic])}constructor({title:e,name:t,purpose:a,domain:n,processor:i,validity:o}={}){super(`
        <style>
          ${v}
        </style>
    `),this._element.insertAdjacentHTML("afterend",`
        <vl-properties>
            <h3>${e||this.dataset.vlTitle}</h3>
            <dl is="vl-properties-list">
                <dt is="vl-property-term">Naam</dt>
                <dd is="vl-property-value">${(()=>{let e=t||this.dataset.vlName;return Array.isArray(e)?`
            <vl-typography>
                <ul>
                    ${e.map(e=>`<li>${e}</li>`).join("")}
                </ul>
            </vl-typography>
          `:e})()}</dd>
                <dt is="vl-property-term">Doel</dt>
                <dd is="vl-property-value">${a||this.dataset.vlPurpose}</dd>
                <dt is="vl-property-term">Type</dt>
                <dd is="vl-property-value">Cookie</dd>
                <dt is="vl-property-term">Domein</dt>
                <dd is="vl-property-value">${n||this.dataset.vlDomain}</dd>
                <dt is="vl-property-term">Verwerker</dt>
                <dd is="vl-property-value">${i||this.dataset.vlProcessor}</dd>
                <dt is="vl-property-term">Geldigheid</dt>
                <dd is="vl-property-value">${o||this.dataset.vlValidity}</dd>
            </dl>
        </vl-properties>
    `)}}p=function(e,t,a,n){var i,o=arguments.length,l=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,a,n);else for(var r=e.length-1;r>=0;r--)(i=e[r])&&(l=(o<3?i(l):o>3?i(t,a,l):i(t,a))||l);return o>3&&l&&Object.defineProperty(t,a,l),l}([(0,i.M1)("vl-cookie")],p);class m extends p{constructor(){super({title:"Departement Omgeving toegangsbeheer cookies",name:["KEYCLOAK_SESSION","KEYCLOAK_SESSION_LEGACY"],purpose:"Sessiegebaseerde cookies die het mogelijk maken om gebruikers te herkennen op een webpagina van Departement Omgeving.",domain:window.location.hostname,processor:"Departement Omgeving",validity:"10 uur"})}}m=function(e,t,a,n){var i,o=arguments.length,l=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,a,n);else for(var r=e.length-1;r>=0;r--)(i=e[r])&&(l=(o<3?i(l):o>3?i(t,a,l):i(t,a))||l);return o>3&&l&&Object.defineProperty(t,a,l),l}([(0,i.M1)("vl-authentication-cookie")],m);class k extends p{constructor(){super({title:"Vlaams toegangsbeheer cookies",name:["AMWEBJCT!%2Fsps!JSESSIONID","https%3A%2F%2Fauthenticatie.vlaanderen.be%2Fsps%2Fvidp%2Fsaml20FIMSAML20","PD_STATEFUL_5bb64e42-0d53-11e2-a712-52540052f0ed","PD-H-SESSION-ID","tbsession"],purpose:"Sessiegebaseerde cookies die het mogelijk maken om gebruikers te herkennen op een webpagina van het Vlaams toegangsbeheer.",domain:"authenticatie.vlaanderen.be",processor:"Vlaamse overheid",validity:"Sessie"})}}k=function(e,t,a,n){var i,o=arguments.length,l=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,a,n);else for(var r=e.length-1;r>=0;r--)(i=e[r])&&(l=(o<3?i(l):o>3?i(t,a,l):i(t,a))||l);return o>3&&l&&Object.defineProperty(t,a,l),l}([(0,i.M1)("vl-header-authentication-cookie")],k);class u extends p{constructor(){super({title:"Vlaanderen header cookie",name:"VOGANONUSER",purpose:"De Reverse Proxy van de Vlaamse overheid plaats dit cookie in kader van de Vlaanderen header op Vlaanderen.be om de goede uitvoering van de verzending van communicatie over een elektronisch communicatienetwerk van de Vlaamse overheid te verzekeren.",domain:"vlaanderen.be",processor:"Vlaamse overheid",validity:"Permanente cookies met een geldigheid van maximaal 24 uur"})}}u=function(e,t,a,n){var i,o=arguments.length,l=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,a,n);else for(var r=e.length-1;r>=0;r--)(i=e[r])&&(l=(o<3?i(l):o>3?i(t,a,l):i(t,a))||l);return o>3&&l&&Object.defineProperty(t,a,l),l}([(0,i.M1)("vl-header-cookie")],u);class h extends p{constructor(){super({title:"Sessie cookie voor betere gebruikerservaring",name:["JSESSIONID","KEYCLOAK_IDENTITY","KEYCLOAK_IDENTITY_LEGACY"],purpose:"De cookie wordt gebruikt om een sessie tussen de applicatieserver en een gebruiker in stand te houden. Dankzij deze cookie kan een gebruiker door de server op een uniek manier geïdentificeerd worden.",domain:window.location.hostname,processor:"Departement Omgeving",validity:"Beperkt tot de duur van de sessie"})}}h=function(e,t,a,n){var i,o=arguments.length,l=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,a,n);else for(var r=e.length-1;r>=0;r--)(i=e[r])&&(l=(o<3?i(l):o>3?i(t,a,l):i(t,a))||l);return o>3&&l&&Object.defineProperty(t,a,l),l}([(0,i.M1)("vl-jsessionid-cookie")],h);class g extends p{constructor(){super({title:"Persistentie sessie cookie voor betere gebruikerservaring",name:['BIGipServerPool-AUTO-* (vb. "BIGipServerPOOL-AUTO-app=2016879114.37407.0000")','BIGipServerPool-sso-pr-* (vb. "BIGipServerPOOL-sso-pr-app=2016879114.37407.0000")'],purpose:'Dankzij de cookie kan er verzekerd worden dat verzoeken van een gebruiker voor de duur van een sessie worden gedistribueerd naar de server waarop ze zijn gestart. De cookies worden daarom vaak beschreven als "sticky sessions". Hierdoor kan een betere gebruikerservaring gerealiseerd worden. Bovendien kan de infrastructuur optimaal gebruikt worden.',domain:window.location.hostname,processor:"Departement Omgeving",validity:"Beperkt tot de duur van de sessie"})}}g=function(e,t,a,n){var i,o=arguments.length,l=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,a,n);else for(var r=e.length-1;r>=0;r--)(i=e[r])&&(l=(o<3?i(l):o>3?i(t,a,l):i(t,a))||l);return o>3&&l&&Object.defineProperty(t,a,l),l}([(0,i.M1)("vl-sticky-session-cookie")],g);class b extends(0,i.H3)(HTMLElement){static{(0,i.gy)([l.D,l.dI,l.mq,l.xf,l.Z$,l.zY,l.nJ,l.Lp,l.mR,l.io,l.RC,l.Q1,l.i$,l.hg,l.$I,l.Oy,l.$q,l.xC,l.gs,o.Y4,o.Pq,o.Ic,...s()])}static get _observedAttributes(){return["date","disable-back-link","hide-back-link","version"]}constructor(){super(`
            <style>
                ${v}
            </style>
             <slot name="header"></slot>
            `);let e=this.shadowRoot.querySelector('slot[name="header"]');e&&(0,n.XX)(d(),e),this.allowCustomCSS=!1,this._element.insertAdjacentHTML("afterend",`
        <section is="vl-region">
            <div is="vl-layout">
                <div is="vl-grid" data-vl-is-stacked>
                    <div is="vl-column" data-vl-size="10">
                        <h1 is="vl-h1" data-vl-no-space-bottom>Cookieverklaring</h1>
                    </div>
                    <div is="vl-column" data-vl-size="10">
                        <p is="vl-introduction">
                            <span>Versie</span> <span id="introduction-version">1.0.0</span> - <span id="introduction-date">3 maart 2021</span>
                        </p>
                    </div>

                    <div is="vl-column" data-vl-size="12" data-vl-medium-size="12">
                        <vl-typography>
                            <hr/>
                        </vl-typography>
                    </div>
                </div>
            </div>
        </section>

        <section is="vl-region">
            <div is="vl-layout">
                <div is="vl-grid" data-vl-is-stacked>
                    <div is="vl-column" data-vl-size="8" data-vl-medium-size="8" data-vl-small-size="8" data-vl-extra-small-size="12">
                        <div is="vl-side-navigation-reference" data-vl--scrollspy-content>
                            <div is="vl-grid" data-vl-is-stacked-large>
                                <div id="cookie-policy" is="vl-column" data-vl-size="12" data-vl-medium-size="12">
                                    <h2 is="vl-h2">Cookiebeleid</h2>
                                    <p>Departement Omgeving (verder ‘dOMG’) vindt het belangrijk dat u op iedere plaats en elk ogenblik haar dOMG-inhoud kan bekijken, beluisteren, lezen of beleven via diverse mediaplatformen. dOMG wil ook werken aan interactieve diensten en diensten op uw maat. Op dOMG-onlinediensten worden technieken gehanteerd om dit mogelijk te maken, bijvoorbeeld met behulp van cookies en scripts. Deze technieken worden hierna gemakkelijkheidshalve cookies genoemd. In dit cookiebeleid wenst dOMG u te informeren welke cookies worden gebruikt en waarom dit gebeurt. Verder wordt toegelicht in welke mate u als gebruiker het gebruik kan controleren. dOMG wil namelijk graag uw privacy en de gebruiksvriendelijkheid van haar onlinediensten zoveel mogelijk waarborgen.</p>
                                    <br/>
                                    <p>Dit cookiebeleid is van toepassing op alle 'dOMG-onlinediensten', met name alle websites, (mobiele) applicaties en internetdiensten die dOMG aanbiedt en die toegang geven tot dOMG-inhoud.</p>
                                    <br/>
                                    <p>dOMG kan het cookiebeleid op elk moment veranderen. Dat kan bijvoorbeeld gebeuren in het kader van veranderingen aan haar diensten of de geldende wetgeving. Het gewijzigde beleid wordt dan bekendgemaakt op de relevante onlinediensten en geldt vanaf het moment dat deze bekendgemaakt wordt.</p>
                                </div>

                                <div id="cookie-definition" is="vl-column" data-vl-size="12" data-vl-medium-size="12">
                                    <h2 is="vl-h2">Wat zijn cookies precies?</h2>
                                    <p>Cookies zijn kleine gegevens- of tekstbestanden die op uw computer of mobiele apparaat worden ge\xefnstalleerd wanneer u een website bezoekt of een (mobiele) toepassing gebruikt. Het cookiebestand bevat een unieke code waarmee uw browser herkend kan worden tijdens het bezoek aan de online service of tijdens opeenvolgende, herhaalde bezoeken. Cookies kunnen worden geplaatst door de server van de website of applicatie die u bezoekt, maar ook door servers van derden die al dan niet met deze website of applicatie samenwerken.</p>
                                    <br/>
                                    <p>Cookies maken over het algemeen de interactie tussen de bezoeker en de website of applicatie gemakkelijker en sneller en helpen de bezoeker om te navigeren tussen de verschillende delen van een website of applicatie.</p>
                                </div>

                                <div id="cookie-management" is="vl-column" data-vl-size="12" data-vl-medium-size="12">
                                    <h2 is="vl-h2">Hoe kan ik het gebruik van cookies op deze onlinediensten weigeren of beheren?</h2>
                                    <vl-typography>
                                        <p>U kunt de installatie van cookies weigeren via uw browserinstellingen. U kunt op elk gewenst moment ook de reeds ge\xefnstalleerde cookies van uw computer of mobiele apparaat verwijderen. Instructies vindt u op de website van uw browser:</p>
                                        <ul>
                                            <li><a is="vl-link" href="https://support.microsoft.com/nl-be/help/17479/windows-internet-explorer-11-change-security-privacy-settings" target="_blank">Microsoft Internet Explorer<span is="vl-icon" data-vl-icon="external" data-vl-after></span></a></li>
                                            <li><a is="vl-link" href="https://support.microsoft.com/nl-nl/help/4468242/microsoft-edge-browsing-data-and-privacy-microsoft-privacy" target="_blank">Microsoft Edge<span is="vl-icon" data-vl-icon="external" data-vl-after></span></a></li>
                                            <li><a is="vl-link" href="http://support.google.com/chrome/bin/answer.py?hl=nl&amp;answer=95647" target="_blank">Google Chrome<span is="vl-icon" data-vl-icon="external" data-vl-after></span></a></li>
                                            <li><a is="vl-link" href="http://support.mozilla.org/nl/kb/cookies-in-en-uitschakelen-websites-voorkeuren?redirectlocale=nl&amp;redirectslug=Cookies+in-+en+uitschakelen" target="_blank">Mozilla Firefox<span is="vl-icon" data-vl-icon="external" data-vl-after></span></a></li>
                                            <li><a is="vl-link" href="http://support.apple.com/kb/PH5042" target="_blank">Apple Safari<span is="vl-icon" data-vl-icon="external" data-vl-after></span></a></li>
                                        </ul>
                                        <p>Wanneer u cookies uitschakelt, moet u er rekening mee houden dat bepaalde grafische elementen er niet mooi kunnen uitzien, of dat u bepaalde toepassingen niet kunt gebruiken. Hieronder vindt u een gedetailleerde lijst van alle cookies die in deze website of toepassing worden gebruikt.</p>
                                    </vl-typography>
                                </div>

                                <div id="cookie-usage" is="vl-column" data-vl-size="12" data-vl-medium-size="12">
                                    <h2 is="vl-h2">Gebruikte cookies</h2>
                                    <vl-header-cookie></vl-header-cookie>
                                    <vl-header-authentication-cookie></vl-header-authentication-cookie>
                                    <vl-authentication-cookie></vl-authentication-cookie>
                                    <vl-jsessionid-cookie></vl-jsessionid-cookie>
                                    <vl-sticky-session-cookie></vl-sticky-session-cookie>
                                    <slot></slot>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div is="vl-column" data-vl-size="4" data-vl-medium-size="4" data-vl-small-size="4" data-vl-extra-small-size="0">
                        <nav is="vl-side-navigation" aria-label="inhoudsopgave">
                            <h2 is="vl-side-navigation-h2">Op deze pagina</h2>
                            <div is="vl-side-navigation-content">
                                <ul is="vl-side-navigation-group">
                                    <li is="vl-side-navigation-item" data-vl-parent>
                                        <a is="vl-side-navigation-toggle" href="#cookie-policy">
                                            Cookiebeleid
                                            <i class="vl-vi vl-vi-arrow-right-fat"></i>
                                        </a>
                                    </li>
                                    <li is="vl-side-navigation-item" data-vl-parent>
                                        <a is="vl-side-navigation-toggle" href="#cookie-definition">
                                            Wat zijn cookies precies
                                            <i class="vl-vi vl-vi-arrow-right-fat"></i>
                                        </a>
                                    </li>
                                    <li is="vl-side-navigation-item" data-vl-parent>
                                        <a is="vl-side-navigation-toggle" href="#cookie-management">
                                            Hoe kan ik het gebruik van cookies op deze onlinediensten weigeren of beheren?
                                            <i class="vl-vi vl-vi-arrow-right-fat"></i>
                                        </a>
                                    </li>
                                    <li is="vl-side-navigation-item" data-vl-parent>
                                        <a is="vl-side-navigation-toggle" href="#cookie-usage">
                                            Gebruikte cookies
                                            <i class="vl-vi vl-vi-arrow-right-fat"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </section>

        <section is="vl-region" data-vl-overlap>
            <div is="vl-layout">
                <div is="vl-grid" data-vl-is-stacked>
                    <div is="vl-column" data-vl-size="12" data-vl-medium-size="12">
                    <vl-contact-card>
                        <vl-infoblock slot="info" data-vl-type="contact">
                            <h3 slot="title">Departement Omgeving</h3>
                        </vl-infoblock>
                        <vl-properties slot="properties">
                            <dl is="vl-properties-list">
                                <dt is="vl-property-term">Adres</dt>
                                <dd is="vl-property-value">Herman Teirlinckgebouw<br/>Havenlaan 88<br/>1000 Brussel, Belgi\xeb</dd>
                                <dt is="vl-property-term">Telefoon</dt>
                                <dd is="vl-property-value"><a is="vl-link" href="tel:02 553 80 11">02 553 80 11<span is="vl-icon" data-vl-icon="phone" data-vl-after></span></a></dd>
                                <dt is="vl-property-term">E-mail</dt>
                                <dd is="vl-property-value"><a is="vl-link" href="mailto:omgeving@vlaanderen.be">omgeving@vlaanderen.be<span is="vl-icon" data-vl-icon="mail" data-vl-after></span></a></dd>
                                <dt is="vl-property-term">Website</dt>
                                <dd is="vl-property-value"><a is="vl-link" href="https://omgeving.vlaanderen.be" target="_blank">https://omgeving.vlaanderen.be<span is="vl-icon" data-vl-icon="external" data-vl-after></span></a></dd>
                            </dl>
                        </vl-properties>
                    </vl-contact-card>
                    </div>
                </div>
            </div>
        </section>
    `)}_versionChangedCallback(e,t){this._shadow.getElementById("introduction-version").innerText=t}_dateChangedCallback(e,t){this._shadow.getElementById("introduction-date").innerText=t}_disableBackLinkChangedCallback(){let e=this._shadow.querySelector("vl-functional-header");this.hasAttribute("disable-back-link")?e.setAttribute("data-vl-disable-back-link",""):e.removeAttribute("data-vl-disable-back-link")}_hideBackLinkChangedCallback(){let e=this._shadow.querySelector("vl-functional-header");this.hasAttribute("hide-back-link")?e.setAttribute("data-vl-hide-back-link",""):e.removeAttribute("data-vl-hide-back-link")}}b=function(e,t,a,n){var i,o=arguments.length,l=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,a,n);else for(var r=e.length-1;r>=0;r--)(i=e[r])&&(l=(o<3?i(l):o>3?i(t,a,l):i(t,a))||l);return o>3&&l&&Object.defineProperty(t,a,l),l}([(0,i.M1)("vl-cookie-statement")],b),a("../../node_modules/react/index.js");var f=a("../../node_modules/react/jsx-runtime.js"),y=a("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),j=a("../../node_modules/@storybook/blocks/dist/index.mjs");function w(e){let t=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",a:"a",h3:"h3"},(0,y.RP)(),e.components),{VluxMetaData:a}=t;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VluxMetaData",!0),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.h1,{id:"cookie-statement",children:"Cookie Statement"}),"\n",(0,f.jsx)(a,{id:"sections-cookie-statement"}),"\n",(0,f.jsx)(t.p,{children:"Cookieverklaring pagina."}),"\n",(0,f.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:"language-js",children:"import { VlCookieStatement } from '@domg-lib/sections';\n"})}),"\n",(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:"language-html",children:"<vl-cookie-statement></vl-cookie-statement>\n"})}),"\n",(0,f.jsx)(j.Hl,{of:E}),"\n",(0,f.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,f.jsx)(j.ov,{of:E}),"\n",(0,f.jsx)(t.h2,{id:"header-slot",children:"Header Slot"}),"\n",(0,f.jsxs)(t.p,{children:["Standaard wordt deze template gebruikt om de ",(0,f.jsx)(t.code,{children:"functional-header"})," te bepalen in dit component."]}),"\n",(0,f.jsx)(j.kL,{code:'import { html } from \'lit\';\nimport { VlFunctionalHeaderComponent } from \'@domg-wc/components\';\nexport const cookieStatementHeaderElements = ()=>[\n        VlFunctionalHeaderComponent\n    ];\nexport const header = ()=>html`\n    <vl-functional-header\n        data-vl-title="Departement Omgeving"\n        data-vl-sub-title="Cookieverklaring"\n        data-vl-link="https://omgeving.vlaanderen.be"\n    ></vl-functional-header>\n`;\n',language:"ts",dark:!0}),"\n",(0,f.jsxs)(t.p,{children:["Als je wijzigingen wil aanbrengen in de functional header, kan je de standaard ",(0,f.jsx)(t.code,{children:"vl-functional-header"})," vervangen door een\nander, eventueel aangepaste header element."]}),"\n",(0,f.jsx)(t.p,{children:"Je kan dit bijvoorbeeld vervangen door:"}),"\n",(0,f.jsxs)(t.ul,{children:["\n",(0,f.jsxs)(t.li,{children:["een ",(0,f.jsx)(t.a,{href:"/docs/components-content-header--content-header-default",children:"vl-content-header"})]}),"\n",(0,f.jsxs)(t.li,{children:["of een ",(0,f.jsx)(t.a,{href:"/docs/components-functional-header--functional-header-default",children:"vl-functional-header"})," met andere opties dan de standaard ",(0,f.jsx)(t.code,{children:"functional-header"})," van dit component."]}),"\n"]}),"\n",(0,f.jsxs)(t.p,{children:["In het voorbeeld hieronder kan je zien hoe je voor de ",(0,f.jsx)(t.code,{children:"vl-functional-header"})," bij de teruglink (",(0,f.jsx)(t.code,{children:"data-vl-back"}),') "Start"\nals label kan geven in plaats van "Terug".']}),"\n",(0,f.jsx)(j.Hl,{of:B}),"\n",(0,f.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,f.jsx)(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,f.jsx)(t.p,{children:(0,f.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/legacy-vl-cookie-statement--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Cookie Statement"})}),"\n",(0,f.jsx)(t.p,{children:(0,f.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlCookieStatement.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Cookie Statement"})}),"\n",(0,f.jsx)(t.p,{children:(0,f.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-cookie-statement.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - Cookie Statement"})})]})}var S=a("../../libs/common/storybook/src/index.ts");let x={date:"3 maart 2021",disableBackLink:!1,hideBackLink:!1,version:"1.0.0",onClickBack:(0,a("../../node_modules/@storybook/addon-actions/dist/index.mjs").XI)("vl-click-back"),headerSlot:""},O={date:{name:"data-vl-date",description:"De datum waarop de pagina werd uitgegeven.",table:{type:{summary:S.QE.STRING},category:S.R6.ATTRIBUTES,defaultValue:{summary:x.date}}},disableBackLink:{name:"data-vl-disable-back-link",description:"Zet de terug-link uit.",table:{type:{summary:S.QE.BOOLEAN},category:S.R6.ATTRIBUTES,defaultValue:{summary:x.disableBackLink}}},hideBackLink:{name:"data-vl-hide-back-link",description:"Verwijdert de terug-link.",table:{type:{summary:S.QE.BOOLEAN},category:S.R6.ATTRIBUTES,defaultValue:{summary:x.hideBackLink}}},version:{name:"data-vl-version",description:"De pagina versie.",table:{type:{summary:S.QE.STRING},category:S.R6.ATTRIBUTES,defaultValue:{summary:x.version}}},onClickBack:{name:"vl-click-back",description:"Afgevuurd na het klikken op de terug-link.",table:{type:{summary:"-"},category:S.R6.EVENTS}},headerSlot:{name:"header",description:"Hiermee kan je de standaard functional header vervangen door een header naar keuze.",table:{type:{summary:S.QE.HTML},category:S.R6.SLOTS,defaultValue:x.headerSlot}}};var z=a("../../node_modules/lit/directives/unsafe-html.js");let C={id:"sections-cookie-statement",title:"sections/cookie-statement",tags:["autodocs"],args:x,argTypes:O,parameters:{layout:"fullscreen",docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,y.RP)(),e.components);return t?(0,f.jsx)(t,Object.assign({},e,{children:(0,f.jsx)(w,e)})):w(e)}}}},D=(0,S._7)(x,({date:e,disableBackLink:t,hideBackLink:a,version:i,onClickBack:o,headerSlot:l})=>(0,n.qy)`
        <vl-cookie-statement
            data-vl-date=${e}
            ?data-vl-disable-back-link=${t}
            ?data-vl-hide-back-link=${a}
            data-vl-version=${i}
            @vl-click-back=${o}
        >
            <vl-cookie
                data-vl-title="Captcha contactformulier"
                data-vl-name="NID"
                data-vl-purpose="reCaptcha is een beveiligingsmaatregel die controleert of u een legitieme bezoeker bent, om te voorkomen dat een bot of script het formulier misbruikt om spam mee te versturen."
                data-vl-domain="google.com"
                data-vl-processor="Google"
                data-vl-validity="Permanente cookie met een geldigheid van 6 maanden"
            >
            </vl-cookie>
            <vl-cookie
                data-vl-title="Bestellen publicaties Vlaamse overheid"
                data-vl-name="SSESS* (vb. “SSESS8d910012bf7d5f60012be2880f590bf0”)"
                data-vl-purpose="Bijhouden van het winkelmandje met bestelde publicaties en succesvol afhandelen van het bestel- en betalingsproces."
                data-vl-domain="publicaties.vlaanderen.be"
                data-vl-processor="Vlaamse overheid"
                data-vl-validity="Permanente cookie met een geldigheid van 3 weken"
            >
            </vl-cookie>
            ${(0,z._)(l)}
        </vl-cookie-statement>
    `),E=D.bind({});E.storyName="vl-cookie-statement - default";let B=D.bind({});B.storyName="vl-cookieStatement - header slot",B.args={headerSlot:`
    <vl-functional-header
        slot="header"
        data-vl-title="Departement Omgeving"
        data-vl-sub-title="Cookieverklaring"
        data-vl-link="https://omgeving.vlaanderen.be"
        data-vl-back="Start"
    ></vl-functional-header>
`},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:'story(cookieStatementArgs, ({\n  date,\n  disableBackLink,\n  hideBackLink,\n  version,\n  onClickBack,\n  headerSlot\n}) => html`\n        <vl-cookie-statement\n            data-vl-date=${date}\n            ?data-vl-disable-back-link=${disableBackLink}\n            ?data-vl-hide-back-link=${hideBackLink}\n            data-vl-version=${version}\n            @vl-click-back=${onClickBack}\n        >\n            <vl-cookie\n                data-vl-title="Captcha contactformulier"\n                data-vl-name="NID"\n                data-vl-purpose="reCaptcha is een beveiligingsmaatregel die controleert of u een legitieme bezoeker bent, om te voorkomen dat een bot of script het formulier misbruikt om spam mee te versturen."\n                data-vl-domain="google.com"\n                data-vl-processor="Google"\n                data-vl-validity="Permanente cookie met een geldigheid van 6 maanden"\n            >\n            </vl-cookie>\n            <vl-cookie\n                data-vl-title="Bestellen publicaties Vlaamse overheid"\n                data-vl-name="SSESS* (vb. “SSESS8d910012bf7d5f60012be2880f590bf0”)"\n                data-vl-purpose="Bijhouden van het winkelmandje met bestelde publicaties en succesvol afhandelen van het bestel- en betalingsproces."\n                data-vl-domain="publicaties.vlaanderen.be"\n                data-vl-processor="Vlaamse overheid"\n                data-vl-validity="Permanente cookie met een geldigheid van 3 weken"\n            >\n            </vl-cookie>\n            ${unsafeHTML(headerSlot)}\n        </vl-cookie-statement>\n    `)',...E.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:'story(cookieStatementArgs, ({\n  date,\n  disableBackLink,\n  hideBackLink,\n  version,\n  onClickBack,\n  headerSlot\n}) => html`\n        <vl-cookie-statement\n            data-vl-date=${date}\n            ?data-vl-disable-back-link=${disableBackLink}\n            ?data-vl-hide-back-link=${hideBackLink}\n            data-vl-version=${version}\n            @vl-click-back=${onClickBack}\n        >\n            <vl-cookie\n                data-vl-title="Captcha contactformulier"\n                data-vl-name="NID"\n                data-vl-purpose="reCaptcha is een beveiligingsmaatregel die controleert of u een legitieme bezoeker bent, om te voorkomen dat een bot of script het formulier misbruikt om spam mee te versturen."\n                data-vl-domain="google.com"\n                data-vl-processor="Google"\n                data-vl-validity="Permanente cookie met een geldigheid van 6 maanden"\n            >\n            </vl-cookie>\n            <vl-cookie\n                data-vl-title="Bestellen publicaties Vlaamse overheid"\n                data-vl-name="SSESS* (vb. “SSESS8d910012bf7d5f60012be2880f590bf0”)"\n                data-vl-purpose="Bijhouden van het winkelmandje met bestelde publicaties en succesvol afhandelen van het bestel- en betalingsproces."\n                data-vl-domain="publicaties.vlaanderen.be"\n                data-vl-processor="Vlaamse overheid"\n                data-vl-validity="Permanente cookie met een geldigheid van 3 weken"\n            >\n            </vl-cookie>\n            ${unsafeHTML(headerSlot)}\n        </vl-cookie-statement>\n    `)',...B.parameters?.docs?.source}}};let L=["CookieStatementDefault","CookieStatementHeaderSlot"]},"../../node_modules/lit/directives/unsafe-html.js":(e,t,a)=>{a.d(t,{_:()=>l});var n=a("../../node_modules/lit-html/lit-html.js"),i=a("../../node_modules/lit-html/directive.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class o extends i.WL{constructor(e){if(super(e),this.et=n.s6,e.type!==i.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===n.s6||null==e)return this.vt=void 0,this.et=e;if(e===n.c0)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;var t=[e];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}}o.directiveName="unsafeHTML",o.resultType=1;var l=(0,i.u$)(o)}}]);