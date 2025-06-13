"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[2196],{"./libs/form/src/next/upload/vl-upload.component.ts":(e,t,s)=>{s.d(t,{F:()=>v,b:()=>c});var i=s("./node_modules/lit/index.js"),a=s("./node_modules/@domg/govflanders-style/component/index.js"),l=s("./node_modules/lit/directives/class-map.js"),o=s("./node_modules/dropzone/dist/dropzone.js"),n=s.n(o),r=s("./node_modules/@domg/govflanders-style/common/index.js"),d=s("./libs/common/utilities/src/index.ts"),p=s("./libs/form/src/next/form-control/form-control.ts");let u=(0,i.iv)`
    .vl-upload {
        margin-bottom: 0;
    }

    .dz-button {
        display: none;
    }

    .vl-upload__element__button {
        border-radius: 0.3rem;
        text-align: center;
        padding-right: 5px;
    }

    .vl-upload__element__button:focus {
        box-shadow: none;
        outline: rgba(0, 85, 204, 0.65) solid 3px;
        outline-offset: 2px;
    }
`,h={key:"customError",message:"Something went wrong when adding a file",isValid(e){let t=!1;return e.getFiles().forEach(e=>{"error"===e.status&&(t=!0)}),!t}},c={...p.E,readonly:!1,acceptedFiles:"",autoProcess:!1,disallowDuplicates:!1,errorMessageAcceptedFiles:"Dit bestandstype is niet toegestaan.",errorMessageFilesize:"Het bestand mag maximaal {{maxFilesize}} MB zijn.",errorMessageMaxFiles:"Je kan maximaal {{maxFiles}} bestand(en) uploaden.",maxFiles:1,maxSize:2,subTitle:"Sleep de bijlage naar hier om toe te voegen",mainTitle:"Bijlage toevoegen",url:""};class v extends p.N{static{this.formControlValidators=[...p.N.formControlValidators,h]}static get styles(){return[r.YN,r.Oh,a.RP,a.zm,u,a.oQ,r.PC]}static get properties(){return{type:{type:String},acceptedFiles:{type:String,attribute:"accepted-files"},autoProcess:{type:Boolean,attribute:"auto-process"},disallowDuplicates:{type:Boolean,attribute:"disallow-duplicates"},errorMessageAcceptedFiles:{type:String,attribute:"error-message-accepted-files"},errorMessageFilesize:{type:String,attribute:"error-message-filesize"},errorMessageMaxFiles:{type:String,attribute:"error-message-max-files"},maxFiles:{type:Number,attribute:"max-files"},maxSize:{type:Number,attribute:"max-size"},subTitle:{type:String,attribute:"sub-title"},mainTitle:{type:String,attribute:"main-title"},url:{type:String},readonly:{type:Boolean},value:{type:Object,state:!0},multiple:{type:Boolean,reflect:!0}}}firstUpdated(e){super.firstUpdated(e),this.initializeComponent()}updated(e){if(super.updated(e),e.has("value")&&this.setValue(this.value??""),e.has("disabled")){let e=this.getInput();this.disabled?(this.dropzoneInstance?.hiddenFileInput?.setAttribute("disabled","disabled"),this.getUploadButton()?.setAttribute("disabled","disabled"),this.dropzoneInstance?.disable()):(this.dropzoneInstance?.hiddenFileInput?.removeAttribute("disabled"),this.getUploadButton()?.removeAttribute("disabled"),this.dropzoneInstance?.enable()),e&&(e.disabled=this.disabled)}if(e.has("required")&&this.updateInputForAttribute("required"),e.has("readonly")){let e=this.getInput();if(this.updateInputForAttribute("readonly"),this.disabled||(this.readonly?e?.setAttribute("disabled",""):e?.removeAttribute("disabled")),this.dropzoneInstance){let e=this.dropzoneInstance;this.readonly?e.removeEventListeners():e.setupEventListeners()}}if(e.has("name")&&this.updateInputForAttribute("name"),e.has("id")&&(this.updateInputForAttribute("id"),this.name||this.getInput()?.setAttribute("name",this.id)),e.has("error")&&this.updateInputForAttribute("error"),e.has("isInvalid")&&this.updateInputForAttribute("isInvalid"),e.has("success")&&this.updateInputForAttribute("success"),e.has("label")){let e=this.getInput();this.label?e?.setAttribute("aria-label",this.label):e?.removeAttribute("aria-label")}e.has("autoProcess")&&this.dropzoneInstance&&(this.dropzoneInstance.options.autoProcessQueue=this.autoProcess),e.has("url")&&this.dropzoneInstance&&(this.dropzoneInstance.options.url=this.url),e.has("maxSize")&&this.dropzoneInstance&&(this.dropzoneInstance.options.maxFilesize=this.maxSize),e.has("maxFiles")&&(this.dropzoneInstance&&(this.dropzoneInstance.options.maxFiles=this.maxFiles),this.multiple=this.maxFiles>1)}disconnectedCallback(){super.disconnectedCallback(),this.removeDropzoneEvents(),this.dropzoneInstance&&(this.updateFileList(this.dropzoneInstance),this.dropzoneInstance.destroy())}render(){let e={"vl-upload":!0,"vl-upload--disabled":this.disabled,"vl-upload--error":this.isInvalid||this.error,"vl-upload--success":this.success},t={"dz-clickable":this.readonly,dropzone:!0,"vl-upload__element__label":!0};return(0,i.dy)`
            ${this.getUploadElementTemplate()} ${this.getPreviewTemplate()}
            <div class="vl-upload__files">
                <div class="vl-upload__files__container"></div>
                <div class="vl-upload__files__input__container"></div>
                <button class="vl-upload__files__close vl-link vl-link--icon">
                    <span class="vl-link__icon vl-vi vl-vi-trash" aria-hidden="true"></span>
                    Verwijder alle bestanden
                </button>
            </div>
            <div class=${(0,l.$)(e)} aria-label=${this.label}>
                <div class="vl-upload__element">
                    <div class="vl-upload__overlay">
                        <p class="vl-upload__overlay__text">
                            <span class="vl-link__icon vl-vi vl-vi-paperclip" aria-hidden="true"></span>
                        </p>
                    </div>
                    <div
                        id="dropzone-container"
                        class=${(0,l.$)(t)}
                        aria-label=${this.label}
                    ></div>
                </div>
            </div>
        `}get validationTarget(){return this.shadowRoot?.querySelector("input")}resetFormControl(){super.resetFormControl(),this.dropzoneInstance?.removeAllFiles()}focus(){this.getUploadButton()?.focus()}on(e,t){this.dropzoneInstance?.on(e,t)}off(e,t){this.dropzoneInstance?.off(e,t)}getFiles(){return this.dropzoneInstance?.getAcceptedFiles()||[]}addFile(e){this.dropzoneInstance&&(this.autoProcess&&(this.dropzoneInstance.options.autoProcessQueue=!1),this.dropzoneInstance.addFile(e),this.dropzoneInstance.emit("complete",e),this.autoProcess&&(this.dropzoneInstance.options.autoProcessQueue=!0))}upload(e){this.dropzoneInstance&&(e&&(this.dropzoneInstance.options.url=e),this.dropzoneInstance.processQueue())}getUploadElement(){return this.shadowRoot?.querySelector(".vl-upload")}getInput(){return this.shadowRoot?.querySelector("input")}getUploadButton(){return this.shadowRoot?.querySelector(".vl-upload__element__button")}getFilesCloseButton(){return this.shadowRoot?.querySelector(".vl-upload__files__close")}getUploadElementTemplate(){return(0,i.dy)`
            <template id="uploadTemplate">
                <button type="button" class="vl-upload__element__button vl-link" aria-label="upload-button">
                    <i class="vl-vi vl-vi-paperclip" aria-hidden="true"></i>
                    <span class="vl-upload__element__button__container" id="title"></span>
                    <span class="vl-upload__element__button__container" id="slotted-title">
                        <slot name="title"></slot
                    ></span>
                </button>
                <small id="sub-title"></small>
                <small id="slotted-sub-title">
                    <slot name="sub-title"></slot>
                </small>
            </template>
        `}getPreviewTemplate(){return(0,i.dy)`
            <template id="previewTemplate">
                <div class="vl-upload__file">
                    <p class="vl-upload__file__name">
                        <span class="vl-upload__file__name__icon vl-vi vl-vi-document" aria-hidden="true"></span>
                        <span data-dz-name></span>
                        <span class="vl-upload__file__size"> (<span data-dz-size></span>) </span>
                    </p>
                    <div class="dz-error-message">
                        <span data-dz-errormessage></span>
                    </div>
                    <button type="button" class="vl-upload__file__close vl-link vl-link--icon" data-dz-remove>
                        <span class="vl-vi vl-vi-cross" aria-hidden="true"></span>
                    </button>
                </div>
            </template>
        `}updateInputForAttribute(e){this[e]?this.getInput()?.setAttribute(e,"boolean"==typeof this[e]?"":this[e]):this.getInput()?.removeAttribute(e)}async updateFileList(e,t){let s=this.shadowRoot?.querySelector(".vl-upload__files");e.files.length?(s?.classList.add("vl-upload__files--has-files"),this.disallowDuplicates&&t&&this.dropzoneInstance&&await this.detectDuplicate(this.dropzoneInstance.files,t)&&(this.dropzoneInstance.removeFile(t),this.dispatchEvent(new CustomEvent("vl-input",{composed:!0,bubbles:!0,detail:{type:"removedduplicatefile",file:t,value:this.value}})))):s?.classList.remove("vl-upload__files--has-files")}initializeComponent(){this.setupDropzone(),this.setupTitles(),this.setupEventListeners(),this.dropzoneInstance?.hiddenFileInput?.classList.add("vl-upload__element__input")}setupDropzone(){let e=this.shadowRoot?.querySelector("div#dropzone-container"),t=this.shadowRoot?.querySelector("#uploadTemplate"),s=this.shadowRoot?.querySelector("#previewTemplate"),i={autoProcessQueue:this.autoProcess,maxFiles:this.maxFiles,maxFilesize:this.maxSize,acceptedFiles:this.acceptedFiles,createImageThumbnails:!1,previewsContainer:this.shadowRoot?.querySelector(".vl-upload__files__container")||void 0,hiddenInputContainer:this.shadowRoot?.querySelector(".vl-upload__files__input__container")||void 0,dictDefaultMessage:t?.innerHTML,previewTemplate:s?.innerHTML,url:this.url,dictFileTooBig:this.errorMessageFilesize,dictInvalidFileType:this.errorMessageAcceptedFiles,dictMaxFilesExceeded:this.errorMessageMaxFiles,dictResponseError:"Er liep iets fout bij het uploaden.",dictRemoveFile:"Verwijder bestand",dictCancelUpload:"Annuleer upload",dictCancelUploadConfirmation:"Ben je zeker dat je de upload wil annuleren?"};e&&(this.dropzoneInstance=new(n())(e,i))}setupTitles(){if(!(0,d.F1)(this,"sub-title").length){let e=document.createElement("span");e.textContent=this.subTitle,e.slot="sub-title",this.appendChild(e)}if(!(0,d.F1)(this,"main-title").length){let e=document.createElement("span");e.textContent=this.mainTitle,e.slot="title",this.appendChild(e)}}setupEventListeners(){this.getFilesCloseButton()?.addEventListener("click",this.handleFilesCloseButtonClick),[...(0,d.F1)(this,"sub-title"),...(0,d.F1)(this,"title")].forEach(e=>{e.addEventListener("click",this.handleTitleClick)}),this.dropzoneInstance&&(this.dropzoneInstance.on("addedfile",this.handleAddedFile),this.dropzoneInstance.on("removedfile",this.handleRemovedFile),this.dropzoneInstance.on("error",this.handleError),this.dropzoneInstance.on("dragover",this.handleDragOver),this.dropzoneInstance.on("dragleave",this.handleDragLeave),this.dropzoneInstance.on("drop",this.handleDragLeave))}removeDropzoneEvents(){this.getFilesCloseButton()?.removeEventListener("click",this.handleFilesCloseButtonClick),[...(0,d.F1)(this,"sub-title"),...(0,d.F1)(this,"title")].forEach(e=>{e.removeEventListener("click",this.handleTitleClick)}),this.dropzoneInstance&&(this.dropzoneInstance.off("addedfile",this.handleAddedFile),this.dropzoneInstance.off("removedfile",this.handleRemovedFile),this.dropzoneInstance.off("error",this.handleError),this.dropzoneInstance.off("dragover",this.handleDragOver),this.dropzoneInstance.off("dragleave",this.handleDragLeave),this.dropzoneInstance.off("drop",this.handleDragLeave))}updateValue(e){this.value=this.collectFormData(),this.dispatchEvent(new CustomEvent("vl-input",{composed:!0,bubbles:!0,detail:e})),this.dispatchEventIfValid(e)}collectFormData(){let e=this.name||this.id;return this.getFiles()?.length?this.getFiles().reduce((t,s,i)=>(i?t.append(e,s,s.name):t.set(e,s,s.name),t),new FormData):""}async areFileHashesEqual(e,t){async function s(e){return Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256",e))).map(e=>e.toString(16).padStart(2,"0")).join("")}async function i(e){let t=await e.arrayBuffer();return await s(t)}return await i(e)===await i(t)}async detectDuplicate(e,t){if(e){let s=e.length,i=e.slice();for(let e=0;e<s-1;e++)if(i[e]&&t){let s=await this.areFileHashesEqual(i[e],t);if(i[e].name===t.name&&i[e].size===t.size||s)return!0}}return!1}constructor(...e){super(...e),this.readonly=c.readonly,this.acceptedFiles=c.acceptedFiles,this.autoProcess=c.autoProcess,this.disallowDuplicates=c.disallowDuplicates,this.errorMessageAcceptedFiles=c.errorMessageAcceptedFiles,this.errorMessageFilesize=c.errorMessageFilesize,this.errorMessageMaxFiles=c.errorMessageMaxFiles,this.maxFiles=c.maxFiles,this.maxSize=c.maxSize,this.subTitle=c.subTitle,this.mainTitle=c.mainTitle,this.url=c.url,this.value="",this.multiple=!1,this.handleAddedFile=async e=>{await this.updateFileList(this.dropzoneInstance,e),this.updateValue({type:"addedfile",file:e,value:this.value})},this.handleRemovedFile=async e=>{await this.updateFileList(this.dropzoneInstance),this.updateValue({type:"removedfile",file:e,value:this.value})},this.handleError=(e,t)=>{this.dispatchEvent(new CustomEvent("vl-error",{composed:!0,bubbles:!0,detail:{type:"error",file:e,value:this.value,errorMessage:t}}))},this.handleFilesCloseButtonClick=e=>{this.dropzoneInstance?.removeAllFiles(),this.dropzoneInstance&&this.updateFileList(this.dropzoneInstance),e.preventDefault()},this.handleTitleClick=()=>{this.getInput()?.click()},this.handleDragOver=()=>{this.getUploadElement()?.classList.add("vl-upload--dragging")},this.handleDragLeave=()=>{this.getUploadElement()?.classList.remove("vl-upload--dragging")}}}v=function(e,t,s,i){var a,l=arguments.length,o=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(o=(l<3?a(o):l>3?a(t,s,o):a(t,s))||o);return l>3&&o&&Object.defineProperty(t,s,o),o}([(0,d.a6)("vl-upload-next")],v)}}]);