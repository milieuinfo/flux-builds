"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[6320],{"../../libs/components/src/next/button/vl-button.component.ts":(o,r,a)=>{a.d(r,{Y:()=>f});var l=a("../../libs/common/utilities/src/index.ts"),i=a("../../libs/common/utilities/src/css/global-styles-decorator.ts"),e=a("../../libs/common/utilities/src/css/icon/icon.css.ts"),t=a("../../node_modules/lit/index.js"),n=a("../../node_modules/lit/directives/class-map.js"),c=a("../../libs/common/utilities/src/css/mixin/media-queries.mixin.css.ts"),s=a("../../libs/common/utilities/src/css/mixin/outline.mixin.css.ts");let d=(o,r)=>(0,t.AH)`
    @keyframes ${(0,t.iz)(o)} {
        0% {
            box-shadow: 10px -0px ${(0,t.iz)(r)}, 20px -0px ${(0,t.iz)(r)}, 30px 0px ${(0,t.iz)(r)};
        }

        10% {
            box-shadow: 10px -3px ${(0,t.iz)(r)}, 20px -0px ${(0,t.iz)(r)}, 30px -0px ${(0,t.iz)(r)};
        }

        20% {
            box-shadow: 10px -6px ${(0,t.iz)(r)}, 20px -3px ${(0,t.iz)(r)}, 30px -0px ${(0,t.iz)(r)};
        }

        30% {
            box-shadow: 10px -3px ${(0,t.iz)(r)}, 20px -6px ${(0,t.iz)(r)}, 30px -3px ${(0,t.iz)(r)};
        }

        40% {
            box-shadow: 10px -0px ${(0,t.iz)(r)}, 20px -3px ${(0,t.iz)(r)}, 30px -6px ${(0,t.iz)(r)};
        }

        50% {
            box-shadow: 10px -0px ${(0,t.iz)(r)}, 20px -0px ${(0,t.iz)(r)}, 30px -3px ${(0,t.iz)(r)};
        }

        60% {
            box-shadow: 10px -0px ${(0,t.iz)(r)}, 20px -0px ${(0,t.iz)(r)}, 30px -0px ${(0,t.iz)(r)};
        }

        100% {
            box-shadow: 10px -0px ${(0,t.iz)(r)}, 20px -0px ${(0,t.iz)(r)}, 30px -0px ${(0,t.iz)(r)};
        }
    }
`,v="0.2rem",p="0.1rem",g=`calc(${v} - ${p})`,b="waving-light",h=(0,t.AH)`
    /* Importeer loading animation, moet op dit niveau geïmporteerd worden. */
    ${d(b,"var(--vl-action-color--disabled)")}

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
        border: ${(0,t.iz)(v)} solid var(--vl-action-color);
        border-radius: var(--vl-border-radius);
        color: var(--vl-white);
        max-width: 100%;

        ${(0,c.i)((0,t.AH)`
                padding: var(--vl-spacing--xsmall);
            `)}

        &:focus {
            ${(0,s.H)()}
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
            border: ${(0,t.iz)(v)} solid currentColor;
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
            border: ${(0,t.iz)(p)} var(--vl-action-tertiary-border-color) solid;
            transition: background-color 0.2s;
            padding: 0 calc(var(--vl-spacing--normal) + ${(0,t.iz)(g)});

            &:focus {
                color: var(--vl-action-tertiary-color--hover);
                border-color: var(--vl-action-tertiary-border-color);
            }

            &:hover,
            &:active {
                color: var(--vl-action-tertiary-color--hover);
                border-color: var(--vl-action-tertiary-border-color--hover);
                border-width: ${(0,t.iz)(v)};
                padding: 0 var(--vl-spacing--normal);
            }

            ${(0,c.i)((0,t.AH)`
                    padding: calc(
                        var(--vl-spacing--xsmall) + ${(0,t.iz)(g)}
                    );

                    &:hover,
                    &:active {
                        padding: var(--vl-spacing--xsmall);
                    }
                `)}
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
                    var(--vl-spacing--small) + ${(0,t.iz)(g)}
                );
                padding-bottom: calc(
                    var(--vl-spacing--small) + ${(0,t.iz)(g)}
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
                padding-left: calc(6rem + ${(0,t.iz)(g)});
                padding-right: calc(6rem + ${(0,t.iz)(g)});

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
                padding: 0 calc(var(--vl-spacing--xsmall) + ${(0,t.iz)(g)});

                &:hover,
                &:active {
                    padding: 0 var(--vl-spacing--xsmall);
                }

                ${(0,c.i)((0,t.AH)`
                        padding: calc(
                            var(--vl-spacing--xsmall) + ${(0,t.iz)(g)}
                        );

                        &:hover,
                        &:active {
                            padding: var(--vl-spacing--xsmall);
                        }
                    `)}
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
                animation: ${(0,t.iz)(b)} infinite 1s linear;
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

        /* Icon styles */
        &.icon-only {
            width: 3.5rem;
            padding: 0;
        }
    }
