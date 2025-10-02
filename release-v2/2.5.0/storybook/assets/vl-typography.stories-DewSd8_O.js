import{G as h,H as y,u as g,j as t,C as b,bd as v,c1 as f,x as r}from"./iframe-CflcmDUD.js";import"./preload-helper-D9Z9MdNV.js";const q={...y,parameters:'{"key1": "tempus" , "key2": "ipsum" }'},x={...h,parameters:{name:"parameters",description:"De key/value parameters die verwerkt en getoond zullen worden in het content element.",control:{disable:!0},table:{type:{summary:"string"}}}};function m(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...g(),...i.components},{FluxAlert:o,FluxMetaData:d}=e;return o||c("FluxAlert"),d||c("FluxMetaData"),t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"typography",children:"Typography"}),`
`,t.jsx(d,{id:"components-block-typography"}),`
`,t.jsxs(e.p,{children:["Gebruik de ",t.jsx(e.code,{children:"typography"}),` component om de standaard elementen binnen een container visueel te stylen. De typography
component wordt voornamelijk gebruikt om de inhoud van een wysiwyg-editor te stylen zonder extra klassen toe te
voegen voor elk element.`]}),`
`,t.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`import { VlTypographyComponent } from '@domg-wc/components/block';
`})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<vl-typography></vl-typography>
`})}),`
`,t.jsx(e.h2,{id:"default",children:"Default"}),`
`,t.jsx(b,{of:a}),`
`,t.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,t.jsx(v,{of:a}),`
`,t.jsx(e.h2,{id:"gekende-beperkingen",children:"Gekende beperkingen"}),`
`,t.jsx(o,{type:"warning",children:`
De vl-typography component kan niet goed om met interactieve elementen zoals knoppen of formulieren. Het is
aangeraden om dit component enkel te gebruiken voor statische content.
`}),`
`,t.jsxs(e.p,{children:["We raden dus aan om interactieve componenten buiten ",t.jsx(e.code,{children:"vl-typography"}),"-tags te definiëren en de ",t.jsx(e.code,{children:"vl-typography"}),` enkel
te gebruiken om statische native html te stylen.`]}),`
`,t.jsxs(e.p,{children:["Als je dan toch een interactief element in een ",t.jsx(e.code,{children:"vl-typography"}),`-tag wil gebruiken en de events van dat element wil
afhandelen, kan je dit doen door een event listener toe te voegen aan de `,t.jsx(e.code,{children:"vl-typography"}),"-tag."]}),`
`,t.jsx(e.p,{children:"In Lit kan dit bijvoorbeeld als volgt:"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<vl-typography @vl-click=\${this.handleButtonClick}>
   <vl-button>Indienen</vl-button>
</vl-typography>
`})}),`
`,t.jsx(f,{title:"Varianten",includePrimary:!1}),`
`,t.jsx(e.h2,{id:"referenties",children:"Referenties"}),`
`,t.jsx(e.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/js-components/vl-ui-typography",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Typography"})}),`
`,t.jsx(e.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-typography--default",rel:"nofollow",children:"Legacy Storybook - Typography"})}),`
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlTypography.html",rel:"nofollow",children:"Legacy Documentatie - Typography"})}),`
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-typography.html",rel:"nofollow",children:"Legacy Demo - Typography"})})]})}function k(i={}){const{wrapper:e}={...g(),...i.components};return e?t.jsx(e,{...i,children:t.jsx(m,{...i})}):m(i)}function c(i,e){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}const D={id:"components-block-typography",title:"Components - Block/typography",tags:["autodocs"],args:q,argTypes:x,parameters:{docs:{page:k},controls:{hideNoControlsWarning:!0}}},a=()=>r` <vl-typography data-cy="typography">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        <a href="#">tempor incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p>Lorem dolor sit amet, consectetur adipisicing elit. Deleniti, in.</p>
</vl-typography>`;a.storyName="vl-typography - default";const l=()=>r` <vl-typography data-cy="typography">
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
</vl-typography>`;l.storyName="vl-typography - titles";const s=()=>r` <vl-typography data-cy="typography">
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
</vl-typography>`;s.storyName="vl-typography - lists";const u=()=>r` <vl-typography data-cy="typography">
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
</vl-typography>`;u.storyName="vl-typography - markup";const p=()=>r` <vl-typography data-cy="typography">
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
</vl-typography>`;p.storyName="vl-typography - table";const n=({parameters:i,key1:e,key2:o})=>r` <vl-typography parameters=${i} data-cy="typography">
        <p>
            Lorem <b>${e}</b> dolor sit amet, consectetur adipiscing elit. Duis iaculis molestie feugiat. Lorem
            <b>${o}</b> eros, consequat et venenatis ac, scelerisque feugiat nunc. Nam molestie tincidunt lectus, nec
            volutpat ante egestas at. Curabitur quis odio metus. Morbi at purus ac purus convallis <b>${e}</b> at eu
            est. Nunc id ligula quis justo semper ullamcorper. Donec orci nisi, <b>${e}</b> varius massa ut,
            vulputate imperdiet nibh. Maecenas <b>${e}</b> lectus quis turpis cursus, ac vehicula ligula fermentum.
        </p>
        <p>
            Praesent consequat diam nec semper congue. <b>${o}</b> tempor ut erat nec aliquam. Quisque ullamcorper
            sapien magna, sit amet porta <b>${o}</b> pulvinar aliquam. Sed eleifend fringilla augue in vehicula. Sed
            leo sem, imperdiet non ornare maximus, bibendum facilisis massa. Nunc condimentum leo mi, quis porta ante
            mattis ut. Quisque eu enim vel metus consequat iaculis. Donec malesuada odio quis quam vulputate vestibulum.
        </p>
    </vl-typography>`;n.storyName="vl-typography - parameters";n.args={key1:"${parameter.key1}",key2:"${parameter.key1}"};n.argTypes={parameters:{control:{disable:!1}},key1:{name:"key1 (for demo purposes)"},key2:{name:"key1 (for demo purposes)"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => html\` <vl-typography data-cy="typography">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        <a href="#">tempor incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p>Lorem dolor sit amet, consectetur adipisicing elit. Deleniti, in.</p>
</vl-typography>\``,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => html\` <vl-typography data-cy="typography">
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
</vl-typography>\``,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => html\` <vl-typography data-cy="typography">
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
</vl-typography>\``,...s.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => html\` <vl-typography data-cy="typography">
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
</vl-typography>\``,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => html\` <vl-typography data-cy="typography">
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
</vl-typography>\``,...p.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
  parameters,
  key1,
  key2
}: any) => {
  return html\` <vl-typography parameters=\${parameters} data-cy="typography">
        <p>
            Lorem <b>\${key1}</b> dolor sit amet, consectetur adipiscing elit. Duis iaculis molestie feugiat. Lorem
            <b>\${key2}</b> eros, consequat et venenatis ac, scelerisque feugiat nunc. Nam molestie tincidunt lectus, nec
            volutpat ante egestas at. Curabitur quis odio metus. Morbi at purus ac purus convallis <b>\${key1}</b> at eu
            est. Nunc id ligula quis justo semper ullamcorper. Donec orci nisi, <b>\${key1}</b> varius massa ut,
            vulputate imperdiet nibh. Maecenas <b>\${key1}</b> lectus quis turpis cursus, ac vehicula ligula fermentum.
        </p>
        <p>
            Praesent consequat diam nec semper congue. <b>\${key2}</b> tempor ut erat nec aliquam. Quisque ullamcorper
            sapien magna, sit amet porta <b>\${key2}</b> pulvinar aliquam. Sed eleifend fringilla augue in vehicula. Sed
            leo sem, imperdiet non ornare maximus, bibendum facilisis massa. Nunc condimentum leo mi, quis porta ante
            mattis ut. Quisque eu enim vel metus consequat iaculis. Donec malesuada odio quis quam vulputate vestibulum.
        </p>
    </vl-typography>\`;
}`,...n.parameters?.docs?.source}}};const T=["TypographyDefault","TypographyTitles","TypographyLists","TypographyMarkup","TypographyTable","TypographyParameters"];export{a as TypographyDefault,s as TypographyLists,u as TypographyMarkup,n as TypographyParameters,p as TypographyTable,l as TypographyTitles,T as __namedExportsOrder,D as default};
