import{y as h,F as n}from"./iframe-C7eocPW2.js";var d=Object.getOwnPropertyDescriptor,c=(s,t,o,l)=>{for(var e=l>1?void 0:l?d(t,o):t,i=s.length-1,r;i>=0;i--)(r=s[i])&&(e=r(e)||e);return e};let a=class extends n{constructor(){super(`
      :host {
        width: 3.5rem;
        transition: width 0.1s;
      }

      :host([open]) {
        width: var(--vl-side-sheet-width,calc(100%/3));
      }

      .vl-side-sheet__toggle {
        margin: 10px;
      }

      :host([open]) .vl-side-sheet__toggle {
        margin-left: 0px;
      }

      ::slotted(*) {
        margin-bottom: 20px;
      }
    `)}connectedCallback(){super.connectedCallback(),this.setAttribute("absolute",""),this.hasAttribute("right")||this.setAttribute("left",""),this._openChangedCallback()}_rightChangedCallback(s,t){t!=null?this.removeAttribute("left"):this.setAttribute("left","")}};a=c([h("vl-map-side-sheet")],a);
