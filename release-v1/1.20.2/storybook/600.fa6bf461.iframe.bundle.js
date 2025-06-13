"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[600],{"./libs/components/src/tabs/vl-tabs.component.ts":(t,e,a)=>{a.d(e,{z:()=>y});var s=a("./libs/common/utilities/src/index.ts"),i=a("./node_modules/@govflanders/vl-ui-util/src/js/breakpoint.js"),n="".concat(vl.ns,"tab--active"),l="".concat(vl.ns,"tab"),r="[data-".concat(vl.ns,"tabs-list]"),o="[data-".concat(vl.ns,"tab]"),c="[data-".concat(vl.ns,"tab-pane]"),d="data-".concat(vl.ns,"tabs-toggle"),b="data-".concat(vl.ns,"show"),h="data-".concat(vl.ns,"close"),v="data-".concat(vl.ns,"tabs"),_=new i.Z;_.dress();var u=function(){function t(){this.currentTabIndexForCurrentTabsContainer=-1}var e=t.prototype;return e.resetTabIndexesForTabs=function(t){vl.util.each(t,function(t){t.setAttribute("tabindex","-1"),t.setAttribute("aria-selected","false"),"function"==typeof t.closest&&vl.util.removeClass(t.closest(".".concat(l)),n)})},e.resetTabPanes=function(t){vl.util.each(t,function(t){t.setAttribute("hidden","hidden"),t.setAttribute("".concat(b),"false")})},e.showTabPaneForTab=function(t,e){t.setAttribute("tabindex","0"),"function"==typeof t.closest&&vl.util.addClass(t.closest(".".concat(l)),n),t.setAttribute("aria-selected",!0),null==e||e.setAttribute("hidden",""),null==e||e.setAttribute("".concat(b),"true")},e.updateResponsiveBtnLabelForTabsContainerWithTab=function(t,e){t.querySelector("[".concat(d,"] span")).innerHTML=e.innerHTML},e.clickEvent=function(t){if(t.target&&"function"==typeof t.target.closest){var e=t.target.closest("[".concat(v,"]")),a=e.querySelector("[".concat(d,"]")),s=e.querySelector("".concat(r)),i="true"===s.getAttribute(b);s.setAttribute(b,i?"false":"true"),s.setAttribute("aria-hidden",i?"true":"false"),a.setAttribute("aria-expanded",i?"true":"false"),a.setAttribute(h,i?"false":"true")}},e.setupResponsiveToggleBtnForTabsContainer=function(t){var e=t.querySelector("[".concat(d,"]")),a=_._getBreakpoint();("xsmall"===a||"small"===a)&&e.addEventListener("click",this.clickEvent,!1)},e.dress=function(t){var e=this;this.setupResponsiveToggleBtnForTabsContainer(t);var a=t.querySelectorAll("".concat(o)),s=t.querySelectorAll("".concat(c)),i=window.location.hash,n=t.querySelector("[href$='".concat(i,"']"));vl.util.each(a,function(i,n){i.addEventListener("focus",function(){e.currentTabIndexForCurrentTabsContainer=n,i.click()}),i.addEventListener("click",function(){e.resetTabIndexesForTabs(a),e.resetTabPanes(s),e.showTabPaneForTab(i,s[n]),e.updateResponsiveBtnLabelForTabsContainerWithTab(t,i),t.querySelector("[".concat(d,"]")).click()})}),n&&n.click(),t.addEventListener("keydown",function(t){switch(t.keyCode){case 37:case 38:var s=e.currentTabIndexForCurrentTabsContainer-1;s<0&&(s=a.length-1);var i=a[s];i&&i.focus();break;case 39:case 40:var n=e.currentTabIndexForCurrentTabsContainer+1;n>=a.length&&(n=0);var l=a[n];l&&l.focus()}}),window.addEventListener("resize",vl.util.debounce(function(){var a=_._getBreakpoint();("xsmall"===a||"small"===a)&&(t.querySelector("[".concat(d,"]")).removeEventListener("click",e.clickEvent,!1),e.setupResponsiveToggleBtnForTabsContainer(t))},0))},t}();"tabs"in vl||(vl.tabs=new u);let f=class extends(0,s.W$)(HTMLLIElement){static get is(){return"vl-tab"}static get _observedAttributes(){return["href","id","disable-link"]}constructor(){super(),this._processClasses(),this._processLinkElement()}get id(){return this.getAttribute("id")}get __linkElement(){return this.querySelector(".vl-tab__link")}get __linkElementTemplate(){return this._template('<a class="vl-tab__link" data-vl-tab role="tab"></a>')}get isActive(){return this.classList.contains("vl-tab--active")}activate(){this.__linkElement.click()}_processClasses(){this.classList.add("vl-tab")}_processLinkElement(){let t=this.__linkElementTemplate.firstElementChild,e=this.querySelector("slot");t.appendChild(e),t.addEventListener("click",()=>this.__dispatchActiveTabChangedEvent()),this.appendChild(t)}__dispatchActiveTabChangedEvent(){this.isActive||this.dispatchEvent(new CustomEvent("change",{detail:{activeTab:this.id},composed:!0}))}_hrefChangedCallback(t,e){this.hasAttribute("disable-link")||(this.__linkElement.setAttribute("href",e),this.__linkElement.setAttribute("aria-controls",`${e}-pane`))}_idChangedCallback(t,e){this.__linkElement.id=e}};f=function(t,e,a,s){var i,n=arguments.length,l=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,a):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,a,s);else for(var r=t.length-1;r>=0;r--)(i=t[r])&&(l=(n<3?i(l):n>3?i(e,a,l):i(e,a))||l);return n>3&&l&&Object.defineProperty(e,a,l),l}([(0,s.a6)("vl-tab",{extends:"li"})],f);let p=class extends(0,s.W$)(HTMLElement){static get is(){return"vl-tab-section"}constructor(){super(),this._processClasses(),this._processAttributes()}_processClasses(){this.classList.add("vl-col--1-1"),this.classList.add("vl-tab__pane")}_processAttributes(){this.setAttribute("data-vl-tab-pane",""),this.setAttribute("tabindex",0),this.setAttribute("role","tabpanel"),this.setAttribute("hidden","hidden"),this.setAttribute("aria-labelledby",`${this.id}-tab`)}};p=function(t,e,a,s){var i,n=arguments.length,l=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,a):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,a,s);else for(var r=t.length-1;r>=0;r--)(i=t[r])&&(l=(n<3?i(l):n>3?i(e,a,l):i(e,a))||l);return n>3&&l&&Object.defineProperty(e,a,l),l}([(0,s.a6)("vl-tab-section",{extends:"section"})],p);let m=class extends(0,s.W$)(HTMLElement){static get is(){return"vl-tabs-pane"}static get _observedAttributes(){return["id","title"]}constructor(){super("<slot></slot>"),this.__processTitleSlot()}disconnectedCallback(){this._observer&&this._observer.disconnect()}get id(){return this.getAttribute("data-vl-id")}get title(){return this.getAttribute("data-vl-title")||""}get titleSlot(){return this.querySelector('[slot="title"]')}__processTitleSlot(){this.titleSlot&&(this.__moveTabPaneTitleSlot(),this._observer=this.__observeTitleSlot(()=>this.__moveTabPaneTitleSlot()))}__moveTabPaneTitleSlot(){let t=this.titleSlot.cloneNode(!0);t.setAttribute("slot",`${this.id}-title-slot`);let e=this.parentElement.querySelector(`[slot="${this.id}-title-slot"]`);e?this.parentElement.replaceChild(t,e):this.parentElement.appendChild(t)}__observeTitleSlot(t){let e=new MutationObserver(e=>t(e));return e.observe(this.titleSlot,{childList:!0,subtree:!0,characterData:!0}),e}_titleChangedCallback(t,e){if(this.hasAttribute("observe-title")){let t=this.parentElement?.shadowRoot?.querySelector(`a.vl-tab__link#${this.id}`);t&&(t.innerHTML=`<slot name="${this.id}-title-slot">${e}</slot>`)}}};m=function(t,e,a,s){var i,n=arguments.length,l=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,a):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,a,s);else for(var r=t.length-1;r>=0;r--)(i=t[r])&&(l=(n<3?i(l):n>3?i(e,a,l):i(e,a))||l);return n>3&&l&&Object.defineProperty(e,a,l),l}([(0,s.a6)("vl-tabs-pane")],m);var g=a("./node_modules/@domg/govflanders-style/component/index.js"),T=a("./node_modules/@domg/govflanders-style/common/index.js"),w=a("./node_modules/lit/index.js");let k=(0,w.iv)`
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
`,y=class extends(0,s.W$)(HTMLElement){static{(0,s.YV)([f,p,m])}static get is(){return"vl-tabs"}static get _observedAttributes(){return["alt","responsive-label","active-tab","href","disable-links","within-functional-header"]}constructor(){super(`
    <style>
      ${T.YN}
      ${g.LY}
      ${k}
      ${T.Oh}
      ${T.QT}
    </style>
    <div id="tabs" data-vl-tabs data-vl-tabs-responsive-label="Navigatie">
      <div id="tabs-wrapper" class="vl-tabs__wrapper">
        <ul id="tab-list" class="vl-tabs" data-vl-tabs-list role="tablist"></ul>
        <button type="button" data-vl-tabs-toggle aria-expanded="false" class="vl-tabs__toggle" data-vl-close="false">
          <span id="data-vl-tabs-responsive-label">Navigatie</span>
        </button>
      </div>
    </div>`)}connectedCallback(){super.connectedCallback(),this._renderTabs(),this.hasAttribute("within-functional-header")||this._renderSections(),this.__dress(),this._observer=this.__observeTabPanes(t=>this.__processTabPane(t))}disconnectedCallback(){this._observer.disconnect()}get _dressed(){return this.hasAttribute(y._dressedAttributeName)}static get _dressedAttributeName(){return"data-vl-tabs-dressed"}async __dress(t){(!this._dressed||t)&&(await customElements.whenDefined("vl-tab"),await customElements.whenDefined("vl-tab-section"),vl.tabs.dress(this.shadowRoot),this.setAttribute(y._dressedAttributeName,""))}async ready(){return(0,s.wA)(()=>this._dressed)}get __tabs(){return this.shadowRoot.getElementById("tabs")}get __tabList(){return this.shadowRoot.getElementById("tab-list")}get __tabsToggle(){return this.shadowRoot.querySelector(".vl-tabs__toggle")}get __responsiveLabel(){return this.shadowRoot.getElementById("data-vl-tabs-responsive-label")}get __tabPanes(){return[...this.querySelectorAll(m.is)]}__getTabTemplate({id:t,title:e}){let a=this.hasAttribute("disable-links");return this._template(`
            <li
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
        `)}_addTab({tabPane:t,index:e}){let{id:a,title:s}=t,i=this.__getTabTemplate({id:a,title:s});e&&e>=0?this.__tabList.insertBefore(i,this.__tabList.children[e]):this.__tabList.appendChild(i)}_removeTab(t){let e=this.__tabList.querySelector(`[data-vl-id="${t}"]`);e&&this.__tabList.removeChild(e)}_addTabSection({id:t,index:e}){this.__tabPanes[e].setAttribute("slot",`${t}-slot`);let a=this.__getTabSectionTemplate({id:t});e&&e>=0?this.__tabs.insertBefore(a,this.__tabs.children[++e]):this.__tabs.appendChild(a)}_removeTabSection(t){let e=this.__tabs.querySelector(`#${t}-pane`);e&&this.__tabs.removeChild(e)}_renderTabs(){this.__tabList.innerHTML="",this.__tabPanes.forEach(t=>{this._addTab({tabPane:t})})}_renderSections(){this.__tabPanes.forEach((t,e)=>this._addTabSection({id:t.id,index:e}))}_altChangedCallback(t,e){void 0!=e?this.__tabList.classList.add("vl-tabs--alt"):this.__tabList.classList.remove("vl-tabs--alt")}_responsiveLabelChangedCallback(t,e){let a=e||"Navigatie";this.__tabs.setAttribute("data-vl-tabs-responsive-label",a),this.__responsiveLabel.innerHTML=a}async _activeTabChangedCallback(t,e){await this.ready();let a=[...this.__tabList.children].find(t=>t.id==e);a&&!a.isActive&&(a.activate(),this.__tabsToggle&&"true"===this.__tabList.getAttribute("data-vl-show")&&this.__tabsToggle.click())}_withinFunctionalHeaderChangedCallback(t,e){void 0!=e?this.classList.add("vl-tabs--within-functional-header"):this.classList.remove("vl-tabs--within-functional-header")}_hrefChangedCallback(t,e){this.__updateHrefs()}get __href(){return this.getAttribute("data-vl-href")||window.location.pathname+window.location.search}__updateHrefs(){[...this.__tabList.children].forEach(t=>t.setAttribute("data-vl-href",`${this.__href}#${t.id}`))}__observeTabPanes(t){let e=new MutationObserver(t);return e.observe(this,{childList:!0}),e}__processTabPane(t){let e=t.flatMap(t=>[...t.addedNodes]).filter(t=>t instanceof m);e.forEach(t=>this.__addTabAndSection(t));let a=t.flatMap(t=>[...t.removedNodes]).filter(t=>t instanceof m);a.forEach(t=>this.__removeTabAndSection(t)),this.__dress(!0)}__addTabAndSection(t){let e=this.__tabPanes.indexOf(t);this._addTab({tabPane:t,index:e}),this.hasAttribute("within-functional-header")||this._addTabSection({id:t.id,index:e})}__removeTabAndSection(t){this._removeTab(t.id),this.hasAttribute("within-functional-header")||this._removeTabSection(t.id)}};y=function(t,e,a,s){var i,n=arguments.length,l=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,a):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,a,s);else for(var r=t.length-1;r>=0;r--)(i=t[r])&&(l=(n<3?i(l):n>3?i(e,a,l):i(e,a))||l);return n>3&&l&&Object.defineProperty(e,a,l),l}([(0,s.a6)("vl-tabs")],y)}}]);