"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[834],{"../../libs/components/src/next/paragraph/index.ts":(e,n,t)=>{t.d(n,{Q:()=>i.Q});var i=t("../../libs/components/src/next/paragraph/vl-paragraph.component.ts")},"../../libs/components/src/next/paragraph/vl-paragraph.component.ts":(e,n,t)=>{t.d(n,{Q:()=>v});var i=t("../../libs/common/utilities/src/index.ts"),a=t("../../libs/common/utilities/src/css/index.ts"),r=t("../../node_modules/lit/index.js"),o=t("../../node_modules/lit/directives/class-map.js"),l=t("../../libs/components/src/next/paragraph/vl-paragraph.defaults.ts");class v extends i.jW{static get styles(){return[a.N]}static get properties(){return{bold:{type:Boolean},introduction:{type:Boolean}}}render(){let e={bold:this.bold,introduction:this.introduction};return(0,r.qy)`
            <p class=${(0,o.H)(e)}>
                <slot></slot>
            </p>
        `}constructor(...e){super(...e),this.bold=l.J.bold,this.introduction=l.J.introduction}}v=function(e,n,t,i){var a,r=arguments.length,o=r<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,n,t,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(n,t,o):a(n,t))||o);return r>3&&o&&Object.defineProperty(n,t,o),o}([(0,i.M1)("vl-paragraph-next")],v)},"../../libs/components/src/next/paragraph/vl-paragraph.defaults.ts":(e,n,t)=>{t.d(n,{J:()=>i});let i={bold:!1,introduction:!1}},"../../libs/components/src/next/properties/index.ts":(e,n,t)=>{t.d(n,{L:()=>i.L});var i=t("../../libs/components/src/next/properties/vl-properties.component.ts")},"../../libs/components/src/next/properties/vl-properties.component.ts":(e,n,t)=>{t.d(n,{L:()=>b});var i=t("../../libs/common/utilities/src/index.ts"),a=t("../../libs/elements/src/index.ts"),r=t("../../node_modules/lit/index.js");let o=e=>e.map(e=>e.cloneNode(!0)),l=e=>{let n=[],t=[],i=[];return e.forEach(e=>{switch(e.localName){case"label":t.length&&i.length&&(n.push({labels:t,data:i}),t=[],i=[]),t.push(e.children.length>0?o([...e.children]):e.innerHTML);break;case"data":i.push(e.children.length>0?o([...e.children]):e.innerHTML)}}),t.length&&n.push({labels:t,data:i}),n},v=e=>null==e||0==e.length?(console.warn("vl-properties - geen props opgegeven"),[]):e[0]?.localName==="div"?e.map(e=>({class:e.className,items:l([...e.children])})):[{items:l(e)}];var s=t("../../libs/common/utilities/src/css/index.ts");let d=e=>(0,r.AH)`
        width: calc(${e}% - 1rem);
    `,g=()=>(0,r.AH)`
        font-size: 1.6rem;
    `,m=()=>(0,r.AH)`
        grid-column: 1;
        font-size: 1.6rem;
    `,c=e=>(0,r.AH)`
        dl,
        dl .item {
            grid-template-columns: [labels] ${e}% [data] auto;
        }

        dl .column--full-width,
        dl .column--full-width .item {
            grid-template-columns: [labels] ${e/2}% [data] auto;
        }
    `,p=(0,r.AH)`
    @media screen and (max-width: ${s.gT}px) {
        dl,
        dl .item {
            grid-template-columns: 100%;
        }

        .column {
            ${d(100)};
        }

        dd {
            ${m()}
        }

        dt {
            ${g()}
        }
    }
`,h=(0,r.AH)`
    :host {
        display: block;
    }

    .column {
        ${d(50)};
        float: left;
    }

    .column--full-width {
        ${d(100)};
        float: left;
    }

    dl {
        display: grid;
        word-break: break-word;
    }

    dl:has(.item) {
        display: initial;
    }

    dl .item {
        display: grid;
        padding-bottom: 2rem;
    }

    dt {
        font-size: 1.8rem;
        color: var(--vl-color--label);
        padding-right: 1rem;
        grid-column: 1;
    }

    .collapsed dt {
        ${g()}
    }

    dd {
        font-size: 1.8rem;
        grid-column: 2;
    }

    .collapsed dd {
        ${m()}
    }

    .collapsed .item,
    dl:has(.collapsed) {
        grid-template-columns: 100%;
    }
