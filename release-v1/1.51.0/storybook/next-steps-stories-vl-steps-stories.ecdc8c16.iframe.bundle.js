"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[1499],{"../../libs/components/src/next/steps/stories/vl-steps.stories.ts":(e,t,s)=>{s.r(t),s.d(t,{StepsDefault:()=>v,StepsIcons:()=>g,StepsLine:()=>q,StepsSideNavigation:()=>h,StepsSimpleTimeline:()=>x,StepsTimeline:()=>b,__namedExportsOrder:()=>S,default:()=>m});var a=s("../../libs/common/storybook/src/index.ts"),i=s("../../libs/common/utilities/src/index.ts"),n=s("../../node_modules/lit-html/lit-html.js"),l=s("../../libs/components/src/next/side-navigation/index.ts");s("../../libs/components/src/next/steps/vl-steps.component.ts");let o={...a.D8,line:!1,timeline:!1,simpleTimeline:!1,lastStepNoLine:!1},u={...(0,a.RN)(),line:{name:"data-vl-line",description:"Beeldt een verticale lijn af tussen de stappen.",table:{type:{summary:a.QE.BOOLEAN},category:a.R6.ATTRIBUTES,defaultValue:{summary:o.line}}},timeline:{name:"data-vl-timeline",description:"Beeldt een verticale tijdlijn af tussen de stappen.",table:{type:{summary:a.QE.BOOLEAN},category:a.R6.ATTRIBUTES,defaultValue:{summary:o.timeline}}},simpleTimeline:{name:"data-vl-simple-timeline",description:"Beeldt een simpele verticale tijdlijn af tussen de stappen.",table:{type:{summary:a.QE.BOOLEAN},category:a.R6.ATTRIBUTES,defaultValue:{summary:o.simpleTimeline}}},lastStepNoLine:{name:"data-vl-last-step-no-line",description:"Laat de verticale lijn na de laatste stap weg bij gebruik van de line, timeline of simple-timeline attributen.",table:{type:{summary:a.QE.BOOLEAN},category:a.R6.ATTRIBUTES,defaultValue:{summary:o.lastStepNoLine}}}};s("../../node_modules/react/index.js");var r=s("../../node_modules/react/jsx-runtime.js"),c=s("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),p=s("../../node_modules/@storybook/blocks/dist/index.mjs");function d(e){let t=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",h3:"h3"},(0,c.RP)(),e.components),{VluxMetaData:s}=t;return s||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VluxMetaData",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"steps---next",children:"Steps - next"}),"\n",(0,r.jsx)(s,{id:"components-next-steps-steps"}),"\n",(0,r.jsxs)(t.p,{children:["Gebruik de ",(0,r.jsx)(t.code,{children:"steps-next"})," component om een verticale lijst van stappen af te beelden om de gebruiker door een procedure te begeleiden.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(t.p,{children:["Deze component is de nieuwe versie van de ",(0,r.jsx)(t.a,{href:"/docs/components-steps--documentatie",children:"vl-steps"})," component, we raden aan deze versie te gebruiken."]}),"\n",(0,r.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"import { VlStepsComponent } from '@domg-wc/components/next/steps';\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:"<vl-steps-next></vl-steps-next>\n"})}),"\n",(0,r.jsx)(p.Hl,{of:v}),"\n",(0,r.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,r.jsx)(p.ov,{of:v}),"\n",(0,r.jsx)(t.h2,{id:"varianten",children:"Varianten"}),"\n",(0,r.jsx)(t.h3,{id:"iconen",children:"Iconen"}),"\n",(0,r.jsx)(p.Hl,{of:g}),"\n",(0,r.jsx)(t.h3,{id:"toestanden",children:"Toestanden"}),"\n",(0,r.jsx)(t.p,{children:'Voeg altijd een tekst toe als een stap disabled is zodat de disabled toestand niet enkel met de grijze kleur\novergebracht wordt, bv. "geannuleerd".'}),"\n",(0,r.jsxs)(t.p,{children:["Zie de 'states' story onder ",(0,r.jsx)(t.a,{href:"/docs/components-next-steps-step--documentatie",children:"vl-step-next"})," voor een voorbeeld."]}),"\n",(0,r.jsx)(t.h3,{id:"accordions",children:"Accordions"}),"\n",(0,r.jsxs)(t.p,{children:["Zie de 'toggleable' story onder ",(0,r.jsx)(t.a,{href:"/docs/components-next-steps-step--documentatie",children:"vl-step-next"})," voor een voorbeeld."]}),"\n",(0,r.jsx)(t.h3,{id:"lijn",children:"Lijn"}),"\n",(0,r.jsx)(p.Hl,{of:q}),"\n",(0,r.jsx)(t.h3,{id:"tijdlijn",children:"Tijdlijn"}),"\n",(0,r.jsx)(p.Hl,{of:b}),"\n",(0,r.jsx)(t.h3,{id:"simpele-tijdlijn",children:"Simpele tijdlijn"}),"\n",(0,r.jsxs)(t.p,{children:["Gebruik het ",(0,r.jsx)(t.code,{children:"icon slot"})," of ",(0,r.jsx)(t.code,{children:"sub-icon slot"})," niet in combinatie met de simpele tijdlijn."]}),"\n",(0,r.jsx)(p.Hl,{of:x}),"\n",(0,r.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,r.jsx)(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-steps",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Steps"})}),"\n",(0,r.jsx)(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/legacy-vl-steps--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Steps"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlSteps.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Steps"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-steps.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - Steps"})})]})}s("../../libs/components/src/next/steps/stories/vl-step.stories.ts"),(0,i.gy)([l.N8]);let m={id:"components-next-steps-steps",title:"Components-next/steps/steps",tags:["autodocs"],args:o,argTypes:u,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,c.RP)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}}}},v=(0,a._7)(o,({line:e,timeline:t,lastStepNoLine:s})=>(0,n.qy)`
        <vl-steps-next ?data-vl-line=${e} ?data-vl-timeline=${t} ?data-vl-last-step-no-line=${s}>
            <vl-step-next>
                <span slot="icon">1</span>
                <span slot="title">Stap 1: eerste actie</span>
                <span slot="subtitle">Dit is de eerste subtitel.</span>
                <span slot="content">Dit is de eerste stap content.</span>
            </vl-step-next>
            <vl-step-next>
                <span slot="icon">2</span>
                <span slot="title">Stap 2: tweede actie</span>
                <span slot="subtitle">Dit is de tweede subtitel.</span>
                <span slot="content">Dit is de tweede stap content.</span>
            </vl-step-next>
            <vl-step-next>
                <span slot="icon">3</span>
                <span slot="title">Stap 3: derde actie</span>
                <span slot="subtitle">Dit is de derde subtitel.</span>
                <span slot="content">Dit is de derde stap content.</span>
            </vl-step-next>
        </vl-steps-next>
    `);v.storyName="vl-steps-next - default";let g=(0,a._7)(o,({line:e,timeline:t,lastStepNoLine:s})=>(0,n.qy)`
        <vl-steps-next ?data-vl-line=${e} ?data-vl-timeline=${t} ?data-vl-last-step-no-line=${s}>
            <vl-step-next>
                <vl-icon-next slot="icon" icon="search"></vl-icon-next>
                <span slot="title">Stap 1: eerste actie</span>
                <span slot="subtitle">Dit is de eerste subtitel.</span>
                <span slot="content">Dit is de eerste stap content.</span>
            </vl-step-next>
            <vl-step-next>
                <vl-icon-next slot="icon" icon="calendar"></vl-icon-next>
                <span slot="title">Stap 2: tweede actie</span>
                <span slot="subtitle">Dit is de tweede subtitel.</span>
                <span slot="content">Dit is de tweede stap content.</span>
            </vl-step-next>
            <vl-step-next>
                <vl-icon-next slot="icon" icon="clock"></vl-icon-next>
                <span slot="title">Stap 3: derde actie</span>
                <span slot="subtitle">Dit is de derde subtitel.</span>
                <span slot="content">Dit is de derde stap content.</span>
            </vl-step-next>
        </vl-steps-next>
    `);g.storyName="vl-steps-next - icons";let q=(0,a._7)(o,({line:e,lastStepNoLine:t})=>(0,n.qy)`
        <vl-steps-next ?data-vl-line=${e} ?data-vl-last-step-no-line=${t}>
            <vl-step-next>
                <span slot="icon">1</span>
                <span slot="title">Stap 1: eerste actie</span>
                <span slot="subtitle">Dit is de eerste subtitel.</span>
                <span slot="content">Dit is de eerste stap content.</span>
            </vl-step-next>
            <vl-step-next>
                <span slot="icon">2</span>
                <span slot="title">Stap 2: tweede actie</span>
                <span slot="subtitle">Dit is de tweede subtitel.</span>
                <span slot="content">Dit is de tweede stap content.</span>
            </vl-step-next>
            <vl-step-next>
                <span slot="icon">3</span>
                <span slot="title">Stap 3: derde actie</span>
                <span slot="subtitle">Dit is de derde subtitel.</span>
                <span slot="content">Dit is de derde stap content.</span>
            </vl-step-next>
        </vl-steps-next>
    `);q.storyName="vl-steps-next - line",q.args={line:!0};let b=(0,a._7)(o,({timeline:e,lastStepNoLine:t})=>(0,n.qy)`
        <vl-steps-next ?data-vl-timeline=${e} ?data-vl-last-step-no-line=${t}>
            <vl-step-next>
                <span slot="icon">1</span>
                <span slot="sub-icon">maa</span>
                <span slot="title">Stap 1: eerste actie</span>
                <span slot="title-annotation">12u00 - 14u00</span>
                <span slot="subtitle">Dit is de eerste subtitel.</span>
                <span slot="content">Dit is de eerste stap content.</span>
            </vl-step-next>
            <vl-duration-step-next>Vrije tijd: 1 uur</vl-duration-step-next>
            <vl-step-next>
                <span slot="icon">1</span>
                <span slot="sub-icon">maa</span>
                <span slot="title">Stap 2: tweede actie</span>
                <span slot="title-annotation">15u00 - 17u00</span>
                <span slot="subtitle">Dit is de tweede subtitel.</span>
                <span slot="content">Dit is de tweede stap content.</span>
            </vl-step-next>
            <vl-duration-step-next>Vrije tijd: 2 uur</vl-duration-step-next>
            <vl-step-next>
                <span slot="icon">1</span>
                <span slot="sub-icon">maa</span>
                <span slot="title">Stap 3: derde actie</span>
                <span slot="title-annotation">19u00 - 21u00</span>
                <span slot="subtitle">Dit is de derde subtitel.</span>
                <span slot="content">Dit is de derde stap content.</span>
            </vl-step-next>
        </vl-steps-next>
    `);b.storyName="vl-steps-next - timeline",b.args={timeline:!0};let x=(0,a._7)(o,({simpleTimeline:e,lastStepNoLine:t})=>(0,n.qy)`
        <vl-steps-next ?data-vl-simple-timeline=${e} ?data-vl-last-step-no-line=${t}>
            <vl-step-next>
                <span slot="title">Stap 1: eerste actie</span>
                <span slot="subtitle">Dit is de eerste subtitel.</span>
                <span slot="content">Dit is de eerste stap content.</span>
            </vl-step-next>
            <vl-step-next>
                <span slot="title">Stap 2: tweede actie</span>
                <span slot="subtitle">Dit is de tweede subtitel.</span>
                <span slot="content">Dit is de tweede stap content.</span>
            </vl-step-next>
            <vl-step-next>
                <span slot="title">Stap 3: derde actie</span>
                <span slot="subtitle">Dit is de derde subtitel.</span>
                <span slot="content">Dit is de derde stap content.</span>
            </vl-step-next>
        </vl-steps-next>
    `);x.storyName="vl-steps-next - simple timeline",x.args={simpleTimeline:!0};let h=(0,a._7)(o,()=>(0,n.qy)`
        <section class="vl-section-next" id="steps-side-navigation-example">
            <div class="vl-content-block-next">
                <div class="vl-grid-next vl-stacked-next-small">
                    <div
                        class="vl-column-next vl-column-next--8 vl-column-next--m-8 vl-column-next--s-12 vl-column-next--xs-12"
                    >
                        <vl-side-navigation-reference-next>
                            <vl-steps-next>
                                <vl-step-next id="vl-steps-vl-step-1">
                                    <span slot="icon">1</span>
                                    <span slot="title">
                                        <div>Stap 1: eerste actie</div>
                                    </span>
                                    <span slot="content">
                                        <div>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel
                                                pretium lectus quam id. Penatibus et magnis dis parturient montes
                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas
                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor
                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.
                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu
                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas
                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac
                                                felis donec. Elit pellentesque habitant morbi tristique senectus et
                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.
                                                Tortor consequat id porta nibh venenatis cras.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel
                                                pretium lectus quam id. Penatibus et magnis dis parturient montes
                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas
                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor
                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.
                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu
                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas
                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac
                                                felis donec. Elit pellentesque habitant morbi tristique senectus et
                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.
                                                Tortor consequat id porta nibh venenatis cras.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel
                                                pretium lectus quam id. Penatibus et magnis dis parturient montes
                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas
                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor
                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.
                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu
                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas
                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac
                                                felis donec. Elit pellentesque habitant morbi tristique senectus et
                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.
                                                Tortor consequat id porta nibh venenatis cras.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel
                                                pretium lectus quam id. Penatibus et magnis dis parturient montes
                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas
                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor
                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.
                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu
                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas
                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac
                                                felis donec. Elit pellentesque habitant morbi tristique senectus et
                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.
                                                Tortor consequat id porta nibh venenatis cras.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel
                                                pretium lectus quam id. Penatibus et magnis dis parturient montes
                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas
                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor
                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.
                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu
                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas
                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac
                                                felis donec. Elit pellentesque habitant morbi tristique senectus et
                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.
                                                Tortor consequat id porta nibh venenatis cras.
                                            </p>
                                        </div>
                                    </span>
                                </vl-step-next>
                                <span id="vl-steps-vl-step-2"></span>
                                <vl-step-next>
                                    <span slot="icon">2</span>
                                    <span slot="title">
                                        <div>Stap 2: tweede actie</div>
                                    </span>
                                    <span slot="content">
                                        <div>
                                            <vl-title-next type="h4" underline id="vl-steps-vl-step-2-abstract"
                                                >Abstract</vl-title-next
                                            >
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel
                                                pretium lectus quam id. Penatibus et magnis dis parturient montes
                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas
                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor
                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.
                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu
                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas
                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac
                                                felis donec. Elit pellentesque habitant morbi tristique senectus et
                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.
                                                Tortor consequat id porta nibh venenatis cras.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel
                                                pretium lectus quam id. Penatibus et magnis dis parturient montes
                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas
                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor
                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.
                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu
                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas
                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac
                                                felis donec. Elit pellentesque habitant morbi tristique senectus et
                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.
                                                Tortor consequat id porta nibh venenatis cras.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel
                                                pretium lectus quam id. Penatibus et magnis dis parturient montes
                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas
                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor
                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.
                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu
                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas
                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac
                                                felis donec. Elit pellentesque habitant morbi tristique senectus et
                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.
                                                Tortor consequat id porta nibh venenatis cras.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel
                                                pretium lectus quam id. Penatibus et magnis dis parturient montes
                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas
                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor
                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.
                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu
                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas
                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac
                                                felis donec. Elit pellentesque habitant morbi tristique senectus et
                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.
                                                Tortor consequat id porta nibh venenatis cras.
                                            </p>
                                            <vl-title-next type="h4" id="vl-steps-vl-step-2-volledig"
                                                >Volledig</vl-title-next
                                            >
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel
                                                pretium lectus quam id. Penatibus et magnis dis parturient montes
                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas
                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor
                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.
                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu
                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas
                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac
                                                felis donec. Elit pellentesque habitant morbi tristique senectus et
                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.
                                                Tortor consequat id porta nibh venenatis cras.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel
                                                pretium lectus quam id. Penatibus et magnis dis parturient montes
                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas
                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor
                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.
                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu
                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas
                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac
                                                felis donec. Elit pellentesque habitant morbi tristique senectus et
                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.
                                                Tortor consequat id porta nibh venenatis cras.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel
                                                pretium lectus quam id. Penatibus et magnis dis parturient montes
                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas
                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor
                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.
                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu
                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas
                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac
                                                felis donec. Elit pellentesque habitant morbi tristique senectus et
                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.
                                                Tortor consequat id porta nibh venenatis cras.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel
                                                pretium lectus quam id. Penatibus et magnis dis parturient montes
                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas
                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor
                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.
                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu
                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas
                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac
                                                felis donec. Elit pellentesque habitant morbi tristique senectus et
                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.
                                                Tortor consequat id porta nibh venenatis cras.
                                            </p>
                                        </div>
                                    </span>
                                </vl-step-next>
                                <vl-step-next id="vl-steps-vl-step-3">
                                    <span slot="icon">3</span>
                                    <span slot="title">
                                        <div>Stap 3: derde actie</div>
                                    </span>
                                    <span slot="content">
                                        <div>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel
                                                pretium lectus quam id. Penatibus et magnis dis parturient montes
                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas
                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor
                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.
                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu
                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas
                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac
                                                felis donec. Elit pellentesque habitant morbi tristique senectus et
                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.
                                                Tortor consequat id porta nibh venenatis cras.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel
                                                pretium lectus quam id. Penatibus et magnis dis parturient montes
                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas
                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor
                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.
                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu
                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas
                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac
                                                felis donec. Elit pellentesque habitant morbi tristique senectus et
                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.
                                                Tortor consequat id porta nibh venenatis cras.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel
                                                pretium lectus quam id. Penatibus et magnis dis parturient montes
                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas
                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor
                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.
                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu
                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas
                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac
                                                felis donec. Elit pellentesque habitant morbi tristique senectus et
                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.
                                                Tortor consequat id porta nibh venenatis cras.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel
                                                pretium lectus quam id. Penatibus et magnis dis parturient montes
                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas
                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor
                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.
                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu
                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas
                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac
                                                felis donec. Elit pellentesque habitant morbi tristique senectus et
                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.
                                                Tortor consequat id porta nibh venenatis cras.
                                            </p>
                                        </div>
                                    </span>
                                </vl-step-next>
                            </vl-steps-next>
                        </vl-side-navigation-reference-next>
                    </div>
                    <div
                        class="vl-column-next vl-column-next--4 vl-column-next--m-4 vl-column-next--s-12 vl-column-next--xs-12"
                    >
                        <vl-side-navigation-next aria-label="inhoudsopgave">
                            <vl-side-navigation-h5-next>Op deze pagina</vl-side-navigation-h5-next>
                            <vl-side-navigation-content-next>
                                <vl-side-navigation-group-next>
                                    <vl-side-navigation-item-next>
                                        <a href="#vl-steps-vl-step-1"> step 1 </a>
                                    </vl-side-navigation-item-next>
                                    <vl-side-navigation-item-next parent="step-2">
                                        <vl-side-navigation-toggle-next href="#vl-steps-vl-step-2" child="step-2">
                                            step 2
                                        </vl-side-navigation-toggle-next>
                                        <ul>
                                            <vl-side-navigation-item-next>
                                                <a href="#vl-steps-vl-step-2-abstract" parent="step-2">Abstract</a>
                                            </vl-side-navigation-item-next>
                                            <vl-side-navigation-item-next>
                                                <a href="#vl-steps-vl-step-2-volledig" parent="step-2">Volledig</a>
                                            </vl-side-navigation-item-next>
                                        </ul>
                                    </vl-side-navigation-item-next>
                                    <vl-side-navigation-item-next>
                                        <a href="#vl-steps-vl-step-3"> step 3 </a>
                                    </vl-side-navigation-item-next>
                                </vl-side-navigation-group-next>
                            </vl-side-navigation-content-next>
                        </vl-side-navigation-next>
                    </div>
                </div>
            </div>
        </section>
    `);h.storyName="vl-steps-next - side navigation",v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:'story(stepsArgs, ({\n  line,\n  timeline,\n  lastStepNoLine\n}) => html`\n        <vl-steps-next ?data-vl-line=${line} ?data-vl-timeline=${timeline} ?data-vl-last-step-no-line=${lastStepNoLine}>\n            <vl-step-next>\n                <span slot="icon">1</span>\n                <span slot="title">Stap 1: eerste actie</span>\n                <span slot="subtitle">Dit is de eerste subtitel.</span>\n                <span slot="content">Dit is de eerste stap content.</span>\n            </vl-step-next>\n            <vl-step-next>\n                <span slot="icon">2</span>\n                <span slot="title">Stap 2: tweede actie</span>\n                <span slot="subtitle">Dit is de tweede subtitel.</span>\n                <span slot="content">Dit is de tweede stap content.</span>\n            </vl-step-next>\n            <vl-step-next>\n                <span slot="icon">3</span>\n                <span slot="title">Stap 3: derde actie</span>\n                <span slot="subtitle">Dit is de derde subtitel.</span>\n                <span slot="content">Dit is de derde stap content.</span>\n            </vl-step-next>\n        </vl-steps-next>\n    `)',...v.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:'story(stepsArgs, ({\n  line,\n  timeline,\n  lastStepNoLine\n}) => html`\n        <vl-steps-next ?data-vl-line=${line} ?data-vl-timeline=${timeline} ?data-vl-last-step-no-line=${lastStepNoLine}>\n            <vl-step-next>\n                <vl-icon-next slot="icon" icon="search"></vl-icon-next>\n                <span slot="title">Stap 1: eerste actie</span>\n                <span slot="subtitle">Dit is de eerste subtitel.</span>\n                <span slot="content">Dit is de eerste stap content.</span>\n            </vl-step-next>\n            <vl-step-next>\n                <vl-icon-next slot="icon" icon="calendar"></vl-icon-next>\n                <span slot="title">Stap 2: tweede actie</span>\n                <span slot="subtitle">Dit is de tweede subtitel.</span>\n                <span slot="content">Dit is de tweede stap content.</span>\n            </vl-step-next>\n            <vl-step-next>\n                <vl-icon-next slot="icon" icon="clock"></vl-icon-next>\n                <span slot="title">Stap 3: derde actie</span>\n                <span slot="subtitle">Dit is de derde subtitel.</span>\n                <span slot="content">Dit is de derde stap content.</span>\n            </vl-step-next>\n        </vl-steps-next>\n    `)',...g.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:'story(stepsArgs, ({\n  line,\n  lastStepNoLine\n}) => html`\n        <vl-steps-next ?data-vl-line=${line} ?data-vl-last-step-no-line=${lastStepNoLine}>\n            <vl-step-next>\n                <span slot="icon">1</span>\n                <span slot="title">Stap 1: eerste actie</span>\n                <span slot="subtitle">Dit is de eerste subtitel.</span>\n                <span slot="content">Dit is de eerste stap content.</span>\n            </vl-step-next>\n            <vl-step-next>\n                <span slot="icon">2</span>\n                <span slot="title">Stap 2: tweede actie</span>\n                <span slot="subtitle">Dit is de tweede subtitel.</span>\n                <span slot="content">Dit is de tweede stap content.</span>\n            </vl-step-next>\n            <vl-step-next>\n                <span slot="icon">3</span>\n                <span slot="title">Stap 3: derde actie</span>\n                <span slot="subtitle">Dit is de derde subtitel.</span>\n                <span slot="content">Dit is de derde stap content.</span>\n            </vl-step-next>\n        </vl-steps-next>\n    `)',...q.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:'story(stepsArgs, ({\n  timeline,\n  lastStepNoLine\n}) => html`\n        <vl-steps-next ?data-vl-timeline=${timeline} ?data-vl-last-step-no-line=${lastStepNoLine}>\n            <vl-step-next>\n                <span slot="icon">1</span>\n                <span slot="sub-icon">maa</span>\n                <span slot="title">Stap 1: eerste actie</span>\n                <span slot="title-annotation">12u00 - 14u00</span>\n                <span slot="subtitle">Dit is de eerste subtitel.</span>\n                <span slot="content">Dit is de eerste stap content.</span>\n            </vl-step-next>\n            <vl-duration-step-next>Vrije tijd: 1 uur</vl-duration-step-next>\n            <vl-step-next>\n                <span slot="icon">1</span>\n                <span slot="sub-icon">maa</span>\n                <span slot="title">Stap 2: tweede actie</span>\n                <span slot="title-annotation">15u00 - 17u00</span>\n                <span slot="subtitle">Dit is de tweede subtitel.</span>\n                <span slot="content">Dit is de tweede stap content.</span>\n            </vl-step-next>\n            <vl-duration-step-next>Vrije tijd: 2 uur</vl-duration-step-next>\n            <vl-step-next>\n                <span slot="icon">1</span>\n                <span slot="sub-icon">maa</span>\n                <span slot="title">Stap 3: derde actie</span>\n                <span slot="title-annotation">19u00 - 21u00</span>\n                <span slot="subtitle">Dit is de derde subtitel.</span>\n                <span slot="content">Dit is de derde stap content.</span>\n            </vl-step-next>\n        </vl-steps-next>\n    `)',...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:'story(stepsArgs, ({\n  simpleTimeline,\n  lastStepNoLine\n}) => html`\n        <vl-steps-next ?data-vl-simple-timeline=${simpleTimeline} ?data-vl-last-step-no-line=${lastStepNoLine}>\n            <vl-step-next>\n                <span slot="title">Stap 1: eerste actie</span>\n                <span slot="subtitle">Dit is de eerste subtitel.</span>\n                <span slot="content">Dit is de eerste stap content.</span>\n            </vl-step-next>\n            <vl-step-next>\n                <span slot="title">Stap 2: tweede actie</span>\n                <span slot="subtitle">Dit is de tweede subtitel.</span>\n                <span slot="content">Dit is de tweede stap content.</span>\n            </vl-step-next>\n            <vl-step-next>\n                <span slot="title">Stap 3: derde actie</span>\n                <span slot="subtitle">Dit is de derde subtitel.</span>\n                <span slot="content">Dit is de derde stap content.</span>\n            </vl-step-next>\n        </vl-steps-next>\n    `)',...x.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:'story(stepsArgs, () => html`\n        <section class="vl-section-next" id="steps-side-navigation-example">\n            <div class="vl-content-block-next">\n                <div class="vl-grid-next vl-stacked-next-small">\n                    <div\n                        class="vl-column-next vl-column-next--8 vl-column-next--m-8 vl-column-next--s-12 vl-column-next--xs-12"\n                    >\n                        <vl-side-navigation-reference-next>\n                            <vl-steps-next>\n                                <vl-step-next id="vl-steps-vl-step-1">\n                                    <span slot="icon">1</span>\n                                    <span slot="title">\n                                        <div>Stap 1: eerste actie</div>\n                                    </span>\n                                    <span slot="content">\n                                        <div>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                        </div>\n                                    </span>\n                                </vl-step-next>\n                                <span id="vl-steps-vl-step-2"></span>\n                                <vl-step-next>\n                                    <span slot="icon">2</span>\n                                    <span slot="title">\n                                        <div>Stap 2: tweede actie</div>\n                                    </span>\n                                    <span slot="content">\n                                        <div>\n                                            <vl-title-next type="h4" underline id="vl-steps-vl-step-2-abstract"\n                                                >Abstract</vl-title-next\n                                            >\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <vl-title-next type="h4" id="vl-steps-vl-step-2-volledig"\n                                                >Volledig</vl-title-next\n                                            >\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                        </div>\n                                    </span>\n                                </vl-step-next>\n                                <vl-step-next id="vl-steps-vl-step-3">\n                                    <span slot="icon">3</span>\n                                    <span slot="title">\n                                        <div>Stap 3: derde actie</div>\n                                    </span>\n                                    <span slot="content">\n                                        <div>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                        </div>\n                                    </span>\n                                </vl-step-next>\n                            </vl-steps-next>\n                        </vl-side-navigation-reference-next>\n                    </div>\n                    <div\n                        class="vl-column-next vl-column-next--4 vl-column-next--m-4 vl-column-next--s-12 vl-column-next--xs-12"\n                    >\n                        <vl-side-navigation-next aria-label="inhoudsopgave">\n                            <vl-side-navigation-h5-next>Op deze pagina</vl-side-navigation-h5-next>\n                            <vl-side-navigation-content-next>\n                                <vl-side-navigation-group-next>\n                                    <vl-side-navigation-item-next>\n                                        <a href="#vl-steps-vl-step-1"> step 1 </a>\n                                    </vl-side-navigation-item-next>\n                                    <vl-side-navigation-item-next parent="step-2">\n                                        <vl-side-navigation-toggle-next href="#vl-steps-vl-step-2" child="step-2">\n                                            step 2\n                                        </vl-side-navigation-toggle-next>\n                                        <ul>\n                                            <vl-side-navigation-item-next>\n                                                <a href="#vl-steps-vl-step-2-abstract" parent="step-2">Abstract</a>\n                                            </vl-side-navigation-item-next>\n                                            <vl-side-navigation-item-next>\n                                                <a href="#vl-steps-vl-step-2-volledig" parent="step-2">Volledig</a>\n                                            </vl-side-navigation-item-next>\n                                        </ul>\n                                    </vl-side-navigation-item-next>\n                                    <vl-side-navigation-item-next>\n                                        <a href="#vl-steps-vl-step-3"> step 3 </a>\n                                    </vl-side-navigation-item-next>\n                                </vl-side-navigation-group-next>\n                            </vl-side-navigation-content-next>\n                        </vl-side-navigation-next>\n                    </div>\n                </div>\n            </div>\n        </section>\n    `)',...h.parameters?.docs?.source}}};let S=["StepsDefault","StepsIcons","StepsLine","StepsTimeline","StepsSimpleTimeline","StepsSideNavigation"]}}]);