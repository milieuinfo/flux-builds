"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[555],{"../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(e,t,l)=>{l.d(t,{f:()=>p});var o=l("../../node_modules/react/index.js"),r=l("../../node_modules/react-dom/client.js"),n=new Map,a=({callback:e,children:t})=>{let l=(0,o.useRef)();return(0,o.useLayoutEffect)(()=>{l.current!==e&&(l.current=e,e())},[e]),t},s=async(e,t)=>{let l=await d(t);return new Promise(t=>{l.render(o.createElement(a,{callback:()=>t(null)},e))})},i=(e,t)=>{let l=n.get(e);l&&(l.unmount(),n.delete(e))},d=async e=>{let t=n.get(e);return t||(t=r.createRoot(e),n.set(e,t)),t},c=l("../../node_modules/@storybook/blocks/dist/index.mjs"),m={code:c.XA,a:c.zE,...c.Sw},u=class extends o.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:o.createElement(o.Fragment,null,t)}},p=class{constructor(){this.render=async(e,t,r)=>{let n={...m,...t?.components},a=c.kQ;return new Promise((i,d)=>{l.e(814).then(l.bind(l,"../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:l})=>s(o.createElement(u,{showException:d,key:Math.random()},o.createElement(l,{components:n},o.createElement(a,{context:e,docsParameter:t}))),r)).then(()=>i())})},this.unmount=e=>{i(e)}}}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(e,t,l)=>{l.d(t,{Hl:()=>o.Hl,W8:()=>o.W8,kL:()=>o.kL,ov:()=>o.ov}),l("../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var o=l("../../node_modules/@storybook/blocks/dist/index.mjs")},"../../libs/components/src/next/search-filter/stories/vl-search-filter.stories.ts":(e,t,l)=>{l.r(t),l.d(t,{SearchFilterDefault:()=>k,SearchFilterMobile:()=>E,__namedExportsOrder:()=>w,default:()=>g});var o=l("../../libs/common/storybook/src/index.ts"),r=l("../../libs/common/utilities/src/index.ts"),n=l("../../libs/form/src/next/form-label/index.ts"),a=l("../../libs/form/src/next/input-field/index.ts"),s=l("../../libs/form/src/next/select/index.ts"),i=l("../../node_modules/lit-html/lit-html.js"),d=l("../../libs/components/src/next/button/index.ts");l("../../node_modules/react/index.js");var c=l("../../node_modules/react/jsx-runtime.js"),m=l("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),u=l("../../node_modules/@storybook/addon-docs/dist/index.mjs");function p(e){let t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",a:"a"},(0,m.RP)(),e.components),{VluxMetaData:l,VluxAlert:o}=t;return o||b("VluxAlert",!0),l||b("VluxMetaData",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h1,{id:"search-filter---next",children:"Search Filter - next"}),"\n",(0,c.jsx)(l,{id:"components-next-search-filter"}),"\n",(0,c.jsx)("br",{}),"\n",(0,c.jsx)(o,{type:"info",children:`
    In de v2 versie van deze component gebruik je hem via de custom-tag, de interne implementatie is voor de rest
    gelijk gebleven aan deze van de v1 versie. In de toekomst zal deze component grondig herwerkt worden; in de context
    van een herwerking van de vl-table.
`}),"\n",(0,c.jsxs)(t.p,{children:["Gebruik de ",(0,c.jsx)(t.code,{children:"search-filter-next"})," component om een zoek filter te tonen op een pagina."]}),"\n",(0,c.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-js",children:"import { VlSearchFilterComponent } from '@domg-wc/components/next/search-filter';\n"})}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-html",children:"<vl-search-filter-next></vl-search-filter-next>\n"})}),"\n",(0,c.jsx)(u.Hl,{of:k}),"\n",(0,c.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,c.jsx)(u.ov,{of:k}),"\n",(0,c.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-search-filter",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Search Filter"})})]})}function b(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var v=l("../../libs/components/src/next/title/index.ts"),f=l("../../libs/components/src/next/search-filter/vl-search-filter.component.ts"),x=l("../../libs/components/src/next/search-filter/vl-search-filter.defaults.ts");let h={...o.D8,...x.v},y={...(0,o.RN)(!0),filterTitle:{name:"filter-title",description:"De titel van deze zoekfilter.",table:{type:{summary:o.QE.STRING},category:o.R6.ATTRIBUTES,defaultValue:{summary:h.filterTitle}}},alt:{name:"alt",description:"Alternatieve (transparante) achtergrond.",table:{type:{summary:o.QE.BOOLEAN},category:o.R6.ATTRIBUTES,defaultValue:{summary:h.alt}}},mobileModal:{name:"mobile-modal",description:"Activeert geoptimaliseerde weergave voor mobiele apparaten.<br>Dit wordt ook geactiveerd als de viewport kleiner is dan 768px.",table:{type:{summary:o.QE.STRING},category:o.R6.ATTRIBUTES,defaultValue:{summary:h.mobileModal}}},mobileModalTitle:{name:"mobile-modal-title",description:"Stelt de titel in van deze zoekfilter op mobiele apparaten.<br> Als die niet gedeclareerd is, wordt de waarde van filter-title gebruikt.",table:{type:{summary:o.QE.STRING},category:o.R6.ATTRIBUTES,defaultValue:{summary:h.mobileModalTitle}}}},g={id:"components-next-search-filter",title:"Components-next/search-filter",tags:["autodocs"],args:h,argTypes:y,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,m.RP)(),e.components);return t?(0,c.jsx)(t,Object.assign({},e,{children:(0,c.jsx)(p,e)})):p(e)}}}};(0,r.gy)([a.Y,n.E,s.Y,d.Y,f.E,v.I]);let j=(0,o._7)(h,({filterTitle:e,alt:t,mobileModal:l,mobileModalTitle:o})=>(0,i.qy)`
        <vl-search-filter-next
            filter-title=${e}
            ?alt=${t}
            ?mobile-modal=${l}
            mobile-modal-title=${o}
        >
            <form>
                <div>
                    <section>
                        <vl-title-next type="h2" alt no-space-bottom="">Doorzoek projecten</vl-title-next>
                        <div>
                            <vl-form-label-next
                                for="filterOpId"
                                label="Project id"
                                light
                            ></vl-form-label-next>
                            <vl-input-field-next
                                id="filterOpId"
                                type="text"
                                name="id"
                                block
                            ></vl-input-field-next>
                        </div>
                        <div>
                            <vl-form-label-next for="filterOpNaamProject" label="Project naam" light></vl-form-label-next>
                            <vl-input-field-next
                                type="text"
                                id="filterOpNaamProject"
                                name="name"
                                block
                                autocomplete="given-name"
                            ></vl-input-field-next>
                        </div><div>
                            <vl-form-label-next for="filterOpNaamManager" label="Manager familienaam" light></vl-form-label-next>
                            <vl-input-field-next
                                type="text"
                                id="filterOpNaamManager"
                                name="name"
                                block
                                autocomplete="family-name"
                            ></vl-input-field-next>
                        </div>
                    </section>
                    <section>
                        <vl-title-next type="h2" alt no-space-bottom="">Locatie</vl-title-next>
                        <div>
                            <vl-form-label-next for="vl-select-city" label="Stad" light></vl-form-label-next>
                            <vl-select-next
                                name="vl-select-city"
                                deletable
                                block
                                autocomplete="address-level2"
                                placeholder="Kies een stad"
                                .options=${[{label:"Kies een stad",value:""},{label:"Brussel",value:"brussel"},{label:"Gent",value:"gent"}]}
                            >
                            </vl-select-next>
                        </div>
                        <div>
                            <vl-form-label-next for="vl-select-country" label="Land" light></vl-form-label-next>
                            <vl-select-next
                                name="vl-select-country"
                                deletable
                                block
                                autocomplete="address-level2"
                                placeholder="Kies een land"
                                .options=${[{label:"Kies een land",value:""},{label:"België",value:"België"},{label:"Frankrijk",value:"Frankrijk"},{label:"Nederland",value:"Nederland"}]}
                            >
                            </vl-select-next>
                        </div>
                    </section>
                </div>
                <footer>
                    <vl-button-next type="submit">Zoeken</vl-button-next>
                    <vl-button-next type="reset" secondary>Reset</vl-button-next>
                </footer>
            </form>
        </vl-search-filter-next>
    `),k=j.bind({});k.storyName="vl-search-filter - default";let E=j.bind({});E.storyName="vl-search-filter - mobile",E.args={mobileModal:!0,mobileModalTitle:"Mobile title"},E.parameters={layout:"fullscreen",viewport:{defaultViewport:"mobile1"}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:"searchFilterTemplate.bind({}) as any",...k.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:"searchFilterTemplate.bind({}) as any",...E.parameters?.docs?.source}}};let w=["SearchFilterDefault","SearchFilterMobile"]},"../../node_modules/react-dom/client.js":(e,t,l)=>{var o=l("../../node_modules/react-dom/index.js");t.createRoot=o.createRoot,t.hydrateRoot=o.hydrateRoot}}]);