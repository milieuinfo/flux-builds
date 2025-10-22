import{u as o,j as e,M as m,C as i,S as n}from"./iframe-Ds54rb_7.js";import{m as s,D as l}from"./non-lambert-72-sources.stories-CMDQiDjK.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-base-layer-CUICGl8E.js";import"./vl-map-click-action-ZOfwqeh5.js";import"./vl-map-draw-action-C9YPkWBK.js";import"./vl-map-layer-action-CylOCJtd.js";import"./composite-vector-layer-Br7RUl3I.js";import"./vl-map-vector-layer-9AlT0Pv4.js";import"./vl-map-draw-line-action-iR3tNL4B.js";import"./vl-map-draw-point-action-B3nkpYmS.js";import"./vl-map-draw-polygon-action-D8sFqZD4.js";import"./vl-map-measure-control-Bc52JtDk.js";import"./vl-map-control.mixin-CZAcZeo0.js";import"./vl-map-delete-action-CGKoS7VL.js";import"./select-action-CcWoJkZ9.js";import"./vl-map-modify-action-Cwu8NUYC.js";import"./vl-map-select-actions-BPQDnoMR.js";import"./vl-map-select-action-DhUMG_so.js";import"./vl-map-base-layer-grb-gray-DTa8N6xA.js";import"./vl-map-base-layer-grb-ortho-DwEFo3lQ.js";import"./vl-map-base-layer-grb-BChMOl_z.js";import"./vl-map-action-control-CIzCQvMJ.js";import"./vl-map-action-controls-CqJmaHSo.js";import"./vl-map-current-location-ChN_iSbF.js";import"./vl-map-layer-circle-style-_ZLJ3psH.js";import"./vl-map-layer-switcher-hGHmh9A5.js";import"./vl-checkbox.component-B_Wb-zxb.js";import"./vl-datepicker.component-BU4fAy14.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-input-field-masked.component-DMyex7F8.js";import"./vl-radio.component-DE3tpZPo.js";import"./vl-radio-group.component-jPwXzViL.js";import"./vl-select.component-DYcw1fiu.js";import"./vl-select-rich.component-yLANTGDJ.js";import"./vl-textarea.component-fzCTRgKQ.js";import"./vl-textarea-rich.component-D_oG-Kmq.js";import"./vl-upload.component-wEbI9gTL.js";import"./vl-map-features-layer-fk9fuqbW.js";import"./vl-map-wfs-layer-BEot46CM.js";import"./vl-map-image-wms-layer-DbgnFc3a.js";import"./vl-map-wms-layer-DtzeUj1c.js";import"./vl-map-tiled-wms-layer-DwYMo5wD.js";import"./vl-map-xyz-wms-layer-Df0lVG4K.js";import"./vl-map-wmts-layer-BStpMfx1.js";import"./vl-map-legend-CHoY-PG5.js";import"./vl-map-loading-indicator-DG0JO4tH.js";import"./vl-select-location-7GUlAj2V.js";import"./vl-map-overview-map-2ScwIZ6V.js";import"./vl-map-search-BlRaM5zQ.js";import"./vl-map-side-sheet-B_ODQzxE.js";import"./vl-map-side-sheet-menu-item-V7nYE_mq.js";const p=`import { registerWebComponents, webComponent } from '@domg-wc/common';
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