`;var u=t("../../libs/components/src/next/properties/vl-properties.defaults.ts");class b extends i.jW{static get styles(){return[a.hF,h]}static get properties(){return{props:{type:Array},aggregatedProps:{type:Array,state:!0},labelWidth:{type:Number,attribute:"label-width"}}}set props(e){this.attributeProps=e,this.buildInternalProperties()}get props(){return this.attributeProps}connectedCallback(){super.connectedCallback(),this.buildInternalProperties(),this.observeLightPropertiesChange()}firstUpdated(e){super.firstUpdated(e),this.shadowRoot&&(this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,this.labelWidthSheet,p.styleSheet])}updated(e){super.updated(e),e.has("labelWidth")&&this.labelWidth&&this.labelWidthSheet.replace(c(this.labelWidth).toString())}disconnectedCallback(){super.disconnectedCallback(),this.disconnectMutationObservers()}render(){return(0,r.qy)` <dl>${this.aggregatedProps.map(e=>this.renderColumn(e))}</dl> `}renderColumn(e){return e.class?(0,r.qy)` <div class="${e.class}">${e.items.map(e=>this.renderItem(e))}</div>`:(0,r.qy)` ${e.items.map(e=>this.renderItem(e))}`}renderItem(e){return(0,r.qy)` <div class="item">${this.renderLabels(e.labels)} ${this.renderData(e.data)}</div>`}renderLabels(e){return e.map(e=>(0,r.qy)` <dt>${e}</dt>`)}renderData(e){return e.map(e=>(0,r.qy)` <dd>${e}</dd>`)}buildInternalProperties(){this.aggregatedProps=[...this.attributeProps,...v([...this.children])]}disconnectMutationObservers(){this.mutationObserverList.forEach(e=>e.disconnect()),this.mutationObserverList=[]}observeLightPropertiesChange(){this.disconnectMutationObservers(),this.mutationObserverList=[...this.mutationObserverList,(0,i.U_)(this,e=>{this.buildInternalProperties(),this.observeLightPropertiesChange()})],this.children.length>0&&"div"===this.children[0].localName&&[...this.children].forEach(e=>this.mutationObserverList=[...this.mutationObserverList,(0,i.U_)(e,e=>{this.buildInternalProperties()})])}constructor(...e){super(...e),this.attributeProps=u.g.props,this.aggregatedProps=u.g.props,this.mutationObserverList=[],this.labelWidth=u.g.labelWidth,this.labelWidthSheet=new CSSStyleSheet}}b=function(e,n,t,i){var a,r=arguments.length,o=r<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,n,t,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(n,t,o):a(n,t))||o);return r>3&&o&&Object.defineProperty(n,t,o),o}([(0,i.M1)("vl-properties-next")],b)},"../../libs/components/src/next/properties/vl-properties.defaults.ts":(e,n,t)=>{t.d(n,{g:()=>i});let i={labelWidth:25,props:[]}},"../../libs/components/src/next/title/index.ts":(e,n,t)=>{t.d(n,{I:()=>i.I});var i=t("../../libs/components/src/next/title/vl-title.component.ts")},"../../libs/components/src/next/title/vl-title.component.ts":(e,n,t)=>{t.d(n,{I:()=>s});var i=t("../../libs/common/utilities/src/index.ts");t("../../node_modules/@lit/reactive-element/reactive-element.js");var a=t("../../node_modules/lit-html/lit-html.js");t("../../node_modules/lit-element/lit-element.js");/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var r=(e,n,t)=>{for(var i of n)if(i[0]===e)return(0,i[1])();return null==t?void 0:t()},o=t("../../node_modules/lit/directives/class-map.js"),l=t("../../libs/components/src/next/title/vl-title.css.ts"),v=t("../../libs/components/src/next/title/vl-title.defaults.ts");class s extends i.jW{static get styles(){return[l.Z]}static get properties(){return{type:{type:String},underline:{type:Boolean},noSpaceBottom:{type:Boolean,attribute:"no-space-bottom"},alt:{type:Boolean}}}render(){let e={underline:this.underline,"no-space-bottom":this.noSpaceBottom,alt:this.alt};return(0,a.qy)`
            ${r(this.type,[["h1",()=>(0,a.qy)` <h1 class=${(0,o.H)(e)} part="h1">
                            <slot></slot>
                        </h1>`],["h2",()=>(0,a.qy)` <h2 class=${(0,o.H)(e)} part="h2">
                            <slot></slot>
                        </h2>`],["h3",()=>(0,a.qy)` <h3 class=${(0,o.H)(e)} part="h3">
                            <slot></slot>
                        </h3>`],["h4",()=>(0,a.qy)` <h4 class=${(0,o.H)(e)} part="h4">
                            <slot></slot>
                        </h4>`],["h5",()=>(0,a.qy)` <h5 class=${(0,o.H)(e)} part="h5">
                            <slot></slot>
                        </h5>`],["h6",()=>(0,a.qy)` <h6 class=${(0,o.H)(e)} part="h6">
                            <slot></slot>
                        </h6>`]],()=>(0,a.qy)` <h1 class=${(0,o.H)(e)} part="h1">
                    <slot></slot>
                </h1>`)}
        `}constructor(...e){super(...e),this.type=v.D.type,this.underline=v.D.underline,this.noSpaceBottom=v.D.noSpaceBottom,this.alt=v.D.alt}}s=function(e,n,t,i){var a,r=arguments.length,o=r<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,n,t,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(n,t,o):a(n,t))||o);return r>3&&o&&Object.defineProperty(n,t,o),o}([(0,i.M1)("vl-title-next")],s)},"../../libs/components/src/next/title/vl-title.defaults.ts":(e,n,t)=>{t.d(n,{D:()=>i});let i={type:"h1",underline:!1,alt:!1,noSpaceBottom:!1}},"../../libs/sections/src/privacy/vl-privacy.defaults.ts":(e,n,t)=>{t.d(n,{z:()=>i});let i={date:"3 maart 2021",disableBackLink:!1,hideBackLink:!1,version:"1.0.0",headerSlot:"",versionSlot:"",contentSlot:"",bottomSlot:""}},"../../libs/sections/src/privacy/vl-privacy.section.ts":(e,n,t)=>{var i=t("../../libs/common/utilities/src/index.ts"),a=t("../../libs/common/utilities/src/css/index.ts"),r=t("../../libs/components/src/index.ts"),o=t("../../libs/components/src/next/paragraph/index.ts"),l=t("../../libs/components/src/next/properties/index.ts"),v=t("../../libs/components/src/next/side-navigation/index.ts"),s=t("../../libs/components/src/next/title/index.ts"),d=t("../../libs/elements/src/index.ts"),g=t("../../node_modules/lit/index.js"),m=t("../../node_modules/lit/decorators.js"),c=t("../../node_modules/lit-html/lit-html.js");let p=()=>(0,c.qy)`
    <div class="vl-content-block-next">
        <div class="vl-grid-next vl-stacked-next-medium">
            <div class="vl-column-next vl-column-next--12 vl-column-next--m-12">
                <vl-contact-card id="contact-card">
                    <vl-infoblock slot="info" data-vl-type="contact">
                        <h2 slot="title">DPO van Departement Omgeving</h2>
                    </vl-infoblock>
                    <vl-properties-next slot="properties">
                        <label>Adres</label>
                        <data>
                            <div>Herman Teirlinckgebouw</div>
                            <div>Havenlaan 88</div>
                            <div>1000 Brussel, België</div>
                        </data>
                        <label>E-mail</label>
                        <data>
                            <vl-link-next href="mailto:dpo@omgevingvlaanderen.be"
                                          icon-placement="after"
                                          icon="mail">
                                dpo@omgevingvlaanderen.be
                            </vl-link-next>
                        </data>
                    </vl-properties-next>
                </vl-contact-card>
            </div>
        </div>
    </div>
