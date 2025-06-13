"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[5303],{"../../libs/components/src/loader/stories/vl-loader.stories.ts":(t,e,a)=>{a.r(e),a.d(e,{__namedExportsOrder:()=>i,default:()=>s,loaderDefault:()=>r,loaderLightWithoutText:()=>n,loaderWithCustomContent:()=>d});var l=a("../../node_modules/lit-html/lit-html.js");a("../../libs/components/src/loader/vl-loader.component.ts");var o=a("../../libs/common/storybook/src/index.ts");let s={title:"Components/loader",tags:["autodocs"],args:{...o.D8,light:!1,text:"Pagina is aan het laden",single:!1},argTypes:{...(0,o.RN)(),light:{name:"data-vl-light",description:"Attribute is used to obtain an alternative rendering in combination with a dark background. ",table:{type:{summary:"boolean"},category:"Attributes",defaultValue:{summary:"false"}}},text:{name:"data-vl-text",description:"Attribute is used to display an informative text during loading. ",table:{type:{summary:"string"},category:"Attributes",defaultValue:{summary:""}}},single:{name:"data-vl-single",description:"Attribute is used to indicate that no text should be displayed. ",table:{type:{summary:"boolean"},category:"Attributes",defaultValue:{summary:"false"}}}}},r=({light:t,text:e,single:a})=>(0,l.qy)`
    <vl-loader ?data-vl-light=${t} data-vl-text=${e} ?data-vl-single=${a} data-cy="loader"></vl-loader>
`;r.storyName="vl-loader - default";let n=({light:t,text:e,single:a})=>(0,l.qy)`
    <div class="vl-region" style="background: #b7b7b7">
        <vl-loader
            ?data-vl-light=${t}
            data-vl-text=${e}
            ?data-vl-single=${a}
            data-cy="loader-light-without-text"
        ></vl-loader>
    </div>
`;n.storyName="vl-loader - light without text",n.args={light:!0,single:!0};let d=({light:t,single:e})=>(0,l.qy)`
    <vl-loader ?data-vl-light=${t} ?data-vl-single=${e} data-cy="loader-with-custom-content">
        <span><strong>Informatie</strong> is aan het laden</span>
    </vl-loader>
`;d.storyName="vl-loader - with custom content",d.argTypes={text:{control:{disable:!0}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:'({\n  light,\n  text,\n  single\n}: typeof loaderArgs) => html`\n    <vl-loader ?data-vl-light=${light} data-vl-text=${text} ?data-vl-single=${single} data-cy="loader"></vl-loader>\n`',...r.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:'({\n  light,\n  text,\n  single\n}: typeof loaderArgs) => html`\n    <div class="vl-region" style="background: #b7b7b7">\n        <vl-loader\n            ?data-vl-light=${light}\n            data-vl-text=${text}\n            ?data-vl-single=${single}\n            data-cy="loader-light-without-text"\n        ></vl-loader>\n    </div>\n`',...n.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:'({\n  light,\n  single\n}: typeof loaderArgs) => html`\n    <vl-loader ?data-vl-light=${light} ?data-vl-single=${single} data-cy="loader-with-custom-content">\n        <span><strong>Informatie</strong> is aan het laden</span>\n    </vl-loader>\n`',...d.parameters?.docs?.source}}};let i=["loaderDefault","loaderLightWithoutText","loaderWithCustomContent"]},"../../libs/components/src/loader/vl-loader.component.ts":(t,e,a)=>{a.d(e,{H:()=>r});var l=a("../../libs/common/utilities/src/index.ts"),o=a("../../node_modules/@domg/govflanders-style/component/index.js"),s=a("../../node_modules/@domg/govflanders-style/common/index.js");class r extends(0,l.H3)(HTMLElement){static get _observedAttributes(){return["light","text","single"]}constructor(){super(`
          <style>
            ${s.h8}
            ${o.dR}
            ${s.Zz}
            ${s.Wq}
          </style>
          <div class="vl-u-align-center">
            <div class="vl-loader" role="alert" aria-busy="true"></div>
            <p id="text">
              <slot>
                Pagina is aan het laden
              </slot>
            </p>
          </div>
        `)}get _loader(){return this._shadow.querySelector(".vl-loader")}get _text(){return this._shadow.querySelector("#text")}get _slot(){return this._shadow.querySelector("slot")}_lightChangedCallback(t,e){this._toggleClass(this._loader,e,"vl-loader--light")}_textChangedCallback(t,e){this._slot.innerText=e}_singleChangedCallback(t,e){this._toggleClass(this._text,e,"vl-u-visually-hidden")}}r=function(t,e,a,l){var o,s=arguments.length,r=s<3?e:null===l?l=Object.getOwnPropertyDescriptor(e,a):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,a,l);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(r=(s<3?o(r):s>3?o(e,a,r):o(e,a))||r);return s>3&&r&&Object.defineProperty(e,a,r),r}([(0,l.M1)("vl-loader")],r)}}]);