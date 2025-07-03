"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[3845],{"./docs/f_ontwerp/pagina-layout/voorbeeld/page-layout.stories.ts":(e,t,n)=>{n.r(t),n.d(t,{StandaardLayout:()=>y,VolledigeBreedte:()=>j,__namedExportsOrder:()=>k,default:()=>x});var i=n("../../libs/common/utilities/src/index.ts"),l=n("../../libs/common/utilities/src/css/index.ts"),a=n("../../libs/components/src/index.ts"),o=n("../../libs/components/src/next/paragraph/index.ts"),s=n("../../libs/components/src/next/side-navigation/index.ts"),r=n("../../libs/components/src/next/title/index.ts"),d=n("../../libs/elements/src/index.ts");n("../../libs/sections/src/accessibility/vl-accessibility.section.ts"),n("../../libs/sections/src/accessibility/vl-accessibility.model.ts"),n("../../libs/sections/src/cookie-consent/vl-cookie-consent.section.ts"),n("../../libs/sections/src/cookie-consent/vl-cookie-consent-opt-in.section.ts"),n("../../libs/sections/src/cookie-statement/vl-cookie-statement.section.ts");var c=n("../../libs/sections/src/footer/vl-footer.section.ts"),u=n("../../libs/sections/src/header/vl-header.section.ts");n("../../libs/sections/src/privacy/vl-privacy.section.ts");var v=n("../../node_modules/lit/index.js");(0,i.gy)([a.Zw,u.Y,c.Q,a.a7,r.I,o.Q,a.rC,s.gw,s.N8,s.qX,d.HH,s.kX,s.sp,s.p0]);class p extends v.WF{constructor(){super(),l.kH.getInstance().register()}static get styles(){return[l.as,l.DE,d.hF]}get isFullWidth(){return this.hasAttribute("full-width")}render(){return(0,v.qy)`
            <main>
                <vl-template>
                    <vl-header
                        slot="header"
                        data-vl-identifier="59188ff6-662b-45b9-b23a-964ad48c2bfb"
                        data-vl-development
                    ></vl-header>

                    <div slot="main">
                        <vl-functional-header
                            title="Pagina layout"
                            data-vl-hide-back-link
                            ?data-vl-full-width=${this.isFullWidth}
                        >
                            <div slot="sub-title">${this.isFullWidth?"Volledige breedte":"Standaard layout"}</div>
                        </vl-functional-header>

                        <section class="vl-section-next">
                            <div
                                class="vl-content-block-next ${this.isFullWidth?"vl-content-block-next--full-width":""}"
                            >
                                <div class="vl-grid-next vl-stacked-next-medium">
                                    <div
                                        class="vl-column-next vl-column-next--8 vl-column-next--m-8 vl-column-next--s-12 vl-column-next--xs-12"
                                    >
                                        <vl-side-navigation-reference-next>
                                            <vl-title-next type="h1"
                                                >${this.isFullWidth?"Volledige breedte":"Standaard layout"}
                                            </vl-title-next>
                                            <vl-alert-next icon="info-circle">
                                                ${this.isFullWidth?(0,v.qy)`<span slot="title"
                                                              >Alternatieve volledige breedte layout</span
                                                          >
                                                          Dit is een layout voor applicaties die de volledige
                                                          schermbreedte nodig hebben. Gebruik dit enkel wanneer de
                                                          standaard layout niet mogelijk is, bijvoorbeeld in het geval
                                                          van uitgebreide data tabellen.`:(0,v.qy)`<span slot="title">Standaard layout</span>Dit is de standaard
                                                          layout voor applicaties. Gebruik de alternatieve "Volledige
                                                          breedte" variant enkel indien deze layout te smal is om alle
                                                          content duidelijk te visualiseren.`}
                                            </vl-alert-next>

                                            <vl-paragraph-next>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec purus
                                                nisi, pulvinar sed lacinia vel, placerat in dolor. In lacinia magna sed
                                                eros porta vulputate. Sed sodales, nisl in dapibus venenatis, tellus
                                                arcu molestie nunc, non facilisis est ante non odio. Pellentesque nec
                                                auctor justo. Proin ut risus et felis faucibus gravida. Fusce congue,
                                                est vitae eleifend pulvinar, justo erat semper magna, ut efficitur metus
                                                dui ut lacus. Mauris nisl nisi, semper et metus a, sagittis accumsan
                                                arcu. Nulla ultrices lectus nunc, eu tristique justo tempor non.
                                                Vestibulum lobortis pharetra bibendum.
                                            </vl-paragraph-next>

                                            <vl-title-next type="h2" id="content-1">Content 1</vl-title-next>
                                            <vl-paragraph-next>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec purus
                                                nisi, pulvinar sed lacinia vel, placerat in dolor. In lacinia magna sed
                                                eros porta vulputate. Sed sodales, nisl in dapibus venenatis, tellus
                                                arcu molestie nunc, non facilisis est ante non odio. Pellentesque nec
                                                auctor justo. Proin ut risus et felis faucibus gravida.
                                            </vl-paragraph-next>

                                            <vl-title-next type="h3" id="content-1-1">Content 1 - 1</vl-title-next>
                                            <vl-paragraph-next>
                                                Fusce congue, est vitae eleifend pulvinar, justo erat semper magna, ut
                                                efficitur metus dui ut lacus.
                                            </vl-paragraph-next>

                                            <vl-title-next type="h3" id="content-1-2">Content 1 - 2</vl-title-next>
                                            <vl-paragraph-next>
                                                Mauris nisl nisi, semper et metus a, sagittis accumsan arcu. Nulla
                                                ultrices lectus nunc, eu tristique justo tempor non.
                                            </vl-paragraph-next>

                                            <vl-title-next type="h3" id="content-1-3">Content 1 - 3</vl-title-next>
                                            <vl-paragraph-next>
                                                Vestibulum lobortis pharetra bibendum. Donec purus nisi, pulvinar sed
                                                lacinia vel, placerat in dolor.
                                            </vl-paragraph-next>

                                            <vl-title-next type="h3" id="content-1-4">Content 1 - 4</vl-title-next>
                                            <vl-paragraph-next>
                                                In lacinia magna sed eros porta vulputate. Sed sodales, nisl in dapibus
                                                venenatis, tellus arcu molestie nunc.
                                            </vl-paragraph-next>

                                            <vl-title-next type="h2" id="content-2">Content 2</vl-title-next>
                                            <vl-paragraph-next>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec purus
                                                nisi, pulvinar sed lacinia vel, placerat in dolor. In lacinia magna sed
                                                eros porta vulputate. Sed sodales, nisl in dapibus venenatis, tellus
                                                arcu molestie nunc, non facilisis est ante non odio.
                                            </vl-paragraph-next>

                                            <vl-title-next type="h3" id="content-2-1">Content 2 - 1</vl-title-next>
                                            <vl-paragraph-next>
                                                Pellentesque nec auctor justo. Proin ut risus et felis faucibus gravida.
                                            </vl-paragraph-next>

                                            <vl-title-next type="h3" id="content-2-2">Content 2 - 2</vl-title-next>
                                            <vl-paragraph-next>
                                                Fusce congue, est vitae eleifend pulvinar, justo erat semper magna, ut
                                                efficitur metus dui ut lacus.
                                            </vl-paragraph-next>

                                            <vl-title-next type="h3" id="content-2-3">Content 2 - 3</vl-title-next>
                                            <vl-paragraph-next>
                                                Mauris nisl nisi, semper et metus a, sagittis accumsan arcu. Nulla
                                                ultrices lectus nunc, eu tristique justo tempor non.
                                            </vl-paragraph-next>

                                            <vl-title-next type="h3" id="content-2-4">Content 2 - 4</vl-title-next>
                                            <vl-paragraph-next>
                                                Vestibulum lobortis pharetra bibendum. Donec purus nisi, pulvinar sed
                                                lacinia vel, placerat in dolor.
                                            </vl-paragraph-next>

                                            <vl-title-next type="h2" id="content-3">Content 3</vl-title-next>
                                            <vl-paragraph-next>
                                                In lacinia magna sed eros porta vulputate. Sed sodales, nisl in dapibus
                                                venenatis, tellus arcu molestie nunc.
                                            </vl-paragraph-next>
                                        </vl-side-navigation-reference-next>
                                    </div>
                                    <div
                                        class="vl-column-next vl-column-next--4 vl-column-next--m-4 vl-column-next--s-12 vl-column-next--xs-12"
                                    >
                                        <vl-side-navigation-next aria-label="inhoudsopgave">
                                            <vl-side-navigation-h5-next>Op deze pagina</vl-side-navigation-h5-next>
                                            <vl-side-navigation-content-next>
                                                <vl-side-navigation-group-next>
                                                    <vl-side-navigation-item-next parent="content-1">
                                                        <vl-side-navigation-toggle-next
                                                            href="#content-1"
                                                            child="content-1"
                                                        >
                                                            content 1
                                                        </vl-side-navigation-toggle-next>
                                                        <ul>
                                                            <vl-side-navigation-item-next>
                                                                <a href="#content-1-1" parent="content-1"
                                                                    >content 1 - 1</a
                                                                >
                                                            </vl-side-navigation-item-next>
                                                            <vl-side-navigation-item-next>
                                                                <a href="#content-1-2" parent="content-1"
                                                                    >content 1 - 2</a
                                                                >
                                                            </vl-side-navigation-item-next>
                                                            <vl-side-navigation-item-next>
                                                                <a href="#content-1-3" parent="content-1"
                                                                    >content 1 - 3</a
                                                                >
                                                            </vl-side-navigation-item-next>
                                                            <vl-side-navigation-item-next>
                                                                <a href="#content-1-4" parent="content-1"
                                                                    >content 1 - 4</a
                                                                >
                                                            </vl-side-navigation-item-next>
                                                        </ul>
                                                    </vl-side-navigation-item-next>
                                                    <vl-side-navigation-item-next parent="content-2">
                                                        <vl-side-navigation-toggle-next
                                                            href="#content-2"
                                                            child="content-2"
                                                        >
                                                            content 2
                                                        </vl-side-navigation-toggle-next>
                                                        <ul>
                                                            <vl-side-navigation-item-next>
                                                                <a href="#content-2-1" parent="content-2"
                                                                    >content 2 - 1</a
                                                                >
                                                            </vl-side-navigation-item-next>
                                                            <vl-side-navigation-item-next>
                                                                <a href="#content-2-2" parent="content-2"
                                                                    >content 2 - 2</a
                                                                >
                                                            </vl-side-navigation-item-next>
                                                            <vl-side-navigation-item-next>
                                                                <a href="#content-2-3" parent="content-2"
                                                                    >content 2 - 3</a
                                                                >
                                                            </vl-side-navigation-item-next>
                                                            <vl-side-navigation-item-next>
                                                                <a href="#content-2-4" parent="content-2"
                                                                    >content 2 - 4</a
                                                                >
                                                            </vl-side-navigation-item-next>
                                                        </ul>
                                                    </vl-side-navigation-item-next>
                                                    <vl-side-navigation-item-next>
                                                        <a href="#content-3"> content 3 </a>
                                                    </vl-side-navigation-item-next>
                                                </vl-side-navigation-group-next>
                                            </vl-side-navigation-content-next>
                                        </vl-side-navigation-next>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <vl-footer
                        slot="footer"
                        data-vl-identifier="0337f8dc-3266-4e7a-8f4a-95fd65189e5b"
                        data-vl-development
                    ></vl-footer>
                </vl-template>
            </main>
        `}}p=function(e,t,n,i){var l,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(l=e[s])&&(o=(a<3?l(o):a>3?l(t,n,o):l(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o}([(0,i.M1)("vl-page-layout-example")],p);var h=n("../../node_modules/lit-html/lit-html.js");n("../../node_modules/react/index.js");var g=n("../../node_modules/react/jsx-runtime.js"),m=n("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),b=n("../../node_modules/@storybook/blocks/dist/index.mjs");function f(e){let t=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code"},(0,m.RP)(),e.components);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(t.h1,{id:"pagina-layout",children:"Pagina layout"}),"\n",(0,g.jsx)(t.h2,{id:"standaard-layout",children:"Standaard layout"}),"\n",(0,g.jsx)(t.p,{children:'Dit is de standaard layout voor applicaties. Gebruik de alternatieve "Volledige breedte" variant enkel indien deze layout te smal is om alle content duidelijk te visualiseren.'}),"\n",(0,g.jsxs)("details",{open:!0,children:[(0,g.jsx)("summary",{children:"Code"}),(0,g.jsx)(b.kL,{language:"html",dark:!0,format:!0,code:`
