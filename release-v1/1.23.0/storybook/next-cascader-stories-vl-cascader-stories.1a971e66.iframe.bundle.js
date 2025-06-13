(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[4698],{"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(e,a,t)=>{"use strict";t.d(a,{NF:()=>l,Zo:()=>c,ah:()=>s,pC:()=>r});var n=t("./node_modules/react/index.js");let r=n.createContext({});function l(e){return function(a){let t=s(a.components);return n.createElement(e,{...a,allComponents:t})}}function s(e){let a=n.useContext(r);return n.useMemo(()=>"function"==typeof e?e(a):{...a,...e},[a,e])}let i={};function c({components:e,children:a,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||i:s(e),n.createElement(r.Provider,{value:l},a)}},"./libs/components/src/next/cascader/stories/vl-cascader.stories.ts":(e,a,t)=>{"use strict";t.r(a),t.d(a,{CascaderDefault:()=>y,CascaderDynamicTemplating:()=>j,CascaderItemSlots:()=>w,CascaderPropertyBinding:()=>x,CascaderSideSheet:()=>f,__namedExportsOrder:()=>k,default:()=>b});var n=t("./libs/common/storybook/src/index.ts"),r=t("./node_modules/lit/index.js"),l=t("./node_modules/lit-html/lit-html.js"),s=t("./node_modules/lit/directives/unsafe-html.js");t("./libs/components/src/next/cascader/vl-cascader.component.ts");var i=t("./libs/components/src/next/cascader/vl-cascader.model.ts");let c={...n._O,breadcrumbPlaceholder:"",level:0,contentSlot:"",homeSlot:"",hideBreadcrumb:!1,loading:!1,itemListFn:null,items:null,label:i.L.LABEL_MISSING,labelSlot:"",loadingMessage:i.L.LOADING,templates:null},d={...(0,n.Wp)(!0),breadcrumbPlaceholder:{name:i.r.BREADCRUMB_PLACEHOLDER,description:"Hiermee kan je een breadcrumb placeholder instellen. Zichtbaar wanneer breadcrumb niet zichtbaar is.",table:{type:{summary:n.vK.HTML},category:n.aA.SLOTS,defaultValue:{summary:c.breadcrumbPlaceholder}}},contentSlot:{name:i.r.CONTENT,description:"Element op de `vl-cascader-item` component. Komt onder het label.",table:{type:{summary:n.vK.HTML},category:n.aA.CHILD_SLOTS,defaultValue:{summary:c.contentSlot}}},level:{name:"level",description:"Huidige niveau in de hiërarchie.\n\nDit attribuut kan je aanpassen om terug te gaan naar een lager niveau.",table:{type:{summary:n.vK.NUMBER},category:n.aA.ATTRIBUTES,defaultValue:{summary:c.level}}},homeSlot:{name:i.r.HOME,description:"Hiermee kan je het `"+i.r.HOME+"`-slot instellen.",table:{type:{summary:n.vK.HTML},category:n.aA.SLOTS,defaultValue:{summary:c.homeSlot}}},hideBreadcrumb:{name:"hide-breadcrumb",description:"Verbergt breadcrumb navigatie.",table:{type:{summary:n.vK.BOOLEAN},category:n.aA.ATTRIBUTES,defaultValue:{summary:c.hideBreadcrumb}}},loading:{name:"loading",description:"Geeft weer dat data wordt geladen. Is reactief.",table:{type:{summary:n.vK.BOOLEAN},category:n.aA.ATTRIBUTES,defaultValue:{summary:c.loading}}},itemListFn:{name:"itemListFn",description:"Laat toe om een promise mee te geven wanneer dynamisch data moet opgehaald. Dit werkt enkel in combinatie met de `nodes`-property waarbij `requestParams` ingesteld staan.\n\nKan niet aangepast worden in Storybook. \n\n Raadpleeg de [documentatie](?path=/docs/components-next-cascader--cascader-default#cascader-met-dynamisch-ophalen-van-kind-elementen) voor meer info.",control:!1,table:{disable:!0,type:{summary:n.vK.FUNCTION},category:n.aA.PROPERTIES,defaultValue:{summary:c.itemListFn}}},items:{name:"nodes",description:"Om de data-structuur van de cascader programmatorisch in te stellen.\n\n Raadpleeg [documentatie](?path=/docs/components-next-cascader--cascader-property-binding#cascader-met-property-binding) voor meer info.",table:{disable:!0,type:{summary:n.vK.ARRAY},category:n.aA.PROPERTIES,defaultValue:{summary:c.items}}},label:{name:"label",description:"Label attribuut op de `vl-cascader-item` component. Dit bepaalt ook het label in de breadcrumb navigatie.",table:{type:{summary:n.vK.STRING},category:n.aA.CHILD_ATTRIBUTES,defaultValue:{summary:c.label}},type:{name:n.vK.STRING,required:!0}},labelSlot:{name:i.r.LABEL,description:"Label slot op de `vl-cascader-item` component. Klik op deze inhoud zal de kind elementen weergeven.",table:{type:{summary:n.vK.HTML},category:n.aA.CHILD_SLOTS,defaultValue:{summary:c.labelSlot}}},loadingMessage:{name:"loading-message",description:"De boodschap die getoond wordt wanneer items aan het laden zijn.",table:{type:{summary:n.vK.STRING},category:n.aA.ATTRIBUTES,defaultValue:{summary:c.loadingMessage}}},templates:{name:"templates",description:"Laat toe om alternatieve templates for de cascader-items in te stellen.\n\nKan niet aangepast worden in Storybook.\n\n Raadpleeg [documentatie](?path=/docs/components-next-cascader--cascader-dynamic-templating#dynamische-templates) voor meer info.",control:!1,table:{disable:!0,type:{summary:n.vK.MAP},category:n.aA.PROPERTIES,defaultValue:{summary:c.templates}}}};t("./node_modules/react/index.js");var o=t("./node_modules/react/jsx-runtime.js"),m=t("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),v=t("./node_modules/@storybook/blocks/dist/index.mjs");function u(e){let a=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",ul:"ul",li:"li",a:"a"},(0,m.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.h1,{id:"cascader",children:"Cascader"}),"\n",(0,o.jsxs)(a.p,{children:["Gebruik de ",(0,o.jsx)(a.code,{children:"cascader"})," component om hiërarchische data weer te geven als een drilldown van lijsten."]}),"\n",(0,o.jsx)(a.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-js",children:"import { VlCascaderComponent } from '@domg-wc/components';\n"})}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-html",children:'<vl-cascader>\n    <vl-cascader-item label="Provincie: West-Vlaanderen">\n        <vl-cascader-item label="Gemeente: Damme">\n            <vl-cascader-item label="Deelgemeente - Moerkerke">\n                <vl-cascader-item label="Dorp - Moerkerke"></vl-cascader-item>\n                <vl-cascader-item label="Dorp - Sint-Rita"></vl-cascader-item>\n            </vl-cascader-item>\n            <vl-cascader-item label="Deelgemeente - Sint-Kruis"></vl-cascader-item>\n        </vl-cascader-item>\n        <vl-cascader-item label="Gemeente: Brugge"></vl-cascader-item>\n    </vl-cascader-item>\n    <vl-cascader-item label="Provincie: Oost-Vlaanderen">\n        <vl-cascader-item label="Gemeente: Gent"></vl-cascader-item>\n        <vl-cascader-item label="Gemeente: Lokeren"></vl-cascader-item>\n    </vl-cascader-item>\n</vl-cascader>\n'})}),"\n",(0,o.jsx)(v.Xz,{of:y}),"\n",(0,o.jsx)(a.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,o.jsx)(v.Ed,{of:y}),"\n",(0,o.jsx)(a.h2,{id:"standaard-gedrag",children:"Standaard gedrag"}),"\n",(0,o.jsxs)(a.p,{children:["Wanneer er kind-elementen beschikbaar zijn onder een bepaalde component, tonen we een ",(0,o.jsx)(a.code,{children:">"}),"-icon om aan te geven dat er\nnog verder geselecteerd kan worden."]}),"\n",(0,o.jsxs)(a.p,{children:["De ",(0,o.jsx)(a.code,{children:"vl-cascader-item"})," vereist een ",(0,o.jsx)(a.code,{children:"label"})," attribuut, ook wanneer ",(0,o.jsx)(a.code,{children:"label"})," slot wordt gebruikt. Deze label wordt gebruikt\nom de breadcrumb op te bouwen."]}),"\n",(0,o.jsx)(a.h2,{id:"standaard-gebruik",children:"Standaard gebruik"}),"\n",(0,o.jsxs)(a.p,{children:["Standaard kan je ",(0,o.jsx)(a.code,{children:"cascader"})," component structuur opbouwen door geneste ",(0,o.jsx)(a.code,{children:"cascader-item"})," componenten te definiëren. Zie\nbovenstaand voorbeeld."]}),"\n",(0,o.jsx)(a.h2,{id:"cascader-met-property-binding",children:"Cascader met property binding"}),"\n",(0,o.jsxs)(a.p,{children:["Het is ook mogelijk de data-structuur op te bouwen met een array van type ",(0,o.jsx)(a.code,{children:"CascaderItem[]"})]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-html",children:"<vl-cascader .items=${cascaderItems}>...</vl-cascader>\n"})}),"\n",(0,o.jsxs)("details",{children:[(0,o.jsx)("summary",{children:"CascaderItem-model"}),(0,o.jsx)(v.Hw,{code:`
    export interface CascaderItem {
        label: string;
        templateType?: string;
        children?: CascaderItem[]; // niveau dat hoort onder deze component
        narrowDown?: unknown; // gebruikt voor het dynamisch ophalen van onderliggende niveau's
        data?: {
            [key: string]: unknown;
        };
    }
    `,language:"ts",dark:!0,format:!0})]}),"\n",(0,o.jsxs)("details",{children:[(0,o.jsx)("summary",{children:"voorbeeld CascaderItem-array opzet"}),(0,o.jsx)(v.Hw,{code:"export const nodeData = [\n    {\n        label: 'Vlaanderen',\n        children: [\n            {\n                label: 'Antwerpen',\n                templateType: 'provincie',\n                children: [\n                    {\n                        label: 'Niveau 2 - A',\n                        children: [\n                            {\n                                label: 'Niveau 3 - A',\n                                children: [\n                                    {\n                                        label: 'Niveau 4 - A'\n                                    },\n                                    {\n                                        label: 'Niveau 4 - B'\n                                    }\n                                ]\n                            },\n                            {\n                                label: 'Niveau 3 - B'\n                            }\n                        ]\n                    },\n                    {\n                        label: 'Niveau 2 - B'\n                    },\n                    {\n                        label: 'Berchem'\n                    }\n                ]\n            },\n            {\n                label: 'Brussel',\n                templateType: 'provincie',\n                narrowDown: true,\n                data: {\n                    requestParams: 'Niveau-id'\n                }\n            },\n            {\n                label: 'Limburg',\n                templateType: 'provincie',\n                children: [\n                    {\n                        label: 'Hasselt'\n                    },\n                    {\n                        label: 'Zonhoven'\n                    },\n                    {\n                        label: 'Lummen'\n                    },\n                    {\n                        label: 'Halen'\n                    },\n                    {\n                        label: 'Tongeren'\n                    }\n                ]\n            },\n            {\n                label: 'Vlaams-Brabant',\n                templateType: 'provincie',\n                narrowDown: true,\n                data: {\n                    requestParams: 'Niveau-id'\n                }\n            }\n        ]\n    },\n    {\n        label: 'Wallonië'\n    }\n];\n",language:"ts",dark:!0,format:!0})]}),"\n",(0,o.jsx)(v.Xz,{of:x}),"\n",(0,o.jsx)(a.h2,{id:"inhoud-van-de-nodes-aanpassen",children:"Inhoud van de nodes aanpassen"}),"\n",(0,o.jsx)(a.p,{children:"Voor bepaalde use-cases kan het belangrijk zijn dat je zelf inhoud kan bepalen."}),"\n",(0,o.jsx)(a.p,{children:"Dit kan op verschillende manieren:"}),"\n",(0,o.jsx)(a.h3,{id:"cascaderitem---slots",children:"CascaderItem - Slots"}),"\n",(0,o.jsxs)(a.p,{children:["Bij een ",(0,o.jsx)(a.code,{children:"vl-cascader-item"}),", kan je de slots invullen voor ",(0,o.jsx)(a.code,{children:"content"})," en/of ",(0,o.jsx)(a.code,{children:"label"})]}),"\n",(0,o.jsx)(v.Xz,{of:w}),"\n",(0,o.jsx)(a.h3,{id:"cascader-met-dynamisch-ophalen-van-kind-elementen",children:"Cascader met dynamisch ophalen van kind-elementen"}),"\n",(0,o.jsxs)(a.p,{children:["Het is ook mogelijk de data-structuur dynamisch op te bouwen door een ",(0,o.jsx)(a.code,{children:"Promise<CascaderItem[]>"})," of functie te definiëren\ndie als argument de ",(0,o.jsx)(a.code,{children:"requestParams"}),"-property gebruikt om een nieuw niveau op te halen."]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-html",children:"<vl-cascader .itemListFn=${fetchNodes}>...</vl-cascader>\n"})}),"\n",(0,o.jsxs)("details",{children:[(0,o.jsx)("summary",{children:"voorbeeld itemListFn opzet"}),(0,o.jsx)(v.Hw,{code:"export const getItemList = async (item)=>{\n    const { data } = item;\n    const requestParams = data?.requestParams;\n    // hier kan een API request gedefinieerd worden\n    await new Promise((res)=>setTimeout(res, 3000));\n    return [\n        {\n            label: requestParams + ' ' + new Date().getHours(),\n            children: [\n                {\n                    label: requestParams + ' ' + new Date().getMinutes(),\n                    children: [\n                        {\n                            label: requestParams + ' ' + new Date().getMilliseconds(),\n                            narrowDown: true,\n                            data: {\n                                requestParams: 'Niveau-deeper'\n                            }\n                        },\n                        {\n                            label: '[- ' + requestParams + ' -]',\n                            templateType: 'provincie'\n                        }\n                    ]\n                },\n                {\n                    label: requestParams + ' ' + new Date().getMinutes()\n                }\n            ]\n        },\n        {\n            label: requestParams + ' ' + new Date().getMinutes(),\n            children: [\n                {\n                    label: requestParams + ' ' + new Date().getMilliseconds(),\n                    narrowDown: true,\n                    data: {\n                        requestParams: 'Niveau-deeper'\n                    }\n                },\n                {\n                    label: '[- ' + requestParams + ' -]',\n                    templateType: 'provincie'\n                }\n            ]\n        },\n        {\n            label: requestParams + ' ' + new Date().getMinutes()\n        }\n    ];\n};\n",language:"ts",dark:!0,format:!0})]}),"\n",(0,o.jsx)(a.h3,{id:"dynamische-templates",children:"Dynamische templates"}),"\n",(0,o.jsx)(a.p,{children:"Laat toe om alternatieve templates for de cascader-items in te stellen."}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsxs)(a.li,{children:["Dit werkt enkel wanneer op de ",(0,o.jsx)(a.code,{children:"vl-cascader-item"}),", de respectievelijke ",(0,o.jsx)(a.code,{children:"template-type"})," ingesteld staat."]}),"\n",(0,o.jsxs)(a.li,{children:["Wanneer je ",(0,o.jsx)(a.a,{href:"#cascader-met-property-binding",children:"property-binding"})," gebruikt om de structuur op te bouwen, dan stel je op het ",(0,o.jsx)(a.code,{children:"CascaderItem"}),"-object,\nhet gewenste ",(0,o.jsx)(a.code,{children:"templateType"})," in"]}),"\n"]}),"\n",(0,o.jsx)(a.p,{children:"Hieronder vind je een voorbeeld hoe je je eigen templates kan configureren:"}),"\n",(0,o.jsxs)("details",{children:[(0,o.jsx)("summary",{children:"voorbeeld templates opzet"}),(0,o.jsx)(v.Hw,{code:"import { html } from 'lit-html';\nimport { nothing } from 'lit';\nexport const cascaderItemTemplates = new Map([\n    [\n        'provincie',\n        (item, processNarrowDown)=>{\n            const hasChildren = item.children || item.narrowDown;\n            return html`\n                <div class=\"vl-cascader-item\">\n                    <h3>${item.label}</h3>\n                    <a\n                        is=\"vl-link\"\n                        class=\"vl-link--bold vl-cascader-link space-between\"\n                        @click=${()=>processNarrowDown(item)}\n                    >\n                        <span>\n                            ${item.children ? 'Bekijk deelgemeentes ' : item.narrowDown ? 'Haal deelgemeentes op' : 'Actie'}\n                            ${item.children?.length ? html` <vl-annotation>( ${item.children.length} )</vl-annotation> ` : nothing}\n                        </span>\n                        ${hasChildren ? html` <span is=\"vl-icon\" data-vl-icon=\"arrow-right-fat\"></span> ` : ''}\n                    </a>\n                </div>\n            `;\n        }\n    ]\n]);\n",language:"ts",dark:!0,format:!0})]}),"\n",(0,o.jsxs)(a.p,{children:["!!! Belangrijk als je wil dat je in de component verder kan navigeren, dat je in de callback een argument bepaalt van\ntype ",(0,o.jsx)(a.code,{children:"NarrowDownFn"}),". Deze laat toe om de onderliggende kind-elementen te tonen."]}),"\n",(0,o.jsxs)(a.p,{children:["Vervolgens kan je een ",(0,o.jsx)(a.code,{children:"Map<string, TemplateFn>"})," meegeven aan de ",(0,o.jsx)(a.code,{children:"templates"}),"-property."]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-html",children:"<vl-cascader .templates=${templates}>...</vl-cascader>\n"})}),"\n",(0,o.jsx)(a.p,{children:"Hieronder vind je een uitgewerkt voorbeeld van bovenstaande methodes waarin templates & slots worden gebruikt:"}),"\n",(0,o.jsx)(v.Xz,{of:j}),"\n",(0,o.jsx)(a.h2,{id:"variaties",children:"Variaties"}),"\n",(0,o.jsx)(a.h3,{id:"cascader-in-een-sidesheet",children:"Cascader in een SideSheet"}),"\n",(0,o.jsxs)(a.p,{children:["Hieronder een voorbeeld van de cascader binnen een ",(0,o.jsx)(a.code,{children:"vl-side-sheet"})," component."]}),"\n",(0,o.jsx)(v.Xz,{of:f}),"\n",(0,o.jsx)(a.h2,{id:"referenties",children:"Referenties"}),"\n",(0,o.jsx)(a.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/vue-documentation/?path=/story/components-vl-sidebar--sidebar-advanced",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Cascader"})})]})}let p=async e=>{let{data:a}=e,t=a?.requestParams;return await new Promise(e=>setTimeout(e,3e3)),[{label:t+" "+new Date().getHours(),children:[{label:t+" "+new Date().getMinutes(),children:[{label:t+" "+new Date().getMilliseconds(),narrowDown:!0,data:{requestParams:"Niveau-deeper"}},{label:"[- "+t+" -]",templateType:"provincie"}]},{label:t+" "+new Date().getMinutes()}]},{label:t+" "+new Date().getMinutes(),children:[{label:t+" "+new Date().getMilliseconds(),narrowDown:!0,data:{requestParams:"Niveau-deeper"}},{label:"[- "+t+" -]",templateType:"provincie"}]},{label:t+" "+new Date().getMinutes()}]},h=new Map([["provincie",(e,a)=>{let t=e.children||e.narrowDown;return(0,l.dy)`
                <div class="vl-cascader-item">
                    <h3>${e.label}</h3>
                    <a
                        is="vl-link"
                        class="vl-link--bold vl-cascader-link space-between"
                        @click=${()=>a(e)}
                    >
                        <span>
                            ${e.children?"Bekijk deelgemeentes ":e.narrowDown?"Haal deelgemeentes op":"Actie"}
                            ${e.children?.length?(0,l.dy)` <vl-annotation>( ${e.children.length} )</vl-annotation> `:r.Ld}
                        </span>
                        ${t?(0,l.dy)` <span is="vl-icon" data-vl-icon="arrow-right-fat"></span> `:""}
                    </a>
                </div>
            `}]]),b={title:"Components-next/cascader",tags:["autodocs"],args:c,argTypes:d,parameters:{docs:{page:function(e={}){let{wrapper:a}=Object.assign({},(0,m.ah)(),e.components);return a?(0,o.jsx)(a,Object.assign({},e,{children:(0,o.jsx)(u,e)})):u(e)}}}},g=e=>(0,l.dy)` <div style="width: 600px;margin: auto auto;">${e()}</div>`,y=(0,n.yg)(c,({level:e,loadingMessage:a,loading:t,hideBreadcrumb:n})=>(0,l.dy)`
        <vl-cascader
            level="${e}"
            hide-breadcrumb="${n}"
            loading="${t}"
            loading-message="${a}"
        >
            <vl-cascader-item label="Provincie: West-Vlaanderen">
                <vl-cascader-item label="Gemeente: Damme">
                    <vl-cascader-item label="Deelgemeente - Moerkerke">
                        <vl-cascader-item label="Dorp - Moerkerke"></vl-cascader-item>
                        <vl-cascader-item label="Dorp - Sint-Rita"></vl-cascader-item>
                    </vl-cascader-item>
                    <vl-cascader-item label="Deelgemeente - Sint-Kruis"></vl-cascader-item>
                </vl-cascader-item>
                <vl-cascader-item label="Gemeente: Brugge"></vl-cascader-item>
            </vl-cascader-item>
            <vl-cascader-item label="Provincie: Oost-Vlaanderen">
                <vl-cascader-item label="Gemeente: Gent"></vl-cascader-item>
                <vl-cascader-item label="Gemeente: Lokeren"></vl-cascader-item>
            </vl-cascader-item>
        </vl-cascader>
    `);y.storyName="vl-cascader - default",y.decorators=[g],y.parameters={controls:{exclude:["content","label","labelSlot"]}};let f=(0,n.yg)(c,({breadcrumbPlaceholder:e,level:a,loadingMessage:t,loading:n,hideBreadcrumb:i,homeSlot:c})=>(0,l.dy)`
            <vl-side-sheet
                data-vl-left
                data-vl-custom-css=".vl-layout {padding:0} .vl-region{padding:0} .vl-region:first-child{padding:0} :host #vl-side-sheet {padding:0} :host {--vl-side-sheet-width: 600px;}"
                data-vl-open
            >
                <vl-cascader
                    level="${a}"
                    hide-breadcrumb="${i}"
                    loading="${n}"
                    loading-message="${t}"
                >
                    ${c?(0,s.A)(c):r.Ld}
                    ${e?(0,s.A)(e):r.Ld}
                    <vl-cascader-item label="Provincie: West-Vlaanderen">
                        <vl-cascader-item label="Gemeente: Damme">
                            <vl-cascader-item label="Deelgemeente - Moerkerke">
                                <vl-cascader-item label="Dorp - Moerkerke"></vl-cascader-item>
                                <vl-cascader-item label="Dorp - Sint-Rita"></vl-cascader-item>
                            </vl-cascader-item>
                            <vl-cascader-item label="Deelgemeente - Sint-Kruis"></vl-cascader-item>
                        </vl-cascader-item>
                        <vl-cascader-item label="Gemeente: Brugge"></vl-cascader-item>
                    </vl-cascader-item>
                    <vl-cascader-item label="Provincie: Oost-Vlaanderen">
                        <vl-cascader-item label="Gemeente - Gent"></vl-cascader-item>
                        <vl-cascader-item label="Gemeente - Lokeren"></vl-cascader-item>
                    </vl-cascader-item>
                </vl-cascader>
            </vl-side-sheet>
        `);f.storyName="vl-cascader - side-sheet",f.args={breadcrumbPlaceholder:'<vl-autocomplete placeholder="Zoek..." slot="breadcrumb-placeholder"></vl-autocomplete>'},f.parameters={controls:{exclude:["content","label","labelSlot"]}};let j=(0,n.yg)(c,({level:e,loadingMessage:a,loading:t,hideBreadcrumb:n,templates:r})=>(0,l.dy)`
            <vl-cascader
                level="${e}"
                hide-breadcrumb="${n}"
                loading="${t}"
                loading-message="${a}"
                .templates=${r}
            >
                <vl-cascader-item label="Provincie: West-Vlaanderen" template-type="provincie">
                    <vl-info-tile data-vl-toggleable="" slot="content">
                        <span slot="title">Meer Info</span>
                        <span slot="subtitle">Provincie Beschrijving</span>
                        <div slot="content">
                            Het is de meest westelijk gelegen provincie van Vlaanderen en België en is de enige
                            Belgische provincie die aan de Noordzee ligt. De provincie heeft een oppervlakte van 3.197
                            km² en telt ruim 1,2 miljoen inwoners. De hoofdstad van West-Vlaanderen is Brugge.
                        </div>
                    </vl-info-tile>
                    <vl-cascader-item label="Gemeente: Damme">
                        <vl-cascader-item label="Deelgemeente - Moerkerke">
                            <vl-cascader-item label="Dorp - Moerkerke"></vl-cascader-item>
                            <vl-cascader-item label="Dorp - Sint-Rita"></vl-cascader-item>
                        </vl-cascader-item>
                    </vl-cascader-item>
                    <vl-cascader-item label="Gemeente: Brugge">
                        <vl-cascader-item label="Deelgemeente - Sint-Kruis"></vl-cascader-item>
                    </vl-cascader-item>
                    <vl-cascader-item label="Gemeente: Kortrijk">
                        <vl-cascader-item label="Dorp - Waereghem"></vl-cascader-item>
                    </vl-cascader-item>
                </vl-cascader-item>
                <vl-cascader-item label="Provincie: Oost-Vlaanderen" template-type="provincie">
                    <h3 is="vl-h3" slot="label">Provincie: Oost-Vlaanderen</h3>
                    <vl-info-tile data-vl-toggleable="" slot="content">
                        <span slot="title">Meer Info</span>
                        <span slot="subtitle">Provincie Beschrijving</span>
                        <div slot="content">
                            Zij grenst in het westen aan de provincie West-Vlaanderen, in het noorden aan de Nederlandse
                            provincie Zeeland met Zeeuws-Vlaanderen, in het oosten aan de provincies Antwerpen en
                            Vlaams-Brabant, en in het zuiden aan het Waalse Henegouwen. Zij ligt dus niet in het oosten
                            van de huidige Belgische deelstaat Vlaanderen die pas na 1830 ontstond.
                        </div>
                    </vl-info-tile>
                    <vl-cascader-item label="Gemeente: Gent"></vl-cascader-item>
                    <vl-cascader-item label="Gemeente: Lokeren"></vl-cascader-item>
                </vl-cascader-item>
            </vl-cascader>
        `);j.storyName="vl-cascader - dynamic templating",j.decorators=[g],j.argTypes={templates:{table:{disable:!1}}},j.args={templates:h},j.parameters={controls:{exclude:["content","label","labelSlot"]}};let x=(0,n.yg)(c,({items:e})=>(0,l.dy)`
        <vl-cascader .items=${e} .itemListFn=${p} .templates=${h}></vl-cascader>
    `);x.storyName="vl-cascader - property binding",x.decorators=[g],x.parameters={controls:{include:["itemListFn","items","templates"]}},x.argTypes={itemListFn:{table:{disable:!1}},items:{table:{disable:!1}},templates:{table:{disable:!1}}},x.args={items:[{label:"Vlaanderen",children:[{label:"Antwerpen",templateType:"provincie",children:[{label:"Niveau 2 - A",children:[{label:"Niveau 3 - A",children:[{label:"Niveau 4 - A"},{label:"Niveau 4 - B"}]},{label:"Niveau 3 - B"}]},{label:"Niveau 2 - B"},{label:"Berchem"}]},{label:"Brussel",templateType:"provincie",narrowDown:!0,data:{requestParams:"Niveau-id"}},{label:"Limburg",templateType:"provincie",children:[{label:"Hasselt"},{label:"Zonhoven"},{label:"Lummen"},{label:"Halen"},{label:"Tongeren"}]},{label:"Vlaams-Brabant",templateType:"provincie",narrowDown:!0,data:{requestParams:"Niveau-id"}}]},{label:"Wallonië"}]},x.parameters={controls:{exclude:["content","label","labelSlot"]}};let w=(0,n.yg)(c,({breadcrumbPlaceholder:e,contentSlot:a,homeSlot:t,label:n,labelSlot:i})=>(0,l.dy)`
            <vl-cascader>
                ${t?(0,s.A)(t):r.Ld}
                ${e?(0,s.A)(e):r.Ld}
                <vl-cascader-item label=${n}>
                    ${(0,s.A)(i)} ${(0,s.A)(a)}
                    <vl-cascader-item label="Gemeente">
                        <vl-cascader-item label="Stad"></vl-cascader-item>
                    </vl-cascader-item>
                </vl-cascader-item>
            </vl-cascader>
        `);w.storyName="vl-cascader-item - slots",w.parameters={controls:{include:["breadcrumbPlaceholder","content","homeSlot","label","labelSlot"]}},w.args={breadcrumbPlaceholder:'<vl-breadcrumb slot="breadcrumb-placeholder"><vl-breadcrumb-item>Vlaanderen</vl-breadcrumb-item>',contentSlot:'<p slot="content"> Het is de meest westelijk gelegen provincie van Vlaanderen en België en is de enige Belgische provincie die aan de Noordzee ligt. De provincie heeft een oppervlakte van 3.197 km² en telt ruim 1,2 miljoen inwoners. De hoofdstad van West-Vlaanderen is Brugge. </p>',homeSlot:'<p slot="home">Vlaanderen</p>',label:"West-Vlaanderen",labelSlot:'<h5 is="vl-h5" data-vl-has-border="" data-vl-alt="" data-vl-no-space-bottom="" slot="label">Provincie: West-Vlaanderen</h5>'},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:'story(cascaderArgs, ({\n  level,\n  loadingMessage,\n  loading,\n  hideBreadcrumb\n}) => {\n  return html`\n        <vl-cascader\n            level="${level}"\n            hide-breadcrumb="${hideBreadcrumb}"\n            loading="${loading}"\n            loading-message="${loadingMessage}"\n        >\n            <vl-cascader-item label="Provincie: West-Vlaanderen">\n                <vl-cascader-item label="Gemeente: Damme">\n                    <vl-cascader-item label="Deelgemeente - Moerkerke">\n                        <vl-cascader-item label="Dorp - Moerkerke"></vl-cascader-item>\n                        <vl-cascader-item label="Dorp - Sint-Rita"></vl-cascader-item>\n                    </vl-cascader-item>\n                    <vl-cascader-item label="Deelgemeente - Sint-Kruis"></vl-cascader-item>\n                </vl-cascader-item>\n                <vl-cascader-item label="Gemeente: Brugge"></vl-cascader-item>\n            </vl-cascader-item>\n            <vl-cascader-item label="Provincie: Oost-Vlaanderen">\n                <vl-cascader-item label="Gemeente: Gent"></vl-cascader-item>\n                <vl-cascader-item label="Gemeente: Lokeren"></vl-cascader-item>\n            </vl-cascader-item>\n        </vl-cascader>\n    `;\n})',...y.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:'story(cascaderArgs, ({\n  breadcrumbPlaceholder,\n  level,\n  loadingMessage,\n  loading,\n  hideBreadcrumb,\n  homeSlot\n}) => {\n  return html`\n            <vl-side-sheet\n                data-vl-left\n                data-vl-custom-css=".vl-layout {padding:0} .vl-region{padding:0} .vl-region:first-child{padding:0} :host #vl-side-sheet {padding:0} :host {--vl-side-sheet-width: 600px;}"\n                data-vl-open\n            >\n                <vl-cascader\n                    level="${level}"\n                    hide-breadcrumb="${hideBreadcrumb}"\n                    loading="${loading}"\n                    loading-message="${loadingMessage}"\n                >\n                    ${homeSlot ? unsafeHTML(homeSlot) : nothing}\n                    ${breadcrumbPlaceholder ? unsafeHTML(breadcrumbPlaceholder) : nothing}\n                    <vl-cascader-item label="Provincie: West-Vlaanderen">\n                        <vl-cascader-item label="Gemeente: Damme">\n                            <vl-cascader-item label="Deelgemeente - Moerkerke">\n                                <vl-cascader-item label="Dorp - Moerkerke"></vl-cascader-item>\n                                <vl-cascader-item label="Dorp - Sint-Rita"></vl-cascader-item>\n                            </vl-cascader-item>\n                            <vl-cascader-item label="Deelgemeente - Sint-Kruis"></vl-cascader-item>\n                        </vl-cascader-item>\n                        <vl-cascader-item label="Gemeente: Brugge"></vl-cascader-item>\n                    </vl-cascader-item>\n                    <vl-cascader-item label="Provincie: Oost-Vlaanderen">\n                        <vl-cascader-item label="Gemeente - Gent"></vl-cascader-item>\n                        <vl-cascader-item label="Gemeente - Lokeren"></vl-cascader-item>\n                    </vl-cascader-item>\n                </vl-cascader>\n            </vl-side-sheet>\n        `;\n})',...f.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:'story(cascaderArgs, ({\n  level,\n  loadingMessage,\n  loading,\n  hideBreadcrumb,\n  templates\n}) => {\n  return html`\n            <vl-cascader\n                level="${level}"\n                hide-breadcrumb="${hideBreadcrumb}"\n                loading="${loading}"\n                loading-message="${loadingMessage}"\n                .templates=${templates}\n            >\n                <vl-cascader-item label="Provincie: West-Vlaanderen" template-type="provincie">\n                    <vl-info-tile data-vl-toggleable="" slot="content">\n                        <span slot="title">Meer Info</span>\n                        <span slot="subtitle">Provincie Beschrijving</span>\n                        <div slot="content">\n                            Het is de meest westelijk gelegen provincie van Vlaanderen en België en is de enige\n                            Belgische provincie die aan de Noordzee ligt. De provincie heeft een oppervlakte van 3.197\n                            km² en telt ruim 1,2 miljoen inwoners. De hoofdstad van West-Vlaanderen is Brugge.\n                        </div>\n                    </vl-info-tile>\n                    <vl-cascader-item label="Gemeente: Damme">\n                        <vl-cascader-item label="Deelgemeente - Moerkerke">\n                            <vl-cascader-item label="Dorp - Moerkerke"></vl-cascader-item>\n                            <vl-cascader-item label="Dorp - Sint-Rita"></vl-cascader-item>\n                        </vl-cascader-item>\n                    </vl-cascader-item>\n                    <vl-cascader-item label="Gemeente: Brugge">\n                        <vl-cascader-item label="Deelgemeente - Sint-Kruis"></vl-cascader-item>\n                    </vl-cascader-item>\n                    <vl-cascader-item label="Gemeente: Kortrijk">\n                        <vl-cascader-item label="Dorp - Waereghem"></vl-cascader-item>\n                    </vl-cascader-item>\n                </vl-cascader-item>\n                <vl-cascader-item label="Provincie: Oost-Vlaanderen" template-type="provincie">\n                    <h3 is="vl-h3" slot="label">Provincie: Oost-Vlaanderen</h3>\n                    <vl-info-tile data-vl-toggleable="" slot="content">\n                        <span slot="title">Meer Info</span>\n                        <span slot="subtitle">Provincie Beschrijving</span>\n                        <div slot="content">\n                            Zij grenst in het westen aan de provincie West-Vlaanderen, in het noorden aan de Nederlandse\n                            provincie Zeeland met Zeeuws-Vlaanderen, in het oosten aan de provincies Antwerpen en\n                            Vlaams-Brabant, en in het zuiden aan het Waalse Henegouwen. Zij ligt dus niet in het oosten\n                            van de huidige Belgische deelstaat Vlaanderen die pas na 1830 ontstond.\n                        </div>\n                    </vl-info-tile>\n                    <vl-cascader-item label="Gemeente: Gent"></vl-cascader-item>\n                    <vl-cascader-item label="Gemeente: Lokeren"></vl-cascader-item>\n                </vl-cascader-item>\n            </vl-cascader>\n        `;\n})',...j.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"story(cascaderArgs, ({\n  items\n}) => {\n  return html`\n        <vl-cascader .items=${items} .itemListFn=${getItemList} .templates=${cascaderItemTemplates}></vl-cascader>\n    `;\n})",...x.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:'story(cascaderArgs, ({\n  breadcrumbPlaceholder,\n  contentSlot,\n  homeSlot,\n  label,\n  labelSlot\n}) => {\n  return html`\n            <vl-cascader>\n                ${homeSlot ? unsafeHTML(homeSlot) : nothing}\n                ${breadcrumbPlaceholder ? unsafeHTML(breadcrumbPlaceholder) : nothing}\n                <vl-cascader-item label=${label}>\n                    ${unsafeHTML(labelSlot)} ${unsafeHTML(contentSlot)}\n                    <vl-cascader-item label="Gemeente">\n                        <vl-cascader-item label="Stad"></vl-cascader-item>\n                    </vl-cascader-item>\n                </vl-cascader-item>\n            </vl-cascader>\n        `;\n})',...w.parameters?.docs?.source}}};let k=["CascaderDefault","CascaderSideSheet","CascaderDynamicTemplating","CascaderPropertyBinding","CascaderItemSlots"]},"./node_modules/lit-html/directive.js":(e,a,t)=>{"use strict";t.d(a,{XM:()=>r,Xe:()=>l,pX:()=>n});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},r=e=>function(){for(var a=arguments.length,t=Array(a),n=0;n<a;n++)t[n]=arguments[n];return{_$litDirective$:e,values:t}};class l{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,a,t){this._$Ct=e,this._$AM=a,this._$Ci=t}_$AS(e,a){return this.update(e,a)}update(e,a){return this.render(...a)}}},"./node_modules/lit/decorators.js":(e,a,t)=>{"use strict";t.d(a,{Mo:()=>n,Cb:()=>d});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n=e=>(a,t)=>{void 0!==t?t.addInitializer(()=>{customElements.define(e,a)}):customElements.define(e,a)},r=t("./node_modules/lit/node_modules/@lit/reactive-element/reactive-element.js");function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach(function(a){!function(e,a,t){(a=function(e){var a=function(e,a){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,a||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(e)}(e,"string");return"symbol"==typeof a?a:String(a)}(a))in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t}(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var i={attribute:!0,type:String,converter:r.Ts,reflect:!1,hasChanged:r.Qu},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,a=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,{kind:n,metadata:r}=t,l=globalThis.litPropertyMetadata.get(r);if(void 0===l&&globalThis.litPropertyMetadata.set(r,l=new Map),l.set(t.name,e),"accessor"===n){var{name:s}=t;return{set(t){var n=a.get.call(this);a.set.call(this,t),this.requestUpdate(s,n,e)},init(a){return void 0!==a&&this.C(s,void 0,e),a}}}if("setter"===n){var{name:c}=t;return function(t){var n=this[c];a.call(this,t),this.requestUpdate(c,n,e)}}throw Error("Unsupported decorator location: "+n)};function d(e){return(a,t)=>"object"==typeof t?c(e,a,t):((e,a,t)=>{var n=a.hasOwnProperty(t);return a.constructor.createProperty(t,n?s(s({},e),{},{wrapped:!0}):e),n?Object.getOwnPropertyDescriptor(a,t):void 0})(e,a,t)}},"./node_modules/lit/directives/class-map.js":(e,a,t)=>{"use strict";t.d(a,{$:()=>l});var n=t("./node_modules/lit-html/lit-html.js"),r=t("./node_modules/lit-html/directive.js"),l=(0,r.XM)(class extends r.Xe{constructor(e){var a;if(super(e),e.type!==r.pX.ATTRIBUTE||"class"!==e.name||(null===(a=e.strings)||void 0===a?void 0:a.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(a=>e[a]).join(" ")+" "}update(e,a){var[t]=a;if(void 0===this.it){for(var r in this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[r]&&!(null!==(c=this.st)&&void 0!==c&&c.has(r))&&this.it.add(r);return this.render(t)}var l=e.element.classList;for(var s of this.it)s in t||(l.remove(s),this.it.delete(s));for(var i in t){var c,d,o=!!t[i];o===this.it.has(i)||(null===(d=this.st)||void 0===d?void 0:d.has(i))||(o?(l.add(i),this.it.add(i)):(l.remove(i),this.it.delete(i)))}return n.Jb}})},"./node_modules/lit/directives/unsafe-html.js":(e,a,t)=>{"use strict";t.d(a,{A:()=>s});var n=t("./node_modules/lit-html/lit-html.js"),r=t("./node_modules/lit-html/directive.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class l extends r.Xe{constructor(e){if(super(e),this.et=n.Ld,e.type!==r.pX.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===n.Ld||null==e)return this.vt=void 0,this.et=e;if(e===n.Jb)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;var a=[e];return a.raw=a,this.vt={_$litType$:this.constructor.resultType,strings:a,values:[]}}}l.directiveName="unsafeHTML",l.resultType=1;var s=(0,r.XM)(l)},"./node_modules/memoizerific sync recursive":e=>{function a(e){var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}a.keys=()=>[],a.resolve=a,a.id="./node_modules/memoizerific sync recursive",e.exports=a},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,a,t)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=t("./node_modules/react/index.js"),r=Symbol.for("react.element"),l=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,a,t){var n,l={},d=null,o=null;for(n in void 0!==t&&(d=""+t),void 0!==a.key&&(d=""+a.key),void 0!==a.ref&&(o=a.ref),a)s.call(a,n)&&!c.hasOwnProperty(n)&&(l[n]=a[n]);if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===l[n]&&(l[n]=a[n]);return{$$typeof:r,type:e,key:d,ref:o,props:l,_owner:i.current}}a.Fragment=l,a.jsx=d,a.jsxs=d},"./node_modules/react/jsx-runtime.js":(e,a,t)=>{"use strict";e.exports=t("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./libs/components/src/next/cascader/vl-cascader-item.component.ts":(e,a,t)=>{"use strict";t.d(a,{D:()=>m});var n=t("./node_modules/lit/index.js"),r=t("./libs/common/utilities/src/index.ts"),l=t("./node_modules/lit/decorators.js"),s=t("./node_modules/@domg/govflanders-style/common/index.js"),i=t("./libs/elements/src/index.ts");let c=(0,n.iv)`
    :host {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
    }

    .space-between {
        justify-content: space-between;
        align-items: center;
    }

    .vl-cascader-link {
        display: flex;
        min-height: 4rem;
        align-items: center;
        width: 100%;
    }
`;var d=t("./libs/components/src/next/cascader/vl-cascader.model.ts"),o=t("./libs/components/src/next/cascader/vl-cascader.utils.ts");class m extends r.fS{static get properties(){return{label:{type:String},templateType:{type:String,attribute:"template-type"},item:{type:Object}}}static get styles(){return[s.YN,i.CX,c]}connectedCallback(){super.connectedCallback(),this.updateItemData()}updateItemData(){null!=this.label&&(this.item.label=this.label,this.item.templateType=this.templateType)}render(){let e;let a=this.cascaderRef,t=!!o.hZ(this,d.r.LABEL)?.length,{templateType:r}=this.item;return r&&a?e=(0,o.F4)(this.item,a):a&&(e=(0,o.lB)(this.item,a,t)),a&&e?(0,n.dy)`${e} ${(0,n.dy)`<slot name="content"></<slot>`}`:(0,n.dy)`${t?(0,n.dy)`<slot name="label"></slot>`:(0,o.GV)(this.item)}<slot name="content"></<slot>`}constructor(...e){super(...e),this.item={label:d.L.LABEL_MISSING},this.label=d.L.LABEL_MISSING}}m=function(e,a,t,n){var r,l=arguments.length,s=l<3?a:null===n?n=Object.getOwnPropertyDescriptor(a,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,a,t,n);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(l<3?r(s):l>3?r(a,t,s):r(a,t))||s);return l>3&&s&&Object.defineProperty(a,t,s),s}([(0,l.Mo)("vl-cascader-item")],m)},"./libs/components/src/next/cascader/vl-cascader.component.ts":(e,a,t)=>{"use strict";var n=t("./node_modules/lit/index.js"),r=t("./libs/common/utilities/src/index.ts"),l=t("./node_modules/lit/decorators.js"),s=t("./node_modules/@domg/govflanders-style/common/index.js"),i=t("./libs/elements/src/index.ts"),c=t("./node_modules/@domg/govflanders-style/component/index.js");let d=(0,n.iv)`
    :host {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    div.content {
        overflow: hidden;
    }

    div.content section {
        transition: transform 0.3s;
        position: relative;
        display: flex;
        flex-direction: column;
        align-content: space-between;
        left: 0;
        right: 0;
        opacity: 1;
        width: 100%;
        padding: 0 1.5rem 0.5rem 1.5rem;
    }

    div.content section.slide-in {
        animation: slideIn 0.3s ease-in-out;
    }
    div.content section.slide-out {
        animation: slideOut 0.3s ease-in-out;
    }

    @keyframes slideIn {
        from {
            left: 100%;
        }
        to {
            left: 0;
        }
    }

    @keyframes slideOut {
        from {
            left: -100%;
        }
        to {
            left: 0;
        }
    }

    .vl-breadcrumb-placeholder {
        padding: 0.5rem 1.5rem;
        min-height: 4rem;
        border-bottom: 1px solid rgb(203, 210, 218);
        display: flex;
        align-items: center;
    }

    .vl-breadcrumb {
        padding: 0.5rem 1.5rem;
        min-height: 4rem;
        border-bottom: 1px solid rgb(203, 210, 218);
    }

    .vl-breadcrumb__list__item__cta {
        display: flex;
        align-items: center;
        position: relative;
        top: -1px;
    }

    .vl-breadcrumb__list__item__separator {
        justify-content: center;
    }

    .vl-breadcrumb__list__item__cta:hover {
        text-decoration: none;
    }

    .vl-breadcrumb__list__item .vl-vi {
        text-decoration: none;
    }

    vl-loader {
        padding-top: 2rem;
    }

    .vl-cascader-link {
        display: flex;
        min-height: 4rem;
        align-items: center;
        width: 100%;
    }

    .vl-cascader-item,
    vl-cascader-item {
        padding: 1rem 0;
        display: flex;
        flex-direction: column;
    }

    .vl-cascader-item:not(:last-child),
    vl-cascader-item:not(:last-child) {
        border-bottom: 1px solid #cbd2da;
    }

    .space-between {
        justify-content: space-between;
    }
`;var o=t("./node_modules/lit/directives/class-map.js"),m=t("./libs/components/src/next/cascader/vl-cascader.utils.ts"),v=t("./libs/components/src/next/cascader/vl-cascader.model.ts"),u=t("./libs/components/src/next/cascader/vl-cascader-item.component.ts");class p extends r.fS{static{(0,r.YV)([u.D])}static get properties(){return{level:{type:Number,attribute:"level",reflect:!0},hideBreadcrumb:{type:Boolean,attribute:"hide-breadcrumb",reflect:!0},loadingMessage:{type:String,attribute:"loading-message",reflect:!0},isLoading:{type:Boolean,attribute:"loading",reflect:!0},itemListFn:{type:Function},nodeData:{type:Array,state:!0},templates:{type:Map}}}static get styles(){return[s.YN,i.CX,c.nC,d]}connectedCallback(){super.connectedCallback(),this.setData()}isDeclarativeMode(){return!this.items||!this.items.length}set items(e){this.nodeData=e}get items(){return this.nodeData}setData(){let e=this.traverseTreeAndMapItems(this);this.isDeclarativeMode()&&e?.length?this.nodeData=e:this.nodeData=this.items}pushItemStack(e,a){e&&a&&(this.level=this.navigationLevelStack.push(a),this.breadCrumbHistory.push({label:e,index:this.level}))}popItemStack(){this.nodeData=this.navigationLevelStack.pop()||[],this.level=(this.breadCrumbHistory.pop()?.index||1)-1}goBack(){this.isLoading||(this.navigationLevelStack.length>0&&(this.slidingOut=!0,this.popItemStack()),this.requestUpdate())}jumpToLevel(e){if(this.isLoading)return;let a=this.navigationLevelStack.length-e;a>0&&Array.from({length:a}).map(()=>{this.goBack()})}renderBreadcrumb(){let e=this.breadCrumbHistory?.length,a=!!m.hZ(this,v.r.BREADCRUMB_PLACEHOLDER)?.length;return(0,n.dy)`
            ${e&&!this.hideBreadcrumb?(0,n.dy)`
                      <nav aria-label="U bent hier: " class="vl-breadcrumb">
                          <ol class="vl-breadcrumb__list">
                              ${this.renderBreadcrumbHome()} ${this.breadCrumbHistory?.map(this.renderBreadcrumbItem)}
                          </ol>
                      </nav>
                  `:a||!this.hideBreadcrumb?(0,n.dy)`
                      <nav class="vl-breadcrumb-placeholder">
                          <slot name="breadcrumb-placeholder"></slot>
                      </nav>
                  `:n.Ld}
        `}defaultItemTemplate(e){return(0,m.lB)(e,this)}updated(e){super.updated(e),e.has("level")?this.jumpToLevel(this.level):e.has("items")&&(this.nodeData=this.items)}render(){let e={"slide-in":this.slidingIn&&!this.slidingOut,"slide-out":this.slidingOut&&!this.slidingIn};return(0,n.dy)`
            <div>
                ${this.renderBreadcrumb()}
                <div class="content">
                    <section class=${(0,o.$)(e)} @animationend=${this.handleAnimationEnd}>
                        ${this.isLoading?(0,n.dy)` <vl-loader data-vl-text=${this.loadingMessage}></vl-loader> `:this.nodeData?.map(this.renderItem)}
                    </section>
                </div>
            </div>
        `}handleAnimationEnd(){this.slidingIn=!1,this.slidingOut=!1,this.requestUpdate()}constructor(...e){super(...e),this.navigationLevelStack=[],this.nodeData=[],this.breadCrumbHistory=[],this.slidingIn=!1,this.slidingOut=!1,this.hideBreadcrumb=!1,this.level=0,this.isLoading=!1,this.loadingMessage=v.L.LOADING,this.declarativeMode=!1,this.processNarrowDown=async e=>{if(this.isLoading)return;let{label:a,children:t,narrowDown:n}=e;t?.length?(this.pushItemStack(a,this.nodeData),this.nodeData=t,this.slidingIn=!0,this.requestUpdate()):n&&this.itemListFn&&(this.isLoading=!0,this.pushItemStack(a,this.nodeData),this.requestUpdate(),this.nodeData=await this.itemListFn(e),this.isLoading=!1,this.slidingIn=!0,this.requestUpdate())},this.renderBreadcrumbHome=()=>{let e=!!m.hZ(this,v.r.HOME)?.length;return(0,n.dy)`
            <li class="vl-breadcrumb__list__item">
                <span class="vl-breadcrumb__list__item__separator" aria-hidden="true"></span>
                ${e?(0,n.dy)`
                              <span
                                  @click=${()=>this.jumpToLevel(0)}
                                  class="vl-breadcrumb__list__item__cta vl-breadcrumb-home-slot"
                              >
                                  <slot name="home"></slot>
                              </span>
                          `:(0,n.dy)`
                              <span
                                  is="vl-icon"
                                  data-vl-icon="places-home"
                                  class="vl-breadcrumb__list__item__cta"
                                  @click=${()=>this.jumpToLevel(0)}
                              ></span>
                          `}
                </span>
            </li>
        `},this.renderBreadcrumbItem=({label:e,index:a})=>{let t=this.breadCrumbHistory?.length;return(0,n.dy)`
            <li class="vl-breadcrumb__list__item ${(0,o.$)({"vl-breadcrumb__list__item--deactivated":t===a})}">
                <span class="vl-breadcrumb__list__item__separator" aria-hidden="true"></span>
                <span class="vl-breadcrumb__list__item__cta" @click=${()=>this.jumpToLevel(a)}>${e}</span>
            </li>
        `},this.renderItem=e=>{let a=(0,m.F4)(e,this);return e.component?e.component:a||this.defaultItemTemplate(e)},this.getChildCascaderNodes=e=>e.querySelectorAll(":scope > vl-cascader-item"),this.traverseTreeAndMapItems=e=>{let a=this.getChildCascaderNodes(e),t=[];return a.forEach(e=>{let a=this.traverseTreeAndMapItems(e);e.item.children=a,e.cascaderRef=this,t.push({...e.item,label:e.label,component:e,children:a})}),t}}}p=function(e,a,t,n){var r,l=arguments.length,s=l<3?a:null===n?n=Object.getOwnPropertyDescriptor(a,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,a,t,n);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(l<3?r(s):l>3?r(a,t,s):r(a,t))||s);return l>3&&s&&Object.defineProperty(a,t,s),s}([(0,l.Mo)("vl-cascader")],p)},"./libs/components/src/next/cascader/vl-cascader.model.ts":(e,a,t)=>{"use strict";t.d(a,{L:()=>n,r:()=>r});let n={LOADING:"Aan het laden",LABEL_MISSING:"geen label"},r={BREADCRUMB_PLACEHOLDER:"breadcrumb-placeholder",CONTENT:"content",HOME:"home",LABEL:"label"}},"./libs/components/src/next/cascader/vl-cascader.utils.ts":(e,a,t)=>{"use strict";t.d(a,{F4:()=>s,GV:()=>c,hZ:()=>l,lB:()=>i});var n=t("./node_modules/lit/index.js"),r=t("./node_modules/lit/directives/class-map.js");let l=(e,a)=>e?.querySelectorAll(`:scope > [slot=${a}]`),s=(e,a)=>{let{templateType:t}=e;if(!a)return;let{templates:n}=a;if(t&&n&&n instanceof Map){let r=n.get(t);return r&&r(e,a.processNarrowDown)}},i=(e,a,t=!1)=>{let l={"vl-cascader-item":!a.isDeclarativeMode()};return(0,n.dy)`
        <div
            class=${(0,r.$)(l)}
            @click=${t=>{a?.processNarrowDown(e)}}
        >
            ${t?(0,n.dy)`<slot name="label">${e.label}</slot>`:c(e)}
        </div>
    `},c=e=>{let a=e.children&&e.children.length||e.narrowDown;return(0,n.dy)`
        <a is="vl-link" class="vl-link--bold vl-cascader-link ${(0,r.$)({"space-between":!!a})}">
            <span>${e.label}</span> ${a?(0,n.dy)` <span is="vl-icon" data-vl-icon="arrow-right-fat"></span> `:""}
        </a>
    `}}}]);