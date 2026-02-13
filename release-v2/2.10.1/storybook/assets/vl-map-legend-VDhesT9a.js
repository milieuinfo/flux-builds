import{E as c,K as b,I as m,B as u,x as n,bB as h}from"./iframe-iHJvAyUB.js";import{V as f}from"./vl-map-layer-circle-style-D2Cy4zz2.js";import{V as x}from"./vl-map-vector-layer-CSngL2Zd.js";import{bj as v}from"./vl-map-base-layer-Ds3vxb_U.js";const y=c`
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
`,w=c`
    div.flux-map-legend {
        position: absolute;
        z-index: 1;
        display: flex;
        background-color: white;
        border: 1px #cbd2da solid;
        padding-right: 0.5em;
    }

    span.flux-map-legend-title {
        padding-left: 0.5em;
        font-weight: bolder;
    }

    span.flux-map-legend-text {
        vertical-align: middle;
        font-size: 0.8em;
        line-height: 1em;
    }

    div.flux-map-legend-icon-container {
        vertical-align: middle;
        margin-left: 0.5em;
        margin-right: 0.2em;
        display: inline-block;
    }

    div.flux-map-legend-item {
        display: flex;
        align-items: center;
    }

    div.flux-map-legend-icon {
        height: 0.8em;
        width: 0.8em;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    div.flux-map-legend-icon-large {
        height: 1.2em;
        width: 1.2em;
    }

    div.flux-map-legend-image {
        display: flex;
        align-items: center;
    }

    div.flux-map-legend--vertical {
        flex-direction: column;
    }

    div.flux-map-legend--vertical div.flux-map-legend-icon-container {
        margin-left: 0.2em;
        margin-right: 0.2em;
    }

    div.flux-map-legend--vertical div.flux-map-legend-item {
        line-height: normal;
    }

    div.flux-map-legend-icon-text {
        font-size: 0.9em;
        font-weight: bolder;
    }
`,g=[w,...b,y,v],I=c`
    :host {
        display: flex;
        align-items: center;
`;var L=Object.getOwnPropertyDescriptor,T=(e,t,o,l)=>{for(var i=l>1?void 0:l?L(t,o):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(i=s(i)||i);return i};let d=class extends u{constructor(){super(...arguments),this.icon=null,this.label="",this.layer="",this.iconText="",this.iconTextColor=""}static get styles(){return[g,I]}static get properties(){return{layer:{type:String,attribute:"layer"},iconText:{type:String,attribute:"icon-text"},iconTextColor:{type:String,attribute:"icon-text-color",reflect:!0}}}render(){return n`
            <div id="legend-item" class="flux-map-legend-item">
                <div class="flux-map-legend-icon-container">
                    ${this.icon}
                    <slot name="icon"></slot>
                </div>
                <span id="label" class="flux-map-legend-text">
                    ${this.label}
                    <slot name="label"></slot>
                </span>
            </div>
        `}};d=T([m("vl-map-legend-item")],d);const a={TOP_LEFT:"top_left",TOP_RIGHT:"top_right",BOTTOM_LEFT:"bottom_left",BOTTOM_RIGHT:"bottom_right"};var z=Object.getOwnPropertyDescriptor,k=(e,t,o,l)=>{for(var i=l>1?void 0:l?z(t,o):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(i=s(i)||i);return i};let p=class extends u{constructor(){super(),this.items=[],this.styledItems=[],this.urlItems=[],this.customItems=[],this.placement=a.BOTTOM_RIGHT}static get styles(){return[c`
                ${h(g)}
            `]}static get properties(){return{left:{type:String,reflect:!0},top:{type:String,reflect:!0},right:{type:String,reflect:!0},bottom:{type:String,reflect:!0},layoutVertical:{type:Boolean,attribute:"layout-vertical",reflect:!0},placement:{type:String,attribute:"placement"},hideTitle:{type:Boolean,attribute:"hide-title"},version:{type:String,attribute:"version"}}}connectedCallback(){super.connectedCallback(),this.mapElement=this.closest("vl-map");const e=[].concat(this.mapElement.wmsLayers),t=[].concat(this.mapElement.featuresLayers,this.mapElement.wfsLayers);e.forEach(o=>{o&&this.urlItems.push({type:"url",url:this.legendUrl(o),name:o.getAttribute("name")})}),this.customItems=this.customLegendItems(),this.updateItems(),t.forEach(o=>{o.addEventListener(x.EVENTS.styleChanged,()=>{this.updateLegendGeometryItems(t)})}),this.initializeCustomLegendObserver()}disconnectedCallback(){super.disconnectedCallback(),this.observer.disconnect()}render(){const e=!!this.customItems?.find(t=>t.iconText);return this.items?n` <div
            class=${`flux-map-legend ${this.layoutVertical?"flux-map-legend--vertical":""}`}
            style="${this.generateItemStyle()}"
        >
            ${this.hideTitle?"":n` <div>
                      <span class="flux-map-legend-text flux-map-legend-title">Legende: </span>
                  </div>`}
            ${this.items.map(t=>{if(!t)return"";switch(t.type){case"custom":return n` ${t.styleElement} `;case"styled":return n` <div class="flux-map-legend-item">
                            <div class="flux-map-legend-icon-container">
                                <div
                                    class="flux-map-legend-icon ${e?"flux-map-legend-icon-large":""}"
                                    style="${this.generateIconStyle(t.style)}"
                                >
                                    <div class="flux-map-legend-icon-text">${t.iconText}</div>
                                </div>
                            </div>
                            <span class="flux-map-legend-text">${t.name}</span>
                        </div>`;case"url":return n` <div class="flux-map-legend-item flux-map-legend-image">
                            <img alt="map legend image" class="flux-map-legend-icon" src="${t.url}" />
                        </div>`;default:return""}})}
        </div>`:null}getPosition(){const e={};switch(this.placement){case a.TOP_LEFT:e.top="10px",e.left="10px",e.right=void 0,e.bottom=void 0;break;case a.TOP_RIGHT:e.top="10px",e.left=void 0,e.right="10px",e.bottom=void 0;break;case a.BOTTOM_LEFT:e.top=void 0,e.left="8px",e.right=void 0,e.bottom="40px";break;case a.BOTTOM_RIGHT:e.top=void 0,e.left=void 0,e.right="58px",e.bottom="10px";break}return{top:this.top??e.top,left:this.left??e.left,right:this.right??e.right,bottom:this.bottom??e.bottom}}initializeCustomLegendObserver(){this.observer=new MutationObserver(()=>{this.customItems=this.customLegendItems(),this.updateItems()});const e={childList:!0,subtree:!0,attributes:!0};this.observer.observe(this,e)}legendUrl(e){const t=new URL(e.getAttribute("url")),o=this.layoutVertical?"layout:vertical":"layout:horizontal",l=new URLSearchParams({service:"WMS",request:"GetLegendGraphic",format:"image/png",layer:e.getAttribute("layers"),legend_options:o});return this.version&&l.set("version",this.version),new URL(`?${l}`,t)}customLegendItems(){return Array.from(this.childNodes).filter(l=>l instanceof d).map(l=>({type:"custom",name:l.layer,iconText:l.iconText,styleElement:l.cloneNode(!0)}))}updateLegendGeometryItems(e){let t=[];e.forEach(o=>{if(o._styles.length===1){const l=o._styles[0];(l.name||o.name!==void 0&&o.name!=null)&&t.push({type:"styled",style:l,name:o.name})}else t=t.concat(...o._styles?.filter(l=>l.name)?.map(l=>({type:"styled",style:l,name:l.name}))||[])}),this.styledItems=t,this.updateItems()}updateItems(){const e=[...this.styledItems,...this.urlItems];this.customItems.length>0?(this.items=[],this.customItems.forEach(o=>{if(o.styleElement.children.length>0)this.items.push(o);else{const l=o.name,i=e.find(r=>r.name===l);i&&i.type==="styled"&&(i.iconText=o.iconText),this.items.push(i)}})):this.items=e,this.requestUpdate()}generateItemStyle(){const e=this.getPosition();return(e.left?`;left:${e.left}`:"")+(e.top?`;top:${e.top}`:"")+(e.right?`;right:${e.right}`:"")+(e.bottom?`;bottom:${e.bottom}`:"")}generateIconStyle(e){let t="";return e instanceof f&&(t="border-radius: 50%;"),`border: ${e.borderSize}px solid ${e.borderColor}; color:${e.textColor}; background-color:${e.color}; ${t}`}};p=k([m("vl-map-legend")],p);export{a as L};
