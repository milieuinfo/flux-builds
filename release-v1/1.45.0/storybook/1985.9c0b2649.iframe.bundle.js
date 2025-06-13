"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[1985],{"../../libs/components/src/next/tabs/vl-tabs.component.ts":(t,e,a)=>{a.d(e,{q:()=>w});var s=a("../../libs/common/utilities/src/index.ts");a("../../node_modules/@govflanders/vl-ui-util/dist/js/util.js");var i=a("../../node_modules/@govflanders/vl-ui-util/src/js/breakpoint.js"),l="vl-tab--active",o="vl-tab",n="tabs-toggle",r="show",b=new i.A;b.dress();class d{constructor(){this.currentTabIndexForCurrentTabsContainer=-1}resetTabIndexesForTabs(t){vl.util.each(t,t=>{t.setAttribute("tabindex","-1"),t.setAttribute("aria-selected","false"),"function"==typeof t.closest&&vl.util.removeClass(t.closest(".".concat(o)),l)})}resetTabPanes(t){vl.util.each(t,t=>{t.setAttribute("hidden","hidden"),t.setAttribute("".concat(r),"false")})}showTabPaneForTab(t,e){t.setAttribute("tabindex","0"),"function"==typeof t.closest&&vl.util.addClass(t.closest(".".concat(o)),l),t.setAttribute("aria-selected",!0),null==e||e.setAttribute("hidden",""),null==e||e.setAttribute("".concat(r),"true")}updateResponsiveBtnLabelForTabsContainerWithTab(t,e){t.querySelector("[".concat(n,"] span")).innerHTML=e.innerHTML}clickEvent(t){if(t.target&&"function"==typeof t.target.closest){var e=t.target.closest("[".concat("tabs","]")),a=e.querySelector("[".concat(n,"]")),s=e.querySelector("".concat("[tabs-list]")),i="true"===s.getAttribute(r);s.setAttribute(r,i?"false":"true"),s.setAttribute("aria-hidden",i?"true":"false"),a.setAttribute("aria-expanded",i?"true":"false"),a.setAttribute("close",i?"false":"true")}}setupResponsiveToggleBtnForTabsContainer(t){var e=t.shadowRoot,a=null==e?void 0:e.querySelector("[".concat(n,"]")),s=t.getAttribute("display-style"),i=b._getBreakpoint();a&&("xsmall"===i||"small"===i||"collapsed"===s)&&a.addEventListener("click",this.clickEvent,{signal:t.disconnectedSignal})}dress(t){var e=t.shadowRoot,a=e.querySelectorAll("".concat("[tab]")),s=e.querySelectorAll("".concat("[tab-pane]")),i=window.location.hash,l=e.querySelector("[href$='".concat(i,"']"));vl.util.each(a,(t,i)=>{t.addEventListener("focus",()=>{this.currentTabIndexForCurrentTabsContainer=i,t.click()}),t.addEventListener("click",()=>{this.resetTabIndexesForTabs(a),this.resetTabPanes(s),this.showTabPaneForTab(t,s[i]),this.updateResponsiveBtnLabelForTabsContainerWithTab(e,t),e.querySelector("[".concat(n,"]")).click()})}),l&&l.click(),e.addEventListener("keydown",t=>{switch(t.keyCode){case 37:var e=this.currentTabIndexForCurrentTabsContainer-1;e<0&&(e=a.length-1);var s=a[e];s&&s.focus();break;case 39:var i=this.currentTabIndexForCurrentTabsContainer+1;i>=a.length&&(i=0);var l=a[i];l&&l.focus()}});var o=t.getAttribute("display-style");this.setupResponsiveToggleBtnForTabsContainer(t),("tabs"!==o||"collapsed"!==o)&&window.addEventListener("resize",vl.util.debounce(()=>{var a=b._getBreakpoint();e.querySelector("[".concat(n,"]")).removeEventListener("click",this.clickEvent,!1),("xsmall"===a||"small"===a)&&this.setupResponsiveToggleBtnForTabsContainer(t)},0),{signal:t.disconnectedSignal})}}"tabsNext"in vl||(vl.tabsNext=new d);var c=a("../../libs/elements/src/index.ts"),h=a("../../node_modules/@domg/govflanders-style/common/index.js"),v=a("../../node_modules/@domg/govflanders-style/component/index.js"),p=a("../../node_modules/lit/index.js");class u extends s.jW{static get is(){return"vl-tab-section-next"}connectedCallback(){super.connectedCallback(),this.processClasses(),this.processAttributes()}createRenderRoot(){return this}processClasses(){this.classList.add("vl-col--1-1"),this.classList.add("vl-tab__pane")}processAttributes(){this.setAttribute("tab-pane",""),this.setAttribute("tabindex","0"),this.setAttribute("role","tabpanel"),this.setAttribute("hidden","hidden"),this.setAttribute("aria-labelledby",`${this.id}-tab`)}}u=function(t,e,a,s){var i,l=arguments.length,o=l<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,a):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,a,s);else for(var n=t.length-1;n>=0;n--)(i=t[n])&&(o=(l<3?i(o):l>3?i(e,a,o):i(e,a))||o);return l>3&&o&&Object.defineProperty(e,a,o),o}([(0,s.M1)("vl-tab-section-next")],u);class f extends s.jW{static get is(){return"vl-tab-next"}static get properties(){return{href:{type:String},disableLink:{type:Boolean,attribute:"disable-link"},withinFunctionalHeader:{type:Boolean,attribute:"within-functional-header"}}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.processClasses(),this.processLinkElement()}updated(t){super.updated(t),t.has("href")&&!this.hasAttribute("disable-link")&&(this.linkElement?.setAttribute("href",this.href),this.linkElement?.setAttribute("aria-controls",`${this.href}-pane`)),t.has("id")&&this.linkElement&&(this.linkElement.id=this.id),t.has("withinFunctionalHeader")&&(this.withinFunctionalHeader?this.linkElement?.classList.add("vl-link"):this.linkElement?.classList.remove("vl-link"))}activate(){this.linkElement?.click()}get isActive(){return this.classList.contains("vl-tab--active")}get linkElement(){return this.querySelector(".vl-tab__link")}get linkElementTemplate(){let t=document.createElement("a");return t.classList.add("vl-tab__link"),t.setAttribute("tab",""),t}processClasses(){this.classList.add("vl-tab")}processLinkElement(){let t=this.linkElementTemplate,e=this.querySelector("slot");e&&t.appendChild(e),t.addEventListener("click",t=>{this.dispatchActiveTabChangedEvent(t)}),this.appendChild(t)}dispatchActiveTabChangedEvent(t){this.isActive||this.dispatchEvent(new CustomEvent("change",{detail:{activeTab:this.id},composed:!0})),t.screenX&&t.screenY&&this.dispatchEvent(new CustomEvent("vl-click",{detail:{activeTab:this.id},composed:!0}))}constructor(...t){super(...t),this.href="",this.disableLink=!1,this.withinFunctionalHeader=!1}}f=function(t,e,a,s){var i,l=arguments.length,o=l<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,a):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,a,s);else for(var n=t.length-1;n>=0;n--)(i=t[n])&&(o=(l<3?i(o):l>3?i(e,a,o):i(e,a))||o);return l>3&&o&&Object.defineProperty(e,a,o),o}([(0,s.M1)("vl-tab-next")],f);class m extends s.jW{static get is(){return"vl-tabs-pane-next"}static get properties(){return{id:{type:String},title:{type:String}}}render(){return(0,p.qy)` <slot></slot>`}connectedCallback(){super.connectedCallback(),this.processTitleSlot()}disconnectedCallback(){this.titleSlotObserver&&this.titleSlotObserver.disconnect()}get paneId(){return this.getAttribute("id")||""}get paneTitle(){return this.getAttribute("title")||""}get titleSlot(){return this.querySelector('[slot="title"]')}processTitleSlot(){this.titleSlot&&(this.moveTabPaneTitleSlot(),this.titleSlotObserver=this.observeTitleSlot(()=>this.moveTabPaneTitleSlot()))}moveTabPaneTitleSlot(){if(this.titleSlot){let t=this.titleSlot.cloneNode(!0);t.setAttribute("slot",`${this.paneId}-title-slot`);let e=this.parentElement?.querySelector(`[slot="${this.paneId}-title-slot"]`);e?this.parentElement?.replaceChild(t,e):this.parentElement?.appendChild(t)}}observeTitleSlot(t){let e=new MutationObserver(e=>t(e));return this.titleSlot&&e.observe(this.titleSlot,{childList:!0,subtree:!0,characterData:!0}),e}titleChangedCallback(t,e){if(this.hasAttribute("observe-title")){let t=this.parentElement?.shadowRoot?.querySelector(`a.vl-tab__link#${this.paneId}`);t&&(t.innerHTML=`<slot name="${this.paneId}-title-slot">${e}</slot>`)}}constructor(...t){super(...t),this.titleSlotObserver=null}}m=function(t,e,a,s){var i,l=arguments.length,o=l<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,a):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,a,s);else for(var n=t.length-1;n>=0;n--)(i=t[n])&&(o=(l<3?i(o):l>3?i(e,a,o):i(e,a))||o);return l>3&&o&&Object.defineProperty(e,a,o),o}([(0,s.M1)("vl-tabs-pane-next")],m);let g=(0,p.AH)`
    :root {
        --vl-theme-primary-color: #ffe615;
        --vl-theme-primary-color-60: #fff073;
        --vl-theme-primary-color-70: #ffee5b;
        --vl-theme-primary-color-rgba-30: rgba(255, 230, 21, 0.3);
        --vl-theme-fg-color: #333332;
        --vl-theme-fg-color-60: #858584;
        --vl-theme-fg-color-70: #707070;
    }

    .vl-vi::before,
    .vl-vi::after {
        font-family: 'vlaanderen-icon' !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-style: normal;
        font-variant: normal;
        font-weight: normal;
        text-decoration: none;
        text-transform: none;
        display: inline-block;
        vertical-align: middle;
    }

    .vl-vi.vl-vi-u-180deg::before {
        display: inline-block;
        transform: rotate(180deg);
        vertical-align: middle;
    }

    .vl-vi-u-xs::before {
        font-size: 0.8rem;
    }

    .vl-vi-u-s::before {
        font-size: 1.3rem;
    }

    .vl-vi-u-m::before {
        font-size: 1.7rem;
    }

    .vl-vi-u-l::before {
        font-size: 2rem;
    }

    .vl-vi-u-xl::before {
        font-size: 2.2rem;
    }

    .vl-vi-u-90deg::before {
        display: inline-block;
        transform: rotate(90deg);
    }

    .vl-vi-u-180deg::before {
        display: inline-block;
        transform: rotate(180deg);
    }

    .vl-tabs {
        margin-bottom: 3rem;
        border-bottom: 1px #cbd2da solid;
        font-size: 0;
        text-align: left;
    }

    .vl-tabs--overflow {
        position: relative;
        white-space: nowrap;
        overflow-x: auto;
        overflow-y: hidden;
        background-repeat: no-repeat;
        overflow: -moz-scrollbars-none;
        -ms-overflow-style: none;
        scrollbar-width: none; /* Firefox */
    }

    .vl-tabs--overflow::-webkit-scrollbar {
        width: 0 !important;
        height: 0 !important;
    }

    .vl-tabs--visible-overflow {
        overflow: visible;
    }

    .vl-tabs__wrapper {
        position: relative;
    }

    .vl-tabs__wrapper--fit-to-content {
        display: inline-flex;
    }

    .vl-tabs__wrapper--overflow::after,
    .vl-tabs__wrapper--overflow::before {
        content: '';
        position: absolute;
        width: 35px;
        height: calc(100% + 1px);
        display: block;
        pointer-events: none;
        top: 0;
        opacity: 0;
        transition: opacity 0.25s;
        z-index: 1;
    }

    .vl-tabs__wrapper--overflow::before {
        left: -1px;
        right: auto;
        background-image: linear-gradient(to left, rgba(255, 255, 255, 0) 0%, white 70%, white 100%);
    }

    .vl-tabs__wrapper--overflow::after {
        right: -1px;
        left: auto;
        background-image: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, white 70%, white 100%);
    }

    .vl-tabs__wrapper--overflow-right::after {
        opacity: 1;
    }

    .vl-tabs__wrapper--overflow-left::before {
        opacity: 1;
    }

    .no-js .vl-tabs {
        display: none;
    }

    @media screen and (max-width: 767px) {
        .vl-tabs:not(.vl-tabs--overflow) {
            display: none;
            position: relative;
            left: -1.5rem;
            width: calc(100% + 3rem);
            margin: 0 0 1rem;
            padding: 0.4rem 0;
            border-top: 1px #f7f9fc solid;
            border-bottom: 1px #f7f9fc solid;
        }

        .vl-tabs:not(.vl-tabs--overflow)[show='true'] {
            display: block;
        }
    }

    .vl-tabs--alt {
        position: relative;
    }

    .vl-tabs--alt::before {
        position: absolute;
        bottom: -1px;
        left: -200%;
        width: 500%;
        height: 1px;
        background: #cbd2da;
        content: '';
    }

    .vl-tab {
        display: inline-block;
        position: relative;
        text-align: left;
        vertical-align: top;
        top: 1px;
        padding: 1rem 0;
        margin: 0 1.3rem;
        transition: all 0.2s;
        border-bottom: 3px solid transparent;
        font-family: 'Flanders Art Sans', sans-serif;
        font-size: 1.6rem;
        font-weight: 500;
        text-decoration: none;
    }

    .vl-tab:first-child .vl-tab__link {
        margin-left: 0;
    }

    .vl-tab:last-child .vl-tab__link {
        margin-right: 0;
    }

    .vl-tab:hover,
    .vl-tab:focus {
        background-color: transparent;
        border-bottom-color: #333332;
    }

    .vl-tab--active {
        color: #333332;
        border-bottom: 3px solid #333332;
        background-color: transparent;
    }

    .vl-tab--active:visited {
        color: #333332;
    }

    @media screen and (max-width: 767px) {
        [tabs] .vl-tabs:not(.vl-tabs--overflow) .vl-tab--active {
            border: 0;
        }
    }
    @media screen and (max-width: 767px) {
        .vl-tab {
            font-size: 1.4rem;
            margin: 0 0.8rem;
        }

        .vl-tabs:not(.vl-tabs--overflow) .vl-tab {
            margin: 0;
        }

        [tabs] .vl-tabs:not(.vl-tabs--overflow) .vl-tab {
            display: block;
            top: 0;
            padding: 0.7rem 1.5rem;
            border: 0;
            font-size: 1.5rem;
        }

        [tabs] .vl-tabs:not(.vl-tabs--overflow) .vl-tab:first-of-type {
            width: calc(100% - 4.2rem);
        }
    }

    .vl-tab__pane {
        display: none;
    }

    .vl-tab__pane[show='true'] {
        display: block;
    }

    .vl-tab__pane[role='tabpanel']:focus {
        box-shadow: 0 0 0 2px #fff, 0 0 0 5px rgba(0, 85, 204, 0.65);
        outline: transparent solid 0.2rem;
    }

    @supports (outline-offset: 2px) {
        .vl-tab__pane[role='tabpanel']:focus {
            box-shadow: none;
            outline: 3px solid rgba(0, 85, 204, 0.65);
            outline-offset: 2px;
        }
    }
    @supports (outline-offset: 2px) {
        .vl-tab__pane[role='tabpanel']:focus {
            box-shadow: none;
            outline: 3px solid rgba(0, 85, 204, 0.65);
            outline-offset: 2px;
        }
    }

    .no-js .vl-tab__pane {
        display: block;
    }

    .vl-tabs__toggle {
        display: none;
        position: relative;
        left: -1.5rem;
        width: calc(100% + 3rem);
        height: 4.2rem;
        margin: 0 auto 1rem;
        padding: 0 0 0 1.5rem;
        border: 0;
        border-top: 1px #cbd2da solid;
        border-bottom: 1px #cbd2da solid;
        background: none;
        font-family: 'Flanders Art Sans', sans-serif;
        font-size: 1.5rem;
        font-weight: 500;
        text-align: left;
        cursor: pointer;
    }

    .vl-tabs__toggle span {
        display: block;
        width: calc(100% - 6rem);
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        color: #05c;
    }

    .vl-tabs__toggle::before,
    .vl-tabs__toggle::after {
        font-family: 'vlaanderen-icon' !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-style: normal;
        font-variant: normal;
        font-weight: normal;
        text-decoration: none;
        text-transform: none;
    }

    .vl-tabs__toggle::before {
        content: '\\f126';
    }

    .vl-tabs__toggle::before {
        position: absolute;
        font-size: 1.4rem;
    }

    .vl-tabs__toggle::before {
        top: 0;
        right: 0;
        padding: 1.2rem 1.4rem;
        transform: rotate(90deg);
        transition: color 0.2s ease-in-out;
        font-size: 1.5rem;
        color: #05c;
    }

    .vl-tabs__toggle:hover,
    .vl-tabs__toggle:focus {
        text-decoration: underline;
        text-decoration-color: #05c;
    }

    .vl-tabs__toggle:hover::before,
    .vl-tabs__toggle:focus::before {
        color: #05c;
    }

    .vl-tabs__toggle:hover::after,
    .vl-tabs__toggle:focus::after {
        color: #05c;
    }

    .vl-tabs__toggle::after {
        position: absolute;
        top: 0;
        right: 4.2rem;
        width: 1px;
        height: 100%;
        background: #cbd2da;
        content: '';
    }

    .vl-tabs__toggle:focus {
        outline: thin dotted;
    }

    .vl-tabs__toggle[close='true'] {
        position: absolute;
        top: 0;
        right: -1.5rem;
        left: auto;
        width: 4.2rem;
        height: 4.2rem;
        border: 0;
        z-index: 2;
    }

    .vl-tabs__toggle[close='true']::after {
        display: none;
    }

    .vl-tabs__toggle[close='true']::before {
        content: '\\f181';
    }

    .vl-tabs__toggle[close='true']::before {
        padding: 1.4rem;
        font-size: 1.3rem;
    }

    .vl-tabs__toggle[close='true'] span {
        display: none;
    }

    @media screen and (max-width: 767px) {
        .vl-tabs__toggle {
            display: block;
        }
    }
