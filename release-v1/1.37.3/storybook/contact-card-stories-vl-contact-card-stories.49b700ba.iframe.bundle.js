"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[1523],{"../../libs/components/src/contact-card/stories/vl-contact-card.stories.ts":(t,e,n)=>{n.r(e),n.d(e,{__namedExportsOrder:()=>i,contactCardDefault:()=>r,default:()=>l});var a=n("../../libs/common/storybook/src/index.ts"),o=n("../../node_modules/lit-html/lit-html.js");n("../../libs/components/src/infoblock/vl-infoblock.component.ts"),n("../../libs/components/src/contact-card/vl-contact-card.component.ts");let l={title:"Components/contact-card",tags:["autodocs"],args:a.D8,argTypes:(0,a.RN)(),parameters:{controls:{hideNoControlsWarning:!0}}},r=(0,a._7)({},()=>(0,o.qy)` <vl-contact-card>
        <vl-infoblock
            slot="info"
            data-vl-title="Departement Onderwijs en Vorming"
            data-vl-type="contact"
        ></vl-infoblock>
        <vl-properties slot="properties">
            <dl is="vl-properties-list">
                <dt is="vl-property-term">Adres</dt>
                <dd is="vl-property-value">
                    Hendrik Consciencegebouw<br />Koning Albert II-laan 15<br />1210 Brussel<br /><a
                        is="vl-link"
                        href="#"
                        >Routeplanner</a
                    >
                </dd>
                <dt is="vl-property-term">Telefoon</dt>
                <dd is="vl-property-value">
                    <p>
                        <a is="vl-link" href="#"
                            >02 553 72 02<span is="vl-icon" data-vl-icon="phone" data-vl-after></span
                        ></a>
                        (Onthaal Consciencegebouw)
                    </p>
                    <p>
                        <a is="vl-link" href="#">1700<span is="vl-icon" data-vl-icon="phone" data-vl-after></span></a>
                        (Infolijn Onderwijs)
                    </p>
                </dd>
                <dt is="vl-property-term">E-mail</dt>
                <dd is="vl-property-value">
                    <a is="vl-link" href="#"
                        >onderwijs.vlaanderen@vlaanderen.be<span is="vl-icon" data-vl-icon="mail" data-vl-after></span
                    ></a>
                </dd>
                <dt is="vl-property-term">Website</dt>
                <dd is="vl-property-value">
                    <a is="vl-link" href="#"
                        >http://onderwijs.vlaanderen.be<span is="vl-icon" data-vl-icon="external" data-vl-after></span
                    ></a>
                </dd>
            </dl>
        </vl-properties>
    </vl-contact-card>`);r.storyName="vl-contact-card - default",r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:'story({}, () => html` <vl-contact-card>\n        <vl-infoblock\n            slot="info"\n            data-vl-title="Departement Onderwijs en Vorming"\n            data-vl-type="contact"\n        ></vl-infoblock>\n        <vl-properties slot="properties">\n            <dl is="vl-properties-list">\n                <dt is="vl-property-term">Adres</dt>\n                <dd is="vl-property-value">\n                    Hendrik Consciencegebouw<br />Koning Albert II-laan 15<br />1210 Brussel<br /><a\n                        is="vl-link"\n                        href="#"\n                        >Routeplanner</a\n                    >\n                </dd>\n                <dt is="vl-property-term">Telefoon</dt>\n                <dd is="vl-property-value">\n                    <p>\n                        <a is="vl-link" href="#"\n                            >02 553 72 02<span is="vl-icon" data-vl-icon="phone" data-vl-after></span\n                        ></a>\n                        (Onthaal Consciencegebouw)\n                    </p>\n                    <p>\n                        <a is="vl-link" href="#">1700<span is="vl-icon" data-vl-icon="phone" data-vl-after></span></a>\n                        (Infolijn Onderwijs)\n                    </p>\n                </dd>\n                <dt is="vl-property-term">E-mail</dt>\n                <dd is="vl-property-value">\n                    <a is="vl-link" href="#"\n                        >onderwijs.vlaanderen@vlaanderen.be<span is="vl-icon" data-vl-icon="mail" data-vl-after></span\n                    ></a>\n                </dd>\n                <dt is="vl-property-term">Website</dt>\n                <dd is="vl-property-value">\n                    <a is="vl-link" href="#"\n                        >http://onderwijs.vlaanderen.be<span is="vl-icon" data-vl-icon="external" data-vl-after></span\n                    ></a>\n                </dd>\n            </dl>\n        </vl-properties>\n    </vl-contact-card>`)',...r.parameters?.docs?.source}}};let i=["contactCardDefault"]},"../../libs/components/src/contact-card/vl-contact-card.component.ts":(t,e,n)=>{n.d(e,{Y:()=>d});var a=n("../../libs/common/utilities/src/index.ts"),o=n("../../libs/elements/src/index.ts"),l=n("../../node_modules/@domg/govflanders-style/common/index.js"),r=n("../../node_modules/@domg/govflanders-style/component/index.js"),i=n("../../node_modules/lit/index.js");let c=(0,i.AH)`
    :root {
        --vl-theme-primary-color: #ffe615;
        --vl-theme-primary-color-60: #fff073;
        --vl-theme-primary-color-70: #ffee5b;
        --vl-theme-primary-color-rgba-30: rgba(255, 230, 21, 0.3);
        --vl-theme-fg-color: #333332;
        --vl-theme-fg-color-60: #858584;
        --vl-theme-fg-color-70: #707070;
    }

    .vl-vi::before,
    .vl-vi::after {
        font-family: 'vlaanderen-icon' !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-style: normal;
        font-variant: normal;
        font-weight: normal;
        text-decoration: none;
        text-transform: none;
        display: inline-block;
        vertical-align: middle;
    }
    .vl-vi.vl-vi-u-180deg::before {
        display: inline-block;
        transform: rotate(180deg);
        vertical-align: middle;
    }

    .vl-vi-u-xs::before {
        font-size: 0.8rem;
    }

    .vl-vi-u-s::before {
        font-size: 1.3rem;
    }

    .vl-vi-u-m::before {
        font-size: 1.7rem;
    }

    .vl-vi-u-l::before {
        font-size: 2rem;
    }

    .vl-vi-u-xl::before {
        font-size: 2.2rem;
    }

    .vl-vi-u-90deg::before {
        display: inline-block;
        transform: rotate(90deg);
    }

    .vl-vi-u-180deg::before {
        display: inline-block;
        transform: rotate(180deg);
    }

    .vl-contact-card__title,
    .vl-link.vl-contact-card__title {
        font-size: 2.2rem;
        font-family: 'Flanders Art Sans', sans-serif;
        font-weight: 500;
        margin-bottom: 1.8rem;
        line-height: 1.36;
        border-radius: 0;
        appearance: none;
        -webkit-appearance: none;
        border: 0;
        background-color: transparent;
        padding: 0;
        margin-bottom: 1rem;
        display: block;
        line-height: 3rem;
        overflow: hidden;
    }
    @media screen and (max-width: 767px) {
        .vl-contact-card__title,
        .vl-link.vl-contact-card__title {
            font-size: 2rem;
            margin-bottom: 1.4rem;
        }
    }

    .vl-contact-card__content {
        padding: 2.5rem;
        display: flex;
        flex-wrap: wrap;
        font-size: 1.6rem;
        line-height: 2rem;
    }
    @media screen and (min-width: 767px) {
        .vl-region--alt .vl-contact-card__content {
            padding: 0;
        }
    }
    @media screen and (max-width: 767px) {
        .vl-contact-card__content {
            display: block;
            font-size: 1.5rem;
            padding: 1.5rem;
        }
    }
    .no-flexbox .vl-contact-card__content::before,
    .no-flexbox .vl-contact-card__content::after {
        content: '';
        display: table;
    }
    .no-flexbox .vl-contact-card__content::after {
        clear: both;
    }
    .vl-contact-card__content .vl-map__container {
        height: 100%;
        margin-bottom: 0;
    }

    .vl-contact-card__data,
    .vl-contact-card__map {
        width: 50%;
    }
    .no-flexbox .vl-contact-card__data,
    .no-flexbox .vl-contact-card__map {
        float: left;
    }
    @media screen and (max-width: 767px) {
        .vl-contact-card__data,
        .vl-contact-card__map {
            width: auto;
        }
    }

    .vl-contact-card__data {
        padding-right: 1.5rem;
        line-height: 2.4rem;
    }
    @media screen and (max-width: 767px) {
        .vl-contact-card__data {
            padding-right: 0;
        }
    }

    .vl-contact-card__data__title {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        float: left;
        clear: left;
        width: 30%;
        padding-right: 0.5rem;
        margin-bottom: 1rem;
        white-space: normal;
        color: #687483;
    }
    @media screen and (max-width: 767px) {
        .vl-contact-card__data__title {
            display: none;
        }
    }

    .vl-contact-card__data__content {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        float: left;
        width: 70%;
        margin-bottom: 2.5rem;
        white-space: normal;
    }
    @media screen and (max-width: 767px) {
        .vl-contact-card__data__content {
            float: none;
            width: auto;
            margin-bottom: 1.25rem;
        }
    }

    .vl-contact-card__data__title *,
    .vl-contact-card__data__content * {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
    }

    .vl-contact-card__data__name {
        font-weight: 700;
    }

    .vl-contact-card__map {
        height: 25rem;
        padding-left: 1.5rem;
        position: relative;
        min-height: 25rem;
        overflow: hidden;
    }
    @media screen and (max-width: 767px) {
        .vl-contact-card__map {
            padding-left: 0;
            margin-top: 2rem;
            min-height: 0;
        }
    }
    .vl-contact-card__map .vl-map {
        width: 100%;
        height: 100%;
        border: 1px solid #cbd2da;
    }
    @media screen and (max-width: 767px) {
        .vl-contact-card__map .vl-map {
            position: relative;
            min-height: 15rem;
            height: auto;
        }
    }
    .no-js .vl-contact-card__map {
        height: auto;
        min-height: 0;
    }
    .no-js .vl-contact-card__map .vl-map {
        height: auto;
    }

    .vl-contact-card__footer {
        width: 100%;
        margin-top: 2.5rem;
        padding-top: 1rem;
        border-top: 1px solid #cbd2da;
        font-size: 1.6rem;
        overflow: hidden;
    }
    @media screen and (max-width: 767px) {
        .vl-contact-card__footer {
            margin-top: 1.5rem;
            font-size: 1.6rem;
        }
    }

    .vl-contact-card.js-vl-accordion .vl-contact-card__title {
        padding-left: 2rem;
        position: relative;
        cursor: pointer;
        margin-bottom: 0;
        transition: margin-bottom 0.3s;
    }
    .vl-contact-card.js-vl-accordion .vl-contact-card__title .vl-vi {
        position: absolute;
        left: 0;
        top: 0;
        transition: transform 0.2s;
        color: #333332;
        font-size: 1.3rem;
        line-height: 3.2rem;
    }
    .vl-contact-card.js-vl-accordion .vl-contact-card__content-wrapper {
        overflow: hidden;
        visibility: hidden;
        max-height: 0;
        transition: max-height 0.3s cubic-bezier(0, 1.05, 0, 1);
    }
    .vl-contact-card.js-vl-accordion .vl-contact-card__content-wrapper .vl-map {
        display: none;
    }
    .vl-contact-card.js-vl-accordion--open .vl-contact-card__title {
        margin-bottom: 1rem;
    }
    .vl-contact-card.js-vl-accordion--open .vl-contact-card__content-wrapper {
        max-height: 9999px;
        visibility: visible;
        transition: max-height 0.3s ease-in;
    }
    .vl-contact-card.js-vl-accordion--open .vl-contact-card__content-wrapper .vl-map {
        display: block;
    }
