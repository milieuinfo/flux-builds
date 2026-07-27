import{Z as o,_ as m,a2 as A,a1 as C,W as D,X as S,u as x,j as e,C as y,b8 as E,S as L,s as g,x as h,r as q,cM as $,d as w}from"./iframe-BgD7f6Cn.js";import"./preload-helper-D9Z9MdNV.js";const T={DEFAULT:"default",TABS:"tabs",COLLAPSED:"collapsed"},{action:f}=__STORYBOOK_MODULE_ACTIONS__,n={...S,activeTab:"",alt:!1,disableLinks:!1,responsiveLabel:"",displayStyle:"default",onChangeActiveTab:f("change"),onClickActiveTab:f("vl-click"),withinFunctionalHeader:!1},M={...D,activeTab:{name:"active-tab",description:"Het id van de actieve tab. De tab in kwestie wordt geselecteerd bij het aanpassen van dit id.",table:{type:{summary:m.STRING},category:o.ATTRIBUTES,defaultValue:{summary:n.activeTab}}},alt:{name:"alt",description:"Toont de alt variant van de tabs. Deze variant dient gebruikt te worden als subnavigatie onder de functional header.",table:{type:{summary:m.BOOLEAN},category:o.ATTRIBUTES,defaultValue:{summary:String(n.alt)}}},disableLinks:{name:"disable-links",description:"Zet de automatische url manipulaties uit.<br>Dit attribuut wordt enkel bij de initiële render van een tab gebruikt en werkt niet dynamisch.",table:{type:{summary:m.BOOLEAN},category:o.ATTRIBUTES,defaultValue:{summary:String(n.disableLinks)}}},responsiveLabel:{name:"responsive-label",description:"Wordt afgebeeld op mobile wanneer de tabs samengevoegd worden tot een uitklapbaar menu. Wordt enkel afgebeeld wanneer er geen tab geselecteerd is.",table:{type:{summary:m.STRING},category:o.ATTRIBUTES,defaultValue:{summary:n.responsiveLabel}}},displayStyle:{name:"display-style",description:"Geeft aan op welke manier de tabs getoond worden.<br>Standaard gedrag (`default`) is responsief; bij een breedte groter dan 768px is stijl de `tabs` stijl, anders is het de `collapsed` stijl.<br>Je kan ook expliciet de `tabs` of `collapsed` stijl kiezen die respectievelijk altijd de tabs of altijd de collapsed stijl toont.",control:C.SELECT,options:Object.values(T),table:{type:{summary:A(Object.values(T))},category:o.ATTRIBUTES,defaultValue:{summary:n.displayStyle}}},withinFunctionalHeader:{name:"within-functional-header",description:"Duidt aan dat de tabs in de functional header gerenderd worden. Aan de hand van dit attribuut wordt de layout van de tabs licht aangepast.",control:!1,table:{type:{summary:m.BOOLEAN},category:o.ATTRIBUTES,defaultValue:{summary:String(n.withinFunctionalHeader)}}},onChangeActiveTab:{name:"change",description:"Afgevuurd na het klikken op een niet actieve tab. Het event bevat het id van de tab.",table:{type:{summary:"{ activeTab: string }"},category:o.EVENTS}},onClickActiveTab:{name:"vl-click",description:"Afgevuurd na het klikken op een tab. Het event bevat het id van de tab.",table:{type:{summary:"{ activeTab: string }"},category:o.EVENTS}}},P=`let index = 0;

export const addPane = () => {
    const div = document.createElement('div');
    div.innerHTML =
        '<vl-tabs-pane id="fiets-' + index + '" title="Fiets ' + index + '">TEST ' + index + '</vl-tabs-pane>';

    if (div.firstElementChild) {
        document.querySelector('vl-tabs#tabs')?.appendChild(div.firstElementChild);
        index++;
    }
};
`;function k(a){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...x(),...a.components},{FluxAlert:s,FluxComponentMetaData:i}=t;return s||j("FluxAlert"),i||j("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"tabs",children:"Tabs"}),`
`,e.jsx(i,{id:"components-block-tabs-tabs"}),`
`,e.jsx(s,{type:"info",children:`
  De v2 versie van deze component gebruik je via de custom-tag, de interne implementatie is voor de rest
  gelijk gebleven aan de v1 versie. In de toekomst zal deze component grondig herwerkt worden.
`}),`
`,e.jsx(t.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(t.p,{children:["Gebruik de ",e.jsx(t.code,{children:"tabs"}),` component om gerelateerde informatie op te splitsen in kleinere stukken content.
Op mobiel wordt de tab navigatie omgevormd tot een uitklapbaar menu.`]}),`
`,e.jsx(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import { VlTabsComponent } from '@domg-wc/components/block';
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<vl-tabs></vl-tabs>
`})}),`
`,e.jsx(y,{of:l}),`
`,e.jsx(t.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(E,{of:l}),`
`,e.jsx(t.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(t.h3,{id:"dynamisch",children:"Dynamisch"}),`
`,e.jsx(t.p,{children:"Zie de code onder de story voor het volledige voorbeeld."}),`
`,e.jsx(y,{of:r}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"TypeScript code"}),e.jsx(L,{code:P,language:"ts",dark:!0})]}),`
`,e.jsx(t.h3,{id:"in-functional-header",children:"In functional header"}),`
`,e.jsxs(t.p,{children:["Wanneer de tabs in een functional header gerenderd worden, moet het attribuut ",e.jsx(t.code,{children:"within-functional-header"})," toegevoegd worden."]}),`
`,e.jsxs(t.p,{children:["Hier vind je een ",e.jsx(t.a,{href:"/story/components-block-functional-header--functional-header-tabs",children:"voorbeeld van een functional header met tabs"}),"."]}),`
`,e.jsx(t.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/componenten/tabs-tab-navigation",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Tabs"})})]})}function N(a={}){const{wrapper:t}={...x(),...a.components};return t?e.jsx(t,{...a,children:e.jsx(k,{...a})}):k(a)}function j(a,t){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}let b=0;const O=()=>{const a=document.createElement("div");a.innerHTML='<vl-tabs-pane id="fiets-'+b+'" title="Fiets '+b+'">TEST '+b+"</vl-tabs-pane>",a.firstElementChild&&(document.querySelector("vl-tabs#tabs")?.appendChild(a.firstElementChild),b++)},V={id:"components-block-tabs-tabs",title:"Components - Block/tabs/tabs",tags:["autodocs"],args:n,argTypes:M,parameters:{docs:{page:N}}};q([$,w]);const l=g(n,({activeTab:a,alt:t,disableLinks:s,responsiveLabel:i,onChangeActiveTab:c,onClickActiveTab:u,displayStyle:p})=>h`
        <vl-tabs
            active-tab=${a}
            display-style=${p}
            ?alt=${t}
            responsive-label=${i}
            ?disable-links=${s}
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
    `);l.storyName="vl-tabs - default";l.args={activeTab:"trein",disableLinks:!0};const d=g(n,({alt:a,disableLinks:t,responsiveLabel:s,onChangeActiveTab:i,displayStyle:c})=>h`
        <vl-tabs
            ?alt=${a}
            display-style=${c}
            responsive-label=${s}
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
    `);d.storyName="vl-tabs - without active tab";d.args={responsiveLabel:"Navigatie/menu"};const r=g(n,({activeTab:a,alt:t,disableLinks:s,responsiveLabel:i,onChangeActiveTab:c,displayStyle:u})=>h`
        <div>
            <vl-button id="add-pane-button" @click=${O}>Pane toevoegen</vl-button>
            <vl-tabs
                id="tabs"
                active-tab=${a}
                display-style=${u}
                ?alt=${t}
                responsive-label=${i}
                ?disable-links=${s}
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
    `);r.storyName="vl-tabs - dynamic";r.args={activeTab:"trein",disableLinks:!0};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`story(tabsArgs, ({
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
    \`)`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`story(tabsArgs, ({
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
    \`)`,...r.parameters?.docs?.source}}};const R=["TabsDefault","TabsWithoutActiveTab","TabsDynamic"];export{l as TabsDefault,r as TabsDynamic,d as TabsWithoutActiveTab,R as __namedExportsOrder,V as default};
