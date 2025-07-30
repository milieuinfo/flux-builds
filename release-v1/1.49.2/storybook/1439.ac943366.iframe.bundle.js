"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[1439],{"../../libs/components/src/next/side-navigation/index.ts":(t,e,i)=>{i.d(e,{N8:()=>s.N,gw:()=>a.g,kX:()=>r.k,p0:()=>l.p,qX:()=>n.q,sp:()=>o.s});var s=i("../../libs/components/src/next/side-navigation/vl-side-navigation.component.ts"),n=i("../../libs/components/src/next/side-navigation/vl-side-navigation-content.component.ts"),o=i("../../libs/components/src/next/side-navigation/vl-side-navigation-group.component.ts"),r=i("../../libs/components/src/next/side-navigation/vl-side-navigation-item.component.ts"),a=i("../../libs/components/src/next/side-navigation/vl-side-navigation-reference.component.ts");i("../../libs/components/src/next/side-navigation/vl-side-navigation-title.component.ts");var l=i("../../libs/components/src/next/side-navigation/vl-side-navigation-toggle.component.ts")},"../../libs/components/src/next/side-navigation/vl-side-navigation-content.component.ts":(t,e,i)=>{i.d(e,{q:()=>n});var s=i("../../libs/common/utilities/src/index.ts");class n extends s.jW{constructor(){super(),this.classList.add("vl-side-navigation-next__content")}createRenderRoot(){return this}}n=function(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r}([(0,s.M1)("vl-side-navigation-content-next")],n)},"../../libs/components/src/next/side-navigation/vl-side-navigation-group.component.ts":(t,e,i)=>{i.d(e,{s:()=>n});var s=i("../../libs/common/utilities/src/index.ts");class n extends s.jW{constructor(){super(),this.classList.add("vl-side-navigation-next__group"),this.setAttribute("role","list")}createRenderRoot(){return this}}n=function(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r}([(0,s.M1)("vl-side-navigation-group-next")],n)},"../../libs/components/src/next/side-navigation/vl-side-navigation-item.component.ts":(t,e,i)=>{i.d(e,{k:()=>n});var s=i("../../libs/common/utilities/src/index.ts");class n extends s.jW{constructor(){super(),this.parent=!1,this.classList.add("vl-side-navigation-next__item")}static get properties(){return{parent:{type:Boolean}}}createRenderRoot(){return this}hasStickyHeader(){return!!this.getRootNode().querySelector("vl-header")}get scrollOffset(){return this.hasStickyHeader()?43:0}get hasHashRouting(){let t=this.closest("vl-side-navigation-next");return!!t&&t.hasAttribute("has-hash-routing")}firstUpdated(){this.setAttribute("role","listitem");let t=this.querySelector("a");if(!t){console.warn("vl-side-navigation-item-next vereist een anchor element (<a>) als child.");return}t.addEventListener("click",e=>{e.preventDefault();let i=t.getAttribute("href");if(!i){console.warn("vl-side-navigation-item-next vereist een geldige href op het anchor element.");return}let n=(0,s.ZE)(this.getRootNode(),i);if(!n){console.warn(`Element met id "${i}" niet gevonden in de DOM.`);return}let o=n.getBoundingClientRect(),r=window.scrollY+o.top-this.scrollOffset;window.scrollTo({top:r,behavior:"smooth"}),this.hasHashRouting||history.pushState(null,"",i)})}}n=function(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r}([(0,s.M1)("vl-side-navigation-item-next")],n)},"../../libs/components/src/next/side-navigation/vl-side-navigation-reference.component.ts":(t,e,i)=>{i.d(e,{g:()=>n});var s=i("../../libs/common/utilities/src/index.ts");class n extends s.jW{constructor(){super(),this.setAttribute("scrollspy-content",""),this.classList.add("js-vl-scrollspy__content")}createRenderRoot(){return this}}n=function(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r}([(0,s.M1)("vl-side-navigation-reference-next")],n)},"../../libs/components/src/next/side-navigation/vl-side-navigation-title.component.ts":(t,e,i)=>{i.d(e,{HH:()=>d});var s=i("../../libs/common/utilities/src/index.ts");function n(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r}class o extends s.jW{connectedCallback(){super.connectedCallback(),this.classList.add("vl-side-navigation-next__title")}createRenderRoot(){return this}}class r extends o{}r=n([(0,s.M1)("vl-side-navigation-h1-next")],r);class a extends o{}a=n([(0,s.M1)("vl-side-navigation-h2-next")],a);class l extends o{}l=n([(0,s.M1)("vl-side-navigation-h3-next")],l);class c extends o{}c=n([(0,s.M1)("vl-side-navigation-h4-next")],c);class d extends o{}d=n([(0,s.M1)("vl-side-navigation-h5-next")],d);class v extends o{}v=n([(0,s.M1)("vl-side-navigation-h6-next")],v)},"../../libs/components/src/next/side-navigation/vl-side-navigation-toggle.component.ts":(t,e,i)=>{i.d(e,{p:()=>o});var s=i("../../libs/common/utilities/src/index.ts"),n=i("../../libs/components/src/next/icon/index.ts");(0,s.gy)([n.b]);class o extends s.jW{constructor(){super(),this.href="",this.child="",this.classList.add("vl-side-navigation-next__toggle")}static get properties(){return{href:{type:String},child:{type:String}}}createRenderRoot(){return this}hasStickyHeader(){return!!this.getRootNode().querySelector("vl-header")}get scrollOffset(){return this.hasStickyHeader()?43:0}get hasHashRouting(){let t=this.closest("vl-side-navigation-next");return!!t&&t.hasAttribute("has-hash-routing")}firstUpdated(){if(this.querySelector("a"))return;if(!this.href){console.warn("vl-side-navigation-toggle-next vereist een geldige href.");return}let t=this.childNodes,e=document.createElement("a");e.setAttribute("href",this.href);let i=document.createElement("vl-icon-next");i.setAttribute("icon","arrow-right-fat"),e.append(...t,i),this.appendChild(e),e.addEventListener("click",t=>{t.preventDefault();let e=(0,s.ZE)(this.getRootNode(),this.href);if(!e){console.warn(`Element met id "${this.href}" niet gevonden in de DOM.`);return}let i=e.getBoundingClientRect(),n=window.scrollY+i.top-this.scrollOffset;window.scrollTo({top:n,behavior:"smooth"}),this.hasHashRouting||history.pushState(null,"",this.href)})}}o=function(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r}([(0,s.M1)("vl-side-navigation-toggle-next")],o)},"../../libs/components/src/next/side-navigation/vl-side-navigation.component.ts":(t,e,i)=>{i.d(e,{N:()=>C});var s=i("../../libs/common/utilities/src/index.ts"),n=i("../../libs/common/utilities/src/css/index.ts"),o=i("../../libs/elements/src/index.ts");i("../../node_modules/@govflanders/vl-ui-util/dist/js/util.js");var r=i("../../node_modules/lit/index.js");let a=(0,r.AH)`
    .vl-side-navigation-next {
        max-height: 90vh;
    }

    .vl-side-navigation-next a {
        text-decoration: none;
    }

    .vl-side-navigation-next a:hover,
    .vl-side-navigation-next a:focus {
        text-decoration: underline;
    }

    .js-vl-scrollspy-mobile--active .vl-side-navigation-next {
        display: block !important;
    }

    .vl-side-navigation-next .js-vl-scrollspy-active {
        color: #333332;
        position: relative;
    }

    .vl-side-navigation-next .js-vl-scrollspy-active::before {
        content: '';
        height: 90%;
        display: block;
        position: absolute;
        left: -12px;
        top: 1px;
        bottom: 0;
        width: 3px;
        background-color: #5990de;
    }

    @media screen and (min-width: ${n.gT}px) {
        .vl-side-navigation-next::-webkit-scrollbar {
            width: 16px;
            height: 20px;
        }

        .vl-side-navigation-next::-webkit-scrollbar-thumb {
            height: 8px;
            border: 6px solid rgba(0, 0, 0, 0);
            border-radius: 7px;
            background-clip: padding-box;
            background-color: #e8ebee;
        }

        .vl-side-navigation-next::-webkit-scrollbar-button {
            display: none;
            width: 0;
            height: 0;
        }

        .vl-side-navigation-next::-webkit-scrollbar-corner {
            background-color: transparent;
        }

        .vl-side-navigation-next[side-navigation-scrollable] {
            max-height: none;
        }
    }

    @media screen and (max-width: ${n.gT}px) {
        .vl-side-navigation-next {
            display: none;
            min-height: 10rem;
            max-height: calc(100vh - 15rem);
            padding: 1.5rem 1rem 1.5rem 1.5rem;
            background: #fff;
            box-shadow: 0 0 2.1rem rgba(0, 0, 0, 0.3);
            animation: fade-transition 0.3s;
        }
    }

    /* side-navigation__content - content */

    .vl-side-navigation-next__content {
        font-size: 1.6rem;
    }

    @media screen and (max-width: ${n.gT}px) {
        .vl-side-navigation-next__content {
            font-size: 1.6rem;
        }
    }

    /* scrollspy__content - reference */

    .js-vl-scrollspy__content {
        border-radius: 5rem;
    }

    .js-vl-scrollspy__content .js-vl-scrollspy__toggle {
        display: none;
        cursor: pointer;
    }

    .js-vl-scrollspy__content .js-vl-scrollspy__toggle::before,
    .js-vl-scrollspy__content .js-vl-scrollspy__toggle::after {
        font-family: 'vlaanderen-icon' !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-style: normal;
        font-variant: normal;
        font-weight: normal;
        text-decoration: none;
        text-transform: none;
    }

    .js-vl-scrollspy__content .js-vl-scrollspy__toggle::before {
        content: '\\f13f';
    }

    .js-vl-scrollspy__content .js-vl-scrollspy__toggle::before {
        position: absolute;
        top: 50%;
        right: 1rem;
        transform: translateY(-50%);
        color: #fff;
        font-size: 1.1rem;
    }

    .js-vl-scrollspy__content .js-vl-scrollspy__toggle.js-vl-scrollspy__toggle--fixed {
        position: fixed;
        top: auto;
        right: auto;
        bottom: 4rem;
        left: calc(100% - 6rem);
        height: 5rem;
        border-radius: 5rem;
        font-size: 0;
        z-index: 3;
    }

    .js-vl-scrollspy__content .js-vl-scrollspy__toggle.js-vl-scrollspy__toggle--fixed::before {
        right: auto;
        left: 2rem;
        line-height: 2.7rem;
    }

    @media screen and (max-width: ${n.gT}px) {
        .js-vl-scrollspy__content {
            display: block;
            position: relative;
            padding: 4rem 0 0;
        }

        .js-vl-scrollspy__content .js-vl-scrollspy__toggle {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
        }
    }

    /* toggle */

    .vl-side-navigation-next__toggle,
    .vl-side-navigation-next__toggle a {
        display: block;
        position: relative;
        font-weight: 500;
        box-shadow: none;
        margin: 13px 0;
    }
    .vl-side-navigation-next__toggle + ul .vl-side-navigation-next__item a {
        margin: 0;
    }

    .vl-side-navigation__toggle:has(vl-icon-next) > a {
        padding-right: 2rem;
    }

    .vl-side-navigation__toggle[aria-expanded='true'] vl-icon-next::part(icon)::before {
        transform: rotate(90deg);
    }

    .vl-side-navigation-next__toggle[aria-expanded='true'] + ul {
        display: block;
        animation: side-navigation-transition 0.3s;
    }

    .vl-side-navigation-next__toggle[aria-expanded='true'] + ul .vl-side-navigation-next__toggle:first-child {
        margin-top: 0;
    }

    .vl-side-navigation-next__toggle vl-icon-next {
        font-size: 1.6rem;
        position: absolute;
        top: 50%;
        right: 0.4rem;
        transform: translateY(-50%);
    }

    .vl-side-navigation-next__toggle vl-icon-next::part(icon)::before {
        transition: transform 0.1s ease-in-out;
    }

    /* group */

    .vl-side-navigation-next__group {
        margin-bottom: 2rem;
    }

    .vl-side-navigation-next__group:last-child {
        margin-bottom: 0;
    }

    .vl-side-navigation-next__group--has-title {
        padding-top: 3rem;
        border-top-width: 3px;
    }

    .vl-side-navigation-next__group--spaced .vl-side-navigation-next__item:not(:last-child) {
        margin-bottom: 1.5rem;
    }

    .vl-side-navigation-next__group--has-title .vl-side-navigation-next__item + .vl-side-navigation-next__item {
        margin-top: 0.5rem;
    }

    @media screen and (max-width: ${n.gT}px) {
        .vl-side-navigation-next__group {
            padding: 0;
            border: 0 !important;
        }

        .vl-side-navigation-next__group--has-title {
            padding-top: 1.5rem;
        }
    }

    /* item */

    .vl-side-navigation-next__item a {
        font-weight: 500;
        display: block;
        margin: 13px 0;
    }

    .vl-side-navigation-next__item > ul {
        display: none;
        padding: 0 0 0.15rem 2rem;
    }

    .vl-side-navigation-next__item > ul.vl-side-navigation-next__subgroup--active {
        display: block;
    }

    @media screen and (max-width: ${n.gT}px) {
        .vl-side-navigation-next__item {
            padding: 0;
            font-size: 1.4rem;
        }

        .vl-side-navigation-next__item > a {
            display: block;
            margin: 0.7rem 0 1.4rem;
        }

        .vl-side-navigation-next__item:last-child > a {
            margin-bottom: 0.7rem;
        }

        .vl-side-navigation-next__item > ul {
            padding: 0 1rem 0.15rem 1.3rem;
        }
    }

    /* title */

    .vl-side-navigation-next__title {
        display: block;
        margin-bottom: 20px;
        font-size: 15px;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: #687483;
        font-weight: 500;
    }

    /* print */

    // fix voor UIG-2288: er worden in Chrome veel extra blanco pagina's toegevoegd tijdens het printen
    @media print {
        [is='vl-side-navigation-reference-next'] .resize-sensor {
            display: none !important;
        }
    }
