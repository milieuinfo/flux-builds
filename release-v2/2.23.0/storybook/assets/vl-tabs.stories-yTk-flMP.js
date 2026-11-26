import{u as g,j as e,C as b,b4 as x,b as j,r as k,P as f}from"./iframe-Cv28D2NX.js";import{C as l,T as r,d as T,a as w,s as y}from"./stories.helper-DYHi_5m6.js";import{o as c}from"./unsafe-html-7Tp0Sqh9.js";import{V as C,b as V,a as z,c as S}from"./vl-tabs.component-DK-cBMq7.js";import"./preload-helper-PPVm8Dsz.js";import"./vl-checkbox.component-Cl-C3bHb.js";import"./vl-datepicker.component-gIhsylI-.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-fieldset.component-DAfAyWPV.js";import"./vl-input-field-masked.component-DrIBY--W.js";import"./vl-radio.component-BMGk1PbP.js";import"./vl-radio-group.component-BVQMwWW-.js";import"./vl-select.component-DAztbrd3.js";import"./vl-select-rich.component-Bt8ZFZBv.js";import"./vl-textarea.component-1SQHWSt5.js";import"./vl-textarea-rich.component-jUqK0iT2.js";import"./vl-upload.component-RSddKL9f.js";import"./vl-upload-progress.component-DOm2qrBt.js";const E={defaultSlot:"",panelSlot:"",label:"",horizontalNavigation:!1,noBorder:!1},{action:d}=__STORYBOOK_MODULE_ACTIONS__,i={...w,...E,onVlTabChange:d("vl-tab-change"),onVlTabClick:d("vl-tab-click"),onVlTabLinkClick:d("vl-tab-link-click")},L={...T,defaultSlot:{name:"default slot",description:"Gebruik dit slot voor de tab links.",table:{type:{summary:r.HTML},category:l.SLOTS,defaultValue:{summary:String(i.defaultSlot)}}},panelSlot:{name:"panel slot",description:"Gebruik dit slot voor de tab panels.",table:{type:{summary:r.HTML},category:l.SLOTS,defaultValue:{summary:String(i.panelSlot)}}},label:{name:"label",description:"Toegankelijke naam van de tab navigatie of widget.",table:{type:{summary:r.STRING},category:l.ATTRIBUTES,defaultValue:{summary:String(i.label)}}},horizontalNavigation:{name:"horizontal-navigation",description:"Gebruik dit attribuut om enkel een horizontale tabbed-stijl navigatie te renderen. Er zullen geen ARIA tablist attributen toegepast worden.",table:{type:{summary:r.BOOLEAN},category:l.ATTRIBUTES,defaultValue:{summary:String(i.horizontalNavigation)}}},noBorder:{name:"no-border",description:"Verbergt de onderste rand van de tab navigatie.",table:{type:{summary:r.BOOLEAN},category:l.ATTRIBUTES,defaultValue:{summary:String(i.noBorder)}}},onVlTabChange:{name:"vl-tab-change",description:"Cancelable event dat afgevuurd wordt vóór de gebruiker naar een andere tab wisselt, met de muis, het toetsenbord of de dropdown op mobiel. Roep `preventDefault()` aan om de wissel te weigeren: de huidige tab blijft dan geselecteerd en een tab link navigeert niet. Vuurt niet bij een klik op de geselecteerde tab of bij een programmatische selectie.",table:{type:{summary:"{ tab: VlTabComponent | VlTabLinkComponent, previousTab: VlTabComponent | VlTabLinkComponent | undefined }"},category:l.EVENTS}},onVlTabClick:{name:"vl-tab-click",description:"Event dat afgevuurd wordt bij een klik, Enter of Spatie op een tab en bij `select()`, ook als de wissel geweigerd wordt. Gebruik `vl-tab-change` om een wissel te weigeren.",table:{type:{summary:"{ tab: VlTabComponent }"},category:l.EVENTS}},onVlTabLinkClick:{name:"vl-tab-link-click",description:"Event dat afgevuurd wordt bij een klik of Enter op een tab link en bij `select()`, ook als de wissel geweigerd wordt. Gebruik `vl-tab-change` om een wissel te weigeren.",table:{type:{summary:"{ tab: VlTabLinkComponent }"},category:l.EVENTS}}};function p(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...g(),...t.components},{FluxComponentMetaData:s}=n;return s||M("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"tabs-next",children:"Tabs Next"}),`
`,e.jsx(s,{id:"components-block-next-tabs"}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsx(n.p,{children:"Gebruik deze component om content op te delen in verschillende tabbladen."}),`
`,e.jsx(n.p,{children:"Dit component heeft twee varianten:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Standaard tabs patroon"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Deze variant wordt best gebruikt als ",e.jsx(n.strong,{children:"widget op een pagina"})," en niet als navigatie element."]}),`
`,e.jsxs(n.li,{children:["Deze implementatie volgt de ",e.jsx(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/tabs/",rel:"nofollow",children:"ARIA tab patroon richtlijnen"})," voor ",e.jsx(n.code,{children:'role="tablist"'}),"."]}),`
`,e.jsx(n.li,{children:"De tabs zijn bedienbaar met de pijltjestoetsen."}),`
`,e.jsx(n.li,{children:"De tabpanelen worden allemaal gerenderd, maar enkel het selecteerde tabpaneel wordt getoond."}),`
`,e.jsxs(n.li,{children:["Bij deze variant gebruik je de ",e.jsx(n.code,{children:"<vl-tab-next>"})," als tab elementen en de ",e.jsx(n.code,{children:"<vl-tab-panel-next>"})," als tabpanelen."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Horizontale navigatie"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Deze variant implementeert geen ",e.jsx(n.code,{children:'role="tablist"'})," maar doet dienst als ",e.jsx(n.strong,{children:"navigatie element"}),"."]}),`
`,e.jsxs(n.li,{children:["Bij deze variant gebruik je de ",e.jsx(n.code,{children:"<vl-tab-link-next>"})," als tab elementen."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { VlTabsComponent, VlTabComponent, VlTabPanelComponent } from '@domg-wc/components/block/next';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-tabs-next label="Mijn tab widget">
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
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(x,{of:a}),`
`,e.jsx(n.h2,{id:"een-tabwissel-weigeren",children:"Een tabwissel weigeren"}),`
`,e.jsxs(n.p,{children:["Voor de gebruiker naar een andere tab wisselt, vuurt ",e.jsx(n.code,{children:"vl-tabs-next"})," het cancelable event ",e.jsx(n.code,{children:"vl-tab-change"}),". Dat gebeurt bij een klik, Enter of Spatie, de pijltjestoetsen, Home en End, en bij een keuze in de dropdown op mobiel. Roep ",e.jsx(n.code,{children:"preventDefault()"})," aan om de wissel te weigeren, bijvoorbeeld als een formulier in de huidige tab niet-bewaarde wijzigingen heeft. De huidige tab blijft dan geselecteerd, het zichtbare tabpaneel verandert niet en een ",e.jsx(n.code,{children:"<vl-tab-link-next>"})," navigeert niet naar zijn ",e.jsx(n.code,{children:"href"}),"."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"event.detail.tab"})," is de tab die de gebruiker wil openen, ",e.jsx(n.code,{children:"event.detail.previousTab"})," de tab die nu geselecteerd is."]}),`
`,e.jsxs(n.li,{children:["Het event vuurt enkel bij een echte wissel: niet bij een klik op de geselecteerde tab en niet bij een programmatische selectie met ",e.jsx(n.code,{children:"select()"}),". Bij een klik met Ctrl, Cmd, Shift of Alt op een tab link volgt de browser zijn eigen gedrag, zoals openen in een nieuw tabblad: de tab wordt dan niet geselecteerd en het event vuurt niet."]}),`
`,e.jsxs(n.li,{children:["Beslis synchroon in de listener. Wil je eerst een bevestiging vragen, weiger de wissel dan en roep na de bevestiging ",e.jsx(n.code,{children:"select()"})," aan op ",e.jsx(n.code,{children:"event.detail.tab"}),". Een ",e.jsx(n.code,{children:"<vl-tab-link-next>"})," volgt daarbij zijn link zoals bij een klik, met ",e.jsx(n.code,{children:"external"})," in een nieuw venster. Roep ",e.jsx(n.code,{children:"select()"})," voor een ",e.jsx(n.code,{children:"external"})," link kort na een actie van de gebruiker aan, zoals de klik op de bevestigingsknop: na een trage stap ertussen, zoals een ",e.jsx(n.code,{children:"fetch"}),", kan de popup-blocker van de browser het nieuwe venster tegenhouden."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"vl-tab-click"})," en ",e.jsx(n.code,{children:"vl-tab-link-click"})," vuren ook als de wissel geweigerd wordt, en ook bij ",e.jsx(n.code,{children:"select()"}),". Reken niet op hun volgorde ten opzichte van ",e.jsx(n.code,{children:"vl-tab-change"}),". ",e.jsx(n.code,{children:"preventDefault()"})," heeft op die events geen effect. Doe routering in een single-page app daarom in de listener van ",e.jsx(n.code,{children:"vl-tab-change"}),". Omdat ",e.jsx(n.code,{children:"select()"})," dat event niet vuurt, routeer je na een bevestiging ook zelf, bij je aanroep van ",e.jsx(n.code,{children:"select()"}),"."]}),`
`,e.jsxs(n.li,{children:["Geef de gebruiker zichtbare feedback die ook voorgelezen wordt, bijvoorbeeld met een modal of een alert. Anders lijkt het voor toetsenbord- en screenreadergebruikers alsof de tabs niet reageren. Bij een pijltjestoets, Home of End zet ",e.jsx(n.code,{children:"vl-tabs-next"})," de focus vóór het event op de tab die de gebruiker wil openen, en laat die daar ook bij een weigering. Zo kan een toetsenbordgebruiker de tabs verder doorlopen, en houdt een modal die je in de listener opent de focus."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const tabs = document.querySelector('vl-tabs-next');

tabs.addEventListener('vl-tab-change', (event) => {
    if (heeftNietBewaardeWijzigingen()) {
        event.preventDefault();
        vraagBevestiging().then((bevestigd) => {
            if (bevestigd) {
                event.detail.tab.select();
            }
        });
    }
});
`})}),`
`,e.jsx(n.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(n.h3,{id:"horizontale-navigatie",children:"Horizontale navigatie"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { VlTabsComponent, VlTabLinkComponent } from '@domg-wc/components/block/next';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-tabs-next label="Mijn navigatie">
    <vl-tab-link-next href="#tab1">Trein</vl-tab-link-next>
    <vl-tab-link-next href="#tab2">Metro, tram en bus</vl-tab-link-next>
    <vl-tab-link-next
        href="https://www.vlaanderen.be/intern/werkplek/dienstreizen-en-woon-werkverkeer/vervoersmiddelen/fietsen"
        external
        >Fiets</vl-tab-link-next
    >
</vl-tabs-next>
`})}),`
`,e.jsx(b,{of:o})]})}function N(t={}){const{wrapper:n}={...g(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(p,{...t})}):p(t)}function M(t,n){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const Z={id:"components-block-next-tabs",title:"Components - Block/next/tabs",tags:["autodocs"],args:i,argTypes:L,parameters:{docs:{page:N}}};k([C,V,z,S,f]);const a=y(i,({defaultSlot:t,panelSlot:n,horizontalNavigation:s,label:v,onVlTabChange:m,onVlTabClick:h,onVlTabLinkClick:u})=>j`
        <vl-tabs-next
            label="${v}"
            ?horizontal-navigation="${s}"
            @vl-tab-change="${m}"
            @vl-tab-click="${h}"
            @vl-tab-link-click="${u}"
            >${c(t)}${c(n)}</vl-tabs-next
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
    `,horizontalNavigation:!0,label:"Mijn horizontale navigatie"};const J=["TabsDefault","TabsHorizontalNavigation"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`story(tabsArgs, ({
  defaultSlot,
  panelSlot,
  horizontalNavigation,
  label,
  onVlTabChange,
  onVlTabClick,
  onVlTabLinkClick
}) => html\`
        <vl-tabs-next
            label="\${label}"
            ?horizontal-navigation="\${horizontalNavigation}"
            @vl-tab-change="\${onVlTabChange}"
            @vl-tab-click="\${onVlTabClick}"
            @vl-tab-link-click="\${onVlTabLinkClick}"
            >\${unsafeHTML(defaultSlot)}\${unsafeHTML(panelSlot)}</vl-tabs-next
        >
    \`)`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`story(tabsArgs, ({
  defaultSlot,
  panelSlot,
  horizontalNavigation,
  label,
  onVlTabChange,
  onVlTabClick,
  onVlTabLinkClick
}) => html\`
        <vl-tabs-next
            label="\${label}"
            ?horizontal-navigation="\${horizontalNavigation}"
            @vl-tab-change="\${onVlTabChange}"
            @vl-tab-click="\${onVlTabClick}"
            @vl-tab-link-click="\${onVlTabLinkClick}"
            >\${unsafeHTML(defaultSlot)}\${unsafeHTML(panelSlot)}</vl-tabs-next
        >
    \`)`,...o.parameters?.docs?.source}}};export{a as TabsDefault,o as TabsHorizontalNavigation,J as __namedExportsOrder,Z as default};
