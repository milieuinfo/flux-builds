import{u as a,j as e,M as t}from"./iframe-iHJvAyUB.js";import"./preload-helper-D9Z9MdNV.js";function o(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Recepten/Formattering"}),`
`,e.jsx(n.h1,{id:"formattering-common",children:"Formattering (Common)"}),`
`,e.jsx(n.p,{children:`We bieden verschillende helper-functies aan voor het formatteren van getallen en datum‑/tijdwaarden,
volgens de "nl-BE" locale.`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#formatnumber",children:"formatNumber()"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#formatcurrency",children:"formatCurrency()"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#formatdate",children:"formatDate()"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#formattime",children:"formatTime()"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#formatreadabledate",children:"formatReadableDate()"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#formatdaysfromnow",children:"formatDaysFromNow()"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#formatpercentage",children:"formatPercentage()"})}),`
`]}),`
`,e.jsx(n.h2,{id:"formatnumber",children:"formatNumber()"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`formatNumber(value: number, options?: {
    decimals?: number | undefined;
    thousandsSeparator?: string | undefined;
} | undefined): string
`})}),`
`,e.jsx(n.h3,{id:"gebruik",children:"Gebruik"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"formatNumber"})," zet een numerieke waarde om naar de ",e.jsx(n.code,{children:"nl-BE"}),` notatie. Hierbij wordt een spatie gebruikt als
scheidingsteken voor duizendtallen en een komma voor de decimalen.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Opmerking"}),": We wijken af van de browser implementatie van de ",e.jsx(n.code,{children:"nl-BE"})," locale, omwille van deze richtlijnen:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.vlaanderen.be/team-taaladvies/taaladviezen/getallen-en-geldbedragen-notatie-komma-punt-spatie",rel:"nofollow",children:"https://www.vlaanderen.be/team-taaladvies/taaladviezen/getallen-en-geldbedragen-notatie-komma-punt-spatie"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://taaladvies.net/10000000-of-10-000-000/",rel:"nofollow",children:"https://taaladvies.net/10000000-of-10-000-000/"})}),`
`]}),`
`,e.jsxs(n.p,{children:["Concreet kiezen we standaard voor een ",e.jsx(n.strong,{children:"spatie"})," (niet-breekbare spatie: ",e.jsx(n.code,{children:'"\\u00A0"'}),`) zodra het getal langer is dan 4
cijfers. Dit is aanpasbaar met de optie `,e.jsx(n.code,{children:"thousandsSeparator"}),". Bij valuta wordt voorkeur gegeven aan een ",e.jsx(n.strong,{children:"punt"}),` als
scheidingsteken.`]}),`
`,e.jsxs(n.p,{children:["De optie ",e.jsx(n.code,{children:"decimals"}),` geeft aan hoeveel decimalen er moeten verschijnen. Wanneer deze optie wordt meegegeven, werkt de
functie als `,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed",rel:"nofollow",children:"Number.toFixed()"}),`:
indien nodig worden er extra nullen aangevuld zodat precies het opgegeven aantal decimalen wordt bereikt.
Het afrondingsgedrag volgt dezelfde logica als `,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round",rel:"nofollow",children:"Math.round()"}),"."]}),`
`,e.jsx(n.h3,{id:"voorbeelden",children:"Voorbeelden"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { formatNumber } from '@domg-wc/common';

console.log(formatNumber(1234567));
// output: '1 234 567'

console.log(formatNumber(-42));
// output: '-42'

console.log(formatNumber(1234.56));
// output: '1234,56'

console.log(formatNumber(1234.5678, { decimals: 3 }));
// output: '1234,568'

console.log(formatNumber(1234.5678, { decimals: 0 }));
// output: '1235'

console.log(formatNumber(1000, { decimals: 2 }));
// output: '1000,00'

console.log(formatNumber(1234567.89, { thousandsSeparator: '.' }));
// output: '1.234.567,89'

console.log(formatNumber(1234567.89, { thousandsSeparator: '' }));
// output: '1234567,89'
`})}),`
`,e.jsx(n.h2,{id:"formatcurrency",children:"formatCurrency()"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`formatCurrency(value: number, options?: {
    decimals?: number | undefined;
    currency?: string | undefined;
} | undefined): string
`})}),`
`,e.jsx(n.h3,{id:"gebruik-1",children:"Gebruik"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"formatCurrency"})," formateert een getal als euro‑valuta (",e.jsx(n.code,{children:'"€"'}),"). Het resultaat bevat een niet‑breekbare spatie (",e.jsx(n.code,{children:'"\\u00A0"'}),") tussen het valutateken en het getal. Standaard worden twee decimalen getoond en is de valuta euro."]}),`
`,e.jsxs(n.p,{children:["De optie ",e.jsx(n.code,{children:"decimals"})," geeft aan hoeveel decimalen er moeten verschijnen. Wanneer deze optie wordt meegegeven, werkt de functie als ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed",rel:"nofollow",children:"Number.toFixed()"}),": indien nodig worden er extra nullen aangevuld zodat precies het opgegeven aantal decimalen wordt bereikt. Het afrondingsgedrag volgt dezelfde logica als ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round",rel:"nofollow",children:"Math.round()"}),"."]}),`
`,e.jsxs(n.p,{children:["De optie ",e.jsx(n.code,{children:"currency"})," laat toe om een andere valuta (ISO-code) te kiezen."]}),`
`,e.jsx(n.h3,{id:"voorbeelden-1",children:"Voorbeelden"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { formatCurrency } from '@domg-wc/common';

console.log(formatCurrency(1234.5));
// output: '€ 1.234,50'

console.log(formatCurrency(1234.5678, { decimals: 3 }));
// output: '€ 1.234,568'

console.log(formatCurrency(1234.5678, { decimals: 0 }));
// output: '€ 1.235'

console.log(formatCurrency(1234.5, { currency: 'GBP' }));
// output: '£ 1.234,50'
`})}),`
`,e.jsx(n.h2,{id:"formatdate",children:"formatDate()"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`formatDate(date: Date, options?: {
    fullYear: boolean;
} | undefined): string
`})}),`
`,e.jsx(n.h3,{id:"gebruik-2",children:"Gebruik"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"formatDate"})," converteert een Date‑object naar een korte datumweergave ",e.jsx(n.code,{children:'"DD.MM.YY"'}),"."]}),`
`,e.jsxs(n.p,{children:["De optie ",e.jsx(n.code,{children:"fullYear"})," laat toe om het volledige jaartal weer te geven (",e.jsx(n.code,{children:'"DD.MM.YYYY"'}),")."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Opmerking"}),": We wijken af van de browser implementatie van de ",e.jsx(n.code,{children:"nl-BE"})," locale, omwille van deze richtlijn:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/richtlijnen/formulieren/datum",rel:"nofollow",children:"https://www.vlaanderen.be/vlaanderen-design-system/richtlijnen/formulieren/datum"})}),`
`]}),`
`,e.jsxs(n.p,{children:["Concreet kiezen we standaard voor een ",e.jsx(n.strong,{children:"punt"}),". Dit is aanpasbaar met de optie ",e.jsx(n.code,{children:"dateSeparator"}),"."]}),`
`,e.jsx(n.p,{children:"Bij een ongeldig argument (geen Date‑instantie) retourneert de functie de oorspronkelijke invoer als string."}),`
`,e.jsx(n.h3,{id:"voorbeelden-2",children:"Voorbeelden"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { formatDate } from '@domg-wc/common';

const d = new Date('2025-03-15T13:05:09Z');

console.log(formatDate(d));
// output: '15.03.25'

console.log(formatDate(d, { fullYear: true }));
// output: '15.03.2025'

console.log(formatDate(d, { dateSeparator: '/' }));
// output: '15/03/25'

console.log(formatDate(d, { fullYear: true, dateSeparator: '-' }));
// output: '15-03-2025'

console.log(formatDate(1234));
// output: '1234' (ongeldige invoer wordt onveranderd teruggegeven)
`})}),`
`,e.jsx(n.h2,{id:"formattime",children:"formatTime()"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`formatTime(date: Date, options?: {
    seconds: boolean;
} | undefined): string
`})}),`
`,e.jsx(n.h3,{id:"gebruik-3",children:"Gebruik"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"formatTime"})," geeft de tijd van een Date‑object weer in 24‑uur‑formaat ",e.jsx(n.code,{children:'"HH:mm"'}),"."]}),`
`,e.jsxs(n.p,{children:["De optie ",e.jsx(n.code,{children:"seconds"})," laat toe om de secondes weer te geven(",e.jsx(n.code,{children:'"HH:mm:ss"'}),")."]}),`
`,e.jsx(n.p,{children:"Bij een ongeldig argument (geen Date‑instantie) retourneert de functie de oorspronkelijke invoer als string."}),`
`,e.jsx(n.h3,{id:"voorbeelden-3",children:"Voorbeelden"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { formatTime } from '@domg-wc/common';

const d = new Date('2025-03-15T13:05:09Z'); // UTC → CET (+1 uur)

console.log(formatTime(d));
// output: '14:05'

console.log(formatTime(d, { seconds: true }));
// output: '14:05:09'

console.log(formatTime(1234));
// output: '1234' (ongeldige invoer wordt onveranderd teruggegeven)
`})}),`
`,e.jsx(n.h2,{id:"formatreadabledate",children:"formatReadableDate()"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`formatReadableDate(date: Date): string
`})}),`
`,e.jsx(n.h3,{id:"gebruik-4",children:"Gebruik"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"formatReadableDate"})," converteert een Date‑object naar een tekstuele datumweergave (bv. donderdag 25 december 2025)."]}),`
`,e.jsx(n.p,{children:"Bij een ongeldig argument (geen Date‑instantie) retourneert de functie de oorspronkelijke invoer als string."}),`
`,e.jsx(n.h3,{id:"voorbeelden-4",children:"Voorbeelden"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { formatReadableDate } from '@domg-wc/common';

console.log(formatReadableDate(new Date('2025-12-25T00:00:00Z')));
// output: 'donderdag 25 december 2025'

console.log(formatReadableDate(1234));
// output: '1234' (ongeldige invoer wordt onveranderd teruggegeven)
`})}),`
`,e.jsx(n.h2,{id:"formatdaysfromnow",children:"formatDaysFromNow()"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`formatDaysFromNow(date: Date): string
`})}),`
`,e.jsx(n.h3,{id:"gebruik-5",children:"Gebruik"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"formatDaysFromNow"}),' geeft een relatieve datumbeschrijving van het Date-object ten opzichte van "vandaag".']}),`
`,e.jsx(n.h3,{id:"voorbeelden-5",children:"Voorbeelden"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { formatDaysFromNow } from '@domg-wc/common';

const msPerDay = 24 * 60 * 60 * 1000;

console.log(formatDaysFromNow(new Date(Date.now() - 1 * msPerDay)));
// output: 'gisteren'

console.log(formatDaysFromNow(new Date(Date.now() - 2 * msPerDay)));
// output: 'eergisteren'

console.log(formatDaysFromNow(new Date(Date.now() - 3 * msPerDay)));
// output: '3 dagen geleden'

console.log(formatDaysFromNow(new Date(Date.now() + 1 * msPerDay)));
// output: 'morgen'

console.log(formatDaysFromNow(new Date(Date.now() + 2 * msPerDay)));
// output: 'overmorgen'

console.log(formatDaysFromNow(new Date(Date.now() + 5 * msPerDay)));
// output: 'over 5 dagen'

console.log(formatDaysFromNow(1));
// output: '1' (ongeldige invoer wordt onveranderd teruggegeven)
`})}),`
`,e.jsx(n.h2,{id:"formatpercentage",children:"formatPercentage()"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`formatPercentage(value: number, options?: {
    decimals?: number | undefined;
    thousandsSeparator?: string | undefined;
} | undefined): string
`})}),`
`,e.jsx(n.h3,{id:"gebruik-6",children:"Gebruik"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"formatPercentage"})," converteert een decimale waarde naar een percentage‑string."]}),`
`,e.jsxs(n.p,{children:["De opties ",e.jsx(n.code,{children:"decimals"})," en ",e.jsx(n.code,{children:"thousandsSeparator"})," werken op dezelfde manier als bij ",e.jsx(n.a,{href:"#formatnumber",children:"formatNumber()"}),"."]}),`
`,e.jsx(n.h3,{id:"voorbeelden-6",children:"Voorbeelden"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { formatPercentage } from '@domg-wc/common';

console.log(formatPercentage(0.1234));
// output: '12%'

console.log(formatPercentage(0.1234, 2));
// output: '12,34%'

console.log(formatPercentage(0.5, 2));
// output: '50,00%'
`})})]})}function s(r={}){const{wrapper:n}={...a(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}export{s as default};
