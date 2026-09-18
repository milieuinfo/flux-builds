import{u as o,j as e,M as m,C as i,S as n}from"./iframe-BoAZAq4i.js";import{m as s,K as l}from"./kaart-niet-lambert-72-lagen.stories-CqbCwk3f.js";import"./preload-helper-PPVm8Dsz.js";import"./vl-map-base-layer-CSzd67mT.js";import"./vl-map-click-action-UysFIxXg.js";import"./vl-map-draw-action-B4JB-4vu.js";import"./vl-map-layer-action-Ox9VO8Qq.js";import"./composite-vector-layer-D82xU95q.js";import"./vl-map-vector-layer-CMgbYfjV.js";import"./vl-map-draw-line-action-DAWD8Q0L.js";import"./vl-map-draw-point-action-CAhyBtNG.js";import"./vl-map-draw-polygon-action-BxXDtTcR.js";import"./vl-map-measure-control-CzwQko-l.js";import"./vl-map-control.mixin-QoD7sYe9.js";import"./vl-map-delete-action-BLvt5ktm.js";import"./select-action-L5IJ3Xyv.js";import"./vl-map-modify-action-BvGy5CUW.js";import"./vl-map-select-actions-4RSHVsz_.js";import"./vl-map-select-action-DsY50L1K.js";import"./vl-map-base-layer-grb-gray-BzQOV22N.js";import"./vl-map-base-layer-grb-ortho-D7lE0rJA.js";import"./vl-map-base-layer-grb-yvC5f4t9.js";import"./vl-map-action-control-2ulqjheY.js";import"./vl-map-action-controls-fb_kSefZ.js";import"./vl-map-current-location-BYkl6Bf2.js";import"./vl-map-layer-circle-style-CXC49XkD.js";import"./vl-map-layer-switcher-CSF-bxZv.js";import"./vl-checkbox.component-BOXqtNWb.js";import"./vl-datepicker.component-DjlXFHEl.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-fieldset.component-ChHjnN1i.js";import"./vl-input-field-masked.component-xgAwa1Uf.js";import"./vl-radio.component-DGlLMB-h.js";import"./vl-radio-group.component-D2h4yERQ.js";import"./vl-select.component-DubDIdHF.js";import"./vl-select-rich.component-B-ryN6LK.js";import"./vl-textarea.component-Cv_HVWwa.js";import"./vl-textarea-rich.component-Bw6R3_t6.js";import"./vl-upload.component-DPyi8C5w.js";import"./vl-upload-progress.component-CNG0YwiU.js";import"./vl-map-features-layer-DP0u00NZ.js";import"./vl-map-wfs-layer-CHYCTYcK.js";import"./vl-map-image-wms-layer-Cm_wQ72c.js";import"./vl-map-wms-layer-C6F2Cryj.js";import"./vl-map-tiled-wms-layer-CkD-P6uq.js";import"./vl-map-xyz-wms-layer-BcnLcXyU.js";import"./vl-map-wmts-layer-o-aqNTcM.js";import"./vl-map-legend-CfWnvqoh.js";import"./vl-map-loading-indicator-QW7LK6ON.js";import"./vl-select-location-BHbZhbxt.js";import"./vl-map-overview-map-C7r8VT_W.js";import"./vl-map-search-1fAwCBlv.js";import"./vl-map-side-sheet-Bt6WIvL3.js";import"./vl-map-side-sheet-menu-item-C9nSP2D_.js";const p=`import { registerWebComponents, webComponent } from '@domg-wc/common';
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
