import{Z as i,a1 as H,_ as c,W as K,X as U,a2 as q,u as D,j as a,C as T,b7 as W,s as x,r as X,R as Y,b as E}from"./iframe-CsVpDM3d.js";import"./vl-map-draw-line-action-DfJNeYVS.js";import"./vl-map-draw-point-action-tRZwCGre.js";import"./vl-map-draw-polygon-action-D4Ij_px2.js";import"./vl-map-measure-control-Ce8tp7Fb.js";import"./vl-map-delete-action-7ftFz2f5.js";import"./vl-map-modify-action-B9nqd_9W.js";import"./vl-map-select-action-OYZUSk6P.js";import"./vl-map-base-layer-grb-gray-SIPLRsqN.js";import"./vl-map-base-layer-grb-ortho-CAlS43gt.js";import"./vl-map-base-layer-grb-Dle7La6P.js";import"./vl-map-action-controls-arw8MOIp.js";import"./vl-map-layer-circle-style-DQBHFiZF.js";import{aO as A,aP as L}from"./vl-map-base-layer-C5yxllno.js";import"./vl-map-layer-switcher-DtukVvZz.js";import"./vl-map-features-layer-V53MVswX.js";import{L as G}from"./vl-map-legend-C-Z-uErR.js";import"./vl-map-overview-map-CP0P1AUm.js";import"./vl-map-side-sheet-BPXBRK4Z.js";import"./preload-helper-PPVm8Dsz.js";import"./vl-map-draw-action-DkIMZNB8.js";import"./vl-map-layer-action-DB2N1ug3.js";import"./composite-vector-layer-SlnhqSu0.js";import"./vl-map-vector-layer-DvuOF5hP.js";import"./vl-map-control.mixin-Go2iyBG7.js";import"./select-action-WAQ_xvZN.js";import"./vl-checkbox.component-dwTM-Wy8.js";import"./vl-datepicker.component-C2EPt_Iw.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-fieldset.component-D3SniA08.js";import"./vl-input-field-masked.component-Bp81wQF6.js";import"./vl-radio.component-Dq4icxGt.js";import"./vl-radio-group.component-zNwhQE1k.js";import"./vl-select.component-13WHQuOs.js";import"./vl-select-rich.component-CEJRQQv1.js";import"./vl-textarea.component-DW_fGO92.js";import"./vl-textarea-rich.component-CXyX5T1n.js";import"./vl-upload.component-CJwCXL7V.js";import"./vl-upload-progress.component-cmZSzeBu.js";const{action:z}=__STORYBOOK_MODULE_ACTIONS__,n={...U,allowFullscreen:!1,allowInvalidGeometry:!1,autoShiftControls:!1,disableEscape:!1,disableKeyboard:!1,disableMousewheelZoom:!1,disableRotation:!1,hideScale:!1,fullHeight:!1,lambert2008:!1,noBorder:!1,scalePosition:L.BOTTOM_LEFT,activeActionChange:z(A.ACTIVE_ACTION_CHANGED),layerVisibleChange:z(A.LAYER_VISIBLE_CHANGED)},J={...K,allowFullscreen:{name:"allow-fullscreen",description:"Laat de map toe afgebeeld te worden in fullscreen.<br>Dit kan niet gebruikt worden op mobile.<br>Dit attribuut is niet reactief.",table:{type:{summary:c.BOOLEAN},category:i.ATTRIBUTES,defaultValue:{summary:String(n.allowFullscreen)}}},allowInvalidGeometry:{name:"allow-invalid-geometry",description:'Standaard worden ongeldige geometrieën gemarkeerd met een rode "invalid" stijl. Je kan dit attribuut gebruiken om dit gedrag uit te zetten.',table:{type:{summary:c.BOOLEAN},category:i.ATTRIBUTES,defaultValue:{summary:String(n.allowInvalidGeometry)}}},autoShiftControls:{name:"auto-shift-controls",description:"Laat de controls (schaal, zoom, rotate, overzichtskaart, fullscreen, vl-map-current-location, vl-map-action-controls) en de legende automatisch wijken voor een geopende vl-map-side-sheet of vl-side-sheet, links zowel als rechts. Controls aan dezelfde kant en op dezelfde hoogte schuiven samen op als rij, net ver genoeg om de meest bedekte vrij te maken en zonder de overkant of een vl-map-search te raken. Is daar niet genoeg ruimte voor, dan blijft die rij op haar plaats. Standaard uit.",table:{type:{summary:c.BOOLEAN},category:i.ATTRIBUTES,defaultValue:{summary:String(n.autoShiftControls)}}},disableEscape:{name:"disable-escape-key",description:"Schakelt de escape-key uit.<br>Dit attribuut is niet reactief.",table:{type:{summary:c.BOOLEAN},category:i.ATTRIBUTES,defaultValue:{summary:String(n.disableEscape)}}},disableRotation:{name:"disable-rotation",description:"Schakelt het roteren van de map uit.<br>Dit attribuut is niet reactief.",table:{type:{summary:c.BOOLEAN},category:i.ATTRIBUTES,defaultValue:{summary:String(n.disableRotation)}}},disableMousewheelZoom:{name:"disable-mouse-wheel-zoom",description:"Schakelt het zoomen van de map via het muiswiel uit.<br>Dit attribuut is niet reactief.",table:{type:{summary:c.BOOLEAN},category:i.ATTRIBUTES,defaultValue:{summary:String(n.disableMousewheelZoom)}}},disableKeyboard:{name:"disable-keyboard",description:"Schakelt de keyboard input uit voor de map.<br>Dit attribuut is niet reactief.",table:{type:{summary:c.BOOLEAN},category:i.ATTRIBUTES,defaultValue:{summary:String(n.disableKeyboard)}}},hideScale:{name:"hide-scale",description:"Verbergt de schaal (ScaleLine) van de map.<br>Standaard toont de map een schaal linksonder.<br>Dit attribuut is niet reactief.",table:{type:{summary:c.BOOLEAN},category:i.ATTRIBUTES,defaultValue:{summary:String(n.hideScale)}}},fullHeight:{name:"full-height",description:"De map neemt de volledige beschikbare hoogte in van zijn parent.<br>Zie de docs pagina voor meer informatie over het gebruik van dit attribuut.",table:{type:{summary:c.BOOLEAN},category:i.ATTRIBUTES,defaultValue:{summary:String(n.fullHeight)}}},lambert2008:{name:"lambert2008",description:"Indien aanwezig wordt de kaart in het coördinatenstelsel Lambert 2008 weergegeven (EPSG:3812).<br>Indien niet aanwezig wordt de kaart in het coördinatenstelsel Lambert 72 weergegeven (EPSG:31370).<br>Dit attribuut is niet reactief. In de toekomst wordt Lambert 2008 de default.",table:{type:{summary:c.BOOLEAN},category:i.ATTRIBUTES,defaultValue:{summary:String(n.lambert2008)}}},noBorder:{name:"no-border",description:"De border rond de map wordt niet afgebeeld.",table:{type:{summary:c.BOOLEAN},category:i.ATTRIBUTES,defaultValue:{summary:String(n.noBorder)}}},scalePosition:{name:"scale-position",description:"Bepaalt de hoek waarin de schaal (ScaleLine) op de map staat.",control:{type:H.SELECT},options:Object.values(L),table:{type:{summary:q(Object.values(L))},category:i.ATTRIBUTES,defaultValue:{summary:n.scalePosition}}},activeActionChange:{name:A.ACTIVE_ACTION_CHANGED,description:"Afgevuurd als de actieve map-actie verandert.",table:{type:{summary:"{ previous?: VlMapAction, current?: VlMapAction }"},category:i.EVENTS}},layerVisibleChange:{name:A.LAYER_VISIBLE_CHANGED,description:"Afgevuurd als de visible state van een map-layer verandert.",table:{type:{summary:"{ layer: VlMapLayer, visible: boolean }"},category:i.EVENTS}}};function M(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...D(),...t.components},{FluxAlert:o,FluxComponentMetaData:d}=e;return o||B("FluxAlert"),d||B("FluxComponentMetaData"),a.jsxs(a.Fragment,{children:[a.jsx(e.h1,{id:"map",children:"Map"}),`
`,a.jsx(d,{id:"map-components-map"}),`
`,a.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,a.jsxs(e.p,{children:["Gebruik de ",a.jsx(e.code,{children:"map"})," component om een kaart af te beelden met verschillende lagen en acties."]}),`
`,a.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-js",children:`import { VlMap } from '@domg-wc/map';
`})}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-html",children:`<vl-map></vl-map>
`})}),`
`,a.jsx(T,{of:f}),`
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
`,a.jsx(o,{type:"warning",children:`
  De client-side transformatie van Lambert 72 naar Lambert 2008 heeft een begrensde nauwkeurigheid van ~1m. Is cm
  nauwkeurigheid vereist, dan is het belangrijk dat de kaart en de kaartlagen hetzelfde coördinatenstelsel gebruiken.
`}),`
`,a.jsx(e.h3,{id:"intekenen-op-een-lambert-2008-kaart",children:"Intekenen op een Lambert 2008 kaart"}),`
`,a.jsx(e.p,{children:`Om in te tekenen op een Lambert 2008 kaart moet een Lambert 2008 kaartlaag gebruikt worden, omwille van de
beschikbare nauwkeurigheid van ~1m van de Lambert 72 naar Lambert 2008 transformatie.`}),`
`,a.jsx(e.p,{children:`Vereist je project Lambert 72 coördinaten bij het intekenen, dan wordt het upgraden naar de Lambert 2008 kaart
beter uitgesteld tot wanneer het project ook Lambert 2008 data ondersteunt. De regel hierbij is dat het
coördinatenstelsel van intekenen hetzelfde moet zijn als dat van de kaart.`}),`
`,a.jsx(e.h2,{id:"controls-laten-wijken-voor-een-side-sheet",children:"Controls laten wijken voor een side-sheet"}),`
`,a.jsxs(e.p,{children:["Een open ",a.jsx(e.code,{children:"vl-map-side-sheet"}),` bedekt de hoek van de kaart, waardoor de controls in die hoek (schaal, zoom,
rotate, overzichtskaart, fullscreen, `,a.jsx(e.code,{children:"vl-map-current-location"})," en ",a.jsx(e.code,{children:"vl-map-action-controls"}),`) en de legende eronder
verdwijnen. Met het opt-in attribuut `,a.jsx(e.code,{children:"auto-shift-controls"}),` schuiven ze automatisch weg voor een geopende
side-sheet, links zowel als rechts. Dat geldt ook voor een `,a.jsx(e.code,{children:"vl-side-sheet"})," in de kaart, ook zonder ",a.jsx(e.code,{children:"absolute"}),`:
bij zo'n fixed paneel wordt opnieuw berekend wanneer de pagina of een scroll-container in de light DOM scrollt.
Scrollen binnen een shadow root wordt niet opgemerkt.`]}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-html",children:`<vl-map auto-shift-controls>
    <vl-map-side-sheet open>...</vl-map-side-sheet>
</vl-map>
`})}),`
`,a.jsxs(e.p,{children:[`Controls aan dezelfde kant die op dezelfde hoogte liggen, vormen een rij. Een rij schuift samen op, net ver
genoeg om de meest bedekte control vrij te maken, zodat er geen nieuwe overlap ontstaat. Elke rij schuift apart:
een rij bovenaan die niet kan wijken, houdt een rij onderaan niet tegen. Controls bovenaan wijken ook voor de
toggle-knop die naast een open paneel hangt. Een verborgen rotate-knop (zolang de kaart niet gedraaid is) telt
niet mee.
Een rij schuift nooit over de controls of de legende aan de overkant, over een `,a.jsx(e.code,{children:"vl-map-search"}),` of over de
kaartrand. Is er daarvoor niet genoeg ruimte, bijvoorbeeld omdat het paneel bijna de hele kaart bedekt, dan
blijft die rij op haar plaats. Een rij schuift dus nooit half op: een half afgedekte schaal zou een verkeerde
afstand tonen.
Een control die niet kan wijken, blijft onder het paneel liggen. Op desktop kan hij dan nog focus krijgen terwijl
hij afgedekt is; op mobiel is hij niet bereikbaar zolang het paneel open is.
Open bij voorkeur maximaal één paneel tegelijk: bij een linker en rechter paneel samen wordt niet tegen
elkaar begrensd. Zonder het attribuut verandert er niets aan het bestaande gedrag.`]}),`
`,a.jsx(T,{of:v}),`
`,a.jsx(e.h2,{id:"ongeldige-geometrieën",children:"Ongeldige geometrieën"}),`
`,a.jsxs(e.p,{children:[`Wanneer je op de kaart een ongeldige geometrie tekent, bijvoorbeeld een zelf-kruisende polygoon, dan krijgt deze
standaard een rode "invalid" stijl. Indien je dit niet wenst kan je het
attribuut `,a.jsx(e.code,{children:"allow-invalid-geometries"})," gebruiken."]}),`
`,a.jsxs(e.p,{children:[`Om te controleren of een kaart 1 of meerdere ongeldige geometrieën bevat kan je de methode
`,a.jsx(e.code,{children:"hasInvalidGeometries"})," gebruiken:"]}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-typescript",children:`const map = document.querySelector<VlMap>('#my-map');
const hasInvalidGeometries = map.hasInvalidGeometries();
`})}),`
`,a.jsx(e.h2,{id:"schaal",children:"Schaal"}),`
`,a.jsxs(e.p,{children:["De map toont standaard een schaal (",a.jsx(e.code,{children:"ScaleLine"}),") linksonder. Met ",a.jsx(e.code,{children:"scale-position"}),` kies je een andere hoek:
`,a.jsx(e.code,{children:"bottom-left"})," (standaard), ",a.jsx(e.code,{children:"bottom-right"}),", ",a.jsx(e.code,{children:"top-left"})," of ",a.jsx(e.code,{children:"top-right"}),`. Dit attribuut is reactief (in tegenstelling tot
`,a.jsx(e.code,{children:"hide-scale"}),"), dus de hoek kan live wijzigen."]}),`
`,a.jsxs(e.p,{children:[`In de rechterhoeken staat de schaal standaard voorbij de zoomknop en de rotatieknop (die zichtbaar wordt zodra
de kaart gedraaid is), via de custom property `,a.jsx(e.code,{children:"--vl-map--scale-offset-inline"}),". Een ",a.jsx(e.code,{children:"vl-map-overview-map"}),` of een
`,a.jsx(e.code,{children:"vl-map-legend"})," met de standaard ",a.jsx(e.code,{children:'placement="bottom_right"'}),` delen wel de rechteronderhoek met de schaal. Zet de
legende in dat geval in een andere hoek (bv. `,a.jsx(e.code,{children:'placement="bottom_left"'}),`). Voor de overzichtskaart, die geen
`,a.jsx(e.code,{children:"placement"})," heeft, verhoog je ",a.jsx(e.code,{children:"--vl-map--scale-offset-inline"}),"."]}),`
`,a.jsxs(e.p,{children:["Ook de bovenhoeken delen de ruimte. Linksboven overlapt de schaal met een ",a.jsx(e.code,{children:"vl-map-search"}),`, met een legende met
`,a.jsx(e.code,{children:'placement="top_left"'})," en met de toggle-knop van een gesloten ",a.jsx(e.code,{children:"vl-map-side-sheet"}),", die standaard links staat. Rechtsboven overlapt ze met een legende met ",a.jsx(e.code,{children:'placement="top_right"'}),`, met
`,a.jsx(e.code,{children:"vl-map-action-controls"})," en met de toggle-knop van een ",a.jsx(e.code,{children:"vl-map-side-sheet"}),` aan de rechterkant als die een
`,a.jsx(e.code,{children:"toggle-text"})," heeft. Kies in dat geval een onderhoek voor de schaal."]}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-html",children:`<vl-map scale-position="bottom-right"></vl-map>
`})}),`
`,a.jsxs(e.p,{children:["Met ",a.jsx(e.code,{children:"hide-scale"})," verberg je de schaal volledig:"]}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-html",children:`<vl-map hide-scale></vl-map>
`})}),`
`,a.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,a.jsx(W,{of:f}),`
`,a.jsx(e.h2,{id:"varianten",children:"Varianten"}),`
`,a.jsx(e.h3,{id:"volledige-hoogte",children:"Volledige hoogte"}),`
`,a.jsx(e.p,{children:"De map de volledige beschikbare hoogte in laten nemen kan op de volgende manier:"}),`
`,a.jsxs(e.ul,{children:[`
`,a.jsxs(e.li,{children:["plaats op de parent een ",a.jsx(e.code,{children:"height"})," of een ",a.jsx(e.code,{children:"min-height"})]}),`
`,a.jsxs(e.li,{children:["plaats op de parent ",a.jsx(e.code,{children:"display: flex"})," en ",a.jsx(e.code,{children:"flex-direction: column"})]}),`
`,a.jsxs(e.li,{children:["plaats op de vl-map het attribuut ",a.jsx(e.code,{children:"full-height"})]}),`
`,a.jsxs(e.li,{children:["zorg dat de parent ",a.jsx(e.strong,{children:"geen elementen"})," heeft met ",a.jsx(e.code,{children:"position: fixed"})," die deel uit moeten maken van de hoogte"]}),`
`]}),`
`,a.jsx(T,{of:w}),`
`,a.jsx(e.h3,{id:"playground",children:"Playground"}),`
`,a.jsx(e.p,{children:"Zie de code onder de story voor het volledige voorbeeld."}),`
`,a.jsx(T,{of:k}),`
`,a.jsx(e.h2,{id:"referenties",children:"Referenties"}),`
`,a.jsx(e.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,a.jsxs(e.p,{children:["De ",a.jsx(e.code,{children:"map"})," component is een component van Departement Omgeving en heeft geen Digitaal Vlaanderen documentatie."]})]})}function Q(t={}){const{wrapper:e}={...D(),...t.components};return e?a.jsx(e,{...t,children:a.jsx(M,{...t})}):M(t)}function B(t,e){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const r=t=>V(`${t}-action`),s=t=>V(`${t}-toggle-button`),N=["draw-point","draw-line","draw-polygon","modify","delete"],V=t=>{const e=document.getElementsByClassName(t);return e[e.length-1]},P=({detail:{previous:t,current:e}})=>{N.forEach(o=>{t===r(o)?s(o).on=!1:e===r(o)&&(s(o).on=!0)})},R=({detail:{layer:t,visible:e}})=>{const o=t.getElementsByClassName("action");for(const d of o)N.forEach(m=>{d===r(m)&&(s(m).disabled=!e)})},_=({detail:{value:t}})=>{document.querySelectorAll("vl-map-features-layer")?.forEach(o=>{o.setAttribute("opacity",String(t/100))})};X([Y]);const Ve={id:"map-map",title:"map/map",tags:["autodocs"],args:n,argTypes:J,parameters:{docs:{page:Q}}},f=x(n,({allowFullscreen:t,autoShiftControls:e,disableEscape:o,disableRotation:d,disableMousewheelZoom:m,disableKeyboard:g,hideScale:u,noBorder:h,fullHeight:b,scalePosition:y})=>E`
        <vl-map
            ?allow-fullscreen=${t}
            ?auto-shift-controls=${e}
            ?disable-escape-key=${o}
            ?disable-rotation=${d}
            ?disable-mouse-wheel-zoom=${m}
            ?disable-keyboard=${g}
            ?hide-scale=${u}
            ?no-border=${h}
            ?full-height=${b}
            scale-position=${y}
            zoomInTooltip="Zoom in"
            zoomOutTooltip="Zoom uit"
        >
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        </vl-map>
    `);f.storyName="vl-map - default";const w=x(n,({allowFullscreen:t,autoShiftControls:e,disableEscape:o,disableRotation:d,disableMousewheelZoom:m,disableKeyboard:g,hideScale:u,noBorder:h,fullHeight:b,scalePosition:y})=>E`
        <div style="height: 800px; display: flex; flex-direction: column; border: 1px solid black">
            <vl-functional-header
                sub-title=${"Voor lager, middelbaar en hoger onderwijs"}
                title=${"School- en studietoelagen"}
                margin-bottom=${"none"}
                ?disable-back-link=${!0}
                skip-to-content-id="#main-content"
            ></vl-functional-header>
            <vl-map
                ?allow-fullscreen=${t}
                ?auto-shift-controls=${e}
                ?disable-escape-key=${o}
                ?disable-rotation=${d}
                ?disable-mouse-wheel-zoom=${m}
                ?disable-keyboard=${g}
                ?hide-scale=${u}
                ?no-border=${h}
                ?full-height=${b}
                scale-position=${y}
                zoomInTooltip="Zoom in"
                zoomOutTooltip="Zoom uit"
                id="main-content"
            >
                <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            </vl-map>
        </div>
    `);w.storyName="vl-map - full height";w.args={noBorder:!0,fullHeight:!0};const p="rgba(102, 51, 153, 0.6)",Z="width: 100%;",$="display: flex; gap: 1rem; align-items: center; margin-bottom: 1rem;",O={type:"FeatureCollection",features:[{type:"Feature",id:1,geometry:{type:"Point",coordinates:[21e4,19e4]}},{type:"Feature",id:2,geometry:{type:"LineString",coordinates:[[17e4,17e4],[15e4,206e3]]}},{type:"Feature",id:3,geometry:{type:"Polygon",coordinates:[[[44e3,171e3],[1e5,171e3],[1e5,205e3],[44e3,205e3],[44e3,171e3]]]}}]},k=x(n,({allowFullscreen:t,allowInvalidGeometry:e,autoShiftControls:o,disableEscape:d,disableRotation:m,disableMousewheelZoom:g,disableKeyboard:u,hideScale:h,noBorder:b,fullHeight:y,scalePosition:C,activeActionChange:j,layerVisibleChange:I})=>E`
        <vl-map
            id="map-playground"
            lambert2008
            ?allow-invalid-geometry=${e}
            ?allow-fullscreen=${t}
            ?auto-shift-controls=${o}
            ?disable-escape-key=${d}
            ?disable-rotation=${m}
            ?disable-mouse-wheel-zoom=${g}
            ?disable-keyboard=${u}
            ?hide-scale=${h}
            ?no-border=${b}
            ?full-height=${y}
            scale-position=${C}
            @vl-active-action-changed=${l=>{j({previous:l.detail.previous}),j({current:l.detail.current}),P(l)}}
            @vl-layer-visible-changed=${l=>{I(l.detail),R(l)}}
        >
            <vl-map-action-controls>
                <vl-map-measure-control></vl-map-measure-control>
            </vl-map-action-controls>

            <vl-map-side-sheet>
                <vl-title type="h6">Layers</vl-title>

                <vl-map-layer-switcher></vl-map-layer-switcher>
                <vl-input-slider value=${100} @vl-change-value=${_}></vl-input-slider>

                <hr />

                <vl-title type="h6">Measure</vl-title>

                <div>
                    <vl-button
                        @click=${()=>{r("measure").active=!0}}
                    >
                        Start
                    </vl-button>
                    <vl-button
                        @click=${()=>{r("measure").active=!1}}
                    >
                        Stop
                    </vl-button>
                </div>

                <hr />

                <div style=${Z}>
                    <vl-title type="h6">Shapes</vl-title>

                    <div style="margin-bottom: 2rem;">
                        <vl-button
                            toggle
                            class="modify-toggle-button"
                            @click=${()=>{r("modify").active=s("modify").on}}
                        >
                            Modify
                        </vl-button>
                        <vl-button
                            toggle
                            class="delete-toggle-button"
                            @click=${()=>{r("delete").active=s("delete").on}}
                        >
                            Delete
                        </vl-button>
                    </div>

                    <div style=${$}>
                        <vl-button
                            toggle
                            icon="pencil"
                            label="Toggle draw point action"
                            class="draw-point-toggle-button"
                            @click=${()=>{r("draw-point").active=s("draw-point").on}}
                        >
                        </vl-button>
                        <p>Draw point</p>
                    </div>

                    <div style=${$}>
                        <vl-button
                            toggle
                            icon="pencil"
                            label="Toggle draw line action"
                            class="draw-line-toggle-button"
                            @click=${()=>{r("draw-line").active=s("draw-line").on}}
                        >
                        </vl-button>
                        <p>Draw line</p>
                    </div>

                    <div style=${$}>
                        <vl-button
                            toggle
                            icon="pencil"
                            label="Toggle draw polygon action"
                            class="draw-polygon-toggle-button"
                            @click=${()=>{r("draw-polygon").active=s("draw-polygon").on}}
                        >
                        </vl-button>
                        <p>Draw Polygon</p>
                    </div>

                    <div>
                        <vl-button
                            @click=${()=>{const l=document.querySelector("#map-playground")?.hasInvalidGeometries();document.querySelector("#toaster-invalid").showAlert({icon:l?"alert-circle":"check-circle",type:l?"error":"success",message:`Deze kaart heeft ${l?"":"GEEN"} ongeldige geometrieën.`,closable:!0})}}
                            >Check invalid shapes</vl-button
                        >
                        <vl-toaster id="toaster-invalid" fade-out></vl-toaster>
                    </div>
                </div>
            </vl-map-side-sheet>

            <vl-map-overview-map></vl-map-overview-map>

            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-baselayer-grb></vl-map-baselayer-grb>
            <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>

            <vl-map-features-layer name="Shapes" .features=${O} projection-code="EPSG:31370">
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
            <vl-map-legend placement=${G.BOTTOM_RIGHT} right="140px"></vl-map-legend>
        </vl-map>
    `);k.storyName="vl-map - playground";const S=x(n,({allowFullscreen:t,allowInvalidGeometry:e,autoShiftControls:o,disableEscape:d,disableRotation:m,disableMousewheelZoom:g,disableKeyboard:u,hideScale:h,noBorder:b,fullHeight:y,scalePosition:C,activeActionChange:j,layerVisibleChange:I})=>E`
        <vl-map
            id="map-playground-lb72"
            ?allow-fullscreen=${t}
            ?allow-invalid-geometry=${e}
            ?auto-shift-controls=${o}
            ?disable-escape-key=${d}
            ?disable-rotation=${m}
            ?disable-mouse-wheel-zoom=${g}
            ?disable-keyboard=${u}
            ?hide-scale=${h}
            ?no-border=${b}
            ?full-height=${y}
            scale-position=${C}
            @vl-active-action-changed=${l=>{j({previous:l.detail.previous}),j({current:l.detail.current}),P(l)}}
            @vl-layer-visible-changed=${l=>{I(l.detail),R(l)}}
        >
            <vl-map-action-controls>
                <vl-map-measure-control></vl-map-measure-control>
            </vl-map-action-controls>

            <vl-map-side-sheet>
                <vl-title type="h6">Layers</vl-title>

                <vl-map-layer-switcher></vl-map-layer-switcher>
                <vl-input-slider value=${100} @vl-change-value=${_}></vl-input-slider>

                <hr />

                <vl-title type="h6">Measure</vl-title>

                <div>
                    <vl-button
                        @click=${()=>{r("measure").active=!0}}
                    >
                        Start
                    </vl-button>
                    <vl-button
                        @click=${()=>{r("measure").active=!1}}
                    >
                        Stop
                    </vl-button>
                </div>

                <hr />

                <div style=${Z}>
                    <vl-title type="h6">Shapes</vl-title>

                    <div style="margin-bottom: 2rem;">
                        <vl-button
                            toggle
                            class="modify-toggle-button"
                            @click=${()=>{r("modify").active=s("modify").on}}
                        >
                            Modify
                        </vl-button>
                        <vl-button
                            toggle
                            class="delete-toggle-button"
                            @click=${()=>{r("delete").active=s("delete").on}}
                        >
                            Delete
                        </vl-button>
                    </div>

                    <div style=${$}>
                        <vl-button
                            toggle
                            icon="pencil"
                            label="Toggle draw point action"
                            class="draw-point-toggle-button"
                            @click=${()=>{r("draw-point").active=s("draw-point").on}}
                        >
                        </vl-button>
                        <p>Draw point</p>
                    </div>

                    <div style=${$}>
                        <vl-button
                            toggle
                            icon="pencil"
                            label="Toggle draw line action"
                            class="draw-line-toggle-button"
                            @click=${()=>{r("draw-line").active=s("draw-line").on}}
                        >
                        </vl-button>
                        <p>Draw line</p>
                    </div>

                    <div style=${$}>
                        <vl-button
                            toggle
                            icon="pencil"
                            label="Toggle draw polygon action"
                            class="draw-polygon-toggle-button"
                            @click=${()=>{r("draw-polygon").active=s("draw-polygon").on}}
                        >
                        </vl-button>
                        <p>Draw Polygon</p>
                    </div>

                    <div>
                        <vl-button
                            @click=${()=>{const l=document.querySelector("#map-playground-lb72")?.hasInvalidGeometries();document.querySelector("#toaster-invalid-lb72").showAlert({icon:l?"alert-circle":"check-circle",type:l?"error":"success",message:`Deze kaart heeft ${l?"":"GEEN"} ongeldige geometrieën.`,closable:!0})}}
                            >Check invalid shapes</vl-button
                        >
                        <vl-toaster id="toaster-invalid-lb72" fade-out></vl-toaster>
                    </div>
                </div>
            </vl-map-side-sheet>

            <vl-map-overview-map></vl-map-overview-map>

            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-baselayer-grb></vl-map-baselayer-grb>
            <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>

            <vl-map-features-layer name="Shapes" .features=${O}>
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
            <vl-map-legend placement=${G.BOTTOM_RIGHT} right="140px"></vl-map-legend>
        </vl-map>
    `);S.storyName="vl-map - playground - Lambert 72";const v=x(n,({autoShiftControls:t})=>E`
        <vl-map id="map-auto-shift" lambert2008 ?auto-shift-controls=${t}>
            <vl-map-side-sheet right open>
                <vl-title type="h6">Paneel</vl-title>
                <p>Zet je dit paneel open, dan wijken de controls en de legende ervoor.</p>
            </vl-map-side-sheet>

            <vl-map-overview-map></vl-map-overview-map>

            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>

            <vl-map-features-layer name="Shapes" .features=${O} projection-code="EPSG:31370">
                <vl-map-layer-style name="Shapes" border-color=${p} color=${p}></vl-map-layer-style>
            </vl-map-features-layer>

            <vl-map-legend placement="top_right"></vl-map-legend>
        </vl-map>
    `);v.storyName="vl-map - auto-shift-controls";v.args={autoShiftControls:!0};v.parameters={controls:{include:["autoShiftControls"]}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`story(mapArgs, ({
  allowFullscreen,
  autoShiftControls,
  disableEscape,
  disableRotation,
  disableMousewheelZoom,
  disableKeyboard,
  hideScale,
  noBorder,
  fullHeight,
  scalePosition
}) => html\`
        <vl-map
            ?allow-fullscreen=\${allowFullscreen}
            ?auto-shift-controls=\${autoShiftControls}
            ?disable-escape-key=\${disableEscape}
            ?disable-rotation=\${disableRotation}
            ?disable-mouse-wheel-zoom=\${disableMousewheelZoom}
            ?disable-keyboard=\${disableKeyboard}
            ?hide-scale=\${hideScale}
            ?no-border=\${noBorder}
            ?full-height=\${fullHeight}
            scale-position=\${scalePosition}
            zoomInTooltip="Zoom in"
            zoomOutTooltip="Zoom uit"
        >
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        </vl-map>
    \`)`,...f.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`story(mapArgs, ({
  allowFullscreen,
  autoShiftControls,
  disableEscape,
  disableRotation,
  disableMousewheelZoom,
  disableKeyboard,
  hideScale,
  noBorder,
  fullHeight,
  scalePosition
}) => html\`
        <div style="height: 800px; display: flex; flex-direction: column; border: 1px solid black">
            <vl-functional-header
                sub-title=\${'Voor lager, middelbaar en hoger onderwijs'}
                title=\${'School- en studietoelagen'}
                margin-bottom=\${'none'}
                ?disable-back-link=\${true}
                skip-to-content-id="#main-content"
            ></vl-functional-header>
            <vl-map
                ?allow-fullscreen=\${allowFullscreen}
                ?auto-shift-controls=\${autoShiftControls}
                ?disable-escape-key=\${disableEscape}
                ?disable-rotation=\${disableRotation}
                ?disable-mouse-wheel-zoom=\${disableMousewheelZoom}
                ?disable-keyboard=\${disableKeyboard}
                ?hide-scale=\${hideScale}
                ?no-border=\${noBorder}
                ?full-height=\${fullHeight}
                scale-position=\${scalePosition}
                zoomInTooltip="Zoom in"
                zoomOutTooltip="Zoom uit"
                id="main-content"
            >
                <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            </vl-map>
        </div>
    \`)`,...w.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`story(mapArgs, ({
  allowFullscreen,
  allowInvalidGeometry,
  autoShiftControls,
  disableEscape,
  disableRotation,
  disableMousewheelZoom,
  disableKeyboard,
  hideScale,
  noBorder,
  fullHeight,
  scalePosition,
  activeActionChange,
  layerVisibleChange
}) => html\`
        <vl-map
            id="map-playground"
            lambert2008
            ?allow-invalid-geometry=\${allowInvalidGeometry}
            ?allow-fullscreen=\${allowFullscreen}
            ?auto-shift-controls=\${autoShiftControls}
            ?disable-escape-key=\${disableEscape}
            ?disable-rotation=\${disableRotation}
            ?disable-mouse-wheel-zoom=\${disableMousewheelZoom}
            ?disable-keyboard=\${disableKeyboard}
            ?hide-scale=\${hideScale}
            ?no-border=\${noBorder}
            ?full-height=\${fullHeight}
            scale-position=\${scalePosition}
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

                    <div>
                        <vl-button
                            @click=\${() => {
  const hasInvalidGeometries = document.querySelector<VlMap>('#map-playground')?.hasInvalidGeometries();
  const toaster = document.querySelector<VlToasterComponent>('#toaster-invalid');
  toaster.showAlert({
    icon: hasInvalidGeometries ? 'alert-circle' : 'check-circle',
    type: hasInvalidGeometries ? 'error' : 'success',
    message: \`Deze kaart heeft \${hasInvalidGeometries ? '' : 'GEEN'} ongeldige geometrieën.\`,
    closable: true
  });
}}
                            >Check invalid shapes</vl-button
                        >
                        <vl-toaster id="toaster-invalid" fade-out></vl-toaster>
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
    \`)`,...k.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`story(mapArgs, ({
  allowFullscreen,
  allowInvalidGeometry,
  autoShiftControls,
  disableEscape,
  disableRotation,
  disableMousewheelZoom,
  disableKeyboard,
  hideScale,
  noBorder,
  fullHeight,
  scalePosition,
  activeActionChange,
  layerVisibleChange
}) => html\`
        <vl-map
            id="map-playground-lb72"
            ?allow-fullscreen=\${allowFullscreen}
            ?allow-invalid-geometry=\${allowInvalidGeometry}
            ?auto-shift-controls=\${autoShiftControls}
            ?disable-escape-key=\${disableEscape}
            ?disable-rotation=\${disableRotation}
            ?disable-mouse-wheel-zoom=\${disableMousewheelZoom}
            ?disable-keyboard=\${disableKeyboard}
            ?hide-scale=\${hideScale}
            ?no-border=\${noBorder}
            ?full-height=\${fullHeight}
            scale-position=\${scalePosition}
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

                    <div>
                        <vl-button
                            @click=\${() => {
  const hasInvalidGeometries = document.querySelector<VlMap>('#map-playground-lb72')?.hasInvalidGeometries();
  const toaster = document.querySelector<VlToasterComponent>('#toaster-invalid-lb72');
  toaster.showAlert({
    icon: hasInvalidGeometries ? 'alert-circle' : 'check-circle',
    type: hasInvalidGeometries ? 'error' : 'success',
    message: \`Deze kaart heeft \${hasInvalidGeometries ? '' : 'GEEN'} ongeldige geometrieën.\`,
    closable: true
  });
}}
                            >Check invalid shapes</vl-button
                        >
                        <vl-toaster id="toaster-invalid-lb72" fade-out></vl-toaster>
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
    \`)`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`story(mapArgs, ({
  autoShiftControls
}) => html\`
        <vl-map id="map-auto-shift" lambert2008 ?auto-shift-controls=\${autoShiftControls}>
            <vl-map-side-sheet right open>
                <vl-title type="h6">Paneel</vl-title>
                <p>Zet je dit paneel open, dan wijken de controls en de legende ervoor.</p>
            </vl-map-side-sheet>

            <vl-map-overview-map></vl-map-overview-map>

            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>

            <vl-map-features-layer name="Shapes" .features=\${features} projection-code="EPSG:31370">
                <vl-map-layer-style name="Shapes" border-color=\${purple} color=\${purple}></vl-map-layer-style>
            </vl-map-features-layer>

            <vl-map-legend placement="top_right"></vl-map-legend>
        </vl-map>
    \`)`,...v.parameters?.docs?.source}}};const Pe=["MapDefault","MapFullHeight","MapPlayground","MapPlaygroundLB72","MapAutoShiftControls"];export{v as MapAutoShiftControls,f as MapDefault,w as MapFullHeight,k as MapPlayground,S as MapPlaygroundLB72,Pe as __namedExportsOrder,Ve as default};
