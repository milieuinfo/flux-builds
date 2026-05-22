import{w as c,f as h,v as m,aU as v,aV as S,aW as p}from"./iframe-D9dm7PbY.js";var d=Object.getOwnPropertyDescriptor,u=(t,e,l,n)=>{for(var s=n>1?void 0:n?d(e,l):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(s=a(s)||s);return s};let i=class extends h{constructor(){const t=`
            <slot></slot>
        `,e=new CSSStyleSheet;e.replaceSync(`
            :host {
                margin: -1.5rem;
                display: block;
            }
        `);const l=[...m.map(n=>n.styleSheet),e];super(t,l)}};i=u([c("vl-map-side-sheet-menu")],i);var y=Object.getOwnPropertyDescriptor,_=(t,e,l,n)=>{for(var s=n>1?void 0:n?y(e,l):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(s=a(s)||s);return s};let o=class extends h{static get _observedAttributes(){return["title","href"]}constructor(){const t=`
            <div>
                <div class="vl-map-side-sheet-menu-item">
                    <a id="vl-map-side-sheet-menu-item-link" class="vl-link" href="#">
                        <span class="vl-icon vl-icon--arrow-left-fat vl-link__icon vl-link__icon--before"></span><span id="title">Terug</span>
                    </a>
                </div>
                <slot></slot>
            </div>
        `,e=new CSSStyleSheet;e.replaceSync(`
            .vl-map-side-sheet-menu-item {
                background: #e8ebee;
                padding: 2rem;
            }

            slot {
                padding: 1.5rem;
                display: block;
            }
        `);const l=[v.styleSheet,S.styleSheet,p(".vl-link").styleSheet,e];super(t,l)}get _titleElement(){return this._shadow?.querySelector("#title")}get _hrefElement(){return this._shadow?.querySelector("#vl-map-side-sheet-menu-item-link")}_titleChangedCallback(t,e){e&&(this._titleElement.innerText=e)}_hrefChangedCallback(t,e){e&&this._hrefElement.setAttribute("href",e)}};o=_([c("vl-map-side-sheet-menu-item")],o);
