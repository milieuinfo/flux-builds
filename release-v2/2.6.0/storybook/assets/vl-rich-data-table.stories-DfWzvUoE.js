import{L as b,K as v,u as T,j as a,C as k,S as N,bd as S,s as j,x as P,r as B,cS as $,b$ as V,aX as M,h as E,b as q,V as z}from"./iframe-Ds54rb_7.js";import{V as I}from"./vl-select.component-DYcw1fiu.js";import{r as O,a as A}from"./vl-rich-data.stories-arg-CxuXnTwL.js";import"./preload-helper-D9Z9MdNV.js";const C={data:[{id:0,name:"Wegen",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Sander",lastName:"Kleykens"}]},{id:1,name:"Water",manager:{firstName:"Siegfried",lastName:"Brusselmans"},medewerkers:[{firstName:"Guy",lastName:"Wauters"}]},{id:2,name:"Diversiteit",manager:{firstName:"Hendrik",lastName:"Vangenechten"},medewerkers:[{firstName:"Gunther",lastName:"Jaegers"}]},{id:3,name:"Voetafdrukmeting",manager:{firstName:"Pascal",lastName:"De Smet"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:4,name:"Grondwater",manager:{firstName:"Julie",lastName:"Meert"},medewerkers:[{firstName:"Hans",lastName:"Dhondt"}]},{id:5,name:"Grondwatermeting",manager:{firstName:"Julie",lastName:"Meert"},medewerkers:[{firstName:"Thomas",lastName:"Kristiaens"}]}]},y=C,F=()=>{customElements.whenDefined("vl-rich-data-table").then(()=>{const n=document.querySelector("#rich-data-table-filter");if(n){n.data=y,n.addEventListener("change",i=>{let l=[...y.data];if(i.detail.formData)for(const s of i.detail.formData.entries())l=e(l,s[0],s[1]);n.data={data:l,paging:{currentPage:1,totalItems:l.length}}});const e=(i,l,s)=>s===""?i:i.filter(t=>d(t,l).includes(s)),d=(i,l)=>{const s=l.split(".");let t=i;for(let r=0;r<s.length;r++)if(t[s[r]]!==void 0)t=t[s[r]];else return;return t.toString()}}})},R={data:[{id:0,name:"Wegen",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Sander",lastName:"Kleykens"}]},{id:1,name:"Water",manager:{firstName:"Siegfried",lastName:"Brusselmans"},medewerkers:[{firstName:"Guy",lastName:"Wauters"}]},{id:2,name:"Diversiteit",manager:{firstName:"Hendrik",lastName:"Vangenechten"},medewerkers:[{firstName:"Gunther",lastName:"Jaegers"}]},{id:3,name:"Voetafdrukmeting",manager:{firstName:"Pascal",lastName:"De Smet"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:4,name:"Grondwater",manager:{firstName:"Julie",lastName:"Meert"},medewerkers:[{firstName:"Hans",lastName:"Dhondt"}]},{id:5,name:"Grondwatermeting",manager:{firstName:"Julie",lastName:"Meert"},medewerkers:[{firstName:"Thomas",lastName:"Kristiaens"}]},{id:6,name:"Project #7",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:7,name:"Project #8",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:8,name:"Project #9",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:9,name:"Project #10",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:10,name:"Project #11",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:11,name:"Project #12",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:12,name:"Project #13",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:13,name:"Project #14",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:14,name:"Project #15",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:15,name:"Project #16",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:16,name:"Project #17",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:17,name:"Project #18",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:18,name:"Project #19",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:19,name:"Project #20",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:20,name:"Project #21",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:21,name:"Project #22",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:22,name:"Project #23",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:23,name:"Project #24",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:24,name:"Project #25",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]}]},J=()=>{customElements.whenDefined("vl-rich-data-table").then(()=>{const n=R,e=document.querySelector("#rich-data-table-pagination"),d=document.querySelector("#pager-for-rich-data-table");if(e&&d){e.addEventListener("change",t=>{let r=n.data,m=n.data.length,o;if(t.detail.formData){o=[];for(const c of t.detail.formData.entries())r=l(r,c[0],c[1]),m=r.length,o.push({name:c[0],value:c[1]})}t.detail.paging&&(r=i(t.detail.paging.currentPage,d.itemsPerPage,r)),e.data={data:r,paging:{currentPage:t.detail.paging.currentPage,totalItems:m},filter:o}});const i=(t,r,m)=>{const o=(t-1)*r,c=o+r;return m.slice(o,c)};e.data={data:i(1,10,n.data)};const l=(t,r,m)=>m===""?t:t.filter(o=>s(o,r).includes(m)),s=(t,r)=>{const m=r.split(".");let o=t;for(let c=0;c<m.length;c++)if(o[m[c]]!==void 0)o=o[m[c]];else return;return o.toString()}}})},K=()=>{const n=e=>{const d=[...e.data.data];return i=>{const{sorting:l}=i.detail,s=i.target;l?s.data={data:[...d].sort((t,r)=>{for(let m=0;m<l.length;m++){const o=l[m],c=t[o.name],x=r[o.name],w=o.direction==="asc";if(c<x)return w?-1:1;if(c>x)return w?1:-1}return 0}),sorting:l}:s.data=d}};customElements.whenDefined("vl-rich-data-table").then(()=>{const e=document.querySelector("#rich-data-table-sorting");e&&e.addEventListener("change",n(e))})},f={...A,collapsedM:!1,collapsedS:!1,collapsedXS:!1,zebra:!1,fluxZebra:!1},W={...O,collapsedM:{name:"collapsed-m",description:"Vanaf medium schermgrootte, cellen per rij onder elkaar ipv naast elkaar",table:{category:v.ATTRIBUTES,type:{summary:b.BOOLEAN},defaultValue:{summary:String(f.collapsedM)}}},collapsedS:{name:"collapsed-s",description:"Vanaf een small schermgrootte, cellen per rij onder elkaar ipv naast elkaar",table:{category:v.ATTRIBUTES,type:{summary:b.BOOLEAN},defaultValue:{summary:String(f.collapsedS)}}},collapsedXS:{name:"collapsed-xs",description:"Vanaf een extra small schermgrootte, cellen per rij onder elkaar ipv naast elkaar",table:{category:v.ATTRIBUTES,type:{summary:b.BOOLEAN},defaultValue:{summary:String(f.collapsedXS)}}},zebra:{name:"zebra",description:"Variant waarin de rijen afwisselend een andere achtergrondkleur krijgen. Dit maakt de tabel makkelijker leesbaar. Deze zebra werkt niet voor tabellen met detail rijen, gebruik hiervoor flux-zebra.",table:{category:v.ATTRIBUTES,type:{summary:b.BOOLEAN},defaultValue:{summary:String(f.zebra)}}},fluxZebra:{name:"flux-zebra",description:"Variant waarin de rijen afwisselend een andere achtergrondkleur krijgen. Dit maakt de tabel makkelijker leesbaar. Deze zebra werkt voor tabellen met en zonder detail rijen.",table:{category:v.ATTRIBUTES,type:{summary:b.BOOLEAN},defaultValue:{summary:String(f.fluxZebra)}}}},L=`export const sortingRichTableImplementation = () => {
    const tableSorter = (table: any) => {
        const originalTableData = [...table.data.data];
        return (event: any) => {
            const { sorting } = event.detail;
            const table = event.target;
            if (sorting) {
                table.data = {
                    data: [...originalTableData].sort((firstEl, secondEl) => {
                        for (let i = 0; i < sorting.length; i++) {
                            const criteria = sorting[i];
                            const firstValue = firstEl[criteria.name];
                            const secondValue = secondEl[criteria.name];
                            const isAscending = criteria.direction === 'asc';
                            if (firstValue < secondValue) {
                                return isAscending ? -1 : 1;
                            } else if (firstValue > secondValue) {
                                return isAscending ? 1 : -1;
                            }
                        }
                        return 0;
                    }),
                    sorting,
                };
            } else {
                table.data = originalTableData;
            }
        };
    };
    customElements.whenDefined('vl-rich-data-table').then(() => {
        const table = document.querySelector('#rich-data-table-sorting');
        if (table) table.addEventListener('change', tableSorter(table));
    });
};

export default sortingRichTableImplementation;
`,G=`import richDataFilterData from './vl-rich-data-table-filter.stories-mock';

const data = richDataFilterData;

export const filterRichTableImplementation = () => {
    customElements.whenDefined('vl-rich-data-table').then(() => {
        const element: (Element & { data: any }) | null = document.querySelector('#rich-data-table-filter');
        if (element) {
            element.data = data;
            element.addEventListener('change', (e: any) => {
                let filteredData = [...data.data];
                if (e.detail.formData) {
                    for (const entry of e.detail.formData.entries()) {
                        filteredData = filter(filteredData, entry[0], entry[1]);
                    }
                }
                element.data = {
                    data: filteredData,
                    paging: {
                        currentPage: 1,
                        totalItems: filteredData.length,
                    },
                };
            });
            const filter = (data: any[], pathToKey: string, value: string) => {
                if (value === '') {
                    return data;
                } else {
                    return data.filter((element) => {
                        const valueByPath = findValueByPath(element, pathToKey);
                        return valueByPath.includes(value);
                    });
                }
            };
            const findValueByPath = (element: any, pathToKey: string) => {
                const keys = pathToKey.split('.');
                let current = element;
                for (let i = 0; i < keys.length; i++) {
                    if (current[keys[i]] !== undefined) {
                        current = current[keys[i]];
                    } else {
                        return undefined;
                    }
                }
                return current.toString();
            };
        }
    });
};

export default filterRichTableImplementation;
`,X=`export const richDataFilterData = {
    data: [
        {
            id: 0,
            name: 'Wegen',
            manager: {
                firstName: 'Pascal',
                lastName: 'Riquier',
            },
            medewerkers: [
                {
                    firstName: 'Sander',
                    lastName: 'Kleykens',
                },
            ],
        },
        {
            id: 1,
            name: 'Water',
            manager: {
                firstName: 'Siegfried',
                lastName: 'Brusselmans',
            },
            medewerkers: [
                {
                    firstName: 'Guy',
                    lastName: 'Wauters',
                },
            ],
        },
        {
            id: 2,
            name: 'Diversiteit',
            manager: {
                firstName: 'Hendrik',
                lastName: 'Vangenechten',
            },
            medewerkers: [
                {
                    firstName: 'Gunther',
                    lastName: 'Jaegers',
                },
            ],
        },
        {
            id: 3,
            name: 'Voetafdrukmeting',
            manager: {
                firstName: 'Pascal',
                lastName: 'De Smet',
            },
            medewerkers: [
                {
                    firstName: 'Pieter',
                    lastName: 'Beckers',
                },
            ],
        },
        {
            id: 4,
            name: 'Grondwater',
            manager: {
                firstName: 'Julie',
                lastName: 'Meert',
            },
            medewerkers: [
                {
                    firstName: 'Hans',
                    lastName: 'Dhondt',
                },
            ],
        },
        {
            id: 5,
            name: 'Grondwatermeting',
            manager: {
                firstName: 'Julie',
                lastName: 'Meert',
            },
            medewerkers: [
                {
                    firstName: 'Thomas',
                    lastName: 'Kristiaens',
                },
            ],
        },
    ],
};

export default richDataFilterData;
`,Z=`import { VlPagerComponent } from '../../pager';
import richDataFilterPagerData from './vl-rich-data-table-pagination.stories-mock';

export const paginationRichTableImplementation = () => {
    customElements.whenDefined('vl-rich-data-table').then(() => {
        const data = richDataFilterPagerData;
        const richTable: (Element & { data: any }) | null = document.querySelector('#rich-data-table-pagination');
        const pager: (Element & VlPagerComponent) | null = document.querySelector('#pager-for-rich-data-table');
        if (richTable && pager) {
            richTable.addEventListener('change', (e: any & { detail: { data: unknown[] } }) => {
                let newData: string | any[] = data.data;
                let totalItems = data.data.length;
                let filterEntries = undefined;
                if (e.detail.formData) {
                    filterEntries = [];
                    for (const entry of e.detail.formData.entries()) {
                        newData = filter(newData, entry[0], entry[1]);
                        totalItems = newData.length;
                        filterEntries.push({
                            name: entry[0],
                            value: entry[1],
                        });
                    }
                }
                if (e.detail.paging) {
                    newData = page(e.detail.paging.currentPage, pager.itemsPerPage, newData);
                }
                richTable.data = {
                    data: newData,
                    paging: {
                        currentPage: e.detail.paging.currentPage,
                        totalItems: totalItems,
                    },
                    filter: filterEntries,
                };
            });
            const page = (page: number, itemsPerPage: number, data: string | any[]) => {
                const start = (page - 1) * itemsPerPage;
                const end = start + itemsPerPage;
                return data.slice(start, end);
            };
            richTable.data = {
                data: page(1, 10, data.data),
            };
            const filter = (data: any[], pathToKey: any, value: string) => {
                if (value === '') {
                    return data;
                }
                return data.filter((element) => {
                    const valueByPath = findValueByPath(element, pathToKey);
                    return valueByPath.includes(value);
                });
            };
            const findValueByPath = (element: any, pathToKey: string) => {
                const keys = pathToKey.split('.');
                let current = element;
                for (let i = 0; i < keys.length; i++) {
                    if (current[keys[i]] !== undefined) {
                        current = current[keys[i]];
                    } else {
                        return undefined;
                    }
                }
                return current.toString();
            };
        }
    });
};

export default paginationRichTableImplementation;
`,H=`export const richDataFilterPagerData = {
    data: [
        {
            id: 0,
            name: 'Wegen',
            manager: {
                firstName: 'Pascal',
                lastName: 'Riquier',
            },
            medewerkers: [
                {
                    firstName: 'Sander',
                    lastName: 'Kleykens',
                },
            ],
        },
        {
            id: 1,
            name: 'Water',
            manager: {
                firstName: 'Siegfried',
                lastName: 'Brusselmans',
            },
            medewerkers: [
                {
                    firstName: 'Guy',
                    lastName: 'Wauters',
                },
            ],
        },
        {
            id: 2,
            name: 'Diversiteit',
            manager: {
                firstName: 'Hendrik',
                lastName: 'Vangenechten',
            },
            medewerkers: [
                {
                    firstName: 'Gunther',
                    lastName: 'Jaegers',
                },
            ],
        },
        {
            id: 3,
            name: 'Voetafdrukmeting',
            manager: {
                firstName: 'Pascal',
                lastName: 'De Smet',
            },
            medewerkers: [
                {
                    firstName: 'Pieter',
                    lastName: 'Beckers',
                },
            ],
        },
        {
            id: 4,
            name: 'Grondwater',
            manager: {
                firstName: 'Julie',
                lastName: 'Meert',
            },
            medewerkers: [
                {
                    firstName: 'Hans',
                    lastName: 'Dhondt',
                },
            ],
        },
        {
            id: 5,
            name: 'Grondwatermeting',
            manager: {
                firstName: 'Julie',
                lastName: 'Meert',
            },
            medewerkers: [
                {
                    firstName: 'Thomas',
                    lastName: 'Kristiaens',
                },
            ],
        },
        {
            id: 6,
            name: 'Project #7',
            manager: {
                firstName: 'Pascal',
                lastName: 'Riquier',
            },
            medewerkers: [
                {
                    firstName: 'Pieter',
                    lastName: 'Beckers',
                },
            ],
        },
        {
            id: 7,
            name: 'Project #8',
            manager: {
                firstName: 'Pascal',
                lastName: 'Riquier',
            },
            medewerkers: [
                {
                    firstName: 'Pieter',
                    lastName: 'Beckers',
                },
            ],
        },
        {
            id: 8,
            name: 'Project #9',
            manager: {
                firstName: 'Pascal',
                lastName: 'Riquier',
            },
            medewerkers: [
                {
                    firstName: 'Pieter',
                    lastName: 'Beckers',
                },
            ],
        },
        {
            id: 9,
            name: 'Project #10',
            manager: {
                firstName: 'Pascal',
                lastName: 'Riquier',
            },
            medewerkers: [
                {
                    firstName: 'Pieter',
                    lastName: 'Beckers',
                },
            ],
        },
        {
            id: 10,
            name: 'Project #11',
            manager: {
                firstName: 'Pascal',
                lastName: 'Riquier',
            },
            medewerkers: [
                {
                    firstName: 'Pieter',
                    lastName: 'Beckers',
                },
            ],
        },
        {
            id: 11,
            name: 'Project #12',
            manager: {
                firstName: 'Pascal',
                lastName: 'Riquier',
            },
            medewerkers: [
                {
                    firstName: 'Pieter',
                    lastName: 'Beckers',
                },
            ],
        },
        {
            id: 12,
            name: 'Project #13',
            manager: {
                firstName: 'Pascal',
                lastName: 'Riquier',
            },
            medewerkers: [
                {
                    firstName: 'Pieter',
                    lastName: 'Beckers',
                },
            ],
        },
        {
            id: 13,
            name: 'Project #14',
            manager: {
                firstName: 'Pascal',
                lastName: 'Riquier',
            },
            medewerkers: [
                {
                    firstName: 'Pieter',
                    lastName: 'Beckers',
                },
            ],
        },
        {
            id: 14,
            name: 'Project #15',
            manager: {
                firstName: 'Pascal',
                lastName: 'Riquier',
            },
            medewerkers: [
                {
                    firstName: 'Pieter',
                    lastName: 'Beckers',
                },
            ],
        },
        {
            id: 15,
            name: 'Project #16',
            manager: {
                firstName: 'Pascal',
                lastName: 'Riquier',
            },
            medewerkers: [
                {
                    firstName: 'Pieter',
                    lastName: 'Beckers',
                },
            ],
        },
        {
            id: 16,
            name: 'Project #17',
            manager: {
                firstName: 'Pascal',
                lastName: 'Riquier',
            },
            medewerkers: [
                {
                    firstName: 'Pieter',
                    lastName: 'Beckers',
                },
            ],
        },
        {
            id: 17,
            name: 'Project #18',
            manager: {
                firstName: 'Pascal',
                lastName: 'Riquier',
            },
            medewerkers: [
                {
                    firstName: 'Pieter',
                    lastName: 'Beckers',
                },
            ],
        },
        {
            id: 18,
            name: 'Project #19',
            manager: {
                firstName: 'Pascal',
                lastName: 'Riquier',
            },
            medewerkers: [
                {
                    firstName: 'Pieter',
                    lastName: 'Beckers',
                },
            ],
        },
        {
            id: 19,
            name: 'Project #20',
            manager: {
                firstName: 'Pascal',
                lastName: 'Riquier',
            },
            medewerkers: [
                {
                    firstName: 'Pieter',
                    lastName: 'Beckers',
                },
            ],
        },
        {
            id: 20,
            name: 'Project #21',
            manager: {
                firstName: 'Pascal',
                lastName: 'Riquier',
            },
            medewerkers: [
                {
                    firstName: 'Pieter',
                    lastName: 'Beckers',
                },
            ],
        },
        {
            id: 21,
            name: 'Project #22',
            manager: {
                firstName: 'Pascal',
                lastName: 'Riquier',
            },
            medewerkers: [
                {
                    firstName: 'Pieter',
                    lastName: 'Beckers',
                },
            ],
        },
        {
            id: 22,
            name: 'Project #23',
            manager: {
                firstName: 'Pascal',
                lastName: 'Riquier',
            },
            medewerkers: [
                {
                    firstName: 'Pieter',
                    lastName: 'Beckers',
                },
            ],
        },
        {
            id: 23,
            name: 'Project #24',
            manager: {
                firstName: 'Pascal',
                lastName: 'Riquier',
            },
            medewerkers: [
                {
                    firstName: 'Pieter',
                    lastName: 'Beckers',
                },
            ],
        },
        {
            id: 24,
            name: 'Project #25',
            manager: {
                firstName: 'Pascal',
                lastName: 'Riquier',
            },
            medewerkers: [
                {
                    firstName: 'Pieter',
                    lastName: 'Beckers',
                },
            ],
        },
    ],
};

export default richDataFilterPagerData;
`;function D(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...T(),...n.components},{FluxMetaData:d}=e;return d||U("FluxMetaData"),a.jsxs(a.Fragment,{children:[a.jsx(e.h1,{id:"rich-data-table",children:"Rich Data Table"}),`
`,a.jsx(d,{id:"components-block-rich-data-table"}),`
`,a.jsx(e.p,{children:`Een tabel op basis van een dynamische lijst van data die uitgebreid kan worden met functionaliteiten om het consumeren
van data door de gebruiker te verbeteren.`}),`
`,a.jsx(e.p,{children:"De code voorbeelden bij elke story is dezelfde code die gebruikt wordt om de stories te laten werken."}),`
`,a.jsxs(e.ul,{children:[`
`,a.jsxs(e.li,{children:["combineert de functionaliteiten van het ",a.jsx(e.a,{href:"?path=/docs/components-block-rich-data--rich-data-default",children:"rich-data"}),"-component en ",a.jsx(e.a,{href:"?path=/docs/elements-data-table--data-table-default",children:"data-table"}),"-component."]}),`
`,a.jsxs(e.li,{children:["om de velden te configureren kan je gebruik maken van ",a.jsx(e.code,{children:"rich-data-field"})]}),`
`]}),`
`,a.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-js",children:`import { RichDataTableComponent } from '@domg-wc/components/block';
`})}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-html",children:`<vl-rich-data-table>
    <vl-rich-data-field name="id" label="ID" selector="id"></vl-rich-data-field>
    <vl-rich-data-field name="name" label="Naam" selector="name"></vl-rich-data-field>
</vl-rich-data-table>
`})}),`
`,a.jsx(e.h2,{id:"default",children:"Default"}),`
`,a.jsx(k,{of:h}),`
`,a.jsx(e.h2,{id:"data-instellen",children:"Data instellen"}),`
`,a.jsxs(e.p,{children:["Om table ",a.jsx(e.code,{children:"data"})," in te stellen / bij te werken:"]}),`
`,a.jsx(e.p,{children:"Werk je met statische data (die client side niet gaan wijzigen), dan kan je de data meegeven als string attribuut:"}),`
`,a.jsxs(e.ul,{children:[`
`,a.jsx(e.li,{children:"als je data wil meegeven als attribuut doe je dit in stringified JSON formaat, bv.:"}),`
`]}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-js",children:`'{"data": [{ "id" : 0, "name" : "Project #1" }, { "id" : 1, "name" : "Project #2"}]}';
`})}),`
`,a.jsx(e.p,{children:"Wil je client-side mogelijkheden aanbieden om te filteren / pagineren, is het belangrijk dat de data dynamisch zelf update:"}),`
`,a.jsxs(e.ul,{children:[`
`,a.jsxs(e.li,{children:["voor filtering & paginatie (zie ook code voorbeelden verder) moet je ",a.jsx(e.code,{children:".data"})," dynamisch bijwerken"]}),`
`,a.jsxs(e.li,{children:["refereer ",a.jsx(e.code,{children:"rich-data-table"})," en stel in: ",a.jsx(e.code,{children:"richDataTable.data = ..."})]}),`
`,a.jsx(e.li,{children:"geef data door als JavaScript object, bv.:"}),`
`]}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-json",children:`{
    "data": [
        { "id": 0, "name": "Water", "owner": "Kevin Jansens" },
        { "id": 1, "name": "Vuur", "owner": "Anton Vanherrewege" },
        { "id": 2, "name": "Aarde", "owner": "Hedwig Jansens" }
    ]
}
`})}),`
`,a.jsx(e.h2,{id:"sorting",children:"Sorting"}),`
`,a.jsx(e.p,{children:"Om sorting te laten werken moet je zelf een sorting algoritme implementeren:"}),`
`,a.jsxs("details",{children:[a.jsx("summary",{children:"code voorbeeld hoe sorting toe te passen"}),a.jsx(N,{code:L,language:"ts",dark:!0})]}),`
`,a.jsxs(e.p,{children:["Een template voorbeeld vind je hieronder. Klik ",a.jsx(e.code,{children:"Show code"})," de html te zien."]}),`
`,a.jsx(e.p,{children:"Belangrijk:"}),`
`,a.jsxs(e.ul,{children:[`
`,a.jsxs(e.li,{children:[a.jsx(e.code,{children:"sortable"})," toevoegen op de ",a.jsx(e.code,{children:"vl-rich-data-field"}),"-velden waarop gesorteerd moet worden"]}),`
`,a.jsxs(e.li,{children:["om de data te sorteren kan je gebruik maken van ",a.jsx(e.code,{children:"rich-data-sorter"})]}),`
`]}),`
`,a.jsx(k,{of:p,layout:"padded"}),`
`,a.jsx(e.h2,{id:"filter",children:"Filter"}),`
`,a.jsxs(e.p,{children:["Om filtering te laten werken, adviseren we ",a.jsx(e.code,{children:"vl-search-filter"}),` te implementeren.
Meer info over `,a.jsx(e.code,{children:"vl-search-filter"})," ",a.jsx(e.a,{href:"?path=/docs/elements-search-filter--search-filter-default",children:"hier"}),"."]}),`
`,a.jsx(e.p,{children:"Daarnaast moet je ook de filtering & change detection zelf implementeren."}),`
`,a.jsxs("details",{children:[a.jsx("summary",{children:"gebruikte mock data in onderstaande voorbeeld"}),a.jsx(N,{code:X,language:"ts",dark:!0})]}),`
`,a.jsxs("details",{children:[a.jsx("summary",{children:"code voorbeeld hoe filtering toe te passen"}),a.jsx(N,{code:G,language:"ts",dark:!0})]}),`
`,a.jsxs(e.p,{children:["Template voorbeeld vind je hieronder. Klik ",a.jsx(e.code,{children:"Show code"})," de html te zien."]}),`
`,a.jsx(k,{of:g,layout:"padded"}),`
`,a.jsx(e.h2,{id:"paginatie",children:"Paginatie"}),`
`,a.jsxs(e.p,{children:["Om paginatie te laten werken, moet je ",a.jsx(e.code,{children:"vl-pager"}),` implementeren. Zie HTML code sample.
Meer info over `,a.jsx(e.code,{children:"vl-pager"})," ",a.jsx(e.a,{href:"?path=/docs/components-block-pager--pager-default",children:"hier"}),"."]}),`
`,a.jsxs(e.p,{children:["Daarnaast moet je specifieke logica schrijven gerelateerd tot de paginatie om ",a.jsx(e.code,{children:"vl-pager"}),` te laten werken.
In onderstaande code kan je zien op welke manier je filtering & paginatie kan combineren.`]}),`
`,a.jsxs("details",{children:[a.jsx("summary",{children:"gebruikte mock data in onderstaande voorbeeld"}),a.jsx(N,{code:H,language:"ts",dark:!0})]}),`
`,a.jsxs("details",{children:[a.jsx("summary",{children:"code voorbeeld hoe paginatie toe te passen"}),a.jsx(N,{code:Z,language:"ts",dark:!0})]}),`
`,a.jsxs(e.p,{children:["Template voorbeeld vind je hieronder. Klik ",a.jsx(e.code,{children:"Show code"})," de html te zien."]}),`
`,a.jsx(e.h3,{id:"instellen-van-vlpager-component",children:"Instellen van VlPager component"}),`
`,a.jsxs(e.ul,{children:[`
`,a.jsxs(e.li,{children:["op de ",a.jsx(e.code,{children:"vl-pager"})," component kan je naar keuze:",`
`,a.jsxs(e.ul,{children:[`
`,a.jsxs(e.li,{children:["de begin pagina instellen (",a.jsx(e.code,{children:"current-page"}),", in vb. hieronder op ",a.jsx(e.code,{children:"1"}),")"]}),`
`,a.jsxs(e.li,{children:["het aantal records per pagina instellen (",a.jsx(e.code,{children:"items-per-page"}),", in vb. hieronder op ",a.jsx(e.code,{children:"10"}),")"]}),`
`]}),`
`]}),`
`,a.jsxs(e.li,{children:["het is echter belangrijk dat ",a.jsx(e.code,{children:"total-items"}),` dynamisch update met het aantal records naargelang de huidige staat van je
data`]}),`
`]}),`
`,a.jsx(k,{of:u,layout:"padded"}),`
`,a.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,a.jsx(S,{of:h}),`
`,a.jsx(e.h2,{id:"referenties",children:"Referenties"}),`
`,a.jsx(e.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,a.jsx(e.p,{children:`Digitaal Vlaanderen bied geen component aan voor de Rich Data Table maar wel beperkte functionaliteit voor de Data
table. Die nemen we over, daarnaast volgen we ook de styling van de Data Table.`}),`
`,a.jsx(e.p,{children:a.jsx(e.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-data-table",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Rich Data Table"})}),`
`,a.jsx(e.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,a.jsxs(e.p,{children:[a.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlRichDataTable.html",rel:"nofollow",children:"Legacy Documentatie - Rich Data Table"}),`
`,a.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-rich-data-table.html",rel:"nofollow",children:"Legacy Demo - Rich Data Table"})]})]})}function _(n={}){const{wrapper:e}={...T(),...n.components};return e?a.jsx(e,{...n,children:a.jsx(D,{...n})}):D(n)}function U(n,e){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}B([$,V,M,E,q,z,I]);const ie={id:"components-block-rich-data-table",title:"Components - Block/rich-data-table",tags:["autodocs"],args:f,argTypes:W,parameters:{docs:{page:_},layout:"fullscreen"}},Y=j(f,({collapsedM:n,collapsedS:e,collapsedXS:d,zebra:i,fluxZebra:l})=>P`
        <vl-rich-data-table
            data="${'{"data": [{ "id" : 0, "name" : "Project #1" , "owner" : "Jan Jansens" }, { "id" : 1, "name" : "Project #2" , "owner" : "Marie Vermeersch" }]}'}"
            ?collapsed-m=${n}
            ?collapsed-s=${e}
            ?collapsed-xs=${d}
            ?zebra=${i}
            ?flux-zebra=${l}
        >
            <vl-rich-data-field name="id" label="ID" selector="id"></vl-rich-data-field>
            <vl-rich-data-field name="name" label="Naam" selector="name"></vl-rich-data-field>
            <vl-rich-data-field name="owner" selector="owner">
                <template slot="label">
                    <span>Eigenaar</span>
                </template>
            </vl-rich-data-field>
        </vl-rich-data-table>
    `),h=Y.bind({});h.storyName="vl-rich-data-table - default";h.args={collapsedM:!1,collapsedS:!1,collapsedXS:!1};const Q=j(f,({collapsedM:n,collapsedS:e,collapsedXS:d,zebra:i,fluxZebra:l})=>{const s='{"data": [{ "id" : 0, "name" : "Water" , "owner" : "Kevin Jansens" }, { "id" : 1, "name" : "Vuur" , "owner" : "Anton Vanherrewege" }, { "id" : 2, "name" : "Aarde" , "owner" : "Hedwig Jansens" }]}';return K(),P`
        <vl-rich-data-table
            id="rich-data-table-sorting"
            data="${s}"
            ?collapsed-m=${n}
            ?collapsed-s=${e}
            ?collapsed-xs=${d}
            ?zebra=${i}
            ?flux-zebra=${l}
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
    `}),p=Q.bind({});p.storyName="vl-rich-data-table - sorting";p.args={collapsedM:!1,collapsedS:!1,collapsedXS:!1};const ee=j(f,({collapsedM:n,collapsedS:e,collapsedXS:d,filterClosable:i,filterClosed:l,filterMaxWidth:s,zebra:t,fluxZebra:r})=>(F(),P`
            <vl-rich-data-table
                id="rich-data-table-filter"
                ?collapsed-m=${n}
                ?collapsed-s=${e}
                ?collapsed-xs=${d}
                ?filter-closable=${i}
                ?filter-closed=${l}
                filter-max-width=${s}
                ?zebra=${t}
                ?flux-zebra=${r}
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
        `)),g=ee.bind({});g.storyName="vl-rich-data-table - filter";g.args={filterClosable:!0};const ae=j(f,({collapsedM:n,collapsedS:e,collapsedXS:d,filterClosable:i,filterClosed:l,filterMaxWidth:s,zebra:t,fluxZebra:r})=>(J(),P`
            <vl-rich-data-table
                id="rich-data-table-pagination"
                ?collapsed-m=${n}
                ?collapsed-s=${e}
                ?collapsed-xs=${d}
                ?filter-closable=${i}
                ?filter-closed=${l}
                filter-max-width=${s}
                ?zebra=${t}
                ?flux-zebra=${r}
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
                    total-items=${R.data.length}
                    items-per-page="10"
                    current-page="1"
                ></vl-pager>
            </vl-rich-data-table>
        `)),u=ae.bind({});u.storyName="vl-rich-data-table - filter and pagination";u.args={filterClosable:!0,filterClosed:!0};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`story(richDataTableArgs, ({
  collapsedM,
  collapsedS,
  collapsedXS,
  zebra,
  fluxZebra
}) => {
  const data = '{"data": [{ "id" : 0, "name" : "Project #1" , "owner" : "Jan Jansens" }, { "id" : 1, "name" : "Project #2" , "owner" : "Marie Vermeersch" }]}';
  return html\`
        <vl-rich-data-table
            data="\${data}"
            ?collapsed-m=\${collapsedM}
            ?collapsed-s=\${collapsedS}
            ?collapsed-xs=\${collapsedXS}
            ?zebra=\${zebra}
            ?flux-zebra=\${fluxZebra}
        >
            <vl-rich-data-field name="id" label="ID" selector="id"></vl-rich-data-field>
            <vl-rich-data-field name="name" label="Naam" selector="name"></vl-rich-data-field>
            <vl-rich-data-field name="owner" selector="owner">
                <template slot="label">
                    <span>Eigenaar</span>
                </template>
            </vl-rich-data-field>
        </vl-rich-data-table>
    \`;
})`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`story(richDataTableArgs, ({
  collapsedM,
  collapsedS,
  collapsedXS,
  zebra,
  fluxZebra
}) => {
  const data = '{"data": [{ "id" : 0, "name" : "Water" , "owner" : "Kevin Jansens" }, { "id" : 1, "name" : "Vuur" , "owner" : "Anton Vanherrewege" }, { "id" : 2, "name" : "Aarde" , "owner" : "Hedwig Jansens" }]}';
  sortingRichTableImplementation();
  return html\`
        <vl-rich-data-table
            id="rich-data-table-sorting"
            data="\${data}"
            ?collapsed-m=\${collapsedM}
            ?collapsed-s=\${collapsedS}
            ?collapsed-xs=\${collapsedXS}
            ?zebra=\${zebra}
            ?flux-zebra=\${fluxZebra}
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
    \`;
})`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`story(richDataTableArgs, ({
  collapsedM,
  collapsedS,
  collapsedXS,
  filterClosable,
  filterClosed,
  filterMaxWidth,
  zebra,
  fluxZebra
}) => {
  filterRichTableImplementation();
  return html\`
            <vl-rich-data-table
                id="rich-data-table-filter"
                ?collapsed-m=\${collapsedM}
                ?collapsed-s=\${collapsedS}
                ?collapsed-xs=\${collapsedXS}
                ?filter-closable=\${filterClosable}
                ?filter-closed=\${filterClosed}
                filter-max-width=\${filterMaxWidth}
                ?zebra=\${zebra}
                ?flux-zebra=\${fluxZebra}
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
        \`;
})`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`story(richDataTableArgs, ({
  collapsedM,
  collapsedS,
  collapsedXS,
  filterClosable,
  filterClosed,
  filterMaxWidth,
  zebra,
  fluxZebra
}) => {
  paginationRichTableImplementation();
  return html\`
            <vl-rich-data-table
                id="rich-data-table-pagination"
                ?collapsed-m=\${collapsedM}
                ?collapsed-s=\${collapsedS}
                ?collapsed-xs=\${collapsedXS}
                ?filter-closable=\${filterClosable}
                ?filter-closed=\${filterClosed}
                filter-max-width=\${filterMaxWidth}
                ?zebra=\${zebra}
                ?flux-zebra=\${fluxZebra}
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
                    total-items=\${richDataFilterPagerData.data.length}
                    items-per-page="10"
                    current-page="1"
                ></vl-pager>
            </vl-rich-data-table>
        \`;
})`,...u.parameters?.docs?.source}}};const se=["RichDataTableDefault","RichDataTableSorting","RichDataTableFilter","RichDataTableFilterAndPagination"];export{h as RichDataTableDefault,g as RichDataTableFilter,u as RichDataTableFilterAndPagination,p as RichDataTableSorting,se as __namedExportsOrder,ie as default};
