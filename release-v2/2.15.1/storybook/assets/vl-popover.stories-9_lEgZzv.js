import{X as S,W as P,ck as B,Z as i,_ as p,a2 as E,a1 as k,cl as w,bM as $,u as V,j as e,C as j,bc as _,S as x,s as u,T as I,x as h,r as N,bB as q,cm as M,cn as Z,d as G}from"./iframe-nqJ0ju39.js";import"./preload-helper-D9Z9MdNV.js";const f={...S,selected:!1};({...P,selected:String(f.selected)});const r={...S,...B},U={...P,for:{name:"for",description:"HTML id van het element die de popover zal triggeren en waar tegenover de popover zich zal oriënteren.",type:{name:p.STRING,required:!0},table:{type:{summary:p.STRING},category:i.PROPERTIES,defaultValue:{summary:r.for}}},open:{name:"open",description:"Bepaalt of de popover open is.",table:{type:{summary:p.BOOLEAN},category:i.PROPERTIES,defaultValue:{summary:String(r.open)}}},hideArrow:{name:"hide-arrow",description:"Verbergt de pijl die wijst naar het element die de popover triggert.",table:{type:{summary:p.BOOLEAN},category:i.ATTRIBUTES,defaultValue:{summary:String(r.hideArrow)}}},hideOnClick:{name:"hide-on-click",description:"Verbergt popover wanneer op de content wordt geklikt. Niet reactief.",table:{type:{summary:p.BOOLEAN},category:i.ATTRIBUTES,defaultValue:{summary:String(r.hideOnClick)}}},distance:{name:"distance",description:"Afstand van de popover tegenover het trigger element.",control:{type:k.RANGE,min:0,max:100,step:1},table:{type:{summary:p.NUMBER},category:i.ATTRIBUTES,defaultValue:{summary:String(r.distance)}}},contentPadding:{name:"content-padding",description:"De grootte van de padding van de content.<br>Deze padding wordt toegepast op zowel desktop als mobile.",control:{type:k.SELECT},options:[...Object.keys($)],table:{type:{summary:E(Object.keys($))},category:i.ATTRIBUTES,defaultValue:{summary:r.contentPadding}}},placement:{name:"placement",description:"Voorkeursoriëntatie van de popover als de ruimte het toelaat. Je kan ook `-start` of `-end` suffix toevoegen zodat oriëntatie start of eindigt aan respectievelijk begin of einde van het trigger element.<br />[Raadpleeg de placement documentatie van floating-ui](https://floating-ui.com/docs/tutorial#placements).",table:{type:{summary:"top | right | bottom | left"},category:i.ATTRIBUTES,defaultValue:{summary:r.placement}}},trigger:{name:"trigger",description:"Gebruikersacties die de popover triggeren. Je kan verschillende acties combineren met spaties. Bv. met `focus hover` zal de popover zowel verschijnen bij focus als bij hover.<br />Tip: `hover` en `focus` zijn bij de popover meestal te vermijden. Gebruik hiervoor eerder [vl-tooltip](/?path=/docs/components-block-tooltip--documentatie).",table:{type:{summary:"click | focus | hover"},category:i.ATTRIBUTES,defaultValue:{summary:r.trigger}}},strategy:{name:"strategy",description:"Positioneringsstrategie van de popover.<br />[Raadpleeg de strategy documentatie van floating-ui](https://floating-ui.com/docs/computePosition#strategy).",control:{type:k.SELECT},options:Object.values(w),table:{type:{summary:E(Object.values(w))},category:i.ATTRIBUTES,defaultValue:{summary:r.strategy}}},maxHeight:{name:"max-height",description:"Optionele maximumhoogte van de popover-inhoud (CSS-lengte, bv. `300px` of `50vh`). Bij overschrijding scrollt de inhoud verticaal. De effectieve hoogte is het minimum van deze waarde en de automatisch berekende viewport-ruimte.",table:{type:{summary:p.STRING},category:i.ATTRIBUTES,defaultValue:{summary:r.maxHeight}}}};function C(t){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...V(),...t.components},{FluxAlert:c,FluxComponentMetaData:n}=o;return c||T("FluxAlert"),n||T("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(o.h1,{id:"popover",children:"Popover"}),`
`,e.jsx(n,{id:"components-block-popover"}),`
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
`,e.jsx(j,{of:a}),`
`,e.jsx(o.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(_,{of:a}),`
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
`,e.jsxs(o.p,{children:["Je kan de standaard ",e.jsx(o.code,{children:"click"})," waarde voor ",e.jsx(o.code,{children:"trigger"})," ook instellen op bv. de combinatie van ",e.jsx(o.code,{children:"hover"})," & ",e.jsx(o.code,{children:"focus"})," interacties."]}),`
`,e.jsxs(o.p,{children:["Het gebruik van het vl-popover component als tooltip is echter ",e.jsx(o.strong,{children:"deprecated"}),". Gebruik hiervoor het ",e.jsx(o.a,{href:"/docs/components-block-tooltip--documentatie",children:"vl-tooltip"})," component."]}),`
`,e.jsx(o.h3,{id:"popover-actions",children:"Popover Actions"}),`
`,e.jsxs(o.p,{children:["Je kan een lijst van acties toevoegen aan de popover en die acties markeren als ",e.jsx(o.code,{children:"active"}),"."]}),`
`,e.jsx(j,{of:v}),`
`,e.jsx(o.p,{children:"Hieronder vind je een voorbeeld implementatie met LitElement:"}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Toon HTML template voorbeeld"}),e.jsx(x,{code:`
  <vl-popover-action-list @click=\${actionListClickHandler}>
      <vl-popover-action selected=\${selected} icon="search">Zoeken</vl-popover-action>
      <vl-popover-action icon="bell">Rapportenoverzicht</vl-popover-action>
      <vl-popover-action icon="pin">Vind locatie</vl-popover-action>
  </vl-popover-action-list>
  `,language:"html",dark:!0})]}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Toon TypeScript code voorbeeld"}),e.jsx(x,{code:`
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
`,e.jsx(c,{type:"warning",children:`
  Sinds versie <strong>2.5.0</strong> wordt er automatisch een "button"- of "a"-element gerenderd in de vl-popover-action.<br/><br/>
  Indien je reeds je eigen buttons of links renderde binnenin een action moet je:
  <ul>
      <li><strong>In het geval van een button:</strong> de "click" en andere handlers verplaatsen naar het vl-popover-action component.</li>
      <li><strong>In het geval van een link:</strong> de "href", "target" en/of "rel" attributen verplaatsen naar het vl-popover-action component.</li>
  </ul>
`}),`
`,e.jsx(o.h3,{id:"popover-actions-divider",children:"Popover Actions Divider"}),`
`,e.jsxs(o.p,{children:["Een lijst van acties kan visueel opgesplitst worden adhv de horizontale regel: ",e.jsx(o.code,{children:'<hr class="vl-separator" />'}),"."]}),`
`,e.jsx(x,{code:`<vl-popover-action-list>
  <vl-popover-action icon="search">Zoeken</vl-popover-action>
  <vl-popover-action icon="bell">Rapportenoverzicht</vl-popover-action>
  <vl-popover-action icon="pin">Vind locatie</vl-popover-action>
  <hr class="vl-separator" />
  <vl-popover-action icon="save">Bewaren</vl-popover-action>
  <vl-popover-action icon="trash">Verwijderen</vl-popover-action>
</vl-popover-action-list>`}),`
`,e.jsx(j,{of:d}),`
`,e.jsx(o.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(o.h3,{id:"floating-ui",children:"floating-ui"}),`
`,e.jsxs(o.p,{children:["De popover-component gebruikt achterliggend ",e.jsx(o.a,{href:"https://floating-ui.com/",rel:"nofollow",children:"floating-ui"}),"."]}),`
`,e.jsx(o.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(o.p,{children:e.jsx(o.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/componenten/popover",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Popover"})})]})}function J(t={}){const{wrapper:o}={...V(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(C,{...t})}):C(t)}function T(t,o){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const{action:A}=__STORYBOOK_MODULE_ACTIONS__;N([q,M,Z,G]);const K={id:"components-block-popover",title:"Components - Block/popover",tags:["autodocs"],args:r,argTypes:U,parameters:{docs:{page:J}}},R=t=>h` <div style="position: relative;min-height: 150px;">${t()}</div>`,z=u(r,({trigger:t,contentPadding:o,open:c,placement:n,hideArrow:b,hideOnClick:l,distance:O,strategy:H,maxHeight:L})=>h`
            <vl-button ghost icon="nav-show-more-vertical" id="btn-acties" label="Acties"></vl-button>
            <vl-popover
                for="btn-acties"
                ?open="${c}"
                placement=${n}
                trigger=${t}
                hide-arrow=${b}
                hide-on-click="${l}"
                distance=${O}
                strategy=${H}
                content-padding=${o}
                max-height=${L||I}
            >
                <vl-popover-action-list @click=${D=>{const g=D.target;A("click")("vl-popover-action clicked > "+g.action),Array.from(g.parentElement?.querySelectorAll("vl-popover-action")||[]).forEach(y=>{y!==g&&y.removeAttribute("selected")}),g.setAttribute("selected","")}}>
                    <vl-popover-action icon="search" .action=${"search"}>Zoeken</vl-popover-action>
                    <vl-popover-action icon="bell" .action=${"report"}>Rapportenoverzicht</vl-popover-action>
                    <vl-popover-action icon="pin" .action=${"locate"}>Vind locatie</vl-popover-action>
                </vl-popover-action-list>
            </vl-popover>
        `),a=z.bind({});a.storyName="vl-popover - default";a.decorators=[R];a.args={placement:"bottom-start"};const s=z.bind({});s.storyName="vl-popover - hover";s.decorators=[R];s.args={trigger:"hover"};const v=u(f,({selected:t})=>h`
        <vl-popover-action-list @click=${c=>{const n=c.target;A("click")("vl-popover-action clicked > "+n.action,n),Array.from(n.parentElement?.querySelectorAll("vl-popover-action")||[]).forEach(l=>{l!==n&&l.removeAttribute("selected")}),n.setAttribute("selected","")}}>
            <vl-popover-action ?selected=${t} icon="search" .action="${"zoeken"}">Zoeken</vl-popover-action>
            <vl-popover-action icon="bell" .action="${"rapporten-tonen"}">Rapportenoverzicht</vl-popover-action>
            <vl-popover-action icon="pin" .action="${"locatie-vinden"}">Vind locatie</vl-popover-action>
        </vl-popover-action-list>
    `);v.storyName="vl-popover - actions";v.parameters={controls:{include:["selected"]}};const d=u(f,({selected:t})=>h`
        <vl-popover-action-list @click=${c=>{const n=c.target;A("click")("vl-popover-action clicked > "+n.action),Array.from(n.parentElement?.querySelectorAll("vl-popover-action")||[]).forEach(l=>{l!==n&&l.removeAttribute("selected")}),n.setAttribute("selected","")}}>
            <vl-popover-action ?selected=${t} icon="search" action="zoeken">Zoeken</vl-popover-action>
            <vl-popover-action icon="bell" action="rapporten-tonen">Rapportenoverzicht</vl-popover-action>
            <vl-popover-action icon="pin" action="locatie-vinden">Vind locatie</vl-popover-action>
            <hr class="vl-separator" />
            <vl-popover-action icon="save" action="bewaren">Bewaren</vl-popover-action>
            <vl-popover-action icon="trash" action="verwijderen">Verwijderen</vl-popover-action>
        </vl-popover-action-list>
    `);d.storyName="vl-popover - actions divider";d.parameters={controls:{include:["selected"]}};const m=u(f,({selected:t})=>h`
        <vl-popover-action-list>
            <vl-popover-action
                ?selected=${t}
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
    `);m.storyName="vl-popover - actions - links";m.parameters={controls:{include:["selected"]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`story(popoverDefaultArgs, ({
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
})`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story(popoverDefaultArgs, ({
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
})`,...s.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`story(popoverActionArgs, ({
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
})`,...v.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`story(popoverActionArgs, ({
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
})`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`story(popoverActionArgs, ({
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
})`,...m.parameters?.docs?.source}}};const Q=["PopoverDefault","PopoverHover","PopoverActions","PopoverActionsDivider","PopoverActionsLinks"];export{v as PopoverActions,d as PopoverActionsDivider,m as PopoverActionsLinks,a as PopoverDefault,s as PopoverHover,Q as __namedExportsOrder,K as default};
