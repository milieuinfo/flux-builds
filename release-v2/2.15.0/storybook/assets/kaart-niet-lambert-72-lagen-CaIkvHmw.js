import{u as o,j as e,M as m,C as i,S as n}from"./iframe-CsDE-vVI.js";import{m as s,K as l}from"./kaart-niet-lambert-72-lagen.stories-BaugzOie.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-base-layer-CgI99i60.js";import"./vl-map-click-action-BNjKIMGU.js";import"./vl-map-draw-action-BQiuTTyV.js";import"./vl-map-layer-action-OgcuTYDR.js";import"./composite-vector-layer-CVyQfOka.js";import"./vl-map-vector-layer-BeqmNVfV.js";import"./vl-map-draw-line-action-CH5Funez.js";import"./vl-map-draw-point-action-padjFhHm.js";import"./vl-map-draw-polygon-action-DuVosHE8.js";import"./vl-map-measure-control-WFOVjKVm.js";import"./vl-map-control.mixin-CwNWN2GT.js";import"./vl-map-delete-action-DQR82NMW.js";import"./select-action-BrZAiYIv.js";import"./vl-map-modify-action-Bzq-NALm.js";import"./vl-map-select-actions-C1sqn-Cp.js";import"./vl-map-select-action-D7KtcGNE.js";import"./vl-map-base-layer-grb-gray-BEd-NMxn.js";import"./vl-map-base-layer-grb-ortho-DMUN25x2.js";import"./vl-map-base-layer-grb-wEYCmMuY.js";import"./vl-map-action-control-CpQ-dRws.js";import"./vl-map-action-controls-CSZMrACR.js";import"./vl-map-current-location-Bqk_448-.js";import"./vl-map-layer-circle-style-B2Z5dFH3.js";import"./vl-map-layer-switcher-DOdvcrrZ.js";import"./vl-checkbox.component-DNAaIDfV.js";import"./vl-datepicker.component-B8xEwRRZ.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-fieldset.component-BQ--xd-F.js";import"./vl-input-field-masked.component-DWeWO-SS.js";import"./vl-radio.component-C8K4TTrz.js";import"./vl-radio-group.component-ssmdRgtT.js";import"./vl-select.component-Cs0d-V9w.js";import"./vl-select-rich.component-Dmhm0e3m.js";import"./vl-textarea.component-Cf6kOsHf.js";import"./vl-textarea-rich.component-DmnbcJ0u.js";import"./vl-upload.component-CFNkhe3E.js";import"./vl-upload-progress.component-BIDd-DNQ.js";import"./vl-map-features-layer-C-OVASUA.js";import"./vl-map-wfs-layer-BH0THUDP.js";import"./vl-map-image-wms-layer-Dup8btDH.js";import"./vl-map-wms-layer-1f6tt5Ai.js";import"./vl-map-tiled-wms-layer-Ca5FSngm.js";import"./vl-map-xyz-wms-layer-DkvfICkF.js";import"./vl-map-wmts-layer-BsecCf2r.js";import"./vl-map-legend-DgYDcVks.js";import"./vl-map-loading-indicator-DdFk-Cye.js";import"./vl-select-location-A9To6Wq_.js";import"./vl-map-overview-map-K8smGPET.js";import"./vl-map-search-CatGr08s.js";import"./vl-map-side-sheet-omb3tSEG.js";import"./vl-map-side-sheet-menu-item-CisgDops.js";const p=`import { registerWebComponents, webComponent } from '@domg-wc/common';
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
