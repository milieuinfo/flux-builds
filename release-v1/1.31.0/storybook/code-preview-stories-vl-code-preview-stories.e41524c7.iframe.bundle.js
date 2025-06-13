"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[364],{"./libs/components/src/code-preview/stories/vl-code-preview.stories.ts":(e,i,o)=>{o.r(i),o.d(i,{__namedExportsOrder:()=>l,codePreviewDefault:()=>r,default:()=>d});var t=o("./libs/common/storybook/src/index.ts"),s=o("./node_modules/lit-html/lit-html.js");o("./libs/components/src/code-preview/vl-code-preview.component.ts");let d={title:"Components/code-preview",tags:["autodocs"],args:t._O,argTypes:(0,t.Wp)(),parameters:{controls:{hideNoControlsWarning:!0}}},r=(0,t.yg)({},()=>(0,s.dy)` <vl-code-preview data-cy="code-preview">
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
        </vl-code-preview>`);r.storyName="vl-code-preview - default",r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:'story({}, () => html` <vl-code-preview data-cy="code-preview">\n            <h3>This is a title</h3>\n            <h2>This is a subtitle</h2>\n            <div>\n                <div>\n                    <div>\n                        <p>test</p>\n                    </div>\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam impedit dolor maxime incidunt\n                        eos labore aut delectus, omnis repellat officia id dolores, magni velit beatae similique ex\n                        optio enim, nulla.\n                    </p>\n                </div>\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n            </div>\n        </vl-code-preview>`)',...r.parameters?.docs?.source}}};let l=["codePreviewDefault"]},"./libs/components/src/code-preview/vl-code-preview.component.ts":(e,i,o)=>{var t=o("./libs/common/utilities/src/index.ts"),s=o("./node_modules/@domg/govflanders-style/common/index.js"),d=o("./node_modules/@domg/govflanders-style/component/index.js");o("./node_modules/@govflanders/vl-ui-code-preview/dist/js/code-preview.js"),o("./node_modules/@govflanders/vl-ui-core/dist/js/core.js"),o("./node_modules/@govflanders/vl-ui-util/dist/js/util.js");class r extends(0,t.W$)(HTMLElement){constructor(){super(`
          <style>
            ${s.YN}
            ${d.MM}
          </style>
          <div class="vl-code-preview" data-vl-code-preview data-vl-code-preview-no-copy-button>
            <pre class="line-numbers">
              <code class="language-markup auto-indent" tabindex="0"></code>
            </pre>
          </div>
        `),this._dress()}get _codeElement(){return this.shadowRoot.querySelector("code")}_dress(){[...this.children].forEach(e=>this._codeElement.append(e)),vl.codePreview.dress(this._element)}}r=function(e,i,o,t){var s,d=arguments.length,r=d<3?i:null===t?t=Object.getOwnPropertyDescriptor(i,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,i,o,t);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(d<3?s(r):d>3?s(i,o,r):s(i,o))||r);return d>3&&r&&Object.defineProperty(i,o,r),r}([(0,t.a6)("vl-code-preview")],r)}}]);