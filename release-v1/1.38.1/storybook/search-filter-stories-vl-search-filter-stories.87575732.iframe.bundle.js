"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[7313],{"../../libs/elements/src/search-filter/stories/vl-search-filter.stories.ts":(e,l,t)=>{t.r(l),t.d(l,{__namedExportsOrder:()=>d,default:()=>i,searchFilterDefault:()=>o,searchFilterMobile:()=>r});var a=t("../../node_modules/lit-html/lit-html.js");t("../../libs/elements/src/form/vl-form.element.ts"),t("../../libs/elements/src/button/vl-button.element.ts"),t("../../libs/elements/src/select/vl-select.element.ts"),t("../../libs/elements/src/input-field/vl-input-field.element.ts"),t("../../libs/elements/src/search-filter/vl-search-filter.element.ts"),t("../../libs/elements/src/link/vl-link.element.ts");let i={id:"elements-search-filter",title:"Elements/search-filter",tags:["autodocs"],args:{title:"Lorem ipsum",alt:!1,mobileModal:!1,mobileModalTitle:"Lorem ipsum dolor set",maxWidth:"800px"},argTypes:{title:{name:"data-vl-title",description:"The title of this search filter.",table:{type:{summary:"string"},category:"Attributes",defaultValue:{summary:""}}},alt:{name:"data-vl-alt",description:"Alternative (transparent) background.",table:{type:{summary:"boolean"},category:"Attributes",defaultValue:{summary:"false"}}},mobileModal:{name:"data-vl-mobile-modal",description:"Activates optimized display for mobile devices.",table:{type:{summary:"boolean"},category:"Attributes",defaultValue:{summary:"false"}}},mobileModalTitle:{name:"data-vl-mobile-modal-title",description:"The title of this search filter on mobile devices. If not declared, the value of data-vl-title will be used.",table:{type:{summary:"string"},category:"Attributes",defaultValue:{summary:""}}},maxWidth:{table:{disable:!0}}}},s=({title:e,alt:l,mobileModal:t,mobileModalTitle:i,maxWidth:s})=>(0,a.qy)`
    <div style="max-width: ${s}">
        <div
            is="vl-search-filter"
            data-vl-title=${e}
            ?data-vl-alt=${l}
            ?data-vl-mobile-modal=${t}
            data-vl-mobile-modal-title=${i}
            data-cy="search-filter"
        >
            <form is="vl-form">
                <section>
                    <h2>Gegevens</h2>
                    <div>
                        <label is="vl-form-label" for="firstname">Voornaam</label>
                        <input
                            is="vl-input-field"
                            type="text"
                            name="firstname"
                            data-vl-block
                            autocomplete="given-name"
                        />
                    </div>
                    <div>
                        <label is="vl-form-label" for="name">Naam</label>
                        <input is="vl-input-field" type="text" name="name" data-vl-block autocomplete="family-name" />
                    </div>
                </section>
                <section>
                    <h2>Locatie</h2>
                    <div>
                        <label is="vl-form-label" for="vl-select-city">Stad</label>
                        <select
                            is="vl-select"
                            name="vl-select-default"
                            data-vl-select-deletable
                            data-vl-block
                            autocomplete="address-level2"
                        >
                            <option placeholder="">Kies een stad</option>
                            <option value="brussel">Brussel</option>
                            <option value="gent">Gent</option>
                        </select>
                    </div>
                    <div>
                        <label is="vl-form-label" for="vl-select-country">Land</label>
                        <select
                            is="vl-select"
                            name="vl-select-default"
                            data-vl-select-deletable
                            data-vl-block
                            autocomplete="country"
                        >
                            <option placeholder="">Kies een land</option>
                            <option value="belgië">België</option>
                        </select>
                    </div>
                </section>
                <div>
                    <button is="vl-button" type="submit">Zoeken</button>
                </div>
            </form>
            <div>
                <a href="#" is="vl-link">Zoekopdracht verwijderen</a>
            </div>
        </div>
    </div>
`,o=s.bind({});o.storyName="vl-search-filter - default",o.argTypes={mobileModal:{control:{disable:!0}},mobileModalTitle:{control:{disable:!0}}};let r=s.bind({});r.storyName="vl-search-filter - mobile",r.args={mobileModal:!0,mobileModalTitle:"Mobile title"},r.argTypes={title:{control:{disable:!0}},mobileModal:{control:{disable:!0}}},r.parameters={viewport:{defaultViewport:"mobile1"}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"searchFilterTemplate.bind({}) as any",...o.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"searchFilterTemplate.bind({}) as any",...r.parameters?.docs?.source}}};let d=["searchFilterDefault","searchFilterMobile"]}}]);