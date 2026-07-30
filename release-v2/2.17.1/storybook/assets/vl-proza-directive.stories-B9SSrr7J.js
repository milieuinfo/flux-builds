import{o as z,c0 as f,c1 as m,P as d,u as g,j as e,C as v,s as p,x}from"./iframe-DynOw9qF.js";import{p as P,a as b}from"./vl-proza-message.stories-msw-Drls1g5_.js";import"./preload-helper-D9Z9MdNV.js";class y extends f{constructor(r){super(r)}render(r,t){const i=t?.domain||m.getPreferences().prozaDomain;if(!i)throw new Error(`[vlProza] Geen domein opgegeven voor code "${r}". Stel een default domein in via FluxConfig.setPreferences({ prozaDomain: '...' }) of geef een domain mee in de opties.`);const n=t?.fallback??r;return r===this.previousCode&&i===this.previousDomain&&this.parametersEqual(t?.parameters,this.previousParameters)&&t?.baseUrl===this.previousBaseUrl||(this.previousCode=r,this.previousDomain=i,this.previousParameters=t?.parameters,this.previousBaseUrl=t?.baseUrl,this.fetchMessage(i,r,t)),n}async fetchMessage(r,t,i){try{const n=await d.getMessage(r,t,i?.parameters??null,i?.baseUrl);this.setValue(D(n))}catch(n){console.error(`[vlProza] Fout bij ophalen van bericht voor {domein: ${r}, code: ${t}}`,n)}}parametersEqual(r,t){if(r===t)return!0;if(!r||!t)return!1;const i=Object.keys(r),n=Object.keys(t);return i.length!==n.length?!1:i.every(j=>r[j]===t[j])}}function D(l){return new DOMParser().parseFromString(l,"text/html").body.textContent??""}const k=z(y),c=(l,r)=>k(l,r);function u(l){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...g(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsxs(r.h1,{id:"proza-directive-vlproza",children:["Proza Directive (",e.jsx(r.code,{children:"vlProza"}),")"]}),`
`,e.jsx(r.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(r.p,{children:["Gebruik de ",e.jsx(r.code,{children:"vlProza"})," directive om een Proza bericht te gebruiken als ",e.jsx(r.strong,{children:"attribuut waarde"}),` op eender welke Lit-based
component. Dit is handig wanneer je een Proza bericht wilt gebruiken op plaatsen waar enkel strings geaccepteerd worden,
zoals het `,e.jsx(r.code,{children:"title"})," attribuut van ",e.jsx(r.code,{children:"vl-alert"}),"."]}),`
`,e.jsxs(r.p,{children:["De directive haalt het bericht asynchroon op via ",e.jsx(r.code,{children:"VlProzaMessage.getMessage()"}),`, strip HTML-tags (retourneert plain
text), en toont een fallback waarde tijdens het laden.`]}),`
`,e.jsx(r.h2,{id:"import",children:"Import"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-ts",children:`import { vlProza } from '@domg-wc/components/block';
`})}),`
`,e.jsx(r.h2,{id:"setup",children:"Setup"}),`
`,e.jsxs(r.p,{children:["Stel eenmalig het default Proza domein in via ",e.jsx(r.code,{children:"FluxConfig"}),` bij het bootstrappen van je applicatie.
Dit domein wordt gedeeld met `,e.jsx(r.code,{children:"vl-proza-message"})," en ",e.jsx(r.code,{children:"vl-proza-message-preloader"}),":"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-ts",children:`import { FluxConfig } from '@domg-wc/common';

FluxConfig.setPreferences({ prozaDomain: 'mijn-domein' });
`})}),`
`,e.jsxs(r.p,{children:["Zie ook het ",e.jsx(r.a,{href:"/docs/recepten-configuratie--documentatie",children:"Configuratie"})," recept."]}),`
`,e.jsx(r.h2,{id:"gebruik",children:"Gebruik"}),`
`,e.jsx(r.h3,{id:"basis",children:"Basis"}),`
`,e.jsxs(r.p,{children:["Gebruik ",e.jsx(r.code,{children:"vlProza"})," in een Lit template expressie om een Proza bericht als attribuut waarde te binden:"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<vl-alert icon="warning" title=\${vlProza('alert.titel')} type="warning"></vl-alert>
`})}),`
`,e.jsx(v,{of:a}),`
`,e.jsx(r.h3,{id:"met-parameters",children:"Met parameters"}),`
`,e.jsxs(r.p,{children:["Geef template parameters mee om placeholders (",e.jsx(r.code,{children:"${parameter.key}"}),") in het Proza bericht te vervangen:"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-ts",children:`vlProza('welkom.titel', { parameters: { naam: 'Jan' } })
`})}),`
`,e.jsx(v,{of:s}),`
`,e.jsx(r.h3,{id:"met-domain-override",children:"Met domain override"}),`
`,e.jsxs(r.p,{children:["Gebruik de ",e.jsx(r.code,{children:"domain"})," optie om het default domein te overschrijven voor een specifieke aanroep:"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-ts",children:`vlProza('alert.titel', { domain: 'ander-domein' })
`})}),`
`,e.jsx(v,{of:o}),`
`,e.jsx(r.h2,{id:"api",children:"API"}),`
`,e.jsx(r.h3,{id:"vlprozacode-options",children:e.jsx(r.code,{children:"vlProza(code, options?)"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Verplicht"}),e.jsx("th",{children:"Beschrijving"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"code"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"ja"}),e.jsx("td",{children:"De code die het Proza bericht identificeert."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"options.domain"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"nee"}),e.jsx("td",{children:"Override van het default domein."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"options.parameters"})}),e.jsx("td",{children:e.jsx("code",{children:"Record<string, string>"})}),e.jsx("td",{children:"nee"}),e.jsx("td",{children:"Key/value parameters voor template vervanging."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"options.fallback"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"nee"}),e.jsxs("td",{children:["Tekst die getoond wordt tijdens het laden. Default: ",e.jsx("code",{children:"code"}),"."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"options.baseUrl"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"nee"}),e.jsx("td",{children:"Optionele base URL voor de Proza API."})]})]})]}),`
`,e.jsxs(r.h3,{id:"default-domein-via-fluxconfig",children:["Default domein via ",e.jsx(r.code,{children:"FluxConfig"})]}),`
`,e.jsxs(r.p,{children:["Het default domein wordt geconfigureerd via ",e.jsx(r.code,{children:"FluxConfig.setPreferences({ prozaDomain: '...' })"}),`.
Dit domein wordt gedeeld met `,e.jsx(r.code,{children:"vl-proza-message"})," en ",e.jsx(r.code,{children:"vl-proza-message-preloader"}),`.
Wanneer een expliciet `,e.jsx(r.code,{children:"domain"})," in de opties wordt meegegeven, heeft dit voorrang op het ",e.jsx(r.code,{children:"FluxConfig"})," domein."]}),`
`,e.jsxs(r.h2,{id:"verschil-met-vl-proza-message",children:["Verschil met ",e.jsx(r.code,{children:"vl-proza-message"})]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{}),e.jsx("th",{children:e.jsx("code",{children:"vl-proza-message"})}),e.jsxs("th",{children:[e.jsx("code",{children:"vlProza"})," directive"]})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Gebruik"})}),e.jsx("td",{children:"Als child element"}),e.jsx("td",{children:"Als attribuut waarde"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Output"})}),e.jsx("td",{children:"HTML (in shadow DOM)"}),e.jsx("td",{children:"Plain text (HTML-tags gestript)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Editeerbaar"})}),e.jsx("td",{children:"Ja (edit/refresh knoppen)"}),e.jsx("td",{children:"Nee"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Voorbeeld"})}),e.jsx("td",{children:e.jsx("code",{children:'<vl-proza-message domain="d" code="c">'})}),e.jsx("td",{children:e.jsx("code",{children:"title=${vlProza('c')}"})})]})]})]}),`
`,e.jsx(r.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"/docs/components-block-proza-message-proza-message--proza-message-default",children:"proza-message"})," component"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"/docs/components-block-proza-message-proza-message-preloader--proza-message-preloader-default",children:"proza-message-preloader"})," component"]}),`
`]})]})}function w(l={}){const{wrapper:r}={...g(),...l.components};return r?e.jsx(r,{...l,children:e.jsx(u,{...l})}):u(l)}m.preferences={...m.getPreferences(),prozaDomain:"mockdomain"};const h={},A={id:"components-block-proza-message-proza-directive",title:"Components - Block/proza-message/proza-directive",tags:["autodocs"],args:h,argTypes:{},parameters:{docs:{page:w},controls:{hideNoControlsWarning:!0},msw:{handlers:[...P,...b]}}},a=p(h,()=>(d.clearCache(),x`
        <div class="vl-grid vl-stacked-small">
            <div class="vl-column vl-column--12">
                <vl-title type="h6">Alert met proza titel (via attribuut):</vl-title>
                <vl-alert
                    icon="warning"
                    title=${c("alert.titel")}
                    type="warning"
                    closable
                ></vl-alert>
            </div>
            <div class="vl-column vl-column--12">
                <vl-title type="h6">Alert met proza titel en bericht:</vl-title>
                <vl-alert
                    icon="info-circle"
                    title=${c("alert.bericht")}
                    type="info"
                ></vl-alert>
            </div>
        </div>
    `));a.storyName="vlProza - default";a.parameters={docs:{source:{code:`FluxConfig.setPreferences({ prozaDomain: 'mockdomain' });

html\`
    <vl-alert
        icon="warning"
        title=\${vlProza('alert.titel')}
        type="warning"
        closable
    ></vl-alert>

    <vl-alert
        icon="info-circle"
        title=\${vlProza('alert.bericht')}
        type="info"
    ></vl-alert>
\``}}};const s=p(h,()=>(d.clearCache(),x`
        <div class="vl-grid vl-stacked-small">
            <div class="vl-column vl-column--12">
                <vl-title type="h6">Alert met parameters:</vl-title>
                <vl-alert
                    icon="user"
                    title=${c("welkom.titel",{parameters:{naam:"Jan"}})}
                    type="success"
                ></vl-alert>
            </div>
        </div>
    `));s.storyName="vlProza - met parameters";s.parameters={docs:{source:{code:`html\`
    <vl-alert
        icon="user"
        title=\${vlProza('welkom.titel', { parameters: { naam: 'Jan' } })}
        type="success"
    ></vl-alert>
\``}}};const o=p(h,()=>(d.clearCache(),x`
        <div class="vl-grid vl-stacked-small">
            <div class="vl-column vl-column--12">
                <vl-title type="h6">Alert met default domein:</vl-title>
                <vl-alert
                    icon="warning"
                    title=${c("alert.titel")}
                    type="warning"
                ></vl-alert>
            </div>
            <div class="vl-column vl-column--12">
                <vl-title type="h6">Alert met ander domein (override):</vl-title>
                <vl-alert
                    icon="info-circle"
                    title=${c("alert.titel",{domain:"otherdomain"})}
                    type="info"
                ></vl-alert>
            </div>
        </div>
    `));o.storyName="vlProza - domain override";o.parameters={docs:{source:{code:`html\`
    <!-- Met default domein -->
    <vl-alert
        icon="warning"
        title=\${vlProza('alert.titel')}
        type="warning"
    ></vl-alert>

    <!-- Met ander domein (override) -->
    <vl-alert
        icon="info-circle"
        title=\${vlProza('alert.titel', { domain: 'otherdomain' })}
        type="info"
    ></vl-alert>
\``}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`story(prozaDirectiveArgs, () => {
  VlProzaMessage.clearCache();
  return html\`
        <div class="vl-grid vl-stacked-small">
            <div class="vl-column vl-column--12">
                <vl-title type="h6">Alert met proza titel (via attribuut):</vl-title>
                <vl-alert
                    icon="warning"
                    title=\${vlProza('alert.titel')}
                    type="warning"
                    closable
                ></vl-alert>
            </div>
            <div class="vl-column vl-column--12">
                <vl-title type="h6">Alert met proza titel en bericht:</vl-title>
                <vl-alert
                    icon="info-circle"
                    title=\${vlProza('alert.bericht')}
                    type="info"
                ></vl-alert>
            </div>
        </div>
    \`;
})`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story(prozaDirectiveArgs, () => {
  VlProzaMessage.clearCache();
  return html\`
        <div class="vl-grid vl-stacked-small">
            <div class="vl-column vl-column--12">
                <vl-title type="h6">Alert met parameters:</vl-title>
                <vl-alert
                    icon="user"
                    title=\${vlProza('welkom.titel', {
    parameters: {
      naam: 'Jan'
    }
  })}
                    type="success"
                ></vl-alert>
            </div>
        </div>
    \`;
})`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`story(prozaDirectiveArgs, () => {
  VlProzaMessage.clearCache();
  return html\`
        <div class="vl-grid vl-stacked-small">
            <div class="vl-column vl-column--12">
                <vl-title type="h6">Alert met default domein:</vl-title>
                <vl-alert
                    icon="warning"
                    title=\${vlProza('alert.titel')}
                    type="warning"
                ></vl-alert>
            </div>
            <div class="vl-column vl-column--12">
                <vl-title type="h6">Alert met ander domein (override):</vl-title>
                <vl-alert
                    icon="info-circle"
                    title=\${vlProza('alert.titel', {
    domain: 'otherdomain'
  })}
                    type="info"
                ></vl-alert>
            </div>
        </div>
    \`;
})`,...o.parameters?.docs?.source}}};const F=["ProzaDirectiveDefault","ProzaDirectiveMetParameters","ProzaDirectiveDomainOverride"];export{a as ProzaDirectiveDefault,o as ProzaDirectiveDomainOverride,s as ProzaDirectiveMetParameters,F as __namedExportsOrder,A as default};
