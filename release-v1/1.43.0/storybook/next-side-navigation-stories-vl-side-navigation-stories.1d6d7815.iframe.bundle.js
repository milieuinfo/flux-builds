"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[229],{"../../libs/components/src/next/side-navigation/stories/vl-side-navigation.stories.ts":(e,t,i)=>{i.r(t),i.d(t,{SideNavigationDefault:()=>X,SideNavigationMobile:()=>ee,__namedExportsOrder:()=>et,default:()=>Q});var n=i("../../libs/common/utilities/src/index.ts"),o=i("../../node_modules/lit-html/lit-html.js"),a=i("../../node_modules/lit/directives/unsafe-html.js");class s extends n.jW{constructor(){super(),this.classList.add("vl-side-navigation-next__content")}createRenderRoot(){return this}}s=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s}([(0,n.M1)("vl-side-navigation-content-next")],s);class r extends n.jW{constructor(){super(),this.classList.add("vl-side-navigation-next__group")}createRenderRoot(){return this}}r=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s}([(0,n.M1)("vl-side-navigation-group-next")],r);class l extends n.jW{constructor(){super(),this.parent=!1,this.classList.add("vl-side-navigation-next__item")}static get properties(){return{parent:{type:Boolean}}}createRenderRoot(){return this}updated(){if(!this.parent){let e=this.childNodes,t=document.createElement("div");t.append(...e),this.append(t)}}}l=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s}([(0,n.M1)("vl-side-navigation-item-next")],l);class d extends n.jW{constructor(){super(),this.setAttribute("scrollspy-content",""),this.classList.add("js-vl-scrollspy__content")}createRenderRoot(){return this}}function c(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s}d=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s}([(0,n.M1)("vl-side-navigation-reference-next")],d);class u extends n.jW{connectedCallback(){super.connectedCallback(),this.classList.add("vl-side-navigation-next__title")}createRenderRoot(){return this}}class p extends u{}p=c([(0,n.M1)("vl-side-navigation-h1-next")],p);class v extends u{}v=c([(0,n.M1)("vl-side-navigation-h2-next")],v);class m extends u{}m=c([(0,n.M1)("vl-side-navigation-h3-next")],m);class h extends u{}h=c([(0,n.M1)("vl-side-navigation-h4-next")],h);class g extends u{}g=c([(0,n.M1)("vl-side-navigation-h5-next")],g);class x extends u{}x=c([(0,n.M1)("vl-side-navigation-h6-next")],x);class f extends n.jW{constructor(){super(),this.href="",this.child="",this.classList.add("vl-side-navigation-next__toggle")}static get properties(){return{href:{type:String},child:{type:String}}}createRenderRoot(){return this}updated(){let e=this.childNodes,t=document.createElement("a");t.setAttribute("href",this.href),t.append(...e),this.appendChild(t);let i=document.createElement("i");i.setAttribute("class","vl-vi vl-vi-arrow-right-fat"),this.appendChild(i)}}f=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s}([(0,n.M1)("vl-side-navigation-toggle-next")],f),i("../../node_modules/@govflanders/vl-ui-util/dist/js/util.js"),i("../../node_modules/@govflanders/vl-ui-util/src/js/breakpoint.js"),window.vl=window.vl||{};var b="js-vl-scrollspy",y="js-vl-scrollspy-active",_="js-vl-scrollspy-mobile--active",j="js-vl-scrollspy__toggle--fixed",w=document.body,k="child",T=(e,t)=>{vl.util.removeClass(e,_),vl.util.removeClass(w,vl.ns+"u-no-overflow"),vl.util.exists(t,!0,!1)&&t.setAttribute("aria-expanded",!1)},S=e=>Math.max(null==e?void 0:e.scrollHeight,null==e?void 0:e.offsetHeight,null==e?void 0:e.clientHeight),q=(e,t,i)=>{var n,o=document.createElement("div"),a=document.createElement("button"),s=document.createElement("button"),r=t.getAttribute("scrollspy-mobile");if(vl.util.addClass(o,"js-vl-scrollspy-placeholder"),vl.util.wrap(t,o),vl.util.exists(o)&&(a.setAttribute("type","button"),a.setAttribute("tabindex","0"),a.innerHTML="Navigatie sluiten",vl.util.addClass(a,"js-vl-scrollspy__close"),o.insertBefore(a,o.firstChild),n=S(i),a.addEventListener("click",e=>{e.stopPropagation(),T(o,s)}),vl.util.exists(i))){var l,d,c=0;for(s.setAttribute("type","button"),s.setAttribute("tabindex","0"),s.setAttribute("aria-expanded","false"),s.innerHTML=r||"Navigatie",vl.util.addClass(s,"js-vl-scrollspy__toggle"),vl.util.addClass(s,"vl-button"),vl.util.addClass(s,"vl-button--block"),i.appendChild(s),s.addEventListener("click",e=>{e.stopPropagation(),e.target.setAttribute("aria-expanded",!0),o.setAttribute("tabindex","1"),vl.util.addClass(o,_),vl.util.addClass(w,"vl-u-no-overflow"),a.focus()}),l=s;l;)c=0,l=l.offsetParent;c+=30,window.addEventListener("scroll",vl.util.debounce(()=>{window.pageYOffset>c&&window.pageYOffset<c+n-document.documentElement.clientHeight?vl.util.addClass(s,j):vl.util.removeClass(s,j)},50),!1),vl.util.each(e,e=>{e.addEventListener("click",i=>{e.hasAttribute(k)&&(d=t.querySelectorAll("[".concat(k,"]")),vl.util.each(d,e=>{e.setAttribute("aria-expanded","false")}),e.setAttribute("aria-expanded","true")),i.stopPropagation()})}),document.addEventListener("click",T(o,s))}};class O{constructor(){this.latestKnownScrollY=0,this.ticking=!1,this.parameters={offset:100}}_requestTick(){if(!this.ticking){var e=this;window.requestAnimationFrame(()=>{e._update()})}this.ticking=!0}_scrollSpy(){this.latestKnownScrollY=window.pageYOffset,this._requestTick()}_update(){this.ticking=!1,vl.util.each(this.elements,e=>{this._checkScrollSpy(e)})}_checkScrollSpy(e){var t,i,o,a,s,r=e.getRootNode().querySelector(".".concat("js-iwgh3-bc--visible")),l=this.scrollSpyWrapper.getAttribute("sticky-offset-top")||75,d=e.getAttribute("href");if(!("#"===d&&vl.util.exists(d))&&(!vl.util.hasClass(this.scrollSpyWrapper,"vl-side-navigation-next")&&vl.util.exists(r)&&(this.scrollSpyWrapper.style.top="".concat(parseInt(l,10)+41,"px")),t=(0,n.ZE)(e.getRootNode(),d),(i=document.documentElement.scrollTop||document.body.scrollTop)>(o={min:this._getOffsetTop(t),max:S(t)+this._getOffsetTop(t)}).min&&i<o.max)){var c=this.scrollSpyWrapper.querySelectorAll(".".concat("vl-side-navigation-next__item"," a"));vl.util.each(c,t=>{e!==t&&vl.util.removeClass(t,y)});var u=this.scrollSpyWrapper.querySelectorAll("[aria-expanded=true]");vl.util.each(u,e=>{e.setAttribute("aria-expanded",!1)}),vl.util.addClass(e,y),a=e.getAttribute("parent"),s=this.scrollSpyWrapper.querySelector("[".concat(k,'="').concat(a,'"]')),vl.util.exists(s)&&s.setAttribute("aria-expanded",!0)}}_getOffsetTop(e){var t,i,n,o,a=0;if(null!==(t=e)&&void 0!==t&&t.offsetParent)do a+=null===(i=e)||void 0===i?void 0:i.offsetTop,e=null===(n=e)||void 0===n?void 0:n.offsetParent;while(e)else a=null===(o=e)||void 0===o?void 0:o.offsetTop;return(a-=this.parameters.offset)>=0?a:0}dress(e){var t=vl.util.uniqueId(),i=e.closest(".".concat("vl-region")),n=i&&i.querySelector("[".concat("scrollspy-content","]"));vl.util.exists(n)||(n=i&&i.querySelector(".".concat("js-vl-scrollspy__content"))),this.scrollSpyWrapper=e,this.elements=e.querySelectorAll('a[href^="#"]'),e.setAttribute("scrollspy-id",t),vl.util.addClass(e,b),vl.util.each(this.elements,e=>{e.hasAttribute(k)&&e.setAttribute("aria-expanded","false")}),vl.util.exists(vl.breakpoint)&&("small"===vl.breakpoint.value||"xsmall"===vl.breakpoint.value)&&q(this.elements,e,n),window.addEventListener("scroll",()=>{this._scrollSpy()},!1),this._scrollSpy()}dressAll(){var e=document.querySelectorAll("[".concat("scrollspy","]:not([").concat("scrollspy-dressed","])"));vl.util.each(e,e=>{vl.util.addClass(e,b),this.dress(e)})}}window.vl=window.vl||{};var A="js-vl-sticky--fixed",E="js-vl-sticky--static",L="js-vl-sticky--viewport-top",N="js-vl-sticky--viewport-bottom",R="js-vl-sticky--viewport-unbottom",C="js-vl-sticky--container-bottom",P="sticky-dressed",D="sticky-offset-top";class I{constructor(){this.affixedType="STATIC",this.direction="down",this._initialized=!1,this._reStyle=!1,this.dimensions={translateY:0,topSpacing:0,lastTopSpacing:0,bottomSpacing:0,lastBottomSpacing:0,sidebarHeight:0,sidebarWidth:0,containerTop:0,containerHeight:0,viewportHeight:0,viewportTop:0,lastViewportTop:0},this._breakpoint=!1,this.minWidth=["xsmall","small"],this.previousBreakPointValue=void 0,vl.util.each(["handleEvent"],e=>{this[e]=this[e].bind(this)})}_widthBreakpoint(){vl.util.exists(vl.breakpoint)?this.updateStyleWhenSmall():this._breakpoint=!1}updateStyleWhenSmall(){this.minWidth.indexOf(vl.breakpoint.value)>=0?(this._breakpoint=!0,this.affixedType="STATIC",this.sidebar&&this.sidebar.removeAttribute("style"),this.sidebarInner&&(vl.util.removeClass(this.sidebarInner,A),this.sidebarInner.removeAttribute("style"))):this._breakpoint=!1}_calcDimensionsWithScroll(){var e=this.dimensions;e.sidebarLeft=this._offsetRelative(this.sidebar).left,e.viewportTop=document.documentElement.scrollTop||document.body.scrollTop,e.viewportBottom=e.viewportTop+e.viewportHeight,e.viewportLeft=document.documentElement.scrollLeft||document.body.scrollLeft,"function"==typeof e.topSpacing&&(e.topSpacing=parseInt(e.topSpacing(this.sidebarInner),10)||0),"function"==typeof e.bottomSpacing&&(e.bottomSpacing=parseInt(e.bottomSpacing(this.sidebarInner),10)||0),"VIEWPORT-TOP"===this.affixType?e.topSpacing<e.lastTopSpacing&&(e.translateY+=e.lastTopSpacing-e.topSpacing,this._reStyle=!0):"VIEWPORT-BOTTOM"===this.affixedType&&e.bottomSpacing<e.lastBottomSpacing&&(e.translateY+=e.lastTopSpacing-e.topSpacing,this._reStyle=!0),e.lastTopSpacing=e.topSpacing,e.lastBottomSpacing=e.bottomSpacing}_isSidebarFitsViewport(){return this.dimensions.sidebarHeight<this.dimensions.viewportHeight}_getAffixType(){var e,t,i,n=this.dimensions,o=!1;switch(this._calcDimensionsWithScroll(),e=n.sidebarHeight+n.containerTop,t=n.viewportTop+n.topSpacing,i=n.viewportBottom-n.bottomSpacing,this.direction){case"up":t<=n.containerTop?(n.translateY=0,o="STATIC"):t<=n.translateY+n.containerTop?(n.translateY=t-n.containerTop,o="VIEWPORT-TOP"):o=!this._isSidebarFitsViewport()&&n.containerTop<=t?"VIEWPORT-UNBOTTOM":"CONTAINER-BOTTOM";break;case"down":this._isSidebarFitsViewport()?n.sidebarHeight+t>=n.containerBottom?(n.translateY=n.containerBottom-e,o="CONTAINER-BOTTOM"):t>=n.containerTop&&(n.translateY=t-n.containerTop,o="VIEWPORT-TOP"):n.containerBottom<=i?(n.translateY=t-n.containerTop,o="CONTAINER-BOTTOM"):e+n.translateY<=i?(n.translateY=i-e,o="VIEWPORT-BOTTOM"):n.containerTop+n.translateY<=t&&(o="VIEWPORT-UNBOTTOM")}return n.translateY=Math.max(0,n.translateY),n.translateY=Math.min(n.containerHeight,n.translateY),n.lastViewportTop=n.viewportTop,o}_observeScrollDir(){var e,t=this.dimensions;t.lastViewportTop!==t.viewportTop&&(e="down"===this.direction?Math.min:Math.max,t.viewportTop===e(t.viewportTop,t.lastViewportTop)&&(this.direction="down"===this.direction?"up":"down"))}_updateSticky(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._running||(this._running=!0,(e=>{window.requestAnimationFrame(()=>{switch(e){case"scroll":this._calcDimensionsWithScroll(),this._observeScrollDir(),this._stickyPosition();break;case"resize":vl.util.exists(vl.breakpoint)&&this.previousBreakPointValue!==vl.breakpoint.value&&(this.previousBreakPointValue=vl.breakpoint.value,this.destroy());default:this._widthBreakpoint(),this._calcDimensions(),this._stickyPosition(!0)}this._running=!1})})(e.type))}_getTranslate(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return"translate3d(".concat(e,", ").concat(t,", ").concat(i,")")}_getStyle(e){var t,i,n;if(vl.util.exists(e)){switch(t={inner:{},outer:{}},i=this.dimensions,e){case"VIEWPORT-TOP":t.inner={top:i.topSpacing,left:i.sidebarLeft-i.viewportLeft,width:i.sidebarWidth};break;case"VIEWPORT-BOTTOM":t.inner={top:"auto",left:i.sidebarLeft,bottom:i.bottomSpacing,width:i.sidebarWidth};break;case"CONTAINER-BOTTOM":case"VIEWPORT-UNBOTTOM":n=this._getTranslate(0,i.translateY+"px"),t.inner={display:"block",transform:n}}switch(e){case"VIEWPORT-TOP":case"VIEWPORT-BOTTOM":case"VIEWPORT-UNBOTTOM":case"CONTAINER-BOTTOM":t.outer={height:i.sidebarHeight}}return t.outer=this._extend({height:""},t.outer),t.inner=this._extend({top:"",left:"",bottom:"",width:"",transform:this._getTranslate()},t.inner),t}}_extend(e,t){var i={};for(var n in e)vl.util.exists(t[n])?i[n]=t[n]:i[n]=e[n];return i}_stickyPosition(e){var t,i;if(!this._breakpoint){if(e=this._reStyle||e||!1,t=this._getAffixType(),i=this._getStyle(t),(this.affixedType!==t||e)&&t){for(var n in i.outer)if(Object.prototype.hasOwnProperty.call(i.outer,n)){var o="number"==typeof i.outer[n]?"px":"";this.sidebar.style[n]=i.outer[n]+o}for(var a in this.sidebarInner.classList.remove(E,L,N,R,C),vl.util.addClass(this.sidebarInner,"js-vl-sticky--".concat(t.toLowerCase())),i.inner)if(Object.prototype.hasOwnProperty.call(i.inner,a)){var s="number"==typeof i.inner[a]?"px":"";this.sidebarInner.style[a]=i.inner[a]+s}}else this._initialized&&(this.sidebarInner.style.left=i.inner.left);this.affixedType=t}}_bindEvents(){window.addEventListener("resize",this,{passive:!0,capture:!1}),window.addEventListener("scroll",this,{passive:!0,capture:!1}),this.sidebar.addEventListener("update.sticky",this)}handleEvent(e){this._updateSticky(e)}_offsetRelative(e){var t,i,n={left:0,top:0};do t=e&&e.offsetTop,i=e&&e.offsetLeft,isNaN(t)||(n.top+=t),isNaN(i)||(n.left+=i),e=e&&"body"===e.tagName?e.parentElement:e&&e.offsetParent;while(e)return n}_calcDimensions(){var e;this._breakpoint||((e=this.dimensions).containerTop=this._offsetRelative(this.container).top,e.containerHeight=this.container&&this.container.clientHeight,e.containerBottom=e.containerTop+e.containerHeight,e.sidebarHeight=this.sidebarInner.offsetHeight,e.sidebarWidth=this.sidebarInner.offsetWidth,e.viewportHeight=window.innerHeight,this._calcDimensionsWithScroll())}dress(e){this.placeholder=document.createElement("div"),e.setAttribute(P,!0),vl.util.addClass(this.placeholder,"js-vl-sticky--placeholder"),vl.util.wrap(e,this.placeholder),this.placeholder.style.height="".concat(this.placeholder.offsetHeight,"px"),e.hasAttribute(D)&&(this.dimensions.topSpacing=parseInt(e.getAttribute(D),10)),this.sidebar=e.parentNode,this.sidebarInner=e,this.container=this.sidebar.closest(".".concat("vl-layout",", .").concat("vl-region")),this._widthBreakpoint(),this._calcDimensions(),this._stickyPosition(),this._bindEvents(),this._initialized=!0}dressAll(){var e;vl.util.exists(vl.breakpoint)&&this.minWidth.indexOf(vl.breakpoint.value)>=0&&(this._breakpoint=!1),e=document.querySelectorAll("[".concat("sticky","]:not([").concat(P,"])")),vl.util.each(e,e=>{this.dress(e)})}destroy(){var e={inner:{},outer:{}};for(var t in window.removeEventListener("resize",this,{capture:!1}),window.removeEventListener("scroll",this,{capture:!1}),this.sidebar.removeEventListener("update.sticky",this),vl.util.removeClass(this.sidebarInner,A),this.sidebarInner.removeAttribute(P),e.inner={position:"",top:"",left:"",bottom:"",width:"",transform:""},e.outer={height:"",position:""},e.outer)Object.prototype.hasOwnProperty.call(e.outer,t)&&(this.sidebar.style[t]=e.outer[t]);for(var i in e.inner)Object.prototype.hasOwnProperty.call(e.inner,i)&&(this.sidebarInner.style[i]=e.inner[i]);this.sidebarInner.classList.remove(E,L,N,R,C),this._initialized=!1,vl.util.exists(this.placeholder)&&(this.placeholder.outerHTML=this.placeholder.innerHTML)}}var z="sticky-offset-top",W=e=>{var t=window.innerHeight-2*e.getAttribute(z);e.style.maxHeight="".concat(t,"px")};class M{dress(e){(e.hasAttribute("scrollspy")||vl.util.hasClass(e,"js-vl-scrollspy"))&&(vl.scrollspy=new O,vl.scrollspy.dress(e)),(e.hasAttribute("sticky")||vl.util.hasClass(e,"js-vl-sticky"))&&(vl.sticky=new I,vl.sticky.dress(e)),!e.hasAttribute("side-navigation-scrollable")&&e.hasAttribute(z)&&(W(e),window.addEventListener("resize",vl.util.debounce(()=>{W(e)},200)))}dressAll(){var e=document.querySelectorAll("[".concat("side-navigation",']:not([js-dress="false"])'));vl.util.exists(e)||(e=document.querySelectorAll(".".concat("js-vl-side-navigation",':not([js-dress="false"])'))),vl.util.each(e,e=>{this.dress(e)})}}"sideNavigationNext"in vl||(vl.sideNavigationNext=new M);var V=i("../../libs/elements/src/index.ts"),H=i("../../libs/common/utilities/src/css/index.ts"),B=i("../../node_modules/lit/index.js");let Y=(0,B.AH)`
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

    @media screen and (min-width: ${H.gT}px) {
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

    @media screen and (max-width: ${H.gT}px) {
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

    @media screen and (max-width: ${H.gT}px) {
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

    @media screen and (max-width: ${H.gT}px) {
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

    .vl-side-navigation-next__toggle {
        display: block;
        position: relative;
        font-weight: 500;
        box-shadow: none;
        margin: 13px 0;
    }

    .vl-side-navigation-next__toggle[aria-expanded='true'] .vl-vi::before {
        transform: rotate(90deg);
    }

    .vl-side-navigation-next__toggle[aria-expanded='true'] + ul {
        display: block;
        animation: side-navigation-transition 0.3s;
    }

    .vl-side-navigation-next__toggle[aria-expanded='true'] + ul .vl-side-navigation-next__toggle:first-child {
        margin-top: 0;
    }

    .vl-side-navigation-next__toggle .vl-vi {
        font-size: 1.6rem;
        position: absolute;
        top: 50%;
        right: 0.4rem;
        transform: translateY(-50%);
    }

    .vl-side-navigation-next__toggle .vl-vi::before {
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

    @media screen and (max-width: ${H.gT}px) {
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
    }

    .vl-side-navigation-next__item > ul {
        display: none;
        padding: 0 0 0.15rem 2rem;
    }

    .vl-side-navigation-next__item > ul.vl-side-navigation-next__subgroup--active {
        display: block;
    }

    @media screen and (max-width: ${H.gT}px) {
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
`;class U extends n.jW{static{this.initializedSideNavigationId=""}constructor(){super(),this.processAttributes(),this.processClasses(),this.rerender()}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),document.adoptedStyleSheets=[...document.adoptedStyleSheets,Y.styleSheet]}rerender(){let e=this.getAttribute("side-navigation-id");e&&U.initializedSideNavigationId!==e?(U.initializedSideNavigationId=e,this.undress(),this.dress()):setTimeout(()=>{this.undress(),this.dress()},200)}dress(){vl.sideNavigationNext.dress(this),this.style.position=""}undress(){vl.util.removeClass(document.body,vl.ns+"u-no-overflow");let e=document.querySelectorAll(".js-vl-scrollspy__toggle");e.length&&vl.util.each(Array.from(e),e=>e.remove());let t=document.querySelectorAll(".js-vl-scrollspy__close");t.length&&vl.util.each(Array.from(t),e=>e.remove());let i=document.querySelector(".js-vl-scrollspy-placeholder");i&&(0,n.oA)(i)}processAttributes(){this.setAttribute("side-navigation",""),this.setAttribute("side-navigation-scrollable",""),this.setAttribute("scrollspy",""),this.setAttribute("scrollspy-mobile","Navigatie"),this.setAttribute("sticky",""),this.setAttribute("sticky-offset-top","43")}processClasses(){this.classList.add("vl-side-navigation-next"),this.classList.add("js-vl-side-navigation"),this.classList.add("js-vl-sticky"),this.classList.add("js-vl-scrollspy")}}U=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s}([(0,V.fD)(),(0,n.M1)("vl-side-navigation-next")],U),i("../../node_modules/react/index.js");var $=i("../../node_modules/react/jsx-runtime.js"),F=i("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),G=i("../../node_modules/@storybook/blocks/dist/index.mjs");let K=`
<section is="vl-region">
    <div is="vl-layout">
        <div is="vl-grid" data-vl-is-stacked>
            <div
                is="vl-column"
                data-vl-size="8"
                data-vl-medium-size="8"
                data-vl-small-size="8"
                data-vl-extra-small-size="12"
            >
                <vl-side-navigation-reference-next>
                    <section id="content-1" is="vl-region">
                        <h2 is="vl-h2">Content 1</h2>
                    </section>
                    <section id="content-1-1" is="vl-region">
                        <h3 is="vl-h3">Content 1 - 1</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                            qui officia deserunt mollit anim id est laborum.
                        </p>
                    </section>
                    <section id="content-1-2" is="vl-region">
                        <h3 is="vl-h3">Content 1 - 2</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                            qui officia deserunt mollit anim id est laborum.
                        </p>
                    </section>
                    <section id="content-1-3" is="vl-region">
                        <h3 is="vl-h3">Content 1 - 3</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                            qui officia deserunt mollit anim id est laborum.
                        </p>
                    </section>
                    <section id="content-1-4" is="vl-region">
                        <h3 is="vl-h3">Content 1 - 4</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                            qui officia deserunt mollit anim id est laborum.
                        </p>
                    </section>
                    <section id="content-2" is="vl-region">
                        <h2 is="vl-h2">Content 2</h2>
                    </section>
                    <section id="content-2-1" is="vl-region">
                        <h3 is="vl-h3">Content 2 - 1</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                            qui officia deserunt mollit anim id est laborum.
                        </p>
                    </section>
                    <section id="content-2-2" is="vl-region">
                        <h3 is="vl-h3">Content 2 - 2</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                            qui officia deserunt mollit anim id est laborum.
                        </p>
                    </section>
                    <section id="content-2-3" is="vl-region">
                        <h3 is="vl-h3">Content 2 - 3</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                            qui officia deserunt mollit anim id est laborum.
                        </p>
                    </section>
                    <section id="content-2-4" is="vl-region">
                        <h3 is="vl-h3">Content 2 - 4</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                            qui officia deserunt mollit anim id est laborum.
                        </p>
                    </section>
                    <section id="content-3" is="vl-region">
                        <h2 is="vl-h2">Content 3</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                            qui officia deserunt mollit anim id est laborum.
                        </p>
                    </section>
                </vl-side-navigation-reference-next>
            </div>
            <div
                is="vl-column"
                data-vl-size="3"
                data-vl-medium-size="3"
                data-vl-small-size="3"
                data-vl-extra-small-size="0"
            >
                <vl-side-navigation-next aria-label="inhoudsopgave">
                    <vl-side-navigation-h5-next>Op deze pagina</vl-side-navigation-h5-next>
                    <vl-side-navigation-content-next>
                        <vl-side-navigation-group-next>
                            <vl-side-navigation-item-next parent="content-1">
                                <vl-side-navigation-toggle-next href="#content-1" child="content-1">
                                    content 1
                                </vl-side-navigation-toggle-next>
                                <ul>
                                    <vl-side-navigation-item-next>
                                        <a href="#content-1-1" parent="content-1">content 1 - 1</a>
                                    </vl-side-navigation-item-next>
                                    <vl-side-navigation-item-next>
                                        <a href="#content-1-2" parent="content-1">content 1 - 2</a>
                                    </vl-side-navigation-item-next>
                                    <vl-side-navigation-item-next>
                                        <a href="#content-1-3" parent="content-1">content 1 - 3</a>
                                    </vl-side-navigation-item-next>
                                    <vl-side-navigation-item-next>
                                        <a href="#content-1-4" parent="content-1">content 1 - 4</a>
                                    </vl-side-navigation-item-next>
                                </ul>
                            </vl-side-navigation-item-next>
                            <vl-side-navigation-item-next parent="content-2">
                                <vl-side-navigation-toggle-next href="#content-2" child="content-2">
                                    content 2
                                </vl-side-navigation-toggle-next>
                                <ul>
                                    <vl-side-navigation-item-next>
                                        <a href="#content-2-1" parent="content-2">content 2 - 1</a>
                                    </vl-side-navigation-item-next>
                                    <vl-side-navigation-item-next>
                                        <a href="#content-2-2" parent="content-2">content 2 - 2</a>
                                    </vl-side-navigation-item-next>
                                    <vl-side-navigation-item-next>
                                        <a href="#content-2-3" parent="content-2">content 2 - 3</a>
                                    </vl-side-navigation-item-next>
                                    <vl-side-navigation-item-next>
                                        <a href="#content-2-4" parent="content-2">content 2 - 4</a>
                                    </vl-side-navigation-item-next>
                                </ul>
                            </vl-side-navigation-item-next>
                            <vl-side-navigation-item-next parent="content-3">
                                <vl-side-navigation-toggle-next href="#content-3" child="content-3">
                                    content 3
                                </vl-side-navigation-toggle-next>
                            </vl-side-navigation-item-next>
                        </vl-side-navigation-group-next>
                    </vl-side-navigation-content-next>
                </vl-side-navigation-next>
            </div>
        </div>
    </div>
</section>
`;function Z(e){let t=Object.assign({h1:"h1",p:"p",code:"code",ul:"ul",li:"li",pre:"pre",h2:"h2",ol:"ol",h3:"h3",a:"a"},(0,F.RP)(),e.components),{VluxMetaData:i,VluxAlert:n}=t;return n||J("VluxAlert",!0),i||J("VluxMetaData",!0),(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h1,{id:"side-navigation---next",children:"Side Navigation - next"}),"\n",(0,$.jsx)(i,{id:"components-next-side-navigation"}),"\n",(0,$.jsx)("br",{}),"\n",(0,$.jsx)(n,{type:"info",children:`
    De v2 versie van deze component gebruik je via custom-tags, de interne implementatie is gelijk gebleven aan
    de v1 versie. In v3 zal deze component grondig herwerkt worden.
`}),"\n",(0,$.jsx)("br",{}),"\n",(0,$.jsxs)(t.p,{children:["Gebruik de ",(0,$.jsx)(t.code,{children:"side-navigation-next"})," component om een compact navigatie-element aan een pagina toe te voegen. Het vat de\ninhoud van lange pagina's samen, leidt de gebruiker door de pagina inhoud en kan ook naar externe pagina's verwijzen."]}),"\n",(0,$.jsxs)(t.p,{children:["De ",(0,$.jsx)(t.code,{children:"vl-side-navigation-next"})," wordt opgebouwd uit volgende sub-componenten:"]}),"\n",(0,$.jsxs)(t.ul,{children:["\n",(0,$.jsxs)(t.li,{children:["VlSideNavigation ",(0,$.jsx)(t.code,{children:"[vl-side-navigation-next]"})]}),"\n",(0,$.jsxs)(t.li,{children:["VlSideNavigationTitle",(0,$.jsx)("br",{}),"\n",(0,$.jsx)(t.code,{children:"[vl-side-navigation-h1-next / vl-side-navigation-h2-next / vl-side-navigation-h3-next /"}),"\n",(0,$.jsx)(t.code,{children:"vl-side-navigation-h4-next / vl-side-navigation-h5-next / vl-side-navigation-h6-next]"})]}),"\n",(0,$.jsxs)(t.li,{children:["VlSideNavigationContent ",(0,$.jsx)(t.code,{children:"[vl-side-navigation-content-next]"})]}),"\n",(0,$.jsxs)(t.li,{children:["VlSideNavigationGroup ",(0,$.jsx)(t.code,{children:"[vl-side-navigation-group-next]"})]}),"\n",(0,$.jsxs)(t.li,{children:["VlSideNavigationItem ",(0,$.jsx)(t.code,{children:"[vl-side-navigation-item-next]"})]}),"\n",(0,$.jsxs)(t.li,{children:["VlSideNavigationToggle ",(0,$.jsx)(t.code,{children:"[vl-side-navigation-toggle-next]"})]}),"\n",(0,$.jsxs)(t.li,{children:["VlSideNavigationReference ",(0,$.jsx)(t.code,{children:"[vl-side-navigation-reference-next]"})]}),"\n"]}),"\n",(0,$.jsx)(t.pre,{children:(0,$.jsx)(t.code,{className:"language-js",children:"import { VlSideNavigation } from '@domg-wc/components';\n"})}),"\n",(0,$.jsx)(t.pre,{children:(0,$.jsx)(t.code,{className:"language-html",children:"<vl-side-navigation-next></vl-side-navigation-next>\n"})}),"\n",(0,$.jsx)(G.Hl,{of:X}),"\n",(0,$.jsx)(t.h2,{id:"code-voorbeeld",children:"Code Voorbeeld"}),"\n",(0,$.jsxs)("details",{children:[(0,$.jsx)("summary",{children:"Side-navigation code voorbeeld"}),(0,$.jsx)(G.kL,{code:K,language:"html",dark:!0})]}),"\n",(0,$.jsx)(t.h2,{id:"responsive-variant",children:"Responsive variant"}),"\n",(0,$.jsxs)(t.p,{children:["Op mobiel zal de ",(0,$.jsx)(t.code,{children:"vl-side-navigation-next"})," een knop bovenaan tonen die de gebruiker de mogelijkheid geeft het\nnavigatie-menu te openen. Als de gebruiker scrollt, zal deze knop verdwijnen en komt er na een korte delay een sticky\nknop met dezelfde functionaliteit rechtsonder de pagina. Deze knop blijft zichtbaar zolang de gebruiker scrollt in een\ngebied gerelateerd tot de ",(0,$.jsx)(t.code,{children:"vl-side-navigation-reference-next"}),"."]}),"\n",(0,$.jsx)(t.h2,{id:"parent-en-child-links",children:"Parent en child links"}),"\n",(0,$.jsx)(t.p,{children:"Het is mogelijk om parent en child links te gebruiken (zie content 1 en content 2). Dit gebeurt op de volgende\nmanier (we gebruiken content 1 als voorbeeld):"}),"\n",(0,$.jsxs)(t.ol,{children:["\n",(0,$.jsxs)(t.li,{children:["Plaats op het parent VlSideNavigationItem element het attribuut ",(0,$.jsx)(t.code,{children:'parent="content-1"'})]}),"\n",(0,$.jsxs)(t.li,{children:["Plaats op het VlSideNavigationToggle element het attribuut ",(0,$.jsx)(t.code,{children:'child="content-1"'})]}),"\n",(0,$.jsxs)(t.li,{children:["Plaats op de child links het attribuut ",(0,$.jsx)(t.code,{children:'parent="content-1"'})]}),"\n"]}),"\n",(0,$.jsx)(t.h2,{id:"gekende-beperkingen",children:"Gekende beperkingen"}),"\n",(0,$.jsx)(t.h3,{id:"proza-messages",children:"Proza messages"}),"\n",(0,$.jsxs)(t.p,{children:["Door de complexiteit van de side-navigation kan het zijn dat er problemen optreden met het renderen van Proza messages.\nProza messages renderen regelmatig niet tot er een resize van de window optreedt. Om dit op te lossen kan je gebruik\nmaken van het ",(0,$.jsx)(t.code,{children:"side-navigation-id"})," attribuut, aan dit attribuut geef je een unieke string mee. Deze manier van\nwerken is een tijdelijke quick-fix, in de nieuwe versie van de side-navigation gaat dit probleem niet voorkomen."]}),"\n",(0,$.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,$.jsx)(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,$.jsx)(t.p,{children:(0,$.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-side-navigation",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Side Navigation"})}),"\n",(0,$.jsx)(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,$.jsx)(t.p,{children:(0,$.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/native-elements-vl-side-navigation--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Side Navigation"})}),"\n",(0,$.jsx)(t.p,{children:(0,$.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlSideNavigation.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Side Navigation"})}),"\n",(0,$.jsx)(t.p,{children:(0,$.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-side-navigation.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - Side Navigation"})})]})}function J(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}let Q={id:"components-next-side-navigation",title:"Components-next/side-navigation",tags:["autodocs"],parameters:{controls:{hideNoControlsWarning:!0},docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,F.RP)(),e.components);return t?(0,$.jsx)(t,Object.assign({},e,{children:(0,$.jsx)(Z,e)})):Z(e)}}},decorators:[e=>(0,o.qy)` <div style="height: 400px;">${e()}</div>`]};(0,n.gy)([U,d,s,r,l,f,g]);let X=()=>(0,o.qy)`${(0,a._)(K)}`;X.storyName="vl-side-navigation-next - default";let ee=()=>(0,o.qy)`${(0,a._)(K)}`;ee.storyName="vl-side-navigation-next - mobile",ee.parameters={viewport:{defaultViewport:"mobile1"}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:"() => html`${unsafeHTML(sideNavigationHTML)}`",...X.parameters?.docs?.source}}},ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:"() => html`${unsafeHTML(sideNavigationHTML)}`",...ee.parameters?.docs?.source}}};let et=["SideNavigationDefault","SideNavigationMobile"]},"../../node_modules/lit/directives/unsafe-html.js":(e,t,i)=>{i.d(t,{_:()=>s});var n=i("../../node_modules/lit-html/lit-html.js"),o=i("../../node_modules/lit-html/directive.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class a extends o.WL{constructor(e){if(super(e),this.et=n.s6,e.type!==o.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===n.s6||null==e)return this.vt=void 0,this.et=e;if(e===n.c0)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;var t=[e];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}}a.directiveName="unsafeHTML",a.resultType=1;var s=(0,o.u$)(a)}}]);