import{bv as tt,i as it,a0 as st,bt as rt,bu as nt,T as J,F as ot,x as lt,w as at}from"./iframe-69xRVzLO.js";/*! choices.js v11.1.0 | © 2025 Josh Johnson | https://github.com/jshjohnson/Choices#readme */var ue=function(t,e){return ue=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,s){i.__proto__=s}||function(i,s){for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(i[r]=s[r])},ue(t,e)};function Ke(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");ue(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}var A=function(){return A=Object.assign||function(e){for(var i,s=1,r=arguments.length;s<r;s++){i=arguments[s];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},A.apply(this,arguments)};function ct(t,e,i){for(var s=0,r=e.length,n;s<r;s++)(n||!(s in e))&&(n||(n=Array.prototype.slice.call(e,0,s)),n[s]=e[s]);return t.concat(n||Array.prototype.slice.call(e))}var y={ADD_CHOICE:"ADD_CHOICE",REMOVE_CHOICE:"REMOVE_CHOICE",FILTER_CHOICES:"FILTER_CHOICES",ACTIVATE_CHOICES:"ACTIVATE_CHOICES",CLEAR_CHOICES:"CLEAR_CHOICES",ADD_GROUP:"ADD_GROUP",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",HIGHLIGHT_ITEM:"HIGHLIGHT_ITEM"},I={showDropdown:"showDropdown",hideDropdown:"hideDropdown",change:"change",choice:"choice",search:"search",addItem:"addItem",removeItem:"removeItem",highlightItem:"highlightItem",highlightChoice:"highlightChoice",unhighlightItem:"unhighlightItem"},C={TAB_KEY:9,SHIFT_KEY:16,BACK_KEY:46,DELETE_KEY:8,ENTER_KEY:13,A_KEY:65,ESC_KEY:27,UP_KEY:38,DOWN_KEY:40,PAGE_UP_KEY:33,PAGE_DOWN_KEY:34},ht=["fuseOptions","classNames"],R={Text:"text",SelectOne:"select-one",SelectMultiple:"select-multiple"},Ce=function(t){return{type:y.ADD_CHOICE,choice:t}},ut=function(t){return{type:y.REMOVE_CHOICE,choice:t}},dt=function(t){return{type:y.FILTER_CHOICES,results:t}},ft=function(t){return{type:y.ACTIVATE_CHOICES,active:t}},pt=function(t){return{type:y.ADD_GROUP,group:t}},Se=function(t){return{type:y.ADD_ITEM,item:t}},we=function(t){return{type:y.REMOVE_ITEM,item:t}},Q=function(t,e){return{type:y.HIGHLIGHT_ITEM,item:t,highlighted:e}},mt=function(t,e){return Math.floor(Math.random()*(e-t)+t)},Ie=function(t){return Array.from({length:t},function(){return mt(0,36).toString(36)}).join("")},vt=function(t,e){var i=t.id||t.name&&"".concat(t.name,"-").concat(Ie(2))||Ie(4);return i=i.replace(/(:|\.|\[|\]|,)/g,""),i="".concat(e,"-").concat(i),i},_t=function(t,e,i){i===void 0&&(i=1);for(var s="".concat(i>0?"next":"previous","ElementSibling"),r=t[s];r;){if(r.matches(e))return r;r=r[s]}return null},gt=function(t,e,i){i===void 0&&(i=1);var s;return i>0?s=e.scrollTop+e.offsetHeight>=t.offsetTop+t.offsetHeight:s=t.offsetTop>=e.scrollTop,s},se=function(t){if(typeof t!="string"){if(t==null)return"";if(typeof t=="object"){if("raw"in t)return se(t.raw);if("trusted"in t)return t.trusted}return t}return t.replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/'/g,"&#039;").replace(/"/g,"&quot;")},bt=(function(){var t=document.createElement("div");return function(e){t.innerHTML=e.trim();for(var i=t.children[0];t.firstChild;)t.removeChild(t.firstChild);return i}})(),q=function(t,e){return typeof t=="function"?t(se(e),e):t},Ae=function(t){return typeof t=="function"?t():t},$=function(t){if(typeof t=="string")return t;if(typeof t=="object"){if("trusted"in t)return t.trusted;if("raw"in t)return t.raw}return""},Ve=function(t){if(typeof t=="string")return t;if(typeof t=="object"){if("escaped"in t)return t.escaped;if("trusted"in t)return t.trusted}return""},ge=function(t,e){return t?Ve(e):se(e)},j=function(t,e,i){t.innerHTML=ge(e,i)},yt=function(t,e){var i=t.value,s=t.label,r=s===void 0?i:s,n=e.value,o=e.label,l=o===void 0?n:o;return $(r).localeCompare($(l),[],{sensitivity:"base",ignorePunctuation:!0,numeric:!0})},Et=function(t,e){return t.rank-e.rank},Ct=function(t,e,i){i===void 0&&(i=null);var s=new CustomEvent(e,{detail:i,bubbles:!0,cancelable:!0});return t.dispatchEvent(s)},St=function(t,e){var i=Object.keys(t).sort(),s=Object.keys(e).sort();return i.filter(function(r){return s.indexOf(r)<0})},re=function(t){return Array.isArray(t)?t:[t]},W=function(t){return t&&Array.isArray(t)?t.map(function(e){return".".concat(e)}).join(""):".".concat(t)},_=function(t,e){var i;(i=t.classList).add.apply(i,re(e))},M=function(t,e){var i;(i=t.classList).remove.apply(i,re(e))},wt=function(t){if(typeof t<"u")try{return JSON.parse(t)}catch{return t}return{}},It=function(t,e,i){var s=t.itemEl;s&&(M(s,i),_(s,e))},At=(function(){function t(e){var i=e.element,s=e.type,r=e.classNames;this.element=i,this.classNames=r,this.type=s,this.isActive=!1}return t.prototype.show=function(){return _(this.element,this.classNames.activeState),this.element.setAttribute("aria-expanded","true"),this.isActive=!0,this},t.prototype.hide=function(){return M(this.element,this.classNames.activeState),this.element.setAttribute("aria-expanded","false"),this.isActive=!1,this},t})(),Oe=(function(){function t(e){var i=e.element,s=e.type,r=e.classNames,n=e.position;this.element=i,this.classNames=r,this.type=s,this.position=n,this.isOpen=!1,this.isFlipped=!1,this.isDisabled=!1,this.isLoading=!1}return t.prototype.shouldFlip=function(e,i){var s=!1;return this.position==="auto"?s=this.element.getBoundingClientRect().top-i>=0&&!window.matchMedia("(min-height: ".concat(e+1,"px)")).matches:this.position==="top"&&(s=!0),s},t.prototype.setActiveDescendant=function(e){this.element.setAttribute("aria-activedescendant",e)},t.prototype.removeActiveDescendant=function(){this.element.removeAttribute("aria-activedescendant")},t.prototype.open=function(e,i){_(this.element,this.classNames.openState),this.element.setAttribute("aria-expanded","true"),this.isOpen=!0,this.shouldFlip(e,i)&&(_(this.element,this.classNames.flippedState),this.isFlipped=!0)},t.prototype.close=function(){M(this.element,this.classNames.openState),this.element.setAttribute("aria-expanded","false"),this.removeActiveDescendant(),this.isOpen=!1,this.isFlipped&&(M(this.element,this.classNames.flippedState),this.isFlipped=!1)},t.prototype.addFocusState=function(){_(this.element,this.classNames.focusState)},t.prototype.removeFocusState=function(){M(this.element,this.classNames.focusState)},t.prototype.enable=function(){M(this.element,this.classNames.disabledState),this.element.removeAttribute("aria-disabled"),this.type===R.SelectOne&&this.element.setAttribute("tabindex","0"),this.isDisabled=!1},t.prototype.disable=function(){_(this.element,this.classNames.disabledState),this.element.setAttribute("aria-disabled","true"),this.type===R.SelectOne&&this.element.setAttribute("tabindex","-1"),this.isDisabled=!0},t.prototype.wrap=function(e){var i=this.element,s=e.parentNode;s&&(e.nextSibling?s.insertBefore(i,e.nextSibling):s.appendChild(i)),i.appendChild(e)},t.prototype.unwrap=function(e){var i=this.element,s=i.parentNode;s&&(s.insertBefore(e,i),s.removeChild(i))},t.prototype.addLoadingState=function(){_(this.element,this.classNames.loadingState),this.element.setAttribute("aria-busy","true"),this.isLoading=!0},t.prototype.removeLoadingState=function(){M(this.element,this.classNames.loadingState),this.element.removeAttribute("aria-busy"),this.isLoading=!1},t})(),Ot=(function(){function t(e){var i=e.element,s=e.type,r=e.classNames,n=e.preventPaste;this.element=i,this.type=s,this.classNames=r,this.preventPaste=n,this.isFocussed=this.element.isEqualNode(document.activeElement),this.isDisabled=i.disabled,this._onPaste=this._onPaste.bind(this),this._onInput=this._onInput.bind(this),this._onFocus=this._onFocus.bind(this),this._onBlur=this._onBlur.bind(this)}return Object.defineProperty(t.prototype,"placeholder",{set:function(e){this.element.placeholder=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"value",{get:function(){return this.element.value},set:function(e){this.element.value=e},enumerable:!1,configurable:!0}),t.prototype.addEventListeners=function(){var e=this.element;e.addEventListener("paste",this._onPaste),e.addEventListener("input",this._onInput,{passive:!0}),e.addEventListener("focus",this._onFocus,{passive:!0}),e.addEventListener("blur",this._onBlur,{passive:!0})},t.prototype.removeEventListeners=function(){var e=this.element;e.removeEventListener("input",this._onInput),e.removeEventListener("paste",this._onPaste),e.removeEventListener("focus",this._onFocus),e.removeEventListener("blur",this._onBlur)},t.prototype.enable=function(){var e=this.element;e.removeAttribute("disabled"),this.isDisabled=!1},t.prototype.disable=function(){var e=this.element;e.setAttribute("disabled",""),this.isDisabled=!0},t.prototype.focus=function(){this.isFocussed||this.element.focus()},t.prototype.blur=function(){this.isFocussed&&this.element.blur()},t.prototype.clear=function(e){return e===void 0&&(e=!0),this.element.value="",e&&this.setWidth(),this},t.prototype.setWidth=function(){var e=this.element;e.style.minWidth="".concat(e.placeholder.length+1,"ch"),e.style.width="".concat(e.value.length+1,"ch")},t.prototype.setActiveDescendant=function(e){this.element.setAttribute("aria-activedescendant",e)},t.prototype.removeActiveDescendant=function(){this.element.removeAttribute("aria-activedescendant")},t.prototype._onInput=function(){this.type!==R.SelectOne&&this.setWidth()},t.prototype._onPaste=function(e){this.preventPaste&&e.preventDefault()},t.prototype._onFocus=function(){this.isFocussed=!0},t.prototype._onBlur=function(){this.isFocussed=!1},t})(),xt=4,xe=(function(){function t(e){var i=e.element;this.element=i,this.scrollPos=this.element.scrollTop,this.height=this.element.offsetHeight}return t.prototype.prepend=function(e){var i=this.element.firstElementChild;i?this.element.insertBefore(e,i):this.element.append(e)},t.prototype.scrollToTop=function(){this.element.scrollTop=0},t.prototype.scrollToChildElement=function(e,i){var s=this;if(e){var r=this.element.offsetHeight,n=this.element.scrollTop+r,o=e.offsetHeight,l=e.offsetTop+o,a=i>0?this.element.scrollTop+l-n:e.offsetTop;requestAnimationFrame(function(){s._animateScroll(a,i)})}},t.prototype._scrollDown=function(e,i,s){var r=(s-e)/i,n=r>1?r:1;this.element.scrollTop=e+n},t.prototype._scrollUp=function(e,i,s){var r=(e-s)/i,n=r>1?r:1;this.element.scrollTop=e-n},t.prototype._animateScroll=function(e,i){var s=this,r=xt,n=this.element.scrollTop,o=!1;i>0?(this._scrollDown(n,r,e),n<e&&(o=!0)):(this._scrollUp(n,r,e),n>e&&(o=!0)),o&&requestAnimationFrame(function(){s._animateScroll(e,i)})},t})(),He=(function(){function t(e){var i=e.element,s=e.classNames;this.element=i,this.classNames=s,this.isDisabled=!1}return Object.defineProperty(t.prototype,"isActive",{get:function(){return this.element.dataset.choice==="active"},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"dir",{get:function(){return this.element.dir},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"value",{get:function(){return this.element.value},set:function(e){this.element.setAttribute("value",e),this.element.value=e},enumerable:!1,configurable:!0}),t.prototype.conceal=function(){var e=this.element;_(e,this.classNames.input),e.hidden=!0,e.tabIndex=-1;var i=e.getAttribute("style");i&&e.setAttribute("data-choice-orig-style",i),e.setAttribute("data-choice","active")},t.prototype.reveal=function(){var e=this.element;M(e,this.classNames.input),e.hidden=!1,e.removeAttribute("tabindex");var i=e.getAttribute("data-choice-orig-style");i?(e.removeAttribute("data-choice-orig-style"),e.setAttribute("style",i)):e.removeAttribute("style"),e.removeAttribute("data-choice")},t.prototype.enable=function(){this.element.removeAttribute("disabled"),this.element.disabled=!1,this.isDisabled=!1},t.prototype.disable=function(){this.element.setAttribute("disabled",""),this.element.disabled=!0,this.isDisabled=!0},t.prototype.triggerEvent=function(e,i){Ct(this.element,e,i||{})},t})(),Tt=(function(t){Ke(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e})(He),z=function(t,e){return e===void 0&&(e=!0),typeof t>"u"?e:!!t},$e=function(t){if(typeof t=="string"&&(t=t.split(" ").filter(function(e){return e.length})),Array.isArray(t)&&t.length)return t},D=function(t,e,i){if(i===void 0&&(i=!0),typeof t=="string"){var s=se(t),r=i||s===t?t:{escaped:s,raw:t},n=D({value:t,label:r,selected:!0},!1);return n}var o=t;if("choices"in o){if(!e)throw new TypeError("optGroup is not allowed");var l=o,a=l.choices.map(function(f){return D(f,!1)}),h={id:0,label:$(l.label)||l.value,active:!!a.length,disabled:!!l.disabled,choices:a};return h}var c=o,u={id:0,group:null,score:0,rank:0,value:c.value,label:c.label||c.value,active:z(c.active),selected:z(c.selected,!1),disabled:z(c.disabled,!1),placeholder:z(c.placeholder,!1),highlighted:!1,labelClass:$e(c.labelClass),labelDescription:c.labelDescription,customProperties:c.customProperties};return u},Lt=function(t){return t.tagName==="INPUT"},Be=function(t){return t.tagName==="SELECT"},Dt=function(t){return t.tagName==="OPTION"},Mt=function(t){return t.tagName==="OPTGROUP"},Nt=(function(t){Ke(e,t);function e(i){var s=i.element,r=i.classNames,n=i.template,o=i.extractPlaceholder,l=t.call(this,{element:s,classNames:r})||this;return l.template=n,l.extractPlaceholder=o,l}return Object.defineProperty(e.prototype,"placeholderOption",{get:function(){return this.element.querySelector('option[value=""]')||this.element.querySelector("option[placeholder]")},enumerable:!1,configurable:!0}),e.prototype.addOptions=function(i){var s=this,r=document.createDocumentFragment();i.forEach(function(n){var o=n;if(!o.element){var l=s.template(o);r.appendChild(l),o.element=l}}),this.element.appendChild(r)},e.prototype.optionsAsChoices=function(){var i=this,s=[];return this.element.querySelectorAll(":scope > option, :scope > optgroup").forEach(function(r){Dt(r)?s.push(i._optionToChoice(r)):Mt(r)&&s.push(i._optgroupToChoice(r))}),s},e.prototype._optionToChoice=function(i){return!i.hasAttribute("value")&&i.hasAttribute("placeholder")&&(i.setAttribute("value",""),i.value=""),{id:0,group:null,score:0,rank:0,value:i.value,label:i.label,element:i,active:!0,selected:this.extractPlaceholder?i.selected:i.hasAttribute("selected"),disabled:i.disabled,highlighted:!1,placeholder:this.extractPlaceholder&&(!i.value||i.hasAttribute("placeholder")),labelClass:typeof i.dataset.labelClass<"u"?$e(i.dataset.labelClass):void 0,labelDescription:typeof i.dataset.labelDescription<"u"?i.dataset.labelDescription:void 0,customProperties:wt(i.dataset.customProperties)}},e.prototype._optgroupToChoice=function(i){var s=this,r=i.querySelectorAll("option"),n=Array.from(r).map(function(o){return s._optionToChoice(o)});return{id:0,label:i.label||"",element:i,active:!!n.length,disabled:i.disabled,choices:n}},e})(He),jt={containerOuter:["choices"],containerInner:["choices__inner"],input:["choices__input"],inputCloned:["choices__input--cloned"],list:["choices__list"],listItems:["choices__list--multiple"],listSingle:["choices__list--single"],listDropdown:["choices__list--dropdown"],item:["choices__item"],itemSelectable:["choices__item--selectable"],itemDisabled:["choices__item--disabled"],itemChoice:["choices__item--choice"],description:["choices__description"],placeholder:["choices__placeholder"],group:["choices__group"],groupHeading:["choices__heading"],button:["choices__button"],activeState:["is-active"],focusState:["is-focused"],openState:["is-open"],disabledState:["is-disabled"],highlightedState:["is-highlighted"],selectedState:["is-selected"],flippedState:["is-flipped"],loadingState:["is-loading"],notice:["choices__notice"],addChoice:["choices__item--selectable","add-choice"],noResults:["has-no-results"],noChoices:["has-no-choices"]},Te={items:[],choices:[],silent:!1,renderChoiceLimit:-1,maxItemCount:-1,closeDropdownOnSelect:"auto",singleModeForMultiSelect:!1,addChoices:!1,addItems:!0,addItemFilter:function(t){return!!t&&t!==""},removeItems:!0,removeItemButton:!1,removeItemButtonAlignLeft:!1,editItems:!1,allowHTML:!1,allowHtmlUserInput:!1,duplicateItemsAllowed:!0,delimiter:",",paste:!0,searchEnabled:!0,searchChoices:!0,searchFloor:1,searchResultLimit:4,searchFields:["label","value"],position:"auto",resetScrollPosition:!0,shouldSort:!0,shouldSortItems:!1,sorter:yt,shadowRoot:null,placeholder:!0,placeholderValue:null,searchPlaceholderValue:null,prependValue:null,appendValue:null,renderSelectedChoices:"auto",loadingText:"Loading...",noResultsText:"No results found",noChoicesText:"No choices to choose from",itemSelectText:"Press to select",uniqueItemText:"Only unique values can be added",customAddItemText:"Only values matching specific conditions can be added",addItemText:function(t){return'Press Enter to add <b>"'.concat(t,'"</b>')},removeItemIconText:function(){return"Remove item"},removeItemLabelText:function(t){return"Remove item: ".concat(t)},maxItemText:function(t){return"Only ".concat(t," values can be added")},valueComparer:function(t,e){return t===e},fuseOptions:{includeScore:!0},labelId:"",callbackOnInit:null,callbackOnCreateTemplates:null,classNames:jt,appendGroupInSearch:!1},Le=function(t){var e=t.itemEl;e&&(e.remove(),t.itemEl=void 0)};function kt(t,e,i){var s=t,r=!0;switch(e.type){case y.ADD_ITEM:{e.item.selected=!0;var n=e.item.element;n&&(n.selected=!0,n.setAttribute("selected","")),s.push(e.item);break}case y.REMOVE_ITEM:{e.item.selected=!1;var n=e.item.element;if(n){n.selected=!1,n.removeAttribute("selected");var o=n.parentElement;o&&Be(o)&&o.type===R.SelectOne&&(o.value="")}Le(e.item),s=s.filter(function(c){return c.id!==e.item.id});break}case y.REMOVE_CHOICE:{Le(e.choice),s=s.filter(function(h){return h.id!==e.choice.id});break}case y.HIGHLIGHT_ITEM:{var l=e.highlighted,a=s.find(function(h){return h.id===e.item.id});a&&a.highlighted!==l&&(a.highlighted=l,i&&It(a,l?i.classNames.highlightedState:i.classNames.selectedState,l?i.classNames.selectedState:i.classNames.highlightedState));break}default:{r=!1;break}}return{state:s,update:r}}function Pt(t,e){var i=t,s=!0;switch(e.type){case y.ADD_GROUP:{i.push(e.group);break}case y.CLEAR_CHOICES:{i=[];break}default:{s=!1;break}}return{state:i,update:s}}function Ft(t,e,i){var s=t,r=!0;switch(e.type){case y.ADD_CHOICE:{s.push(e.choice);break}case y.REMOVE_CHOICE:{e.choice.choiceEl=void 0,e.choice.group&&(e.choice.group.choices=e.choice.group.choices.filter(function(o){return o.id!==e.choice.id})),s=s.filter(function(o){return o.id!==e.choice.id});break}case y.ADD_ITEM:case y.REMOVE_ITEM:{e.item.choiceEl=void 0;break}case y.FILTER_CHOICES:{var n=[];e.results.forEach(function(o){n[o.item.id]=o}),s.forEach(function(o){var l=n[o.id];l!==void 0?(o.score=l.score,o.rank=l.rank,o.active=!0):(o.score=0,o.rank=0,o.active=!1),i&&i.appendGroupInSearch&&(o.choiceEl=void 0)});break}case y.ACTIVATE_CHOICES:{s.forEach(function(o){o.active=e.active,i&&i.appendGroupInSearch&&(o.choiceEl=void 0)});break}case y.CLEAR_CHOICES:{s=[];break}default:{r=!1;break}}return{state:s,update:r}}var De={groups:Pt,items:kt,choices:Ft},Rt=(function(){function t(e){this._state=this.defaultState,this._listeners=[],this._txn=0,this._context=e}return Object.defineProperty(t.prototype,"defaultState",{get:function(){return{groups:[],items:[],choices:[]}},enumerable:!1,configurable:!0}),t.prototype.changeSet=function(e){return{groups:e,items:e,choices:e}},t.prototype.reset=function(){this._state=this.defaultState;var e=this.changeSet(!0);this._txn?this._changeSet=e:this._listeners.forEach(function(i){return i(e)})},t.prototype.subscribe=function(e){return this._listeners.push(e),this},t.prototype.dispatch=function(e){var i=this,s=this._state,r=!1,n=this._changeSet||this.changeSet(!1);Object.keys(De).forEach(function(o){var l=De[o](s[o],e,i._context);l.update&&(r=!0,n[o]=!0,s[o]=l.state)}),r&&(this._txn?this._changeSet=n:this._listeners.forEach(function(o){return o(n)}))},t.prototype.withTxn=function(e){this._txn++;try{e()}finally{if(this._txn=Math.max(0,this._txn-1),!this._txn){var i=this._changeSet;i&&(this._changeSet=void 0,this._listeners.forEach(function(s){return s(i)}))}}},Object.defineProperty(t.prototype,"state",{get:function(){return this._state},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"items",{get:function(){return this.state.items},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"highlightedActiveItems",{get:function(){return this.items.filter(function(e){return e.active&&e.highlighted})},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"choices",{get:function(){return this.state.choices},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"activeChoices",{get:function(){return this.choices.filter(function(e){return e.active})},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"searchableChoices",{get:function(){return this.choices.filter(function(e){return!e.disabled&&!e.placeholder})},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"groups",{get:function(){return this.state.groups},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"activeGroups",{get:function(){var e=this;return this.state.groups.filter(function(i){var s=i.active&&!i.disabled,r=e.state.choices.some(function(n){return n.active&&!n.disabled});return s&&r},[])},enumerable:!1,configurable:!0}),t.prototype.inTxn=function(){return this._txn>0},t.prototype.getChoiceById=function(e){return this.activeChoices.find(function(i){return i.id===e})},t.prototype.getGroupById=function(e){return this.groups.find(function(i){return i.id===e})},t})(),E={noChoices:"no-choices",noResults:"no-results",addChoice:"add-choice",generic:""};function Kt(t,e,i){return(e=Ht(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Me(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),i.push.apply(i,s)}return i}function G(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?Me(Object(i),!0).forEach(function(s){Kt(t,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Me(Object(i)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(i,s))})}return t}function Vt(t,e){if(typeof t!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var s=i.call(t,e);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Ht(t){var e=Vt(t,"string");return typeof e=="symbol"?e:e+""}function k(t){return Array.isArray?Array.isArray(t):We(t)==="[object Array]"}function $t(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function Bt(t){return t==null?"":$t(t)}function N(t){return typeof t=="string"}function Ge(t){return typeof t=="number"}function Gt(t){return t===!0||t===!1||Ut(t)&&We(t)=="[object Boolean]"}function Ue(t){return typeof t=="object"}function Ut(t){return Ue(t)&&t!==null}function O(t){return t!=null}function le(t){return!t.trim().length}function We(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const Wt="Incorrect 'index' type",Yt=t=>`Invalid value for key ${t}`,zt=t=>`Pattern length exceeds max of ${t}.`,qt=t=>`Missing ${t} property in key`,Xt=t=>`Property 'weight' in key '${t}' must be a positive integer`,Ne=Object.prototype.hasOwnProperty;class Jt{constructor(e){this._keys=[],this._keyMap={};let i=0;e.forEach(s=>{let r=Ye(s);this._keys.push(r),this._keyMap[r.id]=r,i+=r.weight}),this._keys.forEach(s=>{s.weight/=i})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Ye(t){let e=null,i=null,s=null,r=1,n=null;if(N(t)||k(t))s=t,e=je(t),i=de(t);else{if(!Ne.call(t,"name"))throw new Error(qt("name"));const o=t.name;if(s=o,Ne.call(t,"weight")&&(r=t.weight,r<=0))throw new Error(Xt(o));e=je(o),i=de(o),n=t.getFn}return{path:e,id:i,weight:r,src:s,getFn:n}}function je(t){return k(t)?t:t.split(".")}function de(t){return k(t)?t.join("."):t}function Qt(t,e){let i=[],s=!1;const r=(n,o,l)=>{if(O(n))if(!o[l])i.push(n);else{let a=o[l];const h=n[a];if(!O(h))return;if(l===o.length-1&&(N(h)||Ge(h)||Gt(h)))i.push(Bt(h));else if(k(h)){s=!0;for(let c=0,u=h.length;c<u;c+=1)r(h[c],o,l+1)}else o.length&&r(h,o,l+1)}};return r(t,N(e)?e.split("."):e,0),s?i:i[0]}const Zt={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},ei={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},ti={location:0,threshold:.6,distance:100},ii={useExtendedSearch:!1,getFn:Qt,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var v=G(G(G(G({},ei),Zt),ti),ii);const si=/[^ ]+/g;function ri(t=1,e=3){const i=new Map,s=Math.pow(10,e);return{get(r){const n=r.match(si).length;if(i.has(n))return i.get(n);const o=1/Math.pow(n,.5*t),l=parseFloat(Math.round(o*s)/s);return i.set(n,l),l},clear(){i.clear()}}}class be{constructor({getFn:e=v.getFn,fieldNormWeight:i=v.fieldNormWeight}={}){this.norm=ri(i,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((i,s)=>{this._keysMap[i.id]=s})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,N(this.docs[0])?this.docs.forEach((e,i)=>{this._addString(e,i)}):this.docs.forEach((e,i)=>{this._addObject(e,i)}),this.norm.clear())}add(e){const i=this.size();N(e)?this._addString(e,i):this._addObject(e,i)}removeAt(e){this.records.splice(e,1);for(let i=e,s=this.size();i<s;i+=1)this.records[i].i-=1}getValueForItemAtKeyId(e,i){return e[this._keysMap[i]]}size(){return this.records.length}_addString(e,i){if(!O(e)||le(e))return;let s={v:e,i,n:this.norm.get(e)};this.records.push(s)}_addObject(e,i){let s={i,$:{}};this.keys.forEach((r,n)=>{let o=r.getFn?r.getFn(e):this.getFn(e,r.path);if(O(o)){if(k(o)){let l=[];const a=[{nestedArrIndex:-1,value:o}];for(;a.length;){const{nestedArrIndex:h,value:c}=a.pop();if(O(c))if(N(c)&&!le(c)){let u={v:c,i:h,n:this.norm.get(c)};l.push(u)}else k(c)&&c.forEach((u,f)=>{a.push({nestedArrIndex:f,value:u})})}s.$[n]=l}else if(N(o)&&!le(o)){let l={v:o,n:this.norm.get(o)};s.$[n]=l}}}),this.records.push(s)}toJSON(){return{keys:this.keys,records:this.records}}}function ze(t,e,{getFn:i=v.getFn,fieldNormWeight:s=v.fieldNormWeight}={}){const r=new be({getFn:i,fieldNormWeight:s});return r.setKeys(t.map(Ye)),r.setSources(e),r.create(),r}function ni(t,{getFn:e=v.getFn,fieldNormWeight:i=v.fieldNormWeight}={}){const{keys:s,records:r}=t,n=new be({getFn:e,fieldNormWeight:i});return n.setKeys(s),n.setIndexRecords(r),n}function Z(t,{errors:e=0,currentLocation:i=0,expectedLocation:s=0,distance:r=v.distance,ignoreLocation:n=v.ignoreLocation}={}){const o=e/t.length;if(n)return o;const l=Math.abs(s-i);return r?o+l/r:l?1:o}function oi(t=[],e=v.minMatchCharLength){let i=[],s=-1,r=-1,n=0;for(let o=t.length;n<o;n+=1){let l=t[n];l&&s===-1?s=n:!l&&s!==-1&&(r=n-1,r-s+1>=e&&i.push([s,r]),s=-1)}return t[n-1]&&n-s>=e&&i.push([s,n-1]),i}const H=32;function li(t,e,i,{location:s=v.location,distance:r=v.distance,threshold:n=v.threshold,findAllMatches:o=v.findAllMatches,minMatchCharLength:l=v.minMatchCharLength,includeMatches:a=v.includeMatches,ignoreLocation:h=v.ignoreLocation}={}){if(e.length>H)throw new Error(zt(H));const c=e.length,u=t.length,f=Math.max(0,Math.min(s,u));let m=n,d=f;const p=l>1||a,b=p?Array(u):[];let g;for(;(g=t.indexOf(e,d))>-1;){let x=Z(e,{currentLocation:g,expectedLocation:f,distance:r,ignoreLocation:h});if(m=Math.min(x,m),d=g+c,p){let P=0;for(;P<c;)b[g+P]=1,P+=1}}d=-1;let S=[],w=1,V=c+u;const et=1<<c-1;for(let x=0;x<c;x+=1){let P=0,F=V;for(;P<F;)Z(e,{errors:x,currentLocation:f+F,expectedLocation:f,distance:r,ignoreLocation:h})<=m?P=F:V=F,F=Math.floor((V-P)/2+P);V=F;let ye=Math.max(1,f-F+1),oe=o?u:Math.min(f+F,u)+c,B=Array(oe+2);B[oe+1]=(1<<x)-1;for(let L=oe;L>=ye;L-=1){let X=L-1,Ee=i[t.charAt(X)];if(p&&(b[X]=+!!Ee),B[L]=(B[L+1]<<1|1)&Ee,x&&(B[L]|=(S[L+1]|S[L])<<1|1|S[L+1]),B[L]&et&&(w=Z(e,{errors:x,currentLocation:X,expectedLocation:f,distance:r,ignoreLocation:h}),w<=m)){if(m=w,d=X,d<=f)break;ye=Math.max(1,2*f-d)}}if(Z(e,{errors:x+1,currentLocation:f,expectedLocation:f,distance:r,ignoreLocation:h})>m)break;S=B}const ne={isMatch:d>=0,score:Math.max(.001,w)};if(p){const x=oi(b,l);x.length?a&&(ne.indices=x):ne.isMatch=!1}return ne}function ai(t){let e={};for(let i=0,s=t.length;i<s;i+=1){const r=t.charAt(i);e[r]=(e[r]||0)|1<<s-i-1}return e}class qe{constructor(e,{location:i=v.location,threshold:s=v.threshold,distance:r=v.distance,includeMatches:n=v.includeMatches,findAllMatches:o=v.findAllMatches,minMatchCharLength:l=v.minMatchCharLength,isCaseSensitive:a=v.isCaseSensitive,ignoreLocation:h=v.ignoreLocation}={}){if(this.options={location:i,threshold:s,distance:r,includeMatches:n,findAllMatches:o,minMatchCharLength:l,isCaseSensitive:a,ignoreLocation:h},this.pattern=a?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const c=(f,m)=>{this.chunks.push({pattern:f,alphabet:ai(f),startIndex:m})},u=this.pattern.length;if(u>H){let f=0;const m=u%H,d=u-m;for(;f<d;)c(this.pattern.substr(f,H),f),f+=H;if(m){const p=u-H;c(this.pattern.substr(p),p)}}else c(this.pattern,0)}searchIn(e){const{isCaseSensitive:i,includeMatches:s}=this.options;if(i||(e=e.toLowerCase()),this.pattern===e){let d={isMatch:!0,score:0};return s&&(d.indices=[[0,e.length-1]]),d}const{location:r,distance:n,threshold:o,findAllMatches:l,minMatchCharLength:a,ignoreLocation:h}=this.options;let c=[],u=0,f=!1;this.chunks.forEach(({pattern:d,alphabet:p,startIndex:b})=>{const{isMatch:g,score:S,indices:w}=li(e,d,p,{location:r+b,distance:n,threshold:o,findAllMatches:l,minMatchCharLength:a,includeMatches:s,ignoreLocation:h});g&&(f=!0),u+=S,g&&w&&(c=[...c,...w])});let m={isMatch:f,score:f?u/this.chunks.length:1};return f&&s&&(m.indices=c),m}}class K{constructor(e){this.pattern=e}static isMultiMatch(e){return ke(e,this.multiRegex)}static isSingleMatch(e){return ke(e,this.singleRegex)}search(){}}function ke(t,e){const i=t.match(e);return i?i[1]:null}class ci extends K{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const i=e===this.pattern;return{isMatch:i,score:i?0:1,indices:[0,this.pattern.length-1]}}}class hi extends K{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const s=e.indexOf(this.pattern)===-1;return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class ui extends K{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const i=e.startsWith(this.pattern);return{isMatch:i,score:i?0:1,indices:[0,this.pattern.length-1]}}}class di extends K{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const i=!e.startsWith(this.pattern);return{isMatch:i,score:i?0:1,indices:[0,e.length-1]}}}class fi extends K{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const i=e.endsWith(this.pattern);return{isMatch:i,score:i?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class pi extends K{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const i=!e.endsWith(this.pattern);return{isMatch:i,score:i?0:1,indices:[0,e.length-1]}}}class Xe extends K{constructor(e,{location:i=v.location,threshold:s=v.threshold,distance:r=v.distance,includeMatches:n=v.includeMatches,findAllMatches:o=v.findAllMatches,minMatchCharLength:l=v.minMatchCharLength,isCaseSensitive:a=v.isCaseSensitive,ignoreLocation:h=v.ignoreLocation}={}){super(e),this._bitapSearch=new qe(e,{location:i,threshold:s,distance:r,includeMatches:n,findAllMatches:o,minMatchCharLength:l,isCaseSensitive:a,ignoreLocation:h})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Je extends K{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let i=0,s;const r=[],n=this.pattern.length;for(;(s=e.indexOf(this.pattern,i))>-1;)i=s+n,r.push([s,i-1]);const o=!!r.length;return{isMatch:o,score:o?0:1,indices:r}}}const fe=[ci,Je,ui,di,pi,fi,hi,Xe],Pe=fe.length,mi=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,vi="|";function _i(t,e={}){return t.split(vi).map(i=>{let s=i.trim().split(mi).filter(n=>n&&!!n.trim()),r=[];for(let n=0,o=s.length;n<o;n+=1){const l=s[n];let a=!1,h=-1;for(;!a&&++h<Pe;){const c=fe[h];let u=c.isMultiMatch(l);u&&(r.push(new c(u,e)),a=!0)}if(!a)for(h=-1;++h<Pe;){const c=fe[h];let u=c.isSingleMatch(l);if(u){r.push(new c(u,e));break}}}return r})}const gi=new Set([Xe.type,Je.type]);class bi{constructor(e,{isCaseSensitive:i=v.isCaseSensitive,includeMatches:s=v.includeMatches,minMatchCharLength:r=v.minMatchCharLength,ignoreLocation:n=v.ignoreLocation,findAllMatches:o=v.findAllMatches,location:l=v.location,threshold:a=v.threshold,distance:h=v.distance}={}){this.query=null,this.options={isCaseSensitive:i,includeMatches:s,minMatchCharLength:r,findAllMatches:o,ignoreLocation:n,location:l,threshold:a,distance:h},this.pattern=i?e:e.toLowerCase(),this.query=_i(this.pattern,this.options)}static condition(e,i){return i.useExtendedSearch}searchIn(e){const i=this.query;if(!i)return{isMatch:!1,score:1};const{includeMatches:s,isCaseSensitive:r}=this.options;e=r?e:e.toLowerCase();let n=0,o=[],l=0;for(let a=0,h=i.length;a<h;a+=1){const c=i[a];o.length=0,n=0;for(let u=0,f=c.length;u<f;u+=1){const m=c[u],{isMatch:d,indices:p,score:b}=m.search(e);if(d){if(n+=1,l+=b,s){const g=m.constructor.type;gi.has(g)?o=[...o,...p]:o.push(p)}}else{l=0,n=0,o.length=0;break}}if(n){let u={isMatch:!0,score:l/n};return s&&(u.indices=o),u}}return{isMatch:!1,score:1}}}const pe=[];function yi(...t){pe.push(...t)}function me(t,e){for(let i=0,s=pe.length;i<s;i+=1){let r=pe[i];if(r.condition(t,e))return new r(t,e)}return new qe(t,e)}const ee={AND:"$and",OR:"$or"},ve={PATH:"$path",PATTERN:"$val"},_e=t=>!!(t[ee.AND]||t[ee.OR]),Ei=t=>!!t[ve.PATH],Ci=t=>!k(t)&&Ue(t)&&!_e(t),Fe=t=>({[ee.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function Qe(t,e,{auto:i=!0}={}){const s=r=>{let n=Object.keys(r);const o=Ei(r);if(!o&&n.length>1&&!_e(r))return s(Fe(r));if(Ci(r)){const a=o?r[ve.PATH]:n[0],h=o?r[ve.PATTERN]:r[a];if(!N(h))throw new Error(Yt(a));const c={keyId:de(a),pattern:h};return i&&(c.searcher=me(h,e)),c}let l={children:[],operator:n[0]};return n.forEach(a=>{const h=r[a];k(h)&&h.forEach(c=>{l.children.push(s(c))})}),l};return _e(t)||(t=Fe(t)),s(t)}function Si(t,{ignoreFieldNorm:e=v.ignoreFieldNorm}){t.forEach(i=>{let s=1;i.matches.forEach(({key:r,norm:n,score:o})=>{const l=r?r.weight:null;s*=Math.pow(o===0&&l?Number.EPSILON:o,(l||1)*(e?1:n))}),i.score=s})}function wi(t,e){const i=t.matches;e.matches=[],O(i)&&i.forEach(s=>{if(!O(s.indices)||!s.indices.length)return;const{indices:r,value:n}=s;let o={indices:r,value:n};s.key&&(o.key=s.key.src),s.idx>-1&&(o.refIndex=s.idx),e.matches.push(o)})}function Ii(t,e){e.score=t.score}function Ai(t,e,{includeMatches:i=v.includeMatches,includeScore:s=v.includeScore}={}){const r=[];return i&&r.push(wi),s&&r.push(Ii),t.map(n=>{const{idx:o}=n,l={item:e[o],refIndex:o};return r.length&&r.forEach(a=>{a(n,l)}),l})}class U{constructor(e,i={},s){this.options=G(G({},v),i),this.options.useExtendedSearch,this._keyStore=new Jt(this.options.keys),this.setCollection(e,s)}setCollection(e,i){if(this._docs=e,i&&!(i instanceof be))throw new Error(Wt);this._myIndex=i||ze(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){O(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const i=[];for(let s=0,r=this._docs.length;s<r;s+=1){const n=this._docs[s];e(n,s)&&(this.removeAt(s),s-=1,r-=1,i.push(n))}return i}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:i=-1}={}){const{includeMatches:s,includeScore:r,shouldSort:n,sortFn:o,ignoreFieldNorm:l}=this.options;let a=N(e)?N(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return Si(a,{ignoreFieldNorm:l}),n&&a.sort(o),Ge(i)&&i>-1&&(a=a.slice(0,i)),Ai(a,this._docs,{includeMatches:s,includeScore:r})}_searchStringList(e){const i=me(e,this.options),{records:s}=this._myIndex,r=[];return s.forEach(({v:n,i:o,n:l})=>{if(!O(n))return;const{isMatch:a,score:h,indices:c}=i.searchIn(n);a&&r.push({item:n,idx:o,matches:[{score:h,value:n,norm:l,indices:c}]})}),r}_searchLogical(e){const i=Qe(e,this.options),s=(l,a,h)=>{if(!l.children){const{keyId:u,searcher:f}=l,m=this._findMatches({key:this._keyStore.get(u),value:this._myIndex.getValueForItemAtKeyId(a,u),searcher:f});return m&&m.length?[{idx:h,item:a,matches:m}]:[]}const c=[];for(let u=0,f=l.children.length;u<f;u+=1){const m=l.children[u],d=s(m,a,h);if(d.length)c.push(...d);else if(l.operator===ee.AND)return[]}return c},r=this._myIndex.records,n={},o=[];return r.forEach(({$:l,i:a})=>{if(O(l)){let h=s(i,l,a);h.length&&(n[a]||(n[a]={idx:a,item:l,matches:[]},o.push(n[a])),h.forEach(({matches:c})=>{n[a].matches.push(...c)}))}}),o}_searchObjectList(e){const i=me(e,this.options),{keys:s,records:r}=this._myIndex,n=[];return r.forEach(({$:o,i:l})=>{if(!O(o))return;let a=[];s.forEach((h,c)=>{a.push(...this._findMatches({key:h,value:o[c],searcher:i}))}),a.length&&n.push({idx:l,item:o,matches:a})}),n}_findMatches({key:e,value:i,searcher:s}){if(!O(i))return[];let r=[];if(k(i))i.forEach(({v:n,i:o,n:l})=>{if(!O(n))return;const{isMatch:a,score:h,indices:c}=s.searchIn(n);a&&r.push({score:h,key:e,value:n,idx:o,norm:l,indices:c})});else{const{v:n,n:o}=i,{isMatch:l,score:a,indices:h}=s.searchIn(n);l&&r.push({score:a,key:e,value:n,norm:o,indices:h})}return r}}U.version="7.0.0";U.createIndex=ze;U.parseIndex=ni;U.config=v;U.parseQuery=Qe;yi(bi);var Oi=(function(){function t(e){this._haystack=[],this._fuseOptions=A(A({},e.fuseOptions),{keys:ct([],e.searchFields),includeMatches:!0})}return t.prototype.index=function(e){this._haystack=e,this._fuse&&this._fuse.setCollection(e)},t.prototype.reset=function(){this._haystack=[],this._fuse=void 0},t.prototype.isEmptyIndex=function(){return!this._haystack.length},t.prototype.search=function(e){this._fuse||(this._fuse=new U(this._haystack,this._fuseOptions));var i=this._fuse.search(e);return i.map(function(s,r){return{item:s.item,score:s.score||0,rank:r+1}})},t})();function xi(t){return new Oi(t)}var Ti=function(t){for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0},ae=function(t,e,i){var s=t.dataset,r=e.customProperties,n=e.labelClass,o=e.labelDescription;n&&(s.labelClass=re(n).join(" ")),o&&(s.labelDescription=o),i&&r&&(typeof r=="string"?s.customProperties=r:typeof r=="object"&&!Ti(r)&&(s.customProperties=JSON.stringify(r)))},Re=function(t,e,i){var s=e&&t.querySelector("label[for='".concat(e,"']")),r=s&&s.innerText;r&&i.setAttribute("aria-label",r)},Li={containerOuter:function(t,e,i,s,r,n,o){var l=t.classNames.containerOuter,a=document.createElement("div");return _(a,l),a.dataset.type=n,e&&(a.dir=e),s&&(a.tabIndex=0),i&&(a.setAttribute("role",r?"combobox":"listbox"),r?a.setAttribute("aria-autocomplete","list"):o||Re(this._docRoot,this.passedElement.element.id,a),a.setAttribute("aria-haspopup","true"),a.setAttribute("aria-expanded","false")),o&&a.setAttribute("aria-labelledby",o),a},containerInner:function(t){var e=t.classNames.containerInner,i=document.createElement("div");return _(i,e),i},itemList:function(t,e){var i=t.searchEnabled,s=t.classNames,r=s.list,n=s.listSingle,o=s.listItems,l=document.createElement("div");return _(l,r),_(l,e?n:o),this._isSelectElement&&i&&l.setAttribute("role","listbox"),l},placeholder:function(t,e){var i=t.allowHTML,s=t.classNames.placeholder,r=document.createElement("div");return _(r,s),j(r,i,e),r},item:function(t,e,i){var s=t.allowHTML,r=t.removeItemButtonAlignLeft,n=t.removeItemIconText,o=t.removeItemLabelText,l=t.classNames,a=l.item,h=l.button,c=l.highlightedState,u=l.itemSelectable,f=l.placeholder,m=$(e.value),d=document.createElement("div");if(_(d,a),e.labelClass){var p=document.createElement("span");j(p,s,e.label),_(p,e.labelClass),d.appendChild(p)}else j(d,s,e.label);if(d.dataset.item="",d.dataset.id=e.id,d.dataset.value=m,ae(d,e,!0),(e.disabled||this.containerOuter.isDisabled)&&d.setAttribute("aria-disabled","true"),this._isSelectElement&&(d.setAttribute("aria-selected","true"),d.setAttribute("role","option")),e.placeholder&&(_(d,f),d.dataset.placeholder=""),_(d,e.highlighted?c:u),i){e.disabled&&M(d,u),d.dataset.deletable="";var b=document.createElement("button");b.type="button",_(b,h),j(b,!0,q(n,e.value));var g=q(o,e.value);g&&b.setAttribute("aria-label",g),b.dataset.button="",r?d.insertAdjacentElement("afterbegin",b):d.appendChild(b)}return d},choiceList:function(t,e){var i=t.classNames.list,s=document.createElement("div");return _(s,i),e||s.setAttribute("aria-multiselectable","true"),s.setAttribute("role","listbox"),s},choiceGroup:function(t,e){var i=t.allowHTML,s=t.classNames,r=s.group,n=s.groupHeading,o=s.itemDisabled,l=e.id,a=e.label,h=e.disabled,c=$(a),u=document.createElement("div");_(u,r),h&&_(u,o),u.setAttribute("role","group"),u.dataset.group="",u.dataset.id=l,u.dataset.value=c,h&&u.setAttribute("aria-disabled","true");var f=document.createElement("div");return _(f,n),j(f,i,a||""),u.appendChild(f),u},choice:function(t,e,i,s){var r=t.allowHTML,n=t.classNames,o=n.item,l=n.itemChoice,a=n.itemSelectable,h=n.selectedState,c=n.itemDisabled,u=n.description,f=n.placeholder,m=e.label,d=$(e.value),p=document.createElement("div");p.id=e.elementId,_(p,o),_(p,l),s&&typeof m=="string"&&(m=ge(r,m),m+=" (".concat(s,")"),m={trusted:m});var b=p;if(e.labelClass){var g=document.createElement("span");j(g,r,m),_(g,e.labelClass),b=g,p.appendChild(g)}else j(p,r,m);if(e.labelDescription){var S="".concat(e.elementId,"-description");b.setAttribute("aria-describedby",S);var w=document.createElement("span");j(w,r,e.labelDescription),w.id=S,_(w,u),p.appendChild(w)}return e.selected&&_(p,h),e.placeholder&&_(p,f),p.setAttribute("role",e.group?"treeitem":"option"),p.dataset.choice="",p.dataset.id=e.id,p.dataset.value=d,i&&(p.dataset.selectText=i),e.group&&(p.dataset.groupId="".concat(e.group.id)),ae(p,e,!1),e.disabled?(_(p,c),p.dataset.choiceDisabled="",p.setAttribute("aria-disabled","true")):(_(p,a),p.dataset.choiceSelectable=""),p},input:function(t,e){var i=t.classNames,s=i.input,r=i.inputCloned,n=t.labelId,o=document.createElement("input");return o.type="search",_(o,s),_(o,r),o.autocomplete="off",o.autocapitalize="off",o.spellcheck=!1,o.setAttribute("aria-autocomplete","list"),e?o.setAttribute("aria-label",e):n||Re(this._docRoot,this.passedElement.element.id,o),o},dropdown:function(t){var e=t.classNames,i=e.list,s=e.listDropdown,r=document.createElement("div");return _(r,i),_(r,s),r.setAttribute("aria-expanded","false"),r},notice:function(t,e,i){var s=t.classNames,r=s.item,n=s.itemChoice,o=s.addChoice,l=s.noResults,a=s.noChoices,h=s.notice;i===void 0&&(i=E.generic);var c=document.createElement("div");switch(j(c,!0,e),_(c,r),_(c,n),_(c,h),i){case E.addChoice:_(c,o);break;case E.noResults:_(c,l);break;case E.noChoices:_(c,a);break}return i===E.addChoice&&(c.dataset.choiceSelectable="",c.dataset.choice=""),c},option:function(t){var e=$(t.label),i=new Option(e,t.value,!1,t.selected);return ae(i,t,!0),i.disabled=t.disabled,t.selected&&i.setAttribute("selected",""),i}},Di="-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style,Mi={},ce=function(t){if(t)return t.dataset.id?parseInt(t.dataset.id,10):void 0},Y="[data-choice-selectable]",he=(function(){function t(e,i){e===void 0&&(e="[data-choice]"),i===void 0&&(i={});var s=this;this.initialisedOK=void 0,this._hasNonChoicePlaceholder=!1,this._lastAddedChoiceId=0,this._lastAddedGroupId=0;var r=t.defaults;this.config=A(A(A({},r.allOptions),r.options),i),ht.forEach(function(g){s.config[g]=A(A(A({},r.allOptions[g]),r.options[g]),i[g])});var n=this.config;n.silent||this._validateConfig();var o=n.shadowRoot||document.documentElement;this._docRoot=o;var l=typeof e=="string"?o.querySelector(e):e;if(!l||typeof l!="object"||!(Lt(l)||Be(l)))throw TypeError(!l&&typeof e=="string"?"Selector ".concat(e," failed to find an element"):"Expected one of the following types text|select-one|select-multiple");var a=l.type,h=a===R.Text;(h||n.maxItemCount!==1)&&(n.singleModeForMultiSelect=!1),n.singleModeForMultiSelect&&(a=R.SelectMultiple);var c=a===R.SelectOne,u=a===R.SelectMultiple,f=c||u;if(this._elementType=a,this._isTextElement=h,this._isSelectOneElement=c,this._isSelectMultipleElement=u,this._isSelectElement=c||u,this._canAddUserChoices=h&&n.addItems||f&&n.addChoices,typeof n.renderSelectedChoices!="boolean"&&(n.renderSelectedChoices=n.renderSelectedChoices==="always"||c),n.closeDropdownOnSelect==="auto"?n.closeDropdownOnSelect=h||c||n.singleModeForMultiSelect:n.closeDropdownOnSelect=z(n.closeDropdownOnSelect),n.placeholder&&(n.placeholderValue?this._hasNonChoicePlaceholder=!0:l.dataset.placeholder&&(this._hasNonChoicePlaceholder=!0,n.placeholderValue=l.dataset.placeholder)),i.addItemFilter&&typeof i.addItemFilter!="function"){var m=i.addItemFilter instanceof RegExp?i.addItemFilter:new RegExp(i.addItemFilter);n.addItemFilter=m.test.bind(m)}if(this._isTextElement)this.passedElement=new Tt({element:l,classNames:n.classNames});else{var d=l;this.passedElement=new Nt({element:d,classNames:n.classNames,template:function(g){return s._templates.option(g)},extractPlaceholder:n.placeholder&&!this._hasNonChoicePlaceholder})}if(this.initialised=!1,this._store=new Rt(n),this._currentValue="",n.searchEnabled=!h&&n.searchEnabled||u,this._canSearch=n.searchEnabled,this._isScrollingOnIe=!1,this._highlightPosition=0,this._wasTap=!0,this._placeholderValue=this._generatePlaceholderValue(),this._baseId=vt(l,"choices-"),this._direction=l.dir,!this._direction){var p=window.getComputedStyle(l).direction,b=window.getComputedStyle(document.documentElement).direction;p!==b&&(this._direction=p)}if(this._idNames={itemChoice:"item-choice"},this._templates=r.templates,this._render=this._render.bind(this),this._onFocus=this._onFocus.bind(this),this._onBlur=this._onBlur.bind(this),this._onKeyUp=this._onKeyUp.bind(this),this._onKeyDown=this._onKeyDown.bind(this),this._onInput=this._onInput.bind(this),this._onClick=this._onClick.bind(this),this._onTouchMove=this._onTouchMove.bind(this),this._onTouchEnd=this._onTouchEnd.bind(this),this._onMouseDown=this._onMouseDown.bind(this),this._onMouseOver=this._onMouseOver.bind(this),this._onFormReset=this._onFormReset.bind(this),this._onSelectKey=this._onSelectKey.bind(this),this._onEnterKey=this._onEnterKey.bind(this),this._onEscapeKey=this._onEscapeKey.bind(this),this._onDirectionKey=this._onDirectionKey.bind(this),this._onDeleteKey=this._onDeleteKey.bind(this),this.passedElement.isActive){n.silent||console.warn("Trying to initialise Choices on element already initialised",{element:e}),this.initialised=!0,this.initialisedOK=!1;return}this.init(),this._initialItems=this._store.items.map(function(g){return g.value})}return Object.defineProperty(t,"defaults",{get:function(){return Object.preventExtensions({get options(){return Mi},get allOptions(){return Te},get templates(){return Li}})},enumerable:!1,configurable:!0}),t.prototype.init=function(){if(!(this.initialised||this.initialisedOK!==void 0)){this._searcher=xi(this.config),this._loadChoices(),this._createTemplates(),this._createElements(),this._createStructure(),this._isTextElement&&!this.config.addItems||this.passedElement.element.hasAttribute("disabled")||this.passedElement.element.closest("fieldset:disabled")?this.disable():(this.enable(),this._addEventListeners()),this._initStore(),this.initialised=!0,this.initialisedOK=!0;var e=this.config.callbackOnInit;typeof e=="function"&&e.call(this)}},t.prototype.destroy=function(){this.initialised&&(this._removeEventListeners(),this.passedElement.reveal(),this.containerOuter.unwrap(this.passedElement.element),this._store._listeners=[],this.clearStore(!1),this._stopSearch(),this._templates=t.defaults.templates,this.initialised=!1,this.initialisedOK=void 0)},t.prototype.enable=function(){return this.passedElement.isDisabled&&this.passedElement.enable(),this.containerOuter.isDisabled&&(this._addEventListeners(),this.input.enable(),this.containerOuter.enable()),this},t.prototype.disable=function(){return this.passedElement.isDisabled||this.passedElement.disable(),this.containerOuter.isDisabled||(this._removeEventListeners(),this.input.disable(),this.containerOuter.disable()),this},t.prototype.highlightItem=function(e,i){if(i===void 0&&(i=!0),!e||!e.id)return this;var s=this._store.items.find(function(r){return r.id===e.id});return!s||s.highlighted?this:(this._store.dispatch(Q(s,!0)),i&&this.passedElement.triggerEvent(I.highlightItem,this._getChoiceForOutput(s)),this)},t.prototype.unhighlightItem=function(e,i){if(i===void 0&&(i=!0),!e||!e.id)return this;var s=this._store.items.find(function(r){return r.id===e.id});return!s||!s.highlighted?this:(this._store.dispatch(Q(s,!1)),i&&this.passedElement.triggerEvent(I.unhighlightItem,this._getChoiceForOutput(s)),this)},t.prototype.highlightAll=function(){var e=this;return this._store.withTxn(function(){e._store.items.forEach(function(i){i.highlighted||(e._store.dispatch(Q(i,!0)),e.passedElement.triggerEvent(I.highlightItem,e._getChoiceForOutput(i)))})}),this},t.prototype.unhighlightAll=function(){var e=this;return this._store.withTxn(function(){e._store.items.forEach(function(i){i.highlighted&&(e._store.dispatch(Q(i,!1)),e.passedElement.triggerEvent(I.highlightItem,e._getChoiceForOutput(i)))})}),this},t.prototype.removeActiveItemsByValue=function(e){var i=this;return this._store.withTxn(function(){i._store.items.filter(function(s){return s.value===e}).forEach(function(s){return i._removeItem(s)})}),this},t.prototype.removeActiveItems=function(e){var i=this;return this._store.withTxn(function(){i._store.items.filter(function(s){var r=s.id;return r!==e}).forEach(function(s){return i._removeItem(s)})}),this},t.prototype.removeHighlightedItems=function(e){var i=this;return e===void 0&&(e=!1),this._store.withTxn(function(){i._store.highlightedActiveItems.forEach(function(s){i._removeItem(s),e&&i._triggerChange(s.value)})}),this},t.prototype.showDropdown=function(e){var i=this;return this.dropdown.isActive?this:(e===void 0&&(e=!this._canSearch),requestAnimationFrame(function(){i.dropdown.show();var s=i.dropdown.element.getBoundingClientRect();i.containerOuter.open(s.bottom,s.height),e||i.input.focus(),i.passedElement.triggerEvent(I.showDropdown)}),this)},t.prototype.hideDropdown=function(e){var i=this;return this.dropdown.isActive?(requestAnimationFrame(function(){i.dropdown.hide(),i.containerOuter.close(),!e&&i._canSearch&&(i.input.removeActiveDescendant(),i.input.blur()),i.passedElement.triggerEvent(I.hideDropdown)}),this):this},t.prototype.getValue=function(e){var i=this,s=this._store.items.map(function(r){return e?r.value:i._getChoiceForOutput(r)});return this._isSelectOneElement||this.config.singleModeForMultiSelect?s[0]:s},t.prototype.setValue=function(e){var i=this;return this.initialisedOK?(this._store.withTxn(function(){e.forEach(function(s){s&&i._addChoice(D(s,!1))})}),this._searcher.reset(),this):(this._warnChoicesInitFailed("setValue"),this)},t.prototype.setChoiceByValue=function(e){var i=this;return this.initialisedOK?this._isTextElement?this:(this._store.withTxn(function(){var s=Array.isArray(e)?e:[e];s.forEach(function(r){return i._findAndSelectChoiceByValue(r)}),i.unhighlightAll()}),this._searcher.reset(),this):(this._warnChoicesInitFailed("setChoiceByValue"),this)},t.prototype.setChoices=function(e,i,s,r,n,o){var l=this;if(e===void 0&&(e=[]),i===void 0&&(i="value"),s===void 0&&(s="label"),r===void 0&&(r=!1),n===void 0&&(n=!0),o===void 0&&(o=!1),!this.initialisedOK)return this._warnChoicesInitFailed("setChoices"),this;if(!this._isSelectElement)throw new TypeError("setChoices can't be used with INPUT based Choices");if(typeof i!="string"||!i)throw new TypeError("value parameter must be a name of 'value' field in passed objects");if(typeof e=="function"){var a=e(this);if(typeof Promise=="function"&&a instanceof Promise)return new Promise(function(h){return requestAnimationFrame(h)}).then(function(){return l._handleLoadingState(!0)}).then(function(){return a}).then(function(h){return l.setChoices(h,i,s,r,n,o)}).catch(function(h){l.config.silent||console.error(h)}).then(function(){return l._handleLoadingState(!1)}).then(function(){return l});if(!Array.isArray(a))throw new TypeError(".setChoices first argument function must return either array of choices or Promise, got: ".concat(typeof a));return this.setChoices(a,i,s,!1)}if(!Array.isArray(e))throw new TypeError(".setChoices must be called either with array of choices with a function resulting into Promise of array of choices");return this.containerOuter.removeLoadingState(),this._store.withTxn(function(){n&&(l._isSearching=!1),r&&l.clearChoices(!0,o);var h=i==="value",c=s==="label";e.forEach(function(u){if("choices"in u){var f=u;c||(f=A(A({},f),{label:f[s]})),l._addGroup(D(f,!0))}else{var m=u;(!c||!h)&&(m=A(A({},m),{value:m[i],label:m[s]}));var d=D(m,!1);l._addChoice(d),d.placeholder&&!l._hasNonChoicePlaceholder&&(l._placeholderValue=Ve(d.label))}}),l.unhighlightAll()}),this._searcher.reset(),this},t.prototype.refresh=function(e,i,s){var r=this;return e===void 0&&(e=!1),i===void 0&&(i=!1),s===void 0&&(s=!1),this._isSelectElement?(this._store.withTxn(function(){var n=r.passedElement.optionsAsChoices(),o={};s||r._store.items.forEach(function(a){a.id&&a.active&&a.selected&&(o[a.value]=!0)}),r.clearStore(!1);var l=function(a){s?r._store.dispatch(we(a)):o[a.value]&&(a.selected=!0)};n.forEach(function(a){if("choices"in a){a.choices.forEach(l);return}l(a)}),r._addPredefinedChoices(n,i,e),r._isSearching&&r._searchChoices(r.input.value)}),this):(this.config.silent||console.warn("refresh method can only be used on choices backed by a <select> element"),this)},t.prototype.removeChoice=function(e){var i=this._store.choices.find(function(s){return s.value===e});return i?(this._clearNotice(),this._store.dispatch(ut(i)),this._searcher.reset(),i.selected&&this.passedElement.triggerEvent(I.removeItem,this._getChoiceForOutput(i)),this):this},t.prototype.clearChoices=function(e,i){var s=this;return e===void 0&&(e=!0),i===void 0&&(i=!1),e&&(i?this.passedElement.element.replaceChildren(""):this.passedElement.element.querySelectorAll(":not([selected])").forEach(function(r){r.remove()})),this.itemList.element.replaceChildren(""),this.choiceList.element.replaceChildren(""),this._clearNotice(),this._store.withTxn(function(){var r=i?[]:s._store.items;s._store.reset(),r.forEach(function(n){s._store.dispatch(Ce(n)),s._store.dispatch(Se(n))})}),this._searcher.reset(),this},t.prototype.clearStore=function(e){return e===void 0&&(e=!0),this.clearChoices(e,!0),this._stopSearch(),this._lastAddedChoiceId=0,this._lastAddedGroupId=0,this},t.prototype.clearInput=function(){var e=!this._isSelectOneElement;return this.input.clear(e),this._stopSearch(),this},t.prototype._validateConfig=function(){var e=this.config,i=St(e,Te);i.length&&console.warn("Unknown config option(s) passed",i.join(", ")),e.allowHTML&&e.allowHtmlUserInput&&(e.addItems&&console.warn("Warning: allowHTML/allowHtmlUserInput/addItems all being true is strongly not recommended and may lead to XSS attacks"),e.addChoices&&console.warn("Warning: allowHTML/allowHtmlUserInput/addChoices all being true is strongly not recommended and may lead to XSS attacks"))},t.prototype._render=function(e){e===void 0&&(e={choices:!0,groups:!0,items:!0}),!this._store.inTxn()&&(this._isSelectElement&&(e.choices||e.groups)&&this._renderChoices(),e.items&&this._renderItems())},t.prototype._renderChoices=function(){var e=this;if(this._canAddItems()){var i=this,s=i.config,r=i._isSearching,n=this._store,o=n.activeGroups,l=n.activeChoices,a=0;if(r&&s.searchResultLimit>0?a=s.searchResultLimit:s.renderChoiceLimit>0&&(a=s.renderChoiceLimit),this._isSelectElement){var h=l.filter(function(d){return!d.element});h.length&&this.passedElement.addOptions(h)}var c=document.createDocumentFragment(),u=function(d){return d.filter(function(p){return!p.placeholder&&(r?!!p.rank:s.renderSelectedChoices||!p.selected)})},f=!1,m=function(d,p,b){r?d.sort(Et):s.shouldSort&&d.sort(s.sorter);var g=d.length;g=!p&&a&&g>a?a:g,g--,d.every(function(S,w){var V=S.choiceEl||e._templates.choice(s,S,s.itemSelectText,b);return S.choiceEl=V,c.appendChild(V),(r||!S.selected)&&(f=!0),w<g})};l.length&&(s.resetScrollPosition&&requestAnimationFrame(function(){return e.choiceList.scrollToTop()}),!this._hasNonChoicePlaceholder&&!r&&this._isSelectOneElement&&m(l.filter(function(d){return d.placeholder&&!d.group}),!1,void 0),o.length&&!r?(s.shouldSort&&o.sort(s.sorter),m(l.filter(function(d){return!d.placeholder&&!d.group}),!1,void 0),o.forEach(function(d){var p=u(d.choices);if(p.length){if(d.label){var b=d.groupEl||e._templates.choiceGroup(e.config,d);d.groupEl=b,b.remove(),c.appendChild(b)}m(p,!0,s.appendGroupInSearch&&r?d.label:void 0)}})):m(u(l),!1,void 0)),!f&&(r||!c.children.length||!s.renderSelectedChoices)&&(this._notice||(this._notice={text:Ae(r?s.noResultsText:s.noChoicesText),type:r?E.noResults:E.noChoices}),c.replaceChildren("")),this._renderNotice(c),this.choiceList.element.replaceChildren(c),f&&this._highlightChoice()}},t.prototype._renderItems=function(){var e=this,i=this._store.items||[],s=this.itemList.element,r=this.config,n=document.createDocumentFragment(),o=function(u){return s.querySelector('[data-item][data-id="'.concat(u.id,'"]'))},l=function(u){var f=u.itemEl;f&&f.parentElement||(f=o(u)||e._templates.item(r,u,r.removeItemButton),u.itemEl=f,n.appendChild(f))};i.forEach(l);var a=!!n.childNodes.length;if(this._isSelectOneElement){var h=s.children.length;if(a||h>1){var c=s.querySelector(W(r.classNames.placeholder));c&&c.remove()}else!a&&!h&&this._placeholderValue&&(a=!0,l(D({selected:!0,value:"",label:this._placeholderValue,placeholder:!0},!1)))}a&&(s.append(n),r.shouldSortItems&&!this._isSelectOneElement&&(i.sort(r.sorter),i.forEach(function(u){var f=o(u);f&&(f.remove(),n.append(f))}),s.append(n))),this._isTextElement&&(this.passedElement.value=i.map(function(u){var f=u.value;return f}).join(r.delimiter))},t.prototype._displayNotice=function(e,i,s){s===void 0&&(s=!0);var r=this._notice;if(r&&(r.type===i&&r.text===e||r.type===E.addChoice&&(i===E.noResults||i===E.noChoices))){s&&this.showDropdown(!0);return}this._clearNotice(),this._notice=e?{text:e,type:i}:void 0,this._renderNotice(),s&&e&&this.showDropdown(!0)},t.prototype._clearNotice=function(){if(this._notice){var e=this.choiceList.element.querySelector(W(this.config.classNames.notice));e&&e.remove(),this._notice=void 0}},t.prototype._renderNotice=function(e){var i=this._notice;if(i){var s=this._templates.notice(this.config,i.text,i.type);e?e.append(s):this.choiceList.prepend(s)}},t.prototype._getChoiceForOutput=function(e,i){return{id:e.id,highlighted:e.highlighted,labelClass:e.labelClass,labelDescription:e.labelDescription,customProperties:e.customProperties,disabled:e.disabled,active:e.active,label:e.label,placeholder:e.placeholder,value:e.value,groupValue:e.group?e.group.label:void 0,element:e.element,keyCode:i}},t.prototype._triggerChange=function(e){e!=null&&this.passedElement.triggerEvent(I.change,{value:e})},t.prototype._handleButtonAction=function(e){var i=this,s=this._store.items;if(!(!s.length||!this.config.removeItems||!this.config.removeItemButton)){var r=e&&ce(e.parentElement),n=r&&s.find(function(o){return o.id===r});n&&this._store.withTxn(function(){if(i._removeItem(n),i._triggerChange(n.value),i._isSelectOneElement&&!i._hasNonChoicePlaceholder){var o=(i.config.shouldSort?i._store.choices.reverse():i._store.choices).find(function(l){return l.placeholder});o&&(i._addItem(o),i.unhighlightAll(),o.value&&i._triggerChange(o.value))}})}},t.prototype._handleItemAction=function(e,i){var s=this;i===void 0&&(i=!1);var r=this._store.items;if(!(!r.length||!this.config.removeItems||this._isSelectOneElement)){var n=ce(e);n&&(r.forEach(function(o){o.id===n&&!o.highlighted?s.highlightItem(o):!i&&o.highlighted&&s.unhighlightItem(o)}),this.input.focus())}},t.prototype._handleChoiceAction=function(e){var i=this,s=ce(e),r=s&&this._store.getChoiceById(s);if(!r||r.disabled)return!1;var n=this.dropdown.isActive;if(!r.selected){if(!this._canAddItems())return!0;this._store.withTxn(function(){i._addItem(r,!0,!0),i.clearInput(),i.unhighlightAll()}),this._triggerChange(r.value)}return n&&this.config.closeDropdownOnSelect&&(this.hideDropdown(!0),this.containerOuter.element.focus()),!0},t.prototype._handleBackspace=function(e){var i=this.config;if(!(!i.removeItems||!e.length)){var s=e[e.length-1],r=e.some(function(n){return n.highlighted});i.editItems&&!r&&s?(this.input.value=s.value,this.input.setWidth(),this._removeItem(s),this._triggerChange(s.value)):(r||this.highlightItem(s,!1),this.removeHighlightedItems(!0))}},t.prototype._loadChoices=function(){var e,i=this,s=this.config;if(this._isTextElement){if(this._presetChoices=s.items.map(function(o){return D(o,!1)}),this.passedElement.value){var r=this.passedElement.value.split(s.delimiter).map(function(o){return D(o,!1,i.config.allowHtmlUserInput)});this._presetChoices=this._presetChoices.concat(r)}this._presetChoices.forEach(function(o){o.selected=!0})}else if(this._isSelectElement){this._presetChoices=s.choices.map(function(o){return D(o,!0)});var n=this.passedElement.optionsAsChoices();n&&(e=this._presetChoices).push.apply(e,n)}},t.prototype._handleLoadingState=function(e){e===void 0&&(e=!0);var i=this.itemList.element;e?(this.disable(),this.containerOuter.addLoadingState(),this._isSelectOneElement?i.replaceChildren(this._templates.placeholder(this.config,this.config.loadingText)):this.input.placeholder=this.config.loadingText):(this.enable(),this.containerOuter.removeLoadingState(),this._isSelectOneElement?(i.replaceChildren(""),this._render()):this.input.placeholder=this._placeholderValue||"")},t.prototype._handleSearch=function(e){if(this.input.isFocussed)if(e!==null&&typeof e<"u"&&e.length>=this.config.searchFloor){var i=this.config.searchChoices?this._searchChoices(e):0;i!==null&&this.passedElement.triggerEvent(I.search,{value:e,resultCount:i})}else this._store.choices.some(function(s){return!s.active})&&this._stopSearch()},t.prototype._canAddItems=function(){var e=this.config,i=e.maxItemCount,s=e.maxItemText;return!e.singleModeForMultiSelect&&i>0&&i<=this._store.items.length?(this.choiceList.element.replaceChildren(""),this._notice=void 0,this._displayNotice(typeof s=="function"?s(i):s,E.addChoice),!1):(this._notice&&this._notice.type===E.addChoice&&this._clearNotice(),!0)},t.prototype._canCreateItem=function(e){var i=this.config,s=!0,r="";if(s&&typeof i.addItemFilter=="function"&&!i.addItemFilter(e)&&(s=!1,r=q(i.customAddItemText,e)),s){var n=this._store.choices.find(function(o){return i.valueComparer(o.value,e)});if(n){if(this._isSelectElement)return this._displayNotice("",E.addChoice),!1;i.duplicateItemsAllowed||(s=!1,r=q(i.uniqueItemText,e))}}return s&&(r=q(i.addItemText,e)),r&&this._displayNotice(r,E.addChoice),s},t.prototype._searchChoices=function(e){var i=e.trim().replace(/\s{2,}/," ");if(!i.length||i===this._currentValue)return null;var s=this._searcher;s.isEmptyIndex()&&s.index(this._store.searchableChoices);var r=s.search(i);this._currentValue=i,this._highlightPosition=0,this._isSearching=!0;var n=this._notice,o=n&&n.type;return o!==E.addChoice&&(r.length?this._clearNotice():this._displayNotice(Ae(this.config.noResultsText),E.noResults)),this._store.dispatch(dt(r)),r.length},t.prototype._stopSearch=function(){this._isSearching&&(this._currentValue="",this._isSearching=!1,this._clearNotice(),this._store.dispatch(ft(!0)),this.passedElement.triggerEvent(I.search,{value:"",resultCount:0}))},t.prototype._addEventListeners=function(){var e=this._docRoot,i=this.containerOuter.element,s=this.input.element;e.addEventListener("touchend",this._onTouchEnd,!0),i.addEventListener("keydown",this._onKeyDown,!0),i.addEventListener("mousedown",this._onMouseDown,!0),e.addEventListener("click",this._onClick,{passive:!0}),e.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.dropdown.element.addEventListener("mouseover",this._onMouseOver,{passive:!0}),this._isSelectOneElement&&(i.addEventListener("focus",this._onFocus,{passive:!0}),i.addEventListener("blur",this._onBlur,{passive:!0})),s.addEventListener("keyup",this._onKeyUp,{passive:!0}),s.addEventListener("input",this._onInput,{passive:!0}),s.addEventListener("focus",this._onFocus,{passive:!0}),s.addEventListener("blur",this._onBlur,{passive:!0}),s.form&&s.form.addEventListener("reset",this._onFormReset,{passive:!0}),this.input.addEventListeners()},t.prototype._removeEventListeners=function(){var e=this._docRoot,i=this.containerOuter.element,s=this.input.element;e.removeEventListener("touchend",this._onTouchEnd,!0),i.removeEventListener("keydown",this._onKeyDown,!0),i.removeEventListener("mousedown",this._onMouseDown,!0),e.removeEventListener("click",this._onClick),e.removeEventListener("touchmove",this._onTouchMove),this.dropdown.element.removeEventListener("mouseover",this._onMouseOver),this._isSelectOneElement&&(i.removeEventListener("focus",this._onFocus),i.removeEventListener("blur",this._onBlur)),s.removeEventListener("keyup",this._onKeyUp),s.removeEventListener("input",this._onInput),s.removeEventListener("focus",this._onFocus),s.removeEventListener("blur",this._onBlur),s.form&&s.form.removeEventListener("reset",this._onFormReset),this.input.removeEventListeners()},t.prototype._onKeyDown=function(e){var i=e.keyCode,s=this.dropdown.isActive,r=e.key.length===1||e.key.length===2&&e.key.charCodeAt(0)>=55296||e.key==="Unidentified";switch(!this._isTextElement&&!s&&i!==C.ESC_KEY&&i!==C.TAB_KEY&&i!==C.SHIFT_KEY&&(this.showDropdown(),!this.input.isFocussed&&r&&(this.input.value+=e.key,e.key===" "&&e.preventDefault())),i){case C.A_KEY:return this._onSelectKey(e,this.itemList.element.hasChildNodes());case C.ENTER_KEY:return this._onEnterKey(e,s);case C.ESC_KEY:return this._onEscapeKey(e,s);case C.UP_KEY:case C.PAGE_UP_KEY:case C.DOWN_KEY:case C.PAGE_DOWN_KEY:return this._onDirectionKey(e,s);case C.DELETE_KEY:case C.BACK_KEY:return this._onDeleteKey(e,this._store.items,this.input.isFocussed)}},t.prototype._onKeyUp=function(){this._canSearch=this.config.searchEnabled},t.prototype._onInput=function(){var e=this.input.value;if(!e){this._isTextElement?this.hideDropdown(!0):this._stopSearch();return}this._canAddItems()&&(this._canSearch&&this._handleSearch(e),this._canAddUserChoices&&(this._canCreateItem(e),this._isSelectElement&&(this._highlightPosition=0,this._highlightChoice())))},t.prototype._onSelectKey=function(e,i){if((e.ctrlKey||e.metaKey)&&i){this._canSearch=!1;var s=this.config.removeItems&&!this.input.value&&this.input.element===document.activeElement;s&&this.highlightAll()}},t.prototype._onEnterKey=function(e,i){var s=this,r=this.input.value,n=e.target;if(e.preventDefault(),n&&n.hasAttribute("data-button")){this._handleButtonAction(n);return}if(!i){(this._isSelectElement||this._notice)&&this.showDropdown();return}var o=this.dropdown.element.querySelector(W(this.config.classNames.highlightedState));if(!(o&&this._handleChoiceAction(o))){if(!n||!r){this.hideDropdown(!0);return}if(this._canAddItems()){var l=!1;this._store.withTxn(function(){if(l=s._findAndSelectChoiceByValue(r,!0),!l){if(!s._canAddUserChoices||!s._canCreateItem(r))return;s._addChoice(D(r,!1,s.config.allowHtmlUserInput),!0,!0),l=!0}s.clearInput(),s.unhighlightAll()}),l&&(this._triggerChange(r),this.config.closeDropdownOnSelect&&this.hideDropdown(!0))}}},t.prototype._onEscapeKey=function(e,i){i&&(e.stopPropagation(),this.hideDropdown(!0),this._stopSearch(),this.containerOuter.element.focus())},t.prototype._onDirectionKey=function(e,i){var s=e.keyCode;if(i||this._isSelectOneElement){this.showDropdown(),this._canSearch=!1;var r=s===C.DOWN_KEY||s===C.PAGE_DOWN_KEY?1:-1,n=e.metaKey||s===C.PAGE_DOWN_KEY||s===C.PAGE_UP_KEY,o=void 0;if(n)r>0?o=this.dropdown.element.querySelector("".concat(Y,":last-of-type")):o=this.dropdown.element.querySelector(Y);else{var l=this.dropdown.element.querySelector(W(this.config.classNames.highlightedState));l?o=_t(l,Y,r):o=this.dropdown.element.querySelector(Y)}o&&(gt(o,this.choiceList.element,r)||this.choiceList.scrollToChildElement(o,r),this._highlightChoice(o)),e.preventDefault()}},t.prototype._onDeleteKey=function(e,i,s){!this._isSelectOneElement&&!e.target.value&&s&&(this._handleBackspace(i),e.preventDefault())},t.prototype._onTouchMove=function(){this._wasTap&&(this._wasTap=!1)},t.prototype._onTouchEnd=function(e){var i=(e||e.touches[0]).target,s=this._wasTap&&this.containerOuter.element.contains(i);if(s){var r=i===this.containerOuter.element||i===this.containerInner.element;r&&(this._isTextElement?this.input.focus():this._isSelectMultipleElement&&this.showDropdown()),e.stopPropagation()}this._wasTap=!0},t.prototype._onMouseDown=function(e){var i=e.target;if(i instanceof HTMLElement){if(Di&&this.choiceList.element.contains(i)){var s=this.choiceList.element.firstElementChild;this._isScrollingOnIe=this._direction==="ltr"?e.offsetX>=s.offsetWidth:e.offsetX<s.offsetLeft}if(i!==this.input.element){var r=i.closest("[data-button],[data-item],[data-choice]");r instanceof HTMLElement&&("button"in r.dataset?this._handleButtonAction(r):"item"in r.dataset?this._handleItemAction(r,e.shiftKey):"choice"in r.dataset&&this._handleChoiceAction(r)),e.preventDefault()}}},t.prototype._onMouseOver=function(e){var i=e.target;i instanceof HTMLElement&&"choice"in i.dataset&&this._highlightChoice(i)},t.prototype._onClick=function(e){var i=e.target,s=this.containerOuter,r=s.element.contains(i);r?!this.dropdown.isActive&&!s.isDisabled?this._isTextElement?document.activeElement!==this.input.element&&this.input.focus():(this.showDropdown(),s.element.focus()):this._isSelectOneElement&&i!==this.input.element&&!this.dropdown.element.contains(i)&&this.hideDropdown():(s.removeFocusState(),this.hideDropdown(!0),this.unhighlightAll())},t.prototype._onFocus=function(e){var i=e.target,s=this.containerOuter,r=i&&s.element.contains(i);if(r){var n=i===this.input.element;this._isTextElement?n&&s.addFocusState():this._isSelectMultipleElement?n&&(this.showDropdown(!0),s.addFocusState()):(s.addFocusState(),n&&this.showDropdown(!0))}},t.prototype._onBlur=function(e){var i=e.target,s=this.containerOuter,r=i&&s.element.contains(i);r&&!this._isScrollingOnIe?i===this.input.element?(s.removeFocusState(),this.hideDropdown(!0),(this._isTextElement||this._isSelectMultipleElement)&&this.unhighlightAll()):i===this.containerOuter.element&&(s.removeFocusState(),this._canSearch||this.hideDropdown(!0)):(this._isScrollingOnIe=!1,this.input.element.focus())},t.prototype._onFormReset=function(){var e=this;this._store.withTxn(function(){e.clearInput(),e.hideDropdown(),e.refresh(!1,!1,!0),e._initialItems.length&&e.setChoiceByValue(e._initialItems)})},t.prototype._highlightChoice=function(e){e===void 0&&(e=null);var i=Array.from(this.dropdown.element.querySelectorAll(Y));if(i.length){var s=e,r=this.config.classNames.highlightedState,n=Array.from(this.dropdown.element.querySelectorAll(W(r)));n.forEach(function(o){M(o,r),o.setAttribute("aria-selected","false")}),s?this._highlightPosition=i.indexOf(s):(i.length>this._highlightPosition?s=i[this._highlightPosition]:s=i[i.length-1],s||(s=i[0])),_(s,r),s.setAttribute("aria-selected","true"),this.passedElement.triggerEvent(I.highlightChoice,{el:s}),this.dropdown.isActive&&(this.input.setActiveDescendant(s.id),this.containerOuter.setActiveDescendant(s.id))}},t.prototype._addItem=function(e,i,s){if(i===void 0&&(i=!0),s===void 0&&(s=!1),!e.id)throw new TypeError("item.id must be set before _addItem is called for a choice/item");(this.config.singleModeForMultiSelect||this._isSelectOneElement)&&this.removeActiveItems(e.id),this._store.dispatch(Se(e)),i&&(this.passedElement.triggerEvent(I.addItem,this._getChoiceForOutput(e)),s&&this.passedElement.triggerEvent(I.choice,this._getChoiceForOutput(e)))},t.prototype._removeItem=function(e){if(e.id){this._store.dispatch(we(e));var i=this._notice;i&&i.type===E.noChoices&&this._clearNotice(),this.passedElement.triggerEvent(I.removeItem,this._getChoiceForOutput(e))}},t.prototype._addChoice=function(e,i,s){if(i===void 0&&(i=!0),s===void 0&&(s=!1),e.id)throw new TypeError("Can not re-add a choice which has already been added");var r=this.config;if(!(!r.duplicateItemsAllowed&&this._store.choices.find(function(l){return r.valueComparer(l.value,e.value)}))){this._lastAddedChoiceId++,e.id=this._lastAddedChoiceId,e.elementId="".concat(this._baseId,"-").concat(this._idNames.itemChoice,"-").concat(e.id);var n=r.prependValue,o=r.appendValue;n&&(e.value=n+e.value),o&&(e.value+=o.toString()),(n||o)&&e.element&&(e.element.value=e.value),this._clearNotice(),this._store.dispatch(Ce(e)),e.selected&&this._addItem(e,i,s)}},t.prototype._addGroup=function(e,i){var s=this;if(i===void 0&&(i=!0),e.id)throw new TypeError("Can not re-add a group which has already been added");this._store.dispatch(pt(e)),e.choices&&(this._lastAddedGroupId++,e.id=this._lastAddedGroupId,e.choices.forEach(function(r){r.group=e,e.disabled&&(r.disabled=!0),s._addChoice(r,i)}))},t.prototype._createTemplates=function(){var e=this,i=this.config.callbackOnCreateTemplates,s={};typeof i=="function"&&(s=i.call(this,bt,ge,re));var r={};Object.keys(this._templates).forEach(function(n){n in s?r[n]=s[n].bind(e):r[n]=e._templates[n].bind(e)}),this._templates=r},t.prototype._createElements=function(){var e=this._templates,i=this,s=i.config,r=i._isSelectOneElement,n=s.position,o=s.classNames,l=this._elementType;this.containerOuter=new Oe({element:e.containerOuter(s,this._direction,this._isSelectElement,r,s.searchEnabled,l,s.labelId),classNames:o,type:l,position:n}),this.containerInner=new Oe({element:e.containerInner(s),classNames:o,type:l,position:n}),this.input=new Ot({element:e.input(s,this._placeholderValue),classNames:o,type:l,preventPaste:!s.paste}),this.choiceList=new xe({element:e.choiceList(s,r)}),this.itemList=new xe({element:e.itemList(s,r)}),this.dropdown=new At({element:e.dropdown(s),classNames:o,type:l})},t.prototype._createStructure=function(){var e=this,i=e.containerInner,s=e.containerOuter,r=e.passedElement,n=this.dropdown.element;r.conceal(),i.wrap(r.element),s.wrap(i.element),this._isSelectOneElement?this.input.placeholder=this.config.searchPlaceholderValue||"":(this._placeholderValue&&(this.input.placeholder=this._placeholderValue),this.input.setWidth()),s.element.appendChild(i.element),s.element.appendChild(n),i.element.appendChild(this.itemList.element),n.appendChild(this.choiceList.element),this._isSelectOneElement?this.config.searchEnabled&&n.insertBefore(this.input.element,n.firstChild):i.element.appendChild(this.input.element),this._highlightPosition=0,this._isSearching=!1},t.prototype._initStore=function(){var e=this;this._store.subscribe(this._render).withTxn(function(){e._addPredefinedChoices(e._presetChoices,e._isSelectOneElement&&!e._hasNonChoicePlaceholder,!1)}),(!this._store.choices.length||this._isSelectOneElement&&this._hasNonChoicePlaceholder)&&this._render()},t.prototype._addPredefinedChoices=function(e,i,s){var r=this;if(i===void 0&&(i=!1),s===void 0&&(s=!0),i){var n=e.findIndex(function(o){return o.selected})===-1;n&&e.some(function(o){return o.disabled||"choices"in o?!1:(o.selected=!0,!0)})}e.forEach(function(o){"choices"in o?r._isSelectElement&&r._addGroup(o,s):r._addChoice(o,s)})},t.prototype._findAndSelectChoiceByValue=function(e,i){var s=this;i===void 0&&(i=!1);var r=this._store.choices.find(function(n){return s.config.valueComparer(n.value,e)});return r&&!r.disabled&&!r.selected?(this._addItem(r,!0,i),!0):!1},t.prototype._generatePlaceholderValue=function(){var e=this.config;if(!e.placeholder)return null;if(this._hasNonChoicePlaceholder)return e.placeholderValue;if(this._isSelectElement){var i=this.passedElement.placeholderOption;return i?i.text:null}return null},t.prototype._warnChoicesInitFailed=function(e){if(!this.config.silent)if(this.initialised){if(!this.initialisedOK)throw new TypeError("".concat(e," called for an element which has multiple instances of Choices initialised on it"))}else throw new TypeError("".concat(e," called on a non-initialised instance of Choices"))},t.version="11.1.0",t})();const Ni=`:host {
    /* Colors */
    --vl-select-rich--button-color: #0055cc;
    --vl-select-rich--button-hover-bg: #e6eefa;
    --vl-select-rich--button-hover-color: #003bb0;
    --vl-select-rich--button-hover-border: #0055cc;
    --vl-select-rich--nav-icon-color: #6e7985;
    --vl-select-rich--placeholder-color: var(--vl-color--grey-800);
    --vl-select-rich--item-highlight-bg: rgba(179, 207, 245, 0.3);
    --vl-select-rich--group-heading-color: #4d4d4b;
}
`,ji=it`
    ${tt(Ni)}

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    /* ===================================================================
       Icon Font Base
       =================================================================== */

    .vl-vi::before,
    .vl-vi::after {
        font-family: 'vlaanderen-icon' !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-style: normal;
        font-variant: normal;
        font-weight: normal;
        text-decoration: none;
        text-transform: none;
        display: inline-block;
        vertical-align: middle;
    }

    .vl-vi-nav-down::before {
        content: '\\f21a';
    }

    .vl-vi-close::before {
        content: '\\f162';
    }

    /* ===================================================================
       Choices.js Container (Outer)
       =================================================================== */

    .js-vl-select {
        position: relative;
        border-radius: 0.3rem;
        z-index: var(--vl-z-layer--select-dropdown);
    }

    .js-vl-select.is-open {
        z-index: var(--vl-z-layer--select-dropdown-open);
    }

    .js-vl-select.is-open .vl-select__inner {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }

    .js-vl-select.is-flipped .vl-select__inner {
        border-radius: 0 0 0.3rem 0.3rem;
    }

    .js-vl-select.is-flipped .vl-select__list--dropdown {
        top: auto;
        bottom: 100%;
        transform: translateY(0.1rem);
        border-radius: 0.3rem 0.3rem 0 0;
    }

    /* ===================================================================
       Nav-Down Icon
       =================================================================== */

    .js-vl-select.vl-vi.vl-vi-nav-down:before {
        color: var(--vl-select-rich--nav-icon-color);
        position: absolute;
        right: 1.3rem;
        font-size: 1.3rem;
        top: 50%;
        transform: translateY(-50%);
    }

    /* ===================================================================
       Inner Container
       =================================================================== */

    .js-vl-select .vl-select__inner {
        font-size: var(--vl-font-size--small);
        font-family: var(--vl-font);
        color: #666;
        background-color: var(--vl-color--background-default);
        padding: 0.5rem 6rem 0.4rem 1rem;
        border: 0.1rem solid var(--vl-color--grey-800);
        border-radius: 0.3rem;
        border-color: var(--vl-color--border-alt);
        overflow: hidden;
    }

    .js-vl-select .vl-select__inner .vl-select,
    .js-vl-select .vl-select__inner .vl-multiselect,
    .js-vl-select .vl-select__inner select {
        display: none !important;
    }

    /* ===================================================================
       Hover State
       =================================================================== */

    .js-vl-select:hover:not(.is-disabled) .vl-select__inner {
        border-color: rgba(0, 85, 204, 0.65);
        box-shadow: inset 0 0 0 0.1rem rgba(0, 85, 204, 0.65);
    }

    /* ===================================================================
       Focus & Open State
       =================================================================== */

    .js-vl-select.is-focused {
        box-shadow:
            0 0 0 2px #fff,
            0 0 0 5px rgba(0, 85, 204, 0.65);
        outline: transparent solid 0.2rem;
    }

    @supports (outline-offset: 2px) {
        .js-vl-select.is-focused {
            box-shadow: none;
            outline: 3px solid rgba(0, 85, 204, 0.65);
            outline-offset: 2px;
        }
    }

    .js-vl-select:not(.is-disabled) {
        &:focus,
        &.is-focused,
        &.is-open {
            box-shadow:
                0 0 0 2px #fff,
                0 0 0 5px rgba(0, 85, 204, 0.65);
            outline: transparent solid 0.2rem;

            @supports (outline-offset: 2px) {
                box-shadow: none;
                outline: 3px solid rgba(0, 85, 204, 0.65);
                outline-offset: 2px;
            }

            &:hover .vl-select__inner {
                box-shadow: none;
                border-color: var(--vl-color--border-alt);
            }
        }
    }

    /* ===================================================================
       Disabled State
       =================================================================== */

    .js-vl-select.is-disabled {
        border-color: var(--vl-color--grey-800);
        background-color: var(--vl-color--border-alt--background) !important;
        outline: 0;
    }

    .js-vl-select.is-disabled .vl-select__inner {
        border-color: var(--vl-color--border-alt);
    }

    .js-vl-select.is-disabled .vl-select__item {
        color: #707070;
        cursor: default;
    }

    .js-vl-select.is-disabled .vl-select__list--multiple .vl-select__item {
        padding-right: 1.4rem;

        .vl-pill__close {
            display: none;
        }
    }

    /* ===================================================================
       Error State
       =================================================================== */

    .js-vl-select .vl-select__inner:has(select.vl-select--error) {
        border-color: var(--vl-color--error);
        background-color: #fbebec;
    }

    /* ===================================================================
       Success State
       =================================================================== */

    .js-vl-select .vl-select__inner:has(select.vl-select--success) {
        border-color: var(--vl-color--success);
        background-color: #e6f5ed;
    }

    /* ===================================================================
       Select-One Type — Inner & Items
       =================================================================== */

    .js-vl-select[data-type*='select-one'] .vl-input-field {
        display: block;
        padding: 0;
        color: #333332;
        height: 3.5rem;
        line-height: 3.5rem;
        overflow: hidden;
        white-space: nowrap;
    }

    .js-vl-select[data-type*='select-one'] .vl-select__list--dropdown .vl-input-field {
        width: calc(100% - (2 * 2rem));
        margin: 2rem;
        padding: 0 1rem;
        height: 3.5rem;
        line-height: 3.5rem;
        font-family: var(--vl-font);
        font-size: var(--vl-font-size--small);
        border: 0.1rem solid var(--vl-color--grey-800);
        border-radius: 0.3rem;
        background-color: #fff;
    }

    .js-vl-select[data-type*='select-one'] .vl-select__list--dropdown .vl-input-field:focus {
        outline: 3px solid rgba(0, 85, 204, 0.65);
        outline-offset: 2px;
        box-shadow: none;
    }

    .js-vl-select[data-type*='select-one'] .vl-select__item--selectable {
        min-height: calc(3.5rem - 1.2rem);
        height: calc(3.5rem - 1.2rem);
    }

    .js-vl-select[data-type*='select-one'] .vl-select__inner {
        height: 3.5rem;
        line-height: 3.5rem;
        padding-right: 3.5rem;
    }

    /* ===================================================================
       Select-One — Close/Delete Button
       =================================================================== */

    .js-vl-select[data-type*='select-one'] .vl-pill__close {
        border: 0;
        display: inline-flex;
        margin-left: auto;
    }

    .js-vl-select[data-type='select-one'] .vl-select__inner .vl-pill__close {
        margin: 0.1rem 0 0 auto;
        border-radius: 0.3rem;

        &:hover,
        &:focus {
            box-shadow: none;
            border: var(--vl-select-rich--button-hover-border) 0.1rem solid;
            background-color: var(--vl-select-rich--button-hover-bg);
            color: var(--vl-select-rich--button-hover-color);
            outline: none;
        }
    }

    .js-vl-select[data-type*='select-one'] .vl-pill__close:hover,
    .js-vl-select[data-type*='select-one'] .vl-pill__close:focus,
    .js-vl-select[data-type*='select-one'] .vl-pill__close:active {
        color: var(--vl-select-rich--button-hover-color);
    }

    .js-vl-select[data-type*='select-one'].is-disabled .vl-pill__close,
    .js-vl-select[data-type*='select-one'] .vl-select__placeholder .vl-pill__close {
        display: none;
    }

    /* ===================================================================
       Select-Multiple Type
       =================================================================== */

    .js-vl-select[data-type*='select-multiple'],
    .js-vl-select[data-type*='text'] {
        background-color: #fff;
    }

    .js-vl-select[data-type*='select-multiple'] .vl-select__inner,
    .js-vl-select[data-type*='text'] .vl-select__inner {
        cursor: text;
    }

    .js-vl-select[data-type*='select-multiple'] .vl-input-field,
    .js-vl-select[data-type*='text'] .vl-input-field {
        display: inline;
        padding: 0;
        font-family: var(--vl-font);
        font-size: var(--vl-font-size--small);
        line-height: 2.2rem;
        height: 2.4rem;
    }

    .js-vl-select[data-type*='select-multiple'] .vl-input-field:focus,
    .js-vl-select[data-type*='text'] .vl-input-field:focus {
        outline: 0;
        box-shadow: none;
    }

    /* ===================================================================
       Lists (general)
       =================================================================== */

    .js-vl-select .vl-select__list {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .js-vl-select .vl-select__list--single {
        display: inline-block;
        width: 100%;
    }

    .js-vl-select .vl-select__list--multiple {
        display: inline-flex;
        align-content: center;
        max-width: 100%;
    }

    .js-vl-select .vl-select__list--multiple .vl-select__item {
        margin: 0.2rem 0.6rem 0.5rem 0;
        display: inline-flex;
    }

    .js-vl-select .vl-select__list--multiple .vl-select__item[data-deletable] {
        padding-right: 0;
    }

    .js-vl-select .vl-select__list--multiple .vl-input-field {
        padding: 0.4rem 0 0.4rem 0.2rem;
    }

    /* ===================================================================
       Dropdown List
       =================================================================== */

    .js-vl-select .vl-select__list--dropdown {
        display: none;
        position: absolute;
        top: 100%;
        width: 100%;
        transform: translateY(-0.1rem);
        border: 0.1rem var(--vl-color--grey-800) solid;
        background-color: #fff;
        z-index: 1;
        border-bottom-left-radius: 0.3rem;
        border-bottom-right-radius: 0.3rem;
    }

    .js-vl-select .vl-select__list--dropdown.is-active {
        display: block;
    }

    .js-vl-select .vl-select__list--dropdown .vl-select__list {
        position: relative;
        max-height: 35vh;
        overflow: auto;
        will-change: scroll-position;
        -webkit-overflow-scrolling: touch;
    }

    .js-vl-select .vl-select__list--dropdown .vl-input-field + .vl-select__list {
        border-top: 0.1rem solid var(--vl-color--grey-800);
    }

    /* ===================================================================
       Dropdown Items
       =================================================================== */

    .js-vl-select .vl-select__list--dropdown .vl-select__item {
        width: 100%;
        min-height: 0;
        height: auto;
        padding-top: 0.8rem;
        padding-bottom: 0.8rem;
        padding-left: 3rem;
        border: 0;
        color: #000;
        font-weight: normal;
        text-decoration: none;
    }

    .js-vl-select .vl-select__list--dropdown .vl-select__item:not(:first-of-type) {
        border-top: 0.1rem #cbd2da solid;
    }

    /* Flux override: group borders */
    .js-vl-select .vl-select__list--dropdown .vl-select__list .vl-select__group {
        border-top: none;
    }

    .js-vl-select .vl-select__list--dropdown .vl-select__list .vl-select__group ~ .vl-select__group {
        border-top: 0.1rem solid rgb(104, 116, 131);
    }

    /* Flux override: item borders (sibling-based) */
    .js-vl-select
        .vl-select__list--dropdown
        .vl-select__list
        :not(.vl-select__group)
        .vl-select__item:not(.vl-select__placeholder) {
        border-top: none;
    }

    .js-vl-select
        .vl-select__list--dropdown
        .vl-select__list
        :not(.vl-select__group)
        .vl-select__item:not(.vl-select__placeholder)
        ~ .vl-select__item {
        border-top: 0.1rem solid rgb(104, 116, 131);
    }

    @media screen and (min-width: 767px) {
        .js-vl-select .vl-select__list--dropdown .vl-select__item--selectable {
            padding-right: 10rem;
        }

        .js-vl-select .vl-select__list--dropdown .vl-select__item--selectable::after {
            position: absolute;
            top: 50%;
            right: 1rem;
            transform: translateY(-50%);
            content: attr('data-select-text');
            opacity: 0.5;
        }
    }

    .js-vl-select .vl-select__list--dropdown .vl-select__item--selectable.is-highlighted {
        position: relative;
        background-color: var(--vl-select-rich--item-highlight-bg);
    }

    .js-vl-select .vl-select__list--dropdown .vl-select__item[aria-selected='true'] {
        background-color: var(--vl-select-rich--item-highlight-bg);
    }

    /* ===================================================================
       Items (General)
       =================================================================== */

    .js-vl-select .vl-select__item {
        cursor: default;
        display: flex;
        align-items: center;
        min-height: calc(3.5rem - 1.2rem);
        height: calc(3.5rem - 1.2rem);
    }

    .js-vl-select .vl-select__item--disabled {
        background-color: var(--vl-color--border-alt--background) !important;
        border-color: var(--vl-color--border-alt);
        color: #707070 !important;
        cursor: not-allowed;
        user-select: none;
    }

    .js-vl-select .vl-select__item--disabled:hover {
        background-color: var(--vl-color--border-alt--background);
    }

    .js-vl-select .vl-select__item span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .js-vl-select .vl-select__item--choice.vl-select__placeholder {
        display: none;
    }

    /* ===================================================================
       Placeholder
       =================================================================== */

    .js-vl-select .vl-select__placeholder {
        opacity: 0.5;
    }

    .js-vl-select .vl-select__item.vl-select__placeholder {
        opacity: 1;
        color: var(--vl-select-rich--placeholder-color);
    }

    /* ===================================================================
       Groups
       =================================================================== */

    .js-vl-select .vl-select__group {
        display: block;
    }

    .js-vl-select .vl-select__group:not(:first-of-type) {
        border-top: 0.1rem solid var(--vl-color--grey-800);
    }

    .js-vl-select .vl-select__group .vl-select__heading {
        padding: 0.6rem 2rem;
        color: var(--vl-select-rich--group-heading-color);
        font-weight: 500;
    }

    /* ===================================================================
       Input Field (inside Choices.js)
       =================================================================== */

    .js-vl-select .vl-input-field {
        display: inline-block;
        max-width: 100%;
        border: 0;
        background-color: transparent;
        vertical-align: baseline;
    }

    /* ===================================================================
       Pill Styles (Multiselect tags)
       =================================================================== */

    .vl-pill__text {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
    }

    .vl-pill {
        display: inline-flex;
        max-width: 100%;
        align-items: center;
        background-color: #fff;
        font-size: 1.4rem;
        font-weight: 500;
        color: #4d4d4b;
        text-decoration: none;
        vertical-align: middle;
        border-radius: 0.3rem;
        border: 0.1rem solid var(--vl-color--grey-800);
        transition:
            color 0.2s,
            background-color 0.2s,
            box-shadow 0.2s;
        padding: 0 1.4rem;
        line-height: calc(2.4rem - 0.2rem);
        min-width: 0;
    }

    .vl-pill__close {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: var(--vl-select-rich--button-color);
        width: 2.4rem;
        height: 2.4rem;
        border: 0.1rem solid var(--vl-color--grey-800);
        text-decoration: none;
        margin-left: 1.4rem;
        padding: 0;
        border-radius: 0 0.3rem 0.3rem 0;
        transition:
            color 0.2s,
            background-color 0.2s,
            box-shadow 0.2s;
        margin-top: -0.1rem;
        margin-right: -0.1rem;
        margin-bottom: -0.1rem;
        min-width: 2.4rem;
    }

    .vl-pill__close:hover:not([disabled]) {
        color: var(--vl-select-rich--button-hover-color);
        box-shadow: inset 0 0 0 0.1rem var(--vl-select-rich--button-hover-border);
        border: var(--vl-select-rich--button-hover-border) 0.1rem solid;
        background-color: var(--vl-select-rich--button-hover-bg);
    }

    .vl-pill__close:focus {
        outline: transparent solid 0.2rem;
        border: var(--vl-select-rich--button-hover-border) 0.1rem solid;
        box-shadow:
            0 0 0 2px #fff,
            0 0 0 5px rgba(0, 85, 204, 0.65),
            inset 0 0 0 0.1rem var(--vl-select-rich--button-hover-border);
    }

    .is-disabled .vl-pill__close,
    .vl-pill__close[disabled] {
        color: var(--vl-color--grey-800);
        cursor: default;
    }

    .vl-pill__close__icon {
        line-height: 0;
    }

    .vl-pill__close__icon::before {
        display: inline-block;
        font-size: 0.8rem;
        text-indent: 0;
        line-height: 1;
        font-weight: bold;
    }
`,ki={AUTO:"auto",TOP:"top",BOTTOM:"bottom"},te={DEFAULT:"default",EXACT_AND:"exact-and",EXACT_OR:"exact-or"},T={...st,initialOptions:[],options:[],placeholder:"",notDeletable:!1,multiple:!1,search:!1,position:ki.AUTO,resultLimit:4,noResultsText:"Geen resultaten gevonden",noChoicesText:"Geen resterende opties gevonden",searchPlaceholder:"Zoek item",searchStrategy:te.DEFAULT},Ze=t=>(e,i)=>{const s=i.trim().replace(/\s{2,}/g," ");if(!s.length||s===e._currentValue)return null;const r=e._searcher,o=e._store.choices.filter(u=>!u.placeholder);r.isEmptyIndex()&&r.index(o);const l=s.toLowerCase().split(/\s+/).filter(u=>u.length>0),a=o.filter(u=>{if(u.disabled)return!1;const f=u.label?.toLowerCase()||"",m=u.value?.toLowerCase()||"",d=`${f} ${m}`;return t(l,d)}).map((u,f)=>({item:u,score:0,rank:f+1}));e._currentValue=s,e._highlightPosition=0,e._isSearching=!0;const h=e._notice;return(h&&h.type)!=="addChoice"&&(a.length?e._clearNotice():e._displayNotice(e.config.noResultsText,"no-results")),e._store.dispatch({type:"FILTER_CHOICES",results:a}),a.length},Pi=Ze((t,e)=>t.every(i=>e.includes(i))),Fi=Ze((t,e)=>t.some(i=>e.includes(i))),Ri={[te.EXACT_AND]:Pi,[te.EXACT_OR]:Fi},Ki=t=>t===te.DEFAULT?null:Ri[t]||null;var Vi=Object.getOwnPropertyDescriptor,Hi=(t,e,i,s)=>{for(var r=s>1?void 0:s?Vi(e,i):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(r=o(r)||r);return r};let ie=class extends rt{constructor(){super(),this.options=T.options,this.initialOptions=T.initialOptions,this.placeholder=T.placeholder,this.search=T.search,this.searchPlaceholder=T.searchPlaceholder,this.choices=null,this.notDeletable=T.notDeletable,this.multiple=T.multiple,this.position=T.position,this.resultLimit=T.resultLimit,this.noResultsText=T.noResultsText,this.noChoicesText=T.noChoicesText,this.searchStrategy=T.searchStrategy,this.searchMatcher=null,this.nativeSearchMethod=null,this.value=null,this.dropdownInitialised=!1,this.isDropdownOpen=!1,this.dispatchInput=!1,this.initialised=!1,this.callbackOnInit=async()=>{this.getChoicesElement()?.addEventListener("click",this.onClickChoices),this.internals.labels[0]?.addEventListener("click",this.onClickChoices),this.getChoicesElement()?.addEventListener("showDropdown",()=>{const t=this.getChoicesElement()?.querySelector(".vl-select__list--dropdown");t&&!this.dropdownInitialised&&(t.setAttribute("role","group"),t.setAttribute("id","vl-select__list"),this.dropdownInitialised=!0),this.isDropdownOpen=!0}),this.getChoicesElement()?.addEventListener("hideDropdown",()=>{this.isDropdownOpen=!1}),this.setChoicesInputAttributes(),await Promise.resolve(),this.value||this.setValue(null),this.choices?.input?.element?.addEventListener("input",this.onSearchInput),this.installSearchWrapper(),this.initialised=!0},this.onClickChoices=()=>{this.disabled||this.choices?.showDropdown()},this.onSearchInput=t=>{const e=t?.target?.value;this.dispatchEvent(new CustomEvent("vl-select-search",{bubbles:!0,composed:!0,detail:{value:e}}))},this.onKeyDownIgnoreModifierKeys=t=>{(t.ctrlKey||t.altKey||t.metaKey)&&t.stopImmediatePropagation()},this.submitFormOnEnter=!1}static get styles(){return[nt,ji]}static get properties(){return{initialOptions:{type:Array,attribute:"initial-options"},options:{type:Array,hasChanged:(t,e)=>t instanceof Array&&e instanceof Array?JSON.stringify([...t])!==JSON.stringify([...e]):t!==e},placeholder:{type:String},notDeletable:{type:Boolean,attribute:"not-deletable"},multiple:{type:Boolean},search:{type:Boolean},position:{type:String},resultLimit:{type:Number,attribute:"result-limit"},noResultsText:{type:String,attribute:"no-results-text"},noChoicesText:{type:String,attribute:"no-choices-text"},searchPlaceholder:{type:String,attribute:"search-placeholder"},searchStrategy:{type:String,attribute:"search-strategy"},value:{type:FormData,state:!0,hasChanged:(t,e)=>this.compareValue(e,t)}}}connectedCallback(){super.connectedCallback(),this.initialised&&(this.choices=new he(this.validationTarget,this.getChoicesConfig()),this.initialOptions=structuredClone(this.options)),this.addEventListener("keydown",this.onKeyDownIgnoreModifierKeys,{capture:!0})}async firstUpdated(t){super.firstUpdated(t),this.choices=new he(this.validationTarget,this.getChoicesConfig()),this.initialOptions=structuredClone(this.options)}updated(t){if(super.updated(t),!!this.choices){if(t.has("options")&&(this.choices.initialised&&(this.choices.clearStore(),this.choices.setChoices(this.options,"value","label",!0),this.updateSelectedOptions(this.options)),this.dispatchInput=!1,ie.compareValue(this.value,t.has("value"))&&(this.value=this.collectFormData())),t.has("value")){const e={value:this.getSelected()};this.setValue(this.value),this.dispatchEvent(new CustomEvent("vl-change",{bubbles:!0,composed:!0,detail:e})),this.dispatchInput&&(this.dispatchEvent(new CustomEvent("vl-input",{bubbles:!0,composed:!0,detail:e})),this.dispatchInput=!1),this.validity.valid&&this.dispatchEventIfValid(e)}t.has("disabled")&&(this.disabled?this.choices.disable():this.choices.enable()),t.has("error")&&this.internals.setValidity({customError:this.error},"custom-error"),t.has("resultLimit")&&(this.choices.config.searchResultLimit=this.resultLimit),t.has("searchStrategy")&&(this.searchMatcher=Ki(this.searchStrategy))}}disconnectedCallback(){super.disconnectedCallback(),this.getChoicesElement()?.removeEventListener("click",this.onClickChoices),this.internals.labels[0]?.removeEventListener("click",this.onClickChoices),this.choices?.input?.element?.removeEventListener("input",this.onSearchInput),this.choices?.destroy(),this.removeEventListener("keydown",this.onKeyDownIgnoreModifierKeys,{capture:!0})}render(){const t={"vl-select":!this.multiple,"vl-multiselect":this.multiple,"vl-select--disabled":this.disabled,"vl-select--error":this.isInvalid||this.error,"vl-select--success":this.success};return lt`
            <select
                id=${this.id||J}
                name=${this.name||J}
                class=${ot(t)}
                aria-label=${this.label||J}
                aria-invalid=${this.isInvalid||J}
                ?required=${this.required}
                ?disabled=${this.disabled}
                ?error=${this.error}
                ?multiple=${this.multiple}
                @addItem=${this.onChange}
                @removeItem=${this.onChange}
            ></select>
        `}get validationTarget(){return this.shadowRoot?.querySelector("select")}resetFormControl(){super.resetFormControl(),this.choices?.clearStore(),this.choices?.setChoices(this.options,"value","label",!0),this.updateSelectedOptions(this.initialOptions),this.dispatchInput=!1,this.value=this.collectFormData()}setOptions(t){!t||!t.length||(this.options=structuredClone(t))}setSearchMatcher(t){this.searchMatcher=t}updateSelectedOptions(t){const e=t.filter(s=>s.selected).map(s=>s.value),i=t.filter(s=>!s.selected).map(s=>s.value);this.removeSelectionByValue(i),this.selectByValue(e)}setSelectedValues(t){this.removeAllSelections(),this.selectByValue(t)}getSelected(){return this.multiple?this.getSelectedValues():this.getSelectedValues()[0]||null}selectByValue(t){this.choices&&(this.choices.setChoiceByValue(t),this.dispatchInput=!1,this.setValue(this.collectFormData()))}removeSelectionByValue(t){this.choices&&(Array.isArray(t)?t.forEach(e=>this.choices.removeActiveItemsByValue(e)):this.choices.removeActiveItemsByValue(t),this.dispatchInput=!1,this.setValue(this.collectFormData()))}removeAllSelections(){this.choices&&(this.choices.removeActiveItems(),this.dispatchInput=!1,this.setValue(this.collectFormData()))}onKeydown(t){t.stopPropagation(),super.onKeydown(t)}setChoicesInputAttributes(){const t=this.choices?.input?.element||this.shadowRoot?.querySelector("input.vl-input-field");t&&(t.setAttribute("type","text"),t.classList.add("vl-input-field","vl-input-field-cloned"),t.setAttribute("autocomplete","off"),t.setAttribute("autocapitalize","off"),t.setAttribute("spellcheck","false"),t.setAttribute("role","textbox"),t.setAttribute("aria-autocomplete","list"),t.setAttribute("aria-label","zoek item"))}getSelectedValues(){const t=this.validationTarget.selectedOptions;return Array.from(t).filter(e=>e.value&&e.hasAttribute("selected")).map(e=>e.value)}collectFormData(){const t=this.name||this.id,e=this.getSelectedValues();return e?.length?e.reduce((i,s,r)=>(r?i.append(t,s):i.set(t,s),i),new FormData):null}getChoicesElement(){return this.shadowRoot?.querySelector(".js-vl-select")}getChoicesConfig(){return{callbackOnInit:this.callbackOnInit,shouldSort:!1,removeItemButton:!this.notDeletable,removeItems:!this.notDeletable,searchEnabled:this.search,placeholder:!!this.placeholder,placeholderValue:this.placeholder,position:this.position,noResultsText:this.noResultsText,searchResultLimit:this.resultLimit,noChoicesText:this.noChoicesText,searchPlaceholderValue:this.searchPlaceholder,shadowRoot:this.shadowRoot,classNames:{...he.defaults.allOptions.classNames,containerOuter:"js-vl-select",containerInner:"vl-select__inner",input:"vl-input-field",inputCloned:"vl-input-field-cloned",list:"vl-select__list",listItems:"vl-select__list--multiple",listSingle:"vl-select__list--single",listDropdown:["vl-select__list","vl-select__list--dropdown"],item:"vl-select__item",itemSelectable:"vl-select__item--selectable",itemDisabled:"vl-select__item--disabled",itemChoice:"vl-select__item--choice",placeholder:"vl-select__placeholder",group:"vl-select__group",groupHeading:"vl-select__heading",button:"vl-select__button"},callbackOnCreateTemplates:t=>({containerOuter:()=>t(`
                            <div
                                class="js-vl-select vl-vi vl-vi-nav-down"
                                data-type="${this.multiple?"select-multiple":"select-one"}"
                                ${this.search?'aria-autocomplete="list"':""}
                                part="vl-select-rich__combobox"
                                role="combobox"
                                aria-haspopup="true"
                                aria-expanded=${this.isDropdownOpen?"true":"false"}
                                tabindex="0"
                                aria-controls="vl-select__list"
                                aria-label="${this.multiple?"selecteer één of meerdere opties":"selecteer één optie"}"
                            ></div>
                            `),item:(e,i)=>{const s=i.placeholder===!0;return this.notDeletable?t(`
                            <div class="vl-select__item
                                ${i.highlighted?"is-highlighted":"vl-select__item--selectable"}
                                ${this.multiple?"vl-pill":""}
                                ${i.placeholder?"vl-select__placeholder":""}"
                                role="option"
                                data-item
                                data-id="${i.id}"
                                data-value="${i.value}"
                                ${i.disabled?'aria-disabled="true"':""}
                            >
                                ${i.label}
                            </div>
                        `):t(`<div class="
                                    vl-select__item
                                    ${i.highlighted?"is-highlighted":""}
                                    ${i.disabled?"":"vl-select__item--selectable"}
                                    ${this.multiple?"vl-pill":""}
                                    ${i.placeholder?"vl-select__placeholder":""}"
                                    data-item
                                    data-id="${i.id}"
                                    data-value="${i.value}"
                                            ${s?'role="option"':""}
                                    ${i.disabled?'aria-disabled="true"':"data-deletable"}
                                >
                                    <span>${i.label}</span>
                                    <button type="button"
                                    ${s?"":'role="option"'}
                                     class="vl-pill__close ${this.multiple?"":"vl-vi vl-vi-close"}" data-button aria-label="verwijder ${i.label}">
                                        ${this.multiple?'<span class="vl-pill__close__icon vl-vi vl-vi-close" aria-hidden="true"></span>':""}
                                    </button>
                                </div>`)},itemList:()=>t(`<div class="vl-input-field ${this.multiple?"vl-select__list--multiple":""}" role="listbox"></div>`),choiceList:()=>t('<div class="vl-select__list" role="listbox" aria-label="item lijst" tabindex="0"></div>')})}}onChange(){this.dispatchInput=!0,this.value=this.collectFormData()}installSearchWrapper(){this.choices&&(this.nativeSearchMethod=this.choices._searchChoices.bind(this.choices),this.choices._searchChoices=t=>this.searchMatcher?this.searchMatcher(this.choices,t):this.nativeSearchMethod(t))}};ie.compareValue=(t,e)=>t instanceof FormData&&e instanceof FormData?JSON.stringify([...t.entries()])!==JSON.stringify([...e.entries()]):t!==e;ie=Hi([at("vl-select-rich")],ie);export{ki as S,ie as V,te as a,T as s};
