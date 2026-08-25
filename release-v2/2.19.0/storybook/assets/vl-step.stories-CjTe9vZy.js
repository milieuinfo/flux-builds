import{Z as e,_ as n,a1 as m,W as A,X as $,s as E,x as O}from"./iframe-CY-ZM549.js";import{o as a}from"./unsafe-html-CLNrWVY9.js";import"./preload-helper-D9Z9MdNV.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,t={...$,defaultOpen:!1,toggleable:!1,type:"",headingLevel:"3",iconAriaLabel:"",timelineAriaLabel:"",onToggle:h("vl-on-toggle"),contentRenderer:void 0,line:!1,timeline:!1,simpleTimeline:!1,lastStepNoLine:!1,iconSlot:"",subIconSlot:"",titleSlot:"",titleAnnotationSlot:"",subtitleSlot:"",contentSlot:""},R={...A,toggleable:{name:"toggleable",description:"Beeldt een stap af als een accordion.",table:{type:{summary:n.BOOLEAN},category:e.ATTRIBUTES,defaultValue:{summary:String(t.toggleable)}}},type:{name:"type",description:"Beeldt een stap af in een bepaalde staat.",control:{type:m.SELECT},options:["(default)","highlighted","disabled","success","warning","error"],mapping:{"(default)":""},table:{type:{summary:"highlighted | disabled | success | warning | error"},category:e.ATTRIBUTES,defaultValue:{summary:String(t.type)}}},headingLevel:{name:"heading-level",description:"Het heading niveau voor de step titel.",control:{type:m.SELECT},options:["1","2","3","4","5","6"],table:{type:{summary:"1 | 2 | 3 | 4 | 5 | 6"},category:e.ATTRIBUTES,defaultValue:{summary:String(t.headingLevel)}}},iconAriaLabel:{name:"icon-aria-label",description:"Aria label voor de icon container.",table:{type:{summary:n.STRING},category:e.ATTRIBUTES,defaultValue:{summary:String(t.iconAriaLabel)}}},timelineAriaLabel:{name:"timeline-aria-label",description:"Aria label voor de timeline datum container, bijvoorbeeld voor volledige datum.",table:{type:{summary:n.STRING},category:e.ATTRIBUTES,defaultValue:{summary:String(t.timelineAriaLabel)}}},defaultOpen:{name:"default-open",description:"Indien gezet zal de step standaard geopend zijn. Werkt enkel in combinatie met het `toggleable` attribuut. <br>Dit attribuut is niet reactief.",table:{type:{summary:n.BOOLEAN},category:e.ATTRIBUTES,defaultValue:{summary:String(t.defaultOpen)}}},onToggle:{name:"vl-on-toggle",description:"Afgevuurd bij het openen of sluiten van de toggleable step.<br>Het event bevat of de step geopend of gesloten is.<br>Werkt enkel in combinatie met het `toggleable` attribuut.",table:{type:{summary:"{ open: boolean }"},category:e.EVENTS}},contentRenderer:{name:"contentRenderer",description:"Functie die aangeroepen wordt om dynamische content te renderen op basis van de open/closed state.<br>Signatuur: `(open: boolean) => TemplateResult`<br>Werkt enkel in combinatie met het `toggleable` attribuut.<br>Wanneer deze property is ingesteld, wordt het `content` slot genegeerd.",control:!1,table:{type:{summary:"(open: boolean) => TemplateResult"},category:e.PROPERTIES,defaultValue:{summary:"undefined"}}},iconSlot:{name:"icon",description:"Element voor het hoofd-icoon van de step.",table:{type:{summary:n.HTML},category:e.SLOTS,defaultValue:{summary:t.iconSlot}}},subIconSlot:{name:"sub-icon",description:"Element voor het sub-icoon van de step.",table:{type:{summary:n.HTML},category:e.SLOTS,defaultValue:{summary:t.subIconSlot}}},titleSlot:{name:"title",description:"Element voor de titel van de step.",table:{type:{summary:n.HTML},category:e.SLOTS,defaultValue:{summary:t.titleSlot}}},titleAnnotationSlot:{name:"title-annotation",description:"Element voor een annotatie bij de titel van de step.",table:{type:{summary:n.HTML},category:e.SLOTS,defaultValue:{summary:t.titleAnnotationSlot}}},subtitleSlot:{name:"subtitle",description:"Element voor de subtitel van de step.",table:{type:{summary:n.HTML},category:e.SLOTS,defaultValue:{summary:t.subtitleSlot}}},contentSlot:{name:"content",description:"Element voor de hoofdcontent van de step.<br>Wordt genegeerd wanneer de `contentRenderer` property is ingesteld.",table:{type:{summary:n.HTML},category:e.SLOTS,defaultValue:{summary:t.contentSlot}}},line:{name:"line",description:"Toont een lijn naast de step.",table:{type:{summary:n.BOOLEAN},category:e.ATTRIBUTES,defaultValue:{summary:String(t.line)}}},timeline:{name:"timeline",description:"Toont de step als een timeline item.",table:{type:{summary:n.BOOLEAN},category:e.ATTRIBUTES,defaultValue:{summary:String(t.timeline)}}},simpleTimeline:{name:"simple-timeline",description:"Toont een vereenvoudigde timeline versie.",table:{type:{summary:n.BOOLEAN},category:e.ATTRIBUTES,defaultValue:{summary:String(t.simpleTimeline)}}},lastStepNoLine:{name:"last-step-no-line",description:"Verbergt de lijn bij het laatste step item.",table:{type:{summary:n.BOOLEAN},category:e.ATTRIBUTES,defaultValue:{summary:String(t.lastStepNoLine)}}}},H={id:"components-block-steps-step",title:"Components - Block/steps/step",tags:["autodocs"],args:t,argTypes:R,parameters:{controls:{hideNoControlsWarning:!0}}},I=E(t,({toggleable:p,defaultOpen:u,type:d,headingLevel:c,iconAriaLabel:g,timelineAriaLabel:b,line:i,timeline:o,simpleTimeline:s,lastStepNoLine:r,iconSlot:y,subIconSlot:S,titleSlot:T,titleAnnotationSlot:f,subtitleSlot:v,contentSlot:L})=>O`
        <vl-steps
            ?line=${i}
            ?timeline=${o}
            ?simple-timeline=${s}
            ?last-step-no-line=${r}
        >
            <vl-step
                ?toggleable=${p}
                ?default-open=${u}
                type=${d}
                heading-level=${c}
                icon-aria-label=${g}
                timeline-aria-label=${b}
                ?line=${i}
                ?timeline=${o}
                ?simple-timeline=${s}
                ?last-step-no-line=${r}
            >
                ${a(y)} ${a(S)} ${a(T)}
                ${a(f)} ${a(v)} ${a(L)}
            </vl-step>
        </vl-steps>
    `),l=I.bind({});l.storyName="vl-step - default";l.args={iconSlot:'<span slot="icon">1</span>',subIconSlot:"",titleSlot:'<span slot="title">Stap 1: eerste actie</span>',titleAnnotationSlot:'<span slot="title-annotation">annotation</span>',subtitleSlot:'<span slot="subtitle">Dit is de eerste subtitel.</span>',contentSlot:'<span slot="content">Dit is de eerste stap content.</span>'};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`story(stepArgs, ({
  toggleable,
  defaultOpen,
  type,
  headingLevel,
  iconAriaLabel,
  timelineAriaLabel,
  line,
  timeline,
  simpleTimeline,
  lastStepNoLine,
  iconSlot,
  subIconSlot,
  titleSlot,
  titleAnnotationSlot,
  subtitleSlot,
  contentSlot
}) => html\`
        <vl-steps
            ?line=\${line}
            ?timeline=\${timeline}
            ?simple-timeline=\${simpleTimeline}
            ?last-step-no-line=\${lastStepNoLine}
        >
            <vl-step
                ?toggleable=\${toggleable}
                ?default-open=\${defaultOpen}
                type=\${type}
                heading-level=\${headingLevel}
                icon-aria-label=\${iconAriaLabel}
                timeline-aria-label=\${timelineAriaLabel}
                ?line=\${line}
                ?timeline=\${timeline}
                ?simple-timeline=\${simpleTimeline}
                ?last-step-no-line=\${lastStepNoLine}
            >
                \${unsafeHTML(iconSlot)} \${unsafeHTML(subIconSlot)} \${unsafeHTML(titleSlot)}
                \${unsafeHTML(titleAnnotationSlot)} \${unsafeHTML(subtitleSlot)} \${unsafeHTML(contentSlot)}
            </vl-step>
        </vl-steps>
    \`)`,...l.parameters?.docs?.source}}};const M=["StepDefault"];export{l as StepDefault,M as __namedExportsOrder,H as default};
