import{u as o,j as e,M as m,C as i,S as n}from"./iframe-69xRVzLO.js";import{m as s,K as l}from"./kaart-niet-lambert-72-lagen.stories-BkNYL24z.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-base-layer-klRzOZNV.js";import"./vl-map-click-action-BIC0sls_.js";import"./vl-map-draw-action-C17RHQCq.js";import"./vl-map-layer-action-CuE0TrZj.js";import"./composite-vector-layer-4KC6RDYC.js";import"./vl-map-vector-layer-eJblKMeS.js";import"./vl-map-draw-line-action-D61UqBjz.js";import"./vl-map-draw-point-action-EtsioDEv.js";import"./vl-map-draw-polygon-action-k9dNpGj6.js";import"./vl-map-measure-control-DNh74CaB.js";import"./vl-map-control.mixin-C6ySCI9P.js";import"./vl-map-delete-action-DsmOm579.js";import"./select-action-CxuI_keR.js";import"./vl-map-modify-action-8H05a96G.js";import"./vl-map-select-actions-BDsFKuDt.js";import"./vl-map-select-action-CpPwTzQZ.js";import"./vl-map-base-layer-grb-gray-DlkCF-Sm.js";import"./vl-map-base-layer-grb-ortho-DPYHu5b4.js";import"./vl-map-base-layer-grb-BU2CzuFb.js";import"./vl-map-action-control-DVbKBd40.js";import"./vl-map-action-controls-CQzBjKDi.js";import"./vl-map-current-location-CB9Y0_gX.js";import"./vl-map-layer-circle-style-Dev8nCSp.js";import"./vl-map-layer-switcher-DCoQ0sg9.js";import"./vl-checkbox.component-YUF2NAyE.js";import"./vl-datepicker.component-CJk5oTe3.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-fieldset.component-BsRFYb5y.js";import"./vl-input-field-masked.component-Chk_8RDS.js";import"./vl-radio.component-BHdI6r1o.js";import"./vl-radio-group.component-CXE1VlBD.js";import"./vl-select.component-DjcSeoM9.js";import"./vl-select-rich.component-pbaJxKAT.js";import"./vl-textarea.component-3N-QACUu.js";import"./vl-textarea-rich.component-GzVVXRfn.js";import"./vl-upload.component-Bx3un35T.js";import"./vl-upload-progress.component-gTUoCtJA.js";import"./vl-map-features-layer-B63ykq_T.js";import"./vl-map-wfs-layer-BJYv0WGk.js";import"./vl-map-image-wms-layer-DDQe_msE.js";import"./vl-map-wms-layer-DEFtimel.js";import"./vl-map-tiled-wms-layer-BIfEFmcC.js";import"./vl-map-xyz-wms-layer-BW1u_6V4.js";import"./vl-map-wmts-layer-IHolzANZ.js";import"./vl-map-legend-DcPgMi9p.js";import"./vl-map-loading-indicator-B8If-YsO.js";import"./vl-select-location-2T19hJKR.js";import"./vl-map-overview-map-5zocCJes.js";import"./vl-map-search-CqOqN0GQ.js";import"./vl-map-side-sheet-BXQA05Hm.js";import"./vl-map-side-sheet-menu-item-7YpKRF11.js";const p=`import { registerWebComponents, webComponent } from '@domg-wc/common';
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
