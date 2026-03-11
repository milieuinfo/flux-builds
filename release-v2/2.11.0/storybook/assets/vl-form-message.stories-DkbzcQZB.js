import{Y as t,Z as i,U as g,cd as u,W as f,u as l,j as e,C as h,bk as p,s as v,x as j,r as x,c as b}from"./iframe-BWsn3Pr7.js";import"./preload-helper-D9Z9MdNV.js";const s={...f,...u,defaultSlot:""},w={...g,for:{name:"for",description:"De id van het input element waarvoor de message getoond moet worden.",table:{category:t.ATTRIBUTES,type:{summary:i.STRING},defaultValue:{summary:String(s.for)}}},state:{name:"state",description:"De state van het input element waarvoor de message getoond moet worden.",table:{category:t.ATTRIBUTES,type:{summary:"ValidityState"},defaultValue:{summary:String(s.state)}}},show:{name:"show",description:"Duidt aan of de message getoond moet worden.<br>Dit kan gebruikt worden om de message manueel te tonen of te verbergen.",table:{category:t.ATTRIBUTES,type:{summary:i.BOOLEAN},defaultValue:{summary:String(s.show)}}},preLine:{name:"preLine",description:"Duidt aan of de nieuwe lijnen (`\n`) in de message behouden worden.",table:{category:t.ATTRIBUTES,type:{summary:i.BOOLEAN},defaultValue:{summary:String(s.preLine)}}},defaultSlot:{name:"[default]",description:"De inhoud van de message.",table:{type:{summary:i.HTML},category:t.SLOTS,defaultValue:{summary:s.defaultSlot}}}};function d(o){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...l(),...o.components},{FluxComponentMetaData:a}=n;return a||k("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"form-message",children:"Form Message"}),`
`,e.jsx(a,{id:"components-form-form-message"}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(n.p,{children:["Gebruik de ",e.jsx(n.code,{children:"form-message"})," component om een boodschap af te beelden voor een input veld.",e.jsx("br",{}),`
Zie het `,e.jsx(n.a,{href:"/docs/ontwerp-form-demo--documentatie",children:"form demo"})," voorbeeld voor het gebruik binnen een form."]}),`
`,e.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { VlFormMessageComponent } from '@domg-wc/components/form';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-form-message></vl-form-message>
`})}),`
`,e.jsx(h,{of:r}),`
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(p,{of:r}),`
`,e.jsx(n.h2,{id:"gebruik",children:"Gebruik"}),`
`,e.jsx(n.h3,{id:"volgorde",children:"Volgorde"}),`
`,e.jsxs(n.p,{children:[`We raden aan 1 form message per validatie te tonen. Als er meerdere validaties zijn, toon de belangrijkste eerst.
De volgorde waarin de form messages getoond worden volgt dezelfde volgorde van `,e.jsx(n.code,{children:"vl-form-message"}),` componenten in
de DOM. Een voorbeeld hiervan kan je vinden in onze `,e.jsx(n.a,{href:"/docs/ontwerp-form-demo--documentatie",children:"form demo"}),"."]}),`
`,e.jsx(n.h3,{id:"success",children:"Success"}),`
`,e.jsxs(n.p,{children:["Als je expliciet wil aantonen dat de form-control correct is ingevuld, kan je het ",e.jsx(n.code,{children:"success"}),` attribuut gebruiken op de
gerelateerde form-control.`]}),`
`,e.jsx(n.h3,{id:"foutmeldingen",children:"Foutmeldingen"}),`
`,e.jsx(n.p,{children:`Bij het instellen van een foutmelding is het belangrijk om suggesties mee te geven over hoe de foute invoer kan worden
rechtgezet. Een goede foutmelding beschrijft niet enkel wat er fout is, maar geeft de gebruiker ook duidelijke aanwijzingen
om het probleem op te lossen.`}),`
`,e.jsx(n.h2,{id:"validatie",children:"Validatie"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Meer info over validatie binnen onze form componenten vind je hier: ",e.jsx(n.a,{href:"/docs/ontwerp-form-validation--documentatie",children:"Form - Validatie"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["De ",e.jsx(n.code,{children:"vl-form-message"}),` componenten worden getoond afhankelijk van de validatie status van de form controls. De
validatie status wordt bepaald door de `,e.jsx(n.code,{children:"validity"})," property die afhangt van gebruikersinteractie."]}),`
`,e.jsx(n.h2,{id:"validationmessage",children:"validationMessage"}),`
`,e.jsxs(n.p,{children:["Het ",e.jsx(n.code,{children:"validation-message"})," attribuut komt overeen met de ",e.jsx(n.code,{children:"validationMessage"})," property van de ",e.jsx(n.code,{children:"ValidityState"}),` interface.
Dit attribuut wordt automatisch ingevuld door de form control op basis van de validatie status.`]}),`
`,e.jsxs(n.p,{children:["Als er geen boodschap in het default slot wordt ingesteld, wordt de ",e.jsx(n.code,{children:"validation-message"}),` als inhoud van de
`,e.jsx(n.code,{children:"vl-form-message"})," weergegeven."]}),`
`,e.jsx(n.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(n.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/forms/vl-ui-form-message",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Form Message"})})]})}function y(o={}){const{wrapper:n}={...l(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(d,{...o})}):d(o)}function k(o,n){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}x([b]);const S={id:"components-form-form-message",title:"Components - Form/form-message",tags:["autodocs"],args:s,argTypes:w,parameters:{docs:{page:y}}},r=v(s,({for:o,state:n,show:a,preLine:m,defaultSlot:c})=>j`
        <vl-form-message
            for=${o}
            state=${n}
            ?show=${a}
            ?pre-line=${m}
            validation-message=${c}
        ></vl-form-message>
    `);r.storyName="vl-form-message - default";r.args={show:!0,defaultSlot:"Dit is een form message."};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(formMessageArgs, ({
  for: forValue,
  state,
  show,
  preLine,
  defaultSlot
}) => {
  return html\`
        <vl-form-message
            for=\${forValue}
            state=\${state}
            ?show=\${show}
            ?pre-line=\${preLine}
            validation-message=\${defaultSlot}
        ></vl-form-message>
    \`;
})`,...r.parameters?.docs?.source}}};const T=["FormMessageDefault"];export{r as FormMessageDefault,T as __namedExportsOrder,S as default};
