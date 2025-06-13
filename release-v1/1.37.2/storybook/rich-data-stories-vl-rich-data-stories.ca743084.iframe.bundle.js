"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[1081],{"../../libs/components/src/rich-data/stories/vl-rich-data.stories.ts":(e,t,l)=>{l.r(t),l.d(t,{__namedExportsOrder:()=>v,default:()=>n,richDataClosableFilter:()=>d,richDataDefault:()=>i,richDataPager:()=>o});var r=l("../../libs/common/storybook/src/index.ts"),a=l("../../node_modules/lit-html/lit-html.js");l("../../libs/components/src/rich-data-table/vl-rich-data-field.component.ts"),l("../../libs/components/src/rich-data/vl-rich-data.component.ts");var s=l("../../libs/components/src/rich-data/stories/vl-rich-data.stories-arg.ts");let n={title:"components/rich-data",tags:["autodocs"],args:s.w,argTypes:s.Q},i=({filterCloseable:e,filterClosed:t})=>(0,a.qy)` <vl-rich-data ?data-vl-filter-closable=${e} ?data-vl-filter-closed=${t}>
        <span slot="no-content">Geen resultaten gevonden</span>
    </vl-rich-data>`;i.storyName="vl-rich-data - default";let o=(0,r._7)(s.w,({filterCloseable:e,filterClosed:t})=>(0,a.qy)`
        <vl-rich-data
            data-vl-filter-title="title"
            ?data-vl-filter-closable=${e}
            ?data-vl-filter-closed=${t}
        >
            <div is="vl-search-filter" slot="filter">
                <form is="vl-form" id="form">
                    <label>Hier kunnen filtervelden komen</label>
                    <input is="vl-input-field" type="text" name="filter1" />
                </form>
                <div>
                    <button is="vl-button-link" type="reset" form="form">Zoekopdracht verwijderen</button>
                </div>
            </div>
            <vl-pager slot="pager" total-items="25" items-per-page="5" current-page="1"></vl-pager>
            <vl-search-results slot="content">
                <vl-search-result>
                    <div>Resultaat 1</div>
                </vl-search-result>
            </vl-search-results>
            <span slot="no-content">Geen resultaten gevonden</span>
        </vl-rich-data>
    `);o.storyName="vl-rich-data - pager";let d=(0,r._7)(s.w,({filterCloseable:e,filterClosed:t})=>(0,a.qy)`
        <vl-rich-data
            data-vl-filter-title="title"
            ?data-vl-filter-closable=${e}
            ?data-vl-filter-closed=${t}
        >
            <div is="vl-search-filter" slot="filter">
                <form is="vl-form" id="form">
                    <label>Hier kunnen filtervelden komen</label>
                    <input is="vl-input-field" type="text" name="filter1" />
                </form>
                <div>
                    <button is="vl-button-link" type="reset" form="form">Zoekopdracht verwijderen</button>
                </div>
            </div>
            <vl-pager slot="pager" total-items="20" items-per-page="5" current-page="1"></vl-pager>
            <vl-search-results slot="content">
                <vl-search-result>
                    <div>Resultaat 1</div>
                </vl-search-result>
                <vl-search-result>
                    <div>Resultaat 2</div>
                </vl-search-result>
                <vl-search-result>
                    <div>Resultaat 3</div>
                </vl-search-result>
                <vl-search-result>
                    <div>Resultaat 4</div>
                </vl-search-result>
                <vl-search-result>
                    <div>Resultaat 5</div>
                </vl-search-result>
            </vl-search-results>
            <span slot="toggle-filter-button-text">Filter</span>
            <span slot="close-filter-button-text">Sluit</span>
        </vl-rich-data>
    `);d.storyName="vl-rich-data - closable filter",i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:'({\n  filterCloseable,\n  filterClosed\n}: typeof richDataArgs) => {\n  return html` <vl-rich-data ?data-vl-filter-closable=${filterCloseable} ?data-vl-filter-closed=${filterClosed}>\n        <span slot="no-content">Geen resultaten gevonden</span>\n    </vl-rich-data>`;\n}',...i.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:'story(richDataArgs, ({\n  filterCloseable,\n  filterClosed\n}: typeof richDataArgs) => {\n  return html`\n        <vl-rich-data\n            data-vl-filter-title="title"\n            ?data-vl-filter-closable=${filterCloseable}\n            ?data-vl-filter-closed=${filterClosed}\n        >\n            <div is="vl-search-filter" slot="filter">\n                <form is="vl-form" id="form">\n                    <label>Hier kunnen filtervelden komen</label>\n                    <input is="vl-input-field" type="text" name="filter1" />\n                </form>\n                <div>\n                    <button is="vl-button-link" type="reset" form="form">Zoekopdracht verwijderen</button>\n                </div>\n            </div>\n            <vl-pager slot="pager" total-items="25" items-per-page="5" current-page="1"></vl-pager>\n            <vl-search-results slot="content">\n                <vl-search-result>\n                    <div>Resultaat 1</div>\n                </vl-search-result>\n            </vl-search-results>\n            <span slot="no-content">Geen resultaten gevonden</span>\n        </vl-rich-data>\n    `;\n})',...o.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:'story(richDataArgs, ({\n  filterCloseable,\n  filterClosed\n}: typeof richDataArgs) => {\n  return html`\n        <vl-rich-data\n            data-vl-filter-title="title"\n            ?data-vl-filter-closable=${filterCloseable}\n            ?data-vl-filter-closed=${filterClosed}\n        >\n            <div is="vl-search-filter" slot="filter">\n                <form is="vl-form" id="form">\n                    <label>Hier kunnen filtervelden komen</label>\n                    <input is="vl-input-field" type="text" name="filter1" />\n                </form>\n                <div>\n                    <button is="vl-button-link" type="reset" form="form">Zoekopdracht verwijderen</button>\n                </div>\n            </div>\n            <vl-pager slot="pager" total-items="20" items-per-page="5" current-page="1"></vl-pager>\n            <vl-search-results slot="content">\n                <vl-search-result>\n                    <div>Resultaat 1</div>\n                </vl-search-result>\n                <vl-search-result>\n                    <div>Resultaat 2</div>\n                </vl-search-result>\n                <vl-search-result>\n                    <div>Resultaat 3</div>\n                </vl-search-result>\n                <vl-search-result>\n                    <div>Resultaat 4</div>\n                </vl-search-result>\n                <vl-search-result>\n                    <div>Resultaat 5</div>\n                </vl-search-result>\n            </vl-search-results>\n            <span slot="toggle-filter-button-text">Filter</span>\n            <span slot="close-filter-button-text">Sluit</span>\n        </vl-rich-data>\n    `;\n})',...d.parameters?.docs?.source}}};let v=["richDataDefault","richDataPager","richDataClosableFilter"]},"../../libs/components/src/rich-data/stories/vl-rich-data.stories-arg.ts":(e,t,l)=>{l.d(t,{Q:()=>s,w:()=>a});var r=l("../../libs/common/storybook/src/index.ts");let a={...r.D8,filterCloseable:!1,filterClosed:!1},s={...(0,r.RN)(),filterCloseable:{name:"data-vl-filter-closeable",description:"Filter sluitbaar maken en knop tonen om de filter te tonen en terug te verbergen.\n * Op een klein scherm wordt een modal geopend bij het klikken op de filter knop ipv een de filter naast de tabel te tonen.\n\n * Om elementen van de filter te verbergen enkel in de modal, kan het attribuut `data-vl-hidden-in-modal` gezet worden.",table:{type:{summary:r.QE.BOOLEAN},category:r.R6.ATTRIBUTES,defaultValue:{summary:a.filterCloseable}}},filterClosed:{name:"data-vl-filter-closed",description:"Verbergt de filter",table:{type:{summary:r.QE.BOOLEAN},category:r.R6.ATTRIBUTES,defaultValue:{summary:a.filterClosed}}}}}}]);