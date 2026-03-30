import{Y as r,Z as o,a0 as v,a1 as S,cM as x,cN as N,U as O,cO as T,cP as D,cQ as M,W as _,u as w,j as e,C as u,bb as U,S as I,s as m,x as i,r as V,h as P}from"./iframe-B6HStWZE.js";import"./preload-helper-D9Z9MdNV.js";async function F(a,t){const c=await(await fetch(`https://geo.api.vlaanderen.be/geolocation/suggestion?q=${t}&c=${a.maxSuggestions}`)).json();a.matches=c.SuggestionResult.map(d=>({title:d,value:d}))}async function z(a,t){return{SuggestionResult:["Drabbinkdreef, Gent","Drabstraat, Gent","Drabstraat, Kontich","Drabstraat, Mechelen","Drabstraat, Mortsel","Drabstraat, Wichelen","Drabstraat, Zwevezele"].filter(d=>d.toLowerCase().startsWith(a.toLowerCase())).slice(0,t)}}async function H(a,t){const s=await z(t,a.maxSuggestions);a.matches=s.SuggestionResult.map(c=>({title:c,value:c}))}const{action:f}=__STORYBOOK_MODULE_ACTIONS__,j=[{title:"Gent",subtitle:"Gemeente",value:"1"},{title:"Gentbos, Merelbeke",subtitle:"Adres",value:"2"},{title:"Gentbruggestraat, Gent",subtitle:"Adres",value:"3"},{title:"Gentele, Brugge",subtitle:"Adres",value:"5"},{title:"Automotive Contractors Gent ",subtitle:"Project",value:"6"},{title:"Buurtshuis Watersportbaan Gent",subtitle:"Project",value:"7"}],n={..._,placeholder:"",initialValue:"",label:"",labelSmall:!1,minChars:M,maxSuggestions:D,captionFormat:T.TITLE_SUBTITLE_VERTICAL,groupBy:"",showClear:!1,disableLoading:!1,clearTooltip:"Wissen",noMatchesText:"Geen resultaat",items:[],search:f("search"),selectedAutocomplete:f("selected-autocomplete"),clear:f("clear")},q={...O,placeholder:{name:"placeholder",description:"Attribuut wordt gebruikt om de placeholder te bepalen.",type:{name:o.STRING,required:!1},table:{type:{summary:o.STRING},category:r.ATTRIBUTES,defaultValue:{summary:n.placeholder}}},initialValue:{name:"initial-value",description:"Attribuut wordt gebruikt om de initiële waarde te bepalen.",type:{name:o.STRING,required:!1},table:{type:{summary:o.STRING},category:r.ATTRIBUTES,defaultValue:{summary:n.initialValue}}},label:{name:"label",description:"Attribuut wordt gebruikt om het label te bepalen.",type:{name:o.STRING,required:!1},table:{type:{summary:o.STRING},category:r.ATTRIBUTES,defaultValue:{summary:n.label}}},labelSmall:{name:"label-small",description:"Attribuut wordt gebruikt om het label kleiner te maken.",type:{name:o.BOOLEAN,required:!1},table:{type:{summary:o.BOOLEAN},category:r.ATTRIBUTES,defaultValue:{summary:String(n.labelSmall)}}},minChars:{name:"min-chars",description:"Attribuut wordt gebruikt om te bepalen hoeveel karakters de gebruiker moet ingeven alvorens de suggesties getoond worden.",control:{type:v.RANGE,min:1,max:10,step:1},type:{name:o.NUMBER,required:!1},table:{type:{summary:o.NUMBER},category:r.ATTRIBUTES,defaultValue:{summary:String(n.minChars)}}},maxSuggestions:{name:"max-suggestions",description:"Attribuut wordt gebruikt om het maximum aantal suggesties dat getoond moet worden te bepalen.",control:{type:v.RANGE,min:1,max:20,step:1},type:{name:o.NUMBER,required:!1},table:{type:{summary:o.NUMBER},category:r.ATTRIBUTES,defaultValue:{summary:String(n.maxSuggestions)}}},captionFormat:{name:"caption-format",description:"Attribuut bepaalt hoe ieder item in de suggestielijst getoond wordt.",control:{type:v.SELECT},options:Object.values(T),type:{name:o.STRING,required:!1},table:{type:{summary:S(Object.values(T))},category:r.ATTRIBUTES,defaultValue:{summary:N}}},groupBy:{name:"group-by",description:"Attribuut bepaalt hoe de items in de lijst gegroepeerd moeten worden.",control:{type:v.SELECT},options:[x.TITLE,x.SUBTITLE],type:{name:o.STRING,required:!1},table:{type:{summary:S(Object.values(x))},category:r.ATTRIBUTES,defaultValue:{summary:n.groupBy}}},showClear:{name:"show-clear",description:"Attribuut wordt gebruikt om te bepalen of het clear-icoon getoond moet worden.",type:{name:o.BOOLEAN,required:!1},table:{type:{summary:o.BOOLEAN},category:r.ATTRIBUTES,defaultValue:{summary:String(n.showClear)}}},disableLoading:{name:"disable-loading",description:"Bepaalt of de laad-animatie getoond wordt.",type:{name:o.BOOLEAN,required:!1},table:{type:{summary:o.BOOLEAN},category:r.ATTRIBUTES,defaultValue:{summary:String(n.disableLoading)}}},clearTooltip:{name:"clear-tooltip",description:"Attribuut wordt gebruikt om de tekst te bepalen die getoond wordt bij hover van het clear-icoon.",type:{name:o.STRING,required:!1},table:{type:{summary:o.STRING},category:r.ATTRIBUTES,defaultValue:{summary:String(n.clearTooltip)}}},noMatchesText:{name:"no-matches-text",description:"Attribuut wordt gebruikt om de tekst te bepalen die getoond wordt als er geen suggesties zijn.",type:{name:o.STRING,required:!1},table:{type:{summary:o.STRING},category:r.ATTRIBUTES,defaultValue:{summary:String(n.noMatchesText)}}},items:{name:"items",description:"Gebruik deze property wanneer je een statische lijst van items wilt gebruiken.",control:{type:v.OBJECT},table:{category:r.PROPERTIES,type:{summary:o.ARRAY},defaultValue:{summary:String(n.items)}}},search:{name:"search",description:'Dit custom event wordt getriggerd wanneer de gebruiker karakters ingeeft in het tekstvak terwijl de component geen items heeft. Gebruik dit event wanneer je de suggestielijst wilt vullen met items uit een API-call. Bekijk de story "WithInputAndApiCall" voor meer details.',table:{type:{summary:"-"},category:r.EVENTS}},selectedAutocomplete:{name:"selected-autocomplete",description:"Dit custom event wordt getriggerd wanneer de gebruiker een item selecteert uit de suggestielijst. De geselecteerde waarde kan worden opgevraagd via het detail van het event.",table:{type:{summary:"-"},category:r.EVENTS}},clear:{name:"clear",description:"Dit custom event wordt getriggerd wanneer de gebruiker het clear-icoon aanklikt.",table:{type:{summary:"-"},category:r.EVENTS}}},W=`export async function fetchDataFromApiCall(autocomplete: any, searchTerm: any) {
    const result = await fetch(
        \`https://geo.api.vlaanderen.be/geolocation/suggestion?q=\${searchTerm}&c=\${autocomplete.maxSuggestions}\`
    );
    const responseBody = await result.json();
    autocomplete.matches = responseBody.SuggestionResult.map((obj: string) => ({
        title: obj,
        value: obj,
    }));
}
`,Z=`export async function mockedApiCall(searchTerm: any, maxSuggestions: any) {
    const results = [
        'Drabbinkdreef, Gent',
        'Drabstraat, Gent',
        'Drabstraat, Kontich',
        'Drabstraat, Mechelen',
        'Drabstraat, Mortsel',
        'Drabstraat, Wichelen',
        'Drabstraat, Zwevezele',
    ];
    const filteredResults = results
        .filter((i) => i.toLowerCase().startsWith(searchTerm.toLowerCase()))
        .slice(0, maxSuggestions);
    return {
        SuggestionResult: filteredResults,
    };
}

export async function fetchDataFromMockedApiCall(autocomplete: any, searchTerm: any) {
    const responseBody = await mockedApiCall(searchTerm, autocomplete.maxSuggestions);
    autocomplete.matches = responseBody.SuggestionResult.map((obj) => ({
        title: obj,
        value: obj,
    }));
}
`;function k(a){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...w(),...a.components},{FluxComponentMetaData:s}=t;return s||X("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"autocomplete",children:"Autocomplete"}),`
`,e.jsx(s,{id:"components-block-autocomplete"}),`
`,e.jsx(t.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(t.p,{children:["Gebruik de ",e.jsx(t.code,{children:"autocomplete"}),` component om een lijst met suggesties weer te geven, gefilterd op de ingevoerde tekst. De
lijst kan een statische lijst zijn (`,e.jsx(t.code,{children:"static-list"}),") of kan worden opgehaald uit een api (dataFetcher)."]}),`
`,e.jsx(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import { VlAutocomplete } from '@domg-wc/components/block';
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<vl-autocomplete></vl-autocomplete>
`})}),`
`,e.jsx(u,{of:l}),`
`,e.jsx(t.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(U,{of:l}),`
`,e.jsx(t.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(t.h3,{id:"suggesties-groeperen-per-subtitle",children:"Suggesties groeperen per subtitle"}),`
`,e.jsx(u,{of:p}),`
`,e.jsx(t.h3,{id:"voorbeeld-met-location-api",children:"Voorbeeld met location API"}),`
`,e.jsxs(t.p,{children:["Om te werken met een API, luister je naar het ",e.jsx(t.code,{children:"search"}),`-event dat opgeworpen wordt wanneer de gebruiker begint te typen.
Dan kan je op basis daarvan de `,e.jsx(t.code,{children:".matches"})," instellen van de ",e.jsx(t.code,{children:"autocomplete"}),"-component om de suggesties te tonen."]}),`
`,e.jsx(t.p,{children:"Zie het onderstaande code voorbeeld."}),`
`,e.jsx(u,{of:g}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"code voorbeeld met location API"}),e.jsx(I,{code:W,language:"ts",dark:!0})]}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://geo.api.vlaanderen.be/geolocation/",rel:"nofollow",children:"Documentatie voor de Geolocation API"})}),`
`,e.jsx(t.h3,{id:"voorbeeld-met-mocked-api-call",children:"Voorbeeld met mocked API call"}),`
`,e.jsx(t.p,{children:`Type "Drab" om een van de mocked resultaten te zien.
Je kan deze manier van werken gebruiken indien de suggesties een onveranderlijke lijst zijn.`}),`
`,e.jsxs(t.p,{children:["Gelijkaardig aan bovenstaand voorbeeld, kan je ",e.jsx(t.code,{children:".matches"}),` instellen om de suggesties voor een gebruiker in te stellen
op basis van de input.`]}),`
`,e.jsx(t.p,{children:"Zie het onderstaande code voorbeeld."}),`
`,e.jsx(u,{of:h}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"code voorbeeld voor mocked API"}),e.jsx(I,{code:Z,language:"ts",dark:!0})]}),`
`,e.jsx(t.h3,{id:"zonder-suggesties-voor-autocomplete",children:"Zonder suggesties voor autocomplete"}),`
`,e.jsxs(t.p,{children:["Indien je ",e.jsx(t.code,{children:"autocomplete"})," wil gebruiken zonder suggesties kan je de ",e.jsx(t.code,{children:".items"}),`-array weglaten.
In dat geval zal echter bij de input de loading indicator blijven staan aangezien die verwacht dat er een lijst van
suggesties komt.`]}),`
`,e.jsx(t.p,{children:"Je kan hiervoor ofwel:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["altijd de loading indicator afzetten door het ",e.jsx(t.code,{children:"disable-loading"})," attribuut in te stellen"]}),`
`,e.jsxs(t.li,{children:["de ",e.jsx(t.code,{children:".matches"})," property van de component gelijkstellen aan een lege array (",e.jsx(t.code,{children:"[]"}),`), op dezelfde manier als waarop de
resultaten van een API call worden ingeladen - zodoende wordt de loading indicator niet langer getoond`]}),`
`]}),`
`,e.jsx(u,{of:b}),`
`,e.jsx(t.h3,{id:"voorbeeld-in-een-side-sheet",children:"Voorbeeld in een side-sheet"}),`
`,e.jsx(u,{of:y}),`
`,e.jsx(t.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/js-components/vl-ui-autocomplete",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Autocomplete"}),`
`,e.jsx(t.a,{href:"https://geo.api.vlaanderen.be/geolocation/",rel:"nofollow",children:"Documentatie voor de Geolocation API"})]}),`
`,e.jsx(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-autocomplete--default",rel:"nofollow",children:"Legacy Storybook - Autocomplete"})})]})}function Y(a={}){const{wrapper:t}={...w(),...a.components};return t?e.jsx(t,{...a,children:e.jsx(k,{...a})}):k(a)}function X(a,t){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}V([P]);const ee={id:"components-block-autocomplete",title:"Components - Block/autocomplete",tags:["autodocs"],args:n,argTypes:q,parameters:{docs:{page:Y}},decorators:[a=>i` <div style="height: 400px;">${a()}</div>`]},l=m(n,({placeholder:a,initialValue:t,label:s,labelSmall:c,minChars:d,maxSuggestions:E,captionFormat:R,groupBy:C,items:J,showClear:$,clearTooltip:B,noMatchesText:G,disableLoading:L})=>i`
            <div class="container">
                <vl-autocomplete
                    placeholder=${a}
                    initial-value=${t}
                    label=${s}
                    ?label-small=${c}
                    min-chars=${d}
                    max-suggestions=${E}
                    caption-format=${R}
                    group-by=${C}
                    ?show-clear=${$}
                    clear-tooltip=${B}
                    no-matches-text=${G}
                    ?disable-loading=${L}
                    .items=${j}
                ></vl-autocomplete>
            </div>
        `);l.storyName="vl-autocomplete - default";l.args={placeholder:"Hint: typ Gent",clearTooltip:"Wissen",noMatchesText:"Geen resultaat",minChars:1,maxSuggestions:5};const p=m(n,()=>i`
            <vl-autocomplete
                min-chars="1"
                group-by="${x.SUBTITLE}"
                .items=${j}
                caption-format="${T.TITLE}"
                placeholder="Hint: typ Gent"
            ></vl-autocomplete>
        `);p.storyName="vl-autocomplete - group by subtitle";const A=m(n,()=>i`
            <vl-autocomplete
                min-chars="1"
                .items=${j}
                caption-format="${T.SUBTITLE_TITLE_HORIZONTAL}"
                placeholder="Hint: typ Gent"
            ></vl-autocomplete>
        `);A.storyName="vl-autocomplete - custom caption formatter";const g=m(n,({disableLoading:a})=>i`
            <vl-autocomplete
                @search=${t=>F(t.target,t.detail.searchTerm)}
                placeholder="Gemeente, Straat of Project"
                min-chars="2"
                max-suggestions="10"
                ?disable-loading=${a}
            ></vl-autocomplete>
        `);g.storyName="vl-autocomplete - input and api call";const h=m(n,()=>i`
            <vl-autocomplete
                @search=${a=>H(a.target,a.detail.searchTerm)}
                placeholder="Gemeente, Straat of Project"
                min-chars="2"
                max-suggestions="5"
            ></vl-autocomplete>
        `);h.storyName="vl-autocomplete - input and mocked api call";const b=m(n,({disableLoading:a})=>i`
            <vl-autocomplete
                min-chars="1"
                placeholder="Hint: typ Gent"
                ?disable-loading=${a}
            ></vl-autocomplete>
        `);b.storyName="vl-autocomplete - without suggestions";const y=m(n,()=>i`
        <vl-side-sheet>
            <vl-autocomplete
                min-chars="1"
                .items=${j}
                caption-format="${T.SUBTITLE_TITLE_HORIZONTAL}"
                placeholder="Hint: typ Gent"
            ></vl-autocomplete>
        </vl-side-sheet>
    `);y.storyName="vl-autocomplete - in side-sheet";l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`story(autocompleteArgs, ({
  placeholder,
  initialValue,
  label,
  labelSmall,
  minChars,
  maxSuggestions,
  captionFormat,
  groupBy,
  items,
  showClear,
  clearTooltip,
  noMatchesText,
  disableLoading
}) => html\`
            <div class="container">
                <vl-autocomplete
                    placeholder=\${placeholder}
                    initial-value=\${initialValue}
                    label=\${label}
                    ?label-small=\${labelSmall}
                    min-chars=\${minChars}
                    max-suggestions=\${maxSuggestions}
                    caption-format=\${captionFormat}
                    group-by=\${groupBy}
                    ?show-clear=\${showClear}
                    clear-tooltip=\${clearTooltip}
                    no-matches-text=\${noMatchesText}
                    ?disable-loading=\${disableLoading}
                    .items=\${complexItems}
                ></vl-autocomplete>
            </div>
        \`)`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`story(autocompleteArgs, () => html\`
            <vl-autocomplete
                min-chars="1"
                group-by="\${GROUP_BY.SUBTITLE}"
                .items=\${complexItems}
                caption-format="\${CAPTION_FORMAT.TITLE}"
                placeholder="Hint: typ Gent"
            ></vl-autocomplete>
        \`)`,...p.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`story(autocompleteArgs, () => html\`
            <vl-autocomplete
                min-chars="1"
                .items=\${complexItems}
                caption-format="\${CAPTION_FORMAT.SUBTITLE_TITLE_HORIZONTAL}"
                placeholder="Hint: typ Gent"
            ></vl-autocomplete>
        \`)`,...A.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`story(autocompleteArgs, ({
  disableLoading
}) => html\`
            <vl-autocomplete
                @search=\${(e: CustomEvent) => fetchDataFromApiCall(e.target, e.detail.searchTerm)}
                placeholder="Gemeente, Straat of Project"
                min-chars="2"
                max-suggestions="10"
                ?disable-loading=\${disableLoading}
            ></vl-autocomplete>
        \`)`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`story(autocompleteArgs, () => html\`
            <vl-autocomplete
                @search=\${(e: CustomEvent) => fetchDataFromMockedApiCall(e.target, e.detail.searchTerm)}
                placeholder="Gemeente, Straat of Project"
                min-chars="2"
                max-suggestions="5"
            ></vl-autocomplete>
        \`)`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`story(autocompleteArgs, ({
  disableLoading
}) => html\`
            <vl-autocomplete
                min-chars="1"
                placeholder="Hint: typ Gent"
                ?disable-loading=\${disableLoading}
            ></vl-autocomplete>
        \`)`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`story(autocompleteArgs, () => html\`
        <vl-side-sheet>
            <vl-autocomplete
                min-chars="1"
                .items=\${complexItems}
                caption-format="\${CAPTION_FORMAT.SUBTITLE_TITLE_HORIZONTAL}"
                placeholder="Hint: typ Gent"
            ></vl-autocomplete>
        </vl-side-sheet>
    \`)`,...y.parameters?.docs?.source}}};const te=["AutocompleteDefault","AutocompleteGroupBySubtitle","AutocompleteCustomCaptionFormatter","AutocompleteInputAndApiCall","AutocompleteInputAndMockedApiCall","AutocompleteWithoutSuggestions","AutocompleteInSideSheet"];export{A as AutocompleteCustomCaptionFormatter,l as AutocompleteDefault,p as AutocompleteGroupBySubtitle,y as AutocompleteInSideSheet,g as AutocompleteInputAndApiCall,h as AutocompleteInputAndMockedApiCall,b as AutocompleteWithoutSuggestions,te as __namedExportsOrder,ee as default};
