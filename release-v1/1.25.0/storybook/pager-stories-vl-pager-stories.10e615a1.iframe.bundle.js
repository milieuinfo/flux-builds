"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[9478],{"./libs/components/src/pager/stories/vl-pager.stories.ts":(e,t,a)=>{a.r(t),a.d(t,{__namedExportsOrder:()=>d,default:()=>l,pagerDefault:()=>g,pagerSinglePage:()=>o,pagerWithoutPageItems:()=>p});var s=a("./node_modules/lit-html/lit-html.js");a("./libs/components/src/pager/vl-pager.component.ts");var i=a("./libs/common/storybook/src/index.ts"),r=a("./node_modules/@storybook/addon-actions/dist/index.mjs");let l={title:"Components/pager",tags:["autodocs"],args:{...i._O,totalItems:50,currentPage:1,itemsPerPage:7,paginationDisabled:!1,alignCenter:!1,alignRight:!1,change:(0,r.aD)("change")},argTypes:{...(0,i.Wp)(),totalItems:{name:"data-vl-total-items",description:"This attribute determines the total number of elements.",table:{type:{summary:"number"},category:"Attributes",defaultValue:{summary:100}}},currentPage:{name:"data-vl-current-page",description:"This attribute determines the current page.",table:{type:{summary:"number"},category:"Attributes",defaultValue:{summary:1}}},itemsPerPage:{name:"data-vl-items-per-page",description:"This attribute determines the number of rows to show per page.",table:{type:{summary:"number"},category:"Attributes",defaultValue:{summary:10}}},paginationDisabled:{name:"data-vl-pagination-disabled",description:"This attribute determines if the page links should be disabled.",table:{type:{summary:"boolean"},category:"Attributes",defaultValue:{summary:"false"}}},alignCenter:{name:"data-vl-align-center",description:"This attribute is used to center the pagination.",table:{type:{summary:"boolean"},category:"Attributes",defaultValue:{summary:"false"}}},alignRight:{name:"data-vl-align-right",description:"This attribute is used to align the pagination to the right.",table:{type:{summary:"boolean"},category:"Attributes",defaultValue:{summary:"false"}}},change:{name:"change",description:"This event is triggered when a click on a pager item happens. In the detail of the event you can find the current page, total page number, items per page number and the total amount of items of the pagination.",table:{category:"Events"}}}},n=({totalItems:e,itemsPerPage:t,currentPage:a,paginationDisabled:i,alignCenter:r,alignRight:l,change:n})=>(0,s.dy)`
    <vl-pager
        data-vl-total-items=${e}
        data-vl-items-per-page=${t}
        data-vl-current-page=${a}
        ?data-vl-pagination-disabled=${i}
        ?data-vl-align-center=${r}
        ?data-vl-align-right=${l}
        @change=${e=>n(e.detail)}
        data-cy="pager"
    ></vl-pager>
`,g=n.bind({});g.storyName="vl-pager - default";let o=n.bind({});o.storyName="vl-pager - single page",o.args={totalItems:10,itemsPerPage:10,currentPage:1,paginationDisabled:!1};let p=n.bind({});p.storyName="vl-pager - without page items",p.args={totalItems:100,itemsPerPage:10,currentPage:1,paginationDisabled:!0},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"pagerTemplate.bind({}) as any",...g.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"pagerTemplate.bind({}) as any",...o.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"pagerTemplate.bind({}) as any",...p.parameters?.docs?.source}}};let d=["pagerDefault","pagerSinglePage","pagerWithoutPageItems"]},"./libs/components/src/pager/vl-pager.component.ts":(e,t,a)=>{a.d(t,{o:()=>g});var s=a("./libs/common/utilities/src/index.ts"),i=a("./node_modules/@domg/govflanders-style/component/index.js"),r=a("./node_modules/@domg/govflanders-style/common/index.js"),l=a("./node_modules/lit/index.js");let n=(0,l.iv)`
    [hidden] {
        display: none;
    }

    a {
        cursor: pointer;
    }

    a .vl-link__icon {
        position: relative;
    }
