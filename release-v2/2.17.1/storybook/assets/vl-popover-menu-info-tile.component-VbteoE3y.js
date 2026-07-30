import{r as c,bA as p,d as v,aR as s,x as d,w as u,bB as x,i as h,v as f,bC as w}from"./iframe-DynOw9qF.js";var _=Object.getOwnPropertyDescriptor,q=(i,n,r,a)=>{for(var o=a>1?void 0:a?_(n,r):n,e=i.length-1,l;e>=0;e--)(l=i[e])&&(o=l(o)||o);return o};let m=class extends s{render(){return d`
            <div>
                <vl-button ghost icon="nav-show-more-vertical" id="btn-acties" label="Acties"></vl-button>
                <vl-popover for="btn-acties" placement="bottom-end" trigger="click" hide-on-click>
                    <vl-popover-action-list>
                        <vl-popover-action icon="search">Zoeken</vl-popover-action>
                        <vl-popover-action icon="edit">Aanpassen</vl-popover-action>
                        <vl-popover-action icon="bin">Verwijderen</vl-popover-action>
                    </vl-popover-action-list>
                </vl-popover>
            </div>
        `}createRenderRoot(){return this}};c([p,v]);m=q([u("vl-popover-menu")],m);var k=Object.getOwnPropertyDescriptor,A=(i,n,r,a)=>{for(var o=a>1?void 0:a?k(n,r):n,e=i.length-1,l;e>=0;e--)(l=i[e])&&(o=l(o)||o);return o};const j=`
    .vl-accordion {background-color: white border-radius: 4px;}
    .vl-accordion__content {background-color: rgb(248,249,252); padding: 0 15px; border-radius: 4px}
    .vl-accordion__button-container {padding: 15px 15px 0 15px;}
    .vl-accordion__subtitle {padding: 0 15px 0 15px;}
`,t=`
    .vl-accordion {background-color: white; border-radius: 4px;}
    .js-vl-accordion--open {background-color: rgb(248,249,252);}
    .vl-accordion__button-container {padding: 15px;}
    .js-vl-accordion--open > .vl-accordion__button-container {padding: 15px 15px 0 15px}
    .vl-accordion__subtitle {margin: 0;}
`;let b=class extends s{static get styles(){const i=h`
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
        `;return[f,i]}render(){return d`
            <div class="panel">
                <vl-accordion toggle-text="Stedelijk woongebied" custom-css=${j} heading-level="2">
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
                            <vl-accordion toggle-text="Item $1.1" custom-css=${t} heading-level="3">
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
                                        <vl-accordion
                                            toggle-text="Alle werken (1.1.1)"
                                            custom-css=${t}
                                            heading-level="4"
                                        >
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
                                        <vl-accordion
                                            toggle-text="Alle werken (1.1.2)"
                                            custom-css=${t}
                                            heading-level="4"
                                        >
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
                            <vl-accordion toggle-text="Item $1.2" custom-css=${t} heading-level="3">
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
                                        <vl-accordion
                                            toggle-text="Alle werken (1.2.1)"
                                            custom-css=${t}
                                            heading-level="4"
                                        >
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
                                        <vl-accordion
                                            toggle-text="Alle werken (1.2.2)"
                                            custom-css=${t}
                                            heading-level="4"
                                        >
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
                            <vl-accordion toggle-text="Item $1.3" custom-css=${t} heading-level="3">
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
                                        <vl-accordion
                                            toggle-text="Alle werken (1.3.1)"
                                            custom-css=${t}
                                            heading-level="4"
                                        >
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
                                        <vl-accordion
                                            toggle-text="Alle werken (1.3.2)"
                                            custom-css=${t}
                                            heading-level="4"
                                        >
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
        `}createRenderRoot(){return this}};c([x,p,v]);b=A([u("vl-popover-menu-accordion")],b);var V=Object.getOwnPropertyDescriptor,$=(i,n,r,a)=>{for(var o=a>1?void 0:a?V(n,r):n,e=i.length-1,l;e>=0;e--)(l=i[e])&&(o=l(o)||o);return o};let g=class extends s{static get styles(){return[f,h``]}render(){return d`
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
        `}createRenderRoot(){return this}};c([w,p,v]);g=$([u("vl-popover-menu-info-tile")],g);export{m as V,b as a,g as b};
