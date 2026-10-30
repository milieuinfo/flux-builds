import{bL as s,i as y,r as N,f as w,c0 as k,bK as u,B as C,cT as E,cU as T,bp as $,bn as M,bE as S,b as v,bA as m,bt as c,G as P,I as b,w as I}from"./iframe-ylVHDfb1.js";import{D as p,a as f}from"./vl-dashboard-header.component-B0zuaYxQ.js";const O=(e,a,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof a!="object"&&Object.defineProperty(e,a,t),t);function _(e,a){return(t,i,o)=>{const h=d=>d.renderRoot?.querySelector(e)??null;return O(t,i,{get(){return h(this)}})}}const B=y`
    /* de horizontale padding van de inhoud: de vl-dashboard-header en de mobiele balk gebruiken ze, en de afnemer
       hergebruikt ze voor de inhoud van zijn pagina, zodat alles op dezelfde lijn begint */
    :host {
        --vl-dashboard-content-inline-padding: var(--vl-spacing--medium);

        @media screen and (max-width: ${s}px) {
            --vl-dashboard-content-inline-padding: var(--vl-spacing--normal);
        }
    }

    .vl-dashboard {
        display: flex;
        flex-direction: row;
        height: calc(100dvh - var(--vl-dashboard-header-height, 43px) - var(--vl-dashboard-footer-height, 128px));
    }
    @media screen and (max-width: ${s}px) {
        .vl-dashboard {
            display: block;
            height: 100%;
        }
    }

    .vl-dashboard__navigation-header {
        box-sizing: border-box;
        min-height: 8.8rem;
        padding: var(--vl-spacing--normal);
        border-bottom: 1px solid var(--vl-color--border-default);
        display: flex;
        align-items: center;
        gap: var(--vl-spacing--xsmall);
    }

    /* Navigation Panel */
    .vl-dashboard__navigation {
        flex: 0 1 var(--vl-dashboard-navigation-width, 300px);
        background-color: var(--vl-color--background-subtle);
        border-right: 1px solid var(--vl-color--border-default);
        display: grid;
        grid-template-areas:
            'navigation-header'
            'navigation'
            'navigation-utils'
            'navigation-footer';
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr auto auto;

        .vl-dashboard__navigation-main {
            grid-area: navigation;
            /* een vl-nav-link draagt zelf --vl-spacing--xxsmall boven en onder zich, voor zijn actieve achtergrond */
            padding-block: calc(var(--vl-spacing--normal) - var(--vl-spacing--xxsmall));
            overflow-y: auto;
            max-height: 100%;
        }
        .vl-dashboard__navigation-main div[role='list'] {
            display: flex;
            flex-direction: column;
        }

        @media screen and (max-width: ${s}px) {
            display: none;
        }

        /* blijft in de flow, zodat de navigatie geen inhoud na het dashboard bedekt (WCAG 2.4.11) */
        &.vl-dashboard__navigation--mobile {
            @media screen and (max-width: ${s}px) {
                display: flex;
                flex-direction: column;
                min-height: calc(100dvh - var(--vl-dashboard-header-height, 43px));

                + .vl-dashboard__content {
                    display: none;
                }
            }
        }

        &.vl-dashboard__navigation--collapsed {
            @media screen and (min-width: ${s+1}px) {
                flex-basis: 4.1rem;
                overflow: hidden;

                .vl-dashboard__navigation-footer,
                .vl-dashboard__navigation-utils {
                    vl-button::part(button),
                    vl-button::part(link) {
                        font-size: 0;
                        width: 100%;
                        padding-inline: 0;
                        justify-content: center !important;
                    }
                    vl-button::part(icon) {
                        font-size: var(--vl-font-size);
                    }
                }
                .vl-dashboard__navigation-main,
                .vl-dashboard__navigation-utils {
                    text-align: center;
                }
                .vl-dashboard__navigation-header {
                    justify-content: center;
                    padding-inline: 0;
                }
                .vl-dashboard__navigation-header-user > .vl-dashboard__user-name {
                    display: none;
                }
                .vl-dashboard__navigation-header-user > .vl-dashboard__user-badge {
                    width: 2.4rem;
                    height: 2.4rem;
                    font-size: 0.6em;
                }
                #toggle-navigation-button {
                    display: block;
                    transform: rotate(180deg);
                }
            }
        }
    }
    .vl-dashboard__navigation-header {
        grid-area: navigation-header;
        font-size: var(--vl-font-size--large);
        font-weight: 500;
        justify-content: space-between;
    }
    .vl-dashboard__navigation-header-user {
        display: flex;
        align-items: center;
        gap: var(--vl-spacing--xsmall);
    }
    .vl-dashboard__navigation-utils {
        grid-area: navigation-utils;
        border-top: 1px solid var(--vl-color--border-default);
        background-color: var(--vl-color--background-default);
        overflow-x: hidden;

        vl-button::part(button) {
            justify-content: flex-start;
        }

        @media screen and (max-width: ${s}px) {
            overflow-x: unset;
        }
    }
    .vl-dashboard__navigation-utils div[role='list'] {
        display: flex;
        flex-direction: column;
    }
    .vl-dashboard__navigation-footer {
        grid-area: navigation-footer;
        padding: var(--vl-spacing--xxsmall);
        border-top: 1px solid var(--vl-color--border-default);

        @media screen and (max-width: ${s}px) {
            display: none;
        }
    }
    .vl-dashboard__navigation-close-mobile {
        display: none;

        @media screen and (max-width: ${s}px) {
            display: block;
        }
    }

    /* de mobiele balk met de knop om de navigatie te openen, enkel op een smal scherm */
    .vl-dashboard__mobile-bar {
        display: none;

        @media screen and (max-width: ${s}px) {
            box-sizing: border-box;
            display: flex;
            align-items: center;
            position: sticky;
            top: var(--vl-dashboard-header-height, 43px);
            z-index: 2;
            height: var(--vl-dashboard-mobile-bar-height);
            padding-inline: var(--vl-dashboard-content-inline-padding);
            border-bottom: 1px solid var(--vl-color--border-default);
            background-color: var(--vl-color--background-default);
        }
    }

    .vl-dashboard__navigation-open-mobile {
        position: relative;
    }
    .vl-dashboard__mobile-nav-badge {
        position: absolute;
        top: var(--vl-spacing--xxsmall);
        right: var(--vl-spacing--xxsmall);
        width: 0.9rem;
        height: 0.9rem;
        border-radius: 50%;
        background-color: var(--vl-color--background-error);
        border: 1px solid var(--vl-color--background-default);
        pointer-events: none;
    }

    .vl-dashboard__navigation-close-mobile {
        margin-left: auto;
        margin-block: var(--vl-spacing--normal);
        margin-right: var(--vl-spacing--normal);

        @media screen and (max-width: ${s}px) {
            & + .vl-dashboard__navigation-main {
                border-top: 1px solid var(--vl-color--border-default);
            }
        }
    }

    .vl-dashboard__navigation-header {
        .vl-dashboard__navigation-close-mobile {
            margin: 0;
        }
    }

    /* Content Panel */
    .vl-dashboard__content {
        /* intern, geen publieke API */
        --vl-dashboard-mobile-bar-height: 5.6rem;

        flex: 1;
        height: 100%;
        display: flex;
        flex-direction: column;
        min-width: 0; /* allow flex children to shrink */
        position: relative;
    }
    /* op desktop scrolt de inhoud hier; een vl-dashboard-header blijft er bovenaan staan (sticky, top 0) */
    .vl-dashboard__content-area {
        flex: 1;
        min-height: 0; /* allow flex children to shrink */
        overflow-x: hidden;
        overflow-y: auto;

        /* op mobiel scrolt de pagina: geen scrollcontainer, en de vl-dashboard-header blijft onder de mobiele balk */
        @media screen and (max-width: ${s}px) {
            overflow-x: clip;
            overflow-y: visible;
            /* intern, geen publieke API: gelezen door vl-dashboard-header */
            --vl-dashboard-header-sticky-top: calc(
                var(--vl-dashboard-header-height, 43px) + var(--vl-dashboard-mobile-bar-height)
            );
        }
    }

    .vl-dashboard__user-name {
        text-wrap: pretty;
        line-height: 1.1;
    }

    [hidden] {
        display: none !important;
    }
`,g={userName:void 0,userImg:void 0,userIcon:void 0,notCollapsible:!1,collapsed:!1};var A=Object.defineProperty,z=Object.getOwnPropertyDescriptor,r=(e,a,t,i)=>{for(var o=i>1?void 0:i?z(a,t):a,h=e.length-1,d;h>=0;h--)(d=e[h])&&(o=(i?d(a,t,o):d(o))||o);return i&&o&&A(a,t,o),o};N([w,k]);const x="vl-dashboard-navigation-collapsed",L="a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]",R=()=>{try{return globalThis.localStorage.getItem(x)==="true"}catch{return!1}},H=e=>{try{globalThis.localStorage.setItem(x,e?"true":"false")}catch{}},U=1e4;let l=class extends C{constructor(){super(...arguments),this.userName=g.userName,this.userImg=g.userImg,this.userIcon=g.userIcon,this.notCollapsible=g.notCollapsible,this.collapsed=g.collapsed,this.mobileNavigationOpen=!1,this.hasNavUtils=!1,this.navHasBadge=!1,this.badgeObserver=void 0,this.mobileMediaQuery=void 0,this.pendingNavigation=void 0,this.pendingNavigationTimeout=void 0,this.onMobileMediaQueryChange=e=>{e.matches||(this.mobileNavigationOpen=!1)},this.onNavigationKeydown=e=>{if(!this.mobileNavigationOpen)return;if(e.key==="Escape"){this.onCloseMobileNavigation();return}if(e.key!=="Tab")return;const a=this.getNavigationTabbables();if(a.length===0)return;const t=a[0],i=a[a.length-1],o=e.composedPath()[0];e.shiftKey&&o===t?(e.preventDefault(),i.focus()):!e.shiftKey&&o===i&&(e.preventDefault(),t.focus())},this.recomputeNavBadge=()=>{this.navHasBadge=!!this.querySelector('[slot="nav-main"] [slot="link-badge"], [slot="nav-utils"] [slot="link-badge"]')},this.onNavUtilsSlotChange=e=>{const a=e.currentTarget;this.hasNavUtils=a.assignedElements().length>0},this.onOpenMobileNavigation=async()=>{this.mobileNavigationOpen=!0,await this.updateComplete,this.closeMobileNavigationButton?.shadowRoot?.querySelector("button")?.focus()},this.onCloseMobileNavigation=async()=>{this.mobileNavigationOpen=!1,await this.updateComplete,this.openMobileNavigationButton?.shadowRoot?.querySelector("button")?.focus()},this.onToggleNavigation=()=>{this.setCollapsed(!this.collapsed),H(this.collapsed)},this.onHeaderUpdate=async e=>{const a=this.pendingNavigation;if(!a)return;this.setPendingNavigation(void 0);const t=e.composedPath()[0];await this.updateComplete;const i=t.shadowRoot?.getElementById(p);if(await i?.updateComplete,i&&this.isFocusUntouchedSince(a)){const o=E(i)??i;o.tabIndex<0&&(o.tabIndex=-1),o.focus()}},this.onSkipToContentClick=async e=>{e.preventDefault(),this.mobileNavigationOpen=!1,await this.updateComplete,T(p)||this.focusMain()},this.clearPendingNavigation=()=>{this.setPendingNavigation(void 0)},this.onNavigationClick=e=>{this.setPendingNavigation(void 0);const a=e.composedPath();if(a.some(n=>n instanceof Element&&(n.slot==="link-action"||n.matches("vl-nav-link[disabled]"))))return;const i=a.find(n=>(n instanceof HTMLAnchorElement||n instanceof Element&&n.localName==="vl-nav-link")&&n.hasAttribute("href"));if(!i||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey||e.button!==0||a.some(n=>n instanceof Element&&n.matches('vl-nav-link[external], a[target="_blank"]')))return;if(a.some(n=>n instanceof Element&&n.matches('vl-nav-link[active], a[aria-current="page"]'))){this.mobileNavigationOpen&&this.moveFocusToMain();return}const d={link:i};this.setPendingNavigation(d),this.mobileNavigationOpen&&this.moveFocusToMain(d)}}static get styles(){return[$,M,S,B]}connectedCallback(){super.connectedCallback(),this.addEventListener(f,this.onHeaderUpdate),this.badgeObserver=new MutationObserver(this.recomputeNavBadge),this.badgeObserver.observe(this,{childList:!0,subtree:!0}),this.mobileMediaQuery=globalThis.matchMedia(`(max-width: ${s}px)`),this.mobileMediaQuery.addEventListener("change",this.onMobileMediaQueryChange)}firstUpdated(){this.recomputeNavBadge(),!this.notCollapsible&&!this.collapsed&&R()&&this.setCollapsed(!0)}willUpdate(e){this.notCollapsible&&this.collapsed&&(this.collapsed=!1,this.hasUpdated&&e.has("notCollapsible")&&this.dispatchToggleNavigation(!1))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(f,this.onHeaderUpdate),this.setPendingNavigation(void 0),this.badgeObserver?.disconnect(),this.badgeObserver=void 0,this.mobileMediaQuery?.removeEventListener("change",this.onMobileMediaQueryChange),this.mobileMediaQuery=void 0}getNavigationTabbables(){const e=[],a=i=>{i instanceof HTMLElement&&i.matches(L)&&i.tabIndex>=0&&i.getClientRects().length>0&&e.push(i),i.shadowRoot?[...i.shadowRoot.children].forEach(a):i instanceof HTMLSlotElement?i.assignedElements({flatten:!0}).forEach(a):[...i.children].forEach(a)},t=this.shadowRoot?.querySelector("#navigation");return t&&[...t.children].forEach(a),e}setCollapsed(e){this.collapsed=e,this.dispatchToggleNavigation(e)}dispatchToggleNavigation(e){this.dispatchEvent(new CustomEvent("vl-toggle-navigation",{detail:{collapsed:e},composed:!0,bubbles:!0}))}focusMain(){const e=this.shadowRoot?.querySelector("#main-content");e?.focus(),e?.scrollIntoView({behavior:"instant"})}async moveFocusToMain(e){this.mobileNavigationOpen=!1,await this.updateComplete,(!e||this.pendingNavigation===e)&&this.focusMain()}get deepActiveElement(){let e=document.activeElement;for(;e?.shadowRoot?.activeElement;)e=e.shadowRoot.activeElement;return e}isFocusUntouchedSince(e){const a=this.deepActiveElement;return!a||a===document.body||a===e.link||a===this.shadowRoot?.querySelector("#main-content")}setPendingNavigation(e){this.pendingNavigation=e,clearTimeout(this.pendingNavigationTimeout),this.pendingNavigationTimeout=void 0,e?(this.pendingNavigationTimeout=setTimeout(this.clearPendingNavigation,U),document.addEventListener("pointerdown",this.clearPendingNavigation,!0),document.addEventListener("keydown",this.clearPendingNavigation,!0)):(document.removeEventListener("pointerdown",this.clearPendingNavigation,!0),document.removeEventListener("keydown",this.clearPendingNavigation,!0))}renderMobileCloseButton(){return v`
            <div class="vl-dashboard__navigation-close-mobile">
                <vl-button
                    id="close-mobile-navigation-button"
                    icon="close"
                    ghost
                    label="Navigatie sluiten"
                    @vl-click=${this.onCloseMobileNavigation}
                ></vl-button>
            </div>
        `}renderUserBadge(){return v`
            <vl-badge
                class="vl-dashboard__user-badge"
                background="default"
                img=${m(this.userImg)}
                icon=${m(this.userIcon)}
                alt=""
            ></vl-badge>
        `}renderNavigationHeader(){return v`
            <div class="vl-dashboard__navigation-header">
                <div class="vl-dashboard__navigation-header-user">
                    ${c(this.userImg||this.userIcon,()=>this.renderUserBadge())}
                    ${c(this.userName,()=>v`<span class="vl-dashboard__user-name">${this.userName}</span>`)}
                </div>
                ${this.renderMobileCloseButton()}
            </div>
        `}render(){const e={"vl-dashboard__navigation":!0,"vl-dashboard__navigation--collapsed":this.collapsed,"vl-dashboard__navigation--mobile":this.mobileNavigationOpen};return v`
            <div class="vl-dashboard">
                <slot name="header"></slot>
                <aside
                    class=${P(e)}
                    id="navigation"
                    aria-label="Zijpaneel met navigatie"
                    @keydown=${this.onNavigationKeydown}
                >
                    <a href=${`#${p}`} class="vl-skip-link" @click=${this.onSkipToContentClick}
                        >Ga meteen naar de inhoud</a
                    >
                    ${c(this.userName||this.userIcon||this.userImg,()=>this.renderNavigationHeader(),()=>this.renderMobileCloseButton())}
                    <nav
                        class="vl-dashboard__navigation-main"
                        aria-label="Hoofdnavigatie"
                        tabindex="0"
                        @click=${this.onNavigationClick}
                    >
                        <div role="list">
                            <slot name="nav-main"></slot>
                        </div>
                    </nav>
                    <nav
                        ?hidden=${!this.hasNavUtils}
                        class="vl-dashboard__navigation-utils"
                        aria-label="Hulpnavigatie"
                        tabindex="-1"
                        @click=${this.onNavigationClick}
                    >
                        <div role="list">
                            <slot name="nav-utils" @slotchange=${this.onNavUtilsSlotChange}></slot>
                        </div>
                    </nav>
                    ${c(!this.notCollapsible,()=>v`
                            <div class="vl-dashboard__navigation-footer">
                                <vl-button
                                    id="toggle-navigation-button"
                                    icon="nav-left-double"
                                    ghost
                                    aria-expanded=${this.collapsed?"false":"true"}
                                    label=${this.collapsed?"Paneel uitklappen":"Paneel inklappen"}
                                    @vl-click=${this.onToggleNavigation}
                                ></vl-button>
                            </div>
                        `)}
                </aside>
                <main class="vl-dashboard__content" tabindex="-1" id="main-content">
                    <div class="vl-dashboard__mobile-bar">
                        <div class="vl-dashboard__navigation-open-mobile">
                            <vl-button
                                id="open-mobile-navigation-button"
                                icon="drawer"
                                tertiary
                                label=${this.navHasBadge?"Navigatie openen, er zijn meldingen":"Navigatie openen"}
                                @vl-click=${this.onOpenMobileNavigation}
                            ></vl-button>
                            ${c(this.navHasBadge,()=>v`<span class="vl-dashboard__mobile-nav-badge" aria-hidden="true"></span>`)}
                        </div>
                    </div>
                    <div
                        class="vl-dashboard__content-area"
                        tabindex="0"
                        id="page-content"
                        role="region"
                        aria-label="Pagina inhoud"
                    >
                        <slot name="content"></slot>
                    </div>
                </main>
                <slot name="footer"></slot>
            </div>
        `}};r([b({type:String,attribute:"user-name"})],l.prototype,"userName",2);r([b({type:String,attribute:"user-img"})],l.prototype,"userImg",2);r([b({type:String,attribute:"user-icon"})],l.prototype,"userIcon",2);r([b({type:Boolean,attribute:"not-collapsible",reflect:!0})],l.prototype,"notCollapsible",2);r([b({type:Boolean,attribute:"collapsed",reflect:!0})],l.prototype,"collapsed",2);r([u()],l.prototype,"mobileNavigationOpen",2);r([u()],l.prototype,"hasNavUtils",2);r([u()],l.prototype,"navHasBadge",2);r([_("#open-mobile-navigation-button")],l.prototype,"openMobileNavigationButton",2);r([_("#close-mobile-navigation-button")],l.prototype,"closeMobileNavigationButton",2);l=r([I("vl-dashboard")],l);export{l as V,g as d};
