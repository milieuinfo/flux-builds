import{i as c,r as h,t as p,B as m,v as y,aS as b,x as o,aT as v}from"./iframe-BAEsER5t.js";import{V as u}from"./vl-checkbox.component-37MCbxxg.js";import"./vl-datepicker.component-UC8l26UU.js";import"./vl-fieldset.component-BtKmawMQ.js";import"./vl-input-field-masked.component-B-8jjNyv.js";import"./vl-radio.component-DA7oHNWn.js";import"./vl-radio-group.component-iutw-yHu.js";import"./vl-select.component-C03IO6jd.js";import"./vl-select-rich.component-C7ZJIU_b.js";import"./vl-textarea.component-Ccg7Zw3E.js";import"./vl-textarea-rich.component-DjoW2JKC.js";import"./vl-upload.component-DeTYF_Sd.js";const d=c`
    :host {
        display: block;
    }

    :host label {
        display: block;
    }

    :host [layer] {
        display: block;
    }
`;var L=Object.getOwnPropertyDescriptor,f=(e,s,t,a)=>{for(var r=a>1?void 0:a?L(s,t):s,i=e.length-1,l;i>=0;i--)(l=e[i])&&(r=l(r)||r);return r};let n=class extends m{constructor(){super(...arguments),this.componentTitle="Kaartlagen",this.layers=null,this.vlMapLayers=[],this.mapElement=null,this.layerObserver=null,this.computeCheckboxAttributes=()=>{const e=this.mapElement?.resolution;this.vlMapLayers.forEach(s=>{const t=this.shadowRoot?.querySelector(`vl-checkbox[layer="${s.title}"]`);s.isVisibleAtResolution(e)?t?.removeAttribute("disabled"):t?.setAttribute("disabled",""),s.visible?t?.setAttribute("checked",""):t?.removeAttribute("checked")})}}static get styles(){return[y,d,b]}static get properties(){return{componentTitle:{type:String,attribute:"title",reflect:!0},layers:{type:Array,attribute:"layers"},vlMapLayers:{attribute:!1}}}async connectedCallback(){super.connectedCallback(),this.mapElement=this.closest("vl-map"),await this.layersReady(),this.vlMapLayers=this.getVlMapLayers(),this.mapElement?.on("moveend",this.computeCheckboxAttributes),this.layers||this.observeMapLayers()}disconnectedCallback(){super.disconnectedCallback(),this.layerObserver?.disconnect(),this.mapElement?.un("moveend",this.computeCheckboxAttributes)}async willUpdate(e){e.has("layers")&&(await this.layersReady(),this.vlMapLayers=this.getVlMapLayers()),e.has("vlMapLayers")&&this.vlMapLayers&&this.vlMapLayers?.forEach(({layer:s})=>{s.on("change:visible",()=>{this.computeCheckboxAttributes()})})}updated(){this.computeCheckboxAttributes()}render(){return o`
            <div>
                <label class="vl-form__label">${this.componentTitle}</label>
                ${this.vlMapLayers.map(e=>o`
                        <vl-checkbox
                            label=${e.title}
                            layer=${e.title}
                            checked=${e.visible}
                            @vl-input=${()=>e.visible=!e.visible}
                            >${e.title}
                        </vl-checkbox>
                    `)}
            </div>
        `}async layersReady(){return this.mapElement?Promise.all(this.mapElement?.nonBaseLayers.map(e=>v(()=>e.ready))):new Promise((e,s)=>s())}getVlMapLayers(){return!this.layers||!Array.isArray(this.layers)?this.mapElement?.nonBaseLayers||[]:this.mapElement?.nonBaseLayers.filter(e=>this.layers?.includes(e.name))||[]}observeMapLayers(){this.layerObserver=new MutationObserver(e=>{e.forEach(s=>{s.addedNodes.forEach(t=>{t instanceof HTMLElement&&t.hasAttribute("is-layer")&&(this.vlMapLayers=[...this.vlMapLayers,t])}),s.removedNodes.forEach(t=>{t instanceof HTMLElement&&t.hasAttribute("is-layer")&&(this.vlMapLayers=this.vlMapLayers.filter(a=>t!==a))})})}),this.layerObserver.observe(this.mapElement,{subtree:!0,childList:!0})}};h([u]);n=f([p("vl-map-layer-switcher")],n);
