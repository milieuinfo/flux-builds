import{u as i,j as e,M as r}from"./iframe-D9dm7PbY.js";import{F as l,a as o,b as c,c as n}from"./flux-wcag-succescriterium-BD2fQNve.js";import{F as m}from"./flux-wcag-richtlijn-Dhj1dcdS.js";import"./preload-helper-D9Z9MdNV.js";function s(a){const t={code:"code",div:"div",pre:"pre",strong:"strong",...i(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Richtlijnen/Toegankelijkheid - Aanpak/1. Waarneembaar/1.1 Tekstalternatieven"}),`
`,e.jsx(m,{level:"1.1",title:"Tekstalternatieven (alt-tekst)",refDescription:"https://www.w3.org/Translations/WCAG22-nl/#text-alternatives",refQuick:"https://www.w3.org/WAI/WCAG22/quickref/?showtechniques=111%2C121#text-alternatives",text:e.jsx(e.Fragment,{children:"Geef alle inhoud die niet uit tekst bestaat, ook in de vorm van tekst weer."})}),`
`,e.jsx(l,{}),`
`,e.jsx(o,{title:"Niet-tekstuele Content",level:"1.1.1",refDescription:"https://www.w3.org/Translations/WCAG22-nl/#non-text-content",refQuick:"https://www.w3.org/WAI/WCAG22/quickref/?showtechniques=111#non-text-content",text:e.jsxs(e.Fragment,{children:["Niet-tekstuele content is ",e.jsx(t.strong,{children:"inhoud die niet uit tekst bestaat"}),", zoals afbeeldingen, grafieken, pictogrammen en infographics.",e.jsx(t.div,{style:{marginTop:"6px"}}),"Geef de informatie uit die inhoud ook weer als tekst. Een andere naam daarvoor is ",e.jsx(t.strong,{children:"alt-tekst"}),"."]})}),`
`,e.jsx(c,{}),`
`,e.jsx(n,{exampleNumber:"1",title:"Voeg een aria-label toe waar nodig.",link:"https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA6",children:e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<div role="region" aria-label="weather portlet">
    ...
</div>
`})})}),`
`,e.jsx(n,{exampleNumber:"2",title:"Voeg een aria-labelledby toe waar nodig.",link:"https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA10",children:e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<div role="img" aria-labelledby="star-id">
    <img src="fullstar.png" alt="">
    <img src="fullstar.png" alt="">
    <img src="fullstar.png" alt="">
    <img src="fullstar.png" alt="">
    <img src="emptystar.png" alt="">
</div>
<div id="star-id">4 of 5</div>
`})})}),`
`,e.jsx(n,{exampleNumber:"3",title:"Voeg een tekst alternatief toe op 1 item in een groep.",link:"https://www.w3.org/WAI/WCAG22/Techniques/general/G196",children:e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<p>Rating:
    <img src="star-filled" alt="3 out of 5 stars">
    <img src="star-filled" alt="">
    <img src="star-filled" alt="">
    <img src="star-empty" alt="">
    <img src="star-empty" alt="">
</p>
`})})}),`
`,e.jsx(n,{exampleNumber:"4",title:"Combineer een image met tekst.",link:"https://www.w3.org/WAI/WCAG22/Techniques/html/H2",children:e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<a href="products.html">
    <img src="icon.gif" alt="">Products page
</a>
`})})}),`
`,e.jsx(n,{exampleNumber:"5",title:"Voeg een alt-attribuut toe aan een image.",link:"https://www.w3.org/WAI/WCAG22/Techniques/html/H37",children:e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<img src="newsletter.gif" alt="Free newsletter. Get free recipes, news, and more. Learn more.">
`})})}),`
`,e.jsx(n,{exampleNumber:"6",title:"Gebruik de inhoud van de object tag.",link:"https://www.w3.org/WAI/WCAG22/Techniques/html/H53",children:e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<object classid="https://www.example.com/analogclock.py">
    <p>Here is some text that describes the object and its operation.</p>
</object>
`})})}),`
`,e.jsx(n,{exampleNumber:"7",title:"Bied tekst alternatieven voor emoji's, emoticons, ASCII-art en leetspeak.",link:"https://www.w3.org/WAI/WCAG22/Techniques/html/H53",children:e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<p>I smiled at my friend and gestured
    <span aria-label="you" role="img">👉🏾</span>
    <span aria-label="rock" role="img">🤘🏾</span>!
</p>
`})})})]})}function u(a={}){const{wrapper:t}={...i(),...a.components};return t?e.jsx(t,{...a,children:e.jsx(s,{...a})}):s(a)}export{u as default};
