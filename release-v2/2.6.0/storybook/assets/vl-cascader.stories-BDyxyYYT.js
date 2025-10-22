import{K as l,L as s,cN as T,I as B,bQ as b,H as V,u as f,j as e,C as h,bd as P,S as g,x as v,T as k,s as j,r as $,ca as M,b8 as C}from"./iframe-Ds54rb_7.js";import{o as x}from"./unsafe-html-CgayEJ4y.js";import"./preload-helper-D9Z9MdNV.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,r={...B,...T,homeSlot:"",headerSlot:"",onVlClickBreadcrumb:L("vl-click-breadcrumb")},N={...V,headerText:{name:"header-text",description:"Hiermee kan je de tekst instellen voor de header.",table:{type:{summary:s.STRING},category:l.ATTRIBUTES,defaultValue:{summary:r.headerText}}},headerSlot:{name:b.HEADER,description:"Hiermee kan je de standaard header vervangen door een header naar keuze.",table:{type:{summary:s.HTML},category:l.SLOTS,defaultValue:{summary:r.headerSlot}}},breadcrumbPlaceholder:{name:b.BREADCRUMB_PLACEHOLDER,description:"Hiermee kan je een breadcrumb placeholder instellen. Zichtbaar wanneer breadcrumb niet zichtbaar is.",table:{type:{summary:s.HTML},category:l.SLOTS,defaultValue:{summary:r.breadcrumbPlaceholder}}},level:{name:"level",description:`Huidige niveau in de hiërarchie.

