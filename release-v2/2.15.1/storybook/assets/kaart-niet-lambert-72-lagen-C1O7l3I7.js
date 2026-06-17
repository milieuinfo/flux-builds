import{u as o,j as e,M as m,C as i,S as n}from"./iframe-nqJ0ju39.js";import{m as s,K as l}from"./kaart-niet-lambert-72-lagen.stories-D31NCqof.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-base-layer-BtxNVW9G.js";import"./vl-map-click-action-CxUdw_Se.js";import"./vl-map-draw-action-BWq5sEze.js";import"./vl-map-layer-action-CnxJeK5J.js";import"./composite-vector-layer-CKczwVYM.js";import"./vl-map-vector-layer-Djhd7vsB.js";import"./vl-map-draw-line-action-2qZaG7qz.js";import"./vl-map-draw-point-action-DCQviMBT.js";import"./vl-map-draw-polygon-action-CXJDgqGV.js";import"./vl-map-measure-control-Dv9WF-Jn.js";import"./vl-map-control.mixin-DD_Yn9Xv.js";import"./vl-map-delete-action-CnJdOHdP.js";import"./select-action-CetabMsG.js";import"./vl-map-modify-action-yxTnE93x.js";import"./vl-map-select-actions-CDdgcvDl.js";import"./vl-map-select-action-CRgeNZzR.js";import"./vl-map-base-layer-grb-gray-BXTId9yW.js";import"./vl-map-base-layer-grb-ortho-sBrSTjHB.js";import"./vl-map-base-layer-grb-DztzqVRI.js";import"./vl-map-action-control-DmnmT7R2.js";import"./vl-map-action-controls-Bo5MCopD.js";import"./vl-map-current-location-BsQc9IYB.js";import"./vl-map-layer-circle-style-hvMbLfoC.js";import"./vl-map-layer-switcher-DAfMAhD9.js";import"./vl-checkbox.component-kcGdx0dA.js";import"./vl-datepicker.component-LrijvSQq.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-fieldset.component-DHSdhx9W.js";import"./vl-input-field-masked.component-SpAs0qTF.js";import"./vl-radio.component-VdH70-oI.js";import"./vl-radio-group.component-BY5xfCg3.js";import"./vl-select.component-DRh-HxGq.js";import"./vl-select-rich.component-_K_EXuZK.js";import"./vl-textarea.component-D1tzSi4A.js";import"./vl-textarea-rich.component-CDfdsccr.js";import"./vl-upload.component-DC3JX4LC.js";import"./vl-upload-progress.component-DSz62Axb.js";import"./vl-map-features-layer-CD-FR9qL.js";import"./vl-map-wfs-layer-B8YU49wa.js";import"./vl-map-image-wms-layer-B3hEDpY2.js";import"./vl-map-wms-layer-DyHwiaLL.js";import"./vl-map-tiled-wms-layer-DsQZRTSK.js";import"./vl-map-xyz-wms-layer-4FxF2b4u.js";import"./vl-map-wmts-layer-DOTq8DGR.js";import"./vl-map-legend-CVLYp7ap.js";import"./vl-map-loading-indicator-Cl2VR2jt.js";import"./vl-select-location-CCFx3Ter.js";import"./vl-map-overview-map-CiHSRi4b.js";import"./vl-map-search-3-ZsZBuq.js";import"./vl-map-side-sheet-m80TBTyG.js";import"./vl-map-side-sheet-menu-item-DQ94Hb0j.js";const p=`import { registerWebComponents, webComponent } from '@domg-wc/common';
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
