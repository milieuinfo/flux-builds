import{r as p,a$ as c,g as v,b0 as m,b1 as g,b2 as h,aV as b,b3 as y,b4 as f,K as V,x as e,H as S}from"./iframe-iHJvAyUB.js";import"./vl-side-navigation.component-BhsvpvVh.js";import{V as C}from"./vl-side-navigation-layout.component-DpzscZJ6.js";import"./vl-accessibility.component-CLytrI93.js";import"./vl-cookie-consent.component-CLbBmhtu.js";import"./vl-cookie-statement.component-CTXM0lr3.js";import{V as j}from"./vl-footer.component-Bn8tq95e.js";import{V as x}from"./vl-header.component-CIxXK2Ns.js";import"./vl-privacy.component-B6YbgIjs.js";var P=Object.getOwnPropertyDescriptor,L=(l,r,d,o)=>{for(var i=o>1?void 0:o?P(r,d):r,n=l.length-1,u;n>=0;n--)(u=l[n])&&(i=u(i)||i);return i};p([c,x,j,v,m,g,h,C]);let s=class extends b{constructor(){super(),y.getInstance().register()}static get styles(){return[f,V]}get isFullWidth(){return this.hasAttribute("full-width")}render(){return e`
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
                                <vl-side-navigation-layout content-block heading-root-selector="#main-content">
                                    <div slot="content" id="main-content">
                                        <vl-title type="h1"
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
                                    </div>
                                </vl-side-navigation-layout>
                            </div>
                        </section>
                    </div>
                    <vl-footer slot="footer" identifier="0337f8dc-3266-4e7a-8f4a-95fd65189e5b" development></vl-footer>
                </vl-template>
            </main>
        `}};s=L([S("vl-page-layout-example")],s);p([s]);const k={title:"Ontwerp/Pagina Layout/Voorbeeld",parameters:{layout:"fullscreen"},decorators:[l=>e` <div style="min-height: calc(100vh - 172px);">${l()}</div>`]},t=()=>e`<vl-page-layout-example></vl-page-layout-example>`,a=()=>e`<vl-page-layout-example full-width></vl-page-layout-example>`;t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"() => html`<vl-page-layout-example></vl-page-layout-example>`",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => html`<vl-page-layout-example full-width></vl-page-layout-example>`",...a.parameters?.docs?.source}}};const F=["StandaardLayout","VolledigeBreedte"],N=Object.freeze(Object.defineProperty({__proto__:null,StandaardLayout:t,VolledigeBreedte:a,__namedExportsOrder:F,default:k},Symbol.toStringTag,{value:"Module"}));export{N as p};
