import{u as o,j as e,M as d}from"./iframe-FlvNZLqI.js";import"./preload-helper-D9Z9MdNV.js";function s(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Recepten/Debugging"}),`
`,e.jsx(n.h1,{id:"debugging---map-files",children:"Debugging - map files"}),`
`,e.jsx(n.h2,{id:"map-bestanden",children:".map bestanden"}),`
`,e.jsx(n.p,{children:`In de npm packages van de flux-web-components zitten .js.map bestanden. De gewone .js bestanden hebben een referentie
naar die .js.map bestanden waarin de originele broncode (in TypeScript) zit. Als de configuratie juist is kan je
daarmee de broncode van de flux-web-components debuggen.`}),`
`,e.jsx(n.h2,{id:"webpack-bundler",children:"webpack bundler"}),`
`,e.jsxs(n.p,{children:["Als je je eindtoepassing bundelt met ",e.jsx(n.a,{href:"https://webpack.js.org/",rel:"nofollow",children:"webpack"}),` dien je in je webpack configuratie de
`,e.jsx(n.a,{href:"https://webpack.js.org/loaders/source-map-loader/",rel:"nofollow",children:"source-map-loader"}),` toe te voegen. Deze plugin zorgt ervoor dat
de .js.map bestanden transitief mee opgenomen worden in de bundel van de eindtoepassing.`]}),`
`,e.jsx(n.p,{children:"Om de plugin te gebruiken moet je hem installeren"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`npm i -D source-map-loader
`})}),`
`,e.jsx(n.p,{children:"en nadien configureren"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`module.exports = {
  module: {
    rules: [
      {
        test: /\\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
    ],
  },
};
`})})]})}function i(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{i as default};
