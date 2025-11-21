import{Q as d,P as p,H as u,I as m,x as k}from"./iframe-BRJWU34U.js";import"./preload-helper-D9Z9MdNV.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,y={...m,closable:!1,checkable:!1,checked:!1,type:"",disabled:!1,close:l("close"),check:l("check"),click:l("click"),clickable:!1},f={...u,closable:{name:"closable",description:"The attribute that determines whether the pill can be removed or not (cannot be used in combination with checkable or clickable).",table:{type:{summary:"boolean"},category:"Attributes",defaultValue:{summary:"false"}}},checkable:{name:"checkable",description:"The attribute that determines whether the pill can be checked or not (cannot be used in combination with closable or clickable).",table:{type:{summary:"boolean"},category:"Attributes",defaultValue:{summary:"false"}}},checked:{name:"checked",description:"The property that determines whether the pill is checked or not.",table:{type:{summary:"boolean"},category:"Properties",defaultValue:{summary:"false"}}},type:{name:"type",description:"The attribute that determines the type. ",control:{type:p.SELECT},options:["success","warning","error"],table:{type:{summary:d(["success","warning","error"])},category:"Attributes",defaultValue:{summary:""}}},disabled:{name:"disabled",description:"The attribute that determines whether the pill is disabled or not.",table:{type:{summary:"boolean"},category:"Attributes",defaultValue:{summary:"false"}}},close:{name:"close",description:"The custom event that is triggered on click of the pill's close button.",table:{category:"Events"}},check:{name:"check",description:"The custom event that is triggered on input of the pill's checkbox. In the detail of the event you can find whether the pill is getting checked or unchecked.",table:{category:"Events"}},clickable:{name:"clickable",description:"The attribute that determines whether the pill can be clicked or not (cannot be used in combination with closable or checkable).",table:{type:{summary:"boolean"},category:"Attributes",defaultValue:{summary:"false"}}},click:{name:"click",description:"The custom event that is triggered on click of a pill button. Requires the clickable attribute to be set.",table:{category:"Events"}}},$={id:"components-block-pill-pill",title:"Components - Block/pill/pill",tags:["autodocs"],args:y,argTypes:f},t=({closable:a,checkable:i,clickable:s,click:o,checked:n,type:c,disabled:r,close:b,check:h})=>k`
    <vl-pill
        ?closable=${a}
        ?checkable=${i}
        ?clickable=${s}
        type=${c}
        ?disabled=${r}
        .checked=${n}
        @close=${e=>b(e)}
        @check=${e=>h(e.detail)}
        @click=${e=>o(e)}
        data-cy="pill"
    >
        ${c||"Optie 1"}
    </vl-pill>
`;t.storyName="vl-pill - default";t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  closable,
  checkable,
  clickable,
  click,
  checked,
  type,
  disabled,
  close,
  check
}: typeof pillArgs) => html\`
    <vl-pill
        ?closable=\${closable}
        ?checkable=\${checkable}
        ?clickable=\${clickable}
        type=\${type}
        ?disabled=\${disabled}
        .checked=\${checked}
        @close=\${(event: any) => close(event)}
        @check=\${(event: any) => check(event.detail)}
        @click=\${(event: any) => click(event)}
        data-cy="pill"
    >
        \${type || 'Optie 1'}
    </vl-pill>
\``,...t.parameters?.docs?.source}}};const T=["PillDefault"];export{t as PillDefault,T as __namedExportsOrder,$ as default};