<html>
    <body>
        <main>
            <vl-template>
                <vl-header slot="header"></vl-header>
                <div slot="main">
                    <vl-functional-header title="Page Layout">...</vl-functional-header>
                    <section class="vl-section-next">
                        <div class="vl-content-block-next">...</div>
                    </section>
                </div>
                <vl-footer slot="footer"></vl-footer>
            </vl-template>
        </main>
    </body>
</html>
        `})]}),"\n",(0,g.jsx)(t.h2,{id:"volledige-breedte",children:"Volledige breedte"}),"\n",(0,g.jsx)(t.p,{children:"Dit is een layout voor applicaties die de volledige schermbreedte nodig hebben. Gebruik dit enkel wanneer de standaard layout niet mogelijk is, bijvoorbeeld in het geval van uitgebreide data tabellen."}),"\n",(0,g.jsx)(t.p,{children:"Voeg hiervoor de volgende attributen toe:"}),"\n",(0,g.jsxs)(t.ul,{children:["\n",(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.code,{children:"full-width"})," op het ",(0,g.jsx)(t.code,{children:"<vl-functional-header>"})," component"]}),"\n",(0,g.jsxs)(t.li,{children:["de class ",(0,g.jsx)(t.code,{children:"vl-content-block--full-width"})," op alle content blokken"]}),"\n"]}),"\n",(0,g.jsxs)("details",{open:!0,children:[(0,g.jsx)("summary",{children:"Code"}),(0,g.jsx)(b.kL,{language:"html",dark:!0,format:!0,code:`
