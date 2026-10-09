import{Z as i,_ as l,W as j,ce as x,X as b,u as h,j as n,C as c,b7 as w,s as m,b as u,r as y,d as k}from"./iframe-CsVpDM3d.js";import"./preload-helper-PPVm8Dsz.js";const a={...b,...x,defaultSlot:""},S={...j,for:{name:"for",description:"De id van het input element waarvoor de message getoond moet worden.",table:{category:i.ATTRIBUTES,type:{summary:l.STRING},defaultValue:{summary:String(a.for)}}},state:{name:"state",description:'De `ValidityState`-sleutel waarvoor de message getoond moet worden. Gebruik `state="valid"` voor een success-boodschap (groen) die automatisch verschijnt zodra het veld geldig is na een eerste validatie.',table:{category:i.ATTRIBUTES,type:{summary:"ValidityState"},defaultValue:{summary:String(a.state)}}},variant:{name:"variant",description:'De visuele stijl van de message: `error` (default), `success` of `annotation`. Gebruik `annotation` voor een altijd zichtbare, informatieve tekst. De success-stijl wordt ook automatisch toegepast bij `state="valid"`.',control:{type:"select"},options:["error","success","annotation"],table:{category:i.ATTRIBUTES,type:{summary:"error | success | annotation"},defaultValue:{summary:String(a.variant)}}},show:{name:"show",description:"Duidt aan of de message getoond moet worden.<br>Dit kan gebruikt worden om de message manueel te tonen of te verbergen.",table:{category:i.ATTRIBUTES,type:{summary:l.BOOLEAN},defaultValue:{summary:String(a.show)}}},preLine:{name:"preLine",description:"Duidt aan of de nieuwe lijnen (`\n`) in de message behouden worden.",table:{category:i.ATTRIBUTES,type:{summary:l.BOOLEAN},defaultValue:{summary:String(a.preLine)}}},defaultSlot:{name:"[default]",description:"De inhoud van de message.",table:{type:{summary:l.HTML},category:i.SLOTS,defaultValue:{summary:a.defaultSlot}}}};function g(s){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...h(),...s.components},{FluxComponentMetaData:d}=e;return d||M("FluxComponentMetaData"),n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"form-message",children:"Form Message"}),`
`,n.jsx(d,{id:"components-form-form-message"}),`
`,n.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,n.jsxs(e.p,{children:["Gebruik de ",n.jsx(e.code,{children:"form-message"})," component om een boodschap af te beelden voor een input veld.",n.jsx("br",{}),`
Zie het `,n.jsx(e.a,{href:"/docs/patronen-formulier-demo--documentatie",children:"form demo"})," voorbeeld voor het gebruik binnen een form."]}),`
`,n.jsxs(e.p,{children:["Gebruik ",n.jsx(e.code,{children:"vl-form-message"}),` zodra een boodschap aan een form-control gekoppeld is: de component werkt samen met de
validatie-lifecycle van de control (tonen/verbergen en `,n.jsx(e.code,{children:"aria-description"}),")."]}),`
`,n.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`import { VlFormMessageComponent } from '@domg-wc/components/form';
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<vl-form-message></vl-form-message>
`})}),`
`,n.jsx(c,{of:o}),`
`,n.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,n.jsx(w,{of:o}),`
`,n.jsx(e.h2,{id:"gebruik",children:"Gebruik"}),`
`,n.jsx(e.h3,{id:"volgorde",children:"Volgorde"}),`
`,n.jsxs(e.p,{children:[`We raden aan 1 form message per validatie te tonen. Als er meerdere validaties zijn, toon de belangrijkste eerst.
De volgorde waarin de form messages getoond worden volgt dezelfde volgorde van `,n.jsx(e.code,{children:"vl-form-message"}),` componenten in
de DOM. Een voorbeeld hiervan kan je vinden in onze `,n.jsx(e.a,{href:"/docs/patronen-formulier-demo--documentatie",children:"form demo"}),"."]}),`
`,n.jsx(e.h3,{id:"varianten",children:"Varianten"}),`
`,n.jsxs(e.p,{children:["Met het ",n.jsx(e.code,{children:"variant"})," attribuut bepaal je de visuele stijl van de message: ",n.jsx(e.code,{children:"error"})," (default, rood), ",n.jsx(e.code,{children:"success"}),` (groen) of
`,n.jsx(e.code,{children:"annotation"})," (grijs). Bestaande markup zonder ",n.jsx(e.code,{children:"variant"})," blijft de error-stijl tonen. Een ",n.jsx(e.code,{children:'variant="annotation"'}),` is een
altijd zichtbare, informatieve tekst.`]}),`
`,n.jsxs(e.p,{children:["De success-stijl wordt daarnaast ook automatisch toegepast bij ",n.jsx(e.code,{children:'state="valid"'}),`, zodat een auto-success boodschap geen
expliciete `,n.jsx(e.code,{children:"variant"})," nodig heeft (zie ",n.jsx(e.a,{href:"#success",children:"Success"}),")."]}),`
`,n.jsx(c,{of:r}),`
`,n.jsx(c,{of:t}),`
`,n.jsx(e.h3,{id:"beschrijving-koppelen-met-describedby",children:"Beschrijving koppelen met describedby"}),`
`,n.jsxs(e.p,{children:["Een ",n.jsx(e.code,{children:'variant="annotation"'}),` staat visueel bij het veld, maar is daarmee nog niet aan het veld gekoppeld voor gebruikers
van een screenreader. Geef de message een `,n.jsx(e.code,{children:"id"})," en verwijs ernaar met het ",n.jsx(e.code,{children:"describedby"}),` attribuut van de form-control.
De tekst wordt dan voorgelezen wanneer het veld de focus krijgt.`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<vl-form-label for="naam" label="Naam"></vl-form-label>
<vl-input-field id="naam" name="naam" required describedby="naam-annotation"></vl-input-field>
<vl-form-message variant="annotation" id="naam-annotation">Vul hier je achternaam in.</vl-form-message>
<vl-form-message for="naam" state="valueMissing">Gelieve een naam in te vullen.</vl-form-message>
`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["De form-control neemt de tekst van de message over en koppelt die via ",n.jsx(e.code,{children:"aria-describedby"}),` aan het veld. Latere
tekstwijzigingen van de message worden gevolgd.`]}),`
`,n.jsx(e.li,{children:"De message zelf blijft ongewijzigd en is dus ook los van het veld leesbaar voor een screenreader."}),`
`,n.jsx(e.li,{children:"Is er een fout- of succesboodschap actief, dan wordt die samen met de beschrijving voorgelezen."}),`
`,n.jsxs(e.li,{children:["De annotation heeft geen ",n.jsx(e.code,{children:"for"})," of ",n.jsx(e.code,{children:"state"})," nodig: ze blijft altijd zichtbaar en volgt de validatie-lifecycle niet."]}),`
`]}),`
`,n.jsxs(e.p,{children:["Het ",n.jsx(e.code,{children:"describedby"})," attribuut kan naar elk element met een ",n.jsx(e.code,{children:"id"})," verwijzen, niet enkel naar een ",n.jsx(e.code,{children:"vl-form-message"}),`. Meer
uitleg en een voorbeeld per component vind je in de documentatie van de form-control zelf, bijvoorbeeld
`,n.jsx(e.a,{href:"/docs/components-form-input-field--documentatie",children:"input-field"}),"."]}),`
`,n.jsx(e.h3,{id:"success",children:"Success"}),`
`,n.jsxs(e.p,{children:["Plaats een ",n.jsx(e.code,{children:"vl-form-message"})," met ",n.jsx(e.code,{children:'state="valid"'}),` bij het veld om een success-boodschap automatisch te laten verschijnen
zodra het veld valid is na een eerste validatie. De aanwezigheid van die boodschap is voldoende - er is geen extra
attribuut op de form-control nodig, en de groene success-stijl wordt automatisch toegepast. De boodschap volgt dezelfde
lifecycle als een foutmelding: ze verschijnt zodra het veld - na een eerdere foutmelding - correct wordt ingevuld, en
verdwijnt opnieuw zodra het veld terug invalid is.`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<vl-input-field id="naam" name="naam" required></vl-input-field>
<vl-form-message for="naam" state="valueMissing">Gelieve een naam in te vullen.</vl-form-message>
<vl-form-message for="naam" state="valid">Dit veld is correct ingevuld.</vl-form-message>
`})}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[`Wil je een boodschap los van de validatie-lifecycle manueel in de success-stijl tonen, gebruik dan
`,n.jsx(e.code,{children:'variant="success"'}),`. Wil je de form-control zelf in een success-stijl tonen (zonder boodschap), gebruik dan het
`,n.jsx(e.code,{children:"success"})," attribuut op de form-control."]}),`
`]}),`
`,n.jsx(e.h3,{id:"foutmeldingen",children:"Foutmeldingen"}),`
`,n.jsx(e.p,{children:`Bij het instellen van een foutmelding is het belangrijk om suggesties mee te geven over hoe de foute invoer kan worden
rechtgezet. Een goede foutmelding beschrijft niet enkel wat er fout is, maar geeft de gebruiker ook duidelijke aanwijzingen
om het probleem op te lossen.`}),`
`,n.jsx(e.h2,{id:"validatie",children:"Validatie"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["Meer info over validatie binnen onze form componenten vind je hier: ",n.jsx(e.a,{href:"/docs/patronen-formulier-validatie--documentatie",children:"Form - Validatie"})]}),`
`]}),`
`,n.jsxs(e.p,{children:["De ",n.jsx(e.code,{children:"vl-form-message"}),` componenten worden getoond afhankelijk van de validatie status van de form controls. De
validatie status wordt bepaald door de `,n.jsx(e.code,{children:"validity"})," property die afhangt van gebruikersinteractie."]}),`
`,n.jsx(e.h2,{id:"validationmessage",children:"validationMessage"}),`
`,n.jsxs(e.p,{children:["Het ",n.jsx(e.code,{children:"validation-message"})," attribuut komt overeen met de ",n.jsx(e.code,{children:"validationMessage"})," property van de ",n.jsx(e.code,{children:"ValidityState"}),` interface.
Dit attribuut wordt automatisch ingevuld door de form control op basis van de validatie status.`]}),`
`,n.jsxs(e.p,{children:["Als er geen boodschap in het default slot wordt ingesteld, wordt de ",n.jsx(e.code,{children:"validation-message"}),` als inhoud van de
`,n.jsx(e.code,{children:"vl-form-message"})," weergegeven."]}),`
`,n.jsx(e.h2,{id:"referenties",children:"Referenties"}),`
`,n.jsx(e.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/componenten/form-message",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Form Message"})})]})}function D(s={}){const{wrapper:e}={...h(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(g,{...s})}):g(s)}function M(s,e){throw new Error("Expected component `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}y([k]);const V={id:"components-form-form-message",title:"Components - Form/form-message",tags:["autodocs"],args:a,argTypes:S,parameters:{docs:{page:D}}},o=m(a,({for:s,state:e,variant:d,show:v,preLine:f,defaultSlot:p})=>u`
            <vl-form-message
                for=${s}
                state=${e}
                variant=${d}
                ?show=${v}
                ?pre-line=${f}
                validation-message=${p}
            ></vl-form-message>
        `);o.storyName="vl-form-message - default";o.args={show:!0,defaultSlot:"Dit is een form message."};const r=m(a,({show:s,defaultSlot:e})=>u` <vl-form-message variant="success" ?show=${s}>${e}</vl-form-message> `);r.storyName="vl-form-message - success";r.args={show:!0,defaultSlot:"Dit veld is correct ingevuld."};const t=m(a,({show:s,defaultSlot:e})=>u` <vl-form-message variant="annotation" ?show=${s}>${e}</vl-form-message> `);t.storyName="vl-form-message - annotation";t.args={show:!0,defaultSlot:"Extra toelichting bij dit veld."};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`story(formMessageArgs, ({
  for: forValue,
  state,
  variant,
  show,
  preLine,
  defaultSlot
}) => {
  return html\`
            <vl-form-message
                for=\${forValue}
                state=\${state}
                variant=\${variant}
                ?show=\${show}
                ?pre-line=\${preLine}
                validation-message=\${defaultSlot}
            ></vl-form-message>
        \`;
})`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(formMessageArgs, ({
  show,
  defaultSlot
}) => {
  return html\` <vl-form-message variant="success" ?show=\${show}>\${defaultSlot}</vl-form-message> \`;
})`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`story(formMessageArgs, ({
  show,
  defaultSlot
}) => {
  return html\` <vl-form-message variant="annotation" ?show=\${show}>\${defaultSlot}</vl-form-message> \`;
})`,...t.parameters?.docs?.source}}};const A=["FormMessageDefault","FormMessageSuccess","FormMessageAnnotation"];export{t as FormMessageAnnotation,o as FormMessageDefault,r as FormMessageSuccess,A as __namedExportsOrder,V as default};
