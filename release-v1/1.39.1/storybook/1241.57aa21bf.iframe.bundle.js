"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[1241],{"../../libs/qlik/src/dashboard/stories/vl-qlik-dashboard.stories-arg.ts":(e,t,i)=>{i.d(t,{f:()=>a,x:()=>s});var l=i("../../libs/common/storybook/src/index.ts");let s={...l.D8,visuals:null,filters:null,connection:null,connected:(0,l.Hh)("connected"),initialized:(0,l.Hh)("initialized")},a={...(0,l.RN)(!0),visuals:{name:"visuals",description:"Het object dat de eigenlijke visualisatie config bevat",table:{type:{summary:"DashboardVisualization[][]"},category:l.R6.PROPERTIES,defaultValue:{summary:s.visuals}}},filters:{name:"filters",description:"De filters die toegepast moeten worden op het Qlik object",table:{type:{summary:"Filter[]"},category:l.R6.PROPERTIES,defaultValue:{summary:s.filters}}},connection:{name:"connection",description:"Het connectie object dat wordt aangemaakt door gebruik te maken van `@domg/qlik-lib`",table:{type:{summary:"Qlik"},category:l.R6.PROPERTIES,defaultValue:{summary:s.connection}}},connected:{name:"connected",description:"Afgevuurd wanneer de achterliggende connectie met Qlik is opgezet.",table:{type:{summary:"-"},category:l.R6.EVENTS}},initialized:{name:"initialized",description:"Afgevuurd wanneer de connectie is opgezet en de filters geladen zijn.",table:{type:{summary:"-"},category:l.R6.EVENTS}}}},"../../libs/qlik/src/dashboard/vl-qlik-dashboard.component.ts":(e,t,i)=>{i.d(t,{j:()=>f});var l=i("../../node_modules/lit/index.js"),s=i("../../libs/common/utilities/src/index.ts"),a=i("../../node_modules/@domg/qlik-lib/build/release/index.js"),r=i("../../libs/qlik/src/utils/qlik-render-utils.ts"),n=i("../../libs/elements/src/index.ts");let d=Array.from({length:101},(e,t)=>t).map(e=>(0,l.AH)`
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
    `),o=Array.from({length:13},(e,t)=>t).flatMap(e=>Array.from({length:13},(t,i)=>(0,l.AH)`
            .vl-col--${e}-${i} {
                flex-basis: ${e/i*100}%;
                max-width: ${e/i*100}%;
                min-width: ${e/i*100}%;
            }
        `)),c=[(0,l.AH)`
        .js-vl-select[data-type*='multiple'] .vl-pill__close::before {
            content: '\\f15f';
        }

        .olr-select-alternate {
            background-color: #f3f5f6 !important;
        }
    `];c.push(...d,...o);var h=i("../../libs/qlik/src/visual/index.ts"),u=i("../../libs/components/src/index.ts");class f extends s.jW{static{(0,s.gy)([h.F,u.H,u.ns,n.r4,n.nK,n.Pv,n.ym])}static get styles(){return[n.hF,c]}static get properties(){return{visuals:{type:Array},filters:{type:Array},connection:{type:Object},connected:{type:Boolean,state:!0},initialized:{type:Boolean,state:!0},filtersLoading:{type:Boolean,state:!0},selected:{type:Object,state:!0}}}async firstUpdated(e){if(super.firstUpdated(e),this.connection&&!this.connected&&(this.stardust=await (0,a.rp)(this.connection.app),this.connected=!0,this.dispatchEvent(new CustomEvent("connected"))),this.connected&&this.filters&&this.filters.length>0)try{await Promise.all(this.filters.map(e=>this.connection.addFilters(e.filter)))}catch(e){}this.initialized=!0,this.dispatchEvent(new CustomEvent("initialized")),this.search()}updated(e){super.updated(e),this.initialized&&this.filters&&this.filters.length>0&&this.bindFilters()}render(){return this.initialized&&this.connected?(0,l.qy)` ${(0,r.xT)(this.renderFilters(),this.renderVisualisations())} `:(0,r.xT)({size:12,template:(0,l.qy)` <vl-loader data-vl-text="Dashboard is aan het laden"></vl-loader>`})}renderFilters(){return this.hasFilters()?{size:2,template:(0,l.qy)`
                <div is="vl-search-filter">
                    <form is="vl-form">
                        <section>
                            <h2>Filters</h2>
                            ${(0,r.xT)(...this.renderPills(),...this.filters.map(e=>({size:12,id:e.id,template:this.renderFilter(e)})))}
                        </section>
                    </form>
                </div>
            `}:{}}hasFilters(){return this.filters&&0!==this.filters.length}renderPills(){return this.selected&&0!==Object.keys(this.selected).length?this.filtersLoading?[{size:12,template:(0,l.qy)` <vl-loader data-vl-text="Filters zijn aan het laden"></vl-loader> `}]:Object.keys(this.selected).filter(e=>!this.filters.some(t=>this.fieldValue(t)===e)).flatMap(e=>{let t=this.selected[e];return[{size:12,template:(0,l.qy)`
                            <label is="vl-form-label" for="filter-${e}">${e}</label>
                            <div id="filter-${e}">
                                ${t.selections.map(t=>(0,l.qy)` <vl-pill data-vl-closable @close="${()=>this.deselect(e,t)}">
                                        ${t}
                                    </vl-pill>`)}
                                ${t.count>6?(0,l.qy)` <span> en nog ${t.count-6} anderen</span>`:(0,l.qy)``}
                            </div>
                        `}]}):[]}renderFilter(e){return(0,l.qy)`<label is="vl-form-label" for="${e.id}">${e.filter.name}</label> ${this.renderSelect(e)}`}renderSelect(e){return(0,l.qy)` <div class="${this.filtersLoading?"":"vl-u-visually-hidden"}">
                <vl-loader data-vl-text="Filter is aan het laden"></vl-loader>
            </div>
            <div class="${this.filtersLoading?"vl-u-visually-hidden":""}">
                <select
                    is="vl-multiselect"
                    id="${e.id}"
                    @change="${this.changeFilter}"
                ></select>
            </div>`}renderVisualisations(){return{size:this.hasFilters()?10:12,template:(0,r.xT)(...this.visuals.flatMap(e=>this.renderVisualRow(e)))}}renderVisualRow(e){return e.map(t=>Array.isArray(t)?{size:1,maxSize:e.length,template:(0,r.xT)(...this.renderVisualRow(t))}:{size:t.colSize||1,maxSize:e.length,template:this.renderVisual(t)})}renderVisual(e){return(0,l.qy)`
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
        `}async bindFilters(){let e=(await Promise.all(this.filters.map(async e=>{let t=await this.connection.getFilterValues(e.filter.name,!0);return(0,r.ue)({component:(0,r.VN)(this)(e.id),choices:t.map(e=>({label:e.label,value:e.label,disabled:"excluded"===e.state})),selectedChoices:this.selected[this.fieldValue(e)]?this.selected[this.fieldValue(e)].selections:[]}),{filtername:e.filter.name,values:t,filterid:e.id}}))).reduce((e,t)=>(e[t.filtername]=t,e),{});Object.keys(e).forEach(t=>{(0,r.it)(this)(`div[id^="choices-${e[t].filterid}-item"]`).forEach(i=>{let l=i.innerText.trim(),s=e[t].values.find(e=>e.label===l).state;i.classList.remove("olr-select-optional","olr-select-alternate","olr-select-excluded","olr-select-selected"),i.classList.add(`olr-select-${s}`)})})}async changeFilter(e){let t=(0,r.VN)(this)(e.target.id);await this.connection.selectFilters(this.filters.find(t=>t.id===e.target.id).filter.name,t.values),t.focus()}fieldValue(e){return e.filter.field.replaceAll(/\[|\]/g,"")}async deselect(e,t){await this.connection.app.mSelectInField(e,[t],!0)}async visualChanged(){this.filtersLoading=!0,this.search()}search(){(0,r.sg)({func:async()=>{let e=await this.connection.app.mSelectionsAll();this.selected=e.qSelections.map(e=>{let t=this.filters.find(t=>this.fieldValue(t)===e.qField);if(t){let i=[...(0,r.VN)(this)(t.id).values,...e.qSelectedFieldSelectionInfo.map(e=>e.qName)];(0,r.VN)(this)(t.id).values=i.filter((e,t)=>i.indexOf(e)===t)}return{label:e.qReadableName?e.qReadableName:e.qField,selections:e.qSelectedFieldSelectionInfo.map(e=>e.qName),count:e.qSelectedCount}}).reduce((e,t)=>(e[t.label]={},e[t.label].selections=t.selections,e[t.label].count=t.count,e),{}),this.filtersLoading=!1},delay:1e3,context:this})()}constructor(...e){super(...e),this.filters=[],this.connected=!1,this.initialized=!1,this.filtersLoading=!0,this.selected={}}}f=function(e,t,i,l){var s,a=arguments.length,r=a<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,i):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,l);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(r=(a<3?s(r):a>3?s(t,i,r):s(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r}([(0,s.M1)("vl-qlik-dashboard")],f)},"../../libs/qlik/src/utils/qlik-render-utils.ts":(e,t,i)=>{i.d(t,{ue:()=>u,ld:()=>y,sg:()=>m,bF:()=>b,VN:()=>f,it:()=>v,xT:()=>c});var l=i("../../node_modules/lit-html/lit-html.js"),s=i("../../node_modules/lit-html/directive.js"),a=i("../../node_modules/lit-html/directive-helpers.js"),r=(e,t,i)=>{for(var l=new Map,s=t;s<=i;s++)l.set(e[s],s);return l},n=(0,s.u$)(class extends s.WL{constructor(e){if(super(e),e.type!==s.OA.CHILD)throw Error("repeat() can only be used in text expressions")}ht(e,t,i){void 0===i?i=t:void 0!==t&&(l=t);var l,s=[],a=[],r=0;for(var n of e)s[r]=l?l(n,r):r,a[r]=i(n,r),r++;return{values:a,keys:s}}render(e,t,i){return this.ht(e,t,i).values}update(e,t){var[i,s,n]=t,d=(0,a.cN)(e),{values:o,keys:c}=this.ht(i,s,n);if(!Array.isArray(d))return this.dt=c,o;for(var h,u,f,p=null!==(h=this.dt)&&void 0!==h?h:this.dt=[],v=[],m=0,y=d.length-1,b=0,g=o.length-1;m<=y&&b<=g;)if(null===d[m])m++;else if(null===d[y])y--;else if(p[m]===c[b])v[b]=(0,a.lx)(d[m],o[b]),m++,b++;else if(p[y]===c[g])v[g]=(0,a.lx)(d[y],o[g]),y--,g--;else if(p[m]===c[g])v[g]=(0,a.lx)(d[m],o[g]),(0,a.Dx)(e,v[g+1],d[m]),m++,g--;else if(p[y]===c[b])v[b]=(0,a.lx)(d[y],o[b]),(0,a.Dx)(e,d[m],d[y]),y--,b++;else if(void 0===u&&(u=r(c,b,g),f=r(p,m,y)),u.has(p[m])){if(u.has(p[y])){var x=f.get(c[b]),$=void 0!==x?d[x]:null;if(null===$){var q=(0,a.Dx)(e,d[m]);(0,a.lx)(q,o[b]),v[b]=q}else v[b]=(0,a.lx)($,o[b]),(0,a.Dx)(e,d[m],$),d[x]=null;b++}else(0,a.KO)(d[y]),y--}else(0,a.KO)(d[m]),m++;for(;b<=g;){var k=(0,a.Dx)(e,v[g+1]);(0,a.lx)(k,o[b]),v[b++]=k}for(;m<=y;){var w=d[m++];null!==w&&(0,a.KO)(w)}return this.dt=c,(0,a.mY)(e,v),l.c0}}),d=i("../../node_modules/lit/index.js");let o=e=>e.template,c=(...e)=>{let t=e.filter(o);return 0===t.length?(0,d.qy)``:(0,d.qy)` <div is="vl-grid" data-vl-is-stacked>
        ${n(t,e=>e.id||"",e=>h(e))}
    </div>`},h=({push:e=0,extraSmallSize:t=12,extraSmallMaxSize:i=12,smallSize:l=t,smallMaxSize:s=i,mediumSize:a=l,mediumMaxSize:r=s,size:n=a,maxSize:o=r,template:c=(0,d.qy)``}={})=>(0,d.qy)` <div
        is="vl-column"
        data-vl-push="${e}"
        data-vl-size="${n}"
        data-vl-max-size="${o}"
        data-vl-medium-size="${a}"
        data-vl-medium-max-size="${r}"
        data-vl-small-size="${l}"
        data-vl-small-max-size="${s}"
        data-vl-extra-small-size="${t}"
        data-vl-extra-small-max-size="${i}"
    >
        ${c}
    </div>`,u=({component:e,choices:t,selectedChoices:i,sortFilter:l,placeholder:s})=>{setTimeout(()=>{e.ready().then(()=>{l&&(e.sortFilter=l),s&&t.push({label:s,value:"",placeholder:!0,selected:!0}),i&&t.forEach(e=>e.selected=i.some(t=>t===e.value)),e._choices.removeActiveItems(),e.choices=t})},0)},f=e=>t=>p(e)(`#${t}`),p=e=>t=>e.shadowRoot?e.shadowRoot.querySelector(t):e.querySelector(t),v=e=>t=>e.shadowRoot?e.shadowRoot.querySelectorAll(t):e.querySelectorAll(t),m=({func:e,delay:t=100,context:i})=>{let l;return(...s)=>{let a=e.bind(i,...s);clearTimeout(l),l=setTimeout(a,t)}},y=e=>(t,i)=>{let l=e(t),s=e(i);return l===s?0:l<s?-1:1},b=(e,t)=>{(async()=>{e.setAttribute("disabled",""),e.setAttribute("loading",""),await t()})().catch(e=>{console.log(e)}).finally(()=>{e.removeAttribute("disabled",""),e.removeAttribute("loading","")})}},"../../libs/qlik/src/visual/index.ts":(e,t,i)=>{i.d(t,{F:()=>l.F});var l=i("../../libs/qlik/src/visual/vl-qlik-visual.component.ts")},"../../libs/qlik/src/visual/vl-qlik-visual.component.ts":(e,t,i)=>{i.d(t,{F:()=>r});var l=i("../../node_modules/lit/index.js"),s=i("../../libs/common/utilities/src/index.ts"),a=i("../../libs/elements/src/index.ts");class r extends s.jW{static get styles(){return[a.hF]}static get properties(){return{type:{type:String,attribute:"type",reflect:!0},qlikId:{type:String,attribute:"qlik-id",reflect:!0},height:{type:String,attribute:"height",reflect:!0},width:{type:String,attribute:"width",reflect:!0},additionalStyle:{type:String,attribute:"additional-style",reflect:!0},properties:{type:Object},stardust:{type:Object}}}async updated(e){super.updated(e),this.visual&&this.visual.destroy(),this.visual=await this.stardust?.render({element:this.shadowRoot.getElementById(`visual-${this.qlikId}`),id:this.qlikId,type:this.type,properties:this.properties}),this.visual?.model.on("changed",(()=>{this.dispatchEvent(new CustomEvent("visual-changed"))}).bind(this)),"distributionplot"===this.type&&await this.visual?.__DO_NOT_USE__.applyProperties(this.properties)}render(){let e=(0,l.AH)`
            ${(0,l.iz)(`${this.additionalStyle};height: ${this.height};${this.width?`width: ${this.width}`:""}`)}
        `;return(0,l.qy)` <div id="visual-${this.qlikId}" style="${e}"></div> `}disconnectedCallback(){super.disconnectedCallback(),this.visual&&this.visual.destroy()}constructor(...e){super(...e),this.type="",this.qlikId="",this.height="",this.width="",this.additionalStyle=""}}r=function(e,t,i,l){var s,a=arguments.length,r=a<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,i):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,l);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(r=(a<3?s(r):a>3?s(t,i,r):s(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r}([(0,s.M1)("vl-qlik-visual")],r)},"../../libs/qlik/src/utils/stories/demo-filters.json":e=>{e.exports=JSON.parse('[{"id":"acteur","filter":{"name":"Acteur","fieldQualifier":"qText","field":"[Actor]","nrOfValues":1000}},{"id":"decennium","filter":{"name":"Decennium","fieldQualifier":"qText","field":"[Decade]","nrOfValues":1000}},{"id":"lengte","filter":{"name":"Lengte","fieldQualifier":"qText","field":"[Length]","nrOfValues":1000}},{"id":"titel","filter":{"name":"Titel","fieldQualifier":"qText","field":"[Title]","nrOfValues":1000}},{"id":"jaar","filter":{"name":"Jaar","fieldQualifier":"qText","field":"[Year]","nrOfValues":1000}},{"id":"lengte-interval","filter":{"name":"Lengte (interval)","fieldQualifier":"qText","field":"[Length Range]","nrOfValues":1000}}]')},"../../libs/qlik/src/utils/stories/demo-visuals-without-views.json":e=>{e.exports=JSON.parse('[[{"id":"RXjdD","height":"300px","width":"200px","type":"kpi","label":"Numbers of movies","align-label":"center","align-visual":"center"},{"id":"mkK","height":"300px","width":"200px","type":"kpi","label":"Number of actors"}],[{"id":"fYuwtB","height":"300px","type":"barchart","label":"Numbers of movies by directors","align-label":"center","align-visual":"center"},{"id":"BkkbCGp","height":"300px","type":"barchart","label":"Number of movies by rating"},{"id":"fARUNP","height":"300px","type":"barchart","label":"Number of movies by decade > year"}],[{"id":"mMm","height":"400px","type":"linechart","label":"Movies filmed by year","align-label":"center","align-visual":"center"},{"id":"mjjeKJk","height":"400px","type":"piechart","label":"Avg rating"}]]')}}]);