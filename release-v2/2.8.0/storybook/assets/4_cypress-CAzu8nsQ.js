import{u as s,j as e,M as r}from"./iframe-BQb9mjVp.js";import"./preload-helper-D9Z9MdNV.js";function t(i){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Bijdragen/Cypress"}),`
`,e.jsx(n.h1,{id:"cypress",children:"Cypress"}),`
`,e.jsx(n.h2,{id:"inhoudstafel",children:"Inhoudstafel"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#richtlijnen",children:"Richtlijnen"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#naamgeving",children:"Naamgeving"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#structuur",children:"Structuur"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#dom--vs-wc-testen",children:"DOM- vs WC-testen"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#fijnmazigheid",children:"Fijnmazigheid"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#wcag-compliancy",children:"WCAG-compliancy"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#styling-aftesten",children:"Styling Aftesten"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#uitvoeren",children:"Uitvoeren"})}),`
`]}),`
`,e.jsx(n.h2,{id:"richtlijnen",children:"Richtlijnen"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"geef een beschrijving van de test in het Engels"}),`
`,e.jsx(n.li,{children:'begin altijd met "should", bvb. "should set steps"'}),`
`,e.jsxs(n.li,{children:["gebruik waar mogelijk de data ingesteld in de story/fixture die je test",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["zorg dat je niet te diepe relatieve url's gebruikt (",e.jsx(n.code,{children:"../../../../"}),")"]}),`
`,e.jsxs(n.li,{children:["plaats je data bestand in ",e.jsx(n.code,{children:"storybook-e2e/src/fixtures"}),`, zo kan je dat binnen
de story gebruiken via het pad `,e.jsx(n.code,{children:"src/fixtures"})]}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"doorgaans enkel de visueel gerenderde html testen, niet de aanroepen van interne methodes"}),`
`]}),`
`,e.jsx(n.h2,{id:"naamgeving",children:"Naamgeving"}),`
`,e.jsxs(n.p,{children:[`De conventie is het test-bestand te noemen conform het 'stories' bestand dat getest wordt met toevoeging van de 'cy'
suffix; bvb. `,e.jsx(n.code,{children:"vl-button.stories.cy.ts"}),"."]}),`
`,e.jsxs(n.p,{children:[`Indien er ook een wc-test geschreven wordt zullen we, om te differentiëren, de gewone test suffixen met '-dom.cy' en
de wc test met '-wc.cy'; bvb. `,e.jsx(n.code,{children:"vl-accordion.stories-dom.cy.ts"})," en ",e.jsx(n.code,{children:"vl-accordion.stories-wc.cy.ts"}),"."]}),`
`,e.jsx(n.h2,{id:"structuur",children:"Structuur"}),`
`,e.jsxs(n.p,{children:["Testen worden gegroepeerd op de standaard Mocha manier: ",e.jsx(n.code,{children:"describe()"})," functies met daarin genest ",e.jsx(n.code,{children:"it()"}),` methodes.
Daaraan wordt telkens als eerste parameter een (beknopte) omschrijving in het Engels meegegeven.`]}),`
`,e.jsx(n.p,{children:"Ga pragmatisch om met de structuur:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"beperk het aantal 'describe' blokken - indien zinvol"}),`
`,e.jsx(n.li,{children:"geef de voorkeur aan meerdere beknopte testen i.p.v. minder maar complexere testen"}),`
`,e.jsx(n.li,{children:"groepeer en sorteer de testen 'logisch' - dit is vaak subjectief en context specifiek"}),`
`]}),`
`,e.jsx(n.h2,{id:"dom--vs-wc-testen",children:"DOM- vs WC-testen"}),`
`,e.jsx(n.h3,{id:"dom-testen",children:"DOM-testen"}),`
`,e.jsx(n.p,{children:"Dit zijn de gangbare testen die ge-suffixed zijn met '.stories.cy.ts' of '.stories-dom.cy.ts'."}),`
`,e.jsx(n.p,{children:`Hierin testen we met Cypress de functionaliteit door enkel te kijken naar de gerenderde HTML en te inter-reageren zoals
een gebruiker dat doet met een browser. De interne implementatie van de component is irrelevant voor deze test.`}),`
`,e.jsx(n.h3,{id:"wc-testen-web-component-testen",children:"WC-testen (Web Component testen)"}),`
`,e.jsx(n.p,{children:"Dit zijn de testen die ge-suffixed zijn met '.stories-wc.cy.ts'."}),`
`,e.jsx(n.p,{children:`Met deze testen willen we de publieke 'api' van de web-component in kwestie aftesten. Het doel is via JavaScript te
inter-reageren met de component en te verifiëren dat die correct reageert.`}),`
`,e.jsx(n.h2,{id:"fijnmazigheid",children:"Fijnmazigheid"}),`
`,e.jsx(n.p,{children:`De componenten baseren zich op styling aangeleverd door Digitaal Vlaanderen. Die css is vaak specifiek naar hoe
de html gestructureerd moet worden. Om die rede is het zinvol de correctheid van de html-structuur af te testen.
Door er via Cypress fijnmazig door te navigeren doe je dit op een minimale manier.`}),`
`,e.jsx(n.p,{children:`Als je bvb. op een knop in een tabel wil klikken en je vindt de interne structuur van de tabel relevant dan kan
je er als volgt naar navigeren i.p.v. gewoon te zoeken naar de knop in de tabel.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`cy.get('vl-data-table')
    .shadow()
    .find('tbody > tr')
    .first()
    .find('td')
    .last()
    .find('button')
    .click();
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:`Belangrijk: het is geen algemene regel om altijd zo fijnmazig mogelijk te navigeren, enkel indien die structuur
relevant is!`}),`
`]}),`
`,e.jsx(n.h2,{id:"wcag-compliancy",children:"WCAG-compliancy"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://nl.wikipedia.org/wiki/Web_Content_Accessibility_Guidelines",rel:"nofollow",children:"WCAG"}),`: Web Content Accessibility Guidelines
(WCAG 2.0) zijn de EU-richtlijnen die bepalen dat websites en apps toegankelijk en gebruiksvriendelijk moeten zijn
voor mensen met een beperking`]}),`
`]}),`
`,e.jsxs(n.p,{children:[`Het doel is in de testen (een deel van) de WCAG-compliancy te verifiëren. Daarvoor voorzien we het Cypress
commando `,e.jsx(n.code,{children:"visitWithA11y()"}),`. Indien je dus in een test specifiek accessibility wil verifiëren gebruik je het
`,e.jsx(n.code,{children:"visitWithA11y()"})," commando i.p.v. de normale ",e.jsx(n.a,{href:"https://docs.cypress.io/api/commands/visit",rel:"nofollow",children:"visit()"}),` methode.
De verificatie zelf doe je daarna met `,e.jsx(n.code,{children:"cy.checkA11y()"}),". Achterliggend gebruikt dit commando ",e.jsx(n.a,{href:"https://github.com/dequelabs/axe-core",rel:"nofollow",children:"axe-core"}),"."]}),`
`,e.jsx(n.p,{children:"bvb.:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`    it('should be accessible', () => {
        cy.visitWithA11y(sideSheetUrl);
        cy.checkA11y('vl-side-sheet');
    });
`})}),`
`,e.jsx(n.h2,{id:"styling-aftesten",children:"Styling Aftesten"}),`
`,e.jsx(n.p,{children:`Doorgaans testen we of de juiste style-klasse (DV-styling) of het juiste attribuut aanwezig is in de DOM. In bepaalde
gevallen is het ook zinvol te controleren of de component effectief correct gerenderd wordt. Op die manier verifieer
je dat de css ingeladen is en ook effectief doet wat je verwacht.`}),`
`,e.jsxs(n.p,{children:["Om dit te testen kan je ",e.jsx(n.code,{children:"shouldHaveStyle()"}),` gebruiken. Dit gaat achterliggend via
`,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle",rel:"nofollow",children:e.jsx(n.code,{children:"getComputedStyle"})}),` de feitelijke style
aftesten.`]}),`
`,e.jsx(n.p,{children:"bvb.:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`cy.get('vl-document').find('span[slot="title"]').shouldHaveStyle('color', 'rgb(0, 85, 204)');
`})}),`
`,e.jsx(n.h2,{id:"uitvoeren",children:"Uitvoeren"}),`
`,e.jsx(n.h3,{id:"integrator-e2e-tests",children:"Integrator E2E tests"}),`
`,e.jsx(n.p,{children:"Start volgende scripts in parallel:"}),`
`,e.jsx(n.p,{children:"Terminal 1:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`npm run apps:integrator:dev
`})}),`
`,e.jsx(n.p,{children:"Terminal 2:"}),`
`,e.jsx(n.p,{children:"Optie 1: Met Cypress UI en hot reloading:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`npm run apps:integrator-e2e:watch
`})}),`
`,e.jsx(n.p,{children:"Optie 2: Alle tests zonder UI:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`npm run apps:integrator-e2e:run
`})}),`
`,e.jsx(n.h3,{id:"storybook-e2e-tests",children:"Storybook E2E tests"}),`
`,e.jsx(n.p,{children:"Start volgende scripts in parallel:"}),`
`,e.jsx(n.p,{children:"Terminal 1:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`npm run apps:storybook:dev
`})}),`
`,e.jsx(n.p,{children:"Terminal 2:"}),`
`,e.jsx(n.p,{children:"Optie 1: Met Cypress UI en hot reloading:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`npm run apps:storybook-e2e:watch
`})}),`
`,e.jsx(n.p,{children:"Optie 2: Alle tests zonder UI:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`npm run apps:storybook-e2e:run
`})}),`
`,e.jsx(n.h3,{id:"component-tests",children:"Component tests"}),`
`,e.jsx(n.p,{children:"Met Cypress UI en hot reloading:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`npm run libs:component-tests:watch
`})}),`
`,e.jsx(n.p,{children:"Alle tests:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`npm run libs:component-tests:run
`})})]})}function c(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{c as default};
