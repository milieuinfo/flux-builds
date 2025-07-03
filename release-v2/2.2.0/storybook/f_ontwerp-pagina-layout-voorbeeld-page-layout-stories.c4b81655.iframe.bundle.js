"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[3845],{"./docs/f_ontwerp/pagina-layout/voorbeeld/page-layout.stories.ts":(e,t,i)=>{i.r(t),i.d(t,{StandaardLayout:()=>f,VolledigeBreedte:()=>y,__namedExportsOrder:()=>k,default:()=>b});var n=i("../../libs/common/src/index.ts"),o=i("../../libs/components/src/atom/index.ts"),l=i("../../libs/components/src/block/index.ts");i("../../libs/components/src/compliance/accessibility/vl-accessibility.component.ts"),i("../../libs/components/src/compliance/accessibility/vl-accessibility.model.ts"),i("../../libs/components/src/compliance/cookie-consent/vl-cookie-consent.component.ts"),i("../../libs/components/src/compliance/cookie-consent/vl-cookie-consent-opt-in.component.ts"),i("../../libs/components/src/compliance/cookie-statement/vl-cookie-statement.component.ts");var a=i("../../libs/components/src/compliance/footer/vl-footer.component.ts"),r=i("../../libs/components/src/compliance/header/vl-header.component.ts");i("../../libs/components/src/compliance/privacy/vl-privacy.component.ts");var s=i("../../libs/styles/src/index.ts"),d=i("../../libs/components/src/block/side-navigation/index.ts"),c=i("../../node_modules/lit/index.js");(0,n.gy)([l.Zw,r.Y,a.Q,l.a7,o.IM,o.Q0,l.rC,d.gw,d.N8,d.qX,d.HH,d.kX,d.sp,d.p0]);class u extends c.WF{constructor(){super(),n.kH.getInstance().register()}static get styles(){return[s.bQ,s.oi]}get isFullWidth(){return this.hasAttribute("full-width")}render(){return(0,c.qy)`
            <main>
                <vl-template>
                    <vl-header slot="header" identifier="59188ff6-662b-45b9-b23a-964ad48c2bfb" development></vl-header>

                    <div slot="main">
                        <vl-functional-header title="Pagina layout" hide-back-link ?full-width=${this.isFullWidth}>
                            <div slot="sub-title">${this.isFullWidth?"Volledige breedte":"Standaard layout"}</div>
                        </vl-functional-header>

                        <section class="vl-section">
                            <div class="vl-content-block ${this.isFullWidth?"vl-content-block--full-width":""}">
                                <div class="vl-grid vl-stacked-medium">
                                    <div class="vl-column vl-column--8 vl-column--m-8 vl-column--s-8 vl-column--xs-12">
                                        <vl-side-navigation-reference>
                                            <vl-title type="h1"
                                                >${this.isFullWidth?"Volledige breedte":"Standaard layout"}
                                            </vl-title>
                                            <vl-alert icon="info-circle">
                                                ${this.isFullWidth?(0,c.qy)`<span slot="title"
                                                              >Alternatieve volledige breedte layout</span
                                                          >
                                                          Dit is een layout voor applicaties die de volledige
                                                          schermbreedte nodig hebben. Gebruik dit enkel wanneer de
                                                          standaard layout niet mogelijk is, bijvoorbeeld in het geval
                                                          van uitgebreide data tabellen.`:(0,c.qy)`<span slot="title">Standaard layout</span>Dit is de standaard
                                                          layout voor applicaties. Gebruik de alternatieve "Volledige
                                                          breedte" variant enkel indien deze layout te smal is om alle
                                                          content duidelijk te visualiseren.`}
                                            </vl-alert>

                                            <vl-paragraph>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec purus
                                                nisi, pulvinar sed lacinia vel, placerat in dolor. In lacinia magna sed
                                                eros porta vulputate. Sed sodales, nisl in dapibus venenatis, tellus
                                                arcu molestie nunc, non facilisis est ante non odio. Pellentesque nec
                                                auctor justo. Proin ut risus et felis faucibus gravida. Fusce congue,
                                                est vitae eleifend pulvinar, justo erat semper magna, ut efficitur metus
                                                dui ut lacus. Mauris nisl nisi, semper et metus a, sagittis accumsan
                                                arcu. Nulla ultrices lectus nunc, eu tristique justo tempor non.
                                                Vestibulum lobortis pharetra bibendum.
                                            </vl-paragraph>

                                            <vl-title type="h2" id="content-1">Content 1</vl-title>
                                            <vl-paragraph>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec purus
                                                nisi, pulvinar sed lacinia vel, placerat in dolor. In lacinia magna sed
                                                eros porta vulputate. Sed sodales, nisl in dapibus venenatis, tellus
                                                arcu molestie nunc, non facilisis est ante non odio. Pellentesque nec
                                                auctor justo. Proin ut risus et felis faucibus gravida.
                                            </vl-paragraph>

                                            <vl-title type="h3" id="content-1-1">Content 1 - 1</vl-title>
                                            <vl-paragraph>
                                                Fusce congue, est vitae eleifend pulvinar, justo erat semper magna, ut
                                                efficitur metus dui ut lacus.
                                            </vl-paragraph>

                                            <vl-title type="h3" id="content-1-2">Content 1 - 2</vl-title>
                                            <vl-paragraph>
                                                Mauris nisl nisi, semper et metus a, sagittis accumsan arcu. Nulla
                                                ultrices lectus nunc, eu tristique justo tempor non.
                                            </vl-paragraph>

                                            <vl-title type="h3" id="content-1-3">Content 1 - 3</vl-title>
                                            <vl-paragraph>
                                                Vestibulum lobortis pharetra bibendum. Donec purus nisi, pulvinar sed
                                                lacinia vel, placerat in dolor.
                                            </vl-paragraph>

                                            <vl-title type="h3" id="content-1-4">Content 1 - 4</vl-title>
                                            <vl-paragraph>
                                                In lacinia magna sed eros porta vulputate. Sed sodales, nisl in dapibus
                                                venenatis, tellus arcu molestie nunc.
                                            </vl-paragraph>

                                            <vl-title type="h2" id="content-2">Content 2</vl-title>
                                            <vl-paragraph>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec purus
                                                nisi, pulvinar sed lacinia vel, placerat in dolor. In lacinia magna sed
                                                eros porta vulputate. Sed sodales, nisl in dapibus venenatis, tellus
                                                arcu molestie nunc, non facilisis est ante non odio.
                                            </vl-paragraph>

                                            <vl-title type="h3" id="content-2-1">Content 2 - 1</vl-title>
                                            <vl-paragraph>
                                                Pellentesque nec auctor justo. Proin ut risus et felis faucibus gravida.
                                            </vl-paragraph>

                                            <vl-title type="h3" id="content-2-2">Content 2 - 2</vl-title>
                                            <vl-paragraph>
                                                Fusce congue, est vitae eleifend pulvinar, justo erat semper magna, ut
                                                efficitur metus dui ut lacus.
                                            </vl-paragraph>

                                            <vl-title type="h3" id="content-2-3">Content 2 - 3</vl-title>
                                            <vl-paragraph>
                                                Mauris nisl nisi, semper et metus a, sagittis accumsan arcu. Nulla
                                                ultrices lectus nunc, eu tristique justo tempor non.
                                            </vl-paragraph>

                                            <vl-title type="h3" id="content-2-4">Content 2 - 4</vl-title>
                                            <vl-paragraph>
                                                Vestibulum lobortis pharetra bibendum. Donec purus nisi, pulvinar sed
                                                lacinia vel, placerat in dolor.
                                            </vl-paragraph>

                                            <vl-title type="h2" id="content-3">Content 3</vl-title>
                                            <vl-paragraph>
                                                In lacinia magna sed eros porta vulputate. Sed sodales, nisl in dapibus
                                                venenatis, tellus arcu molestie nunc.
                                            </vl-paragraph>
                                        </vl-side-navigation-reference>
                                    </div>
                                    <div class="vl-column vl-column--4 vl-column--m-4 vl-column--s-12 vl-column--xs-12">
                                        <vl-side-navigation aria-label="inhoudsopgave">
                                            <vl-side-navigation-h5>Op deze pagina</vl-side-navigation-h5>
                                            <vl-side-navigation-content>
                                                <vl-side-navigation-group>
                                                    <vl-side-navigation-item parent="content-1">
                                                        <vl-side-navigation-toggle href="#content-1" child="content-1">
                                                            content 1
                                                        </vl-side-navigation-toggle>
                                                        <ul>
                                                            <vl-side-navigation-item>
                                                                <a href="#content-1-1" parent="content-1"
                                                                    >content 1 - 1</a
                                                                >
                                                            </vl-side-navigation-item>
                                                            <vl-side-navigation-item>
                                                                <a href="#content-1-2" parent="content-1"
                                                                    >content 1 - 2</a
                                                                >
                                                            </vl-side-navigation-item>
                                                            <vl-side-navigation-item>
                                                                <a href="#content-1-3" parent="content-1"
                                                                    >content 1 - 3</a
                                                                >
                                                            </vl-side-navigation-item>
                                                            <vl-side-navigation-item>
                                                                <a href="#content-1-4" parent="content-1"
                                                                    >content 1 - 4</a
                                                                >
                                                            </vl-side-navigation-item>
                                                        </ul>
                                                    </vl-side-navigation-item>
                                                    <vl-side-navigation-item parent="content-2">
                                                        <vl-side-navigation-toggle href="#content-2" child="content-2">
                                                            content 2
                                                        </vl-side-navigation-toggle>
                                                        <ul>
                                                            <vl-side-navigation-item>
                                                                <a href="#content-2-1" parent="content-2"
                                                                    >content 2 - 1</a
                                                                >
                                                            </vl-side-navigation-item>
                                                            <vl-side-navigation-item>
                                                                <a href="#content-2-2" parent="content-2"
                                                                    >content 2 - 2</a
                                                                >
                                                            </vl-side-navigation-item>
                                                            <vl-side-navigation-item>
                                                                <a href="#content-2-3" parent="content-2"
                                                                    >content 2 - 3</a
                                                                >
                                                            </vl-side-navigation-item>
                                                            <vl-side-navigation-item>
                                                                <a href="#content-2-4" parent="content-2"
                                                                    >content 2 - 4</a
                                                                >
                                                            </vl-side-navigation-item>
                                                        </ul>
                                                    </vl-side-navigation-item>
                                                    <vl-side-navigation-item>
                                                        <a href="#content-3"> content 3 </a>
                                                    </vl-side-navigation-item>
                                                </vl-side-navigation-group>
                                            </vl-side-navigation-content>
                                        </vl-side-navigation>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <vl-footer slot="footer" identifier="0337f8dc-3266-4e7a-8f4a-95fd65189e5b" development></vl-footer>
                </vl-template>
            </main>
        `}}u=function(e,t,i,n){var o,l=arguments.length,a=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(a=(l<3?o(a):l>3?o(t,i,a):o(t,i))||a);return l>3&&a&&Object.defineProperty(t,i,a),a}([(0,n.M1)("vl-page-layout-example")],u);var p=i("../../node_modules/lit-html/lit-html.js");i("../../node_modules/react/index.js");var v=i("../../node_modules/react/jsx-runtime.js"),h=i("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),g=i("../../node_modules/@storybook/blocks/dist/index.mjs");function m(e){let t=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code"},(0,h.RP)(),e.components);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(t.h1,{id:"pagina-layout",children:"Pagina layout"}),"\n",(0,v.jsx)(t.h2,{id:"standaard-layout",children:"Standaard layout"}),"\n",(0,v.jsx)(t.p,{children:'Dit is de standaard layout voor applicaties. Gebruik de alternatieve "Volledige breedte" variant enkel indien deze layout te smal is om alle content duidelijk te visualiseren.'}),"\n",(0,v.jsxs)("details",{open:!0,children:[(0,v.jsx)("summary",{children:"Code"}),(0,v.jsx)(g.kL,{language:"html",dark:!0,format:!0,code:`
