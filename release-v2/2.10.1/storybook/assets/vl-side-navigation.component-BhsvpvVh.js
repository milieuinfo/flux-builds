import{cM as z,cN as Q,E as b,D as S,bj as A,cO as N,x as m,T as g,r as F,h as V,bJ as _,b0 as P,B as j,aN as W,a_ as G,aZ as J,H as Z}from"./iframe-iHJvAyUB.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K={attribute:!0,type:String,converter:Q,reflect:!1,hasChanged:z},X=(t=K,e,n)=>{const{kind:i,metadata:s}=n;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),o.set(n.name,t),i==="accessor"){const{name:a}=n;return{set(r){const c=e.get.call(this);e.set.call(this,r),this.requestUpdate(a,c,t)},init(r){return r!==void 0&&this.C(a,void 0,t),r}}}if(i==="setter"){const{name:a}=n;return function(r){const c=this[a];e.call(this,r),this.requestUpdate(a,c,t)}}throw Error("Unsupported decorator location: "+i)};function p(t){return(e,n)=>typeof n=="object"?X(t,e,n):((i,s,o)=>{const a=s.hasOwnProperty(o);return s.constructor.createProperty(o,a?{...i,wrapped:!0}:i),a?Object.getOwnPropertyDescriptor(s,o):void 0})(t,e,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function C(t){return p({...t,state:!0,attribute:!1})}const k=b`
    color: var(--vl-color--text);
    position: relative;
    font-weight: 500;
`,E=b`
    content: '';
    height: 90%;
    display: block;
    position: absolute;
    left: -12px;
    top: 1px;
    bottom: 0;
    width: 3px;
    background-color: var(--vl-color--action-400);
`,Y=b`
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
`,tt=b`
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
`,et=b`
    vl-side-navigation-next {
        a.active {
            ${k}

            &::before {
                ${E}
            }
        }

        vl-link.active {
            position: relative;
            display: inline-block;

            &::before {
                ${E}
            }
        }

        vl-link.active::part(link) {
            ${k}
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
            ${tt}

            vl-button.toggle-button {
                ${Y}
            }
        }

        /* ensure nested lists don't have the wrapper margin */
        li ul .nav-item-wrapper {
            margin: 0;
        }
    }
