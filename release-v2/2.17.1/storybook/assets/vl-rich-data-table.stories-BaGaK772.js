import{cZ as z,_ as g,Z as v,u as A,j as a,C as P,S as w,b8 as V,s as D,x as T,r as I,c_ as q,c3 as O,Q as F,d as L,b as H,V as J,R as G}from"./iframe-DynOw9qF.js";import{V as K}from"./vl-checkbox.component-BFWyhwF-.js";import"./vl-datepicker.component-CDbT1ywF.js";import"./vl-fieldset.component-Cn1m5Esg.js";import"./vl-input-field-masked.component-DdXfAdAC.js";import"./vl-radio.component-V9fz9CTI.js";import"./vl-radio-group.component-CiIaRUE-.js";import{V as W}from"./vl-select.component-DladKYQf.js";import"./vl-select-rich.component-CaoTbphr.js";import"./vl-textarea.component-DgY8k7Uy.js";import"./vl-textarea-rich.component-CdstHoUA.js";import"./vl-upload.component-CxW_ou6b.js";import{r as Z,a as X}from"./vl-rich-data.stories-arg-BHNM_17S.js";import"./preload-helper-D9Z9MdNV.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-upload-progress.component--K8eu_mT.js";const U={data:[{id:0,name:"Wegen",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Sander",lastName:"Kleykens"}]},{id:1,name:"Water",manager:{firstName:"Siegfried",lastName:"Brusselmans"},medewerkers:[{firstName:"Guy",lastName:"Wauters"}]},{id:2,name:"Diversiteit",manager:{firstName:"Hendrik",lastName:"Vangenechten"},medewerkers:[{firstName:"Gunther",lastName:"Jaegers"}]},{id:3,name:"Voetafdrukmeting",manager:{firstName:"Pascal",lastName:"De Smet"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:4,name:"Grondwater",manager:{firstName:"Julie",lastName:"Meert"},medewerkers:[{firstName:"Hans",lastName:"Dhondt"}]},{id:5,name:"Grondwatermeting",manager:{firstName:"Julie",lastName:"Meert"},medewerkers:[{firstName:"Thomas",lastName:"Kristiaens"}]}]},B=U,_=()=>{customElements.whenDefined("vl-rich-data-table").then(()=>{const t=document.querySelector("#rich-data-table-filter");if(t){t.data=B,t.addEventListener("change",r=>{let i=[...B.data];if(r.detail.formData)for(const s of r.detail.formData.entries())i=e(i,s[0],s[1]);t.data={data:i,paging:{currentPage:1,totalItems:i.length}}});const e=(r,i,s)=>s===""?r:r.filter(n=>c(n,i).includes(s)),c=(r,i)=>{const s=i.split(".");let n=r;for(let l=0;l<s.length;l++)if(n[s[l]]!==void 0)n=n[s[l]];else return;return n.toString()}}})},M={data:[{id:0,name:"Wegen",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Sander",lastName:"Kleykens"}]},{id:1,name:"Water",manager:{firstName:"Siegfried",lastName:"Brusselmans"},medewerkers:[{firstName:"Guy",lastName:"Wauters"}]},{id:2,name:"Diversiteit",manager:{firstName:"Hendrik",lastName:"Vangenechten"},medewerkers:[{firstName:"Gunther",lastName:"Jaegers"}]},{id:3,name:"Voetafdrukmeting",manager:{firstName:"Pascal",lastName:"De Smet"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:4,name:"Grondwater",manager:{firstName:"Julie",lastName:"Meert"},medewerkers:[{firstName:"Hans",lastName:"Dhondt"}]},{id:5,name:"Grondwatermeting",manager:{firstName:"Julie",lastName:"Meert"},medewerkers:[{firstName:"Thomas",lastName:"Kristiaens"}]},{id:6,name:"Project #7",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:7,name:"Project #8",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:8,name:"Project #9",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:9,name:"Project #10",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:10,name:"Project #11",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:11,name:"Project #12",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:12,name:"Project #13",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:13,name:"Project #14",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:14,name:"Project #15",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:15,name:"Project #16",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:16,name:"Project #17",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:17,name:"Project #18",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:18,name:"Project #19",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:19,name:"Project #20",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:20,name:"Project #21",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:21,name:"Project #22",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:22,name:"Project #23",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:23,name:"Project #24",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:24,name:"Project #25",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]}]},Q=()=>{customElements.whenDefined("vl-rich-data-table").then(()=>{const t=M,e=document.querySelector("#rich-data-table-pagination"),c=document.querySelector("#pager-for-rich-data-table");if(e&&c){e.addEventListener("change",n=>{let l=t.data,o=t.data.length,d;if(n.detail.formData){d=[];for(const f of n.detail.formData.entries())l=i(l,f[0],f[1]),o=l.length,d.push({name:f[0],value:f[1]})}n.detail.paging&&(l=r(n.detail.paging.currentPage,c.itemsPerPage,l)),e.data={data:l,paging:{currentPage:n.detail.paging.currentPage,totalItems:o},filter:d}});const r=(n,l,o)=>{const d=(n-1)*l,f=d+l;return o.slice(d,f)};e.data={data:r(1,10,t.data)};const i=(n,l,o)=>o===""?n:n.filter(d=>s(d,l).includes(o)),s=(n,l)=>{const o=l.split(".");let d=n;for(let f=0;f<o.length;f++)if(d[o[f]]!==void 0)d=d[o[f]];else return;return d.toString()}}})},Y=()=>{const t=document.createElement("vl-checkbox");t.setAttribute("label","Selecteer alles");const e=()=>t.shadowRoot.querySelector("input"),c=()=>document.querySelector("#rich-data-table-selectable"),r=()=>c()?.data.data||[],i=()=>{const m=r(),p=m.length>0&&m.every(h=>h.selected),b=m.every(h=>!h.selected);t.toggleAttribute("indeterminate",!p&&!b),t.toggleAttribute("checked",p)},s=m=>{t.removeAttribute("indeterminate");const p=c();if(!p)return;const b=r();p.data={...p.data,data:[...b.map(h=>({...h,selected:m}))]}},n=m=>{const{detail:{checked:p}}=m;s(p)},l=()=>r().filter(m=>m.selected);return{checkActions:()=>{const p=l().length,b=p>0;document.querySelector("#default-actions")?.toggleAttribute("hidden",b),document.querySelector("#selection-actions")?.toggleAttribute("hidden",!b);const h=document.querySelector("#remove-selection"),S=document.querySelector("#selection-status");if(h&&S){const $=`${p} item${p!==1?"s":""} geselecteerd`;S.innerText=$,h.innerText=$;return}if(!b&&t){e()?.focus();return}},headerTemplate:()=>{const m=document.createElement("td"),p=document.createElement("span");return p.setAttribute("class","vl-visually-hidden"),p.innerText="Maak selectie",m.innerHTML=`<style>${z}</style>`,m.appendChild(p),m.appendChild(t),requestAnimationFrame(()=>{t.addEventListener("vl-input",n),i()}),m},dataFieldRenderer:(m,{selected:p,name:b})=>{const h=document.createElement("vl-checkbox");h.setAttribute("label",`Selecteer ${b}`),h.toggleAttribute("checked",p),h.addEventListener("vl-change",S=>{const{detail:{checked:$}}=S,R=r().find(({name:E})=>E===b);R&&(R.selected=$),i()}),m.appendChild(h)},applySelectionToAllRows:s}},ee=()=>{const t=e=>{const c=[...e.data.data];return r=>{const{sorting:i}=r.detail,s=r.target;i?s.data={data:[...c].sort((n,l)=>{for(let o=0;o<i.length;o++){const d=i[o],f=n[d.name],m=l[d.name],p=d.direction==="asc";if(f<m)return p?-1:1;if(f>m)return p?1:-1}return 0}),sorting:i}:s.data=c}};customElements.whenDefined("vl-rich-data-table").then(()=>{const e=document.querySelector("#rich-data-table-sorting");e&&e.addEventListener("change",t(e))})},u={...X,collapsedM:!1,collapsedS:!1,collapsedXS:!1,zebra:!1,fluxZebra:!1,multiSort:!1,label:"",caption:""},ae={...Z,collapsedM:{name:"collapsed-m",description:"Vanaf medium schermgrootte, cellen per rij onder elkaar ipv naast elkaar",table:{category:v.ATTRIBUTES,type:{summary:g.BOOLEAN},defaultValue:{summary:String(u.collapsedM)}}},collapsedS:{name:"collapsed-s",description:"Vanaf een small schermgrootte, cellen per rij onder elkaar ipv naast elkaar",table:{category:v.ATTRIBUTES,type:{summary:g.BOOLEAN},defaultValue:{summary:String(u.collapsedS)}}},collapsedXS:{name:"collapsed-xs",description:"Vanaf een extra small schermgrootte, cellen per rij onder elkaar ipv naast elkaar",table:{category:v.ATTRIBUTES,type:{summary:g.BOOLEAN},defaultValue:{summary:String(u.collapsedXS)}}},zebra:{name:"zebra",description:"Variant waarin de rijen afwisselend een andere achtergrondkleur krijgen. Dit maakt de tabel makkelijker leesbaar. Deze zebra werkt niet voor tabellen met detail rijen, gebruik hiervoor flux-zebra.",table:{category:v.ATTRIBUTES,type:{summary:g.BOOLEAN},defaultValue:{summary:String(u.zebra)}}},fluxZebra:{name:"flux-zebra",description:"Variant waarin de rijen afwisselend een andere achtergrondkleur krijgen. Dit maakt de tabel makkelijker leesbaar. Deze zebra werkt voor tabellen met en zonder detail rijen.",table:{category:v.ATTRIBUTES,type:{summary:g.BOOLEAN},defaultValue:{summary:String(u.fluxZebra)}}},multiSort:{name:"multi-sort",description:"Maakt het mogelijk om op meerdere kolommen te sorteren.",table:{category:v.ATTRIBUTES,type:{summary:g.BOOLEAN},defaultValue:{summary:String(u.multiSort)}}},label:{name:"label",description:"Wordt gebruikt als aria-label voor de tabel. Optioneel indien er een caption gedefinieerd is. Voor screenreaders heeft label voorrang op caption als beide aanwezig zijn, maar het is aanbevolen om caption te gebruiken als er een zichtbare titel voor de tabel gewenst is.",table:{category:v.ATTRIBUTES,type:{summary:g.STRING},defaultValue:{summary:u.label}}},caption:{name:"caption",description:"Caption van de tabel. Optioneel indien er een label gedefinieerd is.",table:{category:v.ATTRIBUTES,type:{summary:g.STRING},defaultValue:{summary:""}}}},te=`export const sortingRichTableImplementation = () => {
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
`,ne=`import richDataFilterData from './vl-rich-data-table-filter.stories-mock';

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
`,le=`export const richDataFilterData = {
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
`,re=`import { VlPagerComponent } from '../../pager';
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
`,ie=`export const richDataFilterPagerData = {
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
`,se=`import { VlButtonComponent } from "@domg-wc/components/atom";
import { VlCheckboxComponent } from "@domg-wc/components/form";
import { vlAccessibilityStyles } from "@domg-wc/styles";
import { VlRichDataTable } from "../vl-rich-data-table.component";

type MyDataItem = { selected: boolean; name: string; extension: string; filesize: string };
type MyData = MyDataItem[];

type SelectableRichTableImplementation = {
    checkActions: () => void,
    headerTemplate: () => HTMLTableCellElement,
    dataFieldRenderer: (td: HTMLTableCellElement, { selected, name }: MyDataItem) => void,
    applySelectionToAllRows: (selected: boolean) => void,
}

export const selectableRichTableImplementation = (): SelectableRichTableImplementation => {
    const headerCheckbox: VlCheckboxComponent = document.createElement('vl-checkbox');
    headerCheckbox.setAttribute('label', 'Selecteer alles');

    const getHeaderCheckboxInput = (): HTMLInputElement =>
        headerCheckbox.shadowRoot!.querySelector<HTMLInputElement>('input')!;

    const getTable = (): VlRichDataTable | null =>
        document.querySelector<VlRichDataTable>('#rich-data-table-selectable');

    const getTableData = (): MyData => {
        return (getTable()?.data.data || []) as MyData;
    };

    const syncHeaderCheckbox = (): void => {
        const tableData = getTableData();
        const allSelected = tableData.length > 0 && tableData.every((item) => item.selected);
        const noneSelected = tableData.every((item) => !item.selected);

        headerCheckbox.toggleAttribute('indeterminate', !allSelected && !noneSelected);
        headerCheckbox.toggleAttribute('checked', allSelected);
    };

    const applySelectionToAllRows = (selected: boolean): void => {
        headerCheckbox.removeAttribute('indeterminate');
        const table = getTable();
        if (!table) return;
        const tableData = getTableData();
        table.data = { ...table.data, data: [...tableData.map((item) => ({ ...item, selected }))] };
    };

    const handleSelectAllToggle = (e: Event): void => {
        const {
            detail: { checked },
        } = e as CustomEvent<{ checked: boolean }>;
        applySelectionToAllRows(checked);
    };

    const getSelection = (): MyData => getTableData().filter((item) => item.selected);

    const checkActions = (): void => {
        const selection = getSelection();
        const selectionCount = selection.length;
        const hasSelection = selectionCount > 0;

        document.querySelector('#default-actions')?.toggleAttribute('hidden', hasSelection);
        document.querySelector('#selection-actions')?.toggleAttribute('hidden', !hasSelection);

        const removeSelectionButton = document.querySelector<VlButtonComponent>('#remove-selection');
        const selectionStatus = document.querySelector<VlButtonComponent>('#selection-status');

        if (removeSelectionButton && selectionStatus) {
            const selectionText = \`\${selectionCount} item\${selectionCount !== 1 ? 's' : ''} geselecteerd\`;
            selectionStatus.innerText = selectionText;
            removeSelectionButton.innerText = selectionText;
            return;
        }

        if (!hasSelection && headerCheckbox) {
            getHeaderCheckboxInput()?.focus();
            return;
        }
    };

    const dataFieldRenderer = (td: HTMLTableCellElement, { selected, name: rowName }: MyDataItem): void => {
        const checkbox: VlCheckboxComponent = document.createElement('vl-checkbox');
        checkbox.setAttribute('label', \`Selecteer \${rowName}\`);
        checkbox.toggleAttribute('checked', selected);
        checkbox.addEventListener('vl-change', (e) => {
            const {
                detail: { checked },
            } = e as CustomEvent<{ checked: boolean }>;

            const tableData = getTableData();
            const rowData = tableData.find(({ name }) => name === rowName);
            if (rowData) rowData.selected = checked;

            syncHeaderCheckbox();
        });
        td.appendChild(checkbox);
    };

    const headerTemplate = (): HTMLTableCellElement => {
        const td: HTMLTableCellElement = document.createElement('td');
        const headerLabel = document.createElement('span');
        headerLabel.setAttribute('class', 'vl-visually-hidden');
        headerLabel.innerText = 'Maak selectie';
        td.innerHTML = \`<style>\${vlAccessibilityStyles}</style>\`;
        td.appendChild(headerLabel);
        td.appendChild(headerCheckbox);
        requestAnimationFrame(() => {
            headerCheckbox.addEventListener('vl-input', handleSelectAllToggle);
            syncHeaderCheckbox();
        });
        return td;
    };

    return {
        checkActions,
        headerTemplate,
        dataFieldRenderer,
        applySelectionToAllRows,
    }
};

export default selectableRichTableImplementation;
`;function C(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...A(),...t.components},{FluxComponentMetaData:c}=e;return c||de("FluxComponentMetaData"),a.jsxs(a.Fragment,{children:[a.jsx(e.h1,{id:"rich-data-table",children:"Rich Data Table"}),`
`,a.jsx(c,{id:"components-block-rich-data-table"}),`
`,a.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,a.jsx(e.p,{children:`Een tabel op basis van een dynamische lijst van data die uitgebreid kan worden met functionaliteiten om het consumeren
van data door de gebruiker te verbeteren.`}),`
`,a.jsx(e.p,{children:"De code voorbeelden bij elke story zijn dezelfde code die gebruikt wordt om de stories te laten werken."}),`
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
`,a.jsx(P,{of:N}),`
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
`,a.jsxs("details",{children:[a.jsx("summary",{children:"Code voorbeeld hoe sorting toe te passen"}),a.jsx(w,{code:te,language:"ts",dark:!0})]}),`
`,a.jsxs(e.p,{children:["Een template voorbeeld vind je hieronder. Klik op ",a.jsx(e.code,{children:"Show code"})," om de html te zien."]}),`
`,a.jsx(e.p,{children:"Belangrijk:"}),`
`,a.jsxs(e.ul,{children:[`
`,a.jsxs(e.li,{children:[a.jsx(e.code,{children:"sortable"})," toevoegen op de ",a.jsx(e.code,{children:"vl-rich-data-field"}),"-velden waarop gesorteerd moet worden"]}),`
`,a.jsxs(e.li,{children:["om de data te sorteren kan je gebruik maken van ",a.jsx(e.code,{children:"rich-data-sorter"})]}),`
`]}),`
`,a.jsx(P,{of:k,layout:"padded"}),`
`,a.jsx(e.h2,{id:"filter",children:"Filter"}),`
`,a.jsxs(e.p,{children:["Om filtering te laten werken, adviseren we ",a.jsx(e.code,{children:"vl-search-filter"}),` te implementeren.
Meer info over `,a.jsx(e.code,{children:"vl-search-filter"})," ",a.jsx(e.a,{href:"?path=/docs/elements-search-filter--search-filter-default",children:"hier"}),"."]}),`
`,a.jsx(e.p,{children:"Daarnaast moet je ook de filtering & change detection zelf implementeren."}),`
`,a.jsxs("details",{children:[a.jsx("summary",{children:"Gebruikte mock data in onderstaande voorbeeld"}),a.jsx(w,{code:le,language:"ts",dark:!0})]}),`
`,a.jsxs("details",{children:[a.jsx("summary",{children:"Code voorbeeld hoe filtering toe te passen"}),a.jsx(w,{code:ne,language:"ts",dark:!0})]}),`
`,a.jsxs(e.p,{children:["Template voorbeeld vind je hieronder. Klik op ",a.jsx(e.code,{children:"Show code"})," om de html te zien."]}),`
`,a.jsx(P,{of:y,layout:"padded"}),`
`,a.jsx(e.h2,{id:"paginatie",children:"Paginatie"}),`
`,a.jsxs(e.p,{children:["Om paginatie te laten werken, moet je ",a.jsx(e.code,{children:"vl-pager"}),` implementeren. Zie HTML code sample.
Meer info over `,a.jsx(e.code,{children:"vl-pager"})," ",a.jsx(e.a,{href:"?path=/docs/components-block-pager--pager-default",children:"hier"}),"."]}),`
`,a.jsxs(e.p,{children:["Daarnaast moet je specifieke logica schrijven gerelateerd tot de paginatie om ",a.jsx(e.code,{children:"vl-pager"}),` te laten werken.
In onderstaande code kan je zien op welke manier je filtering & paginatie kan combineren.`]}),`
`,a.jsxs("details",{children:[a.jsx("summary",{children:"Gebruikte mock data in onderstaande voorbeeld"}),a.jsx(w,{code:ie,language:"ts",dark:!0})]}),`
`,a.jsxs("details",{children:[a.jsx("summary",{children:"Code voorbeeld hoe paginatie toe te passen"}),a.jsx(w,{code:re,language:"ts",dark:!0})]}),`
`,a.jsxs(e.p,{children:["Template voorbeeld vind je hieronder. Klik op ",a.jsx(e.code,{children:"Show code"})," om de html te zien."]}),`
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
`,a.jsx(P,{of:x,layout:"padded"}),`
`,a.jsx(e.h2,{id:"selecteerbare-rijen",children:"Selecteerbare rijen"}),`
`,a.jsx(e.p,{children:"Hieronder vind je een voorbeeld van hoe je rijen selecteerbaar kan maken, met een custom header voor de selectie acties."}),`
`,a.jsxs("details",{children:[a.jsx("summary",{children:"Code voorbeeld van een implementatie met selecteerbare rijen"}),a.jsx(w,{code:se,language:"ts",dark:!0})]}),`
`,a.jsxs(e.p,{children:["Template voorbeeld van een implementatie met selecteerbare rijen. Klik op ",a.jsx(e.code,{children:"Show code"})," om de html te zien."]}),`
`,a.jsx(P,{of:j,layout:"padded"}),`
`,a.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,a.jsx(V,{of:N}),`
`,a.jsx(e.h2,{id:"referenties",children:"Referenties"}),`
`,a.jsx(e.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,a.jsx(e.p,{children:`Digitaal Vlaanderen biedt geen component aan voor de Rich Data Table maar wel beperkte functionaliteit voor de Data
table. Die nemen we over, daarnaast volgen we ook de styling van de Data Table.`}),`
`,a.jsx(e.p,{children:a.jsx(e.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/componenten/data-table",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Rich Data Table"})})]})}function oe(t={}){const{wrapper:e}={...A(),...t.components};return e?a.jsx(e,{...t,children:a.jsx(C,{...t})}):C(t)}function de(t,e){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}I([q,O,F,L,H,J,W,K,G]);const Ce={id:"components-block-rich-data-table",title:"Components - Block/rich-data-table",tags:["autodocs"],args:u,argTypes:ae,parameters:{docs:{page:oe}}},ce=D(u,({collapsedM:t,collapsedS:e,collapsedXS:c,zebra:r,fluxZebra:i,label:s,caption:n})=>T`
            <vl-rich-data-table
                data="${'{"data": [{ "id" : 0, "name" : "Project #1" , "owner" : "Jan Jansens" }, { "id" : 1, "name" : "Project #2" , "owner" : "Marie Vermeersch" }]}'}"
                ?collapsed-m=${t}
                ?collapsed-s=${e}
                ?collapsed-xs=${c}
                ?zebra=${r}
                ?flux-zebra=${i}
                label=${s}
                caption=${n}
            >
                <vl-rich-data-field name="id" label="ID" selector="id"></vl-rich-data-field>
                <vl-rich-data-field name="name" label="Naam" selector="name"></vl-rich-data-field>
                <vl-rich-data-field name="owner" selector="owner">
                    <template slot="label">
                        <span>Eigenaar</span>
                    </template>
                </vl-rich-data-field>
            </vl-rich-data-table>
        `),N=ce.bind({});N.storyName="vl-rich-data-table - default";N.args={collapsedM:!1,collapsedS:!1,collapsedXS:!1,caption:"Tabel met projectgegevens"};const me=D(u,({collapsedM:t,collapsedS:e,collapsedXS:c,zebra:r,fluxZebra:i,multiSort:s,label:n,caption:l})=>{const o='{"data": [{ "id" : 0, "name" : "Water" , "owner" : "Kevin Jansens" }, { "id" : 1, "name" : "Vuur" , "owner" : "Anton Vanherrewege" }, { "id" : 2, "name" : "Aarde" , "owner" : "Hedwig Jansens" }]}';return ee(),T`
            <vl-rich-data-table
                id="rich-data-table-sorting"
                data="${o}"
                ?collapsed-m=${t}
                ?collapsed-s=${e}
                ?collapsed-xs=${c}
                ?zebra=${r}
                ?flux-zebra=${i}
                ?multi-sort=${s}
                label=${n}
                caption=${l}
            >
                <vl-rich-data-field
                    name="id"
                    label="ID"
                    selector="id"
                    sortable
                    sorting-direction="asc"
                ></vl-rich-data-field>
                <vl-rich-data-field name="name" label="Naam" selector="name" sortable></vl-rich-data-field>
                <vl-rich-data-field name="owner" selector="owner" sortable>
                    <template slot="label">
                        <span>Eigenaar</span>
                    </template>
                </vl-rich-data-field>
            </vl-rich-data-table>
        `}),k=me.bind({});k.storyName="vl-rich-data-table - sorting";k.args={collapsedM:!1,collapsedS:!1,collapsedXS:!1,multiSort:!1,caption:"Sorteerbare tabel"};const pe=D(u,({collapsedM:t,collapsedS:e,collapsedXS:c,filterClosable:r,filterClosed:i,filterMaxWidth:s,zebra:n,fluxZebra:l,label:o,caption:d})=>(_(),T`
            <vl-rich-data-table
                id="rich-data-table-filter"
                ?collapsed-m=${t}
                ?collapsed-s=${e}
                ?collapsed-xs=${c}
                ?filter-closable=${r}
                ?filter-closed=${i}
                filter-max-width=${s}
                ?zebra=${n}
                ?flux-zebra=${l}
                label=${o}
                caption=${d}
            >
                <vl-rich-data-field label="ID" selector="id"></vl-rich-data-field>
                <vl-rich-data-field label="Naam Project" selector="name"></vl-rich-data-field>
                <vl-rich-data-field label="Naam Manager" selector="manager.lastName"></vl-rich-data-field>
                <vl-rich-data-field label="Eerste medewerker" selector="medewerkers.0.lastName"></vl-rich-data-field>
                <vl-search-filter slot="filter" alt>
                    <form>
                        <section>
                            <vl-title type="h2" no-space-bottom>Doorzoek projecten</vl-title>
                            <div>
                                <vl-form-label for="filterOpId" label="Project id" light></vl-form-label>
                                <vl-input-field id="filterOpId" type="text" name="id" block></vl-input-field>
                            </div>
                            <div>
                                <vl-form-label for="filterOpNaamProject" label="Project naam" light></vl-form-label>
                                <vl-input-field type="text" id="filterOpNaamProject" name="name" block></vl-input-field>
                            </div>
                            <div>
                                <vl-form-label
                                    for="filterOpNaamManager"
                                    label="Manager familienaam"
                                    light
                                ></vl-form-label>
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
                            <div class="vl-group vl-group--wrap">
                                <vl-button type="submit">Zoeken</vl-button>
                                <vl-button type="reset" secondary>Reset</vl-button>
                            </div>
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
        `)),y=pe.bind({});y.storyName="vl-rich-data-table - filter";y.args={filterClosable:!0,caption:"Tabel met filter"};const fe=D(u,({collapsedM:t,collapsedS:e,collapsedXS:c,filterClosable:r,filterClosed:i,filterMaxWidth:s,zebra:n,fluxZebra:l,label:o,caption:d})=>(Q(),T`
            <vl-rich-data-table
                id="rich-data-table-pagination"
                ?collapsed-m=${t}
                ?collapsed-s=${e}
                ?collapsed-xs=${c}
                ?filter-closable=${r}
                ?filter-closed=${i}
                filter-max-width=${s}
                ?zebra=${n}
                ?flux-zebra=${l}
                label=${o}
                caption=${d}
            >
                <vl-rich-data-field label="ID" selector="id"></vl-rich-data-field>
                <vl-rich-data-field label="Naam Project" selector="name"></vl-rich-data-field>
                <vl-rich-data-field label="Naam Manager" selector="manager.lastName"></vl-rich-data-field>
                <vl-rich-data-field label="Eerste medewerker" selector="medewerkers.0.lastName"></vl-rich-data-field>
                <vl-search-filter slot="filter" alt>
                    <form>
                        <section>
                            <vl-title type="h2" no-space-bottom>Doorzoek projecten</vl-title>
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
                                <vl-form-label
                                    for="filterOpNaamManager"
                                    label="Manager familienaam"
                                    light
                                ></vl-form-label>
                                <vl-input-field
                                    type="text"
                                    id="filterOpNaamManager"
                                    name="manager.lastName"
                                    block
                                ></vl-input-field>
                            </div>
                        </section>
                        <footer>
                            <div class="vl-group vl-group--wrap">
                                <vl-button type="submit">Zoeken</vl-button>
                                <vl-button type="reset" secondary>Reset</vl-button>
                            </div>
                        </footer>
                    </form>
                </vl-search-filter>
                <vl-pager
                    id="pager-for-rich-data-table"
                    slot="pager"
                    total-items=${M.data.length}
                    items-per-page="10"
                    current-page="1"
                ></vl-pager>
            </vl-rich-data-table>
        `)),x=fe.bind({});x.storyName="vl-rich-data-table - filter and pagination";x.args={filterClosable:!0,filterClosed:!0,caption:"Tabel met filter en paginatie"};const he=D(u,({collapsedM:t,collapsedS:e,collapsedXS:c,zebra:r,fluxZebra:i,label:s,caption:n})=>{const l={data:[{selected:!0,name:"document.pdf",extension:"pdf",filesize:"123 MB"},{selected:!1,name:"bestand.docx",extension:"docx",filesize:"2 GB"},{selected:!1,name:"Een bestand met een lange naam.pptx",extension:"pptx",filesize:"10 KB"}]},{checkActions:o,headerTemplate:d,dataFieldRenderer:f,applySelectionToAllRows:m}=Y();return T`
            <style>
                vl-title::part(h1) {
                    font-size: var(--vl-font-size);
                    margin-bottom: 0;
                }
                vl-rich-data-table {
                    --vl-grid-col-gap: 0;
                    --vl-grid-row-gap: 0;
                }
            </style>
            <div>
                <div class="vl-group vl-group--space-between vl-group--collapse-s">
                    <vl-title type="h1">Documenten</vl-title>
                    <span
                        id="selection-status"
                        role="status"
                        aria-live="polite"
                        aria-atomic="true"
                        class="vl-visually-hidden"
                    >
                        Selectie
                    </span>
                    <div id="default-actions">
                        <div class="vl-group vl-group--collapse-xs">
                            <vl-button
                                tertiary
                                narrow
                                type="button"
                                icon="add"
                                id="add-folder"
                                @vl-click=${()=>{console.log("add folder")}}
                                >Subfolder toevoegen</vl-button
                            >
                            <vl-button
                                tertiary
                                narrow
                                type="button"
                                icon="add"
                                id="add-document"
                                @vl-click=${()=>{console.log("add document")}}
                                >Document toevoegen</vl-button
                            >
                        </div>
                    </div>
                    <div id="selection-actions" hidden>
                        <div class="vl-group vl-group--collapse-xs">
                            <vl-button
                                ghost
                                narrow
                                icon="close"
                                icon-placement="after"
                                label="Alles deselecteren"
                                id="remove-selection"
                                type="button"
                                @vl-click=${()=>{m(!1)}}
                                >Selectie</vl-button
                            >
                            <vl-button
                                tertiary
                                narrow
                                type="button"
                                icon="move-left-right"
                                @vl-click=${()=>{console.log("move selection",getSelection())}}
                                >Verplaatsen</vl-button
                            >
                            <vl-button
                                tertiary
                                narrow
                                type="button"
                                icon="data-download"
                                @vl-click=${()=>{console.log("download selection",getSelection())}}
                                >Downloaden</vl-button
                            >
                            <vl-button
                                tertiary
                                narrow
                                error
                                type="button"
                                icon="trash"
                                @vl-click=${()=>{console.log("delete selection",getSelection())}}
                                >Verwijderen</vl-button
                            >
                        </div>
                    </div>
                </div>
                <vl-rich-data-table
                    id="rich-data-table-selectable"
                    data="${JSON.stringify(l)}"
                    ?collapsed-m=${t}
                    ?collapsed-s=${e}
                    ?collapsed-xs=${c}
                    ?zebra=${r}
                    ?flux-zebra=${i}
                    label=${s}
                    caption=${n}
                    @vl-change=${()=>o()}
                >
                    <vl-rich-data-field
                        .renderer=${f}
                        .headerTemplate=${d}
                    ></vl-rich-data-field>
                    <vl-rich-data-field name="name" label="Naam" selector="name"></vl-rich-data-field>
                    <vl-rich-data-field name="filesize" label="Grootte" selector="filesize"></vl-rich-data-field>
                    <vl-rich-data-field name="extension" label="Type" selector="extension"></vl-rich-data-field>
                </vl-rich-data-table>
            </div>
        `}),j=he.bind({});j.storyName="vl-rich-data-table - selectable";j.args={caption:"Tabel met selecteerbare rijen"};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`story(richDataTableArgs, ({
  collapsedM,
  collapsedS,
  collapsedXS,
  zebra,
  fluxZebra,
  label,
  caption
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
                label=\${label}
                caption=\${caption}
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
})`,...N.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`story(richDataTableArgs, ({
  collapsedM,
  collapsedS,
  collapsedXS,
  zebra,
  fluxZebra,
  multiSort,
  label,
  caption
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
                ?multi-sort=\${multiSort}
                label=\${label}
                caption=\${caption}
            >
                <vl-rich-data-field
                    name="id"
                    label="ID"
                    selector="id"
                    sortable
                    sorting-direction="asc"
                ></vl-rich-data-field>
                <vl-rich-data-field name="name" label="Naam" selector="name" sortable></vl-rich-data-field>
                <vl-rich-data-field name="owner" selector="owner" sortable>
                    <template slot="label">
                        <span>Eigenaar</span>
                    </template>
                </vl-rich-data-field>
            </vl-rich-data-table>
        \`;
})`,...k.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`story(richDataTableArgs, ({
  collapsedM,
  collapsedS,
  collapsedXS,
  filterClosable,
  filterClosed,
  filterMaxWidth,
  zebra,
  fluxZebra,
  label,
  caption
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
                label=\${label}
                caption=\${caption}
            >
                <vl-rich-data-field label="ID" selector="id"></vl-rich-data-field>
                <vl-rich-data-field label="Naam Project" selector="name"></vl-rich-data-field>
                <vl-rich-data-field label="Naam Manager" selector="manager.lastName"></vl-rich-data-field>
                <vl-rich-data-field label="Eerste medewerker" selector="medewerkers.0.lastName"></vl-rich-data-field>
                <vl-search-filter slot="filter" alt>
                    <form>
                        <section>
                            <vl-title type="h2" no-space-bottom>Doorzoek projecten</vl-title>
                            <div>
                                <vl-form-label for="filterOpId" label="Project id" light></vl-form-label>
                                <vl-input-field id="filterOpId" type="text" name="id" block></vl-input-field>
                            </div>
                            <div>
                                <vl-form-label for="filterOpNaamProject" label="Project naam" light></vl-form-label>
                                <vl-input-field type="text" id="filterOpNaamProject" name="name" block></vl-input-field>
                            </div>
                            <div>
                                <vl-form-label
                                    for="filterOpNaamManager"
                                    label="Manager familienaam"
                                    light
                                ></vl-form-label>
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
                            <div class="vl-group vl-group--wrap">
                                <vl-button type="submit">Zoeken</vl-button>
                                <vl-button type="reset" secondary>Reset</vl-button>
                            </div>
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
})`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`story(richDataTableArgs, ({
  collapsedM,
  collapsedS,
  collapsedXS,
  filterClosable,
  filterClosed,
  filterMaxWidth,
  zebra,
  fluxZebra,
  label,
  caption
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
                label=\${label}
                caption=\${caption}
            >
                <vl-rich-data-field label="ID" selector="id"></vl-rich-data-field>
                <vl-rich-data-field label="Naam Project" selector="name"></vl-rich-data-field>
                <vl-rich-data-field label="Naam Manager" selector="manager.lastName"></vl-rich-data-field>
                <vl-rich-data-field label="Eerste medewerker" selector="medewerkers.0.lastName"></vl-rich-data-field>
                <vl-search-filter slot="filter" alt>
                    <form>
                        <section>
                            <vl-title type="h2" no-space-bottom>Doorzoek projecten</vl-title>
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
                                <vl-form-label
                                    for="filterOpNaamManager"
                                    label="Manager familienaam"
                                    light
                                ></vl-form-label>
                                <vl-input-field
                                    type="text"
                                    id="filterOpNaamManager"
                                    name="manager.lastName"
                                    block
                                ></vl-input-field>
                            </div>
                        </section>
                        <footer>
                            <div class="vl-group vl-group--wrap">
                                <vl-button type="submit">Zoeken</vl-button>
                                <vl-button type="reset" secondary>Reset</vl-button>
                            </div>
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
})`,...x.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`story(richDataTableArgs, ({
  collapsedM,
  collapsedS,
  collapsedXS,
  zebra,
  fluxZebra,
  label,
  caption
}) => {
  type MyDataItem = {
    selected: boolean;
    name: string;
    extension: string;
    filesize: string;
  };
  type MyData = MyDataItem[];
  const data: RichData<MyDataItem> = {
    data: [{
      selected: true,
      name: 'document.pdf',
      extension: 'pdf',
      filesize: '123 MB'
    }, {
      selected: false,
      name: 'bestand.docx',
      extension: 'docx',
      filesize: '2 GB'
    }, {
      selected: false,
      name: 'Een bestand met een lange naam.pptx',
      extension: 'pptx',
      filesize: '10 KB'
    }]
  };
  const {
    checkActions,
    headerTemplate,
    dataFieldRenderer,
    applySelectionToAllRows
  } = selectableRichTableImplementation();
  return html\`
            <style>
                vl-title::part(h1) {
                    font-size: var(--vl-font-size);
                    margin-bottom: 0;
                }
                vl-rich-data-table {
                    --vl-grid-col-gap: 0;
                    --vl-grid-row-gap: 0;
                }
            </style>
            <div>
                <div class="vl-group vl-group--space-between vl-group--collapse-s">
                    <vl-title type="h1">Documenten</vl-title>
                    <span
                        id="selection-status"
                        role="status"
                        aria-live="polite"
                        aria-atomic="true"
                        class="vl-visually-hidden"
                    >
                        Selectie
                    </span>
                    <div id="default-actions">
                        <div class="vl-group vl-group--collapse-xs">
                            <vl-button
                                tertiary
                                narrow
                                type="button"
                                icon="add"
                                id="add-folder"
                                @vl-click=\${() => {
    console.log('add folder');
  }}
                                >Subfolder toevoegen</vl-button
                            >
                            <vl-button
                                tertiary
                                narrow
                                type="button"
                                icon="add"
                                id="add-document"
                                @vl-click=\${() => {
    console.log('add document');
  }}
                                >Document toevoegen</vl-button
                            >
                        </div>
                    </div>
                    <div id="selection-actions" hidden>
                        <div class="vl-group vl-group--collapse-xs">
                            <vl-button
                                ghost
                                narrow
                                icon="close"
                                icon-placement="after"
                                label="Alles deselecteren"
                                id="remove-selection"
                                type="button"
                                @vl-click=\${() => {
    applySelectionToAllRows(false);
  }}
                                >Selectie</vl-button
                            >
                            <vl-button
                                tertiary
                                narrow
                                type="button"
                                icon="move-left-right"
                                @vl-click=\${() => {
    console.log('move selection', getSelection());
  }}
                                >Verplaatsen</vl-button
                            >
                            <vl-button
                                tertiary
                                narrow
                                type="button"
                                icon="data-download"
                                @vl-click=\${() => {
    console.log('download selection', getSelection());
  }}
                                >Downloaden</vl-button
                            >
                            <vl-button
                                tertiary
                                narrow
                                error
                                type="button"
                                icon="trash"
                                @vl-click=\${() => {
    console.log('delete selection', getSelection());
  }}
                                >Verwijderen</vl-button
                            >
                        </div>
                    </div>
                </div>
                <vl-rich-data-table
                    id="rich-data-table-selectable"
                    data="\${JSON.stringify(data)}"
                    ?collapsed-m=\${collapsedM}
                    ?collapsed-s=\${collapsedS}
                    ?collapsed-xs=\${collapsedXS}
                    ?zebra=\${zebra}
                    ?flux-zebra=\${fluxZebra}
                    label=\${label}
                    caption=\${caption}
                    @vl-change=\${() => checkActions()}
                >
                    <vl-rich-data-field
                        .renderer=\${dataFieldRenderer}
                        .headerTemplate=\${headerTemplate}
                    ></vl-rich-data-field>
                    <vl-rich-data-field name="name" label="Naam" selector="name"></vl-rich-data-field>
                    <vl-rich-data-field name="filesize" label="Grootte" selector="filesize"></vl-rich-data-field>
                    <vl-rich-data-field name="extension" label="Type" selector="extension"></vl-rich-data-field>
                </vl-rich-data-table>
            </div>
        \`;
})`,...j.parameters?.docs?.source}}};const Ae=["RichDataTableDefault","RichDataTableSorting","RichDataTableFilter","RichDataTableFilterAndPagination","RichDataTableSelectable"];export{N as RichDataTableDefault,y as RichDataTableFilter,x as RichDataTableFilterAndPagination,j as RichDataTableSelectable,k as RichDataTableSorting,Ae as __namedExportsOrder,Ce as default};
