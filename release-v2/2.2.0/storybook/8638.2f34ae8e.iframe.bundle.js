"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[8638],{"../../libs/integrations/src/popover/index.ts":(o,e,t)=>{t.d(e,{G1:()=>v,aX:()=>r,yf:()=>d});var i=t("../../libs/common/src/index.ts"),n=t("../../libs/components/src/atom/index.ts"),a=t("../../libs/components/src/block/index.ts"),l=t("../../node_modules/lit/index.js");class r extends l.WF{static{(0,i.gy)([a.nW,n.Yk])}render(){return(0,l.qy)`
            <div>
                <vl-button ghost icon="nav-show-more-vertical" id="btn-acties" label="Acties"></vl-button>
                <vl-popover for="btn-acties" placement="bottom-end">
                    <vl-popover-action-list>
                        <vl-popover-action icon="search">Zoeken</vl-popover-action>
                        <vl-popover-action icon="edit">Aanpassen</vl-popover-action>
                        <vl-popover-action icon="bin">Verwijderen</vl-popover-action>
                    </vl-popover-action-list>
                </vl-popover>
            </div>
        `}createRenderRoot(){return this}}r=function(o,e,t,i){var n,a=arguments.length,l=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(o,e,t,i);else for(var r=o.length-1;r>=0;r--)(n=o[r])&&(l=(a<3?n(l):a>3?n(e,t,l):n(e,t))||l);return a>3&&l&&Object.defineProperty(e,t,l),l}([(0,i.M1)("vl-popover-menu")],r);var c=t("../../libs/styles/src/index.ts");let p=`
    .vl-accordion {background-color: white border-radius: 4px;}
    .vl-accordion__content {background-color: rgb(248,249,252); padding: 0 15px; border-radius: 4px}
    .vl-accordion__button-container {padding: 15px 15px 0 15px;}
    .vl-accordion__subtitle {padding: 0 15px 0 15px;}
`,s=`
    .vl-accordion {background-color: white; border-radius: 4px;}
    .js-vl-accordion--open {background-color: rgb(248,249,252);}
    .vl-accordion__button-container {padding: 15px;}
    .js-vl-accordion--open > .vl-accordion__button-container {padding: 15px 15px 0 15px}
    .vl-accordion__subtitle {margin: 0;}
`;class v extends l.WF{static{(0,i.gy)([a.iT,a.nW,n.Yk])}static get styles(){return[c.oi,(0,l.AH)``]}render(){return(0,l.qy)`
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
                <vl-accordion toggle-text="Stedelijk woongebied" custom-css=${p}>
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
                    <vl-text slot="subtitle" annotation>Lorem ipsum</vl-text>
                    <span slot="menu">
                        <vl-button id="btn-acties1" icon="nav-show-more-vertical" ghost></vl-button>
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
                            <vl-accordion toggle-text="$1.1" custom-css=${s}>
                                <span slot="menu">
                                    <vl-button id="btn-acties2" icon="nav-show-more-vertical" ghost></vl-button>
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
                                        <vl-accordion toggle-text="Alle werken" custom-css=${s}>
                                            <span slot="menu">
                                                <vl-button
                                                    id="btn-acties3"
                                                    icon="nav-show-more-vertical"
                                                    ghost
                                                ></vl-button>
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
                                        <vl-accordion toggle-text="Alle werken" custom-css=${s}>
                                            <span slot="menu">
                                                <vl-button
                                                    id="btn-acties4"
                                                    icon="nav-show-more-vertical"
                                                    ghost
                                                ></vl-button>
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
                            <vl-accordion toggle-text="$1.2" custom-css=${s}>
                                <span slot="menu">
                                    <vl-button id="btn-acties5" icon="nav-show-more-vertical" ghost></vl-button>
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
                                        <vl-accordion toggle-text="Alle werken" custom-css=${s}>
                                            <span slot="menu">
                                                <vl-button
                                                    id="btn-acties6"
                                                    icon="nav-show-more-vertical"
                                                    ghost
                                                ></vl-button>
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
                                        <vl-accordion toggle-text="Alle werken" custom-css=${s}>
                                            <span slot="menu">
                                                <vl-button
                                                    id="btn-acties7"
                                                    icon="nav-show-more-vertical"
                                                    ghost
                                                ></vl-button>
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
                            <vl-accordion toggle-text="$1.3" custom-css=${s}>
                                <span slot="menu">
                                    <vl-button id="btn-acties8" icon="nav-show-more-vertical" ghost></vl-button>
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
                                        <vl-accordion toggle-text="Alle werken" custom-css=${s}>
                                            <span slot="menu">
                                                <vl-button
                                                    id="btn-acties9"
                                                    icon="nav-show-more-vertical"
                                                    ghost
                                                ></vl-button>
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
                                        <vl-accordion toggle-text="Alle werken" custom-css=${s}>
                                            <span slot="menu">
                                                <vl-button
                                                    id="btn-acties10"
                                                    icon="nav-show-more-vertical"
                                                    ghost
                                                ></vl-button>
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
        `}createRenderRoot(){return this}}v=function(o,e,t,i){var n,a=arguments.length,l=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(o,e,t,i);else for(var r=o.length-1;r>=0;r--)(n=o[r])&&(l=(a<3?n(l):a>3?n(e,t,l):n(e,t))||l);return a>3&&l&&Object.defineProperty(e,t,l),l}([(0,i.M1)("vl-popover-menu-accordion")],v);class d extends l.WF{static{(0,i.gy)([a.LK,a.nW,n.Yk])}static get styles(){return[c.oi,(0,l.AH)``]}render(){return(0,l.qy)`
            <vl-info-tile toggleable>
                <span slot="title">Broos Deprez</span>
                <span slot="subtitle">Uw zoon (19.05.2005)</span>
                <div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>
                <span slot="menu">
                    <vl-button ghost icon="nav-show-more-vertical" id="btn-acties" label="Acties"></vl-button>
                    <vl-popover for="btn-acties" placement="bottom-end">
                        <vl-popover-action-list>
                            <vl-popover-action icon="search">Zoeken</vl-popover-action>
                            <vl-popover-action icon="edit">Aanpassen</vl-popover-action>
                            <vl-popover-action icon="bin">Verwijderen</vl-popover-action>
                        </vl-popover-action-list>
                    </vl-popover>
                </span>
            </vl-info-tile>
        `}createRenderRoot(){return this}}d=function(o,e,t,i){var n,a=arguments.length,l=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(o,e,t,i);else for(var r=o.length-1;r>=0;r--)(n=o[r])&&(l=(a<3?n(l):a>3?n(e,t,l):n(e,t))||l);return a>3&&l&&Object.defineProperty(e,t,l),l}([(0,i.M1)("vl-popover-menu-info-tile")],d)}}]);