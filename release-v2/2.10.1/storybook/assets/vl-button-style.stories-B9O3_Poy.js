import{x as s,u as p,j as n,M as v,C as f,S as h,bF as b,bb as y}from"./iframe-iHJvAyUB.js";import"./preload-helper-D9Z9MdNV.js";const $=["primary","secondary","tertiary","ghost","error","toggle"],x=["default","large","wide","narrow","block"],j=["none","before","after","only"],C=["idle","loading","disabled"],c=(t,e,o,r)=>`${t} ${e} icon-${o} ${r}`,S=(t,e,o,r,l)=>s`<dl style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
        <dt><strong>Element</strong></dt>
        <dd>${t}</dd>
        <dt><strong>Variant</strong></dt>
        <dd>${e}</dd>
        <dt><strong>Size</strong></dt>
        <dd>${o}</dd>
        <dt><strong>Icon</strong></dt>
        <dd>${r}</dd>
        <dt><strong>State</strong></dt>
        <dd>${l}</dd>
    </dl>`,m=t=>s`${t==="before"?s`<span class="vl-icon vl-icon--before vl-icon--add"></span>`:""}
${t==="only"?s`<span class="vl-icon vl-icon--add"></span>`:"Klik hier"}
${t==="after"?s`<span class="vl-icon vl-icon--after vl-icon--add"></span>`:""} `,g=(t,e)=>s`<div
    style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem;"
>
    ${$.map(o=>x.map(r=>j.map(l=>C.map(a=>s`
                            <div>
                                ${t==="button"?s`<button
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
                                    ${S(t,o,r,l,a)}
                                </vl-popover>
                            </div>
                        `))))}
</div>`;function u(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...p(),...t.components},{FluxComponentMetaData:o}=e;return o||k("FluxComponentMetaData"),n.jsxs(n.Fragment,{children:[n.jsx(v,{title:"Components - Atom/button-style"}),`
`,n.jsx(e.h1,{id:"button-style",children:"Button Style"}),`
`,n.jsx(o,{id:"components-atom-button-style"}),`
`,n.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,n.jsxs(e.p,{children:["De ",n.jsx(e.code,{children:"button"}),` CSS voorziet specifieke styling voor buttons. Het doel is deze implementatie te embedden in de css van concrete
componenten. Het is een bouwblok, niet bedoeld voor rechtstreeks gebruik! In een eindtoepassing een button toevoegen
gebeurd m.b.v. de `,n.jsx(e.a,{href:"/docs/components-atom-button--documentatie",children:"vl-button"})," component."]}),`
`,n.jsx(e.p,{children:"Componenten zelf kunnen ook buttons bevatten en gebruiken deze CSS-klasse om geneste shadow-dom's te vermijden."}),`
`,n.jsx(e.h2,{id:"voorbeelden",children:"Voorbeelden"}),`
`,n.jsx(e.p,{children:"In dit voorbeeld zie je verschillende buttons, ze worden hier specifiek ge-wrapped in een custom style-class."}),`
`,n.jsx(f,{of:d,sourceState:"none"}),`
`,n.jsxs("details",{open:!0,children:[n.jsx("summary",{children:"Code"}),n.jsx(h,{code:`
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

  `,language:"ts",dark:!0})]})]})}function B(t={}){const{wrapper:e}={...p(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(u,{...t})}):u(t)}function k(t,e){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const D={id:"components-atom-button-style",title:"Components - Atom/button-style (intern)",tags:["autodocs"],parameters:{docs:{page:B}}},d=({})=>s`
    <style>
        ${b("button",".sb-button")}
    </style>
    ${g("button","sb-button")}
`;d.storyName="button-style - button element";d.parameters=y;const i=({})=>s`
    <style>
        ${b("a",".sb-button")}
    </style>
    ${g("a","sb-button")}
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
