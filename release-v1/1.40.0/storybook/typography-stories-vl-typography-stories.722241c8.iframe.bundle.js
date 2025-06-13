"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[2223],{"../../libs/components/src/typography/stories/vl-typography.stories.ts":(e,t,i)=>{i.r(t),i.d(t,{TypographyDefault:()=>c,TypographyLists:()=>g,TypographyMarkup:()=>h,TypographyParameters:()=>v,TypographyTable:()=>b,TypographyTitles:()=>y,__namedExportsOrder:()=>q,default:()=>m});var a=i("../../node_modules/lit-html/lit-html.js");i("../../libs/components/src/typography/vl-typography.component.ts");var o=i("../../libs/common/storybook/src/index.ts");let n={...o.D8,parameters:'{"key1": "tempus" , "key2": "ipsum" }'},r={...(0,o.RN)(),parameters:{name:"data-vl-parameters",description:"De key/value parameters die verwerkt en getoond zullen worden in het content element.",control:{disable:!0},table:{type:{summary:"string"}}}};i("../../node_modules/react/index.js");var l=i("../../node_modules/react/jsx-runtime.js"),s=i("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),u=i("../../node_modules/@storybook/blocks/dist/index.mjs");function p(e){let t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",a:"a"},(0,s.RP)(),e.components),{VluxMetaData:i,VluxAlert:a}=t;return a||d("VluxAlert",!0),i||d("VluxMetaData",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"typography",children:"Typography"}),"\n",(0,l.jsx)(i,{id:"components-typography"}),"\n",(0,l.jsxs)(t.p,{children:["Gebruik de ",(0,l.jsx)(t.code,{children:"typography"})," component om de standaard elementen binnen een container visueel te stylen. De typography\ncomponent wordt voornamelijk gebruikt om de inhoud van een wysiwyg-editor te stylen zonder extra klassen toe te\nvoegen voor elk element."]}),"\n",(0,l.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-js",children:"import { VlTypographyComponent } from '@domg-wc/components';\n"})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-html",children:"<vl-typography></vl-typography>\n"})}),"\n",(0,l.jsx)(t.h2,{id:"default",children:"Default"}),"\n",(0,l.jsx)(u.Hl,{of:c}),"\n",(0,l.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,l.jsx)(u.ov,{of:c}),"\n",(0,l.jsx)(t.h2,{id:"gekende-beperkingen",children:"Gekende beperkingen"}),"\n",(0,l.jsx)(a,{type:"warning",children:`
  De vl-typography component kan niet goed om met interactieve elementen zoals knoppen of formulieren. Het is
  aangeraden om dit component enkel te gebruiken voor statische content.
`}),"\n",(0,l.jsxs)(t.p,{children:["We raden dus aan om interactieve componenten buiten ",(0,l.jsx)(t.code,{children:"vl-typography"}),"-tags te definiëren en de ",(0,l.jsx)(t.code,{children:"vl-typography"})," enkel\nte gebruiken om statische native html te stylen."]}),"\n",(0,l.jsxs)(t.p,{children:["Als je dan toch een interactief element in een ",(0,l.jsx)(t.code,{children:"vl-typography"}),"-tag wil gebruiken en de events van dat element wil\nafhandelen, kan je dit doen door een event listener toe te voegen aan de ",(0,l.jsx)(t.code,{children:"vl-typography"}),"-tag."]}),"\n",(0,l.jsx)(t.p,{children:"In Lit kan dit bijvoorbeeld als volgt:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-html",children:"<vl-typography @vl-click=${this.handleButtonClick}>\n   <vl-button-next>Indienen</vl-button-next>\n</vl-typography>\n"})}),"\n",(0,l.jsx)(u.om,{title:"Varianten",includePrimary:!1}),"\n",(0,l.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,l.jsx)(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/js-components/vl-ui-typography",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Typography"})}),"\n",(0,l.jsx)(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-typography--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Typography"})}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlTypography.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Typography"})}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-typography.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - Typography"})})]})}function d(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}let m={id:"components-typography",title:"Components/typography",tags:["autodocs"],args:n,argTypes:r,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,s.RP)(),e.components);return t?(0,l.jsx)(t,Object.assign({},e,{children:(0,l.jsx)(p,e)})):p(e)}},controls:{hideNoControlsWarning:!0}}},c=()=>(0,a.qy)` <vl-typography data-cy="typography">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        <a href="#">tempor incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p>Lorem dolor sit amet, consectetur adipisicing elit. Deleniti, in.</p>
</vl-typography>`;c.storyName="vl-typography - default";let y=()=>(0,a.qy)` <vl-typography data-cy="typography">
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
</vl-typography>`;y.storyName="vl-typography - titles";let g=()=>(0,a.qy)` <vl-typography data-cy="typography">
    <ul>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
        <li>
            Sublist
            <ul>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum.</li>
            </ul>
        </li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, neque.</li>
    </ul>
    <ul>
        <li>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </p>
        </li>
    </ul>

    <ol>
        <li>Lorem ipsum dolor sit.</li>
        <li>Lorem ipsum dolor sit amet, consectetur.</li>
        <li>
            Sublist
            <ol>
                <li>Lorem dolor sit.</li>
                <li>Lorem ipsum.</li>
            </ol>
        </li>
        <li>Lorem ipsum.</li>
    </ol>

    <ul>
        <li>
            Ordered list inside unordered list
            <ol>
                <li>Lorem dolor sit.</li>
                <li>
                    Ordered list inside ordered list
                    <ol>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ol>
                </li>
            </ol>
        </li>
    </ul>
