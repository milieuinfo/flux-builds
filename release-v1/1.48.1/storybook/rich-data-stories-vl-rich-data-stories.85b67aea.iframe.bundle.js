"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[1081],{"../../libs/components/src/rich-data/stories/vl-rich-data.stories.ts":(e,t,n)=>{n.r(t),n.d(t,{RichDataDefault:()=>g,RichDataPager:()=>b,__namedExportsOrder:()=>N,default:()=>v});var a=n("../../libs/common/storybook/src/index.ts"),r=n("../../libs/common/utilities/src/index.ts"),s=n("../../node_modules/lit-html/lit-html.js");n("../../libs/components/src/rich-data-table/vl-rich-data-field.component.ts");var l=n("../../libs/components/src/rich-data/vl-rich-data.component.ts"),i=n("../../libs/components/src/next/search-result/vl-search-result.component.ts");n("../../libs/components/src/next/search-result/vl-search-result-properties.component.ts"),n("../../libs/components/src/next/search-result/vl-search-result-text.component.ts"),n("../../libs/components/src/next/search-result/vl-search-result-title.component.ts");var o=n("../../libs/components/src/rich-data/stories/vl-rich-data.stories-arg.ts");n("../../node_modules/react/index.js");var c=n("../../node_modules/react/jsx-runtime.js"),d=n("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),m=n("../../node_modules/@storybook/blocks/dist/index.mjs");function p(e){let t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",a:"a"},(0,d.RP)(),e.components),{VluxMetaData:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VluxMetaData",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h1,{id:"rich-data",children:"Rich Data"}),"\n",(0,c.jsx)(n,{id:"components-rich-data"}),"\n",(0,c.jsxs)(t.p,{children:["Gebruik de ",(0,c.jsx)(t.code,{children:"rich-data"})," component om een lijst van data te tonen."]}),"\n",(0,c.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-js",children:"import { VlRichData } from '@domg-wc/components';\n"})}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-html",children:"<vl-rich-data></vl-rich-data>\n"})}),"\n",(0,c.jsx)(m.Hl,{of:g}),"\n",(0,c.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,c.jsx)(m.ov,{of:g}),"\n",(0,c.jsx)(t.h2,{id:"varianten",children:"Varianten"}),"\n",(0,c.jsx)(t.p,{children:"Een uitgewerkt voorbeeld vind je hier:"}),"\n",(0,c.jsx)(m.Hl,{of:b}),"\n",(0,c.jsxs)("details",{children:[(0,c.jsx)("summary",{children:"klik hier om een voorbeeld implementatie te zien"}),(0,c.jsx)(m.kL,{code:"import { richDataMockData } from './vl-rich-data.stories-mock';\nexport const richDataPaginationImplementation = ()=>{\n    customElements.whenDefined('vl-rich-data').then(()=>{\n        const richDataComponent = document.querySelector('#rich-data');\n        const content = richDataComponent?.querySelector('[slot=\"content\"]');\n        const sorter = richDataComponent?.querySelector('[slot=\"sorter\"]');\n        const pager = richDataComponent?.querySelector('vl-pager');\n        const data = richDataMockData;\n        let newData = undefined;\n        const setContentData = (data, from, to)=>{\n            newData = data;\n            content.innerHTML = ``;\n            data?.slice(from, to).forEach((project)=>{\n                const now = new Date().toLocaleString();\n                const manager = project.manager;\n                const medewerker = project.medewerkers[0];\n                const html = `\n                        <vl-search-result-title-next>\n                            <a href=\"#\">${project.name}</a>\n                        </vl-search-result-title-next>\n                        <vl-search-result-text-next>\n                            <time>Gestart op ${now}</time>\n                        </vl-search-result-text-next>\n                        <vl-search-result-properties-next>\n                            <label>ID</label>\n                            <data>${project.id}</data>\n                            <label>Naam manager</label>\n                            <data>${manager.lastName}</data>\n                            <label>Eerste medewerker</label>\n                            <data>${medewerker.lastName}</data>\n                            <label>\n                                <span>Project o.l.v. <strong>manager</strong></span>\n                            </label>\n                            <data>\n                                <span>${project.name} o.l.v. <strong>${manager.firstName} ${manager.lastName}</strong></span>\n                            </data>\n                        </vl-search-result-properties-next>\n                  `;\n                content.insertAdjacentHTML('beforeend', `<vl-search-result-next>${html}</vl-search-result-next>`);\n            });\n        };\n        const filter = (data, pathToKey, value)=>{\n            if (value === '') {\n                return data;\n            }\n            return data.filter((element)=>{\n                const valueByPath = findValueByPath(element, pathToKey);\n                return valueByPath.includes(value);\n            });\n        };\n        const findValueByPath = (element, pathToKey)=>{\n            const keys = pathToKey.split('.');\n            let current = element;\n            for(let i = 0; i < keys.length; i++){\n                if (current[keys[i]] !== undefined) {\n                    current = current[keys[i]];\n                } else {\n                    return undefined;\n                }\n            }\n            return current.toString();\n        };\n        richDataComponent?.addEventListener('change', (event)=>{\n            let newData = data.data;\n            let totalItems = data.data.length;\n            let filterEntries = undefined;\n            if (event.detail.formData) {\n                filterEntries = [];\n                for (const entry of event.detail.formData.entries()){\n                    newData = filter(newData, entry[0], entry[1]);\n                    totalItems = newData.length;\n                    filterEntries.push({\n                        name: entry[0],\n                        value: entry[1]\n                    });\n                }\n            }\n            const pagination = event.detail.paging;\n            if (pagination) {\n                const from = (pagination.currentPage - 1) * 10;\n                setContentData(newData, from, from + 10);\n            }\n            if (richDataComponent) {\n                richDataComponent.data = {\n                    paging: {\n                        currentPage: event.detail.paging.currentPage,\n                        totalItems: totalItems\n                    },\n                    filter: filterEntries\n                };\n            }\n        });\n        sorter?.addEventListener('vl-change', (event)=>{\n            const data = newData;\n            event.stopPropagation();\n            if (!data) return;\n            data.sort((firstElement, secondElement)=>{\n                const keys = event.target?.value?.split('.');\n                if (!keys) {\n                    return 0;\n                }\n                const getValue = (element)=>keys.reduce((value, key)=>value[key], element)?.toString() || '';\n                const firstValue = getValue(firstElement);\n                const secondValue = getValue(secondElement);\n                return firstValue.localeCompare(secondValue);\n            });\n            if (richDataComponent) {\n                richDataComponent.data = {\n                    paging: {\n                        currentPage: 1,\n                        totalItems: data.length\n                    }\n                };\n            }\n            setContentData(data, 0, 10);\n        });\n        if (richDataComponent) {\n            richDataComponent.data = {\n                paging: {\n                    currentPage: 1,\n                    totalItems: 25\n                }\n            };\n        }\n        setContentData(data.data, 0, pager.getAttribute('items-per-page'));\n    });\n};\n",language:"ts",dark:!0})]}),"\n",(0,c.jsxs)("details",{children:[(0,c.jsx)("summary",{children:"mock data voor voorbeeld kan je hier vinden"}),(0,c.jsx)(m.kL,{code:"export const richDataMockData = {\n    data: [\n        {\n            id: 0,\n            name: 'Project #1',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Sander',\n                    lastName: 'Kleykens'\n                }\n            ]\n        },\n        {\n            id: 1,\n            name: 'Project #2',\n            manager: {\n                firstName: 'Tom',\n                lastName: 'Coemans'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Guy',\n                    lastName: 'Wauters'\n                }\n            ]\n        },\n        {\n            id: 2,\n            name: 'Project #3',\n            manager: {\n                firstName: 'Tom',\n                lastName: 'Coemans'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Guy',\n                    lastName: 'Wauters'\n                }\n            ]\n        },\n        {\n            id: 3,\n            name: 'Project #4',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 4,\n            name: 'Project #5',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 5,\n            name: 'Project #6',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 6,\n            name: 'Project #7',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 7,\n            name: 'Project #8',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 8,\n            name: 'Project #9',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 9,\n            name: 'Project #10',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 10,\n            name: 'Project #11',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 11,\n            name: 'Project #12',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 12,\n            name: 'Project #13',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 13,\n            name: 'Project #14',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 14,\n            name: 'Project #15',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 15,\n            name: 'Project #16',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 16,\n            name: 'Project #17',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 17,\n            name: 'Project #18',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 18,\n            name: 'Project #19',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 19,\n            name: 'Project #20',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 20,\n            name: 'Project #21',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 21,\n            name: 'Project #22',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 22,\n            name: 'Project #23',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 23,\n            name: 'Project #24',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 24,\n            name: 'Project #25',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        }\n    ]\n};\n",language:"ts",dark:!0})]}),"\n",(0,c.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,c.jsx)(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/story/legacy-vl-rich-data--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Rich Data"})}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlRichData.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Rich Data"})}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-rich-data.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - Rich Data"})})]})}let u={data:[{id:0,name:"Project #1",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Sander",lastName:"Kleykens"}]},{id:1,name:"Project #2",manager:{firstName:"Tom",lastName:"Coemans"},medewerkers:[{firstName:"Guy",lastName:"Wauters"}]},{id:2,name:"Project #3",manager:{firstName:"Tom",lastName:"Coemans"},medewerkers:[{firstName:"Guy",lastName:"Wauters"}]},{id:3,name:"Project #4",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:4,name:"Project #5",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:5,name:"Project #6",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:6,name:"Project #7",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:7,name:"Project #8",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:8,name:"Project #9",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:9,name:"Project #10",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:10,name:"Project #11",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:11,name:"Project #12",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:12,name:"Project #13",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:13,name:"Project #14",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:14,name:"Project #15",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:15,name:"Project #16",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:16,name:"Project #17",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:17,name:"Project #18",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:18,name:"Project #19",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:19,name:"Project #20",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:20,name:"Project #21",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:21,name:"Project #22",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:22,name:"Project #23",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:23,name:"Project #24",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:24,name:"Project #25",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]}]},h=()=>{customElements.whenDefined("vl-rich-data").then(()=>{let e;let t=document.querySelector("#rich-data"),n=t?.querySelector('[slot="content"]'),a=t?.querySelector('[slot="sorter"]'),r=t?.querySelector("vl-pager"),s=(t,a,r)=>{e=t,n.innerHTML="",t?.slice(a,r).forEach(e=>{let t=new Date().toLocaleString(),a=e.manager,r=e.medewerkers[0],s=`
                        <vl-search-result-title-next>
                            <a href="#">${e.name}</a>
                        </vl-search-result-title-next>
                        <vl-search-result-text-next>
                            <time>Gestart op ${t}</time>
                        </vl-search-result-text-next>
                        <vl-search-result-properties-next>
                            <label>ID</label>
                            <data>${e.id}</data>
                            <label>Naam manager</label>
                            <data>${a.lastName}</data>
                            <label>Eerste medewerker</label>
                            <data>${r.lastName}</data>
                            <label>
                                <span>Project o.l.v. <strong>manager</strong></span>
                            </label>
                            <data>
                                <span>${e.name} o.l.v. <strong>${a.firstName} ${a.lastName}</strong></span>
                            </data>
                        </vl-search-result-properties-next>
                  `;n.insertAdjacentHTML("beforeend",`<vl-search-result-next>${s}</vl-search-result-next>`)})},l=(e,t,n)=>""===n?e:e.filter(e=>i(e,t).includes(n)),i=(e,t)=>{let n=t.split("."),a=e;for(let e=0;e<n.length;e++){if(void 0===a[n[e]])return;a=a[n[e]]}return a.toString()};t?.addEventListener("change",e=>{let n,a=u.data,r=u.data.length;if(e.detail.formData)for(let t of(n=[],e.detail.formData.entries()))r=(a=l(a,t[0],t[1])).length,n.push({name:t[0],value:t[1]});let i=e.detail.paging;if(i){let e=(i.currentPage-1)*10;s(a,e,e+10)}t&&(t.data={paging:{currentPage:e.detail.paging.currentPage,totalItems:r},filter:n})}),a?.addEventListener("vl-change",n=>{let a=e;n.stopPropagation(),a&&(a.sort((e,t)=>{let a=n.target?.value?.split(".");if(!a)return 0;let r=e=>a.reduce((e,t)=>e[t],e)?.toString()||"",s=r(e),l=r(t);return s.localeCompare(l)}),t&&(t.data={paging:{currentPage:1,totalItems:a.length}}),s(a,0,10))}),t&&(t.data={paging:{currentPage:1,totalItems:25}}),s(u.data,0,r.getAttribute("items-per-page"))})};var f=n("../../libs/form/src/next/select/index.ts");let v={id:"components-rich-data",title:"components/rich-data",tags:["autodocs"],args:o.w,argTypes:o.Q,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,d.RP)(),e.components);return t?(0,c.jsx)(t,Object.assign({},e,{children:(0,c.jsx)(p,e)})):p(e)}}}};(0,r.gy)([l.b,i.z,f.Y]);let g=({filterClosable:e,filterClosed:t})=>(0,s.qy)`
        <vl-rich-data ?data-vl-filter-closable=${e} ?data-vl-filter-closed=${t}>
            <span slot="no-content">Geen resultaten gevonden</span>
            <vl-search-result-next slot="content"></vl-search-result-next>
        </vl-rich-data>
    `;g.storyName="vl-rich-data - default";let b=(0,a._7)(o.w,({filterClosable:e,filterClosed:t})=>(h(),(0,s.qy)`
        <vl-rich-data id="rich-data" ?data-vl-filter-closable=${e} ?data-vl-filter-closed=${t}>
            <span slot="no-content">Geen resultaten</span>
            <div slot="content"></div>
            <vl-select-next slot="sorter" aria-label="Sorteer" .options=${[{label:"ID",value:"id"},{label:"Naam manager",value:"manager.lastName"}]}></vl-select-next>
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
                id="rich-data-table-filter-sorting-paging-pager"
                slot="pager"
                data-vl-total-items="25"
                data-vl-items-per-page="10"
                data-vl-current-page="1"
                data-vl-align-center
            ></vl-pager>
        </vl-rich-data>
    `));b.storyName="vl-rich-data - pager",g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:'({\n  filterClosable,\n  filterClosed\n}: typeof richDataArgs) => {\n  return html`\n        <vl-rich-data ?data-vl-filter-closable=${filterClosable} ?data-vl-filter-closed=${filterClosed}>\n            <span slot="no-content">Geen resultaten gevonden</span>\n            <vl-search-result-next slot="content"></vl-search-result-next>\n        </vl-rich-data>\n    `;\n}',...g.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:'story(richDataArgs, ({\n  filterClosable,\n  filterClosed\n}: typeof richDataArgs) => {\n  richDataPaginationImplementation();\n  return html`\n        <vl-rich-data id="rich-data" ?data-vl-filter-closable=${filterClosable} ?data-vl-filter-closed=${filterClosed}>\n            <span slot="no-content">Geen resultaten</span>\n            <div slot="content"></div>\n            <vl-select-next slot="sorter" aria-label="Sorteer" .options=${[{\n    label: \'ID\',\n    value: \'id\'\n  }, {\n    label: \'Naam manager\',\n    value: \'manager.lastName\'\n  }]}></vl-select-next>\n            <vl-search-filter-next slot="filter" alt>\n                <form>\n                    <section>\n                        <vl-title-next type="h2" alt no-space-bottom="">Doorzoek projecten</vl-title-next>\n                        <div>\n                            <vl-form-label-next\n                                for="filterOpId"\n                                label="Project id"\n                                light\n                            ></vl-form-label-next>\n                            <vl-input-field-next\n                                id="filterOpId"\n                                type="text"\n                                name="id"\n                                block\n                            ></vl-input-field-next>\n                        </div>\n                    </section>\n                    <section>\n                        <vl-title-next type="h2" alt no-space-bottom="">Project details</vl-title-next>\n                        <div>\n                            <vl-form-label-next for="filterOpNaamProject" label="Project naam"\n                                                light></vl-form-label-next>\n                            <vl-input-field-next\n                                type="text"\n                                id="filterOpNaamProject"\n                                name="name"\n                                block\n                            ></vl-input-field-next>\n                        </div>\n                        <div>\n                            <vl-form-label-next for="filterOpNaamManager" label="Manager familienaam"\n                                                light></vl-form-label-next>\n                            <vl-input-field-next\n                                type="text"\n                                id="filterOpNaamManager"\n                                name="manager.lastName"\n                                block\n                            ></vl-input-field-next>\n                        </div>\n                    </section>\n                    <footer>\n                        <vl-button-next type="submit" custom-css="button {flex:1}">Zoeken</vl-button-next>\n                        <vl-button-next type="reset" custom-css="button {flex:1}" secondary>Reset</vl-button-next-->\n                    </footer>\n                </form>\n            </vl-search-filter-next>\n            <vl-pager\n                id="rich-data-table-filter-sorting-paging-pager"\n                slot="pager"\n                data-vl-total-items="25"\n                data-vl-items-per-page="10"\n                data-vl-current-page="1"\n                data-vl-align-center\n            ></vl-pager>\n        </vl-rich-data>\n    `;\n})',...b.parameters?.docs?.source}}};let N=["RichDataDefault","RichDataPager"]},"../../libs/components/src/next/properties/index.ts":(e,t,n)=>{n.d(t,{L:()=>a.L});var a=n("../../libs/components/src/next/properties/vl-properties.component.ts")},"../../libs/components/src/next/properties/vl-properties.component.ts":(e,t,n)=>{n.d(t,{L:()=>f});var a=n("../../libs/common/utilities/src/index.ts"),r=n("../../libs/elements/src/index.ts"),s=n("../../node_modules/lit/index.js");let l=e=>e.map(e=>e.cloneNode(!0)),i=e=>{let t=[],n=[],a=[];return e.forEach(e=>{switch(e.localName){case"label":n.length&&a.length&&(t.push({labels:n,data:a}),n=[],a=[]),n.push(e.children.length>0?l([...e.children]):e.innerHTML);break;case"data":a.push(e.children.length>0?l([...e.children]):e.innerHTML)}}),n.length&&t.push({labels:n,data:a}),t},o=e=>null==e||0==e.length?(console.warn("vl-properties - geen props opgegeven"),[]):e[0]?.localName==="div"?e.map(e=>({class:e.className,items:i([...e.children])})):[{items:i(e)}];var c=n("../../libs/common/utilities/src/css/index.ts");let d=e=>(0,s.AH)`
        width: calc(${e}% - 1rem);
    `,m=e=>(0,s.AH)`
        dl,
        dl .item {
            grid-template-columns: [labels] ${e}% [data] auto;
        }

        dl .column--full-width,
        dl .column--full-width .item {
            grid-template-columns: [labels] ${e/2}% [data] auto;
        }
    `,p=(0,s.AH)`
    @media screen and (max-width: ${c.gT}px) {
        dl,
        dl .item {
            grid-template-columns: 100%;
        }
    }
`,u=(0,s.AH)`
    :host {
        display: block;
    }

    .column {
        ${d(50)};
        float: left;
    }

    .column--full-width {
        ${d(100)};
        float: left;
    }

    dl {
        display: grid;
        word-break: break-word;
    }

    dl:has(.item) {
        display: initial;
    }

    dl .item {
        display: grid;
        padding-bottom: 2rem;
    }

    dt {
        font-size: 1.8rem;
        color: var(--vl-color--label);
        padding-right: 1rem;
        grid-column: 1;
    }

    .collapsed dt {
        ${(0,s.AH)`
        font-size: 1.6rem;
    `}
    }

    dd {
        font-size: 1.8rem;
        grid-column: 2;
    }

    .collapsed dd {
        ${(0,s.AH)`
        grid-column: 1;
        font-size: 1.6rem;
    `}
    }

    .collapsed .item,
    dl:has(.collapsed) {
        grid-template-columns: 100%;
    }
`;var h=n("../../libs/components/src/next/properties/vl-properties.defaults.ts");class f extends a.jW{static get styles(){return[r.hF,u]}static get properties(){return{props:{type:Array},aggregatedProps:{type:Array,state:!0},labelWidth:{type:Number,attribute:"label-width"}}}set props(e){this.attributeProps=e,this.buildInternalProperties()}get props(){return this.attributeProps}connectedCallback(){super.connectedCallback(),this.buildInternalProperties(),this.observeLightPropertiesChange()}firstUpdated(e){super.firstUpdated(e),this.shadowRoot&&(this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,this.labelWidthSheet,p.styleSheet])}updated(e){super.updated(e),e.has("labelWidth")&&this.labelWidth&&this.labelWidthSheet.replace(m(this.labelWidth).toString())}disconnectedCallback(){super.disconnectedCallback(),this.disconnectMutationObservers()}render(){return(0,s.qy)` <dl>${this.aggregatedProps.map(e=>this.renderColumn(e))}</dl> `}renderColumn(e){return e.class?(0,s.qy)` <div class="${e.class}">${e.items.map(e=>this.renderItem(e))}</div>`:(0,s.qy)` ${e.items.map(e=>this.renderItem(e))}`}renderItem(e){return(0,s.qy)` <div class="item">${this.renderLabels(e.labels)} ${this.renderData(e.data)}</div>`}renderLabels(e){return e.map(e=>(0,s.qy)` <dt>${e}</dt>`)}renderData(e){return e.map(e=>(0,s.qy)` <dd>${e}</dd>`)}buildInternalProperties(){this.aggregatedProps=[...this.attributeProps,...o([...this.children])]}disconnectMutationObservers(){this.mutationObserverList.forEach(e=>e.disconnect()),this.mutationObserverList=[]}observeLightPropertiesChange(){this.disconnectMutationObservers(),this.mutationObserverList=[...this.mutationObserverList,(0,a.U_)(this,e=>{this.buildInternalProperties(),this.observeLightPropertiesChange()})],this.children.length>0&&"div"===this.children[0].localName&&[...this.children].forEach(e=>this.mutationObserverList=[...this.mutationObserverList,(0,a.U_)(e,e=>{this.buildInternalProperties()})])}constructor(...e){super(...e),this.attributeProps=h.g.props,this.aggregatedProps=h.g.props,this.mutationObserverList=[],this.labelWidth=h.g.labelWidth,this.labelWidthSheet=new CSSStyleSheet}}f=function(e,t,n,a){var r,s=arguments.length,l=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,a);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(l=(s<3?r(l):s>3?r(t,n,l):r(t,n))||l);return s>3&&l&&Object.defineProperty(t,n,l),l}([(0,a.M1)("vl-properties-next")],f)},"../../libs/components/src/next/properties/vl-properties.defaults.ts":(e,t,n)=>{n.d(t,{g:()=>a});let a={labelWidth:25,props:[]}},"../../libs/components/src/next/search-result/vl-search-result-properties.component.ts":(e,t,n)=>{n.d(t,{y:()=>i});var a=n("../../libs/common/utilities/src/index.ts"),r=n("../../libs/components/src/next/properties/index.ts"),s=n("../../node_modules/lit/index.js");let l=(0,s.AH)`
    dl {
        margin: initial;
    }

    dt {
        display: inline;
        font-weight: 500;
        float: left;

        &::after {
            display: block;
            content: ":";
            float: right;
            margin-right: 0.5rem;
        }
    }

    dd {
        display: inline;
        margin-inline-start: initial;
    }
`;class i extends r.L{static get styles(){return[l]}}i=function(e,t,n,a){var r,s=arguments.length,l=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,a);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(l=(s<3?r(l):s>3?r(t,n,l):r(t,n))||l);return s>3&&l&&Object.defineProperty(t,n,l),l}([(0,a.M1)("vl-search-result-properties-next")],i)},"../../libs/components/src/next/search-result/vl-search-result-text.component.ts":(e,t,n)=>{n.d(t,{k:()=>r});var a=n("../../libs/common/utilities/src/index.ts");class r extends a.jW{createRenderRoot(){return this}}r=function(e,t,n,a){var r,s=arguments.length,l=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,a);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(l=(s<3?r(l):s>3?r(t,n,l):r(t,n))||l);return s>3&&l&&Object.defineProperty(t,n,l),l}([(0,a.M1)("vl-search-result-text-next")],r)},"../../libs/components/src/next/search-result/vl-search-result-title.component.ts":(e,t,n)=>{n.d(t,{J:()=>r});var a=n("../../libs/common/utilities/src/index.ts");class r extends a.jW{createRenderRoot(){return this}}r=function(e,t,n,a){var r,s=arguments.length,l=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,a);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(l=(s<3?r(l):s>3?r(t,n,l):r(t,n))||l);return s>3&&l&&Object.defineProperty(t,n,l),l}([(0,a.M1)("vl-search-result-title-next")],r)},"../../libs/components/src/next/search-result/vl-search-result.component.ts":(e,t,n)=>{n.d(t,{z:()=>m});var a=n("../../libs/common/utilities/src/index.ts"),r=n("../../libs/elements/src/index.ts"),s=n("../../libs/components/src/next/search-result/vl-search-result-properties.component.ts"),l=n("../../libs/components/src/next/search-result/vl-search-result-text.component.ts"),i=n("../../libs/components/src/next/search-result/vl-search-result-title.component.ts"),o=n("../../libs/common/utilities/src/css/index.ts"),c=n("../../node_modules/lit/index.js");let d=(0,c.AH)`
    :host {
        display: block;
        margin-bottom: 3.5rem;

        > * {
            display: block;
        }
    }

    vl-search-result-text-next {
        margin-bottom: 1.5rem;
    }

    vl-search-result-title-next {
        font-weight: 500;
        font-size: 2rem;
        height: 2.7rem;
        line-height: 2.7rem;

        @media screen and (max-width: ${o.gT}px) {
            font-size: 1.6rem;
        }

        a {
            font-size: 2rem;
            text-decoration: none;

            &:hover,
            &:focus {
                text-decoration: underline;
            }
        }
    }
`;class m extends a.jW{static{(0,a.gy)([l.k,i.J,s.y])}static get styles(){return[...r.hF,d]}connectedCallback(){super.connectedCallback(),this.shadowRoot?.append(...this.childNodes)}}m=function(e,t,n,a){var r,s=arguments.length,l=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,a);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(l=(s<3?r(l):s>3?r(t,n,l):r(t,n))||l);return s>3&&l&&Object.defineProperty(t,n,l),l}([(0,r.fD)(),(0,a.M1)("vl-search-result-next")],m)},"../../libs/components/src/rich-data/stories/vl-rich-data.stories-arg.ts":(e,t,n)=>{n.d(t,{Q:()=>s,w:()=>r});var a=n("../../libs/common/storybook/src/index.ts");let r={...a.D8,filterClosable:!1,filterClosed:!1},s={...(0,a.RN)(),filterClosable:{name:"data-vl-filter-closable",description:"Filter sluitbaar maken en knop tonen om de filter te tonen en terug te verbergen.\n * Op een klein scherm wordt een modal geopend bij het klikken op de filter knop ipv een de filter naast de tabel te tonen.\n\n * Om elementen van de filter te verbergen enkel in de modal, kan het attribuut `data-vl-hidden-in-modal` gezet worden.",table:{type:{summary:a.QE.BOOLEAN},category:a.R6.ATTRIBUTES,defaultValue:{summary:r.filterClosable}}},filterClosed:{name:"data-vl-filter-closed",description:"Verbergt de filter",table:{type:{summary:a.QE.BOOLEAN},category:a.R6.ATTRIBUTES,defaultValue:{summary:r.filterClosed}}}}},"../../libs/form/src/next/select/index.ts":(e,t,n)=>{n.d(t,{Y:()=>a.Y});var a=n("../../libs/form/src/next/select/vl-select.component.ts")},"../../libs/form/src/next/select/vl-select.component.ts":(e,t,n)=>{n.d(t,{Y:()=>u});var a=n("../../libs/common/utilities/src/index.ts"),r=n("../../node_modules/@domg/govflanders-style/common/index.js"),s=n("../../node_modules/@domg/govflanders-style/component/index.js"),l=n("../../node_modules/lit/index.js"),i=n("../../node_modules/lit/directives/class-map.js"),o=n("../../node_modules/lit/directives/live.js"),c=n("../../libs/form/src/next/form-control/form-control.ts");let d=(0,l.AH)`
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
`,m=(0,l.AH)`
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
`;var p=n("../../libs/form/src/next/select/vl-select.defaults.ts");class u extends c.M{static get styles(){return[r.h8,r.BI,d,s.py,m]}static get properties(){return{options:{type:Array},block:{type:Boolean},readonly:{type:Boolean},placeholder:{type:String},autocomplete:{type:String},notDeletable:{type:Boolean,attribute:"not-deletable"},value:{type:String,state:!0}}}connectedCallback(){super.connectedCallback();let e=this.getSelectedOption();this.value=e?.value||"",this.initialOptions=JSON.parse(JSON.stringify(this.options))}updated(e){if(super.updated(e),e.has("options")){let e=this.getSelectedOption();this.value=e?.value||""}if(e.has("value")){let e={value:this.value};this.setValue(this.value),this.dispatchEvent(new CustomEvent("vl-change",{composed:!0,bubbles:!0,detail:e})),this.dispatchInput&&(this.dispatchEvent(new CustomEvent("vl-input",{bubbles:!0,composed:!0,detail:e})),this.dispatchInput=!1),this.dispatchEventIfValid(e)}}render(){let e={"vl-select__container":!0,"vl-select__container--block":this.block},t={"vl-select":!0,"vl-select--disabled":this.disabled,"vl-select--error":this.isInvalid||this.error,"vl-select--success":this.success,"vl-select--block":this.block},n=!!this.value,a=this.options.some(e=>e.group);return(0,l.qy)`
            <div class=${(0,i.H)(e)}>
                <select
                    id=${this.id||l.s6}
                    name=${this.name||l.s6}
                    class=${(0,i.H)(t)}
                    aria-label=${this.label||l.s6}
                    aria-invalid=${this.isInvalid||l.s6}
                    ?required=${this.required}
                    ?disabled=${this.disabled}
                    ?aria-disabled=${this.disabled}
                    ?error=${this.error}
                    .value=${(0,o.V)(this.value)}
                    autocomplete=${this.autocomplete||l.s6}
                    @change=${this.onChange}
                    @input=${this.onSelect}
                >
                    ${this.placeholder?this.renderPlaceholder(n):l.s6}
                    ${a?this.renderGroupedOptions():this.renderSelectOptions(this.options)}
                </select>
                ${n&&!this.notDeletable?this.renderClearButton():l.s6}
                <span class="vl-icon vl-vi vl-vi-nav-down" aria-hidden="true"></span>
            </div>
        `}renderPlaceholder(e){return(0,l.qy)` <option class="vl-select__placeholder" value="" ?selected=${!e} disabled>
            ${this.placeholder}
        </option>`}renderClearButton(){return(0,l.qy)`
            <button
                type="button"
                class="vl-select__button"
                aria-label=${`Verwijder ${this.label} keuze ${this.getSelectedOption()?.label||this.value||""}`}
                @click=${this.clearValue}
            >
                <span class="vl-icon vl-vi vl-vi-close" aria-hidden="true"></span>
            </button>
        `}renderGroupedOptions(){return Object.entries(this.getGroupedOptions()).map(([e,t])=>(0,l.qy)` <optgroup label=${e}>${this.renderSelectOptions(t)}</optgroup>`)}renderSelectOptions(e){return e.map(e=>(0,l.qy)` <option
                value=${e.value}
                ?selected=${this.value===e.value}
                ?disabled=${e.disabled}
            >
                ${e.label||e.value}
            </option>`)}get validationTarget(){return this.shadowRoot?.querySelector("select")}resetFormControl(){for(super.resetFormControl();this.options.length;)this.options.pop();this.initialOptions.forEach(e=>this.options.push({...e})),this.value&&this.requestUpdate("options")}onChange(e){this.value=e?.target?.value}onSelect(){this.dispatchInput=!0}clearValue(){this.dispatchInput=!0,this.value=""}getSelectedOption(){return[...this.options].reverse().find(e=>e.selected)}getGroupedOptions(){return this.options.reduce((e,t)=>{let n=t.group||this.DEFAULT_GROUP_LABEL;return e[n]?e[n].push(t):e[n]=[t],e},{})}constructor(...e){super(...e),this.options=p.p.options,this.block=p.p.block,this.placeholder=p.p.placeholder,this.autocomplete=p.p.autocomplete,this.notDeletable=p.p.notDeletable,this.value="",this.initialOptions=[],this.DEFAULT_GROUP_LABEL="Overig",this.dispatchInput=!1}}u=function(e,t,n,a){var r,s=arguments.length,l=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,a);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(l=(s<3?r(l):s>3?r(t,n,l):r(t,n))||l);return s>3&&l&&Object.defineProperty(t,n,l),l}([(0,a.M1)("vl-select-next")],u)},"../../libs/form/src/next/select/vl-select.defaults.ts":(e,t,n)=>{n.d(t,{p:()=>a});let a={...n("../../libs/form/src/next/form-control/form-control.defaults.ts").i,options:[],block:!1,placeholder:"",autocomplete:"",notDeletable:!1}}}]);