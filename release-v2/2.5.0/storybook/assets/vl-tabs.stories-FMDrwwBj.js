import{J as l,P as D,O as S,K as m,G as L,H as A,u as x,j as e,C as y,bd as C,S as E,s as g,x as h,r as q,bS as $,h as w}from"./iframe-CflcmDUD.js";import"./preload-helper-D9Z9MdNV.js";const T={DEFAULT:"default",TABS:"tabs",COLLAPSED:"collapsed"},{action:f}=__STORYBOOK_MODULE_ACTIONS__,s={...A,activeTab:"",alt:!1,disableLinks:!1,responsiveLabel:"",displayStyle:"default",onChangeActiveTab:f("change"),onClickActiveTab:f("vl-click")},P={...L,activeTab:{name:"active-tab",description:"Het id van de actieve tab. De tab in kwestie wordt geselecteerd bij het aanpassen van dit id.",table:{type:{summary:m.STRING},category:l.ATTRIBUTES,defaultValue:{summary:s.activeTab}}},alt:{name:"alt",description:"Toont de alt variant van de tabs. Deze variant dient gebruikt te worden als subnavigatie onder de functional header.",table:{type:{summary:m.BOOLEAN},category:l.ATTRIBUTES,defaultValue:{summary:String(s.alt)}}},disableLinks:{name:"disable-links",description:"Zet de automatische url manipulaties uit.<br>Dit attribuut wordt enkel bij de initiële render van een tab gebruikt en werkt niet dynamisch.",table:{type:{summary:m.BOOLEAN},category:l.ATTRIBUTES,defaultValue:{summary:String(s.disableLinks)}}},responsiveLabel:{name:"responsive-label",description:"Wordt afgebeeld op mobile wanneer de tabs samengevoegd worden tot een uitklapbaar menu. Wordt enkel afgebeeld wanneer er geen tab geselecteerd is.",table:{type:{summary:m.STRING},category:l.ATTRIBUTES,defaultValue:{summary:s.responsiveLabel}}},displayStyle:{name:"display-style",description:"Geeft aan op welke manier de tabs getoond worden.<br>Standaard gedrag (`default`) is responsief; bij een breedte groter dan 768px is stijl de `tabs` stijl, anders is het de `collapsed` stijl.<br>Je kan ook expliciet de `tabs` of `collapsed` stijl kiezen die respectievelijk altijd de tabs of altijd de collapsed stijl toont.",control:S.SELECT,options:Object.values(T),table:{type:{summary:D(Object.values(T))},category:l.ATTRIBUTES,defaultValue:{summary:s.displayStyle}}},onChangeActiveTab:{name:"change",description:"Afgevuurd na het klikken op een niet actieve tab. Het event bevat het id van de tab.",table:{type:{summary:"{ activeTab: string }"},category:l.EVENTS}},onClickActiveTab:{name:"vl-click",description:"Afgevuurd na het klikken op een tab. Het event bevat het id van de tab.",table:{type:{summary:"{ activeTab: string }"},category:l.EVENTS}}},M=`let index = 0;

export const addPane = () => {
    const div = document.createElement('div');
    div.innerHTML =
        '<vl-tabs-pane id="fiets-' + index + '" title="Fiets ' + index + '">TEST ' + index + '</vl-tabs-pane>';

    if (div.firstElementChild) {
        document.querySelector('vl-tabs#tabs')?.appendChild(div.firstElementChild);
        index++;
    }
};
`;function k(a){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...x(),...a.components},{FluxAlert:n,FluxMetaData:i}=t;return n||j("FluxAlert"),i||j("FluxMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"tabs",children:"Tabs"}),`
`,e.jsx(i,{id:"components-block-tabs-tabs"}),`
`,e.jsxs(t.p,{children:["Gebruik de ",e.jsx(t.code,{children:"tabs"}),` component om gerelateerde informatie op te splitsen in kleinere stukken content.
Op mobiel wordt de tab navigatie omgevormd tot een uitklapbaar menu.`]}),`
`,e.jsx(n,{type:"info",children:`
  De v2 versie van deze component gebruik je via de custom-tag, de interne implementatie is voor de rest
  gelijk gebleven aan de v1 versie. In de toekomst zal deze component grondig herwerkt worden.
`}),`
`,e.jsx(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import { VlTabsComponent } from '@domg-wc/components/block';
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<vl-tabs></vl-tabs>
`})}),`
`,e.jsx(y,{of:o}),`
`,e.jsx(t.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(C,{of:o}),`
`,e.jsx(t.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(t.h3,{id:"dynamisch",children:"Dynamisch"}),`
`,e.jsx(t.p,{children:"Zie de code onder de story voor het volledige voorbeeld."}),`
`,e.jsx(y,{of:r}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"TypeScript code"}),e.jsx(E,{code:M,language:"ts",dark:!0})]}),`
`,e.jsx(t.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-tabs",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Tabs"})}),`
`,e.jsx(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/legacy-vl-tabs--uig-2115",rel:"nofollow",children:"Legacy Storybook - Tabs"})}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlTabs.html",rel:"nofollow",children:"Legacy Documentatie - Tabs"})}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-tabs.html",rel:"nofollow",children:"Legacy Demo - Tabs"})})]})}function N(a={}){const{wrapper:t}={...x(),...a.components};return t?e.jsx(t,{...a,children:e.jsx(k,{...a})}):k(a)}function j(a,t){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}let b=0;const O=()=>{const a=document.createElement("div");a.innerHTML='<vl-tabs-pane id="fiets-'+b+'" title="Fiets '+b+'">TEST '+b+"</vl-tabs-pane>",a.firstElementChild&&(document.querySelector("vl-tabs#tabs")?.appendChild(a.firstElementChild),b++)},R={id:"components-block-tabs-tabs",title:"Components - Block/tabs/tabs",tags:["autodocs"],args:s,argTypes:P,parameters:{docs:{page:N}}};q([$,w]);const o=g(s,({activeTab:a,alt:t,disableLinks:n,responsiveLabel:i,onChangeActiveTab:c,onClickActiveTab:u,displayStyle:p})=>h`
        <vl-tabs
            active-tab=${a}
            display-style=${p}
            ?alt=${t}
            responsive-label=${i}
            ?disable-links=${n}
            @change=${v=>c(v.detail)}
            @vl-click=${v=>u(v.detail)}
        >
            <vl-tabs-pane id="trein" title="Trein">
                Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat
                porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Integer posuere erat a ante
                venenatis dapibus posuere velit aliquet.
            </vl-tabs-pane>
            <vl-tabs-pane id="metro" title="Metro, tram en bus">
                Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem
                malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
            </vl-tabs-pane>
            <vl-tabs-pane id="fiets" title="Fiets">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean
                eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras justo odio, dapibus ac
                facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            </vl-tabs-pane>
        </vl-tabs>
    `);o.storyName="vl-tabs - default";o.args={activeTab:"trein",disableLinks:!0};const d=g(s,({alt:a,disableLinks:t,responsiveLabel:n,onChangeActiveTab:i,displayStyle:c})=>h`
        <vl-tabs
            ?alt=${a}
            display-style=${c}
            responsive-label=${n}
            ?disable-links=${t}
            @change=${u=>i(u.detail)}
        >
            <vl-tabs-pane id="trein" title="Trein">
                Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat
                porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Integer posuere erat a ante
                venenatis dapibus posuere velit aliquet.
            </vl-tabs-pane>
            <vl-tabs-pane id="metro" title="Metro, tram en bus">
                Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem
                malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
            </vl-tabs-pane>
            <vl-tabs-pane id="fiets" title="Fiets">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean
                eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras justo odio, dapibus ac
                facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            </vl-tabs-pane>
        </vl-tabs>
    `);d.storyName="vl-tabs - without active tab";d.args={responsiveLabel:"Navigatie/menu"};const r=g(s,({activeTab:a,alt:t,disableLinks:n,responsiveLabel:i,onChangeActiveTab:c,displayStyle:u})=>h`
        <div>
            <vl-button id="add-pane-button" @click=${O}>Pane toevoegen</vl-button>
            <vl-tabs
                id="tabs"
                active-tab=${a}
                display-style=${u}
                ?alt=${t}
                responsive-label=${i}
                ?disable-links=${n}
                @change=${p=>c(p.detail)}
            >
                <vl-tabs-pane id="trein" title="Trein">
                    Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat
                    porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Integer posuere erat a ante
                    venenatis dapibus posuere velit aliquet.
                </vl-tabs-pane>
                <vl-tabs-pane id="metro" title="Metro, tram en bus">
                    Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta
                    sem malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </vl-tabs-pane>
            </vl-tabs>
        </div>
    `);r.storyName="vl-tabs - dynamic";r.args={activeTab:"trein",disableLinks:!0};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`story(tabsArgs, ({
  activeTab,
  alt,
  disableLinks,
  responsiveLabel,
  onChangeActiveTab,
  onClickActiveTab,
  displayStyle
}) => html\`
        <vl-tabs
            active-tab=\${activeTab}
            display-style=\${displayStyle}
            ?alt=\${alt}
            responsive-label=\${responsiveLabel}
            ?disable-links=\${disableLinks}
            @change=\${(event: CustomEvent) => onChangeActiveTab(event.detail)}
            @vl-click=\${(event: CustomEvent) => onClickActiveTab(event.detail)}
        >
            <vl-tabs-pane id="trein" title="Trein">
                Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat
                porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Integer posuere erat a ante
                venenatis dapibus posuere velit aliquet.
            </vl-tabs-pane>
            <vl-tabs-pane id="metro" title="Metro, tram en bus">
                Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem
                malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
            </vl-tabs-pane>
            <vl-tabs-pane id="fiets" title="Fiets">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean
                eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras justo odio, dapibus ac
                facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            </vl-tabs-pane>
        </vl-tabs>
    \`)`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`story(tabsArgs, ({
  alt,
  disableLinks,
  responsiveLabel,
  onChangeActiveTab,
  displayStyle
}) => html\`
        <vl-tabs
            ?alt=\${alt}
            display-style=\${displayStyle}
            responsive-label=\${responsiveLabel}
            ?disable-links=\${disableLinks}
            @change=\${(event: CustomEvent) => onChangeActiveTab(event.detail)}
        >
            <vl-tabs-pane id="trein" title="Trein">
                Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat
                porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Integer posuere erat a ante
                venenatis dapibus posuere velit aliquet.
            </vl-tabs-pane>
            <vl-tabs-pane id="metro" title="Metro, tram en bus">
                Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem
                malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
            </vl-tabs-pane>
            <vl-tabs-pane id="fiets" title="Fiets">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean
                eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras justo odio, dapibus ac
                facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            </vl-tabs-pane>
        </vl-tabs>
    \`)`,...d.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(tabsArgs, ({
  activeTab,
  alt,
  disableLinks,
  responsiveLabel,
  onChangeActiveTab,
  displayStyle
}) => html\`
        <div>
            <vl-button id="add-pane-button" @click=\${addPane}>Pane toevoegen</vl-button>
            <vl-tabs
                id="tabs"
                active-tab=\${activeTab}
                display-style=\${displayStyle}
                ?alt=\${alt}
                responsive-label=\${responsiveLabel}
                ?disable-links=\${disableLinks}
                @change=\${(event: CustomEvent) => onChangeActiveTab(event.detail)}
            >
                <vl-tabs-pane id="trein" title="Trein">
                    Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat
                    porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Integer posuere erat a ante
                    venenatis dapibus posuere velit aliquet.
                </vl-tabs-pane>
                <vl-tabs-pane id="metro" title="Metro, tram en bus">
                    Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta
                    sem malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </vl-tabs-pane>
            </vl-tabs>
        </div>
    \`)`,...r.parameters?.docs?.source}}};const _=["TabsDefault","TabsWithoutActiveTab","TabsDynamic"];export{o as TabsDefault,r as TabsDynamic,d as TabsWithoutActiveTab,_ as __namedExportsOrder,R as default};
