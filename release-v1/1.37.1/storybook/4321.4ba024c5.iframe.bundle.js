"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[4321],{"../../libs/components/src/next/cascader/vl-cascader-item.component.ts":(e,t,s)=>{s.d(t,{L:()=>m});var a=s("../../node_modules/lit/index.js"),i=s("../../libs/common/utilities/src/index.ts"),l=s("../../node_modules/lit/decorators.js"),n=s("../../node_modules/@domg/govflanders-style/common/index.js"),r=s("../../libs/elements/src/index.ts");let d=(0,a.AH)`
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
`;var c=s("../../libs/components/src/next/cascader/vl-cascader.model.ts"),o=s("../../libs/components/src/next/cascader/vl-cascader.utils.ts");class m extends i.jW{static get properties(){return{label:{type:String},templateType:{type:String,attribute:"template-type"},item:{type:Object},annotation:{type:String}}}static get styles(){return[n.h8,r.hF,d]}connectedCallback(){super.connectedCallback(),this.updateItemData()}updateItemData(){null!=this.label&&(this.item.label=this.label,this.item.templateType=this.templateType),this.item.annotation=this.annotation}render(){let e;let t=this.cascaderRef,s=!!i.ax(this,c.z.LABEL)?.length,{templateType:l}=this.item;return l&&t?e=(0,o.m)(this.item,t):t&&(e=(0,o.Zo)(this.item,t,s)),t&&e?(0,a.qy)`${e} ${(0,a.qy)`<slot name="content"></<slot>`}`:(0,a.qy)`
                  ${s?(0,a.qy)`<slot name="label"></slot>`:(0,o.jP)(this.item)}
                  <slot name="content"></slot>
              `}constructor(...e){super(...e),this.item={label:c._.LABEL_MISSING},this.label=c._.LABEL_MISSING}}m=function(e,t,s,a){var i,l=arguments.length,n=l<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,s,a);else for(var r=e.length-1;r>=0;r--)(i=e[r])&&(n=(l<3?i(n):l>3?i(t,s,n):i(t,s))||n);return l>3&&n&&Object.defineProperty(t,s,n),n}([(0,l.EM)("vl-cascader-item")],m)},"../../libs/components/src/next/cascader/vl-cascader.component.ts":(e,t,s)=>{var a=s("../../libs/common/utilities/src/index.ts"),i=s("../../libs/elements/src/index.ts"),l=s("../../node_modules/@domg/govflanders-style/common/index.js"),n=s("../../node_modules/@domg/govflanders-style/component/index.js"),r=s("../../node_modules/lit/index.js"),d=s("../../node_modules/lit/decorators.js"),c=s("../../node_modules/lit/directives/class-map.js"),o=s("../../libs/components/src/next/cascader/vl-cascader-item.component.ts"),m=s("../../libs/components/src/next/cascader/vl-cascader.defaults.ts"),h=s("../../libs/components/src/next/cascader/vl-cascader.model.ts");let p=(0,r.AH)`
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
`;var u=s("../../libs/components/src/next/cascader/vl-cascader.utils.ts");class b extends a.jW{static{(0,a.gy)([o.L])}static get properties(){return{headerText:{type:String,attribute:"header-text"},level:{type:Number,reflect:!0},hideBreadcrumb:{type:Boolean,attribute:"hide-breadcrumb"},loadingMessage:{type:String,attribute:"loading-message"},loading:{type:Boolean,reflect:!0},itemListFn:{type:Function},templates:{type:Map},nodeData:{type:Array,state:!0}}}static get styles(){return[l.h8,i.hF,n.Ru,p]}connectedCallback(){super.connectedCallback(),this.setData()}isDeclarativeMode(){return!this.items||!this.items.length}set items(e){this.nodeData=e}get items(){return this.nodeData}setData(){let e=this.traverseTreeAndMapItems(this);this.isDeclarativeMode()&&e?.length?this.nodeData=e:this.nodeData=this.items}pushItemStack(e,t){e&&t&&(this.level=this.navigationLevelStack.push(t),this.breadCrumbHistory.push({label:e,index:this.level}))}popItemStack(){this.nodeData=this.navigationLevelStack.pop()||[],this.level=(this.breadCrumbHistory.pop()?.index||1)-1}goBack(){this.loading||(this.navigationLevelStack.length>0&&(this.slidingOut=!0,this.popItemStack()),this.requestUpdate())}jumpToLevel(e){if(this.loading)return;let t=this.navigationLevelStack.length-e;t>0&&Array.from({length:t}).map(()=>{this.goBack()})}renderHeader(){return a.ax(this,"header")?.length?(0,r.qy)`
                  <header>
                      <slot name="header"></slot>
                  </header>
              `:this.headerText?(0,r.qy)`
                  <header class="vl-header">
                      <h4 is="vl-h4" class="vl-header__title vl-label vl-label--h4">${this.headerText}</h4>
                  </header>
              `:r.s6}renderBreadcrumb(){let e=this.breadCrumbHistory?.length,t=!!a.ax(this,h.z.BREADCRUMB_PLACEHOLDER)?.length;return(0,r.qy)`
            ${e&&!this.hideBreadcrumb?(0,r.qy)`
                      <nav aria-label="U bent hier: " class="vl-breadcrumb">
                          <ol class="vl-breadcrumb__list">
                              ${this.renderBreadcrumbHome()} ${this.breadCrumbHistory?.map(this.renderBreadcrumbItem)}
                          </ol>
                      </nav>
                  `:t||!this.hideBreadcrumb?(0,r.qy)`
                      <nav class="vl-breadcrumb-placeholder">
                          <slot name="breadcrumb-placeholder"></slot>
                      </nav>
                  `:r.s6}
        `}defaultItemTemplate(e){return(0,u.Zo)(e,this)}updated(e){super.updated(e),e.has("level")?this.jumpToLevel(this.level):e.has("items")&&(this.nodeData=this.items)}render(){let e={"slide-in":this.slidingIn&&!this.slidingOut,"slide-out":this.slidingOut&&!this.slidingIn};return(0,r.qy)`
            <div>
                ${this.renderBreadcrumb()} ${this.renderHeader()}
                <div class="content">
                    <section class=${(0,c.H)(e)} @animationend=${this.handleAnimationEnd}>
                        ${this.loading?(0,r.qy)` <vl-loader data-vl-text=${this.loadingMessage}></vl-loader> `:this.nodeData?.map(this.renderItem)}
                    </section>
                </div>
            </div>
        `}handleAnimationEnd(){this.slidingIn=!1,this.slidingOut=!1,this.requestUpdate()}constructor(...e){super(...e),this.hideBreadcrumb=m.z.hideBreadcrumb,this.level=m.z.level,this.loadingMessage=m.z.loadingMessage,this.headerText=m.z.headerText,this.loading=m.z.loading,this.nodeData=[],this.navigationLevelStack=[],this.breadCrumbHistory=[],this.slidingIn=!1,this.slidingOut=!1,this.processNarrowDown=async e=>{if(this.loading)return;let{label:t,children:s,narrowDown:a}=e;s?.length?(this.pushItemStack(t,this.nodeData),this.nodeData=s,this.slidingIn=!0,this.requestUpdate()):a&&this.itemListFn&&(this.loading=!0,this.pushItemStack(t,this.nodeData),this.requestUpdate(),this.nodeData=await this.itemListFn(e),this.loading=!1,this.slidingIn=!0,this.requestUpdate())},this.handleBreadcrumbClick=(e,t)=>{this.jumpToLevel(e),this.dispatchEvent(new CustomEvent("vl-click-breadcrumb",{composed:!0,bubbles:!0,detail:{levelClicked:e,label:t}}))},this.renderBreadcrumbHome=()=>{let e=!!a.ax(this,h.z.HOME)?.length;return(0,r.qy)`
            <li class="vl-breadcrumb__list__item">
                <span class="vl-breadcrumb__list__item__separator" aria-hidden="true"></span>
                ${e?(0,r.qy)`
                              <span
                                  @click=${()=>this.handleBreadcrumbClick(0)}
                                  class="vl-breadcrumb__list__item__cta vl-breadcrumb-home-slot"
                              >
                                  <slot name="home"></slot>
                              </span>
                          `:(0,r.qy)`
                              <span
                                  is="vl-icon"
                                  data-vl-icon="places-home"
                                  class="vl-breadcrumb__list__item__cta"
                                  @click=${()=>this.handleBreadcrumbClick(0)}
                              ></span>
                          `}
                </span>
            </li>
        `},this.renderBreadcrumbItem=({label:e,index:t})=>{let s=this.breadCrumbHistory?.length;return(0,r.qy)`
            <li class="vl-breadcrumb__list__item ${(0,c.H)({"vl-breadcrumb__list__item--deactivated":s===t})}">
                <span class="vl-breadcrumb__list__item__separator" aria-hidden="true"></span>
                <span class="vl-breadcrumb__list__item__cta" @click=${()=>this.handleBreadcrumbClick(t,e)}
                    >${e}</span
                >
            </li>
        `},this.renderItem=e=>{let t=(0,u.m)(e,this);return e.component?e.component:t||this.defaultItemTemplate(e)},this.getChildCascaderNodes=e=>e.querySelectorAll(":scope > vl-cascader-item"),this.traverseTreeAndMapItems=e=>{let t=this.getChildCascaderNodes(e),s=[];return t.forEach(e=>{let t=this.traverseTreeAndMapItems(e);e.item&&(e.item.children=t),e.cascaderRef=this,s.push({...e.item,label:e.label,component:e,children:t})}),s}}}b=function(e,t,s,a){var i,l=arguments.length,n=l<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,s,a);else for(var r=e.length-1;r>=0;r--)(i=e[r])&&(n=(l<3?i(n):l>3?i(t,s,n):i(t,s))||n);return l>3&&n&&Object.defineProperty(t,s,n),n}([(0,d.EM)("vl-cascader")],b)},"../../libs/components/src/next/cascader/vl-cascader.defaults.ts":(e,t,s)=>{s.d(t,{z:()=>a});let a={breadcrumbPlaceholder:"",level:0,hideBreadcrumb:!1,loading:!1,itemListFn:null,items:[],loadingMessage:s("../../libs/components/src/next/cascader/vl-cascader.model.ts")._.LOADING,templates:null,headerText:""}},"../../libs/components/src/next/cascader/vl-cascader.model.ts":(e,t,s)=>{s.d(t,{_:()=>a,z:()=>i});let a={LOADING:"Aan het laden",LABEL_MISSING:"geen label"},i={HEADER:"header",BREADCRUMB_PLACEHOLDER:"breadcrumb-placeholder",CONTENT:"content",HOME:"home",LABEL:"label"}},"../../libs/components/src/next/cascader/vl-cascader.utils.ts":(e,t,s)=>{s.d(t,{Zo:()=>n,jP:()=>r,m:()=>l});var a=s("../../node_modules/lit/index.js"),i=s("../../node_modules/lit/directives/class-map.js");let l=(e,t)=>{let{templateType:s}=e;if(!t)return;let{templates:a}=t;if(s&&a&&a instanceof Map){let i=a.get(s);return i&&i(e,t.processNarrowDown)}},n=(e,t,s=!1)=>{let l={"vl-cascader-item":!t.isDeclarativeMode()};return(0,a.qy)`
        <div
            class=${(0,i.H)(l)}
            @click=${s=>{t?.processNarrowDown(e)}}
        >
            ${s?(0,a.qy)`<slot name="label">${e.label}</slot>`:r(e)}
        </div>
    `},r=e=>{let t=e.children&&e.children.length||e.narrowDown;return(0,a.qy)`
        <a is="vl-link" class="vl-link--bold vl-cascader-link ${(0,i.H)({"space-between":!!t})}">
            <span>${e.label}</span> ${t?(0,a.qy)` <span is="vl-icon" data-vl-icon="arrow-right-fat"></span> `:""}
        </a>
        ${e.annotation?(0,a.qy)`<vl-annotation>${e.annotation}</vl-annotation>`:a.s6}
    `}}}]);