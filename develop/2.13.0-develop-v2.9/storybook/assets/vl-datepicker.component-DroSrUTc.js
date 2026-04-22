import{cd as Yt,bt as Ht,i as jt,_ as Vt,br as et,bs as Lt,dG as Wt,k as zt,dH as $t,T as Y,K as Ke,ce as Bt,x as Je,dI as Ut,w as qt}from"./iframe-aAtdr__L.js";import{C as Kt}from"./cleave-esm-DfUhcNrv.js";var Te=["onChange","onClose","onDayCreate","onDestroy","onKeyDown","onMonthChange","onOpen","onParseConfig","onReady","onValueUpdate","onYearChange","onPreCalendarPosition"],X={_disable:[],allowInput:!1,allowInvalidPreload:!1,altFormat:"F j, Y",altInput:!1,altInputClass:"form-control input",animate:typeof window=="object"&&window.navigator.userAgent.indexOf("MSIE")===-1,ariaDateFormat:"F j, Y",autoFillDefaultTime:!0,clickOpens:!0,closeOnSelect:!0,conjunction:", ",dateFormat:"Y-m-d",defaultHour:12,defaultMinute:0,defaultSeconds:0,disable:[],disableMobile:!1,enableSeconds:!1,enableTime:!1,errorHandler:function(t){return typeof console<"u"&&console.warn(t)},getWeek:function(t){var r=new Date(t.getTime());r.setHours(0,0,0,0),r.setDate(r.getDate()+3-(r.getDay()+6)%7);var e=new Date(r.getFullYear(),0,4);return 1+Math.round(((r.getTime()-e.getTime())/864e5-3+(e.getDay()+6)%7)/7)},hourIncrement:1,ignoredFocusElements:[],inline:!1,locale:"default",minuteIncrement:5,mode:"single",monthSelectorType:"dropdown",nextArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",noCalendar:!1,now:new Date,onChange:[],onClose:[],onDayCreate:[],onDestroy:[],onKeyDown:[],onMonthChange:[],onOpen:[],onParseConfig:[],onReady:[],onValueUpdate:[],onYearChange:[],onPreCalendarPosition:[],plugins:[],position:"auto",positionElement:void 0,prevArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",shorthandCurrentMonth:!1,showMonths:1,static:!1,time_24hr:!1,weekNumbers:!1,wrap:!1},oe={weekdays:{shorthand:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},months:{shorthand:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longhand:["January","February","March","April","May","June","July","August","September","October","November","December"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:0,ordinal:function(t){var r=t%100;if(r>3&&r<21)return"th";switch(r%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},rangeSeparator:" to ",weekAbbreviation:"Wk",scrollTitle:"Scroll to increment",toggleTitle:"Click to toggle",amPM:["AM","PM"],yearAriaLabel:"Year",monthAriaLabel:"Month",hourAriaLabel:"Hour",minuteAriaLabel:"Minute",time_24hr:!1},E=function(t,r){return r===void 0&&(r=2),("000"+t).slice(r*-1)},_=function(t){return t===!0?1:0};function Ge(t,r){var e;return function(){var l=this,d=arguments;clearTimeout(e),e=setTimeout(function(){return t.apply(l,d)},r)}}var Ee=function(t){return t instanceof Array?t:[t]};function T(t,r,e){if(e===!0)return t.classList.add(r);t.classList.remove(r)}function y(t,r,e){var l=window.document.createElement(t);return r=r||"",e=e||"",l.className=r,e!==void 0&&(l.textContent=e),l}function me(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function tt(t,r){if(r(t))return t;if(t.parentNode)return tt(t.parentNode,r)}function ge(t,r){var e=y("div","numInputWrapper"),l=y("input","numInput "+t),d=y("span","arrowUp"),c=y("span","arrowDown");if(navigator.userAgent.indexOf("MSIE 9.0")===-1?l.type="number":(l.type="text",l.pattern="\\d*"),r!==void 0)for(var g in r)l.setAttribute(g,r[g]);return e.appendChild(l),e.appendChild(d),e.appendChild(c),e}function F(t){try{if(typeof t.composedPath=="function"){var r=t.composedPath();return r[0]}return t.target}catch{return t.target}}var Oe=function(){},ve=function(t,r,e){return e.months[r?"shorthand":"longhand"][t]},Jt={D:Oe,F:function(t,r,e){t.setMonth(e.months.longhand.indexOf(r))},G:function(t,r){t.setHours((t.getHours()>=12?12:0)+parseFloat(r))},H:function(t,r){t.setHours(parseFloat(r))},J:function(t,r){t.setDate(parseFloat(r))},K:function(t,r,e){t.setHours(t.getHours()%12+12*_(new RegExp(e.amPM[1],"i").test(r)))},M:function(t,r,e){t.setMonth(e.months.shorthand.indexOf(r))},S:function(t,r){t.setSeconds(parseFloat(r))},U:function(t,r){return new Date(parseFloat(r)*1e3)},W:function(t,r,e){var l=parseInt(r),d=new Date(t.getFullYear(),0,2+(l-1)*7,0,0,0,0);return d.setDate(d.getDate()-d.getDay()+e.firstDayOfWeek),d},Y:function(t,r){t.setFullYear(parseFloat(r))},Z:function(t,r){return new Date(r)},d:function(t,r){t.setDate(parseFloat(r))},h:function(t,r){t.setHours((t.getHours()>=12?12:0)+parseFloat(r))},i:function(t,r){t.setMinutes(parseFloat(r))},j:function(t,r){t.setDate(parseFloat(r))},l:Oe,m:function(t,r){t.setMonth(parseFloat(r)-1)},n:function(t,r){t.setMonth(parseFloat(r)-1)},s:function(t,r){t.setSeconds(parseFloat(r))},u:function(t,r){return new Date(parseFloat(r))},w:Oe,y:function(t,r){t.setFullYear(2e3+parseFloat(r))}},U={D:"",F:"",G:"(\\d\\d|\\d)",H:"(\\d\\d|\\d)",J:"(\\d\\d|\\d)\\w+",K:"",M:"",S:"(\\d\\d|\\d)",U:"(.+)",W:"(\\d\\d|\\d)",Y:"(\\d{4})",Z:"(.+)",d:"(\\d\\d|\\d)",h:"(\\d\\d|\\d)",i:"(\\d\\d|\\d)",j:"(\\d\\d|\\d)",l:"",m:"(\\d\\d|\\d)",n:"(\\d\\d|\\d)",s:"(\\d\\d|\\d)",u:"(.+)",w:"(\\d\\d|\\d)",y:"(\\d{2})"},ie={Z:function(t){return t.toISOString()},D:function(t,r,e){return r.weekdays.shorthand[ie.w(t,r,e)]},F:function(t,r,e){return ve(ie.n(t,r,e)-1,!1,r)},G:function(t,r,e){return E(ie.h(t,r,e))},H:function(t){return E(t.getHours())},J:function(t,r){return r.ordinal!==void 0?t.getDate()+r.ordinal(t.getDate()):t.getDate()},K:function(t,r){return r.amPM[_(t.getHours()>11)]},M:function(t,r){return ve(t.getMonth(),!0,r)},S:function(t){return E(t.getSeconds())},U:function(t){return t.getTime()/1e3},W:function(t,r,e){return e.getWeek(t)},Y:function(t){return E(t.getFullYear(),4)},d:function(t){return E(t.getDate())},h:function(t){return t.getHours()%12?t.getHours()%12:12},i:function(t){return E(t.getMinutes())},j:function(t){return t.getDate()},l:function(t,r){return r.weekdays.longhand[t.getDay()]},m:function(t){return E(t.getMonth()+1)},n:function(t){return t.getMonth()+1},s:function(t){return t.getSeconds()},u:function(t){return t.getTime()},w:function(t){return t.getDay()},y:function(t){return String(t.getFullYear()).substring(2)}},nt=function(t){var r=t.config,e=r===void 0?X:r,l=t.l10n,d=l===void 0?oe:l,c=t.isMobile,g=c===void 0?!1:c;return function(v,D,A){var M=A||d;return e.formatDate!==void 0&&!g?e.formatDate(v,D,M):D.split("").map(function(N,P,j){return ie[N]&&j[P-1]!=="\\"?ie[N](v,M,e):N!=="\\"?N:""}).join("")}},Ae=function(t){var r=t.config,e=r===void 0?X:r,l=t.l10n,d=l===void 0?oe:l;return function(c,g,v,D){if(!(c!==0&&!c)){var A=D||d,M,N=c;if(c instanceof Date)M=new Date(c.getTime());else if(typeof c!="string"&&c.toFixed!==void 0)M=new Date(c);else if(typeof c=="string"){var P=g||(e||X).dateFormat,j=String(c).trim();if(j==="today")M=new Date,v=!0;else if(e&&e.parseDate)M=e.parseDate(c,P);else if(/Z$/.test(j)||/GMT$/.test(j))M=new Date(c);else{for(var le=void 0,w=[],W=0,be=0,L="";W<P.length;W++){var z=P[W],q=z==="\\",ke=P[W-1]==="\\"||q;if(U[z]&&!ke){L+=U[z];var $=new RegExp(L).exec(c);$&&(le=!0)&&w[z!=="Y"?"push":"unshift"]({fn:Jt[z],val:$[++be]})}else q||(L+=".")}M=!e||!e.noCalendar?new Date(new Date().getFullYear(),0,1,0,0,0,0):new Date(new Date().setHours(0,0,0,0)),w.forEach(function(K){var J=K.fn,ye=K.val;return M=J(M,ye,A)||M}),M=le?M:void 0}}if(!(M instanceof Date&&!isNaN(M.getTime()))){e.errorHandler(new Error("Invalid date provided: "+N));return}return v===!0&&M.setHours(0,0,0,0),M}}};function R(t,r,e){return e===void 0&&(e=!0),e!==!1?new Date(t.getTime()).setHours(0,0,0,0)-new Date(r.getTime()).setHours(0,0,0,0):t.getTime()-r.getTime()}var Gt=function(t,r,e){return t>Math.min(r,e)&&t<Math.max(r,e)},Fe=function(t,r,e){return t*3600+r*60+e},Zt=function(t){var r=Math.floor(t/3600),e=(t-r*3600)/60;return[r,e,t-r*3600-e*60]},Qt={DAY:864e5};function Re(t){var r=t.defaultHour,e=t.defaultMinute,l=t.defaultSeconds;if(t.minDate!==void 0){var d=t.minDate.getHours(),c=t.minDate.getMinutes(),g=t.minDate.getSeconds();r<d&&(r=d),r===d&&e<c&&(e=c),r===d&&e===c&&l<g&&(l=t.minDate.getSeconds())}if(t.maxDate!==void 0){var v=t.maxDate.getHours(),D=t.maxDate.getMinutes();r=Math.min(r,v),r===v&&(e=Math.min(D,e)),r===v&&e===D&&(l=t.maxDate.getSeconds())}return{hours:r,minutes:e,seconds:l}}typeof Object.assign!="function"&&(Object.assign=function(t){for(var r=[],e=1;e<arguments.length;e++)r[e-1]=arguments[e];if(!t)throw TypeError("Cannot convert undefined or null to object");for(var l=function(v){v&&Object.keys(v).forEach(function(D){return t[D]=v[D]})},d=0,c=r;d<c.length;d++){var g=c[d];l(g)}return t});var S=function(){return S=Object.assign||function(t){for(var r,e=1,l=arguments.length;e<l;e++){r=arguments[e];for(var d in r)Object.prototype.hasOwnProperty.call(r,d)&&(t[d]=r[d])}return t},S.apply(this,arguments)},Ze=function(){for(var t=0,r=0,e=arguments.length;r<e;r++)t+=arguments[r].length;for(var l=Array(t),d=0,r=0;r<e;r++)for(var c=arguments[r],g=0,v=c.length;g<v;g++,d++)l[d]=c[g];return l},Xt=300;function en(t,r){var e={config:S(S({},X),h.defaultConfig),l10n:oe};e.parseDate=Ae({config:e.config,l10n:e.l10n}),e._handlers=[],e.pluginElements=[],e.loadedPlugins=[],e._bind=w,e._setHoursFromDate=P,e._positionCalendar=ue,e.changeMonth=we,e.changeYear=de,e.clear=ct,e.close=ft,e.onMouseOver=fe,e._createElement=y,e.createDay=$,e.destroy=ut,e.isEnabled=B,e.jumpToDate=L,e.updateValue=V,e.open=mt,e.redraw=ze,e.set=kt,e.setDate=yt,e.toggle=Mt;function l(){e.utils={getDaysInMonth:function(n,a){return n===void 0&&(n=e.currentMonth),a===void 0&&(a=e.currentYear),n===1&&(a%4===0&&a%100!==0||a%400===0)?29:e.l10n.daysInMonth[n]}}}function d(){e.element=e.input=t,e.isOpen=!1,gt(),We(),xt(),wt(),l(),e.isMobile||ke(),be(),(e.selectedDates.length||e.config.noCalendar)&&(e.config.enableTime&&P(e.config.noCalendar?e.latestSelectedDateObj:void 0),V(!1)),v();var n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);!e.isMobile&&n&&ue(),C("onReady")}function c(){var n;return((n=e.calendarContainer)===null||n===void 0?void 0:n.getRootNode()).activeElement||document.activeElement}function g(n){return n.bind(e)}function v(){var n=e.config;n.weekNumbers===!1&&n.showMonths===1||n.noCalendar!==!0&&window.requestAnimationFrame(function(){if(e.calendarContainer!==void 0&&(e.calendarContainer.style.visibility="hidden",e.calendarContainer.style.display="block"),e.daysContainer!==void 0){var a=(e.days.offsetWidth+1)*n.showMonths;e.daysContainer.style.width=a+"px",e.calendarContainer.style.width=a+(e.weekWrapper!==void 0?e.weekWrapper.offsetWidth:0)+"px",e.calendarContainer.style.removeProperty("visibility"),e.calendarContainer.style.removeProperty("display")}})}function D(n){if(e.selectedDates.length===0){var a=e.config.minDate===void 0||R(new Date,e.config.minDate)>=0?new Date:new Date(e.config.minDate.getTime()),i=Re(e.config);a.setHours(i.hours,i.minutes,i.seconds,a.getMilliseconds()),e.selectedDates=[a],e.latestSelectedDateObj=a}n!==void 0&&n.type!=="blur"&&St(n);var o=e._input.value;N(),V(),e._input.value!==o&&e._debouncedChange()}function A(n,a){return n%12+12*_(a===e.l10n.amPM[1])}function M(n){switch(n%24){case 0:case 12:return 12;default:return n%12}}function N(){if(!(e.hourElement===void 0||e.minuteElement===void 0)){var n=(parseInt(e.hourElement.value.slice(-2),10)||0)%24,a=(parseInt(e.minuteElement.value,10)||0)%60,i=e.secondElement!==void 0?(parseInt(e.secondElement.value,10)||0)%60:0;e.amPM!==void 0&&(n=A(n,e.amPM.textContent));var o=e.config.minTime!==void 0||e.config.minDate&&e.minDateHasTime&&e.latestSelectedDateObj&&R(e.latestSelectedDateObj,e.config.minDate,!0)===0,s=e.config.maxTime!==void 0||e.config.maxDate&&e.maxDateHasTime&&e.latestSelectedDateObj&&R(e.latestSelectedDateObj,e.config.maxDate,!0)===0;if(e.config.maxTime!==void 0&&e.config.minTime!==void 0&&e.config.minTime>e.config.maxTime){var f=Fe(e.config.minTime.getHours(),e.config.minTime.getMinutes(),e.config.minTime.getSeconds()),b=Fe(e.config.maxTime.getHours(),e.config.maxTime.getMinutes(),e.config.maxTime.getSeconds()),p=Fe(n,a,i);if(p>b&&p<f){var k=Zt(f);n=k[0],a=k[1],i=k[2]}}else{if(s){var u=e.config.maxTime!==void 0?e.config.maxTime:e.config.maxDate;n=Math.min(n,u.getHours()),n===u.getHours()&&(a=Math.min(a,u.getMinutes())),a===u.getMinutes()&&(i=Math.min(i,u.getSeconds()))}if(o){var m=e.config.minTime!==void 0?e.config.minTime:e.config.minDate;n=Math.max(n,m.getHours()),n===m.getHours()&&a<m.getMinutes()&&(a=m.getMinutes()),a===m.getMinutes()&&(i=Math.max(i,m.getSeconds()))}}j(n,a,i)}}function P(n){var a=n||e.latestSelectedDateObj;a&&a instanceof Date&&j(a.getHours(),a.getMinutes(),a.getSeconds())}function j(n,a,i){e.latestSelectedDateObj!==void 0&&e.latestSelectedDateObj.setHours(n%24,a,i||0,0),!(!e.hourElement||!e.minuteElement||e.isMobile)&&(e.hourElement.value=E(e.config.time_24hr?n:(12+n)%12+12*_(n%12===0)),e.minuteElement.value=E(a),e.amPM!==void 0&&(e.amPM.textContent=e.l10n.amPM[_(n>=12)]),e.secondElement!==void 0&&(e.secondElement.value=E(i)))}function le(n){var a=F(n),i=parseInt(a.value)+(n.delta||0);(i/1e3>1||n.key==="Enter"&&!/[^\d]/.test(i.toString()))&&de(i)}function w(n,a,i,o){if(a instanceof Array)return a.forEach(function(s){return w(n,s,i,o)});if(n instanceof Array)return n.forEach(function(s){return w(s,a,i,o)});n.addEventListener(a,i,o),e._handlers.push({remove:function(){return n.removeEventListener(a,i,o)}})}function W(){C("onChange")}function be(){if(e.config.wrap&&["open","close","toggle","clear"].forEach(function(i){Array.prototype.forEach.call(e.element.querySelectorAll("[data-"+i+"]"),function(o){return w(o,"click",e[i])})}),e.isMobile){Dt();return}var n=Ge(ht,50);if(e._debouncedChange=Ge(W,Xt),e.daysContainer&&!/iPhone|iPad|iPod/i.test(navigator.userAgent)&&w(e.daysContainer,"mouseover",function(i){e.config.mode==="range"&&fe(F(i))}),w(e._input,"keydown",je),e.calendarContainer!==void 0&&w(e.calendarContainer,"keydown",je),!e.config.inline&&!e.config.static&&w(window,"resize",n),window.ontouchstart!==void 0?w(window.document,"touchstart",xe):w(window.document,"mousedown",xe),w(window.document,"focus",xe,{capture:!0}),e.config.clickOpens===!0&&(w(e._input,"focus",e.open),w(e._input,"click",e.open)),e.daysContainer!==void 0&&(w(e.monthNav,"click",It),w(e.monthNav,["keyup","increment"],le),w(e.daysContainer,"click",$e)),e.timeContainer!==void 0&&e.minuteElement!==void 0&&e.hourElement!==void 0){var a=function(i){return F(i).select()};w(e.timeContainer,["increment"],D),w(e.timeContainer,"blur",D,{capture:!0}),w(e.timeContainer,"click",z),w([e.hourElement,e.minuteElement],["focus","click"],a),e.secondElement!==void 0&&w(e.secondElement,"focus",function(){return e.secondElement&&e.secondElement.select()}),e.amPM!==void 0&&w(e.amPM,"click",function(i){D(i)})}e.config.allowInput&&w(e._input,"blur",pt)}function L(n,a){var i=n!==void 0?e.parseDate(n):e.latestSelectedDateObj||(e.config.minDate&&e.config.minDate>e.now?e.config.minDate:e.config.maxDate&&e.config.maxDate<e.now?e.config.maxDate:e.now),o=e.currentYear,s=e.currentMonth;try{i!==void 0&&(e.currentYear=i.getFullYear(),e.currentMonth=i.getMonth())}catch(f){f.message="Invalid date supplied: "+i,e.config.errorHandler(f)}a&&e.currentYear!==o&&(C("onYearChange"),G()),a&&(e.currentYear!==o||e.currentMonth!==s)&&C("onMonthChange"),e.redraw()}function z(n){var a=F(n);~a.className.indexOf("arrow")&&q(n,a.classList.contains("arrowUp")?1:-1)}function q(n,a,i){var o=n&&F(n),s=i||o&&o.parentNode&&o.parentNode.firstChild,f=Me("increment");f.delta=a,s&&s.dispatchEvent(f)}function ke(){var n=window.document.createDocumentFragment();if(e.calendarContainer=y("div","flatpickr-calendar"),e.calendarContainer.tabIndex=-1,!e.config.noCalendar){if(n.appendChild(lt()),e.innerContainer=y("div","flatpickr-innerContainer"),e.config.weekNumbers){var a=dt(),i=a.weekWrapper,o=a.weekNumbers;e.innerContainer.appendChild(i),e.weekNumbers=o,e.weekWrapper=i}e.rContainer=y("div","flatpickr-rContainer"),e.rContainer.appendChild(Ye()),e.daysContainer||(e.daysContainer=y("div","flatpickr-days"),e.daysContainer.tabIndex=-1),se(),e.rContainer.appendChild(e.daysContainer),e.innerContainer.appendChild(e.rContainer),n.appendChild(e.innerContainer)}e.config.enableTime&&n.appendChild(st()),T(e.calendarContainer,"rangeMode",e.config.mode==="range"),T(e.calendarContainer,"animate",e.config.animate===!0),T(e.calendarContainer,"multiMonth",e.config.showMonths>1),e.calendarContainer.appendChild(n);var s=e.config.appendTo!==void 0&&e.config.appendTo.nodeType!==void 0;if((e.config.inline||e.config.static)&&(e.calendarContainer.classList.add(e.config.inline?"inline":"static"),e.config.inline&&(!s&&e.element.parentNode?e.element.parentNode.insertBefore(e.calendarContainer,e._input.nextSibling):e.config.appendTo!==void 0&&e.config.appendTo.appendChild(e.calendarContainer)),e.config.static)){var f=y("div","flatpickr-wrapper");e.element.parentNode&&e.element.parentNode.insertBefore(f,e.element),f.appendChild(e.element),e.altInput&&f.appendChild(e.altInput),f.appendChild(e.calendarContainer)}!e.config.static&&!e.config.inline&&(e.config.appendTo!==void 0?e.config.appendTo:window.document.body).appendChild(e.calendarContainer)}function $(n,a,i,o){var s=B(a,!0),f=y("span",n,a.getDate().toString());return f.dateObj=a,f.$i=o,f.setAttribute("aria-label",e.formatDate(a,e.config.ariaDateFormat)),n.indexOf("hidden")===-1&&R(a,e.now)===0&&(e.todayDateElem=f,f.classList.add("today"),f.setAttribute("aria-current","date")),s?(f.tabIndex=-1,Ce(a)&&(f.classList.add("selected"),e.selectedDateElem=f,e.config.mode==="range"&&(T(f,"startRange",e.selectedDates[0]&&R(a,e.selectedDates[0],!0)===0),T(f,"endRange",e.selectedDates[1]&&R(a,e.selectedDates[1],!0)===0),n==="nextMonthDay"&&f.classList.add("inRange")))):f.classList.add("flatpickr-disabled"),e.config.mode==="range"&&Ct(a)&&!Ce(a)&&f.classList.add("inRange"),e.weekNumbers&&e.config.showMonths===1&&n!=="prevMonthDay"&&o%7===6&&e.weekNumbers.insertAdjacentHTML("beforeend","<span class='flatpickr-day'>"+e.config.getWeek(a)+"</span>"),C("onDayCreate",f),f}function K(n){n.focus(),e.config.mode==="range"&&fe(n)}function J(n){for(var a=n>0?0:e.config.showMonths-1,i=n>0?e.config.showMonths:-1,o=a;o!=i;o+=n)for(var s=e.daysContainer.children[o],f=n>0?0:s.children.length-1,b=n>0?s.children.length:-1,p=f;p!=b;p+=n){var k=s.children[p];if(k.className.indexOf("hidden")===-1&&B(k.dateObj))return k}}function ye(n,a){for(var i=n.className.indexOf("Month")===-1?n.dateObj.getMonth():e.currentMonth,o=a>0?e.config.showMonths:-1,s=a>0?1:-1,f=i-e.currentMonth;f!=o;f+=s)for(var b=e.daysContainer.children[f],p=i-e.currentMonth===f?n.$i+a:a<0?b.children.length-1:0,k=b.children.length,u=p;u>=0&&u<k&&u!=(a>0?k:-1);u+=s){var m=b.children[u];if(m.className.indexOf("hidden")===-1&&B(m.dateObj)&&Math.abs(n.$i-u)>=Math.abs(a))return K(m)}e.changeMonth(s),te(J(s),0)}function te(n,a){var i=c(),o=ce(i||document.body),s=n!==void 0?n:o?i:e.selectedDateElem!==void 0&&ce(e.selectedDateElem)?e.selectedDateElem:e.todayDateElem!==void 0&&ce(e.todayDateElem)?e.todayDateElem:J(a>0?1:-1);s===void 0?e._input.focus():o?ye(s,a):K(s)}function it(n,a){for(var i=(new Date(n,a,1).getDay()-e.l10n.firstDayOfWeek+7)%7,o=e.utils.getDaysInMonth((a-1+12)%12,n),s=e.utils.getDaysInMonth(a,n),f=window.document.createDocumentFragment(),b=e.config.showMonths>1,p=b?"prevMonthDay hidden":"prevMonthDay",k=b?"nextMonthDay hidden":"nextMonthDay",u=o+1-i,m=0;u<=o;u++,m++)f.appendChild($("flatpickr-day "+p,new Date(n,a-1,u),u,m));for(u=1;u<=s;u++,m++)f.appendChild($("flatpickr-day",new Date(n,a,u),u,m));for(var x=s+1;x<=42-i&&(e.config.showMonths===1||m%7!==0);x++,m++)f.appendChild($("flatpickr-day "+k,new Date(n,a+1,x%s),x,m));var H=y("div","dayContainer");return H.appendChild(f),H}function se(){if(e.daysContainer!==void 0){me(e.daysContainer),e.weekNumbers&&me(e.weekNumbers);for(var n=document.createDocumentFragment(),a=0;a<e.config.showMonths;a++){var i=new Date(e.currentYear,e.currentMonth,1);i.setMonth(e.currentMonth+a),n.appendChild(it(i.getFullYear(),i.getMonth()))}e.daysContainer.appendChild(n),e.days=e.daysContainer.firstChild,e.config.mode==="range"&&e.selectedDates.length===1&&fe()}}function G(){if(!(e.config.showMonths>1||e.config.monthSelectorType!=="dropdown")){var n=function(o){return e.config.minDate!==void 0&&e.currentYear===e.config.minDate.getFullYear()&&o<e.config.minDate.getMonth()?!1:!(e.config.maxDate!==void 0&&e.currentYear===e.config.maxDate.getFullYear()&&o>e.config.maxDate.getMonth())};e.monthsDropdownContainer.tabIndex=-1,e.monthsDropdownContainer.innerHTML="";for(var a=0;a<12;a++)if(n(a)){var i=y("option","flatpickr-monthDropdown-month");i.value=new Date(e.currentYear,a).getMonth().toString(),i.textContent=ve(a,e.config.shorthandCurrentMonth,e.l10n),i.tabIndex=-1,e.currentMonth===a&&(i.selected=!0),e.monthsDropdownContainer.appendChild(i)}}}function ot(){var n=y("div","flatpickr-month"),a=window.document.createDocumentFragment(),i;e.config.showMonths>1||e.config.monthSelectorType==="static"?i=y("span","cur-month"):(e.monthsDropdownContainer=y("select","flatpickr-monthDropdown-months"),e.monthsDropdownContainer.setAttribute("aria-label",e.l10n.monthAriaLabel),w(e.monthsDropdownContainer,"change",function(b){var p=F(b),k=parseInt(p.value,10);e.changeMonth(k-e.currentMonth),C("onMonthChange")}),G(),i=e.monthsDropdownContainer);var o=ge("cur-year",{tabindex:"-1"}),s=o.getElementsByTagName("input")[0];s.setAttribute("aria-label",e.l10n.yearAriaLabel),e.config.minDate&&s.setAttribute("min",e.config.minDate.getFullYear().toString()),e.config.maxDate&&(s.setAttribute("max",e.config.maxDate.getFullYear().toString()),s.disabled=!!e.config.minDate&&e.config.minDate.getFullYear()===e.config.maxDate.getFullYear());var f=y("div","flatpickr-current-month");return f.appendChild(i),f.appendChild(o),a.appendChild(f),n.appendChild(a),{container:n,yearElement:s,monthElement:i}}function Pe(){me(e.monthNav),e.monthNav.appendChild(e.prevMonthNav),e.config.showMonths&&(e.yearElements=[],e.monthElements=[]);for(var n=e.config.showMonths;n--;){var a=ot();e.yearElements.push(a.yearElement),e.monthElements.push(a.monthElement),e.monthNav.appendChild(a.container)}e.monthNav.appendChild(e.nextMonthNav)}function lt(){return e.monthNav=y("div","flatpickr-months"),e.yearElements=[],e.monthElements=[],e.prevMonthNav=y("span","flatpickr-prev-month"),e.prevMonthNav.innerHTML=e.config.prevArrow,e.nextMonthNav=y("span","flatpickr-next-month"),e.nextMonthNav.innerHTML=e.config.nextArrow,Pe(),Object.defineProperty(e,"_hidePrevMonthArrow",{get:function(){return e.__hidePrevMonthArrow},set:function(n){e.__hidePrevMonthArrow!==n&&(T(e.prevMonthNav,"flatpickr-disabled",n),e.__hidePrevMonthArrow=n)}}),Object.defineProperty(e,"_hideNextMonthArrow",{get:function(){return e.__hideNextMonthArrow},set:function(n){e.__hideNextMonthArrow!==n&&(T(e.nextMonthNav,"flatpickr-disabled",n),e.__hideNextMonthArrow=n)}}),e.currentYearElement=e.yearElements[0],he(),e.monthNav}function st(){e.calendarContainer.classList.add("hasTime"),e.config.noCalendar&&e.calendarContainer.classList.add("noCalendar");var n=Re(e.config);e.timeContainer=y("div","flatpickr-time"),e.timeContainer.tabIndex=-1;var a=y("span","flatpickr-time-separator",":"),i=ge("flatpickr-hour",{"aria-label":e.l10n.hourAriaLabel});e.hourElement=i.getElementsByTagName("input")[0];var o=ge("flatpickr-minute",{"aria-label":e.l10n.minuteAriaLabel});if(e.minuteElement=o.getElementsByTagName("input")[0],e.hourElement.tabIndex=e.minuteElement.tabIndex=-1,e.hourElement.value=E(e.latestSelectedDateObj?e.latestSelectedDateObj.getHours():e.config.time_24hr?n.hours:M(n.hours)),e.minuteElement.value=E(e.latestSelectedDateObj?e.latestSelectedDateObj.getMinutes():n.minutes),e.hourElement.setAttribute("step",e.config.hourIncrement.toString()),e.minuteElement.setAttribute("step",e.config.minuteIncrement.toString()),e.hourElement.setAttribute("min",e.config.time_24hr?"0":"1"),e.hourElement.setAttribute("max",e.config.time_24hr?"23":"12"),e.hourElement.setAttribute("maxlength","2"),e.minuteElement.setAttribute("min","0"),e.minuteElement.setAttribute("max","59"),e.minuteElement.setAttribute("maxlength","2"),e.timeContainer.appendChild(i),e.timeContainer.appendChild(a),e.timeContainer.appendChild(o),e.config.time_24hr&&e.timeContainer.classList.add("time24hr"),e.config.enableSeconds){e.timeContainer.classList.add("hasSeconds");var s=ge("flatpickr-second");e.secondElement=s.getElementsByTagName("input")[0],e.secondElement.value=E(e.latestSelectedDateObj?e.latestSelectedDateObj.getSeconds():n.seconds),e.secondElement.setAttribute("step",e.minuteElement.getAttribute("step")),e.secondElement.setAttribute("min","0"),e.secondElement.setAttribute("max","59"),e.secondElement.setAttribute("maxlength","2"),e.timeContainer.appendChild(y("span","flatpickr-time-separator",":")),e.timeContainer.appendChild(s)}return e.config.time_24hr||(e.amPM=y("span","flatpickr-am-pm",e.l10n.amPM[_((e.latestSelectedDateObj?e.hourElement.value:e.config.defaultHour)>11)]),e.amPM.title=e.l10n.toggleTitle,e.amPM.tabIndex=-1,e.timeContainer.appendChild(e.amPM)),e.timeContainer}function Ye(){e.weekdayContainer?me(e.weekdayContainer):e.weekdayContainer=y("div","flatpickr-weekdays");for(var n=e.config.showMonths;n--;){var a=y("div","flatpickr-weekdaycontainer");e.weekdayContainer.appendChild(a)}return He(),e.weekdayContainer}function He(){if(e.weekdayContainer){var n=e.l10n.firstDayOfWeek,a=Ze(e.l10n.weekdays.shorthand);n>0&&n<a.length&&(a=Ze(a.splice(n,a.length),a.splice(0,n)));for(var i=e.config.showMonths;i--;)e.weekdayContainer.children[i].innerHTML=`
      <span class='flatpickr-weekday'>
        `+a.join("</span><span class='flatpickr-weekday'>")+`
      </span>
      `}}function dt(){e.calendarContainer.classList.add("hasWeeks");var n=y("div","flatpickr-weekwrapper");n.appendChild(y("span","flatpickr-weekday",e.l10n.weekAbbreviation));var a=y("div","flatpickr-weeks");return n.appendChild(a),{weekWrapper:n,weekNumbers:a}}function we(n,a){a===void 0&&(a=!0);var i=a?n:n-e.currentMonth;i<0&&e._hidePrevMonthArrow===!0||i>0&&e._hideNextMonthArrow===!0||(e.currentMonth+=i,(e.currentMonth<0||e.currentMonth>11)&&(e.currentYear+=e.currentMonth>11?1:-1,e.currentMonth=(e.currentMonth+12)%12,C("onYearChange"),G()),se(),C("onMonthChange"),he())}function ct(n,a){if(n===void 0&&(n=!0),a===void 0&&(a=!0),e.input.value="",e.altInput!==void 0&&(e.altInput.value=""),e.mobileInput!==void 0&&(e.mobileInput.value=""),e.selectedDates=[],e.latestSelectedDateObj=void 0,a===!0&&(e.currentYear=e._initialDate.getFullYear(),e.currentMonth=e._initialDate.getMonth()),e.config.enableTime===!0){var i=Re(e.config),o=i.hours,s=i.minutes,f=i.seconds;j(o,s,f)}e.redraw(),n&&C("onChange")}function ft(){e.isOpen=!1,e.isMobile||(e.calendarContainer!==void 0&&e.calendarContainer.classList.remove("open"),e._input!==void 0&&e._input.classList.remove("active")),C("onClose")}function ut(){e.config!==void 0&&C("onDestroy");for(var n=e._handlers.length;n--;)e._handlers[n].remove();if(e._handlers=[],e.mobileInput)e.mobileInput.parentNode&&e.mobileInput.parentNode.removeChild(e.mobileInput),e.mobileInput=void 0;else if(e.calendarContainer&&e.calendarContainer.parentNode)if(e.config.static&&e.calendarContainer.parentNode){var a=e.calendarContainer.parentNode;if(a.lastChild&&a.removeChild(a.lastChild),a.parentNode){for(;a.firstChild;)a.parentNode.insertBefore(a.firstChild,a);a.parentNode.removeChild(a)}}else e.calendarContainer.parentNode.removeChild(e.calendarContainer);e.altInput&&(e.input.type="text",e.altInput.parentNode&&e.altInput.parentNode.removeChild(e.altInput),delete e.altInput),e.input&&(e.input.type=e.input._type,e.input.classList.remove("flatpickr-input"),e.input.removeAttribute("readonly")),["_showTimeInput","latestSelectedDateObj","_hideNextMonthArrow","_hidePrevMonthArrow","__hideNextMonthArrow","__hidePrevMonthArrow","isMobile","isOpen","selectedDateElem","minDateHasTime","maxDateHasTime","days","daysContainer","_input","_positionElement","innerContainer","rContainer","monthNav","todayDateElem","calendarContainer","weekdayContainer","prevMonthNav","nextMonthNav","monthsDropdownContainer","currentMonthElement","currentYearElement","navigationCurrentMonth","selectedDateElem","config"].forEach(function(i){try{delete e[i]}catch{}})}function ne(n){return e.calendarContainer.contains(n)}function xe(n){if(e.isOpen&&!e.config.inline){var a=F(n),i=ne(a),o=a===e.input||a===e.altInput||e.element.contains(a)||n.path&&n.path.indexOf&&(~n.path.indexOf(e.input)||~n.path.indexOf(e.altInput)),s=!o&&!i&&!ne(n.relatedTarget),f=!e.config.ignoredFocusElements.some(function(b){return b.contains(a)});s&&f&&(e.config.allowInput&&e.setDate(e._input.value,!1,e.config.altInput?e.config.altFormat:e.config.dateFormat),e.timeContainer!==void 0&&e.minuteElement!==void 0&&e.hourElement!==void 0&&e.input.value!==""&&e.input.value!==void 0&&D(),e.close(),e.config&&e.config.mode==="range"&&e.selectedDates.length===1&&e.clear(!1))}}function de(n){if(!(!n||e.config.minDate&&n<e.config.minDate.getFullYear()||e.config.maxDate&&n>e.config.maxDate.getFullYear())){var a=n,i=e.currentYear!==a;e.currentYear=a||e.currentYear,e.config.maxDate&&e.currentYear===e.config.maxDate.getFullYear()?e.currentMonth=Math.min(e.config.maxDate.getMonth(),e.currentMonth):e.config.minDate&&e.currentYear===e.config.minDate.getFullYear()&&(e.currentMonth=Math.max(e.config.minDate.getMonth(),e.currentMonth)),i&&(e.redraw(),C("onYearChange"),G())}}function B(n,a){var i;a===void 0&&(a=!0);var o=e.parseDate(n,void 0,a);if(e.config.minDate&&o&&R(o,e.config.minDate,a!==void 0?a:!e.minDateHasTime)<0||e.config.maxDate&&o&&R(o,e.config.maxDate,a!==void 0?a:!e.maxDateHasTime)>0)return!1;if(!e.config.enable&&e.config.disable.length===0)return!0;if(o===void 0)return!1;for(var s=!!e.config.enable,f=(i=e.config.enable)!==null&&i!==void 0?i:e.config.disable,b=0,p=void 0;b<f.length;b++){if(p=f[b],typeof p=="function"&&p(o))return s;if(p instanceof Date&&o!==void 0&&p.getTime()===o.getTime())return s;if(typeof p=="string"){var k=e.parseDate(p,void 0,!0);return k&&k.getTime()===o.getTime()?s:!s}else if(typeof p=="object"&&o!==void 0&&p.from&&p.to&&o.getTime()>=p.from.getTime()&&o.getTime()<=p.to.getTime())return s}return!s}function ce(n){return e.daysContainer!==void 0?n.className.indexOf("hidden")===-1&&n.className.indexOf("flatpickr-disabled")===-1&&e.daysContainer.contains(n):!1}function pt(n){var a=n.target===e._input,i=e._input.value.trimEnd()!==Ie();a&&i&&!(n.relatedTarget&&ne(n.relatedTarget))&&e.setDate(e._input.value,!0,n.target===e.altInput?e.config.altFormat:e.config.dateFormat)}function je(n){var a=F(n),i=e.config.wrap?t.contains(a):a===e._input,o=e.config.allowInput,s=e.isOpen&&(!o||!i),f=e.config.inline&&i&&!o;if(n.keyCode===13&&i){if(o)return e.setDate(e._input.value,!0,a===e.altInput?e.config.altFormat:e.config.dateFormat),e.close(),a.blur();e.open()}else if(ne(a)||s||f){var b=!!e.timeContainer&&e.timeContainer.contains(a);switch(n.keyCode){case 13:b?(n.preventDefault(),D(),De()):$e(n);break;case 27:n.preventDefault(),De();break;case 8:case 46:i&&!e.config.allowInput&&(n.preventDefault(),e.clear());break;case 37:case 39:if(!b&&!i){n.preventDefault();var p=c();if(e.daysContainer!==void 0&&(o===!1||p&&ce(p))){var k=n.keyCode===39?1:-1;n.ctrlKey?(n.stopPropagation(),we(k),te(J(1),0)):te(void 0,k)}}else e.hourElement&&e.hourElement.focus();break;case 38:case 40:n.preventDefault();var u=n.keyCode===40?1:-1;e.daysContainer&&a.$i!==void 0||a===e.input||a===e.altInput?n.ctrlKey?(n.stopPropagation(),de(e.currentYear-u),te(J(1),0)):b||te(void 0,u*7):a===e.currentYearElement?de(e.currentYear-u):e.config.enableTime&&(!b&&e.hourElement&&e.hourElement.focus(),D(n),e._debouncedChange());break;case 9:if(b){var m=[e.hourElement,e.minuteElement,e.secondElement,e.amPM].concat(e.pluginElements).filter(function(O){return O}),x=m.indexOf(a);if(x!==-1){var H=m[x+(n.shiftKey?-1:1)];n.preventDefault(),(H||e._input).focus()}}else!e.config.noCalendar&&e.daysContainer&&e.daysContainer.contains(a)&&n.shiftKey&&(n.preventDefault(),e._input.focus());break}}if(e.amPM!==void 0&&a===e.amPM)switch(n.key){case e.l10n.amPM[0].charAt(0):case e.l10n.amPM[0].charAt(0).toLowerCase():e.amPM.textContent=e.l10n.amPM[0],N(),V();break;case e.l10n.amPM[1].charAt(0):case e.l10n.amPM[1].charAt(0).toLowerCase():e.amPM.textContent=e.l10n.amPM[1],N(),V();break}(i||ne(a))&&C("onKeyDown",n)}function fe(n,a){if(a===void 0&&(a="flatpickr-day"),!(e.selectedDates.length!==1||n&&(!n.classList.contains(a)||n.classList.contains("flatpickr-disabled")))){for(var i=n?n.dateObj.getTime():e.days.firstElementChild.dateObj.getTime(),o=e.parseDate(e.selectedDates[0],void 0,!0).getTime(),s=Math.min(i,e.selectedDates[0].getTime()),f=Math.max(i,e.selectedDates[0].getTime()),b=!1,p=0,k=0,u=s;u<f;u+=Qt.DAY)B(new Date(u),!0)||(b=b||u>s&&u<f,u<o&&(!p||u>p)?p=u:u>o&&(!k||u<k)&&(k=u));var m=Array.from(e.rContainer.querySelectorAll("*:nth-child(-n+"+e.config.showMonths+") > ."+a));m.forEach(function(x){var H=x.dateObj,O=H.getTime(),ae=p>0&&O<p||k>0&&O>k;if(ae){x.classList.add("notAllowed"),["inRange","startRange","endRange"].forEach(function(Z){x.classList.remove(Z)});return}else if(b&&!ae)return;["startRange","inRange","endRange","notAllowed"].forEach(function(Z){x.classList.remove(Z)}),n!==void 0&&(n.classList.add(i<=e.selectedDates[0].getTime()?"startRange":"endRange"),o<i&&O===o?x.classList.add("startRange"):o>i&&O===o&&x.classList.add("endRange"),O>=p&&(k===0||O<=k)&&Gt(O,o,i)&&x.classList.add("inRange"))})}}function ht(){e.isOpen&&!e.config.static&&!e.config.inline&&ue()}function mt(n,a){if(a===void 0&&(a=e._positionElement),e.isMobile===!0){if(n){n.preventDefault();var i=F(n);i&&i.blur()}e.mobileInput!==void 0&&(e.mobileInput.focus(),e.mobileInput.click()),C("onOpen");return}else if(e._input.disabled||e.config.inline)return;var o=e.isOpen;e.isOpen=!0,o||(e.calendarContainer.classList.add("open"),e._input.classList.add("active"),C("onOpen"),ue(a)),e.config.enableTime===!0&&e.config.noCalendar===!0&&e.config.allowInput===!1&&(n===void 0||!e.timeContainer.contains(n.relatedTarget))&&setTimeout(function(){return e.hourElement.select()},50)}function Ve(n){return function(a){var i=e.config["_"+n+"Date"]=e.parseDate(a,e.config.dateFormat),o=e.config["_"+(n==="min"?"max":"min")+"Date"];i!==void 0&&(e[n==="min"?"minDateHasTime":"maxDateHasTime"]=i.getHours()>0||i.getMinutes()>0||i.getSeconds()>0),e.selectedDates&&(e.selectedDates=e.selectedDates.filter(function(s){return B(s)}),!e.selectedDates.length&&n==="min"&&P(i),V()),e.daysContainer&&(ze(),i!==void 0?e.currentYearElement[n]=i.getFullYear().toString():e.currentYearElement.removeAttribute(n),e.currentYearElement.disabled=!!o&&i!==void 0&&o.getFullYear()===i.getFullYear())}}function gt(){var n=["wrap","weekNumbers","allowInput","allowInvalidPreload","clickOpens","time_24hr","enableTime","noCalendar","altInput","shorthandCurrentMonth","inline","static","enableSeconds","disableMobile"],a=S(S({},JSON.parse(JSON.stringify(t.dataset||{}))),r),i={};e.config.parseDate=a.parseDate,e.config.formatDate=a.formatDate,Object.defineProperty(e.config,"enable",{get:function(){return e.config._enable},set:function(m){e.config._enable=Ue(m)}}),Object.defineProperty(e.config,"disable",{get:function(){return e.config._disable},set:function(m){e.config._disable=Ue(m)}});var o=a.mode==="time";if(!a.dateFormat&&(a.enableTime||o)){var s=h.defaultConfig.dateFormat||X.dateFormat;i.dateFormat=a.noCalendar||o?"H:i"+(a.enableSeconds?":S":""):s+" H:i"+(a.enableSeconds?":S":"")}if(a.altInput&&(a.enableTime||o)&&!a.altFormat){var f=h.defaultConfig.altFormat||X.altFormat;i.altFormat=a.noCalendar||o?"h:i"+(a.enableSeconds?":S K":" K"):f+(" h:i"+(a.enableSeconds?":S":"")+" K")}Object.defineProperty(e.config,"minDate",{get:function(){return e.config._minDate},set:Ve("min")}),Object.defineProperty(e.config,"maxDate",{get:function(){return e.config._maxDate},set:Ve("max")});var b=function(m){return function(x){e.config[m==="min"?"_minTime":"_maxTime"]=e.parseDate(x,"H:i:S")}};Object.defineProperty(e.config,"minTime",{get:function(){return e.config._minTime},set:b("min")}),Object.defineProperty(e.config,"maxTime",{get:function(){return e.config._maxTime},set:b("max")}),a.mode==="time"&&(e.config.noCalendar=!0,e.config.enableTime=!0),Object.assign(e.config,i,a);for(var p=0;p<n.length;p++)e.config[n[p]]=e.config[n[p]]===!0||e.config[n[p]]==="true";Te.filter(function(m){return e.config[m]!==void 0}).forEach(function(m){e.config[m]=Ee(e.config[m]||[]).map(g)}),e.isMobile=!e.config.disableMobile&&!e.config.inline&&e.config.mode==="single"&&!e.config.disable.length&&!e.config.enable&&!e.config.weekNumbers&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);for(var p=0;p<e.config.plugins.length;p++){var k=e.config.plugins[p](e)||{};for(var u in k)Te.indexOf(u)>-1?e.config[u]=Ee(k[u]).map(g).concat(e.config[u]):typeof a[u]>"u"&&(e.config[u]=k[u])}a.altInputClass||(e.config.altInputClass=Le().className+" "+e.config.altInputClass),C("onParseConfig")}function Le(){return e.config.wrap?t.querySelector("[data-input]"):t}function We(){typeof e.config.locale!="object"&&typeof h.l10ns[e.config.locale]>"u"&&e.config.errorHandler(new Error("flatpickr: invalid locale "+e.config.locale)),e.l10n=S(S({},h.l10ns.default),typeof e.config.locale=="object"?e.config.locale:e.config.locale!=="default"?h.l10ns[e.config.locale]:void 0),U.D="("+e.l10n.weekdays.shorthand.join("|")+")",U.l="("+e.l10n.weekdays.longhand.join("|")+")",U.M="("+e.l10n.months.shorthand.join("|")+")",U.F="("+e.l10n.months.longhand.join("|")+")",U.K="("+e.l10n.amPM[0]+"|"+e.l10n.amPM[1]+"|"+e.l10n.amPM[0].toLowerCase()+"|"+e.l10n.amPM[1].toLowerCase()+")";var n=S(S({},r),JSON.parse(JSON.stringify(t.dataset||{})));n.time_24hr===void 0&&h.defaultConfig.time_24hr===void 0&&(e.config.time_24hr=e.l10n.time_24hr),e.formatDate=nt(e),e.parseDate=Ae({config:e.config,l10n:e.l10n})}function ue(n){if(typeof e.config.position=="function")return void e.config.position(e,n);if(e.calendarContainer!==void 0){C("onPreCalendarPosition");var a=n||e._positionElement,i=Array.prototype.reduce.call(e.calendarContainer.children,(function(Nt,Pt){return Nt+Pt.offsetHeight}),0),o=e.calendarContainer.offsetWidth,s=e.config.position.split(" "),f=s[0],b=s.length>1?s[1]:null,p=a.getBoundingClientRect(),k=window.innerHeight-p.bottom,u=f==="above"||f!=="below"&&k<i&&p.top>i,m=window.pageYOffset+p.top+(u?-i-2:a.offsetHeight+2);if(T(e.calendarContainer,"arrowTop",!u),T(e.calendarContainer,"arrowBottom",u),!e.config.inline){var x=window.pageXOffset+p.left,H=!1,O=!1;b==="center"?(x-=(o-p.width)/2,H=!0):b==="right"&&(x-=o-p.width,O=!0),T(e.calendarContainer,"arrowLeft",!H&&!O),T(e.calendarContainer,"arrowCenter",H),T(e.calendarContainer,"arrowRight",O);var ae=window.document.body.offsetWidth-(window.pageXOffset+p.right),Z=x+o>window.document.body.offsetWidth,Tt=ae+o>window.document.body.offsetWidth;if(T(e.calendarContainer,"rightMost",Z),!e.config.static)if(e.calendarContainer.style.top=m+"px",!Z)e.calendarContainer.style.left=x+"px",e.calendarContainer.style.right="auto";else if(!Tt)e.calendarContainer.style.left="auto",e.calendarContainer.style.right=ae+"px";else{var Se=vt();if(Se===void 0)return;var Et=window.document.body.offsetWidth,Ot=Math.max(0,Et/2-o/2),Ft=".flatpickr-calendar.centerMost:before",Rt=".flatpickr-calendar.centerMost:after",_t=Se.cssRules.length,At="{left:"+p.left+"px;right:auto;}";T(e.calendarContainer,"rightMost",!1),T(e.calendarContainer,"centerMost",!0),Se.insertRule(Ft+","+Rt+At,_t),e.calendarContainer.style.left=Ot+"px",e.calendarContainer.style.right="auto"}}}}function vt(){for(var n=null,a=0;a<document.styleSheets.length;a++){var i=document.styleSheets[a];if(i.cssRules){try{i.cssRules}catch{continue}n=i;break}}return n??bt()}function bt(){var n=document.createElement("style");return document.head.appendChild(n),n.sheet}function ze(){e.config.noCalendar||e.isMobile||(G(),he(),se())}function De(){e._input.focus(),window.navigator.userAgent.indexOf("MSIE")!==-1||navigator.msMaxTouchPoints!==void 0?setTimeout(e.close,0):e.close()}function $e(n){n.preventDefault(),n.stopPropagation();var a=function(m){return m.classList&&m.classList.contains("flatpickr-day")&&!m.classList.contains("flatpickr-disabled")&&!m.classList.contains("notAllowed")},i=tt(F(n),a);if(i!==void 0){var o=i,s=e.latestSelectedDateObj=new Date(o.dateObj.getTime()),f=(s.getMonth()<e.currentMonth||s.getMonth()>e.currentMonth+e.config.showMonths-1)&&e.config.mode!=="range";if(e.selectedDateElem=o,e.config.mode==="single")e.selectedDates=[s];else if(e.config.mode==="multiple"){var b=Ce(s);b?e.selectedDates.splice(parseInt(b),1):e.selectedDates.push(s)}else e.config.mode==="range"&&(e.selectedDates.length===2&&e.clear(!1,!1),e.latestSelectedDateObj=s,e.selectedDates.push(s),R(s,e.selectedDates[0],!0)!==0&&e.selectedDates.sort(function(m,x){return m.getTime()-x.getTime()}));if(N(),f){var p=e.currentYear!==s.getFullYear();e.currentYear=s.getFullYear(),e.currentMonth=s.getMonth(),p&&(C("onYearChange"),G()),C("onMonthChange")}if(he(),se(),V(),!f&&e.config.mode!=="range"&&e.config.showMonths===1?K(o):e.selectedDateElem!==void 0&&e.hourElement===void 0&&e.selectedDateElem&&e.selectedDateElem.focus(),e.hourElement!==void 0&&e.hourElement!==void 0&&e.hourElement.focus(),e.config.closeOnSelect){var k=e.config.mode==="single"&&!e.config.enableTime,u=e.config.mode==="range"&&e.selectedDates.length===2&&!e.config.enableTime;(k||u)&&De()}W()}}var pe={locale:[We,He],showMonths:[Pe,v,Ye],minDate:[L],maxDate:[L],positionElement:[qe],clickOpens:[function(){e.config.clickOpens===!0?(w(e._input,"focus",e.open),w(e._input,"click",e.open)):(e._input.removeEventListener("focus",e.open),e._input.removeEventListener("click",e.open))}]};function kt(n,a){if(n!==null&&typeof n=="object"){Object.assign(e.config,n);for(var i in n)pe[i]!==void 0&&pe[i].forEach(function(o){return o()})}else e.config[n]=a,pe[n]!==void 0?pe[n].forEach(function(o){return o()}):Te.indexOf(n)>-1&&(e.config[n]=Ee(a));e.redraw(),V(!0)}function Be(n,a){var i=[];if(n instanceof Array)i=n.map(function(o){return e.parseDate(o,a)});else if(n instanceof Date||typeof n=="number")i=[e.parseDate(n,a)];else if(typeof n=="string")switch(e.config.mode){case"single":case"time":i=[e.parseDate(n,a)];break;case"multiple":i=n.split(e.config.conjunction).map(function(o){return e.parseDate(o,a)});break;case"range":i=n.split(e.l10n.rangeSeparator).map(function(o){return e.parseDate(o,a)});break}else e.config.errorHandler(new Error("Invalid date supplied: "+JSON.stringify(n)));e.selectedDates=e.config.allowInvalidPreload?i:i.filter(function(o){return o instanceof Date&&B(o,!1)}),e.config.mode==="range"&&e.selectedDates.sort(function(o,s){return o.getTime()-s.getTime()})}function yt(n,a,i){if(a===void 0&&(a=!1),i===void 0&&(i=e.config.dateFormat),n!==0&&!n||n instanceof Array&&n.length===0)return e.clear(a);Be(n,i),e.latestSelectedDateObj=e.selectedDates[e.selectedDates.length-1],e.redraw(),L(void 0,a),P(),e.selectedDates.length===0&&e.clear(!1),V(a),a&&C("onChange")}function Ue(n){return n.slice().map(function(a){return typeof a=="string"||typeof a=="number"||a instanceof Date?e.parseDate(a,void 0,!0):a&&typeof a=="object"&&a.from&&a.to?{from:e.parseDate(a.from,void 0),to:e.parseDate(a.to,void 0)}:a}).filter(function(a){return a})}function wt(){e.selectedDates=[],e.now=e.parseDate(e.config.now)||new Date;var n=e.config.defaultDate||((e.input.nodeName==="INPUT"||e.input.nodeName==="TEXTAREA")&&e.input.placeholder&&e.input.value===e.input.placeholder?null:e.input.value);n&&Be(n,e.config.dateFormat),e._initialDate=e.selectedDates.length>0?e.selectedDates[0]:e.config.minDate&&e.config.minDate.getTime()>e.now.getTime()?e.config.minDate:e.config.maxDate&&e.config.maxDate.getTime()<e.now.getTime()?e.config.maxDate:e.now,e.currentYear=e._initialDate.getFullYear(),e.currentMonth=e._initialDate.getMonth(),e.selectedDates.length>0&&(e.latestSelectedDateObj=e.selectedDates[0]),e.config.minTime!==void 0&&(e.config.minTime=e.parseDate(e.config.minTime,"H:i")),e.config.maxTime!==void 0&&(e.config.maxTime=e.parseDate(e.config.maxTime,"H:i")),e.minDateHasTime=!!e.config.minDate&&(e.config.minDate.getHours()>0||e.config.minDate.getMinutes()>0||e.config.minDate.getSeconds()>0),e.maxDateHasTime=!!e.config.maxDate&&(e.config.maxDate.getHours()>0||e.config.maxDate.getMinutes()>0||e.config.maxDate.getSeconds()>0)}function xt(){if(e.input=Le(),!e.input){e.config.errorHandler(new Error("Invalid input element specified"));return}e.input._type=e.input.type,e.input.type="text",e.input.classList.add("flatpickr-input"),e._input=e.input,e.config.altInput&&(e.altInput=y(e.input.nodeName,e.config.altInputClass),e._input=e.altInput,e.altInput.placeholder=e.input.placeholder,e.altInput.disabled=e.input.disabled,e.altInput.required=e.input.required,e.altInput.tabIndex=e.input.tabIndex,e.altInput.type="text",e.input.setAttribute("type","hidden"),!e.config.static&&e.input.parentNode&&e.input.parentNode.insertBefore(e.altInput,e.input.nextSibling)),e.config.allowInput||e._input.setAttribute("readonly","readonly"),qe()}function qe(){e._positionElement=e.config.positionElement||e._input}function Dt(){var n=e.config.enableTime?e.config.noCalendar?"time":"datetime-local":"date";e.mobileInput=y("input",e.input.className+" flatpickr-mobile"),e.mobileInput.tabIndex=1,e.mobileInput.type=n,e.mobileInput.disabled=e.input.disabled,e.mobileInput.required=e.input.required,e.mobileInput.placeholder=e.input.placeholder,e.mobileFormatStr=n==="datetime-local"?"Y-m-d\\TH:i:S":n==="date"?"Y-m-d":"H:i:S",e.selectedDates.length>0&&(e.mobileInput.defaultValue=e.mobileInput.value=e.formatDate(e.selectedDates[0],e.mobileFormatStr)),e.config.minDate&&(e.mobileInput.min=e.formatDate(e.config.minDate,"Y-m-d")),e.config.maxDate&&(e.mobileInput.max=e.formatDate(e.config.maxDate,"Y-m-d")),e.input.getAttribute("step")&&(e.mobileInput.step=String(e.input.getAttribute("step"))),e.input.type="hidden",e.altInput!==void 0&&(e.altInput.type="hidden");try{e.input.parentNode&&e.input.parentNode.insertBefore(e.mobileInput,e.input.nextSibling)}catch{}w(e.mobileInput,"change",function(a){e.setDate(F(a).value,!1,e.mobileFormatStr),C("onChange"),C("onClose")})}function Mt(n){if(e.isOpen===!0)return e.close();e.open(n)}function C(n,a){if(e.config!==void 0){var i=e.config[n];if(i!==void 0&&i.length>0)for(var o=0;i[o]&&o<i.length;o++)i[o](e.selectedDates,e.input.value,e,a);n==="onChange"&&(e.input.dispatchEvent(Me("change")),e.input.dispatchEvent(Me("input")))}}function Me(n){var a=document.createEvent("Event");return a.initEvent(n,!0,!0),a}function Ce(n){for(var a=0;a<e.selectedDates.length;a++){var i=e.selectedDates[a];if(i instanceof Date&&R(i,n)===0)return""+a}return!1}function Ct(n){return e.config.mode!=="range"||e.selectedDates.length<2?!1:R(n,e.selectedDates[0])>=0&&R(n,e.selectedDates[1])<=0}function he(){e.config.noCalendar||e.isMobile||!e.monthNav||(e.yearElements.forEach(function(n,a){var i=new Date(e.currentYear,e.currentMonth,1);i.setMonth(e.currentMonth+a),e.config.showMonths>1||e.config.monthSelectorType==="static"?e.monthElements[a].textContent=ve(i.getMonth(),e.config.shorthandCurrentMonth,e.l10n)+" ":e.monthsDropdownContainer.value=i.getMonth().toString(),n.value=i.getFullYear().toString()}),e._hidePrevMonthArrow=e.config.minDate!==void 0&&(e.currentYear===e.config.minDate.getFullYear()?e.currentMonth<=e.config.minDate.getMonth():e.currentYear<e.config.minDate.getFullYear()),e._hideNextMonthArrow=e.config.maxDate!==void 0&&(e.currentYear===e.config.maxDate.getFullYear()?e.currentMonth+1>e.config.maxDate.getMonth():e.currentYear>e.config.maxDate.getFullYear()))}function Ie(n){var a=n||(e.config.altInput?e.config.altFormat:e.config.dateFormat);return e.selectedDates.map(function(i){return e.formatDate(i,a)}).filter(function(i,o,s){return e.config.mode!=="range"||e.config.enableTime||s.indexOf(i)===o}).join(e.config.mode!=="range"?e.config.conjunction:e.l10n.rangeSeparator)}function V(n){n===void 0&&(n=!0),e.mobileInput!==void 0&&e.mobileFormatStr&&(e.mobileInput.value=e.latestSelectedDateObj!==void 0?e.formatDate(e.latestSelectedDateObj,e.mobileFormatStr):""),e.input.value=Ie(e.config.dateFormat),e.altInput!==void 0&&(e.altInput.value=Ie(e.config.altFormat)),n!==!1&&C("onValueUpdate")}function It(n){var a=F(n),i=e.prevMonthNav.contains(a),o=e.nextMonthNav.contains(a);i||o?we(i?-1:1):e.yearElements.indexOf(a)>=0?a.select():a.classList.contains("arrowUp")?e.changeYear(e.currentYear+1):a.classList.contains("arrowDown")&&e.changeYear(e.currentYear-1)}function St(n){n.preventDefault();var a=n.type==="keydown",i=F(n),o=i;e.amPM!==void 0&&i===e.amPM&&(e.amPM.textContent=e.l10n.amPM[_(e.amPM.textContent===e.l10n.amPM[0])]);var s=parseFloat(o.getAttribute("min")),f=parseFloat(o.getAttribute("max")),b=parseFloat(o.getAttribute("step")),p=parseInt(o.value,10),k=n.delta||(a?n.which===38?1:-1:0),u=p+b*k;if(typeof o.value<"u"&&o.value.length===2){var m=o===e.hourElement,x=o===e.minuteElement;u<s?(u=f+u+_(!m)+(_(m)&&_(!e.amPM)),x&&q(void 0,-1,e.hourElement)):u>f&&(u=o===e.hourElement?u-f-_(!e.amPM):s,x&&q(void 0,1,e.hourElement)),e.amPM&&m&&(b===1?u+p===23:Math.abs(u-p)>b)&&(e.amPM.textContent=e.l10n.amPM[_(e.amPM.textContent===e.l10n.amPM[0])]),o.value=E(u)}}return d(),e}function ee(t,r){for(var e=Array.prototype.slice.call(t).filter(function(g){return g instanceof HTMLElement}),l=[],d=0;d<e.length;d++){var c=e[d];try{if(c.getAttribute("data-fp-omit")!==null)continue;c._flatpickr!==void 0&&(c._flatpickr.destroy(),c._flatpickr=void 0),c._flatpickr=en(c,r||{}),l.push(c._flatpickr)}catch(g){console.error(g)}}return l.length===1?l[0]:l}typeof HTMLElement<"u"&&typeof HTMLCollection<"u"&&typeof NodeList<"u"&&(HTMLCollection.prototype.flatpickr=NodeList.prototype.flatpickr=function(t){return ee(this,t)},HTMLElement.prototype.flatpickr=function(t){return ee([this],t)});var h=function(t,r){return typeof t=="string"?ee(window.document.querySelectorAll(t),r):t instanceof Node?ee([t],r):ee(t,r)};h.defaultConfig={};h.l10ns={en:S({},oe),default:S({},oe)};h.localize=function(t){h.l10ns.default=S(S({},h.l10ns.default),t)};h.setDefaults=function(t){h.defaultConfig=S(S({},h.defaultConfig),t)};h.parseDate=Ae({});h.formatDate=nt({});h.compareDates=R;typeof jQuery<"u"&&typeof jQuery.fn<"u"&&(jQuery.fn.flatpickr=function(t){return ee(this,t)});Date.prototype.fp_incr=function(t){return new Date(this.getFullYear(),this.getMonth(),this.getDate()+(typeof t=="string"?parseInt(t,10):t))};typeof window<"u"&&(window.flatpickr=h);var re={exports:{}},tn=re.exports,Qe;function nn(){return Qe||(Qe=1,(function(t,r){(function(e,l){l(r)})(tn,(function(e){var l=typeof window<"u"&&window.flatpickr!==void 0?window.flatpickr:{l10ns:{}},d={weekdays:{shorthand:["zo","ma","di","wo","do","vr","za"],longhand:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"]},months:{shorthand:["jan","feb","mrt","apr","mei","jun","jul","aug","sept","okt","nov","dec"],longhand:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"]},firstDayOfWeek:1,weekAbbreviation:"wk",rangeSeparator:" t/m ",scrollTitle:"Scroll voor volgende / vorige",toggleTitle:"Klik om te wisselen",time_24hr:!0,ordinal:function(g){return g===1||g===8||g>=20?"ste":"de"}};l.l10ns.nl=d;var c=l.l10ns;e.Dutch=d,e.default=c,Object.defineProperty(e,"__esModule",{value:!0})}))})(re,re.exports)),re.exports}var an=nn();const Q=Yt(an),rn=(t,r,e)=>{if(!t)return null;let l=null;const d=t.split(/[dmyY]/).filter(v=>v),c=t.split(/[.*+-/_:]/);if(c.filter(v=>!["d","m","Y","y"].includes(v)).length)return null;const g=c.reduce((v,D)=>D==="Y"?v+4:v+2,0);if(l={date:!0,datePattern:c,delimiters:d,regex:new RegExp(`^[0-9]{${g}}$`)},r){const v=h?.parseDate(r,t);l={...l,dateMin:v?h?.formatDate(v,"Y-M-D"):void 0}}if(e){const v=h?.parseDate(e,t);l={...l,dateMax:v?h?.formatDate(v,"Y-M-D"):void 0}}return l},on=t=>{if(!t)return null;const r=t.split(/[HhiS]/).filter(d=>d);let e=!0;const l=t.split(/[.*+-/_:]/).map(d=>{switch(d){case"H":return"h";case"h":return e=!1,"h";case"i":return"m";case"S":return"s";default:return d}});return l.filter(d=>!["h","m","s"].includes(d)).length?null:{time:!0,timePattern:l,timeFormat:e?"24":"12",delimiters:r,regex:new RegExp(`^[0-9]{${l.length*2}}$`)}},at=t=>{const r=new Date(0);return r.setUTCHours(t.getUTCHours(),t.getUTCMinutes(),t.getUTCSeconds(),t.getUTCMilliseconds()),r},rt=(t,r)=>{const{type:e,format:l,maxDate:d,maxTime:c,minDate:g,minTime:v}=t;if(r==="max"){if(["date","date-time","range"].includes(e)&&d)return h.parseDate(d,l);if(e==="time"&&c)return h.parseDate(c,l)}else{if(["date","date-time","range"].includes(e)&&g)return h.parseDate(g,l);if(e==="time"&&v)return h.parseDate(v,l)}},ln={key:"patternMismatch",message:"Waarde voldoet niet aan het opgegeven patroon.",isValid(t,r){const{disableMaskValidation:e,cleaveInstance:l,inputValue:d}=t,c=t.regex||t.pattern;if(!r||!c&&(!l||e))return!0;if(l&&!e&&t.maskOptions?.regex){const g=l.getRawValue();return new RegExp(t.maskOptions.regex).test(g)}else return new RegExp(c).test(d)}},sn={key:"rangeOverflow",message:"Waarde overschrijdt het toegestane maximum.",isValid(t,r){const{type:e}=t;if(!r||!(typeof r=="string"||r instanceof Date))return!0;const l=rt(t,"max");if(!l)return!0;if(e==="time"&&typeof r=="string"){const g=new Date(0),[v,D,A]=r.split(":");g.setHours(v?Number(v):0,D?Number(D):0,A?Number(A):0);const M=at(l);return g.getTime()<=M.getTime()}const d=e==="range"&&typeof r=="string"?r.split("/")[1]:"",c=h.parseDate(d||r);return c?c.getTime()<=l.getTime():!0}},dn={key:"rangeUnderflow",message:"Waarde ligt onder het toegestane minimum.",isValid(t,r){const{type:e}=t;if(!r||!(typeof r=="string"||r instanceof Date))return!0;const l=rt(t,"min");if(!l)return!0;if(e==="time"&&typeof r=="string"){const g=new Date(0),[v,D,A]=r.split(":");g.setHours(v?Number(v):0,D?Number(D):0,A?Number(A):0);const M=at(l);return g.getTime()>=M.getTime()}const d=e==="range"&&typeof r=="string"?r.split("/")[0]:"",c=h.parseDate(d||r);return c?c.getTime()>=l.getTime():!0}},cn=`:host {
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
`,fn=jt`
    ${Ht(cn)}

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
       Icon Definitions
       =================================================================== */

    .vl-vi-calendar::before {
        content: '\\f14b';
    }

    .vl-vi-clock::before {
        content: '\\f15e';
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
`,I={...Vt,block:!1,readonly:!1,value:"",placeholder:"",autocomplete:"",type:"date",format:"",amPm:!1,minDate:"",maxDate:"",minTime:"",maxTime:"",disableMaskValidation:!1,disableMobileNativeInput:!1,pattern:"",regex:null,position:"auto",isStatic:!1};var un=Object.getOwnPropertyDescriptor,pn=(t,r,e,l)=>{for(var d=l>1?void 0:l?un(r,e):r,c=t.length-1,g;c>=0;c--)(g=t[c])&&(d=g(d)||d);return d};const _e=" tot en met ",Xe="/";let Ne=class extends et{constructor(){super(...arguments),this.regex=I.regex,this.type=I.type,this.minDate=I.minDate,this.maxDate=I.maxDate,this.minTime=I.minTime,this.maxTime=I.maxTime,this.format=I.format,this.block=I.block,this.readonly=I.readonly,this.value=I.value,this.placeholder=I.placeholder,this.autocomplete=I.autocomplete,this.amPm=I.amPm,this.disableMaskValidation=I.disableMaskValidation,this.pattern=I.pattern,this.disableMobileNativeInput=I.disableMobileNativeInput,this.position=I.position,this.isStatic=I.isStatic,this.initialValue="",this.inputHasFocus=!1,this.flatpickrInstance=null,this.maskOptions=null,this.cleaveInstance=null,this.inputValue="",this.dispatchInput=!1,this.handleOpenChange=t=>{this.isOpen=t,t&&this.addAccessibilityAttributes()},this.toggleCalendar=()=>{this.calculateCalendarPlaceholderPosition(),this.flatpickrInstance?.toggle()},this.onInputFocus=()=>{this.inputHasFocus=!0},this.onInputBlur=()=>{this.inputHasFocus=!1},this.onInput=t=>{this.handleInputValueChanged(t.target?.value??"")},this.parseRangeISODateString=t=>t.split(Xe).map(r=>h.parseDate(r,"Y-m-d")),this.formatInputValue=t=>h.formatDate(t,this.format),this.formatRangeInputValue=t=>t.map(r=>this.formatInputValue(r)).join(Q?.nl?.rangeSeparator||_e),this.handleDatePickerChange=t=>{t.length===1?(this.inputValue=this.formatInputValue(t[0]),this.value=this.getISODateString(t[0])):t.length===2&&(this.value=this.getISODateString(t[0],t[1]),this.inputValue=this.formatRangeInputValue(t))},this.handleOpenCalendar=()=>{this.handleOpenChange(!0),this.addEventListener("click",this.handleCalendarClicked)},this.handleCloseCalendar=()=>{this.handleOpenChange(!1),this.removeEventListener("click",this.handleCalendarClicked)},this.updateFormControlValue=t=>{const r={value:this.value},e=this.flatpickrInstance?.parseDate(t,this.format);this.inputValue!==this.flatpickrInstance?.input.value&&e&&this.flatpickrInstance?.setDate(e,!1,this.format),this.setValue(this.value??""),this.dispatchEvent(new CustomEvent("vl-change",{composed:!0,bubbles:!0,detail:r})),this.dispatchInput&&(this.dispatchEvent(new CustomEvent("vl-input",{composed:!0,bubbles:!0,detail:r})),this.dispatchInput=!1),this.dispatchEventIfValid(r)}}static get styles(){return[Lt,Wt,fn,zt,$t]}static get properties(){return{block:{type:Boolean},readonly:{type:Boolean},value:{type:String},placeholder:{type:String},autocomplete:{type:String},type:{type:String},format:{type:String},amPm:{type:Boolean,attribute:"am-pm"},minDate:{type:String,attribute:"min-date"},maxDate:{type:String,attribute:"max-date"},minTime:{type:String,attribute:"min-time"},maxTime:{type:String,attribute:"max-time"},pattern:{type:String},disableMaskValidation:{type:Boolean,attribute:"disable-mask-validation"},disableMobileNativeInput:{type:Boolean,attribute:"disable-mobile-native-input"},rawValue:{type:Boolean,attribute:"raw-value"},inputValue:{type:String,state:!0},isOpen:{type:Boolean,state:!0},position:{type:String},isStatic:{type:Boolean,attribute:"static"}}}get validationTarget(){return this.shadowRoot?.querySelector("input")}connectedCallback(){super.connectedCallback(),Q?.nl&&(Q.nl={...Q.nl,rangeSeparator:_e,yearAriaLabel:"Jaar",monthAriaLabel:"Maand",hourAriaLabel:"Uur",minuteAriaLabel:"Minuut"},h.l10ns.default.rangeSeparator=_e),!this.initialValue&&typeof this.value=="string"&&(this.initialValue=this.value)}firstUpdated(t){if(super.firstUpdated(t),t.has("type")&&!this.format){const e="d.m.Y";switch(this.type){case"date":this.format=e;break;case"time":this.format="H:i";break;case"date-time":this.format=`${e} H:i`;break;default:this.format=e}}this.maskOptions=this.composeMaskForFormat(this.format,this.type),this.maskOptions&&!this.disableMaskValidation&&(this.cleaveInstance=new Kt(this.validationTarget,this.maskOptions)),this.initializeComponent(),this.setInitialValue()}updated(t){super.updated(t);const r=this.getDynamicOptions(),e=["disabled","readonly","minDate","maxDate","minTime","maxTime","position"],l=["disabled","readonly","placeholder","required","block","error","success"];e.some(c=>t.has(c))&&this.updateOptionsForInstance(r);const d=l.filter(c=>t.has(c));if(d.length&&this.updateOptionsForNativeInput(d,l),t.has("value")&&!t.has("inputValue")&&typeof this.value=="string")switch(this.type){case"date-time":case"date":{const c=h.parseDate(this.value,"Z");c?this.inputValue=h.formatDate(c,this.format):!c&&!this.value&&(this.flatpickrInstance?.clear(),this.inputValue="");break}case"time":{const c=h.parseDate(this.value,this.format);c?this.inputValue=h.formatDate(c,this.format):!c&&!this.value&&(this.flatpickrInstance?.clear(),this.inputValue="");break}default:this.inputValue=this.value}t.has("inputValue")&&this.updateFormControlValue(this.inputValue??""),t.has("block")&&(this.block?this.getFlatpickrWrapper()?.classList.add("flatpickr-wrapper--block"):this.getFlatpickrWrapper()?.classList.remove("flatpickr-wrapper--block")),this.flatpickrInstance?.isMobile&&!this.disableMobileNativeInput&&(this.getNativeDateInput()?.classList.add("js-vl-datepicker-input","vl-input-field","flatpickr-input","flatpickr-mobile"),this.getNativeDateInput()?.classList.remove("vl-input-group"))}disconnectedCallback(){super.disconnectedCallback(),this.flatpickrInstance?.destroy()}render(){const t={"vl-input-field":!0,"vl-input-field--input-group-left":!0,"js-vl-datepicker-toggle":!0,"vl-input-field--error":this.error||this.isInvalid,"vl-input-field--success":this.success,"vl-input-field--block":this.block,"vl-input-field--disabled":this.disabled},r={"vl-input-addon":!0,"js-vl-datepicker-toggle":!0,"vl-input-addon--error":this.error||this.isInvalid,"vl-input-addon--success":this.success,"vl-input-addon--disabled":this.disabled};return Je`
            <div class="vl-group vl-group--input-group" id="datepicker-wrapper">
                ${this.flatpickrInstance?.isMobile&&!this.disableMobileNativeInput?Y:Je`
                          <input
                              id=${this.id||Y}
                              name=${this.name||Y}
                              class=${Ke(t)}
                              type="text"
                              aria-label=${this.label||Y}
                              aria-invalid=${this.isInvalid||Y}
                              ?required=${this.required}
                              ?disabled=${this.disabled}
                              ?error=${this.error}
                              ?readonly=${this.readonly}
                              .value=${Bt(this.inputValue)}
                              placeholder=${this.placeholder||Y}
                              autocomplete=${this.autocomplete||Y}
                              pattern=${this.pattern||Y}
                              inputmode=${this.cleaveInstance?"numeric":Y}
                              @focus="${this.onInputFocus}"
                              @blur="${this.onInputBlur}"
                              @input=${this.cleaveInstance?Y:this.onInput}
                          />
                          <button
                              id="toggle-calendar"
                              type="button"
                              class=${Ke(r)}
                              ?disabled=${this.disabled||this.readonly}
                              aria-label="datumkiezer${this.label?` ${this.label}`:""}"
                              aria-expanded=${this.isOpen}
                              aria-controls=${this.id||Y}
                              @click=${this.toggleCalendar}
                          >
                              <span
                                  class="vl-icon vl-icon--small vl-vi vl-vi-${this.type==="time"?"clock":"calendar"}"
                                  aria-hidden="true"
                              ></span>
                          </button>
                      `}
            </div>
            <div id="datepicker-calendar-placeholder"></div>
        `}resetFormControl(){super.resetFormControl(),this.setInitialValue()}getRawValue(){return this.cleaveInstance?.getRawValue()}getDates(){return this.flatpickrInstance?.selectedDates}setInitialValue(){if(this.value=this.initialValue,this.type==="range"&&this.initialValue){const r=this.parseRangeISODateString(this.initialValue);r.length===1?(this.inputValue=this.formatInputValue(r[0]),this.flatpickrInstance?.setDate(r[0],!0)):r.length===2&&(this.inputValue=this.formatRangeInputValue(r),this.flatpickrInstance?.setDate(r,!0));return}const t=this.flatpickrInstance?.parseDate(this.initialValue,"Z");t instanceof Date&&!isNaN(t)&&this.type!=="range"?(this.flatpickrInstance?.setDate(t,!0),this.inputValue=h.formatDate(t,this.format),this.dispatchInput=!1):this.type==="time"&&this.initialValue?this.inputValue=this.initialValue:(this.flatpickrInstance?.clear(),this.inputValue="")}parseTodayDate(t){const r=e=>h.formatDate(e,this.format);if(t==="today")return r(new Date);if(t){const e=h.parseDate(t,"Z");return e?r(e):void 0}else return}getDynamicOptions(){const t=h.parseDate(this.minTime,this.format);return{allowInput:this.inputHasFocus&&!(this.disabled||this.readonly),maxDate:this.maxDate,minDate:this.minDate,minTime:this.minTime,maxTime:this.maxTime,defaultHour:t?.getHours()??12,defaultMinute:t?.getMinutes()??0,position:this.position||"auto"}}addAccessibilityAttributes(){const t=this.shadowRoot?.querySelector(".flatpickr-calendar");t?.querySelectorAll(".flatpickr-day").forEach(r=>{const e=r.getAttribute("aria-label");if(e){const d=new Date(e).toLocaleDateString("nl-NL",{weekday:"long"});r.setAttribute("aria-label",`${e}, ${d}`),r.setAttribute("role","button")}}),t?.querySelectorAll(".flatpickr-prev-month, .flatpickr-month")?.forEach(r=>{r.setAttribute("aria-label",r.classList.contains("flatpickr-prev-month")?"Vorige maand":"Volgende maand"),r.setAttribute("role","button"),r.querySelector("svg")?.setAttribute("aria-hidden","true")}),t?.querySelector(".flatpickr-weekdays")?.setAttribute("aria-hidden","true")}getOptions(){const t=this.shadowRoot?.querySelector("button"),r=this.type!=="range"&&this.parseTodayDate(this.initialValue),l={...{dateFormat:this.format,locale:Q.nl,clickOpens:!1,onChange:this.handleDatePickerChange,onOpen:this.handleOpenCalendar,onClose:this.handleCloseCalendar,positionElement:t,static:this.isStatic,appendTo:this.getCalendarPlaceholder(),defaultDate:r,enableTime:this.type==="time"||this.type==="date-time",noCalendar:this.type==="time",time_24hr:!this.amPm,mode:this.type!=="range"?"single":"range",disableMobile:this.disableMobileNativeInput},...this.getDynamicOptions()};return Object.keys(l).forEach(d=>{l[d]===void 0&&delete l[d]}),l}getDatePicker(){return this.shadowRoot?.querySelector("#datepicker-wrapper")}getFlatpickrWrapper(){return this.shadowRoot?.querySelector(".flatpickr-wrapper")}getNativeDateInput(){return this.renderRoot?.querySelector('input[type="date"]')}getCalendarPlaceholder(){return this.shadowRoot?.querySelector("#datepicker-calendar-placeholder")}updateOptionsForInstance(t){Object.keys(t).map(r=>r).forEach(r=>{this.flatpickrInstance?.set(r,t[r])})}updateOptionsForNativeInput(t,r){r.forEach(e=>{t.includes(e)&&this.getNativeDateInput()&&this.updateInputForAttribute(e,this.getNativeDateInput())})}updateInputForAttribute(t,r){const e=t;this[e]?(r.setAttribute(t,typeof this[e]=="boolean"?"":this[e]),r.classList.add(`vl-input-field--${e}`)):(r.removeAttribute(t),r.classList.remove(`vl-input-field--${e}`))}initializeComponent(){this.getDatePicker()&&!this.flatpickrInstance&&(this.flatpickrInstance=h(this.getDatePicker(),this.getOptions()),this.getDatePicker()?.classList.add("static"),this.getDatePicker()?.removeAttribute("readonly"),this.isStatic||this.calculateCalendarPlaceholderPosition())}calculateCalendarPlaceholderPosition(){if(this.getDatePicker()){const{top:t,left:r,height:e}=this.getDatePicker().getBoundingClientRect(),l=this.getCalendarPlaceholder();l.style.top=Ut?`calc(-${t}px - ${e}px)`:`-${t}px`,l.style.left=`-${r}px`}}handleCalendarClicked(){this.dispatchInput=!0}getISODateString(t,r){if(!t)return"";switch(this.type){case"time":return h.formatDate(t,this.format?.includes("S")?"H:i:S":"H:i");case"date-time":return h.formatDate(t,"Y-m-dTH:i");case"range":return`${h.formatDate(t,"Y-m-d")}${r?Xe+h.formatDate(r,"Y-m-d"):""}`;case"date":default:return h.formatDate(t,"Y-m-d")}}getDatesFromInputValue(t){const r=Q?.nl?.rangeSeparator,l=(r&&t.split(r)||[])?.map(d=>h.parseDate(d,this.format));return l.length&&l.every(d=>d instanceof Date)?l:void 0}handleInputValueChanged(t,r=!0){this.dispatchInput=!0;let e,l;try{const d=this.pattern?new RegExp(this.pattern):void 0,c=this.regex||d;l=c?c.test(t):!0,l&&(e=h.parseDate(t,this.format))}catch{}finally{if(r&&l&&e&&this.type!=="range")this.value=this.getISODateString(e);else if(this.type==="range"){const d=this.getDatesFromInputValue(t);d?.length?this.value=this.getISODateString(d[0],d[1]):this.value=t,this.inputValue=t}else this.inputValue=t,this.value=t;e instanceof Date&&!isNaN(e)&&this.flatpickrInstance?.setDate(t,!1,this.format)}}composeMaskForFormat(t,r){if(!t)return null;let e=null;switch(r){case"date":e=rn(t,this.minDate,this.maxDate);break;case"time":e=on(t);break}return e?{...e,onValueChanged:({target:{value:l,rawValue:d}})=>{const c=e?.regex?.test(d);this.handleInputValueChanged(l??"",c)}}:null}};Ne.formControlValidators=[...et.formControlValidators,ln,sn,dn];Ne=pn([qt("vl-datepicker")],Ne);export{Ne as V,I as d,h as f};
