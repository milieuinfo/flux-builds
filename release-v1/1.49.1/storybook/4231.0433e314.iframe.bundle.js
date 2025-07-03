"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[4231],{"../../libs/form/src/next/datepicker/vl-datepicker.component.ts":(t,e,i)=>{i.d(e,{M:()=>I});var a=i("../../libs/common/utilities/src/index.ts"),n=i("../../libs/common/utilities/src/css/index.ts"),s=i("../../node_modules/lit/index.js");let l=(0,s.AH)`
    .vl-input-addon-next {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 3.5rem;
        line-height: 3.5rem;
        min-width: 3.5rem;
        border: 0.1rem solid var(--vl-color--border-alt);
        text-decoration: none;
        padding: 0 1rem;
        font-weight: 500;
        font-size: 1.6rem;
        color: var(--vl-color--text);
        background: #fff;
        margin: 0;
    }

    .vl-input-addon-next[type='button'] .vl-icon,
    .vl-input-addon-next[href] .vl-icon {
        color: #05c;
    }
    .vl-input-addon-next[type='button']:hover,
    .vl-input-addon-next[href]:hover {
        box-shadow: inset 0 0 0 0.1rem rgba(0, 85, 204, 0.65);
        border-color: rgba(0, 85, 204, 0.65);
        background: rgba(179, 207, 245, 0.3);
    }
    .vl-input-addon-next[type='button']:hover .vl-icon,
    .vl-input-addon-next[type='button']:focus .vl-icon,
    .vl-input-addon-next[href]:hover .vl-icon,
    .vl-input-addon-next[href]:focus .vl-icon {
        color: var(--vl-color--action-hover);
    }
    .vl-input-addon-next[type='button']:focus,
    .vl-input-addon-next[href]:focus {
        box-shadow: 0 0 0 2px #fff, 0 0 0 5px rgba(0, 85, 204, 0.65);
        outline: transparent solid 0.2rem;
    }
    @supports (outline-offset: 2px) {
        .vl-input-addon-next[type='button']:focus,
        .vl-input-addon-next[href]:focus {
            box-shadow: none;
            outline: 3px solid rgba(0, 85, 204, 0.65);
            outline-offset: 2px;
        }
    }
    @supports (outline-offset: 2px) {
        .vl-input-addon-next[type='button']:focus,
        .vl-input-addon-next[href]:focus {
            box-shadow: none;
            outline: 3px solid rgba(0, 85, 204, 0.65);
            outline-offset: 2px;
        }
    }
    .vl-input-addon-next[type='button']:hover:focus,
    .vl-input-addon-next[href]:hover:focus {
        box-shadow: inset 0 0 0 0.1rem rgba(0, 85, 204, 0.65), 0 0 0 2px #fff, 0 0 0 5px rgba(0, 85, 204, 0.65);
    }
    .vl-input-addon-next--disabled[type='button'],
    .vl-input-addon-next--disabled[href] {
        background-color: #cbd2d9;
        cursor: not-allowed;
    }
    .vl-input-addon-next--disabled[type='button'] .vl-icon,
    .vl-input-addon-next--disabled[href] .vl-icon {
        color: #687483;
    }
    .vl-input-addon-next--disabled[type='button']:hover,
    .vl-input-addon-next--disabled[type='button']:active,
    .vl-input-addon-next--disabled[href]:hover,
    .vl-input-addon-next--disabled[href]:active {
        background-color: #cbd2d9;
        border-color: #cbd2d9;
    }
    .vl-input-addon-next--disabled[type='button']:hover .vl-icon,
    .vl-input-addon-next--disabled[type='button']:active .vl-icon,
    .vl-input-addon-next--disabled[href]:hover .vl-icon,
    .vl-input-addon-next--disabled[href]:active .vl-icon {
        color: #687483;
    }
    .vl-input-addon-next--disabled[type='button']:focus .vl-icon,
    .vl-input-addon-next--disabled[href]:focus .vl-icon {
        color: #687483;
    }
    .vl-input-addon-next .vl-icon {
        display: inline-flex;
        color: inherit;
    }
    .vl-input-addon-next .vl-icon::before,
    .vl-input-addon-next .vl-icon::after {
        font-size: 1.8rem;
    }

    .vl-input-addon-next--success {
        border-color: var(--vl-color--success);
    }
    .vl-input-addon-next--success .vl-vi {
        color: var(--vl-color--success) !important;
    }
    .vl-input-addon-next--error {
        border-color: var(--vl-color--error);
    }
    .vl-input-addon-next--error .vl-vi {
        color: var(--vl-color--error) !important;
    }
