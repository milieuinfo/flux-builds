import{u as D,j as a,C as k,bb as V,S as v,ci as I,s as w,x as b,r as T,cI as A,c2 as L}from"./iframe-BJy2lIHs.js";import{V as G}from"./vl-select.component-Dh8HWgqz.js";import{r as O,a as p}from"./vl-rich-data.stories-arg-BX2a303O.js";import"./preload-helper-D9Z9MdNV.js";const W=`export const richDataMockData = {
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
                            <label>ID</label>
                            <data>\${project.id}</data>
                            <label>Naam manager</label>
                            <data>\${manager.lastName}</data>
                            <label>Eerste medewerker</label>
                            <data>\${medewerker.lastName}</data>
                            <label>
                                <span>Project o.l.v. <strong>manager</strong></span>
                            </label>
                            <data>
                                <span>\${project.name} o.l.v. <strong>\${manager.firstName} \${manager.lastName}</strong></span>
                            </data>
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
`;function j(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...D(),...t.components},{FluxComponentMetaData:f}=e;return f||F("FluxComponentMetaData"),a.jsxs(a.Fragment,{children:[a.jsx(e.h1,{id:"rich-data",children:"Rich Data"}),`
`,a.jsx(f,{id:"components-block-rich-data"}),`
`,a.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,a.jsxs(e.p,{children:["Gebruik de ",a.jsx(e.code,{children:"rich-data"})," component om een lijst van data te tonen."]}),`
`,a.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-js",children:`import { VlRichData } from '@domg-wc/components/block';
`})}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-html",children:`<vl-rich-data></vl-rich-data>
`})}),`
`,a.jsx(k,{of:c}),`
`,a.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,a.jsx(V,{of:c}),`
`,a.jsx(e.h2,{id:"varianten",children:"Varianten"}),`
`,a.jsx(e.p,{children:"Een uitgewerkt voorbeeld vind je hier:"}),`
`,a.jsx(k,{of:d}),`
`,a.jsxs("details",{children:[a.jsx("summary",{children:"klik hier om een voorbeeld implementatie te zien"}),a.jsx(v,{code:K,language:"ts",dark:!0})]}),`
`,a.jsxs("details",{children:[a.jsx("summary",{children:"mock data voor voorbeeld kan je hier vinden"}),a.jsx(v,{code:W,language:"ts",dark:!0})]}),`
`,a.jsx(e.h2,{id:"referenties",children:"Referenties"}),`
`,a.jsx(e.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,a.jsx(e.p,{children:a.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/story/legacy-vl-rich-data--default",rel:"nofollow",children:"Legacy Storybook - Rich Data"})}),`
`,a.jsx(e.p,{children:a.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlRichData.html",rel:"nofollow",children:"Legacy Documentatie - Rich Data"})}),`
`,a.jsx(e.p,{children:a.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-rich-data.html",rel:"nofollow",children:"Legacy Demo - Rich Data"})})]})}function _(t={}){const{wrapper:e}={...D(),...t.components};return e?a.jsx(e,{...t,children:a.jsx(j,{...t})}):j(t)}function F(t,e){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const H={data:[{id:0,name:"Project #1",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Sander",lastName:"Kleykens"}]},{id:1,name:"Project #2",manager:{firstName:"Tom",lastName:"Coemans"},medewerkers:[{firstName:"Guy",lastName:"Wauters"}]},{id:2,name:"Project #3",manager:{firstName:"Tom",lastName:"Coemans"},medewerkers:[{firstName:"Guy",lastName:"Wauters"}]},{id:3,name:"Project #4",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:4,name:"Project #5",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:5,name:"Project #6",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:6,name:"Project #7",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:7,name:"Project #8",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:8,name:"Project #9",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:9,name:"Project #10",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:10,name:"Project #11",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:11,name:"Project #12",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:12,name:"Project #13",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:13,name:"Project #14",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:14,name:"Project #15",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:15,name:"Project #16",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:16,name:"Project #17",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:17,name:"Project #18",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:18,name:"Project #19",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:19,name:"Project #20",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:20,name:"Project #21",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:21,name:"Project #22",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:22,name:"Project #23",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:23,name:"Project #24",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]},{id:24,name:"Project #25",manager:{firstName:"Pascal",lastName:"Riquier"},medewerkers:[{firstName:"Pieter",lastName:"Beckers"}]}]},y=()=>{customElements.whenDefined("vl-rich-data").then(()=>{const t=document.querySelector("#rich-data"),e=t?.querySelector('[slot="content"]'),f=t?.querySelector('[slot="sorter"]'),x=t?.querySelector("vl-pager"),g=H;let P;const N=(l,r,i)=>{P=l,e&&(e.innerHTML=""),l?.slice(r,i).forEach(n=>{const s=new Date().toLocaleString(),o=n.manager,m=n.medewerkers[0],h=`
                        <vl-search-result-title>
                            <a href="#">${n.name}</a>
                        </vl-search-result-title>
                        <vl-search-result-text>
                            <time>Gestart op ${s}</time>
                        </vl-search-result-text>
                        <vl-search-result-properties>
                            <label>ID</label>
                            <data>${n.id}</data>
                            <label>Naam manager</label>
                            <data>${o.lastName}</data>
                            <label>Eerste medewerker</label>
                            <data>${m.lastName}</data>
                            <label>
                                <span>Project o.l.v. <strong>manager</strong></span>
                            </label>
                            <data>
                                <span>${n.name} o.l.v. <strong>${o.firstName} ${o.lastName}</strong></span>
                            </data>
                        </vl-search-result-properties>
                  `;e&&e.insertAdjacentHTML("beforeend",`<vl-search-result>${h}</vl-search-result>`)})},q=(l,r,i)=>i===""?l:l.filter(n=>B(n,r).includes(i)),B=(l,r)=>{const i=r.split(".");let n=l;for(let s=0;s<i.length;s++)if(n[i[s]]!==void 0)n=n[i[s]];else return;return n.toString()},C=I(([l])=>{let r=g.data,i=g.data.length,n;const s=l;if(s.detail.formData){n=[];for(const m of s.detail.formData.entries())r=q(r,m[0],m[1]),i=r.length,n.push({name:m[0],value:m[1]})}const o=s.detail.paging;if(o){const m=(o.currentPage-1)*10;N(r,m,m+10)}t&&(t.data={paging:{currentPage:s.detail.paging.currentPage,totalItems:i},filter:n})},500);t?.addEventListener("change",C),f?.addEventListener("vl-change",l=>{const r=P;l.stopPropagation(),r&&(r.sort((i,n)=>{const s=l.target?.value?.split(".");if(!s)return 0;const o=$=>s.reduce((S,M)=>S[M],$)?.toString()||"",m=o(i),h=o(n);return m.localeCompare(h)}),t&&(t.data={paging:{currentPage:1,totalItems:r.length}}),N(r,0,10))}),t&&(t.data={paging:{currentPage:1,totalItems:25}});const E=Number(x?.getAttribute("items-per-page")??10);N(g.data,0,E)})},Q={id:"components-block-rich-data",title:"Components - Block/rich-data",tags:["autodocs"],args:p,argTypes:O,parameters:{docs:{page:_}}};T([A,L,G]);const c=({filterClosable:t,filterClosed:e})=>b`
        <vl-rich-data ?filter-closable=${t} ?filter-closed=${e}>
            <span slot="no-content">Geen resultaten gevonden</span>
            <vl-search-result slot="content"></vl-search-result>
        </vl-rich-data>
    `;c.storyName="vl-rich-data - default";const R=({filterClosable:t,filterClosed:e,filterMaxWidth:f})=>b`
        <vl-rich-data id="rich-data" ?filter-closable=${t} ?filter-closed=${e} filter-max-width=${f}>
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
    `,d=w(p,t=>(y(),R(t)));d.storyName="vl-rich-data - pager";d.args={filterClosable:!0};const u=w(p,t=>(y(),R(t)));u.storyName="vl-rich-data - filter-max-width";u.args={filterMaxWidth:"calc(1280px / 3)",filterClosable:!0};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
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
})`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`story(richDataArgs, (pagerArgs: typeof richDataArgs) => {
  richDataPaginationImplementation();
  return pagerTemplate(pagerArgs);
})`,...u.parameters?.docs?.source}}};const U=["RichDataDefault","RichDataPager","RichDataFilterMaxWidth"];export{c as RichDataDefault,u as RichDataFilterMaxWidth,d as RichDataPager,U as __namedExportsOrder,Q as default};
