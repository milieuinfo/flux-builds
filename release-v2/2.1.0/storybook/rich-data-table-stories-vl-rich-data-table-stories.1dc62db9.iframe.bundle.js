"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[9559],{"../../libs/components/src/block/rich-data-table/stories/vl-rich-data-table.stories.ts":(e,a,t)=>{t.r(a),t.d(a,{RichDataTableDefault:()=>D,RichDataTableFilter:()=>S,RichDataTableFilterAndPagination:()=>$,RichDataTableSorting:()=>R,__namedExportsOrder:()=>T,default:()=>w});var n=t("../../resources/utils-storybook/index.ts"),r=t("../../libs/common/src/index.ts"),l=t("../../node_modules/lit-html/lit-html.js"),i=t("../../libs/components/src/atom/button/index.ts"),s=t("../../libs/components/src/atom/title/index.ts"),o=t("../../libs/components/src/form/form-label/index.ts"),d=t("../../libs/components/src/form/input-field/index.ts"),c=t("../../libs/components/src/form/select/index.ts"),m=t("../../libs/components/src/block/search-filter/index.ts"),f=t("../../libs/components/src/block/rich-data-table/vl-rich-data-table.component.ts");let h={data:[{id:0,name:"Wegen",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Sander",lastName:"Kleykens"}]},{id:1,name:"Water",manager:{firstName:"Siegfried",lastName:"Brusselmans"},medewerkers:[{firstName:"Guy",lastName:"Wauters"}]},{id:2,name:"Diversiteit",manager:{firstName:"Hendrik",lastName:"Vangenechten"},medewerkers:[{firstName:"Gunther",lastName:"Jaegers"}]},{id:3,name:"Voetafdrukmeting",manager:{firstName:"Pascal",lastName:"De Smet"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:4,name:"Grondwater",manager:{firstName:"Julie",lastName:"Meert"},medewerkers:[{firstName:"Hans",lastName:"Dhondt"}]},{id:5,name:"Grondwatermeting",manager:{firstName:"Julie",lastName:"Meert"},medewerkers:[{firstName:"Thomas",lastName:"Kristiaens"}]}]},p=()=>{customElements.whenDefined("vl-rich-data-table").then(()=>{let e=document.querySelector("#rich-data-table-filter");if(e){e.data=h,e.addEventListener("change",t=>{let n=[...h.data];if(t.detail.formData)for(let e of t.detail.formData.entries())n=a(n,e[0],e[1]);e.data={data:n,paging:{currentPage:1,totalItems:n.length}}});let a=(e,a,n)=>""===n?e:e.filter(e=>t(e,a).includes(n)),t=(e,a)=>{let t=a.split("."),n=e;for(let e=0;e<t.length;e++){if(void 0===n[t[e]])return;n=n[t[e]]}return n.toString()}}})},u={data:[{id:0,name:"Wegen",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Sander",lastName:"Kleykens"}]},{id:1,name:"Water",manager:{firstName:"Siegfried",lastName:"Brusselmans"},medewerkers:[{firstName:"Guy",lastName:"Wauters"}]},{id:2,name:"Diversiteit",manager:{firstName:"Hendrik",lastName:"Vangenechten"},medewerkers:[{firstName:"Gunther",lastName:"Jaegers"}]},{id:3,name:"Voetafdrukmeting",manager:{firstName:"Pascal",lastName:"De Smet"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:4,name:"Grondwater",manager:{firstName:"Julie",lastName:"Meert"},medewerkers:[{firstName:"Hans",lastName:"Dhondt"}]},{id:5,name:"Grondwatermeting",manager:{firstName:"Julie",lastName:"Meert"},medewerkers:[{firstName:"Thomas",lastName:"Kristiaens"}]},{id:6,name:"Project #7",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:7,name:"Project #8",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:8,name:"Project #9",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:9,name:"Project #10",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:10,name:"Project #11",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:11,name:"Project #12",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:12,name:"Project #13",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:13,name:"Project #14",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:14,name:"Project #15",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:15,name:"Project #16",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:16,name:"Project #17",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:17,name:"Project #18",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:18,name:"Project #19",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:19,name:"Project #20",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:20,name:"Project #21",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:21,name:"Project #22",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:22,name:"Project #23",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:23,name:"Project #24",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:24,name:"Project #25",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]}]},b=()=>{customElements.whenDefined("vl-rich-data-table").then(()=>{let e=document.querySelector("#rich-data-table-pagination"),a=document.querySelector("#pager-for-rich-data-table");if(e&&a){e.addEventListener("change",r=>{let l,i=u.data,s=u.data.length;if(r.detail.formData)for(let e of(l=[],r.detail.formData.entries()))s=(i=n(i,e[0],e[1])).length,l.push({name:e[0],value:e[1]});r.detail.paging&&(i=t(r.detail.paging.currentPage,a.itemsPerPage,i)),e.data={data:i,paging:{currentPage:r.detail.paging.currentPage,totalItems:s},filter:l}});let t=(e,a,t)=>{let n=(e-1)*a;return t.slice(n,n+a)};e.data={data:t(1,10,u.data)};let n=(e,a,t)=>""===t?e:e.filter(e=>r(e,a).includes(t)),r=(e,a)=>{let t=a.split("."),n=e;for(let e=0;e<t.length;e++){if(void 0===n[t[e]])return;n=n[t[e]]}return n.toString()}}})},g=()=>{let e=e=>{let a=[...e.data.data];return e=>{let{sorting:t}=e.detail,n=e.target;t?n.data={data:[...a].sort((e,a)=>{for(let n=0;n<t.length;n++){let r=t[n],l=e[r.name],i=a[r.name],s="asc"===r.direction;if(l<i)return s?-1:1;if(l>i)return s?1:-1}return 0}),sorting:t}:n.data=a}};customElements.whenDefined("vl-rich-data-table").then(()=>{let a=document.querySelector("#rich-data-table-sorting");a&&a.addEventListener("change",e(a))})};var v=t("../../libs/components/src/block/rich-data/stories/vl-rich-data.stories-arg.ts");let N={...v.w,collapsedM:!1,collapsedS:!1,collapsedXS:!1,zebra:!1,fluxZebra:!1},k={...v.Q,collapsedM:{name:"collapsed-m",description:"Vanaf medium schermgrootte, cellen per rij onder elkaar ipv naast elkaar",table:{category:n.R6.ATTRIBUTES,type:{summary:n.QE.BOOLEAN},defaultValue:{summary:N.collapsedM}}},collapsedS:{name:"collapsed-s",description:"Vanaf een small schermgrootte, cellen per rij onder elkaar ipv naast elkaar",table:{category:n.R6.ATTRIBUTES,type:{summary:n.QE.BOOLEAN},defaultValue:{summary:N.collapsedS}}},collapsedXS:{name:"collapsed-xs",description:"Vanaf een extra small schermgrootte, cellen per rij onder elkaar ipv naast elkaar",table:{category:n.R6.ATTRIBUTES,type:{summary:n.QE.BOOLEAN},defaultValue:{summary:N.collapsedXS}}},zebra:{name:"zebra",description:"Variant waarin de rijen afwisselend een andere achtergrondkleur krijgen. Dit maakt de tabel makkelijker leesbaar. Deze zebra werkt niet voor tabellen met detail rijen, gebruik hiervoor flux-zebra.",table:{category:n.R6.ATTRIBUTES,type:{summary:n.QE.BOOLEAN},defaultValue:{summary:N.zebra}}},fluxZebra:{name:"flux-zebra",description:"Variant waarin de rijen afwisselend een andere achtergrondkleur krijgen. Dit maakt de tabel makkelijker leesbaar. Deze zebra werkt voor tabellen met en zonder detail rijen.",table:{category:n.R6.ATTRIBUTES,type:{summary:n.QE.BOOLEAN},defaultValue:{summary:N.fluxZebra}}}};t("../../node_modules/react/index.js");var j=t("../../node_modules/react/jsx-runtime.js"),x=t("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),P=t("../../node_modules/@storybook/blocks/dist/index.mjs");function y(e){let a=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",a:"a",code:"code",h2:"h2",pre:"pre",h3:"h3"},(0,x.RP)(),e.components),{FluxMetaData:t}=a;return t||function(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("FluxMetaData",!0),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(a.h1,{id:"rich-data-table",children:"Rich Data Table"}),"\n",(0,j.jsx)(t,{id:"components-block-rich-data-table"}),"\n",(0,j.jsx)(a.p,{children:"Een tabel op basis van een dynamische lijst van data die uitgebreid kan worden met functionaliteiten om het consumeren\nvan data door de gebruiker te verbeteren."}),"\n",(0,j.jsx)(a.p,{children:"De code voorbeelden bij elke story is dezelfde code die gebruikt wordt om de stories te laten werken."}),"\n",(0,j.jsxs)(a.ul,{children:["\n",(0,j.jsxs)(a.li,{children:["combineert de functionaliteiten van het ",(0,j.jsx)(a.a,{href:"?path=/docs/components-block-rich-data--rich-data-default",children:"rich-data"}),"-component en ",(0,j.jsx)(a.a,{href:"?path=/docs/elements-data-table--data-table-default",children:"data-table"}),"-component."]}),"\n",(0,j.jsxs)(a.li,{children:["om de velden te configureren kan je gebruik maken van ",(0,j.jsx)(a.code,{children:"rich-data-field"})]}),"\n"]}),"\n",(0,j.jsx)(a.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,j.jsx)(a.pre,{children:(0,j.jsx)(a.code,{className:"language-js",children:"import { RichDataTableComponent } from '@domg-wc/components/block';\n"})}),"\n",(0,j.jsx)(a.pre,{children:(0,j.jsx)(a.code,{className:"language-html",children:'<vl-rich-data-table>\n    <vl-rich-data-field name="id" label="ID" selector="id"></vl-rich-data-field>\n    <vl-rich-data-field name="name" label="Naam" selector="name"></vl-rich-data-field>\n</vl-rich-data-table>\n'})}),"\n",(0,j.jsx)(a.h2,{id:"default",children:"Default"}),"\n",(0,j.jsx)(P.Hl,{of:D}),"\n",(0,j.jsx)(a.h2,{id:"data-instellen",children:"Data instellen"}),"\n",(0,j.jsxs)(a.p,{children:["Om table ",(0,j.jsx)(a.code,{children:"data"})," in te stellen / bij te werken:"]}),"\n",(0,j.jsx)(a.p,{children:"Werk je met statische data (die client side niet gaan wijzigen), dan kan je de data meegeven als string attribuut:"}),"\n",(0,j.jsxs)(a.ul,{children:["\n",(0,j.jsx)(a.li,{children:"als je data wil meegeven als attribuut doe je dit in stringified JSON formaat, bv.:"}),"\n"]}),"\n",(0,j.jsx)(a.pre,{children:(0,j.jsx)(a.code,{className:"language-js",children:'\'{"data": [{ "id" : 0, "name" : "Project #1" }, { "id" : 1, "name" : "Project #2"}]}\';\n'})}),"\n",(0,j.jsx)(a.p,{children:"Wil je client-side mogelijkheden aanbieden om te filteren / pagineren, is het belangrijk dat de data dynamisch zelf update:"}),"\n",(0,j.jsxs)(a.ul,{children:["\n",(0,j.jsxs)(a.li,{children:["voor filtering & paginatie (zie ook code voorbeelden verder) moet je ",(0,j.jsx)(a.code,{children:".data"})," dynamisch bijwerken"]}),"\n",(0,j.jsxs)(a.li,{children:["refereer ",(0,j.jsx)(a.code,{children:"rich-data-table"})," en stel in: ",(0,j.jsx)(a.code,{children:"richDataTable.data = ..."})]}),"\n",(0,j.jsx)(a.li,{children:"geef data door als JavaScript object, bv.:"}),"\n"]}),"\n",(0,j.jsx)(a.pre,{children:(0,j.jsx)(a.code,{className:"language-json",children:'{\n    "data": [\n        { "id": 0, "name": "Water", "owner": "Kevin Jansens" },\n        { "id": 1, "name": "Vuur", "owner": "Anton Vanherrewege" },\n        { "id": 2, "name": "Aarde", "owner": "Hedwig Jansens" }\n    ]\n}\n'})}),"\n",(0,j.jsx)(a.h2,{id:"sorting",children:"Sorting"}),"\n",(0,j.jsx)(a.p,{children:"Om sorting te laten werken moet je zelf een sorting algoritme implementeren:"}),"\n",(0,j.jsxs)("details",{children:[(0,j.jsx)("summary",{children:"code voorbeeld hoe sorting toe te passen"}),(0,j.jsx)(P.kL,{code:"export const sortingRichTableImplementation = ()=>{\n    const tableSorter = (table)=>{\n        const originalTableData = [\n            ...table.data.data\n        ];\n        return (event)=>{\n            const { sorting } = event.detail;\n            const table = event.target;\n            if (sorting) {\n                table.data = {\n                    data: [\n                        ...originalTableData\n                    ].sort((firstEl, secondEl)=>{\n                        for(let i = 0; i < sorting.length; i++){\n                            const criteria = sorting[i];\n                            const firstValue = firstEl[criteria.name];\n                            const secondValue = secondEl[criteria.name];\n                            const isAscending = criteria.direction === 'asc';\n                            if (firstValue < secondValue) {\n                                return isAscending ? -1 : 1;\n                            } else if (firstValue > secondValue) {\n                                return isAscending ? 1 : -1;\n                            }\n                        }\n                        return 0;\n                    }),\n                    sorting\n                };\n            } else {\n                table.data = originalTableData;\n            }\n        };\n    };\n    customElements.whenDefined('vl-rich-data-table').then(()=>{\n        const table = document.querySelector('#rich-data-table-sorting');\n        if (table) table.addEventListener('change', tableSorter(table));\n    });\n};\nexport default sortingRichTableImplementation;\n",language:"ts",dark:!0})]}),"\n",(0,j.jsxs)(a.p,{children:["Een template voorbeeld vind je hieronder. Klik ",(0,j.jsx)(a.code,{children:"Show code"})," de html te zien."]}),"\n",(0,j.jsx)(a.p,{children:"Belangrijk:"}),"\n",(0,j.jsxs)(a.ul,{children:["\n",(0,j.jsxs)(a.li,{children:[(0,j.jsx)(a.code,{children:"sortable"})," toevoegen op de ",(0,j.jsx)(a.code,{children:"vl-rich-data-field"}),"-velden waarop gesorteerd moet worden"]}),"\n",(0,j.jsxs)(a.li,{children:["om de data te sorteren kan je gebruik maken van ",(0,j.jsx)(a.code,{children:"rich-data-sorter"})]}),"\n"]}),"\n",(0,j.jsx)(P.Hl,{of:R,layout:"padded"}),"\n",(0,j.jsx)(a.h2,{id:"filter",children:"Filter"}),"\n",(0,j.jsxs)(a.p,{children:["Om filtering te laten werken, adviseren we ",(0,j.jsx)(a.code,{children:"vl-search-filter"})," te implementeren.\nMeer info over ",(0,j.jsx)(a.code,{children:"vl-search-filter"})," ",(0,j.jsx)(a.a,{href:"?path=/docs/elements-search-filter--search-filter-default",children:"hier"}),"."]}),"\n",(0,j.jsx)(a.p,{children:"Daarnaast moet je ook de filtering & change detection zelf implementeren."}),"\n",(0,j.jsxs)("details",{children:[(0,j.jsx)("summary",{children:"gebruikte mock data in onderstaande voorbeeld"}),(0,j.jsx)(P.kL,{code:"export const richDataFilterData = {\n    data: [\n        {\n            id: 0,\n            name: 'Wegen',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Sander',\n                    lastName: 'Kleykens'\n                }\n            ]\n        },\n        {\n            id: 1,\n            name: 'Water',\n            manager: {\n                firstName: 'Siegfried',\n                lastName: 'Brusselmans'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Guy',\n                    lastName: 'Wauters'\n                }\n            ]\n        },\n        {\n            id: 2,\n            name: 'Diversiteit',\n            manager: {\n                firstName: 'Hendrik',\n                lastName: 'Vangenechten'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Gunther',\n                    lastName: 'Jaegers'\n                }\n            ]\n        },\n        {\n            id: 3,\n            name: 'Voetafdrukmeting',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'De Smet'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 4,\n            name: 'Grondwater',\n            manager: {\n                firstName: 'Julie',\n                lastName: 'Meert'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Hans',\n                    lastName: 'Dhondt'\n                }\n            ]\n        },\n        {\n            id: 5,\n            name: 'Grondwatermeting',\n            manager: {\n                firstName: 'Julie',\n                lastName: 'Meert'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Thomas',\n                    lastName: 'Kristiaens'\n                }\n            ]\n        }\n    ]\n};\nexport default richDataFilterData;\n",language:"ts",dark:!0})]}),"\n",(0,j.jsxs)("details",{children:[(0,j.jsx)("summary",{children:"code voorbeeld hoe filtering toe te passen"}),(0,j.jsx)(P.kL,{code:"import richDataFilterData from './vl-rich-data-table-filter.stories-mock';\nconst data = richDataFilterData;\nexport const filterRichTableImplementation = ()=>{\n    customElements.whenDefined('vl-rich-data-table').then(()=>{\n        const element = document.querySelector('#rich-data-table-filter');\n        if (element) {\n            element.data = data;\n            element.addEventListener('change', (e)=>{\n                let filteredData = [\n                    ...data.data\n                ];\n                if (e.detail.formData) {\n                    for (const entry of e.detail.formData.entries()){\n                        filteredData = filter(filteredData, entry[0], entry[1]);\n                    }\n                }\n                element.data = {\n                    data: filteredData,\n                    paging: {\n                        currentPage: 1,\n                        totalItems: filteredData.length\n                    }\n                };\n            });\n            const filter = (data, pathToKey, value)=>{\n                if (value === '') {\n                    return data;\n                } else {\n                    return data.filter((element)=>{\n                        const valueByPath = findValueByPath(element, pathToKey);\n                        return valueByPath.includes(value);\n                    });\n                }\n            };\n            const findValueByPath = (element, pathToKey)=>{\n                const keys = pathToKey.split('.');\n                let current = element;\n                for(let i = 0; i < keys.length; i++){\n                    if (current[keys[i]] !== undefined) {\n                        current = current[keys[i]];\n                    } else {\n                        return undefined;\n                    }\n                }\n                return current.toString();\n            };\n        }\n    });\n};\nexport default filterRichTableImplementation;\n",language:"ts",dark:!0})]}),"\n",(0,j.jsxs)(a.p,{children:["Template voorbeeld vind je hieronder. Klik ",(0,j.jsx)(a.code,{children:"Show code"})," de html te zien."]}),"\n",(0,j.jsx)(P.Hl,{of:S,layout:"padded"}),"\n",(0,j.jsx)(a.h2,{id:"paginatie",children:"Paginatie"}),"\n",(0,j.jsxs)(a.p,{children:["Om paginatie te laten werken, moet je ",(0,j.jsx)(a.code,{children:"vl-pager"})," implementeren. Zie HTML code sample.\nMeer info over ",(0,j.jsx)(a.code,{children:"vl-pager"})," ",(0,j.jsx)(a.a,{href:"?path=/docs/components-block-pager--pager-default",children:"hier"}),"."]}),"\n",(0,j.jsxs)(a.p,{children:["Daarnaast moet je specifieke logica schrijven gerelateerd tot de paginatie om ",(0,j.jsx)(a.code,{children:"vl-pager"})," te laten werken.\nIn onderstaande code kan je zien op welke manier je filtering & paginatie kan combineren."]}),"\n",(0,j.jsxs)("details",{children:[(0,j.jsx)("summary",{children:"gebruikte mock data in onderstaande voorbeeld"}),(0,j.jsx)(P.kL,{code:"export const richDataFilterPagerData = {\n    data: [\n        {\n            id: 0,\n            name: 'Wegen',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Sander',\n                    lastName: 'Kleykens'\n                }\n            ]\n        },\n        {\n            id: 1,\n            name: 'Water',\n            manager: {\n                firstName: 'Siegfried',\n                lastName: 'Brusselmans'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Guy',\n                    lastName: 'Wauters'\n                }\n            ]\n        },\n        {\n            id: 2,\n            name: 'Diversiteit',\n            manager: {\n                firstName: 'Hendrik',\n                lastName: 'Vangenechten'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Gunther',\n                    lastName: 'Jaegers'\n                }\n            ]\n        },\n        {\n            id: 3,\n            name: 'Voetafdrukmeting',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'De Smet'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 4,\n            name: 'Grondwater',\n            manager: {\n                firstName: 'Julie',\n                lastName: 'Meert'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Hans',\n                    lastName: 'Dhondt'\n                }\n            ]\n        },\n        {\n            id: 5,\n            name: 'Grondwatermeting',\n            manager: {\n                firstName: 'Julie',\n                lastName: 'Meert'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Thomas',\n                    lastName: 'Kristiaens'\n                }\n            ]\n        },\n        {\n            id: 6,\n            name: 'Project #7',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 7,\n            name: 'Project #8',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 8,\n            name: 'Project #9',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 9,\n            name: 'Project #10',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 10,\n            name: 'Project #11',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 11,\n            name: 'Project #12',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 12,\n            name: 'Project #13',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 13,\n            name: 'Project #14',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 14,\n            name: 'Project #15',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 15,\n            name: 'Project #16',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 16,\n            name: 'Project #17',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 17,\n            name: 'Project #18',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 18,\n            name: 'Project #19',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 19,\n            name: 'Project #20',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 20,\n            name: 'Project #21',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 21,\n            name: 'Project #22',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 22,\n            name: 'Project #23',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 23,\n            name: 'Project #24',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 24,\n            name: 'Project #25',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        }\n    ]\n};\nexport default richDataFilterPagerData;\n",language:"ts",dark:!0})]}),"\n",(0,j.jsxs)("details",{children:[(0,j.jsx)("summary",{children:"code voorbeeld hoe paginatie toe te passen"}),(0,j.jsx)(P.kL,{code:"import richDataFilterPagerData from './vl-rich-data-table-pagination.stories-mock';\nexport const paginationRichTableImplementation = ()=>{\n    customElements.whenDefined('vl-rich-data-table').then(()=>{\n        const data = richDataFilterPagerData;\n        const richTable = document.querySelector('#rich-data-table-pagination');\n        const pager = document.querySelector('#pager-for-rich-data-table');\n        if (richTable && pager) {\n            richTable.addEventListener('change', (e)=>{\n                let newData = data.data;\n                let totalItems = data.data.length;\n                let filterEntries = undefined;\n                if (e.detail.formData) {\n                    filterEntries = [];\n                    for (const entry of e.detail.formData.entries()){\n                        newData = filter(newData, entry[0], entry[1]);\n                        totalItems = newData.length;\n                        filterEntries.push({\n                            name: entry[0],\n                            value: entry[1]\n                        });\n                    }\n                }\n                if (e.detail.paging) {\n                    newData = page(e.detail.paging.currentPage, pager.itemsPerPage, newData);\n                }\n                richTable.data = {\n                    data: newData,\n                    paging: {\n                        currentPage: e.detail.paging.currentPage,\n                        totalItems: totalItems\n                    },\n                    filter: filterEntries\n                };\n            });\n            const page = (page, itemsPerPage, data)=>{\n                const start = (page - 1) * itemsPerPage;\n                const end = start + itemsPerPage;\n                return data.slice(start, end);\n            };\n            richTable.data = {\n                data: page(1, 10, data.data)\n            };\n            const filter = (data, pathToKey, value)=>{\n                if (value === '') {\n                    return data;\n                }\n                return data.filter((element)=>{\n                    const valueByPath = findValueByPath(element, pathToKey);\n                    return valueByPath.includes(value);\n                });\n            };\n            const findValueByPath = (element, pathToKey)=>{\n                const keys = pathToKey.split('.');\n                let current = element;\n                for(let i = 0; i < keys.length; i++){\n                    if (current[keys[i]] !== undefined) {\n                        current = current[keys[i]];\n                    } else {\n                        return undefined;\n                    }\n                }\n                return current.toString();\n            };\n        }\n    });\n};\nexport default paginationRichTableImplementation;\n",language:"ts",dark:!0})]}),"\n",(0,j.jsxs)(a.p,{children:["Template voorbeeld vind je hieronder. Klik ",(0,j.jsx)(a.code,{children:"Show code"})," de html te zien."]}),"\n",(0,j.jsx)(a.h3,{id:"instellen-van-vlpager-component",children:"Instellen van VlPager component"}),"\n",(0,j.jsxs)(a.ul,{children:["\n",(0,j.jsxs)(a.li,{children:["op de ",(0,j.jsx)(a.code,{children:"vl-pager"})," component kan je naar keuze:","\n",(0,j.jsxs)(a.ul,{children:["\n",(0,j.jsxs)(a.li,{children:["de begin pagina instellen (",(0,j.jsx)(a.code,{children:"current-page"}),", in vb. hieronder op ",(0,j.jsx)(a.code,{children:"1"}),")"]}),"\n",(0,j.jsxs)(a.li,{children:["het aantal records per pagina instellen (",(0,j.jsx)(a.code,{children:"items-per-page"}),", in vb. hieronder op ",(0,j.jsx)(a.code,{children:"10"}),")"]}),"\n"]}),"\n"]}),"\n",(0,j.jsxs)(a.li,{children:["het is echter belangrijk dat ",(0,j.jsx)(a.code,{children:"total-items"})," dynamisch update met het aantal records naargelang de huidige staat van je\ndata"]}),"\n"]}),"\n",(0,j.jsx)(P.Hl,{of:$,layout:"padded"}),"\n",(0,j.jsx)(a.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,j.jsx)(P.ov,{of:D}),"\n",(0,j.jsx)(a.h2,{id:"referenties",children:"Referenties"}),"\n",(0,j.jsx)(a.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,j.jsx)(a.p,{children:"Digitaal Vlaanderen bied geen component aan voor de Rich Data Table maar wel beperkte functionaliteit voor de Data\ntable. Die nemen we over, daarnaast volgen we ook de styling van de Data Table."}),"\n",(0,j.jsx)(a.p,{children:(0,j.jsx)(a.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-data-table",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Rich Data Table"})}),"\n",(0,j.jsx)(a.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,j.jsxs)(a.p,{children:[(0,j.jsx)(a.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlRichDataTable.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Rich Data Table"}),"\n",(0,j.jsx)(a.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-rich-data-table.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - Rich Data Table"})]})]})}(0,r.gy)([f.B,m.E,s.I,i.Y,o.E,d.Y,c.Y]);let w={id:"components-block-rich-data-table",title:"Components - Block/rich-data-table",tags:["autodocs"],args:N,argTypes:k,parameters:{docs:{page:function(e={}){let{wrapper:a}=Object.assign({},(0,x.RP)(),e.components);return a?(0,j.jsx)(a,Object.assign({},e,{children:(0,j.jsx)(y,e)})):y(e)}},layout:"fullscreen"}},D=(0,n._7)(N,({collapsedM:e,collapsedS:a,collapsedXS:t,zebra:n,fluxZebra:r})=>(0,l.qy)`
        <vl-rich-data-table
            data="${'{"data": [{ "id" : 0, "name" : "Project #1" , "owner" : "Jan Jansens" }, { "id" : 1, "name" : "Project #2" , "owner" : "Marie Vermeersch" }]}'}"
            ?collapsed-m=${e}
            ?collapsed-s=${a}
            ?collapsed-xs=${t}
            ?zebra=${n}
            ?flux-zebra=${r}
        >
            <vl-rich-data-field name="id" label="ID" selector="id"></vl-rich-data-field>
            <vl-rich-data-field name="name" label="Naam" selector="name"></vl-rich-data-field>
            <vl-rich-data-field name="owner" selector="owner">
                <template slot="label">
                    <span>Eigenaar</span>
                </template>
            </vl-rich-data-field>
        </vl-rich-data-table>
    `).bind({});D.storyName="vl-rich-data-table - default",D.args={collapsedM:!1,collapsedS:!1,collapsedXS:!1};let R=(0,n._7)(N,({collapsedM:e,collapsedS:a,collapsedXS:t,zebra:n,fluxZebra:r})=>(g(),(0,l.qy)`
        <vl-rich-data-table
            id="rich-data-table-sorting"
            data="${'{"data": [{ "id" : 0, "name" : "Water" , "owner" : "Kevin Jansens" }, { "id" : 1, "name" : "Vuur" , "owner" : "Anton Vanherrewege" }, { "id" : 2, "name" : "Aarde" , "owner" : "Hedwig Jansens" }]}'}"
            ?collapsed-m=${e}
            ?collapsed-s=${a}
            ?collapsed-xs=${t}
            ?zebra=${n}
            ?flux-zebra=${r}
        >
            <vl-rich-data-field
                name="id"
                label="ID"
                selector="id"
                sortable=""
                sorting-direction="asc"
            ></vl-rich-data-field>
            <vl-rich-data-field name="name" label="Naam" selector="name" sortable=""></vl-rich-data-field>
            <vl-rich-data-field name="owner" selector="owner" sortable="">
                <template slot="label">
                    <span>Eigenaar</span>
                </template>
            </vl-rich-data-field>
        </vl-rich-data-table>
    `)).bind({});R.storyName="vl-rich-data-table - sorting",R.args={collapsedM:!1,collapsedS:!1,collapsedXS:!1};let S=(0,n._7)(N,({collapsedM:e,collapsedS:a,collapsedXS:t,filterClosable:n,filterClosed:r,filterMaxWidth:i,zebra:s,fluxZebra:o})=>(p(),(0,l.qy)`
            <vl-rich-data-table
                id="rich-data-table-filter"
                ?collapsed-m=${e}
                ?collapsed-s=${a}
                ?collapsed-xs=${t}
                ?filter-closable=${n}
                ?filter-closed=${r}
                filter-max-width=${i}
                ?zebra=${s}
                ?flux-zebra=${o}
            >
                <vl-rich-data-field label="ID" selector="id"></vl-rich-data-field>
                <vl-rich-data-field label="Naam Project" selector="name"></vl-rich-data-field>
                <vl-rich-data-field
                    label="Naam Manager"
                    selector="manager.lastName"
                ></vl-rich-data-field>
                <vl-rich-data-field
                    label="Eerste medewerker"
                    selector="medewerkers.0.lastName"
                ></vl-rich-data-field>
                <vl-search-filter slot="filter" alt>
                    <form>
                        <section>
                            <vl-title type="h2" alt no-space-bottom="">Doorzoek projecten</vl-title>
                            <div>
                                <vl-form-label
                                    for="filterOpId"
                                    label="Project id"
                                    light
                                ></vl-form-label>
                                <vl-input-field
                                    id="filterOpId"
                                    type="text"
                                    name="id"
                                    block
                                ></vl-input-field>
                            </div>
                            <div>
                                <vl-form-label for="filterOpNaamProject" label="Project naam" light></vl-form-label>
                                <vl-input-field
                                    type="text"
                                    id="filterOpNaamProject"
                                    name="name"
                                    block
                                ></vl-input-field>
                            </div>
                            <div>
                                <vl-form-label for="filterOpNaamManager" label="Manager familienaam"
                                               light></vl-form-label>
                                <vl-input-field
                                    type="text"
                                    id="filterOpNaamManager"
                                    name="manager.lastName"
                                    block
                                    autocomplete="family-name"
                                ></vl-input-field>
                            </div>
                        </section>
                        <footer>
                            <vl-button type="submit" custom-css="button {flex:1}">Zoeken</vl-button>
                            <vl-button type="reset" custom-css="button {flex:1}" secondary>Reset</vl-button>
                        </footer>
                    </form>
                </vl-search-filter>
                <vl-pager
                    id="rich-data-table-filter"
                    slot="pager"
                    total-items="6"
                    items-per-page="10"
                    current-page="1"
                    align-center=""
                ></vl-pager>
            </vl-rich-data-table>
        `)).bind({});S.storyName="vl-rich-data-table - filter",S.args={filterClosable:!0};let $=(0,n._7)(N,({collapsedM:e,collapsedS:a,collapsedXS:t,filterClosable:n,filterClosed:r,filterMaxWidth:i,zebra:s,fluxZebra:o})=>(b(),(0,l.qy)`
            <vl-rich-data-table
                id="rich-data-table-pagination"
                ?collapsed-m=${e}
                ?collapsed-s=${a}
                ?collapsed-xs=${t}
                ?filter-closable=${n}
                ?filter-closed=${r}
                filter-max-width=${i}
                ?zebra=${s}
                ?flux-zebra=${o}
            >
                <vl-rich-data-field label="ID" selector="id"></vl-rich-data-field>
                <vl-rich-data-field label="Naam Project" selector="name"></vl-rich-data-field>
                <vl-rich-data-field
                    label="Naam Manager"
                    selector="manager.lastName"
                ></vl-rich-data-field>
                <vl-rich-data-field
                    label="Eerste medewerker"
                    selector="medewerkers.0.lastName"
                ></vl-rich-data-field>
                <vl-search-filter slot="filter" alt>
                    <form>
                        <section>
                            <vl-title type="h2" alt no-space-bottom="">Doorzoek projecten</vl-title>
                            <div>
                                <vl-form-label
                                    for="filterOpId"
                                    label="Project id"
                                    light
                                ></vl-form-label>
                                <vl-input-field
                                    id="filterOpId"
                                    type="text"
                                    name="id"
                                    block
                                ></vl-input-field>
                            </div>
                        </section>
                        <section>
                            <vl-title type="h2" alt no-space-bottom="">Project details</vl-title>
                            <div>
                                <vl-form-label for="filterOpNaamProject" label="Project naam"
                                               light></vl-form-label>
                                <vl-input-field
                                    type="text"
                                    id="filterOpNaamProject"
                                    name="name"
                                    block
                                ></vl-input-field>
                            </div>
                            <div>
                                <vl-form-label for="filterOpNaamManager" label="Manager familienaam"
                                               light></vl-form-label>
                                <vl-input-field
                                    type="text"
                                    id="filterOpNaamManager"
                                    name="manager.lastName"
                                    block
                                ></vl-input-field>
                            </div>
                        </section>
                        <footer>
                            <vl-button type="submit" custom-css="button {flex:1}">Zoeken</vl-button>
                            <vl-button type="reset" custom-css="button {flex:1}" secondary>Reset</vl-button>
                        </footer>
                    </form>
                </vl-search-filter>
                <vl-pager
                    id="pager-for-rich-data-table"
                    slot="pager"
                    total-items=${u.data.length}
                    items-per-page="10"
                    current-page="1"
                ></vl-pager>
            </vl-rich-data-table>
        `)).bind({});$.storyName="vl-rich-data-table - filter and pagination",$.args={filterClosable:!0,filterClosed:!0},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:'story(richDataTableArgs, ({\n  collapsedM,\n  collapsedS,\n  collapsedXS,\n  zebra,\n  fluxZebra\n}) => {\n  const data = \'{"data": [{ "id" : 0, "name" : "Project #1" , "owner" : "Jan Jansens" }, { "id" : 1, "name" : "Project #2" , "owner" : "Marie Vermeersch" }]}\';\n  return html`\n        <vl-rich-data-table\n            data="${data}"\n            ?collapsed-m=${collapsedM}\n            ?collapsed-s=${collapsedS}\n            ?collapsed-xs=${collapsedXS}\n            ?zebra=${zebra}\n            ?flux-zebra=${fluxZebra}\n        >\n            <vl-rich-data-field name="id" label="ID" selector="id"></vl-rich-data-field>\n            <vl-rich-data-field name="name" label="Naam" selector="name"></vl-rich-data-field>\n            <vl-rich-data-field name="owner" selector="owner">\n                <template slot="label">\n                    <span>Eigenaar</span>\n                </template>\n            </vl-rich-data-field>\n        </vl-rich-data-table>\n    `;\n})',...D.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:'story(richDataTableArgs, ({\n  collapsedM,\n  collapsedS,\n  collapsedXS,\n  zebra,\n  fluxZebra\n}) => {\n  const data = \'{"data": [{ "id" : 0, "name" : "Water" , "owner" : "Kevin Jansens" }, { "id" : 1, "name" : "Vuur" , "owner" : "Anton Vanherrewege" }, { "id" : 2, "name" : "Aarde" , "owner" : "Hedwig Jansens" }]}\';\n  sortingRichTableImplementation();\n  return html`\n        <vl-rich-data-table\n            id="rich-data-table-sorting"\n            data="${data}"\n            ?collapsed-m=${collapsedM}\n            ?collapsed-s=${collapsedS}\n            ?collapsed-xs=${collapsedXS}\n            ?zebra=${zebra}\n            ?flux-zebra=${fluxZebra}\n        >\n            <vl-rich-data-field\n                name="id"\n                label="ID"\n                selector="id"\n                sortable=""\n                sorting-direction="asc"\n            ></vl-rich-data-field>\n            <vl-rich-data-field name="name" label="Naam" selector="name" sortable=""></vl-rich-data-field>\n            <vl-rich-data-field name="owner" selector="owner" sortable="">\n                <template slot="label">\n                    <span>Eigenaar</span>\n                </template>\n            </vl-rich-data-field>\n        </vl-rich-data-table>\n    `;\n})',...R.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:'story(richDataTableArgs, ({\n  collapsedM,\n  collapsedS,\n  collapsedXS,\n  filterClosable,\n  filterClosed,\n  filterMaxWidth,\n  zebra,\n  fluxZebra\n}) => {\n  filterRichTableImplementation();\n  return html`\n            <vl-rich-data-table\n                id="rich-data-table-filter"\n                ?collapsed-m=${collapsedM}\n                ?collapsed-s=${collapsedS}\n                ?collapsed-xs=${collapsedXS}\n                ?filter-closable=${filterClosable}\n                ?filter-closed=${filterClosed}\n                filter-max-width=${filterMaxWidth}\n                ?zebra=${zebra}\n                ?flux-zebra=${fluxZebra}\n            >\n                <vl-rich-data-field label="ID" selector="id"></vl-rich-data-field>\n                <vl-rich-data-field label="Naam Project" selector="name"></vl-rich-data-field>\n                <vl-rich-data-field\n                    label="Naam Manager"\n                    selector="manager.lastName"\n                ></vl-rich-data-field>\n                <vl-rich-data-field\n                    label="Eerste medewerker"\n                    selector="medewerkers.0.lastName"\n                ></vl-rich-data-field>\n                <vl-search-filter slot="filter" alt>\n                    <form>\n                        <section>\n                            <vl-title type="h2" alt no-space-bottom="">Doorzoek projecten</vl-title>\n                            <div>\n                                <vl-form-label\n                                    for="filterOpId"\n                                    label="Project id"\n                                    light\n                                ></vl-form-label>\n                                <vl-input-field\n                                    id="filterOpId"\n                                    type="text"\n                                    name="id"\n                                    block\n                                ></vl-input-field>\n                            </div>\n                            <div>\n                                <vl-form-label for="filterOpNaamProject" label="Project naam" light></vl-form-label>\n                                <vl-input-field\n                                    type="text"\n                                    id="filterOpNaamProject"\n                                    name="name"\n                                    block\n                                ></vl-input-field>\n                            </div>\n                            <div>\n                                <vl-form-label for="filterOpNaamManager" label="Manager familienaam"\n                                               light></vl-form-label>\n                                <vl-input-field\n                                    type="text"\n                                    id="filterOpNaamManager"\n                                    name="manager.lastName"\n                                    block\n                                    autocomplete="family-name"\n                                ></vl-input-field>\n                            </div>\n                        </section>\n                        <footer>\n                            <vl-button type="submit" custom-css="button {flex:1}">Zoeken</vl-button>\n                            <vl-button type="reset" custom-css="button {flex:1}" secondary>Reset</vl-button>\n                        </footer>\n                    </form>\n                </vl-search-filter>\n                <vl-pager\n                    id="rich-data-table-filter"\n                    slot="pager"\n                    total-items="6"\n                    items-per-page="10"\n                    current-page="1"\n                    align-center=""\n                ></vl-pager>\n            </vl-rich-data-table>\n        `;\n})',...S.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:'story(richDataTableArgs, ({\n  collapsedM,\n  collapsedS,\n  collapsedXS,\n  filterClosable,\n  filterClosed,\n  filterMaxWidth,\n  zebra,\n  fluxZebra\n}) => {\n  paginationRichTableImplementation();\n  return html`\n            <vl-rich-data-table\n                id="rich-data-table-pagination"\n                ?collapsed-m=${collapsedM}\n                ?collapsed-s=${collapsedS}\n                ?collapsed-xs=${collapsedXS}\n                ?filter-closable=${filterClosable}\n                ?filter-closed=${filterClosed}\n                filter-max-width=${filterMaxWidth}\n                ?zebra=${zebra}\n                ?flux-zebra=${fluxZebra}\n            >\n                <vl-rich-data-field label="ID" selector="id"></vl-rich-data-field>\n                <vl-rich-data-field label="Naam Project" selector="name"></vl-rich-data-field>\n                <vl-rich-data-field\n                    label="Naam Manager"\n                    selector="manager.lastName"\n                ></vl-rich-data-field>\n                <vl-rich-data-field\n                    label="Eerste medewerker"\n                    selector="medewerkers.0.lastName"\n                ></vl-rich-data-field>\n                <vl-search-filter slot="filter" alt>\n                    <form>\n                        <section>\n                            <vl-title type="h2" alt no-space-bottom="">Doorzoek projecten</vl-title>\n                            <div>\n                                <vl-form-label\n                                    for="filterOpId"\n                                    label="Project id"\n                                    light\n                                ></vl-form-label>\n                                <vl-input-field\n                                    id="filterOpId"\n                                    type="text"\n                                    name="id"\n                                    block\n                                ></vl-input-field>\n                            </div>\n                        </section>\n                        <section>\n                            <vl-title type="h2" alt no-space-bottom="">Project details</vl-title>\n                            <div>\n                                <vl-form-label for="filterOpNaamProject" label="Project naam"\n                                               light></vl-form-label>\n                                <vl-input-field\n                                    type="text"\n                                    id="filterOpNaamProject"\n                                    name="name"\n                                    block\n                                ></vl-input-field>\n                            </div>\n                            <div>\n                                <vl-form-label for="filterOpNaamManager" label="Manager familienaam"\n                                               light></vl-form-label>\n                                <vl-input-field\n                                    type="text"\n                                    id="filterOpNaamManager"\n                                    name="manager.lastName"\n                                    block\n                                ></vl-input-field>\n                            </div>\n                        </section>\n                        <footer>\n                            <vl-button type="submit" custom-css="button {flex:1}">Zoeken</vl-button>\n                            <vl-button type="reset" custom-css="button {flex:1}" secondary>Reset</vl-button>\n                        </footer>\n                    </form>\n                </vl-search-filter>\n                <vl-pager\n                    id="pager-for-rich-data-table"\n                    slot="pager"\n                    total-items=${richDataFilterPagerData.data.length}\n                    items-per-page="10"\n                    current-page="1"\n                ></vl-pager>\n            </vl-rich-data-table>\n        `;\n})',...$.parameters?.docs?.source}}};let T=["RichDataTableDefault","RichDataTableSorting","RichDataTableFilter","RichDataTableFilterAndPagination"]},"../../libs/components/src/block/rich-data/stories/vl-rich-data.stories-arg.ts":(e,a,t)=>{t.d(a,{Q:()=>l,w:()=>r});var n=t("../../resources/utils-storybook/index.ts");let r={...n.D8,filterClosable:!1,filterClosed:!1,filterMaxWidth:""},l={...n.RN,filterClosable:{name:"filter-closable",description:'Maakt de filter sluitbaar en toont een knop om de zichtbaarheid van de filter te togglen.\n * Op een klein scherm verschijnt de filter als modal ipv naast de inhoud.\n\n * Om in de "modal"-variant elementen van de filter te verbergen, kan het attribuut `hidden-in-modal` toegevoegd worden.',table:{type:{summary:n.QE.BOOLEAN},category:n.R6.ATTRIBUTES,defaultValue:{summary:r.filterClosable}}},filterClosed:{name:"filter-closed",description:"Verbergt de filter.",table:{type:{summary:n.QE.BOOLEAN},category:n.R6.ATTRIBUTES,defaultValue:{summary:r.filterClosed}}},filterMaxWidth:{name:"filter-max-width",description:'Maximum breedte (CSS value, bv. "300px") die de filter kan innemen in een full-width layout, op grote resolutie.',table:{type:{summary:n.QE.STRING},category:n.R6.ATTRIBUTES,defaultValue:{summary:r.filterMaxWidth}}}}},"../../libs/components/src/form/select/index.ts":(e,a,t)=>{t.d(a,{Y:()=>n.Y});var n=t("../../libs/components/src/form/select/vl-select.component.ts")},"../../libs/components/src/form/select/vl-select.component.ts":(e,a,t)=>{t.d(a,{Y:()=>h});var n=t("../../libs/common/src/index.ts"),r=t("../../node_modules/@domg/govflanders-style/common/index.js"),l=t("../../node_modules/@domg/govflanders-style/component/index.js"),i=t("../../node_modules/lit/index.js"),s=t("../../node_modules/lit/directives/class-map.js"),o=t("../../node_modules/lit/directives/live.js"),d=t("../../libs/components/src/form/form-control/index.ts");let c=(0,i.AH)`
    .vl-select {
        background-color: #fff;
        appearance: none;
        display: inline-block;
        position: relative;
        padding: 0 4rem 0 1.5rem;
        max-width: 100%;
        height: 3.5rem;
        line-height: calc(3.5rem - 0.2rem);
        border: 1px solid #8695a8;
        border-radius: 0.3rem;
        text-decoration: none;
        color: #333332;
        font-family: 'Flanders Art Sans', sans-serif;
        font-size: 1.6rem;
        -webkit-appearance: none;
    }

    .vl-select:focus::-ms-value {
        background: inherit;
        color: inherit;
    }

    .vl-select::-ms-expand {
        display: none;
    }

    .vl-select:hover:not([disabled]) {
        border: 0.2rem solid rgba(0, 85, 204, 0.65);
        padding: 0 3.9rem 0 1.4rem;
        line-height: 3.2rem;
        background-position: calc(100% - 1.4rem) 50%;
    }

    .vl-select:hover:not([disabled]).vl-select--error {
        border-color: #d2373c;
    }

    .vl-select:hover:not([disabled]).vl-select--success {
        border-color: #009e47;
    }

    .vl-select:focus {
        box-shadow: 0 0 0 2px #fff, 0 0 0 5px rgba(0, 85, 204, 0.65);
        outline: transparent solid 0.2rem;
    }

    @supports (outline-offset: 2px) {
        .vl-select:focus {
            box-shadow: none;
            outline: 3px solid rgba(0, 85, 204, 0.65);
            outline-offset: 2px;
        }
    }

    .vl-select[disabled],
    .vl-select--disabled {
        border-color: #8695a8;
        background-color: #f3f5f6;
        color: var(--vl-theme-fg-color-70);
    }

    .vl-select--error {
        border-color: #d2373c;
        background-color: #fbebec;
    }

    .vl-select--success {
        border-color: #009e47;
        background-color: #e6f5ed;
    }

    .vl-select--block {
        display: block;
        width: 100%;
    }

    @media screen and (max-width: 767px) {
        .vl-select {
            height: 3.5rem;
            line-height: 3.5rem;
            font-size: 1.6rem;
        }
    }

    @media all and (min-width: 0\\0) and (min-resolution: 0.001dpcm) {
        .vl-select {
            padding-right: 0;
            background-image: none;
        }
    }
`,m=(0,i.AH)`
    .vl-select {
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .vl-select__container {
        position: relative;
        display: inline-block;
    }

    .vl-select__container.vl-select__container--block {
        display: block;
    }

    .vl-select:has(option.vl-select__placeholder[selected]) {
        color: #687483 !important;
    }

    .vl-select.vl-select--disabled ~ .vl-select__button {
        display: none;
    }

    .vl-select ~ .vl-select__button {
        color: #05c;
        position: absolute;
        width: 2.4rem;
        height: 2.4rem;
        top: 0.6rem;
        right: 3.6rem;
        font-size: 1.4rem;
        border-radius: 0.3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;

        span.vl-icon:before {
            margin-top: -0.2rem;
        }

        &:hover,
        &:focus {
            border: #05c 0.1rem solid;
            background-color: #e6eefa;
            color: #003bb0;
            outline: none;
        }
    }

    .vl-select:not(.vl-select--disabled) {
        &:has(~ .vl-select__button) {
            padding-right: 6rem;
            &:hover {
                padding-right: 5.9rem;
                &:focus {
                    padding-right: 6rem;
                }
            }
        }

        &:focus:hover {
            border-width: 0.1rem;
            padding-right: 4rem;
            padding-left: 1.5rem;
        }
    }

    .vl-vi.vl-vi-nav-down:before {
        color: #6e7985;
        position: absolute;
        right: 1.3rem;
        font-size: 1.3rem;
        top: 0.8rem;
        pointer-events: none;
    }
`;var f=t("../../libs/components/src/form/select/vl-select.defaults.ts");class h extends d.M{static get styles(){return[r.h8,r.BI,c,l.py,m]}static get properties(){return{options:{type:Array},block:{type:Boolean},readonly:{type:Boolean},placeholder:{type:String},autocomplete:{type:String},notDeletable:{type:Boolean,attribute:"not-deletable"},value:{type:String,state:!0}}}get validationTarget(){return this.shadowRoot?.querySelector("select")}connectedCallback(){super.connectedCallback();let e=this.getSelectedOption();this.value=e?.value||"",this.initialOptions=JSON.parse(JSON.stringify(this.options))}updated(e){if(super.updated(e),e.has("options")){let e=this.getSelectedOption();this.value=e?.value||""}if(e.has("value")){let e={value:this.value};this.setValue(this.value),this.dispatchEvent(new CustomEvent("vl-change",{composed:!0,bubbles:!0,detail:e})),this.dispatchInput&&(this.dispatchEvent(new CustomEvent("vl-input",{bubbles:!0,composed:!0,detail:e})),this.dispatchInput=!1),this.dispatchEventIfValid(e)}}render(){let e={"vl-select__container":!0,"vl-select__container--block":this.block},a={"vl-select":!0,"vl-select--disabled":this.disabled,"vl-select--error":this.isInvalid||this.error,"vl-select--success":this.success,"vl-select--block":this.block},t=!!this.value,n=this.options.some(e=>e.group);return(0,i.qy)`
            <div class=${(0,s.H)(e)}>
                <select
                    id=${this.id||i.s6}
                    name=${this.name||i.s6}
                    class=${(0,s.H)(a)}
                    aria-label=${this.label||i.s6}
                    aria-invalid=${this.isInvalid||i.s6}
                    ?required=${this.required}
                    ?disabled=${this.disabled}
                    ?aria-disabled=${this.disabled}
                    ?error=${this.error}
                    .value=${(0,o.V)(this.value)}
                    autocomplete=${this.autocomplete||i.s6}
                    @change=${this.onChange}
                    @input=${this.onSelect}
                >
                    ${this.placeholder?this.renderPlaceholder(t):i.s6}
                    ${n?this.renderGroupedOptions():this.renderSelectOptions(this.options)}
                </select>
                ${t&&!this.notDeletable?this.renderClearButton():i.s6}
                <span class="vl-icon vl-vi vl-vi-nav-down" aria-hidden="true"></span>
            </div>
        `}renderPlaceholder(e){return(0,i.qy)` <option class="vl-select__placeholder" value="" ?selected=${!e} disabled>
            ${this.placeholder}
        </option>`}renderClearButton(){return(0,i.qy)`
            <button
                type="button"
                class="vl-select__button"
                aria-label=${`Verwijder ${this.label} keuze ${this.getSelectedOption()?.label||this.value||""}`}
                @click=${this.clearValue}
            >
                <span class="vl-icon vl-vi vl-vi-close" aria-hidden="true"></span>
            </button>
        `}renderGroupedOptions(){return Object.entries(this.getGroupedOptions()).map(([e,a])=>(0,i.qy)` <optgroup label=${e}>${this.renderSelectOptions(a)}</optgroup>`)}renderSelectOptions(e){return e.map(e=>(0,i.qy)` <option
                value=${e.value}
                ?selected=${this.value===e.value}
                ?disabled=${e.disabled}
            >
                ${e.label||e.value}
            </option>`)}resetFormControl(){for(super.resetFormControl();this.options.length;)this.options.pop();this.initialOptions.forEach(e=>this.options.push({...e})),this.value&&this.requestUpdate("options")}onChange(e){this.value=e?.target?.value}onSelect(){this.dispatchInput=!0}clearValue(){this.dispatchInput=!0,this.value=""}getSelectedOption(){return[...this.options].reverse().find(e=>e.selected)}getGroupedOptions(){return this.options.reduce((e,a)=>{let t=a.group||this.DEFAULT_GROUP_LABEL;return e[t]?e[t].push(a):e[t]=[a],e},{})}constructor(...e){super(...e),this.options=f.p.options,this.value="",this.block=f.p.block,this.placeholder=f.p.placeholder,this.autocomplete=f.p.autocomplete,this.notDeletable=f.p.notDeletable,this.initialOptions=[],this.DEFAULT_GROUP_LABEL="Overig",this.dispatchInput=!1}}h=function(e,a,t,n){var r,l=arguments.length,i=l<3?a:null===n?n=Object.getOwnPropertyDescriptor(a,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,a,t,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(l<3?r(i):l>3?r(a,t,i):r(a,t))||i);return l>3&&i&&Object.defineProperty(a,t,i),i}([(0,n.M1)("vl-select")],h)},"../../libs/components/src/form/select/vl-select.defaults.ts":(e,a,t)=>{t.d(a,{p:()=>n});let n={...t("../../libs/components/src/form/form-control/form-control.defaults.ts").i,options:[],block:!1,placeholder:"",autocomplete:"",notDeletable:!1}}}]);