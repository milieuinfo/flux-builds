import{a2 as k,a1 as f,W as x,X as j,u,j as e,C as v,b8 as $,x as r,bY as O}from"./iframe-BgD7f6Cn.js";import"./preload-helper-D9Z9MdNV.js";const{action:p}=__STORYBOOK_MODULE_ACTIONS__,C={...j,closable:!1,checkable:!1,checked:!1,type:"",disabled:!1,close:p("close"),check:p("check"),click:p("click"),clickable:!1},T={...x,closable:{name:"closable",description:"The attribute that determines whether the pill can be removed or not (cannot be used in combination with checkable or clickable).",table:{type:{summary:"boolean"},category:"Attributes",defaultValue:{summary:"false"}}},checkable:{name:"checkable",description:"The attribute that determines whether the pill can be checked or not (cannot be used in combination with closable or clickable).",table:{type:{summary:"boolean"},category:"Attributes",defaultValue:{summary:"false"}}},checked:{name:"checked",description:"The property that determines whether the pill is checked or not.",table:{type:{summary:"boolean"},category:"Properties",defaultValue:{summary:"false"}}},type:{name:"type",description:"The attribute that determines the type. ",control:{type:f.SELECT},options:["success","warning","error"],table:{type:{summary:k(["success","warning","error"])},category:"Attributes",defaultValue:{summary:""}}},disabled:{name:"disabled",description:"The attribute that determines whether the pill is disabled or not.",table:{type:{summary:"boolean"},category:"Attributes",defaultValue:{summary:"false"}}},close:{name:"close",description:"The custom event that is triggered on click of the pill's close button.",table:{category:"Events"}},check:{name:"check",description:"The custom event that is triggered on input of the pill's checkbox. In the detail of the event you can find whether the pill is getting checked or unchecked.",table:{category:"Events"}},clickable:{name:"clickable",description:"The attribute that determines whether the pill can be clicked or not (cannot be used in combination with closable or checkable).",table:{type:{summary:"boolean"},category:"Attributes",defaultValue:{summary:"false"}}},click:{name:"click",description:"The custom event that is triggered on click of a pill button. Requires the clickable attribute to be set.",table:{category:"Events"}}};function m(i){const l={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...u(),...i.components},{FluxComponentMetaData:o}=l;return o||A("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(l.h1,{id:"pill",children:"Pill"}),`
`,e.jsx(o,{id:"components-block-pill"}),`
`,e.jsx(l.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(l.p,{children:["Gebruik de ",e.jsx(l.code,{children:"pill"})," component voor het tonen van statussen, toegepaste filters, badges, etc.",e.jsx("br",{})]}),`
`,e.jsx(l.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(l.pre,{children:e.jsx(l.code,{className:"language-js",children:`import { VlPillComponent } from '@domg-wc/components/block';
`})}),`
`,e.jsx(l.pre,{children:e.jsx(l.code,{className:"language-html",children:`<vl-pill></vl-pill>
`})}),`
`,e.jsx(v,{of:a}),`
`,e.jsx(l.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx($,{of:a}),`
`,e.jsx(l.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(l.h3,{id:"alle-varianten",children:"Alle varianten"}),`
`,e.jsx(v,{of:c}),`
`,e.jsx(l.h3,{id:"aangepaste-kleuren",children:"Aangepaste kleuren"}),`
`,e.jsx(l.p,{children:"De kleuren van vl-pill zijn aanpasbaar met de volgende CSS variabelen:"}),`
`,e.jsx(l.pre,{children:e.jsx(l.code,{className:"language-css",children:`/* Default */
--vl-pill--border-color: var(--vl-color--border-alt);
--vl-pill--text-color: var(--vl-color--text-alt);
--vl-pill--background-color: #fff;
/* Hover */
--vl-pill--border-color-action: var(--vl-color--action);
--vl-pill--text-color-action: var(--vl-color--action);
--vl-pill--background-color-action: var(--vl-color--background-action-subtle);
`})}),`
`,e.jsxs(l.p,{children:[e.jsx(l.strong,{children:"Tip"}),": maak globale klassen om aangepaste pills te definiëren: ",e.jsx(l.code,{children:'<vl-pill class="paarse-pil">paarse pil</vl-pill>'})]}),`
`,e.jsx(v,{of:n}),`
`,e.jsxs(l.p,{children:["Voor bijkomende informatie zie ",e.jsx(l.a,{href:"/docs/styles-kleurenpalet--documentatie",children:"kleurenpalet"})," (met WCAG getestte kleuren)."]}),`
`,e.jsx(l.h2,{id:"toegankelijkheid",children:"Toegankelijkheid"}),`
`,e.jsx(l.p,{children:`Kleur mag nooit het enige middel zijn om informatie over te brengen. Gebruik altijd een combinatie van kleur, tekst
en iconografie voor maximale toegankelijkheid.`}),`
`,e.jsx(l.p,{children:"Controleer aangepaste kleuren op contrast en pas de verschillende kleurenblindheid emulaties toe."}),`
`,e.jsx(l.h3,{id:"kleurencontrast",children:"Kleurencontrast"}),`
`,e.jsx(l.p,{children:`Open Chrome Developer Tools, inspecteer het element. Er wordt een tooltip getoond met een groen vinkje indien
het kleurencontrast voldoende is.`}),`
`,e.jsx(l.h3,{id:"kleurenblindheid-emulatie",children:"Kleurenblindheid emulatie"}),`
`,e.jsxs(l.p,{children:[`Indien je verschillende pills met aangepaste kleuren gemaakt hebt, plaats deze dan samen op een pagina.
Open Chrome Developer Tools, open het "Rendering" paneel. Hieronder vind je `,e.jsx(l.a,{href:"https://dev.to/josefine/accessibility-testing-with-chrome-devtools-2bl4#emulate-vision-deficiencies",rel:"nofollow",children:"Emulate vision deficiencies"}),`. Ga door de
verschillende opties en controleer of je steeds alle verschillende kleuren kan onderscheiden. Soms is het beter om 1
tint te kiezen met verschillende helderheden. Op de `,e.jsx(l.a,{href:"/docs/styles-kleurenpalet--documentatie",children:"kleurenpalet-pagina"}),` vind
je voorbeelden van kleuren die op deze manier getest zijn.`]})]})}function w(i={}){const{wrapper:l}={...u(),...i.components};return l?e.jsx(l,{...i,children:e.jsx(m,{...i})}):m(i)}function A(i,l){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}const V={id:"components-block-pill",title:"Components - Block/pill",tags:["autodocs"],args:C,argTypes:T,parameters:{docs:{page:w}}},a=({closable:i,checkable:l,clickable:o,click:h,checked:b,type:s,disabled:d,close:y,check:g})=>r`
    <vl-pill
        ?closable=${i}
        ?checkable=${l}
        ?clickable=${o}
        type=${s}
        ?disabled=${d}
        .checked=${b}
        @close=${t=>y(t)}
        @check=${t=>g(t.detail)}
        @click=${t=>h(t)}
        data-cy="pill"
    >
        ${s||"Optie 1"}${d?" (disabled)":""}
    </vl-pill>
`;a.storyName="vl-pill - default";const c=()=>r`<div class="vl-stacked vl-stacked-medium">
        ${["default","success","warning","error","disabled"].map(i=>r`<div>
                    <vl-title type="h2">${i}</vl-title>
                    ${["default","closable","checkable","clickable"].map(l=>r`<div style="display: grid; grid-template-columns: 100px 80px auto;">
                                ${l}
                                ${["unchecked","checked"].map(o=>l!=="checkable"&&o==="checked"?r``:r`
                                              <vl-pill
                                                  ?closable=${l==="closable"}
                                                  ?checkable=${l==="checkable"}
                                                  ?clickable=${l==="clickable"}
                                                  type=${O(i!=="default"?i:void 0)}
                                                  ?disabled=${i==="disabled"}
                                                  .checked=${o==="checked"}
                                                  >pill</vl-pill
                                              >
                                          `)}
                            </div>`)}
                </div> `)}
    </div> `;c.storyName="vl-pill - alle varianten";c.parameters={controls:{disable:!0}};const n=()=>r` <style>
            .my-pill-primary {
                --vl-pill--border-color: var(--vl-color--primary-800);
                --vl-pill--text-color: var(--vl-color--text-primary);
                --vl-pill--background-color: var(--vl-color--primary-600);
                --vl-pill--border-color-action: var(--vl-color--primary-1000);
                --vl-pill--text-color-action: var(--vl-color--text-primary);
                --vl-pill--background-color-action: var(--vl-color--primary-600);
            }
            .my-pill-primary-light {
                --vl-pill--border-color: var(--vl-color--border-primary);
                --vl-pill--text-color: var(--vl-color--text-primary);
                --vl-pill--background-color: var(--vl-color--background-primary-subtle);
                --vl-pill--border-color-action: var(--vl-color--grey-1000);
                --vl-pill--text-color-action: var(--vl-color--text-primary);
                --vl-pill--background-color-action: var(--vl-color--background-primary);
            }
            .my-pill-primary-niveau2 {
                --vl-pill--border-color: var(--vl-color--primary-niveau2-900);
                --vl-pill--text-color: var(--vl-color--primary-niveau2-100);
                --vl-pill--background-color: var(--vl-color--primary-niveau2-900);
                --vl-pill--border-color-action: var(--vl-color--primary-niveau2-1000);
                --vl-pill--text-color-action: var(--vl-color--primary-niveau2-100);
                --vl-pill--background-color-action: var(--vl-color--primary-niveau2-1000);
            }
            .my-pill-primary-niveau2-light {
                --vl-pill--border-color: var(--vl-color--primary-niveau2-800);
                --vl-pill--text-color: var(--vl-color--primary-niveau2-1000);
                --vl-pill--background-color: var(--vl-color--primary-niveau2-200);
                --vl-pill--border-color-action: var(--vl-color--primary-niveau2-900);
                --vl-pill--text-color-action: var(--vl-color--primary-niveau2-100);
                --vl-pill--background-color-action: var(--vl-color--primary-niveau2-900);
            }
            .my-pill-action {
                --vl-pill--border-color: var(--vl-color--border-action);
                --vl-pill--text-color: #fff;
                --vl-pill--background-color: var(--vl-color--background-action);
                --vl-pill--border-color-action: var(--vl-color--action-800);
                --vl-pill--text-color-action: #fff;
                --vl-pill--background-color-action: var(--vl-color--action-800);
            }
            .my-pill-action-light {
                --vl-pill--border-color: var(--vl-color--border-action);
                --vl-pill--text-color: var(--vl-color--active-text-action);
                --vl-pill--background-color: var(--vl-color--background-action-subtle);
                --vl-pill--border-color-action: var(--vl-color--action-800);
                --vl-pill--text-color-action: #fff;
                --vl-pill--background-color-action: var(--vl-color--action-800);
            }
            .my-pill-omg-hoofdkleur {
                --vl-pill--text-color: #fff;
                --vl-pill--text-color-action: #fff;
                --vl-pill--border-color: var(--vl-color--domg-hoofdkleur);
                --vl-pill--border-color-action: var(--vl-color--domg-hoofdkleur-light);
                --vl-pill--background-color: var(--vl-color--domg-hoofdkleur);
                --vl-pill--background-color-action: var(--vl-color--domg-hoofdkleur-light);
            }
            .my-pill-omg-steunkleur {
                --vl-pill--text-color: #fff;
                --vl-pill--text-color-action: #fff;
                --vl-pill--border-color: var(--vl-color--domg-steunkleur);
                --vl-pill--border-color-action: var(--vl-color--domg-steunkleur-light);
                --vl-pill--background-color: var(--vl-color--domg-steunkleur);
                --vl-pill--background-color-action: var(--vl-color--domg-steunkleur-light);
            }
        </style>
        <div class="vl-stacked vl-stacked-medium">
            <vl-title type="h2">Aangepaste kleuren</vl-title>
            <div>
                <vl-pill class="my-pill-primary"> primary </vl-pill>
                <vl-pill checkable class="my-pill-primary"> primary </vl-pill>
                <vl-pill closable class="my-pill-primary"> primary </vl-pill>
            </div>
            <div>
                <vl-pill class="my-pill-primary-light"> primary (light) </vl-pill>
                <vl-pill checkable class="my-pill-primary-light"> primary (light) </vl-pill>
                <vl-pill closable class="my-pill-primary-light"> primary (light) </vl-pill>
            </div>
            <div>
                <vl-pill class="my-pill-primary-niveau2"> primary niveau 2 </vl-pill>
                <vl-pill checkable class="my-pill-primary-niveau2"> primary niveau 2 </vl-pill>
                <vl-pill closable class="my-pill-primary-niveau2"> primary niveau 2 </vl-pill>
            </div>
            <div>
                <vl-pill class="my-pill-primary-niveau2-light"> primary niveau 2 (light) </vl-pill>
                <vl-pill checkable class="my-pill-primary-niveau2-light"> primary niveau 2 (light) </vl-pill>
                <vl-pill closable class="my-pill-primary-niveau2-light"> primary niveau 2 (light) </vl-pill>
            </div>
            <div>
                <vl-pill class="my-pill-action"> action </vl-pill>
                <vl-pill checkable class="my-pill-action"> action </vl-pill>
                <vl-pill closable class="my-pill-action"> action </vl-pill>
            </div>
            <div>
                <vl-pill class="my-pill-action-light"> action (light) </vl-pill>
                <vl-pill checkable class="my-pill-action-light"> action (light) </vl-pill>
                <vl-pill closable class="my-pill-action-light"> action (light) </vl-pill>
            </div>
            <div>
                <vl-pill class="my-pill-omg-hoofdkleur"> Omgeving hoofdkleur </vl-pill>
                <vl-pill checkable class="my-pill-omg-hoofdkleur"> Omgeving hoofdkleur </vl-pill>
                <vl-pill closable class="my-pill-omg-hoofdkleur"> Omgeving hoofdkleur </vl-pill>
            </div>
            <div>
                <vl-pill class="my-pill-omg-steunkleur"> Omgeving steunkleur </vl-pill>
                <vl-pill checkable class="my-pill-omg-steunkleur"> Omgeving steunkleur </vl-pill>
                <vl-pill closable class="my-pill-omg-steunkleur"> Omgeving steunkleur </vl-pill>
            </div>
        </div>`;n.storyName="vl-pill - aangepaste kleuren";n.parameters={controls:{disable:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
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
        \${type || 'Optie 1'}\${disabled ? ' (disabled)' : ''}
    </vl-pill>
\``,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => html\`<div class="vl-stacked vl-stacked-medium">
        \${['default', 'success', 'warning', 'error', 'disabled'].map(type => html\`<div>
                    <vl-title type="h2">\${type}</vl-title>
                    \${['default', 'closable', 'checkable', 'clickable'].map(variant => html\`<div style="display: grid; grid-template-columns: 100px 80px auto;">
                                \${variant}
                                \${['unchecked', 'checked'].map(checked => variant !== 'checkable' && checked === 'checked' ? html\`\` : html\`
                                              <vl-pill
                                                  ?closable=\${variant === 'closable'}
                                                  ?checkable=\${variant === 'checkable'}
                                                  ?clickable=\${variant === 'clickable'}
                                                  type=\${ifDefined(type !== 'default' ? type : undefined)}
                                                  ?disabled=\${type === 'disabled'}
                                                  .checked=\${checked === 'checked'}
                                                  >pill</vl-pill
                                              >
                                          \`)}
                            </div>\`)}
                </div> \`)}
    </div> \``,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => html\` <style>
            .my-pill-primary {
                --vl-pill--border-color: var(--vl-color--primary-800);
                --vl-pill--text-color: var(--vl-color--text-primary);
                --vl-pill--background-color: var(--vl-color--primary-600);
                --vl-pill--border-color-action: var(--vl-color--primary-1000);
                --vl-pill--text-color-action: var(--vl-color--text-primary);
                --vl-pill--background-color-action: var(--vl-color--primary-600);
            }
            .my-pill-primary-light {
                --vl-pill--border-color: var(--vl-color--border-primary);
                --vl-pill--text-color: var(--vl-color--text-primary);
                --vl-pill--background-color: var(--vl-color--background-primary-subtle);
                --vl-pill--border-color-action: var(--vl-color--grey-1000);
                --vl-pill--text-color-action: var(--vl-color--text-primary);
                --vl-pill--background-color-action: var(--vl-color--background-primary);
            }
            .my-pill-primary-niveau2 {
                --vl-pill--border-color: var(--vl-color--primary-niveau2-900);
                --vl-pill--text-color: var(--vl-color--primary-niveau2-100);
                --vl-pill--background-color: var(--vl-color--primary-niveau2-900);
                --vl-pill--border-color-action: var(--vl-color--primary-niveau2-1000);
                --vl-pill--text-color-action: var(--vl-color--primary-niveau2-100);
                --vl-pill--background-color-action: var(--vl-color--primary-niveau2-1000);
            }
            .my-pill-primary-niveau2-light {
                --vl-pill--border-color: var(--vl-color--primary-niveau2-800);
                --vl-pill--text-color: var(--vl-color--primary-niveau2-1000);
                --vl-pill--background-color: var(--vl-color--primary-niveau2-200);
                --vl-pill--border-color-action: var(--vl-color--primary-niveau2-900);
                --vl-pill--text-color-action: var(--vl-color--primary-niveau2-100);
                --vl-pill--background-color-action: var(--vl-color--primary-niveau2-900);
            }
            .my-pill-action {
                --vl-pill--border-color: var(--vl-color--border-action);
                --vl-pill--text-color: #fff;
                --vl-pill--background-color: var(--vl-color--background-action);
                --vl-pill--border-color-action: var(--vl-color--action-800);
                --vl-pill--text-color-action: #fff;
                --vl-pill--background-color-action: var(--vl-color--action-800);
            }
            .my-pill-action-light {
                --vl-pill--border-color: var(--vl-color--border-action);
                --vl-pill--text-color: var(--vl-color--active-text-action);
                --vl-pill--background-color: var(--vl-color--background-action-subtle);
                --vl-pill--border-color-action: var(--vl-color--action-800);
                --vl-pill--text-color-action: #fff;
                --vl-pill--background-color-action: var(--vl-color--action-800);
            }
            .my-pill-omg-hoofdkleur {
                --vl-pill--text-color: #fff;
                --vl-pill--text-color-action: #fff;
                --vl-pill--border-color: var(--vl-color--domg-hoofdkleur);
                --vl-pill--border-color-action: var(--vl-color--domg-hoofdkleur-light);
                --vl-pill--background-color: var(--vl-color--domg-hoofdkleur);
                --vl-pill--background-color-action: var(--vl-color--domg-hoofdkleur-light);
            }
            .my-pill-omg-steunkleur {
                --vl-pill--text-color: #fff;
                --vl-pill--text-color-action: #fff;
                --vl-pill--border-color: var(--vl-color--domg-steunkleur);
                --vl-pill--border-color-action: var(--vl-color--domg-steunkleur-light);
                --vl-pill--background-color: var(--vl-color--domg-steunkleur);
                --vl-pill--background-color-action: var(--vl-color--domg-steunkleur-light);
            }
        </style>
        <div class="vl-stacked vl-stacked-medium">
            <vl-title type="h2">Aangepaste kleuren</vl-title>
            <div>
                <vl-pill class="my-pill-primary"> primary </vl-pill>
                <vl-pill checkable class="my-pill-primary"> primary </vl-pill>
                <vl-pill closable class="my-pill-primary"> primary </vl-pill>
            </div>
            <div>
                <vl-pill class="my-pill-primary-light"> primary (light) </vl-pill>
                <vl-pill checkable class="my-pill-primary-light"> primary (light) </vl-pill>
                <vl-pill closable class="my-pill-primary-light"> primary (light) </vl-pill>
            </div>
            <div>
                <vl-pill class="my-pill-primary-niveau2"> primary niveau 2 </vl-pill>
                <vl-pill checkable class="my-pill-primary-niveau2"> primary niveau 2 </vl-pill>
                <vl-pill closable class="my-pill-primary-niveau2"> primary niveau 2 </vl-pill>
            </div>
            <div>
                <vl-pill class="my-pill-primary-niveau2-light"> primary niveau 2 (light) </vl-pill>
                <vl-pill checkable class="my-pill-primary-niveau2-light"> primary niveau 2 (light) </vl-pill>
                <vl-pill closable class="my-pill-primary-niveau2-light"> primary niveau 2 (light) </vl-pill>
            </div>
            <div>
                <vl-pill class="my-pill-action"> action </vl-pill>
                <vl-pill checkable class="my-pill-action"> action </vl-pill>
                <vl-pill closable class="my-pill-action"> action </vl-pill>
            </div>
            <div>
                <vl-pill class="my-pill-action-light"> action (light) </vl-pill>
                <vl-pill checkable class="my-pill-action-light"> action (light) </vl-pill>
                <vl-pill closable class="my-pill-action-light"> action (light) </vl-pill>
            </div>
            <div>
                <vl-pill class="my-pill-omg-hoofdkleur"> Omgeving hoofdkleur </vl-pill>
                <vl-pill checkable class="my-pill-omg-hoofdkleur"> Omgeving hoofdkleur </vl-pill>
                <vl-pill closable class="my-pill-omg-hoofdkleur"> Omgeving hoofdkleur </vl-pill>
            </div>
            <div>
                <vl-pill class="my-pill-omg-steunkleur"> Omgeving steunkleur </vl-pill>
                <vl-pill checkable class="my-pill-omg-steunkleur"> Omgeving steunkleur </vl-pill>
                <vl-pill closable class="my-pill-omg-steunkleur"> Omgeving steunkleur </vl-pill>
            </div>
        </div>\``,...n.parameters?.docs?.source}}};const _=["PillDefault","PillAllVariants","PillCustomColors"];export{c as PillAllVariants,n as PillCustomColors,a as PillDefault,_ as __namedExportsOrder,V as default};
