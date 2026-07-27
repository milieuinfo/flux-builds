import{u as m,j as e,C as u,b8 as L,Z as a,_ as s,a1 as P,s as O,x as z,r as I}from"./iframe-BgD7f6Cn.js";import{t as q,V as N}from"./vl-textarea-rich.component-Cr5hLJgB.js";import{a as U,t as B}from"./vl-textarea.stories-arg-C2bNXSyV.js";import{M as _}from"./form-control.public-methods-doc-Bap_V9-H.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-textarea.component-gjn4lrXx.js";import"./form-control.stories-arg-BWC2ywE3.js";function p(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...m(),...i.components},{FluxAlert:c,FluxComponentMetaData:d}=n;return c||g("FluxAlert"),d||g("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"textarea-rich",children:"Textarea Rich"}),`
`,e.jsx(d,{id:"components-form-textarea-rich"}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(n.p,{children:["Gebruik de ",e.jsx(n.code,{children:"textarea-rich"})," component om een rich textarea veld toe te voegen aan een pagina.",e.jsx("br",{})]}),`
`,e.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { VlTextareaRichComponent } from '@domg-wc/components/form';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-textarea-rich></vl-textarea-rich>
`})}),`
`,e.jsx(u,{of:t}),`
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(L,{of:t}),`
`,e.jsx(n.h2,{id:"publieke-methodes",children:"Publieke methodes"}),`
`,e.jsx(_,{}),`
`,e.jsx(n.h2,{id:"content-security-policy-csp",children:"Content Security Policy (CSP)"}),`
`,e.jsxs(n.p,{children:["TinyMCE maakt bij bepaalde tools en plugins gebruik van inline styles.",e.jsx("br",{}),`
Hierdoor is het niet mogelijk om deze functionaliteit te gebruiken in een toepassing met een strikte Content Security Policy die `,e.jsx(n.code,{children:"unsafe-inline"})," blokkeert.",e.jsx("br",{}),`
We raden af om `,e.jsx(n.code,{children:"unsafe-inline"})," toe te laten in de Content Security Policy aangezien dit kan leiden tot security leaks."]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.tiny.cloud/docs/tinymce/6/tinymce-and-csp/",rel:"nofollow",children:"TinyMCE - CSP"})}),`
`,e.jsx(n.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(n.h3,{id:"toolbar",children:"Toolbar"}),`
`,e.jsxs(n.p,{children:["De TinyMCE toolbar kan geconfigureerd worden door het ",e.jsx(n.code,{children:"toolbar"})," attribuut te gebruiken."]}),`
`,e.jsxs(n.p,{children:["Bepaalde tools maken gebruik van inline styles, hierdoor werken deze niet in een toepassing met een strikte Content Security Policy (zie sectie ",e.jsx(n.a,{href:"#content-security-policy-csp",children:"Content Security Policy"})," op deze pagina)."]}),`
`,e.jsx(c,{type:"warning",children:`
  Sommige tools kan je enkel gebruiken als je de bijhorende plugin hebt geactiveerd.
