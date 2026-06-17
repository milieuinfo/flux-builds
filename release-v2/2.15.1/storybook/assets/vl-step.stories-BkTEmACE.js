import{Z as t,_ as n,W as c,X as u,s as d,x as a}from"./iframe-nqJ0ju39.js";import"./preload-helper-D9Z9MdNV.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,e={...u,defaultOpen:!1,toggleable:!1,type:null,headingLevel:3,iconAriaLabel:null,timelineAriaLabel:null,onToggle:g("vl-on-toggle"),contentRenderer:void 0,iconSlot:"",subIconSlot:"",titleSlot:"",titleAnnotationSlot:"",subtitleSlot:"",contentSlot:""},m={...c,toggleable:{name:"toggleable",description:"Beeldt een stap af als een accordion.",control:!1,table:{type:{summary:n.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(e.toggleable)}}},type:{name:"type",description:"Beeldt een stap af in een bepaalde staat.",control:!1,table:{type:{summary:"highlighted | disabled | success | warning | error"},category:t.ATTRIBUTES,defaultValue:{summary:String(e.type)}}},headingLevel:{name:"heading-level",description:"Het heading niveau voor de step titel.",control:{type:"select",options:[1,2,3,4,5,6]},table:{type:{summary:n.NUMBER},category:t.ATTRIBUTES,defaultValue:{summary:String(e.headingLevel)}}},iconAriaLabel:{name:"icon-aria-label",description:"Aria label voor de icon container.",control:"text",table:{type:{summary:n.STRING},category:t.ATTRIBUTES,defaultValue:{summary:String(e.iconAriaLabel)}}},timelineAriaLabel:{name:"timeline-aria-label",description:"Aria label voor de timeline datum container, bijvoorbeeld voor volledige datum.",control:"text",table:{type:{summary:n.STRING},category:t.ATTRIBUTES,defaultValue:{summary:String(e.timelineAriaLabel)}}},defaultOpen:{name:"default-open",description:"Indien gezet zal de step standaard geopend zijn. Werkt enkel in combinatie met het `toggleable` attribuut. <br>Dit attribuut is niet reactief.",table:{type:{summary:n.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(e.defaultOpen)}}},onToggle:{name:"vl-on-toggle",description:"Afgevuurd bij het openen of sluiten van de toggleable step.<br>Het event bevat of de step geopend of gesloten is.<br>Werkt enkel in combinatie met het `toggleable` attribuut.",table:{type:{summary:"{ open: boolean }"},category:t.EVENTS}},contentRenderer:{name:"contentRenderer",description:"Functie die aangeroepen wordt om dynamische content te renderen op basis van de open/closed state.<br>Signatuur: `(open: boolean) => TemplateResult`<br>Werkt enkel in combinatie met het `toggleable` attribuut.<br>Wanneer deze property is ingesteld, wordt het `content` slot genegeerd.",control:!1,table:{type:{summary:"(open: boolean) => TemplateResult"},category:t.PROPERTIES,defaultValue:{summary:"undefined"}}},iconSlot:{name:"icon",description:"Element voor het hoofd-icoon van de step.",table:{type:{summary:n.HTML},category:t.SLOTS,defaultValue:{summary:e.iconSlot}}},subIconSlot:{name:"sub-icon",description:"Element voor het sub-icoon van de step.",table:{type:{summary:n.HTML},category:t.SLOTS,defaultValue:{summary:e.subIconSlot}}},titleSlot:{name:"title",description:"Element voor de titel van de step.",table:{type:{summary:n.HTML},category:t.SLOTS,defaultValue:{summary:e.titleSlot}}},titleAnnotationSlot:{name:"title-annotation",description:"Element voor een annotatie bij de titel van de step.",table:{type:{summary:n.HTML},category:t.SLOTS,defaultValue:{summary:e.titleAnnotationSlot}}},subtitleSlot:{name:"subtitle",description:"Element voor de subtitel van de step.",table:{type:{summary:n.HTML},category:t.SLOTS,defaultValue:{summary:e.subtitleSlot}}},contentSlot:{name:"content",description:"Element voor de hoofdcontent van de step.<br>Wordt genegeerd wanneer de `contentRenderer` property is ingesteld.",table:{type:{summary:n.HTML},category:t.SLOTS,defaultValue:{summary:e.contentSlot}}}},S={id:"components-block-steps-step",title:"Components - Block/steps/step",tags:["autodocs"],args:e,argTypes:m,parameters:{controls:{hideNoControlsWarning:!0}}},i=d(e,({defaultOpen:l,onToggle:s})=>a`
        <vl-steps>
            <vl-step toggleable ?default-open=${l} @vl-on-toggle=${p=>s(p.detail)}>
                <span slot="icon">1</span>
                <span slot="title">Stap 1: eerste actie</span>
                <span slot="subtitle">Dit is de eerste subtitel.</span>
                <span slot="content">Dit is de eerste stap content.</span>
            </vl-step>
            <vl-step toggleable ?default-open=${l} @vl-on-toggle=${p=>s(p.detail)}>
                <span slot="icon">2</span>
                <span slot="title">Stap 2: tweede actie</span>
                <span slot="subtitle">Dit is de tweede subtitel.</span>
                <span slot="content">Dit is de tweede stap content.</span>
            </vl-step>
            <vl-step toggleable ?default-open=${l} @vl-on-toggle=${p=>s(p.detail)}>
                <span slot="icon">3</span>
                <span slot="title">Stap 3: derde actie</span>
                <span slot="subtitle">Dit is de derde subtitel.</span>
                <span slot="content">Dit is de derde stap content.</span>
            </vl-step>
        </vl-steps>
    `);i.storyName="vl-step - toggleable";const r=d(e,({defaultOpen:l})=>a`
        <vl-steps>
            <vl-step
                toggleable
                ?default-open=${l}
                .contentRenderer=${s=>s?a`<p><strong>Open:</strong> Dit is de uitgebreide content die alleen zichtbaar is wanneer de step geopend is.</p>`:a`<p><em>Gesloten:</em> Klik om meer te zien...</p>`}
            >
                <span slot="icon">1</span>
                <span slot="title">Stap 1: dynamische content</span>
                <span slot="subtitle">Content wijzigt op basis van open/closed state.</span>
            </vl-step>
            <vl-step
                toggleable
                ?default-open=${l}
                .contentRenderer=${s=>s?a`
                        <div>
                            <p>De step is nu open!</p>
                            <ul>
                                <li>Item 1</li>
                                <li>Item 2</li>
                                <li>Item 3</li>
                            </ul>
                        </div>
                    `:a`<p>Samenvatting...</p>`}
            >
                <span slot="icon">2</span>
                <span slot="title">Stap 2: complexe content</span>
                <span slot="subtitle">Verschillende structuren per state.</span>
            </vl-step>
        </vl-steps>
    `);r.storyName="vl-step - toggleable with content renderer";const o=d(e,()=>a`
        <vl-steps>
            <vl-step>
                <span slot="icon">1</span>
                <span slot="title">Stap 1: eerste actie</span>
                <span slot="subtitle">Dit is de eerste subtitel.</span>
                <span slot="content">Dit is de eerste stap content.</span>
            </vl-step>
            <vl-step type="highlighted">
                <span slot="icon">2</span>
                <span slot="title">Stap 2: tweede actie (highlighted)</span>
                <span slot="subtitle">Dit is de tweede subtitel.</span>
                <span slot="content">Dit is de tweede stap content.</span>
            </vl-step>
            <vl-step type="disabled">
                <span slot="icon">3</span>
                <span slot="title">Stap 3: derde actie (disabled)</span>
                <span slot="subtitle">Dit is de derde subtitel.</span>
                <span slot="content">Deze stap is geannuleerd.</span>
            </vl-step>
            <vl-step type="success">
                <span slot="icon">4</span>
                <span slot="title">Stap 4: vierde actie (success stijl)</span>
                <span slot="subtitle">Dit is de vierde subtitel.</span>
                <span slot="content">Dit is de vierde stap content.</span>
            </vl-step>
            <vl-step type="warning">
                <span slot="icon">5</span>
                <span slot="title">Stap 5: vijfde actie (warning stijl)</span>
                <span slot="subtitle">Dit is de vijfde subtitel.</span>
                <span slot="content">Dit is de vijfde stap content.</span>
            </vl-step>
            <vl-step type="error">
                <span slot="icon">6</span>
                <span slot="title">Stap 6: zesde actie (error stijl)</span>
                <span slot="subtitle">Dit is de zesde subtitel.</span>
                <span slot="content">Dit is de zesde stap content.</span>
            </vl-step>
        </vl-steps>
    `);o.storyName="vl-step - states";o.parameters={controls:{exclude:["default-open"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`story(stepArgs, ({
  defaultOpen,
  onToggle
}) => html\`
        <vl-steps>
            <vl-step toggleable ?default-open=\${defaultOpen} @vl-on-toggle=\${(event: CustomEvent) => onToggle(event.detail)}>
                <span slot="icon">1</span>
                <span slot="title">Stap 1: eerste actie</span>
                <span slot="subtitle">Dit is de eerste subtitel.</span>
                <span slot="content">Dit is de eerste stap content.</span>
            </vl-step>
            <vl-step toggleable ?default-open=\${defaultOpen} @vl-on-toggle=\${(event: CustomEvent) => onToggle(event.detail)}>
                <span slot="icon">2</span>
                <span slot="title">Stap 2: tweede actie</span>
                <span slot="subtitle">Dit is de tweede subtitel.</span>
                <span slot="content">Dit is de tweede stap content.</span>
            </vl-step>
            <vl-step toggleable ?default-open=\${defaultOpen} @vl-on-toggle=\${(event: CustomEvent) => onToggle(event.detail)}>
                <span slot="icon">3</span>
                <span slot="title">Stap 3: derde actie</span>
                <span slot="subtitle">Dit is de derde subtitel.</span>
                <span slot="content">Dit is de derde stap content.</span>
            </vl-step>
        </vl-steps>
    \`)`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(stepArgs, ({
  defaultOpen
}) => html\`
        <vl-steps>
            <vl-step
                toggleable
                ?default-open=\${defaultOpen}
                .contentRenderer=\${(open: boolean) => open ? html\`<p><strong>Open:</strong> Dit is de uitgebreide content die alleen zichtbaar is wanneer de step geopend is.</p>\` : html\`<p><em>Gesloten:</em> Klik om meer te zien...</p>\`}
            >
                <span slot="icon">1</span>
                <span slot="title">Stap 1: dynamische content</span>
                <span slot="subtitle">Content wijzigt op basis van open/closed state.</span>
            </vl-step>
            <vl-step
                toggleable
                ?default-open=\${defaultOpen}
                .contentRenderer=\${(open: boolean) => open ? html\`
                        <div>
                            <p>De step is nu open!</p>
                            <ul>
                                <li>Item 1</li>
                                <li>Item 2</li>
                                <li>Item 3</li>
                            </ul>
                        </div>
                    \` : html\`<p>Samenvatting...</p>\`}
            >
                <span slot="icon">2</span>
                <span slot="title">Stap 2: complexe content</span>
                <span slot="subtitle">Verschillende structuren per state.</span>
            </vl-step>
        </vl-steps>
    \`)`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`story(stepArgs, () => html\`
        <vl-steps>
            <vl-step>
                <span slot="icon">1</span>
                <span slot="title">Stap 1: eerste actie</span>
                <span slot="subtitle">Dit is de eerste subtitel.</span>
                <span slot="content">Dit is de eerste stap content.</span>
            </vl-step>
            <vl-step type="highlighted">
                <span slot="icon">2</span>
                <span slot="title">Stap 2: tweede actie (highlighted)</span>
                <span slot="subtitle">Dit is de tweede subtitel.</span>
                <span slot="content">Dit is de tweede stap content.</span>
            </vl-step>
            <vl-step type="disabled">
                <span slot="icon">3</span>
                <span slot="title">Stap 3: derde actie (disabled)</span>
                <span slot="subtitle">Dit is de derde subtitel.</span>
                <span slot="content">Deze stap is geannuleerd.</span>
            </vl-step>
            <vl-step type="success">
                <span slot="icon">4</span>
                <span slot="title">Stap 4: vierde actie (success stijl)</span>
                <span slot="subtitle">Dit is de vierde subtitel.</span>
                <span slot="content">Dit is de vierde stap content.</span>
            </vl-step>
            <vl-step type="warning">
                <span slot="icon">5</span>
                <span slot="title">Stap 5: vijfde actie (warning stijl)</span>
                <span slot="subtitle">Dit is de vijfde subtitel.</span>
                <span slot="content">Dit is de vijfde stap content.</span>
            </vl-step>
            <vl-step type="error">
                <span slot="icon">6</span>
                <span slot="title">Stap 6: zesde actie (error stijl)</span>
                <span slot="subtitle">Dit is de zesde subtitel.</span>
                <span slot="content">Dit is de zesde stap content.</span>
            </vl-step>
        </vl-steps>
    \`)`,...o.parameters?.docs?.source}}};const y=["StepsToggleable","StepsToggleableWithContentRenderer","StepsStates"];export{o as StepsStates,i as StepsToggleable,r as StepsToggleableWithContentRenderer,y as __namedExportsOrder,S as default};
