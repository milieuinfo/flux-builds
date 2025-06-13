"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[9815],{"../../libs/sections/src/cookie-statement/stories/vl-cookie-statement.stories.ts":(e,t,n)=>{n.r(t),n.d(t,{CookieStatementDefault:()=>I,CookieStatementHeaderSlot:()=>H,__namedExportsOrder:()=>T,default:()=>E});var i=n("../../libs/common/storybook/src/index.ts"),a=n("../../node_modules/lit-html/lit-html.js"),o=n("../../libs/common/utilities/src/css/index.ts"),l=n("../../libs/components/src/next/link/index.ts"),r=n("../../libs/components/src/next/paragraph/index.ts"),s=n("../../libs/components/src/next/properties/index.ts"),d=n("../../libs/components/src/next/side-navigation/index.ts"),c=n("../../libs/components/src/next/title/index.ts"),v=n("../../libs/common/utilities/src/index.ts"),p=n("../../libs/components/src/index.ts"),m=n("../../libs/elements/src/index.ts"),h=n("../../node_modules/lit/index.js");let u=()=>[p.a7],k=()=>(0,h.qy)`
    <vl-functional-header
        data-vl-title="Departement Omgeving"
        data-vl-sub-title="Cookieverklaring"
        data-vl-link="https://omgeving.vlaanderen.be"
    ></vl-functional-header>
