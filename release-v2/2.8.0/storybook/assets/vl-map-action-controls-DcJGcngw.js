import{z as s,A as c,B as d,x as p}from"./iframe-BQb9mjVp.js";const v=s`
    div {
        position: absolute;
        right: 0px;
        z-index: 1;
        display: flex;
        column-gap: 10px;
        padding: 10px;
    }
`;var h=Object.getOwnPropertyDescriptor,g=(e,n,t,i)=>{for(var o=i>1?void 0:i?h(n,t):n,a=e.length-1,l;a>=0;a--)(l=e[a])&&(o=l(o)||o);return o};let r=class extends d{static get styles(){return[v]}connectedCallback(){super.connectedCallback(),this.actionControls.forEach(e=>{e.addEventListener("change-control",n=>{const t=e.getAttribute("action-id");this.handleActionControlChange(t,n)})})}render(){return p`
            <div>
                <slot></slot>
            </div>
        `}get actionControls(){return this.querySelectorAll("vl-map-action-control")}handleActionControlChange(e,n){n.detail?.isActive&&[...this.actionControls].filter(t=>t.getAttribute("action-id")!==e).filter(t=>t.active).forEach(t=>t.deactivate())}};r=g([c("vl-map-action-controls")],r);
