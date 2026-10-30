import{i as s,t as c,B as d,b as p}from"./iframe-ylVHDfb1.js";const v=s`
    div {
        position: absolute;
        right: 0px;
        z-index: 1;
        display: flex;
        column-gap: 10px;
        padding: 10px;
        transform: translateX(var(--vl-map--shift-action-controls));
    }
`;var h=Object.getOwnPropertyDescriptor,g=(e,n,t,r)=>{for(var o=r>1?void 0:r?h(n,t):n,a=e.length-1,i;a>=0;a--)(i=e[a])&&(o=i(o)||o);return o};let l=class extends d{static get styles(){return[v]}connectedCallback(){super.connectedCallback(),this.actionControls.forEach(e=>{e.addEventListener("change-control",n=>{const t=e.getAttribute("action-id");this.handleActionControlChange(t,n)})})}render(){return p`
            <div>
                <slot></slot>
            </div>
        `}get actionControls(){return this.querySelectorAll("vl-map-action-control")}handleActionControlChange(e,n){n.detail?.isActive&&[...this.actionControls].filter(t=>t.getAttribute("action-id")!==e).filter(t=>t.active).forEach(t=>t.deactivate())}};l=g([c("vl-map-action-controls")],l);
