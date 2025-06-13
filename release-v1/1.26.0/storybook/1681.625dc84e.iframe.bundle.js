(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[1681],{"./node_modules/memoizerific sync recursive":e=>{function t(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id="./node_modules/memoizerific sync recursive",e.exports=t},"./libs/qlik/src/dashboard/stories/vl-qlik-dashboard.stories-arg.ts":(e,t,i)=>{"use strict";i.d(t,{Y:()=>s,y:()=>a});var l=i("./libs/common/storybook/src/index.ts");let s={...l._O,visuals:null,filters:null,connection:null,connected:(0,l.lj)("connected"),initialized:(0,l.lj)("initialized")},a={...(0,l.Wp)(!0),visuals:{name:"visuals",description:"Het object dat de eigenlijke visualisatie config bevat",table:{type:{summary:"DashboardVisualization[][]"},category:l.aA.PROPERTIES,defaultValue:{summary:s.visuals}}},filters:{name:"filters",description:"De filters die toegepast moeten worden op het Qlik object",table:{type:{summary:"Filter[]"},category:l.aA.PROPERTIES,defaultValue:{summary:s.filters}}},connection:{name:"connection",description:"Het connectie object dat wordt aangemaakt door gebruik te maken van `@domg/qlik-lib`",table:{type:{summary:"Qlik"},category:l.aA.PROPERTIES,defaultValue:{summary:s.connection}}},connected:{name:"connected",description:"Afgevuurd wanneer de achterliggende connectie met Qlik is opgezet.",table:{type:{summary:"-"},category:l.aA.EVENTS}},initialized:{name:"initialized",description:"Afgevuurd wanneer de connectie is opgezet en de filters geladen zijn.",table:{type:{summary:"-"},category:l.aA.EVENTS}}}},"./libs/qlik/src/dashboard/vl-qlik-dashboard.component.ts":(e,t,i)=>{"use strict";i.d(t,{E:()=>f});var l=i("./node_modules/lit/index.js"),s=i("./libs/common/utilities/src/index.ts"),a=i("./node_modules/@domg/qlik-lib/build/release/index.js"),r=i("./libs/qlik/src/utils/qlik-render-utils.ts"),n=i("./libs/elements/src/index.ts");let d=Array.from({length:101},(e,t)=>t).map(e=>(0,l.iv)`
        .visual-label-${e}-center {
            width: ${e}%;
            text-align: center;
            display: flex;
            justify-content: center;
            vertical-align: middle;
            font-weight: bold;
        }

        .visual-${e}-center {
            width: ${e}%;
            text-align: center;
            display: flex;
            justify-content: center;
            vertical-align: middle;
        }

        .visual-label-${e}-left {
            width: ${e}%;
            text-align: left;
            display: flex;
            justify-content: left;
            vertical-align: middle;
            font-weight: bold;
        }

        .visual-${e}-left {
            width: ${e}%;
            text-align: left;
            display: flex;
            justify-content: left;
            vertical-align: middle;
        }
    `),o=Array.from({length:13},(e,t)=>t).flatMap(e=>Array.from({length:13},(t,i)=>(0,l.iv)`
            .vl-col--${e}-${i} {
                flex-basis: ${e/i*100}%;
                max-width: ${e/i*100}%;
                min-width: ${e/i*100}%;
            }
        `)),c=[(0,l.iv)`
        .js-vl-select[data-type*='multiple'] .vl-pill__close::before {
            content: '\\f15f';
        }

        .olr-select-alternate {
            background-color: #f3f5f6 !important;
        }
    `];c.push(...d,...o);var u=i("./libs/qlik/src/visual/index.ts"),h=i("./libs/components/src/index.ts");class f extends s.fS{static{(0,s.YV)([u.V,h.xd,h.pK,n.Jp,n.Hd,n.tB,n.AV])}static get styles(){return[n.CX,c]}static get properties(){return{visuals:{type:Array},filters:{type:Array},connection:{type:Object},connected:{type:Boolean,state:!0},initialized:{type:Boolean,state:!0},filtersLoading:{type:Boolean,state:!0},selected:{type:Object,state:!0}}}async firstUpdated(e){if(super.firstUpdated(e),this.connection&&!this.connected&&(this.stardust=await (0,a.To)(this.connection.app),this.connected=!0,this.dispatchEvent(new CustomEvent("connected"))),this.connected&&this.filters&&this.filters.length>0)try{await Promise.all(this.filters.map(e=>this.connection.addFilters(e.filter)))}catch(e){}this.initialized=!0,this.dispatchEvent(new CustomEvent("initialized")),this.search()}updated(e){super.updated(e),this.initialized&&this.filters&&this.filters.length>0&&this.bindFilters()}render(){return this.initialized&&this.connected?(0,l.dy)` ${(0,r.Q8)(this.renderFilters(),this.renderVisualisations())} `:(0,r.Q8)({size:12,template:(0,l.dy)` <vl-loader data-vl-text="Dashboard is aan het laden"></vl-loader>`})}renderFilters(){return this.hasFilters()?{size:2,template:(0,l.dy)`
                <div is="vl-search-filter">
                    <form is="vl-form">
                        <section>
                            <h2>Filters</h2>
                            ${(0,r.Q8)(...this.renderPills(),...this.filters.map(e=>({size:12,id:e.id,template:this.renderFilter(e)})))}
                        </section>
                    </form>
                </div>
            `}:{}}hasFilters(){return this.filters&&0!==this.filters.length}renderPills(){return this.selected&&0!==Object.keys(this.selected).length?this.filtersLoading?[{size:12,template:(0,l.dy)` <vl-loader data-vl-text="Filters zijn aan het laden"></vl-loader> `}]:Object.keys(this.selected).filter(e=>!this.filters.some(t=>this.fieldValue(t)===e)).flatMap(e=>{let t=this.selected[e];return[{size:12,template:(0,l.dy)`
                            <label is="vl-form-label" for="filter-${e}">${e}</label>
                            <div id="filter-${e}">
                                ${t.selections.map(t=>(0,l.dy)` <vl-pill data-vl-closable @close="${()=>this.deselect(e,t)}">
                                        ${t}
                                    </vl-pill>`)}
                                ${t.count>6?(0,l.dy)` <span> en nog ${t.count-6} anderen</span>`:(0,l.dy)``}
                            </div>
                        `}]}):[]}renderFilter(e){return(0,l.dy)`<label is="vl-form-label" for="${e.id}">${e.filter.name}</label> ${this.renderSelect(e)}`}renderSelect(e){return(0,l.dy)` <div class="${this.filtersLoading?"":"vl-u-visually-hidden"}">
                <vl-loader data-vl-text="Filter is aan het laden"></vl-loader>
            </div>
            <div class="${this.filtersLoading?"vl-u-visually-hidden":""}">
                <select
                    is="vl-multiselect"
                    id="${e.id}"
                    @change="${this.changeFilter}"
                ></select>
            </div>`}renderVisualisations(){return{size:this.hasFilters()?10:12,template:(0,r.Q8)(...this.visuals.flatMap(e=>this.renderVisualRow(e)))}}renderVisualRow(e){return e.map(t=>Array.isArray(t)?{size:1,maxSize:e.length,template:(0,r.Q8)(...this.renderVisualRow(t))}:{size:t.colSize||1,maxSize:e.length,template:this.renderVisual(t)})}renderVisual(e){return(0,l.dy)`
            <label is="vl-form-label" for="visual-${e.id}" class="visual-label-100-${e["align-label"]||"left"}"
                >${e.label}</label
            >
            <div style="min-height: ${e.height}">
                <vl-qlik-visual
                    class="visual-100-${e["align-visual"]||"left"}"
                    qlik-id="${e.id}"
                    type="${e.type}"
                    height="${e.height}"
                    width="${e.width}"
                    .stardust="${this.stardust}"
                    .properties="${e.properties}"
                    .options="${e.options}"
                    @visual-changed="${this.visualChanged}"
                    additional-style="position: absolute; width:95%; bottom:0"
                ></vl-qlik-visual>
            </div>
        `}async bindFilters(){let e=(await Promise.all(this.filters.map(async e=>{let t=await this.connection.getFilterValues(e.filter.name,!0);return(0,r.AT)({component:(0,r.fn)(this)(e.id),choices:t.map(e=>({label:e.label,value:e.label,disabled:"excluded"===e.state})),selectedChoices:this.selected[this.fieldValue(e)]?this.selected[this.fieldValue(e)].selections:[]}),{filtername:e.filter.name,values:t,filterid:e.id}}))).reduce((e,t)=>(e[t.filtername]=t,e),{});Object.keys(e).forEach(t=>{(0,r.Oe)(this)(`div[id^="choices-${e[t].filterid}-item"]`).forEach(i=>{let l=i.innerText.trim(),s=e[t].values.find(e=>e.label===l).state;i.classList.remove("olr-select-optional","olr-select-alternate","olr-select-excluded","olr-select-selected"),i.classList.add(`olr-select-${s}`)})})}async changeFilter(e){let t=(0,r.fn)(this)(e.target.id);await this.connection.selectFilters(this.filters.find(t=>t.id===e.target.id).filter.name,t.values),t.focus()}fieldValue(e){return e.filter.field.replaceAll(/\[|\]/g,"")}async deselect(e,t){await this.connection.app.mSelectInField(e,[t],!0)}async visualChanged(){this.filtersLoading=!0,this.search()}search(){(0,r.Ds)({func:async()=>{let e=await this.connection.app.mSelectionsAll();this.selected=e.qSelections.map(e=>{let t=this.filters.find(t=>this.fieldValue(t)===e.qField);if(t){let i=[...(0,r.fn)(this)(t.id).values,...e.qSelectedFieldSelectionInfo.map(e=>e.qName)];(0,r.fn)(this)(t.id).values=i.filter((e,t)=>i.indexOf(e)===t)}return{label:e.qReadableName?e.qReadableName:e.qField,selections:e.qSelectedFieldSelectionInfo.map(e=>e.qName),count:e.qSelectedCount}}).reduce((e,t)=>(e[t.label]={},e[t.label].selections=t.selections,e[t.label].count=t.count,e),{}),this.filtersLoading=!1},delay:1e3,context:this})()}constructor(...e){super(...e),this.filters=[],this.connected=!1,this.initialized=!1,this.filtersLoading=!0,this.selected={}}}f=function(e,t,i,l){var s,a=arguments.length,r=a<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,i):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,l);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(r=(a<3?s(r):a>3?s(t,i,r):s(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r}([(0,s.a6)("vl-qlik-dashboard")],f)},"./libs/qlik/src/utils/qlik-render-utils.ts":(e,t,i)=>{"use strict";i.d(t,{AT:()=>d,DR:()=>f,Ds:()=>h,LZ:()=>p,Oe:()=>u,Q8:()=>r,fn:()=>o});var l=i("./node_modules/lit/directives/repeat.js"),s=i("./node_modules/lit/index.js");let a=e=>e.template,r=(...e)=>{let t=e.filter(a);return 0===t.length?(0,s.dy)``:(0,s.dy)` <div is="vl-grid" data-vl-is-stacked>
        ${(0,l.r)(t,e=>e.id||"",e=>n(e))}
    </div>`},n=({push:e=0,extraSmallSize:t=12,extraSmallMaxSize:i=12,smallSize:l=t,smallMaxSize:a=i,mediumSize:r=l,mediumMaxSize:n=a,size:d=r,maxSize:o=n,template:c=(0,s.dy)``}={})=>(0,s.dy)` <div
        is="vl-column"
        data-vl-push="${e}"
        data-vl-size="${d}"
        data-vl-max-size="${o}"
        data-vl-medium-size="${r}"
        data-vl-medium-max-size="${n}"
        data-vl-small-size="${l}"
        data-vl-small-max-size="${a}"
        data-vl-extra-small-size="${t}"
        data-vl-extra-small-max-size="${i}"
    >
        ${c}
    </div>`,d=({component:e,choices:t,selectedChoices:i,sortFilter:l,placeholder:s})=>{setTimeout(()=>{e.ready().then(()=>{l&&(e.sortFilter=l),s&&t.push({label:s,value:"",placeholder:!0,selected:!0}),i&&t.forEach(e=>e.selected=i.some(t=>t===e.value)),e._choices.removeActiveItems(),e.choices=t})},0)},o=e=>t=>c(e)(`#${t}`),c=e=>t=>e.shadowRoot?e.shadowRoot.querySelector(t):e.querySelector(t),u=e=>t=>e.shadowRoot?e.shadowRoot.querySelectorAll(t):e.querySelectorAll(t),h=({func:e,delay:t=100,context:i})=>{let l;return(...s)=>{let a=e.bind(i,...s);clearTimeout(l),l=setTimeout(a,t)}},f=e=>(t,i)=>{let l=e(t),s=e(i);return l===s?0:l<s?-1:1},p=(e,t)=>{(async()=>{e.setAttribute("disabled",""),e.setAttribute("loading",""),await t()})().catch(e=>{console.log(e)}).finally(()=>{e.removeAttribute("disabled",""),e.removeAttribute("loading","")})}},"./libs/qlik/src/visual/index.ts":(e,t,i)=>{"use strict";i.d(t,{V:()=>l.V});var l=i("./libs/qlik/src/visual/vl-qlik-visual.component.ts")},"./libs/qlik/src/visual/vl-qlik-visual.component.ts":(e,t,i)=>{"use strict";i.d(t,{V:()=>r});var l=i("./node_modules/lit/index.js"),s=i("./libs/common/utilities/src/index.ts"),a=i("./libs/elements/src/index.ts");class r extends s.fS{static get styles(){return[a.CX]}static get properties(){return{type:{type:String,attribute:"type",reflect:!0},qlikId:{type:String,attribute:"qlik-id",reflect:!0},height:{type:String,attribute:"height",reflect:!0},width:{type:String,attribute:"width",reflect:!0},additionalStyle:{type:String,attribute:"additional-style",reflect:!0},properties:{type:Object},stardust:{type:Object}}}async updated(e){super.updated(e),this.visual&&this.visual.destroy(),this.visual=await this.stardust?.render({element:this.shadowRoot.getElementById(`visual-${this.qlikId}`),id:this.qlikId,type:this.type,properties:this.properties}),this.visual?.model.on("changed",(()=>{this.dispatchEvent(new CustomEvent("visual-changed"))}).bind(this)),"distributionplot"===this.type&&await this.visual?.__DO_NOT_USE__.applyProperties(this.properties)}render(){let e=(0,l.iv)`
            ${(0,l.$m)(`${this.additionalStyle};height: ${this.height};${this.width?`width: ${this.width}`:""}`)}
        `;return(0,l.dy)` <div id="visual-${this.qlikId}" style="${e}"></div> `}disconnectedCallback(){super.disconnectedCallback(),this.visual&&this.visual.destroy()}constructor(...e){super(...e),this.type="",this.qlikId="",this.height="",this.width="",this.additionalStyle=""}}r=function(e,t,i,l){var s,a=arguments.length,r=a<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,i):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,l);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(r=(a<3?s(r):a>3?s(t,i,r):s(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r}([(0,s.a6)("vl-qlik-visual")],r)},"./libs/qlik/src/utils/stories/demo-filters.json":e=>{"use strict";e.exports=JSON.parse('[{"id":"acteur","filter":{"name":"Acteur","fieldQualifier":"qText","field":"[Actor]","nrOfValues":1000}},{"id":"decennium","filter":{"name":"Decennium","fieldQualifier":"qText","field":"[Decade]","nrOfValues":1000}},{"id":"lengte","filter":{"name":"Lengte","fieldQualifier":"qText","field":"[Length]","nrOfValues":1000}},{"id":"titel","filter":{"name":"Titel","fieldQualifier":"qText","field":"[Title]","nrOfValues":1000}},{"id":"jaar","filter":{"name":"Jaar","fieldQualifier":"qText","field":"[Year]","nrOfValues":1000}},{"id":"lengte-interval","filter":{"name":"Lengte (interval)","fieldQualifier":"qText","field":"[Length Range]","nrOfValues":1000}}]')},"./libs/qlik/src/utils/stories/demo-visuals-without-views.json":e=>{"use strict";e.exports=JSON.parse('[[{"id":"RXjdD","height":"300px","width":"200px","type":"kpi","label":"Numbers of movies","align-label":"center","align-visual":"center"},{"id":"mkK","height":"300px","width":"200px","type":"kpi","label":"Number of actors"}],[{"id":"fYuwtB","height":"300px","type":"barchart","label":"Numbers of movies by directors","align-label":"center","align-visual":"center"},{"id":"BkkbCGp","height":"300px","type":"barchart","label":"Number of movies by rating"},{"id":"fARUNP","height":"300px","type":"barchart","label":"Number of movies by decade > year"}],[{"id":"mMm","height":"400px","type":"linechart","label":"Movies filmed by year","align-label":"center","align-visual":"center"},{"id":"mjjeKJk","height":"400px","type":"piechart","label":"Avg rating"}]]')}}]);