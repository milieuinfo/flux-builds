"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[1081],{"../../libs/components/src/block/rich-data/stories/vl-rich-data.stories.ts":(e,t,a)=>{a.r(t),a.d(t,{RichDataDefault:()=>v,RichDataFilterMaxWidth:()=>k,RichDataPager:()=>b,__namedExportsOrder:()=>P,default:()=>g});var n=a("../../libs/common/src/index.ts"),r=a("../../resources/utils-storybook/index.ts"),s=a("../../node_modules/lit-html/lit-html.js"),l=a("../../libs/components/src/form/select/index.ts");a("../../libs/components/src/block/rich-data-table/vl-rich-data-field.component.ts");var i=a("../../libs/components/src/block/search-result/index.ts"),o=a("../../libs/components/src/block/rich-data/vl-rich-data.component.ts"),c=a("../../libs/components/src/block/rich-data/stories/vl-rich-data.stories-arg.ts");a("../../node_modules/react/index.js");var m=a("../../node_modules/react/jsx-runtime.js"),d=a("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),u=a("../../node_modules/@storybook/blocks/dist/index.mjs");function p(e){let t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",a:"a"},(0,d.RP)(),e.components),{FluxMetaData:a}=t;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("FluxMetaData",!0),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(t.h1,{id:"rich-data",children:"Rich Data"}),"\n",(0,m.jsx)(a,{id:"components-block-rich-data"}),"\n",(0,m.jsxs)(t.p,{children:["Gebruik de ",(0,m.jsx)(t.code,{children:"rich-data"})," component om een lijst van data te tonen."]}),"\n",(0,m.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:"language-js",children:"import { VlRichData } from '@domg-wc/components/block';\n"})}),"\n",(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:"language-html",children:"<vl-rich-data></vl-rich-data>\n"})}),"\n",(0,m.jsx)(u.Hl,{of:v}),"\n",(0,m.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,m.jsx)(u.ov,{of:v}),"\n",(0,m.jsx)(t.h2,{id:"varianten",children:"Varianten"}),"\n",(0,m.jsx)(t.p,{children:"Een uitgewerkt voorbeeld vind je hier:"}),"\n",(0,m.jsx)(u.Hl,{of:b}),"\n",(0,m.jsxs)("details",{children:[(0,m.jsx)("summary",{children:"klik hier om een voorbeeld implementatie te zien"}),(0,m.jsx)(u.kL,{code:"import { richDataMockData } from './vl-rich-data.stories-mock';\nexport const richDataPaginationImplementation = ()=>{\n    customElements.whenDefined('vl-rich-data').then(()=>{\n        const richDataComponent = document.querySelector('#rich-data');\n        const content = richDataComponent?.querySelector('[slot=\"content\"]');\n        const sorter = richDataComponent?.querySelector('[slot=\"sorter\"]');\n        const pager = richDataComponent?.querySelector('vl-pager');\n        const data = richDataMockData;\n        let newData = undefined;\n        const setContentData = (data, from, to)=>{\n            newData = data;\n            content.innerHTML = ``;\n            data?.slice(from, to).forEach((project)=>{\n                const now = new Date().toLocaleString();\n                const manager = project.manager;\n                const medewerker = project.medewerkers[0];\n                const html = `\n                        <vl-search-result-title>\n                            <a href=\"#\">${project.name}</a>\n                        </vl-search-result-title>\n                        <vl-search-result-text>\n                            <time>Gestart op ${now}</time>\n                        </vl-search-result-text>\n                        <vl-search-result-properties>\n                            <label>ID</label>\n                            <data>${project.id}</data>\n                            <label>Naam manager</label>\n                            <data>${manager.lastName}</data>\n                            <label>Eerste medewerker</label>\n                            <data>${medewerker.lastName}</data>\n                            <label>\n                                <span>Project o.l.v. <strong>manager</strong></span>\n                            </label>\n                            <data>\n                                <span>${project.name} o.l.v. <strong>${manager.firstName} ${manager.lastName}</strong></span>\n                            </data>\n                        </vl-search-result-properties>\n                  `;\n                content.insertAdjacentHTML('beforeend', `<vl-search-result>${html}</vl-search-result>`);\n            });\n        };\n        const filter = (data, pathToKey, value)=>{\n            if (value === '') {\n                return data;\n            }\n            return data.filter((element)=>{\n                const valueByPath = findValueByPath(element, pathToKey);\n                return valueByPath.includes(value);\n            });\n        };\n        const findValueByPath = (element, pathToKey)=>{\n            const keys = pathToKey.split('.');\n            let current = element;\n            for(let i = 0; i < keys.length; i++){\n                if (current[keys[i]] !== undefined) {\n                    current = current[keys[i]];\n                } else {\n                    return undefined;\n                }\n            }\n            return current.toString();\n        };\n        richDataComponent?.addEventListener('change', (event)=>{\n            let newData = data.data;\n            let totalItems = data.data.length;\n            let filterEntries = undefined;\n            if (event.detail.formData) {\n                filterEntries = [];\n                for (const entry of event.detail.formData.entries()){\n                    newData = filter(newData, entry[0], entry[1]);\n                    totalItems = newData.length;\n                    filterEntries.push({\n                        name: entry[0],\n                        value: entry[1]\n                    });\n                }\n            }\n            const pagination = event.detail.paging;\n            if (pagination) {\n                const from = (pagination.currentPage - 1) * 10;\n                setContentData(newData, from, from + 10);\n            }\n            if (richDataComponent) {\n                richDataComponent.data = {\n                    paging: {\n                        currentPage: event.detail.paging.currentPage,\n                        totalItems: totalItems\n                    },\n                    filter: filterEntries\n                };\n            }\n        });\n        sorter?.addEventListener('vl-change', (event)=>{\n            const data = newData;\n            event.stopPropagation();\n            if (!data) return;\n            data.sort((firstElement, secondElement)=>{\n                const keys = event.target?.value?.split('.');\n                if (!keys) {\n                    return 0;\n                }\n                const getValue = (element)=>keys.reduce((value, key)=>value[key], element)?.toString() || '';\n                const firstValue = getValue(firstElement);\n                const secondValue = getValue(secondElement);\n                return firstValue.localeCompare(secondValue);\n            });\n            if (richDataComponent) {\n                richDataComponent.data = {\n                    paging: {\n                        currentPage: 1,\n                        totalItems: data.length\n                    }\n                };\n            }\n            setContentData(data, 0, 10);\n        });\n        if (richDataComponent) {\n            richDataComponent.data = {\n                paging: {\n                    currentPage: 1,\n                    totalItems: 25\n                }\n            };\n        }\n        setContentData(data.data, 0, pager.getAttribute('items-per-page'));\n    });\n};\n",language:"ts",dark:!0})]}),"\n",(0,m.jsxs)("details",{children:[(0,m.jsx)("summary",{children:"mock data voor voorbeeld kan je hier vinden"}),(0,m.jsx)(u.kL,{code:"export const richDataMockData = {\n    data: [\n        {\n            id: 0,\n            name: 'Project #1',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Sander',\n                    lastName: 'Kleykens'\n                }\n            ]\n        },\n        {\n            id: 1,\n            name: 'Project #2',\n            manager: {\n                firstName: 'Tom',\n                lastName: 'Coemans'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Guy',\n                    lastName: 'Wauters'\n                }\n            ]\n        },\n        {\n            id: 2,\n            name: 'Project #3',\n            manager: {\n                firstName: 'Tom',\n                lastName: 'Coemans'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Guy',\n                    lastName: 'Wauters'\n                }\n            ]\n        },\n        {\n            id: 3,\n            name: 'Project #4',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 4,\n            name: 'Project #5',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 5,\n            name: 'Project #6',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 6,\n            name: 'Project #7',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 7,\n            name: 'Project #8',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 8,\n            name: 'Project #9',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 9,\n            name: 'Project #10',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 10,\n            name: 'Project #11',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 11,\n            name: 'Project #12',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 12,\n            name: 'Project #13',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 13,\n            name: 'Project #14',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 14,\n            name: 'Project #15',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 15,\n            name: 'Project #16',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 16,\n            name: 'Project #17',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 17,\n            name: 'Project #18',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 18,\n            name: 'Project #19',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 19,\n            name: 'Project #20',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 20,\n            name: 'Project #21',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 21,\n            name: 'Project #22',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 22,\n            name: 'Project #23',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 23,\n            name: 'Project #24',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        },\n        {\n            id: 24,\n            name: 'Project #25',\n            manager: {\n                firstName: 'Pascal',\n                lastName: 'Riquier'\n            },\n            medewerkers: [\n                {\n                    firstName: 'Pieter',\n                    lastName: 'Beckers'\n                }\n            ]\n        }\n    ]\n};\n",language:"ts",dark:!0})]}),"\n",(0,m.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,m.jsx)(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,m.jsx)(t.p,{children:(0,m.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/story/legacy-vl-rich-data--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Rich Data"})}),"\n",(0,m.jsx)(t.p,{children:(0,m.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlRichData.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Rich Data"})}),"\n",(0,m.jsx)(t.p,{children:(0,m.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-rich-data.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - Rich Data"})})]})}let h={data:[{id:0,name:"Project #1",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Sander",lastName:"Kleykens"}]},{id:1,name:"Project #2",manager:{firstName:"Tom",lastName:"Coemans"},medewerkers:[{firstName:"Guy",lastName:"Wauters"}]},{id:2,name:"Project #3",manager:{firstName:"Tom",lastName:"Coemans"},medewerkers:[{firstName:"Guy",lastName:"Wauters"}]},{id:3,name:"Project #4",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:4,name:"Project #5",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:5,name:"Project #6",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:6,name:"Project #7",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:7,name:"Project #8",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:8,name:"Project #9",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:9,name:"Project #10",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:10,name:"Project #11",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:11,name:"Project #12",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:12,name:"Project #13",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:13,name:"Project #14",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:14,name:"Project #15",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:15,name:"Project #16",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:16,name:"Project #17",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:17,name:"Project #18",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:18,name:"Project #19",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:19,name:"Project #20",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:20,name:"Project #21",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:21,name:"Project #22",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:22,name:"Project #23",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:23,name:"Project #24",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:24,name:"Project #25",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]}]},f=()=>{customElements.whenDefined("vl-rich-data").then(()=>{let e;let t=document.querySelector("#rich-data"),a=t?.querySelector('[slot="content"]'),n=t?.querySelector('[slot="sorter"]'),r=t?.querySelector("vl-pager"),s=(t,n,r)=>{e=t,a.innerHTML="",t?.slice(n,r).forEach(e=>{let t=new Date().toLocaleString(),n=e.manager,r=e.medewerkers[0],s=`
                        <vl-search-result-title>
                            <a href="#">${e.name}</a>
                        </vl-search-result-title>
                        <vl-search-result-text>
                            <time>Gestart op ${t}</time>
                        </vl-search-result-text>
                        <vl-search-result-properties>
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
                        </vl-search-result-properties>
                  `;a.insertAdjacentHTML("beforeend",`<vl-search-result>${s}</vl-search-result>`)})},l=(e,t,a)=>""===a?e:e.filter(e=>i(e,t).includes(a)),i=(e,t)=>{let a=t.split("."),n=e;for(let e=0;e<a.length;e++){if(void 0===n[a[e]])return;n=n[a[e]]}return n.toString()};t?.addEventListener("change",e=>{let a,n=h.data,r=h.data.length;if(e.detail.formData)for(let t of(a=[],e.detail.formData.entries()))r=(n=l(n,t[0],t[1])).length,a.push({name:t[0],value:t[1]});let i=e.detail.paging;if(i){let e=(i.currentPage-1)*10;s(n,e,e+10)}t&&(t.data={paging:{currentPage:e.detail.paging.currentPage,totalItems:r},filter:a})}),n?.addEventListener("vl-change",a=>{let n=e;a.stopPropagation(),n&&(n.sort((e,t)=>{let n=a.target?.value?.split(".");if(!n)return 0;let r=e=>n.reduce((e,t)=>e[t],e)?.toString()||"",s=r(e),l=r(t);return s.localeCompare(l)}),t&&(t.data={paging:{currentPage:1,totalItems:n.length}}),s(n,0,10))}),t&&(t.data={paging:{currentPage:1,totalItems:25}}),s(h.data,0,r.getAttribute("items-per-page"))})},g={id:"components-block-rich-data",title:"Components - Block/rich-data",tags:["autodocs"],args:c.w,argTypes:c.Q,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,d.RP)(),e.components);return t?(0,m.jsx)(t,Object.assign({},e,{children:(0,m.jsx)(p,e)})):p(e)}}}};(0,n.gy)([o.b,i.zX,l.Y]);let v=({filterClosable:e,filterClosed:t})=>(0,s.qy)`
        <vl-rich-data ?filter-closable=${e} ?filter-closed=${t}>
            <span slot="no-content">Geen resultaten gevonden</span>
            <vl-search-result slot="content"></vl-search-result>
        </vl-rich-data>
    `;v.storyName="vl-rich-data - default";let N=({filterClosable:e,filterClosed:t,filterMaxWidth:a})=>(0,s.qy)`
        <vl-rich-data id="rich-data" ?filter-closable=${e} ?filter-closed=${t} filter-max-width=${a}>
            <span slot="no-content">Geen resultaten</span>
            <div slot="content"></div>
            <vl-select
                slot="sorter"
                aria-label="Sorteer"
                .options=${[{label:"ID",value:"id"},{label:"Naam manager",value:"manager.lastName"}]}
            ></vl-select>
            <vl-search-filter slot="filter" alt>
                <form>
                    <section>
                        <vl-title type="h2" alt no-space-bottom="">Doorzoek projecten</vl-title>
                        <div>
                            <vl-form-label for="filterOpId" label="Project id" light></vl-form-label>
                            <vl-input-field id="filterOpId" type="text" name="id" block></vl-input-field>
                        </div>
                    </section>
                    <section>
                        <vl-title type="h2" alt no-space-bottom="">Project details</vl-title>
                        <div>
                            <vl-form-label for="filterOpNaamProject" label="Project naam" light></vl-form-label>
                            <vl-input-field type="text" id="filterOpNaamProject" name="name" block></vl-input-field>
                        </div>
                        <div>
                            <vl-form-label for="filterOpNaamManager" label="Manager familienaam" light></vl-form-label>
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
                id="rich-data-table-filter-sorting-paging-pager"
                slot="pager"
                total-items="25"
                items-per-page="10"
                current-page="1"
                align-center
            ></vl-pager>
        </vl-rich-data>
    `,b=(0,r._7)(c.w,e=>(f(),N(e)));b.storyName="vl-rich-data - pager";let k=(0,r._7)(c.w,e=>(f(),N(e)));k.storyName="vl-rich-data - filter-max-width",k.args={filterMaxWidth:"calc(1280px / 3)"},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:'({\n  filterClosable,\n  filterClosed\n}: typeof richDataArgs) => {\n  return html`\n        <vl-rich-data ?filter-closable=${filterClosable} ?filter-closed=${filterClosed}>\n            <span slot="no-content">Geen resultaten gevonden</span>\n            <vl-search-result slot="content"></vl-search-result>\n        </vl-rich-data>\n    `;\n}',...v.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"story(richDataArgs, (pagerArgs: typeof richDataArgs) => {\n  richDataPaginationImplementation();\n  return pagerTemplate(pagerArgs);\n})",...b.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:"story(richDataArgs, (pagerArgs: typeof richDataArgs) => {\n  richDataPaginationImplementation();\n  return pagerTemplate(pagerArgs);\n})",...k.parameters?.docs?.source}}};let P=["RichDataDefault","RichDataPager","RichDataFilterMaxWidth"]},"../../libs/components/src/block/rich-data/stories/vl-rich-data.stories-arg.ts":(e,t,a)=>{a.d(t,{Q:()=>s,w:()=>r});var n=a("../../resources/utils-storybook/index.ts");let r={...n.D8,filterClosable:!1,filterClosed:!1,filterMaxWidth:""},s={...n.RN,filterClosable:{name:"filter-closable",description:'Maakt de filter sluitbaar en toont een knop om de zichtbaarheid van de filter te togglen.\n * Op een klein scherm verschijnt de filter als modal ipv naast de inhoud.\n\n * Om in de "modal"-variant elementen van de filter te verbergen, kan het attribuut `hidden-in-modal` toegevoegd worden.',table:{type:{summary:n.QE.BOOLEAN},category:n.R6.ATTRIBUTES,defaultValue:{summary:r.filterClosable}}},filterClosed:{name:"filter-closed",description:"Verbergt de filter.",table:{type:{summary:n.QE.BOOLEAN},category:n.R6.ATTRIBUTES,defaultValue:{summary:r.filterClosed}}},filterMaxWidth:{name:"filter-max-width",description:'Maximum breedte (CSS value, bv. "300px") die de filter kan innemen in een full-width layout, op grote resolutie.',table:{type:{summary:n.QE.STRING},category:n.R6.ATTRIBUTES,defaultValue:{summary:r.filterMaxWidth}}}}},"../../libs/components/src/form/select/index.ts":(e,t,a)=>{a.d(t,{Y:()=>n.Y});var n=a("../../libs/components/src/form/select/vl-select.component.ts")},"../../libs/components/src/form/select/vl-select.component.ts":(e,t,a)=>{a.d(t,{Y:()=>p});var n=a("../../libs/common/src/index.ts"),r=a("../../node_modules/@domg/govflanders-style/common/index.js"),s=a("../../node_modules/@domg/govflanders-style/component/index.js"),l=a("../../node_modules/lit/index.js"),i=a("../../node_modules/lit/directives/class-map.js"),o=a("../../node_modules/lit/directives/live.js"),c=a("../../libs/components/src/form/form-control/index.ts");let m=(0,l.AH)`
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
`,d=(0,l.AH)`
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
`;var u=a("../../libs/components/src/form/select/vl-select.defaults.ts");class p extends c.M{static get styles(){return[r.h8,r.BI,m,s.py,d]}static get properties(){return{options:{type:Array},initialOptions:{type:Array,attribute:"initial-options"},block:{type:Boolean},readonly:{type:Boolean},placeholder:{type:String},autocomplete:{type:String},notDeletable:{type:Boolean,attribute:"not-deletable"},value:{type:String}}}get validationTarget(){return this.shadowRoot?.querySelector("select")}connectedCallback(){super.connectedCallback();let e=this.getSelectedOption();this.value=e?.value||"",this.initialOptions=structuredClone(this.options)}updated(e){if(super.updated(e),e.has("options")){let e=this.getSelectedOption();this.value=e?.value||""}if(e.has("value")){let e={value:this.value};this.setValue(this.value),this.dispatchEvent(new CustomEvent("vl-change",{composed:!0,bubbles:!0,detail:e})),this.dispatchInput&&(this.dispatchEvent(new CustomEvent("vl-input",{bubbles:!0,composed:!0,detail:e})),this.dispatchInput=!1),this.dispatchEventIfValid(e)}}render(){let e={"vl-select__container":!0,"vl-select__container--block":this.block},t={"vl-select":!0,"vl-select--disabled":this.disabled,"vl-select--error":this.isInvalid||this.error,"vl-select--success":this.success,"vl-select--block":this.block},a=!!this.value,n=this.options.some(e=>e.group);return(0,l.qy)`
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
                    ${this.placeholder?this.renderPlaceholder(a):l.s6}
                    ${n?this.renderGroupedOptions():this.renderSelectOptions(this.options)}
                </select>
                ${a&&!this.notDeletable?this.renderClearButton():l.s6}
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
            </option>`)}resetFormControl(){super.resetFormControl(),this.options=structuredClone(this.initialOptions);let e=this.getSelectedOption();this.value=e?.value||""}onChange(e){this.value=e?.target?.value}onSelect(){this.dispatchInput=!0}clearValue(){this.dispatchInput=!0,this.value=""}getSelectedOption(){return[...this.options].reverse().find(e=>e.selected)}getGroupedOptions(){return this.options.reduce((e,t)=>{let a=t.group||this.DEFAULT_GROUP_LABEL;return e[a]?e[a].push(t):e[a]=[t],e},{})}constructor(...e){super(...e),this.options=u.p.options,this.initialOptions=u.p.initialOptions,this.value="",this.block=u.p.block,this.placeholder=u.p.placeholder,this.autocomplete=u.p.autocomplete,this.notDeletable=u.p.notDeletable,this.DEFAULT_GROUP_LABEL="Overig",this.dispatchInput=!1}}p=function(e,t,a,n){var r,s=arguments.length,l=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,a,n);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(l=(s<3?r(l):s>3?r(t,a,l):r(t,a))||l);return s>3&&l&&Object.defineProperty(t,a,l),l}([(0,n.M1)("vl-select")],p)},"../../libs/components/src/form/select/vl-select.defaults.ts":(e,t,a)=>{a.d(t,{p:()=>n});let n={...a("../../libs/components/src/form/form-control/form-control.defaults.ts").i,options:[],initialOptions:[],block:!1,placeholder:"",autocomplete:"",notDeletable:!1}}}]);