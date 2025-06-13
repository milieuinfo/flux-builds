"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[2450],{"./libs/map/src/components/layer-style/vl-map-layer-circle-style/vl-map-layer-circle-style.ts":(e,t,o)=>{o.d(t,{e:()=>c});var l=o("./libs/common/utilities/src/index.ts"),i=o("./node_modules/ol/style/Circle.js"),r=o("./node_modules/ol/style/Fill.js"),s=o("./node_modules/ol/style/Stroke.js"),n=o("./node_modules/ol/style/Style.js"),a=o("./libs/map/src/components/layer-style/vl-map-layer-style.ts");class c extends a.W{get size(){return Number(this.getAttribute("size"))||5}get borderColor(){return this.getAttribute("border-color")||"rgba(0, 0, 0, 0)"}get borderSize(){return this.getAttribute("border-size")||1}get clusterTextColor(){return this.getAttribute("cluster-text-color")||"#FFF"}get clusterColor(){return this.getAttribute("cluster-color")||"rgba(2, 85, 204, 1)"}get clusterMultiplier(){let e=Number(this.getAttribute("cluster-multiplier"));return isNaN(e)||0===e?1:e}get _styleFunction(){return(e,t)=>{let o=e&&e.get&&e.get("features")||[],{textColor:l,color:a,borderColor:c,borderSize:m}=this,d=o.length||1,p=Math.max(1.5,d.toString().length),u=1===d?1:this.clusterMultiplier*p,g=this.size*u;if(this.parentElement&&this.parentElement.cluster){if(this._hasUniqueStyles(o)){let e=o[0].getStyle();e instanceof Function&&(e=e());let t=e.getImage();a=t.getFill().getColor(),c=t.getStroke().getColor(),m=t.getStroke().getWidth(),g=d>1?t.getRadius()*u:t.getRadius()}else this._containsStyle(o)&&(a=this.clusterColor,l=this.clusterTextColor)}return new n.ZP({image:new i.Z({fill:new r.Z({color:a}),stroke:new s.Z({color:c,width:Number(m)}),radius:g}),text:this._getTextStyle(e,l),zIndex:this._featureZIndex(e)})}}get featureLabelFunction(){return e=>{let t=e&&e.get&&e.get("features")||[];if(Array.isArray(t)&&t.length>0){let e=t.length||1;return e>1?e.toString():this.__getFeatureText(t[0])}return this.__getFeatureText(e)}}__getFeatureText(e){return this.textFeatureAttributeName&&this.textFeatureAttributeName?e.get(this.textFeatureAttributeName):""}}c=function(e,t,o,l){var i,r=arguments.length,s=r<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,o):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,l);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s}([(0,l.a6)("vl-map-layer-circle-style")],c)},"./libs/map/src/components/legend-item/vl-map-legend-item.ts":(e,t,o)=>{o.d(t,{L:()=>n});var l=o("./node_modules/lit/index.js"),i=o("./node_modules/lit/decorators.js"),r=o("./libs/common/utilities/src/index.ts"),s=o("./libs/map/src/components/legend/vl-map-legend.uig-css.ts");class n extends r.fS{static get styles(){return s.Z}static get properties(){return{layer:{type:String,attribute:"data-vl-layer",reflect:!0}}}render(){return(0,l.dy)`
            <div id="legend-item" class="uig-map-legend-item">
                <div class="uig-map-legend-icon-container">
                    ${this.icon}
                    <slot name="icon"></slot>
                </div>
                <span id="label" class="uig-map-legend-text">
                    ${this.label}
                    <slot name="label"></slot>
                </span>
            </div>
        `}constructor(...e){super(...e),this.icon=null,this.label="",this.layer=""}}n=function(e,t,o,l){var i,r=arguments.length,s=r<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,o):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,l);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s}([(0,i.Mo)("vl-map-legend-item")],n)},"./libs/map/src/components/legend/vl-map-legend.ts":(e,t,o)=>{o.d(t,{q:()=>m});var l=o("./node_modules/lit/index.js"),i=o("./node_modules/lit/decorators.js"),r=o("./libs/map/src/components/layer/vector-layer/vl-map-vector-layer.ts"),s=o("./libs/map/src/components/layer-style/vl-map-layer-circle-style/vl-map-layer-circle-style.ts"),n=o("./libs/map/src/components/legend/vl-map-legend.uig-css.ts"),a=o("./libs/common/utilities/src/index.ts"),c=o("./libs/map/src/components/legend-item/vl-map-legend-item.ts");let m={TOP_LEFT:"top_left",TOP_RIGHT:"top_right",BOTTOM_LEFT:"bottom_left",BOTTOM_RIGHT:"bottom_right"};class d extends a.fS{static get styles(){return[(0,l.iv)`
                ${(0,l.$m)(n.Z)}
            `]}constructor(){super(),this.items=[],this.styledItems=[],this.urlItems=[],this.customItems=[],this.placement=m.BOTTOM_RIGHT}static get properties(){return{left:{type:String,reflect:!0},top:{type:String,reflect:!0},right:{type:String,reflect:!0},bottom:{type:String,reflect:!0},placement:{type:String,attribute:"data-vl-placement",reflect:!0}}}getPosition(){let e={};switch(this.placement){case m.TOP_LEFT:e.top="10px",e.left="10px",e.right=void 0,e.bottom=void 0;break;case m.TOP_RIGHT:e.top="10px",e.left=void 0,e.right="10px",e.bottom=void 0;break;case m.BOTTOM_LEFT:e.top=void 0,e.left="8px",e.right=void 0,e.bottom="40px";break;case m.BOTTOM_RIGHT:e.top=void 0,e.left=void 0,e.right="58px",e.bottom="10px"}return{top:this.top??e.top,left:this.left??e.left,right:this.right??e.right,bottom:this.bottom??e.bottom}}connectedCallback(){super.connectedCallback(),this.mapElement=this.closest("vl-map");let e=[].concat(this.mapElement.wmsLayers),t=[].concat(this.mapElement.featuresLayers,this.mapElement.wfsLayers);e.forEach(e=>{e&&this.urlItems.push({type:"url",url:this.legendUrl(e),name:e.dataset.vlName})}),this.customItems=this.customLegendItems(),this.updateItems(),t.forEach(e=>{e.addEventListener(r.b.EVENTS.styleChanged,()=>{this.updateLegendGeometryItems(t)})}),this.initializeCustomLegendObserver()}disconnectedCallback(){super.disconnectedCallback(),this.observer.disconnect()}initializeCustomLegendObserver(){this.observer=new MutationObserver(()=>{this.customItems=this.customLegendItems(),this.updateItems()}),this.observer.observe(this,{childList:!0,subtree:!0,attributes:!0})}legendUrl(e){let t=new URL(e.dataset.vlUrl),o=new URLSearchParams({service:"WMS",request:"GetLegendGraphic",format:"image/png",layer:e.dataset.vlLayers,legend_options:"layout:horizontal"});return new URL(`?${o}`,t)}customLegendItems(){return Array.from(this.childNodes).filter(e=>e instanceof c.L).map(e=>({type:"custom",name:e.layer,styleElement:e.cloneNode(!0)}))}updateLegendGeometryItems(e){let t=[];e.forEach(e=>{if(1===e._styles.length){let o=e._styles[0];(o.name||void 0!==e.name&&null!=e.name)&&t.push({type:"styled",style:o,name:e.name})}else t=t.concat(...e._styles?.filter(e=>e.name)?.map(e=>({type:"styled",style:e,name:e.name}))||[])}),this.styledItems=t,this.updateItems()}updateItems(){let e=[...this.styledItems,...this.urlItems];this.customItems.length>0?(this.items=[],this.customItems.forEach(t=>{if(t.styleElement.children.length>0)this.items.push(t);else{let o=t.name,l=e.filter(e=>e.name===o);this.items=this.items.concat(...l)}})):this.items=e,this.requestUpdate()}render(){return this.items?(0,l.dy)` <div class="uig-map-legend" style="${this.generateItemStyle()}">
            <div>
                <span class="uig-map-legend-text uig-map-legend-title">Legende: </span>
            </div>
            ${this.items.map(e=>{switch(e.type){case"custom":return(0,l.dy)` ${e.styleElement} `;case"styled":return(0,l.dy)` <div class="uig-map-legend-item">
                            <div class="uig-map-legend-icon-container">
                                <div class="uig-map-legend-icon" style="${this.generateIconStyle(e.style)}"></div>
                            </div>
                            <span class="uig-map-legend-text">${e.name}</span>
                        </div>`;case"url":return(0,l.dy)`<div class="uig-map-legend-item uig-map-legend-image">
                            <img alt="map legend image" class="uig-map-legend-icon" src="${e.url}" />
                        </div>`;default:return""}})}
        </div>`:null}generateItemStyle(){let e=this.getPosition();return(e.left?`;left:${e.left}`:"")+(e.top?`;top:${e.top}`:"")+(e.right?`;right:${e.right}`:"")+(e.bottom?`;bottom:${e.bottom}`:"")}generateIconStyle(e){let t="";return e instanceof s.e&&(t="border-radius: 50%;"),`border: ${e.borderSize}px solid ${e.borderColor}; background-color:${e.color};${t}`}}d=function(e,t,o,l){var i,r=arguments.length,s=r<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,o):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,l);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s}([(0,i.Mo)("vl-map-legend")],d)},"./libs/map/src/components/legend/vl-map-legend.uig-css.ts":(e,t,o)=>{o.d(t,{Z:()=>n});var l=o("./node_modules/lit/index.js"),i=o("./libs/map/src/actions/map-actions.uig-css.ts"),r=o("./libs/elements/src/index.ts");let s=(0,l.iv)`
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
`,n=[(0,l.iv)`
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

    div.uig-map-legend-icon-container {
        vertical-align: middle;
        margin-left: 0.5em;
        display: inline-block;
    }

    div.uig-map-legend-icon {
        height: 0.8em;
        width: 0.8em;
    }

    div.uig-map-legend-image {
        display: flex;
        align-items: center;
    }
`,...r.CX,s,i.Z]}}]);