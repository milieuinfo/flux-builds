"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[7312],{"../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(o,n,e)=>{e.d(n,{f:()=>u});var t=e("../../node_modules/react/index.js"),i=e("../../node_modules/react-dom/client.js"),a=new Map,l=({callback:o,children:n})=>{let e=(0,t.useRef)();return(0,t.useLayoutEffect)(()=>{e.current!==o&&(e.current=o,o())},[o]),n},r=async(o,n)=>{let e=await s(n);return new Promise(n=>{e.render(t.createElement(l,{callback:()=>n(null)},o))})},c=(o,n)=>{let e=a.get(o);e&&(e.unmount(),a.delete(o))},s=async o=>{let n=a.get(o);return n||(n=i.createRoot(o),a.set(o,n)),n},p=e("../../node_modules/@storybook/blocks/dist/index.mjs"),d={code:p.XA,a:p.zE,...p.Sw},v=class extends t.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(o){let{showException:n}=this.props;n(o)}render(){let{hasError:o}=this.state,{children:n}=this.props;return o?null:t.createElement(t.Fragment,null,n)}},u=class{constructor(){this.render=async(o,n,i)=>{let a={...d,...n?.components},l=p.kQ;return new Promise((c,s)=>{e.e(814).then(e.bind(e,"../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:e})=>r(t.createElement(v,{showException:s,key:Math.random()},t.createElement(e,{components:a},t.createElement(l,{context:o,docsParameter:n}))),i)).then(()=>c())})},this.unmount=o=>{c(o)}}}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(o,n,e)=>{e.d(n,{Hl:()=>t.Hl,W8:()=>t.W8,kL:()=>t.kL,ov:()=>t.ov}),e("../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var t=e("../../node_modules/@storybook/blocks/dist/index.mjs")},"./docs/f_ontwerp/popover/2_menu-accordion/popover-menu-accordion.stories.ts":(o,n,e)=>{e.r(n),e.d(n,{MenuAccordion:()=>x,__namedExportsOrder:()=>h,default:()=>g});var t=e("../../node_modules/lit-html/lit-html.js");e("../../node_modules/react/index.js");var i=e("../../node_modules/react/jsx-runtime.js"),a=e("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");e("../../node_modules/@storybook/addon-docs/dist/index.mjs");var l=e("../../node_modules/@storybook/blocks/dist/index.mjs");function r(o){let n=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li"},(0,a.RP)(),o.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"popover---menu-accordion",children:"Popover - Menu Accordion"}),"\n",(0,i.jsxs)(n.p,{children:["De accordion wordt gebruikt om inhoud te organiseren in een uitklapbaar formaat.",(0,i.jsx)("br",{}),"\nElke accordion kan een popover-menu bevatten dat specifieke acties aanbiedt."]}),"\n",(0,i.jsx)(n.h2,{id:"gebruik",children:"Gebruik"}),"\n",(0,i.jsx)(n.p,{children:"De accordion met popover-menu wordt gebruikt om inhoud te structureren en gebruikers de mogelijkheid te geven om specifieke acties uit te voeren."}),"\n",(0,i.jsx)(n.h2,{id:"ontwerp",children:"Ontwerp"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Accordion: elke accordion bestaat uit een titel en een inhoudsgebied dat kan worden uit- of ingeklapt."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Popover-menu: elke accordion kan een popover-menu bevatten dat specifieke acties aanbiedt.\nHet menu wordt meestal afgebeeld mbv een kebab menu icoon (drie verticale punten)."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Interactie: gebruikers kunnen op de titel klikken om de accordion uit- of in te klappen.\nDoor op het popover-menu icoon te klikken wordt het menu geopend en de extra acties weergegeven."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,i.jsx)(l.Hl,{of:x,sourceState:"none"}),"\n",(0,i.jsxs)("details",{open:!0,children:[(0,i.jsx)("summary",{children:"Code"}),(0,i.jsx)(l.kL,{code:'import { VlButtonComponent } from \'@domg-wc/components/next/button\';\nimport { CSSResult, LitElement, css, html } from \'lit\';\nimport { registerWebComponents, webComponent } from \'@domg-wc/common-utilities\';\nimport { vlElementsStyle } from \'@domg-wc/elements\';\nimport { VlAccordionComponent, VlPopoverComponent } from \'@domg-wc/components\';\n\nconst topLevelAccordionCss = `\n    .vl-accordion {background-color: white border-radius: 4px;}\n    .vl-accordion__content {background-color: rgb(248,249,252); padding: 0 15px; border-radius: 4px}\n    .vl-accordion__button-container {padding: 15px 15px 0 15px;}\n    .vl-accordion__subtitle {padding: 0 15px 0 15px;}\n`;\n\nconst subAccordionCss = `\n    .vl-accordion {background-color: white; border-radius: 4px;}\n    .js-vl-accordion--open {background-color: rgb(248,249,252);}\n    .vl-accordion__button-container {padding: 15px;}\n    .js-vl-accordion--open > .vl-accordion__button-container {padding: 15px 15px 0 15px}\n    .vl-accordion__subtitle {margin: 0;}\n`;\n\n@webComponent(\'vl-popover-menu-accordion\')\nexport class VlPopoverMenuAccordionComponent extends LitElement {\n    static {\n        registerWebComponents([VlAccordionComponent, VlPopoverComponent, VlButtonComponent]);\n    }\n\n    static override get styles(): (CSSResult | CSSResult[])[] {\n        return [vlElementsStyle, css``];\n    }\n\n    override render() {\n        return html`\n            <style>\n                .laaginfo {\n                    display: flex;\n                }\n\n                .laaginfo__image {\n                    flex-basis: 15%;\n                    margin-right: 20px;\n                }\n\n                .laaginfo__table {\n                    display: flex;\n                    flex-basis: 100%;\n                    flex-direction: column;\n                }\n\n                .laaginfo__table--row {\n                    display: flex;\n                    justify-content: space-between;\n                }\n\n                .laaginfo__table--row div {\n                    flex-basis: 50%;\n                    padding-bottom: 10px;\n                }\n\n                .panel {\n                    border: 1px solid darkgray;\n                    border-radius: 4px;\n                }\n\n                .panel > div:not(:last-child) {\n                    border-bottom: 1px solid darkgray;\n                }\n\n                .panel > div:last-child {\n                    border-radius: 4px;\n                }\n            </style>\n            <div class="panel">\n                <vl-accordion data-vl-toggle-text="Stedelijk woongebied" data-vl-custom-css=${topLevelAccordionCss}>\n                    <span class="laaginfo">\n                        <div class="laaginfo__image">\n                            <img class="laaginfo__image" src="cat.jpeg" alt="Example image" />\n                        </div>\n                        <div class="laaginfo__table">\n                            <div class="laaginfo__table--row">\n                                <div>Laagkenmerk</div>\n                                <div>Grondvlak</div>\n                            </div>\n                            <div class="laaginfo__table--row">\n                                <div>Categorie gebiedsaanduiding</div>\n                                <div>Wonen</div>\n                            </div>\n                            <div class="laaginfo__table--row">\n                                <div>Legendecode</div>\n                                <div>01109_XX</div>\n                            </div>\n                        </div>\n                    </span>\n                    <vl-text annotation slot="subtitle">Lorem ipsum</vl-text>\n                    <span slot="menu">\n                        <vl-button-next id="btn-acties1" icon="nav-show-more-vertical" ghost></vl-button-next>\n                        <vl-popover for="btn-acties1" placement="bottom-end" distance="5">\n                            <vl-popover-action-list>\n                                <vl-popover-action icon="search">Zoeken</vl-popover-action>\n                                <vl-popover-action icon="edit">Aanpassen</vl-popover-action>\n                                <vl-popover-action icon="bin">Verwijderen</vl-popover-action>\n                            </vl-popover-action-list>\n                        </vl-popover>\n                    </span>\n                    <div class="panel">\n                        <div>\n                            <vl-accordion data-vl-toggle-text="$1.1" data-vl-custom-css=${subAccordionCss}>\n                                <span slot="menu">\n                                    <vl-button-next\n                                        id="btn-acties2"\n                                        icon="nav-show-more-vertical"\n                                        ghost\n                                    ></vl-button-next>\n                                    <vl-popover for="btn-acties2" placement="bottom-end" distance="5">\n                                        <vl-popover-action-list>\n                                            <vl-popover-action icon="search">Zoeken</vl-popover-action>\n                                            <vl-popover-action icon="edit">Aanpassen</vl-popover-action>\n                                            <vl-popover-action icon="bin">Verwijderen</vl-popover-action>\n                                        </vl-popover-action-list>\n                                    </vl-popover>\n                                </span>\n                                <div class="panel">\n                                    <div>\n                                        <vl-accordion\n                                            data-vl-toggle-text="Alle werken"\n                                            data-vl-custom-css=${subAccordionCss}\n                                        >\n                                            <span slot="menu">\n                                                <vl-button-next\n                                                    id="btn-acties3"\n                                                    icon="nav-show-more-vertical"\n                                                    ghost\n                                                ></vl-button-next>\n                                                <vl-popover for="btn-acties3" placement="bottom-end" distance="5">\n                                                    <vl-popover-action-list>\n                                                        <vl-popover-action icon="search">Zoeken</vl-popover-action>\n                                                        <vl-popover-action icon="edit">Aanpassen</vl-popover-action>\n                                                        <vl-popover-action icon="bin">Verwijderen</vl-popover-action>\n                                                    </vl-popover-action-list>\n                                                </vl-popover>\n                                            </span>\n                                            <span\n                                                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n                                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n                                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate\n                                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n                                                occaecat cupidatat non proident, sunt in culpa qui officia deserunt\n                                                mollit anim id est laborum.</span\n                                            >\n                                        </vl-accordion>\n                                    </div>\n                                    <div>\n                                        <vl-accordion\n                                            data-vl-toggle-text="Alle werken"\n                                            data-vl-custom-css=${subAccordionCss}\n                                        >\n                                            <span slot="menu">\n                                                <vl-button-next\n                                                    id="btn-acties4"\n                                                    icon="nav-show-more-vertical"\n                                                    ghost\n                                                ></vl-button-next>\n                                                <vl-popover for="btn-acties4" placement="bottom-end" distance="5">\n                                                    <vl-popover-action-list>\n                                                        <vl-popover-action icon="search">Zoeken</vl-popover-action>\n                                                        <vl-popover-action icon="edit">Aanpassen</vl-popover-action>\n                                                        <vl-popover-action icon="bin">Verwijderen</vl-popover-action>\n                                                    </vl-popover-action-list>\n                                                </vl-popover>\n                                            </span>\n                                            <span\n                                                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n                                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n                                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate\n                                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n                                                occaecat cupidatat non proident, sunt in culpa qui officia deserunt\n                                                mollit anim id est laborum.</span\n                                            >\n                                        </vl-accordion>\n                                    </div>\n                                </div>\n                            </vl-accordion>\n                        </div>\n                        <div>\n                            <vl-accordion data-vl-toggle-text="$1.2" data-vl-custom-css=${subAccordionCss}>\n                                <span slot="menu">\n                                    <vl-button-next\n                                        id="btn-acties5"\n                                        icon="nav-show-more-vertical"\n                                        ghost\n                                    ></vl-button-next>\n                                    <vl-popover for="btn-acties5" placement="bottom-end" distance="5">\n                                        <vl-popover-action-list>\n                                            <vl-popover-action icon="search">Zoeken</vl-popover-action>\n                                            <vl-popover-action icon="edit">Aanpassen</vl-popover-action>\n                                            <vl-popover-action icon="bin">Verwijderen</vl-popover-action>\n                                        </vl-popover-action-list>\n                                    </vl-popover>\n                                </span>\n                                <div class="panel">\n                                    <div>\n                                        <vl-accordion\n                                            data-vl-toggle-text="Alle werken"\n                                            data-vl-custom-css=${subAccordionCss}\n                                        >\n                                            <span slot="menu">\n                                                <vl-button-next\n                                                    id="btn-acties6"\n                                                    icon="nav-show-more-vertical"\n                                                    ghost\n                                                ></vl-button-next>\n                                                <vl-popover for="btn-acties6" placement="bottom-end" distance="5">\n                                                    <vl-popover-action-list>\n                                                        <vl-popover-action icon="search">Zoeken</vl-popover-action>\n                                                        <vl-popover-action icon="edit">Aanpassen</vl-popover-action>\n                                                        <vl-popover-action icon="bin">Verwijderen</vl-popover-action>\n                                                    </vl-popover-action-list>\n                                                </vl-popover>\n                                            </span>\n                                            <span\n                                                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n                                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n                                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate\n                                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n                                                occaecat cupidatat non proident, sunt in culpa qui officia deserunt\n                                                mollit anim id est laborum.</span\n                                            >\n                                        </vl-accordion>\n                                    </div>\n                                    <div>\n                                        <vl-accordion\n                                            data-vl-toggle-text="Alle werken"\n                                            data-vl-custom-css=${subAccordionCss}\n                                        >\n                                            <span slot="menu">\n                                                <vl-button-next\n                                                    id="btn-acties7"\n                                                    icon="nav-show-more-vertical"\n                                                    ghost\n                                                ></vl-button-next>\n                                                <vl-popover for="btn-acties7" placement="bottom-end" distance="5">\n                                                    <vl-popover-action-list>\n                                                        <vl-popover-action icon="search">Zoeken</vl-popover-action>\n                                                        <vl-popover-action icon="edit">Aanpassen</vl-popover-action>\n                                                        <vl-popover-action icon="bin">Verwijderen</vl-popover-action>\n                                                    </vl-popover-action-list>\n                                                </vl-popover>\n                                            </span>\n                                            <span\n                                                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n                                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n                                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate\n                                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n                                                occaecat cupidatat non proident, sunt in culpa qui officia deserunt\n                                                mollit anim id est laborum.</span\n                                            >\n                                        </vl-accordion>\n                                    </div>\n                                </div>\n                            </vl-accordion>\n                        </div>\n                        <div>\n                            <vl-accordion data-vl-toggle-text="$1.3" data-vl-custom-css=${subAccordionCss}>\n                                <span slot="menu">\n                                    <vl-button-next\n                                        id="btn-acties8"\n                                        icon="nav-show-more-vertical"\n                                        ghost\n                                    ></vl-button-next>\n                                    <vl-popover for="btn-acties8" placement="bottom-end" distance="5">\n                                        <vl-popover-action-list>\n                                            <vl-popover-action icon="search">Zoeken</vl-popover-action>\n                                            <vl-popover-action icon="edit">Aanpassen</vl-popover-action>\n                                            <vl-popover-action icon="bin">Verwijderen</vl-popover-action>\n                                        </vl-popover-action-list>\n                                    </vl-popover>\n                                </span>\n                                <div class="panel">\n                                    <div>\n                                        <vl-accordion\n                                            data-vl-toggle-text="Alle werken"\n                                            data-vl-custom-css=${subAccordionCss}\n                                        >\n                                            <span slot="menu">\n                                                <vl-button-next\n                                                    id="btn-acties9"\n                                                    icon="nav-show-more-vertical"\n                                                    ghost\n                                                ></vl-button-next>\n                                                <vl-popover for="btn-acties9" placement="bottom-end" distance="5">\n                                                    <vl-popover-action-list>\n                                                        <vl-popover-action icon="search">Zoeken</vl-popover-action>\n                                                        <vl-popover-action icon="edit">Aanpassen</vl-popover-action>\n                                                        <vl-popover-action icon="bin">Verwijderen</vl-popover-action>\n                                                    </vl-popover-action-list>\n                                                </vl-popover>\n                                            </span>\n                                            <span\n                                                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n                                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n                                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate\n                                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n                                                occaecat cupidatat non proident, sunt in culpa qui officia deserunt\n                                                mollit anim id est laborum.</span\n                                            >\n                                        </vl-accordion>\n                                    </div>\n                                    <div>\n                                        <vl-accordion\n                                            data-vl-toggle-text="Alle werken"\n                                            data-vl-custom-css=${subAccordionCss}\n                                        >\n                                            <span slot="menu">\n                                                <vl-button-next\n                                                    id="btn-acties10"\n                                                    icon="nav-show-more-vertical"\n                                                    ghost\n                                                ></vl-button-next>\n                                                <vl-popover for="btn-acties10" placement="bottom-end" distance="5">\n                                                    <vl-popover-action-list>\n                                                        <vl-popover-action icon="search">Zoeken</vl-popover-action>\n                                                        <vl-popover-action icon="edit">Aanpassen</vl-popover-action>\n                                                        <vl-popover-action icon="bin">Verwijderen</vl-popover-action>\n                                                    </vl-popover-action-list>\n                                                </vl-popover>\n                                            </span>\n                                            <span\n                                                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n                                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n                                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate\n                                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n                                                occaecat cupidatat non proident, sunt in culpa qui officia deserunt\n                                                mollit anim id est laborum.</span\n                                            >\n                                        </vl-accordion>\n                                    </div>\n                                </div>\n                            </vl-accordion>\n                        </div>\n                    </div>\n                </vl-accordion>\n            </div>\n        `;\n    }\n\n    protected override createRenderRoot(): HTMLElement | DocumentFragment {\n        return this;\n    }\n}\n\ndeclare global {\n    interface HTMLElementTagNameMap {\n        \'vl-popover-menu-accordion\': VlPopoverMenuAccordionComponent;\n    }\n}\n',language:"ts",dark:!0})]})]})}var c=e("../../libs/common/utilities/src/index.ts"),s=e("../../libs/components/src/next/button/index.ts"),p=e("../../node_modules/lit/index.js"),d=e("../../libs/elements/src/index.ts"),v=e("../../libs/components/src/index.ts");let u=`
    .vl-accordion {background-color: white border-radius: 4px;}
    .vl-accordion__content {background-color: rgb(248,249,252); padding: 0 15px; border-radius: 4px}
    .vl-accordion__button-container {padding: 15px 15px 0 15px;}
    .vl-accordion__subtitle {padding: 0 15px 0 15px;}
`,m=`
    .vl-accordion {background-color: white; border-radius: 4px;}
    .js-vl-accordion--open {background-color: rgb(248,249,252);}
    .vl-accordion__button-container {padding: 15px;}
    .js-vl-accordion--open > .vl-accordion__button-container {padding: 15px 15px 0 15px}
    .vl-accordion__subtitle {margin: 0;}
`;class b extends p.WF{static{(0,c.gy)([v.iT,v.nW,s.Y])}static get styles(){return[d.hF,(0,p.AH)``]}render(){return(0,p.qy)`
            <style>
                .laaginfo {
                    display: flex;
                }

                .laaginfo__image {
                    flex-basis: 15%;
                    margin-right: 20px;
                }

                .laaginfo__table {
                    display: flex;
                    flex-basis: 100%;
                    flex-direction: column;
                }

                .laaginfo__table--row {
                    display: flex;
                    justify-content: space-between;
                }

                .laaginfo__table--row div {
                    flex-basis: 50%;
                    padding-bottom: 10px;
                }

                .panel {
                    border: 1px solid darkgray;
                    border-radius: 4px;
                }

                .panel > div:not(:last-child) {
                    border-bottom: 1px solid darkgray;
                }

                .panel > div:last-child {
                    border-radius: 4px;
                }
            </style>
            <div class="panel">
                <vl-accordion data-vl-toggle-text="Stedelijk woongebied" data-vl-custom-css=${u}>
                    <span class="laaginfo">
                        <div class="laaginfo__image">
                            <img class="laaginfo__image" src="cat.jpeg" alt="Example image" />
                        </div>
                        <div class="laaginfo__table">
                            <div class="laaginfo__table--row">
                                <div>Laagkenmerk</div>
                                <div>Grondvlak</div>
                            </div>
                            <div class="laaginfo__table--row">
                                <div>Categorie gebiedsaanduiding</div>
                                <div>Wonen</div>
                            </div>
                            <div class="laaginfo__table--row">
                                <div>Legendecode</div>
                                <div>01109_XX</div>
                            </div>
                        </div>
                    </span>
                    <vl-text annotation slot="subtitle">Lorem ipsum</vl-text>
                    <span slot="menu">
                        <vl-button-next id="btn-acties1" icon="nav-show-more-vertical" ghost></vl-button-next>
                        <vl-popover for="btn-acties1" placement="bottom-end" distance="5">
                            <vl-popover-action-list>
                                <vl-popover-action icon="search">Zoeken</vl-popover-action>
                                <vl-popover-action icon="edit">Aanpassen</vl-popover-action>
                                <vl-popover-action icon="bin">Verwijderen</vl-popover-action>
                            </vl-popover-action-list>
                        </vl-popover>
                    </span>
                    <div class="panel">
                        <div>
                            <vl-accordion data-vl-toggle-text="$1.1" data-vl-custom-css=${m}>
                                <span slot="menu">
                                    <vl-button-next
                                        id="btn-acties2"
                                        icon="nav-show-more-vertical"
                                        ghost
                                    ></vl-button-next>
                                    <vl-popover for="btn-acties2" placement="bottom-end" distance="5">
                                        <vl-popover-action-list>
                                            <vl-popover-action icon="search">Zoeken</vl-popover-action>
                                            <vl-popover-action icon="edit">Aanpassen</vl-popover-action>
                                            <vl-popover-action icon="bin">Verwijderen</vl-popover-action>
                                        </vl-popover-action-list>
                                    </vl-popover>
                                </span>
                                <div class="panel">
                                    <div>
                                        <vl-accordion
                                            data-vl-toggle-text="Alle werken"
                                            data-vl-custom-css=${m}
                                        >
                                            <span slot="menu">
                                                <vl-button-next
                                                    id="btn-acties3"
                                                    icon="nav-show-more-vertical"
                                                    ghost
                                                ></vl-button-next>
                                                <vl-popover for="btn-acties3" placement="bottom-end" distance="5">
                                                    <vl-popover-action-list>
                                                        <vl-popover-action icon="search">Zoeken</vl-popover-action>
                                                        <vl-popover-action icon="edit">Aanpassen</vl-popover-action>
                                                        <vl-popover-action icon="bin">Verwijderen</vl-popover-action>
                                                    </vl-popover-action-list>
                                                </vl-popover>
                                            </span>
                                            <span
                                                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                                occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                                mollit anim id est laborum.</span
                                            >
                                        </vl-accordion>
                                    </div>
                                    <div>
                                        <vl-accordion
                                            data-vl-toggle-text="Alle werken"
                                            data-vl-custom-css=${m}
                                        >
                                            <span slot="menu">
                                                <vl-button-next
                                                    id="btn-acties4"
                                                    icon="nav-show-more-vertical"
                                                    ghost
                                                ></vl-button-next>
                                                <vl-popover for="btn-acties4" placement="bottom-end" distance="5">
                                                    <vl-popover-action-list>
                                                        <vl-popover-action icon="search">Zoeken</vl-popover-action>
                                                        <vl-popover-action icon="edit">Aanpassen</vl-popover-action>
                                                        <vl-popover-action icon="bin">Verwijderen</vl-popover-action>
                                                    </vl-popover-action-list>
                                                </vl-popover>
                                            </span>
                                            <span
                                                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                                occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                                mollit anim id est laborum.</span
                                            >
                                        </vl-accordion>
                                    </div>
                                </div>
                            </vl-accordion>
                        </div>
                        <div>
                            <vl-accordion data-vl-toggle-text="$1.2" data-vl-custom-css=${m}>
                                <span slot="menu">
                                    <vl-button-next
                                        id="btn-acties5"
                                        icon="nav-show-more-vertical"
                                        ghost
                                    ></vl-button-next>
                                    <vl-popover for="btn-acties5" placement="bottom-end" distance="5">
                                        <vl-popover-action-list>
                                            <vl-popover-action icon="search">Zoeken</vl-popover-action>
                                            <vl-popover-action icon="edit">Aanpassen</vl-popover-action>
                                            <vl-popover-action icon="bin">Verwijderen</vl-popover-action>
                                        </vl-popover-action-list>
                                    </vl-popover>
                                </span>
                                <div class="panel">
                                    <div>
                                        <vl-accordion
                                            data-vl-toggle-text="Alle werken"
                                            data-vl-custom-css=${m}
                                        >
                                            <span slot="menu">
                                                <vl-button-next
                                                    id="btn-acties6"
                                                    icon="nav-show-more-vertical"
                                                    ghost
                                                ></vl-button-next>
                                                <vl-popover for="btn-acties6" placement="bottom-end" distance="5">
                                                    <vl-popover-action-list>
                                                        <vl-popover-action icon="search">Zoeken</vl-popover-action>
                                                        <vl-popover-action icon="edit">Aanpassen</vl-popover-action>
                                                        <vl-popover-action icon="bin">Verwijderen</vl-popover-action>
                                                    </vl-popover-action-list>
                                                </vl-popover>
                                            </span>
                                            <span
                                                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                                occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                                mollit anim id est laborum.</span
                                            >
                                        </vl-accordion>
                                    </div>
                                    <div>
                                        <vl-accordion
                                            data-vl-toggle-text="Alle werken"
                                            data-vl-custom-css=${m}
                                        >
                                            <span slot="menu">
                                                <vl-button-next
                                                    id="btn-acties7"
                                                    icon="nav-show-more-vertical"
                                                    ghost
                                                ></vl-button-next>
                                                <vl-popover for="btn-acties7" placement="bottom-end" distance="5">
                                                    <vl-popover-action-list>
                                                        <vl-popover-action icon="search">Zoeken</vl-popover-action>
                                                        <vl-popover-action icon="edit">Aanpassen</vl-popover-action>
                                                        <vl-popover-action icon="bin">Verwijderen</vl-popover-action>
                                                    </vl-popover-action-list>
                                                </vl-popover>
                                            </span>
                                            <span
                                                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                                occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                                mollit anim id est laborum.</span
                                            >
                                        </vl-accordion>
                                    </div>
                                </div>
                            </vl-accordion>
                        </div>
                        <div>
                            <vl-accordion data-vl-toggle-text="$1.3" data-vl-custom-css=${m}>
                                <span slot="menu">
                                    <vl-button-next
                                        id="btn-acties8"
                                        icon="nav-show-more-vertical"
                                        ghost
                                    ></vl-button-next>
                                    <vl-popover for="btn-acties8" placement="bottom-end" distance="5">
                                        <vl-popover-action-list>
                                            <vl-popover-action icon="search">Zoeken</vl-popover-action>
                                            <vl-popover-action icon="edit">Aanpassen</vl-popover-action>
                                            <vl-popover-action icon="bin">Verwijderen</vl-popover-action>
                                        </vl-popover-action-list>
                                    </vl-popover>
                                </span>
                                <div class="panel">
                                    <div>
                                        <vl-accordion
                                            data-vl-toggle-text="Alle werken"
                                            data-vl-custom-css=${m}
                                        >
                                            <span slot="menu">
                                                <vl-button-next
                                                    id="btn-acties9"
                                                    icon="nav-show-more-vertical"
                                                    ghost
                                                ></vl-button-next>
                                                <vl-popover for="btn-acties9" placement="bottom-end" distance="5">
                                                    <vl-popover-action-list>
                                                        <vl-popover-action icon="search">Zoeken</vl-popover-action>
                                                        <vl-popover-action icon="edit">Aanpassen</vl-popover-action>
                                                        <vl-popover-action icon="bin">Verwijderen</vl-popover-action>
                                                    </vl-popover-action-list>
                                                </vl-popover>
                                            </span>
                                            <span
                                                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                                occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                                mollit anim id est laborum.</span
                                            >
                                        </vl-accordion>
                                    </div>
                                    <div>
                                        <vl-accordion
                                            data-vl-toggle-text="Alle werken"
                                            data-vl-custom-css=${m}
                                        >
                                            <span slot="menu">
                                                <vl-button-next
                                                    id="btn-acties10"
                                                    icon="nav-show-more-vertical"
                                                    ghost
                                                ></vl-button-next>
                                                <vl-popover for="btn-acties10" placement="bottom-end" distance="5">
                                                    <vl-popover-action-list>
                                                        <vl-popover-action icon="search">Zoeken</vl-popover-action>
                                                        <vl-popover-action icon="edit">Aanpassen</vl-popover-action>
                                                        <vl-popover-action icon="bin">Verwijderen</vl-popover-action>
                                                    </vl-popover-action-list>
                                                </vl-popover>
                                            </span>
                                            <span
                                                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                                occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                                mollit anim id est laborum.</span
                                            >
                                        </vl-accordion>
                                    </div>
                                </div>
                            </vl-accordion>
                        </div>
                    </div>
                </vl-accordion>
            </div>
        `}createRenderRoot(){return this}}b=function(o,n,e,t){var i,a=arguments.length,l=a<3?n:null===t?t=Object.getOwnPropertyDescriptor(n,e):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(o,n,e,t);else for(var r=o.length-1;r>=0;r--)(i=o[r])&&(l=(a<3?i(l):a>3?i(n,e,l):i(n,e))||l);return a>3&&l&&Object.defineProperty(n,e,l),l}([(0,c.M1)("vl-popover-menu-accordion")],b),(0,c.gy)([b]);let g={title:"Ontwerp/Popover/Menu Accordion",tags:["autodocs"],parameters:{docs:{page:function(o={}){let{wrapper:n}=Object.assign({},(0,a.RP)(),o.components);return n?(0,i.jsx)(n,Object.assign({},o,{children:(0,i.jsx)(r,o)})):r(o)},story:{inline:!1,iframeHeight:500}}}},x=()=>(0,t.qy)`<vl-popover-menu-accordion></vl-popover-menu-accordion>`;x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"() => html`<vl-popover-menu-accordion></vl-popover-menu-accordion>`",...x.parameters?.docs?.source}}};let h=["MenuAccordion"]},"../../node_modules/react-dom/client.js":(o,n,e)=>{var t=e("../../node_modules/react-dom/index.js");n.createRoot=t.createRoot,n.hydrateRoot=t.hydrateRoot}}]);