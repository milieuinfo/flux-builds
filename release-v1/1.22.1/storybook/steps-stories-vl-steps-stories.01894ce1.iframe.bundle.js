(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[6903],{"./node_modules/@govflanders/vl-ui-accordion/dist/js/accordion.js":function(e){!function(t,i){e.exports=i()}("undefined"!=typeof self&&self,function(){"use strict";function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var t="js-".concat(vl.ns,"accordion"),i="".concat(t,"--open"),s="".concat(t,"__toggle"),n=".".concat(s,"__text"),a="".concat(vl.ns,"step--disabled"),u="".concat(vl.ns,"vi-plus"),l="".concat(vl.ns,"vi-minus"),o="".concat(vl.ns,"accordion__content"),r="data-".concat(vl.ns),c="".concat(r,"accordion"),d="".concat(c,"-dressed"),p="".concat(c,"-toggle"),m=function(){function r(){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,r)}return!function(t,i,s){i&&e(t.prototype,i),s&&e(t,s),Object.defineProperty(t,"prototype",{writable:!1})}(r,[{key:"_listenToHash",value:function(e){window.location.hash&&e.hasAttribute("id")&&"#".concat(e.getAttribute("id"))===window.location.hash&&this.open(e)}},{key:"open",value:function(e){var t=e.querySelector("[".concat(p,"]"));t&&!vl.util.hasClass(e,i)&&t.click()}},{key:"toggle",value:function(e){var t=e.querySelector("[".concat(p,"]"));t&&t.click()}},{key:"dress",value:function(e){var s,r,p,m,v=this,g=e.getAttribute("id")||vl.util.uniqueId(),b=!0;e.setAttribute(d,!0),s=e.querySelector(n),r=e.closest(".".concat(t,", [").concat(c,"]")).querySelector(".".concat(o)),vl.util.exists(r)&&r.setAttribute("aria-hidden",b),s?(p=s.dataset.vlAccordionCloseText,m=s.dataset.vlAccordionOpenText,vl.util.hasClass(e,i)?s.innerHTML=p:s.innerHTML=m,s.setAttribute("id",g)):e.setAttribute("aria-expanded",!1),e.addEventListener("click",function(n){var o=n.target.closest(".".concat(t,", [").concat(c,"]"));if(o&&!vl.util.hasClass(e,a)){n.preventDefault(),b=!b,vl.util.toggleClass(o,i),s||e.setAttribute("aria-expanded",!b);var d=new CustomEvent("vl.accordion.hook.onChange",{detail:!b,target:o}),p=e.querySelector(".vl-vi");o.dispatchEvent(d),p&&vl.util.hasClass(p,u)?(vl.util.removeClass(p,u),vl.util.addClass(p,l)):p&&vl.util.hasClass(p,l)&&(vl.util.removeClass(p,l),vl.util.addClass(p,u)),vl.util.exists(r)&&r.setAttribute("aria-hidden",b),s&&(vl.util.hasClass(o,i)?s.innerHTML=s.dataset.vlAccordionCloseText:s.innerHTML=s.dataset.vlAccordionOpenText)}},!1),this._listenToHash(e),window.addEventListener("hashchange",function(){v._listenToHash(e)})}},{key:"dressAll",value:function(){var e=this,i=document.querySelectorAll("\n      .".concat(t,':not([data-vl-js-dress="false"]) .').concat(s,":not([").concat(d,"]),\n      [").concat(c,"]:not([data-").concat(vl.ns,'js-dress="false"]) [').concat(p,"]:not([").concat(d,"])\n    "));vl.util.each(i,function(t){e.dress(t)})}}]),r}();return"accordion"in vl||(vl.accordion=new m,document.addEventListener("DOMContentLoaded",function(){vl.accordion.dressAll()})),m})},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(e,t,i)=>{"use strict";i.d(t,{NF:()=>a,Zo:()=>o,ah:()=>u,pC:()=>n});var s=i("./node_modules/react/index.js");let n=s.createContext({});function a(e){return function(t){let i=u(t.components);return s.createElement(e,{...t,allComponents:i})}}function u(e){let t=s.useContext(n);return s.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let l={};function o({components:e,children:t,disableParentContext:i}){let a;return a=i?"function"==typeof e?e({}):e||l:u(e),s.createElement(n.Provider,{value:a},t)}},"./libs/components/src/steps/stories/vl-steps.stories.ts":(e,t,i)=>{"use strict";i.r(t),i.d(t,{StepsDefault:()=>h,StepsWithAccordions:()=>f,StepsWithSideNavigation:()=>_,StepsWithTimeline:()=>q,__namedExportsOrder:()=>y,default:()=>b});var s=i("./libs/common/utilities/src/index.ts"),n=i("./libs/elements/src/index.ts"),a=i("./node_modules/lit-html/lit-html.js"),u=i("./libs/components/src/steps/vl-duration-step.component.ts"),l=i("./libs/components/src/steps/vl-step.component.ts"),o=i("./libs/components/src/steps/vl-steps.component.ts"),r=i("./libs/common/storybook/src/index.ts");let c={...r._O,timeline:!1},d={...(0,r.Wp)(),timeline:{name:"data-vl-timeline",description:"Attribuut wordt gebruikt om aan te geven dat de stappen een tijdlijn voorstellen.",table:{type:{summary:r.vK.BOOLEAN},category:"Attributes",defaultValue:{summary:!1}}}};i("./node_modules/react/index.js");var p=i("./node_modules/react/jsx-runtime.js"),m=i("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),v=i("./node_modules/@storybook/blocks/dist/index.mjs");function g(e){let t=Object.assign({h1:"h1",p:"p",strong:"strong",a:"a",code:"code",h2:"h2",pre:"pre",h3:"h3"},(0,m.ah)(),e.components);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(t.h1,{id:"steps",children:"Steps"}),"\n",(0,p.jsxs)(t.p,{children:["❗",(0,p.jsxs)(t.strong,{children:["DEPRECATED: gebruik de ",(0,p.jsx)(t.a,{href:"?path=/docs/components-next-steps-next--steps-default",children:"vl-steps-next"})," component"]}),"❗",(0,p.jsx)("br",{})]}),"\n",(0,p.jsx)("br",{}),"\n",(0,p.jsxs)(t.p,{children:["Gebruik de ",(0,p.jsx)(t.code,{children:"steps"})," component om een verticale lijst van stappen af te beelden om de gebruiker door een procedure te\nbegeleiden."]}),"\n",(0,p.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:"language-js",children:"import { VlStepsComponent } from '@domg-wc/components';\n"})}),"\n",(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:"language-html",children:"<vl-steps></vl-steps>\n"})}),"\n",(0,p.jsx)(t.h2,{id:"default",children:"Default"}),"\n",(0,p.jsx)(v.Xz,{of:h}),"\n",(0,p.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,p.jsx)(v.Ed,{of:h}),"\n",(0,p.jsx)(t.h2,{id:"varianten",children:"Varianten"}),"\n",(0,p.jsx)(t.h3,{id:"accordions",children:"Accordions"}),"\n",(0,p.jsx)(v.Xz,{of:f}),"\n",(0,p.jsx)(t.h3,{id:"tijdlijn",children:"Tijdlijn"}),"\n",(0,p.jsx)(v.Xz,{of:q}),"\n",(0,p.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,p.jsx)(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,p.jsx)(t.p,{children:(0,p.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-steps",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Steps"})}),"\n",(0,p.jsx)(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,p.jsx)(t.p,{children:(0,p.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/legacy-vl-steps--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Steps"})}),"\n",(0,p.jsx)(t.p,{children:(0,p.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlSteps.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Steps"})}),"\n",(0,p.jsx)(t.p,{children:(0,p.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-steps.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - Steps"})})]})}(0,s.YV)([u.Y,n.Tj,n.lb,n.oS,n.j6,n.EK,n.rL,n.xJ,l.a,o.N]);let b={title:"Components/steps",tags:["autodocs"],args:c,argTypes:d,parameters:{controls:{hideNoControlsWarning:!0},docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,m.ah)(),e.components);return t?(0,p.jsx)(t,Object.assign({},e,{children:(0,p.jsx)(g,e)})):g(e)}}}},h=({timeline:e})=>(0,a.dy)`
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
`;h.storyName="vl-steps - default";let f=({timeline:e})=>(0,a.dy)`
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
`;f.storyName="vl-steps - with accordions";let q=()=>(0,a.dy)`
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
`;q.storyName="vl-steps - with timeline";let _=({timeline:e})=>(0,a.dy)`
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
`;_.storyName="vl-steps - with vl-side-navigation",h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:'({\n  timeline\n}: typeof stepsArgs) => html`\n    <vl-steps id="vl-steps-1" ?data-vl-timeline=${timeline} data-cy="steps">\n        <vl-step data-cy="step-1">\n            <span slot="identifier">1</span>\n            <span slot="title">Step 1: action</span>\n            <span slot="sub-title">This is a subtitle.</span>\n        </vl-step>\n        <vl-step disabled="" data-cy="step-2">\n            <span slot="identifier">2</span>\n            <span slot="title">Step 2: action</span>\n            <span slot="sub-title">This is a subtitle.</span>\n        </vl-step>\n        <vl-step type="success" data-cy="step-3">\n            <span slot="identifier">3</span>\n            <span slot="title">Step 3: action</span>\n            <span slot="sub-title">This is a subtitle.</span>\n        </vl-step>\n        <vl-step type="warning" data-cy="step-4">\n            <span slot="identifier">4</span>\n            <span slot="title">Step 4: action</span>\n            <span slot="sub-title">This is a subtitle.</span>\n        </vl-step>\n        <vl-step type="error" data-cy="step-5">\n            <span slot="identifier">5</span>\n            <span slot="title">Step 5: action</span>\n            <span slot="sub-title">This is a subtitle.</span>\n        </vl-step>\n    </vl-steps>\n`',...h.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:'({\n  timeline\n}: typeof stepsArgs) => html`\n    <vl-steps id="vl-steps-2" ?data-vl-timeline=${timeline} data-cy="steps-with-accordions">\n        <vl-step data-vl-disabled="">\n            <span slot="identifier">0</span>\n            <span slot="title">Six centuries ago</span>\n            <span slot="sub-title">The last visitor from earth entered my world.</span>\n            <span slot="content"> Now, it\'s your turn to feel that pain. The gates are open. </span>\n        </vl-step>\n        <vl-step data-vl-toggleable="" data-cy="toggable-step-1">\n            <span slot="identifier">1</span>\n            <span slot="title">Gate 1</span>\n            <span slot="content"> Darkness, the world of demons. Look around you, they\'re everywhere. </span>\n        </vl-step>\n        <vl-step data-vl-toggleable="" data-cy="toggable-step-2">\n            <span slot="identifier">2</span>\n            <span slot="title">Gate 2</span>\n            <span slot="content"> My guards are watching you. </span>\n        </vl-step>\n        <vl-step data-vl-toggleable="" data-cy="toggable-step-3">\n            <span slot="identifier">3</span>\n            <span slot="title">Gate 3</span>\n            <span slot="content"> Only evil lives here. </span>\n        </vl-step>\n        <vl-step data-vl-toggleable="" data-cy="toggable-step-4">\n            <span slot="identifier">4</span>\n            <span slot="title">Gate 4</span>\n            <span slot="content"> There\'s no way out. </span>\n        </vl-step>\n        <vl-step data-vl-toggleable="" data-cy="toggable-step-5">\n            <span slot="identifier">5</span>\n            <span slot="title">Gate 5</span>\n            <span slot="content"> Feel the fire. </span>\n        </vl-step>\n    </vl-steps>\n`',...f.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:'() => html`\n    <vl-steps id="vl-steps-3" data-vl-timeline data-cy="steps-with-timeline">\n        <vl-step data-cy="timeline-step-1">\n            <span slot="identifier">2</span>\n            <span slot="identifier-annotation">maa</span>\n            <span slot="title">Central Station</span>\n            <span slot="title-annotation">13u00 - 15u00</span>\n            <span slot="sub-title">The most beautiful train station in the world</span>\n            <span slot="content">\n                The Antwerp Central Station, chosen by DK magazine as the most beautiful manmade object, is the perfect\n                starting point for any trip to Antwerp. The Central Station has been drawn by Da Vinci himself in 200 BC\n                and built by 10 000 laborers from all over the world. <br />\n                Described by Caesar as the bravest building of all buildings, the unique architecture is perfectly\n                maintained and keeps dazzling archaeologists.\n            </span>\n        </vl-step>\n        <vl-duration-step data-cy="timeline-duration-step-1"> Vrije tijd: 1 uur</vl-duration-step>\n        <vl-step data-cy="timeline-step-2">\n            <span slot="identifier">3</span>\n            <span slot="identifier-annotation">maa</span>\n            <span slot="title">The Botanical Gardens</span>\n            <span slot="sub-title">A green oasis in a bustling city</span>\n            <span slot="content">\n                The Royal Botanical Gardens in Antwerp is a massive botanical garden in the center of the city. These\n                gardens are ideal to stroll around, take a breather from everyday life or go for a leisurly walk, all of\n                this on less than 500m from the city center.\n            </span>\n        </vl-step>\n        <vl-duration-step data-cy="timeline-duration-step-2"> Vrije tijd: 2 uur</vl-duration-step>\n        <vl-step data-vl-disabled="" data-cy="timeline-step-3">\n            <span slot="identifier">3</span>\n            <span slot="identifier-annotation">maa</span>\n            <span slot="title">Bike ride</span>\n            <span slot="title-annotation">22u00 - 23u00</span>\n            <span slot="sub-title">Linkeroever</span>\n            <span slot="content"> This activity is canceled. </span>\n        </vl-step>\n        <vl-step data-vl-type="success" data-cy="timeline-step-4">\n            <span slot="identifier">3</span>\n            <span slot="identifier-annotation">maa</span>\n            <span slot="title">Bike ride</span>\n            <span slot="title-annotation">22u00 - 23u00</span>\n            <span slot="sub-title">Linkeroever</span>\n            <span slot="content"> This activity is new! </span>\n        </vl-step>\n        <vl-step data-vl-type="warning" data-cy="timeline-step-5">\n            <span slot="identifier">3</span>\n            <span slot="identifier-annotation">maa</span>\n            <span slot="title">Bike ride</span>\n            <span slot="title-annotation">22u00 - 23u00</span>\n            <span slot="sub-title">Linkeroever</span>\n            <span slot="content"> This activity is almost fully booked. </span>\n        </vl-step>\n        <vl-step data-vl-type="error" data-cy="timeline-step-6">\n            <span slot="identifier">3</span>\n            <span slot="identifier-annotation">maa</span>\n            <span slot="title">Bike ride</span>\n            <span slot="title-annotation">22u00 - 23u00</span>\n            <span slot="sub-title">Linkeroever</span>\n            <span slot="content"> This activity is canceled. </span>\n        </vl-step>\n    </vl-steps>\n`',...q.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:'({\n  timeline\n}: typeof stepsArgs) => html`\n    <section is="vl-region">\n        <div is="vl-layout">\n            <div is="vl-grid" data-vl-is-stacked>\n                <div\n                    is="vl-column"\n                    data-vl-size="8"\n                    data-vl-medium-size="8"\n                    data-vl-small-size="8"\n                    data-vl-extra-small-size="12"\n                >\n                    <div is="vl-side-navigation-reference">\n                        <vl-steps id="vl-steps-4" ?data-vl-timeline=${timeline} data-cy="steps-with-side-navigation">\n                            <vl-step data-cy="step-1">\n                                <span slot="identifier">1</span>\n                                <span id="vl-steps-4-step-1" slot="title">Step 1: action</span>\n                                <div slot="content">\n                                    <p>\n                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus\n                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada\n                                        nunc vel risus commodo viverra maecenas accumsan lacus. Pretium lectus quam id\n                                        leo in vitae. Dictum at tempor commodo ullamcorper a lacus. Facilisis gravida\n                                        neque convallis a cras. Ut porttitor leo a diam sollicitudin tempor. Augue ut\n                                        lectus arcu bibendum at varius vel pharetra vel. Fames ac turpis egestas\n                                        maecenas pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                        Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac felis\n                                        donec. Elit pellentesque habitant morbi tristique senectus et netus et.\n                                        Tristique et egestas quis ipsum suspendisse ultrices gravida. Tortor consequat\n                                        id porta nibh venenatis cras.\n                                    </p>\n                                    <p>\n                                        Facilisis gravida neque convallis a cras semper auctor. Condimentum mattis\n                                        pellentesque id nibh tortor. Tortor at auctor urna nunc id. Facilisi nullam\n                                        vehicula ipsum a arcu cursus vitae congue mauris. Adipiscing at in tellus\n                                        integer feugiat scelerisque varius. Amet volutpat consequat mauris nunc congue\n                                        nisi vitae suscipit tellus. Quisque sagittis purus sit amet. Neque egestas\n                                        congue quisque egestas diam. Tincidunt lobortis feugiat vivamus at augue eget\n                                        arcu. Dolor purus non enim praesent. Odio euismod lacinia at quis risus sed\n                                        vulputate odio ut. Tempor id eu nisl nunc mi ipsum. Quam elementum pulvinar\n                                        etiam non quam lacus suspendisse faucibus. Quam lacus suspendisse faucibus\n                                        interdum. Eu nisl nunc mi ipsum faucibus vitae. Aliquet risus feugiat in ante.\n                                        Quam vulputate dignissim suspendisse in est ante in nibh.\n                                    </p>\n                                    <p>\n                                        Donec et odio pellentesque diam volutpat commodo. Lorem dolor sed viverra ipsum\n                                        nunc aliquet bibendum enim facilisis. Proin nibh nisl condimentum id venenatis a\n                                        condimentum. Nulla at volutpat diam ut. Metus aliquam eleifend mi in nulla\n                                        posuere sollicitudin aliquam. Egestas quis ipsum suspendisse ultrices gravida\n                                        dictum fusce. Dolor purus non enim praesent elementum facilisis leo vel\n                                        fringilla. Nisi lacus sed viverra tellus in. Pulvinar mattis nunc sed blandit\n                                        libero volutpat sed cras ornare. Metus vulputate eu scelerisque felis. Posuere\n                                        ac ut consequat semper viverra nam libero justo laoreet. Viverra aliquet eget\n                                        sit amet tellus cras.\n                                    </p>\n                                    <p>\n                                        Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Dui nunc\n                                        mattis enim ut tellus elementum sagittis. Cursus turpis massa tincidunt dui.\n                                        Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Ipsum\n                                        suspendisse ultrices gravida dictum fusce ut. In hendrerit gravida rutrum\n                                        quisque non tellus orci. Sed risus pretium quam vulputate dignissim. Sociis\n                                        natoque penatibus et magnis dis. Nec ultrices dui sapien eget mi proin sed\n                                        libero. Tempus egestas sed sed risus pretium quam vulputate dignissim. In\n                                        fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Sed lectus\n                                        vestibulum mattis ullamcorper velit sed ullamcorper morbi. Risus pretium quam\n                                        vulputate dignissim. Dictum varius duis at consectetur lorem donec massa sapien\n                                        faucibus. Dolor sit amet consectetur adipiscing. Egestas erat imperdiet sed\n                                        euismod. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue.\n                                    </p>\n                                    <p>\n                                        Commodo nulla facilisi nullam vehicula ipsum. Ultrices dui sapien eget mi. Sed\n                                        risus ultricies tristique nulla aliquet enim tortor. Vestibulum morbi blandit\n                                        cursus risus. Lobortis scelerisque fermentum dui faucibus in. Mauris rhoncus\n                                        aenean vel elit. Sociis natoque penatibus et magnis dis parturient montes\n                                        nascetur ridiculus. Fermentum et sollicitudin ac orci phasellus. Lacus\n                                        vestibulum sed arcu non odio. Morbi enim nunc faucibus a pellentesque sit amet\n                                        porttitor. A pellentesque sit amet porttitor eget dolor morbi non. Purus in\n                                        massa tempor nec.\n                                    </p>\n                                    <p />\n                                </div>\n                            </vl-step>\n                            <vl-step data-cy="step-2">\n                                <span slot="identifier">2</span>\n                                <span id="vl-steps-4-step-2" slot="title">Step 2: action</span>\n                                <div slot="content">\n                                    <h3 id="vl-steps-4-step-2-abstract" data-cy="step-2-abstract">Abstract</h3>\n                                    <p>\n                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus\n                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada\n                                        nunc vel risus commodo viverra maecenas accumsan lacus. Pretium lectus quam id\n                                        leo in vitae. Dictum at tempor commodo ullamcorper a lacus. Facilisis gravida\n                                        neque convallis a cras. Ut porttitor leo a diam sollicitudin tempor. Augue ut\n                                        lectus arcu bibendum at varius vel pharetra vel. Fames ac turpis egestas\n                                        maecenas pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                        Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac felis\n                                        donec. Elit pellentesque habitant morbi tristique senectus et netus et.\n                                        Tristique et egestas quis ipsum suspendisse ultrices gravida. Tortor consequat\n                                        id porta nibh venenatis cras.\n                                    </p>\n                                    <p>\n                                        Facilisis gravida neque convallis a cras semper auctor. Condimentum mattis\n                                        pellentesque id nibh tortor. Tortor at auctor urna nunc id. Facilisi nullam\n                                        vehicula ipsum a arcu cursus vitae congue mauris. Adipiscing at in tellus\n                                        integer feugiat scelerisque varius. Amet volutpat consequat mauris nunc congue\n                                        nisi vitae suscipit tellus. Quisque sagittis purus sit amet. Neque egestas\n                                        congue quisque egestas diam. Tincidunt lobortis feugiat vivamus at augue eget\n                                        arcu. Dolor purus non enim praesent. Odio euismod lacinia at quis risus sed\n                                        vulputate odio ut. Tempor id eu nisl nunc mi ipsum. Quam elementum pulvinar\n                                        etiam non quam lacus suspendisse faucibus. Quam lacus suspendisse faucibus\n                                        interdum. Eu nisl nunc mi ipsum faucibus vitae. Aliquet risus feugiat in ante.\n                                        Quam vulputate dignissim suspendisse in est ante in nibh.\n                                    </p>\n                                    <p>\n                                        Donec et odio pellentesque diam volutpat commodo. Lorem dolor sed viverra ipsum\n                                        nunc aliquet bibendum enim facilisis. Proin nibh nisl condimentum id venenatis a\n                                        condimentum. Nulla at volutpat diam ut. Metus aliquam eleifend mi in nulla\n                                        posuere sollicitudin aliquam. Egestas quis ipsum suspendisse ultrices gravida\n                                        dictum fusce. Dolor purus non enim praesent elementum facilisis leo vel\n                                        fringilla. Nisi lacus sed viverra tellus in. Pulvinar mattis nunc sed blandit\n                                        libero volutpat sed cras ornare. Metus vulputate eu scelerisque felis. Posuere\n                                        ac ut consequat semper viverra nam libero justo laoreet. Viverra aliquet eget\n                                        sit amet tellus cras.\n                                    </p>\n                                    <p>\n                                        Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Dui nunc\n                                        mattis enim ut tellus elementum sagittis. Cursus turpis massa tincidunt dui.\n                                        Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Ipsum\n                                        suspendisse ultrices gravida dictum fusce ut. In hendrerit gravida rutrum\n                                        quisque non tellus orci. Sed risus pretium quam vulputate dignissim. Sociis\n                                        natoque penatibus et magnis dis. Nec ultrices dui sapien eget mi proin sed\n                                        libero. Tempus egestas sed sed risus pretium quam vulputate dignissim. In\n                                        fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Sed lectus\n                                        vestibulum mattis ullamcorper velit sed ullamcorper morbi. Risus pretium quam\n                                        vulputate dignissim. Dictum varius duis at consectetur lorem donec massa sapien\n                                        faucibus. Dolor sit amet consectetur adipiscing. Egestas erat imperdiet sed\n                                        euismod. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue.\n                                    </p>\n                                    <p>\n                                        Commodo nulla facilisi nullam vehicula ipsum. Ultrices dui sapien eget mi. Sed\n                                        risus ultricies tristique nulla aliquet enim tortor. Vestibulum morbi blandit\n                                        cursus risus. Lobortis scelerisque fermentum dui faucibus in. Mauris rhoncus\n                                        aenean vel elit. Sociis natoque penatibus et magnis dis parturient montes\n                                        nascetur ridiculus. Fermentum et sollicitudin ac orci phasellus. Lacus\n                                        vestibulum sed arcu non odio. Morbi enim nunc faucibus a pellentesque sit amet\n                                        porttitor. A pellentesque sit amet porttitor eget dolor morbi non. Purus in\n                                        massa tempor nec.\n                                    </p>\n                                    <p />\n\n                                    <h3 id="vl-steps-4-step-2-volledig" data-cy="step-2-volledig">Volledig</h3>\n                                    <p>\n                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus\n                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada\n                                        nunc vel risus commodo viverra maecenas accumsan lacus. Pretium lectus quam id\n                                        leo in vitae. Dictum at tempor commodo ullamcorper a lacus. Facilisis gravida\n                                        neque convallis a cras. Ut porttitor leo a diam sollicitudin tempor. Augue ut\n                                        lectus arcu bibendum at varius vel pharetra vel. Fames ac turpis egestas\n                                        maecenas pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                        Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac felis\n                                        donec. Elit pellentesque habitant morbi tristique senectus et netus et.\n                                        Tristique et egestas quis ipsum suspendisse ultrices gravida. Tortor consequat\n                                        id porta nibh venenatis cras.\n                                    </p>\n                                    <p>\n                                        Facilisis gravida neque convallis a cras semper auctor. Condimentum mattis\n                                        pellentesque id nibh tortor. Tortor at auctor urna nunc id. Facilisi nullam\n                                        vehicula ipsum a arcu cursus vitae congue mauris. Adipiscing at in tellus\n                                        integer feugiat scelerisque varius. Amet volutpat consequat mauris nunc congue\n                                        nisi vitae suscipit tellus. Quisque sagittis purus sit amet. Neque egestas\n                                        congue quisque egestas diam. Tincidunt lobortis feugiat vivamus at augue eget\n                                        arcu. Dolor purus non enim praesent. Odio euismod lacinia at quis risus sed\n                                        vulputate odio ut. Tempor id eu nisl nunc mi ipsum. Quam elementum pulvinar\n                                        etiam non quam lacus suspendisse faucibus. Quam lacus suspendisse faucibus\n                                        interdum. Eu nisl nunc mi ipsum faucibus vitae. Aliquet risus feugiat in ante.\n                                        Quam vulputate dignissim suspendisse in est ante in nibh.\n                                    </p>\n                                    <p>\n                                        Donec et odio pellentesque diam volutpat commodo. Lorem dolor sed viverra ipsum\n                                        nunc aliquet bibendum enim facilisis. Proin nibh nisl condimentum id venenatis a\n                                        condimentum. Nulla at volutpat diam ut. Metus aliquam eleifend mi in nulla\n                                        posuere sollicitudin aliquam. Egestas quis ipsum suspendisse ultrices gravida\n                                        dictum fusce. Dolor purus non enim praesent elementum facilisis leo vel\n                                        fringilla. Nisi lacus sed viverra tellus in. Pulvinar mattis nunc sed blandit\n                                        libero volutpat sed cras ornare. Metus vulputate eu scelerisque felis. Posuere\n                                        ac ut consequat semper viverra nam libero justo laoreet. Viverra aliquet eget\n                                        sit amet tellus cras.\n                                    </p>\n                                    <p>\n                                        Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Dui nunc\n                                        mattis enim ut tellus elementum sagittis. Cursus turpis massa tincidunt dui.\n                                        Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Ipsum\n                                        suspendisse ultrices gravida dictum fusce ut. In hendrerit gravida rutrum\n                                        quisque non tellus orci. Sed risus pretium quam vulputate dignissim. Sociis\n                                        natoque penatibus et magnis dis. Nec ultrices dui sapien eget mi proin sed\n                                        libero. Tempus egestas sed sed risus pretium quam vulputate dignissim. In\n                                        fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Sed lectus\n                                        vestibulum mattis ullamcorper velit sed ullamcorper morbi. Risus pretium quam\n                                        vulputate dignissim. Dictum varius duis at consectetur lorem donec massa sapien\n                                        faucibus. Dolor sit amet consectetur adipiscing. Egestas erat imperdiet sed\n                                        euismod. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue.\n                                    </p>\n                                    <p>\n                                        Commodo nulla facilisi nullam vehicula ipsum. Ultrices dui sapien eget mi. Sed\n                                        risus ultricies tristique nulla aliquet enim tortor. Vestibulum morbi blandit\n                                        cursus risus. Lobortis scelerisque fermentum dui faucibus in. Mauris rhoncus\n                                        aenean vel elit. Sociis natoque penatibus et magnis dis parturient montes\n                                        nascetur ridiculus. Fermentum et sollicitudin ac orci phasellus. Lacus\n                                        vestibulum sed arcu non odio. Morbi enim nunc faucibus a pellentesque sit amet\n                                        porttitor. A pellentesque sit amet porttitor eget dolor morbi non. Purus in\n                                        massa tempor nec.\n                                    </p>\n                                    <p />\n                                    <p>\n                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus\n                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada\n                                        nunc vel risus commodo viverra maecenas accumsan lacus. Pretium lectus quam id\n                                        leo in vitae. Dictum at tempor commodo ullamcorper a lacus. Facilisis gravida\n                                        neque convallis a cras. Ut porttitor leo a diam sollicitudin tempor. Augue ut\n                                        lectus arcu bibendum at varius vel pharetra vel. Fames ac turpis egestas\n                                        maecenas pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                        Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac felis\n                                        donec. Elit pellentesque habitant morbi tristique senectus et netus et.\n                                        Tristique et egestas quis ipsum suspendisse ultrices gravida. Tortor consequat\n                                        id porta nibh venenatis cras.\n                                    </p>\n                                    <p>\n                                        Facilisis gravida neque convallis a cras semper auctor. Condimentum mattis\n                                        pellentesque id nibh tortor. Tortor at auctor urna nunc id. Facilisi nullam\n                                        vehicula ipsum a arcu cursus vitae congue mauris. Adipiscing at in tellus\n                                        integer feugiat scelerisque varius. Amet volutpat consequat mauris nunc congue\n                                        nisi vitae suscipit tellus. Quisque sagittis purus sit amet. Neque egestas\n                                        congue quisque egestas diam. Tincidunt lobortis feugiat vivamus at augue eget\n                                        arcu. Dolor purus non enim praesent. Odio euismod lacinia at quis risus sed\n                                        vulputate odio ut. Tempor id eu nisl nunc mi ipsum. Quam elementum pulvinar\n                                        etiam non quam lacus suspendisse faucibus. Quam lacus suspendisse faucibus\n                                        interdum. Eu nisl nunc mi ipsum faucibus vitae. Aliquet risus feugiat in ante.\n                                        Quam vulputate dignissim suspendisse in est ante in nibh.\n                                    </p>\n                                    <p>\n                                        Donec et odio pellentesque diam volutpat commodo. Lorem dolor sed viverra ipsum\n                                        nunc aliquet bibendum enim facilisis. Proin nibh nisl condimentum id venenatis a\n                                        condimentum. Nulla at volutpat diam ut. Metus aliquam eleifend mi in nulla\n                                        posuere sollicitudin aliquam. Egestas quis ipsum suspendisse ultrices gravida\n                                        dictum fusce. Dolor purus non enim praesent elementum facilisis leo vel\n                                        fringilla. Nisi lacus sed viverra tellus in. Pulvinar mattis nunc sed blandit\n                                        libero volutpat sed cras ornare. Metus vulputate eu scelerisque felis. Posuere\n                                        ac ut consequat semper viverra nam libero justo laoreet. Viverra aliquet eget\n                                        sit amet tellus cras.\n                                    </p>\n                                    <p>\n                                        Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Dui nunc\n                                        mattis enim ut tellus elementum sagittis. Cursus turpis massa tincidunt dui.\n                                        Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Ipsum\n                                        suspendisse ultrices gravida dictum fusce ut. In hendrerit gravida rutrum\n                                        quisque non tellus orci. Sed risus pretium quam vulputate dignissim. Sociis\n                                        natoque penatibus et magnis dis. Nec ultrices dui sapien eget mi proin sed\n                                        libero. Tempus egestas sed sed risus pretium quam vulputate dignissim. In\n                                        fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Sed lectus\n                                        vestibulum mattis ullamcorper velit sed ullamcorper morbi. Risus pretium quam\n                                        vulputate dignissim. Dictum varius duis at consectetur lorem donec massa sapien\n                                        faucibus. Dolor sit amet consectetur adipiscing. Egestas erat imperdiet sed\n                                        euismod. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue.\n                                    </p>\n                                    <p>\n                                        Commodo nulla facilisi nullam vehicula ipsum. Ultrices dui sapien eget mi. Sed\n                                        risus ultricies tristique nulla aliquet enim tortor. Vestibulum morbi blandit\n                                        cursus risus. Lobortis scelerisque fermentum dui faucibus in. Mauris rhoncus\n                                        aenean vel elit. Sociis natoque penatibus et magnis dis parturient montes\n                                        nascetur ridiculus. Fermentum et sollicitudin ac orci phasellus. Lacus\n                                        vestibulum sed arcu non odio. Morbi enim nunc faucibus a pellentesque sit amet\n                                        porttitor. A pellentesque sit amet porttitor eget dolor morbi non. Purus in\n                                        massa tempor nec.\n                                    </p>\n                                    <p />\n                                </div>\n                            </vl-step>\n                            <vl-step data-cy="step-3">\n                                <span slot="identifier">3</span>\n                                <span id="vl-steps-4-step-3" slot="title">Step 3: action</span>\n                                <div slot="content">\n                                    <p>\n                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus\n                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada\n                                        nunc vel risus commodo viverra maecenas accumsan lacus. Pretium lectus quam id\n                                        leo in vitae. Dictum at tempor commodo ullamcorper a lacus. Facilisis gravida\n                                        neque convallis a cras. Ut porttitor leo a diam sollicitudin tempor. Augue ut\n                                        lectus arcu bibendum at varius vel pharetra vel. Fames ac turpis egestas\n                                        maecenas pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                        Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac felis\n                                        donec. Elit pellentesque habitant morbi tristique senectus et netus et.\n                                        Tristique et egestas quis ipsum suspendisse ultrices gravida. Tortor consequat\n                                        id porta nibh venenatis cras.\n                                    </p>\n                                    <p>\n                                        Facilisis gravida neque convallis a cras semper auctor. Condimentum mattis\n                                        pellentesque id nibh tortor. Tortor at auctor urna nunc id. Facilisi nullam\n                                        vehicula ipsum a arcu cursus vitae congue mauris. Adipiscing at in tellus\n                                        integer feugiat scelerisque varius. Amet volutpat consequat mauris nunc congue\n                                        nisi vitae suscipit tellus. Quisque sagittis purus sit amet. Neque egestas\n                                        congue quisque egestas diam. Tincidunt lobortis feugiat vivamus at augue eget\n                                        arcu. Dolor purus non enim praesent. Odio euismod lacinia at quis risus sed\n                                        vulputate odio ut. Tempor id eu nisl nunc mi ipsum. Quam elementum pulvinar\n                                        etiam non quam lacus suspendisse faucibus. Quam lacus suspendisse faucibus\n                                        interdum. Eu nisl nunc mi ipsum faucibus vitae. Aliquet risus feugiat in ante.\n                                        Quam vulputate dignissim suspendisse in est ante in nibh.\n                                    </p>\n                                    <p>\n                                        Donec et odio pellentesque diam volutpat commodo. Lorem dolor sed viverra ipsum\n                                        nunc aliquet bibendum enim facilisis. Proin nibh nisl condimentum id venenatis a\n                                        condimentum. Nulla at volutpat diam ut. Metus aliquam eleifend mi in nulla\n                                        posuere sollicitudin aliquam. Egestas quis ipsum suspendisse ultrices gravida\n                                        dictum fusce. Dolor purus non enim praesent elementum facilisis leo vel\n                                        fringilla. Nisi lacus sed viverra tellus in. Pulvinar mattis nunc sed blandit\n                                        libero volutpat sed cras ornare. Metus vulputate eu scelerisque felis. Posuere\n                                        ac ut consequat semper viverra nam libero justo laoreet. Viverra aliquet eget\n                                        sit amet tellus cras.\n                                    </p>\n                                    <p>\n                                        Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Dui nunc\n                                        mattis enim ut tellus elementum sagittis. Cursus turpis massa tincidunt dui.\n                                        Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Ipsum\n                                        suspendisse ultrices gravida dictum fusce ut. In hendrerit gravida rutrum\n                                        quisque non tellus orci. Sed risus pretium quam vulputate dignissim. Sociis\n                                        natoque penatibus et magnis dis. Nec ultrices dui sapien eget mi proin sed\n                                        libero. Tempus egestas sed sed risus pretium quam vulputate dignissim. In\n                                        fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Sed lectus\n                                        vestibulum mattis ullamcorper velit sed ullamcorper morbi. Risus pretium quam\n                                        vulputate dignissim. Dictum varius duis at consectetur lorem donec massa sapien\n                                        faucibus. Dolor sit amet consectetur adipiscing. Egestas erat imperdiet sed\n                                        euismod. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue.\n                                    </p>\n                                    <p>\n                                        Commodo nulla facilisi nullam vehicula ipsum. Ultrices dui sapien eget mi. Sed\n                                        risus ultricies tristique nulla aliquet enim tortor. Vestibulum morbi blandit\n                                        cursus risus. Lobortis scelerisque fermentum dui faucibus in. Mauris rhoncus\n                                        aenean vel elit. Sociis natoque penatibus et magnis dis parturient montes\n                                        nascetur ridiculus. Fermentum et sollicitudin ac orci phasellus. Lacus\n                                        vestibulum sed arcu non odio. Morbi enim nunc faucibus a pellentesque sit amet\n                                        porttitor. A pellentesque sit amet porttitor eget dolor morbi non. Purus in\n                                        massa tempor nec.\n                                    </p>\n                                    <p />\n                                </div>\n                            </vl-step>\n                        </vl-steps>\n                    </div>\n                </div>\n                <div\n                    is="vl-column"\n                    data-vl-size="3"\n                    data-vl-medium-size="3"\n                    data-vl-small-size="3"\n                    data-vl-extra-small-size="0"\n                >\n                    <nav is="vl-side-navigation" aria-label="inhoudsopgave">\n                        <h5 is="vl-side-navigation-h5">Op deze pagina</h5>\n                        <div is="vl-side-navigation-content">\n                            <ul is="vl-side-navigation-group">\n                                <li is="vl-side-navigation-item">\n                                    <a is="vl-side-navigation-toggle" href="#vl-steps-4-step-1">\n                                        step 1\n                                        <i class="vl-vi vl-vi-arrow-right-fat"></i>\n                                    </a>\n                                </li>\n                                <li is="vl-side-navigation-item" data-vl-parent="step-2">\n                                    <a is="vl-side-navigation-toggle" href="#vl-steps-4-step-2" data-vl-child="step-2">\n                                        step 2\n                                        <i class="vl-vi vl-vi-arrow-right-fat"></i>\n                                    </a>\n                                    <ul>\n                                        <li is="vl-side-navigation-item">\n                                            <div>\n                                                <a href="#vl-steps-4-step-2-abstract" data-vl-parent="step-2"\n                                                    >Abstract</a\n                                                >\n                                            </div>\n                                        </li>\n                                        <li is="vl-side-navigation-item">\n                                            <div>\n                                                <a href="#vl-steps-4-step-2-volledig" data-vl-parent="step-2"\n                                                    >Volledig</a\n                                                >\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </li>\n                                <li is="vl-side-navigation-item">\n                                    <a is="vl-side-navigation-toggle" href="#vl-steps-4-step-3">\n                                        step 3\n                                        <i class="vl-vi vl-vi-arrow-right-fat"></i>\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                    </nav>\n                </div>\n            </div>\n        </div>\n    </section>\n`',..._.parameters?.docs?.source}}};let y=["StepsDefault","StepsWithAccordions","StepsWithTimeline","StepsWithSideNavigation"]},"./node_modules/memoizerific sync recursive":e=>{function t(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id="./node_modules/memoizerific sync recursive",e.exports=t},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,i)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=i("./node_modules/react/index.js"),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function r(e,t,i){var s,a={},r=null,c=null;for(s in void 0!==i&&(r=""+i),void 0!==t.key&&(r=""+t.key),void 0!==t.ref&&(c=t.ref),t)u.call(t,s)&&!o.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===a[s]&&(a[s]=t[s]);return{$$typeof:n,type:e,key:r,ref:c,props:a,_owner:l.current}}t.Fragment=a,t.jsx=r,t.jsxs=r},"./node_modules/react/jsx-runtime.js":(e,t,i)=>{"use strict";e.exports=i("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./libs/components/src/accordion/vl-accordion.component.ts":(e,t,i)=>{"use strict";i.d(t,{b:()=>o});var s=i("./libs/common/utilities/src/index.ts"),n=i("./node_modules/@domg/govflanders-style/component/index.js"),a=i("./node_modules/@domg/govflanders-style/common/index.js"),u=i("./node_modules/lit/index.js");let l=(0,u.iv)`
    :host(.vl-accordion--bold) .vl-accordion__title,
    :host(.vl-accordion--bold) .vl-accordion__icon::before {
        font-weight: 700;
    }

    :host(.vl-accordion--disabled) .vl-toggle {
        cursor: not-allowed;
        text-decoration: none;
    }
    :host(.vl-accordion--disabled) .vl-accordion__title,
    :host(.vl-accordion--disabled) .vl-accordion__icon::before {
        color: #687483;
    }

    .vl-accordion:not(.js-vl-accordion--open) .vl-accordion__content {
        display: none;
    }

    .vl-accordion.vl-accordion--has-icon .vl-vi-arrow-right-fat {
        order: 2;
        margin-left: auto;
        padding-right: 0;
        padding-left: 0.4rem;
    }

    .vl-accordion__subtitle {
        margin-left: 22px;
        padding-left: 0.4rem;
    }

    .vl-accordion__button-container {
        display: flex;
    }

    .js-vl-accordion--open > .vl-accordion__button-container > .vl-toggle > .vl-vi-arrow-right-fat::before {
        transform: rotate(-90deg);
    }
`;i("./node_modules/@govflanders/vl-ui-util/dist/js/util.js"),i("./node_modules/@govflanders/vl-ui-accordion/dist/js/accordion.js"),i("./node_modules/reflect-metadata/Reflect.js");class o extends(0,s.W$)(HTMLElement){static get _observedAttributes(){return["toggle-text","open-toggle-text","close-toggle-text","content-padding"]}static get _observedClassAttributes(){return["bold","disabled"]}get _classPrefix(){return"vl-accordion--"}constructor(){super(`
          <style>
           ${a.YN}
           ${n.jn}
           ${n.oQ}
           ${n.RP}
           ${n.ob}
           ${n.R1}
           ${l}
          </style>
          <div class="js">
            <div class="vl-accordion" data-vl-accordion>
            <div class="vl-accordion__button-container">
              <button class="vl-toggle vl-link vl-link--bold" data-vl-accordion-toggle>
                <i class="vl-accordion__icon vl-link__icon vl-link__icon--before vl-toggle__icon vl-vi vl-vi-arrow-right-fat" aria-hidden="true"></i>
                <slot name="title" class="vl-accordion__title"></slot>
              </button>
              <div class="vl-accordion__menu">
                <slot name="menu"></slot>
              </div>
            </div>
              <div class="vl-accordion__subtitle">
                <slot name="subtitle"></slot>
              </div>
              <div class="vl-accordion__content js-vl-accordion__content">
                <div class="vl-accordion__panel">
                  <slot id="accordion-slot"></slot>
                </div>
              </div>
            </div>
          </div>
        `)}connectedCallback(){super.connectedCallback(),this.dress(),this._hasTitleSlot()&&this._propagateTitleSlotClickToAccordion(),this.hasAttribute("icon")&&(this._addIconElement(),this._accordionElement.classList.add("vl-accordion--has-icon")),this.hasAttribute("default-open")&&this.open(),this._buttonElement?.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("vl-on-toggle",{detail:{open:this._isOpen}}))})}_propagateTitleSlotClickToAccordion(){this._titleElement.addEventListener("click",e=>{e.stopPropagation(),this._buttonElement.click()})}_addIconElement(){let e=this.getAttribute("icon"),t=document.createElement("i");t.classList.add("vl-accordion__icon","vl-link__icon","vl-link__icon--before","vl-toggle__icon","vl-vi",`vl-vi-${e}`),t.setAttribute("aria-hidden","true"),this._buttonElement?.prepend(t)}_hasTitleSlot(){return this._titleElement.assignedElements().length>0}get _accordionElement(){return this._element.querySelector("[data-vl-accordion]")}get _buttonElement(){return this._element.querySelector("button")}get _titleElement(){return this._buttonElement.querySelector('slot[name="title"]')}get _openToggleTextAttribute(){return this.getAttribute("open-toggle-text")}get _closeToggleTextAttribute(){return this.getAttribute("close-toggle-text")}get _dressedAttribute(){return this.getAttribute("accordion-dressed")}get _isDressed(){return!!this._dressedAttribute}get _isOpen(){return this._accordionElement.classList.contains("js-vl-accordion--open")}dress(){this._isDressed||vl.accordion.dress(this._buttonElement)}open(){vl.accordion.open(this._accordionElement)}close(){this._isOpen&&this.toggle()}toggle(){vl.accordion.toggle(this._accordionElement)}_toggleTextChangedCallback(e,t){this._titleElement.textContent=t}_openToggleTextChangedCallback(e,t){this._titleElement.classList.add("js-vl-accordion__toggle__text"),this._titleElement.setAttribute("data-vl-accordion-open-text",t)}_closeToggleTextChangedCallback(e,t){this._titleElement.classList.add("js-vl-accordion__toggle__text"),this._titleElement.setAttribute("data-vl-accordion-close-text",t)}_contentPaddingChangedCallback(e,t){let i=s.RE[t],n=this._element.querySelector(".vl-accordion__panel");i?n.style.padding=i:n.style.removeProperty("padding")}_disabledChangedCallback(e,t){void 0!=t?this._buttonElement?.setAttribute("disabled",""):this._buttonElement?.removeAttribute("disabled")}}o=function(e,t,i,s){var n,a=arguments.length,u=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,i,s);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(u=(a<3?n(u):a>3?n(t,i,u):n(t,i))||u);return a>3&&u&&Object.defineProperty(t,i,u),u}([(0,s.a6)("vl-accordion")],o)},"./libs/components/src/steps/vl-duration-step.component.ts":(e,t,i)=>{"use strict";i.d(t,{Y:()=>n});var s=i("./libs/common/utilities/src/index.ts");class n extends(0,s.W$)(HTMLElement){constructor(){super(`
      <li class="vl-duration-step"></li>
    `)}connectedCallback(){super.connectedCallback(),this._processSlots()}get template(){return this._element.cloneNode(!0)}_processSlots(){[...this.childNodes].forEach(e=>this._element.append(e.cloneNode(!0)))}}n=function(e,t,i,s){var n,a=arguments.length,u=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,i,s);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(u=(a<3?n(u):a>3?n(t,i,u):n(t,i))||u);return a>3&&u&&Object.defineProperty(t,i,u),u}([(0,s.a6)("vl-duration-step")],n)},"./libs/components/src/steps/vl-step.component.ts":(e,t,i)=>{"use strict";i.d(t,{a:()=>a});var s=i("./libs/common/utilities/src/index.ts"),n=i("./libs/components/src/accordion/vl-accordion.component.ts");class a extends(0,s.W$)(HTMLElement){static{(0,s.YV)([n.b])}static get _observedAttributes(){return["type","toggleable"]}static get _observedChildClassAttributes(){return["disabled"]}constructor(){super(`
      <li class="vl-step">
        <div class="vl-step__container">
          <div id="icon" class="vl-step__icon">
            <span slot="identifier"></span>
            <span id="sub-icon" class="vl-step__icon__sub">
              <span slot="identifier-annotation"></span>
            </span>
          </div>
          <div class="vl-step__wrapper">
            <div class="vl-step__header">
              <div class="vl-step__header__titles">
                <h3 id="title" class="vl-step__title">
                  <span slot="title"></span>
                  <span id="title-label">
                    <span slot="title-label"></span>
                  </span>
                  <span id="title-annotation" class="vl-step__title__annotation">
                    <span slot="title-annotation"></span>
                  </span>
                </h3>
                <p id="sub-title" class="vl-step__subtitle">
                  <span slot="sub-title"></span>
                </p>
              </div>
            </div>
            <div class="vl-step__content-wrapper">
              <p id="content" class="vl-step__content">
                <span slot="content"></span>
              </p>
            </div>
          </div>
        </div>
      </li>
    `),this._processSlots()}get template(){this._processSlots();let e=this._element.cloneNode(!0);return this._isToggleable&&(vl.accordion.dress(e),e.querySelector("#content").addEventListener("click",e=>e.stopPropagation())),e}get _iconElement(){return this._shadow.querySelector("#icon")}get _subIconElement(){return this._iconElement.querySelector("#sub-icon")}get _wrapperElement(){return this._shadow.querySelector(".vl-step__wrapper")}get _headerElement(){return this._wrapperElement.querySelector(".vl-step__header")}get _titleElement(){return this._headerElement.querySelector("#title")}get _titleLabelElement(){return this._headerElement.querySelector("#title-label")}get _titleAnnotationElement(){return this._headerElement.querySelector("#title-annotation")}get _subTitleElement(){return this._headerElement.querySelector("#sub-title")}get _contentElement(){return this._shadow.querySelector("#content")}get _classPrefix(){return"vl-step--"}get _isToggleable(){return this.hasAttribute("toggleable")}_getSlot(e){return this._shadow.querySelector(`[slot="${e}"]`)}_getToggleableHeaderHTML(){return`
      <button class="vl-step__header js-vl-accordion__toggle">
        <div class="vl-step__header__titles">
          <h3 id="title" class="vl-step__title">
            <span slot="title"></span>
            <span id="title-label">
              <span slot="title-label"></span>
            </span>
          </h3>
        </div>
        <div class="vl-step__header__info" aria-hidden="true">
          <em class="vl-step__accordion-toggle"></em>
        </div>
      </button>
    `}_typeChangedCallback(e,t){this._changeClass(this._element,e,t,this._classPrefix)}_toggleableChangedCallback(e,t){void 0!=t&&(this._element.classList.add("vl-step--accordion"),this._element.classList.add("js-vl-accordion"),this._headerElement.remove(),this._wrapperElement.insertAdjacentHTML("afterbegin",this._getToggleableHeaderHTML()),this.__processSlot(this._titleElement,"title"),this.__processSlot(this._titleLabelElement,"title-label"))}_processSlots(){this.__processSlot(this._iconElement,"identifier"),this.__processSlot(this._subIconElement,"identifier-annotation"),this.__processSlot(this._titleElement,"title"),this.__processSlot(this._titleLabelElement,"title-label"),this.__processSlot(this._titleAnnotationElement,"title-annotation"),this.__processSlot(this._subTitleElement,"sub-title"),this.__processSlot(this._contentElement,"content")}__processSlot(e,t){let i=this.querySelector(`[slot="${t}"]`);i?this.__replaceSlot(e,i,t):this.__hideSlot(e,this._getSlot(t))}__replaceSlot(e,t,i){e.hidden=!1,e.replaceChild(t.cloneNode(!0),this._getSlot(i))}__hideSlot(e,t){e&&(e.hidden=!0),t&&(t.innerHTML="")}}a=function(e,t,i,s){var n,a=arguments.length,u=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,i,s);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(u=(a<3?n(u):a>3?n(t,i,u):n(t,i))||u);return a>3&&u&&Object.defineProperty(t,i,u),u}([(0,s.a6)("vl-step")],a)},"./libs/components/src/steps/vl-steps.component.ts":(e,t,i)=>{"use strict";i.d(t,{N:()=>o});var s=i("./libs/common/utilities/src/index.ts"),n=i("./node_modules/@domg/govflanders-style/component/index.js"),a=i("./node_modules/@domg/govflanders-style/common/index.js"),u=i("./node_modules/lit/index.js");let l=(0,u.iv)`
    #title-label:not([hidden]) {
        display: inline-block;
        margin-left: 3rem;
    }

    .vl-step--accordion.js-vl-accordion--open .vl-step__content-wrapper {
        overflow: inherit;
    }
`;class o extends(0,s.W$)(HTMLElement){static get _observedChildClassAttributes(){return["timeline"]}constructor(){super(`
          <style>
            ${a.YN}
            ${n.vV}
            ${l}
          </style>
          <div class="vl-steps">
            <ul id="steps" class="vl-steps__list"></ul>
          </div>
        `)}connectedCallback(){super.connectedCallback(),this._observer=this.__observeChildElements(()=>this._processSteps()),this._processSteps()}disconnectedCallback(){this._observer.disconnect()}get _stepsElement(){return this._shadow.querySelector("#steps")}get _classPrefix(){return"vl-steps--"}_processSteps(){customElements.whenDefined("vl-step").then(()=>{customElements.whenDefined("vl-duration-step").then(()=>{this._stepsElement.innerHTML="",this.querySelectorAll("vl-step, vl-duration-step").forEach(e=>this._stepsElement.append(e.template))})})}__observeChildElements(e){let t=new MutationObserver(e);return t.observe(this,{childList:!0,attributes:!0,subtree:!0,characterData:!0}),t}}o=function(e,t,i,s){var n,a=arguments.length,u=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,i,s);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(u=(a<3?n(u):a>3?n(t,i,u):n(t,i))||u);return a>3&&u&&Object.defineProperty(t,i,u),u}([(0,s.a6)("vl-steps")],o)}}]);