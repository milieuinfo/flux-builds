import{L as s,Q as y,P as k,H as w,I as N,u as x,j as e,C as b,bd as $,S as D,s as S,x as g}from"./iframe-Ds54rb_7.js";import"./preload-helper-D9Z9MdNV.js";const n={...N,absolute:!1,customIcon:"",enableSwipe:!1,hideToggleButton:!1,iconPlacement:"before",left:!1,right:!1,open:!1,toggleText:"",tooltipText:""},V={...w,enableSwipe:{name:"enable-swipe",description:"Attribute wordt gebruikt om aan te duiden dat swipe functie toegelaten is.",table:{type:{summary:s.BOOLEAN},defaultValue:{summary:String(n.enableSwipe)}}},left:{name:"left",description:"Attribute om de side-sheet aan de linkerrand te positioneren.",table:{type:{summary:s.BOOLEAN},defaultValue:{summary:String(n.left)}}},right:{name:"right",description:"Attribute om de side-sheet aan de rechterrand te positioneren. Dit is de standaard instelling.",table:{type:{summary:s.BOOLEAN},defaultValue:{summary:String(n.right)}}},absolute:{name:"absolute",description:"Attribute wordt gebruikt om aan te duiden dat de side-sheet absoluut gepositioneerd wordt.",table:{type:{summary:s.BOOLEAN},defaultValue:{summary:String(n.absolute)}}},open:{name:"open",description:"Duidt aan dat de side-sheet open is.",table:{type:{summary:s.BOOLEAN},defaultValue:{summary:String(n.open)}}},toggleText:{name:"toggle-text",description:"Attribute wordt gebruikt om de toggle knop tekst te wijzigen.",table:{type:{summary:s.STRING},defaultValue:{summary:n.toggleText}}},tooltipText:{name:"tooltip-text",description:"Attribute wordt gebruikt om de native tooltip te bepalen.",table:{type:{summary:s.STRING},defaultValue:{summary:n.tooltipText}}},customIcon:{name:"custom-icon",description:`Dit vervangt zowel open & close icon door 1 custom icon. 
 Standaard wordt afhankelijk van de positie van de side-sheet een pijltje getoond dat aanduidt of de side-sheet open of dicht is.`,table:{type:{summary:s.STRING},defaultValue:{summary:n.customIcon}}},iconPlacement:{name:"icon-placement",description:"Positie van icon bepalen. Standaard bevindt die zich voor de tekst.",control:{type:k.SELECT},options:["before","after"],table:{type:{summary:y(["before","after"])},defaultValue:{summary:n.iconPlacement}}},hideToggleButton:{name:"hide-toggle-button",description:"Toggle knop verbergen.",table:{type:{summary:s.BOOLEAN},defaultValue:{summary:String(n.hideToggleButton)}}}},T=`import { VlSideSheet } from '../vl-side-sheet.component';

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
`;function f(t){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...x(),...t.components},{FluxMetaData:a}=i;return a||I("FluxMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(i.h1,{id:"side-sheet",children:"Side sheet"}),`
`,e.jsx(a,{id:"components-block-side-sheet"}),`
`,e.jsxs(i.p,{children:["De ",e.jsx(i.code,{children:"side-sheet"}),`-component heeft containers die aan de linker- of rechterrand van het scherm zijn verankerd. Deze kunnen
geopend of gesloten worden aan de hand van een knop.`]}),`
`,e.jsx(i.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-js",children:`import { VlSideSheet } from '@domg-wc/components/block';
`})}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<vl-side-sheet>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum urna ante.</p>
    <p>Sed vehicula tortor quis dignissim tincidunt.</p>
</vl-side-sheet>
`})}),`
`,e.jsx(i.h2,{id:"default",children:"Default"}),`
`,e.jsx(b,{of:u}),`
`,e.jsx(i.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx($,{of:u}),`
`,e.jsx(i.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(i.h3,{id:"custom-icon",children:"Custom icon"}),`
`,e.jsxs(i.p,{children:["Standaard is er een pijltje dat aanduidt of de ",e.jsx(i.code,{children:"side-sheet"}),` open of gesloten is. Je kan dit vervangen door een custom
icon in te stellen. `,e.jsx(i.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/atoms/vl-ui-icon/",rel:"nofollow",children:"Hier"}),` vind je een
overzicht van alle beschikbare icons.`]}),`
`,e.jsx(i.p,{children:"Deze blijft dan dezelfde in de 2 richtingen."}),`
`,e.jsx(i.h3,{id:"breedte-zelf-instellen",children:"Breedte zelf instellen."}),`
`,e.jsx(i.p,{children:"Het is ook mogelijk de breedte zelf in te stellen."}),`
`,e.jsxs(i.p,{children:[`Dan kan je voor mobile en/of desktop de width instellen door de respectievelijke css variabelen in te stellen. Dit
stelt de `,e.jsx(i.code,{children:"width"})," in voor het component."]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["breekpunt voor desktop naar mobile is vanaf ",e.jsx(i.code,{children:"767px"})]}),`
`,e.jsxs(i.li,{children:["voor desktop gebruik je ",e.jsx(i.code,{children:"--vl-side-sheet-width"})]}),`
`,e.jsxs(i.li,{children:["voor mobile gebruik je ",e.jsx(i.code,{children:"--vl-side-sheet-width-mobile"})]}),`
`,e.jsxs(i.li,{children:["hier kan je ook gelijk welke andere waardes meegeven die geldig zijn voor ",e.jsx(i.code,{children:"width"})]}),`
`]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-css",children:`:root {
    --vl-side-sheet-width: 480px; /* voor desktop */
    --vl-side-sheet-width-mobile: 100%; /* voor mobile */
}
`})}),`
`,e.jsx(i.h3,{id:"openen-en-sluiten-zonder-knop",children:"Openen en sluiten zonder knop"}),`
`,e.jsxs(i.p,{children:["Je kan de ",e.jsx(i.code,{children:"side-sheet"})," openen zonder de toggle knop;"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["stel ",e.jsx(i.code,{children:"hide-toggle-button"})," in op ",e.jsx(i.code,{children:"true"})]}),`
`,e.jsxs(i.li,{children:["roep ",e.jsx(i.code,{children:"toggle()"})," aan op de ",e.jsx(i.code,{children:"side-sheet"}),"-instantie te wisselen tussen open en gesloten status"]}),`
`,e.jsxs(i.li,{children:["alternatief kan je ook uitdrukkelijk ",e.jsx(i.code,{children:"open()"})," en ",e.jsx(i.code,{children:"close()"})," aanroepen"]}),`
`]}),`
`,e.jsx(i.p,{children:"Hieronder volgt een voorbeeld met broncode:"}),`
`,e.jsx(i.h3,{id:"voorbeeld-van-buitenaf-openen--sluiten",children:"Voorbeeld van buitenaf openen & sluiten"}),`
`,e.jsx(b,{of:l}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"voorbeeld code om side-sheet te openen en te sluiten van buitenaf"}),e.jsx(D,{code:T,language:"ts",dark:!0})]}),`
`,e.jsx(i.h2,{id:"custom-css-properties",children:"Custom CSS Properties"}),`
`,e.jsxs("table",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Naam"}),e.jsx("td",{children:"Beschrijving"}),e.jsx("td",{children:"Default"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(i.code,{children:"--vl-side-sheet-width"})}),e.jsx("td",{children:"breedte van het element"}),e.jsx("td",{children:"33%"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(i.code,{children:"--vl-side-sheet-width-mobile"})}),e.jsx("td",{children:"breedte van het element bij scherm kleiner dan 767px"}),e.jsx("td",{children:"calc(100vw - 56px)"})]})]}),`
`,e.jsx(i.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(i.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsxs(i.p,{children:["Er is geen ",e.jsx(i.code,{children:"side-sheet"}),"-component bij Digitaal Vlaanderen."]}),`
`,e.jsxs(i.p,{children:[`In de Vue Component library van Digitaal Vlaanderen is er echter wel een component die er dicht tegen aanleunt:
`,e.jsx(i.code,{children:"vl-side-bar"}),"-component (link ",e.jsx(i.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/vue-documentation/?path=/story/components-vl-sidebar--sidebar-collapsible",rel:"nofollow",children:"side-bar-component"}),")."]}),`
`,e.jsx(i.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-side-sheet--default",rel:"nofollow",children:"Legacy Storybook - Side Sheet"})}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlSideSheet.html",rel:"nofollow",children:"Legacy Documentatie - Side Sheet"})}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-side-sheet.html",rel:"nofollow",children:"Legacy Demo - Side Sheet"})})]})}function A(t={}){const{wrapper:i}={...x(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(f,{...t})}):f(t)}function I(t,i){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const M=()=>{let t;return customElements.whenDefined("vl-side-sheet").then(()=>{t=document.querySelector("#side-sheet-toggle"),document.querySelector("#vl-side-sheet-open-button-with-close-listener")}),{toggleSideSheet:()=>t?.toggle(),openSideSheet:()=>t?.open(),closeSideSheet:()=>t?.close()}},E={id:"components-block-side-sheet",title:"Components - Block/side-sheet",tags:["autodocs"],args:n,argTypes:V,parameters:{docs:{page:A}},decorators:[t=>g` <div style="height: 150px;">${t()}</div>`]},u=S(n,({enableSwipe:t,absolute:i,left:a,toggleText:r,tooltipText:o,right:d,customIcon:c,hideToggleButton:m,iconPlacement:p,open:h})=>g`
        <vl-side-sheet
            ?enable-swipe=${t}
            ?absolute=${i}
            ?left=${a}
            ?right=${d}
            toggle-text=${r}
            tooltip-text=${o}
            custom-icon=${c}
            icon-placement=${p}
            ?hide-toggle-button=${m}
            ?open=${h}
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
    `);u.storyName="vl-side-sheet - default";const l=S(n,({enableSwipe:t,absolute:i,left:a,toggleText:r,tooltipText:o,right:d,customIcon:c,hideToggleButton:m,iconPlacement:p,open:h})=>{const{toggleSideSheet:j,openSideSheet:q,closeSideSheet:v}=M();return g`
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
                @click=${()=>{j()}}
            >
                toggle()
            </vl-button>
            <vl-button
                type="button"
                @click=${()=>{q()}}
            >
                open()
            </vl-button>
            <vl-button
                type="button"
                @click=${()=>{v()}}
            >
                close()
            </vl-button>
            <vl-side-sheet
                id="side-sheet-toggle"
                ?enable-swipe=${t}
                ?absolute=${i}
                ?left=${a}
                ?right=${d}
                toggle-text=${r}
                tooltip-text=${o}
                custom-icon=${c}
                icon-placement=${p}
                ?hide-toggle-button=${m}
                ?open=${h}
            >
                <vl-button
                    id="vl-side-sheet-close-button"
                    type="button"
                    tertiary
                    @click=${()=>{v()}}
                    icon="cross"
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
        `});l.storyName="vl-side-sheet - toggle";u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`story(sideSheetArgs, ({
  enableSwipe,
  absolute,
  left,
  toggleText,
  tooltipText,
  right,
  customIcon,
  hideToggleButton,
  iconPlacement,
  open
}) => html\`
        <vl-side-sheet
            ?enable-swipe=\${enableSwipe}
            ?absolute=\${absolute}
            ?left=\${left}
            ?right=\${right}
            toggle-text=\${toggleText}
            tooltip-text=\${tooltipText}
            custom-icon=\${customIcon}
            icon-placement=\${iconPlacement}
            ?hide-toggle-button=\${hideToggleButton}
            ?open=\${open}
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
    \`)`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`story(sideSheetArgs, ({
  enableSwipe,
  absolute,
  left,
  toggleText,
  tooltipText,
  right,
  customIcon,
  hideToggleButton,
  iconPlacement,
  open
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
                ?right=\${right}
                toggle-text=\${toggleText}
                tooltip-text=\${tooltipText}
                custom-icon=\${customIcon}
                icon-placement=\${iconPlacement}
                ?hide-toggle-button=\${hideToggleButton}
                ?open=\${open}
            >
                <vl-button
                    id="vl-side-sheet-close-button"
                    type="button"
                    tertiary
                    @click=\${() => {
    closeSideSheet();
  }}
                    icon="cross"
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
})`,...l.parameters?.docs?.source}}};const L=["SideSheetDefault","SideSheetToggle"];export{u as SideSheetDefault,l as SideSheetToggle,L as __namedExportsOrder,E as default};
