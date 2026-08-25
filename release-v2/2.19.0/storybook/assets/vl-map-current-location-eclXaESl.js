import{i as l,v as p,t as u,B as d,aV as m,bx as g,x as b}from"./iframe-CY-ZM549.js";import{aj as n}from"./vl-map-base-layer-BdyzNi5-.js";const f=10,v="Huidige locatie",h=l`
    div.flux-map-current-location {
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

    div.flux-map-current-location button {
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

    div.flux-map-current-location .vl-icon {
        padding: 0 0.9rem;
        line-height: 3.5rem;
    }
`,x=[h,...p];var y=Object.getOwnPropertyDescriptor,_=(o,e,i,r)=>{for(var t=r>1?void 0:r?y(e,i):e,a=o.length-1,s;a>=0;a--)(s=o[a])&&(t=s(t)||t);return t};let c=class extends d{constructor(){super(),this.zoom=f,this.tooltip=v}static get styles(){return[l`
                ${g(x)}
            `,m]}static get properties(){return{zoom:{type:Number,attribute:"zoom",reflect:!0},tooltip:{type:String,attribute:"tooltip",reflect:!0}}}connectedCallback(){super.connectedCallback(),this._mapElement=this.closest("vl-map")}_currentLocation(){navigator.geolocation.getCurrentPosition(o=>{const e=n.Proj("EPSG:4326"),i=n.Proj(this._mapElement.map.projection.getCode()),r=n.Point(o.coords.longitude,o.coords.latitude),t=n.transform(e,i,r);this._mapElement.map.getView().setCenter([t.x,t.y]),this._mapElement.map.getView().setZoom(this.zoom)})}render(){return b` <div class="flux-map-current-location">
            <button @click=${()=>this._currentLocation()} type="button" title="${this.tooltip}">
                <span class="vl-icon vl-icon--location-gps"></span>
            </button>
        </div>`}};c=_([u("vl-map-current-location")],c);export{v as D,f as a};
