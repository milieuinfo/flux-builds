"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[8786],{"./libs/form/src/next/datepicker/vl-datepicker.component.ts":(t,e,a)=>{a.d(e,{Z:()=>D});var i=a("./libs/common/utilities/src/index.ts"),s=a("./libs/elements/src/index.ts"),r=a("./node_modules/@domg/govflanders-style/common/index.js"),l=a("./node_modules/@domg/govflanders-style/component/index.js"),n=a("./node_modules/cleave.js/dist/cleave-esm.js"),o=a("./node_modules/flatpickr/dist/esm/index.js"),p=a("./node_modules/flatpickr/dist/l10n/nl.js"),u=a.n(p),d=a("./node_modules/lit/index.js"),h=a("./node_modules/lit/directives/class-map.js"),c=a("./node_modules/lit/directives/live.js"),m=a("./libs/form/src/next/form-control/form-control.ts");let f=(t,e,a)=>{if(!t)return null;let i=null,s=t.split(/[dmyY]/).filter(t=>t),r=t.split(/[.*+-/_:]/);if(r.filter(t=>!["d","m","Y","y"].includes(t)).length)return null;let l=r.reduce((t,e)=>"Y"===e?t+4:t+2,0);if(i={date:!0,datePattern:r,delimiters:s,regex:RegExp(`^[0-9]{${l}}$`)},e){let a=o.Z?.parseDate(e,t);i={...i,dateMin:a?o.Z?.formatDate(a,"Y-M-D"):void 0}}if(a){let e=o.Z?.parseDate(a,t);i={...i,dateMax:e?o.Z?.formatDate(e,"Y-M-D"):void 0}}return i},g=t=>{if(!t)return null;let e=t.split(/[HhiS]/).filter(t=>t),a=!0,i=t.split(/[.*+-/_:]/).map(t=>{switch(t){case"H":return"h";case"h":return a=!1,"h";case"i":return"m";case"S":return"s";default:return t}});return i.filter(t=>!["h","m","s"].includes(t)).length?null:{time:!0,timePattern:i,timeFormat:a?"24":"12",delimiters:e,regex:RegExp(`^[0-9]{${2*i.length}}$`)}},v={key:"patternMismatch",message:"Value does not meet the given pattern.",isValid(t,e){let{disableMaskValidation:a,cleaveInstance:i,inputValue:s}=t,r=t.regex||t.pattern;if(!e||!r&&(!i||a))return!0;if(!(i&&!a&&t.maskOptions?.regex))return new RegExp(r).test(s);{let e=i.getRawValue();return new RegExp(t.maskOptions.regex).test(e)}}};var k=a("./libs/form/src/next/datepicker/vl-datepicker.defaults.ts");let b=(0,d.iv)`
    :host {
        --vl-error-color: rgb(210, 55, 60);
        --vl-success-color: rgb(0, 158, 71);
    }
    button {
        cursor: pointer;
    }
    .vl-input-field {
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
        border-color: var(--vl-error-color);
    }
    .vl-input-addon--error .vl-vi {
        color: var(--vl-error-color) !important;
    }

    .flatpickr-calendar {
        z-index: 1000 !important;
    }

    .flatpickr-wrapper--block {
        width: 100%;
    }
