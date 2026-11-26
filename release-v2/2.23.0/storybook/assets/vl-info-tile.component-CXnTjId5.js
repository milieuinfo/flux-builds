import{z as y,b8 as b,i as x,r as w,bt as k,B as S,cI as L,cJ as $,bs as z,A as c,D as p,bC as v,b as n,cK as C,F as E,cg as f,ch as u,G as r,cL as B,w as I}from"./iframe-Cv28D2NX.js";class T{constructor(t){this.host=t,this.observer=new MutationObserver(a=>{a.some(g=>this.affectsSlots(g))&&this.host.requestUpdate()}),this.host.addController(this)}hostConnected(){this.observer.observe(this.host,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["slot"]})}hostDisconnected(){this.observer.disconnect()}affectsSlots(t){return t.type==="childList"?t.target===this.host:t.target.parentNode===this.host}}const A=x`
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
`,l={open:!1,toggleable:!1,clickable:!1,clickableLabel:"",center:!1,fullHeight:!1,size:"",icon:"",iconAsBadge:!1,type:"",headingLevel:"",highlight:!1,highlightLeft:!1};var H=Object.defineProperty,O=Object.getOwnPropertyDescriptor,o=(e,t,a,g)=>{for(var s=g>1?void 0:g?O(t,a):t,h=e.length-1,d;h>=0;h--)(d=e[h])&&(s=(g?d(t,a,s):d(s))||s);return g&&s&&H(t,a,s),s};const _={[u.MEDIUM]:"info-tile--m",[u.LARGE]:"info-tile--l"},m={[f.ERROR]:"info-tile--error",[f.WARNING]:"info-tile--warning",[f.SUCCESS]:"info-tile--success",[f.ALT]:"info-tile--alt"},D=["badge","trigger","subtitle","title-label","actions"];let i=class extends S{constructor(){super(...arguments),this.open=l.open,this.toggleable=l.toggleable,this.clickable=l.clickable,this.clickableLabel=l.clickableLabel,this.center=l.center,this.fullHeight=l.fullHeight,this.size=l.size,this.icon=l.icon,this.iconAsBadge=l.iconAsBadge,this.type=l.type,this.headingLevel=l.headingLevel,this.highlight=l.highlight,this.highlightLeft=l.highlightLeft,this.accordion=new L(this,{isToggleable:()=>this.toggleable}),this.slots=new T(this),this.heading=new $(this,"3")}static get styles(){return[z,A]}show(){this.accordion.show()}hide(){this.accordion.hide()}toggle(){this.accordion.toggle()}willUpdate(e){super.willUpdate(e),(e.has("clickable")||e.has("clickableLabel"))&&this.clickable&&(this.clickableLabel||console.warn("vl-info-tile-next: clickable-label is vereist."))}firstUpdated(e){super.firstUpdated(e),this.toggleable&&!this.hasSlot("trigger")&&console.warn("vl-info-tile-next: een toggleable info tile zonder trigger slot krijgt geen toggle-knop. Geef de titel mee via de trigger slot.")}render(){const e=this.accordion.isExpanded,t={"info-tile":!0,[_[this.size]??""]:!!_[this.size],[m[this.type]??""]:!!m[this.type],"info-tile--center":this.center,"info-tile--full-height":this.fullHeight,"info-tile--toggleable":this.toggleable,"info-tile--open":this.toggleable&&e};return n`
            <div part=${this.toggleable&&e?"base expanded":"base"} class=${p(t)}>
                ${this.clickable?n`<button
                          class="info-tile__clickable"
                          aria-label=${v(this.clickableLabel||void 0)}
                          @click=${this.handleClick}
                      ></button>`:c}
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
                ${this.hasSlot("footer")?n`<div part="footer" class="info-tile__footer">
                          <slot name="footer"></slot>
                      </div>`:c}
            </div>
        `}handleClick(){this.dispatchEvent(new CustomEvent("vl-click-info-tile",{bubbles:!0,composed:!0}))}renderHeader(e){return!this.icon&&!D.some(t=>this.hasSlot(t))?c:n`
            <div part="header" class="info-tile__header">
                <div class="info-tile__badge" ?hidden=${!this.icon&&!this.hasSlot("badge")}>
                    <slot name="badge"></slot>
                    ${this.renderIcon()}
                </div>
                <div class="info-tile__header-wrapper">
                    <div class="info-tile__title-wrapper">
                        ${this.renderTitle(e)}
                        ${this.hasSlot("subtitle")?n`<p part="subtitle" class="info-tile__subtitle">
                                  <slot name="subtitle"></slot>
                              </p>`:c}
                    </div>
                    <div part="actions" class="info-tile__actions">
                        <slot name="actions"></slot>
                    </div>
                </div>
            </div>
        `}renderIcon(){return this.icon?n`
            <div part="icon" class=${p({"info-tile__icon":!0,"info-tile__icon--badge":this.iconAsBadge})}>
                <vl-icon icon=${this.icon} aria-hidden="true"></vl-icon>
            </div>
        `:c}renderTrigger(e){return n`
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
        `}renderTitle(e){if(!this.hasSlot("trigger"))return c;const t=n`${this.toggleable?this.renderTrigger(e):n`<slot name="trigger"></slot>`}${this.hasSlot("title-label")?n`<slot name="title-label"></slot>`:c}`,a=this.heading.tag;return C`<${a} class="info-tile__title">${t}</${a}>`}hasSlot(e){return E(this,e).length>0}};w([k]);o([r({type:Boolean,reflect:!0})],i.prototype,"open",2);o([r({type:Boolean,reflect:!0})],i.prototype,"toggleable",2);o([r({type:Boolean,reflect:!0})],i.prototype,"clickable",2);o([r({type:String,reflect:!0,attribute:"clickable-label"})],i.prototype,"clickableLabel",2);o([r({type:Boolean,reflect:!0})],i.prototype,"center",2);o([r({type:Boolean,reflect:!0,attribute:"full-height"})],i.prototype,"fullHeight",2);o([r({type:String,reflect:!0})],i.prototype,"size",2);o([r({type:String,reflect:!0})],i.prototype,"icon",2);o([r({type:Boolean,reflect:!0,attribute:"icon-as-badge"})],i.prototype,"iconAsBadge",2);o([r({type:String,reflect:!0})],i.prototype,"type",2);o([r(B)],i.prototype,"headingLevel",2);o([r({type:Boolean,reflect:!0})],i.prototype,"highlight",2);o([r({type:Boolean,reflect:!0,attribute:"highlight-left"})],i.prototype,"highlightLeft",2);i=o([I("vl-info-tile-next")],i);export{i as V,l as i};
