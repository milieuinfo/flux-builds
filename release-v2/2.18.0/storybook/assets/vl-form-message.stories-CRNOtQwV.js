import{Z as i,_ as l,W as j,cb as x,X as b,u as h,j as n,C as c,b8 as w,s as m,x as u,r as y,c as S}from"./iframe-COmpMQdF.js";import"./preload-helper-D9Z9MdNV.js";const o={...b,...x,defaultSlot:""},k={...j,for:{name:"for",description:"De id van het input element waarvoor de message getoond moet worden.",table:{category:i.ATTRIBUTES,type:{summary:l.STRING},defaultValue:{summary:String(o.for)}}},state:{name:"state",description:'De `ValidityState`-sleutel waarvoor de message getoond moet worden. Gebruik `state="valid"` voor een success-boodschap (groen) die automatisch verschijnt zodra het veld geldig is na een eerste validatie.',table:{category:i.ATTRIBUTES,type:{summary:"ValidityState"},defaultValue:{summary:String(o.state)}}},variant:{name:"variant",description:'De visuele stijl van de message: `error` (default), `success` of `annotation`. Gebruik `annotation` voor een altijd zichtbare, informatieve tekst. De success-stijl wordt ook automatisch toegepast bij `state="valid"`.',control:{type:"select"},options:["error","success","annotation"],table:{category:i.ATTRIBUTES,type:{summary:"error | success | annotation"},defaultValue:{summary:String(o.variant)}}},show:{name:"show",description:"Duidt aan of de message getoond moet worden.<br>Dit kan gebruikt worden om de message manueel te tonen of te verbergen.",table:{category:i.ATTRIBUTES,type:{summary:l.BOOLEAN},defaultValue:{summary:String(o.show)}}},preLine:{name:"preLine",description:"Duidt aan of de nieuwe lijnen (`\n`) in de message behouden worden.",table:{category:i.ATTRIBUTES,type:{summary:l.BOOLEAN},defaultValue:{summary:String(o.preLine)}}},defaultSlot:{name:"[default]",description:"De inhoud van de message.",table:{type:{summary:l.HTML},category:i.SLOTS,defaultValue:{summary:o.defaultSlot}}}};function g(s){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...h(),...s.components},{FluxComponentMetaData:d}=e;return d||M("FluxComponentMetaData"),n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"form-message",children:"Form Message"}),`
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
`,n.jsx(c,{of:a}),`
`,n.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,n.jsx(w,{of:a}),`
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
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/componenten/form-message",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Form Message"})})]})}function D(s={}){const{wrapper:e}={...h(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(g,{...s})}):g(s)}function M(s,e){throw new Error("Expected component `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}y([S]);const A={id:"components-form-form-message",title:"Components - Form/form-message",tags:["autodocs"],args:o,argTypes:k,parameters:{docs:{page:D}}},a=m(o,({for:s,state:e,variant:d,show:f,preLine:v,defaultSlot:p})=>u`
            <vl-form-message
                for=${s}
                state=${e}
                variant=${d}
                ?show=${f}
                ?pre-line=${v}
                validation-message=${p}
            ></vl-form-message>
        `);a.storyName="vl-form-message - default";a.args={show:!0,defaultSlot:"Dit is een form message."};const r=m(o,({show:s,defaultSlot:e})=>u` <vl-form-message variant="success" ?show=${s}>${e}</vl-form-message> `);r.storyName="vl-form-message - success";r.args={show:!0,defaultSlot:"Dit veld is correct ingevuld."};const t=m(o,({show:s,defaultSlot:e})=>u` <vl-form-message variant="annotation" ?show=${s}>${e}</vl-form-message> `);t.storyName="vl-form-message - annotation";t.args={show:!0,defaultSlot:"Extra toelichting bij dit veld."};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`story(formMessageArgs, ({
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
})`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(formMessageArgs, ({
  show,
  defaultSlot
}) => {
  return html\` <vl-form-message variant="success" ?show=\${show}>\${defaultSlot}</vl-form-message> \`;
})`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`story(formMessageArgs, ({
  show,
  defaultSlot
}) => {
  return html\` <vl-form-message variant="annotation" ?show=\${show}>\${defaultSlot}</vl-form-message> \`;
})`,...t.parameters?.docs?.source}}};const V=["FormMessageDefault","FormMessageSuccess","FormMessageAnnotation"];export{t as FormMessageAnnotation,a as FormMessageDefault,r as FormMessageSuccess,V as __namedExportsOrder,A as default};
