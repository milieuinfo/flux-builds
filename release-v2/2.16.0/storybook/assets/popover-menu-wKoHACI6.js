import{u as r,j as e,M as i,C as p,S as l}from"./iframe-B0laZkYe.js";import{p as a,P as c}from"./popover-menu.stories-Bon-jkDb.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-popover-menu-info-tile.component-DLYQ7spv.js";const s=`import { registerWebComponents, webComponent } from '@domg-wc/common';
import { VlButtonComponent } from '@domg-wc/components/atom';
import { VlPopoverComponent } from '@domg-wc/components/block';
import { html, LitElement } from 'lit';

@webComponent('vl-popover-menu')
export class VlPopoverMenuComponent extends LitElement {
    static {
        registerWebComponents([VlPopoverComponent, VlButtonComponent]);
    }

    override render() {
        return html\`
            <div>
                <vl-button ghost icon="nav-show-more-vertical" id="btn-acties" label="Acties"></vl-button>
                <vl-popover for="btn-acties" placement="bottom-end" trigger="click" hide-on-click>
                    <vl-popover-action-list>
                        <vl-popover-action icon="search">Zoeken</vl-popover-action>
                        <vl-popover-action icon="edit">Aanpassen</vl-popover-action>
                        <vl-popover-action icon="bin">Verwijderen</vl-popover-action>
                    </vl-popover-action-list>
                </vl-popover>
            </div>
        \`;
    }

    protected override createRenderRoot(): HTMLElement | DocumentFragment {
        return this;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-popover-menu': VlPopoverMenuComponent;
    }
}
`;function t(o){const n={h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
`,e.jsx(n.h1,{id:"popover---menu",children:"Popover - Menu"}),`
`,e.jsxs(n.p,{children:["Een popover-menu wordt gebruikt om extra acties weer te geven die niet direct zichtbaar zijn.",e.jsx("br",{}),`
Het wordt meestal afgebeeld mbv een kebab menu icoon (drie verticale punten).`]}),`
`,e.jsx(n.h2,{id:"gebruik",children:"Gebruik"}),`
`,e.jsx(n.p,{children:"Het popover-menu wordt gebruikt wanneer er beperkte ruimte is en niet alle acties direct weergeven kunnen worden."}),`
`,e.jsx(n.h2,{id:"patroon",children:"Patroon"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Icoon: Het menu wordt meestal afgebeeld mbv een kebab menu icoon (drie verticale punten)."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:`Plaatsing: Het menu kan worden geplaatst in de linkerbovenhoek, rechterbovenhoek of elders op de pagina, afhankelijk
van het patroon en de context.`}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:`Interactie: Door op het icoon te klikken, wordt het menu geopend en de extra acties weergegeven.
Het menu kan gesloten worden door opnieuw op het icoon te klikken, of ergens buiten het menu.`}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(p,{of:c,sourceState:"none"}),`
`,e.jsxs("details",{open:!0,children:[e.jsx("summary",{children:"Code"}),e.jsx(l,{code:s,language:"ts",dark:!0})]})]})}function h(o={}){const{wrapper:n}={...r(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{h as default};
