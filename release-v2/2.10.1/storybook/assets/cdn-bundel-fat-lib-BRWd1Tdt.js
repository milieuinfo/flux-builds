import{u as d,j as e,M as s}from"./iframe-iHJvAyUB.js";import"./preload-helper-D9Z9MdNV.js";function t(i){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Recepten/CDN Bundel - fat-lib"}),`
`,e.jsx(n.h1,{id:"cdn-bundel---fat-lib",children:"CDN Bundel - fat-lib"}),`
`,e.jsx(n.p,{children:`Voor gewone websites of legacy toepassingen (die geen bundler gebruiken) worden de 'compliance' web-componenten
ook beschikbaar gesteld via een statische bundel op de CDN. Doordat er dan geen bundler gebruikt wordt kan er geen
tree-shaking plaatsvinden, om die rede bieden we het script enkel geversioneerd aan en niet onder een 'latest' variant.
Op die manier moet je expliciet een versie specifiëren (om bewust te upgraden) en mag het bestand ge-cached worden - bij
een nieuwe versie wijzigt de naam.`}),`
`,e.jsxs(n.p,{children:["De ",e.jsx(n.code,{children:"fat-lib"})," bestanden zijn beschikbaar onder ",e.jsx(n.code,{children:"https://cdn.omgeving.vlaanderen.be/domg/domg-wc/x.y.z/"}),`, daar staan per versie 3
bestanden:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"domg-wc-compliance-2.0.0.js"})," - de leesbare variant [4,1 MB]"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"domg-wc-compliance-2.0.0.js.map"})," - de map file om de leesbare variant te debuggen [5,1 MB]"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"domg-wc-compliance-2.0.0.min.js"})," - de productie versie [2,4 MB]"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`<!DOCTYPE html>
<html lang="nl">
<head>
  <title>Flux Demo</title>
  <script type="module"
          src="https://cdn.omgeving.vlaanderen.be/domg/domg-wc/2.0.0/domg-wc-compliance-2.0.0.min.js"><\/script>
</head>
<body>
  <div class="vl-content-block">...</div>
</body>
</html>
`})})]})}function a(i={}){const{wrapper:n}={...d(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{a as default};
