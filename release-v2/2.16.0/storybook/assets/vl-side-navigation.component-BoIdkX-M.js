import{i as y,bd as E,E as x,cE as z,x as g,T as m,r as V,d as _,bH as W,Q as j,cF as S,B as G,bs as X,aW as J,aV as K,H as f,w as P}from"./iframe-B0laZkYe.js";const A=y`
    color: var(--vl-color--text);
    position: relative;
    font-weight: 500;
`,k=y`
    content: '';
    height: 90%;
    display: block;
    position: absolute;
    left: -12px;
    top: 1px;
    bottom: 0;
    width: 3px;
    background-color: var(--vl-color--action-400);
`,Y=y`
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
`,Z=y`
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
`,ee=y`
    vl-side-navigation-next {
        a.active {
            ${A}

            &::before {
                ${k}
            }
        }

        vl-link.active {
            position: relative;
            display: inline-block;

            &::before {
                ${k}
            }
        }

        vl-link.active::part(link) {
            ${A}
        }

        &[multi-active] a.active::before,
        &[multi-active] vl-link.active::before {
            display: none;
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
`,q=y`
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
`,te=y`
    :host {
        display: block;
        align-self: start;
        position: sticky;
        top: var(--vl-side-navigation-top, 50px);
        z-index: 1000;
    }

    :host {
        @media screen and (max-width: ${x}px) {
            ${q}
        }
    }

    :host([compact]) {
        ${q} @media screen and (width > ${x}px) {
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

    @media screen and (width > ${x}px) {
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
        position: relative;
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
                ${A}
                background-color: transparent;
                border-left: none;

                &::before {
                    ${k}
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

        @media screen and (max-width: ${x}px) {
            max-height: 60vh;
        }
    }

    /* The continuous active-indicator line, positioned by the component over the run of active items.
       Hidden until the component measures the active range and sets top/height. */
    nav .active-indicator-line {
        position: absolute;
        left: calc(var(--vl-spacing--small) - 12px);
        width: 3px;
        background-color: var(--vl-color--action-400);
        pointer-events: none;
        display: none;
    }

    /* Multi-active replaces the stepped per-item bars with the single far-left line. */
    :host([multi-active]) nav a.active::before,
    :host([multi-active]) nav button.active::before {
        display: none;
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

    @media screen and (width > ${x}px) {
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
`,ie=(e,{selector:t="vl-title, h1, h2, h3, h4, h5, h6",minLevel:i=1,maxLevel:n=6,maxDepth:s,excludeSelectors:o})=>{if(!e)return{elements:[],headings:[]};const a=Math.max(1,Math.min(6,Number(i)||1)),r=Math.max(1,Math.min(6,Number(n)||6)),u=z(e,t,s,0,o).filter(h=>{if(!(h instanceof HTMLElement))return!1;const b=h.getRootNode();return!(b instanceof ShadowRoot&&b.host&&b.host.tagName.toLowerCase()==="vl-title")}).map(h=>({element:h,level:oe(h)})).filter(({level:h})=>h!==null&&h>=a&&h<=r),T=new Map;u.forEach(({element:h,level:b})=>{const H=ne(h),w=h.getAttribute("id")?.trim()??"";w&&(T.has(w)||T.set(w,{element:h,level:b,text:H,id:w}))});const p=Array.from(T.values());return se(p),{elements:p.map(({element:h})=>h),headings:p}},ne=e=>L(e),O=e=>(e??"").replace(/\s+/g," ").trim(),L=(e,t=new Set)=>{if(t.has(e))return"";if(t.add(e),e.nodeType===Node.TEXT_NODE)return O(e.textContent);if(!(e instanceof Element||e instanceof ShadowRoot))return"";const i=[];if(e instanceof Element&&e.shadowRoot){const s=L(e.shadowRoot,t);return O(s)}return(e instanceof HTMLSlotElement?e.assignedNodes({flatten:!0}):Array.from(e.childNodes)).forEach(s=>{const o=L(s,t);o&&i.push(o)}),O(i.join(" "))};function se(e){e.sort((t,i)=>{const n=t.element.compareDocumentPosition(i.element);if(n&Node.DOCUMENT_POSITION_DISCONNECTED){const s=t.element.getBoundingClientRect(),o=i.element.getBoundingClientRect();return s.top-o.top}return n&Node.DOCUMENT_POSITION_FOLLOWING?-1:n&Node.DOCUMENT_POSITION_PRECEDING?1:0})}const oe=e=>{const t=e.tagName.toLowerCase(),i=t.match(/^h([1-6])$/);if(i)return parseInt(i[1],10);if(t==="vl-title"){const s=e.getAttribute("type"),o=e.type,r=(s||o||"h1").toLowerCase().match(/^h([1-6])$/);if(r)return parseInt(r[1],10)}const n=e.getAttribute("aria-level");if(n){const s=parseInt(n,10);if(!Number.isNaN(s))return s}return null},B=(e,t)=>{const i=e.querySelectorAll("slot");for(const n of Array.from(i))if(n instanceof HTMLSlotElement){const s=n.assignedElements({flatten:!0});for(const o of s){if("querySelector"in o){const a=o.querySelector(t);if(a)return a}if(o.matches&&o.matches(t))return o}}return null},ae=(e,t,i)=>{if(e&&t){const n=e.querySelector?.(t);if(n)return n;if(e!==document){const s=B(e,t);if(s)return s}return console.warn(`[vl-side-navigation-next] selector "${t}" not found within headingRoot. Using headingRoot as-is. Headings will be scanned from the entire headingRoot scope.`),e}if(e)return e;if(t){const n=i.querySelector(t);return n||(console.warn(`[vl-side-navigation-next] selector "${t}" not found in fallbackRoot. Using fallbackRoot as-is.`),i)}return i},re=e=>{const t=[];return e.forEach(i=>{[...i.querySelectorAll('a[href^="#"], vl-link[href^="#"]')].forEach(s=>{const o=s.getAttribute("href");if(o){const a=o.substring(1);a&&!t.includes(a)&&t.push(a)}})}),t},M=(e,t,i)=>{const n=`#${CSS.escape(e)}`,s=t.querySelector(n);if(s)return s;if(t instanceof Element||t instanceof ShadowRoot){const a=B(t,n);if(a instanceof HTMLElement)return a}const o=z(document,n,i);return o.length>0&&o[0]instanceof HTMLElement?o[0]:null};function le(e,t,i){const n=re(e);return n.length===0?[]:n.map(s=>M(s,t,i)).filter(s=>s!==null)}function we(e){const t=e.currentTarget,n=t.closest("li")?.querySelector(":scope > ul");if(!n)return;n.hasAttribute("hidden")?(n.removeAttribute("hidden"),t.setAttribute("aria-expanded","true"),t.setAttribute("aria-label","Inklappen"),t.classList.add("showing-children")):(n.setAttribute("hidden",""),t.setAttribute("aria-expanded","false"),t.setAttribute("aria-label","Uitklappen"),t.classList.remove("showing-children"))}function F(e,t="smooth",i=document,n){const o=e.currentTarget.getAttribute("href");if(!o||!o.startsWith("#"))return;const a=o.substring(1);if(!a)return;const r=M(a,i,n);r&&(e.preventDefault(),history.pushState(null,"",o),r.scrollIntoView({behavior:t,block:"start"}))}function ce(e,t="smooth",i=document,n,s){const o=s?{signal:s}:void 0;e.forEach(a=>{a.querySelectorAll('a[href^="#"], vl-link[href^="#"]').forEach(d=>{if(d.tagName.toLowerCase()==="vl-link"){const v=d.shadowRoot?.querySelector("a");v&&v.addEventListener("click",u=>F(u,t,i,n),o)}else d.addEventListener("click",v=>F(v,t,i,n),o)})})}function de(e){e.forEach(t=>{t.querySelectorAll("li > ul").forEach(s=>{s.setAttribute("hidden","")}),t.querySelectorAll(".toggle-button").forEach(s=>{s.setAttribute("aria-expanded","false"),s.setAttribute("aria-label","Uitklappen"),s.classList.remove("showing-children")})})}function he(e,t){e.forEach(i=>{i.querySelectorAll('a[href^="#"], vl-link[href^="#"]').forEach(s=>{const o=s.getAttribute("href");if(o){const a=o.substring(1);t.has(a)?(s.classList.add("active"),s.setAttribute("aria-current","location")):(s.classList.remove("active"),s.removeAttribute("aria-current"))}})})}function ue(e,t){for(const i of e){const n=i.querySelectorAll('a[href^="#"], vl-link[href^="#"]');for(const s of Array.from(n)){const o=s.getAttribute("href");if(o&&o.substring(1)===t)return s}}return null}function fe(e){const t=new Set;let i=e.closest("li");for(;i;){const n=i.parentElement;if(n&&n.tagName==="UL")t.add(n),i=n.parentElement?.closest("li")??null;else break}return t}function ve(e,t){const i=new Set;for(const n of t){const s=ue(e,n);if(!s)continue;for(const r of fe(s))i.add(r);const a=s.closest("li")?.querySelector(":scope > ul");a&&i.add(a)}for(const n of e)n.querySelectorAll("li > ul").forEach(o=>{const a=i.has(o),r=typeof document<"u"&&document.activeElement?o.contains(document.activeElement):!1,d=a||r;d?o.removeAttribute("hidden"):o.setAttribute("hidden","");const u=o.parentElement?.querySelector(":scope > .nav-item-wrapper > .toggle-button");u&&(u.setAttribute("aria-expanded",String(d)),u.setAttribute("aria-label",d?"Inklappen":"Uitklappen"),d?u.classList.add("showing-children"):u.classList.remove("showing-children"))})}const pe=(e,t={scroll:{},state:{},callbacks:{}})=>{const i="headings"in e?D(e.headings):e;return i.length>0?U(i,t):g``},D=e=>{const t=[],i=[];return e.forEach(n=>{const s={item:n,children:[]};for(;i.length>0&&n.level<=i[i.length-1].item.level;)i.pop();i.length===0?t.push(s):i[i.length-1].children.push(s),i.push(s)}),t},U=(e,t,i,n)=>e.length?g`
        <ul id=${i??m} ?hidden=${n??!1}>
            ${e.map(s=>me(s,t))}
        </ul>
    `:g``,me=(e,t)=>{const{activeHeadingIds:i,expandedHeadingIds:n}=t.state,{onActiveHeadingChange:s}=t.callbacks,{scrollRoot:o,scrollBehavior:a}=t.scroll,r=i?.has(e.item.id)??!1,d=e.children.length>0,v=d&&I(e.children,i),u=n?.has(e.item.id)??!1,T=n?.has(`-${e.item.id}`)??!1,p=u||(r||v)&&!T,h=e.item.text||e.item.id,b=C=>{C.preventDefault();const $=e.item.element??M(e.item.id,o??document,t.scroll.maxDepth);$&&$.scrollIntoView({behavior:a??"smooth",block:"start"})},H=C=>{C.preventDefault(),C.stopPropagation(),s?.(e.item.id,!0)},w=g`<a
        href=${`#${e.item.id}`}
        class=${r?"active":""}
        aria-current=${r?"location":m}
        @click=${b}
    >
        ${h}
    </a>`,N=d?`toc-section-${e.item.id}`:void 0,Q=d?g`<button
              type="button"
              class="toggle-button"
              aria-expanded=${p?"true":"false"}
              aria-controls=${N||m}
              aria-label=${p?"Inklappen":"Uitklappen"}
              @click=${H}
          >
              <i class="vl-icon vl-icon--arrow-right-fat ${p?"showing-children":""}"></i>
          </button>`:m;return g`
        <li>
            <div class="nav-item-wrapper">${w}${Q}</div>
            ${d?U(e.children,t,N,!p):m}
        </li>
    `},I=(e,t)=>{if(!t||t.size===0)return!1;for(const i of e)if(t.has(i.item.id)||i.children.length>0&&I(i.children,t))return!0;return!1},R=(e,t)=>{for(const i of e){if(i.item.id===t)return i;if(i.children.length>0){const n=R(i.children,t);if(n)return n}}return null};var ge=Object.defineProperty,be=Object.getOwnPropertyDescriptor,c=(e,t,i,n)=>{for(var s=n>1?void 0:n?be(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=(n?a(t,i,s):a(s))||s);return n&&s&&ge(t,i,s),s};V([_,W,j]);let l=class extends G{constructor(){super(...arguments),this.compact=!1,this.childSpacing="small",this.headingElements=[],this.minLevel=2,this.maxLevel=3,this.isTableOfContentsHidden=!1,this.navigationTitle="Op deze pagina",this.multiActive=!1,this.activeHeadingId="",this.activeHeadingIds=new Set,this.tocTemplate=g``,this.hasCustomToc=!1,this.expandedHeadingIds=new Set,this.isMobileView=!1,this.headingObserverMap=new Map,this.isTableOfContentsInitialized=!1,this.mediaQueryHandler=e=>this.handleMediaQueryChange(e),this.previousTocEffectivelyHidden=!1,this.closeSideNavigation=()=>{this.isTableOfContentsHidden=!0,this.updateComplete.then(()=>{this.shadowRoot?.querySelector("#show-toc-button")?.shadowRoot?.querySelector("button")?.focus()})},this.showSideNavigation=()=>{this.isTableOfContentsHidden=!1,this.updateComplete.then(()=>{this.shadowRoot?.querySelector("#side-navigation-toc")?.focus()})}}static get styles(){return[X,te,J(),K]}firstUpdated(){this.setupMediaQueryListener(),this.setupNavResizeObserver();const t=this.shadowRoot?.querySelector("slot")?.assignedElements()??[];t.length>0?this.initializeCustomToc(t):this.closest?.("vl-side-navigation-layout-next")?(this.buildTableOfContents(),this.setupIntersectionObserver()):requestAnimationFrame(()=>{this.isTableOfContentsInitialized||(this.buildTableOfContents(),this.setupIntersectionObserver())})}updated(e){if(e.has("headingRoot")&&this.hasCustomToc){const n=this.shadowRoot?.querySelector("slot")?.assignedElements()??[];n.length>0&&this.headingRoot&&this.extractHeadingIdsFromManualToc(n);return}if(e.has("headingRoot")&&!this.isTableOfContentsInitialized){const i=this.shadowRoot?.querySelector("slot");if(i){const n=i.assignedElements();n.length>0&&this.headingRoot?this.extractHeadingIdsFromManualToc(n):this.refreshTableOfContents()}else this.refreshTableOfContents()}(e.has("minLevel")||e.has("maxLevel")||e.has("headingRootSelector")||e.has("excludeSelectors"))&&this.isTableOfContentsInitialized&&this.refreshTableOfContents(),(e.has("activeHeadingIds")||e.has("expandedHeadingIds")||e.has("multiActive")||e.has("isMobileView")||e.has("isTableOfContentsHidden")||e.has("tocTemplate"))&&this.updateComplete.then(()=>this.updateActiveIndicatorLine());const t=this.isTocEffectivelyHidden;if(t&&!this.previousTocEffectivelyHidden&&this.updateComplete.then(()=>this.handleTocVisibilityFocusRecovery()),this.previousTocEffectivelyHidden=t,(e.has("expandedHeadingIds")||e.has("activeHeadingId")||e.has("activeHeadingIds"))&&this.isFocusInsideNav()){const i=this.getDeepActiveElement();if(i&&(i.offsetParent===null||i.hasAttribute("hidden")||i.getAttribute("aria-hidden")==="true")){const s=i;this.updateComplete.then(()=>this.moveFocusToLogicalNeighbor(s))}}}connectedCallback(){super.connectedCallback(),this.isTableOfContentsInitialized&&!this.intersectionObserver&&this.setupIntersectionObserver(),this.setupMediaQueryListener(),this.updateComplete.then(()=>{this.setupFocusRecoveryObserver(),this.setupNavResizeObserver()})}disconnectedCallback(){super.disconnectedCallback(),this.cleanupIntersectionObserver(),this.cleanupMediaQueryListener(),this.cleanupFocusRecoveryObserver(),this.cleanupCustomTocLinkHandlers(),this.cleanupNavResizeObserver()}setupNavResizeObserver(){if(this.navResizeObserver||typeof ResizeObserver>"u")return;const e=this.shadowRoot?.querySelector("nav");e&&(this.navResizeObserver=new ResizeObserver(()=>this.updateActiveIndicatorLine()),this.navResizeObserver.observe(e))}cleanupNavResizeObserver(){this.navResizeObserver?.disconnect(),this.navResizeObserver=void 0}setupMediaQueryListener(){this.mediaQueryList||(this.mediaQueryList=window.matchMedia(`(min-width: ${x+1}px)`),this.isMobileView=!this.mediaQueryList.matches,this.mediaQueryList.addEventListener("change",this.mediaQueryHandler))}cleanupMediaQueryListener(){this.mediaQueryList&&(this.mediaQueryList.removeEventListener("change",this.mediaQueryHandler),this.mediaQueryList=void 0)}cleanupCustomTocLinkHandlers(){this.customTocAbortController?.abort(),this.customTocAbortController=void 0}handleTocVisibilityFocusRecovery(){if(!this.isTocEffectivelyHidden||!this.isFocusInsideNav())return;this.shadowRoot?.querySelector("#show-toc-button")?.shadowRoot?.querySelector("button")?.focus()}getFocusableElementsInNav(){const e=this.shadowRoot?.querySelector("nav");if(!e)return[];const t=[],i=e.querySelector("slot");if(i&&i instanceof HTMLSlotElement){const s=i.assignedElements({flatten:!0});for(const o of s)this.collectFocusablesInTreeOrder(o,t)}return e.querySelectorAll("a[href], button").forEach(s=>{s instanceof HTMLElement&&t.push(s)}),t}collectFocusablesInTreeOrder(e,t){e instanceof HTMLElement&&(e.matches?.("a[href]")||e.matches?.("button"))&&t.push(e);const i=[];e instanceof HTMLSlotElement?i.push(...e.assignedElements({flatten:!0})):e.shadowRoot&&i.push(...Array.from(e.shadowRoot.children)),i.push(...Array.from(e.children));for(const n of i)this.collectFocusablesInTreeOrder(n,t)}getDeepActiveElement(){if(typeof document>"u")return null;let e=document.activeElement;for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}isFocusInsideNav(){const e=this.shadowRoot?.querySelector("nav");if(!e)return!1;const t=this.getDeepActiveElement();if(!t)return!1;if(e.contains(t))return!0;const i=e.querySelector("slot");return(i instanceof HTMLSlotElement?i.assignedElements({flatten:!0}):[]).some(s=>s===t||s.contains(t))}moveFocusToLogicalNeighbor(e){const t=this.getFocusableElementsInNav(),i=t.filter(s=>s.offsetParent!==null&&!s.hasAttribute("hidden")&&s.getAttribute("aria-hidden")!=="true");if(i.length===0){this.shadowRoot?.querySelector("#show-toc-button")?.shadowRoot?.querySelector("button")?.focus();return}const n=s=>{s.tagName.toLowerCase()==="vl-link"?s.shadowRoot?.querySelector("a")?.focus():s.focus()};if(this.activeHeadingId){const s=i.find(o=>(o.getAttribute("href")||o.closest("vl-link")?.getAttribute("href"))===`#${this.activeHeadingId}`);if(s){n(s);return}}if(e){const s=t.indexOf(e);if(s!==-1){const o=t.slice(0,s).reverse().find(r=>i.includes(r));if(o){n(o);return}const a=t.slice(s+1).find(r=>i.includes(r));if(a){n(a);return}}}n(i[0])}setupFocusRecoveryObserver(){if(this.focusRecoveryMutationObserver)return;const e=()=>{if(this.isFocusInsideNav()){const i=this.getDeepActiveElement();this.lastFocusedNavElement=i?new WeakRef(i):void 0}};this.shadowRoot?.addEventListener("focusin",e),this.addEventListener("focusin",e),this.focusRecoveryMutationObserver=new MutationObserver(i=>{if(typeof document>"u"||this.getDeepActiveElement()!==document.body)return;const s=this.lastFocusedNavElement?.deref();if(!s)return;i.some(a=>Array.from(a.removedNodes).some(r=>r===s||r.contains(s)))&&(this.lastFocusedNavElement=void 0,this.moveFocusToLogicalNeighbor(s))});const t=this.shadowRoot?.querySelector("nav");t&&this.focusRecoveryMutationObserver.observe(t,{childList:!0,subtree:!0}),this.focusRecoveryMutationObserver.observe(this,{childList:!0,subtree:!0})}cleanupFocusRecoveryObserver(){this.focusRecoveryMutationObserver&&(this.focusRecoveryMutationObserver.disconnect(),this.focusRecoveryMutationObserver=void 0)}handleMediaQueryChange(e){this.isMobileView=!e.matches,e.matches&&this.isTableOfContentsHidden&&!this.compact&&(this.isTableOfContentsHidden=!1)}get isTocEffectivelyHidden(){return(this.compact||this.isMobileView)&&this.isTableOfContentsHidden}get effectiveScrollBehavior(){return typeof window>"u"?"smooth":window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"}setupIntersectionObserver(){this.cleanupIntersectionObserver();const e={root:null,rootMargin:this.multiActive?"0px":"0px 0px -70% 0px",threshold:0};this.intersectionObserver=new IntersectionObserver(t=>this.handleIntersection(t),e),this.headingElements.forEach(t=>{const i=t.getAttribute("id");i&&(this.headingObserverMap.set(i,t),this.intersectionObserver?.observe(t))})}handleIntersection(e){if(this.multiActive){this.updateActiveSections();return}const t=e.filter(i=>i.isIntersecting);if(t.length>0){const n=t.reduce((s,o)=>o.boundingClientRect.top<s.boundingClientRect.top?o:s).target.getAttribute("id");n&&n!==this.activeHeadingId&&(this.activeHeadingId=n,this.activeHeadingIds=new Set([n]),this.updateActiveLinks())}}updateActiveSections(){if(typeof window>"u")return;const e=window.innerHeight||document.documentElement.clientHeight,t=this.headingElements.map(n=>({id:n.getAttribute("id")??"",top:n.getBoundingClientRect().top})).filter(n=>n.id).sort((n,s)=>n.top-s.top),i=new Set;t.forEach((n,s)=>{const o=n.top,a=s+1<t.length?t[s+1].top:1/0;o<e&&a>0&&i.add(n.id)}),!this.areSameIds(i,this.activeHeadingIds)&&(this.activeHeadingId=t.find(n=>i.has(n.id))?.id??"",this.activeHeadingIds=i,this.updateActiveLinks())}areSameIds(e,t){if(e.size!==t.size)return!1;for(const i of e)if(!t.has(i))return!1;return!0}updateActiveLinks(){this.hasCustomToc?this.updateManualTocActiveStates():this.updateTableOfContents();const e=this.headingElements.map(t=>t.getAttribute("id")).filter(t=>!!t&&this.activeHeadingIds.has(t));this.dispatchEvent(new CustomEvent("active-heading-changed",{detail:{activeHeadingId:this.activeHeadingId,activeHeadingIds:e},bubbles:!0}))}updateActiveIndicatorLine(){const e=this.shadowRoot?.querySelector("nav"),t=e?.querySelector(".active-indicator-line");if(!e||!t)return;if(!this.multiActive||this.activeHeadingIds.size===0||this.isTocEffectivelyHidden){t.style.display="none";return}const i=this.getActiveLinkElements().map(a=>a.getBoundingClientRect()).filter(a=>a.height>0);if(i.length===0){t.style.display="none";return}const n=e.getBoundingClientRect(),s=Math.min(...i.map(a=>a.top)),o=Math.max(...i.map(a=>a.bottom));t.style.top=`${s-n.top+e.scrollTop}px`,t.style.height=`${o-s}px`,t.style.display="block"}getActiveLinkElements(){const e=this.shadowRoot?.querySelector("slot"),t=this.hasCustomToc?e?.assignedElements()??[]:[],i=this.shadowRoot?.querySelector("nav"),n=[];return this.activeHeadingIds.forEach(s=>{const o=`a[href="#${CSS.escape(s)}"], vl-link[href="#${CSS.escape(s)}"]`,a=t.map(r=>r.querySelector(o)).find(Boolean)??i?.querySelector(o);a instanceof HTMLElement&&n.push(a)}),n}cleanupIntersectionObserver(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0),this.headingObserverMap.clear()}updateObservedElements(e){this.headingElements=e,this.setupIntersectionObserver()}render(){const e=this.compact||this.isMobileView;return g`
            <table-of-contents
                id="side-navigation-toc"
                part="toc"
                role=${e?"dialog":"region"}
                aria-modal=${e?"true":m}
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
                    <div class="active-indicator-line" aria-hidden="true"></div>
                    <slot @slotchange=${this.handleTocSlotChange}></slot>
                    ${this.hasCustomToc?m:this.tocTemplate||m}
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
        `}handleTocSlotChange(e){const i=e.target.assignedElements();i.length>0?this.initializeCustomToc(i):(this.hasCustomToc=!1,this.refreshTableOfContents())}initializeCustomToc(e){this.hasCustomToc=!0,this.extractHeadingIdsFromManualToc(e),this.adoptLightDomStyles(),de(e);const t=this.headingRoot??this.getRootNode();this.cleanupCustomTocLinkHandlers(),this.customTocAbortController=new AbortController,ce(e,this.effectiveScrollBehavior,t,this.maxDepth,this.customTocAbortController.signal),this.setupIntersectionObserver()}adoptLightDomStyles(){l.lightDomStyleSheet||(l.lightDomStyleSheet=new CSSStyleSheet,l.lightDomStyleSheet.replaceSync(ee.toString())),document.adoptedStyleSheets.includes(l.lightDomStyleSheet)||(document.adoptedStyleSheets=[...document.adoptedStyleSheets,l.lightDomStyleSheet])}extractHeadingIdsFromManualToc(e){const t=this.headingRoot??this.getRootNode(),i=le(e,t,this.maxDepth);i.length>0&&(this.headingElements=i,this.setupIntersectionObserver())}updateManualTocActiveStates(){const e=this.shadowRoot?.querySelector("slot");if(!e)return;const t=e.assignedElements();he(t,this.activeHeadingIds),ve(t,this.activeHeadingIds)}get tableOfContents(){return this.shadowRoot?.querySelector("table-of-contents")}buildTableOfContents(){const e=ae(this.headingRoot,this.headingRootSelector,this.getRootNode());this.tableOfContentsStructure=ie(e,{minLevel:this.minLevel,maxLevel:this.maxLevel,maxDepth:this.maxDepth,excludeSelectors:this.excludeSelectors}),this.headingElements=this.tableOfContentsStructure.elements,this.updateObservedElements(this.headingElements),this.updateTableOfContents(),this.isTableOfContentsInitialized=!0}updateTableOfContents(){if(!this.tableOfContentsStructure)return;const e=this.headingRoot??this.getRootNode(),t=D(this.tableOfContentsStructure.headings),i=Array.from(this.expandedHeadingIds).filter(n=>{if(!n.startsWith("-"))return!0;const s=n.substring(1),o=R(t,s),a=this.activeHeadingIds.has(s),r=o?I(o.children,this.activeHeadingIds):!1;return a||r});i.length!==this.expandedHeadingIds.size&&(this.expandedHeadingIds=new Set(i)),this.tocTemplate=pe(t,{scroll:{scrollRoot:e,scrollBehavior:this.effectiveScrollBehavior,maxDepth:this.maxDepth},state:{activeHeadingIds:this.activeHeadingIds,expandedHeadingIds:this.expandedHeadingIds},callbacks:{onActiveHeadingChange:(n,s)=>{if(s&&this.tableOfContentsStructure){const o=this.expandedHeadingIds.has(n),a=this.expandedHeadingIds.has(`-${n}`),r=this.activeHeadingIds.has(n),d=R(t,n),v=d?I(d.children,this.activeHeadingIds):!1,u=r||v;o?(this.expandedHeadingIds.delete(n),u&&this.expandedHeadingIds.add(`-${n}`)):a?(this.expandedHeadingIds.delete(`-${n}`),this.expandedHeadingIds.add(n)):u?this.expandedHeadingIds.add(`-${n}`):this.expandedHeadingIds.add(n),this.expandedHeadingIds=new Set(this.expandedHeadingIds),this.updateTableOfContents()}}}})}refreshTableOfContents(){this.tableOfContentsStructure=void 0,this.isTableOfContentsInitialized=!1,this.buildTableOfContents()}};c([f({type:Boolean,reflect:!0})],l.prototype,"compact",2);c([f({type:String,reflect:!0,attribute:"child-spacing"})],l.prototype,"childSpacing",2);c([f({type:Array})],l.prototype,"headingElements",2);c([f({attribute:!1})],l.prototype,"headingRoot",2);c([f({type:String,attribute:"heading-root-selector"})],l.prototype,"headingRootSelector",2);c([f({type:Number,attribute:"min-level"})],l.prototype,"minLevel",2);c([f({type:Number,attribute:"max-level"})],l.prototype,"maxLevel",2);c([f({type:Boolean,attribute:"closed",reflect:!0})],l.prototype,"isTableOfContentsHidden",2);c([f({type:Number,attribute:"max-depth"})],l.prototype,"maxDepth",2);c([f({type:String,attribute:"exclude-selectors"})],l.prototype,"excludeSelectors",2);c([f({type:String,attribute:"navigation-title"})],l.prototype,"navigationTitle",2);c([f({type:Boolean,reflect:!0,attribute:"multi-active"})],l.prototype,"multiActive",2);c([S()],l.prototype,"activeHeadingId",2);c([S()],l.prototype,"activeHeadingIds",2);c([S()],l.prototype,"tocTemplate",2);c([S()],l.prototype,"hasCustomToc",2);c([S()],l.prototype,"expandedHeadingIds",2);c([S()],l.prototype,"isMobileView",2);l=c([P("vl-side-navigation-next")],l);export{l as V,we as t};
