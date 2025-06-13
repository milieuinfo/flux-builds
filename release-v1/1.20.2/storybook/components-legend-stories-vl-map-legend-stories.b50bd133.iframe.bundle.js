"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[9867],{"./libs/map/src/components/layer-style/vl-map-layer-circle-style/vl-map-layer-circle-style.ts":(e,t,a)=>{a.d(t,{e:()=>d});var r=a("./libs/common/utilities/src/index.ts"),l=a("./node_modules/ol/style/Circle.js"),o=a("./node_modules/ol/style/Fill.js"),s=a("./node_modules/ol/style/Stroke.js"),n=a("./node_modules/ol/style/Style.js"),i=a("./libs/map/src/components/layer-style/vl-map-layer-style.ts");let d=class extends i.W{get size(){let e=Number(this.getAttribute("size"));return e||5}get borderColor(){return this.getAttribute("border-color")||"rgba(0, 0, 0, 0)"}get borderSize(){return this.getAttribute("border-size")||1}get clusterTextColor(){return this.getAttribute("cluster-text-color")||"#FFF"}get clusterColor(){return this.getAttribute("cluster-color")||"rgba(2, 85, 204, 1)"}get clusterMultiplier(){let e=Number(this.getAttribute("cluster-multiplier"));return isNaN(e)||0===e?1:e}get _styleFunction(){return(e,t)=>{let a=e&&e.get&&e.get("features")||[],{textColor:r,color:i,borderColor:d,borderSize:p}=this,m=a.length||1,c=Math.max(1.5,m.toString().length),u=1===m?1:this.clusterMultiplier*c,g=this.size*u;if(this.parentElement&&this.parentElement.cluster){if(this._hasUniqueStyles(a)){let e=a[0].getStyle();e instanceof Function&&(e=e());let t=e.getImage();i=t.getFill().getColor(),d=t.getStroke().getColor(),p=t.getStroke().getWidth(),g=m>1?t.getRadius()*u:t.getRadius()}else this._containsStyle(a)&&(i=this.clusterColor,r=this.clusterTextColor)}return new n.ZP({image:new l.Z({fill:new o.Z({color:i}),stroke:new s.Z({color:d,width:Number(p)}),radius:g}),text:this._getTextStyle(e,r),zIndex:this._featureZIndex(e)})}}get featureLabelFunction(){return e=>{let t=e&&e.get&&e.get("features")||[];if(Array.isArray(t)&&t.length>0){let e=t.length||1;return e>1?e.toString():this.__getFeatureText(t[0])}return this.__getFeatureText(e)}}__getFeatureText(e){return this.textFeatureAttributeName&&this.textFeatureAttributeName?e.get(this.textFeatureAttributeName):""}};d=function(e,t,a,r){var l,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(s=(o<3?l(s):o>3?l(t,a,s):l(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s}([(0,r.a6)("vl-map-layer-circle-style")],d)},"./libs/map/src/components/layer/vector-layer/vl-map-wfs-layer/vl-map-wfs-layer.ts":(e,t,a)=>{var r=a("./libs/common/utilities/src/index.ts"),l=a("./node_modules/ol/format/GML2.js"),o=a("./node_modules/ol/loadingstrategy.js"),s=a("./node_modules/ol/source/Vector.js"),n=a("./libs/map/src/components/layer/vector-layer/vl-map-vector-layer.ts");let i=class extends n.b{connectedCallback(){return this._source=this.__createSource(),this._layer=this._createLayer(),super.connectedCallback()}get _url(){let e=this.getAttribute("url");if(!e)throw Error("URL not defined");return new URL(e)}get _layers(){let e=this.getAttribute("layers");if(!e)throw Error("Layers not defined");return e}__createSource(){return new s.Z({format:this.__sourceFormat,strategy:this.__loadingStrategy,url:this.__getWfsUrl.bind(this)})}__getWfsUrl(e,t,a){let r=this._url,{searchParams:l}=r;return l.set("service","WFS"),l.set("request","GetFeature"),l.set("typename",this._layers),l.set("bbox",e.join(",")),l.set("srsname",a.getCode()),l.set("outputFormat",this.__wfsOutputFormat),l.set("version",this.__wfsVersion),r}get __loadingStrategy(){return o.VW}get __sourceFormat(){return new l.Z}get __wfsOutputFormat(){return"GML2"}get __wfsVersion(){return"2.0.0"}};i=function(e,t,a,r){var l,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(s=(o<3?l(s):o>3?l(t,a,s):l(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s}([(0,r.a6)("vl-map-wfs-layer")],i)},"./libs/map/src/components/legend/vl-map-legend.ts":(e,t,a)=>{a.d(t,{q:()=>u});var r=a("./node_modules/lit/index.js"),l=a("./node_modules/lit/decorators.js"),o=a("./libs/map/src/components/layer/vector-layer/vl-map-vector-layer.ts"),s=a("./libs/map/src/components/layer-style/vl-map-layer-circle-style/vl-map-layer-circle-style.ts"),n=a("./libs/map/src/actions/map-actions.uig-css.ts"),i=a("./libs/elements/src/index.ts");let d=(0,r.iv)`
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
`,p=(0,r.iv)`
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
`,m=[p,...i.CX,d,n.Z];var c=a("./libs/common/utilities/src/index.ts");let u={TOP_LEFT:"top_left",TOP_RIGHT:"top_right",BOTTOM_LEFT:"bottom_left",BOTTOM_RIGHT:"bottom_right"},g=class extends c.fS{static get styles(){return[(0,r.iv)`
                ${(0,r.$m)(m)}
            `]}constructor(){super(),this.items=[],this.placement=u.BOTTOM_RIGHT}static get properties(){return{left:{type:String,reflect:!0},top:{type:String,reflect:!0},right:{type:String,reflect:!0},bottom:{type:String,reflect:!0},placement:{type:String,attribute:"data-vl-placement",reflect:!0}}}getPosition(){let e={};switch(this.placement){case u.TOP_LEFT:e.top="10px",e.left="10px",e.right=void 0,e.bottom=void 0;break;case u.TOP_RIGHT:e.top="10px",e.left=void 0,e.right="10px",e.bottom=void 0;break;case u.BOTTOM_LEFT:e.top=void 0,e.left="8px",e.right=void 0,e.bottom="40px";break;case u.BOTTOM_RIGHT:e.top=void 0,e.left=void 0,e.right="58px",e.bottom="10px"}return{top:this.top??e.top,left:this.left??e.left,right:this.right??e.right,bottom:this.bottom??e.bottom}}connectedCallback(){super.connectedCallback(),this.mapElement=this.closest("vl-map");let e=[].concat(this.mapElement.wmsLayers),t=[].concat(this.mapElement.featuresLayers,this.mapElement.wfsLayers);e.forEach(e=>{e&&this.items.push({url:this.legendUrl(e),name:e.dataset.vlName})}),t.forEach(e=>{e.addEventListener(o.b.EVENTS.styleChanged,()=>{this.updateLegendGeometryItems(t)})})}legendUrl(e){let t=new URL(e.dataset.vlUrl),a=new URLSearchParams({service:"WMS",request:"GetLegendGraphic",format:"image/png",layer:e.dataset.vlLayers,legend_options:"layout:horizontal"});return new URL(`?${a}`,t)}updateLegendGeometryItems(e){e.forEach(e=>{if(1===e._styles.length){let t=e._styles[0];t.name?this.items.push({style:t,name:e.name}):void 0!==e.name&&null!=e.name&&this.items.push({style:t,name:e.name})}else{let t=e._styles?.filter(e=>e.name)?.map(e=>({style:e,name:e.name}))||[],a=this.items.filter(e=>e.url);this.items=[...t,...a]}}),this.requestUpdate()}render(){return this.items?(0,r.dy)` <div class="uig-map-legend" style="${this.generateItemStyle()}">
            <div>
                <span class="uig-map-legend-text uig-map-legend-title">Legende: </span>
            </div>
            ${this.items.map(e=>e.style?(0,r.dy)` <div class="uig-map-legend-item">
                        <div class="uig-map-legend-icon" style="${this.generateIconStyle(e.style)}"></div>
                        <span class="uig-map-legend-text">${e.name}</span>
                    </div>`:(0,r.dy)`<div class="uig-map-legend-item uig-map-legend-image">
                        <img alt="map legend image" class="uig-map-legend-icon" src="${e.url}" />
                    </div>`)}
        </div>`:null}generateItemStyle(){let e=this.getPosition();return(e.left?`;left:${e.left}`:"")+(e.top?`;top:${e.top}`:"")+(e.right?`;right:${e.right}`:"")+(e.bottom?`;bottom:${e.bottom}`:"")}generateIconStyle(e){let t="";return e instanceof s.e&&(t="border-radius: 50%;"),`border: ${e.borderSize}px solid ${e.borderColor}; background-color:${e.color};${t}`}};g=function(e,t,a,r){var l,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(s=(o<3?l(s):o>3?l(t,a,s):l(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s}([(0,l.Mo)("vl-map-legend")],g)},"./libs/map/src/components/legend/stories/vl-map-legend.stories.ts":(e,t,a)=>{a.r(t),a.d(t,{MapLegendFeaturesLayer:()=>w,MapLegendFeaturesLayerMultipleStyles:()=>_,MapLegendMultipleFeaturesLayers:()=>T,MapLegendWfsLayer:()=>z,MapLegendWmsLayer:()=>k,MapLegendWmsWfsLayer:()=>L,default:()=>x});var r=a("./libs/common/storybook/src/index.ts");a("./libs/map/src/vl-map.ts"),a("./libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts"),a("./libs/map/src/components/layer-style/vl-map-layer-circle-style/vl-map-layer-circle-style.ts"),a("./libs/map/src/components/layer/vector-layer/vl-map-features-layer/vl-map-features-layer.ts");var l=a("./libs/map/src/components/legend/vl-map-legend.ts"),o=a("./node_modules/lit/index.js");a("./libs/map/src/components/layer-style/vl-map-layer-style.ts");let s={bottom:"",left:"",placement:l.q.BOTTOM_RIGHT,right:"",top:""},n={bottom:{name:"bottom",description:'Bepaalt de "bottom" positie van de legende op de kaart.<br>Kan gebruikt worden in combinatie met data-vl-placement.',table:{type:{summary:r.vK.STRING},category:r.aA.ATTRIBUTES,defaultValue:{summary:s.bottom}}},left:{name:"left",description:'Bepaalt de "left" positie van de legende op de kaart.<br>Kan gebruikt worden in combinatie met data-vl-placement.',table:{type:{summary:r.vK.STRING},category:r.aA.ATTRIBUTES,defaultValue:{summary:s.left}}},placement:{name:"data-vl-placement",description:"Bepaalt de plaats van de legende op de kaart.",control:{type:"select",options:[l.q.TOP_LEFT,l.q.TOP_RIGHT,l.q.BOTTOM_LEFT,l.q.BOTTOM_RIGHT]},table:{type:{summary:`"${l.q.TOP_LEFT}" | 
                "${l.q.TOP_RIGHT}" | 
                "${l.q.BOTTOM_LEFT}" | 
                "${l.q.BOTTOM_RIGHT}"`},category:r.aA.ATTRIBUTES,defaultValue:{summary:s.placement}}},right:{name:"right",description:'Bepaalt de "right" positie van de legende op de kaart.<br>Kan gebruikt worden in combinatie met data-vl-placement.',table:{type:{summary:r.vK.STRING},category:r.aA.ATTRIBUTES,defaultValue:{summary:s.right}}},top:{name:"top",description:'Bepaalt de "top" positie van de legende op de kaart.<br>Kan gebruikt worden in combinatie met data-vl-placement.',table:{type:{summary:r.vK.STRING},category:r.aA.ATTRIBUTES,defaultValue:{summary:s.top}}}},i=()=>{document.addEventListener("DOMContentLoaded",async()=>{let e=document.getElementById("map");await e.ready,document.querySelector("#style-1").appliesTo=e=>"style-1"===e.get("styleId"),document.querySelector("#style-2").appliesTo=e=>"style-2"===e.get("styleId"),document.querySelector("#style-3").appliesTo=e=>"style-3"===e.get("styleId")})},d=(0,r.yg)(s,({bottom:e,left:t,placement:a,right:r,top:l})=>(i(),(0,o.dy)` <vl-map id="map">
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-features-layer .features=${{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[153055,203908]},properties:{styleId:"style-1"}},{type:"Feature",geometry:{type:"Point",coordinates:[141e3,200908]},properties:{styleId:"style-2"}},{type:"Feature",geometry:{type:"Polygon",coordinates:[[[147055,197908],[157055,197908],[157055,187908],[147055,187908],[147055,197908]]]},properties:{styleId:"style-3"}}]}} data-vl-name="Shapes">
            <vl-map-layer-circle-style
                id="style-1"
                data-vl-name="Openbaar onderzoek"
                data-vl-color="#ffe615"
                data-vl-size="5"
                data-vl-border-color="#000"
                data-vl-border-size="1"
            ></vl-map-layer-circle-style>
            <vl-map-layer-circle-style
                id="style-2"
                data-vl-name="Beslissing"
                data-vl-color="red"
                data-vl-size="5"
                data-vl-border-color="#000"
                data-vl-border-size="1"
            ></vl-map-layer-circle-style>
            <vl-map-layer-style
                id="style-3"
                data-vl-name="Wateroppervlaktes"
                data-vl-color="rgba(255,0,0,0.5)"
                data-vl-border-color="rgba(255,255,100,1)"
                data-vl-border-size="2"
                data-vl-text-feature-attribute-name="label"
                data-vl-text-background-color="rgba(0,0,255,0.2)"
                data-vl-text-border-color="rgba(0,255,0,1)"
                data-vl-text-border-size="3"
                data-vl-text-color="rgba(255,0,0,1)"
                data-vl-text-offset-x="10"
                data-vl-text-offset-y="-10"
                data-vl-text-size="13px"
            ></vl-map-layer-style>
        </vl-map-features-layer>
        <vl-map-legend
            data-vl-placement=${a}
            bottom=${e}
            top=${l}
            right=${r}
            left=${t}
        ></vl-map-legend>
    </vl-map>`));var p=a("./node_modules/lit-html/lit-html.js");let m=(0,r.yg)(s,({bottom:e,left:t,placement:a,right:r,top:l})=>(0,p.dy)` <vl-map id="map">
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-features-layer .features=${{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[147055,197908]}},{type:"Feature",geometry:{type:"Point",coordinates:[141e3,200908]}}]}} data-vl-name="Laag 1">
            <vl-map-layer-circle-style
                data-vl-name="Openbaar onderzoek"
                data-vl-color="#ffe615"
                data-vl-size="5"
                data-vl-border-color="#000"
                data-vl-border-size="1"
            ></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-legend
            data-vl-placement=${a}
            bottom=${e}
            top=${l}
            right=${r}
            left=${t}
        ></vl-map-legend>
    </vl-map>`);a("./libs/map/src/components/action/draw-action/measure-action/vl-map-measure-action.ts"),a("./libs/map/src/components/controls/measure-control/vl-map-measure-control.ts"),a("./libs/map/src/components/controls/vl-map-action-controls.ts");let c=(0,r.yg)(s,({bottom:e,left:t,placement:a,right:r,top:l})=>(0,p.dy)` <vl-map>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-action-controls>
            <vl-map-measure-control></vl-map-measure-control>
        </vl-map-action-controls>
        <vl-map-features-layer data-vl-name="Measurements">
            <vl-map-layer-style data-vl-border-size="2"></vl-map-layer-style>
            <vl-map-measure-action></vl-map-measure-action>
        </vl-map-features-layer>
        <vl-map-features-layer .features=${{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[147055,197908]},properties:{featureCharacter:"O",zIndex:"1"}},{type:"Feature",geometry:{type:"Point",coordinates:[147075,197908]},properties:{featureCharacter:"O",zIndex:"2"}},{type:"Feature",geometry:{type:"Point",coordinates:[147095,197908]},properties:{featureCharacter:"O",zIndex:"3"}},{type:"Feature",geometry:{type:"Point",coordinates:[147105,197908]},properties:{featureCharacter:"O",zIndex:"4"}},{type:"Feature",geometry:{type:"Point",coordinates:[147106,197908]},properties:{featureCharacter:"O",zIndex:"5"}}]}} data-vl-name="Openbare onderzoeken">
            <vl-map-layer-circle-style
                data-vl-color="#ffe615"
                data-vl-size="10"
                data-vl-border-color="#000"
                data-vl-border-size="1"
                data-vl-text-feature-attribute-name="featureCharacter"
                data-vl-text-size="bold 14px"
            ></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-features-layer .features=${{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[141e3,200908]},properties:{featureCharacter:"B",zIndex:"5"}}]}} data-vl-name="Beslissingen">
            <vl-map-layer-circle-style
                data-vl-color="red"
                data-vl-size="10"
                data-vl-border-color="#000"
                data-vl-text-feature-attribute-name="featureCharacter"
                data-vl-border-size="1"
                data-vl-text-size="bold 14px"
            ></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-features-layer .features=${{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[153055,203908]},properties:{featureCharacter:"W",zIndex:"5"}}]}} data-vl-name="Wateroppervlaktes">
            <vl-map-layer-circle-style
                data-vl-color="green"
                data-vl-size="10"
                data-vl-border-color="#000"
                data-vl-text-feature-attribute-name="featureCharacter"
                data-vl-border-size="1"
                data-vl-text-size="bold 14px"
            ></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-legend
            data-vl-placement=${a}
            bottom=${e}
            top=${l}
            right=${r}
            left=${t}
        ></vl-map-legend>
    </vl-map>`);a("./libs/map/src/components/layer/vector-layer/vl-map-wfs-layer/vl-map-wfs-layer.ts");let u=(0,r.yg)(s,({bottom:e,left:t,placement:a,right:r,top:l})=>(0,o.dy)`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-wfs-layer
                data-vl-name="Oppervlaktewaterlichamen"
                data-vl-url="https://geoserver.vmm.be/geoserver/vmm/wfs"
                data-vl-layers="owl_l"
                data-vl-max-resolution="8"
            >
                <vl-map-layer-circle-style
                    data-vl-color="#ffe615"
                    data-vl-size="5"
                    data-vl-border-color="#000"
                    data-vl-border-size="1"
                ></vl-map-layer-circle-style>
            </vl-map-wfs-layer>
            <vl-map-legend
                data-vl-placement=${a}
                bottom=${e}
                top=${l}
                right=${r}
                left=${t}
            ></vl-map-legend>
        </vl-map>
    `),g=(0,r.yg)(s,({bottom:e,left:t,placement:a,right:r,top:l})=>(0,o.dy)`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-tiled-wms-layer
                data-vl-layers="grondwater:beschermingszones_2014"
                data-vl-name="Beschermingszones"
                data-vl-url="https://www.dov.vlaanderen.be/geoserver/wms"
            ></vl-map-tiled-wms-layer>
            <vl-map-legend
                data-vl-placement=${a}
                bottom=${e}
                top=${l}
                right=${r}
                left=${t}
            ></vl-map-legend>
        </vl-map>
    `),y=(0,r.yg)(s,({bottom:e,left:t,placement:a,right:r,top:l})=>(0,o.dy)`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-tiled-wms-layer
                data-vl-layers="grondwater:beschermingszones_2014"
                data-vl-name="Beschermingszones"
                data-vl-url="https://www.dov.vlaanderen.be/geoserver/wms"
            ></vl-map-tiled-wms-layer>
            <vl-map-wfs-layer
                data-vl-name="Oppervlaktewaterlichamen"
                data-vl-url="https://geoserver.vmm.be/geoserver/vmm/wfs"
                data-vl-layers="owl_l"
                data-vl-max-resolution="8"
            >
                <vl-map-layer-circle-style
                    data-vl-color="#ffe615"
                    data-vl-size="5"
                    data-vl-border-color="#000"
                    data-vl-border-size="1"
                ></vl-map-layer-circle-style>
            </vl-map-wfs-layer>
            <vl-map-legend
                data-vl-placement=${a}
                bottom=${e}
                top=${l}
                right=${r}
                left=${t}
            ></vl-map-legend>
        </vl-map>
    `);a("./node_modules/react/index.js");var v=a("./node_modules/react/jsx-runtime.js"),b=a("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),f=a("./node_modules/@storybook/blocks/dist/index.mjs");function h(e){let t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",a:"a"},(0,b.ah)(),e.components);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(t.h1,{id:"map-legend",children:"Map Legend"}),"\n",(0,v.jsxs)(t.p,{children:["Gebruik de ",(0,v.jsx)(t.code,{children:"map-legend"})," component om een legende af te beelden op de kaart."]}),"\n",(0,v.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:"language-js",children:"import { VlMapLegend } from '@domg-wc/map';\n"})}),"\n",(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:"language-html",children:"<vl-map-legend></vl-map-legend>\n"})}),"\n",(0,v.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,v.jsx)(f.Ed,{of:_}),"\n",(0,v.jsx)(t.h2,{id:"voorbeelden",children:"Voorbeelden"}),"\n",(0,v.jsx)(t.h3,{id:"features-layer-multiple-styles",children:"Features Layer Multiple Styles"}),"\n",(0,v.jsx)(t.p,{children:"Zie onder de story voor de TypeScript code."}),"\n",(0,v.jsx)(f.Xz,{of:_}),"\n",(0,v.jsxs)("details",{children:[(0,v.jsx)("summary",{children:"TypeScript code"}),(0,v.jsx)(f.Hw,{code:"export const linkStylesToFeatures = ()=>{\n    document.addEventListener('DOMContentLoaded', async ()=>{\n        const map = document.getElementById('map');\n        await map.ready;\n        document.querySelector('#style-1').appliesTo = (feature)=>feature.get('styleId') === 'style-1';\n        document.querySelector('#style-2').appliesTo = (feature)=>feature.get('styleId') === 'style-2';\n        document.querySelector('#style-3').appliesTo = (feature)=>feature.get('styleId') === 'style-3';\n    });\n};\n",language:"ts",dark:!0})]}),"\n",(0,v.jsx)(t.h3,{id:"features-layer",children:"Features Layer"}),"\n",(0,v.jsx)(f.Xz,{of:w}),"\n",(0,v.jsx)(t.h3,{id:"multiple-features-layers",children:"Multiple Features Layers"}),"\n",(0,v.jsx)(f.Xz,{of:T}),"\n",(0,v.jsx)(t.h3,{id:"wfs-layer",children:"WFS Layer"}),"\n",(0,v.jsx)(f.Xz,{of:z}),"\n",(0,v.jsx)(t.h3,{id:"wms-layer",children:"WMS Layer"}),"\n",(0,v.jsx)(f.Xz,{of:k}),"\n",(0,v.jsx)(t.h3,{id:"wms-wfs-layer-combination",children:"WMS WFS Layer Combination"}),"\n",(0,v.jsx)(f.Xz,{of:L}),"\n",(0,v.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,v.jsx)(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,v.jsx)(t.p,{children:(0,v.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-map-vl-map-legend-vl-map-legend-wfs-layer--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Map Legend Wfs Layer"})})]})}let x={title:"map/legend",tags:["autodocs"],args:(0,r.T8)(s),argTypes:(0,r.xj)(n),parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,b.ah)(),e.components);return t?(0,v.jsx)(t,Object.assign({},e,{children:(0,v.jsx)(h,e)})):h(e)}}}},w=m;w.storyName="vl-map-legend - features-layer";let _=d;_.storyName="vl-map-legend - features-layer multiple styles";let T=c;T.storyName="vl-map-legend - multiple features-layers";let z=u;z.storyName="vl-map-legend - wfs-layer";let k=g;k.storyName="vl-map-legend - wms-layer";let L=y;L.storyName="vl-map-legend - wms - wfs -layer",w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:"MLFL",...w.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:"MLFLMS",..._.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:"MLMFL",...T.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:"MLWFSL",...z.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:"MLWMSL",...k.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:"MLWMSWFSL",...L.parameters?.docs?.source}}}}}]);