"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[2095],{"../../libs/components/src/block/side-sheet/stories/vl-side-sheet.stories.ts":(e,i,t)=>{t.r(i),t.d(i,{SideSheetDefault:()=>p,SideSheetToggle:()=>h,__namedExportsOrder:()=>v,default:()=>m});var n=t("../../resources/utils-storybook/index.ts"),s=t("../../node_modules/lit-html/lit-html.js");t("../../libs/components/src/block/side-sheet/vl-side-sheet.component.ts");let a={...n.D8,absolute:!1,customIcon:"",enableSwipe:!1,hideToggleButton:!1,iconPlacement:"before",left:!1,right:!1,open:!1,toggleText:"",tooltipText:""},u={...n.RN,enableSwipe:{name:"enable-swipe",description:"Attribute wordt gebruikt om aan te duiden dat swipe functie toegelaten is.",table:{type:{summary:n.QE.BOOLEAN},defaultValue:{summary:a.enableSwipe}}},left:{name:"left",description:"Attribute om de side-sheet aan de linkerrand te positioneren.",table:{type:{summary:n.QE.BOOLEAN},defaultValue:{summary:a.left}}},right:{name:"right",description:"Attribute om de side-sheet aan de rechterrand te positioneren. Dit is de standaard instelling.",table:{type:{summary:n.QE.BOOLEAN},defaultValue:{summary:a.right}}},absolute:{name:"absolute",description:"Attribute wordt gebruikt om aan te duiden dat de side-sheet absoluut gepositioneerd wordt.",table:{type:{summary:n.QE.BOOLEAN},defaultValue:{summary:a.absolute}}},open:{name:"open",description:"Duidt aan dat de side-sheet open is.",table:{type:{summary:n.QE.BOOLEAN},defaultValue:{summary:a.open}}},toggleText:{name:"toggle-text",description:"Attribute wordt gebruikt om de toggle knop tekst te wijzigen.",table:{type:{summary:n.QE.STRING},defaultValue:{summary:a.toggleText}}},tooltipText:{name:"tooltip-text",description:"Attribute wordt gebruikt om de native tooltip te bepalen.",table:{type:{summary:n.QE.STRING},defaultValue:{summary:a.tooltipText}}},customIcon:{name:"custom-icon",description:"Dit vervangt zowel open & close icon door 1 custom icon. \n Standaard wordt afhankelijk van de positie van de side-sheet een pijltje getoond dat aanduidt of de side-sheet open of dicht is.",table:{type:{summary:n.QE.STRING},defaultValue:{summary:a.customIcon}}},iconPlacement:{name:"icon-placement",description:"Positie van icon bepalen. Standaard bevindt die zich voor de tekst.",control:{type:n.VH.SELECT},options:["before","after"],table:{type:{summary:(0,n.uf)(["before","after"])},defaultValue:{summary:a.iconPlacement}}},hideToggleButton:{name:"hide-toggle-button",description:"Toggle knop verbergen.",table:{type:{summary:n.QE.BOOLEAN},defaultValue:{summary:a.hideToggleButton}}}};t("../../node_modules/react/index.js");var o=t("../../node_modules/react/jsx-runtime.js"),r=t("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),l=t("../../node_modules/@storybook/blocks/dist/index.mjs");function d(e){let i=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",a:"a",ul:"ul",li:"li"},(0,r.RP)(),e.components),{FluxMetaData:t}=i;return t||function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("FluxMetaData",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.h1,{id:"side-sheet",children:"Side sheet"}),"\n",(0,o.jsx)(t,{id:"components-block-side-sheet"}),"\n",(0,o.jsxs)(i.p,{children:["De ",(0,o.jsx)(i.code,{children:"side-sheet"}),"-component heeft containers die aan de linker- of rechterrand van het scherm zijn verankerd. Deze kunnen\ngeopend of gesloten worden aan de hand van een knop."]}),"\n",(0,o.jsx)(i.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-js",children:"import { VlSideSheet } from '@domg-wc/components/block';\n"})}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-html",children:"<vl-side-sheet>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum urna ante.</p>\n    <p>Sed vehicula tortor quis dignissim tincidunt.</p>\n</vl-side-sheet>\n"})}),"\n",(0,o.jsx)(i.h2,{id:"default",children:"Default"}),"\n",(0,o.jsx)(l.Hl,{of:p}),"\n",(0,o.jsx)(i.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,o.jsx)(l.ov,{of:p}),"\n",(0,o.jsx)(i.h2,{id:"varianten",children:"Varianten"}),"\n",(0,o.jsx)(i.h3,{id:"custom-icon",children:"Custom icon"}),"\n",(0,o.jsxs)(i.p,{children:["Standaard is er een pijltje dat aanduidt of de ",(0,o.jsx)(i.code,{children:"side-sheet"})," open of gesloten is. Je kan dit vervangen door een custom\nicon in te stellen. ",(0,o.jsx)(i.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/atoms/vl-ui-icon/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Hier"})," vind je een\noverzicht van alle beschikbare icons."]}),"\n",(0,o.jsx)(i.p,{children:"Deze blijft dan dezelfde in de 2 richtingen."}),"\n",(0,o.jsx)(i.h3,{id:"breedte-zelf-instellen",children:"Breedte zelf instellen."}),"\n",(0,o.jsx)(i.p,{children:"Het is ook mogelijk de breedte zelf in te stellen."}),"\n",(0,o.jsxs)(i.p,{children:["Dan kan je voor mobile en/of desktop de width instellen door de respectievelijke css variabelen in te stellen. Dit\nstelt de ",(0,o.jsx)(i.code,{children:"width"})," in voor het component."]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["breekpunt voor desktop naar mobile is vanaf ",(0,o.jsx)(i.code,{children:"767px"})]}),"\n",(0,o.jsxs)(i.li,{children:["voor desktop gebruik je ",(0,o.jsx)(i.code,{children:"--vl-side-sheet-width"})]}),"\n",(0,o.jsxs)(i.li,{children:["voor mobile gebruik je ",(0,o.jsx)(i.code,{children:"--vl-side-sheet-width-mobile"})]}),"\n",(0,o.jsxs)(i.li,{children:["hier kan je ook gelijk welke andere waardes meegeven die geldig zijn voor ",(0,o.jsx)(i.code,{children:"width"})]}),"\n"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-css",children:":root {\n    --vl-side-sheet-width: 480px; /* voor desktop */\n    --vl-side-sheet-width-mobile: 100%; /* voor mobile */\n}\n"})}),"\n",(0,o.jsx)(i.h3,{id:"openen-en-sluiten-zonder-knop",children:"Openen en sluiten zonder knop"}),"\n",(0,o.jsxs)(i.p,{children:["Je kan de ",(0,o.jsx)(i.code,{children:"side-sheet"})," openen zonder de toggle knop;"]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["stel ",(0,o.jsx)(i.code,{children:"hide-toggle-button"})," in op ",(0,o.jsx)(i.code,{children:"true"})]}),"\n",(0,o.jsxs)(i.li,{children:["roep ",(0,o.jsx)(i.code,{children:"toggle()"})," aan op de ",(0,o.jsx)(i.code,{children:"side-sheet"}),"-instantie te wisselen tussen open en gesloten status"]}),"\n",(0,o.jsxs)(i.li,{children:["alternatief kan je ook uitdrukkelijk ",(0,o.jsx)(i.code,{children:"open()"})," en ",(0,o.jsx)(i.code,{children:"close()"})," aanroepen"]}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:"Hieronder volgt een voorbeeld met broncode:"}),"\n",(0,o.jsx)(i.h3,{id:"voorbeeld-van-buitenaf-openen--sluiten",children:"Voorbeeld van buitenaf openen & sluiten"}),"\n",(0,o.jsx)(l.Hl,{of:h}),"\n",(0,o.jsxs)("details",{children:[(0,o.jsx)("summary",{children:"voorbeeld code om side-sheet te openen en te sluiten van buitenaf"}),(0,o.jsx)(l.kL,{code:"export const sideSheetToggleImplementation = ()=>{\n    let sideSheet;\n    let listenerButton;\n    customElements.whenDefined('vl-side-sheet').then(()=>{\n        sideSheet = document.querySelector('#side-sheet-toggle');\n        listenerButton = document.querySelector('#vl-side-sheet-open-button-with-close-listener');\n    });\n    const toggleSideSheet = ()=>sideSheet?.toggle();\n    const openSideSheet = ()=>sideSheet?.open();\n    const closeSideSheet = ()=>sideSheet?.close();\n    return {\n        toggleSideSheet,\n        openSideSheet,\n        closeSideSheet\n    };\n};\nexport default sideSheetToggleImplementation;\n",language:"ts",dark:!0})]}),"\n",(0,o.jsx)(i.h2,{id:"referenties",children:"Referenties"}),"\n",(0,o.jsx)(i.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,o.jsxs)(i.p,{children:["Er is geen ",(0,o.jsx)(i.code,{children:"side-sheet"}),"-component bij Digitaal Vlaanderen."]}),"\n",(0,o.jsxs)(i.p,{children:["In de Vue Component library van Digitaal Vlaanderen is er echter wel een component die er dicht tegen aanleunt:\n",(0,o.jsx)(i.code,{children:"vl-side-bar"}),"-component (link ",(0,o.jsx)(i.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/vue-documentation/?path=/story/components-vl-sidebar--sidebar-collapsible",target:"_blank",rel:"nofollow noopener noreferrer",children:"side-bar-component"}),")."]}),"\n",(0,o.jsx)(i.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-side-sheet--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Side Sheet"})}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlSideSheet.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Side Sheet"})}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-side-sheet.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - Side Sheet"})})]})}let c=()=>{let e;return customElements.whenDefined("vl-side-sheet").then(()=>{e=document.querySelector("#side-sheet-toggle"),document.querySelector("#vl-side-sheet-open-button-with-close-listener")}),{toggleSideSheet:()=>e?.toggle(),openSideSheet:()=>e?.open(),closeSideSheet:()=>e?.close()}},m={id:"components-block-side-sheet",title:"Components - Block/side-sheet",tags:["autodocs"],args:a,argTypes:u,parameters:{docs:{page:function(e={}){let{wrapper:i}=Object.assign({},(0,r.RP)(),e.components);return i?(0,o.jsx)(i,Object.assign({},e,{children:(0,o.jsx)(d,e)})):d(e)}}},decorators:[e=>(0,s.qy)` <div style="height: 150px;">${e()}</div>`]},p=(0,n._7)(a,({enableSwipe:e,absolute:i,left:t,toggleText:n,tooltipText:a,right:u,customIcon:o,hideToggleButton:r,iconPlacement:l,open:d})=>(0,s.qy)`
        <vl-side-sheet
            ?enable-swipe=${e}
            ?absolute=${i}
            ?left=${t}
            ?right=${u}
            toggle-text=${n}
            tooltip-text=${a}
            custom-icon=${o}
            icon-placement=${l}
            ?hide-toggle-button=${r}
            ?open=${d}
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
    `);p.storyName="vl-side-sheet - default";let h=(0,n._7)(a,({enableSwipe:e,absolute:i,left:t,toggleText:n,tooltipText:a,right:u,customIcon:o,hideToggleButton:r,iconPlacement:l,open:d})=>{let{toggleSideSheet:m,openSideSheet:p,closeSideSheet:h}=c();return(0,s.qy)`
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
            <button
                is="vl-button"
                type="button"
                @click=${()=>{m()}}
            >
                toggle()
            </button>
            <button
                is="vl-button"
                type="button"
                @click=${()=>{p()}}
            >
                open()
            </button>
            <button
                is="vl-button"
                type="button"
                @click=${()=>{h()}}
            >
                close()
            </button>
            <vl-side-sheet
                id="side-sheet-toggle"
                ?enable-swipe=${e}
                ?absolute=${i}
                ?left=${t}
                ?right=${u}
                toggle-text=${n}
                tooltip-text=${a}
                custom-icon=${o}
                icon-placement=${l}
                ?hide-toggle-button=${r}
                ?open=${d}
            >
                <button
                    is="vl-button"
                    id="vl-side-sheet-close-button"
                    type="button"
                    tertiary
                    @click=${()=>{h()}}
                >
                    <span
                        is="vl-icon"
                        icon="cross"
                        class="vl-vi-cross vl-icon vl-vi vl-button__icon"
                        aria-hidden="true"
                    ></span>
                </button>

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
        `});h.storyName="vl-side-sheet - toggle",p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"story(sideSheetArgs, ({\n  enableSwipe,\n  absolute,\n  left,\n  toggleText,\n  tooltipText,\n  right,\n  customIcon,\n  hideToggleButton,\n  iconPlacement,\n  open\n}) => html`\n        <vl-side-sheet\n            ?enable-swipe=${enableSwipe}\n            ?absolute=${absolute}\n            ?left=${left}\n            ?right=${right}\n            toggle-text=${toggleText}\n            tooltip-text=${tooltipText}\n            custom-icon=${customIcon}\n            icon-placement=${iconPlacement}\n            ?hide-toggle-button=${hideToggleButton}\n            ?open=${open}\n        >\n            <p>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum urna ante. Integer eu sem\n                mollis, ornare libero nec, pulvinar augue. Nunc ac rhoncus ipsum. Mauris vitae elementum erat. Donec\n                gravida hendrerit magna, quis feugiat felis sodales quis. Sed tempor ornare elit, non aliquam urna\n                maximus imperdiet. Suspendisse finibus ullamcorper dictum. Sed vehicula tortor quis dignissim tincidunt.\n                Maecenas turpis ante, blandit sed efficitur eu, varius vitae nibh. Vivamus porttitor mi in massa\n                elementum sollicitudin. Cras id porta nisi, vel pulvinar neque. Mauris sodales mi sem, sit amet\n                fringilla tellus ultrices et. Quisque sed interdum mauris. Suspendisse rutrum maximus ornare. Morbi sed\n                vestibulum magna, a tincidunt mi. Aliquam in imperdiet diam.\n            </p>\n            <p>\n                Nulla mattis eget mi at mattis. Donec ut nisi ipsum. Sed placerat, augue vel dapibus blandit, nulla\n                purus hendrerit orci, ut maximus ligula quam at sapien. Nunc efficitur augue est, ac laoreet libero\n                blandit in. Aliquam non sagittis libero. Fusce posuere magna venenatis, facilisis magna quis, dictum\n                risus. In nulla augue, efficitur congue porta sit amet, convallis eu justo. Etiam facilisis maximus\n                dolor, a scelerisque sapien fringilla non. Quisque vestibulum mauris erat, vel ultrices massa dictum sit\n                amet. Integer nec bibendum arcu, sit amet pretium turpis.\n            </p>\n            <p>\n                Vivamus ligula diam, lobortis eget ultricies vitae, varius id arcu. Sed id mauris sed augue ultricies\n                luctus. Donec pulvinar a sapien quis posuere. Suspendisse non varius dui. Nullam eu posuere neque.\n                Vivamus eget felis turpis. Curabitur tortor ante, vulputate vel quam ut, posuere mattis ipsum. Maecenas\n                vel metus tortor. Quisque id turpis est. Donec est eros, laoreet vel metus id, tempor pulvinar eros. Nam\n                sed semper eros. Aenean placerat tellus ex, ac ultricies dui ornare ac. Suspendisse eget semper risus.\n                Nullam eleifend leo justo, eu rhoncus erat lacinia quis. Nam finibus nunc sit amet justo interdum\n                dignissim.\n            </p>\n            <p>\n                Donec iaculis purus leo. Aliquam pulvinar magna vitae dolor varius auctor. Sed dapibus convallis est,\n                non pharetra felis eleifend nec. Donec erat ex, tempus in sem quis, imperdiet gravida justo. Morbi sem\n                purus, efficitur eget massa ut, molestie placerat orci. Phasellus sollicitudin convallis augue, ut\n                tincidunt nulla faucibus ut. Praesent ullamcorper erat sit amet nisi venenatis eleifend. Vestibulum\n                vehicula tristique ipsum, vel placerat tortor maximus eu. Phasellus mauris purus, semper vulputate\n                maximus sit amet, faucibus eget risus. Sed in imperdiet dui, vel suscipit nibh. Nunc ac lectus tempus,\n                venenatis mauris non, ornare nunc. Cras at nibh nec sem vestibulum facilisis. Curabitur et elit\n                hendrerit, ullamcorper nibh vitae, eleifend augue. Aliquam imperdiet eros quis pulvinar suscipit.\n            </p>\n            <p>\n                In dapibus, est eu eleifend vehicula, purus arcu consequat nulla, accumsan viverra mi massa vel metus.\n                Vestibulum ut nunc viverra, pellentesque urna et, consectetur metus. Quisque bibendum diam non eros\n                porta, non volutpat leo commodo. Morbi odio nulla, tempus non lobortis ac, imperdiet vitae sem. Class\n                aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce ac sodales\n                eros. In hac habitasse platea dictumst.\n            </p>\n        </vl-side-sheet>\n    `)",...p.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:'story(sideSheetArgs, ({\n  enableSwipe,\n  absolute,\n  left,\n  toggleText,\n  tooltipText,\n  right,\n  customIcon,\n  hideToggleButton,\n  iconPlacement,\n  open\n}) => {\n  const {\n    toggleSideSheet,\n    openSideSheet,\n    closeSideSheet\n  } = sideSheetToggleImplementation();\n  return html`\n            <style>\n                :root {\n                    --vl-side-sheet-width-mobile: 100%;\n                    --vl-side-sheet-width: 480px;\n                }\n\n                #vl-side-sheet-close-button {\n                    position: fixed;\n                    top: 1rem;\n                    right: 3rem;\n                }\n            </style>\n            <button\n                is="vl-button"\n                type="button"\n                @click=${() => {\n    toggleSideSheet();\n  }}\n            >\n                toggle()\n            </button>\n            <button\n                is="vl-button"\n                type="button"\n                @click=${() => {\n    openSideSheet();\n  }}\n            >\n                open()\n            </button>\n            <button\n                is="vl-button"\n                type="button"\n                @click=${() => {\n    closeSideSheet();\n  }}\n            >\n                close()\n            </button>\n            <vl-side-sheet\n                id="side-sheet-toggle"\n                ?enable-swipe=${enableSwipe}\n                ?absolute=${absolute}\n                ?left=${left}\n                ?right=${right}\n                toggle-text=${toggleText}\n                tooltip-text=${tooltipText}\n                custom-icon=${customIcon}\n                icon-placement=${iconPlacement}\n                ?hide-toggle-button=${hideToggleButton}\n                ?open=${open}\n            >\n                <button\n                    is="vl-button"\n                    id="vl-side-sheet-close-button"\n                    type="button"\n                    tertiary\n                    @click=${() => {\n    closeSideSheet();\n  }}\n                >\n                    <span\n                        is="vl-icon"\n                        icon="cross"\n                        class="vl-vi-cross vl-icon vl-vi vl-button__icon"\n                        aria-hidden="true"\n                    ></span>\n                </button>\n\n                <p>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum urna ante. Integer eu sem\n                    mollis, ornare libero nec, pulvinar augue. Nunc ac rhoncus ipsum. Mauris vitae elementum erat. Donec\n                    gravida hendrerit magna, quis feugiat felis sodales quis. Sed tempor ornare elit, non aliquam urna\n                    maximus imperdiet. Suspendisse finibus ullamcorper dictum. Sed vehicula tortor quis dignissim\n                    tincidunt. Maecenas turpis ante, blandit sed efficitur eu, varius vitae nibh. Vivamus porttitor mi\n                    in massa elementum sollicitudin. Cras id porta nisi, vel pulvinar neque. Mauris sodales mi sem, sit\n                    amet fringilla tellus ultrices et. Quisque sed interdum mauris. Suspendisse rutrum maximus ornare.\n                    Morbi sed vestibulum magna, a tincidunt mi. Aliquam in imperdiet diam.\n                </p>\n                <p>\n                    Nulla mattis eget mi at mattis. Donec ut nisi ipsum. Sed placerat, augue vel dapibus blandit, nulla\n                    purus hendrerit orci, ut maximus ligula quam at sapien. Nunc efficitur augue est, ac laoreet libero\n                    blandit in. Aliquam non sagittis libero. Fusce posuere magna venenatis, facilisis magna quis, dictum\n                    risus. In nulla augue, efficitur congue porta sit amet, convallis eu justo. Etiam facilisis maximus\n                    dolor, a scelerisque sapien fringilla non. Quisque vestibulum mauris erat, vel ultrices massa dictum\n                    sit amet. Integer nec bibendum arcu, sit amet pretium turpis.\n                </p>\n                <p>\n                    Vivamus ligula diam, lobortis eget ultricies vitae, varius id arcu. Sed id mauris sed augue\n                    ultricies luctus. Donec pulvinar a sapien quis posuere. Suspendisse non varius dui. Nullam eu\n                    posuere neque. Vivamus eget felis turpis. Curabitur tortor ante, vulputate vel quam ut, posuere\n                    mattis ipsum. Maecenas vel metus tortor. Quisque id turpis est. Donec est eros, laoreet vel metus\n                    id, tempor pulvinar eros. Nam sed semper eros. Aenean placerat tellus ex, ac ultricies dui ornare\n                    ac. Suspendisse eget semper risus. Nullam eleifend leo justo, eu rhoncus erat lacinia quis. Nam\n                    finibus nunc sit amet justo interdum dignissim.\n                </p>\n                <p>\n                    Donec iaculis purus leo. Aliquam pulvinar magna vitae dolor varius auctor. Sed dapibus convallis\n                    est, non pharetra felis eleifend nec. Donec erat ex, tempus in sem quis, imperdiet gravida justo.\n                    Morbi sem purus, efficitur eget massa ut, molestie placerat orci. Phasellus sollicitudin convallis\n                    augue, ut tincidunt nulla faucibus ut. Praesent ullamcorper erat sit amet nisi venenatis eleifend.\n                    Vestibulum vehicula tristique ipsum, vel placerat tortor maximus eu. Phasellus mauris purus, semper\n                    vulputate maximus sit amet, faucibus eget risus. Sed in imperdiet dui, vel suscipit nibh. Nunc ac\n                    lectus tempus, venenatis mauris non, ornare nunc. Cras at nibh nec sem vestibulum facilisis.\n                    Curabitur et elit hendrerit, ullamcorper nibh vitae, eleifend augue. Aliquam imperdiet eros quis\n                    pulvinar suscipit.\n                </p>\n                <p>\n                    In dapibus, est eu eleifend vehicula, purus arcu consequat nulla, accumsan viverra mi massa vel\n                    metus. Vestibulum ut nunc viverra, pellentesque urna et, consectetur metus. Quisque bibendum diam\n                    non eros porta, non volutpat leo commodo. Morbi odio nulla, tempus non lobortis ac, imperdiet vitae\n                    sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.\n                    Fusce ac sodales eros. In hac habitasse platea dictumst.\n                </p>\n            </vl-side-sheet>\n        `;\n})',...h.parameters?.docs?.source}}};let v=["SideSheetDefault","SideSheetToggle"]}}]);