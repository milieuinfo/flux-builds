import{be as g,i as a,r as k,bu as $,B as m,bZ as u,bx as v,x as r,H as d,w,E as T,bt as _}from"./iframe-D9dm7PbY.js";import"./vl-checkbox.component-CTssVSja.js";import"./vl-datepicker.component-BdyOMgdW.js";import"./vl-fieldset.component-BtuuUfav.js";import"./vl-input-field-masked.component-B41Wbgbh.js";import"./vl-radio.component-BJRVPCas.js";import"./vl-radio-group.component-BOLoNZwp.js";import{V as O}from"./vl-select.component-CVn7Sb7E.js";import"./vl-select-rich.component-BEDJuxRx.js";import"./vl-textarea.component-DoL2u81l.js";import"./vl-textarea-rich.component-CiD6zwd0.js";import"./vl-upload.component-anH3-fcY.js";const D=(e=!1)=>a`
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
`;var I=Object.defineProperty,M=Object.getOwnPropertyDescriptor,x=(e,t,s,i)=>{for(var o=i>1?void 0:i?M(t,s):t,l=e.length-1,n;l>=0;l--)(n=e[l])&&(o=(i?n(t,s,o):n(o))||o);return i&&o&&I(t,s,o),o};k([$]);let c=class extends m{constructor(){super(...arguments),this.href="",this.external=!1,this.selected=!1,this.onClick=()=>{this.dispatchEvent(new CustomEvent("vl-tab-link-click",{detail:{tab:this},bubbles:!0,composed:!0}))}}static get styles(){return[D(!0)]}connectedCallback(){super.connectedCallback(),this.hasAttribute("href")||console.warn('vl-tab-link-next: Attribuut "href" is verplicht')}render(){return r`<a
            href="${this.href}"
            target="${u(this.external?"_blank":void 0)}"
            rel="${u(this.external?"nofollow noopener noreferrer":void 0)}"
            aria-current="${u(this.selected?"page":void 0)}"
            @click=${this.onClick}
            ><slot></slot>${v(!!this.external,()=>r` <vl-icon icon="external" label="(opent in een nieuw venster)"></vl-icon> `)}</a
        >`}};x([d({type:String,reflect:!0,attribute:"href"})],c.prototype,"href",2);x([d({type:Boolean,reflect:!0,attribute:"external"})],c.prototype,"external",2);x([d({type:Boolean,reflect:!0,attribute:"selected"})],c.prototype,"selected",2);c=x([w("vl-tab-link-next")],c);const E=a`
    :host {
        display: block;
        margin-top: var(--vl-spacing--medium);
    }

    :host([hidden]) {
        display: none;
    }

    :host(:focus) {
        ${g()};
    }
`;var S=Object.defineProperty,F=Object.getOwnPropertyDescriptor,C=(e,t,s,i)=>{for(var o=i>1?void 0:i?F(t,s):t,l=e.length-1,n;l>=0;l--)(n=e[l])&&(o=(i?n(t,s,o):n(o))||o);return i&&o&&S(t,s,o),o};let f=class extends m{constructor(){super(...arguments),this.hidden=!0}static get styles(){return[E]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tabpanel"),this.syncTabIndex(),this.hasAttribute("id")||console.warn('vl-tab-panel-next: Attribuut "id" is verplicht')}updated(e){super.updated(e),e.has("hidden")&&this.syncTabIndex()}syncTabIndex(){this.hidden?this.removeAttribute("tabindex"):this.setAttribute("tabindex","0")}render(){return r`<slot></slot>`}};C([d({type:Boolean,reflect:!0})],f.prototype,"hidden",2);f=C([w("vl-tab-panel-next")],f);var A=Object.defineProperty,L=Object.getOwnPropertyDescriptor,y=(e,t,s,i)=>{for(var o=i>1?void 0:i?L(t,s):t,l=e.length-1,n;l>=0;l--)(n=e[l])&&(o=(i?n(t,s,o):n(o))||o);return i&&o&&A(t,s,o),o};let b=class extends m{constructor(){super(...arguments),this.panel="",this.selected=!1,this.dispatchClick=()=>{this.dispatchEvent(new CustomEvent("vl-tab-click",{detail:{tab:this},bubbles:!0,composed:!0}))},this.onKeyDown=e=>{switch(e.key.toLowerCase()){case"enter":this.dispatchClick();break}},this.onKeyUp=e=>{switch(e.key.toLowerCase()){case" ":this.dispatchClick();break}}}static get styles(){return[D()]}select(){this.selected=!0,this.setAttribute("aria-selected","true"),this.setAttribute("tabindex","0"),this.dispatchClick()}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab"),this.setAttribute("tabindex",this.selected?"0":"-1"),this.setAttribute("aria-controls",this.panel),this.setAttribute("aria-selected",this.selected?"true":"false"),this.hasAttribute("panel")||console.warn('vl-tab-next: Attribuut "panel" is verplicht'),this.hasAttribute("id")||console.warn('vl-tab-next: Attribuut "id" is verplicht'),this.addEventListener("click",this.dispatchClick),this.addEventListener("keydown",this.onKeyDown),this.addEventListener("keyup",this.onKeyUp)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.dispatchClick),this.removeEventListener("keydown",this.onKeyDown),this.removeEventListener("keyup",this.onKeyUp)}attributeChangedCallback(e,t,s){switch(super.attributeChangedCallback(e,t,s),e){case"selected":if(t===s)return;const i=s==="true"||s==="";this.setAttribute("aria-selected",i?"true":"false"),this.setAttribute("tabindex",i?"0":"-1");break}}render(){return r`<slot></slot>`}};y([d({type:String,reflect:!0,attribute:"panel"})],b.prototype,"panel",2);y([d({type:Boolean,reflect:!0,attribute:"selected"})],b.prototype,"selected",2);b=y([w("vl-tab-next")],b);const P=a`
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
`;var B=Object.defineProperty,z=Object.getOwnPropertyDescriptor,p=(e,t,s,i)=>{for(var o=i>1?void 0:i?z(t,s):t,l=e.length-1,n;l>=0;l--)(n=e[l])&&(o=(i?n(t,s,o):n(o))||o);return i&&o&&B(t,s,o),o};k([b,c,f,O]);let h=class extends m{constructor(){super(...arguments),this.horizontalNavigation=!1,this.label="",this.noBorder=!1,this.mobile=window.matchMedia(`(max-width: ${T}px)`).matches,this.mobileDropdownOpen=!1,this.mobileDropdownFocusedIndex=-1,this.showPanel=e=>{this.querySelectorAll("vl-tab-panel-next").forEach(s=>s.setAttribute("hidden",""));const t=this.querySelector(`vl-tab-panel-next[id="${CSS.escape(e)}"]`);if(!t){console.warn(`
                vl-tabs-next: Er werd geen panel gevonden met ID: "${e}".
                Voeg een <vl-tab-panel-next> element toe en koppel het met een <vl-tab-next> adhv het panel ID.
                Indien je niet met panels wenst te werken, gebruik dan het "horizontal-navigation"-attribuut en
                <vl-tab-link-next> elementen.`);return}t.removeAttribute("hidden")},this.selectTab=(e,t=!1,s=!0)=>{if(this.selectedTab&&this.selectedTab!==e&&(this.selectedTab.selected=!1),e.selected||(e.selected=!0),e instanceof b&&this.showPanel(e.panel),t&&e.focus(),this.mobile){const i=this.allTabs.indexOf(e);if(this.mobileOptions.findIndex(l=>l.value===String(i))!==-1&&(this.mobileDropdownFocusedIndex=i),s&&this.horizontalNavigation){const l=e.href;l&&(e.external?window.open(l,"_blank","noopener"):window.location.href=l)}}},this.onKeyDown=e=>{switch(e.key.toLowerCase()){case"arrowleft":this.previousTab();break;case"arrowright":this.nextTab();break;case"home":this.firstTab();break;case"end":this.lastTab();break}},this.onTabClicked=e=>{const{tab:t}=e.detail;this.selectTab(t,!0)},this.onTabLinkClicked=e=>{const{tab:t}=e.detail;this.selectTab(t)},this.handleMobileMediaQueryChange=e=>{this.setMobileState(e.matches)},this.onMobileToggle=()=>{this.mobileDropdownOpen=!this.mobileDropdownOpen,this.mobileDropdownOpen?(this.mobileDropdownFocusedIndex=0,requestAnimationFrame(()=>{this.focusMobileOption(this.mobileDropdownFocusedIndex)})):this.mobileToggleButton?.focus()},this.onMobileListboxKeyDown=e=>{if(!this.mobileDropdownOpen)return;const t=e.key.toLowerCase(),s=this.mobileOptions.length;switch(t){case"arrowdown":e.preventDefault(),this.mobileDropdownFocusedIndex=this.mobileDropdownFocusedIndex===s-1?0:this.mobileDropdownFocusedIndex+1,this.focusMobileOption(this.mobileDropdownFocusedIndex);break;case"arrowup":e.preventDefault(),this.mobileDropdownFocusedIndex=this.mobileDropdownFocusedIndex===0?s-1:this.mobileDropdownFocusedIndex-1,this.focusMobileOption(this.mobileDropdownFocusedIndex);break;case"home":e.preventDefault(),this.mobileDropdownFocusedIndex=0,this.focusMobileOption(this.mobileDropdownFocusedIndex);break;case"end":e.preventDefault(),this.mobileDropdownFocusedIndex=s-1,this.focusMobileOption(this.mobileDropdownFocusedIndex);break;case"enter":case" ":e.preventDefault(),this.mobileDropdownFocusedIndex>=0&&(this.selectTab(this.allTabs[this.mobileDropdownFocusedIndex],!1,!0),this.onMobileToggle(),this.mobileToggleButton?.focus());break;case"escape":e.preventDefault(),this.onMobileToggle(),this.mobileToggleButton?.focus();break}}}static get styles(){return[_,P]}get mobileOptions(){return this.allTabs.map((e,t)=>({label:e.textContent||"",value:String(t),selected:t===this.selectedTabIndex}))||[]}get mobileToggleButton(){return this.shadowRoot?.querySelector(".vl-tabs__mobile-toggle")?.shadowRoot?.querySelector("button")||null}get allTabs(){const e=this.shadowRoot?.querySelector("nav slot");return e?e.assignedElements().filter(t=>t instanceof b||t instanceof c):[]}get selectedTab(){return this.allTabs.find(e=>e.selected===!0)}get selectedTabIndex(){return this.selectedTab?this.allTabs.indexOf(this.selectedTab):-1}previousTab(){const{selectedTabIndex:e}=this;if(e===-1)return;const t=e===0?this.allTabs.length-1:e-1;this.selectTab(this.allTabs[t],!0)}nextTab(){const{selectedTabIndex:e}=this;if(e===-1)return;const t=e===this.allTabs.length-1?0:e+1;this.selectTab(this.allTabs[t],!0)}firstTab(){this.selectTab(this.allTabs[0],!0)}lastTab(){this.selectTab(this.allTabs[this.allTabs.length-1],!0)}firstUpdated(){this.ensureSelectedTab(),this.mobileMediaQuery=window.matchMedia(`(max-width: ${T}px)`),this.setMobileState(this.mobileMediaQuery.matches),this.mobileMediaQuery.addEventListener("change",this.handleMobileMediaQueryChange)}updated(){this.ensureSelectedTab()}setMobileState(e){this.mobile=e,this.mobile?this.allTabs.forEach(t=>{t instanceof c&&t.removeAttribute("role")}):(this.mobileDropdownFocusedIndex=-1,this.mobileDropdownOpen=!1,this.allTabs.forEach(t=>{t instanceof c&&t.setAttribute("role","listitem")}))}ensureSelectedTab(){if(this.allTabs.length===0)return;if(!this.allTabs.find(t=>t.selected===!0)){this.selectTab(this.allTabs[0],!1,!1);return}}connectedCallback(){super.connectedCallback(),this.addEventListener("vl-tab-click",this.onTabClicked),this.addEventListener("vl-tab-link-click",this.onTabLinkClicked),this.horizontalNavigation||this.addEventListener("keydown",this.onKeyDown),this.addEventListener("keydown",this.onMobileListboxKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("vl-tab-click",this.onTabClicked),this.removeEventListener("vl-tab-link-click",this.onTabLinkClicked),this.removeEventListener("keydown",this.onKeyDown),this.removeEventListener("keydown",this.onMobileListboxKeyDown),this.mobileMediaQuery&&(this.mobileMediaQuery.removeEventListener("change",this.handleMobileMediaQueryChange),this.mobileMediaQuery=void 0)}render(){return r` ${this.mobile?this.renderMobile():this.renderDesktop()} `}renderDesktop(){return r`<div class="vl-tabs ${this.noBorder?"vl-tabs--no-border":""}">
                <nav
                    id="tabs-nav"
                    aria-label="${u(this.label?this.label:void 0)}"
                    role="${u(this.horizontalNavigation?void 0:"tablist")}"
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
                    aria-label="${u(this.label||void 0)}"
                    aria-multiselectable="false"
                    class="vl-tabs__mobile-dropdown"
                    ?hidden="${!this.mobileDropdownOpen}"
                >
                    ${this.mobileOptions.map((t,s)=>r`
                            <div
                                id="tab-option-${s}"
                                tabindex="0"
                                role="option"
                                aria-selected="${t.selected?"true":"false"}"
                                class="vl-tabs__mobile-option"
                                @click="${()=>{this.selectTab(this.allTabs[Number(t.value)]),this.mobileDropdownFocusedIndex=-1,this.onMobileToggle()}}"
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
        `}};p([d({type:Boolean,reflect:!0,attribute:"horizontal-navigation"})],h.prototype,"horizontalNavigation",2);p([d({type:String,reflect:!0,attribute:"label"})],h.prototype,"label",2);p([d({type:Boolean,reflect:!0,attribute:"no-border"})],h.prototype,"noBorder",2);p([d({type:Boolean})],h.prototype,"mobile",2);p([d({type:Boolean})],h.prototype,"mobileDropdownOpen",2);p([d({type:Number})],h.prototype,"mobileDropdownFocusedIndex",2);h=p([w("vl-tabs-next")],h);export{h as V,c as a,b,f as c};
