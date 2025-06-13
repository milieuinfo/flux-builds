"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[9559],{"../../libs/components/src/rich-data-table/stories/vl-rich-data-table.stories.ts":(e,a,t)=>{t.r(a),t.d(a,{RichDataTableDefault:()=>D,RichDataTableFilter:()=>S,RichDataTableFilterAndPagination:()=>B,RichDataTableSorting:()=>R,__namedExportsOrder:()=>$,default:()=>w});var n=t("../../libs/common/storybook/src/index.ts");t("../../libs/elements/src/index.ts");var l=t("../../libs/common/utilities/src/index.ts"),r=t("../../node_modules/lit-html/lit-html.js"),i=t("../../libs/components/src/rich-data-table/vl-rich-data-table.component.ts"),s=t("../../libs/components/src/next/search-filter/index.ts"),d=t("../../libs/components/src/next/button/index.ts"),o=t("../../libs/components/src/next/title/index.ts"),c=t("../../libs/form/src/next/form-label/index.ts"),m=t("../../libs/form/src/next/input-field/index.ts"),h=t("../../libs/form/src/next/select/index.ts");let f={data:[{id:0,name:"Wegen",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Sander",lastName:"Kleykens"}]},{id:1,name:"Water",manager:{firstName:"Siegfried",lastName:"Brusselmans"},medewerkers:[{firstName:"Guy",lastName:"Wauters"}]},{id:2,name:"Diversiteit",manager:{firstName:"Hendrik",lastName:"Vangenechten"},medewerkers:[{firstName:"Gunther",lastName:"Jaegers"}]},{id:3,name:"Voetafdrukmeting",manager:{firstName:"Pascal",lastName:"De Smet"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:4,name:"Grondwater",manager:{firstName:"Julie",lastName:"Meert"},medewerkers:[{firstName:"Hans",lastName:"Dhondt"}]},{id:5,name:"Grondwatermeting",manager:{firstName:"Julie",lastName:"Meert"},medewerkers:[{firstName:"Thomas",lastName:"Kristiaens"}]}]},p=()=>{customElements.whenDefined("vl-rich-data-table").then(()=>{let e=document.querySelector("#rich-data-table-filter");if(e){e.data=f,e.addEventListener("change",t=>{let n=[...f.data];if(t.detail.formData)for(let e of t.detail.formData.entries())n=a(n,e[0],e[1]);e.data={data:n,paging:{currentPage:1,totalItems:n.length}}});let a=(e,a,n)=>""===n?e:e.filter(e=>t(e,a).includes(n)),t=(e,a)=>{let t=a.split("."),n=e;for(let e=0;e<t.length;e++){if(void 0===n[t[e]])return;n=n[t[e]]}return n.toString()}}})},v={data:[{id:0,name:"Wegen",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Sander",lastName:"Kleykens"}]},{id:1,name:"Water",manager:{firstName:"Siegfried",lastName:"Brusselmans"},medewerkers:[{firstName:"Guy",lastName:"Wauters"}]},{id:2,name:"Diversiteit",manager:{firstName:"Hendrik",lastName:"Vangenechten"},medewerkers:[{firstName:"Gunther",lastName:"Jaegers"}]},{id:3,name:"Voetafdrukmeting",manager:{firstName:"Pascal",lastName:"De Smet"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:4,name:"Grondwater",manager:{firstName:"Julie",lastName:"Meert"},medewerkers:[{firstName:"Hans",lastName:"Dhondt"}]},{id:5,name:"Grondwatermeting",manager:{firstName:"Julie",lastName:"Meert"},medewerkers:[{firstName:"Thomas",lastName:"Kristiaens"}]},{id:6,name:"Project #7",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:7,name:"Project #8",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:8,name:"Project #9",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:9,name:"Project #10",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:10,name:"Project #11",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:11,name:"Project #12",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:12,name:"Project #13",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:13,name:"Project #14",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:14,name:"Project #15",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:15,name:"Project #16",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:16,name:"Project #17",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:17,name:"Project #18",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:18,name:"Project #19",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:19,name:"Project #20",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:20,name:"Project #21",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:21,name:"Project #22",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:22,name:"Project #23",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:23,name:"Project #24",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:24,name:"Project #25",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]}]},u=()=>{customElements.whenDefined("vl-rich-data-table").then(()=>{let e=document.querySelector("#rich-data-table-pagination"),a=document.querySelector("#pager-for-rich-data-table");if(e&&a){e.addEventListener("change",l=>{let r,i=v.data,s=v.data.length;if(l.detail.formData)for(let e of(r=[],l.detail.formData.entries()))s=(i=n(i,e[0],e[1])).length,r.push({name:e[0],value:e[1]});l.detail.paging&&(i=t(l.detail.paging.currentPage,a.itemsPerPage,i)),e.data={data:i,paging:{currentPage:l.detail.paging.currentPage,totalItems:s},filter:r}});let t=(e,a,t)=>{let n=(e-1)*a;return t.slice(n,n+a)};e.data={data:t(1,10,v.data)};let n=(e,a,t)=>""===t?e:e.filter(e=>l(e,a).includes(t)),l=(e,a)=>{let t=a.split("."),n=e;for(let e=0;e<t.length;e++){if(void 0===n[t[e]])return;n=n[t[e]]}return n.toString()}}})},g=()=>{let e=e=>{let a=[...e.data.data];return e=>{let{sorting:t}=e.detail,n=e.target;t?n.data={data:[...a].sort((e,a)=>{for(let n=0;n<t.length;n++){let l=t[n],r=e[l.name],i=a[l.name],s="asc"===l.direction;if(r<i)return s?-1:1;if(r>i)return s?1:-1}return 0}),sorting:t}:n.data=a}};customElements.whenDefined("vl-rich-data-table").then(()=>{let a=document.querySelector("#rich-data-table-sorting");a&&a.addEventListener("change",e(a))})};var b=t("../../libs/components/src/rich-data/stories/vl-rich-data.stories-arg.ts");let N={...b.w,collapsedM:!1,collapsedS:!1,collapsedXS:!1},x={...b.Q,collapsedM:{name:"data-vl-collapsed-m",description:"Vanaf medium schermgrootte, cellen per rij onder elkaar ipv naast elkaar",table:{category:n.R6.ATTRIBUTES,type:{summary:n.QE.BOOLEAN},defaultValue:{summary:N.collapsedM}}},collapsedS:{name:"data-vl-collapsed-s",description:"Vanaf een small schermgrootte, cellen per rij onder elkaar ipv naast elkaar",table:{category:n.R6.ATTRIBUTES,type:{summary:n.QE.BOOLEAN},defaultValue:{summary:N.collapsedS}}},collapsedXS:{name:"data-vl-collapsed-xs",description:"Vanaf een extra small schermgrootte, cellen per rij onder elkaar ipv naast elkaar",table:{category:n.R6.ATTRIBUTES,type:{summary:n.QE.BOOLEAN},defaultValue:{summary:N.collapsedXS}}}};t("../../node_modules/react/index.js");var k=t("../../node_modules/react/jsx-runtime.js"),j=t("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),P=t("../../node_modules/@storybook/blocks/dist/index.mjs");function y(e){let a=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",a:"a",code:"code",h2:"h2",pre:"pre",h3:"h3"},(0,j.RP)(),e.components),{VluxMetaData:t}=a;return t||function(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VluxMetaData",!0),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(a.h1,{id:"rich-data-table",children:"Rich Data Table"}),"\n",(0,k.jsx)(t,{id:"components-rich-data-table"}),"\n",(0,k.jsx)(a.p,{children:"Een tabel op basis van een dynamische lijst van data die uitgebreid kan worden met functionaliteiten om het consumeren\nvan data door de gebruiker te verbeteren."}),"\n",(0,k.jsx)(a.p,{children:"De code voorbeelden bij elke story is dezelfde code die gebruikt wordt om de stories te laten werken."}),"\n",(0,k.jsxs)(a.ul,{children:["\n",(0,k.jsxs)(a.li,{children:["combineert de functionaliteiten van het ",(0,k.jsx)(a.a,{href:"?path=/docs/components-rich-data--rich-data-default",children:"rich-data"}),"-component en ",(0,k.jsx)(a.a,{href:"?path=/docs/elements-data-table--data-table-default",children:"data-table"}),"-component."]}),"\n",(0,k.jsxs)(a.li,{children:["om de velden te configureren kan je gebruik maken van ",(0,k.jsx)(a.code,{children:"rich-data-field"})]}),"\n"]}),"\n",(0,k.jsx)(a.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,k.jsx)(a.pre,{children:(0,k.jsx)(a.code,{className:"language-js",children:"import { RichDataTableComponent } from '@domg-wc/components';\n"})}),"\n",(0,k.jsx)(a.pre,{children:(0,k.jsx)(a.code,{className:"language-html",children:'<vl-rich-data-table>\n    <vl-rich-data-field data-vl-name="id" data-vl-label="ID" data-vl-selector="id"></vl-rich-data-field>\n    <vl-rich-data-field data-vl-name="name" data-vl-label="Naam" data-vl-selector="name"></vl-rich-data-field>\n</vl-rich-data-table>\n'})}),"\n",(0,k.jsx)(a.h2,{id:"default",children:"Default"}),"\n",(0,k.jsx)(P.Hl,{of:D}),"\n",(0,k.jsx)(a.h2,{id:"data-instellen",children:"Data instellen"}),"\n",(0,k.jsxs)(a.p,{children:["Om table ",(0,k.jsx)(a.code,{children:"data"})," in te stellen / bij te werken:"]}),"\n",(0,k.jsx)(a.p,{children:"Werk je met statische data (die client side niet gaan wijzigen), dan kan je de data meegeven als string attribuut:"}),"\n",(0,k.jsxs)(a.ul,{children:["\n",(0,k.jsx)(a.li,{children:"als je data wil meegeven als attribuut doe je dit in stringified JSON formaat, bv.:"}),"\n"]}),"\n",(0,k.jsx)(a.pre,{children:(0,k.jsx)(a.code,{className:"language-js",children:'\'{"data": [{ "id" : 0, "name" : "Project #1" }, { "id" : 1, "name" : "Project #2"}]}\';\n'})}),"\n",(0,k.jsx)(a.p,{children:"Wil je client-side mogelijkheden aanbieden om te filteren / pagineren, is het belangrijk dat de data dynamisch zelf update:"}),"\n",(0,k.jsxs)(a.ul,{children:["\n",(0,k.jsxs)(a.li,{children:["voor filtering & paginatie (zie ook code voorbeelden verder) moet je ",(0,k.jsx)(a.code,{children:".data"})," dynamisch bijwerken"]}),"\n",(0,k.jsxs)(a.li,{children:["refereer ",(0,k.jsx)(a.code,{children:"rich-data-table"})," en stel in: ",(0,k.jsx)(a.code,{children:"richDataTable.data = ..."})]}),"\n",(0,k.jsx)(a.li,{children:"geef data door als JavaScript object, bv.:"}),"\n"]}),"\n",(0,k.jsx)(a.pre,{children:(0,k.jsx)(a.code,{className:"language-json",children:'{\n    "data": [\n        { "id": 0, "name": "Water", "owner": "Kevin Jansens" },\n        { "id": 1, "name": "Vuur", "owner": "Anton Vanherrewege" },\n        { "id": 2, "name": "Aarde", "owner": "Hedwig Jansens" }\n    ]\n}\n'})}),"\n",(0,k.jsx)(a.h2,{id:"sorting",children:"Sorting"}),"\n",(0,k.jsx)(a.p,{children:"Om sorting te laten werken moet je zelf een sorting algoritme implementeren:"}),"\n",(0,k.jsxs)("details",{children:[(0,k.jsx)("summary",{children:"code voorbeeld hoe sorting toe te passen"}),(0,k.jsx)(P.kL,{code:"export const sortingRichTableImplementation = ()=>{\n    const tableSorter = (table)=>{\n        const originalTableData = [\n            ...table.data.data\n        ];\n        return (event)=>{\n            const { sorting } = event.detail;\n            const table = event.target;\n            if (sorting) {\n                table.data = {\n                    data: [\n                        ...originalTableData\n                    ].sort((firstEl, secondEl)=>{\n                        for(let i = 0; i < sorting.length; i++){\n                            const criteria = sorting[i];\n                            const firstValue = firstEl[criteria.name];\n                            const secondValue = secondEl[criteria.name];\n                            const isAscending = criteria.direction === 'asc';\n                            if (firstValue < secondValue) {\n                                return isAscending ? -1 : 1;\n                            } else if (firstValue > secondValue) {\n                                return isAscending ? 1 : -1;\n                            }\n                        }\n                        return 0;\n                    }),\n                    sorting\n                };\n            } else {\n                table.data = originalTableData;\n            }\n        };\n    };\n    customElements.whenDefined('vl-rich-data-table').then(()=>{\n        const table = document.querySelector('#rich-data-table-sorting');\n        if (table) table.addEventListener('change', tableSorter(table));\n    });\n};\nexport default sortingRichTableImplementation;\n",language:"ts",dark:!0})]}),"\n",(0,k.jsxs)(a.p,{children:["Een template voorbeeld vind je hieronder. Klik ",(0,k.jsx)(a.code,{children:"Show code"})," de html te zien."]}),"\n",(0,k.jsx)(a.p,{children:"Belangrijk:"}),"\n",(0,k.jsxs)(a.ul,{children:["\n",(0,k.jsxs)(a.li,{children:[(0,k.jsx)(a.code,{children:"data-vl-sortable"})," toevoegen op de ",(0,k.jsx)(a.code,{children:"vl-rich-data-field"}),"-velden waarop gesorteerd moet worden"]}),"\n",(0,k.jsxs)(a.li,{children:["om de data te sorteren kan je gebruik maken van ",(0,k.jsx)(a.code,{children:"rich-data-sorter"})]}),"\n"]}),"\n",(0,k.jsx)(P.Hl,{of:R,layout:"padded"}),"\n",(0,k.jsx)(a.h2,{id:"filter",children:"Filter"}),"\n",(0,k.jsxs)(a.p,{children:["Om filtering te laten werken, adviseren we ",(0,k.jsx)(a.code,{children:"vl-search-filter"})," te implementeren.\nMeer info over ",(0,k.jsx)(a.code,{children:"vl-search-filter"})," ",(0,k.jsx)(a.a,{href:"?path=/docs/elements-search-filter--search-filter-default",children:"hier"}),"."]}),"\n",(0,k.jsx)(a.p,{children:"Daarnaast moet je ook de filtering & change detection zelf implementeren."}),"\n",(0,k.jsxs)("details",{children:[(0,k.jsx)("summary",{children:"gebruikte mock data in onderstaande voorbeeld"}),(0,k.jsx)(P.kL,{code:"export const richDataFilterData = {\n    data: [\n        {\n            id: 0,\n            name: 'Wegen',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Sander',\n                    lastName: 'Kleykens'\n                }\n            ]\n        },\n        {\n            id: 1,\n            name: 'Water',\n            manager: {\n                firstName: 'Siegfried',\n                lastName: 'Brusselmans'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Guy',\n                    lastName: 'Wauters'\n                }\n            ]\n        },\n        {\n            id: 2,\n            name: 'Diversiteit',\n            manager: {\n                firstName: 'Hendrik',\n                lastName: 'Vangenechten'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Gunther',\n                    lastName: 'Jaegers'\n                }\n            ]\n        },\n        {\n            id: 3,\n            name: 'Voetafdrukmeting',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'De Smet'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 4,\n            name: 'Grondwater',\n            manager: {\n                firstName: 'Julie',\n                lastName: 'Meert'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Hans',\n                    lastName: 'Dhondt'\n                }\n            ]\n        },\n        {\n            id: 5,\n            name: 'Grondwatermeting',\n            manager: {\n                firstName: 'Julie',\n                lastName: 'Meert'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Thomas',\n                    lastName: 'Kristiaens'\n                }\n            ]\n        }\n    ]\n};\nexport default richDataFilterData;\n",language:"ts",dark:!0})]}),"\n",(0,k.jsxs)("details",{children:[(0,k.jsx)("summary",{children:"code voorbeeld hoe filtering toe te passen"}),(0,k.jsx)(P.kL,{code:"import richDataFilterData from './vl-rich-data-table-filter.stories-mock';\nconst data = richDataFilterData;\nexport const filterRichTableImplementation = ()=>{\n    customElements.whenDefined('vl-rich-data-table').then(()=>{\n        const element = document.querySelector('#rich-data-table-filter');\n        if (element) {\n            element.data = data;\n            element.addEventListener('change', (e)=>{\n                let filteredData = [\n                    ...data.data\n                ];\n                if (e.detail.formData) {\n                    for (const entry of e.detail.formData.entries()){\n                        filteredData = filter(filteredData, entry[0], entry[1]);\n                    }\n                }\n                element.data = {\n                    data: filteredData,\n                    paging: {\n                        currentPage: 1,\n                        totalItems: filteredData.length\n                    }\n                };\n            });\n            const filter = (data, pathToKey, value)=>{\n                if (value === '') {\n                    return data;\n                } else {\n                    return data.filter((element)=>{\n                        const valueByPath = findValueByPath(element, pathToKey);\n                        return valueByPath.includes(value);\n                    });\n                }\n            };\n            const findValueByPath = (element, pathToKey)=>{\n                const keys = pathToKey.split('.');\n                let current = element;\n                for(let i = 0; i < keys.length; i++){\n                    if (current[keys[i]] !== undefined) {\n                        current = current[keys[i]];\n                    } else {\n                        return undefined;\n                    }\n                }\n                return current.toString();\n            };\n        }\n    });\n};\nexport default filterRichTableImplementation;\n",language:"ts",dark:!0})]}),"\n",(0,k.jsxs)(a.p,{children:["Template voorbeeld vind je hieronder. Klik ",(0,k.jsx)(a.code,{children:"Show code"})," de html te zien."]}),"\n",(0,k.jsx)(P.Hl,{of:S,layout:"padded"}),"\n",(0,k.jsx)(a.h2,{id:"paginatie",children:"Paginatie"}),"\n",(0,k.jsxs)(a.p,{children:["Om paginatie te laten werken, moet je ",(0,k.jsx)(a.code,{children:"vl-pager"})," implementeren. Zie HTML code sample.\nMeer info over ",(0,k.jsx)(a.code,{children:"vl-pager"})," ",(0,k.jsx)(a.a,{href:"?path=/docs/components-pager--pager-default",children:"hier"}),"."]}),"\n",(0,k.jsxs)(a.p,{children:["Daarnaast moet je specifieke logica schrijven gerelateerd tot de paginatie om ",(0,k.jsx)(a.code,{children:"vl-pager"})," te laten werken.\nIn onderstaande code kan je zien op welke manier je filtering & paginatie kan combineren."]}),"\n",(0,k.jsxs)("details",{children:[(0,k.jsx)("summary",{children:"gebruikte mock data in onderstaande voorbeeld"}),(0,k.jsx)(P.kL,{code:"export const richDataFilterPagerData = {\n    data: [\n        {\n            id: 0,\n            name: 'Wegen',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Sander',\n                    lastName: 'Kleykens'\n                }\n            ]\n        },\n        {\n            id: 1,\n            name: 'Water',\n            manager: {\n                firstName: 'Siegfried',\n                lastName: 'Brusselmans'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Guy',\n                    lastName: 'Wauters'\n                }\n            ]\n        },\n        {\n            id: 2,\n            name: 'Diversiteit',\n            manager: {\n                firstName: 'Hendrik',\n                lastName: 'Vangenechten'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Gunther',\n                    lastName: 'Jaegers'\n                }\n            ]\n        },\n        {\n            id: 3,\n            name: 'Voetafdrukmeting',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'De Smet'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 4,\n            name: 'Grondwater',\n            manager: {\n                firstName: 'Julie',\n                lastName: 'Meert'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Hans',\n                    lastName: 'Dhondt'\n                }\n            ]\n        },\n        {\n            id: 5,\n            name: 'Grondwatermeting',\n            manager: {\n                firstName: 'Julie',\n                lastName: 'Meert'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Thomas',\n                    lastName: 'Kristiaens'\n                }\n            ]\n        },\n        {\n            id: 6,\n            name: 'Project #7',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 7,\n            name: 'Project #8',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 8,\n            name: 'Project #9',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 9,\n            name: 'Project #10',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 10,\n            name: 'Project #11',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 11,\n            name: 'Project #12',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 12,\n            name: 'Project #13',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 13,\n            name: 'Project #14',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 14,\n            name: 'Project #15',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 15,\n            name: 'Project #16',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 16,\n            name: 'Project #17',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 17,\n            name: 'Project #18',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 18,\n            name: 'Project #19',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 19,\n            name: 'Project #20',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 20,\n            name: 'Project #21',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 21,\n            name: 'Project #22',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 22,\n            name: 'Project #23',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 23,\n            name: 'Project #24',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 24,\n            name: 'Project #25',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        }\n    ]\n};\nexport default richDataFilterPagerData;\n",language:"ts",dark:!0})]}),"\n",(0,k.jsxs)("details",{children:[(0,k.jsx)("summary",{children:"code voorbeeld hoe paginatie toe te passen"}),(0,k.jsx)(P.kL,{code:"import richDataFilterPagerData from './vl-rich-data-table-pagination.stories-mock';\nexport const paginationRichTableImplementation = ()=>{\n    customElements.whenDefined('vl-rich-data-table').then(()=>{\n        const data = richDataFilterPagerData;\n        const richTable = document.querySelector('#rich-data-table-pagination');\n        const pager = document.querySelector('#pager-for-rich-data-table');\n        if (richTable && pager) {\n            richTable.addEventListener('change', (e)=>{\n                let newData = data.data;\n                let totalItems = data.data.length;\n                let filterEntries = undefined;\n                if (e.detail.formData) {\n                    filterEntries = [];\n                    for (const entry of e.detail.formData.entries()){\n                        newData = filter(newData, entry[0], entry[1]);\n                        totalItems = newData.length;\n                        filterEntries.push({\n                            name: entry[0],\n                            value: entry[1]\n                        });\n                    }\n                }\n                if (e.detail.paging) {\n                    newData = page(e.detail.paging.currentPage, pager.itemsPerPage, newData);\n                }\n                richTable.data = {\n                    data: newData,\n                    paging: {\n                        currentPage: e.detail.paging.currentPage,\n                        totalItems: totalItems\n                    },\n                    filter: filterEntries\n                };\n            });\n            const page = (page, itemsPerPage, data)=>{\n                const start = (page - 1) * itemsPerPage;\n                const end = start + itemsPerPage;\n                return data.slice(start, end);\n            };\n            richTable.data = {\n                data: page(1, 10, data.data)\n            };\n            const filter = (data, pathToKey, value)=>{\n                if (value === '') {\n                    return data;\n                }\n                return data.filter((element)=>{\n                    const valueByPath = findValueByPath(element, pathToKey);\n                    return valueByPath.includes(value);\n                });\n            };\n            const findValueByPath = (element, pathToKey)=>{\n                const keys = pathToKey.split('.');\n                let current = element;\n                for(let i = 0; i < keys.length; i++){\n                    if (current[keys[i]] !== undefined) {\n                        current = current[keys[i]];\n                    } else {\n                        return undefined;\n                    }\n                }\n                return current.toString();\n            };\n        }\n    });\n};\nexport default paginationRichTableImplementation;\n",language:"ts",dark:!0})]}),"\n",(0,k.jsxs)(a.p,{children:["Template voorbeeld vind je hieronder. Klik ",(0,k.jsx)(a.code,{children:"Show code"})," de html te zien."]}),"\n",(0,k.jsx)(a.h3,{id:"instellen-van-vlpager-component",children:"Instellen van VlPager component"}),"\n",(0,k.jsxs)(a.ul,{children:["\n",(0,k.jsxs)(a.li,{children:["op de ",(0,k.jsx)(a.code,{children:"vl-pager"})," component kan je naar keuze:","\n",(0,k.jsxs)(a.ul,{children:["\n",(0,k.jsxs)(a.li,{children:["de begin pagina instellen (",(0,k.jsx)(a.code,{children:"current-page"}),", in vb. hieronder op ",(0,k.jsx)(a.code,{children:"1"}),")"]}),"\n",(0,k.jsxs)(a.li,{children:["het aantal records per pagina instellen (",(0,k.jsx)(a.code,{children:"items-per-page"}),", in vb. hieronder op ",(0,k.jsx)(a.code,{children:"10"}),")"]}),"\n"]}),"\n"]}),"\n",(0,k.jsxs)(a.li,{children:["het is echter belangrijk dat ",(0,k.jsx)(a.code,{children:"total-items"})," dynamisch update met het aantal records naargelang de huidige staat van je\ndata"]}),"\n"]}),"\n",(0,k.jsx)(P.Hl,{of:B,layout:"padded"}),"\n",(0,k.jsx)(a.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,k.jsx)(P.ov,{of:D}),"\n",(0,k.jsx)(a.h2,{id:"referenties",children:"Referenties"}),"\n",(0,k.jsx)(a.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,k.jsx)(a.p,{children:"Digitaal Vlaanderen bied geen component aan voor de Rich Data Table maar wel beperkte functionaliteit voor de Data\ntable. Die nemen we over, daarnaast volgen we ook de styling van de Data Table."}),"\n",(0,k.jsx)(a.p,{children:(0,k.jsx)(a.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-data-table",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Rich Data Table"})}),"\n",(0,k.jsx)(a.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,k.jsxs)(a.p,{children:[(0,k.jsx)(a.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlRichDataTable.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Rich Data Table"}),"\n",(0,k.jsx)(a.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-rich-data-table.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - Rich Data Table"})]})]})}(0,l.gy)([i.B,s.E,o.I,d.Y,c.E,m.Y,h.Y]);let w={id:"components-rich-data-table",title:"Components/rich-data-table",tags:["autodocs"],args:N,argTypes:x,parameters:{docs:{page:function(e={}){let{wrapper:a}=Object.assign({},(0,j.RP)(),e.components);return a?(0,k.jsx)(a,Object.assign({},e,{children:(0,k.jsx)(y,e)})):y(e)}},layout:"fullscreen"}},D=(0,n._7)(N,({collapsedM:e,collapsedS:a,collapsedXS:t})=>(0,r.qy)`
        <vl-rich-data-table
            data-vl-data="${'{"data": [{ "id" : 0, "name" : "Project #1" , "owner" : "Jan Jansens" }, { "id" : 1, "name" : "Project #2" , "owner" : "Marie Vermeersch" }]}'}"
            ?data-vl-collapsed-m=${e}
            ?data-vl-collapsed-s=${a}
            ?data-vl-collapsed-xs=${t}
        >
            <vl-rich-data-field data-vl-name="id" data-vl-label="ID" data-vl-selector="id"></vl-rich-data-field>
            <vl-rich-data-field data-vl-name="name" data-vl-label="Naam" data-vl-selector="name"></vl-rich-data-field>
            <vl-rich-data-field data-vl-name="owner" data-vl-selector="owner">
                <template slot="label">
                    <span>Eigenaar</span>
                </template>
            </vl-rich-data-field>
        </vl-rich-data-table>
    `).bind({});D.storyName="vl-rich-data-table - default",D.args={collapsedM:!1,collapsedS:!1,collapsedXS:!1};let R=(0,n._7)(N,({collapsedM:e,collapsedS:a,collapsedXS:t})=>(g(),(0,r.qy)`
        <vl-rich-data-table
            id="rich-data-table-sorting"
            data-vl-data="${'{"data": [{ "id" : 0, "name" : "Water" , "owner" : "Kevin Jansens" }, { "id" : 1, "name" : "Vuur" , "owner" : "Anton Vanherrewege" }, { "id" : 2, "name" : "Aarde" , "owner" : "Hedwig Jansens" }]}'}"
            ?data-vl-collapsed-m=${e}
            ?data-vl-collapsed-s=${a}
            ?data-vl-collapsed-xs=${t}
        >
            <vl-rich-data-field
                data-vl-name="id"
                data-vl-label="ID"
                data-vl-selector="id"
                data-vl-sortable=""
                data-vl-sorting-direction="asc"
            ></vl-rich-data-field>
            <vl-rich-data-field
                data-vl-name="name"
                data-vl-label="Naam"
                data-vl-selector="name"
                data-vl-sortable=""
            ></vl-rich-data-field>
            <vl-rich-data-field data-vl-name="owner" data-vl-selector="owner" data-vl-sortable="">
                <template slot="label">
                    <span>Eigenaar</span>
                </template>
            </vl-rich-data-field>
        </vl-rich-data-table>
    `)).bind({});R.storyName="vl-rich-data-table - sorting",R.args={collapsedM:!1,collapsedS:!1,collapsedXS:!1};let S=(0,n._7)(N,({collapsedM:e,collapsedS:a,collapsedXS:t,filterClosable:n,filterClosed:l})=>(p(),(0,r.qy)`
            <vl-rich-data-table
                id="rich-data-table-filter"
                ?data-vl-collapsed-m=${e}
                ?data-vl-collapsed-s=${a}
                ?data-vl-collapsed-xs=${t}
                ?data-vl-filter-closable=${n}
                ?data-vl-filter-closed=${l}
            >
                <vl-rich-data-field data-vl-label="ID" data-vl-selector="id"></vl-rich-data-field>
                <vl-rich-data-field data-vl-label="Naam Project" data-vl-selector="name"></vl-rich-data-field>
                <vl-rich-data-field
                    data-vl-label="Naam Manager"
                    data-vl-selector="manager.lastName"
                ></vl-rich-data-field>
                <vl-rich-data-field
                    data-vl-label="Eerste medewerker"
                    data-vl-selector="medewerkers.0.lastName"
                ></vl-rich-data-field>
                <vl-search-filter-next slot="filter" alt>
                    <form>
                        <section>
                            <vl-title-next type="h2" alt no-space-bottom="">Doorzoek projecten</vl-title-next>
                            <div>
                                <vl-form-label-next
                                    for="filterOpId"
                                    label="Project id"
                                    light
                                ></vl-form-label-next>
                                <vl-input-field-next
                                    id="filterOpId"
                                    type="text"
                                    name="id"
                                    block
                                ></vl-input-field-next>
                            </div>
                            <div>
                                <vl-form-label-next for="filterOpNaamProject" label="Project naam"
                                                    light></vl-form-label-next>
                                <vl-input-field-next
                                    type="text"
                                    id="filterOpNaamProject"
                                    name="name"
                                    block
                                ></vl-input-field-next>
                            </div>
                            <div>
                                <vl-form-label-next for="filterOpNaamManager" label="Manager familienaam"
                                                    light></vl-form-label-next>
                                <vl-input-field-next
                                    type="text"
                                    id="filterOpNaamManager"
                                    name="manager.lastName"
                                    block
                                    autocomplete="family-name"
                                ></vl-input-field-next>
                            </div>
                        </section>
                        <footer>
                            <vl-button-next type="submit" custom-css="button {flex:1}">Zoeken</vl-button-next>
                            <vl-button-next type="reset" custom-css="button {flex:1}" secondary>Reset</vl-button-next-->
                        </footer>
                    </form>
                </vl-search-filter-next>
                <vl-pager
                    id="rich-data-table-filter"
                    slot="pager"
                    data-vl-total-items="6"
                    data-vl-items-per-page="10"
                    data-vl-current-page="1"
                    data-vl-align-center=""
                ></vl-pager>
            </vl-rich-data-table>
        `)).bind({});S.storyName="vl-rich-data-table - filter",S.args={filterClosable:!0};let B=(0,n._7)(N,({collapsedM:e,collapsedS:a,collapsedXS:t,filterClosable:n,filterClosed:l})=>(u(),(0,r.qy)`
            <vl-rich-data-table
                id="rich-data-table-pagination"
                ?data-vl-collapsed-m=${e}
                ?data-vl-collapsed-s=${a}
                ?data-vl-collapsed-xs=${t}
                ?data-vl-filter-closable=${n}
                ?data-vl-filter-closed=${l}
            >
                <vl-rich-data-field data-vl-label="ID" data-vl-selector="id"></vl-rich-data-field>
                <vl-rich-data-field data-vl-label="Naam Project" data-vl-selector="name"></vl-rich-data-field>
                <vl-rich-data-field
                    data-vl-label="Naam Manager"
                    data-vl-selector="manager.lastName"
                ></vl-rich-data-field>
                <vl-rich-data-field
                    data-vl-label="Eerste medewerker"
                    data-vl-selector="medewerkers.0.lastName"
                ></vl-rich-data-field>
                <vl-search-filter-next slot="filter" alt>
                    <form>
                        <section>
                            <vl-title-next type="h2" alt no-space-bottom="">Doorzoek projecten</vl-title-next>
                            <div>
                                <vl-form-label-next
                                    for="filterOpId"
                                    label="Project id"
                                    light
                                ></vl-form-label-next>
                                <vl-input-field-next
                                    id="filterOpId"
                                    type="text"
                                    name="id"
                                    block
                                ></vl-input-field-next>
                            </div>
                        </section>
                        <section>
                            <vl-title-next type="h2" alt no-space-bottom="">Project details</vl-title-next>
                            <div>
                                <vl-form-label-next for="filterOpNaamProject" label="Project naam"
                                                    light></vl-form-label-next>
                                <vl-input-field-next
                                    type="text"
                                    id="filterOpNaamProject"
                                    name="name"
                                    block
                                ></vl-input-field-next>
                            </div>
                            <div>
                                <vl-form-label-next for="filterOpNaamManager" label="Manager familienaam"
                                                    light></vl-form-label-next>
                                <vl-input-field-next
                                    type="text"
                                    id="filterOpNaamManager"
                                    name="manager.lastName"
                                    block
                                ></vl-input-field-next>
                            </div>
                        </section>
                        <footer>
                            <vl-button-next type="submit" custom-css="button {flex:1}">Zoeken</vl-button-next>
                            <vl-button-next type="reset" custom-css="button {flex:1}" secondary>Reset</vl-button-next-->
                        </footer>
                    </form>
                </vl-search-filter-next>
                <vl-pager
                    id="pager-for-rich-data-table"
                    slot="pager"
                    data-vl-total-items=${v.data.length}
                    data-vl-items-per-page="10"
                    data-vl-current-page="1"
                ></vl-pager>
            </vl-rich-data-table>
        `)).bind({});B.storyName="vl-rich-data-table - filter and pagination",B.args={filterClosable:!0,filterClosed:!0},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:'story(richDataTableArgs, ({\n  collapsedM,\n  collapsedS,\n  collapsedXS\n}) => {\n  const data = \'{"data": [{ "id" : 0, "name" : "Project #1" , "owner" : "Jan Jansens" }, { "id" : 1, "name" : "Project #2" , "owner" : "Marie Vermeersch" }]}\';\n  return html`\n        <vl-rich-data-table\n            data-vl-data="${data}"\n            ?data-vl-collapsed-m=${collapsedM}\n            ?data-vl-collapsed-s=${collapsedS}\n            ?data-vl-collapsed-xs=${collapsedXS}\n        >\n            <vl-rich-data-field data-vl-name="id" data-vl-label="ID" data-vl-selector="id"></vl-rich-data-field>\n            <vl-rich-data-field data-vl-name="name" data-vl-label="Naam" data-vl-selector="name"></vl-rich-data-field>\n            <vl-rich-data-field data-vl-name="owner" data-vl-selector="owner">\n                <template slot="label">\n                    <span>Eigenaar</span>\n                </template>\n            </vl-rich-data-field>\n        </vl-rich-data-table>\n    `;\n})',...D.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:'story(richDataTableArgs, ({\n  collapsedM,\n  collapsedS,\n  collapsedXS\n}) => {\n  const data = \'{"data": [{ "id" : 0, "name" : "Water" , "owner" : "Kevin Jansens" }, { "id" : 1, "name" : "Vuur" , "owner" : "Anton Vanherrewege" }, { "id" : 2, "name" : "Aarde" , "owner" : "Hedwig Jansens" }]}\';\n  sortingRichTableImplementation();\n  return html`\n        <vl-rich-data-table\n            id="rich-data-table-sorting"\n            data-vl-data="${data}"\n            ?data-vl-collapsed-m=${collapsedM}\n            ?data-vl-collapsed-s=${collapsedS}\n            ?data-vl-collapsed-xs=${collapsedXS}\n        >\n            <vl-rich-data-field\n                data-vl-name="id"\n                data-vl-label="ID"\n                data-vl-selector="id"\n                data-vl-sortable=""\n                data-vl-sorting-direction="asc"\n            ></vl-rich-data-field>\n            <vl-rich-data-field\n                data-vl-name="name"\n                data-vl-label="Naam"\n                data-vl-selector="name"\n                data-vl-sortable=""\n            ></vl-rich-data-field>\n            <vl-rich-data-field data-vl-name="owner" data-vl-selector="owner" data-vl-sortable="">\n                <template slot="label">\n                    <span>Eigenaar</span>\n                </template>\n            </vl-rich-data-field>\n        </vl-rich-data-table>\n    `;\n})',...R.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:'story(richDataTableArgs, ({\n  collapsedM,\n  collapsedS,\n  collapsedXS,\n  filterClosable,\n  filterClosed\n}) => {\n  filterRichTableImplementation();\n  return html`\n            <vl-rich-data-table\n                id="rich-data-table-filter"\n                ?data-vl-collapsed-m=${collapsedM}\n                ?data-vl-collapsed-s=${collapsedS}\n                ?data-vl-collapsed-xs=${collapsedXS}\n                ?data-vl-filter-closable=${filterClosable}\n                ?data-vl-filter-closed=${filterClosed}\n            >\n                <vl-rich-data-field data-vl-label="ID" data-vl-selector="id"></vl-rich-data-field>\n                <vl-rich-data-field data-vl-label="Naam Project" data-vl-selector="name"></vl-rich-data-field>\n                <vl-rich-data-field\n                    data-vl-label="Naam Manager"\n                    data-vl-selector="manager.lastName"\n                ></vl-rich-data-field>\n                <vl-rich-data-field\n                    data-vl-label="Eerste medewerker"\n                    data-vl-selector="medewerkers.0.lastName"\n                ></vl-rich-data-field>\n                <vl-search-filter-next slot="filter" alt>\n                    <form>\n                        <section>\n                            <vl-title-next type="h2" alt no-space-bottom="">Doorzoek projecten</vl-title-next>\n                            <div>\n                                <vl-form-label-next\n                                    for="filterOpId"\n                                    label="Project id"\n                                    light\n                                ></vl-form-label-next>\n                                <vl-input-field-next\n                                    id="filterOpId"\n                                    type="text"\n                                    name="id"\n                                    block\n                                ></vl-input-field-next>\n                            </div>\n                            <div>\n                                <vl-form-label-next for="filterOpNaamProject" label="Project naam"\n                                                    light></vl-form-label-next>\n                                <vl-input-field-next\n                                    type="text"\n                                    id="filterOpNaamProject"\n                                    name="name"\n                                    block\n                                ></vl-input-field-next>\n                            </div>\n                            <div>\n                                <vl-form-label-next for="filterOpNaamManager" label="Manager familienaam"\n                                                    light></vl-form-label-next>\n                                <vl-input-field-next\n                                    type="text"\n                                    id="filterOpNaamManager"\n                                    name="manager.lastName"\n                                    block\n                                    autocomplete="family-name"\n                                ></vl-input-field-next>\n                            </div>\n                        </section>\n                        <footer>\n                            <vl-button-next type="submit" custom-css="button {flex:1}">Zoeken</vl-button-next>\n                            <vl-button-next type="reset" custom-css="button {flex:1}" secondary>Reset</vl-button-next-->\n                        </footer>\n                    </form>\n                </vl-search-filter-next>\n                <vl-pager\n                    id="rich-data-table-filter"\n                    slot="pager"\n                    data-vl-total-items="6"\n                    data-vl-items-per-page="10"\n                    data-vl-current-page="1"\n                    data-vl-align-center=""\n                ></vl-pager>\n            </vl-rich-data-table>\n        `;\n})',...S.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:'story(richDataTableArgs, ({\n  collapsedM,\n  collapsedS,\n  collapsedXS,\n  filterClosable,\n  filterClosed\n}) => {\n  paginationRichTableImplementation();\n  return html`\n            <vl-rich-data-table\n                id="rich-data-table-pagination"\n                ?data-vl-collapsed-m=${collapsedM}\n                ?data-vl-collapsed-s=${collapsedS}\n                ?data-vl-collapsed-xs=${collapsedXS}\n                ?data-vl-filter-closable=${filterClosable}\n                ?data-vl-filter-closed=${filterClosed}\n            >\n                <vl-rich-data-field data-vl-label="ID" data-vl-selector="id"></vl-rich-data-field>\n                <vl-rich-data-field data-vl-label="Naam Project" data-vl-selector="name"></vl-rich-data-field>\n                <vl-rich-data-field\n                    data-vl-label="Naam Manager"\n                    data-vl-selector="manager.lastName"\n                ></vl-rich-data-field>\n                <vl-rich-data-field\n                    data-vl-label="Eerste medewerker"\n                    data-vl-selector="medewerkers.0.lastName"\n                ></vl-rich-data-field>\n                <vl-search-filter-next slot="filter" alt>\n                    <form>\n                        <section>\n                            <vl-title-next type="h2" alt no-space-bottom="">Doorzoek projecten</vl-title-next>\n                            <div>\n                                <vl-form-label-next\n                                    for="filterOpId"\n                                    label="Project id"\n                                    light\n                                ></vl-form-label-next>\n                                <vl-input-field-next\n                                    id="filterOpId"\n                                    type="text"\n                                    name="id"\n                                    block\n                                ></vl-input-field-next>\n                            </div>\n                        </section>\n                        <section>\n                            <vl-title-next type="h2" alt no-space-bottom="">Project details</vl-title-next>\n                            <div>\n                                <vl-form-label-next for="filterOpNaamProject" label="Project naam"\n                                                    light></vl-form-label-next>\n                                <vl-input-field-next\n                                    type="text"\n                                    id="filterOpNaamProject"\n                                    name="name"\n                                    block\n                                ></vl-input-field-next>\n                            </div>\n                            <div>\n                                <vl-form-label-next for="filterOpNaamManager" label="Manager familienaam"\n                                                    light></vl-form-label-next>\n                                <vl-input-field-next\n                                    type="text"\n                                    id="filterOpNaamManager"\n                                    name="manager.lastName"\n                                    block\n                                ></vl-input-field-next>\n                            </div>\n                        </section>\n                        <footer>\n                            <vl-button-next type="submit" custom-css="button {flex:1}">Zoeken</vl-button-next>\n                            <vl-button-next type="reset" custom-css="button {flex:1}" secondary>Reset</vl-button-next-->\n                        </footer>\n                    </form>\n                </vl-search-filter-next>\n                <vl-pager\n                    id="pager-for-rich-data-table"\n                    slot="pager"\n                    data-vl-total-items=${richDataFilterPagerData.data.length}\n                    data-vl-items-per-page="10"\n                    data-vl-current-page="1"\n                ></vl-pager>\n            </vl-rich-data-table>\n        `;\n})',...B.parameters?.docs?.source}}};let $=["RichDataTableDefault","RichDataTableSorting","RichDataTableFilter","RichDataTableFilterAndPagination"]},"../../libs/components/src/next/title/index.ts":(e,a,t)=>{t.d(a,{I:()=>n.I});var n=t("../../libs/components/src/next/title/vl-title.component.ts")},"../../libs/components/src/next/title/vl-title.component.ts":(e,a,t)=>{t.d(a,{I:()=>o});var n=t("../../libs/common/utilities/src/index.ts");t("../../node_modules/@lit/reactive-element/reactive-element.js");var l=t("../../node_modules/lit-html/lit-html.js");t("../../node_modules/lit-element/lit-element.js");/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var r=(e,a,t)=>{for(var n of a)if(n[0]===e)return(0,n[1])();return null==t?void 0:t()},i=t("../../node_modules/lit/directives/class-map.js"),s=t("../../libs/components/src/next/title/vl-title.css.ts"),d=t("../../libs/components/src/next/title/vl-title.defaults.ts");class o extends n.jW{static get styles(){return[s.Z]}static get properties(){return{type:{type:String},underline:{type:Boolean},noSpaceBottom:{type:Boolean,attribute:"no-space-bottom"},alt:{type:Boolean}}}render(){let e={underline:this.underline,"no-space-bottom":this.noSpaceBottom,alt:this.alt};return(0,l.qy)`
            ${r(this.type,[["h1",()=>(0,l.qy)` <h1 class=${(0,i.H)(e)} part="h1">
                            <slot></slot>
                        </h1>`],["h2",()=>(0,l.qy)` <h2 class=${(0,i.H)(e)} part="h2">
                            <slot></slot>
                        </h2>`],["h3",()=>(0,l.qy)` <h3 class=${(0,i.H)(e)} part="h3">
                            <slot></slot>
                        </h3>`],["h4",()=>(0,l.qy)` <h4 class=${(0,i.H)(e)} part="h4">
                            <slot></slot>
                        </h4>`],["h5",()=>(0,l.qy)` <h5 class=${(0,i.H)(e)} part="h5">
                            <slot></slot>
                        </h5>`],["h6",()=>(0,l.qy)` <h6 class=${(0,i.H)(e)} part="h6">
                            <slot></slot>
                        </h6>`]],()=>(0,l.qy)` <h1 class=${(0,i.H)(e)} part="h1">
                    <slot></slot>
                </h1>`)}
        `}constructor(...e){super(...e),this.type=d.D.type,this.underline=d.D.underline,this.noSpaceBottom=d.D.noSpaceBottom,this.alt=d.D.alt}}o=function(e,a,t,n){var l,r=arguments.length,i=r<3?a:null===n?n=Object.getOwnPropertyDescriptor(a,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,a,t,n);else for(var s=e.length-1;s>=0;s--)(l=e[s])&&(i=(r<3?l(i):r>3?l(a,t,i):l(a,t))||i);return r>3&&i&&Object.defineProperty(a,t,i),i}([(0,n.M1)("vl-title-next")],o)},"../../libs/components/src/next/title/vl-title.defaults.ts":(e,a,t)=>{t.d(a,{D:()=>n});let n={type:"h1",underline:!1,alt:!1,noSpaceBottom:!1}},"../../libs/components/src/rich-data/stories/vl-rich-data.stories-arg.ts":(e,a,t)=>{t.d(a,{Q:()=>r,w:()=>l});var n=t("../../libs/common/storybook/src/index.ts");let l={...n.D8,filterClosable:!1,filterClosed:!1},r={...(0,n.RN)(),filterClosable:{name:"data-vl-filter-closable",description:"Filter sluitbaar maken en knop tonen om de filter te tonen en terug te verbergen.\n * Op een klein scherm wordt een modal geopend bij het klikken op de filter knop ipv een de filter naast de tabel te tonen.\n\n * Om elementen van de filter te verbergen enkel in de modal, kan het attribuut `data-vl-hidden-in-modal` gezet worden.",table:{type:{summary:n.QE.BOOLEAN},category:n.R6.ATTRIBUTES,defaultValue:{summary:l.filterClosable}}},filterClosed:{name:"data-vl-filter-closed",description:"Verbergt de filter",table:{type:{summary:n.QE.BOOLEAN},category:n.R6.ATTRIBUTES,defaultValue:{summary:l.filterClosed}}}}},"../../libs/form/src/next/select/index.ts":(e,a,t)=>{t.d(a,{Y:()=>n.Y});var n=t("../../libs/form/src/next/select/vl-select.component.ts")},"../../libs/form/src/next/select/vl-select.component.ts":(e,a,t)=>{t.d(a,{Y:()=>f});var n=t("../../libs/common/utilities/src/index.ts"),l=t("../../node_modules/@domg/govflanders-style/common/index.js"),r=t("../../node_modules/@domg/govflanders-style/component/index.js"),i=t("../../node_modules/lit/index.js"),s=t("../../node_modules/lit/directives/class-map.js"),d=t("../../node_modules/lit/directives/live.js"),o=t("../../libs/form/src/next/form-control/form-control.ts");let c=(0,i.AH)`
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
`;var h=t("../../libs/form/src/next/select/vl-select.defaults.ts");class f extends o.M{static get styles(){return[l.h8,l.BI,c,r.py,m]}static get properties(){return{options:{type:Array},block:{type:Boolean},readonly:{type:Boolean},placeholder:{type:String},autocomplete:{type:String},notDeletable:{type:Boolean,attribute:"not-deletable"},value:{type:String,state:!0}}}connectedCallback(){super.connectedCallback();let e=this.getSelectedOption();this.value=e?.value||"",this.initialOptions=JSON.parse(JSON.stringify(this.options))}updated(e){if(super.updated(e),e.has("options")){let e=this.getSelectedOption();this.value=e?.value||""}if(e.has("value")){let e={value:this.value};this.setValue(this.value),this.dispatchEvent(new CustomEvent("vl-change",{composed:!0,bubbles:!0,detail:e})),this.dispatchInput&&(this.dispatchEvent(new CustomEvent("vl-input",{bubbles:!0,composed:!0,detail:e})),this.dispatchInput=!1),this.dispatchEventIfValid(e)}}render(){let e={"vl-select__container":!0,"vl-select__container--block":this.block},a={"vl-select":!0,"vl-select--disabled":this.disabled,"vl-select--error":this.isInvalid||this.error,"vl-select--success":this.success,"vl-select--block":this.block},t=!!this.value,n=this.options.some(e=>e.group);return(0,i.qy)`
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
                    .value=${(0,d.V)(this.value)}
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
            </option>`)}get validationTarget(){return this.shadowRoot?.querySelector("select")}resetFormControl(){for(super.resetFormControl();this.options.length;)this.options.pop();this.initialOptions.forEach(e=>this.options.push({...e})),this.value&&this.requestUpdate("options")}onChange(e){this.value=e?.target?.value}onSelect(){this.dispatchInput=!0}clearValue(){this.dispatchInput=!0,this.value=""}getSelectedOption(){return[...this.options].reverse().find(e=>e.selected)}getGroupedOptions(){return this.options.reduce((e,a)=>{let t=a.group||this.DEFAULT_GROUP_LABEL;return e[t]?e[t].push(a):e[t]=[a],e},{})}constructor(...e){super(...e),this.options=h.p.options,this.block=h.p.block,this.placeholder=h.p.placeholder,this.autocomplete=h.p.autocomplete,this.notDeletable=h.p.notDeletable,this.value="",this.initialOptions=[],this.DEFAULT_GROUP_LABEL="Overig",this.dispatchInput=!1}}f=function(e,a,t,n){var l,r=arguments.length,i=r<3?a:null===n?n=Object.getOwnPropertyDescriptor(a,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,a,t,n);else for(var s=e.length-1;s>=0;s--)(l=e[s])&&(i=(r<3?l(i):r>3?l(a,t,i):l(a,t))||i);return r>3&&i&&Object.defineProperty(a,t,i),i}([(0,n.M1)("vl-select-next")],f)},"../../libs/form/src/next/select/vl-select.defaults.ts":(e,a,t)=>{t.d(a,{p:()=>n});let n={...t("../../libs/form/src/next/form-control/form-control.defaults.ts").i,options:[],block:!1,placeholder:"",autocomplete:"",notDeletable:!1}}}]);