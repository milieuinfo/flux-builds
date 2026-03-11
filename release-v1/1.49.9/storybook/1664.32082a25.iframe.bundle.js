"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[1664],{"../../libs/form/src/next/checkbox/index.ts":(e,t,s)=>{s.d(t,{v:()=>r.v});var r=s("../../libs/form/src/next/checkbox/vl-checkbox.component.ts")},"../../libs/form/src/next/checkbox/vl-checkbox.component.ts":(e,t,s)=>{s.d(t,{v:()=>d});var r=s("../../libs/common/utilities/src/index.ts"),o=s("../../libs/elements/src/index.ts"),a=s("../../node_modules/@domg/govflanders-style/common/index.js"),l=s("../../node_modules/@domg/govflanders-style/component/index.js"),i=s("../../node_modules/lit/index.js"),c=s("../../node_modules/lit/directives/class-map.js"),n=s("../../libs/form/src/next/form-control/form-control.ts");let h=(0,i.AH)`
    :host {
        --vl-checkbox--switch__error-color: #d2373c;
        --vl-checkbox--switch__error-background-color: #fbebec;
        --vl-checkbox--switch__success-color: #009e47;
        --vl-checkbox--switch__success-background-color: #e6f5ed;
    }

    .vl-checkbox--error .vl-checkbox--switch + .vl-checkbox__label .vl-checkbox--switch__label::after {
        border-color: var(--vl-checkbox--switch__error-color) !important;
    }

    .vl-checkbox--error .vl-checkbox--switch:not(:checked) + .vl-checkbox__label .vl-checkbox--switch__label::after {
        background: #fff;
    }
    .vl-checkbox--error .vl-checkbox--switch + .vl-checkbox__label .vl-checkbox--switch__label {
        background: #fff;
        color: var(--vl-checkbox--switch__error-color);
        border-color: var(--vl-checkbox--switch__error-color);
    }

    .vl-checkbox--error .vl-checkbox--switch:checked + .vl-checkbox__label .vl-checkbox--switch__label {
        background: var(--vl-checkbox--switch__error-background-color);
        border-color: var(--vl-checkbox--switch__error-color);
    }

    .vl-checkbox--success .vl-checkbox--switch + .vl-checkbox__label .vl-checkbox--switch__label::after {
        border-color: var(--vl-checkbox--switch__success-color) !important;
    }

    .vl-checkbox--success .vl-checkbox--switch:not(:checked) + .vl-checkbox__label .vl-checkbox--switch__label::after {
        background: #fff;
    }
    .vl-checkbox--success .vl-checkbox--switch + .vl-checkbox__label .vl-checkbox--switch__label {
        background: #fff;
        color: var(--vl-checkbox--switch__success-color);
        border-color: var(--vl-checkbox--switch__success-color);
    }

    .vl-checkbox--success .vl-checkbox--switch:checked + .vl-checkbox__label .vl-checkbox--switch__label {
        background: var(--vl-checkbox--switch__success-background-color);
        border-color: var(--vl-checkbox--switch__success-color);
    }
