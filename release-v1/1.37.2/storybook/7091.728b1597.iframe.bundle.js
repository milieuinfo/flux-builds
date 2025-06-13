"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[7091],{"../../libs/components/src/pager/vl-pager.component.ts":(e,t,i)=>{i.d(t,{$:()=>o});var r=i("../../libs/common/utilities/src/index.ts"),s=i("../../node_modules/@domg/govflanders-style/component/index.js"),a=i("../../node_modules/@domg/govflanders-style/common/index.js"),l=i("../../node_modules/lit/index.js");let n=(0,l.AH)`
    [hidden] {
        display: none;
    }

    a {
        cursor: pointer;
    }

    a .vl-link__icon {
        position: relative;
    }
`;class o extends(0,r.H3)(HTMLElement){static get _observedAttributes(){return["total-items","items-per-page","current-page","pagination-disabled"]}static get _observedChildClassAttributes(){return["align-center","align-right"]}constructor(){super(),this.shadow(`
          <style>
            ${a.h8}
            ${s.bJ}
            ${n}
            ${s.py}
            ${s.gu}
            ${a.Wq}
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
    `);return t.firstElementChild.addEventListener("click",t=>{t.preventDefault(),this.setAttribute("data-vl-current-page",e)}),t}_getItemsPerPageContentTemplate(){return`${this.itemsPerPage} rijen`}_itemsPerPageChangedCallback(e,t){this._update()}_totalItemsChangedCallback(e,t){0===this.totalItems?this._hide(this._element):(this._show(this._element),this._update())}_currentPageChangedCallback(e,t){if(this._update(),e&&t!=e){let e={detail:{currentPage:Number(t),totalPage:this.totalPages,itemsPerPage:this.itemsPerPage,totalItems:this.totalItems},bubbles:!0};this.dispatchEvent(new CustomEvent("change",e))}}_paginationDisabledChangedCallback(e,t){null!==t?this.__removePageElements():this._updatePagination()}_hide(e){e.hidden=!0}_show(e){e.hidden=!1}_update(){this._updateInfoElement(),this._updatePagination(),this._updateListItems()}_updateInfoElement(){this._boundsElement.innerHTML=this._getBoundsTemplate(),this._itemsPerPageElementen.forEach(e=>{e.innerHTML=this._getItemsPerPageContentTemplate()})}_updatePagination(){this._isPagination&&(this.__removePageElements(),this.totalPages>1&&this.__generatePagination(this.currentPage,this.totalPages).map(e=>this._getPageTemplate(e)).forEach(e=>this._pagesListElement.insertBefore(e,this._pageForwardListItem)))}_updateListItems(){this.currentPage<=1?this._hide(this._pageBackListItem):this._show(this._pageBackListItem),this.currentPage>=this.totalPages?this._hide(this._pageForwardListItem):this._show(this._pageForwardListItem)}__generatePagination(e,t){let i=[];for(let r=Math.max(2,e-2);r<=Math.min(t-1,e+2);r++)i.push(r);return e-2>2&&i.unshift("skipped"),e+2<t-1&&i.push("skipped"),i.unshift(1),i.push(t),i}__addPageBackLinkListener(){this._pageBackLink.addEventListener("click",e=>{e.preventDefault(),this.currentPage-1<=0||this.setAttribute("data-vl-current-page",this.currentPage-1)})}__addPageForwardLinkListener(){this._pageForwardLink.addEventListener("click",e=>{e.preventDefault(),this.currentPage+1>this.totalPages||this.setAttribute("data-vl-current-page",this.currentPage+1)})}__removePageElements(){this._pageElements.forEach(e=>e.remove()),this._pageSkippedElements.forEach(e=>e.remove())}}o=function(e,t,i,r){var s,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(l=(a<3?s(l):a>3?s(t,i,l):s(t,i))||l);return a>3&&l&&Object.defineProperty(t,i,l),l}([(0,r.M1)("vl-pager")],o)},"../../libs/components/src/rich-data-table/vl-rich-data-field.component.ts":(e,t,i)=>{i.d(t,{$:()=>a});var r=i("../../libs/common/utilities/src/index.ts"),s=i("../../libs/components/src/rich-data-table/vl-rich-data-sorter.component.ts");class a extends(0,r.H3)(HTMLElement){static{(0,r.gy)([s.q])}static get headerAttributes(){return["name","label","sortable","sorting-direction","sorting-priority"]}static get bodyAttributes(){return["selector","renderer"]}static get _observedAttributes(){return this.headerAttributes.concat(this.bodyAttributes)}static get is(){return"vl-rich-data-field"}headerTemplate(){let e=document.createElement("th"),t=this.__getHeaderContentElement();return t&&e.appendChild(t),this.sortable&&e.setAttribute("data-vl-sortable",""),e}valueTemplate(e){let t=document.createElement("td");this.label&&t.setAttribute("data-title",this.label);let i=this.__getValueContentElement(e);return i?t.appendChild(i):this._renderer&&this._renderer(t,e),t}get name(){return this.dataset.vlName}get selector(){return this.dataset.vlSelector}get label(){return this.dataset.vlLabel}get sortable(){return void 0!==this.dataset.vlSortable}get sortingDirection(){return this.dataset.vlSortingDirection}get sortingPriority(){return this.dataset.vlSortingPriority}get _labelSlotElement(){return this.querySelector('template[slot="label"]')}get _contentSlotElement(){return this.querySelector('template[slot="content"]')}set renderer(e){this._renderer=e,this._changed(["renderer"])}_nameChangedCallback(e,t){e!==t&&this._changed(["name"])}_selectorChangedCallback(e,t){e!==t&&this._changed(["selector"])}_labelChangedCallback(e,t){e!==t&&this._changed(["label"])}_sortableChangedCallback(e,t){e!==t&&this._changed(["sortable"])}_sortingDirectionChangedCallback(e,t){e!==t&&this._changed(["sorting-direction"])}_sortingPriorityChangedCallback(e,t){e!==t&&this._changed(["sorting-priority"])}_changed(e){this.dispatchEvent(new CustomEvent("change",{detail:{properties:e}}))}get __headerContent(){return this.label||(this._labelSlotElement?this._labelSlotElement.innerHTML:void 0)}__getHeaderContentElement(){let e=this.__headerContent;if(e){if(!this.sortable)return this._template(`${e}`);{let t=this.sortingDirection?`data-vl-direction="${this.sortingDirection}"`:"",i=this.sortingPriority?`data-vl-priority="${this.sortingPriority}"`:"",r=`<vl-rich-data-sorter data-vl-for="${this.name}" ${t} ${i}></vl-rich-data-sorter>`;return this._template(`<a>${e}${r}</a>`)}}}__getValueContentElement(e){if(this.selector)return this._template(`${this.selector.split(".").reduce((e,t)=>e?e[t]:null,e)}`);if(!this._contentSlotElement)return null;{let t=((e,t)=>Function("item","return `"+e+"`")(t)).call(this,`${this.querySelector('template[slot="content"]').innerHTML}`,e);return this._template(t)}}}a=function(e,t,i,r){var s,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(l=(a<3?s(l):a>3?s(t,i,l):s(t,i))||l);return a>3&&l&&Object.defineProperty(t,i,l),l}([(0,r.M1)("vl-rich-data-field")],a)},"../../libs/components/src/rich-data-table/vl-rich-data-sorter.component.ts":(e,t,i)=>{i.d(t,{q:()=>l});var r=i("../../libs/common/utilities/src/index.ts"),s=i("../../libs/elements/src/index.ts"),a=i("../../libs/components/src/rich-data-table/vl-rich-data-table.uig-css.ts");class l extends(0,r.H3)(HTMLElement){static{(0,r.gy)([s.yF])}static get DIRECTIONS(){return{descending:"desc",ascending:"asc"}}static get _observedAttributes(){return["direction","priority"]}static get is(){return"vl-rich-data-sorter"}constructor(){super(`
          <style>
            ${a.A}

            div {
              display: inline;
            }

            #direction {
              vertical-align: middle;
            }

            #priority {
              font-size: x-small;
              vertical-align: super;
            }
          </style>
          <div id="container" class="vl-u-visually-hidden">
            <span id="direction" is="vl-icon"></span>
            <label id="priority"></label>
          </div>
        `)}get for(){return this.dataset.vlFor}get direction(){return this.__direction}set direction(e){if(this.__direction!==e){this.__direction=e;let t=this._directionIcon;t?(this.__directionElement.setAttribute("data-vl-icon",t),this.__containerElement.classList.remove("vl-u-visually-hidden")):this.__containerElement.classList.add("vl-u-visually-hidden"),void 0===e&&(this.priority=void 0)}}get _directionIcon(){switch(this.direction){case l.DIRECTIONS.ascending:return"arrow-down";case l.DIRECTIONS.descending:return"arrow-up";default:return null}}_setDirectionAndPublishEvent(e){this.direction!==e&&(this.direction=e,this._changed())}get priority(){return this.__priority}set priority(e){this.__priority!==e&&(this.__priority=Number(e)||void 0,this.__priorityElement.textContent=String(this.priority))}get __directionElement(){return this.shadowRoot.querySelector("#direction")}get __containerElement(){return this.shadowRoot.querySelector("#container")}get __priorityElement(){return this.shadowRoot.querySelector("#priority")}nextDirection(){switch(this.direction){case l.DIRECTIONS.descending:this._setDirectionAndPublishEvent(void 0);break;case l.DIRECTIONS.ascending:this._setDirectionAndPublishEvent(l.DIRECTIONS.descending);break;default:this._setDirectionAndPublishEvent(l.DIRECTIONS.ascending)}}_directionChangedCallback(e,t){this.direction=t}_priorityChangedCallback(e,t){this.priority=t}_changed(){this.dispatchEvent(new CustomEvent("change",{detail:{direction:this.direction,priority:this.priority}}))}static get PRIORITY_COMPARATOR(){return({priority:e},{priority:t})=>void 0===t||(e||0)<t?-1:void 0===e||e>t?1:0}}l=function(e,t,i,r){var s,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(l=(a<3?s(l):a>3?s(t,i,l):s(t,i))||l);return a>3&&l&&Object.defineProperty(t,i,l),l}([(0,r.M1)("vl-rich-data-sorter")],l)},"../../libs/components/src/rich-data-table/vl-rich-data-table.uig-css.ts":(e,t,i)=>{i.d(t,{A:()=>l});var r=i("../../libs/elements/src/index.ts"),s=i("../../node_modules/lit/index.js");let a=(0,s.AH)`
    th[data-vl-sortable] a {
        cursor: pointer;
    }
