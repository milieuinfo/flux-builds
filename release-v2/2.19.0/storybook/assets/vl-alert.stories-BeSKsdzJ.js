import{Z as l,bP as E,_ as d,bQ as w,a2 as A,a1 as T,bR as R,W as U,bS as _,X as F,bT as s,bU as o,u as N,j as e,C as a,b8 as q,s as P,x as K,r as X,d as Z}from"./iframe-CY-ZM549.js";import{o as z}from"./unsafe-html-CLNrWVY9.js";import"./preload-helper-D9Z9MdNV.js";const t={...F,closable:!1,naked:!1,multiline:!1,title:"",icon:"",size:"",type:"",message:"",alertRole:w.ALERT,defaultSlot:"",titleSlot:"",actionsSlot:"",alertClosed:_(E.eventType)},Y={...U,closable:{name:"closable",description:"Sluitknop voor de waarschuwing",table:{type:{summary:d.BOOLEAN},category:l.ATTRIBUTES,defaultValue:{summary:String(t.closable)}}},naked:{name:"naked",description:"Naked variant van de waarschuwing.",table:{type:{summary:d.BOOLEAN},category:l.ATTRIBUTES,defaultValue:{summary:String(t.naked)}}},multiline:{name:"multiline",description:"Behoudt nieuwe regels in de boodschap van de waarschuwing.",table:{type:{summary:d.BOOLEAN},category:l.ATTRIBUTES,defaultValue:{summary:String(t.multiline)}}},title:{name:"title",description:"Titel van de waarschuwing.<br>Bij de naked variant mag de titel alleen met dit attribuut meegegeven worden.",table:{type:{summary:d.STRING},category:l.ATTRIBUTES,defaultValue:{summary:t.title}}},icon:{name:"icon",description:"Icon van de waarschuwing.<br>Het icoon kan gekozen worden uit de lijst op https://www.vlaanderen.be/vlaanderen-design-system/componenten/icon.",control:{type:T.SELECT},options:Object.values(o),table:{type:{summary:A(Object.values(o))},category:l.ATTRIBUTES,defaultValue:{summary:t.icon}}},message:{name:"message",description:"De message van de waarschuwing.<br>Bij de naked variant mag de message alleen met dit attribuut meegegeven worden.<br>Werkt niet in combinatie met het default slot.",table:{type:{summary:d.STRING},category:l.ATTRIBUTES,defaultValue:{summary:t.message}}},size:{name:"size",description:"Kleine variant van de waarschuwing.",control:{type:T.SELECT},options:[R.SMALL],table:{type:{summary:`${R.SMALL}`},category:l.ATTRIBUTES,defaultValue:{summary:t.size}}},type:{name:"type",description:"Soort van de waarschuwing, foutmelding, probleemmelding of succesmelding.",control:{type:T.SELECT},options:Object.values(s),table:{type:{summary:A(Object.values(s))},category:l.ATTRIBUTES,defaultValue:{summary:t.type}}},alertRole:{name:"alert-role",description:"ARIA rol van de waarschuwing.<br>`alert` voor dynamisch verschijnende beknopte meldingen, `alertdialog` voor meldingen die een actie vereisen, `no-role` voor meldingen die al bij het laden van de pagina zichtbaar zijn.<br>Onbekende waarden vallen terug op `alert`.",control:{type:T.SELECT},options:Object.values(w),table:{type:{summary:A(Object.values(w))},category:l.ATTRIBUTES,defaultValue:{summary:t.alertRole}}},titleSlot:{name:"title",description:"Element dat als titel van het alert getoond wordt.",table:{type:{summary:d.HTML},category:l.SLOTS,defaultValue:{summary:t.titleSlot}}},actionsSlot:{name:"actions",description:"Slot voor actieknoppen",table:{type:{summary:d.HTML},category:l.SLOTS,defaultValue:{summary:t.actionsSlot}}},defaultSlot:{name:"[default]",description:"Element dat als message van het alert getoond wordt.",table:{type:{summary:d.HTML},category:l.SLOTS,defaultValue:{summary:t.defaultSlot}}},alertClosed:{name:E.eventType,description:"Afgevuurd wanneer de alert wordt gesloten.",table:{type:{summary:"-"},category:l.EVENTS}}};function L(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...N(),...i.components},{FluxAlert:k,FluxComponentMetaData:x}=n;return k||C("FluxAlert"),x||C("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"alert",children:"Alert"}),`
`,e.jsx(x,{id:"components-block-alert"}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(n.p,{children:["Gebruik de ",e.jsx(n.code,{children:"alert"})," component om de gebruiker op de hoogte te houden van belangrijke informatie."]}),`
`,e.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { VlAlert } from '@domg-wc/components/block';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-alert></vl-alert>
`})}),`
`,e.jsx(a,{of:c}),`
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(q,{of:c}),`
`,e.jsx(n.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(n.h3,{id:"error",children:"Error"}),`
`,e.jsx(a,{of:m}),`
`,e.jsx(n.h3,{id:"info",children:"Info"}),`
`,e.jsx(a,{of:g}),`
`,e.jsx(n.h3,{id:"success",children:"Success"}),`
`,e.jsx(a,{of:p}),`
`,e.jsx(n.h3,{id:"warning",children:"Warning"}),`
`,e.jsx(a,{of:h}),`
`,e.jsx(n.h3,{id:"with-button",children:"With button"}),`
`,e.jsx(a,{of:f}),`
`,e.jsx(n.h3,{id:"with-title-slot",children:"With title slot"}),`
`,e.jsx(a,{of:b}),`
`,e.jsx(n.h3,{id:"with-close-button",children:"With close button"}),`
`,e.jsx(a,{of:u}),`
`,e.jsx(n.h3,{id:"naked-error",children:"Naked error"}),`
`,e.jsx(a,{of:v}),`
`,e.jsx(n.h3,{id:"naked-warning",children:"Naked warning"}),`
`,e.jsx(a,{of:$}),`
`,e.jsx(n.h3,{id:"naked-success",children:"Naked success"}),`
`,e.jsx(a,{of:y}),`
`,e.jsx(n.h3,{id:"multiline",children:"Multiline"}),`
`,e.jsxs(n.p,{children:["Stelt ",e.jsx(n.code,{children:"white-space: pre-line;"})," in voor de boodschap zodat nieuwe regels (newline karakters) in rekening worden gebracht."]}),`
`,e.jsx(k,{type:"warning",children:`
Let op: bij het gebruik van slot content moet de tekst direct na de opening-tag starten, zonder newline.
Een newline na de opening-tag wordt door \`pre-line\` als witruimte weergegeven.
`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Correct -->
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
`,e.jsx(a,{of:S}),`
`,e.jsx(n.h2,{id:"toegankelijkheid",children:"Toegankelijkheid"}),`
`,e.jsx(n.h3,{id:"draag-de-betekenis-niet-enkel-via-kleur-en-icoon-over",children:"Draag de betekenis niet enkel via kleur en icoon over"}),`
`,e.jsxs(n.p,{children:["Het ",e.jsx(n.code,{children:"type"})," van de melding wordt visueel vertaald naar een kleur en - via het ",e.jsx(n.code,{children:"icon"}),` attribuut - naar een icoon. Die
signalen bereiken gebruikers van een schermlezer niet en vallen weg in hoog contrast. Zet de aard van de melding
daarom ook in de tekst, bijvoorbeeld met een titel als "Opgelet!" of "Gelukt!", zodat de boodschap zonder kleur en
icoon volledig blijft.`]}),`
`,e.jsx(n.h3,{id:"kies-de-rol-die-bij-de-context-past",children:"Kies de rol die bij de context past"}),`
`,e.jsxs(n.p,{children:["Een melding krijgt niet in elke context dezelfde ARIA rol. Stem die af met het ",e.jsx(n.code,{children:"alert-role"}),` attribuut, volgens de
richtlijnen voor `,e.jsx(n.a,{href:"https://www.w3.org/TR/wai-aria-1.2/#alert",rel:"nofollow",children:e.jsx(n.code,{children:"alert"})}),` en
`,e.jsx(n.a,{href:"https://www.w3.org/TR/wai-aria-1.2/#alertdialog",rel:"nofollow",children:e.jsx(n.code,{children:"alertdialog"})}),"."]}),`
`,e.jsxs("table",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Waarde"}),e.jsx("td",{children:"Wanneer"}),e.jsx("td",{children:"Gedrag bij een schermlezer"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(n.code,{children:"alert"})," (default)"]}),e.jsx("td",{children:"De melding verschijnt dynamisch na een actie van de gebruiker, is beknopt en vraagt zelf geen actie."}),e.jsx("td",{children:"De melding wordt voorgelezen zodra ze verschijnt, zonder dat de focus verspringt."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"alertdialog"})}),e.jsxs("td",{children:["De melding verschijnt dynamisch en vereist een actie van de gebruiker, typisch via een knop in het ",e.jsx(n.code,{children:"actions"})," slot."]}),e.jsx("td",{children:"De melding wordt aangekondigd als een dialoog met een naam en een beschrijving. De afnemer verplaatst zelf de focus naar de melding, zie hieronder."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"no-role"})}),e.jsx("td",{children:"De melding staat al op de pagina bij het laden, bijvoorbeeld een permanente info- of storingsmelding."}),e.jsx("td",{children:"Geen live region: de melding wordt gewoon voorgelezen op haar plaats in de leesvolgorde."})]})]}),`
`,e.jsxs(n.p,{children:["Hou meldingen met ",e.jsx(n.code,{children:'alert-role="alert"'}),` beknopt: een schermlezer leest de volledige inhoud in één keer voor en
onderbreekt daarmee waar de gebruiker mee bezig was.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- melding die al bij het laden van de pagina zichtbaar is -->
<vl-alert alert-role="no-role" type="info" icon="info-circle" title="Onderhoud">
    <span>Op zaterdag is dit loket beperkt beschikbaar.</span>