Dit attribuut kan je aanpassen om terug te gaan naar een lager niveau.`,table:{type:{summary:s.NUMBER},category:l.ATTRIBUTES,defaultValue:{summary:String(r.level)}}},homeSlot:{name:b.HOME,description:"Hiermee kan je het `"+b.HOME+"`-slot instellen.",table:{type:{summary:s.HTML},category:l.SLOTS,defaultValue:{summary:r.homeSlot}}},hideBreadcrumb:{name:"hide-breadcrumb",description:"Verbergt breadcrumb navigatie.",table:{type:{summary:s.BOOLEAN},category:l.ATTRIBUTES,defaultValue:{summary:String(r.hideBreadcrumb)}}},loading:{name:"loading",description:"Geeft weer dat data wordt geladen. Is reactief.",table:{type:{summary:s.BOOLEAN},category:l.ATTRIBUTES,defaultValue:{summary:String(r.loading)}}},itemListFn:{name:"itemListFn",description:"Laat toe om een promise mee te geven wanneer dynamisch data moet opgehaald. Dit werkt enkel in combinatie met de `nodes`-property waarbij `requestParams` ingesteld staan.\n\nKan niet aangepast worden in Storybook. \n\n Raadpleeg de [documentatie](?path=/docs/components-cascader--cascader-default#cascader-met-dynamisch-ophalen-van-kind-elementen) voor meer info.",control:!1,table:{disable:!0,type:{summary:s.FUNCTION},category:l.PROPERTIES,defaultValue:{summary:String(r.itemListFn)}}},items:{name:"nodes",description:`Om de data-structuur van de cascader programmatorisch in te stellen.

 Raadpleeg [documentatie](?path=/docs/components-cascader--cascader-property-binding#cascader-met-property-binding) voor meer info.`,table:{disable:!0,type:{summary:s.ARRAY},category:l.PROPERTIES,defaultValue:{summary:String(r.items)}}},loadingMessage:{name:"loading-message",description:"De boodschap die getoond wordt wanneer items aan het laden zijn.",table:{type:{summary:s.STRING},category:l.ATTRIBUTES,defaultValue:{summary:r.loadingMessage}}},templates:{name:"templates",description:`Laat toe om alternatieve templates voor de cascader-items in te stellen.

Kan niet aangepast worden in Storybook.

 Raadpleeg de documentatie voor meer informatie.`,control:!1,table:{disable:!0,type:{summary:s.MAP},category:l.PROPERTIES,defaultValue:{summary:String(r.templates)}}},onVlClickBreadcrumb:{name:"vl-click-breadcrumb",description:"Event dat afgevuurd wordt als op een breadcrumb item wordt geklikt.<br>Het detail object van het event bevat het gekozen niveau en het label van de breadcrumb.",table:{type:{summary:"{ index: number, label?: string }"},category:l.EVENTS}}},I=`import { TemplateFn } from '../vl-cascader.model';
import { html } from 'lit-html';
import { nothing } from 'lit';

export const cascaderItemTemplates = new Map<string, TemplateFn>([
    [
        'provincie',
        (item, processNarrowDown) => {
            const hasChildren = item.children || item.narrowDown;
            const childrenAnnotation = html\`Bekijk deelgemeentes
            \${item.children?.length
                ? html\` <vl-text annotation>( \${item.children.length} )</vl-text> \`
                : 'Bekijk deelgemeentes '}\`;
            return html\`
                <div class="vl-cascader-item">
                    <vl-title type="h3">\${item.label}</vl-title>
                    <vl-link
                        bold
                        button-as-link
                        icon="\${hasChildren ? 'arrow-right-fat' : nothing}"
                        icon-placement="after"
                        class="vl-cascader-link"
                        @click=\${() => processNarrowDown(item)}
                    >
                        <span>
                            \${item.children ? childrenAnnotation : item.narrowDown ? 'Haal deelgemeentes op' : 'Actie'}
                        </span>
                    </vl-link>
                </div>
            \`;
        },
    ],
]);
`,A=`import { CascaderItem } from '../vl-cascader.model';

export const nodeData: CascaderItem[] = [
    {
        label: 'Vlaanderen',
        children: [
            {
                label: 'Antwerpen',
                templateType: 'provincie',
                children: [
                    {
                        label: 'Niveau 2 - A',
                        children: [
                            {
                                label: 'Niveau 3 - A',
                                children: [
                                    {
                                        label: 'Niveau 4 - A',
                                    },
                                    {
                                        label: 'Niveau 4 - B',
                                    },
                                ],
                            },
                            {
                                label: 'Niveau 3 - B',
                            },
                        ],
                    },
                    {
                        label: 'Niveau 2 - B',
                    },
                    {
                        label: 'Berchem',
                    },
                ],
            },
            {
                label: 'Brussel',
                templateType: 'provincie',
                narrowDown: true,
                data: {
                    requestParams: 'Niveau-id',
                },
            },
            {
                label: 'Limburg',
                templateType: 'provincie',
                children: [
                    {
                        label: 'Hasselt',
                    },
                    {
                        label: 'Zonhoven',
                    },
                    {
                        label: 'Lummen',
                    },
                    {
                        label: 'Halen',
                    },
                    {
                        label: 'Tongeren',
                    },
                ],
            },
            {
                label: 'Vlaams-Brabant',
                templateType: 'provincie',
                narrowDown: true,
                data: {
                    requestParams: 'Niveau-id',
                },
            },
        ],
    },
    {
        label: 'Wallonië',
    },
];
`,G=`import { ItemListFn, CascaderItem } from '../vl-cascader.model';

export const getItemList: ItemListFn = async (item: CascaderItem): Promise<CascaderItem[]> => {
    const { data } = item;
    const requestParams = data?.requestParams;
    // hier kan een API request gedefinieerd worden
    await new Promise((res) => setTimeout(res, 3000));
    return [
        {
            label: requestParams + ' ' + new Date().getHours(),
            children: [
                {
                    label: requestParams + ' ' + new Date().getMinutes(),
                    children: [
                        {
                            label: requestParams + ' ' + new Date().getMilliseconds(),
                            narrowDown: true,
                            data: {
                                requestParams: 'Niveau-deeper',
                            },
                        },
                        {
                            label: '[- ' + requestParams + ' -]',
                            templateType: 'provincie',
                        },
                    ],
                },
                {
                    label: requestParams + ' ' + new Date().getMinutes(),
                },
            ],
        },
        {
            label: requestParams + ' ' + new Date().getMinutes(),
            children: [
                {
                    label: requestParams + ' ' + new Date().getMilliseconds(),
                    narrowDown: true,
                    data: {
                        requestParams: 'Niveau-deeper',
                    },
                },
                {
                    label: '[- ' + requestParams + ' -]',
                    templateType: 'provincie',
                },
            ],
        },
        {
            label: requestParams + ' ' + new Date().getMinutes(),
        },
    ];
};
`;function D(n){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...f(),...n.components},{FluxMetaData:t}=a;return t||R("FluxMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"cascader",children:"Cascader"}),`
`,e.jsx(t,{id:"components-block-cascader-cascader"}),`
`,e.jsxs(a.p,{children:["Gebruik de ",e.jsx(a.code,{children:"cascader"})," component om hiërarchische data weer te geven als een drilldown van lijsten."]}),`
`,e.jsx(a.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-js",children:`import { VlCascaderComponent } from '@domg-wc/components/block';
`})}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-html",children:`<vl-cascader>
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
`})}),`
`,e.jsx(h,{of:o}),`
`,e.jsx(a.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(P,{of:o}),`
`,e.jsx(a.h2,{id:"standaard-gedrag",children:"Standaard gedrag"}),`
`,e.jsxs(a.p,{children:["Wanneer er kind-elementen beschikbaar zijn onder een bepaalde component, tonen we een ",e.jsx(a.code,{children:">"}),`-icon om aan te geven dat er
nog verder geselecteerd kan worden.`]}),`
`,e.jsxs(a.p,{children:["De ",e.jsx(a.code,{children:"vl-cascader-item"})," vereist een ",e.jsx(a.code,{children:"label"})," attribuut, ook wanneer ",e.jsx(a.code,{children:"label"}),` slot wordt gebruikt. Deze label wordt gebruikt
om de breadcrumb op te bouwen.`]}),`
`,e.jsx(a.h2,{id:"standaard-gebruik",children:"Standaard gebruik"}),`
`,e.jsxs(a.p,{children:["Standaard kan je ",e.jsx(a.code,{children:"cascader"})," component structuur opbouwen door geneste ",e.jsx(a.code,{children:"cascader-item"}),` componenten te definiëren. Zie
bovenstaand voorbeeld.`]}),`
`,e.jsx(a.h2,{id:"cascader-met-property-binding",children:"Cascader met property binding"}),`
`,e.jsxs(a.p,{children:["Het is ook mogelijk de data-structuur op te bouwen met een array van type ",e.jsx(a.code,{children:"CascaderItem[]"})]}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-html",children:"<vl-cascader .items=${cascaderItems}>...</vl-cascader>\n"})}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"CascaderItem-model"}),e.jsx(g,{code:`
  export interface CascaderItem {
      label: string;
      templateType?: string;
      children?: CascaderItem[]; // niveau dat hoort onder deze component
      narrowDown?: unknown; // gebruikt voor het dynamisch ophalen van onderliggende niveau's
      data?: {
          [key: string]: unknown;
      };
  }
  `,language:"ts",dark:!0,format:!0})]}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"voorbeeld CascaderItem-array opzet"}),e.jsx(g,{code:A,language:"ts",dark:!0,format:!0})]}),`
`,e.jsx(h,{of:i}),`
`,e.jsx(a.h2,{id:"inhoud-van-de-nodes-aanpassen",children:"Inhoud van de nodes aanpassen"}),`
`,e.jsx(a.p,{children:"Voor bepaalde use-cases kan het belangrijk zijn dat je zelf inhoud kan bepalen."}),`
`,e.jsx(a.p,{children:"Dit kan op verschillende manieren:"}),`
`,e.jsx(a.h3,{id:"cascaderitem---slots",children:"CascaderItem - Slots"}),`
`,e.jsxs(a.p,{children:["Bij een ",e.jsx(a.code,{children:"vl-cascader-item"}),", kan je de slots invullen voor ",e.jsx(a.code,{children:"content"})," en/of ",e.jsx(a.code,{children:"label"})]}),`
`,e.jsxs(a.p,{children:["Zie de story onder ",e.jsx(a.a,{href:"/docs/components-block-cascader-cascader-item--documentatie",children:"vl-cascader-item"})," voor een voorbeeld."]}),`
`,e.jsx(a.h3,{id:"cascader-met-dynamisch-ophalen-van-kind-elementen",children:"Cascader met dynamisch ophalen van kind-elementen"}),`
`,e.jsxs(a.p,{children:["Het is ook mogelijk de data-structuur dynamisch op te bouwen door een ",e.jsx(a.code,{children:"Promise<CascaderItem[]>"}),` of functie te definiëren
die als argument de `,e.jsx(a.code,{children:"requestParams"}),"-property gebruikt om een nieuw niveau op te halen."]}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-html",children:"<vl-cascader .itemListFn=${fetchNodes}>...</vl-cascader>\n"})}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"voorbeeld itemListFn opzet"}),e.jsx(g,{code:G,language:"ts",dark:!0,format:!0})]}),`
`,e.jsx(a.h3,{id:"dynamische-templates",children:"Dynamische templates"}),`
`,e.jsx(a.p,{children:"Laat toe om alternatieve templates voor de cascader-items in te stellen."}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:["Dit werkt enkel wanneer op de ",e.jsx(a.code,{children:"vl-cascader-item"}),", de respectievelijke ",e.jsx(a.code,{children:"template-type"})," ingesteld staat."]}),`
`,e.jsxs(a.li,{children:["Wanneer je ",e.jsx(a.a,{href:"#cascader-met-property-binding",children:"property-binding"})," gebruikt om de structuur op te bouwen, dan stel je op het ",e.jsx(a.code,{children:"CascaderItem"}),`-object,
het gewenste `,e.jsx(a.code,{children:"templateType"})," in"]}),`
`]}),`
`,e.jsx(a.p,{children:"Hieronder vind je een voorbeeld hoe je je eigen templates kan configureren:"}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"voorbeeld templates opzet"}),e.jsx(g,{code:I,language:"ts",dark:!0,format:!0})]}),`
`,e.jsxs(a.p,{children:[`!!! Belangrijk als je wil dat je in de component verder kan navigeren, dat je in de callback een argument bepaalt van
type `,e.jsx(a.code,{children:"NarrowDownFn"}),". Deze laat toe om de onderliggende kind-elementen te tonen."]}),`
`,e.jsxs(a.p,{children:["Vervolgens kan je een ",e.jsx(a.code,{children:"Map<string, TemplateFn>"})," meegeven aan de ",e.jsx(a.code,{children:"templates"}),"-property."]}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-html",children:"<vl-cascader .templates=${templates}>...</vl-cascader>\n"})}),`
`,e.jsx(a.p,{children:"Hieronder vind je een uitgewerkt voorbeeld van bovenstaande methodes waarin templates & slots worden gebruikt:"}),`
`,e.jsx(h,{of:c}),`
`,e.jsx(a.h2,{id:"variaties",children:"Variaties"}),`
`,e.jsx(a.h3,{id:"cascader-in-een-sidesheet",children:"Cascader in een SideSheet"}),`
`,e.jsxs(a.p,{children:["Hieronder een voorbeeld van de cascader binnen een ",e.jsx(a.code,{children:"vl-side-sheet"})," component."]}),`
`,e.jsx(h,{of:m}),`
`,e.jsx(a.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(a.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(a.p,{children:e.jsx(a.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/vue-documentation/?path=/story/components-vl-sidebar--sidebar-advanced",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - vl-sidebar-advanced"})})]})}function O(n={}){const{wrapper:a}={...f(),...n.components};return a?e.jsx(a,{...n,children:e.jsx(D,{...n})}):D(n)}function R(n,a){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const H=[{label:"Vlaanderen",children:[{label:"Antwerpen",templateType:"provincie",children:[{label:"Niveau 2 - A",children:[{label:"Niveau 3 - A",children:[{label:"Niveau 4 - A"},{label:"Niveau 4 - B"}]},{label:"Niveau 3 - B"}]},{label:"Niveau 2 - B"},{label:"Berchem"}]},{label:"Brussel",templateType:"provincie",narrowDown:!0,data:{requestParams:"Niveau-id"}},{label:"Limburg",templateType:"provincie",children:[{label:"Hasselt"},{label:"Zonhoven"},{label:"Lummen"},{label:"Halen"},{label:"Tongeren"}]},{label:"Vlaams-Brabant",templateType:"provincie",narrowDown:!0,data:{requestParams:"Niveau-id"}}]},{label:"Wallonië"}],E=async n=>{const{data:a}=n,t=a?.requestParams;return await new Promise(d=>setTimeout(d,3e3)),[{label:t+" "+new Date().getHours(),children:[{label:t+" "+new Date().getMinutes(),children:[{label:t+" "+new Date().getMilliseconds(),narrowDown:!0,data:{requestParams:"Niveau-deeper"}},{label:"[- "+t+" -]",templateType:"provincie"}]},{label:t+" "+new Date().getMinutes()}]},{label:t+" "+new Date().getMinutes(),children:[{label:t+" "+new Date().getMilliseconds(),narrowDown:!0,data:{requestParams:"Niveau-deeper"}},{label:"[- "+t+" -]",templateType:"provincie"}]},{label:t+" "+new Date().getMinutes()}]},S=new Map([["provincie",(n,a)=>{const t=n.children||n.narrowDown,d=v`Bekijk deelgemeentes
            ${n.children?.length?v` <vl-text annotation>( ${n.children.length} )</vl-text> `:"Bekijk deelgemeentes "}`;return v`
                <div class="vl-cascader-item">
                    <vl-title type="h3">${n.label}</vl-title>
                    <vl-link
                        bold
                        button-as-link
                        icon="${t?"arrow-right-fat":k}"
                        icon-placement="after"
                        class="vl-cascader-link"
                        @click=${()=>a(n)}
                    >
                        <span>
                            ${n.children?d:n.narrowDown?"Haal deelgemeentes op":"Actie"}
                        </span>
                    </vl-link>
                </div>
            `}]]),z={id:"components-block-cascader-cascader",title:"Components - Block/cascader/cascader",tags:["autodocs"],args:r,argTypes:N,parameters:{docs:{page:O}}};$([M,C]);const w=n=>v` <div style="width: 600px;margin: auto auto;">${n()}</div>`,o=j(r,({level:n,loadingMessage:a,loading:t,hideBreadcrumb:d,headerSlot:p,headerText:u,onVlClickBreadcrumb:y})=>v`
            <vl-cascader
                level="${n}"
                hide-breadcrumb="${d}"
                loading="${t}"
                loading-message="${a}"
                header-text="${u}"
                @vl-click-breadcrumb="${y}"
            >
                ${p?x(p):k}
                <vl-cascader-item label="Provincie: West-Vlaanderen" annotation="Ondertitel West-Vlaanderen">
                    <vl-cascader-item label="Gemeente: Damme">
                        <vl-cascader-item label="Deelgemeente - Moerkerke">
                            <vl-cascader-item label="Dorp - Moerkerke"></vl-cascader-item>
                            <vl-cascader-item label="Dorp - Sint-Rita"></vl-cascader-item>
                        </vl-cascader-item>
                        <vl-cascader-item label="Deelgemeente - Sint-Kruis"></vl-cascader-item>
                    </vl-cascader-item>
                    <vl-cascader-item label="Gemeente: Brugge"></vl-cascader-item>
                </vl-cascader-item>
                <vl-cascader-item label="Provincie: Oost-Vlaanderen" annotation="Ondertitel Oost-Vlaanderen">
                    <vl-cascader-item label="Gemeente: Gent"></vl-cascader-item>
                    <vl-cascader-item label="Gemeente: Lokeren"></vl-cascader-item>
                </vl-cascader-item>
            </vl-cascader>
        `);o.storyName="vl-cascader - default";o.decorators=[w];o.parameters={controls:{exclude:["content","label","labelSlot"]}};const m=j(r,({breadcrumbPlaceholder:n,level:a,loadingMessage:t,loading:d,hideBreadcrumb:p,homeSlot:u,onVlClickBreadcrumb:y})=>v`
            <vl-side-sheet
                left
                custom-css=".vl-layout {padding:0} .vl-region{padding:0} .vl-region:first-child{padding:0} :host #vl-side-sheet {padding:0} :host {--vl-side-sheet-width: 600px;}"
                open
            >
                <vl-cascader
                    level="${a}"
                    hide-breadcrumb="${p}"
                    loading="${d}"
                    loading-message="${t}"
                    @vl-click-breadcrumb="${y}"
                >
                    ${u?x(u):k}
                    ${n?x(n):k}
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
        `);m.storyName="vl-cascader - side-sheet";m.args={breadcrumbPlaceholder:'<vl-autocomplete placeholder="Zoek..." slot="breadcrumb-placeholder"></vl-autocomplete>'};m.parameters={controls:{exclude:["content","label","labelSlot"]}};const c=j(r,({level:n,loadingMessage:a,loading:t,hideBreadcrumb:d,templates:p,onVlClickBreadcrumb:u})=>v`
            <vl-cascader
                level="${n}"
                hide-breadcrumb="${d}"
                loading="${t}"
                loading-message="${a}"
                .templates=${p}
                @vl-click-breadcrumb="${u}"
            >
                <vl-cascader-item label="Provincie: West-Vlaanderen" template-type="provincie">
                    <vl-info-tile toggleable="" slot="content">
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
                    <vl-title type="vl-h3" slot="label">Provincie: Oost-Vlaanderen</vl-title>
                    <vl-info-tile toggleable="" slot="content">
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
        `);c.storyName="vl-cascader - dynamic templating";c.decorators=[w];c.argTypes={templates:{table:{disable:!1}}};c.args={templates:S};c.parameters={controls:{exclude:["content","label","labelSlot"]}};const i=j(r,({items:n})=>v`
        <vl-cascader .items=${n} .itemListFn=${E} .templates=${S}></vl-cascader>
    `);i.storyName="vl-cascader - property binding";i.decorators=[w];i.parameters={controls:{include:["itemListFn","items","templates"]}};i.argTypes={itemListFn:{table:{disable:!1}},items:{table:{disable:!1}},templates:{table:{disable:!1}}};i.args={items:H};i.parameters={controls:{exclude:["content","label","labelSlot"]}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`story(cascaderArgs, ({
  level,
  loadingMessage,
  loading,
  hideBreadcrumb,
  headerSlot,
  headerText,
  onVlClickBreadcrumb
}) => {
  return html\`
            <vl-cascader
                level="\${level}"
                hide-breadcrumb="\${hideBreadcrumb}"
                loading="\${loading}"
                loading-message="\${loadingMessage}"
                header-text="\${headerText}"
                @vl-click-breadcrumb="\${onVlClickBreadcrumb}"
            >
                \${headerSlot ? unsafeHTML(headerSlot) : nothing}
                <vl-cascader-item label="Provincie: West-Vlaanderen" annotation="Ondertitel West-Vlaanderen">
                    <vl-cascader-item label="Gemeente: Damme">
                        <vl-cascader-item label="Deelgemeente - Moerkerke">
                            <vl-cascader-item label="Dorp - Moerkerke"></vl-cascader-item>
                            <vl-cascader-item label="Dorp - Sint-Rita"></vl-cascader-item>
                        </vl-cascader-item>
                        <vl-cascader-item label="Deelgemeente - Sint-Kruis"></vl-cascader-item>
                    </vl-cascader-item>
                    <vl-cascader-item label="Gemeente: Brugge"></vl-cascader-item>
                </vl-cascader-item>
                <vl-cascader-item label="Provincie: Oost-Vlaanderen" annotation="Ondertitel Oost-Vlaanderen">
                    <vl-cascader-item label="Gemeente: Gent"></vl-cascader-item>
                    <vl-cascader-item label="Gemeente: Lokeren"></vl-cascader-item>
                </vl-cascader-item>
            </vl-cascader>
        \`;
})`,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`story(cascaderArgs, ({
  breadcrumbPlaceholder,
  level,
  loadingMessage,
  loading,
  hideBreadcrumb,
  homeSlot,
  onVlClickBreadcrumb
}) => {
  return html\`
            <vl-side-sheet
                left
                custom-css=".vl-layout {padding:0} .vl-region{padding:0} .vl-region:first-child{padding:0} :host #vl-side-sheet {padding:0} :host {--vl-side-sheet-width: 600px;}"
                open
            >
                <vl-cascader
                    level="\${level}"
                    hide-breadcrumb="\${hideBreadcrumb}"
                    loading="\${loading}"
                    loading-message="\${loadingMessage}"
                    @vl-click-breadcrumb="\${onVlClickBreadcrumb}"
                >
                    \${homeSlot ? unsafeHTML(homeSlot) : nothing}
                    \${breadcrumbPlaceholder ? unsafeHTML(breadcrumbPlaceholder) : nothing}
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
        \`;
})`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`story(cascaderArgs, ({
  level,
  loadingMessage,
  loading,
  hideBreadcrumb,
  templates,
  onVlClickBreadcrumb
}) => {
  return html\`
            <vl-cascader
                level="\${level}"
                hide-breadcrumb="\${hideBreadcrumb}"
                loading="\${loading}"
                loading-message="\${loadingMessage}"
                .templates=\${templates}
                @vl-click-breadcrumb="\${onVlClickBreadcrumb}"
            >
                <vl-cascader-item label="Provincie: West-Vlaanderen" template-type="provincie">
                    <vl-info-tile toggleable="" slot="content">
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
                    <vl-title type="vl-h3" slot="label">Provincie: Oost-Vlaanderen</vl-title>
                    <vl-info-tile toggleable="" slot="content">
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
        \`;
})`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`story(cascaderArgs, ({
  items
}) => {
  return html\`
        <vl-cascader .items=\${items} .itemListFn=\${getItemList} .templates=\${cascaderItemTemplates}></vl-cascader>
    \`;
})`,...i.parameters?.docs?.source}}};const Z=["CascaderDefault","CascaderSideSheet","CascaderDynamicTemplating","CascaderPropertyBinding"];export{o as CascaderDefault,c as CascaderDynamicTemplating,i as CascaderPropertyBinding,m as CascaderSideSheet,Z as __namedExportsOrder,z as default};
