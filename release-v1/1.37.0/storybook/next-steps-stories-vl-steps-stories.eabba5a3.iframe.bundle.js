(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[1499],{"../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(e,t,s)=>{"use strict";s.d(t,{BN:()=>i,RP:()=>l,gz:()=>n,xA:()=>r});var a=s("../../node_modules/react/index.js");let i=a.createContext({});function n(e){return function(t){let s=l(t.components);return a.createElement(e,{...t,allComponents:s})}}function l(e){let t=a.useContext(i);return a.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let o={};function r({components:e,children:t,disableParentContext:s}){let n;return n=s?"function"==typeof e?e({}):e||o:l(e),a.createElement(i.Provider,{value:n},t)}},"../../libs/components/src/next/steps/stories/vl-steps.stories.ts":(e,t,s)=>{"use strict";s.r(t),s.d(t,{StepsDefault:()=>d,StepsIcons:()=>m,StepsLine:()=>v,StepsSideNavigation:()=>b,StepsSimpleTimeline:()=>q,StepsTimeline:()=>g,__namedExportsOrder:()=>h,default:()=>p});var a=s("../../libs/common/storybook/src/index.ts"),i=s("../../node_modules/lit-html/lit-html.js");s("../../libs/components/src/next/steps/vl-steps.component.ts");let n={...a.D8,line:!1,timeline:!1,simpleTimeline:!1,lastStepNoLine:!1},l={...(0,a.RN)(),line:{name:"data-vl-line",description:"Beeldt een verticale lijn af tussen de stappen.",table:{type:{summary:a.QE.BOOLEAN},category:a.R6.ATTRIBUTES,defaultValue:{summary:n.line}}},timeline:{name:"data-vl-timeline",description:"Beeldt een verticale tijdlijn af tussen de stappen.",table:{type:{summary:a.QE.BOOLEAN},category:a.R6.ATTRIBUTES,defaultValue:{summary:n.timeline}}},simpleTimeline:{name:"data-vl-simple-timeline",description:"Beeldt een simpele verticale tijdlijn af tussen de stappen.",table:{type:{summary:a.QE.BOOLEAN},category:a.R6.ATTRIBUTES,defaultValue:{summary:n.simpleTimeline}}},lastStepNoLine:{name:"data-vl-last-step-no-line",description:"Laat de verticale lijn na de laatste stap weg bij gebruik van de line, timeline of simple-timeline attributen.",table:{type:{summary:a.QE.BOOLEAN},category:a.R6.ATTRIBUTES,defaultValue:{summary:n.lastStepNoLine}}}};s("../../node_modules/react/index.js");var o=s("../../node_modules/react/jsx-runtime.js"),r=s("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),u=s("../../node_modules/@storybook/blocks/dist/index.mjs");function c(e){let t=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",h3:"h3"},(0,r.RP)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"steps---next",children:"Steps - next"}),"\n",(0,o.jsxs)(t.p,{children:["Gebruik de ",(0,o.jsx)(t.code,{children:"steps-next"})," component om een verticale lijst van stappen af te beelden om de gebruiker door een procedure te begeleiden.",(0,o.jsx)("br",{})]}),"\n",(0,o.jsxs)(t.p,{children:["Deze component is de nieuwe versie van de ",(0,o.jsx)(t.a,{href:"/docs/components-steps--documentatie",children:"vl-steps"})," component, we raden aan deze versie te gebruiken."]}),"\n",(0,o.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"import { VlStepsComponent } from '@domg-wc/components/next/steps';\n"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-html",children:"<vl-steps-next></vl-steps-next>\n"})}),"\n",(0,o.jsx)(u.Hl,{of:d}),"\n",(0,o.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,o.jsx)(u.ov,{of:d}),"\n",(0,o.jsx)(t.h2,{id:"varianten",children:"Varianten"}),"\n",(0,o.jsx)(t.h3,{id:"iconen",children:"Iconen"}),"\n",(0,o.jsx)(u.Hl,{of:m}),"\n",(0,o.jsx)(t.h3,{id:"toestanden",children:"Toestanden"}),"\n",(0,o.jsx)(t.p,{children:'Voeg altijd een tekst toe als een stap disabled is zodat de disabled toestand niet enkel met de grijze kleur\novergebracht wordt, bv. "geannuleerd".'}),"\n",(0,o.jsxs)(t.p,{children:["Zie de 'states' story onder ",(0,o.jsx)(t.a,{href:"/docs/components-next-steps-step--documentatie",children:"vl-step-next"})," voor een voorbeeld."]}),"\n",(0,o.jsx)(t.h3,{id:"accordions",children:"Accordions"}),"\n",(0,o.jsxs)(t.p,{children:["Zie de 'toggleable' story onder ",(0,o.jsx)(t.a,{href:"/docs/components-next-steps-step--documentatie",children:"vl-step-next"})," voor een voorbeeld."]}),"\n",(0,o.jsx)(t.h3,{id:"lijn",children:"Lijn"}),"\n",(0,o.jsx)(u.Hl,{of:v}),"\n",(0,o.jsx)(t.h3,{id:"tijdlijn",children:"Tijdlijn"}),"\n",(0,o.jsx)(u.Hl,{of:g}),"\n",(0,o.jsx)(t.h3,{id:"simpele-tijdlijn",children:"Simpele tijdlijn"}),"\n",(0,o.jsxs)(t.p,{children:["Gebruik het ",(0,o.jsx)(t.code,{children:"icon slot"})," of ",(0,o.jsx)(t.code,{children:"sub-icon slot"})," niet in combinatie met de simpele tijdlijn."]}),"\n",(0,o.jsx)(u.Hl,{of:q}),"\n",(0,o.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,o.jsx)(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-steps",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Steps"})}),"\n",(0,o.jsx)(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/legacy-vl-steps--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Steps"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlSteps.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Steps"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-steps.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - Steps"})})]})}s("../../libs/components/src/next/steps/stories/vl-step.stories.ts");let p={title:"Components-next/steps/steps",tags:["autodocs"],args:n,argTypes:l,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,r.RP)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(c,e)})):c(e)}}}},d=(0,a._7)(n,({line:e,timeline:t,lastStepNoLine:s})=>(0,i.qy)`
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
    `);d.storyName="vl-steps-next - default";let m=(0,a._7)(n,({line:e,timeline:t,lastStepNoLine:s})=>(0,i.qy)`
        <vl-steps-next ?data-vl-line=${e} ?data-vl-timeline=${t} ?data-vl-last-step-no-line=${s}>
            <vl-step-next>
                <span slot="icon" is="vl-icon" data-vl-icon="search"></span>
                <span slot="title">Stap 1: eerste actie</span>
                <span slot="subtitle">Dit is de eerste subtitel.</span>
                <span slot="content">Dit is de eerste stap content.</span>
            </vl-step-next>
            <vl-step-next>
                <span slot="icon" is="vl-icon" data-vl-icon="calendar"></span>
                <span slot="title">Stap 2: tweede actie</span>
                <span slot="subtitle">Dit is de tweede subtitel.</span>
                <span slot="content">Dit is de tweede stap content.</span>
            </vl-step-next>
            <vl-step-next>
                <span slot="icon" is="vl-icon" data-vl-icon="clock"></span>
                <span slot="title">Stap 3: derde actie</span>
                <span slot="subtitle">Dit is de derde subtitel.</span>
                <span slot="content">Dit is de derde stap content.</span>
            </vl-step-next>
        </vl-steps-next>
    `);m.storyName="vl-steps-next - icons";let v=(0,a._7)(n,({line:e,lastStepNoLine:t})=>(0,i.qy)`
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
    `);v.storyName="vl-steps-next - line",v.args={line:!0};let g=(0,a._7)(n,({timeline:e,lastStepNoLine:t})=>(0,i.qy)`
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
    `);g.storyName="vl-steps-next - timeline",g.args={timeline:!0};let q=(0,a._7)(n,({simpleTimeline:e,lastStepNoLine:t})=>(0,i.qy)`
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
    `);q.storyName="vl-steps-next - simple timeline",q.args={simpleTimeline:!0};let b=(0,a._7)(n,()=>(0,i.qy)`
        <section is="vl-region">
            <div is="vl-layout">
                <div is="vl-grid" data-vl-is-stacked>
                    <div
                        is="vl-column"
                        data-vl-size="8"
                        data-vl-medium-size="8"
                        data-vl-small-size="8"
                        data-vl-extra-small-size="12"
                    >
                        <div is="vl-side-navigation-reference">
                            <vl-steps-next>
                                <vl-step-next>
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
                                </vl-step-next>
                                <vl-step-next>
                                    <span slot="icon">2</span>
                                    <span slot="title">
                                        <div id="vl-steps-vl-step-2">Stap 2: tweede actie</div>
                                    </span>
                                    <span slot="content">
                                        <div>
                                            <h4 is="vl-h4" id="vl-steps-vl-step-2-abstract">Abstract</h4>
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
                                            <h4 is="vl-h4" id="vl-steps-vl-step-2-volledig">Volledig</h4>
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
                                <vl-step-next>
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
                                </vl-step-next>
                            </vl-steps-next>
                        </div>
                    </div>
                    <div
                        is="vl-column"
                        data-vl-size="3"
                        data-vl-medium-size="3"
                        data-vl-small-size="3"
                        data-vl-extra-small-size="0"
                    >
                        <nav is="vl-side-navigation" aria-label="inhoudsopgave">
                            <h5 is="vl-side-navigation-h5">Op deze pagina</h5>
                            <div is="vl-side-navigation-content">
                                <ul is="vl-side-navigation-group">
                                    <li is="vl-side-navigation-item">
                                        <a is="vl-side-navigation-toggle" href="#vl-steps-vl-step-1">
                                            step 1
                                            <i class="vl-vi vl-vi-arrow-right-fat"></i>
                                        </a>
                                    </li>
                                    <li is="vl-side-navigation-item" data-vl-parent="step-2">
                                        <a
                                            is="vl-side-navigation-toggle"
                                            href="#vl-steps-vl-step-2"
                                            data-vl-child="step-2"
                                        >
                                            step 2
                                            <i class="vl-vi vl-vi-arrow-right-fat"></i>
                                        </a>
                                        <ul>
                                            <li is="vl-side-navigation-item">
                                                <div>
                                                    <a href="#vl-steps-vl-step-2-abstract" data-vl-parent="step-2"
                                                        >Abstract</a
                                                    >
                                                </div>
                                            </li>
                                            <li is="vl-side-navigation-item">
                                                <div>
                                                    <a href="#vl-steps-vl-step-2-volledig" data-vl-parent="step-2"
                                                        >Volledig</a
                                                    >
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li is="vl-side-navigation-item">
                                        <a is="vl-side-navigation-toggle" href="#vl-steps-vl-step-3">
                                            step 3
                                            <i class="vl-vi vl-vi-arrow-right-fat"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    `);b.storyName="vl-steps-next - side navigation",d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:'story(stepsArgs, ({\n  line,\n  timeline,\n  lastStepNoLine\n}) => html`\n        <vl-steps-next ?data-vl-line=${line} ?data-vl-timeline=${timeline} ?data-vl-last-step-no-line=${lastStepNoLine}>\n            <vl-step-next>\n                <span slot="icon">1</span>\n                <span slot="title">Stap 1: eerste actie</span>\n                <span slot="subtitle">Dit is de eerste subtitel.</span>\n                <span slot="content">Dit is de eerste stap content.</span>\n            </vl-step-next>\n            <vl-step-next>\n                <span slot="icon">2</span>\n                <span slot="title">Stap 2: tweede actie</span>\n                <span slot="subtitle">Dit is de tweede subtitel.</span>\n                <span slot="content">Dit is de tweede stap content.</span>\n            </vl-step-next>\n            <vl-step-next>\n                <span slot="icon">3</span>\n                <span slot="title">Stap 3: derde actie</span>\n                <span slot="subtitle">Dit is de derde subtitel.</span>\n                <span slot="content">Dit is de derde stap content.</span>\n            </vl-step-next>\n        </vl-steps-next>\n    `)',...d.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:'story(stepsArgs, ({\n  line,\n  timeline,\n  lastStepNoLine\n}) => html`\n        <vl-steps-next ?data-vl-line=${line} ?data-vl-timeline=${timeline} ?data-vl-last-step-no-line=${lastStepNoLine}>\n            <vl-step-next>\n                <span slot="icon" is="vl-icon" data-vl-icon="search"></span>\n                <span slot="title">Stap 1: eerste actie</span>\n                <span slot="subtitle">Dit is de eerste subtitel.</span>\n                <span slot="content">Dit is de eerste stap content.</span>\n            </vl-step-next>\n            <vl-step-next>\n                <span slot="icon" is="vl-icon" data-vl-icon="calendar"></span>\n                <span slot="title">Stap 2: tweede actie</span>\n                <span slot="subtitle">Dit is de tweede subtitel.</span>\n                <span slot="content">Dit is de tweede stap content.</span>\n            </vl-step-next>\n            <vl-step-next>\n                <span slot="icon" is="vl-icon" data-vl-icon="clock"></span>\n                <span slot="title">Stap 3: derde actie</span>\n                <span slot="subtitle">Dit is de derde subtitel.</span>\n                <span slot="content">Dit is de derde stap content.</span>\n            </vl-step-next>\n        </vl-steps-next>\n    `)',...m.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:'story(stepsArgs, ({\n  line,\n  lastStepNoLine\n}) => html`\n        <vl-steps-next ?data-vl-line=${line} ?data-vl-last-step-no-line=${lastStepNoLine}>\n            <vl-step-next>\n                <span slot="icon">1</span>\n                <span slot="title">Stap 1: eerste actie</span>\n                <span slot="subtitle">Dit is de eerste subtitel.</span>\n                <span slot="content">Dit is de eerste stap content.</span>\n            </vl-step-next>\n            <vl-step-next>\n                <span slot="icon">2</span>\n                <span slot="title">Stap 2: tweede actie</span>\n                <span slot="subtitle">Dit is de tweede subtitel.</span>\n                <span slot="content">Dit is de tweede stap content.</span>\n            </vl-step-next>\n            <vl-step-next>\n                <span slot="icon">3</span>\n                <span slot="title">Stap 3: derde actie</span>\n                <span slot="subtitle">Dit is de derde subtitel.</span>\n                <span slot="content">Dit is de derde stap content.</span>\n            </vl-step-next>\n        </vl-steps-next>\n    `)',...v.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:'story(stepsArgs, ({\n  timeline,\n  lastStepNoLine\n}) => html`\n        <vl-steps-next ?data-vl-timeline=${timeline} ?data-vl-last-step-no-line=${lastStepNoLine}>\n            <vl-step-next>\n                <span slot="icon">1</span>\n                <span slot="sub-icon">maa</span>\n                <span slot="title">Stap 1: eerste actie</span>\n                <span slot="title-annotation">12u00 - 14u00</span>\n                <span slot="subtitle">Dit is de eerste subtitel.</span>\n                <span slot="content">Dit is de eerste stap content.</span>\n            </vl-step-next>\n            <vl-duration-step-next>Vrije tijd: 1 uur</vl-duration-step-next>\n            <vl-step-next>\n                <span slot="icon">1</span>\n                <span slot="sub-icon">maa</span>\n                <span slot="title">Stap 2: tweede actie</span>\n                <span slot="title-annotation">15u00 - 17u00</span>\n                <span slot="subtitle">Dit is de tweede subtitel.</span>\n                <span slot="content">Dit is de tweede stap content.</span>\n            </vl-step-next>\n            <vl-duration-step-next>Vrije tijd: 2 uur</vl-duration-step-next>\n            <vl-step-next>\n                <span slot="icon">1</span>\n                <span slot="sub-icon">maa</span>\n                <span slot="title">Stap 3: derde actie</span>\n                <span slot="title-annotation">19u00 - 21u00</span>\n                <span slot="subtitle">Dit is de derde subtitel.</span>\n                <span slot="content">Dit is de derde stap content.</span>\n            </vl-step-next>\n        </vl-steps-next>\n    `)',...g.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:'story(stepsArgs, ({\n  simpleTimeline,\n  lastStepNoLine\n}) => html`\n        <vl-steps-next ?data-vl-simple-timeline=${simpleTimeline} ?data-vl-last-step-no-line=${lastStepNoLine}>\n            <vl-step-next>\n                <span slot="title">Stap 1: eerste actie</span>\n                <span slot="subtitle">Dit is de eerste subtitel.</span>\n                <span slot="content">Dit is de eerste stap content.</span>\n            </vl-step-next>\n            <vl-step-next>\n                <span slot="title">Stap 2: tweede actie</span>\n                <span slot="subtitle">Dit is de tweede subtitel.</span>\n                <span slot="content">Dit is de tweede stap content.</span>\n            </vl-step-next>\n            <vl-step-next>\n                <span slot="title">Stap 3: derde actie</span>\n                <span slot="subtitle">Dit is de derde subtitel.</span>\n                <span slot="content">Dit is de derde stap content.</span>\n            </vl-step-next>\n        </vl-steps-next>\n    `)',...q.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:'story(stepsArgs, () => html`\n        <section is="vl-region">\n            <div is="vl-layout">\n                <div is="vl-grid" data-vl-is-stacked>\n                    <div\n                        is="vl-column"\n                        data-vl-size="8"\n                        data-vl-medium-size="8"\n                        data-vl-small-size="8"\n                        data-vl-extra-small-size="12"\n                    >\n                        <div is="vl-side-navigation-reference">\n                            <vl-steps-next>\n                                <vl-step-next>\n                                    <span slot="icon">1</span>\n                                    <span slot="title">\n                                        <div id="vl-steps-vl-step-1">Stap 1: eerste actie</div>\n                                    </span>\n                                    <span slot="content">\n                                        <div>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                        </div>\n                                    </span>\n                                </vl-step-next>\n                                <vl-step-next>\n                                    <span slot="icon">2</span>\n                                    <span slot="title">\n                                        <div id="vl-steps-vl-step-2">Stap 2: tweede actie</div>\n                                    </span>\n                                    <span slot="content">\n                                        <div>\n                                            <h4 is="vl-h4" id="vl-steps-vl-step-2-abstract">Abstract</h4>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <h4 is="vl-h4" id="vl-steps-vl-step-2-volledig">Volledig</h4>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                        </div>\n                                    </span>\n                                </vl-step-next>\n                                <vl-step-next>\n                                    <span slot="icon">3</span>\n                                    <span slot="title">\n                                        <div id="vl-steps-vl-step-3">Stap 3: derde actie</div>\n                                    </span>\n                                    <span slot="content">\n                                        <div>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                        </div>\n                                    </span>\n                                </vl-step-next>\n                            </vl-steps-next>\n                        </div>\n                    </div>\n                    <div\n                        is="vl-column"\n                        data-vl-size="3"\n                        data-vl-medium-size="3"\n                        data-vl-small-size="3"\n                        data-vl-extra-small-size="0"\n                    >\n                        <nav is="vl-side-navigation" aria-label="inhoudsopgave">\n                            <h5 is="vl-side-navigation-h5">Op deze pagina</h5>\n                            <div is="vl-side-navigation-content">\n                                <ul is="vl-side-navigation-group">\n                                    <li is="vl-side-navigation-item">\n                                        <a is="vl-side-navigation-toggle" href="#vl-steps-vl-step-1">\n                                            step 1\n                                            <i class="vl-vi vl-vi-arrow-right-fat"></i>\n                                        </a>\n                                    </li>\n                                    <li is="vl-side-navigation-item" data-vl-parent="step-2">\n                                        <a\n                                            is="vl-side-navigation-toggle"\n                                            href="#vl-steps-vl-step-2"\n                                            data-vl-child="step-2"\n                                        >\n                                            step 2\n                                            <i class="vl-vi vl-vi-arrow-right-fat"></i>\n                                        </a>\n                                        <ul>\n                                            <li is="vl-side-navigation-item">\n                                                <div>\n                                                    <a href="#vl-steps-vl-step-2-abstract" data-vl-parent="step-2"\n                                                        >Abstract</a\n                                                    >\n                                                </div>\n                                            </li>\n                                            <li is="vl-side-navigation-item">\n                                                <div>\n                                                    <a href="#vl-steps-vl-step-2-volledig" data-vl-parent="step-2"\n                                                        >Volledig</a\n                                                    >\n                                                </div>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                    <li is="vl-side-navigation-item">\n                                        <a is="vl-side-navigation-toggle" href="#vl-steps-vl-step-3">\n                                            step 3\n                                            <i class="vl-vi vl-vi-arrow-right-fat"></i>\n                                        </a>\n                                    </li>\n                                </ul>\n                            </div>\n                        </nav>\n                    </div>\n                </div>\n            </div>\n        </section>\n    `)',...b.parameters?.docs?.source}}};let h=["StepsDefault","StepsIcons","StepsLine","StepsTimeline","StepsSimpleTimeline","StepsSideNavigation"]},"../../node_modules/memoizerific sync recursive":e=>{function t(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id="../../node_modules/memoizerific sync recursive",e.exports=t},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,s)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=s("../../node_modules/react/index.js"),i=Symbol.for("react.element"),n=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,s){var a,n={},u=null,c=null;for(a in void 0!==s&&(u=""+s),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)l.call(t,a)&&!r.hasOwnProperty(a)&&(n[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===n[a]&&(n[a]=t[a]);return{$$typeof:i,type:e,key:u,ref:c,props:n,_owner:o.current}}t.Fragment=n,t.jsx=u,t.jsxs=u},"../../node_modules/react/jsx-runtime.js":(e,t,s)=>{"use strict";e.exports=s("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);