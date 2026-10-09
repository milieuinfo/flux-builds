import{u as d,j as e}from"./iframe-CsVpDM3d.js";function o(t){const n={code:"code",p:"p",...d(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.p,{children:["Met het ",e.jsx(n.code,{children:"describedby"}),` attribuut koppel je een extra beschrijving aan het veld voor gebruikers van een screenreader.
Verwijs naar het `,e.jsx(n.code,{children:"id"}),` van een element in dezelfde DOM-boom als het veld (het document of dezelfde shadow root); de
tekst wordt overgenomen en via `,e.jsx(n.code,{children:"aria-describedby"}),` gekoppeld aan het veld. Handig wanneer visuele context (bv. een
eenheid of een toelichting bij het veld) ook hoorbaar moet zijn. Het aangeduide element moet bestaan op het moment
dat het veld rendert. De koppeling volgt latere tekstwijzigingen van het aangeduide element. Het aangeduide element
zelf blijft ongewijzigd en dus ook los van het veld leesbaar voor een screenreader.`]}),`
`,e.jsxs(n.p,{children:[`Is het aangeduide element enkel voor screenreaders bedoeld (bv. visueel verborgen), zet er dan zelf
`,e.jsx(n.code,{children:'aria-hidden="true"'})," op, anders wordt de tekst twee keer voorgelezen."]}),`
`,e.jsxs(n.p,{children:["Is er op dat moment ook een validatieboodschap actief, dan wordt die mee opgenomen in de ",e.jsx(n.code,{children:"aria-describedby"}),`
koppeling, zodat beide teksten voorgelezen worden.`]})]})}function a(t={}){const{wrapper:n}={...d(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{a as M};