</vl-typography>`;g.storyName="vl-typography - lists";let h=()=>(0,a.qy)` <vl-typography data-cy="typography">
    <p><strong>strong-tag</strong></p>
    <p><b>b-tag</b></p>
    <p><em>em-tag</em></p>
    <p><i>i-tag</i></p>
    <p><s>s-tag</s></p>
    <p>
        <mark>mark-tag</mark>
    </p>
    <p><code>code-tag</code></p>
    <p></p>
    <pre>pre-tag</pre>
    <p></p>
    <p></p>
    <hr />
    <p></p>
    <p></p>
    <blockquote>Lorem ipsum dolor sit amet.</blockquote>
    <p></p>
</vl-typography>`;h.storyName="vl-typography - markup";let b=()=>(0,a.qy)` <vl-typography data-cy="typography">
    <table>
        <caption>
            table title
        </caption>
        <thead>
            <tr>
                <th>head 1</th>
                <th>head 2</th>
                <th>head 3</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>item 1</td>
                <td>item 2</td>
                <td>item 3</td>
            </tr>
            <tr>
                <td>item 1</td>
                <td>item 2</td>
                <td>item 3</td>
            </tr>
            <tr>
                <td>item 1</td>
                <td>item 2</td>
                <td>item 3</td>
            </tr>
        </tbody>
    </table>
