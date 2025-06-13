(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[5519],{"./node_modules/memoizerific sync recursive":o=>{function r(o){var r=Error("Cannot find module '"+o+"'");throw r.code="MODULE_NOT_FOUND",r}r.keys=()=>[],r.resolve=r,r.id="./node_modules/memoizerific sync recursive",o.exports=r},"./libs/common/utilities/src/css/global-styles-decorator.ts":(o,r,e)=>{"use strict";e.d(r,{Q:()=>u});var l=e("./node_modules/lit/index.js");let a=(0,l.iv)`
    :root {
        --vl-white: #ffffff;

        --vl-background-color: var(--vl-white);
        --vl-map-background-color: #ffffff;
        --vl-background-alt-color: #f7f9fc;

        --vl-text-color: #333332;
        --vl-text-alt-color: #687483;

        --vl-border-color: #8695a8;

        --vl-action-color: #0055cc;
        --vl-action-color--hover: #003bb0;
        --vl-action-color--active: #004099; /* --vl-action-color 10% darker */
        --vl-action-color--visited: #660599;
        --vl-action-color--disabled: #687483;
        --vl-action-background-color--disabled: #cbd2d9;

        --vl-action-tertiary-color: var(--vl-action-color); /* --vl-action-color */
        --vl-action-tertiary-color--hover: var(--vl-action-color); /* --vl-action-color */
        --vl-action-tertiary-border-color: #c6cdd3;
        --vl-action-tertiary-border-color--hover: #5990de;

        --vl-error-color: #d2373c;
        --vl-error-color--hover: #aa2729;

        --vl-focus-color: #0055cca6; /* --vl-action-color 65% opacity */

        --vl-label-color: #687483;
    }
`,t=(0,l.iv)`
    :root {
        --vl-border-radius: 0.3rem;
    }
`,i=(0,l.iv)`
    :root {
        --vl-spacing--xxsmall: 0.5rem;
        --vl-spacing--xsmall: 1rem;
        --vl-spacing--small: 1.5rem;
        --vl-spacing--normal: 2rem;
        --vl-spacing--medium: 3rem;
        --vl-spacing--large: 6rem;
    }
`,c=(o,r,e,a)=>(0,l.iv)`
    @font-face {
        font-family: ${(0,l.$m)(o)};
        src: url(${(0,l.$m)(`${r}.woff2`)}) format('woff2'),
            url(${(0,l.$m)(`${r}.woff`)}) format('woff');
        font-weight: ${e};
        font-style: ${(0,l.$m)(a)};
    }
`,n="Flanders Art Sans",s="Flanders Art Serif",d="FlandersArtSans",v="FlandersArtSerif",m="https://cdn.omgeving.vlaanderen.be/domg/govflanders-font/22.0.2/flanders/",p=(0,l.iv)`
    ${c(n,`${m}sans/${d}-Light`,300,"normal")}
    ${c(n,`${m}sans/${d}-Regular`,400,"normal")}
    ${c(n,`${m}sans/${d}-Medium`,500,"normal")}
    ${c(n,`${m}sans/${d}-Bold`,700,"normal")}

    ${c(n,`${m}italic/${d}-Light`,300,"italic")}
    ${c(n,`${m}italic/${d}-Regular`,400,"italic")}
    ${c(n,`${m}italic/${d}-Medium`,500,"italic")}
    ${c(n,`${m}italic/${d}-Bold`,700,"italic")}

    ${c(s,`${m}serif/${v}-Light`,300,"normal")}
    ${c(s,`${m}serif/${v}-Regular`,400,"normal")}
    ${c(s,`${m}serif/${v}-Medium`,500,"normal")}
    ${c(s,`${m}serif/${v}-Bold`,700,"normal")}
`,g=(0,l.iv)`
    :root {
        --vl-font: ${(0,l.$m)(n)}, sans-serif;
        --vl-accent-font: ${(0,l.$m)(s)}, serif;

        --vl-font-size: 1.8rem;
        --vl-font-size--mobile: 1.6rem;
        --vl-font-size--small: 1.6rem;
        --vl-font-size--large: 2rem;

        --vl-line-height: 1.5;
        --vl-line-height--mobile: 1.33;
    }
`;var b=e("./libs/common/utilities/src/css/mixin/media-queries.mixin.css.ts");let $=[a,t,i,g,p,(0,l.iv)`
    html {
        font-family: var(--vl-font);
        /* 62.5% Font Size Trick  */
        font-size: 62.5%;
    }

    body {
        font-size: var(--vl-font-size);
        line-height: var(--vl-line-height);
        color: var(--vl-text-color);
    }

    ${(0,b.R)((0,l.iv)`
            body {
                font-size: var(--vl-font-size--mobile);
                line-height: var(--vl-line-height--mobile);
            }
        `)}
`];class h{static{this.registered=!1}static register(){this.registered||(document.adoptedStyleSheets=[...document.adoptedStyleSheets,...$.map(o=>o.styleSheet)],this.registered=!0,console.log("RegisterGlobalStyles: global styling toegevoegd aan het document"))}}let u=()=>o=>{h.register()}},"./libs/common/utilities/src/css/mixin/media-queries.mixin.css.ts":(o,r,e)=>{"use strict";e.d(r,{R:()=>a,Y:()=>t});var l=e("./node_modules/lit/index.js");let a=o=>(0,l.iv)`
    @media screen and (max-width: 767px) {
        ${o}
    }
`,t=o=>(0,l.iv)`
    @media screen and (max-width: 1023px) {
        ${o}
    }
`},"./libs/common/utilities/src/css/mixin/outline.mixin.css.ts":(o,r,e)=>{"use strict";e.d(r,{B:()=>a});var l=e("./node_modules/lit/index.js");let a=()=>(0,l.iv)`
    box-shadow: none;
    outline: 3px solid var(--vl-focus-color);
    outline-offset: 2px;
`},"./libs/components/src/next/button/vl-button.component.ts":(o,r,e)=>{"use strict";let l;e.d(r,{Z:()=>$,O:()=>b});var a=e("./node_modules/lit/index.js"),t=e("./libs/common/utilities/src/css/mixin/media-queries.mixin.css.ts"),i=e("./libs/common/utilities/src/css/mixin/outline.mixin.css.ts");let c="0.2rem",n="0.1rem",s=`calc(${c} - ${n})`,d="waving-light",v=(0,a.iv)`
    /* Importeer loading animation, moet op dit niveau geïmporteerd worden. */
    ${(l="var(--vl-action-color--disabled)",(0,a.iv)`
    @keyframes ${(0,a.$m)(d)} {
        0% {
            box-shadow: 10px -0px ${(0,a.$m)(l)}, 20px -0px ${(0,a.$m)(l)}, 30px 0px ${(0,a.$m)(l)};
        }

        10% {
            box-shadow: 10px -3px ${(0,a.$m)(l)}, 20px -0px ${(0,a.$m)(l)}, 30px -0px ${(0,a.$m)(l)};
        }

        20% {
            box-shadow: 10px -6px ${(0,a.$m)(l)}, 20px -3px ${(0,a.$m)(l)}, 30px -0px ${(0,a.$m)(l)};
        }

        30% {
            box-shadow: 10px -3px ${(0,a.$m)(l)}, 20px -6px ${(0,a.$m)(l)}, 30px -3px ${(0,a.$m)(l)};
        }

        40% {
            box-shadow: 10px -0px ${(0,a.$m)(l)}, 20px -3px ${(0,a.$m)(l)}, 30px -6px ${(0,a.$m)(l)};
        }

        50% {
            box-shadow: 10px -0px ${(0,a.$m)(l)}, 20px -0px ${(0,a.$m)(l)}, 30px -3px ${(0,a.$m)(l)};
        }

        60% {
            box-shadow: 10px -0px ${(0,a.$m)(l)}, 20px -0px ${(0,a.$m)(l)}, 30px -0px ${(0,a.$m)(l)};
        }

        100% {
            box-shadow: 10px -0px ${(0,a.$m)(l)}, 20px -0px ${(0,a.$m)(l)}, 30px -0px ${(0,a.$m)(l)};
        }
    }
`)}

    button {
        /* Reset styles - gebaseerd op DV mixin > _buttons.scss */
        border-radius: 0;
        appearance: none;
        -webkit-appearance: none; // doesn't work without prefix on Safari iOS11
        border: 0;
        background-color: transparent;
        padding: 0;

        /* Button styles - gebaseerd op DV _button.scss */
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        min-height: 3.5rem;
        font-family: inherit;
        font-size: var(--vl-font-size--small);
        font-weight: 500;
        padding: var(--vl-spacing--xxsmall) var(--vl-spacing--normal);
        background-color: var(--vl-action-color);
        border: ${(0,a.$m)(c)} solid var(--vl-action-color);
        border-radius: var(--vl-border-radius);
        color: var(--vl-white);
        max-width: 100%;

        ${(0,t.R)((0,a.iv)`
                padding: var(--vl-spacing--xsmall);
            `)}

        &:focus {
            ${(0,i.B)()}
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
            border: ${(0,a.$m)(c)} solid currentColor;
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
            border: ${(0,a.$m)(n)} var(--vl-action-tertiary-border-color) solid;
            transition: background-color 0.2s;
            padding: 0 calc(var(--vl-spacing--normal) + ${(0,a.$m)(s)});

            &:focus {
                color: var(--vl-action-tertiary-color--hover);
                border-color: var(--vl-action-tertiary-border-color);
            }

            &:hover,
            &:active {
                color: var(--vl-action-tertiary-color--hover);
                border-color: var(--vl-action-tertiary-border-color--hover);
                border-width: ${(0,a.$m)(c)};
                padding: 0 var(--vl-spacing--normal);
            }

            ${(0,t.R)((0,a.iv)`
                    padding: calc(
                        var(--vl-spacing--xsmall) + ${(0,a.$m)(s)}
                    );

                    &:hover,
                    &:active {
                        padding: var(--vl-spacing--xsmall);
                    }
                `)}

            &.button-in-map {
                background-color: var(--vl-map-background-color);
            }
        }

        &.error {
            background-color: var(--vl-error-color);

            &:hover,
            &:active {
                background-color: var(--vl-error-color--hover);
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
            justify-content: center;
            width: 100%;
        }

        &.large {
            padding-top: var(--vl-spacing--small);
            padding-bottom: var(--vl-spacing--small);
            font-size: var(--vl-font-size);

            &.tertiary {
                padding-top: calc(
                    var(--vl-spacing--small) + ${(0,a.$m)(s)}
                );
                padding-bottom: calc(
                    var(--vl-spacing--small) + ${(0,a.$m)(s)}
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
                padding-left: calc(6rem + ${(0,a.$m)(s)});
                padding-right: calc(6rem + ${(0,a.$m)(s)});

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
                padding: 0 calc(var(--vl-spacing--xsmall) + ${(0,a.$m)(s)});

                &:hover,
                &:active {
                    padding: 0 var(--vl-spacing--xsmall);
                }

                ${(0,t.R)((0,a.iv)`
                        padding: calc(
                            var(--vl-spacing--xsmall) + ${(0,a.$m)(s)}
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
            cursor: default;
            padding: var(--vl-spacing--xsmall) 8rem var(--vl-spacing--xsmall) 4rem;
            position: relative;

            &::after {
                animation: ${(0,a.$m)(d)} infinite 1s linear;
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
    }
`;var m=e("./libs/common/utilities/src/index.ts"),p=e("./node_modules/lit/directives/class-map.js"),g=e("./libs/common/utilities/src/css/global-styles-decorator.ts");let b={type:"button",disabled:!1,error:!1,block:!1,large:!1,wide:!1,narrow:!1,secondary:!1,tertiary:!1,loading:!1,toggle:!1,on:!1,controlled:!1};class $ extends m.fS{static get styles(){return[v]}static get properties(){return{type:{type:String},disabled:{type:Boolean},error:{type:Boolean},block:{type:Boolean},large:{type:Boolean},wide:{type:Boolean},narrow:{type:Boolean},secondary:{type:Boolean},tertiary:{type:Boolean},loading:{type:Boolean},toggle:{type:Boolean},on:{type:Boolean,reflect:!0,hasChanged:(o,r)=>void 0!==r},controlled:{type:Boolean}}}updated(o){o.has("on")&&this.toggle&&this.dispatchEvent(new CustomEvent("vl-toggle",{detail:{on:this.on},bubbles:!0,composed:!0}))}render(){let o=null!==this.closest("vl-map"),r=this.tertiary||this.toggle&&!this.on,e={disabled:this.disabled,error:this.error,block:this.block,large:this.large,wide:this.wide,narrow:this.narrow,secondary:this.secondary,tertiary:r,loading:this.loading,"button-in-map":o};return(0,a.dy)` <button
            class=${(0,p.$)(e)}
            type=${this.type}
            ?disabled=${this.disabled}
            @click=${this.handleClick}
        >
            <slot></slot>
        </button>`}handleClick(o){o.preventDefault(),o.stopPropagation(),this.toggle&&!this.controlled&&(this.on=!this.on),"submit"===this.type&&this.closest("form")?.requestSubmit(),"reset"===this.type&&this.closest("form")?.reset(),this.dispatchEvent(new CustomEvent("vl-click",{bubbles:!0,composed:!0}))}constructor(...o){super(...o),this.type=b.type,this.disabled=b.disabled,this.error=b.error,this.block=b.block,this.large=b.large,this.wide=b.wide,this.narrow=b.narrow,this.secondary=b.secondary,this.tertiary=b.tertiary,this.loading=b.loading,this.toggle=b.toggle,this.on=b.on,this.controlled=b.controlled}}$=function(o,r,e,l){var a,t=arguments.length,i=t<3?r:null===l?l=Object.getOwnPropertyDescriptor(r,e):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(o,r,e,l);else for(var c=o.length-1;c>=0;c--)(a=o[c])&&(i=(t<3?a(i):t>3?a(r,e,i):a(r,e))||i);return t>3&&i&&Object.defineProperty(r,e,i),i}([(0,g.Q)(),(0,m.a6)("vl-button-next")],$)}}]);