`,h=()=>(0,c.qy)`
    <div class="vl-content-block-next">
        <div class="vl-grid-next vl-stacked-next-medium">
            <div class="vl-column-next vl-column-next--8 vl-column-next--m-8 vl-column-next--s-8 vl-column-next--xs-12">
                <vl-side-navigation-reference-next>
                    <div class="vl-grid-next vl-stacked-next-large">
                        <div id="privacy-department" class="vl-column-next vl-column-next--12 vl-column-next--m-12">
                            <vl-title-next type="h2">Het Departement Omgeving en uw privacy</vl-title-next>
                            <p>
                                Op 25 mei 2018 werd de Europese ‘Algemene Verordening Gegevensbescherming’ (AVG), ook
                                gekend onder de Engelse naam ‘General Data Protection Regulation’ (GDPR) van kracht.
                                Naar aanleiding daarvan heeft het Departement Omgeving zijn privacybeleid verduidelijkt.
                                Om zijn dienstverlening verder te optimaliseren, beheert en gebruikt het departement
                                alle persoonsgegevens die het verzamelt op een veilige, respectvolle manier en als een
                                goede huisvader.
                            </p>
                        </div>
                        <div class="vl-column-next vl-column-next--12 vl-column-next--m-12">
                            <vl-title-next type="h2" id="privacy-declaration">Privacyverklaring</vl-title-next>
                            <div class="vl-grid-next vl-stacked-next-medium">
                                <div class="vl-column-next vl-column-next--12 vl-column-next--m-12">
                                    <vl-title-next type="h3" id="privacy-declaration-who"
                                        >Wie is verantwoordelijk voor de verwerking van mijn persoonsgegevens?
                                    </vl-title-next>
                                    <div class="vl-grid-next vl-stacked-next-medium">
                                        <div class="vl-column-next vl-column-next--12 vl-column-next--m-12">
                                            <vl-typography>
                                                <p>
                                                    Het Departement Omgeving verwerkt gegevens van haar doelgroepen en
                                                    contactpersonen (burgers, medewerkers van andere
                                                    overheden/organisaties/ondernemingen, medewerkers van scholen of
                                                    MOS-referentiepersonen, adviesbureaus, experten, …) en is voor die
                                                    gegevensverwerkingen de verwerkingsverantwoordelijke in de zin van
                                                    de Algemene Verordening Gegevensbescherming. We verwerken alleen
                                                    persoonsgegevens als dat noodzakelijk is om de taken die ons zijn
                                                    toegewezen te kunnen verrichten. We verwerken de gegevens altijd in
                                                    overeenstemming met de bepalingen van de algemene verordening
                                                    gegevensbescherming (AVG), en met de bepalingen van de federale en
                                                    Vlaamse regelgeving over de bescherming van natuurlijke personen bij
                                                    de verwerking van persoonsgegevens.
                                                </p>
                                                <p>
                                                    In een aantal gevallen verwerken externe partners persoonsgegevens
                                                    in opdracht van het Departement Omgeving. Met deze verwerkers wordt
                                                    een verwerkingsovereenkomst afgesloten, conform de bepalingen van
                                                    art. 28 AVG. Ook in dit geval blijft het Departement Omgeving de
                                                    eindverantwoordelijke voor de verwerking.
                                                </p>
                                                <p>
                                                    Het Departement treedt voor een aantal specifieke taken op als
                                                    co-verwerkingsverantwoordelijke. Dit betekent dat het Departement
                                                    samen met andere partners verantwoordelijk is voor de verwerking van
                                                    persoonsgegevens. Met de co-verwerkingsverantwoordelijken wordt een
                                                    samenwerkingsovereenkomst afgesloten, conform de bepalingen van art.
                                                    26 AVG.
                                                </p>
                                            </vl-typography>
                                        </div>
                                        <div class="vl-column-next vl-column-next--12 vl-column-next--m-12">
                                            <vl-title-next type="h4">Over het Departement Omgeving</vl-title-next>
                                            <p>
                                                Het Departement Omgeving van de Vlaamse overheid is een officieel
                                                overheidsorgaan dat als doel heeft het beleid en de handhaving van de
                                                Vlaamse overheid inzake de beleidsthema’s Ruimtelijke ordening,
                                                Leefmilieu, Natuur en Energie vorm te geven en te realiseren. Met behulp
                                                van de informatiesystemen en de methoden van het Departement Omgeving
                                                van de Vlaamse Overheid worden inventarissen gemaakt, beleidsmaatregelen
                                                uitgevoerd en informatie verstrekt aan het beleidsdomein, aan andere
                                                overheden, inspectiediensten en burgers.
                                            </p>
                                        </div>
                                        <div class="vl-column-next vl-column-next--12 vl-column-next--m-12">
                                            <vl-contact-card>
                                                <vl-infoblock slot="info" data-vl-type="contact">
                                                    <vl-title-next type="h4" slot="title">
                                                        Departement Omgeving
                                                    </vl-title-next>
                                                </vl-infoblock>
                                                <vl-properties-next slot="properties">
                                                    <label>Adres</label>
                                                    <data>
                                                        <div>Herman Teirlinckgebouw</div>
                                                        <div>Havenlaan 88</div>
                                                        <div>1000 Brussel, België</div>
                                                    </data>
                                                    <label>Telefoon</label>
                                                    <data>
                                                        <vl-link-next
                                                            href="tel:02 553 80 11"
                                                            icon-placement="after"
                                                            icon="phone"
                                                        >
                                                            02 553 80 11
                                                        </vl-link-next>
                                                    </data>
                                                    <label>E-mail</label>
                                                    <data>
                                                        <vl-link-next
                                                            href="mailto:omgeving@vlaanderen.be"
                                                            icon-placement="after"
                                                            icon="mail"
                                                        >
                                                            omgeving@vlaanderen.be
                                                        </vl-link-next>
                                                    </data>
                                                    <label>Website</label>
                                                    <data>
                                                        <vl-link-next href="http://www.omgevingvlaanderen.be" external>
                                                            http://www.omgevingvlaanderen.be
                                                        </vl-link-next>
                                                    </data>
                                                    <label>KBO-nummer</label>
                                                    <data>
                                                        0316.380.841 (ondernemingsnummer van de Vlaamse Overheid)
                                                    </data>
                                                </vl-properties-next>
                                            </vl-contact-card>
                                        </div>
                                    </div>
                                </div>
                                <div class="vl-column-next vl-column-next--12 vl-column-next--m-12">
                                    <vl-title-next type="h3" id="privacy-declaration-process"
                                        >Verwerking van persoonsgegevens
                                    </vl-title-next>
                                    <div class="vl-grid-next vl-stacked-next-medium">
                                        <div class="vl-column-next vl-column-next--12 vl-column-next--m-12">
                                            <p>
                                                Het Departement Omgeving verwerkt persoonsgegevens van u als burger of
                                                als medewerker van een overheid/bestuur, organisatie of onderneming. De
                                                Algemene Verordening Gegevensbescherming geeft in Artikel 4 volgende
                                                definitie van het begrip ‘verwerking’: “een bewerking of een geheel van
                                                bewerkingen met betrekking tot persoonsgegevens of een geheel van
                                                persoonsgegevens, al dan niet uitgevoerd via geautomatiseerde procedés,
                                                zoals het verzamelen, vastleggen, ordenen, structureren, opslaan,
                                                bijwerken of wijzigen, opvragen, raadplegen, gebruiken, verstrekken door
                                                middel van doorzending, verspreiden of op andere wijze ter beschikking
                                                stellen, aligneren of combineren, afschermen, wissen of vernietigen van
                                                gegevens”.
                                            </p>
                                        </div>
                                        <div class="vl-column-next vl-column-next--12 vl-column-next--m-12">
                                            <vl-title-next type="h4"
                                                >Hoe verzamelen en verwerken we uw persoonsgegevens?
                                            </vl-title-next>
                                            <vl-typography>
                                                <p>
                                                    Het Departement Omgeving kan uw persoonsgegevens op verschillende
                                                    manieren verzamelen:
                                                </p>
                                                <vl-side-navigation-group-next>
                                                    <vl-side-navigation-item-next>
                                                        We kunnen gegevens rechtstreeks bij u opvragen in een formulier
                                                        of in documenten die u bij een formulier moet voegen. Die
                                                        documenten zijn opgesomd in de regelgeving.
                                                    </vl-side-navigation-item-next>
                                                    <vl-side-navigation-item-next>
                                                        Daarnaast vragen we gegevens op bij andere overheidsdiensten die
                                                        er al over beschikken. We leven daarbij altijd de bepalingen na
                                                        over de bescherming van natuurlijke personen bij de verwerking
                                                        van persoonsgegevens, die in voorkomend geval op federaal of
                                                        Vlaams niveau vastgelegd zijn. Voor de toegang tot authentieke
                                                        bronnen zoals bv. het Rijksregister heeft het Departement
                                                        Omgeving een aantal machtigingen gekregen om deze
                                                        persoonsgegevens op te vragen en te verwerken.
                                                    </vl-side-navigation-item-next>
                                                </vl-side-navigation-group-next>
                                            </vl-typography>
                                        </div>
                                        <div class="vl-column-next vl-column-next--12 vl-column-next--m-12">
                                            <vl-title-next type="h4"
                                                >Waarvoor verwerken we uw persoonsgegevens?
                                            </vl-title-next>
                                            <vl-typography>
                                                <p>
                                                    Het Departement Omgeving verwerkt persoonsgegevens voor de volgende
                                                    doeleinden:
                                                </p>
                                                <vl-side-navigation-group-next>
                                                    <vl-side-navigation-item-next>
                                                        Om aan wettelijke verplichtingen en beleidsmatig toegewezen
                                                        taken als overheidsinstelling te voldoen;
                                                        <br /><br />
                                                        In Vlaamse Regelgeving worden aan het Departement Omgeving een
                                                        aantal taken opgelegd waarbij de verwerking van persoonsgegevens
                                                        expliciet verplicht wordt. De verwerking is in dat geval beperkt
                                                        tot wat door die wettelijke verplichting bepaald wordt.
                                                        <br /><br />
                                                        Voor andere verwerkingen bestaat geen expliciete verplichting in
                                                        een wettekst, maar is de verwerking van persoonsgegevens een
                                                        noodzaak voor de uitvoering van beleidstaken die aan het
                                                        Departement zijn toegewezen.
                                                    </vl-side-navigation-item-next>
                                                    <vl-side-navigation-item-next>
                                                        Om te voldoen aan contractuele verplichtingen of administratieve
                                                        handelingen te kunnen verrichten;
                                                        <br /><br />
                                                        Bij de uitvoering van haar taken neemt het Departement ook
                                                        contractuele verbintenissen op zich. Sommige van deze
                                                        verbintenissen vereisen de verwerking van persoonsgegevens. Ook
                                                        hier is de verwerkte informatie steeds beperkt tot die gegevens
                                                        die strikt noodzakelijk zijn voor de uitvoering van
                                                        overeenkomsten. (financiële administratie en facturatie,
                                                        personeelsadministratie, rechtenbeheer, beheer
                                                        gebruikersovereenkomst)
                                                    </vl-side-navigation-item-next>
                                                    <vl-side-navigation-item-next>
                                                        Om u te informeren over nieuwe ontwikkelingen in thema’s
                                                        waarvoor het Departement Omgeving verantwoordelijkheden draagt.
                                                        <br /><br />
                                                        Het Departement Omgeving geeft een aantal nieuwsbrieven uit over
                                                        thema's die nauw verbonden zijn met haar taken. Het informeren
                                                        van burgers kadert in de beleidstaken van de overheid. Gezien
                                                        het hier over directe communicatie gaat, is deze verwerking
                                                        gebaseerd op de toestemming van de betrokkene. U kiest dus zelf
                                                        of u zich in- of uitschrijft voor deze communicatie.
                                                    </vl-side-navigation-item-next>
                                                </vl-side-navigation-group-next>
                                            </vl-typography>
                                        </div>
                                        <div class="vl-column-next vl-column-next--12 vl-column-next--m-12">
                                            <vl-title-next type="h4"
                                                >Welke persoonsgegevens worden verwerkt?
                                            </vl-title-next>
                                            <vl-typography>
                                                <p>
                                                    In dit kader verwerkt het Departement Omgeving, naargelang de aard
                                                    van de relatie met u als burger, of medewerker van een
                                                    overheid/bestuur, organisatie of onderneming en de noodzakelijke
                                                    verwerking van (persoons)gegevens mogelijk de volgende gegevens:
                                                </p>
                                                <vl-side-navigation-group-next>
                                                    <vl-side-navigation-item-next
                                                        >Aanhef/aanspreking
                                                    </vl-side-navigation-item-next>
                                                    <vl-side-navigation-item-next
                                                        >Voornaam
                                                    </vl-side-navigation-item-next>
                                                    <vl-side-navigation-item-next
                                                        >Tussenvoegsel
                                                    </vl-side-navigation-item-next>
                                                    <vl-side-navigation-item-next
                                                        >Familienaam
                                                    </vl-side-navigation-item-next>
                                                    <vl-side-navigation-item-next
                                                        >Rijksregisternummer
                                                    </vl-side-navigation-item-next>
                                                    <vl-side-navigation-item-next
                                                        >Geslacht
                                                    </vl-side-navigation-item-next>
                                                    <vl-side-navigation-item-next
                                                        >Geboortedatum
                                                    </vl-side-navigation-item-next>
                                                    <vl-side-navigation-item-next
                                                        >Leeftijd of geboortejaar
                                                    </vl-side-navigation-item-next>
                                                    <vl-side-navigation-item-next
                                                        >Nationaliteit
                                                    </vl-side-navigation-item-next>
                                                    <vl-side-navigation-item-next
                                                        >Adres(sen)
                                                    </vl-side-navigation-item-next>
                                                    <vl-side-navigation-item-next
                                                        >E-mailadres(sen)
                                                    </vl-side-navigation-item-next>
                                                    <vl-side-navigation-item-next
                                                        >Telefoon/gsm/fax
                                                    </vl-side-navigation-item-next>
                                                    <vl-side-navigation-item-next
                                                        >Beroepsgegevens, diploma’s, certificeringen
                                                    </vl-side-navigation-item-next>
                                                    <vl-side-navigation-item-next
                                                        >Strafrechtelijke en justitiële gegevens
                                                    </vl-side-navigation-item-next>
                                                </vl-side-navigation-group-next>
                                                <p>
                                                    Tijdens het gebruik van de informatieverwerkende systemen door
                                                    medewerkers of door uzelf (bijvoorbeeld bij ingave in of consultatie
                                                    van een via webtoegang beschikbaar gestelde applicatie) worden door
                                                    het Departement Omgeving en/of de door haar aangewezen verwerkers
                                                    ook bepaalde gegevens verzameld. Het gaat hier om gegevens die
                                                    vereist zijn voor de dienstverlening en de bewaking van de kwaliteit
                                                    van de verzamelde data van het Departement Omgeving. Deze gegevens
                                                    kunnen door het Departement of een door haar aangewezen
                                                    verwerker/dienstverlener onder strikte voorwaarden gebruikt worden
                                                    als er bijvoorbeeld klachten zijn over de verbinding of het niet
                                                    naar behoren functioneren van een software/webtoepassing.
                                                    Afhankelijk van de activiteit die u daarbij als betrokkene verricht,
                                                    verwerkt het Departement Omgeving in dit kader mogelijk de volgende
                                                    gegevens:
                                                </p>
                                                <vl-side-navigation-group-next>
                                                    <vl-side-navigation-item-next
                                                        >IP-adres
                                                    </vl-side-navigation-item-next>
                                                    <vl-side-navigation-item-next
                                                        >gebruikersnaam (login) of identificatienummer
                                                    </vl-side-navigation-item-next>
                                                    <vl-side-navigation-item-next
                                                        >eID identificatie- en authenticatiegegevens
                                                    </vl-side-navigation-item-next>
                                                    <vl-side-navigation-item-next
                                                        >tijdstip van handelingen in de software
                                                    </vl-side-navigation-item-next>
                                                    <vl-side-navigation-item-next
                                                        >registratie van de handelingen in de software (logging).
                                                    </vl-side-navigation-item-next>
                                                </vl-side-navigation-group-next>
                                            </vl-typography>
                                        </div>
                                        <div class="vl-column-next vl-column-next--12 vl-column-next--m-12">
                                            <vl-title-next type="h4"
                                                >Hoelang bewaren we uw persoonsgegevens?
                                            </vl-title-next>
                                            <vl-typography>
                                                <p>
                                                    Het Departement Omgeving verzamelt niet meer gegevens dan
                                                    noodzakelijk voor de dienstverlening die zij geacht wordt te leveren
                                                    en wenst deze niet langer bij te houden dan wettelijk verplicht,
                                                    noodzakelijk of aanvaardbaar. Volgens de algemene regel mogen we uw
                                                    persoonsgegevens alleen bewaren tijdens de periode waarin ze
                                                    noodzakelijk zijn om bepaalde diensten te verlenen. We bewaren uw
                                                    gegevens dus zolang u gebruikmaakt van onze diensten. Daarna bewaren
                                                    we uw gegevens nog gedurende de termijn waarin we ons moeten kunnen
                                                    verantwoorden voor de verleende diensten. Na verloop van die
                                                    verjaringstermijn worden de gegevens verwijderd conform aan de
                                                    bepalingen van het Vlaams Archiefdecreet, tenzij ze van historisch,
                                                    cultureel of algemeen belang zijn.
                                                </p>
                                                <p>
                                                    Bij de bewaring wordt een onderscheid gemaakt tussen de periode
                                                    waarin uw dossier actief is en de periode waarin het passief wordt.
                                                    Uw dossier is actief zolang u van de verleende dienst gebruikmaakt.
                                                    Alle medewerkers die uw gegevens nodig hebben om hun taak te kunnen
                                                    uitoefenen, hebben dan toegang tot uw gegevens. Nadien wordt uw
                                                    dossier passief en heeft enkel een beperkt aantal medewerkers van de
                                                    bevoegde dienst toegang tot uw gegevens.
                                                </p>
                                            </vl-typography>
                                        </div>
                                        <div class="vl-column-next vl-column-next--12 vl-column-next--m-12">
                                            <vl-title-next type="h4">Persoonsgegevens van kinderen</vl-title-next>
                                            <p>
                                                In principe gebeurt er geen systematische verwerking van
                                                persoonsgegevens van kinderen onder de door de AVG en de Belgische
                                                wetgever bepaalde leeftijdsgrens.
                                            </p>
                                        </div>
                                        <div class="vl-column-next vl-column-next--12 vl-column-next--m-12">
                                            <vl-title-next type="h4">Beeldmateriaal</vl-title-next>
                                            <p>
                                                Voor opname en gebruik (publicatie) van beeldmateriaal zoals foto of
                                                film, wordt gevraagd om toestemming als de geportretteerden duidelijk
                                                individueel herkenbaar zijn.
                                            </p>
                                        </div>
                                        <div class="vl-column-next vl-column-next--12 vl-column-next--m-12">
                                            <vl-title-next type="h4"
                                                >Mededeling van persoonsgegevens aan derde partijen
                                            </vl-title-next>
                                            <vl-typography>
                                                <p>
                                                    Uw gegevens worden hoofdzakelijk intern verwerkt door onze
                                                    medewerkers. Daarnaast worden uw persoonsgegevens doorgegeven aan
                                                    deze categorieën van ontvangers:
                                                </p>
                                                <vl-side-navigation-group-next>
                                                    <vl-side-navigation-item-next>
                                                        verwerkers: voor bepaalde verwerkingen doet het Departement
                                                        Omgeving een beroep op externe dienstverleners, die (een deel
                                                        van) de gegevensverwerking uitvoeren. Deze verwerkers ontvangen
                                                        de persoonsgegevens die ze nodig hebben om die opdrachten uit te
                                                        voeren, en kunnen deze enkel gebruiken binnen de voorwaarden die
                                                        het Departement bepaalt. Zij mogen je persoonsgegevens dus niet
                                                        niet hergebruiken voor hun eigen doeleinden, en moeten ze
                                                        verwijderen of terugzenden bij het einde van hun opdracht.
                                                    </vl-side-navigation-item-next>
                                                    <vl-side-navigation-item-next>
                                                        sociale media: het Departement Omgeving is aanwezig op sociale
                                                        media. De informatie die via onze pagina's bij sociale media
                                                        gedeeld wordt, is niet exclusief binnen het beheer van het
                                                        Departement. Ook de aanbieders van de sociale media hebben daar
                                                        toegang toe, en bepalen zelf hoe ze die informatie gebruiken. We
                                                        raden je aan om dus ook de gebruiksvoorwaarden en het
                                                        privacybeleid van deze sociale media te lezen.
                                                    </vl-side-navigation-item-next>
                                                    <vl-side-navigation-item-next>
                                                        andere overheden: het Departement Omgeving geeft
                                                        persoonsgegevens door aan andere overheden, wanneer daar een
                                                        rechtmatige basis voor bestaat. Dat kan een wettelijke
                                                        verplichting zijn, of een hergebruik van verzamelde
                                                        persoonsgegevens voor doeleinden die niet onverenigbaar zijn met
                                                        de oorspronkelijke verzameling. Welke persoonsgegevens precies
                                                        worden doorgegeven, wordt bepaald in een protocol, dat publiek
                                                        beschikbaar is.
                                                    </vl-side-navigation-item-next>
                                                </vl-side-navigation-group-next>
                                                <p>
                                                    Indien er bepaalde persoonsgegevens worden overgemaakt aan of
                                                    bekomen van andere entiteiten, overheden of derde partijen, dan
                                                    gebeurt dit onder daarvoor bekomen machtigingen of afgesloten
                                                    protocollen. Deze documenten zijn gepubliceerd op deze pagina.
                                                </p>
                                            </vl-typography>
                                        </div>
                                    </div>
                                </div>
                                <div class="vl-column-next vl-column-next--12 vl-column-next--m-12">
                                    <vl-title-next type="h3" id="privacy-declaration-measures">
                                        Maatregelen in het kader van de Algemene verordening Gegevensbescherming
                                    </vl-title-next>
                                    <div class="vl-grid-next vl-stacked-next-medium">
                                        <div class="vl-column-next vl-column-next--12 vl-column-next--m-12">
                                            <vl-title-next type="h4">Register van gegevensverwerkingen</vl-title-next>
                                            <vl-typography>
                                                <p>
                                                    Er wordt, in overeenstemming met de vereisten van de Algemene
                                                    Verordening Gegevensbescherming, een register van
                                                    gegevensverwerkingen opgesteld. Dit wordt geactualiseerd indien zich
                                                    wijzigingen aandienen. Een dergelijk register (inventaris) voor de
                                                    verwerking van persoonsgegevens is verplicht en kan worden
                                                    opgevraagd door de Vlaamse Toezichtscommissie (VTC). Elke
                                                    organisatie die persoonsgegevens verwerkt en gevat is door de
                                                    Algemene Verordening Gegevensbescherming is verplicht aan de Vlaamse
                                                    Toezichtscommissie inzage in het register te geven.
                                                </p>
                                                <p>
                                                    Voor die verwerkingen waarbij het Departement Omgeving optreedt als
                                                    <strong>verantwoordelijke</strong> voor de verwerking van gegevens
                                                    bevat het register de volgende informatie:
                                                </p>
                                                <vl-side-navigation-group-next>
                                                    <vl-side-navigation-item-next>
                                                        de naam en contactgegevens van verantwoordelijke (of diens
                                                        vertegenwoordiger, wanneer de verantwoordelijke buiten de
                                                        Europese Unie is gevestigd), en van de functionaris voor
                                                        gegevensbescherming of FG – de Data Protection Officer (DPO).
                                                    </vl-side-navigation-item-next>
                                                    <vl-side-navigation-item-next
                                                        >de doeleinden waarvoor gegevens worden verwerkt;
                                                    </vl-side-navigation-item-next>
                                                    <vl-side-navigation-item-next>
                                                        de categorieën gegevens (bijvoorbeeld Rijksregistergegevens,
                                                        contactgegevens, betaalgegevens …);
                                                    </vl-side-navigation-item-next>
                                                    <vl-side-navigation-item-next>
                                                        de categorieën betrokkenen (bijvoorbeeld: klanten,
                                                        websitebezoekers, werknemers …);
                                                    </vl-side-navigation-item-next>
                                                    <vl-side-navigation-item-next>
                                                        de categorieën ontvangers (aan wie worden de gegevens
                                                        verstrekt?);
                                                    </vl-side-navigation-item-next>
                                                    <vl-side-navigation-item-next>
                                                        informatie over eventuele doorgifte van gegevens naar landen
                                                        buiten de Europese Unie;
                                                    </vl-side-navigation-item-next>
                                                    <vl-side-navigation-item-next>
                                                        de bewaartermijnen en gebeurlijk termijnen voor vernietiging van
                                                        de gegevens;
                                                    </vl-side-navigation-item-next>
                                                    <vl-side-navigation-item-next>
                                                        de manieren waarop gegevens zijn beveiligd (bijvoorbeeld:
                                                        encryptie, logische toegangscontrole, pseudonimisering,
                                                        anonimisering in geval van bepaalde verdere verwerkingen, …).
                                                    </vl-side-navigation-item-next>
                                                </vl-side-navigation-group-next>
                                                <p>
                                                    Voor die verwerkingen waarvoor het Departement Omgeving optreedt als
                                                    <strong>verwerker</strong> is het register bevat het register per
                                                    verantwoordelijke de volgende informatie:
                                                </p>
                                                <vl-side-navigation-group-next>
                                                    <vl-side-navigation-item-next>
                                                        de naam en contactgegevens van de verwerker en de
                                                        verantwoordelijke (of hun vertegenwoordigers) en (indien
                                                        voorzien) de functionaris voor gegevensbescherming;
                                                    </vl-side-navigation-item-next>
                                                    <vl-side-navigation-item-next>
                                                        de categorieën verwerkingen (dit komt overeen met de doeleinden
                                                        uit het register van de verantwoordelijke);
                                                    </vl-side-navigation-item-next>
                                                    <vl-side-navigation-item-next>
                                                        informatie over eventueel doorgifte van gegevens naar landen
                                                        buiten de Europese Unie;
                                                    </vl-side-navigation-item-next>
                                                    <vl-side-navigation-item-next
                                                        >de manieren waarop gegevens zijn beveiligd.
                                                    </vl-side-navigation-item-next>
                                                </vl-side-navigation-group-next>
                                                <p>
                                                    Het Departement Omgeving spant zich in om de verwerkingsactiviteiten
                                                    van de processen binnen haar afdelingen en diensten in kaart te
                                                    brengen en deze inventarisatie (verwerkt in het register van
                                                    verwerkingsactiviteiten) wordt op permanente basis geoptimaliseerd
                                                    en geactualiseerd.
                                                </p>
                                            </vl-typography>
                                        </div>

                                        <div class="vl-column-next vl-column-next--12 vl-column-next--m-12">
                                            <vl-title-next type="h4">
                                                Toe te passen principes vereist door de Algemene Verordening
                                                Gegevensbescherming
                                            </vl-title-next>

                                            <div class="vl-grid-next vl-stacked-next-medium">
                                                <div class="vl-column-next vl-column-next--12 vl-column-next--m-12">
                                                    <p>
                                                        Het risico voor een privacyschending of het niet kunnen
                                                        garanderen van de rechten van u als betrokkene wordt mee in
                                                        kaart gebracht en voor die activiteiten die een verhoogd
                                                        risicoprofiel hebben inzake bescherming van de privacy wordt een
                                                        gegevensbeschermingseffectbeoordeling (GEB) uitgevoerd. Ook de
                                                        andere principes van de AVG zoals gegevensbescherming door
                                                        ontwerp en met standaardinstellingen, incidentbeheer voor
                                                        informatieveiligheids- en privacy-incidenten met procedure voor
                                                        melding en aanpak van gegevenslek en gegevensverlies worden
                                                        meegenomen in de aanpak van het Departement Omgeving inzake
                                                        privacybescherming.
                                                    </p>
                                                </div>
                                                <div class="vl-column-next vl-column-next--12 vl-column-next--m-12">
                                                    <vl-typography>
                                                        <p>
                                                            Het Departement Omgeving voorziet in de nodige maatregelen
                                                            om persoonsgegevens en privacy te beschermen, zowel in
                                                            fysieke vorm, in de informatiesystemen en online. Het
                                                            Departement Omgeving draagt zorg hiervoor door passende
                                                            organisatorische en technische maatregelen te treffen om
                                                            persoonsgegevens te beveiligen en ongeoorloofde toegang tot
                                                            en gebruik van informatie te vermijden, zoals een degelijk
                                                            paswoordbeleid, gebruik van SSL-certificaten op websites
                                                            (https secured filetransfer), kwalitatieve firewalls,
                                                            antivirus/antimalware en intrusie- en anomaliedetectie.
                                                        </p>
                                                        <p>
                                                            Aan de medewerkers van het Departement Omgeving wordt
                                                            toegang tot persoonlijke informatie verleend enkel voor
                                                            zover ze die specifieke informatie nodig hebben om hun taken
                                                            en dienstverlening naar behoren uit te voeren. De betrokken
                                                            werknemers kregen in hun opleiding instructies om correct om
                                                            te gaan met vertrouwelijke gegevens. Ambts- en beroepsgeheim
                                                            met betrekking tot behandeling van persoonsgegevens zijn
                                                            volledig van toepassing.
                                                        </p>
                                                        <p>
                                                            De gegevens worden opgeslagen en verwerkt op eigen,
                                                            beveiligde informaticaomgevingen en datacenters van het
                                                            Departement Omgeving of in de beveiligde omgeving van
                                                            verwerkers in opdracht van en onder toezicht van het
                                                            Departement Omgeving.
                                                        </p>
                                                    </vl-typography>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="vl-column-next vl-column-next--12 vl-column-next--m-12">
                                    <vl-title-next type="h3" id="privacy-declaration-rights"
                                        >Uw rechten als betrokkene
                                    </vl-title-next>
                                    <div class="vl-grid-next vl-stacked-next-medium">
                                        <div class="vl-column-next vl-column-next--12 vl-column-next--m-12">
                                            <vl-typography>
                                                <p>
                                                    De Algemene Verordening Gegevensbescherming voorziet in een aantal
                                                    privacy-rechten, waarop u als ‘betrokkene’ (dit is: natuurlijk
                                                    persoon) beroep op kunt doen. Dit uiteraard rekening houdend met de
                                                    privacyrechten van andere personen en met wettelijke bepalingen en
                                                    beperkingen.
                                                </p>
                                                <p>
                                                    Als betrokkene in de zin zoals bepaald in de Algemene Verordening
                                                    Gegevensbescherming beschikt u over volgende rechten die samengevat
                                                    kunnen worden in “het recht op een correcte, legitieme verwerking
                                                    van uw persoonsgegevens”:
                                                </p>
                                                <vl-side-navigation-group-next>
                                                    <vl-side-navigation-item-next>
                                                        Recht van inzage van de met betrekking tot u verwerkte gegevens
                                                        (AVG art. 15)
                                                    </vl-side-navigation-item-next>
                                                    <vl-side-navigation-item-next>
                                                        Recht op rectificatie, of recht op correctie van fouten (AVG
                                                        art. 16)
                                                    </vl-side-navigation-item-next>
                                                    <vl-side-navigation-item-next>
                                                        Recht op gegevenswissing (officieel "recht op vergetelheid" of
                                                        ook genoemd “het recht om vergeten te worden”); dit recht is
                                                        toepasbaar in bepaalde gevallen en met name als wij gegevens van
                                                        u verwerken op basis van een geïnformeerde toestemming waarbij
                                                        wij geen wettelijke of andere wettelijke basis kunnen inroepen
                                                        voor verdere verwerking inbegrepen bewaring ervan (AVG art. 17);
                                                    </vl-side-navigation-item-next>
                                                    <vl-side-navigation-item-next
                                                        >Recht op beperking van verwerking (AVG art. 18);
                                                    </vl-side-navigation-item-next>
                                                    <vl-side-navigation-item-next>
                                                        Notificatie van rechtzetting, van uitwissing of van beperking
                                                        van verwerking (AVG art. 19);
                                                    </vl-side-navigation-item-next>
                                                    <vl-side-navigation-item-next>
                                                        Recht op overdraagbaarheid van persoonsgegevens (AVG art. 20);
                                                    </vl-side-navigation-item-next>
                                                    <vl-side-navigation-item-next>
                                                        Recht van bezwaar/verzet tegen verwerking van uw gegevens (AVG
                                                        art. 21);
                                                    </vl-side-navigation-item-next>
                                                    <vl-side-navigation-item-next>
                                                        Rechten met betrekking tot individuele besluitvorming, inclusief
                                                        profilering (AVG art. 22).
                                                    </vl-side-navigation-item-next>
                                                </vl-side-navigation-group-next>
                                            </vl-typography>
                                        </div>
                                        <div class="vl-column-next vl-column-next--12 vl-column-next--m-12">
                                            <vl-title-next type="h4"
                                                >Recht op inzage, verbetering of verwijdering
                                            </vl-title-next>
                                            <vl-typography>
                                                <p>
                                                    Voor de verwerkingen van persoonsgegevens waarbij het Departement
                                                    Omgeving optreedt als de Verwerkingsverantwoordelijke voor de
                                                    gegevensverwerkingen in de zin van de Algemene Verordening
                                                    Gegevensbescherming, kunnen betrokkenen een verzoeken om inzage,
                                                    correctie of verwijdering indienen en zal het Departement Omgeving
                                                    deze behandelen conform de bepalingen die zijn voorgeschreven door
                                                    de Algemene Verordening Gegevensbescherming, rekening houdend met de
                                                    beperkingen voorzien in Art. 23 van de AVG.
                                                </p>
                                                <p>
                                                    Voor de verwerkingen van persoonsgegevens waarbij het Departement
                                                    Omgeving niet als de Verwerkingsverantwoordelijke voor de
                                                    gegevensverwerkingen optreedt in de zin van de Algemene Verordening
                                                    Gegevensbescherming, kunnen verzoeken om inzage, correctie of
                                                    verwijdering niet door het Departement Omgeving zelfstandig worden
                                                    afgehandeld. In dat geval moeten verzoeken om inzage, correctie of
                                                    verwijdering worden ingediend bij de Verwerkingsverantwoordelijke
                                                    voor de gegevensverwerkingen die gebruik maken van de diensten en
                                                    verwerking met /door de informatiesystemen van het Departement
                                                    Omgeving.
                                                </p>
                                                <p>
                                                    Voor meer informatie over de wijze waarop persoonsgegevens worden
                                                    verwerkt binnen het werkingsdomein van het Departement Omgeving of
                                                    het uitoefenen van een recht in het kader van de Algemene
                                                    Verordening Gegevensbescherming kunt u contact opnemen met de Data
                                                    Protection Officer) van het Departement Omgeving (DPO) waarvan de
                                                    contactgegevens onderaan deze pagina terug te vinden zijn.
                                                </p>
                                                <p>
                                                    Daarnaast hebt u het recht om klacht in te dienen bij de Vlaamse
                                                    Toezichtscommissie (VTC), indien u meent dat uw rechten geschaad
                                                    zijn en u zich ook na vraagstelling bij de bevoegde diensten van het
                                                    Departement Omgeving of de door het Departement Omgeving aangestelde
                                                    Functionaris voor gegevensbescherming (DPO) niet voldoende in uw
                                                    rechten erkend weet.
                                                </p>
                                            </vl-typography>
                                        </div>
                                    </div>
                                </div>
                                <div class="vl-column-next vl-column-next--12 vl-column-next--m-12">
                                    <vl-title-next type="h3" id="privacy-declaration-aplpy">
                                        Toepassing van deze Privacyverklaring
                                    </vl-title-next>
                                    <vl-typography>
                                        <p>
                                            Deze versie van de Privacyverklaring van het Departement Omgeving is van
                                            toepassing vanaf 25 mei 2018.
                                        </p>
                                        <p>
                                            Als de doelstellingen wijzigen waarvoor verwerking van persoonsgegevens
                                            gebeurt, zal het Departement Omgeving dit publiek melden en hiervan op
                                            transparante wijze mededeling doen in nieuwsbrieven, op de website
                                            <a href="www.omgevingvlaanderen.be" target="_blank"
                                                >www.omgevingvlaanderen.be</a
                                            >
                                            en via andere mediakanalen waarvan het Departement Omgeving gebruik maakt.
                                        </p>
                                        <p>
                                            Het Departement Omgeving behoudt zich het recht voor om de privacyverklaring
                                            aan te passen aan nieuwe noden of inzichten. Er zal van wijzigingen aan de
                                            Privacyverklaring transparant melding gemaakt worden op de hoofdwebsite van
                                            het Departement Omgeving (<a
                                                href="www.omgevingvlaanderen.be"
                                                target="_blank"
                                                >www.omgevingvlaanderen.be</a
                                            >) alsook op de papieren versie die op eenvoudige aanvraag verkrijgbaar is
                                            bij de Dienst Communicatie van het Departement Omgeving en via de
                                            Functionaris voor gegevensbescherming (Data Protection Officer) van het
                                            Departement Omgeving.
                                        </p>
                                        <p>
                                            Bij vragen over de Privacyverklaring of de aanpassingen eraan, kunt u
                                            terecht bij de Data Protection Officer waarvan u de contactgegevens
                                            terugvindt via de knop 'Hulp nodig?'.
                                        </p>
                                    </vl-typography>
                                </div>
                            </div>
                        </div>
                        <div class="vl-column-next vl-column-next--12 vl-column-next--m-12">
                            <vl-title-next type="h2" id="privacy-permissions-protocols"
                                >Machtigingen en protocollen
                            </vl-title-next>
                            <div class="vl-grid-next vl-stacked-next-medium">
                                <div class="vl-column-next vl-column-next--12 vl-column-next--m-12">
                                    <vl-title-next type="h3" id="privacy-permissions-protocols-process">
                                        Machtigingen van de bevoegde autoriteiten en afgesloten protocollen voor het
                                        verwerken van bepaalde gegevens
                                    </vl-title-next>
                                    <div class="vl-grid-next vl-stacked-next-medium">
                                        <div class="vl-column-next vl-column-next--12 vl-column-next--m-12">
                                            <vl-typography>
                                                <p>
                                                    Het Departement Omgeving of de overheidsinstanties waarvoor zij
                                                    handelt als opvolger hebben voor een aantal verwerkingen van
                                                    persoonsgegevens en/of gegevensoverdracht machtiging bekomen van
                                                    Sectorale comités binnen de schoot van de Privacycommissie (CPBL),
                                                    hun opvolgers IVC en de dienst Toegang tot het Rijksregister, of van
                                                    de Vlaamse Toezichtcommissie (VTC). De lijst met toelichting en
                                                    referentie naar het machtigingsbesluit in kwestie wordt verder in
                                                    deze pagina beschikbaar gesteld.
                                                </p>
                                                <p>
                                                    Voor gegevensoverdrachten tussen overheden die beiden als
                                                    verwerkingsverantwoordelijke optreden, sluit het Departement
                                                    Omgeving een protocol af. Volgens de bepalingen van art. 18 van het
                                                    Bestuursdecreet, worden deze protocollen gepubliceerd. U vindt alle
                                                    protocollen waarbij het Departement Omgeving partij is, hieronder.
                                                </p>
                                            </vl-typography>
                                        </div>
                                        <div
                                            class="vl-column-next vl-column-next--4 vl-column-next--m-6"
                                            data-vl-medium-size="6"
                                        >
                                            <vl-document
                                                data-vl-href="https://cdn.milieuinfo.be/footer-assets/LATEST/docx/privacybeleid-v0.2.docx"
                                            >
                                                <span slot="type">DOCX</span>
                                                <span slot="title">Lijst van aangiften en machtigingen</span>
                                                <span slot="metadata">DOCX - 43 kB</span>
                                            </vl-document>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </vl-side-navigation-reference-next>
            </div>
            <div class="vl-column-next vl-column-next--4 vl-column-next--m-4 vl-column-next--s-4 vl-column-next--xs-0">
                <vl-side-navigation-next id="side-nav-privacy-content" aria-label="inhoudsopgave">
                    <vl-side-navigation-h1-next>Op deze pagina</vl-side-navigation-h1-next>
                    <vl-side-navigation-content-next>
                        <vl-side-navigation-group-next>
                            <vl-side-navigation-item-next parent>
                                <vl-side-navigation-toggle-next href="#privacy-department">
                                    Het Departement Omgeving en uw privacy
                                </vl-side-navigation-toggle-next>
                            </vl-side-navigation-item-next>
                            <vl-side-navigation-item-next parent="privacy-declaration">
                                <vl-side-navigation-toggle-next href="#privacy-declaration" child="privacy-declaration">
                                    Privacyverklaring
                                </vl-side-navigation-toggle-next>
                                <ul>
                                    <vl-side-navigation-item-next>
                                        <div>
                                            <a href="#privacy-declaration-who" parent="privacy-declaration">
                                                Wie is verantwoordelijk voor de verwerking van mijn persoonsgegevens?
                                            </a>
                                        </div>
                                    </vl-side-navigation-item-next>
                                    <vl-side-navigation-item-next>
                                        <div>
                                            <a href="#privacy-declaration-process" parent="privacy-declaration">
                                                Verwerking van persoonsgegevens
                                            </a>
                                        </div>
                                    </vl-side-navigation-item-next>
                                    <vl-side-navigation-item-next>
                                        <div>
                                            <a href="#privacy-declaration-measures" parent="privacy-declaration">
                                                Maatregelen in het kader van de Algemene verordening Gegevensbescherming
                                            </a>
                                        </div>
                                    </vl-side-navigation-item-next>
                                    <vl-side-navigation-item-next>
                                        <div>
                                            <a href="#privacy-declaration-rights" parent="privacy-declaration">
                                                Uw rechten als betrokkene
                                            </a>
                                        </div>
                                    </vl-side-navigation-item-next>
                                    <vl-side-navigation-item-next>
                                        <div>
                                            <a href="#privacy-declaration-aplpy" parent="privacy-declaration">
                                                Toepassing van deze Privacyverklaring
                                            </a>
                                        </div>
                                    </vl-side-navigation-item-next>
                                </ul>
                            </vl-side-navigation-item-next>
                            <vl-side-navigation-item-next parent>
                                <vl-side-navigation-toggle-next href="#privacy-permissions-protocols">
                                    Machtigingen en protocollen
                                </vl-side-navigation-toggle-next>
                                <ul>
                                    <vl-side-navigation-item-next>
                                        <div>
                                            <a
                                                href="#privacy-permissions-protocols-process"
                                                parent="privacy-permissions-protocols"
                                            >
                                                Machtigingen van de bevoegde autoriteiten en afgesloten protocollen voor
                                                het verwerken van bepaalde gegevens
                                            </a>
                                        </div>
                                    </vl-side-navigation-item-next>
                                </ul>
                            </vl-side-navigation-item-next>
                        </vl-side-navigation-group-next>
                    </vl-side-navigation-content-next>
                </vl-side-navigation-next>
            </div>
        </div>
    </div>
