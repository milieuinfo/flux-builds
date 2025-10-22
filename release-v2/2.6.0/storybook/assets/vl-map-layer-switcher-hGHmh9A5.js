import{z as p,r as c,A as h,B as m,E as y,aR as b,x as o,aS as u}from"./iframe-Ds54rb_7.js";import{V as v}from"./vl-checkbox.component-B_Wb-zxb.js";import"./vl-datepicker.component-BU4fAy14.js";import"./vl-input-field-masked.component-DMyex7F8.js";import"./vl-radio.component-DE3tpZPo.js";import"./vl-radio-group.component-jPwXzViL.js";import"./vl-select.component-DYcw1fiu.js";import"./vl-select-rich.component-yLANTGDJ.js";import"./vl-textarea.component-fzCTRgKQ.js";import"./vl-textarea-rich.component-D_oG-Kmq.js";import"./vl-upload.component-wEbI9gTL.js";const d=p`
    :host {
        display: block;
    }

    :host label {
        display: block;
    }

    :host [layer] {
        display: block;
    }
`;var L=Object.getOwnPropertyDescriptor,f=(e,s,t,a)=>{for(var r=a>1?void 0:a?L(s,t):s,i=e.length-1,l;i>=0;i--)(l=e[i])&&(r=l(r)||r);return r};let n=class extends m{constructor(){super(...arguments),this.componentTitle="Kaartlagen",this.layers=null,this.vlMapLayers=[],this.mapElement=null,this.layerObserver=null,this.computeDisabledAttributes=()=>{const e=this.mapElement?.resolution;this.vlMapLayers.forEach(s=>{const t=this.shadowRoot?.querySelector(`vl-checkbox[data-layer="${s.title}"]`);s.isVisibleAtResolution(e)?t?.removeAttribute("disabled"):t?.setAttribute("disabled","")})}}static get styles(){return[y,d,b]}static get properties(){return{componentTitle:{type:String,attribute:"title",reflect:!0},layers:{type:Array,attribute:"layers"},vlMapLayers:{attribute:!1}}}async connectedCallback(){super.connectedCallback(),this.mapElement=this.closest("vl-map"),await this.layersReady(),this.vlMapLayers=this.getVlMapLayers(),this.mapElement?.on("moveend",this.computeDisabledAttributes),this.layers||this.observeMapLayers()}disconnectedCallback(){super.disconnectedCallback(),this.layerObserver?.disconnect(),this.mapElement?.un("moveend",this.computeDisabledAttributes)}async willUpdate(e){e.has("layers")&&(await this.layersReady(),this.vlMapLayers=this.getVlMapLayers())}updated(){this.computeDisabledAttributes()}render(){return o`
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
        `}async layersReady(){return this.mapElement?Promise.all(this.mapElement?.nonBaseLayers.map(e=>u(()=>e.ready))):new Promise((e,s)=>s())}getVlMapLayers(){return!this.layers||!Array.isArray(this.layers)?this.mapElement?.nonBaseLayers||[]:this.mapElement?.nonBaseLayers.filter(e=>this.layers?.includes(e.name))||[]}observeMapLayers(){this.layerObserver=new MutationObserver(e=>{e.forEach(s=>{s.addedNodes.forEach(t=>{t instanceof HTMLElement&&t.hasAttribute("is-layer")&&(this.vlMapLayers=[...this.vlMapLayers,t])}),s.removedNodes.forEach(t=>{t instanceof HTMLElement&&t.hasAttribute("is-layer")&&(this.vlMapLayers=this.vlMapLayers.filter(a=>t!==a))})})}),this.layerObserver.observe(this.mapElement,{subtree:!0,childList:!0})}};c([v]);n=f([h("vl-map-layer-switcher")],n);
