import{i as x,bd as R,E as T,cN as Z,x as b,T as g,B as ee,H as h,w as te,cO as fe,r as ve,d as pe,bt as me,bH as ge,Q as be,cP as w,bs as ye,aW as Se}from"./iframe-BAEsER5t.js";const N=x`
    color: var(--vl-color--text);
    position: relative;
    font-weight: 500;
`,M=x`
    content: '';
    height: 90%;
    display: block;
    position: absolute;
    left: -12px;
    top: 1px;
    bottom: 0;
    width: 3px;
    background-color: var(--vl-color--action-400);
`,xe=x`
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
`,we=x`
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
`,Ce=x`
    vl-side-navigation-next {
        a.active {
            ${N}

            &::before {
                ${M}
            }
        }

        vl-link.active {
            position: relative;
            display: inline-block;

            &::before {
                ${M}
            }
        }

        vl-link.active::part(link) {
            ${N}
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
                ${R()}
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
                ${R()}
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
            ${we}

            vl-button.toggle-button {
                ${xe}
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

    /* ---- Sections-mode (vl-side-navigation-section-next) ---- */

    vl-side-navigation-next vl-side-navigation-section-next {
        display: block;

        /* Verticale ruimte tussen secties; eerste sectie heeft geen top-margin. */
        & + vl-side-navigation-section-next {
            margin-top: var(--vl-spacing--medium);
        }
    }

    /* Auto-sectie container is een lichte wrapper; geen extra layout/margin nodig. */
    vl-side-navigation-next .vl-side-navigation-section-next__list {
        display: block;
    }

    vl-side-navigation-next .vl-side-navigation-section-next__title {
        display: block;
        margin-bottom: var(--vl-spacing--normal);
        font-size: var(--vl-font-size--small);
        text-transform: uppercase;
        letter-spacing: 1px;
        color: var(--vl-color--text-subtle);
        font-weight: 500;
    }

    /* Native button styling voor gegenereerde auto-sectie toggle (matcht shadow-nav). */
    vl-side-navigation-next vl-side-navigation-section-next button.toggle-button {
        flex-shrink: 0;
        width: 2.4rem;
        height: 2.4rem;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        border-radius: 0.3rem;
        background: none;
        border: none;
        cursor: pointer;
        color: var(--vl-color--action-400);
        font-family: inherit;

        &:hover {
            background-color: transparent;
            color: var(--vl-color--text);
            text-decoration: none;
        }

        &:focus {
            ${R()}
            background-color: transparent;
        }

        vl-icon {
            transition: transform 0.1s ease-in-out;

            &.showing-children {
                transform: rotate(90deg);
            }
        }
    }
`,_=x`
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
`,Te=x`
    :host {
        display: block;
        align-self: start;
        position: sticky;
        top: var(--vl-side-navigation-top, 50px);
        z-index: 1000;
    }

    :host {
        @media screen and (max-width: ${T}px) {
            ${_}
        }
    }

    :host([compact]) {
        ${_} @media screen and (width > ${T}px) {
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

    @media screen and (width > ${T}px) {
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
                ${R()}
            }

            &.active {
                ${N}
                background-color: transparent;
                border-left: none;

                &::before {
                    ${M}
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
                        ${R()}
                        background-color: transparent;
                    }

                    vl-icon {
                        transition: transform 0.1s ease-in-out;

                        &.showing-children {
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

        @media screen and (max-width: ${T}px) {
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

    nav .active-indicator-line-extras {
        display: contents;
    }

    /* Multi-active replaces the stepped per-item bars with the far-left line. */
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

    @media screen and (width > ${T}px) {
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
`,ie=(e,{selector:t="vl-title, h1, h2, h3, h4, h5, h6",minLevel:i=1,maxLevel:n=6,maxDepth:o,excludeSelectors:s})=>{if(!e)return{elements:[],headings:[]};const a=Math.max(1,Math.min(6,Number(i)||1)),r=Math.max(1,Math.min(6,Number(n)||6)),v=Z(e,t,o,0,s).filter(f=>{if(!(f instanceof HTMLElement))return!1;const S=f.getRootNode();return!(S instanceof ShadowRoot&&S.host&&S.host.tagName.toLowerCase()==="vl-title")}).map(f=>({element:f,level:Re(f)})).filter(({level:f})=>f!==null&&f>=a&&f<=r),A=new Map;v.forEach(({element:f,level:S})=>{const O=Ee(f),C=f.getAttribute("id")?.trim()??"";C&&(A.has(C)||A.set(C,{element:f,level:S,text:O,id:C}))});const m=Array.from(A.values());return Ae(m),{elements:m.map(({element:f})=>f),headings:m}},Ee=e=>$(e),k=e=>(e??"").replace(/\s+/g," ").trim(),$=(e,t=new Set)=>{if(t.has(e))return"";if(t.add(e),e.nodeType===Node.TEXT_NODE)return k(e.textContent);if(!(e instanceof Element||e instanceof ShadowRoot))return"";const i=[];if(e instanceof Element&&e.shadowRoot){const o=$(e.shadowRoot,t);return k(o)}return(e instanceof HTMLSlotElement?e.assignedNodes({flatten:!0}):Array.from(e.childNodes)).forEach(o=>{const s=$(o,t);s&&i.push(s)}),k(i.join(" "))};function Ae(e){e.sort((t,i)=>{const n=t.element.compareDocumentPosition(i.element);if(n&Node.DOCUMENT_POSITION_DISCONNECTED){const o=t.element.getBoundingClientRect(),s=i.element.getBoundingClientRect();return o.top-s.top}return n&Node.DOCUMENT_POSITION_FOLLOWING?-1:n&Node.DOCUMENT_POSITION_PRECEDING?1:0})}const Re=e=>{const t=e.tagName.toLowerCase(),i=t.match(/^h([1-6])$/);if(i)return parseInt(i[1],10);if(t==="vl-title"){const o=e.getAttribute("type"),s=e.type,r=(o||s||"h1").toLowerCase().match(/^h([1-6])$/);if(r)return parseInt(r[1],10)}const n=e.getAttribute("aria-level");if(n){const o=parseInt(n,10);if(!Number.isNaN(o))return o}return null},ne=(e,t)=>{const i=e.querySelectorAll("slot");for(const n of Array.from(i))if(n instanceof HTMLSlotElement){const o=n.assignedElements({flatten:!0});for(const s of o){if("querySelector"in s){const a=s.querySelector(t);if(a)return a}if(s.matches&&s.matches(t))return s}}return null},oe=(e,t,i)=>{if(e&&t){const n=e.querySelector?.(t);if(n)return n;if(e!==document){const o=ne(e,t);if(o)return o}return console.warn(`[vl-side-navigation-next] selector "${t}" not found within headingRoot. Using headingRoot as-is. Headings will be scanned from the entire headingRoot scope.`),e}if(e)return e;if(t){const n=i.querySelector(t);return n||(console.warn(`[vl-side-navigation-next] selector "${t}" not found in fallbackRoot. Using fallbackRoot as-is.`),i)}return i},He=e=>{const t=[];return e.forEach(i=>{[...i.querySelectorAll('a[href^="#"], vl-link[href^="#"]')].forEach(o=>{const s=o.getAttribute("href");if(s){const a=s.substring(1);a&&!t.includes(a)&&t.push(a)}})}),t},q=(e,t,i)=>{const n=`#${CSS.escape(e)}`,o=t.querySelector(n);if(o)return o;if(t instanceof Element||t instanceof ShadowRoot){const a=ne(t,n);if(a instanceof HTMLElement)return a}const s=Z(document,n,i);return s.length>0&&s[0]instanceof HTMLElement?s[0]:null};function U(e,t,i){const n=He(e);return n.length===0?[]:n.map(o=>q(o,t,i)).filter(o=>o!==null)}function Be(e){const t=e.currentTarget,n=t.closest("li")?.querySelector(":scope > ul");if(!n)return;n.hasAttribute("hidden")?(n.removeAttribute("hidden"),t.setAttribute("aria-expanded","true"),t.setAttribute("aria-label","Inklappen"),t.classList.add("showing-children")):(n.setAttribute("hidden",""),t.setAttribute("aria-expanded","false"),t.setAttribute("aria-label","Uitklappen"),t.classList.remove("showing-children"))}function V(e,t="smooth",i=document,n){const s=e.currentTarget.getAttribute("href");if(!s||!s.startsWith("#"))return;const a=s.substring(1);if(!a)return;const r=q(a,i,n);r&&(e.preventDefault(),history.pushState(null,"",s),r.scrollIntoView({behavior:t,block:"start"}))}function Q(e,t="smooth",i=document,n,o){const s=o?{signal:o}:void 0;e.forEach(a=>{a.querySelectorAll('a[href^="#"], vl-link[href^="#"]').forEach(c=>{if(c.tagName.toLowerCase()==="vl-link"){const u=c.shadowRoot?.querySelector("a");u&&u.addEventListener("click",v=>V(v,t,i,n),s)}else c.addEventListener("click",u=>V(u,t,i,n),s)})})}function j(e){e.forEach(t=>{t.querySelectorAll("li > ul").forEach(o=>{o.setAttribute("hidden","")}),t.querySelectorAll(".toggle-button").forEach(o=>{o.setAttribute("aria-expanded","false"),o.setAttribute("aria-label","Uitklappen"),o.classList.remove("showing-children")})})}function W(e,t){e.forEach(i=>{i.querySelectorAll('a[href^="#"], vl-link[href^="#"]').forEach(o=>{const s=o.getAttribute("href");if(s){const a=s.substring(1);t.has(a)?(o.classList.add("active"),o.setAttribute("aria-current","location")):(o.classList.remove("active"),o.removeAttribute("aria-current"))}})})}function Ie(e,t){for(const i of e){const n=i.querySelectorAll('a[href^="#"], vl-link[href^="#"]');for(const o of Array.from(n)){const s=o.getAttribute("href");if(s&&s.substring(1)===t)return o}}return null}function Le(e){const t=new Set;let i=e.closest("li");for(;i;){const n=i.parentElement;if(n&&n.tagName==="UL")t.add(n),i=n.parentElement?.closest("li")??null;else break}return t}function G(e,t){const i=new Set;for(const n of t){const o=Ie(e,n);if(!o)continue;for(const r of Le(o))i.add(r);const a=o.closest("li")?.querySelector(":scope > ul");a&&i.add(a)}for(const n of e)n.querySelectorAll("li > ul").forEach(s=>{const a=i.has(s),r=typeof document<"u"&&document.activeElement?s.contains(document.activeElement):!1,c=a||r;c?s.removeAttribute("hidden"):s.setAttribute("hidden","");const v=s.parentElement?.querySelector(":scope > .nav-item-wrapper > .toggle-button");v&&(v.setAttribute("aria-expanded",String(c)),v.setAttribute("aria-label",c?"Inklappen":"Uitklappen"),c?v.classList.add("showing-children"):v.classList.remove("showing-children"))})}const se=(e,t={scroll:{},state:{},callbacks:{}})=>{const i="headings"in e?H(e.headings):e;return i.length>0?ae(i,t):b``},H=e=>{const t=[],i=[];return e.forEach(n=>{const o={item:n,children:[]};for(;i.length>0&&n.level<=i[i.length-1].item.level;)i.pop();i.length===0?t.push(o):i[i.length-1].children.push(o),i.push(o)}),t},ae=(e,t,i,n)=>e.length?b`
        <ul id=${i??g} ?hidden=${n??!1}>
            ${e.map(o=>Oe(o,t))}
        </ul>
    `:b``,Oe=(e,t)=>{const{activeHeadingIds:i,expandedHeadingIds:n}=t.state,{onActiveHeadingChange:o}=t.callbacks,{scrollRoot:s,scrollBehavior:a}=t.scroll,r=i?.has(e.item.id)??!1,c=e.children.length>0,u=c&&L(e.children,i),v=n?.has(e.item.id)??!1,A=n?.has(`-${e.item.id}`)??!1,m=v||(r||u)&&!A,f=e.item.text||e.item.id,S=I=>{I.preventDefault();const B=e.item.element??q(e.item.id,s??document,t.scroll.maxDepth);B&&B.scrollIntoView({behavior:a??"smooth",block:"start"})},O=I=>{I.preventDefault(),I.stopPropagation(),o?.(e.item.id,!0)},C=b`<a
        href=${`#${e.item.id}`}
        class=${r?"active":""}
        aria-current=${r?"location":g}
        @click=${S}
    >
        ${f}
    </a>`,F=c?`toc-section-${e.item.id}`:void 0,ue=c?b`<button
              type="button"
              class="toggle-button"
              aria-expanded=${m?"true":"false"}
              aria-controls=${F||g}
              aria-label=${m?"Inklappen":"Uitklappen"}
              @click=${O}
          >
              <vl-icon
                  icon="arrow-right-fat"
                  class=${m?"showing-children":""}
              ></vl-icon>
          </button>`:g;return b`
        <li>
            <div class="nav-item-wrapper">${C}${ue}</div>
            ${c?ae(e.children,t,F,!m):g}
        </li>
    `},L=(e,t)=>{if(!t||t.size===0)return!1;for(const i of e)if(t.has(i.item.id)||i.children.length>0&&L(i.children,t))return!0;return!1},P=(e,t,i,n)=>{const o=new Set(e),s=o.has(t),a=o.has(`-${t}`),r=D(i,t),c=n.has(t),u=r?L(r.children,n):!1,v=c||u;return s?(o.delete(t),v&&o.add(`-${t}`)):a?(o.delete(`-${t}`),o.add(t)):v?o.add(`-${t}`):o.add(t),o},X=(e,t,i)=>{const n=Array.from(e).filter(o=>{if(!o.startsWith("-"))return!0;const s=o.substring(1),a=D(t,s),r=i.has(s),c=a?L(a.children,i):!1;return r||c});return n.length===e.size?e:new Set(n)},D=(e,t)=>{for(const i of e){if(i.item.id===t)return i;if(i.children.length>0){const n=D(i.children,t);if(n)return n}}return null};var ke=Object.defineProperty,Ne=Object.getOwnPropertyDescriptor,y=(e,t,i,n)=>{for(var o=n>1?void 0:n?Ne(t,i):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,i,o):a(o))||o);return n&&o&&ke(t,i,o),o};let p=class extends ee{constructor(){super(...arguments),this.type="custom"}createRenderRoot(){return this}};y([h({type:String,reflect:!0})],p.prototype,"type",2);y([h({type:String,attribute:"section-title"})],p.prototype,"sectionTitle",2);y([h({type:Number,attribute:"min-level"})],p.prototype,"minLevel",2);y([h({type:Number,attribute:"max-level"})],p.prototype,"maxLevel",2);y([h({type:String,attribute:"heading-root-selector"})],p.prototype,"headingRootSelector",2);y([h({type:Number,attribute:"max-depth"})],p.prototype,"maxDepth",2);y([h({type:String,attribute:"exclude-selectors"})],p.prototype,"excludeSelectors",2);p=y([te("vl-side-navigation-section-next")],p);function J(e){return e.length===0?"auto":e.some(E)?"sections":"custom"}function E(e){return e.tagName.toLowerCase()==="vl-side-navigation-section-next"}let K=0;const re="vl-side-navigation-section-next__title";function z(e){return e.querySelector(`:scope > .${re}`)}function le(e){const t=e.sectionTitle?.trim();let i=z(e);return t?(i||(i=document.createElement("span"),i.classList.add(re),e.prepend(i)),i.textContent!==t&&(i.textContent=t),i):(i?.remove(),null)}function ce(e,t="vl-side-nav-section-title"){let i=e.getAttribute("id");return i||(K+=1,i=`${t}-${K}`,e.setAttribute("id",i)),i}function Me(e){const t=le(e);if(!t)return;const i=e.querySelector("ul");i&&i.setAttribute("aria-labelledby",ce(t))}function de(e,t){const i=e.headingRootSelector||t.headingRootSelector;return{rootElement:oe(t.headingRoot,i,t.fallbackRoot),minLevel:e.minLevel??t.minLevel,maxLevel:e.maxLevel??t.maxLevel,maxDepth:e.maxDepth??t.maxDepth,excludeSelectors:e.excludeSelectors??t.excludeSelectors}}function he(e){let t=e.querySelector(":scope > .vl-side-navigation-section-next__list");if(t)return t;t=document.createElement("div"),t.classList.add("vl-side-navigation-section-next__list");const i=z(e);return i&&i.parentElement===e?i.after(t):e.appendChild(t),t}function $e(e,t){const i=de(e,t);return ie(i.rootElement,{minLevel:i.minLevel,maxLevel:i.maxLevel,maxDepth:i.maxDepth,excludeSelectors:i.excludeSelectors})}function Y(e,t,i){const n=he(e),o=H(t),s=se(o,i);fe(s,n);const a=z(e),r=n.querySelector(":scope > ul");a&&r&&r.setAttribute("aria-labelledby",ce(a))}function qe(e){if(e.length<2)return;const t=new Map;for(const i of e)for(const n of i.result.headings){const o=t.get(n.id);if(o&&o!==i.section){console.warn(`[vl-side-navigation-next] heading id "${n.id}" wordt geobserveerd door meerdere auto-secties. Stel per auto-sectie een eigen heading-root-selector in om overlap te vermijden.`);return}t.set(n.id,i.section)}}var De=Object.defineProperty,ze=Object.getOwnPropertyDescriptor,d=(e,t,i,n)=>{for(var o=n>1?void 0:n?ze(t,i):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,i,o):a(o))||o);return n&&o&&De(t,i,o),o};ve([pe,me,ge,be,p]);let l=class extends ee{constructor(){super(...arguments),this.compact=!1,this.childSpacing="small",this.headingElements=[],this.minLevel=2,this.maxLevel=3,this.isTableOfContentsHidden=!1,this.navigationTitle="Op deze pagina",this.multiActive=!1,this.activeHeadingId="",this.activeHeadingIds=new Set,this.tocTemplate=b``,this.hasCustomToc=!1,this.expandedHeadingIds=new Set,this.isMobileView=!1,this.mode="auto",this.autoSectionScans=[],this.headingObserverMap=new Map,this.isTableOfContentsInitialized=!1,this.mediaQueryHandler=e=>this.handleMediaQueryChange(e),this.previousTocEffectivelyHidden=!1,this.closeSideNavigation=()=>{this.isTableOfContentsHidden=!0,this.updateComplete.then(()=>{this.shadowRoot?.querySelector("#show-toc-button")?.shadowRoot?.querySelector("button")?.focus()})},this.showSideNavigation=()=>{this.isTableOfContentsHidden=!1,this.updateComplete.then(()=>{this.shadowRoot?.querySelector("#side-navigation-toc")?.focus()})}}static get styles(){return[ye,Te,Se()]}firstUpdated(){this.setupMediaQueryListener(),this.setupNavResizeObserver();const t=this.shadowRoot?.querySelector("slot")?.assignedElements()??[];this.mode=J(t),this.mode==="sections"?(this.initializeSections(t),t.some(n=>E(n)&&n.type==="auto")&&(this.sectionsRescanRafHandle=requestAnimationFrame(()=>{this.sectionsRescanRafHandle=void 0,this.refreshSections(t)}))):this.mode==="custom"?this.initializeCustomToc(t):this.closest?.("vl-side-navigation-layout-next")?(this.buildTableOfContents(),this.setupIntersectionObserver()):requestAnimationFrame(()=>{this.isTableOfContentsInitialized||(this.buildTableOfContents(),this.setupIntersectionObserver())})}updated(e){if(this.mode==="sections"&&(e.has("headingRoot")||e.has("minLevel")||e.has("maxLevel")||e.has("headingRootSelector")||e.has("maxDepth")||e.has("excludeSelectors"))){const n=this.shadowRoot?.querySelector("slot")?.assignedElements()??[];this.refreshSections(n);return}if(e.has("headingRoot")&&this.hasCustomToc){const n=this.shadowRoot?.querySelector("slot")?.assignedElements()??[];n.length>0&&this.headingRoot&&this.extractHeadingIdsFromManualToc(n);return}if(e.has("headingRoot")&&!this.isTableOfContentsInitialized){const i=this.shadowRoot?.querySelector("slot");if(i){const n=i.assignedElements();n.length>0&&this.headingRoot?this.extractHeadingIdsFromManualToc(n):this.refreshTableOfContents()}else this.refreshTableOfContents()}(e.has("minLevel")||e.has("maxLevel")||e.has("headingRootSelector")||e.has("excludeSelectors"))&&this.isTableOfContentsInitialized&&this.refreshTableOfContents(),(e.has("activeHeadingIds")||e.has("expandedHeadingIds")||e.has("multiActive")||e.has("isMobileView")||e.has("isTableOfContentsHidden")||e.has("tocTemplate"))&&this.updateComplete.then(()=>this.updateActiveIndicatorLine());const t=this.isTocEffectivelyHidden;if(t&&!this.previousTocEffectivelyHidden&&this.updateComplete.then(()=>this.handleTocVisibilityFocusRecovery()),this.previousTocEffectivelyHidden=t,(e.has("expandedHeadingIds")||e.has("activeHeadingId")||e.has("activeHeadingIds"))&&this.isFocusInsideNav()){const i=this.getDeepActiveElement();if(i&&(i.offsetParent===null||i.hasAttribute("hidden")||i.getAttribute("aria-hidden")==="true")){const o=i;this.updateComplete.then(()=>this.moveFocusToLogicalNeighbor(o))}}}connectedCallback(){super.connectedCallback(),this.isTableOfContentsInitialized&&!this.intersectionObserver&&this.setupIntersectionObserver(),this.setupMediaQueryListener(),this.updateComplete.then(()=>{this.setupFocusRecoveryObserver(),this.setupNavResizeObserver()})}disconnectedCallback(){super.disconnectedCallback(),this.sectionsRescanRafHandle!==void 0&&(cancelAnimationFrame(this.sectionsRescanRafHandle),this.sectionsRescanRafHandle=void 0),this.cleanupIntersectionObserver(),this.cleanupMediaQueryListener(),this.cleanupFocusRecoveryObserver(),this.cleanupCustomTocLinkHandlers(),this.cleanupNavResizeObserver()}setupNavResizeObserver(){if(this.navResizeObserver||typeof ResizeObserver>"u")return;const e=this.shadowRoot?.querySelector("nav");e&&(this.navResizeObserver=new ResizeObserver(()=>this.updateActiveIndicatorLine()),this.navResizeObserver.observe(e))}cleanupNavResizeObserver(){this.navResizeObserver?.disconnect(),this.navResizeObserver=void 0}setupMediaQueryListener(){this.mediaQueryList||(this.mediaQueryList=window.matchMedia(`(min-width: ${T+1}px)`),this.isMobileView=!this.mediaQueryList.matches,this.mediaQueryList.addEventListener("change",this.mediaQueryHandler))}cleanupMediaQueryListener(){this.mediaQueryList&&(this.mediaQueryList.removeEventListener("change",this.mediaQueryHandler),this.mediaQueryList=void 0)}cleanupCustomTocLinkHandlers(){this.customTocAbortController?.abort(),this.customTocAbortController=void 0}handleTocVisibilityFocusRecovery(){if(!this.isTocEffectivelyHidden||!this.isFocusInsideNav())return;this.shadowRoot?.querySelector("#show-toc-button")?.shadowRoot?.querySelector("button")?.focus()}getFocusableElementsInNav(){const e=this.shadowRoot?.querySelector("nav");if(!e)return[];const t=[],i=e.querySelector("slot");if(i&&i instanceof HTMLSlotElement){const o=i.assignedElements({flatten:!0});for(const s of o)this.collectFocusablesInTreeOrder(s,t)}return e.querySelectorAll("a[href], button").forEach(o=>{o instanceof HTMLElement&&t.push(o)}),t}collectFocusablesInTreeOrder(e,t){e instanceof HTMLElement&&(e.matches?.("a[href]")||e.matches?.("button"))&&t.push(e);const i=[];e instanceof HTMLSlotElement?i.push(...e.assignedElements({flatten:!0})):e.shadowRoot&&i.push(...Array.from(e.shadowRoot.children)),i.push(...Array.from(e.children));for(const n of i)this.collectFocusablesInTreeOrder(n,t)}getDeepActiveElement(){if(typeof document>"u")return null;let e=document.activeElement;for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}isFocusInsideNav(){const e=this.shadowRoot?.querySelector("nav");if(!e)return!1;const t=this.getDeepActiveElement();if(!t)return!1;if(e.contains(t))return!0;const i=e.querySelector("slot");return(i instanceof HTMLSlotElement?i.assignedElements({flatten:!0}):[]).some(o=>o===t||o.contains(t))}moveFocusToLogicalNeighbor(e){const t=this.getFocusableElementsInNav(),i=t.filter(o=>o.offsetParent!==null&&!o.hasAttribute("hidden")&&o.getAttribute("aria-hidden")!=="true");if(i.length===0){this.shadowRoot?.querySelector("#show-toc-button")?.shadowRoot?.querySelector("button")?.focus();return}const n=o=>{o.tagName.toLowerCase()==="vl-link"?o.shadowRoot?.querySelector("a")?.focus():o.focus()};if(this.activeHeadingId){const o=i.find(s=>(s.getAttribute("href")||s.closest("vl-link")?.getAttribute("href"))===`#${this.activeHeadingId}`);if(o){n(o);return}}if(e){const o=t.indexOf(e);if(o!==-1){const s=t.slice(0,o).reverse().find(r=>i.includes(r));if(s){n(s);return}const a=t.slice(o+1).find(r=>i.includes(r));if(a){n(a);return}}}n(i[0])}setupFocusRecoveryObserver(){if(this.focusRecoveryMutationObserver)return;const e=()=>{if(this.isFocusInsideNav()){const i=this.getDeepActiveElement();this.lastFocusedNavElement=i?new WeakRef(i):void 0}};this.shadowRoot?.addEventListener("focusin",e),this.addEventListener("focusin",e),this.focusRecoveryMutationObserver=new MutationObserver(i=>{if(typeof document>"u"||this.getDeepActiveElement()!==document.body)return;const o=this.lastFocusedNavElement?.deref();if(!o)return;i.some(a=>Array.from(a.removedNodes).some(r=>r===o||r.contains(o)))&&(this.lastFocusedNavElement=void 0,this.moveFocusToLogicalNeighbor(o))});const t=this.shadowRoot?.querySelector("nav");t&&this.focusRecoveryMutationObserver.observe(t,{childList:!0,subtree:!0}),this.focusRecoveryMutationObserver.observe(this,{childList:!0,subtree:!0})}cleanupFocusRecoveryObserver(){this.focusRecoveryMutationObserver&&(this.focusRecoveryMutationObserver.disconnect(),this.focusRecoveryMutationObserver=void 0)}handleMediaQueryChange(e){this.isMobileView=!e.matches,e.matches&&this.isTableOfContentsHidden&&!this.compact&&(this.isTableOfContentsHidden=!1)}get isTocEffectivelyHidden(){return(this.compact||this.isMobileView)&&this.isTableOfContentsHidden}get effectiveScrollBehavior(){return typeof window>"u"?"smooth":window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"}setupIntersectionObserver(){this.cleanupIntersectionObserver();const e={root:null,rootMargin:this.multiActive?"0px":"0px 0px -70% 0px",threshold:0};this.intersectionObserver=new IntersectionObserver(t=>this.handleIntersection(t),e),this.headingElements.forEach(t=>{const i=t.getAttribute("id");i&&(this.headingObserverMap.set(i,t),this.intersectionObserver?.observe(t))})}handleIntersection(e){if(this.multiActive){this.updateActiveSections();return}const t=e.filter(i=>i.isIntersecting);if(t.length>0){const n=t.reduce((o,s)=>s.boundingClientRect.top<o.boundingClientRect.top?s:o).target.getAttribute("id");n&&n!==this.activeHeadingId&&(this.activeHeadingId=n,this.activeHeadingIds=new Set([n]),this.updateActiveLinks())}}updateActiveSections(){if(typeof window>"u")return;const e=window.innerHeight||document.documentElement.clientHeight,t=this.headingElements.map(n=>({id:n.getAttribute("id")??"",top:n.getBoundingClientRect().top})).filter(n=>n.id).sort((n,o)=>n.top-o.top),i=new Set;t.forEach((n,o)=>{const s=n.top,a=o+1<t.length?t[o+1].top:1/0;s<e&&a>0&&i.add(n.id)}),!this.areSameIds(i,this.activeHeadingIds)&&(this.activeHeadingId=t.find(n=>i.has(n.id))?.id??"",this.activeHeadingIds=i,this.updateActiveLinks())}areSameIds(e,t){if(e.size!==t.size)return!1;for(const i of e)if(!t.has(i))return!1;return!0}updateActiveLinks(){this.mode==="sections"?this.updateSectionsActiveStates():this.hasCustomToc?this.updateManualTocActiveStates():this.updateTableOfContents();const e=this.headingElements.map(t=>t.getAttribute("id")).filter(t=>!!t&&this.activeHeadingIds.has(t));this.dispatchEvent(new CustomEvent("active-heading-changed",{detail:{activeHeadingId:this.activeHeadingId,activeHeadingIds:e},bubbles:!0}))}updateActiveIndicatorLine(){const e=this.shadowRoot?.querySelector("nav"),t=e?.querySelector(".active-indicator-line"),i=e?.querySelector(".active-indicator-line-extras");if(!e||!t||!i)return;if(i.replaceChildren(),!this.multiActive||this.activeHeadingIds.size===0||this.isTocEffectivelyHidden){t.style.display="none";return}const n=e.getBoundingClientRect(),o=this.getActiveLinkRuns().map(s=>{const a=s.map(u=>u.getBoundingClientRect()).filter(u=>u.height>0);if(a.length===0)return null;const r=Math.min(...a.map(u=>u.top)),c=Math.max(...a.map(u=>u.bottom));return{top:r-n.top+e.scrollTop,height:c-r}}).filter(s=>s!==null);if(o.length===0){t.style.display="none";return}this.positionIndicatorSegment(t,o[0]);for(const s of o.slice(1)){const a=document.createElement("div");a.className="active-indicator-line",a.setAttribute("aria-hidden","true"),this.positionIndicatorSegment(a,s),i.appendChild(a)}}positionIndicatorSegment(e,t){e.style.top=`${t.top}px`,e.style.height=`${t.height}px`,e.style.display="block"}getActiveLinkRuns(){return this.getNavSectionRoots().map(e=>Array.from(e.querySelectorAll("a.active, vl-link.active"))).filter(e=>e.length>0)}getNavSectionRoots(){if(this.hasCustomToc)return this.shadowRoot?.querySelector("slot")?.assignedElements()??[];const e=this.shadowRoot?.querySelector("nav");return e?[e]:[]}cleanupIntersectionObserver(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0),this.headingObserverMap.clear()}updateObservedElements(e){this.headingElements=e,this.setupIntersectionObserver()}render(){const e=this.compact||this.isMobileView;return b`
            <table-of-contents
                id="side-navigation-toc"
                part="toc"
                role=${e?"dialog":"region"}
                aria-modal=${e?"true":g}
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
                    <div class="active-indicator-line-extras" aria-hidden="true"></div>
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
        `}handleTocSlotChange(e){const i=e.target.assignedElements(),n=this.mode;this.mode=J(i),this.mode==="sections"?this.initializeSections(i):(n==="sections"&&this.cleanupSectionsState(),this.mode==="custom"?this.initializeCustomToc(i):(this.hasCustomToc=!1,this.refreshTableOfContents()))}initializeCustomToc(e){this.hasCustomToc=!0,this.extractHeadingIdsFromManualToc(e),this.adoptLightDomStyles(),j(e);const t=this.headingRoot??this.getRootNode();this.cleanupCustomTocLinkHandlers(),this.customTocAbortController=new AbortController,Q(e,this.effectiveScrollBehavior,t,this.maxDepth,this.customTocAbortController.signal),this.setupIntersectionObserver()}adoptLightDomStyles(){l.lightDomStyleSheet||(l.lightDomStyleSheet=new CSSStyleSheet,l.lightDomStyleSheet.replaceSync(Ce.toString())),document.adoptedStyleSheets.includes(l.lightDomStyleSheet)||(document.adoptedStyleSheets=[...document.adoptedStyleSheets,l.lightDomStyleSheet])}extractHeadingIdsFromManualToc(e){const t=this.headingRoot??this.getRootNode(),i=U(e,t,this.maxDepth);i.length>0&&(this.headingElements=i,this.setupIntersectionObserver())}updateManualTocActiveStates(){const e=this.shadowRoot?.querySelector("slot");if(!e)return;const t=e.assignedElements();W(t,this.activeHeadingIds),G(t,this.activeHeadingIds)}initializeSections(e){this.hasCustomToc=!0,this.adoptLightDomStyles(),this.refreshSections(e)}refreshSections(e){this.autoSectionScans=[];const t=e.filter(n=>!E(n)||n.type!=="auto");j(t);const i=this.headingRoot??this.getRootNode();this.cleanupCustomTocLinkHandlers(),this.customTocAbortController=new AbortController,Q(t,this.effectiveScrollBehavior,i,this.maxDepth,this.customTocAbortController.signal);for(const n of e)E(n)&&(le(n),n.type==="auto"&&this.scanAndRenderAutoSection(n),Me(n));qe(this.autoSectionScans),this.headingElements=this.collectAllSectionHeadingElements(e),this.setupIntersectionObserver()}scanAndRenderAutoSection(e){const t=this.getParentScanConfig(),i=$e(e,t),n=this.buildSectionRenderConfig(e,t);Y(e,i.headings,n),this.autoSectionScans.push({section:e,result:i})}buildSectionRenderConfig(e,t){const i=de(e,t);return{scroll:{scrollRoot:i.rootElement,scrollBehavior:this.effectiveScrollBehavior,maxDepth:i.maxDepth},state:{activeHeadingIds:this.activeHeadingIds,expandedHeadingIds:this.expandedHeadingIds},callbacks:{onActiveHeadingChange:(n,o)=>this.handleAutoSectionToggle(n,o)}}}handleAutoSectionToggle(e,t){if(!t)return;const i=this.autoSectionScans.flatMap(o=>o.result.headings),n=H(i);this.expandedHeadingIds=P(this.expandedHeadingIds,e,n,this.activeHeadingIds),this.rerenderAutoSections()}updateSectionsActiveStates(){const e=this.shadowRoot?.querySelector("slot");if(!e)return;const t=e.assignedElements().filter(i=>!E(i)||i.type!=="auto");W(t,this.activeHeadingIds),G(t,this.activeHeadingIds),this.rerenderAutoSections()}rerenderAutoSections(){const e=H(this.autoSectionScans.flatMap(i=>i.result.headings));this.expandedHeadingIds=X(this.expandedHeadingIds,e,this.activeHeadingIds);const t=this.getParentScanConfig();for(const i of this.autoSectionScans){const n=this.buildSectionRenderConfig(i.section,t);Y(i.section,i.result.headings,n)}}collectAllSectionHeadingElements(e){const t=new Set,i=[];for(const a of this.autoSectionScans)for(const r of a.result.elements)t.has(r)||(t.add(r),i.push(r));const n=this.headingRoot??this.getRootNode(),o=e.filter(a=>!E(a)||a.type!=="auto"),s=U(o,n,this.maxDepth);for(const a of s)t.has(a)||(t.add(a),i.push(a));return i}getParentScanConfig(){return{minLevel:this.minLevel,maxLevel:this.maxLevel,headingRoot:this.headingRoot,headingRootSelector:this.headingRootSelector,maxDepth:this.maxDepth,excludeSelectors:this.excludeSelectors,fallbackRoot:this.getRootNode()}}cleanupSectionsState(){for(const e of this.autoSectionScans)he(e.section).replaceChildren();this.autoSectionScans=[]}get tableOfContents(){return this.shadowRoot?.querySelector("table-of-contents")}buildTableOfContents(){const e=oe(this.headingRoot,this.headingRootSelector,this.getRootNode());this.tableOfContentsStructure=ie(e,{minLevel:this.minLevel,maxLevel:this.maxLevel,maxDepth:this.maxDepth,excludeSelectors:this.excludeSelectors}),this.headingElements=this.tableOfContentsStructure.elements,this.updateObservedElements(this.headingElements),this.updateTableOfContents(),this.isTableOfContentsInitialized=!0}updateTableOfContents(){if(!this.tableOfContentsStructure)return;const e=this.headingRoot??this.getRootNode(),t=H(this.tableOfContentsStructure.headings);this.expandedHeadingIds=X(this.expandedHeadingIds,t,this.activeHeadingIds),this.tocTemplate=se(t,{scroll:{scrollRoot:e,scrollBehavior:this.effectiveScrollBehavior,maxDepth:this.maxDepth},state:{activeHeadingIds:this.activeHeadingIds,expandedHeadingIds:this.expandedHeadingIds},callbacks:{onActiveHeadingChange:(i,n)=>{n&&this.tableOfContentsStructure&&(this.expandedHeadingIds=P(this.expandedHeadingIds,i,t,this.activeHeadingIds),this.updateTableOfContents())}}})}refreshTableOfContents(){this.tableOfContentsStructure=void 0,this.isTableOfContentsInitialized=!1,this.buildTableOfContents()}};d([h({type:Boolean,reflect:!0})],l.prototype,"compact",2);d([h({type:String,reflect:!0,attribute:"child-spacing"})],l.prototype,"childSpacing",2);d([h({type:Array})],l.prototype,"headingElements",2);d([h({attribute:!1})],l.prototype,"headingRoot",2);d([h({type:String,attribute:"heading-root-selector"})],l.prototype,"headingRootSelector",2);d([h({type:Number,attribute:"min-level"})],l.prototype,"minLevel",2);d([h({type:Number,attribute:"max-level"})],l.prototype,"maxLevel",2);d([h({type:Boolean,attribute:"closed",reflect:!0})],l.prototype,"isTableOfContentsHidden",2);d([h({type:Number,attribute:"max-depth"})],l.prototype,"maxDepth",2);d([h({type:String,attribute:"exclude-selectors"})],l.prototype,"excludeSelectors",2);d([h({type:String,attribute:"navigation-title"})],l.prototype,"navigationTitle",2);d([h({type:Boolean,reflect:!0,attribute:"multi-active"})],l.prototype,"multiActive",2);d([w()],l.prototype,"activeHeadingId",2);d([w()],l.prototype,"activeHeadingIds",2);d([w()],l.prototype,"tocTemplate",2);d([w()],l.prototype,"hasCustomToc",2);d([w()],l.prototype,"expandedHeadingIds",2);d([w()],l.prototype,"isMobileView",2);d([w()],l.prototype,"mode",2);l=d([te("vl-side-navigation-next")],l);export{l as V,Be as t};
