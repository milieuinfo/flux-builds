import{u as o,j as e,M as m,C as i,S as n}from"./iframe-CYuKbPIU.js";import{m as s,D as l}from"./non-lambert-72-sources.stories-lGGO9G2b.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-base-layer-LVSVMNMu.js";import"./vl-map-click-action-qzgLDNCY.js";import"./vl-map-draw-action-Dgd3Glgg.js";import"./vl-map-layer-action-BwkAx8VH.js";import"./composite-vector-layer-YXjaPH-f.js";import"./vl-map-vector-layer-DX-Re3Or.js";import"./vl-map-draw-line-action-BbAa1W7C.js";import"./vl-map-draw-point-action-DbwXZMcr.js";import"./vl-map-draw-polygon-action-BFXCacc0.js";import"./vl-map-measure-control-DhrZjO_A.js";import"./vl-map-control.mixin-CT4kRsO0.js";import"./vl-map-delete-action-DgwE4ZMY.js";import"./select-action-BjgyWK-D.js";import"./vl-map-modify-action-Cl9TbQ2D.js";import"./vl-map-select-actions-ZSiVMIg5.js";import"./vl-map-select-action-DupxeA5Y.js";import"./vl-map-base-layer-grb-gray-DfQGTfFu.js";import"./vl-map-base-layer-grb-ortho-BSy0vxh6.js";import"./vl-map-base-layer-grb-DQtF2QwZ.js";import"./vl-map-action-control-Cfo7es_q.js";import"./vl-map-action-controls-lsJVCPHF.js";import"./vl-map-current-location-hajA9gzx.js";import"./vl-map-layer-circle-style-DWIFxyl7.js";import"./vl-map-layer-switcher-B3JmLGbS.js";import"./vl-checkbox.component-C49Iumfs.js";import"./vl-datepicker.component-BP40-iVe.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-fieldset.component-BT-o0TdA.js";import"./vl-input-field-masked.component-BveMZxzc.js";import"./vl-radio.component-hwfXcKxP.js";import"./vl-radio-group.component-C8gC7BmN.js";import"./vl-select.component-6g5kFKgt.js";import"./vl-select-rich.component-DtV_8s-w.js";import"./vl-textarea.component-DuSmPQH1.js";import"./vl-textarea-rich.component-JN7e0g4F.js";import"./vl-upload.component-Dwvrbdbs.js";import"./vl-upload-progress.component-DVCZ4MKQ.js";import"./vl-map-features-layer-yy_LUlFQ.js";import"./vl-map-wfs-layer-yGdFUX8s.js";import"./vl-map-image-wms-layer-MS4S6xQ9.js";import"./vl-map-wms-layer-CiYoJ4Mv.js";import"./vl-map-tiled-wms-layer-a5bMlAif.js";import"./vl-map-xyz-wms-layer-C57yF_4g.js";import"./vl-map-wmts-layer-p1J6AvGU.js";import"./vl-map-legend-jZyL7jTw.js";import"./vl-map-loading-indicator-Bh05IgSB.js";import"./vl-select-location-jODQZ-5G.js";import"./vl-map-overview-map-DroiHk44.js";import"./vl-map-search-CRiJlB_2.js";import"./vl-map-side-sheet-mEzDRYJ0.js";import"./vl-map-side-sheet-menu-item-BO3xLw0m.js";const p=`import { registerWebComponents, webComponent } from '@domg-wc/common';
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
`,e.jsxs("details",{open:!0,children:[e.jsx("summary",{children:"Code"}),e.jsx(n,{code:p,language:"ts",dark:!0})]})]})}function de(r={}){const{wrapper:t}={...o(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(a,{...r})}):a(r)}export{de as default};
