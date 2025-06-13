"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[8233],{"../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(t,e,a)=>{a.d(e,{f:()=>h});var d=a("../../node_modules/react/index.js"),n=a("../../node_modules/react-dom/client.js"),l=new Map,r=({callback:t,children:e})=>{let a=(0,d.useRef)();return(0,d.useLayoutEffect)(()=>{a.current!==t&&(a.current=t,t())},[t]),e},i=async(t,e)=>{let a=await s(e);return new Promise(e=>{a.render(d.createElement(r,{callback:()=>e(null)},t))})},o=(t,e)=>{let a=l.get(t);a&&(a.unmount(),l.delete(t))},s=async t=>{let e=l.get(t);return e||(e=n.createRoot(t),l.set(t,e)),e},c=a("../../node_modules/@storybook/blocks/dist/index.mjs"),b={code:c.XA,a:c.zE,...c.Sw},m=class extends d.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){let{showException:e}=this.props;e(t)}render(){let{hasError:t}=this.state,{children:e}=this.props;return t?null:d.createElement(d.Fragment,null,e)}},h=class{constructor(){this.render=async(t,e,n)=>{let l={...b,...e?.components},r=c.kQ;return new Promise((o,s)=>{a.e(814).then(a.bind(a,"../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:a})=>i(d.createElement(m,{showException:s,key:Math.random()},d.createElement(a,{components:l},d.createElement(r,{context:t,docsParameter:e}))),n)).then(()=>o())})},this.unmount=t=>{o(t)}}}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(t,e,a)=>{a.d(e,{Hl:()=>d.Hl,W8:()=>d.W8,kL:()=>d.kL,ov:()=>d.ov}),a("../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var d=a("../../node_modules/@storybook/blocks/dist/index.mjs")},"../../libs/components/src/next/table/stories/vl-table.stories.ts":(t,e,a)=>{a.r(e),a.d(e,{TableDefault:()=>f,TableExpandable:()=>E,TableExpandableCustomToggleDetailsColumn:()=>w,TableJoinedRowTitles:()=>v,__namedExportsOrder:()=>j,default:()=>y});var d=a("../../libs/common/storybook/src/index.ts"),n=a("../../node_modules/lit-html/lit-html.js"),l=a("../../libs/common/utilities/src/index.ts"),r=a("../../node_modules/lit/index.js"),i=a("../../libs/components/src/next/button/index.ts"),o=a("../../libs/common/utilities/src/css/index.ts");let s=(0,r.AH)`
    .vl-table-next {
        width: 100%;
        max-width: 100%;

        caption {
            color: #687483;
            caption-side: bottom;
            text-align: left;
            margin: 15px 0 5px 0;
            font-size: 1.8rem;
            font-weight: 500;
        }

        tbody tr.vl-table-next__element--disabled,
        tbody td.vl-table-next__element--disabled {
            background: #cbd2d9;
            color: var(--vl-theme-fg-color-70);
        }

        thead tr {
            border-bottom: 0.2rem #cbd2da solid;
        }

        tfoot tr {
            border-top: 0.2rem #cbd2da solid;
        }

        tfoot td {
            font-weight: 500;
            white-space: nowrap;
        }

        tfoot td:first-child {
            padding-left: 0;
        }

        tfoot td:last-child {
            padding-right: 0;
        }

        tbody tr {
            border-bottom: 0.1rem #cbd2da solid;

            &[data-vl-table-selectable] {
                cursor: pointer;
                transition: background 0.2s ease-in-out;

                &:hover {
                    background: #f3f5f6;
                }
            }

            &.vl-table-next__grouped-row:not(.vl-table-next__grouped-row--last) {
                border-bottom: 0;
            }

            th:first-child {
                border-right: 0.2rem #cbd2da solid;
            }
        }

        tbody tr,
        tbody td {
            &.vl-table-next__element--error {
                background: #fbebec;
                border-bottom: 1px solid #d2373c;
            }

            &.vl-table-next__element--warning {
                background: #fff6e7;
                border-bottom: 1px solid #ffa10a;
            }

            &.vl-table-next__element--success {
                background: #e6f5ed;
                border-bottom: 1px solid #009e47;
            }
        }

        td,
        th {
            font-size: 1.6rem;
            line-height: 1.3;
            text-align: left;
            vertical-align: top;
            padding: 1.2rem 1rem;

            &:first-child {
                border-left: 0;
            }

            &.vl-table-next__icon-container {
                background-color: #f3f5f6;
                color: #333332;

                &.vl-vi {
                    color: #4d4d4b;
                    font-size: 3rem;
                }
            }

            @media screen and (max-width: ${o.gT}px) {
                font-size: 1.4rem;
                padding: 1rem;
            }
        }

        th {
            font-weight: 500;
            white-space: nowrap;

            & > * {
                white-space: normal;
            }
        }

        &.vl-table-next__grouped-row td {
            padding: 0.3rem 1rem 0.3rem 0;
        }

        &.vl-table-next__grouped-row--first td {
            padding-top: 1.2rem;

            @media screen and (max-width: ${o.gT}px) {
                padding-top: 1rem;
            }
        }

        &.vl-table-next__grouped-row--last td {
            padding-bottom: 1.2rem;

            @media screen and (max-width: ${o.gT}px) {
                padding-bottom: 1rem;
            }
        }

        &.vl-pill {
            vertical-align: middle;

            @media screen and (max-width: ${o.gT}px) {
                font-size: 1.4rem;
                height: 2rem;
                line-height: 2rem;
                padding: 0 0.5rem;
            }
        }
    }

    .vl-table-next--uig-zebra {
        tbody
            tr:not(.vl-table-next__element--warning):not(.vl-table-next__element--error):not(
                .vl-table-next__element--success
            ).odd {
            background-color: #f3f5f6;
            &:hover {
                background-color: #edf0f2;
            }
        }
    }

    .vl-vi .vl-table-next td.vl-table-next__icon-container,
    .vl-vi .vl-table-next th.vl-table-next__icon-container {
        text-align: center;
    }

    .vl-table-next__header-title--sortable {
        text-decoration: none;

        &.vl-table-next__header-title__sort-icon {
            opacity: 0;
        }
    }

    .vl-table-next__header-title--sortable:hover,
    .vl-table-next__header-title--sortable:focus {
        text-decoration: underline;

        &.vl-table-next__header-title__sort-icon {
            opacity: 0.5;
        }
    }

    .vl-table-next__header-title--sortable-active .vl-table-next__header-title__sort-icon {
        opacity: 1;
    }

    .vl-table-next__body-title {
        max-width: 30rem;
    }

    .vl-table-next--alt {
        tr {
            th:first-child {
                border-right: 0.1rem #cbd2da solid;
            }

            th:not(:first-child) {
                padding: 0 1.2rem 1.2rem;
            }

            td:not(:first-child) {
                padding: 1.2rem;
            }
        }
    }

    .vl-table-next--double-spacing tr td,
    .vl-table-next--double-spacing tr th {
        padding: 1.2rem 3rem;
    }

    .vl-table-next--no-header tbody tr:first-child {
        border-top: 3px #cbd2da solid;
    }

    .vl-u-table-overflow {
        width: 100%;
        overflow-x: auto;

        &.vl-table-next {
            overflow: auto;
        }
    }

    .no-js [data-vl-table-check-all] + span {
        display: none !important;
    }

    .vl-table-next--hover tbody tr {
        transition: background 0.2s ease-in-out;

        &:hover {
            background: #f3f5f6;
        }
    }

    .vl-table-next--matrix tr th:first-child {
        border-right: 0.2rem #cbd2da solid;
    }

    .vl-table-next--grid td,
    .vl-table-next--grid th {
        padding: 1.2rem;

        &:not(:first-child) {
            border-left: 0.1rem solid #cbd2da;
        }
    }

    .vl-table-next--zebra
        tbody
        tr:not(.vl-table-next__element--warning):not(.vl-table-next__element--error):not(
            .vl-table-next__element--success
        ):nth-child(odd) {
        background-color: #f3f5f6;

        &:hover {
            background-color: #edf0f2;
        }
    }

    .vl-table-next__actions--top {
        margin: 0 0 2rem;
    }

    .vl-table-next__actions--bottom {
        margin: 2rem 0 0;

        &.vl-table-next__actions__list {
            @media screen and (max-width: ${o.eA}px) {
                margin: 0 0 1rem;
            }
        }
    }

    .vl-table-next__actions__list .vl-table-next__action:not(:last-child) {
        margin-right: 0.6rem;
    }

    .vl-table-next__action {
        display: inline-block;
        vertical-align: middle;
        margin-bottom: 0.6rem;
    }

    .vl-table-next__action__toggle {
        display: flex;
        align-items: center;
        background: none;
        font-family: 'Flanders Art Sans', sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 1;
        color: #333332;
        border: 0.1rem #cbd2da solid;
        text-decoration: none;
        text-align: left;
        cursor: pointer;
        padding: 0.9rem 1.5rem 0.8rem;

        @media screen and (max-width: ${o.gT}px) {
            font-size: 1.5rem;
        }
    }

    [data-vl-disable='true'] .vl-table-next__action__toggle {
        color: #687483;
        cursor: default;
    }

    .vl-table-next__action__toggle__icon {
        font-size: 1.2rem;

        &:first-child {
            margin-right: 0.5rem;
        }

        &:last-child {
            margin-left: 0.5rem;
        }
    }

    @media screen and (max-width: ${o.eA}px) {
        .vl-table-next__action__toggle--contract-xs span {
            display: none;
        }

        .vl-table-next__action__toggle--contract-xs .vl-vi::before {
            margin: 0;
        }
    }

    @media screen and (max-width: ${o.eA}px) {
        .vl-table-next--collapsed-xs {
            position: relative;

            table,
            thead,
            tbody,
            th,
            td,
            tr {
                display: block;
            }

            thead tr {
                position: absolute;
                top: -9999px;
                left: -9999px;
            }

            td {
                border-bottom: 1px solid #cbd2da;
                position: relative;
                padding-left: 40%;
                white-space: normal;
                text-align: left;
            }

            td::before,
            th::before {
                content: attr(data-title);
                position: absolute;
                top: 10px;
                left: 10px;
                width: 35%;
                padding-right: 10px;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                text-align: left;
                font-weight: 500;
            }
        }
    }

    @media screen and (max-width: ${o.gT}px) {
        .vl-table-next--collapsed-s {
            position: relative;

            table,
            thead,
            tbody,
            th,
            td,
            tr {
                display: block;
            }

            thead tr {
                position: absolute;
                top: -9999px;
                left: -9999px;
            }

            td {
                border-bottom: 1px solid #cbd2da;
                position: relative;
                padding-left: 40%;
                white-space: normal;
                text-align: left;
            }

            td::before,
            th::before {
                content: attr(data-title);
                position: absolute;
                top: 10px;
                left: 10px;
                width: 35%;
                padding-right: 10px;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                text-align: left;
                font-weight: 500;
            }
        }
    }

    @media screen and (max-width: ${o.Oh}px) {
        .vl-table-next--collapsed-m {
            position: relative;

            table,
            thead,
            tbody,
            th,
            td,
            tr {
                display: block;
            }

            thead tr {
                position: absolute;
                top: -9999px;
                left: -9999px;
            }

            td {
                border-bottom: 1px solid #cbd2da;
                position: relative;
                padding-left: 40%;
                white-space: normal;
                text-align: left;
            }

            td::before,
            th::before {
                content: attr(data-title);
                position: absolute;
                top: 10px;
                left: 10px;
                width: 35%;
                padding-right: 10px;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                text-align: left;
                font-weight: 500;
            }
        }
    }

    .vl-table-next--sticky {
        table-layout: auto;

        .vl-table-next__cell--sticky {
            position: sticky;
            left: 0;
            background-color: inherit;
            border: 0;
            z-index: 1;
        }

        thead .vl-table-next__cell--sticky {
            top: 0;
            z-index: 2;

            &::before {
                display: block;
                position: absolute;
                bottom: -3px;
                left: 0;
                right: 0;
                height: 3px;
                background-color: #cbd2da;
                content: '';
            }
        }

        tbody .vl-table-next__cell--sticky::before {
            display: block;
            position: absolute;
            bottom: 0;
            top: 0;
            right: -1px;
            width: 1px;
            background-color: #cbd2da;
            content: '';
        }

        th,
        td {
            min-width: 200px;
        }

        tr {
            background-color: #fff;
        }
    }

    .vl-table-next__sticky-wrapper {
        width: 100%;
        max-height: 75vh;
        overflow-x: auto;
        overflow-y: auto;
    }

    .vl-u-table-overflow {
        background: linear-gradient(to right, white, white, rgba(255, 255, 255, 0) 30px),
            radial-gradient(farthest-side at 0 50%, rgba(0, 0, 0, 0.3), rgba(255, 255, 255, 0)),
            linear-gradient(to left, white, white, rgba(255, 255, 255, 0) 30px),
            radial-gradient(farthest-side at 100% 50%, rgba(0, 0, 0, 0.3), rgba(255, 255, 255, 0)) 100%;
        background-color: white;
        background-repeat: no-repeat;
        background-attachment: local, scroll, local, scroll;
        background-size: 100% 100%, 15px 100%, 100% 100%, 15px 100%;
    }

    .vl-table-next__navigation {
        position: relative;
        z-index: 1;
        display: flex;
        justify-content: flex-end;
    }
`;(0,l.gy)([i.Y]);class c extends r.WF{static get properties(){return{hover:{type:Boolean,reflect:!0},matrix:{type:Boolean,reflect:!0},grid:{type:Boolean,reflect:!0},zebra:{type:Boolean,reflect:!0},uigZebra:{type:Boolean,reflect:!0,attribute:"uig-zebra"},collapsedM:{type:Boolean,reflect:!0,attribute:"collapsed-m"},collapsedS:{type:Boolean,reflect:!0,attribute:"collapsed-s"},collapsedXs:{type:Boolean,reflect:!0,attribute:"collapsed-xs"}}}constructor(){super(),this.table?.classList.add("vl-table-next")}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.processScopeAttributes(),this.processRowElements(),this.observer=this.observeHeaderElements(()=>this.processScopeAttributes())}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect()}firstUpdated(t){super.firstUpdated(t),document.adoptedStyleSheets=[...document.adoptedStyleSheets,s.styleSheet],this.caption?.classList.add("vl-table-next__caption")}updated(t){super.updated(t),this.table&&Object.entries({hover:"vl-table-next--hover",matrix:"vl-table-next--matrix",grid:"vl-table-next--grid",zebra:"vl-table-next--zebra",uigZebra:"vl-table-next--uig-zebra",collapsedM:"vl-table-next--collapsed-m",collapsedS:"vl-table-next--collapsed-s",collapsedXs:"vl-table-next--collapsed-xs"}).forEach(([t,e])=>{this[t]?this.table.classList.add(e):this.table.classList.remove(e)})}get table(){return this.querySelector("table")}get caption(){return this.querySelector("caption")}get headHeaderElements(){return Array.from(this.querySelectorAll("thead tr th"))}get bodyHeaderElements(){return Array.from(this.querySelectorAll("tbody tr th"))}get bodyRowElements(){return Array.from(this.querySelectorAll("tbody tr"))}detailsToggleButtonElement(t){return this.querySelector(`tbody tr td vl-button-next[id="details-toggle-${t}"]`)}detailsTableRowElements(t){return this.table?.querySelectorAll(`tbody tr[data-details-id="${t}"]`)}processScopeAttributes(){this.headHeaderElements.filter(t=>!t.hasAttribute("scope")).forEach(t=>t.setAttribute("scope","col")),this.bodyHeaderElements.filter(t=>!t.hasAttribute("scope")).forEach(t=>t.setAttribute("scope","row"))}expandCollapseTemplate(t){let e=document.createElement("vl-button-next");return e.id=`details-toggle-${t}`,e.setAttribute("type","button"),e.setAttribute("narrow",""),e.setAttribute("secondary",""),e.setAttribute("icon","arrow-down-fat"),e.setAttribute("icon-only",""),e.addEventListener("vl-click",e=>{e.preventDefault(),this.toggleDetails(t)}),e}collapseDetails(t){this.showDetails(t,!1)}expandDetails(t){this.showDetails(t,!0)}showDetails(t,e){let a=this.detailsTableRowElements(t),d=this.detailsToggleButtonElement(t);e?(a?.forEach(t=>t.style.removeProperty("display")),d?.shadowRoot?.querySelector("button")?.setAttribute("aria-expanded","true"),d?.setAttribute("icon","arrow-up-fat")):(a?.forEach(t=>t.style.display="none"),d?.shadowRoot?.querySelector("button")?.setAttribute("aria-expanded","false"),d?.setAttribute("icon","arrow-down-fat"))}processRowElements(){let t=this.bodyRowElements,e=0;t.forEach((a,d)=>{let n=t=>!t.hasAttribute("data-details-id");if(n(a))e++;else{let e=a.getAttribute("data-details-id");a.style.display="none";let l=t[d-1];if(0===l.querySelectorAll("td[data-with-expand-details]").length&&e&&n(l)){let t=document.createElement("td"),a=this.expandCollapseTemplate(e);t.appendChild(a),l.appendChild(t),a.updateComplete.then(()=>{a.shadowRoot?.querySelector("button")?.setAttribute("aria-expanded","false"),a.shadowRoot?.querySelector("button")?.setAttribute("aria-label","toggle details for "+e)})}if(1===a?.querySelectorAll("td")?.length){let t=l.querySelectorAll("td").length,e=a.querySelector("td");e&&(e.colSpan=t)}}a.classList.add(e%2==0?"even":"odd")})}observeHeaderElements(t){let e=new MutationObserver(t);return e.observe(this,{childList:!0}),e}toggleDetails(t){console.log("toggleDetails id",t);let e=this.detailsTableRowElements(t),a=!!e&&"none"!==e[0].style.display;e?.forEach(t=>t.style.display=a?"none":"table-row"),this.showDetails(t,!a)}}c=function(t,e,a,d){var n,l=arguments.length,r=l<3?e:null===d?d=Object.getOwnPropertyDescriptor(e,a):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,a,d);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(r=(l<3?n(r):l>3?n(e,a,r):n(e,a))||r);return l>3&&r&&Object.defineProperty(e,a,r),r}([(0,l.M1)("vl-table-next")],c);let b={hover:!1,matrix:!1,grid:!1,zebra:!1,uigZebra:!1,collapsedM:!1,collapsedS:!1,collapsedXS:!1},m={hover:{name:"hover",description:"Attribuut wordt gebruikt om een rij te highlighten wanneer de gebruiker erover hovert met muiscursor.",table:{category:d.R6.ATTRIBUTES,type:{summary:d.QE.BOOLEAN},defaultValue:{summary:b.hover}}},matrix:{name:"matrix",description:"Attribuut wordt gebruikt om data in 2 dimensies te tonen. Zowel de rijen als de kolommen krijgen een titel. Deze titels worden gescheiden door een dikke lijn.",table:{category:d.R6.ATTRIBUTES,type:{summary:d.QE.BOOLEAN},defaultValue:{summary:b.matrix}}},grid:{name:"grid",description:"Variant met een lijn tussen elke rij en kolom.",table:{category:d.R6.ATTRIBUTES,type:{summary:d.QE.BOOLEAN},defaultValue:{summary:b.grid}}},zebra:{name:"zebra",description:"Variant waarin de rijen afwisselend een andere achtergrondkleur krijgen. Dit maakt de tabel makkelijker leesbaar. Deze zebra werkt niet voor tabellen met detail rijen, gebruik hiervoor uig-zebra.",table:{category:d.R6.ATTRIBUTES,type:{summary:d.QE.BOOLEAN},defaultValue:{summary:b.zebra}}},uigZebra:{name:"uig-zebra",description:"Variant waarin de rijen afwisselend een andere achtergrondkleur krijgen. Dit maakt de tabel makkelijker leesbaar. Deze zebra werkt voor tabellen met en zonder detail rijen.",table:{category:d.R6.ATTRIBUTES,type:{summary:d.QE.BOOLEAN},defaultValue:{summary:b.uigZebra}}},collapsedM:{name:"collapsed-m",description:"Vanaf een medium schermgrootte zullen de cellen van elke rij onder elkaar ipv naast elkaar getoond worden.",table:{category:d.R6.ATTRIBUTES,type:{summary:d.QE.BOOLEAN},defaultValue:{summary:b.collapsedM}}},collapsedS:{name:"collapsed-s",description:"Vanaf een small schermgrootte zullen de cellen van elke rij onder elkaar ipv naast elkaar getoond worden.",table:{category:d.R6.ATTRIBUTES,type:{summary:d.QE.BOOLEAN},defaultValue:{summary:b.collapsedS}}},collapsedXS:{name:"collapsed-xs",description:"Vanaf een extra small schermgrootte zullen de cellen van elke rij onder elkaar ipv naast elkaar getoond worden.",table:{category:d.R6.ATTRIBUTES,type:{summary:d.QE.BOOLEAN},defaultValue:{summary:b.collapsedXS}}}};a("../../node_modules/react/index.js");var h=a("../../node_modules/react/jsx-runtime.js"),p=a("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),u=a("../../node_modules/@storybook/addon-docs/dist/index.mjs");function g(t){let e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",a:"a",ul:"ul",li:"li",h3:"h3",strong:"strong",em:"em"},(0,p.RP)(),t.components),{VluxMetaData:a,VluxAlert:d}=e;return d||x("VluxAlert",!0),a||x("VluxMetaData",!0),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(e.h1,{id:"table---next",children:"Table - next"}),"\n",(0,h.jsx)(a,{id:"components-next-table"}),"\n",(0,h.jsxs)(e.p,{children:["Gebruik de ",(0,h.jsx)(e.code,{children:"table"})," component om op een gestructureerde manier (grote hoeveelheden) relationele data te tonen."]}),"\n",(0,h.jsx)(d,{type:"info",children:`
    In de v2 versie van deze component gebruik je hem via de custom-tag, de interne implementatie is voor de rest
    gelijk gebleven aan deze van de v1 versie. In de toekomst zal deze component grondig herwerkt worden; in de
    context van een herwerking van de vl-table.
`}),"\n",(0,h.jsx)(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,h.jsx)(e.pre,{children:(0,h.jsx)(e.code,{className:"language-js",children:"import { VlTableComponent } from '@domg-wc/components/next/table';\n"})}),"\n",(0,h.jsx)(e.pre,{children:(0,h.jsx)(e.code,{className:"language-html",children:'<vl-table-next>\n    <table is="vl-table">\n        <caption>\n             Table\n        </caption>\n        <thead>\n            <tr>\n                <th>Entry Header 1</th>\n                <th>Entry Header 2</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n                <td data-title="Entry Header 1">Entry line 1</td>\n                <td data-title="Entry Header 2">Entry line 2</td>\n            </tr>\n            <tr>\n                <td data-title="Entry Header 1">Entry line 1</td>\n                <td data-title="Entry Header 2">Entry line 2</td>\n            </tr>\n        </tbody>\n    </table>\n</vl-table-next>\n'})}),"\n",(0,h.jsx)(e.h2,{id:"default",children:"Default"}),"\n",(0,h.jsx)(u.Hl,{of:f,layout:"padded"}),"\n",(0,h.jsx)(e.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,h.jsx)(u.ov,{of:f}),"\n",(0,h.jsx)(e.h2,{id:"functionaliteit",children:"Functionaliteit"}),"\n",(0,h.jsxs)(e.p,{children:["Standaard is er geen sorteer, filtering of paginatie functionaliteit beschikbaar voor de ",(0,h.jsx)(e.code,{children:"table"}),". Hiervoor is de\n",(0,h.jsx)(e.a,{href:"?path=/docs/components-rich-table--rich-table-default",children:"rich-table"})," beschikbaar.",(0,h.jsx)("br",{}),"\nWat dit component wel méér heeft dan die van Digitaal Vlaanderen zijn expandable/collapsible rows. Zie de specifieke\nstories hieronder.",(0,h.jsx)("br",{}),"\nDe visuele mark-up volgt standaard die van Digitaal Vlaanderen, inclusief responsiveness."]}),"\n",(0,h.jsx)(e.h2,{id:"lege-cellen",children:"Lege cellen"}),"\n",(0,h.jsxs)(e.p,{children:["Het is aan te raden om in lege cellen de waarde ",(0,h.jsx)(e.code,{children:"&nbsp;"})," te plaatsen, dit zorgt ervoor dat rijen hun hoogte behouden\nindien elke cel van een rij leeg is."]}),"\n",(0,h.jsx)(e.h2,{id:"joined-row-titles",children:"Joined row titles"}),"\n",(0,h.jsxs)(e.p,{children:["Gebruik de matrix-variant om gegevens met 2 dimensies weer te geven. Zowel de rijen als de kolommen krijgen een titel.\nDe titels zijn gescheiden van de inhoud met een vetgedrukte lijn.",(0,h.jsx)("br",{}),"\nOm dit toe passen maak je zelf gebruik van native html-attribuut ",(0,h.jsx)(e.code,{children:"rowspan"}),"."]}),"\n",(0,h.jsx)(u.Hl,{of:v,layout:"padded"}),"\n",(0,h.jsx)(e.h2,{id:"expandable",children:"Expandable"}),"\n",(0,h.jsxs)(e.p,{children:['Om een rijen te laten uitklappen ("expanden") moet je het volgende doen:',(0,h.jsx)("br",{}),"\nAls je 2 rijen hebt, en je wil rij A altijd zichtbaar zetten en rij B verborgen tot die wordt opengeklapt:"]}),"\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsx)(e.li,{children:"maak een nieuwe rij B direct na rij A"}),"\n",(0,h.jsxs)(e.li,{children:["zet je het attribuut ",(0,h.jsx)(e.code,{children:"data-details-id"})," op de rij B"]}),"\n",(0,h.jsxs)(e.li,{children:["je kan ook meerdere rijen uitklapbaar maken, zolang je maar dezelfde ",(0,h.jsx)(e.code,{children:"data-details-id"})," hergebruikt"]}),"\n"]}),"\n",(0,h.jsxs)("details",{children:[(0,h.jsx)("summary",{children:"voorbeeld expandable row"}),(0,h.jsx)(u.kL,{language:"html",dark:!0,format:!0,code:`
              <tr id="rij-A">
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
              </tr>
              <tr data-details-id="details-row-A" id="rij-B">
                  <td>details on previous row</td>
              </tr>`})]}),"\n",(0,h.jsxs)(e.p,{children:["Dan zal er automatisch een ",(0,h.jsx)(e.code,{children:"button"})," toegevoegd worden die de gebruiker toelaat de rij B te zien wanneer op de\ndesbetreffende knop bij rij A wordt gedrukt."]}),"\n",(0,h.jsx)(u.Hl,{of:E,layout:"padded"}),"\n",(0,h.jsx)(e.h3,{id:"colspan",children:"Colspan"}),"\n",(0,h.jsxs)(e.p,{children:["We berekenen automatisch de ",(0,h.jsx)(e.code,{children:"colspan"})," van de rij die uitklapt, zodat de rij die uitklapt de volledige breedte\nvan de tabel inneemt.\nDit doen we enkel als de rij die uitklapt een enkele cel bevat. Als de rij die uitklapt meerdere cellen bevat,\nmoet je zelf de ",(0,h.jsx)(e.code,{children:"colspan"})," instellen."]}),"\n",(0,h.jsx)(e.h3,{id:"expandable-with-custom-toggle",children:"Expandable with custom toggle"}),"\n",(0,h.jsxs)(e.p,{children:["Je kan ook de knop die de rij open en dicht klapt zelf kiezen.",(0,h.jsx)("br",{}),"\nAls je 2 rijen hebt, en je wil rij A altijd zichtbaar zetten en rij B verborgen tot die word opengeklapt:",(0,h.jsx)("br",{}),"\nOm dit te doen, doe het volgende:",(0,h.jsx)("br",{})]}),"\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsx)(e.li,{children:"op de rij die meer details geeft op de voorgaande rij, moet de juiste id worden toegekend"}),"\n"]}),"\n",(0,h.jsx)(u.kL,{language:"html",format:!0,code:`
        <tr data-details-id="details-row1">
            <td>Details 1</td>
        </tr>
          `}),"\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsxs)(e.li,{children:["op rij die meer details heeft, een cel toevoegen die:","\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.code,{children:"data-with-expand-details"})," heeft als attribuut"]}),"\n",(0,h.jsxs)(e.li,{children:["een element naar keuze heeft, die ",(0,h.jsx)(e.code,{children:"toggleDetails([id])"})," gaat aanroepen met de juiste id voor de openklapbare rij\nbv.:"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,h.jsx)(u.kL,{language:"html",format:!0,code:`
       <td data-with-expand-details>
           <button is="vl-button" onclick="table.toggleDetails('details-row-1')">click to toggle details</button>
       </td>
          `}),"\n",(0,h.jsx)(e.p,{children:(0,h.jsx)(e.strong,{children:(0,h.jsxs)(e.em,{children:["In dit voorbeeld vind je bij ",(0,h.jsx)(e.code,{children:"Show code"})," broncode in ",(0,h.jsx)(e.code,{children:"lit-html"}),"-syntax. Voor code voorbeelden in HTML/JavaScript\nverwijzen we naar hierboven."]})})}),"\n",(0,h.jsx)(u.Hl,{of:w,layout:"padded"}),"\n",(0,h.jsx)(e.h2,{id:"referenties",children:"Referenties"}),"\n",(0,h.jsx)(e.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,h.jsx)(e.p,{children:"We nemen de functionaliteit & styling over van het equivalente component van Digitaal Vlaanderen."}),"\n",(0,h.jsx)(e.p,{children:(0,h.jsx)(e.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-data-table",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Data Table"})})]})}function x(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}(0,l.gy)([c]);let y={id:"components-next-table",title:"Components-next/table",tags:["autodocs"],args:b,argTypes:m,parameters:{docs:{page:function(t={}){let{wrapper:e}=Object.assign({},(0,p.RP)(),t.components);return e?(0,h.jsx)(e,Object.assign({},t,{children:(0,h.jsx)(g,t)})):g(t)}}}},f=(0,d._7)(b,({hover:t,matrix:e,grid:a,zebra:d,uigZebra:l,collapsedM:r,collapsedS:i,collapsedXS:o})=>(0,n.qy)`
        <vl-table-next
            ?hover=${t}
            ?matrix=${e}
            ?grid=${a}
            ?zebra=${d}
            ?uig-zebra=${l}
            ?collapsed-m=${r}
            ?collapsed-s=${i}
            ?collapsed-xs=${o}
        >
            <table>
                <caption>
                    Meise Botanic Garden herbarium collections
                </caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Collector</th>
                        <th>Collector number</th>
                        <th>Family</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th rowspan="3">Didymium clavus</th>
                        <td>Thomas H. &amp; Marie L. Farr</td>
                        <td>110</td>
                        <td>Didymiaceae</td>
                    </tr>
                    <tr>
                        <td>Critchfield R.L.</td>
                        <td>715</td>
                        <td>Didymiaceae</td>
                    </tr>
                    <tr>
                        <td>Rammeloo J.</td>
                        <td>4572</td>
                        <td>Didymiaceae</td>
                    </tr>
                    <tr>
                        <th rowspan="3">Epilobium angustifolium</th>
                        <td>Franz Heylemans</td>
                        <td>160</td>
                        <td>Onagraceae</td>
                    </tr>
                    <tr>
                        <td>Stam A.B.</td>
                        <td>477</td>
                        <td>Onagraceae</td>
                    </tr>
                    <tr>
                        <td>Van Hoeck Eddy</td>
                        <td>42</td>
                        <td>Onagraceae</td>
                    </tr>
                    <tr>
                        <th rowspan="3">Euphorbia scordifolia</th>
                        <td>Mission O. Olufsen</td>
                        <td>125</td>
                        <td>Euphorbiaceae</td>
                    </tr>
                    <tr>
                        <td>Brunel J.F.</td>
                        <td>7603</td>
                        <td>Euphorbiaceae</td>
                    </tr>
                    <tr>
                        <td>Bamps P.</td>
                        <td>7549</td>
                        <td>Euphorbiaceae</td>
                    </tr>
                    <tr>
                        <th rowspan="3">Hemitrichia</th>
                        <td>Madame F. Meyer</td>
                        <td>198</td>
                        <td>Trichiaceae</td>
                    </tr>
                    <tr>
                        <td>Johannesen E.W.</td>
                        <td>50B</td>
                        <td>Trichiaceae</td>
                    </tr>
                    <tr>
                        <td>Rammeloo J.</td>
                        <td>9438</td>
                        <td>Trichiaceae</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>
                            <div class="vl-annotation">Table annotation</div>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </vl-table-next>
    `);f.storyName="vl-table-next - default";let v=(0,d._7)(b,({hover:t,matrix:e,grid:a,zebra:d,uigZebra:l,collapsedM:r,collapsedS:i,collapsedXS:o})=>(0,n.qy)`
        <vl-table-next
                ?hover=${t}
                ?matrix=${e}
                ?grid=${a}
                ?zebra=${d}
                ?uig-zebra=${l}
                ?collapsed-m=${r}
                ?collapsed-s=${i}
                ?collapsed-xs=${o}
        >
            <table>
                <caption>
                    Table Matrix - Joined row titles
                </caption>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th rowspan="3" scope="rowgroup">Horizontal title 1</th>
                        <td>Thomas H. &amp; Marie L. Farr</td>
                        <td>110</td>
                        <td>Didymiaceae</td>
                    </tr>
                    <tr>
                        <td>Critchfield R.L.</td>
                        <td>715</td>
                        <td>Didymiaceae</td>
                    </tr>
                    <tr>
                        <td>Rammeloo J.</td>
                        <td>4572</td>
                        <td>Didymiaceae</td>
                    </tr>
                    <tr>
                        <th rowspan="3" scope="rowgroup">Horizontal title 2</th>
                        <td>Franz Heylemans</td>
                        <td>160</td>
                        <td>Onagraceae</td>
                    </tr>
                    <tr>
                        <td>Stam A.B.</td>
                        <td>477</td>
                        <td>Onagraceae</td>
                    </tr>
                    <tr>
                        <td>Van Hoeck Eddy</td>
                        <td>42</td>
                        <td>Onagraceae</td>
                    </tr>
                </tbody>
            </table>
        </vl-table-next>
    `);v.storyName="vl-table-next - joined row titles";let E=(0,d._7)(b,({hover:t,matrix:e,grid:a,zebra:d,uigZebra:l,collapsedM:r,collapsedS:i,collapsedXS:o})=>(0,n.qy)`
            <vl-table-next
                ?hover=${t}
                ?matrix=${e}
                ?grid=${a}
                ?zebra=${d}
                ?uig-zebra=${l}
                ?collapsed-m=${r}
                ?collapsed-s=${i}
                ?collapsed-xs=${o}
            >
                <table id="vl-data-table-with-expandable-details">
                    <caption>
                        Table with expandable details
                    </caption>
                    <thead>
                        <tr>
                            <th>Entry Header 1</th>
                            <th>Entry Header 2</th>
                            <th>Entry Header 3</th>
                            <th>Entry Header 4</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-title="Entry Header 1">Entry line 1</td>
                            <td data-title="Entry Header 2">Entry line 2</td>
                            <td data-title="Entry Header 3">Entry line 3</td>
                            <td data-title="Entry Header 4">Entry line 4</td>
                        </tr>
                        <tr data-details-id="details-row1">
                            <td data-title="details-title 1">Title 1: generic details</td>
                        </tr>
                        <tr>
                            <td data-title="Entry Header 1">Entry line 1</td>
                            <td data-title="Entry Header 2" colspan="2">Entry line 2</td>
                            <td data-title="Entry Header 3">Entry line 3</td>
                        </tr>
                        <tr data-details-id="details-row2">
                            <td data-title="details-title 2">Title 2: generic details</td>
                        </tr>
                        <tr id="multiple-cells">
                            <td data-title="Entry Header 1">Entry line 1</td>
                            <td data-title="Entry Header 2">Entry line 2</td>
                            <td data-title="Entry Header 3">Entry line 3</td>
                            <td data-title="Entry Header 4">Entry line 4</td>
                        </tr>
                        <tr data-details-id="details-row3">
                            <td data-title="details-title 3">Al die willen te kaap'ren varen:</td>
                            <td>*</td>
                            <td>*</td>
                            <td>*</td>
                        </tr>
                        <tr data-details-id="details-row3">
                            <td data-title="naam">Jan</td>
                            <td data-title="familienaam">familienaam</td>
                            <td data-title="telefoon">telefoon</td>
                            <td data-title="adres">adres</td>
                        </tr>
                        <tr data-details-id="details-row3">
                            <td data-title="naam">Piet</td>
                            <td data-title="familienaam">familienaam</td>
                            <td data-title="telefoon">telefoon</td>
                            <td data-title="adres">adres</td>
                        </tr>
                        <tr data-details-id="details-row3">
                            <td data-title="naam">Joris</td>
                            <td data-title="familienaam">familienaam</td>
                            <td data-title="telefoon">telefoon</td>
                            <td data-title="adres">adres</td>
                        </tr>
                        <tr data-details-id="details-row3">
                            <td data-title="naam">Korneel</td>
                            <td data-title="familienaam">familienaam</td>
                            <td data-title="telefoon">telefoon</td>
                            <td data-title="adres">adres</td>
                        </tr>
                    </tbody>
                </table>
            </vl-table-next>
        `);E.storyName="vl-table-next - expandable";let w=(0,d._7)(b,({hover:t,matrix:e,grid:a,zebra:d,uigZebra:l,collapsedM:r,collapsedS:i,collapsedXS:o})=>{let s;return customElements.whenDefined("vl-data-table").then(()=>{s=document.querySelector("#vl-table-with-custom-expandable-details")}),(0,n.qy)`
            <vl-table-next
                id="vl-table-with-custom-expandable-details"
                ?hover=${t}
                ?matrix=${e}
                ?grid=${a}
                ?zebra=${d}
                ?uig-zebra=${l}
                ?collapsed-m=${r}
                ?collapsed-s=${i}
                ?collapsed-xs=${o}
            >
                <table>
                    <caption>
                        Table
                    </caption>
                    <thead>
                        <tr>
                            <th>Entry Header 1</th>
                            <th data-title="Entry Header 2" colspan="2">Entry line 2</th>
                            <th>Entry Header 3</th>
                            <th>Entry Header 4</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-title="Entry Header 1">Entry line 1</td>
                            <td data-title="Entry Header 2">Entry line 2</td>
                            <td data-title="Entry Header 3">Entry line 3</td>
                            <td data-title="Entry Header 4">Entry line 4</td>
                            <td data-with-expand-details>
                                <button
                                    is="vl-button"
                                    @click=${()=>{console.log("clicked table",s),s?.toggleDetails("details-row1")}}
                                >
                                    click to toggle details
                                </button>
                            </td>
                        </tr>
                        <tr data-details-id="details-row1">
                            <td data-title="details-title 1" colspan="5">
                                <div>
                                    <ul>
                                        <li>Extra Details 1</li>
                                        <li>Extra Details 1</li>
                                        <li>Extra Details 1</li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td data-title="Entry Header 1">Entry line 1</td>
                            <td data-title="Entry Header 2" colspan="2">Entry line 2</td>
                            <td data-title="Entry Header 3">Entry line 3</td>
                        </tr>
                        <tr data-details-id="details-row2">
                            <td data-title="details-title 2" colspan="1">
                                <div>
                                    <ul>
                                        <li>Extra Details 2</li>
                                        <li>Extra Details 2</li>
                                        <li>Extra Details 2</li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td data-title="Entry Header 1">Entry line 1</td>
                            <td data-title="Entry Header 2">Entry line 2</td>
                            <td data-title="Entry Header 3">Entry line 3</td>
                            <td data-title="Entry Header 4">Entry line 4</td>
                        </tr>
                        <tr data-details-id="details-row3">
                            <td data-title="naam">Jan</td>
                            <td data-title="familienaam">familienaam</td>
                            <td data-title="telefoon">telefoon</td>
                            <td data-title="adres">adres</td>
                        </tr>
                        <tr data-details-id="details-row3">
                            <td data-title="naam">Piet</td>
                            <td data-title="familienaam">familienaam</td>
                            <td data-title="telefoon">telefoon</td>
                            <td data-title="adres">adres</td>
                        </tr>
                        <tr data-details-id="details-row3">
                            <td data-title="naam">Joris</td>
                            <td data-title="familienaam">familienaam</td>
                            <td data-title="telefoon">telefoon</td>
                            <td data-title="adres">adres</td>
                        </tr>
                        <tr data-details-id="details-row3">
                            <td data-title="naam">Korneel</td>
                            <td data-title="familienaam">familienaam</td>
                            <td data-title="telefoon">telefoon</td>
                            <td data-title="adres">adres</td>
                        </tr>
                    </tbody>
                </table>
            </vl-table-next>
        `});w.storyName="vl-table-next - expandable custom toggle details column",w.parameters={docs:{language:"html",source:{format:!0,type:"code"}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:'story(tableArgs, ({\n  hover,\n  matrix,\n  grid,\n  zebra,\n  uigZebra,\n  collapsedM,\n  collapsedS,\n  collapsedXS\n}) => html`\n        <vl-table-next\n            ?hover=${hover}\n            ?matrix=${matrix}\n            ?grid=${grid}\n            ?zebra=${zebra}\n            ?uig-zebra=${uigZebra}\n            ?collapsed-m=${collapsedM}\n            ?collapsed-s=${collapsedS}\n            ?collapsed-xs=${collapsedXS}\n        >\n            <table>\n                <caption>\n                    Meise Botanic Garden herbarium collections\n                </caption>\n                <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Collector</th>\n                        <th>Collector number</th>\n                        <th>Family</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <th rowspan="3">Didymium clavus</th>\n                        <td>Thomas H. &amp; Marie L. Farr</td>\n                        <td>110</td>\n                        <td>Didymiaceae</td>\n                    </tr>\n                    <tr>\n                        <td>Critchfield R.L.</td>\n                        <td>715</td>\n                        <td>Didymiaceae</td>\n                    </tr>\n                    <tr>\n                        <td>Rammeloo J.</td>\n                        <td>4572</td>\n                        <td>Didymiaceae</td>\n                    </tr>\n                    <tr>\n                        <th rowspan="3">Epilobium angustifolium</th>\n                        <td>Franz Heylemans</td>\n                        <td>160</td>\n                        <td>Onagraceae</td>\n                    </tr>\n                    <tr>\n                        <td>Stam A.B.</td>\n                        <td>477</td>\n                        <td>Onagraceae</td>\n                    </tr>\n                    <tr>\n                        <td>Van Hoeck Eddy</td>\n                        <td>42</td>\n                        <td>Onagraceae</td>\n                    </tr>\n                    <tr>\n                        <th rowspan="3">Euphorbia scordifolia</th>\n                        <td>Mission O. Olufsen</td>\n                        <td>125</td>\n                        <td>Euphorbiaceae</td>\n                    </tr>\n                    <tr>\n                        <td>Brunel J.F.</td>\n                        <td>7603</td>\n                        <td>Euphorbiaceae</td>\n                    </tr>\n                    <tr>\n                        <td>Bamps P.</td>\n                        <td>7549</td>\n                        <td>Euphorbiaceae</td>\n                    </tr>\n                    <tr>\n                        <th rowspan="3">Hemitrichia</th>\n                        <td>Madame F. Meyer</td>\n                        <td>198</td>\n                        <td>Trichiaceae</td>\n                    </tr>\n                    <tr>\n                        <td>Johannesen E.W.</td>\n                        <td>50B</td>\n                        <td>Trichiaceae</td>\n                    </tr>\n                    <tr>\n                        <td>Rammeloo J.</td>\n                        <td>9438</td>\n                        <td>Trichiaceae</td>\n                    </tr>\n                </tbody>\n                <tfoot>\n                    <tr>\n                        <td>\n                            <div class="vl-annotation">Table annotation</div>\n                        </td>\n                    </tr>\n                </tfoot>\n            </table>\n        </vl-table-next>\n    `)',...f.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:'story(tableArgs, ({\n  hover,\n  matrix,\n  grid,\n  zebra,\n  uigZebra,\n  collapsedM,\n  collapsedS,\n  collapsedXS\n}) => html`\n        <vl-table-next\n                ?hover=${hover}\n                ?matrix=${matrix}\n                ?grid=${grid}\n                ?zebra=${zebra}\n                ?uig-zebra=${uigZebra}\n                ?collapsed-m=${collapsedM}\n                ?collapsed-s=${collapsedS}\n                ?collapsed-xs=${collapsedXS}\n        >\n            <table>\n                <caption>\n                    Table Matrix - Joined row titles\n                </caption>\n                <thead>\n                    <tr>\n                        <th></th>\n                        <th></th>\n                        <th></th>\n                        <th></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <th rowspan="3" scope="rowgroup">Horizontal title 1</th>\n                        <td>Thomas H. &amp; Marie L. Farr</td>\n                        <td>110</td>\n                        <td>Didymiaceae</td>\n                    </tr>\n                    <tr>\n                        <td>Critchfield R.L.</td>\n                        <td>715</td>\n                        <td>Didymiaceae</td>\n                    </tr>\n                    <tr>\n                        <td>Rammeloo J.</td>\n                        <td>4572</td>\n                        <td>Didymiaceae</td>\n                    </tr>\n                    <tr>\n                        <th rowspan="3" scope="rowgroup">Horizontal title 2</th>\n                        <td>Franz Heylemans</td>\n                        <td>160</td>\n                        <td>Onagraceae</td>\n                    </tr>\n                    <tr>\n                        <td>Stam A.B.</td>\n                        <td>477</td>\n                        <td>Onagraceae</td>\n                    </tr>\n                    <tr>\n                        <td>Van Hoeck Eddy</td>\n                        <td>42</td>\n                        <td>Onagraceae</td>\n                    </tr>\n                </tbody>\n            </table>\n        </vl-table-next>\n    `)',...v.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:'story(tableArgs, ({\n  hover,\n  matrix,\n  grid,\n  zebra,\n  uigZebra,\n  collapsedM,\n  collapsedS,\n  collapsedXS\n}: typeof tableArgs) => {\n  return html`\n            <vl-table-next\n                ?hover=${hover}\n                ?matrix=${matrix}\n                ?grid=${grid}\n                ?zebra=${zebra}\n                ?uig-zebra=${uigZebra}\n                ?collapsed-m=${collapsedM}\n                ?collapsed-s=${collapsedS}\n                ?collapsed-xs=${collapsedXS}\n            >\n                <table id="vl-data-table-with-expandable-details">\n                    <caption>\n                        Table with expandable details\n                    </caption>\n                    <thead>\n                        <tr>\n                            <th>Entry Header 1</th>\n                            <th>Entry Header 2</th>\n                            <th>Entry Header 3</th>\n                            <th>Entry Header 4</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td data-title="Entry Header 1">Entry line 1</td>\n                            <td data-title="Entry Header 2">Entry line 2</td>\n                            <td data-title="Entry Header 3">Entry line 3</td>\n                            <td data-title="Entry Header 4">Entry line 4</td>\n                        </tr>\n                        <tr data-details-id="details-row1">\n                            <td data-title="details-title 1">Title 1: generic details</td>\n                        </tr>\n                        <tr>\n                            <td data-title="Entry Header 1">Entry line 1</td>\n                            <td data-title="Entry Header 2" colspan="2">Entry line 2</td>\n                            <td data-title="Entry Header 3">Entry line 3</td>\n                        </tr>\n                        <tr data-details-id="details-row2">\n                            <td data-title="details-title 2">Title 2: generic details</td>\n                        </tr>\n                        <tr id="multiple-cells">\n                            <td data-title="Entry Header 1">Entry line 1</td>\n                            <td data-title="Entry Header 2">Entry line 2</td>\n                            <td data-title="Entry Header 3">Entry line 3</td>\n                            <td data-title="Entry Header 4">Entry line 4</td>\n                        </tr>\n                        <tr data-details-id="details-row3">\n                            <td data-title="details-title 3">Al die willen te kaap\'ren varen:</td>\n                            <td>*</td>\n                            <td>*</td>\n                            <td>*</td>\n                        </tr>\n                        <tr data-details-id="details-row3">\n                            <td data-title="naam">Jan</td>\n                            <td data-title="familienaam">familienaam</td>\n                            <td data-title="telefoon">telefoon</td>\n                            <td data-title="adres">adres</td>\n                        </tr>\n                        <tr data-details-id="details-row3">\n                            <td data-title="naam">Piet</td>\n                            <td data-title="familienaam">familienaam</td>\n                            <td data-title="telefoon">telefoon</td>\n                            <td data-title="adres">adres</td>\n                        </tr>\n                        <tr data-details-id="details-row3">\n                            <td data-title="naam">Joris</td>\n                            <td data-title="familienaam">familienaam</td>\n                            <td data-title="telefoon">telefoon</td>\n                            <td data-title="adres">adres</td>\n                        </tr>\n                        <tr data-details-id="details-row3">\n                            <td data-title="naam">Korneel</td>\n                            <td data-title="familienaam">familienaam</td>\n                            <td data-title="telefoon">telefoon</td>\n                            <td data-title="adres">adres</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </vl-table-next>\n        `;\n})',...E.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:'story(tableArgs, ({\n  hover,\n  matrix,\n  grid,\n  zebra,\n  uigZebra,\n  collapsedM,\n  collapsedS,\n  collapsedXS\n}) => {\n  let table: (VlTableComponent & Element) | null;\n  customElements.whenDefined(\'vl-data-table\').then(() => {\n    table = document.querySelector<VlTableComponent & Element>(\'#vl-table-with-custom-expandable-details\');\n  });\n  return html`\n            <vl-table-next\n                id="vl-table-with-custom-expandable-details"\n                ?hover=${hover}\n                ?matrix=${matrix}\n                ?grid=${grid}\n                ?zebra=${zebra}\n                ?uig-zebra=${uigZebra}\n                ?collapsed-m=${collapsedM}\n                ?collapsed-s=${collapsedS}\n                ?collapsed-xs=${collapsedXS}\n            >\n                <table>\n                    <caption>\n                        Table\n                    </caption>\n                    <thead>\n                        <tr>\n                            <th>Entry Header 1</th>\n                            <th data-title="Entry Header 2" colspan="2">Entry line 2</th>\n                            <th>Entry Header 3</th>\n                            <th>Entry Header 4</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td data-title="Entry Header 1">Entry line 1</td>\n                            <td data-title="Entry Header 2">Entry line 2</td>\n                            <td data-title="Entry Header 3">Entry line 3</td>\n                            <td data-title="Entry Header 4">Entry line 4</td>\n                            <td data-with-expand-details>\n                                <button\n                                    is="vl-button"\n                                    @click=${() => {\n    console.log(\'clicked table\', table);\n    table?.toggleDetails(\'details-row1\');\n  }}\n                                >\n                                    click to toggle details\n                                </button>\n                            </td>\n                        </tr>\n                        <tr data-details-id="details-row1">\n                            <td data-title="details-title 1" colspan="5">\n                                <div>\n                                    <ul>\n                                        <li>Extra Details 1</li>\n                                        <li>Extra Details 1</li>\n                                        <li>Extra Details 1</li>\n                                    </ul>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td data-title="Entry Header 1">Entry line 1</td>\n                            <td data-title="Entry Header 2" colspan="2">Entry line 2</td>\n                            <td data-title="Entry Header 3">Entry line 3</td>\n                        </tr>\n                        <tr data-details-id="details-row2">\n                            <td data-title="details-title 2" colspan="1">\n                                <div>\n                                    <ul>\n                                        <li>Extra Details 2</li>\n                                        <li>Extra Details 2</li>\n                                        <li>Extra Details 2</li>\n                                    </ul>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td data-title="Entry Header 1">Entry line 1</td>\n                            <td data-title="Entry Header 2">Entry line 2</td>\n                            <td data-title="Entry Header 3">Entry line 3</td>\n                            <td data-title="Entry Header 4">Entry line 4</td>\n                        </tr>\n                        <tr data-details-id="details-row3">\n                            <td data-title="naam">Jan</td>\n                            <td data-title="familienaam">familienaam</td>\n                            <td data-title="telefoon">telefoon</td>\n                            <td data-title="adres">adres</td>\n                        </tr>\n                        <tr data-details-id="details-row3">\n                            <td data-title="naam">Piet</td>\n                            <td data-title="familienaam">familienaam</td>\n                            <td data-title="telefoon">telefoon</td>\n                            <td data-title="adres">adres</td>\n                        </tr>\n                        <tr data-details-id="details-row3">\n                            <td data-title="naam">Joris</td>\n                            <td data-title="familienaam">familienaam</td>\n                            <td data-title="telefoon">telefoon</td>\n                            <td data-title="adres">adres</td>\n                        </tr>\n                        <tr data-details-id="details-row3">\n                            <td data-title="naam">Korneel</td>\n                            <td data-title="familienaam">familienaam</td>\n                            <td data-title="telefoon">telefoon</td>\n                            <td data-title="adres">adres</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </vl-table-next>\n        `;\n})',...w.parameters?.docs?.source}}};let j=["TableDefault","TableJoinedRowTitles","TableExpandable","TableExpandableCustomToggleDetailsColumn"]},"../../node_modules/react-dom/client.js":(t,e,a)=>{var d=a("../../node_modules/react-dom/index.js");e.createRoot=d.createRoot,e.hydrateRoot=d.hydrateRoot},"../../libs/components/src/next/button/index.ts":(t,e,a)=>{a.d(e,{Y:()=>d.Y});var d=a("../../libs/components/src/next/button/vl-button.component.ts")}}]);