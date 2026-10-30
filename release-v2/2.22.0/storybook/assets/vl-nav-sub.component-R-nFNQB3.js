import{bL as u,i as h,r as f,bq as g,B as m,bp as y,bn as _,bA as p,b as r,bt as b,I as s,w as x}from"./iframe-ylVHDfb1.js";import{V as S}from"./vl-nav-link.component-HqPoI3Jx.js";const $=h`
    :host {
        display: block;
    }

    /* de vl-nav-links dragen zelf hun verticale ruimte (padding-block), daarom geen padding of gap hier */
    .vl-nav-sub {
        border-block: 1px solid var(--vl-color--border-default);
        background: var(--vl-color--background-default);
    }

    /* het icoon en de tekst staan op dezelfde x-positie als die van een vl-nav-link: de padding van de link plus die
       van zijn ghost vl-button, en tussen icoon en tekst dezelfde 0.5em als vl-button (waarde van vl-icon.css.ts) */
    .vl-nav-sub__label {
        display: flex;
        align-items: center;
        gap: 0.5em;
        font-weight: 500;
        font-size: var(--vl-font-size--small);
        color: var(--vl-color--text-default);
        padding-left: calc(var(--vl-spacing--normal) + var(--vl-spacing--xsmall) + 0.2rem);
        padding-right: var(--vl-spacing--normal);
        padding-top: calc(var(--vl-spacing--xsmall) + var(--vl-spacing--xxsmall));
        padding-bottom: var(--vl-spacing--xsmall);
    }

    .vl-nav-sub__items {
        display: flex;
        flex-direction: column;
    }

    :host([collapsed]) {
        @media screen and (min-width: ${u+1}px) {
            .vl-nav-sub__label-text {
                display: none;
            }
            .vl-nav-sub__label {
                justify-content: center;
                padding-inline: 0;
            }
        }
    }
`,t={label:void 0,icon:void 0,href:void 0,active:!1,collapsed:!1};var k=Object.defineProperty,C=Object.getOwnPropertyDescriptor,a=(n,i,v,o)=>{for(var e=o>1?void 0:o?C(i,v):i,c=n.length-1,d;c>=0;c--)(d=n[c])&&(e=(o?d(i,v,e):d(e))||e);return o&&e&&k(i,v,e),e};f([g,S]);let l=class extends m{constructor(){super(...arguments),this.label=t.label,this.icon=t.icon,this.href=t.href,this.active=t.active,this.collapsed=t.collapsed,this.onSlotChange=()=>{this.syncCollapsed()}}static get styles(){return[y,_,$]}firstUpdated(){this.setAttribute("role","listitem")}updated(){this.syncCollapsed()}syncCollapsed(){this.querySelectorAll("vl-nav-link").forEach(n=>{n.toggleAttribute("collapsed",this.collapsed)})}renderLabel(){return this.href?r`
                <vl-nav-link
                    id="label"
                    role="none"
                    href=${this.href}
                    icon=${p(this.icon)}
                    ?active=${this.active}
                    ?collapsed=${this.collapsed}
                    >${this.label}</vl-nav-link
                >
            `:r`
            <span id="label" class="vl-nav-sub__label" aria-hidden="true">
                ${b(this.icon,()=>r`<vl-icon icon=${this.icon}></vl-icon>`)}
                <span class="vl-nav-sub__label-text">${this.label}</span>
            </span>
        `}render(){return r`
            <div class="vl-nav-sub">
                ${b(this.label,()=>this.renderLabel())}
                <div
                    class="vl-nav-sub__items"
                    role="list"
                    aria-labelledby=${p(this.label?"label":void 0)}
                >
                    <slot @slotchange=${this.onSlotChange}></slot>
                </div>
            </div>
        `}};a([s({type:String,attribute:"label"})],l.prototype,"label",2);a([s({type:String,attribute:"icon"})],l.prototype,"icon",2);a([s({type:String,attribute:"href"})],l.prototype,"href",2);a([s({type:Boolean,attribute:"active",reflect:!0})],l.prototype,"active",2);a([s({type:Boolean,attribute:"collapsed",reflect:!0})],l.prototype,"collapsed",2);l=a([x("vl-nav-sub")],l);export{l as V,t as n};
