import{x as s,u as p,j as t,M as g,C as f,S as v,bC as b,b6 as y}from"./iframe-BRJWU34U.js";import"./preload-helper-D9Z9MdNV.js";const x=["primary","secondary","tertiary","ghost","error","toggle"],$=["default","large","wide","narrow","block"],j=["none","before","after","only"],C=["idle","loading","disabled"],c=(n,e,o,r)=>`${n} ${e} icon-${o} ${r}`,S=(n,e,o,r,l)=>s`<dl style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
        <dt><strong>Element</strong></dt>
        <dd>${n}</dd>
        <dt><strong>Variant</strong></dt>
        <dd>${e}</dd>
        <dt><strong>Size</strong></dt>
        <dd>${o}</dd>
        <dt><strong>Icon</strong></dt>
        <dd>${r}</dd>
        <dt><strong>State</strong></dt>
        <dd>${l}</dd>
    </dl>`,m=n=>s`${n==="before"?s`<span class="vl-icon vl-icon--before vl-icon--add"></span>`:""}
${n==="only"?s`<span class="vl-icon vl-icon--add"></span>`:"Klik hier"}
${n==="after"?s`<span class="vl-icon vl-icon--after vl-icon--add"></span>`:""} `,h=(n,e)=>s`<div
    style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem;"
>
    ${x.map(o=>$.map(r=>j.map(l=>C.map(a=>s`
                            <div>
                                ${n==="button"?s`<button
                                          id="${[o,r,l,a].join("_")}"
                                          class="${e} ${c(o,r,l,a)}"
                                      >
                                          ${m(l)}
                                      </button>`:s`<a
                                          id="${[o,r,l,a].join("_")}"
                                          href="#"
                                          class="${e} ${c(o,r,l,a)}"
                                      >
                                          ${m(l)}
                                      </a>`}
                                <vl-popover
                                    for="${[o,r,l,a].join("_")}"
                                    trigger="focus"
                                >
                                    ${S(n,o,r,l,a)}
                                </vl-popover>
                            </div>
                        `))))}
</div>`;function u(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...p(),...n.components},{FluxMetaData:o}=e;return o||k("FluxMetaData"),t.jsxs(t.Fragment,{children:[t.jsx(g,{title:"Components - Atom/button-style"}),`
`,t.jsx(e.h1,{id:"button-style",children:"Button Style"}),`
`,t.jsx(o,{id:"components-atom-button-style"}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h2,{id:"inhoudstafel",children:"Inhoudstafel"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#doel",children:"Doel"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#voorbeelden",children:"Voorbeelden"})}),`
`]}),`
`,t.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,t.jsxs(e.p,{children:["De ",t.jsx(e.code,{children:"button"}),` CSS voorziet specifieke styling voor buttons. Het doel is deze implementatie te embedden in de css van concrete
componenten. Het is een bouwblok, niet bedoeld voor rechtstreeks gebruik! In een eindtoepassing een button toevoegen
gebeurd m.b.v. de `,t.jsx(e.a,{href:"/docs/components-atom-button--documentatie",children:"vl-button"})," component."]}),`
`,t.jsx(e.p,{children:"Componenten zelf kunnen ook buttons bevatten en gebruiken deze CSS-klasse om geneste shadow-dom's te vermijden."}),`
`,t.jsx(e.h2,{id:"voorbeelden",children:"Voorbeelden"}),`
`,t.jsx(e.p,{children:"In dit voorbeeld zie je verschillende buttons, ze worden hier specifiek ge-wrapped in een custom style-class."}),`
`,t.jsx(f,{of:d,sourceState:"none"}),`
`,t.jsxs("details",{open:!0,children:[t.jsx("summary",{children:"Code"}),t.jsx(v,{code:`
import { BaseLitElement, webComponent } from '@domg-wc/common';
import { CSSResult, html, TemplateResult } from 'lit';
import { vlButtonStyles } from '../button-style/vl-button-style.css';

@webComponent('my-component-with-button')
export class MyComponentWithButton extends BaseLitElement {
  static get styles(): CSSResult[] {
      return [vlButtonStyles('button', '.my-button')];
  }

  render(): TemplateResult {
      return html\`
          <button class="my-button">My styled button</button>
      \`
  }
}
  
  `,language:"ts",dark:!0})]})]})}function B(n={}){const{wrapper:e}={...p(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(u,{...n})}):u(n)}function k(n,e){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const D={id:"components-atom-button-style",title:"Components - Atom/button-style (intern)",tags:["autodocs"],parameters:{docs:{page:B}}},d=({})=>s`
    <style>
        ${b("button",".sb-button")}
    </style>
    ${h("button","sb-button")}
`;d.storyName="button-style - button element";d.parameters=y;const i=({})=>s`
    <style>
        ${b("a",".sb-button")}
    </style>
    ${h("a","sb-button")}
`;i.storyName="button-style - link element";i.parameters=y;d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`({}) => html\`
    <style>
        \${vlButtonStyles('button', '.sb-button')}
    </style>
    \${renderAllButtonVariants('button', 'sb-button')}
\``,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({}) => html\`
    <style>
        \${vlButtonStyles('a', '.sb-button')}
    </style>
    \${renderAllButtonVariants('a', 'sb-button')}
\``,...i.parameters?.docs?.source}}};const _=["ButtonStyleDefault","ButtonStyleLink"];export{d as ButtonStyleDefault,i as ButtonStyleLink,_ as __namedExportsOrder,D as default};
