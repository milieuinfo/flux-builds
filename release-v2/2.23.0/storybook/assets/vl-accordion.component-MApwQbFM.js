import{o as h,p as u,q as f,E as v,z as b,cH as x,b8 as _,i as T,r as m,bt as y,B as w,cI as $,cJ as S,bs as P,F as k,c3 as B,D as C,bC as L,b as g,A as z,cK as A,G as c,cL as D,w as O}from"./iframe-Cv28D2NX.js";const p="important",E=" !"+p,H=h(class extends u{constructor(e){if(super(e),e.type!==f.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,i)=>{const o=e[i];return o==null?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(e,[t]){const{style:i}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const o of this.ft)t[o]==null&&(this.ft.delete(o),o.includes("-")?i.removeProperty(o):i[o]=null);for(const o in t){const n=t[o];if(n!=null){this.ft.add(o);const l=typeof n=="string"&&n.endsWith(E);o.includes("-")||l?i.setProperty(o,l?n.slice(0,-11):n,l?p:""):i[o]=n}}return v}}),M=T`
    :host {
        display: block;
    }

    :host([alt-background]) {
        background-color: var(--vl-color--background-subtle);
    }

    .accordion__header {
        display: flex;
    }

    .accordion__heading {
        display: flex;
        flex: 1;
    }

    .accordion__trigger {
        display: flex;
        align-items: center;
        position: relative;
        overflow: hidden;
        width: 100%;
        padding: 0;
        border: 0;
        border-radius: 0;
        background-color: transparent;
        appearance: none;
        font-family: inherit;
        font-size: inherit;
        font-weight: 500;
        line-height: inherit;
        text-align: left;
        text-decoration: none;
        word-break: break-word;
        color: var(--vl-color--action);
        cursor: pointer;

        &:hover,
        &:focus,
        &:active {
            text-decoration: underline;
        }

        &:hover {
            color: var(--vl-color--action-hover);
        }

        &:focus,
        &:active {
            color: var(--vl-color--action-active);
        }

        &:focus-visible {
            ${_()};
        }

        &:disabled {
            color: var(--vl-color--text-subtle);
            text-decoration: none;
            cursor: not-allowed;
        }
    }

    .accordion__icon,
    .accordion__custom-icon {
        flex: 0 0 22px;
        align-self: center;
        padding-right: 0.4rem;
        line-height: 1;
        color: inherit;
    }

    .accordion--has-icon .accordion__icon {
        order: 2;
        margin-left: auto;
        padding-right: 0;
        padding-left: 0.4rem;
    }

    .accordion--open .accordion__icon::part(icon)::before {
        transform: rotate(-180deg);
    }

    .accordion__title {
        font-size: var(--vl-font-size--large);
    }

    :host([bold]) .accordion__title {
        font-weight: 700;
    }

    .accordion__subtitle {
        margin-top: 5px;
        margin-left: 22px;
        padding-left: 0.4rem;
    }

    .accordion__content {
        position: relative;
    }

    .accordion__panel {
        padding: 2.2rem;
    }

    @media screen and (max-width: ${b}px) {
        .accordion__title {
            font-size: var(--vl-font-size);
        }
    }

    @media screen and (max-width: ${x}px) {
        .accordion__panel {
            padding: var(--vl-spacing--xsmall);
        }
    }
`,s={open:!1,toggleText:"",openToggleText:"",closeToggleText:"",contentPadding:"",headingLevel:"",icon:"",altBackground:!1,bold:!1,disabled:!1};var U=Object.defineProperty,j=Object.getOwnPropertyDescriptor,a=(e,t,i,o)=>{for(var n=o>1?void 0:o?j(t,i):t,l=e.length-1,d;l>=0;l--)(d=e[l])&&(n=(o?d(t,i,n):d(n))||n);return o&&n&&U(t,i,n),n};let r=class extends w{constructor(){super(...arguments),this.open=s.open,this.toggleText=s.toggleText,this.openToggleText=s.openToggleText,this.closeToggleText=s.closeToggleText,this.contentPadding=s.contentPadding,this.headingLevel=s.headingLevel,this.icon=s.icon,this.altBackground=s.altBackground,this.bold=s.bold,this.disabled=s.disabled,this.accordion=new $(this,{isDisabled:()=>this.disabled}),this.heading=new S(this,"3")}static get styles(){return[P,M]}show(){this.accordion.show()}hide(){this.accordion.hide()}toggle(){this.accordion.toggle()}willUpdate(e){super.willUpdate(e),this.disabled&&this.open&&(this.open=!1)}firstUpdated(e){super.firstUpdated(e),!(this.toggleText||this.openToggleText||this.closeToggleText)&&k(this,"trigger").length===0&&console.warn("vl-accordion-next: geef de toggle-knop een naam met toggle-text of de trigger slot.")}render(){const e=this.accordion.isExpanded,t=B[this.contentPadding];return g`
            <div
                part=${e?"base expanded":"base"}
                class=${C({accordion:!0,"accordion--open":e,"accordion--has-icon":!!this.icon})}
            >
                <div part="header" class="accordion__header">
                    ${this.renderHeading(this.renderTrigger(e))}
                    <div part="actions" class="accordion__actions">
                        <slot name="actions"></slot>
                    </div>
                </div>
                <div part="subtitle" class="accordion__subtitle">
                    <slot name="subtitle"></slot>
                </div>
                <div
                    id="content"
                    part="content"
                    class="accordion__content"
                    hidden=${L(this.accordion.contentHidden)}
                    @beforematch=${this.accordion.handleBeforeMatch}
                >
                    <div class="accordion__panel" style=${H({padding:t})}>
                        <slot name="content"></slot>
                    </div>
                </div>
            </div>
        `}renderTrigger(e){return g`
            <button
                id="trigger"
                part="trigger"
                class="accordion__trigger"
                aria-expanded=${String(e)}
                aria-controls="content"
                ?disabled=${this.disabled}
                @click=${()=>this.toggle()}
            >
                ${this.icon?g`<vl-icon class="accordion__custom-icon" icon=${this.icon} aria-hidden="true"></vl-icon>`:z}
                <vl-icon part="icon" class="accordion__icon" icon="arrow-down-fat" aria-hidden="true"></vl-icon>
                <slot name="trigger" class="accordion__title">${this.getTriggerText(e)}</slot>
            </button>
        `}renderHeading(e){const t=this.heading.tag;return A`<${t} class="accordion__heading">${e}</${t}>`}getTriggerText(e){return this.openToggleText||this.closeToggleText?e?this.closeToggleText:this.openToggleText:this.toggleText}};m([y]);a([c({type:Boolean,reflect:!0})],r.prototype,"open",2);a([c({type:String,reflect:!0,attribute:"toggle-text"})],r.prototype,"toggleText",2);a([c({type:String,reflect:!0,attribute:"open-toggle-text"})],r.prototype,"openToggleText",2);a([c({type:String,reflect:!0,attribute:"close-toggle-text"})],r.prototype,"closeToggleText",2);a([c({type:String,reflect:!0,attribute:"content-padding"})],r.prototype,"contentPadding",2);a([c(D)],r.prototype,"headingLevel",2);a([c({type:String,reflect:!0})],r.prototype,"icon",2);a([c({type:Boolean,reflect:!0,attribute:"alt-background"})],r.prototype,"altBackground",2);a([c({type:Boolean,reflect:!0})],r.prototype,"bold",2);a([c({type:Boolean,reflect:!0})],r.prototype,"disabled",2);r=a([O("vl-accordion-next")],r);export{r as V,s as a};
