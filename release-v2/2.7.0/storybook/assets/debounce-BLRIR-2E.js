import{u as d,j as e,M as i}from"./iframe-BRJWU34U.js";import"./preload-helper-D9Z9MdNV.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...d(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Recepten/Debounce"}),`
`,e.jsx(n.h1,{id:"debounce-common",children:"Debounce (Common)"}),`
`,e.jsxs(n.p,{children:["De ",e.jsx(n.code,{children:"debounce"})," methode beperkt het aantal keren dat een functie aangeroepen wordt."]}),`
`,e.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { debounce } from '@domg-wc/common';

document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('input-field'); // <vl-input-field id="input-field"></vl-input-field>
    if (inputField) {
        inputField.addEventListener(
            'vl-input',
            debounce((event) => {
                // doe iets
            }, 200)
        );
    }
});
`})})]})}function s(t={}){const{wrapper:n}={...d(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{s as default};
