"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[2142],{"../../libs/components/src/next/button/vl-button.component.ts":(r,o,a)=>{a.d(o,{Y:()=>y});var e=a("../../libs/common/utilities/src/index.ts"),t=a("../../libs/common/utilities/src/css/index.ts"),l=a("../../node_modules/lit/index.js"),i=a("../../node_modules/lit/directives/class-map.js");let n="0.2rem",c="0.1rem",s=`calc(${n} - ${c})`,d="waving-light",v=(0,l.AH)`
    /* Importeer loading animation, moet op dit niveau geïmporteerd worden. */

    ${(0,t.Nu)(d,"var(--vl-action-color--disabled)")}
    button {
        /* Reset styles - gebaseerd op DV mixin > _buttons.scss */
        border-radius: 0;
        appearance: none;
        -webkit-appearance: none; // doesn't work without prefix on Safari iOS11
        border: 0;
        background-color: transparent;
        padding: 0;

        /* Button styles - gebaseerd op DV _button.scss */
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 3.5rem;
        font-family: inherit;
        font-size: var(--vl-font-size--small);
        font-weight: 500;
        padding: var(--vl-spacing--xxsmall) var(--vl-spacing--normal);
        background-color: var(--vl-action-color);
        border: ${(0,l.iz)(n)} solid var(--vl-action-color);
        border-radius: var(--vl-border--radius);
        color: var(--vl-white);
        max-width: 100%;

        @media screen and (max-width: ${t.gT}px) {
            padding: var(--vl-spacing--xsmall);
        }

        &:focus {
            ${(0,t._L)()}
        }

        &:hover {
            border-color: var(--vl-action-color--hover);
            background-color: var(--vl-action-color--hover);
        }

        &:active {
            border-color: var(--vl-action-color--active);
            background-color: var(--vl-action-color--active);
        }

        &.secondary {
            color: var(--vl-action-color);
            background-color: transparent;
            border: ${(0,l.iz)(n)} solid currentColor;
            transition: color 0.2s, border-color 0.2s;

            &:focus {
                color: var(--vl-action-color--active);
            }

            &:hover,
            &:active {
                color: var(--vl-action-color--hover);
            }
        }

        &.tertiary {
            color: var(--vl-action-color);
            background-color: transparent;
            border: ${(0,l.iz)(c)} var(--vl-action-tertiary-border-color) solid;
            transition: background-color 0.2s;
            padding: 0 calc(var(--vl-spacing--normal) + ${(0,l.iz)(s)});

            &:focus {
                color: var(--vl-action-tertiary-color--hover);
                border-color: var(--vl-action-tertiary-border-color);
            }

            &:hover,
            &:active {
                color: var(--vl-action-tertiary-color--hover);
                border-color: var(--vl-action-tertiary-border-color--hover);
                border-width: ${(0,l.iz)(n)};
                padding: 0 var(--vl-spacing--normal);
            }

            @media screen and (max-width: ${t.gT}px) {
                padding: calc(var(--vl-spacing--xsmall) + ${(0,l.iz)(s)});

                &:hover,
                &:active {
                    padding: var(--vl-spacing--xsmall);
                }
            }
        }

        &.error {
            background-color: var(--vl-error-color);
            border-color: var(--vl-error-color);

            &:hover,
            &:active {
                background-color: var(--vl-error-color--hover);
                border-color: var(--vl-error-color--hover);
            }

            &.secondary {
                color: var(--vl-error-color);
                background-color: transparent;

                &:hover,
                &:active {
                    color: var(--vl-error-color--hover);
                }
            }

            &.tertiary {
                color: var(--vl-error-color);
                border-color: var(--vl-error-color);
                background-color: transparent;

                &:hover,
                &:active {
                    color: var(--vl-error-color--hover);
                    border-color: var(--vl-error-color--hover);
                }
            }
        }

        &.block {
            display: flex;
            width: 100%;
        }

        &.large {
            padding-top: var(--vl-spacing--small);
            padding-bottom: var(--vl-spacing--small);
            font-size: var(--vl-font-size);

            &.tertiary {
                padding-top: calc(
                    var(--vl-spacing--small) + ${(0,l.iz)(s)}
                );
                padding-bottom: calc(
                    var(--vl-spacing--small) + ${(0,l.iz)(s)}
                );

                &:hover,
                &:active {
                    padding-top: var(--vl-spacing--small);
                    padding-bottom: var(--vl-spacing--small);
                }
            }
        }

        &.wide {
            padding-left: 6rem;
            padding-right: 6rem;

            &.tertiary {
                padding-left: calc(6rem + ${(0,l.iz)(s)});
                padding-right: calc(6rem + ${(0,l.iz)(s)});

                &:hover,
                &:active {
                    padding-left: 6rem;
                    padding-right: 6rem;
                }
            }
        }

        &.narrow {
            padding-left: var(--vl-spacing--xsmall);
            padding-right: var(--vl-spacing--xsmall);

            &.tertiary {
                padding: 0 calc(var(--vl-spacing--xsmall) + ${(0,l.iz)(s)});

                &:hover,
                &:active {
                    padding: 0 var(--vl-spacing--xsmall);
                }

                @media screen and (max-width: ${t.gT}px) {
                    padding: calc(
                        var(--vl-spacing--xsmall) + ${(0,l.iz)(s)}
                    );

                    &:hover,
                    &:active {
                        padding: var(--vl-spacing--xsmall);
                    }
                }
            }
        }

        &.disabled {
            color: var(--vl-action-color--disabled);
            background-color: var(--vl-action-background-color--disabled);
            border-color: var(--vl-action-background-color--disabled);
            cursor: not-allowed;

            &:focus,
            &:hover,
            &:active {
                color: var(--vl-action-color--disabled);
                background-color: var(--vl-action-background-color--disabled);
                border-color: var(--vl-action-background-color--disabled);
            }
        }

        &.loading {
            color: var(--vl-white);
            background-color: var(--vl-action-background-color--disabled);
            border-color: var(--vl-action-background-color--disabled);
            padding: var(--vl-spacing--xsmall) 8rem var(--vl-spacing--xsmall) 4rem;
            position: relative;

            &::after {
                animation: ${(0,l.iz)(d)} infinite 1s linear;
                content: '';
                display: block;
                position: absolute;
                top: 50%;
                right: 4rem;
                margin-top: -0.2rem;
                margin-right: 3.2rem;
                width: 0.4rem;
                height: 0.4rem;
                background-color: var(--vl-action-background-color--disabled);
                border-radius: 50%;
                box-shadow: 1rem 0 var(--vl-background-color), 2rem 0 var(--vl-background-color),
                    3rem 0 var(--vl-background-color);
            }

            &:focus,
            &:hover,
            &:active {
                color: var(--vl-white);
            }

            &.disabled {
                cursor: not-allowed;
            }
        }

        /* In map styles */

        &.button-in-map {
            &.tertiary {
                background-color: var(--vl-map-background-color);
            }
        }

        /* Empty slot styles */
        &.empty-slot {
            width: 3.5rem;
            padding: 0;
            &.tertiary {
                padding: 0;
            }
            .vl-icon {
                margin-left: 0;
                margin-right: 0;
            }
        }
    }
