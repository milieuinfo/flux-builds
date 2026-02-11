import{r as v,aW as d,g as p,aX as m,aY as g,aZ as h,m as f,aQ as b,a_ as y,a$ as V,E as S,x as e,y as C}from"./iframe-CYuKbPIU.js";import"./vl-accessibility.component-CKgWnh5n.js";import"./vl-cookie-consent.component-RfngptTP.js";import"./vl-cookie-statement.component-D-jmg47s.js";import{V as x}from"./vl-footer.component-GhvOaDI1.js";import{V as j}from"./vl-header.component-ixWRI0bL.js";import"./vl-privacy.component-CtYngfAP.js";var P=Object.getOwnPropertyDescriptor,_=(i,s,c,r)=>{for(var n=r>1?void 0:r?P(s,c):s,l=i.length-1,u;l>=0;l--)(u=i[l])&&(n=u(n)||n);return n};v([d,j,x,p,m,g,h,f]);let o=class extends b{constructor(){super(),y.getInstance().register()}static get styles(){return[V,S]}get isFullWidth(){return this.hasAttribute("full-width")}render(){return e`
            <main>
                <vl-template>
                    <vl-header slot="header" identifier="59188ff6-662b-45b9-b23a-964ad48c2bfb" development></vl-header>

                    <div slot="main">
                        <vl-functional-header
                            title="Pagina layout"
                            hide-back-link
                            ?full-width=${this.isFullWidth}
                            skip-to-content-id="#main-content"
                        >
                            <div slot="sub-title">${this.isFullWidth?"Volledige breedte":"Standaard layout"}</div>
                        </vl-functional-header>

                        <section class="vl-section">
                            <div class="vl-content-block ${this.isFullWidth?"vl-content-block--full-width":""}">
                                <div class="vl-grid vl-stacked-medium">
                                    <div class="vl-column vl-column--8 vl-column--m-9 vl-column--s-12 vl-column--xs-12">
                                        <vl-side-navigation-reference>
                                            <vl-title id="#main-content" type="h1"
                                                >${this.isFullWidth?"Volledige breedte":"Standaard layout"}
                                            </vl-title>
                                            <vl-alert icon="info-circle">
                                                ${this.isFullWidth?e`<span slot="title"
                                                              >Alternatieve volledige breedte layout</span
                                                          >
                                                          Dit is een layout voor applicaties die de volledige
                                                          schermbreedte nodig hebben. Gebruik dit enkel wanneer de
                                                          standaard layout niet mogelijk is, bijvoorbeeld in het geval
                                                          van uitgebreide data tabellen.`:e`<span slot="title">Standaard layout</span>Dit is de standaard
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
                                    <div
                                        class="vl-column vl-column--3 vl-column--m-3 vl-column--s-12 vl-column--xs-12 vl-column--start-10 vl-column--s-start-1"
                                    >
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
        `}};o=_([C("vl-page-layout-example")],o);v([o]);const k={title:"Ontwerp/Pagina Layout/Voorbeeld",parameters:{layout:"fullscreen"},decorators:[i=>e` <div style="min-height: calc(100vh - 172px);">${i()}</div>`]},t=()=>e`<vl-page-layout-example></vl-page-layout-example>`,a=()=>e`<vl-page-layout-example full-width></vl-page-layout-example>`;t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"() => html`<vl-page-layout-example></vl-page-layout-example>`",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => html`<vl-page-layout-example full-width></vl-page-layout-example>`",...a.parameters?.docs?.source}}};const F=["StandaardLayout","VolledigeBreedte"],I=Object.freeze(Object.defineProperty({__proto__:null,StandaardLayout:t,VolledigeBreedte:a,__namedExportsOrder:F,default:k},Symbol.toStringTag,{value:"Module"}));export{I as p};
