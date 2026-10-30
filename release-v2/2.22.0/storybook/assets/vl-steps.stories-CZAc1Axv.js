import{Z as h,_ as j,W as T,X as f,u as D,j as t,C as m,b4 as x,s as l,b as o,r as P,bv as k,R as E}from"./iframe-ylVHDfb1.js";import"./vl-side-navigation.component-Do9gmewd.js";import{V as w}from"./vl-side-navigation-layout.component-nRGd575H.js";import"./preload-helper-PPVm8Dsz.js";const n={...f,line:!1,timeline:!1,simpleTimeline:!1,lastStepNoLine:!1},F={...T,line:{name:"line",description:"Beeldt een verticale lijn af tussen de stappen.",table:{type:{summary:j.BOOLEAN},category:h.ATTRIBUTES,defaultValue:{summary:String(n.line)}}},timeline:{name:"timeline",description:"Beeldt een verticale tijdlijn af tussen de stappen.",table:{type:{summary:j.BOOLEAN},category:h.ATTRIBUTES,defaultValue:{summary:String(n.timeline)}}},simpleTimeline:{name:"simple-timeline",description:"Beeldt een simpele verticale tijdlijn af tussen de stappen.",table:{type:{summary:j.BOOLEAN},category:h.ATTRIBUTES,defaultValue:{summary:String(n.simpleTimeline)}}},lastStepNoLine:{name:"last-step-no-line",description:"Laat de verticale lijn na de laatste stap weg bij gebruik van de line, timeline of simple-timeline attributen.",table:{type:{summary:j.BOOLEAN},category:h.ATTRIBUTES,defaultValue:{summary:String(n.lastStepNoLine)}}}};function S(s){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...D(),...s.components},{FluxComponentMetaData:i}=e;return i||L("FluxComponentMetaData"),t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"steps",children:"Steps"}),`
`,t.jsx(i,{id:"components-block-steps-steps"}),`
`,t.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,t.jsxs(e.p,{children:["Gebruik de ",t.jsx(e.code,{children:"steps"}),` component om een verticale lijst van stappen af te beelden om de gebruiker door een procedure te
begeleiden.`,t.jsx("br",{})]}),`
`,t.jsxs(e.p,{children:["Deze component is de nieuwe versie van de ",t.jsx(e.a,{href:"/docs/components-block-steps--documentatie",children:"vl-steps"})," component, we raden aan deze versie te gebruiken."]}),`
`,t.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`import { VlStepsComponent } from '@domg-wc/components/block';
`})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<vl-steps></vl-steps>
`})}),`
`,t.jsx(m,{of:r}),`
`,t.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,t.jsx(x,{of:r}),`
`,t.jsx(e.h2,{id:"varianten",children:"Varianten"}),`
`,t.jsx(e.h3,{id:"iconen",children:"Iconen"}),`
`,t.jsx(m,{of:v}),`
`,t.jsx(e.h3,{id:"toestanden",children:"Toestanden"}),`
`,t.jsx(e.p,{children:`Voeg altijd een tekst toe als een stap disabled is zodat de disabled toestand niet enkel met de grijze kleur
overgebracht wordt, bv. "geannuleerd".`}),`
`,t.jsxs(e.p,{children:["Zie de 'states' story onder ",t.jsx(e.a,{href:"/docs/components-block-steps-step--documentatie",children:"vl-step"})," voor een voorbeeld."]}),`
`,t.jsx(e.h3,{id:"accordions",children:"Accordions"}),`
`,t.jsxs(e.p,{children:["Zie de 'toggleable' story onder ",t.jsx(e.a,{href:"/docs/components-block-steps-step--documentatie",children:"vl-step"})," voor een voorbeeld."]}),`
`,t.jsx(e.h3,{id:"lijn",children:"Lijn"}),`
`,t.jsx(m,{of:u}),`
`,t.jsx(e.h3,{id:"tijdlijn",children:"Tijdlijn"}),`
`,t.jsx(e.h4,{id:"vl-duration-step",children:"vl-duration-step"}),`
`,t.jsxs(e.p,{children:["Een ",t.jsx(e.code,{children:"<vl-duration-step>"})," moet je zien als een onderdeel van een ",t.jsx(e.code,{children:"<vl-step>"})," en hoort dus in een eigen ",t.jsx(e.code,{children:"<ul>"}),` lijst
element te staan. Plaats hem daarvoor in de `,t.jsx(e.code,{children:"<vl-step>"}),' met het slot "duration".']}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<vl-step>
    ...
    <vl-duration-step slot="duration">...</vl-duration-step>
</vl-step>
`})}),`
`,t.jsx(m,{of:p}),`
`,t.jsx(e.h5,{id:"interactieve-tijdlijn",children:"Interactieve tijdlijn"}),`
`,t.jsxs(e.p,{children:["Standaard heeft elke ",t.jsx(e.code,{children:"<vl-duration-step>"}),` een zwarte stip. Zijn de stappen navigeerbaar (bijvoorbeeld
links naar een eerdere toestand), markeer ze dan met het `,t.jsx(e.code,{children:"interactive"}),`-attribuut: hun stip krijgt de
actie-kleur, net zoals een link. De huidige stap markeer je met `,t.jsx(e.code,{children:"selected"}),`: die houdt een zwarte stip en
krijgt `,t.jsx(e.code,{children:'aria-current="true"'}),`. Zet in die stap platte tekst, geen link: je bent er al, dus een link naar de
huidige toestand is misleidend voor toetsenbord- en screenreadergebruikers (WCAG). `,t.jsx(e.code,{children:"selected"}),` wint wel van
`,t.jsx(e.code,{children:"interactive"}),", dus mocht een stap toch beide hebben, dan blijft ze zwart."]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"interactive"}),` kleurt enkel de stip; de klikbaarheid komt van de link of knop die je in de stap zet, niet
van het attribuut. Gebruik het dus enkel op stappen die echt een link of knop bevatten, anders suggereert
de blauwe stip klikbaarheid die er niet is. Een screenreader leidt de interactiviteit af uit die link, niet
uit de kleur.`]}),`
`,t.jsx(m,{of:c}),`
`,t.jsxs(e.p,{children:["De stip zit in de shadow DOM en is via ",t.jsx(e.code,{children:"::part(duration-step)"})," ontsloten (de stip zelf is het ",t.jsx(e.code,{children:"::after"}),`).
Zo pas je als afnemer de stip aan:`]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-css",children:`vl-duration-step[interactive]::part(duration-step)::after {
    background-color: var(--vl-color--action-hover);
}
`})}),`
`,t.jsx(e.h3,{id:"simpele-tijdlijn",children:"Simpele tijdlijn"}),`
`,t.jsxs(e.p,{children:["Gebruik het ",t.jsx(e.code,{children:"icon slot"})," of ",t.jsx(e.code,{children:"sub-icon slot"})," niet in combinatie met de simpele tijdlijn."]}),`
`,t.jsx(m,{of:d}),`
`,t.jsx(e.h2,{id:"toegankelijkheid",children:"Toegankelijkheid"}),`
`,t.jsx(e.h3,{id:"icon-aria-label-en-timeline-aria-label",children:"icon-aria-label en timeline-aria-label"}),`
`,t.jsxs(e.p,{children:[`Bij het gebruik van de "iconen" of "tijdlijn" varianten is het aangeraden om respectievelijk de attributen
`,t.jsx(e.code,{children:"icon-aria-label"})," en ",t.jsx(e.code,{children:"timeline-aria-label"})," in te vullen op het ",t.jsx(e.code,{children:"<vl-step>"}),`-component. Dit kan een label voor het icoon
of de volledige datum bevatten.`]}),`
`,t.jsx(e.h3,{id:"heading-level",children:"heading-level"}),`
`,t.jsxs(e.p,{children:["Om de logische volgorde van de pagina headings te respecteren kan je een ",t.jsx(e.code,{children:"heading-level"}),` meegeven. Hiermee kan je ipv
de standaard `,t.jsx(e.code,{children:"<h3>"}),"-heading, ",t.jsx(e.code,{children:"<h1>"})," tot ",t.jsx(e.code,{children:"<h6>"})," laten renderen."]}),`
`,t.jsx(e.h3,{id:"aria-current",children:"aria-current"}),`
`,t.jsxs(e.p,{children:["Een ",t.jsx(e.code,{children:"<vl-duration-step>"})," met het ",t.jsx(e.code,{children:"selected"}),"-attribuut krijgt ",t.jsx(e.code,{children:'aria-current="true"'}),`, zodat een screenreader de
geselecteerde toestand herkent.`]}),`
`,t.jsx(e.h3,{id:"toggleable",children:"toggleable"}),`
`,t.jsxs(e.p,{children:["De inhoud van een gesloten ",t.jsx(e.code,{children:"toggleable"}),` step blijft vindbaar via de zoekfunctie van de browser (Ctrl+F of Cmd+F).
Vindt de browser een resultaat in die inhoud, dan klapt de step open en wordt het `,t.jsx(e.code,{children:"vl-on-toggle"}),` event afgevuurd.
Hetzelfde gebeurt bij een link naar een `,t.jsx(e.code,{children:"id"})," in de inhoud."]}),`
`,t.jsxs(e.p,{children:["Inhoud die je via ",t.jsx(e.code,{children:"contentRenderer"})," pas rendert wanneer de step open is, bestaat nog niet en is dus niet vindbaar."]}),`
`,t.jsx(e.h2,{id:"referenties",children:"Referenties"}),`
`,t.jsx(e.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/componenten/steps",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Steps"})})]})}function y(s={}){const{wrapper:e}={...D(),...s.components};return e?t.jsx(e,{...s,children:t.jsx(S,{...s})}):S(s)}function L(s,e){throw new Error("Expected component `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}P([w,k,E]);const M={id:"components-block-steps-steps",title:"Components - Block/steps/steps",tags:["autodocs"],args:n,argTypes:F,parameters:{docs:{page:y}}},r=l(n,({line:s,timeline:e,simpleTimeline:i,lastStepNoLine:a})=>o`
        <vl-steps
            ?line=${s}
            ?timeline=${e}
            ?simple-timeline=${i}
            ?last-step-no-line=${a}
        >
            <vl-step>
                <span slot="icon">1</span>
                <span slot="title">Stap 1: eerste actie</span>
                <span slot="subtitle">Dit is de eerste subtitel.</span>
                <span slot="content">Dit is de eerste stap content.</span>
            </vl-step>
            <vl-step>
                <span slot="icon">2</span>
                <span slot="title">Stap 2: tweede actie</span>
                <span slot="subtitle">Dit is de tweede subtitel.</span>
                <span slot="content">Dit is de tweede stap content.</span>
            </vl-step>
            <vl-step>
                <span slot="icon">3</span>
                <span slot="title">Stap 3: derde actie</span>
                <span slot="subtitle">Dit is de derde subtitel.</span>
                <span slot="content">Dit is de derde stap content.</span>
            </vl-step>
        </vl-steps>
    `);r.storyName="vl-steps - default";const v=l(n,({line:s,timeline:e,simpleTimeline:i,lastStepNoLine:a})=>o`
        <vl-steps
            ?line=${s}
            ?timeline=${e}
            ?simple-timeline=${i}
            ?last-step-no-line=${a}
        >
            <vl-step icon-aria-label="Zoeken">
                <vl-icon slot="icon" icon="search"></vl-icon>
                <span slot="title">Stap 1: eerste actie</span>
                <span slot="subtitle">Dit is de eerste subtitel.</span>
                <span slot="content">Dit is de eerste stap content.</span>
            </vl-step>
            <vl-step icon-aria-label="Kalender">
                <vl-icon slot="icon" icon="calendar"></vl-icon>
                <span slot="title">Stap 2: tweede actie</span>
                <span slot="subtitle">Dit is de tweede subtitel.</span>
                <span slot="content">Dit is de tweede stap content.</span>
            </vl-step>
            <vl-step icon-aria-label="Klok">
                <vl-icon slot="icon" icon="clock"></vl-icon>
                <span slot="title">Stap 3: derde actie</span>
                <span slot="subtitle">Dit is de derde subtitel.</span>
                <span slot="content">Dit is de derde stap content.</span>
            </vl-step>
        </vl-steps>
    `);v.storyName="vl-steps - icons";const u=l(n,({line:s,timeline:e,simpleTimeline:i,lastStepNoLine:a})=>o`
        <vl-steps
            ?line=${s}
            ?timeline=${e}
            ?simple-timeline=${i}
            ?last-step-no-line=${a}
        >
            <vl-step>
                <span slot="icon">1</span>
                <span slot="title">Stap 1: eerste actie</span>
                <span slot="subtitle">Dit is de eerste subtitel.</span>
                <span slot="content">Dit is de eerste stap content.</span>
            </vl-step>
            <vl-step>
                <span slot="icon">2</span>
                <span slot="title">Stap 2: tweede actie</span>
                <span slot="subtitle">Dit is de tweede subtitel.</span>
                <span slot="content">Dit is de tweede stap content.</span>
            </vl-step>
            <vl-step>
                <span slot="icon">3</span>
                <span slot="title">Stap 3: derde actie</span>
                <span slot="subtitle">Dit is de derde subtitel.</span>
                <span slot="content">Dit is de derde stap content.</span>
            </vl-step>
        </vl-steps>
    `);u.storyName="vl-steps - line";u.args={line:!0};const p=l(n,({line:s,timeline:e,simpleTimeline:i,lastStepNoLine:a})=>o`
        <vl-steps
            ?line=${s}
            ?timeline=${e}
            ?simple-timeline=${i}
            ?last-step-no-line=${a}
        >
            <vl-step timeline-aria-label="1 maart, 12 uur tot 14 uur">
                <span slot="icon">1</span>
                <span slot="sub-icon">maa</span>
                <span slot="title">Stap 1: eerste actie</span>
                <span slot="title-annotation">12u00 - 14u00</span>
                <span slot="subtitle">Dit is de eerste subtitel.</span>
                <span slot="content">Dit is de eerste stap content.</span>
                <vl-duration-step slot="duration">Lunch: 1 uur</vl-duration-step>
                <vl-duration-step slot="duration">Vrije tijd: 1 uur</vl-duration-step>
                <vl-duration-step slot="duration">Vrije tijd: 1 uur</vl-duration-step>
                <vl-duration-step slot="duration">Vrije tijd: 1 uur</vl-duration-step>
                <vl-duration-step slot="duration">Vrije tijd: 1 uur</vl-duration-step>
            </vl-step>
            <vl-step timeline-aria-label="1 maart, 15 uur tot 17 uur">
                <span slot="icon">1</span>
                <span slot="sub-icon">maa</span>
                <span slot="title">Stap 2: tweede actie</span>
                <span slot="title-annotation">15u00 - 17u00</span>
                <span slot="subtitle">Dit is de tweede subtitel.</span>
                <span slot="content">Dit is de tweede stap content.</span>
                <vl-duration-step slot="duration">Vrije tijd: 2 uur</vl-duration-step>
            </vl-step>
            <vl-step timeline-aria-label="1 maart, 19 uur tot 21 uur">
                <span slot="icon">1</span>
                <span slot="sub-icon">maa</span>
                <span slot="title">Stap 3: derde actie</span>
                <span slot="title-annotation">19u00 - 21u00</span>
                <span slot="subtitle">Dit is de derde subtitel.</span>
                <span slot="content">Dit is de derde stap content.</span>
            </vl-step>
        </vl-steps>
    `);p.storyName="vl-steps - timeline";p.args={timeline:!0};const c=l(n,({line:s,timeline:e,simpleTimeline:i,lastStepNoLine:a})=>o`
        <vl-steps
            ?line=${s}
            ?timeline=${e}
            ?simple-timeline=${i}
            ?last-step-no-line=${a}
        >
            <vl-step timeline-aria-label="Exploitatietoestanden">
                <vl-icon slot="icon" icon="calendar"></vl-icon>
                <span slot="title">Exploitatietoestanden</span>
                <vl-title slot="content" type="h4" appearance="h6">Toestanden:</vl-title>
                <vl-duration-step slot="duration" selected>21 augustus 2027 - heden (actuele toestand)</vl-duration-step>
                <vl-duration-step slot="duration" interactive>
                    <vl-link href="#">15 april 2027 - 20 augustus 2027</vl-link>
                </vl-duration-step>
                <vl-duration-step slot="duration" interactive>
                    <vl-link href="#">1 januari 2027 - 14 april 2027</vl-link>
                </vl-duration-step>
                <vl-duration-step slot="duration" interactive>
                    <vl-link href="#">2026 (gereconstrueerd)</vl-link>
                </vl-duration-step>
            </vl-step>
        </vl-steps>
    `);c.storyName="vl-steps - timeline interactief";c.args={timeline:!0};const d=l(n,({line:s,timeline:e,simpleTimeline:i,lastStepNoLine:a})=>o`
        <vl-steps
            ?line=${s}
            ?timeline=${e}
            ?simple-timeline=${i}
            ?last-step-no-line=${a}
        >
            <vl-step>
                <span slot="title">Stap 1: eerste actie</span>
                <span slot="subtitle">Dit is de eerste subtitel.</span>
                <span slot="content">Dit is de eerste stap content.</span>
            </vl-step>
            <vl-step>
                <span slot="title">Stap 2: tweede actie</span>
                <span slot="subtitle">Dit is de tweede subtitel.</span>
                <span slot="content">Dit is de tweede stap content.</span>
            </vl-step>
            <vl-step>
                <span slot="title">Stap 3: derde actie</span>
                <span slot="subtitle">Dit is de derde subtitel.</span>
                <span slot="content">Dit is de derde stap content.</span>
            </vl-step>
        </vl-steps>
    `);d.storyName="vl-steps - simple timeline";d.args={simpleTimeline:!0};const g=l(n,({line:s,timeline:e,simpleTimeline:i,lastStepNoLine:a})=>o`
        <vl-steps
            ?line=${s}
            ?timeline=${e}
            ?simple-timeline=${i}
            ?last-step-no-line=${a}
        >
            <vl-step toggleable default-open>
                <span slot="icon">1</span>
                <span slot="title">Stap 1: eerste actie</span>
                <span slot="subtitle">Klik om de content te openen/sluiten.</span>
                <span slot="content">
                    <p>Dit is de eerste stap content. Deze stap is toggleable.</p>
                    <ul>
                        <li>Item A</li>
                        <li>Item B</li>
                        <li>Item C</li>
                    </ul>
                </span>
            </vl-step>
            <vl-step toggleable>
                <span slot="icon">2</span>
                <span slot="title">Stap 2: tweede actie</span>
                <span slot="subtitle">Klik om de content te openen/sluiten.</span>
                <span slot="content">
                    <p>Dit is de tweede stap content. Deze stap is ook toggleable.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </span>
            </vl-step>
            <vl-step toggleable>
                <span slot="icon">3</span>
                <span slot="title">Stap 3: derde actie</span>
                <span slot="subtitle">Klik om de content te openen/sluiten.</span>
                <span slot="content">
                    <p>Dit is de derde stap content. Deze stap is ook toggleable.</p>
                </span>
            </vl-step>
        </vl-steps>
    `);g.storyName="vl-steps - toggleable";const b=l(n,({line:s,timeline:e,simpleTimeline:i,lastStepNoLine:a})=>o`
        <vl-steps
            ?line=${s}
            ?timeline=${e}
            ?simple-timeline=${i}
            ?last-step-no-line=${a}
        >
            <!-- default -->
            <vl-step>
                <span slot="icon">1</span>
                <span slot="title">Default stap</span>
                <span slot="subtitle">Standaard weergave.</span>
                <span slot="content">Dit is een standaard stap zonder extra staat.</span>
            </vl-step>
            <!-- highlighted -->
            <vl-step type="highlighted">
                <span slot="icon">2</span>
                <span slot="title">Highlighted stap</span>
                <span slot="subtitle">Deze stap is gemarkeerd.</span>
                <span slot="content">Deze stap valt op door de highlighted staat.</span>
            </vl-step>
            <!-- disabled -->
            <vl-step type="disabled">
                <span slot="icon">3</span>
                <span slot="title">Disabled stap</span>
                <span slot="subtitle">Deze stap is uitgeschakeld.</span>
                <span slot="content">Deze stap kan niet worden geopend of gebruikt.</span>
            </vl-step>
            <!-- success -->
            <vl-step type="success">
                <span slot="icon">4</span>
                <span slot="title">Success stap</span>
                <span slot="subtitle">Deze stap is succesvol afgerond.</span>
                <span slot="content">Deze stap is met succes voltooid.</span>
            </vl-step>
            <!-- warning -->
            <vl-step type="warning">
                <span slot="icon">5</span>
                <span slot="title">Warning stap</span>
                <span slot="subtitle">Let op: deze stap vereist aandacht.</span>
                <span slot="content">Er is een waarschuwing voor deze stap.</span>
            </vl-step>
            <!-- error -->
            <vl-step type="error">
                <span slot="icon">6</span>
                <span slot="title">Error stap</span>
                <span slot="subtitle">Er is een fout opgetreden.</span>
                <span slot="content">Deze stap kon niet worden voltooid.</span>
            </vl-step>
        </vl-steps>
    `);b.storyName="vl-steps - all states";const q=l(n,()=>o`
        <section class="vl-section" id="steps-side-navigation-example">
            <vl-side-navigation-layout-next>
                <div slot="content">
                    <vl-steps>
                        <vl-step>
                            <span slot="icon">1</span>
                            <span slot="title">
                                <div>Stap 1: eerste actie</div>
                            </span>
                            <span slot="content">
                                <div>
                                    <vl-title type="h2" id="vl-steps-vl-step-1">Stap 1: eerste actie</vl-title>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus
                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada
                                        nunc vel risus commodo viverra maecenas accumsan lacus. Pretium lectus quam id
                                        leo in vitae. Dictum at tempor commodo ullamcorper a lacus. Facilisis gravida
                                        neque convallis a cras. Ut porttitor leo a diam sollicitudin tempor. Augue ut
                                        lectus arcu bibendum at varius vel pharetra vel. Fames ac turpis egestas
                                        maecenas pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                        Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac felis
                                        donec. Elit pellentesque habitant morbi tristique senectus et netus et.
                                        Tristique et egestas quis ipsum suspendisse ultrices gravida. Tortor consequat
                                        id porta nibh venenatis cras.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus
                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada
                                        nunc vel risus commodo viverra maecenas accumsan lacus. Pretium lectus quam id
                                        leo in vitae. Dictum at tempor commodo ullamcorper a lacus. Facilisis gravida
                                        neque convallis a cras. Ut porttitor leo a diam sollicitudin tempor. Augue ut
                                        lectus arcu bibendum at varius vel pharetra vel. Fames ac turpis egestas
                                        maecenas pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                        Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac felis
                                        donec. Elit pellentesque habitant morbi tristique senectus et netus et.
                                        Tristique et egestas quis ipsum suspendisse ultrices gravida. Tortor consequat
                                        id porta nibh venenatis cras.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus
                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada
                                        nunc vel risus commodo viverra maecenas accumsan lacus. Pretium lectus quam id
                                        leo in vitae. Dictum at tempor commodo ullamcorper a lacus. Facilisis gravida
                                        neque convallis a cras. Ut porttitor leo a diam sollicitudin tempor. Augue ut
                                        lectus arcu bibendum at varius vel pharetra vel. Fames ac turpis egestas
                                        maecenas pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                        Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac felis
                                        donec. Elit pellentesque habitant morbi tristique senectus et netus et.
                                        Tristique et egestas quis ipsum suspendisse ultrices gravida. Tortor consequat
                                        id porta nibh venenatis cras.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus
                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada
                                        nunc vel risus commodo viverra maecenas accumsan lacus. Pretium lectus quam id
                                        leo in vitae. Dictum at tempor commodo ullamcorper a lacus. Facilisis gravida
                                        neque convallis a cras. Ut porttitor leo a diam sollicitudin tempor. Augue ut
                                        lectus arcu bibendum at varius vel pharetra vel. Fames ac turpis egestas
                                        maecenas pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                        Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac felis
                                        donec. Elit pellentesque habitant morbi tristique senectus et netus et.
                                        Tristique et egestas quis ipsum suspendisse ultrices gravida. Tortor consequat
                                        id porta nibh venenatis cras.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus
                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada
                                        nunc vel risus commodo viverra maecenas accumsan lacus. Pretium lectus quam id
                                        leo in vitae. Dictum at tempor commodo ullamcorper a lacus. Facilisis gravida
                                        neque convallis a cras. Ut porttitor leo a diam sollicitudin tempor. Augue ut
                                        lectus arcu bibendum at varius vel pharetra vel. Fames ac turpis egestas
                                        maecenas pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                        Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac felis
                                        donec. Elit pellentesque habitant morbi tristique senectus et netus et.
                                        Tristique et egestas quis ipsum suspendisse ultrices gravida. Tortor consequat
                                        id porta nibh venenatis cras.
                                    </p>
                                </div>
                            </span>
                        </vl-step>
                        <vl-step>
                            <span slot="icon">2</span>
                            <span slot="title">
                                <div>Stap 2: tweede actie</div>
                            </span>
                            <span slot="content">
                                <div>
                                    <vl-title type="h2" id="vl-steps-vl-step-2">Stap 2: tweede actie</vl-title>
                                    <vl-title type="h3" underline id="vl-steps-vl-step-2-abstract">Abstract</vl-title>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus
                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada
                                        nunc vel risus commodo viverra maecenas accumsan lacus. Pretium lectus quam id
                                        leo in vitae. Dictum at tempor commodo ullamcorper a lacus. Facilisis gravida
                                        neque convallis a cras. Ut porttitor leo a diam sollicitudin tempor. Augue ut
                                        lectus arcu bibendum at varius vel pharetra vel. Fames ac turpis egestas
                                        maecenas pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                        Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac felis
                                        donec. Elit pellentesque habitant morbi tristique senectus et netus et.
                                        Tristique et egestas quis ipsum suspendisse ultrices gravida. Tortor consequat
                                        id porta nibh venenatis cras.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus
                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada
                                        nunc vel risus commodo viverra maecenas accumsan lacus. Pretium lectus quam id
                                        leo in vitae. Dictum at tempor commodo ullamcorper a lacus. Facilisis gravida
                                        neque convallis a cras. Ut porttitor leo a diam sollicitudin tempor. Augue ut
                                        lectus arcu bibendum at varius vel pharetra vel. Fames ac turpis egestas
                                        maecenas pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                        Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac felis
                                        donec. Elit pellentesque habitant morbi tristique senectus et netus et.
                                        Tristique et egestas quis ipsum suspendisse ultrices gravida. Tortor consequat
                                        id porta nibh venenatis cras.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus
                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada
                                        nunc vel risus commodo viverra maecenas accumsan lacus. Pretium lectus quam id
                                        leo in vitae. Dictum at tempor commodo ullamcorper a lacus. Facilisis gravida
                                        neque convallis a cras. Ut porttitor leo a diam sollicitudin tempor. Augue ut
                                        lectus arcu bibendum at varius vel pharetra vel. Fames ac turpis egestas
                                        maecenas pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                        Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac felis
                                        donec. Elit pellentesque habitant morbi tristique senectus et netus et.
                                        Tristique et egestas quis ipsum suspendisse ultrices gravida. Tortor consequat
                                        id porta nibh venenatis cras.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus
                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada
                                        nunc vel risus commodo viverra maecenas accumsan lacus. Pretium lectus quam id
                                        leo in vitae. Dictum at tempor commodo ullamcorper a lacus. Facilisis gravida
                                        neque convallis a cras. Ut porttitor leo a diam sollicitudin tempor. Augue ut
                                        lectus arcu bibendum at varius vel pharetra vel. Fames ac turpis egestas
                                        maecenas pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                        Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac felis
                                        donec. Elit pellentesque habitant morbi tristique senectus et netus et.
                                        Tristique et egestas quis ipsum suspendisse ultrices gravida. Tortor consequat
                                        id porta nibh venenatis cras.
                                    </p>
                                    <vl-title type="h4" id="vl-steps-vl-step-2-volledig">Volledig</vl-title>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus
                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada
                                        nunc vel risus commodo viverra maecenas accumsan lacus. Pretium lectus quam id
                                        leo in vitae. Dictum at tempor commodo ullamcorper a lacus. Facilisis gravida
                                        neque convallis a cras. Ut porttitor leo a diam sollicitudin tempor. Augue ut
                                        lectus arcu bibendum at varius vel pharetra vel. Fames ac turpis egestas
                                        maecenas pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                        Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac felis
                                        donec. Elit pellentesque habitant morbi tristique senectus et netus et.
                                        Tristique et egestas quis ipsum suspendisse ultrices gravida. Tortor consequat
                                        id porta nibh venenatis cras.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus
                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada
                                        nunc vel risus commodo viverra maecenas accumsan lacus. Pretium lectus quam id
                                        leo in vitae. Dictum at tempor commodo ullamcorper a lacus. Facilisis gravida
                                        neque convallis a cras. Ut porttitor leo a diam sollicitudin tempor. Augue ut
                                        lectus arcu bibendum at varius vel pharetra vel. Fames ac turpis egestas
                                        maecenas pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                        Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac felis
                                        donec. Elit pellentesque habitant morbi tristique senectus et netus et.
                                        Tristique et egestas quis ipsum suspendisse ultrices gravida. Tortor consequat
                                        id porta nibh venenatis cras.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus
                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada
                                        nunc vel risus commodo viverra maecenas accumsan lacus. Pretium lectus quam id
                                        leo in vitae. Dictum at tempor commodo ullamcorper a lacus. Facilisis gravida
                                        neque convallis a cras. Ut porttitor leo a diam sollicitudin tempor. Augue ut
                                        lectus arcu bibendum at varius vel pharetra vel. Fames ac turpis egestas
                                        maecenas pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                        Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac felis
                                        donec. Elit pellentesque habitant morbi tristique senectus et netus et.
                                        Tristique et egestas quis ipsum suspendisse ultrices gravida. Tortor consequat
                                        id porta nibh venenatis cras.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus
                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada
                                        nunc vel risus commodo viverra maecenas accumsan lacus. Pretium lectus quam id
                                        leo in vitae. Dictum at tempor commodo ullamcorper a lacus. Facilisis gravida
                                        neque convallis a cras. Ut porttitor leo a diam sollicitudin tempor. Augue ut
                                        lectus arcu bibendum at varius vel pharetra vel. Fames ac turpis egestas
                                        maecenas pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                        Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac felis
                                        donec. Elit pellentesque habitant morbi tristique senectus et netus et.
                                        Tristique et egestas quis ipsum suspendisse ultrices gravida. Tortor consequat
                                        id porta nibh venenatis cras.
                                    </p>
                                </div>
                            </span>
                        </vl-step>
                        <vl-step>
                            <span slot="icon">3</span>
                            <span slot="title">
                                <div>Stap 3: derde actie</div>
                            </span>
                            <span slot="content">
                                <div>
                                    <vl-title type="h2" id="vl-steps-vl-step-3">Stap 3: derde actie</vl-title>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus
                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada
                                        nunc vel risus commodo viverra maecenas accumsan lacus. Pretium lectus quam id
                                        leo in vitae. Dictum at tempor commodo ullamcorper a lacus. Facilisis gravida
                                        neque convallis a cras. Ut porttitor leo a diam sollicitudin tempor. Augue ut
                                        lectus arcu bibendum at varius vel pharetra vel. Fames ac turpis egestas
                                        maecenas pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                        Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac felis
                                        donec. Elit pellentesque habitant morbi tristique senectus et netus et.
                                        Tristique et egestas quis ipsum suspendisse ultrices gravida. Tortor consequat
                                        id porta nibh venenatis cras.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus
                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada
                                        nunc vel risus commodo viverra maecenas accumsan lacus. Pretium lectus quam id
                                        leo in vitae. Dictum at tempor commodo ullamcorper a lacus. Facilisis gravida
                                        neque convallis a cras. Ut porttitor leo a diam sollicitudin tempor. Augue ut
                                        lectus arcu bibendum at varius vel pharetra vel. Fames ac turpis egestas
                                        maecenas pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                        Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac felis
                                        donec. Elit pellentesque habitant morbi tristique senectus et netus et.
                                        Tristique et egestas quis ipsum suspendisse ultrices gravida. Tortor consequat
                                        id porta nibh venenatis cras.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus
                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada
                                        nunc vel risus commodo viverra maecenas accumsan lacus. Pretium lectus quam id
                                        leo in vitae. Dictum at tempor commodo ullamcorper a lacus. Facilisis gravida
                                        neque convallis a cras. Ut porttitor leo a diam sollicitudin tempor. Augue ut
                                        lectus arcu bibendum at varius vel pharetra vel. Fames ac turpis egestas
                                        maecenas pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                        Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac felis
                                        donec. Elit pellentesque habitant morbi tristique senectus et netus et.
                                        Tristique et egestas quis ipsum suspendisse ultrices gravida. Tortor consequat
                                        id porta nibh venenatis cras.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus
                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada
                                        nunc vel risus commodo viverra maecenas accumsan lacus. Pretium lectus quam id
                                        leo in vitae. Dictum at tempor commodo ullamcorper a lacus. Facilisis gravida
                                        neque convallis a cras. Ut porttitor leo a diam sollicitudin tempor. Augue ut
                                        lectus arcu bibendum at varius vel pharetra vel. Fames ac turpis egestas
                                        maecenas pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                        Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac felis
                                        donec. Elit pellentesque habitant morbi tristique senectus et netus et.
                                        Tristique et egestas quis ipsum suspendisse ultrices gravida. Tortor consequat
                                        id porta nibh venenatis cras.
                                    </p>
                                </div>
                            </span>
                        </vl-step>
                    </vl-steps>
                </div>
            </vl-side-navigation-layout-next>
        </section>
    `);q.storyName="vl-steps - side navigation";r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(stepsArgs, ({
  line,
  timeline,
  simpleTimeline,
  lastStepNoLine
}) => html\`
        <vl-steps
            ?line=\${line}
            ?timeline=\${timeline}
            ?simple-timeline=\${simpleTimeline}
            ?last-step-no-line=\${lastStepNoLine}
        >
            <vl-step>
                <span slot="icon">1</span>
                <span slot="title">Stap 1: eerste actie</span>
                <span slot="subtitle">Dit is de eerste subtitel.</span>
                <span slot="content">Dit is de eerste stap content.</span>
            </vl-step>
            <vl-step>
                <span slot="icon">2</span>
                <span slot="title">Stap 2: tweede actie</span>
                <span slot="subtitle">Dit is de tweede subtitel.</span>
                <span slot="content">Dit is de tweede stap content.</span>
            </vl-step>
            <vl-step>
                <span slot="icon">3</span>
                <span slot="title">Stap 3: derde actie</span>
                <span slot="subtitle">Dit is de derde subtitel.</span>
                <span slot="content">Dit is de derde stap content.</span>
            </vl-step>
        </vl-steps>
    \`)`,...r.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`story(stepsArgs, ({
  line,
  timeline,
  simpleTimeline,
  lastStepNoLine
}) => html\`
        <vl-steps
            ?line=\${line}
            ?timeline=\${timeline}
            ?simple-timeline=\${simpleTimeline}
            ?last-step-no-line=\${lastStepNoLine}
        >
            <vl-step icon-aria-label="Zoeken">
                <vl-icon slot="icon" icon="search"></vl-icon>
                <span slot="title">Stap 1: eerste actie</span>
                <span slot="subtitle">Dit is de eerste subtitel.</span>
                <span slot="content">Dit is de eerste stap content.</span>
            </vl-step>
            <vl-step icon-aria-label="Kalender">
                <vl-icon slot="icon" icon="calendar"></vl-icon>
                <span slot="title">Stap 2: tweede actie</span>
                <span slot="subtitle">Dit is de tweede subtitel.</span>
                <span slot="content">Dit is de tweede stap content.</span>
            </vl-step>
            <vl-step icon-aria-label="Klok">
                <vl-icon slot="icon" icon="clock"></vl-icon>
                <span slot="title">Stap 3: derde actie</span>
                <span slot="subtitle">Dit is de derde subtitel.</span>
                <span slot="content">Dit is de derde stap content.</span>
            </vl-step>
        </vl-steps>
    \`)`,...v.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`story(stepsArgs, ({
  line,
  timeline,
  simpleTimeline,
  lastStepNoLine
}) => html\`
        <vl-steps
            ?line=\${line}
            ?timeline=\${timeline}
            ?simple-timeline=\${simpleTimeline}
            ?last-step-no-line=\${lastStepNoLine}
        >
            <vl-step>
                <span slot="icon">1</span>
                <span slot="title">Stap 1: eerste actie</span>
                <span slot="subtitle">Dit is de eerste subtitel.</span>
                <span slot="content">Dit is de eerste stap content.</span>
            </vl-step>
            <vl-step>
                <span slot="icon">2</span>
                <span slot="title">Stap 2: tweede actie</span>
                <span slot="subtitle">Dit is de tweede subtitel.</span>
                <span slot="content">Dit is de tweede stap content.</span>
            </vl-step>
            <vl-step>
                <span slot="icon">3</span>
                <span slot="title">Stap 3: derde actie</span>
                <span slot="subtitle">Dit is de derde subtitel.</span>
                <span slot="content">Dit is de derde stap content.</span>
            </vl-step>
        </vl-steps>
    \`)`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`story(stepsArgs, ({
  line,
  timeline,
  simpleTimeline,
  lastStepNoLine
}) => html\`
        <vl-steps
            ?line=\${line}
            ?timeline=\${timeline}
            ?simple-timeline=\${simpleTimeline}
            ?last-step-no-line=\${lastStepNoLine}
        >
            <vl-step timeline-aria-label="1 maart, 12 uur tot 14 uur">
                <span slot="icon">1</span>
                <span slot="sub-icon">maa</span>
                <span slot="title">Stap 1: eerste actie</span>
                <span slot="title-annotation">12u00 - 14u00</span>
                <span slot="subtitle">Dit is de eerste subtitel.</span>
                <span slot="content">Dit is de eerste stap content.</span>
                <vl-duration-step slot="duration">Lunch: 1 uur</vl-duration-step>
                <vl-duration-step slot="duration">Vrije tijd: 1 uur</vl-duration-step>
                <vl-duration-step slot="duration">Vrije tijd: 1 uur</vl-duration-step>
                <vl-duration-step slot="duration">Vrije tijd: 1 uur</vl-duration-step>
                <vl-duration-step slot="duration">Vrije tijd: 1 uur</vl-duration-step>
            </vl-step>
            <vl-step timeline-aria-label="1 maart, 15 uur tot 17 uur">
                <span slot="icon">1</span>
                <span slot="sub-icon">maa</span>
                <span slot="title">Stap 2: tweede actie</span>
                <span slot="title-annotation">15u00 - 17u00</span>
                <span slot="subtitle">Dit is de tweede subtitel.</span>
                <span slot="content">Dit is de tweede stap content.</span>
                <vl-duration-step slot="duration">Vrije tijd: 2 uur</vl-duration-step>
            </vl-step>
            <vl-step timeline-aria-label="1 maart, 19 uur tot 21 uur">
                <span slot="icon">1</span>
                <span slot="sub-icon">maa</span>
                <span slot="title">Stap 3: derde actie</span>
                <span slot="title-annotation">19u00 - 21u00</span>
                <span slot="subtitle">Dit is de derde subtitel.</span>
                <span slot="content">Dit is de derde stap content.</span>
            </vl-step>
        </vl-steps>
    \`)`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`story(stepsArgs, ({
  line,
  timeline,
  simpleTimeline,
  lastStepNoLine
}) => html\`
        <vl-steps
            ?line=\${line}
            ?timeline=\${timeline}
            ?simple-timeline=\${simpleTimeline}
            ?last-step-no-line=\${lastStepNoLine}
        >
            <vl-step timeline-aria-label="Exploitatietoestanden">
                <vl-icon slot="icon" icon="calendar"></vl-icon>
                <span slot="title">Exploitatietoestanden</span>
                <vl-title slot="content" type="h4" appearance="h6">Toestanden:</vl-title>
                <vl-duration-step slot="duration" selected>21 augustus 2027 - heden (actuele toestand)</vl-duration-step>
                <vl-duration-step slot="duration" interactive>
                    <vl-link href="#">15 april 2027 - 20 augustus 2027</vl-link>
                </vl-duration-step>
                <vl-duration-step slot="duration" interactive>
                    <vl-link href="#">1 januari 2027 - 14 april 2027</vl-link>
                </vl-duration-step>
                <vl-duration-step slot="duration" interactive>
                    <vl-link href="#">2026 (gereconstrueerd)</vl-link>
                </vl-duration-step>
            </vl-step>
        </vl-steps>
    \`)`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`story(stepsArgs, ({
  line,
  timeline,
  simpleTimeline,
  lastStepNoLine
}) => html\`
        <vl-steps
            ?line=\${line}
            ?timeline=\${timeline}
            ?simple-timeline=\${simpleTimeline}
            ?last-step-no-line=\${lastStepNoLine}
        >
            <vl-step>
                <span slot="title">Stap 1: eerste actie</span>
                <span slot="subtitle">Dit is de eerste subtitel.</span>
                <span slot="content">Dit is de eerste stap content.</span>
            </vl-step>
            <vl-step>
                <span slot="title">Stap 2: tweede actie</span>
                <span slot="subtitle">Dit is de tweede subtitel.</span>
                <span slot="content">Dit is de tweede stap content.</span>
            </vl-step>
            <vl-step>
                <span slot="title">Stap 3: derde actie</span>
                <span slot="subtitle">Dit is de derde subtitel.</span>
                <span slot="content">Dit is de derde stap content.</span>
            </vl-step>
        </vl-steps>
    \`)`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`story(stepsArgs, ({
  line,
  timeline,
  simpleTimeline,
  lastStepNoLine
}) => html\`
        <vl-steps
            ?line=\${line}
            ?timeline=\${timeline}
            ?simple-timeline=\${simpleTimeline}
            ?last-step-no-line=\${lastStepNoLine}
        >
            <vl-step toggleable default-open>
                <span slot="icon">1</span>
                <span slot="title">Stap 1: eerste actie</span>
                <span slot="subtitle">Klik om de content te openen/sluiten.</span>
                <span slot="content">
                    <p>Dit is de eerste stap content. Deze stap is toggleable.</p>
                    <ul>
                        <li>Item A</li>
                        <li>Item B</li>
                        <li>Item C</li>
                    </ul>
                </span>
            </vl-step>
            <vl-step toggleable>
                <span slot="icon">2</span>
                <span slot="title">Stap 2: tweede actie</span>
                <span slot="subtitle">Klik om de content te openen/sluiten.</span>
                <span slot="content">
                    <p>Dit is de tweede stap content. Deze stap is ook toggleable.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </span>
            </vl-step>
            <vl-step toggleable>
                <span slot="icon">3</span>
                <span slot="title">Stap 3: derde actie</span>
                <span slot="subtitle">Klik om de content te openen/sluiten.</span>
                <span slot="content">
                    <p>Dit is de derde stap content. Deze stap is ook toggleable.</p>
                </span>
            </vl-step>
        </vl-steps>
    \`)`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`story(stepsArgs, ({
  line,
  timeline,
  simpleTimeline,
  lastStepNoLine
}) => html\`
        <vl-steps
            ?line=\${line}
            ?timeline=\${timeline}
            ?simple-timeline=\${simpleTimeline}
            ?last-step-no-line=\${lastStepNoLine}
        >
            <!-- default -->
            <vl-step>
                <span slot="icon">1</span>
                <span slot="title">Default stap</span>
                <span slot="subtitle">Standaard weergave.</span>
                <span slot="content">Dit is een standaard stap zonder extra staat.</span>
            </vl-step>
            <!-- highlighted -->
            <vl-step type="highlighted">
                <span slot="icon">2</span>
                <span slot="title">Highlighted stap</span>
                <span slot="subtitle">Deze stap is gemarkeerd.</span>
                <span slot="content">Deze stap valt op door de highlighted staat.</span>
            </vl-step>
            <!-- disabled -->
            <vl-step type="disabled">
                <span slot="icon">3</span>
                <span slot="title">Disabled stap</span>
                <span slot="subtitle">Deze stap is uitgeschakeld.</span>
                <span slot="content">Deze stap kan niet worden geopend of gebruikt.</span>
            </vl-step>
            <!-- success -->
            <vl-step type="success">
                <span slot="icon">4</span>
                <span slot="title">Success stap</span>
                <span slot="subtitle">Deze stap is succesvol afgerond.</span>
                <span slot="content">Deze stap is met succes voltooid.</span>
            </vl-step>
            <!-- warning -->
            <vl-step type="warning">
                <span slot="icon">5</span>
                <span slot="title">Warning stap</span>
                <span slot="subtitle">Let op: deze stap vereist aandacht.</span>
                <span slot="content">Er is een waarschuwing voor deze stap.</span>
            </vl-step>
            <!-- error -->
            <vl-step type="error">
                <span slot="icon">6</span>
                <span slot="title">Error stap</span>
                <span slot="subtitle">Er is een fout opgetreden.</span>
                <span slot="content">Deze stap kon niet worden voltooid.</span>
            </vl-step>
        </vl-steps>
    \`)`,...b.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`story(stepsArgs, () => html\`
        <section class="vl-section" id="steps-side-navigation-example">
            <vl-side-navigation-layout-next>
                <div slot="content">
                    <vl-steps>
                        <vl-step>
                            <span slot="icon">1</span>
                            <span slot="title">
                                <div>Stap 1: eerste actie</div>
                            </span>
                            <span slot="content">
                                <div>
                                    <vl-title type="h2" id="vl-steps-vl-step-1">Stap 1: eerste actie</vl-title>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus
                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada
                                        nunc vel risus commodo viverra maecenas accumsan lacus. Pretium lectus quam id
                                        leo in vitae. Dictum at tempor commodo ullamcorper a lacus. Facilisis gravida
                                        neque convallis a cras. Ut porttitor leo a diam sollicitudin tempor. Augue ut
                                        lectus arcu bibendum at varius vel pharetra vel. Fames ac turpis egestas
                                        maecenas pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                        Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac felis
                                        donec. Elit pellentesque habitant morbi tristique senectus et netus et.
                                        Tristique et egestas quis ipsum suspendisse ultrices gravida. Tortor consequat
                                        id porta nibh venenatis cras.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus
                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada
                                        nunc vel risus commodo viverra maecenas accumsan lacus. Pretium lectus quam id
                                        leo in vitae. Dictum at tempor commodo ullamcorper a lacus. Facilisis gravida
                                        neque convallis a cras. Ut porttitor leo a diam sollicitudin tempor. Augue ut
                                        lectus arcu bibendum at varius vel pharetra vel. Fames ac turpis egestas
                                        maecenas pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                        Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac felis
                                        donec. Elit pellentesque habitant morbi tristique senectus et netus et.
                                        Tristique et egestas quis ipsum suspendisse ultrices gravida. Tortor consequat
                                        id porta nibh venenatis cras.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus
                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada
                                        nunc vel risus commodo viverra maecenas accumsan lacus. Pretium lectus quam id
                                        leo in vitae. Dictum at tempor commodo ullamcorper a lacus. Facilisis gravida
                                        neque convallis a cras. Ut porttitor leo a diam sollicitudin tempor. Augue ut
                                        lectus arcu bibendum at varius vel pharetra vel. Fames ac turpis egestas
                                        maecenas pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                        Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac felis
                                        donec. Elit pellentesque habitant morbi tristique senectus et netus et.
                                        Tristique et egestas quis ipsum suspendisse ultrices gravida. Tortor consequat
                                        id porta nibh venenatis cras.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus
                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada
                                        nunc vel risus commodo viverra maecenas accumsan lacus. Pretium lectus quam id
                                        leo in vitae. Dictum at tempor commodo ullamcorper a lacus. Facilisis gravida
                                        neque convallis a cras. Ut porttitor leo a diam sollicitudin tempor. Augue ut
                                        lectus arcu bibendum at varius vel pharetra vel. Fames ac turpis egestas
                                        maecenas pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                        Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac felis
                                        donec. Elit pellentesque habitant morbi tristique senectus et netus et.
                                        Tristique et egestas quis ipsum suspendisse ultrices gravida. Tortor consequat
                                        id porta nibh venenatis cras.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus
                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada
                                        nunc vel risus commodo viverra maecenas accumsan lacus. Pretium lectus quam id
                                        leo in vitae. Dictum at tempor commodo ullamcorper a lacus. Facilisis gravida
                                        neque convallis a cras. Ut porttitor leo a diam sollicitudin tempor. Augue ut
                                        lectus arcu bibendum at varius vel pharetra vel. Fames ac turpis egestas
                                        maecenas pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                        Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac felis
                                        donec. Elit pellentesque habitant morbi tristique senectus et netus et.
                                        Tristique et egestas quis ipsum suspendisse ultrices gravida. Tortor consequat
                                        id porta nibh venenatis cras.
                                    </p>
                                </div>
                            </span>
                        </vl-step>
                        <vl-step>
                            <span slot="icon">2</span>
                            <span slot="title">
                                <div>Stap 2: tweede actie</div>
                            </span>
                            <span slot="content">
                                <div>
                                    <vl-title type="h2" id="vl-steps-vl-step-2">Stap 2: tweede actie</vl-title>
                                    <vl-title type="h3" underline id="vl-steps-vl-step-2-abstract">Abstract</vl-title>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus
                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada
                                        nunc vel risus commodo viverra maecenas accumsan lacus. Pretium lectus quam id
                                        leo in vitae. Dictum at tempor commodo ullamcorper a lacus. Facilisis gravida
                                        neque convallis a cras. Ut porttitor leo a diam sollicitudin tempor. Augue ut
                                        lectus arcu bibendum at varius vel pharetra vel. Fames ac turpis egestas
                                        maecenas pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                        Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac felis
                                        donec. Elit pellentesque habitant morbi tristique senectus et netus et.
                                        Tristique et egestas quis ipsum suspendisse ultrices gravida. Tortor consequat
                                        id porta nibh venenatis cras.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus
                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada
                                        nunc vel risus commodo viverra maecenas accumsan lacus. Pretium lectus quam id
                                        leo in vitae. Dictum at tempor commodo ullamcorper a lacus. Facilisis gravida
                                        neque convallis a cras. Ut porttitor leo a diam sollicitudin tempor. Augue ut
                                        lectus arcu bibendum at varius vel pharetra vel. Fames ac turpis egestas
                                        maecenas pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                        Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac felis
                                        donec. Elit pellentesque habitant morbi tristique senectus et netus et.
                                        Tristique et egestas quis ipsum suspendisse ultrices gravida. Tortor consequat
                                        id porta nibh venenatis cras.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus
                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada
                                        nunc vel risus commodo viverra maecenas accumsan lacus. Pretium lectus quam id
                                        leo in vitae. Dictum at tempor commodo ullamcorper a lacus. Facilisis gravida
                                        neque convallis a cras. Ut porttitor leo a diam sollicitudin tempor. Augue ut
                                        lectus arcu bibendum at varius vel pharetra vel. Fames ac turpis egestas
                                        maecenas pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                        Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac felis
                                        donec. Elit pellentesque habitant morbi tristique senectus et netus et.
                                        Tristique et egestas quis ipsum suspendisse ultrices gravida. Tortor consequat
                                        id porta nibh venenatis cras.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus
                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada
                                        nunc vel risus commodo viverra maecenas accumsan lacus. Pretium lectus quam id
                                        leo in vitae. Dictum at tempor commodo ullamcorper a lacus. Facilisis gravida
                                        neque convallis a cras. Ut porttitor leo a diam sollicitudin tempor. Augue ut
                                        lectus arcu bibendum at varius vel pharetra vel. Fames ac turpis egestas
                                        maecenas pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                        Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac felis
                                        donec. Elit pellentesque habitant morbi tristique senectus et netus et.
                                        Tristique et egestas quis ipsum suspendisse ultrices gravida. Tortor consequat
                                        id porta nibh venenatis cras.
                                    </p>
                                    <vl-title type="h4" id="vl-steps-vl-step-2-volledig">Volledig</vl-title>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus
                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada
                                        nunc vel risus commodo viverra maecenas accumsan lacus. Pretium lectus quam id
                                        leo in vitae. Dictum at tempor commodo ullamcorper a lacus. Facilisis gravida
                                        neque convallis a cras. Ut porttitor leo a diam sollicitudin tempor. Augue ut
                                        lectus arcu bibendum at varius vel pharetra vel. Fames ac turpis egestas
                                        maecenas pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                        Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac felis
                                        donec. Elit pellentesque habitant morbi tristique senectus et netus et.
                                        Tristique et egestas quis ipsum suspendisse ultrices gravida. Tortor consequat
                                        id porta nibh venenatis cras.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus
                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada
                                        nunc vel risus commodo viverra maecenas accumsan lacus. Pretium lectus quam id
                                        leo in vitae. Dictum at tempor commodo ullamcorper a lacus. Facilisis gravida
                                        neque convallis a cras. Ut porttitor leo a diam sollicitudin tempor. Augue ut
                                        lectus arcu bibendum at varius vel pharetra vel. Fames ac turpis egestas
                                        maecenas pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                        Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac felis
                                        donec. Elit pellentesque habitant morbi tristique senectus et netus et.
                                        Tristique et egestas quis ipsum suspendisse ultrices gravida. Tortor consequat
                                        id porta nibh venenatis cras.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus
                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada
                                        nunc vel risus commodo viverra maecenas accumsan lacus. Pretium lectus quam id
                                        leo in vitae. Dictum at tempor commodo ullamcorper a lacus. Facilisis gravida
                                        neque convallis a cras. Ut porttitor leo a diam sollicitudin tempor. Augue ut
                                        lectus arcu bibendum at varius vel pharetra vel. Fames ac turpis egestas
                                        maecenas pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                        Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac felis
                                        donec. Elit pellentesque habitant morbi tristique senectus et netus et.
                                        Tristique et egestas quis ipsum suspendisse ultrices gravida. Tortor consequat
                                        id porta nibh venenatis cras.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus
                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada
                                        nunc vel risus commodo viverra maecenas accumsan lacus. Pretium lectus quam id
                                        leo in vitae. Dictum at tempor commodo ullamcorper a lacus. Facilisis gravida
                                        neque convallis a cras. Ut porttitor leo a diam sollicitudin tempor. Augue ut
                                        lectus arcu bibendum at varius vel pharetra vel. Fames ac turpis egestas
                                        maecenas pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                        Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac felis
                                        donec. Elit pellentesque habitant morbi tristique senectus et netus et.
                                        Tristique et egestas quis ipsum suspendisse ultrices gravida. Tortor consequat
                                        id porta nibh venenatis cras.
                                    </p>
                                </div>
                            </span>
                        </vl-step>
                        <vl-step>
                            <span slot="icon">3</span>
                            <span slot="title">
                                <div>Stap 3: derde actie</div>
                            </span>
                            <span slot="content">
                                <div>
                                    <vl-title type="h2" id="vl-steps-vl-step-3">Stap 3: derde actie</vl-title>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus
                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada
                                        nunc vel risus commodo viverra maecenas accumsan lacus. Pretium lectus quam id
                                        leo in vitae. Dictum at tempor commodo ullamcorper a lacus. Facilisis gravida
                                        neque convallis a cras. Ut porttitor leo a diam sollicitudin tempor. Augue ut
                                        lectus arcu bibendum at varius vel pharetra vel. Fames ac turpis egestas
                                        maecenas pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                        Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac felis
                                        donec. Elit pellentesque habitant morbi tristique senectus et netus et.
                                        Tristique et egestas quis ipsum suspendisse ultrices gravida. Tortor consequat
                                        id porta nibh venenatis cras.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus
                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada
                                        nunc vel risus commodo viverra maecenas accumsan lacus. Pretium lectus quam id
                                        leo in vitae. Dictum at tempor commodo ullamcorper a lacus. Facilisis gravida
                                        neque convallis a cras. Ut porttitor leo a diam sollicitudin tempor. Augue ut
                                        lectus arcu bibendum at varius vel pharetra vel. Fames ac turpis egestas
                                        maecenas pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                        Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac felis
                                        donec. Elit pellentesque habitant morbi tristique senectus et netus et.
                                        Tristique et egestas quis ipsum suspendisse ultrices gravida. Tortor consequat
                                        id porta nibh venenatis cras.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus
                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada
                                        nunc vel risus commodo viverra maecenas accumsan lacus. Pretium lectus quam id
                                        leo in vitae. Dictum at tempor commodo ullamcorper a lacus. Facilisis gravida
                                        neque convallis a cras. Ut porttitor leo a diam sollicitudin tempor. Augue ut
                                        lectus arcu bibendum at varius vel pharetra vel. Fames ac turpis egestas
                                        maecenas pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                        Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac felis
                                        donec. Elit pellentesque habitant morbi tristique senectus et netus et.
                                        Tristique et egestas quis ipsum suspendisse ultrices gravida. Tortor consequat
                                        id porta nibh venenatis cras.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus
                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada
                                        nunc vel risus commodo viverra maecenas accumsan lacus. Pretium lectus quam id
                                        leo in vitae. Dictum at tempor commodo ullamcorper a lacus. Facilisis gravida
                                        neque convallis a cras. Ut porttitor leo a diam sollicitudin tempor. Augue ut
                                        lectus arcu bibendum at varius vel pharetra vel. Fames ac turpis egestas
                                        maecenas pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                        Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac felis
                                        donec. Elit pellentesque habitant morbi tristique senectus et netus et.
                                        Tristique et egestas quis ipsum suspendisse ultrices gravida. Tortor consequat
                                        id porta nibh venenatis cras.
                                    </p>
                                </div>
                            </span>
                        </vl-step>
                    </vl-steps>
                </div>
            </vl-side-navigation-layout-next>
        </section>
    \`)`,...q.parameters?.docs?.source}}};const N=["StepsDefault","StepsIcons","StepsLine","StepsTimeline","StepsTimelineInteractive","StepsSimpleTimeline","StepsToggleable","StepsAllStates","StepsSideNavigation"];export{b as StepsAllStates,r as StepsDefault,v as StepsIcons,u as StepsLine,q as StepsSideNavigation,d as StepsSimpleTimeline,p as StepsTimeline,c as StepsTimelineInteractive,g as StepsToggleable,N as __namedExportsOrder,M as default};
