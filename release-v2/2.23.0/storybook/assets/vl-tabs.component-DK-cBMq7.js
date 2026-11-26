import{i as a,b8 as g,r as k,bt as $,B as w,bC as p,bw as v,b as r,G as d,bS as _,w as x,z as T,bs as O}from"./iframe-Cv28D2NX.js";import"./vl-checkbox.component-Cl-C3bHb.js";import"./vl-datepicker.component-gIhsylI-.js";import"./vl-fieldset.component-DAfAyWPV.js";import"./vl-input-field-masked.component-DrIBY--W.js";import"./vl-radio.component-BMGk1PbP.js";import"./vl-radio-group.component-BVQMwWW-.js";import{V as S}from"./vl-select.component-DAztbrd3.js";import"./vl-select-rich.component-Bt8ZFZBv.js";import"./vl-textarea.component-1SQHWSt5.js";import"./vl-textarea-rich.component-jUqK0iT2.js";import"./vl-upload.component-RSddKL9f.js";const C=(e=!1)=>a`
    :host {
        --vl-tab--padding-inline: 1.3rem;
    }

    ${e?a`
            :host > a, 
            :host > a:visited
    `:a`
              :host,
              :host(:visited)
    `} {
        color: var(--vl-color--text-action);
        cursor: pointer;
        display: block;
        font-size: var(--vl-font-size--small);
        font-weight: 500;
        padding: 1.1rem var(--vl-tab--padding-inline) 1.2rem;
        position: relative;
        text-decoration: none;

        &::after {
            background-color: transparent;
            bottom: -1px;
            content: '';
            display: block;
            height: 0.3rem;
            left: var(--vl-tab--padding-inline);
            position: absolute;
            width: calc(100% - 2 * var(--vl-tab--padding-inline));
            transition: background-color 0.2s ease-out;
        }
    }

    ${e?a`
        :host([selected]) > a,
        :host(:hover) > a,
        :host(:focus) > a,
        :host(:active) > a
    `:a`
        :host([selected]),
        :host(:hover),
        :host(:focus),
        :host(:active)
    `} {
        &::after {
            background-color: var(--vl-color--text-default);
        }
    }

    ${e?a`
        :host([selected]) > a
    `:a`
              :host([selected])
          `} {
        color: var(--vl-color--text-default);
    }

    ${e?a`
        :host(:hover) > a
    `:a`
            :host(:hover)
    `} {
        color: var(--vl-color--hover-text-action);
    }

    ${e?a`
        :host(:focus) > a
    `:a`
              :host(:focus)
    `} {
        ${g()};
    }

    ${e?a`
              :host:has(a) {
                  padding: 0;
                  &::after {
                      display: none;
                  }
              }

              :host(:focus):has(a) {
                  outline: none;
              }
          `:a``}
`;var M=Object.defineProperty,I=Object.getOwnPropertyDescriptor,f=(e,t,o,s)=>{for(var i=s>1?void 0:s?I(t,o):t,l=e.length-1,n;l>=0;l--)(n=e[l])&&(i=(s?n(t,o,i):n(i))||i);return s&&i&&M(t,o,i),i};k([$]);let c=class extends w{constructor(){super(...arguments),this.href="",this.external=!1,this.selected=!1,this.onClick=()=>{this.dispatchEvent(new CustomEvent("vl-tab-link-click",{detail:{tab:this},bubbles:!0,composed:!0}))}}static get styles(){return[C(!0)]}select(){this.selected=!0,this.updateComplete.then(()=>this.anchor?.click())}connectedCallback(){super.connectedCallback(),this.hasAttribute("href")||console.warn('vl-tab-link-next: Attribuut "href" is verplicht')}render(){return r`<a
            href="${this.href}"
            target="${p(this.external?"_blank":void 0)}"
            rel="${p(this.external?"nofollow noopener noreferrer":void 0)}"
            aria-current="${p(this.selected?"page":void 0)}"
            @click=${this.onClick}
            ><slot></slot>${v(!!this.external,()=>r` <vl-icon icon="external" label="(opent in een nieuw venster)"></vl-icon> `)}</a
        >`}};f([d({type:String,reflect:!0,attribute:"href"})],c.prototype,"href",2);f([d({type:Boolean,reflect:!0,attribute:"external"})],c.prototype,"external",2);f([d({type:Boolean,reflect:!0,attribute:"selected"})],c.prototype,"selected",2);f([_("a")],c.prototype,"anchor",2);c=f([x("vl-tab-link-next")],c);const E=a`
    :host {
        display: block;
        margin-top: var(--vl-spacing--medium);
    }

    :host([hidden]) {
        display: none;
    }

    :host(:focus-visible) {
        ${g()};
    }
`;var L=Object.defineProperty,A=Object.getOwnPropertyDescriptor,D=(e,t,o,s)=>{for(var i=s>1?void 0:s?A(t,o):t,l=e.length-1,n;l>=0;l--)(n=e[l])&&(i=(s?n(t,o,i):n(i))||i);return s&&i&&L(t,o,i),i};let m=class extends w{constructor(){super(...arguments),this.hidden=!0}static get styles(){return[E]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tabpanel"),this.syncTabIndex(),this.hasAttribute("id")||console.warn('vl-tab-panel-next: Attribuut "id" is verplicht')}updated(e){super.updated(e),e.has("hidden")&&this.syncTabIndex()}syncTabIndex(){this.hidden?this.removeAttribute("tabindex"):this.setAttribute("tabindex","0")}render(){return r`<slot></slot>`}};D([d({type:Boolean,reflect:!0})],m.prototype,"hidden",2);m=D([x("vl-tab-panel-next")],m);var F=Object.defineProperty,P=Object.getOwnPropertyDescriptor,y=(e,t,o,s)=>{for(var i=s>1?void 0:s?P(t,o):t,l=e.length-1,n;l>=0;l--)(n=e[l])&&(i=(s?n(t,o,i):n(i))||i);return s&&i&&F(t,o,i),i};let b=class extends w{constructor(){super(...arguments),this.panel="",this.selected=!1,this.dispatchClick=()=>{this.dispatchEvent(new CustomEvent("vl-tab-click",{detail:{tab:this},bubbles:!0,composed:!0}))},this.onKeyDown=e=>{e.key.toLowerCase()==="enter"&&this.dispatchClick()},this.onKeyUp=e=>{e.key.toLowerCase()===" "&&this.dispatchClick()}}static get styles(){return[C()]}select(){this.selected=!0,this.setAttribute("aria-selected","true"),this.setAttribute("tabindex","0"),this.dispatchClick()}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab"),this.setAttribute("tabindex",this.selected?"0":"-1"),this.setAttribute("aria-controls",this.panel),this.setAttribute("aria-selected",this.selected?"true":"false"),this.hasAttribute("panel")||console.warn('vl-tab-next: Attribuut "panel" is verplicht'),this.hasAttribute("id")||console.warn('vl-tab-next: Attribuut "id" is verplicht'),this.addEventListener("click",this.dispatchClick),this.addEventListener("keydown",this.onKeyDown),this.addEventListener("keyup",this.onKeyUp)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.dispatchClick),this.removeEventListener("keydown",this.onKeyDown),this.removeEventListener("keyup",this.onKeyUp)}attributeChangedCallback(e,t,o){switch(super.attributeChangedCallback(e,t,o),e){case"selected":if(t===o)return;const s=o==="true"||o==="";this.setAttribute("aria-selected",s?"true":"false"),this.setAttribute("tabindex",s?"0":"-1");break}}render(){return r`<slot></slot>`}};y([d({type:String,reflect:!0,attribute:"panel"})],b.prototype,"panel",2);y([d({type:Boolean,reflect:!0,attribute:"selected"})],b.prototype,"selected",2);b=y([x("vl-tab-next")],b);const B=a`
    :host {
        display: block;
    }

    .vl-tabs {
        border-bottom: 1px solid var(--vl-color--border-default);
    }

    .vl-tabs--no-border {
        border: 0;
    }

    .vl-tabs nav {
        display: flex;
        flex-wrap: wrap;
    }

    /* Horizontal navigation */
    .vl-tabs ul {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
    }

    /* Mobile version */
    .vl-tabs--mobile {
        border: 0;
        position: relative;

        .vl-tabs__mobile-toggle {
            flex-shrink: 0;

            &::part(button) {
                justify-content: space-between;
            }
        }

        .vl-tabs__mobile-selected {
            flex: 1;
            min-width: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .vl-tabs__mobile-dropdown {
            display: flex;
            flex-direction: column;
            gap: 0;
            border: 1px solid var(--vl-color--border-default);
            border-radius: var(--vl-border-radius);
            position: absolute;
            top: 4.3rem;
            left: 0;
            right: 0;
            background: var(--vl-color--background-default);
            z-index: 1;
            max-height: calc(100vh - 6rem);
            overflow-y: auto;
        }

        .vl-tabs__mobile-option {
            padding: 0.75rem 1rem;
            cursor: pointer;

            &[aria-selected='true'] {
                font-weight: 500;
            }

            &:hover {
                background-color: var(--vl-color--background-subtle);
            }

            &:focus {
                ${g()};
                outline-offset: -2px;
            }
        }
    }

    [hidden] {
        display: none !important;
    }
`;var q=Object.defineProperty,z=Object.getOwnPropertyDescriptor,u=(e,t,o,s)=>{for(var i=s>1?void 0:s?z(t,o):t,l=e.length-1,n;l>=0;l--)(n=e[l])&&(i=(s?n(t,o,i):n(i))||i);return s&&i&&q(t,o,i),i};k([b,c,m,S]);let h=class extends w{constructor(){super(...arguments),this.horizontalNavigation=!1,this.label="",this.noBorder=!1,this.mobile=window.matchMedia(`(max-width: ${T}px)`).matches,this.mobileDropdownOpen=!1,this.mobileDropdownFocusedIndex=-1,this.showPanel=e=>{this.querySelectorAll("vl-tab-panel-next").forEach(o=>o.setAttribute("hidden",""));const t=this.querySelector(`vl-tab-panel-next[id="${CSS.escape(e)}"]`);if(!t){console.warn(`
                vl-tabs-next: Er werd geen panel gevonden met ID: "${e}".
                Voeg een <vl-tab-panel-next> element toe en koppel het met een <vl-tab-next> adhv het panel ID.
                Indien je niet met panels wenst te werken, gebruik dan het "horizontal-navigation"-attribuut en
                <vl-tab-link-next> elementen.`);return}t.removeAttribute("hidden")},this.selectTab=(e,t=!1,o=!0)=>{if(this.allTabs.forEach(s=>{s!==e&&s.selected&&(s.selected=!1)}),e.selected||(e.selected=!0),e instanceof b&&this.showPanel(e.panel),t&&e.focus(),this.mobile){this.requestUpdate();const s=this.allTabs.indexOf(e);if(this.mobileOptions.findIndex(l=>l.value===String(s))!==-1&&(this.mobileDropdownFocusedIndex=s),o&&this.horizontalNavigation){const l=e.href;l&&(e.external?window.open(l,"_blank","noopener"):window.location.href=l)}}},this.onKeyDown=e=>{const t=this.allTabs.findIndex(s=>s===e.target);if(t===-1)return;switch(e.key.toLowerCase()){case"arrowleft":this.previousTab(t);break;case"arrowright":this.nextTab(t);break;case"home":this.firstTab();break;case"end":this.lastTab();break}},this.onTabClicked=e=>{const{tab:t}=e.detail;this.requestSelectTab(t,!0)},this.onTabLinkClicked=e=>{if(e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;const t=this.findClickedTabLink(e);t&&!this.requestSelectTab(t,!1,!1)&&e.preventDefault()},this.handleMobileMediaQueryChange=e=>{this.setMobileState(e.matches)},this.onMobileToggle=()=>{this.mobileDropdownOpen=!this.mobileDropdownOpen,this.mobileDropdownOpen?(this.mobileDropdownFocusedIndex=0,requestAnimationFrame(()=>{this.focusMobileOption(this.mobileDropdownFocusedIndex)})):this.mobileToggleButton?.focus()},this.onMobileListboxKeyDown=e=>{if(!this.mobileDropdownOpen)return;const t=e.key.toLowerCase(),o=this.mobileOptions.length;switch(t){case"arrowdown":e.preventDefault(),this.mobileDropdownFocusedIndex=this.mobileDropdownFocusedIndex===o-1?0:this.mobileDropdownFocusedIndex+1,this.focusMobileOption(this.mobileDropdownFocusedIndex);break;case"arrowup":e.preventDefault(),this.mobileDropdownFocusedIndex=this.mobileDropdownFocusedIndex===0?o-1:this.mobileDropdownFocusedIndex-1,this.focusMobileOption(this.mobileDropdownFocusedIndex);break;case"home":e.preventDefault(),this.mobileDropdownFocusedIndex=0,this.focusMobileOption(this.mobileDropdownFocusedIndex);break;case"end":e.preventDefault(),this.mobileDropdownFocusedIndex=o-1,this.focusMobileOption(this.mobileDropdownFocusedIndex);break;case"enter":case" ":e.preventDefault(),this.mobileDropdownFocusedIndex>=0&&(this.requestSelectTab(this.allTabs[this.mobileDropdownFocusedIndex],!1,!0),this.onMobileToggle(),this.mobileToggleButton?.focus());break;case"escape":e.preventDefault(),this.onMobileToggle(),this.mobileToggleButton?.focus();break}}}static get styles(){return[O,B]}get mobileOptions(){return this.allTabs.map((e,t)=>({label:e.textContent||"",value:String(t),selected:t===this.selectedTabIndex}))||[]}get mobileToggleButton(){return this.shadowRoot?.querySelector(".vl-tabs__mobile-toggle")?.shadowRoot?.querySelector("button")||null}get allTabs(){const e=this.shadowRoot?.querySelector("nav slot");return e?e.assignedElements().filter(t=>t instanceof b||t instanceof c):[]}get selectedTab(){return this.allTabs.find(e=>e.selected===!0)}get selectedTabIndex(){return this.selectedTab?this.allTabs.indexOf(this.selectedTab):-1}requestSelectTab(e,t=!1,o=!0){return t&&e.focus(),!e.selected&&!this.dispatchTabChange(e)?!1:(this.selectTab(e,t,o),!0)}dispatchTabChange(e){return this.dispatchEvent(new CustomEvent("vl-tab-change",{detail:{tab:e,previousTab:this.selectedTab},bubbles:!0,composed:!0,cancelable:!0}))}previousTab(e){const t=e===0?this.allTabs.length-1:e-1;this.requestSelectTab(this.allTabs[t],!0)}nextTab(e){const t=e===this.allTabs.length-1?0:e+1;this.requestSelectTab(this.allTabs[t],!0)}firstTab(){this.requestSelectTab(this.allTabs[0],!0)}lastTab(){this.requestSelectTab(this.allTabs[this.allTabs.length-1],!0)}findClickedTabLink(e){const t=e.composedPath();return this.allTabs.find(o=>o instanceof c&&t.some(s=>s instanceof HTMLAnchorElement&&s.getRootNode()===o.shadowRoot))}firstUpdated(){this.ensureSelectedTab(),this.mobileMediaQuery=window.matchMedia(`(max-width: ${T}px)`),this.setMobileState(this.mobileMediaQuery.matches),this.mobileMediaQuery.addEventListener("change",this.handleMobileMediaQueryChange)}updated(){this.ensureSelectedTab()}setMobileState(e){this.mobile=e,this.mobile?this.allTabs.forEach(t=>{t instanceof c&&t.removeAttribute("role")}):(this.mobileDropdownFocusedIndex=-1,this.mobileDropdownOpen=!1,this.allTabs.forEach(t=>{t instanceof c&&t.setAttribute("role","listitem")}))}ensureSelectedTab(){if(this.allTabs.length===0)return;if(!this.allTabs.find(t=>t.selected===!0)){this.selectTab(this.allTabs[0],!1,!1);return}}connectedCallback(){super.connectedCallback(),this.addEventListener("vl-tab-click",this.onTabClicked),this.addEventListener("click",this.onTabLinkClicked),this.horizontalNavigation||this.addEventListener("keydown",this.onKeyDown),this.addEventListener("keydown",this.onMobileListboxKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("vl-tab-click",this.onTabClicked),this.removeEventListener("click",this.onTabLinkClicked),this.removeEventListener("keydown",this.onKeyDown),this.removeEventListener("keydown",this.onMobileListboxKeyDown),this.mobileMediaQuery&&(this.mobileMediaQuery.removeEventListener("change",this.handleMobileMediaQueryChange),this.mobileMediaQuery=void 0)}render(){return r` ${this.mobile?this.renderMobile():this.renderDesktop()} `}renderDesktop(){return r`<div class="vl-tabs ${this.noBorder?"vl-tabs--no-border":""}">
                <nav
                    id="tabs-nav"
                    aria-label="${p(this.label?this.label:void 0)}"
                    role="${p(this.horizontalNavigation?void 0:"tablist")}"
                >
                    ${v(!this.horizontalNavigation,()=>r` <slot></slot> `)}
                    ${v(this.horizontalNavigation,()=>r`<ul>
                                <slot></slot>
                            </ul>`)}
                </nav>
            </div>
            ${v(!this.horizontalNavigation,()=>r` <slot name="panel"></slot> `)} `}focusMobileOption(e){this.shadowRoot?.querySelector(`#tab-option-${e}`)?.focus()}renderMobile(){const e=this.selectedTab?.textContent||"";return r`
            <div class="vl-tabs vl-tabs--mobile ${this.noBorder?"vl-tabs--no-border":""}">
                <vl-button
                    icon="arrow-down-fat"
                    icon-placement="after"
                    tertiary
                    block
                    aria-expanded="${this.mobileDropdownOpen?"true":"false"}"
                    aria-controls="tabs-dropdown"
                    aria-haspopup="listbox"
                    class="vl-tabs__mobile-toggle"
                    @click="${this.onMobileToggle}"
                    >${e}</vl-button
                >

                <div
                    id="tabs-dropdown"
                    role="listbox"
                    aria-label="${p(this.label||void 0)}"
                    aria-multiselectable="false"
                    class="vl-tabs__mobile-dropdown"
                    ?hidden="${!this.mobileDropdownOpen}"
                >
                    ${this.mobileOptions.map((t,o)=>r`
                            <div
                                id="tab-option-${o}"
                                tabindex="0"
                                role="option"
                                aria-selected="${t.selected?"true":"false"}"
                                class="vl-tabs__mobile-option"
                                @click="${()=>{this.requestSelectTab(this.allTabs[Number(t.value)]),this.mobileDropdownFocusedIndex=-1,this.onMobileToggle()}}"
                            >
                                ${t.label}
                            </div>
                        `)}
                </div>

                <nav hidden>
                    <slot></slot>
                </nav>
                ${v(!this.horizontalNavigation,()=>r` <slot name="panel"></slot> `)}
            </div>
        `}};u([d({type:Boolean,reflect:!0,attribute:"horizontal-navigation"})],h.prototype,"horizontalNavigation",2);u([d({type:String,reflect:!0,attribute:"label"})],h.prototype,"label",2);u([d({type:Boolean,reflect:!0,attribute:"no-border"})],h.prototype,"noBorder",2);u([d({type:Boolean})],h.prototype,"mobile",2);u([d({type:Boolean})],h.prototype,"mobileDropdownOpen",2);u([d({type:Number})],h.prototype,"mobileDropdownFocusedIndex",2);h=u([x("vl-tabs-next")],h);export{h as V,c as a,b,m as c};
