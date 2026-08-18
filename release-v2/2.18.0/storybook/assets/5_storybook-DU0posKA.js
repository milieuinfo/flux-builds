import{u as t,j as e,M as i,S as o}from"./iframe-COmpMQdF.js";import"./preload-helper-D9Z9MdNV.js";const a=`import { html } from 'lit';
import { VlProzaMessage } from '../vl-proza-message.component';
import { prozaMessageMockDomainData, prozaMessageMockDomainEditableData } from './vl-proza-message.stories-data';
import { prozaMessageArgTypes, prozaMessageArgs } from './vl-proza-message.stories-arg';
import { Meta } from '@storybook/web-components-vite';
import prozaMessageDoc from './vl-proza-message.stories-doc.mdx';
import { story, storyArgTypes, storyArgs } from '@resources/utils-storybook';

export default {
    title: 'Components - Block/proza-message',
    args: storyArgs(prozaMessageArgs),
    argTypes: storyArgTypes(prozaMessageArgTypes),
    parameters: {
        docs: {
            page: prozaMessageDoc,
        },
        controls: {
            hideNoControlsWarning: true,
        },
        mockData: [...prozaMessageMockDomainData, ...prozaMessageMockDomainEditableData],
    },
} as Meta<typeof prozaMessageArgs>;

export const ProzaMessageDefault = story(prozaMessageArgs, () => {
    delete VlProzaMessage.__cache;

    return html\`
        <div class="vl-grid vl-stacked-small">
            <div class="vl-column vl-column--12">
                <vl-title type="h6">Als een inline element:</vl-title>
                <vl-proza-message domain="mockdomain" code="inline"></vl-proza-message>
            </div>
            <div class="vl-column vl-column--12">
                <vl-title type="h6">Als een block element:</vl-title>
                <vl-proza-message domain="mockdomain" code="block"></vl-proza-message>
            </div>
            <div class="vl-column vl-column--12">
                <vl-title type="h6">In een knop:</vl-title>
                <vl-button>
                    <vl-proza-message domain="mockdomain" code="action"></vl-proza-message>
                </vl-button>
            </div>
            <div class="vl-column vl-column--12">
                <vl-title type="h6">In een link:</vl-title>
                <vl-link href="#" external>
                    <vl-proza-message domain="mockdomain" code="action"></vl-proza-message>
                </vl-link>
            </div>
        </div>
    \`;
});
ProzaMessageDefault.storyName = 'vl-proza-message - default';

export const ProzaMessageEditable = story(prozaMessageArgs, () => {
    delete VlProzaMessage.__cache;

    return html\`
        <div class="vl-grid vl-stacked-small">
            <div class="vl-column vl-column--12">
                <vl-title type="h6">Als een inline element:</vl-title>
                <vl-proza-message domain="mockdomaineditable" code="inline"></vl-proza-message>
            </div>
            <div class="vl-column vl-column--12">
                <vl-title type="h6">Als een block element:</vl-title>
                <vl-proza-message domain="mockdomaineditable" code="block"></vl-proza-message>
            </div>
            <div class="vl-column vl-column--12">
                <vl-title type="h6">In een knop:</vl-title>
                <vl-button>
                    <vl-proza-message domain="mockdomaineditable" code="action"></vl-proza-message>
                </vl-button>
                <vl-button secondary>
                    <vl-proza-message domain="mockdomaineditable" code="action"></vl-proza-message>
                </vl-button>
                <vl-button tertiary>
                    <vl-proza-message domain="mockdomaineditable" code="action"></vl-proza-message>
                </vl-button>
            </div>
            <div class="vl-column vl-column--12">
                <vl-title type="h6">In een link:</vl-title>
                <vl-link href="#" external>
                    <vl-proza-message domain="mockdomaineditable" code="action"></vl-proza-message>
                </vl-link>
            </div>
        </div>
    \`;
});
ProzaMessageEditable.storyName = 'vl-proza-message - editable';
`;function s(r){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Bijdragen/Storybook"}),`
`,e.jsx(n.h1,{id:"storybook",children:"Storybook"}),`
`,e.jsx(n.h2,{id:"inhoudstafel",children:"Inhoudstafel"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#referenties",children:"Referenties"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#bestanden",children:"Bestanden"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#story-opbouw",children:"Story Opbouw"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#args",children:"Args"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#argtypes",children:"ArgTypes"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#docs",children:"Docs"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#storybook-lokaal-opstarten",children:"Storybook lokaal opstarten"})}),`
`]}),`
`,e.jsx(n.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsxs(n.p,{children:["Deze pagina bevat de conventies die gehanteerd worden bij het schrijven van Storybook documentatie.",e.jsx("br",{}),`
Je kan bijv. kijken naar de volgende componenten die de conventies al correct volgen: `,e.jsx(n.strong,{children:"VlAccordion"}),`,
`,e.jsx(n.strong,{children:"VlProgressIndicator"}),", ",e.jsx(n.strong,{children:"VlFunctionalHeader"}),", ",e.jsx(n.strong,{children:"VlAccessibility"})," of ",e.jsx(n.strong,{children:"VlHeader"}),"."]}),`
`,e.jsx(n.h2,{id:"bestanden",children:"Bestanden"}),`
`,e.jsx(n.p,{children:"Om een story op te bouwen, splitsen we ze op in 3 bestanden:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"[component].stories.ts"}),": de ",e.jsx(n.a,{href:"#story-opbouw",children:"story opbouw"})," waarin het gebruik van de component getoond wordt"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"[component].stories-arg.ts"}),": de ",e.jsx(n.a,{href:"#args",children:"Args"})," en ",e.jsx(n.a,{href:"#argtypes",children:"ArgTypes"}),` gebruikt in de stories - die de
parameters definiëren`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"[component].stories-doc.mdx"}),": de 'Docs-tab' - de ",e.jsx(n.a,{href:"#docs",children:"Docs"})," pagina in ",e.jsx(n.code,{children:".mdx"}),`-formaat (markdown + jsx)
waarin de algemene informatie over de component beschreven wordt`]}),`
`]}),`
`,e.jsx(n.h2,{id:"story-opbouw",children:"Story opbouw"}),`
`,e.jsxs(n.p,{children:["Een ",e.jsx(n.code,{children:".stories.ts"})," bestand bestaat uit 3 delen: de ",e.jsx(n.a,{href:"#default-export",children:"default export"}),`, de
`,e.jsx(n.a,{href:"#story-template",children:"story template(s)"})," en de ",e.jsx(n.a,{href:"#stories",children:"stories"})," zelf."]}),`
`,e.jsx(n.h3,{id:"default-export",children:"Default Export"}),`
`,e.jsxs(n.p,{children:[`Hierin wordt de basis configuratie van een Story bepaald, deze volgt het door Storybook gespecifieerde
`,e.jsx(n.a,{href:"https://storybook.js.org/docs/6.5/web-components/api/csf",rel:"nofollow",children:"Component Story Format (CSF)"}),`. Dit heeft typisch
volgende structuur:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"title"}),": de titel van de Storybook entry, bv. ",e.jsx(n.code,{children:"Components/accordion"}),`
Het deel voor de `,e.jsx(n.code,{children:"/"})," (hier ",e.jsx(n.code,{children:"Components"}),") bepaalt de hoofd-positie in het zij-menu"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"args"})," (optioneel): de argumenten gespecifieerd in het ",e.jsx(n.code,{children:"[component].stories-arg.ts"}),` bestand - dit wordt niet
gespecifieerd indien de args in de stories gezet worden (zie `,e.jsx(n.a,{href:"#stories",children:"stories"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"argTypes"}),": de argument-types gespecifieerd in het ",e.jsx(n.code,{children:"[component].stories-arg.ts"})," bestand"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"parameters"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["docs > page: import van het ",e.jsx(n.code,{children:"[component].stories-doc.mdx"})," bestand"]}),`
`,e.jsxs(n.li,{children:["layout (optioneel): ",e.jsx(n.code,{children:"fullscreen"})," voor componenten die de volledige breedte in beslag nemen / ",e.jsx(n.code,{children:"centered"}),` voor
componenten die je wil centreren`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { Meta } from '@storybook/web-components-vite';
import { accordionArgs, accordionArgTypes } from './vl-accordion.stories-arg';
import accordionDoc from './vl-accordion.stories-doc.mdx';
import { storyArgTypes, storyArgs } from '@resources/utils-storybook';

export default {
    title: 'Components - Block/accordion',
    args: storyArgs(accordionArgs),
    argTypes: storyArgTypes(accordionArgTypes),
    parameters: {
        docs: {
            page: accordionDoc,
        },
        layout: 'centered',
    },
} as Meta<typeof accordionArgs>;
`})}),`
`,e.jsx(n.h3,{id:"story-template",children:"Story Template"}),`
`,e.jsx(n.p,{children:"Hiervoor hanteren we volgende richtlijnen:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["elke story heeft ",e.jsx(n.strong,{children:"op zijn minst 1 template"})]}),`
`,e.jsxs(n.li,{children:["een ",e.jsx(n.strong,{children:"zinvolle naamgeving"})," - als er maar 1 template is kan je die ",e.jsx(n.code,{children:"Template"}),` noemen, indien er meerdere zijn
geef je ze best allemaal een concrete naam`]}),`
`,e.jsxs(n.li,{children:["Storybook zelf ",e.jsxs(n.strong,{children:["gebruikt achterliggend ",e.jsx(n.a,{href:"https://lit.dev",rel:"nofollow",children:"Lit"})]})]}),`
`,e.jsxs(n.li,{children:["args sorteren we ",e.jsx(n.strong,{children:"bij voorkeur alfabetisch"}),", indien zinvol kan je hier van afwijken"]}),`
`,e.jsxs(n.li,{children:["het is belangrijk om gebruik te maken van de ",e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"story()"})," helper functie"]}),` - deze methode zet 'de args die
overeenkomen met de default args' om naar `,e.jsx(n.code,{children:"nothing"}),` (van Lit), hierdoor worden deze niet meer getoond in de
source code op de docs pagina van de story`]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["properties worden geprefixed met ",e.jsx(n.code,{children:"."})]})," - bv. ",e.jsx(n.code,{children:".steps=${steps}"})]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["events worden geprefixed met ",e.jsx(n.code,{children:"@"})]})," - bv. ",e.jsx(n.code,{children:"@vl-click-step=${(event: CustomEvent) => onClickStep(event.detail)}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"slots gebruiken het unsafeHTML directive"}),` van Lit zodat de HTML niet ge-escaped wordt - bv.
`,e.jsx(n.code,{children:"${unsafeHTML(titleSlot)}"})]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const Template = story(
    progressIndicatorArgs,
    ({ activeStep, focusOnChange, numeric, steps, onClickStep }) => html\`
        <vl-progress-indicator
            active-step=\${activeStep}
            ?focus-on-change=\${focusOnChange}
            ?numeric=\${numeric}
            .steps=\${steps}
            @vl-click-step=\${(event: CustomEvent) => onClickStep(event.detail)}
        >
        </vl-progress-indicator>
    \`
);
`})}),`
`,e.jsx(n.h3,{id:"stories",children:"Stories"}),`
`,e.jsx(n.p,{children:"Voor het schrijven van de Stories zelf hanteren we volgende richtlijnen:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["elk component heeft ",e.jsx(n.strong,{children:"minstens 1 story"})]}),`
`,e.jsxs(n.li,{children:["een template meerdere malen ",e.jsxs(n.strong,{children:["hergebruiken doe je m.b.v. ",e.jsx(n.code,{children:"Template.bind({})"})]}),", zie het voorbeeld hieronder"]}),`
`,e.jsxs(n.li,{children:["de naamgeving volgt de conventie: ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"[Component]+[Variant]"})}),", bv. ",e.jsx(n.code,{children:"ProgressIndicatorDefault"})]}),`
`,e.jsxs(n.li,{children:["indien de component meerdere 'logische varianten' heeft schrijven we een ",e.jsx(n.strong,{children:"aparte story per variant"}),`; in dit geval
geven of overschrijven we de args op story niveau`]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:`opmerking: pas nooit de argTypes van een story aan, hierdoor is de controls-sectie van Storybook niet meer
hetzelfde voor alle stories`}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`export const ProgressIndicatorDefault = Template.bind({}); // template om te gebruiken voor deze story
ProgressIndicatorDefault.storyName = 'vl-progress-indicator - default';
ProgressIndicatorDefault.args = {
    steps: ['Stap 1/3: Aanvraag', 'Stap 2/3: Gegevens', 'Stap 3/3: Bevestigen'],
};
`})}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"een story voorbeeld met verschillende templates "}),e.jsx(o,{code:a,language:"ts",dark:!0,format:!0})]}),`
`,e.jsx(n.h2,{id:"args",children:"Args"}),`
`,e.jsxs(n.p,{children:["Storybook definiëert de ",e.jsx(n.a,{href:"https://storybook.js.org/docs/6.1/web-components/writing-stories/args",rel:"nofollow",children:"args specificatie"}),`.
Het bestand heeft een naam conform: `,e.jsx(n.code,{children:"[component].stories-arg.ts"})," en volgt volgende richtlijnen:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["bij voorkeur ",e.jsx(n.strong,{children:"alfabetisch gesorteerd"}),", indien zinvol kan hier van afgeweken worden"]}),`
`,e.jsxs(n.li,{children:["args met een default waarde in de component krijgen de ",e.jsx(n.strong,{children:"default waarde van het type"})," (lege string ",e.jsx(n.code,{children:"''"}),", ",e.jsx(n.code,{children:"false"}),", ",e.jsx(n.code,{children:"0"}),`,
..) - hierdoor kan de default waarde afgetest worden; args zonder default waarde in de component krijgen een lege
waarde`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"slots suffixen"})," we met het woord ",e.jsx(n.code,{children:"slot"})," - bv. ",e.jsx(n.code,{children:"titleSlot"})," of ",e.jsx(n.code,{children:"defaultSlot"})]}),`
`,e.jsxs(n.li,{children:["voor events gebruiken we de ",e.jsx(n.a,{href:"https://storybook.js.org/addons/@storybook/addon-actions",rel:"nofollow",children:"action addon"}),` van Storybook
zodat het event getoond wordt in de actions sectie`]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"opgelet: maak geen gebruik van de Args-interface uit @storybook/web-component omdat daardoor de types verloren gaan"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`export const progressBarArgs = {
    activeStep: 1,
    focusOnChange: false,
    numeric: false,
    steps: [''],
    onClickStep: action('vl-click-step'),
};
`})}),`
`,e.jsx(n.h2,{id:"argtypes",children:"ArgTypes"}),`
`,e.jsxs(n.p,{children:["Storybook definiëert de ",e.jsx(n.a,{href:"https://storybook.js.org/docs/6.5/web-components/api/argtypes",rel:"nofollow",children:"arg-types specificatie"}),`.
De arg-types worden bij in het `,e.jsx(n.code,{children:"[component].stories-arg.ts"})," bestand gezet en volgen volgende richtlijnen:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["bij voorkeur ",e.jsx(n.strong,{children:"alfabetisch gesorteerd"}),", indien zinvol kan hier van afgeweken worden"]}),`
`,e.jsxs(n.li,{children:["maak gebruik van de ",e.jsx(n.strong,{children:"ArgTypes-interface"})," uit @storybook/web-components"]}),`
`,e.jsxs(n.li,{children:["voor ",e.jsx(n.code,{children:"categories"})," en ",e.jsx(n.code,{children:"types"})," zijn er ",e.jsx(n.code,{children:"CATEGORIES"})," en ",e.jsx(n.code,{children:"TYPES"})," constanten voorzien"]}),`
`,e.jsxs(n.li,{children:["de defaultValue van de ",e.jsx(n.code,{children:"argType"})," moet gelijkgesteld worden aan de waarde in de equivalente ",e.jsx(n.code,{children:"args"}),`-waarde; conform
`,e.jsx(n.code,{children:"defaultValue: { summary: progressBarArgs.activeStep }"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Het ArgType volgt een vaste structuur:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"name"}),": de naam die in de component gebruikt wordt",e.jsx("br",{}),`
slots gebruiken de waarde van het name-attribuut of de waarde '[default]' indien het een default slot is`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"description"}),": korte omschrijving, vermeldt de argumenten die niet in combinatie gebruikt kunnen worden"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"table"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"type"})," > ",e.jsx(n.strong,{children:"summary"}),": het type (string, number, boolean, html, ...) - maakt gebruik van de constante ",e.jsx(n.code,{children:"TYPES"}),e.jsx("br",{}),`
voor een enum worden alle mogelijke waarden genoteerd, bv.
'[waarde 1] | [waarde 2] | [waarde 3]'`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"category"}),`: de categorie, bepaalt de groepering in de controls sectie van Storybook, maakt gebruik van de
constante `,e.jsx(n.code,{children:"CATEGORIES"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"defaultValue"})," (optioneel) > ",e.jsx(n.strong,{children:"summary"}),": de default waarde in de component"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"control"}),` (optioneel): wordt gebruikt bij o.a. een enum om een dropdown control te tonen
zie `,e.jsx(n.a,{href:"https://storybook.js.org/docs/6.5/web-components/essentials/controls",rel:"nofollow",children:"controls"}),` in
Storybook`,`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"type"}),": het type van de control (select, ...)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"options"}),": de opties van de control"]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`activeStep: {
    name: 'active-step',
    description: 'Markeert een stap als de actieve.',
    control: { type: 'range', min: 1, max: 3, step: 1 },
    table: {
        type: { summary: TYPES.NUMBER },
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: progressBarArgs.activeStep },
    }
}
`})}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"een volledig voorbeeld van ArgTypes"}),e.jsx(o,{language:"ts",dark:!0,format:!0,code:`
          export const progressBarArgTypes: ArgTypes<typeof progressIndicatorArgs> = {
              activeStep: {
                  name: 'active-step',
                  description: 'Markeert een stap als de actieve.',
                  control: { type: 'range', min: 1, max: 3, step: 1 },
                  table: {
                      type: { summary: TYPES.NUMBER },
                      category: CATEGORIES.ATTRIBUTES,
                      defaultValue: { summary: progressIndicatorArgs.activeStep },
                  },
              },
              focusOnChange: {
                  name: 'focus-on-change',
                  description: 'Bepaalt of een stap de focus krijgt na een wijziging.',
                  table: {
                      type: { summary: TYPES.BOOLEAN },
                      category: CATEGORIES.ATTRIBUTES,
                      defaultValue: { summary: progressIndicatorArgs.focusOnChange },
                  },
              },
              numeric: {
                  name: 'numeric',
                  description: 'Voorziet numerieke indicatoren bij de stappen.',
                  table: {
                      type: { summary: TYPES.BOOLEAN },
                      category: CATEGORIES.ATTRIBUTES,
                      defaultValue: { summary: progressIndicatorArgs.numeric },
                  },
              },
              steps: {
                  description: 'Lijst met omschrijvingen per stap.',
                  control: { type: 'object', required: true },
                  table: {
                      type: { summary: TYPES.ARRAY },
                      category: CATEGORIES.PROPERTIES,
                      defaultValue: { summary: progressIndicatorArgs.steps },
                  },
              },
              onClickStep: {
                  name: 'vl-click-step',
                  description:
                      'Afgevuurd na het klikken op een stap.<br>Het event bevat de omschrijving en het nummer van de stap.',
                  table: {
                      type: { summary: '{ step: string, number: number }' },
                      category: CATEGORIES.EVENTS,
                      defaultValue: { summary: progressIndicatorArgs.onClickStep },
                  },
              },
          };
          `})]}),`