`;var m=s("../../libs/form/src/next/checkbox/vl-checkbox.defaults.ts");class d extends n.M{static get styles(){return[a.h8,a.BI,o.hF,l.Bc,h]}static get properties(){return{block:{type:Boolean},value:{type:String},checked:{type:Boolean,reflect:!0},isSwitch:{type:Boolean,attribute:"switch"}}}connectedCallback(){super.connectedCallback(),this.initialValue||(this.initialValue=this.value,this.initialCheckedValue=this.checked)}updated(e){if(super.updated(e),e.has("checked")||e.has("value")){let e=this.checked?this.value||"on":null,t={checked:this.checked,currentTarget:this};this.checked&&(t.value=e),this.setValue(e),this.dispatchEvent(new CustomEvent("vl-change",{composed:!0,bubbles:!0,detail:t})),this.dispatchInput&&(this.dispatchEvent(new CustomEvent("vl-input",{bubbles:!0,composed:!0,detail:t})),this.dispatchInput=!1),this.dispatchEventIfValid(t)}}render(){return(0,i.qy)` ${this.isSwitch?this.renderCheckboxSwitch():this.renderCheckboxDefault()} `}renderCheckboxDefault(){let e={"vl-checkbox":!0,"vl-checkbox--disabled":this.disabled,"vl-checkbox--error":this.isInvalid||this.error,"vl-checkbox--success":this.success,"vl-checkbox--block":this.block};return(0,i.qy)`
            <label class=${(0,c.H)(e)}>
                <input
                    id=${this.id||i.s6}
                    name=${this.name||i.s6}
                    class="vl-checkbox__toggle"
                    type="checkbox"
                    aria-invalid=${this.isInvalid||i.s6}
                    ?required=${this.required}
                    ?disabled=${this.disabled}
                    ?error=${this.error}
                    .value=${this.value}
                    .checked=${this.checked}
                    @click=${this.toggle}
                />
                <div class="vl-checkbox__label">
                    <i class="vl-checkbox__box" aria-hidden="true"></i>
                    <span>
                        <slot></slot>
                    </span>
                </div>
            </label>
        `}renderCheckboxSwitch(){let e={"vl-checkbox--switch__wrapper":!0,"vl-checkbox--disabled":this.disabled,"vl-checkbox--error":this.isInvalid||this.error,"vl-checkbox--success":this.success,"vl-checkbox--block":this.block};return(0,i.qy)`
            <div class=${(0,c.H)(e)}>
                <input
                    id=${this.id||i.s6}
                    name=${this.name||i.s6}
                    type="checkbox"
                    class="vl-checkbox--switch"
                    role="switch"
                    ?required=${this.required}
                    ?disabled=${this.disabled}
                    ?error=${this.error}
                    .value=${this.value}
                    .checked=${this.checked}
                    @click=${this.toggle}
                />
                <label for=${this.id} class="vl-checkbox__label">
                    <span class="vl-checkbox--switch__label">
                        <span aria-hidden="true"></span>
                    </span>
                    <span>
                        <slot></slot>
                    </span>
                </label>
            </div>
        `}get validationTarget(){return this.shadowRoot?.querySelector("input")}resetFormControl(){super.resetFormControl(),this.checked=this.initialCheckedValue,this.value=this.initialValue}toggle(){this.checked=!this.checked,this.dispatchInput=!0}constructor(...e){super(...e),this.block=m.o.block,this.value=m.o.value,this.checked=m.o.checked,this.isSwitch=m.o.isSwitch,this.initialValue=null,this.initialCheckedValue=!1,this.dispatchInput=!1}}d=function(e,t,s,r){var o,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(l=(a<3?o(l):a>3?o(t,s,l):o(t,s))||l);return a>3&&l&&Object.defineProperty(t,s,l),l}([(0,r.M1)("vl-checkbox-next")],d)},"../../libs/form/src/next/checkbox/vl-checkbox.defaults.ts":(e,t,s)=>{s.d(t,{o:()=>r});let r={...s("../../libs/form/src/next/form-control/form-control.defaults.ts").i,block:!1,value:null,checked:!1,isSwitch:!1}},"../../libs/form/src/next/select-rich/index.ts":(e,t,s)=>{s.d(t,{Al:()=>r.A});var r=s("../../libs/form/src/next/select-rich/vl-select-rich.component.ts");s("../../libs/form/src/next/select-rich/vl-select-rich.model.ts"),s("../../libs/form/src/next/select-rich/vl-select-rich.search-matchers.ts")},"../../libs/map/src/actions/draw/draw-line-action.ts":(e,t,s)=>{s.d(t,{p:()=>o});var r=s("../../libs/map/src/actions/draw/draw-action.ts");class o extends r.r{constructor(e,t,s={}){super(e,"LineString",t,s)}}},"../../libs/map/src/actions/measure/measure-action.ts":(e,t,s)=>{s.d(t,{V:()=>l});var r=s("../../node_modules/ol/Overlay.js"),o=s("../../node_modules/ol/Observable.js"),a=s("../../libs/map/src/actions/draw/draw-action.ts");class l extends a.r{constructor(e,t){super(e,"LineString",()=>{(0,o.e)(this.measurePointermoveHandler)},{...t,maxPoints:2,geometryName:"measurement"}),this.featureCounter=0,this.measurementTooltips=[]}activate(){this.drawStartHandler=this.drawInteraction.on("drawstart",e=>{this._handleDrawStart(e)}),this.drawEndHandler=this.drawInteraction.on("drawend",()=>{this._setMeasurementTooltipsClosable(!0)}),this.removeFeatureHandler=this.layer.getSource().on("removefeature",e=>{this._handleRemoveFeature(e)}),super.activate()}_setMeasurementTooltipsClosable(e){this.measurementTooltips.forEach(t=>{let s="data-vl-closable",r=t.getElement();t&&r&&(e?r.setAttribute(s,e):r.removeAttribute(s))})}_setMeasurementTooltipsVisible(e){this.measurementTooltips.forEach(t=>{let s="hidden",r=t.getElement();t&&r&&(e?r.removeAttribute(s):r.setAttribute(s,!0))})}_showMeasurementTooltip(e,t,s){let r=e.getGeometry().getLength().toFixed(2);s.textContent=`${r} m`,t.setElement(s),t.setPosition(e.getGeometry().getLastCoordinate())}_handleDrawStart({feature:e}){let t=this.featureCounter;this.featureCounter+=1,this._setMeasurementTooltipsClosable(!1),e.setId(t);let s=document.createElement("vl-pill");s.isInMap=!0,s.addEventListener("close",t=>{this._handleRemoveMeasurement(t,e)},{once:!0});let o=new r.A({offset:[0,40],positioning:"bottom-center",stopEvent:!0,insertFirst:!0});o.set("featureId",t),this.map.addOverlay(o),this.measurementTooltips=[...this.measurementTooltips,o],this.measurePointermoveHandler=this.map.on("pointermove",()=>{this._showMeasurementTooltip(e,o,s)})}_removeMeasureFeature(e){let t=this.layer.getSource();e&&(null==e.getId()||t.getFeatureById(e.getId())===e)&&(t.removeFeature(e),this.map.render())}_removeMeasurementTooltip(e){let t=this.getTooltipFor(e);this.map.removeOverlay(t),this.measurementTooltips=this.measurementTooltips.filter(t=>this._getFeatureIdFor(t)!==e)}_handleRemoveMeasurement(e,t){e.stopPropagation(),this._removeMeasurementTooltip(t.getId()),this._removeMeasureFeature(t)}_handleRemoveFeature(e){this._removeMeasurementTooltip(e.feature.getId())}_cleanUp(e){(0,o.e)(this.measurePointermoveHandler),e&&this.measurementTooltips.forEach(e=>{let t=this._getFeatureIdFor(e);null==this.layer.getSource().getFeatureById(t)&&this._removeMeasurementTooltip(t)})}getTooltipFor(e){return this.measurementTooltips.find(t=>this._getFeatureIdFor(t)===e)}_getFeatureIdFor(e){return e.get("featureId")}handleLayerVisibilityChange(){this._setMeasurementTooltipsVisible(this.layer.getVisible())}deactivate(){this._setMeasurementTooltipsClosable(!0),this._cleanUp(!0),(0,o.e)(this.drawStartHandler),(0,o.e)(this.drawEndHandler),(0,o.e)(this.removeFeatureHandler),super.deactivate()}stop(){super.stop(),this._setMeasurementTooltipsClosable(!0),this._cleanUp(!0)}}},"../../libs/map/src/actions/select/select-actions.ts":(e,t,s)=>{s.d(t,{E:()=>o});var r=s("../../libs/map/src/actions/select/select-action.ts");class o extends r.D{constructor(e,t,s){super(e,t,s),this.layers=e,this.getLayer=()=>this.getLayerByFeature(this.layers,this.selectedFeature)||this.layers[0]}get layer(){return this.getLayer()}set layer(e){this._layer=e}getLayerByFeature(e,t){return e.find(e=>{let s=e?.getSource()?.getFeatures()||[],r=t?.get("features")?.[0];return -1!==s.indexOf(t)||s.some(e=>e.get("features")?.some(e=>e?.getId()===r?.getId()))})}}},"../../libs/map/src/components/action/click-action/vl-map-click-action.ts":(e,t,s)=>{var r=s("../../node_modules/ol/Overlay.js"),o=s("../../node_modules/lit/decorators.js"),a=s("../../libs/common/utilities/src/index.ts"),l=s("../../node_modules/lit/index.js");class i extends a.jW{static{this.styles=(0,l.AH)`
        :host {
            /* Set the marker size here */
            width: 2rem;
            height: 2rem;
            border-radius: 2rem;
            /* Set the marker color here */
            background: #0039aaff;

            display: inline-block;
            border-bottom-right-radius: 0;
            position: relative;
            transform: rotate(45deg);

            /* optional fanciness */
            border: 1px solid #0039aaff;
        }

        :host::before {
            content: '';
            background: white;
            width: 50%;
            height: 50%;
            border-radius: 100%;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);

            /* optional fanciness */
            box-shadow: 0.1rem 0.1rem 0.2rem 0.1rem rgba(0, 0, 0, 0.1);
        }

        /* shadow (optional if you don't need a shadow) */

        :host::after {
            content: '';
            background: rgba(128, 128, 128, 0.2);
            width: 75%;
            height: 75%;
            border-radius: 100%;
            position: absolute;
            top: 100%;
            left: 100%;
            transform: translate(-50%, -50%) rotate(45deg) scaleX(0.5);
        }
    `}}i=function(e,t,s,r){var o,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(l=(a<3?o(l):a>3?o(t,s,l):o(t,s))||l);return a>3&&l&&Object.defineProperty(t,s,l),l}([(0,o.EM)("vl-map-click-action-pindrop")],i);let c="vl-map-clicked";class n extends Event{static{this.eventType=c}constructor(e,t,s){super(c,{bubbles:!0}),this.coordinate=e,this.resolution=t,this.projection=s}}class h extends a.jW{constructor(){super(),this.handleClick=e=>{if(!this.mapRef?.map)return;let t=this.mapRef.map.getOverlays().getArray().includes(this.overlay);this.overlay.setPosition(e.coordinate),t||this.mapRef.map.addOverlay(this.overlay),this.dispatchEvent(new n(e.coordinate,this.mapRef.map.getView().getResolution(),this.mapRef.map.getView().getProjection()))},this.overlay=new r.A({element:new i,positioning:"bottom-center",autoPan:{animation:{duration:250}}}),this.mapRef=null}connectedCallback(){super.connectedCallback(),this.mapRef=this.closest("vl-map"),this.mapRef?.map&&this.mapRef.map.on("singleclick",this.handleClick)}disconnectedCallback(){super.disconnectedCallback(),this.mapRef?.map&&(this.mapRef.map.removeOverlay(this.overlay),this.mapRef.map.un("singleclick",this.handleClick)),this.mapRef=null}}h=function(e,t,s,r){var o,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(l=(a<3?o(l):a>3?o(t,s,l):o(t,s))||l);return a>3&&l&&Object.defineProperty(t,s,l),l}([(0,o.EM)("vl-map-click-action")],h)},"../../libs/map/src/components/action/draw-action/draw-line-action/vl-map-draw-line-action.ts":(e,t,s)=>{var r=s("../../libs/common/utilities/src/index.ts"),o=s("../../libs/map/src/actions/draw/draw-line-action.ts"),a=s("../../libs/map/src/components/action/draw-action/vl-map-draw-action.ts");class l extends a.H{_createAction(e){return new o.p(e,this._callback,this.__drawOptions)}}l=function(e,t,s,r){var o,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(l=(a<3?o(l):a>3?o(t,s,l):o(t,s))||l);return a>3&&l&&Object.defineProperty(t,s,l),l}([(0,r.M1)("vl-map-draw-line-action")],l)},"../../libs/map/src/components/action/draw-action/draw-point-action/vl-map-draw-point-action.ts":(e,t,s)=>{var r=s("../../libs/common/utilities/src/index.ts"),o=s("../../libs/map/src/actions/draw/draw-action.ts"),a=s("../../libs/map/src/components/action/draw-action/vl-map-draw-action.ts");class l extends a.H{_createAction(e){return new o.r(e,"Point",this._callback,this.__drawOptions)}}l=function(e,t,s,r){var o,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(l=(a<3?o(l):a>3?o(t,s,l):o(t,s))||l);return a>3&&l&&Object.defineProperty(t,s,l),l}([(0,r.M1)("vl-map-draw-point-action")],l)},"../../libs/map/src/components/action/draw-action/measure-action/vl-map-measure-action.ts":(e,t,s)=>{var r=s("../../libs/common/utilities/src/index.ts"),o=s("../../libs/map/src/actions/measure/measure-action.ts"),a=s("../../libs/map/src/vl-map.model.ts"),l=s("../../libs/map/src/components/action/draw-action/vl-map-draw-action.ts");class i extends l.H{constructor(){super(),this.identifier=a.cS.MEASURE}_createAction(e){return new o.V(e,this.__drawOptions)}}i=function(e,t,s,r){var o,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(l=(a<3?o(l):a>3?o(t,s,l):o(t,s))||l);return a>3&&l&&Object.defineProperty(t,s,l),l}([(0,r.M1)("vl-map-measure-action")],i)},"../../libs/map/src/components/action/layer-action/select-action/select-actions/vl-map-select-actions.ts":(e,t,s)=>{s.d(t,{K:()=>i});var r=s("../../libs/common/utilities/src/index.ts"),o=s("../../libs/map/src/actions/select/select-actions.ts"),a=s("../../libs/map/src/components/layer-style/vl-map-layer-style.ts"),l=s("../../libs/map/src/components/action/layer-action/select-action/vl-map-select-action.ts");class i extends l.J{set layers(e){this.layerNames=e}get style(){return this._style}set style(e){e instanceof a.t?this._style=e.style:this._style=e,this._processAction(this.olLayers)}connectedCallback(){super.connectedCallback();let e=this.layerNames?.map(e=>this._mapElement.querySelector(`[data-vl-is-layer][data-vl-name="${e}"]`)?._layer);this.olLayers=e,this._processAction(this.olLayers)}_createAction(e){let t={style:this.style,cluster:void 0!==this._cluster,filter:this.appliesTo.bind(this)};return new o.E(e,this._callback,t)}}i=function(e,t,s,r){var o,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(l=(a<3?o(l):a>3?o(t,s,l):o(t,s))||l);return a>3&&l&&Object.defineProperty(t,s,l),l}([(0,r.M1)("vl-map-select-actions")],i)},"../../libs/map/src/components/action/layer-action/select-action/vl-map-select-action.ts":(e,t,s)=>{s.d(t,{J:()=>i});var r=s("../../libs/common/utilities/src/index.ts"),o=s("../../libs/map/src/actions/select/select-action.ts"),a=s("../../libs/map/src/components/layer-style/vl-map-layer-style.ts"),l=s("../../libs/map/src/components/action/layer-action/vl-map-layer-action.ts");class i extends l.c{get style(){return this._style}set style(e){e instanceof a.t?this._style=e.style:this._style=e,this._processAction()}get _cluster(){return this.getAttribute("cluster")}mark(e,t){this._action&&e&&this._action.markFeatureWithId(e,t||this.layer)}removeMarks(){this._action&&this._action.demarkAllFeatures()}select(e){this.action&&e&&this._action.selectFeature(e)}onSelect(e){this.__callback=e}reset(){this.action&&this._action.clearFeatures()}appliesTo(e,t){return!0}_createAction(e){let t={style:this.style,cluster:void 0!==this._cluster,filter:this.appliesTo.bind(this)};return new o.D(e,this._callback,t)}}i=function(e,t,s,r){var o,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(l=(a<3?o(l):a>3?o(t,s,l):o(t,s))||l);return a>3&&l&&Object.defineProperty(t,s,l),l}([(0,r.M1)("vl-map-select-action")],i)},"../../libs/map/src/components/baselayer/vl-map-base-layer-grb-ortho/vl-map-base-layer-grb-ortho.ts":(e,t,s)=>{var r=s("../../libs/common/utilities/src/index.ts"),o=s("../../libs/map/src/components/baselayer/vl-map-base-layer.ts");class a extends o.j{constructor(){super(),this.url="https://geo.api.vlaanderen.be/OMWRGBMRVL/wmts",this.layer="omwrgbmrvl",this.title="GRB ortho laag"}}a=function(e,t,s,r){var o,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(l=(a<3?o(l):a>3?o(t,s,l):o(t,s))||l);return a>3&&l&&Object.defineProperty(t,s,l),l}([(0,r.M1)("vl-map-baselayer-grb-ortho")],a)},"../../libs/map/src/components/baselayer/vl-map-base-layer-grb/vl-map-base-layer-grb.ts":(e,t,s)=>{var r=s("../../libs/common/utilities/src/index.ts"),o=s("../../libs/map/src/components/baselayer/vl-map-base-layer.ts");class a extends o.j{constructor(){super(),this.url="https://geo.api.vlaanderen.be/GRB/wmts",this.layer="grb_bsk",this.title="GRB basis laag"}}a=function(e,t,s,r){var o,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(l=(a<3?o(l):a>3?o(t,s,l):o(t,s))||l);return a>3&&l&&Object.defineProperty(t,s,l),l}([(0,r.M1)("vl-map-baselayer-grb")],a)},"../../libs/map/src/components/controls/measure-control/vl-map-measure-control.ts":(e,t,s)=>{var r=s("../../libs/common/utilities/src/index.ts"),o=s("../../libs/components/src/next/button/index.ts"),a=s("../../node_modules/ol/Observable.js"),l=s("../../libs/map/src/vl-map.model.ts"),i=s("../../libs/map/src/components/controls/vl-map-control.mixin.ts");class c extends(0,i.i)(r.jW){static{(0,r.gy)([o.Y])}constructor(){super(),this.controlElement=null,this.controlElement=document.createElement("vl-button-next"),this.controlElement.setAttribute("tertiary",""),this.controlElement.setAttribute("toggle",""),this.controlElement.innerText="Meten",this.identifier=l.cS.MEASURE,this.type=l.$c.ACTION}connectedCallback(){super.connectedCallback(),this.clickListener=this.controlElement.addEventListener("click",()=>this.handleMeasureControlClick())}getAction(){return this.map.getActionWithIdentifier(this.identifier)}handleMeasureControlClick(){let e=this.getAction();e&&(this.controlElement.on?(e.element.activate(),this.controlElement.removeAttribute("tertiary")):(e.element.deactivate(),this.controlElement.setAttribute("tertiary","")))}setActive(e){e?(this.controlElement.on=!0,this.controlElement.removeAttribute("tertiary")):(this.controlElement.on=!1,this.controlElement.setAttribute("tertiary",""))}setDisabled(e){this.controlElement.disabled=e}disconnectedCallback(){super.disconnectedCallback(),(0,a.e)(this.clickListener)}}c=function(e,t,s,r){var o,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(l=(a<3?o(l):a>3?o(t,s,l):o(t,s))||l);return a>3&&l&&Object.defineProperty(t,s,l),l}([(0,r.M1)("vl-map-measure-control")],c)},"../../libs/map/src/components/current-location/vl-map-current-location.defaults.ts":(e,t,s)=>{s.d(t,{K:()=>o,a:()=>r});let r=10,o="Huidige locatie"},"../../libs/map/src/components/current-location/vl-map-current-location.ts":(e,t,s)=>{var r=s("../../libs/common/utilities/src/index.ts"),o=s("../../libs/common/utilities/src/css/index.ts"),a=s("../../node_modules/lit/index.js"),l=s("../../node_modules/lit/decorators.js"),i=s("../../node_modules/proj4/lib/index.js"),c=s("../../libs/map/src/components/current-location/vl-map-current-location.defaults.ts"),n=s("../../libs/elements/src/index.ts");let h=[(0,a.AH)`
    div.uig-map-current-location {
        position: absolute;
        z-index: 1;
        padding: 0;
        margin: 0;
        border: 1px #cbd2da solid;
        border-radius: 0;
        background: #fff;
        top: initial;
        left: initial;
        bottom: 90px;
        right: 10px;
    }

    div.uig-map-current-location button {
        color: #333332;
        background: #fff;
        margin: 0;
        border-radius: 0;
        height: 3.5rem;
        width: 3.5rem;
        display: block;
        padding: 0;
        font-weight: bold;
        text-decoration: none;
        font-size: inherit;
        text-align: center;
        border: none;
        cursor: pointer;
    }

    div.uig-map-current-location .vl-icon {
        padding: 0 0.9rem;
        line-height: 3.5rem;
    }