`,y=" tot en met ";class D extends m.N{static{(0,i.YV)([s.q_,s.Gi])}static{this.formControlValidators=[...m.N.formControlValidators,v]}static get styles(){return[r.YN,r.Oh,l.oQ,l.K$,l.CZ,l.gU,l.ap,l.nt,b]}static get properties(){return{block:{type:Boolean},readonly:{type:Boolean},value:{type:String},placeholder:{type:String},autocomplete:{type:String},type:{type:String},format:{type:String},amPm:{type:Boolean,attribute:"am-pm"},minDate:{type:String,attribute:"min-date"},maxDate:{type:String,attribute:"max-date"},minTime:{type:String,attribute:"min-time"},maxTime:{type:String,attribute:"max-time"},rawValue:{type:Boolean,attribute:"raw-value"},inputValue:{type:String,state:!0},pattern:{type:String},disableMaskValidation:{type:Boolean,attribute:"disable-mask-validation"}}}connectedCallback(){super.connectedCallback(),u()?.nl&&(u().nl.rangeSeparator=y,o.Z.l10ns.default.rangeSeparator=y),this.initialValue||"string"!=typeof this.value||"range"===this.type||(this.initialValue=this.value)}firstUpdated(t){if(super.firstUpdated(t),t.has("type")&&!this.format){let t="d.m.Y";switch(this.type){case"date":default:this.format=t;break;case"time":this.format="H:i";break;case"date-time":this.format=`${t} H:i`}}this.maskOptions=this.composeMaskForFormat(this.format,this.type),this.maskOptions&&!this.disableMaskValidation&&(this.cleaveInstance=new n.Z(this.validationTarget,this.maskOptions)),this.initializeComponent(),this.setInitialValue()}updated(t){super.updated(t);let e=this.getDynamicOptions();if(["disabled","readonly","minDate","maxDate","minTime","maxTime"].some(e=>t.has(e))&&this.updateOptionsForInstance(e),t.has("value")&&!t.has("inputValue")&&"string"==typeof this.value)switch(this.type){case"date-time":case"date":{let t=o.Z.parseDate(this.value,"Z");t?this.inputValue=o.Z.formatDate(t,this.format):t||this.value||(this.flatpickrInstance?.clear(),this.inputValue="");break}case"time":{let t=o.Z.parseDate(this.value,this.format);t?this.inputValue=o.Z.formatDate(t,this.format):t||this.value||(this.flatpickrInstance?.clear(),this.inputValue="");break}default:this.inputValue=this.value}t.has("inputValue")&&this.updateFormControlValue(this.inputValue??""),t.has("block")&&(this.block?this.getFlatpickrWrapper()?.classList.add("flatpickr-wrapper--block"):this.getFlatpickrWrapper()?.classList.remove("flatpickr-wrapper--block"))}disconnectedCallback(){super.disconnectedCallback(),this.flatpickrInstance?.destroy()}render(){let t={"vl-input-field":!0,"js-vl-datepicker-toggle":!0,"vl-input-field--error":this.error||this.isInvalid,"vl-input-field--success":this.success,"vl-input-field--block":this.block,"vl-input-field--disabled":this.disabled},e={"vl-input-addon":!0,"js-vl-datepicker-toggle":!0,"vl-input-addon--error":this.error||this.isInvalid,"vl-input-addon--success":this.success,"vl-input-addon--disabled":this.disabled};return(0,d.dy)`
            <div class="vl-input-group" id="datepicker-wrapper">
                <input
                    id=${this.id||d.Ld}
                    name=${this.name||d.Ld}
                    class=${(0,h.$)(t)}
                    type="text"
                    aria-label=${this.label||d.Ld}
                    ?required=${this.required}
                    ?disabled=${this.disabled}
                    ?error=${this.error}
                    ?readonly=${this.readonly}
                    .value=${(0,c.a)(this.inputValue)}
                    placeholder=${this.placeholder||d.Ld}
                    autocomplete=${this.autocomplete||d.Ld}
                    pattern=${this.pattern||d.Ld}
                    @input=${this.cleaveInstance?d.Ld:this.onInput}
                />
                <button
                    id="toggle-calendar"
                    type="button"
                    class=${(0,h.$)(e)}
                    ?disabled=${this.disabled}
                    aria-label="toggle calendar"
                    @click=${this.toggleCalendar}
                >
                    <span class="vl-icon vl-icon--small vl-vi vl-vi-calendar" aria-hidden="true"></span>
                </button>
            </div>
        `}get validationTarget(){return this.shadowRoot?.querySelector("input")}resetFormControl(){super.resetFormControl(),this.setInitialValue()}getRawValue(){return this.cleaveInstance?.getRawValue()}getDates(){return this.flatpickrInstance?.selectedDates}setInitialValue(){let t=this.flatpickrInstance?.parseDate(this.initialValue,"Z");this.value=this.initialValue,t instanceof Date&&!isNaN(t)&&"range"!==this.type?(this.flatpickrInstance?.setDate(t,!0),this.inputValue=o.Z.formatDate(t,this.format)):"time"===this.type&&this.initialValue?this.inputValue=this.initialValue:(this.flatpickrInstance?.clear(),this.inputValue="")}parseTodayDate(t){let e=t=>o.Z.formatDate(t,this.format);if("today"===t)return e(new Date);if(t){let a=o.Z.parseDate(t,"Z");return a?e(a):void 0}}getDynamicOptions(){let t=o.Z.parseDate(this.minTime,this.format);return{allowInput:!(this.disabled||this.readonly),maxDate:this.maxDate,minDate:this.minDate,minTime:this.minTime,maxTime:this.maxTime,defaultHour:t?.getHours()??12,defaultMinute:t?.getMinutes()??0}}getOptions(){let t=this.shadowRoot?.querySelector("button"),e=this.shadowRoot?.querySelector("#datepicker-wrapper"),a="range"!==this.type&&this.parseTodayDate(this.initialValue),i={dateFormat:this.format,locale:u().nl,clickOpens:!1,onChange:this.handleDatePickerChange,positionElement:t,static:!0,appendTo:e,defaultDate:a,enableTime:"time"===this.type||"date-time"===this.type,noCalendar:"time"===this.type,time_24hr:!this.amPm,mode:"range"!==this.type?"single":"range",...this.getDynamicOptions()};return Object.keys(i).forEach(t=>{void 0===i[t]&&delete i[t]}),i}getDatePicker(){return this.shadowRoot?.querySelector("#datepicker-wrapper")}getFlatpickrWrapper(){return this.shadowRoot?.querySelector(".flatpickr-wrapper")}updateOptionsForInstance(t){Object.keys(t).map(t=>t).forEach(e=>{this.flatpickrInstance?.set(e,t[e])})}initializeComponent(){this.getDatePicker()&&!this.flatpickrInstance&&(this.flatpickrInstance=(0,o.Z)(this.getDatePicker(),this.getOptions()),this.getDatePicker()?.classList.add("static"))}getISODateString(t,e){if(!t)return"";switch(this.type){case"time":return o.Z.formatDate(t,this.format?.includes("S")?"H:i:S":"H:i");case"date-time":return o.Z.formatDate(t,"Y-m-dTH:i");case"range":return`${o.Z.formatDate(t,"Y-m-d")}${e?"/"+o.Z.formatDate(e,"Y-m-d"):""}`;default:return o.Z.formatDate(t,"Y-m-d")}}getDatesFromInputValue(t){let e=u()?.nl?.rangeSeparator,a=e&&t.split(e)||[],i=a?.map(t=>o.Z.parseDate(t,this.format));return i.length&&i.every(t=>t instanceof Date)?i:void 0}handleInputValueChanged(t,e=!0){let a,i;try{let e=this.pattern?new RegExp(this.pattern):void 0,s=this.regex||e;(i=!s||s.test(t))&&(a=o.Z.parseDate(t,this.format))}catch(t){}finally{if(e&&i&&a&&"range"!==this.type)this.value=this.getISODateString(a);else if("range"===this.type){let e=this.getDatesFromInputValue(t);e?.length?this.value=this.getISODateString(e[0],e[1]):this.value=t,this.inputValue=t}else this.inputValue=t,this.value=t;a instanceof Date&&!isNaN(a)&&this.flatpickrInstance?.setDate(t,!1,this.format)}}composeMaskForFormat(t,e){if(!t)return null;let a=null;switch(e){case"date":a=f(t,this.minDate,this.maxDate);break;case"time":a=g(t)}return a?{...a,onValueChanged:({target:{value:t,rawValue:e}})=>{let i=a?.regex?.test(e);this.handleInputValueChanged(t??"",i)}}:null}constructor(...t){super(...t),this.regex=k._.regex,this.block=k._.block,this.readonly=k._.readonly,this.value=k._.value,this.placeholder=k._.placeholder,this.autocomplete=k._.autocomplete,this.type=k._.type,this.format=k._.format,this.amPm=k._.amPm,this.minDate=k._.minDate,this.maxDate=k._.maxDate,this.minTime=k._.minTime,this.maxTime=k._.maxTime,this.disableMaskValidation=k._.disableMaskValidation,this.pattern=k._.pattern,this.initialValue="",this.flatpickrInstance=null,this.maskOptions=null,this.cleaveInstance=null,this.inputValue="",this.toggleCalendar=()=>{this.flatpickrInstance?.toggle()},this.onInput=t=>{this.handleInputValueChanged(t.target?.value??"")},this.handleDatePickerChange=t=>{let e=t=>o.Z.formatDate(t,this.format);1===t.length?(this.inputValue=e(t[0]),this.value=this.getISODateString(t[0])):2===t.length&&(this.value=this.getISODateString(t[0],t[1]),this.inputValue=`${e(t[0])}${u()?.nl?.rangeSeparator}${e(t[1])}`)},this.updateFormControlValue=t=>{let e={value:this.value},a=this.flatpickrInstance?.parseDate(t,this.format);this.inputValue!==this.flatpickrInstance?.input.value&&a&&this.flatpickrInstance?.setDate(a,!1,this.format),this.setValue(this.value??""),this.dispatchEvent(new CustomEvent("vl-input",{composed:!0,bubbles:!0,detail:e})),this.dispatchEventIfValid(e)}}}D=function(t,e,a,i){var s,r=arguments.length,l=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,a,i);else for(var n=t.length-1;n>=0;n--)(s=t[n])&&(l=(r<3?s(l):r>3?s(e,a,l):s(e,a))||l);return r>3&&l&&Object.defineProperty(e,a,l),l}([(0,i.a6)("vl-datepicker-next")],D)},"./libs/form/src/next/datepicker/vl-datepicker.defaults.ts":(t,e,a)=>{a.d(e,{_:()=>i});let i={...a("./libs/form/src/next/form-control/form-control.defaults.ts").E,block:!1,readonly:!1,value:"",placeholder:"",autocomplete:"",type:"date",format:"",amPm:!1,minDate:"",maxDate:"",minTime:"",maxTime:"",disableMaskValidation:!1,pattern:"",regex:null}}}]);