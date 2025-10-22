import{K as d,L as m,H as z,I as R,u as L,j as a,C as T,bd as _,s as k,x as E,r as G,aX as P}from"./iframe-Ds54rb_7.js";import"./vl-map-draw-line-action-iR3tNL4B.js";import"./vl-map-draw-point-action-B3nkpYmS.js";import"./vl-map-draw-polygon-action-D8sFqZD4.js";import"./vl-map-measure-control-Bc52JtDk.js";import"./vl-map-delete-action-CGKoS7VL.js";import"./vl-map-modify-action-Cwu8NUYC.js";import"./vl-map-select-action-DhUMG_so.js";import"./vl-map-base-layer-grb-gray-DTa8N6xA.js";import"./vl-map-base-layer-grb-ortho-DwEFo3lQ.js";import"./vl-map-base-layer-grb-BChMOl_z.js";import"./vl-map-action-controls-CqJmaHSo.js";import"./vl-map-layer-circle-style-_ZLJ3psH.js";import{aL as $}from"./vl-map-base-layer-CUICGl8E.js";import"./vl-map-layer-switcher-hGHmh9A5.js";import"./vl-map-features-layer-fk9fuqbW.js";import{L as M}from"./vl-map-legend-CHoY-PG5.js";import"./vl-map-overview-map-2ScwIZ6V.js";import"./vl-map-side-sheet-B_ODQzxE.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-draw-action-C9YPkWBK.js";import"./vl-map-layer-action-CylOCJtd.js";import"./composite-vector-layer-Br7RUl3I.js";import"./vl-map-vector-layer-9AlT0Pv4.js";import"./vl-map-control.mixin-CZAcZeo0.js";import"./select-action-CcWoJkZ9.js";import"./vl-checkbox.component-B_Wb-zxb.js";import"./vl-datepicker.component-BU4fAy14.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-input-field-masked.component-DMyex7F8.js";import"./vl-radio.component-DE3tpZPo.js";import"./vl-radio-group.component-jPwXzViL.js";import"./vl-select.component-DYcw1fiu.js";import"./vl-select-rich.component-yLANTGDJ.js";import"./vl-textarea.component-fzCTRgKQ.js";import"./vl-textarea-rich.component-D_oG-Kmq.js";import"./vl-upload.component-wEbI9gTL.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,r={...R,allowFullscreen:!1,disableEscape:!1,disableRotation:!1,disableMousewheelZoom:!1,disableKeyboard:!1,fullHeight:!1,noBorder:!1,activeActionChange:j($.ACTIVE_ACTION_CHANGED),layerVisibleChange:j($.LAYER_VISIBLE_CHANGED),lambert2008:!1},F={...z,allowFullscreen:{name:"allow-fullscreen",description:"Laat de map toe afgebeeld te worden in fullscreen.<br>Dit kan niet gebruikt worden op mobile.<br>Dit attribuut is niet reactief.",table:{type:{summary:m.BOOLEAN},category:d.ATTRIBUTES,defaultValue:{summary:String(r.allowFullscreen)}}},disableEscape:{name:"disable-escape-key",description:"Schakelt de escape-key uit.<br>Dit attribuut is niet reactief.",table:{type:{summary:m.BOOLEAN},category:d.ATTRIBUTES,defaultValue:{summary:String(r.disableEscape)}}},disableRotation:{name:"disable-rotation",description:"Schakelt het roteren van de map uit.<br>Dit attribuut is niet reactief.",table:{type:{summary:m.BOOLEAN},category:d.ATTRIBUTES,defaultValue:{summary:String(r.disableRotation)}}},disableMousewheelZoom:{name:"disable-mouse-wheel-zoom",description:"Schakelt het zoomen van de map via het muiswiel uit.<br>Dit attribuut is niet reactief.",table:{type:{summary:m.BOOLEAN},category:d.ATTRIBUTES,defaultValue:{summary:String(r.disableMousewheelZoom)}}},disableKeyboard:{name:"disable-keyboard",description:"Schakelt de keyboard input uit voor de map.<br>Dit attribuut is niet reactief.",table:{type:{summary:m.BOOLEAN},category:d.ATTRIBUTES,defaultValue:{summary:String(r.disableKeyboard)}}},fullHeight:{name:"full-height",description:"De map neemt de volledige beschikbare hoogte in van zijn parent.<br>Zie de docs pagina voor meer informatie over het gebruik van dit attribuut.",table:{type:{summary:m.BOOLEAN},category:d.ATTRIBUTES,defaultValue:{summary:String(r.fullHeight)}}},lambert2008:{name:"lambert2008",description:"Indien aanwezig wordt de kaart in het coördinatenstelsel Lambert 2008 weergegeven (EPSG:3812).<br>Indien niet aanwezig wordt de kaart in het coördinatenstelsel Lambert 72 weergegeven (EPSG:31370).<br>Dit attribuut is niet reactief. In de toekomst wordt Lambert 2008 de default.",table:{type:{summary:m.BOOLEAN},category:d.ATTRIBUTES,defaultValue:{summary:r.lambert2008}}},noBorder:{name:"no-border",description:"De border rond de map wordt niet afgebeeld.",table:{type:{summary:m.BOOLEAN},category:d.ATTRIBUTES,defaultValue:{summary:String(r.noBorder)}}},activeActionChange:{name:$.ACTIVE_ACTION_CHANGED,description:"Afgevuurd als de actieve map-actie verandert.",table:{type:{summary:"{ previous?: VlMapAction, current?: VlMapAction }"},category:d.EVENTS}},layerVisibleChange:{name:$.LAYER_VISIBLE_CHANGED,description:"Afgevuurd als de visible state van een map-layer verandert.",table:{type:{summary:"{ layer: VlMapLayer, visible: boolean }"},category:d.EVENTS}}};function S(l){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...L(),...l.components},{FluxAlert:t,FluxMetaData:s}=e;return t||A("FluxAlert"),s||A("FluxMetaData"),a.jsxs(a.Fragment,{children:[a.jsx(e.h1,{id:"map",children:"Map"}),`
`,a.jsx(s,{id:"map-map"}),`
`,a.jsxs(e.p,{children:["Gebruik de ",a.jsx(e.code,{children:"map"})," component om een kaart af te beelden met verschillende lagen en acties."]}),`
`,a.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-js",children:`import { VlMap } from '@domg-wc/map';
`})}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-html",children:`<vl-map></vl-map>
`})}),`
`,a.jsx(T,{of:u}),`
`,a.jsx(e.h2,{id:"lambert-2008",children:"Lambert 2008"}),`
`,a.jsxs(e.p,{children:[`In het kader van de transitie naar het Lambert 2008 coördinatenstelsel, hebben we ervoor gekozen om te starten met een
opt-in voor Lambert 2008. In een volgende versie wordt dit de default. Om kaarten en kaartlagen weer te geven als
Lambert 2008 kan je het attribuut `,a.jsx(e.code,{children:"lambert2008"})," toevoegen:"]}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-html",children:`<vl-map lambert2008></vl-map>
`})}),`
`,a.jsx(e.h3,{id:"lambert-72-data-op-een-lambert-2008-kaart",children:"Lambert 72 data op een Lambert 2008 kaart"}),`
`,a.jsxs(e.p,{children:[`Indien je vector kaartlagen (features en WFS) gebruikt met Lambert 72 coördinaten op een Lambert 2008 kaart, moet je de
projectie code `,a.jsx(e.code,{children:"EPSG:31370"}),` meegeven als attribuut op de kaartlaag. Geef je geen projectie code mee, dan zal de
kaartlaag de projectie code van de kaart overnemen.`]}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-html",children:`<vl-map lambert2008>
    <vl-map-features-layer projection-code="EPSG:31370" ...></vl-map-features-layer>
    <vl-map-wfs-layer projection-code="EPSG:31370" ...></vl-map-wfs-layer>