`,m="0.2rem",u="0.1rem",x=`calc(${m} - ${u})`,y="waving-light",k=(0,t.AH)`
    /* Importeer loading animation, moet op dit niveau geïmporteerd worden. */
    ${d(y,"var(--vl-action-color--disabled)")}

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
        border-radius: var(--vl-border-radius);
        color: var(--vl-white);
        max-width: 100%;

        /* link-button styles */
        text-decoration: none;

        ${(0,c.i)((0,t.AH)`
                padding: var(--vl-spacing--xsmall);
            `)}

        &:focus {
            ${(0,s.H)()}
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
            border: ${(0,t.iz)(m)} solid currentColor;
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
            border: ${(0,t.iz)(u)} var(--vl-action-tertiary-border-color) solid;
            transition: background-color 0.2s;
            padding: 0 calc(var(--vl-spacing--normal) + ${(0,t.iz)(x)});
            min-height: 3.5rem;

            &:focus {
                color: var(--vl-action-tertiary-color--hover);
                border-color: var(--vl-action-tertiary-border-color);
            }

            &:hover,
            &:active {
                color: var(--vl-action-tertiary-color--hover);
                border-color: var(--vl-action-tertiary-border-color--hover);
                border-width: ${(0,t.iz)(m)};
                padding: 0 var(--vl-spacing--normal);
            }

            ${(0,c.i)((0,t.AH)`
                    padding: calc(
                        var(--vl-spacing--xsmall) + ${(0,t.iz)(x)}
                    );

                    &:hover,
                    &:active {
                        padding: var(--vl-spacing--xsmall);
                    }
                `)}
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
                    var(--vl-spacing--small) + ${(0,t.iz)(x)}
                );
                padding-bottom: calc(
                    var(--vl-spacing--small) + ${(0,t.iz)(x)}
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
                padding-left: calc(6rem + ${(0,t.iz)(x)});
                padding-right: calc(6rem + ${(0,t.iz)(x)});

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
                padding: 0 calc(var(--vl-spacing--xsmall) + ${(0,t.iz)(x)});

                &:hover,
                &:active {
                    padding: 0 var(--vl-spacing--xsmall);
                }

                ${(0,c.i)((0,t.AH)`
                        padding: calc(
                            var(--vl-spacing--xsmall) + ${(0,t.iz)(x)}
                        );

                        &:hover,
                        &:active {
                            padding: var(--vl-spacing--xsmall);
                        }
                    `)}
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
                animation: ${(0,t.iz)(y)} infinite 1s linear;
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

        /* Icon styles */
        &.icon-only {
            width: 3.5rem;
            padding: 0;
        }
    }
