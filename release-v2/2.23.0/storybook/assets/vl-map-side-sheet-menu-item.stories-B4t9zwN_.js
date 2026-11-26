import{C as a,T as m,d as l,a as n,s as p}from"./stories.helper-DYHi_5m6.js";import{b as d}from"./iframe-Cv28D2NX.js";import{o as u}from"./unsafe-html-7Tp0Sqh9.js";import"./vl-map-base-layer-CmFLB2kf.js";import"./vl-map-base-layer-grb-gray-B3yI26-B.js";import"./vl-map-side-sheet-NRj0PdiO.js";import"./vl-map-side-sheet-menu-item-B713JcqH.js";import"./preload-helper-PPVm8Dsz.js";const t={...n,href:"#",title:"Terug",defaultSlot:""},o={...l,href:{name:"href",description:"De link van het menu item.",table:{type:{summary:m.URL},category:a.ATTRIBUTES,defaultValue:{summary:t.href}}},title:{name:"title",description:"De titel van het menu item.",table:{type:{summary:m.STRING},category:a.ATTRIBUTES,defaultValue:{summary:t.title}}},defaultSlot:{name:"[default]",description:"De inhoud van het menu item.",table:{type:{summary:m.HTML},category:a.SLOTS}}},b={id:"map-side-sheet-side-sheet-menu-item",title:"map/side-sheet/side-sheet-menu-item",tags:["autodocs"],args:t,argTypes:o},e=p(t,({title:s,href:r,defaultSlot:i})=>d`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-side-sheet>
                <vl-map-side-sheet-menu>
                    <vl-map-side-sheet-menu-item title=${s} href=${r}>
                        ${u(i)}
                    </vl-map-side-sheet-menu-item>
                </vl-map-side-sheet-menu>
            </vl-map-side-sheet>
        </vl-map>
    `);e.storyName="vl-map-side-sheet-menu-item default";e.args={defaultSlot:"<div>Plaats hier je zijpaneel content.</div>"};const M=["MapSideSheetMenuItemDefault"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`story(mapSideSheetMenuItemArgs, ({
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
    \`)`,...e.parameters?.docs?.source}}};export{e as MapSideSheetMenuItemDefault,M as __namedExportsOrder,b as default};
