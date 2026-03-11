import{Y as a,bQ as L,Z as u,a1 as A,a0 as T,bR as j,U as O,bS as W,W as V,bT as r,bU as i,u as C,j as e,C as l,bk as D,s as B,x as U,r as G,d as _}from"./iframe-BWsn3Pr7.js";import{o as k}from"./unsafe-html-B89ecE4O.js";import"./preload-helper-D9Z9MdNV.js";const n={...V,closable:!1,naked:!1,title:"",icon:"",size:"",type:"",message:"",defaultSlot:"",titleSlot:"",actionsSlot:"",alertClosed:W(L.eventType)},P={...O,closable:{name:"closable",description:"Sluitknop voor de waarschuwing",table:{type:{summary:u.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(n.closable)}}},naked:{name:"naked",description:"Naked variant van de waarschuwing.",table:{type:{summary:u.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(n.naked)}}},title:{name:"title",description:"Titel van de waarschuwing.<br>Bij de naked variant mag de titel alleen met dit attribuut meegegeven worden.",table:{type:{summary:u.STRING},category:a.ATTRIBUTES,defaultValue:{summary:n.title}}},icon:{name:"icon",description:"Icon van de waarschuwing.<br>Het icoon kan gekozen worden uit de lijst op https://overheid.vlaanderen.be/webuniversum/v3/documentation/atoms/vl-ui-icon.",control:{type:T.SELECT},options:Object.values(i),table:{type:{summary:A(Object.values(i))},category:a.ATTRIBUTES,defaultValue:{summary:n.icon}}},message:{name:"message",description:"De message van de waarschuwing.<br>Bij de naked variant mag de message alleen met dit attribuut meegegeven worden.",table:{type:{summary:u.STRING},category:a.ATTRIBUTES,defaultValue:{summary:n.message}}},size:{name:"size",description:"Kleine variant van de waarschuwing.",control:{type:T.SELECT},options:[j.SMALL],table:{type:{summary:`${j.SMALL}`},category:a.ATTRIBUTES,defaultValue:{summary:n.size}}},type:{name:"type",description:"Soort van de waarschuwing, foutmelding, probleemmelding of succesmelding.",control:{type:T.SELECT},options:Object.values(r),table:{type:{summary:A(Object.values(r))},category:a.ATTRIBUTES,defaultValue:{summary:n.type}}},titleSlot:{name:"title",description:"Element dat als titel van het alert getoond wordt.",table:{type:{summary:u.HTML},category:a.SLOTS,defaultValue:{summary:n.titleSlot}}},actionsSlot:{name:"actions",description:"Slot voor actieknoppen",table:{type:{summary:u.HTML},category:a.SLOTS,defaultValue:{summary:n.actionsSlot}}},defaultSlot:{name:"[default]",description:"Element dat als message van het alert getoond wordt.",table:{type:{summary:u.HTML},category:a.SLOTS,defaultValue:{summary:n.defaultSlot}}},alertClosed:{name:L.eventType,description:"Afgevuurd wanneer de alert wordt gesloten.",table:{type:{summary:"-"},category:a.EVENTS}}};function x(o){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...C(),...o.components},{FluxComponentMetaData:v}=t;return v||F("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"alert",children:"Alert"}),`
`,e.jsx(v,{id:"components-block-alert"}),`
`,e.jsx(t.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(t.p,{children:["Gebruik de ",e.jsx(t.code,{children:"alert"})," component om de gebruiker op de hoogte te houden van belangrijke informatie."]}),`
`,e.jsx(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import { VlAlert } from '@domg-wc/components/block';
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<vl-alert></vl-alert>
`})}),`
`,e.jsx(l,{of:c}),`
`,e.jsx(t.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(D,{of:c}),`
`,e.jsx(t.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(t.h3,{id:"error",children:"Error"}),`
`,e.jsx(l,{of:m}),`
`,e.jsx(t.h3,{id:"info",children:"Info"}),`
`,e.jsx(l,{of:p}),`
`,e.jsx(t.h3,{id:"success",children:"Success"}),`
`,e.jsx(l,{of:g}),`
`,e.jsx(t.h3,{id:"warning",children:"Warning"}),`
`,e.jsx(l,{of:f}),`
`,e.jsx(t.h3,{id:"with-with-button",children:"With with button"}),`
`,e.jsx(l,{of:y}),`
`,e.jsx(t.h3,{id:"with-title-slot",children:"With title slot"}),`
`,e.jsx(l,{of:S}),`
`,e.jsx(t.h3,{id:"with-close-button",children:"With close button"}),`
`,e.jsx(l,{of:d}),`
`,e.jsx(t.h3,{id:"naked-error",children:"Naked error"}),`
`,e.jsx(l,{of:h}),`
`,e.jsx(t.h3,{id:"naked-warning",children:"Naked warning"}),`
`,e.jsx(l,{of:$}),`
`,e.jsx(t.h3,{id:"naked-success",children:"Naked success"}),`
`,e.jsx(l,{of:b}),`
`,e.jsx(t.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-alert",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Alert"})}),`
`,e.jsx(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-alert--default",rel:"nofollow",children:"Legacy Storybook - Alert"})}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlAlert.html",rel:"nofollow",children:"Legacy Documentatie - Alert"})}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-alert.html",rel:"nofollow",children:"Legacy Demo - Alert"})})]})}function q(o={}){const{wrapper:t}={...C(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(x,{...o})}):x(o)}function F(o,t){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}G([_]);const Z={id:"components-block-alert",title:"Components - Block/alert",tags:["autodocs"],args:n,argTypes:P,parameters:{docs:{page:q}}},s=B(n,({closable:o,icon:t,title:v,size:M,type:w,naked:N,message:z,defaultSlot:E,actionsSlot:H,titleSlot:R,alertClosed:I})=>U`
        <vl-alert
            ?closable=${o}
            ?naked=${N}
            icon=${t}
            title=${v}
            size=${M}
            type=${w}
            message=${z}
            @vl-alert-closed="${I}"
            data-cy="alert"
        >
            ${k(R)}${k(E)}${k(H)}
        </vl-alert>
    `),c=s.bind({});c.storyName="vl-alert - default";c.args={defaultSlot:"<span>Als u vaststelt dat er foute informatie over u in het bestand van de Centrale voor Kredieten aan Particulieren staat, dan kunt u een rechtzetting aanvragen.</span>"};const m=s.bind({});m.storyName="vl-alert - error";m.args={title:"Opgelet!",type:r.ERROR,icon:i.WARNING,defaultSlot:"<span>U heeft geen rechten om deze actie uit te voeren.</span>"};const p=s.bind({});p.storyName="vl-alert - info";p.args={title:"Info",type:r.INFO,icon:i.INFO_CIRCLE,defaultSlot:"<span>Als u vaststelt dat er foute informatie over u in het bestand van de Centrale voor Kredieten aan Particulieren staat, dan kunt u een rechtzetting aanvragen.</span>"};const g=s.bind({});g.storyName="vl-alert - success";g.args={title:"Gelukt!",type:r.SUCCESS,icon:i.CHECK,defaultSlot:"<span>We hebben uw melding goed ontvangen en nemen deze spoedig in behandeling.</span>"};const f=s.bind({});f.storyName="vl-alert - warning";f.args={title:"Technische storing",type:r.WARNING,icon:i.WARNING,defaultSlot:"<span>Door een technische storing is dit loket tijdelijk niet beschikbaar.</span>"};const y=s.bind({});y.storyName="vl-alert - with button";y.args={actionsSlot:'<vl-button slot="actions">button text</vl-button>',defaultSlot:"<span>Phasellus congue ipsum ut felis auctor, eget maximus justo dapibus. Nam sit amet pulvinar odio. Maecenas rhoncus quam eget neque porttitor, et faucibus nisl elementum.</span>"};const S=s.bind({});S.storyName="vl-alert - with title slot";S.args={titleSlot:'<span slot="title">Titel</span>',defaultSlot:"<span>Phasellus congue ipsum ut felis auctor, eget maximus justo dapibus. Nam sit amet pulvinar odio. Maecenas rhoncus quam eget neque porttitor, et faucibus nisl elementum.</span>"};const d=s.bind({});d.storyName="vl-alert - closeable";d.argTypes={};d.args={closable:!0,defaultSlot:"<span>Phasellus congue ipsum ut felis auctor, eget maximus justo dapibus. Nam sit amet pulvinar odio. Maecenas rhoncus quam eget neque porttitor, et faucibus nisl elementum.</span>"};const h=s.bind({});h.storyName="vl-alert - naked error";h.args={title:"Opgelet!",type:r.ERROR,icon:i.WARNING,naked:!0,message:"U heeft geen rechten om deze actie uit te voeren."};const $=s.bind({});$.storyName="vl-alert - naked warning";$.args={title:"Opgelet!",type:r.WARNING,icon:i.WARNING,naked:!0,message:"U heeft geen rechten om deze actie uit te voeren."};const b=s.bind({});b.storyName="vl-alert - naked success";b.args={title:"Opgelet!",type:r.SUCCESS,icon:i.CHECK,naked:!0,message:"U heeft geen rechten om deze actie uit te voeren."};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`story(alertArgs, ({
  closable,
  icon,
  title,
  size,
  type,
  naked,
  message,
  defaultSlot,
  actionsSlot,
  titleSlot,
  alertClosed
}) => html\`
        <vl-alert
            ?closable=\${closable}
            ?naked=\${naked}
            icon=\${icon}
            title=\${title}
            size=\${size}
            type=\${type}
            message=\${message}
            @vl-alert-closed="\${alertClosed}"
            data-cy="alert"
        >
            \${unsafeHTML(titleSlot)}\${unsafeHTML(defaultSlot)}\${unsafeHTML(actionsSlot)}
        </vl-alert>
    \`)`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`story(alertArgs, ({
  closable,
  icon,
  title,
  size,
  type,
  naked,
  message,
  defaultSlot,
  actionsSlot,
  titleSlot,
  alertClosed
}) => html\`
        <vl-alert
            ?closable=\${closable}
            ?naked=\${naked}
            icon=\${icon}
            title=\${title}
            size=\${size}
            type=\${type}
            message=\${message}
            @vl-alert-closed="\${alertClosed}"
            data-cy="alert"
        >
            \${unsafeHTML(titleSlot)}\${unsafeHTML(defaultSlot)}\${unsafeHTML(actionsSlot)}
        </vl-alert>
    \`)`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`story(alertArgs, ({
  closable,
  icon,
  title,
  size,
  type,
  naked,
  message,
  defaultSlot,
  actionsSlot,
  titleSlot,
  alertClosed
}) => html\`
        <vl-alert
            ?closable=\${closable}
            ?naked=\${naked}
            icon=\${icon}
            title=\${title}
            size=\${size}
            type=\${type}
            message=\${message}
            @vl-alert-closed="\${alertClosed}"
            data-cy="alert"
        >
            \${unsafeHTML(titleSlot)}\${unsafeHTML(defaultSlot)}\${unsafeHTML(actionsSlot)}
        </vl-alert>
    \`)`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`story(alertArgs, ({
  closable,
  icon,
  title,
  size,
  type,
  naked,
  message,
  defaultSlot,
  actionsSlot,
  titleSlot,
  alertClosed
}) => html\`
        <vl-alert
            ?closable=\${closable}
            ?naked=\${naked}
            icon=\${icon}
            title=\${title}
            size=\${size}
            type=\${type}
            message=\${message}
            @vl-alert-closed="\${alertClosed}"
            data-cy="alert"
        >
            \${unsafeHTML(titleSlot)}\${unsafeHTML(defaultSlot)}\${unsafeHTML(actionsSlot)}
        </vl-alert>
    \`)`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`story(alertArgs, ({
  closable,
  icon,
  title,
  size,
  type,
  naked,
  message,
  defaultSlot,
  actionsSlot,
  titleSlot,
  alertClosed
}) => html\`
        <vl-alert
            ?closable=\${closable}
            ?naked=\${naked}
            icon=\${icon}
            title=\${title}
            size=\${size}
            type=\${type}
            message=\${message}
            @vl-alert-closed="\${alertClosed}"
            data-cy="alert"
        >
            \${unsafeHTML(titleSlot)}\${unsafeHTML(defaultSlot)}\${unsafeHTML(actionsSlot)}
        </vl-alert>
    \`)`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`story(alertArgs, ({
  closable,
  icon,
  title,
  size,
  type,
  naked,
  message,
  defaultSlot,
  actionsSlot,
  titleSlot,
  alertClosed
}) => html\`
        <vl-alert
            ?closable=\${closable}
            ?naked=\${naked}
            icon=\${icon}
            title=\${title}
            size=\${size}
            type=\${type}
            message=\${message}
            @vl-alert-closed="\${alertClosed}"
            data-cy="alert"
        >
            \${unsafeHTML(titleSlot)}\${unsafeHTML(defaultSlot)}\${unsafeHTML(actionsSlot)}
        </vl-alert>
    \`)`,...y.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`story(alertArgs, ({
  closable,
  icon,
  title,
  size,
  type,
  naked,
  message,
  defaultSlot,
  actionsSlot,
  titleSlot,
  alertClosed
}) => html\`
        <vl-alert
            ?closable=\${closable}
            ?naked=\${naked}
            icon=\${icon}
            title=\${title}
            size=\${size}
            type=\${type}
            message=\${message}
            @vl-alert-closed="\${alertClosed}"
            data-cy="alert"
        >
            \${unsafeHTML(titleSlot)}\${unsafeHTML(defaultSlot)}\${unsafeHTML(actionsSlot)}
        </vl-alert>
    \`)`,...S.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`story(alertArgs, ({
  closable,
  icon,
  title,
  size,
  type,
  naked,
  message,
  defaultSlot,
  actionsSlot,
  titleSlot,
  alertClosed
}) => html\`
        <vl-alert
            ?closable=\${closable}
            ?naked=\${naked}
            icon=\${icon}
            title=\${title}
            size=\${size}
            type=\${type}
            message=\${message}
            @vl-alert-closed="\${alertClosed}"
            data-cy="alert"
        >
            \${unsafeHTML(titleSlot)}\${unsafeHTML(defaultSlot)}\${unsafeHTML(actionsSlot)}
        </vl-alert>
    \`)`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`story(alertArgs, ({
  closable,
  icon,
  title,
  size,
  type,
  naked,
  message,
  defaultSlot,
  actionsSlot,
  titleSlot,
  alertClosed
}) => html\`
        <vl-alert
            ?closable=\${closable}
            ?naked=\${naked}
            icon=\${icon}
            title=\${title}
            size=\${size}
            type=\${type}
            message=\${message}
            @vl-alert-closed="\${alertClosed}"
            data-cy="alert"
        >
            \${unsafeHTML(titleSlot)}\${unsafeHTML(defaultSlot)}\${unsafeHTML(actionsSlot)}
        </vl-alert>
    \`)`,...h.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`story(alertArgs, ({
  closable,
  icon,
  title,
  size,
  type,
  naked,
  message,
  defaultSlot,
  actionsSlot,
  titleSlot,
  alertClosed
}) => html\`
        <vl-alert
            ?closable=\${closable}
            ?naked=\${naked}
            icon=\${icon}
            title=\${title}
            size=\${size}
            type=\${type}
            message=\${message}
            @vl-alert-closed="\${alertClosed}"
            data-cy="alert"
        >
            \${unsafeHTML(titleSlot)}\${unsafeHTML(defaultSlot)}\${unsafeHTML(actionsSlot)}
        </vl-alert>
    \`)`,...$.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`story(alertArgs, ({
  closable,
  icon,
  title,
  size,
  type,
  naked,
  message,
  defaultSlot,
  actionsSlot,
  titleSlot,
  alertClosed
}) => html\`
        <vl-alert
            ?closable=\${closable}
            ?naked=\${naked}
            icon=\${icon}
            title=\${title}
            size=\${size}
            type=\${type}
            message=\${message}
            @vl-alert-closed="\${alertClosed}"
            data-cy="alert"
        >
            \${unsafeHTML(titleSlot)}\${unsafeHTML(defaultSlot)}\${unsafeHTML(actionsSlot)}
        </vl-alert>
    \`)`,...b.parameters?.docs?.source}}};const Q=["AlertDefault","AlertError","AlertInfo","AlertSuccess","AlertWarning","AlertWithButton","AlertWithTitleSlot","AlertCloseable","AlertNakedError","AlertNakedWarning","AlertNakedSuccess"];export{d as AlertCloseable,c as AlertDefault,m as AlertError,p as AlertInfo,h as AlertNakedError,b as AlertNakedSuccess,$ as AlertNakedWarning,g as AlertSuccess,f as AlertWarning,y as AlertWithButton,S as AlertWithTitleSlot,Q as __namedExportsOrder,Z as default};