`,y=(0,p.AH)`
    .vl-tab__link {
        cursor: pointer;
    }

    .vl-tab__link {
        text-decoration: none;
    }

    .vl-tab.vl-tab--active > .vl-tab__link {
        color: var(--vl-theme-fg-color);
    }

    .vl-tab__pane[role='tabpanel']:focus {
        outline: none;
    }

    /* Functional header styles */

    :host(.vl-tabs--within-functional-header) .vl-tabs {
        margin-bottom: 0;
        border-bottom: none;
    }

    @media screen and (max-width: 767px) {
        :host(.vl-tabs--within-functional-header) .vl-tabs {
            margin-bottom: 0;
            margin-top: 0;
        }
    }

    :host(.vl-tabs--within-functional-header) .vl-tab {
        top: 0;
        margin: 0 2rem 0 0;
        padding: 0;
    }

    :host(.vl-tabs--within-functional-header) .vl-tab__link {
        padding: 1rem 0;
        border: 0;
        text-decoration: none;
    }

    @media screen and (max-width: 767px) {
        :host(.vl-tabs--within-functional-header) .vl-tab__link {
            padding: 0.5rem 0;
        }
    }

    :host(.vl-tabs--within-functional-header) .vl-tabs__toggle {
        border: none;
        margin: 0;

        &:after {
            display: none;
        }
    }

    :host([display-style='tabs']) .vl-tabs:not(.vl-tabs--overflow) {
        display: block;
        position: relative;
        left: unset;
        width: unset;
        margin: 0 0 3rem 0;
        padding: 0;
        border: 0;
        border-bottom: 1px #cbd2da solid;
        line-height: unset;
    }

    :host([display-style='tabs']) [data-vl-tabs] .vl-tabs:not(.vl-tabs--overflow) .vl-tab {
        display: inline-block;
        position: relative;
        margin: 0 1.3rem;
        border-bottom: 3px solid transparent;
    }

    :host([display-style='tabs']) .vl-tabs__toggle {
        display: none;
    }

    :host([display-style='tabs']) [data-vl-tabs] .vl-tabs:not(.vl-tabs--overflow) .vl-tab:first-of-type {
        width: unset;
    }

    :host([display-style='tabs']) [data-vl-tabs] .vl-tabs:not(.vl-tabs--overflow) .vl-tab--active {
        border-bottom: 3px solid;
    }

    :host([display-style='tabs']) [data-vl-tabs] .vl-tabs:not(.vl-tabs--overflow) .vl-tab:hover,
    .vl-tab:focus {
        border-bottom-color: var(--vl-theme-fg-color);
    }

    :host([display-style='collapsed']) .vl-tabs:not(.vl-tabs--overflow) {
        display: none;
        position: relative;
        left: -1.5rem;
        width: calc(100% + 3rem);
        margin: 0 0 1rem;
        padding: 0.4rem 0;
        border-top: 1px #f7f9fc solid;
        border-bottom: 1px #f7f9fc solid;
        line-height: 1.33;
    }

    :host([display-style='collapsed']) .vl-tabs:not(.vl-tabs--overflow)[data-vl-show='true'] {
        display: block;
    }

    :host([display-style='collapsed']) .vl-tabs__toggle {
        display: block;
    }

    :host([display-style='collapsed']) [data-vl-tabs] .vl-tabs:not(.vl-tabs--overflow) .vl-tab:first-of-type {
        width: calc(100% - 4.2rem);
    }

    :host([display-style='collapsed']) [data-vl-tabs] .vl-tabs:not(.vl-tabs--overflow) .vl-tab {
        display: block;
        top: 0;
        padding: 0.7rem 1.5rem;
        border: 0;
        font-size: 1.5rem;
        margin: 0;
    }
