import{u as l,j as e,M as o}from"./iframe-69xRVzLO.js";import{F as d}from"./flux-wcag-richtlijn-BFLj4qEY.js";import{F as u,a,b as i,c as r,e as c}from"./flux-wcag-succescriterium-WYMpzuT7.js";import"./preload-helper-D9Z9MdNV.js";function s(t){const n={code:"code",div:"div",pre:"pre",strong:"strong",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Richtlijnen/Toegankelijkheid - Aanpak/4. Robuust/4.1 Compatibel"}),`
`,e.jsx(d,{level:"4.1",title:"Compatibel",refDescription:"https://www.w3.org/Translations/WCAG22-nl/#compatible",refQuick:"https://www.w3.org/WAI/WCAG22/quickref/?showtechniques=111%2C121#compatible",text:e.jsx(e.Fragment,{children:"Compatibel betekent dat een website werkt met alle webbrowsers en ondersteunende technologieën. Ook een app moet je met alle ondersteunende technologieën kunnen gebruiken."})}),`
`,e.jsx(u,{}),`
`,e.jsx(a,{title:"Naam, rol, waarde",level:"4.1.2",refDescription:"https://www.w3.org/Translations/WCAG22-nl/#name-role-value",refQuick:"https://www.w3.org/WAI/WCAG22/quickref/?showtechniques=111%2C121#name-role-value",text:e.jsxs(e.Fragment,{children:["Zijn er onderdelen van de gebruikersomgeving waarmee gebruikers iets moeten ",e.jsx(n.strong,{children:"kunnen doen"}),"? Dan moeten ze die ",e.jsx(n.strong,{children:"ook met ondersteunende technologieën"})," kunnen gebruiken.",e.jsx(n.div,{style:{marginTop:"6px"}}),"Zo kunnen ook gebruikers van schermlezers met deze onderdelen werken."]})}),`
`,e.jsx(i,{}),`
`,e.jsx(r,{exampleNumber:"1",title:"Voorzie een sluit knop met aria-label in een pop-up.",link:"https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA14",children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div id="box">
    This is a pop-up box.
    <button aria-label="Close">X</button>
</div>
`})})}),`
`,e.jsx(r,{exampleNumber:"2",title:"Splits een telefoonnummer op in meerdere velden met een aria-label.",link:"https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA14",children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div role="group" aria-labelledby="groupLabel">
    <span id="groupLabel">Work Phone</span>
    +<input autocomplete="tel-country-code" type="number" aria-label="country code">
    <input autocomplete="tel-area-code" type="number" aria-label="area code">
    <input autocomplete="tel-local" type="number" aria-label="subscriber number">
</div>
`})})}),`
`,e.jsx(r,{exampleNumber:"3",title:"Gebruik het attribuut 'aria-labelledby'.",link:"https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA16",children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<p>Please select the <span id="mysldr-lbl">number of days for your trip</span></p>
<div id="mysldr" role="slider" aria-labelledby="mysldr-lbl"></div>
`})})}),`
`,e.jsx("div",{style:{marginTop:"4em"}}),`
`,e.jsx(c,{}),`
`,e.jsx(a,{title:"Statusberichten",level:"4.1.3",refDescription:"https://www.w3.org/Translations/WCAG22-nl/#status-messages",refQuick:"https://www.w3.org/WAI/WCAG22/quickref/?showtechniques=111%2C121#status-messages",text:e.jsxs(e.Fragment,{children:["Bijvoorbeeld de voortgang van een proces, een foutmelding, een bevestiging.",e.jsx(n.div,{style:{marginTop:"6px"}}),e.jsx(n.strong,{children:"Verandert er iets"})," aan de inhoud van de pagina, bijvoorbeeld een bevestiging nadat iemand een formulier verzendt, of een lijst met zoekresultaten nadat iemand op ‘zoeken’ drukt? Laat dat dan weten aan je gebruikers met een statusbericht, ook aan mensen die ondersteunende technologieën gebruiken.",e.jsx(n.div,{style:{marginTop:"6px"}}),"Gebruikers van een schermlezer kunnen de wijzigingen niet zien en moeten een melding krijgen met info over wat er veranderd is."]})}),`
`,e.jsx(i,{}),`
`,e.jsx(r,{exampleNumber:"1",title:"Voorzie een boodschap na zoeken.",link:"https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA22",children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div role="status" aria-atomic="true">5 results returned.</div>
`})})}),`
`,e.jsx(r,{exampleNumber:"2",title:"Pas de status van de winkelwagen aan.",link:"https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA22",children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<p role="status" aria-atomic="true">
    <img src="shopping-cart.png" alt="Shopping Cart">
    <span id="cart">0</span> items
</p>
`})})})]})}function b(t={}){const{wrapper:n}={...l(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{b as default};
