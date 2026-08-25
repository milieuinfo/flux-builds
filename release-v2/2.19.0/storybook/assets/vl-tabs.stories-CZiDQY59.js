import{Z as l,_ as r,W as u,X as h,u as m,j as e,C as b,b8 as k,s as T,x as j,r as f,Q as y}from"./iframe-CY-ZM549.js";import{o as d}from"./unsafe-html-CLNrWVY9.js";import{V as S,b as w,a as C,c as V}from"./vl-tabs.component-DR6Ie2dc.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-checkbox.component-BDn7ePcW.js";import"./vl-datepicker.component-YU9BW_0B.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-fieldset.component-Bc3AJnIk.js";import"./vl-input-field-masked.component-CpP3801C.js";import"./vl-radio.component-D19T2Xu3.js";import"./vl-radio-group.component-DrOqLcWw.js";import"./vl-select.component-BFzkdhOR.js";import"./vl-select-rich.component-Ce4rMkaH.js";import"./vl-textarea.component-C2i5Nva7.js";import"./vl-textarea-rich.component-C1bved6Z.js";import"./vl-upload.component-CRjn2qhr.js";import"./vl-upload-progress.component-DXqNp2pu.js";const z={defaultSlot:"",panelSlot:"",label:"",horizontalNavigation:!1,noBorder:!1},{action:p}=__STORYBOOK_MODULE_ACTIONS__,i={...h,...z,onVlTabClick:p("vl-tab-click"),onVlTabLinkClick:p("vl-tab-link-click")},L={...u,defaultSlot:{name:"default slot",description:"Gebruik dit slot voor de tab links.",table:{type:{summary:r.HTML},category:l.SLOTS,defaultValue:{summary:String(i.defaultSlot)}}},panelSlot:{name:"panel slot",description:"Gebruik dit slot voor de tab panels.",table:{type:{summary:r.HTML},category:l.SLOTS,defaultValue:{summary:String(i.panelSlot)}}},label:{name:"label",description:"Toegankelijke naam van de tab navigatie of widget.",table:{type:{summary:r.STRING},category:l.ATTRIBUTES,defaultValue:{summary:String(i.label)}}},horizontalNavigation:{name:"horizontal-navigation",description:"Gebruik dit attribuut om enkel een horizontale tabbed-stijl navigatie te renderen. Er zullen geen ARIA tablist attributen toegepast worden.",table:{type:{summary:r.BOOLEAN},category:l.ATTRIBUTES,defaultValue:{summary:String(i.horizontalNavigation)}}},noBorder:{name:"no-border",description:"Verbergt de onderste rand van de tab navigatie.",table:{type:{summary:r.BOOLEAN},category:l.ATTRIBUTES,defaultValue:{summary:String(i.noBorder)}}},onVlTabClick:{name:"vl-tab-click",description:"Event dat afgevuurd wordt wanneer een tab wordt aangeklikt.",table:{type:{summary:"{ tab: VlTabComponent }"},category:l.EVENTS}},onVlTabLinkClick:{name:"vl-tab-link-click",description:"Event dat afgevuurd wordt wanneer een tab link wordt aangeklikt.",table:{type:{summary:"{ tab: VlTabLinkComponent }"},category:l.EVENTS}}};function c(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...m(),...n.components},{FluxComponentMetaData:s}=t;return s||N("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"tabs-next",children:"Tabs Next"}),`
`,e.jsx(s,{id:"components-block-next-tabs"}),`
`,e.jsx(t.h2,{id:"doel",children:"Doel"}),`
`,e.jsx(t.p,{children:"Gebruik deze component om content op te delen in verschillende tabbladen."}),`
`,e.jsx(t.p,{children:"Dit component heeft twee varianten:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Standaard tabs patroon"}),":",`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Deze variant wordt best gebruikt als ",e.jsx(t.strong,{children:"widget op een pagina"})," en niet als navigatie element."]}),`
`,e.jsxs(t.li,{children:["Deze implementatie volgt de ",e.jsx(t.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/tabs/",rel:"nofollow",children:"ARIA tab patroon richtlijnen"})," voor ",e.jsx(t.code,{children:'role="tablist"'}),"."]}),`
`,e.jsx(t.li,{children:"De tabs zijn bedienbaar met de pijltjestoetsen."}),`
`,e.jsx(t.li,{children:"De tabpanelen worden allemaal gerenderd, maar enkel het selecteerde tabpaneel wordt getoond."}),`
`,e.jsxs(t.li,{children:["Bij deze variant gebruik je de ",e.jsx(t.code,{children:"<vl-tab-next>"})," als tab elementen en de ",e.jsx(t.code,{children:"<vl-tab-panel-next>"})," als tabpanelen."]}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Horizontale navigatie"}),":",`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Deze variant implementeert geen ",e.jsx(t.code,{children:'role="tablist"'})," maar doet dienst als ",e.jsx(t.strong,{children:"navigatie element"}),"."]}),`
`,e.jsxs(t.li,{children:["Bij deze variant gebruik je de ",e.jsx(t.code,{children:"<vl-tab-link-next>"})," als tab elementen."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import { VlTabsComponent, VlTabComponent, VlTabPanelComponent } from '@domg-wc/components/block/next';
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<vl-tabs-next label="Mijn tab widget">
    <vl-tab-next id="tab1" panel="tabpanel1">Trein</vl-tab-next>
    <vl-tab-next id="tab2" panel="tabpanel2">Metro, tram en bus</vl-tab-next>
    <vl-tab-next id="tab3" panel="tabpanel3">Fiets</vl-tab-next>

    <vl-tab-panel-next id="tabpanel1" slot="panel" aria-labelledby="tab1heading">
        <vl-title type="h2" id="tab1heading">Trein</vl-title>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </vl-tab-panel-next>
    <vl-tab-panel-next id="tabpanel2" slot="panel" aria-labelledby="tab2heading">
        <vl-title type="h2" id="tab2heading">Metro, tram en bus</vl-title>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </vl-tab-panel-next>
    <vl-tab-panel-next id="tabpanel3" slot="panel" aria-labelledby="tab3heading">
        <vl-title type="h2" id="tab3heading">Fiets</vl-title>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </vl-tab-panel-next>
</vl-tabs-next>
`})}),`
`,e.jsx(b,{of:a}),`
`,e.jsx(t.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(k,{of:a}),`
`,e.jsx(t.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(t.h3,{id:"horizontale-navigatie",children:"Horizontale navigatie"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import { VlTabsComponent, VlTabLinkComponent } from '@domg-wc/components/block/next';
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<vl-tabs-next label="Mijn navigatie">
    <vl-tab-link-next href="#tab1">Trein</vl-tab-link-next>
    <vl-tab-link-next href="#tab2">Metro, tram en bus</vl-tab-link-next>
    <vl-tab-link-next
        href="https://www.vlaanderen.be/intern/werkplek/dienstreizen-en-woon-werkverkeer/vervoersmiddelen/fietsen"
        external
        >Fiets</vl-tab-link-next
    >
</vl-tabs-next>
`})}),`
`,e.jsx(b,{of:o})]})}function M(n={}){const{wrapper:t}={...m(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(c,{...n})}):c(n)}function N(n,t){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const K={id:"components-block-next-tabs",title:"Components - Block/next/tabs",tags:["autodocs"],args:i,argTypes:L,parameters:{docs:{page:M}}};f([S,w,C,V,y]);const a=T(i,({defaultSlot:n,panelSlot:t,horizontalNavigation:s,label:v,onVlTabClick:x,onVlTabLinkClick:g})=>j`
        <vl-tabs-next
            label="${v}"
            ?horizontal-navigation="${s}"
            @vl-tab-click="${x}"
            @vl-tab-link-click="${g}"
            >${d(n)}${d(t)}</vl-tabs-next
        >
    `);a.storyName="vl-tabs-next - default";a.args={defaultSlot:`
        <vl-tab-next id="tab1" panel="tabpanel1">Trein</vl-tab-next>
        <vl-tab-next id="tab2" panel="tabpanel2">Metro, tram en bus</vl-tab-next>
        <vl-tab-next id="tab3" panel="tabpanel3">Fiets</vl-tab-next>
    `,panelSlot:`
        <vl-tab-panel-next id="tabpanel1" slot="panel" aria-labelledby="tab1heading">
            <vl-title type="h2" id="tab1heading">Trein</vl-title>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </vl-tab-panel-next>
        <vl-tab-panel-next id="tabpanel2" slot="panel" aria-labelledby="tab2heading">
            <vl-title type="h2" id="tab2heading">Metro, tram en bus</vl-title>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </vl-tab-panel-next>
        <vl-tab-panel-next id="tabpanel3" slot="panel" aria-labelledby="tab3heading">
            <vl-title type="h2" id="tab3heading">Fiets</vl-title>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </vl-tab-panel-next>
        `,label:"Mijn tab widget"};const o=a.bind({});o.storyName="vl-tabs-next - horizontal-navigation";o.args={defaultSlot:`
        <vl-tab-link-next href="#tab1">Trein</vl-tab-link-next>
        <vl-tab-link-next href="#tab2">Metro, tram en bus</vl-tab-link-next>
        <vl-tab-link-next href="https://www.vlaanderen.be/intern/werkplek/dienstreizen-en-woon-werkverkeer/vervoersmiddelen/fietsen" external>Fiets</vl-tab-link-next>
    `,horizontalNavigation:!0,label:"Mijn horizontale navigatie"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`story(tabsArgs, ({
  defaultSlot,
  panelSlot,
  horizontalNavigation,
  label,
  onVlTabClick,
  onVlTabLinkClick
}) => html\`
        <vl-tabs-next
            label="\${label}"
            ?horizontal-navigation="\${horizontalNavigation}"
            @vl-tab-click="\${onVlTabClick}"
            @vl-tab-link-click="\${onVlTabLinkClick}"
            >\${unsafeHTML(defaultSlot)}\${unsafeHTML(panelSlot)}</vl-tabs-next
        >
    \`)`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`story(tabsArgs, ({
  defaultSlot,
  panelSlot,
  horizontalNavigation,
  label,
  onVlTabClick,
  onVlTabLinkClick
}) => html\`
        <vl-tabs-next
            label="\${label}"
            ?horizontal-navigation="\${horizontalNavigation}"
            @vl-tab-click="\${onVlTabClick}"
            @vl-tab-link-click="\${onVlTabLinkClick}"
            >\${unsafeHTML(defaultSlot)}\${unsafeHTML(panelSlot)}</vl-tabs-next
        >
    \`)`,...o.parameters?.docs?.source}}};const Q=["TabsDefault","TabsHorizontalNavigation"];export{a as TabsDefault,o as TabsHorizontalNavigation,Q as __namedExportsOrder,K as default};
