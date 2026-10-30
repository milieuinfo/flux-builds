import{bL as b,i as u,r as h,f as g,bK as v,B as m,bp as f,bn as k,bA as p,b as y,I as s,w as x}from"./iframe-ylVHDfb1.js";const C=u`
    /* de padding-block is de ruimte die de actieve achtergrond inneemt: zo blijft die binnen de host */
    :host {
        display: block;
        position: relative;
        padding-block: var(--vl-spacing--xxsmall);
    }

    :host > .vl-group {
        position: relative;
        padding-inline: var(--vl-spacing--normal);
        padding-block: 0.2rem;
    }

    /* buiten de flex-flow, even groot als .vl-group: de badge positioneert zich zoals voorheen tegenover .vl-group */
    .vl-nav-link__badge {
        position: absolute;
        inset: 0;
        pointer-events: none;
    }

    slot[name='link-badge']::slotted(*) {
        --vl-nav-link-badge-size: 1.8rem;

        position: absolute;
        top: calc(50% - var(--vl-nav-link-badge-size) / 2);
        /* verticaal gecentreerd op een hele pixel: op een halve pixel snappen de pil en de tekst op een scherm met
           pixelverhouding 1 elk een andere kant op, en staat de tekst te hoog */
        top: round(down, calc(50% - var(--vl-nav-link-badge-size) / 2), 1px);
        right: calc(var(--vl-spacing--normal) + 0.8rem);
        pointer-events: none;
        min-width: var(--vl-nav-link-badge-size);
        max-width: 50%;
        height: var(--vl-nav-link-badge-size);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: calc(var(--vl-nav-link-badge-size) / 2);
        color: var(--vl-color--text-inverse);
        background-color: var(--vl-color--background-error);
        border: 1px solid var(--vl-color--background-error);
        padding: 0 0.3rem !important;
        font-size: 0.6em !important;
        font-weight: bold !important;
    }

    vl-button:first-child {
        flex: 1;

        &::part(button),
        &::part(link) {
            justify-content: flex-start;
        }
    }

    :host([collapsed]) {
        @media screen and (min-width: ${b+1}px) {
            & > .vl-group {
                padding-inline: 0;
            }
            vl-button::part(button),
            vl-button::part(link) {
                font-size: 0;
                width: 100%;
                padding-inline: 0;
                justify-content: center !important;
            }
            vl-button::part(icon) {
                font-size: var(--vl-font-size);
            }
            slot[name='link-action'] {
                display: none;
            }
            slot[name='link-badge']::slotted(*) {
                font-size: 0.5em !important;
                min-width: 1rem !important;
                height: 1rem !important;
                border-radius: 0.5rem !important;
                right: 0.2rem;
                top: 0;
                padding: 0.2rem !important;
            }
        }
    }

    :host([active]) {
        background-color: var(--vl-color--background-action-subtle);

        vl-button::part(button),
        vl-button::part(link) {
            color: var(--vl-color--text-default);
        }

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: var(--vl-spacing--xxsmall);
            height: 100%;
            background-color: var(--vl-color--action);
        }
    }
`,r={icon:void 0,href:void 0,active:!1,collapsed:!1,external:!1,disabled:!1};var w=Object.defineProperty,z=Object.getOwnPropertyDescriptor,i=(n,e,t,l)=>{for(var a=l>1?void 0:l?z(e,t):e,d=n.length-1,c;d>=0;d--)(c=n[d])&&(a=(l?c(e,t,a):c(a))||a);return l&&a&&w(e,t,a),a};h([g]);let o=class extends m{constructor(){super(...arguments),this.icon=r.icon,this.href=r.href,this.active=r.active,this.collapsed=r.collapsed,this.external=r.external,this.disabled=r.disabled,this.badgeContent="",this.linkContent="",this.contentObserver=new MutationObserver(()=>this.updateContent()),this.onClick=n=>{if(this.disabled||n.target!==this)return;const e=this.shadowRoot?.querySelector("vl-button");!e||n.composedPath().includes(e)||e.shadowRoot?.querySelector("a, button")?.click()}}static get styles(){return[f,k,C]}updateContent(){const n=t=>t.map(l=>l.textContent).join(" ").trim(),e=[...this.childNodes].filter(t=>t.nodeType===Node.TEXT_NODE||t.nodeType===Node.ELEMENT_NODE);this.linkContent=n(e.filter(t=>!(t instanceof Element&&t.slot))),this.badgeContent=n(e.filter(t=>t instanceof Element&&t.slot==="link-badge"))}connectedCallback(){super.connectedCallback(),this.updateContent(),this.contentObserver.observe(this,{childList:!0,characterData:!0,subtree:!0,attributes:!0,attributeFilter:["slot"]}),this.addEventListener("click",this.onClick)}firstUpdated(){this.hasAttribute("role")||this.setAttribute("role","listitem")}disconnectedCallback(){super.disconnectedCallback(),this.contentObserver.disconnect(),this.removeEventListener("click",this.onClick)}render(){const n=[this.linkContent,this.badgeContent].filter(Boolean).join(", ");return y`
            <div class="vl-group vl-group--align-center">
                <vl-button
                    icon=${p(this.icon)}
                    ghost
                    aria-current=${p(this.active?"page":void 0)}
                    block
                    cta-link=${p(this.href)}
                    .label=${n}
                    narrow
                    ?external=${this.external}
                    ?disabled=${this.disabled}
                >
                    <slot></slot>
                </vl-button>

                <slot name="link-action"></slot>
                <!-- de tekst van de badge zit al in de naam van de link -->
                <span class="vl-nav-link__badge" aria-hidden="true"><slot name="link-badge"></slot></span>
            </div>
        `}};i([s({type:String,attribute:"icon"})],o.prototype,"icon",2);i([s({type:String,attribute:"href"})],o.prototype,"href",2);i([s({type:Boolean,attribute:"active",reflect:!0})],o.prototype,"active",2);i([s({type:Boolean,attribute:"collapsed",reflect:!0})],o.prototype,"collapsed",2);i([s({type:Boolean,attribute:"external"})],o.prototype,"external",2);i([s({type:Boolean,attribute:"disabled",reflect:!0})],o.prototype,"disabled",2);i([v()],o.prototype,"badgeContent",2);i([v()],o.prototype,"linkContent",2);o=i([x("vl-nav-link")],o);export{o as V,r as n};