`,...n.hF];class m extends r.jW{static get styles(){return[(0,a.AH)`
                ${(0,a.iz)(h)}
            `,o.mU]}static get properties(){return{zoom:{type:Number,attribute:"data-vl-zoom",reflect:!0},tooltip:{type:String,attribute:"data-vl-tooltip",reflect:!0}}}constructor(){super(),this.zoom=c.a,this.tooltip=c.K}connectedCallback(){super.connectedCallback(),this._mapElement=this.closest("vl-map")}_currentLocation(){navigator.geolocation.getCurrentPosition(e=>{let t=i.A.Proj("EPSG:4326"),s=i.A.Proj(this._mapElement.map.projection.getCode()),r=i.A.Point(e.coords.longitude,e.coords.latitude),o=i.A.transform(t,s,r);this._mapElement.map.getView().setCenter([o.x,o.y]),this._mapElement.map.getView().setZoom(this.zoom)})}render(){return(0,a.qy)` <div class="uig-map-current-location">
            <button @click=${()=>this._currentLocation()} type="button" title="${this.tooltip}">
                <span class="vl-icon vl-icon--location-gps"></span>
            </button>
        </div>`}}m=function(e,t,s,r){var o,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(l=(a<3?o(l):a>3?o(t,s,l):o(t,s))||l);return a>3&&l&&Object.defineProperty(t,s,l),l}([(0,l.EM)("vl-map-current-location")],m)},"../../libs/map/src/components/layer-switcher/vl-map-layer-switcher.ts":(e,t,s)=>{var r=s("../../libs/common/utilities/src/index.ts"),o=s("../../libs/elements/src/index.ts"),a=s("../../libs/form/src/next/checkbox/index.ts"),l=s("../../libs/form/src/next/form-label/vl-form-label.css.ts"),i=s("../../node_modules/lit/index.js"),c=s("../../node_modules/lit/decorators.js");let n=(0,i.AH)`
    :host {
        display: block;
    }

    :host label {
        display: block;
    }

    :host [data-vl-layer] {
        display: block;
    }
