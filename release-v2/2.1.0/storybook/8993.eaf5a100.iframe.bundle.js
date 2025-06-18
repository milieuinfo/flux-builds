"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[8993],{"../../libs/integrations/src/form/index.ts":(e,l,o)=>{o.d(l,{cz:()=>c,Ud:()=>d,H1:()=>u});var s=o("../../libs/common/src/index.ts"),t=o("../../libs/styles/src/index.ts"),a=o("../../libs/components/src/atom/index.ts"),r=o("../../libs/components/src/form/index.ts"),n=o("../../node_modules/lit/index.js");function i(e,l,o,s){var t,a=arguments.length,r=a<3?l:null===s?s=Object.getOwnPropertyDescriptor(l,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,l,o,s);else for(var n=e.length-1;n>=0;n--)(t=e[n])&&(r=(a<3?t(r):a>3?t(l,o,r):t(l,o))||r);return a>3&&r&&Object.defineProperty(l,o,r),r}let v={key:"customError",message:"Value does not equal 'foo'",isValid:(e,l)=>!l||"foo"===l};class m extends r.Ys{static{this.formControlValidators=[...r.Ys.formControlValidators,v]}}m=i([(0,s.M1)("vl-input-field-with-foo-validator")],m);class c extends n.WF{static{(0,s.gy)([m,r.Ex,r.Fp,a.Yk])}static get styles(){return[t.oi,t.B2,(0,n.AH)`
                form {
                    margin-top: 1rem;
                    max-width: 800px;
                }

                .form-buttons {
                    vl-button:not(:last-child) {
                        margin-right: 1.4rem;
                    }
                }
            `]}static get properties(){return{success:{type:Boolean,state:!0}}}render(){return(0,n.qy)`
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
        `}onSubmit(e){e.preventDefault(),this.success=!0}onReset(){this.success=!1}constructor(...e){super(...e),this.success=!1}}c=i([(0,s.M1)("vl-form-custom-validation")],c);class u extends n.WF{static{(0,s.gy)([r.Ex,r.Ys,r.jd,r.me,r.Mz,r.Al,r.YA,r.Ib,r.ZC,r.f9,r.v7,r.Fp,a.Yk,a.Tu])}static get styles(){return[t.oi,t.B2,(0,n.AH)`
                form {
                    margin-top: 1rem;
                    max-width: 800px;
                }

                .form-buttons {
                    vl-button:not(:last-child) {
                        margin-right: 1.4rem;
                    }
                }
            `]}render(){return(0,n.qy)`
            <form id="form" class="vl-form" @submit=${this.onSubmit}>
                <div class="vl-grid">
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
                        <vl-form-message for="rrn" state="valueMissing"
                            >Gelieve een rijksregisternummer in te vullen.</vl-form-message
                        >
                        <vl-form-message for="rrn" state="patternMismatch"
                            >Gelieve een geldig rijksregisternummer in te vullen.</vl-form-message
                        >
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
                    </div>
                    <div class="vl-column vl-column--8 vl-column--s-12 vl-column--start-5 vl-column--s-start-1">
                        <div class="form-buttons">
                            <vl-button type="submit">Verstuur</vl-button>
                            <vl-button type="reset" secondary>Reset</vl-button>
                        </div>
                    </div>
                </div>
            </form>
        `}onSubmit(e){e.preventDefault(),console.log((0,r.Sl)(e.target))}constructor(...e){super(...e),this.geboorteplaatsen=[{label:"België",value:"",choices:[{label:"Hasselt",value:"hasselt"},{label:"Turnhout",value:"turnhout"},{label:"Knokke-Heist",value:"knokke-heist"},{label:"Waregem",value:"waregem"},{label:"Lier",value:"lier"}]},{label:"Puerto Rico",value:"",choices:[{label:"Rio Piedras",value:"rio piedras"}]}],this.hobbies=[{label:"Padel",value:"padel"},{label:"Dans",value:"dans"},{label:"Drummen",value:"drummen"},{label:"Zwemmen",value:"zwemmen"},{label:"Boardgames",value:"boardgames"},{label:"Fietsen",value:"fietsen"}],this.kinderenOpties=[{label:"0",value:"0"},{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"},{label:"4",value:"4"},{label:"5 of meer",value:"5 of meer"}]}}u=function(e,l,o,s){var t,a=arguments.length,r=a<3?l:null===s?s=Object.getOwnPropertyDescriptor(l,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,l,o,s);else for(var n=e.length-1;n>=0;n--)(t=e[n])&&(r=(a<3?t(r):a>3?t(l,o,r):t(l,o))||r);return a>3&&r&&Object.defineProperty(l,o,r),r}([(0,s.M1)("vl-form-demo")],u);class d extends n.WF{static{(0,s.gy)([r.Ex,r.Ys,r.Al,r.Fp,a.Yk])}static get properties(){return{parsedFormData:{type:Object,state:!0}}}static get styles(){return[t.oi,t.B2,(0,n.AH)`
                form {
                    margin-top: 1rem;
                    max-width: 800px;
                }

                .form-buttons {
                    vl-button:not(:last-child) {
                        margin-right: 1.4rem;
                    }
                }
            `]}render(){return(0,n.qy)`
            <form id="form" class="vl-form" @submit=${this.onSubmit} @reset=${this.onReset}>
                <div class="vl-grid">
                    <div class="vl-column vl-column--4">
                        <vl-form-label for="naam" label="Naam *" block></vl-form-label>
                    </div>
                    <div class="vl-column vl-column--8">
                        <vl-input-field id="naam" name="naam" block></vl-input-field>
                    </div>
                    <div class="vl-column vl-column--4">
                        <vl-form-label for="hobbies" label="Hobbies *" block></vl-form-label>
                    </div>
                    <div class="vl-column vl-column--8">
                        <vl-select-rich
                            id="hobbies"
                            name="hobbies"
                            multiple
                            deletable
                            .options=${this.hobbies}
                            placeholder="Selecteer je hobbies"
                            no-results-text="Geen hobbies gevonden"
                            no-choices-text="Geen resterende hobbies gevonden"
                        >
                        </vl-select-rich>
                        <vl-form-message for="hobbies" state="valueMissing"
                            >Gelieve een hobby te selecteren.
                        </vl-form-message>
                    </div>
                    <div class="vl-column vl-column--8 vl-column--start-5">
                        <div class="form-buttons">
                            <vl-button type="submit">Verstuur</vl-button>
                            <vl-button type="reset" secondary>Reset</vl-button>
                        </div>
                    </div>
                    ${this.parsedFormData?(0,n.qy)`
                              <div class="vl-column vl-column--4">
                                  <label class="vl-form__label">Formulier data</label>
                              </div>
                              <div class="vl-column vl-column--8">
                                  <pre>${JSON.stringify(this.parsedFormData,null,10)}</pre>
                              </div>
                          `:""}
                </div>
            </form>
        `}onSubmit(e){e.preventDefault();let l=(0,r.Sl)(e.target);this.parsedFormData=l,console.log(l)}onReset(){this.parsedFormData=null}constructor(...e){super(...e),this.hobbies=[{label:"Padel",value:"padel"},{label:"Dans",value:"dans"},{label:"Drummen",value:"drummen"},{label:"Zwemmen",value:"zwemmen"},{label:"Boardgames",value:"boardgames"},{label:"Fietsen",value:"fietsen"},{label:"Cocktails",value:"cocktails"}],this.parsedFormData=null}}d=function(e,l,o,s){var t,a=arguments.length,r=a<3?l:null===s?s=Object.getOwnPropertyDescriptor(l,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,l,o,s);else for(var n=e.length-1;n>=0;n--)(t=e[n])&&(r=(a<3?t(r):a>3?t(l,o,r):t(l,o))||r);return a>3&&r&&Object.defineProperty(l,o,r),r}([(0,s.M1)("vl-form-data")],d)}}]);