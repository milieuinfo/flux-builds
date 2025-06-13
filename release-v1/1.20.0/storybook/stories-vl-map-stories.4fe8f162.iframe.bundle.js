"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[9539],{"./libs/map/src/actions/select/select-action.ts":(e,t,a)=>{a.d(t,{v:()=>i});var l=a("./node_modules/ol/events/condition.js"),n=a("./node_modules/ol/interaction/Select.js"),o=a("./libs/map/src/actions/mapaction.ts");class i extends o.D{constructor(e,t,a){let o=a&&a.cluster,i=a&&a.filter?a.filter:()=>!0,r=a?a.style:null,s=a&&a.hoverStyle||r,c=Array.isArray(e)?e:[e],d=(e,t)=>(this.selectInteraction.getFeatures().clear(),this.filter(e,t)),p=(e,t)=>{let a=-1!==this.selectInteraction.getFeatures().getArray().indexOf(e);return this.filter(e,t)&&!a},m=new n.Z({filter:p,condition:l.MJ,style:s,layers:c}),g=new n.Z({condition:l.Fi,style:r,layers:c}),u=new n.Z({filter:d,condition:l.V4,style:r,layers:c});super([g,u,m]),this.cluster=o,this.filter=i,this.layer=e,this.style=r,this.hoverStyle=s,this.hoverInteraction=m,this.markInteraction=g,this.selectInteraction=u,this.hoverInteraction.on("select",()=>{let e=this.map.getTargetElement();this.hoverInteraction.getFeatures().getLength()>0?e.style.cursor="pointer":e.style.cursor="",this.map.render()}),this.selectedFeature=null,this.getLayer=()=>e;let h=e=>{let t=e.getArray().indexOf(this.selectedFeature),a=t+1;return a>e.getLength()-1&&(a=0),e.getArray()[a]};this.selectInteraction.on("select",e=>{this.markInteraction.getFeatures().clear(),this.selectInteraction.getFeatures().getLength()>0?(1===this.selectInteraction.getFeatures().getLength()?this.selectedFeature=this.selectInteraction.getFeatures().getArray()[0]:this.selectedFeature=h(this.selectInteraction.getFeatures()),t&&t(this.selectedFeature,e,this.getLayer())):(this.selectedFeature=null,t&&t()),this.map.render()}),this.selectInteractionFilter=d,this.hoverInteractionFilter=p}_fixClusterBehavior(){if(this.selectedFeature){let e=this.selectedFeature.get("features")||[this.selectedFeature];this.selectInteraction.getFeatures().clear(),this.markInteraction.getFeatures().clear(),e&&e.forEach(e=>{e.getId()&&this.markFeatureWithId(e.getId())})}}getClusterWithFeatureId(e,t){for(let a=0;a<e.length;a++){let l=e[a].get("features");if(l&&this.getFeatureById(l,t))return e[a]}}getFeatureById(e,t){for(let a=0;a<e.length;a++)if(e[a].getId()===t)return e[a]}clearFeatures(){this.selectInteraction.getFeatures().clear(),this.markInteraction.getFeatures().clear(),this.hoverInteraction.getFeatures().clear()}activate(){this.cluster&&this.map&&(this._fixClusterBehaviorListener=()=>this._fixClusterBehavior(),this.map.on("moveend",this._fixClusterBehaviorListener),this.selectInteraction.on("select",this._fixClusterBehaviorListener)),super.activate()}deactivate(){this._fixClusterBehaviorListener&&(this.map.un("moveend",this._fixClusterBehaviorListener),this.selectInteraction.un("select",this._fixClusterBehaviorListener)),this.clearFeatures(),super.deactivate()}selectFeature(e){this.selectInteraction.getFeatures().push(e),this.selectInteraction.dispatchEvent({type:"select",feature:e})}getSelectedFeatures(){return this.selectInteraction.getFeatures()}deselect(){this.selectedFeature=null}markFeatureWithId(e,t){t=t||this.layer;let a=t.getSource().getFeatureById(e)||this.getClusterWithFeatureId(t.getSource().getFeatures(),e);a&&-1===this.markInteraction.getFeatures().getArray().indexOf(a)&&this.markInteraction.getFeatures().push(a)}isMarked(e){let t=!1;return this.markInteraction.getFeatures().forEach(a=>{a===e&&(t=!0)}),t}demarkAllFeatures(){this.markInteraction.getFeatures().clear()}}},"./libs/map/src/components/action/draw-action/draw-line-action/vl-map-draw-line-action.ts":(e,t,a)=>{var l=a("./libs/common/utilities/src/index.ts"),n=a("./libs/map/src/actions/draw/draw-action.ts");class o extends n.I{constructor(e,t,a={}){super(e,"LineString",t,a)}}var i=a("./libs/map/src/components/action/draw-action/vl-map-draw-action.ts");let r=class extends i.n{_createAction(e){return new o(e,this._callback,this.__drawOptions)}};r=function(e,t,a,l){var n,o=arguments.length,i=o<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,a):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,l);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(i=(o<3?n(i):o>3?n(t,a,i):n(t,a))||i);return o>3&&i&&Object.defineProperty(t,a,i),i}([(0,l.a6)("vl-map-draw-line-action")],r)},"./libs/map/src/components/action/draw-action/draw-point-action/vl-map-draw-point-action.ts":(e,t,a)=>{var l=a("./libs/common/utilities/src/index.ts"),n=a("./libs/map/src/actions/draw/draw-action.ts"),o=a("./libs/map/src/components/action/draw-action/vl-map-draw-action.ts");let i=class extends o.n{_createAction(e){return new n.I(e,"Point",this._callback,this.__drawOptions)}};i=function(e,t,a,l){var n,o=arguments.length,i=o<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,a):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,l);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(i=(o<3?n(i):o>3?n(t,a,i):n(t,a))||i);return o>3&&i&&Object.defineProperty(t,a,i),i}([(0,l.a6)("vl-map-draw-point-action")],i)},"./libs/map/src/components/action/draw-action/draw-polygon-action/vl-map-draw-polygon-action.ts":(e,t,a)=>{var l=a("./libs/common/utilities/src/index.ts"),n=a("./libs/map/src/actions/draw/draw-action.ts");class o extends n.I{constructor(e,t,a={}){super(e,"Polygon",t,a)}}var i=a("./libs/map/src/components/action/draw-action/vl-map-draw-action.ts");let r=class extends i.n{_createAction(e){return new o(e,this._callback,this.__drawOptions)}};r=function(e,t,a,l){var n,o=arguments.length,i=o<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,a):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,l);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(i=(o<3?n(i):o>3?n(t,a,i):n(t,a))||i);return o>3&&i&&Object.defineProperty(t,a,i),i}([(0,l.a6)("vl-map-draw-polygon-action")],r)},"./libs/map/src/components/action/layer-action/delete-action/vl-map-delete-action.ts":(e,t,a)=>{var l=a("./libs/common/utilities/src/index.ts"),n=a("./node_modules/ol/style/Style.js"),o=a("./node_modules/ol/style/Fill.js"),i=a("./node_modules/ol/style/Stroke.js"),r=a("./node_modules/ol/style/Circle.js"),s=a("./libs/map/src/actions/select/select-action.ts"),c=a("./node_modules/ol/interaction/DragBox.js");class d extends s.v{constructor(e,t,a){super(e,e=>{e&&t([e])},a),this.dragBoxInteraction=new c.Z,this.addInteraction(this.dragBoxInteraction),this.dragBoxInteraction.on("boxdrag",()=>{let t=this.dragBoxInteraction.getGeometry().getExtent();this.hoverInteraction.getFeatures().clear(),e.getSource().forEachFeatureIntersectingExtent(t,t=>{this.filter(t,e)&&this.hoverInteraction.getFeatures().push(t)})}),this.dragBoxInteraction.on("boxend",()=>{this.hoverInteraction.getFeatures().getLength()>0&&t(this.hoverInteraction.getFeatures().getArray().slice(0))})}}class p extends d{constructor(e,t,a={}){let l=new n.ZP({fill:new o.Z({color:"rgba(241, 174, 174, 0.26)"}),stroke:new i.Z({color:"#db3434",width:1}),image:new r.Z({radius:4,stroke:new i.Z({color:"#db3434",width:1}),fill:new o.Z({color:"rgba(241, 174, 174, 0.26)"})})}),s=t=>{t&&(null==t.getId()||e.getSource().getFeatureById(t.getId())===t)&&e.getSource().removeFeature(t)},c=()=>{this.clearFeatures(),this.map.render()};super(e,e=>{t?t(e,e=>{s(e),c()},()=>{c()}):(e.forEach(e=>{s(e)}),c())},{style:a.style||l,filter:a.filter})}}var m=a("./libs/map/src/components/layer-style/vl-map-layer-style.ts"),g=a("./libs/map/src/components/action/layer-action/vl-map-layer-action.ts");let u=class extends g.N{get style(){return this._style}set style(e){e instanceof m.W?this._style=e.style:this._style=e,this._processAction()}onDelete(e){this.__callback=e}appliesTo(e,t){return!0}get _callback(){return(e,t,a)=>{this.__callback?this.__callback(e,t,a):e.forEach(e=>t(e))}}_createAction(e){let t={style:this._style,filter:this.appliesTo.bind(this)};return new p(e,this._callback,t)}};u=function(e,t,a,l){var n,o=arguments.length,i=o<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,a):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,l);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(i=(o<3?n(i):o>3?n(t,a,i):n(t,a))||i);return o>3&&i&&Object.defineProperty(t,a,i),i}([(0,l.a6)("vl-map-delete-action")],u)},"./libs/map/src/components/action/layer-action/modify-action/vl-map-modify-action.ts":(e,t,a)=>{var l=a("./libs/common/utilities/src/index.ts"),n=a("./libs/map/src/actions/layer/composite-vector-layer.ts"),o=a("./node_modules/ol/interaction/Modify.js"),i=a("./libs/map/src/actions/snap/snap-interaction.ts"),r=a("./libs/map/src/actions/select/select-action.ts");class s extends r.v{constructor(e,t,a={}){if(super(e,null,{filter:a.filter}),this.options=a,this.modifyInteraction=new o.Z({features:this.selectInteraction.getFeatures()}),this.addInteraction(this.modifyInteraction),a&&a.snapping){let t={...a.snapping};t.layer?this.addInteraction(new i.R(t.layer.getSource(),a.snapping)):this.addInteraction(new i.R(e.getSource(),a.snapping))}this.modifyInteraction.on("modifystart",e=>{let t=e.features.getArray()[0].getGeometry();this.currentGeometryBeingModified=t.clone()}),this.modifyInteraction.on("modifyend",e=>{e.features.forEach(e=>{t(e,e=>{e.setGeometry(this.currentGeometryBeingModified)})})})}activate(){this.options.snapping&&this.options.snapping.layer&&this.map.addLayer(this.options.snapping.layer),super.activate()}deactivate(){this.options.snapping&&this.options.snapping.layer&&this.map.removeLayer(this.options.snapping.layer),super.deactivate()}}var c=a("./libs/map/src/components/layer/vector-layer/vl-map-vector-layer.ts"),d=a("./libs/map/src/components/action/layer-action/vl-map-layer-action.ts");let p=class extends d.N{static get _observedAttributes(){return["snapping","snapping-pixel-tolerance"]}disconnectedCallback(){this.__removeSnappingLayerStyleChangedEventListener()}onModify(e){this.__callback=e}appliesTo(e,t){return!0}_createAction(e){let t={snapping:this.__snappingOptions,filter:this.appliesTo.bind(this)};return new s(e,this._callback,t)}_snappingChangedCallback(){this._processAction()}_snappingPixelToleranceChangedCallback(){this._processAction()}get __snappingOptions(){return void 0===this.dataset.vlSnapping||!(this.__snappingLayers.length>0)||{layer:this.__createSnappingLayer(),pixelTolerance:this.dataset.vlSnappingPixelTolerance||10,node:!1,vertex:!1}}__createSnappingLayer(){return this.__snappingLayer=new n.S(this.__snappingLayers.map(e=>e._layer),{}),this.__addSnappingLayerStyleChangedEventListener(),this.__snappingLayer}__addSnappingLayerStyleChangedEventListener(){if(this.__snappingLayers&&this.__snappingLayers.length>0){let e=this.__snappingLayers[0];this.__snappingLayer.setStyle(e.style),this.__onSnappingLayerStyleChanged=e=>this.__snappingLayer.setStyle(e.target.style),e.addEventListener(c.b.EVENTS.styleChanged,this.__onSnappingLayerStyleChanged)}}__removeSnappingLayerStyleChangedEventListener(){this.__snappingLayers&&this.__snappingLayers.length>0&&this.__snappingLayers[0].removeEventListener(c.b.EVENTS.styleChanged,this.__onSnappingLayerStyleChanged)}get __snappingLayers(){return Array.from(this.querySelectorAll("vl-map-wfs-layer"))}};p=function(e,t,a,l){var n,o=arguments.length,i=o<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,a):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,l);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(i=(o<3?n(i):o>3?n(t,a,i):n(t,a))||i);return o>3&&i&&Object.defineProperty(t,a,i),i}([(0,l.a6)("vl-map-modify-action")],p)},"./libs/map/src/components/action/layer-action/select-action/vl-map-select-action.ts":(e,t,a)=>{a.d(t,{J:()=>r});var l=a("./libs/common/utilities/src/index.ts"),n=a("./libs/map/src/actions/select/select-action.ts"),o=a("./libs/map/src/components/layer-style/vl-map-layer-style.ts"),i=a("./libs/map/src/components/action/layer-action/vl-map-layer-action.ts");let r=class extends i.N{get style(){return this._style}set style(e){e instanceof o.W?this._style=e.style:this._style=e,this._processAction()}get _cluster(){return this.getAttribute("cluster")}mark(e,t){this._action&&e&&this._action.markFeatureWithId(e,t||this.layer)}removeMarks(){this._action&&this._action.demarkAllFeatures()}select(e){this.action&&e&&this._action.selectFeature(e)}onSelect(e){this.__callback=e}reset(){this.action&&this._action.clearFeatures()}appliesTo(e,t){return!0}_createAction(e){let t={style:this.style,cluster:void 0!==this._cluster,filter:this.appliesTo.bind(this)};return new n.v(e,this._callback,t)}};r=function(e,t,a,l){var n,o=arguments.length,i=o<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,a):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,l);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(i=(o<3?n(i):o>3?n(t,a,i):n(t,a))||i);return o>3&&i&&Object.defineProperty(t,a,i),i}([(0,l.a6)("vl-map-select-action")],r)},"./libs/map/src/components/baselayer/vl-map-base-layer-grb-ortho/vl-map-base-layer-grb-ortho.ts":(e,t,a)=>{var l=a("./libs/common/utilities/src/index.ts"),n=a("./libs/map/src/components/baselayer/vl-map-base-layer.ts");let o=class extends n.m{constructor(){super(),this.url="https://geo.api.vlaanderen.be/OMWRGBMRVL/wmts",this.layer="omwrgbmrvl",this.title="GRB ortho laag"}};o=function(e,t,a,l){var n,o=arguments.length,i=o<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,a):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,l);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(i=(o<3?n(i):o>3?n(t,a,i):n(t,a))||i);return o>3&&i&&Object.defineProperty(t,a,i),i}([(0,l.a6)("vl-map-baselayer-grb-ortho")],o)},"./libs/map/src/components/baselayer/vl-map-base-layer-grb/vl-map-base-layer-grb.ts":(e,t,a)=>{var l=a("./libs/common/utilities/src/index.ts"),n=a("./libs/map/src/components/baselayer/vl-map-base-layer.ts");let o=class extends n.m{constructor(){super(),this.url="https://geo.api.vlaanderen.be/GRB/wmts",this.layer="grb_bsk",this.title="GRB basis laag"}};o=function(e,t,a,l){var n,o=arguments.length,i=o<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,a):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,l);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(i=(o<3?n(i):o>3?n(t,a,i):n(t,a))||i);return o>3&&i&&Object.defineProperty(t,a,i),i}([(0,l.a6)("vl-map-baselayer-grb")],o)},"./libs/map/src/components/layer-style/vl-map-layer-circle-style/vl-map-layer-circle-style.ts":(e,t,a)=>{a.d(t,{e:()=>c});var l=a("./libs/common/utilities/src/index.ts"),n=a("./node_modules/ol/style/Circle.js"),o=a("./node_modules/ol/style/Fill.js"),i=a("./node_modules/ol/style/Stroke.js"),r=a("./node_modules/ol/style/Style.js"),s=a("./libs/map/src/components/layer-style/vl-map-layer-style.ts");let c=class extends s.W{get size(){let e=Number(this.getAttribute("size"));return e||5}get borderColor(){return this.getAttribute("border-color")||"rgba(0, 0, 0, 0)"}get borderSize(){return this.getAttribute("border-size")||1}get clusterTextColor(){return this.getAttribute("cluster-text-color")||"#FFF"}get clusterColor(){return this.getAttribute("cluster-color")||"rgba(2, 85, 204, 1)"}get clusterMultiplier(){let e=Number(this.getAttribute("cluster-multiplier"));return isNaN(e)||0===e?1:e}get _styleFunction(){return(e,t)=>{let a=e&&e.get&&e.get("features")||[],{textColor:l,color:s,borderColor:c,borderSize:d}=this,p=a.length||1,m=Math.max(1.5,p.toString().length),g=1===p?1:this.clusterMultiplier*m,u=this.size*g;if(this.parentElement&&this.parentElement.cluster){if(this._hasUniqueStyles(a)){let e=a[0].getStyle();e instanceof Function&&(e=e());let t=e.getImage();s=t.getFill().getColor(),c=t.getStroke().getColor(),d=t.getStroke().getWidth(),u=p>1?t.getRadius()*g:t.getRadius()}else this._containsStyle(a)&&(s=this.clusterColor,l=this.clusterTextColor)}return new r.ZP({image:new n.Z({fill:new o.Z({color:s}),stroke:new i.Z({color:c,width:Number(d)}),radius:u}),text:this._getTextStyle(e,l),zIndex:this._featureZIndex(e)})}}get featureLabelFunction(){return e=>{let t=e&&e.get&&e.get("features")||[];if(Array.isArray(t)&&t.length>0){let e=t.length||1;return e>1?e.toString():this.__getFeatureText(t[0])}return this.__getFeatureText(e)}}__getFeatureText(e){return this.textFeatureAttributeName&&this.textFeatureAttributeName?e.get(this.textFeatureAttributeName):""}};c=function(e,t,a,l){var n,o=arguments.length,i=o<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,a):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,l);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(i=(o<3?n(i):o>3?n(t,a,i):n(t,a))||i);return o>3&&i&&Object.defineProperty(t,a,i),i}([(0,l.a6)("vl-map-layer-circle-style")],c)},"./libs/map/src/components/layer-switcher/vl-map-layer-switcher.ts":(e,t,a)=>{var l=a("./libs/common/utilities/src/index.ts"),n=a("./libs/components/src/index.ts"),o=a("./libs/elements/src/index.ts"),i=a("./node_modules/lit/index.js"),r=a("./node_modules/lit/decorators.js");let s=(0,i.iv)`
    :host {
        display: block;
    }

    :host label {
        display: block;
    }

    :host [data-vl-layer] {
        display: block;
    }
