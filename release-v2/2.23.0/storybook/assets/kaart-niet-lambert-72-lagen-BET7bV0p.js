import{u as o,j as e,M as m,C as i,S as n}from"./iframe-Cv28D2NX.js";import{m as s,K as l}from"./kaart-niet-lambert-72-lagen.stories-ByHqZHaC.js";import"./preload-helper-PPVm8Dsz.js";import"./vl-map-base-layer-CmFLB2kf.js";import"./vl-map-click-action-D_Ho6S5O.js";import"./vl-map-draw-action-enDB39H3.js";import"./vl-map-layer-action-BuSnoCGf.js";import"./composite-vector-layer-CSSpqbq6.js";import"./vl-map-vector-layer-CQXQ1CFV.js";import"./vl-map-draw-line-action-u_czBKY-.js";import"./vl-map-draw-point-action-BnpkuV-b.js";import"./vl-map-draw-polygon-action-DdgA_1zp.js";import"./vl-map-measure-control-BUb8zmwh.js";import"./vl-map-control.mixin-C2AzGcxB.js";import"./vl-map-delete-action-BFA4TYKV.js";import"./select-action-Cl9Wx85P.js";import"./vl-map-modify-action-zqDLl8V4.js";import"./vl-map-select-actions-BFc5xdAy.js";import"./vl-map-select-action-CLqLfyMS.js";import"./vl-map-base-layer-grb-gray-B3yI26-B.js";import"./vl-map-base-layer-grb-ortho-Bi6K5MjX.js";import"./vl-map-base-layer-grb-BaWaZvxE.js";import"./vl-map-action-control-Bnl13FTA.js";import"./vl-map-action-controls-DrWCaOKJ.js";import"./vl-map-current-location-Cl0kDltj.js";import"./vl-map-layer-circle-style-BBoDWqcR.js";import"./vl-map-layer-switcher-B4FcsOjx.js";import"./vl-checkbox.component-Cl-C3bHb.js";import"./vl-datepicker.component-gIhsylI-.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-fieldset.component-DAfAyWPV.js";import"./vl-input-field-masked.component-DrIBY--W.js";import"./vl-radio.component-BMGk1PbP.js";import"./vl-radio-group.component-BVQMwWW-.js";import"./vl-select.component-DAztbrd3.js";import"./vl-select-rich.component-Bt8ZFZBv.js";import"./vl-textarea.component-1SQHWSt5.js";import"./vl-textarea-rich.component-jUqK0iT2.js";import"./vl-upload.component-RSddKL9f.js";import"./vl-upload-progress.component-DOm2qrBt.js";import"./vl-map-features-layer-CEF7bfWd.js";import"./vl-map-wfs-layer-ZncIm8XG.js";import"./vl-map-image-wms-layer-D7zT7t5q.js";import"./vl-map-wms-layer-CVjCwDx7.js";import"./vl-map-tiled-wms-layer-Cd1jgyYt.js";import"./vl-map-xyz-wms-layer-C9m9hyEM.js";import"./vl-map-wmts-layer-UPCKuYcb.js";import"./vl-map-legend-CilSZeqq.js";import"./vl-map-loading-indicator-BWok-pNf.js";import"./vl-select-location-CzP7pUKw.js";import"./vl-map-overview-map-DM94IL0U.js";import"./vl-map-search-CXL0GTqw.js";import"./vl-map-side-sheet-NRj0PdiO.js";import"./vl-map-side-sheet-menu-item-B713JcqH.js";const p=`import { registerWebComponents, webComponent } from '@domg-wc/common';
import { VlMap, VlMapBaseLayerGRBGray, VlMapTiledWmsLayer } from '@domg-wc/map';
import { CSSResult, LitElement, html } from 'lit';

@webComponent('vl-map-non-lambert-72-sources')
export class VlMapNonLambert72Sources extends LitElement {
    static {
        registerWebComponents([VlMap, VlMapTiledWmsLayer, VlMapBaseLayerGRBGray]);
    }

    static override get styles(): (CSSResult | CSSResult[])[] {
        return [];
    }

    render() {
        return html\`
            <vl-map lambert2008>
                <!--
                    Test andere niet-lambert 72 laag met volledig zoombare wereldkaart (EPSG:3857)
                    Custom background layer met OpenStreetMap tiles
                -->
                <vl-map-baselayer-grb-gray
                    background-layer
                    background-type="xyz"
                    background-options="\${JSON.stringify({
                        url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                        attributions: 'Tiles © OpenStreetMap contributors',
                    })}"
                ></vl-map-baselayer-grb-gray>

                <!--
                    Test andere niet-lambert 72 laag
                    Catalogus: https://www.vlaanderen.be/datavindplaats/catalogus/overstromingsgevoelige-gebieden-vanuit-de-zee
                    Referentiesysteem: WGS 84 / Pseudo-Mercator (EPSG:3857)
                -->
                <vl-map-tiled-wms-layer
                    url="https://inspirepub.waterinfo.be/arcgis/services/informatieplicht/overstromingsgevoelige_gebieden_vanuit_de_zee/MapServer/WMSServer?"
                    layers="0"
                    name="Overstromingsgevoelige gebieden vanuit de zee"
                ></vl-map-tiled-wms-layer>

                <!--
                    Test andere niet-lambert 72 laag
                    Lambert 2008 test data uit: https://www.vlaanderen.be/datavindplaats/catalogus/testdata-transformatie-lambert-72-naar-lambert-2008-coordinaten
                -->
                <vl-map-tiled-wms-layer
                    url="https://www.mercator.vlaanderen.be/raadpleegdienstenmercatorpubliek/ows?"
                    layers="rs:rs_testdata_lamb08"
                    opacity="0.3"
                    name="Test Data Lambert 2008"
                ></vl-map-tiled-wms-layer>
            </vl-map>
        \`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-map-non-lambert-72-sources': VlMapNonLambert72Sources;
    }
}
`;function a(r){const t={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:s}),`
`,e.jsx(t.h1,{id:"kaart---niet-lambert-72-lagen",children:"Kaart - niet Lambert-72 lagen"}),`
`,e.jsx(t.p,{children:"Dit is een voorbeeld van hoe je niet Lambert-72 lagen kan toevoegen aan een kaart."}),`
`,e.jsx(t.h2,{id:"componenten",children:"Componenten"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"/docs/map-map--documentatie",children:"vl-map"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"/docs/map-baselayer-baselayer-grb-gray--documentatie",children:"vl-map-baselayer-grb-gray"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"/docs/map-layer-wms-layer-tiled-wms-layer--documentatie",children:"vl-map-tiled-wms-layer"})}),`
`]}),`
`,e.jsx(i,{of:l,sourceState:"none"}),`
`,e.jsxs("details",{open:!0,children:[e.jsx("summary",{children:"Code"}),e.jsx(n,{code:p,language:"ts",dark:!0})]})]})}function de(r={}){const{wrapper:t}={...o(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(a,{...r})}):a(r)}export{de as default};
