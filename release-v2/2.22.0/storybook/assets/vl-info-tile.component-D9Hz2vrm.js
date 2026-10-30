import{F as y,b8 as b,i as w,r as x,bq as k,B as S,cB as L,bp as $,A as s,G as p,bA as v,b as i,H as z,c6 as g,c7 as u,I as n,w as E}from"./iframe-ylVHDfb1.js";class B{constructor(t){this.host=t,this.observer=new MutationObserver(h=>{h.some(c=>this.affectsSlots(c))&&this.host.requestUpdate()}),this.host.addController(this)}hostConnected(){this.observer.observe(this.host,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["slot"]})}hostDisconnected(){this.observer.disconnect()}affectsSlots(t){return t.type==="childList"?t.target===this.host:t.target.parentNode===this.host}}const C=w`
    :host {
        display: block;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    .info-tile {
        display: block;
        position: relative;
        padding: 1.7rem;
        border: 1px solid var(--vl-color--border-default);
    }

    .info-tile--m {
        padding: 2.5rem;
    }

    .info-tile--l {
        padding: 4.5rem;
    }

    .info-tile--full-height {
        height: 100%;
    }

    .info-tile--alt {
        border-color: var(--vl-color--border-default);
        background-color: var(--vl-color--background-subtle);

        .info-tile__icon--badge {
            background-color: var(--vl-color--white);
        }
    }

    .info-tile--error {
        border-color: var(--vl-color--error-border);
        background-color: var(--vl-color--error-bg);

        .info-tile__icon--badge {
            background-color: var(--vl-color--error);
            border-color: var(--vl-color--error);
            color: var(--vl-color--white);
        }
    }

    .info-tile--success {
        border-color: var(--vl-color--success-border);
        background-color: var(--vl-color--success-bg);

        .info-tile__icon--badge {
            background-color: var(--vl-color--success);
            border-color: var(--vl-color--success);
            color: var(--vl-color--white);
        }
    }

    .info-tile--warning {
        border-color: var(--vl-color--warning-border);
        background-color: var(--vl-color--warning-bg);

        .info-tile__icon--badge {
            background-color: var(--vl-color--warning);
            border-color: var(--vl-color--warning);
        }
    }

    :host([highlight]) .info-tile {
        box-shadow: inset 0 0.5rem 0 0 var(--vl-color--primary);
    }

    :host([highlight-left]) .info-tile {
        box-shadow: inset 0.5rem 0 0 0 var(--vl-color--primary);
    }

    .info-tile__header {
        display: flex;
        flex: 1;
        flex-direction: row;
        justify-content: flex-start;
    }

    .info-tile__badge {
        flex-shrink: 0;
        margin-right: 1.4rem;
    }

    .info-tile__header-wrapper {
        display: flex;
        flex: 1 1 auto;
        justify-content: space-between;
    }

    .info-tile__title {
        font-size: var(--vl-font-size);
        font-weight: 500;
        line-height: 1.25;
    }

    slot[name='title-label'] {
        display: inline-block;
        margin-left: var(--vl-spacing--medium);
    }

    .info-tile__subtitle {
        margin-top: 0.3rem;
        font-size: var(--vl-font-size--xsmall);
        line-height: 1.3;
        color: var(--vl-color--text-subtle);
    }

    .info-tile__content {
        flex: 1;
        font-size: var(--vl-font-size--small);
        color: var(--vl-color--text-default);
    }

    .info-tile__header + .info-tile__content {
        margin-top: var(--vl-spacing--xsmall);
    }

    .info-tile__footer {
        margin-top: var(--vl-spacing--small);
    }

    .info-tile__icon {
        display: flex;
        flex-wrap: wrap;
        place-content: center;
        width: 4.5rem;
        height: 4.5rem;
        font-size: var(--vl-font-size--large);

        &.info-tile__icon--badge {
            border: 1px solid var(--vl-info-tile-icon-border-color);
            border-radius: 50%;
            background-color: var(--vl-info-tile-icon-background-color);
            color: var(--vl-info-tile-icon-color);
        }
    }

    .info-tile--center {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--vl-spacing--small);
        text-align: center;

        .info-tile__header {
            display: block;
        }

        .info-tile__header-wrapper {
            width: 100%;
        }

        .info-tile__badge {
            display: flex;
            flex-wrap: wrap;
            place-content: center;
            margin-right: 0;
            margin-bottom: 1.4rem;
        }

        & > * {
            margin-top: 0;
            margin-bottom: 0;
        }
    }

    .info-tile__clickable {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        border: none;
        background-color: transparent;
        cursor: pointer;

        &:focus-visible {
            ${b()};
        }
    }

    :host([clickable]) .info-tile__actions {
        z-index: var(--vl-z-layer--info-tile-menu);
    }

    .info-tile--toggleable {
        .info-tile__title-wrapper {
            flex: 1;
        }

        .info-tile__title {
            display: flex;
            align-items: center;
        }

        .info-tile__subtitle {
            margin-left: 2.2rem;
        }

        .info-tile__content {
            margin: 0;
        }

        &.info-tile--open .info-tile__content {
            margin-top: var(--vl-spacing--xsmall);
        }

        &.info-tile--open:not(.info-tile--center) .info-tile__content {
            margin-left: var(--vl-spacing--normal);
        }
    }

    .info-tile__trigger {
        display: flex;
        align-items: center;
        position: relative;
        overflow: hidden;
        flex: 0 1 auto;
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
        &:focus {
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
            ${b()};
        }

        &:only-child {
            flex-grow: 1;
        }
    }

    .info-tile__toggle-icon {
        flex-shrink: 0;
        padding-right: 0.4rem;
        line-height: 1;
        color: inherit;

        &::part(icon)::before {
            transform: rotate(90deg);
            transition: transform 0.2s;
        }
    }

    .info-tile--open .info-tile__toggle-icon::part(icon)::before {
        transform: rotate(-90deg);
    }

    @media screen and (max-width: ${y}px) {
        .info-tile {
            padding: var(--vl-spacing--xsmall);
        }

        .info-tile--m,
        .info-tile--l {
            padding: var(--vl-spacing--normal);
        }

        .info-tile__title {
            font-size: 1.5rem;
        }

        .info-tile__content {
            font-size: 1.5rem;
        }

        .info-tile--toggleable .info-tile__subtitle {
            margin-left: var(--vl-spacing--normal);
        }

        .info-tile__toggle-icon {
            font-size: var(--vl-font-size--small);
        }
    }
`,r={open:!1,toggleable:!1,clickable:!1,clickableLabel:"",center:!1,fullHeight:!1,size:"",icon:"",iconAsBadge:!1,type:"",headingLevel:"",highlight:!1,highlightLeft:!1};var A=Object.defineProperty,I=Object.getOwnPropertyDescriptor,l=(e,t,h,c)=>{for(var a=c>1?void 0:c?I(t,h):t,f=e.length-1,d;f>=0;f--)(d=e[f])&&(a=(c?d(t,h,a):d(a))||a);return c&&a&&A(t,h,a),a};const H=["1","2","3","4","5","6"],_={[u.MEDIUM]:"info-tile--m",[u.LARGE]:"info-tile--l"},m={[g.ERROR]:"info-tile--error",[g.WARNING]:"info-tile--warning",[g.SUCCESS]:"info-tile--success",[g.ALT]:"info-tile--alt"},T=["badge","trigger","subtitle","title-label","actions"];let o=class extends S{constructor(){super(...arguments),this.open=r.open,this.toggleable=r.toggleable,this.clickable=r.clickable,this.clickableLabel=r.clickableLabel,this.center=r.center,this.fullHeight=r.fullHeight,this.size=r.size,this.icon=r.icon,this.iconAsBadge=r.iconAsBadge,this.type=r.type,this.headingLevel=r.headingLevel,this.highlight=r.highlight,this.highlightLeft=r.highlightLeft,this.accordion=new L(this,{isToggleable:()=>this.toggleable}),this.slots=new B(this)}static get styles(){return[$,C]}show(){this.accordion.show()}hide(){this.accordion.hide()}toggle(){this.accordion.toggle()}willUpdate(e){super.willUpdate(e),e.has("headingLevel")&&this.headingLevel&&!this.isValidHeadingLevel()&&console.warn(`De waarde "${this.headingLevel}" van het attribuut "heading-level" is ongeldig. Gebruik een waarde tussen 1 en 6.`),(e.has("clickable")||e.has("clickableLabel"))&&this.clickable&&(this.clickableLabel||console.warn("vl-info-tile-next: clickable-label is vereist."))}firstUpdated(e){super.firstUpdated(e),this.toggleable&&!this.hasSlot("trigger")&&console.warn("vl-info-tile-next: een toggleable info tile zonder trigger slot krijgt geen toggle-knop. Geef de titel mee via de trigger slot.")}render(){const e=this.accordion.isExpanded,t={"info-tile":!0,[_[this.size]??""]:!!_[this.size],[m[this.type]??""]:!!m[this.type],"info-tile--center":this.center,"info-tile--full-height":this.fullHeight,"info-tile--toggleable":this.toggleable,"info-tile--open":this.toggleable&&e};return i`
            <div part=${this.toggleable&&e?"base expanded":"base"} class=${p(t)}>
                ${this.clickable?i`<button
                          class="info-tile__clickable"
                          aria-label=${v(this.clickableLabel||void 0)}
                          @click=${this.handleClick}
                      ></button>`:s}
                ${this.renderHeader(e)}
                <div
                    id="content"
                    part="content"
                    class="info-tile__content"
                    hidden=${v(this.accordion.contentHidden)}
                    @beforematch=${this.accordion.handleBeforeMatch}
                >
                    <slot name="content"></slot>
                </div>
                ${this.hasSlot("footer")?i`<div part="footer" class="info-tile__footer">
                          <slot name="footer"></slot>
                      </div>`:s}
            </div>
        `}handleClick(){this.dispatchEvent(new CustomEvent("vl-click-info-tile",{bubbles:!0,composed:!0}))}renderHeader(e){return!this.icon&&!T.some(t=>this.hasSlot(t))?s:i`
            <div part="header" class="info-tile__header">
                <div class="info-tile__badge" ?hidden=${!this.icon&&!this.hasSlot("badge")}>
                    <slot name="badge"></slot>
                    ${this.renderIcon()}
                </div>
                <div class="info-tile__header-wrapper">
                    <div class="info-tile__title-wrapper">
                        ${this.renderTitle(e)}
                        ${this.hasSlot("subtitle")?i`<p part="subtitle" class="info-tile__subtitle">
                                  <slot name="subtitle"></slot>
                              </p>`:s}
                    </div>
                    <div part="actions" class="info-tile__actions">
                        <slot name="actions"></slot>
                    </div>
                </div>
            </div>
        `}renderIcon(){return this.icon?i`
            <div part="icon" class=${p({"info-tile__icon":!0,"info-tile__icon--badge":this.iconAsBadge})}>
                <vl-icon icon=${this.icon} aria-hidden="true"></vl-icon>
            </div>
        `:s}renderTrigger(e){return i`
            <button
                id="trigger"
                part="trigger"
                class="info-tile__trigger"
                aria-expanded=${String(e)}
                aria-controls="content"
                @click=${()=>this.toggle()}
            >
                <vl-icon class="info-tile__toggle-icon" icon="arrow-right-fat" aria-hidden="true"></vl-icon>
                <slot name="trigger"></slot>
            </button>
        `}renderTitle(e){if(!this.hasSlot("trigger"))return s;const t=i`${this.toggleable?this.renderTrigger(e):i`<slot name="trigger"></slot>`}${this.hasSlot("title-label")?i`<slot name="title-label"></slot>`:s}`;switch(this.isValidHeadingLevel()?this.headingLevel:"3"){case"1":return i`<h1 class="info-tile__title">${t}</h1>`;case"2":return i`<h2 class="info-tile__title">${t}</h2>`;case"4":return i`<h4 class="info-tile__title">${t}</h4>`;case"5":return i`<h5 class="info-tile__title">${t}</h5>`;case"6":return i`<h6 class="info-tile__title">${t}</h6>`;default:return i`<h3 class="info-tile__title">${t}</h3>`}}hasSlot(e){return z(this,e).length>0}isValidHeadingLevel(){return H.includes(this.headingLevel)}};x([k]);l([n({type:Boolean,reflect:!0})],o.prototype,"open",2);l([n({type:Boolean,reflect:!0})],o.prototype,"toggleable",2);l([n({type:Boolean,reflect:!0})],o.prototype,"clickable",2);l([n({type:String,reflect:!0,attribute:"clickable-label"})],o.prototype,"clickableLabel",2);l([n({type:Boolean,reflect:!0})],o.prototype,"center",2);l([n({type:Boolean,reflect:!0,attribute:"full-height"})],o.prototype,"fullHeight",2);l([n({type:String,reflect:!0})],o.prototype,"size",2);l([n({type:String,reflect:!0})],o.prototype,"icon",2);l([n({type:Boolean,reflect:!0,attribute:"icon-as-badge"})],o.prototype,"iconAsBadge",2);l([n({type:String,reflect:!0})],o.prototype,"type",2);l([n({type:String,reflect:!0,attribute:"heading-level"})],o.prototype,"headingLevel",2);l([n({type:Boolean,reflect:!0})],o.prototype,"highlight",2);l([n({type:Boolean,reflect:!0,attribute:"highlight-left"})],o.prototype,"highlightLeft",2);o=l([E("vl-info-tile-next")],o);export{o as V,r as i};