`}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://www.tiny.cloud/docs/tinymce/6/available-toolbar-buttons/",rel:"nofollow",children:"TinyMCE - Toolbar buttons"}),": een overzicht van de tools en de eventueel bijhorende plugins ",e.jsx("br",{}),`
`,e.jsx(n.a,{href:"https://www.tiny.cloud/docs/tinymce/6/basic-setup/#toolbar-configuration",rel:"nofollow",children:"TinyMCE - Toolbar configuration"}),": meer informatie over toolbar configuratie"]}),`
`,e.jsxs(n.p,{children:["Hier vind je specifieke voorbeelden om de tools en bijhorende plugins te activeren in onze component voor ",e.jsx(n.a,{href:"#link-plugin",children:"links"})," en ",e.jsx(n.a,{href:"#lists-plugin",children:"lists"}),"."]}),`
`,e.jsx(u,{of:l}),`
`,e.jsx(n.h3,{id:"plugins",children:"Plugins"}),`
`,e.jsxs(n.p,{children:["TinyMCE open source plugins kunnen geconfigureerd worden door het ",e.jsx(n.code,{children:"plugins"})," attribuut en de ",e.jsx(n.code,{children:"customConfig"})," property te gebruiken.",e.jsx("br",{}),`
Aan het `,e.jsx(n.code,{children:"plugins"})," attribuut kan je een lijst van plugins meegeven die je wil gebruiken. Je moet deze instellen om bepaalde tools te kunnen gebruiken (voorbeelden vind je hier: ",e.jsx(n.a,{href:"#link-plugin",children:"link"})," en ",e.jsx(n.a,{href:"#lists-plugin",children:"lists"}),").",e.jsx("br",{}),`
Aan de `,e.jsx(n.code,{children:"customConfig"})," property kan je een object meegeven met de configuratie van de plugins.",e.jsx("br",{}),`
Aangezien we de open source versie van TinyMCE gebruiken, kan je geen gebruik maken van de premium plugins.`]}),`
`,e.jsxs(n.p,{children:["Bepaalde plugins maken gebruik van inline styles, hierdoor werken deze niet in een toepassing met een strikte Content Security Policy (zie sectie Content Security Policy op deze pagina).",e.jsx("br",{})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://www.tiny.cloud/docs/tinymce/6/basic-setup/#plugin-configuration",rel:"nofollow",children:"TinyMCE - Plugin configuration"}),e.jsx("br",{}),`
`,e.jsx(n.a,{href:"https://www.tiny.cloud/docs/tinymce/6/plugins/#open-source-plugins",rel:"nofollow",children:"TinyMCE - Open source plugins"})]}),`
`,e.jsx(u,{of:o}),`
`,e.jsx(n.h4,{id:"lists-plugin",children:"lists plugin"}),`
`,e.jsxs(n.p,{children:["Om de ",e.jsx(n.code,{children:"numlist"})," en ",e.jsx(n.code,{children:"bullist"})," tools te gebruiken in de toolbar, moet je de ",e.jsx(n.code,{children:"lists"})," plugin instellen (referentie: ",e.jsx(n.a,{href:"https://www.tiny.cloud/docs/tinymce/6/available-toolbar-buttons/#lists-plugin",rel:"nofollow",children:"TinyMCE - Lists toolbar buttons"}),")."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-textarea-rich
  toolbar="numlist bullist"
  plugins="lists"
></vl-textarea-rich>
`})}),`
`,e.jsx(n.h4,{id:"link-plugin",children:"link plugin"}),`
`,e.jsxs(n.p,{children:["Om de ",e.jsx(n.code,{children:"link"})," tool in de toolbar te gebruiken, moet je de ",e.jsx(n.code,{children:"link"})," plugin instellen (referentie: ",e.jsx(n.a,{href:"https://www.tiny.cloud/docs/tinymce/6/available-toolbar-buttons/#link-plugin",rel:"nofollow",children:"TinyMCE - Link toolbar buttons"}),")."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-textarea-rich
  toolbar="link"
  plugins="link"
></vl-textarea-rich>
`})}),`
`,e.jsx(n.h2,{id:"validatie",children:"Validatie"}),`
`,e.jsxs(n.p,{children:["Meer info over validatie binnen onze form componenten vind je hier: ",e.jsx(n.a,{href:"/docs/patronen-formulier-validatie--documentatie",children:"Form - Validatie"})]}),`
`,e.jsx(n.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(n.h3,{id:"tinymce",children:"TinyMCE"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.tiny.cloud/docs/tinymce/6/",rel:"nofollow",children:"Documentatie TinyMCE - 6"})})]})}function F(i={}){const{wrapper:n}={...m(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(p,{...i})}):p(i)}function g(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}const r={...U,...q},G={...B,rows:{name:"rows",description:"**Deprecated** Heeft geen effect op de `vl-textarea-rich` editor. Gebruik `height` om de hoogte in te stellen.",table:{type:{summary:s.NUMBER},category:a.ATTRIBUTES}},toolbar:{name:"toolbar",description:"TinyMCE toolbar configuratie.<br/>Zie de documentatie pagina voor meer info.<br/>Dit attribuut is niet reactief.",table:{type:{summary:s.STRING},category:a.ATTRIBUTES,defaultValue:{summary:r.toolbar}}},plugins:{name:"plugins",description:"TinyMCE plugin configuratie.<br/>Zie de documentatie pagina voor meer info.<br/>Dit attribuut is niet reactief.",table:{type:{summary:s.STRING},category:a.ATTRIBUTES,defaultValue:{summary:r.plugins}}},preview:{name:"preview",description:"Beeldt de value af in preview mode.<br/>Er wordt geen TinyMCE toolbar getoond en de value is niet aanpasbaar.",table:{type:{summary:s.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(r.preview)}}},height:{name:"height",description:"De hoogte van de editor in pixels (inclusief toolbar en statusbalk).<br/>Er is een minimale hoogte van **70px**.<br/>Dit attribuut is niet reactief.",control:{type:P.NUMBER},table:{type:{summary:s.NUMBER},category:a.ATTRIBUTES,defaultValue:{summary:String(r.height)}}},customConfig:{name:"customConfig",description:"TinyMCE custom configuratie.<br/>Deze property kan gebruikt worden om custom configuratie mee te geven voor TinyMCE, als ook om configuratie mee te geven voor plugins.<br/>Deze property is niet reactief.",table:{type:{summary:"{ key: value }"},category:a.PROPERTIES,defaultValue:{summary:String(r.customConfig)}}}};I([N]);const Q={id:"components-form-textarea-rich",title:"Components - Form/textarea-rich",tags:["autodocs"],args:r,argTypes:G,parameters:{controls:{exclude:["block","cols","placeholder","character-count"]},docs:{page:F}}},h=O(r,({id:i,name:n,label:c,required:d,disabled:b,error:x,success:v,blurValidation:y,readonly:f,value:j,autocomplete:$,minLength:k,maxLength:w,height:C,toolbar:T,plugins:V,preview:R,customConfig:E,onVlChange:M,onVlInput:S,onVlReset:A,onVlValid:D})=>z` <vl-textarea-rich
            id=${i}
            name=${n}
            label=${c}
            ?required=${d}
            ?disabled=${b}
            ?error=${x}
            ?success=${v}
            ?blur-validation=${y}
            ?readonly=${f}
            value=${j}
            autocomplete=${$}
            min-length=${k}
            max-length=${w}
            height=${C}
            toolbar=${T}
            plugins=${V}
            ?preview=${R}
            .customConfig=${E}
            @vl-change=${M}
            @vl-input=${S}
            @vl-reset=${A}
            @vl-valid=${D}
        ></vl-textarea-rich>`),t=h.bind({});t.storyName="vl-textarea-rich - default";t.args={id:"textarea-rich-default",value:"<p><b>b-tag</b></p><p><i>i-tag</i></p><p><u>u-tag</u></p><p><s>s-tag</s></p>",toolbar:"undo redo | bold italic underline | link | h1 h2 | bullist numlist | paste pastetext",plugins:"link lists"};const l=h.bind({});l.storyName="vl-textarea-rich - toolbar";l.args={id:"textarea-rich-toolbar",height:500,toolbar:"undo redo | h1 h2 h3 h4 h5 h6 | bold italic underline strikethrough | blockquote | hr",value:"<h1>h1 title</h1><h2>h2 title</h2><h3>h3 title</h3><h4>h4 title</h4><h5>h5 title</h5><h6>h6 title</h6><hr><p><b>b-tag</b></p><p><i>i-tag</i></p><p><u>u-tag</u></p><p><s>s-tag</s></p><hr><blockquote>blockquote-tag</blockquote>"};const o=h.bind({});o.storyName="vl-textarea-rich - plugins";o.args={id:"textarea-rich-plugins",height:400,toolbar:"undo redo | h5 | bold italic underline strikethrough | bullist numlist | link",plugins:"lists link",value:'<h5>Link</h5><p><a href="https://www.vlaanderen.be/" target="_blank" rel="noopener">https://www.vlaanderen.be/</a></p><h5>Unordered list</h5><ul><li>Unordered list item 1</li><li>Unordered list item 2</li><ul><li>Unordered list subitem 1</li><li>Unordered list subitem 2</li></ul><li>Unordered list item 3</ul><h5>Ordered list</h5><ol><li>Ordered list item 1</li><li>Ordered list item 2</li><ol><li>Ordered list subitem 1</li><li>Ordered list subitem 2</li></ol><li>Ordered list item 3</ol>'};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`story(textareaRichArgs, ({
  id,
  name,
  label,
  required,
  disabled,
  error,
  success,
  blurValidation,
  readonly,
  value,
  autocomplete,
  minLength,
  maxLength,
  height,
  toolbar,
  plugins,
  preview,
  customConfig,
  onVlChange,
  onVlInput,
  onVlReset,
  onVlValid
}) => {
  return html\` <vl-textarea-rich
            id=\${id}
            name=\${name}
            label=\${label}
            ?required=\${required}
            ?disabled=\${disabled}
            ?error=\${error}
            ?success=\${success}
            ?blur-validation=\${blurValidation}
            ?readonly=\${readonly}
            value=\${value}
            autocomplete=\${autocomplete}
            min-length=\${minLength}
            max-length=\${maxLength}
            height=\${height}
            toolbar=\${toolbar}
            plugins=\${plugins}
            ?preview=\${preview}
            .customConfig=\${customConfig}
            @vl-change=\${onVlChange}
            @vl-input=\${onVlInput}
            @vl-reset=\${onVlReset}
            @vl-valid=\${onVlValid}
        ></vl-textarea-rich>\`;
})`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`story(textareaRichArgs, ({
  id,
  name,
  label,
  required,
  disabled,
  error,
  success,
  blurValidation,
  readonly,
  value,
  autocomplete,
  minLength,
  maxLength,
  height,
  toolbar,
  plugins,
  preview,
  customConfig,
  onVlChange,
  onVlInput,
  onVlReset,
  onVlValid
}) => {
  return html\` <vl-textarea-rich
            id=\${id}
            name=\${name}
            label=\${label}
            ?required=\${required}
            ?disabled=\${disabled}
            ?error=\${error}
            ?success=\${success}
            ?blur-validation=\${blurValidation}
            ?readonly=\${readonly}
            value=\${value}
            autocomplete=\${autocomplete}
            min-length=\${minLength}
            max-length=\${maxLength}
            height=\${height}
            toolbar=\${toolbar}
            plugins=\${plugins}
            ?preview=\${preview}
            .customConfig=\${customConfig}
            @vl-change=\${onVlChange}
            @vl-input=\${onVlInput}
            @vl-reset=\${onVlReset}
            @vl-valid=\${onVlValid}
        ></vl-textarea-rich>\`;
})`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`story(textareaRichArgs, ({
  id,
  name,
  label,
  required,
  disabled,
  error,
  success,
  blurValidation,
  readonly,
  value,
  autocomplete,
  minLength,
  maxLength,
  height,
  toolbar,
  plugins,
  preview,
  customConfig,
  onVlChange,
  onVlInput,
  onVlReset,
  onVlValid
}) => {
  return html\` <vl-textarea-rich
            id=\${id}
            name=\${name}
            label=\${label}
            ?required=\${required}
            ?disabled=\${disabled}
            ?error=\${error}
            ?success=\${success}
            ?blur-validation=\${blurValidation}
            ?readonly=\${readonly}
            value=\${value}
            autocomplete=\${autocomplete}
            min-length=\${minLength}
            max-length=\${maxLength}
            height=\${height}
            toolbar=\${toolbar}
            plugins=\${plugins}
            ?preview=\${preview}
            .customConfig=\${customConfig}
            @vl-change=\${onVlChange}
            @vl-input=\${onVlInput}
            @vl-reset=\${onVlReset}
            @vl-valid=\${onVlValid}
        ></vl-textarea-rich>\`;
})`,...o.parameters?.docs?.source}}};const ee=["TextareaRichDefault","TextareaRichToolbar","TextareaRichPlugins"];export{t as TextareaRichDefault,o as TextareaRichPlugins,l as TextareaRichToolbar,ee as __namedExportsOrder,Q as default};
