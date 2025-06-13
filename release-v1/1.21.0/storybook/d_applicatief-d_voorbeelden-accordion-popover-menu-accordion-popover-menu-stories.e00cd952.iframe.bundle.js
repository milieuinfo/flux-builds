(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[427],{"./apps/storybook/docs/d_applicatief/d_voorbeelden/accordion-popover-menu/accordion-popover-menu.stories.ts":(o,n,e)=>{"use strict";e.r(n),e.d(n,{AccordionPopoverMenu:()=>p,__namedExportsOrder:()=>v,default:()=>c});var i=e("./node_modules/lit-html/lit-html.js"),a=e("./libs/components/src/index.ts"),t=e("./libs/elements/src/index.ts"),l=e("./apps/storybook/docs/d_applicatief/d_voorbeelden/accordion-popover-menu/accordion-popover-menu.stories-doc.mdx");(0,e("./libs/common/utilities/src/index.ts").YV)([a.b8,a.P7,a.m5,a.Pr,t.gG,t.Gi]);let c={title:"Applicatief/Voorbeelden/accordion-popover-menu",component:"accordion popover menu",parameters:{docs:{page:l.default,story:{inline:!1,iframeHeight:500}}}},s=`
    .vl-accordion {background-color: white border-radius: 4px;}
    .vl-accordion__content {background-color: rgb(248,249,252); padding: 0 15px; border-radius: 4px}
    .vl-accordion__button-container {padding: 15px 15px 0 15px;}
    .vl-accordion__subtitle {padding: 0 15px 0 15px;}
`,r=`
    .vl-accordion {background-color: white; border-radius: 4px;}
    .js-vl-accordion--open {background-color: rgb(248,249,252);}
    .vl-accordion__button-container {padding: 15px;}
    .js-vl-accordion--open > .vl-accordion__button-container {padding: 15px 15px 0 15px}
    .vl-accordion__subtitle {margin: 0;}
`,p=()=>(0,i.dy)`
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
        <div>
            <vl-accordion data-vl-toggle-text="Stedelijk woongebied" data-vl-custom-css=${s}>
                <span class="laaginfo">
                    <div class="laaginfo__image">
                        <img is="vl-image" class="laaginfo__image" src="cat.jpeg" alt="Example image" />
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
                <vl-annotation slot="subtitle">Lorem ipsum</vl-annotation>
                <span slot="menu">
                    <a is="vl-link" id="btn-acties1">
                        <span is="vl-icon" data-vl-icon="nav-show-more-vertical"></span>
                    </a>
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
                        <vl-accordion data-vl-toggle-text="$1.1" data-vl-custom-css=${r}>
                            <span slot="menu">
                                <a is="vl-link" id="btn-acties2">
                                    <span is="vl-icon" data-vl-icon="nav-show-more-vertical"></span>
                                </a>
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
                                        data-vl-custom-css=${r}
                                    >
                                        <span slot="menu">
                                            <a is="vl-link" id="btn-acties3">
                                                <span is="vl-icon" data-vl-icon="nav-show-more-vertical"></span>
                                            </a>
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
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                            non proident, sunt in culpa qui officia deserunt mollit anim id est
                                            laborum.</span
                                        >
                                    </vl-accordion>
                                </div>
                                <div>
                                    <vl-accordion
                                        data-vl-toggle-text="Alle werken"
                                        data-vl-custom-css=${r}
                                    >
                                        <span slot="menu">
                                            <a is="vl-link" id="btn-acties4">
                                                <span is="vl-icon" data-vl-icon="nav-show-more-vertical"></span>
                                            </a>
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
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                            non proident, sunt in culpa qui officia deserunt mollit anim id est
                                            laborum.</span
                                        >
                                    </vl-accordion>
                                </div>
                            </div>
                        </vl-accordion>
                    </div>
                    <div>
                        <vl-accordion data-vl-toggle-text="$1.2" data-vl-custom-css=${r}>
                            <span slot="menu">
                                <a is="vl-link" id="btn-acties5">
                                    <span is="vl-icon" data-vl-icon="nav-show-more-vertical"></span>
                                </a>
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
                                        data-vl-custom-css=${r}
                                    >
                                        <span slot="menu">
                                            <a is="vl-link" id="btn-acties6">
                                                <span is="vl-icon" data-vl-icon="nav-show-more-vertical"></span>
                                            </a>
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
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                            non proident, sunt in culpa qui officia deserunt mollit anim id est
                                            laborum.</span
                                        >
                                    </vl-accordion>
                                </div>
                                <div>
                                    <vl-accordion
                                        data-vl-toggle-text="Alle werken"
                                        data-vl-custom-css=${r}
                                    >
                                        <span slot="menu">
                                            <a is="vl-link" id="btn-acties7">
                                                <span is="vl-icon" data-vl-icon="nav-show-more-vertical"></span>
                                            </a>
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
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                            non proident, sunt in culpa qui officia deserunt mollit anim id est
                                            laborum.</span
                                        >
                                    </vl-accordion>
                                </div>
                            </div>
                        </vl-accordion>
                    </div>
                    <div>
                        <vl-accordion data-vl-toggle-text="$1.3" data-vl-custom-css=${r}>
                            <span slot="menu">
                                <a is="vl-link" id="btn-acties8">
                                    <span is="vl-icon" data-vl-icon="nav-show-more-vertical"></span>
                                </a>
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
                                        data-vl-custom-css=${r}
                                    >
                                        <span slot="menu">
                                            <a is="vl-link" id="btn-acties9">
                                                <span is="vl-icon" data-vl-icon="nav-show-more-vertical"></span>
                                            </a>
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
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                            non proident, sunt in culpa qui officia deserunt mollit anim id est
                                            laborum.</span
                                        >
                                    </vl-accordion>
                                </div>
                                <div>
                                    <vl-accordion
                                        data-vl-toggle-text="Alle werken"
                                        data-vl-custom-css=${r}
                                    >
                                        <span slot="menu">
                                            <a is="vl-link" id="btn-acties10">
                                                <span is="vl-icon" data-vl-icon="nav-show-more-vertical"></span>
                                            </a>
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
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                            non proident, sunt in culpa qui officia deserunt mollit anim id est
                                            laborum.</span
                                        >
                                    </vl-accordion>
                                </div>
                            </div>
                        </vl-accordion>
                    </div>
                </div>
            </vl-accordion>
        </div>
    </div>
`;p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:'() => html`\n    <style>\n        .laaginfo {\n            display: flex;\n        }\n\n        .laaginfo__image {\n            flex-basis: 15%;\n            margin-right: 20px;\n        }\n\n        .laaginfo__table {\n            display: flex;\n            flex-basis: 100%;\n            flex-direction: column;\n        }\n\n        .laaginfo__table--row {\n            display: flex;\n            justify-content: space-between;\n        }\n\n        .laaginfo__table--row div {\n            flex-basis: 50%;\n            padding-bottom: 10px;\n        }\n\n        .panel {\n            border: 1px solid darkgray;\n            border-radius: 4px;\n        }\n\n        .panel > div:not(:last-child) {\n            border-bottom: 1px solid darkgray;\n        }\n\n        .panel > div:last-child {\n            border-radius: 4px;\n        }\n    </style>\n    <div class="panel">\n        <div>\n            <vl-accordion data-vl-toggle-text="Stedelijk woongebied" data-vl-custom-css=${topLevelAccordionCss}>\n                <span class="laaginfo">\n                    <div class="laaginfo__image">\n                        <img is="vl-image" class="laaginfo__image" src="cat.jpeg" alt="Example image" />\n                    </div>\n                    <div class="laaginfo__table">\n                        <div class="laaginfo__table--row">\n                            <div>Laagkenmerk</div>\n                            <div>Grondvlak</div>\n                        </div>\n                        <div class="laaginfo__table--row">\n                            <div>Categorie gebiedsaanduiding</div>\n                            <div>Wonen</div>\n                        </div>\n                        <div class="laaginfo__table--row">\n                            <div>Legendecode</div>\n                            <div>01109_XX</div>\n                        </div>\n                    </div>\n                </span>\n                <vl-annotation slot="subtitle">Lorem ipsum</vl-annotation>\n                <span slot="menu">\n                    <a is="vl-link" id="btn-acties1">\n                        <span is="vl-icon" data-vl-icon="nav-show-more-vertical"></span>\n                    </a>\n                    <vl-popover for="btn-acties1" placement="bottom-end" distance="5">\n                        <vl-popover-action-list>\n                            <vl-popover-action icon="search">Zoeken</vl-popover-action>\n                            <vl-popover-action icon="edit">Aanpassen</vl-popover-action>\n                            <vl-popover-action icon="bin">Verwijderen</vl-popover-action>\n                        </vl-popover-action-list>\n                    </vl-popover>\n                </span>\n                <div class="panel">\n                    <div>\n                        <vl-accordion data-vl-toggle-text="$1.1" data-vl-custom-css=${subAccordionCss}>\n                            <span slot="menu">\n                                <a is="vl-link" id="btn-acties2">\n                                    <span is="vl-icon" data-vl-icon="nav-show-more-vertical"></span>\n                                </a>\n                                <vl-popover for="btn-acties2" placement="bottom-end" distance="5">\n                                    <vl-popover-action-list>\n                                        <vl-popover-action icon="search">Zoeken</vl-popover-action>\n                                        <vl-popover-action icon="edit">Aanpassen</vl-popover-action>\n                                        <vl-popover-action icon="bin">Verwijderen</vl-popover-action>\n                                    </vl-popover-action-list>\n                                </vl-popover>\n                            </span>\n                            <div class="panel">\n                                <div>\n                                    <vl-accordion\n                                        data-vl-toggle-text="Alle werken"\n                                        data-vl-custom-css=${subAccordionCss}\n                                    >\n                                        <span slot="menu">\n                                            <a is="vl-link" id="btn-acties3">\n                                                <span is="vl-icon" data-vl-icon="nav-show-more-vertical"></span>\n                                            </a>\n                                            <vl-popover for="btn-acties3" placement="bottom-end" distance="5">\n                                                <vl-popover-action-list>\n                                                    <vl-popover-action icon="search">Zoeken</vl-popover-action>\n                                                    <vl-popover-action icon="edit">Aanpassen</vl-popover-action>\n                                                    <vl-popover-action icon="bin">Verwijderen</vl-popover-action>\n                                                </vl-popover-action-list>\n                                            </vl-popover>\n                                        </span>\n                                        <span\n                                            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n                                            non proident, sunt in culpa qui officia deserunt mollit anim id est\n                                            laborum.</span\n                                        >\n                                    </vl-accordion>\n                                </div>\n                                <div>\n                                    <vl-accordion\n                                        data-vl-toggle-text="Alle werken"\n                                        data-vl-custom-css=${subAccordionCss}\n                                    >\n                                        <span slot="menu">\n                                            <a is="vl-link" id="btn-acties4">\n                                                <span is="vl-icon" data-vl-icon="nav-show-more-vertical"></span>\n                                            </a>\n                                            <vl-popover for="btn-acties4" placement="bottom-end" distance="5">\n                                                <vl-popover-action-list>\n                                                    <vl-popover-action icon="search">Zoeken</vl-popover-action>\n                                                    <vl-popover-action icon="edit">Aanpassen</vl-popover-action>\n                                                    <vl-popover-action icon="bin">Verwijderen</vl-popover-action>\n                                                </vl-popover-action-list>\n                                            </vl-popover>\n                                        </span>\n                                        <span\n                                            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n                                            non proident, sunt in culpa qui officia deserunt mollit anim id est\n                                            laborum.</span\n                                        >\n                                    </vl-accordion>\n                                </div>\n                            </div>\n                        </vl-accordion>\n                    </div>\n                    <div>\n                        <vl-accordion data-vl-toggle-text="$1.2" data-vl-custom-css=${subAccordionCss}>\n                            <span slot="menu">\n                                <a is="vl-link" id="btn-acties5">\n                                    <span is="vl-icon" data-vl-icon="nav-show-more-vertical"></span>\n                                </a>\n                                <vl-popover for="btn-acties5" placement="bottom-end" distance="5">\n                                    <vl-popover-action-list>\n                                        <vl-popover-action icon="search">Zoeken</vl-popover-action>\n                                        <vl-popover-action icon="edit">Aanpassen</vl-popover-action>\n                                        <vl-popover-action icon="bin">Verwijderen</vl-popover-action>\n                                    </vl-popover-action-list>\n                                </vl-popover>\n                            </span>\n                            <div class="panel">\n                                <div>\n                                    <vl-accordion\n                                        data-vl-toggle-text="Alle werken"\n                                        data-vl-custom-css=${subAccordionCss}\n                                    >\n                                        <span slot="menu">\n                                            <a is="vl-link" id="btn-acties6">\n                                                <span is="vl-icon" data-vl-icon="nav-show-more-vertical"></span>\n                                            </a>\n                                            <vl-popover for="btn-acties6" placement="bottom-end" distance="5">\n                                                <vl-popover-action-list>\n                                                    <vl-popover-action icon="search">Zoeken</vl-popover-action>\n                                                    <vl-popover-action icon="edit">Aanpassen</vl-popover-action>\n                                                    <vl-popover-action icon="bin">Verwijderen</vl-popover-action>\n                                                </vl-popover-action-list>\n                                            </vl-popover>\n                                        </span>\n                                        <span\n                                            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n                                            non proident, sunt in culpa qui officia deserunt mollit anim id est\n                                            laborum.</span\n                                        >\n                                    </vl-accordion>\n                                </div>\n                                <div>\n                                    <vl-accordion\n                                        data-vl-toggle-text="Alle werken"\n                                        data-vl-custom-css=${subAccordionCss}\n                                    >\n                                        <span slot="menu">\n                                            <a is="vl-link" id="btn-acties7">\n                                                <span is="vl-icon" data-vl-icon="nav-show-more-vertical"></span>\n                                            </a>\n                                            <vl-popover for="btn-acties7" placement="bottom-end" distance="5">\n                                                <vl-popover-action-list>\n                                                    <vl-popover-action icon="search">Zoeken</vl-popover-action>\n                                                    <vl-popover-action icon="edit">Aanpassen</vl-popover-action>\n                                                    <vl-popover-action icon="bin">Verwijderen</vl-popover-action>\n                                                </vl-popover-action-list>\n                                            </vl-popover>\n                                        </span>\n                                        <span\n                                            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n                                            non proident, sunt in culpa qui officia deserunt mollit anim id est\n                                            laborum.</span\n                                        >\n                                    </vl-accordion>\n                                </div>\n                            </div>\n                        </vl-accordion>\n                    </div>\n                    <div>\n                        <vl-accordion data-vl-toggle-text="$1.3" data-vl-custom-css=${subAccordionCss}>\n                            <span slot="menu">\n                                <a is="vl-link" id="btn-acties8">\n                                    <span is="vl-icon" data-vl-icon="nav-show-more-vertical"></span>\n                                </a>\n                                <vl-popover for="btn-acties8" placement="bottom-end" distance="5">\n                                    <vl-popover-action-list>\n                                        <vl-popover-action icon="search">Zoeken</vl-popover-action>\n                                        <vl-popover-action icon="edit">Aanpassen</vl-popover-action>\n                                        <vl-popover-action icon="bin">Verwijderen</vl-popover-action>\n                                    </vl-popover-action-list>\n                                </vl-popover>\n                            </span>\n                            <div class="panel">\n                                <div>\n                                    <vl-accordion\n                                        data-vl-toggle-text="Alle werken"\n                                        data-vl-custom-css=${subAccordionCss}\n                                    >\n                                        <span slot="menu">\n                                            <a is="vl-link" id="btn-acties9">\n                                                <span is="vl-icon" data-vl-icon="nav-show-more-vertical"></span>\n                                            </a>\n                                            <vl-popover for="btn-acties9" placement="bottom-end" distance="5">\n                                                <vl-popover-action-list>\n                                                    <vl-popover-action icon="search">Zoeken</vl-popover-action>\n                                                    <vl-popover-action icon="edit">Aanpassen</vl-popover-action>\n                                                    <vl-popover-action icon="bin">Verwijderen</vl-popover-action>\n                                                </vl-popover-action-list>\n                                            </vl-popover>\n                                        </span>\n                                        <span\n                                            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n                                            non proident, sunt in culpa qui officia deserunt mollit anim id est\n                                            laborum.</span\n                                        >\n                                    </vl-accordion>\n                                </div>\n                                <div>\n                                    <vl-accordion\n                                        data-vl-toggle-text="Alle werken"\n                                        data-vl-custom-css=${subAccordionCss}\n                                    >\n                                        <span slot="menu">\n                                            <a is="vl-link" id="btn-acties10">\n                                                <span is="vl-icon" data-vl-icon="nav-show-more-vertical"></span>\n                                            </a>\n                                            <vl-popover for="btn-acties10" placement="bottom-end" distance="5">\n                                                <vl-popover-action-list>\n                                                    <vl-popover-action icon="search">Zoeken</vl-popover-action>\n                                                    <vl-popover-action icon="edit">Aanpassen</vl-popover-action>\n                                                    <vl-popover-action icon="bin">Verwijderen</vl-popover-action>\n                                                </vl-popover-action-list>\n                                            </vl-popover>\n                                        </span>\n                                        <span\n                                            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n                                            non proident, sunt in culpa qui officia deserunt mollit anim id est\n                                            laborum.</span\n                                        >\n                                    </vl-accordion>\n                                </div>\n                            </div>\n                        </vl-accordion>\n                    </div>\n                </div>\n            </vl-accordion>\n        </div>\n    </div>\n`',...p.parameters?.docs?.source}}};let v=["AccordionPopoverMenu"]},"./apps/storybook/docs/d_applicatief/d_voorbeelden/accordion-popover-menu/accordion-popover-menu.stories-doc.mdx":(o,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>r}),e("./node_modules/react/index.js");var i=e("./node_modules/react/jsx-runtime.js"),a=e("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),t=e("./node_modules/@storybook/addon-docs/dist/index.mjs"),l=e("./node_modules/@storybook/blocks/dist/index.mjs"),c=e("./apps/storybook/docs/d_applicatief/d_voorbeelden/accordion-popover-menu/accordion-popover-menu.stories.ts");function s(o){let n=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li"},(0,a.ah)(),o.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h_,{of:c}),"\n",(0,i.jsx)(n.h1,{id:"accordion-met-popover-menus",children:"Accordion met popover menu's"}),"\n",(0,i.jsx)(n.p,{children:"De accordion is een UI-element dat wordt gebruikt om inhoud te organiseren in een uitklapbaar formaat. Elk\naccordion-item kan een popover bevatten dat extra opties biedt voor dat specifieke item."}),"\n",(0,i.jsx)(n.h2,{id:"gebruik",children:"Gebruik"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"De accordion met popover menu's wordt gebruikt om inhoud te structureren en gebruikers de mogelijkheid te geven om\nspecifieke acties uit te voeren op individuele items."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"ontwerp",children:"Ontwerp"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Accordion-item: Elk item bestaat uit een titel en een inhoudsgebied dat kan worden uitgeklapt of ingeklapt."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Popover menu: Elk accordion-item kan een popover menu bevatten dat extra opties biedt voor dat specifieke item. Het\npopover menu wordt meestal weergegeven als drie verticale punten (•••)."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Interactie: Gebruikers kunnen op de titel van een accordion-item klikken of tikken om het item uit te klappen of in\nte klappen. Door op het popover menu te klikken of tikken, wordt een keuzemenu geopend met extra opties voor dat\nspecifieke item."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,i.jsx)(l.Xz,{of:c.AccordionPopoverMenu})]})}let r=function(o={}){let{wrapper:n}=Object.assign({},(0,a.ah)(),o.components);return n?(0,i.jsx)(n,Object.assign({},o,{children:(0,i.jsx)(s,o)})):s(o)}},"./node_modules/memoizerific sync recursive":o=>{function n(o){var n=Error("Cannot find module '"+o+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=()=>[],n.resolve=n,n.id="./node_modules/memoizerific sync recursive",o.exports=n}}]);