import{i as r,B as c,t as g}from"./iframe-BAEsER5t.js";import{u as d}from"./vl-map-base-layer-Ba3ZBrry.js";var h=Object.getOwnPropertyDescriptor,m=(e,s,l,o)=>{for(var t=o>1?void 0:o?h(s,l):s,a=e.length-1,n;a>=0;a--)(n=e[a])&&(t=n(t)||t);return t};let i=class extends c{connectedCallback(){super.connectedCallback(),this.eventKeyLoadStart=this.map.on("loadstart",()=>{this.toggleLoadingClass(!0)}),this.eventKeyLoadEnd=this.map.on("loadend",()=>{this.toggleLoadingClass(!1)})}disconnectedCallback(){super.disconnectedCallback(),d(this.eventKeyLoadStart),d(this.eventKeyLoadEnd)}toggleLoadingClass(e){e?this.classList.add("loading"):this.classList.remove("loading")}get map(){return this.closest("vl-map")}};i.styles=r`
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

        @keyframes reducedMotion {
            0% {
                opacity: 0.25;
            }
            50% {
                opacity: 1;
            }
            100% {
                opacity: 0.25;
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

        @media (prefers-reduced-motion: reduce) {
            :host(.loading) {
                width: 100%;
                animation: reducedMotion 2s infinite ease-in-out;
            }
        }
    `;i=m([g("vl-map-loading-indicator")],i);
