import{Z as a,bM as M,_ as c,a2 as x,a1 as A,bN as C,W as B,bO as U,X as D,bP as r,bQ as i,u as N,j as e,C as l,b8 as _,s as G,x as F,r as P,d as q}from"./iframe-DynOw9qF.js";import{o as j}from"./unsafe-html-CPadS5Zd.js";import"./preload-helper-D9Z9MdNV.js";const n={...D,closable:!1,naked:!1,multiline:!1,title:"",icon:"",size:"",type:"",message:"",defaultSlot:"",titleSlot:"",actionsSlot:"",alertClosed:U(M.eventType)},K={...B,closable:{name:"closable",description:"Sluitknop voor de waarschuwing",table:{type:{summary:c.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(n.closable)}}},naked:{name:"naked",description:"Naked variant van de waarschuwing.",table:{type:{summary:c.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(n.naked)}}},multiline:{name:"multiline",description:"Behoudt nieuwe regels in de boodschap van de waarschuwing.",table:{type:{summary:c.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(n.multiline)}}},title:{name:"title",description:"Titel van de waarschuwing.<br>Bij de naked variant mag de titel alleen met dit attribuut meegegeven worden.",table:{type:{summary:c.STRING},category:a.ATTRIBUTES,defaultValue:{summary:n.title}}},icon:{name:"icon",description:"Icon van de waarschuwing.<br>Het icoon kan gekozen worden uit de lijst op https://www.vlaanderen.be/vlaanderen-design-system/componenten/icon.",control:{type:A.SELECT},options:Object.values(i),table:{type:{summary:x(Object.values(i))},category:a.ATTRIBUTES,defaultValue:{summary:n.icon}}},message:{name:"message",description:"De message van de waarschuwing.<br>Bij de naked variant mag de message alleen met dit attribuut meegegeven worden.<br>Werkt niet in combinatie met het default slot.",table:{type:{summary:c.STRING},category:a.ATTRIBUTES,defaultValue:{summary:n.message}}},size:{name:"size",description:"Kleine variant van de waarschuwing.",control:{type:A.SELECT},options:[C.SMALL],table:{type:{summary:`${C.SMALL}`},category:a.ATTRIBUTES,defaultValue:{summary:n.size}}},type:{name:"type",description:"Soort van de waarschuwing, foutmelding, probleemmelding of succesmelding.",control:{type:A.SELECT},options:Object.values(r),table:{type:{summary:x(Object.values(r))},category:a.ATTRIBUTES,defaultValue:{summary:n.type}}},titleSlot:{name:"title",description:"Element dat als titel van het alert getoond wordt.",table:{type:{summary:c.HTML},category:a.SLOTS,defaultValue:{summary:n.titleSlot}}},actionsSlot:{name:"actions",description:"Slot voor actieknoppen",table:{type:{summary:c.HTML},category:a.SLOTS,defaultValue:{summary:n.actionsSlot}}},defaultSlot:{name:"[default]",description:"Element dat als message van het alert getoond wordt.",table:{type:{summary:c.HTML},category:a.SLOTS,defaultValue:{summary:n.defaultSlot}}},alertClosed:{name:M.eventType,description:"Afgevuurd wanneer de alert wordt gesloten.",table:{type:{summary:"-"},category:a.EVENTS}}};function w(o){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...N(),...o.components},{FluxAlert:T,FluxComponentMetaData:k}=t;return T||L("FluxAlert"),k||L("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"alert",children:"Alert"}),`
`,e.jsx(k,{id:"components-block-alert"}),`
`,e.jsx(t.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(t.p,{children:["Gebruik de ",e.jsx(t.code,{children:"alert"})," component om de gebruiker op de hoogte te houden van belangrijke informatie."]}),`
`,e.jsx(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import { VlAlert } from '@domg-wc/components/block';
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<vl-alert></vl-alert>
`})}),`
`,e.jsx(l,{of:d}),`
`,e.jsx(t.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(_,{of:d}),`
`,e.jsx(t.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(t.h3,{id:"error",children:"Error"}),`
`,e.jsx(l,{of:m}),`
`,e.jsx(t.h3,{id:"info",children:"Info"}),`
`,e.jsx(l,{of:p}),`
`,e.jsx(t.h3,{id:"success",children:"Success"}),`
`,e.jsx(l,{of:g}),`
`,e.jsx(t.h3,{id:"warning",children:"Warning"}),`
`,e.jsx(l,{of:$}),`
`,e.jsx(t.h3,{id:"with-button",children:"With button"}),`
`,e.jsx(l,{of:y}),`
`,e.jsx(t.h3,{id:"with-title-slot",children:"With title slot"}),`
`,e.jsx(l,{of:S}),`
`,e.jsx(t.h3,{id:"with-close-button",children:"With close button"}),`
`,e.jsx(l,{of:u}),`
`,e.jsx(t.h3,{id:"naked-error",children:"Naked error"}),`
`,e.jsx(l,{of:f}),`
`,e.jsx(t.h3,{id:"naked-warning",children:"Naked warning"}),`
`,e.jsx(l,{of:h}),`
`,e.jsx(t.h3,{id:"naked-success",children:"Naked success"}),`
`,e.jsx(l,{of:b}),`
`,e.jsx(t.h3,{id:"multiline",children:"Multiline"}),`
`,e.jsxs(t.p,{children:["Stelt ",e.jsx(t.code,{children:"white-space: pre-line;"})," in voor de boodschap zodat nieuwe regels (newline karakters) in rekening worden gebracht."]}),`
`,e.jsx(T,{type:"warning",children:`
Let op: bij het gebruik van slot content moet de tekst direct na de opening-tag starten, zonder newline.
Een newline na de opening-tag wordt door \`pre-line\` als witruimte weergegeven.
`}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<!-- Correct -->
<vl-alert multiline
    ><span>Eerste regel.</span>
    <span>Tweede regel.</span>
</vl-alert>

<!-- Fout: newline na opening-tag geeft extra witruimte -->
<vl-alert multiline>
    <span>Eerste regel.</span>
    <span>Tweede regel.</span>
</vl-alert>
`})}),`
`,e.jsx(l,{of:v}),`
`,e.jsx(t.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/componenten/alert",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Alert"})})]})}function X(o={}){const{wrapper:t}={...N(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(w,{...o})}):w(o)}function L(o,t){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}P([q]);const J={id:"components-block-alert",title:"Components - Block/alert",tags:["autodocs"],args:n,argTypes:K,parameters:{docs:{page:X}}},s=G(n,({closable:o,icon:t,title:T,size:k,type:z,naked:E,multiline:H,message:R,defaultSlot:I,actionsSlot:O,titleSlot:W,alertClosed:V})=>F`
        <vl-alert
            ?closable=${o}
            ?naked=${E}
            ?multiline=${H}
            icon=${t}
            title=${T}
            size=${k}
            type=${z}
            message=${R}
            @vl-alert-closed="${V}"
            data-cy="alert"
        >
            ${j(W)}${j(I)}${j(O)}</vl-alert
        >
    `),d=s.bind({});d.storyName="vl-alert - default";d.args={defaultSlot:"<span>Als u vaststelt dat er foute informatie over u in het bestand van de Centrale voor Kredieten aan Particulieren staat, dan kunt u een rechtzetting aanvragen.</span>"};const m=s.bind({});m.storyName="vl-alert - error";m.args={title:"Opgelet!",type:r.ERROR,icon:i.WARNING,defaultSlot:"<span>U heeft geen rechten om deze actie uit te voeren.</span>"};const p=s.bind({});p.storyName="vl-alert - info";p.args={title:"Info",type:r.INFO,icon:i.INFO_CIRCLE,defaultSlot:"<span>Als u vaststelt dat er foute informatie over u in het bestand van de Centrale voor Kredieten aan Particulieren staat, dan kunt u een rechtzetting aanvragen.</span>"};const g=s.bind({});g.storyName="vl-alert - success";g.args={title:"Gelukt!",type:r.SUCCESS,icon:i.CHECK,defaultSlot:"<span>We hebben uw melding goed ontvangen en nemen deze spoedig in behandeling.</span>"};const $=s.bind({});$.storyName="vl-alert - warning";$.args={title:"Technische storing",type:r.WARNING,icon:i.WARNING,defaultSlot:"<span>Door een technische storing is dit loket tijdelijk niet beschikbaar.</span>"};const y=s.bind({});y.storyName="vl-alert - with button";y.args={actionsSlot:'<vl-button slot="actions">button text</vl-button>',defaultSlot:"<span>Phasellus congue ipsum ut felis auctor, eget maximus justo dapibus. Nam sit amet pulvinar odio. Maecenas rhoncus quam eget neque porttitor, et faucibus nisl elementum.</span>"};const S=s.bind({});S.storyName="vl-alert - with title slot";S.args={titleSlot:'<span slot="title">Titel</span>',defaultSlot:"<span>Phasellus congue ipsum ut felis auctor, eget maximus justo dapibus. Nam sit amet pulvinar odio. Maecenas rhoncus quam eget neque porttitor, et faucibus nisl elementum.</span>"};const u=s.bind({});u.storyName="vl-alert - closeable";u.argTypes={};u.args={closable:!0,defaultSlot:"<span>Phasellus congue ipsum ut felis auctor, eget maximus justo dapibus. Nam sit amet pulvinar odio. Maecenas rhoncus quam eget neque porttitor, et faucibus nisl elementum.</span>"};const f=s.bind({});f.storyName="vl-alert - naked error";f.args={title:"Opgelet!",type:r.ERROR,icon:i.WARNING,naked:!0,message:"U heeft geen rechten om deze actie uit te voeren."};const h=s.bind({});h.storyName="vl-alert - naked warning";h.args={title:"Opgelet!",type:r.WARNING,icon:i.WARNING,naked:!0,message:"U heeft geen rechten om deze actie uit te voeren."};const b=s.bind({});b.storyName="vl-alert - naked success";b.args={title:"Opgelet!",type:r.SUCCESS,icon:i.CHECK,naked:!0,message:"U heeft geen rechten om deze actie uit te voeren."};const v=s.bind({});v.storyName="vl-alert - multiline";v.args={title:"Info",type:r.INFO,icon:i.INFO_CIRCLE,multiline:!0};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`story(alertArgs, ({
  closable,
  icon,
  title,
  size,
  type,
  naked,
  multiline,
  message,
  defaultSlot,
  actionsSlot,
  titleSlot,
  alertClosed
}) => html\`
        <vl-alert
            ?closable=\${closable}
            ?naked=\${naked}
            ?multiline=\${multiline}
            icon=\${icon}
            title=\${title}
            size=\${size}
            type=\${type}
            message=\${message}
            @vl-alert-closed="\${alertClosed}"
            data-cy="alert"
        >
            \${unsafeHTML(titleSlot)}\${unsafeHTML(defaultSlot)}\${unsafeHTML(actionsSlot)}</vl-alert
        >
    \`)`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`story(alertArgs, ({
  closable,
  icon,
  title,
  size,
  type,
  naked,
  multiline,
  message,
  defaultSlot,
  actionsSlot,
  titleSlot,
  alertClosed
}) => html\`
        <vl-alert
            ?closable=\${closable}
            ?naked=\${naked}
            ?multiline=\${multiline}
            icon=\${icon}
            title=\${title}
            size=\${size}
            type=\${type}
            message=\${message}
            @vl-alert-closed="\${alertClosed}"
            data-cy="alert"
        >
            \${unsafeHTML(titleSlot)}\${unsafeHTML(defaultSlot)}\${unsafeHTML(actionsSlot)}</vl-alert
        >
    \`)`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`story(alertArgs, ({
  closable,
  icon,
  title,
  size,
  type,
  naked,
  multiline,
  message,
  defaultSlot,
  actionsSlot,
  titleSlot,
  alertClosed
}) => html\`
        <vl-alert
            ?closable=\${closable}
            ?naked=\${naked}
            ?multiline=\${multiline}
            icon=\${icon}
            title=\${title}
            size=\${size}
            type=\${type}
            message=\${message}
            @vl-alert-closed="\${alertClosed}"
            data-cy="alert"
        >
            \${unsafeHTML(titleSlot)}\${unsafeHTML(defaultSlot)}\${unsafeHTML(actionsSlot)}</vl-alert
        >
    \`)`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`story(alertArgs, ({
  closable,
  icon,
  title,
  size,
  type,
  naked,
  multiline,
  message,
  defaultSlot,
  actionsSlot,
  titleSlot,
  alertClosed
}) => html\`
        <vl-alert
            ?closable=\${closable}
            ?naked=\${naked}
            ?multiline=\${multiline}
            icon=\${icon}
            title=\${title}
            size=\${size}
            type=\${type}
            message=\${message}
            @vl-alert-closed="\${alertClosed}"
            data-cy="alert"
        >
            \${unsafeHTML(titleSlot)}\${unsafeHTML(defaultSlot)}\${unsafeHTML(actionsSlot)}</vl-alert
        >
    \`)`,...g.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`story(alertArgs, ({
  closable,
  icon,
  title,
  size,
  type,
  naked,
  multiline,
  message,
  defaultSlot,
  actionsSlot,
  titleSlot,
  alertClosed
}) => html\`
        <vl-alert
            ?closable=\${closable}
            ?naked=\${naked}
            ?multiline=\${multiline}
            icon=\${icon}
            title=\${title}
            size=\${size}
            type=\${type}
            message=\${message}
            @vl-alert-closed="\${alertClosed}"
            data-cy="alert"
        >
            \${unsafeHTML(titleSlot)}\${unsafeHTML(defaultSlot)}\${unsafeHTML(actionsSlot)}</vl-alert
        >
    \`)`,...$.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`story(alertArgs, ({
  closable,
  icon,
  title,
  size,
  type,
  naked,
  multiline,
  message,
  defaultSlot,
  actionsSlot,
  titleSlot,
  alertClosed
}) => html\`
        <vl-alert
            ?closable=\${closable}
            ?naked=\${naked}
            ?multiline=\${multiline}
            icon=\${icon}
            title=\${title}
            size=\${size}
            type=\${type}
            message=\${message}
            @vl-alert-closed="\${alertClosed}"
            data-cy="alert"
        >
            \${unsafeHTML(titleSlot)}\${unsafeHTML(defaultSlot)}\${unsafeHTML(actionsSlot)}</vl-alert
        >
    \`)`,...y.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`story(alertArgs, ({
  closable,
  icon,
  title,
  size,
  type,
  naked,
  multiline,
  message,
  defaultSlot,
  actionsSlot,
  titleSlot,
  alertClosed
}) => html\`
        <vl-alert
            ?closable=\${closable}
            ?naked=\${naked}
            ?multiline=\${multiline}
            icon=\${icon}
            title=\${title}
            size=\${size}
            type=\${type}
            message=\${message}
            @vl-alert-closed="\${alertClosed}"
            data-cy="alert"
        >
            \${unsafeHTML(titleSlot)}\${unsafeHTML(defaultSlot)}\${unsafeHTML(actionsSlot)}</vl-alert
        >
    \`)`,...S.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`story(alertArgs, ({
  closable,
  icon,
  title,
  size,
  type,
  naked,
  multiline,
  message,
  defaultSlot,
  actionsSlot,
  titleSlot,
  alertClosed
}) => html\`
        <vl-alert
            ?closable=\${closable}
            ?naked=\${naked}
            ?multiline=\${multiline}
            icon=\${icon}
            title=\${title}
            size=\${size}
            type=\${type}
            message=\${message}
            @vl-alert-closed="\${alertClosed}"
            data-cy="alert"
        >
            \${unsafeHTML(titleSlot)}\${unsafeHTML(defaultSlot)}\${unsafeHTML(actionsSlot)}</vl-alert
        >
    \`)`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`story(alertArgs, ({
  closable,
  icon,
  title,
  size,
  type,
  naked,
  multiline,
  message,
  defaultSlot,
  actionsSlot,
  titleSlot,
  alertClosed
}) => html\`
        <vl-alert
            ?closable=\${closable}
            ?naked=\${naked}
            ?multiline=\${multiline}
            icon=\${icon}
            title=\${title}
            size=\${size}
            type=\${type}
            message=\${message}
            @vl-alert-closed="\${alertClosed}"
            data-cy="alert"
        >
            \${unsafeHTML(titleSlot)}\${unsafeHTML(defaultSlot)}\${unsafeHTML(actionsSlot)}</vl-alert
        >
    \`)`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`story(alertArgs, ({
  closable,
  icon,
  title,
  size,
  type,
  naked,
  multiline,
  message,
  defaultSlot,
  actionsSlot,
  titleSlot,
  alertClosed
}) => html\`
        <vl-alert
            ?closable=\${closable}
            ?naked=\${naked}
            ?multiline=\${multiline}
            icon=\${icon}
            title=\${title}
            size=\${size}
            type=\${type}
            message=\${message}
            @vl-alert-closed="\${alertClosed}"
            data-cy="alert"
        >
            \${unsafeHTML(titleSlot)}\${unsafeHTML(defaultSlot)}\${unsafeHTML(actionsSlot)}</vl-alert
        >
    \`)`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`story(alertArgs, ({
  closable,
  icon,
  title,
  size,
  type,
  naked,
  multiline,
  message,
  defaultSlot,
  actionsSlot,
  titleSlot,
  alertClosed
}) => html\`
        <vl-alert
            ?closable=\${closable}
            ?naked=\${naked}
            ?multiline=\${multiline}
            icon=\${icon}
            title=\${title}
            size=\${size}
            type=\${type}
            message=\${message}
            @vl-alert-closed="\${alertClosed}"
            data-cy="alert"
        >
            \${unsafeHTML(titleSlot)}\${unsafeHTML(defaultSlot)}\${unsafeHTML(actionsSlot)}</vl-alert
        >
    \`)`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`story(alertArgs, ({
  closable,
  icon,
  title,
  size,
  type,
  naked,
  multiline,
  message,
  defaultSlot,
  actionsSlot,
  titleSlot,
  alertClosed
}) => html\`
        <vl-alert
            ?closable=\${closable}
            ?naked=\${naked}
            ?multiline=\${multiline}
            icon=\${icon}
            title=\${title}
            size=\${size}
            type=\${type}
            message=\${message}
            @vl-alert-closed="\${alertClosed}"
            data-cy="alert"
        >
            \${unsafeHTML(titleSlot)}\${unsafeHTML(defaultSlot)}\${unsafeHTML(actionsSlot)}</vl-alert
        >
    \`)`,...v.parameters?.docs?.source}}};const ee=["AlertDefault","AlertError","AlertInfo","AlertSuccess","AlertWarning","AlertWithButton","AlertWithTitleSlot","AlertCloseable","AlertNakedError","AlertNakedWarning","AlertNakedSuccess","AlertMultiline"];export{u as AlertCloseable,d as AlertDefault,m as AlertError,p as AlertInfo,v as AlertMultiline,f as AlertNakedError,b as AlertNakedSuccess,h as AlertNakedWarning,g as AlertSuccess,$ as AlertWarning,y as AlertWithButton,S as AlertWithTitleSlot,ee as __namedExportsOrder,J as default};
