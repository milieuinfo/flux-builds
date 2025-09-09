"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[7819],{"../../libs/form/src/next/textarea-rich/stories/vl-textarea-rich.stories.ts":(e,t,n)=>{n.r(t),n.d(t,{TextareaRichDefault:()=>k,TextareaRichPlugins:()=>T,TextareaRichToolbar:()=>E,__namedExportsOrder:()=>$,default:()=>j});var r=n("../../libs/common/storybook/src/index.ts"),o=n("../../node_modules/lit/index.js");n("../../node_modules/react/index.js");var i=n("../../node_modules/react/jsx-runtime.js"),a=n("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),l=n("../../node_modules/@storybook/blocks/dist/index.mjs"),s=n("../../libs/form/src/next/form-control/stories/form-control.public-methods-doc.mdx");function d(e){let t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",a:"a",h3:"h3",h4:"h4"},(0,a.RP)(),e.components),{VluxMetaData:n,VluxAlert:r}=t;return r||c("VluxAlert",!0),n||c("VluxMetaData",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"textarea-rich---next",children:"Textarea Rich - next"}),"\n",(0,i.jsx)(n,{id:"form-next-textarea-rich"}),"\n",(0,i.jsxs)(t.p,{children:["Gebruik de ",(0,i.jsx)(t.code,{children:"textarea-rich-next"})," component om een rich textarea veld toe te voegen aan een pagina.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"import { VlTextareaRichComponent } from '@domg-wc/form/next/textarea-rich';\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:"<vl-textarea-rich-next></vl-textarea-rich-next>\n"})}),"\n",(0,i.jsx)(l.Hl,{of:k}),"\n",(0,i.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,i.jsx)(l.ov,{of:k}),"\n",(0,i.jsx)(t.h2,{id:"publieke-methodes",children:"Publieke methodes"}),"\n",(0,i.jsx)(s.A,{}),"\n",(0,i.jsx)(t.h2,{id:"content-security-policy-csp",children:"Content Security Policy (CSP)"}),"\n",(0,i.jsxs)(t.p,{children:["TinyMCE maakt bij bepaalde tools en plugins gebruik van inline styles.",(0,i.jsx)("br",{}),"\nHierdoor is het niet mogelijk om deze functionaliteit te gebruiken in een toepassing met een strikte Content Security Policy die ",(0,i.jsx)(t.code,{children:"unsafe-inline"})," blokkeert.",(0,i.jsx)("br",{}),"\nWe raden af om ",(0,i.jsx)(t.code,{children:"unsafe-inline"})," toe te laten in de Content Security Policy aangezien dit kan leiden tot security leaks."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://www.tiny.cloud/docs/tinymce/6/tinymce-and-csp/",target:"_blank",rel:"nofollow noopener noreferrer",children:"TinyMCE - CSP"})}),"\n",(0,i.jsx)(t.h2,{id:"varianten",children:"Varianten"}),"\n",(0,i.jsx)(t.h3,{id:"toolbar",children:"Toolbar"}),"\n",(0,i.jsxs)(t.p,{children:["De TinyMCE toolbar kan geconfigureerd worden door het ",(0,i.jsx)(t.code,{children:"toolbar"})," attribuut te gebruiken."]}),"\n",(0,i.jsxs)(t.p,{children:["Bepaalde tools maken gebruik van inline styles, hierdoor werken deze niet in een toepassing met een strikte Content Security Policy (zie sectie ",(0,i.jsx)(t.a,{href:"#content-security-policy-csp",children:"Content Security Policy"})," op deze pagina)."]}),"\n",(0,i.jsx)(r,{type:"warning",children:`
    Sommige tools kan je enkel gebruiken als je de bijhorende plugin hebt geactiveerd.
`}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://www.tiny.cloud/docs/tinymce/6/available-toolbar-buttons/",target:"_blank",rel:"nofollow noopener noreferrer",children:"TinyMCE - Toolbar buttons"}),": een overzicht van de tools en de eventueel bijhorende plugins ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.a,{href:"https://www.tiny.cloud/docs/tinymce/6/basic-setup/#toolbar-configuration",target:"_blank",rel:"nofollow noopener noreferrer",children:"TinyMCE - Toolbar configuration"}),": meer informatie over toolbar configuratie"]}),"\n",(0,i.jsxs)(t.p,{children:["Hier vind je specifieke voorbeelden om de tools en bijhorende plugins activeren in onze component voor ",(0,i.jsx)(t.a,{href:"#link-plugin",children:"links"})," en ",(0,i.jsx)(t.a,{href:"#lists-plugin",children:"lists"}),"."]}),"\n",(0,i.jsx)(l.Hl,{of:E}),"\n",(0,i.jsx)(t.h3,{id:"plugins",children:"Plugins"}),"\n",(0,i.jsxs)(t.p,{children:["TinyMCE open source plugins kunnen geconfigureerd worden door het ",(0,i.jsx)(t.code,{children:"plugins"})," attribuut en de ",(0,i.jsx)(t.code,{children:"customConfig"})," property te gebruiken.",(0,i.jsx)("br",{}),"\nAan het ",(0,i.jsx)(t.code,{children:"plugins"})," attribuut kan je een lijst van plugins meegeven die je wil gebruiken. Je moet deze instellen om bepaalde tools te kunnen gebruiken (voorbeelden vind je hier: ",(0,i.jsx)(t.a,{href:"#link-plugin",children:"link"})," en ",(0,i.jsx)(t.a,{href:"#lists-plugin",children:"lists"}),").",(0,i.jsx)("br",{}),"\nAan de ",(0,i.jsx)(t.code,{children:"customConfig"})," property kan je een object meegeven met de configuratie van de plugins.",(0,i.jsx)("br",{}),"\nAangezien we de open source versie van TinyMCE gebruiken, kan je geen gebruik maken van de premium plugins."]}),"\n",(0,i.jsxs)(t.p,{children:["Bepaalde plugins maken gebruik van inline styles, hierdoor werken deze niet in een toepassing met een strikte Content Security Policy (zie sectie Content Security Policy op deze pagina).",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://www.tiny.cloud/docs/tinymce/6/basic-setup/#plugin-configuration",target:"_blank",rel:"nofollow noopener noreferrer",children:"TinyMCE - Plugin configuration"}),(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.a,{href:"https://www.tiny.cloud/docs/tinymce/6/plugins/#open-source-plugins",target:"_blank",rel:"nofollow noopener noreferrer",children:"TinyMCE - Open source plugins"})]}),"\n",(0,i.jsx)(l.Hl,{of:T}),"\n",(0,i.jsx)(t.h4,{id:"lists-plugin",children:"lists plugin"}),"\n",(0,i.jsxs)(t.p,{children:["Om de ",(0,i.jsx)(t.code,{children:"numlist"})," en ",(0,i.jsx)(t.code,{children:"bullist"})," tools te gebruiken in de toolbar, moet je de ",(0,i.jsx)(t.code,{children:"lists"})," plugin instellen (referentie: ",(0,i.jsx)(t.a,{href:"https://www.tiny.cloud/docs/tinymce/6/available-toolbar-buttons/#lists-plugin",target:"_blank",rel:"nofollow noopener noreferrer",children:"TinyMCE - Lists toolbar buttons"}),")."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<vl-textarea-rich-next\n  toolbar="numlist bullist"\n  plugins="lists"\n></vl-textarea-rich-next>\n'})}),"\n",(0,i.jsx)(t.h4,{id:"link-plugin",children:"link plugin"}),"\n",(0,i.jsxs)(t.p,{children:["Om de ",(0,i.jsx)(t.code,{children:"link"})," tool in de toolbar te gebruiken, moet je de ",(0,i.jsx)(t.code,{children:"link"})," plugin instellen (referentie: ",(0,i.jsx)(t.a,{href:"https://www.tiny.cloud/docs/tinymce/6/available-toolbar-buttons/#link-plugin",target:"_blank",rel:"nofollow noopener noreferrer",children:"TinyMCE - Link toolbar buttons"}),")."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<vl-textarea-rich-next\n  toolbar="link"\n  plugins="link"\n></vl-textarea-rich-next>\n'})}),"\n",(0,i.jsx)(t.h2,{id:"validatie",children:"Validatie"}),"\n",(0,i.jsxs)(t.p,{children:["Meer info over validatie binnen onze form componenten vind je hier: ",(0,i.jsx)(t.a,{href:"/docs/ontwerp-form-validation--documentatie",children:"Form - Validatie"})]}),"\n",(0,i.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,i.jsx)(t.h3,{id:"tinymce",children:"TinyMCE"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://www.tiny.cloud/docs/tinymce/6/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie TinyMCE - 6"})})]})}function c(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var u=n("../../libs/common/utilities/src/index.ts"),m=n("../../node_modules/tinymce-next/tinymce.js"),h=n.n(m),p=n("../../libs/form/src/next/textarea/vl-textarea.component.ts");let g=(0,o.AH)`
    .tox-tinymce {
        border-radius: 0.3rem;
        border: 0.1rem solid #8695a8;
    }

    .tox .tox-toolbar__primary {
        border-bottom: 0.1rem solid #8695a8;
        background: none;
    }

    .tox:not(.tox-tinymce-inline) .tox-editor-header {
        box-shadow: none;
        padding: 0;
    }

    .tox .tox-statusbar {
        border-top: 0.1rem solid #8695a8;
    }

    .tox:not([dir='rtl']) .tox-toolbar__group:not(:last-of-type) {
        border-right: 1px solid #8695a8;
    }

    .tox .tox-toolbar__group {
        padding: 0 4px 0 4px;
    }

    .tox .tox-tbtn {
        margin: 4px 0;
        height: 32px;
    }

    .tox .tox-tbtn:hover {
        background: #dee0e2;
    }

    .tox .tox-tbtn--enabled,
    .tox .tox-tbtn--enabled:hover {
        background: #c8cbcf;
    }

    .tox .tox-editor-header.hidden {
        display: none;
    }

    /* Link plugin modal styles */
    .tox .tox-dialog {
        box-shadow: 0 0 2.1rem 0 rgba(0, 0, 0, 0.3);
        font-family: 'Flanders Art Sans', sans-serif;
        border-radius: 0;
        padding: 3rem;

        .tox-dialog__header,
        .tox-dialog__body-content,
        .tox-dialog__footer {
            padding: 0;
        }

        .tox-dialog__header {
            margin-bottom: 1.5rem;

            .tox-button.tox-button--icon {
                display: none;
            }

            .tox-dialog__title {
                font-family: 'Flanders Art Sans', sans-serif;
                font-weight: 500;
            }
        }

        .tox-form__group {
            margin-bottom: 1.5rem;
        }

        .tox-label {
            color: #4d4d4b;
            font-size: 1.6rem;
            font-weight: 500;
            margin-bottom: 0.6rem;
        }

        .tox-dialog__body-content {
            overflow: visible;
        }

        .tox-textfield {
            font-family: 'Flanders Art Sans', sans-serif;
            height: 3.5rem;
            line-height: 3.5rem;
            border-radius: 0.3rem;
            border: 0.1rem solid #687483;
            padding: 0 1rem;

            &:focus {
                border: 0.1rem solid #687483;
                box-shadow: 0 0 0 2px #fff, 0 0 0 5px rgba(0, 85, 204, 0.65);
            }
        }

        .tox-dialog__footer {
            margin-top: 1rem;
            justify-content: flex-start;

            .tox-button {
                margin-right: 1.5rem;
                margin-left: 0;
                order: 1;
                border: 0;
                padding: 0;
                font-size: 1.6rem;
                font-family: 'Flanders Art Sans', sans-serif;
                font-weight: 500;
                line-height: 3.5rem;
                padding: 0 2rem;
                background-color: #05c;
                text-decoration: none;
                border-radius: 0.3rem;
                color: #fff;
                cursor: default;

                &:hover {
                    background-color: #003bb0;
                }

                &.tox-button--secondary {
                    order: 2;
                    background-color: transparent;
                    cursor: pointer;
                    color: #05c;
                    font-weight: 400;
                    text-decoration: underline;
                    padding: 0;
                }
            }
        }
    }
`,b={...n("../../libs/form/src/next/textarea/vl-textarea.defaults.ts").r,toolbar:"undo redo | bold italic underline strikethrough",plugins:"",preview:!1,customConfig:null};class x extends p.m{static get styles(){return[...p.m.styles,g]}static get properties(){return{toolbar:{type:String},plugins:{type:String},preview:{type:Boolean},customConfig:{type:Object}}}constructor(){super(),this.toolbar=b.toolbar,this.plugins=b.plugins,this.preview=b.preview,this.customConfig=b.customConfig,this.editor=null,this.id||(this.id=h().DOM.uniqueId())}firstUpdated(e){super.firstUpdated(e),this.initTinyMCE().then(()=>{this.removeAttribute("aria-hidden")})}updated(e){super.updated(e),e.has("success")&&this.setEditorSuccess(),e.has("error")&&this.setEditorError(),e.has("readonly")&&this.setEditorReadonly(),e.has("disabled")&&this.setEditorDisabled(),e.has("preview")&&this.setEditorPreview(),e.has("value")&&this.editor?.getContent()!==this.value&&this.editor?.setContent(this.value),e.has("isInvalid")&&this.editor?.getBody()?.classList?.toggle("error",this.isInvalid||this.error)}disconnectedCallback(){super.disconnectedCallback(),this.editor?.mode?.set("readonly"),this.editor?.destroy()}resetFormControl(){super.resetFormControl(),this.editor?.setContent(this.initialValue)}focus(){this.editor?.focus()}async initTinyMCE(){await h().init({target:this.validationTarget,suffix:".min",language:"nl_BE",base_url:"https://cdn.omgeving.vlaanderen.be/domg/tinymce/6.8.3",toolbar:this.toolbar,menubar:!1,elementpath:!1,branding:!1,content_css:"https://cdn.omgeving.vlaanderen.be/domg/govflanders-style/14.1.0/custom/tinymce.css",verify_html:!1,body_class:"vl-typography",plugins:this.plugins,formats:{bold:{inline:"b"},italic:{inline:"i"},underline:{inline:"u"},strikethrough:{inline:"s"}},link_title:!1,link_target_list:!1,link_default_target:"_blank",...this.customConfig}),this.editor=h().get(this.id),this.editor?.on("input change redo undo",()=>{this.value=this.editor?.getContent()||""}),this.editor?.on("ExecCommand",e=>{"mceLink"===e.command&&setTimeout(()=>{let e=this.shadowRoot?.querySelector(".tox-dialog input.tox-textfield");e?.focus()},0)}),this.setEditorSuccess(),this.setEditorError(),this.setEditorReadonly(),this.setEditorDisabled(),this.setEditorPreview()}setEditorSuccess(){this.editor?.getBody()?.classList?.toggle("success",this.success)}setEditorError(){this.editor?.getBody()?.classList?.toggle("error",this.error)}setEditorReadonly(){let e=this.shouldDisableEditor();this.editor?.mode?.set(e?"readonly":"design")}setEditorDisabled(){let e=this.shouldDisableEditor();this.editor?.mode?.set(e?"readonly":"design"),this.editor?.getBody()?.classList?.toggle("vl-textarea--disabled",this.disabled)}setEditorPreview(){let e=this.shouldDisableEditor();this.editor?.mode.set(e?"readonly":"design"),this.editor?.getContainer()?.querySelector(".tox-editor-header")?.classList.toggle("hidden",this.preview)}shouldDisableEditor(){return this.readonly||this.disabled||this.preview}}x=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}([(0,u.M1)("vl-textarea-rich-next")],x);var v=n("../../libs/form/src/next/textarea/stories/vl-textarea.stories-arg.ts");let y={...v.m,...b},f={...v.W,toolbar:{name:"toolbar",description:"TinyMCE toolbar configuratie.<br/>Zie de documentatie pagina voor meer info.<br/>Dit attribuut is niet reactief.",table:{type:{summary:r.QE.STRING},category:r.R6.ATTRIBUTES,defaultValue:{summary:y.toolbar}}},plugins:{name:"plugins",description:"TinyMCE plugin configuratie.<br/>Zie de documentatie pagina voor meer info.<br/>Dit attribuut is niet reactief.",table:{type:{summary:r.QE.STRING},category:r.R6.ATTRIBUTES,defaultValue:{summary:y.plugins}}},preview:{name:"preview",description:"Beeldt de value af in preview mode.<br/>Er wordt geen TinyMCE toolbar getoond en de value is niet aanpasbaar.",table:{type:{summary:r.QE.BOOLEAN},category:r.R6.ATTRIBUTES,defaultValue:{summary:y.preview}}},customConfig:{name:"customConfig",description:"TinyMCE custom configuratie.<br/>Deze property kan gebruikt worden om custom configuratie mee te geven voor TinyMCE, als ook om configuratie mee te geven voor plugins.<br/>Deze property is niet reactief.",table:{type:{summary:"{ key: value }"},category:r.R6.PROPERTIES,defaultValue:{summary:y.customConfig}}}};(0,u.gy)([x]);let j={id:"form-next-textarea-rich",title:"Form-next/textarea-rich",tags:["autodocs"],args:y,argTypes:f,parameters:{controls:{exclude:["block","cols","placeholder"]},docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,a.RP)(),e.components);return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)}}}},w=(0,r._7)(y,({id:e,name:t,label:n,required:r,disabled:i,error:a,success:l,readonly:s,value:d,autocomplete:c,minLength:u,maxLength:m,rows:h,toolbar:p,plugins:g,preview:b,customConfig:x,onVlChange:v,onVlInput:y,onVlReset:f,onVlValid:j})=>(0,o.qy)` <vl-textarea-rich-next
            id=${e}
            name=${t}
            label=${n}
            ?required=${r}
            ?disabled=${i}
            ?error=${a}
            ?success=${l}
            ?readonly=${s}
            value=${d}
            autocomplete=${c}
            min-length=${u}
            max-length=${m}
            rows=${h}
            toolbar=${p}
            plugins=${g}
            ?preview=${b}
            .customConfig=${x}
            @vl-change=${v}
            @vl-input=${y}
            @vl-reset=${f}
            @vl-valid=${j}
        ></vl-textarea-rich-next>`),k=w.bind({});k.storyName="vl-textarea-rich-next - default",k.args={id:"textarea-rich-default",value:"<p><b>b-tag</b></p><p><i>i-tag</i></p><p><u>u-tag</u></p><p><s>s-tag</s></p>",toolbar:"undo redo | bold italic underline | link | h1 h2 | bullist numlist | paste pastetext",plugins:"link lists"};let E=w.bind({});E.storyName="vl-textarea-rich-next - toolbar",E.args={id:"textarea-rich-toolbar",rows:40,toolbar:"undo redo | h1 h2 h3 h4 h5 h6 | bold italic underline strikethrough | blockquote | hr",value:"<h1>h1 title</h1><h2>h2 title</h2><h3>h3 title</h3><h4>h4 title</h4><h5>h5 title</h5><h6>h6 title</h6><hr><p><b>b-tag</b></p><p><i>i-tag</i></p><p><u>u-tag</u></p><p><s>s-tag</s></p><hr><blockquote>blockquote-tag</blockquote>"};let T=w.bind({});T.storyName="vl-textarea-rich-next - plugins",T.args={id:"textarea-rich-plugins",rows:30,toolbar:"undo redo | h5 | bold italic underline strikethrough | bullist numlist | link",plugins:"lists link",value:'<h5>Link</h5><p><a href="https://www.vlaanderen.be/" target="_blank" rel="noopener">https://www.vlaanderen.be/</a></p><h5>Unordered list</h5><ul><li>Unordered list item 1</li><li>Unordered list item 2</li><ul><li>Unordered list subitem 1</li><li>Unordered list subitem 2</li></ul><li>Unordered list item 3</ul><h5>Ordered list</h5><ol><li>Ordered list item 1</li><li>Ordered list item 2</li><ol><li>Ordered list subitem 1</li><li>Ordered list subitem 2</li></ol><li>Ordered list item 3</ol>'},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:"story(textareaRichArgs, ({\n  id,\n  name,\n  label,\n  required,\n  disabled,\n  error,\n  success,\n  readonly,\n  value,\n  autocomplete,\n  minLength,\n  maxLength,\n  rows,\n  toolbar,\n  plugins,\n  preview,\n  customConfig,\n  onVlChange,\n  onVlInput,\n  onVlReset,\n  onVlValid\n}) => {\n  return html` <vl-textarea-rich-next\n            id=${id}\n            name=${name}\n            label=${label}\n            ?required=${required}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?success=${success}\n            ?readonly=${readonly}\n            value=${value}\n            autocomplete=${autocomplete}\n            min-length=${minLength}\n            max-length=${maxLength}\n            rows=${rows}\n            toolbar=${toolbar}\n            plugins=${plugins}\n            ?preview=${preview}\n            .customConfig=${customConfig}\n            @vl-change=${onVlChange}\n            @vl-input=${onVlInput}\n            @vl-reset=${onVlReset}\n            @vl-valid=${onVlValid}\n        ></vl-textarea-rich-next>`;\n})",...k.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:"story(textareaRichArgs, ({\n  id,\n  name,\n  label,\n  required,\n  disabled,\n  error,\n  success,\n  readonly,\n  value,\n  autocomplete,\n  minLength,\n  maxLength,\n  rows,\n  toolbar,\n  plugins,\n  preview,\n  customConfig,\n  onVlChange,\n  onVlInput,\n  onVlReset,\n  onVlValid\n}) => {\n  return html` <vl-textarea-rich-next\n            id=${id}\n            name=${name}\n            label=${label}\n            ?required=${required}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?success=${success}\n            ?readonly=${readonly}\n            value=${value}\n            autocomplete=${autocomplete}\n            min-length=${minLength}\n            max-length=${maxLength}\n            rows=${rows}\n            toolbar=${toolbar}\n            plugins=${plugins}\n            ?preview=${preview}\n            .customConfig=${customConfig}\n            @vl-change=${onVlChange}\n            @vl-input=${onVlInput}\n            @vl-reset=${onVlReset}\n            @vl-valid=${onVlValid}\n        ></vl-textarea-rich-next>`;\n})",...E.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:"story(textareaRichArgs, ({\n  id,\n  name,\n  label,\n  required,\n  disabled,\n  error,\n  success,\n  readonly,\n  value,\n  autocomplete,\n  minLength,\n  maxLength,\n  rows,\n  toolbar,\n  plugins,\n  preview,\n  customConfig,\n  onVlChange,\n  onVlInput,\n  onVlReset,\n  onVlValid\n}) => {\n  return html` <vl-textarea-rich-next\n            id=${id}\n            name=${name}\n            label=${label}\n            ?required=${required}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?success=${success}\n            ?readonly=${readonly}\n            value=${value}\n            autocomplete=${autocomplete}\n            min-length=${minLength}\n            max-length=${maxLength}\n            rows=${rows}\n            toolbar=${toolbar}\n            plugins=${plugins}\n            ?preview=${preview}\n            .customConfig=${customConfig}\n            @vl-change=${onVlChange}\n            @vl-input=${onVlInput}\n            @vl-reset=${onVlReset}\n            @vl-valid=${onVlValid}\n        ></vl-textarea-rich-next>`;\n})",...T.parameters?.docs?.source}}};let $=["TextareaRichDefault","TextareaRichToolbar","TextareaRichPlugins"]},"../../libs/form/src/next/form-control/stories/form-control.public-methods-doc.mdx":(e,t,n)=>{n.d(t,{A:()=>a}),n("../../node_modules/react/index.js");var r=n("../../node_modules/react/jsx-runtime.js"),o=n("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");function i(e){let t=Object.assign({h3:"h3",p:"p",blockquote:"blockquote"},(0,o.RP)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h3,{id:"resetformcontrol",children:"resetFormControl()"}),"\n",(0,r.jsxs)(t.p,{children:["Reset de form control.",(0,r.jsx)("br",{}),"\nDe value van de control wordt teruggezet op de initiële value. Deze methode wordt ook aangeroepen als de form zelf\ngereset wordt."]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Opgelet: het is belangrijk de initiële waarde in te stellen op de form control vóór de form control gerenderd wordt.\nAnders wordt een lege value ingesteld als initiële waarde."}),"\n"]})]})}let a=function(e={}){let{wrapper:t}=Object.assign({},(0,o.RP)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(i,e)})):i(e)}},"../../libs/form/src/next/form-control/stories/form-control.stories-arg.ts":(e,t,n)=>{n.d(t,{Z:()=>a,x:()=>l});var r=n("../../libs/common/storybook/src/index.ts"),o=n("../../libs/form/src/next/form-control/form-control.defaults.ts"),i=n("../../node_modules/@storybook/addon-actions/dist/index.mjs");let a={...r.D8,...o.i,onVlReset:(0,i.XI)("vl-reset")},l={...(0,r.RN)(!0),id:{name:"id",description:"Het id van het veld.",table:{type:{summary:r.QE.STRING},category:r.R6.ATTRIBUTES,defaultValue:{summary:a.id}}},name:{name:"name",description:"De naam van het veld.",table:{type:{summary:r.QE.STRING},category:r.R6.ATTRIBUTES,defaultValue:{summary:a.name}}},label:{name:"label",description:"Vult het aria-label attribuut van het veld in.<br/>Kan gebruikt worden als er geen bijhorend label element of vl-form-label component is.",table:{type:{summary:r.QE.STRING},category:r.R6.ATTRIBUTES,defaultValue:{summary:a.label}}},required:{name:"required",description:"Duidt aan dat het veld verplicht is.",table:{type:{summary:r.QE.BOOLEAN},category:r.R6.ATTRIBUTES,defaultValue:{summary:a.required}}},disabled:{name:"disabled",description:"Beeldt de component in een disabled state af.",table:{type:{summary:r.QE.BOOLEAN},category:r.R6.ATTRIBUTES,defaultValue:{summary:a.disabled}}},error:{name:"error",description:"Beeldt de component in een error state af.",table:{type:{summary:r.QE.BOOLEAN},category:r.R6.ATTRIBUTES,defaultValue:{summary:a.error}}},success:{name:"success",description:"Beeldt de component in een success state af.",table:{type:{summary:r.QE.BOOLEAN},category:r.R6.ATTRIBUTES,defaultValue:{summary:a.success}}},onVlReset:{name:"vl-reset",description:"Event dat afgevuurd wordt wanneer het veld gereset wordt.",table:{category:r.R6.EVENTS}}}},"../../libs/form/src/next/textarea/stories/vl-textarea.stories-arg.ts":(e,t,n)=>{n.d(t,{W:()=>s,m:()=>l});var r=n("../../libs/common/storybook/src/index.ts"),o=n("../../node_modules/@storybook/addon-actions/dist/index.mjs"),i=n("../../libs/form/src/next/form-control/stories/form-control.stories-arg.ts"),a=n("../../libs/form/src/next/textarea/vl-textarea.defaults.ts");let l={...i.Z,...a.r,onVlChange:(0,o.XI)("vl-change"),onVlInput:(0,o.XI)("vl-input"),onVlValid:(0,o.XI)("vl-valid")},s={...i.x,block:{name:"block",description:"Duidt aan dat de component de volledige breedte van zijn parent mag innemen.",table:{type:{summary:r.QE.BOOLEAN},category:r.R6.ATTRIBUTES,defaultValue:{summary:l.block}}},readonly:{name:"readonly",description:"Duidt aan dat het veld `readonly` is.",table:{type:{summary:r.QE.BOOLEAN},category:r.R6.ATTRIBUTES,defaultValue:{summary:l.readonly}}},value:{name:"value",description:"De waarde van het textarea veld.",table:{type:{summary:r.QE.STRING},category:r.R6.ATTRIBUTES,defaultValue:{summary:l.value}}},placeholder:{name:"placeholder",description:"De placeholder van het textarea veld.",table:{type:{summary:r.QE.STRING},category:r.R6.ATTRIBUTES,defaultValue:{summary:l.placeholder}}},autocomplete:{name:"autocomplete",description:"De autocomplete van het textarea veld. Dit moet een waarde zijn die door de browser ondersteund wordt.<br>Een lijst van waarden kan je vinden op [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#values).",table:{type:{summary:r.QE.STRING},category:r.R6.ATTRIBUTES,defaultValue:{summary:l.autocomplete}}},minLength:{name:"min-length",description:"Het minimum aantal karakters dat je kan ingeven.",control:{type:r.VH.NUMBER},table:{type:{summary:r.QE.NUMBER},category:r.R6.ATTRIBUTES,defaultValue:{summary:l.minLength}}},maxLength:{name:"max-length",description:"Het maximum aantal karakters dat je kan ingeven.",control:{type:r.VH.NUMBER},table:{type:{summary:r.QE.NUMBER},category:r.R6.ATTRIBUTES,defaultValue:{summary:l.maxLength}}},rows:{name:"rows",description:"Het aantal rijen van het textarea veld.",control:{type:r.VH.NUMBER},table:{type:{summary:r.QE.NUMBER},category:r.R6.ATTRIBUTES,defaultValue:{summary:l.rows}}},cols:{name:"cols",description:"Het aantal kolommen van het textarea veld.",control:{type:r.VH.NUMBER},table:{type:{summary:r.QE.NUMBER},category:r.R6.ATTRIBUTES,defaultValue:{summary:l.cols}}},onVlChange:{name:"vl-change",description:"Event dat afgevuurd wordt als de waarde van het textarea veld verandert (zowel programmatorisch als door een gebruiker).<br>Het detail object van het event bevat de ingegeven waarde.",table:{type:{summary:"{ value: string }"},category:r.R6.EVENTS}},onVlInput:{name:"vl-input",description:"Event dat alleen afgevuurd wordt als een gebruiker de waarde van het textarea veld verandert.<br>Het detail object van het event bevat de ingegeven waarde.",table:{type:{summary:"{ value: string }"},category:r.R6.EVENTS}},onVlValid:{name:"vl-valid",description:"Event dat afgevuurd wordt als de waarde van het textarea valid is.<br>Het detail object van het event bevat de ingegeven waarde.",table:{type:{summary:"{ value: string }"},category:r.R6.EVENTS}}}},"../../libs/form/src/next/textarea/vl-textarea.component.ts":(e,t,n)=>{n.d(t,{m:()=>m});var r=n("../../libs/common/utilities/src/index.ts"),o=n("../../node_modules/@domg/govflanders-style/common/index.js"),i=n("../../node_modules/@domg/govflanders-style/component/index.js"),a=n("../../node_modules/@open-wc/form-control/src/validators.js"),l=n("../../node_modules/lit/index.js"),s=n("../../node_modules/lit/directives/class-map.js"),d=n("../../node_modules/lit/directives/live.js"),c=n("../../libs/form/src/next/form-control/form-control.ts"),u=n("../../libs/form/src/next/textarea/vl-textarea.defaults.ts");class m extends c.M{static{this.formControlValidators=[...c.M.formControlValidators,a.bO,a.jD]}static get styles(){return[o.h8,o.BI,i.ag]}static get properties(){return{block:{type:Boolean},readonly:{type:Boolean},value:{type:String,reflect:!0},placeholder:{type:String},autocomplete:{type:String},minLength:{type:Number,attribute:"min-length"},maxLength:{type:Number,attribute:"max-length"},rows:{type:Number},cols:{type:Number}}}connectedCallback(){super.connectedCallback(),this.initialValue||(this.initialValue=this.value)}updated(e){if(super.updated(e),e.has("value")){let e={value:this.value};this.setValue(this.value),this.dispatchEvent(new CustomEvent("vl-change",{composed:!0,bubbles:!0,detail:e})),this.dispatchInput&&(this.dispatchEvent(new CustomEvent("vl-input",{composed:!0,bubbles:!0,detail:e})),this.dispatchInput=!1),this.dispatchEventIfValid(e)}}render(){let e={"vl-textarea":!0,"vl-textarea--disabled":this.disabled,"vl-textarea--error":this.isInvalid||this.error,"vl-textarea--success":this.success,"vl-textarea--block":this.block};return(0,l.qy)`
            <textarea
                id=${this.id||l.s6}
                name=${this.name||l.s6}
                class=${(0,s.H)(e)}
                aria-label=${this.label||l.s6}
                aria-invalid=${this.isInvalid||l.s6}
                ?required=${this.required}
                ?disabled=${this.disabled}
                ?error=${this.error}
                ?readonly=${this.readonly}
                .value=${(0,d.V)(this.value)}
                placeholder=${this.placeholder||l.s6}
                autocomplete=${this.autocomplete||l.s6}
                minlength=${this.minLength??l.s6}
                maxlength=${this.maxLength??l.s6}
                rows=${this.rows??l.s6}
                cols=${this.cols??l.s6}
                @input=${this.onInput}
            />
        `}get validationTarget(){return this.shadowRoot?.querySelector("textarea")}resetFormControl(){super.resetFormControl(),this.value=this.initialValue}onKeydown(e){"Enter"===e.key&&(e.bubbles=!1),super.onKeydown(e)}onInput(e){this.dispatchInput=!0,this.value=e?.target?.value}constructor(...e){super(...e),this.block=u.r.block,this.readonly=u.r.readonly,this.value=u.r.value,this.placeholder=u.r.placeholder,this.autocomplete=u.r.autocomplete,this.minLength=u.r.minLength,this.maxLength=u.r.maxLength,this.rows=u.r.rows,this.cols=u.r.cols,this.initialValue="",this.dispatchInput=!1}}m=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}([(0,r.M1)("vl-textarea-next")],m)},"../../libs/form/src/next/textarea/vl-textarea.defaults.ts":(e,t,n)=>{n.d(t,{r:()=>r});let r={...n("../../libs/form/src/next/form-control/form-control.defaults.ts").i,block:!1,readonly:!1,value:"",placeholder:"",autocomplete:"",minLength:null,maxLength:null,rows:null,cols:null}}}]);