`,g=(0,h.AH)`
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
`,b=[...m.hF,g];class f extends(0,v.H3)(HTMLElement){static{(0,v.gy)([s.L,c.I])}constructor({title:e,name:t,purpose:n,domain:i,processor:a,validity:o}={}){super(`
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
                    <data>${a||this.dataset.vlProcessor}</data>
                    <label>Geldigheid</label>
                    <data>${o||this.dataset.vlValidity}</data>
                </vl-properties-next>
            `)}}f=function(e,t,n,i){var a,o=arguments.length,l=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(l=(o<3?a(l):o>3?a(t,n,l):a(t,n))||l);return o>3&&l&&Object.defineProperty(t,n,l),l}([(0,v.M1)("vl-cookie")],f);class x extends f{constructor(){super({title:"Departement Omgeving toegangsbeheer cookies",name:["KEYCLOAK_SESSION","KEYCLOAK_SESSION_LEGACY"],purpose:"Sessiegebaseerde cookies die het mogelijk maken om gebruikers te herkennen op een webpagina van Departement Omgeving.",domain:window.location.hostname,processor:"Departement Omgeving",validity:"10 uur"})}}x=function(e,t,n,i){var a,o=arguments.length,l=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(l=(o<3?a(l):o>3?a(t,n,l):a(t,n))||l);return o>3&&l&&Object.defineProperty(t,n,l),l}([(0,v.M1)("vl-authentication-cookie")],x);class y extends f{constructor(){super({title:"Vlaams toegangsbeheer cookies",name:["AMWEBJCT!%2Fsps!JSESSIONID","https%3A%2F%2Fauthenticatie.vlaanderen.be%2Fsps%2Fvidp%2Fsaml20FIMSAML20","PD_STATEFUL_5bb64e42-0d53-11e2-a712-52540052f0ed","PD-H-SESSION-ID","tbsession"],purpose:"Sessiegebaseerde cookies die het mogelijk maken om gebruikers te herkennen op een webpagina van het Vlaams toegangsbeheer.",domain:"authenticatie.vlaanderen.be",processor:"Vlaamse overheid",validity:"Sessie"})}}y=function(e,t,n,i){var a,o=arguments.length,l=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(l=(o<3?a(l):o>3?a(t,n,l):a(t,n))||l);return o>3&&l&&Object.defineProperty(t,n,l),l}([(0,v.M1)("vl-header-authentication-cookie")],y);class j extends f{constructor(){super({title:"Vlaanderen header cookie",name:"VOGANONUSER",purpose:"De Reverse Proxy van de Vlaamse overheid plaats dit cookie in kader van de Vlaanderen header op Vlaanderen.be om de goede uitvoering van de verzending van communicatie over een elektronisch communicatienetwerk van de Vlaamse overheid te verzekeren.",domain:"vlaanderen.be",processor:"Vlaamse overheid",validity:"Permanente cookies met een geldigheid van maximaal 24 uur"})}}j=function(e,t,n,i){var a,o=arguments.length,l=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(l=(o<3?a(l):o>3?a(t,n,l):a(t,n))||l);return o>3&&l&&Object.defineProperty(t,n,l),l}([(0,v.M1)("vl-header-cookie")],j);class w extends f{constructor(){super({title:"Sessie cookie voor betere gebruikerservaring",name:["JSESSIONID","KEYCLOAK_IDENTITY","KEYCLOAK_IDENTITY_LEGACY"],purpose:"De cookie wordt gebruikt om een sessie tussen de applicatieserver en een gebruiker in stand te houden. Dankzij deze cookie kan een gebruiker door de server op een uniek manier geïdentificeerd worden.",domain:window.location.hostname,processor:"Departement Omgeving",validity:"Beperkt tot de duur van de sessie"})}}w=function(e,t,n,i){var a,o=arguments.length,l=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(l=(o<3?a(l):o>3?a(t,n,l):a(t,n))||l);return o>3&&l&&Object.defineProperty(t,n,l),l}([(0,v.M1)("vl-jsessionid-cookie")],w);class S extends f{constructor(){super({title:"Persistentie sessie cookie voor betere gebruikerservaring",name:['BIGipServerPool-AUTO-* (vb. "BIGipServerPOOL-AUTO-app=2016879114.37407.0000")','BIGipServerPool-sso-pr-* (vb. "BIGipServerPOOL-sso-pr-app=2016879114.37407.0000")'],purpose:'Dankzij de cookie kan er verzekerd worden dat verzoeken van een gebruiker voor de duur van een sessie worden gedistribueerd naar de server waarop ze zijn gestart. De cookies worden daarom vaak beschreven als "sticky sessions". Hierdoor kan een betere gebruikerservaring gerealiseerd worden. Bovendien kan de infrastructuur optimaal gebruikt worden.',domain:window.location.hostname,processor:"Departement Omgeving",validity:"Beperkt tot de duur van de sessie"})}}S=function(e,t,n,i){var a,o=arguments.length,l=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(l=(o<3?a(l):o>3?a(t,n,l):a(t,n))||l);return o>3&&l&&Object.defineProperty(t,n,l),l}([(0,v.M1)("vl-sticky-session-cookie")],S);class O extends(0,v.H3)(HTMLElement){static{(0,v.gy)([m.D,m.dI,m.mq,m.xf,m.Z$,m.zY,m.nJ,m.Q1,p.Y4,p.Pq,s.L,p.Ic,d.N8,c.I,l.m,r.Q,p.a7,...u()])}static get _observedAttributes(){return["date","disable-back-link","hide-back-link","version"]}constructor(){super(`
            <style>
                ${b.join("")}
                ${o.as}
                ${o.B2}
                ${o.DE}
            </style>
             <slot name="header"></slot>
            `);let e=this.shadowRoot.querySelector('slot[name="header"]');e&&(0,a.XX)(k(),e),this.allowCustomCSS=!1,this._element.insertAdjacentHTML("afterend",`
        <section class="vl-section-next">
            <div class="vl-content-block-next">
                <div class="vl-grid-next vl-stacked-next-small vl-content-block-next">
                    <div class="vl-column-next vl-column-next--10">
                        <vl-title-next type="h1" no-space-bottom>Cookieverklaring</vl-title-next>
                    </div>
                    <div class="vl-column-next vl-column-next--10">
                        <vl-paragraph-next introduction>
                            <span>Versie</span> <span id="introduction-version">1.0.0</span> - <span id="introduction-date">3 maart 2021</span>
                        </vl-paragraph-next>
                    </div>

                    <div class="vl-column-next vl-column-next--12 vl-column-next--m-12">
                        <vl-typography>
                            <hr/>
                        </vl-typography>
                    </div>
                </div>
            </div>
        </section>

        <section class="vl-section-next">
            <div class="vl-content-block-next">
                <div class="vl-grid-next vl-stacked-next-medium vl-content-block-next">
                    <div class="vl-column-next vl-column-next--8 vl-column-next--m-8 vl-column-next--s-8 vl-column-next--xs-8">
                        <vl-side-navigation-reference-next  data-vl--scrollspy-content>
                            <div class="vl-grid-next vl-stacked-next-large">
                                <div id="cookie-policy" class="vl-column-next vl-column-next--12 vl-column-next--m-12">
                                    <vl-title-next type="h2">Cookiebeleid</vl-title-next>
                                    <p>Departement Omgeving (verder ‘dOMG’) vindt het belangrijk dat u op iedere plaats en elk ogenblik haar dOMG-inhoud kan bekijken, beluisteren, lezen of beleven via diverse mediaplatformen. dOMG wil ook werken aan interactieve diensten en diensten op uw maat. Op dOMG-onlinediensten worden technieken gehanteerd om dit mogelijk te maken, bijvoorbeeld met behulp van cookies en scripts. Deze technieken worden hierna gemakkelijkheidshalve cookies genoemd. In dit cookiebeleid wenst dOMG u te informeren welke cookies worden gebruikt en waarom dit gebeurt. Verder wordt toegelicht in welke mate u als gebruiker het gebruik kan controleren. dOMG wil namelijk graag uw privacy en de gebruiksvriendelijkheid van haar onlinediensten zoveel mogelijk waarborgen.</p>
                                    <br/>
                                    <p>Dit cookiebeleid is van toepassing op alle 'dOMG-onlinediensten', met name alle websites, (mobiele) applicaties en internetdiensten die dOMG aanbiedt en die toegang geven tot dOMG-inhoud.</p>
                                    <br/>
                                    <p>dOMG kan het cookiebeleid op elk moment veranderen. Dat kan bijvoorbeeld gebeuren in het kader van veranderingen aan haar diensten of de geldende wetgeving. Het gewijzigde beleid wordt dan bekendgemaakt op de relevante onlinediensten en geldt vanaf het moment dat deze bekendgemaakt wordt.</p>
                                </div>

                                <div id="cookie-definition" class="vl-column-next vl-column-next--12 vl-column-next--m-12">
                                    <vl-title-next type="h2">Wat zijn cookies precies?</vl-title-next>
                                    <p>Cookies zijn kleine gegevens- of tekstbestanden die op uw computer of mobiele apparaat worden ge\xefnstalleerd wanneer u een website bezoekt of een (mobiele) toepassing gebruikt. Het cookiebestand bevat een unieke code waarmee uw browser herkend kan worden tijdens het bezoek aan de online service of tijdens opeenvolgende, herhaalde bezoeken. Cookies kunnen worden geplaatst door de server van de website of applicatie die u bezoekt, maar ook door servers van derden die al dan niet met deze website of applicatie samenwerken.</p>
                                    <br/>
                                    <p>Cookies maken over het algemeen de interactie tussen de bezoeker en de website of applicatie gemakkelijker en sneller en helpen de bezoeker om te navigeren tussen de verschillende delen van een website of applicatie.</p>
                                </div>

                                <div id="cookie-management" class="vl-column-next vl-column-next--12 vl-column-next--m-12">
                                    <vl-title-next type="h2">Hoe kan ik het gebruik van cookies op deze onlinediensten weigeren of beheren?</vl-title-next>
                                    <vl-typography>
                                        <p>U kunt de installatie van cookies weigeren via uw browserinstellingen. U kunt op elk gewenst moment ook de reeds ge\xefnstalleerde cookies van uw computer of mobiele apparaat verwijderen. Instructies vindt u op de website van uw browser:</p>
                                        <ul>
                                            <li><vl-link-next href="https://support.microsoft.com/nl-be/help/17479/windows-internet-explorer-11-change-security-privacy-settings" external >Microsoft Internet Explorer</vl-link-next></vl-side-navigation-item-next>
                                            <li><vl-link-next href="https://support.microsoft.com/nl-nl/help/4468242/microsoft-edge-browsing-data-and-privacy-microsoft-privacy" external >Microsoft Edge</vl-link-next></vl-side-navigation-item-next>
                                            <li><vl-link-next href="http://support.google.com/chrome/bin/answer.py?hl=nl&amp;answer=95647" external >Google Chrome</vl-link-next></vl-side-navigation-item-next>
                                            <li><vl-link-next href="http://support.mozilla.org/nl/kb/cookies-in-en-uitschakelen-websites-voorkeuren?redirectlocale=nl&amp;redirectslug=Cookies+in-+en+uitschakelen" external >Mozilla Firefox</vl-link-next></vl-side-navigation-item-next>
                                            <li><vl-link-next href="http://support.apple.com/kb/PH5042" external >Apple Safari</vl-link-next></vl-side-navigation-item-next>
                                        </vl-side-navigation-group-next>
                                        <p>Wanneer u cookies uitschakelt, moet u er rekening mee houden dat bepaalde grafische elementen er niet mooi kunnen uitzien, of dat u bepaalde toepassingen niet kunt gebruiken. Hieronder vindt u een gedetailleerde lijst van alle cookies die in deze website of toepassing worden gebruikt.</p>
                                    </vl-typography>
                                </div>

                                <div id="cookie-usage" class="vl-column-next vl-column-next--12 vl-column-next--m-12">
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

                    <div class="vl-column-next vl-column-next--4 vl-column-next--m-4 vl-column-next--s-4 vl-column-next--xs-0">
                        <vl-side-navigation-next  aria-label="inhoudsopgave">
                            <vl-side-navigation-h2-next >Op deze pagina</vl-side-navigation-h2-next>
                            <vl-side-navigation-content-next >
                                <vl-side-navigation-group-next >
                                    <vl-side-navigation-item-next  parent>
                                        <vl-side-navigation-toggle-next  href="#cookie-policy">
                                            Cookiebeleid
                                        </vl-side-navigation-toggle-next>
                                    </vl-side-navigation-item-next>
                                    <vl-side-navigation-item-next  parent>
                                        <vl-side-navigation-toggle-next  href="#cookie-definition">
                                            Wat zijn cookies precies
                                        </vl-side-navigation-toggle-next>
                                    </vl-side-navigation-item-next>
                                    <vl-side-navigation-item-next  parent>
                                        <vl-side-navigation-toggle-next  href="#cookie-management">
                                            Hoe kan ik het gebruik van cookies op deze onlinediensten weigeren of beheren?
                                        </vl-side-navigation-toggle-next>
                                    </vl-side-navigation-item-next>
                                    <vl-side-navigation-item-next  parent>
                                        <vl-side-navigation-toggle-next  href="#cookie-usage">
                                            Gebruikte cookies
                                        </vl-side-navigation-toggle-next>
                                    </vl-side-navigation-item-next>
                                </vl-side-navigation-group-next>
                            </div>
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
                                    <vl-link-next href="tel:02 553 80 11"
                                                  icon-placement="after"
                                                  icon="phone">
                                        02 553 80 11
                                    </vl-link-next>
                                </data>
                                <label>E-mail</label>
                                <data>
                                    <vl-link-next href="mailto:omgeving@vlaanderen.be"
                                                  icon-placement="after"
                                                  icon="mail">
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
    `)}_versionChangedCallback(e,t){this._shadow.getElementById("introduction-version").innerText=t}_dateChangedCallback(e,t){this._shadow.getElementById("introduction-date").innerText=t}_disableBackLinkChangedCallback(){let e=this._shadow.querySelector("vl-functional-header");this.hasAttribute("disable-back-link")?e.setAttribute("data-vl-disable-back-link",""):e.removeAttribute("data-vl-disable-back-link")}_hideBackLinkChangedCallback(){let e=this._shadow.querySelector("vl-functional-header");this.hasAttribute("hide-back-link")?e.setAttribute("data-vl-hide-back-link",""):e.removeAttribute("data-vl-hide-back-link")}}O=function(e,t,n,i){var a,o=arguments.length,l=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(l=(o<3?a(l):o>3?a(t,n,l):a(t,n))||l);return o>3&&l&&Object.defineProperty(t,n,l),l}([(0,v.M1)("vl-cookie-statement")],O);var C=n("../../node_modules/lit/directives/unsafe-html.js");let L={date:"3 maart 2021",disableBackLink:!1,hideBackLink:!1,version:"1.0.0",onClickBack:(0,n("../../node_modules/@storybook/addon-actions/dist/index.mjs").XI)("vl-click-back"),headerSlot:""},$={date:{name:"data-vl-date",description:"De datum waarop de pagina werd uitgegeven.",table:{type:{summary:i.QE.STRING},category:i.R6.ATTRIBUTES,defaultValue:{summary:L.date}}},disableBackLink:{name:"data-vl-disable-back-link",description:"Zet de terug-link uit.",table:{type:{summary:i.QE.BOOLEAN},category:i.R6.ATTRIBUTES,defaultValue:{summary:L.disableBackLink}}},hideBackLink:{name:"data-vl-hide-back-link",description:"Verwijdert de terug-link.",table:{type:{summary:i.QE.BOOLEAN},category:i.R6.ATTRIBUTES,defaultValue:{summary:L.hideBackLink}}},version:{name:"data-vl-version",description:"De pagina versie.",table:{type:{summary:i.QE.STRING},category:i.R6.ATTRIBUTES,defaultValue:{summary:L.version}}},onClickBack:{name:"vl-click-back",description:"Afgevuurd na het klikken op de terug-link.",table:{type:{summary:"-"},category:i.R6.EVENTS}},headerSlot:{name:"header",description:"Hiermee kan je de standaard functional header vervangen door een header naar keuze.",table:{type:{summary:i.QE.HTML},category:i.R6.SLOTS,defaultValue:L.headerSlot}}};n("../../node_modules/react/index.js");var D=n("../../node_modules/react/jsx-runtime.js"),B=n("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),P=n("../../node_modules/@storybook/blocks/dist/index.mjs");function _(e){let t=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",a:"a",h3:"h3"},(0,B.RP)(),e.components),{VluxMetaData:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VluxMetaData",!0),(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(t.h1,{id:"cookie-statement",children:"Cookie Statement"}),"\n",(0,D.jsx)(n,{id:"sections-cookie-statement"}),"\n",(0,D.jsx)(t.p,{children:"Cookieverklaring pagina."}),"\n",(0,D.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,D.jsx)(t.pre,{children:(0,D.jsx)(t.code,{className:"language-js",children:"import { VlCookieStatement } from '@domg-lib/sections';\n"})}),"\n",(0,D.jsx)(t.pre,{children:(0,D.jsx)(t.code,{className:"language-html",children:"<vl-cookie-statement></vl-cookie-statement>\n"})}),"\n",(0,D.jsx)(P.Hl,{of:I}),"\n",(0,D.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,D.jsx)(P.ov,{of:I}),"\n",(0,D.jsx)(t.h2,{id:"header-slot",children:"Header Slot"}),"\n",(0,D.jsxs)(t.p,{children:["Standaard wordt deze template gebruikt om de ",(0,D.jsx)(t.code,{children:"functional-header"})," te bepalen in dit component."]}),"\n",(0,D.jsx)(P.kL,{code:'import { html } from \'lit\';\nimport { VlFunctionalHeaderComponent } from \'@domg-wc/components\';\nexport const cookieStatementHeaderElements = ()=>[\n        VlFunctionalHeaderComponent\n    ];\nexport const header = ()=>html`\n    <vl-functional-header\n        data-vl-title="Departement Omgeving"\n        data-vl-sub-title="Cookieverklaring"\n        data-vl-link="https://omgeving.vlaanderen.be"\n    ></vl-functional-header>\n`;\n',language:"ts",dark:!0}),"\n",(0,D.jsxs)(t.p,{children:["Als je wijzigingen wil aanbrengen in de functional header, kan je de standaard ",(0,D.jsx)(t.code,{children:"vl-functional-header"})," vervangen door een\nander, eventueel aangepaste header element."]}),"\n",(0,D.jsx)(t.p,{children:"Je kan dit bijvoorbeeld vervangen door:"}),"\n",(0,D.jsxs)(t.ul,{children:["\n",(0,D.jsxs)(t.li,{children:["een ",(0,D.jsx)(t.a,{href:"/docs/components-content-header--content-header-default",children:"vl-content-header"})]}),"\n",(0,D.jsxs)(t.li,{children:["of een ",(0,D.jsx)(t.a,{href:"/docs/components-functional-header--functional-header-default",children:"vl-functional-header"})," met andere opties dan de standaard ",(0,D.jsx)(t.code,{children:"functional-header"})," van dit component."]}),"\n"]}),"\n",(0,D.jsxs)(t.p,{children:["In het voorbeeld hieronder kan je zien hoe je voor de ",(0,D.jsx)(t.code,{children:"vl-functional-header"})," bij de teruglink (",(0,D.jsx)(t.code,{children:"data-vl-back"}),') "Start"\nals label kan geven in plaats van "Terug".']}),"\n",(0,D.jsx)(P.Hl,{of:H}),"\n",(0,D.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,D.jsx)(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,D.jsx)(t.p,{children:(0,D.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/legacy-vl-cookie-statement--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Cookie Statement"})}),"\n",(0,D.jsx)(t.p,{children:(0,D.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlCookieStatement.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Cookie Statement"})}),"\n",(0,D.jsx)(t.p,{children:(0,D.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-cookie-statement.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - Cookie Statement"})})]})}let E={id:"sections-cookie-statement",title:"sections/cookie-statement",tags:["autodocs"],args:L,argTypes:$,parameters:{layout:"fullscreen",docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,B.RP)(),e.components);return t?(0,D.jsx)(t,Object.assign({},e,{children:(0,D.jsx)(_,e)})):_(e)}}}},R=(0,i._7)(L,({date:e,disableBackLink:t,hideBackLink:n,version:i,onClickBack:o,headerSlot:l})=>(0,a.qy)`
        <vl-cookie-statement
            data-vl-date=${e}
            ?data-vl-disable-back-link=${t}
            ?data-vl-hide-back-link=${n}
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
            ${(0,C._)(l)}
        </vl-cookie-statement>
    `),I=R.bind({});I.storyName="vl-cookie-statement - default";let H=R.bind({});H.storyName="vl-cookieStatement - header slot",H.args={headerSlot:`
    <vl-functional-header
        slot="header"
        data-vl-title="Departement Omgeving"
        data-vl-sub-title="Cookieverklaring"
        data-vl-link="https://omgeving.vlaanderen.be"
        data-vl-back="Start"
    ></vl-functional-header>