`,c=class extends l.fS{static{(0,l.YV)([o.tB,n.EM])}static get styles(){return[o.CX,s]}static get properties(){return{componentTitle:{type:String,attribute:"data-vl-title",reflect:!0},layers:{type:Array,attribute:"layers"},vlMapLayers:{attribute:!1}}}constructor(){super(),this.componentTitle="Kaartlagen",this.layers=null,this.vlMapLayers=[],this.mapElement=null,this.layerObserver=null,this.computeDisabledAttributes=()=>{let e=this.mapElement?.resolution;this.vlMapLayers.forEach(t=>{let a=this.shadowRoot?.querySelector(`vl-checkbox[data-vl-layer="${t.title}"]`);t.isVisibleAtResolution(e)?a?.removeAttribute("disabled"):a?.setAttribute("disabled","")})}}async connectedCallback(){super.connectedCallback(),this.mapElement=this.closest("vl-map"),await this.layersReady(),this.vlMapLayers=this.getVlMapLayers(),this.mapElement?.on("moveend",this.computeDisabledAttributes),this.layers||this.observeMapLayers()}async willUpdate(e){e.has("layers")&&(await this.layersReady(),this.vlMapLayers=this.getVlMapLayers())}updated(){this.computeDisabledAttributes()}disconnectedCallback(){super.disconnectedCallback(),this.layerObserver?.disconnect(),this.mapElement?.un("moveend",this.computeDisabledAttributes)}render(){return(0,i.dy)`
            <div>
                <label is="vl-form-label">${this.componentTitle}</label>
                ${this.vlMapLayers.map(e=>(0,i.dy)`
                        <vl-checkbox
                            data-vl-label=${e.title}
                            data-vl-layer=${e.title}
                            checked=${e.visible}
                            @change=${()=>e.visible=!e.visible}
                        ></vl-checkbox>
                    `)}
            </div>
        `}async layersReady(){return this.mapElement?Promise.all(this.mapElement?.nonBaseLayers.map(e=>l.wA(()=>e.ready))):new Promise((e,t)=>t())}getVlMapLayers(){return this.layers&&Array.isArray(this.layers)?this.mapElement?.nonBaseLayers.filter(e=>this.layers?.includes(e.name))||[]:this.mapElement?.nonBaseLayers||[]}observeMapLayers(){this.layerObserver=new MutationObserver(e=>{e.forEach(e=>{e.addedNodes.forEach(e=>{e instanceof HTMLElement&&e.hasAttribute("data-vl-is-layer")&&(this.vlMapLayers=[...this.vlMapLayers,e])}),e.removedNodes.forEach(e=>{e instanceof HTMLElement&&e.hasAttribute("data-vl-is-layer")&&(this.vlMapLayers=this.vlMapLayers.filter(t=>e!==t))})})}),this.layerObserver.observe(this.mapElement,{subtree:!0,childList:!0})}};c=function(e,t,a,l){var n,o=arguments.length,i=o<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,a):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,l);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(i=(o<3?n(i):o>3?n(t,a,i):n(t,a))||i);return o>3&&i&&Object.defineProperty(t,a,i),i}([(0,r.Mo)("vl-map-layer-switcher")],c)},"./libs/map/src/components/legend/vl-map-legend.ts":(e,t,a)=>{a.d(t,{q:()=>g});var l=a("./node_modules/lit/index.js"),n=a("./node_modules/lit/decorators.js"),o=a("./libs/map/src/components/layer/vector-layer/vl-map-vector-layer.ts"),i=a("./libs/map/src/components/layer-style/vl-map-layer-circle-style/vl-map-layer-circle-style.ts"),r=a("./libs/map/src/actions/map-actions.uig-css.ts"),s=a("./libs/elements/src/index.ts");let c=(0,l.iv)`
    .ol-box {
        box-sizing: border-box;
        border-radius: 2px;
        border: 1.5px solid rgb(179, 197, 219);
        background-color: rgba(255, 255, 255, 0.4);
    }

    .ol-mouse-position {
        top: 8px;
        right: 8px;
        position: absolute;
    }

    .ol-scale-line {
        background: rgba(0, 60, 136, 0.3);
        border-radius: 4px;
        bottom: 8px;
        left: 8px;
        padding: 2px;
        position: absolute;
    }
    .ol-scale-line-inner {
        border: 1px solid #eee;
        border-top: none;
        color: #eee;
        font-size: 10px;
        text-align: center;
        margin: 1px;
        will-change: contents, width;
        transition: all 0.25s;
    }
    .ol-scale-bar {
        position: absolute;
        bottom: 8px;
        left: 8px;
    }
    .ol-scale-step-marker {
        width: 1px;
        height: 15px;
        background-color: #000000;
        float: right;
        z-index: 10;
    }
    .ol-scale-step-text {
        position: absolute;
        bottom: -5px;
        font-size: 12px;
        z-index: 11;
        color: #000000;
        text-shadow: -2px 0 #ffffff, 0 2px #ffffff, 2px 0 #ffffff, 0 -2px #ffffff;
    }
    .ol-scale-text {
        position: absolute;
        font-size: 14px;
        text-align: center;
        bottom: 25px;
        color: #000000;
        text-shadow: -2px 0 #ffffff, 0 2px #ffffff, 2px 0 #ffffff, 0 -2px #ffffff;
    }
    .ol-scale-singlebar {
        position: relative;
        height: 10px;
        z-index: 9;
        box-sizing: border-box;
        border: 1px solid black;
    }

    .ol-unsupported {
        display: none;
    }
    .ol-viewport,
    .ol-unselectable {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    .ol-viewport canvas {
        all: unset;
    }
    .ol-selectable {
        -webkit-touch-callout: default;
        -webkit-user-select: text;
        -moz-user-select: text;
        -ms-user-select: text;
        user-select: text;
    }
    .ol-grabbing {
        cursor: -webkit-grabbing;
        cursor: -moz-grabbing;
        cursor: grabbing;
    }
    .ol-grab {
        cursor: move;
        cursor: -webkit-grab;
        cursor: -moz-grab;
        cursor: grab;
    }
    .ol-control {
        position: absolute;
        background-color: rgba(255, 255, 255, 0.4);
        border-radius: 4px;
        padding: 2px;
    }
    .ol-control:hover {
        background-color: rgba(255, 255, 255, 0.6);
    }
    .ol-zoom {
        top: 0.5em;
        left: 0.5em;
    }
    .ol-rotate {
        top: 0.5em;
        right: 0.5em;
        transition: opacity 0.25s linear, visibility 0s linear;
    }
    .ol-rotate.ol-hidden {
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.25s linear, visibility 0s linear 0.25s;
    }
    .ol-zoom-extent {
        top: 4.643em;
        left: 0.5em;
    }
    .ol-full-screen {
        right: 0.5em;
        top: 0.5em;
    }

    .ol-control button {
        display: block;
        margin: 1px;
        padding: 0;
        color: white;
        font-weight: bold;
        text-decoration: none;
        font-size: inherit;
        text-align: center;
        height: 1.375em;
        width: 1.375em;
        line-height: 0.4em;
        background-color: rgba(0, 60, 136, 0.5);
        border: none;
        border-radius: 2px;
    }
    .ol-control button::-moz-focus-inner {
        border: none;
        padding: 0;
    }
    .ol-zoom-extent button {
        line-height: 1.4em;
    }
    .ol-compass {
        display: block;
        font-weight: normal;
        font-size: 1.2em;
        will-change: transform;
    }
    .ol-touch .ol-control button {
        font-size: 1.5em;
    }
    .ol-touch .ol-zoom-extent {
        top: 5.5em;
    }
    .ol-control button:hover,
    .ol-control button:focus {
        text-decoration: none;
        background-color: rgba(0, 60, 136, 0.7);
    }
    .ol-zoom .ol-zoom-in {
        border-radius: 2px 2px 0 0;
    }
    .ol-zoom .ol-zoom-out {
        border-radius: 0 0 2px 2px;
    }

    .ol-attribution {
        text-align: right;
        bottom: 0.5em;
        right: 0.5em;
        max-width: calc(100% - 1.3em);
        display: flex;
        flex-flow: row-reverse;
        align-items: center;
    }
    .ol-attribution a {
        color: rgba(0, 60, 136, 0.7);
        text-decoration: none;
    }
    .ol-attribution ul {
        margin: 0;
        padding: 1px 0.5em;
        color: #000;
        text-shadow: 0 0 2px #fff;
        font-size: 12px;
    }
    .ol-attribution li {
        display: inline;
        list-style: none;
    }
    .ol-attribution li:not(:last-child):after {
        content: ' ';
    }
    .ol-attribution img {
        max-height: 2em;
        max-width: inherit;
        vertical-align: middle;
    }
    .ol-attribution button {
        flex-shrink: 0;
    }
    .ol-attribution.ol-collapsed ul {
        display: none;
    }
    .ol-attribution:not(.ol-collapsed) {
        background: rgba(255, 255, 255, 0.8);
    }
    .ol-attribution.ol-uncollapsible {
        bottom: 0;
        right: 0;
        border-radius: 4px 0 0;
    }
    .ol-attribution.ol-uncollapsible img {
        margin-top: -0.2em;
        max-height: 1.6em;
    }
    .ol-attribution.ol-uncollapsible button {
        display: none;
    }

    .ol-zoomslider {
        top: 4.5em;
        left: 0.5em;
        height: 200px;
    }
    .ol-zoomslider button {
        position: relative;
        height: 10px;
    }

    .ol-touch .ol-zoomslider {
        top: 5.5em;
    }

    .ol-overviewmap {
        left: 0.5em;
        bottom: 0.5em;
    }
    .ol-overviewmap.ol-uncollapsible {
        bottom: 0;
        left: 0;
        border-radius: 0 4px 0 0;
    }
    .ol-overviewmap .ol-overviewmap-map,
    .ol-overviewmap button {
        display: block;
    }
    .ol-overviewmap .ol-overviewmap-map {
        border: 1px solid #7b98bc;
        height: 150px;
        margin: 2px;
        width: 150px;
    }
    .ol-overviewmap:not(.ol-collapsed) button {
        bottom: 2px;
        left: 2px;
        position: absolute;
    }
    .ol-overviewmap.ol-collapsed .ol-overviewmap-map,
    .ol-overviewmap.ol-uncollapsible button {
        display: none;
    }
    .ol-overviewmap:not(.ol-collapsed) {
        background: rgba(255, 255, 255, 0.8);
    }
    .ol-overviewmap-box {
        border: 2px dotted rgba(0, 60, 136, 0.7);
    }

    .ol-overviewmap .ol-overviewmap-box:hover {
        cursor: move;
    }
`,d=(0,l.iv)`
    div.uig-map-legend {
        position: absolute;
        z-index: 1;
        display: flex;
        background-color: white;
        border: 1px #cbd2da solid;
        padding-right: 0.5em;
    }

    span.uig-map-legend-title {
        padding-left: 0.5em;
        font-weight: bolder;
    }

    span.uig-map-legend-text {
        vertical-align: middle;
        font-size: 0.8em;
        line-height: 1em;
    }

    div.uig-map-legend-icon {
        vertical-align: middle;
        height: 0.8em;
        width: 0.8em;
        margin-left: 0.5em;
        display: inline-block;
    }

    div.uig-map-legend-image {
        display: flex;
        align-items: center;
    }
`,p=[d,...s.CX,c,r.Z];var m=a("./libs/common/utilities/src/index.ts");let g={TOP_LEFT:"top_left",TOP_RIGHT:"top_right",BOTTOM_LEFT:"bottom_left",BOTTOM_RIGHT:"bottom_right"},u=class extends m.fS{static get styles(){return[(0,l.iv)`
                ${(0,l.$m)(p)}
            `]}constructor(){super(),this.items=[],this.placement=g.BOTTOM_RIGHT}static get properties(){return{left:{type:String,reflect:!0},top:{type:String,reflect:!0},right:{type:String,reflect:!0},bottom:{type:String,reflect:!0},placement:{type:String,attribute:"data-vl-placement",reflect:!0}}}getPosition(){let e={};switch(this.placement){case g.TOP_LEFT:e.top="10px",e.left="10px",e.right=void 0,e.bottom=void 0;break;case g.TOP_RIGHT:e.top="10px",e.left=void 0,e.right="10px",e.bottom=void 0;break;case g.BOTTOM_LEFT:e.top=void 0,e.left="8px",e.right=void 0,e.bottom="40px";break;case g.BOTTOM_RIGHT:e.top=void 0,e.left=void 0,e.right="58px",e.bottom="10px"}return{top:this.top??e.top,left:this.left??e.left,right:this.right??e.right,bottom:this.bottom??e.bottom}}connectedCallback(){super.connectedCallback(),this.mapElement=this.closest("vl-map");let e=[].concat(this.mapElement.wmsLayers),t=[].concat(this.mapElement.featuresLayers,this.mapElement.wfsLayers);e.forEach(e=>{e&&this.items.push({url:this.legendUrl(e),name:e.dataset.vlName})}),t.forEach(e=>{e.addEventListener(o.b.EVENTS.styleChanged,()=>{this.updateLegendGeometryItems(t)})})}legendUrl(e){let t=new URL(e.dataset.vlUrl),a=new URLSearchParams({service:"WMS",request:"GetLegendGraphic",format:"image/png",layer:e.dataset.vlLayers,legend_options:"layout:horizontal"});return new URL(`?${a}`,t)}updateLegendGeometryItems(e){e.forEach(e=>{if(1===e._styles.length){let t=e._styles[0];t.name?this.items.push({style:t,name:e.name}):void 0!==e.name&&null!=e.name&&this.items.push({style:t,name:e.name})}else{let t=e._styles?.filter(e=>e.name)?.map(e=>({style:e,name:e.name}))||[],a=this.items.filter(e=>e.url);this.items=[...t,...a]}}),this.requestUpdate()}render(){return this.items?(0,l.dy)` <div class="uig-map-legend" style="${this.generateItemStyle()}">
            <div>
                <span class="uig-map-legend-text uig-map-legend-title">Legende: </span>
            </div>
            ${this.items.map(e=>e.style?(0,l.dy)` <div class="uig-map-legend-item">
                        <div class="uig-map-legend-icon" style="${this.generateIconStyle(e.style)}"></div>
                        <span class="uig-map-legend-text">${e.name}</span>
                    </div>`:(0,l.dy)`<div class="uig-map-legend-item uig-map-legend-image">
                        <img alt="map legend image" class="uig-map-legend-icon" src="${e.url}" />
                    </div>`)}
        </div>`:null}generateItemStyle(){let e=this.getPosition();return(e.left?`;left:${e.left}`:"")+(e.top?`;top:${e.top}`:"")+(e.right?`;right:${e.right}`:"")+(e.bottom?`;bottom:${e.bottom}`:"")}generateIconStyle(e){let t="";return e instanceof i.e&&(t="border-radius: 50%;"),`border: ${e.borderSize}px solid ${e.borderColor}; background-color:${e.color};${t}`}};u=function(e,t,a,l){var n,o=arguments.length,i=o<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,a):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,l);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(i=(o<3?n(i):o>3?n(t,a,i):n(t,a))||i);return o>3&&i&&Object.defineProperty(t,a,i),i}([(0,n.Mo)("vl-map-legend")],u)},"./libs/map/src/components/overview-map/vl-map-overview-map.ts":(e,t,a)=>{var l=a("./libs/common/utilities/src/index.ts");let n=class extends(0,l.W$)(HTMLElement){connectedCallback(){super.connectedCallback(),this._configureMap()}get _map(){if(this.parentNode)return this.parentNode.map}_configureMap(){(async()=>{for(;!(this._map&&this._map.overviewMapControl);)await new Promise(e=>setTimeout(e,100));this._map.addControl(this._map.overviewMapControl)})()}};n=function(e,t,a,l){var n,o=arguments.length,i=o<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,a):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,l);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(i=(o<3?n(i):o>3?n(t,a,i):n(t,a))||i);return o>3&&i&&Object.defineProperty(t,a,i),i}([(0,l.a6)("vl-map-overview-map")],n)},"./libs/map/src/components/side-sheet/vl-map-side-sheet.ts":(e,t,a)=>{var l=a("./libs/common/utilities/src/index.ts"),n=a("./libs/components/src/index.ts");let o=class extends n.vG{constructor(){super(`
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
    `)}connectedCallback(){super.connectedCallback(),this.setAttribute("data-vl-absolute",""),this.hasAttribute("data-vl-right")||this.setAttribute("data-vl-left","")}_rightChangedCallback(e,t){void 0!=t?this.removeAttribute("data-vl-left"):this.setAttribute("data-vl-left","")}};o=function(e,t,a,l){var n,o=arguments.length,i=o<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,a):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,l);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(i=(o<3?n(i):o>3?n(t,a,i):n(t,a))||i);return o>3&&i&&Object.defineProperty(t,a,i),i}([(0,l.a6)("vl-map-side-sheet")],o)},"./libs/map/src/stories/vl-map.stories.ts":(e,t,a)=>{a.r(t),a.d(t,{MapDefault:()=>_,MapFullHeight:()=>k,MapPlayground:()=>j,default:()=>w});var l=a("./node_modules/@storybook/addon-actions/dist/index.mjs"),n=a("./libs/map/src/vl-map.model.ts"),o=a("./libs/common/storybook/src/index.ts");let i={allowFullscreen:!1,disableEscape:!1,disableRotation:!1,disableMousewheelZoom:!1,disableKeyboard:!1,fullHeight:!1,noBorder:!1,activeActionChange:(0,l.aD)(n.Ks.ACTIVE_ACTION_CHANGED),layerVisibleChange:(0,l.aD)(n.Ks.LAYER_VISIBLE_CHANGED)},r={allowFullscreen:{name:"data-vl-allow-fullscreen",description:"Laat de map toe afgebeeld te worden in fullscreen.<br>Dit kan niet gebruikt worden op mobile.<br>Dit attribuut is niet reactief.",table:{type:{summary:o.vK.BOOLEAN},category:o.aA.ATTRIBUTES,defaultValue:{summary:i.allowFullscreen}}},disableEscape:{name:"data-vl-disable-escape-key",description:"Schakelt de escape-key uit.<br>Dit attribuut is niet reactief.",table:{type:{summary:o.vK.BOOLEAN},category:o.aA.ATTRIBUTES,defaultValue:{summary:i.disableEscape}}},disableRotation:{name:"data-vl-disable-rotation",description:"Schakelt het roteren van de map uit.<br>Dit attribuut is niet reactief.",table:{type:{summary:o.vK.BOOLEAN},category:o.aA.ATTRIBUTES,defaultValue:{summary:i.disableRotation}}},disableMousewheelZoom:{name:"data-vl-disable-mouse-wheel-zoom",description:"Schakelt het zoomen van de map via het muiswiel uit.<br>Dit attribuut is niet reactief.",table:{type:{summary:o.vK.BOOLEAN},category:o.aA.ATTRIBUTES,defaultValue:{summary:i.disableMousewheelZoom}}},disableKeyboard:{name:"data-vl-disable-keyboard",description:"Schakelt de keyboard input uit voor de map.<br>Dit attribuut is niet reactief.",table:{type:{summary:o.vK.BOOLEAN},category:o.aA.ATTRIBUTES,defaultValue:{summary:i.disableKeyboard}}},fullHeight:{name:"data-vl-full-height",description:"De map neemt de volledige beschikbare hoogte in van zijn parent.<br>Zie de docs pagina voor meer informatie over het gebruik van dit attribuut.",table:{type:{summary:o.vK.BOOLEAN},category:o.aA.ATTRIBUTES,defaultValue:{summary:i.fullHeight}}},noBorder:{name:"data-vl-no-border",description:"De border rond de map wordt niet afgebeeld.",table:{type:{summary:o.vK.BOOLEAN},category:o.aA.ATTRIBUTES,defaultValue:{summary:i.noBorder}}},activeActionChange:{name:n.Ks.ACTIVE_ACTION_CHANGED,description:"Afgevuurd als de actieve map-actie verandert.",table:{type:{summary:"{ previous?: VlMapAction, current?: VlMapAction }"},category:o.aA.EVENTS}},layerVisibleChange:{name:n.Ks.LAYER_VISIBLE_CHANGED,description:"Afgevuurd als de visible state van een map-layer verandert.",table:{type:{summary:"{ layer: VlMapLayer, visible: boolean }"},category:o.aA.EVENTS}}};var s=a("./node_modules/lit/index.js");a("./node_modules/react/index.js");var c=a("./node_modules/react/jsx-runtime.js"),d=a("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),p=a("./node_modules/@storybook/blocks/dist/index.mjs");function m(e){let t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",ul:"ul",li:"li",strong:"strong",a:"a"},(0,d.ah)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h1,{id:"map",children:"Map"}),"\n",(0,c.jsxs)(t.p,{children:["Gebruik de ",(0,c.jsx)(t.code,{children:"map"})," component om een kaart af te beelden met verschillende lagen en acties."]}),"\n",(0,c.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-js",children:"import { VlMap } from '@domg-wc/map';\n"})}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-html",children:"<vl-map></vl-map>\n"})}),"\n",(0,c.jsx)(p.Xz,{of:_}),"\n",(0,c.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,c.jsx)(p.Ed,{of:_}),"\n",(0,c.jsx)(t.h2,{id:"varianten",children:"Varianten"}),"\n",(0,c.jsx)(t.h3,{id:"volledige-hoogte",children:"Volledige hoogte"}),"\n",(0,c.jsx)(t.p,{children:"De map de volledige beschikbare hoogte in laten nemen kan op de volgende manier:"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsxs)(t.li,{children:["plaats op de parent een ",(0,c.jsx)(t.code,{children:"height"})," of een ",(0,c.jsx)(t.code,{children:"min-height"})]}),"\n",(0,c.jsxs)(t.li,{children:["plaats op de parent ",(0,c.jsx)(t.code,{children:"display: flex"})," en ",(0,c.jsx)(t.code,{children:"flex-direction: column"})]}),"\n",(0,c.jsxs)(t.li,{children:["plaats op de vl-map het attribuut ",(0,c.jsx)(t.code,{children:"data-vl-full-height"})]}),"\n",(0,c.jsxs)(t.li,{children:["zorg dat de parent ",(0,c.jsx)(t.strong,{children:"geen elementen"})," heeft met ",(0,c.jsx)(t.code,{children:"position: fixed"})," die deel uit moeten maken van de hoogte"]}),"\n"]}),"\n",(0,c.jsx)(p.Xz,{of:k}),"\n",(0,c.jsx)(t.h3,{id:"playground",children:"Playground"}),"\n",(0,c.jsx)(t.p,{children:"Zie de code onder de story voor het volledige voorbeeld."}),"\n",(0,c.jsx)(p.Xz,{of:j}),"\n",(0,c.jsxs)("details",{children:[(0,c.jsx)("summary",{children:"TypeScript code"}),(0,c.jsx)(p.Hw,{code:"export const getActionElement = (name)=>getLastElementByClassName(`${name}-action`);\nexport const getToggleButton = (name)=>getLastElementByClassName(`${name}-toggle-button`);\nexport const actionIdentifiers = [\n    'draw-point',\n    'draw-line',\n    'draw-polygon',\n    'modify',\n    'delete'\n];\n// Make sure the class that is given is unique and is not being used in other stories of the component.\nexport const getLastElementByClassName = (className)=>{\n    const items = document.getElementsByClassName(className);\n    return items[items.length - 1];\n};\nexport const handleActiveActionChange = ({ detail: { previous, current } })=>{\n    // Activate/deactivate external controls when an action changes its state\n    actionIdentifiers.forEach((actionIdentifier)=>{\n        if (previous === getActionElement(actionIdentifier)) {\n            getToggleButton(actionIdentifier).active = false;\n        } else if (current === getActionElement(actionIdentifier)) {\n            getToggleButton(actionIdentifier).active = true;\n        }\n    });\n};\nexport const handleLayerVisibleChange = ({ detail: { layer, visible } })=>{\n    // Enable/disable external controls when an action changes its state\n    const layerActions = layer.getElementsByClassName('action');\n    for (const layerAction of layerActions){\n        actionIdentifiers.forEach((actionIdentifier)=>{\n            if (layerAction === getActionElement(actionIdentifier)) {\n                getToggleButton(actionIdentifier).disabled = !visible;\n            }\n        });\n    }\n};\nexport const handleOpacitySliderChange = ({ detail: { value } })=>{\n    // Set the opacity of all feature layers based on the value of the input slider\n    const featureLayers = document.querySelectorAll('vl-map-features-layer');\n    featureLayers?.forEach((layer)=>{\n        layer.setAttribute('data-vl-opacity', value / 100);\n    });\n};\n",language:"ts",dark:!0})]}),"\n",(0,c.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,c.jsx)(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,c.jsxs)(t.p,{children:["De ",(0,c.jsx)(t.code,{children:"map"})," component is een component van Departement Omgeving en heeft geen Digitaal Vlaanderen documentatie."]}),"\n",(0,c.jsx)(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-map--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Map"})}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlMap.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Map"})}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - Map"})})]})}let g=e=>v(`${e}-action`),u=e=>v(`${e}-toggle-button`),h=["draw-point","draw-line","draw-polygon","modify","delete"],v=e=>{let t=document.getElementsByClassName(e);return t[t.length-1]},b=({detail:{previous:e,current:t}})=>{h.forEach(a=>{e===g(a)?u(a).active=!1:t===g(a)&&(u(a).active=!0)})},y=({detail:{layer:e,visible:t}})=>{let a=e.getElementsByClassName("action");for(let e of a)h.forEach(a=>{e===g(a)&&(u(a).disabled=!t)})},f=({detail:{value:e}})=>{let t=document.querySelectorAll("vl-map-features-layer");t?.forEach(t=>{t.setAttribute("data-vl-opacity",e/100)})};var x=a("./libs/map/src/components/legend/vl-map-legend.ts");a("./libs/elements/src/index.ts"),a("./libs/components/src/index.ts"),a("./libs/map/src/vl-map.ts"),a("./libs/map/src/components/controls/vl-map-action-controls.ts"),a("./libs/map/src/components/controls/measure-control/vl-map-measure-control.ts"),a("./libs/map/src/components/side-sheet/vl-map-side-sheet.ts"),a("./libs/map/src/components/layer-switcher/vl-map-layer-switcher.ts"),a("./libs/map/src/components/overview-map/vl-map-overview-map.ts"),a("./libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts"),a("./libs/map/src/components/baselayer/vl-map-base-layer-grb/vl-map-base-layer-grb.ts"),a("./libs/map/src/components/baselayer/vl-map-base-layer-grb-ortho/vl-map-base-layer-grb-ortho.ts"),a("./libs/map/src/components/layer/vector-layer/vl-map-features-layer/vl-map-features-layer.ts"),a("./libs/map/src/components/layer-style/vl-map-layer-style.ts"),a("./libs/map/src/components/layer-style/vl-map-layer-circle-style/vl-map-layer-circle-style.ts"),a("./libs/map/src/components/action/draw-action/draw-point-action/vl-map-draw-point-action.ts"),a("./libs/map/src/components/action/draw-action/draw-line-action/vl-map-draw-line-action.ts"),a("./libs/map/src/components/action/draw-action/draw-polygon-action/vl-map-draw-polygon-action.ts"),a("./libs/map/src/components/action/draw-action/measure-action/vl-map-measure-action.ts"),a("./libs/map/src/components/action/layer-action/modify-action/vl-map-modify-action.ts"),a("./libs/map/src/components/action/layer-action/delete-action/vl-map-delete-action.ts"),a("./libs/map/src/components/action/layer-action/select-action/vl-map-select-action.ts");let w={title:"map/map",tags:["autodocs"],args:(0,o.T8)(i),argTypes:(0,o.xj)(r),parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,d.ah)(),e.components);return t?(0,c.jsx)(t,Object.assign({},e,{children:(0,c.jsx)(m,e)})):m(e)}}}},_=(0,o.yg)(i,({allowFullscreen:e,disableEscape:t,disableRotation:a,disableMousewheelZoom:l,disableKeyboard:n,noBorder:o,fullHeight:i})=>(0,s.dy)`
        <vl-map
            ?data-vl-allow-fullscreen=${e}
            ?data-vl-disable-escape-key=${t}
            ?data-vl-disable-rotation=${a}
            ?data-vl-disable-mouse-wheel-zoom=${l}
            ?data-vl-disable-keyboard=${n}
            ?data-vl-no-border=${o}
            ?data-vl-full-height=${i}
            data-vl-zoomInTooltip="Zoom in"
            data-vl-zoomOutTooltip="Zoom uit"
        >
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        </vl-map>
    `);_.storyName="vl-map - default";let k=(0,o.yg)(i,({allowFullscreen:e,disableEscape:t,disableRotation:a,disableMousewheelZoom:l,disableKeyboard:n,noBorder:o,fullHeight:i})=>(0,s.dy)`
        <div style="height: 800px; display: flex; flex-direction: column; border: 1px solid black">
            <vl-functional-header
                data-vl-sub-title=${"Voor lager, middelbaar en hoger onderwijs"}
                data-vl-title=${"School- en studietoelagen"}
                data-vl-margin-bottom=${"none"}
                ?data-vl-disable-back-link=${!0}
            ></vl-functional-header>
            <vl-map
                ?data-vl-allow-fullscreen=${e}
                ?data-vl-disable-escape-key=${t}
                ?data-vl-disable-rotation=${a}
                ?data-vl-disable-mouse-wheel-zoom=${l}
                ?data-vl-disable-keyboard=${n}
                ?data-vl-no-border=${o}
                ?data-vl-full-height=${i}
                data-vl-zoomInTooltip="Zoom in"
                data-vl-zoomOutTooltip="Zoom uit"
            >
                <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            </vl-map>
        </div>
    `);k.storyName="vl-map - full height",k.args={noBorder:!0,fullHeight:!0};let A="rgba(102, 51, 153, 0.6)",E="display: flex; gap: 1rem; align-items: center; margin-bottom: 1rem;",$={},j=(0,o.yg)(i,({allowFullscreen:e,disableEscape:t,disableRotation:a,disableMousewheelZoom:l,disableKeyboard:n,noBorder:o,fullHeight:i,activeActionChange:r,layerVisibleChange:c})=>(0,s.dy)`
        <vl-map
            ?data-vl-allow-fullscreen=${e}
            ?data-vl-disable-escape-key=${t}
            ?data-vl-disable-rotation=${a}
            ?data-vl-disable-mouse-wheel-zoom=${l}
            ?data-vl-disable-keyboard=${n}
            ?data-vl-no-border=${o}
            ?data-vl-full-height=${i}
            @vl-active-action-changed=${e=>{r({previous:e.detail.previous}),r({current:e.detail.current}),b(e)}}
            @vl-layer-visible-changed=${e=>{c(e.detail),y(e)}}
        >
            <vl-map-action-controls>
                <vl-map-measure-control></vl-map-measure-control>
            </vl-map-action-controls>

            <vl-map-side-sheet>
                <h6 is="vl-h6">Layers</h6>

                <vl-map-layer-switcher></vl-map-layer-switcher>
                <vl-input-slider data-vl-value=${100} @vl-change-value=${f}></vl-input-slider>

                <hr />

                <h6 is="vl-h6">Measure</h6>

                <div>
                    <button
                        is="vl-button"
                        @click=${()=>{g("measure").active=!0}}
                    >
                        Start
                    </button>
                    <button
                        is="vl-button"
                        @click=${()=>{g("measure").active=!1}}
                    >
                        Stop
                    </button>
                </div>

                <hr />

                <div style=${"width: 100%;"}>
                    <h6 is="vl-h6">Shapes</h6>

                    <div style="margin-bottom: 2rem;">
                        <vl-toggle-button
                            class="modify-toggle-button"
                            @click=${()=>{g("modify").active=!u("modify").active}}
                        >
                            Modify
                        </vl-toggle-button>
                        <vl-toggle-button
                            class="delete-toggle-button"
                            @click=${()=>{g("delete").active=!u("delete").active}}
                        >
                            Delete
                        </vl-toggle-button>
                    </div>

                    <div style=${E}>
                        <vl-toggle-button
                            class="draw-point-toggle-button"
                            data-vl-icon="pencil"
                            data-vl-text-hidden
                            @click=${()=>{g("draw-point").active=!u("draw-point").active}}
                        >
                            Toggle draw point action
                        </vl-toggle-button>
                        <p>Draw point</p>
                    </div>

                    <div style=${E}>
                        <vl-toggle-button
                            class="draw-line-toggle-button"
                            data-vl-icon="pencil"
                            data-vl-text-hidden
                            @click=${()=>{g("draw-line").active=!u("draw-line").active}}
                        >
                            Toggle draw line action
                        </vl-toggle-button>
                        <p>Draw line</p>
                    </div>

                    <div style=${E}>
                        <vl-toggle-button
                            class="draw-polygon-toggle-button"
                            data-vl-icon="pencil"
                            data-vl-text-hidden
                            @click=${()=>{g("draw-polygon").active=!u("draw-polygon").active}}
                        >
                            Toggle draw polygon action
                        </vl-toggle-button>
                        <p>Draw Polygon</p>
                    </div>
                </div>
            </vl-map-side-sheet>

            <vl-map-overview-map></vl-map-overview-map>

            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-baselayer-grb></vl-map-baselayer-grb>
            <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>

            <vl-map-features-layer data-vl-name="Shapes" .features=${$}>
                <vl-map-layer-style
                    data-vl-name="Shapes"
                    data-vl-border-color=${A}
                    data-vl-color=${A}
                ></vl-map-layer-style>
                <vl-map-layer-circle-style
                    data-vl-border-color=${A}
                    data-vl-color=${A}
                ></vl-map-layer-circle-style>

                <vl-map-draw-point-action class="draw-point-action action"></vl-map-draw-point-action>
                <vl-map-draw-line-action class="draw-line-action action"></vl-map-draw-line-action>
                <vl-map-draw-polygon-action class="draw-polygon-action action"></vl-map-draw-polygon-action>

                <vl-map-modify-action class="modify-action action"></vl-map-modify-action>
                <vl-map-delete-action class="delete-action action"></vl-map-delete-action>
                <vl-map-select-action class="select-action action" data-vl-default-active></vl-map-select-action>
            </vl-map-features-layer>

            <vl-map-features-layer data-vl-name="Measurements">
                <vl-map-layer-style
                    data-vl-color="rgba(6, 163, 247, 1)"
                    data-vl-border-size="2"
                    data-vl-border-color="rgba(6, 163, 247, 1)"
                ></vl-map-layer-style>
                <vl-map-measure-action class="measure-action action"></vl-map-measure-action>
            </vl-map-features-layer>
            <vl-map-legend data-vl-placement=${x.q.BOTTOM_RIGHT} right="140px"></vl-map-legend>
        </vl-map>
    `);j.storyName="vl-map - playground",_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:'story(mapArgs, ({\n  allowFullscreen,\n  disableEscape,\n  disableRotation,\n  disableMousewheelZoom,\n  disableKeyboard,\n  noBorder,\n  fullHeight\n}) => html`\n        <vl-map\n            ?data-vl-allow-fullscreen=${allowFullscreen}\n            ?data-vl-disable-escape-key=${disableEscape}\n            ?data-vl-disable-rotation=${disableRotation}\n            ?data-vl-disable-mouse-wheel-zoom=${disableMousewheelZoom}\n            ?data-vl-disable-keyboard=${disableKeyboard}\n            ?data-vl-no-border=${noBorder}\n            ?data-vl-full-height=${fullHeight}\n            data-vl-zoomInTooltip="Zoom in"\n            data-vl-zoomOutTooltip="Zoom uit"\n        >\n            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>\n        </vl-map>\n    `)',..._.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:"story(mapArgs, ({\n  allowFullscreen,\n  disableEscape,\n  disableRotation,\n  disableMousewheelZoom,\n  disableKeyboard,\n  noBorder,\n  fullHeight\n}) => html`\n        <div style=\"height: 800px; display: flex; flex-direction: column; border: 1px solid black\">\n            <vl-functional-header\n                data-vl-sub-title=${'Voor lager, middelbaar en hoger onderwijs'}\n                data-vl-title=${'School- en studietoelagen'}\n                data-vl-margin-bottom=${'none'}\n                ?data-vl-disable-back-link=${true}\n            ></vl-functional-header>\n            <vl-map\n                ?data-vl-allow-fullscreen=${allowFullscreen}\n                ?data-vl-disable-escape-key=${disableEscape}\n                ?data-vl-disable-rotation=${disableRotation}\n                ?data-vl-disable-mouse-wheel-zoom=${disableMousewheelZoom}\n                ?data-vl-disable-keyboard=${disableKeyboard}\n                ?data-vl-no-border=${noBorder}\n                ?data-vl-full-height=${fullHeight}\n                data-vl-zoomInTooltip=\"Zoom in\"\n                data-vl-zoomOutTooltip=\"Zoom uit\"\n            >\n                <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>\n            </vl-map>\n        </div>\n    `)",...k.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:'story(mapArgs, ({\n  allowFullscreen,\n  disableEscape,\n  disableRotation,\n  disableMousewheelZoom,\n  disableKeyboard,\n  noBorder,\n  fullHeight,\n  activeActionChange,\n  layerVisibleChange\n}) => html`\n        <vl-map\n            ?data-vl-allow-fullscreen=${allowFullscreen}\n            ?data-vl-disable-escape-key=${disableEscape}\n            ?data-vl-disable-rotation=${disableRotation}\n            ?data-vl-disable-mouse-wheel-zoom=${disableMousewheelZoom}\n            ?data-vl-disable-keyboard=${disableKeyboard}\n            ?data-vl-no-border=${noBorder}\n            ?data-vl-full-height=${fullHeight}\n            @vl-active-action-changed=${event => {\n  activeActionChange({\n    previous: event.detail.previous\n  });\n  activeActionChange({\n    current: event.detail.current\n  });\n  handleActiveActionChange(event);\n}}\n            @vl-layer-visible-changed=${event => {\n  layerVisibleChange(event.detail);\n  handleLayerVisibleChange(event);\n}}\n        >\n            <vl-map-action-controls>\n                <vl-map-measure-control></vl-map-measure-control>\n            </vl-map-action-controls>\n\n            <vl-map-side-sheet>\n                <h6 is="vl-h6">Layers</h6>\n\n                <vl-map-layer-switcher></vl-map-layer-switcher>\n                <vl-input-slider data-vl-value=${100} @vl-change-value=${handleOpacitySliderChange}></vl-input-slider>\n\n                <hr />\n\n                <h6 is="vl-h6">Measure</h6>\n\n                <div>\n                    <button\n                        is="vl-button"\n                        @click=${() => {\n  getActionElement(\'measure\').active = true;\n}}\n                    >\n                        Start\n                    </button>\n                    <button\n                        is="vl-button"\n                        @click=${() => {\n  getActionElement(\'measure\').active = false;\n}}\n                    >\n                        Stop\n                    </button>\n                </div>\n\n                <hr />\n\n                <div style=${toggleGroupStyling}>\n                    <h6 is="vl-h6">Shapes</h6>\n\n                    <div style="margin-bottom: 2rem;">\n                        <vl-toggle-button\n                            class="modify-toggle-button"\n                            @click=${() => {\n  getActionElement(\'modify\').active = !getToggleButton(\'modify\').active;\n}}\n                        >\n                            Modify\n                        </vl-toggle-button>\n                        <vl-toggle-button\n                            class="delete-toggle-button"\n                            @click=${() => {\n  getActionElement(\'delete\').active = !getToggleButton(\'delete\').active;\n}}\n                        >\n                            Delete\n                        </vl-toggle-button>\n                    </div>\n\n                    <div style=${toggleItemStyling}>\n                        <vl-toggle-button\n                            class="draw-point-toggle-button"\n                            data-vl-icon="pencil"\n                            data-vl-text-hidden\n                            @click=${() => {\n  getActionElement(\'draw-point\').active = !getToggleButton(\'draw-point\').active;\n}}\n                        >\n                            Toggle draw point action\n                        </vl-toggle-button>\n                        <p>Draw point</p>\n                    </div>\n\n                    <div style=${toggleItemStyling}>\n                        <vl-toggle-button\n                            class="draw-line-toggle-button"\n                            data-vl-icon="pencil"\n                            data-vl-text-hidden\n                            @click=${() => {\n  getActionElement(\'draw-line\').active = !getToggleButton(\'draw-line\').active;\n}}\n                        >\n                            Toggle draw line action\n                        </vl-toggle-button>\n                        <p>Draw line</p>\n                    </div>\n\n                    <div style=${toggleItemStyling}>\n                        <vl-toggle-button\n                            class="draw-polygon-toggle-button"\n                            data-vl-icon="pencil"\n                            data-vl-text-hidden\n                            @click=${() => {\n  getActionElement(\'draw-polygon\').active = !getToggleButton(\'draw-polygon\').active;\n}}\n                        >\n                            Toggle draw polygon action\n                        </vl-toggle-button>\n                        <p>Draw Polygon</p>\n                    </div>\n                </div>\n            </vl-map-side-sheet>\n\n            <vl-map-overview-map></vl-map-overview-map>\n\n            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>\n            <vl-map-baselayer-grb></vl-map-baselayer-grb>\n            <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>\n\n            <vl-map-features-layer data-vl-name="Shapes" .features=${features}>\n                <vl-map-layer-style\n                    data-vl-name="Shapes"\n                    data-vl-border-color=${purple}\n                    data-vl-color=${purple}\n                ></vl-map-layer-style>\n                <vl-map-layer-circle-style\n                    data-vl-border-color=${purple}\n                    data-vl-color=${purple}\n                ></vl-map-layer-circle-style>\n\n                <vl-map-draw-point-action class="draw-point-action action"></vl-map-draw-point-action>\n                <vl-map-draw-line-action class="draw-line-action action"></vl-map-draw-line-action>\n                <vl-map-draw-polygon-action class="draw-polygon-action action"></vl-map-draw-polygon-action>\n\n                <vl-map-modify-action class="modify-action action"></vl-map-modify-action>\n                <vl-map-delete-action class="delete-action action"></vl-map-delete-action>\n                <vl-map-select-action class="select-action action" data-vl-default-active></vl-map-select-action>\n            </vl-map-features-layer>\n\n            <vl-map-features-layer data-vl-name="Measurements">\n                <vl-map-layer-style\n                    data-vl-color="rgba(6, 163, 247, 1)"\n                    data-vl-border-size="2"\n                    data-vl-border-color="rgba(6, 163, 247, 1)"\n                ></vl-map-layer-style>\n                <vl-map-measure-action class="measure-action action"></vl-map-measure-action>\n            </vl-map-features-layer>\n            <vl-map-legend data-vl-placement=${LEGEND_PLACEMENT.BOTTOM_RIGHT} right="140px"></vl-map-legend>\n        </vl-map>\n    `)',...j.parameters?.docs?.source}}}}}]);