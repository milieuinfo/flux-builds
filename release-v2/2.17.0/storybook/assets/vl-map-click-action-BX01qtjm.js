import{O as f}from"./vl-map-base-layer-CJ9Hplnc.js";import{i as u,B as m,t as d}from"./iframe-BgD7f6Cn.js";var v=Object.getOwnPropertyDescriptor,b=(a,e,o,i)=>{for(var t=i>1?void 0:i?v(e,o):e,r=a.length-1,s;r>=0;r--)(s=a[r])&&(t=s(t)||t);return t};let n=class extends m{};n.styles=u`
        :host {
            /* Set the marker size here */
            width: 2rem;
            height: 2rem;
            border-radius: 2rem;
            /* Set the marker color here */
            background: #0039aaff;

            display: inline-block;
            border-bottom-right-radius: 0;
            position: relative;
            transform: rotate(45deg);

            /* optional fanciness */
            border: 1px solid #0039aaff;
        }

        :host::before {
            content: '';
            background: white;
            width: 50%;
            height: 50%;
            border-radius: 100%;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);

            /* optional fanciness */
            box-shadow: 0.1rem 0.1rem 0.2rem 0.1rem rgba(0, 0, 0, 0.1);
        }

        /* shadow (optional if you don't need a shadow) */

        :host::after {
            content: '';
            background: rgba(128, 128, 128, 0.2);
            width: 75%;
            height: 75%;
            border-radius: 100%;
            position: absolute;
            top: 100%;
            left: 100%;
            transform: translate(-50%, -50%) rotate(45deg) scaleX(0.5);
        }
    `;n=b([d("vl-map-click-action-pindrop")],n);const p="vl-map-clicked",c=class c extends Event{constructor(e,o,i){super(p,{bubbles:!0}),this.coordinate=e,this.resolution=o,this.projection=i}};c.eventType=p;let l=c;var g=Object.getOwnPropertyDescriptor,y=(a,e,o,i)=>{for(var t=i>1?void 0:i?g(e,o):e,r=a.length-1,s;r>=0;r--)(s=a[r])&&(t=s(t)||t);return t};let h=class extends m{constructor(){super(),this.handleClick=a=>{if(!this.mapRef?.map)return;const e=this.mapRef.map.getOverlays().getArray().includes(this.overlay);this.overlay.setPosition(a.coordinate),e||this.mapRef.map.addOverlay(this.overlay),this.dispatchEvent(new l(a.coordinate,this.mapRef.map.getView().getResolution(),this.mapRef.map.getView().getProjection()))},this.overlay=new f({element:new n,positioning:"bottom-center",autoPan:{animation:{duration:250}}}),this.mapRef=null}connectedCallback(){super.connectedCallback(),this.mapRef=this.closest("vl-map"),this.mapRef?.map&&this.mapRef.map.on("singleclick",this.handleClick)}disconnectedCallback(){super.disconnectedCallback(),this.mapRef?.map&&(this.mapRef.map.removeOverlay(this.overlay),this.mapRef.map.un("singleclick",this.handleClick)),this.mapRef=null}};h=y([d("vl-map-click-action")],h);
