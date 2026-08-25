import{u as i,j as e,M as l,U as o,a}from"./iframe-CY-ZM549.js";import"./preload-helper-D9Z9MdNV.js";function s(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Recepten/CSS Styling"}),`
`,e.jsx(n.h1,{id:"styling",children:"Styling"}),`
`,e.jsx(n.h2,{id:"globale-css",children:"Globale CSS"}),`
`,e.jsxs(n.p,{children:["Alle Flux web-componenten, zijnde de web-componenten die zich in de package ",e.jsx(n.code,{children:"@domg-wc/components"}),` bevinden, zorgen
ervoor dat eenmalig alle css op document niveau geregistreerd wordt. Technisch gebeurt dat door de basis klasse
`,e.jsx(n.code,{children:"BaseLitElement"})," die de onderstaande ",e.jsx(n.code,{children:"GlobalStyles.getInstance().register()"})," methode uitvoert:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`public register() {
    if (!this.registered) {
        if (FluxConfig.getPreferences().autoRegisterStyles) {
            document.adoptedStyleSheets = [
                ...document.adoptedStyleSheets,
                ...(this.defaultStyles.map((style) => style.styleSheet) as CSSStyleSheet[]),
            ];
            console.info('GlobalStyles: global styling toegevoegd aan het document');
        } else {
            console.info(
                'GlobalStyles: geen global styling toegevoegd aan het document - autoRegisterStyles is uitgeschakeld'
            );
        }
        this.registered = true;
        this.registerCustomCSS();
    }
}
`})}),`
`,e.jsx(n.h2,{id:"eigen-componenten-met-shadow-dom",children:"Eigen componenten met shadow DOM"}),`
`,e.jsxs(n.p,{children:["Zoals hierboven vermeld injecteren de ",e.jsx(n.code,{children:"@domg-wc elementen"}),` hun eigen styling op root niveau.
Dit is voldoende in een applicatie waar de elementen niet gebruikt worden binnen andere shadow DOM's.`]}),`
`,e.jsx(o,{type:"warning",children:`
  Als je zelf componenten ontwikkelt met een shadow DOM, dan moet je onze styling opnieuw injecteren in je component.<br>
  De shadow DOM zal de styling niet doorlaten die globaal op het document niveau geregistreerd is.
`}),`
`,e.jsxs(n.p,{children:["In ",e.jsx(n.code,{children:"Lit"})," kan je dit bvb. zo doen:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { vlElementsStyle } from '@domg-wc/styles';

export class ComponentMetShadowDom extends LitElement {

    static get styles(): CSSResult[] {
        return [...vlElementsStyle];
    }
}
`})}),`
`,e.jsx(n.h2,{id:"custom-css",children:"Custom CSS"}),`
`,e.jsx(n.h3,{id:"component-niveau",children:"Component niveau"}),`
`,e.jsx(o,{type:"warning",children:`
  Je kan de styling van DV breken bij het gebruik hiervan!
`}),`
`,e.jsxs(n.p,{children:["Voor alle componenten behalve ",e.jsx(n.code,{children:"compliance"}),` is het mogelijk om een custom CSS-string mee te geven aan het
attribuut `,e.jsx(n.code,{children:"custom-css"}),`. Deze CSS wordt dan toegevoegd aan de adoptedStyleSheets van de shadow DOM van
de desbetreffende component.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-accordion-list custom-css=".vl-accordion-list {border: 10px solid lightblue}">
`})}),`
`,e.jsx(n.p,{children:"Een alternatieve manier om dezelfde custom CSS toe te voegen bij elke instantie van dat component:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { VlCascaderComponent } from '@domg-wc/components/block';
VlCascaderComponent.elementStyles = [...VlCascaderComponent.elementStyles, css\`
    .sbs-title-annotation-group {
        gap: var(--vl-spacing--xxsmall);
    }
\`];
`})}),`
`,e.jsx(n.h3,{id:"applicatie-niveau",children:"Applicatie niveau"}),`
`,e.jsx(n.p,{children:`Onze globale styling wordt automatisch op de DOM geplaatst. Je dient de volgende functie aan te roepen om je er van te
te verzekeren dat je applicatie-specifieke CSS pas ingeladen wordt nadat onze CSS ingeladen is:`}),`
`,e.jsx("vl-alert",{type:"info",title:"Opgelet",icon:"info-circle",size:"small","custom-css":".vl-alert{margin-bottom: 3rem;}",children:e.jsx(a,{options:{forceInline:!0},style:{fontSize:"14px"},children:"Je dient onderstaande code aan te roepen vóór je onze componenten importeert."})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { css } from 'lit';
import { GlobalStyles } from '@domg-wc/common';

const customCSS = css\`
:root {
    --vl-side-sheet-width: 580px; /* voor desktop */
    --vl-side-sheet-width-mobile: 100%; /* voor mobile */
}
\`;

GlobalStyles.getInstance().addCustomCss([customCSS]);
`})}),`
`,e.jsx(n.h2,{id:"deactivatie-globale-styling",children:"Deactivatie Globale Styling"}),`
`,e.jsxs(n.p,{children:[`Indien gewenst kan je de automatische registratie van globale (document) styling de-activeren via de
`,e.jsx(n.code,{children:"autoRegisterStyles"})," property, zie ",e.jsx(n.a,{href:"/docs/recepten-configuratie--documentatie",children:"configuratie"}),"."]})]})}function c(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{c as default};
