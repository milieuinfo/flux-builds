import{u as o,j as e,M as m,C as i,S as n}from"./iframe-B0laZkYe.js";import{m as s,K as l}from"./kaart-niet-lambert-72-lagen.stories-_z8dQROM.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-base-layer-BcyU3_Yv.js";import"./vl-map-click-action-ChZ2BYNP.js";import"./vl-map-draw-action-BUAlej4l.js";import"./vl-map-layer-action-bcfn5gcP.js";import"./composite-vector-layer-BebEQ5Cp.js";import"./vl-map-vector-layer-BuSv7DVJ.js";import"./vl-map-draw-line-action-ZBoppaOX.js";import"./vl-map-draw-point-action-BKsLgg3T.js";import"./vl-map-draw-polygon-action-BI3s_hb_.js";import"./vl-map-measure-control-C5SuwuDB.js";import"./vl-map-control.mixin-ysBYNQC2.js";import"./vl-map-delete-action-BtzAKBG2.js";import"./select-action-C1G1jETF.js";import"./vl-map-modify-action-BbMzPTJL.js";import"./vl-map-select-actions-DcPqSdHK.js";import"./vl-map-select-action-FDAZsagL.js";import"./vl-map-base-layer-grb-gray-Qhg6lr35.js";import"./vl-map-base-layer-grb-ortho-CimBmPLp.js";import"./vl-map-base-layer-grb-CYyY_yJ5.js";import"./vl-map-action-control-DjJPtDJV.js";import"./vl-map-action-controls-isruLONW.js";import"./vl-map-current-location--tmvpe0E.js";import"./vl-map-layer-circle-style-DTg37Z3_.js";import"./vl-map-layer-switcher-M2NoLzCd.js";import"./vl-checkbox.component-Di7peM8v.js";import"./vl-datepicker.component-DlRL_EoA.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-fieldset.component-Bn8r0_Ra.js";import"./vl-input-field-masked.component-CxOJldmZ.js";import"./vl-radio.component-B0VzWM9w.js";import"./vl-radio-group.component-Bbvuqwo7.js";import"./vl-select.component-DvDVJX_H.js";import"./vl-select-rich.component-CrlR4fif.js";import"./vl-textarea.component-CKzynvyQ.js";import"./vl-textarea-rich.component-B47eK6zY.js";import"./vl-upload.component-DnznfWTr.js";import"./vl-upload-progress.component-nq3Nhojs.js";import"./vl-map-features-layer-DcUVTltx.js";import"./vl-map-wfs-layer-LyXoHrCf.js";import"./vl-map-image-wms-layer-CAZa2Rqq.js";import"./vl-map-wms-layer-YACAybc-.js";import"./vl-map-tiled-wms-layer-DsjigTR-.js";import"./vl-map-xyz-wms-layer-BSh50JSM.js";import"./vl-map-wmts-layer-uIof2bLG.js";import"./vl-map-legend-t6UUMedp.js";import"./vl-map-loading-indicator-pqzHIgm7.js";import"./vl-select-location-BN0TsEE2.js";import"./vl-map-overview-map-gDpAkbxx.js";import"./vl-map-search-DKsq4knc.js";import"./vl-map-side-sheet-PWTWXFYa.js";import"./vl-map-side-sheet-menu-item-NEBtinP7.js";const p=`import { registerWebComponents, webComponent } from '@domg-wc/common';
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
