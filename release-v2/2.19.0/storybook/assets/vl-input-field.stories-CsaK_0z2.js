import{u as p,j as e,C as d,b8 as _,s as m,x as h,r as Z,V as H}from"./iframe-CY-ZM549.js";import{i as T,a as s}from"./vl-input-field.stories-arg-DqwJqmsg.js";import{M as S}from"./form-control.public-methods-doc-DkaRTqkF.js";import"./preload-helper-D9Z9MdNV.js";import"./form-control.stories-arg-B6yBTQ6J.js";function u(i){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...p(),...i.components},{FluxComponentMetaData:o}=n;return o||P("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"input-field",children:"Input Field"}),`
`,e.jsx(o,{id:"components-form-input-field"}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(n.p,{children:["Gebruik de ",e.jsx(n.code,{children:"input-field"})," component om een input veld toe te voegen aan een pagina.",e.jsx("br",{}),`
Zie het `,e.jsx(n.a,{href:"/docs/patronen-formulier-demo--documentatie",children:"form demo"})," voorbeeld voor het gebruik binnen een form."]}),`
`,e.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { VlInputFieldComponent } from '@domg-wc/components/form';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-input-field></vl-input-field>
`})}),`
`,e.jsx(d,{of:r}),`
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(_,{of:r}),`
`,e.jsx(n.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(n.h3,{id:"number",children:"Number"}),`
`,e.jsx(d,{of:l}),`
`,e.jsx(n.h3,{id:"input-group",children:"Input Group"}),`
`,e.jsxs(n.p,{children:["Het ",e.jsx(n.code,{children:"input-group"}),` attribuut is er om het input veld een specifieke stijl te geven in combinatie met een knop. Het
attribuut doet enkel iets in die combinatie. Zie `,e.jsx(n.a,{href:"/docs/components-form-input-group--documentatie",children:"Input Group [next]"}),`
voor meer informatie en voorbeelden.`]}),`
`,e.jsx(n.h3,{id:"describedby",children:"Describedby"}),`
`,e.jsxs(n.p,{children:["Met het ",e.jsx(n.code,{children:"describedby"}),` attribuut koppel je een extra beschrijving aan het veld voor gebruikers van een screenreader.
Verwijs naar het `,e.jsx(n.code,{children:"id"})," van een element in de light DOM; de tekst wordt overgenomen en via ",e.jsx(n.code,{children:"aria-describedby"}),`
gekoppeld aan het veld. Handig wanneer visuele context (bv. een eenheid naast het veld) ook hoorbaar moet zijn. De
koppeling volgt latere tekstwijzigingen van het aangeduide element. Het bron-element krijgt automatisch
`,e.jsx(n.code,{children:"aria-hidden"})," (tenzij je het zelf al zette) zodat de beschrijving niet twee keer wordt voorgelezen."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-input-field label="Lengte" describedby="eenheid"></vl-input-field>
<span aria-hidden="true">m</span>
<span class="vl-visually-hidden" id="eenheid">meter</span>
`})}),`
`,e.jsx(d,{of:t}),`
`,e.jsx(n.h2,{id:"type",children:"Type"}),`
`,e.jsxs(n.p,{children:["Momenteel ondersteunen we volgende ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types",rel:"nofollow",children:"input types"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"text"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"number"})}),`
`]}),`
`,e.jsx(n.p,{children:"Daarnaast voorzien we voor enkele andere types ook een eigen component:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"date"}),": ",e.jsx(n.a,{href:"/docs/components-form-datepicker--documentatie",children:"vl-datepicker"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"file"}),": ",e.jsx(n.a,{href:"/docs/components-form-upload--documentatie",children:"vl-upload"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"checkbox"}),": ",e.jsx(n.a,{href:"/docs/components-form-checkbox--documentatie",children:"vl-checkbox"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"radio-group"}),": ",e.jsx(n.a,{href:"/docs/components-form-radio-group--documentatie",children:"vl-radio-group"})]}),`
`]}),`
`,e.jsx(n.p,{children:"De andere types instellen kan onverwachte gevolgen hebben op vlak van validatie."}),`
`,e.jsx(n.h2,{id:"publieke-methodes",children:"Publieke methodes"}),`
`,e.jsx(S,{}),`
`,e.jsx(n.h2,{id:"pattern-validatie",children:"Pattern validatie"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Meer info over validatie binnen onze form componenten vind je hier: ",e.jsx(n.a,{href:"/docs/patronen-formulier-validatie--documentatie",children:"Form - Validatie"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Pattern validatie kan op 2 manieren gebeuren:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Via het ",e.jsx(n.code,{children:"pattern"})," attribuut"]}),`
`,e.jsxs(n.li,{children:["Via de ",e.jsx(n.code,{children:"regex"})," property"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Het ",e.jsx(n.code,{children:"pattern"})," attribuut kan gebruikt worden voor eenvoudige validatie.",e.jsx("br",{}),`
De `,e.jsx(n.code,{children:"regex"})," property kan gebruikt worden voor complexere validatie."]}),`
`,e.jsx(n.h3,{id:"e-mail",children:"E-mail"}),`
`,e.jsxs(n.p,{children:["Voor eenvoudige e-mailadres validatie kan je gebruik maken van het ",e.jsx(n.code,{children:"pattern"})," attribuut."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`.+@vlaanderen.be$
`})}),`
`,e.jsxs(n.p,{children:["Voor complexere e-mailadres validatie kan je gebruik maken van de ",e.jsx(n.code,{children:"regex"})," property.",e.jsx("br",{}),`
Zie `,e.jsx(n.a,{href:"https://emailregex.com/",rel:"nofollow",children:"emailregex.com"})," voor een uitgebreid voorbeeld, zie hieronder voor één van de simpelere voorbeelden."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$/
`})}),`
`,e.jsx(n.h3,{id:"integer",children:"Integer"}),`
`,e.jsxs(n.p,{children:["Voor het valideren van een integer kan je gebruik maken van het ",e.jsx(n.code,{children:"pattern"})," attribuut.",e.jsx("br",{}),`
Je gebruikt dit best in combinatie met `,e.jsx(n.code,{children:'type="number"'}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`^[0-9]*$
`})}),`
`,e.jsx(n.h3,{id:"masks",children:"Masks"}),`
`,e.jsxs(n.p,{children:["Voor mask validatie kan je gebruik maken van de ",e.jsx(n.a,{href:"/docs/components-form-input-field-masked--documentatie",children:"vl-input-field-masked"})," component."]}),`
`,e.jsx(n.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(n.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/componenten/input-field",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Input field"})})]})}function X(i={}){const{wrapper:n}={...p(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(u,{...i})}):u(i)}function P(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}Z([H]);const K={id:"components-form-input-field",title:"Components - Form/input-field",tags:["autodocs"],args:s,argTypes:T,parameters:{docs:{page:X}}},c=m(s,({id:i,name:n,label:o,required:x,disabled:v,error:b,success:g,blurValidation:$,block:j,readonly:f,type:k,value:y,placeholder:V,autocomplete:F,minLength:I,maxLength:w,min:D,max:C,minExclusive:E,maxExclusive:L,pattern:M,inputGroup:z,regex:q,onVlInput:G,onVlReset:A,onVlChange:N,onVlValid:R})=>h` <vl-input-field
            id=${i}
            name=${n}
            label=${o}
            ?required=${x}
            ?disabled=${v}
            ?error=${b}
            ?success=${g}
            ?blur-validation=${$}
            ?block=${j}
            ?readonly=${f}
            type=${k}
            value=${y}
            placeholder=${V}
            autocomplete=${F}
            min-length=${I}
            max-length=${w}
            min=${D}
            max=${C}
            min-exclusive=${E}
            max-exclusive=${L}
            pattern=${M}
            inputGroup=${z}
            .regex=${q}
            @vl-change=${N}
            @vl-input=${G}
            @vl-reset=${A}
            @vl-valid=${R}
        ></vl-input-field>`),r=c.bind({});r.storyName="vl-input-field - default";const l=c.bind({});l.storyName="vl-input-field - number";l.args={type:"number"};const a=c.bind({});a.storyName="vl-input-field - blur validation";a.args={required:!0,minLength:3,pattern:"^[a-zA-Z]+$",blurValidation:!0,placeholder:"Min. 3 letters"};const t=m(s,({name:i,label:n})=>h`
        <div class="vl-group vl-group--align-center">
            <vl-input-field name=${i} label=${n} type="text" describedby="eenheid"></vl-input-field>
            <span aria-hidden="true">m</span>
            <span class="vl-visually-hidden" id="eenheid">meter</span>
        </div>
    `);t.storyName="vl-input-field - describedby";t.args={label:"Lengte",name:"lengte"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(inputFieldArgs, ({
  id,
  name,
  label,
  required,
  disabled,
  error,
  success,
  blurValidation,
  block,
  readonly,
  type,
  value,
  placeholder,
  autocomplete,
  minLength,
  maxLength,
  min,
  max,
  minExclusive,
  maxExclusive,
  pattern,
  inputGroup,
  regex,
  onVlInput,
  onVlReset,
  onVlChange,
  onVlValid
}) => {
  return html\` <vl-input-field
            id=\${id}
            name=\${name}
            label=\${label}
            ?required=\${required}
            ?disabled=\${disabled}
            ?error=\${error}
            ?success=\${success}
            ?blur-validation=\${blurValidation}
            ?block=\${block}
            ?readonly=\${readonly}
            type=\${type}
            value=\${value}
            placeholder=\${placeholder}
            autocomplete=\${autocomplete}
            min-length=\${minLength}
            max-length=\${maxLength}
            min=\${min}
            max=\${max}
            min-exclusive=\${minExclusive}
            max-exclusive=\${maxExclusive}
            pattern=\${pattern}
            inputGroup=\${inputGroup}
            .regex=\${regex}
            @vl-change=\${onVlChange}
            @vl-input=\${onVlInput}
            @vl-reset=\${onVlReset}
            @vl-valid=\${onVlValid}
        ></vl-input-field>\`;
})`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`story(inputFieldArgs, ({
  id,
  name,
  label,
  required,
  disabled,
  error,
  success,
  blurValidation,
  block,
  readonly,
  type,
  value,
  placeholder,
  autocomplete,
  minLength,
  maxLength,
  min,
  max,
  minExclusive,
  maxExclusive,
  pattern,
  inputGroup,
  regex,
  onVlInput,
  onVlReset,
  onVlChange,
  onVlValid
}) => {
  return html\` <vl-input-field
            id=\${id}
            name=\${name}
            label=\${label}
            ?required=\${required}
            ?disabled=\${disabled}
            ?error=\${error}
            ?success=\${success}
            ?blur-validation=\${blurValidation}
            ?block=\${block}
            ?readonly=\${readonly}
            type=\${type}
            value=\${value}
            placeholder=\${placeholder}
            autocomplete=\${autocomplete}
            min-length=\${minLength}
            max-length=\${maxLength}
            min=\${min}
            max=\${max}
            min-exclusive=\${minExclusive}
            max-exclusive=\${maxExclusive}
            pattern=\${pattern}
            inputGroup=\${inputGroup}
            .regex=\${regex}
            @vl-change=\${onVlChange}
            @vl-input=\${onVlInput}
            @vl-reset=\${onVlReset}
            @vl-valid=\${onVlValid}
        ></vl-input-field>\`;
})`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`story(inputFieldArgs, ({
  id,
  name,
  label,
  required,
  disabled,
  error,
  success,
  blurValidation,
  block,
  readonly,
  type,
  value,
  placeholder,
  autocomplete,
  minLength,
  maxLength,
  min,
  max,
  minExclusive,
  maxExclusive,
  pattern,
  inputGroup,
  regex,
  onVlInput,
  onVlReset,
  onVlChange,
  onVlValid
}) => {
  return html\` <vl-input-field
            id=\${id}
            name=\${name}
            label=\${label}
            ?required=\${required}
            ?disabled=\${disabled}
            ?error=\${error}
            ?success=\${success}
            ?blur-validation=\${blurValidation}
            ?block=\${block}
            ?readonly=\${readonly}
            type=\${type}
            value=\${value}
            placeholder=\${placeholder}
            autocomplete=\${autocomplete}
            min-length=\${minLength}
            max-length=\${maxLength}
            min=\${min}
            max=\${max}
            min-exclusive=\${minExclusive}
            max-exclusive=\${maxExclusive}
            pattern=\${pattern}
            inputGroup=\${inputGroup}
            .regex=\${regex}
            @vl-change=\${onVlChange}
            @vl-input=\${onVlInput}
            @vl-reset=\${onVlReset}
            @vl-valid=\${onVlValid}
        ></vl-input-field>\`;
})`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`story(inputFieldArgs, ({
  name,
  label
}) => html\`
        <div class="vl-group vl-group--align-center">
            <vl-input-field name=\${name} label=\${label} type="text" describedby="eenheid"></vl-input-field>
            <span aria-hidden="true">m</span>
            <span class="vl-visually-hidden" id="eenheid">meter</span>
        </div>
    \`)`,...t.parameters?.docs?.source}}};const Q=["InputFieldDefault","InputFieldNumber","InputFieldBlurValidation","InputFieldDescribedby"];export{a as InputFieldBlurValidation,r as InputFieldDefault,t as InputFieldDescribedby,l as InputFieldNumber,Q as __namedExportsOrder,K as default};
