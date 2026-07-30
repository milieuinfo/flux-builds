import{u as j,j as t,C as v,b8 as V,S as k,cl as I,s as w,x as D,r as T,cL as A,c4 as L}from"./iframe-DynOw9qF.js";import{V as G}from"./vl-select.component-DladKYQf.js";import{r as O,a as P}from"./vl-rich-data.stories-arg-BHNM_17S.js";import"./preload-helper-D9Z9MdNV.js";const W=`export const richDataMockData = {
    data: [
        {
            id: 0,
            name: 'Project #1',
            manager: { firstName: 'Pascal', lastName: 'Riquier' },
            medewerkers: [{ firstName: 'Sander', lastName: 'Kleykens' }],
        },
        {
            id: 1,
            name: 'Project #2',
            manager: { firstName: 'Tom', lastName: 'Coemans' },
            medewerkers: [{ firstName: 'Guy', lastName: 'Wauters' }],
        },
        {
            id: 2,
            name: 'Project #3',
            manager: { firstName: 'Tom', lastName: 'Coemans' },
            medewerkers: [{ firstName: 'Guy', lastName: 'Wauters' }],
        },
        {
            id: 3,
            name: 'Project #4',
            manager: { firstName: 'Pascal', lastName: 'Riquier' },
            medewerkers: [{ firstName: 'Pieter', lastName: 'Beckers' }],
        },
        {
            id: 4,
            name: 'Project #5',
            manager: { firstName: 'Pascal', lastName: 'Riquier' },
            medewerkers: [{ firstName: 'Pieter', lastName: 'Beckers' }],
        },
        {
            id: 5,
            name: 'Project #6',
            manager: { firstName: 'Pascal', lastName: 'Riquier' },
            medewerkers: [{ firstName: 'Pieter', lastName: 'Beckers' }],
        },
        {
            id: 6,
            name: 'Project #7',
            manager: { firstName: 'Pascal', lastName: 'Riquier' },
            medewerkers: [{ firstName: 'Pieter', lastName: 'Beckers' }],
        },
        {
            id: 7,
            name: 'Project #8',
            manager: { firstName: 'Pascal', lastName: 'Riquier' },
            medewerkers: [{ firstName: 'Pieter', lastName: 'Beckers' }],
        },
        {
            id: 8,
            name: 'Project #9',
            manager: { firstName: 'Pascal', lastName: 'Riquier' },
            medewerkers: [{ firstName: 'Pieter', lastName: 'Beckers' }],
        },
        {
            id: 9,
            name: 'Project #10',
            manager: { firstName: 'Pascal', lastName: 'Riquier' },
            medewerkers: [{ firstName: 'Pieter', lastName: 'Beckers' }],
        },
        {
            id: 10,
            name: 'Project #11',
            manager: { firstName: 'Pascal', lastName: 'Riquier' },
            medewerkers: [{ firstName: 'Pieter', lastName: 'Beckers' }],
        },
        {
            id: 11,
            name: 'Project #12',
            manager: { firstName: 'Pascal', lastName: 'Riquier' },
            medewerkers: [{ firstName: 'Pieter', lastName: 'Beckers' }],
        },
        {
            id: 12,
            name: 'Project #13',
            manager: { firstName: 'Pascal', lastName: 'Riquier' },
            medewerkers: [{ firstName: 'Pieter', lastName: 'Beckers' }],
        },
        {
            id: 13,
            name: 'Project #14',
            manager: { firstName: 'Pascal', lastName: 'Riquier' },
            medewerkers: [{ firstName: 'Pieter', lastName: 'Beckers' }],
        },
        {
            id: 14,
            name: 'Project #15',
            manager: { firstName: 'Pascal', lastName: 'Riquier' },
            medewerkers: [{ firstName: 'Pieter', lastName: 'Beckers' }],
        },
        {
            id: 15,
            name: 'Project #16',
            manager: { firstName: 'Pascal', lastName: 'Riquier' },
            medewerkers: [{ firstName: 'Pieter', lastName: 'Beckers' }],
        },
        {
            id: 16,
            name: 'Project #17',
            manager: { firstName: 'Pascal', lastName: 'Riquier' },
            medewerkers: [{ firstName: 'Pieter', lastName: 'Beckers' }],
        },
        {
            id: 17,
            name: 'Project #18',
            manager: { firstName: 'Pascal', lastName: 'Riquier' },
            medewerkers: [{ firstName: 'Pieter', lastName: 'Beckers' }],
        },
        {
            id: 18,
            name: 'Project #19',
            manager: { firstName: 'Pascal', lastName: 'Riquier' },
            medewerkers: [{ firstName: 'Pieter', lastName: 'Beckers' }],
        },
        {
            id: 19,
            name: 'Project #20',
            manager: { firstName: 'Pascal', lastName: 'Riquier' },
            medewerkers: [{ firstName: 'Pieter', lastName: 'Beckers' }],
        },
        {
            id: 20,
            name: 'Project #21',
            manager: { firstName: 'Pascal', lastName: 'Riquier' },
            medewerkers: [{ firstName: 'Pieter', lastName: 'Beckers' }],
        },
        {
            id: 21,
            name: 'Project #22',
            manager: { firstName: 'Pascal', lastName: 'Riquier' },
            medewerkers: [{ firstName: 'Pieter', lastName: 'Beckers' }],
        },
        {
            id: 22,
            name: 'Project #23',
            manager: { firstName: 'Pascal', lastName: 'Riquier' },
            medewerkers: [{ firstName: 'Pieter', lastName: 'Beckers' }],
        },
        {
            id: 23,
            name: 'Project #24',
            manager: { firstName: 'Pascal', lastName: 'Riquier' },
            medewerkers: [{ firstName: 'Pieter', lastName: 'Beckers' }],
        },
        {
            id: 24,
            name: 'Project #25',
            manager: { firstName: 'Pascal', lastName: 'Riquier' },
            medewerkers: [{ firstName: 'Pieter', lastName: 'Beckers' }],
        },
    ],
};
`,K=`import { Pagination } from '../../pager';
import { RichData, VlRichData } from '../vl-rich-data.component';
import { richDataMockData } from './vl-rich-data.stories-mock';
import { debounce } from '@domg-wc/common';

export const richDataPaginationImplementation = () => {
    customElements.whenDefined('vl-rich-data').then(() => {
        const richDataComponent = document.querySelector('#rich-data') as VlRichData | null;
        const content = richDataComponent?.querySelector('[slot="content"]');
        const sorter = richDataComponent?.querySelector('[slot="sorter"]');
        const pager = richDataComponent?.querySelector('vl-pager');

        const data = richDataMockData;

        let newData: unknown[] | undefined = undefined;

        const setContentData = (data: any[] | undefined, from: number, to: number) => {
            newData = data;
            if(content) {
                content.innerHTML = \`\`;
            }
            data?.slice(from, to).forEach((project) => {
                const now = new Date().toLocaleString();
                const manager = project.manager;
                const medewerker = project.medewerkers[0];
                const html = \`
                        <vl-search-result-title>
                            <a href="#">\${project.name}</a>
                        </vl-search-result-title>
                        <vl-search-result-text>
                            <time>Gestart op \${now}</time>
                        </vl-search-result-text>
                        <vl-search-result-properties>
                            <vl-property>ID</vl-property>
                            <vl-property-data>\${project.id}</vl-property-data>
                            <vl-property>Naam manager</vl-property>
                            <vl-property-data>\${manager.lastName}</vl-property-data>
                            <vl-property>Eerste medewerker</vl-property>
                            <vl-property-data>\${medewerker.lastName}</vl-property-data>
                            <vl-property>
                                <span>Project o.l.v. <strong>manager</strong></span>
                            </vl-property>
                            <vl-property-data>
                                <span>\${project.name} o.l.v. <strong>\${manager.firstName} \${manager.lastName}</strong></span>
                            </vl-property-data>
                        </vl-search-result-properties>
                  \`;
                if(content) {
                    content.insertAdjacentHTML('beforeend', \`<vl-search-result>\${html}</vl-search-result>\`);
                }
            });
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

        const debouncedOnChange = debounce(([event]) => {
            let newData = data.data;
            let totalItems = data.data.length;
            let filterEntries = undefined;

            const customEvent = event as CustomEvent;
            if (customEvent.detail.formData) {
                filterEntries = [];
                for (const entry of customEvent.detail.formData.entries()) {
                    newData = filter(newData, entry[0], entry[1]);
                    totalItems = newData.length;
                    filterEntries.push({
                        name: entry[0],
                        value: entry[1],
                    });
                }
            }
            const pagination: Pagination = customEvent.detail.paging;
            if (pagination) {
                const from = (pagination.currentPage - 1) * 10;
                setContentData(newData, from, from + 10);
            }
            if (richDataComponent) {
                richDataComponent.data = <RichData>{
                    paging: <Pagination>{
                        currentPage: customEvent.detail.paging.currentPage,
                        totalItems: totalItems,
                    },
                    filter: filterEntries,
                };
            }
        }, 500);

        richDataComponent?.addEventListener('change', debouncedOnChange);

        sorter?.addEventListener('vl-change', (event: Event) => {
            const data = newData;
            event.stopPropagation();
            if (!data) return;
            data.sort((firstElement, secondElement) => {
                const keys = (event.target as HTMLSelectElement)?.value?.split('.');

                if (!keys) {
                    return 0;
                }

                const getValue = (element: unknown) =>
                    keys.reduce((value: any, key) => value[key], element)?.toString() || '';

                const firstValue = getValue(firstElement);
                const secondValue = getValue(secondElement);

                return firstValue.localeCompare(secondValue);
            });
            if (richDataComponent) {
                richDataComponent.data = <RichData>{
                    paging: <Pagination>{
                        currentPage: 1,
                        totalItems: data.length,
                    },
                };
            }
            setContentData(data, 0, 10);
        });

        if (richDataComponent) {
            richDataComponent.data = <any>{
                paging: <Pagination>{
                    currentPage: 1,
                    totalItems: 25,
                },
            };
        }

        const itemsPerPage = Number(pager?.getAttribute('items-per-page') ?? 10);
        setContentData(data.data, 0, itemsPerPage);
    });
};
`;function y(e){const a={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...j(),...e.components},{FluxComponentMetaData:p}=a;return p||F("FluxComponentMetaData"),t.jsxs(t.Fragment,{children:[t.jsx(a.h1,{id:"rich-data",children:"Rich Data"}),`
`,t.jsx(p,{id:"components-block-rich-data"}),`
`,t.jsx(a.h2,{id:"doel",children:"Doel"}),`
`,t.jsxs(a.p,{children:["Gebruik de ",t.jsx(a.code,{children:"rich-data"})," component om een lijst van data te tonen."]}),`
`,t.jsx(a.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,t.jsx(a.pre,{children:t.jsx(a.code,{className:"language-js",children:`import { VlRichData } from '@domg-wc/components/block';
`})}),`
`,t.jsx(a.pre,{children:t.jsx(a.code,{className:"language-html",children:`<vl-rich-data></vl-rich-data>
`})}),`
`,t.jsx(v,{of:c}),`
`,t.jsx(a.h2,{id:"configuratie",children:"Configuratie"}),`
`,t.jsx(V,{of:c}),`
`,t.jsx(a.h2,{id:"varianten",children:"Varianten"}),`
`,t.jsx(a.p,{children:"Een uitgewerkt voorbeeld vind je hier:"}),`
`,t.jsx(v,{of:d}),`
`,t.jsxs("details",{children:[t.jsx("summary",{children:"klik hier om een voorbeeld implementatie te zien"}),t.jsx(k,{code:K,language:"ts",dark:!0})]}),`
`,t.jsxs("details",{children:[t.jsx("summary",{children:"mock data voor voorbeeld kan je hier vinden"}),t.jsx(k,{code:W,language:"ts",dark:!0})]})]})}function _(e={}){const{wrapper:a}={...j(),...e.components};return a?t.jsx(a,{...e,children:t.jsx(y,{...e})}):y(e)}function F(e,a){throw new Error("Expected component `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const H={data:[{id:0,name:"Project #1",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Sander",lastName:"Kleykens"}]},{id:1,name:"Project #2",manager:{firstName:"Tom",lastName:"Coemans"},medewerkers:[{firstName:"Guy",lastName:"Wauters"}]},{id:2,name:"Project #3",manager:{firstName:"Tom",lastName:"Coemans"},medewerkers:[{firstName:"Guy",lastName:"Wauters"}]},{id:3,name:"Project #4",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:4,name:"Project #5",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:5,name:"Project #6",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:6,name:"Project #7",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:7,name:"Project #8",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:8,name:"Project #9",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:9,name:"Project #10",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:10,name:"Project #11",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:11,name:"Project #12",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:12,name:"Project #13",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:13,name:"Project #14",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:14,name:"Project #15",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:15,name:"Project #16",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:16,name:"Project #17",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:17,name:"Project #18",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:18,name:"Project #19",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:19,name:"Project #20",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:20,name:"Project #21",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:21,name:"Project #22",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:22,name:"Project #23",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:23,name:"Project #24",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:24,name:"Project #25",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]}]},R=()=>{customElements.whenDefined("vl-rich-data").then(()=>{const e=document.querySelector("#rich-data"),a=e?.querySelector('[slot="content"]'),p=e?.querySelector('[slot="sorter"]'),q=e?.querySelector("vl-pager"),u=H;let h;const g=(l,n,i)=>{h=l,a&&(a.innerHTML=""),l?.slice(n,i).forEach(r=>{const s=new Date().toLocaleString(),o=r.manager,m=r.medewerkers[0],N=`
                        <vl-search-result-title>
                            <a href="#">${r.name}</a>
                        </vl-search-result-title>
                        <vl-search-result-text>
                            <time>Gestart op ${s}</time>
                        </vl-search-result-text>
                        <vl-search-result-properties>
                            <vl-property>ID</vl-property>
                            <vl-property-data>${r.id}</vl-property-data>
                            <vl-property>Naam manager</vl-property>
                            <vl-property-data>${o.lastName}</vl-property-data>
                            <vl-property>Eerste medewerker</vl-property>
                            <vl-property-data>${m.lastName}</vl-property-data>
                            <vl-property>
                                <span>Project o.l.v. <strong>manager</strong></span>
                            </vl-property>
                            <vl-property-data>
                                <span>${r.name} o.l.v. <strong>${o.firstName} ${o.lastName}</strong></span>
                            </vl-property-data>
                        </vl-search-result-properties>
                  `;a&&a.insertAdjacentHTML("beforeend",`<vl-search-result>${N}</vl-search-result>`)})},B=(l,n,i)=>i===""?l:l.filter(r=>x(r,n).includes(i)),x=(l,n)=>{const i=n.split(".");let r=l;for(let s=0;s<i.length;s++)if(r[i[s]]!==void 0)r=r[i[s]];else return;return r.toString()},C=I(([l])=>{let n=u.data,i=u.data.length,r;const s=l;if(s.detail.formData){r=[];for(const m of s.detail.formData.entries())n=B(n,m[0],m[1]),i=n.length,r.push({name:m[0],value:m[1]})}const o=s.detail.paging;if(o){const m=(o.currentPage-1)*10;g(n,m,m+10)}e&&(e.data={paging:{currentPage:s.detail.paging.currentPage,totalItems:i},filter:r})},500);e?.addEventListener("change",C),p?.addEventListener("vl-change",l=>{const n=h;l.stopPropagation(),n&&(n.sort((i,r)=>{const s=l.target?.value?.split(".");if(!s)return 0;const o=$=>s.reduce((S,M)=>S[M],$)?.toString()||"",m=o(i),N=o(r);return m.localeCompare(N)}),e&&(e.data={paging:{currentPage:1,totalItems:n.length}}),g(n,0,10))}),e&&(e.data={paging:{currentPage:1,totalItems:25}});const E=Number(q?.getAttribute("items-per-page")??10);g(u.data,0,E)})},Q={id:"components-block-rich-data",title:"Components - Block/rich-data",tags:["autodocs"],args:P,argTypes:O,parameters:{docs:{page:_}}};T([A,L,G]);const c=({filterClosable:e,filterClosed:a})=>D`
        <vl-rich-data ?filter-closable=${e} ?filter-closed=${a}>
            <span slot="no-content">Geen resultaten gevonden</span>
            <vl-search-result slot="content"></vl-search-result>
        </vl-rich-data>
    `;c.storyName="vl-rich-data - default";const b=({filterClosable:e,filterClosed:a,filterMaxWidth:p})=>D`
        <vl-rich-data id="rich-data" ?filter-closable=${e} ?filter-closed=${a} filter-max-width=${p}>
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
                        <div class="vl-group vl-group--wrap">
                            <vl-button type="submit">Zoeken</vl-button>
                            <vl-button type="reset" secondary>Reset</vl-button>
                        </div>
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
    `,d=w(P,e=>(R(),b(e)));d.storyName="vl-rich-data - pager";d.args={filterClosable:!0};const f=w(P,e=>(R(),b(e)));f.storyName="vl-rich-data - filter-max-width";f.args={filterMaxWidth:"calc(1280px / 3)",filterClosable:!0};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
  filterClosable,
  filterClosed
}: typeof richDataArgs) => {
  return html\`
        <vl-rich-data ?filter-closable=\${filterClosable} ?filter-closed=\${filterClosed}>
            <span slot="no-content">Geen resultaten gevonden</span>
            <vl-search-result slot="content"></vl-search-result>
        </vl-rich-data>
    \`;
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`story(richDataArgs, (pagerArgs: typeof richDataArgs) => {
  richDataPaginationImplementation();
  return pagerTemplate(pagerArgs);
})`,...d.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`story(richDataArgs, (pagerArgs: typeof richDataArgs) => {
  richDataPaginationImplementation();
  return pagerTemplate(pagerArgs);
})`,...f.parameters?.docs?.source}}};const U=["RichDataDefault","RichDataPager","RichDataFilterMaxWidth"];export{c as RichDataDefault,f as RichDataFilterMaxWidth,d as RichDataPager,U as __namedExportsOrder,Q as default};
