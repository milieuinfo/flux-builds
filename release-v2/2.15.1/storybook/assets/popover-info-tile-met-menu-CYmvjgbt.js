import{u as i,j as e,M as r,C as l,S as s}from"./iframe-nqJ0ju39.js";import{p,P as a}from"./popover-info-tile-met-menu.stories-BFmVnalu.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-popover-menu-info-tile.component-CnRyOYZH.js";const c=`import { registerWebComponents, webComponent } from '@domg-wc/common';
import { VlButtonComponent } from '@domg-wc/components/atom';
import { VlInfoTile, VlPopoverComponent } from '@domg-wc/components/block';
import { vlLegacyStyles } from '@domg-wc/styles';
import { css, CSSResult, html, LitElement } from 'lit';

@webComponent('vl-popover-menu-info-tile')
export class VlPopoverMenuInfoTileComponent extends LitElement {
    static {
        registerWebComponents([VlInfoTile, VlPopoverComponent, VlButtonComponent]);
    }

    static override get styles(): (CSSResult | CSSResult[])[] {
        return [vlLegacyStyles, css\`\`];
    }

    override render() {
        return html\`
            <vl-info-tile toggleable>
                <span slot="title">Broos Deprez</span>
                <span slot="subtitle">Uw zoon (19.05.2005)</span>
                <div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>
                <span slot="menu">
                    <vl-button ghost icon="nav-show-more-vertical" id="btn-acties" label="Acties"></vl-button>
                    <vl-popover for="btn-acties" placement="bottom-end">
                        <vl-popover-action-list>
                            <vl-popover-action icon="search">Zoeken</vl-popover-action>
                            <vl-popover-action icon="edit">Aanpassen</vl-popover-action>
                            <vl-popover-action icon="bin">Verwijderen</vl-popover-action>
                        </vl-popover-action-list>
                    </vl-popover>
                </span>
            </vl-info-tile>
        \`;
    }

    protected override createRenderRoot(): HTMLElement | DocumentFragment {
        return this;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-popover-menu-info-tile': VlPopoverMenuInfoTileComponent;
    }
}
`;function t(n){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:p}),`
`,e.jsx(o.h1,{id:"popover---info-tile-met-menu",children:"Popover - Info Tile met Menu"}),`
`,e.jsxs(o.p,{children:["De info tile wordt gebruikt om inhoud te organiseren in een uitklapbaar formaat.",e.jsx("br",{}),`
Elke info tile kan een popover-menu bevatten dat specifieke acties aanbiedt.`]}),`
`,e.jsx(o.h2,{id:"gebruik",children:"Gebruik"}),`
`,e.jsx(o.p,{children:"De info tile met popover-menu wordt gebruikt om inhoud te structureren en gebruikers de mogelijkheid te geven om specifieke acties uit te voeren."}),`
`,e.jsx(o.h2,{id:"patroon",children:"Patroon"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[`
`,e.jsx(o.p,{children:"Info tile: elke info tile bestaat uit een titel, subtitel en een inhoudsgebied dat optioneel kan worden uit- of ingeklapt."}),`
`]}),`
`,e.jsxs(o.li,{children:[`
`,e.jsx(o.p,{children:`Popover-menu: elke info tile kan een popover-menu bevatten dat specifieke acties aanbiedt.
Het menu wordt meestal afgebeeld mbv een kebab menu icoon (drie verticale punten).`}),`
`]}),`
`,e.jsxs(o.li,{children:[`
`,e.jsxs(o.p,{children:["Interactie: gebruikers kunnen op de titel klikken om de info tile uit- of in te klappen, indien deze het attribuut ",e.jsx(o.code,{children:"toggleable"}),` heeft.
Door op het popover-menu icoon te klikken wordt het menu geopend en de extra acties weergegeven.`]}),`
`]}),`
`]}),`
`,e.jsx(o.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(l,{of:a,sourceState:"none"}),`
`,e.jsxs("details",{open:!0,children:[e.jsx("summary",{children:"Code"}),e.jsx(s,{code:c,language:"ts",dark:!0})]})]})}function f(n={}){const{wrapper:o}={...i(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(t,{...n})}):t(n)}export{f as default};
