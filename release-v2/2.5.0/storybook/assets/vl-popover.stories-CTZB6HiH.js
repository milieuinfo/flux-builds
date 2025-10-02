import{H as z,G as T,ce as D,J as c,O as x,P as O,K as v,bH as w,u as P,j as e,C as b,bd as L,S as A,s as u,x as h,r as H,bz as B,cf as N,cg as _,h as I}from"./iframe-CflcmDUD.js";import"./preload-helper-D9Z9MdNV.js";const k={...z,selected:!1};({...T,selected:String(k.selected)});const r={...z,...D},M={...T,for:{name:"for",description:"HTML id van het element die de popover zal triggeren en waar tegenover de popover zich zal oriënteren.",type:{name:v.STRING,required:!0},table:{type:{summary:v.STRING},category:c.PROPERTIES,defaultValue:{summary:r.for}}},open:{name:"open",description:"Bepaalt of de popover open is.",table:{type:{summary:v.BOOLEAN},category:c.PROPERTIES,defaultValue:{summary:String(r.open)}}},hideArrow:{name:"hide-arrow",description:"Verbergt de pijl die wijst naar het element die de popover triggert.",table:{type:{summary:v.BOOLEAN},category:c.ATTRIBUTES,defaultValue:{summary:String(r.hideArrow)}}},hideOnClick:{name:"hide-on-click",description:"Verbergt popover wanneer op de content wordt geklikt. Niet reactief.",table:{type:{summary:v.BOOLEAN},category:c.ATTRIBUTES,defaultValue:{summary:String(r.hideOnClick)}}},distance:{name:"distance",description:"Afstand van popover tegenover trigger element.",control:{type:x.RANGE,min:0,max:100,step:1},table:{type:{summary:v.NUMBER},category:c.ATTRIBUTES,defaultValue:{summary:String(r.distance)}}},contentPadding:{name:"content-padding",description:"De grootte van de padding van de content.<br>Deze padding wordt toegepast op zowel desktop als mobile.",control:{type:x.SELECT},options:[...Object.keys(w)],table:{type:{summary:O(Object.keys(w))},category:c.ATTRIBUTES,defaultValue:{summary:r.contentPadding}}},placement:{name:"placement",description:"Voorkeursoriëntatie van de popover als de ruimte het toelaat. Je kan ook `-start` of `-end` suffix toevoegen zodat oriëntatie start of eindigt aan respectievelijk begin of einde van het trigger element.",table:{type:{summary:"top | right | bottom | left"},category:c.ATTRIBUTES,defaultValue:{summary:r.placement}}},trigger:{name:"trigger",description:"Gebruiker interacties die popover zal triggeren. Je kan verschillende combineren door ze met een spatie naast mekaar te zetten. Bv. met `focus hover` zal de popover zowel verschijnen bij focus als bij hover.",table:{type:{summary:"click | focus | hover"},category:c.ATTRIBUTES,defaultValue:{summary:r.trigger}}},strategy:{name:"strategy",description:"Positioneringsstrategie van de popover. <br> [Meer info hier](https://floating-ui.com/docs/computePosition#strategy)",control:{type:x.SELECT},options:["absolute","fixed"],table:{type:{summary:["absolute","fixed"]},category:c.ATTRIBUTES,defaultValue:{summary:r.strategy}}}};function C(t){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...P(),...t.components},{FluxAlert:i,FluxMetaData:n}=o;return i||S("FluxAlert"),n||S("FluxMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(o.h1,{id:"popover",children:"Popover"}),`
`,e.jsx(n,{id:"components-block-popover"}),`
`,e.jsxs(o.p,{children:["Een ",e.jsx(o.code,{children:"popover"}),` is een nieuw, meestal kleiner venster / popup dat boven de andere inhoud op het scherm verschijnt.
Gebruik een popover om aanvullende informatie aan de gebruiker te geven of om gebruikersinteractie te vragen.`]}),`
`,e.jsx(o.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-js",children:`import { VlPopoverComponent } from '@domg-wc/components/block';
`})}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-html",children:`<vl-popover></vl-popover>
`})}),`
`,e.jsx(b,{of:l}),`
`,e.jsx(o.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(L,{of:l}),`
`,e.jsx(o.h2,{id:"gebruik",children:"Gebruik"}),`
`,e.jsx(o.h3,{id:"oriëntatie",children:"Oriëntatie"}),`
`,e.jsxs(o.p,{children:["Je kan de oriëntatie bepalen van de popover als daarvoor plaats is met ",e.jsx(o.code,{children:"placement"}),". Anders zal ",e.jsx(o.code,{children:"floating-ui"}),`
achterliggend zoeken naar de volgende geschikt oriëntatie; standaard zal dit dan de tegenovergestelde oriëntatie
zijn van de initieel ingestelde.
Meer info kan je `,e.jsx(o.a,{href:"https://floating-ui.com/docs/tutorial#placements",rel:"nofollow",children:"hier"})," vinden."]}),`
`,e.jsxs(o.p,{children:["Je kan een ",e.jsx(o.code,{children:"-start"})," of ",e.jsx(o.code,{children:"-end"}),` suffix toevoegen zodat de oriëntatie start of eindigt aan respectievelijk het begin of
einde van het referentie-element.`]}),`
`,e.jsx(o.h3,{id:"standaard-pijl--afstand",children:"Standaard pijl & afstand"}),`
`,e.jsx(o.p,{children:"Standaard wordt:"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:"de pijl getoond"}),`
`,e.jsxs(o.li,{children:["wordt de ",e.jsx(o.code,{children:"distance"})," ingesteld op ",e.jsx(o.code,{children:"10px"})]}),`
`]}),`
`,e.jsx(o.p,{children:"Dit is er zodat de stijl van DV gevolgd wordt."}),`
`,e.jsxs(o.p,{children:["Je kan de pijl verbergen door ",e.jsx(o.code,{children:"hide-arrow"}),` in te stellen.
De afstand tot het referentie-element kan je volledig zelf bepalen.`]}),`
`,e.jsx(o.h3,{id:"strategy",children:"Strategy"}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsx(o.p,{children:e.jsx(o.a,{href:"https://floating-ui.com/docs/computePosition#strategy",rel:"nofollow",children:"strategy documentatie bij floating-ui"})}),`
`]}),`
`,e.jsxs(o.p,{children:["Default is positioneringsstrategie ingesteld op ",e.jsx(o.code,{children:"absolute"}),`. De popover zal gepositioneerd worden ten opzichte van het
dichtstbijzijnde gepositioneerde parent-element (bv. een element met `,e.jsx(o.code,{children:"position: relative"}),")."]}),`
`,e.jsxs(o.p,{children:[`Om te vermijden dat de popover gepositioneerd wordt tegenover het verkeerde element, kan je best de eerste parent van
de popover instellen op `,e.jsx(o.code,{children:"position: relative"})," zodat de popover steeds gepositioneerd wordt zoals verwacht."]}),`
`,e.jsx(o.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(o.h3,{id:"hover",children:"Hover"}),`
`,e.jsxs(o.p,{children:["Je kan de standaard ",e.jsx(o.code,{children:"click"})," waarde voor ",e.jsx(o.code,{children:"trigger"})," ook instellen op bv. de combinatie van ",e.jsx(o.code,{children:"hover"})," & ",e.jsx(o.code,{children:"focus"})," interacties."]}),`
`,e.jsx(b,{of:s}),`
`,e.jsx(o.h3,{id:"popover-actions",children:"Popover Actions"}),`
`,e.jsxs(o.p,{children:["Je kan een lijst van acties toevoegen aan de popover en die acties markeren als ",e.jsx(o.code,{children:"active"}),"."]}),`
`,e.jsx(b,{of:p}),`
`,e.jsx(o.p,{children:"Hieronder vind je een voorbeeld implementatie met LitElement:"}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Toon HTML template voorbeeld"}),e.jsx(A,{code:`
  <vl-popover-action-list @click=\${actionListClickHandler}>
      <vl-popover-action selected=\${selected} icon="search">Zoeken</vl-popover-action>
      <vl-popover-action icon="bell">Rapportenoverzicht</vl-popover-action>
      <vl-popover-action icon="pin">Vind locatie</vl-popover-action>
  </vl-popover-action-list>
  `,language:"html",dark:!0})]}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Toon TypeScript code voorbeeld"}),e.jsx(A,{code:`
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
`,e.jsx(i,{type:"warning",children:`
  Sinds versie <strong>2.5.0</strong> wordt er automatisch een "button"- of "a"-element gerenderd in de vl-popover-action.<br/><br/>
  Indien je reeds je eigen buttons of links renderde binnenin een action moet je:
  <ul>
      <li><strong>In het geval van een button:</strong> de "click" en andere handlers verplaatsen naar het vl-popover-action component.</li>
      <li><strong>In het geval van een link:</strong> de "href", "target" en/of "rel" attributen verplaatsen naar het vl-popover-action component.</li>
  </ul>
`}),`
`,e.jsx(o.h3,{id:"popover-actions-divider",children:"Popover Actions Divider"}),`
`,e.jsxs(o.p,{children:["Een lijst van acties kan visueel opgesplitst worden adhv de horizontale regel: ",e.jsx(o.code,{children:'<hr class="vl-separator" />'}),"."]}),`
`,e.jsx(A,{code:`<vl-popover-action-list>
  <vl-popover-action icon="search">Zoeken</vl-popover-action>
  <vl-popover-action icon="bell">Rapportenoverzicht</vl-popover-action>
  <vl-popover-action icon="pin">Vind locatie</vl-popover-action>
  <hr class="vl-separator" />
  <vl-popover-action icon="save">Bewaren</vl-popover-action>
  <vl-popover-action icon="trash">Verwijderen</vl-popover-action>
</vl-popover-action-list>`}),`
`,e.jsx(b,{of:d}),`
`,e.jsx(o.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(o.h3,{id:"floating-ui",children:"floating-ui"}),`
`,e.jsxs(o.p,{children:["De popover-component gebruikt achterliggend ",e.jsx(o.a,{href:"https://floating-ui.com/",rel:"nofollow",children:"floating-ui"})]}),`
`,e.jsx(o.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(o.p,{children:e.jsx(o.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/js-components/vl-ui-popover",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Popover"})})]})}function q(t={}){const{wrapper:o}={...P(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(C,{...t})}):C(t)}function S(t,o){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const{action:E}=__STORYBOOK_MODULE_ACTIONS__;H([B,N,_,I]);const F={id:"components-block-popover",title:"Components - Block/popover",tags:["autodocs"],args:r,argTypes:M,parameters:{docs:{page:q}}},V=t=>h` <div style="position: relative;min-height: 150px;">${t()}</div>`,l=u(r,({trigger:t,contentPadding:o,open:i,placement:n,hideArrow:g,hideOnClick:a,distance:j,strategy:y})=>h`
            <vl-button ghost icon="nav-show-more-vertical" id="btn-acties" label="Acties"></vl-button>
            <vl-popover
                for="btn-acties"
                ?open="${i}"
                placement=${n}
                trigger=${t}
                hide-arrow=${g}
                hide-on-click="${a}"
                distance=${j}
                strategy=${y}
                content-padding=${o}
            >
                <vl-popover-action-list @click=${R=>{const f=R.target;E("click")("vl-popover-action clicked > "+f.action),Array.from(f.parentElement?.querySelectorAll("vl-popover-action")||[]).forEach($=>{$!==f&&$.removeAttribute("selected")}),f.setAttribute("selected","")}}>
                    <vl-popover-action icon="search" .action=${"search"}>Zoeken</vl-popover-action>
                    <vl-popover-action icon="bell" .action=${"report"}>Rapportenoverzicht</vl-popover-action>
                    <vl-popover-action icon="pin" .action=${"locate"}>Vind locatie</vl-popover-action>
                </vl-popover-action-list>
            </vl-popover>
        `);l.storyName="vl-popover - default";l.decorators=[V];l.args={placement:"bottom-start"};const s=u(r,({trigger:t,open:o,contentPadding:i,placement:n,hideArrow:g,hideOnClick:a,distance:j,strategy:y})=>h`
            <vl-button id="btn-close" aria-describedby="tooltip">Hover over me</vl-button>
            <vl-popover
                for="btn-close"
                ?open=${o}
                placement=${n}
                trigger=${t}
                hide-arrow=${g}
                hide-on-click=${a}
                distance=${j}
                strategy=${y}
                content-padding=${i}
            >
                Een boodschap die context geeft.
            </vl-popover>
        `);s.storyName="vl-popover - hover";s.decorators=[V];s.args={trigger:"focus hover"};s.parameters={layout:"centered"};const p=u(k,({selected:t})=>h`
        <vl-popover-action-list @click=${i=>{const n=i.target;E("click")("vl-popover-action clicked > "+n.action,n),Array.from(n.parentElement?.querySelectorAll("vl-popover-action")||[]).forEach(a=>{a!==n&&a.removeAttribute("selected")}),n.setAttribute("selected","")}}>
            <vl-popover-action ?selected=${t} icon="search" .action="${"zoeken"}">Zoeken</vl-popover-action>
            <vl-popover-action icon="bell" .action="${"rapporten-tonen"}">Rapportenoverzicht</vl-popover-action>
            <vl-popover-action icon="pin" .action="${"locatie-vinden"}">Vind locatie</vl-popover-action>
        </vl-popover-action-list>
    `);p.storyName="vl-popover - actions";p.parameters={controls:{include:["selected"]}};const d=u(k,({selected:t})=>h`
        <vl-popover-action-list @click=${i=>{const n=i.target;E("click")("vl-popover-action clicked > "+n.action),Array.from(n.parentElement?.querySelectorAll("vl-popover-action")||[]).forEach(a=>{a!==n&&a.removeAttribute("selected")}),n.setAttribute("selected","")}}>
            <vl-popover-action ?selected=${t} icon="search" action="zoeken">Zoeken</vl-popover-action>
            <vl-popover-action icon="bell" action="rapporten-tonen">Rapportenoverzicht</vl-popover-action>
            <vl-popover-action icon="pin" action="locatie-vinden">Vind locatie</vl-popover-action>
            <hr class="vl-separator" />
            <vl-popover-action icon="save" action="bewaren">Bewaren</vl-popover-action>
            <vl-popover-action icon="trash" action="verwijderen">Verwijderen</vl-popover-action>
        </vl-popover-action-list>
    `);d.storyName="vl-popover - actions divider";d.parameters={controls:{include:["selected"]}};const m=u(k,({selected:t})=>h`
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
    `);m.storyName="vl-popover - actions - links";m.parameters={controls:{include:["selected"]}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`story(popoverDefaultArgs, ({
  trigger,
  contentPadding,
  open,
  placement,
  hideArrow,
  hideOnClick,
  distance,
  strategy
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
            >
                <vl-popover-action-list @click=\${actionListClickHandler}>
                    <vl-popover-action icon="search" .action=\${'search'}>Zoeken</vl-popover-action>
                    <vl-popover-action icon="bell" .action=\${'report'}>Rapportenoverzicht</vl-popover-action>
                    <vl-popover-action icon="pin" .action=\${'locate'}>Vind locatie</vl-popover-action>
                </vl-popover-action-list>
            </vl-popover>
        \`;
})`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story(popoverDefaultArgs, ({
  trigger,
  open,
  contentPadding,
  placement,
  hideArrow,
  hideOnClick,
  distance,
  strategy
}) => {
  return html\`
            <vl-button id="btn-close" aria-describedby="tooltip">Hover over me</vl-button>
            <vl-popover
                for="btn-close"
                ?open=\${open}
                placement=\${placement}
                trigger=\${trigger}
                hide-arrow=\${hideArrow}
                hide-on-click=\${hideOnClick}
                distance=\${distance}
                strategy=\${strategy}
                content-padding=\${contentPadding}
            >
                Een boodschap die context geeft.
            </vl-popover>
        \`;
})`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`story(popoverActionArgs, ({
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
})`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`story(popoverActionArgs, ({
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
})`,...m.parameters?.docs?.source}}};const X=["PopoverDefault","PopoverHover","PopoverActions","PopoverActionsDivider","PopoverActionsLinks"];export{p as PopoverActions,d as PopoverActionsDivider,m as PopoverActionsLinks,l as PopoverDefault,s as PopoverHover,X as __namedExportsOrder,F as default};
