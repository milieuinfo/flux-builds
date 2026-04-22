import{Y as t,Z as s,U as l,W as r,s as u,x as m}from"./iframe-aAtdr__L.js";import"./preload-helper-D9Z9MdNV.js";const a={...r,id:"",title:"",observeTitle:!1},c={...l,id:{name:"id",description:"De id van de tabs-pane.",control:!1,table:{type:{summary:s.STRING},category:t.ATTRIBUTES}},title:{name:"title",description:"De titel van de tabs-pane.",control:!1,table:{type:{summary:s.STRING},category:t.ATTRIBUTES}},observeTitle:{name:"observe-title",description:"Duidt aan of de titel van de tabs-pane geobserveerd wordt.",control:!1,table:{type:{summary:s.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(a.observeTitle)}}}},b={id:"components-block-tabs-tabs-pane",title:"Components - Block/tabs/tabs-pane",tags:["autodocs"],args:a,argTypes:c},e=u(a,({id:i,title:o,observeTitle:n})=>m`
        <vl-tabs>
            <vl-tabs-pane id=${i} title=${o} observe-title=${n}>
                Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat
                porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Integer posuere erat a ante
                venenatis dapibus posuere velit aliquet.
            </vl-tabs-pane>
            <vl-tabs-pane id="metro" title="Metro, tram en bus">
                Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem
                malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
            </vl-tabs-pane>
            <vl-tabs-pane id="fiets" title="Fiets">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean
                eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras justo odio, dapibus ac
                facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            </vl-tabs-pane>
        </vl-tabs>
    `);e.storyName="vl-tabs-pane - default";e.args={id:"trein",title:"Trein",observeTitle:!1};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`story(tabsPaneArgs, ({
  id,
  title,
  observeTitle
}) => html\`
        <vl-tabs>
            <vl-tabs-pane id=\${id} title=\${title} observe-title=\${observeTitle}>
                Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat
                porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Integer posuere erat a ante
                venenatis dapibus posuere velit aliquet.
            </vl-tabs-pane>
            <vl-tabs-pane id="metro" title="Metro, tram en bus">
                Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem
                malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
            </vl-tabs-pane>
            <vl-tabs-pane id="fiets" title="Fiets">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean
                eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras justo odio, dapibus ac
                facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            </vl-tabs-pane>
        </vl-tabs>
    \`)`,...e.parameters?.docs?.source}}};const v=["TabsPaneDefault"];export{e as TabsPaneDefault,v as __namedExportsOrder,b as default};