<html>
    <body>
        <main>
            <vl-template>
                <vl-header slot="header"></vl-header>
                <div slot="main">
                    <vl-functional-header title="Page Layout" full-width>...</vl-functional-header>
                    <section class="vl-section-next">
                        <div class="vl-content-block-next vl-content-block-next--full-width">...</div>
                    </section>
                </div>
                <vl-footer slot="footer"></vl-footer>
            </vl-template>
        </main>
    </body>
</html>
        `})]})]})}(0,i.gy)([p]);let x={title:"Ontwerp/Pagina Layout/Voorbeeld",tags:["autodocs"],parameters:{layout:"fullscreen",docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,m.RP)(),e.components);return t?(0,g.jsx)(t,Object.assign({},e,{children:(0,g.jsx)(f,e)})):f(e)}}},decorators:[e=>(0,h.qy)` <div style="min-height: calc(100vh - 172px);">${e()}</div>`]},y=()=>(0,h.qy)`<vl-page-layout-example></vl-page-layout-example>`,j=()=>(0,h.qy)`<vl-page-layout-example full-width></vl-page-layout-example>`;y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:"() => html`<vl-page-layout-example></vl-page-layout-example>`",...y.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:"() => html`<vl-page-layout-example full-width></vl-page-layout-example>`",...j.parameters?.docs?.source}}};let k=["StandaardLayout","VolledigeBreedte"]},"../../libs/sections/src/footer/vl-footer.section.ts":(e,t,n)=>{n.d(t,{Q:()=>l});var i=n("../../libs/common/utilities/src/index.ts");class l extends i.jW{static get properties(){return{development:{type:Boolean,attribute:"data-vl-development",reflect:!0},identifier:{type:String,attribute:"data-vl-identifier",reflect:!0}}}constructor(){super(),this.development=!1,this.identifier="",this.observer=null,this.allowCustomCSS=!1}get footerContainer(){return document.querySelector("#footer__container")}injectFooterContainer(){(document.querySelector("body")||document.body).insertAdjacentHTML("beforeend",'<div id="footer__container"><div id="footer"></div></div>')}observeWidgetIsAdded(){let e=t=>"FOOTER"===t.tagName||t.childNodes&&[...t.childNodes].some(e);this.observer=new MutationObserver((t,n)=>{t.flatMap(e=>[...e.addedNodes]).some(e)&&(n.disconnect(),this.dispatchEvent(new CustomEvent("ready")))}),this.footerContainer&&this.observer.observe(this.footerContainer,{childList:!0})}loadWidget(){let e=this.development?`https://tni.widgets.burgerprofiel.dev-vlaanderen.be/api/v1/widget/${this.identifier}`:`https://prod.widgets.burgerprofiel.vlaanderen.be/api/v1/widget/${this.identifier}`;window.vl.widget.client.bootstrap(e).then(e=>{e.setMountElement(document.getElementById("footer")),e.mount().catch(e=>console.error(e))}).catch(e=>{console.error(e)})}render(){this.footerContainer?.remove(),this.injectFooterContainer(),this.observer?.disconnect(),this.observeWidgetIsAdded(),this.loadWidget()}createRenderRoot(){return this}disconnectedCallback(){this.observer?.disconnect()}injectFooter(){console.warn("VlFooter - injectFooter() - deze methode is deprecated en mag niet gebruikt worden."),this.injectFooterContainer()}vlwFooter(){return console.warn("VlFooter - vlwFooter() - deze methode is deprecated en mag niet gebruikt worden."),document.querySelector("footer[class=vlw__footer]")}footer(){return console.warn("VlFooter - footer() - deze methode is deprecated en mag niet gebruikt worden."),this.footerContainer}}l=function(e,t,n,i){var l,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(l=e[s])&&(o=(a<3?l(o):a>3?l(t,n,o):l(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o}([(0,i.hL)(()=>(0,i.s2)("vl-footer-polyfill","https://prod.widgets.burgerprofiel.vlaanderen.be/api/v1/node_modules/@govflanders/vl-widget-polyfill/dist/index.js").then(()=>{(0,i.s2)("vl-footer-client","https://prod.widgets.burgerprofiel.vlaanderen.be/api/v1/node_modules/@govflanders/vl-widget-client/dist/index.js").finally(()=>{customElements.define("vl-footer",l)})}).catch(()=>{customElements.define("vl-footer",l)}))],l)},"../../libs/sections/src/header/vl-header.defaults.ts":(e,t,n)=>{n.d(t,{e:()=>i});let i={authenticatedUserUrl:"/sso/ingelogde_gebruiker",development:!1,identifier:"",loginRedirectUrl:"/",loginUrl:"/sso/aanmelden",logoutUrl:"/sso/afgemeld",switchCapacityUrl:"/sso/wissel_organisatie",simple:!1,skeleton:!1,rejectLogout:!1,logoutCallback:null,applicationLinks:[]}},"../../libs/sections/src/header/vl-header.section.ts":(e,t,n)=>{n.d(t,{Y:()=>r});var i=n("../../libs/common/utilities/src/index.ts"),l=n("../../libs/sections/src/header/vl-header.defaults.ts"),a=n("../../node_modules/lit/index.js");let o=(0,a.AH)`
    #header__container {
        min-height: 43px;
    }