`},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:'story(cookieStatementArgs, ({\n  date,\n  disableBackLink,\n  hideBackLink,\n  version,\n  onClickBack,\n  headerSlot\n}) => html`\n        <vl-cookie-statement\n            data-vl-date=${date}\n            ?data-vl-disable-back-link=${disableBackLink}\n            ?data-vl-hide-back-link=${hideBackLink}\n            data-vl-version=${version}\n            @vl-click-back=${onClickBack}\n        >\n            <vl-cookie\n                data-vl-title="Captcha contactformulier"\n                data-vl-name="NID"\n                data-vl-purpose="reCaptcha is een beveiligingsmaatregel die controleert of u een legitieme bezoeker bent, om te voorkomen dat een bot of script het formulier misbruikt om spam mee te versturen."\n                data-vl-domain="google.com"\n                data-vl-processor="Google"\n                data-vl-validity="Permanente cookie met een geldigheid van 6 maanden"\n            >\n            </vl-cookie>\n            <vl-cookie\n                data-vl-title="Bestellen publicaties Vlaamse overheid"\n                data-vl-name="SSESS* (vb. “SSESS8d910012bf7d5f60012be2880f590bf0”)"\n                data-vl-purpose="Bijhouden van het winkelmandje met bestelde publicaties en succesvol afhandelen van het bestel- en betalingsproces."\n                data-vl-domain="publicaties.vlaanderen.be"\n                data-vl-processor="Vlaamse overheid"\n                data-vl-validity="Permanente cookie met een geldigheid van 3 weken"\n            >\n            </vl-cookie>\n            ${unsafeHTML(headerSlot)}\n        </vl-cookie-statement>\n    `)',...I.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:'story(cookieStatementArgs, ({\n  date,\n  disableBackLink,\n  hideBackLink,\n  version,\n  onClickBack,\n  headerSlot\n}) => html`\n        <vl-cookie-statement\n            data-vl-date=${date}\n            ?data-vl-disable-back-link=${disableBackLink}\n            ?data-vl-hide-back-link=${hideBackLink}\n            data-vl-version=${version}\n            @vl-click-back=${onClickBack}\n        >\n            <vl-cookie\n                data-vl-title="Captcha contactformulier"\n                data-vl-name="NID"\n                data-vl-purpose="reCaptcha is een beveiligingsmaatregel die controleert of u een legitieme bezoeker bent, om te voorkomen dat een bot of script het formulier misbruikt om spam mee te versturen."\n                data-vl-domain="google.com"\n                data-vl-processor="Google"\n                data-vl-validity="Permanente cookie met een geldigheid van 6 maanden"\n            >\n            </vl-cookie>\n            <vl-cookie\n                data-vl-title="Bestellen publicaties Vlaamse overheid"\n                data-vl-name="SSESS* (vb. “SSESS8d910012bf7d5f60012be2880f590bf0”)"\n                data-vl-purpose="Bijhouden van het winkelmandje met bestelde publicaties en succesvol afhandelen van het bestel- en betalingsproces."\n                data-vl-domain="publicaties.vlaanderen.be"\n                data-vl-processor="Vlaamse overheid"\n                data-vl-validity="Permanente cookie met een geldigheid van 3 weken"\n            >\n            </vl-cookie>\n            ${unsafeHTML(headerSlot)}\n        </vl-cookie-statement>\n    `)',...H.parameters?.docs?.source}}};let T=["CookieStatementDefault","CookieStatementHeaderSlot"]},"../../node_modules/lit-html/directives/unsafe-html.js":(e,t,n)=>{n.d(t,{_:()=>l});var i=n("../../node_modules/lit-html/lit-html.js"),a=n("../../node_modules/lit-html/directive.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class o extends a.WL{constructor(e){if(super(e),this.et=i.s6,e.type!==a.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===i.s6||null==e)return this.vt=void 0,this.et=e;if(e===i.c0)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;var t=[e];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}}o.directiveName="unsafeHTML",o.resultType=1;var l=(0,a.u$)(o)},"../../node_modules/lit/directives/unsafe-html.js":(e,t,n)=>{n.d(t,{_:()=>i._});var i=n("../../node_modules/lit-html/directives/unsafe-html.js")},"../../libs/components/src/next/paragraph/index.ts":(e,t,n)=>{n.d(t,{Q:()=>i.Q});var i=n("../../libs/components/src/next/paragraph/vl-paragraph.component.ts")},"../../libs/components/src/next/paragraph/vl-paragraph.component.ts":(e,t,n)=>{n.d(t,{Q:()=>s});var i=n("../../libs/common/utilities/src/index.ts"),a=n("../../libs/common/utilities/src/css/index.ts"),o=n("../../node_modules/lit/index.js"),l=n("../../node_modules/lit/directives/class-map.js"),r=n("../../libs/components/src/next/paragraph/vl-paragraph.defaults.ts");class s extends i.jW{static get styles(){return[a.N]}static get properties(){return{bold:{type:Boolean},introduction:{type:Boolean}}}render(){let e={bold:this.bold,introduction:this.introduction};return(0,o.qy)`
            <p class=${(0,l.H)(e)}>
                <slot></slot>
            </p>
        `}constructor(...e){super(...e),this.bold=r.J.bold,this.introduction=r.J.introduction}}s=function(e,t,n,i){var a,o=arguments.length,l=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(l=(o<3?a(l):o>3?a(t,n,l):a(t,n))||l);return o>3&&l&&Object.defineProperty(t,n,l),l}([(0,i.M1)("vl-paragraph-next")],s)},"../../libs/components/src/next/paragraph/vl-paragraph.defaults.ts":(e,t,n)=>{n.d(t,{J:()=>i});let i={bold:!1,introduction:!1}},"../../libs/components/src/next/properties/index.ts":(e,t,n)=>{n.d(t,{L:()=>i.L});var i=n("../../libs/components/src/next/properties/vl-properties.component.ts")},"../../libs/components/src/next/properties/vl-properties.component.ts":(e,t,n)=>{n.d(t,{L:()=>u});var i=n("../../libs/common/utilities/src/index.ts"),a=n("../../libs/elements/src/index.ts"),o=n("../../node_modules/lit/index.js");let l=e=>e.map(e=>e.cloneNode(!0)),r=e=>{let t=[],n=[],i=[];return e.forEach(e=>{switch(e.localName){case"label":n.length&&i.length&&(t.push({labels:n,data:i}),n=[],i=[]),n.push(e.children.length>0?l([...e.children]):e.innerHTML);break;case"data":i.push(e.children.length>0?l([...e.children]):e.innerHTML)}}),n.length&&t.push({labels:n,data:i}),t},s=e=>null==e||0==e.length?(console.warn("vl-properties - geen props opgegeven"),[]):e[0]?.localName==="div"?e.map(e=>({class:e.className,items:r([...e.children])})):[{items:r(e)}];var d=n("../../libs/common/utilities/src/css/index.ts");let c=e=>(0,o.AH)`
        width: calc(${e}% - 1rem);
    `,v=e=>(0,o.AH)`
        dl,
        dl .item {
            grid-template-columns: [labels] ${e}% [data] auto;
        }

        dl .column--full-width,
        dl .column--full-width .item {
            grid-template-columns: [labels] ${e/2}% [data] auto;
        }
    `,p=(0,o.AH)`
    @media screen and (max-width: ${d.gT}px) {
        dl,
        dl .item {
            grid-template-columns: 100%;
        }
    }
