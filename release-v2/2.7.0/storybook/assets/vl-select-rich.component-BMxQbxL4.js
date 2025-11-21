import{z as _e,bf as et,N as tt,aG as it,aM as st,aI as rt,cK as nt,cc as lt,T as X,aO as ot,x as at,y as ct}from"./iframe-BRJWU34U.js";/*! choices.js v11.1.0 | © 2025 Josh Johnson | https://github.com/jshjohnson/Choices#readme */var he=function(i,e){return he=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,s){t.__proto__=s}||function(t,s){for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r])},he(i,e)};function Ke(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");he(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var I=function(){return I=Object.assign||function(e){for(var t,s=1,r=arguments.length;s<r;s++){t=arguments[s];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},I.apply(this,arguments)};function ht(i,e,t){for(var s=0,r=e.length,n;s<r;s++)(n||!(s in e))&&(n||(n=Array.prototype.slice.call(e,0,s)),n[s]=e[s]);return i.concat(n||Array.prototype.slice.call(e))}var y={ADD_CHOICE:"ADD_CHOICE",REMOVE_CHOICE:"REMOVE_CHOICE",FILTER_CHOICES:"FILTER_CHOICES",ACTIVATE_CHOICES:"ACTIVATE_CHOICES",CLEAR_CHOICES:"CLEAR_CHOICES",ADD_GROUP:"ADD_GROUP",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",HIGHLIGHT_ITEM:"HIGHLIGHT_ITEM"},x={showDropdown:"showDropdown",hideDropdown:"hideDropdown",change:"change",choice:"choice",search:"search",addItem:"addItem",removeItem:"removeItem",highlightItem:"highlightItem",highlightChoice:"highlightChoice",unhighlightItem:"unhighlightItem"},w={TAB_KEY:9,SHIFT_KEY:16,BACK_KEY:46,DELETE_KEY:8,ENTER_KEY:13,A_KEY:65,ESC_KEY:27,UP_KEY:38,DOWN_KEY:40,PAGE_UP_KEY:33,PAGE_DOWN_KEY:34},ut=["fuseOptions","classNames"],R={Text:"text",SelectOne:"select-one",SelectMultiple:"select-multiple"},we=function(i){return{type:y.ADD_CHOICE,choice:i}},dt=function(i){return{type:y.REMOVE_CHOICE,choice:i}},pt=function(i){return{type:y.FILTER_CHOICES,results:i}},ft=function(i){return{type:y.ACTIVATE_CHOICES,active:i}},mt=function(i){return{type:y.ADD_GROUP,group:i}},Ce=function(i){return{type:y.ADD_ITEM,item:i}},Se=function(i){return{type:y.REMOVE_ITEM,item:i}},Q=function(i,e){return{type:y.HIGHLIGHT_ITEM,item:i,highlighted:e}},vt=function(i,e){return Math.floor(Math.random()*(e-i)+i)},xe=function(i){return Array.from({length:i},function(){return vt(0,36).toString(36)}).join("")},_t=function(i,e){var t=i.id||i.name&&"".concat(i.name,"-").concat(xe(2))||xe(4);return t=t.replace(/(:|\.|\[|\]|,)/g,""),t="".concat(e,"-").concat(t),t},gt=function(i,e,t){t===void 0&&(t=1);for(var s="".concat(t>0?"next":"previous","ElementSibling"),r=i[s];r;){if(r.matches(e))return r;r=r[s]}return null},bt=function(i,e,t){t===void 0&&(t=1);var s;return t>0?s=e.scrollTop+e.offsetHeight>=i.offsetTop+i.offsetHeight:s=i.offsetTop>=e.scrollTop,s},ie=function(i){if(typeof i!="string"){if(i==null)return"";if(typeof i=="object"){if("raw"in i)return ie(i.raw);if("trusted"in i)return i.trusted}return i}return i.replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/'/g,"&#039;").replace(/"/g,"&quot;")},yt=(function(){var i=document.createElement("div");return function(e){i.innerHTML=e.trim();for(var t=i.children[0];i.firstChild;)i.removeChild(i.firstChild);return t}})(),q=function(i,e){return typeof i=="function"?i(ie(e),e):i},Ie=function(i){return typeof i=="function"?i():i},$=function(i){if(typeof i=="string")return i;if(typeof i=="object"){if("trusted"in i)return i.trusted;if("raw"in i)return i.raw}return""},Ve=function(i){if(typeof i=="string")return i;if(typeof i=="object"){if("escaped"in i)return i.escaped;if("trusted"in i)return i.trusted}return""},ge=function(i,e){return i?Ve(e):ie(e)},j=function(i,e,t){i.innerHTML=ge(e,t)},Et=function(i,e){var t=i.value,s=i.label,r=s===void 0?t:s,n=e.value,l=e.label,o=l===void 0?n:l;return $(r).localeCompare($(o),[],{sensitivity:"base",ignorePunctuation:!0,numeric:!0})},wt=function(i,e){return i.rank-e.rank},Ct=function(i,e,t){t===void 0&&(t=null);var s=new CustomEvent(e,{detail:t,bubbles:!0,cancelable:!0});return i.dispatchEvent(s)},St=function(i,e){var t=Object.keys(i).sort(),s=Object.keys(e).sort();return t.filter(function(r){return s.indexOf(r)<0})},se=function(i){return Array.isArray(i)?i:[i]},W=function(i){return i&&Array.isArray(i)?i.map(function(e){return".".concat(e)}).join(""):".".concat(i)},_=function(i,e){var t;(t=i.classList).add.apply(t,se(e))},D=function(i,e){var t;(t=i.classList).remove.apply(t,se(e))},xt=function(i){if(typeof i<"u")try{return JSON.parse(i)}catch{return i}return{}},It=function(i,e,t){var s=i.itemEl;s&&(D(s,t),_(s,e))},At=(function(){function i(e){var t=e.element,s=e.type,r=e.classNames;this.element=t,this.classNames=r,this.type=s,this.isActive=!1}return i.prototype.show=function(){return _(this.element,this.classNames.activeState),this.element.setAttribute("aria-expanded","true"),this.isActive=!0,this},i.prototype.hide=function(){return D(this.element,this.classNames.activeState),this.element.setAttribute("aria-expanded","false"),this.isActive=!1,this},i})(),Ae=(function(){function i(e){var t=e.element,s=e.type,r=e.classNames,n=e.position;this.element=t,this.classNames=r,this.type=s,this.position=n,this.isOpen=!1,this.isFlipped=!1,this.isDisabled=!1,this.isLoading=!1}return i.prototype.shouldFlip=function(e,t){var s=!1;return this.position==="auto"?s=this.element.getBoundingClientRect().top-t>=0&&!window.matchMedia("(min-height: ".concat(e+1,"px)")).matches:this.position==="top"&&(s=!0),s},i.prototype.setActiveDescendant=function(e){this.element.setAttribute("aria-activedescendant",e)},i.prototype.removeActiveDescendant=function(){this.element.removeAttribute("aria-activedescendant")},i.prototype.open=function(e,t){_(this.element,this.classNames.openState),this.element.setAttribute("aria-expanded","true"),this.isOpen=!0,this.shouldFlip(e,t)&&(_(this.element,this.classNames.flippedState),this.isFlipped=!0)},i.prototype.close=function(){D(this.element,this.classNames.openState),this.element.setAttribute("aria-expanded","false"),this.removeActiveDescendant(),this.isOpen=!1,this.isFlipped&&(D(this.element,this.classNames.flippedState),this.isFlipped=!1)},i.prototype.addFocusState=function(){_(this.element,this.classNames.focusState)},i.prototype.removeFocusState=function(){D(this.element,this.classNames.focusState)},i.prototype.enable=function(){D(this.element,this.classNames.disabledState),this.element.removeAttribute("aria-disabled"),this.type===R.SelectOne&&this.element.setAttribute("tabindex","0"),this.isDisabled=!1},i.prototype.disable=function(){_(this.element,this.classNames.disabledState),this.element.setAttribute("aria-disabled","true"),this.type===R.SelectOne&&this.element.setAttribute("tabindex","-1"),this.isDisabled=!0},i.prototype.wrap=function(e){var t=this.element,s=e.parentNode;s&&(e.nextSibling?s.insertBefore(t,e.nextSibling):s.appendChild(t)),t.appendChild(e)},i.prototype.unwrap=function(e){var t=this.element,s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))},i.prototype.addLoadingState=function(){_(this.element,this.classNames.loadingState),this.element.setAttribute("aria-busy","true"),this.isLoading=!0},i.prototype.removeLoadingState=function(){D(this.element,this.classNames.loadingState),this.element.removeAttribute("aria-busy"),this.isLoading=!1},i})(),Ot=(function(){function i(e){var t=e.element,s=e.type,r=e.classNames,n=e.preventPaste;this.element=t,this.type=s,this.classNames=r,this.preventPaste=n,this.isFocussed=this.element.isEqualNode(document.activeElement),this.isDisabled=t.disabled,this._onPaste=this._onPaste.bind(this),this._onInput=this._onInput.bind(this),this._onFocus=this._onFocus.bind(this),this._onBlur=this._onBlur.bind(this)}return Object.defineProperty(i.prototype,"placeholder",{set:function(e){this.element.placeholder=e},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"value",{get:function(){return this.element.value},set:function(e){this.element.value=e},enumerable:!1,configurable:!0}),i.prototype.addEventListeners=function(){var e=this.element;e.addEventListener("paste",this._onPaste),e.addEventListener("input",this._onInput,{passive:!0}),e.addEventListener("focus",this._onFocus,{passive:!0}),e.addEventListener("blur",this._onBlur,{passive:!0})},i.prototype.removeEventListeners=function(){var e=this.element;e.removeEventListener("input",this._onInput),e.removeEventListener("paste",this._onPaste),e.removeEventListener("focus",this._onFocus),e.removeEventListener("blur",this._onBlur)},i.prototype.enable=function(){var e=this.element;e.removeAttribute("disabled"),this.isDisabled=!1},i.prototype.disable=function(){var e=this.element;e.setAttribute("disabled",""),this.isDisabled=!0},i.prototype.focus=function(){this.isFocussed||this.element.focus()},i.prototype.blur=function(){this.isFocussed&&this.element.blur()},i.prototype.clear=function(e){return e===void 0&&(e=!0),this.element.value="",e&&this.setWidth(),this},i.prototype.setWidth=function(){var e=this.element;e.style.minWidth="".concat(e.placeholder.length+1,"ch"),e.style.width="".concat(e.value.length+1,"ch")},i.prototype.setActiveDescendant=function(e){this.element.setAttribute("aria-activedescendant",e)},i.prototype.removeActiveDescendant=function(){this.element.removeAttribute("aria-activedescendant")},i.prototype._onInput=function(){this.type!==R.SelectOne&&this.setWidth()},i.prototype._onPaste=function(e){this.preventPaste&&e.preventDefault()},i.prototype._onFocus=function(){this.isFocussed=!0},i.prototype._onBlur=function(){this.isFocussed=!1},i})(),Tt=4,Oe=(function(){function i(e){var t=e.element;this.element=t,this.scrollPos=this.element.scrollTop,this.height=this.element.offsetHeight}return i.prototype.prepend=function(e){var t=this.element.firstElementChild;t?this.element.insertBefore(e,t):this.element.append(e)},i.prototype.scrollToTop=function(){this.element.scrollTop=0},i.prototype.scrollToChildElement=function(e,t){var s=this;if(e){var r=this.element.offsetHeight,n=this.element.scrollTop+r,l=e.offsetHeight,o=e.offsetTop+l,a=t>0?this.element.scrollTop+o-n:e.offsetTop;requestAnimationFrame(function(){s._animateScroll(a,t)})}},i.prototype._scrollDown=function(e,t,s){var r=(s-e)/t,n=r>1?r:1;this.element.scrollTop=e+n},i.prototype._scrollUp=function(e,t,s){var r=(e-s)/t,n=r>1?r:1;this.element.scrollTop=e-n},i.prototype._animateScroll=function(e,t){var s=this,r=Tt,n=this.element.scrollTop,l=!1;t>0?(this._scrollDown(n,r,e),n<e&&(l=!0)):(this._scrollUp(n,r,e),n>e&&(l=!0)),l&&requestAnimationFrame(function(){s._animateScroll(e,t)})},i})(),He=(function(){function i(e){var t=e.element,s=e.classNames;this.element=t,this.classNames=s,this.isDisabled=!1}return Object.defineProperty(i.prototype,"isActive",{get:function(){return this.element.dataset.choice==="active"},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"dir",{get:function(){return this.element.dir},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"value",{get:function(){return this.element.value},set:function(e){this.element.setAttribute("value",e),this.element.value=e},enumerable:!1,configurable:!0}),i.prototype.conceal=function(){var e=this.element;_(e,this.classNames.input),e.hidden=!0,e.tabIndex=-1;var t=e.getAttribute("style");t&&e.setAttribute("data-choice-orig-style",t),e.setAttribute("data-choice","active")},i.prototype.reveal=function(){var e=this.element;D(e,this.classNames.input),e.hidden=!1,e.removeAttribute("tabindex");var t=e.getAttribute("data-choice-orig-style");t?(e.removeAttribute("data-choice-orig-style"),e.setAttribute("style",t)):e.removeAttribute("style"),e.removeAttribute("data-choice")},i.prototype.enable=function(){this.element.removeAttribute("disabled"),this.element.disabled=!1,this.isDisabled=!1},i.prototype.disable=function(){this.element.setAttribute("disabled",""),this.element.disabled=!0,this.isDisabled=!0},i.prototype.triggerEvent=function(e,t){Ct(this.element,e,t||{})},i})(),Lt=(function(i){Ke(e,i);function e(){return i!==null&&i.apply(this,arguments)||this}return e})(He),z=function(i,e){return e===void 0&&(e=!0),typeof i>"u"?e:!!i},$e=function(i){if(typeof i=="string"&&(i=i.split(" ").filter(function(e){return e.length})),Array.isArray(i)&&i.length)return i},k=function(i,e,t){if(t===void 0&&(t=!0),typeof i=="string"){var s=ie(i),r=t||s===i?i:{escaped:s,raw:i},n=k({value:i,label:r,selected:!0},!1);return n}var l=i;if("choices"in l){if(!e)throw new TypeError("optGroup is not allowed");var o=l,a=o.choices.map(function(p){return k(p,!1)}),h={id:0,label:$(o.label)||o.value,active:!!a.length,disabled:!!o.disabled,choices:a};return h}var c=l,u={id:0,group:null,score:0,rank:0,value:c.value,label:c.label||c.value,active:z(c.active),selected:z(c.selected,!1),disabled:z(c.disabled,!1),placeholder:z(c.placeholder,!1),highlighted:!1,labelClass:$e(c.labelClass),labelDescription:c.labelDescription,customProperties:c.customProperties};return u},kt=function(i){return i.tagName==="INPUT"},Be=function(i){return i.tagName==="SELECT"},Dt=function(i){return i.tagName==="OPTION"},Mt=function(i){return i.tagName==="OPTGROUP"},jt=(function(i){Ke(e,i);function e(t){var s=t.element,r=t.classNames,n=t.template,l=t.extractPlaceholder,o=i.call(this,{element:s,classNames:r})||this;return o.template=n,o.extractPlaceholder=l,o}return Object.defineProperty(e.prototype,"placeholderOption",{get:function(){return this.element.querySelector('option[value=""]')||this.element.querySelector("option[placeholder]")},enumerable:!1,configurable:!0}),e.prototype.addOptions=function(t){var s=this,r=document.createDocumentFragment();t.forEach(function(n){var l=n;if(!l.element){var o=s.template(l);r.appendChild(o),l.element=o}}),this.element.appendChild(r)},e.prototype.optionsAsChoices=function(){var t=this,s=[];return this.element.querySelectorAll(":scope > option, :scope > optgroup").forEach(function(r){Dt(r)?s.push(t._optionToChoice(r)):Mt(r)&&s.push(t._optgroupToChoice(r))}),s},e.prototype._optionToChoice=function(t){return!t.hasAttribute("value")&&t.hasAttribute("placeholder")&&(t.setAttribute("value",""),t.value=""),{id:0,group:null,score:0,rank:0,value:t.value,label:t.label,element:t,active:!0,selected:this.extractPlaceholder?t.selected:t.hasAttribute("selected"),disabled:t.disabled,highlighted:!1,placeholder:this.extractPlaceholder&&(!t.value||t.hasAttribute("placeholder")),labelClass:typeof t.dataset.labelClass<"u"?$e(t.dataset.labelClass):void 0,labelDescription:typeof t.dataset.labelDescription<"u"?t.dataset.labelDescription:void 0,customProperties:xt(t.dataset.customProperties)}},e.prototype._optgroupToChoice=function(t){var s=this,r=t.querySelectorAll("option"),n=Array.from(r).map(function(l){return s._optionToChoice(l)});return{id:0,label:t.label||"",element:t,active:!!n.length,disabled:t.disabled,choices:n}},e})(He),Nt={containerOuter:["choices"],containerInner:["choices__inner"],input:["choices__input"],inputCloned:["choices__input--cloned"],list:["choices__list"],listItems:["choices__list--multiple"],listSingle:["choices__list--single"],listDropdown:["choices__list--dropdown"],item:["choices__item"],itemSelectable:["choices__item--selectable"],itemDisabled:["choices__item--disabled"],itemChoice:["choices__item--choice"],description:["choices__description"],placeholder:["choices__placeholder"],group:["choices__group"],groupHeading:["choices__heading"],button:["choices__button"],activeState:["is-active"],focusState:["is-focused"],openState:["is-open"],disabledState:["is-disabled"],highlightedState:["is-highlighted"],selectedState:["is-selected"],flippedState:["is-flipped"],loadingState:["is-loading"],notice:["choices__notice"],addChoice:["choices__item--selectable","add-choice"],noResults:["has-no-results"],noChoices:["has-no-choices"]},Te={items:[],choices:[],silent:!1,renderChoiceLimit:-1,maxItemCount:-1,closeDropdownOnSelect:"auto",singleModeForMultiSelect:!1,addChoices:!1,addItems:!0,addItemFilter:function(i){return!!i&&i!==""},removeItems:!0,removeItemButton:!1,removeItemButtonAlignLeft:!1,editItems:!1,allowHTML:!1,allowHtmlUserInput:!1,duplicateItemsAllowed:!0,delimiter:",",paste:!0,searchEnabled:!0,searchChoices:!0,searchFloor:1,searchResultLimit:4,searchFields:["label","value"],position:"auto",resetScrollPosition:!0,shouldSort:!0,shouldSortItems:!1,sorter:Et,shadowRoot:null,placeholder:!0,placeholderValue:null,searchPlaceholderValue:null,prependValue:null,appendValue:null,renderSelectedChoices:"auto",loadingText:"Loading...",noResultsText:"No results found",noChoicesText:"No choices to choose from",itemSelectText:"Press to select",uniqueItemText:"Only unique values can be added",customAddItemText:"Only values matching specific conditions can be added",addItemText:function(i){return'Press Enter to add <b>"'.concat(i,'"</b>')},removeItemIconText:function(){return"Remove item"},removeItemLabelText:function(i){return"Remove item: ".concat(i)},maxItemText:function(i){return"Only ".concat(i," values can be added")},valueComparer:function(i,e){return i===e},fuseOptions:{includeScore:!0},labelId:"",callbackOnInit:null,callbackOnCreateTemplates:null,classNames:Nt,appendGroupInSearch:!1},Le=function(i){var e=i.itemEl;e&&(e.remove(),i.itemEl=void 0)};function Pt(i,e,t){var s=i,r=!0;switch(e.type){case y.ADD_ITEM:{e.item.selected=!0;var n=e.item.element;n&&(n.selected=!0,n.setAttribute("selected","")),s.push(e.item);break}case y.REMOVE_ITEM:{e.item.selected=!1;var n=e.item.element;if(n){n.selected=!1,n.removeAttribute("selected");var l=n.parentElement;l&&Be(l)&&l.type===R.SelectOne&&(l.value="")}Le(e.item),s=s.filter(function(c){return c.id!==e.item.id});break}case y.REMOVE_CHOICE:{Le(e.choice),s=s.filter(function(h){return h.id!==e.choice.id});break}case y.HIGHLIGHT_ITEM:{var o=e.highlighted,a=s.find(function(h){return h.id===e.item.id});a&&a.highlighted!==o&&(a.highlighted=o,t&&It(a,o?t.classNames.highlightedState:t.classNames.selectedState,o?t.classNames.selectedState:t.classNames.highlightedState));break}default:{r=!1;break}}return{state:s,update:r}}function Ft(i,e){var t=i,s=!0;switch(e.type){case y.ADD_GROUP:{t.push(e.group);break}case y.CLEAR_CHOICES:{t=[];break}default:{s=!1;break}}return{state:t,update:s}}function Rt(i,e,t){var s=i,r=!0;switch(e.type){case y.ADD_CHOICE:{s.push(e.choice);break}case y.REMOVE_CHOICE:{e.choice.choiceEl=void 0,e.choice.group&&(e.choice.group.choices=e.choice.group.choices.filter(function(l){return l.id!==e.choice.id})),s=s.filter(function(l){return l.id!==e.choice.id});break}case y.ADD_ITEM:case y.REMOVE_ITEM:{e.item.choiceEl=void 0;break}case y.FILTER_CHOICES:{var n=[];e.results.forEach(function(l){n[l.item.id]=l}),s.forEach(function(l){var o=n[l.id];o!==void 0?(l.score=o.score,l.rank=o.rank,l.active=!0):(l.score=0,l.rank=0,l.active=!1),t&&t.appendGroupInSearch&&(l.choiceEl=void 0)});break}case y.ACTIVATE_CHOICES:{s.forEach(function(l){l.active=e.active,t&&t.appendGroupInSearch&&(l.choiceEl=void 0)});break}case y.CLEAR_CHOICES:{s=[];break}default:{r=!1;break}}return{state:s,update:r}}var ke={groups:Ft,items:Pt,choices:Rt},Kt=(function(){function i(e){this._state=this.defaultState,this._listeners=[],this._txn=0,this._context=e}return Object.defineProperty(i.prototype,"defaultState",{get:function(){return{groups:[],items:[],choices:[]}},enumerable:!1,configurable:!0}),i.prototype.changeSet=function(e){return{groups:e,items:e,choices:e}},i.prototype.reset=function(){this._state=this.defaultState;var e=this.changeSet(!0);this._txn?this._changeSet=e:this._listeners.forEach(function(t){return t(e)})},i.prototype.subscribe=function(e){return this._listeners.push(e),this},i.prototype.dispatch=function(e){var t=this,s=this._state,r=!1,n=this._changeSet||this.changeSet(!1);Object.keys(ke).forEach(function(l){var o=ke[l](s[l],e,t._context);o.update&&(r=!0,n[l]=!0,s[l]=o.state)}),r&&(this._txn?this._changeSet=n:this._listeners.forEach(function(l){return l(n)}))},i.prototype.withTxn=function(e){this._txn++;try{e()}finally{if(this._txn=Math.max(0,this._txn-1),!this._txn){var t=this._changeSet;t&&(this._changeSet=void 0,this._listeners.forEach(function(s){return s(t)}))}}},Object.defineProperty(i.prototype,"state",{get:function(){return this._state},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"items",{get:function(){return this.state.items},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"highlightedActiveItems",{get:function(){return this.items.filter(function(e){return e.active&&e.highlighted})},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"choices",{get:function(){return this.state.choices},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"activeChoices",{get:function(){return this.choices.filter(function(e){return e.active})},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"searchableChoices",{get:function(){return this.choices.filter(function(e){return!e.disabled&&!e.placeholder})},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"groups",{get:function(){return this.state.groups},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"activeGroups",{get:function(){var e=this;return this.state.groups.filter(function(t){var s=t.active&&!t.disabled,r=e.state.choices.some(function(n){return n.active&&!n.disabled});return s&&r},[])},enumerable:!1,configurable:!0}),i.prototype.inTxn=function(){return this._txn>0},i.prototype.getChoiceById=function(e){return this.activeChoices.find(function(t){return t.id===e})},i.prototype.getGroupById=function(e){return this.groups.find(function(t){return t.id===e})},i})(),E={noChoices:"no-choices",noResults:"no-results",addChoice:"add-choice",generic:""};function Vt(i,e,t){return(e=$t(e))in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function De(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(i);e&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),t.push.apply(t,s)}return t}function G(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?De(Object(t),!0).forEach(function(s){Vt(i,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):De(Object(t)).forEach(function(s){Object.defineProperty(i,s,Object.getOwnPropertyDescriptor(t,s))})}return i}function Ht(i,e){if(typeof i!="object"||!i)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var s=t.call(i,e);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function $t(i){var e=Ht(i,"string");return typeof e=="symbol"?e:e+""}function N(i){return Array.isArray?Array.isArray(i):We(i)==="[object Array]"}function Bt(i){if(typeof i=="string")return i;let e=i+"";return e=="0"&&1/i==-1/0?"-0":e}function Gt(i){return i==null?"":Bt(i)}function M(i){return typeof i=="string"}function Ge(i){return typeof i=="number"}function Ut(i){return i===!0||i===!1||Wt(i)&&We(i)=="[object Boolean]"}function Ue(i){return typeof i=="object"}function Wt(i){return Ue(i)&&i!==null}function A(i){return i!=null}function le(i){return!i.trim().length}function We(i){return i==null?i===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(i)}const Yt="Incorrect 'index' type",zt=i=>`Invalid value for key ${i}`,qt=i=>`Pattern length exceeds max of ${i}.`,Jt=i=>`Missing ${i} property in key`,Xt=i=>`Property 'weight' in key '${i}' must be a positive integer`,Me=Object.prototype.hasOwnProperty;class Qt{constructor(e){this._keys=[],this._keyMap={};let t=0;e.forEach(s=>{let r=Ye(s);this._keys.push(r),this._keyMap[r.id]=r,t+=r.weight}),this._keys.forEach(s=>{s.weight/=t})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Ye(i){let e=null,t=null,s=null,r=1,n=null;if(M(i)||N(i))s=i,e=je(i),t=ue(i);else{if(!Me.call(i,"name"))throw new Error(Jt("name"));const l=i.name;if(s=l,Me.call(i,"weight")&&(r=i.weight,r<=0))throw new Error(Xt(l));e=je(l),t=ue(l),n=i.getFn}return{path:e,id:t,weight:r,src:s,getFn:n}}function je(i){return N(i)?i:i.split(".")}function ue(i){return N(i)?i.join("."):i}function Zt(i,e){let t=[],s=!1;const r=(n,l,o)=>{if(A(n))if(!l[o])t.push(n);else{let a=l[o];const h=n[a];if(!A(h))return;if(o===l.length-1&&(M(h)||Ge(h)||Ut(h)))t.push(Gt(h));else if(N(h)){s=!0;for(let c=0,u=h.length;c<u;c+=1)r(h[c],l,o+1)}else l.length&&r(h,l,o+1)}};return r(i,M(e)?e.split("."):e,0),s?t:t[0]}const ei={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},ti={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(i,e)=>i.score===e.score?i.idx<e.idx?-1:1:i.score<e.score?-1:1},ii={location:0,threshold:.6,distance:100},si={useExtendedSearch:!1,getFn:Zt,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var v=G(G(G(G({},ti),ei),ii),si);const ri=/[^ ]+/g;function ni(i=1,e=3){const t=new Map,s=Math.pow(10,e);return{get(r){const n=r.match(ri).length;if(t.has(n))return t.get(n);const l=1/Math.pow(n,.5*i),o=parseFloat(Math.round(l*s)/s);return t.set(n,o),o},clear(){t.clear()}}}class be{constructor({getFn:e=v.getFn,fieldNormWeight:t=v.fieldNormWeight}={}){this.norm=ni(t,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((t,s)=>{this._keysMap[t.id]=s})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,M(this.docs[0])?this.docs.forEach((e,t)=>{this._addString(e,t)}):this.docs.forEach((e,t)=>{this._addObject(e,t)}),this.norm.clear())}add(e){const t=this.size();M(e)?this._addString(e,t):this._addObject(e,t)}removeAt(e){this.records.splice(e,1);for(let t=e,s=this.size();t<s;t+=1)this.records[t].i-=1}getValueForItemAtKeyId(e,t){return e[this._keysMap[t]]}size(){return this.records.length}_addString(e,t){if(!A(e)||le(e))return;let s={v:e,i:t,n:this.norm.get(e)};this.records.push(s)}_addObject(e,t){let s={i:t,$:{}};this.keys.forEach((r,n)=>{let l=r.getFn?r.getFn(e):this.getFn(e,r.path);if(A(l)){if(N(l)){let o=[];const a=[{nestedArrIndex:-1,value:l}];for(;a.length;){const{nestedArrIndex:h,value:c}=a.pop();if(A(c))if(M(c)&&!le(c)){let u={v:c,i:h,n:this.norm.get(c)};o.push(u)}else N(c)&&c.forEach((u,p)=>{a.push({nestedArrIndex:p,value:u})})}s.$[n]=o}else if(M(l)&&!le(l)){let o={v:l,n:this.norm.get(l)};s.$[n]=o}}}),this.records.push(s)}toJSON(){return{keys:this.keys,records:this.records}}}function ze(i,e,{getFn:t=v.getFn,fieldNormWeight:s=v.fieldNormWeight}={}){const r=new be({getFn:t,fieldNormWeight:s});return r.setKeys(i.map(Ye)),r.setSources(e),r.create(),r}function li(i,{getFn:e=v.getFn,fieldNormWeight:t=v.fieldNormWeight}={}){const{keys:s,records:r}=i,n=new be({getFn:e,fieldNormWeight:t});return n.setKeys(s),n.setIndexRecords(r),n}function Z(i,{errors:e=0,currentLocation:t=0,expectedLocation:s=0,distance:r=v.distance,ignoreLocation:n=v.ignoreLocation}={}){const l=e/i.length;if(n)return l;const o=Math.abs(s-t);return r?l+o/r:o?1:l}function oi(i=[],e=v.minMatchCharLength){let t=[],s=-1,r=-1,n=0;for(let l=i.length;n<l;n+=1){let o=i[n];o&&s===-1?s=n:!o&&s!==-1&&(r=n-1,r-s+1>=e&&t.push([s,r]),s=-1)}return i[n-1]&&n-s>=e&&t.push([s,n-1]),t}const H=32;function ai(i,e,t,{location:s=v.location,distance:r=v.distance,threshold:n=v.threshold,findAllMatches:l=v.findAllMatches,minMatchCharLength:o=v.minMatchCharLength,includeMatches:a=v.includeMatches,ignoreLocation:h=v.ignoreLocation}={}){if(e.length>H)throw new Error(qt(H));const c=e.length,u=i.length,p=Math.max(0,Math.min(s,u));let m=n,d=p;const f=o>1||a,b=f?Array(u):[];let g;for(;(g=i.indexOf(e,d))>-1;){let O=Z(e,{currentLocation:g,expectedLocation:p,distance:r,ignoreLocation:h});if(m=Math.min(O,m),d=g+c,f){let P=0;for(;P<c;)b[g+P]=1,P+=1}}d=-1;let C=[],S=1,V=c+u;const Ze=1<<c-1;for(let O=0;O<c;O+=1){let P=0,F=V;for(;P<F;)Z(e,{errors:O,currentLocation:p+F,expectedLocation:p,distance:r,ignoreLocation:h})<=m?P=F:V=F,F=Math.floor((V-P)/2+P);V=F;let ye=Math.max(1,p-F+1),ne=l?u:Math.min(p+F,u)+c,B=Array(ne+2);B[ne+1]=(1<<O)-1;for(let T=ne;T>=ye;T-=1){let J=T-1,Ee=t[i.charAt(J)];if(f&&(b[J]=+!!Ee),B[T]=(B[T+1]<<1|1)&Ee,O&&(B[T]|=(C[T+1]|C[T])<<1|1|C[T+1]),B[T]&Ze&&(S=Z(e,{errors:O,currentLocation:J,expectedLocation:p,distance:r,ignoreLocation:h}),S<=m)){if(m=S,d=J,d<=p)break;ye=Math.max(1,2*p-d)}}if(Z(e,{errors:O+1,currentLocation:p,expectedLocation:p,distance:r,ignoreLocation:h})>m)break;C=B}const re={isMatch:d>=0,score:Math.max(.001,S)};if(f){const O=oi(b,o);O.length?a&&(re.indices=O):re.isMatch=!1}return re}function ci(i){let e={};for(let t=0,s=i.length;t<s;t+=1){const r=i.charAt(t);e[r]=(e[r]||0)|1<<s-t-1}return e}class qe{constructor(e,{location:t=v.location,threshold:s=v.threshold,distance:r=v.distance,includeMatches:n=v.includeMatches,findAllMatches:l=v.findAllMatches,minMatchCharLength:o=v.minMatchCharLength,isCaseSensitive:a=v.isCaseSensitive,ignoreLocation:h=v.ignoreLocation}={}){if(this.options={location:t,threshold:s,distance:r,includeMatches:n,findAllMatches:l,minMatchCharLength:o,isCaseSensitive:a,ignoreLocation:h},this.pattern=a?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const c=(p,m)=>{this.chunks.push({pattern:p,alphabet:ci(p),startIndex:m})},u=this.pattern.length;if(u>H){let p=0;const m=u%H,d=u-m;for(;p<d;)c(this.pattern.substr(p,H),p),p+=H;if(m){const f=u-H;c(this.pattern.substr(f),f)}}else c(this.pattern,0)}searchIn(e){const{isCaseSensitive:t,includeMatches:s}=this.options;if(t||(e=e.toLowerCase()),this.pattern===e){let d={isMatch:!0,score:0};return s&&(d.indices=[[0,e.length-1]]),d}const{location:r,distance:n,threshold:l,findAllMatches:o,minMatchCharLength:a,ignoreLocation:h}=this.options;let c=[],u=0,p=!1;this.chunks.forEach(({pattern:d,alphabet:f,startIndex:b})=>{const{isMatch:g,score:C,indices:S}=ai(e,d,f,{location:r+b,distance:n,threshold:l,findAllMatches:o,minMatchCharLength:a,includeMatches:s,ignoreLocation:h});g&&(p=!0),u+=C,g&&S&&(c=[...c,...S])});let m={isMatch:p,score:p?u/this.chunks.length:1};return p&&s&&(m.indices=c),m}}class K{constructor(e){this.pattern=e}static isMultiMatch(e){return Ne(e,this.multiRegex)}static isSingleMatch(e){return Ne(e,this.singleRegex)}search(){}}function Ne(i,e){const t=i.match(e);return t?t[1]:null}class hi extends K{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const t=e===this.pattern;return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class ui extends K{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const s=e.indexOf(this.pattern)===-1;return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class di extends K{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const t=e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class pi extends K{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const t=!e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}class fi extends K{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const t=e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class mi extends K{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const t=!e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}class Je extends K{constructor(e,{location:t=v.location,threshold:s=v.threshold,distance:r=v.distance,includeMatches:n=v.includeMatches,findAllMatches:l=v.findAllMatches,minMatchCharLength:o=v.minMatchCharLength,isCaseSensitive:a=v.isCaseSensitive,ignoreLocation:h=v.ignoreLocation}={}){super(e),this._bitapSearch=new qe(e,{location:t,threshold:s,distance:r,includeMatches:n,findAllMatches:l,minMatchCharLength:o,isCaseSensitive:a,ignoreLocation:h})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Xe extends K{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let t=0,s;const r=[],n=this.pattern.length;for(;(s=e.indexOf(this.pattern,t))>-1;)t=s+n,r.push([s,t-1]);const l=!!r.length;return{isMatch:l,score:l?0:1,indices:r}}}const de=[hi,Xe,di,pi,mi,fi,ui,Je],Pe=de.length,vi=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,_i="|";function gi(i,e={}){return i.split(_i).map(t=>{let s=t.trim().split(vi).filter(n=>n&&!!n.trim()),r=[];for(let n=0,l=s.length;n<l;n+=1){const o=s[n];let a=!1,h=-1;for(;!a&&++h<Pe;){const c=de[h];let u=c.isMultiMatch(o);u&&(r.push(new c(u,e)),a=!0)}if(!a)for(h=-1;++h<Pe;){const c=de[h];let u=c.isSingleMatch(o);if(u){r.push(new c(u,e));break}}}return r})}const bi=new Set([Je.type,Xe.type]);class yi{constructor(e,{isCaseSensitive:t=v.isCaseSensitive,includeMatches:s=v.includeMatches,minMatchCharLength:r=v.minMatchCharLength,ignoreLocation:n=v.ignoreLocation,findAllMatches:l=v.findAllMatches,location:o=v.location,threshold:a=v.threshold,distance:h=v.distance}={}){this.query=null,this.options={isCaseSensitive:t,includeMatches:s,minMatchCharLength:r,findAllMatches:l,ignoreLocation:n,location:o,threshold:a,distance:h},this.pattern=t?e:e.toLowerCase(),this.query=gi(this.pattern,this.options)}static condition(e,t){return t.useExtendedSearch}searchIn(e){const t=this.query;if(!t)return{isMatch:!1,score:1};const{includeMatches:s,isCaseSensitive:r}=this.options;e=r?e:e.toLowerCase();let n=0,l=[],o=0;for(let a=0,h=t.length;a<h;a+=1){const c=t[a];l.length=0,n=0;for(let u=0,p=c.length;u<p;u+=1){const m=c[u],{isMatch:d,indices:f,score:b}=m.search(e);if(d){if(n+=1,o+=b,s){const g=m.constructor.type;bi.has(g)?l=[...l,...f]:l.push(f)}}else{o=0,n=0,l.length=0;break}}if(n){let u={isMatch:!0,score:o/n};return s&&(u.indices=l),u}}return{isMatch:!1,score:1}}}const pe=[];function Ei(...i){pe.push(...i)}function fe(i,e){for(let t=0,s=pe.length;t<s;t+=1){let r=pe[t];if(r.condition(i,e))return new r(i,e)}return new qe(i,e)}const ee={AND:"$and",OR:"$or"},me={PATH:"$path",PATTERN:"$val"},ve=i=>!!(i[ee.AND]||i[ee.OR]),wi=i=>!!i[me.PATH],Ci=i=>!N(i)&&Ue(i)&&!ve(i),Fe=i=>({[ee.AND]:Object.keys(i).map(e=>({[e]:i[e]}))});function Qe(i,e,{auto:t=!0}={}){const s=r=>{let n=Object.keys(r);const l=wi(r);if(!l&&n.length>1&&!ve(r))return s(Fe(r));if(Ci(r)){const a=l?r[me.PATH]:n[0],h=l?r[me.PATTERN]:r[a];if(!M(h))throw new Error(zt(a));const c={keyId:ue(a),pattern:h};return t&&(c.searcher=fe(h,e)),c}let o={children:[],operator:n[0]};return n.forEach(a=>{const h=r[a];N(h)&&h.forEach(c=>{o.children.push(s(c))})}),o};return ve(i)||(i=Fe(i)),s(i)}function Si(i,{ignoreFieldNorm:e=v.ignoreFieldNorm}){i.forEach(t=>{let s=1;t.matches.forEach(({key:r,norm:n,score:l})=>{const o=r?r.weight:null;s*=Math.pow(l===0&&o?Number.EPSILON:l,(o||1)*(e?1:n))}),t.score=s})}function xi(i,e){const t=i.matches;e.matches=[],A(t)&&t.forEach(s=>{if(!A(s.indices)||!s.indices.length)return;const{indices:r,value:n}=s;let l={indices:r,value:n};s.key&&(l.key=s.key.src),s.idx>-1&&(l.refIndex=s.idx),e.matches.push(l)})}function Ii(i,e){e.score=i.score}function Ai(i,e,{includeMatches:t=v.includeMatches,includeScore:s=v.includeScore}={}){const r=[];return t&&r.push(xi),s&&r.push(Ii),i.map(n=>{const{idx:l}=n,o={item:e[l],refIndex:l};return r.length&&r.forEach(a=>{a(n,o)}),o})}class U{constructor(e,t={},s){this.options=G(G({},v),t),this.options.useExtendedSearch,this._keyStore=new Qt(this.options.keys),this.setCollection(e,s)}setCollection(e,t){if(this._docs=e,t&&!(t instanceof be))throw new Error(Yt);this._myIndex=t||ze(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){A(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const t=[];for(let s=0,r=this._docs.length;s<r;s+=1){const n=this._docs[s];e(n,s)&&(this.removeAt(s),s-=1,r-=1,t.push(n))}return t}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:t=-1}={}){const{includeMatches:s,includeScore:r,shouldSort:n,sortFn:l,ignoreFieldNorm:o}=this.options;let a=M(e)?M(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return Si(a,{ignoreFieldNorm:o}),n&&a.sort(l),Ge(t)&&t>-1&&(a=a.slice(0,t)),Ai(a,this._docs,{includeMatches:s,includeScore:r})}_searchStringList(e){const t=fe(e,this.options),{records:s}=this._myIndex,r=[];return s.forEach(({v:n,i:l,n:o})=>{if(!A(n))return;const{isMatch:a,score:h,indices:c}=t.searchIn(n);a&&r.push({item:n,idx:l,matches:[{score:h,value:n,norm:o,indices:c}]})}),r}_searchLogical(e){const t=Qe(e,this.options),s=(o,a,h)=>{if(!o.children){const{keyId:u,searcher:p}=o,m=this._findMatches({key:this._keyStore.get(u),value:this._myIndex.getValueForItemAtKeyId(a,u),searcher:p});return m&&m.length?[{idx:h,item:a,matches:m}]:[]}const c=[];for(let u=0,p=o.children.length;u<p;u+=1){const m=o.children[u],d=s(m,a,h);if(d.length)c.push(...d);else if(o.operator===ee.AND)return[]}return c},r=this._myIndex.records,n={},l=[];return r.forEach(({$:o,i:a})=>{if(A(o)){let h=s(t,o,a);h.length&&(n[a]||(n[a]={idx:a,item:o,matches:[]},l.push(n[a])),h.forEach(({matches:c})=>{n[a].matches.push(...c)}))}}),l}_searchObjectList(e){const t=fe(e,this.options),{keys:s,records:r}=this._myIndex,n=[];return r.forEach(({$:l,i:o})=>{if(!A(l))return;let a=[];s.forEach((h,c)=>{a.push(...this._findMatches({key:h,value:l[c],searcher:t}))}),a.length&&n.push({idx:o,item:l,matches:a})}),n}_findMatches({key:e,value:t,searcher:s}){if(!A(t))return[];let r=[];if(N(t))t.forEach(({v:n,i:l,n:o})=>{if(!A(n))return;const{isMatch:a,score:h,indices:c}=s.searchIn(n);a&&r.push({score:h,key:e,value:n,idx:l,norm:o,indices:c})});else{const{v:n,n:l}=t,{isMatch:o,score:a,indices:h}=s.searchIn(n);o&&r.push({score:a,key:e,value:n,norm:l,indices:h})}return r}}U.version="7.0.0";U.createIndex=ze;U.parseIndex=li;U.config=v;U.parseQuery=Qe;Ei(yi);var Oi=(function(){function i(e){this._haystack=[],this._fuseOptions=I(I({},e.fuseOptions),{keys:ht([],e.searchFields),includeMatches:!0})}return i.prototype.index=function(e){this._haystack=e,this._fuse&&this._fuse.setCollection(e)},i.prototype.reset=function(){this._haystack=[],this._fuse=void 0},i.prototype.isEmptyIndex=function(){return!this._haystack.length},i.prototype.search=function(e){this._fuse||(this._fuse=new U(this._haystack,this._fuseOptions));var t=this._fuse.search(e);return t.map(function(s,r){return{item:s.item,score:s.score||0,rank:r+1}})},i})();function Ti(i){return new Oi(i)}var Li=function(i){for(var e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0},oe=function(i,e,t){var s=i.dataset,r=e.customProperties,n=e.labelClass,l=e.labelDescription;n&&(s.labelClass=se(n).join(" ")),l&&(s.labelDescription=l),t&&r&&(typeof r=="string"?s.customProperties=r:typeof r=="object"&&!Li(r)&&(s.customProperties=JSON.stringify(r)))},Re=function(i,e,t){var s=e&&i.querySelector("label[for='".concat(e,"']")),r=s&&s.innerText;r&&t.setAttribute("aria-label",r)},ki={containerOuter:function(i,e,t,s,r,n,l){var o=i.classNames.containerOuter,a=document.createElement("div");return _(a,o),a.dataset.type=n,e&&(a.dir=e),s&&(a.tabIndex=0),t&&(a.setAttribute("role",r?"combobox":"listbox"),r?a.setAttribute("aria-autocomplete","list"):l||Re(this._docRoot,this.passedElement.element.id,a),a.setAttribute("aria-haspopup","true"),a.setAttribute("aria-expanded","false")),l&&a.setAttribute("aria-labelledby",l),a},containerInner:function(i){var e=i.classNames.containerInner,t=document.createElement("div");return _(t,e),t},itemList:function(i,e){var t=i.searchEnabled,s=i.classNames,r=s.list,n=s.listSingle,l=s.listItems,o=document.createElement("div");return _(o,r),_(o,e?n:l),this._isSelectElement&&t&&o.setAttribute("role","listbox"),o},placeholder:function(i,e){var t=i.allowHTML,s=i.classNames.placeholder,r=document.createElement("div");return _(r,s),j(r,t,e),r},item:function(i,e,t){var s=i.allowHTML,r=i.removeItemButtonAlignLeft,n=i.removeItemIconText,l=i.removeItemLabelText,o=i.classNames,a=o.item,h=o.button,c=o.highlightedState,u=o.itemSelectable,p=o.placeholder,m=$(e.value),d=document.createElement("div");if(_(d,a),e.labelClass){var f=document.createElement("span");j(f,s,e.label),_(f,e.labelClass),d.appendChild(f)}else j(d,s,e.label);if(d.dataset.item="",d.dataset.id=e.id,d.dataset.value=m,oe(d,e,!0),(e.disabled||this.containerOuter.isDisabled)&&d.setAttribute("aria-disabled","true"),this._isSelectElement&&(d.setAttribute("aria-selected","true"),d.setAttribute("role","option")),e.placeholder&&(_(d,p),d.dataset.placeholder=""),_(d,e.highlighted?c:u),t){e.disabled&&D(d,u),d.dataset.deletable="";var b=document.createElement("button");b.type="button",_(b,h),j(b,!0,q(n,e.value));var g=q(l,e.value);g&&b.setAttribute("aria-label",g),b.dataset.button="",r?d.insertAdjacentElement("afterbegin",b):d.appendChild(b)}return d},choiceList:function(i,e){var t=i.classNames.list,s=document.createElement("div");return _(s,t),e||s.setAttribute("aria-multiselectable","true"),s.setAttribute("role","listbox"),s},choiceGroup:function(i,e){var t=i.allowHTML,s=i.classNames,r=s.group,n=s.groupHeading,l=s.itemDisabled,o=e.id,a=e.label,h=e.disabled,c=$(a),u=document.createElement("div");_(u,r),h&&_(u,l),u.setAttribute("role","group"),u.dataset.group="",u.dataset.id=o,u.dataset.value=c,h&&u.setAttribute("aria-disabled","true");var p=document.createElement("div");return _(p,n),j(p,t,a||""),u.appendChild(p),u},choice:function(i,e,t,s){var r=i.allowHTML,n=i.classNames,l=n.item,o=n.itemChoice,a=n.itemSelectable,h=n.selectedState,c=n.itemDisabled,u=n.description,p=n.placeholder,m=e.label,d=$(e.value),f=document.createElement("div");f.id=e.elementId,_(f,l),_(f,o),s&&typeof m=="string"&&(m=ge(r,m),m+=" (".concat(s,")"),m={trusted:m});var b=f;if(e.labelClass){var g=document.createElement("span");j(g,r,m),_(g,e.labelClass),b=g,f.appendChild(g)}else j(f,r,m);if(e.labelDescription){var C="".concat(e.elementId,"-description");b.setAttribute("aria-describedby",C);var S=document.createElement("span");j(S,r,e.labelDescription),S.id=C,_(S,u),f.appendChild(S)}return e.selected&&_(f,h),e.placeholder&&_(f,p),f.setAttribute("role",e.group?"treeitem":"option"),f.dataset.choice="",f.dataset.id=e.id,f.dataset.value=d,t&&(f.dataset.selectText=t),e.group&&(f.dataset.groupId="".concat(e.group.id)),oe(f,e,!1),e.disabled?(_(f,c),f.dataset.choiceDisabled="",f.setAttribute("aria-disabled","true")):(_(f,a),f.dataset.choiceSelectable=""),f},input:function(i,e){var t=i.classNames,s=t.input,r=t.inputCloned,n=i.labelId,l=document.createElement("input");return l.type="search",_(l,s),_(l,r),l.autocomplete="off",l.autocapitalize="off",l.spellcheck=!1,l.setAttribute("aria-autocomplete","list"),e?l.setAttribute("aria-label",e):n||Re(this._docRoot,this.passedElement.element.id,l),l},dropdown:function(i){var e=i.classNames,t=e.list,s=e.listDropdown,r=document.createElement("div");return _(r,t),_(r,s),r.setAttribute("aria-expanded","false"),r},notice:function(i,e,t){var s=i.classNames,r=s.item,n=s.itemChoice,l=s.addChoice,o=s.noResults,a=s.noChoices,h=s.notice;t===void 0&&(t=E.generic);var c=document.createElement("div");switch(j(c,!0,e),_(c,r),_(c,n),_(c,h),t){case E.addChoice:_(c,l);break;case E.noResults:_(c,o);break;case E.noChoices:_(c,a);break}return t===E.addChoice&&(c.dataset.choiceSelectable="",c.dataset.choice=""),c},option:function(i){var e=$(i.label),t=new Option(e,i.value,!1,i.selected);return oe(t,i,!0),t.disabled=i.disabled,i.selected&&t.setAttribute("selected",""),t}},Di="-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style,Mi={},ae=function(i){if(i)return i.dataset.id?parseInt(i.dataset.id,10):void 0},Y="[data-choice-selectable]",ce=(function(){function i(e,t){e===void 0&&(e="[data-choice]"),t===void 0&&(t={});var s=this;this.initialisedOK=void 0,this._hasNonChoicePlaceholder=!1,this._lastAddedChoiceId=0,this._lastAddedGroupId=0;var r=i.defaults;this.config=I(I(I({},r.allOptions),r.options),t),ut.forEach(function(g){s.config[g]=I(I(I({},r.allOptions[g]),r.options[g]),t[g])});var n=this.config;n.silent||this._validateConfig();var l=n.shadowRoot||document.documentElement;this._docRoot=l;var o=typeof e=="string"?l.querySelector(e):e;if(!o||typeof o!="object"||!(kt(o)||Be(o)))throw TypeError(!o&&typeof e=="string"?"Selector ".concat(e," failed to find an element"):"Expected one of the following types text|select-one|select-multiple");var a=o.type,h=a===R.Text;(h||n.maxItemCount!==1)&&(n.singleModeForMultiSelect=!1),n.singleModeForMultiSelect&&(a=R.SelectMultiple);var c=a===R.SelectOne,u=a===R.SelectMultiple,p=c||u;if(this._elementType=a,this._isTextElement=h,this._isSelectOneElement=c,this._isSelectMultipleElement=u,this._isSelectElement=c||u,this._canAddUserChoices=h&&n.addItems||p&&n.addChoices,typeof n.renderSelectedChoices!="boolean"&&(n.renderSelectedChoices=n.renderSelectedChoices==="always"||c),n.closeDropdownOnSelect==="auto"?n.closeDropdownOnSelect=h||c||n.singleModeForMultiSelect:n.closeDropdownOnSelect=z(n.closeDropdownOnSelect),n.placeholder&&(n.placeholderValue?this._hasNonChoicePlaceholder=!0:o.dataset.placeholder&&(this._hasNonChoicePlaceholder=!0,n.placeholderValue=o.dataset.placeholder)),t.addItemFilter&&typeof t.addItemFilter!="function"){var m=t.addItemFilter instanceof RegExp?t.addItemFilter:new RegExp(t.addItemFilter);n.addItemFilter=m.test.bind(m)}if(this._isTextElement)this.passedElement=new Lt({element:o,classNames:n.classNames});else{var d=o;this.passedElement=new jt({element:d,classNames:n.classNames,template:function(g){return s._templates.option(g)},extractPlaceholder:n.placeholder&&!this._hasNonChoicePlaceholder})}if(this.initialised=!1,this._store=new Kt(n),this._currentValue="",n.searchEnabled=!h&&n.searchEnabled||u,this._canSearch=n.searchEnabled,this._isScrollingOnIe=!1,this._highlightPosition=0,this._wasTap=!0,this._placeholderValue=this._generatePlaceholderValue(),this._baseId=_t(o,"choices-"),this._direction=o.dir,!this._direction){var f=window.getComputedStyle(o).direction,b=window.getComputedStyle(document.documentElement).direction;f!==b&&(this._direction=f)}if(this._idNames={itemChoice:"item-choice"},this._templates=r.templates,this._render=this._render.bind(this),this._onFocus=this._onFocus.bind(this),this._onBlur=this._onBlur.bind(this),this._onKeyUp=this._onKeyUp.bind(this),this._onKeyDown=this._onKeyDown.bind(this),this._onInput=this._onInput.bind(this),this._onClick=this._onClick.bind(this),this._onTouchMove=this._onTouchMove.bind(this),this._onTouchEnd=this._onTouchEnd.bind(this),this._onMouseDown=this._onMouseDown.bind(this),this._onMouseOver=this._onMouseOver.bind(this),this._onFormReset=this._onFormReset.bind(this),this._onSelectKey=this._onSelectKey.bind(this),this._onEnterKey=this._onEnterKey.bind(this),this._onEscapeKey=this._onEscapeKey.bind(this),this._onDirectionKey=this._onDirectionKey.bind(this),this._onDeleteKey=this._onDeleteKey.bind(this),this.passedElement.isActive){n.silent||console.warn("Trying to initialise Choices on element already initialised",{element:e}),this.initialised=!0,this.initialisedOK=!1;return}this.init(),this._initialItems=this._store.items.map(function(g){return g.value})}return Object.defineProperty(i,"defaults",{get:function(){return Object.preventExtensions({get options(){return Mi},get allOptions(){return Te},get templates(){return ki}})},enumerable:!1,configurable:!0}),i.prototype.init=function(){if(!(this.initialised||this.initialisedOK!==void 0)){this._searcher=Ti(this.config),this._loadChoices(),this._createTemplates(),this._createElements(),this._createStructure(),this._isTextElement&&!this.config.addItems||this.passedElement.element.hasAttribute("disabled")||this.passedElement.element.closest("fieldset:disabled")?this.disable():(this.enable(),this._addEventListeners()),this._initStore(),this.initialised=!0,this.initialisedOK=!0;var e=this.config.callbackOnInit;typeof e=="function"&&e.call(this)}},i.prototype.destroy=function(){this.initialised&&(this._removeEventListeners(),this.passedElement.reveal(),this.containerOuter.unwrap(this.passedElement.element),this._store._listeners=[],this.clearStore(!1),this._stopSearch(),this._templates=i.defaults.templates,this.initialised=!1,this.initialisedOK=void 0)},i.prototype.enable=function(){return this.passedElement.isDisabled&&this.passedElement.enable(),this.containerOuter.isDisabled&&(this._addEventListeners(),this.input.enable(),this.containerOuter.enable()),this},i.prototype.disable=function(){return this.passedElement.isDisabled||this.passedElement.disable(),this.containerOuter.isDisabled||(this._removeEventListeners(),this.input.disable(),this.containerOuter.disable()),this},i.prototype.highlightItem=function(e,t){if(t===void 0&&(t=!0),!e||!e.id)return this;var s=this._store.items.find(function(r){return r.id===e.id});return!s||s.highlighted?this:(this._store.dispatch(Q(s,!0)),t&&this.passedElement.triggerEvent(x.highlightItem,this._getChoiceForOutput(s)),this)},i.prototype.unhighlightItem=function(e,t){if(t===void 0&&(t=!0),!e||!e.id)return this;var s=this._store.items.find(function(r){return r.id===e.id});return!s||!s.highlighted?this:(this._store.dispatch(Q(s,!1)),t&&this.passedElement.triggerEvent(x.unhighlightItem,this._getChoiceForOutput(s)),this)},i.prototype.highlightAll=function(){var e=this;return this._store.withTxn(function(){e._store.items.forEach(function(t){t.highlighted||(e._store.dispatch(Q(t,!0)),e.passedElement.triggerEvent(x.highlightItem,e._getChoiceForOutput(t)))})}),this},i.prototype.unhighlightAll=function(){var e=this;return this._store.withTxn(function(){e._store.items.forEach(function(t){t.highlighted&&(e._store.dispatch(Q(t,!1)),e.passedElement.triggerEvent(x.highlightItem,e._getChoiceForOutput(t)))})}),this},i.prototype.removeActiveItemsByValue=function(e){var t=this;return this._store.withTxn(function(){t._store.items.filter(function(s){return s.value===e}).forEach(function(s){return t._removeItem(s)})}),this},i.prototype.removeActiveItems=function(e){var t=this;return this._store.withTxn(function(){t._store.items.filter(function(s){var r=s.id;return r!==e}).forEach(function(s){return t._removeItem(s)})}),this},i.prototype.removeHighlightedItems=function(e){var t=this;return e===void 0&&(e=!1),this._store.withTxn(function(){t._store.highlightedActiveItems.forEach(function(s){t._removeItem(s),e&&t._triggerChange(s.value)})}),this},i.prototype.showDropdown=function(e){var t=this;return this.dropdown.isActive?this:(e===void 0&&(e=!this._canSearch),requestAnimationFrame(function(){t.dropdown.show();var s=t.dropdown.element.getBoundingClientRect();t.containerOuter.open(s.bottom,s.height),e||t.input.focus(),t.passedElement.triggerEvent(x.showDropdown)}),this)},i.prototype.hideDropdown=function(e){var t=this;return this.dropdown.isActive?(requestAnimationFrame(function(){t.dropdown.hide(),t.containerOuter.close(),!e&&t._canSearch&&(t.input.removeActiveDescendant(),t.input.blur()),t.passedElement.triggerEvent(x.hideDropdown)}),this):this},i.prototype.getValue=function(e){var t=this,s=this._store.items.map(function(r){return e?r.value:t._getChoiceForOutput(r)});return this._isSelectOneElement||this.config.singleModeForMultiSelect?s[0]:s},i.prototype.setValue=function(e){var t=this;return this.initialisedOK?(this._store.withTxn(function(){e.forEach(function(s){s&&t._addChoice(k(s,!1))})}),this._searcher.reset(),this):(this._warnChoicesInitFailed("setValue"),this)},i.prototype.setChoiceByValue=function(e){var t=this;return this.initialisedOK?this._isTextElement?this:(this._store.withTxn(function(){var s=Array.isArray(e)?e:[e];s.forEach(function(r){return t._findAndSelectChoiceByValue(r)}),t.unhighlightAll()}),this._searcher.reset(),this):(this._warnChoicesInitFailed("setChoiceByValue"),this)},i.prototype.setChoices=function(e,t,s,r,n,l){var o=this;if(e===void 0&&(e=[]),t===void 0&&(t="value"),s===void 0&&(s="label"),r===void 0&&(r=!1),n===void 0&&(n=!0),l===void 0&&(l=!1),!this.initialisedOK)return this._warnChoicesInitFailed("setChoices"),this;if(!this._isSelectElement)throw new TypeError("setChoices can't be used with INPUT based Choices");if(typeof t!="string"||!t)throw new TypeError("value parameter must be a name of 'value' field in passed objects");if(typeof e=="function"){var a=e(this);if(typeof Promise=="function"&&a instanceof Promise)return new Promise(function(h){return requestAnimationFrame(h)}).then(function(){return o._handleLoadingState(!0)}).then(function(){return a}).then(function(h){return o.setChoices(h,t,s,r,n,l)}).catch(function(h){o.config.silent||console.error(h)}).then(function(){return o._handleLoadingState(!1)}).then(function(){return o});if(!Array.isArray(a))throw new TypeError(".setChoices first argument function must return either array of choices or Promise, got: ".concat(typeof a));return this.setChoices(a,t,s,!1)}if(!Array.isArray(e))throw new TypeError(".setChoices must be called either with array of choices with a function resulting into Promise of array of choices");return this.containerOuter.removeLoadingState(),this._store.withTxn(function(){n&&(o._isSearching=!1),r&&o.clearChoices(!0,l);var h=t==="value",c=s==="label";e.forEach(function(u){if("choices"in u){var p=u;c||(p=I(I({},p),{label:p[s]})),o._addGroup(k(p,!0))}else{var m=u;(!c||!h)&&(m=I(I({},m),{value:m[t],label:m[s]}));var d=k(m,!1);o._addChoice(d),d.placeholder&&!o._hasNonChoicePlaceholder&&(o._placeholderValue=Ve(d.label))}}),o.unhighlightAll()}),this._searcher.reset(),this},i.prototype.refresh=function(e,t,s){var r=this;return e===void 0&&(e=!1),t===void 0&&(t=!1),s===void 0&&(s=!1),this._isSelectElement?(this._store.withTxn(function(){var n=r.passedElement.optionsAsChoices(),l={};s||r._store.items.forEach(function(a){a.id&&a.active&&a.selected&&(l[a.value]=!0)}),r.clearStore(!1);var o=function(a){s?r._store.dispatch(Se(a)):l[a.value]&&(a.selected=!0)};n.forEach(function(a){if("choices"in a){a.choices.forEach(o);return}o(a)}),r._addPredefinedChoices(n,t,e),r._isSearching&&r._searchChoices(r.input.value)}),this):(this.config.silent||console.warn("refresh method can only be used on choices backed by a <select> element"),this)},i.prototype.removeChoice=function(e){var t=this._store.choices.find(function(s){return s.value===e});return t?(this._clearNotice(),this._store.dispatch(dt(t)),this._searcher.reset(),t.selected&&this.passedElement.triggerEvent(x.removeItem,this._getChoiceForOutput(t)),this):this},i.prototype.clearChoices=function(e,t){var s=this;return e===void 0&&(e=!0),t===void 0&&(t=!1),e&&(t?this.passedElement.element.replaceChildren(""):this.passedElement.element.querySelectorAll(":not([selected])").forEach(function(r){r.remove()})),this.itemList.element.replaceChildren(""),this.choiceList.element.replaceChildren(""),this._clearNotice(),this._store.withTxn(function(){var r=t?[]:s._store.items;s._store.reset(),r.forEach(function(n){s._store.dispatch(we(n)),s._store.dispatch(Ce(n))})}),this._searcher.reset(),this},i.prototype.clearStore=function(e){return e===void 0&&(e=!0),this.clearChoices(e,!0),this._stopSearch(),this._lastAddedChoiceId=0,this._lastAddedGroupId=0,this},i.prototype.clearInput=function(){var e=!this._isSelectOneElement;return this.input.clear(e),this._stopSearch(),this},i.prototype._validateConfig=function(){var e=this.config,t=St(e,Te);t.length&&console.warn("Unknown config option(s) passed",t.join(", ")),e.allowHTML&&e.allowHtmlUserInput&&(e.addItems&&console.warn("Warning: allowHTML/allowHtmlUserInput/addItems all being true is strongly not recommended and may lead to XSS attacks"),e.addChoices&&console.warn("Warning: allowHTML/allowHtmlUserInput/addChoices all being true is strongly not recommended and may lead to XSS attacks"))},i.prototype._render=function(e){e===void 0&&(e={choices:!0,groups:!0,items:!0}),!this._store.inTxn()&&(this._isSelectElement&&(e.choices||e.groups)&&this._renderChoices(),e.items&&this._renderItems())},i.prototype._renderChoices=function(){var e=this;if(this._canAddItems()){var t=this,s=t.config,r=t._isSearching,n=this._store,l=n.activeGroups,o=n.activeChoices,a=0;if(r&&s.searchResultLimit>0?a=s.searchResultLimit:s.renderChoiceLimit>0&&(a=s.renderChoiceLimit),this._isSelectElement){var h=o.filter(function(d){return!d.element});h.length&&this.passedElement.addOptions(h)}var c=document.createDocumentFragment(),u=function(d){return d.filter(function(f){return!f.placeholder&&(r?!!f.rank:s.renderSelectedChoices||!f.selected)})},p=!1,m=function(d,f,b){r?d.sort(wt):s.shouldSort&&d.sort(s.sorter);var g=d.length;g=!f&&a&&g>a?a:g,g--,d.every(function(C,S){var V=C.choiceEl||e._templates.choice(s,C,s.itemSelectText,b);return C.choiceEl=V,c.appendChild(V),(r||!C.selected)&&(p=!0),S<g})};o.length&&(s.resetScrollPosition&&requestAnimationFrame(function(){return e.choiceList.scrollToTop()}),!this._hasNonChoicePlaceholder&&!r&&this._isSelectOneElement&&m(o.filter(function(d){return d.placeholder&&!d.group}),!1,void 0),l.length&&!r?(s.shouldSort&&l.sort(s.sorter),m(o.filter(function(d){return!d.placeholder&&!d.group}),!1,void 0),l.forEach(function(d){var f=u(d.choices);if(f.length){if(d.label){var b=d.groupEl||e._templates.choiceGroup(e.config,d);d.groupEl=b,b.remove(),c.appendChild(b)}m(f,!0,s.appendGroupInSearch&&r?d.label:void 0)}})):m(u(o),!1,void 0)),!p&&(r||!c.children.length||!s.renderSelectedChoices)&&(this._notice||(this._notice={text:Ie(r?s.noResultsText:s.noChoicesText),type:r?E.noResults:E.noChoices}),c.replaceChildren("")),this._renderNotice(c),this.choiceList.element.replaceChildren(c),p&&this._highlightChoice()}},i.prototype._renderItems=function(){var e=this,t=this._store.items||[],s=this.itemList.element,r=this.config,n=document.createDocumentFragment(),l=function(u){return s.querySelector('[data-item][data-id="'.concat(u.id,'"]'))},o=function(u){var p=u.itemEl;p&&p.parentElement||(p=l(u)||e._templates.item(r,u,r.removeItemButton),u.itemEl=p,n.appendChild(p))};t.forEach(o);var a=!!n.childNodes.length;if(this._isSelectOneElement){var h=s.children.length;if(a||h>1){var c=s.querySelector(W(r.classNames.placeholder));c&&c.remove()}else!a&&!h&&this._placeholderValue&&(a=!0,o(k({selected:!0,value:"",label:this._placeholderValue,placeholder:!0},!1)))}a&&(s.append(n),r.shouldSortItems&&!this._isSelectOneElement&&(t.sort(r.sorter),t.forEach(function(u){var p=l(u);p&&(p.remove(),n.append(p))}),s.append(n))),this._isTextElement&&(this.passedElement.value=t.map(function(u){var p=u.value;return p}).join(r.delimiter))},i.prototype._displayNotice=function(e,t,s){s===void 0&&(s=!0);var r=this._notice;if(r&&(r.type===t&&r.text===e||r.type===E.addChoice&&(t===E.noResults||t===E.noChoices))){s&&this.showDropdown(!0);return}this._clearNotice(),this._notice=e?{text:e,type:t}:void 0,this._renderNotice(),s&&e&&this.showDropdown(!0)},i.prototype._clearNotice=function(){if(this._notice){var e=this.choiceList.element.querySelector(W(this.config.classNames.notice));e&&e.remove(),this._notice=void 0}},i.prototype._renderNotice=function(e){var t=this._notice;if(t){var s=this._templates.notice(this.config,t.text,t.type);e?e.append(s):this.choiceList.prepend(s)}},i.prototype._getChoiceForOutput=function(e,t){return{id:e.id,highlighted:e.highlighted,labelClass:e.labelClass,labelDescription:e.labelDescription,customProperties:e.customProperties,disabled:e.disabled,active:e.active,label:e.label,placeholder:e.placeholder,value:e.value,groupValue:e.group?e.group.label:void 0,element:e.element,keyCode:t}},i.prototype._triggerChange=function(e){e!=null&&this.passedElement.triggerEvent(x.change,{value:e})},i.prototype._handleButtonAction=function(e){var t=this,s=this._store.items;if(!(!s.length||!this.config.removeItems||!this.config.removeItemButton)){var r=e&&ae(e.parentElement),n=r&&s.find(function(l){return l.id===r});n&&this._store.withTxn(function(){if(t._removeItem(n),t._triggerChange(n.value),t._isSelectOneElement&&!t._hasNonChoicePlaceholder){var l=(t.config.shouldSort?t._store.choices.reverse():t._store.choices).find(function(o){return o.placeholder});l&&(t._addItem(l),t.unhighlightAll(),l.value&&t._triggerChange(l.value))}})}},i.prototype._handleItemAction=function(e,t){var s=this;t===void 0&&(t=!1);var r=this._store.items;if(!(!r.length||!this.config.removeItems||this._isSelectOneElement)){var n=ae(e);n&&(r.forEach(function(l){l.id===n&&!l.highlighted?s.highlightItem(l):!t&&l.highlighted&&s.unhighlightItem(l)}),this.input.focus())}},i.prototype._handleChoiceAction=function(e){var t=this,s=ae(e),r=s&&this._store.getChoiceById(s);if(!r||r.disabled)return!1;var n=this.dropdown.isActive;if(!r.selected){if(!this._canAddItems())return!0;this._store.withTxn(function(){t._addItem(r,!0,!0),t.clearInput(),t.unhighlightAll()}),this._triggerChange(r.value)}return n&&this.config.closeDropdownOnSelect&&(this.hideDropdown(!0),this.containerOuter.element.focus()),!0},i.prototype._handleBackspace=function(e){var t=this.config;if(!(!t.removeItems||!e.length)){var s=e[e.length-1],r=e.some(function(n){return n.highlighted});t.editItems&&!r&&s?(this.input.value=s.value,this.input.setWidth(),this._removeItem(s),this._triggerChange(s.value)):(r||this.highlightItem(s,!1),this.removeHighlightedItems(!0))}},i.prototype._loadChoices=function(){var e,t=this,s=this.config;if(this._isTextElement){if(this._presetChoices=s.items.map(function(l){return k(l,!1)}),this.passedElement.value){var r=this.passedElement.value.split(s.delimiter).map(function(l){return k(l,!1,t.config.allowHtmlUserInput)});this._presetChoices=this._presetChoices.concat(r)}this._presetChoices.forEach(function(l){l.selected=!0})}else if(this._isSelectElement){this._presetChoices=s.choices.map(function(l){return k(l,!0)});var n=this.passedElement.optionsAsChoices();n&&(e=this._presetChoices).push.apply(e,n)}},i.prototype._handleLoadingState=function(e){e===void 0&&(e=!0);var t=this.itemList.element;e?(this.disable(),this.containerOuter.addLoadingState(),this._isSelectOneElement?t.replaceChildren(this._templates.placeholder(this.config,this.config.loadingText)):this.input.placeholder=this.config.loadingText):(this.enable(),this.containerOuter.removeLoadingState(),this._isSelectOneElement?(t.replaceChildren(""),this._render()):this.input.placeholder=this._placeholderValue||"")},i.prototype._handleSearch=function(e){if(this.input.isFocussed)if(e!==null&&typeof e<"u"&&e.length>=this.config.searchFloor){var t=this.config.searchChoices?this._searchChoices(e):0;t!==null&&this.passedElement.triggerEvent(x.search,{value:e,resultCount:t})}else this._store.choices.some(function(s){return!s.active})&&this._stopSearch()},i.prototype._canAddItems=function(){var e=this.config,t=e.maxItemCount,s=e.maxItemText;return!e.singleModeForMultiSelect&&t>0&&t<=this._store.items.length?(this.choiceList.element.replaceChildren(""),this._notice=void 0,this._displayNotice(typeof s=="function"?s(t):s,E.addChoice),!1):(this._notice&&this._notice.type===E.addChoice&&this._clearNotice(),!0)},i.prototype._canCreateItem=function(e){var t=this.config,s=!0,r="";if(s&&typeof t.addItemFilter=="function"&&!t.addItemFilter(e)&&(s=!1,r=q(t.customAddItemText,e)),s){var n=this._store.choices.find(function(l){return t.valueComparer(l.value,e)});if(n){if(this._isSelectElement)return this._displayNotice("",E.addChoice),!1;t.duplicateItemsAllowed||(s=!1,r=q(t.uniqueItemText,e))}}return s&&(r=q(t.addItemText,e)),r&&this._displayNotice(r,E.addChoice),s},i.prototype._searchChoices=function(e){var t=e.trim().replace(/\s{2,}/," ");if(!t.length||t===this._currentValue)return null;var s=this._searcher;s.isEmptyIndex()&&s.index(this._store.searchableChoices);var r=s.search(t);this._currentValue=t,this._highlightPosition=0,this._isSearching=!0;var n=this._notice,l=n&&n.type;return l!==E.addChoice&&(r.length?this._clearNotice():this._displayNotice(Ie(this.config.noResultsText),E.noResults)),this._store.dispatch(pt(r)),r.length},i.prototype._stopSearch=function(){this._isSearching&&(this._currentValue="",this._isSearching=!1,this._clearNotice(),this._store.dispatch(ft(!0)),this.passedElement.triggerEvent(x.search,{value:"",resultCount:0}))},i.prototype._addEventListeners=function(){var e=this._docRoot,t=this.containerOuter.element,s=this.input.element;e.addEventListener("touchend",this._onTouchEnd,!0),t.addEventListener("keydown",this._onKeyDown,!0),t.addEventListener("mousedown",this._onMouseDown,!0),e.addEventListener("click",this._onClick,{passive:!0}),e.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.dropdown.element.addEventListener("mouseover",this._onMouseOver,{passive:!0}),this._isSelectOneElement&&(t.addEventListener("focus",this._onFocus,{passive:!0}),t.addEventListener("blur",this._onBlur,{passive:!0})),s.addEventListener("keyup",this._onKeyUp,{passive:!0}),s.addEventListener("input",this._onInput,{passive:!0}),s.addEventListener("focus",this._onFocus,{passive:!0}),s.addEventListener("blur",this._onBlur,{passive:!0}),s.form&&s.form.addEventListener("reset",this._onFormReset,{passive:!0}),this.input.addEventListeners()},i.prototype._removeEventListeners=function(){var e=this._docRoot,t=this.containerOuter.element,s=this.input.element;e.removeEventListener("touchend",this._onTouchEnd,!0),t.removeEventListener("keydown",this._onKeyDown,!0),t.removeEventListener("mousedown",this._onMouseDown,!0),e.removeEventListener("click",this._onClick),e.removeEventListener("touchmove",this._onTouchMove),this.dropdown.element.removeEventListener("mouseover",this._onMouseOver),this._isSelectOneElement&&(t.removeEventListener("focus",this._onFocus),t.removeEventListener("blur",this._onBlur)),s.removeEventListener("keyup",this._onKeyUp),s.removeEventListener("input",this._onInput),s.removeEventListener("focus",this._onFocus),s.removeEventListener("blur",this._onBlur),s.form&&s.form.removeEventListener("reset",this._onFormReset),this.input.removeEventListeners()},i.prototype._onKeyDown=function(e){var t=e.keyCode,s=this.dropdown.isActive,r=e.key.length===1||e.key.length===2&&e.key.charCodeAt(0)>=55296||e.key==="Unidentified";switch(!this._isTextElement&&!s&&t!==w.ESC_KEY&&t!==w.TAB_KEY&&t!==w.SHIFT_KEY&&(this.showDropdown(),!this.input.isFocussed&&r&&(this.input.value+=e.key,e.key===" "&&e.preventDefault())),t){case w.A_KEY:return this._onSelectKey(e,this.itemList.element.hasChildNodes());case w.ENTER_KEY:return this._onEnterKey(e,s);case w.ESC_KEY:return this._onEscapeKey(e,s);case w.UP_KEY:case w.PAGE_UP_KEY:case w.DOWN_KEY:case w.PAGE_DOWN_KEY:return this._onDirectionKey(e,s);case w.DELETE_KEY:case w.BACK_KEY:return this._onDeleteKey(e,this._store.items,this.input.isFocussed)}},i.prototype._onKeyUp=function(){this._canSearch=this.config.searchEnabled},i.prototype._onInput=function(){var e=this.input.value;if(!e){this._isTextElement?this.hideDropdown(!0):this._stopSearch();return}this._canAddItems()&&(this._canSearch&&this._handleSearch(e),this._canAddUserChoices&&(this._canCreateItem(e),this._isSelectElement&&(this._highlightPosition=0,this._highlightChoice())))},i.prototype._onSelectKey=function(e,t){if((e.ctrlKey||e.metaKey)&&t){this._canSearch=!1;var s=this.config.removeItems&&!this.input.value&&this.input.element===document.activeElement;s&&this.highlightAll()}},i.prototype._onEnterKey=function(e,t){var s=this,r=this.input.value,n=e.target;if(e.preventDefault(),n&&n.hasAttribute("data-button")){this._handleButtonAction(n);return}if(!t){(this._isSelectElement||this._notice)&&this.showDropdown();return}var l=this.dropdown.element.querySelector(W(this.config.classNames.highlightedState));if(!(l&&this._handleChoiceAction(l))){if(!n||!r){this.hideDropdown(!0);return}if(this._canAddItems()){var o=!1;this._store.withTxn(function(){if(o=s._findAndSelectChoiceByValue(r,!0),!o){if(!s._canAddUserChoices||!s._canCreateItem(r))return;s._addChoice(k(r,!1,s.config.allowHtmlUserInput),!0,!0),o=!0}s.clearInput(),s.unhighlightAll()}),o&&(this._triggerChange(r),this.config.closeDropdownOnSelect&&this.hideDropdown(!0))}}},i.prototype._onEscapeKey=function(e,t){t&&(e.stopPropagation(),this.hideDropdown(!0),this._stopSearch(),this.containerOuter.element.focus())},i.prototype._onDirectionKey=function(e,t){var s=e.keyCode;if(t||this._isSelectOneElement){this.showDropdown(),this._canSearch=!1;var r=s===w.DOWN_KEY||s===w.PAGE_DOWN_KEY?1:-1,n=e.metaKey||s===w.PAGE_DOWN_KEY||s===w.PAGE_UP_KEY,l=void 0;if(n)r>0?l=this.dropdown.element.querySelector("".concat(Y,":last-of-type")):l=this.dropdown.element.querySelector(Y);else{var o=this.dropdown.element.querySelector(W(this.config.classNames.highlightedState));o?l=gt(o,Y,r):l=this.dropdown.element.querySelector(Y)}l&&(bt(l,this.choiceList.element,r)||this.choiceList.scrollToChildElement(l,r),this._highlightChoice(l)),e.preventDefault()}},i.prototype._onDeleteKey=function(e,t,s){!this._isSelectOneElement&&!e.target.value&&s&&(this._handleBackspace(t),e.preventDefault())},i.prototype._onTouchMove=function(){this._wasTap&&(this._wasTap=!1)},i.prototype._onTouchEnd=function(e){var t=(e||e.touches[0]).target,s=this._wasTap&&this.containerOuter.element.contains(t);if(s){var r=t===this.containerOuter.element||t===this.containerInner.element;r&&(this._isTextElement?this.input.focus():this._isSelectMultipleElement&&this.showDropdown()),e.stopPropagation()}this._wasTap=!0},i.prototype._onMouseDown=function(e){var t=e.target;if(t instanceof HTMLElement){if(Di&&this.choiceList.element.contains(t)){var s=this.choiceList.element.firstElementChild;this._isScrollingOnIe=this._direction==="ltr"?e.offsetX>=s.offsetWidth:e.offsetX<s.offsetLeft}if(t!==this.input.element){var r=t.closest("[data-button],[data-item],[data-choice]");r instanceof HTMLElement&&("button"in r.dataset?this._handleButtonAction(r):"item"in r.dataset?this._handleItemAction(r,e.shiftKey):"choice"in r.dataset&&this._handleChoiceAction(r)),e.preventDefault()}}},i.prototype._onMouseOver=function(e){var t=e.target;t instanceof HTMLElement&&"choice"in t.dataset&&this._highlightChoice(t)},i.prototype._onClick=function(e){var t=e.target,s=this.containerOuter,r=s.element.contains(t);r?!this.dropdown.isActive&&!s.isDisabled?this._isTextElement?document.activeElement!==this.input.element&&this.input.focus():(this.showDropdown(),s.element.focus()):this._isSelectOneElement&&t!==this.input.element&&!this.dropdown.element.contains(t)&&this.hideDropdown():(s.removeFocusState(),this.hideDropdown(!0),this.unhighlightAll())},i.prototype._onFocus=function(e){var t=e.target,s=this.containerOuter,r=t&&s.element.contains(t);if(r){var n=t===this.input.element;this._isTextElement?n&&s.addFocusState():this._isSelectMultipleElement?n&&(this.showDropdown(!0),s.addFocusState()):(s.addFocusState(),n&&this.showDropdown(!0))}},i.prototype._onBlur=function(e){var t=e.target,s=this.containerOuter,r=t&&s.element.contains(t);r&&!this._isScrollingOnIe?t===this.input.element?(s.removeFocusState(),this.hideDropdown(!0),(this._isTextElement||this._isSelectMultipleElement)&&this.unhighlightAll()):t===this.containerOuter.element&&(s.removeFocusState(),this._canSearch||this.hideDropdown(!0)):(this._isScrollingOnIe=!1,this.input.element.focus())},i.prototype._onFormReset=function(){var e=this;this._store.withTxn(function(){e.clearInput(),e.hideDropdown(),e.refresh(!1,!1,!0),e._initialItems.length&&e.setChoiceByValue(e._initialItems)})},i.prototype._highlightChoice=function(e){e===void 0&&(e=null);var t=Array.from(this.dropdown.element.querySelectorAll(Y));if(t.length){var s=e,r=this.config.classNames.highlightedState,n=Array.from(this.dropdown.element.querySelectorAll(W(r)));n.forEach(function(l){D(l,r),l.setAttribute("aria-selected","false")}),s?this._highlightPosition=t.indexOf(s):(t.length>this._highlightPosition?s=t[this._highlightPosition]:s=t[t.length-1],s||(s=t[0])),_(s,r),s.setAttribute("aria-selected","true"),this.passedElement.triggerEvent(x.highlightChoice,{el:s}),this.dropdown.isActive&&(this.input.setActiveDescendant(s.id),this.containerOuter.setActiveDescendant(s.id))}},i.prototype._addItem=function(e,t,s){if(t===void 0&&(t=!0),s===void 0&&(s=!1),!e.id)throw new TypeError("item.id must be set before _addItem is called for a choice/item");(this.config.singleModeForMultiSelect||this._isSelectOneElement)&&this.removeActiveItems(e.id),this._store.dispatch(Ce(e)),t&&(this.passedElement.triggerEvent(x.addItem,this._getChoiceForOutput(e)),s&&this.passedElement.triggerEvent(x.choice,this._getChoiceForOutput(e)))},i.prototype._removeItem=function(e){if(e.id){this._store.dispatch(Se(e));var t=this._notice;t&&t.type===E.noChoices&&this._clearNotice(),this.passedElement.triggerEvent(x.removeItem,this._getChoiceForOutput(e))}},i.prototype._addChoice=function(e,t,s){if(t===void 0&&(t=!0),s===void 0&&(s=!1),e.id)throw new TypeError("Can not re-add a choice which has already been added");var r=this.config;if(!(!r.duplicateItemsAllowed&&this._store.choices.find(function(o){return r.valueComparer(o.value,e.value)}))){this._lastAddedChoiceId++,e.id=this._lastAddedChoiceId,e.elementId="".concat(this._baseId,"-").concat(this._idNames.itemChoice,"-").concat(e.id);var n=r.prependValue,l=r.appendValue;n&&(e.value=n+e.value),l&&(e.value+=l.toString()),(n||l)&&e.element&&(e.element.value=e.value),this._clearNotice(),this._store.dispatch(we(e)),e.selected&&this._addItem(e,t,s)}},i.prototype._addGroup=function(e,t){var s=this;if(t===void 0&&(t=!0),e.id)throw new TypeError("Can not re-add a group which has already been added");this._store.dispatch(mt(e)),e.choices&&(this._lastAddedGroupId++,e.id=this._lastAddedGroupId,e.choices.forEach(function(r){r.group=e,e.disabled&&(r.disabled=!0),s._addChoice(r,t)}))},i.prototype._createTemplates=function(){var e=this,t=this.config.callbackOnCreateTemplates,s={};typeof t=="function"&&(s=t.call(this,yt,ge,se));var r={};Object.keys(this._templates).forEach(function(n){n in s?r[n]=s[n].bind(e):r[n]=e._templates[n].bind(e)}),this._templates=r},i.prototype._createElements=function(){var e=this._templates,t=this,s=t.config,r=t._isSelectOneElement,n=s.position,l=s.classNames,o=this._elementType;this.containerOuter=new Ae({element:e.containerOuter(s,this._direction,this._isSelectElement,r,s.searchEnabled,o,s.labelId),classNames:l,type:o,position:n}),this.containerInner=new Ae({element:e.containerInner(s),classNames:l,type:o,position:n}),this.input=new Ot({element:e.input(s,this._placeholderValue),classNames:l,type:o,preventPaste:!s.paste}),this.choiceList=new Oe({element:e.choiceList(s,r)}),this.itemList=new Oe({element:e.itemList(s,r)}),this.dropdown=new At({element:e.dropdown(s),classNames:l,type:o})},i.prototype._createStructure=function(){var e=this,t=e.containerInner,s=e.containerOuter,r=e.passedElement,n=this.dropdown.element;r.conceal(),t.wrap(r.element),s.wrap(t.element),this._isSelectOneElement?this.input.placeholder=this.config.searchPlaceholderValue||"":(this._placeholderValue&&(this.input.placeholder=this._placeholderValue),this.input.setWidth()),s.element.appendChild(t.element),s.element.appendChild(n),t.element.appendChild(this.itemList.element),n.appendChild(this.choiceList.element),this._isSelectOneElement?this.config.searchEnabled&&n.insertBefore(this.input.element,n.firstChild):t.element.appendChild(this.input.element),this._highlightPosition=0,this._isSearching=!1},i.prototype._initStore=function(){var e=this;this._store.subscribe(this._render).withTxn(function(){e._addPredefinedChoices(e._presetChoices,e._isSelectOneElement&&!e._hasNonChoicePlaceholder,!1)}),(!this._store.choices.length||this._isSelectOneElement&&this._hasNonChoicePlaceholder)&&this._render()},i.prototype._addPredefinedChoices=function(e,t,s){var r=this;if(t===void 0&&(t=!1),s===void 0&&(s=!0),t){var n=e.findIndex(function(l){return l.selected})===-1;n&&e.some(function(l){return l.disabled||"choices"in l?!1:(l.selected=!0,!0)})}e.forEach(function(l){"choices"in l?r._isSelectElement&&r._addGroup(l,s):r._addChoice(l,s)})},i.prototype._findAndSelectChoiceByValue=function(e,t){var s=this;t===void 0&&(t=!1);var r=this._store.choices.find(function(n){return s.config.valueComparer(n.value,e)});return r&&!r.disabled&&!r.selected?(this._addItem(r,!0,t),!0):!1},i.prototype._generatePlaceholderValue=function(){var e=this.config;if(!e.placeholder)return null;if(this._hasNonChoicePlaceholder)return e.placeholderValue;if(this._isSelectElement){var t=this.passedElement.placeholderOption;return t?t.text:null}return null},i.prototype._warnChoicesInitFailed=function(e){if(!this.config.silent)if(this.initialised){if(!this.initialisedOK)throw new TypeError("".concat(e," called for an element which has multiple instances of Choices initialised on it"))}else throw new TypeError("".concat(e," called on a non-initialised instance of Choices"))},i.version="11.1.0",i})();const ji=_e`
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
        border: 0.1rem solid #687483;
        transition: color 0.2s, background-color 0.2s, box-shadow 0.2s;
        padding: 0 1.4rem;
        line-height: calc(2.4rem - 0.2rem);
        min-width: 0;
    }

    .vl-pill__text {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
    }

    .vl-pill__close {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: #05c;
        width: 2.4rem;
        height: 2.4rem;
        border: 0.1rem solid #687483;
        text-decoration: none;
        margin-left: 1.4rem;
        padding: 0;
        border-radius: 0 0.3rem 0.3rem 0;
        transition: color 0.2s, background-color 0.2s, box-shadow 0.2s;
        margin-top: -0.1rem;
        margin-right: -0.1rem;
        margin-bottom: -0.1rem;
        min-width: 2.4rem;
    }

    .vl-pill__close:hover:not([disabled]) {
        color: #003bb0;
        box-shadow: inset 0 0 0 0.1rem #05c;
        border: #05c 0.1rem solid;
        background-color: #e6eefa;
    }

    .vl-pill__close:focus {
        outline: transparent solid 0.2rem;
        border: #05c 0.1rem solid;
        box-shadow: 0 0 0 2px #fff, 0 0 0 5px rgba(0, 85, 204, 0.65), inset 0 0 0 0.1rem #05c;
    }

    [dir='rtl'] .vl-pill__close {
        border-left: 0;
        border-right: #687483 0.1rem solid;
    }

    .is-disabled .vl-pill__close,
    .vl-pill__close[disabled] {
        color: #687483;
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

    .vl-pill--success {
        background-color: #e6f5ed;
        border-color: #009e47;
    }

    .vl-pill--warning {
        background-color: #fff6e7;
        border-color: #ffa10a;
    }

    .vl-pill--error {
        background-color: #fbebec;
        border-color: #d2373c;
    }

    .vl-pill--disabled {
        background-color: #cbd2d9;
        color: #687483;
    }

    .vl-pill--disabled:hover,
    .vl-pill--disabled:active {
        background-color: #cbd2d9;
        color: #687483;
    }

    .vl-pill--closable {
        padding-right: 0;
    }

    .vl-pill--clickable:not(.vl-pill--disabled) {
        color: #05c;
    }

    .vl-pill--clickable:not(.vl-pill--disabled):hover {
        background-color: #e6eefa;
        color: #003bb0;
        border-color: #5991de;
        box-shadow: inset 0 0 0 0.1rem #05c;
    }

    .vl-pill--clickable:not(.vl-pill--disabled):focus {
        outline: transparent solid 0.2rem;
        border-color: #5991de;
        box-shadow: 0 0 0 2px #fff, 0 0 0 5px rgba(0, 85, 204, 0.65), inset 0 0 0 0.1rem #05c;
    }

    .vl-multiselect .multiselect__loading-enter-active,
    .vl-multiselect .multiselect__loading-leave-active {
        transition: opacity 0.4s ease-in-out;
        opacity: 1;
    }

    .vl-multiselect .multiselect__loading-enter,
    .vl-multiselect .multiselect__loading-leave-active {
        opacity: 0;
    }

    .vl-multiselect .multiselect,
    .vl-multiselect .multiselect__input,
    .vl-multiselect .multiselect__single {
        font-size: 1.6rem;
        touch-action: manipulation;
    }

    .vl-multiselect .multiselect--disabled {
        opacity: 0.6;
    }

    .vl-multiselect .multiselect--active {
        z-index: var(--vl-z-layer--multiselect);
    }

    .vl-multiselect .multiselect--active .multiselect__input {
        position: relative !important;
        border: 0.1rem solid #687483;
    }

    .vl-multiselect .multiselect--active .multiselect__tags {
        border-radius: 0.3rem 0.3rem 0 0;
        border-bottom: 1px solid #8695a8;
    }

    .vl-multiselect .multiselect {
        display: block;
        position: relative;
        max-width: 100%;
        text-decoration: none;
        color: #333332;
        font-family: 'Flanders Art Sans', sans-serif;
        font-size: 1.6rem;
        -webkit-appearance: none;
    }

    .vl-multiselect .multiselect:focus::-ms-value {
        background: inherit;
        color: inherit;
    }

    .vl-multiselect .multiselect--active:not(.multiselect--above) .multiselect__current,
    .vl-multiselect .multiselect--active:not(.multiselect--above) .multiselect__tags {
        padding: 6px 45px 0 10px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }

    .vl-multiselect .multiselect--above--active .multiselect__current,
    .vl-multiselect .multiselect--above--active .multiselect__input,
    .vl-multiselect .multiselect--above--active .multiselect__tags {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }

    .vl-multiselect .multiselect--above--active .multiselect__input {
        display: inline-block;
    }

    .vl-multiselect .multiselect--disabled {
        pointer-events: none;
    }

    .vl-multiselect .multiselect--disabled .multiselect__tags {
        border-color: #8695a8;
        background-color: #f3f5f6;
    }

    .vl-multiselect .multiselect__input {
        margin: 10px 5px 15px 2px;
        display: inline-block;
        background: #fff;
        font-family: 'Flanders Art Sans', sans-serif;
        font-size: 1.6rem;
        color: #333332;
        max-width: 100%;
        height: 3.5rem;
        line-height: 3.5rem;
        border-radius: 0.3rem;
        border: 0;
        -webkit-appearance: none;
        padding: 0 1rem;
        transition: background-color 0.2s;
    }

    @media screen and (max-width: 767px) {
        .vl-multiselect .multiselect__input {
            font-size: 1.6rem;
        }
    }

    .vl-multiselect .multiselect__input:hover {
        border: 0.2rem solid rgba(0, 85, 204, 0.65);
        padding: 0 0.9rem;
    }

    .vl-multiselect .multiselect__input:hover.vl-input-field--error,
    .vl-multiselect .multiselect__input:hover.invalid.validated {
        border-color: #d2373c;
    }

    .vl-multiselect .multiselect__input:hover.vl-input-field--success {
        border-color: #009e47;
    }

    .vl-multiselect .multiselect__input:hover.vl-input-field--small {
        padding: 0 0.7rem;
    }

    .vl-multiselect .multiselect__input:focus,
    .vl-multiselect .multiselect__input--focus {
        box-shadow: 0 0 0 2px #fff, 0 0 0 5px rgba(0, 85, 204, 0.65);
        outline: transparent solid 0.2rem;
        border: 0.1rem solid #687483;
        padding: 0 1rem;
    }

    @supports (outline-offset: 2px) {
        .vl-multiselect .multiselect__input:focus,
        .vl-multiselect .multiselect__input--focus {
            box-shadow: none;
            outline: 3px solid rgba(0, 85, 204, 0.65);
            outline-offset: 2px;
        }
    }

    .vl-multiselect .multiselect__input:focus.vl-input-field--error,
    .vl-multiselect .multiselect__input:focus.invalid.validated,
    .vl-multiselect .multiselect__input--focus.vl-input-field--error,
    .vl-multiselect .multiselect__input--focus.invalid.validated {
        border-color: #d2373c;
    }

    .vl-multiselect .multiselect__input:focus.vl-input-field--success,
    .vl-multiselect .multiselect__input--focus.vl-input-field--success {
        border-color: #009e47;
    }

    .vl-multiselect .multiselect__input:focus:hover,
    .vl-multiselect .multiselect__input--focus:hover {
        padding: 0 1rem;
    }

    .vl-multiselect .multiselect__input:focus.vl-input-field--small,
    .vl-multiselect .multiselect__input--focus.vl-input-field--small {
        padding: 0 0.8rem;
    }

    .vl-multiselect .multiselect__input::placeholder {
        color: #687483;
    }

    .vl-multiselect .multiselect__input::-webkit-search-cancel-button {
        -webkit-appearance: none;
    }

    .vl-multiselect .multiselect__single {
        position: relative;
        display: inline-block;
        min-height: 20px;
        line-height: 20px;
        border: 0;
        border-radius: 5px;
        padding: 0 0 0 5px;
        margin-bottom: 8px;
        width: 100%;
        transition: border 0.1s ease;
        box-sizing: border-box;
        vertical-align: top;
        color: #687483;
    }

    .multiselect__tag ~ .vl-multiselect .multiselect__single {
        width: auto;
    }

    .vl-multiselect .multiselect__single:focus {
        outline: 0;
    }

    .vl-multiselect--single .multiselect__single {
        padding-top: 3px;
        min-height: 17px;
        line-height: 17px;
        color: #333332;
    }

    .vl-multiselect .multiselect__tags-wrap {
        display: inline;
    }

    .vl-multiselect .multiselect--active .multiselect__tags-wrap {
        margin: 0 -4px;
    }

    .vl-multiselect .multiselect__tags {
        min-height: 35px;
        display: block;
        padding: 6px 45px 0 6px;
        border: 1px solid #8695a8;
        background-color: #fff;
        font-size: 14px;
        border-radius: 3px;
    }

    .vl-multiselect .multiselect__tag {
        position: relative;
        display: inline-block;
        padding: 4px 30px 4px 10px;
        border-radius: 0.3rem;
        margin-right: 6px;
        line-height: 1;
        background: #fff;
        margin-bottom: 5px;
        white-space: nowrap;
        max-width: 100%;
        text-overflow: ellipsis;
        color: #333332;
        font-family: 'Flanders Art Sans', sans-serif;
        font-weight: 500;
        font-size: 1.4rem;
        vertical-align: middle;
        border: 1px solid #8695a8;
        transition: color 0.2s, background-color 0.2s, box-shadow 0.2s;
    }

    .vl-multiselect .multiselect__current {
        min-height: 40px;
        overflow: hidden;
        padding: 8px 12px 0;
        padding-right: 30px;
        white-space: nowrap;
        border-radius: 5px;
        border: 1px solid #e8ebee;
    }

    .vl-multiselect .multiselect__current,
    .vl-multiselect .multiselect__select {
        line-height: 16px;
        box-sizing: border-box;
        display: block;
        margin: 0;
        text-decoration: none;
        cursor: pointer;
    }

    .vl-multiselect .multiselect__select {
        position: absolute;
        width: 40px;
        right: 0;
        top: 0;
        height: 100%;
        padding: 4px 8px;
        text-align: center;
        transition: transform 0.2s ease;
    }

    .vl-multiselect .multiselect__placeholder {
        display: inline-block;
        padding: 0 0 0 5px;
        color: #687483;
        font-family: 'Flanders Art Sans', sans-serif;
        font-size: 1.6rem;
        white-space: nowrap;
        max-width: 100%;
        overflow: hidden;
    }

    .multiselect--active .vl-multiselect .multiselect__placeholder {
        display: none;
    }

    .vl-multiselect .multiselect__content-wrapper {
        position: absolute;
        display: block;
        background: #fff;
        width: 100%;
        max-height: 240px;
        overflow: auto;
        border: 1px solid #8695a8;
        border-top: 0;
        border-bottom-left-radius: 0.3rem;
        border-bottom-right-radius: 0.3rem;
        z-index: 1;
        -webkit-overflow-scrolling: touch;
    }

    .vl-multiselect .multiselect__content {
        list-style: none;
        display: inline-block;
        padding: 0;
        margin: -1px 0;
        min-width: 100%;
        vertical-align: top;
    }

    .vl-multiselect .multiselect__content::webkit-scrollbar {
        display: none;
    }

    .vl-multiselect .multiselect--above .multiselect__content-wrapper {
        bottom: 100%;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        border-bottom: none;
        border-top: 1px solid #f7f9fc;
    }

    .vl-multiselect .multiselect__element {
        display: block;
    }

    .vl-multiselect .multiselect__strong {
        margin-bottom: 8px;
        line-height: 20px;
        display: inline-block;
        vertical-align: top;
    }

    .vl-multiselect [dir='rtl'] .multiselect {
        text-align: right;
    }

    .vl-multiselect [dir='rtl'] .multiselect__select {
        right: auto;
        left: 1px;
    }

    .vl-multiselect [dir='rtl'] .multiselect__tags {
        padding: 8px 8px 0 40px;
    }

    .vl-multiselect [dir='rtl'] .multiselect__content {
        text-align: right;
    }

    .vl-multiselect [dir='rtl'] .multiselect__clear {
        right: auto;
        left: 12px;
    }

    .vl-multiselect [dir='rtl'] .multiselect__spinner {
        right: auto;
        left: 1px;
    }

    .vl-multiselect--error .multiselect__current,
    .vl-multiselect--error .multiselect__tags,
    .vl-multiselect.invalid.validated .multiselect__current,
    .vl-multiselect.invalid.validated .multiselect__tags {
        border-color: #d2373c;
        background-color: #fbebec;
    }

    .vl-multiselect--success .multiselect__current,
    .vl-multiselect--success .multiselect__tags,
    .vl-multiselect.valid.validated .multiselect__current,
    .vl-multiselect.valid.validated .multiselect__tags {
        border-color: #009e47;
        background-color: #e6f5ed;
    }
`,Ni=_e`
    .js-vl-select .vl-select__inner {
        font-size: var(--vl-font-size--small);
        border-color: var(--vl-color--border-alt);
    }

    .js-vl-select .vl-select__inner .vl-select,
    .js-vl-select .vl-select__inner .vl-multiselect {
        display: none;
    }

    .js-vl-select .vl-select__item--choice.vl-select__placeholder {
        display: none;
    }

    .js-vl-select .vl-select__inner:has(select.vl-select--error) {
        border-color: #d2373c;
        background-color: #fbebec;
    }

    .js-vl-select .vl-select__inner:has(select.vl-select--success) {
        border-color: #009e47;
        background-color: #e6f5ed;
    }

    .js-vl-select .vl-select__item.vl-select__placeholder {
        opacity: 1;
        color: #687483;
    }

    .js-vl-select[data-type='select-one'] .vl-select__inner .vl-pill__close {
        margin: 0.1rem 0 0 auto;
        border-radius: 0.3rem;

        &:hover,
        &:focus {
            box-shadow: none;
            border: #05c 0.1rem solid;
            background-color: #e6eefa;
            color: #003bb0;
            outline: none;
        }
    }

    .js-vl-select .vl-select__list--dropdown .vl-select__list .vl-select__group {
        border-top: none;
    }

    .js-vl-select .vl-select__list--dropdown .vl-select__list .vl-select__group ~ .vl-select__group {
        border-top: 0.1rem solid rgb(104, 116, 131);
    }

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

    .js-vl-select.vl-vi.vl-vi-nav-down:before {
        color: #6e7985;
        position: absolute;
        right: 1.3rem;
        font-size: 1.3rem;
        top: 50%;
        transform: translateY(-50%);
    }

    .js-vl-select.is-disabled .vl-select__list--multiple .vl-select__item {
        padding-right: 1.4rem;

        .vl-pill__close {
            display: none;
        }
    }

    .js-vl-select:not(.is-disabled) {
        &:focus,
        &.is-focused,
        &.is-open {
            ${et()}
            &:hover .vl-select__inner {
                box-shadow: none;
                border-color: var(--vl-color--border-alt);
            }
        }
    }
`,Pi=_e`
    .vl-select:focus::-ms-value {
        background: inherit;
        color: inherit;
    }

    .vl-select::-ms-expand {
        display: none;
    }

    .vl-select:hover:not([disabled]) {
        border: 0.2rem solid rgba(0, 85, 204, 0.65);
        padding: 0 3.9rem 0 1.4rem;
        line-height: 3.2rem;
        background-position: calc(100% - 1.4rem) 50%;
    }

    .vl-select:hover:not([disabled]).vl-select--error,
    .vl-select:hover:not([disabled]).invalid.validated {
        border-color: #d2373c;
    }

    .vl-select:hover:not([disabled]).vl-select--success,
    .vl-select:hover:not([disabled]).valid.validated {
        border-color: #009e47;
    }

    .vl-select:focus {
        box-shadow: 0 0 0 2px #fff, 0 0 0 5px rgba(0, 85, 204, 0.65);
        outline: transparent solid 0.2rem;
    }

    @supports (outline-offset: 2px) {
        .vl-select:focus {
            box-shadow: none;
            outline: 3px solid rgba(0, 85, 204, 0.65);
            outline-offset: 2px;
        }
    }

    .vl-select[disabled],
    .vl-select--disabled {
        border-color: #8695a8;
        background-color: #f3f5f6;
        color: var(--vl-theme-fg-color-70);
    }

    .vl-select--block {
        display: block;
        width: 100%;
    }

    @media screen and (max-width: 767px) {
        .vl-select {
            height: 3.5rem;
            line-height: 3.5rem;
            font-size: 1.6rem;
        }
    }
    @media all and (min-width: 0\\0) and (min-resolution: 0.001dpcm) {
        .vl-select {
            padding-right: 0;
            background-image: none;
        }
    }

    .no-js [select]:focus::-ms-value {
        background: inherit;
        color: inherit;
    }

    .js-vl-select {
        position: relative;
        border-radius: 0.3rem;
        z-index: var(--vl-z-layer--select-dropdown);
    }

    .js-vl-select.is-disabled {
        border-color: #687483;
        background-color: #f3f5f6 !important;
        outline: 0;
    }

    .js-vl-select.is-disabled .vl-select__inner {
        border-color: #8695a8;
    }

    .js-vl-select.is-disabled .vl-select__item {
        color: var(--vl-theme-fg-color-70);
        cursor: default;
    }

    .js-vl-select.is-focused {
        box-shadow: 0 0 0 2px #fff, 0 0 0 5px rgba(0, 85, 204, 0.65);
        outline: transparent solid 0.2rem;
    }

    @supports (outline-offset: 2px) {
        .js-vl-select.is-focused {
            box-shadow: none;
            outline: 3px solid rgba(0, 85, 204, 0.65);
            outline-offset: 2px;
        }
    }

    .js-vl-select.is-open {
        z-index: var(--vl-z-layer--select-dropdown-open);
    }

    .js-vl-select.is-open .vl-select__inner {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }

    .js-vl-select.is-open::after {
        transform: translateY(-0.75rem);
        border-color: transparent transparent #000;
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

    .js-vl-select:hover:not(.is-disabled) .vl-select__inner {
        border-color: rgba(0, 85, 204, 0.65);
        box-shadow: inset 0 0 0 0.1rem rgba(0, 85, 204, 0.65);
    }

    .js-vl-select[data-type*='select-one'] .vl-input-field {
        display: block;
        padding: 0;
        color: #333332;
        overflow: hidden;
        white-space: nowrap;
    }

    .js-vl-select[data-type*='select-one'] .vl-select__list--dropdown .vl-input-field {
        width: calc(100% - (2 * 2rem));
        margin: 2rem;
        padding: 0 1rem;
        border: 0.1rem solid #687483;
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

    .js-vl-select[data-type*='select-one'][dir='rtl']::after {
        right: auto;
        left: 1.15rem;
    }

    .js-vl-select[data-type*='select-one'][dir='rtl'] .vl-pill__close {
        margin-right: auto;
        margin-left: 0;
    }

    .js-vl-select[data-type*='select-one'] .vl-pill__close {
        border: 0;
        display: inline-flex;
        margin-left: auto;
    }

    .js-vl-select[data-type*='select-one'] .vl-pill__close:hover,
    .js-vl-select[data-type*='select-one'] .vl-pill__close:focus,
    .js-vl-select[data-type*='select-one'] .vl-pill__close:active {
        color: #003bb0;
    }

    .js-vl-select[data-type*='select-one'].is-disabled .vl-pill__close,
    .js-vl-select[data-type*='select-one'] .vl-select__placeholder .vl-pill__close {
        display: none;
    }

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
        line-height: 2.2rem;
        height: 2.4rem;
    }

    .js-vl-select[data-type*='select-multiple'] .vl-input-field:focus,
    .js-vl-select[data-type*='text'] .vl-input-field:focus {
        outline: 0;
        box-shadow: none;
    }

    .js-vl-select__group {
        padding: 0.3rem 0.5rem 0.3rem 0;
        border-top: 0.1rem solid #687483;
        text-decoration: none;
    }

    .js-vl-select .vl-select__inner {
        padding: 0.5rem 6rem 0.4rem 1rem;
        border: 0.1rem solid #687483;
        border-radius: 0.3rem;
        color: #666;
        font-family: 'Flanders Art Sans', sans-serif;
        overflow: hidden;
    }

    .is-open .js-vl-select .vl-select__inner {
        border-bottom: 0;
    }

    .js-vl-select .vl-select__list {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .js-vl-select .vl-select__list--single {
        display: inline-block;
        width: 100%;
    }

    [dir='rtl'] .js-vl-select .vl-select__list--single {
        padding-right: 0.5rem;
        padding-left: 1.5rem;
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

    [dir='rtl'] .js-vl-select .vl-select__list--multiple--multiple {
        margin-right: 0;
        margin-left: 0.375rem;
    }

    .js-vl-select .vl-select__list--multiple .vl-input-field {
        padding: 0.4rem 0 0.4rem 0.2rem;
    }

    .js-vl-select .vl-select__list--dropdown {
        display: none;
        position: absolute;
        top: 100%;
        width: 100%;
        transform: translateY(-0.1rem);
        border: 0.1rem #687483 solid;
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
        border-top: 0.1rem solid #687483;
    }

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

    [dir='rtl'] .js-vl-select .vl-select__list--dropdown .vl-select__item {
        text-align: right;
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

        [dir='rtl'] .js-vl-select .vl-select__list--dropdown .vl-select__item--selectable {
            padding-right: 1rem;
            padding-left: 10rem;
            text-align: right;
        }

        [dir='rtl'] .js-vl-select .vl-select__list--dropdown .vl-select__item--selectable::after {
            right: auto;
            left: 1rem;
        }
    }

    .js-vl-select .vl-select__list--dropdown .vl-select__item--selectable.is-highlighted {
        position: relative;
        background-color: rgba(179, 207, 245, 0.3);
    }

    .js-vl-select .vl-select__list--dropdown .vl-select__item[aria-selected='true'] {
        background-color: rgba(179, 207, 245, 0.3);
    }

    .js-vl-select .vl-select__item {
        cursor: default;
        display: flex;
        align-items: center;
        min-height: calc(3.5rem - 1.2rem);
        height: calc(3.5rem - 1.2rem);
    }

    .js-vl-select .vl-select__item--disabled {
        background-color: #f3f5f6 !important;
        border-color: #8695a8;
        color: var(--vl-theme-fg-color-70) !important;
        cursor: not-allowed;
        user-select: none;
    }

    .js-vl-select .vl-select__item--disabled:hover {
        background-color: #f3f5f6;
    }

    .js-vl-select .vl-select__item span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .js-vl-select .vl-input-field {
        display: inline-block;
        max-width: 100%;
        border: 0;
        background-color: transparent;
        vertical-align: baseline;
    }

    [dir='rtl'] .js-vl-select .vl-input-field {
        padding-right: 0.2rem;
        padding-left: 0;
    }

    .js-vl-select .vl-select__placeholder {
        opacity: 0.5;
    }

    .js-vl-select .vl-select__group {
        display: block;
    }

    .js-vl-select .vl-select__group:not(:first-of-type) {
        border-top: 0.1rem solid #687483;
    }

    .js-vl-select .vl-select__group .vl-select__heading {
        padding: 0.6rem 2rem;
        color: #4d4d4b;
        font-weight: 500;
    }

    .vl-select--error .js-vl-select {
        background-color: #d2373c;
        border: 0.2rem solid #d2373c;
        box-shadow: inset 0 0 0 0.1rem #d2373c;
    }

    .vl-select--error .js-vl-select:focus {
        background-color: #fff;
    }

    .vl-select--success .js-vl-select {
        border-color: #009e47;
        background-color: #e6f5ed;
        border-width: 0.2rem;
        border-style: solid;
    }
`,Fi={AUTO:"auto",TOP:"top",BOTTOM:"bottom"},L={...tt,initialOptions:[],options:[],placeholder:"",notDeletable:!1,multiple:!1,search:!1,position:Fi.AUTO,resultLimit:4,noResultsText:"Geen resultaten gevonden",noChoicesText:"Geen resterende opties gevonden",searchPlaceholder:"Zoek item"};var Ri=Object.getOwnPropertyDescriptor,Ki=(i,e,t,s)=>{for(var r=s>1?void 0:s?Ri(e,t):e,n=i.length-1,l;n>=0;n--)(l=i[n])&&(r=l(r)||r);return r};let te=class extends it{constructor(){super(),this.options=L.options,this.initialOptions=L.initialOptions,this.placeholder=L.placeholder,this.search=L.search,this.searchPlaceholder=L.searchPlaceholder,this.choices=null,this.notDeletable=L.notDeletable,this.multiple=L.multiple,this.position=L.position,this.resultLimit=L.resultLimit,this.noResultsText=L.noResultsText,this.noChoicesText=L.noChoicesText,this.value=null,this.dropdownInitialised=!1,this.isDropdownOpen=!1,this.dispatchInput=!1,this.initialised=!1,this.callbackOnInit=async()=>{this.getChoicesElement()?.addEventListener("click",this.onClickChoices),this.internals.labels[0]?.addEventListener("click",this.onClickChoices),this.getChoicesElement()?.addEventListener("showDropdown",()=>{const i=this.getChoicesElement()?.querySelector(".vl-select__list--dropdown");i&&!this.dropdownInitialised&&(i.setAttribute("role","group"),i.setAttribute("id","vl-select__list"),this.dropdownInitialised=!0),this.isDropdownOpen=!0}),this.getChoicesElement()?.addEventListener("hideDropdown",()=>{this.isDropdownOpen=!1}),this.setChoicesInputAttributes(),await Promise.resolve(),this.value||this.setValue(null),this.choices?.input?.element?.addEventListener("input",this.onSearchInput),this.initialised=!0},this.onClickChoices=()=>{this.disabled||this.choices?.showDropdown()},this.onSearchInput=i=>{const e=i?.target?.value;this.dispatchEvent(new CustomEvent("vl-select-search",{bubbles:!0,composed:!0,detail:{value:e}}))},this.submitFormOnEnter=!1}static get styles(){return[st,rt,nt,Pi,ji,lt,Ni]}static get properties(){return{initialOptions:{type:Array,attribute:"initial-options"},options:{type:Array,hasChanged:(i,e)=>i instanceof Array&&e instanceof Array?JSON.stringify([...i])!==JSON.stringify([...e]):i!==e},placeholder:{type:String},notDeletable:{type:Boolean,attribute:"not-deletable"},multiple:{type:Boolean},search:{type:Boolean},position:{type:String},resultLimit:{type:Number,attribute:"result-limit"},noResultsText:{type:String,attribute:"no-results-text"},noChoicesText:{type:String,attribute:"no-choices-text"},searchPlaceholder:{type:String,attribute:"search-placeholder"},value:{type:FormData,state:!0,hasChanged:(i,e)=>this.compareValue(e,i)}}}connectedCallback(){super.connectedCallback(),this.initialised&&(this.choices=new ce(this.validationTarget,this.getChoicesConfig()),this.initialOptions=structuredClone(this.options))}async firstUpdated(i){super.firstUpdated(i),this.choices=new ce(this.validationTarget,this.getChoicesConfig()),this.initialOptions=structuredClone(this.options)}updated(i){if(super.updated(i),!!this.choices){if(i.has("options")&&(this.choices.initialised&&(this.choices.clearStore(),this.choices.setChoices(this.options,"value","label",!0),this.updateSelectedOptions(this.options)),te.compareValue(this.value,i.has("value"))&&(this.value=this.collectFormData())),i.has("value")){const e={value:this.getSelected()};this.setValue(this.value),this.dispatchEvent(new CustomEvent("vl-change",{bubbles:!0,composed:!0,detail:e})),this.validity.valid&&this.dispatchEventIfValid(e)}i.has("disabled")&&(this.disabled?this.choices.disable():this.choices.enable()),i.has("error")&&this.internals.setValidity({customError:this.error},"custom-error"),i.has("resultLimit")&&(this.choices.config.searchResultLimit=this.resultLimit)}}disconnectedCallback(){super.disconnectedCallback(),this.getChoicesElement()?.removeEventListener("click",this.onClickChoices),this.internals.labels[0]?.removeEventListener("click",this.onClickChoices),this.choices?.input?.element?.removeEventListener("input",this.onSearchInput),this.choices?.destroy()}render(){const i={"vl-select":!this.multiple,"vl-multiselect":this.multiple,"vl-select--disabled":this.disabled,"vl-select--error":this.isInvalid||this.error,"vl-select--success":this.success};return at`
            <select
                id=${this.id||X}
                name=${this.name||X}
                class=${ot(i)}
                aria-label=${this.label||X}
                aria-invalid=${this.isInvalid||X}
                ?required=${this.required}
                ?disabled=${this.disabled}
                ?error=${this.error}
                ?multiple=${this.multiple}
                @change=${this.onInput}
                @addItem=${this.onChange}
                @removeItem=${this.onChange}
            ></select>
        `}get validationTarget(){return this.shadowRoot?.querySelector("select")}resetFormControl(){super.resetFormControl(),this.choices?.clearStore(),this.choices?.setChoices(this.options,"value","label",!0),this.updateSelectedOptions(this.initialOptions),this.value=this.collectFormData()}setOptions(i){!i||!i.length||(this.options=structuredClone(i))}updateSelectedOptions(i){const e=i.filter(s=>s.selected).map(s=>s.value),t=i.filter(s=>!s.selected).map(s=>s.value);this.removeSelectionByValue(t),this.selectByValue(e)}setSelectedValues(i){this.removeAllSelections(),this.selectByValue(i)}getSelected(){return this.multiple?this.getSelectedValues():this.getSelectedValues()[0]||null}selectByValue(i){this.choices&&(this.choices.setChoiceByValue(i),this.setValue(this.collectFormData()))}removeSelectionByValue(i){this.choices&&(Array.isArray(i)?i.forEach(e=>this.choices.removeActiveItemsByValue(e)):this.choices.removeActiveItemsByValue(i),this.setValue(this.collectFormData()))}removeAllSelections(){this.choices&&(this.choices.removeActiveItems(),this.setValue(this.collectFormData()))}onKeydown(i){i.stopPropagation(),super.onKeydown(i)}setChoicesInputAttributes(){if(this.choices?.input?.element){const i=this.choices.input.element;i.setAttribute("type","text"),i.classList.add("vl-input-field","vl-input-field-cloned"),i.setAttribute("autocomplete","off"),i.setAttribute("autocapitalize","off"),i.setAttribute("spellcheck","false"),i.setAttribute("role","textbox"),i.setAttribute("aria-autocomplete","list"),i.setAttribute("aria-label","zoek item")}}getSelectedValues(){const i=this.validationTarget.selectedOptions;return Array.from(i).filter(e=>e.value&&e.hasAttribute("selected")).map(e=>e.value)}collectFormData(){const i=this.name||this.id,e=this.getSelectedValues();return e?.length?e.reduce((t,s,r)=>(r?t.append(i,s):t.set(i,s),t),new FormData):null}getChoicesElement(){return this.shadowRoot?.querySelector(".js-vl-select")}getChoicesConfig(){return{callbackOnInit:this.callbackOnInit,shouldSort:!1,removeItemButton:!this.notDeletable,removeItems:!this.notDeletable,searchEnabled:this.search,placeholder:!!this.placeholder,placeholderValue:this.placeholder,position:this.position,noResultsText:this.noResultsText,searchResultLimit:this.resultLimit,noChoicesText:this.noChoicesText,searchPlaceholderValue:this.searchPlaceholder,shadowRoot:this.shadowRoot,classNames:{...ce.defaults.allOptions.classNames,containerOuter:"js-vl-select",containerInner:"vl-select__inner",input:"vl-input-field",inputCloned:"vl-input-field-cloned",list:"vl-select__list",listItems:"vl-select__list--multiple",listSingle:"vl-select__list--single",listDropdown:["vl-select__list","vl-select__list--dropdown"],item:"vl-select__item",itemSelectable:"vl-select__item--selectable",itemDisabled:"vl-select__item--disabled",itemChoice:"vl-select__item--choice",placeholder:"vl-select__placeholder",group:"vl-select__group",groupHeading:"vl-select__heading",button:"vl-select__button"},callbackOnCreateTemplates:i=>({containerOuter:()=>i(`
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
                            `),item:(e,t)=>{const s=t.placeholder===!0;return this.notDeletable?i(`
                            <div class="vl-select__item
                                ${t.highlighted?"is-highlighted":"vl-select__item--selectable"}
                                ${this.multiple?"vl-pill":""}
                                ${t.placeholder?"vl-select__placeholder":""}"
                                role="option"
                                data-item
                                data-id="${t.id}"
                                data-value="${t.value}"
                                ${t.disabled?'aria-disabled="true"':""}
                            >
                                ${t.label}
                            </div>
                        `):i(`<div class="
                                    vl-select__item
                                    ${t.highlighted?"is-highlighted":""}
                                    ${t.disabled?"":"vl-select__item--selectable"}
                                    ${this.multiple?"vl-pill":""}
                                    ${t.placeholder?"vl-select__placeholder":""}"
                                    data-item
                                    data-id="${t.id}"
                                    data-value="${t.value}"
                                            ${s?'role="option"':""}
                                    ${t.disabled?'aria-disabled="true"':"data-deletable"}
                                >
                                    <span>${t.label}</span>
                                    <button type="button"
                                    ${s?"":'role="option"'}
                                     class="vl-pill__close ${this.multiple?"":"vl-vi vl-vi-close"}" data-button aria-label="verwijder ${t.label}">
                                        ${this.multiple?'<span class="vl-pill__close__icon vl-vi vl-vi-close" aria-hidden="true"></span>':""}
                                    </button>
                                </div>`)},itemList:()=>i(`<div class="vl-input-field ${this.multiple?"vl-select__list--multiple":""}" role="listbox"></div>`),choiceList:()=>i('<div class="vl-select__list" role="listbox" aria-label="item lijst" tabindex="0"></div>')})}}onChange(){this.value=this.collectFormData()}onInput(){this.dispatchEvent(new CustomEvent("vl-input",{bubbles:!0,composed:!0,detail:{value:this.getSelected()}}))}};te.compareValue=(i,e)=>i instanceof FormData&&e instanceof FormData?JSON.stringify([...i.entries()])!==JSON.stringify([...e.entries()]):i!==e;te=Ki([ct("vl-select-rich")],te);export{Fi as S,te as V,L as s};