`,u=()=>[r.a7],b=({disableBackLink:e,hideBackLink:n})=>(0,g.qy)`
    <vl-functional-header
        data-vl-title="Departement Omgeving"
        data-vl-sub-title="Privacy"
        data-vl-link="https://omgeving.vlaanderen.be"
        ?data-vl-disable-back-link=${e}
        ?data-vl-hide-back-link=${n}
    ></vl-functional-header>
`,k=(e,n)=>(0,c.qy)`
    <div class="vl-content-block-next">
        <div class="vl-grid-next">
            <div class="vl-column-next vl-column-next--10">
                <vl-title-next type="h1" no-space-bottom>Privacy</vl-title-next>
            </div>
            <div class="vl-column-next vl-column-next--10">
                <vl-paragraph-next introduction>
                    <span>Versie</span>
                    <span id="introduction-version">${e}</span> -
                    <span id="introduction-date">${n}</span>
                </vl-paragraph-next>
            </div>
            <div class="vl-column-next vl-column-next--12 vl-column-next--m-12">
                <vl-typography>
                    <hr />
                </vl-typography>
            </div>
        </div>
    </div>
`;var x=t("../../libs/sections/src/privacy/vl-privacy.defaults.ts");class w extends i.jW{static{(0,i.gy)([r.Y4,r.FQ,r.Pq,r.Ic,s.I,v.N8,l.L,o.Q,...u()])}static get styles(){return[d.hF,a.B2,a.DE,a.as,a.Ei]}static get properties(){return{date:{type:String,attribute:"data-vl-date"},disableBackLink:{type:Boolean,attribute:"data-vl-disable-back-link"},hideBackLink:{type:Boolean,attribute:"data-vl-hide-back-link"},version:{type:String,attribute:"data-vl-version"}}}constructor(){super(),this.date=x.z.date,this.version=x.z.version,this.disableBackLink=x.z.disableBackLink,this.hideBackLink=x.z.hideBackLink,this.allowCustomCSS=!1}render(){return(0,g.qy)`
            <slot name="header"
                >${b({disableBackLink:this.disableBackLink,hideBackLink:this.hideBackLink})}
            </slot>
            <section class="vl-section-next">
                <slot name="version"> ${k(this.version,this.date)}</slot>
            </section>
            <section id="content" class="vl-section-next">
                <slot name="content" @slotchange=${this.handleContentSlotChanged}> ${h()}</slot>
            </section>
            <section class="vl-section-next vl-section-next--overlap">
                <slot name="bottom"> ${p()}</slot>
            </section>
        `}handleContentSlotChanged(e){let n=this.shadowRoot.querySelector("#content"),t=this.querySelector('[slot="content"]');n&&t&&(n.textContent="",n.appendChild(t))}}w=function(e,n,t,i){var a,r=arguments.length,o=r<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,n,t,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(n,t,o):a(n,t))||o);return r>3&&o&&Object.defineProperty(n,t,o),o}([(0,m.EM)("vl-privacy")],w)}}]);