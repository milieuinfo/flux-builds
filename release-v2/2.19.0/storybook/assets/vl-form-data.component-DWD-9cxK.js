import{br as H,d1 as ee,i as v,x as n,w as i,r as d,V as m,b as c,c as u,d as f,R as D,aR as p,v as g,z as b,T as O,a$ as le,Q as te,B as oe}from"./iframe-CY-ZM549.js";import{V as K}from"./vl-checkbox.component-BDn7ePcW.js";import{V as E}from"./vl-datepicker.component-YU9BW_0B.js";import"./vl-fieldset.component-Bc3AJnIk.js";import{V as N}from"./vl-input-field-masked.component-CpP3801C.js";import{V as re}from"./vl-radio.component-D19T2Xu3.js";import{V as ae}from"./vl-radio-group.component-DrOqLcWw.js";import{V}from"./vl-select.component-BFzkdhOR.js";import{V as M}from"./vl-select-rich.component-Ce4rMkaH.js";import{V as se}from"./vl-textarea.component-C2i5Nva7.js";import{V as ne}from"./vl-textarea-rich.component-C1bved6Z.js";import{V as W}from"./vl-upload.component-CRjn2qhr.js";const h=(e,l)=>{if(!e)return null;const r=new FormData(e),o=Array.from(e.elements).filter(s=>!(s instanceof HTMLInputElement&&s.type==="radio")&&s.hasAttribute("name")).map(s=>s.getAttribute("name")).filter((s,k,X)=>X.indexOf(s)!==k),t=Array.from(e.elements).filter(s=>s.hasAttribute("multiple")).map(s=>s.getAttribute("name")),a=Array.from(new Set([...o,...t]));return Array.from(r.keys()).reduce((s,k)=>({...s,[k]:a.includes(k)?r.getAll(k):r.get(k)}),{})},ie=(e,l)=>{e&&Object.entries(l).forEach(([r,o])=>{const t=e.elements.namedItem(r);t&&(t instanceof HTMLInputElement&&t.type==="checkbox"?J(t,o):t instanceof HTMLInputElement&&t.type==="file"?ve(t,o):t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement?t.value=o:t instanceof RadioNodeList?de(t,o):t instanceof HTMLInputElement?t.value=o:t instanceof H&&me(t,o))})},me=(e,l)=>{if(e.validationTarget instanceof HTMLSelectElement)ce(e,l);else if(e.validationTarget instanceof HTMLInputElement&&e.validationTarget.type==="checkbox")J(e,l);else if(e.validationTarget instanceof HTMLInputElement&&e.validationTarget.type==="file"){const r=e;r.removeAllFiles(),Array.isArray(l)?l.forEach(o=>o instanceof File&&r.addFile(o)):l instanceof File&&r.addFile(l)}else e.setAttribute("value",l)},ve=(e,l)=>{const r=new DataTransfer;Array.isArray(l)?(l.forEach(o=>{r.items.add(o)}),e.files=r.files):l instanceof File&&(r.items.add(l),e.files=r.files)},de=(e,l)=>{Array.from(e).forEach(r=>{if(r instanceof HTMLInputElement){const o=Array.isArray(l)?l.includes(r.value):r.value===l;r.type==="radio"&&o?r.checked=!0:r.type==="checkbox"&&((Array.isArray(l)?l.includes(r.value):r.value===l)?r.setAttribute("checked",""):r.removeAttribute("checked"))}else if(r instanceof H&&r.validationTarget instanceof HTMLInputElement){if(r.validationTarget.type==="radio")r.getAttribute("value")===l&&r.setAttribute("checked","");else if(r.validationTarget.type==="checkbox"){const o=r;Array.isArray(l)&&r.validationTarget&&(l.some(t=>F(o,t))?o.setAttribute("checked",""):o.removeAttribute("checked"))}}})},ce=(e,l)=>{e instanceof M?e.setSelectedValues(l):e.setAttribute("value",l)},F=(e,l)=>typeof l=="string"&&l&&l===(e.getAttribute("value")||"on"),J=(e,l)=>{Array.isArray(l)?l.some(r=>F(e,r))?e.setAttribute("checked",""):e.removeAttribute("checked"):F(e,l)||typeof l=="boolean"&&l?e.setAttribute("checked",""):typeof l=="boolean"&&!l&&e.removeAttribute("checked")},_=e=>{class l extends e{constructor(){super(...arguments),this.lastFormValue=null,this.dependencyForm=null,this.onDependencyChange=o=>{const t=o.target;t&&this.dependencySelectors.some(a=>t.matches(a))&&(this.setValue(this.lastFormValue),this.revalidate())}}formAssociatedCallback(o){super.formAssociatedCallback(o),this.dependencyForm!==o&&(this.dependencyForm?.removeEventListener("vl-change",this.onDependencyChange),this.dependencyForm=o,o&&this.dependencySelectors.length>0&&o.addEventListener("vl-change",this.onDependencyChange))}disconnectedCallback(){super.disconnectedCallback(),this.dependencyForm?.removeEventListener("vl-change",this.onDependencyChange),this.dependencyForm=null}setValue(o){this.lastFormValue=o,super.setValue(o)}get retainsValidationState(){return super.retainsValidationState||this.dependencySelectors.length>0}get dependencySelectors(){if(this.cachedDependencySelectors===void 0){const o=this.constructor.formControlValidators??[];this.cachedDependencySelectors=o.flatMap(t=>t.dependencySelectors??[])}return this.cachedDependencySelectors}}return l};var ue=Object.getOwnPropertyDescriptor,fe=(e,l,r,o)=>{for(var t=o>1?void 0:o?ue(l,r):l,a=e.length-1,s;a>=0;a--)(s=e[a])&&(t=s(t)||t);return t};let y=class extends ee{static get styles(){return[v`
                fieldset {
                    border: 0;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    gap: 0.5rem;
                    align-items: center;
                }

                .vl-u-visually-hidden {
                    position: absolute !important;
                    height: 1px;
                    width: 1px;
                    overflow: hidden;
                    clip: rect(1px, 1px, 1px, 1px);
                    margin: -1px;
                    padding: 0;
                    border: 0;
                    left: 0;
                    top: 0;
                }
            `]}render(){return n`
            <fieldset part="fieldset">
                <legend class="vl-u-visually-hidden">${this.label||"Samengesteld invoerveld"}</legend>
                <slot @slotchange=${this.onSlotChange}></slot>
            </fieldset>
        `}};y=fe([i("vl-composite-input")],y);var ge=Object.getOwnPropertyDescriptor,pe=(e,l,r,o)=>{for(var t=o>1?void 0:o?ge(l,r):l,a=e.length-1,s;a>=0;a--)(s=e[a])&&(t=s(t)||t);return t};const be=({"coordinaten-lon":e,"coordinaten-lat":l})=>{const r=parseFloat(e),o=parseFloat(l);return r<2.5||r>6.5||o<49.5||o>51.6?`(lon=${e}, lat=${l}) ligt buiten België`:null};let A=class extends p{constructor(){super(...arguments),this.parsedFormData=null}static get properties(){return{parsedFormData:{type:Object,state:!0}}}static get styles(){return[g,b,v`
                form {
                    margin-top: 1rem;
                    max-width: 800px;
                }

                .form-buttons {
                    vl-button:not(:last-child) {
                        margin-right: 1.4rem;
                    }
                }

                pre {
                    font-size: 1rem;
                }
            `]}render(){return n`
            <form class="vl-form" @submit=${this.onSubmit} @reset=${this.onReset}>
                <div class="vl-grid">
                    <div class="vl-column vl-column--4">
                        <vl-form-label for="coordinaten" label="Coördinaten (lon, lat) *" block></vl-form-label>
                    </div>
                    <div class="vl-column vl-column--8">
                        <!-- De composite heeft geen name: ze dient zelf geen waarde in, ze valideert de velden samen.
                             Haar id gebruik je in vl-form-label[for] en in de meldingen voor het samengestelde veld.
                             required betekent hier dat alle velden ingevuld moeten zijn. -->
                        <vl-composite-input
                            id="coordinaten"
                            label="Coördinaten (lon, lat)"
                            required
                            .customValidator=${be}
                        >
                            <!-- Een veld is een direct kind met een value en een name. Die name is de sleutel in de
                                 FormData en in de validator hierboven; het id gebruik je enkel om er een eigen
                                 vl-form-message aan te koppelen. Veldspecifieke constraints (hier min/max) zet je
                                 op het kind, niet op de composite. -->
                            <vl-input-field
                                id="lon"
                                name="coordinaten-lon"
                                label="Longitude"
                                type="number"
                                min="-180"
                                max="180"
                            ></vl-input-field>
                            <vl-input-field
                                id="lat"
                                name="coordinaten-lat"
                                label="Latitude"
                                type="number"
                                min="-90"
                                max="90"
                            ></vl-input-field>
                        </vl-composite-input>
                        <vl-text annotation small
                            >Vul de longitude en latitude in graden in (bv. Brussel: 4,35 en 50,85). Enkel punten
                            binnen België zijn geldig.</vl-text
                        >
                        <!-- De meldingen voor het samengestelde veld hangen aan de composite. Laat je ze leeg, dan
                             vult de composite ze zelf in: valueMissing met een opsomming van de nog lege velden (op
                             basis van hun label), customError met de string uit de validator. Eigen tekst wint. -->
                        <vl-form-message for="coordinaten" state="valueMissing"></vl-form-message>
                        <vl-form-message for="coordinaten" state="customError"></vl-form-message>
                        <!-- Een melding per veld verwijst naar het id van dat kind, met eigen tekst per staat. -->
                        <vl-form-message for="lon" state="rangeUnderflow"
                            >Longitude moet minstens -180 zijn.</vl-form-message
                        >
                        <vl-form-message for="lon" state="rangeOverflow"
                            >Longitude mag maximaal 180 zijn.</vl-form-message
                        >
                        <vl-form-message for="lat" state="rangeUnderflow"
                            >Latitude moet minstens -90 zijn.</vl-form-message
                        >
                        <vl-form-message for="lat" state="rangeOverflow"
                            >Latitude mag maximaal 90 zijn.</vl-form-message
                        >
                    </div>
                    <div class="vl-column vl-column--8 vl-column--start-5">
                        <div class="form-buttons">
                            <vl-button type="submit">Verstuur</vl-button>
                            <vl-button type="reset" secondary>Reset</vl-button>
                        </div>
                    </div>
                    ${this.parsedFormData?n`
                              <div class="vl-column vl-column--4">
                                  <vl-form-label class="vl-form__label">Formulier data</vl-form-label>
                              </div>
                              <div class="vl-column vl-column--8">
                                  <pre>${JSON.stringify(this.parsedFormData,null,4)}</pre>
                              </div>
                          `:""}
                </div>
            </form>
        `}onSubmit(e){e.preventDefault(),this.parsedFormData=h(e.target)}onReset(){this.parsedFormData=null}};d([y,m,c,u,f,D]);A=pe([i("vl-form-composite-input")],A);var he=Object.getOwnPropertyDescriptor,ke=(e,l,r,o)=>{for(var t=o>1?void 0:o?he(l,r):l,a=e.length-1,s;a>=0;a--)(s=e[a])&&(t=s(t)||t);return t};const ye=[{value:"cm",label:"centimeter (cm)"},{value:"dm",label:"decimeter (dm)"},{value:"m",label:"meter (m)"}],De={cm:.01,dm:.1,m:1},j=.01,S=100,Ve=({"lengte-waarde":e,"lengte-eenheid":l})=>{const r=De[l],o=parseFloat(e);if(!r||Number.isNaN(o))return null;const t=o*r;return t<j||t>S?`${e} ${l} is ${t.toFixed(2)} m; de lengte moet tussen ${j} m en ${S} m liggen.`:null};let z=class extends p{constructor(){super(...arguments),this.parsedFormData=null}static get properties(){return{parsedFormData:{type:Object,state:!0}}}static get styles(){return[g,b,v`
                form {
                    margin-top: 1rem;
                    max-width: 800px;
                }

                .form-buttons {
                    vl-button:not(:last-child) {
                        margin-right: 1.4rem;
                    }
                }

                pre {
                    font-size: 1rem;
                }
            `]}render(){return n`
            <form class="vl-form" @submit=${this.onSubmit} @reset=${this.onReset}>
                <div class="vl-grid">
                    <div class="vl-column vl-column--4">
                        <vl-form-label for="lengte" label="Lengte *" block></vl-form-label>
                    </div>
                    <div class="vl-column vl-column--8">
                        <vl-composite-input id="lengte" label="Lengte" required .customValidator=${Ve}>
                            <vl-input-field
                                id="waarde"
                                name="lengte-waarde"
                                label="Waarde"
                                type="number"
                                min="0"
                            ></vl-input-field>
                            <vl-select
                                id="eenheid"
                                name="lengte-eenheid"
                                label="Eenheid"
                                placeholder="Kies een eenheid"
                                .options=${ye}
                            ></vl-select>
                        </vl-composite-input>
                        <vl-text annotation small
                            >Het getal betekent niets zonder de eenheid: samen vormen ze één lengte. Enkel lengtes
                            tussen ${j} m en ${S} m zijn geldig, dus 5000 cm mag wel en 5000 m
                            niet.</vl-text
                        >
                        <vl-form-message for="lengte" state="valueMissing"
                            >Zowel de waarde als de eenheid zijn verplicht.</vl-form-message
                        >
                        <vl-form-message for="lengte" state="customError"></vl-form-message>
                        <vl-form-message for="waarde" state="rangeUnderflow"
                            >De waarde mag niet negatief zijn.</vl-form-message
                        >
                    </div>
                    <div class="vl-column vl-column--8 vl-column--start-5">
                        <div class="form-buttons">
                            <vl-button type="submit">Verstuur</vl-button>
                            <vl-button type="reset" secondary>Reset</vl-button>
                        </div>
                    </div>
                    ${this.parsedFormData?n`
                              <div class="vl-column vl-column--4">
                                  <vl-form-label class="vl-form__label">Formulier data</vl-form-label>
                              </div>
                              <div class="vl-column vl-column--8">
                                  <pre>${JSON.stringify(this.parsedFormData,null,4)}</pre>
                              </div>
                          `:""}
                </div>
            </form>
        `}onSubmit(e){e.preventDefault(),this.parsedFormData=h(e.target)}onReset(){this.parsedFormData=null}};d([y,m,V,c,u,f,D]);z=ke([i("vl-form-composite-input-eenheid")],z);var we=Object.getOwnPropertyDescriptor,xe=(e,l,r,o)=>{for(var t=o>1?void 0:o?we(l,r):l,a=e.length-1,s;a>=0;a--)(s=e[a])&&(t=s(t)||t);return t};const Ce=({"periode-begin":e,"periode-einde":l})=>{const r=Date.parse(e),o=Date.parse(l);return Number.isNaN(r)||Number.isNaN(o)?null:r>o?"De begindatum ligt na de einddatum.":null};let G=class extends p{constructor(){super(...arguments),this.parsedFormData=null}static get properties(){return{parsedFormData:{type:Object,state:!0}}}static get styles(){return[g,b,v`
                form {
                    margin-top: 1rem;
                    max-width: 800px;
                }

                .form-buttons {
                    vl-button:not(:last-child) {
                        margin-right: 1.4rem;
                    }
                }

                pre {
                    font-size: 1rem;
                }
            `]}render(){return n`
            <form class="vl-form" @submit=${this.onSubmit} @reset=${this.onReset}>
                <div class="vl-grid">
                    <div class="vl-column vl-column--4">
                        <vl-form-label for="periode" label="Periode *" block></vl-form-label>
                    </div>
                    <div class="vl-column vl-column--8">
                        <vl-composite-input
                            id="periode"
                            label="Periode"
                            required
                            .customValidator=${Ce}
                        >
                            <vl-datepicker
                                id="begin"
                                name="periode-begin"
                                label="Begindatum"
                                type="date"
                                format="d-m-Y"
                                anchor-positioning
                            ></vl-datepicker>
                            <vl-datepicker
                                id="einde"
                                name="periode-einde"
                                label="Einddatum"
                                type="date"
                                format="d-m-Y"
                                anchor-positioning
                            ></vl-datepicker>
                        </vl-composite-input>
                        <vl-text annotation small
                            >Kies een begin- en einddatum (dd-mm-jjjj). De begindatum mag niet na de einddatum
                            liggen.</vl-text
                        >
                        <vl-form-message for="periode" state="valueMissing"
                            >Begin- en einddatum zijn verplicht.</vl-form-message
                        >
                        <vl-form-message for="periode" state="customError"></vl-form-message>
                    </div>
                    <div class="vl-column vl-column--8 vl-column--start-5">
                        <div class="form-buttons">
                            <vl-button type="submit">Verstuur</vl-button>
                            <vl-button type="reset" secondary>Reset</vl-button>
                        </div>
                    </div>
                    ${this.parsedFormData?n`
                              <div class="vl-column vl-column--4">
                                  <vl-form-label class="vl-form__label">Formulier data</vl-form-label>
                              </div>
                              <div class="vl-column vl-column--8">
                                  <pre>${JSON.stringify(this.parsedFormData,null,4)}</pre>
                              </div>
                          `:""}
                </div>
            </form>
        `}onSubmit(e){e.preventDefault(),this.parsedFormData=h(e.target)}onReset(){this.parsedFormData=null}};d([y,E,c,u,f,D]);G=xe([i("vl-form-composite-input-datumbereik")],G);var $e=Object.getOwnPropertyDescriptor,Fe=(e,l,r,o)=>{for(var t=o>1?void 0:o?$e(l,r):l,a=e.length-1,s;a>=0;a--)(s=e[a])&&(t=s(t)||t);return t};const je=[{value:"email",label:"E-mail"},{value:"tel",label:"Telefoon"}],Se=/^[^@\s]+@[^@\s]+\.[^@\s]+$/,Ee=/^[\d\s/().+-]{6,}$/,Me=({"contact-method":e,"contact-value":l})=>!e||!l?null:e==="email"?Se.test(l)?null:`'${l}' is geen geldig e-mailadres.`:e==="tel"?Ee.test(l)?null:`'${l}' is geen geldig telefoonnummer.`:null;let R=class extends p{constructor(){super(...arguments),this.method="",this.contact="",this.parsedFormData=null}static get properties(){return{method:{type:String,state:!0},contact:{type:String,state:!0},parsedFormData:{type:Object,state:!0}}}static get styles(){return[g,b,v`
                form {
                    margin-top: 1rem;
                    max-width: 800px;
                }

                .form-buttons {
                    vl-button:not(:last-child) {
                        margin-right: 1.4rem;
                    }
                }

                pre {
                    font-size: 1rem;
                }
            `]}render(){return n`
            <form class="vl-form" @submit=${this.onSubmit} @reset=${this.onReset}>
                <div class="vl-grid">
                    <div class="vl-column vl-column--4">
                        <vl-form-label for="contact" label="Contactgegeven *" block></vl-form-label>
                    </div>
                    <div class="vl-column vl-column--8">
                        <vl-composite-input
                            id="contact"
                            label="Contactgegeven"
                            required
                            .customValidator=${Me}
                        >
                            <vl-select
                                id="method"
                                name="contact-method"
                                label="Contactmethode"
                                placeholder="Kies een methode"
                                .value=${this.method}
                                .options=${je}
                                @vl-change=${this.onMethodChange}
                            ></vl-select>
                            ${this.method==="email"?n`<vl-input-field
                                      id="value"
                                      name="contact-value"
                                      label="E-mailadres"
                                      type="email"
                                      placeholder="naam@voorbeeld.be"
                                      .value=${this.contact}
                                      @vl-input=${this.onContactInput}
                                  ></vl-input-field>`:O}
                            ${this.method==="tel"?n`<vl-input-field
                                      id="value"
                                      name="contact-value"
                                      label="Telefoonnummer"
                                      type="tel"
                                      placeholder="+32 ..."
                                      .value=${this.contact}
                                      @vl-input=${this.onContactInput}
                                  ></vl-input-field>`:O}
                        </vl-composite-input>
                        <vl-text annotation small
                            >Kies eerst een methode; vul dan een geldig e-mailadres (naam@voorbeeld.be) of
                            telefoonnummer in.</vl-text
                        >
                        <vl-form-message for="contact" state="valueMissing"
                            >Kies een methode en vul het contactgegeven in.</vl-form-message
                        >
                        <vl-form-message for="contact" state="customError"></vl-form-message>
                    </div>
                    <div class="vl-column vl-column--8 vl-column--start-5">
                        <div class="form-buttons">
                            <vl-button type="submit">Verstuur</vl-button>
                            <vl-button type="reset" secondary>Reset</vl-button>
                        </div>
                    </div>
                    ${this.parsedFormData?n`
                              <div class="vl-column vl-column--4">
                                  <vl-form-label class="vl-form__label">Formulier data</vl-form-label>
                              </div>
                              <div class="vl-column vl-column--8">
                                  <pre>${JSON.stringify(this.parsedFormData,null,4)}</pre>
                              </div>
                          `:""}
                </div>
            </form>
        `}onMethodChange(e){this.method=e.target.value,this.contact=""}onContactInput(e){this.contact=e.detail?.value??""}onSubmit(e){e.preventDefault(),this.parsedFormData=h(e.target)}onReset(){this.method="",this.contact="",this.parsedFormData=null}};d([y,V,m,c,u,f,D]);R=Fe([i("vl-form-composite-input-contact")],R);var _e=Object.getOwnPropertyDescriptor,Y=(e,l,r,o)=>{for(var t=o>1?void 0:o?_e(l,r):l,a=e.length-1,s;a>=0;a--)(s=e[a])&&(t=s(t)||t);return t};let w=class extends _(m){};w.formControlValidators=[...m.formControlValidators,{key:"customError",message:"Bij de strikte procedure moet de code 'ABC-123' zijn.",dependencySelectors:["#procedure"],isValid(e,l){if(!l)return!0;const r=e.form;return r?r.querySelector("#procedure")?.value!=="strikt"||l==="ABC-123":!0}}];w=Y([i("vl-input-field-with-cross-validator")],w);let L=class extends p{constructor(){super(...arguments),this.formData=null,this.procedureOpties=[{label:"Standaard",value:"standaard"},{label:'Strikt (vereist code "ABC-123")',value:"strikt"}]}static get styles(){return[g,b,v`
                form {
                    margin-top: 1rem;
                    max-width: 800px;
                }

                .form-buttons {
                    vl-button:not(:last-child) {
                        margin-right: 1.4rem;
                    }
                }

                pre {
                    margin-top: 1rem;
                    padding: 0.75rem;
                    background: #f5f5f5;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    font-size: 0.875rem;
                }
            `]}static get properties(){return{formData:{state:!0}}}render(){return n`
            <form class="vl-form" @submit=${this.onSubmit} @reset=${this.onReset}>
                <div class="vl-grid">
                    <div class="vl-column vl-column--4">
                        <vl-form-label for="procedure" label="Procedure *" block></vl-form-label>
                    </div>
                    <div class="vl-column vl-column--8">
                        <vl-select
                            id="procedure"
                            name="procedure"
                            block
                            required
                            placeholder="Kies een procedure"
                            .options=${this.procedureOpties}
                        ></vl-select>
                        <vl-form-message for="procedure" state="valueMissing"
                            >Gelieve een procedure te kiezen.</vl-form-message
                        >
                    </div>
                    <div class="vl-column vl-column--4">
                        <vl-form-label for="code" label="Code *" block></vl-form-label>
                    </div>
                    <div class="vl-column vl-column--8">
                        <vl-input-field-with-cross-validator
                            id="code"
                            name="code"
                            block
                            required
                        ></vl-input-field-with-cross-validator>
                        <vl-form-message for="code" state="valueMissing"
                            >Gelieve een code in te vullen.</vl-form-message
                        >
                        <vl-form-message for="code" state="customError"
                            >Bij de strikte procedure moet de code 'ABC-123' zijn.</vl-form-message
                        >
                    </div>
                    <div class="vl-column vl-column--8 vl-column--start-5">
                        <div class="form-buttons">
                            <vl-button type="submit">Verstuur</vl-button>
                            <vl-button type="reset" secondary>Reset</vl-button>
                        </div>
                    </div>
                </div>
            </form>
            ${this.formData?n`<pre>${JSON.stringify(this.formData,null,2)}</pre>`:""}
        `}onSubmit(e){e.preventDefault(),this.formData=h(e.target)}onReset(){this.formData=null}};d([w,c,u,V,f]);L=Y([i("vl-form-cross-validation")],L);var Oe=Object.getOwnPropertyDescriptor,Z=(e,l,r,o)=>{for(var t=o>1?void 0:o?Oe(l,r):l,a=e.length-1,s;a>=0;a--)(s=e[a])&&(t=s(t)||t);return t};let x=class extends _(m){};x.formControlValidators=[...m.formControlValidators,{key:"customError",message:"De e-mailadressen komen niet overeen.",dependencySelectors:["#email"],isValid(e,l){if(!l)return!0;const r=e.form;if(!r)return!0;const o=r.querySelector("#email")?.value;return l===o}}];x=Z([i("vl-input-field-with-match-validator")],x);let T=class extends p{static get styles(){return[g,b,v`
                form {
                    margin-top: 1rem;
                    max-width: 800px;
                }

                .form-buttons {
                    vl-button:not(:last-child) {
                        margin-right: 1.4rem;
                    }
                }
            `]}render(){return n`
            <form class="vl-form" @submit=${this.onSubmit}>
                <div class="vl-grid">
                    <div class="vl-column vl-column--4">
                        <vl-form-label for="email" label="E-mailadres *" block></vl-form-label>
                    </div>
                    <div class="vl-column vl-column--8">
                        <vl-input-field id="email" name="email" block required></vl-input-field>
                        <vl-form-message for="email" state="valueMissing"
                            >Gelieve een e-mailadres in te vullen.</vl-form-message
                        >
                    </div>
                    <div class="vl-column vl-column--4">
                        <vl-form-label for="bevestig-email" label="Bevestig e-mailadres *" block></vl-form-label>
                    </div>
                    <div class="vl-column vl-column--8">
                        <vl-input-field-with-match-validator
                            id="bevestig-email"
                            name="bevestigEmail"
                            block
                            required
                        ></vl-input-field-with-match-validator>
                        <vl-form-message for="bevestig-email" state="valueMissing"
                            >Gelieve het e-mailadres te bevestigen.</vl-form-message
                        >
                        <vl-form-message for="bevestig-email" state="customError"
                            >De e-mailadressen komen niet overeen.</vl-form-message
                        >
                    </div>
                    <div class="vl-column vl-column--8 vl-column--start-5">
                        <div class="form-buttons">
                            <vl-button type="submit">Verstuur</vl-button>
                            <vl-button type="reset" secondary>Reset</vl-button>
                        </div>
                    </div>
                </div>
            </form>
        `}onSubmit(e){e.preventDefault()}};d([x,c,u,m,f]);T=Z([i("vl-form-cross-validation-match")],T);var Ae=Object.getOwnPropertyDescriptor,U=(e,l,r,o)=>{for(var t=o>1?void 0:o?Ae(l,r):l,a=e.length-1,s;a>=0;a--)(s=e[a])&&(t=s(t)||t);return t};let C=class extends _(m){};C.formControlValidators=[...m.formControlValidators,{key:"customError",message:"Gelieve de reden te verduidelijken.",dependencySelectors:["#reden"],isValid(e,l){const r=e.form;return!r||r.querySelector("#reden")?.value!=="andere"?!0:!!l}}];C=U([i("vl-input-field-with-conditional-validator")],C);let P=class extends p{constructor(){super(...arguments),this.reden="",this.redenOpties=[{label:"Verlenging",value:"verlenging"},{label:"Andere",value:"andere"}]}static get styles(){return[g,b,v`
                form {
                    margin-top: 1rem;
                    max-width: 800px;
                }

                .form-buttons {
                    vl-button:not(:last-child) {
                        margin-right: 1.4rem;
                    }
                }
            `]}static get properties(){return{reden:{type:String,state:!0}}}get verduidelijkingVerplicht(){return this.reden==="andere"}render(){return n`
            <form class="vl-form" @submit=${this.onSubmit} @reset=${this.onReset} @vl-change=${this.onChange}>
                <div class="vl-grid">
                    <div class="vl-column vl-column--4">
                        <vl-form-label for="reden" label="Reden aanvraag *" block></vl-form-label>
                    </div>
                    <div class="vl-column vl-column--8">
                        <vl-select
                            id="reden"
                            name="reden"
                            block
                            required
                            placeholder="Kies een reden"
                            .options=${this.redenOpties}
                        ></vl-select>
                        <vl-form-message for="reden" state="valueMissing">Gelieve een reden te kiezen.</vl-form-message>
                    </div>
                    <div class="vl-column vl-column--4">
                        <vl-form-label
                            for="verduidelijking"
                            label=${this.verduidelijkingVerplicht?"Verduidelijking *":"Verduidelijking"}
                            block
                        ></vl-form-label>
                    </div>
                    <div class="vl-column vl-column--8">
                        <vl-input-field-with-conditional-validator
                            id="verduidelijking"
                            name="verduidelijking"
                            block
                        ></vl-input-field-with-conditional-validator>
                        <vl-form-message for="verduidelijking" state="customError"
                            >Gelieve de reden te verduidelijken.</vl-form-message
                        >
                    </div>
                    <div class="vl-column vl-column--8 vl-column--start-5">
                        <div class="form-buttons">
                            <vl-button type="submit">Verstuur</vl-button>
                            <vl-button type="reset" secondary>Reset</vl-button>
                        </div>
                    </div>
                </div>
            </form>
        `}onSubmit(e){e.preventDefault()}onReset(){this.reden=""}onChange(){this.reden=this.shadowRoot?.querySelector("#reden")?.value??""}};d([C,c,u,V,f]);P=U([i("vl-form-cross-validation-conditional")],P);var ze=Object.getOwnPropertyDescriptor,Q=(e,l,r,o)=>{for(var t=o>1?void 0:o?ze(l,r):l,a=e.length-1,s;a>=0;a--)(s=e[a])&&(t=s(t)||t);return t};const Ge={key:"customError",message:"Value does not equal 'foo'",isValid(e,l){return l?l==="foo":!0}};let $=class extends m{};$.formControlValidators=[...m.formControlValidators,Ge];$=Q([i("vl-input-field-with-foo-validator")],$);let q=class extends p{constructor(){super(...arguments),this.success=!1}static get styles(){return[g,b,v`
                form {
                    margin-top: 1rem;
                    max-width: 800px;
                }

                .form-buttons {
                    vl-button:not(:last-child) {
                        margin-right: 1.4rem;
                    }
                }
            `]}static get properties(){return{success:{type:Boolean,state:!0}}}render(){return n`
            <form class="vl-form" @submit=${this.onSubmit} @reset=${this.onReset}>
                <div class="vl-grid">
                    <div class="vl-column vl-column--4">
                        <vl-form-label for="waarde" label="Waarde *" block></vl-form-label>
                    </div>
                    <div class="vl-column vl-column--8">
                        <vl-input-field-with-foo-validator
                            id="waarde"
                            name="waarde"
                            block
                            required
                            ?success=${this.success}
                            @invalid=${()=>{this.success=!1}}
                        ></vl-input-field-with-foo-validator>
                        <vl-form-message for="waarde" state="valueMissing"
                            >Gelieve een waarde in te vullen.</vl-form-message
                        >
                        <vl-form-message for="waarde" state="customError"
                            >Gelieve 'foo' als waarde in te vullen.</vl-form-message
                        >
                    </div>
                    <div class="vl-column vl-column--8 vl-column--start-5">
                        <div class="form-buttons">
                            <vl-button type="submit">Verstuur</vl-button>
                            <vl-button type="reset" secondary>Reset</vl-button>
                        </div>
                    </div>
                </div>
            </form>
        `}onSubmit(e){e.preventDefault(),this.success=!0}onReset(){this.success=!1}};d([$,c,u,f]);q=Q([i("vl-form-custom-validation")],q);var Re=Object.getOwnPropertyDescriptor,Le=(e,l,r,o)=>{for(var t=o>1?void 0:o?Re(l,r):l,a=e.length-1,s;a>=0;a--)(s=e[a])&&(t=s(t)||t);return t};let I=class extends p{constructor(){super(...arguments),this.geboorteplaatsen=[{label:"België",value:"",choices:[{label:"Hasselt",value:"hasselt"},{label:"Turnhout",value:"turnhout"},{label:"Knokke-Heist",value:"knokke-heist"},{label:"Waregem",value:"waregem"},{label:"Lier",value:"lier"}]},{label:"Puerto Rico",value:"",choices:[{label:"Rio Piedras",value:"rio piedras"}]}],this.hobbies=[{label:"Padel",value:"padel"},{label:"Dans",value:"dans"},{label:"Drummen",value:"drummen"},{label:"Zwemmen",value:"zwemmen"},{label:"Boardgames",value:"boardgames"},{label:"Fietsen",value:"fietsen"}],this.kinderenOpties=[{label:"0",value:"0"},{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"},{label:"4",value:"4"},{label:"5 of meer",value:"5 of meer"}]}static get styles(){return[g,le,v`
                form {
                    margin-top: 1rem;
                    max-width: 800px;
                }

                .form-buttons {
                    vl-button:not(:last-child) {
                        margin-right: 1.4rem;
                    }
                }
            `]}render(){return n`
            <form
                id="form"
                class="vl-form"
                blur-validation
                @submit=${this.onSubmit}
            >
                <div class="vl-grid vl-stacked-small">
                    <div class="vl-column vl-column--4 vl-column--s-12">
                        <vl-form-label for="naam" label="Naam *"></vl-form-label>
                        <vl-text annotation small>(enkel achternaam)</vl-text>
                    </div>
                    <div class="vl-column vl-column--8 vl-column--s-12">
                        <vl-input-field
                            id="naam"
                            name="naam"
                            autocomplete="given-name"
                            block
                            required
                            pattern="^[a-zA-Z ]*$"
                            min-length=${2}
                            max-length=${20}
                            placeholder="bv. Jo"
                        ></vl-input-field>
                        <vl-form-message for="naam" state="valueMissing"
                            >Gelieve een naam in te vullen.
                        </vl-form-message>
                        <vl-form-message for="naam" state="valid"> Deze naam is geldig. </vl-form-message>
                        <vl-form-message for="naam" state="tooShort"
                            >Gelieve minimum 2 karakters te gebruiken.
                        </vl-form-message>
                        <vl-form-message for="naam" state="tooLong"
                            >Gelieve maximum 20 karakters te gebruiken.
                        </vl-form-message>
                        <vl-form-message for="naam" state="patternMismatch"
                            >Gelieve geen nummers of speciale tekens in te vullen.
                        </vl-form-message>
                    </div>
                    <div class="vl-column vl-column--4 vl-column--s-12">
                        <vl-form-label for="rrn" label="Rijksregisternummer *" block></vl-form-label>
                    </div>
                    <div class="vl-column vl-column--8 vl-column--s-12">
                        <vl-input-field-masked
                            id="rrn"
                            name="rrn"
                            block
                            required
                            mask="rrn"
                            placeholder="bv. 86-12-31-123-45"
                        ></vl-input-field-masked>
                        <vl-form-message for="rrn" variant="annotation">
                            Een rijksregisternummer heeft het formaat yy-dd-mm-xyz-cn
                        </vl-form-message>
                        <vl-form-message for="rrn" state="valueMissing"
                            >Gelieve een rijksregisternummer in te vullen.</vl-form-message
                        >
                        <vl-form-message for="rrn" state="patternMismatch"
                            >Gelieve een geldig rijksregisternummer in te vullen.</vl-form-message
                        >
                        <vl-form-message for="rrn" state="valid">Dit rijksregisternummer is geldig. </vl-form-message>
                    </div>
                    <div class="vl-column vl-column--4 vl-column--s-12">
                        <vl-form-label for="geboortedatum" label="Geboortedatum *" block></vl-form-label>
                    </div>
                    <div class="vl-column vl-column--8 vl-column--s-12">
                        <vl-datepicker
                            id="geboortedatum"
                            name="geboortedatum"
                            autocomplete="bday"
                            placeholder="bv. 31.12.1992"
                            block
                            required
                        >
                        </vl-datepicker>
                        <vl-form-message for="geboortedatum" state="valueMissing">
                            Gelieve een geboortedatum in te vullen.
                        </vl-form-message>
                        <vl-form-message for="geboortedatum" state="valid">
                            Deze geboortedatum is geldig.
                        </vl-form-message>
                        <vl-form-message for="geboortedatum" state="patternMismatch">
                            Gelieve het volgende datum formaat te gebruiken: "dd.mm.YYYY", bv. 01.12.1976 of 1.2.1993
                        </vl-form-message>
                    </div>
                    <div class="vl-column vl-column--4 vl-column--s-12">
                        <vl-form-label for="geboorteplaats" label="Geboorteplaats *" block></vl-form-label>
                    </div>
                    <div class="vl-column vl-column--8 vl-column--s-12">
                        <vl-select-rich
                            id="geboorteplaats"
                            name="geboorteplaats"
                            required
                            search
                            .options=${this.geboorteplaatsen}
                            result-limit="2"
                            placeholder="bv. Smeerebbe-Vloerzegem"
                            no-results-text="Geen geboorteplaatsen gevonden"
                            search-placeholder="Zoek geboorteplaats"
                        >
                        </vl-select-rich>
                        <vl-form-message for="geboorteplaats" state="valueMissing"
                            >Gelieve een geboorteplaats te selecteren.
                        </vl-form-message>
                        <vl-form-message for="geboorteplaats" state="valid"
                            >Deze geboorteplaats is geldig.
                        </vl-form-message>
                    </div>
                    <div class="vl-column vl-column--4 vl-column--s-12">
                        <vl-form-label for="hobbies" label="Hobbies *" block></vl-form-label>
                    </div>
                    <div class="vl-column vl-column--8 vl-column--s-12">
                        <vl-select-rich
                            id="hobbies"
                            name="hobbies"
                            required
                            multiple
                            .options=${this.hobbies}
                            placeholder="bv. Boardgames"
                            no-results-text="Geen hobbies gevonden"
                            no-choices-text="Geen resterende hobbies gevonden"
                        >
                        </vl-select-rich>
                        <vl-form-message for="hobbies" state="valueMissing"
                            >Gelieve een hobby te selecteren.
                        </vl-form-message>
                        <vl-form-message for="hobbies" state="valid">Deze hobbyselectie is geldig. </vl-form-message>
                    </div>
                    <div class="vl-column vl-column--4 vl-column--s-12">
                        <vl-form-label for="kinderen" label="Aantal kinderen *" block></vl-form-label>
                    </div>
                    <div class="vl-column vl-column--8 vl-column--s-12">
                        <vl-select
                            id="kinderen"
                            name="kinderen"
                            block
                            placeholder="bv. 1"
                            required
                            .options=${this.kinderenOpties}
                        ></vl-select>
                        <vl-form-message for="kinderen" state="valueMissing"
                            >Gelieve een aantal kinderen te kiezen.
                        </vl-form-message>
                        <vl-form-message for="kinderen" state="valid">Dit aantal kinderen is geldig. </vl-form-message>
                    </div>
                    <div class="vl-column vl-column--4 vl-column--s-12">
                        <vl-form-label for="interesses" label="Interesses *" block></vl-form-label>
                    </div>
                    <div class="vl-column vl-column--8 vl-column--s-12">
                        <vl-textarea
                            id="interesses"
                            name="interesses"
                            block
                            required
                            min-length=${5}
                            max-length=${100}
                            rows=${10}
                            placeholder="bv. Ik ben geïnteresseerd in..."
                        ></vl-textarea>
                        <vl-form-message for="interesses" state="valueMissing"
                            >Gelieve je interesses in te vullen.
                        </vl-form-message>
                        <vl-form-message for="interesses" state="valid">Deze interesses zijn geldig. </vl-form-message>
                        <vl-form-message for="interesses" state="tooShort"
                            >Gelieve minimum 5 karakters te gebruiken.
                        </vl-form-message>
                        <vl-form-message for="interesses" state="tooLong"
                            >Gelieve maximum 100 karakters te gebruiken.
                        </vl-form-message>
                    </div>
                    <div class="vl-column vl-column--4 vl-column--s-12">
                        <vl-form-label for="leeftijd" label="Leeftijd *" block></vl-form-label>
                    </div>
                    <div class="vl-column vl-column--8 vl-column--s-12">
                        <vl-input-field
                            id="leeftijd"
                            name="leeftijd"
                            type="number"
                            block
                            required
                            placeholder="bv. 35"
                            min=${0}
                            max=${99}
                        ></vl-input-field>
                        <vl-form-message for="leeftijd" state="valueMissing"
                            >Gelieve een leeftijd in te vullen.
                        </vl-form-message>
                        <vl-form-message for="leeftijd" state="valid">Deze leeftijd is geldig. </vl-form-message>
                        <vl-form-message for="leeftijd" state="rangeUnderflow"
                            >De minimum leeftijd is 0 jaar.
                        </vl-form-message>
                        <vl-form-message for="leeftijd" state="rangeOverflow"
                            >De maximum leeftijd is 99 jaar.
                        </vl-form-message>
                    </div>
                    <div class="vl-column vl-column--4 vl-column--s-12">
                        <vl-form-label for="contactmethode" label="Contactmethode *" block></vl-form-label>
                    </div>
                    <div class="vl-column vl-column--8 vl-column--s-12">
                        <vl-radio-group id="contactmethode" name="contactmethode" required>
                            <vl-radio value="e-mail">e-mail</vl-radio>
                            <vl-radio value="telefoon">telefoon</vl-radio>
                            <vl-radio value="post">post</vl-radio>
                        </vl-radio-group>
                        <vl-form-message for="contactmethode" state="valueMissing">
                            Gelieve een contactmethode te selecteren.
                        </vl-form-message>
                        <vl-form-message for="contactmethode" state="valid">
                            Deze contactmethode is geldig.
                        </vl-form-message>
                    </div>
                    <div class="vl-column vl-column--4 vl-column--s-12">
                        <vl-form-label for="foto" label="Pasfoto *" block></vl-form-label>
                    </div>
                    <div class="vl-column vl-column--8 vl-column--s-12">
                        <vl-upload
                            id="foto"
                            name="foto"
                            accepted-files="image/*"
                            required
                            url="http://httpbin.org/post"
                        ></vl-upload>
                        <vl-form-message for="foto" state="valueMissing">
                            Gelieve een foto te selecteren.
                        </vl-form-message>
                        <vl-form-message for="foto" state="valid"> Deze foto is geldig. </vl-form-message>
                    </div>
                    <div class="vl-column vl-column--4 vl-column--s-12">
                        <vl-form-label for="waarheidsgetrouw" label="Waarheidsgetrouw *" block></vl-form-label>
                    </div>
                    <div class="vl-column vl-column--8 vl-column--s-12">
                        <vl-checkbox id="waarheidsgetrouw" name="waarheidsgetrouw" block required>
                            Naar waarheid ingevuld
                        </vl-checkbox>
                        <vl-form-message for="waarheidsgetrouw" state="valueMissing">
                            Gelieve te bevestigen dat bovenstaande gegevens naar waarheid zijn ingevuld.
                        </vl-form-message>
                        <vl-form-message for="waarheidsgetrouw" state="valid">
                            Bedankt voor het bevestigen.
                        </vl-form-message>
                    </div>
                    <vl-fieldset horizontal class="vl-column vl-column--12">
                        <span slot="legend">Gerelateerde velden *</span>
                        <div class="vl-column vl-column--8 vl-column--s-12">
                            <div class="vl-group vl-group--collapse-xs">
                                <vl-input-field
                                    id="gerelateerd-1"
                                    name="gerelateerd-1"
                                    label="Gerelateerd veld 1 *"
                                    placeholder="Voorbeeld eerste veld"
                                    required
                                ></vl-input-field>
                                <vl-input-field
                                    id="gerelateerd-2"
                                    name="gerelateerd-2"
                                    label="Gerelateerd veld 2 *"
                                    placeholder="Voorbeeld tweede veld"
                                    required
                                ></vl-input-field>
                            </div>
                            <vl-form-message for="gerelateerd-1" state="valueMissing"
                                >Gelieve een waarde in te vullen voor "Gerelateerd veld 1".
                            </vl-form-message>
                            <vl-form-message for="gerelateerd-1" state="valid"
                                >"Gerelateerd veld 1" is geldig.
                            </vl-form-message>
                            <vl-form-message for="gerelateerd-2" state="valueMissing"
                                >Gelieve een waarde in te vullen voor "Gerelateerd veld 2".
                            </vl-form-message>
                            <vl-form-message for="gerelateerd-2" state="valid"
                                >"Gerelateerd veld 2" is geldig.
                            </vl-form-message>
                        </div>
                    </vl-fieldset>
                    <div class="vl-column vl-column--8 vl-column--s-12 vl-column--start-5 vl-column--s-start-1">
                        <div class="form-buttons">
                            <vl-button type="submit">Verstuur</vl-button>
                            <vl-button type="reset" secondary>Reset</vl-button>
                        </div>
                    </div>
                </div>
            </form>
        `}onSubmit(e){e.preventDefault();const l=h(e.target);console.log(l)}};d([c,m,N,se,E,M,V,ae,re,W,K,u,f,D]);I=Le([i("vl-form-demo")],I);var Te=Object.getOwnPropertyDescriptor,Pe=(e,l,r,o)=>{for(var t=o>1?void 0:o?Te(l,r):l,a=e.length-1,s;a>=0;a--)(s=e[a])&&(t=s(t)||t);return t};let B=class extends oe{constructor(){super(...arguments),this.hobbies=[{label:"Padel",value:"padel"},{label:"Dans",value:"dans"},{label:"Drummen",value:"drummen"},{label:"Zwemmen",value:"zwemmen"},{label:"Boardgames",value:"boardgames"},{label:"Fietsen",value:"fietsen"},{label:"Cocktails",value:"cocktails"}],this.parsedFormData=null}static get properties(){return{parsedFormData:{type:Object,state:!0}}}static get styles(){return[g,b,v`
                form {
                    margin-top: 1rem;
                    max-width: 800px;
                }

                .form-buttons {
                    vl-button:not(:last-child) {
                        margin-right: 1.4rem;
                    }
                }

                pre {
                    font-size: 1rem;
                }
            `]}render(){return n`
            <form id="form" class="vl-form" @submit=${this.onSubmit} @reset=${this.onReset} autocomplete="off">
                <div class="vl-grid">
                    <div class="vl-column vl-column--4">
                        <vl-form-label for="naam" label="Naam" block></vl-form-label>
                    </div>
                    <div class="vl-column vl-column--8">
                        <vl-input-field id="naam" name="naam" block></vl-input-field>
                    </div>
                    <div class="vl-column vl-column--4">
                        <vl-form-label for="geboorteplaats" label="Geboorteplaats" block></vl-form-label>
                    </div>
                    <div class="vl-column vl-column--8">
                        <vl-select
                            id="geboorteplaats"
                            name="geboorteplaats"
                            placeholder="Selecteer geboorteplaats"
                        >
                            <option value="hasselt">Hasselt</option>
                            <option value="turnhout">Turnhout</option>
                            <option value="knokke-heist">Knokke-Heist</option>
                            <option value="waregem">Waregem</option>
                            <option value="lier">Lier</option>
                        </vl-select>
                    </div>
                    <div class="vl-column vl-column--4">
                        <vl-form-label for="hobbies" label="Hobbies" block></vl-form-label>
                    </div>
                    <div class="vl-column vl-column--8">
                        <vl-select-rich
                            id="hobbies"
                            name="hobbies"
                            multiple
                            .options=${this.hobbies}
                            placeholder="Selecteer je hobbies"
                            no-results-text="Geen hobbies gevonden"
                            no-choices-text="Geen resterende hobbies gevonden"
                        >
                        </vl-select-rich>
                    </div>
                    <div class="vl-column vl-column--4">
                        <vl-form-label for="betrokkenheid" label="Betrokkenheid" block></vl-form-label>
                    </div>
                    <div class="vl-column vl-column--8 vl-column--start-5">
                        <vl-checkbox
                            id="betrokkenheid-plannende-overheid"
                            name="betrokkenheid"
                            value="plannende-overheid"
                            multiple
                        >
                            <span>Plannende overheid</span>
                        </vl-checkbox>
                        <vl-checkbox
                            id="betrokkenheid-adviesverlener"
                            name="betrokkenheid"
                            value="adviesverlener"
                            multiple
                        >
                            <span>Adviesverlener</span>
                        </vl-checkbox>
                        <vl-checkbox
                            id="betrokkenheid-hogere-overheid"
                            name="betrokkenheid"
                            value="hogere-overheid"
                            multiple
                        >
                            <span>Hogere overheid</span>
                        </vl-checkbox>
                    </div>
                    <div class="vl-column vl-column--4">
                        <vl-form-label for="vervoer" label="Vervoer" block></vl-form-label>
                    </div>
                    <div class="vl-column vl-column--8">
                        <vl-radio-group name="vervoer">
                            <vl-radio value="land">Land</vl-radio>
                            <vl-radio value="zee">Zee</vl-radio>
                            <vl-radio value="lucht">Lucht</vl-radio>
                        </vl-radio-group>
                    </div>
                    <div class="vl-column vl-column--4">
                        <vl-form-label for="startDate" label="Aanvangsdatum" block></vl-form-label>
                    </div>
                    <div class="vl-column vl-column--8">
                        <vl-datepicker static name="startDate"> </vl-datepicker>
                    </div>
                    <div class="vl-column vl-column--4">
                        <vl-form-label for="file" label="Bestand" block></vl-form-label>
                    </div>
                    <div class="vl-column vl-column--8">
                        <vl-upload url="test" name="file" max-files="2"> </vl-upload>
                    </div>
                    <div class="vl-column vl-column--12">
                        <div class="form-buttons">
                            <vl-button type="button" title="setFormData()" @click=${this.onSetFormData}
                                >Stel in
                            </vl-button>
                            <vl-button type="submit" title="parseFormData()">Verstuur</vl-button>
                            <vl-button type="reset" secondary>Reset</vl-button>
                        </div>
                    </div>
                    ${this.parsedFormData?n`
                              <div class="vl-column vl-column--4">
                                  <vl-form-label class="vl-form__label">Formulier data</vl-form-label>
                              </div>
                              <div class="vl-column vl-column--8">
                                  <pre>${JSON.stringify(this.parsedFormData,null,10)}</pre>
                              </div>
                          `:""}
                </div>
            </form>
        `}get formData(){const e=this.shadowRoot?.querySelector("form");return console.log("[formData] form",e),e?h(e):null}onSubmit(e){e.preventDefault();const l=h(e.target);this.parsedFormData=l,console.log(l)}onReset(){this.parsedFormData=null,this.shadowRoot?.querySelector("form")?.reset()}onSetFormData(){const e=this.shadowRoot?.querySelector("form"),l={naam:"Dehbi",geboorteplaats:"knokke-heist",hobbies:["drummen","dans"],betrokkenheid:["plannende-overheid","hogere-overheid"],vervoer:"zee",startDate:"today",file:[new File(["Hallo, world!"],"dossier.txt",{type:"text/plain",lastModified:new Date().getMilliseconds()}),new File(["Konichua, world!"],"aanbeveling.txt",{type:"text/plain",lastModified:new Date().getMilliseconds()})]};ie(e,l)}};d([c,m,M,u,f,K,N,E,ne,te,W]);B=Pe([i("vl-form-data")],B);export{I as V,q as a,L as b,T as c,P as d,B as e,A as f,z as g,G as h,R as i};