`,l=[...r.hF,a]},"../../libs/components/src/rich-data/vl-rich-data.component.ts":(e,t,i)=>{i.d(t,{b:()=>d});var r=i("../../libs/common/utilities/src/index.ts"),s=i("../../libs/elements/src/index.ts"),a=i("../../libs/components/src/pager/vl-pager.component.ts"),l=i("../../node_modules/lit/index.js");let n=(0,l.AH)`
    #search-results,
    #sorter {
        line-height: 2em;
    }

    #sorter {
        text-align: right;
    }
    #sorter label {
        margin-right: 10px;
    }

    #filter-slot-container {
        margin-top: 8px;
    }
`,o=[...s.hF,n];class d extends(0,r.H3)(HTMLElement){static{(0,r.gy)([s.lC,s.D,s.Pv,s.dI,s.yF,a.$])}static get _observedAttributes(){return["data","collapsed-m","collapsed-s","collapsed-xs","filter-closable","filter-closed"]}static get _defaultSearchColumnSize(){return 4}constructor(e="",t=""){super(`
          <style>
            ${o}
          </style>
          <div>
            <div is="vl-grid" is-stacked>
              <div id="toggle-filter" is="vl-column" class="vl-u-align-right vl-u-hidden--s" hidden data-vl-size="12" data-vl-medium-size="12">
                <button id="toggle-filter-button" is="vl-button" data-vl-secondary data-vl-narrow type="button" aria-label="Filter verbergen">
                  <span is="vl-icon" data-vl-icon="content-filter" data-vl-before></span><slot name="toggle-filter-button-text" hidden>Filter tonen</slot><slot name="close-filter-button-text">Filter verbergen</slot>
                </button>
              </div>
              <div id="open-filter" is="vl-column" class="vl-u-align-right vl-u-hidden" hidden data-vl-size="12" data-vl-medium-size="12">
                <button id="open-filter-button" is="vl-button" data-vl-secondary data-vl-narrow type="button" aria-label="Filter tonen">
                  <span is="vl-icon" data-vl-icon="content-filter" data-vl-before></span><slot name="toggle-filter-button-text">Filter</slot>
                </button>
              </div>
              <div id="search" is="vl-column" data-vl-size="0" data-vl-medium-size="0" data-vl-small-size="0" data-vl-extra-small-size="0">
                <div id="filter-slot-container">
                  <slot id="filter-slot" name="filter"></slot>
                </div>
              </div>
              <div id="content" is="vl-column" data-vl-size="12" data-vl-medium-size="12" data-vl-small-size="12" data-vl-extra-small-size="12">
                <div is="vl-grid" is-stacked>
                  <div id="search-results" is="vl-column" data-vl-size="6" data-vl-medium-size="6" data-vl-small-size="6" data-vl-extra-small-size="6" aria-live="polite">
                    <span>We vonden</span> <strong><span id="search-results-number">0</span> resultaten</strong>
                  </div>
                  <div id="sorter" is="vl-column" data-vl-size="6" data-vl-medium-size="6" data-vl-small-size="6" data-vl-extra-small-size="6">
                    <label is="vl-form-label">
                      Sorteer
                    </label>
                    <slot name="sorter"></slot>
                  </div>
                  <div is="vl-column" data-vl-size="12" data-vl-medium-size="12">
                    <slot name="content">${t}</slot>
                    <slot name="no-content" hidden>Er werden geen resultaten gevonden</slot>
                  </div>
                </div>
              </div>
              <div id="pager" is="vl-column" data-vl-size="12" data-vl-medium-size="12">
                <slot name="pager"></slot>
              </div>
            </div>
          </div>
        `)}connectedCallback(){super.connectedCallback(),this.__processSearchFilter(),this.__processSorter(),this.__processContent(),this.__observePager(),this.__observeFilterButtons(),this._observer=this.__observeSearchFilter(()=>this.__processSearchFilter()),this.__updateNumberOfSearchResults(null)}disconnectedCallback(){this._observer.disconnect()}set data(e){if(this._data!==e){let{paging:t,sorting:i,filter:r}=e;this._paging=t,this._sorting=i,this._filter=r,this._data=e,this.__processContent()}}get data(){return this._data||{data:[]}}get __contentColumn(){return this.shadowRoot.querySelector("#content")}get __searchFilter(){return this.querySelector('[slot="filter"]')}get __filterSlotContainer(){return this.shadowRoot.querySelector("#filter-slot-container")}get __filterSlot(){return this.shadowRoot.querySelector("#filter-slot")}get __filterOpenContainer(){return this.shadowRoot.querySelector("#open-filter")}get __filterOpenButton(){return this.shadowRoot.querySelector("#open-filter-button")}get __filterToggleContainer(){return this.shadowRoot.querySelector("#toggle-filter")}get __filterToggleButton(){return this.shadowRoot.querySelector("#toggle-filter-button")}get __filterToggleButtonTextSlot(){return this.shadowRoot.querySelector('slot[name="toggle-filter-button-text"]')}get __filterCloseButtonTextSlot(){return this.shadowRoot.querySelector('slot[name="close-filter-button-text"]')}get __searchResults(){return this.shadowRoot.querySelector("#search-results")}get __numberOfSearchResults(){return this.__searchResults?this.__searchResults.querySelector("#search-results-number"):null}get __sorterContainer(){return this.shadowRoot.querySelector("#sorter")}get __sorter(){return this.querySelector('[slot="sorter"]')}get __pager(){return this.querySelector('[slot="pager"]')}get __searchColumn(){return this.shadowRoot.querySelector("#search")}get __searchFilterForm(){return this.__searchFilter?this.__searchFilter.querySelector("form"):this.__searchFilter}get __contentSlot(){return this.shadowRoot.querySelector('slot[name="content"]')}get __noContentSlot(){return this.shadowRoot.querySelector('slot[name="no-content"]')}get __formDataState(){return this.__searchFilter&&this.__searchFilter.formData&&[...this.__searchFilter.formData.values()].find(Boolean)?this.__searchFilter.formData:void 0}get _hasResults(){return!!(this._paging&&this._paging.totalItems>0)}get _paging(){if(this.__pager)return{currentPage:this.__pager.currentPage,totalPages:this.__pager.totalPages,itemsPerPage:this.__pager.itemsPerPage,totalItems:this.__pager.totalItems}}set _paging(e){e&&(null!=e.currentPage&&this.__pager.setAttribute("data-vl-current-page",e.currentPage),null!=e.itemsPerPage&&this.__pager.setAttribute("data-vl-items-per-page",e.itemsPerPage),null!=e.totalItems&&(this.__pager.setAttribute("data-vl-total-items",e.totalItems),this.__updateNumberOfSearchResults(e.totalItems)))}set _filter(e){if(e&&this.__searchFilter){let t=this.__searchFilter.querySelector("form");t&&e.forEach(e=>{let i=t.elements[e.name];i&&(i.value=e.value)})}}__onStateChange(e,{paging:t=!1}={}){e.stopPropagation(),e.preventDefault(),this.dispatchEvent(new CustomEvent("change",{detail:this.__getState({paging:t}),bubbles:!0}))}__getState({paging:e}){let t={formData:this.__formDataState,paging:this._paging};return!e&&t.paging&&(t.paging.currentPage=1),t}_filterClosableChangedCallback(e,t){this.__filterToggleContainer.hidden=null==t,this.__filterOpenContainer.hidden=null==t,null==t?(this.__filterOpenContainer.classList.remove("vl-u-visible--s"),this.__searchColumn.classList.remove("vl-u-hidden--s")):(this.__filterOpenContainer.classList.add("vl-u-visible--s"),this.__searchColumn.classList.add("vl-u-hidden--s"))}_filterClosedChangedCallback(e,t){null==t?this.__showSearchColumn():this.__hideSearchColumn()}__observeFilterButtons(){this.__filterToggleButton.addEventListener("click",()=>{this.__filterSlotContainer.appendChild(this.__filterSlot),this.__searchFilter.hidden=!1,this.__showHiddenInModalElements(),this.toggleAttribute("data-vl-filter-closed")}),this.__filterOpenButton.addEventListener("click",()=>{this.setAttribute("data-vl-filter-closed",""),this._element.appendChild(this.__filterSlot),this.__hideHiddenInModalElements(),this.__searchFilter.setAttribute("data-vl-mobile-modal","")})}__showHiddenInModalElements(){this.__setHiddenInModalElements(!1)}__hideHiddenInModalElements(){this.__setHiddenInModalElements(!0)}__setHiddenInModalElements(e){this.__searchFilter.querySelectorAll("[data-vl-hidden-in-modal]").forEach(t=>t.hidden=e)}__observePager(){this.__pager&&(this.__pager.setAttribute("data-vl-align-right",String(!0)),this.__pager.addEventListener("change",e=>{if(this.__onStateChange(e,{paging:!0}),this.__contentSlot.assignedNodes()[0]){let e=this.__contentSlot.assignedNodes()[0];e.children[0]?.querySelector("a")?.focus()}}))}__observeSearchFilter(e){let t=new MutationObserver(t=>{(t=t.filter(e=>e.target&&"content"!=e.target.slot))&&t.length>0&&e()});return t.observe(this,{childList:!0}),t}__processSearchFilter(){this.__searchFilter?(this.__searchFilter.setAttribute("data-vl-alt",""),this.hasAttribute("data-vl-filter-closed")||this.__showSearchColumn(),this.__showSearchResults(),this.__addSearchFilterEventListeners(),this.__observeMobileModal(()=>this.__processScrollableBody())):(this.__hideSearchColumn(),this.__hideSearchResults())}__processSorter(){this.__sorter?this.__showSorter():this.__hideSorter()}__processContent(){this._hasResults?(this.__contentSlot.hidden=!1,this.__noContentSlot.hidden=!0):(this.__contentSlot.hidden=!0,this.__noContentSlot.hidden=!1)}__hideSearchColumn(){this.__searchColumn.hidden=!0,this.__setGridColumnWidth(0),this.__filterToggleButton.setAttribute("aria-label","Filter tonen"),this.__filterToggleButtonTextSlot.hidden=!1,this.__filterCloseButtonTextSlot.hidden=!0}__hideSearchResults(){this.__searchResults.hidden=!0}__hideSorter(){this.__sorterContainer.hidden=!0}__showSearchColumn(){this.__searchColumn.hidden=!1,this.__setGridColumnWidth(d._defaultSearchColumnSize),this.__filterToggleButton.setAttribute("aria-label","Filter verbergen"),this.__filterToggleButtonTextSlot.hidden=!0,this.__filterCloseButtonTextSlot.hidden=!1}__showSearchResults(){this.__searchResults.hidden=!1}__showSorter(){this.__sorterContainer.hidden=!1}__setGridColumnWidth(e){["size","medium-size"].forEach(t=>{this.__searchColumn.setAttribute(`data-vl-${t}`,String(e)),this.__contentColumn.setAttribute(`data-vl-${t}`,String(12-e))})}__updateNumberOfSearchResults(e){e?this.__numberOfSearchResults&&(this.__numberOfSearchResults.textContent=String(e)):this.__pager&&customElements.whenDefined("vl-pager").then(()=>{this.__numberOfSearchResults&&(this.__numberOfSearchResults.textContent=String(this.__pager.totalItems||0))})}__addSearchFilterEventListeners(){this.__searchFilter.addEventListener("change",e=>{e.stopPropagation(),e.preventDefault()}),this.__searchFilter.addEventListener("input",e=>{this.__onFilterFieldChanged(e)}),this.__searchFilterForm&&this.__searchFilterForm.addEventListener("reset",e=>{setTimeout(()=>{this.__onFilterFieldChanged(e)})})}__onFilterFieldChanged(e){e.stopPropagation(),e.preventDefault(),this.__onStateChange(e)}__observeMobileModal(e){let t=new MutationObserver(e);return t.observe(this.__searchFilter,{attributeFilter:["data-vl-mobile-modal"]}),t}__processScrollableBody(){this.__searchFilter.hasAttribute("data-vl-mobile-modal")?this.__disableBodyScroll():this.__enableBodyScroll()}__disableBodyScroll(){document.body.style.overflow="hidden"}__enableBodyScroll(){document.body.style.overflow="auto"}}d=function(e,t,i,r){var s,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(l=(a<3?s(l):a>3?s(t,i,l):s(t,i))||l);return a>3&&l&&Object.defineProperty(t,i,l),l}([(0,r.M1)("vl-rich-data")],d)}}]);