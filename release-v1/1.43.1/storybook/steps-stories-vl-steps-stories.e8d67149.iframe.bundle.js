"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[425],{"../../libs/components/src/steps/stories/vl-steps.stories.ts":(e,i,s)=>{s.r(i),s.d(i,{StepsDefault:()=>q,StepsWithAccordions:()=>f,StepsWithSideNavigation:()=>y,StepsWithTimeline:()=>h,__namedExportsOrder:()=>S,default:()=>b});var t=s("../../libs/common/utilities/src/index.ts"),a=s("../../libs/elements/src/index.ts"),n=s("../../node_modules/lit-html/lit-html.js"),u=s("../../libs/components/src/steps/vl-duration-step.component.ts"),l=s("../../libs/components/src/steps/vl-step.component.ts"),r=s("../../libs/components/src/steps/vl-steps.component.ts"),o=s("../../libs/common/storybook/src/index.ts");let p={...o.D8,timeline:!1},m={...(0,o.RN)(),timeline:{name:"data-vl-timeline",description:"Attribuut wordt gebruikt om aan te geven dat de stappen een tijdlijn voorstellen.",table:{type:{summary:o.QE.BOOLEAN},category:"Attributes",defaultValue:{summary:!1}}}};s("../../node_modules/react/index.js");var c=s("../../node_modules/react/jsx-runtime.js"),d=s("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),v=s("../../node_modules/@storybook/blocks/dist/index.mjs");function g(e){let i=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",a:"a"},(0,d.RP)(),e.components),{VluxMetaData:s}=i;return s||function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VluxMetaData",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.h1,{id:"steps",children:"Steps"}),"\n",(0,c.jsx)(s,{id:"components-steps"}),"\n",(0,c.jsxs)(i.p,{children:["Gebruik de ",(0,c.jsx)(i.code,{children:"steps"})," component om een verticale lijst van stappen af te beelden om de gebruiker door een procedure te begeleiden."]}),"\n",(0,c.jsx)(i.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-js",children:"import { VlStepsComponent } from '@domg-wc/components';\n"})}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-html",children:"<vl-steps></vl-steps>\n"})}),"\n",(0,c.jsx)(i.h2,{id:"default",children:"Default"}),"\n",(0,c.jsx)(v.Hl,{of:q}),"\n",(0,c.jsx)(i.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,c.jsx)(v.ov,{of:q}),"\n",(0,c.jsx)(i.h2,{id:"varianten",children:"Varianten"}),"\n",(0,c.jsx)(i.h3,{id:"accordions",children:"Accordions"}),"\n",(0,c.jsx)(v.Hl,{of:f}),"\n",(0,c.jsx)(i.h3,{id:"tijdlijn",children:"Tijdlijn"}),"\n",(0,c.jsx)(v.Hl,{of:h}),"\n",(0,c.jsx)(i.h2,{id:"referenties",children:"Referenties"}),"\n",(0,c.jsx)(i.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,c.jsx)(i.p,{children:(0,c.jsx)(i.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-steps",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Steps"})}),"\n",(0,c.jsx)(i.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,c.jsx)(i.p,{children:(0,c.jsx)(i.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/legacy-vl-steps--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Steps"})}),"\n",(0,c.jsx)(i.p,{children:(0,c.jsx)(i.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlSteps.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Steps"})}),"\n",(0,c.jsx)(i.p,{children:(0,c.jsx)(i.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-steps.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - Steps"})})]})}(0,t.gy)([u.I,a.i$,a.gs,a.hg,a.HH,a.$q,a.$I,a.xC,l.U,r.F]);let b={id:"components-steps",title:"Components/steps",tags:["autodocs"],args:p,argTypes:m,parameters:{controls:{hideNoControlsWarning:!0},docs:{page:function(e={}){let{wrapper:i}=Object.assign({},(0,d.RP)(),e.components);return i?(0,c.jsx)(i,Object.assign({},e,{children:(0,c.jsx)(g,e)})):g(e)}}}},q=({timeline:e})=>(0,n.qy)`
    <vl-steps id="vl-steps-1" ?data-vl-timeline=${e} data-cy="steps">
        <vl-step data-cy="step-1">
            <span slot="identifier">1</span>
            <span slot="title">Step 1: action</span>
            <span slot="sub-title">This is a subtitle.</span>
        </vl-step>
        <vl-step disabled="" data-cy="step-2">
            <span slot="identifier">2</span>
            <span slot="title">Step 2: action</span>
            <span slot="sub-title">This is a subtitle.</span>
        </vl-step>
        <vl-step type="success" data-cy="step-3">
            <span slot="identifier">3</span>
            <span slot="title">Step 3: action</span>
            <span slot="sub-title">This is a subtitle.</span>
        </vl-step>
        <vl-step type="warning" data-cy="step-4">
            <span slot="identifier">4</span>
            <span slot="title">Step 4: action</span>
            <span slot="sub-title">This is a subtitle.</span>
        </vl-step>
        <vl-step type="error" data-cy="step-5">
            <span slot="identifier">5</span>
            <span slot="title">Step 5: action</span>
            <span slot="sub-title">This is a subtitle.</span>
        </vl-step>
    </vl-steps>
`;q.storyName="vl-steps - default";let f=({timeline:e})=>(0,n.qy)`
    <vl-steps id="vl-steps-2" ?data-vl-timeline=${e} data-cy="steps-with-accordions">
        <vl-step data-vl-disabled="">
            <span slot="identifier">0</span>
            <span slot="title">Six centuries ago</span>
            <span slot="sub-title">The last visitor from earth entered my world.</span>
            <span slot="content"> Now, it's your turn to feel that pain. The gates are open. </span>
        </vl-step>
        <vl-step data-vl-toggleable="" data-cy="toggable-step-1">
            <span slot="identifier">1</span>
            <span slot="title">Gate 1</span>
            <span slot="content"> Darkness, the world of demons. Look around you, they're everywhere. </span>
        </vl-step>
        <vl-step data-vl-toggleable="" data-cy="toggable-step-2">
            <span slot="identifier">2</span>
            <span slot="title">Gate 2</span>
            <span slot="content"> My guards are watching you. </span>
        </vl-step>
        <vl-step data-vl-toggleable="" data-cy="toggable-step-3">
            <span slot="identifier">3</span>
            <span slot="title">Gate 3</span>
            <span slot="content"> Only evil lives here. </span>
        </vl-step>
        <vl-step data-vl-toggleable="" data-cy="toggable-step-4">
            <span slot="identifier">4</span>
            <span slot="title">Gate 4</span>
            <span slot="content"> There's no way out. </span>
        </vl-step>
        <vl-step data-vl-toggleable="" data-cy="toggable-step-5">
            <span slot="identifier">5</span>
            <span slot="title">Gate 5</span>
            <span slot="content"> Feel the fire. </span>
        </vl-step>
    </vl-steps>
`;f.storyName="vl-steps - with accordions";let h=()=>(0,n.qy)`
    <vl-steps id="vl-steps-3" data-vl-timeline data-cy="steps-with-timeline">
        <vl-step data-cy="timeline-step-1">
            <span slot="identifier">2</span>
            <span slot="identifier-annotation">maa</span>
            <span slot="title">Central Station</span>
            <span slot="title-annotation">13u00 - 15u00</span>
            <span slot="sub-title">The most beautiful train station in the world</span>
            <span slot="content">
                The Antwerp Central Station, chosen by DK magazine as the most beautiful manmade object, is the perfect
                starting point for any trip to Antwerp. The Central Station has been drawn by Da Vinci himself in 200 BC
                and built by 10 000 laborers from all over the world. <br />
                Described by Caesar as the bravest building of all buildings, the unique architecture is perfectly
                maintained and keeps dazzling archaeologists.
            </span>
        </vl-step>
        <vl-duration-step data-cy="timeline-duration-step-1"> Vrije tijd: 1 uur</vl-duration-step>
        <vl-step data-cy="timeline-step-2">
            <span slot="identifier">3</span>
            <span slot="identifier-annotation">maa</span>
            <span slot="title">The Botanical Gardens</span>
            <span slot="sub-title">A green oasis in a bustling city</span>
            <span slot="content">
                The Royal Botanical Gardens in Antwerp is a massive botanical garden in the center of the city. These
                gardens are ideal to stroll around, take a breather from everyday life or go for a leisurly walk, all of
                this on less than 500m from the city center.
            </span>
        </vl-step>
        <vl-duration-step data-cy="timeline-duration-step-2"> Vrije tijd: 2 uur</vl-duration-step>
        <vl-step data-vl-disabled="" data-cy="timeline-step-3">
            <span slot="identifier">3</span>
            <span slot="identifier-annotation">maa</span>
            <span slot="title">Bike ride</span>
            <span slot="title-annotation">22u00 - 23u00</span>
            <span slot="sub-title">Linkeroever</span>
            <span slot="content"> This activity is canceled. </span>
        </vl-step>
        <vl-step data-vl-type="success" data-cy="timeline-step-4">
            <span slot="identifier">3</span>
            <span slot="identifier-annotation">maa</span>
            <span slot="title">Bike ride</span>
            <span slot="title-annotation">22u00 - 23u00</span>
            <span slot="sub-title">Linkeroever</span>
            <span slot="content"> This activity is new! </span>
        </vl-step>
        <vl-step data-vl-type="warning" data-cy="timeline-step-5">
            <span slot="identifier">3</span>
            <span slot="identifier-annotation">maa</span>
            <span slot="title">Bike ride</span>
            <span slot="title-annotation">22u00 - 23u00</span>
            <span slot="sub-title">Linkeroever</span>
            <span slot="content"> This activity is almost fully booked. </span>
        </vl-step>
        <vl-step data-vl-type="error" data-cy="timeline-step-6">
            <span slot="identifier">3</span>
            <span slot="identifier-annotation">maa</span>
            <span slot="title">Bike ride</span>
            <span slot="title-annotation">22u00 - 23u00</span>
            <span slot="sub-title">Linkeroever</span>
            <span slot="content"> This activity is canceled. </span>
        </vl-step>
    </vl-steps>
`;h.storyName="vl-steps - with timeline";let y=({timeline:e})=>(0,n.qy)`
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
                        <vl-steps id="vl-steps-4" ?data-vl-timeline=${e} data-cy="steps-with-side-navigation">
                            <vl-step data-cy="step-1">
                                <span slot="identifier">1</span>
                                <span id="vl-steps-4-step-1" slot="title">Step 1: action</span>
                                <div slot="content">
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
                                        Facilisis gravida neque convallis a cras semper auctor. Condimentum mattis
                                        pellentesque id nibh tortor. Tortor at auctor urna nunc id. Facilisi nullam
                                        vehicula ipsum a arcu cursus vitae congue mauris. Adipiscing at in tellus
                                        integer feugiat scelerisque varius. Amet volutpat consequat mauris nunc congue
                                        nisi vitae suscipit tellus. Quisque sagittis purus sit amet. Neque egestas
                                        congue quisque egestas diam. Tincidunt lobortis feugiat vivamus at augue eget
                                        arcu. Dolor purus non enim praesent. Odio euismod lacinia at quis risus sed
                                        vulputate odio ut. Tempor id eu nisl nunc mi ipsum. Quam elementum pulvinar
                                        etiam non quam lacus suspendisse faucibus. Quam lacus suspendisse faucibus
                                        interdum. Eu nisl nunc mi ipsum faucibus vitae. Aliquet risus feugiat in ante.
                                        Quam vulputate dignissim suspendisse in est ante in nibh.
                                    </p>
                                    <p>
                                        Donec et odio pellentesque diam volutpat commodo. Lorem dolor sed viverra ipsum
                                        nunc aliquet bibendum enim facilisis. Proin nibh nisl condimentum id venenatis a
                                        condimentum. Nulla at volutpat diam ut. Metus aliquam eleifend mi in nulla
                                        posuere sollicitudin aliquam. Egestas quis ipsum suspendisse ultrices gravida
                                        dictum fusce. Dolor purus non enim praesent elementum facilisis leo vel
                                        fringilla. Nisi lacus sed viverra tellus in. Pulvinar mattis nunc sed blandit
                                        libero volutpat sed cras ornare. Metus vulputate eu scelerisque felis. Posuere
                                        ac ut consequat semper viverra nam libero justo laoreet. Viverra aliquet eget
                                        sit amet tellus cras.
                                    </p>
                                    <p>
                                        Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Dui nunc
                                        mattis enim ut tellus elementum sagittis. Cursus turpis massa tincidunt dui.
                                        Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Ipsum
                                        suspendisse ultrices gravida dictum fusce ut. In hendrerit gravida rutrum
                                        quisque non tellus orci. Sed risus pretium quam vulputate dignissim. Sociis
                                        natoque penatibus et magnis dis. Nec ultrices dui sapien eget mi proin sed
                                        libero. Tempus egestas sed sed risus pretium quam vulputate dignissim. In
                                        fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Sed lectus
                                        vestibulum mattis ullamcorper velit sed ullamcorper morbi. Risus pretium quam
                                        vulputate dignissim. Dictum varius duis at consectetur lorem donec massa sapien
                                        faucibus. Dolor sit amet consectetur adipiscing. Egestas erat imperdiet sed
                                        euismod. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue.
                                    </p>
                                    <p>
                                        Commodo nulla facilisi nullam vehicula ipsum. Ultrices dui sapien eget mi. Sed
                                        risus ultricies tristique nulla aliquet enim tortor. Vestibulum morbi blandit
                                        cursus risus. Lobortis scelerisque fermentum dui faucibus in. Mauris rhoncus
                                        aenean vel elit. Sociis natoque penatibus et magnis dis parturient montes
                                        nascetur ridiculus. Fermentum et sollicitudin ac orci phasellus. Lacus
                                        vestibulum sed arcu non odio. Morbi enim nunc faucibus a pellentesque sit amet
                                        porttitor. A pellentesque sit amet porttitor eget dolor morbi non. Purus in
                                        massa tempor nec.
                                    </p>
                                    <p />
                                </div>
                            </vl-step>
                            <vl-step data-cy="step-2">
                                <span slot="identifier">2</span>
                                <span id="vl-steps-4-step-2" slot="title">Step 2: action</span>
                                <div slot="content">
                                    <h3 id="vl-steps-4-step-2-abstract" data-cy="step-2-abstract">Abstract</h3>
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
                                        Facilisis gravida neque convallis a cras semper auctor. Condimentum mattis
                                        pellentesque id nibh tortor. Tortor at auctor urna nunc id. Facilisi nullam
                                        vehicula ipsum a arcu cursus vitae congue mauris. Adipiscing at in tellus
                                        integer feugiat scelerisque varius. Amet volutpat consequat mauris nunc congue
                                        nisi vitae suscipit tellus. Quisque sagittis purus sit amet. Neque egestas
                                        congue quisque egestas diam. Tincidunt lobortis feugiat vivamus at augue eget
                                        arcu. Dolor purus non enim praesent. Odio euismod lacinia at quis risus sed
                                        vulputate odio ut. Tempor id eu nisl nunc mi ipsum. Quam elementum pulvinar
                                        etiam non quam lacus suspendisse faucibus. Quam lacus suspendisse faucibus
                                        interdum. Eu nisl nunc mi ipsum faucibus vitae. Aliquet risus feugiat in ante.
                                        Quam vulputate dignissim suspendisse in est ante in nibh.
                                    </p>
                                    <p>
                                        Donec et odio pellentesque diam volutpat commodo. Lorem dolor sed viverra ipsum
                                        nunc aliquet bibendum enim facilisis. Proin nibh nisl condimentum id venenatis a
                                        condimentum. Nulla at volutpat diam ut. Metus aliquam eleifend mi in nulla
                                        posuere sollicitudin aliquam. Egestas quis ipsum suspendisse ultrices gravida
                                        dictum fusce. Dolor purus non enim praesent elementum facilisis leo vel
                                        fringilla. Nisi lacus sed viverra tellus in. Pulvinar mattis nunc sed blandit
                                        libero volutpat sed cras ornare. Metus vulputate eu scelerisque felis. Posuere
                                        ac ut consequat semper viverra nam libero justo laoreet. Viverra aliquet eget
                                        sit amet tellus cras.
                                    </p>
                                    <p>
                                        Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Dui nunc
                                        mattis enim ut tellus elementum sagittis. Cursus turpis massa tincidunt dui.
                                        Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Ipsum
                                        suspendisse ultrices gravida dictum fusce ut. In hendrerit gravida rutrum
                                        quisque non tellus orci. Sed risus pretium quam vulputate dignissim. Sociis
                                        natoque penatibus et magnis dis. Nec ultrices dui sapien eget mi proin sed
                                        libero. Tempus egestas sed sed risus pretium quam vulputate dignissim. In
                                        fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Sed lectus
                                        vestibulum mattis ullamcorper velit sed ullamcorper morbi. Risus pretium quam
                                        vulputate dignissim. Dictum varius duis at consectetur lorem donec massa sapien
                                        faucibus. Dolor sit amet consectetur adipiscing. Egestas erat imperdiet sed
                                        euismod. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue.
                                    </p>
                                    <p>
                                        Commodo nulla facilisi nullam vehicula ipsum. Ultrices dui sapien eget mi. Sed
                                        risus ultricies tristique nulla aliquet enim tortor. Vestibulum morbi blandit
                                        cursus risus. Lobortis scelerisque fermentum dui faucibus in. Mauris rhoncus
                                        aenean vel elit. Sociis natoque penatibus et magnis dis parturient montes
                                        nascetur ridiculus. Fermentum et sollicitudin ac orci phasellus. Lacus
                                        vestibulum sed arcu non odio. Morbi enim nunc faucibus a pellentesque sit amet
                                        porttitor. A pellentesque sit amet porttitor eget dolor morbi non. Purus in
                                        massa tempor nec.
                                    </p>
                                    <p />

                                    <h3 id="vl-steps-4-step-2-volledig" data-cy="step-2-volledig">Volledig</h3>
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
                                        Facilisis gravida neque convallis a cras semper auctor. Condimentum mattis
                                        pellentesque id nibh tortor. Tortor at auctor urna nunc id. Facilisi nullam
                                        vehicula ipsum a arcu cursus vitae congue mauris. Adipiscing at in tellus
                                        integer feugiat scelerisque varius. Amet volutpat consequat mauris nunc congue
                                        nisi vitae suscipit tellus. Quisque sagittis purus sit amet. Neque egestas
                                        congue quisque egestas diam. Tincidunt lobortis feugiat vivamus at augue eget
                                        arcu. Dolor purus non enim praesent. Odio euismod lacinia at quis risus sed
                                        vulputate odio ut. Tempor id eu nisl nunc mi ipsum. Quam elementum pulvinar
                                        etiam non quam lacus suspendisse faucibus. Quam lacus suspendisse faucibus
                                        interdum. Eu nisl nunc mi ipsum faucibus vitae. Aliquet risus feugiat in ante.
                                        Quam vulputate dignissim suspendisse in est ante in nibh.
                                    </p>
                                    <p>
                                        Donec et odio pellentesque diam volutpat commodo. Lorem dolor sed viverra ipsum
                                        nunc aliquet bibendum enim facilisis. Proin nibh nisl condimentum id venenatis a
                                        condimentum. Nulla at volutpat diam ut. Metus aliquam eleifend mi in nulla
                                        posuere sollicitudin aliquam. Egestas quis ipsum suspendisse ultrices gravida
                                        dictum fusce. Dolor purus non enim praesent elementum facilisis leo vel
                                        fringilla. Nisi lacus sed viverra tellus in. Pulvinar mattis nunc sed blandit
                                        libero volutpat sed cras ornare. Metus vulputate eu scelerisque felis. Posuere
                                        ac ut consequat semper viverra nam libero justo laoreet. Viverra aliquet eget
                                        sit amet tellus cras.
                                    </p>
                                    <p>
                                        Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Dui nunc
                                        mattis enim ut tellus elementum sagittis. Cursus turpis massa tincidunt dui.
                                        Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Ipsum
                                        suspendisse ultrices gravida dictum fusce ut. In hendrerit gravida rutrum
                                        quisque non tellus orci. Sed risus pretium quam vulputate dignissim. Sociis
                                        natoque penatibus et magnis dis. Nec ultrices dui sapien eget mi proin sed
                                        libero. Tempus egestas sed sed risus pretium quam vulputate dignissim. In
                                        fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Sed lectus
                                        vestibulum mattis ullamcorper velit sed ullamcorper morbi. Risus pretium quam
                                        vulputate dignissim. Dictum varius duis at consectetur lorem donec massa sapien
                                        faucibus. Dolor sit amet consectetur adipiscing. Egestas erat imperdiet sed
                                        euismod. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue.
                                    </p>
                                    <p>
                                        Commodo nulla facilisi nullam vehicula ipsum. Ultrices dui sapien eget mi. Sed
                                        risus ultricies tristique nulla aliquet enim tortor. Vestibulum morbi blandit
                                        cursus risus. Lobortis scelerisque fermentum dui faucibus in. Mauris rhoncus
                                        aenean vel elit. Sociis natoque penatibus et magnis dis parturient montes
                                        nascetur ridiculus. Fermentum et sollicitudin ac orci phasellus. Lacus
                                        vestibulum sed arcu non odio. Morbi enim nunc faucibus a pellentesque sit amet
                                        porttitor. A pellentesque sit amet porttitor eget dolor morbi non. Purus in
                                        massa tempor nec.
                                    </p>
                                    <p />
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
                                        Facilisis gravida neque convallis a cras semper auctor. Condimentum mattis
                                        pellentesque id nibh tortor. Tortor at auctor urna nunc id. Facilisi nullam
                                        vehicula ipsum a arcu cursus vitae congue mauris. Adipiscing at in tellus
                                        integer feugiat scelerisque varius. Amet volutpat consequat mauris nunc congue
                                        nisi vitae suscipit tellus. Quisque sagittis purus sit amet. Neque egestas
                                        congue quisque egestas diam. Tincidunt lobortis feugiat vivamus at augue eget
                                        arcu. Dolor purus non enim praesent. Odio euismod lacinia at quis risus sed
                                        vulputate odio ut. Tempor id eu nisl nunc mi ipsum. Quam elementum pulvinar
                                        etiam non quam lacus suspendisse faucibus. Quam lacus suspendisse faucibus
                                        interdum. Eu nisl nunc mi ipsum faucibus vitae. Aliquet risus feugiat in ante.
                                        Quam vulputate dignissim suspendisse in est ante in nibh.
                                    </p>
                                    <p>
                                        Donec et odio pellentesque diam volutpat commodo. Lorem dolor sed viverra ipsum
                                        nunc aliquet bibendum enim facilisis. Proin nibh nisl condimentum id venenatis a
                                        condimentum. Nulla at volutpat diam ut. Metus aliquam eleifend mi in nulla
                                        posuere sollicitudin aliquam. Egestas quis ipsum suspendisse ultrices gravida
                                        dictum fusce. Dolor purus non enim praesent elementum facilisis leo vel
                                        fringilla. Nisi lacus sed viverra tellus in. Pulvinar mattis nunc sed blandit
                                        libero volutpat sed cras ornare. Metus vulputate eu scelerisque felis. Posuere
                                        ac ut consequat semper viverra nam libero justo laoreet. Viverra aliquet eget
                                        sit amet tellus cras.
                                    </p>
                                    <p>
                                        Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Dui nunc
                                        mattis enim ut tellus elementum sagittis. Cursus turpis massa tincidunt dui.
                                        Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Ipsum
                                        suspendisse ultrices gravida dictum fusce ut. In hendrerit gravida rutrum
                                        quisque non tellus orci. Sed risus pretium quam vulputate dignissim. Sociis
                                        natoque penatibus et magnis dis. Nec ultrices dui sapien eget mi proin sed
                                        libero. Tempus egestas sed sed risus pretium quam vulputate dignissim. In
                                        fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Sed lectus
                                        vestibulum mattis ullamcorper velit sed ullamcorper morbi. Risus pretium quam
                                        vulputate dignissim. Dictum varius duis at consectetur lorem donec massa sapien
                                        faucibus. Dolor sit amet consectetur adipiscing. Egestas erat imperdiet sed
                                        euismod. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue.
                                    </p>
                                    <p>
                                        Commodo nulla facilisi nullam vehicula ipsum. Ultrices dui sapien eget mi. Sed
                                        risus ultricies tristique nulla aliquet enim tortor. Vestibulum morbi blandit
                                        cursus risus. Lobortis scelerisque fermentum dui faucibus in. Mauris rhoncus
                                        aenean vel elit. Sociis natoque penatibus et magnis dis parturient montes
                                        nascetur ridiculus. Fermentum et sollicitudin ac orci phasellus. Lacus
                                        vestibulum sed arcu non odio. Morbi enim nunc faucibus a pellentesque sit amet
                                        porttitor. A pellentesque sit amet porttitor eget dolor morbi non. Purus in
                                        massa tempor nec.
                                    </p>
                                    <p />
                                </div>
                            </vl-step>
                            <vl-step data-cy="step-3">
                                <span slot="identifier">3</span>
                                <span id="vl-steps-4-step-3" slot="title">Step 3: action</span>
                                <div slot="content">
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
                                        Facilisis gravida neque convallis a cras semper auctor. Condimentum mattis
                                        pellentesque id nibh tortor. Tortor at auctor urna nunc id. Facilisi nullam
                                        vehicula ipsum a arcu cursus vitae congue mauris. Adipiscing at in tellus
                                        integer feugiat scelerisque varius. Amet volutpat consequat mauris nunc congue
                                        nisi vitae suscipit tellus. Quisque sagittis purus sit amet. Neque egestas
                                        congue quisque egestas diam. Tincidunt lobortis feugiat vivamus at augue eget
                                        arcu. Dolor purus non enim praesent. Odio euismod lacinia at quis risus sed
                                        vulputate odio ut. Tempor id eu nisl nunc mi ipsum. Quam elementum pulvinar
                                        etiam non quam lacus suspendisse faucibus. Quam lacus suspendisse faucibus
                                        interdum. Eu nisl nunc mi ipsum faucibus vitae. Aliquet risus feugiat in ante.
                                        Quam vulputate dignissim suspendisse in est ante in nibh.
                                    </p>
                                    <p>
                                        Donec et odio pellentesque diam volutpat commodo. Lorem dolor sed viverra ipsum
                                        nunc aliquet bibendum enim facilisis. Proin nibh nisl condimentum id venenatis a
                                        condimentum. Nulla at volutpat diam ut. Metus aliquam eleifend mi in nulla
                                        posuere sollicitudin aliquam. Egestas quis ipsum suspendisse ultrices gravida
                                        dictum fusce. Dolor purus non enim praesent elementum facilisis leo vel
                                        fringilla. Nisi lacus sed viverra tellus in. Pulvinar mattis nunc sed blandit
                                        libero volutpat sed cras ornare. Metus vulputate eu scelerisque felis. Posuere
                                        ac ut consequat semper viverra nam libero justo laoreet. Viverra aliquet eget
                                        sit amet tellus cras.
                                    </p>
                                    <p>
                                        Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Dui nunc
                                        mattis enim ut tellus elementum sagittis. Cursus turpis massa tincidunt dui.
                                        Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Ipsum
                                        suspendisse ultrices gravida dictum fusce ut. In hendrerit gravida rutrum
                                        quisque non tellus orci. Sed risus pretium quam vulputate dignissim. Sociis
                                        natoque penatibus et magnis dis. Nec ultrices dui sapien eget mi proin sed
                                        libero. Tempus egestas sed sed risus pretium quam vulputate dignissim. In
                                        fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Sed lectus
                                        vestibulum mattis ullamcorper velit sed ullamcorper morbi. Risus pretium quam
                                        vulputate dignissim. Dictum varius duis at consectetur lorem donec massa sapien
                                        faucibus. Dolor sit amet consectetur adipiscing. Egestas erat imperdiet sed
                                        euismod. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue.
                                    </p>
                                    <p>
                                        Commodo nulla facilisi nullam vehicula ipsum. Ultrices dui sapien eget mi. Sed
                                        risus ultricies tristique nulla aliquet enim tortor. Vestibulum morbi blandit
                                        cursus risus. Lobortis scelerisque fermentum dui faucibus in. Mauris rhoncus
                                        aenean vel elit. Sociis natoque penatibus et magnis dis parturient montes
                                        nascetur ridiculus. Fermentum et sollicitudin ac orci phasellus. Lacus
                                        vestibulum sed arcu non odio. Morbi enim nunc faucibus a pellentesque sit amet
                                        porttitor. A pellentesque sit amet porttitor eget dolor morbi non. Purus in
                                        massa tempor nec.
                                    </p>
                                    <p />
                                </div>
                            </vl-step>
                        </vl-steps>
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
                                    <a is="vl-side-navigation-toggle" href="#vl-steps-4-step-1">
                                        step 1
                                        <i class="vl-vi vl-vi-arrow-right-fat"></i>
                                    </a>
                                </li>
                                <li is="vl-side-navigation-item" data-vl-parent="step-2">
                                    <a is="vl-side-navigation-toggle" href="#vl-steps-4-step-2" data-vl-child="step-2">
                                        step 2
                                        <i class="vl-vi vl-vi-arrow-right-fat"></i>
                                    </a>
                                    <ul>
                                        <li is="vl-side-navigation-item">
                                            <div>
                                                <a href="#vl-steps-4-step-2-abstract" data-vl-parent="step-2"
                                                    >Abstract</a
                                                >
                                            </div>
                                        </li>
                                        <li is="vl-side-navigation-item">
                                            <div>
                                                <a href="#vl-steps-4-step-2-volledig" data-vl-parent="step-2"
                                                    >Volledig</a
                                                >
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li is="vl-side-navigation-item">
                                    <a is="vl-side-navigation-toggle" href="#vl-steps-4-step-3">
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
`;y.storyName="vl-steps - with vl-side-navigation",q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:'({\n  timeline\n}: typeof stepsArgs) => html`\n    <vl-steps id="vl-steps-1" ?data-vl-timeline=${timeline} data-cy="steps">\n        <vl-step data-cy="step-1">\n            <span slot="identifier">1</span>\n            <span slot="title">Step 1: action</span>\n            <span slot="sub-title">This is a subtitle.</span>\n        </vl-step>\n        <vl-step disabled="" data-cy="step-2">\n            <span slot="identifier">2</span>\n            <span slot="title">Step 2: action</span>\n            <span slot="sub-title">This is a subtitle.</span>\n        </vl-step>\n        <vl-step type="success" data-cy="step-3">\n            <span slot="identifier">3</span>\n            <span slot="title">Step 3: action</span>\n            <span slot="sub-title">This is a subtitle.</span>\n        </vl-step>\n        <vl-step type="warning" data-cy="step-4">\n            <span slot="identifier">4</span>\n            <span slot="title">Step 4: action</span>\n            <span slot="sub-title">This is a subtitle.</span>\n        </vl-step>\n        <vl-step type="error" data-cy="step-5">\n            <span slot="identifier">5</span>\n            <span slot="title">Step 5: action</span>\n            <span slot="sub-title">This is a subtitle.</span>\n        </vl-step>\n    </vl-steps>\n`',...q.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:'({\n  timeline\n}: typeof stepsArgs) => html`\n    <vl-steps id="vl-steps-2" ?data-vl-timeline=${timeline} data-cy="steps-with-accordions">\n        <vl-step data-vl-disabled="">\n            <span slot="identifier">0</span>\n            <span slot="title">Six centuries ago</span>\n            <span slot="sub-title">The last visitor from earth entered my world.</span>\n            <span slot="content"> Now, it\'s your turn to feel that pain. The gates are open. </span>\n        </vl-step>\n        <vl-step data-vl-toggleable="" data-cy="toggable-step-1">\n            <span slot="identifier">1</span>\n            <span slot="title">Gate 1</span>\n            <span slot="content"> Darkness, the world of demons. Look around you, they\'re everywhere. </span>\n        </vl-step>\n        <vl-step data-vl-toggleable="" data-cy="toggable-step-2">\n            <span slot="identifier">2</span>\n            <span slot="title">Gate 2</span>\n            <span slot="content"> My guards are watching you. </span>\n        </vl-step>\n        <vl-step data-vl-toggleable="" data-cy="toggable-step-3">\n            <span slot="identifier">3</span>\n            <span slot="title">Gate 3</span>\n            <span slot="content"> Only evil lives here. </span>\n        </vl-step>\n        <vl-step data-vl-toggleable="" data-cy="toggable-step-4">\n            <span slot="identifier">4</span>\n            <span slot="title">Gate 4</span>\n            <span slot="content"> There\'s no way out. </span>\n        </vl-step>\n        <vl-step data-vl-toggleable="" data-cy="toggable-step-5">\n            <span slot="identifier">5</span>\n            <span slot="title">Gate 5</span>\n            <span slot="content"> Feel the fire. </span>\n        </vl-step>\n    </vl-steps>\n`',...f.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:'() => html`\n    <vl-steps id="vl-steps-3" data-vl-timeline data-cy="steps-with-timeline">\n        <vl-step data-cy="timeline-step-1">\n            <span slot="identifier">2</span>\n            <span slot="identifier-annotation">maa</span>\n            <span slot="title">Central Station</span>\n            <span slot="title-annotation">13u00 - 15u00</span>\n            <span slot="sub-title">The most beautiful train station in the world</span>\n            <span slot="content">\n                The Antwerp Central Station, chosen by DK magazine as the most beautiful manmade object, is the perfect\n                starting point for any trip to Antwerp. The Central Station has been drawn by Da Vinci himself in 200 BC\n                and built by 10 000 laborers from all over the world. <br />\n                Described by Caesar as the bravest building of all buildings, the unique architecture is perfectly\n                maintained and keeps dazzling archaeologists.\n            </span>\n        </vl-step>\n        <vl-duration-step data-cy="timeline-duration-step-1"> Vrije tijd: 1 uur</vl-duration-step>\n        <vl-step data-cy="timeline-step-2">\n            <span slot="identifier">3</span>\n            <span slot="identifier-annotation">maa</span>\n            <span slot="title">The Botanical Gardens</span>\n            <span slot="sub-title">A green oasis in a bustling city</span>\n            <span slot="content">\n                The Royal Botanical Gardens in Antwerp is a massive botanical garden in the center of the city. These\n                gardens are ideal to stroll around, take a breather from everyday life or go for a leisurly walk, all of\n                this on less than 500m from the city center.\n            </span>\n        </vl-step>\n        <vl-duration-step data-cy="timeline-duration-step-2"> Vrije tijd: 2 uur</vl-duration-step>\n        <vl-step data-vl-disabled="" data-cy="timeline-step-3">\n            <span slot="identifier">3</span>\n            <span slot="identifier-annotation">maa</span>\n            <span slot="title">Bike ride</span>\n            <span slot="title-annotation">22u00 - 23u00</span>\n            <span slot="sub-title">Linkeroever</span>\n            <span slot="content"> This activity is canceled. </span>\n        </vl-step>\n        <vl-step data-vl-type="success" data-cy="timeline-step-4">\n            <span slot="identifier">3</span>\n            <span slot="identifier-annotation">maa</span>\n            <span slot="title">Bike ride</span>\n            <span slot="title-annotation">22u00 - 23u00</span>\n            <span slot="sub-title">Linkeroever</span>\n            <span slot="content"> This activity is new! </span>\n        </vl-step>\n        <vl-step data-vl-type="warning" data-cy="timeline-step-5">\n            <span slot="identifier">3</span>\n            <span slot="identifier-annotation">maa</span>\n            <span slot="title">Bike ride</span>\n            <span slot="title-annotation">22u00 - 23u00</span>\n            <span slot="sub-title">Linkeroever</span>\n            <span slot="content"> This activity is almost fully booked. </span>\n        </vl-step>\n        <vl-step data-vl-type="error" data-cy="timeline-step-6">\n            <span slot="identifier">3</span>\n            <span slot="identifier-annotation">maa</span>\n            <span slot="title">Bike ride</span>\n            <span slot="title-annotation">22u00 - 23u00</span>\n            <span slot="sub-title">Linkeroever</span>\n            <span slot="content"> This activity is canceled. </span>\n        </vl-step>\n    </vl-steps>\n`',...h.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:'({\n  timeline\n}: typeof stepsArgs) => html`\n    <section is="vl-region">\n        <div is="vl-layout">\n            <div is="vl-grid" data-vl-is-stacked>\n                <div\n                    is="vl-column"\n                    data-vl-size="8"\n                    data-vl-medium-size="8"\n                    data-vl-small-size="8"\n                    data-vl-extra-small-size="12"\n                >\n                    <div is="vl-side-navigation-reference">\n                        <vl-steps id="vl-steps-4" ?data-vl-timeline=${timeline} data-cy="steps-with-side-navigation">\n                            <vl-step data-cy="step-1">\n                                <span slot="identifier">1</span>\n                                <span id="vl-steps-4-step-1" slot="title">Step 1: action</span>\n                                <div slot="content">\n                                    <p>\n                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus\n                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada\n                                        nunc vel risus commodo viverra maecenas accumsan lacus. Pretium lectus quam id\n                                        leo in vitae. Dictum at tempor commodo ullamcorper a lacus. Facilisis gravida\n                                        neque convallis a cras. Ut porttitor leo a diam sollicitudin tempor. Augue ut\n                                        lectus arcu bibendum at varius vel pharetra vel. Fames ac turpis egestas\n                                        maecenas pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                        Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac felis\n                                        donec. Elit pellentesque habitant morbi tristique senectus et netus et.\n                                        Tristique et egestas quis ipsum suspendisse ultrices gravida. Tortor consequat\n                                        id porta nibh venenatis cras.\n                                    </p>\n                                    <p>\n                                        Facilisis gravida neque convallis a cras semper auctor. Condimentum mattis\n                                        pellentesque id nibh tortor. Tortor at auctor urna nunc id. Facilisi nullam\n                                        vehicula ipsum a arcu cursus vitae congue mauris. Adipiscing at in tellus\n                                        integer feugiat scelerisque varius. Amet volutpat consequat mauris nunc congue\n                                        nisi vitae suscipit tellus. Quisque sagittis purus sit amet. Neque egestas\n                                        congue quisque egestas diam. Tincidunt lobortis feugiat vivamus at augue eget\n                                        arcu. Dolor purus non enim praesent. Odio euismod lacinia at quis risus sed\n                                        vulputate odio ut. Tempor id eu nisl nunc mi ipsum. Quam elementum pulvinar\n                                        etiam non quam lacus suspendisse faucibus. Quam lacus suspendisse faucibus\n                                        interdum. Eu nisl nunc mi ipsum faucibus vitae. Aliquet risus feugiat in ante.\n                                        Quam vulputate dignissim suspendisse in est ante in nibh.\n                                    </p>\n                                    <p>\n                                        Donec et odio pellentesque diam volutpat commodo. Lorem dolor sed viverra ipsum\n                                        nunc aliquet bibendum enim facilisis. Proin nibh nisl condimentum id venenatis a\n                                        condimentum. Nulla at volutpat diam ut. Metus aliquam eleifend mi in nulla\n                                        posuere sollicitudin aliquam. Egestas quis ipsum suspendisse ultrices gravida\n                                        dictum fusce. Dolor purus non enim praesent elementum facilisis leo vel\n                                        fringilla. Nisi lacus sed viverra tellus in. Pulvinar mattis nunc sed blandit\n                                        libero volutpat sed cras ornare. Metus vulputate eu scelerisque felis. Posuere\n                                        ac ut consequat semper viverra nam libero justo laoreet. Viverra aliquet eget\n                                        sit amet tellus cras.\n                                    </p>\n                                    <p>\n                                        Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Dui nunc\n                                        mattis enim ut tellus elementum sagittis. Cursus turpis massa tincidunt dui.\n                                        Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Ipsum\n                                        suspendisse ultrices gravida dictum fusce ut. In hendrerit gravida rutrum\n                                        quisque non tellus orci. Sed risus pretium quam vulputate dignissim. Sociis\n                                        natoque penatibus et magnis dis. Nec ultrices dui sapien eget mi proin sed\n                                        libero. Tempus egestas sed sed risus pretium quam vulputate dignissim. In\n                                        fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Sed lectus\n                                        vestibulum mattis ullamcorper velit sed ullamcorper morbi. Risus pretium quam\n                                        vulputate dignissim. Dictum varius duis at consectetur lorem donec massa sapien\n                                        faucibus. Dolor sit amet consectetur adipiscing. Egestas erat imperdiet sed\n                                        euismod. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue.\n                                    </p>\n                                    <p>\n                                        Commodo nulla facilisi nullam vehicula ipsum. Ultrices dui sapien eget mi. Sed\n                                        risus ultricies tristique nulla aliquet enim tortor. Vestibulum morbi blandit\n                                        cursus risus. Lobortis scelerisque fermentum dui faucibus in. Mauris rhoncus\n                                        aenean vel elit. Sociis natoque penatibus et magnis dis parturient montes\n                                        nascetur ridiculus. Fermentum et sollicitudin ac orci phasellus. Lacus\n                                        vestibulum sed arcu non odio. Morbi enim nunc faucibus a pellentesque sit amet\n                                        porttitor. A pellentesque sit amet porttitor eget dolor morbi non. Purus in\n                                        massa tempor nec.\n                                    </p>\n                                    <p />\n                                </div>\n                            </vl-step>\n                            <vl-step data-cy="step-2">\n                                <span slot="identifier">2</span>\n                                <span id="vl-steps-4-step-2" slot="title">Step 2: action</span>\n                                <div slot="content">\n                                    <h3 id="vl-steps-4-step-2-abstract" data-cy="step-2-abstract">Abstract</h3>\n                                    <p>\n                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus\n                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada\n                                        nunc vel risus commodo viverra maecenas accumsan lacus. Pretium lectus quam id\n                                        leo in vitae. Dictum at tempor commodo ullamcorper a lacus. Facilisis gravida\n                                        neque convallis a cras. Ut porttitor leo a diam sollicitudin tempor. Augue ut\n                                        lectus arcu bibendum at varius vel pharetra vel. Fames ac turpis egestas\n                                        maecenas pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                        Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac felis\n                                        donec. Elit pellentesque habitant morbi tristique senectus et netus et.\n                                        Tristique et egestas quis ipsum suspendisse ultrices gravida. Tortor consequat\n                                        id porta nibh venenatis cras.\n                                    </p>\n                                    <p>\n                                        Facilisis gravida neque convallis a cras semper auctor. Condimentum mattis\n                                        pellentesque id nibh tortor. Tortor at auctor urna nunc id. Facilisi nullam\n                                        vehicula ipsum a arcu cursus vitae congue mauris. Adipiscing at in tellus\n                                        integer feugiat scelerisque varius. Amet volutpat consequat mauris nunc congue\n                                        nisi vitae suscipit tellus. Quisque sagittis purus sit amet. Neque egestas\n                                        congue quisque egestas diam. Tincidunt lobortis feugiat vivamus at augue eget\n                                        arcu. Dolor purus non enim praesent. Odio euismod lacinia at quis risus sed\n                                        vulputate odio ut. Tempor id eu nisl nunc mi ipsum. Quam elementum pulvinar\n                                        etiam non quam lacus suspendisse faucibus. Quam lacus suspendisse faucibus\n                                        interdum. Eu nisl nunc mi ipsum faucibus vitae. Aliquet risus feugiat in ante.\n                                        Quam vulputate dignissim suspendisse in est ante in nibh.\n                                    </p>\n                                    <p>\n                                        Donec et odio pellentesque diam volutpat commodo. Lorem dolor sed viverra ipsum\n                                        nunc aliquet bibendum enim facilisis. Proin nibh nisl condimentum id venenatis a\n                                        condimentum. Nulla at volutpat diam ut. Metus aliquam eleifend mi in nulla\n                                        posuere sollicitudin aliquam. Egestas quis ipsum suspendisse ultrices gravida\n                                        dictum fusce. Dolor purus non enim praesent elementum facilisis leo vel\n                                        fringilla. Nisi lacus sed viverra tellus in. Pulvinar mattis nunc sed blandit\n                                        libero volutpat sed cras ornare. Metus vulputate eu scelerisque felis. Posuere\n                                        ac ut consequat semper viverra nam libero justo laoreet. Viverra aliquet eget\n                                        sit amet tellus cras.\n                                    </p>\n                                    <p>\n                                        Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Dui nunc\n                                        mattis enim ut tellus elementum sagittis. Cursus turpis massa tincidunt dui.\n                                        Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Ipsum\n                                        suspendisse ultrices gravida dictum fusce ut. In hendrerit gravida rutrum\n                                        quisque non tellus orci. Sed risus pretium quam vulputate dignissim. Sociis\n                                        natoque penatibus et magnis dis. Nec ultrices dui sapien eget mi proin sed\n                                        libero. Tempus egestas sed sed risus pretium quam vulputate dignissim. In\n                                        fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Sed lectus\n                                        vestibulum mattis ullamcorper velit sed ullamcorper morbi. Risus pretium quam\n                                        vulputate dignissim. Dictum varius duis at consectetur lorem donec massa sapien\n                                        faucibus. Dolor sit amet consectetur adipiscing. Egestas erat imperdiet sed\n                                        euismod. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue.\n                                    </p>\n                                    <p>\n                                        Commodo nulla facilisi nullam vehicula ipsum. Ultrices dui sapien eget mi. Sed\n                                        risus ultricies tristique nulla aliquet enim tortor. Vestibulum morbi blandit\n                                        cursus risus. Lobortis scelerisque fermentum dui faucibus in. Mauris rhoncus\n                                        aenean vel elit. Sociis natoque penatibus et magnis dis parturient montes\n                                        nascetur ridiculus. Fermentum et sollicitudin ac orci phasellus. Lacus\n                                        vestibulum sed arcu non odio. Morbi enim nunc faucibus a pellentesque sit amet\n                                        porttitor. A pellentesque sit amet porttitor eget dolor morbi non. Purus in\n                                        massa tempor nec.\n                                    </p>\n                                    <p />\n\n                                    <h3 id="vl-steps-4-step-2-volledig" data-cy="step-2-volledig">Volledig</h3>\n                                    <p>\n                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus\n                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada\n                                        nunc vel risus commodo viverra maecenas accumsan lacus. Pretium lectus quam id\n                                        leo in vitae. Dictum at tempor commodo ullamcorper a lacus. Facilisis gravida\n                                        neque convallis a cras. Ut porttitor leo a diam sollicitudin tempor. Augue ut\n                                        lectus arcu bibendum at varius vel pharetra vel. Fames ac turpis egestas\n                                        maecenas pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                        Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac felis\n                                        donec. Elit pellentesque habitant morbi tristique senectus et netus et.\n                                        Tristique et egestas quis ipsum suspendisse ultrices gravida. Tortor consequat\n                                        id porta nibh venenatis cras.\n                                    </p>\n                                    <p>\n                                        Facilisis gravida neque convallis a cras semper auctor. Condimentum mattis\n                                        pellentesque id nibh tortor. Tortor at auctor urna nunc id. Facilisi nullam\n                                        vehicula ipsum a arcu cursus vitae congue mauris. Adipiscing at in tellus\n                                        integer feugiat scelerisque varius. Amet volutpat consequat mauris nunc congue\n                                        nisi vitae suscipit tellus. Quisque sagittis purus sit amet. Neque egestas\n                                        congue quisque egestas diam. Tincidunt lobortis feugiat vivamus at augue eget\n                                        arcu. Dolor purus non enim praesent. Odio euismod lacinia at quis risus sed\n                                        vulputate odio ut. Tempor id eu nisl nunc mi ipsum. Quam elementum pulvinar\n                                        etiam non quam lacus suspendisse faucibus. Quam lacus suspendisse faucibus\n                                        interdum. Eu nisl nunc mi ipsum faucibus vitae. Aliquet risus feugiat in ante.\n                                        Quam vulputate dignissim suspendisse in est ante in nibh.\n                                    </p>\n                                    <p>\n                                        Donec et odio pellentesque diam volutpat commodo. Lorem dolor sed viverra ipsum\n                                        nunc aliquet bibendum enim facilisis. Proin nibh nisl condimentum id venenatis a\n                                        condimentum. Nulla at volutpat diam ut. Metus aliquam eleifend mi in nulla\n                                        posuere sollicitudin aliquam. Egestas quis ipsum suspendisse ultrices gravida\n                                        dictum fusce. Dolor purus non enim praesent elementum facilisis leo vel\n                                        fringilla. Nisi lacus sed viverra tellus in. Pulvinar mattis nunc sed blandit\n                                        libero volutpat sed cras ornare. Metus vulputate eu scelerisque felis. Posuere\n                                        ac ut consequat semper viverra nam libero justo laoreet. Viverra aliquet eget\n                                        sit amet tellus cras.\n                                    </p>\n                                    <p>\n                                        Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Dui nunc\n                                        mattis enim ut tellus elementum sagittis. Cursus turpis massa tincidunt dui.\n                                        Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Ipsum\n                                        suspendisse ultrices gravida dictum fusce ut. In hendrerit gravida rutrum\n                                        quisque non tellus orci. Sed risus pretium quam vulputate dignissim. Sociis\n                                        natoque penatibus et magnis dis. Nec ultrices dui sapien eget mi proin sed\n                                        libero. Tempus egestas sed sed risus pretium quam vulputate dignissim. In\n                                        fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Sed lectus\n                                        vestibulum mattis ullamcorper velit sed ullamcorper morbi. Risus pretium quam\n                                        vulputate dignissim. Dictum varius duis at consectetur lorem donec massa sapien\n                                        faucibus. Dolor sit amet consectetur adipiscing. Egestas erat imperdiet sed\n                                        euismod. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue.\n                                    </p>\n                                    <p>\n                                        Commodo nulla facilisi nullam vehicula ipsum. Ultrices dui sapien eget mi. Sed\n                                        risus ultricies tristique nulla aliquet enim tortor. Vestibulum morbi blandit\n                                        cursus risus. Lobortis scelerisque fermentum dui faucibus in. Mauris rhoncus\n                                        aenean vel elit. Sociis natoque penatibus et magnis dis parturient montes\n                                        nascetur ridiculus. Fermentum et sollicitudin ac orci phasellus. Lacus\n                                        vestibulum sed arcu non odio. Morbi enim nunc faucibus a pellentesque sit amet\n                                        porttitor. A pellentesque sit amet porttitor eget dolor morbi non. Purus in\n                                        massa tempor nec.\n                                    </p>\n                                    <p />\n                                    <p>\n                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus\n                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada\n                                        nunc vel risus commodo viverra maecenas accumsan lacus. Pretium lectus quam id\n                                        leo in vitae. Dictum at tempor commodo ullamcorper a lacus. Facilisis gravida\n                                        neque convallis a cras. Ut porttitor leo a diam sollicitudin tempor. Augue ut\n                                        lectus arcu bibendum at varius vel pharetra vel. Fames ac turpis egestas\n                                        maecenas pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                        Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac felis\n                                        donec. Elit pellentesque habitant morbi tristique senectus et netus et.\n                                        Tristique et egestas quis ipsum suspendisse ultrices gravida. Tortor consequat\n                                        id porta nibh venenatis cras.\n                                    </p>\n                                    <p>\n                                        Facilisis gravida neque convallis a cras semper auctor. Condimentum mattis\n                                        pellentesque id nibh tortor. Tortor at auctor urna nunc id. Facilisi nullam\n                                        vehicula ipsum a arcu cursus vitae congue mauris. Adipiscing at in tellus\n                                        integer feugiat scelerisque varius. Amet volutpat consequat mauris nunc congue\n                                        nisi vitae suscipit tellus. Quisque sagittis purus sit amet. Neque egestas\n                                        congue quisque egestas diam. Tincidunt lobortis feugiat vivamus at augue eget\n                                        arcu. Dolor purus non enim praesent. Odio euismod lacinia at quis risus sed\n                                        vulputate odio ut. Tempor id eu nisl nunc mi ipsum. Quam elementum pulvinar\n                                        etiam non quam lacus suspendisse faucibus. Quam lacus suspendisse faucibus\n                                        interdum. Eu nisl nunc mi ipsum faucibus vitae. Aliquet risus feugiat in ante.\n                                        Quam vulputate dignissim suspendisse in est ante in nibh.\n                                    </p>\n                                    <p>\n                                        Donec et odio pellentesque diam volutpat commodo. Lorem dolor sed viverra ipsum\n                                        nunc aliquet bibendum enim facilisis. Proin nibh nisl condimentum id venenatis a\n                                        condimentum. Nulla at volutpat diam ut. Metus aliquam eleifend mi in nulla\n                                        posuere sollicitudin aliquam. Egestas quis ipsum suspendisse ultrices gravida\n                                        dictum fusce. Dolor purus non enim praesent elementum facilisis leo vel\n                                        fringilla. Nisi lacus sed viverra tellus in. Pulvinar mattis nunc sed blandit\n                                        libero volutpat sed cras ornare. Metus vulputate eu scelerisque felis. Posuere\n                                        ac ut consequat semper viverra nam libero justo laoreet. Viverra aliquet eget\n                                        sit amet tellus cras.\n                                    </p>\n                                    <p>\n                                        Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Dui nunc\n                                        mattis enim ut tellus elementum sagittis. Cursus turpis massa tincidunt dui.\n                                        Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Ipsum\n                                        suspendisse ultrices gravida dictum fusce ut. In hendrerit gravida rutrum\n                                        quisque non tellus orci. Sed risus pretium quam vulputate dignissim. Sociis\n                                        natoque penatibus et magnis dis. Nec ultrices dui sapien eget mi proin sed\n                                        libero. Tempus egestas sed sed risus pretium quam vulputate dignissim. In\n                                        fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Sed lectus\n                                        vestibulum mattis ullamcorper velit sed ullamcorper morbi. Risus pretium quam\n                                        vulputate dignissim. Dictum varius duis at consectetur lorem donec massa sapien\n                                        faucibus. Dolor sit amet consectetur adipiscing. Egestas erat imperdiet sed\n                                        euismod. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue.\n                                    </p>\n                                    <p>\n                                        Commodo nulla facilisi nullam vehicula ipsum. Ultrices dui sapien eget mi. Sed\n                                        risus ultricies tristique nulla aliquet enim tortor. Vestibulum morbi blandit\n                                        cursus risus. Lobortis scelerisque fermentum dui faucibus in. Mauris rhoncus\n                                        aenean vel elit. Sociis natoque penatibus et magnis dis parturient montes\n                                        nascetur ridiculus. Fermentum et sollicitudin ac orci phasellus. Lacus\n                                        vestibulum sed arcu non odio. Morbi enim nunc faucibus a pellentesque sit amet\n                                        porttitor. A pellentesque sit amet porttitor eget dolor morbi non. Purus in\n                                        massa tempor nec.\n                                    </p>\n                                    <p />\n                                </div>\n                            </vl-step>\n                            <vl-step data-cy="step-3">\n                                <span slot="identifier">3</span>\n                                <span id="vl-steps-4-step-3" slot="title">Step 3: action</span>\n                                <div slot="content">\n                                    <p>\n                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus\n                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada\n                                        nunc vel risus commodo viverra maecenas accumsan lacus. Pretium lectus quam id\n                                        leo in vitae. Dictum at tempor commodo ullamcorper a lacus. Facilisis gravida\n                                        neque convallis a cras. Ut porttitor leo a diam sollicitudin tempor. Augue ut\n                                        lectus arcu bibendum at varius vel pharetra vel. Fames ac turpis egestas\n                                        maecenas pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                        Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac felis\n                                        donec. Elit pellentesque habitant morbi tristique senectus et netus et.\n                                        Tristique et egestas quis ipsum suspendisse ultrices gravida. Tortor consequat\n                                        id porta nibh venenatis cras.\n                                    </p>\n                                    <p>\n                                        Facilisis gravida neque convallis a cras semper auctor. Condimentum mattis\n                                        pellentesque id nibh tortor. Tortor at auctor urna nunc id. Facilisi nullam\n                                        vehicula ipsum a arcu cursus vitae congue mauris. Adipiscing at in tellus\n                                        integer feugiat scelerisque varius. Amet volutpat consequat mauris nunc congue\n                                        nisi vitae suscipit tellus. Quisque sagittis purus sit amet. Neque egestas\n                                        congue quisque egestas diam. Tincidunt lobortis feugiat vivamus at augue eget\n                                        arcu. Dolor purus non enim praesent. Odio euismod lacinia at quis risus sed\n                                        vulputate odio ut. Tempor id eu nisl nunc mi ipsum. Quam elementum pulvinar\n                                        etiam non quam lacus suspendisse faucibus. Quam lacus suspendisse faucibus\n                                        interdum. Eu nisl nunc mi ipsum faucibus vitae. Aliquet risus feugiat in ante.\n                                        Quam vulputate dignissim suspendisse in est ante in nibh.\n                                    </p>\n                                    <p>\n                                        Donec et odio pellentesque diam volutpat commodo. Lorem dolor sed viverra ipsum\n                                        nunc aliquet bibendum enim facilisis. Proin nibh nisl condimentum id venenatis a\n                                        condimentum. Nulla at volutpat diam ut. Metus aliquam eleifend mi in nulla\n                                        posuere sollicitudin aliquam. Egestas quis ipsum suspendisse ultrices gravida\n                                        dictum fusce. Dolor purus non enim praesent elementum facilisis leo vel\n                                        fringilla. Nisi lacus sed viverra tellus in. Pulvinar mattis nunc sed blandit\n                                        libero volutpat sed cras ornare. Metus vulputate eu scelerisque felis. Posuere\n                                        ac ut consequat semper viverra nam libero justo laoreet. Viverra aliquet eget\n                                        sit amet tellus cras.\n                                    </p>\n                                    <p>\n                                        Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Dui nunc\n                                        mattis enim ut tellus elementum sagittis. Cursus turpis massa tincidunt dui.\n                                        Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Ipsum\n                                        suspendisse ultrices gravida dictum fusce ut. In hendrerit gravida rutrum\n                                        quisque non tellus orci. Sed risus pretium quam vulputate dignissim. Sociis\n                                        natoque penatibus et magnis dis. Nec ultrices dui sapien eget mi proin sed\n                                        libero. Tempus egestas sed sed risus pretium quam vulputate dignissim. In\n                                        fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Sed lectus\n                                        vestibulum mattis ullamcorper velit sed ullamcorper morbi. Risus pretium quam\n                                        vulputate dignissim. Dictum varius duis at consectetur lorem donec massa sapien\n                                        faucibus. Dolor sit amet consectetur adipiscing. Egestas erat imperdiet sed\n                                        euismod. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue.\n                                    </p>\n                                    <p>\n                                        Commodo nulla facilisi nullam vehicula ipsum. Ultrices dui sapien eget mi. Sed\n                                        risus ultricies tristique nulla aliquet enim tortor. Vestibulum morbi blandit\n                                        cursus risus. Lobortis scelerisque fermentum dui faucibus in. Mauris rhoncus\n                                        aenean vel elit. Sociis natoque penatibus et magnis dis parturient montes\n                                        nascetur ridiculus. Fermentum et sollicitudin ac orci phasellus. Lacus\n                                        vestibulum sed arcu non odio. Morbi enim nunc faucibus a pellentesque sit amet\n                                        porttitor. A pellentesque sit amet porttitor eget dolor morbi non. Purus in\n                                        massa tempor nec.\n                                    </p>\n                                    <p />\n                                </div>\n                            </vl-step>\n                        </vl-steps>\n                    </div>\n                </div>\n                <div\n                    is="vl-column"\n                    data-vl-size="3"\n                    data-vl-medium-size="3"\n                    data-vl-small-size="3"\n                    data-vl-extra-small-size="0"\n                >\n                    <nav is="vl-side-navigation" aria-label="inhoudsopgave">\n                        <h5 is="vl-side-navigation-h5">Op deze pagina</h5>\n                        <div is="vl-side-navigation-content">\n                            <ul is="vl-side-navigation-group">\n                                <li is="vl-side-navigation-item">\n                                    <a is="vl-side-navigation-toggle" href="#vl-steps-4-step-1">\n                                        step 1\n                                        <i class="vl-vi vl-vi-arrow-right-fat"></i>\n                                    </a>\n                                </li>\n                                <li is="vl-side-navigation-item" data-vl-parent="step-2">\n                                    <a is="vl-side-navigation-toggle" href="#vl-steps-4-step-2" data-vl-child="step-2">\n                                        step 2\n                                        <i class="vl-vi vl-vi-arrow-right-fat"></i>\n                                    </a>\n                                    <ul>\n                                        <li is="vl-side-navigation-item">\n                                            <div>\n                                                <a href="#vl-steps-4-step-2-abstract" data-vl-parent="step-2"\n                                                    >Abstract</a\n                                                >\n                                            </div>\n                                        </li>\n                                        <li is="vl-side-navigation-item">\n                                            <div>\n                                                <a href="#vl-steps-4-step-2-volledig" data-vl-parent="step-2"\n                                                    >Volledig</a\n                                                >\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </li>\n                                <li is="vl-side-navigation-item">\n                                    <a is="vl-side-navigation-toggle" href="#vl-steps-4-step-3">\n                                        step 3\n                                        <i class="vl-vi vl-vi-arrow-right-fat"></i>\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                    </nav>\n                </div>\n            </div>\n        </div>\n    </section>\n`',...y.parameters?.docs?.source}}};let S=["StepsDefault","StepsWithAccordions","StepsWithTimeline","StepsWithSideNavigation"]}}]);