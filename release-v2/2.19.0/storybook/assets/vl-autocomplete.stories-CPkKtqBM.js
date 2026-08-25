import{Z as l,_ as o,a1 as x,a2 as w,cU as j,cV as L,W as D,cW as T,cX as M,cY as V,X as _,x as r,u as E,j as e,C as d,b8 as U,S as k,s as c,r as P,h as F}from"./iframe-CY-ZM549.js";import"./preload-helper-D9Z9MdNV.js";async function z(a,t){const m=await(await fetch(`https://geo.api.vlaanderen.be/geolocation/suggestion?q=${t}&c=${a.maxSuggestions}`)).json();a.matches=m.SuggestionResult.map(u=>({title:u,value:u}))}async function W(a,t){return{SuggestionResult:["Drabbinkdreef, Gent","Drabstraat, Gent","Drabstraat, Kontich","Drabstraat, Mechelen","Drabstraat, Mortsel","Drabstraat, Wichelen","Drabstraat, Zwevezele"].filter(u=>u.toLowerCase().startsWith(a.toLowerCase())).slice(0,t)}}async function q(a,t){const s=await W(t,a.maxSuggestions);a.matches=s.SuggestionResult.map(m=>({title:m,value:m}))}const{action:S}=__STORYBOOK_MODULE_ACTIONS__,f=[{title:"Gent",subtitle:"Gemeente",value:"1"},{title:"Gentbos, Merelbeke",subtitle:"Adres",value:"2"},{title:"Gentbruggestraat, Gent",subtitle:"Adres",value:"3"},{title:"Gentele, Brugge",subtitle:"Adres",value:"5"},{title:"Automotive Contractors Gent ",subtitle:"Project",value:"6"},{title:"Buurtshuis Watersportbaan Gent",subtitle:"Project",value:"7"}],H=[{title:"PV.ANB.2026.00412",value:"1",createdOn:"08.05.2026",owner:"Jane Smith",status:"Nog niet opnemen"},{title:"ANB-2026-00412-bis",value:"2",createdOn:"02.04.2026",owner:"Bob Johnson",status:"Wel opnemen"},{title:"ANB 2026 00412",value:"3",createdOn:"15.01.2026",owner:"Alice Brown",status:"Niet opnemen"}],Z=a=>r`
    <div class="vl-stacked">
        <vl-text bold>${a.title}</vl-text>
        <vl-text annotation>Aangemaakt op ${a.createdOn}, eigenaar: ${a.owner}, status: ${a.status}</vl-text>
    </div>
`,n={..._,placeholder:"",initialValue:"",label:"",labelSmall:!1,minChars:V,maxSuggestions:M,captionFormat:T.TITLE_SUBTITLE_VERTICAL,groupBy:"",showClear:!1,disableLoading:!1,clearTooltip:"Wissen",noMatchesText:"Geen resultaat",items:[],itemTemplate:void 0,search:S("search"),selectedAutocomplete:S("selected-autocomplete"),clear:S("clear")},X={...D,placeholder:{name:"placeholder",description:"Attribuut wordt gebruikt om de placeholder te bepalen.",type:{name:o.STRING,required:!1},table:{type:{summary:o.STRING},category:l.ATTRIBUTES,defaultValue:{summary:n.placeholder}}},initialValue:{name:"initial-value",description:"Attribuut wordt gebruikt om de initiële waarde te bepalen.",type:{name:o.STRING,required:!1},table:{type:{summary:o.STRING},category:l.ATTRIBUTES,defaultValue:{summary:n.initialValue}}},label:{name:"label",description:"Attribuut wordt gebruikt om het label te bepalen.",type:{name:o.STRING,required:!1},table:{type:{summary:o.STRING},category:l.ATTRIBUTES,defaultValue:{summary:n.label}}},labelSmall:{name:"label-small",description:"Attribuut wordt gebruikt om het label kleiner te maken.",type:{name:o.BOOLEAN,required:!1},table:{type:{summary:o.BOOLEAN},category:l.ATTRIBUTES,defaultValue:{summary:String(n.labelSmall)}}},minChars:{name:"min-chars",description:"Attribuut wordt gebruikt om te bepalen hoeveel karakters de gebruiker moet ingeven alvorens de suggesties getoond worden.",control:{type:x.RANGE,min:1,max:10,step:1},type:{name:o.NUMBER,required:!1},table:{type:{summary:o.NUMBER},category:l.ATTRIBUTES,defaultValue:{summary:String(n.minChars)}}},maxSuggestions:{name:"max-suggestions",description:"Attribuut wordt gebruikt om het maximum aantal suggesties dat getoond moet worden te bepalen.",control:{type:x.RANGE,min:1,max:20,step:1},type:{name:o.NUMBER,required:!1},table:{type:{summary:o.NUMBER},category:l.ATTRIBUTES,defaultValue:{summary:String(n.maxSuggestions)}}},captionFormat:{name:"caption-format",description:"Attribuut bepaalt hoe ieder item in de suggestielijst getoond wordt.",control:{type:x.SELECT},options:Object.values(T),type:{name:o.STRING,required:!1},table:{type:{summary:w(Object.values(T))},category:l.ATTRIBUTES,defaultValue:{summary:L}}},groupBy:{name:"group-by",description:"Attribuut bepaalt hoe de items in de lijst gegroepeerd moeten worden.",control:{type:x.SELECT},options:[j.TITLE,j.SUBTITLE],type:{name:o.STRING,required:!1},table:{type:{summary:w(Object.values(j))},category:l.ATTRIBUTES,defaultValue:{summary:n.groupBy}}},showClear:{name:"show-clear",description:"Attribuut wordt gebruikt om te bepalen of het clear-icoon getoond moet worden.",type:{name:o.BOOLEAN,required:!1},table:{type:{summary:o.BOOLEAN},category:l.ATTRIBUTES,defaultValue:{summary:String(n.showClear)}}},disableLoading:{name:"disable-loading",description:"Bepaalt of de laad-animatie getoond wordt.",type:{name:o.BOOLEAN,required:!1},table:{type:{summary:o.BOOLEAN},category:l.ATTRIBUTES,defaultValue:{summary:String(n.disableLoading)}}},clearTooltip:{name:"clear-tooltip",description:"Attribuut wordt gebruikt om de tekst te bepalen die getoond wordt bij hover van het clear-icoon.",type:{name:o.STRING,required:!1},table:{type:{summary:o.STRING},category:l.ATTRIBUTES,defaultValue:{summary:String(n.clearTooltip)}}},noMatchesText:{name:"no-matches-text",description:"Attribuut wordt gebruikt om de tekst te bepalen die getoond wordt als er geen suggesties zijn.",type:{name:o.STRING,required:!1},table:{type:{summary:o.STRING},category:l.ATTRIBUTES,defaultValue:{summary:String(n.noMatchesText)}}},items:{name:"items",description:"Gebruik deze property wanneer je een statische lijst van items wilt gebruiken.",control:{type:x.OBJECT},table:{category:l.PROPERTIES,type:{summary:o.ARRAY},defaultValue:{summary:String(n.items)}}},itemTemplate:{name:"itemTemplate",description:"Gebruik deze property om zelf te bepalen hoe de inhoud van een suggestie gerenderd wordt. De functie krijgt het volledige item mee en geeft een lit `TemplateResult` terug. Wordt deze property ingesteld, dan valt `caption-format` weg voor de suggesties.\n\nKan niet aangepast worden in Storybook.",control:!1,table:{category:l.PROPERTIES,type:{summary:o.FUNCTION},defaultValue:{summary:String(n.itemTemplate)}}},search:{name:"search",description:'Dit custom event wordt getriggerd wanneer de gebruiker karakters ingeeft in het tekstvak terwijl de component geen items heeft. Gebruik dit event wanneer je de suggestielijst wilt vullen met items uit een API-call. Bekijk de story "WithInputAndApiCall" voor meer details.',table:{type:{summary:"-"},category:l.EVENTS}},selectedAutocomplete:{name:"selected-autocomplete",description:"Dit custom event wordt getriggerd wanneer de gebruiker een item selecteert uit de suggestielijst. De geselecteerde waarde kan worden opgevraagd via het detail van het event.",table:{type:{summary:"-"},category:l.EVENTS}},clear:{name:"clear",description:"Dit custom event wordt getriggerd wanneer de gebruiker het clear-icoon aanklikt.",table:{type:{summary:"-"},category:l.EVENTS}}},Y=`export async function fetchDataFromApiCall(autocomplete: any, searchTerm: any) {
    const result = await fetch(
        \`https://geo.api.vlaanderen.be/geolocation/suggestion?q=\${searchTerm}&c=\${autocomplete.maxSuggestions}\`
    );
    const responseBody = await result.json();
    autocomplete.matches = responseBody.SuggestionResult.map((obj: string) => ({
        title: obj,
        value: obj,
    }));
}
`,J=`export async function mockedApiCall(searchTerm: any, maxSuggestions: any) {
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
`;function I(a){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...E(),...a.components},{FluxComponentMetaData:s}=t;return s||Q("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"autocomplete",children:"Autocomplete"}),`
`,e.jsx(s,{id:"components-block-autocomplete"}),`
`,e.jsx(t.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(t.p,{children:["Gebruik de ",e.jsx(t.code,{children:"autocomplete"}),` component om een lijst met suggesties weer te geven, gefilterd op de ingevoerde tekst. De
lijst kan een statische lijst zijn (`,e.jsx(t.code,{children:"static-list"}),") of kan worden opgehaald uit een api (dataFetcher)."]}),`
`,e.jsx(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import { VlAutocomplete } from '@domg-wc/components/block';
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<vl-autocomplete></vl-autocomplete>
`})}),`
`,e.jsx(d,{of:i}),`
`,e.jsx(t.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(U,{of:i}),`
`,e.jsx(t.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(t.h3,{id:"suggesties-groeperen-per-subtitle",children:"Suggesties groeperen per subtitle"}),`
`,e.jsx(d,{of:p}),`
`,e.jsx(t.h3,{id:"suggesties-met-een-eigen-item-template",children:"Suggesties met een eigen item-template"}),`
`,e.jsxs(t.p,{children:["Moet een suggestie meer tonen dan ",e.jsx(t.code,{children:"title"}),", ",e.jsx(t.code,{children:"subtitle"})," en ",e.jsx(t.code,{children:"value"}),", dan volstaat ",e.jsx(t.code,{children:"caption-format"}),` niet. Stel dan
`,e.jsx(t.code,{children:"itemTemplate"})," in: die functie krijgt het item en levert de inhoud van de ",e.jsx(t.code,{children:"<li>"}),". De ",e.jsx(t.code,{children:"<li>"}),` zelf (id, klik,
`,e.jsx(t.code,{children:'role="option"'}),") blijft van de component."]}),`
`,e.jsxs(t.p,{children:["Vindt de zoekopdracht niets, dan roept de component je ",e.jsx(t.code,{children:"itemTemplate"}),` niet aan. Ze toont dan één suggestie met de
tekst uit het `,e.jsx(t.code,{children:"no-matches-text"}),'-attribuut, standaard "Geen resultaat".']}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`const itemTemplate = (item) => html\`
    <div class="vl-stacked">
        <vl-text bold>\${item.title}</vl-text>
        <vl-text annotation>Aangemaakt op \${item.createdOn}, eigenaar: \${item.owner}</vl-text>
    </div>
\`;
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:'<vl-autocomplete .items="${items}" .itemTemplate="${itemTemplate}"></vl-autocomplete>\n'})}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["Zet geen links of knoppen in de template, handel zulke acties af via het ",e.jsx(t.code,{children:"selected-autocomplete"}),`-event. Een
`,e.jsx(t.a,{href:"https://www.w3.org/TR/wai-aria-1.2/#childrenArePresentational",rel:"nofollow",children:e.jsx(t.code,{children:"option"})}),` verbergt zijn kinderen voor
hulptechnologie (`,e.jsx(t.a,{href:"https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html",rel:"nofollow",children:"4.1.2"}),`) en het toetsenbord
(`,e.jsx(t.a,{href:"https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html",rel:"nofollow",children:"2.1.1"}),")."]}),`
`]}),`
`,e.jsx(d,{of:g}),`
`,e.jsx(t.h3,{id:"voorbeeld-met-location-api",children:"Voorbeeld met location API"}),`
`,e.jsxs(t.p,{children:["Om te werken met een API, luister je naar het ",e.jsx(t.code,{children:"search"}),`-event dat opgeworpen wordt wanneer de gebruiker begint te typen.
Dan kan je op basis daarvan de `,e.jsx(t.code,{children:".matches"})," instellen van de ",e.jsx(t.code,{children:"autocomplete"}),"-component om de suggesties te tonen."]}),`
`,e.jsx(t.p,{children:"Zie het onderstaande code voorbeeld."}),`
`,e.jsx(d,{of:h}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"code voorbeeld met location API"}),e.jsx(k,{code:Y,language:"ts",dark:!0})]}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://geo.api.vlaanderen.be/geolocation/",rel:"nofollow",children:"Documentatie voor de Geolocation API"})}),`
`,e.jsx(t.h3,{id:"voorbeeld-met-mocked-api-call",children:"Voorbeeld met mocked API call"}),`
`,e.jsx(t.p,{children:`Type "Drab" om een van de mocked resultaten te zien.
Je kan deze manier van werken gebruiken indien de suggesties een onveranderlijke lijst zijn.`}),`
`,e.jsxs(t.p,{children:["Gelijkaardig aan bovenstaand voorbeeld, kan je ",e.jsx(t.code,{children:".matches"}),` instellen om de suggesties voor een gebruiker in te stellen
op basis van de input.`]}),`
`,e.jsx(t.p,{children:"Zie het onderstaande code voorbeeld."}),`
`,e.jsx(d,{of:b}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"code voorbeeld voor mocked API"}),e.jsx(k,{code:J,language:"ts",dark:!0})]}),`
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
`,e.jsx(d,{of:v}),`
`,e.jsx(t.h3,{id:"voorbeeld-in-een-side-sheet",children:"Voorbeeld in een side-sheet"}),`
`,e.jsx(d,{of:y}),`
`,e.jsx(t.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://geo.api.vlaanderen.be/geolocation/",rel:"nofollow",children:"Documentatie voor de Geolocation API"})})]})}function K(a={}){const{wrapper:t}={...E(),...a.components};return t?e.jsx(t,{...a,children:e.jsx(I,{...a})}):I(a)}function Q(a,t){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}P([F]);const oe={id:"components-block-autocomplete",title:"Components - Block/autocomplete",tags:["autodocs"],args:n,argTypes:X,parameters:{docs:{page:K}},decorators:[a=>r` <div style="height: 400px;">${a()}</div>`]},i=c(n,({placeholder:a,initialValue:t,label:s,labelSmall:m,minChars:u,maxSuggestions:R,captionFormat:$,groupBy:C,items:ee,showClear:N,clearTooltip:B,noMatchesText:G,disableLoading:O})=>r`
            <div class="container">
                <vl-autocomplete
                    placeholder=${a}
                    initial-value=${t}
                    label=${s}
                    ?label-small=${m}
                    min-chars=${u}
                    max-suggestions=${R}
                    caption-format=${$}
                    group-by=${C}
                    ?show-clear=${N}
                    clear-tooltip=${B}
                    no-matches-text=${G}
                    ?disable-loading=${O}
                    .items=${f}
                ></vl-autocomplete>
            </div>
        `);i.storyName="vl-autocomplete - default";i.args={placeholder:"Hint: typ Gent",clearTooltip:"Wissen",noMatchesText:"Geen resultaat",minChars:1,maxSuggestions:5};const p=c(n,()=>r`
            <vl-autocomplete
                min-chars="1"
                group-by="${j.SUBTITLE}"
                .items=${f}
                caption-format="${T.TITLE}"
                placeholder="Hint: typ Gent"
            ></vl-autocomplete>
        `);p.storyName="vl-autocomplete - group by subtitle";const A=c(n,()=>r`
            <vl-autocomplete
                min-chars="1"
                .items=${f}
                caption-format="${T.SUBTITLE_TITLE_HORIZONTAL}"
                placeholder="Hint: typ Gent"
            ></vl-autocomplete>
        `);A.storyName="vl-autocomplete - custom caption formatter";const g=c(n,()=>r`
            <vl-autocomplete
                min-chars="1"
                label="Doorzoek PV's"
                placeholder="Hint: typ ANB"
                show-clear
                .items=${H}
                .itemTemplate=${Z}
            ></vl-autocomplete>
        `);g.storyName="vl-autocomplete - item template";const h=c(n,({disableLoading:a})=>r`
            <vl-autocomplete
                @search=${t=>z(t.target,t.detail.searchTerm)}
                placeholder="Gemeente, Straat of Project"
                min-chars="2"
                max-suggestions="10"
                ?disable-loading=${a}
            ></vl-autocomplete>
        `);h.storyName="vl-autocomplete - input and api call";const b=c(n,()=>r`
            <vl-autocomplete
                @search=${a=>q(a.target,a.detail.searchTerm)}
                placeholder="Gemeente, Straat of Project"
                min-chars="2"
                max-suggestions="5"
            ></vl-autocomplete>
        `);b.storyName="vl-autocomplete - input and mocked api call";const v=c(n,({disableLoading:a})=>r`
            <vl-autocomplete
                min-chars="1"
                placeholder="Hint: typ Gent"
                ?disable-loading=${a}
            ></vl-autocomplete>
        `);v.storyName="vl-autocomplete - without suggestions";const y=c(n,()=>r`
        <vl-side-sheet>
            <vl-autocomplete
                min-chars="1"
                .items=${f}
                caption-format="${T.SUBTITLE_TITLE_HORIZONTAL}"
                placeholder="Hint: typ Gent"
            ></vl-autocomplete>
        </vl-side-sheet>
    `);y.storyName="vl-autocomplete - in side-sheet";i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`story(autocompleteArgs, ({
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
        \`)`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`story(autocompleteArgs, () => html\`
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
        \`)`,...A.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`story(autocompleteArgs, () => html\`
            <vl-autocomplete
                min-chars="1"
                label="Doorzoek PV's"
                placeholder="Hint: typ ANB"
                show-clear
                .items=\${dossierItems}
                .itemTemplate=\${dossierItemTemplate}
            ></vl-autocomplete>
        \`)`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`story(autocompleteArgs, ({
  disableLoading
}) => html\`
            <vl-autocomplete
                @search=\${(e: CustomEvent) => fetchDataFromApiCall(e.target, e.detail.searchTerm)}
                placeholder="Gemeente, Straat of Project"
                min-chars="2"
                max-suggestions="10"
                ?disable-loading=\${disableLoading}
            ></vl-autocomplete>
        \`)`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`story(autocompleteArgs, () => html\`
            <vl-autocomplete
                @search=\${(e: CustomEvent) => fetchDataFromMockedApiCall(e.target, e.detail.searchTerm)}
                placeholder="Gemeente, Straat of Project"
                min-chars="2"
                max-suggestions="5"
            ></vl-autocomplete>
        \`)`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`story(autocompleteArgs, ({
  disableLoading
}) => html\`
            <vl-autocomplete
                min-chars="1"
                placeholder="Hint: typ Gent"
                ?disable-loading=\${disableLoading}
            ></vl-autocomplete>
        \`)`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`story(autocompleteArgs, () => html\`
        <vl-side-sheet>
            <vl-autocomplete
                min-chars="1"
                .items=\${complexItems}
                caption-format="\${CAPTION_FORMAT.SUBTITLE_TITLE_HORIZONTAL}"
                placeholder="Hint: typ Gent"
            ></vl-autocomplete>
        </vl-side-sheet>
    \`)`,...y.parameters?.docs?.source}}};const ne=["AutocompleteDefault","AutocompleteGroupBySubtitle","AutocompleteCustomCaptionFormatter","AutocompleteWithItemTemplate","AutocompleteInputAndApiCall","AutocompleteInputAndMockedApiCall","AutocompleteWithoutSuggestions","AutocompleteInSideSheet"];export{A as AutocompleteCustomCaptionFormatter,i as AutocompleteDefault,p as AutocompleteGroupBySubtitle,y as AutocompleteInSideSheet,h as AutocompleteInputAndApiCall,b as AutocompleteInputAndMockedApiCall,g as AutocompleteWithItemTemplate,v as AutocompleteWithoutSuggestions,ne as __namedExportsOrder,oe as default};