`,l={hasHashRouting:!1};i("../../node_modules/@govflanders/vl-ui-util/src/js/breakpoint.js"),window.vl=window.vl||{};var c="js-vl-scrollspy",d="js-vl-scrollspy-active",v="js-vl-scrollspy-mobile--active",p="js-vl-scrollspy__toggle--fixed",h=document.body,g="child",u=(t,e)=>{vl.util.removeClass(t,v),vl.util.removeClass(h,vl.ns+"u-no-overflow"),vl.util.exists(e,!0,!1)&&e.setAttribute("aria-expanded",!1)},m=t=>Math.max(null==t?void 0:t.scrollHeight,null==t?void 0:t.offsetHeight,null==t?void 0:t.clientHeight),f=(t,e,i)=>{var s,n=document.createElement("div"),o=document.createElement("button"),r=document.createElement("button"),a=e.getAttribute("scrollspy-mobile");if(vl.util.addClass(n,"js-vl-scrollspy-placeholder"),vl.util.wrap(e,n),vl.util.exists(n)&&(o.setAttribute("type","button"),o.setAttribute("tabindex","0"),o.innerHTML="Navigatie sluiten",vl.util.addClass(o,"js-vl-scrollspy__close"),n.insertBefore(o,n.firstChild),s=m(i),o.addEventListener("click",t=>{t.stopPropagation(),u(n,r)}),vl.util.exists(i))){var l,c,d=0;for(r.setAttribute("type","button"),r.setAttribute("tabindex","0"),r.setAttribute("aria-expanded","false"),r.innerHTML=a||"Navigatie",vl.util.addClass(r,"js-vl-scrollspy__toggle"),vl.util.addClass(r,"vl-button"),vl.util.addClass(r,"vl-button--block"),i.appendChild(r),r.addEventListener("click",t=>{t.stopPropagation(),t.target.setAttribute("aria-expanded",!0),n.setAttribute("tabindex","1"),vl.util.addClass(n,v),vl.util.addClass(h,"vl-u-no-overflow"),o.focus()}),l=r;l;)d=0,l=l.offsetParent;d+=30,window.addEventListener("scroll",vl.util.debounce(()=>{window.pageYOffset>d&&window.pageYOffset<d+s-document.documentElement.clientHeight?vl.util.addClass(r,p):vl.util.removeClass(r,p)},50),!1),vl.util.each(t,t=>{t.addEventListener("click",i=>{t.hasAttribute(g)&&(c=e.querySelectorAll("[".concat(g,"]")),vl.util.each(c,t=>{t.setAttribute("aria-expanded","false")}),t.setAttribute("aria-expanded","true")),i.stopPropagation()})}),document.addEventListener("click",u(n,r))}};class b{constructor(){this.latestKnownScrollY=0,this.ticking=!1,this.parameters={offset:100}}_requestTick(){if(!this.ticking){var t=this;window.requestAnimationFrame(()=>{t._update()})}this.ticking=!0}_scrollSpy(){this.latestKnownScrollY=window.pageYOffset,this._requestTick()}_update(){this.ticking=!1,vl.util.each([...this.elements].reverse(),t=>{this._checkScrollSpy(t)})}_checkScrollSpy(t){var e,i,n,o,r=t.getRootNode().querySelector(".".concat("js-iwgh3-bc--visible")),a=this.scrollSpyWrapper.getAttribute("sticky-offset-top")||75,l=t.getAttribute("href");if(!("#"===l&&vl.util.exists(l))&&(!vl.util.hasClass(this.scrollSpyWrapper,"vl-side-navigation-next")&&vl.util.exists(r)&&(this.scrollSpyWrapper.style.top="".concat(parseInt(a,10)+41,"px")),i=(0,s.ZE)(t.getRootNode(),l))){var c=i.getBoundingClientRect().top,v=i.offsetHeight,p=window.innerHeight,h=c+v,u=c>=-1&&h<p||v>=p&&c<0&&h>p;if(u){var m=this.scrollSpyWrapper.querySelectorAll(".".concat("vl-side-navigation-next__item"," a"));vl.util.each(m,e=>{t!==e&&vl.util.removeClass(e,d)});var f=this.scrollSpyWrapper.querySelectorAll("[aria-expanded=true]");vl.util.each(f,e=>{e.contains(t)||e.setAttribute("aria-expanded",!1)}),vl.util.addClass(t,d),n=t.getAttribute("parent"),o=this.scrollSpyWrapper.querySelector("[".concat(g,'="').concat(n,'"]')),vl.util.exists(o)&&o.setAttribute("aria-expanded",!0)}var b=null===(e=t.parentElement)||void 0===e?void 0:e.classList.contains("vl-side-navigation-next__toggle");u&&b&&t.parentElement.setAttribute("aria-expanded","true")}}dress(t){var e=vl.util.uniqueId(),i=t.closest(".".concat("vl-region",", .").concat("vl-section-next")),s=i&&i.querySelector("[".concat("scrollspy-content","]"));vl.util.exists(s)||(s=i&&i.querySelector(".".concat("js-vl-scrollspy__content"))),this.scrollSpyWrapper=t,this.elements=t.querySelectorAll('a[href^="#"]'),t.setAttribute("scrollspy-id",e),vl.util.addClass(t,c),vl.util.each(this.elements,t=>{t.hasAttribute(g)&&t.setAttribute("aria-expanded","false")}),vl.util.exists(vl.breakpoint)&&("small"===vl.breakpoint.value||"xsmall"===vl.breakpoint.value)&&f(this.elements,t,s),window.addEventListener("scroll",()=>{this._scrollSpy()},!1),this._scrollSpy()}dressAll(){var t=document.querySelectorAll("[".concat("scrollspy","]:not([").concat("scrollspy-dressed","])"));vl.util.each(t,t=>{vl.util.addClass(t,c),this.dress(t)})}}window.vl=window.vl||{};var y="js-vl-sticky--fixed",x="js-vl-sticky--static",_="js-vl-sticky--viewport-top",w="js-vl-sticky--viewport-bottom",S="js-vl-sticky--viewport-unbottom",T="js-vl-sticky--container-bottom",k="sticky-dressed",O="sticky-offset-top";class j{constructor(){this.affixedType="STATIC",this.direction="down",this._initialized=!1,this._reStyle=!1,this.dimensions={translateY:0,topSpacing:0,lastTopSpacing:0,bottomSpacing:0,lastBottomSpacing:0,sidebarHeight:0,sidebarWidth:0,containerTop:0,containerHeight:0,viewportHeight:0,viewportTop:0,lastViewportTop:0},this._breakpoint=!1,this.minWidth=["xsmall","small"],this.previousBreakPointValue=void 0,vl.util.each(["handleEvent"],t=>{this[t]=this[t].bind(this)})}_widthBreakpoint(){vl.util.exists(vl.breakpoint)?this.updateStyleWhenSmall():this._breakpoint=!1}updateStyleWhenSmall(){this.minWidth.indexOf(vl.breakpoint.value)>=0?(this._breakpoint=!0,this.affixedType="STATIC",this.sidebar&&this.sidebar.removeAttribute("style"),this.sidebarInner&&(vl.util.removeClass(this.sidebarInner,y),this.sidebarInner.removeAttribute("style"))):this._breakpoint=!1}_calcDimensionsWithScroll(){var t=this.dimensions;t.sidebarLeft=this._offsetRelative(this.sidebar).left,t.viewportTop=document.documentElement.scrollTop||document.body.scrollTop,t.viewportBottom=t.viewportTop+t.viewportHeight,t.viewportLeft=document.documentElement.scrollLeft||document.body.scrollLeft,"function"==typeof t.topSpacing&&(t.topSpacing=parseInt(t.topSpacing(this.sidebarInner),10)||0),"function"==typeof t.bottomSpacing&&(t.bottomSpacing=parseInt(t.bottomSpacing(this.sidebarInner),10)||0),"VIEWPORT-TOP"===this.affixType?t.topSpacing<t.lastTopSpacing&&(t.translateY+=t.lastTopSpacing-t.topSpacing,this._reStyle=!0):"VIEWPORT-BOTTOM"===this.affixedType&&t.bottomSpacing<t.lastBottomSpacing&&(t.translateY+=t.lastTopSpacing-t.topSpacing,this._reStyle=!0),t.lastTopSpacing=t.topSpacing,t.lastBottomSpacing=t.bottomSpacing}_isSidebarFitsViewport(){return this.dimensions.sidebarHeight<this.dimensions.viewportHeight}_getAffixType(){var t,e,i,s=this.dimensions,n=!1;switch(this._calcDimensionsWithScroll(),t=s.sidebarHeight+s.containerTop,e=s.viewportTop+s.topSpacing,i=s.viewportBottom-s.bottomSpacing,this.direction){case"up":e<=s.containerTop?(s.translateY=0,n="STATIC"):e<=s.translateY+s.containerTop?(s.translateY=e-s.containerTop,n="VIEWPORT-TOP"):n=!this._isSidebarFitsViewport()&&s.containerTop<=e?"VIEWPORT-UNBOTTOM":"CONTAINER-BOTTOM";break;case"down":this._isSidebarFitsViewport()?s.sidebarHeight+e>=s.containerBottom?(s.translateY=s.containerBottom-t,n="CONTAINER-BOTTOM"):e>=s.containerTop&&(s.translateY=e-s.containerTop,n="VIEWPORT-TOP"):s.containerBottom<=i?(s.translateY=e-s.containerTop,n="CONTAINER-BOTTOM"):t+s.translateY<=i?(s.translateY=i-t,n="VIEWPORT-BOTTOM"):s.containerTop+s.translateY<=e&&(n="VIEWPORT-UNBOTTOM")}return s.translateY=Math.max(0,s.translateY),s.translateY=Math.min(s.containerHeight,s.translateY),s.lastViewportTop=s.viewportTop,n}_observeScrollDir(){var t,e=this.dimensions;e.lastViewportTop!==e.viewportTop&&(t="down"===this.direction?Math.min:Math.max,e.viewportTop===t(e.viewportTop,e.lastViewportTop)&&(this.direction="down"===this.direction?"up":"down"))}_updateSticky(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._running||(this._running=!0,(t=>{window.requestAnimationFrame(()=>{switch(t){case"scroll":this._calcDimensionsWithScroll(),this._observeScrollDir(),this._stickyPosition();break;case"resize":vl.util.exists(vl.breakpoint)&&this.previousBreakPointValue!==vl.breakpoint.value&&(this.previousBreakPointValue=vl.breakpoint.value,this.destroy());default:this._widthBreakpoint(),this._calcDimensions(),this._stickyPosition(!0)}this._running=!1})})(t.type))}_getTranslate(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return"translate3d(".concat(t,", ").concat(e,", ").concat(i,")")}_getStyle(t){var e,i,s;if(vl.util.exists(t)){switch(e={inner:{},outer:{}},i=this.dimensions,t){case"VIEWPORT-TOP":e.inner={top:i.topSpacing,left:i.sidebarLeft-i.viewportLeft,width:i.sidebarWidth};break;case"VIEWPORT-BOTTOM":e.inner={top:"auto",left:i.sidebarLeft,bottom:i.bottomSpacing,width:i.sidebarWidth};break;case"CONTAINER-BOTTOM":case"VIEWPORT-UNBOTTOM":s=this._getTranslate(0,i.translateY+"px"),e.inner={display:"block",transform:s}}switch(t){case"VIEWPORT-TOP":case"VIEWPORT-BOTTOM":case"VIEWPORT-UNBOTTOM":case"CONTAINER-BOTTOM":e.outer={height:i.sidebarHeight}}return e.outer=this._extend({height:""},e.outer),e.inner=this._extend({top:"",left:"",bottom:"",width:"",transform:this._getTranslate()},e.inner),e}}_extend(t,e){var i={};for(var s in t)vl.util.exists(e[s])?i[s]=e[s]:i[s]=t[s];return i}_stickyPosition(t){var e,i;if(!this._breakpoint){if(t=this._reStyle||t||!1,e=this._getAffixType(),i=this._getStyle(e),(this.affixedType!==e||t)&&e){for(var s in i.outer)if(Object.prototype.hasOwnProperty.call(i.outer,s)){var n="number"==typeof i.outer[s]?"px":"";this.sidebar.style[s]=i.outer[s]+n}for(var o in this.sidebarInner.classList.remove(x,_,w,S,T),vl.util.addClass(this.sidebarInner,"js-vl-sticky--".concat(e.toLowerCase())),i.inner)if(Object.prototype.hasOwnProperty.call(i.inner,o)){var r="number"==typeof i.inner[o]?"px":"";this.sidebarInner.style[o]=i.inner[o]+r}}else this._initialized&&(this.sidebarInner.style.left=i.inner.left);this.affixedType=e}}_bindEvents(){window.addEventListener("resize",this,{passive:!0,capture:!1}),window.addEventListener("scroll",this,{passive:!0,capture:!1}),this.sidebar.addEventListener("update.sticky",this)}handleEvent(t){this._updateSticky(t)}_offsetRelative(t){var e,i,s={left:0,top:0};do e=t&&t.offsetTop,i=t&&t.offsetLeft,isNaN(e)||(s.top+=e),isNaN(i)||(s.left+=i),t=t&&"body"===t.tagName?t.parentElement:t&&t.offsetParent;while(t)return s}_calcDimensions(){var t;this._breakpoint||((t=this.dimensions).containerTop=this._offsetRelative(this.container).top,t.containerHeight=this.container&&this.container.clientHeight,t.containerBottom=t.containerTop+t.containerHeight,t.sidebarHeight=this.sidebarInner.offsetHeight,t.sidebarWidth=this.sidebarInner.offsetWidth,t.viewportHeight=window.innerHeight,this._calcDimensionsWithScroll())}dress(t){this.placeholder=document.createElement("div"),t.setAttribute(k,!0),vl.util.addClass(this.placeholder,"js-vl-sticky--placeholder"),vl.util.wrap(t,this.placeholder),this.placeholder.style.height="".concat(this.placeholder.offsetHeight,"px"),t.hasAttribute(O)&&(this.dimensions.topSpacing=parseInt(t.getAttribute(O),10)),this.sidebar=t.parentNode,this.sidebarInner=t,this.container=this.sidebar.closest(".".concat("vl-layout",", .").concat("vl-region",", .").concat("vl-section-next",", .").concat("vl-content-block-next")),this._widthBreakpoint(),this._calcDimensions(),this._stickyPosition(),this._bindEvents(),this._initialized=!0}dressAll(){var t;vl.util.exists(vl.breakpoint)&&this.minWidth.indexOf(vl.breakpoint.value)>=0&&(this._breakpoint=!1),t=document.querySelectorAll("[".concat("sticky","]:not([").concat(k,"])")),vl.util.each(t,t=>{this.dress(t)})}destroy(){var t={inner:{},outer:{}};for(var e in window.removeEventListener("resize",this,{capture:!1}),window.removeEventListener("scroll",this,{capture:!1}),this.sidebar.removeEventListener("update.sticky",this),vl.util.removeClass(this.sidebarInner,y),this.sidebarInner.removeAttribute(k),t.inner={position:"",top:"",left:"",bottom:"",width:"",transform:""},t.outer={height:"",position:""},t.outer)Object.prototype.hasOwnProperty.call(t.outer,e)&&(this.sidebar.style[e]=t.outer[e]);for(var i in t.inner)Object.prototype.hasOwnProperty.call(t.inner,i)&&(this.sidebarInner.style[i]=t.inner[i]);this.sidebarInner.classList.remove(x,_,w,S,T),this._initialized=!1,vl.util.exists(this.placeholder)&&(this.placeholder.outerHTML=this.placeholder.innerHTML)}}var R="sticky-offset-top",A=t=>{var e=window.innerHeight-2*t.getAttribute(R);t.style.maxHeight="".concat(e,"px")};class E{dress(t){(t.hasAttribute("scrollspy")||vl.util.hasClass(t,"js-vl-scrollspy"))&&(vl.scrollspy=new b,vl.scrollspy.dress(t)),(t.hasAttribute("sticky")||vl.util.hasClass(t,"js-vl-sticky"))&&(vl.sticky=new j,vl.sticky.dress(t)),!t.hasAttribute("side-navigation-scrollable")&&t.hasAttribute(R)&&(A(t),window.addEventListener("resize",vl.util.debounce(()=>{A(t)},200)))}dressAll(){var t=document.querySelectorAll("[".concat("side-navigation",']:not([js-dress="false"])'));vl.util.exists(t)||(t=document.querySelectorAll(".".concat("js-vl-side-navigation",':not([js-dress="false"])'))),vl.util.each(t,t=>{this.dress(t)})}}"sideNavigationNext"in vl||(vl.sideNavigationNext=new E);class C extends s.jW{static{this.initializedSideNavigationId=""}constructor(){super(),this.hasHashRouting=l.hasHashRouting,this.processAttributes(),this.processClasses(),this.rerender()}static get properties(){return{hasHashRouting:{type:Boolean,attribute:"has-hash-routing"}}}createRenderRoot(){return this}hasStickyHeader(){return!!this.getRootNode().querySelector("vl-header")}get scrollOffset(){return this.hasStickyHeader()?43:0}firstUpdated(){let t=this.querySelector("a");t&&t.addEventListener("click",e=>{let i=t.getAttribute("href");if(i){e.preventDefault();let t=(0,s.ZE)(this.getRootNode(),i);if(t){history.pushState(null,"",i);let e=t.getBoundingClientRect(),s=window.scrollY+e.top-this.scrollOffset;window.scrollTo({top:s,behavior:"smooth"})}}})}connectedCallback(){super.connectedCallback();let t=this.shadowRoot||this.getRootNode();t instanceof ShadowRoot?t.adoptedStyleSheets=[...t.adoptedStyleSheets,a.styleSheet,n.B2.styleSheet,n.as.styleSheet,n.DE.styleSheet,n.mU.styleSheet]:document.adoptedStyleSheets=[...document.adoptedStyleSheets,a.styleSheet,n.mU.styleSheet],this.initialScroll()}initialScroll(){if(this.hasHashRouting)return;let t=location.hash.slice(1);if(t){let e=(0,s.ZE)(this.getRootNode(),`#${t}`);if(e){let t=e.getBoundingClientRect(),i=window.scrollY+t.top-this.scrollOffset;window.scrollTo({top:i,behavior:"smooth"})}}}rerender(){let t=this.getAttribute("side-navigation-id");t&&C.initializedSideNavigationId!==t?(C.initializedSideNavigationId=t,this.undress(),this.dress()):setTimeout(()=>{this.undress(),this.dress()},200)}dress(){vl.sideNavigationNext.dress(this),this.style.position=""}undress(){vl.util.removeClass(document.body,vl.ns+"u-no-overflow");let t=document.querySelectorAll(".js-vl-scrollspy__toggle");t.length&&vl.util.each(Array.from(t),t=>t.remove());let e=document.querySelectorAll(".js-vl-scrollspy__close");e.length&&vl.util.each(Array.from(e),t=>t.remove());let i=document.querySelector(".js-vl-scrollspy-placeholder");i&&(0,s.oA)(i)}processAttributes(){this.setAttribute("side-navigation",""),this.setAttribute("side-navigation-scrollable",""),this.setAttribute("scrollspy",""),this.setAttribute("scrollspy-mobile","Navigatie"),this.setAttribute("sticky",""),this.setAttribute("sticky-offset-top","43")}processClasses(){this.classList.add("vl-side-navigation-next"),this.classList.add("js-vl-side-navigation"),this.classList.add("js-vl-sticky"),this.classList.add("js-vl-scrollspy")}}C=function(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r}([(0,o.fD)(),(0,s.M1)("vl-side-navigation-next")],C)}}]);