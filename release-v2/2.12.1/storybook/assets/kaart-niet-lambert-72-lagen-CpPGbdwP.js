import{u as o,j as e,M as m,C as i,S as n}from"./iframe-B6HStWZE.js";import{m as s,K as l}from"./kaart-niet-lambert-72-lagen.stories-6abddhdn.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-base-layer-DGZE_dim.js";import"./vl-map-click-action-CSiD1I7I.js";import"./vl-map-draw-action-rTZOO8QL.js";import"./vl-map-layer-action-CT76jI4l.js";import"./composite-vector-layer-CCyVy-Yv.js";import"./vl-map-vector-layer-D_RMfCzv.js";import"./vl-map-draw-line-action-86epsaAO.js";import"./vl-map-draw-point-action-orEdIVbS.js";import"./vl-map-draw-polygon-action-_f-BbzoJ.js";import"./vl-map-measure-control-r5E7-o-x.js";import"./vl-map-control.mixin-BN-npn62.js";import"./vl-map-delete-action-Bwytkdlg.js";import"./select-action-DbemDLv9.js";import"./vl-map-modify-action-ChQaRHN1.js";import"./vl-map-select-actions-BC5C68SV.js";import"./vl-map-select-action-BuDmZen7.js";import"./vl-map-base-layer-grb-gray-BRjzCKoS.js";import"./vl-map-base-layer-grb-ortho-D3mUDd0g.js";import"./vl-map-base-layer-grb-z00N6B9M.js";import"./vl-map-action-control-Bj83loxP.js";import"./vl-map-action-controls-hSk1I3TC.js";import"./vl-map-current-location-Cs0RWUCx.js";import"./vl-map-layer-circle-style-Coqe8fXI.js";import"./vl-map-layer-switcher-BB6WYB_2.js";import"./vl-checkbox.component-DuLlUBhB.js";import"./vl-datepicker.component-C_GYwEcM.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-fieldset.component-DEy_74ja.js";import"./vl-input-field-masked.component-DWMh-2JO.js";import"./vl-radio.component-tVP72AaS.js";import"./vl-radio-group.component-DrS0BCmc.js";import"./vl-select.component-BL9ktR21.js";import"./vl-select-rich.component-BD7c3N1Y.js";import"./vl-textarea.component-nTHPmirY.js";import"./vl-textarea-rich.component-ByHEXvqu.js";import"./vl-upload.component-BNalYdck.js";import"./vl-upload-progress.component-DtItkzCQ.js";import"./vl-map-features-layer-DH5hL79O.js";import"./vl-map-wfs-layer-B8FinQQt.js";import"./vl-map-image-wms-layer-Rhih67Ve.js";import"./vl-map-wms-layer-C40bVVPb.js";import"./vl-map-tiled-wms-layer-C9kP5QlP.js";import"./vl-map-xyz-wms-layer-1kn95sle.js";import"./vl-map-wmts-layer-3fHe4hpU.js";import"./vl-map-legend-C57uYdC_.js";import"./vl-map-loading-indicator-BHnQTh70.js";import"./vl-select-location-CDmh8X4p.js";import"./vl-map-overview-map-B5pmmXY6.js";import"./vl-map-search-gYpaKOSM.js";import"./vl-map-side-sheet-Bj-mqcvc.js";import"./vl-map-side-sheet-menu-item-DdAeeLcS.js";const p=`import { registerWebComponents, webComponent } from '@domg-wc/common';
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
