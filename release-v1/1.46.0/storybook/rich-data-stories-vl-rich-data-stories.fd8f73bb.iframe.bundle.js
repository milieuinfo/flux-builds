"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[1081],{"../../libs/components/src/rich-data/stories/vl-rich-data.stories.ts":(e,t,a)=>{a.r(t),a.d(t,{RichDataDefault:()=>g,RichDataPager:()=>v,__namedExportsOrder:()=>N,default:()=>h});var n=a("../../libs/common/storybook/src/index.ts"),r=a("../../libs/common/utilities/src/index.ts"),s=a("../../node_modules/lit-html/lit-html.js");a("../../libs/components/src/rich-data-table/vl-rich-data-field.component.ts");var i=a("../../libs/components/src/rich-data/vl-rich-data.component.ts"),l=a("../../libs/components/src/next/search-result/vl-search-result.component.ts");a("../../libs/components/src/next/search-result/vl-search-result-properties.component.ts"),a("../../libs/components/src/next/search-result/vl-search-result-text.component.ts"),a("../../libs/components/src/next/search-result/vl-search-result-title.component.ts");var o=a("../../libs/components/src/rich-data/stories/vl-rich-data.stories-arg.ts");a("../../node_modules/react/index.js");var c=a("../../node_modules/react/jsx-runtime.js"),m=a("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),d=a("../../node_modules/@storybook/blocks/dist/index.mjs");function p(e){let t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",a:"a"},(0,m.RP)(),e.components),{VluxMetaData:a}=t;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VluxMetaData",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h1,{id:"rich-data",children:"Rich Data"}),"\n",(0,c.jsx)(a,{id:"components-rich-data"}),"\n",(0,c.jsxs)(t.p,{children:["Gebruik de ",(0,c.jsx)(t.code,{children:"rich-data"})," component om een lijst van data te tonen."]}),"\n",(0,c.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-js",children:"import { VlRichData } from '@domg-wc/components';\n"})}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-html",children:"<vl-rich-data></vl-rich-data>\n"})}),"\n",(0,c.jsx)(d.Hl,{of:g}),"\n",(0,c.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,c.jsx)(d.ov,{of:g}),"\n",(0,c.jsx)(t.h2,{id:"varianten",children:"Varianten"}),"\n",(0,c.jsx)(t.p,{children:"Een uitgewerkt voorbeeld vind je hier:"}),"\n",(0,c.jsx)(d.Hl,{of:v}),"\n",(0,c.jsxs)("details",{children:[(0,c.jsx)("summary",{children:"klik hier om een voorbeeld implementatie te zien"}),(0,c.jsx)(d.kL,{code:"import { richDataMockData } from './vl-rich-data.stories-mock';\nexport const richDataPaginationImplementation = ()=>{\n    customElements.whenDefined('vl-rich-data').then(()=>{\n        const richDataComponent = document.querySelector('#rich-data');\n        const content = richDataComponent?.querySelector('[slot=\"content\"]');\n        const sorter = richDataComponent?.querySelector('[slot=\"sorter\"]');\n        const pager = richDataComponent?.querySelector('vl-pager');\n        const data = richDataMockData;\n        let newData = undefined;\n        const setContentData = (data, from, to)=>{\n            newData = data;\n            content.innerHTML = ``;\n            data?.slice(from, to).forEach((project)=>{\n                const now = new Date().toLocaleString();\n                const manager = project.manager;\n                const medewerker = project.medewerkers[0];\n                const html = `\n                        <vl-search-result-title-next>\n                            <a href=\"#\">${project.name}</a>\n                        </vl-search-result-title-next>\n                        <vl-search-result-text-next>\n                            <time>Gestart op ${now}</time>\n                        </vl-search-result-text-next>\n                        <vl-search-result-properties-next>\n                            <label>ID</label>\n                            <data>${project.id}</data>\n                            <label>Naam manager</label>\n                            <data>${manager.lastName}</data>\n                            <label>Eerste medewerker</label>\n                            <data>${medewerker.lastName}</data>\n                            <label>\n                                <span>Project o.l.v. <strong>manager</strong></span>\n                            </label>\n                            <data>\n                                <span>${project.name} o.l.v. <strong>${manager.firstName} ${manager.lastName}</strong></span>\n                            </data>\n                        </vl-search-result-properties-next>\n                  `;\n                content.insertAdjacentHTML('beforeend', `<vl-search-result-next>${html}</vl-search-result-next>`);\n            });\n        };\n        const filter = (data, pathToKey, value)=>{\n            if (value === '') {\n                return data;\n            }\n            return data.filter((element)=>{\n                const valueByPath = findValueByPath(element, pathToKey);\n                return valueByPath.includes(value);\n            });\n        };\n        const findValueByPath = (element, pathToKey)=>{\n            const keys = pathToKey.split('.');\n            let current = element;\n            for(let i = 0; i < keys.length; i++){\n                if (current[keys[i]] !== undefined) {\n                    current = current[keys[i]];\n                } else {\n                    return undefined;\n                }\n            }\n            return current.toString();\n        };\n        richDataComponent?.addEventListener('change', (event)=>{\n            let newData = data.data;\n            let totalItems = data.data.length;\n            let filterEntries = undefined;\n            if (event.detail.formData) {\n                filterEntries = [];\n                for (const entry of event.detail.formData.entries()){\n                    newData = filter(newData, entry[0], entry[1]);\n                    totalItems = newData.length;\n                    filterEntries.push({\n                        name: entry[0],\n                        value: entry[1]\n                    });\n                }\n            }\n            const pagination = event.detail.paging;\n            if (pagination) {\n                const from = (pagination.currentPage - 1) * 10;\n                setContentData(newData, from, from + 10);\n            }\n            if (richDataComponent) {\n                richDataComponent.data = {\n                    paging: {\n                        currentPage: event.detail.paging.currentPage,\n                        totalItems: totalItems\n                    },\n                    filter: filterEntries\n                };\n            }\n        });\n        sorter?.addEventListener('change', (event)=>{\n            const data = newData;\n            event.stopPropagation();\n            if (!data) return;\n            data.sort((firstElement, secondElement)=>{\n                const keys = event.target?.value?.split('.');\n                if (!keys) {\n                    return 0;\n                }\n                const getValue = (element)=>keys.reduce((value, key)=>value[key], element)?.toString() || '';\n                const firstValue = getValue(firstElement);\n                const secondValue = getValue(secondElement);\n                return firstValue.localeCompare(secondValue);\n            });\n            if (richDataComponent) {\n                richDataComponent.data = {\n                    paging: {\n                        currentPage: 1,\n                        totalItems: data.length\n                    }\n                };\n            }\n            setContentData(data, 0, 10);\n        });\n        if (richDataComponent) {\n            richDataComponent.data = {\n                paging: {\n                    currentPage: 1,\n                    totalItems: 25\n                }\n            };\n        }\n        setContentData(data.data, 0, pager.getAttribute('items-per-page'));\n    });\n};\n",language:"ts",dark:!0})]}),"\n",(0,c.jsxs)("details",{children:[(0,c.jsx)("summary",{children:"mock data voor voorbeeld kan je hier vinden"}),(0,c.jsx)(d.kL,{code:"export const richDataMockData = {\n    data: [\n        {\n            id: 0,\n            name: 'Project #1',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Sander',\n                    lastName: 'Kleykens'\n                }\n            ]\n        },\n        {\n            id: 1,\n            name: 'Project #2',\n            manager: {\n                firstName: 'Tom',\n                lastName: 'Coemans'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Guy',\n                    lastName: 'Wauters'\n                }\n            ]\n        },\n        {\n            id: 2,\n            name: 'Project #3',\n            manager: {\n                firstName: 'Tom',\n                lastName: 'Coemans'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Guy',\n                    lastName: 'Wauters'\n                }\n            ]\n        },\n        {\n            id: 3,\n            name: 'Project #4',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 4,\n            name: 'Project #5',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 5,\n            name: 'Project #6',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 6,\n            name: 'Project #7',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 7,\n            name: 'Project #8',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 8,\n            name: 'Project #9',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 9,\n            name: 'Project #10',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 10,\n            name: 'Project #11',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 11,\n            name: 'Project #12',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 12,\n            name: 'Project #13',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 13,\n            name: 'Project #14',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 14,\n            name: 'Project #15',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 15,\n            name: 'Project #16',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 16,\n            name: 'Project #17',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 17,\n            name: 'Project #18',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 18,\n            name: 'Project #19',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 19,\n            name: 'Project #20',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 20,\n            name: 'Project #21',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 21,\n            name: 'Project #22',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 22,\n            name: 'Project #23',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 23,\n            name: 'Project #24',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 24,\n            name: 'Project #25',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        }\n    ]\n};\n",language:"ts",dark:!0})]}),"\n",(0,c.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,c.jsx)(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/story/legacy-vl-rich-data--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Rich Data"})}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlRichData.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Rich Data"})}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-rich-data.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - Rich Data"})})]})}let u={data:[{id:0,name:"Project #1",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Sander",lastName:"Kleykens"}]},{id:1,name:"Project #2",manager:{firstName:"Tom",lastName:"Coemans"},medewerkers:[{firstName:"Guy",lastName:"Wauters"}]},{id:2,name:"Project #3",manager:{firstName:"Tom",lastName:"Coemans"},medewerkers:[{firstName:"Guy",lastName:"Wauters"}]},{id:3,name:"Project #4",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:4,name:"Project #5",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:5,name:"Project #6",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:6,name:"Project #7",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:7,name:"Project #8",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:8,name:"Project #9",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:9,name:"Project #10",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:10,name:"Project #11",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:11,name:"Project #12",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:12,name:"Project #13",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:13,name:"Project #14",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:14,name:"Project #15",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:15,name:"Project #16",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:16,name:"Project #17",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:17,name:"Project #18",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:18,name:"Project #19",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:19,name:"Project #20",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:20,name:"Project #21",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:21,name:"Project #22",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:22,name:"Project #23",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:23,name:"Project #24",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:24,name:"Project #25",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]}]},f=()=>{customElements.whenDefined("vl-rich-data").then(()=>{let e;let t=document.querySelector("#rich-data"),a=t?.querySelector('[slot="content"]'),n=t?.querySelector('[slot="sorter"]'),r=t?.querySelector("vl-pager"),s=(t,n,r)=>{e=t,a.innerHTML="",t?.slice(n,r).forEach(e=>{let t=new Date().toLocaleString(),n=e.manager,r=e.medewerkers[0],s=`
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
                            <data>${n.lastName}</data>
                            <label>Eerste medewerker</label>
                            <data>${r.lastName}</data>
                            <label>
                                <span>Project o.l.v. <strong>manager</strong></span>
                            </label>
                            <data>
                                <span>${e.name} o.l.v. <strong>${n.firstName} ${n.lastName}</strong></span>
                            </data>
                        </vl-search-result-properties-next>
                  `;a.insertAdjacentHTML("beforeend",`<vl-search-result-next>${s}</vl-search-result-next>`)})},i=(e,t,a)=>""===a?e:e.filter(e=>l(e,t).includes(a)),l=(e,t)=>{let a=t.split("."),n=e;for(let e=0;e<a.length;e++){if(void 0===n[a[e]])return;n=n[a[e]]}return n.toString()};t?.addEventListener("change",e=>{let a,n=u.data,r=u.data.length;if(e.detail.formData)for(let t of(a=[],e.detail.formData.entries()))r=(n=i(n,t[0],t[1])).length,a.push({name:t[0],value:t[1]});let l=e.detail.paging;if(l){let e=(l.currentPage-1)*10;s(n,e,e+10)}t&&(t.data={paging:{currentPage:e.detail.paging.currentPage,totalItems:r},filter:a})}),n?.addEventListener("change",a=>{let n=e;a.stopPropagation(),n&&(n.sort((e,t)=>{let n=a.target?.value?.split(".");if(!n)return 0;let r=e=>n.reduce((e,t)=>e[t],e)?.toString()||"",s=r(e),i=r(t);return s.localeCompare(i)}),t&&(t.data={paging:{currentPage:1,totalItems:n.length}}),s(n,0,10))}),t&&(t.data={paging:{currentPage:1,totalItems:25}}),s(u.data,0,r.getAttribute("items-per-page"))})},h={id:"components-rich-data",title:"components/rich-data",tags:["autodocs"],args:o.w,argTypes:o.Q,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,m.RP)(),e.components);return t?(0,c.jsx)(t,Object.assign({},e,{children:(0,c.jsx)(p,e)})):p(e)}}}};(0,r.gy)([i.b,l.z]);let g=({filterClosable:e,filterClosed:t})=>(0,s.qy)`
        <vl-rich-data ?data-vl-filter-closable=${e} ?data-vl-filter-closed=${t}>
            <span slot="no-content">Geen resultaten gevonden</span>
            <vl-search-result-next slot="content"></vl-search-result-next>
        </vl-rich-data>
    `;g.storyName="vl-rich-data - default";let v=(0,n._7)(o.w,({filterClosable:e,filterClosed:t})=>(f(),(0,s.qy)`
        <vl-rich-data id="rich-data" ?data-vl-filter-closable=${e} ?data-vl-filter-closed=${t}>
            <span slot="no-content">Geen resultaten</span>
            <div slot="content"></div>
            <select is="vl-select" slot="sorter" aria-label="Sorteer">
                <option value="id">ID</option>
                <option value="manager.lastName">Naam manager</option>
            </select>
            <div is="vl-search-filter" data-vl-alt slot="filter">
                <form is="vl-form" id="rich-data-table-filter-form">
                    <section>
                        <h2>Doorzoek projecten</h2>
                        <div>
                            <label is="vl-form-label" for="filterOpId">Project id</label>
                            <input is="vl-input-field" id="filterOpId" type="text" name="id" value="" data-vl-block />
                        </div>
                    </section>
                    <section>
                        <h2>Project details</h2>
                        <div>
                            <label is="vl-form-label" for="filterOpNaamProject">Project naam</label>
                            <input
                                is="vl-input-field"
                                id="filterOpNaamProject"
                                type="text"
                                name="name"
                                value=""
                                data-vl-block
                            />
                        </div>
                        <div>
                            <label is="vl-form-label" for="filterOpNaamManager">Manager familienaam</label>
                            <input
                                is="vl-input-field"
                                id="filterOpNaamManager"
                                type="text"
                                name="manager.lastName"
                                value=""
                                data-vl-block
                            />
                        </div>
                    </section>
                    <div>
                        <button is="vl-button" type="submit">Zoeken</button>
                    </div>
                </form>
                <div>
                    <button is="vl-button-link" type="reset" form="rich-data-table-filter-form">
                        Zoekopdracht verwijderen
                    </button>
                </div>
            </div>
            <vl-pager
                id="rich-data-table-filter-sorting-paging-pager"
                slot="pager"
                data-vl-total-items="25"
                data-vl-items-per-page="10"
                data-vl-current-page="1"
                data-vl-align-center
            ></vl-pager>
        </vl-rich-data>
    `));v.storyName="vl-rich-data - pager",g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:'({\n  filterClosable,\n  filterClosed\n}: typeof richDataArgs) => {\n  return html`\n        <vl-rich-data ?data-vl-filter-closable=${filterClosable} ?data-vl-filter-closed=${filterClosed}>\n            <span slot="no-content">Geen resultaten gevonden</span>\n            <vl-search-result-next slot="content"></vl-search-result-next>\n        </vl-rich-data>\n    `;\n}',...g.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:'story(richDataArgs, ({\n  filterClosable,\n  filterClosed\n}: typeof richDataArgs) => {\n  richDataPaginationImplementation();\n  return html`\n        <vl-rich-data id="rich-data" ?data-vl-filter-closable=${filterClosable} ?data-vl-filter-closed=${filterClosed}>\n            <span slot="no-content">Geen resultaten</span>\n            <div slot="content"></div>\n            <select is="vl-select" slot="sorter" aria-label="Sorteer">\n                <option value="id">ID</option>\n                <option value="manager.lastName">Naam manager</option>\n            </select>\n            <div is="vl-search-filter" data-vl-alt slot="filter">\n                <form is="vl-form" id="rich-data-table-filter-form">\n                    <section>\n                        <h2>Doorzoek projecten</h2>\n                        <div>\n                            <label is="vl-form-label" for="filterOpId">Project id</label>\n                            <input is="vl-input-field" id="filterOpId" type="text" name="id" value="" data-vl-block />\n                        </div>\n                    </section>\n                    <section>\n                        <h2>Project details</h2>\n                        <div>\n                            <label is="vl-form-label" for="filterOpNaamProject">Project naam</label>\n                            <input\n                                is="vl-input-field"\n                                id="filterOpNaamProject"\n                                type="text"\n                                name="name"\n                                value=""\n                                data-vl-block\n                            />\n                        </div>\n                        <div>\n                            <label is="vl-form-label" for="filterOpNaamManager">Manager familienaam</label>\n                            <input\n                                is="vl-input-field"\n                                id="filterOpNaamManager"\n                                type="text"\n                                name="manager.lastName"\n                                value=""\n                                data-vl-block\n                            />\n                        </div>\n                    </section>\n                    <div>\n                        <button is="vl-button" type="submit">Zoeken</button>\n                    </div>\n                </form>\n                <div>\n                    <button is="vl-button-link" type="reset" form="rich-data-table-filter-form">\n                        Zoekopdracht verwijderen\n                    </button>\n                </div>\n            </div>\n            <vl-pager\n                id="rich-data-table-filter-sorting-paging-pager"\n                slot="pager"\n                data-vl-total-items="25"\n                data-vl-items-per-page="10"\n                data-vl-current-page="1"\n                data-vl-align-center\n            ></vl-pager>\n        </vl-rich-data>\n    `;\n})',...v.parameters?.docs?.source}}};let N=["RichDataDefault","RichDataPager"]},"../../libs/components/src/next/properties/index.ts":(e,t,a)=>{a.d(t,{L:()=>n.L});var n=a("../../libs/components/src/next/properties/vl-properties.component.ts")},"../../libs/components/src/next/properties/vl-properties.component.ts":(e,t,a)=>{a.d(t,{L:()=>g});var n=a("../../libs/common/utilities/src/index.ts"),r=a("../../libs/elements/src/index.ts"),s=a("../../node_modules/lit/index.js");let i=e=>e.map(e=>e.cloneNode(!0)),l=e=>{let t=[],a=[],n=[];return e.forEach(e=>{switch(e.localName){case"label":a.length&&n.length&&(t.push({labels:a,data:n}),a=[],n=[]),a.push(e.children.length>0?i([...e.children]):e.innerHTML);break;case"data":n.push(e.children.length>0?i([...e.children]):e.innerHTML)}}),a.length&&t.push({labels:a,data:n}),t},o=e=>null==e||0==e.length?(console.warn("vl-properties - geen props opgegeven"),[]):e[0]?.localName==="div"?e.map(e=>({class:e.className,items:l([...e.children])})):[{items:l(e)}];var c=a("../../libs/common/utilities/src/css/index.ts");let m=e=>(0,s.AH)`
        width: calc(${e}% - 1rem);
    `,d=()=>(0,s.AH)`
        font-size: 1.6rem;
    `,p=()=>(0,s.AH)`
        grid-column: 1;
        font-size: 1.6rem;
    `,u=e=>(0,s.AH)`
        dl {
            grid-template-columns: [labels] ${e}rem [data] auto;
        }

        dl .item {
            grid-template-columns: [labels] ${e}rem [data] auto;
        }

        @media screen and (max-width: ${c.gT}px) {
            dl {
                grid-template-columns: 100%;
            }

            dl .item {
                grid-template-columns: 100%;
            }
        }
    `,f=(0,s.AH)`
    :host {
        display: block;
    }

    .column {
        ${m(50)};
        float: left;
    }

    .column--full-width {
        ${m(100)};
        float: left;
    }

    dl {
        display: grid;
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
        ${d()}
    }

    dd {
        font-size: 1.8rem;
        grid-column: 2;
    }

    .collapsed dd {
        ${p()}
    }

    @media screen and (max-width: ${c.gT}px) {
        dd {
            ${p()}
        }

        dt {
            ${d()}
        }
    }