`;var r=i("../../node_modules/@domg/govflanders-style/common/index.js"),o=i("../../node_modules/@domg/govflanders-style/component/index.js"),d=i("../../node_modules/cleave.js/dist/cleave-esm.js"),p=i("../../node_modules/flatpickr/dist/esm/index.js"),u=i("../../node_modules/flatpickr/dist/l10n/nl.js"),c=i.n(u),h=i("../../node_modules/lit/directives/class-map.js"),m=i("../../node_modules/lit/directives/live.js"),v=i("../../libs/form/src/next/form-control/form-control.ts"),f=i("../../libs/form/src/next/input-field/vl-input-field.css.ts");let b=(t,e,i)=>{if(!t)return null;let a=null,n=t.split(/[dmyY]/).filter(t=>t),s=t.split(/[.*+-/_:]/);if(s.filter(t=>!["d","m","Y","y"].includes(t)).length)return null;let l=s.reduce((t,e)=>"Y"===e?t+4:t+2,0);if(a={date:!0,datePattern:s,delimiters:n,regex:RegExp(`^[0-9]{${l}}$`)},e){let i=p.A?.parseDate(e,t);a={...a,dateMin:i?p.A?.formatDate(i,"Y-M-D"):void 0}}if(i){let e=p.A?.parseDate(i,t);a={...a,dateMax:e?p.A?.formatDate(e,"Y-M-D"):void 0}}return a},g=t=>{if(!t)return null;let e=t.split(/[HhiS]/).filter(t=>t),i=!0,a=t.split(/[.*+-/_:]/).map(t=>{switch(t){case"H":return"h";case"h":return i=!1,"h";case"i":return"m";case"S":return"s";default:return t}});return a.filter(t=>!["h","m","s"].includes(t)).length?null:{time:!0,timePattern:a,timeFormat:i?"24":"12",delimiters:e,regex:RegExp(`^[0-9]{${2*a.length}}$`)}},y={key:"patternMismatch",message:"Value does not meet the given pattern.",isValid(t,e){let{disableMaskValidation:i,cleaveInstance:a,inputValue:n}=t,s=t.regex||t.pattern;if(!e||!s&&(!a||i))return!0;if(!(a&&!i&&t.maskOptions?.regex))return new RegExp(s).test(n);{let e=a.getRawValue();return new RegExp(t.maskOptions.regex).test(e)}}};var x=i("../../libs/form/src/next/datepicker/vl-datepicker.defaults.ts");let k=(0,s.AH)`
    :host {
        position: relative;
    }

    button {
        cursor: pointer;
    }
    .vl-input-field:not(input[type='date']) {
        border-radius: 0.3rem 0 0 0.3rem;
    }
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

    .vl-group-next--input-group {
        input {
            border-radius: 0.3rem 0px 0px 0.3rem;
            border-right-width: 0px;
        }

        button {
            border-radius: 0px 0.3rem 0.3rem 0px;
        }
    }

    #datepicker-calendar-placeholder {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        z-index: var(--vl-z-layer--datepicker);
    }
