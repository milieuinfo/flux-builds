"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[143],{"./libs/components/src/next/cascader/vl-cascader-item.component.ts":(e,t,s)=>{s.d(t,{D:()=>m});var i=s("./node_modules/lit/index.js"),a=s("./libs/common/utilities/src/index.ts"),l=s("./node_modules/lit/decorators.js"),n=s("./node_modules/@domg/govflanders-style/common/index.js"),r=s("./libs/elements/src/index.ts");let d=(0,i.iv)`
    :host {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
    }

    .space-between {
        justify-content: space-between;
        align-items: center;
    }

    .vl-cascader-link {
        display: flex;
        min-height: 4rem;
        align-items: center;
        width: 100%;
    }
`;var o=s("./libs/components/src/next/cascader/vl-cascader.model.ts"),c=s("./libs/components/src/next/cascader/vl-cascader.utils.ts");class m extends a.fS{static get properties(){return{label:{type:String},templateType:{type:String,attribute:"template-type"},item:{type:Object},annotation:{type:String}}}static get styles(){return[n.YN,r.CX,d]}connectedCallback(){super.connectedCallback(),this.updateItemData()}updateItemData(){null!=this.label&&(this.item.label=this.label,this.item.templateType=this.templateType),this.item.annotation=this.annotation}render(){let e;let t=this.cascaderRef,s=!!a.F1(this,o.r.LABEL)?.length,{templateType:l}=this.item;return l&&t?e=(0,c.F4)(this.item,t):t&&(e=(0,c.lB)(this.item,t,s)),t&&e?(0,i.dy)`${e} ${(0,i.dy)`<slot name="content"></<slot>`}`:(0,i.dy)`
                  ${s?(0,i.dy)`<slot name="label"></slot>`:(0,c.GV)(this.item)}
                  <slot name="content"></slot>
              `}constructor(...e){super(...e),this.item={label:o.L.LABEL_MISSING},this.label=o.L.LABEL_MISSING}}m=function(e,t,s,i){var a,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,s,i);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(n=(l<3?a(n):l>3?a(t,s,n):a(t,s))||n);return l>3&&n&&Object.defineProperty(t,s,n),n}([(0,l.Mo)("vl-cascader-item")],m)},"./libs/components/src/next/cascader/vl-cascader.component.ts":(e,t,s)=>{s.d(t,{u:()=>u});var i=s("./node_modules/lit/index.js"),a=s("./libs/common/utilities/src/index.ts"),l=s("./node_modules/lit/decorators.js"),n=s("./node_modules/@domg/govflanders-style/common/index.js"),r=s("./libs/elements/src/index.ts"),d=s("./node_modules/@domg/govflanders-style/component/index.js");let o=(0,i.iv)`
    :host {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    header {
        border-bottom: 1px solid #cbd2da;
        padding-left: 1.5rem;
    }

    h4 {
        margin: 1.8rem 0;
    }

    div.content {
        overflow: hidden;
    }

    div.content section {
        transition: transform 0.3s;
        position: relative;
        display: flex;
        flex-direction: column;
        align-content: space-between;
        left: 0;
        right: 0;
        opacity: 1;
        width: 100%;
        padding: 0 1.5rem 0.5rem 1.5rem;
    }

    div.content section.slide-in {
        animation: slideIn 0.3s ease-in-out;
    }
    div.content section.slide-out {
        animation: slideOut 0.3s ease-in-out;
    }

    @keyframes slideIn {
        from {
            left: 100%;
        }
        to {
            left: 0;
        }
    }

    @keyframes slideOut {
        from {
            left: -100%;
        }
        to {
            left: 0;
        }
    }

    .vl-breadcrumb-placeholder {
        padding: 0.5rem 1.5rem;
        min-height: 4rem;
        border-bottom: 1px solid rgb(203, 210, 218);
        display: flex;
        align-items: center;
    }

    .vl-breadcrumb {
        padding: 0.5rem 1.5rem;
        min-height: 4rem;
        border-bottom: 1px solid rgb(203, 210, 218);
    }

    .vl-breadcrumb__list__item__cta {
        display: flex;
        align-items: center;
        position: relative;
        top: -1px;
    }

    .vl-breadcrumb__list__item__separator {
        justify-content: center;
    }

    .vl-breadcrumb__list__item__cta:hover {
        text-decoration: none;
    }

    .vl-breadcrumb__list__item .vl-vi {
        text-decoration: none;
    }

    vl-loader {
        padding-top: 2rem;
    }

    .vl-cascader-link {
        display: flex;
        min-height: 4rem;
        align-items: center;
        width: 100%;
    }

    .vl-cascader-item,
    vl-cascader-item {
        padding: 1rem 0;
        display: flex;
        flex-direction: column;
    }

    .vl-cascader-item:not(:last-child),
    vl-cascader-item:not(:last-child) {
        border-bottom: 1px solid #cbd2da;
    }

    .space-between {
        justify-content: space-between;
    }
`;var c=s("./node_modules/lit/directives/class-map.js"),m=s("./libs/components/src/next/cascader/vl-cascader.utils.ts"),h=s("./libs/components/src/next/cascader/vl-cascader.model.ts"),p=s("./libs/components/src/next/cascader/vl-cascader-item.component.ts");let u={annotation:"",breadcrumbPlaceholder:"",level:0,hideBreadcrumb:!1,loading:!1,itemListFn:null,items:[],label:h.L.LABEL_MISSING,loadingMessage:h.L.LOADING,templates:null,headerText:""};class b extends a.fS{static{(0,a.YV)([p.D])}static get properties(){return{headerText:{type:String,attribute:"header-text"},level:{type:Number,reflect:!0},hideBreadcrumb:{type:Boolean,attribute:"hide-breadcrumb"},loadingMessage:{type:String,attribute:"loading-message"},loading:{type:Boolean,reflect:!0},itemListFn:{type:Function},templates:{type:Map},nodeData:{type:Array,state:!0}}}static get styles(){return[n.YN,r.CX,d.nC,o]}connectedCallback(){super.connectedCallback(),this.setData()}isDeclarativeMode(){return!this.items||!this.items.length}set items(e){this.nodeData=e}get items(){return this.nodeData}setData(){let e=this.traverseTreeAndMapItems(this);this.isDeclarativeMode()&&e?.length?this.nodeData=e:this.nodeData=this.items}pushItemStack(e,t){e&&t&&(this.level=this.navigationLevelStack.push(t),this.breadCrumbHistory.push({label:e,index:this.level}))}popItemStack(){this.nodeData=this.navigationLevelStack.pop()||[],this.level=(this.breadCrumbHistory.pop()?.index||1)-1}goBack(){this.loading||(this.navigationLevelStack.length>0&&(this.slidingOut=!0,this.popItemStack()),this.requestUpdate())}jumpToLevel(e){if(this.loading)return;let t=this.navigationLevelStack.length-e;t>0&&Array.from({length:t}).map(()=>{this.goBack()})}renderHeader(){return a.F1(this,"header")?.length?(0,i.dy)`
                  <header>
                      <slot name="header"></slot>
                  </header>
              `:this.headerText?(0,i.dy)`
                  <header class="vl-header">
                      <h4 is="vl-h4" class="vl-header__title vl-label vl-label--h4">${this.headerText}</h4>
                  </header>
              `:i.Ld}renderBreadcrumb(){let e=this.breadCrumbHistory?.length,t=!!a.F1(this,h.r.BREADCRUMB_PLACEHOLDER)?.length;return(0,i.dy)`
            ${e&&!this.hideBreadcrumb?(0,i.dy)`
                      <nav aria-label="U bent hier: " class="vl-breadcrumb">
                          <ol class="vl-breadcrumb__list">
                              ${this.renderBreadcrumbHome()} ${this.breadCrumbHistory?.map(this.renderBreadcrumbItem)}
                          </ol>
                      </nav>
                  `:t||!this.hideBreadcrumb?(0,i.dy)`
                      <nav class="vl-breadcrumb-placeholder">
                          <slot name="breadcrumb-placeholder"></slot>
                      </nav>
                  `:i.Ld}
        `}defaultItemTemplate(e){return(0,m.lB)(e,this)}updated(e){super.updated(e),e.has("level")?this.jumpToLevel(this.level):e.has("items")&&(this.nodeData=this.items)}render(){let e={"slide-in":this.slidingIn&&!this.slidingOut,"slide-out":this.slidingOut&&!this.slidingIn};return(0,i.dy)`
            <div>
                ${this.renderBreadcrumb()} ${this.renderHeader()}
                <div class="content">
                    <section class=${(0,c.$)(e)} @animationend=${this.handleAnimationEnd}>
                        ${this.loading?(0,i.dy)` <vl-loader data-vl-text=${this.loadingMessage}></vl-loader> `:this.nodeData?.map(this.renderItem)}
                    </section>
                </div>
            </div>
        `}handleAnimationEnd(){this.slidingIn=!1,this.slidingOut=!1,this.requestUpdate()}constructor(...e){super(...e),this.hideBreadcrumb=u.hideBreadcrumb,this.level=u.level,this.loadingMessage=u.loadingMessage,this.headerText=u.headerText,this.loading=u.loading,this.nodeData=[],this.navigationLevelStack=[],this.breadCrumbHistory=[],this.slidingIn=!1,this.slidingOut=!1,this.processNarrowDown=async e=>{if(this.loading)return;let{label:t,children:s,narrowDown:i}=e;s?.length?(this.pushItemStack(t,this.nodeData),this.nodeData=s,this.slidingIn=!0,this.requestUpdate()):i&&this.itemListFn&&(this.loading=!0,this.pushItemStack(t,this.nodeData),this.requestUpdate(),this.nodeData=await this.itemListFn(e),this.loading=!1,this.slidingIn=!0,this.requestUpdate())},this.handleBreadcrumbClick=(e,t)=>{this.jumpToLevel(e),this.dispatchEvent(new CustomEvent("vl-click-breadcrumb",{composed:!0,bubbles:!0,detail:{levelClicked:e,label:t}}))},this.renderBreadcrumbHome=()=>{let e=!!a.F1(this,h.r.HOME)?.length;return(0,i.dy)`
            <li class="vl-breadcrumb__list__item">
                <span class="vl-breadcrumb__list__item__separator" aria-hidden="true"></span>
                ${e?(0,i.dy)`
                              <span
                                  @click=${()=>this.handleBreadcrumbClick(0)}
                                  class="vl-breadcrumb__list__item__cta vl-breadcrumb-home-slot"
                              >
                                  <slot name="home"></slot>
                              </span>
                          `:(0,i.dy)`
                              <span
                                  is="vl-icon"
                                  data-vl-icon="places-home"
                                  class="vl-breadcrumb__list__item__cta"
                                  @click=${()=>this.handleBreadcrumbClick(0)}
                              ></span>
                          `}
                </span>
            </li>
        `},this.renderBreadcrumbItem=({label:e,index:t})=>{let s=this.breadCrumbHistory?.length;return(0,i.dy)`
            <li class="vl-breadcrumb__list__item ${(0,c.$)({"vl-breadcrumb__list__item--deactivated":s===t})}">
                <span class="vl-breadcrumb__list__item__separator" aria-hidden="true"></span>
                <span class="vl-breadcrumb__list__item__cta" @click=${()=>this.handleBreadcrumbClick(t,e)}
                    >${e}</span
                >
            </li>
        `},this.renderItem=e=>{let t=(0,m.F4)(e,this);return e.component?e.component:t||this.defaultItemTemplate(e)},this.getChildCascaderNodes=e=>e.querySelectorAll(":scope > vl-cascader-item"),this.traverseTreeAndMapItems=e=>{let t=this.getChildCascaderNodes(e),s=[];return t.forEach(e=>{let t=this.traverseTreeAndMapItems(e);e.item&&(e.item.children=t),e.cascaderRef=this,s.push({...e.item,label:e.label,component:e,children:t})}),s}}}b=function(e,t,s,i){var a,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,s,i);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(n=(l<3?a(n):l>3?a(t,s,n):a(t,s))||n);return l>3&&n&&Object.defineProperty(t,s,n),n}([(0,l.Mo)("vl-cascader")],b)},"./libs/components/src/next/cascader/vl-cascader.model.ts":(e,t,s)=>{s.d(t,{L:()=>i,r:()=>a});let i={LOADING:"Aan het laden",LABEL_MISSING:"geen label"},a={HEADER:"header",BREADCRUMB_PLACEHOLDER:"breadcrumb-placeholder",CONTENT:"content",HOME:"home",LABEL:"label"}},"./libs/components/src/next/cascader/vl-cascader.utils.ts":(e,t,s)=>{s.d(t,{F4:()=>l,GV:()=>r,lB:()=>n});var i=s("./node_modules/lit/index.js"),a=s("./node_modules/lit/directives/class-map.js");let l=(e,t)=>{let{templateType:s}=e;if(!t)return;let{templates:i}=t;if(s&&i&&i instanceof Map){let a=i.get(s);return a&&a(e,t.processNarrowDown)}},n=(e,t,s=!1)=>{let l={"vl-cascader-item":!t.isDeclarativeMode()};return(0,i.dy)`
        <div
            class=${(0,a.$)(l)}
            @click=${s=>{t?.processNarrowDown(e)}}
        >
            ${s?(0,i.dy)`<slot name="label">${e.label}</slot>`:r(e)}
        </div>
    `},r=e=>{let t=e.children&&e.children.length||e.narrowDown;return(0,i.dy)`
        <a is="vl-link" class="vl-link--bold vl-cascader-link ${(0,a.$)({"space-between":!!t})}">
            <span>${e.label}</span> ${t?(0,i.dy)` <span is="vl-icon" data-vl-icon="arrow-right-fat"></span> `:""}
        </a>
        ${e.annotation?(0,i.dy)`<vl-annotation>${e.annotation}</vl-annotation>`:i.Ld}
    `}}}]);