`;var h=a("../../libs/components/src/next/properties/vl-properties.defaults.ts");class g extends n.jW{static get styles(){return[r.hF,f]}static get properties(){return{props:{type:Array},aggregatedProps:{type:Array,state:!0},labelWidth:{type:Number,attribute:"label-width"}}}set props(e){this.attributeProps=e,this.buildInternalProperties()}get props(){return this.attributeProps}connectedCallback(){super.connectedCallback(),this.buildInternalProperties(),this.observeLightPropertiesChange()}firstUpdated(e){super.firstUpdated(e),this.shadowRoot&&(this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,this.labelWidthSheet])}updated(e){super.updated(e),e.has("labelWidth")&&this.labelWidth&&this.labelWidthSheet.replace(u(this.labelWidth).toString())}disconnectedCallback(){super.disconnectedCallback(),this.disconnectMutationObservers()}render(){return(0,s.qy)` <dl>${this.aggregatedProps.map(e=>this.renderColumn(e))}</dl> `}renderColumn(e){return e.class?(0,s.qy)` <div class="${e.class}">${e.items.map(e=>this.renderItem(e))}</div>`:(0,s.qy)` ${e.items.map(e=>this.renderItem(e))}`}renderItem(e){return(0,s.qy)` <div class="item">${this.renderLabels(e.labels)} ${this.renderData(e.data)}</div>`}renderLabels(e){return e.map(e=>(0,s.qy)` <dt>${e}</dt>`)}renderData(e){return e.map(e=>(0,s.qy)` <dd>${e}</dd>`)}buildInternalProperties(){this.aggregatedProps=[...this.attributeProps,...o([...this.children])]}disconnectMutationObservers(){this.mutationObserverList.forEach(e=>e.disconnect()),this.mutationObserverList=[]}observeLightPropertiesChange(){this.disconnectMutationObservers(),this.mutationObserverList=[...this.mutationObserverList,(0,n.U_)(this,e=>{this.buildInternalProperties(),this.observeLightPropertiesChange()})],this.children.length>0&&"div"===this.children[0].localName&&[...this.children].forEach(e=>this.mutationObserverList=[...this.mutationObserverList,(0,n.U_)(e,e=>{this.buildInternalProperties()})])}constructor(...e){super(...e),this.attributeProps=h.g.props,this.aggregatedProps=h.g.props,this.mutationObserverList=[],this.labelWidth=h.g.labelWidth,this.labelWidthSheet=new CSSStyleSheet}}g=function(e,t,a,n){var r,s=arguments.length,i=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,n);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(i=(s<3?r(i):s>3?r(t,a,i):r(t,a))||i);return s>3&&i&&Object.defineProperty(t,a,i),i}([(0,n.M1)("vl-properties-next")],g)},"../../libs/components/src/next/properties/vl-properties.defaults.ts":(e,t,a)=>{a.d(t,{g:()=>n});let n={labelWidth:17,props:[]}},"../../libs/components/src/next/search-result/vl-search-result-properties.component.ts":(e,t,a)=>{a.d(t,{y:()=>l});var n=a("../../libs/common/utilities/src/index.ts"),r=a("../../libs/components/src/next/properties/index.ts"),s=a("../../node_modules/lit/index.js");let i=(0,s.AH)`
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
`;class l extends r.L{static get styles(){return[i]}}l=function(e,t,a,n){var r,s=arguments.length,i=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,n);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(i=(s<3?r(i):s>3?r(t,a,i):r(t,a))||i);return s>3&&i&&Object.defineProperty(t,a,i),i}([(0,n.M1)("vl-search-result-properties-next")],l)},"../../libs/components/src/next/search-result/vl-search-result-text.component.ts":(e,t,a)=>{a.d(t,{k:()=>r});var n=a("../../libs/common/utilities/src/index.ts");class r extends n.jW{createRenderRoot(){return this}}r=function(e,t,a,n){var r,s=arguments.length,i=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,n);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(i=(s<3?r(i):s>3?r(t,a,i):r(t,a))||i);return s>3&&i&&Object.defineProperty(t,a,i),i}([(0,n.M1)("vl-search-result-text-next")],r)},"../../libs/components/src/next/search-result/vl-search-result-title.component.ts":(e,t,a)=>{a.d(t,{J:()=>r});var n=a("../../libs/common/utilities/src/index.ts");class r extends n.jW{createRenderRoot(){return this}}r=function(e,t,a,n){var r,s=arguments.length,i=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,n);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(i=(s<3?r(i):s>3?r(t,a,i):r(t,a))||i);return s>3&&i&&Object.defineProperty(t,a,i),i}([(0,n.M1)("vl-search-result-title-next")],r)},"../../libs/components/src/next/search-result/vl-search-result.component.ts":(e,t,a)=>{a.d(t,{z:()=>d});var n=a("../../libs/common/utilities/src/index.ts"),r=a("../../libs/elements/src/index.ts"),s=a("../../libs/components/src/next/search-result/vl-search-result-properties.component.ts"),i=a("../../libs/components/src/next/search-result/vl-search-result-text.component.ts"),l=a("../../libs/components/src/next/search-result/vl-search-result-title.component.ts"),o=a("../../libs/common/utilities/src/css/index.ts"),c=a("../../node_modules/lit/index.js");let m=(0,c.AH)`
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
`;class d extends n.jW{static{(0,n.gy)([i.k,l.J,s.y])}static get styles(){return[...r.hF,m]}connectedCallback(){super.connectedCallback(),this.shadowRoot?.append(...this.childNodes)}}d=function(e,t,a,n){var r,s=arguments.length,i=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,n);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(i=(s<3?r(i):s>3?r(t,a,i):r(t,a))||i);return s>3&&i&&Object.defineProperty(t,a,i),i}([(0,r.fD)(),(0,n.M1)("vl-search-result-next")],d)},"../../libs/components/src/rich-data/stories/vl-rich-data.stories-arg.ts":(e,t,a)=>{a.d(t,{Q:()=>s,w:()=>r});var n=a("../../libs/common/storybook/src/index.ts");let r={...n.D8,filterClosable:!1,filterClosed:!1},s={...(0,n.RN)(),filterClosable:{name:"data-vl-filter-closable",description:"Filter sluitbaar maken en knop tonen om de filter te tonen en terug te verbergen.\n * Op een klein scherm wordt een modal geopend bij het klikken op de filter knop ipv een de filter naast de tabel te tonen.\n\n * Om elementen van de filter te verbergen enkel in de modal, kan het attribuut `data-vl-hidden-in-modal` gezet worden.",table:{type:{summary:n.QE.BOOLEAN},category:n.R6.ATTRIBUTES,defaultValue:{summary:r.filterClosable}}},filterClosed:{name:"data-vl-filter-closed",description:"Verbergt de filter",table:{type:{summary:n.QE.BOOLEAN},category:n.R6.ATTRIBUTES,defaultValue:{summary:r.filterClosed}}}}}}]);