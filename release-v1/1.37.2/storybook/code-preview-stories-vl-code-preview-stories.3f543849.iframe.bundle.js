"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[559],{"../../libs/components/src/code-preview/stories/vl-code-preview.stories.ts":(e,o,i)=>{i.r(o),i.d(o,{__namedExportsOrder:()=>l,codePreviewDefault:()=>d,default:()=>r});var t=i("../../libs/common/storybook/src/index.ts"),s=i("../../node_modules/lit-html/lit-html.js");i("../../libs/components/src/code-preview/vl-code-preview.component.ts");let r={title:"Components/code-preview",tags:["autodocs"],args:t.D8,argTypes:(0,t.RN)(),parameters:{controls:{hideNoControlsWarning:!0}}},d=(0,t._7)({},()=>(0,s.qy)` <vl-code-preview data-cy="code-preview">
            <h3>This is a title</h3>
            <h2>This is a subtitle</h2>
            <div>
                <div>
                    <div>
                        <p>test</p>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam impedit dolor maxime incidunt
                        eos labore aut delectus, omnis repellat officia id dolores, magni velit beatae similique ex
                        optio enim, nulla.
                    </p>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
        </vl-code-preview>`);d.storyName="vl-code-preview - default",d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:'story({}, () => html` <vl-code-preview data-cy="code-preview">\n            <h3>This is a title</h3>\n            <h2>This is a subtitle</h2>\n            <div>\n                <div>\n                    <div>\n                        <p>test</p>\n                    </div>\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam impedit dolor maxime incidunt\n                        eos labore aut delectus, omnis repellat officia id dolores, magni velit beatae similique ex\n                        optio enim, nulla.\n                    </p>\n                </div>\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n            </div>\n        </vl-code-preview>`)',...d.parameters?.docs?.source}}};let l=["codePreviewDefault"]},"../../libs/components/src/code-preview/vl-code-preview.component.ts":(e,o,i)=>{var t=i("../../libs/common/utilities/src/index.ts"),s=i("../../node_modules/@domg/govflanders-style/common/index.js"),r=i("../../node_modules/@domg/govflanders-style/component/index.js");i("../../node_modules/@govflanders/vl-ui-code-preview/dist/js/code-preview.js"),i("../../node_modules/@govflanders/vl-ui-core/dist/js/core.js"),i("../../node_modules/@govflanders/vl-ui-util/dist/js/util.js");class d extends(0,t.H3)(HTMLElement){constructor(){super(`
          <style>
            ${s.h8}
            ${r.xC}
          </style>
          <div class="vl-code-preview" data-vl-code-preview data-vl-code-preview-no-copy-button>
            <pre class="line-numbers">
              <code class="language-markup auto-indent" tabindex="0"></code>
            </pre>
          </div>
        `),this._dress()}get _codeElement(){return this.shadowRoot.querySelector("code")}_dress(){[...this.children].forEach(e=>this._codeElement.append(e)),vl.codePreview.dress(this._element)}}d=function(e,o,i,t){var s,r=arguments.length,d=r<3?o:null===t?t=Object.getOwnPropertyDescriptor(o,i):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(e,o,i,t);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(d=(r<3?s(d):r>3?s(o,i,d):s(o,i))||d);return r>3&&d&&Object.defineProperty(o,i,d),d}([(0,t.M1)("vl-code-preview")],d)}}]);