`,m=(0,o.AH)`
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
        ${(0,o.AH)`
        font-size: 1.6rem;
    `}
    }

    dd {
        font-size: 1.8rem;
        grid-column: 2;
    }

    .collapsed dd {
        ${(0,o.AH)`
        grid-column: 1;
        font-size: 1.6rem;
    `}
    }

    .collapsed .item,
    dl:has(.collapsed) {
        grid-template-columns: 100%;
    }
`;var h=n("../../libs/components/src/next/properties/vl-properties.defaults.ts");class u extends i.jW{static get styles(){return[a.hF,m]}static get properties(){return{props:{type:Array},aggregatedProps:{type:Array,state:!0},labelWidth:{type:Number,attribute:"label-width"}}}set props(e){this.attributeProps=e,this.buildInternalProperties()}get props(){return this.attributeProps}connectedCallback(){super.connectedCallback(),this.buildInternalProperties(),this.observeLightPropertiesChange()}firstUpdated(e){super.firstUpdated(e),this.shadowRoot&&(this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,this.labelWidthSheet,p.styleSheet])}updated(e){super.updated(e),e.has("labelWidth")&&this.labelWidth&&this.labelWidthSheet.replace(v(this.labelWidth).toString())}disconnectedCallback(){super.disconnectedCallback(),this.disconnectMutationObservers()}render(){return(0,o.qy)` <dl>${this.aggregatedProps.map(e=>this.renderColumn(e))}</dl> `}renderColumn(e){return e.class?(0,o.qy)` <div class="${e.class}">${e.items.map(e=>this.renderItem(e))}</div>`:(0,o.qy)` ${e.items.map(e=>this.renderItem(e))}`}renderItem(e){return(0,o.qy)` <div class="item">${this.renderLabels(e.labels)} ${this.renderData(e.data)}</div>`}renderLabels(e){return e.map(e=>(0,o.qy)` <dt>${e}</dt>`)}renderData(e){return e.map(e=>(0,o.qy)` <dd>${e}</dd>`)}buildInternalProperties(){this.aggregatedProps=[...this.attributeProps,...s([...this.children])]}disconnectMutationObservers(){this.mutationObserverList.forEach(e=>e.disconnect()),this.mutationObserverList=[]}observeLightPropertiesChange(){this.disconnectMutationObservers(),this.mutationObserverList=[...this.mutationObserverList,(0,i.U_)(this,e=>{this.buildInternalProperties(),this.observeLightPropertiesChange()})],this.children.length>0&&"div"===this.children[0].localName&&[...this.children].forEach(e=>this.mutationObserverList=[...this.mutationObserverList,(0,i.U_)(e,e=>{this.buildInternalProperties()})])}constructor(...e){super(...e),this.attributeProps=h.g.props,this.aggregatedProps=h.g.props,this.mutationObserverList=[],this.labelWidth=h.g.labelWidth,this.labelWidthSheet=new CSSStyleSheet}}u=function(e,t,n,i){var a,o=arguments.length,l=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(l=(o<3?a(l):o>3?a(t,n,l):a(t,n))||l);return o>3&&l&&Object.defineProperty(t,n,l),l}([(0,i.M1)("vl-properties-next")],u)},"../../libs/components/src/next/properties/vl-properties.defaults.ts":(e,t,n)=>{n.d(t,{g:()=>i});let i={labelWidth:25,props:[]}},"../../libs/components/src/next/title/index.ts":(e,t,n)=>{n.d(t,{I:()=>i.I});var i=n("../../libs/components/src/next/title/vl-title.component.ts")},"../../libs/components/src/next/title/vl-title.component.ts":(e,t,n)=>{n.d(t,{I:()=>d});var i=n("../../libs/common/utilities/src/index.ts");n("../../node_modules/@lit/reactive-element/reactive-element.js");var a=n("../../node_modules/lit-html/lit-html.js");n("../../node_modules/lit-element/lit-element.js");/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var o=(e,t,n)=>{for(var i of t)if(i[0]===e)return(0,i[1])();return null==n?void 0:n()},l=n("../../node_modules/lit/directives/class-map.js"),r=n("../../libs/components/src/next/title/vl-title.css.ts"),s=n("../../libs/components/src/next/title/vl-title.defaults.ts");class d extends i.jW{static get styles(){return[r.Z]}static get properties(){return{type:{type:String},underline:{type:Boolean},noSpaceBottom:{type:Boolean,attribute:"no-space-bottom"},alt:{type:Boolean}}}render(){let e={underline:this.underline,"no-space-bottom":this.noSpaceBottom,alt:this.alt};return(0,a.qy)`
            ${o(this.type,[["h1",()=>(0,a.qy)` <h1 class=${(0,l.H)(e)} part="h1">
                            <slot></slot>
                        </h1>`],["h2",()=>(0,a.qy)` <h2 class=${(0,l.H)(e)} part="h2">
                            <slot></slot>
                        </h2>`],["h3",()=>(0,a.qy)` <h3 class=${(0,l.H)(e)} part="h3">
                            <slot></slot>
                        </h3>`],["h4",()=>(0,a.qy)` <h4 class=${(0,l.H)(e)} part="h4">
                            <slot></slot>
                        </h4>`],["h5",()=>(0,a.qy)` <h5 class=${(0,l.H)(e)} part="h5">
                            <slot></slot>
                        </h5>`],["h6",()=>(0,a.qy)` <h6 class=${(0,l.H)(e)} part="h6">
                            <slot></slot>
                        </h6>`]],()=>(0,a.qy)` <h1 class=${(0,l.H)(e)} part="h1">
                    <slot></slot>
                </h1>`)}
        `}constructor(...e){super(...e),this.type=s.D.type,this.underline=s.D.underline,this.noSpaceBottom=s.D.noSpaceBottom,this.alt=s.D.alt}}d=function(e,t,n,i){var a,o=arguments.length,l=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(l=(o<3?a(l):o>3?a(t,n,l):a(t,n))||l);return o>3&&l&&Object.defineProperty(t,n,l),l}([(0,i.M1)("vl-title-next")],d)},"../../libs/components/src/next/title/vl-title.defaults.ts":(e,t,n)=>{n.d(t,{D:()=>i});let i={type:"h1",underline:!1,alt:!1,noSpaceBottom:!1}}}]);