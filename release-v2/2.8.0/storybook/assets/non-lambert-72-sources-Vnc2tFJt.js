import{u as o,j as e,M as m,C as i,S as n}from"./iframe-BQb9mjVp.js";import{m as s,D as l}from"./non-lambert-72-sources.stories-Fyld56sz.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-base-layer-BdAzFV8b.js";import"./vl-map-click-action-BDa6BrEp.js";import"./vl-map-draw-action-CqyNILdv.js";import"./vl-map-layer-action-BSO4v7MM.js";import"./composite-vector-layer-DylbnvOZ.js";import"./vl-map-vector-layer-CoXyZKmI.js";import"./vl-map-draw-line-action-DZhojuJL.js";import"./vl-map-draw-point-action-CR7ddRkX.js";import"./vl-map-draw-polygon-action-CqjX-jcV.js";import"./vl-map-measure-control-C1Tq1kC8.js";import"./vl-map-control.mixin-DywshGkm.js";import"./vl-map-delete-action-BBWXc5FR.js";import"./select-action-CX2hfnzI.js";import"./vl-map-modify-action-yO-hY2gK.js";import"./vl-map-select-actions-D0dOlCa7.js";import"./vl-map-select-action-DXLaA25z.js";import"./vl-map-base-layer-grb-gray-DZZs_CZf.js";import"./vl-map-base-layer-grb-ortho-BZOvz_8L.js";import"./vl-map-base-layer-grb-BQddeTw-.js";import"./vl-map-action-control-DneuXg4s.js";import"./vl-map-action-controls-DcJGcngw.js";import"./vl-map-current-location-CYlq4gRi.js";import"./vl-map-layer-circle-style-CR8UDc62.js";import"./vl-map-layer-switcher-BYi95WWp.js";import"./vl-checkbox.component-DXi6WwO0.js";import"./vl-datepicker.component-CVLjVc3J.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-input-field-masked.component-qycCnsrx.js";import"./vl-radio.component-HF0vGzer.js";import"./vl-radio-group.component-D0wYPqVJ.js";import"./vl-select.component-BypI6XzH.js";import"./vl-select-rich.component-Cx8fXtGT.js";import"./vl-textarea.component-DzPq4Vrh.js";import"./vl-textarea-rich.component-D2wM1BUa.js";import"./vl-upload.component-CiF30Vri.js";import"./vl-upload-progress.component-DYyNM58H.js";import"./vl-map-features-layer-naQh5VhU.js";import"./vl-map-wfs-layer-BXqXQMzf.js";import"./vl-map-image-wms-layer-D7F4awFb.js";import"./vl-map-wms-layer-4KJs2H1c.js";import"./vl-map-tiled-wms-layer-CBrc2nHP.js";import"./vl-map-xyz-wms-layer-BHRgQGsL.js";import"./vl-map-wmts-layer-BEeYehhO.js";import"./vl-map-legend-CZXgmM10.js";import"./vl-map-loading-indicator-C12p7uC5.js";import"./vl-select-location-Bq5mOnKR.js";import"./vl-map-overview-map-DGg4VIZc.js";import"./vl-map-search-OAyLIhbe.js";import"./vl-map-side-sheet-DyZSQRmO.js";import"./vl-map-side-sheet-menu-item-DsVu6cGj.js";const p=`import { registerWebComponents, webComponent } from '@domg-wc/common';
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