</vl-typography>`;b.storyName="vl-typography - table";let v=({parameters:e,key1:t,key2:i})=>(0,a.qy)` <vl-typography data-vl-parameters=${e} data-cy="typography">
        <p>
            Lorem <b>${t}</b> dolor sit amet, consectetur adipiscing elit. Duis iaculis molestie feugiat. Lorem
            <b>${i}</b> eros, consequat et venenatis ac, scelerisque feugiat nunc. Nam molestie tincidunt lectus, nec
            volutpat ante egestas at. Curabitur quis odio metus. Morbi at purus ac purus convallis <b>${t}</b> at eu
            est. Nunc id ligula quis justo semper ullamcorper. Donec orci nisi, <b>${t}</b> varius massa ut,
            vulputate imperdiet nibh. Maecenas <b>${t}</b> lectus quis turpis cursus, ac vehicula ligula fermentum.
        </p>
        <p>
            Praesent consequat diam nec semper congue. <b>${i}</b> tempor ut erat nec aliquam. Quisque ullamcorper
            sapien magna, sit amet porta <b>${i}</b> pulvinar aliquam. Sed eleifend fringilla augue in vehicula. Sed
            leo sem, imperdiet non ornare maximus, bibendum facilisis massa. Nunc condimentum leo mi, quis porta ante
            mattis ut. Quisque eu enim vel metus consequat iaculis. Donec malesuada odio quis quam vulputate vestibulum.
        </p>
    </vl-typography>`;v.storyName="vl-typography - parameters",v.args={key1:"${parameter.key1}",key2:"${parameter.key1}"},v.argTypes={parameters:{control:{disable:!1}},key1:{name:"key1 (for demo purposes)"},key2:{name:"key1 (for demo purposes)"}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:'() => html` <vl-typography data-cy="typography">\n    <p>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n        <a href="#">tempor incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\n        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,\n        sunt in culpa qui officia deserunt mollit anim id est laborum.\n    </p>\n    <p>Lorem dolor sit amet, consectetur adipisicing elit. Deleniti, in.</p>\n</vl-typography>`',...c.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:'() => html` <vl-typography data-cy="typography">\n    <h1>Heading 1</h1>\n    <h2>Heading 2</h2>\n    <h3>Heading 3</h3>\n    <h4>Heading 4</h4>\n    <h5>Heading 5</h5>\n    <h6>Heading 6</h6>\n</vl-typography>`',...y.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:'() => html` <vl-typography data-cy="typography">\n    <ul>\n        <li>Lorem ipsum dolor sit amet.</li>\n        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>\n        <li>\n            Sublist\n            <ul>\n                <li>Lorem ipsum dolor sit.</li>\n                <li>Lorem ipsum.</li>\n            </ul>\n        </li>\n        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, neque.</li>\n    </ul>\n    <ul>\n        <li>\n            <p>\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu\n                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia\n                deserunt mollit anim id est laborum.\n            </p>\n            <p>\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu\n                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia\n                deserunt mollit anim id est laborum.\n            </p>\n            <p>\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu\n                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia\n                deserunt mollit anim id est laborum.\n            </p>\n            <p>\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu\n                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia\n                deserunt mollit anim id est laborum.\n            </p>\n        </li>\n    </ul>\n\n    <ol>\n        <li>Lorem ipsum dolor sit.</li>\n        <li>Lorem ipsum dolor sit amet, consectetur.</li>\n        <li>\n            Sublist\n            <ol>\n                <li>Lorem dolor sit.</li>\n                <li>Lorem ipsum.</li>\n            </ol>\n        </li>\n        <li>Lorem ipsum.</li>\n    </ol>\n\n    <ul>\n        <li>\n            Ordered list inside unordered list\n            <ol>\n                <li>Lorem dolor sit.</li>\n                <li>\n                    Ordered list inside ordered list\n                    <ol>\n                        <li>Lorem ipsum dolor sit amet.</li>\n                    </ol>\n                </li>\n            </ol>\n        </li>\n    </ul>\n</vl-typography>`',...g.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:'() => html` <vl-typography data-cy="typography">\n    <p><strong>strong-tag</strong></p>\n    <p><b>b-tag</b></p>\n    <p><em>em-tag</em></p>\n    <p><i>i-tag</i></p>\n    <p><s>s-tag</s></p>\n    <p>\n        <mark>mark-tag</mark>\n    </p>\n    <p><code>code-tag</code></p>\n    <p></p>\n    <pre>pre-tag</pre>\n    <p></p>\n    <p></p>\n    <hr />\n    <p></p>\n    <p></p>\n    <blockquote>Lorem ipsum dolor sit amet.</blockquote>\n    <p></p>\n</vl-typography>`',...h.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:'() => html` <vl-typography data-cy="typography">\n    <table>\n        <caption>\n            table title\n        </caption>\n        <thead>\n            <tr>\n                <th>head 1</th>\n                <th>head 2</th>\n                <th>head 3</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n                <td>item 1</td>\n                <td>item 2</td>\n                <td>item 3</td>\n            </tr>\n            <tr>\n                <td>item 1</td>\n                <td>item 2</td>\n                <td>item 3</td>\n            </tr>\n            <tr>\n                <td>item 1</td>\n                <td>item 2</td>\n                <td>item 3</td>\n            </tr>\n        </tbody>\n    </table>\n</vl-typography>`',...b.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:'({\n  parameters,\n  key1,\n  key2\n}: any) => {\n  return html` <vl-typography data-vl-parameters=${parameters} data-cy="typography">\n        <p>\n            Lorem <b>${key1}</b> dolor sit amet, consectetur adipiscing elit. Duis iaculis molestie feugiat. Lorem\n            <b>${key2}</b> eros, consequat et venenatis ac, scelerisque feugiat nunc. Nam molestie tincidunt lectus, nec\n            volutpat ante egestas at. Curabitur quis odio metus. Morbi at purus ac purus convallis <b>${key1}</b> at eu\n            est. Nunc id ligula quis justo semper ullamcorper. Donec orci nisi, <b>${key1}</b> varius massa ut,\n            vulputate imperdiet nibh. Maecenas <b>${key1}</b> lectus quis turpis cursus, ac vehicula ligula fermentum.\n        </p>\n        <p>\n            Praesent consequat diam nec semper congue. <b>${key2}</b> tempor ut erat nec aliquam. Quisque ullamcorper\n            sapien magna, sit amet porta <b>${key2}</b> pulvinar aliquam. Sed eleifend fringilla augue in vehicula. Sed\n            leo sem, imperdiet non ornare maximus, bibendum facilisis massa. Nunc condimentum leo mi, quis porta ante\n            mattis ut. Quisque eu enim vel metus consequat iaculis. Donec malesuada odio quis quam vulputate vestibulum.\n        </p>\n    </vl-typography>`;\n}',...v.parameters?.docs?.source}}};let q=["TypographyDefault","TypographyTitles","TypographyLists","TypographyMarkup","TypographyTable","TypographyParameters"]}}]);