`;var $=a("../../libs/components/src/next/button/vl-button.defaults.ts");class f extends l.jW{static get styles(){return[h,k,e.A]}static get properties(){return{type:{type:String},disabled:{type:Boolean},error:{type:Boolean},block:{type:Boolean},large:{type:Boolean},wide:{type:Boolean},narrow:{type:Boolean},secondary:{type:Boolean},tertiary:{type:Boolean},loading:{type:Boolean},icon:{type:String},iconPlacement:{type:String,attribute:"icon-placement",reflect:!0},iconOnly:{type:Boolean,attribute:"icon-only"},toggle:{type:Boolean},on:{type:Boolean,reflect:!0,hasChanged:(o,r)=>void 0!==r},controlled:{type:Boolean},ctaLink:{type:String,attribute:"cta-link"},external:{type:Boolean}}}updated(o){super.updated(o),o.has("on")&&this.toggle&&this.dispatchEvent(new CustomEvent("vl-toggle",{detail:{on:this.on},bubbles:!0,composed:!0})),o.has("iconPlacement")&&!this.iconPlacement&&(this.iconPlacement=$.j.iconPlacement)}render(){let o=null!==this.closest("vl-map"),r=this.tertiary||this.toggle&&!this.on,a={disabled:this.disabled,error:this.error,block:this.block,large:this.large,wide:this.wide,narrow:this.narrow,secondary:this.secondary,tertiary:r,loading:this.loading,"icon-only":this.icon&&this.iconOnly,"button-in-map":o};return this.ctaLink?(0,t.qy)`
                  <a
                      href=${this.disabled?"javascript:void(0);":this.ctaLink}
                      tabindex=${this.disabled?"-1":t.s6}
                      class=${(0,n.H)(a)}
                      role="button"
                      target=${this.ctaLink&&this.external?"_blank":t.s6}
                      @click=${this.handleLinkClick}
                      ?aria-pressed=${this.on}
                      ?aria-disabled=${this.disabled}
                  >
                      ${this.renderIcon(l.aK.BEFORE)}
                      <slot></slot>
                      ${this.renderIcon(l.aK.AFTER)}
                  </a>
              `:(0,t.qy)`<button
                  class=${(0,n.H)(a)}
                  type=${this.type}
                  ?disabled=${this.disabled}
                  @click=${this.handleClick}
              >
                  ${this.renderIcon(l.aK.BEFORE)}
                  <slot></slot>
                  ${this.renderIcon(l.aK.AFTER)}
              </button>`}renderIcon(o){if(!this.icon||o!==this.iconPlacement)return t.s6;let r={"vl-icon":!0,[`vl-icon--${this.icon}`]:!0,"vl-icon--right-margin":!this.iconOnly&&"before"===this.iconPlacement,"vl-icon--left-margin":!this.iconOnly&&"after"===this.iconPlacement};return(0,t.qy)`<span class=${(0,n.H)(r)}></span>`}handleClick(o){o.preventDefault(),o.stopPropagation(),this.toggle&&!this.controlled&&(this.on=!this.on),"submit"===this.type&&this.closest("form")?.requestSubmit(),"reset"===this.type&&this.closest("form")?.reset(),this.dispatchEvent(new CustomEvent("vl-click",{bubbles:!0,composed:!0}))}handleLinkClick(o){o.stopPropagation(),this.toggle&&!this.controlled&&(this.on=!this.on),this.dispatchEvent(new CustomEvent("vl-click",{bubbles:!0,composed:!0}))}constructor(...o){super(...o),this.type=$.j.type,this.disabled=$.j.disabled,this.error=$.j.error,this.block=$.j.block,this.large=$.j.large,this.wide=$.j.wide,this.narrow=$.j.narrow,this.secondary=$.j.secondary,this.tertiary=$.j.tertiary,this.loading=$.j.loading,this.icon=$.j.icon,this.iconPlacement=$.j.iconPlacement,this.iconOnly=$.j.iconOnly,this.toggle=$.j.toggle,this.on=$.j.on,this.controlled=$.j.controlled,this.ctaLink=$.j.ctaLink,this.external=$.j.external}}f=function(o,r,a,l){var i,e=arguments.length,t=e<3?r:null===l?l=Object.getOwnPropertyDescriptor(r,a):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)t=Reflect.decorate(o,r,a,l);else for(var n=o.length-1;n>=0;n--)(i=o[n])&&(t=(e<3?i(t):e>3?i(r,a,t):i(r,a))||t);return e>3&&t&&Object.defineProperty(r,a,t),t}([(0,i.n)(),(0,l.M1)("vl-button-next")],f)},"../../libs/components/src/next/button/vl-button.defaults.ts":(o,r,a)=>{a.d(r,{j:()=>l});let l={type:"button",disabled:!1,error:!1,block:!1,large:!1,wide:!1,narrow:!1,secondary:!1,tertiary:!1,loading:!1,icon:"",iconPlacement:"before",iconOnly:!1,toggle:!1,on:!1,controlled:!1,ctaLink:"",external:!1}}}]);