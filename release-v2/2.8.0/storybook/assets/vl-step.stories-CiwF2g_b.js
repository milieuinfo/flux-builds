import{K as a,L as p,H as o,I as d,s as l,x as i}from"./iframe-BQb9mjVp.js";import"./preload-helper-D9Z9MdNV.js";const e={...d,defaultOpen:!1,toggleable:!1,type:null},r={...o,toggleable:{name:"toggleable",description:"Beeldt een stap af als een accordion.",control:!1,table:{type:{summary:p.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(e.toggleable)}}},type:{name:"type",description:"Beeldt een stap af in een bepaalde staat.",control:!1,table:{type:{summary:"highlighted | disabled | success | warning | error"},category:a.ATTRIBUTES,defaultValue:{summary:String(e.type)}}},defaultOpen:{name:"default-open",description:"Indien gezet zal de step standaard geopend zijn. Werkt enkel in combinatie met het `toggleable` attribuut. <br>Dit attribuut is niet reactief.",table:{type:{summary:p.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(e.defaultOpen)}}}},b={id:"components-block-steps-step",title:"Components - Block/steps/step",tags:["autodocs"],args:e,argTypes:r,parameters:{controls:{hideNoControlsWarning:!0}}},s=l(e,({defaultOpen:n})=>i`
        <vl-steps>
            <vl-step toggleable ?default-open=${n}>
                <span slot="icon">1</span>
                <span slot="title">Stap 1: eerste actie</span>
                <span slot="subtitle">Dit is de eerste subtitel.</span>
                <span slot="content">Dit is de eerste stap content.</span>
            </vl-step>
            <vl-step toggleable ?default-open=${n}>
                <span slot="icon">2</span>
                <span slot="title">Stap 2: tweede actie</span>
                <span slot="subtitle">Dit is de tweede subtitel.</span>
                <span slot="content">Dit is de tweede stap content.</span>
            </vl-step>
            <vl-step toggleable ?default-open=${n}>
                <span slot="icon">3</span>
                <span slot="title">Stap 3: derde actie</span>
                <span slot="subtitle">Dit is de derde subtitel.</span>
                <span slot="content">Dit is de derde stap content.</span>
            </vl-step>
        </vl-steps>
    `);s.storyName="vl-step - toggleable";const t=l(e,()=>i`
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
    `);t.storyName="vl-step - states";t.parameters={controls:{exclude:["default-open"]}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story(stepArgs, ({
  defaultOpen
}) => html\`
        <vl-steps>
            <vl-step toggleable ?default-open=\${defaultOpen}>
                <span slot="icon">1</span>
                <span slot="title">Stap 1: eerste actie</span>
                <span slot="subtitle">Dit is de eerste subtitel.</span>
                <span slot="content">Dit is de eerste stap content.</span>
            </vl-step>
            <vl-step toggleable ?default-open=\${defaultOpen}>
                <span slot="icon">2</span>
                <span slot="title">Stap 2: tweede actie</span>
                <span slot="subtitle">Dit is de tweede subtitel.</span>
                <span slot="content">Dit is de tweede stap content.</span>
            </vl-step>
            <vl-step toggleable ?default-open=\${defaultOpen}>
                <span slot="icon">3</span>
                <span slot="title">Stap 3: derde actie</span>
                <span slot="subtitle">Dit is de derde subtitel.</span>
                <span slot="content">Dit is de derde stap content.</span>
            </vl-step>
        </vl-steps>
    \`)`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`story(stepArgs, () => html\`
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
    \`)`,...t.parameters?.docs?.source}}};const g=["StepsToggleable","StepsStates"];export{t as StepsStates,s as StepsToggleable,g as __namedExportsOrder,b as default};
