(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[2566],{"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(e,t,i)=>{"use strict";i.d(t,{NF:()=>a,Zo:()=>l,ah:()=>o,pC:()=>n});var s=i("./node_modules/react/index.js");let n=s.createContext({});function a(e){return function(t){let i=o(t.components);return s.createElement(e,{...t,allComponents:i})}}function o(e){let t=s.useContext(n);return s.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let r={};function l({components:e,children:t,disableParentContext:i}){let a;return a=i?"function"==typeof e?e({}):e||r:o(e),s.createElement(n.Provider,{value:a},t)}},"./libs/components/src/side-sheet/stories/vl-side-sheet.stories.ts":(e,t,i)=>{"use strict";i.r(t),i.d(t,{SideSheetDefault:()=>p,SideSheetToggle:()=>h,__namedExportsOrder:()=>v,default:()=>m});var s=i("./libs/common/storybook/src/index.ts"),n=i("./node_modules/lit-html/lit-html.js");i("./libs/components/src/side-sheet/vl-side-sheet.component.ts");let a={...s._O,absolute:!1,customIcon:"",enableSwipe:!1,hideToggleButton:!1,iconPlacement:"before",left:!1,right:!1,toggleText:"",tooltipText:""},o={...(0,s.Wp)(),enableSwipe:{name:"data-vl-enable-swipe",description:"Attribute wordt gebruikt om aan te duiden dat swipe functie toegelaten is.",table:{type:{summary:s.vK.BOOLEAN},defaultValue:{summary:a.enableSwipe}}},left:{name:"data-vl-left",description:"Attribute om de side-sheet aan de linkerrand te positioneren.",table:{type:{summary:s.vK.BOOLEAN},defaultValue:{summary:a.left}}},right:{name:"data-vl-right",description:"Attribute om de side-sheet aan de rechterrand te positioneren. Dit is de standaard instelling.",table:{type:{summary:s.vK.BOOLEAN},defaultValue:{summary:a.right}}},absolute:{name:"data-vl-absolute",description:"Attribute wordt gebruikt om aan te duiden dat de side-sheet absoluut gepositioneerd wordt.",table:{type:{summary:s.vK.BOOLEAN},defaultValue:{summary:a.absolute}}},toggleText:{name:"data-vl-toggle-text",description:"Attribute wordt gebruikt om de toggle knop tekst te wijzigen.",table:{type:{summary:s.vK.STRING},defaultValue:{summary:a.toggleText}}},tooltipText:{name:"data-vl-tooltip-text",description:"Attribute wordt gebruikt om de native tooltip te bepalen.",table:{type:{summary:s.vK.STRING},defaultValue:{summary:a.tooltipText}}},customIcon:{name:"data-vl-custom-icon",description:"Dit vervangt zowel open & close icon door 1 custom icon. \n Standaard wordt afhankelijk van de positie van de side-sheet een pijltje getoond dat aanduidt of de side-sheet open of dicht is.",table:{type:{summary:s.vK.STRING},defaultValue:{summary:a.customIcon}}},iconPlacement:{name:"data-vl-icon-placement",description:"Positie van icon bepalen. Standaard bevindt die zich voor de tekst.",control:{type:"select",options:["before","after"]},table:{type:{summary:s.vK.STRING},defaultValue:{summary:a.iconPlacement}}},hideToggleButton:{name:"data-vl-hide-toggle-button",description:"Toggle knop verbergen.",table:{type:{summary:s.vK.BOOLEAN},defaultValue:{summary:a.hideToggleButton}}}};i("./node_modules/react/index.js");var r=i("./node_modules/react/jsx-runtime.js"),l=i("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),u=i("./node_modules/@storybook/blocks/dist/index.mjs");function d(e){let t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",a:"a",ul:"ul",li:"li"},(0,l.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"side-sheet",children:"Side sheet"}),"\n",(0,r.jsxs)(t.p,{children:["De ",(0,r.jsx)(t.code,{children:"side-sheet"}),"-component heeft containers die aan de linker- of rechterrand van het scherm zijn verankerd. Deze kunnen\ngeopend of gesloten worden aan de hand van een knop."]}),"\n",(0,r.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"import { VlSideSheet } from '@domg-wc/components';\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:"<vl-side-sheet>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum urna ante.</p>\n    <p>Sed vehicula tortor quis dignissim tincidunt.</p>\n</vl-side-sheet>\n"})}),"\n",(0,r.jsx)(t.h2,{id:"default",children:"Default"}),"\n",(0,r.jsx)(u.Xz,{of:p}),"\n",(0,r.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,r.jsx)(u.Ed,{of:p}),"\n",(0,r.jsx)(t.h2,{id:"varianten",children:"Varianten"}),"\n",(0,r.jsx)(t.h3,{id:"custom-icon",children:"Custom icon"}),"\n",(0,r.jsxs)(t.p,{children:["Standaard is er een pijltje dat aanduidt of de ",(0,r.jsx)(t.code,{children:"side-sheet"})," open of gesloten is. Je kan dit vervangen door een custom\nicon in te stellen. ",(0,r.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/atoms/vl-ui-icon/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Hier"})," vind je een\noverzicht van alle beschikbare icons."]}),"\n",(0,r.jsx)(t.p,{children:"Deze blijft dan dezelfde in de 2 richtingen."}),"\n",(0,r.jsx)(t.h3,{id:"breedte-zelf-instellen",children:"Breedte zelf instellen."}),"\n",(0,r.jsx)(t.p,{children:"Het is ook mogelijk de breedte zelf in te stellen."}),"\n",(0,r.jsxs)(t.p,{children:["Dan kan je voor mobile en/of desktop de width instellen door de respectievelijke css variabelen in te stellen. Dit\nstelt de ",(0,r.jsx)(t.code,{children:"width"})," in voor het component."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["breekpunt voor desktop naar mobile is vanaf ",(0,r.jsx)(t.code,{children:"767px"})]}),"\n",(0,r.jsxs)(t.li,{children:["voor desktop gebruik je ",(0,r.jsx)(t.code,{children:"--vl-side-sheet-width"})]}),"\n",(0,r.jsxs)(t.li,{children:["voor mobile gebruik je ",(0,r.jsx)(t.code,{children:"--vl-side-sheet-width-mobile"})]}),"\n",(0,r.jsxs)(t.li,{children:["hier kan je ook gelijk welke andere waardes meegeven die geldig zijn voor ",(0,r.jsx)(t.code,{children:"width"})]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-css",children:":root {\n    --vl-side-sheet-width: 480px; /* voor desktop */\n    --vl-side-sheet-width-mobile: 100%; /* voor mobile */\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"openen-en-sluiten-zonder-knop",children:"Openen en sluiten zonder knop"}),"\n",(0,r.jsxs)(t.p,{children:["Je kan de ",(0,r.jsx)(t.code,{children:"side-sheet"})," openen zonder de toggle knop;"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["stel ",(0,r.jsx)(t.code,{children:"hide-toggle-button"})," in op ",(0,r.jsx)(t.code,{children:"true"})]}),"\n",(0,r.jsxs)(t.li,{children:["roep ",(0,r.jsx)(t.code,{children:"toggle()"})," aan op de ",(0,r.jsx)(t.code,{children:"side-sheet"}),"-instantie te wisselen tussen open en gesloten status"]}),"\n",(0,r.jsxs)(t.li,{children:["alternatief kan je ook uitdrukkelijk ",(0,r.jsx)(t.code,{children:"open()"})," en ",(0,r.jsx)(t.code,{children:"close()"})," aanroepen"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Hieronder volgt een voorbeeld met broncode:"}),"\n",(0,r.jsx)(t.h3,{id:"voorbeeld-van-buitenaf-openen--sluiten",children:"Voorbeeld van buitenaf openen & sluiten"}),"\n",(0,r.jsx)(u.Xz,{of:h}),"\n",(0,r.jsxs)("details",{children:[(0,r.jsx)("summary",{children:"voorbeeld code om side-sheet te openen en te sluiten van buitenaf"}),(0,r.jsx)(u.Hw,{code:"export const sideSheetToggleImplementation = ()=>{\n    let sideSheet;\n    let listenerButton;\n    customElements.whenDefined('vl-side-sheet').then(()=>{\n        sideSheet = document.querySelector('#side-sheet-toggle');\n        listenerButton = document.querySelector('#vl-side-sheet-open-button-with-close-listener');\n    });\n    const toggleSideSheet = ()=>sideSheet?.toggle();\n    const openSideSheet = ()=>sideSheet?.open();\n    const closeSideSheet = ()=>sideSheet?.close();\n    return {\n        toggleSideSheet,\n        openSideSheet,\n        closeSideSheet\n    };\n};\nexport default sideSheetToggleImplementation;\n",language:"ts",dark:!0})]}),"\n",(0,r.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,r.jsx)(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,r.jsxs)(t.p,{children:["Er is geen ",(0,r.jsx)(t.code,{children:"side-sheet"}),"-component bij Digitaal Vlaanderen."]}),"\n",(0,r.jsxs)(t.p,{children:["In de Vue Component library van Digitaal Vlaanderen is er echter wel een component die er dicht tegen aanleunt:\n",(0,r.jsx)(t.code,{children:"vl-side-bar"}),"-component (link ",(0,r.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/vue-documentation/?path=/story/components-vl-sidebar--sidebar-collapsible",target:"_blank",rel:"nofollow noopener noreferrer",children:"side-bar-component"}),")."]}),"\n",(0,r.jsx)(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-side-sheet--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Side Sheet"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlSideSheet.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Side Sheet"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-side-sheet.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - Side Sheet"})})]})}let c=()=>{let e;return customElements.whenDefined("vl-side-sheet").then(()=>{e=document.querySelector("#side-sheet-toggle"),document.querySelector("#vl-side-sheet-open-button-with-close-listener")}),{toggleSideSheet:()=>e?.toggle(),openSideSheet:()=>e?.open(),closeSideSheet:()=>e?.close()}},m={title:"Components/side-sheet",tags:["autodocs"],args:a,argTypes:o,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}}},decorators:[e=>(0,n.dy)` <div style="height: 150px;">${e()}</div>`]},p=(0,s.yg)(a,({enableSwipe:e,absolute:t,left:i,toggleText:s,tooltipText:a,right:o,customIcon:r,hideToggleButton:l,iconPlacement:u})=>(0,n.dy)`
        <vl-side-sheet
            ?data-vl-enable-swipe=${e}
            ?data-vl-absolute=${t}
            ?data-vl-left=${i}
            ?data-vl-right=${o}
            data-vl-toggle-text=${s}
            data-vl-tooltip-text=${a}
            data-vl-custom-icon=${r}
            data-vl-icon-placement=${u}
            ?data-vl-hide-toggle-button=${l}
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
    `);p.storyName="vl-side-sheet - default";let h=(0,s.yg)(a,({enableSwipe:e,absolute:t,left:i,toggleText:s,tooltipText:a,right:o,customIcon:r,hideToggleButton:l,iconPlacement:u})=>{let{toggleSideSheet:d,openSideSheet:m,closeSideSheet:p}=c();return(0,n.dy)`
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
                @click=${()=>{d()}}
            >
                toggle()
            </button>
            <button
                is="vl-button"
                type="button"
                @click=${()=>{m()}}
            >
                open()
            </button>
            <button
                is="vl-button"
                type="button"
                @click=${()=>{p()}}
            >
                close()
            </button>
            <vl-side-sheet
                id="side-sheet-toggle"
                ?data-vl-enable-swipe=${e}
                ?data-vl-absolute=${t}
                ?data-vl-left=${i}
                ?data-vl-right=${o}
                data-vl-toggle-text=${s}
                data-vl-tooltip-text=${a}
                data-vl-custom-icon=${r}
                data-vl-icon-placement=${u}
                ?data-vl-hide-toggle-button=${l}
            >
                <button
                    is="vl-button"
                    id="vl-side-sheet-close-button"
                    type="button"
                    data-vl-tertiary
                    @click=${()=>{p()}}
                >
                    <span
                        is="vl-icon"
                        data-vl-icon="cross"
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
        `});h.storyName="vl-side-sheet - toggle",p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"story(sideSheetArgs, ({\n  enableSwipe,\n  absolute,\n  left,\n  toggleText,\n  tooltipText,\n  right,\n  customIcon,\n  hideToggleButton,\n  iconPlacement\n}) => html`\n        <vl-side-sheet\n            ?data-vl-enable-swipe=${enableSwipe}\n            ?data-vl-absolute=${absolute}\n            ?data-vl-left=${left}\n            ?data-vl-right=${right}\n            data-vl-toggle-text=${toggleText}\n            data-vl-tooltip-text=${tooltipText}\n            data-vl-custom-icon=${customIcon}\n            data-vl-icon-placement=${iconPlacement}\n            ?data-vl-hide-toggle-button=${hideToggleButton}\n        >\n            <p>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum urna ante. Integer eu sem\n                mollis, ornare libero nec, pulvinar augue. Nunc ac rhoncus ipsum. Mauris vitae elementum erat. Donec\n                gravida hendrerit magna, quis feugiat felis sodales quis. Sed tempor ornare elit, non aliquam urna\n                maximus imperdiet. Suspendisse finibus ullamcorper dictum. Sed vehicula tortor quis dignissim tincidunt.\n                Maecenas turpis ante, blandit sed efficitur eu, varius vitae nibh. Vivamus porttitor mi in massa\n                elementum sollicitudin. Cras id porta nisi, vel pulvinar neque. Mauris sodales mi sem, sit amet\n                fringilla tellus ultrices et. Quisque sed interdum mauris. Suspendisse rutrum maximus ornare. Morbi sed\n                vestibulum magna, a tincidunt mi. Aliquam in imperdiet diam.\n            </p>\n            <p>\n                Nulla mattis eget mi at mattis. Donec ut nisi ipsum. Sed placerat, augue vel dapibus blandit, nulla\n                purus hendrerit orci, ut maximus ligula quam at sapien. Nunc efficitur augue est, ac laoreet libero\n                blandit in. Aliquam non sagittis libero. Fusce posuere magna venenatis, facilisis magna quis, dictum\n                risus. In nulla augue, efficitur congue porta sit amet, convallis eu justo. Etiam facilisis maximus\n                dolor, a scelerisque sapien fringilla non. Quisque vestibulum mauris erat, vel ultrices massa dictum sit\n                amet. Integer nec bibendum arcu, sit amet pretium turpis.\n            </p>\n            <p>\n                Vivamus ligula diam, lobortis eget ultricies vitae, varius id arcu. Sed id mauris sed augue ultricies\n                luctus. Donec pulvinar a sapien quis posuere. Suspendisse non varius dui. Nullam eu posuere neque.\n                Vivamus eget felis turpis. Curabitur tortor ante, vulputate vel quam ut, posuere mattis ipsum. Maecenas\n                vel metus tortor. Quisque id turpis est. Donec est eros, laoreet vel metus id, tempor pulvinar eros. Nam\n                sed semper eros. Aenean placerat tellus ex, ac ultricies dui ornare ac. Suspendisse eget semper risus.\n                Nullam eleifend leo justo, eu rhoncus erat lacinia quis. Nam finibus nunc sit amet justo interdum\n                dignissim.\n            </p>\n            <p>\n                Donec iaculis purus leo. Aliquam pulvinar magna vitae dolor varius auctor. Sed dapibus convallis est,\n                non pharetra felis eleifend nec. Donec erat ex, tempus in sem quis, imperdiet gravida justo. Morbi sem\n                purus, efficitur eget massa ut, molestie placerat orci. Phasellus sollicitudin convallis augue, ut\n                tincidunt nulla faucibus ut. Praesent ullamcorper erat sit amet nisi venenatis eleifend. Vestibulum\n                vehicula tristique ipsum, vel placerat tortor maximus eu. Phasellus mauris purus, semper vulputate\n                maximus sit amet, faucibus eget risus. Sed in imperdiet dui, vel suscipit nibh. Nunc ac lectus tempus,\n                venenatis mauris non, ornare nunc. Cras at nibh nec sem vestibulum facilisis. Curabitur et elit\n                hendrerit, ullamcorper nibh vitae, eleifend augue. Aliquam imperdiet eros quis pulvinar suscipit.\n            </p>\n            <p>\n                In dapibus, est eu eleifend vehicula, purus arcu consequat nulla, accumsan viverra mi massa vel metus.\n                Vestibulum ut nunc viverra, pellentesque urna et, consectetur metus. Quisque bibendum diam non eros\n                porta, non volutpat leo commodo. Morbi odio nulla, tempus non lobortis ac, imperdiet vitae sem. Class\n                aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce ac sodales\n                eros. In hac habitasse platea dictumst.\n            </p>\n        </vl-side-sheet>\n    `)",...p.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:'story(sideSheetArgs, ({\n  enableSwipe,\n  absolute,\n  left,\n  toggleText,\n  tooltipText,\n  right,\n  customIcon,\n  hideToggleButton,\n  iconPlacement\n}) => {\n  const {\n    toggleSideSheet,\n    openSideSheet,\n    closeSideSheet\n  } = sideSheetToggleImplementation();\n  return html`\n            <style>\n                :root {\n                    --vl-side-sheet-width-mobile: 100%;\n                    --vl-side-sheet-width: 480px;\n                }\n\n                #vl-side-sheet-close-button {\n                    position: fixed;\n                    top: 1rem;\n                    right: 3rem;\n                }\n            </style>\n            <button\n                is="vl-button"\n                type="button"\n                @click=${() => {\n    toggleSideSheet();\n  }}\n            >\n                toggle()\n            </button>\n            <button\n                is="vl-button"\n                type="button"\n                @click=${() => {\n    openSideSheet();\n  }}\n            >\n                open()\n            </button>\n            <button\n                is="vl-button"\n                type="button"\n                @click=${() => {\n    closeSideSheet();\n  }}\n            >\n                close()\n            </button>\n            <vl-side-sheet\n                id="side-sheet-toggle"\n                ?data-vl-enable-swipe=${enableSwipe}\n                ?data-vl-absolute=${absolute}\n                ?data-vl-left=${left}\n                ?data-vl-right=${right}\n                data-vl-toggle-text=${toggleText}\n                data-vl-tooltip-text=${tooltipText}\n                data-vl-custom-icon=${customIcon}\n                data-vl-icon-placement=${iconPlacement}\n                ?data-vl-hide-toggle-button=${hideToggleButton}\n            >\n                <button\n                    is="vl-button"\n                    id="vl-side-sheet-close-button"\n                    type="button"\n                    data-vl-tertiary\n                    @click=${() => {\n    closeSideSheet();\n  }}\n                >\n                    <span\n                        is="vl-icon"\n                        data-vl-icon="cross"\n                        class="vl-vi-cross vl-icon vl-vi vl-button__icon"\n                        aria-hidden="true"\n                    ></span>\n                </button>\n\n                <p>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum urna ante. Integer eu sem\n                    mollis, ornare libero nec, pulvinar augue. Nunc ac rhoncus ipsum. Mauris vitae elementum erat. Donec\n                    gravida hendrerit magna, quis feugiat felis sodales quis. Sed tempor ornare elit, non aliquam urna\n                    maximus imperdiet. Suspendisse finibus ullamcorper dictum. Sed vehicula tortor quis dignissim\n                    tincidunt. Maecenas turpis ante, blandit sed efficitur eu, varius vitae nibh. Vivamus porttitor mi\n                    in massa elementum sollicitudin. Cras id porta nisi, vel pulvinar neque. Mauris sodales mi sem, sit\n                    amet fringilla tellus ultrices et. Quisque sed interdum mauris. Suspendisse rutrum maximus ornare.\n                    Morbi sed vestibulum magna, a tincidunt mi. Aliquam in imperdiet diam.\n                </p>\n                <p>\n                    Nulla mattis eget mi at mattis. Donec ut nisi ipsum. Sed placerat, augue vel dapibus blandit, nulla\n                    purus hendrerit orci, ut maximus ligula quam at sapien. Nunc efficitur augue est, ac laoreet libero\n                    blandit in. Aliquam non sagittis libero. Fusce posuere magna venenatis, facilisis magna quis, dictum\n                    risus. In nulla augue, efficitur congue porta sit amet, convallis eu justo. Etiam facilisis maximus\n                    dolor, a scelerisque sapien fringilla non. Quisque vestibulum mauris erat, vel ultrices massa dictum\n                    sit amet. Integer nec bibendum arcu, sit amet pretium turpis.\n                </p>\n                <p>\n                    Vivamus ligula diam, lobortis eget ultricies vitae, varius id arcu. Sed id mauris sed augue\n                    ultricies luctus. Donec pulvinar a sapien quis posuere. Suspendisse non varius dui. Nullam eu\n                    posuere neque. Vivamus eget felis turpis. Curabitur tortor ante, vulputate vel quam ut, posuere\n                    mattis ipsum. Maecenas vel metus tortor. Quisque id turpis est. Donec est eros, laoreet vel metus\n                    id, tempor pulvinar eros. Nam sed semper eros. Aenean placerat tellus ex, ac ultricies dui ornare\n                    ac. Suspendisse eget semper risus. Nullam eleifend leo justo, eu rhoncus erat lacinia quis. Nam\n                    finibus nunc sit amet justo interdum dignissim.\n                </p>\n                <p>\n                    Donec iaculis purus leo. Aliquam pulvinar magna vitae dolor varius auctor. Sed dapibus convallis\n                    est, non pharetra felis eleifend nec. Donec erat ex, tempus in sem quis, imperdiet gravida justo.\n                    Morbi sem purus, efficitur eget massa ut, molestie placerat orci. Phasellus sollicitudin convallis\n                    augue, ut tincidunt nulla faucibus ut. Praesent ullamcorper erat sit amet nisi venenatis eleifend.\n                    Vestibulum vehicula tristique ipsum, vel placerat tortor maximus eu. Phasellus mauris purus, semper\n                    vulputate maximus sit amet, faucibus eget risus. Sed in imperdiet dui, vel suscipit nibh. Nunc ac\n                    lectus tempus, venenatis mauris non, ornare nunc. Cras at nibh nec sem vestibulum facilisis.\n                    Curabitur et elit hendrerit, ullamcorper nibh vitae, eleifend augue. Aliquam imperdiet eros quis\n                    pulvinar suscipit.\n                </p>\n                <p>\n                    In dapibus, est eu eleifend vehicula, purus arcu consequat nulla, accumsan viverra mi massa vel\n                    metus. Vestibulum ut nunc viverra, pellentesque urna et, consectetur metus. Quisque bibendum diam\n                    non eros porta, non volutpat leo commodo. Morbi odio nulla, tempus non lobortis ac, imperdiet vitae\n                    sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.\n                    Fusce ac sodales eros. In hac habitasse platea dictumst.\n                </p>\n            </vl-side-sheet>\n        `;\n})',...h.parameters?.docs?.source}}};let v=["SideSheetDefault","SideSheetToggle"]},"./node_modules/lit-html/directive.js":(e,t,i)=>{"use strict";i.d(t,{XM:()=>n,Xe:()=>a,pX:()=>s});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},n=e=>function(){for(var t=arguments.length,i=Array(t),s=0;s<t;s++)i[s]=arguments[s];return{_$litDirective$:e,values:i}};class a{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},"./node_modules/lit/decorators.js":(e,t,i)=>{"use strict";i.d(t,{Mo:()=>s,Cb:()=>u});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},n=i("./node_modules/lit/node_modules/@lit/reactive-element/reactive-element.js");function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,s)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach(function(t){!function(e,t,i){(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var s=i.call(e,t||"default");if("object"!=typeof s)return s;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i}(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var r={attribute:!0,type:String,converter:n.Ts,reflect:!1,hasChanged:n.Qu},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments.length>1?arguments[1]:void 0,i=arguments.length>2?arguments[2]:void 0,{kind:s,metadata:n}=i,a=globalThis.litPropertyMetadata.get(n);if(void 0===a&&globalThis.litPropertyMetadata.set(n,a=new Map),a.set(i.name,e),"accessor"===s){var{name:o}=i;return{set(i){var s=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,s,e)},init(t){return void 0!==t&&this.C(o,void 0,e),t}}}if("setter"===s){var{name:l}=i;return function(i){var s=this[l];t.call(this,i),this.requestUpdate(l,s,e)}}throw Error("Unsupported decorator location: "+s)};function u(e){return(t,i)=>"object"==typeof i?l(e,t,i):((e,t,i)=>{var s=t.hasOwnProperty(i);return t.constructor.createProperty(i,s?o(o({},e),{},{wrapped:!0}):e),s?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}},"./node_modules/lit/directives/class-map.js":(e,t,i)=>{"use strict";i.d(t,{$:()=>a});var s=i("./node_modules/lit-html/lit-html.js"),n=i("./node_modules/lit-html/directive.js"),a=(0,n.XM)(class extends n.Xe{constructor(e){var t;if(super(e),e.type!==n.pX.ATTRIBUTE||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,t){var[i]=t;if(void 0===this.it){for(var n in this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),i)i[n]&&!(null!==(l=this.st)&&void 0!==l&&l.has(n))&&this.it.add(n);return this.render(i)}var a=e.element.classList;for(var o of this.it)o in i||(a.remove(o),this.it.delete(o));for(var r in i){var l,u,d=!!i[r];d===this.it.has(r)||(null===(u=this.st)||void 0===u?void 0:u.has(r))||(d?(a.add(r),this.it.add(r)):(a.remove(r),this.it.delete(r)))}return s.Jb}})},"./node_modules/memoizerific sync recursive":e=>{function t(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id="./node_modules/memoizerific sync recursive",e.exports=t},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,i)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=i("./node_modules/react/index.js"),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,r=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,i){var s,a={},u=null,d=null;for(s in void 0!==i&&(u=""+i),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,s)&&!l.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===a[s]&&(a[s]=t[s]);return{$$typeof:n,type:e,key:u,ref:d,props:a,_owner:r.current}}t.Fragment=a,t.jsx=u,t.jsxs=u},"./node_modules/react/jsx-runtime.js":(e,t,i)=>{"use strict";e.exports=i("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./libs/components/src/side-sheet/vl-side-sheet.component.ts":(e,t,i)=>{"use strict";i.d(t,{v:()=>d});var s=i("./libs/common/utilities/src/index.ts"),n=i("./libs/components/src/toggle-button/index.ts"),a=i("./libs/elements/src/index.ts"),o=i("./node_modules/swipe-detect/dist/index.js"),r=i("./node_modules/lit/index.js");let l=(0,r.iv)`
    .vl-vi::before,
    .vl-vi::after {
        font-family: 'vlaanderen-icon' !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-style: normal;
        font-variant: normal;
        font-weight: normal;
        text-decoration: none;
        text-transform: none;
        display: inline-block;
        vertical-align: middle;
    }
    .vl-vi.vl-vi-u-180deg::before {
        display: inline-block;
        transform: rotate(180deg);
        vertical-align: middle;
    }

    .vl-vi-u-xs::before {
        font-size: 0.8rem;
    }

    .vl-vi-u-s::before {
        font-size: 1.3rem;
    }

    .vl-vi-u-m::before {
        font-size: 1.7rem;
    }

    .vl-vi-u-l::before {
        font-size: 2rem;
    }

    .vl-vi-u-xl::before {
        font-size: 2.2rem;
    }

    .vl-vi-u-90deg::before {
        display: inline-block;
        transform: rotate(90deg);
    }

    .vl-vi-u-180deg::before {
        display: inline-block;
        transform: rotate(180deg);
    }

    :host {
        position: fixed;
        top: 0px;
        right: 0px;
        z-index: 1001;
        width: var(--vl-side-sheet-width, 33.3333333333%);
    }
    :host #vl-side-sheet {
        position: absolute;
        display: none;
        width: 100%;
        height: 100%;
        padding-top: 43px;
        z-index: 2;
        background: white;
        overflow: auto;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
    }
    :host #vl-side-sheet [is='vl-layout'] {
        min-width: auto;
    }
    :host #vl-side-sheet-backdrop {
        display: none;
    }
    :host #vl-side-sheet-toggle-text {
        white-space: nowrap;
    }
    :host .vl-side-sheet__toggle {
        position: absolute;
        top: calc(1rem + 43px);
        right: 0px;
        background-color: white !important;
        color: #333332 !important;
        cursor: pointer !important;
        z-index: 1;
    }
    :host .vl-side-sheet__toggle::part(button template) {
        border: 1px solid #cbd2da !important;
        border-right-width: 0px !important;
        border-radius: 0.3rem 0px 0px 0.3rem;
    }

    :host(.vl-side-sheet--left) {
        right: initial;
        left: 0;
    }
    :host(.vl-side-sheet--left) .vl-side-sheet__toggle {
        right: initial;
        left: 0px;
    }
    :host(.vl-side-sheet--left) .vl-side-sheet__toggle::part(button template) {
        border-right-width: 1px !important;
        border-left-width: 0px !important;
        border-radius: 0px 0.3rem 0.3rem 0px;
    }

    :host([data-vl-open]) {
        height: 100%;
        z-index: 1002;
    }
    @media screen and (max-width: 767px) {
        :host([data-vl-open]) {
            width: var(--vl-side-sheet-width-mobile, calc(100vw - 56px));
        }
    }
    :host([data-vl-open]) #vl-side-sheet {
        display: block;
    }
    :host([data-vl-open]) #vl-side-sheet-backdrop {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(2px);
    }
    @media screen and (max-width: 767px) {
        :host([data-vl-open]) #vl-side-sheet-backdrop {
            display: block;
        }
    }
    :host([data-vl-open]) .vl-side-sheet__toggle {
        right: 100%;
    }

    :host(.vl-side-sheet--left[data-vl-open]) .vl-side-sheet__toggle {
        right: initial;
        left: 100%;
    }

    :host(.vl-side-sheet--absolute) {
        position: absolute;
    }
    :host(.vl-side-sheet--absolute) #vl-side-sheet {
        padding-top: 0px;
        padding: 15px;
    }
    :host(.vl-side-sheet--absolute) .vl-side-sheet__toggle {
        top: 1rem;
    }
    :host(.vl-side-sheet--absolute) .vl-side-sheet__toggle::part(button template) {
        border-left-width: 1px !important;
        border-right-width: 1px !important;
    }

    :host(.vl-side-sheet--absolute.vl-side-sheet--left) {
        right: initial;
        left: 0px;
    }

    :host(.vl-side-sheet--absolute[data-vl-open]) .vl-side-sheet__toggle::part(button template) {
        border-right-width: 0px !important;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
    }

    :host(.vl-side-sheet--absolute.vl-side-sheet--left[data-vl-open]) .vl-side-sheet__toggle::part(button template) {
        border-right-width: 1px !important;
        border-left-width: 0px !important;
        border-radius: 0px 0.3rem 0.3rem 0px;
    }
`,u=[...a.CX,l];class d extends(0,s.W$)(HTMLElement){static{(0,s.YV)([a.bs,a.lV,a.yK,n.e])}static get _observedAttributes(){return["enable-swipe","toggle-text","tooltip-text","custom-icon","hide-toggle-button","icon-position","custom-size"]}static get _observedClassAttributes(){return["left","right","absolute"]}constructor(e=""){super(`
          <style>
            ${u}
          </style>
          <div>
              <vl-toggle-button
                  aria-expanded="false"
                  data-vl-icon="nav-left"
                  data-vl-icon-placement="before"
                  class="vl-side-sheet__toggle"
              >
                <span id="vl-side-sheet-toggle-text" is="vl-text"></span>
              </vl-toggle-button>
              <div id="vl-side-sheet-backdrop"></div>
              <div id="vl-side-sheet">
                <section is="vl-region">
                  <div is="vl-layout">
                    <slot></slot>
                  </div>
                </section>
              </div>
          </div>
        `)}connectedCallback(){super.connectedCallback(),this._toggle=()=>this.toggle(),this._toggleButton.addEventListener("click",this._toggle),this._toggleButton.active=!1,this.updateToggleText(this.toggleText),"after"!==this.iconPlacement?this._toggleButton.setAttribute("data-vl-icon-placement","before"):this._toggleButton.setAttribute("data-vl-icon-placement","after")}disconnectedCallback(){this._toggleButton.removeEventListener("click",this._toggle)}get isOpen(){return this.hasAttribute("open")}get isLeft(){return this.hasAttribute("left")}get toggleText(){return this.getAttribute("toggle-text")}get hideToggleButton(){return this.getAttribute("hide-toggle-button")}get customIcon(){return this.getAttribute("data-vl-custom-icon")}get iconPlacement(){return this.getAttribute("data-vl-icon-placement")}get _classPrefix(){return"vl-side-sheet--"}get _toggleButton(){return this._shadow.querySelector(".vl-side-sheet__toggle")}get _toggleButtonTextElement(){return this._shadow.querySelector("#vl-side-sheet-toggle-text")}get _sheetElement(){return this._shadow.querySelector("#vl-side-sheet")}get _regionElement(){return this._sheetElement.querySelector('[is="vl-region"]')}get _backdropElement(){return this._shadow.querySelector("#vl-side-sheet-backdrop")}get _slotElement(){return this._shadow.querySelector("slot")}toggle(){this.isOpen?this.close():this.open()}open(){let e;this.setAttribute("data-vl-open",""),this._toggleButton.setAttribute("aria-expanded","true"),e=this.customIcon?this.customIcon:this.isLeft?"nav-left":"nav-right",this._toggleButton.setAttribute("data-vl-icon",e)}close(){let e;this.removeAttribute("data-vl-open"),this._toggleButton.setAttribute("aria-expanded","false"),e=this.customIcon?this.customIcon:this.isLeft?"nav-right":"nav-left",this._toggleButton.setAttribute("data-vl-icon",e),this._onClose&&this._onClose()}onClose(e){this._onClose=e}_enableSwipeChangedCallback(e,t){null!==t?(0,o.Z)(this._sheetElement,e=>{(this.isLeft&&"left"===e||!this.isLeft&&"right"===e)&&this.close()},50):o.Z.disable()}_absoluteChangedCallback(e,t){void 0!=t&&this._regionElement&&(this._sheetElement.append(this._slotElement),this._regionElement.remove())}_leftChangedCallback(e,t){this.customIcon||(void 0!=t?this._toggleButton.setAttribute("data-vl-icon","nav-right"):this._toggleButton.setAttribute("data-vl-icon","nav-left"))}updateToggleText(e){e&&""!==e?this._toggleButton.removeAttribute("data-vl-text-hidden"):this._toggleButton.setAttribute("data-vl-text-hidden",""),this._toggleButtonTextElement.textContent=e}_toggleTextChangedCallback(e,t){this.updateToggleText(t)}_tooltipTextChangedCallback(e,t){this._toggleButton.title=t}_hideToggleButtonChangedCallback(e,t){null===t?this._toggleButton.classList.remove("vl-u-visually-hidden"):this._toggleButton.classList.add("vl-u-visually-hidden")}_customIconChangedCallback(e,t){t&&this._toggleButton.setAttribute("data-vl-icon",t)}}d=function(e,t,i,s){var n,a=arguments.length,o=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o}([(0,s.a6)("vl-side-sheet")],d)},"./libs/components/src/toggle-button/index.ts":(e,t,i)=>{"use strict";i.d(t,{e:()=>s.e});var s=i("./libs/components/src/toggle-button/vl-toggle-button.component.ts");i("./libs/components/src/toggle-button/vl-toggle-button.model.ts")},"./libs/components/src/toggle-button/vl-toggle-button.component.ts":(e,t,i)=>{"use strict";i.d(t,{e:()=>m});var s=i("./libs/common/utilities/src/index.ts"),n=i("./libs/elements/src/index.ts"),a=i("./node_modules/@domg/govflanders-style/common/index.js"),o=i("./node_modules/@domg/govflanders-style/component/index.js"),r=i("./node_modules/lit/index.js"),l=i("./node_modules/lit/decorators.js"),u=i("./node_modules/lit/directives/class-map.js"),d=i("./libs/components/src/toggle-button/vl-toggle-button.model.ts");let c=(0,r.iv)`
    .vl-button--map.vl-button--tertiary {
        background-color: #fff;
    }
    .vl-button--map.vl-button--tertiary:hover,
    .vl-button--map.vl-button--tertiary:active {
        background-color: #fff;
    }
`;class m extends s.fS{static{(0,s.YV)([n.d7,n.Gi,n.yK])}static get properties(){return{icon:{type:String,attribute:"data-vl-icon",reflect:!0},iconPlacement:{type:String,attribute:"data-vl-icon-placement",reflect:!0},textHidden:{type:Boolean,attribute:"data-vl-text-hidden",reflect:!0},error:{type:Boolean,attribute:"data-vl-error",reflect:!0},block:{type:Boolean,attribute:"data-vl-block",reflect:!0},large:{type:Boolean,attribute:"data-vl-large",reflect:!0},wide:{type:Boolean,attribute:"data-vl-wide",reflect:!0},narrow:{type:Boolean,attribute:"data-vl-narrow",reflect:!0},loading:{type:Boolean,attribute:"data-vl-loading",reflect:!0},disabled:{type:Boolean,attribute:"disabled",reflect:!0},_active:{type:Boolean,state:!0},active:{type:Boolean||void 0}}}static get styles(){return[a.YN,o.jn,c,a.PC,o.oQ]}createRenderRoot(){let e=super.createRenderRoot();return e.addEventListener("click",e=>{let{disabled:t}=this;t&&e.stopPropagation()}),e}constructor(){super(),this.icon="",this.iconPlacement="",this.textHidden=!1,this.error=!1,this.block=!1,this.large=!1,this.wide=!1,this.narrow=!1,this.loading=!1,this.disabled=!1,this.isInMap=!1,this._active=!1,this.active=void 0,this.iconPlacement=d.T.AFTER,this.textHidden=!1,this.disabled=!1}_isControlled(){return void 0!==this.active}_fireChange(){this.dispatchEvent(new CustomEvent("change",{detail:{isActive:this._active}}))}updated(e){e.forEach((e,t)=>{switch(t){case"active":this._isControlled()&&(this._active=this.active);break;case"_active":(!this._isControlled()||this._isControlled()&&void 0!==e)&&this._fireChange()}})}_buttonWrap(e){return(0,r.dy)`
            <button
                class=${(0,u.$)({"vl-button--map":this.isInMap})}
                is="vl-button"
                aria-label="toggle-button"
                part="button template"
                ?data-vl-error=${this.error}
                ?data-vl-block=${this.block}
                ?data-vl-large=${this.large}
                ?data-vl-wide=${this.wide}
                ?data-vl-narrow=${this.narrow}
                ?data-vl-loading=${this.loading}
                ?disabled=${this.disabled}
                ?data-vl-tertiary=${!this._active}
                @click=${()=>{this._isControlled()||(this._active=!this._active)}}
            >
                ${e}
            </button>
        `}_iconTemplate(){return this.textHidden?(0,r.dy)`${this._buttonWrap((0,r.dy)`<span is="vl-icon" data-vl-icon=${this.icon}></span>
                    <span is="vl-text" data-vl-visually-hidden><slot></slot></span>`)}`:this.iconPlacement===d.T.BEFORE?(0,r.dy)`${this._buttonWrap((0,r.dy)`<span is="vl-icon" data-vl-icon=${this.icon} data-vl-before></span> <slot></slot>`)}`:(0,r.dy)`${this._buttonWrap((0,r.dy)` <slot></slot><span is="vl-icon" data-vl-icon=${this.icon} data-vl-after></span>`)}`}render(){return this.icon?this._iconTemplate():(0,r.dy)`${this._buttonWrap((0,r.dy)` <slot></slot>`)}`}}m=function(e,t,i,s){var n,a=arguments.length,o=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o}([(0,l.Mo)("vl-toggle-button")],m)},"./libs/components/src/toggle-button/vl-toggle-button.model.ts":(e,t,i)=>{"use strict";i.d(t,{T:()=>s});let s={BEFORE:"before",AFTER:"after"}},"./node_modules/swipe-detect/dist/index.js":(e,t,i)=>{"use strict";i.d(t,{Z:()=>n});class s{constructor(e,t,i){this.target=e,this.callback=t,this.threshold=i,this.enable()}enable(){this.target.addEventListener("touchstart",this.recordTouchStartValues.bind(this)),this.target.addEventListener("touchend",this.detectSwipeDirection.bind(this))}disable(){this.target.removeEventListener("touchstart",this.recordTouchStartValues.bind(this)),this.target.removeEventListener("touchend",this.detectSwipeDirection.bind(this))}recordTouchStartValues(e){let t=e.changedTouches[0];this.startX=t.pageX,this.startY=t.pageY,this.startTime=new Date().getTime()}detectSwipeDirection(e){let t=e.changedTouches[0],i=t.pageX-this.startX,s=t.pageY-this.startY,n=Math.abs(i),a=Math.abs(s);if(!(new Date().getTime()-this.startTime>300))switch(!0){case n>=this.threshold&&n>a&&i<0:this.callback("left");break;case n>=this.threshold&&n>a&&i>0:this.callback("right");break;case a>=this.threshold&&a>n&&s<0:this.callback("up");break;case a>=this.threshold&&a>n&&s>0:this.callback("down")}}}function n(e,t,i=150){return new s(e,t,i)}}}]);