`,$=b`
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
`,nt=b`
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
                ${A()}
            }

            &.active {
                ${k}
                background-color: transparent;
                border-left: none;

                &::before {
                    ${E}
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
                        ${A()}
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
`,it=(t,{selector:e="vl-title, h1, h2, h3, h4, h5, h6",minLevel:n=1,maxLevel:i=6,maxDepth:s,excludeSelectors:o})=>{if(!t)return{elements:[],headings:[]};const a=Math.max(1,Math.min(6,Number(n)||1)),r=Math.max(1,Math.min(6,Number(i)||6)),y=N(t,e,s,0,o).filter(d=>{if(!(d instanceof HTMLElement))return!1;const v=d.getRootNode();return!(v instanceof ShadowRoot&&v.host&&v.host.tagName.toLowerCase()==="vl-title")}).map(d=>({element:d,level:ot(d)})).filter(({level:d})=>d!==null&&d>=a&&d<=r),x=new Map;y.forEach(({element:d,level:v})=>{const O=d.textContent?.trim()??"",w=d.getAttribute("id")?.trim()??"";w&&(x.has(w)||x.set(w,{element:d,level:v,text:O,id:w}))});const u=Array.from(x.values());return st(u),{elements:u.map(({element:d})=>d),headings:u}};function st(t){t.sort((e,n)=>{const i=e.element.compareDocumentPosition(n.element);if(i&Node.DOCUMENT_POSITION_DISCONNECTED){const s=e.element.getBoundingClientRect(),o=n.element.getBoundingClientRect();return s.top-o.top}return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}const ot=t=>{const e=t.tagName.toLowerCase(),n=e.match(/^h([1-6])$/);if(n)return parseInt(n[1],10);if(e==="vl-title"){const s=t.getAttribute("type"),o=t.type,r=(s||o||"h1").toLowerCase().match(/^h([1-6])$/);if(r)return parseInt(r[1],10)}const i=t.getAttribute("aria-level");if(i){const s=parseInt(i,10);if(!Number.isNaN(s))return s}return null},q=(t,e)=>{const n=t.querySelectorAll("slot");for(const i of Array.from(n))if(i instanceof HTMLSlotElement){const s=i.assignedElements({flatten:!0});for(const o of s){if("querySelector"in o){const a=o.querySelector(e);if(a)return a}if(o.matches&&o.matches(e))return o}}return null},at=(t,e,n)=>{if(t&&e){const i=t.querySelector?.(e);if(i)return i;if(t!==document){const s=q(t,e);if(s)return s}return console.warn(`[vl-side-navigation-next] selector "${e}" not found within headingRoot. Using headingRoot as-is. Headings will be scanned from the entire headingRoot scope.`),t}if(t)return t;if(e){const i=n.querySelector(e);return i||(console.warn(`[vl-side-navigation-next] selector "${e}" not found in fallbackRoot. Using fallbackRoot as-is.`),n)}return n},rt=t=>{const e=[];return t.forEach(n=>{[...n.querySelectorAll('a[href^="#"], vl-link[href^="#"]')].forEach(s=>{const o=s.getAttribute("href");if(o){const a=o.substring(1);a&&!e.includes(a)&&e.push(a)}})}),e},lt=(t,e)=>{const n=e.querySelector(`#${t}`);if(n)return n;if(e!==document){const i=document.querySelector(`#${t}`);if(i)return i}return null};function ct(t,e){const n=rt(t);return n.length===0?[]:n.map(i=>lt(i,e)).filter(i=>i!==null)}function Ct(t){const e=t.currentTarget,i=e.closest("li")?.querySelector(":scope > ul");if(!i)return;i.hasAttribute("hidden")?(i.removeAttribute("hidden"),e.setAttribute("aria-expanded","true"),e.setAttribute("aria-label","Inklappen"),e.classList.add("showing-children")):(i.setAttribute("hidden",""),e.setAttribute("aria-expanded","false"),e.setAttribute("aria-label","Uitklappen"),e.classList.remove("showing-children"))}function M(t,e="smooth"){const i=t.currentTarget.getAttribute("href");if(!i||!i.startsWith("#"))return;const s=i.substring(1);if(!s)return;const o=document.getElementById(s);o&&(t.preventDefault(),history.pushState(null,"",i),o.scrollIntoView({behavior:e,block:"start"}))}function dt(t,e="smooth"){t.forEach(n=>{n.querySelectorAll('a[href^="#"], vl-link[href^="#"]').forEach(s=>{if(s.tagName.toLowerCase()==="vl-link"){const o=s.shadowRoot?.querySelector("a");o&&o.addEventListener("click",a=>M(a,e))}else s.addEventListener("click",o=>M(o,e))})})}function ht(t){t.forEach(e=>{e.querySelectorAll("li > ul").forEach(s=>{s.setAttribute("hidden","")}),e.querySelectorAll(".toggle-button").forEach(s=>{s.setAttribute("aria-expanded","false"),s.setAttribute("aria-label","Uitklappen"),s.classList.remove("showing-children")})})}function ut(t,e){t.forEach(n=>{n.querySelectorAll('a[href^="#"], vl-link[href^="#"]').forEach(s=>{const o=s.getAttribute("href");o&&(o.substring(1)===e?(s.classList.add("active"),s.setAttribute("aria-current","location")):(s.classList.remove("active"),s.removeAttribute("aria-current")))})})}function pt(t,e){for(const n of t){const i=n.querySelectorAll('a[href^="#"], vl-link[href^="#"]');for(const s of Array.from(i)){const o=s.getAttribute("href");if(o&&o.substring(1)===e)return s}}return null}function ft(t){const e=new Set;let n=t.closest("li");for(;n;){const i=n.parentElement;if(i&&i.tagName==="UL")e.add(i),n=i.parentElement?.closest("li")??null;else break}return e}function gt(t){const e=t.parentElement;if(!e||e.tagName!=="LI")return null;const n=e.querySelector(":scope > ul"),i=e.querySelectorAll('a[href^="#"], vl-link[href^="#"]');return Array.from(i).find(s=>!n?.contains(s))??null}function mt(t,e){const n=pt(t,e),i=n?ft(n):new Set;if(n){const o=n.closest("li")?.querySelector(":scope > ul");o&&i.add(o)}for(const s of t)s.querySelectorAll("li > ul").forEach(a=>{const r=i.has(a),c=typeof document<"u"&&document.activeElement?a.contains(document.activeElement):!1,f=r||c;f?a.removeAttribute("hidden"):a.setAttribute("hidden","");const y=gt(a);y&&y.setAttribute("aria-expanded",String(f));const u=a.parentElement?.querySelector(":scope > .nav-item-wrapper > .toggle-button");u&&(u.setAttribute("aria-expanded",String(f)),u.setAttribute("aria-label",f?"Inklappen":"Uitklappen"),f?u.classList.add("showing-children"):u.classList.remove("showing-children"))})}const vt=(t,e={scroll:{},state:{},callbacks:{}})=>t.headings.length>0?D(R(t.headings),e):m``,R=t=>{const e=[],n=[];return t.forEach(i=>{const s={item:i,children:[]};for(;n.length>0&&i.level<=n[n.length-1].item.level;)n.pop();n.length===0?e.push(s):n[n.length-1].children.push(s),n.push(s)}),e},D=(t,e,n,i)=>t.length?m`
        <ul id=${n??g} ?hidden=${i??!1}>
            ${t.map(s=>bt(s,e))}
        </ul>
    `:m``,bt=(t,e)=>{const{activeHeadingId:n,expandedHeadingIds:i}=e.state,{onActiveHeadingChange:s}=e.callbacks,{scrollRoot:o,scrollBehavior:a}=e.scroll,r=n===t.item.id,c=t.children.length>0,f=c&&I(t.children,n),y=i?.has(t.item.id)??!1,x=i?.has(`-${t.item.id}`)??!1,u=y||(r||f)&&!x,d=t.item.text||t.item.id,v=T=>{T.preventDefault();const H=t.item.element??yt(t.item.id,o,e.scroll.maxDepth);H&&H.scrollIntoView({behavior:a??"smooth",block:"start"})},O=T=>{T.preventDefault(),T.stopPropagation(),s?.(t.item.id,!0)},w=m`<a
        href=${`#${t.item.id}`}
        class=${r?"active":""}
        aria-current=${r?"location":g}
        @click=${v}
    >
        ${d}
    </a>`,L=c?`toc-section-${t.item.id}`:void 0,U=c?m`<button
              type="button"
              class="toggle-button"
              aria-expanded=${u?"true":"false"}
              aria-controls=${L||g}
              aria-label=${u?"Inklappen":"Uitklappen"}
              @click=${O}
          >
              <i class="vl-icon vl-icon--arrow-right-fat ${u?"showing-children":""}"></i>
          </button>`:g;return m`
        <li>
            <div class="nav-item-wrapper">${w}${U}</div>
            ${c?D(t.children,e,L,!u):g}
        </li>
    `},I=(t,e)=>{if(!e)return!1;for(const n of t)if(n.item.id===e||n.children.length>0&&I(n.children,e))return!0;return!1},B=(t,e)=>{for(const n of t){if(n.item.id===e)return n;if(n.children.length>0){const i=B(n.children,e);if(i)return i}}return null},yt=(t,e,n)=>{const i=e??document,s=`#${t}`,o=i.querySelector(s);if(o)return o;if(i instanceof Element||i instanceof ShadowRoot){const r=q(i,s);if(r instanceof HTMLElement)return r}const a=r=>{const c=N(r,s,n);return c.length>0&&c[0]instanceof HTMLElement?c[0]:null};if(i===document){const r=a(document);if(r)return r}if(i!==document){const r=a(document);if(r)return r}return null};var xt=Object.defineProperty,wt=Object.getOwnPropertyDescriptor,h=(t,e,n,i)=>{for(var s=i>1?void 0:i?wt(e,n):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(s=(i?a(e,n,s):a(s))||s);return i&&s&&xt(e,n,s),s};F([V,_,P]);let l=class extends j{constructor(){super(...arguments),this.compact=!1,this.headingElements=[],this.minLevel=2,this.maxLevel=3,this.isTableOfContentsHidden=!1,this.navigationTitle="Op deze pagina",this.activeHeadingId="",this.tocTemplate=m``,this.hasCustomToc=!1,this.expandedHeadingIds=new Set,this.isMobileView=!1,this.headingObserverMap=new Map,this.isTableOfContentsInitialized=!1,this.mediaQueryHandler=t=>this.handleMediaQueryChange(t),this.closeSideNavigation=()=>{this.isTableOfContentsHidden=!0,this.updateComplete.then(()=>{this.shadowRoot?.querySelector("#show-toc-button")?.shadowRoot?.querySelector("button")?.focus()})},this.showSideNavigation=()=>{this.isTableOfContentsHidden=!1,this.updateComplete.then(()=>{this.shadowRoot?.querySelector("#side-navigation-toc")?.focus()})}}static get styles(){return[W,nt,G(),J]}firstUpdated(){this.setupMediaQueryListener();const e=this.shadowRoot?.querySelector("slot")?.assignedElements()??[];e.length>0?this.initializeCustomToc(e):this.closest?.("vl-side-navigation-layout")?(this.buildTableOfContents(),this.setupIntersectionObserver()):requestAnimationFrame(()=>{this.isTableOfContentsInitialized||(this.buildTableOfContents(),this.setupIntersectionObserver())})}updated(t){if(t.has("headingRoot")&&this.hasCustomToc){const n=this.shadowRoot?.querySelector("slot")?.assignedElements()??[];n.length>0&&this.headingRoot&&this.extractHeadingIdsFromManualToc(n);return}if(t.has("headingRoot")&&!this.isTableOfContentsInitialized){const e=this.shadowRoot?.querySelector("slot");if(e){const n=e.assignedElements();n.length>0&&this.headingRoot?this.extractHeadingIdsFromManualToc(n):this.refreshTableOfContents()}else this.refreshTableOfContents()}(t.has("minLevel")||t.has("maxLevel")||t.has("headingRootSelector")||t.has("excludeSelectors"))&&this.isTableOfContentsInitialized&&this.refreshTableOfContents()}connectedCallback(){super.connectedCallback(),this.isTableOfContentsInitialized&&!this.intersectionObserver&&this.setupIntersectionObserver(),this.setupMediaQueryListener()}disconnectedCallback(){super.disconnectedCallback(),this.cleanupIntersectionObserver(),this.cleanupMediaQueryListener()}setupMediaQueryListener(){this.mediaQueryList||(this.mediaQueryList=window.matchMedia(`(min-width: ${S+1}px)`),this.isMobileView=!this.mediaQueryList.matches,this.mediaQueryList.addEventListener("change",this.mediaQueryHandler))}cleanupMediaQueryListener(){this.mediaQueryList&&(this.mediaQueryList.removeEventListener("change",this.mediaQueryHandler),this.mediaQueryList=void 0)}handleMediaQueryChange(t){this.isMobileView=!t.matches,t.matches&&this.isTableOfContentsHidden&&!this.compact&&(this.isTableOfContentsHidden=!1)}get isTocEffectivelyHidden(){return(this.compact||this.isMobileView)&&this.isTableOfContentsHidden}get effectiveScrollBehavior(){return typeof window>"u"?"smooth":window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"}setupIntersectionObserver(){this.cleanupIntersectionObserver();const t={root:null,rootMargin:"0px 0px -70% 0px",threshold:0};this.intersectionObserver=new IntersectionObserver(e=>this.handleIntersection(e),t),this.headingElements.forEach(e=>{const n=e.getAttribute("id");n&&(this.headingObserverMap.set(n,e),this.intersectionObserver?.observe(e))})}handleIntersection(t){const e=t.filter(n=>n.isIntersecting);if(e.length>0){const i=e.reduce((s,o)=>o.boundingClientRect.top<s.boundingClientRect.top?o:s).target.getAttribute("id");i&&i!==this.activeHeadingId&&(this.activeHeadingId=i,this.expandedHeadingIds.clear(),this.updateActiveLinks())}}updateActiveLinks(){this.hasCustomToc?this.updateManualTocActiveStates():this.updateTableOfContents(),this.dispatchEvent(new CustomEvent("active-heading-changed",{detail:{activeHeadingId:this.activeHeadingId},bubbles:!0}))}cleanupIntersectionObserver(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0),this.headingObserverMap.clear()}updateObservedElements(t){this.headingElements=t,this.setupIntersectionObserver()}render(){const t=this.compact||this.isMobileView;return m`
            <table-of-contents
                id="side-navigation-toc"
                part="toc"
                role=${t?"dialog":"region"}
                aria-modal=${t?"true":g}
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
                    ${this.hasCustomToc?g:this.tocTemplate||g}
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
        `}handleTocSlotChange(t){const n=t.target.assignedElements();n.length>0?this.initializeCustomToc(n):(this.hasCustomToc=!1,this.refreshTableOfContents())}initializeCustomToc(t){this.hasCustomToc=!0,this.extractHeadingIdsFromManualToc(t),this.adoptLightDomStyles(),ht(t),dt(t,this.effectiveScrollBehavior),this.setupIntersectionObserver()}adoptLightDomStyles(){l.lightDomStyleSheet||(l.lightDomStyleSheet=new CSSStyleSheet,l.lightDomStyleSheet.replaceSync(et.toString())),document.adoptedStyleSheets.includes(l.lightDomStyleSheet)||(document.adoptedStyleSheets=[...document.adoptedStyleSheets,l.lightDomStyleSheet])}extractHeadingIdsFromManualToc(t){const e=this.headingRoot??this.getRootNode(),n=ct(t,e);n.length>0&&(this.headingElements=n,this.setupIntersectionObserver())}updateManualTocActiveStates(){const t=this.shadowRoot?.querySelector("slot");if(!t)return;const e=t.assignedElements();ut(e,this.activeHeadingId),mt(e,this.activeHeadingId)}get tableOfContents(){return this.shadowRoot?.querySelector("table-of-contents")}buildTableOfContents(){const t=at(this.headingRoot,this.headingRootSelector,this.getRootNode());this.tableOfContentsStructure=it(t,{minLevel:this.minLevel,maxLevel:this.maxLevel,maxDepth:this.maxDepth,excludeSelectors:this.excludeSelectors}),this.headingElements=this.tableOfContentsStructure.elements,this.updateObservedElements(this.headingElements),this.updateTableOfContents(),this.isTableOfContentsInitialized=!0}updateTableOfContents(){if(!this.tableOfContentsStructure)return;const t=this.headingRoot??this.getRootNode();this.tocTemplate=vt(this.tableOfContentsStructure,{scroll:{scrollRoot:t,scrollBehavior:this.effectiveScrollBehavior,maxDepth:this.maxDepth},state:{activeHeadingId:this.activeHeadingId,expandedHeadingIds:this.expandedHeadingIds},callbacks:{onActiveHeadingChange:(e,n)=>{if(n&&this.tableOfContentsStructure){const i=this.expandedHeadingIds.has(e),s=this.expandedHeadingIds.has(`-${e}`),o=this.activeHeadingId===e,a=R(this.tableOfContentsStructure.headings),r=B(a,e),c=r?I(r.children,this.activeHeadingId):!1;i?this.expandedHeadingIds.delete(e):s?this.expandedHeadingIds.delete(`-${e}`):o||c?this.expandedHeadingIds.add(`-${e}`):this.expandedHeadingIds.add(e),this.expandedHeadingIds=new Set(this.expandedHeadingIds),this.updateTableOfContents()}}}})}refreshTableOfContents(){this.tableOfContentsStructure=void 0,this.isTableOfContentsInitialized=!1,this.buildTableOfContents()}};h([p({type:Boolean,reflect:!0})],l.prototype,"compact",2);h([p({type:Array})],l.prototype,"headingElements",2);h([p({attribute:!1})],l.prototype,"headingRoot",2);h([p({type:String,attribute:"heading-root-selector"})],l.prototype,"headingRootSelector",2);h([p({type:Number,attribute:"min-level"})],l.prototype,"minLevel",2);h([p({type:Number,attribute:"max-level"})],l.prototype,"maxLevel",2);h([p({type:Boolean,attribute:"closed",reflect:!0})],l.prototype,"isTableOfContentsHidden",2);h([p({type:Number,attribute:"max-depth"})],l.prototype,"maxDepth",2);h([p({type:String,attribute:"exclude-selectors"})],l.prototype,"excludeSelectors",2);h([p({type:String,attribute:"navigation-title"})],l.prototype,"navigationTitle",2);h([C()],l.prototype,"activeHeadingId",2);h([C()],l.prototype,"tocTemplate",2);h([C()],l.prototype,"hasCustomToc",2);h([C()],l.prototype,"expandedHeadingIds",2);h([C()],l.prototype,"isMobileView",2);l=h([Z("vl-side-navigation-next")],l);export{l as V,p as n,Ct as t};
