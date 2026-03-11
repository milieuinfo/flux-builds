import{u as o,j as e,M as m,C as i,S as n}from"./iframe-BWsn3Pr7.js";import{m as s,K as l}from"./kaart-niet-lambert-72-lagen.stories-DvQZOxEg.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-base-layer-GzsTO7HG.js";import"./vl-map-click-action-DMe2HhxC.js";import"./vl-map-draw-action-B14SSJ_U.js";import"./vl-map-layer-action-CD-Gkycv.js";import"./composite-vector-layer-C07dCxjT.js";import"./vl-map-vector-layer-OiGP_esM.js";import"./vl-map-draw-line-action-CizfzRCC.js";import"./vl-map-draw-point-action-Bi64jStX.js";import"./vl-map-draw-polygon-action-C4ZOemUM.js";import"./vl-map-measure-control-DDz-lOKz.js";import"./vl-map-control.mixin-CM6iG9Rq.js";import"./vl-map-delete-action-CKaiWbAZ.js";import"./select-action-DsbZpBlF.js";import"./vl-map-modify-action-TYDyT2RE.js";import"./vl-map-select-actions-BURUqwCr.js";import"./vl-map-select-action-VKgOSDJP.js";import"./vl-map-base-layer-grb-gray-DkR4pSJA.js";import"./vl-map-base-layer-grb-ortho--jg4cpGm.js";import"./vl-map-base-layer-grb-B6xfyXCn.js";import"./vl-map-action-control-CChaQMyr.js";import"./vl-map-action-controls-BhrJQ_wO.js";import"./vl-map-current-location-Dbe2oz5o.js";import"./vl-map-layer-circle-style-Tr5dao-V.js";import"./vl-map-layer-switcher-DZTSv7v7.js";import"./vl-checkbox.component-CvVVUNDF.js";import"./vl-datepicker.component-CGTacbZy.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-fieldset.component-CEX40_0t.js";import"./vl-input-field-masked.component-JDC2nPd7.js";import"./vl-radio.component-CHlVTLth.js";import"./vl-radio-group.component-CE7zrAt5.js";import"./vl-select.component-BeclDyWK.js";import"./vl-select-rich.component-6VfhK8u2.js";import"./vl-textarea.component-DAqVE4Ft.js";import"./vl-textarea-rich.component-Bl1Wf8Pb.js";import"./vl-upload.component-CmniMp_T.js";import"./vl-upload-progress.component-By6VmyDp.js";import"./vl-map-features-layer-DbA6_kY7.js";import"./vl-map-wfs-layer-CBY8nOTK.js";import"./vl-map-image-wms-layer-DQYMBHno.js";import"./vl-map-wms-layer-CUmdLDwC.js";import"./vl-map-tiled-wms-layer-BDIn_s-X.js";import"./vl-map-xyz-wms-layer-DdO-PS0T.js";import"./vl-map-wmts-layer-cHLO6sxl.js";import"./vl-map-legend-D5oYtTnF.js";import"./vl-map-loading-indicator-B1WNAVBi.js";import"./vl-select-location-D4l-89J5.js";import"./vl-map-overview-map-BIxJAWmI.js";import"./vl-map-search-trI4XUn2.js";import"./vl-map-side-sheet-rG3r5cet.js";import"./vl-map-side-sheet-menu-item-BJhBW6Ly.js";const p=`import { registerWebComponents, webComponent } from '@domg-wc/common';
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
