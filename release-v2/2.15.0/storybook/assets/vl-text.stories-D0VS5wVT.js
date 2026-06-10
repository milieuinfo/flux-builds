import{Z as r,_ as o,W as k,bK as a,X as E,u as j,j as n,C as s,bc as L,s as B,x as N,r as O,R as M}from"./iframe-CsDE-vVI.js";import{o as C}from"./unsafe-html-ogfylwJ3.js";import"./preload-helper-D9Z9MdNV.js";const $={...E,...a,defaultSlot:""},H={...k,bold:{name:"bold",description:"Toont de tekst in het vet.",table:{type:{summary:o.BOOLEAN},category:r.ATTRIBUTES,defaultValue:{summary:String(a.bold)}}},success:{name:"success",description:"Toont de tekst in de success-kleur.",table:{type:{summary:o.BOOLEAN},category:r.ATTRIBUTES,defaultValue:{summary:String(a.success)}}},warning:{name:"warning",description:"Toont de tekst in de warning-kleur.",table:{type:{summary:o.BOOLEAN},category:r.ATTRIBUTES,defaultValue:{summary:String(a.warning)}}},error:{name:"error",description:"Toont de tekst in de error-kleur.",table:{type:{summary:o.BOOLEAN},category:r.ATTRIBUTES,defaultValue:{summary:String(a.error)}}},italic:{name:"italic",description:"Toont de tekst cursief.",table:{type:{summary:o.BOOLEAN},category:r.ATTRIBUTES,defaultValue:{summary:String(a.italic)}}},underline:{name:"underline",description:"Toont de tekst onderstreept.",table:{type:{summary:o.BOOLEAN},category:r.ATTRIBUTES,defaultValue:{summary:String(a.underline)}}},annotation:{name:"annotation",description:"Toont de tekst minder opvallend - hij krijgt een grijze kleur.",table:{type:{summary:o.BOOLEAN},category:r.ATTRIBUTES,defaultValue:{summary:String(a.annotation)}}},small:{name:"small",description:"Toont de tekst kleiner.",table:{type:{summary:o.BOOLEAN},category:r.ATTRIBUTES,defaultValue:{summary:String(a.small)}}},defaultSlot:{name:"[default]",description:"De inhoud van de tekst.",table:{type:{summary:o.HTML},category:r.SLOTS,defaultValue:{summary:$.defaultSlot}}}};function b(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...j(),...t.components},{FluxComponentMetaData:h}=e;return h||I("FluxComponentMetaData"),n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"text",children:"Text"}),`
`,n.jsx(h,{id:"components-atom-text"}),`
`,n.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,n.jsxs(e.p,{children:["Gebruik de ",n.jsx(e.code,{children:"text"})," component om een tekst af te beelden op andere wijze.",n.jsx("br",{})]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"vl-text"}),` is puur stilistisch en heeft geen koppeling met form-controls of validatie. Wil je een boodschap tonen die
hoort bij een form-control (bv. een fout-, success- of toelichtingsboodschap), gebruik dan
`,n.jsx(e.a,{href:"/docs/components-form-form-message--documentatie",children:n.jsx(e.code,{children:"vl-form-message"})}),`: die werkt samen met de validatie-lifecycle en
zorgt voor de juiste `,n.jsx(e.code,{children:"aria"}),"-koppeling."]}),`
`,n.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`import { VlTextComponent } from '@domg-wc/components/atom';
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<vl-text></vl-text>
`})}),`
`,n.jsx(s,{of:i}),`
`,n.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,n.jsx(L,{of:i}),`
`,n.jsx(e.h2,{id:"varianten",children:"Varianten"}),`
`,n.jsx(e.h3,{id:"bold",children:"Bold"}),`
`,n.jsx(s,{of:c}),`
`,n.jsx(e.h3,{id:"italic",children:"Italic"}),`
`,n.jsx(s,{of:d}),`
`,n.jsx(e.h3,{id:"underline",children:"Underline"}),`
`,n.jsx(s,{of:u}),`
`,n.jsx(e.h3,{id:"success",children:"Success"}),`
`,n.jsx(s,{of:m}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[`Hoort de boodschap bij een form-control? Gebruik dan
`,n.jsx(e.a,{href:"/docs/components-form-form-message--documentatie",children:n.jsx(e.code,{children:"vl-form-message"})})," met ",n.jsx(e.code,{children:'variant="success"'})," (of ",n.jsx(e.code,{children:'state="valid"'}),` voor
een automatische success-boodschap). `,n.jsx(e.code,{children:"vl-text"})," is enkel voor stijl, niet voor forms."]}),`
`]}),`
`,n.jsx(e.h3,{id:"warning",children:"Warning"}),`
`,n.jsx(s,{of:x}),`
`,n.jsx(e.h3,{id:"error",children:"Error"}),`
`,n.jsx(s,{of:g}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[`Hoort de boodschap bij een form-control? Gebruik dan
`,n.jsx(e.a,{href:"/docs/components-form-form-message--documentatie",children:n.jsx(e.code,{children:"vl-form-message"})})," (default ",n.jsx(e.code,{children:'variant="error"'}),"). ",n.jsx(e.code,{children:"vl-text"}),` is enkel
voor stijl, niet voor forms.`]}),`
`]}),`
`,n.jsx(e.h3,{id:"annotation",children:"Annotation"}),`
`,n.jsx(s,{of:p}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[`Hoort de boodschap bij een form-control? Gebruik dan
`,n.jsx(e.a,{href:"/docs/components-form-form-message--documentatie",children:n.jsx(e.code,{children:"vl-form-message"})})," met ",n.jsx(e.code,{children:'variant="annotation"'}),". ",n.jsx(e.code,{children:"vl-text"}),` is enkel
voor stijl, niet voor forms.`]}),`
`]}),`
`,n.jsx(e.h3,{id:"small",children:"Small"}),`
`,n.jsx(s,{of:f})]})}function V(t={}){const{wrapper:e}={...j(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(b,{...t})}):b(t)}function I(t,e){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}O([M]);const _={id:"components-atom-text",title:"Components - Atom/text",tags:["autodocs"],args:$,argTypes:H,parameters:{docs:{page:V}}},l=B($,({bold:t,success:e,warning:h,error:T,italic:S,underline:y,annotation:v,small:w,defaultSlot:A})=>N`
        <vl-text
            ?bold=${t}
            ?success=${e}
            ?warning=${h}
            ?error=${T}
            ?italic=${S}
            ?underline=${y}
            ?annotation=${v}
            ?small=${w}
        >
            ${C(A)}
        </vl-text>
    `),i=l.bind({});i.storyName="vl-text - default";i.args={defaultSlot:"tekst - default"};const c=l.bind({});c.storyName="vl-text - bold";c.args={defaultSlot:"text - bold",bold:!0};const d=l.bind({});d.storyName="vl-text - italic";d.args={defaultSlot:"text - italic",italic:!0};const u=l.bind({});u.storyName="vl-text - underline";u.args={defaultSlot:"text - underline",underline:!0};const m=l.bind({});m.storyName="vl-text - success";m.args={defaultSlot:"text - success",success:!0};const x=l.bind({});x.storyName="vl-text - warning";x.args={defaultSlot:"text - warning",warning:!0};const g=l.bind({});g.storyName="vl-text - error";g.args={defaultSlot:"text - error",error:!0};const p=l.bind({});p.storyName="vl-text - annotation";p.args={defaultSlot:"text - annotation",annotation:!0};const f=l.bind({});f.storyName="vl-text - small";f.args={defaultSlot:"text - small",small:!0};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`story(textArgs, ({
  bold,
  success,
  warning,
  error,
  italic,
  underline,
  annotation,
  small,
  defaultSlot
}) => html\`
        <vl-text
            ?bold=\${bold}
            ?success=\${success}
            ?warning=\${warning}
            ?error=\${error}
            ?italic=\${italic}
            ?underline=\${underline}
            ?annotation=\${annotation}
            ?small=\${small}
        >
            \${unsafeHTML(defaultSlot)}
        </vl-text>
    \`)`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`story(textArgs, ({
  bold,
  success,
  warning,
  error,
  italic,
  underline,
  annotation,
  small,
  defaultSlot
}) => html\`
        <vl-text
            ?bold=\${bold}
            ?success=\${success}
            ?warning=\${warning}
            ?error=\${error}
            ?italic=\${italic}
            ?underline=\${underline}
            ?annotation=\${annotation}
            ?small=\${small}
        >
            \${unsafeHTML(defaultSlot)}
        </vl-text>
    \`)`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`story(textArgs, ({
  bold,
  success,
  warning,
  error,
  italic,
  underline,
  annotation,
  small,
  defaultSlot
}) => html\`
        <vl-text
            ?bold=\${bold}
            ?success=\${success}
            ?warning=\${warning}
            ?error=\${error}
            ?italic=\${italic}
            ?underline=\${underline}
            ?annotation=\${annotation}
            ?small=\${small}
        >
            \${unsafeHTML(defaultSlot)}
        </vl-text>
    \`)`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`story(textArgs, ({
  bold,
  success,
  warning,
  error,
  italic,
  underline,
  annotation,
  small,
  defaultSlot
}) => html\`
        <vl-text
            ?bold=\${bold}
            ?success=\${success}
            ?warning=\${warning}
            ?error=\${error}
            ?italic=\${italic}
            ?underline=\${underline}
            ?annotation=\${annotation}
            ?small=\${small}
        >
            \${unsafeHTML(defaultSlot)}
        </vl-text>
    \`)`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`story(textArgs, ({
  bold,
  success,
  warning,
  error,
  italic,
  underline,
  annotation,
  small,
  defaultSlot
}) => html\`
        <vl-text
            ?bold=\${bold}
            ?success=\${success}
            ?warning=\${warning}
            ?error=\${error}
            ?italic=\${italic}
            ?underline=\${underline}
            ?annotation=\${annotation}
            ?small=\${small}
        >
            \${unsafeHTML(defaultSlot)}
        </vl-text>
    \`)`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`story(textArgs, ({
  bold,
  success,
  warning,
  error,
  italic,
  underline,
  annotation,
  small,
  defaultSlot
}) => html\`
        <vl-text
            ?bold=\${bold}
            ?success=\${success}
            ?warning=\${warning}
            ?error=\${error}
            ?italic=\${italic}
            ?underline=\${underline}
            ?annotation=\${annotation}
            ?small=\${small}
        >
            \${unsafeHTML(defaultSlot)}
        </vl-text>
    \`)`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`story(textArgs, ({
  bold,
  success,
  warning,
  error,
  italic,
  underline,
  annotation,
  small,
  defaultSlot
}) => html\`
        <vl-text
            ?bold=\${bold}
            ?success=\${success}
            ?warning=\${warning}
            ?error=\${error}
            ?italic=\${italic}
            ?underline=\${underline}
            ?annotation=\${annotation}
            ?small=\${small}
        >
            \${unsafeHTML(defaultSlot)}
        </vl-text>
    \`)`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`story(textArgs, ({
  bold,
  success,
  warning,
  error,
  italic,
  underline,
  annotation,
  small,
  defaultSlot
}) => html\`
        <vl-text
            ?bold=\${bold}
            ?success=\${success}
            ?warning=\${warning}
            ?error=\${error}
            ?italic=\${italic}
            ?underline=\${underline}
            ?annotation=\${annotation}
            ?small=\${small}
        >
            \${unsafeHTML(defaultSlot)}
        </vl-text>
    \`)`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`story(textArgs, ({
  bold,
  success,
  warning,
  error,
  italic,
  underline,
  annotation,
  small,
  defaultSlot
}) => html\`
        <vl-text
            ?bold=\${bold}
            ?success=\${success}
            ?warning=\${warning}
            ?error=\${error}
            ?italic=\${italic}
            ?underline=\${underline}
            ?annotation=\${annotation}
            ?small=\${small}
        >
            \${unsafeHTML(defaultSlot)}
        </vl-text>
    \`)`,...f.parameters?.docs?.source}}};const W=["TextDefault","TextBold","TextItalic","TextUnderline","TextSuccess","TextWarning","TextError","TextAnnotation","TextSmall"];export{p as TextAnnotation,c as TextBold,i as TextDefault,g as TextError,d as TextItalic,f as TextSmall,m as TextSuccess,u as TextUnderline,x as TextWarning,W as __namedExportsOrder,_ as default};
