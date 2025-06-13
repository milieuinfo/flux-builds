"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[8991],{"./libs/components/src/tabs/vl-tabs.component.ts":(t,e,a)=>{a.d(e,{D:()=>k,z:()=>A});var s=a("./libs/common/utilities/src/index.ts");a("./node_modules/@govflanders/vl-ui-util/dist/js/util.js");var i=a("./node_modules/@govflanders/vl-ui-util/src/js/breakpoint.js"),l="".concat(vl.ns,"tab--active"),n="".concat(vl.ns,"tab"),o="[data-".concat(vl.ns,"tabs-list]"),r="[data-".concat(vl.ns,"tab]"),d="[data-".concat(vl.ns,"tab-pane]"),c="data-".concat(vl.ns,"tabs-toggle"),b="data-".concat(vl.ns,"show"),v="data-".concat(vl.ns,"close"),h="data-".concat(vl.ns,"tabs"),u=new i.Z;u.dress();var _=function(){function t(){var t=this;this.setupResponsiveToggle=function(e){var a=e.shadowRoot;vl.util.debounce(function(){var s=u._getBreakpoint();a.querySelector("[".concat(c,"]")).removeEventListener("click",t.clickEvent,!1),("xsmall"===s||"small"===s)&&t.setupResponsiveToggleBtnForTabsContainer(e)},0)},this.currentTabIndexForCurrentTabsContainer=-1}var e=t.prototype;return e.resetTabIndexesForTabs=function(t){vl.util.each(t,function(t){t.setAttribute("tabindex","-1"),t.setAttribute("aria-selected","false"),"function"==typeof t.closest&&vl.util.removeClass(t.closest(".".concat(n)),l)})},e.resetTabPanes=function(t){vl.util.each(t,function(t){t.setAttribute("hidden","hidden"),t.setAttribute("".concat(b),"false")})},e.showTabPaneForTab=function(t,e){t.setAttribute("tabindex","0"),"function"==typeof t.closest&&vl.util.addClass(t.closest(".".concat(n)),l),t.setAttribute("aria-selected",!0),null==e||e.setAttribute("hidden",""),null==e||e.setAttribute("".concat(b),"true")},e.updateResponsiveBtnLabelForTabsContainerWithTab=function(t,e){t.querySelector("[".concat(c,"] span")).innerHTML=e.innerHTML},e.clickEvent=function(t){if(t.target&&"function"==typeof t.target.closest){var e=t.target.closest("[".concat(h,"]")),a=e.querySelector("[".concat(c,"]")),s=e.querySelector("".concat(o)),i="true"===s.getAttribute(b);s.setAttribute(b,i?"false":"true"),s.setAttribute("aria-hidden",i?"true":"false"),a.setAttribute("aria-expanded",i?"true":"false"),a.setAttribute(v,i?"false":"true")}},e.setupResponsiveToggleBtnForTabsContainer=function(t){var e=t.shadowRoot,a=null==e?void 0:e.querySelector("[".concat(c,"]")),s=t.getAttribute("data-vl-display-style"),i=u._getBreakpoint();a&&("xsmall"===i||"small"===i||"collapsed"===s)&&a.addEventListener("click",this.clickEvent,{signal:t.disconnectedSignal})},e.dress=function(t){var e=this,a=t.shadowRoot,s=a.querySelectorAll("".concat(r)),i=a.querySelectorAll("".concat(d)),l=window.location.hash,n=a.querySelector("[href$='".concat(l,"']"));vl.util.each(s,function(t,l){t.addEventListener("focus",function(){e.currentTabIndexForCurrentTabsContainer=l,t.click()}),t.addEventListener("click",function(){e.resetTabIndexesForTabs(s),e.resetTabPanes(i),e.showTabPaneForTab(t,i[l]),e.updateResponsiveBtnLabelForTabsContainerWithTab(a,t),a.querySelector("[".concat(c,"]")).click()})}),n&&n.click(),a.addEventListener("keydown",function(t){switch(t.keyCode){case 37:var a=e.currentTabIndexForCurrentTabsContainer-1;a<0&&(a=s.length-1);var i=s[a];i&&i.focus();break;case 39:var l=e.currentTabIndexForCurrentTabsContainer+1;l>=s.length&&(l=0);var n=s[l];n&&n.focus()}});var o=t.getAttribute("data-vl-display-style");this.setupResponsiveToggleBtnForTabsContainer(t),("tabs"!==o||"collapsed"!==o)&&window.addEventListener("resize",vl.util.debounce(function(){var s=u._getBreakpoint();a.querySelector("[".concat(c,"]")).removeEventListener("click",e.clickEvent,!1),("xsmall"===s||"small"===s)&&e.setupResponsiveToggleBtnForTabsContainer(t)},0),{signal:t.disconnectedSignal})},t}();"tabs"in vl||(vl.tabs=new _);class p extends(0,s.W$)(HTMLLIElement){static get is(){return"vl-tab"}static get _observedAttributes(){return["href","id","disable-link"]}constructor(){super(),this._processClasses(),this._processLinkElement()}get id(){return this.getAttribute("id")}get __linkElement(){return this.querySelector(".vl-tab__link")}get __linkElementTemplate(){return this._template('<a class="vl-tab__link" data-vl-tab></a>')}get isActive(){return this.classList.contains("vl-tab--active")}activate(){this.__linkElement.click()}_processClasses(){this.classList.add("vl-tab")}_processLinkElement(){let t=this.__linkElementTemplate.firstElementChild,e=this.querySelector("slot");t.appendChild(e),t.addEventListener("click",()=>this.__dispatchActiveTabChangedEvent()),this.appendChild(t)}__dispatchActiveTabChangedEvent(){this.isActive||this.dispatchEvent(new CustomEvent("change",{detail:{activeTab:this.id},composed:!0}))}_hrefChangedCallback(t,e){this.hasAttribute("disable-link")||(this.__linkElement.setAttribute("href",e),this.__linkElement.setAttribute("aria-controls",`${e}-pane`))}_idChangedCallback(t,e){this.__linkElement.id=e}}p=function(t,e,a,s){var i,l=arguments.length,n=l<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,a):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,a,s);else for(var o=t.length-1;o>=0;o--)(i=t[o])&&(n=(l<3?i(n):l>3?i(e,a,n):i(e,a))||n);return l>3&&n&&Object.defineProperty(e,a,n),n}([(0,s.a6)("vl-tab",{extends:"li"})],p);class f extends(0,s.W$)(HTMLElement){static get is(){return"vl-tab-section"}constructor(){super(),this._processClasses(),this._processAttributes()}_processClasses(){this.classList.add("vl-col--1-1"),this.classList.add("vl-tab__pane")}_processAttributes(){this.setAttribute("data-vl-tab-pane",""),this.setAttribute("tabindex",0),this.setAttribute("role","tabpanel"),this.setAttribute("hidden","hidden"),this.setAttribute("aria-labelledby",`${this.id}-tab`)}}f=function(t,e,a,s){var i,l=arguments.length,n=l<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,a):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,a,s);else for(var o=t.length-1;o>=0;o--)(i=t[o])&&(n=(l<3?i(n):l>3?i(e,a,n):i(e,a))||n);return l>3&&n&&Object.defineProperty(e,a,n),n}([(0,s.a6)("vl-tab-section",{extends:"section"})],f);class g extends(0,s.W$)(HTMLElement){static get is(){return"vl-tabs-pane"}static get _observedAttributes(){return["id","title"]}constructor(){super("<slot></slot>"),this.__processTitleSlot()}disconnectedCallback(){this._observer&&this._observer.disconnect()}get paneId(){return this.getAttribute("data-vl-id")}get paneTitle(){return this.getAttribute("data-vl-title")||""}get titleSlot(){return this.querySelector('[slot="title"]')}__processTitleSlot(){this.titleSlot&&(this.__moveTabPaneTitleSlot(),this._observer=this.__observeTitleSlot(()=>this.__moveTabPaneTitleSlot()))}__moveTabPaneTitleSlot(){let t=this.titleSlot.cloneNode(!0);t.setAttribute("slot",`${this.paneId}-title-slot`);let e=this.parentElement.querySelector(`[slot="${this.paneId}-title-slot"]`);e?this.parentElement.replaceChild(t,e):this.parentElement.appendChild(t)}__observeTitleSlot(t){let e=new MutationObserver(e=>t(e));return e.observe(this.titleSlot,{childList:!0,subtree:!0,characterData:!0}),e}_titleChangedCallback(t,e){if(this.hasAttribute("observe-title")){let t=this.parentElement?.shadowRoot?.querySelector(`a.vl-tab__link#${this.paneId}`);t&&(t.innerHTML=`<slot name="${this.paneId}-title-slot">${e}</slot>`)}}}g=function(t,e,a,s){var i,l=arguments.length,n=l<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,a):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,a,s);else for(var o=t.length-1;o>=0;o--)(i=t[o])&&(n=(l<3?i(n):l>3?i(e,a,n):i(e,a))||n);return l>3&&n&&Object.defineProperty(e,a,n),n}([(0,s.a6)("vl-tabs-pane")],g);var m=a("./node_modules/@domg/govflanders-style/component/index.js"),y=a("./node_modules/@domg/govflanders-style/common/index.js"),T=a("./node_modules/lit/index.js");let w=(0,T.iv)`
    :root {
        --vl-theme-primary-color: #ffe615;
        --vl-theme-primary-color-60: #fff073;
        --vl-theme-primary-color-70: #ffee5b;
        --vl-theme-primary-color-rgba-30: rgba(255, 230, 21, 0.3);
        --vl-theme-fg-color: #333332;
        --vl-theme-fg-color-60: #858584;
        --vl-theme-fg-color-70: #707070;
    }

    .vl-tab__link {
        cursor: pointer;
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
        margin: 0 0 -1.5rem 0;
        border: 0;
    }
    @media screen and (max-width: 767px) {
        :host(.vl-tabs--within-functional-header) .vl-tabs {
            left: 0;
            width: 100%;
        }
    }
    :host(.vl-tabs--within-functional-header) .vl-tab {
        top: 0;
        margin: 0 2rem 0 0;
    }
    :host(.vl-tabs--within-functional-header) .vl-tab .vl-tab__link {
        border: 0;
        border-top: 5px solid transparent;
        text-decoration: none;
    }
    :host(.vl-tabs--within-functional-header) .vl-tab .vl-tab__link:visited,
    :host(.vl-tabs--within-functional-header) .vl-tab .vl-tab__link .vl-link__icon {
        color: #05c;
    }
    @media screen and (max-width: 767px) {
        :host(.vl-tabs--within-functional-header) .vl-tab .vl-tab__link {
            padding: 0.7rem 1rem;
            border: 0 !important;
        }
    }
    :host(.vl-tabs--within-functional-header) .vl-tab--active .vl-tab__link {
        color: #333332;
    }
    :host(.vl-tabs--within-functional-header) .vl-tab--active .vl-tab__link:visited {
        color: #333332;
    }
    @media screen and (max-width: 767px) {
        :host(.vl-tabs--within-functional-header) .vl-tab--active {
            border: 0;
        }
    }
    @media screen and (max-width: 767px) {
        :host(.vl-tabs--within-functional-header) .vl-tab {
            padding: 1.4rem 1.5rem !important;
        }
    }
    :host(.vl-tabs--within-functional-header) .vl-tabs__toggle {
        border-top: 0px;
    }
    @media screen and (max-width: 767px) {
        :host(.vl-tabs--within-functional-header) .vl-tabs__toggle {
            left: 0;
            width: 100%;
            margin: 0;
            border-bottom: 1px #cbd2da solid;
        }
    }
    :host(.vl-tabs--within-functional-header) .vl-tabs__toggle[data-vl-close='true'] {
        right: 0;
        left: auto;
        width: 4.2rem;
        border: 0;
        border-bottom: none;
    }
    :host([data-vl-display-style='tabs']) .vl-tabs:not(.vl-tabs--overflow) {
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
    :host([data-vl-display-style='tabs']) [data-vl-tabs] .vl-tabs:not(.vl-tabs--overflow) .vl-tab {
        display: inline-block;
        position: relative;
        margin: 0 1.3rem;
        border-bottom: 3px solid transparent;
    }
    :host([data-vl-display-style='tabs']) .vl-tabs__toggle {
        display: none;
    }
    :host([data-vl-display-style='tabs']) [data-vl-tabs] .vl-tabs:not(.vl-tabs--overflow) .vl-tab:first-of-type {
        width: unset;
    }
    :host([data-vl-display-style='tabs']) [data-vl-tabs] .vl-tabs:not(.vl-tabs--overflow) .vl-tab--active {
        border-bottom: 3px solid;
    }
    :host([data-vl-display-style='tabs']) [data-vl-tabs] .vl-tabs:not(.vl-tabs--overflow) .vl-tab:hover,
    .vl-tab:focus {
        border-bottom-color: var(--vl-theme-fg-color);
    }
    :host([data-vl-display-style='collapsed']) .vl-tabs:not(.vl-tabs--overflow) {
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
    :host([data-vl-display-style='collapsed']) .vl-tabs:not(.vl-tabs--overflow)[data-vl-show='true'] {
        display: block;
    }
    :host([data-vl-display-style='collapsed']) .vl-tabs__toggle {
        display: block;
    }
    :host([data-vl-display-style='collapsed']) [data-vl-tabs] .vl-tabs:not(.vl-tabs--overflow) .vl-tab:first-of-type {
        width: calc(100% - 4.2rem);
    }
    :host([data-vl-display-style='collapsed']) [data-vl-tabs] .vl-tabs:not(.vl-tabs--overflow) .vl-tab {
        display: block;
        top: 0;
        padding: 0.7rem 1.5rem;
        border: 0;
        font-size: 1.5rem;
        margin: 0;
    }
`,k={DEFAULT:"default",TABS:"tabs",COLLAPSED:"collapsed"};class A extends s.F9{static{(0,s.YV)([p,f,g])}static get is(){return"vl-tabs"}static get _observedAttributes(){return["alt","responsive-label","active-tab","href","disable-links","within-functional-header","display-style"]}constructor(){super(`
        <style>
          ${y.YN}
          ${m.LY}
          ${w}
          ${y.Oh}
          ${y.QT}
        </style>
        <div id="tabs" data-vl-tabs data-vl-tabs-responsive-label="Navigatie">
          <div id="tabs-wrapper" class="vl-tabs__wrapper">
            <ul id="tab-list" class="vl-tabs" data-vl-tabs-list role="tablist" aria-label="tabs"></ul>
            <button type="button" data-vl-tabs-toggle class="vl-tabs__toggle" data-vl-close="false">
              <span id="data-vl-tabs-responsive-label">Navigatie</span>
            </button>
          </div>
        </div>
      `),this.abortController=new AbortController,this.disconnectedSignal=this.abortController.signal}connectedCallback(){super.connectedCallback(),this._renderTabs(),this.hasAttribute("within-functional-header")||this._renderSections(),this.__dress(),this._observer=this.__observeTabPanes(t=>this.__processTabPane(t))}disconnectedCallback(){this._observer?.disconnect(),this.abortController.abort("disconnectedCallback")}get _dressed(){return this.hasAttribute(A._dressedAttributeName)}static get _dressedAttributeName(){return"data-vl-tabs-dressed"}async __dress(t){(!this._dressed||t)&&(await customElements.whenDefined("vl-tab"),await customElements.whenDefined("vl-tab-section"),vl.tabs.dress(this),this.setAttribute(A._dressedAttributeName,""))}async ready(){return(0,s.wA)(()=>this._dressed)}get __tabs(){return this.shadowRoot?.getElementById("tabs")}get __tabList(){return this.shadowRoot?.getElementById("tab-list")}get __tabsToggle(){return this.shadowRoot?.querySelector(".vl-tabs__toggle")}get __responsiveLabel(){return this.shadowRoot?.getElementById("data-vl-tabs-responsive-label")}get __tabPanes(){return[...this.querySelectorAll(g.is)]}__getTabTemplate({id:t,title:e}){let a=this.hasAttribute("disable-links");return this._template(`
            <li
                role="tab"
                is="vl-tab"
                data-vl-id="${t}"
                data-vl-href="${this.__href}#${t}"
                ${a?"data-vl-disable-link":""}
            >
                <slot name="${t}-title-slot">${e}</slot>
            </li>
        `)}__getTabSectionTemplate({id:t}){return this._template(`
            <section id="${t}-pane" is="vl-tab-section">
                <slot name="${t}-slot"></slot>
            </section>
        `)}_addTab({tabPane:t,index:e}){let a=this.__getTabTemplate({id:t.getAttribute("data-vl-id"),title:t.getAttribute("data-vl-title")});e&&e>=0?this.__tabList?.insertBefore(a,this.__tabList.children[e]):this.__tabList?.appendChild(a)}_removeTab(t){let e=this.__tabList?.querySelector(`[data-vl-id="${t}"]`);e&&this.__tabList?.removeChild(e)}_addTabSection({id:t,index:e}){this.__tabPanes[e].setAttribute("slot",`${t}-slot`);let a=this.__getTabSectionTemplate({id:t});e&&e>=0?this.__tabs?.insertBefore(a,this.__tabs.children[++e]):this.__tabs?.appendChild(a)}_removeTabSection(t){let e=this.__tabs?.querySelector(`#${t}-pane`);e&&this.__tabs?.removeChild(e)}_renderTabs(){this.__tabList&&(this.__tabList.innerHTML=""),this.__tabPanes.forEach(t=>{this._addTab({tabPane:t})})}_renderSections(){this.__tabPanes.forEach((t,e)=>this._addTabSection({id:t.getAttribute("data-vl-id"),index:e}))}_altChangedCallback(t,e){void 0!=e?this.__tabList.classList.add("vl-tabs--alt"):this.__tabList.classList.remove("vl-tabs--alt")}_responsiveLabelChangedCallback(t,e){let a=e||"Navigatie";this.__tabs.setAttribute("data-vl-tabs-responsive-label",a),this.__responsiveLabel.innerHTML=a}async _activeTabChangedCallback(t,e){await this.ready();let a=[...this.__tabList.children].find(t=>t.id==e);a&&!a.isActive&&(a.activate(),this.__tabsToggle&&"true"===this.__tabList.getAttribute("data-vl-show")&&this.__tabsToggle.click())}_withinFunctionalHeaderChangedCallback(t,e){void 0!=e?this.classList.add("vl-tabs--within-functional-header"):this.classList.remove("vl-tabs--within-functional-header")}_hrefChangedCallback(){this.__updateHrefs()}get __href(){return this.getAttribute("data-vl-href")||window.location.pathname+window.location.search}__updateHrefs(){[...this.__tabList.children].forEach(t=>t.setAttribute("data-vl-href",`${this.__href}#${t.id}`))}__observeTabPanes(t){let e=new MutationObserver(t);return e.observe(this,{childList:!0}),e}__processTabPane(t){t.flatMap(t=>[...t.addedNodes]).filter(t=>t instanceof g).forEach(t=>this.__addTabAndSection(t)),t.flatMap(t=>[...t.removedNodes]).filter(t=>t instanceof g).forEach(t=>this.__removeTabAndSection(t)),this.__dress(!0)}__addTabAndSection(t){let e=this.__tabPanes.indexOf(t);this._addTab({tabPane:t,index:e}),this.hasAttribute("within-functional-header")||this._addTabSection({id:t.getAttribute("data-vl-id")||"",index:e})}__removeTabAndSection(t){this._removeTab(t.getAttribute("data-vl-id")),this.hasAttribute("within-functional-header")||this._removeTabSection(t.getAttribute("data-vl-id"))}}A=function(t,e,a,s){var i,l=arguments.length,n=l<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,a):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,a,s);else for(var o=t.length-1;o>=0;o--)(i=t[o])&&(n=(l<3?i(n):l>3?i(e,a,n):i(e,a))||n);return l>3&&n&&Object.defineProperty(e,a,n),n}([(0,s.a6)("vl-tabs")],A)}}]);