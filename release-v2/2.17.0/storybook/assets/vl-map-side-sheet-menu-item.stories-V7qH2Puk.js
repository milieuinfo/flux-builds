import{Z as a,_ as m,W as i,X as n,s as p,x as d}from"./iframe-BgD7f6Cn.js";import{o as u}from"./unsafe-html-CDi-vwb0.js";import"./vl-map-base-layer-CJ9Hplnc.js";import"./vl-map-base-layer-grb-gray--tROFEyH.js";import"./vl-map-side-sheet-ENHjjdkK.js";import"./vl-map-side-sheet-menu-item-ClZsTznf.js";import"./preload-helper-D9Z9MdNV.js";const t={...n,href:"#",title:"Terug",defaultSlot:""},o={...i,href:{name:"href",description:"De link van het menu item.",table:{type:{summary:m.URL},category:a.ATTRIBUTES,defaultValue:{summary:t.href}}},title:{name:"title",description:"De titel van het menu item.",table:{type:{summary:m.STRING},category:a.ATTRIBUTES,defaultValue:{summary:t.title}}},defaultSlot:{name:"[default]",description:"De inhoud van het menu item.",table:{type:{summary:m.HTML},category:a.SLOTS}}},T={id:"map-side-sheet-side-sheet-menu-item",title:"map/side-sheet/side-sheet-menu-item",tags:["autodocs"],args:t,argTypes:o},e=p(t,({title:s,href:r,defaultSlot:l})=>d`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-side-sheet>
                <vl-map-side-sheet-menu>
                    <vl-map-side-sheet-menu-item title=${s} href=${r}>
                        ${u(l)}
                    </vl-map-side-sheet-menu-item>
                </vl-map-side-sheet-menu>
            </vl-map-side-sheet>
        </vl-map>
    `);e.storyName="vl-map-side-sheet-menu-item default";e.args={defaultSlot:"<div>Plaats hier je zijpaneel content.</div>"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`story(mapSideSheetMenuItemArgs, ({
  title,
  href,
  defaultSlot
}) => html\`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-side-sheet>
                <vl-map-side-sheet-menu>
                    <vl-map-side-sheet-menu-item title=\${title} href=\${href}>
                        \${unsafeHTML(defaultSlot)}
                    </vl-map-side-sheet-menu-item>
                </vl-map-side-sheet-menu>
            </vl-map-side-sheet>
        </vl-map>
    \`)`,...e.parameters?.docs?.source}}};const b=["MapSideSheetMenuItemDefault"];export{e as MapSideSheetMenuItemDefault,b as __namedExportsOrder,T as default};
