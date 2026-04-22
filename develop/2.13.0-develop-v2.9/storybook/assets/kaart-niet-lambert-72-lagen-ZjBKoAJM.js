import{u as o,j as e,M as m,C as i,S as n}from"./iframe-aAtdr__L.js";import{m as s,K as l}from"./kaart-niet-lambert-72-lagen.stories-3AdizSlE.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-base-layer--WplTurS.js";import"./vl-map-click-action--h-a6fRY.js";import"./vl-map-draw-action-CWEQFH_U.js";import"./vl-map-layer-action-Dcswm32r.js";import"./composite-vector-layer-HEAOeAjh.js";import"./vl-map-vector-layer-42vI7yNd.js";import"./vl-map-draw-line-action-CWFydi0p.js";import"./vl-map-draw-point-action-CqiEY9pW.js";import"./vl-map-draw-polygon-action-BGEEp4vh.js";import"./vl-map-measure-control-BrWeSFGM.js";import"./vl-map-control.mixin-BGy50Fpk.js";import"./vl-map-delete-action-C2PjABNE.js";import"./select-action-Ba9tMqGL.js";import"./vl-map-modify-action-BlCNiUfY.js";import"./vl-map-select-actions-Bo66RDXi.js";import"./vl-map-select-action-B4CYIJmE.js";import"./vl-map-base-layer-grb-gray-Cc4JenHq.js";import"./vl-map-base-layer-grb-ortho-CYgZTO6o.js";import"./vl-map-base-layer-grb-D4QbcDhP.js";import"./vl-map-action-control-DL7Ilsqs.js";import"./vl-map-action-controls-CIjH1wdO.js";import"./vl-map-current-location-CGjQFiOB.js";import"./vl-map-layer-circle-style-CEaiCq5i.js";import"./vl-map-layer-switcher-BLuyu-Cm.js";import"./vl-checkbox.component-DIOV2u4x.js";import"./vl-datepicker.component-DroSrUTc.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-fieldset.component-CBJ3Dwav.js";import"./vl-input-field-masked.component-Chq9N1ul.js";import"./vl-radio.component-Bio8-SwX.js";import"./vl-radio-group.component-B8TpxYt_.js";import"./vl-select.component-CPY3amz9.js";import"./vl-select-rich.component-DUfvf59G.js";import"./vl-textarea.component-BMidRRhi.js";import"./vl-textarea-rich.component-CIG315zy.js";import"./vl-upload.component-DUjTvZh5.js";import"./vl-upload-progress.component-DCbMC6_6.js";import"./vl-map-features-layer-DjO3748L.js";import"./vl-map-wfs-layer-Do_Ir5rM.js";import"./vl-map-image-wms-layer-DG1xVJAP.js";import"./vl-map-wms-layer-C0CYRwSs.js";import"./vl-map-tiled-wms-layer-DRVopc8u.js";import"./vl-map-xyz-wms-layer-DwtT5UG1.js";import"./vl-map-wmts-layer-DXvuuXye.js";import"./vl-map-legend-HEeg2brO.js";import"./vl-map-loading-indicator-Ciaf3iIk.js";import"./vl-select-location-zA4X1tux.js";import"./vl-map-overview-map-CsxGuQNP.js";import"./vl-map-search-FhG54zjN.js";import"./vl-map-side-sheet-DjB1PXGl.js";import"./vl-map-side-sheet-menu-item-BS9TWXMK.js";const p=`import { registerWebComponents, webComponent } from '@domg-wc/common';
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