<html>
    <body>
        <main>
            <vl-template>
                <vl-header slot="header"></vl-header>
                <div slot="main">
                    <vl-functional-header title="Page Layout">...</vl-functional-header>
                    <section class="vl-section">
                        <div class="vl-content-block">...</div>
                    </section>
                </div>
                <vl-footer slot="footer"></vl-footer>
            </vl-template>
        </main>
    </body>
</html>
        `})]}),"\n",(0,v.jsx)(t.h2,{id:"volledige-breedte",children:"Volledige breedte"}),"\n",(0,v.jsx)(t.p,{children:"Dit is een layout voor applicaties die de volledige schermbreedte nodig hebben. Gebruik dit enkel wanneer de standaard layout niet mogelijk is, bijvoorbeeld in het geval van uitgebreide data tabellen."}),"\n",(0,v.jsx)(t.p,{children:"Voeg hiervoor de volgende attributen toe:"}),"\n",(0,v.jsxs)(t.ul,{children:["\n",(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:"full-width"})," op het ",(0,v.jsx)(t.code,{children:"<vl-functional-header>"})," component"]}),"\n",(0,v.jsxs)(t.li,{children:["de class ",(0,v.jsx)(t.code,{children:"vl-content-block--full-width"})," op alle content blokken"]}),"\n"]}),"\n",(0,v.jsxs)("details",{open:!0,children:[(0,v.jsx)("summary",{children:"Code"}),(0,v.jsx)(g.kL,{language:"html",dark:!0,format:!0,code:`
