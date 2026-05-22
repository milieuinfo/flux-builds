import{i as w,be as C,E as S,cC as F,x as v,T as m,r as Q,d as V,bI as _,Q as W,cD as T,B as P,bt as j,aW as G,aV as X,H as f,w as J}from"./iframe-D9dm7PbY.js";const k=w`
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
`,K=w`
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
`,Y=w`
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
`,Z=w`
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
                ${C()}
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
                ${C()}
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
            ${Y}

            vl-button.toggle-button {
                ${K}
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
`,$=w`
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
`,ee=w`
    :host {
        display: block;
        align-self: start;
        position: sticky;
        top: var(--vl-side-navigation-top, 50px);
        z-index: 1000;
    }

    :host {
        @media screen and (max-width: ${S}px) {
            ${$}
        }
    }

    :host([compact]) {
        ${$} @media screen and (width > ${S}px) {
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
                ${C()}
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
                        ${C()}
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
`,te=(e,{selector:t="vl-title, h1, h2, h3, h4, h5, h6",minLevel:i=1,maxLevel:n=6,maxDepth:s,excludeSelectors:o})=>{if(!e)return{elements:[],headings:[]};const a=Math.max(1,Math.min(6,Number(i)||1)),r=Math.max(1,Math.min(6,Number(n)||6)),b=F(e,t,s,0,o).filter(c=>{if(!(c instanceof HTMLElement))return!1;const y=c.getRootNode();return!(y instanceof ShadowRoot&&y.host&&y.host.tagName.toLowerCase()==="vl-title")}).map(c=>({element:c,level:se(c)})).filter(({level:c})=>c!==null&&c>=a&&c<=r),u=new Map;b.forEach(({element:c,level:y})=>{const O=ie(c),x=c.getAttribute("id")?.trim()??"";x&&(u.has(x)||u.set(x,{element:c,level:y,text:O,id:x}))});const g=Array.from(u.values());return ne(g),{elements:g.map(({element:c})=>c),headings:g}},ie=e=>A(e),H=e=>(e??"").replace(/\s+/g," ").trim(),A=(e,t=new Set)=>{if(t.has(e))return"";if(t.add(e),e.nodeType===Node.TEXT_NODE)return H(e.textContent);if(!(e instanceof Element||e instanceof ShadowRoot))return"";const i=[];if(e instanceof Element&&e.shadowRoot){const s=A(e.shadowRoot,t);return H(s)}return(e instanceof HTMLSlotElement?e.assignedNodes({flatten:!0}):Array.from(e.childNodes)).forEach(s=>{const o=A(s,t);o&&i.push(o)}),H(i.join(" "))};function ne(e){e.sort((t,i)=>{const n=t.element.compareDocumentPosition(i.element);if(n&Node.DOCUMENT_POSITION_DISCONNECTED){const s=t.element.getBoundingClientRect(),o=i.element.getBoundingClientRect();return s.top-o.top}return n&Node.DOCUMENT_POSITION_FOLLOWING?-1:n&Node.DOCUMENT_POSITION_PRECEDING?1:0})}const se=e=>{const t=e.tagName.toLowerCase(),i=t.match(/^h([1-6])$/);if(i)return parseInt(i[1],10);if(t==="vl-title"){const s=e.getAttribute("type"),o=e.type,r=(s||o||"h1").toLowerCase().match(/^h([1-6])$/);if(r)return parseInt(r[1],10)}const n=e.getAttribute("aria-level");if(n){const s=parseInt(n,10);if(!Number.isNaN(s))return s}return null},D=(e,t)=>{const i=e.querySelectorAll("slot");for(const n of Array.from(i))if(n instanceof HTMLSlotElement){const s=n.assignedElements({flatten:!0});for(const o of s){if("querySelector"in o){const a=o.querySelector(t);if(a)return a}if(o.matches&&o.matches(t))return o}}return null},oe=(e,t,i)=>{if(e&&t){const n=e.querySelector?.(t);if(n)return n;if(e!==document){const s=D(e,t);if(s)return s}return console.warn(`[vl-side-navigation-next] selector "${t}" not found within headingRoot. Using headingRoot as-is. Headings will be scanned from the entire headingRoot scope.`),e}if(e)return e;if(t){const n=i.querySelector(t);return n||(console.warn(`[vl-side-navigation-next] selector "${t}" not found in fallbackRoot. Using fallbackRoot as-is.`),i)}return i},ae=e=>{const t=[];return e.forEach(i=>{[...i.querySelectorAll('a[href^="#"], vl-link[href^="#"]')].forEach(s=>{const o=s.getAttribute("href");if(o){const a=o.substring(1);a&&!t.includes(a)&&t.push(a)}})}),t},re=(e,t)=>{const i=t.querySelector(`#${e}`);if(i)return i;if(t!==document){const n=document.querySelector(`#${e}`);if(n)return n}return null};function le(e,t){const i=ae(e);return i.length===0?[]:i.map(n=>re(n,t)).filter(n=>n!==null)}function xe(e){const t=e.currentTarget,n=t.closest("li")?.querySelector(":scope > ul");if(!n)return;n.hasAttribute("hidden")?(n.removeAttribute("hidden"),t.setAttribute("aria-expanded","true"),t.setAttribute("aria-label","Inklappen"),t.classList.add("showing-children")):(n.setAttribute("hidden",""),t.setAttribute("aria-expanded","false"),t.setAttribute("aria-label","Uitklappen"),t.classList.remove("showing-children"))}function q(e,t="smooth"){const n=e.currentTarget.getAttribute("href");if(!n||!n.startsWith("#"))return;const s=n.substring(1);if(!s)return;const o=document.getElementById(s);o&&(e.preventDefault(),history.pushState(null,"",n),o.scrollIntoView({behavior:t,block:"start"}))}function ce(e,t="smooth"){e.forEach(i=>{i.querySelectorAll('a[href^="#"], vl-link[href^="#"]').forEach(s=>{if(s.tagName.toLowerCase()==="vl-link"){const o=s.shadowRoot?.querySelector("a");o&&o.addEventListener("click",a=>q(a,t))}else s.addEventListener("click",o=>q(o,t))})})}function de(e){e.forEach(t=>{t.querySelectorAll("li > ul").forEach(s=>{s.setAttribute("hidden","")}),t.querySelectorAll(".toggle-button").forEach(s=>{s.setAttribute("aria-expanded","false"),s.setAttribute("aria-label","Uitklappen"),s.classList.remove("showing-children")})})}function he(e,t){e.forEach(i=>{i.querySelectorAll('a[href^="#"], vl-link[href^="#"]').forEach(s=>{const o=s.getAttribute("href");o&&(o.substring(1)===t?(s.classList.add("active"),s.setAttribute("aria-current","location")):(s.classList.remove("active"),s.removeAttribute("aria-current")))})})}function ue(e,t){for(const i of e){const n=i.querySelectorAll('a[href^="#"], vl-link[href^="#"]');for(const s of Array.from(n)){const o=s.getAttribute("href");if(o&&o.substring(1)===t)return s}}return null}function fe(e){const t=new Set;let i=e.closest("li");for(;i;){const n=i.parentElement;if(n&&n.tagName==="UL")t.add(n),i=n.parentElement?.closest("li")??null;else break}return t}function pe(e,t){const i=ue(e,t),n=i?fe(i):new Set;if(i){const o=i.closest("li")?.querySelector(":scope > ul");o&&n.add(o)}for(const s of e)s.querySelectorAll("li > ul").forEach(a=>{const r=n.has(a),h=typeof document<"u"&&document.activeElement?a.contains(document.activeElement):!1,p=r||h;p?a.removeAttribute("hidden"):a.setAttribute("hidden","");const u=a.parentElement?.querySelector(":scope > .nav-item-wrapper > .toggle-button");u&&(u.setAttribute("aria-expanded",String(p)),u.setAttribute("aria-label",p?"Inklappen":"Uitklappen"),p?u.classList.add("showing-children"):u.classList.remove("showing-children"))})}const ge=(e,t={scroll:{},state:{},callbacks:{}})=>{const i="headings"in e?B(e.headings):e;return i.length>0?z(i,t):v``},B=e=>{const t=[],i=[];return e.forEach(n=>{const s={item:n,children:[]};for(;i.length>0&&n.level<=i[i.length-1].item.level;)i.pop();i.length===0?t.push(s):i[i.length-1].children.push(s),i.push(s)}),t},z=(e,t,i,n)=>e.length?v`
        <ul id=${i??m} ?hidden=${n??!1}>
            ${e.map(s=>me(s,t))}
        </ul>
    `:v``,me=(e,t)=>{const{activeHeadingId:i,expandedHeadingIds:n}=t.state,{onActiveHeadingChange:s}=t.callbacks,{scrollRoot:o,scrollBehavior:a}=t.scroll,r=i===e.item.id,h=e.children.length>0,p=h&&I(e.children,i),b=n?.has(e.item.id)??!1,u=n?.has(`-${e.item.id}`)??!1,g=b||(r||p)&&!u,c=e.item.text||e.item.id,y=E=>{E.preventDefault();const R=e.item.element??ve(e.item.id,o,t.scroll.maxDepth);R&&R.scrollIntoView({behavior:a??"smooth",block:"start"})},O=E=>{E.preventDefault(),E.stopPropagation(),s?.(e.item.id,!0)},x=v`<a
        href=${`#${e.item.id}`}
        class=${r?"active":""}
        aria-current=${r?"location":m}
        @click=${y}
    >
        ${c}
    </a>`,N=h?`toc-section-${e.item.id}`:void 0,U=h?v`<button
              type="button"
              class="toggle-button"
              aria-expanded=${g?"true":"false"}
              aria-controls=${N||m}
              aria-label=${g?"Inklappen":"Uitklappen"}
              @click=${O}
          >
              <i class="vl-icon vl-icon--arrow-right-fat ${g?"showing-children":""}"></i>
          </button>`:m;return v`
        <li>
            <div class="nav-item-wrapper">${x}${U}</div>
            ${h?z(e.children,t,N,!g):m}
        </li>
    `},I=(e,t)=>{if(!t)return!1;for(const i of e)if(i.item.id===t||i.children.length>0&&I(i.children,t))return!0;return!1},M=(e,t)=>{for(const i of e){if(i.item.id===t)return i;if(i.children.length>0){const n=M(i.children,t);if(n)return n}}return null},ve=(e,t,i)=>{const n=t??document,s=`#${e}`,o=n.querySelector(s);if(o)return o;if(n instanceof Element||n instanceof ShadowRoot){const r=D(n,s);if(r instanceof HTMLElement)return r}const a=r=>{const h=F(r,s,i);return h.length>0&&h[0]instanceof HTMLElement?h[0]:null};if(n===document){const r=a(document);if(r)return r}if(n!==document){const r=a(document);if(r)return r}return null};var be=Object.defineProperty,ye=Object.getOwnPropertyDescriptor,d=(e,t,i,n)=>{for(var s=n>1?void 0:n?ye(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=(n?a(t,i,s):a(s))||s);return n&&s&&be(t,i,s),s};Q([V,_,W]);let l=class extends P{constructor(){super(...arguments),this.compact=!1,this.childSpacing="small",this.headingElements=[],this.minLevel=2,this.maxLevel=3,this.isTableOfContentsHidden=!1,this.navigationTitle="Op deze pagina",this.activeHeadingId="",this.tocTemplate=v``,this.hasCustomToc=!1,this.expandedHeadingIds=new Set,this.isMobileView=!1,this.headingObserverMap=new Map,this.isTableOfContentsInitialized=!1,this.mediaQueryHandler=e=>this.handleMediaQueryChange(e),this.previousTocEffectivelyHidden=!1,this.closeSideNavigation=()=>{this.isTableOfContentsHidden=!0,this.updateComplete.then(()=>{this.shadowRoot?.querySelector("#show-toc-button")?.shadowRoot?.querySelector("button")?.focus()})},this.showSideNavigation=()=>{this.isTableOfContentsHidden=!1,this.updateComplete.then(()=>{this.shadowRoot?.querySelector("#side-navigation-toc")?.focus()})}}static get styles(){return[j,ee,G(),X]}firstUpdated(){this.setupMediaQueryListener();const t=this.shadowRoot?.querySelector("slot")?.assignedElements()??[];t.length>0?this.initializeCustomToc(t):this.closest?.("vl-side-navigation-layout-next")?(this.buildTableOfContents(),this.setupIntersectionObserver()):requestAnimationFrame(()=>{this.isTableOfContentsInitialized||(this.buildTableOfContents(),this.setupIntersectionObserver())})}updated(e){if(e.has("headingRoot")&&this.hasCustomToc){const n=this.shadowRoot?.querySelector("slot")?.assignedElements()??[];n.length>0&&this.headingRoot&&this.extractHeadingIdsFromManualToc(n);return}if(e.has("headingRoot")&&!this.isTableOfContentsInitialized){const i=this.shadowRoot?.querySelector("slot");if(i){const n=i.assignedElements();n.length>0&&this.headingRoot?this.extractHeadingIdsFromManualToc(n):this.refreshTableOfContents()}else this.refreshTableOfContents()}(e.has("minLevel")||e.has("maxLevel")||e.has("headingRootSelector")||e.has("excludeSelectors"))&&this.isTableOfContentsInitialized&&this.refreshTableOfContents();const t=this.isTocEffectivelyHidden;if(t&&!this.previousTocEffectivelyHidden&&this.updateComplete.then(()=>this.handleTocVisibilityFocusRecovery()),this.previousTocEffectivelyHidden=t,(e.has("expandedHeadingIds")||e.has("activeHeadingId"))&&this.isFocusInsideNav()){const i=this.getDeepActiveElement();if(i&&(i.offsetParent===null||i.hasAttribute("hidden")||i.getAttribute("aria-hidden")==="true")){const s=i;this.updateComplete.then(()=>this.moveFocusToLogicalNeighbor(s))}}}connectedCallback(){super.connectedCallback(),this.isTableOfContentsInitialized&&!this.intersectionObserver&&this.setupIntersectionObserver(),this.setupMediaQueryListener(),this.updateComplete.then(()=>this.setupFocusRecoveryObserver())}disconnectedCallback(){super.disconnectedCallback(),this.cleanupIntersectionObserver(),this.cleanupMediaQueryListener(),this.cleanupFocusRecoveryObserver()}setupMediaQueryListener(){this.mediaQueryList||(this.mediaQueryList=window.matchMedia(`(min-width: ${S+1}px)`),this.isMobileView=!this.mediaQueryList.matches,this.mediaQueryList.addEventListener("change",this.mediaQueryHandler))}cleanupMediaQueryListener(){this.mediaQueryList&&(this.mediaQueryList.removeEventListener("change",this.mediaQueryHandler),this.mediaQueryList=void 0)}handleTocVisibilityFocusRecovery(){if(!this.isTocEffectivelyHidden||!this.isFocusInsideNav())return;this.shadowRoot?.querySelector("#show-toc-button")?.shadowRoot?.querySelector("button")?.focus()}getFocusableElementsInNav(){const e=this.shadowRoot?.querySelector("nav");if(!e)return[];const t=[],i=e.querySelector("slot");if(i&&i instanceof HTMLSlotElement){const s=i.assignedElements({flatten:!0});for(const o of s)this.collectFocusablesInTreeOrder(o,t)}return e.querySelectorAll("a[href], button").forEach(s=>{s instanceof HTMLElement&&t.push(s)}),t}collectFocusablesInTreeOrder(e,t){e instanceof HTMLElement&&(e.matches?.("a[href]")||e.matches?.("button"))&&t.push(e);const i=[];e instanceof HTMLSlotElement?i.push(...e.assignedElements({flatten:!0})):e.shadowRoot&&i.push(...Array.from(e.shadowRoot.children)),i.push(...Array.from(e.children));for(const n of i)this.collectFocusablesInTreeOrder(n,t)}getDeepActiveElement(){if(typeof document>"u")return null;let e=document.activeElement;for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}isFocusInsideNav(){const e=this.shadowRoot?.querySelector("nav");if(!e)return!1;const t=this.getDeepActiveElement();if(!t)return!1;if(e.contains(t))return!0;const i=e.querySelector("slot");return(i instanceof HTMLSlotElement?i.assignedElements({flatten:!0}):[]).some(s=>s===t||s.contains(t))}moveFocusToLogicalNeighbor(e){const t=this.getFocusableElementsInNav(),i=t.filter(s=>s.offsetParent!==null&&!s.hasAttribute("hidden")&&s.getAttribute("aria-hidden")!=="true");if(i.length===0){this.shadowRoot?.querySelector("#show-toc-button")?.shadowRoot?.querySelector("button")?.focus();return}const n=s=>{s.tagName.toLowerCase()==="vl-link"?s.shadowRoot?.querySelector("a")?.focus():s.focus()};if(this.activeHeadingId){const s=i.find(o=>(o.getAttribute("href")||o.closest("vl-link")?.getAttribute("href"))===`#${this.activeHeadingId}`);if(s){n(s);return}}if(e){const s=t.indexOf(e);if(s!==-1){const o=t.slice(0,s).reverse().find(r=>i.includes(r));if(o){n(o);return}const a=t.slice(s+1).find(r=>i.includes(r));if(a){n(a);return}}}n(i[0])}setupFocusRecoveryObserver(){if(this.focusRecoveryMutationObserver)return;const e=()=>{if(this.isFocusInsideNav()){const i=this.getDeepActiveElement();this.lastFocusedNavElement=i?new WeakRef(i):void 0}};this.shadowRoot?.addEventListener("focusin",e),this.addEventListener("focusin",e),this.focusRecoveryMutationObserver=new MutationObserver(i=>{if(typeof document>"u"||this.getDeepActiveElement()!==document.body)return;const s=this.lastFocusedNavElement?.deref();if(!s)return;i.some(a=>Array.from(a.removedNodes).some(r=>r===s||r.contains(s)))&&(this.lastFocusedNavElement=void 0,this.moveFocusToLogicalNeighbor(s))});const t=this.shadowRoot?.querySelector("nav");t&&this.focusRecoveryMutationObserver.observe(t,{childList:!0,subtree:!0}),this.focusRecoveryMutationObserver.observe(this,{childList:!0,subtree:!0})}cleanupFocusRecoveryObserver(){this.focusRecoveryMutationObserver&&(this.focusRecoveryMutationObserver.disconnect(),this.focusRecoveryMutationObserver=void 0)}handleMediaQueryChange(e){this.isMobileView=!e.matches,e.matches&&this.isTableOfContentsHidden&&!this.compact&&(this.isTableOfContentsHidden=!1)}get isTocEffectivelyHidden(){return(this.compact||this.isMobileView)&&this.isTableOfContentsHidden}get effectiveScrollBehavior(){return typeof window>"u"?"smooth":window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"}setupIntersectionObserver(){this.cleanupIntersectionObserver();const e={root:null,rootMargin:"0px 0px -70% 0px",threshold:0};this.intersectionObserver=new IntersectionObserver(t=>this.handleIntersection(t),e),this.headingElements.forEach(t=>{const i=t.getAttribute("id");i&&(this.headingObserverMap.set(i,t),this.intersectionObserver?.observe(t))})}handleIntersection(e){const t=e.filter(i=>i.isIntersecting);if(t.length>0){const n=t.reduce((s,o)=>o.boundingClientRect.top<s.boundingClientRect.top?o:s).target.getAttribute("id");n&&n!==this.activeHeadingId&&(this.activeHeadingId=n,this.updateActiveLinks())}}updateActiveLinks(){this.hasCustomToc?this.updateManualTocActiveStates():this.updateTableOfContents(),this.dispatchEvent(new CustomEvent("active-heading-changed",{detail:{activeHeadingId:this.activeHeadingId},bubbles:!0}))}cleanupIntersectionObserver(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0),this.headingObserverMap.clear()}updateObservedElements(e){this.headingElements=e,this.setupIntersectionObserver()}render(){const e=this.compact||this.isMobileView;return v`
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
        `}handleTocSlotChange(e){const i=e.target.assignedElements();i.length>0?this.initializeCustomToc(i):(this.hasCustomToc=!1,this.refreshTableOfContents())}initializeCustomToc(e){this.hasCustomToc=!0,this.extractHeadingIdsFromManualToc(e),this.adoptLightDomStyles(),de(e),ce(e,this.effectiveScrollBehavior),this.setupIntersectionObserver()}adoptLightDomStyles(){l.lightDomStyleSheet||(l.lightDomStyleSheet=new CSSStyleSheet,l.lightDomStyleSheet.replaceSync(Z.toString())),document.adoptedStyleSheets.includes(l.lightDomStyleSheet)||(document.adoptedStyleSheets=[...document.adoptedStyleSheets,l.lightDomStyleSheet])}extractHeadingIdsFromManualToc(e){const t=this.headingRoot??this.getRootNode(),i=le(e,t);i.length>0&&(this.headingElements=i,this.setupIntersectionObserver())}updateManualTocActiveStates(){const e=this.shadowRoot?.querySelector("slot");if(!e)return;const t=e.assignedElements();he(t,this.activeHeadingId),pe(t,this.activeHeadingId)}get tableOfContents(){return this.shadowRoot?.querySelector("table-of-contents")}buildTableOfContents(){const e=oe(this.headingRoot,this.headingRootSelector,this.getRootNode());this.tableOfContentsStructure=te(e,{minLevel:this.minLevel,maxLevel:this.maxLevel,maxDepth:this.maxDepth,excludeSelectors:this.excludeSelectors}),this.headingElements=this.tableOfContentsStructure.elements,this.updateObservedElements(this.headingElements),this.updateTableOfContents(),this.isTableOfContentsInitialized=!0}updateTableOfContents(){if(!this.tableOfContentsStructure)return;const e=this.headingRoot??this.getRootNode(),t=B(this.tableOfContentsStructure.headings),i=Array.from(this.expandedHeadingIds).filter(n=>{if(!n.startsWith("-"))return!0;const s=n.substring(1),o=M(t,s),a=this.activeHeadingId===s,r=o?I(o.children,this.activeHeadingId):!1;return a||r});i.length!==this.expandedHeadingIds.size&&(this.expandedHeadingIds=new Set(i)),this.tocTemplate=ge(t,{scroll:{scrollRoot:e,scrollBehavior:this.effectiveScrollBehavior,maxDepth:this.maxDepth},state:{activeHeadingId:this.activeHeadingId,expandedHeadingIds:this.expandedHeadingIds},callbacks:{onActiveHeadingChange:(n,s)=>{if(s&&this.tableOfContentsStructure){const o=this.expandedHeadingIds.has(n),a=this.expandedHeadingIds.has(`-${n}`),r=this.activeHeadingId===n,h=M(t,n),p=h?I(h.children,this.activeHeadingId):!1,b=r||p;o?(this.expandedHeadingIds.delete(n),b&&this.expandedHeadingIds.add(`-${n}`)):a?(this.expandedHeadingIds.delete(`-${n}`),this.expandedHeadingIds.add(n)):b?this.expandedHeadingIds.add(`-${n}`):this.expandedHeadingIds.add(n),this.expandedHeadingIds=new Set(this.expandedHeadingIds),this.updateTableOfContents()}}}})}refreshTableOfContents(){this.tableOfContentsStructure=void 0,this.isTableOfContentsInitialized=!1,this.buildTableOfContents()}};d([f({type:Boolean,reflect:!0})],l.prototype,"compact",2);d([f({type:String,reflect:!0,attribute:"child-spacing"})],l.prototype,"childSpacing",2);d([f({type:Array})],l.prototype,"headingElements",2);d([f({attribute:!1})],l.prototype,"headingRoot",2);d([f({type:String,attribute:"heading-root-selector"})],l.prototype,"headingRootSelector",2);d([f({type:Number,attribute:"min-level"})],l.prototype,"minLevel",2);d([f({type:Number,attribute:"max-level"})],l.prototype,"maxLevel",2);d([f({type:Boolean,attribute:"closed",reflect:!0})],l.prototype,"isTableOfContentsHidden",2);d([f({type:Number,attribute:"max-depth"})],l.prototype,"maxDepth",2);d([f({type:String,attribute:"exclude-selectors"})],l.prototype,"excludeSelectors",2);d([f({type:String,attribute:"navigation-title"})],l.prototype,"navigationTitle",2);d([T()],l.prototype,"activeHeadingId",2);d([T()],l.prototype,"tocTemplate",2);d([T()],l.prototype,"hasCustomToc",2);d([T()],l.prototype,"expandedHeadingIds",2);d([T()],l.prototype,"isMobileView",2);l=d([J("vl-side-navigation-next")],l);export{l as V,xe as t};