`,g="0.2rem",p="0.1rem",h=`calc(${g} - ${p})`,b="waving-light",m=(0,l.AH)`
    /* Importeer loading animation, moet op dit niveau geïmporteerd worden. */

    ${(0,t.Nu)(b,"var(--vl-action-color--disabled)")}
    a {
        /* Reset styles - gebaseerd op DV mixin > _buttons.scss */
        border-radius: 0;
        appearance: none;
        -webkit-appearance: none; // doesn't work without prefix on Safari iOS11
        border: 0;
        background-color: transparent;
        padding: 0;

        /* Button styles - gebaseerd op DV _button.scss */
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 2.5rem; /* verschilt van button styling */
        font-family: inherit;
        font-size: var(--vl-font-size--small);
        font-weight: 500;
        padding: var(--vl-spacing--xxsmall) var(--vl-spacing--normal);
        background-color: var(--vl-action-color);
        border: 0 solid var(--vl-action-color);
        border-radius: var(--vl-border--radius);
        color: var(--vl-white);
        max-width: 100%;

        /* link-button styles */
        text-decoration: none;

        @media screen and (max-width: ${t.gT}px) {
            padding: var(--vl-spacing--xsmall);
        }

        &:focus {
            ${(0,t._L)()}
        }

        &:hover {
            border-color: var(--vl-action-color--hover);
            background-color: var(--vl-action-color--hover);
        }

        &:active {
            border-color: var(--vl-action-color--active);
            background-color: var(--vl-action-color--active);
        }

        &.secondary {
            color: var(--vl-action-color);
            background-color: transparent;
            border: ${(0,l.iz)(g)} solid currentColor;
            transition: color 0.2s, border-color 0.2s;
            min-height: 3.1rem;

            &:focus {
                color: var(--vl-action-color--active);
            }

            &:hover,
            &:active {
                color: var(--vl-action-color--hover);
            }
        }

        &.tertiary {
            color: var(--vl-action-color);
            background-color: transparent;
            border: ${(0,l.iz)(p)} var(--vl-action-tertiary-border-color) solid;
            transition: background-color 0.2s;
            padding: 0 calc(var(--vl-spacing--normal) + ${(0,l.iz)(h)});
            min-height: 3.5rem;

            &:focus {
                color: var(--vl-action-tertiary-color--hover);
                border-color: var(--vl-action-tertiary-border-color);
            }

            &:hover,
            &:active {
                color: var(--vl-action-tertiary-color--hover);
                border-color: var(--vl-action-tertiary-border-color--hover);
                border-width: ${(0,l.iz)(g)};
                padding: 0 var(--vl-spacing--normal);
            }

            @media screen and (max-width: ${t.gT}px) {
                padding: calc(var(--vl-spacing--xsmall) + ${(0,l.iz)(h)});

                &:hover,
                &:active {
                    padding: var(--vl-spacing--xsmall);
                }
            }
        }

        &.error {
            background-color: var(--vl-error-color);
            border-color: var(--vl-error-color);

            &:hover,
            &:active {
                background-color: var(--vl-error-color--hover);
                border-color: var(--vl-error-color--hover);
            }

            &.secondary {
                color: var(--vl-error-color);
                background-color: transparent;

                &:hover,
                &:active {
                    color: var(--vl-error-color--hover);
                }
            }

            &.tertiary {
                color: var(--vl-error-color);
                border-color: var(--vl-error-color);
                background-color: transparent;

                &:hover,
                &:active {
                    color: var(--vl-error-color--hover);
                    border-color: var(--vl-error-color--hover);
                }
            }
        }

        &.block {
            display: flex;
            width: 100%;
        }

        &.large {
            padding-top: var(--vl-spacing--small);
            padding-bottom: var(--vl-spacing--small);
            font-size: var(--vl-font-size);

            &.tertiary {
                padding-top: calc(
                    var(--vl-spacing--small) + ${(0,l.iz)(h)}
                );
                padding-bottom: calc(
                    var(--vl-spacing--small) + ${(0,l.iz)(h)}
                );

                &:hover,
                &:active {
                    padding-top: var(--vl-spacing--small);
                    padding-bottom: var(--vl-spacing--small);
                }
            }
        }

        &.wide {
            padding-left: 6rem;
            padding-right: 6rem;

            &.tertiary {
                padding-left: calc(6rem + ${(0,l.iz)(h)});
                padding-right: calc(6rem + ${(0,l.iz)(h)});

                &:hover,
                &:active {
                    padding-left: 6rem;
                    padding-right: 6rem;
                }
            }
        }

        &.narrow {
            padding-left: var(--vl-spacing--xsmall);
            padding-right: var(--vl-spacing--xsmall);

            &.tertiary {
                padding: 0 calc(var(--vl-spacing--xsmall) + ${(0,l.iz)(h)});

                &:hover,
                &:active {
                    padding: 0 var(--vl-spacing--xsmall);
                }

                @media screen and (max-width: ${t.gT}px) {
                    padding: calc(
                        var(--vl-spacing--xsmall) + ${(0,l.iz)(h)}
                    );

                    &:hover,
                    &:active {
                        padding: var(--vl-spacing--xsmall);
                    }
                }
            }
        }

        &.disabled {
            color: var(--vl-action-color--disabled);
            background-color: var(--vl-action-background-color--disabled);
            border-color: var(--vl-action-background-color--disabled);
            cursor: not-allowed;

            &:focus,
            &:hover,
            &:active {
                color: var(--vl-action-color--disabled);
                background-color: var(--vl-action-background-color--disabled);
                border-color: var(--vl-action-background-color--disabled);
            }
        }

        &.loading {
            color: var(--vl-white);
            background-color: var(--vl-action-background-color--disabled);
            border-color: var(--vl-action-background-color--disabled);
            padding: var(--vl-spacing--xsmall) 8rem var(--vl-spacing--xsmall) 4rem;
            position: relative;

            &::after {
                animation: ${(0,l.iz)(b)} infinite 1s linear;
                content: '';
                display: block;
                position: absolute;
                top: 50%;
                right: 4rem;
                margin-top: -0.2rem;
                margin-right: 3.2rem;
                width: 0.4rem;
                height: 0.4rem;
                background-color: var(--vl-action-background-color--disabled);
                border-radius: 50%;
                box-shadow: 1rem 0 var(--vl-background-color), 2rem 0 var(--vl-background-color),
                    3rem 0 var(--vl-background-color);
            }

            &:focus,
            &:hover,
            &:active {
                color: var(--vl-white);
            }

            &.disabled {
                cursor: not-allowed;
            }
        }

        /* In map styles */

        &.button-in-map {
            &.tertiary {
                background-color: var(--vl-map-background-color);
            }
        }

        /* Empty slot styles */
        &.empty-slot {
            width: 3.5rem;
            padding: 0;
            min-height: 3.5rem;

            &.secondary {
                width: 3.1rem;
                min-height: 3.1rem;
                padding: 0;
            }
            &.tertiary {
                width: 3.1rem;
                min-height: 3.1rem;
                padding: 0.1rem;
            }
            .vl-icon {
                margin-left: 0;
                margin-right: 0;
            }
        }
    }
