import{u as o,j as e,M as m,C as i,S as n}from"./iframe-BJy2lIHs.js";import{m as s,K as l}from"./kaart-niet-lambert-72-lagen.stories-BY9yu_sr.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-base-layer-Bhd069p5.js";import"./vl-map-click-action-C_riH_Wl.js";import"./vl-map-draw-action-DDKtBkq5.js";import"./vl-map-layer-action-JwobYCBa.js";import"./composite-vector-layer-BF7SVfkA.js";import"./vl-map-vector-layer-BlWh4n98.js";import"./vl-map-draw-line-action-DcQjRMtf.js";import"./vl-map-draw-point-action-BFZov_sj.js";import"./vl-map-draw-polygon-action-D5yr5cgd.js";import"./vl-map-measure-control-Cz_kofO0.js";import"./vl-map-control.mixin-QOhZiS6o.js";import"./vl-map-delete-action-BXJcwC0G.js";import"./select-action-DB4ru2wt.js";import"./vl-map-modify-action-BwUs5Sds.js";import"./vl-map-select-actions-C41-pFCc.js";import"./vl-map-select-action-D288tA7K.js";import"./vl-map-base-layer-grb-gray-CiePMeON.js";import"./vl-map-base-layer-grb-ortho-B-ur4EjY.js";import"./vl-map-base-layer-grb-C_FYObJa.js";import"./vl-map-action-control-BHfUlbZT.js";import"./vl-map-action-controls-C6RUcD32.js";import"./vl-map-current-location-C1mlLYUt.js";import"./vl-map-layer-circle-style-DwQxOcyQ.js";import"./vl-map-layer-switcher-BYnW4BCg.js";import"./vl-checkbox.component-CaqQ6QEH.js";import"./vl-datepicker.component-CWL1bX9Y.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-fieldset.component-D0auMTxx.js";import"./vl-input-field-masked.component-CtLiafSG.js";import"./vl-radio.component-DybCu6Ag.js";import"./vl-radio-group.component-BFwurkS5.js";import"./vl-select.component-Dh8HWgqz.js";import"./vl-select-rich.component-h5mxQ5Uo.js";import"./vl-textarea.component-DlAkTIGX.js";import"./vl-textarea-rich.component-DzLPkTaW.js";import"./vl-upload.component-Mpazn3jo.js";import"./vl-upload-progress.component-BshNTd-7.js";import"./vl-map-features-layer-D_GVez3n.js";import"./vl-map-wfs-layer-D9f5f8q0.js";import"./vl-map-image-wms-layer-C93LKK2G.js";import"./vl-map-wms-layer-CVGDM6nM.js";import"./vl-map-tiled-wms-layer-BwBrMs3X.js";import"./vl-map-xyz-wms-layer-CvHL38ly.js";import"./vl-map-wmts-layer-B9vFcxVF.js";import"./vl-map-legend-DT5KDPWK.js";import"./vl-map-loading-indicator-WNt0i02e.js";import"./vl-select-location-DYZWXnZ1.js";import"./vl-map-overview-map-DT0bYw4x.js";import"./vl-map-search-cQBjfms0.js";import"./vl-map-side-sheet-Clm7bsKh.js";import"./vl-map-side-sheet-menu-item-DB72H1ek.js";const p=`import { registerWebComponents, webComponent } from '@domg-wc/common';
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