`;class h extends r.jW{static{(0,r.gy)([a.v])}static get styles(){return[o.hF,n,l.B]}static get properties(){return{componentTitle:{type:String,attribute:"data-vl-title",reflect:!0},layers:{type:Array,attribute:"layers"},vlMapLayers:{attribute:!1}}}constructor(){super(),this.componentTitle="Kaartlagen",this.layers=null,this.vlMapLayers=[],this.mapElement=null,this.layerObserver=null,this.computeCheckboxAttributes=()=>{let e=this.mapElement?.resolution;this.vlMapLayers.forEach(t=>{let s=this.shadowRoot?.querySelector(`vl-checkbox-next[data-vl-layer="${t.title}"]`);t.isVisibleAtResolution(e)?s?.removeAttribute("disabled"):s?.setAttribute("disabled",""),t.visible?s?.setAttribute("checked",""):s?.removeAttribute("checked")})}}async connectedCallback(){super.connectedCallback(),this.mapElement=this.closest("vl-map"),await this.layersReady(),this.vlMapLayers=this.getVlMapLayers(),this.mapElement?.on("moveend",this.computeCheckboxAttributes),this.layers||this.observeMapLayers()}async willUpdate(e){e.has("layers")&&(await this.layersReady(),this.vlMapLayers=this.getVlMapLayers()),e.has("vlMapLayers")&&this.vlMapLayers&&this.vlMapLayers?.forEach(({layer:e})=>{e.on("change:visible",()=>{this.computeCheckboxAttributes()})})}updated(){this.computeCheckboxAttributes()}disconnectedCallback(){super.disconnectedCallback(),this.layerObserver?.disconnect(),this.mapElement?.un("moveend",this.computeCheckboxAttributes)}render(){return(0,i.qy)`
            <div>
                <label class="vl-form__label">${this.componentTitle}</label>
                ${this.vlMapLayers.map(e=>(0,i.qy)`
                        <vl-checkbox-next
                            label=${e.title}
                            data-vl-layer=${e.title}
                            checked=${e.visible}
                            @vl-input=${()=>e.visible=!e.visible}
                            >${e.title}</vl-checkbox-next
                        >
                    `)}
            </div>
        `}async layersReady(){return this.mapElement?Promise.all(this.mapElement?.nonBaseLayers.map(e=>r.t7(()=>e.ready))):new Promise((e,t)=>t())}getVlMapLayers(){return this.layers&&Array.isArray(this.layers)?this.mapElement?.nonBaseLayers.filter(e=>this.layers?.includes(e.name))||[]:this.mapElement?.nonBaseLayers||[]}observeMapLayers(){this.layerObserver=new MutationObserver(e=>{e.forEach(e=>{e.addedNodes.forEach(e=>{e instanceof HTMLElement&&e.hasAttribute("data-vl-is-layer")&&(this.vlMapLayers=[...this.vlMapLayers,e])}),e.removedNodes.forEach(e=>{e instanceof HTMLElement&&e.hasAttribute("data-vl-is-layer")&&(this.vlMapLayers=this.vlMapLayers.filter(t=>e!==t))})})}),this.layerObserver.observe(this.mapElement,{subtree:!0,childList:!0})}}h=function(e,t,s,r){var o,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(l=(a<3?o(l):a>3?o(t,s,l):o(t,s))||l);return a>3&&l&&Object.defineProperty(t,s,l),l}([(0,c.EM)("vl-map-layer-switcher")],h)},"../../libs/map/src/components/layer/vector-layer/vl-map-wfs-layer/vl-map-wfs-layer.ts":(e,t,s)=>{var r=s("../../libs/common/utilities/src/index.ts"),o=s("../../node_modules/ol/format/GML2.js"),a=s("../../node_modules/ol/loadingstrategy.js"),l=s("../../node_modules/ol/proj.js"),i=s("../../node_modules/ol/source/Vector.js"),c=s("../../libs/map/src/components/layer/vector-layer/vl-map-vector-layer.ts");class n extends c.P{connectedCallback(){return this._source=this.__createSource(),this._layer=this._createLayer(),super.connectedCallback()}get _url(){let e=this.getAttribute("url");if(!e)throw Error("URL not defined");return new URL(e)}get _layers(){let e=this.getAttribute("layers");if(!e)throw Error("Layers not defined");return e}__createSource(){let e=new i.A({format:this.__sourceFormat,strategy:this.__loadingStrategy,url:this.__getWfsUrl.bind(this)});return e.on("featuresloadend",e=>{e.features.forEach(e=>{e.getGeometry().transform(this.__layerProjectionCode,this.__mapProjectionCode)})}),e}__getWfsUrl(e){let t=this._url,{searchParams:s}=t;return s.set("service","WFS"),s.set("request","GetFeature"),s.set("typename",this._layers),s.set("bbox",(0,l.DI)(e,this.__mapProjectionCode,this.__layerProjectionCode).join(",")),s.set("srsname",this.__layerProjectionCode),s.set("outputFormat",this.__wfsOutputFormat),s.set("version",this.__wfsVersion),t}get __loadingStrategy(){return a.Qk}get __sourceFormat(){return new o.A}get __wfsOutputFormat(){return"GML2"}get __wfsVersion(){return"2.0.0"}}n=function(e,t,s,r){var o,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(l=(a<3?o(l):a>3?o(t,s,l):o(t,s))||l);return a>3&&l&&Object.defineProperty(t,s,l),l}([(0,r.M1)("vl-map-wfs-layer")],n)},"../../libs/map/src/components/layer/wms-layer/vl-map-image-wms-layer/vl-map-image-wms-layer.ts":(e,t,s)=>{var r=s("../../libs/common/utilities/src/index.ts"),o=s("../../node_modules/ol/layer/Image.js"),a=s("../../node_modules/ol/source/ImageWMS.js"),l=s("../../libs/map/src/components/layer/wms-layer/vl-map-wms-layer.ts");class i extends l.v{constructor(){super(o.A,a.A)}}i=function(e,t,s,r){var o,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(l=(a<3?o(l):a>3?o(t,s,l):o(t,s))||l);return a>3&&l&&Object.defineProperty(t,s,l),l}([(0,r.M1)("vl-map-image-wms-layer")],i)},"../../libs/map/src/components/layer/wms-layer/vl-map-tiled-wms-layer/vl-map-tiled-wms-layer.ts":(e,t,s)=>{s.d(t,{B:()=>c});var r=s("../../libs/common/utilities/src/index.ts"),o=s("../../node_modules/ol/layer/Tile.js"),a=s("../../node_modules/ol/source/TileWMS.js"),l=s("../../libs/map/src/components/layer/wms-layer/vl-map-wms-layer.ts");class i extends a.A{constructor(e){super({...e._sourceConfig}),this.layer=e}tileUrlFunction(e,t,s){let r=this.layer.mapElement.map.getView().calculateExtent(this.layer.mapElement.map.getSize());return this.updateParams({...this.layer._sourceConfig.params,tilesorigin:`${r[0]},${r[3]}`}),super.tileUrlFunction(e,t,s)}}class c extends l.v{constructor(){super(o.A,a.A)}get _sourceConfig(){return{...super._sourceConfig,params:{...super._sourceConfig.params,TILED:!0}}}__createSource(){return new i(this)}}c=function(e,t,s,r){var o,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(l=(a<3?o(l):a>3?o(t,s,l):o(t,s))||l);return a>3&&l&&Object.defineProperty(t,s,l),l}([(0,r.M1)("vl-map-tiled-wms-layer")],c)},"../../libs/map/src/components/layer/wms-layer/vl-map-wms-layer.ts":(e,t,s)=>{s.d(t,{v:()=>o});var r=s("../../libs/map/src/components/layer/vl-map-layer.ts");s("../../libs/map/src/components/layer/wms-layer/vl-map-wms-style/vl-map-wms-style.ts");class o extends r.M{static get _observedAttributes(){return r.M._observedAttributes.concat(["url","layers","styles","version"])}constructor(e,t){super(),this.__layerClass=e,this.__sourceClass=t}connectedCallback(){return customElements.whenDefined("vl-map-wms-style").then(()=>(this._source=this.__createSource(this.__sourceClass),this._layer=this.__createLayer(this.__layerClass),super.connectedCallback()))}get _url(){let e=this.getAttribute("data-vl-url");if(!e)throw Error("URL not defined");return e}get _layers(){let e=this.getAttribute("data-vl-layers");if(!e)throw Error("Layers not defined");return e}get _styles(){return this.getAttribute("data-vl-styles")||""}get _sldBody(){let e=this.querySelector(":scope > vl-map-wms-style");if(e)return e.sld}get _version(){return this.getAttribute("data-vl-version")||"1.3.0"}_createLayerConfig(e){return{title:this._name,source:e,minResolution:this._minResolution,maxResolution:this._maxResolution,visible:this._visible,opacity:this._opacity}}get _sourceConfig(){return{url:this._url,params:{LAYERS:this._layers,STYLES:this._styles,VERSION:this._version,SLD_BODY:this._sldBody}}}__createLayer(e){let t=new e(this._createLayerConfig(this._source));return t.set("id",r.M._counter),t}__createSource(e){return new e(this._sourceConfig)}_layersChangedCallback(){this.updateOlLayerSource()}_urlChangedCallback(){this.updateOlLayerSource()}_stylesChangedCallback(){this.updateOlLayerSource()}_versionChangedCallback(){this.updateOlLayerSource()}updateOlLayerSource(){if(!this._layer)return;let e=this.__createSource(this.__sourceClass);this._layer.setSource(e)}}},"../../libs/map/src/components/layer/wms-layer/vl-map-wms-style/vl-map-wms-style.ts":(e,t,s)=>{var r=s("../../libs/common/utilities/src/index.ts");class o extends(0,r.H3)(HTMLElement){get sld(){return this.getAttribute("data-vl-sld")}}o=function(e,t,s,r){var o,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(l=(a<3?o(l):a>3?o(t,s,l):o(t,s))||l);return a>3&&l&&Object.defineProperty(t,s,l),l}([(0,r.M1)("vl-map-wms-style")],o)},"../../libs/map/src/components/layer/wms-layer/vl-map-xyz-wms-layer/vl-map-xyz-wms-layer.ts":(e,t,s)=>{var r=s("../../libs/common/utilities/src/index.ts"),o=s("../../node_modules/ol/layer/Tile.js"),a=s("../../node_modules/ol/source/XYZ.js"),l=s("../../libs/map/src/components/layer/wms-layer/vl-map-wms-layer.ts");class i extends l.v{constructor(){super(o.A,a.A)}get _layers(){}}i=function(e,t,s,r){var o,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(l=(a<3?o(l):a>3?o(t,s,l):o(t,s))||l);return a>3&&l&&Object.defineProperty(t,s,l),l}([(0,r.M1)("vl-map-xyz-wms-layer")],i)},"../../libs/map/src/components/layer/wmts-layer/vl-map-wmts-layer.ts":(e,t,s)=>{var r=s("../../libs/common/utilities/src/index.ts"),o=s("../../node_modules/ol/extent.js"),a=s("../../node_modules/ol/layer/Tile.js"),l=s("../../node_modules/ol/source/WMTS.js"),i=s("../../node_modules/ol/tilegrid/WMTS.js"),c=s("../../libs/map/src/utils/capabilities.ts"),n=s("../../libs/map/src/vl-map.ts"),h=s("../../libs/map/src/components/layer/vl-map-layer.ts");class m extends h.M{connectedCallback(){return this._source=this.__createSource(),this._layer=this._createLayer(),super.connectedCallback()}get _projection(){if(this.parentNode&&this.parentNode instanceof n.v)return this.parentNode._projection}get url(){let e=this.getAttribute("data-vl-url");if(!e)throw Error("URL not defined");return e}get _wmtsLayer(){let e=this.getAttribute("data-vl-layer");if(!e)throw Error("Layer not defined");return e}_createLayer(){let e=new a.A({title:this._name,source:this._source,minResolution:this._minResolution,maxResolution:this._maxResolution,visible:this._visible,opacity:this._opacity});return e.set("id",h.M._counter),e}__createSource(){let e=this.__grbTileLimits;return new l.A({url:this.url,layer:this._wmtsLayer,matrixSet:this.__grbMatrixSet,format:this.__wmtsFormat,projection:this._projection,tileGrid:new i.A({extent:this.__extent,origin:o.Py(this.__extent),resolutions:e.resolutions,matrixIds:e.matrixIds}),style:""})}get __wmtsFormat(){return"image/png"}get __extent(){return this._projection?.getExtent()}get __grbMatrixSet(){if(this.hasAttribute("matrix-set"))return this.getAttribute("matrix-set");switch(this._projection?.getCode()){case(0,c.$G)():return"BPL2008VL";case(0,c.Wc)():return"BPL72VL";default:return"WGS84VL"}}get __prefixMatrix(){return this.hasAttribute("matrix-prefix")}get __grbTileLimits(){let e=o.RG((0,c.Cz)())/256,t=Array(16),s=Array(16);for(let r=0;r<16;++r)t[r]=e/Math.pow(2,r),s[r]=this.__prefixMatrix?this.__grbMatrixSet+":"+r:r;return{matrixIds:s,resolutions:t}}}m=function(e,t,s,r){var o,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(l=(a<3?o(l):a>3?o(t,s,l):o(t,s))||l);return a>3&&l&&Object.defineProperty(t,s,l),l}([(0,r.M1)("vl-map-wmts-layer")],m)},"../../libs/map/src/components/loading-indicator/vl-map-loading-indicator.ts":(e,t,s)=>{var r=s("../../libs/common/utilities/src/index.ts"),o=s("../../node_modules/lit/index.js"),a=s("../../node_modules/lit/decorators.js"),l=s("../../node_modules/ol/Observable.js");class i extends r.jW{static{this.styles=(0,o.AH)`
        @keyframes progress {
            0% {
                left: 0;
                width: 0;
            }
            50% {
                width: 100%;
            }
            100% {
                right: 0;
                width: 0;
            }
        }

        :host(.loading) {
            position: absolute;
            height: 3px;
            background: rgba(0, 85, 204, 0.6); /*komt overeen met blauw van de vl-button.*/
            animation: progress 2s infinite ease-in-out;
            animation-delay: 250ms;
            z-index: 2;
        }
    `}connectedCallback(){super.connectedCallback(),this.eventKeyLoadStart=this.map.on("loadstart",()=>{this.toggleLoadingClass(!0)}),this.eventKeyLoadEnd=this.map.on("loadend",()=>{this.toggleLoadingClass(!1)})}disconnectedCallback(){super.disconnectedCallback(),(0,l.e)(this.eventKeyLoadStart),(0,l.e)(this.eventKeyLoadEnd)}toggleLoadingClass(e){e?this.classList.add("loading"):this.classList.remove("loading")}get map(){return this.closest("vl-map")}}i=function(e,t,s,r){var o,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(l=(a<3?o(l):a>3?o(t,s,l):o(t,s))||l);return a>3&&l&&Object.defineProperty(t,s,l),l}([(0,a.EM)("vl-map-loading-indicator")],i)},"../../libs/map/src/components/next/select-location/vl-select-location.defaults.ts":(e,t,s)=>{s.d(t,{I:()=>o});let r={...s("../../libs/form/src/next/select-rich/vl-select-rich.defaults.ts").X};delete r.multiple,delete r.search;let o={...r,placeholder:"Zoeken op kaart",searchPlaceholder:"Zoeken op adres of coördinaat"}},"../../libs/map/src/components/next/select-location/vl-select-location.ts":(e,t,s)=>{s.d(t,{d:()=>n});var r=s("../../libs/common/utilities/src/index.ts"),o=s("../../libs/form/src/next/select-rich/index.ts"),a=s("../../libs/map/src/utils/lambert-coordinaat.ts"),l=s("../../libs/map/src/components/next/select-location/vl-select-location.defaults.ts");let i=e=>"object"==typeof e&&!Array.isArray(e)&&!!e.BoundingBox,c=e=>"object"==typeof e&&!Array.isArray(e)&&!!e.x&&!!e.y;class n extends o.Al{constructor(){super(),this.url="https://geo.api.vlaanderen.be/geolocation",this.searchUrl=`${this.url}/Suggestion?q=`,this.locationUrl=`${this.url}/Location?q=`,this.locationXyUrl=`${this.url}/Location?c=5&xy=`,this.onSearch=e=>{if(e[0]?.detail?.value){let{value:t}=e[0].detail,s=a.A.of(t);a.A.isLambertCoordinaat(s)?this.searchChoicesByLambertCoordinaat(s):this.searchChoicesByValue(t)}},this.debouncedOnSearch=(0,r.sg)(this.onSearch,300),this.setChoices=e=>this.choices?.setChoices(e,"value","label",!0),this.searchChoicesByLambertCoordinaat=e=>fetch(`${this.locationXyUrl+e.x},${e.y}`).then(e=>e.json()).then(t=>this.setChoices([this.mapLambertCoordinaatToChoice(e)].concat(this.mapLocationResultToChoices(t,e)))),this.mapLambertCoordinaatToChoice=e=>({value:e,label:`Lambert-co\xf6rdinaat: ${e.toString()}`}),this.mapLocationResultToChoices=(e,t)=>e?.LocationResult?.map(e=>({value:t,label:e.FormattedAddress}))||[],this.searchChoicesByValue=e=>fetch(this.searchUrl+encodeURIComponent(e)).then(e=>e.json()).then(e=>this.setChoices(this.mapSuggestionResultToChoices(e))),this.mapSuggestionResultToChoices=e=>e?.SuggestionResult?.map(e=>({value:e,label:e}))||[],this.placeholder=l.I.placeholder,this.search=!0,this.searchPlaceholder=l.I.searchPlaceholder}connectedCallback(){super.connectedCallback(),this.addEventListener("vl-select-search",this.debouncedOnSearch)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("vl-select-search",this.debouncedOnSearch)}get location(){if(!this.choices)return;let e=this.choices.getValue(!0);if(e){if(i(e))return Promise.resolve(this.isLambert2008?[e.BoundingBox.LowerLeft.X_Lambert2008,e.BoundingBox.LowerLeft.Y_Lambert2008,e.BoundingBox.UpperRight.X_Lambert2008,e.BoundingBox.UpperRight.Y_Lambert2008]:[e.BoundingBox.LowerLeft.X_Lambert72,e.BoundingBox.LowerLeft.Y_Lambert72,e.BoundingBox.UpperRight.X_Lambert72,e.BoundingBox.UpperRight.Y_Lambert72]);if(c(e)&&a.A.isLambertCoordinaat(e))return Promise.resolve([e.x-1,e.y-1,e.x+1,e.y+1]);if("string"==typeof e)return fetch(this.locationUrl+encodeURIComponent(e)).then(e=>e.json()).then(({LocationResult:e})=>this.isLambert2008?[e[0].BoundingBox.LowerLeft.X_Lambert2008,e[0].BoundingBox.LowerLeft.Y_Lambert2008,e[0].BoundingBox.UpperRight.X_Lambert2008,e[0].BoundingBox.UpperRight.Y_Lambert2008]:[e[0].BoundingBox.LowerLeft.X_Lambert72,e[0].BoundingBox.LowerLeft.Y_Lambert72,e[0].BoundingBox.UpperRight.X_Lambert72,e[0].BoundingBox.UpperRight.Y_Lambert72])}}get isLambert2008(){return this.hasAttribute("lambert2008")}}n=function(e,t,s,r){var o,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(l=(a<3?o(l):a>3?o(t,s,l):o(t,s))||l);return a>3&&l&&Object.defineProperty(t,s,l),l}([(0,r.M1)("vl-select-location-next")],n)},"../../libs/map/src/components/overview-map/vl-map-overview-map.ts":(e,t,s)=>{var r=s("../../libs/common/utilities/src/index.ts");class o extends(0,r.H3)(HTMLElement){connectedCallback(){super.connectedCallback(),this._configureMap()}get _map(){if(this.parentNode)return this.parentNode.map}_configureMap(){(async()=>{for(;!(this._map&&this._map.overviewMapControl);)await new Promise(e=>setTimeout(e,100));this._map.addControl(this._map.overviewMapControl)})()}}o=function(e,t,s,r){var o,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(l=(a<3?o(l):a>3?o(t,s,l):o(t,s))||l);return a>3&&l&&Object.defineProperty(t,s,l),l}([(0,r.M1)("vl-map-overview-map")],o)},"../../libs/map/src/components/search/vl-map-search.ts":(e,t,s)=>{s.d(t,{B:()=>n});var r=s("../../libs/common/utilities/src/index.ts"),o=s("../../libs/components/src/index.ts"),a=s("../../libs/elements/src/index.ts"),l=s("../../node_modules/ol/Overlay.js"),i=s("../../libs/map/src/vl-map.ts"),c=s("../../libs/map/src/components/next/select-location/vl-select-location.ts");class n extends(0,r.H3)(HTMLElement){static{(0,r.gy)([a.Pg,c.d,o.gC])}static get _observedAttributes(){return["placeholder","search-placeholder","search-empty-text","search-no-results-text"]}static get _observedClassAttributes(){return["with-offset"]}get _classPrefix(){return"vl-map-search--"}constructor(){super(`
          <style>
            ${a.hF.join("")}
            :host {
              display: block;
            }

            ::part(vl-select-rich__combobox) {
                background-color: white;
            }

            ::part(vl-select-rich__combobox)::before {
                display: none;
            }

            vl-search {
                display: block;
                height: 3.5rem;
            }
          </style>
          <vl-search id="search" data-vl-inline>
            <vl-select-location-next slot="input" not-deletable position=${a.V_.BOTTOM}></vl-select-location-next>
          </vl-search>
        `),this.changeLocation=async()=>{try{let e=await this._selectElement.location;e&&(this._onSelect?this._onSelect(e):this.zoomTo(e))}catch(e){console.error("Locatie kan niet opgehaald worden.",e)}},this.stopPropagation=e=>{e.stopPropagation()},this.configure()}connectedCallback(){this.addEventListener("vl-input",this.changeLocation),this.addEventListener("keypress",this.stopPropagation),this.map?.isLambert2008&&this._selectElement.setAttribute("lambert2008","")}get _selectElement(){return this._shadow.querySelector("vl-select-location-next")}bindMap(e){this._map=e,e.isLambert2008&&this._selectElement.setAttribute("lambert2008","")}get map(){return this._map||(this.parentNode&&this.parentNode instanceof i.v?this.parentNode:null)}onSelect(e){this._onSelect=e}zoomTo(e){this._map.zoomTo(e,14)}configure(){customElements.whenDefined("vl-map").then(()=>{this.parentNode&&this.parentNode.map&&(this._map=this.parentNode._shadow.host,this._map.map.addOverlay(new l.A({className:"vl-map-search__overlaycontainer",element:this})))})}_placeholderChangedCallback(e,t){this._dispatchSelectAttribute("placeholder",t)}_searchPlaceholderChangedCallback(e,t){this._dispatchSelectAttribute("search-placeholder",t)}_searchEmptyTextChangedCallback(e,t){this._dispatchSelectAttribute("search-empty-text",t)}_searchNoResultsTextChangedCallback(e,t){this._dispatchSelectAttribute("search-no-results-text",t)}_dispatchSelectAttribute(e,t){void 0!=t?this._selectElement.setAttribute(`${n.attributePrefix}${e}`,t):this._selectElement.removeAttribute(`${n.attributePrefix}${e}`)}disconnectedCallback(){this.removeEventListener("keypress",this.stopPropagation),this._selectElement.removeEventListener("vl-input",this.changeLocation)}}n=function(e,t,s,r){var o,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(l=(a<3?o(l):a>3?o(t,s,l):o(t,s))||l);return a>3&&l&&Object.defineProperty(t,s,l),l}([(0,r.M1)("vl-map-search")],n)},"../../libs/map/src/components/select-location/vl-select-location.ts":(e,t,s)=>{var r=s("../../libs/common/utilities/src/index.ts"),o=s("../../libs/elements/src/index.ts"),a=s("../../libs/map/src/utils/lambert-coordinaat.ts");class l extends o.Pg{static get _observedAttributes(){return["placeholder"]}constructor(){super(),this.setAttribute("data-vl-select",""),this._addSearchEventListener(),this._addChoiceEventListener(),this._addPlaceholder(),this.placeholder="Zoeken op kaart"}get location(){let{value:e}=this._choices.getValue();return e?e.BoundingBox?Promise.resolve([e.BoundingBox.LowerLeft.X_Lambert72,e.BoundingBox.LowerLeft.Y_Lambert72,e.BoundingBox.UpperRight.X_Lambert72,e.BoundingBox.UpperRight.Y_Lambert72]):a.A.isLambertCoordinaat(e)?Promise.resolve([e.x-1,e.y-1,e.x+1,e.y+1]):fetch(this._locationUrl+encodeURIComponent(e)).then(e=>e.json()).then(e=>[e.LocationResult[0].BoundingBox.LowerLeft.X_Lambert72,e.LocationResult[0].BoundingBox.LowerLeft.Y_Lambert72,e.LocationResult[0].BoundingBox.UpperRight.X_Lambert72,e.LocationResult[0].BoundingBox.UpperRight.Y_Lambert72]):void 0}set placeholder(e){this._placeholderElement.innerText=e}get _url(){return"https://geo.api.vlaanderen.be/geolocation"}get _searchUrl(){return`${this._url}/Suggestion?q=`}get _locationUrl(){return`${this._url}/Location?q=`}get _locationXyUrl(){return`${this._url}/Location?c=5&xy=`}get _placeholderElement(){return this.querySelector("option")}_placeholderChangedCallback(e,t){this.placeholder=t}_addSearchEventListener(){this.addEventListener("search",e=>{if(e&&e.detail&&e.detail.value){let t=a.A.of(e.detail.value);a.A.isLambertCoordinaat(t)?this._searchChoicesByLambertCoordinaat(t):this._searchChoicesByValue(e.detail.value)}})}_searchChoicesByValue(e){fetch(this._searchUrl+encodeURIComponent(e)).then(e=>e.json()).then(e=>{this.choices=this._mapSuggestionResultToChoices(e)})}_mapSuggestionResultToChoices(e){return e&&e.SuggestionResult?e.SuggestionResult.map(e=>({value:e,label:e})):[]}_searchChoicesByLambertCoordinaat(e){fetch(`${this._locationXyUrl+e.x},${e.y}`).then(e=>e.json()).then(t=>{this.choices=[this._mapLambertCoordinaatToChoice(e)].concat(this._mapLocationResultToChoices(t))})}_mapLambertCoordinaatToChoice(e){return{value:e,label:`Lambert-co\xf6rdinaat: ${e.toString()}`}}_mapLocationResultToChoices(e){return e&&e.LocationResult?e.LocationResult.map(e=>({value:e,label:e.FormattedAddress})):[]}_addChoiceEventListener(){this.addEventListener("choice",()=>setTimeout(()=>this.dispatchEvent(new Event("change"))))}_addPlaceholder(){this.insertAdjacentHTML("afterbegin","<option placeholder></option>")}get DEFAULT_SEARCH_PLACEHOLDER(){return"Zoeken op adres of coördinaat"}get DEFAULT_NO_MORE_OPTIONS(){return"Geen adres gevonden"}get DEFAULT_SEARCH_NO_RESULT(){return"Geen adres gevonden"}}l=function(e,t,s,r){var o,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(l=(a<3?o(l):a>3?o(t,s,l):o(t,s))||l);return a>3&&l&&Object.defineProperty(t,s,l),l}([(0,r.M1)("vl-select-location",{extends:"select"})],l)},"../../libs/map/src/components/side-sheet/vl-map-side-sheet-menu-item.ts":(e,t,s)=>{var r=s("../../libs/common/utilities/src/index.ts"),o=s("../../libs/common/utilities/src/css/index.ts");class a extends(0,r.H3)(HTMLElement){static get _observedAttributes(){return["title","href"]}constructor(){super(`
      <style>
        ${o.ey}
        ${o.mU}
        ${(0,o.L3)(".vl-link-next")}


        .vl-map-side-sheet-menu-item {
          background: #e8ebee;
          padding: 2rem;
        }

        slot {
          padding: 1.5rem;
          display: block;
        }
      </style>
      <div>
        <div class="vl-map-side-sheet-menu-item">
          <a id="vl-map-side-sheet-menu-item-link" class="vl-link-next" href="#">
            <span class="vl-icon vl-icon--arrow-left-fat vl-link-next__icon vl-link-next__icon--before"></span><span id="title">Terug</span>
          </a>
        </div>
        <slot></slot>
      </div>
    `)}get _titleElement(){return this._shadow.querySelector("#title")}get _hrefElement(){return this._shadow.querySelector("#vl-map-side-sheet-menu-item-link")}_titleChangedCallback(e,t){t&&(this._titleElement.innerText=t)}_hrefChangedCallback(e,t){t&&this._hrefElement.setAttribute("href",t)}}a=function(e,t,s,r){var o,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(l=(a<3?o(l):a>3?o(t,s,l):o(t,s))||l);return a>3&&l&&Object.defineProperty(t,s,l),l}([(0,r.M1)("vl-map-side-sheet-menu-item")],a)},"../../libs/map/src/components/side-sheet/vl-map-side-sheet-menu.ts":(e,t,s)=>{var r=s("../../libs/common/utilities/src/index.ts"),o=s("../../libs/elements/src/index.ts");class a extends(0,r.H3)(HTMLElement){constructor(){super(`
      <style>
        ${o.hF.join("")}
        :host {
          margin: -1.5rem;
          display: block;
        }
      </style>
      <slot></slot>
    `)}}a=function(e,t,s,r){var o,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(l=(a<3?o(l):a>3?o(t,s,l):o(t,s))||l);return a>3&&l&&Object.defineProperty(t,s,l),l}([(0,r.M1)("vl-map-side-sheet-menu")],a)},"../../libs/map/src/components/side-sheet/vl-map-side-sheet.ts":(e,t,s)=>{var r=s("../../libs/common/utilities/src/index.ts"),o=s("../../libs/components/src/index.ts");class a extends o.VH{constructor(){super(`
      :host {
        width: 3.5rem;
        transition: width 0.1s;
      }

      :host([data-vl-open]) {
        width: var(--vl-side-sheet-width,calc(100%/3));
      }

      .vl-side-sheet__toggle {
        margin: 10px;
      }

      :host([data-vl-open]) .vl-side-sheet__toggle {
        margin-left: 0px;
      }

      ::slotted(*) {
        margin-bottom: 20px;
      }
    `)}connectedCallback(){super.connectedCallback(),this.setAttribute("data-vl-absolute",""),this.hasAttribute("data-vl-right")||this.setAttribute("data-vl-left",""),this._openChangedCallback()}_rightChangedCallback(e,t){void 0!=t?this.removeAttribute("data-vl-left"):this.setAttribute("data-vl-left","")}}a=function(e,t,s,r){var o,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(l=(a<3?o(l):a>3?o(t,s,l):o(t,s))||l);return a>3&&l&&Object.defineProperty(t,s,l),l}([(0,r.M1)("vl-map-side-sheet")],a)},"../../libs/map/src/index.ts":(e,t,s)=>{s.d(t,{vS:()=>r.v,Lc:()=>o.L,B7:()=>i.B,Bv:()=>a.B,dJ:()=>l.d});var r=s("../../libs/map/src/vl-map.ts");s("../../libs/map/src/actions/delete/delete-action.ts"),s("../../libs/map/src/actions/draw/draw-action.ts"),s("../../libs/map/src/actions/draw/draw-line-action.ts"),s("../../libs/map/src/actions/draw/draw-polygon-action.ts"),s("../../node_modules/ol/geom/Polygon.js"),s("../../libs/map/src/actions/layer/composite-vector-layer.ts"),s("../../libs/map/src/actions/map/custom-map.ts"),s("../../libs/map/src/actions/map/map-with-actions.ts"),s("../../libs/map/src/actions/measure/measure-action.ts"),s("../../libs/map/src/actions/modify/modify-action.ts"),s("../../node_modules/ol/Collection.js"),s("../../node_modules/ol/events/Event.js"),s("../../node_modules/ol/Feature.js"),s("../../node_modules/ol/interaction/Property.js"),s("../../node_modules/ol/interaction/Pointer.js"),s("../../node_modules/ol/functions.js"),s("../../node_modules/ol/events/condition.js"),s("../../node_modules/ol/proj.js"),s("../../node_modules/ol/interaction/Select.js"),s("../../libs/map/src/actions/mapaction.ts"),s("../../libs/map/src/actions/select/box-select-action.ts"),s("../../libs/map/src/actions/select/select-action.ts"),s("../../libs/map/src/actions/select/select-actions.ts"),s("../../node_modules/ol/Overlay.js"),s("../../libs/map/src/actions/snap/snap-interaction.ts"),s("../../libs/map/src/actions/source/composite-vector-source.ts"),s("../../libs/map/src/components/action/click-action/vl-map-click-action.ts"),s("../../libs/map/src/components/action/draw-action/draw-action-style/vl-map-draw-action-style.ts"),s("../../libs/map/src/components/action/draw-action/draw-line-action/vl-map-draw-line-action.ts"),s("../../libs/map/src/components/action/draw-action/draw-point-action/vl-map-draw-point-action.ts"),s("../../libs/map/src/components/action/draw-action/draw-polygon-action/vl-map-draw-polygon-action.ts"),s("../../libs/map/src/components/action/draw-action/measure-action/vl-map-measure-action.ts"),s("../../libs/map/src/components/action/layer-action/delete-action/vl-map-delete-action.ts"),s("../../libs/map/src/components/action/layer-action/modify-action/vl-map-modify-action.ts"),s("../../libs/map/src/components/action/layer-action/select-action/select-actions/vl-map-select-actions.ts"),s("../../libs/map/src/components/action/layer-action/select-action/vl-map-select-action.ts"),s("../../libs/map/src/components/action/layer-action/vl-map-layer-action.ts"),s("../../libs/map/src/components/action/vl-map-action.ts"),s("../../libs/map/src/components/baselayer/vl-map-base-layer.ts");var o=s("../../libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts");s("../../libs/map/src/components/baselayer/vl-map-base-layer-grb-ortho/vl-map-base-layer-grb-ortho.ts"),s("../../libs/map/src/components/baselayer/vl-map-base-layer-grb/vl-map-base-layer-grb.ts"),s("../../libs/map/src/components/controls/action-control/vl-map-action-control.ts"),s("../../libs/map/src/components/controls/measure-control/vl-map-measure-control.ts"),s("../../libs/map/src/components/controls/vl-map-action-controls.ts"),s("../../libs/map/src/components/current-location/vl-map-current-location.ts"),s("../../libs/map/src/components/layer-style/vl-map-layer-circle-style/vl-map-layer-circle-style.ts"),s("../../libs/map/src/components/layer-style/vl-map-layer-style.ts"),s("../../libs/map/src/components/layer-switcher/vl-map-layer-switcher.ts"),s("../../libs/map/src/components/layer/vector-layer/vl-map-features-layer/vl-map-features-layer.ts"),s("../../libs/map/src/components/layer/vector-layer/vl-map-vector-layer.ts"),s("../../libs/map/src/components/layer/vector-layer/vl-map-wfs-layer/vl-map-wfs-layer.ts"),s("../../libs/map/src/components/layer/vl-map-layer.ts"),s("../../libs/map/src/components/layer/wms-layer/vl-map-image-wms-layer/vl-map-image-wms-layer.ts");var a=s("../../libs/map/src/components/layer/wms-layer/vl-map-tiled-wms-layer/vl-map-tiled-wms-layer.ts");s("../../libs/map/src/components/layer/wms-layer/vl-map-wms-style/vl-map-wms-style.ts"),s("../../libs/map/src/components/layer/wms-layer/vl-map-xyz-wms-layer/vl-map-xyz-wms-layer.ts"),s("../../libs/map/src/components/layer/wmts-layer/vl-map-wmts-layer.ts"),s("../../libs/map/src/components/legend/vl-map-legend.ts"),s("../../libs/map/src/components/loading-indicator/vl-map-loading-indicator.ts");var l=s("../../libs/map/src/components/next/select-location/vl-select-location.ts");s("../../libs/map/src/components/overview-map/vl-map-overview-map.ts");var i=s("../../libs/map/src/components/search/vl-map-search.ts");s("../../libs/map/src/components/select-location/vl-select-location.ts"),s("../../libs/map/src/components/side-sheet/vl-map-side-sheet.ts"),s("../../libs/map/src/components/side-sheet/vl-map-side-sheet-menu.ts"),s("../../libs/map/src/components/side-sheet/vl-map-side-sheet-menu-item.ts")},"../../libs/map/src/utils/lambert-coordinaat.ts":(e,t,s)=>{s.d(t,{A:()=>o});class r{constructor(e,t){this._x=e,this._y=t}get x(){return this._x}get y(){return this._y}toString(){return this._x+", "+this._y}static of(e){if(!e&&!(e instanceof String))return;let t=e.match(/^\s*\(?(?<x>\d{1,6}\.\d{1,2}|\d{1,6})\d*[,;]\u0020*(?<y>\d{1,6}\.\d{1,2}|\d{1,6})\d*\)?/);if(t)return new r(Number(t.groups.x),Number(t.groups.y))}static isLambertCoordinaat(e){return e instanceof r}}let o=r}}]);