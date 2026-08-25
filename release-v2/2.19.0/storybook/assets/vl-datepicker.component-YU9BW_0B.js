import{ck as xn,bx as Dn,i as rt,$ as Mn,dW as Cn,dX as Sn,dY as En,dZ as In,d_ as kt,d$ as Tn,e0 as An,br as Ft,bs as Pn,aV as Rn,e1 as On,k as Fn,e2 as _n,T as j,F as yt,cl as Nn,x as Ln,e3 as Hn,w as Yn}from"./iframe-CY-ZM549.js";import{C as jn}from"./cleave-esm-DfUhcNrv.js";var Be=["onChange","onClose","onDayCreate","onDestroy","onKeyDown","onMonthChange","onOpen","onParseConfig","onReady","onValueUpdate","onYearChange","onPreCalendarPosition"],oe={_disable:[],allowInput:!1,allowInvalidPreload:!1,altFormat:"F j, Y",altInput:!1,altInputClass:"form-control input",animate:typeof window=="object"&&window.navigator.userAgent.indexOf("MSIE")===-1,ariaDateFormat:"F j, Y",autoFillDefaultTime:!0,clickOpens:!0,closeOnSelect:!0,conjunction:", ",dateFormat:"Y-m-d",defaultHour:12,defaultMinute:0,defaultSeconds:0,disable:[],disableMobile:!1,enableSeconds:!1,enableTime:!1,errorHandler:function(t){return typeof console<"u"&&console.warn(t)},getWeek:function(t){var n=new Date(t.getTime());n.setHours(0,0,0,0),n.setDate(n.getDate()+3-(n.getDay()+6)%7);var e=new Date(n.getFullYear(),0,4);return 1+Math.round(((n.getTime()-e.getTime())/864e5-3+(e.getDay()+6)%7)/7)},hourIncrement:1,ignoredFocusElements:[],inline:!1,locale:"default",minuteIncrement:5,mode:"single",monthSelectorType:"dropdown",nextArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",noCalendar:!1,now:new Date,onChange:[],onClose:[],onDayCreate:[],onDestroy:[],onKeyDown:[],onMonthChange:[],onOpen:[],onParseConfig:[],onReady:[],onValueUpdate:[],onYearChange:[],onPreCalendarPosition:[],plugins:[],position:"auto",positionElement:void 0,prevArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",shorthandCurrentMonth:!1,showMonths:1,static:!1,time_24hr:!1,weekNumbers:!1,wrap:!1},me={weekdays:{shorthand:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},months:{shorthand:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longhand:["January","February","March","April","May","June","July","August","September","October","November","December"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:0,ordinal:function(t){var n=t%100;if(n>3&&n<21)return"th";switch(n%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},rangeSeparator:" to ",weekAbbreviation:"Wk",scrollTitle:"Scroll to increment",toggleTitle:"Click to toggle",amPM:["AM","PM"],yearAriaLabel:"Year",monthAriaLabel:"Month",hourAriaLabel:"Hour",minuteAriaLabel:"Minute",time_24hr:!1},R=function(t,n){return n===void 0&&(n=2),("000"+t).slice(n*-1)},L=function(t){return t===!0?1:0};function wt(t,n){var e;return function(){var o=this,s=arguments;clearTimeout(e),e=setTimeout(function(){return t.apply(o,s)},n)}}var Ue=function(t){return t instanceof Array?t:[t]};function A(t,n,e){if(e===!0)return t.classList.add(n);t.classList.remove(n)}function D(t,n,e){var o=window.document.createElement(t);return n=n||"",e=e||"",o.className=n,e!==void 0&&(o.textContent=e),o}function Se(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function _t(t,n){if(n(t))return t;if(t.parentNode)return _t(t.parentNode,n)}function Ee(t,n){var e=D("div","numInputWrapper"),o=D("input","numInput "+t),s=D("span","arrowUp"),c=D("span","arrowDown");if(navigator.userAgent.indexOf("MSIE 9.0")===-1?o.type="number":(o.type="text",o.pattern="\\d*"),n!==void 0)for(var f in n)o.setAttribute(f,n[f]);return e.appendChild(o),e.appendChild(s),e.appendChild(c),e}function F(t){try{if(typeof t.composedPath=="function"){var n=t.composedPath();return n[0]}return t.target}catch{return t.target}}var qe=function(){},Ae=function(t,n,e){return e.months[n?"shorthand":"longhand"][t]},Vn={D:qe,F:function(t,n,e){t.setMonth(e.months.longhand.indexOf(n))},G:function(t,n){t.setHours((t.getHours()>=12?12:0)+parseFloat(n))},H:function(t,n){t.setHours(parseFloat(n))},J:function(t,n){t.setDate(parseFloat(n))},K:function(t,n,e){t.setHours(t.getHours()%12+12*L(new RegExp(e.amPM[1],"i").test(n)))},M:function(t,n,e){t.setMonth(e.months.shorthand.indexOf(n))},S:function(t,n){t.setSeconds(parseFloat(n))},U:function(t,n){return new Date(parseFloat(n)*1e3)},W:function(t,n,e){var o=parseInt(n),s=new Date(t.getFullYear(),0,2+(o-1)*7,0,0,0,0);return s.setDate(s.getDate()-s.getDay()+e.firstDayOfWeek),s},Y:function(t,n){t.setFullYear(parseFloat(n))},Z:function(t,n){return new Date(n)},d:function(t,n){t.setDate(parseFloat(n))},h:function(t,n){t.setHours((t.getHours()>=12?12:0)+parseFloat(n))},i:function(t,n){t.setMinutes(parseFloat(n))},j:function(t,n){t.setDate(parseFloat(n))},l:qe,m:function(t,n){t.setMonth(parseFloat(n)-1)},n:function(t,n){t.setMonth(parseFloat(n)-1)},s:function(t,n){t.setSeconds(parseFloat(n))},u:function(t,n){return new Date(parseFloat(n))},w:qe,y:function(t,n){t.setFullYear(2e3+parseFloat(n))}},Z={D:"",F:"",G:"(\\d\\d|\\d)",H:"(\\d\\d|\\d)",J:"(\\d\\d|\\d)\\w+",K:"",M:"",S:"(\\d\\d|\\d)",U:"(.+)",W:"(\\d\\d|\\d)",Y:"(\\d{4})",Z:"(.+)",d:"(\\d\\d|\\d)",h:"(\\d\\d|\\d)",i:"(\\d\\d|\\d)",j:"(\\d\\d|\\d)",l:"",m:"(\\d\\d|\\d)",n:"(\\d\\d|\\d)",s:"(\\d\\d|\\d)",u:"(.+)",w:"(\\d\\d|\\d)",y:"(\\d{2})"},ge={Z:function(t){return t.toISOString()},D:function(t,n,e){return n.weekdays.shorthand[ge.w(t,n,e)]},F:function(t,n,e){return Ae(ge.n(t,n,e)-1,!1,n)},G:function(t,n,e){return R(ge.h(t,n,e))},H:function(t){return R(t.getHours())},J:function(t,n){return n.ordinal!==void 0?t.getDate()+n.ordinal(t.getDate()):t.getDate()},K:function(t,n){return n.amPM[L(t.getHours()>11)]},M:function(t,n){return Ae(t.getMonth(),!0,n)},S:function(t){return R(t.getSeconds())},U:function(t){return t.getTime()/1e3},W:function(t,n,e){return e.getWeek(t)},Y:function(t){return R(t.getFullYear(),4)},d:function(t){return R(t.getDate())},h:function(t){return t.getHours()%12?t.getHours()%12:12},i:function(t){return R(t.getMinutes())},j:function(t){return t.getDate()},l:function(t,n){return n.weekdays.longhand[t.getDay()]},m:function(t){return R(t.getMonth()+1)},n:function(t){return t.getMonth()+1},s:function(t){return t.getSeconds()},u:function(t){return t.getTime()},w:function(t){return t.getDay()},y:function(t){return String(t.getFullYear()).substring(2)}},Nt=function(t){var n=t.config,e=n===void 0?oe:n,o=t.l10n,s=o===void 0?me:o,c=t.isMobile,f=c===void 0?!1:c;return function(v,d,b){var w=b||s;return e.formatDate!==void 0&&!f?e.formatDate(v,d,w):d.split("").map(function(E,P,N){return ge[E]&&N[P-1]!=="\\"?ge[E](v,w,e):E!=="\\"?E:""}).join("")}},et=function(t){var n=t.config,e=n===void 0?oe:n,o=t.l10n,s=o===void 0?me:o;return function(c,f,v,d){if(!(c!==0&&!c)){var b=d||s,w,E=c;if(c instanceof Date)w=new Date(c.getTime());else if(typeof c!="string"&&c.toFixed!==void 0)w=new Date(c);else if(typeof c=="string"){var P=f||(e||oe).dateFormat,N=String(c).trim();if(N==="today")w=new Date,v=!0;else if(e&&e.parseDate)w=e.parseDate(c,P);else if(/Z$/.test(N)||/GMT$/.test(N))w=new Date(c);else{for(var $=void 0,M=[],B=0,_e=0,W="";B<P.length;B++){var U=P[B],Q=U==="\\",Ne=P[B-1]==="\\"||Q;if(Z[U]&&!Ne){W+=Z[U];var q=new RegExp(W).exec(c);q&&($=!0)&&M[U!=="Y"?"push":"unshift"]({fn:Vn[U],val:q[++_e]})}else Q||(W+=".")}w=!e||!e.noCalendar?new Date(new Date().getFullYear(),0,1,0,0,0,0):new Date(new Date().setHours(0,0,0,0)),M.forEach(function(ee){var te=ee.fn,Le=ee.val;return w=te(w,Le,b)||w}),w=$?w:void 0}}if(!(w instanceof Date&&!isNaN(w.getTime()))){e.errorHandler(new Error("Invalid date provided: "+E));return}return v===!0&&w.setHours(0,0,0,0),w}}};function _(t,n,e){return e===void 0&&(e=!0),e!==!1?new Date(t.getTime()).setHours(0,0,0,0)-new Date(n.getTime()).setHours(0,0,0,0):t.getTime()-n.getTime()}var zn=function(t,n,e){return t>Math.min(n,e)&&t<Math.max(n,e)},Ke=function(t,n,e){return t*3600+n*60+e},Wn=function(t){var n=Math.floor(t/3600),e=(t-n*3600)/60;return[n,e,t-n*3600-e*60]},$n={DAY:864e5};function Je(t){var n=t.defaultHour,e=t.defaultMinute,o=t.defaultSeconds;if(t.minDate!==void 0){var s=t.minDate.getHours(),c=t.minDate.getMinutes(),f=t.minDate.getSeconds();n<s&&(n=s),n===s&&e<c&&(e=c),n===s&&e===c&&o<f&&(o=t.minDate.getSeconds())}if(t.maxDate!==void 0){var v=t.maxDate.getHours(),d=t.maxDate.getMinutes();n=Math.min(n,v),n===v&&(e=Math.min(d,e)),n===v&&e===d&&(o=t.maxDate.getSeconds())}return{hours:n,minutes:e,seconds:o}}typeof Object.assign!="function"&&(Object.assign=function(t){for(var n=[],e=1;e<arguments.length;e++)n[e-1]=arguments[e];if(!t)throw TypeError("Cannot convert undefined or null to object");for(var o=function(v){v&&Object.keys(v).forEach(function(d){return t[d]=v[d]})},s=0,c=n;s<c.length;s++){var f=c[s];o(f)}return t});var T=function(){return T=Object.assign||function(t){for(var n,e=1,o=arguments.length;e<o;e++){n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},T.apply(this,arguments)},xt=function(){for(var t=0,n=0,e=arguments.length;n<e;n++)t+=arguments[n].length;for(var o=Array(t),s=0,n=0;n<e;n++)for(var c=arguments[n],f=0,v=c.length;f<v;f++,s++)o[s]=c[f];return o},Bn=300;function Un(t,n){var e={config:T(T({},oe),k.defaultConfig),l10n:me};e.parseDate=et({config:e.config,l10n:e.l10n}),e._handlers=[],e.pluginElements=[],e.loadedPlugins=[],e._bind=M,e._setHoursFromDate=P,e._positionCalendar=De,e.changeMonth=He,e.changeYear=ye,e.clear=Kt,e.close=Jt,e.onMouseOver=xe,e._createElement=D,e.createDay=q,e.destroy=Zt,e.isEnabled=K,e.jumpToDate=W,e.updateValue=V,e.open=Qt,e.redraw=ht,e.set=an,e.setDate=rn,e.toggle=cn;function o(){e.utils={getDaysInMonth:function(a,i){return a===void 0&&(a=e.currentMonth),i===void 0&&(i=e.currentYear),a===1&&(i%4===0&&i%100!==0||i%400===0)?29:e.l10n.daysInMonth[a]}}}function s(){e.element=e.input=t,e.isOpen=!1,en(),ft(),ln(),on(),o(),e.isMobile||Ne(),_e(),(e.selectedDates.length||e.config.noCalendar)&&(e.config.enableTime&&P(e.config.noCalendar?e.latestSelectedDateObj:void 0),V(!1)),v();var a=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);!e.isMobile&&a&&De(),S("onReady")}function c(){var a;return((a=e.calendarContainer)===null||a===void 0?void 0:a.getRootNode()).activeElement||document.activeElement}function f(a){return a.bind(e)}function v(){var a=e.config;a.weekNumbers===!1&&a.showMonths===1||a.noCalendar!==!0&&window.requestAnimationFrame(function(){if(e.calendarContainer!==void 0&&(e.calendarContainer.style.visibility="hidden",e.calendarContainer.style.display="block"),e.daysContainer!==void 0){var i=(e.days.offsetWidth+1)*a.showMonths;e.daysContainer.style.width=i+"px",e.calendarContainer.style.width=i+(e.weekWrapper!==void 0?e.weekWrapper.offsetWidth:0)+"px",e.calendarContainer.style.removeProperty("visibility"),e.calendarContainer.style.removeProperty("display")}})}function d(a){if(e.selectedDates.length===0){var i=e.config.minDate===void 0||_(new Date,e.config.minDate)>=0?new Date:new Date(e.config.minDate.getTime()),r=Je(e.config);i.setHours(r.hours,r.minutes,r.seconds,i.getMilliseconds()),e.selectedDates=[i],e.latestSelectedDateObj=i}a!==void 0&&a.type!=="blur"&&un(a);var l=e._input.value;E(),V(),e._input.value!==l&&e._debouncedChange()}function b(a,i){return a%12+12*L(i===e.l10n.amPM[1])}function w(a){switch(a%24){case 0:case 12:return 12;default:return a%12}}function E(){if(!(e.hourElement===void 0||e.minuteElement===void 0)){var a=(parseInt(e.hourElement.value.slice(-2),10)||0)%24,i=(parseInt(e.minuteElement.value,10)||0)%60,r=e.secondElement!==void 0?(parseInt(e.secondElement.value,10)||0)%60:0;e.amPM!==void 0&&(a=b(a,e.amPM.textContent));var l=e.config.minTime!==void 0||e.config.minDate&&e.minDateHasTime&&e.latestSelectedDateObj&&_(e.latestSelectedDateObj,e.config.minDate,!0)===0,p=e.config.maxTime!==void 0||e.config.maxDate&&e.maxDateHasTime&&e.latestSelectedDateObj&&_(e.latestSelectedDateObj,e.config.maxDate,!0)===0;if(e.config.maxTime!==void 0&&e.config.minTime!==void 0&&e.config.minTime>e.config.maxTime){var u=Ke(e.config.minTime.getHours(),e.config.minTime.getMinutes(),e.config.minTime.getSeconds()),y=Ke(e.config.maxTime.getHours(),e.config.maxTime.getMinutes(),e.config.maxTime.getSeconds()),g=Ke(a,i,r);if(g>y&&g<u){var x=Wn(u);a=x[0],i=x[1],r=x[2]}}else{if(p){var h=e.config.maxTime!==void 0?e.config.maxTime:e.config.maxDate;a=Math.min(a,h.getHours()),a===h.getHours()&&(i=Math.min(i,h.getMinutes())),i===h.getMinutes()&&(r=Math.min(r,h.getSeconds()))}if(l){var m=e.config.minTime!==void 0?e.config.minTime:e.config.minDate;a=Math.max(a,m.getHours()),a===m.getHours()&&i<m.getMinutes()&&(i=m.getMinutes()),i===m.getMinutes()&&(r=Math.max(r,m.getSeconds()))}}N(a,i,r)}}function P(a){var i=a||e.latestSelectedDateObj;i&&i instanceof Date&&N(i.getHours(),i.getMinutes(),i.getSeconds())}function N(a,i,r){e.latestSelectedDateObj!==void 0&&e.latestSelectedDateObj.setHours(a%24,i,r||0,0),!(!e.hourElement||!e.minuteElement||e.isMobile)&&(e.hourElement.value=R(e.config.time_24hr?a:(12+a)%12+12*L(a%12===0)),e.minuteElement.value=R(i),e.amPM!==void 0&&(e.amPM.textContent=e.l10n.amPM[L(a>=12)]),e.secondElement!==void 0&&(e.secondElement.value=R(r)))}function $(a){var i=F(a),r=parseInt(i.value)+(a.delta||0);(r/1e3>1||a.key==="Enter"&&!/[^\d]/.test(r.toString()))&&ye(r)}function M(a,i,r,l){if(i instanceof Array)return i.forEach(function(p){return M(a,p,r,l)});if(a instanceof Array)return a.forEach(function(p){return M(p,i,r,l)});a.addEventListener(i,r,l),e._handlers.push({remove:function(){return a.removeEventListener(i,r,l)}})}function B(){S("onChange")}function _e(){if(e.config.wrap&&["open","close","toggle","clear"].forEach(function(r){Array.prototype.forEach.call(e.element.querySelectorAll("[data-"+r+"]"),function(l){return M(l,"click",e[r])})}),e.isMobile){sn();return}var a=wt(Xt,50);if(e._debouncedChange=wt(B,Bn),e.daysContainer&&!/iPhone|iPad|iPod/i.test(navigator.userAgent)&&M(e.daysContainer,"mouseover",function(r){e.config.mode==="range"&&xe(F(r))}),M(e._input,"keydown",dt),e.calendarContainer!==void 0&&M(e.calendarContainer,"keydown",dt),!e.config.inline&&!e.config.static&&M(window,"resize",a),window.ontouchstart!==void 0?M(window.document,"touchstart",Ye):M(window.document,"mousedown",Ye),M(window.document,"focus",Ye,{capture:!0}),e.config.clickOpens===!0&&(M(e._input,"focus",e.open),M(e._input,"click",e.open)),e.daysContainer!==void 0&&(M(e.monthNav,"click",pn),M(e.monthNav,["keyup","increment"],$),M(e.daysContainer,"click",gt)),e.timeContainer!==void 0&&e.minuteElement!==void 0&&e.hourElement!==void 0){var i=function(r){return F(r).select()};M(e.timeContainer,["increment"],d),M(e.timeContainer,"blur",d,{capture:!0}),M(e.timeContainer,"click",U),M([e.hourElement,e.minuteElement],["focus","click"],i),e.secondElement!==void 0&&M(e.secondElement,"focus",function(){return e.secondElement&&e.secondElement.select()}),e.amPM!==void 0&&M(e.amPM,"click",function(r){d(r)})}e.config.allowInput&&M(e._input,"blur",Gt)}function W(a,i){var r=a!==void 0?e.parseDate(a):e.latestSelectedDateObj||(e.config.minDate&&e.config.minDate>e.now?e.config.minDate:e.config.maxDate&&e.config.maxDate<e.now?e.config.maxDate:e.now),l=e.currentYear,p=e.currentMonth;try{r!==void 0&&(e.currentYear=r.getFullYear(),e.currentMonth=r.getMonth())}catch(u){u.message="Invalid date supplied: "+r,e.config.errorHandler(u)}i&&e.currentYear!==l&&(S("onYearChange"),ne()),i&&(e.currentYear!==l||e.currentMonth!==p)&&S("onMonthChange"),e.redraw()}function U(a){var i=F(a);~i.className.indexOf("arrow")&&Q(a,i.classList.contains("arrowUp")?1:-1)}function Q(a,i,r){var l=a&&F(a),p=r||l&&l.parentNode&&l.parentNode.firstChild,u=Ve("increment");u.delta=i,p&&p.dispatchEvent(u)}function Ne(){var a=window.document.createDocumentFragment();if(e.calendarContainer=D("div","flatpickr-calendar"),e.calendarContainer.tabIndex=-1,!e.config.noCalendar){if(a.appendChild(Bt()),e.innerContainer=D("div","flatpickr-innerContainer"),e.config.weekNumbers){var i=qt(),r=i.weekWrapper,l=i.weekNumbers;e.innerContainer.appendChild(r),e.weekNumbers=l,e.weekWrapper=r}e.rContainer=D("div","flatpickr-rContainer"),e.rContainer.appendChild(st()),e.daysContainer||(e.daysContainer=D("div","flatpickr-days"),e.daysContainer.tabIndex=-1),ke(),e.rContainer.appendChild(e.daysContainer),e.innerContainer.appendChild(e.rContainer),a.appendChild(e.innerContainer)}e.config.enableTime&&a.appendChild(Ut()),A(e.calendarContainer,"rangeMode",e.config.mode==="range"),A(e.calendarContainer,"animate",e.config.animate===!0),A(e.calendarContainer,"multiMonth",e.config.showMonths>1),e.calendarContainer.appendChild(a);var p=e.config.appendTo!==void 0&&e.config.appendTo.nodeType!==void 0;if((e.config.inline||e.config.static)&&(e.calendarContainer.classList.add(e.config.inline?"inline":"static"),e.config.inline&&(!p&&e.element.parentNode?e.element.parentNode.insertBefore(e.calendarContainer,e._input.nextSibling):e.config.appendTo!==void 0&&e.config.appendTo.appendChild(e.calendarContainer)),e.config.static)){var u=D("div","flatpickr-wrapper");e.element.parentNode&&e.element.parentNode.insertBefore(u,e.element),u.appendChild(e.element),e.altInput&&u.appendChild(e.altInput),u.appendChild(e.calendarContainer)}!e.config.static&&!e.config.inline&&(e.config.appendTo!==void 0?e.config.appendTo:window.document.body).appendChild(e.calendarContainer)}function q(a,i,r,l){var p=K(i,!0),u=D("span",a,i.getDate().toString());return u.dateObj=i,u.$i=l,u.setAttribute("aria-label",e.formatDate(i,e.config.ariaDateFormat)),a.indexOf("hidden")===-1&&_(i,e.now)===0&&(e.todayDateElem=u,u.classList.add("today"),u.setAttribute("aria-current","date")),p?(u.tabIndex=-1,ze(i)&&(u.classList.add("selected"),e.selectedDateElem=u,e.config.mode==="range"&&(A(u,"startRange",e.selectedDates[0]&&_(i,e.selectedDates[0],!0)===0),A(u,"endRange",e.selectedDates[1]&&_(i,e.selectedDates[1],!0)===0),a==="nextMonthDay"&&u.classList.add("inRange")))):u.classList.add("flatpickr-disabled"),e.config.mode==="range"&&dn(i)&&!ze(i)&&u.classList.add("inRange"),e.weekNumbers&&e.config.showMonths===1&&a!=="prevMonthDay"&&l%7===6&&e.weekNumbers.insertAdjacentHTML("beforeend","<span class='flatpickr-day'>"+e.config.getWeek(i)+"</span>"),S("onDayCreate",u),u}function ee(a){a.focus(),e.config.mode==="range"&&xe(a)}function te(a){for(var i=a>0?0:e.config.showMonths-1,r=a>0?e.config.showMonths:-1,l=i;l!=r;l+=a)for(var p=e.daysContainer.children[l],u=a>0?0:p.children.length-1,y=a>0?p.children.length:-1,g=u;g!=y;g+=a){var x=p.children[g];if(x.className.indexOf("hidden")===-1&&K(x.dateObj))return x}}function Le(a,i){for(var r=a.className.indexOf("Month")===-1?a.dateObj.getMonth():e.currentMonth,l=i>0?e.config.showMonths:-1,p=i>0?1:-1,u=r-e.currentMonth;u!=l;u+=p)for(var y=e.daysContainer.children[u],g=r-e.currentMonth===u?a.$i+i:i<0?y.children.length-1:0,x=y.children.length,h=g;h>=0&&h<x&&h!=(i>0?x:-1);h+=p){var m=y.children[h];if(m.className.indexOf("hidden")===-1&&K(m.dateObj)&&Math.abs(a.$i-h)>=Math.abs(i))return ee(m)}e.changeMonth(p),pe(te(p),0)}function pe(a,i){var r=c(),l=we(r||document.body),p=a!==void 0?a:l?r:e.selectedDateElem!==void 0&&we(e.selectedDateElem)?e.selectedDateElem:e.todayDateElem!==void 0&&we(e.todayDateElem)?e.todayDateElem:te(i>0?1:-1);p===void 0?e._input.focus():l?Le(p,i):ee(p)}function Wt(a,i){for(var r=(new Date(a,i,1).getDay()-e.l10n.firstDayOfWeek+7)%7,l=e.utils.getDaysInMonth((i-1+12)%12,a),p=e.utils.getDaysInMonth(i,a),u=window.document.createDocumentFragment(),y=e.config.showMonths>1,g=y?"prevMonthDay hidden":"prevMonthDay",x=y?"nextMonthDay hidden":"nextMonthDay",h=l+1-r,m=0;h<=l;h++,m++)u.appendChild(q("flatpickr-day "+g,new Date(a,i-1,h),h,m));for(h=1;h<=p;h++,m++)u.appendChild(q("flatpickr-day",new Date(a,i,h),h,m));for(var C=p+1;C<=42-r&&(e.config.showMonths===1||m%7!==0);C++,m++)u.appendChild(q("flatpickr-day "+x,new Date(a,i+1,C%p),C,m));var Y=D("div","dayContainer");return Y.appendChild(u),Y}function ke(){if(e.daysContainer!==void 0){Se(e.daysContainer),e.weekNumbers&&Se(e.weekNumbers);for(var a=document.createDocumentFragment(),i=0;i<e.config.showMonths;i++){var r=new Date(e.currentYear,e.currentMonth,1);r.setMonth(e.currentMonth+i),a.appendChild(Wt(r.getFullYear(),r.getMonth()))}e.daysContainer.appendChild(a),e.days=e.daysContainer.firstChild,e.config.mode==="range"&&e.selectedDates.length===1&&xe()}}function ne(){if(!(e.config.showMonths>1||e.config.monthSelectorType!=="dropdown")){var a=function(l){return e.config.minDate!==void 0&&e.currentYear===e.config.minDate.getFullYear()&&l<e.config.minDate.getMonth()?!1:!(e.config.maxDate!==void 0&&e.currentYear===e.config.maxDate.getFullYear()&&l>e.config.maxDate.getMonth())};e.monthsDropdownContainer.tabIndex=-1,e.monthsDropdownContainer.innerHTML="";for(var i=0;i<12;i++)if(a(i)){var r=D("option","flatpickr-monthDropdown-month");r.value=new Date(e.currentYear,i).getMonth().toString(),r.textContent=Ae(i,e.config.shorthandCurrentMonth,e.l10n),r.tabIndex=-1,e.currentMonth===i&&(r.selected=!0),e.monthsDropdownContainer.appendChild(r)}}}function $t(){var a=D("div","flatpickr-month"),i=window.document.createDocumentFragment(),r;e.config.showMonths>1||e.config.monthSelectorType==="static"?r=D("span","cur-month"):(e.monthsDropdownContainer=D("select","flatpickr-monthDropdown-months"),e.monthsDropdownContainer.setAttribute("aria-label",e.l10n.monthAriaLabel),M(e.monthsDropdownContainer,"change",function(y){var g=F(y),x=parseInt(g.value,10);e.changeMonth(x-e.currentMonth),S("onMonthChange")}),ne(),r=e.monthsDropdownContainer);var l=Ee("cur-year",{tabindex:"-1"}),p=l.getElementsByTagName("input")[0];p.setAttribute("aria-label",e.l10n.yearAriaLabel),e.config.minDate&&p.setAttribute("min",e.config.minDate.getFullYear().toString()),e.config.maxDate&&(p.setAttribute("max",e.config.maxDate.getFullYear().toString()),p.disabled=!!e.config.minDate&&e.config.minDate.getFullYear()===e.config.maxDate.getFullYear());var u=D("div","flatpickr-current-month");return u.appendChild(r),u.appendChild(l),i.appendChild(u),a.appendChild(i),{container:a,yearElement:p,monthElement:r}}function lt(){Se(e.monthNav),e.monthNav.appendChild(e.prevMonthNav),e.config.showMonths&&(e.yearElements=[],e.monthElements=[]);for(var a=e.config.showMonths;a--;){var i=$t();e.yearElements.push(i.yearElement),e.monthElements.push(i.monthElement),e.monthNav.appendChild(i.container)}e.monthNav.appendChild(e.nextMonthNav)}function Bt(){return e.monthNav=D("div","flatpickr-months"),e.yearElements=[],e.monthElements=[],e.prevMonthNav=D("span","flatpickr-prev-month"),e.prevMonthNav.innerHTML=e.config.prevArrow,e.nextMonthNav=D("span","flatpickr-next-month"),e.nextMonthNav.innerHTML=e.config.nextArrow,lt(),Object.defineProperty(e,"_hidePrevMonthArrow",{get:function(){return e.__hidePrevMonthArrow},set:function(a){e.__hidePrevMonthArrow!==a&&(A(e.prevMonthNav,"flatpickr-disabled",a),e.__hidePrevMonthArrow=a)}}),Object.defineProperty(e,"_hideNextMonthArrow",{get:function(){return e.__hideNextMonthArrow},set:function(a){e.__hideNextMonthArrow!==a&&(A(e.nextMonthNav,"flatpickr-disabled",a),e.__hideNextMonthArrow=a)}}),e.currentYearElement=e.yearElements[0],Ce(),e.monthNav}function Ut(){e.calendarContainer.classList.add("hasTime"),e.config.noCalendar&&e.calendarContainer.classList.add("noCalendar");var a=Je(e.config);e.timeContainer=D("div","flatpickr-time"),e.timeContainer.tabIndex=-1;var i=D("span","flatpickr-time-separator",":"),r=Ee("flatpickr-hour",{"aria-label":e.l10n.hourAriaLabel});e.hourElement=r.getElementsByTagName("input")[0];var l=Ee("flatpickr-minute",{"aria-label":e.l10n.minuteAriaLabel});if(e.minuteElement=l.getElementsByTagName("input")[0],e.hourElement.tabIndex=e.minuteElement.tabIndex=-1,e.hourElement.value=R(e.latestSelectedDateObj?e.latestSelectedDateObj.getHours():e.config.time_24hr?a.hours:w(a.hours)),e.minuteElement.value=R(e.latestSelectedDateObj?e.latestSelectedDateObj.getMinutes():a.minutes),e.hourElement.setAttribute("step",e.config.hourIncrement.toString()),e.minuteElement.setAttribute("step",e.config.minuteIncrement.toString()),e.hourElement.setAttribute("min",e.config.time_24hr?"0":"1"),e.hourElement.setAttribute("max",e.config.time_24hr?"23":"12"),e.hourElement.setAttribute("maxlength","2"),e.minuteElement.setAttribute("min","0"),e.minuteElement.setAttribute("max","59"),e.minuteElement.setAttribute("maxlength","2"),e.timeContainer.appendChild(r),e.timeContainer.appendChild(i),e.timeContainer.appendChild(l),e.config.time_24hr&&e.timeContainer.classList.add("time24hr"),e.config.enableSeconds){e.timeContainer.classList.add("hasSeconds");var p=Ee("flatpickr-second");e.secondElement=p.getElementsByTagName("input")[0],e.secondElement.value=R(e.latestSelectedDateObj?e.latestSelectedDateObj.getSeconds():a.seconds),e.secondElement.setAttribute("step",e.minuteElement.getAttribute("step")),e.secondElement.setAttribute("min","0"),e.secondElement.setAttribute("max","59"),e.secondElement.setAttribute("maxlength","2"),e.timeContainer.appendChild(D("span","flatpickr-time-separator",":")),e.timeContainer.appendChild(p)}return e.config.time_24hr||(e.amPM=D("span","flatpickr-am-pm",e.l10n.amPM[L((e.latestSelectedDateObj?e.hourElement.value:e.config.defaultHour)>11)]),e.amPM.title=e.l10n.toggleTitle,e.amPM.tabIndex=-1,e.timeContainer.appendChild(e.amPM)),e.timeContainer}function st(){e.weekdayContainer?Se(e.weekdayContainer):e.weekdayContainer=D("div","flatpickr-weekdays");for(var a=e.config.showMonths;a--;){var i=D("div","flatpickr-weekdaycontainer");e.weekdayContainer.appendChild(i)}return ct(),e.weekdayContainer}function ct(){if(e.weekdayContainer){var a=e.l10n.firstDayOfWeek,i=xt(e.l10n.weekdays.shorthand);a>0&&a<i.length&&(i=xt(i.splice(a,i.length),i.splice(0,a)));for(var r=e.config.showMonths;r--;)e.weekdayContainer.children[r].innerHTML=`
      <span class='flatpickr-weekday'>
        `+i.join("</span><span class='flatpickr-weekday'>")+`
      </span>
      `}}function qt(){e.calendarContainer.classList.add("hasWeeks");var a=D("div","flatpickr-weekwrapper");a.appendChild(D("span","flatpickr-weekday",e.l10n.weekAbbreviation));var i=D("div","flatpickr-weeks");return a.appendChild(i),{weekWrapper:a,weekNumbers:i}}function He(a,i){i===void 0&&(i=!0);var r=i?a:a-e.currentMonth;r<0&&e._hidePrevMonthArrow===!0||r>0&&e._hideNextMonthArrow===!0||(e.currentMonth+=r,(e.currentMonth<0||e.currentMonth>11)&&(e.currentYear+=e.currentMonth>11?1:-1,e.currentMonth=(e.currentMonth+12)%12,S("onYearChange"),ne()),ke(),S("onMonthChange"),Ce())}function Kt(a,i){if(a===void 0&&(a=!0),i===void 0&&(i=!0),e.input.value="",e.altInput!==void 0&&(e.altInput.value=""),e.mobileInput!==void 0&&(e.mobileInput.value=""),e.selectedDates=[],e.latestSelectedDateObj=void 0,i===!0&&(e.currentYear=e._initialDate.getFullYear(),e.currentMonth=e._initialDate.getMonth()),e.config.enableTime===!0){var r=Je(e.config),l=r.hours,p=r.minutes,u=r.seconds;N(l,p,u)}e.redraw(),a&&S("onChange")}function Jt(){e.isOpen=!1,e.isMobile||(e.calendarContainer!==void 0&&e.calendarContainer.classList.remove("open"),e._input!==void 0&&e._input.classList.remove("active")),S("onClose")}function Zt(){e.config!==void 0&&S("onDestroy");for(var a=e._handlers.length;a--;)e._handlers[a].remove();if(e._handlers=[],e.mobileInput)e.mobileInput.parentNode&&e.mobileInput.parentNode.removeChild(e.mobileInput),e.mobileInput=void 0;else if(e.calendarContainer&&e.calendarContainer.parentNode)if(e.config.static&&e.calendarContainer.parentNode){var i=e.calendarContainer.parentNode;if(i.lastChild&&i.removeChild(i.lastChild),i.parentNode){for(;i.firstChild;)i.parentNode.insertBefore(i.firstChild,i);i.parentNode.removeChild(i)}}else e.calendarContainer.parentNode.removeChild(e.calendarContainer);e.altInput&&(e.input.type="text",e.altInput.parentNode&&e.altInput.parentNode.removeChild(e.altInput),delete e.altInput),e.input&&(e.input.type=e.input._type,e.input.classList.remove("flatpickr-input"),e.input.removeAttribute("readonly")),["_showTimeInput","latestSelectedDateObj","_hideNextMonthArrow","_hidePrevMonthArrow","__hideNextMonthArrow","__hidePrevMonthArrow","isMobile","isOpen","selectedDateElem","minDateHasTime","maxDateHasTime","days","daysContainer","_input","_positionElement","innerContainer","rContainer","monthNav","todayDateElem","calendarContainer","weekdayContainer","prevMonthNav","nextMonthNav","monthsDropdownContainer","currentMonthElement","currentYearElement","navigationCurrentMonth","selectedDateElem","config"].forEach(function(r){try{delete e[r]}catch{}})}function ue(a){return e.calendarContainer.contains(a)}function Ye(a){if(e.isOpen&&!e.config.inline){var i=F(a),r=ue(i),l=i===e.input||i===e.altInput||e.element.contains(i)||a.path&&a.path.indexOf&&(~a.path.indexOf(e.input)||~a.path.indexOf(e.altInput)),p=!l&&!r&&!ue(a.relatedTarget),u=!e.config.ignoredFocusElements.some(function(y){return y.contains(i)});p&&u&&(e.config.allowInput&&e.setDate(e._input.value,!1,e.config.altInput?e.config.altFormat:e.config.dateFormat),e.timeContainer!==void 0&&e.minuteElement!==void 0&&e.hourElement!==void 0&&e.input.value!==""&&e.input.value!==void 0&&d(),e.close(),e.config&&e.config.mode==="range"&&e.selectedDates.length===1&&e.clear(!1))}}function ye(a){if(!(!a||e.config.minDate&&a<e.config.minDate.getFullYear()||e.config.maxDate&&a>e.config.maxDate.getFullYear())){var i=a,r=e.currentYear!==i;e.currentYear=i||e.currentYear,e.config.maxDate&&e.currentYear===e.config.maxDate.getFullYear()?e.currentMonth=Math.min(e.config.maxDate.getMonth(),e.currentMonth):e.config.minDate&&e.currentYear===e.config.minDate.getFullYear()&&(e.currentMonth=Math.max(e.config.minDate.getMonth(),e.currentMonth)),r&&(e.redraw(),S("onYearChange"),ne())}}function K(a,i){var r;i===void 0&&(i=!0);var l=e.parseDate(a,void 0,i);if(e.config.minDate&&l&&_(l,e.config.minDate,i!==void 0?i:!e.minDateHasTime)<0||e.config.maxDate&&l&&_(l,e.config.maxDate,i!==void 0?i:!e.maxDateHasTime)>0)return!1;if(!e.config.enable&&e.config.disable.length===0)return!0;if(l===void 0)return!1;for(var p=!!e.config.enable,u=(r=e.config.enable)!==null&&r!==void 0?r:e.config.disable,y=0,g=void 0;y<u.length;y++){if(g=u[y],typeof g=="function"&&g(l))return p;if(g instanceof Date&&l!==void 0&&g.getTime()===l.getTime())return p;if(typeof g=="string"){var x=e.parseDate(g,void 0,!0);return x&&x.getTime()===l.getTime()?p:!p}else if(typeof g=="object"&&l!==void 0&&g.from&&g.to&&l.getTime()>=g.from.getTime()&&l.getTime()<=g.to.getTime())return p}return!p}function we(a){return e.daysContainer!==void 0?a.className.indexOf("hidden")===-1&&a.className.indexOf("flatpickr-disabled")===-1&&e.daysContainer.contains(a):!1}function Gt(a){var i=a.target===e._input,r=e._input.value.trimEnd()!==We();i&&r&&!(a.relatedTarget&&ue(a.relatedTarget))&&e.setDate(e._input.value,!0,a.target===e.altInput?e.config.altFormat:e.config.dateFormat)}function dt(a){var i=F(a),r=e.config.wrap?t.contains(i):i===e._input,l=e.config.allowInput,p=e.isOpen&&(!l||!r),u=e.config.inline&&r&&!l;if(a.keyCode===13&&r){if(l)return e.setDate(e._input.value,!0,i===e.altInput?e.config.altFormat:e.config.dateFormat),e.close(),i.blur();e.open()}else if(ue(i)||p||u){var y=!!e.timeContainer&&e.timeContainer.contains(i);switch(a.keyCode){case 13:y?(a.preventDefault(),d(),je()):gt(a);break;case 27:a.preventDefault(),je();break;case 8:case 46:r&&!e.config.allowInput&&(a.preventDefault(),e.clear());break;case 37:case 39:if(!y&&!r){a.preventDefault();var g=c();if(e.daysContainer!==void 0&&(l===!1||g&&we(g))){var x=a.keyCode===39?1:-1;a.ctrlKey?(a.stopPropagation(),He(x),pe(te(1),0)):pe(void 0,x)}}else e.hourElement&&e.hourElement.focus();break;case 38:case 40:a.preventDefault();var h=a.keyCode===40?1:-1;e.daysContainer&&i.$i!==void 0||i===e.input||i===e.altInput?a.ctrlKey?(a.stopPropagation(),ye(e.currentYear-h),pe(te(1),0)):y||pe(void 0,h*7):i===e.currentYearElement?ye(e.currentYear-h):e.config.enableTime&&(!y&&e.hourElement&&e.hourElement.focus(),d(a),e._debouncedChange());break;case 9:if(y){var m=[e.hourElement,e.minuteElement,e.secondElement,e.amPM].concat(e.pluginElements).filter(function(O){return O}),C=m.indexOf(i);if(C!==-1){var Y=m[C+(a.shiftKey?-1:1)];a.preventDefault(),(Y||e._input).focus()}}else!e.config.noCalendar&&e.daysContainer&&e.daysContainer.contains(i)&&a.shiftKey&&(a.preventDefault(),e._input.focus());break}}if(e.amPM!==void 0&&i===e.amPM)switch(a.key){case e.l10n.amPM[0].charAt(0):case e.l10n.amPM[0].charAt(0).toLowerCase():e.amPM.textContent=e.l10n.amPM[0],E(),V();break;case e.l10n.amPM[1].charAt(0):case e.l10n.amPM[1].charAt(0).toLowerCase():e.amPM.textContent=e.l10n.amPM[1],E(),V();break}(r||ue(i))&&S("onKeyDown",a)}function xe(a,i){if(i===void 0&&(i="flatpickr-day"),!(e.selectedDates.length!==1||a&&(!a.classList.contains(i)||a.classList.contains("flatpickr-disabled")))){for(var r=a?a.dateObj.getTime():e.days.firstElementChild.dateObj.getTime(),l=e.parseDate(e.selectedDates[0],void 0,!0).getTime(),p=Math.min(r,e.selectedDates[0].getTime()),u=Math.max(r,e.selectedDates[0].getTime()),y=!1,g=0,x=0,h=p;h<u;h+=$n.DAY)K(new Date(h),!0)||(y=y||h>p&&h<u,h<l&&(!g||h>g)?g=h:h>l&&(!x||h<x)&&(x=h));var m=Array.from(e.rContainer.querySelectorAll("*:nth-child(-n+"+e.config.showMonths+") > ."+i));m.forEach(function(C){var Y=C.dateObj,O=Y.getTime(),fe=g>0&&O<g||x>0&&O>x;if(fe){C.classList.add("notAllowed"),["inRange","startRange","endRange"].forEach(function(ae){C.classList.remove(ae)});return}else if(y&&!fe)return;["startRange","inRange","endRange","notAllowed"].forEach(function(ae){C.classList.remove(ae)}),a!==void 0&&(a.classList.add(r<=e.selectedDates[0].getTime()?"startRange":"endRange"),l<r&&O===l?C.classList.add("startRange"):l>r&&O===l&&C.classList.add("endRange"),O>=g&&(x===0||O<=x)&&zn(O,l,r)&&C.classList.add("inRange"))})}}function Xt(){e.isOpen&&!e.config.static&&!e.config.inline&&De()}function Qt(a,i){if(i===void 0&&(i=e._positionElement),e.isMobile===!0){if(a){a.preventDefault();var r=F(a);r&&r.blur()}e.mobileInput!==void 0&&(e.mobileInput.focus(),e.mobileInput.click()),S("onOpen");return}else if(e._input.disabled||e.config.inline)return;var l=e.isOpen;e.isOpen=!0,l||(e.calendarContainer.classList.add("open"),e._input.classList.add("active"),S("onOpen"),De(i)),e.config.enableTime===!0&&e.config.noCalendar===!0&&e.config.allowInput===!1&&(a===void 0||!e.timeContainer.contains(a.relatedTarget))&&setTimeout(function(){return e.hourElement.select()},50)}function pt(a){return function(i){var r=e.config["_"+a+"Date"]=e.parseDate(i,e.config.dateFormat),l=e.config["_"+(a==="min"?"max":"min")+"Date"];r!==void 0&&(e[a==="min"?"minDateHasTime":"maxDateHasTime"]=r.getHours()>0||r.getMinutes()>0||r.getSeconds()>0),e.selectedDates&&(e.selectedDates=e.selectedDates.filter(function(p){return K(p)}),!e.selectedDates.length&&a==="min"&&P(r),V()),e.daysContainer&&(ht(),r!==void 0?e.currentYearElement[a]=r.getFullYear().toString():e.currentYearElement.removeAttribute(a),e.currentYearElement.disabled=!!l&&r!==void 0&&l.getFullYear()===r.getFullYear())}}function en(){var a=["wrap","weekNumbers","allowInput","allowInvalidPreload","clickOpens","time_24hr","enableTime","noCalendar","altInput","shorthandCurrentMonth","inline","static","enableSeconds","disableMobile"],i=T(T({},JSON.parse(JSON.stringify(t.dataset||{}))),n),r={};e.config.parseDate=i.parseDate,e.config.formatDate=i.formatDate,Object.defineProperty(e.config,"enable",{get:function(){return e.config._enable},set:function(m){e.config._enable=vt(m)}}),Object.defineProperty(e.config,"disable",{get:function(){return e.config._disable},set:function(m){e.config._disable=vt(m)}});var l=i.mode==="time";if(!i.dateFormat&&(i.enableTime||l)){var p=k.defaultConfig.dateFormat||oe.dateFormat;r.dateFormat=i.noCalendar||l?"H:i"+(i.enableSeconds?":S":""):p+" H:i"+(i.enableSeconds?":S":"")}if(i.altInput&&(i.enableTime||l)&&!i.altFormat){var u=k.defaultConfig.altFormat||oe.altFormat;r.altFormat=i.noCalendar||l?"h:i"+(i.enableSeconds?":S K":" K"):u+(" h:i"+(i.enableSeconds?":S":"")+" K")}Object.defineProperty(e.config,"minDate",{get:function(){return e.config._minDate},set:pt("min")}),Object.defineProperty(e.config,"maxDate",{get:function(){return e.config._maxDate},set:pt("max")});var y=function(m){return function(C){e.config[m==="min"?"_minTime":"_maxTime"]=e.parseDate(C,"H:i:S")}};Object.defineProperty(e.config,"minTime",{get:function(){return e.config._minTime},set:y("min")}),Object.defineProperty(e.config,"maxTime",{get:function(){return e.config._maxTime},set:y("max")}),i.mode==="time"&&(e.config.noCalendar=!0,e.config.enableTime=!0),Object.assign(e.config,r,i);for(var g=0;g<a.length;g++)e.config[a[g]]=e.config[a[g]]===!0||e.config[a[g]]==="true";Be.filter(function(m){return e.config[m]!==void 0}).forEach(function(m){e.config[m]=Ue(e.config[m]||[]).map(f)}),e.isMobile=!e.config.disableMobile&&!e.config.inline&&e.config.mode==="single"&&!e.config.disable.length&&!e.config.enable&&!e.config.weekNumbers&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);for(var g=0;g<e.config.plugins.length;g++){var x=e.config.plugins[g](e)||{};for(var h in x)Be.indexOf(h)>-1?e.config[h]=Ue(x[h]).map(f).concat(e.config[h]):typeof i[h]>"u"&&(e.config[h]=x[h])}i.altInputClass||(e.config.altInputClass=ut().className+" "+e.config.altInputClass),S("onParseConfig")}function ut(){return e.config.wrap?t.querySelector("[data-input]"):t}function ft(){typeof e.config.locale!="object"&&typeof k.l10ns[e.config.locale]>"u"&&e.config.errorHandler(new Error("flatpickr: invalid locale "+e.config.locale)),e.l10n=T(T({},k.l10ns.default),typeof e.config.locale=="object"?e.config.locale:e.config.locale!=="default"?k.l10ns[e.config.locale]:void 0),Z.D="("+e.l10n.weekdays.shorthand.join("|")+")",Z.l="("+e.l10n.weekdays.longhand.join("|")+")",Z.M="("+e.l10n.months.shorthand.join("|")+")",Z.F="("+e.l10n.months.longhand.join("|")+")",Z.K="("+e.l10n.amPM[0]+"|"+e.l10n.amPM[1]+"|"+e.l10n.amPM[0].toLowerCase()+"|"+e.l10n.amPM[1].toLowerCase()+")";var a=T(T({},n),JSON.parse(JSON.stringify(t.dataset||{})));a.time_24hr===void 0&&k.defaultConfig.time_24hr===void 0&&(e.config.time_24hr=e.l10n.time_24hr),e.formatDate=Nt(e),e.parseDate=et({config:e.config,l10n:e.l10n})}function De(a){if(typeof e.config.position=="function")return void e.config.position(e,a);if(e.calendarContainer!==void 0){S("onPreCalendarPosition");var i=a||e._positionElement,r=Array.prototype.reduce.call(e.calendarContainer.children,(function(yn,wn){return yn+wn.offsetHeight}),0),l=e.calendarContainer.offsetWidth,p=e.config.position.split(" "),u=p[0],y=p.length>1?p[1]:null,g=i.getBoundingClientRect(),x=window.innerHeight-g.bottom,h=u==="above"||u!=="below"&&x<r&&g.top>r,m=window.pageYOffset+g.top+(h?-r-2:i.offsetHeight+2);if(A(e.calendarContainer,"arrowTop",!h),A(e.calendarContainer,"arrowBottom",h),!e.config.inline){var C=window.pageXOffset+g.left,Y=!1,O=!1;y==="center"?(C-=(l-g.width)/2,Y=!0):y==="right"&&(C-=l-g.width,O=!0),A(e.calendarContainer,"arrowLeft",!Y&&!O),A(e.calendarContainer,"arrowCenter",Y),A(e.calendarContainer,"arrowRight",O);var fe=window.document.body.offsetWidth-(window.pageXOffset+g.right),ae=C+l>window.document.body.offsetWidth,fn=fe+l>window.document.body.offsetWidth;if(A(e.calendarContainer,"rightMost",ae),!e.config.static)if(e.calendarContainer.style.top=m+"px",!ae)e.calendarContainer.style.left=C+"px",e.calendarContainer.style.right="auto";else if(!fn)e.calendarContainer.style.left="auto",e.calendarContainer.style.right=fe+"px";else{var $e=tn();if($e===void 0)return;var hn=window.document.body.offsetWidth,gn=Math.max(0,hn/2-l/2),mn=".flatpickr-calendar.centerMost:before",vn=".flatpickr-calendar.centerMost:after",bn=$e.cssRules.length,kn="{left:"+g.left+"px;right:auto;}";A(e.calendarContainer,"rightMost",!1),A(e.calendarContainer,"centerMost",!0),$e.insertRule(mn+","+vn+kn,bn),e.calendarContainer.style.left=gn+"px",e.calendarContainer.style.right="auto"}}}}function tn(){for(var a=null,i=0;i<document.styleSheets.length;i++){var r=document.styleSheets[i];if(r.cssRules){try{r.cssRules}catch{continue}a=r;break}}return a??nn()}function nn(){var a=document.createElement("style");return document.head.appendChild(a),a.sheet}function ht(){e.config.noCalendar||e.isMobile||(ne(),Ce(),ke())}function je(){e._input.focus(),window.navigator.userAgent.indexOf("MSIE")!==-1||navigator.msMaxTouchPoints!==void 0?setTimeout(e.close,0):e.close()}function gt(a){a.preventDefault(),a.stopPropagation();var i=function(m){return m.classList&&m.classList.contains("flatpickr-day")&&!m.classList.contains("flatpickr-disabled")&&!m.classList.contains("notAllowed")},r=_t(F(a),i);if(r!==void 0){var l=r,p=e.latestSelectedDateObj=new Date(l.dateObj.getTime()),u=(p.getMonth()<e.currentMonth||p.getMonth()>e.currentMonth+e.config.showMonths-1)&&e.config.mode!=="range";if(e.selectedDateElem=l,e.config.mode==="single")e.selectedDates=[p];else if(e.config.mode==="multiple"){var y=ze(p);y?e.selectedDates.splice(parseInt(y),1):e.selectedDates.push(p)}else e.config.mode==="range"&&(e.selectedDates.length===2&&e.clear(!1,!1),e.latestSelectedDateObj=p,e.selectedDates.push(p),_(p,e.selectedDates[0],!0)!==0&&e.selectedDates.sort(function(m,C){return m.getTime()-C.getTime()}));if(E(),u){var g=e.currentYear!==p.getFullYear();e.currentYear=p.getFullYear(),e.currentMonth=p.getMonth(),g&&(S("onYearChange"),ne()),S("onMonthChange")}if(Ce(),ke(),V(),!u&&e.config.mode!=="range"&&e.config.showMonths===1?ee(l):e.selectedDateElem!==void 0&&e.hourElement===void 0&&e.selectedDateElem&&e.selectedDateElem.focus(),e.hourElement!==void 0&&e.hourElement!==void 0&&e.hourElement.focus(),e.config.closeOnSelect){var x=e.config.mode==="single"&&!e.config.enableTime,h=e.config.mode==="range"&&e.selectedDates.length===2&&!e.config.enableTime;(x||h)&&je()}B()}}var Me={locale:[ft,ct],showMonths:[lt,v,st],minDate:[W],maxDate:[W],positionElement:[bt],clickOpens:[function(){e.config.clickOpens===!0?(M(e._input,"focus",e.open),M(e._input,"click",e.open)):(e._input.removeEventListener("focus",e.open),e._input.removeEventListener("click",e.open))}]};function an(a,i){if(a!==null&&typeof a=="object"){Object.assign(e.config,a);for(var r in a)Me[r]!==void 0&&Me[r].forEach(function(l){return l()})}else e.config[a]=i,Me[a]!==void 0?Me[a].forEach(function(l){return l()}):Be.indexOf(a)>-1&&(e.config[a]=Ue(i));e.redraw(),V(!0)}function mt(a,i){var r=[];if(a instanceof Array)r=a.map(function(l){return e.parseDate(l,i)});else if(a instanceof Date||typeof a=="number")r=[e.parseDate(a,i)];else if(typeof a=="string")switch(e.config.mode){case"single":case"time":r=[e.parseDate(a,i)];break;case"multiple":r=a.split(e.config.conjunction).map(function(l){return e.parseDate(l,i)});break;case"range":r=a.split(e.l10n.rangeSeparator).map(function(l){return e.parseDate(l,i)});break}else e.config.errorHandler(new Error("Invalid date supplied: "+JSON.stringify(a)));e.selectedDates=e.config.allowInvalidPreload?r:r.filter(function(l){return l instanceof Date&&K(l,!1)}),e.config.mode==="range"&&e.selectedDates.sort(function(l,p){return l.getTime()-p.getTime()})}function rn(a,i,r){if(i===void 0&&(i=!1),r===void 0&&(r=e.config.dateFormat),a!==0&&!a||a instanceof Array&&a.length===0)return e.clear(i);mt(a,r),e.latestSelectedDateObj=e.selectedDates[e.selectedDates.length-1],e.redraw(),W(void 0,i),P(),e.selectedDates.length===0&&e.clear(!1),V(i),i&&S("onChange")}function vt(a){return a.slice().map(function(i){return typeof i=="string"||typeof i=="number"||i instanceof Date?e.parseDate(i,void 0,!0):i&&typeof i=="object"&&i.from&&i.to?{from:e.parseDate(i.from,void 0),to:e.parseDate(i.to,void 0)}:i}).filter(function(i){return i})}function on(){e.selectedDates=[],e.now=e.parseDate(e.config.now)||new Date;var a=e.config.defaultDate||((e.input.nodeName==="INPUT"||e.input.nodeName==="TEXTAREA")&&e.input.placeholder&&e.input.value===e.input.placeholder?null:e.input.value);a&&mt(a,e.config.dateFormat),e._initialDate=e.selectedDates.length>0?e.selectedDates[0]:e.config.minDate&&e.config.minDate.getTime()>e.now.getTime()?e.config.minDate:e.config.maxDate&&e.config.maxDate.getTime()<e.now.getTime()?e.config.maxDate:e.now,e.currentYear=e._initialDate.getFullYear(),e.currentMonth=e._initialDate.getMonth(),e.selectedDates.length>0&&(e.latestSelectedDateObj=e.selectedDates[0]),e.config.minTime!==void 0&&(e.config.minTime=e.parseDate(e.config.minTime,"H:i")),e.config.maxTime!==void 0&&(e.config.maxTime=e.parseDate(e.config.maxTime,"H:i")),e.minDateHasTime=!!e.config.minDate&&(e.config.minDate.getHours()>0||e.config.minDate.getMinutes()>0||e.config.minDate.getSeconds()>0),e.maxDateHasTime=!!e.config.maxDate&&(e.config.maxDate.getHours()>0||e.config.maxDate.getMinutes()>0||e.config.maxDate.getSeconds()>0)}function ln(){if(e.input=ut(),!e.input){e.config.errorHandler(new Error("Invalid input element specified"));return}e.input._type=e.input.type,e.input.type="text",e.input.classList.add("flatpickr-input"),e._input=e.input,e.config.altInput&&(e.altInput=D(e.input.nodeName,e.config.altInputClass),e._input=e.altInput,e.altInput.placeholder=e.input.placeholder,e.altInput.disabled=e.input.disabled,e.altInput.required=e.input.required,e.altInput.tabIndex=e.input.tabIndex,e.altInput.type="text",e.input.setAttribute("type","hidden"),!e.config.static&&e.input.parentNode&&e.input.parentNode.insertBefore(e.altInput,e.input.nextSibling)),e.config.allowInput||e._input.setAttribute("readonly","readonly"),bt()}function bt(){e._positionElement=e.config.positionElement||e._input}function sn(){var a=e.config.enableTime?e.config.noCalendar?"time":"datetime-local":"date";e.mobileInput=D("input",e.input.className+" flatpickr-mobile"),e.mobileInput.tabIndex=1,e.mobileInput.type=a,e.mobileInput.disabled=e.input.disabled,e.mobileInput.required=e.input.required,e.mobileInput.placeholder=e.input.placeholder,e.mobileFormatStr=a==="datetime-local"?"Y-m-d\\TH:i:S":a==="date"?"Y-m-d":"H:i:S",e.selectedDates.length>0&&(e.mobileInput.defaultValue=e.mobileInput.value=e.formatDate(e.selectedDates[0],e.mobileFormatStr)),e.config.minDate&&(e.mobileInput.min=e.formatDate(e.config.minDate,"Y-m-d")),e.config.maxDate&&(e.mobileInput.max=e.formatDate(e.config.maxDate,"Y-m-d")),e.input.getAttribute("step")&&(e.mobileInput.step=String(e.input.getAttribute("step"))),e.input.type="hidden",e.altInput!==void 0&&(e.altInput.type="hidden");try{e.input.parentNode&&e.input.parentNode.insertBefore(e.mobileInput,e.input.nextSibling)}catch{}M(e.mobileInput,"change",function(i){e.setDate(F(i).value,!1,e.mobileFormatStr),S("onChange"),S("onClose")})}function cn(a){if(e.isOpen===!0)return e.close();e.open(a)}function S(a,i){if(e.config!==void 0){var r=e.config[a];if(r!==void 0&&r.length>0)for(var l=0;r[l]&&l<r.length;l++)r[l](e.selectedDates,e.input.value,e,i);a==="onChange"&&(e.input.dispatchEvent(Ve("change")),e.input.dispatchEvent(Ve("input")))}}function Ve(a){var i=document.createEvent("Event");return i.initEvent(a,!0,!0),i}function ze(a){for(var i=0;i<e.selectedDates.length;i++){var r=e.selectedDates[i];if(r instanceof Date&&_(r,a)===0)return""+i}return!1}function dn(a){return e.config.mode!=="range"||e.selectedDates.length<2?!1:_(a,e.selectedDates[0])>=0&&_(a,e.selectedDates[1])<=0}function Ce(){e.config.noCalendar||e.isMobile||!e.monthNav||(e.yearElements.forEach(function(a,i){var r=new Date(e.currentYear,e.currentMonth,1);r.setMonth(e.currentMonth+i),e.config.showMonths>1||e.config.monthSelectorType==="static"?e.monthElements[i].textContent=Ae(r.getMonth(),e.config.shorthandCurrentMonth,e.l10n)+" ":e.monthsDropdownContainer.value=r.getMonth().toString(),a.value=r.getFullYear().toString()}),e._hidePrevMonthArrow=e.config.minDate!==void 0&&(e.currentYear===e.config.minDate.getFullYear()?e.currentMonth<=e.config.minDate.getMonth():e.currentYear<e.config.minDate.getFullYear()),e._hideNextMonthArrow=e.config.maxDate!==void 0&&(e.currentYear===e.config.maxDate.getFullYear()?e.currentMonth+1>e.config.maxDate.getMonth():e.currentYear>e.config.maxDate.getFullYear()))}function We(a){var i=a||(e.config.altInput?e.config.altFormat:e.config.dateFormat);return e.selectedDates.map(function(r){return e.formatDate(r,i)}).filter(function(r,l,p){return e.config.mode!=="range"||e.config.enableTime||p.indexOf(r)===l}).join(e.config.mode!=="range"?e.config.conjunction:e.l10n.rangeSeparator)}function V(a){a===void 0&&(a=!0),e.mobileInput!==void 0&&e.mobileFormatStr&&(e.mobileInput.value=e.latestSelectedDateObj!==void 0?e.formatDate(e.latestSelectedDateObj,e.mobileFormatStr):""),e.input.value=We(e.config.dateFormat),e.altInput!==void 0&&(e.altInput.value=We(e.config.altFormat)),a!==!1&&S("onValueUpdate")}function pn(a){var i=F(a),r=e.prevMonthNav.contains(i),l=e.nextMonthNav.contains(i);r||l?He(r?-1:1):e.yearElements.indexOf(i)>=0?i.select():i.classList.contains("arrowUp")?e.changeYear(e.currentYear+1):i.classList.contains("arrowDown")&&e.changeYear(e.currentYear-1)}function un(a){a.preventDefault();var i=a.type==="keydown",r=F(a),l=r;e.amPM!==void 0&&r===e.amPM&&(e.amPM.textContent=e.l10n.amPM[L(e.amPM.textContent===e.l10n.amPM[0])]);var p=parseFloat(l.getAttribute("min")),u=parseFloat(l.getAttribute("max")),y=parseFloat(l.getAttribute("step")),g=parseInt(l.value,10),x=a.delta||(i?a.which===38?1:-1:0),h=g+y*x;if(typeof l.value<"u"&&l.value.length===2){var m=l===e.hourElement,C=l===e.minuteElement;h<p?(h=u+h+L(!m)+(L(m)&&L(!e.amPM)),C&&Q(void 0,-1,e.hourElement)):h>u&&(h=l===e.hourElement?h-u-L(!e.amPM):p,C&&Q(void 0,1,e.hourElement)),e.amPM&&m&&(y===1?h+g===23:Math.abs(h-g)>y)&&(e.amPM.textContent=e.l10n.amPM[L(e.amPM.textContent===e.l10n.amPM[0])]),l.value=R(h)}}return s(),e}function le(t,n){for(var e=Array.prototype.slice.call(t).filter(function(f){return f instanceof HTMLElement}),o=[],s=0;s<e.length;s++){var c=e[s];try{if(c.getAttribute("data-fp-omit")!==null)continue;c._flatpickr!==void 0&&(c._flatpickr.destroy(),c._flatpickr=void 0),c._flatpickr=Un(c,n||{}),o.push(c._flatpickr)}catch(f){console.error(f)}}return o.length===1?o[0]:o}typeof HTMLElement<"u"&&typeof HTMLCollection<"u"&&typeof NodeList<"u"&&(HTMLCollection.prototype.flatpickr=NodeList.prototype.flatpickr=function(t){return le(this,t)},HTMLElement.prototype.flatpickr=function(t){return le([this],t)});var k=function(t,n){return typeof t=="string"?le(window.document.querySelectorAll(t),n):t instanceof Node?le([t],n):le(t,n)};k.defaultConfig={};k.l10ns={en:T({},me),default:T({},me)};k.localize=function(t){k.l10ns.default=T(T({},k.l10ns.default),t)};k.setDefaults=function(t){k.defaultConfig=T(T({},k.defaultConfig),t)};k.parseDate=et({});k.formatDate=Nt({});k.compareDates=_;typeof jQuery<"u"&&typeof jQuery.fn<"u"&&(jQuery.fn.flatpickr=function(t){return le(this,t)});Date.prototype.fp_incr=function(t){return new Date(this.getFullYear(),this.getMonth(),this.getDate()+(typeof t=="string"?parseInt(t,10):t))};typeof window<"u"&&(window.flatpickr=k);var he={exports:{}},qn=he.exports,Dt;function Kn(){return Dt||(Dt=1,(function(t,n){(function(e,o){o(n)})(qn,(function(e){var o=typeof window<"u"&&window.flatpickr!==void 0?window.flatpickr:{l10ns:{}},s={weekdays:{shorthand:["zo","ma","di","wo","do","vr","za"],longhand:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"]},months:{shorthand:["jan","feb","mrt","apr","mei","jun","jul","aug","sept","okt","nov","dec"],longhand:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"]},firstDayOfWeek:1,weekAbbreviation:"wk",rangeSeparator:" t/m ",scrollTitle:"Scroll voor volgende / vorige",toggleTitle:"Klik om te wisselen",time_24hr:!0,ordinal:function(f){return f===1||f===8||f>=20?"ste":"de"}};o.l10ns.nl=s;var c=o.l10ns;e.Dutch=s,e.default=c,Object.defineProperty(e,"__esModule",{value:!0})}))})(he,he.exports)),he.exports}var Jn=Kn();const ie=xn(Jn),Zn=t=>{if(!t)return null;let n=null;const e=t.split(/[dmyY]/).filter(c=>c),o=t.split(/[.*+-/_:]/);if(o.filter(c=>!["d","m","Y","y"].includes(c)).length)return null;const s=o.reduce((c,f)=>f==="Y"?c+4:c+2,0);return n={date:!0,datePattern:o,delimiters:e,regex:new RegExp(`^[0-9]{${s}}$`)},n},Gn=t=>{if(!t)return null;const n=t.split(/[HhiS]/).filter(s=>s);let e=!0;const o=t.split(/[.*+-/_:]/).map(s=>{switch(s){case"H":return"h";case"h":return e=!1,"h";case"i":return"m";case"S":return"s";default:return s}});return o.filter(s=>!["h","m","s"].includes(s)).length?null:{time:!0,timePattern:o,timeFormat:e?"24":"12",delimiters:n,regex:new RegExp(`^[0-9]{${o.length*2}}$`)}},Lt=t=>{const n=new Date(0);return n.setUTCHours(t.getUTCHours(),t.getUTCMinutes(),t.getUTCSeconds(),t.getUTCMilliseconds()),n},Ht=(t,n)=>{const{type:e,format:o,maxDate:s,maxTime:c,minDate:f,minTime:v}=t,d=b=>{if(b==="today"){const w=new Date;return w.setHours(0,0,0,0),w}return k.parseDate(b,o)};if(n==="max"){if(["date","date-time","range"].includes(e)&&s)return d(s);if(e==="time"&&c)return k.parseDate(c,o)}else{if(["date","date-time","range"].includes(e)&&f)return d(f);if(e==="time"&&v)return k.parseDate(v,o)}},Xn={key:"patternMismatch",message:"Waarde voldoet niet aan het opgegeven patroon.",isValid(t,n){const{disableMaskValidation:e,cleaveInstance:o,inputValue:s}=t,c=t.regex||t.pattern;if(!n||!c&&(!o||e))return!0;if(o&&!e&&t.maskOptions?.regex){const f=o.getRawValue();return new RegExp(t.maskOptions.regex).test(f)}else return new RegExp(c).test(s)}},Qn={key:"rangeOverflow",message:"Waarde overschrijdt het toegestane maximum.",isValid(t,n){const{type:e}=t;if(!n||!(typeof n=="string"||n instanceof Date))return!0;const o=Ht(t,"max");if(!o)return!0;if(e==="time"&&typeof n=="string"){const f=new Date(0),[v,d,b]=n.split(":");f.setHours(v?Number(v):0,d?Number(d):0,b?Number(b):0);const w=Lt(o);return f.getTime()<=w.getTime()}const s=e==="range"&&typeof n=="string"?n.split("/")[1]:"",c=k.parseDate(s||n);return c?c.getTime()<=o.getTime():!0}},ea={key:"rangeUnderflow",message:"Waarde ligt onder het toegestane minimum.",isValid(t,n){const{type:e}=t;if(!n||!(typeof n=="string"||n instanceof Date))return!0;const o=Ht(t,"min");if(!o)return!0;if(e==="time"&&typeof n=="string"){const f=new Date(0),[v,d,b]=n.split(":");f.setHours(v?Number(v):0,d?Number(d):0,b?Number(b):0);const w=Lt(o);return f.getTime()>=w.getTime()}const s=e==="range"&&typeof n=="string"?n.split("/")[0]:"",c=k.parseDate(s||n);return c?c.getTime()>=o.getTime():!0}},ta=`:host {
    /* Calendar colors */
    --vl-datepicker--calendar-background: var(--vl-color--background);
    --vl-datepicker--calendar-border: var(--vl-color--border-alt);
    --vl-datepicker--calendar-shadow: rgba(0, 0, 0, 0.08);

    /* Month header */
    --vl-datepicker--header-background: #eceef1;
    --vl-datepicker--header-text: #5a6171;
    --vl-datepicker--header-border: var(--vl-color--border);
    --vl-datepicker--month-text: var(--vl-color--action);

    /* Day colors */
    --vl-datepicker--day-text: #484848;
    --vl-datepicker--day-hover: #e2e2e2;
    --vl-datepicker--day-today-border: #bbb;
    --vl-datepicker--day-disabled: rgba(72, 72, 72, 0.3);
    --vl-datepicker--day-disabled-strong: #6a7686;
    --vl-datepicker--day-other-month: #80807d;

    /* Selection colors */
    --vl-datepicker--day-selected-bg: var(--vl-color--action);
    --vl-datepicker--day-selected-text: var(--vl-color--background);
    --vl-datepicker--range-bg: #80aae6;
    --vl-datepicker--range-shadow: #80aae6;
    --vl-datepicker--day-selected-shadow: #ff5a5f;

    /* State colors */
    --vl-datepicker--error-border: var(--vl-color--error);
    --vl-datepicker--error-background: var(--vl-color--error-background);
    --vl-datepicker--success-border: var(--vl-color--success);
    --vl-datepicker--success-background: var(--vl-color--success-bg);

    /* Tooltip colors */
    --vl-datepicker--tooltip-background: var(--vl-color--background);
    --vl-datepicker--tooltip-border: #cfd5dd;
    --vl-datepicker--tooltip-text: var(--vl-color--text);
    --vl-datepicker--tooltip-shadow: rgba(51, 51, 50, 0.15);
}
`,na=rt`
    ${Dn(ta)}

    /* ===================================================================
       Box Sizing Reset
       =================================================================== */

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    /* ===================================================================
       Host & Layout
       =================================================================== */

    :host {
        position: relative;
    }

    button {
        cursor: pointer;
    }

    .vl-vi.vl-vi-u-180deg::before {
        display: inline-block;
        transform: rotate(180deg);
        vertical-align: middle;
    }

    .vl-vi-u-xs::before {
        font-size: 0.8rem;
    }

    .vl-vi-u-s::before {
        font-size: 1.3rem;
    }

    .vl-vi-u-m::before {
        font-size: 1.7rem;
    }

    .vl-vi-u-l::before {
        font-size: 2rem;
    }

    .vl-vi-u-xl::before {
        font-size: 2.2rem;
    }

    .vl-vi-u-90deg::before {
        display: inline-block;
        transform: rotate(90deg);
    }

    .vl-vi-u-180deg::before {
        display: inline-block;
        transform: rotate(180deg);
    }

    /* ===================================================================
       Input Field Styling
       =================================================================== */

    .vl-input-field:not(input[type='date']) {
        border-radius: 0.3rem 0 0 0.3rem;
    }

    /* ===================================================================
       Input Addon Success/Error States
       =================================================================== */

    .vl-input-addon--success {
        border-color: var(--vl-color--success);
    }

    .vl-input-addon--success .vl-vi {
        color: var(--vl-color--success) !important;
    }

    .vl-input-addon--error {
        border-color: var(--vl-color--error);
    }

    .vl-input-addon--error .vl-vi {
        color: var(--vl-color--error) !important;
    }

    /* ===================================================================
       Flatpickr Calendar Z-Index
       =================================================================== */

    .flatpickr-calendar {
        z-index: var(--vl-z-layer--datepicker) !important;
    }

    /* ===================================================================
       Block Variant
       =================================================================== */

    .flatpickr-wrapper--block,
    input[block] {
        width: 100%;
    }

    /* ===================================================================
       Native Date Input
       =================================================================== */

    input[type='date'] {
        border-radius: 0.3rem !important;
    }

    /* ===================================================================
       Today Indicator
       =================================================================== */

    .flatpickr-calendar .today {
        border: 1px #bbb solid;
    }

    /* ===================================================================
       Input Group Layout
       =================================================================== */

    .vl-group--input-group {
        input {
            border-radius: 0.3rem 0px 0px 0.3rem;
            border-right-width: 0px;
        }

        button {
            border-radius: 0px 0.3rem 0.3rem 0px;
        }
    }

    /* ===================================================================
       Flatpickr Calendar Base
       =================================================================== */

    .flatpickr-calendar {
        background: transparent;
        opacity: 0;
        display: none;
        text-align: center;
        visibility: hidden;
        padding: 0;
        -webkit-animation: none;
        animation: none;
        direction: ltr;
        border: 0;
        font-size: 14px;
        line-height: 24px;
        border-radius: 5px;
        position: absolute;
        width: 307.875px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        -webkit-box-shadow: 0 3px 13px var(--vl-datepicker--calendar-shadow);
        box-shadow: 0 3px 13px var(--vl-datepicker--calendar-shadow);
    }

    .flatpickr-calendar.open,
    .flatpickr-calendar.inline {
        opacity: 1;
        max-height: 640px;
        visibility: visible;
    }

    .flatpickr-calendar.open {
        display: inline-block;
        z-index: 100021;
    }

    .flatpickr-calendar.animate.open {
        -webkit-animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);
        animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);
    }

    .flatpickr-calendar.inline {
        display: block;
        position: relative;
        top: 2px;
    }

    .flatpickr-calendar.static {
        position: absolute;
        top: calc(100% + 2px);
    }

    .flatpickr-calendar.static.open {
        z-index: 999;
        display: block;
    }

    .flatpickr-calendar.multiMonth
        .flatpickr-days
        .dayContainer:nth-child(n + 1)
        .flatpickr-day.inRange:nth-child(7n + 7) {
        -webkit-box-shadow: none !important;
        box-shadow: none !important;
    }

    .flatpickr-calendar.multiMonth
        .flatpickr-days
        .dayContainer:nth-child(n + 2)
        .flatpickr-day.inRange:nth-child(7n + 1) {
        -webkit-box-shadow:
            -2px 0 0 var(--vl-datepicker--day-hover),
            5px 0 0 var(--vl-datepicker--day-hover);
        box-shadow:
            -2px 0 0 var(--vl-datepicker--day-hover),
            5px 0 0 var(--vl-datepicker--day-hover);
    }

    .flatpickr-calendar .hasWeeks .dayContainer,
    .flatpickr-calendar .hasTime .dayContainer {
        border-bottom: 0;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }

    .flatpickr-calendar .hasWeeks .dayContainer {
        border-left: 0;
    }

    .flatpickr-calendar.hasTime .flatpickr-time {
        height: 40px;
        border-top: 1px solid var(--vl-datepicker--header-background);
    }

    .flatpickr-calendar.hasTime .flatpickr-innerContainer {
        border-bottom: 0;
    }

    .flatpickr-calendar.hasTime .flatpickr-time {
        border: 1px solid var(--vl-datepicker--header-background);
    }

    .flatpickr-calendar.noCalendar.hasTime .flatpickr-time {
        height: auto;
    }

    .flatpickr-calendar:before,
    .flatpickr-calendar:after {
        position: absolute;
        display: block;
        pointer-events: none;
        border: solid transparent;
        content: '';
        height: 0;
        width: 0;
        left: 22px;
    }

    .flatpickr-calendar.rightMost:before,
    .flatpickr-calendar.arrowRight:before,
    .flatpickr-calendar.rightMost:after,
    .flatpickr-calendar.arrowRight:after {
        left: auto;
        right: 22px;
    }

    .flatpickr-calendar.arrowCenter:before,
    .flatpickr-calendar.arrowCenter:after {
        left: 50%;
        right: 50%;
    }

    .flatpickr-calendar:before {
        border-width: 5px;
        margin: 0 -5px;
    }

    .flatpickr-calendar:after {
        border-width: 4px;
        margin: 0 -4px;
    }

    .flatpickr-calendar.arrowTop:before,
    .flatpickr-calendar.arrowTop:after {
        bottom: 100%;
    }

    .flatpickr-calendar.arrowTop:before {
        border-bottom-color: var(--vl-datepicker--header-background);
    }

    .flatpickr-calendar.arrowTop:after {
        border-bottom-color: var(--vl-datepicker--header-background);
    }

    .flatpickr-calendar.arrowBottom:before,
    .flatpickr-calendar.arrowBottom:after {
        top: 100%;
    }

    .flatpickr-calendar.arrowBottom:before {
        border-top-color: var(--vl-datepicker--header-background);
    }

    .flatpickr-calendar.arrowBottom:after {
        border-top-color: var(--vl-datepicker--header-background);
    }

    .flatpickr-calendar:focus {
        outline: 0;
    }

    .flatpickr-wrapper {
        position: relative;
        display: inline-block;
    }

    .flatpickr-calendar {
        background: var(--vl-datepicker--calendar-background);
        border-radius: 0.3rem;
        border: 0.1rem solid var(--vl-datepicker--calendar-border);
        box-shadow: none;
        margin-top: 0.5rem;
    }

    .flatpickr-calendar.arrowTop::before,
    .flatpickr-calendar.arrowTop::after,
    .flatpickr-calendar.arrowBottom::before,
    .flatpickr-calendar.arrowBottom::after {
        display: none;
    }

    .flatpickr-calendar .numInput[type='number'],
    .flatpickr-calendar input[type='number'] {
        -moz-appearance: textfield;
    }

    .flatpickr-calendar .numInput[type='number']::-webkit-inner-spin-button,
    .flatpickr-calendar .numInput[type='number']::-webkit-outer-spin-button,
    .flatpickr-calendar input[type='number']::-webkit-inner-spin-button,
    .flatpickr-calendar input[type='number']::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* ===================================================================
       Flatpickr Months Header
       =================================================================== */

    .flatpickr-months {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        position: relative;
    }

    .flatpickr-months .flatpickr-month {
        border-radius: 5px 5px 0 0;
        background: var(--vl-datepicker--header-background);
        color: var(--vl-datepicker--header-text);
        fill: var(--vl-datepicker--header-text);
        height: 34px;
        line-height: 1;
        text-align: center;
        position: relative;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        overflow: hidden;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
    }

    .flatpickr-months .flatpickr-month {
        border-radius: 0;
        background: 0;
        border-bottom: 1px solid var(--vl-datepicker--header-border);
        height: 5.5rem;
    }

    .flatpickr-months .flatpickr-prev-month,
    .flatpickr-months .flatpickr-next-month {
        text-decoration: none;
        cursor: pointer;
        position: absolute;
        top: 0;
        height: 34px;
        padding: 10px;
        z-index: 3;
        color: var(--vl-datepicker--header-text);
        fill: var(--vl-datepicker--header-text);
        border-radius: 50%;
        width: 3.5rem;
        height: 3.5rem;
        top: 50%;
        transform: translateY(-50%);
    }

    .flatpickr-months .flatpickr-prev-month.flatpickr-disabled,
    .flatpickr-months .flatpickr-next-month.flatpickr-disabled {
        display: none;
    }

    .flatpickr-months .flatpickr-prev-month i,
    .flatpickr-months .flatpickr-next-month i {
        position: relative;
    }

    .flatpickr-months .flatpickr-prev-month.flatpickr-prev-month,
    .flatpickr-months .flatpickr-next-month.flatpickr-prev-month {
        left: 10px;
    }

    .flatpickr-months .flatpickr-prev-month.flatpickr-next-month,
    .flatpickr-months .flatpickr-next-month.flatpickr-next-month {
        right: 10px;
    }

    .flatpickr-months .flatpickr-prev-month:hover,
    .flatpickr-months .flatpickr-next-month:hover {
        color: var(--vl-datepicker--day-today-border);
    }

    .flatpickr-months .flatpickr-prev-month:hover svg,
    .flatpickr-months .flatpickr-next-month:hover svg {
        fill: #f64747;
    }

    .flatpickr-months .flatpickr-prev-month svg,
    .flatpickr-months .flatpickr-next-month svg {
        width: 14px;
        height: 14px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        right: 0;
        margin: auto;
        fill: var(--vl-datepicker--month-text);
        stroke: var(--vl-datepicker--month-text);
        stroke-width: 0.15rem;
        width: 1.2rem;
        height: 1.2rem;
    }

    .flatpickr-months .flatpickr-prev-month svg path,
    .flatpickr-months .flatpickr-next-month svg path {
        -webkit-transition: fill 0.1s;
        transition: fill 0.1s;
        fill: inherit;
    }

    /* ===================================================================
       Numeric Input Wrapper
       =================================================================== */

    .numInputWrapper {
        position: relative;
        height: auto;
    }

    .numInputWrapper input,
    .numInputWrapper span {
        display: inline-block;
    }

    .numInputWrapper input {
        width: 100%;
    }

    .numInputWrapper input::-ms-clear {
        display: none;
    }

    .numInputWrapper input::-webkit-outer-spin-button,
    .numInputWrapper input::-webkit-inner-spin-button {
        margin: 0;
        -webkit-appearance: none;
    }

    .numInputWrapper span {
        position: absolute;
        right: 0;
        width: 14px;
        padding: 0 4px 0 2px;
        height: 50%;
        line-height: 50%;
        opacity: 0;
        cursor: pointer;
        border: 1px solid rgba(72, 72, 72, 0.15);
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    .numInputWrapper span:hover {
        background: rgba(0, 0, 0, 0.1);
    }

    .numInputWrapper span:active {
        background: rgba(0, 0, 0, 0.2);
    }

    .numInputWrapper span:after {
        display: block;
        content: '';
        position: absolute;
    }

    .numInputWrapper span.arrowUp {
        top: 0;
        border-bottom: 0;
    }

    .numInputWrapper span.arrowUp:after {
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-bottom: 4px solid rgba(72, 72, 72, 0.6);
        top: 26%;
    }

    .numInputWrapper span.arrowDown {
        top: 50%;
    }

    .numInputWrapper span.arrowDown:after {
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 4px solid rgba(72, 72, 72, 0.6);
        top: 40%;
    }

    .numInputWrapper span svg {
        width: inherit;
        height: auto;
    }

    .numInputWrapper span svg path {
        fill: rgba(90, 97, 113, 0.5);
    }

    .numInputWrapper:hover {
        background: rgba(0, 0, 0, 0.05);
    }

    .numInputWrapper:hover span {
        opacity: 1;
    }

    .numInputWrapper:hover {
        background-color: transparent;
    }

    /* ===================================================================
       Current Month Display
       =================================================================== */

    .flatpickr-current-month {
        font-size: 125%;
        line-height: 3rem;
        font-weight: 300;
        color: inherit;
        position: relative;
        width: 75%;
        left: 12.5%;
        padding: 7.48px 0 0 0;
        height: 34px;
        display: inline-block;
        text-align: center;
        -webkit-transform: translate3d(0px, 0px, 0px);
        transform: translate3d(0px, 0px, 0px);
        color: var(--vl-color--text);
        padding-top: 0;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        right: 0;
    }

    .flatpickr-current-month span.cur-month {
        font-family: inherit;
        font-weight: 700;
        color: inherit;
        display: inline-block;
        margin-left: 0.5ch;
        padding: 0;
    }

    .flatpickr-current-month span.cur-month:hover {
        background: rgba(0, 0, 0, 0.05);
    }

    .flatpickr-current-month .numInputWrapper {
        width: 6ch;
        width: 7ch\\0;
        display: inline-block;
    }

    .flatpickr-current-month .numInputWrapper span.arrowUp:after {
        border-bottom-color: var(--vl-datepicker--header-text);
    }

    .flatpickr-current-month .numInputWrapper span.arrowDown:after {
        border-top-color: var(--vl-datepicker--header-text);
    }

    .flatpickr-current-month input.cur-year {
        background: transparent;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        color: inherit;
        cursor: text;
        padding: 0 0 0 0.5ch;
        margin: 0;
        display: inline-block;
        font-size: inherit;
        font-family: inherit;
        font-weight: 300;
        line-height: inherit;
        height: auto;
        border: 0;
        border-radius: 0;
        vertical-align: initial;
        -webkit-appearance: textfield;
        -moz-appearance: textfield;
        appearance: textfield;
        font-weight: 500;
        color: var(--vl-datepicker--month-text);
    }

    .flatpickr-current-month input.cur-year:focus {
        outline: 0;
    }

    .flatpickr-current-month input.cur-year[disabled],
    .flatpickr-current-month input.cur-year[disabled]:hover {
        font-size: 100%;
        color: rgba(90, 97, 113, 0.5);
        background: transparent;
        pointer-events: none;
    }

    .flatpickr-current-month .flatpickr-monthDropdown-months {
        appearance: none;
        background: var(--vl-datepicker--header-background);
        border: none;
        border-radius: 0;
        box-sizing: border-box;
        color: inherit;
        cursor: pointer;
        font-size: inherit;
        font-family: inherit;
        font-weight: 300;
        height: auto;
        line-height: inherit;
        margin: -1px 0 0 0;
        outline: none;
        padding: 0 0 0 0.5ch;
        position: relative;
        vertical-align: initial;
        -webkit-box-sizing: border-box;
        -webkit-appearance: none;
        -moz-appearance: none;
        width: auto;
        font-size: 1.8rem;
        font-weight: 500;
        font-family: var(--vl-font);
        color: var(--vl-datepicker--month-text);
        background: transparent;
        border: 0;
    }

    .flatpickr-current-month .flatpickr-monthDropdown-months:focus,
    .flatpickr-current-month .flatpickr-monthDropdown-months:active {
        outline: none;
    }

    .flatpickr-current-month .flatpickr-monthDropdown-months:hover {
        background: none;
    }

    .flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month {
        background-color: var(--vl-datepicker--header-background);
        outline: none;
        padding: 0;
    }

    /* ===================================================================
       Weekdays
       =================================================================== */

    .flatpickr-weekdays {
        background: var(--vl-datepicker--header-background);
        text-align: center;
        overflow: hidden;
        width: 100%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        height: 28px;
        background: 0;
        padding: 2rem 1.5rem 2rem;
    }

    .flatpickr-weekdays .flatpickr-weekdaycontainer {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
    }

    span.flatpickr-weekday {
        cursor: default;
        font-size: 90%;
        background: var(--vl-datepicker--header-background);
        color: var(--vl-datepicker--header-text);
        line-height: 1;
        margin: 0;
        text-align: center;
        display: block;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        font-weight: bolder;
        background: 0;
        font-size: 100%;
        color: inherit;
    }

    /* ===================================================================
       Days Container
       =================================================================== */

    .dayContainer,
    .flatpickr-weeks {
        padding: 1px 0 0 0;
    }

    .flatpickr-days {
        position: relative;
        overflow: hidden;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: start;
        -webkit-align-items: flex-start;
        -ms-flex-align: start;
        align-items: flex-start;
        width: 307.875px;
        border-left: 1px solid var(--vl-datepicker--header-background);
        border-right: 1px solid var(--vl-datepicker--header-background);
        border: 0;
        margin-bottom: 1.5rem;
    }

    .flatpickr-days:focus {
        outline: 0;
    }

    .dayContainer {
        padding: 0;
        outline: 0;
        text-align: left;
        width: 307.875px;
        min-width: 307.875px;
        max-width: 307.875px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        display: inline-block;
        display: -ms-flexbox;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        -ms-flex-pack: justify;
        -webkit-justify-content: space-around;
        justify-content: space-around;
        -webkit-transform: translate3d(0px, 0px, 0px);
        transform: translate3d(0px, 0px, 0px);
        opacity: 1;
        padding: 0 1.5rem;
    }

    .dayContainer + .dayContainer {
        -webkit-box-shadow: -1px 0 0 var(--vl-datepicker--header-background);
        box-shadow: -1px 0 0 var(--vl-datepicker--header-background);
    }

    /* ===================================================================
       Individual Day Cell
       =================================================================== */

    .flatpickr-day {
        background: none;
        border: 1px solid transparent;
        border-radius: 150px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        color: var(--vl-datepicker--day-text);
        cursor: pointer;
        font-weight: 400;
        width: 14.2857143%;
        -webkit-flex-basis: 14.2857143%;
        -ms-flex-preferred-size: 14.2857143%;
        flex-basis: 14.2857143%;
        max-width: 39px;
        height: 39px;
        line-height: 39px;
        margin: 0;
        display: inline-block;
        position: relative;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        text-align: center;
        font-size: var(--vl-font-size--small);
        line-height: 3rem;
        height: 3rem;
        max-width: 3rem;
        margin: 0.45rem;
    }

    .flatpickr-day.inRange,
    .flatpickr-day.prevMonthDay.inRange,
    .flatpickr-day.nextMonthDay.inRange,
    .flatpickr-day.today.inRange,
    .flatpickr-day.prevMonthDay.today.inRange,
    .flatpickr-day.nextMonthDay.today.inRange,
    .flatpickr-day:hover,
    .flatpickr-day.prevMonthDay:hover,
    .flatpickr-day.nextMonthDay:hover,
    .flatpickr-day:focus,
    .flatpickr-day.prevMonthDay:focus,
    .flatpickr-day.nextMonthDay:focus {
        cursor: pointer;
        outline: 0;
        background: var(--vl-datepicker--day-hover);
        border-color: var(--vl-datepicker--day-hover);
    }

    .flatpickr-day:hover,
    .flatpickr-day:focus {
        color: var(--vl-color--text) !important;
        background: var(--vl-color--action-hover-background) !important;
        border-color: transparent !important;
        font-weight: 400;
    }

    .flatpickr-day.today {
        border: 1px solid var(--vl-datepicker--day-today-border);
    }

    .flatpickr-day.today:hover,
    .flatpickr-day.today:focus {
        border-color: var(--vl-datepicker--day-today-border);
        background: var(--vl-datepicker--day-today-border);
        color: var(--vl-datepicker--day-selected-text);
    }

    .flatpickr-calendar.mark-today .flatpickr-day.today:not(.selected) {
        background: #f4f4f4;
    }

    .flatpickr-day.prevMonthDay,
    .flatpickr-day.nextMonthDay {
        color: var(--vl-datepicker--day-other-month);
    }

    .flatpickr-day.inRange.today {
        background-color: var(--vl-datepicker--day-selected-bg);
        font-weight: 500;
    }

    .flatpickr-day.inRange.today::after {
        top: 0;
        right: 1.6rem;
    }

    .flatpickr-day.selected,
    .flatpickr-day.startRange,
    .flatpickr-day.endRange,
    .flatpickr-day.selected.inRange,
    .flatpickr-day.startRange.inRange,
    .flatpickr-day.endRange.inRange,
    .flatpickr-day.selected:focus,
    .flatpickr-day.startRange:focus,
    .flatpickr-day.endRange:focus,
    .flatpickr-day.selected:hover,
    .flatpickr-day.startRange:hover,
    .flatpickr-day.endRange:hover,
    .flatpickr-day.selected.prevMonthDay,
    .flatpickr-day.startRange.prevMonthDay,
    .flatpickr-day.endRange.prevMonthDay,
    .flatpickr-day.selected.nextMonthDay,
    .flatpickr-day.startRange.nextMonthDay,
    .flatpickr-day.endRange.nextMonthDay {
        -webkit-box-shadow: none;
        box-shadow: none;
        color: var(--vl-datepicker--day-selected-text);
        background-color: var(--vl-datepicker--day-selected-bg);
        border-color: var(--vl-datepicker--day-selected-bg);
    }

    .flatpickr-day.selected.startRange,
    .flatpickr-day.startRange.startRange,
    .flatpickr-day.endRange.startRange {
        border-radius: 50px 0 0 50px;
    }

    .flatpickr-day.selected.endRange,
    .flatpickr-day.startRange.endRange,
    .flatpickr-day.endRange.endRange {
        border-radius: 0 50px 50px 0;
    }

    .flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n + 1)),
    .flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n + 1)),
    .flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n + 1)) {
        -webkit-box-shadow: -10px 0 0 var(--vl-datepicker--range-shadow);
        box-shadow: -10px 0 0 var(--vl-datepicker--range-shadow);
    }

    .flatpickr-day.selected.startRange.endRange,
    .flatpickr-day.startRange.startRange.endRange,
    .flatpickr-day.endRange.startRange.endRange {
        border-radius: 50px;
    }

    .flatpickr-day.selected.prevMonthDay,
    .flatpickr-day.selected.nextMonthDay,
    .flatpickr-day.startRange.prevMonthDay,
    .flatpickr-day.startRange.nextMonthDay,
    .flatpickr-day.endRange.prevMonthDay,
    .flatpickr-day.endRange.nextMonthDay {
        background-color: var(--vl-datepicker--day-selected-bg);
        border-color: var(--vl-datepicker--day-selected-bg);
    }

    .flatpickr-day.selected.inRange,
    .flatpickr-day.selected.selected,
    .flatpickr-day.startRange.inRange,
    .flatpickr-day.startRange.selected,
    .flatpickr-day.endRange.inRange,
    .flatpickr-day.endRange.selected {
        background: var(--vl-datepicker--day-selected-bg);
        border-color: var(--vl-datepicker--day-selected-bg);
        border-radius: 50%;
        color: var(--vl-datepicker--day-selected-text);
        font-weight: 500;
    }

    .flatpickr-day.selected::after,
    .flatpickr-day.startRange::after,
    .flatpickr-day.endRange::after {
        content: '';
        display: block;
        width: 3rem;
        height: 3rem;
        position: absolute;
        top: -0.1rem;
        background: var(--vl-datepicker--range-bg);
        z-index: -1;
    }

    .flatpickr-day.startRange::after {
        left: 1.5rem;
    }

    .flatpickr-day.endRange::after {
        right: 1.5rem;
    }

    .flatpickr-day:not(.inRange) + .flatpickr-day.selected:not(.startRange)::after {
        display: none;
    }

    .flatpickr-day.startRange.startRange + .endRange,
    .flatpickr-day.endRange.startRange + .endRange {
        box-shadow: none;
    }

    .flatpickr-day.inRange,
    .flatpickr-day.nextMonthDay.inRange,
    .flatpickr-day.prevMonthDay.inRange {
        border-radius: 0;
        -webkit-box-shadow:
            -5px 0 0 var(--vl-datepicker--day-hover),
            5px 0 0 var(--vl-datepicker--day-hover);
        box-shadow:
            -5px 0 0 var(--vl-datepicker--day-hover),
            5px 0 0 var(--vl-datepicker--day-hover);
        background: var(--vl-datepicker--range-bg);
        box-shadow:
            -5px 0 0 var(--vl-datepicker--range-shadow),
            5px 0 0 var(--vl-datepicker--range-shadow);
        border-color: var(--vl-datepicker--range-bg);
    }

    .flatpickr-day.inRange.startRange,
    .flatpickr-day.inRange.endRange,
    .flatpickr-day.nextMonthDay.inRange.startRange,
    .flatpickr-day.nextMonthDay.inRange.endRange,
    .flatpickr-day.prevMonthDay.inRange.startRange,
    .flatpickr-day.prevMonthDay.inRange.endRange {
        box-shadow: none;
    }

    .flatpickr-day.flatpickr-disabled,
    .flatpickr-day.flatpickr-disabled:hover,
    .flatpickr-day.prevMonthDay,
    .flatpickr-day.nextMonthDay,
    .flatpickr-day.notAllowed,
    .flatpickr-day.notAllowed.prevMonthDay,
    .flatpickr-day.notAllowed.nextMonthDay {
        color: var(--vl-datepicker--day-disabled);
        background: transparent;
        border-color: transparent;
        cursor: default;
    }

    .flatpickr-day.flatpickr-disabled,
    .flatpickr-day.flatpickr-disabled:hover {
        cursor: not-allowed;
        color: rgba(72, 72, 72, 0.1);
    }

    .flatpickr-day.flatpickr-disabled::before {
        position: absolute;
        left: 0;
        right: 0;
        top: 50%;
        transform: translate(0, -50%) rotate(-45deg);
        content: '';
        border-top: 1px solid var(--vl-datepicker--day-other-month);
    }

    .flatpickr-day.flatpickr-disabled:not(.nextMonthDay):not(.prevMonthDay) {
        color: var(--vl-datepicker--day-disabled-strong);
    }

    .flatpickr-day.flatpickr-disabled:not(.nextMonthDay):not(.prevMonthDay)::before {
        border-color: var(--vl-datepicker--day-disabled-strong);
    }

    .flatpickr-day.week.selected {
        border-radius: 0;
        -webkit-box-shadow:
            -5px 0 0 var(--vl-datepicker--day-selected-shadow),
            5px 0 0 var(--vl-datepicker--day-selected-shadow);
        box-shadow:
            -5px 0 0 var(--vl-datepicker--day-selected-shadow),
            5px 0 0 var(--vl-datepicker--day-selected-shadow);
    }

    .flatpickr-day.hidden {
        visibility: hidden;
    }

    .rangeMode .flatpickr-day {
        margin-top: 1px;
    }

    span.flatpickr-day.selected {
        font-weight: bold;
    }

    /* ===================================================================
       Week Wrapper
       =================================================================== */

    .flatpickr-weekwrapper {
        float: left;
    }

    .flatpickr-weekwrapper .flatpickr-weeks {
        padding: 0 12px;
        border-left: 1px solid var(--vl-datepicker--header-background);
    }

    .flatpickr-weekwrapper .flatpickr-weekday {
        float: none;
        width: 100%;
        line-height: 28px;
    }

    .flatpickr-weekwrapper span.flatpickr-day,
    .flatpickr-weekwrapper span.flatpickr-day:hover {
        display: block;
        width: 100%;
        max-width: none;
        color: var(--vl-datepicker--day-disabled);
        background: transparent;
        cursor: default;
        border: none;
    }

    /* ===================================================================
       Inner Container
       =================================================================== */

    .flatpickr-innerContainer {
        display: block;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        overflow: hidden;
        background: var(--vl-datepicker--calendar-background);
        border-bottom: 1px solid var(--vl-datepicker--header-background);
        border-bottom: 0;
    }

    .flatpickr-rContainer {
        display: inline-block;
        padding: 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    /* ===================================================================
       Time Picker
       =================================================================== */

    .flatpickr-time {
        text-align: center;
        outline: 0;
        display: block;
        height: 0;
        line-height: 40px;
        max-height: 40px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        overflow: hidden;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        background: var(--vl-datepicker--calendar-background);
        border-radius: 0 0 5px 5px;
    }

    .flatpickr-time:after {
        content: '';
        display: table;
        clear: both;
    }

    .flatpickr-time .numInputWrapper {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        width: 40%;
        height: 40px;
        float: left;
    }

    .flatpickr-time .numInputWrapper span.arrowUp:after {
        border-bottom-color: var(--vl-datepicker--day-text);
    }

    .flatpickr-time .numInputWrapper span.arrowDown:after {
        border-top-color: var(--vl-datepicker--day-text);
    }

    .flatpickr-time.hasSeconds .numInputWrapper {
        width: 26%;
    }

    .flatpickr-time.time24hr .numInputWrapper {
        width: 49%;
    }

    .flatpickr-time input {
        background: transparent;
        -webkit-box-shadow: none;
        box-shadow: none;
        border: 0;
        border-radius: 0;
        text-align: center;
        margin: 0;
        padding: 0;
        height: inherit;
        line-height: inherit;
        color: var(--vl-datepicker--day-text);
        font-size: 14px;
        position: relative;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-appearance: textfield;
        -moz-appearance: textfield;
        appearance: textfield;
    }

    .flatpickr-time input.flatpickr-hour {
        font-weight: bold;
    }

    .flatpickr-time input.flatpickr-minute,
    .flatpickr-time input.flatpickr-second {
        font-weight: 400;
    }

    .flatpickr-time input:focus {
        outline: 0;
        border: 0;
    }

    .flatpickr-time .flatpickr-time-separator,
    .flatpickr-time .flatpickr-am-pm {
        height: inherit;
        float: left;
        line-height: inherit;
        color: var(--vl-datepicker--day-text);
        font-weight: bold;
        width: 2%;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-align-self: center;
        -ms-flex-item-align: center;
        align-self: center;
    }

    .flatpickr-time .flatpickr-am-pm {
        outline: 0;
        width: 18%;
        cursor: pointer;
        text-align: center;
        font-weight: 400;
    }

    .flatpickr-time input:hover,
    .flatpickr-time .flatpickr-am-pm:hover,
    .flatpickr-time input:focus,
    .flatpickr-time .flatpickr-am-pm:focus {
        background: #eaeaea;
    }

    .flatpickr-input[readonly] {
        cursor: pointer;
    }

    /* ===================================================================
       Animations
       =================================================================== */

    @-webkit-keyframes fpFadeInDown {
        from {
            opacity: 0;
            -webkit-transform: translate3d(0, -20px, 0);
            transform: translate3d(0, -20px, 0);
        }
        to {
            opacity: 1;
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }

    @keyframes fpFadeInDown {
        from {
            opacity: 0;
            -webkit-transform: translate3d(0, -20px, 0);
            transform: translate3d(0, -20px, 0);
        }
        to {
            opacity: 1;
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }

    /* ===================================================================
       Validation States
       =================================================================== */

    .vl-datepicker .vl-datepicker__input-field {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    .vl-datepicker.validated.invalid .vl-datepicker__input-field,
    .vl-datepicker.validated.invalid .vl-datepicker__input-addon {
        border-color: var(--vl-datepicker--error-border);
        background-color: var(--vl-datepicker--error-background);
    }

    .vl-datepicker.validated.valid .vl-datepicker__input-field,
    .vl-datepicker.validated.valid .vl-datepicker__input-addon {
        border-color: var(--vl-datepicker--success-border);
        background-color: var(--vl-datepicker--success-background);
    }

    /* ===================================================================
       Calendar Placeholder Positioning
       =================================================================== */

    #datepicker-calendar-placeholder {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        z-index: var(--vl-z-layer--datepicker);
    }
`,I={...Mn,block:!1,readonly:!1,value:"",placeholder:"",autocomplete:"",type:"date",format:"",amPm:!1,minDate:"",maxDate:"",minTime:"",maxTime:"",disableMaskValidation:!1,pattern:"",regex:null,position:"auto",isStatic:!1},aa=rt`
    [popover] {
        inset: unset;
        margin: unset;
        padding: unset;
        overflow: visible;
    }

    /* Zichtbaarheid via flatpickr's .open class i.p.v. de UA :popover-open. */
    [popover]:not(.open) {
        display: none !important;
    }

    [popover].open {
        display: block !important;
    }
`,ia=rt`
    /* Default (flatpickr): placeholder absoluut t.o.v. viewport zodat flatpickr's positionering klopt. */
    #datepicker-calendar-placeholder {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        z-index: var(--vl-z-layer--datepicker);
    }

    /* Anchor-regels in @supports: browsers zonder CSS Anchor Positioning negeren ze en vallen terug
       op de default hierboven (de useAnchorPositioning getter in JS spiegelt deze detect). */
    @supports (anchor-name: --x) {
    :host(:not([inline-positioning])) {
        anchor-scope: --datepicker-btn;
    }

    :host(:not([inline-positioning])) button#toggle-calendar {
        anchor-name: --datepicker-btn;
    }

    :host(:not([inline-positioning])) #datepicker-calendar-placeholder {
        position: static;
        width: auto;
        z-index: auto;
    }

    /* Default: onder de button, links uitgelijnd, 2px gap. */
    :host(:not([inline-positioning])) .flatpickr-calendar:not(.static) {
        position: fixed;
        position-anchor: --datepicker-btn;
        top: calc(anchor(bottom) + 2px);
        left: anchor(left);
        z-index: var(--vl-z-layer--datepicker) !important;
    }

    /* Fallbacks: rechts uitlijnen bij overflow, boven tonen bij plaatsgebrek, of beide. */
    @position-try --align-right-below {
        top: calc(anchor(bottom) + 2px);
        left: auto;
        right: 0;
    }

    @position-try --flip-above {
        top: auto;
        bottom: calc(anchor(top) + 2px);
        left: anchor(left);
    }

    @position-try --align-right-above {
        top: auto;
        bottom: calc(anchor(top) + 2px);
        left: auto;
        right: 0;
    }

    :host(:not([inline-positioning])) .flatpickr-calendar:not(.static) {
        position-try-fallbacks: --align-right-below, --flip-above, --align-right-above;
    }

    /* Position mapping per position attribuut */

    /* auto varianten — met flip */
    :host(:not([inline-positioning])[position='auto']) .flatpickr-calendar:not(.static),
    :host(:not([inline-positioning]):not([position])) .flatpickr-calendar:not(.static),
    :host(:not([inline-positioning])[position='auto left']) .flatpickr-calendar:not(.static) {
        top: calc(anchor(bottom) + 2px);
        left: anchor(left);
        position-try-fallbacks: --align-right-below, --flip-above, --align-right-above;
    }
    :host(:not([inline-positioning])[position='auto center']) .flatpickr-calendar:not(.static) {
        top: calc(anchor(bottom) + 2px);
        left: anchor(center);
        translate: -50% 0;
        position-try-fallbacks: --flip-above;
    }
    :host(:not([inline-positioning])[position='auto right']) .flatpickr-calendar:not(.static) {
        top: calc(anchor(bottom) + 2px);
        right: anchor(right);
        left: auto;
        position-try-fallbacks: --flip-above;
    }

    /* above varianten — zonder flip */
    :host(:not([inline-positioning])[position='above']) .flatpickr-calendar:not(.static),
    :host(:not([inline-positioning])[position='above left']) .flatpickr-calendar:not(.static) {
        top: auto;
        bottom: calc(anchor(top) + 2px);
        left: anchor(left);
        position-try-fallbacks: none;
    }
    :host(:not([inline-positioning])[position='above center']) .flatpickr-calendar:not(.static) {
        top: auto;
        bottom: calc(anchor(top) + 2px);
        left: anchor(center);
        translate: -50% 0;
        position-try-fallbacks: none;
    }
    :host(:not([inline-positioning])[position='above right']) .flatpickr-calendar:not(.static) {
        top: auto;
        bottom: calc(anchor(top) + 2px);
        right: anchor(right);
        left: auto;
        position-try-fallbacks: none;
    }

    /* below varianten — zonder flip */
    :host(:not([inline-positioning])[position='below']) .flatpickr-calendar:not(.static),
    :host(:not([inline-positioning])[position='below left']) .flatpickr-calendar:not(.static) {
        top: calc(anchor(bottom) + 2px);
        left: anchor(left);
        position-try-fallbacks: none;
    }
    :host(:not([inline-positioning])[position='below center']) .flatpickr-calendar:not(.static) {
        top: calc(anchor(bottom) + 2px);
        left: anchor(center);
        translate: -50% 0;
        position-try-fallbacks: none;
    }
    :host(:not([inline-positioning])[position='below right']) .flatpickr-calendar:not(.static) {
        top: calc(anchor(bottom) + 2px);
        right: anchor(right);
        left: auto;
        position-try-fallbacks: none;
    }
    }
`;var Fe=class extends Event{oldState;newState;constructor(t,{oldState:n="",newState:e="",...o}={}){super(t,o),this.oldState=String(n||""),this.newState=String(e||"")}},Mt=new WeakMap;function Yt(t,n,e){Mt.set(t,setTimeout(()=>{Mt.has(t)&&t.dispatchEvent(new Fe("toggle",{cancelable:!1,oldState:n,newState:e}))},0))}var ot=globalThis.ShadowRoot||function(){},ra=globalThis.HTMLDialogElement||function(){},Te=new WeakMap,z=new WeakMap,H=new WeakMap,se=new WeakMap;function Pe(t){return se.get(t)||"hidden"}var Re=new WeakMap;function ve(t){return[...t].pop()}function oa(t){const n=t.popoverTargetElement;if(!(n instanceof HTMLElement))return;const e=Pe(n);t.popoverTargetAction==="show"&&e==="showing"||t.popoverTargetAction==="hide"&&e==="hidden"||(e==="showing"?de(n,!0,!0):G(n,!1)&&(Re.set(n,t),tt(n)))}function G(t,n){return!(t.popover!=="auto"&&t.popover!=="manual"&&t.popover!=="hint"||!t.isConnected||n&&Pe(t)!=="showing"||!n&&Pe(t)!=="hidden"||t instanceof ra&&t.hasAttribute("open")||document.fullscreenElement===t)}function Ct(t){if(!t)return 0;const n=z.get(document)||new Set,e=H.get(document)||new Set;return e.has(t)?[...e].indexOf(t)+n.size+1:n.has(t)?[...n].indexOf(t)+1:0}function la(t){const n=jt(t),e=sa(t);return Ct(n)>Ct(e)?n:e}function be(t){let n;const e=H.get(t)||new Set,o=z.get(t)||new Set,s=e.size>0?e:o.size>0?o:null;return s?(n=ve(s),n.isConnected?n:(s.delete(n),be(t))):null}function St(t){for(const n of t||[])if(!n.isConnected)t.delete(n);else return n;return null}function ce(t){return typeof t.getRootNode=="function"?t.getRootNode():t.parentNode?ce(t.parentNode):t}function jt(t){for(;t;){if(t instanceof HTMLElement&&t.popover==="auto"&&se.get(t)==="showing")return t;if(t=t instanceof Element&&t.assignedSlot||t.parentElement||ce(t),t instanceof ot&&(t=t.host),t instanceof Document)return}}function sa(t){for(;t;){const n=t.popoverTargetElement;if(n instanceof HTMLElement)return n;if(t=t.parentElement||ce(t),t instanceof ot&&(t=t.host),t instanceof Document)return}}function Et(t,n){const e=new Map;let o=0;for(const f of n||[])e.set(f,o),o+=1;e.set(t,o),o+=1;let s=null;function c(f){if(!f)return;let v=!1,d=null,b=null;for(;!v;){if(d=jt(f)||null,d===null||!e.has(d))return;(t.popover==="hint"||d.popover==="auto")&&(v=!0),v||(f=d.parentElement)}b=e.get(d),(s===null||e.get(s)<b)&&(s=d)}return c(t.parentElement||ce(t)),s}function ca(t){return t.hidden||t instanceof ot||(t instanceof HTMLButtonElement||t instanceof HTMLInputElement||t instanceof HTMLSelectElement||t instanceof HTMLTextAreaElement||t instanceof HTMLOptGroupElement||t instanceof HTMLOptionElement||t instanceof HTMLFieldSetElement)&&t.disabled||t instanceof HTMLInputElement&&t.type==="hidden"||t instanceof HTMLAnchorElement&&t.href===""?!1:typeof t.tabIndex=="number"&&t.tabIndex!==-1}function da(t){if(t.shadowRoot&&t.shadowRoot.delegatesFocus!==!0)return null;let n=t;n.shadowRoot&&(n=n.shadowRoot);let e=n.querySelector("[autofocus]");if(e)return e;{const c=n.querySelectorAll("slot");for(const f of c){const v=f.assignedElements({flatten:!0});for(const d of v){if(d.hasAttribute("autofocus"))return d;if(e=d.querySelector("[autofocus]"),e)return e}}}const o=t.ownerDocument.createTreeWalker(n,NodeFilter.SHOW_ELEMENT);let s=o.currentNode;for(;s;){if(ca(s))return s;s=o.nextNode()}}function pa(t){var n;(n=da(t))==null||n.focus()}var Oe=new WeakMap;function tt(t){if(!G(t,!1))return;const n=t.ownerDocument;if(!t.dispatchEvent(new Fe("beforetoggle",{cancelable:!0,oldState:"closed",newState:"open"}))||!G(t,!1))return;let e=!1;const o=t.popover;let s=null;const c=Et(t,z.get(n)||new Set),f=Et(t,H.get(n)||new Set);if(o==="auto"&&(nt(H.get(n)||new Set,e,!0),X(c||n,e,!0),s="auto"),o==="hint"&&(f?(X(f,e,!0),s="hint"):(nt(H.get(n)||new Set,e,!0),c?(X(c,e,!0),s="auto"):s="hint")),o==="auto"||o==="hint"){if(o!==t.popover||!G(t,!1))return;be(n)||(e=!0),s==="auto"?(z.has(n)||z.set(n,new Set),z.get(n).add(t)):s==="hint"&&(H.has(n)||H.set(n,new Set),H.get(n).add(t))}Oe.delete(t);const v=n.activeElement;t.classList.add(":popover-open"),se.set(t,"showing"),Te.has(n)||Te.set(n,new Set),Te.get(n).add(t),Vt(Re.get(t),!0),pa(t),e&&v&&t.popover==="auto"&&Oe.set(t,v),Yt(t,"closed","open")}function de(t,n=!1,e=!1){var o,s;if(!G(t,!0))return;const c=t.ownerDocument;if(["auto","hint"].includes(t.popover)&&(X(t,n,e),!G(t,!0)))return;const f=z.get(c)||new Set,v=f.has(t)&&ve(f)===t;if(Vt(Re.get(t),!1),Re.delete(t),e&&(t.dispatchEvent(new Fe("beforetoggle",{oldState:"open",newState:"closed"})),v&&ve(f)!==t&&X(t,n,e),!G(t,!0)))return;(o=Te.get(c))==null||o.delete(t),f.delete(t),(s=H.get(c))==null||s.delete(t),t.classList.remove(":popover-open"),se.set(t,"hidden"),e&&Yt(t,"open","closed");const d=Oe.get(t);d&&(Oe.delete(t),n&&d.focus())}function ua(t,n=!1,e=!1){let o=be(t);for(;o;)de(o,n,e),o=be(t)}function nt(t,n=!1,e=!1){let o=St(t);for(;o;)de(o,n,e),o=St(t)}function It(t,n,e,o){let s=!1,c=!1;for(;s||!c;){c=!0;let f=null,v=!1;for(const d of n)if(d===t)v=!0;else if(v){f=d;break}if(!f)return;for(;Pe(f)==="showing"&&n.size;)de(ve(n),e,o);n.has(t)&&ve(n)!==t&&(s=!0),s&&(o=!1)}}function X(t,n,e){var o,s;const c=t.ownerDocument||t;if(t instanceof Document)return ua(c,n,e);if((o=H.get(c))!=null&&o.has(t)){It(t,H.get(c),n,e);return}nt(H.get(c)||new Set,n,e),(s=z.get(c))!=null&&s.has(t)&&It(t,z.get(c),n,e)}var Ze=new WeakMap;function Tt(t){if(!t.isTrusted)return;const n=t.composedPath()[0];if(!n)return;const e=n.ownerDocument;if(!be(e))return;const s=la(n);if(s&&t.type==="pointerdown")Ze.set(e,s);else if(t.type==="pointerup"){const c=Ze.get(e)===s;Ze.delete(e),c&&X(s||e,!1,!0)}}var Ge=new WeakMap;function Vt(t,n=!1){if(!t)return;Ge.has(t)||Ge.set(t,t.getAttribute("aria-expanded"));const e=t.popoverTargetElement;if(e instanceof HTMLElement&&e.popover==="auto")t.setAttribute("aria-expanded",String(n));else{const o=Ge.get(t);o?t.setAttribute("aria-expanded",o):t.removeAttribute("aria-expanded")}}var At=globalThis.ShadowRoot||function(){};function fa(){return typeof HTMLElement<"u"&&typeof HTMLElement.prototype=="object"&&"popover"in HTMLElement.prototype}function J(t,n,e){const o=t[n];Object.defineProperty(t,n,{value(s){return o.call(this,e(s))}})}var ha=/(^|[^\\]):popover-open\b/g;function ga(){return typeof globalThis.CSSLayerBlockRule=="function"}function ma(){const t=ga();return`
${t?"@layer popover-polyfill {":""}
  :where([popover]) {
    position: fixed;
    z-index: 2147483647;
    inset: 0;
    padding: 0.25em;
    width: fit-content;
    height: fit-content;
    border-width: initial;
    border-color: initial;
    border-image: initial;
    border-style: solid;
    background-color: canvas;
    color: canvastext;
    overflow: auto;
    margin: auto;
  }

  :where([popover]:not(.\\:popover-open)) {
    display: none;
  }

  :where(dialog[popover].\\:popover-open) {
    display: block;
  }

  :where(dialog[popover][open]) {
    display: revert;
  }

  :where([anchor].\\:popover-open) {
    inset: auto;
  }

  :where([anchor]:popover-open) {
    inset: auto;
  }

  @supports not (background-color: canvas) {
    :where([popover]) {
      background-color: white;
      color: black;
    }
  }

  @supports (width: -moz-fit-content) {
    :where([popover]) {
      width: -moz-fit-content;
      height: -moz-fit-content;
    }
  }

  @supports not (inset: 0) {
    :where([popover]) {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
${t?"}":""}
`}var re=null;function Xe(t){const n=ma();if(re===null)try{re=new CSSStyleSheet,re.replaceSync(n)}catch{re=!1}if(re===!1){const e=document.createElement("style");e.textContent=n,t instanceof Document?t.head.prepend(e):t.prepend(e)}else t.adoptedStyleSheets=[re,...t.adoptedStyleSheets]}function va(){if(typeof window>"u")return;window.ToggleEvent=window.ToggleEvent||Fe;function t(d){return d?.includes(":popover-open")&&(d=d.replace(ha,"$1.\\:popover-open")),d}J(Document.prototype,"querySelector",t),J(Document.prototype,"querySelectorAll",t),J(Element.prototype,"querySelector",t),J(Element.prototype,"querySelectorAll",t),J(Element.prototype,"matches",t),J(Element.prototype,"closest",t),J(DocumentFragment.prototype,"querySelectorAll",t),Object.defineProperties(HTMLElement.prototype,{popover:{enumerable:!0,configurable:!0,get(){if(!this.hasAttribute("popover"))return null;const d=(this.getAttribute("popover")||"").toLowerCase();return d===""||d=="auto"?"auto":d=="hint"?"hint":"manual"},set(d){d===null?this.removeAttribute("popover"):this.setAttribute("popover",d)}},showPopover:{enumerable:!0,configurable:!0,value(d={}){tt(this)}},hidePopover:{enumerable:!0,configurable:!0,value(){de(this,!0,!0)}},togglePopover:{enumerable:!0,configurable:!0,value(d={}){return typeof d=="boolean"&&(d={force:d}),se.get(this)==="showing"&&d.force===void 0||d.force===!1?de(this,!0,!0):(d.force===void 0||d.force===!0)&&tt(this),se.get(this)==="showing"}}});const n=Element.prototype.attachShadow;n&&Object.defineProperties(Element.prototype,{attachShadow:{enumerable:!0,configurable:!0,writable:!0,value(d){const b=n.call(this,d);return Xe(b),b}}});const e=HTMLElement.prototype.attachInternals;e&&Object.defineProperties(HTMLElement.prototype,{attachInternals:{enumerable:!0,configurable:!0,writable:!0,value(){const d=e.call(this);return d.shadowRoot&&Xe(d.shadowRoot),d}}});const o=new WeakMap;function s(d){Object.defineProperties(d.prototype,{popoverTargetElement:{enumerable:!0,configurable:!0,set(b){if(b===null)this.removeAttribute("popovertarget"),o.delete(this);else if(b instanceof Element)this.setAttribute("popovertarget",""),o.set(this,b);else throw new TypeError("popoverTargetElement must be an element or null")},get(){if(this.localName!=="button"&&this.localName!=="input"||this.localName==="input"&&this.type!=="reset"&&this.type!=="image"&&this.type!=="button"||this.disabled||this.form&&this.type==="submit")return null;const b=o.get(this);if(b&&b.isConnected)return b;if(b&&!b.isConnected)return o.delete(this),null;const w=ce(this),E=this.getAttribute("popovertarget");return(w instanceof Document||w instanceof At)&&E&&w.getElementById(E)||null}},popoverTargetAction:{enumerable:!0,configurable:!0,get(){const b=(this.getAttribute("popovertargetaction")||"").toLowerCase();return b==="show"||b==="hide"?b:"toggle"},set(b){this.setAttribute("popovertargetaction",b)}}})}s(HTMLButtonElement),s(HTMLInputElement);const c=d=>{if(d.defaultPrevented)return;const b=d.composedPath(),w=b[0];if(!(w instanceof Element)||w?.shadowRoot)return;const E=ce(w);if(!(E instanceof At||E instanceof Document))return;const P=b.find(N=>{var $;return($=N.matches)==null?void 0:$.call(N,"[popovertargetaction],[popovertarget]")});if(P){oa(P),d.preventDefault();return}},f=d=>{const b=d.key,w=d.target;!d.defaultPrevented&&w&&(b==="Escape"||b==="Esc")&&X(w.ownerDocument,!0,!0)};(d=>{d.addEventListener("click",c),d.addEventListener("keydown",f),d.addEventListener("pointerdown",Tt),d.addEventListener("pointerup",Tt)})(document),Xe(document)}let Pt=!1;function ba(){return typeof CSS<"u"&&typeof CSS.supports=="function"&&CSS.supports("anchor-name: --x")}function zt(){return typeof HTMLElement<"u"&&typeof HTMLElement.prototype.showPopover=="function"}function ka(){Pt||(Pt=!0,fa()||va())}function at(){return ba()&&zt()}async function ya(){if(at())return!0;try{return ka(),zt()}catch(t){return console.warn("[vl-datepicker] popover polyfill kon niet toegepast worden, fallback naar default positionering",t),!1}}const Rt=2;class Ie{constructor(n){this.floatingElement=null,this.useJsPositioning=!at(),this.cleanupAutoUpdate=null,this.reposition=async()=>{const e=this.floatingElement,o=this.getAnchorElement();if(!e||!o)return;const{placement:s,allowFlip:c}=this.resolvePlacement(),f=[Cn(Rt),Sn({padding:Rt})];c&&f.splice(1,0,En());const{x:v,y:d}=await In(o,e,{placement:s,strategy:"fixed",middleware:f,platform:{...kt,getOffsetParent:b=>kt.getOffsetParent(b,Tn)}});Object.assign(e.style,{position:"fixed",margin:"0",transform:"none",right:"auto",bottom:"auto",left:`${Math.round(v)}px`,top:`${Math.round(d)}px`})},this.host=n,this.host.addController(this)}static isNativelySupported(){return at()}static ensureSupport(){return ya()}hostConnected(){}hostDisconnected(){this.detach()}attach(n){this.floatingElement=n,this.floatingElement.setAttribute("popover","manual")}detach(){this.stopRepositioning(),this.floatingElement?.removeAttribute("popover"),this.floatingElement=null}show(){try{this.floatingElement?.showPopover()}catch{}this.useJsPositioning&&this.startRepositioning()}hide(){this.stopRepositioning();try{this.floatingElement?.hidePopover()}catch{}}getAnchorElement(){return this.host.shadowRoot?.querySelector("button#toggle-calendar")??null}resolvePlacement(){const[n="auto",e="left"]=(this.host.getAttribute("position")||"auto").trim().toLowerCase().split(/\s+/);return{placement:`${n==="above"?"top":"bottom"}${e==="center"?"":e==="right"?"-end":"-start"}`,allowFlip:n==="auto"}}startRepositioning(){const n=this.getAnchorElement(),e=this.floatingElement;!n||!e||(this.cleanupAutoUpdate=An(n,e,this.reposition))}stopRepositioning(){this.cleanupAutoUpdate?.(),this.cleanupAutoUpdate=null}}var wa=Object.getOwnPropertyDescriptor,xa=(t,n,e,o)=>{for(var s=o>1?void 0:o?wa(n,e):n,c=t.length-1,f;c>=0;c--)(f=t[c])&&(s=f(s)||s);return s};const Qe=" tot en met ",Ot="/";let it=class extends Ft{constructor(){super(...arguments),this.regex=I.regex,this.type=I.type,this.minDate=I.minDate,this.maxDate=I.maxDate,this.minTime=I.minTime,this.maxTime=I.maxTime,this.format=I.format,this.block=I.block,this.readonly=I.readonly,this.value=I.value,this.placeholder=I.placeholder,this.autocomplete=I.autocomplete,this.amPm=I.amPm,this.disableMaskValidation=I.disableMaskValidation,this.pattern=I.pattern,this.position=I.position,this.isStatic=I.isStatic,this.inlinePositioning=!1,this.polyfillReady=Ie.isNativelySupported(),this.anchorController=new Ie(this),this.initialValue="",this.inputHasFocus=!1,this.flatpickrInstance=null,this.maskOptions=null,this.cleaveInstance=null,this.inputValue="",this.dispatchInput=!1,this.handleOpenChange=t=>{this.isOpen=t,t&&this.addAccessibilityAttributes()},this.toggleCalendar=()=>{this.useAnchorPositioning||this.calculateCalendarPlaceholderPosition(),this.flatpickrInstance?.toggle()},this.onInputFocus=()=>{this.inputHasFocus=!0},this.onInputBlur=()=>{this.inputHasFocus=!1},this.onInput=t=>{this.handleInputValueChanged(t.target?.value??"")},this.parseRangeISODateString=t=>t.split(Ot).map(n=>k.parseDate(n,"Y-m-d")),this.formatInputValue=t=>k.formatDate(t,this.format),this.formatRangeInputValue=t=>t.map(n=>this.formatInputValue(n)).join(ie?.nl?.rangeSeparator||Qe),this.handleDatePickerChange=t=>{t.length===1?(this.inputValue=this.formatInputValue(t[0]),this.value=this.getISODateString(t[0])):t.length===2&&(this.value=this.getISODateString(t[0],t[1]),this.inputValue=this.formatRangeInputValue(t))},this.handleOpenCalendar=()=>{this.handleOpenChange(!0),this.addEventListener("click",this.handleCalendarClicked),!this.isStatic&&this.useAnchorPositioning&&this.anchorController.show()},this.handleCloseCalendar=()=>{this.handleOpenChange(!1),this.removeEventListener("click",this.handleCalendarClicked),!this.isStatic&&this.useAnchorPositioning&&this.anchorController.hide()},this.updateFormControlValue=t=>{const n={value:this.value},e=this.flatpickrInstance?.parseDate(t,this.format);this.inputValue!==this.flatpickrInstance?.input.value&&e&&this.flatpickrInstance?.setDate(e,!1,this.format),this.setValue(this.value??""),this.dispatchEvent(new CustomEvent("vl-change",{composed:!0,bubbles:!0,detail:n})),this.dispatchInput&&(this.dispatchEvent(new CustomEvent("vl-input",{composed:!0,bubbles:!0,detail:n})),this.dispatchInput=!1),this.dispatchEventIfValid(n)}}static get styles(){return[Pn,Rn,On,na,ia,aa,Fn,_n]}static get properties(){return{block:{type:Boolean},readonly:{type:Boolean},value:{type:String},placeholder:{type:String},autocomplete:{type:String},type:{type:String},format:{type:String},amPm:{type:Boolean,attribute:"am-pm"},minDate:{type:String,attribute:"min-date"},maxDate:{type:String,attribute:"max-date"},minTime:{type:String,attribute:"min-time"},maxTime:{type:String,attribute:"max-time"},pattern:{type:String},disableMaskValidation:{type:Boolean,attribute:"disable-mask-validation"},rawValue:{type:Boolean,attribute:"raw-value"},inputValue:{type:String,state:!0},isOpen:{type:Boolean,state:!0},position:{type:String},isStatic:{type:Boolean,attribute:"static"},inlinePositioning:{type:Boolean,attribute:"inline-positioning"},polyfillReady:{type:Boolean,state:!0}}}get validationTarget(){return this.shadowRoot?.querySelector("input")}get useAnchorPositioning(){return!this.inlinePositioning&&this.polyfillReady}connectedCallback(){super.connectedCallback(),ie?.nl&&(ie.nl={...ie.nl,rangeSeparator:Qe,yearAriaLabel:"Jaar",monthAriaLabel:"Maand",hourAriaLabel:"Uur",minuteAriaLabel:"Minuut"},k.l10ns.default.rangeSeparator=Qe),!this.initialValue&&typeof this.value=="string"&&(this.initialValue=this.value)}async firstUpdated(t){if(super.firstUpdated(t),t.has("type")&&!this.format){const e="d.m.Y";switch(this.type){case"date":this.format=e;break;case"time":this.format="H:i";break;case"date-time":this.format=`${e} H:i`;break;default:this.format=e}}this.maskOptions=this.composeMaskForFormat(this.format,this.type),this.maskOptions&&!this.disableMaskValidation&&(this.cleaveInstance=new jn(this.validationTarget,this.maskOptions)),!this.inlinePositioning&&!this.polyfillReady&&this.shadowRoot&&(this.polyfillReady=await Ie.ensureSupport()),this.initializeComponent(),this.setInitialValue()}updated(t){super.updated(t),t.has("inlinePositioning")&&!this.inlinePositioning&&!this.polyfillReady&&this.shadowRoot&&Ie.ensureSupport().then(o=>{this.polyfillReady=o}),(t.has("inlinePositioning")||t.has("polyfillReady"))&&this.flatpickrInstance&&!this.isStatic&&(this.useAnchorPositioning?this.anchorController.attach(this.flatpickrInstance.calendarContainer):this.anchorController.detach(),this.updateOptionsForInstance(this.getOptions()));const n=this.getDynamicOptions();if(["disabled","readonly","minDate","maxDate","minTime","maxTime",...this.useAnchorPositioning?[]:["position"]].some(o=>t.has(o))&&this.updateOptionsForInstance(n),t.has("value")&&!t.has("inputValue")&&typeof this.value=="string")switch(this.type){case"date-time":case"date":{const o=k.parseDate(this.value,"Z");o?this.inputValue=k.formatDate(o,this.format):!o&&!this.value&&(this.flatpickrInstance?.clear(),this.inputValue="");break}case"time":{const o=k.parseDate(this.value,this.format);o?this.inputValue=k.formatDate(o,this.format):!o&&!this.value&&(this.flatpickrInstance?.clear(),this.inputValue="");break}default:this.inputValue=this.value}t.has("inputValue")&&this.updateFormControlValue(this.inputValue??""),t.has("block")&&(this.block?this.getFlatpickrWrapper()?.classList.add("flatpickr-wrapper--block"):this.getFlatpickrWrapper()?.classList.remove("flatpickr-wrapper--block"))}disconnectedCallback(){super.disconnectedCallback(),this.flatpickrInstance?.destroy()}render(){const t={"vl-input-field":!0,"vl-input-field--input-group-left":!0,"js-vl-datepicker-toggle":!0,"vl-input-field--error":this.error||this.isInvalid,"vl-input-field--success":this.success,"vl-input-field--block":this.block,"vl-input-field--disabled":this.disabled},n={"vl-input-addon":!0,"js-vl-datepicker-toggle":!0,"vl-input-addon--error":this.error||this.isInvalid,"vl-input-addon--success":this.success,"vl-input-addon--disabled":this.disabled};return Ln`
            <div class="vl-group vl-group--input-group" id="datepicker-wrapper">
                <input
                    id=${this.id||j}
                    name=${this.name||j}
                    class=${yt(t)}
                    type="text"
                    aria-label=${this.label||j}
                    aria-invalid=${this.isInvalid||j}
                    ?required=${this.required}
                    ?disabled=${this.disabled}
                    ?error=${this.error}
                    ?readonly=${this.readonly}
                    .value=${Nn(this.inputValue)}
                    placeholder=${this.placeholder||j}
                    autocomplete=${this.autocomplete||j}
                    pattern=${this.pattern||j}
                    inputmode=${this.cleaveInstance?"numeric":j}
                    @focus="${this.onInputFocus}"
                    @blur="${this.onInputBlur}"
                    @input=${this.cleaveInstance?j:this.onInput}
                />
                <button
                    id="toggle-calendar"
                    type="button"
                    class=${yt(n)}
                    ?disabled=${this.disabled||this.readonly}
                    aria-label="datumkiezer${this.label?` ${this.label}`:""}"
                    aria-expanded=${this.isOpen}
                    aria-controls=${this.id||j}
                    @click=${this.toggleCalendar}
                >
                    <span
                        class="vl-icon vl-icon--small vl-vi vl-icon--${this.type==="time"?"clock":"calendar"}"
                        aria-hidden="true"
                    ></span>
                </button>
            </div>
            <div id="datepicker-calendar-placeholder"></div>
        `}resetFormControl(){super.resetFormControl(),this.setInitialValue()}getRawValue(){return this.cleaveInstance?.getRawValue()}getDates(){return this.flatpickrInstance?.selectedDates}setInitialValue(){if(this.value=this.initialValue,this.type==="range"&&this.initialValue){const n=this.parseRangeISODateString(this.initialValue);n.length===1?(this.inputValue=this.formatInputValue(n[0]),this.flatpickrInstance?.setDate(n[0],!0)):n.length===2&&(this.inputValue=this.formatRangeInputValue(n),this.flatpickrInstance?.setDate(n,!0));return}const t=this.flatpickrInstance?.parseDate(this.initialValue,"Z");t instanceof Date&&!isNaN(t)&&this.type!=="range"?(this.flatpickrInstance?.setDate(t,!0),this.inputValue=k.formatDate(t,this.format),this.dispatchInput=!1):this.type==="time"&&this.initialValue?this.inputValue=this.initialValue:(this.flatpickrInstance?.clear(),this.inputValue="")}parseTodayDate(t){const n=e=>k.formatDate(e,this.format);if(t==="today")return n(new Date);if(t){const e=k.parseDate(t,"Z");return e?n(e):void 0}else return}getDynamicOptions(){const t=k.parseDate(this.minTime,this.format);return{allowInput:this.inputHasFocus&&!(this.disabled||this.readonly),maxDate:this.maxDate,minDate:this.minDate,minTime:this.minTime,maxTime:this.maxTime,defaultHour:t?.getHours()??12,defaultMinute:t?.getMinutes()??0,...this.useAnchorPositioning?{}:{position:this.position||"auto"}}}addAccessibilityAttributes(){const t=this.shadowRoot?.querySelector(".flatpickr-calendar");t?.querySelectorAll(".flatpickr-day").forEach(n=>{const e=n.getAttribute("aria-label");if(e){const s=new Date(e).toLocaleDateString("nl-NL",{weekday:"long"});n.setAttribute("aria-label",`${e}, ${s}`),n.setAttribute("role","button")}}),t?.querySelectorAll(".flatpickr-prev-month, .flatpickr-month")?.forEach(n=>{n.setAttribute("aria-label",n.classList.contains("flatpickr-prev-month")?"Vorige maand":"Volgende maand"),n.setAttribute("role","button"),n.querySelector("svg")?.setAttribute("aria-hidden","true")}),t?.querySelector(".flatpickr-weekdays")?.setAttribute("aria-hidden","true")}getOptions(){const t=this.shadowRoot?.querySelector("button"),n=this.type!=="range"&&this.parseTodayDate(this.initialValue),o={...{dateFormat:this.format,locale:ie.nl,clickOpens:!1,onChange:this.handleDatePickerChange,onOpen:this.handleOpenCalendar,onClose:this.handleCloseCalendar,position:this.isStatic?void 0:this.useAnchorPositioning?(()=>{}):void 0,positionElement:this.useAnchorPositioning?void 0:t,static:this.isStatic,appendTo:this.getCalendarPlaceholder(),defaultDate:n,enableTime:this.type==="time"||this.type==="date-time",noCalendar:this.type==="time",time_24hr:!this.amPm,mode:this.type!=="range"?"single":"range",disableMobile:!0},...this.getDynamicOptions()};return Object.keys(o).forEach(s=>{o[s]===void 0&&delete o[s]}),o}getDatePicker(){return this.shadowRoot?.querySelector("#datepicker-wrapper")}getFlatpickrWrapper(){return this.shadowRoot?.querySelector(".flatpickr-wrapper")}getCalendarPlaceholder(){return this.shadowRoot?.querySelector("#datepicker-calendar-placeholder")}updateOptionsForInstance(t){Object.keys(t).map(n=>n).forEach(n=>{this.flatpickrInstance?.set(n,t[n])})}initializeComponent(){this.getDatePicker()&&!this.flatpickrInstance&&(this.flatpickrInstance=k(this.getDatePicker(),this.getOptions()),this.getDatePicker()?.classList.add("static"),this.getDatePicker()?.removeAttribute("readonly"),!this.isStatic&&this.flatpickrInstance&&(this.useAnchorPositioning?this.anchorController.attach(this.flatpickrInstance.calendarContainer):this.calculateCalendarPlaceholderPosition()))}calculateCalendarPlaceholderPosition(){if(this.getDatePicker()){const{top:t,left:n,height:e}=this.getDatePicker().getBoundingClientRect(),o=window.scrollY||0,s=window.scrollX||0,c=this.getCalendarPlaceholder();c.style.top=Hn?`calc(-${t+o}px - ${e}px)`:`-${t+o}px`,c.style.left=`-${n+s}px`}}handleCalendarClicked(){this.dispatchInput=!0}getISODateString(t,n){if(!t)return"";switch(this.type){case"time":return k.formatDate(t,this.format?.includes("S")?"H:i:S":"H:i");case"date-time":return k.formatDate(t,"Y-m-dTH:i");case"range":return`${k.formatDate(t,"Y-m-d")}${n?Ot+k.formatDate(n,"Y-m-d"):""}`;case"date":default:return k.formatDate(t,"Y-m-d")}}getDatesFromInputValue(t){const n=ie?.nl?.rangeSeparator,o=(n&&t.split(n)||[])?.map(s=>k.parseDate(s,this.format));return o.length&&o.every(s=>s instanceof Date)?o:void 0}handleInputValueChanged(t,n=!0){this.dispatchInput=!0;let e,o;try{const s=this.pattern?new RegExp(this.pattern):void 0,c=this.regex||s;o=c?c.test(t):!0,o&&(e=k.parseDate(t,this.format))}catch{}finally{if(n&&o&&e&&this.type!=="range")this.value=this.getISODateString(e);else if(this.type==="range"){const s=this.getDatesFromInputValue(t);s?.length?this.value=this.getISODateString(s[0],s[1]):this.value=t,this.inputValue=t}else this.inputValue=t,this.value=t;e instanceof Date&&!isNaN(e)&&this.flatpickrInstance?.setDate(t,!1,this.format)}}composeMaskForFormat(t,n){if(!t)return null;let e=null;switch(n){case"date":e=Zn(t);break;case"time":e=Gn(t);break}return e?{...e,onValueChanged:({target:{value:o,rawValue:s}})=>{const c=e?.regex?.test(s);this.handleInputValueChanged(o??"",c)}}:null}};it.formControlValidators=[...Ft.formControlValidators,Xn,Qn,ea];it=xa([Yn("vl-datepicker")],it);export{it as V,I as d,k as f};