`,D=" tot en met ";class I extends v.M{static{this.formControlValidators=[...v.M.formControlValidators,y]}static get styles(){return[r.h8,r.BI,o.py,f.N,o.FG,o.GU,k,n.yy,l]}static get properties(){return{block:{type:Boolean},readonly:{type:Boolean},value:{type:String},placeholder:{type:String},autocomplete:{type:String},type:{type:String},format:{type:String},amPm:{type:Boolean,attribute:"am-pm"},minDate:{type:String,attribute:"min-date"},maxDate:{type:String,attribute:"max-date"},minTime:{type:String,attribute:"min-time"},maxTime:{type:String,attribute:"max-time"},pattern:{type:String},disableMaskValidation:{type:Boolean,attribute:"disable-mask-validation"},disableMobileNativeInput:{type:Boolean,attribute:"disable-mobile-native-input"},rawValue:{type:Boolean,attribute:"raw-value"},inputValue:{type:String,state:!0},inputHasFocus:{type:Boolean,state:!0},isOpen:{type:Boolean,state:!0},position:{type:String},isStatic:{type:Boolean,attribute:"static"}}}connectedCallback(){super.connectedCallback(),c()?.nl&&(c().nl={...c().nl,rangeSeparator:D,yearAriaLabel:"Jaar",monthAriaLabel:"Maand",hourAriaLabel:"Uur",minuteAriaLabel:"Minuut"},p.A.l10ns.default.rangeSeparator=D),this.initialValue||"string"!=typeof this.value||"range"===this.type||(this.initialValue=this.value)}firstUpdated(t){if(super.firstUpdated(t),t.has("type")&&!this.format){let t="d.m.Y";switch(this.type){case"date":default:this.format=t;break;case"time":this.format="H:i";break;case"date-time":this.format=`${t} H:i`}}this.maskOptions=this.composeMaskForFormat(this.format,this.type),this.maskOptions&&!this.disableMaskValidation&&(this.cleaveInstance=new d.A(this.validationTarget,this.maskOptions)),this.initializeComponent(),this.setInitialValue()}updated(t){super.updated(t);let e=this.getDynamicOptions(),i=["disabled","readonly","placeholder","required","block","error","success"];["disabled","readonly","minDate","maxDate","minTime","maxTime","position"].some(e=>t.has(e))&&this.updateOptionsForInstance(e);let a=i.filter(e=>t.has(e));if(a.length&&this.updateOptionsForNativeInput(a,i),t.has("value")&&!t.has("inputValue")&&"string"==typeof this.value)switch(this.type){case"date-time":case"date":{let t=p.A.parseDate(this.value,"Z");t?this.inputValue=p.A.formatDate(t,this.format):t||this.value||(this.flatpickrInstance?.clear(),this.inputValue="");break}case"time":{let t=p.A.parseDate(this.value,this.format);t?this.inputValue=p.A.formatDate(t,this.format):t||this.value||(this.flatpickrInstance?.clear(),this.inputValue="");break}default:this.inputValue=this.value}t.has("inputValue")&&this.updateFormControlValue(this.inputValue??""),t.has("block")&&(this.block?this.getFlatpickrWrapper()?.classList.add("flatpickr-wrapper--block"):this.getFlatpickrWrapper()?.classList.remove("flatpickr-wrapper--block")),this.flatpickrInstance?.isMobile&&!this.disableMobileNativeInput&&(this.getNativeDateInput()?.classList.add("js-vl-datepicker-input","vl-input-field","flatpickr-input","flatpickr-mobile"),this.getNativeDateInput()?.classList.remove("vl-input-group"))}disconnectedCallback(){super.disconnectedCallback(),this.flatpickrInstance?.destroy()}render(){let t={"vl-input-field":!0,"vl-input-field--input-group-left":!0,"js-vl-datepicker-toggle":!0,"vl-input-field--error":this.error||this.isInvalid,"vl-input-field--success":this.success,"vl-input-field--block":this.block,"vl-input-field--disabled":this.disabled},e={"vl-input-addon-next":!0,"js-vl-datepicker-toggle":!0,"vl-input-addon--error":this.error||this.isInvalid,"vl-input-addon--success":this.success,"vl-input-addon--disabled":this.disabled};return(0,s.qy)`
            <div class="vl-group-next vl-group-next--input-group" id="datepicker-wrapper">
                ${this.flatpickrInstance?.isMobile&&!this.disableMobileNativeInput?s.s6:(0,s.qy)`
                          <input
                              id=${this.id||s.s6}
                              name=${this.name||s.s6}
                              class=${(0,h.H)(t)}
                              type="text"
                              aria-label=${this.label||s.s6}
                              aria-invalid=${this.isInvalid||s.s6}
                              ?required=${this.required}
                              ?disabled=${this.disabled}
                              ?error=${this.error}
                              ?readonly=${this.readonly}
                              .value=${(0,m.V)(this.inputValue)}
                              placeholder=${this.placeholder||s.s6}
                              autocomplete=${this.autocomplete||s.s6}
                              pattern=${this.pattern||s.s6}
                              inputmode=${this.cleaveInstance?"numeric":s.s6}
                              @focus="${this.onInputFocus}"
                              @blur="${this.onInputBlur}"
                              @input=${this.cleaveInstance?s.s6:this.onInput}
                          />
                          <button
                              id="toggle-calendar"
                              type="button"
                              class=${(0,h.H)(e)}
                              ?disabled=${this.disabled||this.readonly}
                              aria-label="datumkiezer${this.label?` ${this.label}`:""}"
                              aria-expanded=${this.isOpen}
                              aria-controls=${this.id||s.s6}
                              @click=${this.toggleCalendar}
                          >
                              <span class="vl-icon vl-icon--small vl-vi vl-vi-calendar" aria-hidden="true"></span>
                          </button>
                      `}
            </div>
            <div id="datepicker-calendar-placeholder"></div>
        `}get validationTarget(){return this.shadowRoot?.querySelector("input")}resetFormControl(){super.resetFormControl(),this.setInitialValue()}getRawValue(){return this.cleaveInstance?.getRawValue()}getDates(){return this.flatpickrInstance?.selectedDates}setInitialValue(){let t=this.flatpickrInstance?.parseDate(this.initialValue,"Z");this.value=this.initialValue,t instanceof Date&&!isNaN(t)&&"range"!==this.type?(this.flatpickrInstance?.setDate(t,!0),this.inputValue=p.A.formatDate(t,this.format),this.dispatchInput=!1):"time"===this.type&&this.initialValue?this.inputValue=this.initialValue:(this.flatpickrInstance?.clear(),this.inputValue="")}parseTodayDate(t){let e=t=>p.A.formatDate(t,this.format);if("today"===t)return e(new Date);if(t){let i=p.A.parseDate(t,"Z");return i?e(i):void 0}}getDynamicOptions(){let t=p.A.parseDate(this.minTime,this.format);return{allowInput:this.inputHasFocus&&!(this.disabled||this.readonly),maxDate:this.maxDate,minDate:this.minDate,minTime:this.minTime,maxTime:this.maxTime,defaultHour:t?.getHours()??12,defaultMinute:t?.getMinutes()??0,position:this.position||"auto"}}addAccessibilityAttributes(){let t=this.shadowRoot?.querySelector(".flatpickr-calendar");t?.querySelectorAll(".flatpickr-day").forEach(t=>{let e=t.getAttribute("aria-label");if(e){let i=new Date(e).toLocaleDateString("nl-NL",{weekday:"long"});t.setAttribute("aria-label",`${e}, ${i}`),t.setAttribute("role","button")}}),t?.querySelectorAll(".flatpickr-prev-month, .flatpickr-next-month")?.forEach(t=>{t.setAttribute("aria-label",t.classList.contains("flatpickr-prev-month")?"Vorige maand":"Volgende maand"),t.setAttribute("role","button"),t.querySelector("svg")?.setAttribute("aria-hidden","true")}),t?.querySelector(".flatpickr-weekdays")?.setAttribute("aria-hidden","true")}getOptions(){let t=this.shadowRoot?.querySelector("button"),e="range"!==this.type&&this.parseTodayDate(this.initialValue),i={dateFormat:this.format,locale:c().nl,clickOpens:!1,onChange:this.handleDatePickerChange,onOpen:this.handleOpenCalendar,onClose:this.handleCloseCalendar,positionElement:t,static:this.isStatic,appendTo:this.getCalendarPlaceholder(),defaultDate:e,enableTime:"time"===this.type||"date-time"===this.type,noCalendar:"time"===this.type,time_24hr:!this.amPm,mode:"range"!==this.type?"single":"range",disableMobile:this.disableMobileNativeInput,...this.getDynamicOptions()};return Object.keys(i).forEach(t=>{void 0===i[t]&&delete i[t]}),i}getDatePicker(){return this.shadowRoot?.querySelector("#datepicker-wrapper")}getFlatpickrWrapper(){return this.shadowRoot?.querySelector(".flatpickr-wrapper")}getNativeDateInput(){return this.renderRoot?.querySelector('input[type="date"]')}getCalendarPlaceholder(){return this.shadowRoot?.querySelector("#datepicker-calendar-placeholder")}updateOptionsForInstance(t){Object.keys(t).map(t=>t).forEach(e=>{this.flatpickrInstance?.set(e,t[e])})}updateOptionsForNativeInput(t,e){e.forEach(e=>{t.includes(e)&&this.getNativeDateInput()&&this.updateInputForAttribute(e,this.getNativeDateInput())})}updateInputForAttribute(t,e){this[t]?(e.setAttribute(t,"boolean"==typeof this[t]?"":this[t]),e.classList.add(`vl-input-field--${t}`)):(e.removeAttribute(t),e.classList.remove(`vl-input-field--${t}`))}initializeComponent(){!this.getDatePicker()||this.flatpickrInstance||(this.flatpickrInstance=(0,p.A)(this.getDatePicker(),this.getOptions()),this.getDatePicker()?.classList.add("static"),this.getDatePicker()?.removeAttribute("readonly"),this.isStatic||this.calculateCalendarPlaceholderPosition())}calculateCalendarPlaceholderPosition(){if(this.getDatePicker()){let{top:t,left:e,height:i}=this.getDatePicker().getBoundingClientRect(),n=this.getCalendarPlaceholder();n.style.top=a.nr?`calc(-${t}px - ${i}px)`:`-${t}px`,n.style.left=`-${e}px`}}handleCalendarClicked(){this.dispatchInput=!0}getISODateString(t,e){if(!t)return"";switch(this.type){case"time":return p.A.formatDate(t,this.format?.includes("S")?"H:i:S":"H:i");case"date-time":return p.A.formatDate(t,"Y-m-dTH:i");case"range":return`${p.A.formatDate(t,"Y-m-d")}${e?"/"+p.A.formatDate(e,"Y-m-d"):""}`;default:return p.A.formatDate(t,"Y-m-d")}}getDatesFromInputValue(t){let e=c()?.nl?.rangeSeparator,i=e&&t.split(e)||[],a=i?.map(t=>p.A.parseDate(t,this.format));return a.length&&a.every(t=>t instanceof Date)?a:void 0}handleInputValueChanged(t,e=!0){let i,a;this.dispatchInput=!0;try{let e=this.pattern?new RegExp(this.pattern):void 0,n=this.regex||e;(a=!n||n.test(t))&&(i=p.A.parseDate(t,this.format))}catch(t){}finally{if(e&&a&&i&&"range"!==this.type)this.value=this.getISODateString(i);else if("range"===this.type){let e=this.getDatesFromInputValue(t);e?.length?this.value=this.getISODateString(e[0],e[1]):this.value=t,this.inputValue=t}else this.inputValue=t,this.value=t;i instanceof Date&&!isNaN(i)&&this.flatpickrInstance?.setDate(t,!1,this.format)}}composeMaskForFormat(t,e){if(!t)return null;let i=null;switch(e){case"date":i=b(t,this.minDate,this.maxDate);break;case"time":i=g(t)}return i?{...i,onValueChanged:({target:{value:t,rawValue:e}})=>{let a=i?.regex?.test(e);this.handleInputValueChanged(t??"",a)}}:null}constructor(...t){super(...t),this.regex=x.t.regex,this.block=x.t.block,this.readonly=x.t.readonly,this.value=x.t.value,this.placeholder=x.t.placeholder,this.autocomplete=x.t.autocomplete,this.type=x.t.type,this.format=x.t.format,this.amPm=x.t.amPm,this.minDate=x.t.minDate,this.maxDate=x.t.maxDate,this.minTime=x.t.minTime,this.maxTime=x.t.maxTime,this.disableMaskValidation=x.t.disableMaskValidation,this.pattern=x.t.pattern,this.disableMobileNativeInput=x.t.disableMobileNativeInput,this.position=x.t.position,this.isStatic=x.t.isStatic,this.initialValue="",this.inputHasFocus=!1,this.flatpickrInstance=null,this.maskOptions=null,this.cleaveInstance=null,this.inputValue="",this.dispatchInput=!1,this.handleOpenChange=t=>{this.isOpen=t,t&&this.addAccessibilityAttributes()},this.toggleCalendar=()=>{this.calculateCalendarPlaceholderPosition(),this.flatpickrInstance?.toggle()},this.onInputFocus=()=>{this.inputHasFocus=!0},this.onInputBlur=()=>{this.inputHasFocus=!1},this.onInput=t=>{this.handleInputValueChanged(t.target?.value??"")},this.handleDatePickerChange=t=>{let e=t=>p.A.formatDate(t,this.format);1===t.length?(this.inputValue=e(t[0]),this.value=this.getISODateString(t[0])):2===t.length&&(this.value=this.getISODateString(t[0],t[1]),this.inputValue=`${e(t[0])}${c()?.nl?.rangeSeparator}${e(t[1])}`)},this.handleOpenCalendar=()=>{this.handleOpenChange(!0),this.addEventListener("click",this.handleCalendarClicked)},this.handleCloseCalendar=()=>{this.handleOpenChange(!1),this.removeEventListener("click",this.handleCalendarClicked)},this.updateFormControlValue=t=>{let e={value:this.value},i=this.flatpickrInstance?.parseDate(t,this.format);this.inputValue!==this.flatpickrInstance?.input.value&&i&&this.flatpickrInstance?.setDate(i,!1,this.format),this.setValue(this.value??""),this.dispatchEvent(new CustomEvent("vl-change",{composed:!0,bubbles:!0,detail:e})),this.dispatchInput&&(this.dispatchEvent(new CustomEvent("vl-input",{composed:!0,bubbles:!0,detail:e})),this.dispatchInput=!1),this.dispatchEventIfValid(e)}}}I=function(t,e,i,a){var n,s=arguments.length,l=s<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,i,a);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(l=(s<3?n(l):s>3?n(e,i,l):n(e,i))||l);return s>3&&l&&Object.defineProperty(e,i,l),l}([(0,a.M1)("vl-datepicker-next")],I)},"../../libs/form/src/next/datepicker/vl-datepicker.defaults.ts":(t,e,i)=>{i.d(e,{t:()=>a});let a={...i("../../libs/form/src/next/form-control/form-control.defaults.ts").i,block:!1,readonly:!1,value:"",placeholder:"",autocomplete:"",type:"date",format:"",amPm:!1,minDate:"",maxDate:"",minTime:"",maxTime:"",disableMaskValidation:!1,disableMobileNativeInput:!1,pattern:"",regex:null,position:"auto",isStatic:!1}}}]);