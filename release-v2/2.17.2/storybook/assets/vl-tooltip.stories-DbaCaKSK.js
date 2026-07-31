import{cB as c,cm as w,X as S,Z as r,a2 as p,a1 as g,_ as l,W as O,cC as m,u as b,j as e,C as u,b8 as R,s as A,x as d,r as C,cD as I,d as D}from"./iframe-BAEsER5t.js";import"./preload-helper-D9Z9MdNV.js";const{trigger:$,hideOnClick:_,contentPadding:U,...z}=w,V={...z,type:c.DESCRIPTION},n={...S,...V},P={...O,for:{name:"for",description:"HTML id van het element die de tooltip zal triggeren en waar tegenover de tooltip zich zal oriënteren.",type:{name:l.STRING,required:!0},table:{type:{summary:l.STRING},category:r.PROPERTIES,defaultValue:{summary:n.for}}},placement:{name:"placement",description:"Voorkeursoriëntatie van de tooltip als de ruimte het toelaat. Je kan ook `-start` of `-end` suffix toevoegen zodat oriëntatie start of eindigt aan respectievelijk begin of einde van het trigger element.<br />[Raadpleeg de placement documentatie van floating-ui](https://floating-ui.com/docs/tutorial#placements).",table:{type:{summary:"top | right | bottom | left"},category:r.ATTRIBUTES,defaultValue:{summary:n.placement}}},hideArrow:{name:"hide-arrow",description:"Verbergt de pijl die wijst naar het element die de tooltip triggert.",table:{type:{summary:l.BOOLEAN},category:r.ATTRIBUTES,defaultValue:{summary:String(n.hideArrow)}}},open:{name:"open",description:"Bepaalt of de tooltip open is.",table:{type:{summary:l.BOOLEAN},category:r.PROPERTIES,defaultValue:{summary:String(n.open)}}},distance:{name:"distance",description:"Afstand van de tooltip tegenover het trigger element.",table:{type:{summary:l.NUMBER},category:r.ATTRIBUTES,defaultValue:{summary:String(n.distance)}}},strategy:{name:"strategy",description:"Positioneringsstrategie van de tooltip.<br />[Raadpleeg de strategy documentatie van floating-ui](https://floating-ui.com/docs/computePosition#strategy).",control:{type:g.SELECT},options:Object.values(m),table:{type:{summary:p(Object.values(m))},category:r.ATTRIBUTES,defaultValue:{summary:n.strategy}}},type:{name:"type",description:'Aria type van de tooltip. Een tooltip kan dienst doen als "label" van de trigger knop of als extra "description" voor de trigger. Dit bepaalt of de trigger een `aria-labelledby` of `aria-describedby` attribuut krijgt. Standaard gaan we uit van "description". Indien de trigger al een `aria-label` heeft wordt "label" genegeerd.',control:{type:g.SELECT},options:Object.values(c),table:{type:{summary:p(Object.values(c))},category:r.ATTRIBUTES,defaultValue:{summary:n.type}}}};function h(o){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...b(),...o.components},{FluxComponentMetaData:s}=t;return s||M("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"tooltip",children:"Tooltip"}),`
`,e.jsx(s,{id:"components-block-tooltip"}),`
`,e.jsx(t.h2,{id:"doel",children:"Doel"}),`
`,e.jsx(t.p,{children:`Een tooltip is een klein contextueel venster dat verschijnt wanneer de gebruiker over een element hovert of het
element focust. Gebruik een tooltip om korte bijkomende informatie te tonen.`}),`
`,e.jsx(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import { VlTooltipComponent } from '@domg-wc/components/block';
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<vl-button id="tooltip-trigger"></vl-button>
<vl-tooltip for="tooltip-trigger"></vl-tooltip>
`})}),`
`,e.jsx(u,{of:i}),`
`,e.jsx(t.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(R,{of:i}),`
`,e.jsx(t.h2,{id:"gebruik",children:"Gebruik"}),`
`,e.jsx(t.h3,{id:"standaard-pijl--afstand",children:"Standaard pijl & afstand"}),`
`,e.jsx(t.p,{children:"Standaard wordt:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["de pijl getoond (je kan de pijl verbergen met ",e.jsx(t.code,{children:"hide-arrow"}),")"]}),`
`,e.jsxs(t.li,{children:["wordt de ",e.jsx(t.code,{children:"distance"})," ingesteld op ",e.jsx(t.code,{children:"10px"})]}),`
`]}),`
`,e.jsx(t.h3,{id:"oriëntatie",children:"Oriëntatie"}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://floating-ui.com/docs/tutorial#placements",rel:"nofollow",children:"Raadpleeg de placement documentatie van floating-ui"})}),`
`]}),`
`,e.jsxs(t.p,{children:["Je kan de oriëntatie bepalen van de tooltip als daarvoor plaats is met ",e.jsx(t.code,{children:"placement"}),". Als er niet genoeg ruimte is zal ",e.jsx(t.code,{children:"floating-ui"})," achterliggend een alternatieve oriëntatie kiezen."]}),`
`,e.jsxs(t.p,{children:["Je kan een ",e.jsx(t.code,{children:"-start"})," of ",e.jsx(t.code,{children:"-end"})," suffix toevoegen zodat de oriëntatie start of eindigt aan respectievelijk het begin of einde van het referentie-element."]}),`
`,e.jsx(t.h3,{id:"strategy",children:"Strategy"}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://floating-ui.com/docs/computePosition#strategy",rel:"nofollow",children:"Raadpleeg de strategy documentatie van floating-ui"})}),`
`]}),`
`,e.jsxs(t.p,{children:["Standaard is ",e.jsx(t.code,{children:"strategy"})," ingesteld op ",e.jsx(t.code,{children:"absolute"}),`. De tooltip zal gepositioneerd worden ten opzichte van het
dichtstbijzijnde gepositioneerde parent-element (bv. een element met `,e.jsx(t.code,{children:"position: relative"}),")."]}),`
`,e.jsxs(t.p,{children:[`Om te vermijden dat de tooltip gepositioneerd wordt tegenover het verkeerde element, kan je best de eerste parent van
de tooltip instellen op `,e.jsx(t.code,{children:"position: relative"})," zodat de tooltip steeds gepositioneerd wordt zoals verwacht."]}),`
`,e.jsx(t.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(t.h3,{id:"tooltip-als-label",children:"Tooltip als label"}),`
`,e.jsxs(t.p,{children:[`Een tooltip kan dienst doen als "label" van de trigger knop of als extra "description" voor de trigger. Dit bepaalt of
de trigger een `,e.jsx(t.code,{children:"aria-labelledby"})," of ",e.jsx(t.code,{children:"aria-describedby"}),` attribuut krijgt. Standaard gaan we uit van "description".
Indien de trigger al een `,e.jsx(t.code,{children:"aria-label"}),` heeft wordt "label" genegeerd. Voor een patroon waarbij een
button enkel een icoon bevat, raden we de default variant aan met `,e.jsx(t.code,{children:'<vl-button label="Mijn aria label">'}),"."]}),`
`,e.jsx(u,{of:a}),`
`,e.jsx(t.h2,{id:"toegankelijkheid",children:"Toegankelijkheid"}),`
`,e.jsx(t.p,{children:"Een tooltip moet altijd verschijnen op hover én focus. Hier wordt in de achtergrond voor gezorgd in vl-tooltip."}),`
`,e.jsxs(t.p,{children:[`Een tooltip mag geen interactieve elementen bevatten. Indien dat toch vereist is moet het
`,e.jsx(t.a,{href:"/docs/components-block-popover--documentatie",children:"vl-popover"}),` component gebruikt worden, dat eigen
toegankelijkheidsaanpassingen heeft voor deze situatie.`]}),`
`,e.jsx(t.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(t.h3,{id:"floating-ui",children:"floating-ui"}),`
`,e.jsxs(t.p,{children:["De tooltip-component gebruikt achterliggend ",e.jsx(t.a,{href:"https://floating-ui.com/",rel:"nofollow",children:"floating-ui"}),"."]})]})}function B(o={}){const{wrapper:t}={...b(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(h,{...o})}):h(o)}function M(o,t){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}C([I,D]);const G={id:"components-block-tooltip",title:"Components - Block/tooltip",tags:["autodocs"],args:n,argTypes:P,parameters:{docs:{page:B}}},f=o=>d` <div style="position: relative;min-height: 150px;">${o()}</div>`,j=(o,t,s)=>A(n,({open:x,placement:v,hideArrow:y,distance:k,strategy:T,type:E})=>d`
            ${o}
            <vl-tooltip
                for=${s}
                ?open=${x}
                placement=${v}
                hide-arrow=${y}
                distance=${k}
                strategy=${T}
                type=${E}
            >
                ${t}
            </vl-tooltip>
        `),i=j(d`<vl-button ghost icon="info-circle" id="btn-context" label="Meer info"></vl-button>`,"Een boodschap die context geeft.","btn-context").bind({});i.storyName="vl-tooltip - default";i.decorators=[f];i.parameters={layout:"centered"};const a=j(d`<button
        id="clickable-ui-element"
        style="border: 1px solid var(--vl-color--border); background: white; width: 100px; height: 100px;"
    ></button>`,"Een UI element zonder eigen tekst of label","clickable-ui-element").bind({});a.storyName="vl-tooltip - as label";a.args={type:"label"};a.decorators=[f];a.parameters={layout:"centered"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`Template(html\`<vl-button ghost icon="info-circle" id="btn-context" label="Meer info"></vl-button>\`, 'Een boodschap die context geeft.', 'btn-context').bind({})`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`Template(html\`<button
        id="clickable-ui-element"
        style="border: 1px solid var(--vl-color--border); background: white; width: 100px; height: 100px;"
    ></button>\`, 'Een UI element zonder eigen tekst of label', 'clickable-ui-element').bind({})`,...a.parameters?.docs?.source}}};const q=["TooltipDefault","TooltipAsLabel"];export{a as TooltipAsLabel,i as TooltipDefault,q as __namedExportsOrder,G as default};
