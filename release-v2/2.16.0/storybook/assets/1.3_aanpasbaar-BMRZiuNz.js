import{u as o,j as e,M as l}from"./iframe-B0laZkYe.js";import{F as d,a as r,b as a,c as i,f as c}from"./flux-wcag-succescriterium-D1WDV7r9.js";import{F as h}from"./flux-wcag-richtlijn-ClXZ0h4Z.js";import"./preload-helper-D9Z9MdNV.js";function s(t){const n={code:"code",div:"div",pre:"pre",strong:"strong",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Richtlijnen/Toegankelijkheid - Aanpak/1. Waarneembaar/1.3 Aanpasbaar"}),`
`,e.jsx(h,{level:"1.3",title:"Aanpasbaar",refDescription:"https://www.w3.org/Translations/WCAG22-nl/#adaptable",refQuick:"https://www.w3.org/WAI/WCAG22/quickref/?showtechniques=111%2C121%2C131#adaptable",text:e.jsx(e.Fragment,{children:"Maak inhoud die gebruikers op verschillende manieren kunnen weergeven zonder dat ze informatie of het overzicht verliezen."})}),`
`,e.jsx(d,{}),`
`,e.jsx(r,{title:"Info en onderlinge verhoudingen",level:"1.3.1",refDescription:"https://www.w3.org/Translations/WCAG22-nl/#info-and-relationships",refQuick:"https://www.w3.org/WAI/WCAG22/quickref/?showtechniques=111%2C121%2C131#info-and-relationships",text:e.jsxs(e.Fragment,{children:["Bijvoorbeeld tabellen, lijsten, koppen, paragrafen, opsommingen, invoervelden van formulieren.",e.jsx(n.div,{style:{marginTop:"6px"}}),"Leg in de code van je website vast wat de ",e.jsx(n.strong,{children:"relatie tussen de verschillende onderdelen"})," van je webpagina is.",e.jsx(n.div,{style:{marginTop:"6px"}}),"Wat je zichtbaar weergeeft, moet ook waar te nemen zijn met ondersteunende technologieën, zoals schermlezers, schermvergrotingssoftware en spraakherkenningssoftware."]})}),`
`,e.jsx(a,{}),`
`,e.jsx(i,{exampleNumber:"1",title:"Gebruik het 'role' attribuut met ARIA-landmarks (region, banner, navigation, ... ) om paginaonderdelen te identificeren.",link:"https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA11",children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div role="banner">site logo and name, etc. here</div>
<div role="search">search functionality here</div>
<div role="navigation">a list of navigation links here</div>
<div role="form">a sign-up form here</div>
<div role="main">the page's main content here</div>
<div role="region">a sponsor's promotion here</div>
<div role="complementary">sidebar content here</div>
<div role="contentinfo"> site contact details, copyright information, etc. here </div>
`})})}),`
`,e.jsx(i,{exampleNumber:"2",title:"Gebruik semantische HTML om regions te identificeren.",link:"https://www.w3.org/WAI/WCAG22/Techniques/html/H101",children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<header> site logo and name, etc. here </header>
<form aria-label="site search"> search functionality here </form>
<nav> a list of navigation links here </nav>
<main> the page's main content here </main>
<section> a sponsor's promotion here </section>
<aside> sidebar content here </aside>
<footer> site contact details, copyright information, etc. here </footer>
`})})}),`
`,e.jsx(i,{exampleNumber:"3",title:"Gebruik 'role=heading' om headings te identificeren.",link:"https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA12",children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div role="heading" aria-level="2">Global News Items</div>
... a list of global news with editorial comment....

<div role="heading" aria-level="3">Politics</div>
... a list of global political news stories ...
`})})}),`
`,e.jsx(i,{exampleNumber:"4",title:"Gebruik 'aria-labelledby' om regions te benoemen.",link:"https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA16",children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div role="application" aria-labelledby="p123" aria-describedby="info">
    <h1 id="p123">Calendar<h1>
        <p id="info">This calendar shows the game schedule for the Boston Red Sox.</p>
        <div role="grid">
            ...
        </div>
</div>
`})})}),`
`,e.jsx(i,{exampleNumber:"5",title:"Gebruik de 'group' role voor gerelateerde zaken.",link:"https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA17",children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div role="group" aria-labelledby="ssn1">
    <span id="ssn1">Social Security Number</span>
    <span style="color: #D90D0D;"> (required)</span>
    <input size="3" type="text" aria-required="true" title="First 3 digits">-
    <input size="2" type="text" aria-required="true" title="Next 2 digits">-
    <input size="4" type="text" aria-required="true" title="Last 4 digits">
</div>
`})})}),`
`,e.jsx(i,{exampleNumber:"6",title:"Gebruik de 'region' role om een regio te identificeren.",link:"https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA20",children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div role="region" aria-label="weather portlet">
    ...
</div>
`})})}),`
`,e.jsx(i,{exampleNumber:"7",title:"Gebruik semantische elementen voor structuur.",link:"https://www.w3.org/WAI/WCAG22/Techniques/general/G115",children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<p>What the user <em>really</em> meant to say was,
    <q>This is not ok, it is <strong>excellent</strong>!</q>
</p>
`})})}),`
`,e.jsx("div",{style:{marginTop:"4em"}}),`
`,e.jsx(r,{title:"Betekenisvolle volgorde",level:"1.3.2",refDescription:"https://www.w3.org/Translations/WCAG22-nl/#meaningful-sequence",refQuick:"https://www.w3.org/WAI/WCAG22/quickref/?showtechniques=111%2C121%2C131#meaningful-sequence",text:e.jsxs(e.Fragment,{children:["Zorg dat gebruikers de ",e.jsx(n.strong,{children:"inhoud in een logische volgorde"})," kunnen waarnemen, of dat nu met hun ogen is of met ondersteunende technologie zoals een schermlezer. Daarvoor moet je alles de juiste code geven."]})}),`
`,e.jsx(a,{}),`
`,e.jsx(i,{exampleNumber:"1",title:"Orden de inhoud in een betekenisvolle volgorde.",link:"https://www.w3.org/WAI/WCAG22/Techniques/general/G57"}),`
`,e.jsx("div",{style:{marginTop:"4em"}}),`
`,e.jsx(r,{title:"Zintuiglijke eigenschappen",level:"1.3.3",refDescription:"https://www.w3.org/Translations/WCAG22-nl/#sensory-characteristics",refQuick:"https://www.w3.org/WAI/WCAG22/quickref/?showtechniques=111%2C121%2C131#sensory-characteristics",text:e.jsxs(e.Fragment,{children:["Zorg ervoor dat je inhoud ",e.jsx(n.strong,{children:"nooit"})," bestaat uit dingen die gebruikers ",e.jsx(n.strong,{children:"alleen maar kunnen zien of horen"}),", zoals vormen, kleuren, grootte of geluiden.",e.jsx(n.div,{style:{marginTop:"6px"}}),"Zo krijgen gebruikers die moeilijk of niet zien of horen de informatie ook mee."]})}),`
`,e.jsx(a,{}),`
`,e.jsx(i,{exampleNumber:"1",title:"Gebruik tekstuele identificatie voor zaken die anders enkel visueel zijn.",link:"https://www.w3.org/WAI/WCAG22/Techniques/general/G96"}),`
`,e.jsx("div",{style:{marginTop:"5em"}}),`
`,e.jsx(c,{}),`
`,e.jsx(r,{title:"Weergavestand",level:"1.3.4",refDescription:"https://www.w3.org/Translations/WCAG22-nl/#orientation",refQuick:"https://www.w3.org/WAI/WCAG22/quickref/?showtechniques=111%2C121%2C131#orientation",text:e.jsxs(e.Fragment,{children:["Zorg dat de inhoud is ",e.jsx(n.strong,{children:"afgestemd op schermen met verschillende verhoudingen"}),". En dat de inhoud in verschillende weergaves goed leesbaar is: ",e.jsx(n.strong,{children:"staand en liggend"}),".",e.jsx(n.div,{style:{marginTop:"6px"}}),"Gebruikers met een handicap moeten de inhoud kunnen bekijken in een stand die voor hen het beste werkt. Een weergave in grotere letters is bijvoorbeeld makkelijker om te lezen in liggende stand. Sommige gebruikers hebben een toestel dat vastgezet is in een staande of liggende stand en dat je dus niet zomaar van stand verwisselt."]})}),`
`,e.jsx(a,{}),`
`,e.jsx(i,{exampleNumber:"1",title:"Voorzie een manier om de richting expliciet te beïnvloeden.",link:"https://www.w3.org/WAI/WCAG22/Techniques/general/G214"}),`
`,e.jsx("div",{style:{marginTop:"4em"}}),`
`,e.jsx(r,{title:"Identificeer het doel van de input",level:"1.3.5",refDescription:"https://www.w3.org/Translations/WCAG22-nl/#identify-input-purpose",refQuick:"https://www.w3.org/WAI/WCAG22/quickref/?showtechniques=111%2C121%2C131#identify-input-purpose",text:e.jsxs(e.Fragment,{children:["Maak het ",e.jsx(n.strong,{children:"doel van invoervelden van formulieren duidelijk"}),".",e.jsx(n.div,{style:{marginTop:"6px"}}),"Zorg voor een goede opbouw en uitleg bij de invoervelden. Verschillende webbrowsers en ondersteunende technologieën moeten die kunnen weergeven, bijvoorbeeld een schermlezer."]})}),`
`,e.jsx(a,{}),`
`,e.jsx(i,{exampleNumber:"1",title:"Gebruik het HTML 5.2 autocomplete attribuut.",link:"https://www.w3.org/WAI/WCAG22/Techniques/html/H98",children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<form method="post" action="step2">
    <div>
        <label for="fname">First Name</label>
        <input autocomplete="given-name" id="fname" type="text">
    </div>
    <div>
        <label for="lname">Last Name</label>
        <input autocomplete="family-name" id="lname" type="text">
    </div>
    <div>
        <label for="cc-num">Credit card number:</label>
        <input autocomplete="cc-number" id="cc-num" type="text">
    </div>
    <div>
        <label for="exp-date">Expiry Date:</label>
        <input autocomplete="cc-exp" id="exp-date" type="month">
    </div>
    <div>
        <input type="submit" value="Continue">
    </div>
</form>
`})})})]})}function w(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{w as default};
