"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[2093],{"../../libs/form/src/next/datepicker/vl-datepicker.component.ts":(t,e,i)=>{i.d(e,{M:()=>D});var a=i("../../libs/common/utilities/src/index.ts"),s=i("../../libs/elements/src/index.ts"),l=i("../../node_modules/@domg/govflanders-style/common/index.js"),r=i("../../node_modules/@domg/govflanders-style/component/index.js"),n=i("../../node_modules/cleave.js/dist/cleave-esm.js"),o=i("../../node_modules/flatpickr/dist/esm/index.js"),p=i("../../node_modules/flatpickr/dist/l10n/nl.js"),d=i.n(p),h=i("../../node_modules/lit/index.js"),u=i("../../node_modules/lit/directives/class-map.js"),c=i("../../node_modules/lit/directives/live.js"),m=i("../../libs/form/src/next/form-control/form-control.ts");let f=(t,e,i)=>{if(!t)return null;let a=null,s=t.split(/[dmyY]/).filter(t=>t),l=t.split(/[.*+-/_:]/);if(l.filter(t=>!["d","m","Y","y"].includes(t)).length)return null;let r=l.reduce((t,e)=>"Y"===e?t+4:t+2,0);if(a={date:!0,datePattern:l,delimiters:s,regex:RegExp(`^[0-9]{${r}}$`)},e){let i=o.A?.parseDate(e,t);a={...a,dateMin:i?o.A?.formatDate(i,"Y-M-D"):void 0}}if(i){let e=o.A?.parseDate(i,t);a={...a,dateMax:e?o.A?.formatDate(e,"Y-M-D"):void 0}}return a},v=t=>{if(!t)return null;let e=t.split(/[HhiS]/).filter(t=>t),i=!0,a=t.split(/[.*+-/_:]/).map(t=>{switch(t){case"H":return"h";case"h":return i=!1,"h";case"i":return"m";case"S":return"s";default:return t}});return a.filter(t=>!["h","m","s"].includes(t)).length?null:{time:!0,timePattern:a,timeFormat:i?"24":"12",delimiters:e,regex:RegExp(`^[0-9]{${2*a.length}}$`)}},g={key:"patternMismatch",message:"Value does not meet the given pattern.",isValid(t,e){let{disableMaskValidation:i,cleaveInstance:a,inputValue:s}=t,l=t.regex||t.pattern;if(!e||!l&&(!a||i))return!0;if(!(a&&!i&&t.maskOptions?.regex))return new RegExp(l).test(s);{let e=a.getRawValue();return new RegExp(t.maskOptions.regex).test(e)}}};var b=i("../../libs/form/src/next/datepicker/vl-datepicker.defaults.ts");let k=(0,h.AH)`
    :host {
        --vl-color--error: rgb(210, 55, 60);
        --vl-success-color: rgb(0, 158, 71);
        position: relative;
    }
    button {
        cursor: pointer;
    }
    .vl-input-field:not(input[type='date']) {
        border-radius: 0.3rem 0 0 0.3rem;
        border-right-width: 0;
    }
    .vl-input-addon--success {
        border-color: var(--vl-success-color);
    }
    .vl-input-addon--success .vl-vi {
        color: var(--vl-success-color) !important;
    }
    .vl-input-addon--error {
        border-color: var(--vl-color--error);
    }
    .vl-input-addon--error .vl-vi {
        color: var(--vl-color--error) !important;
    }

    .flatpickr-calendar {
        z-index: var(--vl-z-layer--datepicker) !important;
    }

    .flatpickr-wrapper--block,
    input[block] {
        width: 100%;
    }

    input[type='date'] {
        border-radius: 0.3rem !important;
    }

    .flatpickr-calendar .today {
        border: 1px #bbb solid;
    }

    #datepicker-calendar-placeholder {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        z-index: var(--vl-z-layer--datepicker);
    }
