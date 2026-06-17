import{i as w,be as E,E as S,cC as D,x as b,T as v,r as V,d as _,bI as W,Q as P,cD as T,B as j,bt as G,aW as X,aV as J,H as p,w as K}from"./iframe-nqJ0ju39.js";const k=w`
    color: var(--vl-color--text);
    position: relative;
    font-weight: 500;
`,L=w`
    content: '';
    height: 90%;
    display: block;
    position: absolute;
    left: -12px;
    top: 1px;
    bottom: 0;
    width: 3px;
    background-color: var(--vl-color--action-400);
`,Y=w`
    flex-shrink: 0;
    width: 2.4rem;
    height: 2.4rem;
    margin: 0;

    &::part(button) {
        padding: 0;
        min-height: unset;
        width: 2.4rem;
        height: 2.4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.3rem;

        .vl-icon {
            transition: transform 0.1s ease-in-out;
        }
    }

    &.showing-children::part(button) .vl-icon {
        transform: rotate(90deg);
    }
`,Z=w`
    display: flex;
    align-items: center;
    gap: 0;
    margin: 13px 0;

    vl-link {
        flex: 1;
        display: block;
        width: auto;
        margin: 0;
        padding-right: var(--vl-spacing--xxsmall);
    }

    a {
        flex: 1;
        display: block;
        width: auto;
        margin: 0;
        padding-right: var(--vl-spacing--xxsmall);
    }
`,ee=w`
    vl-side-navigation-next {
        a.active {
            ${k}

            &::before {
                ${L}
            }
        }

        vl-link.active {
            position: relative;
            display: inline-block;

            &::before {
                ${L}
            }
        }

        vl-link.active::part(link) {
            ${k}
        }

        /* Match auto-generated nav link text-decoration and font-weight for custom TOC */
        a {
            text-decoration: none;
            font-weight: 500;

            &:hover {
                text-decoration: underline;
            }

            &:focus {
                text-decoration: underline;
                ${E()}
            }
        }

        vl-link::part(link) {
            text-decoration: none;
            font-weight: 500;

            &:hover {
                text-decoration: underline;
            }

            &:focus {
                text-decoration: underline;
                ${E()}
            }
        }

        /* Custom TOC styles for slotted content */
        ul {
            list-style: none;
            padding: 0;
            margin: 0;

            ul {
                display: block;
                padding: 0 0 0.15rem var(--vl-spacing--normal);

                &[hidden] {
                    display: none;
                }
            }
        }

        li {
            margin: 0;
            padding: 0;
        }

        .nav-item-wrapper {
            ${Z}

            vl-button.toggle-button {
                ${Y}
            }
        }

        /* ensure nested lists don't have the wrapper margin */
        li ul .nav-item-wrapper {
            margin: 0;
        }
    }

    vl-side-navigation-next[child-spacing="medium"] {
        ul ul {
            padding-bottom: 0;
        }

        li ul li {
            margin: var(--vl-side-navigation--child-spacing-margin) 0;

            /* reset: li provides the spacing, not the nested .nav-item-wrapper */
            .nav-item-wrapper {
                margin: 0;
            }
        }
    }
`,q=w`
    :host {
        position: static;
        display: contents;
    }

    table-of-contents {
        position: fixed;
        top: initial;
        left: 0;
        bottom: 0;
        min-height: 10rem;
        max-height: calc(100vh - 15rem);
        background: #fff;
        box-shadow: 0 0 2.1rem rgba(0, 0, 0, 0.3);
        width: -webkit-fill-available;
        margin: var(--vl-spacing--small);
        padding: var(--vl-spacing--small) var(--vl-spacing--medium);
    }

    nav {
        font-size: 1.6rem;
    }

    #close-button {
        display: block;
        position: absolute;
        top: 0;
        right: 50%;
        transform: translate(50%, -50%);

        &::part(button) {
            border-radius: 5rem;
        }
    }

    #show-toc-button:not([hidden]) {
        display: block;
        position: fixed;
        bottom: var(--vl-spacing--large);
        right: 0;

        &::part(button) {
            padding: var(--vl-spacing--xsmall) 0 var(--vl-spacing--xsmall) var(--vl-spacing--xsmall);
            border-radius: 5rem 0 0 5rem;
        }
    }

    [hidden] {
        display: none;
    }
`,te=w`
    :host {
        display: block;
        align-self: start;
        position: sticky;
        top: var(--vl-side-navigation-top, 50px);
        z-index: 1000;
    }

    :host {
        @media screen and (max-width: ${S}px) {
            ${q}
        }
    }

    :host([compact]) {
        ${q} @media screen and (width > ${S}px) {
            table-of-contents {
                min-width: 320px;
                width: fit-content;
                max-width: 90vw;
                left: unset;
                right: 0;
                overflow-y: unset;
            }
        }
    }

    table-of-contents {
        height: fit-content;
        max-height: 90vh;
        padding: 0 var(--vl-spacing--small);
        font-family: 'Flanders Art Sans', sans-serif;
        background-color: var(--vl-color--white);
    }

    @media screen and (width > ${S}px) {
        table-of-contents {
            overflow-y: auto;
        }
    }

    .navigation-title {
        margin-bottom: var(--vl-spacing--normal);
        font-size: var(--vl-font-size--small);
        text-transform: uppercase;
        letter-spacing: 1px;
        color: var(--vl-color--text-subtle);
        font-weight: 500;
    }

    nav {
        background-color: var(--vl-color--white);
        padding: var(--vl-spacing--small);
        overflow-y: auto;
        font-size: var(--vl-font-size--small);

        a,
        button {
            display: block;
            font-weight: 500;
            margin: 13px 0;
            text-decoration: none;
            position: relative;
            padding: 0;
            background: none;
            border: none;
            cursor: pointer;
            font-family: inherit;
            font-size: inherit;
            text-align: left;
            width: 100%;

            &:hover {
                text-decoration: underline;
                background-color: transparent;
            }

            &:focus {
                text-decoration: underline;
                background-color: transparent;
                ${E()}
            }

            &.active {
                ${k}
                background-color: transparent;
                border-left: none;

                &::before {
                    ${L}
                }
            }
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;

            ul {
                display: block;
                padding: 0 0 0.15rem var(--vl-spacing--normal);

                &[hidden] {
                    display: none;
                }

                a,
                button {
                    margin: 0;
                }
            }
        }

        li {
            margin: 0;
            padding: 0;

            .nav-item-wrapper {
                display: flex;
                align-items: center;
                gap: 0;
                margin: 13px 0;

                a {
                    flex: 1;
                    display: block;
                    width: auto;
                    margin: 0 var(--vl-spacing--xxsmall) 0 0;
                    padding-right: var(--vl-spacing--xxsmall);
                }

                button.toggle-button {
                    flex-shrink: 0;
                    width: 2.4rem;
                    height: 2.4rem;
                    padding: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0;
                    border-radius: 0.3rem;
                    color: var(--vl-color--action-400);

                    &:hover {
                        background-color: transparent;
                        color: var(--vl-color--text);
                        text-decoration: none;
                    }

                    &:focus {
                        ${E()}
                        background-color: transparent;
                    }

                    i.vl-icon {
                        &::before {
                            transition: transform 0.1s ease-in-out;
                        }

                        &.showing-children::before {
                            transform: rotate(90deg);
                        }
                    }
                }
            }

            /* ensure nested lists don't have the wrapper margin */

            ul li .nav-item-wrapper {
                margin: 0;
            }
        }

        @media screen and (max-width: ${S}px) {
            max-height: 60vh;
        }
    }

    :host([child-spacing="medium"]) nav {
        ul ul {
            padding-bottom: 0;

            a,
            button {
                margin: var(--vl-side-navigation--child-spacing-margin) 0;
            }
        }

        li ul li .nav-item-wrapper {
            margin: var(--vl-side-navigation--child-spacing-margin) 0;

            /* reset: wrapper provides the spacing, not the individual a/button */
            a,
            button {
                margin: 0;
            }
        }
    }

    #close-button,
    #show-toc-button {
        display: none;
    }

    @media screen and (width > ${S}px) {
        :host {
            order: 1;

            /* Firefox standard properties */
            scrollbar-width: thin;
            scrollbar-color: var(--vl-color--grey-200) transparent;

            /* Webkit browsers (Chrome, Safari, Edge) */

            &::-webkit-scrollbar {
                width: 16px;
                height: 20px;

                &-thumb {
                    height: 8px;
                    border: 6px solid rgba(0, 0, 0, 0);
                    border-radius: 7px;
                    background-clip: padding-box;
                    background-color: var(--vl-color--grey-200);
                }

                &-button {
                    display: none;
                    width: 0;
                    height: 0;
                }

                &-corner {
                    background-color: transparent;
                }
            }
        }
    }
`,ie=(e,{selector:t="vl-title, h1, h2, h3, h4, h5, h6",minLevel:i=1,maxLevel:s=6,maxDepth:n,excludeSelectors:o})=>{if(!e)return{elements:[],headings:[]};const a=Math.max(1,Math.min(6,Number(i)||1)),r=Math.max(1,Math.min(6,Number(s)||6)),g=D(e,t,n,0,o).filter(c=>{if(!(c instanceof HTMLElement))return!1;const y=c.getRootNode();return!(y instanceof ShadowRoot&&y.host&&y.host.tagName.toLowerCase()==="vl-title")}).map(c=>({element:c,level:oe(c)})).filter(({level:c})=>c!==null&&c>=a&&c<=r),f=new Map;g.forEach(({element:c,level:y})=>{const I=ne(c),x=c.getAttribute("id")?.trim()??"";x&&(f.has(x)||f.set(x,{element:c,level:y,text:I,id:x}))});const m=Array.from(f.values());return se(m),{elements:m.map(({element:c})=>c),headings:m}},ne=e=>A(e),H=e=>(e??"").replace(/\s+/g," ").trim(),A=(e,t=new Set)=>{if(t.has(e))return"";if(t.add(e),e.nodeType===Node.TEXT_NODE)return H(e.textContent);if(!(e instanceof Element||e instanceof ShadowRoot))return"";const i=[];if(e instanceof Element&&e.shadowRoot){const n=A(e.shadowRoot,t);return H(n)}return(e instanceof HTMLSlotElement?e.assignedNodes({flatten:!0}):Array.from(e.childNodes)).forEach(n=>{const o=A(n,t);o&&i.push(o)}),H(i.join(" "))};function se(e){e.sort((t,i)=>{const s=t.element.compareDocumentPosition(i.element);if(s&Node.DOCUMENT_POSITION_DISCONNECTED){const n=t.element.getBoundingClientRect(),o=i.element.getBoundingClientRect();return n.top-o.top}return s&Node.DOCUMENT_POSITION_FOLLOWING?-1:s&Node.DOCUMENT_POSITION_PRECEDING?1:0})}const oe=e=>{const t=e.tagName.toLowerCase(),i=t.match(/^h([1-6])$/);if(i)return parseInt(i[1],10);if(t==="vl-title"){const n=e.getAttribute("type"),o=e.type,r=(n||o||"h1").toLowerCase().match(/^h([1-6])$/);if(r)return parseInt(r[1],10)}const s=e.getAttribute("aria-level");if(s){const n=parseInt(s,10);if(!Number.isNaN(n))return n}return null},B=(e,t)=>{const i=e.querySelectorAll("slot");for(const s of Array.from(i))if(s instanceof HTMLSlotElement){const n=s.assignedElements({flatten:!0});for(const o of n){if("querySelector"in o){const a=o.querySelector(t);if(a)return a}if(o.matches&&o.matches(t))return o}}return null},ae=(e,t,i)=>{if(e&&t){const s=e.querySelector?.(t);if(s)return s;if(e!==document){const n=B(e,t);if(n)return n}return console.warn(`[vl-side-navigation-next] selector "${t}" not found within headingRoot. Using headingRoot as-is. Headings will be scanned from the entire headingRoot scope.`),e}if(e)return e;if(t){const s=i.querySelector(t);return s||(console.warn(`[vl-side-navigation-next] selector "${t}" not found in fallbackRoot. Using fallbackRoot as-is.`),i)}return i},re=e=>{const t=[];return e.forEach(i=>{[...i.querySelectorAll('a[href^="#"], vl-link[href^="#"]')].forEach(n=>{const o=n.getAttribute("href");if(o){const a=o.substring(1);a&&!t.includes(a)&&t.push(a)}})}),t},N=(e,t,i)=>{const s=`#${CSS.escape(e)}`,n=t.querySelector(s);if(n)return n;if(t instanceof Element||t instanceof ShadowRoot){const a=B(t,s);if(a instanceof HTMLElement)return a}const o=D(document,s,i);return o.length>0&&o[0]instanceof HTMLElement?o[0]:null};function le(e,t,i){const s=re(e);return s.length===0?[]:s.map(n=>N(n,t,i)).filter(n=>n!==null)}function we(e){const t=e.currentTarget,s=t.closest("li")?.querySelector(":scope > ul");if(!s)return;s.hasAttribute("hidden")?(s.removeAttribute("hidden"),t.setAttribute("aria-expanded","true"),t.setAttribute("aria-label","Inklappen"),t.classList.add("showing-children")):(s.setAttribute("hidden",""),t.setAttribute("aria-expanded","false"),t.setAttribute("aria-label","Uitklappen"),t.classList.remove("showing-children"))}function F(e,t="smooth",i=document,s){const o=e.currentTarget.getAttribute("href");if(!o||!o.startsWith("#"))return;const a=o.substring(1);if(!a)return;const r=N(a,i,s);r&&(e.preventDefault(),history.pushState(null,"",o),r.scrollIntoView({behavior:t,block:"start"}))}function ce(e,t="smooth",i=document,s,n){const o=n?{signal:n}:void 0;e.forEach(a=>{a.querySelectorAll('a[href^="#"], vl-link[href^="#"]').forEach(h=>{if(h.tagName.toLowerCase()==="vl-link"){const u=h.shadowRoot?.querySelector("a");u&&u.addEventListener("click",g=>F(g,t,i,s),o)}else h.addEventListener("click",u=>F(u,t,i,s),o)})})}function de(e){e.forEach(t=>{t.querySelectorAll("li > ul").forEach(n=>{n.setAttribute("hidden","")}),t.querySelectorAll(".toggle-button").forEach(n=>{n.setAttribute("aria-expanded","false"),n.setAttribute("aria-label","Uitklappen"),n.classList.remove("showing-children")})})}function he(e,t){e.forEach(i=>{i.querySelectorAll('a[href^="#"], vl-link[href^="#"]').forEach(n=>{const o=n.getAttribute("href");o&&(o.substring(1)===t?(n.classList.add("active"),n.setAttribute("aria-current","location")):(n.classList.remove("active"),n.removeAttribute("aria-current")))})})}function ue(e,t){for(const i of e){const s=i.querySelectorAll('a[href^="#"], vl-link[href^="#"]');for(const n of Array.from(s)){const o=n.getAttribute("href");if(o&&o.substring(1)===t)return n}}return null}function fe(e){const t=new Set;let i=e.closest("li");for(;i;){const s=i.parentElement;if(s&&s.tagName==="UL")t.add(s),i=s.parentElement?.closest("li")??null;else break}return t}function pe(e,t){const i=ue(e,t),s=i?fe(i):new Set;if(i){const o=i.closest("li")?.querySelector(":scope > ul");o&&s.add(o)}for(const n of e)n.querySelectorAll("li > ul").forEach(a=>{const r=s.has(a),h=typeof document<"u"&&document.activeElement?a.contains(document.activeElement):!1,u=r||h;u?a.removeAttribute("hidden"):a.setAttribute("hidden","");const f=a.parentElement?.querySelector(":scope > .nav-item-wrapper > .toggle-button");f&&(f.setAttribute("aria-expanded",String(u)),f.setAttribute("aria-label",u?"Inklappen":"Uitklappen"),u?f.classList.add("showing-children"):f.classList.remove("showing-children"))})}const ge=(e,t={scroll:{},state:{},callbacks:{}})=>{const i="headings"in e?z(e.headings):e;return i.length>0?U(i,t):b``},z=e=>{const t=[],i=[];return e.forEach(s=>{const n={item:s,children:[]};for(;i.length>0&&s.level<=i[i.length-1].item.level;)i.pop();i.length===0?t.push(n):i[i.length-1].children.push(n),i.push(n)}),t},U=(e,t,i,s)=>e.length?b`
        <ul id=${i??v} ?hidden=${s??!1}>
            ${e.map(n=>me(n,t))}
        </ul>
    `:b``,me=(e,t)=>{const{activeHeadingId:i,expandedHeadingIds:s}=t.state,{onActiveHeadingChange:n}=t.callbacks,{scrollRoot:o,scrollBehavior:a}=t.scroll,r=i===e.item.id,h=e.children.length>0,u=h&&O(e.children,i),g=s?.has(e.item.id)??!1,f=s?.has(`-${e.item.id}`)??!1,m=g||(r||u)&&!f,c=e.item.text||e.item.id,y=C=>{C.preventDefault();const $=e.item.element??N(e.item.id,o??document,t.scroll.maxDepth);$&&$.scrollIntoView({behavior:a??"smooth",block:"start"})},I=C=>{C.preventDefault(),C.stopPropagation(),n?.(e.item.id,!0)},x=b`<a
        href=${`#${e.item.id}`}
        class=${r?"active":""}
        aria-current=${r?"location":v}
        @click=${y}
    >
        ${c}
    </a>`,R=h?`toc-section-${e.item.id}`:void 0,Q=h?b`<button
              type="button"
              class="toggle-button"
              aria-expanded=${m?"true":"false"}
              aria-controls=${R||v}
              aria-label=${m?"Inklappen":"Uitklappen"}
              @click=${I}
          >
              <i class="vl-icon vl-icon--arrow-right-fat ${m?"showing-children":""}"></i>
          </button>`:v;return b`
        <li>
            <div class="nav-item-wrapper">${x}${Q}</div>
            ${h?U(e.children,t,R,!m):v}
        </li>
    `},O=(e,t)=>{if(!t)return!1;for(const i of e)if(i.item.id===t||i.children.length>0&&O(i.children,t))return!0;return!1},M=(e,t)=>{for(const i of e){if(i.item.id===t)return i;if(i.children.length>0){const s=M(i.children,t);if(s)return s}}return null};var ve=Object.defineProperty,be=Object.getOwnPropertyDescriptor,d=(e,t,i,s)=>{for(var n=s>1?void 0:s?be(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&ve(t,i,n),n};V([_,W,P]);let l=class extends j{constructor(){super(...arguments),this.compact=!1,this.childSpacing="small",this.headingElements=[],this.minLevel=2,this.maxLevel=3,this.isTableOfContentsHidden=!1,this.navigationTitle="Op deze pagina",this.activeHeadingId="",this.tocTemplate=b``,this.hasCustomToc=!1,this.expandedHeadingIds=new Set,this.isMobileView=!1,this.headingObserverMap=new Map,this.isTableOfContentsInitialized=!1,this.mediaQueryHandler=e=>this.handleMediaQueryChange(e),this.previousTocEffectivelyHidden=!1,this.closeSideNavigation=()=>{this.isTableOfContentsHidden=!0,this.updateComplete.then(()=>{this.shadowRoot?.querySelector("#show-toc-button")?.shadowRoot?.querySelector("button")?.focus()})},this.showSideNavigation=()=>{this.isTableOfContentsHidden=!1,this.updateComplete.then(()=>{this.shadowRoot?.querySelector("#side-navigation-toc")?.focus()})}}static get styles(){return[G,te,X(),J]}firstUpdated(){this.setupMediaQueryListener();const t=this.shadowRoot?.querySelector("slot")?.assignedElements()??[];t.length>0?this.initializeCustomToc(t):this.closest?.("vl-side-navigation-layout-next")?(this.buildTableOfContents(),this.setupIntersectionObserver()):requestAnimationFrame(()=>{this.isTableOfContentsInitialized||(this.buildTableOfContents(),this.setupIntersectionObserver())})}updated(e){if(e.has("headingRoot")&&this.hasCustomToc){const s=this.shadowRoot?.querySelector("slot")?.assignedElements()??[];s.length>0&&this.headingRoot&&this.extractHeadingIdsFromManualToc(s);return}if(e.has("headingRoot")&&!this.isTableOfContentsInitialized){const i=this.shadowRoot?.querySelector("slot");if(i){const s=i.assignedElements();s.length>0&&this.headingRoot?this.extractHeadingIdsFromManualToc(s):this.refreshTableOfContents()}else this.refreshTableOfContents()}(e.has("minLevel")||e.has("maxLevel")||e.has("headingRootSelector")||e.has("excludeSelectors"))&&this.isTableOfContentsInitialized&&this.refreshTableOfContents();const t=this.isTocEffectivelyHidden;if(t&&!this.previousTocEffectivelyHidden&&this.updateComplete.then(()=>this.handleTocVisibilityFocusRecovery()),this.previousTocEffectivelyHidden=t,(e.has("expandedHeadingIds")||e.has("activeHeadingId"))&&this.isFocusInsideNav()){const i=this.getDeepActiveElement();if(i&&(i.offsetParent===null||i.hasAttribute("hidden")||i.getAttribute("aria-hidden")==="true")){const n=i;this.updateComplete.then(()=>this.moveFocusToLogicalNeighbor(n))}}}connectedCallback(){super.connectedCallback(),this.isTableOfContentsInitialized&&!this.intersectionObserver&&this.setupIntersectionObserver(),this.setupMediaQueryListener(),this.updateComplete.then(()=>this.setupFocusRecoveryObserver())}disconnectedCallback(){super.disconnectedCallback(),this.cleanupIntersectionObserver(),this.cleanupMediaQueryListener(),this.cleanupFocusRecoveryObserver(),this.cleanupCustomTocLinkHandlers()}setupMediaQueryListener(){this.mediaQueryList||(this.mediaQueryList=window.matchMedia(`(min-width: ${S+1}px)`),this.isMobileView=!this.mediaQueryList.matches,this.mediaQueryList.addEventListener("change",this.mediaQueryHandler))}cleanupMediaQueryListener(){this.mediaQueryList&&(this.mediaQueryList.removeEventListener("change",this.mediaQueryHandler),this.mediaQueryList=void 0)}cleanupCustomTocLinkHandlers(){this.customTocAbortController?.abort(),this.customTocAbortController=void 0}handleTocVisibilityFocusRecovery(){if(!this.isTocEffectivelyHidden||!this.isFocusInsideNav())return;this.shadowRoot?.querySelector("#show-toc-button")?.shadowRoot?.querySelector("button")?.focus()}getFocusableElementsInNav(){const e=this.shadowRoot?.querySelector("nav");if(!e)return[];const t=[],i=e.querySelector("slot");if(i&&i instanceof HTMLSlotElement){const n=i.assignedElements({flatten:!0});for(const o of n)this.collectFocusablesInTreeOrder(o,t)}return e.querySelectorAll("a[href], button").forEach(n=>{n instanceof HTMLElement&&t.push(n)}),t}collectFocusablesInTreeOrder(e,t){e instanceof HTMLElement&&(e.matches?.("a[href]")||e.matches?.("button"))&&t.push(e);const i=[];e instanceof HTMLSlotElement?i.push(...e.assignedElements({flatten:!0})):e.shadowRoot&&i.push(...Array.from(e.shadowRoot.children)),i.push(...Array.from(e.children));for(const s of i)this.collectFocusablesInTreeOrder(s,t)}getDeepActiveElement(){if(typeof document>"u")return null;let e=document.activeElement;for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}isFocusInsideNav(){const e=this.shadowRoot?.querySelector("nav");if(!e)return!1;const t=this.getDeepActiveElement();if(!t)return!1;if(e.contains(t))return!0;const i=e.querySelector("slot");return(i instanceof HTMLSlotElement?i.assignedElements({flatten:!0}):[]).some(n=>n===t||n.contains(t))}moveFocusToLogicalNeighbor(e){const t=this.getFocusableElementsInNav(),i=t.filter(n=>n.offsetParent!==null&&!n.hasAttribute("hidden")&&n.getAttribute("aria-hidden")!=="true");if(i.length===0){this.shadowRoot?.querySelector("#show-toc-button")?.shadowRoot?.querySelector("button")?.focus();return}const s=n=>{n.tagName.toLowerCase()==="vl-link"?n.shadowRoot?.querySelector("a")?.focus():n.focus()};if(this.activeHeadingId){const n=i.find(o=>(o.getAttribute("href")||o.closest("vl-link")?.getAttribute("href"))===`#${this.activeHeadingId}`);if(n){s(n);return}}if(e){const n=t.indexOf(e);if(n!==-1){const o=t.slice(0,n).reverse().find(r=>i.includes(r));if(o){s(o);return}const a=t.slice(n+1).find(r=>i.includes(r));if(a){s(a);return}}}s(i[0])}setupFocusRecoveryObserver(){if(this.focusRecoveryMutationObserver)return;const e=()=>{if(this.isFocusInsideNav()){const i=this.getDeepActiveElement();this.lastFocusedNavElement=i?new WeakRef(i):void 0}};this.shadowRoot?.addEventListener("focusin",e),this.addEventListener("focusin",e),this.focusRecoveryMutationObserver=new MutationObserver(i=>{if(typeof document>"u"||this.getDeepActiveElement()!==document.body)return;const n=this.lastFocusedNavElement?.deref();if(!n)return;i.some(a=>Array.from(a.removedNodes).some(r=>r===n||r.contains(n)))&&(this.lastFocusedNavElement=void 0,this.moveFocusToLogicalNeighbor(n))});const t=this.shadowRoot?.querySelector("nav");t&&this.focusRecoveryMutationObserver.observe(t,{childList:!0,subtree:!0}),this.focusRecoveryMutationObserver.observe(this,{childList:!0,subtree:!0})}cleanupFocusRecoveryObserver(){this.focusRecoveryMutationObserver&&(this.focusRecoveryMutationObserver.disconnect(),this.focusRecoveryMutationObserver=void 0)}handleMediaQueryChange(e){this.isMobileView=!e.matches,e.matches&&this.isTableOfContentsHidden&&!this.compact&&(this.isTableOfContentsHidden=!1)}get isTocEffectivelyHidden(){return(this.compact||this.isMobileView)&&this.isTableOfContentsHidden}get effectiveScrollBehavior(){return typeof window>"u"?"smooth":window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"}setupIntersectionObserver(){this.cleanupIntersectionObserver();const e={root:null,rootMargin:"0px 0px -70% 0px",threshold:0};this.intersectionObserver=new IntersectionObserver(t=>this.handleIntersection(t),e),this.headingElements.forEach(t=>{const i=t.getAttribute("id");i&&(this.headingObserverMap.set(i,t),this.intersectionObserver?.observe(t))})}handleIntersection(e){const t=e.filter(i=>i.isIntersecting);if(t.length>0){const s=t.reduce((n,o)=>o.boundingClientRect.top<n.boundingClientRect.top?o:n).target.getAttribute("id");s&&s!==this.activeHeadingId&&(this.activeHeadingId=s,this.updateActiveLinks())}}updateActiveLinks(){this.hasCustomToc?this.updateManualTocActiveStates():this.updateTableOfContents(),this.dispatchEvent(new CustomEvent("active-heading-changed",{detail:{activeHeadingId:this.activeHeadingId},bubbles:!0}))}cleanupIntersectionObserver(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0),this.headingObserverMap.clear()}updateObservedElements(e){this.headingElements=e,this.setupIntersectionObserver()}render(){const e=this.compact||this.isMobileView;return b`
            <table-of-contents
                id="side-navigation-toc"
                part="toc"
                role=${e?"dialog":"region"}
                aria-modal=${e?"true":v}
                aria-labelledby="side-navigation-title"
                ?hidden=${this.isTocEffectivelyHidden}
                tabindex="-1"
            >
                <span id="side-navigation-title" class="navigation-title">${this.navigationTitle}</span>
                <vl-button
                    icon="cross"
                    id="close-button"
                    label="sluit inhoudstafel navigatie"
                    aria-controls="side-navigation-toc"
                    @vl-click=${this.closeSideNavigation}
                ></vl-button>
                <nav aria-label="inhoudstafel navigatie">
                    <slot @slotchange=${this.handleTocSlotChange}></slot>
                    ${this.hasCustomToc?v:this.tocTemplate||v}
                </nav>
            </table-of-contents>
            <vl-button
                ?hidden=${!this.isTocEffectivelyHidden}
                icon="drawer-down"
                id="show-toc-button"
                label="toon inhoudstafel navigatie"
                aria-controls="side-navigation-toc"
                aria-expanded=${this.isTocEffectivelyHidden?"false":"true"}
                @vl-click=${this.showSideNavigation}
            ></vl-button>
        `}handleTocSlotChange(e){const i=e.target.assignedElements();i.length>0?this.initializeCustomToc(i):(this.hasCustomToc=!1,this.refreshTableOfContents())}initializeCustomToc(e){this.hasCustomToc=!0,this.extractHeadingIdsFromManualToc(e),this.adoptLightDomStyles(),de(e);const t=this.headingRoot??this.getRootNode();this.cleanupCustomTocLinkHandlers(),this.customTocAbortController=new AbortController,ce(e,this.effectiveScrollBehavior,t,this.maxDepth,this.customTocAbortController.signal),this.setupIntersectionObserver()}adoptLightDomStyles(){l.lightDomStyleSheet||(l.lightDomStyleSheet=new CSSStyleSheet,l.lightDomStyleSheet.replaceSync(ee.toString())),document.adoptedStyleSheets.includes(l.lightDomStyleSheet)||(document.adoptedStyleSheets=[...document.adoptedStyleSheets,l.lightDomStyleSheet])}extractHeadingIdsFromManualToc(e){const t=this.headingRoot??this.getRootNode(),i=le(e,t,this.maxDepth);i.length>0&&(this.headingElements=i,this.setupIntersectionObserver())}updateManualTocActiveStates(){const e=this.shadowRoot?.querySelector("slot");if(!e)return;const t=e.assignedElements();he(t,this.activeHeadingId),pe(t,this.activeHeadingId)}get tableOfContents(){return this.shadowRoot?.querySelector("table-of-contents")}buildTableOfContents(){const e=ae(this.headingRoot,this.headingRootSelector,this.getRootNode());this.tableOfContentsStructure=ie(e,{minLevel:this.minLevel,maxLevel:this.maxLevel,maxDepth:this.maxDepth,excludeSelectors:this.excludeSelectors}),this.headingElements=this.tableOfContentsStructure.elements,this.updateObservedElements(this.headingElements),this.updateTableOfContents(),this.isTableOfContentsInitialized=!0}updateTableOfContents(){if(!this.tableOfContentsStructure)return;const e=this.headingRoot??this.getRootNode(),t=z(this.tableOfContentsStructure.headings),i=Array.from(this.expandedHeadingIds).filter(s=>{if(!s.startsWith("-"))return!0;const n=s.substring(1),o=M(t,n),a=this.activeHeadingId===n,r=o?O(o.children,this.activeHeadingId):!1;return a||r});i.length!==this.expandedHeadingIds.size&&(this.expandedHeadingIds=new Set(i)),this.tocTemplate=ge(t,{scroll:{scrollRoot:e,scrollBehavior:this.effectiveScrollBehavior,maxDepth:this.maxDepth},state:{activeHeadingId:this.activeHeadingId,expandedHeadingIds:this.expandedHeadingIds},callbacks:{onActiveHeadingChange:(s,n)=>{if(n&&this.tableOfContentsStructure){const o=this.expandedHeadingIds.has(s),a=this.expandedHeadingIds.has(`-${s}`),r=this.activeHeadingId===s,h=M(t,s),u=h?O(h.children,this.activeHeadingId):!1,g=r||u;o?(this.expandedHeadingIds.delete(s),g&&this.expandedHeadingIds.add(`-${s}`)):a?(this.expandedHeadingIds.delete(`-${s}`),this.expandedHeadingIds.add(s)):g?this.expandedHeadingIds.add(`-${s}`):this.expandedHeadingIds.add(s),this.expandedHeadingIds=new Set(this.expandedHeadingIds),this.updateTableOfContents()}}}})}refreshTableOfContents(){this.tableOfContentsStructure=void 0,this.isTableOfContentsInitialized=!1,this.buildTableOfContents()}};d([p({type:Boolean,reflect:!0})],l.prototype,"compact",2);d([p({type:String,reflect:!0,attribute:"child-spacing"})],l.prototype,"childSpacing",2);d([p({type:Array})],l.prototype,"headingElements",2);d([p({attribute:!1})],l.prototype,"headingRoot",2);d([p({type:String,attribute:"heading-root-selector"})],l.prototype,"headingRootSelector",2);d([p({type:Number,attribute:"min-level"})],l.prototype,"minLevel",2);d([p({type:Number,attribute:"max-level"})],l.prototype,"maxLevel",2);d([p({type:Boolean,attribute:"closed",reflect:!0})],l.prototype,"isTableOfContentsHidden",2);d([p({type:Number,attribute:"max-depth"})],l.prototype,"maxDepth",2);d([p({type:String,attribute:"exclude-selectors"})],l.prototype,"excludeSelectors",2);d([p({type:String,attribute:"navigation-title"})],l.prototype,"navigationTitle",2);d([T()],l.prototype,"activeHeadingId",2);d([T()],l.prototype,"tocTemplate",2);d([T()],l.prototype,"hasCustomToc",2);d([T()],l.prototype,"expandedHeadingIds",2);d([T()],l.prototype,"isMobileView",2);l=d([K("vl-side-navigation-next")],l);export{l as V,we as t};
