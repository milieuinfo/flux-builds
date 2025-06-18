"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[425,6794],{"../../libs/components/src/block/steps/stories/vl-step.stories.ts":(e,t,s)=>{s.r(t),s.d(t,{StepsStates:()=>u,StepsToggleable:()=>r,__namedExportsOrder:()=>p,default:()=>o});var a=s("../../resources/utils-storybook/index.ts"),i=s("../../node_modules/lit-html/lit-html.js");s("../../libs/components/src/block/steps/vl-steps.component.ts");let n={...a.D8,toggleable:!1,type:null},l={...a.RN,toggleable:{name:"toggleable",description:"Beeldt een stap af als een accordion.",control:!1,table:{type:{summary:a.QE.BOOLEAN},category:a.R6.ATTRIBUTES,defaultValue:{summary:n.toggleable}}},type:{name:"type",description:"Beeldt een stap af in een bepaalde staat.",control:!1,table:{type:{summary:["highlighted","disabled","success","warning","error"]},category:a.R6.ATTRIBUTES,defaultValue:{summary:n.type}}}},o={id:"components-block-steps-step",title:"Components - Block/steps/step",tags:["autodocs"],args:n,argTypes:l,parameters:{controls:{hideNoControlsWarning:!0}}},r=(0,a._7)(n,()=>(0,i.qy)`
        <vl-steps>
            <vl-step toggleable>
                <span slot="icon">1</span>
                <span slot="title">Stap 1: eerste actie</span>
                <span slot="subtitle">Dit is de eerste subtitel.</span>
                <span slot="content">Dit is de eerste stap content.</span>
            </vl-step>
            <vl-step toggleable>
                <span slot="icon">2</span>
                <span slot="title">Stap 2: tweede actie</span>
                <span slot="subtitle">Dit is de tweede subtitel.</span>
                <span slot="content">Dit is de tweede stap content.</span>
            </vl-step>
            <vl-step toggleable>
                <span slot="icon">3</span>
                <span slot="title">Stap 3: derde actie</span>
                <span slot="subtitle">Dit is de derde subtitel.</span>
                <span slot="content">Dit is de derde stap content.</span>
            </vl-step>
        </vl-steps>
    `);r.storyName="vl-step - toggleable";let u=(0,a._7)(n,()=>(0,i.qy)`
        <vl-steps>
            <vl-step>
                <span slot="icon">1</span>
                <span slot="title">Stap 1: eerste actie</span>
                <span slot="subtitle">Dit is de eerste subtitel.</span>
                <span slot="content">Dit is de eerste stap content.</span>
            </vl-step>
            <vl-step type="highlighted">
                <span slot="icon">2</span>
                <span slot="title">Stap 2: tweede actie</span>
                <span slot="subtitle">Dit is de tweede subtitel.</span>
                <span slot="content">Dit is de tweede stap content.</span>
            </vl-step>
            <vl-step type="disabled">
                <span slot="icon">3</span>
                <span slot="title">Stap 3: derde actie</span>
                <span slot="subtitle">Dit is de derde subtitel.</span>
                <span slot="content">Deze stap is geannuleerd.</span>
            </vl-step>
            <vl-step type="success">
                <span slot="icon">4</span>
                <span slot="title">Stap 4: vierde actie</span>
                <span slot="subtitle">Dit is de vierde subtitel.</span>
                <span slot="content">Dit is de vierde stap content.</span>
            </vl-step>
            <vl-step type="warning">
                <span slot="icon">5</span>
                <span slot="title">Stap 5: vijfde actie</span>
                <span slot="subtitle">Dit is de vijfde subtitel.</span>
                <span slot="content">Dit is de vijfde stap content.</span>
            </vl-step>
            <vl-step type="error">
                <span slot="icon">6</span>
                <span slot="title">Stap 6: zesde actie</span>
                <span slot="subtitle">Dit is de zesde subtitel.</span>
                <span slot="content">Dit is de zesde stap content.</span>
            </vl-step>
        </vl-steps>
    `);u.storyName="vl-step - states",r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:'story(stepArgs, () => html`\n        <vl-steps>\n            <vl-step toggleable>\n                <span slot="icon">1</span>\n                <span slot="title">Stap 1: eerste actie</span>\n                <span slot="subtitle">Dit is de eerste subtitel.</span>\n                <span slot="content">Dit is de eerste stap content.</span>\n            </vl-step>\n            <vl-step toggleable>\n                <span slot="icon">2</span>\n                <span slot="title">Stap 2: tweede actie</span>\n                <span slot="subtitle">Dit is de tweede subtitel.</span>\n                <span slot="content">Dit is de tweede stap content.</span>\n            </vl-step>\n            <vl-step toggleable>\n                <span slot="icon">3</span>\n                <span slot="title">Stap 3: derde actie</span>\n                <span slot="subtitle">Dit is de derde subtitel.</span>\n                <span slot="content">Dit is de derde stap content.</span>\n            </vl-step>\n        </vl-steps>\n    `)',...r.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:'story(stepArgs, () => html`\n        <vl-steps>\n            <vl-step>\n                <span slot="icon">1</span>\n                <span slot="title">Stap 1: eerste actie</span>\n                <span slot="subtitle">Dit is de eerste subtitel.</span>\n                <span slot="content">Dit is de eerste stap content.</span>\n            </vl-step>\n            <vl-step type="highlighted">\n                <span slot="icon">2</span>\n                <span slot="title">Stap 2: tweede actie</span>\n                <span slot="subtitle">Dit is de tweede subtitel.</span>\n                <span slot="content">Dit is de tweede stap content.</span>\n            </vl-step>\n            <vl-step type="disabled">\n                <span slot="icon">3</span>\n                <span slot="title">Stap 3: derde actie</span>\n                <span slot="subtitle">Dit is de derde subtitel.</span>\n                <span slot="content">Deze stap is geannuleerd.</span>\n            </vl-step>\n            <vl-step type="success">\n                <span slot="icon">4</span>\n                <span slot="title">Stap 4: vierde actie</span>\n                <span slot="subtitle">Dit is de vierde subtitel.</span>\n                <span slot="content">Dit is de vierde stap content.</span>\n            </vl-step>\n            <vl-step type="warning">\n                <span slot="icon">5</span>\n                <span slot="title">Stap 5: vijfde actie</span>\n                <span slot="subtitle">Dit is de vijfde subtitel.</span>\n                <span slot="content">Dit is de vijfde stap content.</span>\n            </vl-step>\n            <vl-step type="error">\n                <span slot="icon">6</span>\n                <span slot="title">Stap 6: zesde actie</span>\n                <span slot="subtitle">Dit is de zesde subtitel.</span>\n                <span slot="content">Dit is de zesde stap content.</span>\n            </vl-step>\n        </vl-steps>\n    `)',...u.parameters?.docs?.source}}};let p=["StepsToggleable","StepsStates"]},"../../libs/components/src/block/steps/stories/vl-steps.stories.ts":(e,t,s)=>{s.r(t),s.d(t,{StepsDefault:()=>v,StepsIcons:()=>g,StepsLine:()=>b,StepsSideNavigation:()=>S,StepsSimpleTimeline:()=>h,StepsTimeline:()=>q,__namedExportsOrder:()=>D,default:()=>m});var a=s("../../resources/utils-storybook/index.ts"),i=s("../../libs/common/src/index.ts"),n=s("../../node_modules/lit-html/lit-html.js");s("../../libs/components/src/block/steps/vl-steps.component.ts");var l=s("../../libs/components/src/block/side-navigation/index.ts");let o={...a.D8,line:!1,timeline:!1,simpleTimeline:!1,lastStepNoLine:!1},r={...a.RN,line:{name:"line",description:"Beeldt een verticale lijn af tussen de stappen.",table:{type:{summary:a.QE.BOOLEAN},category:a.R6.ATTRIBUTES,defaultValue:{summary:o.line}}},timeline:{name:"timeline",description:"Beeldt een verticale tijdlijn af tussen de stappen.",table:{type:{summary:a.QE.BOOLEAN},category:a.R6.ATTRIBUTES,defaultValue:{summary:o.timeline}}},simpleTimeline:{name:"simple-timeline",description:"Beeldt een simpele verticale tijdlijn af tussen de stappen.",table:{type:{summary:a.QE.BOOLEAN},category:a.R6.ATTRIBUTES,defaultValue:{summary:o.simpleTimeline}}},lastStepNoLine:{name:"last-step-no-line",description:"Laat de verticale lijn na de laatste stap weg bij gebruik van de line, timeline of simple-timeline attributen.",table:{type:{summary:a.QE.BOOLEAN},category:a.R6.ATTRIBUTES,defaultValue:{summary:o.lastStepNoLine}}}};s("../../node_modules/react/index.js");var u=s("../../node_modules/react/jsx-runtime.js"),p=s("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),c=s("../../node_modules/@storybook/blocks/dist/index.mjs");function d(e){let t=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",h3:"h3"},(0,p.RP)(),e.components),{FluxMetaData:s}=t;return s||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("FluxMetaData",!0),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(t.h1,{id:"steps",children:"Steps"}),"\n",(0,u.jsx)(s,{id:"components-block-steps-steps"}),"\n",(0,u.jsxs)(t.p,{children:["Gebruik de ",(0,u.jsx)(t.code,{children:"steps"})," component om een verticale lijst van stappen af te beelden om de gebruiker door een procedure te begeleiden.",(0,u.jsx)("br",{})]}),"\n",(0,u.jsxs)(t.p,{children:["Deze component is de nieuwe versie van de ",(0,u.jsx)(t.a,{href:"/docs/components-block-steps--documentatie",children:"vl-steps"})," component, we raden aan deze versie te gebruiken."]}),"\n",(0,u.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:"language-js",children:"import { VlStepsComponent } from '@domg-wc/components/block';\n"})}),"\n",(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:"language-html",children:"<vl-steps></vl-steps>\n"})}),"\n",(0,u.jsx)(c.Hl,{of:v}),"\n",(0,u.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,u.jsx)(c.ov,{of:v}),"\n",(0,u.jsx)(t.h2,{id:"varianten",children:"Varianten"}),"\n",(0,u.jsx)(t.h3,{id:"iconen",children:"Iconen"}),"\n",(0,u.jsx)(c.Hl,{of:g}),"\n",(0,u.jsx)(t.h3,{id:"toestanden",children:"Toestanden"}),"\n",(0,u.jsx)(t.p,{children:'Voeg altijd een tekst toe als een stap disabled is zodat de disabled toestand niet enkel met de grijze kleur\novergebracht wordt, bv. "geannuleerd".'}),"\n",(0,u.jsxs)(t.p,{children:["Zie de 'states' story onder ",(0,u.jsx)(t.a,{href:"/docs/components-block-steps-step--documentatie",children:"vl-step"})," voor een voorbeeld."]}),"\n",(0,u.jsx)(t.h3,{id:"accordions",children:"Accordions"}),"\n",(0,u.jsxs)(t.p,{children:["Zie de 'toggleable' story onder ",(0,u.jsx)(t.a,{href:"/docs/components-block-steps-step--documentatie",children:"vl-step"})," voor een voorbeeld."]}),"\n",(0,u.jsx)(t.h3,{id:"lijn",children:"Lijn"}),"\n",(0,u.jsx)(c.Hl,{of:b}),"\n",(0,u.jsx)(t.h3,{id:"tijdlijn",children:"Tijdlijn"}),"\n",(0,u.jsx)(c.Hl,{of:q}),"\n",(0,u.jsx)(t.h3,{id:"simpele-tijdlijn",children:"Simpele tijdlijn"}),"\n",(0,u.jsxs)(t.p,{children:["Gebruik het ",(0,u.jsx)(t.code,{children:"icon slot"})," of ",(0,u.jsx)(t.code,{children:"sub-icon slot"})," niet in combinatie met de simpele tijdlijn."]}),"\n",(0,u.jsx)(c.Hl,{of:h}),"\n",(0,u.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,u.jsx)(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,u.jsx)(t.p,{children:(0,u.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-steps",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Steps"})}),"\n",(0,u.jsx)(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,u.jsx)(t.p,{children:(0,u.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/legacy-vl-steps--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Steps"})}),"\n",(0,u.jsx)(t.p,{children:(0,u.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlSteps.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Steps"})}),"\n",(0,u.jsx)(t.p,{children:(0,u.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-steps.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - Steps"})})]})}s("../../libs/components/src/block/steps/stories/vl-step.stories.ts"),(0,i.gy)([l.N8]);let m={id:"components-block-steps-steps",title:"Components - Block/steps/steps",tags:["autodocs"],args:o,argTypes:r,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,p.RP)(),e.components);return t?(0,u.jsx)(t,Object.assign({},e,{children:(0,u.jsx)(d,e)})):d(e)}}}},v=(0,a._7)(o,({line:e,timeline:t,lastStepNoLine:s})=>(0,n.qy)`
        <vl-steps ?line=${e} ?timeline=${t} ?last-step-no-line=${s}>
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
    `);v.storyName="vl-steps - default";let g=(0,a._7)(o,({line:e,timeline:t,lastStepNoLine:s})=>(0,n.qy)`
        <vl-steps ?line=${e} ?timeline=${t} ?last-step-no-line=${s}>
            <vl-step>
                <vl-icon slot="icon" icon="search"></vl-icon>
                <span slot="title">Stap 1: eerste actie</span>
                <span slot="subtitle">Dit is de eerste subtitel.</span>
                <span slot="content">Dit is de eerste stap content.</span>
            </vl-step>
            <vl-step>
                <vl-icon slot="icon" icon="calendar"></vl-icon>
                <span slot="title">Stap 2: tweede actie</span>
                <span slot="subtitle">Dit is de tweede subtitel.</span>
                <span slot="content">Dit is de tweede stap content.</span>
            </vl-step>
            <vl-step>
                <vl-icon slot="icon" icon="clock"></vl-icon>
                <span slot="title">Stap 3: derde actie</span>
                <span slot="subtitle">Dit is de derde subtitel.</span>
                <span slot="content">Dit is de derde stap content.</span>
            </vl-step>
        </vl-steps>
    `);g.storyName="vl-steps - icons";let b=(0,a._7)(o,({line:e,lastStepNoLine:t})=>(0,n.qy)`
        <vl-steps ?line=${e} ?last-step-no-line=${t}>
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
    `);b.storyName="vl-steps - line",b.args={line:!0};let q=(0,a._7)(o,({timeline:e,lastStepNoLine:t})=>(0,n.qy)`
        <vl-steps ?timeline=${e} ?last-step-no-line=${t}>
            <vl-step>
                <span slot="icon">1</span>
                <span slot="sub-icon">maa</span>
                <span slot="title">Stap 1: eerste actie</span>
                <span slot="title-annotation">12u00 - 14u00</span>
                <span slot="subtitle">Dit is de eerste subtitel.</span>
                <span slot="content">Dit is de eerste stap content.</span>
            </vl-step>
            <vl-duration-step>Vrije tijd: 1 uur</vl-duration-step>
            <vl-step>
                <span slot="icon">1</span>
                <span slot="sub-icon">maa</span>
                <span slot="title">Stap 2: tweede actie</span>
                <span slot="title-annotation">15u00 - 17u00</span>
                <span slot="subtitle">Dit is de tweede subtitel.</span>
                <span slot="content">Dit is de tweede stap content.</span>
            </vl-step>
            <vl-duration-step>Vrije tijd: 2 uur</vl-duration-step>
            <vl-step>
                <span slot="icon">1</span>
                <span slot="sub-icon">maa</span>
                <span slot="title">Stap 3: derde actie</span>
                <span slot="title-annotation">19u00 - 21u00</span>
                <span slot="subtitle">Dit is de derde subtitel.</span>
                <span slot="content">Dit is de derde stap content.</span>
            </vl-step>
        </vl-steps>
    `);q.storyName="vl-steps - timeline",q.args={timeline:!0};let h=(0,a._7)(o,({simpleTimeline:e,lastStepNoLine:t})=>(0,n.qy)`
        <vl-steps ?simple-timeline=${e} ?last-step-no-line=${t}>
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
    `);h.storyName="vl-steps - simple timeline",h.args={simpleTimeline:!0};let S=(0,a._7)(o,()=>(0,n.qy)`
        <section class="vl-section" id="steps-side-navigation-example">
            <div class="vl-content-block">
                <div class="vl-grid vl-stacked-small">
                    <div class="vl-column vl-column--8 vl-column--m-8 vl-column--s-8 vl-column--xs-12">
                        <vl-side-navigation-reference>
                            <vl-steps>
                                <vl-step>
                                    <span slot="icon">1</span>
                                    <span slot="title">
                                        <div id="vl-steps-vl-step-1">Stap 1: eerste actie</div>
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
                                </vl-step>
                                <vl-step>
                                    <span slot="icon">2</span>
                                    <span slot="title">
                                        <div id="vl-steps-vl-step-2">Stap 2: tweede actie</div>
                                    </span>
                                    <span slot="content">
                                        <div>
                                            <vl-title type="h4" underline id="vl-steps-vl-step-2-abstract"
                                                >Abstract</vl-title
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
                                            <vl-title type="h4" id="vl-steps-vl-step-2-volledig">Volledig</vl-title>
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
                                </vl-step>
                                <vl-step>
                                    <span slot="icon">3</span>
                                    <span slot="title">
                                        <div id="vl-steps-vl-step-3">Stap 3: derde actie</div>
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
                                </vl-step>
                            </vl-steps>
                        </vl-side-navigation-reference>
                    </div>
                    <div class="vl-column vl-column--3 vl-column--m-3 vl-column--s-3 vl-column--xs-0">
                        <vl-side-navigation aria-label="inhoudsopgave">
                            <vl-side-navigation-h5>Op deze pagina</vl-side-navigation-h5>
                            <vl-side-navigation-content>
                                <vl-side-navigation-group>
                                    <vl-side-navigation-item>
                                        <vl-side-navigation-toggle href="#vl-steps-vl-step-1">
                                            step 1
                                        </vl-side-navigation-toggle>
                                    </vl-side-navigation-item>
                                    <vl-side-navigation-item parent="step-2">
                                        <vl-side-navigation-toggle href="#vl-steps-vl-step-2" child="step-2">
                                            step 2
                                        </vl-side-navigation-toggle>
                                        <ul>
                                            <vl-side-navigation-item>
                                                <div>
                                                    <a href="#vl-steps-vl-step-2-abstract" parent="step-2">Abstract</a>
                                                </div>
                                            </vl-side-navigation-item>
                                            <vl-side-navigation-item>
                                                <div>
                                                    <a href="#vl-steps-vl-step-2-volledig" parent="step-2">Volledig</a>
                                                </div>
                                            </vl-side-navigation-item>
                                        </ul>
                                    </vl-side-navigation-item>
                                    <vl-side-navigation-item>
                                        <vl-side-navigation-toggle href="#vl-steps-vl-step-3">
                                            step 3
                                        </vl-side-navigation-toggle>
                                    </vl-side-navigation-item>
                                </vl-side-navigation-group>
                            </vl-side-navigation-content>
                        </vl-side-navigation>
                    </div>
                </div>
            </div>
        </section>
    `);S.storyName="vl-steps - side navigation",v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:'story(stepsArgs, ({\n  line,\n  timeline,\n  lastStepNoLine\n}) => html`\n        <vl-steps ?line=${line} ?timeline=${timeline} ?last-step-no-line=${lastStepNoLine}>\n            <vl-step>\n                <span slot="icon">1</span>\n                <span slot="title">Stap 1: eerste actie</span>\n                <span slot="subtitle">Dit is de eerste subtitel.</span>\n                <span slot="content">Dit is de eerste stap content.</span>\n            </vl-step>\n            <vl-step>\n                <span slot="icon">2</span>\n                <span slot="title">Stap 2: tweede actie</span>\n                <span slot="subtitle">Dit is de tweede subtitel.</span>\n                <span slot="content">Dit is de tweede stap content.</span>\n            </vl-step>\n            <vl-step>\n                <span slot="icon">3</span>\n                <span slot="title">Stap 3: derde actie</span>\n                <span slot="subtitle">Dit is de derde subtitel.</span>\n                <span slot="content">Dit is de derde stap content.</span>\n            </vl-step>\n        </vl-steps>\n    `)',...v.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:'story(stepsArgs, ({\n  line,\n  timeline,\n  lastStepNoLine\n}) => html`\n        <vl-steps ?line=${line} ?timeline=${timeline} ?last-step-no-line=${lastStepNoLine}>\n            <vl-step>\n                <vl-icon slot="icon" icon="search"></vl-icon>\n                <span slot="title">Stap 1: eerste actie</span>\n                <span slot="subtitle">Dit is de eerste subtitel.</span>\n                <span slot="content">Dit is de eerste stap content.</span>\n            </vl-step>\n            <vl-step>\n                <vl-icon slot="icon" icon="calendar"></vl-icon>\n                <span slot="title">Stap 2: tweede actie</span>\n                <span slot="subtitle">Dit is de tweede subtitel.</span>\n                <span slot="content">Dit is de tweede stap content.</span>\n            </vl-step>\n            <vl-step>\n                <vl-icon slot="icon" icon="clock"></vl-icon>\n                <span slot="title">Stap 3: derde actie</span>\n                <span slot="subtitle">Dit is de derde subtitel.</span>\n                <span slot="content">Dit is de derde stap content.</span>\n            </vl-step>\n        </vl-steps>\n    `)',...g.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:'story(stepsArgs, ({\n  line,\n  lastStepNoLine\n}) => html`\n        <vl-steps ?line=${line} ?last-step-no-line=${lastStepNoLine}>\n            <vl-step>\n                <span slot="icon">1</span>\n                <span slot="title">Stap 1: eerste actie</span>\n                <span slot="subtitle">Dit is de eerste subtitel.</span>\n                <span slot="content">Dit is de eerste stap content.</span>\n            </vl-step>\n            <vl-step>\n                <span slot="icon">2</span>\n                <span slot="title">Stap 2: tweede actie</span>\n                <span slot="subtitle">Dit is de tweede subtitel.</span>\n                <span slot="content">Dit is de tweede stap content.</span>\n            </vl-step>\n            <vl-step>\n                <span slot="icon">3</span>\n                <span slot="title">Stap 3: derde actie</span>\n                <span slot="subtitle">Dit is de derde subtitel.</span>\n                <span slot="content">Dit is de derde stap content.</span>\n            </vl-step>\n        </vl-steps>\n    `)',...b.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:'story(stepsArgs, ({\n  timeline,\n  lastStepNoLine\n}) => html`\n        <vl-steps ?timeline=${timeline} ?last-step-no-line=${lastStepNoLine}>\n            <vl-step>\n                <span slot="icon">1</span>\n                <span slot="sub-icon">maa</span>\n                <span slot="title">Stap 1: eerste actie</span>\n                <span slot="title-annotation">12u00 - 14u00</span>\n                <span slot="subtitle">Dit is de eerste subtitel.</span>\n                <span slot="content">Dit is de eerste stap content.</span>\n            </vl-step>\n            <vl-duration-step>Vrije tijd: 1 uur</vl-duration-step>\n            <vl-step>\n                <span slot="icon">1</span>\n                <span slot="sub-icon">maa</span>\n                <span slot="title">Stap 2: tweede actie</span>\n                <span slot="title-annotation">15u00 - 17u00</span>\n                <span slot="subtitle">Dit is de tweede subtitel.</span>\n                <span slot="content">Dit is de tweede stap content.</span>\n            </vl-step>\n            <vl-duration-step>Vrije tijd: 2 uur</vl-duration-step>\n            <vl-step>\n                <span slot="icon">1</span>\n                <span slot="sub-icon">maa</span>\n                <span slot="title">Stap 3: derde actie</span>\n                <span slot="title-annotation">19u00 - 21u00</span>\n                <span slot="subtitle">Dit is de derde subtitel.</span>\n                <span slot="content">Dit is de derde stap content.</span>\n            </vl-step>\n        </vl-steps>\n    `)',...q.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:'story(stepsArgs, ({\n  simpleTimeline,\n  lastStepNoLine\n}) => html`\n        <vl-steps ?simple-timeline=${simpleTimeline} ?last-step-no-line=${lastStepNoLine}>\n            <vl-step>\n                <span slot="title">Stap 1: eerste actie</span>\n                <span slot="subtitle">Dit is de eerste subtitel.</span>\n                <span slot="content">Dit is de eerste stap content.</span>\n            </vl-step>\n            <vl-step>\n                <span slot="title">Stap 2: tweede actie</span>\n                <span slot="subtitle">Dit is de tweede subtitel.</span>\n                <span slot="content">Dit is de tweede stap content.</span>\n            </vl-step>\n            <vl-step>\n                <span slot="title">Stap 3: derde actie</span>\n                <span slot="subtitle">Dit is de derde subtitel.</span>\n                <span slot="content">Dit is de derde stap content.</span>\n            </vl-step>\n        </vl-steps>\n    `)',...h.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:'story(stepsArgs, () => html`\n        <section class="vl-section" id="steps-side-navigation-example">\n            <div class="vl-content-block">\n                <div class="vl-grid vl-stacked-small">\n                    <div class="vl-column vl-column--8 vl-column--m-8 vl-column--s-8 vl-column--xs-12">\n                        <vl-side-navigation-reference>\n                            <vl-steps>\n                                <vl-step>\n                                    <span slot="icon">1</span>\n                                    <span slot="title">\n                                        <div id="vl-steps-vl-step-1">Stap 1: eerste actie</div>\n                                    </span>\n                                    <span slot="content">\n                                        <div>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                        </div>\n                                    </span>\n                                </vl-step>\n                                <vl-step>\n                                    <span slot="icon">2</span>\n                                    <span slot="title">\n                                        <div id="vl-steps-vl-step-2">Stap 2: tweede actie</div>\n                                    </span>\n                                    <span slot="content">\n                                        <div>\n                                            <vl-title type="h4" underline id="vl-steps-vl-step-2-abstract"\n                                                >Abstract</vl-title\n                                            >\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <vl-title type="h4" id="vl-steps-vl-step-2-volledig">Volledig</vl-title>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                        </div>\n                                    </span>\n                                </vl-step>\n                                <vl-step>\n                                    <span slot="icon">3</span>\n                                    <span slot="title">\n                                        <div id="vl-steps-vl-step-3">Stap 3: derde actie</div>\n                                    </span>\n                                    <span slot="content">\n                                        <div>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                        </div>\n                                    </span>\n                                </vl-step>\n                            </vl-steps>\n                        </vl-side-navigation-reference>\n                    </div>\n                    <div class="vl-column vl-column--3 vl-column--m-3 vl-column--s-3 vl-column--xs-0">\n                        <vl-side-navigation aria-label="inhoudsopgave">\n                            <vl-side-navigation-h5>Op deze pagina</vl-side-navigation-h5>\n                            <vl-side-navigation-content>\n                                <vl-side-navigation-group>\n                                    <vl-side-navigation-item>\n                                        <vl-side-navigation-toggle href="#vl-steps-vl-step-1">\n                                            step 1\n                                        </vl-side-navigation-toggle>\n                                    </vl-side-navigation-item>\n                                    <vl-side-navigation-item parent="step-2">\n                                        <vl-side-navigation-toggle href="#vl-steps-vl-step-2" child="step-2">\n                                            step 2\n                                        </vl-side-navigation-toggle>\n                                        <ul>\n                                            <vl-side-navigation-item>\n                                                <div>\n                                                    <a href="#vl-steps-vl-step-2-abstract" parent="step-2">Abstract</a>\n                                                </div>\n                                            </vl-side-navigation-item>\n                                            <vl-side-navigation-item>\n                                                <div>\n                                                    <a href="#vl-steps-vl-step-2-volledig" parent="step-2">Volledig</a>\n                                                </div>\n                                            </vl-side-navigation-item>\n                                        </ul>\n                                    </vl-side-navigation-item>\n                                    <vl-side-navigation-item>\n                                        <vl-side-navigation-toggle href="#vl-steps-vl-step-3">\n                                            step 3\n                                        </vl-side-navigation-toggle>\n                                    </vl-side-navigation-item>\n                                </vl-side-navigation-group>\n                            </vl-side-navigation-content>\n                        </vl-side-navigation>\n                    </div>\n                </div>\n            </div>\n        </section>\n    `)',...S.parameters?.docs?.source}}};let D=["StepsDefault","StepsIcons","StepsLine","StepsTimeline","StepsSimpleTimeline","StepsSideNavigation"]}}]);