"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[3459],{"./libs/elements/src/doormat/stories/vl-doormat-image.stories.ts":(e,a,o)=>{o.r(a),o.d(a,{__namedExportsOrder:()=>r,default:()=>i,doormatWithImage:()=>n});var t=o("./node_modules/lit-html/lit-html.js");o("./libs/elements/src/doormat/vl-doormat.element.ts");let i={title:"Elements/doormat/doormat-image",tags:["autodocs"],args:{graphic:!1},argTypes:{graphic:{name:"data-vl-graphic",description:"Default doormat with a large image above.",type:{summary:"boolean"},defaultValue:{summary:"false"}}}},n=({graphic:e})=>(0,t.dy)` <div style="max-width: 780px">
    <a is="vl-doormat" href="#" data-cy="doormat">
        <h2 is="vl-doormat-title">Bouwen, wonen en energie</h2>
        <div is="vl-doormat-text">
            De overheid zet zich in om betaalbaar en kwaliteitsvol wonen voor iedereen beschikbaar te maken. Ze biedt
            sociale woningen aan, geeft premies aan wie zijn woning verbouwt en energiezuinig maakt en zoekt oplossingen
            om de stijging van de vastgoedprijzen onder controle te houden.
        </div>
        <img
            is="vl-doormat-image"
            src=${e?"https://picsum.photos/1600/400?image=1048":"https://picsum.photos/100/150?image=1048"}
            alt="Bouwen in Brussel"
            ?data-vl-graphic=${e}
            data-cy="doormat-image"
        />
    </a>
</div>`;n.storyName="vl-doormat - with image",n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:'({\n  graphic\n}: DoormatImageArgs) => html` <div style="max-width: 780px">\n    <a is="vl-doormat" href="#" data-cy="doormat">\n        <h2 is="vl-doormat-title">Bouwen, wonen en energie</h2>\n        <div is="vl-doormat-text">\n            De overheid zet zich in om betaalbaar en kwaliteitsvol wonen voor iedereen beschikbaar te maken. Ze biedt\n            sociale woningen aan, geeft premies aan wie zijn woning verbouwt en energiezuinig maakt en zoekt oplossingen\n            om de stijging van de vastgoedprijzen onder controle te houden.\n        </div>\n        <img\n            is="vl-doormat-image"\n            src=${graphic ? \'https://picsum.photos/1600/400?image=1048\' : \'https://picsum.photos/100/150?image=1048\'}\n            alt="Bouwen in Brussel"\n            ?data-vl-graphic=${graphic}\n            data-cy="doormat-image"\n        />\n    </a>\n</div>`',...n.parameters?.docs?.source}}};let r=["doormatWithImage"]}}]);