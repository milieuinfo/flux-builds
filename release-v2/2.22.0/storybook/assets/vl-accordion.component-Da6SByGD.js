import{p,q as u,x as f,E as v,F as _,cA as b,b8 as x,i as T,r as m,bq as y,B as w,cB as $,bp as S,H as L,bT as k,G as B,bA as P,b as l,A,I as c,w as E}from"./iframe-ylVHDfb1.js";const h="important",D=" !"+h,H=p(class extends u{constructor(e){if(super(e),e.type!==f.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((o,i)=>{const t=e[i];return t==null?o:o+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${t};`},"")}update(e,[o]){const{style:i}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(o)),this.render(o);for(const t of this.ft)o[t]==null&&(this.ft.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(const t in o){const n=o[t];if(n!=null){this.ft.add(t);const d=typeof n=="string"&&n.endsWith(D);t.includes("-")||d?i.setProperty(t,d?n.slice(0,-11):n,d?h:""):i[t]=n}}return v}}),C=T`
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
            ${x()};
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

    @media screen and (max-width: ${_}px) {
        .accordion__title {
            font-size: var(--vl-font-size);
        }
    }

    @media screen and (max-width: ${b}px) {
        .accordion__panel {
            padding: var(--vl-spacing--xsmall);
        }
    }
`,s={open:!1,toggleText:"",openToggleText:"",closeToggleText:"",contentPadding:"",headingLevel:"",icon:"",altBackground:!1,bold:!1,disabled:!1};var O=Object.defineProperty,V=Object.getOwnPropertyDescriptor,a=(e,o,i,t)=>{for(var n=t>1?void 0:t?V(o,i):o,d=e.length-1,g;d>=0;d--)(g=e[d])&&(n=(t?g(o,i,n):g(n))||n);return t&&n&&O(o,i,n),n};const z=["1","2","3","4","5","6"];let r=class extends w{constructor(){super(...arguments),this.open=s.open,this.toggleText=s.toggleText,this.openToggleText=s.openToggleText,this.closeToggleText=s.closeToggleText,this.contentPadding=s.contentPadding,this.headingLevel=s.headingLevel,this.icon=s.icon,this.altBackground=s.altBackground,this.bold=s.bold,this.disabled=s.disabled,this.accordion=new $(this,{isDisabled:()=>this.disabled})}static get styles(){return[S,C]}show(){this.accordion.show()}hide(){this.accordion.hide()}toggle(){this.accordion.toggle()}willUpdate(e){super.willUpdate(e),this.disabled&&this.open&&(this.open=!1),e.has("headingLevel")&&this.headingLevel&&!this.isValidHeadingLevel()&&console.warn(`De waarde "${this.headingLevel}" van het attribuut "heading-level" is ongeldig. Gebruik een waarde tussen 1 en 6.`)}firstUpdated(e){super.firstUpdated(e),!(this.toggleText||this.openToggleText||this.closeToggleText)&&L(this,"trigger").length===0&&console.warn("vl-accordion-next: geef de toggle-knop een naam met toggle-text of de trigger slot.")}render(){const e=this.accordion.isExpanded,o=k[this.contentPadding];return l`
            <div
                part=${e?"base expanded":"base"}
                class=${B({accordion:!0,"accordion--open":e,"accordion--has-icon":!!this.icon})}
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
                    hidden=${P(this.accordion.contentHidden)}
                    @beforematch=${this.accordion.handleBeforeMatch}
                >
                    <div class="accordion__panel" style=${H({padding:o})}>
                        <slot name="content"></slot>
                    </div>
                </div>
            </div>
        `}renderTrigger(e){return l`
            <button
                id="trigger"
                part="trigger"
                class="accordion__trigger"
                aria-expanded=${String(e)}
                aria-controls="content"
                ?disabled=${this.disabled}
                @click=${()=>this.toggle()}
            >
                ${this.icon?l`<vl-icon class="accordion__custom-icon" icon=${this.icon} aria-hidden="true"></vl-icon>`:A}
                <vl-icon part="icon" class="accordion__icon" icon="arrow-down-fat" aria-hidden="true"></vl-icon>
                <slot name="trigger" class="accordion__title">${this.getTriggerText(e)}</slot>
            </button>
        `}renderHeading(e){if(!this.isValidHeadingLevel())return e;switch(this.headingLevel){case"1":return l`<h1 class="accordion__heading">${e}</h1>`;case"2":return l`<h2 class="accordion__heading">${e}</h2>`;case"3":return l`<h3 class="accordion__heading">${e}</h3>`;case"4":return l`<h4 class="accordion__heading">${e}</h4>`;case"5":return l`<h5 class="accordion__heading">${e}</h5>`;default:return l`<h6 class="accordion__heading">${e}</h6>`}}isValidHeadingLevel(){return z.includes(this.headingLevel)}getTriggerText(e){return this.openToggleText||this.closeToggleText?e?this.closeToggleText:this.openToggleText:this.toggleText}};m([y]);a([c({type:Boolean,reflect:!0})],r.prototype,"open",2);a([c({type:String,reflect:!0,attribute:"toggle-text"})],r.prototype,"toggleText",2);a([c({type:String,reflect:!0,attribute:"open-toggle-text"})],r.prototype,"openToggleText",2);a([c({type:String,reflect:!0,attribute:"close-toggle-text"})],r.prototype,"closeToggleText",2);a([c({type:String,reflect:!0,attribute:"content-padding"})],r.prototype,"contentPadding",2);a([c({type:String,reflect:!0,attribute:"heading-level"})],r.prototype,"headingLevel",2);a([c({type:String,reflect:!0})],r.prototype,"icon",2);a([c({type:Boolean,reflect:!0,attribute:"alt-background"})],r.prototype,"altBackground",2);a([c({type:Boolean,reflect:!0})],r.prototype,"bold",2);a([c({type:Boolean,reflect:!0})],r.prototype,"disabled",2);r=a([E("vl-accordion-next")],r);export{r as V,s as a};
