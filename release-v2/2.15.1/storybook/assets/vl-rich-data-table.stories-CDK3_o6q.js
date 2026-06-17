import{cX as z,_ as b,Z as g,u as M,j as a,C as P,S as j,bc as V,s as T,x as D,r as I,cY as q,c4 as O,Q as F,d as L,b as H,V as J,R as G}from"./iframe-nqJ0ju39.js";import{V as K}from"./vl-checkbox.component-kcGdx0dA.js";import"./vl-datepicker.component-LrijvSQq.js";import"./vl-fieldset.component-DHSdhx9W.js";import"./vl-input-field-masked.component-SpAs0qTF.js";import"./vl-radio.component-VdH70-oI.js";import"./vl-radio-group.component-BY5xfCg3.js";import{V as W}from"./vl-select.component-DRh-HxGq.js";import"./vl-select-rich.component-_K_EXuZK.js";import"./vl-textarea.component-D1tzSi4A.js";import"./vl-textarea-rich.component-CDfdsccr.js";import"./vl-upload.component-DC3JX4LC.js";import{r as X,a as Z}from"./vl-rich-data.stories-arg-CqBL-IhB.js";import"./preload-helper-D9Z9MdNV.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-upload-progress.component-DSz62Axb.js";const U={data:[{id:0,name:"Wegen",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Sander",lastName:"Kleykens"}]},{id:1,name:"Water",manager:{firstName:"Siegfried",lastName:"Brusselmans"},medewerkers:[{firstName:"Guy",lastName:"Wauters"}]},{id:2,name:"Diversiteit",manager:{firstName:"Hendrik",lastName:"Vangenechten"},medewerkers:[{firstName:"Gunther",lastName:"Jaegers"}]},{id:3,name:"Voetafdrukmeting",manager:{firstName:"Pascal",lastName:"De Smet"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:4,name:"Grondwater",manager:{firstName:"Julie",lastName:"Meert"},medewerkers:[{firstName:"Hans",lastName:"Dhondt"}]},{id:5,name:"Grondwatermeting",manager:{firstName:"Julie",lastName:"Meert"},medewerkers:[{firstName:"Thomas",lastName:"Kristiaens"}]}]},C=U,_=()=>{customElements.whenDefined("vl-rich-data-table").then(()=>{const t=document.querySelector("#rich-data-table-filter");if(t){t.data=C,t.addEventListener("change",s=>{let i=[...C.data];if(s.detail.formData)for(const o of s.detail.formData.entries())i=e(i,o[0],o[1]);t.data={data:i,paging:{currentPage:1,totalItems:i.length}}});const e=(s,i,o)=>o===""?s:s.filter(n=>m(n,i).includes(o)),m=(s,i)=>{const o=i.split(".");let n=s;for(let l=0;l<o.length;l++)if(n[o[l]]!==void 0)n=n[o[l]];else return;return n.toString()}}})},E={data:[{id:0,name:"Wegen",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Sander",lastName:"Kleykens"}]},{id:1,name:"Water",manager:{firstName:"Siegfried",lastName:"Brusselmans"},medewerkers:[{firstName:"Guy",lastName:"Wauters"}]},{id:2,name:"Diversiteit",manager:{firstName:"Hendrik",lastName:"Vangenechten"},medewerkers:[{firstName:"Gunther",lastName:"Jaegers"}]},{id:3,name:"Voetafdrukmeting",manager:{firstName:"Pascal",lastName:"De Smet"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:4,name:"Grondwater",manager:{firstName:"Julie",lastName:"Meert"},medewerkers:[{firstName:"Hans",lastName:"Dhondt"}]},{id:5,name:"Grondwatermeting",manager:{firstName:"Julie",lastName:"Meert"},medewerkers:[{firstName:"Thomas",lastName:"Kristiaens"}]},{id:6,name:"Project #7",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:7,name:"Project #8",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:8,name:"Project #9",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:9,name:"Project #10",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:10,name:"Project #11",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:11,name:"Project #12",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:12,name:"Project #13",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:13,name:"Project #14",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:14,name:"Project #15",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:15,name:"Project #16",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:16,name:"Project #17",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:17,name:"Project #18",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:18,name:"Project #19",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:19,name:"Project #20",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:20,name:"Project #21",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:21,name:"Project #22",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:22,name:"Project #23",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:23,name:"Project #24",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:24,name:"Project #25",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]}]},Y=()=>{customElements.whenDefined("vl-rich-data-table").then(()=>{const t=E,e=document.querySelector("#rich-data-table-pagination"),m=document.querySelector("#pager-for-rich-data-table");if(e&&m){e.addEventListener("change",n=>{let l=t.data,d=t.data.length,c;if(n.detail.formData){c=[];for(const r of n.detail.formData.entries())l=i(l,r[0],r[1]),d=l.length,c.push({name:r[0],value:r[1]})}n.detail.paging&&(l=s(n.detail.paging.currentPage,m.itemsPerPage,l)),e.data={data:l,paging:{currentPage:n.detail.paging.currentPage,totalItems:d},filter:c}});const s=(n,l,d)=>{const c=(n-1)*l,r=c+l;return d.slice(c,r)};e.data={data:s(1,10,t.data)};const i=(n,l,d)=>d===""?n:n.filter(c=>o(c,l).includes(d)),o=(n,l)=>{const d=l.split(".");let c=n;for(let r=0;r<d.length;r++)if(c[d[r]]!==void 0)c=c[d[r]];else return;return c.toString()}}})},Q=()=>{const t=document.createElement("vl-checkbox");t.setAttribute("label","Selecteer alles");const e=()=>t.shadowRoot.querySelector("input"),m=()=>document.querySelector("#rich-data-table-selectable"),s=()=>m()?.data.data||[],i=r=>{t.removeAttribute("indeterminate");const f=m();if(!f)return;const h=s();f.data={...f.data,data:[...h.map(u=>({...u,selected:r}))]}},o=r=>{const{detail:{checked:f}}=r;i(f)},n=()=>s().filter(r=>r.selected);return{checkActions:()=>{const f=n().length,h=f>0;document.querySelector("#default-actions")?.toggleAttribute("hidden",h),document.querySelector("#selection-actions")?.toggleAttribute("hidden",!h);const u=document.querySelector("#remove-selection"),S=document.querySelector("#selection-status");if(u&&S){const $=`${f} item${f!==1?"s":""} geselecteerd`;S.innerText=$,u.innerText=$;return}if(!h&&t){e()?.focus();return}},headerTemplate:()=>{const r=document.createElement("td"),f=document.createElement("span");return f.setAttribute("class","vl-visually-hidden"),f.innerText="Maak selectie",r.innerHTML=`<style>${z}</style>`,r.appendChild(f),r.appendChild(t),requestAnimationFrame(()=>{t.addEventListener("vl-change",o)}),r},dataFieldRenderer:(r,{selected:f,name:h})=>{const u=document.createElement("vl-checkbox");u.setAttribute("label",`Selecteer ${h}`),u.toggleAttribute("checked",f),u.addEventListener("vl-change",S=>{const{detail:{checked:$}}=S,R=s(),B=R.find(({name:w})=>w===h);if(B&&(B.selected=$),R.every(w=>w.selected)){t.setAttribute("checked",""),e().indeterminate=!1;return}if(R.every(w=>!w.selected)){t.removeAttribute("checked"),e().indeterminate=!1;return}e().indeterminate=!0}),r.appendChild(u)},applySelectionToAllRows:i}},ee=()=>{const t=e=>{const m=[...e.data.data];return s=>{const{sorting:i}=s.detail,o=s.target;i?o.data={data:[...m].sort((n,l)=>{for(let d=0;d<i.length;d++){const c=i[d],r=n[c.name],f=l[c.name],h=c.direction==="asc";if(r<f)return h?-1:1;if(r>f)return h?1:-1}return 0}),sorting:i}:o.data=m}};customElements.whenDefined("vl-rich-data-table").then(()=>{const e=document.querySelector("#rich-data-table-sorting");e&&e.addEventListener("change",t(e))})},p={...Z,collapsedM:!1,collapsedS:!1,collapsedXS:!1,zebra:!1,fluxZebra:!1,multiSort:!1,label:"",caption:""},ae={...X,collapsedM:{name:"collapsed-m",description:"Vanaf medium schermgrootte, cellen per rij onder elkaar ipv naast elkaar",table:{category:g.ATTRIBUTES,type:{summary:b.BOOLEAN},defaultValue:{summary:String(p.collapsedM)}}},collapsedS:{name:"collapsed-s",description:"Vanaf een small schermgrootte, cellen per rij onder elkaar ipv naast elkaar",table:{category:g.ATTRIBUTES,type:{summary:b.BOOLEAN},defaultValue:{summary:String(p.collapsedS)}}},collapsedXS:{name:"collapsed-xs",description:"Vanaf een extra small schermgrootte, cellen per rij onder elkaar ipv naast elkaar",table:{category:g.ATTRIBUTES,type:{summary:b.BOOLEAN},defaultValue:{summary:String(p.collapsedXS)}}},zebra:{name:"zebra",description:"Variant waarin de rijen afwisselend een andere achtergrondkleur krijgen. Dit maakt de tabel makkelijker leesbaar. Deze zebra werkt niet voor tabellen met detail rijen, gebruik hiervoor flux-zebra.",table:{category:g.ATTRIBUTES,type:{summary:b.BOOLEAN},defaultValue:{summary:String(p.zebra)}}},fluxZebra:{name:"flux-zebra",description:"Variant waarin de rijen afwisselend een andere achtergrondkleur krijgen. Dit maakt de tabel makkelijker leesbaar. Deze zebra werkt voor tabellen met en zonder detail rijen.",table:{category:g.ATTRIBUTES,type:{summary:b.BOOLEAN},defaultValue:{summary:String(p.fluxZebra)}}},multiSort:{name:"multi-sort",description:"Maakt het mogelijk om op meerdere kolommen te sorteren.",table:{category:g.ATTRIBUTES,type:{summary:b.BOOLEAN},defaultValue:{summary:String(p.multiSort)}}},label:{name:"label",description:"Wordt gebruikt als aria-label voor de tabel. Optioneel indien er een caption gedefinieerd is. Voor screenreaders heeft label voorrang op caption als beide aanwezig zijn, maar het is aanbevolen om caption te gebruiken als er een zichtbare titel voor de tabel gewenst is.",table:{category:g.ATTRIBUTES,type:{summary:b.STRING},defaultValue:{summary:p.label}}},caption:{name:"caption",description:"Caption van de tabel. Optioneel indien er een label gedefinieerd is.",table:{category:g.ATTRIBUTES,type:{summary:b.STRING},defaultValue:{summary:""}}}},te=`export const sortingRichTableImplementation = () => {
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

            if (tableData.every((item) => item.selected)) {
                headerCheckbox.setAttribute('checked', '');
                getHeaderCheckboxInput().indeterminate = false;
                return;
            }
            if (tableData.every((item) => !item.selected)) {
                headerCheckbox.removeAttribute('checked');
                getHeaderCheckboxInput().indeterminate = false;
                return;
            }

            getHeaderCheckboxInput().indeterminate = true;
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
            headerCheckbox.addEventListener('vl-change', handleSelectAllToggle);
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
`;function A(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...M(),...t.components},{FluxComponentMetaData:m}=e;return m||de("FluxComponentMetaData"),a.jsxs(a.Fragment,{children:[a.jsx(e.h1,{id:"rich-data-table",children:"Rich Data Table"}),`
`,a.jsx(m,{id:"components-block-rich-data-table"}),`
`,a.jsx(e.h2,{id:"doel",children:"Doel"}),`
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
`,a.jsx(P,{of:v}),`
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
`,a.jsxs("details",{children:[a.jsx("summary",{children:"Code voorbeeld hoe sorting toe te passen"}),a.jsx(j,{code:te,language:"ts",dark:!0})]}),`
`,a.jsxs(e.p,{children:["Een template voorbeeld vind je hieronder. Klik op ",a.jsx(e.code,{children:"Show code"})," om de html te zien."]}),`
`,a.jsx(e.p,{children:"Belangrijk:"}),`
`,a.jsxs(e.ul,{children:[`
`,a.jsxs(e.li,{children:[a.jsx(e.code,{children:"sortable"})," toevoegen op de ",a.jsx(e.code,{children:"vl-rich-data-field"}),"-velden waarop gesorteerd moet worden"]}),`
`,a.jsxs(e.li,{children:["om de data te sorteren kan je gebruik maken van ",a.jsx(e.code,{children:"rich-data-sorter"})]}),`
`]}),`
`,a.jsx(P,{of:N,layout:"padded"}),`
`,a.jsx(e.h2,{id:"filter",children:"Filter"}),`
`,a.jsxs(e.p,{children:["Om filtering te laten werken, adviseren we ",a.jsx(e.code,{children:"vl-search-filter"}),` te implementeren.
Meer info over `,a.jsx(e.code,{children:"vl-search-filter"})," ",a.jsx(e.a,{href:"?path=/docs/elements-search-filter--search-filter-default",children:"hier"}),"."]}),`
`,a.jsx(e.p,{children:"Daarnaast moet je ook de filtering & change detection zelf implementeren."}),`
`,a.jsxs("details",{children:[a.jsx("summary",{children:"Gebruikte mock data in onderstaande voorbeeld"}),a.jsx(j,{code:le,language:"ts",dark:!0})]}),`
`,a.jsxs("details",{children:[a.jsx("summary",{children:"Code voorbeeld hoe filtering toe te passen"}),a.jsx(j,{code:ne,language:"ts",dark:!0})]}),`
`,a.jsxs(e.p,{children:["Template voorbeeld vind je hieronder. Klik op ",a.jsx(e.code,{children:"Show code"})," om de html te zien."]}),`
`,a.jsx(P,{of:k,layout:"padded"}),`
`,a.jsx(e.h2,{id:"paginatie",children:"Paginatie"}),`
`,a.jsxs(e.p,{children:["Om paginatie te laten werken, moet je ",a.jsx(e.code,{children:"vl-pager"}),` implementeren. Zie HTML code sample.
Meer info over `,a.jsx(e.code,{children:"vl-pager"})," ",a.jsx(e.a,{href:"?path=/docs/components-block-pager--pager-default",children:"hier"}),"."]}),`
`,a.jsxs(e.p,{children:["Daarnaast moet je specifieke logica schrijven gerelateerd tot de paginatie om ",a.jsx(e.code,{children:"vl-pager"}),` te laten werken.
In onderstaande code kan je zien op welke manier je filtering & paginatie kan combineren.`]}),`
`,a.jsxs("details",{children:[a.jsx("summary",{children:"Gebruikte mock data in onderstaande voorbeeld"}),a.jsx(j,{code:ie,language:"ts",dark:!0})]}),`
`,a.jsxs("details",{children:[a.jsx("summary",{children:"Code voorbeeld hoe paginatie toe te passen"}),a.jsx(j,{code:re,language:"ts",dark:!0})]}),`
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
`,a.jsxs("details",{children:[a.jsx("summary",{children:"Code voorbeeld van een implementatie met selecteerbare rijen"}),a.jsx(j,{code:se,language:"ts",dark:!0})]}),`
`,a.jsxs(e.p,{children:["Template voorbeeld van een implementatie met selecteerbare rijen. Klik op ",a.jsx(e.code,{children:"Show code"})," om de html te zien."]}),`
`,a.jsx(P,{of:y,layout:"padded"}),`
`,a.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,a.jsx(V,{of:v}),`
`,a.jsx(e.h2,{id:"referenties",children:"Referenties"}),`
`,a.jsx(e.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,a.jsx(e.p,{children:`Digitaal Vlaanderen bied geen component aan voor de Rich Data Table maar wel beperkte functionaliteit voor de Data
table. Die nemen we over, daarnaast volgen we ook de styling van de Data Table.`}),`
`,a.jsx(e.p,{children:a.jsx(e.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/componenten/data-table",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Rich Data Table"})})]})}function oe(t={}){const{wrapper:e}={...M(),...t.components};return e?a.jsx(e,{...t,children:a.jsx(A,{...t})}):A(t)}function de(t,e){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}I([q,O,F,L,H,J,W,K,G]);const Be={id:"components-block-rich-data-table",title:"Components - Block/rich-data-table",tags:["autodocs"],args:p,argTypes:ae,parameters:{docs:{page:oe}}},ce=T(p,({collapsedM:t,collapsedS:e,collapsedXS:m,zebra:s,fluxZebra:i,label:o,caption:n})=>D`
            <vl-rich-data-table
                data="${'{"data": [{ "id" : 0, "name" : "Project #1" , "owner" : "Jan Jansens" }, { "id" : 1, "name" : "Project #2" , "owner" : "Marie Vermeersch" }]}'}"
                ?collapsed-m=${t}
                ?collapsed-s=${e}
                ?collapsed-xs=${m}
                ?zebra=${s}
                ?flux-zebra=${i}
                label=${o}
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
        `),v=ce.bind({});v.storyName="vl-rich-data-table - default";v.args={collapsedM:!1,collapsedS:!1,collapsedXS:!1,caption:"Tabel met projectgegevens"};const me=T(p,({collapsedM:t,collapsedS:e,collapsedXS:m,zebra:s,fluxZebra:i,multiSort:o,label:n,caption:l})=>{const d='{"data": [{ "id" : 0, "name" : "Water" , "owner" : "Kevin Jansens" }, { "id" : 1, "name" : "Vuur" , "owner" : "Anton Vanherrewege" }, { "id" : 2, "name" : "Aarde" , "owner" : "Hedwig Jansens" }]}';return ee(),D`
            <vl-rich-data-table
                id="rich-data-table-sorting"
                data="${d}"
                ?collapsed-m=${t}
                ?collapsed-s=${e}
                ?collapsed-xs=${m}
                ?zebra=${s}
                ?flux-zebra=${i}
                ?multi-sort=${o}
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
        `}),N=me.bind({});N.storyName="vl-rich-data-table - sorting";N.args={collapsedM:!1,collapsedS:!1,collapsedXS:!1,multiSort:!1,caption:"Sorteerbare tabel"};const fe=T(p,({collapsedM:t,collapsedS:e,collapsedXS:m,filterClosable:s,filterClosed:i,filterMaxWidth:o,zebra:n,fluxZebra:l,label:d,caption:c})=>(_(),D`
            <vl-rich-data-table
                id="rich-data-table-filter"
                ?collapsed-m=${t}
                ?collapsed-s=${e}
                ?collapsed-xs=${m}
                ?filter-closable=${s}
                ?filter-closed=${i}
                filter-max-width=${o}
                ?zebra=${n}
                ?flux-zebra=${l}
                label=${d}
                caption=${c}
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
        `)),k=fe.bind({});k.storyName="vl-rich-data-table - filter";k.args={filterClosable:!0,caption:"Tabel met filter"};const pe=T(p,({collapsedM:t,collapsedS:e,collapsedXS:m,filterClosable:s,filterClosed:i,filterMaxWidth:o,zebra:n,fluxZebra:l,label:d,caption:c})=>(Y(),D`
            <vl-rich-data-table
                id="rich-data-table-pagination"
                ?collapsed-m=${t}
                ?collapsed-s=${e}
                ?collapsed-xs=${m}
                ?filter-closable=${s}
                ?filter-closed=${i}
                filter-max-width=${o}
                ?zebra=${n}
                ?flux-zebra=${l}
                label=${d}
                caption=${c}
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
                            <vl-button type="submit" custom-css="button {flex:1}">Zoeken</vl-button>
                            <vl-button type="reset" custom-css="button {flex:1}" secondary>Reset</vl-button>
                        </footer>
                    </form>
                </vl-search-filter>
                <vl-pager
                    id="pager-for-rich-data-table"
                    slot="pager"
                    total-items=${E.data.length}
                    items-per-page="10"
                    current-page="1"
                ></vl-pager>
            </vl-rich-data-table>
        `)),x=pe.bind({});x.storyName="vl-rich-data-table - filter and pagination";x.args={filterClosable:!0,filterClosed:!0,caption:"Tabel met filter en paginatie"};const he=T(p,({collapsedM:t,collapsedS:e,collapsedXS:m,zebra:s,fluxZebra:i,label:o,caption:n})=>{const l={data:[{selected:!0,name:"document.pdf",extension:"pdf",filesize:"123 MB"},{selected:!1,name:"bestand.docx",extension:"docx",filesize:"2 GB"},{selected:!1,name:"Een bestand met een lange naam.pptx",extension:"pptx",filesize:"10 KB"}]},{checkActions:d,headerTemplate:c,dataFieldRenderer:r,applySelectionToAllRows:f}=Q();return D`
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
                                @vl-click=${()=>{f(!1)}}
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
                    ?collapsed-xs=${m}
                    ?zebra=${s}
                    ?flux-zebra=${i}
                    label=${o}
                    caption=${n}
                    @vl-change=${()=>d()}
                >
                    <vl-rich-data-field
                        .renderer=${r}
                        .headerTemplate=${c}
                    ></vl-rich-data-field>
                    <vl-rich-data-field name="name" label="Naam" selector="name"></vl-rich-data-field>
                    <vl-rich-data-field name="filesize" label="Grootte" selector="filesize"></vl-rich-data-field>
                    <vl-rich-data-field name="extension" label="Type" selector="extension"></vl-rich-data-field>
                </vl-rich-data-table>
            </div>
        `}),y=he.bind({});y.storyName="vl-rich-data-table - selectable";y.args={caption:"Tabel met selecteerbare rijen"};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`story(richDataTableArgs, ({
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
})`,...v.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`story(richDataTableArgs, ({
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
})`,...N.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`story(richDataTableArgs, ({
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
})`,...k.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`story(richDataTableArgs, ({
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
})`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`story(richDataTableArgs, ({
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
})`,...y.parameters?.docs?.source}}};const Ce=["RichDataTableDefault","RichDataTableSorting","RichDataTableFilter","RichDataTableFilterAndPagination","RichDataTableSelectable"];export{v as RichDataTableDefault,k as RichDataTableFilter,x as RichDataTableFilterAndPagination,y as RichDataTableSelectable,N as RichDataTableSorting,Ce as __namedExportsOrder,Be as default};
