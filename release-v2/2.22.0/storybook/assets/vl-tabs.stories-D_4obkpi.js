import{Z as i,_ as m,a1 as x,W as C,X as S,a2 as A,u as j,j as t,C as y,b4 as D,S as E,s as g,b as h,r as L,d0 as q,f as $}from"./iframe-ylVHDfb1.js";import"./preload-helper-PPVm8Dsz.js";const T={DEFAULT:"default",TABS:"tabs",COLLAPSED:"collapsed"},{action:f}=__STORYBOOK_MODULE_ACTIONS__,n={...S,activeTab:"",alt:!1,disableLinks:!1,responsiveLabel:"",displayStyle:"default",onChangeActiveTab:f("change"),onClickActiveTab:f("vl-click"),withinFunctionalHeader:!1},w={...C,activeTab:{name:"active-tab",description:"Het id van de actieve tab. De tab in kwestie wordt geselecteerd bij het aanpassen van dit id.",table:{type:{summary:m.STRING},category:i.ATTRIBUTES,defaultValue:{summary:n.activeTab}}},alt:{name:"alt",description:"Toont de alt variant van de tabs. Deze variant dient gebruikt te worden als subnavigatie onder de functional header.",table:{type:{summary:m.BOOLEAN},category:i.ATTRIBUTES,defaultValue:{summary:String(n.alt)}}},disableLinks:{name:"disable-links",description:"Zet de automatische url manipulaties uit.<br>Dit attribuut wordt enkel bij de initiële render van een tab gebruikt en werkt niet dynamisch.",table:{type:{summary:m.BOOLEAN},category:i.ATTRIBUTES,defaultValue:{summary:String(n.disableLinks)}}},responsiveLabel:{name:"responsive-label",description:"Wordt afgebeeld op mobile wanneer de tabs samengevoegd worden tot een uitklapbaar menu. Wordt enkel afgebeeld wanneer er geen tab geselecteerd is.",table:{type:{summary:m.STRING},category:i.ATTRIBUTES,defaultValue:{summary:n.responsiveLabel}}},displayStyle:{name:"display-style",description:"Geeft aan op welke manier de tabs getoond worden.<br>Standaard gedrag (`default`) is responsief; bij een breedte groter dan 768px is stijl de `tabs` stijl, anders is het de `collapsed` stijl.<br>Je kan ook expliciet de `tabs` of `collapsed` stijl kiezen die respectievelijk altijd de tabs of altijd de collapsed stijl toont.",control:x.SELECT,options:Object.values(T),table:{type:{summary:A(Object.values(T))},category:i.ATTRIBUTES,defaultValue:{summary:n.displayStyle}}},withinFunctionalHeader:{name:"within-functional-header",description:"Duidt aan dat de tabs in de functional header gerenderd worden. Aan de hand van dit attribuut wordt de layout van de tabs licht aangepast.",control:!1,table:{type:{summary:m.BOOLEAN},category:i.ATTRIBUTES,defaultValue:{summary:String(n.withinFunctionalHeader)}}},onChangeActiveTab:{name:"change",description:"Afgevuurd na het klikken op een niet actieve tab. Het event bevat het id van de tab.",table:{type:{summary:"{ activeTab: string }"},category:i.EVENTS}},onClickActiveTab:{name:"vl-click",description:"Afgevuurd na het klikken op een tab. Het event bevat het id van de tab.",table:{type:{summary:"{ activeTab: string }"},category:i.EVENTS}}},M=`let index = 0;

export const addPane = () => {
    const div = document.createElement('div');
    div.innerHTML =
        '<vl-tabs-pane id="fiets-' + index + '" title="Fiets ' + index + '">TEST ' + index + '</vl-tabs-pane>';

    if (div.firstElementChild) {
        document.querySelector('vl-tabs#tabs')?.appendChild(div.firstElementChild);
        index++;
    }
};
`;function k(a){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...j(),...a.components},{FluxComponentMetaData:s}=e;return s||N("FluxComponentMetaData"),t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"tabs",children:"Tabs"}),`
`,t.jsx(s,{id:"components-block-tabs-tabs"}),`
`,t.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,t.jsxs(e.p,{children:["Gebruik de ",t.jsx(e.code,{children:"tabs"}),` component om gerelateerde informatie op te splitsen in kleinere stukken content.
Op mobiel wordt de tab navigatie omgevormd tot een uitklapbaar menu.`]}),`
`,t.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`import { VlTabsComponent } from '@domg-wc/components/block';
`})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<vl-tabs></vl-tabs>
`})}),`
`,t.jsx(y,{of:o}),`
`,t.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,t.jsx(D,{of:o}),`
`,t.jsx(e.h2,{id:"varianten",children:"Varianten"}),`
`,t.jsx(e.h3,{id:"dynamisch",children:"Dynamisch"}),`
`,t.jsx(e.p,{children:"Zie de code onder de story voor het volledige voorbeeld."}),`
`,t.jsx(y,{of:l}),`
`,t.jsxs("details",{children:[t.jsx("summary",{children:"TypeScript code"}),t.jsx(E,{code:M,language:"ts",dark:!0})]}),`
`,t.jsx(e.h3,{id:"in-functional-header",children:"In functional header"}),`
`,t.jsxs(e.p,{children:["Wanneer de tabs in een functional header gerenderd worden, moet het attribuut ",t.jsx(e.code,{children:"within-functional-header"})," toegevoegd worden."]}),`
`,t.jsxs(e.p,{children:["Hier vind je een ",t.jsx(e.a,{href:"/story/components-block-functional-header--functional-header-tabs",children:"voorbeeld van een functional header met tabs"}),"."]}),`
`,t.jsx(e.h2,{id:"referenties",children:"Referenties"}),`
`,t.jsx(e.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/componenten/tabs-tab-navigation",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Tabs"})})]})}function P(a={}){const{wrapper:e}={...j(),...a.components};return e?t.jsx(e,{...a,children:t.jsx(k,{...a})}):k(a)}function N(a,e){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}let b=0;const O=()=>{const a=document.createElement("div");a.innerHTML='<vl-tabs-pane id="fiets-'+b+'" title="Fiets '+b+'">TEST '+b+"</vl-tabs-pane>",a.firstElementChild&&(document.querySelector("vl-tabs#tabs")?.appendChild(a.firstElementChild),b++)},R={id:"components-block-tabs-tabs",title:"Components - Block/tabs/tabs",tags:["autodocs"],args:n,argTypes:w,parameters:{docs:{page:P}}};L([q,$]);const o=g(n,({activeTab:a,alt:e,disableLinks:s,responsiveLabel:d,onChangeActiveTab:c,onClickActiveTab:u,displayStyle:p})=>h`
        <vl-tabs
            active-tab=${a}
            display-style=${p}
            ?alt=${e}
            responsive-label=${d}
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
    `);o.storyName="vl-tabs - default";o.args={activeTab:"trein",disableLinks:!0};const r=g(n,({alt:a,disableLinks:e,responsiveLabel:s,onChangeActiveTab:d,displayStyle:c})=>h`
        <vl-tabs
            ?alt=${a}
            display-style=${c}
            responsive-label=${s}
            ?disable-links=${e}
            @change=${u=>d(u.detail)}
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
    `);r.storyName="vl-tabs - without active tab";r.args={responsiveLabel:"Navigatie/menu"};const l=g(n,({activeTab:a,alt:e,disableLinks:s,responsiveLabel:d,onChangeActiveTab:c,displayStyle:u})=>h`
        <div>
            <vl-button id="add-pane-button" @click=${O}>Pane toevoegen</vl-button>
            <vl-tabs
                id="tabs"
                active-tab=${a}
                display-style=${u}
                ?alt=${e}
                responsive-label=${d}
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
    `);l.storyName="vl-tabs - dynamic";l.args={activeTab:"trein",disableLinks:!0};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`story(tabsArgs, ({
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
    \`)`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(tabsArgs, ({
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
    \`)`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`story(tabsArgs, ({
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
    \`)`,...l.parameters?.docs?.source}}};const _=["TabsDefault","TabsWithoutActiveTab","TabsDynamic"];export{o as TabsDefault,l as TabsDynamic,r as TabsWithoutActiveTab,_ as __namedExportsOrder,R as default};
