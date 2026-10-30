import{bJ as c,b8 as g,i as u,r as f,R as m,T as _,bq as x,bK as y,B as w,bp as T,G as b,bt as h,b as d,I as v,w as S}from"./iframe-ylVHDfb1.js";const z=u`
    /* blijft staan als de inhoud scrolt; op mobiel zet vl-dashboard de afstand onder zijn mobiele balk */
    :host {
        display: block;
        position: sticky;
        top: var(--vl-dashboard-header-sticky-top, 0);
        z-index: 1;
        background-color: var(--vl-color--background-default);
    }

    /* horizontaal dezelfde padding als de inhoud van de pagina, zie --vl-dashboard-content-inline-padding */
    .vl-dashboard-header {
        --vl-dashboard-header-padding: var(--vl-spacing--normal)
            var(--vl-dashboard-content-inline-padding, var(--vl-spacing--normal));

        box-sizing: border-box;
        min-height: 8.8rem;
        padding: var(--vl-dashboard-header-padding);
        border-bottom: 1px solid var(--vl-color--border-default);
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-wrap: wrap;
        gap: var(--vl-spacing--xsmall);

        &:not(:has(vl-title)) {
            align-items: flex-end;
            min-height: 0;
            padding: 0;
            border-bottom: 0;
        }
        &.vl-dashboard-header--has-actions {
            padding: var(--vl-dashboard-header-padding);
            border-bottom: 1px solid var(--vl-color--border-default);
        }
    }

    .vl-dashboard-header__title,
    .vl-dashboard-header__actions {
        display: flex;
        gap: var(--vl-spacing--xsmall);
        align-items: center;
        flex-wrap: wrap;
    }

    .vl-dashboard-header__title {
        /* Indien de actions ervoor zouden zorgen dat de titel kleiner wordt
         * dan --vl-dashboard-title-min-width, zorgt deze variabele ervoor dat
         * de titel de volledige breedte inneemt van de header en de actions
         * op een nieuwe lijn beginnen. */
        flex: 1 1 var(--vl-dashboard-title-min-width, 30rem);
        min-width: 0; /* Important for flex and ellipsis */

        &.vl-dashboard-header__title--untitled {
            flex-basis: 0;
        }

        vl-title::part(h1) {
            font-size: var(--vl-font-size--large);
            word-break: break-word;
            ${c()};
        }

        /* de h1 krijgt de focus na een navigatie en via de skip link; de outline vervangt die van de browser */
        vl-title::part(h1):focus-visible,
        vl-title:focus-visible {
            ${g()};
        }
    }
`,p={pageTitle:void 0,pageSubtitle:void 0,pageIcon:void 0};var A=Object.defineProperty,C=Object.getOwnPropertyDescriptor,s=(e,t,l,o)=>{for(var a=o>1?void 0:o?C(t,l):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(a=(o?r(t,l,a):r(a))||a);return o&&a&&A(t,l,a),a};f([m,_,x]);const D="vl-dashboard-page-title",$="vl-dashboard-header-update";let i=class extends w{constructor(){super(...arguments),this.pageTitle=p.pageTitle,this.pageSubtitle=p.pageSubtitle,this.pageIcon=p.pageIcon,this.hasActions=!1,this.onActionsSlotChange=e=>{const t=e.currentTarget;this.hasActions=t.assignedElements({flatten:!0}).length>0}}static get styles(){return[T,z]}connectedCallback(){super.connectedCallback(),this.hasUpdated&&this.notifyUpdate()}updated(e){e.has("pageTitle")&&this.notifyUpdate()}notifyUpdate(){this.pageTitle&&this.dispatchEvent(new CustomEvent($,{bubbles:!0,composed:!0}))}render(){const e={"vl-dashboard-header":!0,"vl-dashboard-header--has-actions":this.hasActions},t={"vl-dashboard-header__title":!0,"vl-dashboard-header__title--untitled":!this.pageTitle};return d`
            <div class=${b(e)}>
                <div class=${b(t)}>
                    ${h(this.pageIcon,()=>d`<vl-icon icon=${this.pageIcon} large></vl-icon>`)}
                    ${h(this.pageTitle,()=>d`<vl-title id=${D} tabindex="-1" type="h1" no-space-bottom
                                >${this.pageTitle}</vl-title
                            >`)}
                    ${h(this.pageSubtitle,()=>d`<vl-text annotation>${this.pageSubtitle}</vl-text>`)}
                </div>
                <div class="vl-dashboard-header__actions">
                    <slot name="header-actions" @slotchange=${this.onActionsSlotChange}></slot>
                </div>
            </div>
        `}};s([v({type:String,attribute:"page-title"})],i.prototype,"pageTitle",2);s([v({type:String,attribute:"page-subtitle"})],i.prototype,"pageSubtitle",2);s([v({type:String,attribute:"page-icon"})],i.prototype,"pageIcon",2);s([y()],i.prototype,"hasActions",2);i=s([S("vl-dashboard-header")],i);export{D,i as V,$ as a,p as d};
