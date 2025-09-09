"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[7369],{"../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(e,t,n)=>{n.d(t,{f:()=>b});var o=n("../../node_modules/react/index.js"),c=n("../../node_modules/react-dom/client.js"),s=new Map,r=({callback:e,children:t})=>{let n=(0,o.useRef)();return(0,o.useLayoutEffect)(()=>{n.current!==e&&(n.current=e,e())},[e]),t},l=async(e,t)=>{let n=await i(t);return new Promise(t=>{n.render(o.createElement(r,{callback:()=>t(null)},e))})},a=(e,t)=>{let n=s.get(e);n&&(n.unmount(),s.delete(e))},i=async e=>{let t=s.get(e);return t||(t=c.createRoot(e),s.set(e,t)),t},d=n("../../node_modules/@storybook/blocks/dist/index.mjs"),h={code:d.XA,a:d.zE,...d.Sw},u=class extends o.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:o.createElement(o.Fragment,null,t)}},b=class{constructor(){this.render=async(e,t,c)=>{let s={...h,...t?.components},r=d.kQ;return new Promise((a,i)=>{n.e(814).then(n.bind(n,"../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:n})=>l(o.createElement(u,{showException:i,key:Math.random()},o.createElement(n,{components:s},o.createElement(r,{context:e,docsParameter:t}))),c)).then(()=>a())})},this.unmount=e=>{a(e)}}}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(e,t,n)=>{n.d(t,{Hl:()=>o.Hl,W8:()=>o.W8,kL:()=>o.kL,ov:()=>o.ov}),n("../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var o=n("../../node_modules/@storybook/blocks/dist/index.mjs")},"../../libs/form/src/next/checkbox/stories/vl-checkbox.stories.ts":(e,t,n)=>{n.r(t),n.d(t,{CheckboxDefault:()=>y,CheckboxReadonly:()=>j,CheckboxSwitch:()=>$,CheckboxValue:()=>w,__namedExportsOrder:()=>_,default:()=>g});var o=n("../../node_modules/lit-html/lit-html.js"),c=n("../../libs/common/storybook/src/index.ts"),s=n("../../node_modules/@storybook/addon-actions/dist/index.mjs"),r=n("../../libs/form/src/next/form-control/stories/form-control.stories-arg.ts"),l=n("../../libs/form/src/next/checkbox/vl-checkbox.defaults.ts");let a={...r.Z,...l.o,contentSlot:"",onVlChange:(0,s.XI)("vl-change"),onVlInput:(0,s.XI)("vl-input"),onVlValid:(0,s.XI)("vl-valid")},i={...r.x,block:{name:"block",description:"Duidt aan dat de component de volledige breedte van zijn parent mag innemen.",table:{type:{summary:c.QE.BOOLEAN},category:c.R6.ATTRIBUTES,defaultValue:{summary:a.block}}},id:{name:"id",description:"De id van het veld.<br>Bij de switch variant moet je een id instellen.",type:{name:"boolean",required:!0},table:{type:{summary:c.QE.STRING,required:!0},category:c.R6.ATTRIBUTES,defaultValue:{summary:r.Z.id}}},value:{name:"value",description:"De value van de checkbox.",table:{type:{summary:c.QE.STRING},category:c.R6.ATTRIBUTES,defaultValue:{summary:a.value}}},checked:{name:"checked",description:"Vinkt de checkbox aan of uit.",table:{type:{summary:c.QE.BOOLEAN},category:c.R6.ATTRIBUTES,defaultValue:{summary:a.checked}}},isSwitch:{name:"switch",description:"Beeldt de checkbox af als een switch.",table:{type:{summary:c.QE.BOOLEAN},category:c.R6.ATTRIBUTES,defaultValue:{summary:a.isSwitch}}},contentSlot:{name:"content",description:"De content van de checkbox.",table:{category:c.R6.SLOTS,type:{summary:c.QE.HTML},defaultValue:{summary:a.contentSlot}}},onVlChange:{name:"vl-change",description:"Event dat afgevuurd wordt als de checkbox aangevinkt of uitgevinkt wordt (zowel programmatorisch als door een gebruiker).<br>Het detail object van het event bevat de checked state en de waarde van de checkbox indien deze aangevinkt is.",table:{type:{summary:"{ value: string }"},category:c.R6.EVENTS}},onVlInput:{name:"vl-input",description:"Event dat alleen afgevuurd wordt als de gebruiker de checkbox aanvinkt of uitvinkt.<br>Het detail object van het event bevat de checked state en de waarde van de checkbox indien deze aangevinkt is.",table:{type:{summary:"{ checked: boolean, value?: string }"},category:c.R6.EVENTS}},onVlValid:{name:"vl-valid",description:"Event dat afgevuurd wordt als de checkbox valid is.<br>Het detail object van het event bevat de checked state en de waarde van de checkbox indien deze aangevinkt is.",table:{type:{summary:"{ checked: boolean, value?: string }"},category:c.R6.EVENTS}}};n("../../node_modules/react/index.js");var d=n("../../node_modules/react/jsx-runtime.js"),h=n("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),u=n("../../node_modules/@storybook/addon-docs/dist/index.mjs"),b=n("../../libs/form/src/next/form-control/stories/form-control.public-methods-doc.mdx");function m(e){let t=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",h3:"h3",h4:"h4",em:"em",blockquote:"blockquote"},(0,h.RP)(),e.components),{VluxMetaData:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VluxMetaData",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.h1,{id:"checkbox---next",children:"Checkbox - next"}),"\n",(0,d.jsx)(n,{id:"form-next-checkbox"}),"\n",(0,d.jsxs)(t.p,{children:["Gebruik de ",(0,d.jsx)(t.code,{children:"checkbox-next"})," component om de gebruiker de mogelijkheid te geven om 1 of meerdere dingen te selecteren in een lijst.",(0,d.jsx)("br",{}),"\nZie het ",(0,d.jsx)(t.a,{href:"/docs/ontwerp-form-demo--documentatie",children:"form demo"})," voorbeeld voor het gebruik binnen een form."]}),"\n",(0,d.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-js",children:"import { VlCheckboxComponent } from '@domg-wc/form/next/checkbox';\n"})}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-html",children:"<vl-checkbox-next></vl-checkbox-next>\n"})}),"\n",(0,d.jsx)(u.Hl,{of:y}),"\n",(0,d.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,d.jsx)(u.ov,{of:y}),"\n",(0,d.jsx)(t.h2,{id:"publieke-methodes",children:"Publieke methodes"}),"\n",(0,d.jsx)(b.A,{}),"\n",(0,d.jsx)(t.h2,{id:"varianten",children:"Varianten"}),"\n",(0,d.jsx)(t.h3,{id:"met-value",children:"Met value"}),"\n",(0,d.jsxs)(t.p,{children:["Indien er geen value meegegeven wordt aan de checkbox, wordt er tijdens het submitten van een form de value ",(0,d.jsx)(t.code,{children:"on"})," teruggegeven.",(0,d.jsx)("br",{}),"\nDit is zoals de HTML5 standaard het voorschrijft. Indien er wel een value meegegeven wordt, zal deze value teruggegeven worden."]}),"\n",(0,d.jsx)(u.Hl,{of:w}),"\n",(0,d.jsx)(t.h3,{id:"switch",children:"Switch"}),"\n",(0,d.jsx)(t.h4,{id:"gebruik",children:"Gebruik"}),"\n",(0,d.jsxs)(t.p,{children:["Semantisch gezien moet een switch gebruikt worden om onmiddellijk een actie te ondernemen, zoals het aan- en uitzetten van een instelling.",(0,d.jsx)("br",{}),"\n",(0,d.jsx)(t.em,{children:"NIET"}),': een switch gebruiken om een selectie te valideren, bv. "gelezen & goedgekeurd"\n',(0,d.jsx)(t.em,{children:"WEL"}),": dark mode aan- en uitzetten, adresgegevens tonen of verbergen"]}),"\n",(0,d.jsx)(u.Hl,{of:$}),"\n",(0,d.jsx)(t.h2,{id:"validatie",children:"Validatie"}),"\n",(0,d.jsxs)(t.blockquote,{children:["\n",(0,d.jsxs)(t.p,{children:["Meer info over validatie binnen onze form componenten vind je hier: ",(0,d.jsx)(t.a,{href:"/docs/ontwerp-form-validation--documentatie",children:"Form - Validatie"})]}),"\n"]}),"\n",(0,d.jsx)(t.h3,{id:"read-only",children:"Read only"}),"\n",(0,d.jsxs)(t.p,{children:["Readonly zorgt ervoor dat de value van een input niet aangepast kan worden, hierdoor heeft readonly plaatsen op een checkbox geen effect aangezien het aan- en uitvinken de checked state aanpast en niet de value.",(0,d.jsx)("br",{}),"\nAls je een checkbox als readonly wilt gebruiken, moet je het ",(0,d.jsx)(t.code,{children:"disabled"})," attribuut meegeven en gebruik maken van een hidden input zodat de value toch mee met het form gesubmit wordt.",(0,d.jsx)("br",{}),"\nZie dat de value van de hidden input overeenkomt met de checked state en de value van de disabled checkbox."]}),"\n",(0,d.jsx)(u.Hl,{of:j}),"\n",(0,d.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,d.jsx)(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,d.jsx)(t.p,{children:(0,d.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/forms/vl-ui-checkbox/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Checkbox"})})]})}var v=n("../../node_modules/lit/directives/unsafe-html.js"),k=n("../../libs/common/utilities/src/index.ts"),x=n("../../libs/form/src/next/checkbox/vl-checkbox.component.ts"),p=n("../../node_modules/lit/index.js");(0,k.gy)([x.v]);let g={id:"form-next-checkbox",title:"Form-next/checkbox",tags:["autodocs"],args:a,argTypes:i,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,h.RP)(),e.components);return t?(0,d.jsx)(t,Object.assign({},e,{children:(0,d.jsx)(m,e)})):m(e)}}}},f=(0,c._7)(a,({id:e,name:t,label:n,required:c,disabled:s,error:r,success:l,block:a,value:i,checked:d,isSwitch:h,contentSlot:u,onVlChange:b,onVlInput:m,onVlReset:k,onVlValid:x})=>(0,o.qy)`
        <vl-checkbox-next
            id=${e}
            name=${t}
            label=${n}
            ?required=${c}
            ?disabled=${s}
            ?error=${r}
            ?success=${l}
            ?block=${a}
            value=${i}
            ?checked=${d}
            ?switch=${h}
            @vl-input=${m}
            @vl-change=${b}
            @vl-reset=${k}
            @vl-valid=${x}
        >
            ${(0,v._)(u)}
        </vl-checkbox-next>
    `),y=f.bind({});y.storyName="vl-checkbox-next - default",y.args={id:"checkbox-default",name:"checkbox",contentSlot:"<span>Bevestig</span>"};let w=f.bind({});w.storyName="vl-checkbox-next - value",w.args={id:"checkbox-value",name:"checkbox",value:"bevestigd",contentSlot:"<span>Bevestig</span>"};let $=f.bind({});$.storyName="vl-checkbox-next - switch",$.args={id:"checkbox-switch",name:"checkbox",isSwitch:!0,contentSlot:"<span>Instellingen toepassen</span>"};let j=(0,c._7)(a,({id:e,name:t,label:n,required:c,disabled:s,error:r,success:l,block:a,value:i,checked:d,isSwitch:h,contentSlot:u,onVlInput:b})=>(0,o.qy)`
        <vl-checkbox-next
            id=${e}
            name=${t}
            label=${n}
            ?required=${c}
            ?disabled=${s}
            ?error=${r}
            ?success=${l}
            ?block=${a}
            value=${i}
            ?checked=${d}
            ?switch=${h}
            @vl-input=${b}
        >
            ${(0,v._)(u)}
        </vl-checkbox-next>
        <input type="hidden" name=${t} value=${d?i||"on":p.s6} />
    `);j.storyName="vl-checkbox-next - readonly",j.args={id:"checkbox-readonly",name:"checkbox",disabled:!0,checked:!0,value:"bevestigd",contentSlot:"<span>Bevestig</span>"},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:"story(checkboxArgs, ({\n  id,\n  name,\n  label,\n  required,\n  disabled,\n  error,\n  success,\n  block,\n  value,\n  checked,\n  isSwitch,\n  contentSlot,\n  onVlChange,\n  onVlInput,\n  onVlReset,\n  onVlValid\n}) => html`\n        <vl-checkbox-next\n            id=${id}\n            name=${name}\n            label=${label}\n            ?required=${required}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?success=${success}\n            ?block=${block}\n            value=${value}\n            ?checked=${checked}\n            ?switch=${isSwitch}\n            @vl-input=${onVlInput}\n            @vl-change=${onVlChange}\n            @vl-reset=${onVlReset}\n            @vl-valid=${onVlValid}\n        >\n            ${unsafeHTML(contentSlot)}\n        </vl-checkbox-next>\n    `)",...y.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:"story(checkboxArgs, ({\n  id,\n  name,\n  label,\n  required,\n  disabled,\n  error,\n  success,\n  block,\n  value,\n  checked,\n  isSwitch,\n  contentSlot,\n  onVlChange,\n  onVlInput,\n  onVlReset,\n  onVlValid\n}) => html`\n        <vl-checkbox-next\n            id=${id}\n            name=${name}\n            label=${label}\n            ?required=${required}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?success=${success}\n            ?block=${block}\n            value=${value}\n            ?checked=${checked}\n            ?switch=${isSwitch}\n            @vl-input=${onVlInput}\n            @vl-change=${onVlChange}\n            @vl-reset=${onVlReset}\n            @vl-valid=${onVlValid}\n        >\n            ${unsafeHTML(contentSlot)}\n        </vl-checkbox-next>\n    `)",...w.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:"story(checkboxArgs, ({\n  id,\n  name,\n  label,\n  required,\n  disabled,\n  error,\n  success,\n  block,\n  value,\n  checked,\n  isSwitch,\n  contentSlot,\n  onVlChange,\n  onVlInput,\n  onVlReset,\n  onVlValid\n}) => html`\n        <vl-checkbox-next\n            id=${id}\n            name=${name}\n            label=${label}\n            ?required=${required}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?success=${success}\n            ?block=${block}\n            value=${value}\n            ?checked=${checked}\n            ?switch=${isSwitch}\n            @vl-input=${onVlInput}\n            @vl-change=${onVlChange}\n            @vl-reset=${onVlReset}\n            @vl-valid=${onVlValid}\n        >\n            ${unsafeHTML(contentSlot)}\n        </vl-checkbox-next>\n    `)",...$.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:"story(checkboxArgs, ({\n  id,\n  name,\n  label,\n  required,\n  disabled,\n  error,\n  success,\n  block,\n  value,\n  checked,\n  isSwitch,\n  contentSlot,\n  onVlInput\n}) => html`\n        <vl-checkbox-next\n            id=${id}\n            name=${name}\n            label=${label}\n            ?required=${required}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?success=${success}\n            ?block=${block}\n            value=${value}\n            ?checked=${checked}\n            ?switch=${isSwitch}\n            @vl-input=${onVlInput}\n        >\n            ${unsafeHTML(contentSlot)}\n        </vl-checkbox-next>\n        <input type=\"hidden\" name=${name} value=${checked ? value || 'on' : nothing} />\n    `)",...j.parameters?.docs?.source}}};let _=["CheckboxDefault","CheckboxValue","CheckboxSwitch","CheckboxReadonly"]},"../../libs/form/src/next/form-control/stories/form-control.public-methods-doc.mdx":(e,t,n)=>{n.d(t,{A:()=>r}),n("../../node_modules/react/index.js");var o=n("../../node_modules/react/jsx-runtime.js"),c=n("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");function s(e){let t=Object.assign({h3:"h3",p:"p",blockquote:"blockquote"},(0,c.RP)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h3,{id:"resetformcontrol",children:"resetFormControl()"}),"\n",(0,o.jsxs)(t.p,{children:["Reset de form control.",(0,o.jsx)("br",{}),"\nDe value van de control wordt teruggezet op de initiële value. Deze methode wordt ook aangeroepen als de form zelf\ngereset wordt."]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Opgelet: het is belangrijk de initiële waarde in te stellen op de form control vóór de form control gerenderd wordt.\nAnders wordt een lege value ingesteld als initiële waarde."}),"\n"]})]})}let r=function(e={}){let{wrapper:t}=Object.assign({},(0,c.RP)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(s,e)})):s(e)}},"../../node_modules/lit-html/directives/unsafe-html.js":(e,t,n)=>{n.d(t,{_:()=>r});var o=n("../../node_modules/lit-html/lit-html.js"),c=n("../../node_modules/lit-html/directive.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class s extends c.WL{constructor(e){if(super(e),this.et=o.s6,e.type!==c.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===o.s6||null==e)return this.vt=void 0,this.et=e;if(e===o.c0)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;var t=[e];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}}s.directiveName="unsafeHTML",s.resultType=1;var r=(0,c.u$)(s)},"../../node_modules/lit/directives/unsafe-html.js":(e,t,n)=>{n.d(t,{_:()=>o._});var o=n("../../node_modules/lit-html/directives/unsafe-html.js")},"../../node_modules/react-dom/client.js":(e,t,n)=>{var o=n("../../node_modules/react-dom/index.js");t.createRoot=o.createRoot,t.hydrateRoot=o.hydrateRoot},"../../libs/form/src/next/checkbox/vl-checkbox.component.ts":(e,t,n)=>{n.d(t,{v:()=>u});var o=n("../../libs/common/utilities/src/index.ts"),c=n("../../libs/elements/src/index.ts"),s=n("../../node_modules/@domg/govflanders-style/common/index.js"),r=n("../../node_modules/@domg/govflanders-style/component/index.js"),l=n("../../node_modules/lit/index.js"),a=n("../../node_modules/lit/directives/class-map.js"),i=n("../../libs/form/src/next/form-control/form-control.ts");let d=(0,l.AH)`
    :host {
        --vl-checkbox--switch__error-color: #d2373c;
        --vl-checkbox--switch__error-background-color: #fbebec;
        --vl-checkbox--switch__success-color: #009e47;
        --vl-checkbox--switch__success-background-color: #e6f5ed;
    }

    .vl-checkbox--error .vl-checkbox--switch + .vl-checkbox__label .vl-checkbox--switch__label::after {
        border-color: var(--vl-checkbox--switch__error-color) !important;
    }

    .vl-checkbox--error .vl-checkbox--switch:not(:checked) + .vl-checkbox__label .vl-checkbox--switch__label::after {
        background: #fff;
    }
    .vl-checkbox--error .vl-checkbox--switch + .vl-checkbox__label .vl-checkbox--switch__label {
        background: #fff;
        color: var(--vl-checkbox--switch__error-color);
        border-color: var(--vl-checkbox--switch__error-color);
    }

    .vl-checkbox--error .vl-checkbox--switch:checked + .vl-checkbox__label .vl-checkbox--switch__label {
        background: var(--vl-checkbox--switch__error-background-color);
        border-color: var(--vl-checkbox--switch__error-color);
    }

    .vl-checkbox--success .vl-checkbox--switch + .vl-checkbox__label .vl-checkbox--switch__label::after {
        border-color: var(--vl-checkbox--switch__success-color) !important;
    }

    .vl-checkbox--success .vl-checkbox--switch:not(:checked) + .vl-checkbox__label .vl-checkbox--switch__label::after {
        background: #fff;
    }
    .vl-checkbox--success .vl-checkbox--switch + .vl-checkbox__label .vl-checkbox--switch__label {
        background: #fff;
        color: var(--vl-checkbox--switch__success-color);
        border-color: var(--vl-checkbox--switch__success-color);
    }

    .vl-checkbox--success .vl-checkbox--switch:checked + .vl-checkbox__label .vl-checkbox--switch__label {
        background: var(--vl-checkbox--switch__success-background-color);
        border-color: var(--vl-checkbox--switch__success-color);
    }
`;var h=n("../../libs/form/src/next/checkbox/vl-checkbox.defaults.ts");class u extends i.M{static get styles(){return[s.h8,s.BI,c.hF,r.Bc,d]}static get properties(){return{block:{type:Boolean},value:{type:String},checked:{type:Boolean,reflect:!0},isSwitch:{type:Boolean,attribute:"switch"}}}connectedCallback(){super.connectedCallback(),this.initialValue||(this.initialValue=this.value,this.initialCheckedValue=this.checked)}updated(e){if(super.updated(e),e.has("checked")||e.has("value")){let e=this.checked?this.value||"on":null,t={checked:this.checked};this.checked&&(t.value=e),this.setValue(e),this.dispatchEvent(new CustomEvent("vl-change",{composed:!0,bubbles:!0,detail:t})),this.dispatchInput&&(this.dispatchEvent(new CustomEvent("vl-input",{bubbles:!0,composed:!0,detail:t})),this.dispatchInput=!1),this.dispatchEventIfValid(t)}}render(){return(0,l.qy)` ${this.isSwitch?this.renderCheckboxSwitch():this.renderCheckboxDefault()} `}renderCheckboxDefault(){let e={"vl-checkbox":!0,"vl-checkbox--disabled":this.disabled,"vl-checkbox--error":this.isInvalid||this.error,"vl-checkbox--success":this.success,"vl-checkbox--block":this.block};return(0,l.qy)`
            <label class=${(0,a.H)(e)}>
                <input
                    id=${this.id||l.s6}
                    name=${this.name||l.s6}
                    class="vl-checkbox__toggle"
                    type="checkbox"
                    aria-invalid=${this.isInvalid||l.s6}
                    ?required=${this.required}
                    ?disabled=${this.disabled}
                    ?error=${this.error}
                    .value=${this.value}
                    .checked=${this.checked}
                    @click=${this.toggle}
                />
                <div class="vl-checkbox__label">
                    <i class="vl-checkbox__box" aria-hidden="true"></i>
                    <span>
                        <slot></slot>
                    </span>
                </div>
            </label>
        `}renderCheckboxSwitch(){let e={"vl-checkbox--switch__wrapper":!0,"vl-checkbox--disabled":this.disabled,"vl-checkbox--error":this.isInvalid||this.error,"vl-checkbox--success":this.success,"vl-checkbox--block":this.block};return(0,l.qy)`
            <div class=${(0,a.H)(e)}>
                <input
                    id=${this.id||l.s6}
                    name=${this.name||l.s6}
                    type="checkbox"
                    class="vl-checkbox--switch"
                    role="switch"
                    ?required=${this.required}
                    ?disabled=${this.disabled}
                    ?error=${this.error}
                    .value=${this.value}
                    .checked=${this.checked}
                    @click=${this.toggle}
                />
                <label for=${this.id} class="vl-checkbox__label">
                    <span class="vl-checkbox--switch__label">
                        <span aria-hidden="true"></span>
                    </span>
                    <span>
                        <slot></slot>
                    </span>
                </label>
            </div>
        `}get validationTarget(){return this.shadowRoot?.querySelector("input")}resetFormControl(){super.resetFormControl(),this.checked=this.initialCheckedValue,this.value=this.initialValue}toggle(){this.checked=!this.checked,this.dispatchInput=!0}constructor(...e){super(...e),this.block=h.o.block,this.value=h.o.value,this.checked=h.o.checked,this.isSwitch=h.o.isSwitch,this.initialValue=null,this.initialCheckedValue=!1,this.dispatchInput=!1}}u=function(e,t,n,o){var c,s=arguments.length,r=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(c=e[l])&&(r=(s<3?c(r):s>3?c(t,n,r):c(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r}([(0,o.M1)("vl-checkbox-next")],u)},"../../libs/form/src/next/checkbox/vl-checkbox.defaults.ts":(e,t,n)=>{n.d(t,{o:()=>o});let o={...n("../../libs/form/src/next/form-control/form-control.defaults.ts").i,block:!1,value:null,checked:!1,isSwitch:!1}},"../../libs/form/src/next/form-control/stories/form-control.stories-arg.ts":(e,t,n)=>{n.d(t,{Z:()=>r,x:()=>l});var o=n("../../libs/common/storybook/src/index.ts"),c=n("../../libs/form/src/next/form-control/form-control.defaults.ts"),s=n("../../node_modules/@storybook/addon-actions/dist/index.mjs");let r={...o.D8,...c.i,onVlReset:(0,s.XI)("vl-reset")},l={...(0,o.RN)(!0),id:{name:"id",description:"Het id van het veld.",table:{type:{summary:o.QE.STRING},category:o.R6.ATTRIBUTES,defaultValue:{summary:r.id}}},name:{name:"name",description:"De naam van het veld.",table:{type:{summary:o.QE.STRING},category:o.R6.ATTRIBUTES,defaultValue:{summary:r.name}}},label:{name:"label",description:"Vult het aria-label attribuut van het veld in.<br/>Kan gebruikt worden als er geen bijhorend label element of vl-form-label component is.",table:{type:{summary:o.QE.STRING},category:o.R6.ATTRIBUTES,defaultValue:{summary:r.label}}},required:{name:"required",description:"Duidt aan dat het veld verplicht is.",table:{type:{summary:o.QE.BOOLEAN},category:o.R6.ATTRIBUTES,defaultValue:{summary:r.required}}},disabled:{name:"disabled",description:"Beeldt de component in een disabled state af.",table:{type:{summary:o.QE.BOOLEAN},category:o.R6.ATTRIBUTES,defaultValue:{summary:r.disabled}}},error:{name:"error",description:"Beeldt de component in een error state af.",table:{type:{summary:o.QE.BOOLEAN},category:o.R6.ATTRIBUTES,defaultValue:{summary:r.error}}},success:{name:"success",description:"Beeldt de component in een success state af.",table:{type:{summary:o.QE.BOOLEAN},category:o.R6.ATTRIBUTES,defaultValue:{summary:r.success}}},onVlReset:{name:"vl-reset",description:"Event dat afgevuurd wordt wanneer het veld gereset wordt.",table:{category:o.R6.EVENTS}}}}}]);