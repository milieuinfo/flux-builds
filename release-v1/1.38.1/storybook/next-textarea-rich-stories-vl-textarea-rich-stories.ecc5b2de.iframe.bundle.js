"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[7819],{"../../libs/form/src/next/textarea-rich/stories/vl-textarea-rich.stories.ts":(e,t,n)=>{n.r(t),n.d(t,{TextareaRichDefault:()=>w,TextareaRichPlugins:()=>C,TextareaRichToolbar:()=>$,__namedExportsOrder:()=>E,default:()=>j});var r=n("../../libs/common/storybook/src/index.ts"),i=n("../../node_modules/lit/index.js");n("../../node_modules/react/index.js");var o=n("../../node_modules/react/jsx-runtime.js"),l=n("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),s=n("../../node_modules/@storybook/blocks/dist/index.mjs"),a=n("../../libs/form/src/next/form-control/stories/form-control.public-methods-doc.mdx");function d(e){let t=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",h3:"h3",h4:"h4"},(0,l.RP)(),e.components),{VluxMetaData:n,VluxAlert:r}=t;return r||c("VluxAlert",!0),n||c("VluxMetaData",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"textarea-rich---next",children:"Textarea Rich - next"}),"\n",(0,o.jsx)(n,{id:"form-next-textarea-rich"}),"\n",(0,o.jsxs)(t.p,{children:["Gebruik de ",(0,o.jsx)(t.code,{children:"textarea-rich-next"})," component om een rich textarea veld toe te voegen aan een pagina.",(0,o.jsx)("br",{})]}),"\n",(0,o.jsxs)(t.p,{children:["Dit component is de volgende versie van de rich modus van de ",(0,o.jsx)(t.a,{href:"/docs/components-textarea--documentatie",children:"vl-textarea"})," component, we raden aan deze versie te gebruiken.",(0,o.jsx)("br",{})]}),"\n",(0,o.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"import { VlTextareaRichComponent } from '@domg-wc/form/next/textarea-rich';\n"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-html",children:"<vl-textarea-rich-next></vl-textarea-rich-next>\n"})}),"\n",(0,o.jsx)(s.Hl,{of:w}),"\n",(0,o.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,o.jsx)(s.ov,{of:w}),"\n",(0,o.jsx)(t.h2,{id:"publieke-methodes",children:"Publieke methodes"}),"\n",(0,o.jsx)(a.A,{}),"\n",(0,o.jsx)(t.h2,{id:"content-security-policy-csp",children:"Content Security Policy (CSP)"}),"\n",(0,o.jsxs)(t.p,{children:["TinyMCE maakt bij bepaalde tools en plugins gebruik van inline styles.",(0,o.jsx)("br",{}),"\nHierdoor is het niet mogelijk om deze functionaliteit te gebruiken in een toepassing met een strikte Content Security Policy die ",(0,o.jsx)(t.code,{children:"unsafe-inline"})," blokkeert.",(0,o.jsx)("br",{}),"\nWe raden af om ",(0,o.jsx)(t.code,{children:"unsafe-inline"})," toe te laten in de Content Security Policy aangezien dit kan leiden tot security leaks."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://www.tiny.cloud/docs/tinymce/6/tinymce-and-csp/",target:"_blank",rel:"nofollow noopener noreferrer",children:"TinyMCE - CSP"})}),"\n",(0,o.jsx)(t.h2,{id:"varianten",children:"Varianten"}),"\n",(0,o.jsx)(t.h3,{id:"toolbar",children:"Toolbar"}),"\n",(0,o.jsxs)(t.p,{children:["De TinyMCE toolbar kan geconfigureerd worden door het ",(0,o.jsx)(t.code,{children:"toolbar"})," attribuut te gebruiken."]}),"\n",(0,o.jsxs)(t.p,{children:["Bepaalde tools maken gebruik van inline styles, hierdoor werken deze niet in een toepassing met een strikte Content Security Policy (zie sectie ",(0,o.jsx)(t.a,{href:"#content-security-policy-csp",children:"Content Security Policy"})," op deze pagina)."]}),"\n",(0,o.jsx)(r,{type:"warning",children:`
    Sommige tools kan je enkel gebruiken als je de bijhorende plugin hebt geactiveerd.
`}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://www.tiny.cloud/docs/tinymce/6/available-toolbar-buttons/",target:"_blank",rel:"nofollow noopener noreferrer",children:"TinyMCE - Toolbar buttons"}),": een overzicht van de tools en de eventueel bijhorende plugins ",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(t.a,{href:"https://www.tiny.cloud/docs/tinymce/6/basic-setup/#toolbar-configuration",target:"_blank",rel:"nofollow noopener noreferrer",children:"TinyMCE - Toolbar configuration"}),": meer informatie over toolbar configuratie"]}),"\n",(0,o.jsxs)(t.p,{children:["Hier vind je specifieke voorbeelden om de tools en bijhorende plugins activeren in onze component voor ",(0,o.jsx)(t.a,{href:"#link-plugin",children:"links"})," en ",(0,o.jsx)(t.a,{href:"#lists-plugin",children:"lists"}),"."]}),"\n",(0,o.jsx)(s.Hl,{of:$}),"\n",(0,o.jsx)(t.h3,{id:"plugins",children:"Plugins"}),"\n",(0,o.jsxs)(t.p,{children:["TinyMCE open source plugins kunnen geconfigureerd worden door het ",(0,o.jsx)(t.code,{children:"plugins"})," attribuut en de ",(0,o.jsx)(t.code,{children:"customConfig"})," property te gebruiken.",(0,o.jsx)("br",{}),"\nAan het ",(0,o.jsx)(t.code,{children:"plugins"})," attribuut kan je een lijst van plugins meegeven die je wil gebruiken. Je moet deze instellen om bepaalde tools te kunnen gebruiken (voorbeelden vind je hier: ",(0,o.jsx)(t.a,{href:"#link-plugin",children:"link"})," en ",(0,o.jsx)(t.a,{href:"#lists-plugin",children:"lists"}),").",(0,o.jsx)("br",{}),"\nAan de ",(0,o.jsx)(t.code,{children:"customConfig"})," property kan je een object meegeven met de configuratie van de plugins.",(0,o.jsx)("br",{}),"\nAangezien we de open source versie van TinyMCE gebruiken, kan je geen gebruik maken van de premium plugins."]}),"\n",(0,o.jsxs)(t.p,{children:["Bepaalde plugins maken gebruik van inline styles, hierdoor werken deze niet in een toepassing met een strikte Content Security Policy (zie sectie Content Security Policy op deze pagina).",(0,o.jsx)("br",{})]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://www.tiny.cloud/docs/tinymce/6/basic-setup/#plugin-configuration",target:"_blank",rel:"nofollow noopener noreferrer",children:"TinyMCE - Plugin configuration"}),(0,o.jsx)("br",{}),"\n",(0,o.jsx)(t.a,{href:"https://www.tiny.cloud/docs/tinymce/6/plugins/#open-source-plugins",target:"_blank",rel:"nofollow noopener noreferrer",children:"TinyMCE - Open source plugins"})]}),"\n",(0,o.jsx)(s.Hl,{of:C}),"\n",(0,o.jsx)(t.h4,{id:"lists-plugin",children:"lists plugin"}),"\n",(0,o.jsxs)(t.p,{children:["Om de ",(0,o.jsx)(t.code,{children:"numlist"})," en ",(0,o.jsx)(t.code,{children:"bullist"})," tools te gebruiken in de toolbar, moet je de ",(0,o.jsx)(t.code,{children:"lists"})," plugin instellen (referentie: ",(0,o.jsx)(t.a,{href:"https://www.tiny.cloud/docs/tinymce/6/available-toolbar-buttons/#lists-plugin",target:"_blank",rel:"nofollow noopener noreferrer",children:"TinyMCE - Lists toolbar buttons"}),")."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-html",children:'<vl-textarea-rich-next\n  toolbar="numlist bullist"\n  plugins="lists"\n></vl-textarea-rich-next>\n'})}),"\n",(0,o.jsx)(t.h4,{id:"link-plugin",children:"link plugin"}),"\n",(0,o.jsxs)(t.p,{children:["Om de ",(0,o.jsx)(t.code,{children:"link"})," tool in de toolbar te gebruiken, moet je de ",(0,o.jsx)(t.code,{children:"link"})," plugin instellen (referentie: ",(0,o.jsx)(t.a,{href:"https://www.tiny.cloud/docs/tinymce/6/available-toolbar-buttons/#link-plugin",target:"_blank",rel:"nofollow noopener noreferrer",children:"TinyMCE - Link toolbar buttons"}),")."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-html",children:'<vl-textarea-rich-next\n  toolbar="link"\n  plugins="link"\n></vl-textarea-rich-next>\n'})}),"\n",(0,o.jsx)(t.h2,{id:"validatie",children:"Validatie"}),"\n",(0,o.jsxs)(t.p,{children:["Meer info over validatie binnen onze form componenten vind je hier: ",(0,o.jsx)(t.a,{href:"/docs/ontwerp-form-validation--documentatie",children:"Form - Validatie"})]}),"\n",(0,o.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,o.jsx)(t.h3,{id:"tinymce",children:"TinyMCE"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://www.tiny.cloud/docs/tinymce/6/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie TinyMCE - 6"})})]})}function c(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var u=n("../../libs/common/utilities/src/index.ts"),h=n("../../node_modules/tinymce-next/tinymce.js"),g=n.n(h),p=n("../../libs/form/src/next/textarea/vl-textarea.component.ts");let m=(0,i.AH)`
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
`,b={...n("../../libs/form/src/next/textarea/vl-textarea.defaults.ts").r,toolbar:"undo redo | bold italic underline strikethrough",plugins:"",preview:!1,customConfig:null};class x extends p.m{static get styles(){return[...p.m.styles,m]}static get properties(){return{toolbar:{type:String},plugins:{type:String},preview:{type:Boolean},customConfig:{type:Object}}}constructor(){super(),this.toolbar=b.toolbar,this.plugins=b.plugins,this.preview=b.preview,this.customConfig=b.customConfig,this.editor=null,this.id||(this.id=g().DOM.uniqueId())}firstUpdated(e){super.firstUpdated(e),this.initTinyMCE()}updated(e){super.updated(e),e.has("success")&&this.setEditorSuccess(),e.has("error")&&this.setEditorError(),e.has("readonly")&&this.setEditorReadonly(),e.has("disabled")&&this.setEditorDisabled(),e.has("preview")&&this.setEditorPreview(),e.has("value")&&this.editor?.getContent()!==this.value&&this.editor?.setContent(this.value),e.has("isInvalid")&&this.editor?.getBody()?.classList?.toggle("error",this.isInvalid||this.error)}disconnectedCallback(){super.disconnectedCallback(),this.editor?.mode?.set("readonly"),this.editor?.destroy()}resetFormControl(){super.resetFormControl(),this.editor?.setContent(this.initialValue)}focus(){this.editor?.focus()}async initTinyMCE(){await g().init({target:this.validationTarget,suffix:".min",language:"nl_BE",base_url:"https://cdn.omgeving.vlaanderen.be/domg/tinymce/6.8.3",toolbar:this.toolbar,menubar:!1,elementpath:!1,branding:!1,content_css:"https://cdn.omgeving.vlaanderen.be/domg/govflanders-style/14.1.0/custom/tinymce.css",verify_html:!1,body_class:"vl-typography",plugins:this.plugins,formats:{bold:{inline:"b"},italic:{inline:"i"},underline:{inline:"u"},strikethrough:{inline:"s"}},link_title:!1,link_target_list:!1,link_default_target:"_blank",...this.customConfig}),this.editor=g().get(this.id),this.editor?.on("input change redo undo",()=>{this.value=this.editor?.getContent()||""}),this.editor?.on("ExecCommand",e=>{"mceLink"===e.command&&setTimeout(()=>{let e=this.shadowRoot?.querySelector(".tox-dialog input.tox-textfield");e?.focus()},0)}),this.setEditorSuccess(),this.setEditorError(),this.setEditorReadonly(),this.setEditorDisabled(),this.setEditorPreview()}setEditorSuccess(){this.editor?.getBody()?.classList?.toggle("success",this.success)}setEditorError(){this.editor?.getBody()?.classList?.toggle("error",this.error)}setEditorReadonly(){let e=this.shouldDisableEditor();this.editor?.mode?.set(e?"readonly":"design")}setEditorDisabled(){let e=this.shouldDisableEditor();this.editor?.mode?.set(e?"readonly":"design"),this.editor?.getBody()?.classList?.toggle("vl-textarea--disabled",this.disabled)}setEditorPreview(){let e=this.shouldDisableEditor();this.editor?.mode.set(e?"readonly":"design"),this.editor?.getContainer()?.querySelector(".tox-editor-header")?.classList.toggle("hidden",this.preview)}shouldDisableEditor(){return this.readonly||this.disabled||this.preview}}x=function(e,t,n,r){var i,o=arguments.length,l=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(l=(o<3?i(l):o>3?i(t,n,l):i(t,n))||l);return o>3&&l&&Object.defineProperty(t,n,l),l}([(0,u.M1)("vl-textarea-rich-next")],x);var f=n("../../libs/form/src/next/textarea/stories/vl-textarea.stories-arg.ts");let y={...f.m,...b},v={...f.W,toolbar:{name:"toolbar",description:"TinyMCE toolbar configuratie.<br/>Zie de documentatie pagina voor meer info.<br/>Dit attribuut is niet reactief.",table:{type:{summary:r.QE.STRING},category:r.R6.ATTRIBUTES,defaultValue:{summary:y.toolbar}}},plugins:{name:"plugins",description:"TinyMCE plugin configuratie.<br/>Zie de documentatie pagina voor meer info.<br/>Dit attribuut is niet reactief.",table:{type:{summary:r.QE.STRING},category:r.R6.ATTRIBUTES,defaultValue:{summary:y.plugins}}},preview:{name:"preview",description:"Beeldt de value af in preview mode.<br/>Er wordt geen TinyMCE toolbar getoond en de value is niet aanpasbaar.",table:{type:{summary:r.QE.BOOLEAN},category:r.R6.ATTRIBUTES,defaultValue:{summary:y.preview}}},customConfig:{name:"customConfig",description:"TinyMCE custom configuratie.<br/>Deze property kan gebruikt worden om custom configuratie mee te geven voor TinyMCE, als ook om configuratie mee te geven voor plugins.<br/>Deze property is niet reactief.",table:{type:{summary:"{ key: value }"},category:r.R6.PROPERTIES,defaultValue:{summary:y.customConfig}}}};(0,u.gy)([x]);let j={id:"form-next-textarea-rich",title:"Form-next/textarea-rich",tags:["autodocs"],args:y,argTypes:v,parameters:{controls:{exclude:["block","cols","placeholder"]},docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,l.RP)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(d,e)})):d(e)}}}},k=(0,r._7)(y,({id:e,name:t,label:n,required:r,disabled:o,error:l,success:s,readonly:a,value:d,autocomplete:c,minLength:u,maxLength:h,rows:g,toolbar:p,plugins:m,preview:b,customConfig:x,onVlChange:f,onVlInput:y,onVlReset:v,onVlValid:j})=>(0,i.qy)` <vl-textarea-rich-next
            id=${e}
            name=${t}
            label=${n}
            ?required=${r}
            ?disabled=${o}
            ?error=${l}
            ?success=${s}
            ?readonly=${a}
            value=${d}
            autocomplete=${c}
            min-length=${u}
            max-length=${h}
            rows=${g}
            toolbar=${p}
            plugins=${m}
            ?preview=${b}
            .customConfig=${x}
            @vl-change=${f}
            @vl-input=${y}
            @vl-reset=${v}
            @vl-valid=${j}
        ></vl-textarea-rich-next>`),w=k.bind({});w.storyName="vl-textarea-rich-next - default",w.args={id:"textarea-rich-default",value:"<p><b>b-tag</b></p><p><i>i-tag</i></p><p><u>u-tag</u></p><p><s>s-tag</s></p>",toolbar:"undo redo | bold italic underline | link | h1 h2 | bullist numlist | paste pastetext",plugins:"link lists"};let $=k.bind({});$.storyName="vl-textarea-rich-next - toolbar",$.args={id:"textarea-rich-toolbar",rows:40,toolbar:"undo redo | h1 h2 h3 h4 h5 h6 | bold italic underline strikethrough | blockquote | hr",value:"<h1>h1 title</h1><h2>h2 title</h2><h3>h3 title</h3><h4>h4 title</h4><h5>h5 title</h5><h6>h6 title</h6><hr><p><b>b-tag</b></p><p><i>i-tag</i></p><p><u>u-tag</u></p><p><s>s-tag</s></p><hr><blockquote>blockquote-tag</blockquote>"};let C=k.bind({});C.storyName="vl-textarea-rich-next - plugins",C.args={id:"textarea-rich-plugins",rows:30,toolbar:"undo redo | h5 | bold italic underline strikethrough | bullist numlist | link",plugins:"lists link",value:'<h5>Link</h5><p><a href="https://www.vlaanderen.be/" target="_blank" rel="noopener">https://www.vlaanderen.be/</a></p><h5>Unordered list</h5><ul><li>Unordered list item 1</li><li>Unordered list item 2</li><ul><li>Unordered list subitem 1</li><li>Unordered list subitem 2</li></ul><li>Unordered list item 3</ul><h5>Ordered list</h5><ol><li>Ordered list item 1</li><li>Ordered list item 2</li><ol><li>Ordered list subitem 1</li><li>Ordered list subitem 2</li></ol><li>Ordered list item 3</ol>'},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:"story(textareaRichArgs, ({\n  id,\n  name,\n  label,\n  required,\n  disabled,\n  error,\n  success,\n  readonly,\n  value,\n  autocomplete,\n  minLength,\n  maxLength,\n  rows,\n  toolbar,\n  plugins,\n  preview,\n  customConfig,\n  onVlChange,\n  onVlInput,\n  onVlReset,\n  onVlValid\n}) => {\n  return html` <vl-textarea-rich-next\n            id=${id}\n            name=${name}\n            label=${label}\n            ?required=${required}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?success=${success}\n            ?readonly=${readonly}\n            value=${value}\n            autocomplete=${autocomplete}\n            min-length=${minLength}\n            max-length=${maxLength}\n            rows=${rows}\n            toolbar=${toolbar}\n            plugins=${plugins}\n            ?preview=${preview}\n            .customConfig=${customConfig}\n            @vl-change=${onVlChange}\n            @vl-input=${onVlInput}\n            @vl-reset=${onVlReset}\n            @vl-valid=${onVlValid}\n        ></vl-textarea-rich-next>`;\n})",...w.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:"story(textareaRichArgs, ({\n  id,\n  name,\n  label,\n  required,\n  disabled,\n  error,\n  success,\n  readonly,\n  value,\n  autocomplete,\n  minLength,\n  maxLength,\n  rows,\n  toolbar,\n  plugins,\n  preview,\n  customConfig,\n  onVlChange,\n  onVlInput,\n  onVlReset,\n  onVlValid\n}) => {\n  return html` <vl-textarea-rich-next\n            id=${id}\n            name=${name}\n            label=${label}\n            ?required=${required}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?success=${success}\n            ?readonly=${readonly}\n            value=${value}\n            autocomplete=${autocomplete}\n            min-length=${minLength}\n            max-length=${maxLength}\n            rows=${rows}\n            toolbar=${toolbar}\n            plugins=${plugins}\n            ?preview=${preview}\n            .customConfig=${customConfig}\n            @vl-change=${onVlChange}\n            @vl-input=${onVlInput}\n            @vl-reset=${onVlReset}\n            @vl-valid=${onVlValid}\n        ></vl-textarea-rich-next>`;\n})",...$.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:"story(textareaRichArgs, ({\n  id,\n  name,\n  label,\n  required,\n  disabled,\n  error,\n  success,\n  readonly,\n  value,\n  autocomplete,\n  minLength,\n  maxLength,\n  rows,\n  toolbar,\n  plugins,\n  preview,\n  customConfig,\n  onVlChange,\n  onVlInput,\n  onVlReset,\n  onVlValid\n}) => {\n  return html` <vl-textarea-rich-next\n            id=${id}\n            name=${name}\n            label=${label}\n            ?required=${required}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?success=${success}\n            ?readonly=${readonly}\n            value=${value}\n            autocomplete=${autocomplete}\n            min-length=${minLength}\n            max-length=${maxLength}\n            rows=${rows}\n            toolbar=${toolbar}\n            plugins=${plugins}\n            ?preview=${preview}\n            .customConfig=${customConfig}\n            @vl-change=${onVlChange}\n            @vl-input=${onVlInput}\n            @vl-reset=${onVlReset}\n            @vl-valid=${onVlValid}\n        ></vl-textarea-rich-next>`;\n})",...C.parameters?.docs?.source}}};let E=["TextareaRichDefault","TextareaRichToolbar","TextareaRichPlugins"]}}]);