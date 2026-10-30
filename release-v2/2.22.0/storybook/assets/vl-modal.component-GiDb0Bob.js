import{i as m,r as f,bv as v,I as s,B as b,bw as w,bx as y,by as C,l as E,y as O,bz as D,aV as _,A as c,G as L,bA as p,b as h,w as k}from"./iframe-ylVHDfb1.js";const T=m`
    :host([allow-overflow]) dialog,
    :host([allow-overflow]) dialog .vl-modal-dialog__wrapper {
        overflow: visible;
    }

    :host .vl-modal-dialog[open]:focus,
    :host .vl-modal-dialog.vl-modal-dialog--opened:focus {
        outline: 3px solid color-mix(in srgb, var(--vl-color--border-action-subtle) 70%, transparent);
        outline-offset: -3px;
    }

    :host .vl-modal-dialog--full-screen .vl-modal-dialog__wrapper,
    :host .vl-modal-dialog--left .vl-modal-dialog__wrapper,
    :host .vl-modal-dialog--right .vl-modal-dialog__wrapper {
        height: 100%;
    }

    .vl-modal-dialog__close {
        cursor: pointer;
    }

    /* Verwijder transform-gebaseerde centering van de center modal.
       De <dialog> met showModal() wordt automatisch gecentreerd door de browser
       via de UA stylesheet (margin: auto op de ::backdrop pseudo-element).

       govflanders-style gebruikt: top: 50%; left: 50%; margin: 0; transform: translate(-50%, -50%).
       Dit veroorzaakt problemen voor position: fixed en CSS Anchor Positioning in child elementen,
       omdat transform een nieuw containing block creëert.

       De fix: alle vier properties overschrijven naar de browser defaults voor <dialog>. */
    .vl-modal-dialog:not(.vl-modal-dialog--full-screen):not(.vl-modal-dialog--left):not(.vl-modal-dialog--right) {
        transform: none;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        max-height: 85vh;
    }

    .vl-modal-dialog--full-screen {
        left: 0;
        right: 0;
        top: 0px;
        transform: initial;
        max-height: initial;
        max-width: initial;
        height: 100vh;
        width: 100vw;
    }
`,u=["medium","large","full-screen","left","right"],M=["modal-close","data-modal-close"],S='button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])';var A=Object.defineProperty,$=Object.getOwnPropertyDescriptor,i=(e,o,t,n)=>{for(var a=n>1?void 0:n?$(o,t):o,d=e.length-1,r;d>=0;d--)(r=e[d])&&(a=(n?r(o,t,a):r(a))||a);return n&&a&&A(o,t,a),a};let l=class extends b{constructor(){super(...arguments),this.modalId="",this.titleLabel="",this.label="",this.closable=!1,this.notCancellable=!1,this.opened=!1,this.notAutoClosable=!1,this.allowOverflow=!1,this.size="",this.position="",this.focusOnModal=!1,this.pendingTrigger=null,this.lastTrigger=null,this.lastFocusedInside=null,this.shown=!1,this.pointerDownOnBackdrop=!1,this.dialogListeners=[],this.onDialogClick=e=>{const o=this.dialogElement,t=e.composedPath();if(t.slice(0,t.indexOf(o)).some(r=>r instanceof Element&&r.getRootNode()===this.shadowRoot&&M.some(g=>r.hasAttribute(g)))){this.close();return}const d=this.pointerDownOnBackdrop;this.pointerDownOnBackdrop=!1,this.closable&&d&&this.isOnBackdrop(e)&&this.close()},this.onDialogPointerdown=e=>{this.pointerDownOnBackdrop=this.isOnBackdrop(e)},this.onDialogKeydown=e=>{if(!(e.key!=="Escape"||!this.isTopModal())){if(!this.closable){e.preventDefault(),e.stopPropagation();return}!e.isTrusted&&!e.defaultPrevented&&(this.close(),e.preventDefault())}},this.onDocumentKeydown=e=>{e.key==="Escape"&&!this.closable&&this.isTopModal()&&e.preventDefault()},this.onDialogFocusin=e=>{this.lastFocusedInside=e.composedPath()[0]},this.onDialogClose=()=>{this.dialogElement?.open||this.finishClose()}}static get styles(){return[w,y,T,C,E,O,D,_]}get dialogElement(){return this.shadowRoot?.querySelector("dialog")??null}connectedCallback(){super.connectedCallback(),this.bindOpenTriggers();const e=this.dialogElement;if(this.shown&&e?.open&&!e.matches(":modal")){e.addEventListener("close",t=>t.stopImmediatePropagation(),{capture:!0,once:!0});const o=this.lastFocusedInside;e.close(),e.showModal(),l.openModals=[...l.openModals.filter(t=>t!==this),this],o?.isConnected&&o.focus()}else this.hasUpdated&&this.opened&&!this.isOpen()&&this.syncDialog()}disconnectedCallback(){super.disconnectedCallback(),this.triggerController?.abort(),queueMicrotask(()=>{this.isConnected||(this.dialogElement?.open&&this.dialogElement.close(),this.finishClose())})}render(){const e={"vl-modal-dialog":!0,[`vl-modal-dialog--${this.size}`]:u.includes(this.size),[`vl-modal-dialog--${this.position}`]:u.includes(this.position)};return h`
            <div class="vl-modal">
                <dialog
                    class=${L(e)}
                    id=${this.modalId||"modal-dialog"}
                    tabindex="-1"
                    aria-modal="true"
                    aria-hidden=${this.opened?"false":"true"}
                    aria-labelledby=${p(this.titleLabel?"modal-toggle-title":void 0)}
                    aria-label=${p(!this.titleLabel&&this.label?this.label:void 0)}
                    @pointerdown=${this.onDialogPointerdown}
                    @focusin=${this.onDialogFocusin}
                    @click=${this.onDialogClick}
                    @keydown=${this.onDialogKeydown}
                    @close=${this.onDialogClose}
                >
                    <div class="vl-modal-dialog__wrapper" id="modal-dialog-wrapper">
                        ${this.titleLabel?h`<h2 class="vl-modal-dialog__title" id="modal-toggle-title">${this.titleLabel}</h2>`:c}
                        <div class="vl-grid vl-stacked-small">
                            <div class="vl-column vl-column--12 vl-column--m-12 vl-modal-dialog__content">
                                <slot name="content">Modal content</slot>
                            </div>
                            <div class="vl-column vl-column--12 vl-column--m-12">
                                <div id="modal-action-group" class="vl-group">
                                    <slot name="button" ?data-modal-close=${!this.notAutoClosable}></slot>
                                    ${this.notCancellable?c:h`<vl-link
                                              id="modal-toggle-cancellable"
                                              button-as-link
                                              icon="cross"
                                              icon-placement="before"
                                              modal-close
                                              >Annuleer</vl-link
                                          >`}
                                </div>
                            </div>
                        </div>
                    </div>
                    ${this.closable?h`<button id="close" type="button" class="vl-modal-dialog__close" data-modal-close>
                              <span
                                  class="vl-modal-dialog__close__icon vl-icon vl-icon--cross"
                                  aria-hidden="true"
                              ></span>
                              <span class="vl-u-visually-hidden">Venster sluiten</span>
                          </button>`:c}
                </dialog>
            </div>
        `}firstUpdated(){const e=this.dialogElement;this.dialogListeners.forEach(([o,t])=>e.addEventListener(o,t))}updated(e){e.has("opened")&&this.syncDialog(),e.has("modalId")&&this.bindOpenTriggers(),(e.has("titleLabel")||e.has("label"))&&!this.titleLabel&&!this.label&&console.warn("vl-modal-next: title-label of label attribuut is verplicht.")}open(){this.requestOpen(null)}close(){this.isOpen()?(this.opened=!1,this.syncDialog()):this.opened&&(this.opened=!1,this.pendingTrigger=null)}on(e,o){this.dialogListeners.push([e,o]),this.dialogElement?.addEventListener(e,o)}off(e,o){this.dialogListeners=this.dialogListeners.filter(([t,n])=>t!==e||n!==o),this.dialogElement?.removeEventListener(e,o)}isOpen(){return!!this.dialogElement?.open}requestOpen(e){this.isOpen()||(this.pendingTrigger=e,this.opened=!0,this.hasUpdated&&this.syncDialog())}syncDialog(){const e=this.dialogElement;!e||!e.isConnected||(this.opened&&!e.open?(this.shown&&(this.finishClose(),this.opened=!0),this.lastTrigger=this.pendingTrigger??this.deepActiveElement(),this.pendingTrigger=null,this.lastFocusedInside=null,e.showModal(),this.shown=!0,l.openModals.push(this),this.focusOnModal&&e.focus(),document.body.classList.add("vl-u-no-overflow"),document.addEventListener("keydown",this.onDocumentKeydown,!0),this.toggleAttribute("open",!0),this.dispatchEvent(new CustomEvent("vl-open",{bubbles:!0,composed:!0}))):!this.opened&&e.open&&(e.close(),this.finishClose()))}bindOpenTriggers(){if(this.triggerController?.abort(),this.triggerController=new AbortController,!this.modalId)return;const{signal:e}=this.triggerController,o=`[modal-open="${this.modalId}"],[data-modal-open="${this.modalId}"]`;this.findOpenTriggers(o).forEach(t=>{t.addEventListener("click",n=>{this.requestOpen(t),n.preventDefault()},{signal:e})})}findOpenTriggers(e){const o=Array.from(document.querySelectorAll(e));let t=this.parentNode;for(;t;)if(t instanceof ShadowRoot)o.push(...Array.from(t.querySelectorAll(e))),t=t.host.parentNode;else if(t instanceof Element)t=t.parentNode;else break;return o}isOnBackdrop(e){const o=this.dialogElement;if(e.target!==o)return!1;const t=o.getBoundingClientRect();return e.clientY<=t.top||e.clientY>=t.bottom||e.clientX<=t.left||e.clientX>=t.right}restoreFocus(e){e&&(e.focus(),e.matches(":focus-within")||e.shadowRoot?.querySelector(S)?.focus())}deepActiveElement(){let e=document.activeElement;for(;e?.shadowRoot?.activeElement;)e=e.shadowRoot.activeElement;return e instanceof HTMLElement&&e!==document.body?e:null}isTopModal(){const e=l.openModals.filter(o=>o.isOpen());return e[e.length-1]===this}finishClose(){this.shown&&(this.shown=!1,l.openModals=l.openModals.filter(e=>e!==this),document.removeEventListener("keydown",this.onDocumentKeydown,!0),this.restoreFocus(this.lastTrigger),this.lastTrigger=null,l.openModals.length===0&&document.body.classList.remove("vl-u-no-overflow"),this.opened=!1,this.toggleAttribute("open",!1),this.dispatchEvent(new CustomEvent("vl-close",{bubbles:!0,composed:!0})))}};l.openModals=[];f([v]);i([s({type:String,attribute:"id"})],l.prototype,"modalId",2);i([s({type:String,attribute:"title-label"})],l.prototype,"titleLabel",2);i([s({type:String,attribute:"label"})],l.prototype,"label",2);i([s({type:Boolean,attribute:"closable"})],l.prototype,"closable",2);i([s({type:Boolean,attribute:"not-cancellable"})],l.prototype,"notCancellable",2);i([s({type:Boolean,attribute:"open",reflect:!0})],l.prototype,"opened",2);i([s({type:Boolean,attribute:"not-auto-closable"})],l.prototype,"notAutoClosable",2);i([s({type:Boolean,attribute:"allow-overflow",reflect:!0})],l.prototype,"allowOverflow",2);i([s({type:String,attribute:"size"})],l.prototype,"size",2);i([s({type:String,attribute:"position"})],l.prototype,"position",2);i([s({type:Boolean,attribute:"focus-on-modal"})],l.prototype,"focusOnModal",2);l=i([k("vl-modal-next")],l);
