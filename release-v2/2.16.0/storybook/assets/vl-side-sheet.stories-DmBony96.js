import{Z as s,a2 as q,a1 as y,_ as a,W as A,X as I,u as w,j as e,C as T,b8 as D,S as V,s as x,x as c}from"./iframe-B0laZkYe.js";import"./preload-helper-D9Z9MdNV.js";const n={...I,absolute:!1,customIcon:"",enableSwipe:!1,hideToggleButton:!1,iconPlacement:"before",left:!1,right:!1,open:!1,top:"43px",toggleText:"",tooltipText:"",shadow:"default"},E={...A,enableSwipe:{name:"enable-swipe",description:"Attribute wordt gebruikt om aan te duiden dat swipe functie toegelaten is.",table:{type:{summary:a.BOOLEAN},category:s.ATTRIBUTES,defaultValue:{summary:String(n.enableSwipe)}}},left:{name:"left",description:"Attribute om de side-sheet aan de linkerrand te positioneren.",table:{type:{summary:a.BOOLEAN},category:s.ATTRIBUTES,defaultValue:{summary:String(n.left)}}},right:{name:"right",description:"Attribute om de side-sheet aan de rechterrand te positioneren. Dit is de standaard instelling.",table:{type:{summary:a.BOOLEAN},category:s.ATTRIBUTES,defaultValue:{summary:String(n.right)}}},absolute:{name:"absolute",description:"Attribute wordt gebruikt om aan te duiden dat de side-sheet absoluut gepositioneerd wordt.",table:{type:{summary:a.BOOLEAN},category:s.ATTRIBUTES,defaultValue:{summary:String(n.absolute)}}},open:{name:"open",description:"Duidt aan dat de side-sheet open is.",table:{type:{summary:a.BOOLEAN},category:s.ATTRIBUTES,defaultValue:{summary:String(n.open)}}},top:{name:"top",description:"Attribute wordt gebruikt om de padding-top van de side-sheet aan te passen. Dit staat standaard op 43px ingesteld om de hoogte van de sticky vl-header te compenseren. Indien er extra sticky elementen op de pagina voorkomen, kan je deze waarde aanpassen.",table:{type:{summary:a.STRING},category:s.ATTRIBUTES,defaultValue:{summary:n.top}}},toggleText:{name:"toggle-text",description:"Attribute wordt gebruikt om de toggle knop tekst te wijzigen.",table:{type:{summary:a.STRING},category:s.ATTRIBUTES,defaultValue:{summary:n.toggleText}}},tooltipText:{name:"tooltip-text",description:"Attribute wordt gebruikt om de native tooltip te bepalen.",table:{type:{summary:a.STRING},category:s.ATTRIBUTES,defaultValue:{summary:n.tooltipText}}},customIcon:{name:"custom-icon",description:`Dit vervangt zowel open & close icon door 1 custom icon. 
 Standaard wordt afhankelijk van de positie van de side-sheet een pijltje getoond dat aanduidt of de side-sheet open of dicht is.`,table:{type:{summary:a.STRING},category:s.ATTRIBUTES,defaultValue:{summary:n.customIcon}}},iconPlacement:{name:"icon-placement",description:"Positie van icon bepalen. Standaard bevindt die zich voor de tekst.",control:{type:y.SELECT},options:["before","after"],table:{type:{summary:q(["before","after"])},category:s.ATTRIBUTES,defaultValue:{summary:n.iconPlacement}}},hideToggleButton:{name:"hide-toggle-button",description:"Toggle knop verbergen.",table:{type:{summary:a.BOOLEAN},category:s.ATTRIBUTES,defaultValue:{summary:String(n.hideToggleButton)}}},shadow:{name:"shadow",description:'Schaduw van de side sheet. Gebruik "large" voor side sheets die een hoger contrast nodig hebben met de onderliggende pagina.',control:{type:y.SELECT},options:["default","large"],table:{type:{summary:q(["default","large"])},category:s.ATTRIBUTES,defaultValue:{summary:"default"}}}},C=`import { VlSideSheet } from '../vl-side-sheet.component';

export const sideSheetToggleImplementation = () => {
    let sideSheet: VlSideSheet;
    let listenerButton: HTMLElement;
    customElements.whenDefined('vl-side-sheet').then(() => {
        sideSheet = document.querySelector('#side-sheet-toggle') as unknown as VlSideSheet;
        listenerButton = document.querySelector(
            '#vl-side-sheet-open-button-with-close-listener'
        ) as unknown as HTMLElement;
    });
    const toggleSideSheet = () => sideSheet?.toggle();

    const openSideSheet = () => sideSheet?.open();
    const closeSideSheet = () => sideSheet?.close();

    return { toggleSideSheet, openSideSheet, closeSideSheet };
};

export default sideSheetToggleImplementation;
`;function k(i){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...w(),...i.components},{FluxComponentMetaData:u}=t;return u||B("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"side-sheet",children:"Side sheet"}),`
`,e.jsx(u,{id:"components-block-side-sheet"}),`
`,e.jsx(t.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(t.p,{children:["De ",e.jsx(t.code,{children:"side-sheet"}),`-component heeft containers die aan de linker- of rechterrand van het scherm zijn verankerd. Deze kunnen
geopend of gesloten worden aan de hand van een knop.`]}),`
`,e.jsx(t.h2,{id:"wanneer-gebruik-je-een-side-sheet",children:"Wanneer gebruik je een side-sheet?"}),`
`,e.jsxs(t.p,{children:[`Twijfel je tussen een side-sheet en een modal? Een side-sheet laat de pagina-context zichtbaar en bruikbaar terwijl
de gebruiker een taak uitvoert; een modal schermt de pagina net af voor een geïsoleerde taak. Let op: een links of
rechts uitgelijnde modal lijkt op een side-sheet, maar legt wél een overlay over de pagina. Zie
`,e.jsx(t.a,{href:"/docs/patronen-overlays-modal-vs-side-sheet--documentatie",children:"Patronen/Overlays/Modal vs Side sheet"}),` voor het
volledige keuzekader.`]}),`
`,e.jsx(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import { VlSideSheet } from '@domg-wc/components/block';
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<vl-side-sheet>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum urna ante.</p>
    <p>Sed vehicula tortor quis dignissim tincidunt.</p>
</vl-side-sheet>
`})}),`
`,e.jsx(t.h2,{id:"default",children:"Default"}),`
`,e.jsx(T,{of:o}),`
`,e.jsx(t.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(D,{of:o}),`
`,e.jsx(t.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(t.h3,{id:"custom-icon",children:"Custom icon"}),`
`,e.jsxs(t.p,{children:["Standaard is er een pijltje dat aanduidt of de ",e.jsx(t.code,{children:"side-sheet"}),` open of gesloten is. Je kan dit vervangen door een custom
icon in te stellen. `,e.jsx(t.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/componenten/icon",rel:"nofollow",children:"Hier"}),` vind je een
overzicht van alle beschikbare icons.`]}),`
`,e.jsx(t.p,{children:"Deze blijft dan dezelfde in de 2 richtingen."}),`
`,e.jsx(t.h3,{id:"breedte-zelf-instellen",children:"Breedte zelf instellen."}),`
`,e.jsx(t.p,{children:"Het is ook mogelijk de breedte zelf in te stellen."}),`
`,e.jsxs(t.p,{children:[`Dan kan je voor mobile en/of desktop de width instellen door de respectievelijke css variabelen in te stellen. Dit
stelt de `,e.jsx(t.code,{children:"width"})," in voor het component."]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["breekpunt voor desktop naar mobile is vanaf ",e.jsx(t.code,{children:"767px"})]}),`
`,e.jsxs(t.li,{children:["voor desktop gebruik je ",e.jsx(t.code,{children:"--vl-side-sheet-width"})]}),`
`,e.jsxs(t.li,{children:["voor mobile gebruik je ",e.jsx(t.code,{children:"--vl-side-sheet-width-mobile"})]}),`
`,e.jsxs(t.li,{children:["hier kan je ook gelijk welke andere waardes meegeven die geldig zijn voor ",e.jsx(t.code,{children:"width"})]}),`
`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-css",children:`:root {
    --vl-side-sheet-width: 480px; /* voor desktop */
    --vl-side-sheet-width-mobile: 100%; /* voor mobile */
}
`})}),`
`,e.jsx(t.h3,{id:"openen-en-sluiten-zonder-knop",children:"Openen en sluiten zonder knop"}),`
`,e.jsxs(t.p,{children:["Je kan de ",e.jsx(t.code,{children:"side-sheet"})," openen zonder de toggle knop;"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["stel ",e.jsx(t.code,{children:"hide-toggle-button"})," in op ",e.jsx(t.code,{children:"true"})]}),`
`,e.jsxs(t.li,{children:["roep ",e.jsx(t.code,{children:"toggle()"})," aan op de ",e.jsx(t.code,{children:"side-sheet"}),"-instantie te wisselen tussen open en gesloten status"]}),`
`,e.jsxs(t.li,{children:["alternatief kan je ook uitdrukkelijk ",e.jsx(t.code,{children:"open()"})," en ",e.jsx(t.code,{children:"close()"})," aanroepen"]}),`
`]}),`
`,e.jsx(t.p,{children:"Hieronder volgt een voorbeeld met broncode:"}),`
`,e.jsx(t.h3,{id:"voorbeeld-van-buitenaf-openen--sluiten",children:"Voorbeeld van buitenaf openen & sluiten"}),`
`,e.jsx(T,{of:r}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"voorbeeld code om side-sheet te openen en te sluiten van buitenaf"}),e.jsx(V,{code:C,language:"ts",dark:!0})]}),`
`,e.jsx(t.h2,{id:"custom-css-properties",children:"Custom CSS Properties"}),`
`,e.jsxs("table",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Naam"}),e.jsx("td",{children:"Beschrijving"}),e.jsx("td",{children:"Default"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(t.code,{children:"--vl-side-sheet-width"})}),e.jsx("td",{children:"breedte van het element"}),e.jsx("td",{children:"33%"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(t.code,{children:"--vl-side-sheet-width-mobile"})}),e.jsx("td",{children:"breedte van het element bij scherm kleiner dan 767px"}),e.jsx("td",{children:"calc(100vw - 56px)"})]})]}),`
`,e.jsx(t.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsxs(t.p,{children:["Er is geen ",e.jsx(t.code,{children:"side-sheet"}),"-component bij Digitaal Vlaanderen."]}),`
`,e.jsxs(t.p,{children:[`In de Vue Component library van Digitaal Vlaanderen is er echter wel een component die er dicht tegen aanleunt:
`,e.jsx(t.code,{children:"vl-side-bar"}),"-component (link ",e.jsx(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/vue-documentation/?path=/story/components-vl-sidebar--sidebar-collapsible",rel:"nofollow",children:"side-bar-component"}),")."]})]})}function M(i={}){const{wrapper:t}={...w(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(k,{...i})}):k(i)}function B(i,t){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}const P=()=>{let i;return customElements.whenDefined("vl-side-sheet").then(()=>{i=document.querySelector("#side-sheet-toggle"),document.querySelector("#vl-side-sheet-open-button-with-close-listener")}),{toggleSideSheet:()=>i?.toggle(),openSideSheet:()=>i?.open(),closeSideSheet:()=>i?.close()}},O={id:"components-block-side-sheet",title:"Components - Block/side-sheet",tags:["autodocs"],args:n,argTypes:E,parameters:{docs:{page:M}},decorators:[i=>c` <div style="height: 150px;">${i()}</div>`]},o=x(n,({enableSwipe:i,absolute:t,left:u,top:d,toggleText:m,tooltipText:p,right:h,customIcon:g,hideToggleButton:v,iconPlacement:b,open:f,shadow:S})=>c`
        <vl-side-sheet
            ?enable-swipe=${i}
            ?absolute=${t}
            ?left=${u}
            top=${d}
            ?right=${h}
            toggle-text=${m}
            tooltip-text=${p}
            custom-icon=${g}
            icon-placement=${b}
            ?hide-toggle-button=${v}
            ?open=${f}
            shadow=${S}
        >
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum urna ante. Integer eu sem
                mollis, ornare libero nec, pulvinar augue. Nunc ac rhoncus ipsum. Mauris vitae elementum erat. Donec
                gravida hendrerit magna, quis feugiat felis sodales quis. Sed tempor ornare elit, non aliquam urna
                maximus imperdiet. Suspendisse finibus ullamcorper dictum. Sed vehicula tortor quis dignissim tincidunt.
                Maecenas turpis ante, blandit sed efficitur eu, varius vitae nibh. Vivamus porttitor mi in massa
                elementum sollicitudin. Cras id porta nisi, vel pulvinar neque. Mauris sodales mi sem, sit amet
                fringilla tellus ultrices et. Quisque sed interdum mauris. Suspendisse rutrum maximus ornare. Morbi sed
                vestibulum magna, a tincidunt mi. Aliquam in imperdiet diam.
            </p>
            <p>
                Nulla mattis eget mi at mattis. Donec ut nisi ipsum. Sed placerat, augue vel dapibus blandit, nulla
                purus hendrerit orci, ut maximus ligula quam at sapien. Nunc efficitur augue est, ac laoreet libero
                blandit in. Aliquam non sagittis libero. Fusce posuere magna venenatis, facilisis magna quis, dictum
                risus. In nulla augue, efficitur congue porta sit amet, convallis eu justo. Etiam facilisis maximus
                dolor, a scelerisque sapien fringilla non. Quisque vestibulum mauris erat, vel ultrices massa dictum sit
                amet. Integer nec bibendum arcu, sit amet pretium turpis.
            </p>
            <p>
                Vivamus ligula diam, lobortis eget ultricies vitae, varius id arcu. Sed id mauris sed augue ultricies
                luctus. Donec pulvinar a sapien quis posuere. Suspendisse non varius dui. Nullam eu posuere neque.
                Vivamus eget felis turpis. Curabitur tortor ante, vulputate vel quam ut, posuere mattis ipsum. Maecenas
                vel metus tortor. Quisque id turpis est. Donec est eros, laoreet vel metus id, tempor pulvinar eros. Nam
                sed semper eros. Aenean placerat tellus ex, ac ultricies dui ornare ac. Suspendisse eget semper risus.
                Nullam eleifend leo justo, eu rhoncus erat lacinia quis. Nam finibus nunc sit amet justo interdum
                dignissim.
            </p>
            <p>
                Donec iaculis purus leo. Aliquam pulvinar magna vitae dolor varius auctor. Sed dapibus convallis est,
                non pharetra felis eleifend nec. Donec erat ex, tempus in sem quis, imperdiet gravida justo. Morbi sem
                purus, efficitur eget massa ut, molestie placerat orci. Phasellus sollicitudin convallis augue, ut
                tincidunt nulla faucibus ut. Praesent ullamcorper erat sit amet nisi venenatis eleifend. Vestibulum
                vehicula tristique ipsum, vel placerat tortor maximus eu. Phasellus mauris purus, semper vulputate
                maximus sit amet, faucibus eget risus. Sed in imperdiet dui, vel suscipit nibh. Nunc ac lectus tempus,
                venenatis mauris non, ornare nunc. Cras at nibh nec sem vestibulum facilisis. Curabitur et elit
                hendrerit, ullamcorper nibh vitae, eleifend augue. Aliquam imperdiet eros quis pulvinar suscipit.
            </p>
            <p>
                In dapibus, est eu eleifend vehicula, purus arcu consequat nulla, accumsan viverra mi massa vel metus.
                Vestibulum ut nunc viverra, pellentesque urna et, consectetur metus. Quisque bibendum diam non eros
                porta, non volutpat leo commodo. Morbi odio nulla, tempus non lobortis ac, imperdiet vitae sem. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce ac sodales
                eros. In hac habitasse platea dictumst.
            </p>
        </vl-side-sheet>
    `);o.storyName="vl-side-sheet - default";const r=x(n,({enableSwipe:i,absolute:t,left:u,top:d,toggleText:m,tooltipText:p,right:h,customIcon:g,hideToggleButton:v,iconPlacement:b,open:f,shadow:S})=>{const{toggleSideSheet:$,openSideSheet:N,closeSideSheet:j}=P();return c`
            <style>
                :root {
                    --vl-side-sheet-width-mobile: 100%;
                    --vl-side-sheet-width: 480px;
                }

                #vl-side-sheet-close-button {
                    position: fixed;
                    top: 1rem;
                    right: 3rem;
                }
            </style>
            <vl-button
                type="button"
                @click=${()=>{$()}}
            >
                toggle()
            </vl-button>
            <vl-button
                type="button"
                @click=${()=>{N()}}
            >
                open()
            </vl-button>
            <vl-button
                type="button"
                @click=${()=>{j()}}
            >
                close()
            </vl-button>
            <vl-side-sheet
                id="side-sheet-toggle"
                ?enable-swipe=${i}
                ?absolute=${t}
                ?left=${u}
                top=${d}
                ?right=${h}
                toggle-text=${m}
                tooltip-text=${p}
                custom-icon=${g}
                icon-placement=${b}
                ?hide-toggle-button=${v}
                ?open=${f}
                shadow=${S}
            >
                <vl-button
                    id="vl-side-sheet-close-button"
                    type="button"
                    tertiary
                    @click=${()=>{j()}}
                    icon="cross"
                    label="Sluit de side-sheet"
                    custom-css="button.tertiary { background: white }"
                >
                </vl-button>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum urna ante. Integer eu sem
                    mollis, ornare libero nec, pulvinar augue. Nunc ac rhoncus ipsum. Mauris vitae elementum erat. Donec
                    gravida hendrerit magna, quis feugiat felis sodales quis. Sed tempor ornare elit, non aliquam urna
                    maximus imperdiet. Suspendisse finibus ullamcorper dictum. Sed vehicula tortor quis dignissim
                    tincidunt. Maecenas turpis ante, blandit sed efficitur eu, varius vitae nibh. Vivamus porttitor mi
                    in massa elementum sollicitudin. Cras id porta nisi, vel pulvinar neque. Mauris sodales mi sem, sit
                    amet fringilla tellus ultrices et. Quisque sed interdum mauris. Suspendisse rutrum maximus ornare.
                    Morbi sed vestibulum magna, a tincidunt mi. Aliquam in imperdiet diam.
                </p>
                <p>
                    Nulla mattis eget mi at mattis. Donec ut nisi ipsum. Sed placerat, augue vel dapibus blandit, nulla
                    purus hendrerit orci, ut maximus ligula quam at sapien. Nunc efficitur augue est, ac laoreet libero
                    blandit in. Aliquam non sagittis libero. Fusce posuere magna venenatis, facilisis magna quis, dictum
                    risus. In nulla augue, efficitur congue porta sit amet, convallis eu justo. Etiam facilisis maximus
                    dolor, a scelerisque sapien fringilla non. Quisque vestibulum mauris erat, vel ultrices massa dictum
                    sit amet. Integer nec bibendum arcu, sit amet pretium turpis.
                </p>
                <p>
                    Vivamus ligula diam, lobortis eget ultricies vitae, varius id arcu. Sed id mauris sed augue
                    ultricies luctus. Donec pulvinar a sapien quis posuere. Suspendisse non varius dui. Nullam eu
                    posuere neque. Vivamus eget felis turpis. Curabitur tortor ante, vulputate vel quam ut, posuere
                    mattis ipsum. Maecenas vel metus tortor. Quisque id turpis est. Donec est eros, laoreet vel metus
                    id, tempor pulvinar eros. Nam sed semper eros. Aenean placerat tellus ex, ac ultricies dui ornare
                    ac. Suspendisse eget semper risus. Nullam eleifend leo justo, eu rhoncus erat lacinia quis. Nam
                    finibus nunc sit amet justo interdum dignissim.
                </p>
                <p>
                    Donec iaculis purus leo. Aliquam pulvinar magna vitae dolor varius auctor. Sed dapibus convallis
                    est, non pharetra felis eleifend nec. Donec erat ex, tempus in sem quis, imperdiet gravida justo.
                    Morbi sem purus, efficitur eget massa ut, molestie placerat orci. Phasellus sollicitudin convallis
                    augue, ut tincidunt nulla faucibus ut. Praesent ullamcorper erat sit amet nisi venenatis eleifend.
                    Vestibulum vehicula tristique ipsum, vel placerat tortor maximus eu. Phasellus mauris purus, semper
                    vulputate maximus sit amet, faucibus eget risus. Sed in imperdiet dui, vel suscipit nibh. Nunc ac
                    lectus tempus, venenatis mauris non, ornare nunc. Cras at nibh nec sem vestibulum facilisis.
                    Curabitur et elit hendrerit, ullamcorper nibh vitae, eleifend augue. Aliquam imperdiet eros quis
                    pulvinar suscipit.
                </p>
                <p>
                    In dapibus, est eu eleifend vehicula, purus arcu consequat nulla, accumsan viverra mi massa vel
                    metus. Vestibulum ut nunc viverra, pellentesque urna et, consectetur metus. Quisque bibendum diam
                    non eros porta, non volutpat leo commodo. Morbi odio nulla, tempus non lobortis ac, imperdiet vitae
                    sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    Fusce ac sodales eros. In hac habitasse platea dictumst.
                </p>
            </vl-side-sheet>
        `});r.storyName="vl-side-sheet - toggle";const l=x(n,({top:i})=>c`
        <vl-side-sheet open top=${i}>
            <p>De padding-top van deze side-sheet kan aangepast worden via het <code>top</code>-attribuut.</p>
        </vl-side-sheet>
    `);l.storyName="vl-side-sheet - top";o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`story(sideSheetArgs, ({
  enableSwipe,
  absolute,
  left,
  top,
  toggleText,
  tooltipText,
  right,
  customIcon,
  hideToggleButton,
  iconPlacement,
  open,
  shadow
}) => html\`
        <vl-side-sheet
            ?enable-swipe=\${enableSwipe}
            ?absolute=\${absolute}
            ?left=\${left}
            top=\${top}
            ?right=\${right}
            toggle-text=\${toggleText}
            tooltip-text=\${tooltipText}
            custom-icon=\${customIcon}
            icon-placement=\${iconPlacement}
            ?hide-toggle-button=\${hideToggleButton}
            ?open=\${open}
            shadow=\${shadow}
        >
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum urna ante. Integer eu sem
                mollis, ornare libero nec, pulvinar augue. Nunc ac rhoncus ipsum. Mauris vitae elementum erat. Donec
                gravida hendrerit magna, quis feugiat felis sodales quis. Sed tempor ornare elit, non aliquam urna
                maximus imperdiet. Suspendisse finibus ullamcorper dictum. Sed vehicula tortor quis dignissim tincidunt.
                Maecenas turpis ante, blandit sed efficitur eu, varius vitae nibh. Vivamus porttitor mi in massa
                elementum sollicitudin. Cras id porta nisi, vel pulvinar neque. Mauris sodales mi sem, sit amet
                fringilla tellus ultrices et. Quisque sed interdum mauris. Suspendisse rutrum maximus ornare. Morbi sed
                vestibulum magna, a tincidunt mi. Aliquam in imperdiet diam.
            </p>
            <p>
                Nulla mattis eget mi at mattis. Donec ut nisi ipsum. Sed placerat, augue vel dapibus blandit, nulla
                purus hendrerit orci, ut maximus ligula quam at sapien. Nunc efficitur augue est, ac laoreet libero
                blandit in. Aliquam non sagittis libero. Fusce posuere magna venenatis, facilisis magna quis, dictum
                risus. In nulla augue, efficitur congue porta sit amet, convallis eu justo. Etiam facilisis maximus
                dolor, a scelerisque sapien fringilla non. Quisque vestibulum mauris erat, vel ultrices massa dictum sit
                amet. Integer nec bibendum arcu, sit amet pretium turpis.
            </p>
            <p>
                Vivamus ligula diam, lobortis eget ultricies vitae, varius id arcu. Sed id mauris sed augue ultricies
                luctus. Donec pulvinar a sapien quis posuere. Suspendisse non varius dui. Nullam eu posuere neque.
                Vivamus eget felis turpis. Curabitur tortor ante, vulputate vel quam ut, posuere mattis ipsum. Maecenas
                vel metus tortor. Quisque id turpis est. Donec est eros, laoreet vel metus id, tempor pulvinar eros. Nam
                sed semper eros. Aenean placerat tellus ex, ac ultricies dui ornare ac. Suspendisse eget semper risus.
                Nullam eleifend leo justo, eu rhoncus erat lacinia quis. Nam finibus nunc sit amet justo interdum
                dignissim.
            </p>
            <p>
                Donec iaculis purus leo. Aliquam pulvinar magna vitae dolor varius auctor. Sed dapibus convallis est,
                non pharetra felis eleifend nec. Donec erat ex, tempus in sem quis, imperdiet gravida justo. Morbi sem
                purus, efficitur eget massa ut, molestie placerat orci. Phasellus sollicitudin convallis augue, ut
                tincidunt nulla faucibus ut. Praesent ullamcorper erat sit amet nisi venenatis eleifend. Vestibulum
                vehicula tristique ipsum, vel placerat tortor maximus eu. Phasellus mauris purus, semper vulputate
                maximus sit amet, faucibus eget risus. Sed in imperdiet dui, vel suscipit nibh. Nunc ac lectus tempus,
                venenatis mauris non, ornare nunc. Cras at nibh nec sem vestibulum facilisis. Curabitur et elit
                hendrerit, ullamcorper nibh vitae, eleifend augue. Aliquam imperdiet eros quis pulvinar suscipit.
            </p>
            <p>
                In dapibus, est eu eleifend vehicula, purus arcu consequat nulla, accumsan viverra mi massa vel metus.
                Vestibulum ut nunc viverra, pellentesque urna et, consectetur metus. Quisque bibendum diam non eros
                porta, non volutpat leo commodo. Morbi odio nulla, tempus non lobortis ac, imperdiet vitae sem. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce ac sodales
                eros. In hac habitasse platea dictumst.
            </p>
        </vl-side-sheet>
    \`)`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(sideSheetArgs, ({
  enableSwipe,
  absolute,
  left,
  top,
  toggleText,
  tooltipText,
  right,
  customIcon,
  hideToggleButton,
  iconPlacement,
  open,
  shadow
}) => {
  const {
    toggleSideSheet,
    openSideSheet,
    closeSideSheet
  } = sideSheetToggleImplementation();
  return html\`
            <style>
                :root {
                    --vl-side-sheet-width-mobile: 100%;
                    --vl-side-sheet-width: 480px;
                }

                #vl-side-sheet-close-button {
                    position: fixed;
                    top: 1rem;
                    right: 3rem;
                }
            </style>
            <vl-button
                type="button"
                @click=\${() => {
    toggleSideSheet();
  }}
            >
                toggle()
            </vl-button>
            <vl-button
                type="button"
                @click=\${() => {
    openSideSheet();
  }}
            >
                open()
            </vl-button>
            <vl-button
                type="button"
                @click=\${() => {
    closeSideSheet();
  }}
            >
                close()
            </vl-button>
            <vl-side-sheet
                id="side-sheet-toggle"
                ?enable-swipe=\${enableSwipe}
                ?absolute=\${absolute}
                ?left=\${left}
                top=\${top}
                ?right=\${right}
                toggle-text=\${toggleText}
                tooltip-text=\${tooltipText}
                custom-icon=\${customIcon}
                icon-placement=\${iconPlacement}
                ?hide-toggle-button=\${hideToggleButton}
                ?open=\${open}
                shadow=\${shadow}
            >
                <vl-button
                    id="vl-side-sheet-close-button"
                    type="button"
                    tertiary
                    @click=\${() => {
    closeSideSheet();
  }}
                    icon="cross"
                    label="Sluit de side-sheet"
                    custom-css="button.tertiary { background: white }"
                >
                </vl-button>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum urna ante. Integer eu sem
                    mollis, ornare libero nec, pulvinar augue. Nunc ac rhoncus ipsum. Mauris vitae elementum erat. Donec
                    gravida hendrerit magna, quis feugiat felis sodales quis. Sed tempor ornare elit, non aliquam urna
                    maximus imperdiet. Suspendisse finibus ullamcorper dictum. Sed vehicula tortor quis dignissim
                    tincidunt. Maecenas turpis ante, blandit sed efficitur eu, varius vitae nibh. Vivamus porttitor mi
                    in massa elementum sollicitudin. Cras id porta nisi, vel pulvinar neque. Mauris sodales mi sem, sit
                    amet fringilla tellus ultrices et. Quisque sed interdum mauris. Suspendisse rutrum maximus ornare.
                    Morbi sed vestibulum magna, a tincidunt mi. Aliquam in imperdiet diam.
                </p>
                <p>
                    Nulla mattis eget mi at mattis. Donec ut nisi ipsum. Sed placerat, augue vel dapibus blandit, nulla
                    purus hendrerit orci, ut maximus ligula quam at sapien. Nunc efficitur augue est, ac laoreet libero
                    blandit in. Aliquam non sagittis libero. Fusce posuere magna venenatis, facilisis magna quis, dictum
                    risus. In nulla augue, efficitur congue porta sit amet, convallis eu justo. Etiam facilisis maximus
                    dolor, a scelerisque sapien fringilla non. Quisque vestibulum mauris erat, vel ultrices massa dictum
                    sit amet. Integer nec bibendum arcu, sit amet pretium turpis.
                </p>
                <p>
                    Vivamus ligula diam, lobortis eget ultricies vitae, varius id arcu. Sed id mauris sed augue
                    ultricies luctus. Donec pulvinar a sapien quis posuere. Suspendisse non varius dui. Nullam eu
                    posuere neque. Vivamus eget felis turpis. Curabitur tortor ante, vulputate vel quam ut, posuere
                    mattis ipsum. Maecenas vel metus tortor. Quisque id turpis est. Donec est eros, laoreet vel metus
                    id, tempor pulvinar eros. Nam sed semper eros. Aenean placerat tellus ex, ac ultricies dui ornare
                    ac. Suspendisse eget semper risus. Nullam eleifend leo justo, eu rhoncus erat lacinia quis. Nam
                    finibus nunc sit amet justo interdum dignissim.
                </p>
                <p>
                    Donec iaculis purus leo. Aliquam pulvinar magna vitae dolor varius auctor. Sed dapibus convallis
                    est, non pharetra felis eleifend nec. Donec erat ex, tempus in sem quis, imperdiet gravida justo.
                    Morbi sem purus, efficitur eget massa ut, molestie placerat orci. Phasellus sollicitudin convallis
                    augue, ut tincidunt nulla faucibus ut. Praesent ullamcorper erat sit amet nisi venenatis eleifend.
                    Vestibulum vehicula tristique ipsum, vel placerat tortor maximus eu. Phasellus mauris purus, semper
                    vulputate maximus sit amet, faucibus eget risus. Sed in imperdiet dui, vel suscipit nibh. Nunc ac
                    lectus tempus, venenatis mauris non, ornare nunc. Cras at nibh nec sem vestibulum facilisis.
                    Curabitur et elit hendrerit, ullamcorper nibh vitae, eleifend augue. Aliquam imperdiet eros quis
                    pulvinar suscipit.
                </p>
                <p>
                    In dapibus, est eu eleifend vehicula, purus arcu consequat nulla, accumsan viverra mi massa vel
                    metus. Vestibulum ut nunc viverra, pellentesque urna et, consectetur metus. Quisque bibendum diam
                    non eros porta, non volutpat leo commodo. Morbi odio nulla, tempus non lobortis ac, imperdiet vitae
                    sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    Fusce ac sodales eros. In hac habitasse platea dictumst.
                </p>
            </vl-side-sheet>
        \`;
})`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`story(sideSheetArgs, ({
  top
}) => html\`
        <vl-side-sheet open top=\${top}>
            <p>De padding-top van deze side-sheet kan aangepast worden via het <code>top</code>-attribuut.</p>
        </vl-side-sheet>
    \`)`,...l.parameters?.docs?.source}}};const L=["SideSheetDefault","SideSheetToggle","SideSheetTop"];export{o as SideSheetDefault,r as SideSheetToggle,l as SideSheetTop,L as __namedExportsOrder,O as default};