<html>
    <body>
        <main>
            <vl-template>
                <vl-header slot="header"></vl-header>
                <div slot="main">
                    <vl-functional-header title="Page Layout" full-width>...</vl-functional-header>
                    <section class="vl-section">
                        <div class="vl-content-block vl-content-block--full-width">...</div>
                    </section>
                </div>
                <vl-footer slot="footer"></vl-footer>
            </vl-template>
        </main>
    </body>
</html>
        `})]})]})}(0,n.gy)([u]);let b={title:"Ontwerp/Pagina Layout/Voorbeeld",tags:["autodocs"],parameters:{layout:"fullscreen",docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,h.RP)(),e.components);return t?(0,v.jsx)(t,Object.assign({},e,{children:(0,v.jsx)(m,e)})):m(e)}}},decorators:[e=>(0,p.qy)` <div style="min-height: calc(100vh - 172px);">${e()}</div>`]},f=()=>(0,p.qy)`<vl-page-layout-example></vl-page-layout-example>`,y=()=>(0,p.qy)`<vl-page-layout-example full-width></vl-page-layout-example>`;f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"() => html`<vl-page-layout-example></vl-page-layout-example>`",...f.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:"() => html`<vl-page-layout-example full-width></vl-page-layout-example>`",...y.parameters?.docs?.source}}};let k=["StandaardLayout","VolledigeBreedte"]},"../../libs/components/src/compliance/footer/vl-footer.component.ts":(e,t,i)=>{i.d(t,{Q:()=>o});var n=i("../../libs/common/src/index.ts");(0,n.gy)([n.lu,n.Dz]);class o extends n.jW{static get properties(){return{development:{type:Boolean,attribute:"development",reflect:!0},identifier:{type:String,attribute:"identifier",reflect:!0}}}constructor(){super(),this.development=!1,this.identifier="",this.observer=null,this.allowCustomCSS=!1}get footerContainer(){return document.querySelector("#footer__container")}injectFooterContainer(){(document.querySelector("body")||document.body).insertAdjacentHTML("beforeend",'<div id="footer__container"><div id="footer"></div></div>')}observeWidgetIsAdded(){let e=t=>"FOOTER"===t.tagName||t.childNodes&&[...t.childNodes].some(e);this.observer=new MutationObserver((t,i)=>{t.flatMap(e=>[...e.addedNodes]).some(e)&&(i.disconnect(),this.dispatchEvent(new CustomEvent("ready")))}),this.footerContainer&&this.observer.observe(this.footerContainer,{childList:!0})}loadWidget(){let e=this.development?`https://tni.widgets.burgerprofiel.dev-vlaanderen.be/api/v1/widget/${this.identifier}`:`https://prod.widgets.burgerprofiel.vlaanderen.be/api/v1/widget/${this.identifier}`;window.vl.widget.client.bootstrap(e).then(e=>{e.setMountElement(document.getElementById("footer")),e.mount().catch(e=>console.error(e))}).catch(e=>{console.error(e)})}render(){this.footerContainer?.remove(),this.injectFooterContainer(),this.observer?.disconnect(),this.observeWidgetIsAdded(),this.loadWidget()}createRenderRoot(){return this}disconnectedCallback(){this.observer?.disconnect()}injectFooter(){console.warn("VlFooter - injectFooter() - deze methode is deprecated en mag niet gebruikt worden."),this.injectFooterContainer()}vlwFooter(){return console.warn("VlFooter - vlwFooter() - deze methode is deprecated en mag niet gebruikt worden."),document.querySelector("footer[class=vlw__footer]")}footer(){return console.warn("VlFooter - footer() - deze methode is deprecated en mag niet gebruikt worden."),this.footerContainer}}o=function(e,t,i,n){var o,l=arguments.length,a=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(a=(l<3?o(a):l>3?o(t,i,a):o(t,i))||a);return l>3&&a&&Object.defineProperty(t,i,a),a}([(0,n.hL)(()=>(0,n.s2)("vl-footer-polyfill","https://prod.widgets.burgerprofiel.vlaanderen.be/api/v1/node_modules/@govflanders/vl-widget-polyfill/dist/index.js").then(()=>{(0,n.s2)("vl-footer-client","https://prod.widgets.burgerprofiel.vlaanderen.be/api/v1/node_modules/@govflanders/vl-widget-client/dist/index.js").finally(()=>{customElements.define("vl-footer",o)})}).catch(()=>{customElements.define("vl-footer",o)}))],o)},"../../libs/components/src/compliance/header/vl-header.component.ts":(e,t,i)=>{i.d(t,{Y:()=>s});var n=i("../../libs/common/src/index.ts"),o=i("../../node_modules/lit/index.js");let l=(0,o.AH)`
    #header__container {
        min-height: 43px;
    }
