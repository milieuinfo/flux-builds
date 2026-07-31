import{bR as i,Z as l,_ as e,bS as n,W as b,X as u,s as p,x as v}from"./iframe-BAEsER5t.js";import{o as r}from"./unsafe-html-BCucnB9c.js";import"./preload-helper-D9Z9MdNV.js";const o={annotation:"",label:i.LABEL_MISSING},a={...u,annotation:o.annotation,contentSlot:"",label:o.label,labelSlot:""},S={...b,annotation:{name:"annotation",description:"Dit bepaalt de ondertitel in de breadcrumb navigatie.",table:{type:{summary:e.STRING},category:l.ATTRIBUTES,defaultValue:{summary:a.annotation}},type:{name:e.STRING}},contentSlot:{name:n.CONTENT,description:"Komt onder het label.",table:{type:{summary:e.HTML},category:l.SLOTS,defaultValue:{summary:a.contentSlot}}},label:{name:"label",description:"Dit bepaalt het label in de breadcrumb navigatie.",table:{type:{summary:e.STRING},category:l.ATTRIBUTES,defaultValue:{summary:a.label}},type:{name:e.STRING,required:!0}},labelSlot:{name:n.LABEL,description:"Een klik op deze inhoud zal de kind elementen weergeven.",table:{type:{summary:e.HTML},category:l.SLOTS,defaultValue:{summary:a.labelSlot}}}},I={id:"components-block-cascader-cascader-item",title:"Components - Block/cascader/cascader-item",tags:["autodocs"],args:a,argTypes:S},t=p(a,({annotation:s,contentSlot:c,label:d,labelSlot:m})=>v`
        <vl-cascader>
            <p slot="home">Vlaanderen</p>
            <vl-breadcrumb slot="breadcrumb-placeholder">
                <vl-breadcrumb-item>Vlaanderen</vl-breadcrumb-item>
            </vl-breadcrumb>
            <vl-cascader-item label=${d} annotation=${s}>
                ${r(m)} ${r(c)}
                <vl-cascader-item label="Gemeente">
                    <vl-cascader-item label="Stad"></vl-cascader-item>
                </vl-cascader-item>
            </vl-cascader-item>
        </vl-cascader>
    `);t.storyName="vl-cascader-item - slots";t.args={contentSlot:'<p slot="content"> Het is de meest westelijk gelegen provincie van Vlaanderen en België en is de enige Belgische provincie die aan de Noordzee ligt. De provincie heeft een oppervlakte van 3.197 km² en telt ruim 1,2 miljoen inwoners. De hoofdstad van West-Vlaanderen is Brugge. </p>',label:"West-Vlaanderen",labelSlot:'<vl-title type="h5" underline="" alt="" no-space-bottom="" slot="label">Provincie: West-Vlaanderen</vl-title>'};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`story(cascaderItemArgs, ({
  annotation,
  contentSlot,
  label,
  labelSlot
}) => {
  return html\`
        <vl-cascader>
            <p slot="home">Vlaanderen</p>
            <vl-breadcrumb slot="breadcrumb-placeholder">
                <vl-breadcrumb-item>Vlaanderen</vl-breadcrumb-item>
            </vl-breadcrumb>
            <vl-cascader-item label=\${label} annotation=\${annotation}>
                \${unsafeHTML(labelSlot)} \${unsafeHTML(contentSlot)}
                <vl-cascader-item label="Gemeente">
                    <vl-cascader-item label="Stad"></vl-cascader-item>
                </vl-cascader-item>
            </vl-cascader-item>
        </vl-cascader>
    \`;
})`,...t.parameters?.docs?.source}}};const A=["CascaderItemSlots"];export{t as CascaderItemSlots,A as __namedExportsOrder,I as default};
