import{u as o,j as e,M as m,C as i,S as n}from"./iframe-C7eocPW2.js";import{m as s,D as l}from"./non-lambert-72-sources.stories-KLakKei7.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-base-layer-cTWRwMZ1.js";import"./vl-map-click-action-Bh_ZC6NN.js";import"./vl-map-draw-action-DrwAWnLO.js";import"./vl-map-layer-action-IsN3uIYB.js";import"./composite-vector-layer-DIgq-mgj.js";import"./vl-map-vector-layer-Pgy0vlWO.js";import"./vl-map-draw-line-action-BVWS65XM.js";import"./vl-map-draw-point-action-Cdwe-szy.js";import"./vl-map-draw-polygon-action-BHDuw9qk.js";import"./vl-map-measure-control-yaGeELpa.js";import"./vl-map-control.mixin-xKAW9KKs.js";import"./vl-map-delete-action-Bd7-q-YX.js";import"./select-action-Xy3SFUWc.js";import"./vl-map-modify-action-DZiLUyq1.js";import"./vl-map-select-actions-CRd_-UGa.js";import"./vl-map-select-action-BdGG49t2.js";import"./vl-map-base-layer-grb-gray-FUd93zzz.js";import"./vl-map-base-layer-grb-ortho-BvubvyWx.js";import"./vl-map-base-layer-grb-C8PHeAJn.js";import"./vl-map-action-control-BLjpsmqm.js";import"./vl-map-action-controls-BYy09BG2.js";import"./vl-map-current-location-CGZldEWJ.js";import"./vl-map-layer-circle-style-hYOEPOwN.js";import"./vl-map-layer-switcher-BGMg07i7.js";import"./vl-checkbox.component-fqljGoIJ.js";import"./vl-datepicker.component-CaI7c1zK.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-input-field-masked.component-CDZX6soo.js";import"./vl-radio.component-Lxgs_PqS.js";import"./vl-radio-group.component-Ch5F_1Yr.js";import"./vl-select.component-DbS55rlf.js";import"./vl-select-rich.component-Ddm3ot_S.js";import"./vl-textarea.component-BZkPAf39.js";import"./vl-textarea-rich.component-D-0h8uGI.js";import"./vl-upload.component-8zPgs-PI.js";import"./vl-upload-progress.component-DQ6fHp6d.js";import"./vl-map-features-layer-NSOc5KZr.js";import"./vl-map-wfs-layer-B5lEJXEo.js";import"./vl-map-image-wms-layer-BnVlyL2v.js";import"./vl-map-wms-layer-CAGkqb3e.js";import"./vl-map-tiled-wms-layer-_roAeVZ-.js";import"./vl-map-xyz-wms-layer-bUUT6U96.js";import"./vl-map-wmts-layer-DKJpmoGI.js";import"./vl-map-legend-DwiUkDZO.js";import"./vl-map-loading-indicator-PHZnxJdS.js";import"./vl-select-location-4_Sv7osc.js";import"./vl-map-overview-map-CV8UojEw.js";import"./vl-map-search-BiwgMuzG.js";import"./vl-map-side-sheet-Bji-8-BJ.js";import"./vl-map-side-sheet-menu-item-B-AzLaUr.js";const p=`import { registerWebComponents, webComponent } from '@domg-wc/common';
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
`,e.jsxs("details",{open:!0,children:[e.jsx("summary",{children:"Code"}),e.jsx(n,{code:p,language:"ts",dark:!0})]})]})}function pe(r={}){const{wrapper:t}={...o(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(a,{...r})}):a(r)}export{pe as default};