`;class w extends s.jW{static{(0,s.gy)([f,u,m])}static get is(){return"vl-tabs-next"}static get properties(){return{alt:{type:Boolean},responsiveLabel:{type:String,attribute:"responsive-label"},activeTab:{type:String,attribute:"active-tab"},href:{type:String},disableLinks:{type:Boolean,attribute:"disable-links"},withinFunctionalHeader:{type:Boolean,attribute:"within-functional-header"},displayStyle:{type:String,attribute:"display-style"}}}connectedCallback(){super.connectedCallback()}disconnectedCallback(){this.observer?.disconnect(),this.abortController.abort("disconnectedCallback")}render(){return(0,p.qy)`
            <style>
                ${h.h8}
                ${g}
                ${y}
                ${v.gu}
                ${h.BI}
                ${c.hF}
            </style>
            <div id="tabs" tabs tabs-responsive-label="Navigatie">
                <div id="tabs-wrapper" class="vl-tabs__wrapper">
                    <ul id="tab-list" class="vl-tabs" tabs-list role="tablist" aria-label="tabs"></ul>
                    <button type="button" tabs-toggle class="vl-tabs__toggle" close="false">
                        <span id="tabs-responsive-label">Navigatie</span>
                    </button>
                </div>
            </div>
        `}firstUpdated(t){super.firstUpdated(t),this.renderTabs(),this.hasAttribute("within-functional-header")||this.renderSections(),this.dress(),this.observer=this.observeTabPanes(t=>this.processTabPane(t))}get dressed(){return this.hasAttribute(w.dressedAttributeName)}static get dressedAttributeName(){return"tabs-dressed"}async dress(t){(!this.dressed||t)&&(await customElements.whenDefined("vl-tab-next"),await customElements.whenDefined("vl-tab-section-next"),vl.tabsNext.dress(this),this.setAttribute(w.dressedAttributeName,""))}async ready(){return(0,s.t7)(()=>this.dressed)}get tabsElement(){return this.shadowRoot?.getElementById("tabs")}get tabListElement(){return this.shadowRoot?.getElementById("tab-list")}get tabsToggleElement(){return this.shadowRoot?.querySelector(".vl-tabs__toggle")}get responsiveLabelElement(){return this.shadowRoot?.getElementById("tabs-responsive-label")}get tabPanes(){return[...this.querySelectorAll(m.is)]}addTab({tabPane:t,index:e}){let a=this.getTabTemplate({id:t.paneId,title:t.paneTitle});e&&e>=0?this.tabListElement?.insertBefore(a,this.tabListElement.children[e]):this.tabListElement?.appendChild(a)}getTabTemplate({id:t,title:e}){let a=document.createElement("vl-tab-next");a.id=`${t}`,a.role="tab",a.setAttribute("href",`${this.hrefWithFallback}#${t}`),this.hasAttribute("within-functional-header")&&a.setAttribute("within-functional-header",""),this.hasAttribute("disable-links")&&a.setAttribute("disable-link","");let s=document.createElement("slot");return s.name=`${t}-title-slot`,s.innerHTML=`${e}`,a.appendChild(s),a}removeTab(t){let e=this.tabListElement?.querySelector(`[id="${t}"]`);e&&this.tabListElement?.removeChild(e)}addTabSection({id:t,index:e}){this.tabPanes[e].setAttribute("slot",`${t}-slot`);let a=this.getTabSectionTemplate({id:t});e&&e>=0?this.tabsElement?.insertBefore(a,this.tabsElement.children[++e]):this.tabsElement?.appendChild(a)}getTabSectionTemplate({id:t}){let e=document.createElement("vl-tab-section-next");e.id=`${t}-pane`;let a=document.createElement("slot");return a.name=`${t}-slot`,e.appendChild(a),e}removeTabSection(t){let e=this.tabsElement?.querySelector(`#${t}-pane`);e&&this.tabsElement?.removeChild(e)}renderTabs(){this.tabListElement&&(this.tabListElement.innerHTML=""),this.tabPanes.forEach(t=>{this.addTab({tabPane:t})})}renderSections(){this.tabPanes.forEach((t,e)=>this.addTabSection({id:t.paneId,index:e}))}updated(t){if(super.updated(t),t.has("alt")&&(this.alt?this.tabListElement.classList.add("vl-tabs--alt"):this.tabListElement.classList.remove("vl-tabs--alt")),t.has("responsiveLabel")){let t=this.responsiveLabel||"Navigatie";this.tabsElement.setAttribute("tabs-responsive-label",t),this.responsiveLabelElement.innerHTML=t}t.has("activeTab")&&this.ready().then(()=>{let t=[...this.tabListElement.children].find(t=>t.id==this.activeTab);t&&!t.isActive&&(t.activate(),this.tabsToggleElement&&"true"===this.tabListElement.getAttribute("show")&&this.tabsToggleElement.click())}),t.has("withinFunctionalHeader")&&(this.withinFunctionalHeader?this.classList.add("vl-tabs--within-functional-header"):this.classList.remove("vl-tabs--within-functional-header")),t.has("href")&&[...this.tabListElement.children].forEach(t=>t.setAttribute("href",`${this.href}#${t.id}`))}get hrefWithFallback(){return this.getAttribute("href")||window.location.pathname+window.location.search}observeTabPanes(t){let e=new MutationObserver(t);return e.observe(this,{childList:!0}),e}processTabPane(t){t.flatMap(t=>[...t.addedNodes]).filter(t=>t instanceof m).forEach(t=>this.addTabAndSection(t)),t.flatMap(t=>[...t.removedNodes]).filter(t=>t instanceof m).forEach(t=>this.removeTabAndSection(t)),this.dress(!0)}addTabAndSection(t){let e=this.tabPanes.indexOf(t);this.addTab({tabPane:t,index:e}),this.hasAttribute("within-functional-header")||this.addTabSection({id:t.getAttribute("id")||"",index:e})}removeTabAndSection(t){this.removeTab(t.paneId),this.hasAttribute("within-functional-header")||this.removeTabSection(t.paneId)}constructor(...t){super(...t),this.abortController=new AbortController,this.alt=!1,this.responsiveLabel="",this.activeTab="",this.href="",this.disableLinks=!1,this.withinFunctionalHeader=!1,this.displayStyle="default"}}w=function(t,e,a,s){var i,l=arguments.length,o=l<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,a):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,a,s);else for(var n=t.length-1;n>=0;n--)(i=t[n])&&(o=(l<3?i(o):l>3?i(e,a,o):i(e,a))||o);return l>3&&o&&Object.defineProperty(e,a,o),o}([(0,s.M1)("vl-tabs-next")],w)}}]);