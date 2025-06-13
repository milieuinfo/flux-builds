"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[2966],{"./libs/components/src/content-header/vl-content-header.component.ts":(t,e,o)=>{o.d(e,{q:()=>a});var l=o("./libs/common/utilities/src/index.ts"),s=o("./node_modules/@domg/govflanders-style/component/index.js"),n=o("./node_modules/@domg/govflanders-style/common/index.js");let a=class extends(0,l.W$)(HTMLElement){constructor(){super(`
          <style>
            ${n.YN}
            ${n.Oh}
            ${n.LF}
            ${s.iT}
          </style>
          <header class="vl-content-header vl-content-header--large vl-content-header--show-mobile vl-content-header--has-context">
            <div class="vl-content-header__wrapper">
              <picture id="picture" class="vl-content-header__bg"></picture>
              <div class="vl-layout">
                <div class="vl-content-header__content">
                <div id="context" class="vl-content-header__context vl-content-header__context--has-link"></div>
                  <h2 id="title" class="vl-content-header__title vl-content-header__title--has-link"></h2>
                </div>
              </div>
            </div>
          </header>
        `)}connectedCallback(){super.connectedCallback(),this.__processSlotElements(),this._observer=this.__observeSlotElements(()=>this.__processSlotElements())}disconnectedCallback(){this._observer.disconnect()}get pictureElement(){return this._shadow.querySelector("#picture")}get pictureSlotElement(){return this.querySelector('img[slot="image"]')}get contextElement(){return this._shadow.querySelector("#context")}get contextSlotElement(){return this.querySelector('a[slot="context-link"]')}get titleElement(){return this._shadow.querySelector("#title")}get titleSlotElement(){return this.querySelector('a[slot="title-link"]')}__processSlotElements(){this.__processSlot(this.pictureElement,this.pictureSlotElement);let t=this.__processSlot(this.contextElement,this.contextSlotElement);t.classList.add("vl-content-header__context__link");let e=this.__processSlot(this.titleElement,this.titleSlotElement);e.classList.add("vl-content-header__title__link")}__clearChildren(t){for(;t.hasChildNodes();)t.firstChild?.remove()}__processSlot(t,e){this.__clearChildren(t);let o=e.cloneNode(!0);return t.appendChild(o),o}__observeSlotElements(t){let e=new MutationObserver(t);return e.observe(this,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),e}};a=function(t,e,o,l){var s,n=arguments.length,a=n<3?e:null===l?l=Object.getOwnPropertyDescriptor(e,o):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,l);else for(var i=t.length-1;i>=0;i--)(s=t[i])&&(a=(n<3?s(a):n>3?s(e,o,a):s(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a}([(0,l.a6)("vl-content-header")],a)},"./libs/components/src/template/vl-template.component.ts":(t,e,o)=>{var l=o("./libs/common/utilities/src/index.ts"),s=o("./node_modules/@domg/govflanders-style/common/index.js"),n=o("./node_modules/lit/index.js");let a=(0,n.iv)`
    :host {
        position: relative;
    }

    :host([data-vl-v-center]) > div {
        position: absolute;
        height: 100%;
        width: 100%;
    }
    :host([data-vl-v-center]) > div .vl-page {
        top: 50%;
        transform: translate(0, -50%);
    }

    :host([data-vl-v-stretch]) > div {
        position: absolute;
        height: 100%;
        width: 100%;
    }
    :host([data-vl-v-stretch]) > div .vl-page {
        height: 100%;
    }
    :host([data-vl-v-stretch]) > div .vl-page .vl-main-content {
        height: 100%;
    }
    :host([data-vl-v-stretch]) > div .vl-page .vl-main-content ::slotted(*) {
        height: 100%;
    }