</vl-map>
`})}),`
`,a.jsx(t,{type:"warning",children:`
  De client-side transformatie van Lambert 72 naar Lambert 2008 heeft een begrensde nauwkeurigheid van ~1m. Is cm 
  nauwkeurigheid vereist, dan is het belangrijk dat de kaart en de kaartlagen hetzelfde coördinatenstelsel gebruiken.
`}),`
`,a.jsx(e.h3,{id:"intekenen-op-een-lambert-2008-kaart",children:"Intekenen op een Lambert 2008 kaart"}),`
`,a.jsx(e.p,{children:`Om in te tekenen op een Lambert 2008 kaart moet een Lambert 2008 kaartlaag gebruikt worden, omwille van de
beschikbare nauwkeurigheid van ~1m van de Lambert 72 naar Lambert 2008 transformatie.`}),`
`,a.jsx(e.p,{children:`Vereist je project Lambert 72 coordinaten bij het intekenen, dan wordt het upgraden naar de Lambert 2008 kaart
beter uitgesteld tot wanneer het project ook Lambert 2008 data ondersteunt. De regel hierbij is dat het
coördinatenstelsel van intekenen hetzelfde moet zijn als dat van de kaart.`}),`
`,a.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,a.jsx(_,{of:u}),`
`,a.jsx(e.h2,{id:"varianten",children:"Varianten"}),`
`,a.jsx(e.h3,{id:"volledige-hoogte",children:"Volledige hoogte"}),`
`,a.jsx(e.p,{children:"De map de volledige beschikbare hoogte in laten nemen kan op de volgende manier:"}),`
`,a.jsxs(e.ul,{children:[`
`,a.jsxs(e.li,{children:["plaats op de parent een ",a.jsx(e.code,{children:"height"})," of een ",a.jsx(e.code,{children:"min-height"})]}),`
`,a.jsxs(e.li,{children:["plaats op de parent ",a.jsx(e.code,{children:"display: flex"})," en ",a.jsx(e.code,{children:"flex-direction: column"})]}),`
`,a.jsxs(e.li,{children:["plaats op de vl-map het attribuut ",a.jsx(e.code,{children:"full-height"})]}),`
`,a.jsxs(e.li,{children:["zorg dat de parent ",a.jsx(e.strong,{children:"geen elementen"})," heeft met ",a.jsx(e.code,{children:"position: fixed"})," die deel uit moeten maken van de hoogte"]}),`
`]}),`
`,a.jsx(T,{of:b}),`
`,a.jsx(e.h3,{id:"playground",children:"Playground"}),`
`,a.jsx(e.p,{children:"Zie de code onder de story voor het volledige voorbeeld."}),`
`,a.jsx(T,{of:y}),`
`,a.jsx(e.h2,{id:"referenties",children:"Referenties"}),`
`,a.jsx(e.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,a.jsxs(e.p,{children:["De ",a.jsx(e.code,{children:"map"})," component is een component van Departement Omgeving en heeft geen Digitaal Vlaanderen documentatie."]}),`
`,a.jsx(e.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,a.jsx(e.p,{children:a.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-map--default",rel:"nofollow",children:"Legacy Storybook - Map"})}),`
`,a.jsx(e.p,{children:a.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlMap.html",rel:"nofollow",children:"Legacy Documentatie - Map"})}),`
`,a.jsx(e.p,{children:a.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map.html",rel:"nofollow",children:"Legacy Demo - Map"})})]})}function H(l={}){const{wrapper:e}={...L(),...l.components};return e?a.jsx(e,{...l,children:a.jsx(S,{...l})}):S(l)}function A(l,e){throw new Error("Expected component `"+l+"` to be defined: you likely forgot to import, pass, or provide it.")}const n=l=>D(`${l}-action`),i=l=>D(`${l}-toggle-button`),B=["draw-point","draw-line","draw-polygon","modify","delete"],D=l=>{const e=document.getElementsByClassName(l);return e[e.length-1]},C=({detail:{previous:l,current:e}})=>{B.forEach(t=>{l===n(t)?i(t).on=!1:e===n(t)&&(i(t).on=!0)})},O=({detail:{layer:l,visible:e}})=>{const t=l.getElementsByClassName("action");for(const s of t)B.forEach(c=>{s===n(c)&&(i(c).disabled=!e)})},I=({detail:{value:l}})=>{document.querySelectorAll("vl-map-features-layer")?.forEach(t=>{t.setAttribute("opacity",String(l/100))})};G([P]);const Ae={id:"map-map",title:"map/map",tags:["autodocs"],args:r,argTypes:F,parameters:{docs:{page:H}}},u=k(r,({allowFullscreen:l,disableEscape:e,disableRotation:t,disableMousewheelZoom:s,disableKeyboard:c,noBorder:v,fullHeight:g})=>E`
        <vl-map
            ?allow-fullscreen=${l}
            ?disable-escape-key=${e}
            ?disable-rotation=${t}
            ?disable-mouse-wheel-zoom=${s}
            ?disable-keyboard=${c}
            ?no-border=${v}
            ?full-height=${g}
            zoomInTooltip="Zoom in"
            zoomOutTooltip="Zoom uit"
        >
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        </vl-map>
    `);u.storyName="vl-map - default";const b=k(r,({allowFullscreen:l,disableEscape:e,disableRotation:t,disableMousewheelZoom:s,disableKeyboard:c,noBorder:v,fullHeight:g})=>E`
        <div style="height: 800px; display: flex; flex-direction: column; border: 1px solid black">
            <vl-functional-header
                sub-title=${"Voor lager, middelbaar en hoger onderwijs"}
                title=${"School- en studietoelagen"}
                margin-bottom=${"none"}
                ?disable-back-link=${!0}
            ></vl-functional-header>
            <vl-map
                ?allow-fullscreen=${l}
                ?disable-escape-key=${e}
                ?disable-rotation=${t}
                ?disable-mouse-wheel-zoom=${s}
                ?disable-keyboard=${c}
                ?no-border=${v}
                ?full-height=${g}
                zoomInTooltip="Zoom in"
                zoomOutTooltip="Zoom uit"
            >
                <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            </vl-map>
        </div>
    `);b.storyName="vl-map - full height";b.args={noBorder:!0,fullHeight:!0};const p="rgba(102, 51, 153, 0.6)",V="width: 100%;",h="display: flex; gap: 1rem; align-items: center; margin-bottom: 1rem;",N={type:"FeatureCollection",features:[{type:"Feature",id:1,geometry:{type:"Point",coordinates:[21e4,19e4]}},{type:"Feature",id:2,geometry:{type:"LineString",coordinates:[[17e4,17e4],[15e4,206e3]]}},{type:"Feature",id:3,geometry:{type:"Polygon",coordinates:[[[44e3,171e3],[1e5,171e3],[1e5,205e3],[44e3,205e3],[44e3,171e3]]]}}]},y=k(r,({allowFullscreen:l,disableEscape:e,disableRotation:t,disableMousewheelZoom:s,disableKeyboard:c,noBorder:v,fullHeight:g,activeActionChange:f,layerVisibleChange:x})=>E`
        <vl-map
            lambert2008
            ?allow-fullscreen=${l}
            ?disable-escape-key=${e}
            ?disable-rotation=${t}
            ?disable-mouse-wheel-zoom=${s}
            ?disable-keyboard=${c}
            ?no-border=${v}
            ?full-height=${g}
            @vl-active-action-changed=${o=>{f({previous:o.detail.previous}),f({current:o.detail.current}),C(o)}}
            @vl-layer-visible-changed=${o=>{x(o.detail),O(o)}}
        >
            <vl-map-action-controls>
                <vl-map-measure-control></vl-map-measure-control>
            </vl-map-action-controls>

            <vl-map-side-sheet>
                <vl-title type="h6">Layers</vl-title>

                <vl-map-layer-switcher></vl-map-layer-switcher>
                <vl-input-slider value=${100} @vl-change-value=${I}></vl-input-slider>

                <hr />

                <vl-title type="h6">Measure</vl-title>

                <div>
                    <vl-button
                        @click=${()=>{n("measure").active=!0}}
                    >
                        Start
                    </vl-button>
                    <vl-button
                        @click=${()=>{n("measure").active=!1}}
                    >
                        Stop
                    </vl-button>
                </div>

                <hr />

                <div style=${V}>
                    <vl-title type="h6">Shapes</vl-title>

                    <div style="margin-bottom: 2rem;">
                        <vl-button
                            toggle
                            class="modify-toggle-button"
                            @click=${()=>{n("modify").active=i("modify").on}}
                        >
                            Modify
                        </vl-button>
                        <vl-button
                            toggle
                            class="delete-toggle-button"
                            @click=${()=>{n("delete").active=i("delete").on}}
                        >
                            Delete
                        </vl-button>
                    </div>

                    <div style=${h}>
                        <vl-button
                            toggle
                            icon="pencil"
                            label="Toggle draw point action"
                            class="draw-point-toggle-button"
                            @click=${()=>{n("draw-point").active=i("draw-point").on}}
                        >
                        </vl-button>
                        <p>Draw point</p>
                    </div>

                    <div style=${h}>
                        <vl-button
                            toggle
                            icon="pencil"
                            label="Toggle draw line action"
                            class="draw-line-toggle-button"
                            @click=${()=>{n("draw-line").active=i("draw-line").on}}
                        >
                        </vl-button>
                        <p>Draw line</p>
                    </div>

                    <div style=${h}>
                        <vl-button
                            toggle
                            icon="pencil"
                            label="Toggle draw polygon action"
                            class="draw-polygon-toggle-button"
                            @click=${()=>{n("draw-polygon").active=i("draw-polygon").on}}
                        >
                        </vl-button>
                        <p>Draw Polygon</p>
                    </div>
                </div>
            </vl-map-side-sheet>

            <vl-map-overview-map></vl-map-overview-map>

            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-baselayer-grb></vl-map-baselayer-grb>
            <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>

            <vl-map-features-layer name="Shapes" .features=${N} projection-code="EPSG:31370">
                <vl-map-layer-style name="Shapes" border-color=${p} color=${p}></vl-map-layer-style>
                <vl-map-layer-circle-style border-color=${p} color=${p}></vl-map-layer-circle-style>

                <vl-map-draw-point-action class="draw-point-action action"></vl-map-draw-point-action>
                <vl-map-draw-line-action class="draw-line-action action"></vl-map-draw-line-action>
                <vl-map-draw-polygon-action class="draw-polygon-action action"></vl-map-draw-polygon-action>

                <vl-map-modify-action class="modify-action action"></vl-map-modify-action>
                <vl-map-delete-action class="delete-action action"></vl-map-delete-action>
                <vl-map-select-action class="select-action action" default-active></vl-map-select-action>
            </vl-map-features-layer>

            <vl-map-features-layer name="Measurements" projection-code="EPSG:31370">
                <vl-map-layer-style
                    color="rgba(6, 163, 247, 1)"
                    border-size="2"
                    border-color="rgba(6, 163, 247, 1)"
                ></vl-map-layer-style>
                <vl-map-measure-action class="measure-action action"></vl-map-measure-action>
            </vl-map-features-layer>
            <vl-map-legend placement=${M.BOTTOM_RIGHT} right="140px"></vl-map-legend>
        </vl-map>
    `);y.storyName="vl-map - playground";const w=k(r,({allowFullscreen:l,disableEscape:e,disableRotation:t,disableMousewheelZoom:s,disableKeyboard:c,noBorder:v,fullHeight:g,activeActionChange:f,layerVisibleChange:x})=>E`
        <vl-map
            ?allow-fullscreen=${l}
            ?disable-escape-key=${e}
            ?disable-rotation=${t}
            ?disable-mouse-wheel-zoom=${s}
            ?disable-keyboard=${c}
            ?no-border=${v}
            ?full-height=${g}
            @vl-active-action-changed=${o=>{f({previous:o.detail.previous}),f({current:o.detail.current}),C(o)}}
            @vl-layer-visible-changed=${o=>{x(o.detail),O(o)}}
        >
            <vl-map-action-controls>
                <vl-map-measure-control></vl-map-measure-control>
            </vl-map-action-controls>

            <vl-map-side-sheet>
                <vl-title type="h6">Layers</vl-title>

                <vl-map-layer-switcher></vl-map-layer-switcher>
                <vl-input-slider value=${100} @vl-change-value=${I}></vl-input-slider>

                <hr />

                <vl-title type="h6">Measure</vl-title>

                <div>
                    <vl-button
                        @click=${()=>{n("measure").active=!0}}
                    >
                        Start
                    </vl-button>
                    <vl-button
                        @click=${()=>{n("measure").active=!1}}
                    >
                        Stop
                    </vl-button>
                </div>

                <hr />

                <div style=${V}>
                    <vl-title type="h6">Shapes</vl-title>

                    <div style="margin-bottom: 2rem;">
                        <vl-button
                            toggle
                            class="modify-toggle-button"
                            @click=${()=>{n("modify").active=i("modify").on}}
                        >
                            Modify
                        </vl-button>
                        <vl-button
                            toggle
                            class="delete-toggle-button"
                            @click=${()=>{n("delete").active=i("delete").on}}
                        >
                            Delete
                        </vl-button>
                    </div>

                    <div style=${h}>
                        <vl-button
                            toggle
                            icon="pencil"
                            label="Toggle draw point action"
                            class="draw-point-toggle-button"
                            @click=${()=>{n("draw-point").active=i("draw-point").on}}
                        >
                        </vl-button>
                        <p>Draw point</p>
                    </div>

                    <div style=${h}>
                        <vl-button
                            toggle
                            icon="pencil"
                            label="Toggle draw line action"
                            class="draw-line-toggle-button"
                            @click=${()=>{n("draw-line").active=i("draw-line").on}}
                        >
                        </vl-button>
                        <p>Draw line</p>
                    </div>

                    <div style=${h}>
                        <vl-button
                            toggle
                            icon="pencil"
                            label="Toggle draw polygon action"
                            class="draw-polygon-toggle-button"
                            @click=${()=>{n("draw-polygon").active=i("draw-polygon").on}}
                        >
                        </vl-button>
                        <p>Draw Polygon</p>
                    </div>
                </div>
            </vl-map-side-sheet>

            <vl-map-overview-map></vl-map-overview-map>

            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-baselayer-grb></vl-map-baselayer-grb>
            <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>

            <vl-map-features-layer name="Shapes" .features=${N}>
                <vl-map-layer-style name="Shapes" border-color=${p} color=${p}></vl-map-layer-style>
                <vl-map-layer-circle-style border-color=${p} color=${p}></vl-map-layer-circle-style>

                <vl-map-draw-point-action class="draw-point-action action"></vl-map-draw-point-action>
                <vl-map-draw-line-action class="draw-line-action action"></vl-map-draw-line-action>
                <vl-map-draw-polygon-action class="draw-polygon-action action"></vl-map-draw-polygon-action>

                <vl-map-modify-action class="modify-action action"></vl-map-modify-action>
                <vl-map-delete-action class="delete-action action"></vl-map-delete-action>
                <vl-map-select-action class="select-action action" default-active></vl-map-select-action>
            </vl-map-features-layer>

            <vl-map-features-layer name="Measurements">
                <vl-map-layer-style
                    color="rgba(6, 163, 247, 1)"
                    border-size="2"
                    border-color="rgba(6, 163, 247, 1)"
                ></vl-map-layer-style>
                <vl-map-measure-action class="measure-action action"></vl-map-measure-action>
            </vl-map-features-layer>
            <vl-map-legend placement=${M.BOTTOM_RIGHT} right="140px"></vl-map-legend>
        </vl-map>
    `);w.storyName="vl-map - playground - Lambert 72";u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`story(mapArgs, ({
  allowFullscreen,
  disableEscape,
  disableRotation,
  disableMousewheelZoom,
  disableKeyboard,
  noBorder,
  fullHeight
}) => html\`
        <vl-map
            ?allow-fullscreen=\${allowFullscreen}
            ?disable-escape-key=\${disableEscape}
            ?disable-rotation=\${disableRotation}
            ?disable-mouse-wheel-zoom=\${disableMousewheelZoom}
            ?disable-keyboard=\${disableKeyboard}
            ?no-border=\${noBorder}
            ?full-height=\${fullHeight}
            zoomInTooltip="Zoom in"
            zoomOutTooltip="Zoom uit"
        >
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        </vl-map>
    \`)`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`story(mapArgs, ({
  allowFullscreen,
  disableEscape,
  disableRotation,
  disableMousewheelZoom,
  disableKeyboard,
  noBorder,
  fullHeight
}) => html\`
        <div style="height: 800px; display: flex; flex-direction: column; border: 1px solid black">
            <vl-functional-header
                sub-title=\${'Voor lager, middelbaar en hoger onderwijs'}
                title=\${'School- en studietoelagen'}
                margin-bottom=\${'none'}
                ?disable-back-link=\${true}
            ></vl-functional-header>
            <vl-map
                ?allow-fullscreen=\${allowFullscreen}
                ?disable-escape-key=\${disableEscape}
                ?disable-rotation=\${disableRotation}
                ?disable-mouse-wheel-zoom=\${disableMousewheelZoom}
                ?disable-keyboard=\${disableKeyboard}
                ?no-border=\${noBorder}
                ?full-height=\${fullHeight}
                zoomInTooltip="Zoom in"
                zoomOutTooltip="Zoom uit"
            >
                <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            </vl-map>
        </div>
    \`)`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`story(mapArgs, ({
  allowFullscreen,
  disableEscape,
  disableRotation,
  disableMousewheelZoom,
  disableKeyboard,
  noBorder,
  fullHeight,
  activeActionChange,
  layerVisibleChange
}) => html\`
        <vl-map
            lambert2008
            ?allow-fullscreen=\${allowFullscreen}
            ?disable-escape-key=\${disableEscape}
            ?disable-rotation=\${disableRotation}
            ?disable-mouse-wheel-zoom=\${disableMousewheelZoom}
            ?disable-keyboard=\${disableKeyboard}
            ?no-border=\${noBorder}
            ?full-height=\${fullHeight}
            @vl-active-action-changed=\${event => {
  activeActionChange({
    previous: event.detail.previous
  });
  activeActionChange({
    current: event.detail.current
  });
  handleActiveActionChange(event);
}}
            @vl-layer-visible-changed=\${event => {
  layerVisibleChange(event.detail);
  handleLayerVisibleChange(event);
}}
        >
            <vl-map-action-controls>
                <vl-map-measure-control></vl-map-measure-control>
            </vl-map-action-controls>

            <vl-map-side-sheet>
                <vl-title type="h6">Layers</vl-title>

                <vl-map-layer-switcher></vl-map-layer-switcher>
                <vl-input-slider value=\${100} @vl-change-value=\${handleOpacitySliderChange}></vl-input-slider>

                <hr />

                <vl-title type="h6">Measure</vl-title>

                <div>
                    <vl-button
                        @click=\${() => {
  getActionElement('measure').active = true;
}}
                    >
                        Start
                    </vl-button>
                    <vl-button
                        @click=\${() => {
  getActionElement('measure').active = false;
}}
                    >
                        Stop
                    </vl-button>
                </div>

                <hr />

                <div style=\${toggleGroupStyling}>
                    <vl-title type="h6">Shapes</vl-title>

                    <div style="margin-bottom: 2rem;">
                        <vl-button
                            toggle
                            class="modify-toggle-button"
                            @click=\${() => {
  getActionElement('modify').active = getToggleButton('modify').on;
}}
                        >
                            Modify
                        </vl-button>
                        <vl-button
                            toggle
                            class="delete-toggle-button"
                            @click=\${() => {
  getActionElement('delete').active = getToggleButton('delete').on;
}}
                        >
                            Delete
                        </vl-button>
                    </div>

                    <div style=\${toggleItemStyling}>
                        <vl-button
                            toggle
                            icon="pencil"
                            label="Toggle draw point action"
                            class="draw-point-toggle-button"
                            @click=\${() => {
  getActionElement('draw-point').active = getToggleButton('draw-point').on;
}}
                        >
                        </vl-button>
                        <p>Draw point</p>
                    </div>

                    <div style=\${toggleItemStyling}>
                        <vl-button
                            toggle
                            icon="pencil"
                            label="Toggle draw line action"
                            class="draw-line-toggle-button"
                            @click=\${() => {
  getActionElement('draw-line').active = getToggleButton('draw-line').on;
}}
                        >
                        </vl-button>
                        <p>Draw line</p>
                    </div>

                    <div style=\${toggleItemStyling}>
                        <vl-button
                            toggle
                            icon="pencil"
                            label="Toggle draw polygon action"
                            class="draw-polygon-toggle-button"
                            @click=\${() => {
  getActionElement('draw-polygon').active = getToggleButton('draw-polygon').on;
}}
                        >
                        </vl-button>
                        <p>Draw Polygon</p>
                    </div>
                </div>
            </vl-map-side-sheet>

            <vl-map-overview-map></vl-map-overview-map>

            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-baselayer-grb></vl-map-baselayer-grb>
            <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>

            <vl-map-features-layer name="Shapes" .features=\${features} projection-code="EPSG:31370">
                <vl-map-layer-style name="Shapes" border-color=\${purple} color=\${purple}></vl-map-layer-style>
                <vl-map-layer-circle-style border-color=\${purple} color=\${purple}></vl-map-layer-circle-style>

                <vl-map-draw-point-action class="draw-point-action action"></vl-map-draw-point-action>
                <vl-map-draw-line-action class="draw-line-action action"></vl-map-draw-line-action>
                <vl-map-draw-polygon-action class="draw-polygon-action action"></vl-map-draw-polygon-action>

                <vl-map-modify-action class="modify-action action"></vl-map-modify-action>
                <vl-map-delete-action class="delete-action action"></vl-map-delete-action>
                <vl-map-select-action class="select-action action" default-active></vl-map-select-action>
            </vl-map-features-layer>

            <vl-map-features-layer name="Measurements" projection-code="EPSG:31370">
                <vl-map-layer-style
                    color="rgba(6, 163, 247, 1)"
                    border-size="2"
                    border-color="rgba(6, 163, 247, 1)"
                ></vl-map-layer-style>
                <vl-map-measure-action class="measure-action action"></vl-map-measure-action>
            </vl-map-features-layer>
            <vl-map-legend placement=\${LEGEND_PLACEMENT.BOTTOM_RIGHT} right="140px"></vl-map-legend>
        </vl-map>
    \`)`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`story(mapArgs, ({
  allowFullscreen,
  disableEscape,
  disableRotation,
  disableMousewheelZoom,
  disableKeyboard,
  noBorder,
  fullHeight,
  activeActionChange,
  layerVisibleChange
}) => html\`
        <vl-map
            ?allow-fullscreen=\${allowFullscreen}
            ?disable-escape-key=\${disableEscape}
            ?disable-rotation=\${disableRotation}
            ?disable-mouse-wheel-zoom=\${disableMousewheelZoom}
            ?disable-keyboard=\${disableKeyboard}
            ?no-border=\${noBorder}
            ?full-height=\${fullHeight}
            @vl-active-action-changed=\${event => {
  activeActionChange({
    previous: event.detail.previous
  });
  activeActionChange({
    current: event.detail.current
  });
  handleActiveActionChange(event);
}}
            @vl-layer-visible-changed=\${event => {
  layerVisibleChange(event.detail);
  handleLayerVisibleChange(event);
}}
        >
            <vl-map-action-controls>
                <vl-map-measure-control></vl-map-measure-control>
            </vl-map-action-controls>

            <vl-map-side-sheet>
                <vl-title type="h6">Layers</vl-title>

                <vl-map-layer-switcher></vl-map-layer-switcher>
                <vl-input-slider value=\${100} @vl-change-value=\${handleOpacitySliderChange}></vl-input-slider>

                <hr />

                <vl-title type="h6">Measure</vl-title>

                <div>
                    <vl-button
                        @click=\${() => {
  getActionElement('measure').active = true;
}}
                    >
                        Start
                    </vl-button>
                    <vl-button
                        @click=\${() => {
  getActionElement('measure').active = false;
}}
                    >
                        Stop
                    </vl-button>
                </div>

                <hr />

                <div style=\${toggleGroupStyling}>
                    <vl-title type="h6">Shapes</vl-title>

                    <div style="margin-bottom: 2rem;">
                        <vl-button
                            toggle
                            class="modify-toggle-button"
                            @click=\${() => {
  getActionElement('modify').active = getToggleButton('modify').on;
}}
                        >
                            Modify
                        </vl-button>
                        <vl-button
                            toggle
                            class="delete-toggle-button"
                            @click=\${() => {
  getActionElement('delete').active = getToggleButton('delete').on;
}}
                        >
                            Delete
                        </vl-button>
                    </div>

                    <div style=\${toggleItemStyling}>
                        <vl-button
                            toggle
                            icon="pencil"
                            label="Toggle draw point action"
                            class="draw-point-toggle-button"
                            @click=\${() => {
  getActionElement('draw-point').active = getToggleButton('draw-point').on;
}}
                        >
                        </vl-button>
                        <p>Draw point</p>
                    </div>

                    <div style=\${toggleItemStyling}>
                        <vl-button
                            toggle
                            icon="pencil"
                            label="Toggle draw line action"
                            class="draw-line-toggle-button"
                            @click=\${() => {
  getActionElement('draw-line').active = getToggleButton('draw-line').on;
}}
                        >
                        </vl-button>
                        <p>Draw line</p>
                    </div>

                    <div style=\${toggleItemStyling}>
                        <vl-button
                            toggle
                            icon="pencil"
                            label="Toggle draw polygon action"
                            class="draw-polygon-toggle-button"
                            @click=\${() => {
  getActionElement('draw-polygon').active = getToggleButton('draw-polygon').on;
}}
                        >
                        </vl-button>
                        <p>Draw Polygon</p>
                    </div>
                </div>
            </vl-map-side-sheet>

            <vl-map-overview-map></vl-map-overview-map>

            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-baselayer-grb></vl-map-baselayer-grb>
            <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>

            <vl-map-features-layer name="Shapes" .features=\${features}>
                <vl-map-layer-style name="Shapes" border-color=\${purple} color=\${purple}></vl-map-layer-style>
                <vl-map-layer-circle-style border-color=\${purple} color=\${purple}></vl-map-layer-circle-style>

                <vl-map-draw-point-action class="draw-point-action action"></vl-map-draw-point-action>
                <vl-map-draw-line-action class="draw-line-action action"></vl-map-draw-line-action>
                <vl-map-draw-polygon-action class="draw-polygon-action action"></vl-map-draw-polygon-action>

                <vl-map-modify-action class="modify-action action"></vl-map-modify-action>
                <vl-map-delete-action class="delete-action action"></vl-map-delete-action>
                <vl-map-select-action class="select-action action" default-active></vl-map-select-action>
            </vl-map-features-layer>

            <vl-map-features-layer name="Measurements">
                <vl-map-layer-style
                    color="rgba(6, 163, 247, 1)"
                    border-size="2"
                    border-color="rgba(6, 163, 247, 1)"
                ></vl-map-layer-style>
                <vl-map-measure-action class="measure-action action"></vl-map-measure-action>
            </vl-map-features-layer>
            <vl-map-legend placement=\${LEGEND_PLACEMENT.BOTTOM_RIGHT} right="140px"></vl-map-legend>
        </vl-map>
    \`)`,...w.parameters?.docs?.source}}};const Le=["MapDefault","MapFullHeight","MapPlayground","MapPlaygroundLB72"];export{u as MapDefault,b as MapFullHeight,y as MapPlayground,w as MapPlaygroundLB72,Le as __namedExportsOrder,Ae as default};
