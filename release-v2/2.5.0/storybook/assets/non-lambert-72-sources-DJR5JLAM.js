import{u as o,j as e,M as m,C as i,S as n}from"./iframe-CflcmDUD.js";import{m as s,D as l}from"./non-lambert-72-sources.stories-BXK2ygZC.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-base-layer-BvMalALX.js";import"./vl-map-click-action-Dyzje_xt.js";import"./vl-map-draw-action-2_7SBsl1.js";import"./vl-map-layer-action-C8bXaFii.js";import"./composite-vector-layer-CvVvypp2.js";import"./vl-map-vector-layer-flPUvAVN.js";import"./vl-map-draw-line-action-BcWm77_d.js";import"./vl-map-draw-point-action-Cpw_mgn8.js";import"./vl-map-draw-polygon-action-BvyEdN-L.js";import"./vl-map-measure-control-CItxBT_I.js";import"./vl-map-control.mixin-BqU_ilw0.js";import"./vl-map-delete-action-CT1uNGhw.js";import"./select-action-D7TIVeMp.js";import"./vl-map-modify-action-DfnBaLg0.js";import"./vl-map-select-actions-DQX1MlF-.js";import"./vl-map-select-action-B-dxTRbG.js";import"./vl-map-base-layer-grb-gray-Cuxf_f6a.js";import"./vl-map-base-layer-grb-ortho-CNYn_Zu3.js";import"./vl-map-base-layer-grb-CyfDYDfm.js";import"./vl-map-action-control-RCwjkhzF.js";import"./vl-map-action-controls-BhC5iX5i.js";import"./vl-map-current-location-BuqoZcl7.js";import"./vl-map-layer-circle-style-BLRSLB0w.js";import"./vl-map-layer-switcher-BsO687C9.js";import"./vl-checkbox.component-D4zgMdoi.js";import"./vl-datepicker.component-CgELEzZR.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-input-field-masked.component-DfsuPfBk.js";import"./vl-radio.component-Ra8Rh6YT.js";import"./vl-radio-group.component-BGDxo2T5.js";import"./vl-select.component-BMMIEVaD.js";import"./vl-select-rich.component-BsFMqeXH.js";import"./vl-textarea.component-C8hensF9.js";import"./vl-textarea-rich.component-Cwmhv0os.js";import"./vl-upload.component-Blk6WjMY.js";import"./vl-map-features-layer-D9owGkac.js";import"./vl-map-wfs-layer-Bprmt369.js";import"./vl-map-image-wms-layer-DlguOpwH.js";import"./vl-map-wms-layer-CBOUQbGF.js";import"./vl-map-tiled-wms-layer-DM-ghduw.js";import"./vl-map-xyz-wms-layer-CdTfNhvk.js";import"./vl-map-wmts-layer-CDKnbrGz.js";import"./vl-map-legend-hAGzbnEx.js";import"./vl-map-loading-indicator-Bx8dSXpm.js";import"./vl-select-location-DRwMe55W.js";import"./vl-map-overview-map-Bf0SBPQp.js";import"./vl-map-search-BX3PvXtL.js";import"./vl-map-side-sheet-jaKdd5na.js";import"./vl-map-side-sheet-menu-item-CoatbSFM.js";const p=`import { registerWebComponents, webComponent } from '@domg-wc/common';
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
`,e.jsx(t.h1,{id:"map---niet-lambert-72-lagen",children:"Map - niet-Lambert-72 lagen"}),`
`,e.jsx(t.p,{children:"Dit is een voorbeeld van hoe je niet-lambert-72 lagen kan toevoegen aan een kaart."}),`
`,e.jsx(t.h2,{id:"componenten",children:"Componenten"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"/docs/map-map--documentatie",children:"vl-map"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"/docs/map-baselayer-baselayer-grb-gray--documentatie",children:"vl-map-baselayer-grb-gray"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"/docs/map-layer-wms-layer-tiled-wms-layer--documentatie",children:"vl-map-tiled-wms-layer"})}),`
`]}),`
`,e.jsx(i,{of:l,sourceState:"none"}),`
`,e.jsxs("details",{open:!0,children:[e.jsx("summary",{children:"Code"}),e.jsx(n,{code:p,language:"ts",dark:!0})]})]})}function le(r={}){const{wrapper:t}={...o(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(a,{...r})}):a(r)}export{le as default};
