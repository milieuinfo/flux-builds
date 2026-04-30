import{$ as a,u as s,j as t,M as m,C as u,s as p,r as v,R as b,F as g,x as q}from"./iframe-69xRVzLO.js";import"./preload-helper-D9Z9MdNV.js";const c={contentBlock:!1,contentBlockFullWidth:!1},f={contentBlock:{name:"vl-content-block",table:{type:{summary:a.BOOLEAN},category:"block style",defaultValue:{summary:String(!1)}},description:"Verplichte root style."},contentBlockFullWidth:{name:"vl-content-block--full-width",table:{type:{summary:a.BOOLEAN},category:"block style",defaultValue:{summary:String(!1)}},description:"Optionele style voor full width layout."}};function r(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...s(),...i.components},{FluxComponentMetaData:l}=e;return l||x("FluxComponentMetaData"),t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Styles/Layout (afnemers)/content-block"}),`
`,t.jsx(e.h1,{id:"content-block",children:"Content Block"}),`
`,t.jsx(l,{id:"styles-layout-content-block"}),`
`,t.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"vl-content-block"}),` is een layout component die gebruikt wordt om content te groeperen. Het element krijgt een vaste
breedte en wordt in het midden gecentreerd. Dit is equivalent van wat bij Digitaal Vlaanderen als
`,t.jsx(e.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/grid",rel:"nofollow",children:"Layout"})," wordt aangeboden."]}),`
`,t.jsx(e.h2,{id:"gebruik",children:"Gebruik"}),`
`,t.jsx(e.h3,{id:"default",children:"Default"}),`
`,t.jsxs(e.p,{children:["Gebruik de ",t.jsx(e.code,{children:".vl-content-block"})," CSS class om een content block te definiëren."]}),`
`,t.jsx(u,{of:o}),`
`,t.jsx(e.h3,{id:"full-width",children:"Full width"}),`
`,t.jsxs(e.p,{children:["Gebruik de ",t.jsx(e.code,{children:".vl-content-block--full-width"})," CSS class om een content block de volledige breedte te laten innemen. Dit is een modifier class die steeds op een element met de ",t.jsx(e.code,{children:".vl-content-block"})," class moet geplaatst worden."]}),`
`,t.jsx(u,{of:n})]})}function h(i={}){const{wrapper:e}={...s(),...i.components};return e?t.jsx(e,{...i,children:t.jsx(r,{...i})}):r(i)}function x(i,e){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}const B={id:"styles-layout-content-block",title:"Styles/Layout (afnemers)/content-block",tags:["autodocs"],args:c,argTypes:f,parameters:{docs:{page:h}}};v([b]);const d=p(c,({contentBlock:i,contentBlockFullWidth:e})=>q`
        <div
            class="${g({"vl-content-block":i===!0||e===!0,"vl-content-block--full-width":e===!0})}"
        >
            <vl-title type="h1">Title</vl-title>
            <vl-title type="h2">Sub title</vl-title>
            <section class="vl-section">
                lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt
                mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in
                culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipisicing
                elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
            </section>
            <vl-title type="h2">Sub title</vl-title>
            <section class="vl-section">
                lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt
                mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in
                culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipisicing
                elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
            </section>
        </div>
    `),o=d.bind({});o.storyName="vl-content-block - default";o.args={contentBlock:!0,contentBlockFullWidth:!1};const n=d.bind({});n.storyName="vl-content-block - full width";n.args={contentBlock:!0,contentBlockFullWidth:!0};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`story(vlContentBlockArgs, ({
  contentBlock,
  contentBlockFullWidth
}: typeof vlContentBlockArgs) => html\`
        <div
            class="\${classMap({
  'vl-content-block': contentBlock === true || contentBlockFullWidth === true,
  'vl-content-block--full-width': contentBlockFullWidth === true
})}"
        >
            <vl-title type="h1">Title</vl-title>
            <vl-title type="h2">Sub title</vl-title>
            <section class="vl-section">
                lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt
                mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in
                culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipisicing
                elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
            </section>
            <vl-title type="h2">Sub title</vl-title>
            <section class="vl-section">
                lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt
                mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in
                culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipisicing
                elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
            </section>
        </div>
    \`)`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`story(vlContentBlockArgs, ({
  contentBlock,
  contentBlockFullWidth
}: typeof vlContentBlockArgs) => html\`
        <div
            class="\${classMap({
  'vl-content-block': contentBlock === true || contentBlockFullWidth === true,
  'vl-content-block--full-width': contentBlockFullWidth === true
})}"
        >
            <vl-title type="h1">Title</vl-title>
            <vl-title type="h2">Sub title</vl-title>
            <section class="vl-section">
                lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt
                mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in
                culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipisicing
                elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
            </section>
            <vl-title type="h2">Sub title</vl-title>
            <section class="vl-section">
                lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt
                mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in
                culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipisicing
                elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
            </section>
        </div>
    \`)`,...n.parameters?.docs?.source}}};const j=["ContentBlockDefault","ContentBlockFullWidth"];export{o as ContentBlockDefault,n as ContentBlockFullWidth,j as __namedExportsOrder,B as default};