`,a=(0,o.AH)`
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
`;var r=i("../../libs/components/src/compliance/header/vl-header.defaults.ts");(0,n.gy)([n.lu,n.Dz]);class s extends n.jW{constructor(){super(),this.logoutCallback=r.e.logoutCallback,this.applicationLinks=r.e.applicationLinks,this.authenticatedUserUrl=r.e.authenticatedUserUrl,this.development=r.e.development,this.identifier=r.e.identifier,this.loginRedirectUrl=r.e.loginRedirectUrl,this.loginUrl=r.e.loginUrl,this.logoutUrl=r.e.logoutUrl,this.switchCapacityUrl=r.e.switchCapacityUrl,this.simple=r.e.simple,this.skeleton=r.e.skeleton,this.rejectLogout=r.e.rejectLogout,this.observer=null,this.session=null,this.authenticated=!1,this.allowCustomCSS=!1}static get properties(){return{authenticatedUserUrl:{type:String,attribute:"authenticated-user-url"},development:{type:Boolean,attribute:"development"},identifier:{type:String,attribute:"identifier"},loginRedirectUrl:{type:String,attribute:"login-redirect-url"},loginUrl:{type:String,attribute:"login-url"},logoutUrl:{type:String,attribute:"logout-url"},simple:{type:Boolean,attribute:"simple"},skeleton:{type:Boolean,attribute:"skeleton"},switchCapacityUrl:{type:String,attribute:"switch-capacity-url"},rejectLogout:{type:Boolean,attribute:"reject-logout"},logoutCallback:{type:Function},applicationLinks:{type:Array}}}get headerContainer(){return document.querySelector("#header__container")}get headerContainerSkeleton(){return document.querySelector("#header__container__skeleton")}connectedCallback(){super.connectedCallback(),this.injectHeaderContainer(),this.skeleton&&this.injectHeaderContainerSkeleton(),this.observeWidgetIsAdded(),this.loadWidget()}disconnectedCallback(){super.disconnectedCallback(),this.headerContainer?.remove(),this.skeleton&&this.headerContainerSkeleton?.remove(),this.observer?.disconnect()}injectHeader(){console.warn("VlHeader - injectHeader() - deze methode is deprecated en mag niet gebruikt worden."),this.injectHeaderContainer()}vlwHeader(){return console.warn("VlHeader - vlwHeader() - deze methode is deprecated en mag niet gebruikt worden."),document.querySelector("div[class=vlw__header]")}header(){return console.warn("VlHeader - header() - deze methode is deprecated en mag niet gebruikt worden."),this.headerContainer}willUpdate(e){["loginUrl","loginRedirectUrl","logoutUrl","switchCapacityUrl"].some(t=>e.has(t))&&this.configureSession()}createRenderRoot(){return this}injectHeaderContainer(){(document.querySelector("body")||document.body).insertAdjacentHTML("afterbegin",'<div id="header__container"><div id="header"></div></div>'),this.addStylesToInjectedElement("#header__container",l)}injectHeaderContainerSkeleton(){let e=this.headerContainer;e&&e.insertAdjacentHTML("afterend",'<div id="header__skeleton"></div>'),this.addStylesToInjectedElement("#header__skeleton",a)}addStylesToInjectedElement(e,t){let i=document.createElement("style");i.textContent=t.cssText;let n=document.querySelector(e);n?.appendChild(i)}observeWidgetIsAdded(){let e=t=>"HEADER"===t.tagName||t.childNodes&&[...t.childNodes].some(e);this.observer=new MutationObserver((t,i)=>{t.flatMap(e=>[...e.addedNodes]).some(e)&&(i.disconnect(),this.dispatchEvent(new CustomEvent("ready")))}),this.headerContainer&&this.observer.observe(this.headerContainer,{childList:!0})}async isUserAuthenticated(){return 200===(await fetch(this.authenticatedUserUrl)).status}loadWidget(){let e=this.development?`https://tni.widgets.burgerprofiel.dev-vlaanderen.be/api/v1/widget/${this.identifier}`:`https://prod.widgets.burgerprofiel.vlaanderen.be/api/v1/widget/${this.identifier}`;window.vl.widget.client.bootstrap(e).then(e=>(e.setMountElement(document.getElementById("header")),e.mount(),e)).then(e=>{if(this.applicationLinks.length>0){let t=this.applicationLinks.map(e=>({type:"link",...e}));e.getExtension("citizen_profile").then(e=>{e.getMenu().getGroup("application").addMultiple(t)})}this.simple||(e.getExtension("citizen_profile.session").then(async e=>{this.session=e,this.authenticated=await this.isUserAuthenticated(),this.configureSession()}),e.on("citizen_profile.session.logout.request",async e=>{e.acknowledge();let t=e.getRequest().getReason();if("user"===t){e.accept();return}if(this.rejectLogout||this.logoutCallback&&!await this.logoutCallback(t)){e.reject();return}e.accept()}))}).catch(e=>{console.error(e)})}async configureSession(){let e={active:this.authenticated,endpoints:{loginUrl:this.loginUrl,loginRedirectUrl:this.loginRedirectUrl,logoutUrl:this.logoutUrl,switchCapacityUrl:this.switchCapacityUrl}};this.session?.configure(e)}}s=function(e,t,i,n){var o,l=arguments.length,a=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(a=(l<3?o(a):l>3?o(t,i,a):o(t,i))||a);return l>3&&a&&Object.defineProperty(t,i,a),a}([(0,n.hL)(()=>(0,n.s2)("vl-header-polyfill","https://prod.widgets.burgerprofiel.vlaanderen.be/api/v1/node_modules/@govflanders/vl-widget-polyfill/dist/index.js").then(()=>{(0,n.s2)("vl-header-client","https://prod.widgets.burgerprofiel.vlaanderen.be/api/v1/node_modules/@govflanders/vl-widget-client/dist/index.js").finally(()=>{customElements.define("vl-header",s)})}).catch(()=>{customElements.define("vl-header",s)}))],s)},"../../libs/components/src/compliance/header/vl-header.defaults.ts":(e,t,i)=>{i.d(t,{e:()=>n});let n={authenticatedUserUrl:"/sso/ingelogde_gebruiker",development:!1,identifier:"",loginRedirectUrl:"/",loginUrl:"/sso/aanmelden",logoutUrl:"/sso/afgemeld",switchCapacityUrl:"/sso/wissel_organisatie",simple:!1,skeleton:!1,rejectLogout:!1,logoutCallback:null,applicationLinks:[]}}}]);