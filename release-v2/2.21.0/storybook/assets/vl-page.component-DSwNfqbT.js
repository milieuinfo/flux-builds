import{i as v,B as i,b as p,w as h}from"./iframe-CsVpDM3d.js";const f=v`
    :host {
        display: block;
    }

    :host([v-center]),
    :host([v-stretch]) {
        display: flex;
        flex-direction: column;
    }

    :host([v-center]) .vl-page {
        margin-block: auto;
    }

    :host([v-stretch]) .vl-page {
        display: flex;
        flex: 1;
        flex-direction: column;
    }

    :host([v-stretch]) .vl-main-content {
        display: flex;
        flex: 1;
        flex-wrap: wrap;
    }

    :host([v-stretch]) ::slotted([slot='main']) {
        flex: 1 1 100%;
        min-width: 0;
    }
`,n={vCenter:!1,vStretch:!1};var m=Object.getOwnPropertyDescriptor,u=(r,s,c,l)=>{for(var e=l>1?void 0:l?m(s,c):s,t=r.length-1,a;t>=0;t--)(a=r[t])&&(e=a(e)||e);return e};let o=class extends i{constructor(){super(...arguments),this.vCenter=n.vCenter,this.vStretch=n.vStretch}static get styles(){return[f]}static get properties(){return{vCenter:{type:Boolean,attribute:"v-center",reflect:!0},vStretch:{type:Boolean,attribute:"v-stretch",reflect:!0}}}render(){return p`
            <slot name="header"></slot>
            <div class="vl-page">
                <main class="vl-main-content">
                    <slot name="main"></slot>
                </main>
            </div>
            <slot name="footer"></slot>
        `}};o=u([h("vl-page")],o);export{o as V};