`;class g extends(0,s.W$)(HTMLElement){static get _observedAttributes(){return["total-items","items-per-page","current-page","pagination-disabled"]}static get _observedChildClassAttributes(){return["align-center","align-right"]}constructor(){super(),this.shadow(`
          <style>
            ${r.YN}
            ${i.wM}
            ${n}
            ${i.oQ}
            ${i.RP}
            ${r.PC}
          </style>
          <div class="vl-pager">
            <ul id="pager-list" class="vl-pager__list">
              <li id="bounds" class="vl-pager__element"></li>
              <li id="page-back-list-item" class="vl-pager__element">
                <a id="page-back-link" class="vl-pager__element__cta vl-link vl-link--bold" href="#" tabindex="0">
                  <i class="vl-link__icon vl-link__icon--before vl-vi vl-vi-arrow-left-fat" aria-hidden="true"></i>
                  Vorige <span id="previous-items-per-page" class="vl-u-visually-hidden"></span>
                </a>
              </li>
              <li id="page-forward-list-item" class="vl-pager__element">
                <a id="page-forward-link" class="vl-pager__element__cta vl-link vl-link--bold" href="#" tabindex="0">
                  Volgende <span id="next-items-per-page" class="vl-u-visually-hidden"></span>
                  <i class="vl-link__icon vl-link__icon--after vl-vi vl-vi-arrow-right-fat" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        `),this.__addPageBackLinkListener(),this.__addPageForwardLinkListener()}get _classPrefix(){return"vl-pager--"}get totalPages(){return Math.ceil(this.totalItems/this.itemsPerPage)}get totalItems(){return parseInt(this.getAttribute("total-items"))}get currentPage(){let e=parseInt(this.getAttribute("current-page"));return e<1?1:e<=this.totalPages?e:this.totalPages}get itemsPerPage(){return parseInt(this.getAttribute("items-per-page"))}get _firstItemNumberOfPage(){return this.totalItems?(this.currentPage-1)*this.itemsPerPage+1:0}get _lastItemNumberOfPage(){let e=this._firstItemNumberOfPage+this.itemsPerPage-1;return e>this.totalItems?this.totalItems:e}get _isPagination(){return void 0==this.getAttribute("pagination-disabled")}get _boundsElement(){return this._shadow.querySelector("#bounds")}get _pagesListElement(){return this._shadow.querySelector(".vl-pager__list")}get _pageElements(){return[...this._pagesListElement.querySelectorAll("[data-vl-pager-page]")]}get _pageSkippedElements(){return[...this._pagesListElement.querySelectorAll("[data-vl-pager-page-skipped]")]}get _pageBackLink(){return this._shadow.querySelector("#page-back-link")}get _pageForwardLink(){return this._shadow.querySelector("#page-forward-link")}get _pageBackListItem(){return this._shadow.querySelector("#page-back-list-item")}get _pageForwardListItem(){return this._shadow.querySelector("#page-forward-list-item")}get _totalItemsElement(){return this._shadow.querySelector("#totalItems")}get _itemsPerPageElementen(){return[this._shadow.querySelector("#previous-items-per-page"),this._shadow.querySelector("#next-items-per-page")]}_getBoundsTemplate(){return`
      <span class="vl-u-visually-hidden">Rij</span>
      <strong>${this._firstItemNumberOfPage}-${this._lastItemNumberOfPage}</strong> van ${this.totalItems}
    `}_getPageTemplate(e){return this._isPagination?e===this.currentPage?this.__getActivePageTemplate(e):"skipped"===e?this.__getSkippedPageTemplate():this.__getPageTemplate(e):""}__getActivePageTemplate(e){return this._template(`
      <li data-vl-pager-page=${e} class="vl-pager__element">
        <label>${e}</label>
      </li>
    `)}__getSkippedPageTemplate(){return this._template(`
      <li data-vl-pager-page-skipped class="vl-pager__element">
        <div class="vl-pager__element__cta">...</div>
      </li>
    `)}__getPageTemplate(e){let t=this._template(`
      <li data-vl-pager-page=${e} class="vl-pager__element">
        <a href="#" class="vl-pager__element__cta vl-link vl-link--bold">${e}</a>
      </li>
    `);return t.firstElementChild.addEventListener("click",t=>{t.preventDefault(),this.setAttribute("data-vl-current-page",e)}),t}_getItemsPerPageContentTemplate(){return`${this.itemsPerPage} rijen`}_itemsPerPageChangedCallback(e,t){this._update()}_totalItemsChangedCallback(e,t){0===this.totalItems?this._hide(this._element):(this._show(this._element),this._update())}_currentPageChangedCallback(e,t){if(this._update(),e&&t!=e){let e={detail:{currentPage:Number(t),totalPage:this.totalPages,itemsPerPage:this.itemsPerPage,totalItems:this.totalItems},bubbles:!0};this.dispatchEvent(new CustomEvent("change",e))}}_paginationDisabledChangedCallback(e,t){null!==t?this.__removePageElements():this._updatePagination()}_hide(e){e.hidden=!0}_show(e){e.hidden=!1}_update(){this._updateInfoElement(),this._updatePagination(),this._updateListItems()}_updateInfoElement(){this._boundsElement.innerHTML=this._getBoundsTemplate(),this._itemsPerPageElementen.forEach(e=>{e.innerHTML=this._getItemsPerPageContentTemplate()})}_updatePagination(){this._isPagination&&(this.__removePageElements(),this.totalPages>1&&this.__generatePagination(this.currentPage,this.totalPages).map(e=>this._getPageTemplate(e)).forEach(e=>this._pagesListElement.insertBefore(e,this._pageForwardListItem)))}_updateListItems(){this.currentPage<=1?this._hide(this._pageBackListItem):this._show(this._pageBackListItem),this.currentPage>=this.totalPages?this._hide(this._pageForwardListItem):this._show(this._pageForwardListItem)}__generatePagination(e,t){let a=[];for(let s=Math.max(2,e-2);s<=Math.min(t-1,e+2);s++)a.push(s);return e-2>2&&a.unshift("skipped"),e+2<t-1&&a.push("skipped"),a.unshift(1),a.push(t),a}__addPageBackLinkListener(){this._pageBackLink.addEventListener("click",e=>{e.preventDefault(),this.currentPage-1<=0||this.setAttribute("data-vl-current-page",this.currentPage-1)})}__addPageForwardLinkListener(){this._pageForwardLink.addEventListener("click",e=>{e.preventDefault(),this.currentPage+1>this.totalPages||this.setAttribute("data-vl-current-page",this.currentPage+1)})}__removePageElements(){this._pageElements.forEach(e=>e.remove()),this._pageSkippedElements.forEach(e=>e.remove())}}g=function(e,t,a,s){var i,r=arguments.length,l=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,a):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,a,s);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(l=(r<3?i(l):r>3?i(t,a,l):i(t,a))||l);return r>3&&l&&Object.defineProperty(t,a,l),l}([(0,s.a6)("vl-pager")],g)}}]);