`,y=" tot en met ";class D extends m.M{static{(0,a.gy)([s.Vq,s.yF])}static{this.formControlValidators=[...m.M.formControlValidators,g]}static get styles(){return[l.h8,l.BI,r.py,r._T,r.Ml,r.$y,r.FG,r.GU,k]}static get properties(){return{block:{type:Boolean},readonly:{type:Boolean},value:{type:String},placeholder:{type:String},autocomplete:{type:String},type:{type:String},format:{type:String},amPm:{type:Boolean,attribute:"am-pm"},minDate:{type:String,attribute:"min-date"},maxDate:{type:String,attribute:"max-date"},minTime:{type:String,attribute:"min-time"},maxTime:{type:String,attribute:"max-time"},pattern:{type:String},disableMaskValidation:{type:Boolean,attribute:"disable-mask-validation"},disableMobileNativeInput:{type:Boolean,attribute:"disable-mobile-native-input"},rawValue:{type:Boolean,attribute:"raw-value"},inputValue:{type:String,state:!0},inputHasFocus:{type:Boolean,state:!0},isOpen:{type:Boolean,state:!0},position:{type:String},isStatic:{type:Boolean,attribute:"static"}}}connectedCallback(){super.connectedCallback(),d()?.nl&&(d().nl={...d().nl,rangeSeparator:y,yearAriaLabel:"Jaar",monthAriaLabel:"Maand",hourAriaLabel:"Uur",minuteAriaLabel:"Minuut"},o.A.l10ns.default.rangeSeparator=y),this.initialValue||"string"!=typeof this.value||"range"===this.type||(this.initialValue=this.value)}firstUpdated(t){if(super.firstUpdated(t),t.has("type")&&!this.format){let t="d.m.Y";switch(this.type){case"date":default:this.format=t;break;case"time":this.format="H:i";break;case"date-time":this.format=`${t} H:i`}}this.maskOptions=this.composeMaskForFormat(this.format,this.type),this.maskOptions&&!this.disableMaskValidation&&(this.cleaveInstance=new n.A(this.validationTarget,this.maskOptions)),this.initializeComponent(),this.setInitialValue()}updated(t){super.updated(t);let e=this.getDynamicOptions(),i=["disabled","readonly","placeholder","required","block","error","success"];["disabled","readonly","minDate","maxDate","minTime","maxTime","position"].some(e=>t.has(e))&&this.updateOptionsForInstance(e);let a=i.filter(e=>t.has(e));if(a.length&&this.updateOptionsForNativeInput(a,i),t.has("value")&&!t.has("inputValue")&&"string"==typeof this.value)switch(this.type){case"date-time":case"date":{let t=o.A.parseDate(this.value,"Z");t?this.inputValue=o.A.formatDate(t,this.format):t||this.value||(this.flatpickrInstance?.clear(),this.inputValue="");break}case"time":{let t=o.A.parseDate(this.value,this.format);t?this.inputValue=o.A.formatDate(t,this.format):t||this.value||(this.flatpickrInstance?.clear(),this.inputValue="");break}default:this.inputValue=this.value}t.has("inputValue")&&this.updateFormControlValue(this.inputValue??""),t.has("block")&&(this.block?this.getFlatpickrWrapper()?.classList.add("flatpickr-wrapper--block"):this.getFlatpickrWrapper()?.classList.remove("flatpickr-wrapper--block")),this.flatpickrInstance?.isMobile&&!this.disableMobileNativeInput&&(this.getNativeDateInput()?.classList.add("js-vl-datepicker-input","vl-input-field","flatpickr-input","flatpickr-mobile"),this.getNativeDateInput()?.classList.remove("vl-input-group"))}disconnectedCallback(){super.disconnectedCallback(),this.flatpickrInstance?.destroy()}render(){let t={"vl-input-field":!0,"js-vl-datepicker-toggle":!0,"vl-input-field--error":this.error||this.isInvalid,"vl-input-field--success":this.success,"vl-input-field--block":this.block,"vl-input-field--disabled":this.disabled},e={"vl-input-addon":!0,"js-vl-datepicker-toggle":!0,"vl-input-addon--error":this.error||this.isInvalid,"vl-input-addon--success":this.success,"vl-input-addon--disabled":this.disabled};return(0,h.qy)`
            <div class="vl-input-group" id="datepicker-wrapper">
                ${this.flatpickrInstance?.isMobile&&!this.disableMobileNativeInput?h.s6:(0,h.qy)`
                          <input
                              id=${this.id||h.s6}
                              name=${this.name||h.s6}
                              class=${(0,u.H)(t)}
                              type="text"
                              aria-label=${this.label||h.s6}
                              aria-invalid=${this.isInvalid||h.s6}
                              ?required=${this.required}
                              ?disabled=${this.disabled}
                              ?error=${this.error}
                              ?readonly=${this.readonly}
                              .value=${(0,c.V)(this.inputValue)}
                              placeholder=${this.placeholder||h.s6}
                              autocomplete=${this.autocomplete||h.s6}
                              pattern=${this.pattern||h.s6}
                              inputmode=${this.cleaveInstance?"numeric":h.s6}
                              @focus="${this.onInputFocus}"
                              @blur="${this.onInputBlur}"
                              @input=${this.cleaveInstance?h.s6:this.onInput}
                          />
                          <button
                              id="toggle-calendar"
                              type="button"
                              class=${(0,u.H)(e)}
                              ?disabled=${this.disabled||this.readonly}
                              aria-label="datumkiezer${this.label?` ${this.label}`:""}"
                              aria-expanded=${this.isOpen}
                              aria-controls=${this.id||h.s6}
                              @click=${this.toggleCalendar}
                          >
                              <span class="vl-icon vl-icon--small vl-vi vl-vi-calendar" aria-hidden="true"></span>
                          </button>
                      `}
            </div>
            <div id="datepicker-calendar-placeholder"></div>
        `}get validationTarget(){return this.shadowRoot?.querySelector("input")}resetFormControl(){super.resetFormControl(),this.setInitialValue()}getRawValue(){return this.cleaveInstance?.getRawValue()}getDates(){return this.flatpickrInstance?.selectedDates}setInitialValue(){let t=this.flatpickrInstance?.parseDate(this.initialValue,"Z");this.value=this.initialValue,t instanceof Date&&!isNaN(t)&&"range"!==this.type?(this.flatpickrInstance?.setDate(t,!0),this.inputValue=o.A.formatDate(t,this.format),this.dispatchInput=!1):"time"===this.type&&this.initialValue?this.inputValue=this.initialValue:(this.flatpickrInstance?.clear(),this.inputValue="")}parseTodayDate(t){let e=t=>o.A.formatDate(t,this.format);if("today"===t)return e(new Date);if(t){let i=o.A.parseDate(t,"Z");return i?e(i):void 0}}getDynamicOptions(){let t=o.A.parseDate(this.minTime,this.format);return{allowInput:this.inputHasFocus&&!(this.disabled||this.readonly),maxDate:this.maxDate,minDate:this.minDate,minTime:this.minTime,maxTime:this.maxTime,defaultHour:t?.getHours()??12,defaultMinute:t?.getMinutes()??0,position:this.position||"auto"}}addAccessibilityAttributes(){let t=this.shadowRoot?.querySelector(".flatpickr-calendar");t?.querySelectorAll(".flatpickr-day").forEach(t=>{let e=t.getAttribute("aria-label");if(e){let i=new Date(e).toLocaleDateString("nl-NL",{weekday:"long"});t.setAttribute("aria-label",`${e}, ${i}`),t.setAttribute("role","button")}}),t?.querySelectorAll(".flatpickr-prev-month, .flatpickr-next-month")?.forEach(t=>{t.setAttribute("aria-label",t.classList.contains("flatpickr-prev-month")?"Vorige maand":"Volgende maand"),t.setAttribute("role","button"),t.querySelector("svg")?.setAttribute("aria-hidden","true")}),t?.querySelector(".flatpickr-weekdays")?.setAttribute("aria-hidden","true")}getOptions(){let t=this.shadowRoot?.querySelector("button"),e="range"!==this.type&&this.parseTodayDate(this.initialValue),i={dateFormat:this.format,locale:d().nl,clickOpens:!1,onChange:this.handleDatePickerChange,onOpen:this.handleOpenCalendar,onClose:this.handleCloseCalendar,positionElement:t,static:this.isStatic,appendTo:this.getCalendarPlaceholder(),defaultDate:e,enableTime:"time"===this.type||"date-time"===this.type,noCalendar:"time"===this.type,time_24hr:!this.amPm,mode:"range"!==this.type?"single":"range",disableMobile:this.disableMobileNativeInput,...this.getDynamicOptions()};return Object.keys(i).forEach(t=>{void 0===i[t]&&delete i[t]}),i}getDatePicker(){return this.shadowRoot?.querySelector("#datepicker-wrapper")}getFlatpickrWrapper(){return this.shadowRoot?.querySelector(".flatpickr-wrapper")}getNativeDateInput(){return this.renderRoot?.querySelector('input[type="date"]')}getCalendarPlaceholder(){return this.shadowRoot?.querySelector("#datepicker-calendar-placeholder")}updateOptionsForInstance(t){Object.keys(t).map(t=>t).forEach(e=>{this.flatpickrInstance?.set(e,t[e])})}updateOptionsForNativeInput(t,e){e.forEach(e=>{t.includes(e)&&this.getNativeDateInput()&&this.updateInputForAttribute(e,this.getNativeDateInput())})}updateInputForAttribute(t,e){this[t]?(e.setAttribute(t,"boolean"==typeof this[t]?"":this[t]),e.classList.add(`vl-input-field--${t}`)):(e.removeAttribute(t),e.classList.remove(`vl-input-field--${t}`))}initializeComponent(){!this.getDatePicker()||this.flatpickrInstance||(this.flatpickrInstance=(0,o.A)(this.getDatePicker(),this.getOptions()),this.getDatePicker()?.classList.add("static"),this.getDatePicker()?.removeAttribute("readonly"),this.isStatic||this.calculateCalendarPlaceholderPosition())}calculateCalendarPlaceholderPosition(){if(this.getDatePicker()){let{top:t,left:e,height:i}=this.getDatePicker().getBoundingClientRect(),s=this.getCalendarPlaceholder();s.style.top=a.nr?`calc(-${t}px - ${i}px)`:`-${t}px`,s.style.left=`-${e}px`}}handleCalendarClicked(){this.dispatchInput=!0}getISODateString(t,e){if(!t)return"";switch(this.type){case"time":return o.A.formatDate(t,this.format?.includes("S")?"H:i:S":"H:i");case"date-time":return o.A.formatDate(t,"Y-m-dTH:i");case"range":return`${o.A.formatDate(t,"Y-m-d")}${e?"/"+o.A.formatDate(e,"Y-m-d"):""}`;default:return o.A.formatDate(t,"Y-m-d")}}getDatesFromInputValue(t){let e=d()?.nl?.rangeSeparator,i=e&&t.split(e)||[],a=i?.map(t=>o.A.parseDate(t,this.format));return a.length&&a.every(t=>t instanceof Date)?a:void 0}handleInputValueChanged(t,e=!0){let i,a;this.dispatchInput=!0;try{let e=this.pattern?new RegExp(this.pattern):void 0,s=this.regex||e;(a=!s||s.test(t))&&(i=o.A.parseDate(t,this.format))}catch(t){}finally{if(e&&a&&i&&"range"!==this.type)this.value=this.getISODateString(i);else if("range"===this.type){let e=this.getDatesFromInputValue(t);e?.length?this.value=this.getISODateString(e[0],e[1]):this.value=t,this.inputValue=t}else this.inputValue=t,this.value=t;i instanceof Date&&!isNaN(i)&&this.flatpickrInstance?.setDate(t,!1,this.format)}}composeMaskForFormat(t,e){if(!t)return null;let i=null;switch(e){case"date":i=f(t,this.minDate,this.maxDate);break;case"time":i=v(t)}return i?{...i,onValueChanged:({target:{value:t,rawValue:e}})=>{let a=i?.regex?.test(e);this.handleInputValueChanged(t??"",a)}}:null}constructor(...t){super(...t),this.regex=b.t.regex,this.block=b.t.block,this.readonly=b.t.readonly,this.value=b.t.value,this.placeholder=b.t.placeholder,this.autocomplete=b.t.autocomplete,this.type=b.t.type,this.format=b.t.format,this.amPm=b.t.amPm,this.minDate=b.t.minDate,this.maxDate=b.t.maxDate,this.minTime=b.t.minTime,this.maxTime=b.t.maxTime,this.disableMaskValidation=b.t.disableMaskValidation,this.pattern=b.t.pattern,this.disableMobileNativeInput=b.t.disableMobileNativeInput,this.position=b.t.position,this.isStatic=b.t.isStatic,this.initialValue="",this.inputHasFocus=!1,this.flatpickrInstance=null,this.maskOptions=null,this.cleaveInstance=null,this.inputValue="",this.dispatchInput=!1,this.handleOpenChange=t=>{this.isOpen=t,t&&this.addAccessibilityAttributes()},this.toggleCalendar=()=>{this.calculateCalendarPlaceholderPosition(),this.flatpickrInstance?.toggle()},this.onInputFocus=()=>{this.inputHasFocus=!0},this.onInputBlur=()=>{this.inputHasFocus=!1},this.onInput=t=>{this.handleInputValueChanged(t.target?.value??"")},this.handleDatePickerChange=t=>{let e=t=>o.A.formatDate(t,this.format);1===t.length?(this.inputValue=e(t[0]),this.value=this.getISODateString(t[0])):2===t.length&&(this.value=this.getISODateString(t[0],t[1]),this.inputValue=`${e(t[0])}${d()?.nl?.rangeSeparator}${e(t[1])}`)},this.handleOpenCalendar=()=>{this.handleOpenChange(!0),this.addEventListener("click",this.handleCalendarClicked)},this.handleCloseCalendar=()=>{this.handleOpenChange(!1),this.removeEventListener("click",this.handleCalendarClicked)},this.updateFormControlValue=t=>{let e={value:this.value},i=this.flatpickrInstance?.parseDate(t,this.format);this.inputValue!==this.flatpickrInstance?.input.value&&i&&this.flatpickrInstance?.setDate(i,!1,this.format),this.setValue(this.value??""),this.dispatchEvent(new CustomEvent("vl-change",{composed:!0,bubbles:!0,detail:e})),this.dispatchInput&&(this.dispatchEvent(new CustomEvent("vl-input",{composed:!0,bubbles:!0,detail:e})),this.dispatchInput=!1),this.dispatchEventIfValid(e)}}}D=function(t,e,i,a){var s,l=arguments.length,r=l<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var n=t.length-1;n>=0;n--)(s=t[n])&&(r=(l<3?s(r):l>3?s(e,i,r):s(e,i))||r);return l>3&&r&&Object.defineProperty(e,i,r),r}([(0,a.M1)("vl-datepicker-next")],D)},"../../libs/form/src/next/datepicker/vl-datepicker.defaults.ts":(t,e,i)=>{i.d(e,{t:()=>a});let a={...i("../../libs/form/src/next/form-control/form-control.defaults.ts").i,block:!1,readonly:!1,value:"",placeholder:"",autocomplete:"",type:"date",format:"",amPm:!1,minDate:"",maxDate:"",minTime:"",maxTime:"",disableMaskValidation:!1,disableMobileNativeInput:!1,pattern:"",regex:null,position:"auto",isStatic:!1}}}]);