`,e.jsx(n.h2,{id:"docs",children:"Docs"}),`
`,e.jsxs(n.p,{children:["De docs voor Storybook worden geschreven in ",e.jsx(n.a,{href:"https://mdxjs.com",rel:"nofollow",children:"MDX"}),` formaat.
Het bestand heeft een naam conform: `,e.jsx(n.code,{children:"[component].stories-doc.mdx"})," en volgt onderstaande template:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`import { ArgsTable, DocsStory, PRIMARY_STORY } from '@storybook/addon-docs';

# <naam>

<omschrijving>

## Voorbeeld

\`\`\`js
<import statement>
\`\`\`

\`\`\`html
<custom tag>
\`\`\`

<DocsStory id="<default story id>" />

## Configuratie

<ArgsTable story={PRIMARY_STORY} />

## Varianten

### Naam Variant 1

<DocsStory id="id-variant-1" />

### Naam Variant 2

<DocsStory id="id-variant-2" />

## Referenties

### Digitaal Vlaanderen

**Documentatie Digitaal Vlaanderen:** [url-documentatie-digitaal-vlaanderen]

### Legacy Documentatie

**Legacy Storybook:**  [url-legacy-storybook]

**Legacy Documentatie:** [url-legacy-documentatie]

**Legacy Demo:**  <url legacy demo>
`})}),`
`,e.jsx(n.h2,{id:"storybook-lokaal-opstarten",children:"Storybook lokaal opstarten"}),`
`,e.jsx(n.p,{children:"Voer onderstaande script uit om Storybook lokaal op te starten op http://localhost:8080:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`npm run apps:storybook:dev
`})})]})}function c(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{c as default};
