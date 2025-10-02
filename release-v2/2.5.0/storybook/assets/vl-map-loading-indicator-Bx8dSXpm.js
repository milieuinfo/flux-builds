import{n as r,B as g,o as c}from"./iframe-CflcmDUD.js";import{u as l}from"./vl-map-base-layer-BvMalALX.js";var h=Object.getOwnPropertyDescriptor,m=(e,n,d,i)=>{for(var t=i>1?void 0:i?h(n,d):n,a=e.length-1,o;a>=0;a--)(o=e[a])&&(t=o(t)||t);return t};let s=class extends g{connectedCallback(){super.connectedCallback(),this.eventKeyLoadStart=this.map.on("loadstart",()=>{this.toggleLoadingClass(!0)}),this.eventKeyLoadEnd=this.map.on("loadend",()=>{this.toggleLoadingClass(!1)})}disconnectedCallback(){super.disconnectedCallback(),l(this.eventKeyLoadStart),l(this.eventKeyLoadEnd)}toggleLoadingClass(e){e?this.classList.add("loading"):this.classList.remove("loading")}get map(){return this.closest("vl-map")}};s.styles=r`
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
    `;s=m([c("vl-map-loading-indicator")],s);
