import{K as a,u as s,j as e,M as m,C as u,s as p,r as v,aW as b,aN as h,x as f}from"./iframe-CflcmDUD.js";import"./preload-helper-D9Z9MdNV.js";const c={contentBlock:!1,contentBlockFullWidth:!1},g={contentBlock:{name:"vl-content-block",table:{type:{summary:a.BOOLEAN},category:"block style",defaultValue:{summary:String(!1)}},description:"Verplichte root style."},contentBlockFullWidth:{name:"vl-content-block--full-width",table:{type:{summary:a.BOOLEAN},category:"block style",defaultValue:{summary:String(!1)}},description:"Optionele style voor full width layout."}};function r(t){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...s(),...t.components},{FluxMetaData:n}=i;return n||x("FluxMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(m,{title:"Styles/Layout (afnemers)/content-block"}),`
`,e.jsx(i.h1,{id:"content-block",children:"Content Block"}),`
`,e.jsx(n,{id:"styles-layout-afnemers-content-block"}),`
`,e.jsx("br",{}),`
`,e.jsx(i.h2,{id:"inhoudstafel",children:"Inhoudstafel"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#doel",children:"Doel"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#gebruik",children:"Gebruik"})}),`
`]}),`
`,e.jsx(i.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"vl-content-block"}),` is een layout component die gebruikt wordt om content te groeperen. Het element krijgt een vaste
breedte en wordt in het midden gecentreerd. Dit is equivalent van wat bij Digitaal Vlaanderen als
`,e.jsx(i.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/grid",rel:"nofollow",children:"Layout"})," wordt aangeboden."]}),`
`,e.jsx(i.h2,{id:"gebruik",children:"Gebruik"}),`
`,e.jsx(i.h3,{id:"default",children:"Default"}),`
`,e.jsxs(i.p,{children:["Gebruik de ",e.jsx(i.code,{children:".vl-content-block"})," CSS class om een content block te definiëren."]}),`
`,e.jsx(u,{of:o}),`
`,e.jsx(i.h3,{id:"full-width",children:"Full width"}),`
`,e.jsxs(i.p,{children:["Gebruik de ",e.jsx(i.code,{children:".vl-content-block--full-width"})," CSS class om een content block de volledige breedte te laten innemen. Dit is een modifier class die steeds op een element met de ",e.jsx(i.code,{children:".vl-content-block"})," class moet geplaatst worden."]}),`
`,e.jsx(u,{of:l})]})}function q(t={}){const{wrapper:i}={...s(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(r,{...t})}):r(t)}function x(t,i){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const j={id:"styles-layout-afnemers-content-block",title:"Styles/Layout (afnemers)/content-block",tags:["autodocs"],args:c,argTypes:g,parameters:{docs:{page:q}}};v([b]);const d=p(c,({contentBlock:t,contentBlockFullWidth:i})=>f`
        <div
            class="${h({"vl-content-block":t===!0||i===!0,"vl-content-block--full-width":i===!0})}"
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
    `),o=d.bind({});o.storyName="vl-content-block - default";o.args={contentBlock:!0,contentBlockFullWidth:!1};const l=d.bind({});l.storyName="vl-content-block - full width";l.args={contentBlock:!0,contentBlockFullWidth:!0};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`story(vlContentBlockArgs, ({
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
    \`)`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`story(vlContentBlockArgs, ({
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
    \`)`,...l.parameters?.docs?.source}}};const B=["ContentBlockDefault","ContentBlockFullWidth"];export{o as ContentBlockDefault,l as ContentBlockFullWidth,B as __namedExportsOrder,j as default};