</vl-alert>
`})}),`
`,e.jsxs(n.h3,{id:"focus-bij-alertdialog",children:["Focus bij ",e.jsx(n.code,{children:"alertdialog"})]}),`
`,e.jsxs(n.p,{children:["Een ",e.jsx(n.code,{children:"alertdialog"}),` hoort de focus te krijgen zodra hij verschijnt, anders mist een toetsenbord- of schermlezergebruiker
de melding en de bijhorende actie. De component doet dat bewust niet automatisch: enkel de afnemer weet op welk moment
de melding verschijnt en welk element de focus moet krijgen.`]}),`
`,e.jsx(k,{type:"warning",children:`
Bij alert-role="alertdialog" moet de afnemer zelf de focus naar de melding of naar de actieknop erin verplaatsen.
`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const alert = document.querySelector('vl-alert');
alert.focus(); // verplaatst de focus naar de melding zelf
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"focus()"}),` op de melding legt de focus op de dialoog, waardoor een schermlezer de rol, de naam en de beschrijving
aankondigt. Wil je de gebruiker meteen bij de actie zetten, focus dan de knop in het `,e.jsx(n.code,{children:"actions"}),` slot; de melding wordt
dan aangekondigd als context van die knop.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const alert = document.querySelector('vl-alert');
alert.querySelector('vl-button')?.focus();
`})}),`
`,e.jsxs(n.p,{children:["Bij deze rol koppelt de component de titel als naam (",e.jsx(n.code,{children:"aria-labelledby"}),`) en de boodschap als beschrijving
(`,e.jsx(n.code,{children:"aria-describedby"}),`) aan de melding, maar enkel wanneer die effectief inhoud hebben: een verwijzing naar een leeg
element levert immers geen naam of beschrijving op. Voorzie daarom altijd een titel via het `,e.jsx(n.code,{children:"title"}),` attribuut of het
`,e.jsx(n.code,{children:"title"})," slot, want zonder titel heeft de ",e.jsx(n.code,{children:"alertdialog"}),` geen toegankelijke naam. Een controle met axe meldt dat als
`,e.jsx(n.code,{children:"aria-dialog-name"}),"."]}),`
`,e.jsx(a,{of:j}),`
`,e.jsx(n.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(n.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/componenten/alert",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Alert"})})]})}function Q(i={}){const{wrapper:n}={...N(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(L,{...i})}):L(i)}function C(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}X([Z]);const te={id:"components-block-alert",title:"Components - Block/alert",tags:["autodocs"],args:t,argTypes:Y,parameters:{docs:{page:Q}}},r=P(t,({closable:i,icon:n,title:k,size:x,type:M,naked:H,multiline:O,message:I,alertRole:W,defaultSlot:D,actionsSlot:B,titleSlot:V,alertClosed:G})=>K`
        <vl-alert
            ?closable=${i}
            ?naked=${H}
            ?multiline=${O}
            icon=${n}
            title=${k}
            size=${x}
            type=${M}
            message=${I}
            alert-role=${W}
            @vl-alert-closed="${G}"
            data-cy="alert"
        >
            ${z(V)}${z(D)}${z(B)}</vl-alert
        >
    `),c=r.bind({});c.storyName="vl-alert - default";c.args={defaultSlot:"<span>Als u vaststelt dat er foute informatie over u in het bestand van de Centrale voor Kredieten aan Particulieren staat, dan kunt u een rechtzetting aanvragen.</span>"};const m=r.bind({});m.storyName="vl-alert - error";m.args={title:"Opgelet!",type:s.ERROR,icon:o.WARNING,defaultSlot:"<span>U heeft geen rechten om deze actie uit te voeren.</span>"};const g=r.bind({});g.storyName="vl-alert - info";g.args={title:"Info",type:s.INFO,icon:o.INFO_CIRCLE,defaultSlot:"<span>Als u vaststelt dat er foute informatie over u in het bestand van de Centrale voor Kredieten aan Particulieren staat, dan kunt u een rechtzetting aanvragen.</span>"};const p=r.bind({});p.storyName="vl-alert - success";p.args={title:"Gelukt!",type:s.SUCCESS,icon:o.CHECK,defaultSlot:"<span>We hebben uw melding goed ontvangen en nemen deze spoedig in behandeling.</span>"};const h=r.bind({});h.storyName="vl-alert - warning";h.args={title:"Technische storing",type:s.WARNING,icon:o.WARNING,defaultSlot:"<span>Door een technische storing is dit loket tijdelijk niet beschikbaar.</span>"};const f=r.bind({});f.storyName="vl-alert - with button";f.args={actionsSlot:'<vl-button slot="actions">button text</vl-button>',defaultSlot:"<span>Phasellus congue ipsum ut felis auctor, eget maximus justo dapibus. Nam sit amet pulvinar odio. Maecenas rhoncus quam eget neque porttitor, et faucibus nisl elementum.</span>"};const b=r.bind({});b.storyName="vl-alert - with title slot";b.args={titleSlot:'<span slot="title">Titel</span>',defaultSlot:"<span>Phasellus congue ipsum ut felis auctor, eget maximus justo dapibus. Nam sit amet pulvinar odio. Maecenas rhoncus quam eget neque porttitor, et faucibus nisl elementum.</span>"};const u=r.bind({});u.storyName="vl-alert - closeable";u.argTypes={};u.args={closable:!0,defaultSlot:"<span>Phasellus congue ipsum ut felis auctor, eget maximus justo dapibus. Nam sit amet pulvinar odio. Maecenas rhoncus quam eget neque porttitor, et faucibus nisl elementum.</span>"};const v=r.bind({});v.storyName="vl-alert - naked error";v.args={title:"Opgelet!",type:s.ERROR,icon:o.WARNING,naked:!0,message:"U heeft geen rechten om deze actie uit te voeren."};const $=r.bind({});$.storyName="vl-alert - naked warning";$.args={title:"Opgelet!",type:s.WARNING,icon:o.WARNING,naked:!0,message:"U heeft geen rechten om deze actie uit te voeren."};const y=r.bind({});y.storyName="vl-alert - naked success";y.args={title:"Opgelet!",type:s.SUCCESS,icon:o.CHECK,naked:!0,message:"U heeft geen rechten om deze actie uit te voeren."};const S=r.bind({});S.storyName="vl-alert - multiline";S.args={title:"Info",type:s.INFO,icon:o.INFO_CIRCLE,multiline:!0};const j=r.bind({});j.storyName="vl-alert - alertdialog";j.args={title:"Uw sessie verloopt",type:s.WARNING,icon:o.WARNING,alertRole:w.ALERT_DIALOG,defaultSlot:"<span>Over 2 minuten wordt u automatisch afgemeld. Wilt u aangemeld blijven?</span>",actionsSlot:'<vl-button slot="actions">Aangemeld blijven</vl-button>'};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`story(alertArgs, ({
  closable,
  icon,
  title,
  size,
  type,
  naked,
  multiline,
  message,
  alertRole,
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
            alert-role=\${alertRole}
            @vl-alert-closed="\${alertClosed}"
            data-cy="alert"
        >
            \${unsafeHTML(titleSlot)}\${unsafeHTML(defaultSlot)}\${unsafeHTML(actionsSlot)}</vl-alert
        >
    \`)`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`story(alertArgs, ({
  closable,
  icon,
  title,
  size,
  type,
  naked,
  multiline,
  message,
  alertRole,
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
            alert-role=\${alertRole}
            @vl-alert-closed="\${alertClosed}"
            data-cy="alert"
        >
            \${unsafeHTML(titleSlot)}\${unsafeHTML(defaultSlot)}\${unsafeHTML(actionsSlot)}</vl-alert
        >
    \`)`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`story(alertArgs, ({
  closable,
  icon,
  title,
  size,
  type,
  naked,
  multiline,
  message,
  alertRole,
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
            alert-role=\${alertRole}
            @vl-alert-closed="\${alertClosed}"
            data-cy="alert"
        >
            \${unsafeHTML(titleSlot)}\${unsafeHTML(defaultSlot)}\${unsafeHTML(actionsSlot)}</vl-alert
        >
    \`)`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`story(alertArgs, ({
  closable,
  icon,
  title,
  size,
  type,
  naked,
  multiline,
  message,
  alertRole,
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
            alert-role=\${alertRole}
            @vl-alert-closed="\${alertClosed}"
            data-cy="alert"
        >
            \${unsafeHTML(titleSlot)}\${unsafeHTML(defaultSlot)}\${unsafeHTML(actionsSlot)}</vl-alert
        >
    \`)`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`story(alertArgs, ({
  closable,
  icon,
  title,
  size,
  type,
  naked,
  multiline,
  message,
  alertRole,
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
            alert-role=\${alertRole}
            @vl-alert-closed="\${alertClosed}"
            data-cy="alert"
        >
            \${unsafeHTML(titleSlot)}\${unsafeHTML(defaultSlot)}\${unsafeHTML(actionsSlot)}</vl-alert
        >
    \`)`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`story(alertArgs, ({
  closable,
  icon,
  title,
  size,
  type,
  naked,
  multiline,
  message,
  alertRole,
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
            alert-role=\${alertRole}
            @vl-alert-closed="\${alertClosed}"
            data-cy="alert"
        >
            \${unsafeHTML(titleSlot)}\${unsafeHTML(defaultSlot)}\${unsafeHTML(actionsSlot)}</vl-alert
        >
    \`)`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`story(alertArgs, ({
  closable,
  icon,
  title,
  size,
  type,
  naked,
  multiline,
  message,
  alertRole,
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
            alert-role=\${alertRole}
            @vl-alert-closed="\${alertClosed}"
            data-cy="alert"
        >
            \${unsafeHTML(titleSlot)}\${unsafeHTML(defaultSlot)}\${unsafeHTML(actionsSlot)}</vl-alert
        >
    \`)`,...b.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`story(alertArgs, ({
  closable,
  icon,
  title,
  size,
  type,
  naked,
  multiline,
  message,
  alertRole,
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
            alert-role=\${alertRole}
            @vl-alert-closed="\${alertClosed}"
            data-cy="alert"
        >
            \${unsafeHTML(titleSlot)}\${unsafeHTML(defaultSlot)}\${unsafeHTML(actionsSlot)}</vl-alert
        >
    \`)`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`story(alertArgs, ({
  closable,
  icon,
  title,
  size,
  type,
  naked,
  multiline,
  message,
  alertRole,
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
            alert-role=\${alertRole}
            @vl-alert-closed="\${alertClosed}"
            data-cy="alert"
        >
            \${unsafeHTML(titleSlot)}\${unsafeHTML(defaultSlot)}\${unsafeHTML(actionsSlot)}</vl-alert
        >
    \`)`,...v.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`story(alertArgs, ({
  closable,
  icon,
  title,
  size,
  type,
  naked,
  multiline,
  message,
  alertRole,
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
            alert-role=\${alertRole}
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
  alertRole,
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
            alert-role=\${alertRole}
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
  alertRole,
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
            alert-role=\${alertRole}
            @vl-alert-closed="\${alertClosed}"
            data-cy="alert"
        >
            \${unsafeHTML(titleSlot)}\${unsafeHTML(defaultSlot)}\${unsafeHTML(actionsSlot)}</vl-alert
        >
    \`)`,...S.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`story(alertArgs, ({
  closable,
  icon,
  title,
  size,
  type,
  naked,
  multiline,
  message,
  alertRole,
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
            alert-role=\${alertRole}
            @vl-alert-closed="\${alertClosed}"
            data-cy="alert"
        >
            \${unsafeHTML(titleSlot)}\${unsafeHTML(defaultSlot)}\${unsafeHTML(actionsSlot)}</vl-alert
        >
    \`)`,...j.parameters?.docs?.source}}};const le=["AlertDefault","AlertError","AlertInfo","AlertSuccess","AlertWarning","AlertWithButton","AlertWithTitleSlot","AlertCloseable","AlertNakedError","AlertNakedWarning","AlertNakedSuccess","AlertMultiline","AlertAlertDialog"];export{j as AlertAlertDialog,u as AlertCloseable,c as AlertDefault,m as AlertError,g as AlertInfo,S as AlertMultiline,v as AlertNakedError,y as AlertNakedSuccess,$ as AlertNakedWarning,p as AlertSuccess,h as AlertWarning,f as AlertWithButton,b as AlertWithTitleSlot,le as __namedExportsOrder,te as default};
