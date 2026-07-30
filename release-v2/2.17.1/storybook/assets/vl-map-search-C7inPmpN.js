import{r as c,g as n,w as h,f as p,v as m}from"./iframe-DynOw9qF.js";import"./vl-checkbox.component-BFWyhwF-.js";import"./vl-datepicker.component-CDbT1ywF.js";import"./vl-fieldset.component-Cn1m5Esg.js";import"./vl-input-field-masked.component-DdXfAdAC.js";import"./vl-radio.component-V9fz9CTI.js";import"./vl-radio-group.component-CiIaRUE-.js";import"./vl-select.component-DladKYQf.js";import{S as d}from"./vl-select-rich.component-CaoTbphr.js";import"./vl-textarea.component-DgY8k7Uy.js";import"./vl-textarea-rich.component-CdstHoUA.js";import"./vl-upload.component-CxW_ou6b.js";import{e as _,O as b}from"./vl-map-base-layer-C-Ui_DPh.js";import{V as u}from"./vl-select-location-V7nnnj8q.js";var v=Object.getOwnPropertyDescriptor,g=(e,t,r,s)=>{for(var o=s>1?void 0:s?v(t,r):t,i=e.length-1,l;i>=0;i--)(l=e[i])&&(o=l(o)||o);return o};let a=class extends p{constructor(){const e=`
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
        `);const r=[...m.map(s=>s.styleSheet),t];super(e,r),this.changeLocation=async()=>{try{const s=await this._selectElement.location;s&&(this._onSelect?this._onSelect(s):this.zoomTo(s))}catch(s){console.error("Locatie kan niet opgehaald worden.",s)}},this.stopPropagation=s=>{s.stopPropagation()},this.configure()}static get _observedAttributes(){return["placeholder","search-placeholder","search-empty-text","search-no-results-text"]}static get _observedClassAttributes(){return["with-offset"]}get _classPrefix(){return"vl-map-search--"}connectedCallback(){this.addEventListener("vl-input",this.changeLocation),this.addEventListener("keypress",this.stopPropagation),this.map?.isLambert2008&&this._selectElement.setAttribute("lambert2008","")}get _selectElement(){return this._shadow?.querySelector("vl-select-location")}bindMap(e){this._map=e,e.isLambert2008&&this._selectElement.setAttribute("lambert2008","")}get map(){return this._map||(this.parentNode&&this.parentNode instanceof _?this.parentNode:null)}onSelect(e){this._onSelect=e}zoomTo(e){this._map.zoomTo(e,14)}configure(){customElements.whenDefined("vl-map").then(()=>{this.parentNode&&this.parentNode.map&&(this._map=this.parentNode?._shadow?.host,this._map.map.addOverlay(new b({className:"vl-map-search__overlaycontainer",element:this})))})}_placeholderChangedCallback(e,t){this._dispatchSelectAttribute("placeholder",t)}_searchPlaceholderChangedCallback(e,t){this._dispatchSelectAttribute("search-placeholder",t)}_searchEmptyTextChangedCallback(e,t){this._dispatchSelectAttribute("search-empty-text",t)}_searchNoResultsTextChangedCallback(e,t){this._dispatchSelectAttribute("search-no-results-text",t)}_dispatchSelectAttribute(e,t){t!=null?this._selectElement.setAttribute(`${a.attributePrefix}${e}`,t):this._selectElement.removeAttribute(`${a.attributePrefix}${e}`)}disconnectedCallback(){this.removeEventListener("keypress",this.stopPropagation),this._selectElement.removeEventListener("vl-input",this.changeLocation)}};c([u,n]);a=g([h("vl-map-search")],a);
