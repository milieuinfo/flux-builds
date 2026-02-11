"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[1e3],{"../../libs/map/src/stories/vl-map.stories.ts":(e,t,a)=>{a.r(t),a.d(t,{MapDefault:()=>A,MapFullHeight:()=>I,MapPlayground:()=>M,MapPlaygroundLB72:()=>O,__namedExportsOrder:()=>R,default:()=>E});var l=a("../../libs/common/storybook/src/index.ts");a("../../libs/components/src/index.ts");var n=a("../../libs/common/utilities/src/index.ts"),o=a("../../libs/components/src/next/button/index.ts"),r=a("../../libs/components/src/next/title/index.ts"),s=a("../../libs/components/src/next/toaster/vl-toaster.component.ts");a("../../libs/elements/src/index.ts");var i=a("../../node_modules/lit/index.js");a("../../libs/map/src/components/action/draw-action/draw-line-action/vl-map-draw-line-action.ts"),a("../../libs/map/src/components/action/draw-action/draw-point-action/vl-map-draw-point-action.ts"),a("../../libs/map/src/components/action/draw-action/draw-polygon-action/vl-map-draw-polygon-action.ts"),a("../../libs/map/src/components/action/draw-action/measure-action/vl-map-measure-action.ts"),a("../../libs/map/src/components/action/layer-action/delete-action/vl-map-delete-action.ts"),a("../../libs/map/src/components/action/layer-action/modify-action/vl-map-modify-action.ts"),a("../../libs/map/src/components/action/layer-action/select-action/vl-map-select-action.ts"),a("../../libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts"),a("../../libs/map/src/components/baselayer/vl-map-base-layer-grb-ortho/vl-map-base-layer-grb-ortho.ts"),a("../../libs/map/src/components/baselayer/vl-map-base-layer-grb/vl-map-base-layer-grb.ts"),a("../../libs/map/src/components/controls/measure-control/vl-map-measure-control.ts"),a("../../libs/map/src/components/controls/vl-map-action-controls.ts"),a("../../libs/map/src/components/layer-style/vl-map-layer-circle-style/vl-map-layer-circle-style.ts"),a("../../libs/map/src/components/layer-style/vl-map-layer-style.ts"),a("../../libs/map/src/components/layer-switcher/vl-map-layer-switcher.ts"),a("../../libs/map/src/components/layer/vector-layer/vl-map-features-layer/vl-map-features-layer.ts"),a("../../libs/map/src/components/legend/vl-map-legend.ts");var c=a("../../libs/map/src/components/legend/vl-map-legend.defaults.ts");a("../../libs/map/src/components/overview-map/vl-map-overview-map.ts"),a("../../libs/map/src/components/side-sheet/vl-map-side-sheet.ts"),a("../../libs/map/src/vl-map.ts");var d=a("../../node_modules/@storybook/addon-actions/dist/index.mjs"),p=a("../../libs/map/src/vl-map.model.ts");let m={...l.D8,allowFullscreen:!1,allowInvalidGeometry:!1,disableEscape:!1,disableKeyboard:!1,disableMousewheelZoom:!1,disableRotation:!1,fullHeight:!1,lambert2008:!1,noBorder:!1,activeActionChange:(0,d.XI)(p.ll.ACTIVE_ACTION_CHANGED),layerVisibleChange:(0,d.XI)(p.ll.LAYER_VISIBLE_CHANGED)},v={...(0,l.RN)(),allowFullscreen:{name:"data-vl-allow-fullscreen",description:"Laat de map toe afgebeeld te worden in fullscreen.<br>Dit kan niet gebruikt worden op mobile.<br>Dit attribuut is niet reactief.",table:{type:{summary:l.QE.BOOLEAN},category:l.R6.ATTRIBUTES,defaultValue:{summary:m.allowFullscreen}}},allowInvalidGeometry:{name:"allow-invalid-geometry",description:'Standaard worden ongeldige geometrieën gemarkeerd met een rode "invalid" stijl. Je kan dit attribuut gebruiken om dit gedrag uit te zetten.',table:{type:{summary:l.QE.BOOLEAN},category:l.R6.ATTRIBUTES,defaultValue:{summary:String(m.allowInvalidGeometry)}}},disableEscape:{name:"data-vl-disable-escape-key",description:"Schakelt de escape-key uit.<br>Dit attribuut is niet reactief.",table:{type:{summary:l.QE.BOOLEAN},category:l.R6.ATTRIBUTES,defaultValue:{summary:m.disableEscape}}},disableRotation:{name:"data-vl-disable-rotation",description:"Schakelt het roteren van de map uit.<br>Dit attribuut is niet reactief.",table:{type:{summary:l.QE.BOOLEAN},category:l.R6.ATTRIBUTES,defaultValue:{summary:m.disableRotation}}},disableMousewheelZoom:{name:"data-vl-disable-mouse-wheel-zoom",description:"Schakelt het zoomen van de map via het muiswiel uit.<br>Dit attribuut is niet reactief.",table:{type:{summary:l.QE.BOOLEAN},category:l.R6.ATTRIBUTES,defaultValue:{summary:m.disableMousewheelZoom}}},disableKeyboard:{name:"data-vl-disable-keyboard",description:"Schakelt de keyboard input uit voor de map.<br>Dit attribuut is niet reactief.",table:{type:{summary:l.QE.BOOLEAN},category:l.R6.ATTRIBUTES,defaultValue:{summary:m.disableKeyboard}}},fullHeight:{name:"data-vl-full-height",description:"De map neemt de volledige beschikbare hoogte in van zijn parent.<br>Zie de docs pagina voor meer informatie over het gebruik van dit attribuut.",table:{type:{summary:l.QE.BOOLEAN},category:l.R6.ATTRIBUTES,defaultValue:{summary:m.fullHeight}}},lambert2008:{name:"lambert2008",description:"Indien aanwezig wordt de kaart in het coördinatenstelsel Lambert 2008 weergegeven (EPSG:3812).<br>Indien niet aanwezig wordt de kaart in het coördinatenstelsel Lambert 72 weergegeven (EPSG:31370).<br>Dit attribuut is niet reactief. In de toekomst wordt Lambert 2008 de default.",table:{type:{summary:l.QE.BOOLEAN},category:l.R6.ATTRIBUTES,defaultValue:{summary:m.lambert2008}}},noBorder:{name:"data-vl-no-border",description:"De border rond de map wordt niet afgebeeld.",table:{type:{summary:l.QE.BOOLEAN},category:l.R6.ATTRIBUTES,defaultValue:{summary:m.noBorder}}},activeActionChange:{name:p.ll.ACTIVE_ACTION_CHANGED,description:"Afgevuurd als de actieve map-actie verandert.",table:{type:{summary:"{ previous?: VlMapAction, current?: VlMapAction }"},category:l.R6.EVENTS}},layerVisibleChange:{name:p.ll.LAYER_VISIBLE_CHANGED,description:"Afgevuurd als de visible state van een map-layer verandert.",table:{type:{summary:"{ layer: VlMapLayer, visible: boolean }"},category:l.R6.EVENTS}}};a("../../node_modules/react/index.js");var h=a("../../node_modules/react/jsx-runtime.js"),u=a("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),b=a("../../node_modules/@storybook/blocks/dist/index.mjs");function g(e){let t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",ul:"ul",li:"li",strong:"strong",a:"a"},(0,u.RP)(),e.components),{VluxMetaData:a,VluxAlert:l}=t;return l||y("VluxAlert",!0),a||y("VluxMetaData",!0),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(t.h1,{id:"map",children:"Map"}),"\n",(0,h.jsx)(a,{id:"map-map"}),"\n",(0,h.jsxs)(t.p,{children:["Gebruik de ",(0,h.jsx)(t.code,{children:"map"})," component om een kaart af te beelden met verschillende lagen en acties."]}),"\n",(0,h.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:"language-js",children:"import { VlMap } from '@domg-wc/map';\n"})}),"\n",(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:"language-html",children:"<vl-map></vl-map>\n"})}),"\n",(0,h.jsx)(b.Hl,{of:A}),"\n",(0,h.jsx)(t.h2,{id:"lambert-2008",children:"Lambert 2008"}),"\n",(0,h.jsxs)(t.p,{children:["In het kader van de transitie naar het Lambert 2008 coördinatenstelsel, hebben we ervoor gekozen om te starten met een\nopt-in voor Lambert 2008. In een volgende versie wordt dit de default. Om kaarten en kaartlagen weer te geven als\nLambert 2008 kan je het attribuut ",(0,h.jsx)(t.code,{children:"lambert2008"})," toevoegen:"]}),"\n",(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:"language-html",children:"<vl-map lambert2008></vl-map>\n"})}),"\n",(0,h.jsx)(t.h3,{id:"lambert-72-data-op-een-lambert-2008-kaart",children:"Lambert 72 data op een Lambert 2008 kaart"}),"\n",(0,h.jsxs)(t.p,{children:["Indien je vector kaartlagen (features en WFS) gebruikt met Lambert 72 coördinaten op een Lambert 2008 kaart, moet je de\nprojectie code ",(0,h.jsx)(t.code,{children:"EPSG:31370"})," meegeven als attribuut op de kaartlaag. Geef je geen projectie code mee, dan zal de\nkaartlaag de projectie code van de kaart overnemen."]}),"\n",(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:"language-html",children:'<vl-map lambert2008>\n    <vl-map-features-layer projection-code="EPSG:31370" ...></vl-map-features-layer>\n    <vl-map-wfs-layer projection-code="EPSG:31370" ...></vl-map-wfs-layer>\n</vl-map>\n'})}),"\n",(0,h.jsx)(l,{type:"warning",children:`
    De client-side transformatie van Lambert 72 naar Lambert 2008 heeft een begrensde nauwkeurigheid van ~1m. Is cm 
    nauwkeurigheid vereist, dan is het belangrijk dat de kaart en de kaartlagen hetzelfde co\xf6rdinatenstelsel gebruiken.
`}),"\n",(0,h.jsx)(t.h3,{id:"intekenen-op-een-lambert-2008-kaart",children:"Intekenen op een Lambert 2008 kaart"}),"\n",(0,h.jsx)(t.p,{children:"Om in te tekenen op een Lambert 2008 kaart moet een Lambert 2008 kaartlaag gebruikt worden, omwille van de\nbeschikbare nauwkeurigheid van ~1m van de Lambert 72 naar Lambert 2008 transformatie."}),"\n",(0,h.jsx)(t.p,{children:"Vereist je project Lambert 72 coordinaten bij het intekenen, dan wordt het upgraden naar de Lambert 2008 kaart\nbeter uitgesteld tot wanneer het project ook Lambert 2008 data ondersteunt. De regel hierbij is dat het\ncoördinatenstelsel van intekenen hetzelfde moet zijn als dat van de kaart."}),"\n",(0,h.jsx)(t.h2,{id:"ongeldige-geometrieën",children:"Ongeldige geometrieën"}),"\n",(0,h.jsxs)(t.p,{children:['Wanneer je op de kaart een ongeldige geometrie tekent, bijvoorbeeld een zelf-kruisende polygoon, dan krijgt deze\nstandaard een rode "invalid" stijl. Indien je dit niet wenst kan je het\nattribuut ',(0,h.jsx)(t.code,{children:"allow-invalid-geometries"})," gebruiken."]}),"\n",(0,h.jsxs)(t.p,{children:["Om te controleren of een kaart 1 of meerdere ongeldige geometrieën bevat kan je de methode\n",(0,h.jsx)(t.code,{children:"hasInvalidGeometries"})," gebruiken:"]}),"\n",(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:"language-typescript",children:"const map = document.querySelector('#my-map') as unknown as VlMap;\nconst hasInvalidGeometries = map.hasInvalidGeometries();\n"})}),"\n",(0,h.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,h.jsx)(b.ov,{of:A}),"\n",(0,h.jsx)(t.h2,{id:"varianten",children:"Varianten"}),"\n",(0,h.jsx)(t.h3,{id:"volledige-hoogte",children:"Volledige hoogte"}),"\n",(0,h.jsx)(t.p,{children:"De map de volledige beschikbare hoogte in laten nemen kan op de volgende manier:"}),"\n",(0,h.jsxs)(t.ul,{children:["\n",(0,h.jsxs)(t.li,{children:["plaats op de parent een ",(0,h.jsx)(t.code,{children:"height"})," of een ",(0,h.jsx)(t.code,{children:"min-height"})]}),"\n",(0,h.jsxs)(t.li,{children:["plaats op de parent ",(0,h.jsx)(t.code,{children:"display: flex"})," en ",(0,h.jsx)(t.code,{children:"flex-direction: column"})]}),"\n",(0,h.jsxs)(t.li,{children:["plaats op de vl-map het attribuut ",(0,h.jsx)(t.code,{children:"data-vl-full-height"})]}),"\n",(0,h.jsxs)(t.li,{children:["zorg dat de parent ",(0,h.jsx)(t.strong,{children:"geen elementen"})," heeft met ",(0,h.jsx)(t.code,{children:"position: fixed"})," die deel uit moeten maken van de hoogte"]}),"\n"]}),"\n",(0,h.jsx)(b.Hl,{of:I}),"\n",(0,h.jsx)(t.h3,{id:"playground",children:"Playground"}),"\n",(0,h.jsx)(t.p,{children:"Zie de code onder de story voor het volledige voorbeeld."}),"\n",(0,h.jsx)(b.Hl,{of:M}),"\n",(0,h.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,h.jsx)(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,h.jsxs)(t.p,{children:["De ",(0,h.jsx)(t.code,{children:"map"})," component is een component van Departement Omgeving en heeft geen Digitaal Vlaanderen documentatie."]}),"\n",(0,h.jsx)(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,h.jsx)(t.p,{children:(0,h.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-map--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Map"})}),"\n",(0,h.jsx)(t.p,{children:(0,h.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlMap.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Map"})}),"\n",(0,h.jsx)(t.p,{children:(0,h.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - Map"})})]})}function y(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}let f=e=>k(`${e}-action`),x=e=>k(`${e}-toggle-button`),w=["draw-point","draw-line","draw-polygon","modify","delete"],k=e=>{let t=document.getElementsByClassName(e);return t[t.length-1]},_=({detail:{previous:e,current:t}})=>{w.forEach(a=>{e===f(a)?x(a).on=!1:t===f(a)&&(x(a).on=!0)})},$=({detail:{layer:e,visible:t}})=>{for(let a of e.getElementsByClassName("action"))w.forEach(e=>{a===f(e)&&(x(e).disabled=!t)})},j=({detail:{value:e}})=>{let t=document.querySelectorAll("vl-map-features-layer");t?.forEach(t=>{t.setAttribute("data-vl-opacity",e/100)})};(0,n.gy)([r.I,o.Y,s.c]);let E={id:"map-map",title:"map/map",tags:["autodocs"],args:m,argTypes:v,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,u.RP)(),e.components);return t?(0,h.jsx)(t,Object.assign({},e,{children:(0,h.jsx)(g,e)})):g(e)}}}},A=(0,l._7)(m,({allowFullscreen:e,disableEscape:t,disableRotation:a,disableMousewheelZoom:l,disableKeyboard:n,noBorder:o,fullHeight:r})=>(0,i.qy)`
        <vl-map
            ?data-vl-allow-fullscreen=${e}
            ?data-vl-disable-escape-key=${t}
            ?data-vl-disable-rotation=${a}
            ?data-vl-disable-mouse-wheel-zoom=${l}
            ?data-vl-disable-keyboard=${n}
            ?data-vl-no-border=${o}
            ?data-vl-full-height=${r}
            data-vl-zoomInTooltip="Zoom in"
            data-vl-zoomOutTooltip="Zoom uit"
        >
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        </vl-map>
    `);A.storyName="vl-map - default";let I=(0,l._7)(m,({allowFullscreen:e,disableEscape:t,disableRotation:a,disableMousewheelZoom:l,disableKeyboard:n,noBorder:o,fullHeight:r})=>(0,i.qy)`
        <div style="height: 800px; display: flex; flex-direction: column; border: 1px solid black">
            <vl-functional-header
                data-vl-sub-title=${"Voor lager, middelbaar en hoger onderwijs"}
                data-vl-title=${"School- en studietoelagen"}
                data-vl-margin-bottom=${"none"}
                ?data-vl-disable-back-link=${!0}
            ></vl-functional-header>
            <vl-map
                ?data-vl-allow-fullscreen=${e}
                ?data-vl-disable-escape-key=${t}
                ?data-vl-disable-rotation=${a}
                ?data-vl-disable-mouse-wheel-zoom=${l}
                ?data-vl-disable-keyboard=${n}
                ?data-vl-no-border=${o}
                ?data-vl-full-height=${r}
                data-vl-zoomInTooltip="Zoom in"
                data-vl-zoomOutTooltip="Zoom uit"
            >
                <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            </vl-map>
        </div>
    `);I.storyName="vl-map - full height",I.args={noBorder:!0,fullHeight:!0};let S="rgba(102, 51, 153, 0.6)",C="width: 100%;",L="display: flex; gap: 1rem; align-items: center; margin-bottom: 1rem;",T={type:"FeatureCollection",features:[{type:"Feature",id:1,geometry:{type:"Point",coordinates:[21e4,19e4]}},{type:"Feature",id:2,geometry:{type:"LineString",coordinates:[[17e4,17e4],[15e4,206e3]]}},{type:"Feature",id:3,geometry:{type:"Polygon",coordinates:[[[44e3,171e3],[1e5,171e3],[1e5,205e3],[44e3,205e3],[44e3,171e3]]]}}]},M=(0,l._7)(m,({allowFullscreen:e,allowInvalidGeometry:t,disableEscape:a,disableRotation:l,disableMousewheelZoom:n,disableKeyboard:o,noBorder:r,fullHeight:s,activeActionChange:d,layerVisibleChange:p})=>(0,i.qy)`
        <vl-map
            id="map-playground"
            lambert2008
            ?allow-invalid-geometry=${t}
            ?data-vl-allow-fullscreen=${e}
            ?data-vl-disable-escape-key=${a}
            ?data-vl-disable-rotation=${l}
            ?data-vl-disable-mouse-wheel-zoom=${n}
            ?data-vl-disable-keyboard=${o}
            ?data-vl-no-border=${r}
            ?data-vl-full-height=${s}
            @vl-active-action-changed=${e=>{d({previous:e.detail.previous}),d({current:e.detail.current}),_(e)}}
            @vl-layer-visible-changed=${e=>{p(e.detail),$(e)}}
        >
            <vl-map-action-controls>
                <vl-map-measure-control></vl-map-measure-control>
            </vl-map-action-controls>

            <vl-map-side-sheet>
                <vl-title-next type="h6">Layers</vl-title-next>

                <vl-map-layer-switcher></vl-map-layer-switcher>
                <vl-input-slider data-vl-value=${100} @vl-change-value=${j}></vl-input-slider>

                <hr />

                <vl-title-next type="h6">Measure</vl-title-next>

                <div>
                    <vl-button-next
                        @click=${()=>{f("measure").active=!0}}
                    >
                        Start
                    </vl-button-next>
                    <vl-button-next
                        @click=${()=>{f("measure").active=!1}}
                    >
                        Stop
                    </vl-button-next>
                </div>

                <hr />

                <div style=${C}>
                    <vl-title-next type="h6">Shapes</vl-title-next>

                    <div style="margin-bottom: 2rem;">
                        <vl-button-next
                            toggle
                            class="modify-toggle-button"
                            @click=${()=>{f("modify").active=x("modify").on}}
                        >
                            Modify
                        </vl-button-next>
                        <vl-button-next
                            toggle
                            class="delete-toggle-button"
                            @click=${()=>{f("delete").active=x("delete").on}}
                        >
                            Delete
                        </vl-button-next>
                    </div>

                    <div style=${L}>
                        <vl-button-next
                            toggle
                            icon="pencil"
                            label="Toggle draw point action"
                            class="draw-point-toggle-button"
                            @click=${()=>{f("draw-point").active=x("draw-point").on}}
                        >
                        </vl-button-next>
                        <p>Draw point</p>
                    </div>

                    <div style=${L}>
                        <vl-button-next
                            toggle
                            icon="pencil"
                            label="Toggle draw line action"
                            class="draw-line-toggle-button"
                            @click=${()=>{f("draw-line").active=x("draw-line").on}}
                        >
                        </vl-button-next>
                        <p>Draw line</p>
                    </div>

                    <div style=${L}>
                        <vl-button-next
                            toggle
                            icon="pencil"
                            label="Toggle draw polygon action"
                            class="draw-polygon-toggle-button"
                            @click=${()=>{f("draw-polygon").active=x("draw-polygon").on}}
                        >
                        </vl-button-next>
                        <p>Draw Polygon</p>
                    </div>

                    <div>
                        <vl-button-next
                            @click=${()=>{let e=document.querySelector("#map-playground")?.hasInvalidGeometries();document.querySelector("#toaster-invalid").showAlert({icon:e?"alert-circle":"check-circle",type:e?"error":"success",message:`Deze kaart heeft ${e?"":"GEEN"} ongeldige geometrie\xebn.`,closable:!0})}}
                            >Check invalid shapes</vl-button-next
                        >
                        <vl-toaster-next id="toaster-invalid" fade-out></vl-toaster-next>
                    </div>
                </div>
            </vl-map-side-sheet>

            <vl-map-overview-map></vl-map-overview-map>

            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-baselayer-grb></vl-map-baselayer-grb>
            <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>

            <vl-map-features-layer data-vl-name="Shapes" .features=${T} projection-code="EPSG:31370">
                <vl-map-layer-style data-vl-name="Shapes" border-color=${S} color=${S}></vl-map-layer-style>
                <vl-map-layer-circle-style
                    data-vl-border-color=${S}
                    data-vl-color=${S}
                ></vl-map-layer-circle-style>

                <vl-map-draw-point-action class="draw-point-action action"></vl-map-draw-point-action>
                <vl-map-draw-line-action class="draw-line-action action"></vl-map-draw-line-action>
                <vl-map-draw-polygon-action class="draw-polygon-action action"></vl-map-draw-polygon-action>

                <vl-map-modify-action class="modify-action action"></vl-map-modify-action>
                <vl-map-delete-action class="delete-action action"></vl-map-delete-action>
                <vl-map-select-action class="select-action action" data-vl-default-active></vl-map-select-action>
            </vl-map-features-layer>

            <vl-map-features-layer data-vl-name="Measurements" projection-code="EPSG:31370">
                <vl-map-layer-style
                    data-vl-color="rgba(6, 163, 247, 1)"
                    data-vl-border-size="2"
                    data-vl-border-color="rgba(6, 163, 247, 1)"
                ></vl-map-layer-style>
                <vl-map-measure-action class="measure-action action"></vl-map-measure-action>
            </vl-map-features-layer>
            <vl-map-legend data-vl-placement=${c.s.BOTTOM_RIGHT} right="140px"></vl-map-legend>
        </vl-map>
    `);M.storyName="vl-map - playground";let O=(0,l._7)(m,({allowFullscreen:e,allowInvalidGeometry:t,disableEscape:a,disableRotation:l,disableMousewheelZoom:n,disableKeyboard:o,noBorder:r,fullHeight:s,activeActionChange:d,layerVisibleChange:p})=>(0,i.qy)`
        <vl-map
            id="map-playground-lb72"
            ?allow-invalid-geometry=${t}
            ?data-vl-allow-fullscreen=${e}
            ?data-vl-disable-escape-key=${a}
            ?data-vl-disable-rotation=${l}
            ?data-vl-disable-mouse-wheel-zoom=${n}
            ?data-vl-disable-keyboard=${o}
            ?data-vl-no-border=${r}
            ?data-vl-full-height=${s}
            @vl-active-action-changed=${e=>{d({previous:e.detail.previous}),d({current:e.detail.current}),_(e)}}
            @vl-layer-visible-changed=${e=>{p(e.detail),$(e)}}
        >
            <vl-map-action-controls>
                <vl-map-measure-control></vl-map-measure-control>
            </vl-map-action-controls>

            <vl-map-side-sheet>
                <vl-title-next type="h6">Layers</vl-title-next>

                <vl-map-layer-switcher></vl-map-layer-switcher>
                <vl-input-slider data-vl-value=${100} @vl-change-value=${j}></vl-input-slider>

                <hr />

                <vl-title-next type="h6">Measure</vl-title-next>

                <div>
                    <vl-button-next
                        @click=${()=>{f("measure").active=!0}}
                    >
                        Start
                    </vl-button-next>
                    <vl-button-next
                        @click=${()=>{f("measure").active=!1}}
                    >
                        Stop
                    </vl-button-next>
                </div>

                <hr />

                <div style=${C}>
                    <vl-title-next type="h6">Shapes</vl-title-next>

                    <div style="margin-bottom: 2rem;">
                        <vl-button-next
                            toggle
                            class="modify-toggle-button"
                            @click=${()=>{f("modify").active=x("modify").on}}
                        >
                            Modify
                        </vl-button-next>
                        <vl-button-next
                            toggle
                            class="delete-toggle-button"
                            @click=${()=>{f("delete").active=x("delete").on}}
                        >
                            Delete
                        </vl-button-next>
                    </div>

                    <div style=${L}>
                        <vl-button-next
                            toggle
                            icon="pencil"
                            label="Toggle draw point action"
                            class="draw-point-toggle-button"
                            @click=${()=>{f("draw-point").active=x("draw-point").on}}
                        >
                        </vl-button-next>
                        <p>Draw point</p>
                    </div>

                    <div style=${L}>
                        <vl-button-next
                            toggle
                            icon="pencil"
                            label="Toggle draw line action"
                            class="draw-line-toggle-button"
                            @click=${()=>{f("draw-line").active=x("draw-line").on}}
                        >
                        </vl-button-next>
                        <p>Draw line</p>
                    </div>

                    <div style=${L}>
                        <vl-button-next
                            toggle
                            icon="pencil"
                            label="Toggle draw polygon action"
                            class="draw-polygon-toggle-button"
                            @click=${()=>{f("draw-polygon").active=x("draw-polygon").on}}
                        >
                        </vl-button-next>
                        <p>Draw Polygon</p>
                    </div>

                    <div>
                        <vl-button-next
                            @click=${()=>{let e=document.querySelector("#map-playground-lb72")?.hasInvalidGeometries();document.querySelector("#toaster-invalid-lb72").showAlert({icon:e?"alert-circle":"check-circle",type:e?"error":"success",message:`Deze kaart heeft ${e?"":"GEEN"} ongeldige geometrie\xebn.`,closable:!0})}}
                            >Check invalid shapes</vl-button-next
                        >
                        <vl-toaster-next id="toaster-invalid-lb72" fade-out></vl-toaster-next>
                    </div>
                </div>
            </vl-map-side-sheet>

            <vl-map-overview-map></vl-map-overview-map>

            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-baselayer-grb></vl-map-baselayer-grb>
            <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>

            <vl-map-features-layer data-vl-name="Shapes" .features=${T}>
                <vl-map-layer-style
                    data-vl-name="Shapes"
                    data-vl-border-color=${S}
                    data-vl-color=${S}
                ></vl-map-layer-style>
                <vl-map-layer-circle-style
                    data-vl-border-color=${S}
                    data-vl-color=${S}
                ></vl-map-layer-circle-style>

                <vl-map-draw-point-action class="draw-point-action action"></vl-map-draw-point-action>
                <vl-map-draw-line-action class="draw-line-action action"></vl-map-draw-line-action>
                <vl-map-draw-polygon-action class="draw-polygon-action action"></vl-map-draw-polygon-action>

                <vl-map-modify-action class="modify-action action"></vl-map-modify-action>
                <vl-map-delete-action class="delete-action action"></vl-map-delete-action>
                <vl-map-select-action class="select-action action" data-vl-default-active></vl-map-select-action>
            </vl-map-features-layer>

            <vl-map-features-layer data-vl-name="Measurements">
                <vl-map-layer-style
                    data-vl-color="rgba(6, 163, 247, 1)"
                    data-vl-border-size="2"
                    data-vl-border-color="rgba(6, 163, 247, 1)"
                ></vl-map-layer-style>
                <vl-map-measure-action class="measure-action action"></vl-map-measure-action>
            </vl-map-features-layer>
            <vl-map-legend data-vl-placement=${c.s.BOTTOM_RIGHT} right="140px"></vl-map-legend>
        </vl-map>
    `);O.storyName="vl-map - playground - Lambert 72",A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:'story(mapArgs, ({\n  allowFullscreen,\n  disableEscape,\n  disableRotation,\n  disableMousewheelZoom,\n  disableKeyboard,\n  noBorder,\n  fullHeight\n}) => html`\n        <vl-map\n            ?data-vl-allow-fullscreen=${allowFullscreen}\n            ?data-vl-disable-escape-key=${disableEscape}\n            ?data-vl-disable-rotation=${disableRotation}\n            ?data-vl-disable-mouse-wheel-zoom=${disableMousewheelZoom}\n            ?data-vl-disable-keyboard=${disableKeyboard}\n            ?data-vl-no-border=${noBorder}\n            ?data-vl-full-height=${fullHeight}\n            data-vl-zoomInTooltip="Zoom in"\n            data-vl-zoomOutTooltip="Zoom uit"\n        >\n            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>\n        </vl-map>\n    `)',...A.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:"story(mapArgs, ({\n  allowFullscreen,\n  disableEscape,\n  disableRotation,\n  disableMousewheelZoom,\n  disableKeyboard,\n  noBorder,\n  fullHeight\n}) => html`\n        <div style=\"height: 800px; display: flex; flex-direction: column; border: 1px solid black\">\n            <vl-functional-header\n                data-vl-sub-title=${'Voor lager, middelbaar en hoger onderwijs'}\n                data-vl-title=${'School- en studietoelagen'}\n                data-vl-margin-bottom=${'none'}\n                ?data-vl-disable-back-link=${true}\n            ></vl-functional-header>\n            <vl-map\n                ?data-vl-allow-fullscreen=${allowFullscreen}\n                ?data-vl-disable-escape-key=${disableEscape}\n                ?data-vl-disable-rotation=${disableRotation}\n                ?data-vl-disable-mouse-wheel-zoom=${disableMousewheelZoom}\n                ?data-vl-disable-keyboard=${disableKeyboard}\n                ?data-vl-no-border=${noBorder}\n                ?data-vl-full-height=${fullHeight}\n                data-vl-zoomInTooltip=\"Zoom in\"\n                data-vl-zoomOutTooltip=\"Zoom uit\"\n            >\n                <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>\n            </vl-map>\n        </div>\n    `)",...I.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:'story(mapArgs, ({\n  allowFullscreen,\n  allowInvalidGeometry,\n  disableEscape,\n  disableRotation,\n  disableMousewheelZoom,\n  disableKeyboard,\n  noBorder,\n  fullHeight,\n  activeActionChange,\n  layerVisibleChange\n}) => html`\n        <vl-map\n            id="map-playground"\n            lambert2008\n            ?allow-invalid-geometry=${allowInvalidGeometry}\n            ?data-vl-allow-fullscreen=${allowFullscreen}\n            ?data-vl-disable-escape-key=${disableEscape}\n            ?data-vl-disable-rotation=${disableRotation}\n            ?data-vl-disable-mouse-wheel-zoom=${disableMousewheelZoom}\n            ?data-vl-disable-keyboard=${disableKeyboard}\n            ?data-vl-no-border=${noBorder}\n            ?data-vl-full-height=${fullHeight}\n            @vl-active-action-changed=${event => {\n  activeActionChange({\n    previous: event.detail.previous\n  });\n  activeActionChange({\n    current: event.detail.current\n  });\n  handleActiveActionChange(event);\n}}\n            @vl-layer-visible-changed=${event => {\n  layerVisibleChange(event.detail);\n  handleLayerVisibleChange(event);\n}}\n        >\n            <vl-map-action-controls>\n                <vl-map-measure-control></vl-map-measure-control>\n            </vl-map-action-controls>\n\n            <vl-map-side-sheet>\n                <vl-title-next type="h6">Layers</vl-title-next>\n\n                <vl-map-layer-switcher></vl-map-layer-switcher>\n                <vl-input-slider data-vl-value=${100} @vl-change-value=${handleOpacitySliderChange}></vl-input-slider>\n\n                <hr />\n\n                <vl-title-next type="h6">Measure</vl-title-next>\n\n                <div>\n                    <vl-button-next\n                        @click=${() => {\n  getActionElement(\'measure\').active = true;\n}}\n                    >\n                        Start\n                    </vl-button-next>\n                    <vl-button-next\n                        @click=${() => {\n  getActionElement(\'measure\').active = false;\n}}\n                    >\n                        Stop\n                    </vl-button-next>\n                </div>\n\n                <hr />\n\n                <div style=${toggleGroupStyling}>\n                    <vl-title-next type="h6">Shapes</vl-title-next>\n\n                    <div style="margin-bottom: 2rem;">\n                        <vl-button-next\n                            toggle\n                            class="modify-toggle-button"\n                            @click=${() => {\n  getActionElement(\'modify\').active = getToggleButton(\'modify\').on;\n}}\n                        >\n                            Modify\n                        </vl-button-next>\n                        <vl-button-next\n                            toggle\n                            class="delete-toggle-button"\n                            @click=${() => {\n  getActionElement(\'delete\').active = getToggleButton(\'delete\').on;\n}}\n                        >\n                            Delete\n                        </vl-button-next>\n                    </div>\n\n                    <div style=${toggleItemStyling}>\n                        <vl-button-next\n                            toggle\n                            icon="pencil"\n                            label="Toggle draw point action"\n                            class="draw-point-toggle-button"\n                            @click=${() => {\n  getActionElement(\'draw-point\').active = getToggleButton(\'draw-point\').on;\n}}\n                        >\n                        </vl-button-next>\n                        <p>Draw point</p>\n                    </div>\n\n                    <div style=${toggleItemStyling}>\n                        <vl-button-next\n                            toggle\n                            icon="pencil"\n                            label="Toggle draw line action"\n                            class="draw-line-toggle-button"\n                            @click=${() => {\n  getActionElement(\'draw-line\').active = getToggleButton(\'draw-line\').on;\n}}\n                        >\n                        </vl-button-next>\n                        <p>Draw line</p>\n                    </div>\n\n                    <div style=${toggleItemStyling}>\n                        <vl-button-next\n                            toggle\n                            icon="pencil"\n                            label="Toggle draw polygon action"\n                            class="draw-polygon-toggle-button"\n                            @click=${() => {\n  getActionElement(\'draw-polygon\').active = getToggleButton(\'draw-polygon\').on;\n}}\n                        >\n                        </vl-button-next>\n                        <p>Draw Polygon</p>\n                    </div>\n\n                    <div>\n                        <vl-button-next\n                            @click=${() => {\n  const hasInvalidGeometries = ((document.querySelector(\'#map-playground\') as unknown) as VlMap)?.hasInvalidGeometries();\n  const toaster = document.querySelector<VlToasterComponent>(\'#toaster-invalid\');\n  toaster.showAlert({\n    icon: hasInvalidGeometries ? \'alert-circle\' : \'check-circle\',\n    type: hasInvalidGeometries ? \'error\' : \'success\',\n    message: `Deze kaart heeft ${hasInvalidGeometries ? \'\' : \'GEEN\'} ongeldige geometrieën.`,\n    closable: true\n  });\n}}\n                            >Check invalid shapes</vl-button-next\n                        >\n                        <vl-toaster-next id="toaster-invalid" fade-out></vl-toaster-next>\n                    </div>\n                </div>\n            </vl-map-side-sheet>\n\n            <vl-map-overview-map></vl-map-overview-map>\n\n            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>\n            <vl-map-baselayer-grb></vl-map-baselayer-grb>\n            <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>\n\n            <vl-map-features-layer data-vl-name="Shapes" .features=${features} projection-code="EPSG:31370">\n                <vl-map-layer-style data-vl-name="Shapes" border-color=${purple} color=${purple}></vl-map-layer-style>\n                <vl-map-layer-circle-style\n                    data-vl-border-color=${purple}\n                    data-vl-color=${purple}\n                ></vl-map-layer-circle-style>\n\n                <vl-map-draw-point-action class="draw-point-action action"></vl-map-draw-point-action>\n                <vl-map-draw-line-action class="draw-line-action action"></vl-map-draw-line-action>\n                <vl-map-draw-polygon-action class="draw-polygon-action action"></vl-map-draw-polygon-action>\n\n                <vl-map-modify-action class="modify-action action"></vl-map-modify-action>\n                <vl-map-delete-action class="delete-action action"></vl-map-delete-action>\n                <vl-map-select-action class="select-action action" data-vl-default-active></vl-map-select-action>\n            </vl-map-features-layer>\n\n            <vl-map-features-layer data-vl-name="Measurements" projection-code="EPSG:31370">\n                <vl-map-layer-style\n                    data-vl-color="rgba(6, 163, 247, 1)"\n                    data-vl-border-size="2"\n                    data-vl-border-color="rgba(6, 163, 247, 1)"\n                ></vl-map-layer-style>\n                <vl-map-measure-action class="measure-action action"></vl-map-measure-action>\n            </vl-map-features-layer>\n            <vl-map-legend data-vl-placement=${LEGEND_PLACEMENT.BOTTOM_RIGHT} right="140px"></vl-map-legend>\n        </vl-map>\n    `)',...M.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:'story(mapArgs, ({\n  allowFullscreen,\n  allowInvalidGeometry,\n  disableEscape,\n  disableRotation,\n  disableMousewheelZoom,\n  disableKeyboard,\n  noBorder,\n  fullHeight,\n  activeActionChange,\n  layerVisibleChange\n}) => html`\n        <vl-map\n            id="map-playground-lb72"\n            ?allow-invalid-geometry=${allowInvalidGeometry}\n            ?data-vl-allow-fullscreen=${allowFullscreen}\n            ?data-vl-disable-escape-key=${disableEscape}\n            ?data-vl-disable-rotation=${disableRotation}\n            ?data-vl-disable-mouse-wheel-zoom=${disableMousewheelZoom}\n            ?data-vl-disable-keyboard=${disableKeyboard}\n            ?data-vl-no-border=${noBorder}\n            ?data-vl-full-height=${fullHeight}\n            @vl-active-action-changed=${event => {\n  activeActionChange({\n    previous: event.detail.previous\n  });\n  activeActionChange({\n    current: event.detail.current\n  });\n  handleActiveActionChange(event);\n}}\n            @vl-layer-visible-changed=${event => {\n  layerVisibleChange(event.detail);\n  handleLayerVisibleChange(event);\n}}\n        >\n            <vl-map-action-controls>\n                <vl-map-measure-control></vl-map-measure-control>\n            </vl-map-action-controls>\n\n            <vl-map-side-sheet>\n                <vl-title-next type="h6">Layers</vl-title-next>\n\n                <vl-map-layer-switcher></vl-map-layer-switcher>\n                <vl-input-slider data-vl-value=${100} @vl-change-value=${handleOpacitySliderChange}></vl-input-slider>\n\n                <hr />\n\n                <vl-title-next type="h6">Measure</vl-title-next>\n\n                <div>\n                    <vl-button-next\n                        @click=${() => {\n  getActionElement(\'measure\').active = true;\n}}\n                    >\n                        Start\n                    </vl-button-next>\n                    <vl-button-next\n                        @click=${() => {\n  getActionElement(\'measure\').active = false;\n}}\n                    >\n                        Stop\n                    </vl-button-next>\n                </div>\n\n                <hr />\n\n                <div style=${toggleGroupStyling}>\n                    <vl-title-next type="h6">Shapes</vl-title-next>\n\n                    <div style="margin-bottom: 2rem;">\n                        <vl-button-next\n                            toggle\n                            class="modify-toggle-button"\n                            @click=${() => {\n  getActionElement(\'modify\').active = getToggleButton(\'modify\').on;\n}}\n                        >\n                            Modify\n                        </vl-button-next>\n                        <vl-button-next\n                            toggle\n                            class="delete-toggle-button"\n                            @click=${() => {\n  getActionElement(\'delete\').active = getToggleButton(\'delete\').on;\n}}\n                        >\n                            Delete\n                        </vl-button-next>\n                    </div>\n\n                    <div style=${toggleItemStyling}>\n                        <vl-button-next\n                            toggle\n                            icon="pencil"\n                            label="Toggle draw point action"\n                            class="draw-point-toggle-button"\n                            @click=${() => {\n  getActionElement(\'draw-point\').active = getToggleButton(\'draw-point\').on;\n}}\n                        >\n                        </vl-button-next>\n                        <p>Draw point</p>\n                    </div>\n\n                    <div style=${toggleItemStyling}>\n                        <vl-button-next\n                            toggle\n                            icon="pencil"\n                            label="Toggle draw line action"\n                            class="draw-line-toggle-button"\n                            @click=${() => {\n  getActionElement(\'draw-line\').active = getToggleButton(\'draw-line\').on;\n}}\n                        >\n                        </vl-button-next>\n                        <p>Draw line</p>\n                    </div>\n\n                    <div style=${toggleItemStyling}>\n                        <vl-button-next\n                            toggle\n                            icon="pencil"\n                            label="Toggle draw polygon action"\n                            class="draw-polygon-toggle-button"\n                            @click=${() => {\n  getActionElement(\'draw-polygon\').active = getToggleButton(\'draw-polygon\').on;\n}}\n                        >\n                        </vl-button-next>\n                        <p>Draw Polygon</p>\n                    </div>\n\n                    <div>\n                        <vl-button-next\n                            @click=${() => {\n  const hasInvalidGeometries = ((document.querySelector(\'#map-playground-lb72\') as unknown) as VlMap)?.hasInvalidGeometries();\n  const toaster = document.querySelector<VlToasterComponent>(\'#toaster-invalid-lb72\');\n  toaster.showAlert({\n    icon: hasInvalidGeometries ? \'alert-circle\' : \'check-circle\',\n    type: hasInvalidGeometries ? \'error\' : \'success\',\n    message: `Deze kaart heeft ${hasInvalidGeometries ? \'\' : \'GEEN\'} ongeldige geometrieën.`,\n    closable: true\n  });\n}}\n                            >Check invalid shapes</vl-button-next\n                        >\n                        <vl-toaster-next id="toaster-invalid-lb72" fade-out></vl-toaster-next>\n                    </div>\n                </div>\n            </vl-map-side-sheet>\n\n            <vl-map-overview-map></vl-map-overview-map>\n\n            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>\n            <vl-map-baselayer-grb></vl-map-baselayer-grb>\n            <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>\n\n            <vl-map-features-layer data-vl-name="Shapes" .features=${features}>\n                <vl-map-layer-style\n                    data-vl-name="Shapes"\n                    data-vl-border-color=${purple}\n                    data-vl-color=${purple}\n                ></vl-map-layer-style>\n                <vl-map-layer-circle-style\n                    data-vl-border-color=${purple}\n                    data-vl-color=${purple}\n                ></vl-map-layer-circle-style>\n\n                <vl-map-draw-point-action class="draw-point-action action"></vl-map-draw-point-action>\n                <vl-map-draw-line-action class="draw-line-action action"></vl-map-draw-line-action>\n                <vl-map-draw-polygon-action class="draw-polygon-action action"></vl-map-draw-polygon-action>\n\n                <vl-map-modify-action class="modify-action action"></vl-map-modify-action>\n                <vl-map-delete-action class="delete-action action"></vl-map-delete-action>\n                <vl-map-select-action class="select-action action" data-vl-default-active></vl-map-select-action>\n            </vl-map-features-layer>\n\n            <vl-map-features-layer data-vl-name="Measurements">\n                <vl-map-layer-style\n                    data-vl-color="rgba(6, 163, 247, 1)"\n                    data-vl-border-size="2"\n                    data-vl-border-color="rgba(6, 163, 247, 1)"\n                ></vl-map-layer-style>\n                <vl-map-measure-action class="measure-action action"></vl-map-measure-action>\n            </vl-map-features-layer>\n            <vl-map-legend data-vl-placement=${LEGEND_PLACEMENT.BOTTOM_RIGHT} right="140px"></vl-map-legend>\n        </vl-map>\n    `)',...O.parameters?.docs?.source}}};let R=["MapDefault","MapFullHeight","MapPlayground","MapPlaygroundLB72"]},"../../libs/components/src/next/title/index.ts":(e,t,a)=>{a.d(t,{I:()=>l.I});var l=a("../../libs/components/src/next/title/vl-title.component.ts")},"../../libs/components/src/next/title/vl-title.component.ts":(e,t,a)=>{a.d(t,{I:()=>c});var l=a("../../libs/common/utilities/src/index.ts");a("../../node_modules/@lit/reactive-element/reactive-element.js");var n=a("../../node_modules/lit-html/lit-html.js");a("../../node_modules/lit-element/lit-element.js");/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var o=(e,t,a)=>{for(var l of t)if(l[0]===e)return(0,l[1])();return null==a?void 0:a()},r=a("../../node_modules/lit/directives/class-map.js"),s=a("../../libs/components/src/next/title/vl-title.css.ts"),i=a("../../libs/components/src/next/title/vl-title.defaults.ts");class c extends l.jW{static get styles(){return[s.Z]}static get properties(){return{type:{type:String},underline:{type:Boolean},noSpaceBottom:{type:Boolean,attribute:"no-space-bottom"},alt:{type:Boolean}}}render(){let e={underline:this.underline,"no-space-bottom":this.noSpaceBottom,alt:this.alt};return(0,n.qy)`
            ${o(this.type,[["h1",()=>(0,n.qy)` <h1 class=${(0,r.H)(e)} part="h1">
                            <slot></slot>
                        </h1>`],["h2",()=>(0,n.qy)` <h2 class=${(0,r.H)(e)} part="h2">
                            <slot></slot>
                        </h2>`],["h3",()=>(0,n.qy)` <h3 class=${(0,r.H)(e)} part="h3">
                            <slot></slot>
                        </h3>`],["h4",()=>(0,n.qy)` <h4 class=${(0,r.H)(e)} part="h4">
                            <slot></slot>
                        </h4>`],["h5",()=>(0,n.qy)` <h5 class=${(0,r.H)(e)} part="h5">
                            <slot></slot>
                        </h5>`],["h6",()=>(0,n.qy)` <h6 class=${(0,r.H)(e)} part="h6">
                            <slot></slot>
                        </h6>`]],()=>(0,n.qy)` <h1 class=${(0,r.H)(e)} part="h1">
                    <slot></slot>
                </h1>`)}
        `}constructor(...e){super(...e),this.type=i.D.type,this.underline=i.D.underline,this.noSpaceBottom=i.D.noSpaceBottom,this.alt=i.D.alt}}c=function(e,t,a,l){var n,o=arguments.length,r=o<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,a):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,l);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,a,r):n(t,a))||r);return o>3&&r&&Object.defineProperty(t,a,r),r}([(0,l.M1)("vl-title-next")],c)},"../../libs/components/src/next/title/vl-title.defaults.ts":(e,t,a)=>{a.d(t,{D:()=>l});let l={type:"h1",underline:!1,alt:!1,noSpaceBottom:!1}},"../../libs/components/src/next/toaster/vl-toaster.component.ts":(e,t,a)=>{a.d(t,{c:()=>i});var l=a("../../libs/common/utilities/src/index.ts"),n=a("../../node_modules/lit/index.js"),o=a("../../libs/components/src/alert/index.ts");let r=(0,n.AH)`
    :host {
        position: fixed;
        width: 100%;
        max-width: 30rem;
        top: 0;
        right: 0;
        z-index: var(--vl-z-layer--toaster);

        ::slotted(vl-alert),
        vl-alert {
            display: block;
            margin: 1rem 1rem 0 0;
        }
    }

    :host([placement='top-left']) {
        right: auto;
        left: 0;

        ::slotted(vl-alert),
        vl-alert {
            margin: 1rem 0 0 1rem;
        }
    }

    :host([placement='bottom-right']) {
        top: auto;
        bottom: 0;

        ::slotted(vl-alert),
        vl-alert {
            margin: 0 1rem 1rem 0;
        }
    }

    :host([placement='bottom-left']) {
        top: auto;
        right: auto;
        bottom: 0;
        left: 0;

        ::slotted(vl-alert),
        vl-alert {
            margin: 0 0 1rem 1rem;
        }
    }

    :host output * {
        animation: fade-in 0.3s ease;
    }

    :host([fade-out]) output * {
        animation: fade-in 0.3s ease, fade-out 0.3s ease 4.4s;
    }

    @keyframes fade-in {
        from {
            opacity: 0;
        }
    }

    @keyframes fade-out {
        to {
            opacity: 0;
        }
    }
`;var s=a("../../libs/components/src/next/toaster/vl-toaster.defaults.ts");(0,l.gy)([o.rC]);class i extends l.jW{static get styles(){return[r]}static get properties(){return{fadeOut:{type:Boolean,attribute:"fade-out"},placement:{type:String}}}render(){return(0,n.qy)`
            <output class="vl-toaster">
                <slot></slot>
            </output>
        `}disconnectedCallback(){this.abortController.abort("animationend")}show(e){let t;let a=this.children[0]?.cloneNode(!0);if(!e&&a)t=a,t?.removeAttribute("id"),t?.removeAttribute("slot");else if(e&&"string"==typeof e){let a=document.querySelector(e);t=a?.cloneNode(!0),t?.removeAttribute("id"),t?.removeAttribute("slot")}else e instanceof HTMLElement&&(t=e);t&&this.showToast(t)}showAlert(e){let t=document.createElement("vl-alert");Object.entries(e).forEach(([e,a])=>{a&&t.setAttribute(`data-vl-${e}`,a)}),this.showToast(t)}get outputElement(){return this.shadowRoot?.querySelector("output")}constructor(...e){super(...e),this.fadeOut=s.P.fadeOut,this.placement=s.P.placement,this.abortController=new AbortController,this.initialized=!1,this.showToast=async e=>{this.initialized||(this.initialized=!0,await this.updateComplete),"bottom-right"===this.placement||"bottom-left"===this.placement?this.outputElement?.appendChild(e):this.outputElement?.prepend(e),this.fadeOut&&e.addEventListener("animationend",t=>{t?.animationName==="fade-out"&&e.remove()},{signal:this.abortController.signal})}}}i=function(e,t,a,l){var n,o=arguments.length,r=o<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,a):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,l);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,a,r):n(t,a))||r);return o>3&&r&&Object.defineProperty(t,a,r),r}([(0,l.M1)("vl-toaster-next")],i)},"../../libs/components/src/next/toaster/vl-toaster.defaults.ts":(e,t,a)=>{a.d(t,{P:()=>l});let l={fadeOut:!1,placement:"top-right"}},"../../libs/form/src/next/checkbox/index.ts":(e,t,a)=>{a.d(t,{v:()=>l.v});var l=a("../../libs/form/src/next/checkbox/vl-checkbox.component.ts")},"../../libs/form/src/next/checkbox/vl-checkbox.component.ts":(e,t,a)=>{a.d(t,{v:()=>m});var l=a("../../libs/common/utilities/src/index.ts"),n=a("../../libs/elements/src/index.ts"),o=a("../../node_modules/@domg/govflanders-style/common/index.js"),r=a("../../node_modules/@domg/govflanders-style/component/index.js"),s=a("../../node_modules/lit/index.js"),i=a("../../node_modules/lit/directives/class-map.js"),c=a("../../libs/form/src/next/form-control/form-control.ts");let d=(0,s.AH)`
    :host {
        --vl-checkbox--switch__error-color: #d2373c;
        --vl-checkbox--switch__error-background-color: #fbebec;
        --vl-checkbox--switch__success-color: #009e47;
        --vl-checkbox--switch__success-background-color: #e6f5ed;
    }

    .vl-checkbox--error .vl-checkbox--switch + .vl-checkbox__label .vl-checkbox--switch__label::after {
        border-color: var(--vl-checkbox--switch__error-color) !important;
    }

    .vl-checkbox--error .vl-checkbox--switch:not(:checked) + .vl-checkbox__label .vl-checkbox--switch__label::after {
        background: #fff;
    }
    .vl-checkbox--error .vl-checkbox--switch + .vl-checkbox__label .vl-checkbox--switch__label {
        background: #fff;
        color: var(--vl-checkbox--switch__error-color);
        border-color: var(--vl-checkbox--switch__error-color);
    }

    .vl-checkbox--error .vl-checkbox--switch:checked + .vl-checkbox__label .vl-checkbox--switch__label {
        background: var(--vl-checkbox--switch__error-background-color);
        border-color: var(--vl-checkbox--switch__error-color);
    }

    .vl-checkbox--success .vl-checkbox--switch + .vl-checkbox__label .vl-checkbox--switch__label::after {
        border-color: var(--vl-checkbox--switch__success-color) !important;
    }

    .vl-checkbox--success .vl-checkbox--switch:not(:checked) + .vl-checkbox__label .vl-checkbox--switch__label::after {
        background: #fff;
    }
    .vl-checkbox--success .vl-checkbox--switch + .vl-checkbox__label .vl-checkbox--switch__label {
        background: #fff;
        color: var(--vl-checkbox--switch__success-color);
        border-color: var(--vl-checkbox--switch__success-color);
    }

    .vl-checkbox--success .vl-checkbox--switch:checked + .vl-checkbox__label .vl-checkbox--switch__label {
        background: var(--vl-checkbox--switch__success-background-color);
        border-color: var(--vl-checkbox--switch__success-color);
    }
`;var p=a("../../libs/form/src/next/checkbox/vl-checkbox.defaults.ts");class m extends c.M{static get styles(){return[o.h8,o.BI,n.hF,r.Bc,d]}static get properties(){return{block:{type:Boolean},value:{type:String},checked:{type:Boolean,reflect:!0},isSwitch:{type:Boolean,attribute:"switch"}}}connectedCallback(){super.connectedCallback(),this.initialValue||(this.initialValue=this.value,this.initialCheckedValue=this.checked)}updated(e){if(super.updated(e),e.has("checked")||e.has("value")){let e=this.checked?this.value||"on":null,t={checked:this.checked,currentTarget:this};this.checked&&(t.value=e),this.setValue(e),this.dispatchEvent(new CustomEvent("vl-change",{composed:!0,bubbles:!0,detail:t})),this.dispatchInput&&(this.dispatchEvent(new CustomEvent("vl-input",{bubbles:!0,composed:!0,detail:t})),this.dispatchInput=!1),this.dispatchEventIfValid(t)}}render(){return(0,s.qy)` ${this.isSwitch?this.renderCheckboxSwitch():this.renderCheckboxDefault()} `}renderCheckboxDefault(){let e={"vl-checkbox":!0,"vl-checkbox--disabled":this.disabled,"vl-checkbox--error":this.isInvalid||this.error,"vl-checkbox--success":this.success,"vl-checkbox--block":this.block};return(0,s.qy)`
            <label class=${(0,i.H)(e)}>
                <input
                    id=${this.id||s.s6}
                    name=${this.name||s.s6}
                    class="vl-checkbox__toggle"
                    type="checkbox"
                    aria-invalid=${this.isInvalid||s.s6}
                    ?required=${this.required}
                    ?disabled=${this.disabled}
                    ?error=${this.error}
                    .value=${this.value}
                    .checked=${this.checked}
                    @click=${this.toggle}
                />
                <div class="vl-checkbox__label">
                    <i class="vl-checkbox__box" aria-hidden="true"></i>
                    <span>
                        <slot></slot>
                    </span>
                </div>
            </label>
        `}renderCheckboxSwitch(){let e={"vl-checkbox--switch__wrapper":!0,"vl-checkbox--disabled":this.disabled,"vl-checkbox--error":this.isInvalid||this.error,"vl-checkbox--success":this.success,"vl-checkbox--block":this.block};return(0,s.qy)`
            <div class=${(0,i.H)(e)}>
                <input
                    id=${this.id||s.s6}
                    name=${this.name||s.s6}
                    type="checkbox"
                    class="vl-checkbox--switch"
                    role="switch"
                    ?required=${this.required}
                    ?disabled=${this.disabled}
                    ?error=${this.error}
                    .value=${this.value}
                    .checked=${this.checked}
                    @click=${this.toggle}
                />
                <label for=${this.id} class="vl-checkbox__label">
                    <span class="vl-checkbox--switch__label">
                        <span aria-hidden="true"></span>
                    </span>
                    <span>
                        <slot></slot>
                    </span>
                </label>
            </div>
        `}get validationTarget(){return this.shadowRoot?.querySelector("input")}resetFormControl(){super.resetFormControl(),this.checked=this.initialCheckedValue,this.value=this.initialValue}toggle(){this.checked=!this.checked,this.dispatchInput=!0}constructor(...e){super(...e),this.block=p.o.block,this.value=p.o.value,this.checked=p.o.checked,this.isSwitch=p.o.isSwitch,this.initialValue=null,this.initialCheckedValue=!1,this.dispatchInput=!1}}m=function(e,t,a,l){var n,o=arguments.length,r=o<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,a):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,l);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,a,r):n(t,a))||r);return o>3&&r&&Object.defineProperty(t,a,r),r}([(0,l.M1)("vl-checkbox-next")],m)},"../../libs/form/src/next/checkbox/vl-checkbox.defaults.ts":(e,t,a)=>{a.d(t,{o:()=>l});let l={...a("../../libs/form/src/next/form-control/form-control.defaults.ts").i,block:!1,value:null,checked:!1,isSwitch:!1}},"../../libs/map/src/actions/delete/delete-action.ts":(e,t,a)=>{a.d(t,{Q:()=>i});var l=a("../../node_modules/ol/style/Style.js"),n=a("../../node_modules/ol/style/Fill.js"),o=a("../../node_modules/ol/style/Stroke.js"),r=a("../../node_modules/ol/style/Circle.js"),s=a("../../libs/map/src/actions/select/box-select-action.ts");class i extends s.o{constructor(e,t,a={}){let s=new l.Ay({fill:new n.A({color:"rgba(241, 174, 174, 0.26)"}),stroke:new o.A({color:"#db3434",width:1}),image:new r.A({radius:4,stroke:new o.A({color:"#db3434",width:1}),fill:new n.A({color:"rgba(241, 174, 174, 0.26)"})})}),i=t=>{t&&(null==t.getId()||e.getSource().getFeatureById(t.getId())===t)&&e.getSource().removeFeature(t)},c=()=>{this.clearFeatures(),this.map.render()};super(e,e=>{t?t(e,e=>{i(e),c()},()=>{c()}):(e.forEach(e=>{i(e)}),c())},{style:a.style||s,filter:a.filter})}}},"../../libs/map/src/actions/draw/draw-line-action.ts":(e,t,a)=>{a.d(t,{p:()=>n});var l=a("../../libs/map/src/actions/draw/draw-action.ts");class n extends l.r{constructor(e,t,a={}){super(e,"LineString",t,a)}}},"../../libs/map/src/actions/draw/draw-polygon-action.ts":(e,t,a)=>{a.d(t,{H:()=>n});var l=a("../../libs/map/src/actions/draw/draw-action.ts");class n extends l.r{constructor(e,t,a={}){super(e,"Polygon",t,a)}}},"../../libs/map/src/actions/measure/measure-action.ts":(e,t,a)=>{a.d(t,{V:()=>r});var l=a("../../node_modules/ol/Overlay.js"),n=a("../../node_modules/ol/Observable.js"),o=a("../../libs/map/src/actions/draw/draw-action.ts");class r extends o.r{constructor(e,t){super(e,"LineString",()=>{(0,n.e)(this.measurePointermoveHandler)},{...t,maxPoints:2,geometryName:"measurement"}),this.featureCounter=0,this.measurementTooltips=[]}activate(){this.drawStartHandler=this.drawInteraction.on("drawstart",e=>{this._handleDrawStart(e)}),this.drawEndHandler=this.drawInteraction.on("drawend",()=>{this._setMeasurementTooltipsClosable(!0)}),this.removeFeatureHandler=this.layer.getSource().on("removefeature",e=>{this._handleRemoveFeature(e)}),super.activate()}_setMeasurementTooltipsClosable(e){this.measurementTooltips.forEach(t=>{let a="data-vl-closable",l=t.getElement();t&&l&&(e?l.setAttribute(a,e):l.removeAttribute(a))})}_setMeasurementTooltipsVisible(e){this.measurementTooltips.forEach(t=>{let a="hidden",l=t.getElement();t&&l&&(e?l.removeAttribute(a):l.setAttribute(a,!0))})}_showMeasurementTooltip(e,t,a){let l=e.getGeometry().getLength().toFixed(2);a.textContent=`${l} m`,t.setElement(a),t.setPosition(e.getGeometry().getLastCoordinate())}_handleDrawStart({feature:e}){let t=this.featureCounter;this.featureCounter+=1,this._setMeasurementTooltipsClosable(!1),e.setId(t);let a=document.createElement("vl-pill");a.isInMap=!0,a.addEventListener("close",t=>{this._handleRemoveMeasurement(t,e)},{once:!0});let n=new l.A({offset:[0,40],positioning:"bottom-center",stopEvent:!0,insertFirst:!0});n.set("featureId",t),this.map.addOverlay(n),this.measurementTooltips=[...this.measurementTooltips,n],this.measurePointermoveHandler=this.map.on("pointermove",()=>{this._showMeasurementTooltip(e,n,a)})}_removeMeasureFeature(e){let t=this.layer.getSource();e&&(null==e.getId()||t.getFeatureById(e.getId())===e)&&(t.removeFeature(e),this.map.render())}_removeMeasurementTooltip(e){let t=this.getTooltipFor(e);this.map.removeOverlay(t),this.measurementTooltips=this.measurementTooltips.filter(t=>this._getFeatureIdFor(t)!==e)}_handleRemoveMeasurement(e,t){e.stopPropagation(),this._removeMeasurementTooltip(t.getId()),this._removeMeasureFeature(t)}_handleRemoveFeature(e){this._removeMeasurementTooltip(e.feature.getId())}_cleanUp(e){(0,n.e)(this.measurePointermoveHandler),e&&this.measurementTooltips.forEach(e=>{let t=this._getFeatureIdFor(e);null==this.layer.getSource().getFeatureById(t)&&this._removeMeasurementTooltip(t)})}getTooltipFor(e){return this.measurementTooltips.find(t=>this._getFeatureIdFor(t)===e)}_getFeatureIdFor(e){return e.get("featureId")}handleLayerVisibilityChange(){this._setMeasurementTooltipsVisible(this.layer.getVisible())}deactivate(){this._setMeasurementTooltipsClosable(!0),this._cleanUp(!0),(0,n.e)(this.drawStartHandler),(0,n.e)(this.drawEndHandler),(0,n.e)(this.removeFeatureHandler),super.deactivate()}stop(){super.stop(),this._setMeasurementTooltipsClosable(!0),this._cleanUp(!0)}}},"../../libs/map/src/actions/modify/modify-action.ts":(e,t,a)=>{a.d(t,{P:()=>r});var l=a("../../node_modules/ol/interaction/Modify.js"),n=a("../../libs/map/src/actions/snap/snap-interaction.ts"),o=a("../../libs/map/src/actions/select/select-action.ts");class r extends o.D{constructor(e,t,a={}){if(super(e,null,{filter:a.filter}),this.options=a,this.modifyInteraction=new l.A({features:this.selectInteraction.getFeatures()}),this.addInteraction(this.modifyInteraction),a&&a.snapping){let t={...a.snapping};t.layer?this.addInteraction(new n.N(t.layer.getSource(),a.snapping)):this.addInteraction(new n.N(e.getSource(),a.snapping))}this.modifyInteraction.on("modifystart",e=>{let t=e.features.getArray()[0].getGeometry();this.currentGeometryBeingModified=t.clone()}),this.modifyInteraction.on("modifyend",e=>{e.features.forEach(e=>{t(e,e=>{e.setGeometry(this.currentGeometryBeingModified)})})})}activate(){this.options.snapping&&this.options.snapping.layer&&this.map.addLayer(this.options.snapping.layer),super.activate()}deactivate(){this.options.snapping&&this.options.snapping.layer&&this.map.removeLayer(this.options.snapping.layer),super.deactivate()}}},"../../libs/map/src/actions/select/box-select-action.ts":(e,t,a)=>{a.d(t,{o:()=>o});var l=a("../../libs/map/src/actions/select/select-action.ts"),n=a("../../node_modules/ol/interaction/DragBox.js");class o extends l.D{constructor(e,t,a){super(e,e=>{e&&t([e])},a),this.dragBoxInteraction=new n.A,this.addInteraction(this.dragBoxInteraction),this.dragBoxInteraction.on("boxdrag",()=>{let t=this.dragBoxInteraction.getGeometry().getExtent();this.hoverInteraction.getFeatures().clear(),e.getSource().forEachFeatureIntersectingExtent(t,t=>{this.filter(t,e)&&this.hoverInteraction.getFeatures().push(t)})}),this.dragBoxInteraction.on("boxend",()=>{this.hoverInteraction.getFeatures().getLength()>0&&t(this.hoverInteraction.getFeatures().getArray().slice(0))})}}},"../../libs/map/src/actions/select/select-action.ts":(e,t,a)=>{a.d(t,{D:()=>s});var l=a("../../node_modules/ol/Feature.js"),n=a("../../node_modules/ol/events/condition.js"),o=a("../../node_modules/ol/interaction/Select.js"),r=a("../../libs/map/src/actions/mapaction.ts");class s extends r.W{constructor(e,t,a){let l=a&&a.cluster,r=a&&a.filter?a.filter:()=>!0,s=a?a.style:null,i=a&&a.hoverStyle||s,c=Array.isArray(e)?e:[e],d=(e,t)=>(this.selectInteraction.getFeatures().clear(),this.filter(e,t)),p=(e,t)=>{let a=-1!==this.selectInteraction.getFeatures().getArray().indexOf(e);return this.filter(e,t)&&!a},m=new o.A({filter:p,condition:n.N1,style:i,layers:c}),v=new o.A({condition:n.Zm,style:s,layers:c}),h=new o.A({filter:d,condition:n.jM,style:s,layers:c,multi:!0});super([v,h,m]),this._selectHandler=e=>{this.markInteraction.getFeatures().clear(),this.selectInteraction.getFeatures().getLength()>0?1===this.selectInteraction.getFeatures().getLength()?this.selectedFeature=this.selectInteraction.getFeatures().getArray()[0]:this.selectedFeature=(e=>{let t=e.getArray().indexOf(this.selectedFeature)+1;return t>e.getLength()-1&&(t=0),e.getArray()[t]})(this.selectInteraction.getFeatures()):this.selectedFeature=null,this._onSelectHandler(e),this.map.render()},this._onSelectHandler=e=>{this.onSelect&&(this.selectedFeature?this.onSelect(this.selectedFeature,e,this.getLayer()):this.onSelect())},this.cluster=l,this.filter=r,this.layer=e,this.style=s,this.hoverStyle=i,this.hoverInteraction=m,this.markInteraction=v,this.selectInteraction=h,this.hoverInteraction.on("select",()=>{let e=this.map.getTargetElement();this.hoverInteraction.getFeatures().getLength()>0?e.style.cursor="pointer":e.style.cursor="",this.map.render()}),this.selectedFeature=null,this.getLayer=()=>e,this.onSelect=t,this.selectInteraction.on("select",this._selectHandler),this.selectInteractionFilter=d,this.hoverInteractionFilter=p}_fixClusterBehavior(){if(this.selectedFeature){let e=this.selectedFeature.get("features")||[this.selectedFeature];this.selectInteraction.getFeatures().clear(),this.markInteraction.getFeatures().clear(),e&&e.forEach(e=>{e.getId()&&this.markFeatureWithId(e.getId())})}}getClusterWithFeatureId(e,t){for(let a=0;a<e.length;a++){let l=e[a].get("features");if(l&&this.getFeatureById(l,t))return e[a]}}getFeatureById(e,t){for(let a=0;a<e.length;a++)if(e[a].getId()===t)return e[a]}clearFeatures(){this.selectInteraction.getFeatures().clear(),this.markInteraction.getFeatures().clear(),this.hoverInteraction.getFeatures().clear()}activate(){this.cluster&&this.map&&(this._fixClusterBehaviorListener=()=>this._fixClusterBehavior(),this.map.on("moveend",this._fixClusterBehaviorListener),this.selectInteraction.on("select",this._fixClusterBehaviorListener)),super.activate()}deactivate(){this._fixClusterBehaviorListener&&(this.map.un("moveend",this._fixClusterBehaviorListener),this.selectInteraction.un("select",this._fixClusterBehaviorListener)),this.clearFeatures(),super.deactivate()}selectFeature(e){this.selectInteraction.getFeatures().push(e),this.selectInteraction.dispatchEvent({type:"select",feature:e})}getSelectedFeatures(){return this.selectInteraction.getFeatures()}deselect(){this.selectedFeature=null}markFeatureWithId(e,t){let a=(t=t||this.layer).getSource().getFeatureById(e)||this.getClusterWithFeatureId(t.getSource().getFeatures(),e);a&&a instanceof l.A&&-1===this.markInteraction.getFeatures().getArray().indexOf(a)&&this.markInteraction.getFeatures().push(a)}isMarked(e){let t=!1;return this.markInteraction.getFeatures().forEach(a=>{a===e&&(t=!0)}),t}demarkAllFeatures(){this.markInteraction.getFeatures().clear()}}},"../../libs/map/src/components/action/draw-action/draw-line-action/vl-map-draw-line-action.ts":(e,t,a)=>{var l=a("../../libs/common/utilities/src/index.ts"),n=a("../../libs/map/src/actions/draw/draw-line-action.ts"),o=a("../../libs/map/src/components/action/draw-action/vl-map-draw-action.ts");class r extends o.H{_createAction(e){return new n.p(e,this._callback,this.__drawOptions)}}r=function(e,t,a,l){var n,o=arguments.length,r=o<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,a):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,l);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,a,r):n(t,a))||r);return o>3&&r&&Object.defineProperty(t,a,r),r}([(0,l.M1)("vl-map-draw-line-action")],r)},"../../libs/map/src/components/action/draw-action/draw-point-action/vl-map-draw-point-action.ts":(e,t,a)=>{var l=a("../../libs/common/utilities/src/index.ts"),n=a("../../libs/map/src/actions/draw/draw-action.ts"),o=a("../../libs/map/src/components/action/draw-action/vl-map-draw-action.ts");class r extends o.H{_createAction(e){return new n.r(e,"Point",this._callback,this.__drawOptions)}}r=function(e,t,a,l){var n,o=arguments.length,r=o<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,a):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,l);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,a,r):n(t,a))||r);return o>3&&r&&Object.defineProperty(t,a,r),r}([(0,l.M1)("vl-map-draw-point-action")],r)},"../../libs/map/src/components/action/draw-action/draw-polygon-action/vl-map-draw-polygon-action.ts":(e,t,a)=>{var l=a("../../libs/common/utilities/src/index.ts"),n=a("../../libs/map/src/actions/draw/draw-polygon-action.ts"),o=a("../../libs/map/src/components/action/draw-action/vl-map-draw-action.ts");class r extends o.H{_createAction(e){return new n.H(e,this._callback,this.__drawOptions)}}r=function(e,t,a,l){var n,o=arguments.length,r=o<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,a):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,l);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,a,r):n(t,a))||r);return o>3&&r&&Object.defineProperty(t,a,r),r}([(0,l.M1)("vl-map-draw-polygon-action")],r)},"../../libs/map/src/components/action/draw-action/measure-action/vl-map-measure-action.ts":(e,t,a)=>{var l=a("../../libs/common/utilities/src/index.ts"),n=a("../../libs/map/src/actions/measure/measure-action.ts"),o=a("../../libs/map/src/vl-map.model.ts"),r=a("../../libs/map/src/components/action/draw-action/vl-map-draw-action.ts");class s extends r.H{constructor(){super(),this.identifier=o.cS.MEASURE}_createAction(e){return new n.V(e,this.__drawOptions)}}s=function(e,t,a,l){var n,o=arguments.length,r=o<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,a):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,l);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,a,r):n(t,a))||r);return o>3&&r&&Object.defineProperty(t,a,r),r}([(0,l.M1)("vl-map-measure-action")],s)},"../../libs/map/src/components/action/layer-action/delete-action/vl-map-delete-action.ts":(e,t,a)=>{var l=a("../../libs/common/utilities/src/index.ts"),n=a("../../libs/map/src/actions/delete/delete-action.ts"),o=a("../../libs/map/src/components/layer-style/vl-map-layer-style.ts"),r=a("../../libs/map/src/components/action/layer-action/vl-map-layer-action.ts");class s extends r.c{get style(){return this._style}set style(e){e instanceof o.t?this._style=e.style:this._style=e,this._processAction()}onDelete(e){this.__callback=e}appliesTo(e,t){return!0}get _callback(){return(e,t,a)=>{this.__callback?this.__callback(e,t,a):e.forEach(e=>t(e))}}_createAction(e){let t={style:this._style,filter:this.appliesTo.bind(this)};return new n.Q(e,this._callback,t)}}s=function(e,t,a,l){var n,o=arguments.length,r=o<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,a):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,l);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,a,r):n(t,a))||r);return o>3&&r&&Object.defineProperty(t,a,r),r}([(0,l.M1)("vl-map-delete-action")],s)},"../../libs/map/src/components/action/layer-action/modify-action/vl-map-modify-action.ts":(e,t,a)=>{var l=a("../../libs/common/utilities/src/index.ts"),n=a("../../libs/map/src/actions/layer/composite-vector-layer.ts"),o=a("../../libs/map/src/actions/modify/modify-action.ts"),r=a("../../libs/map/src/components/layer/vector-layer/vl-map-vector-layer.ts"),s=a("../../libs/map/src/components/action/layer-action/vl-map-layer-action.ts");class i extends s.c{static get _observedAttributes(){return["snapping","snapping-pixel-tolerance"]}disconnectedCallback(){this.__removeSnappingLayerStyleChangedEventListener()}onModify(e){this.__callback=e}appliesTo(e,t){return!0}_createAction(e){let t={snapping:this.__snappingOptions,filter:this.appliesTo.bind(this)};return new o.P(e,this._callback,t)}_snappingChangedCallback(){this._processAction()}_snappingPixelToleranceChangedCallback(){this._processAction()}get __snappingOptions(){return void 0===this.dataset.vlSnapping||!(this.__snappingLayers.length>0)||{layer:this.__createSnappingLayer(),pixelTolerance:this.dataset.vlSnappingPixelTolerance||10,node:!1,vertex:!1}}__createSnappingLayer(){return this.__snappingLayer=new n.E(this.__snappingLayers.map(e=>e._layer),{}),this.__addSnappingLayerStyleChangedEventListener(),this.__snappingLayer}__addSnappingLayerStyleChangedEventListener(){if(this.__snappingLayers&&this.__snappingLayers.length>0){let e=this.__snappingLayers[0];this.__snappingLayer.setStyle(e.style),this.__onSnappingLayerStyleChanged=e=>this.__snappingLayer.setStyle(e.target.style),e.addEventListener(r.P.EVENTS.styleChanged,this.__onSnappingLayerStyleChanged)}}__removeSnappingLayerStyleChangedEventListener(){this.__snappingLayers&&this.__snappingLayers.length>0&&this.__snappingLayers[0].removeEventListener(r.P.EVENTS.styleChanged,this.__onSnappingLayerStyleChanged)}get __snappingLayers(){return Array.from(this.querySelectorAll("vl-map-wfs-layer"))}}i=function(e,t,a,l){var n,o=arguments.length,r=o<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,a):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,l);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,a,r):n(t,a))||r);return o>3&&r&&Object.defineProperty(t,a,r),r}([(0,l.M1)("vl-map-modify-action")],i)},"../../libs/map/src/components/action/layer-action/select-action/vl-map-select-action.ts":(e,t,a)=>{a.d(t,{J:()=>s});var l=a("../../libs/common/utilities/src/index.ts"),n=a("../../libs/map/src/actions/select/select-action.ts"),o=a("../../libs/map/src/components/layer-style/vl-map-layer-style.ts"),r=a("../../libs/map/src/components/action/layer-action/vl-map-layer-action.ts");class s extends r.c{get style(){return this._style}set style(e){e instanceof o.t?this._style=e.style:this._style=e,this._processAction()}get _cluster(){return this.getAttribute("cluster")}mark(e,t){this._action&&e&&this._action.markFeatureWithId(e,t||this.layer)}removeMarks(){this._action&&this._action.demarkAllFeatures()}select(e){this.action&&e&&this._action.selectFeature(e)}onSelect(e){this.__callback=e}reset(){this.action&&this._action.clearFeatures()}appliesTo(e,t){return!0}_createAction(e){let t={style:this.style,cluster:void 0!==this._cluster,filter:this.appliesTo.bind(this)};return new n.D(e,this._callback,t)}}s=function(e,t,a,l){var n,o=arguments.length,r=o<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,a):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,l);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,a,r):n(t,a))||r);return o>3&&r&&Object.defineProperty(t,a,r),r}([(0,l.M1)("vl-map-select-action")],s)},"../../libs/map/src/components/baselayer/vl-map-base-layer-grb-ortho/vl-map-base-layer-grb-ortho.ts":(e,t,a)=>{var l=a("../../libs/common/utilities/src/index.ts"),n=a("../../libs/map/src/components/baselayer/vl-map-base-layer.ts");class o extends n.j{constructor(){super(),this.url="https://geo.api.vlaanderen.be/OMWRGBMRVL/wmts",this.layer="omwrgbmrvl",this.title="GRB ortho laag"}}o=function(e,t,a,l){var n,o=arguments.length,r=o<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,a):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,l);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,a,r):n(t,a))||r);return o>3&&r&&Object.defineProperty(t,a,r),r}([(0,l.M1)("vl-map-baselayer-grb-ortho")],o)},"../../libs/map/src/components/baselayer/vl-map-base-layer-grb/vl-map-base-layer-grb.ts":(e,t,a)=>{var l=a("../../libs/common/utilities/src/index.ts"),n=a("../../libs/map/src/components/baselayer/vl-map-base-layer.ts");class o extends n.j{constructor(){super(),this.url="https://geo.api.vlaanderen.be/GRB/wmts",this.layer="grb_bsk",this.title="GRB basis laag"}}o=function(e,t,a,l){var n,o=arguments.length,r=o<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,a):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,l);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,a,r):n(t,a))||r);return o>3&&r&&Object.defineProperty(t,a,r),r}([(0,l.M1)("vl-map-baselayer-grb")],o)},"../../libs/map/src/components/controls/measure-control/vl-map-measure-control.ts":(e,t,a)=>{var l=a("../../libs/common/utilities/src/index.ts"),n=a("../../libs/components/src/next/button/index.ts"),o=a("../../node_modules/ol/Observable.js"),r=a("../../libs/map/src/vl-map.model.ts"),s=a("../../libs/map/src/components/controls/vl-map-control.mixin.ts");class i extends(0,s.i)(l.jW){static{(0,l.gy)([n.Y])}constructor(){super(),this.controlElement=null,this.controlElement=document.createElement("vl-button-next"),this.controlElement.setAttribute("tertiary",""),this.controlElement.setAttribute("toggle",""),this.controlElement.innerText="Meten",this.identifier=r.cS.MEASURE,this.type=r.$c.ACTION}connectedCallback(){super.connectedCallback(),this.clickListener=this.controlElement.addEventListener("click",()=>this.handleMeasureControlClick())}getAction(){return this.map.getActionWithIdentifier(this.identifier)}handleMeasureControlClick(){let e=this.getAction();e&&(this.controlElement.on?(e.element.activate(),this.controlElement.removeAttribute("tertiary")):(e.element.deactivate(),this.controlElement.setAttribute("tertiary","")))}setActive(e){e?(this.controlElement.on=!0,this.controlElement.removeAttribute("tertiary")):(this.controlElement.on=!1,this.controlElement.setAttribute("tertiary",""))}setDisabled(e){this.controlElement.disabled=e}disconnectedCallback(){super.disconnectedCallback(),(0,o.e)(this.clickListener)}}i=function(e,t,a,l){var n,o=arguments.length,r=o<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,a):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,l);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,a,r):n(t,a))||r);return o>3&&r&&Object.defineProperty(t,a,r),r}([(0,l.M1)("vl-map-measure-control")],i)},"../../libs/map/src/components/controls/vl-map-action-controls.ts":(e,t,a)=>{var l=a("../../node_modules/lit/index.js"),n=a("../../node_modules/lit/decorators.js");let o=(0,l.AH)`
    div {
        position: absolute;
        right: 0px;
        z-index: 1;
        display: flex;
        column-gap: 10px;
        padding: 10px;
    }
`;var r=a("../../libs/common/utilities/src/index.ts");class s extends r.jW{static get styles(){return[o]}connectedCallback(){super.connectedCallback(),this.actionControls.forEach(e=>{e.addEventListener("change-control",t=>{let a=e.getAttribute("data-vl-action-id");this.handleActionControlChange(a,t)})})}render(){return(0,l.qy)`
            <div>
                <slot></slot>
            </div>
        `}get actionControls(){return this.querySelectorAll("vl-map-action-control")}handleActionControlChange(e,t){t.detail?.isActive&&[...this.actionControls].filter(t=>t.getAttribute("data-vl-action-id")!==e).filter(e=>e.active).forEach(e=>e.deactivate())}}s=function(e,t,a,l){var n,o=arguments.length,r=o<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,a):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,l);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,a,r):n(t,a))||r);return o>3&&r&&Object.defineProperty(t,a,r),r}([(0,n.EM)("vl-map-action-controls")],s)},"../../libs/map/src/components/controls/vl-map-control.mixin.ts":(e,t,a)=>{a.d(t,{i:()=>n});var l=a("../../node_modules/ol/control/Control.js");let n=e=>{class t extends e{connectedCallback(){super.connectedCallback(),this._mapElement=this.closest("vl-map"),this.map=this._mapElement.map,this.controlElement.isInMap=!0,this.control=new l.A({element:this.controlElement,target:this}),this.control.set("element",this),this.map.addControl(this.control)}disconnectedCallback(){super.disconnectedCallback(),this.map.removeControl(this.control)}createRenderRoot(){return this}}return t}},"../../libs/map/src/components/layer-switcher/vl-map-layer-switcher.ts":(e,t,a)=>{var l=a("../../libs/common/utilities/src/index.ts"),n=a("../../libs/elements/src/index.ts"),o=a("../../libs/form/src/next/checkbox/index.ts"),r=a("../../libs/form/src/next/form-label/vl-form-label.css.ts"),s=a("../../node_modules/lit/index.js"),i=a("../../node_modules/lit/decorators.js");let c=(0,s.AH)`
    :host {
        display: block;
    }

    :host label {
        display: block;
    }

    :host [data-vl-layer] {
        display: block;
    }
`;class d extends l.jW{static{(0,l.gy)([o.v])}static get styles(){return[n.hF,c,r.B]}static get properties(){return{componentTitle:{type:String,attribute:"data-vl-title",reflect:!0},layers:{type:Array,attribute:"layers"},vlMapLayers:{attribute:!1}}}constructor(){super(),this.componentTitle="Kaartlagen",this.layers=null,this.vlMapLayers=[],this.mapElement=null,this.layerObserver=null,this.computeCheckboxAttributes=()=>{let e=this.mapElement?.resolution;this.vlMapLayers.forEach(t=>{let a=this.shadowRoot?.querySelector(`vl-checkbox-next[data-vl-layer="${t.title}"]`);t.isVisibleAtResolution(e)?a?.removeAttribute("disabled"):a?.setAttribute("disabled",""),t.visible?a?.setAttribute("checked",""):a?.removeAttribute("checked")})}}async connectedCallback(){super.connectedCallback(),this.mapElement=this.closest("vl-map"),await this.layersReady(),this.vlMapLayers=this.getVlMapLayers(),this.mapElement?.on("moveend",this.computeCheckboxAttributes),this.layers||this.observeMapLayers()}async willUpdate(e){e.has("layers")&&(await this.layersReady(),this.vlMapLayers=this.getVlMapLayers()),e.has("vlMapLayers")&&this.vlMapLayers&&this.vlMapLayers?.forEach(({layer:e})=>{e.on("change:visible",()=>{this.computeCheckboxAttributes()})})}updated(){this.computeCheckboxAttributes()}disconnectedCallback(){super.disconnectedCallback(),this.layerObserver?.disconnect(),this.mapElement?.un("moveend",this.computeCheckboxAttributes)}render(){return(0,s.qy)`
            <div>
                <label class="vl-form__label">${this.componentTitle}</label>
                ${this.vlMapLayers.map(e=>(0,s.qy)`
                        <vl-checkbox-next
                            label=${e.title}
                            data-vl-layer=${e.title}
                            checked=${e.visible}
                            @vl-input=${()=>e.visible=!e.visible}
                            >${e.title}</vl-checkbox-next
                        >
                    `)}
            </div>
        `}async layersReady(){return this.mapElement?Promise.all(this.mapElement?.nonBaseLayers.map(e=>l.t7(()=>e.ready))):new Promise((e,t)=>t())}getVlMapLayers(){return this.layers&&Array.isArray(this.layers)?this.mapElement?.nonBaseLayers.filter(e=>this.layers?.includes(e.name))||[]:this.mapElement?.nonBaseLayers||[]}observeMapLayers(){this.layerObserver=new MutationObserver(e=>{e.forEach(e=>{e.addedNodes.forEach(e=>{e instanceof HTMLElement&&e.hasAttribute("data-vl-is-layer")&&(this.vlMapLayers=[...this.vlMapLayers,e])}),e.removedNodes.forEach(e=>{e instanceof HTMLElement&&e.hasAttribute("data-vl-is-layer")&&(this.vlMapLayers=this.vlMapLayers.filter(t=>e!==t))})})}),this.layerObserver.observe(this.mapElement,{subtree:!0,childList:!0})}}d=function(e,t,a,l){var n,o=arguments.length,r=o<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,a):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,l);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,a,r):n(t,a))||r);return o>3&&r&&Object.defineProperty(t,a,r),r}([(0,i.EM)("vl-map-layer-switcher")],d)},"../../libs/map/src/components/overview-map/vl-map-overview-map.ts":(e,t,a)=>{var l=a("../../libs/common/utilities/src/index.ts");class n extends(0,l.H3)(HTMLElement){connectedCallback(){super.connectedCallback(),this._configureMap()}get _map(){if(this.parentNode)return this.parentNode.map}_configureMap(){(async()=>{for(;!(this._map&&this._map.overviewMapControl);)await new Promise(e=>setTimeout(e,100));this._map.addControl(this._map.overviewMapControl)})()}}n=function(e,t,a,l){var n,o=arguments.length,r=o<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,a):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,l);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,a,r):n(t,a))||r);return o>3&&r&&Object.defineProperty(t,a,r),r}([(0,l.M1)("vl-map-overview-map")],n)},"../../libs/map/src/components/side-sheet/vl-map-side-sheet.ts":(e,t,a)=>{var l=a("../../libs/common/utilities/src/index.ts"),n=a("../../libs/components/src/index.ts");class o extends n.VH{constructor(){super(`
      :host {
        width: 3.5rem;
        transition: width 0.1s;
      }

      :host([data-vl-open]) {
        width: var(--vl-side-sheet-width,calc(100%/3));
      }

      .vl-side-sheet__toggle {
        margin: 10px;
      }

      :host([data-vl-open]) .vl-side-sheet__toggle {
        margin-left: 0px;
      }

      ::slotted(*) {
        margin-bottom: 20px;
      }
    `)}connectedCallback(){super.connectedCallback(),this.setAttribute("data-vl-absolute",""),this.hasAttribute("data-vl-right")||this.setAttribute("data-vl-left",""),this._openChangedCallback()}_rightChangedCallback(e,t){void 0!=t?this.removeAttribute("data-vl-left"):this.setAttribute("data-vl-left","")}}o=function(e,t,a,l){var n,o=arguments.length,r=o<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,a):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,l);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,a,r):n(t,a))||r);return o>3&&r&&Object.defineProperty(t,a,r),r}([(0,l.M1)("vl-map-side-sheet")],o)}}]);