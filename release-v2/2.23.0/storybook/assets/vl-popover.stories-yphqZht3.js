import{cM as I,cN as E,c3 as w,u as S,j as e,C as k,b4 as B,S as b,b as g,A as N,r as _,bK as G,cO as M,cP as q,e as Z}from"./iframe-Cv28D2NX.js";import{a as V,d as z,C as i,T as p,b as x,g as $,s as f}from"./stories.helper-DYHi_5m6.js";import"./preload-helper-PPVm8Dsz.js";const a={...V,action:"",href:"",icon:"",rel:"",selected:!1,target:""};({...z,selected:String(a.selected),action:a.action,href:a.href,icon:a.icon,rel:a.rel,target:a.target});const r={...V,...I},U={...z,for:{name:"for",description:"HTML id van het element die de popover zal triggeren en waar tegenover de popover zich zal oriënteren.",type:{name:p.STRING,required:!0},table:{type:{summary:p.STRING},category:i.PROPERTIES,defaultValue:{summary:r.for}}},open:{name:"open",description:"Bepaalt of de popover open is.",table:{type:{summary:p.BOOLEAN},category:i.PROPERTIES,defaultValue:{summary:String(r.open)}}},hideArrow:{name:"hide-arrow",description:"Verbergt de pijl die wijst naar het element die de popover triggert.",table:{type:{summary:p.BOOLEAN},category:i.ATTRIBUTES,defaultValue:{summary:String(r.hideArrow)}}},hideOnClick:{name:"hide-on-click",description:"Verbergt popover wanneer op de content wordt geklikt. Niet reactief.",table:{type:{summary:p.BOOLEAN},category:i.ATTRIBUTES,defaultValue:{summary:String(r.hideOnClick)}}},distance:{name:"distance",description:"Afstand van de popover tegenover het trigger element.",control:{type:x.RANGE,min:0,max:100,step:1},table:{type:{summary:p.NUMBER},category:i.ATTRIBUTES,defaultValue:{summary:String(r.distance)}}},contentPadding:{name:"content-padding",description:"De grootte van de padding van de content.<br>Deze padding wordt toegepast op zowel desktop als mobile.",control:{type:x.SELECT},options:[...Object.keys(w)],table:{type:{summary:$(Object.keys(w))},category:i.ATTRIBUTES,defaultValue:{summary:r.contentPadding}}},placement:{name:"placement",description:"Voorkeursoriëntatie van de popover als de ruimte het toelaat. Je kan ook `-start` of `-end` suffix toevoegen zodat oriëntatie start of eindigt aan respectievelijk begin of einde van het trigger element.<br />[Raadpleeg de placement documentatie van floating-ui](https://floating-ui.com/docs/tutorial#placements).",table:{type:{summary:"top | right | bottom | left"},category:i.ATTRIBUTES,defaultValue:{summary:r.placement}}},trigger:{name:"trigger",description:"Gebruikersacties die de popover triggeren. Je kan verschillende acties combineren met spaties. Bv. met `click hover` zal de popover zowel verschijnen bij een klik als bij hover.<br />Gebruik `hover` nooit alleen: dan kan je de popover niet openen met het toetsenbord of een schermlezer. Combineer `hover` altijd met `click`.<br />Tip: `hover` en `focus` zijn bij de popover meestal te vermijden. Gebruik voor tekst zonder interactie eerder [vl-tooltip](/?path=/docs/components-block-tooltip--documentatie).",table:{type:{summary:"click | focus | hover"},category:i.ATTRIBUTES,defaultValue:{summary:r.trigger}}},strategy:{name:"strategy",description:"Positioneringsstrategie van de popover.<br />[Raadpleeg de strategy documentatie van floating-ui](https://floating-ui.com/docs/computePosition#strategy).",control:{type:x.SELECT},options:Object.values(E),table:{type:{summary:$(Object.values(E))},category:i.ATTRIBUTES,defaultValue:{summary:r.strategy}}},maxHeight:{name:"max-height",description:"Optionele maximumhoogte van de popover-inhoud (CSS-lengte, bv. `300px` of `50vh`). Bij overschrijding scrollt de inhoud verticaal. De effectieve hoogte is het minimum van deze waarde en de automatisch berekende viewport-ruimte.",table:{type:{summary:p.STRING},category:i.ATTRIBUTES,defaultValue:{summary:r.maxHeight}}}};function C(n){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...S(),...n.components},{FluxAlert:l,FluxComponentMetaData:t}=o;return l||T("FluxAlert"),t||T("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(o.h1,{id:"popover",children:"Popover"}),`
`,e.jsx(t,{id:"components-block-popover"}),`
`,e.jsx(o.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(o.p,{children:[`Een popover is een nieuw, meestal kleiner venster / popup dat boven de andere inhoud op het scherm verschijnt.
Het doel van de popover is het bouwen van context- of submenu's. Je kan deze menu's opbouwen a.d.h.v. de
`,e.jsx(o.code,{children:"vl-popover-action-list"})," en ",e.jsx(o.code,{children:"vl-popover-action"}),` componenten. De popover kan ook andere interactieve HTML-elementen
bevatten.`]}),`
`,e.jsx(o.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-js",children:`import { VlPopoverComponent } from '@domg-wc/components/block';
`})}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-html",children:`<vl-button id="popover-trigger"></vl-button>
<vl-popover for="popover-trigger"></vl-popover>
`})}),`
`,e.jsx(k,{of:c}),`
`,e.jsx(o.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(B,{of:c}),`
`,e.jsx(o.h2,{id:"gebruik",children:"Gebruik"}),`
`,e.jsx(o.h3,{id:"standaard-pijl--afstand",children:"Standaard pijl & afstand"}),`
`,e.jsx(o.p,{children:"Standaard wordt:"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["de pijl getoond (je kan de pijl verbergen met ",e.jsx(o.code,{children:"hide-arrow"}),")"]}),`
`,e.jsxs(o.li,{children:["wordt de ",e.jsx(o.code,{children:"distance"})," ingesteld op ",e.jsx(o.code,{children:"10px"})]}),`
`]}),`
`,e.jsx(o.h3,{id:"oriëntatie",children:"Oriëntatie"}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsx(o.p,{children:e.jsx(o.a,{href:"https://floating-ui.com/docs/tutorial#placements",rel:"nofollow",children:"Raadpleeg de placement documentatie van floating-ui"})}),`
`]}),`
`,e.jsxs(o.p,{children:["Je kan de oriëntatie bepalen van de popover als daarvoor plaats is met ",e.jsx(o.code,{children:"placement"}),". Als er niet genoeg ruimte is zal ",e.jsx(o.code,{children:"floating-ui"})," achterliggend een alternatieve oriëntatie kiezen."]}),`
`,e.jsxs(o.p,{children:["Je kan een ",e.jsx(o.code,{children:"-start"})," of ",e.jsx(o.code,{children:"-end"})," suffix toevoegen zodat de oriëntatie start of eindigt aan respectievelijk het begin of einde van het referentie-element."]}),`
`,e.jsx(o.h3,{id:"strategy",children:"Strategy"}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsx(o.p,{children:e.jsx(o.a,{href:"https://floating-ui.com/docs/computePosition#strategy",rel:"nofollow",children:"Raadpleeg de strategy documentatie van floating-ui"})}),`
`]}),`
`,e.jsxs(o.p,{children:["Standaard is ",e.jsx(o.code,{children:"strategy"})," ingesteld op ",e.jsx(o.code,{children:"absolute"}),`. De popover zal gepositioneerd worden ten opzichte van het
dichtstbijzijnde gepositioneerde parent-element (bv. een element met `,e.jsx(o.code,{children:"position: relative"}),")."]}),`
`,e.jsxs(o.p,{children:["Om te vermijden dat de popover gepositioneerd wordt tegenover het verkeerde element, kan je best de eerste parent van de popover instellen op ",e.jsx(o.code,{children:"position: relative"})," zodat de popover steeds gepositioneerd wordt zoals verwacht."]}),`
`,e.jsx(o.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(o.h3,{id:"hover--tooltip",children:"Hover / Tooltip"}),`
`,e.jsxs(o.p,{children:["Je kan de standaard ",e.jsx(o.code,{children:"click"})," waarde voor ",e.jsx(o.code,{children:"trigger"})," combineren met ",e.jsx(o.code,{children:"hover"}),": ",e.jsx(o.code,{children:'trigger="click hover"'}),`. De popover opent dan
bij hover en bij een klik, en dus ook met Enter of Spatie op de trigger. Een klik op een popover die net door hover
openging, laat hem open. Bevat de popover acties of andere interactieve inhoud, gebruik dan liefst enkel `,e.jsx(o.code,{children:"click"}),"."]}),`
`,e.jsxs(o.p,{children:["Gebruik ",e.jsx(o.code,{children:"hover"})," ",e.jsx(o.strong,{children:"nooit alleen"}),". Met enkel ",e.jsx(o.code,{children:'trigger="hover"'}),` kan je de popover niet openen met het toetsenbord of een
schermlezer (WCAG 2.1.1 en 1.4.13).`]}),`
`,e.jsxs(o.p,{children:["Het gebruik van het vl-popover component als tooltip is ",e.jsx(o.strong,{children:"deprecated"}),`. Gebruik voor tekst zonder interactie het
`,e.jsx(o.a,{href:"/docs/components-block-tooltip--documentatie",children:"vl-tooltip"})," component."]}),`
`,e.jsx(o.h3,{id:"popover-actions",children:"Popover Actions"}),`
`,e.jsxs(o.p,{children:["Je kan een lijst van acties toevoegen aan de popover en een actie markeren als het huidige item met ",e.jsx(o.code,{children:"selected"}),`, bv. de
huidige pagina of de laatst gekozen weergave. Een schermlezer leest dat via `,e.jsx(o.code,{children:"aria-current"}),"."]}),`
`,e.jsx(k,{of:v}),`
`,e.jsx(o.p,{children:"Hieronder vind je een voorbeeld implementatie met LitElement:"}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Toon HTML template voorbeeld"}),e.jsx(b,{code:`
  <vl-popover-action-list @click=\${actionListClickHandler}>
      <vl-popover-action selected=\${selected} icon="search">Zoeken</vl-popover-action>
      <vl-popover-action icon="bell">Rapportenoverzicht</vl-popover-action>
      <vl-popover-action icon="pin">Vind locatie</vl-popover-action>
  </vl-popover-action-list>
  `,language:"html",dark:!0})]}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Toon TypeScript code voorbeeld"}),e.jsx(b,{code:`
  const actionListClickHandler = (event: CustomEvent) => {
          const actionElement = event.target as VlPopoverActionComponent;
          const allActions = Array.from(actionElement.parentElement?.querySelectorAll('vl-popover-action') || []);
          allActions.forEach((action) => {
              if (action !== actionElement) {
                  action.removeAttribute('selected');
              }
          });
          actionElement.setAttribute('selected', '');
      };
  `,language:"ts",dark:!0})]}),`
`,e.jsx("br",{}),`
`,e.jsx(l,{type:"warning",children:`
  Sinds versie <strong>2.5.0</strong> wordt er automatisch een "button"- of "a"-element gerenderd in de vl-popover-action.<br/><br/>
  Indien je reeds je eigen buttons of links renderde binnenin een action moet je:
  <ul>
      <li><strong>In het geval van een button:</strong> de "click" en andere handlers verplaatsen naar het vl-popover-action component.</li>
      <li><strong>In het geval van een link:</strong> de "href", "target" en/of "rel" attributen verplaatsen naar het vl-popover-action component.</li>
  </ul>
`}),`
`,e.jsx(o.h3,{id:"popover-actions-divider",children:"Popover Actions Divider"}),`
`,e.jsxs(o.p,{children:["Een lijst van acties kan visueel opgesplitst worden adhv de horizontale regel: ",e.jsx(o.code,{children:'<hr class="vl-separator" />'}),"."]}),`
`,e.jsx(b,{code:`<vl-popover-action-list>
  <vl-popover-action icon="search">Zoeken</vl-popover-action>
  <vl-popover-action icon="bell">Rapportenoverzicht</vl-popover-action>
  <vl-popover-action icon="pin">Vind locatie</vl-popover-action>
  <hr class="vl-separator" />
  <vl-popover-action icon="save">Bewaren</vl-popover-action>
  <vl-popover-action icon="trash">Verwijderen</vl-popover-action>
</vl-popover-action-list>`}),`
`,e.jsx(k,{of:m}),`
`,e.jsx(o.h2,{id:"toegankelijkheid",children:"Toegankelijkheid"}),`
`,e.jsx(o.p,{children:"De popover werkt als een disclosure: een knop die een groep met acties toont of verbergt. Het is geen ARIA-menu."}),`
`,e.jsxs(o.p,{children:[`Dat is een bewuste keuze. Een ARIA-menu belooft het toetsenbordgedrag van een applicatiemenu (pijltoetsen, Home en End,
één tabstop), terwijl een popover vaak links en andere inhoud bevat. Voor navigatie raadt het APG een disclosure aan
(`,e.jsx(o.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/",rel:"nofollow",children:"Disclosure Navigation Menu"}),`).
Voeg daarom zelf geen `,e.jsx(o.code,{children:'role="menu"'})," of ",e.jsx(o.code,{children:'role="menuitem"'})," toe."]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["De trigger krijgt ",e.jsx(o.code,{children:"aria-expanded"})," en ",e.jsx(o.code,{children:"aria-controls"}),". Zet de ",e.jsx(o.code,{children:"vl-popover"}),` in de DOM direct na de trigger, zodat de
volgorde met Tab klopt.`]}),`
`,e.jsx(o.li,{children:"De acties zijn gewone knoppen en links. Je gaat ernaar met Tab, niet met de pijltoetsen."}),`
`,e.jsxs(o.li,{children:[`Escape sluit de popover. Stond de focus in de popover, dan gaat ze terug naar de trigger. Dat gebeurt ook wanneer een
actie de popover sluit met `,e.jsx(o.code,{children:"hide-on-click"}),", tenzij je eigen click-handler de focus al elders zette, bv. in een modal."]}),`
`,e.jsx(o.li,{children:"Opende de popover door hover, dan sluit Escape hem ook als de focus ergens anders staat."}),`
`,e.jsx(o.li,{children:"Verlaat de focus de popover met Tab of Shift+Tab, ook terug naar de trigger, dan sluit hij."}),`
`,e.jsxs(o.li,{children:["Een ",e.jsx(o.code,{children:"vl-popover-action"})," met ",e.jsx(o.code,{children:"href"})," blijft een link."]}),`
`,e.jsxs(o.li,{children:["Geef de ",e.jsx(o.code,{children:"vl-popover-action-list"})," eventueel een ",e.jsx(o.code,{children:"aria-label"}),", bv. ",e.jsx(o.code,{children:'aria-label="Acties"'}),"."]}),`
`]}),`
`,e.jsx(o.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(o.h3,{id:"floating-ui",children:"floating-ui"}),`
`,e.jsxs(o.p,{children:["De popover-component gebruikt achterliggend ",e.jsx(o.a,{href:"https://floating-ui.com/",rel:"nofollow",children:"floating-ui"}),"."]}),`
`,e.jsx(o.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(o.p,{children:e.jsx(o.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/componenten/popover",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Popover"})})]})}function J(n={}){const{wrapper:o}={...S(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(C,{...n})}):C(n)}function T(n,o){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const{action:A}=__STORYBOOK_MODULE_ACTIONS__;_([G,M,q,Z]);const Q={id:"components-block-popover",title:"Components - Block/popover",tags:["autodocs"],args:r,argTypes:U,parameters:{docs:{page:J}}},P=n=>g` <div style="position: relative;min-height: 150px;">${n()}</div>`,R=f(r,({trigger:n,contentPadding:o,open:l,placement:t,hideArrow:j,hideOnClick:s,distance:D,strategy:O,maxHeight:H})=>g`
            <vl-button ghost icon="nav-show-more-vertical" id="btn-acties" label="Acties"></vl-button>
            <vl-popover
                for="btn-acties"
                ?open="${l}"
                placement=${t}
                trigger=${n}
                hide-arrow=${j}
                hide-on-click="${s}"
                distance=${D}
                strategy=${O}
                content-padding=${o}
                max-height=${H||N}
            >
                <vl-popover-action-list @click=${L=>{const u=L.target;A("click")("vl-popover-action clicked > "+u.action),Array.from(u.parentElement?.querySelectorAll("vl-popover-action")||[]).forEach(y=>{y!==u&&y.removeAttribute("selected")}),u.setAttribute("selected","")}}>
                    <vl-popover-action icon="search" .action=${"search"}>Zoeken</vl-popover-action>
                    <vl-popover-action icon="bell" .action=${"report"}>Rapportenoverzicht</vl-popover-action>
                    <vl-popover-action icon="pin" .action=${"locate"}>Vind locatie</vl-popover-action>
                </vl-popover-action-list>
            </vl-popover>
        `),c=R.bind({});c.storyName="vl-popover - default";c.decorators=[P];c.args={placement:"bottom-start"};const d=R.bind({});d.storyName="vl-popover - hover";d.decorators=[P];d.args={trigger:"click hover"};const v=f(a,({selected:n})=>g`
        <vl-popover-action-list @click=${l=>{const t=l.target;A("click")("vl-popover-action clicked > "+t.action,t),Array.from(t.parentElement?.querySelectorAll("vl-popover-action")||[]).forEach(s=>{s!==t&&s.removeAttribute("selected")}),t.setAttribute("selected","")}}>
            <vl-popover-action ?selected=${n} icon="search" .action="${"zoeken"}">Zoeken</vl-popover-action>
            <vl-popover-action icon="bell" .action="${"rapporten-tonen"}">Rapportenoverzicht</vl-popover-action>
            <vl-popover-action icon="pin" .action="${"locatie-vinden"}">Vind locatie</vl-popover-action>
        </vl-popover-action-list>
    `);v.storyName="vl-popover - actions";v.parameters={controls:{include:["selected"]}};const m=f(a,({selected:n})=>g`
        <vl-popover-action-list @click=${l=>{const t=l.target;A("click")("vl-popover-action clicked > "+t.action),Array.from(t.parentElement?.querySelectorAll("vl-popover-action")||[]).forEach(s=>{s!==t&&s.removeAttribute("selected")}),t.setAttribute("selected","")}}>
            <vl-popover-action ?selected=${n} icon="search" action="zoeken">Zoeken</vl-popover-action>
            <vl-popover-action icon="bell" action="rapporten-tonen">Rapportenoverzicht</vl-popover-action>
            <vl-popover-action icon="pin" action="locatie-vinden">Vind locatie</vl-popover-action>
            <hr class="vl-separator" />
            <vl-popover-action icon="save" action="bewaren">Bewaren</vl-popover-action>
            <vl-popover-action icon="trash" action="verwijderen">Verwijderen</vl-popover-action>
        </vl-popover-action-list>
    `);m.storyName="vl-popover - actions divider";m.parameters={controls:{include:["selected"]}};const h=f(a,({selected:n})=>g`
        <vl-popover-action-list>
            <vl-popover-action
                ?selected=${n}
                icon="search"
                href="#zoeken"
                target="_blank"
                rel="nofollow noopener noreferrer"
            >
                Zoeken</vl-popover-action
            >
            <vl-popover-action icon="bell" href="#rapporten-tonen" target="_blank" rel="nofollow noopener noreferrer">
                Rapportenoverzicht</vl-popover-action
            >
            <vl-popover-action icon="pin" href="#locatie-vinden" target="_blank" rel="nofollow noopener noreferrer">
                Vind locatie</vl-popover-action
            >
        </vl-popover-action-list>
    `);h.storyName="vl-popover - actions - links";h.parameters={controls:{include:["selected"]}};const ee=["PopoverDefault","PopoverHover","PopoverActions","PopoverActionsDivider","PopoverActionsLinks"];c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`story(popoverDefaultArgs, ({
  trigger,
  contentPadding,
  open,
  placement,
  hideArrow,
  hideOnClick,
  distance,
  strategy,
  maxHeight
}) => {
  const actionListClickHandler = (event: CustomEvent) => {
    const actionElement = event.target as VlPopoverActionComponent;
    action('click')('vl-popover-action clicked > ' + actionElement.action);
    const allActions = Array.from(actionElement.parentElement?.querySelectorAll('vl-popover-action') || []);
    allActions.forEach(item => {
      if (item !== actionElement) {
        item.removeAttribute('selected');
      }
    });
    actionElement.setAttribute('selected', '');
  };
  return html\`
            <vl-button ghost icon="nav-show-more-vertical" id="btn-acties" label="Acties"></vl-button>
            <vl-popover
                for="btn-acties"
                ?open="\${open}"
                placement=\${placement}
                trigger=\${trigger}
                hide-arrow=\${hideArrow}
                hide-on-click="\${hideOnClick}"
                distance=\${distance}
                strategy=\${strategy}
                content-padding=\${contentPadding}
                max-height=\${maxHeight || nothing}
            >
                <vl-popover-action-list @click=\${actionListClickHandler}>
                    <vl-popover-action icon="search" .action=\${'search'}>Zoeken</vl-popover-action>
                    <vl-popover-action icon="bell" .action=\${'report'}>Rapportenoverzicht</vl-popover-action>
                    <vl-popover-action icon="pin" .action=\${'locate'}>Vind locatie</vl-popover-action>
                </vl-popover-action-list>
            </vl-popover>
        \`;
})`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`story(popoverDefaultArgs, ({
  trigger,
  contentPadding,
  open,
  placement,
  hideArrow,
  hideOnClick,
  distance,
  strategy,
  maxHeight
}) => {
  const actionListClickHandler = (event: CustomEvent) => {
    const actionElement = event.target as VlPopoverActionComponent;
    action('click')('vl-popover-action clicked > ' + actionElement.action);
    const allActions = Array.from(actionElement.parentElement?.querySelectorAll('vl-popover-action') || []);
    allActions.forEach(item => {
      if (item !== actionElement) {
        item.removeAttribute('selected');
      }
    });
    actionElement.setAttribute('selected', '');
  };
  return html\`
            <vl-button ghost icon="nav-show-more-vertical" id="btn-acties" label="Acties"></vl-button>
            <vl-popover
                for="btn-acties"
                ?open="\${open}"
                placement=\${placement}
                trigger=\${trigger}
                hide-arrow=\${hideArrow}
                hide-on-click="\${hideOnClick}"
                distance=\${distance}
                strategy=\${strategy}
                content-padding=\${contentPadding}
                max-height=\${maxHeight || nothing}
            >
                <vl-popover-action-list @click=\${actionListClickHandler}>
                    <vl-popover-action icon="search" .action=\${'search'}>Zoeken</vl-popover-action>
                    <vl-popover-action icon="bell" .action=\${'report'}>Rapportenoverzicht</vl-popover-action>
                    <vl-popover-action icon="pin" .action=\${'locate'}>Vind locatie</vl-popover-action>
                </vl-popover-action-list>
            </vl-popover>
        \`;
})`,...d.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`story(popoverActionArgs, ({
  selected
}) => {
  const actionListClickHandler = (event: CustomEvent) => {
    const actionElement = event.target as VlPopoverActionComponent;
    action('click')('vl-popover-action clicked > ' + actionElement.action, actionElement);
    const allActions = Array.from(actionElement.parentElement?.querySelectorAll('vl-popover-action') || []);
    allActions.forEach(item => {
      if (item !== actionElement) {
        item.removeAttribute('selected');
      }
    });
    actionElement.setAttribute('selected', '');
  };
  return html\`
        <vl-popover-action-list @click=\${actionListClickHandler}>
            <vl-popover-action ?selected=\${selected} icon="search" .action="\${'zoeken'}">Zoeken</vl-popover-action>
            <vl-popover-action icon="bell" .action="\${'rapporten-tonen'}">Rapportenoverzicht</vl-popover-action>
            <vl-popover-action icon="pin" .action="\${'locatie-vinden'}">Vind locatie</vl-popover-action>
        </vl-popover-action-list>
    \`;
})`,...v.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`story(popoverActionArgs, ({
  selected
}) => {
  const actionListClickHandler = (event: CustomEvent) => {
    const actionElement = event.target as VlPopoverActionComponent;
    action('click')('vl-popover-action clicked > ' + actionElement.action);
    const allActions = Array.from(actionElement.parentElement?.querySelectorAll('vl-popover-action') || []);
    allActions.forEach(item => {
      if (item !== actionElement) {
        item.removeAttribute('selected');
      }
    });
    actionElement.setAttribute('selected', '');
  };
  return html\`
        <vl-popover-action-list @click=\${actionListClickHandler}>
            <vl-popover-action ?selected=\${selected} icon="search" action="zoeken">Zoeken</vl-popover-action>
            <vl-popover-action icon="bell" action="rapporten-tonen">Rapportenoverzicht</vl-popover-action>
            <vl-popover-action icon="pin" action="locatie-vinden">Vind locatie</vl-popover-action>
            <hr class="vl-separator" />
            <vl-popover-action icon="save" action="bewaren">Bewaren</vl-popover-action>
            <vl-popover-action icon="trash" action="verwijderen">Verwijderen</vl-popover-action>
        </vl-popover-action-list>
    \`;
})`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`story(popoverActionArgs, ({
  selected
}) => {
  return html\`
        <vl-popover-action-list>
            <vl-popover-action
                ?selected=\${selected}
                icon="search"
                href="#zoeken"
                target="_blank"
                rel="nofollow noopener noreferrer"
            >
                Zoeken</vl-popover-action
            >
            <vl-popover-action icon="bell" href="#rapporten-tonen" target="_blank" rel="nofollow noopener noreferrer">
                Rapportenoverzicht</vl-popover-action
            >
            <vl-popover-action icon="pin" href="#locatie-vinden" target="_blank" rel="nofollow noopener noreferrer">
                Vind locatie</vl-popover-action
            >
        </vl-popover-action-list>
    \`;
})`,...h.parameters?.docs?.source}}};export{v as PopoverActions,m as PopoverActionsDivider,h as PopoverActionsLinks,c as PopoverDefault,d as PopoverHover,ee as __namedExportsOrder,Q as default};