`;class d extends(0,a.H3)(HTMLElement){static{(0,a.gy)([o.D,o.dI])}constructor(){super(`
            <style>
                ${l.h8}
                ${l.mN}
                ${r.oE}
                ${c}
            </style>
            <div class="vl-contact-data">
                <div is="vl-grid" data-vl-is-stacked>
                    <div is="vl-column" data-vl-size="3" data-vl-medium-size="12">
                        <slot name="info"></slot>
                    </div>
                    <div is="vl-column" data-vl-size="8" data-vl-medium-size="12" data-vl-push="1" class="vl-push--reset--m">
                        <slot name="properties"></slot>
                    </div>
                </div>
            </div>
         `)}}d=function(t,e,n,a){var o,l=arguments.length,r=l<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,a);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(r=(l<3?o(r):l>3?o(e,n,r):o(e,n))||r);return l>3&&r&&Object.defineProperty(e,n,r),r}([(0,a.M1)("vl-contact-card")],d)},"../../libs/components/src/infoblock/vl-infoblock.component.ts":(t,e,n)=>{n.d(e,{P:()=>i});var a=n("../../libs/common/utilities/src/index.ts"),o=n("../../libs/elements/src/index.ts"),l=n("../../node_modules/@domg/govflanders-style/common/index.js"),r=n("../../node_modules/@domg/govflanders-style/component/index.js");class i extends a.F9{static{(0,a.gy)([o.xf,o.yF])}static get _observedAttributes(){return["title","icon","type"]}constructor(){super(`
          <style>
            ${l.h8}
            ${r.p5}
          </style>
          <section id="infoblock-element" class="vl-infoblock">
            <header class="vl-infoblock__header" role="presentation">
              <span is="vl-icon" id="infoblock_icon" class="vl-infoblock__header__icon"></span>
              <slot name="title">
                    <h2 id="title_content" is="vl-h2" class="vl-infoblock__title"></h2>
              </slot>
            </header>
            <div class="vl-infoblock__content" id="infoblock_content">
              <slot></slot>
            </div>
          </section>
        `)}connectedCallback(){super.connectedCallback();let t=this.getAttribute("title");t&&this._titleChangedCallback("",t)}_titleChangedCallback(t,e){let n=this.shadowRoot?.querySelector("#title_content");n&&(n.innerText=e)}_iconChangedCallback(t,e){this._iconElement.setAttribute("data-vl-icon",e)}_typeChangedCallback(t,e){let n="vl-infoblock--";t&&this._element.classList.remove(n+t),e&&this._element.classList.add(n+e)}get _iconElement(){return this._element.querySelector("#infoblock_icon")}}i=function(t,e,n,a){var o,l=arguments.length,r=l<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,a);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(r=(l<3?o(r):l>3?o(e,n,r):o(e,n))||r);return l>3&&r&&Object.defineProperty(e,n,r),r}([(0,a.M1)("vl-infoblock")],i)}}]);