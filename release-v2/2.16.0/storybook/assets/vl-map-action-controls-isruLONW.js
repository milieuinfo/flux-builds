import{i as c,t as s,B as d,x as p}from"./iframe-B0laZkYe.js";const v=c`
    div {
        position: absolute;
        right: 0px;
        z-index: 1;
        display: flex;
        column-gap: 10px;
        padding: 10px;
    }
`;var h=Object.getOwnPropertyDescriptor,g=(e,n,t,l)=>{for(var o=l>1?void 0:l?h(n,t):n,i=e.length-1,a;i>=0;i--)(a=e[i])&&(o=a(o)||o);return o};let r=class extends d{static get styles(){return[v]}connectedCallback(){super.connectedCallback(),this.actionControls.forEach(e=>{e.addEventListener("change-control",n=>{const t=e.getAttribute("action-id");this.handleActionControlChange(t,n)})})}render(){return p`
            <div>
                <slot></slot>
            </div>
        `}get actionControls(){return this.querySelectorAll("vl-map-action-control")}handleActionControlChange(e,n){n.detail?.isActive&&[...this.actionControls].filter(t=>t.getAttribute("action-id")!==e).filter(t=>t.active).forEach(t=>t.deactivate())}};r=g([s("vl-map-action-controls")],r);
