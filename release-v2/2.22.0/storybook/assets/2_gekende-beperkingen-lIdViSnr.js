import{u as r,j as e,M as a}from"./iframe-ylVHDfb1.js";import"./preload-helper-PPVm8Dsz.js";function t(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Richtlijnen/Toegankelijkheid - Praktijk/Gekende Beperkingen [WIP]"}),`
`,e.jsx(n.h1,{id:"gekende-beperkingen-wip",children:"Gekende Beperkingen [WIP]"}),`
`,e.jsxs(n.h2,{id:"aria-invalid-bij-vl-upload",children:[e.jsx(n.code,{children:"aria-invalid"})," bij ",e.jsx(n.code,{children:"vl-upload"})]}),`
`,e.jsxs(n.p,{children:["Bij een validatiefout krijgt ",e.jsx(n.code,{children:"vl-upload"})," als enige form control geen ",e.jsx(n.code,{children:"aria-invalid"}),` in de accessibility tree. Het
enige focusbare element is de upload-knop, en `,e.jsx(n.code,{children:"aria-invalid"})," wordt niet ondersteund op ",e.jsx(n.code,{children:'role="button"'}),`, dus de
browser laat het attribuut daar vallen. De onderliggende `,e.jsx(n.code,{children:'input type="file"'}),` draagt het wel, maar Dropzone verbergt
die met `,e.jsx(n.code,{children:"visibility: hidden"}),", waardoor ze sowieso buiten de accessibility tree valt."]}),`
`,e.jsxs(n.p,{children:["De ongeldige toestand komt daarom niet van de control zelf, maar van de foutmelding: ",e.jsx(n.code,{children:"vl-form-message"}),` rendert ze in
een `,e.jsx(n.code,{children:'role="status"'})," regio met ",e.jsx(n.code,{children:'aria-live="polite"'}),`, zodat een screenreader ze voorleest zodra ze verschijnt. De
gebruiker hoort dus wel wat er fout is, alleen niet dat het veld zelf ongeldig staat. Dit rechtzetten vraagt dat de
file-input echt zichtbaar wordt voor screenreaders, wat raakt aan de manier waarop Dropzone haar input verbergt.`]}),`
`,e.jsx(n.h2,{id:"focus-op-niet-tekstuele-inputs",children:"Focus op niet-tekstuele inputs"}),`
`,e.jsxs(n.p,{children:[`Op Safari is het niet mogelijk om, met standaard instellingen, focus te leggen op een niet-tekstuele input zoals
buttons, checkboxes of radios. Dit is een `,e.jsx(n.a,{href:"https://bugs.webkit.org/show_bug.cgi?id=22261",rel:"nofollow",children:"probleem gemeld bij Safari"}),` -
waar het gemarkeerd is als WONTFIX.`]}),`
`,e.jsx(n.p,{children:"Volgens onze WCAG expert is dit een bewuste keuze van Apple en leidt dit al jaren tot verwarring."}),`
`,e.jsx(n.p,{children:"Om toch een focus te kunnen leggen op deze elementen kan je:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["als gebruiker op Mac: ",e.jsx(n.code,{children:"tab"}),"+",e.jsx(n.code,{children:"option"})," drukken"]}),`
`,e.jsxs(n.li,{children:["of gebruik maken van de volgende instelling in Safari:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["ga naar ",e.jsx(n.code,{children:"Safari > Settings > Advanced"})]}),`
`,e.jsxs(n.li,{children:["zet de optie ",e.jsx(n.code,{children:"Press Tab to highlight each item on a web page"})," aan; dan zal elke ",e.jsx(n.code,{children:"tab"}),` uitgevoerd worden als
`,e.jsx(n.code,{children:"tab"}),"+",e.jsx(n.code,{children:"option"})]}),`
`]}),`
`]}),`
`]})]})}function l(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{l as default};