`,s=(0,a.AH)`
    #header__skeleton {
        content: '';
        height: 43px;
        width: 100%;
        display: block;
        background: #fff;
    }

    #header__container ~ #header__skeleton {
        display: none;
    }
`;class r extends i.jW{static get properties(){return{authenticatedUserUrl:{type:String,attribute:"data-vl-authenticated-user-url"},development:{type:Boolean,attribute:"data-vl-development"},identifier:{type:String,attribute:"data-vl-identifier"},loginRedirectUrl:{type:String,attribute:"data-vl-login-redirect-url"},loginUrl:{type:String,attribute:"data-vl-login-url"},logoutUrl:{type:String,attribute:"data-vl-logout-url"},simple:{type:Boolean,attribute:"data-vl-simple"},skeleton:{type:Boolean,attribute:"data-vl-skeleton"},switchCapacityUrl:{type:String,attribute:"data-vl-switch-capacity-url"},rejectLogout:{type:Boolean,attribute:"data-vl-reject-logout"},logoutCallback:{type:Function},applicationLinks:{type:Array}}}constructor(){super(),this.authenticatedUserUrl=l.e.authenticatedUserUrl,this.development=l.e.development,this.identifier=l.e.identifier,this.loginRedirectUrl=l.e.loginRedirectUrl,this.loginUrl=l.e.loginUrl,this.logoutUrl=l.e.logoutUrl,this.switchCapacityUrl=l.e.switchCapacityUrl,this.simple=l.e.simple,this.skeleton=l.e.skeleton,this.rejectLogout=l.e.rejectLogout,this.logoutCallback=l.e.logoutCallback,this.applicationLinks=l.e.applicationLinks,this.observer=null,this.session=null,this.authenticated=!1,this.allowCustomCSS=!1}connectedCallback(){super.connectedCallback(),this.injectHeaderContainer(),this.skeleton&&this.injectHeaderContainerSkeleton(),this.observeWidgetIsAdded(),this.loadWidget()}disconnectedCallback(){super.disconnectedCallback(),this.headerContainer?.remove(),this.skeleton&&this.headerContainerSkeleton?.remove(),this.observer?.disconnect()}willUpdate(e){["loginUrl","loginRedirectUrl","logoutUrl","switchCapacityUrl"].some(t=>e.has(t))&&this.configureSession()}createRenderRoot(){return this}get headerContainer(){return document.querySelector("#header__container")}get headerContainerSkeleton(){return document.querySelector("#header__container__skeleton")}injectHeaderContainer(){(document.querySelector("body")||document.body).insertAdjacentHTML("afterbegin",'<div id="header__container"><div id="header"></div></div>'),this.addStylesToInjectedElement("#header__container",o)}injectHeaderContainerSkeleton(){let e=this.headerContainer;e&&e.insertAdjacentHTML("afterend",'<div id="header__skeleton"></div>'),this.addStylesToInjectedElement("#header__skeleton",s)}addStylesToInjectedElement(e,t){let n=document.createElement("style");n.textContent=t.cssText;let i=document.querySelector(e);i?.appendChild(n)}observeWidgetIsAdded(){let e=t=>"HEADER"===t.tagName||t.childNodes&&[...t.childNodes].some(e);this.observer=new MutationObserver((t,n)=>{t.flatMap(e=>[...e.addedNodes]).some(e)&&(n.disconnect(),this.dispatchEvent(new CustomEvent("ready")))}),this.headerContainer&&this.observer.observe(this.headerContainer,{childList:!0})}async isUserAuthenticated(){return 200===(await fetch(this.authenticatedUserUrl)).status}loadWidget(){let e=this.development?`https://tni.widgets.burgerprofiel.dev-vlaanderen.be/api/v1/widget/${this.identifier}`:`https://prod.widgets.burgerprofiel.vlaanderen.be/api/v1/widget/${this.identifier}`;window.vl.widget.client.bootstrap(e).then(e=>(e.setMountElement(document.getElementById("header")),e.mount(),e)).then(e=>{if(this.applicationLinks.length>0){let t=this.applicationLinks.map(e=>({type:"link",...e}));e.getExtension("citizen_profile").then(e=>{e.getMenu().getGroup("application").addMultiple(t)})}this.simple||(e.getExtension("citizen_profile.session").then(async e=>{this.session=e,this.authenticated=await this.isUserAuthenticated(),this.configureSession()}),e.on("citizen_profile.session.logout.request",async e=>{e.acknowledge();let t=e.getRequest().getReason();if("user"===t){e.accept();return}if(this.rejectLogout||this.logoutCallback&&!await this.logoutCallback(t)){e.reject();return}e.accept()}))}).catch(e=>{console.error(e)})}async configureSession(){let e={active:this.authenticated,endpoints:{loginUrl:this.loginUrl,loginRedirectUrl:this.loginRedirectUrl,logoutUrl:this.logoutUrl,switchCapacityUrl:this.switchCapacityUrl}};this.session?.configure(e)}injectHeader(){console.warn("VlHeader - injectHeader() - deze methode is deprecated en mag niet gebruikt worden."),this.injectHeaderContainer()}vlwHeader(){return console.warn("VlHeader - vlwHeader() - deze methode is deprecated en mag niet gebruikt worden."),document.querySelector("div[class=vlw__header]")}header(){return console.warn("VlHeader - header() - deze methode is deprecated en mag niet gebruikt worden."),this.headerContainer}}r=function(e,t,n,i){var l,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(l=e[s])&&(o=(a<3?l(o):a>3?l(t,n,o):l(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o}([(0,i.hL)(()=>(0,i.s2)("vl-header-polyfill","https://prod.widgets.burgerprofiel.vlaanderen.be/api/v1/node_modules/@govflanders/vl-widget-polyfill/dist/index.js").then(()=>{(0,i.s2)("vl-header-client","https://prod.widgets.burgerprofiel.vlaanderen.be/api/v1/node_modules/@govflanders/vl-widget-client/dist/index.js").finally(()=>{customElements.define("vl-header",r)})}).catch(()=>{customElements.define("vl-header",r)}))],r)}}]);