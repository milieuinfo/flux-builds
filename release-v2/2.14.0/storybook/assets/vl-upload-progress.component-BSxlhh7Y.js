import{i as u,r as d,bu as g,d as b,bv as v,R as h,B as m,a$ as f,bw as y,F as $,bx as r,x as s,t as _}from"./iframe-D9dm7PbY.js";const e={label:"",filename:"Document.pdf",filesize:"123 MB",progress:0,indeterminate:!1,cancellable:!1,retryable:!1,error:!1,success:!1,message:"",hideProgress:!1},x=u`
    :host {
        display: block;
        box-sizing: border-box;
    }

    .vl-upload-progress {
        display: block;

        &.vl-upload-progress--error {
            vl-icon::part(icon) {
                color: var(--vl-color--error);
            }
        }

        &.vl-upload-progress--success {
            vl-icon::part(icon) {
                color: var(--vl-color--success);
            }
        }
    }

    .vl-upload-progress__filename {
        word-break: break-word;
    }

    .vl-upload-progress__filesize {
        color: var(--vl-color--text-subtle);
        white-space: nowrap;
    }

    .vl-upload-progress__actions {
        height: 3.5rem;
    }
`;var B=Object.getOwnPropertyDescriptor,w=(t,o,p,i)=>{for(var l=i>1?void 0:i?B(o,p):o,a=t.length-1,n;a>=0;a--)(n=t[a])&&(l=n(l)||l);return l};d([g,b,v,h]);let c=class extends m{constructor(){super(...arguments),this.progress=e.progress,this.label=e.label,this.fileName=e.filename,this.fileSize=e.filesize,this.indeterminate=e.indeterminate,this.retryable=e.retryable,this.cancellable=e.cancellable,this.error=e.error,this.success=e.success,this.message=e.message,this.hideProgress=e.hideProgress}static get styles(){return[f,x,y]}static get properties(){return{label:{type:String,attribute:"label"},progress:{type:Number,attribute:"progress",reflect:!0},fileName:{type:String,attribute:"filename"},fileSize:{type:String,attribute:"filesize"},indeterminate:{type:Boolean,attribute:"indeterminate",reflect:!0},retryable:{type:Boolean,attribute:"retryable",reflect:!0},cancellable:{type:Boolean,attribute:"cancellable",reflect:!0},error:{type:Boolean,attribute:"error",reflect:!0},success:{type:Boolean,attribute:"success",reflect:!0},message:{type:String,attribute:"message"},hideProgress:{type:Boolean,attribute:"hide-progress",reflect:!0}}}handleRetry(){this.dispatchEvent(new CustomEvent("vl-upload-progress-retry",{bubbles:!0,detail:{filename:this.fileName,target:this},composed:!0}))}handleCancel(){this.dispatchEvent(new CustomEvent("vl-upload-progress-cancel",{bubbles:!0,detail:{filename:this.fileName,target:this},composed:!0}))}render(){const t={"vl-upload-progress":!0,"vl-upload-progress--error":this.error,"vl-upload-progress--success":this.success};return s`
            <div class=${$(t)}>
                <div class="vl-group vl-group--space-between">
                    <div class="vl-group vl-group--align-center">
                        <span id="label" class="vl-text vl-text--bold ${this.label?"":"vl-visually-hidden"}">
                            ${this.label||"Bestand"}
                        </span>
                        <vl-icon
                            icon=${this.error?"alert-triangle":this.success?"check-circle":"file"}
                            light
                        ></vl-icon>
                        <span class="vl-upload-progress__filename">${this.fileName}</span>
                        ${r(!!this.fileSize,()=>s`<span class="vl-upload-progress__filesize">(${this.fileSize})</span>`)}
                    </div>
                    <div class="vl-upload-progress__actions vl-group">
                        ${r(this.retryable===!0,()=>s`<vl-button
                                    id="retry-button"
                                    ghost
                                    icon="text-redo"
                                    label="Opnieuw proberen"
                                    @click=${this.handleRetry}
                                ></vl-button>`)}
                        ${r(this.cancellable===!0,()=>s`<vl-button
                                    id="cancel-button"
                                    ghost
                                    icon="close"
                                    label="Annuleren"
                                    @click=${this.handleCancel}
                                ></vl-button>`)}
                    </div>
                </div>
                ${r(!!this.message,()=>s` <vl-text id="message" ?error=${this.error} ?success=${this.success} bold small
                            >${this.message}</vl-text
                        >`)}
                ${r(!this.hideProgress,()=>s`<vl-progress-bar
                        class="vl-padding vl-padding--small"
                        value=${this.progress}
                        ?indeterminate=${this.indeterminate}
                        ?error=${this.error}
                        ?success=${this.success}
                        label="Upload voortgang"
                    ></vl-progress-bar>`)}
            </div>
        `}};c=w([_("vl-upload-progress")],c);export{c as V,e as u};