`,i=class extends(0,l.W$)(HTMLElement){constructor(){super(`
      <style>
        ${s.YN}
        ${a}
        ${s.Oh}
      </style>
      <div>
        <slot name="header"></slot>
        <div class="vl-page">
          <main class="vl-main-content">
            <slot name="main"></slot>
          </main>
        </div>
        <slot name="footer"></slot>
      </div>
    `)}};i=function(t,e,o,l){var s,n=arguments.length,a=n<3?e:null===l?l=Object.getOwnPropertyDescriptor(e,o):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,l);else for(var i=t.length-1;i>=0;i--)(s=t[i])&&(a=(n<3?s(a):n>3?s(e,o,a):s(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a}([(0,l.a6)("vl-template")],i)},"./libs/components/src/template/stories/vl-template.stories.ts":(t,e,o)=>{o.r(e),o.d(e,{default:()=>r,templateDefault:()=>m});var l=o("./libs/common/utilities/src/index.ts"),s=o("./node_modules/lit-html/lit-html.js");o("./libs/components/src/template/vl-template.component.ts");var n=o("./libs/common/storybook/src/index.ts"),a=o("./libs/components/src/content-header/vl-content-header.component.ts"),i=o("./libs/elements/src/index.ts");(0,l.YV)([a.q,i.YY,i.Oj,i.bs]);let r={title:"components/template",tags:["autodocs"],args:(0,n.T8)({center:!1,stretch:!1}),argTypes:(0,n.xj)({center:{name:"data-vl-v-center",description:"Attribuut wordt gebruikt om ervoor te zorgen dat de content verticaal gecentreerd wordt.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},stretch:{name:"data-vl-v-stretch",description:"Attribuut wordt gebruikt om ervoor te zorgen dat de content 100% zal innemen.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}})},c=(0,s.dy)`
    <vl-content-header>
        <img
            is="vl-image"
            slot="image"
            src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            srcset="
                https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80   400w,
                https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80   700w,
                https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80   800w,
                https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80 1000w,
                https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80 1300w,
                https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80 1400w,
                https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,
                https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80 1900w,
                https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w
            "
        />
        <a slot="context-link" href="https://webcomponenten.omgeving.vlaanderen.be/storybook/">uig-webcomponents</a>
        <a slot="title-link" href="https://webcomponenten.omgeving.vlaanderen.be/storybook/">${"1.2.3"}</a>
    </vl-content-header>
    <section data-cy="template-content" is="vl-region">
        <div is="vl-layout">
            <div id="grid" is="vl-grid" is-stacked slot="main">
                <h1 is="vl-h1">vl-template</h1>
            </div>
        </div>
    </section>
`,d=(t,e)=>(0,s.dy)` <div
    is="vl-body"
    class=${e?"vl-u-sticky-gf":""}
>
    ${t}
</div>`,m=({center:t,stretch:e})=>d((0,s.dy)`
            <vl-template ?data-vl-v-center=${t} ?data-vl-v-stretch=${e}>
                <vl-header
                    slot="header"
                    data-vl-identifier="59188ff6-662b-45b9-b23a-964ad48c2bfb"
                    data-vl-development
                ></vl-header>
                <div slot="main">${c}</div>
                <vl-footer
                    slot="footer"
                    data-vl-identifier="0337f8dc-3266-4e7a-8f4a-95fd65189e5b"
                    data-vl-development
                ></vl-footer>
            </vl-template>
        `,!0);m.storyName="vl-template - default",m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:'({\n  center,\n  stretch\n}: typeof templateArgs) => bodySimulation(html`\n            <vl-template ?data-vl-v-center=${center} ?data-vl-v-stretch=${stretch}>\n                <vl-header\n                    slot="header"\n                    data-vl-identifier="59188ff6-662b-45b9-b23a-964ad48c2bfb"\n                    data-vl-development\n                ></vl-header>\n                <div slot="main">${mainHtml}</div>\n                <vl-footer\n                    slot="footer"\n                    data-vl-identifier="0337f8dc-3266-4e7a-8f4a-95fd65189e5b"\n                    data-vl-development\n                ></vl-footer>\n            </vl-template>\n        `, true)',...m.parameters?.docs?.source}}}}}]);