`;var u=a("../../libs/components/src/next/button/vl-button.defaults.ts");class y extends e.jW{static get styles(){return[v,m,t.mU]}static get properties(){return{type:{type:String},disabled:{type:Boolean},error:{type:Boolean},block:{type:Boolean},large:{type:Boolean},wide:{type:Boolean},narrow:{type:Boolean},secondary:{type:Boolean},tertiary:{type:Boolean},loading:{type:Boolean},icon:{type:String},iconPlacement:{type:String,attribute:"icon-placement",reflect:!0},toggle:{type:Boolean},on:{type:Boolean,reflect:!0,hasChanged:(r,o)=>void 0!==o},controlled:{type:Boolean},ctaLink:{type:String,attribute:"cta-link"},external:{type:Boolean},hasEmptySlot:{type:Boolean}}}firstUpdated(r){super.firstUpdated(r),this.isSlotEmpty()}updated(r){super.updated(r),r.has("on")&&this.toggle&&this.dispatchEvent(new CustomEvent("vl-toggle",{detail:{on:this.on},bubbles:!0,composed:!0})),r.has("iconPlacement")&&!this.iconPlacement&&(this.iconPlacement=u.j.iconPlacement)}render(){let r=null!==this.closest("vl-map"),o=this.tertiary||this.toggle&&!this.on,a={disabled:this.disabled,error:this.error,block:this.block,large:this.large,wide:this.wide,narrow:this.narrow,secondary:this.secondary,tertiary:o,loading:this.loading,"button-in-map":r,"empty-slot":this.hasEmptySlot};return this.ctaLink?(0,l.qy)`
                  <a
                      href=${this.disabled?"javascript:void(0);":this.ctaLink}
                      tabindex=${this.disabled?"-1":l.s6}
                      class=${(0,i.H)(a)}
                      role="button"
                      target=${this.ctaLink&&this.external?"_blank":l.s6}
                      @click=${this.handleLinkClick}
                      ?aria-pressed=${this.on}
                      ?aria-disabled=${this.disabled}
                  >
                      ${this.renderIcon(e.aK.BEFORE)}
                      <slot @slotchange=${this.isSlotEmpty}></slot>
                      ${this.renderIcon(e.aK.AFTER)}
                  </a>
              `:(0,l.qy)`
                  <button
                      class=${(0,i.H)(a)}
                      type=${this.type}
                      ?disabled=${this.disabled}
                      @click=${this.handleClick}
                  >
                      ${this.renderIcon(e.aK.BEFORE)}
                      <slot @slotchange=${this.isSlotEmpty}></slot>
                      ${this.renderIcon(e.aK.AFTER)}
                  </button>
              `}renderIcon(r){if(!this.icon||r!==this.iconPlacement)return l.s6;let o={"vl-icon":!0,[`vl-icon--${this.icon}`]:!0,"vl-icon--right-margin":!this.hasEmptySlot&&"before"===this.iconPlacement,"vl-icon--left-margin":!this.hasEmptySlot&&"after"===this.iconPlacement};return(0,l.qy)`<span class=${(0,i.H)(o)}></span>`}isSlotEmpty(){let r=this.shadowRoot?.querySelector("slot");this.hasEmptySlot=!!(r&&(0,e.yr)(r))}handleClick(r){r.preventDefault(),r.stopPropagation(),this.toggle&&!this.controlled&&(this.on=!this.on),"submit"===this.type&&this.closest("form")?.requestSubmit(),"reset"===this.type&&this.closest("form")?.reset(),this.dispatchEvent(new CustomEvent("vl-click",{bubbles:!0,composed:!0}))}handleLinkClick(r){r.stopPropagation(),this.toggle&&!this.controlled&&(this.on=!this.on),this.dispatchEvent(new CustomEvent("vl-click",{bubbles:!0,composed:!0}))}constructor(...r){super(...r),this.type=u.j.type,this.disabled=u.j.disabled,this.error=u.j.error,this.block=u.j.block,this.large=u.j.large,this.wide=u.j.wide,this.narrow=u.j.narrow,this.secondary=u.j.secondary,this.tertiary=u.j.tertiary,this.loading=u.j.loading,this.icon=u.j.icon,this.iconPlacement=u.j.iconPlacement,this.toggle=u.j.toggle,this.on=u.j.on,this.controlled=u.j.controlled,this.ctaLink=u.j.ctaLink,this.external=u.j.external,this.hasEmptySlot=!1}}y=function(r,o,a,e){var t,l=arguments.length,i=l<3?o:null===e?e=Object.getOwnPropertyDescriptor(o,a):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(r,o,a,e);else for(var n=r.length-1;n>=0;n--)(t=r[n])&&(i=(l<3?t(i):l>3?t(o,a,i):t(o,a))||i);return l>3&&i&&Object.defineProperty(o,a,i),i}([(0,t.nX)(),(0,e.M1)("vl-button-next")],y)},"../../libs/components/src/next/button/vl-button.defaults.ts":(r,o,a)=>{a.d(o,{j:()=>e});let e={type:"button",disabled:!1,error:!1,block:!1,large:!1,wide:!1,narrow:!1,secondary:!1,tertiary:!1,loading:!1,icon:"",iconPlacement:"before",toggle:!1,on:!1,controlled:!1,ctaLink:"",external:!1}}}]);