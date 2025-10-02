import{r as c,l as n,m as h,p,q as m}from"./iframe-CflcmDUD.js";import"./vl-checkbox.component-D4zgMdoi.js";import"./vl-datepicker.component-CgELEzZR.js";import"./vl-input-field-masked.component-DfsuPfBk.js";import"./vl-radio.component-Ra8Rh6YT.js";import"./vl-radio-group.component-BGDxo2T5.js";import"./vl-select.component-BMMIEVaD.js";import{S as d}from"./vl-select-rich.component-BsFMqeXH.js";import"./vl-textarea.component-C8hensF9.js";import"./vl-textarea-rich.component-Cwmhv0os.js";import"./vl-upload.component-Blk6WjMY.js";import{e as _,O as b}from"./vl-map-base-layer-BvMalALX.js";import{V as u}from"./vl-select-location-DRwMe55W.js";var v=Object.getOwnPropertyDescriptor,g=(e,t,r,s)=>{for(var a=s>1?void 0:s?v(t,r):t,i=e.length-1,l;i>=0;i--)(l=e[i])&&(a=l(a)||a);return a};let o=class extends p{constructor(){const e=`
            <vl-search id="search" inline>
                <vl-select-location slot="input" not-deletable position=${d.BOTTOM}></vl-select-location>
            </vl-search>
        `,t=new CSSStyleSheet;t.replaceSync(`
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
        `);const r=[...m.map(s=>s.styleSheet),t];super(e,r),this.changeLocation=async()=>{try{const s=await this._selectElement.location;s&&(this._onSelect?this._onSelect(s):this.zoomTo(s))}catch(s){console.error("Locatie kan niet opgehaald worden.",s)}},this.stopPropagation=s=>{s.stopPropagation()},this.configure()}static get _observedAttributes(){return["placeholder","search-placeholder","search-empty-text","search-no-results-text"]}static get _observedClassAttributes(){return["with-offset"]}get _classPrefix(){return"vl-map-search--"}connectedCallback(){this.addEventListener("vl-input",this.changeLocation),this.addEventListener("keypress",this.stopPropagation),this.map?.isLambert2008&&this._selectElement.setAttribute("lambert2008","")}get _selectElement(){return this._shadow?.querySelector("vl-select-location")}bindMap(e){this._map=e,e.isLambert2008&&this._selectElement.setAttribute("lambert2008","")}get map(){return this._map||(this.parentNode&&this.parentNode instanceof _?this.parentNode:null)}onSelect(e){this._onSelect=e}zoomTo(e){this._map.zoomTo(e,14)}configure(){customElements.whenDefined("vl-map").then(()=>{this.parentNode&&this.parentNode.map&&(this._map=this.parentNode?._shadow?.host,this._map.map.addOverlay(new b({className:"vl-map-search__overlaycontainer",element:this})))})}_placeholderChangedCallback(e,t){this._dispatchSelectAttribute("placeholder",t)}_searchPlaceholderChangedCallback(e,t){this._dispatchSelectAttribute("search-placeholder",t)}_searchEmptyTextChangedCallback(e,t){this._dispatchSelectAttribute("search-empty-text",t)}_searchNoResultsTextChangedCallback(e,t){this._dispatchSelectAttribute("search-no-results-text",t)}_dispatchSelectAttribute(e,t){t!=null?this._selectElement.setAttribute(`${o.attributePrefix}${e}`,t):this._selectElement.removeAttribute(`${o.attributePrefix}${e}`)}disconnectedCallback(){this.removeEventListener("keypress",this.stopPropagation),this._selectElement.removeEventListener("vl-input",this.changeLocation)}};c([u,n]);o=g([h("vl-map-search")],o);
