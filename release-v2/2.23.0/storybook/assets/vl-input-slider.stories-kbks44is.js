import{C as i,T as o,d as c,a as p,s as g}from"./stories.helper-DYHi_5m6.js";import{u as d,j as n,C as v,b4 as h,b as x}from"./iframe-Cv28D2NX.js";import"./preload-helper-PPVm8Dsz.js";const{action:f}=__STORYBOOK_MODULE_ACTIONS__,t={...p,maxValue:100,minValue:0,value:0,onChangeValue:f("vl-change-value")},j={...c,maxValue:{name:"max-value",description:"De maximumwaarde die geselecteerd kan worden.",table:{type:{summary:o.NUMBER},category:i.ATTRIBUTES,defaultValue:{summary:String(t.maxValue)}}},minValue:{name:"min-value",description:"De minimumwaarde die geselecteerd kan worden.",table:{type:{summary:o.NUMBER},category:i.ATTRIBUTES,defaultValue:{summary:String(t.minValue)}}},value:{name:"value",description:"De waarde van de input. Wordt gecorrigeerd indien deze zich onder de minValue of boven de maxValue begeeft.",table:{type:{summary:o.NUMBER},category:i.ATTRIBUTES,defaultValue:{summary:String(t.value)}}},onChangeValue:{name:"vl-change-value",description:"Afgevuurd na het aanpasssen van de waarde.<br>Het event bevat de huidige waarde.",table:{type:{summary:"{ value: number }"},category:i.EVENTS}}};function s(a){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...d(),...a.components},{FluxComponentMetaData:l}=e;return l||b("FluxComponentMetaData"),n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"input-slider",children:"Input Slider"}),`
`,n.jsx(l,{id:"components-block-input-slider"}),`
`,n.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,n.jsxs(e.p,{children:["Gebruik de ",n.jsx(e.code,{children:"input-slider"}),` om een waarde te selecteren tussen een minimum en maximum waarde.
`,n.jsx(e.strong,{children:"Let op"}),": deze component is niet dezelfde als de ",n.jsx(e.code,{children:"vl-ui-range"})," component van Digitaal Vlaanderen."]}),`
`,n.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`import { VlInputSliderComponent } from '@domg-wc/components/block';
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<vl-input-slider></vl-input-slider>
`})}),`
`,n.jsx(v,{of:r}),`
`,n.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,n.jsx(h,{of:r}),`
`,n.jsx(e.h2,{id:"referenties",children:"Referenties"}),`
`,n.jsxs(e.p,{children:["Dit is een nieuwe component binnen onze bibliotheek die gebaseerd is op de standaard ",n.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range",rel:"nofollow",children:"HTML5 input range slider"}),"."]}),`
`,n.jsxs(e.p,{children:["De stijl van deze component is gebaseerd op de ",n.jsx(e.code,{children:"vl-ui-range"})," ",n.jsx(e.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/componenten/range",rel:"nofollow",children:"component van Digitaal Vlaanderen"}),"."]})]})}function y(a={}){const{wrapper:e}={...d(),...a.components};return e?n.jsx(e,{...a,children:n.jsx(s,{...a})}):s(a)}function b(a,e){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}const w={id:"components-block-input-slider",title:"Components - Block/input-slider",tags:["autodocs"],args:t,argTypes:j,parameters:{docs:{page:y}}},r=g(t,({maxValue:a,minValue:e,value:l,onChangeValue:u})=>x`
            <vl-input-slider
                max-value=${a}
                min-value=${e}
                value=${l}
                @vl-change-value=${m=>u(m.detail)}
            ></vl-input-slider>
        `);r.storyName="vl-input-slider - default";const C=["InputSliderDefault"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(inputSliderArgs, ({
  maxValue,
  minValue,
  value,
  onChangeValue
}) => html\`
            <vl-input-slider
                max-value=\${maxValue}
                min-value=\${minValue}
                value=\${value}
                @vl-change-value=\${(event: CustomEvent) => onChangeValue(event.detail)}
            ></vl-input-slider>
        \`)`,...r.parameters?.docs?.source}}};export{r as InputSliderDefault,C as __namedExportsOrder,w as default};
