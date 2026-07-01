import{br as D,V as v,r as f,b,c as g,d as p,aR as A,v as h,z as F,i as k,x as n,w as c,R as L,a$ as z,Q as R,B as H}from"./iframe-B0laZkYe.js";import{V as G}from"./vl-checkbox.component-Di7peM8v.js";import{V as M}from"./vl-datepicker.component-DlRL_EoA.js";import"./vl-fieldset.component-Bn8r0_Ra.js";import{V as C}from"./vl-input-field-masked.component-CxOJldmZ.js";import{V as q}from"./vl-radio.component-B0VzWM9w.js";import{V as O}from"./vl-radio-group.component-Bbvuqwo7.js";import{V as E}from"./vl-select.component-DvDVJX_H.js";import{V as y}from"./vl-select-rich.component-CrlR4fif.js";import{V as I}from"./vl-textarea.component-CKzynvyQ.js";import{V as _}from"./vl-textarea-rich.component-B47eK6zY.js";import{V as S}from"./vl-upload.component-DnznfWTr.js";const d=(e,l)=>{if(!e)return null;const t=new FormData(e),a=Array.from(e.elements).filter(s=>!(s instanceof HTMLInputElement&&s.type==="radio")&&s.hasAttribute("name")).map(s=>s.getAttribute("name")).filter((s,i,$)=>$.indexOf(s)!==i),o=Array.from(e.elements).filter(s=>s.hasAttribute("multiple")).map(s=>s.getAttribute("name")),r=Array.from(new Set([...a,...o]));return Array.from(t.keys()).reduce((s,i)=>({...s,[i]:r.includes(i)?t.getAll(i):t.get(i)}),{})},P=(e,l)=>{e&&Object.entries(l).forEach(([t,a])=>{const o=e.elements.namedItem(t);o&&(o instanceof HTMLInputElement&&o.type==="checkbox"?j(o,a):o instanceof HTMLInputElement&&o.type==="file"?W(o,a):o instanceof HTMLTextAreaElement||o instanceof HTMLSelectElement?o.value=a:o instanceof RadioNodeList?Z(o,a):o instanceof HTMLInputElement?o.value=a:o instanceof D&&B(o,a))})},B=(e,l)=>{if(e.validationTarget instanceof HTMLSelectElement)K(e,l);else if(e.validationTarget instanceof HTMLInputElement&&e.validationTarget.type==="checkbox")j(e,l);else if(e.validationTarget instanceof HTMLInputElement&&e.validationTarget.type==="file"){const t=e;t.removeAllFiles(),Array.isArray(l)?l.forEach(a=>a instanceof File&&t.addFile(a)):l instanceof File&&t.addFile(l)}else e.setAttribute("value",l)},W=(e,l)=>{const t=new DataTransfer;Array.isArray(l)?(l.forEach(a=>{t.items.add(a)}),e.files=t.files):l instanceof File&&(t.items.add(l),e.files=t.files)},Z=(e,l)=>{Array.from(e).forEach(t=>{if(t instanceof HTMLInputElement){const a=Array.isArray(l)?l.includes(t.value):t.value===l;t.type==="radio"&&a?t.checked=!0:t.type==="checkbox"&&((Array.isArray(l)?l.includes(t.value):t.value===l)?t.setAttribute("checked",""):t.removeAttribute("checked"))}else if(t instanceof D&&t.validationTarget instanceof HTMLInputElement){if(t.validationTarget.type==="radio")t.getAttribute("value")===l&&t.setAttribute("checked","");else if(t.validationTarget.type==="checkbox"){const a=t;Array.isArray(l)&&t.validationTarget&&(l.some(o=>u(a,o))?a.setAttribute("checked",""):a.removeAttribute("checked"))}}})},K=(e,l)=>{e instanceof y?e.setSelectedValues(l):e.setAttribute("value",l)},u=(e,l)=>typeof l=="string"&&l&&l===(e.getAttribute("value")||"on"),j=(e,l)=>{Array.isArray(l)?l.some(t=>u(e,t))?e.setAttribute("checked",""):e.removeAttribute("checked"):u(e,l)||typeof l=="boolean"&&l?e.setAttribute("checked",""):typeof l=="boolean"&&!l&&e.removeAttribute("checked")};var Y=Object.getOwnPropertyDescriptor,T=(e,l,t,a)=>{for(var o=a>1?void 0:a?Y(l,t):l,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=s(o)||o);return o};const J={key:"customError",message:"Value does not equal 'foo'",isValid(e,l){return l?l==="foo":!0}};let m=class extends v{};m.formControlValidators=[...v.formControlValidators,J];m=T([c("vl-input-field-with-foo-validator")],m);let w=class extends A{constructor(){super(...arguments),this.success=!1}static get styles(){return[h,F,k`
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
        `}onSubmit(e){e.preventDefault(),this.success=!0}onReset(){this.success=!1}};f([m,b,g,p]);w=T([c("vl-form-custom-validation")],w);var U=Object.getOwnPropertyDescriptor,Q=(e,l,t,a)=>{for(var o=a>1?void 0:a?U(l,t):l,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=s(o)||o);return o};let V=class extends A{constructor(){super(...arguments),this.geboorteplaatsen=[{label:"België",value:"",choices:[{label:"Hasselt",value:"hasselt"},{label:"Turnhout",value:"turnhout"},{label:"Knokke-Heist",value:"knokke-heist"},{label:"Waregem",value:"waregem"},{label:"Lier",value:"lier"}]},{label:"Puerto Rico",value:"",choices:[{label:"Rio Piedras",value:"rio piedras"}]}],this.hobbies=[{label:"Padel",value:"padel"},{label:"Dans",value:"dans"},{label:"Drummen",value:"drummen"},{label:"Zwemmen",value:"zwemmen"},{label:"Boardgames",value:"boardgames"},{label:"Fietsen",value:"fietsen"}],this.kinderenOpties=[{label:"0",value:"0"},{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"},{label:"4",value:"4"},{label:"5 of meer",value:"5 of meer"}]}static get styles(){return[h,z,k`
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
            <form id="form" class="vl-form" @submit=${this.onSubmit}>
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
        `}onSubmit(e){e.preventDefault();const l=d(e.target);console.log(l)}};f([b,v,C,I,M,y,E,O,q,S,G,g,p,L]);V=Q([c("vl-form-demo")],V);var X=Object.getOwnPropertyDescriptor,N=(e,l,t,a)=>{for(var o=a>1?void 0:a?X(l,t):l,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=s(o)||o);return o};let x=class extends H{constructor(){super(...arguments),this.hobbies=[{label:"Padel",value:"padel"},{label:"Dans",value:"dans"},{label:"Drummen",value:"drummen"},{label:"Zwemmen",value:"zwemmen"},{label:"Boardgames",value:"boardgames"},{label:"Fietsen",value:"fietsen"},{label:"Cocktails",value:"cocktails"}],this.parsedFormData=null}static get properties(){return{parsedFormData:{type:Object,state:!0}}}static get styles(){return[h,F,k`
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
        `}get formData(){const e=this.shadowRoot?.querySelector("form");return console.log("[formData] form",e),e?d(e):null}onSubmit(e){e.preventDefault();const l=d(e.target);this.parsedFormData=l,console.log(l)}onReset(){this.parsedFormData=null,this.shadowRoot?.querySelector("form")?.reset()}onSetFormData(){const e=this.shadowRoot?.querySelector("form"),l={naam:"Dehbi",geboorteplaats:"knokke-heist",hobbies:["drummen","dans"],betrokkenheid:["plannende-overheid","hogere-overheid"],vervoer:"zee",startDate:"today",file:[new File(["Hallo, world!"],"dossier.txt",{type:"text/plain",lastModified:new Date().getMilliseconds()}),new File(["Konichua, world!"],"aanbeveling.txt",{type:"text/plain",lastModified:new Date().getMilliseconds()})]};P(e,l)}};f([b,v,y,g,p,G,C,M,_,R,S]);x=N([c("vl-form-data")],x);export{V,w as a,x as b};
