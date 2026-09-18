"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[9988],{"../../libs/map/src/actions/map-actions.uig-css.ts":(e,i,o)=>{o.d(i,{A:()=>l});var t=o("../../node_modules/lit/index.js");let l=(0,t.AH)`
    @charset "UTF-8";
    :root {
        --vl-theme-primary-color: #ffe615;
        --vl-theme-primary-color-60: #fff073;
        --vl-theme-primary-color-70: #ffee5b;
        --vl-theme-primary-color-rgba-30: rgba(255, 230, 21, 0.3);
        --vl-theme-fg-color: #333332;
        --vl-theme-fg-color-60: #858584;
        --vl-theme-fg-color-70: #707070;
    }

    @font-face {
        font-family: 'Glyphicons Halflings';
        src: url('../fonts/bootstrap/glyphicons-halflings-regular.eot');
        src: url('../fonts/bootstrap/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'),
            url('../fonts/bootstrap/glyphicons-halflings-regular.woff2') format('woff2'),
            url('../fonts/bootstrap/glyphicons-halflings-regular.woff') format('woff'),
            url('../fonts/bootstrap/glyphicons-halflings-regular.ttf') format('truetype'),
            url('../fonts/bootstrap/glyphicons-halflings-regular.svg#glyphicons_halflingsregular') format('svg');
    }
    .glyphicon,
    .info-tooltip .close,
    .info-tooltip .icon {
        position: relative;
        top: 1px;
        display: inline-block;
        font-family: 'Glyphicons Halflings';
        font-style: normal;
        font-weight: 400;
        line-height: 1;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .glyphicon-asterisk:before {
        content: '*';
    }

    .glyphicon-plus:before {
        content: '+';
    }

    .glyphicon-euro:before,
    .glyphicon-eur:before {
        content: '€';
    }

    .glyphicon-minus:before {
        content: '−';
    }

    .glyphicon-cloud:before {
        content: '☁';
    }

    .glyphicon-envelope:before {
        content: '✉';
    }

    .glyphicon-pencil:before {
        content: '✏';
    }

    .glyphicon-glass:before {
        content: '\\e001';
    }

    .glyphicon-music:before {
        content: '\\e002';
    }

    .glyphicon-search:before {
        content: '\\e003';
    }

    .glyphicon-heart:before {
        content: '\\e005';
    }

    .glyphicon-star:before {
        content: '\\e006';
    }

    .glyphicon-star-empty:before {
        content: '\\e007';
    }

    .glyphicon-user:before {
        content: '\\e008';
    }

    .glyphicon-film:before {
        content: '\\e009';
    }

    .glyphicon-th-large:before {
        content: '\\e010';
    }

    .glyphicon-th:before {
        content: '\\e011';
    }

    .glyphicon-th-list:before {
        content: '\\e012';
    }

    .glyphicon-ok:before {
        content: '\\e013';
    }

    .glyphicon-remove:before,
    .info-tooltip .close:before {
        content: '\\e014';
    }

    .glyphicon-zoom-in:before {
        content: '\\e015';
    }

    .glyphicon-zoom-out:before {
        content: '\\e016';
    }

    .glyphicon-off:before {
        content: '\\e017';
    }

    .glyphicon-signal:before {
        content: '\\e018';
    }

    .glyphicon-cog:before {
        content: '\\e019';
    }

    .glyphicon-trash:before {
        content: '\\e020';
    }

    .glyphicon-home:before {
        content: '\\e021';
    }

    .glyphicon-file:before {
        content: '\\e022';
    }

    .glyphicon-time:before {
        content: '\\e023';
    }

    .glyphicon-road:before {
        content: '\\e024';
    }

    .glyphicon-download-alt:before {
        content: '\\e025';
    }

    .glyphicon-download:before {
        content: '\\e026';
    }

    .glyphicon-upload:before {
        content: '\\e027';
    }

    .glyphicon-inbox:before {
        content: '\\e028';
    }

    .glyphicon-play-circle:before {
        content: '\\e029';
    }

    .glyphicon-repeat:before {
        content: '\\e030';
    }

    .glyphicon-refresh:before,
    .info-tooltip .icon:before {
        content: '\\e031';
    }

    .glyphicon-list-alt:before {
        content: '\\e032';
    }

    .glyphicon-lock:before {
        content: '\\e033';
    }

    .glyphicon-flag:before {
        content: '\\e034';
    }

    .glyphicon-headphones:before {
        content: '\\e035';
    }

    .glyphicon-volume-off:before {
        content: '\\e036';
    }

    .glyphicon-volume-down:before {
        content: '\\e037';
    }

    .glyphicon-volume-up:before {
        content: '\\e038';
    }

    .glyphicon-qrcode:before {
        content: '\\e039';
    }

    .glyphicon-barcode:before {
        content: '\\e040';
    }

    .glyphicon-tag:before {
        content: '\\e041';
    }

    .glyphicon-tags:before {
        content: '\\e042';
    }

    .glyphicon-book:before {
        content: '\\e043';
    }

    .glyphicon-bookmark:before {
        content: '\\e044';
    }

    .glyphicon-print:before {
        content: '\\e045';
    }

    .glyphicon-camera:before {
        content: '\\e046';
    }

    .glyphicon-font:before {
        content: '\\e047';
    }

    .glyphicon-bold:before {
        content: '\\e048';
    }

    .glyphicon-italic:before {
        content: '\\e049';
    }

    .glyphicon-text-height:before {
        content: '\\e050';
    }

    .glyphicon-text-width:before {
        content: '\\e051';
    }

    .glyphicon-align-left:before {
        content: '\\e052';
    }

    .glyphicon-align-center:before {
        content: '\\e053';
    }

    .glyphicon-align-right:before {
        content: '\\e054';
    }

    .glyphicon-align-justify:before {
        content: '\\e055';
    }

    .glyphicon-list:before {
        content: '\\e056';
    }

    .glyphicon-indent-left:before {
        content: '\\e057';
    }

    .glyphicon-indent-right:before {
        content: '\\e058';
    }

    .glyphicon-facetime-video:before {
        content: '\\e059';
    }

    .glyphicon-picture:before {
        content: '\\e060';
    }

    .glyphicon-map-marker:before {
        content: '\\e062';
    }

    .glyphicon-adjust:before {
        content: '\\e063';
    }

    .glyphicon-tint:before {
        content: '\\e064';
    }

    .glyphicon-edit:before {
        content: '\\e065';
    }

    .glyphicon-share:before {
        content: '\\e066';
    }

    .glyphicon-check:before {
        content: '\\e067';
    }

    .glyphicon-move:before {
        content: '\\e068';
    }

    .glyphicon-step-backward:before {
        content: '\\e069';
    }

    .glyphicon-fast-backward:before {
        content: '\\e070';
    }

    .glyphicon-backward:before {
        content: '\\e071';
    }

    .glyphicon-play:before {
        content: '\\e072';
    }

    .glyphicon-pause:before {
        content: '\\e073';
    }

    .glyphicon-stop:before {
        content: '\\e074';
    }

    .glyphicon-forward:before {
        content: '\\e075';
    }

    .glyphicon-fast-forward:before {
        content: '\\e076';
    }

    .glyphicon-step-forward:before {
        content: '\\e077';
    }

    .glyphicon-eject:before {
        content: '\\e078';
    }

    .glyphicon-chevron-left:before {
        content: '\\e079';
    }

    .glyphicon-chevron-right:before {
        content: '\\e080';
    }

    .glyphicon-plus-sign:before {
        content: '\\e081';
    }

    .glyphicon-minus-sign:before {
        content: '\\e082';
    }

    .glyphicon-remove-sign:before {
        content: '\\e083';
    }

    .glyphicon-ok-sign:before {
        content: '\\e084';
    }

    .glyphicon-question-sign:before {
        content: '\\e085';
    }

    .glyphicon-info-sign:before {
        content: '\\e086';
    }

    .glyphicon-screenshot:before {
        content: '\\e087';
    }

    .glyphicon-remove-circle:before {
        content: '\\e088';
    }

    .glyphicon-ok-circle:before {
        content: '\\e089';
    }

    .glyphicon-ban-circle:before {
        content: '\\e090';
    }

    .glyphicon-arrow-left:before {
        content: '\\e091';
    }

    .glyphicon-arrow-right:before {
        content: '\\e092';
    }

    .glyphicon-arrow-up:before {
        content: '\\e093';
    }

    .glyphicon-arrow-down:before {
        content: '\\e094';
    }

    .glyphicon-share-alt:before {
        content: '\\e095';
    }

    .glyphicon-resize-full:before {
        content: '\\e096';
    }

    .glyphicon-resize-small:before {
        content: '\\e097';
    }

    .glyphicon-exclamation-sign:before {
        content: '\\e101';
    }

    .glyphicon-gift:before {
        content: '\\e102';
    }

    .glyphicon-leaf:before {
        content: '\\e103';
    }

    .glyphicon-fire:before {
        content: '\\e104';
    }

    .glyphicon-eye-open:before {
        content: '\\e105';
    }

    .glyphicon-eye-close:before {
        content: '\\e106';
    }

    .glyphicon-warning-sign:before {
        content: '\\e107';
    }

    .glyphicon-plane:before {
        content: '\\e108';
    }

    .glyphicon-calendar:before {
        content: '\\e109';
    }

    .glyphicon-random:before {
        content: '\\e110';
    }

    .glyphicon-comment:before {
        content: '\\e111';
    }

    .glyphicon-magnet:before {
        content: '\\e112';
    }

    .glyphicon-chevron-up:before {
        content: '\\e113';
    }

    .glyphicon-chevron-down:before {
        content: '\\e114';
    }

    .glyphicon-retweet:before {
        content: '\\e115';
    }

    .glyphicon-shopping-cart:before {
        content: '\\e116';
    }

    .glyphicon-folder-close:before {
        content: '\\e117';
    }

    .glyphicon-folder-open:before {
        content: '\\e118';
    }

    .glyphicon-resize-vertical:before {
        content: '\\e119';
    }

    .glyphicon-resize-horizontal:before {
        content: '\\e120';
    }

    .glyphicon-hdd:before {
        content: '\\e121';
    }

    .glyphicon-bullhorn:before {
        content: '\\e122';
    }

    .glyphicon-bell:before {
        content: '\\e123';
    }

    .glyphicon-certificate:before {
        content: '\\e124';
    }

    .glyphicon-thumbs-up:before {
        content: '\\e125';
    }

    .glyphicon-thumbs-down:before {
        content: '\\e126';
    }

    .glyphicon-hand-right:before {
        content: '\\e127';
    }

    .glyphicon-hand-left:before {
        content: '\\e128';
    }

    .glyphicon-hand-up:before {
        content: '\\e129';
    }

    .glyphicon-hand-down:before {
        content: '\\e130';
    }

    .glyphicon-circle-arrow-right:before {
        content: '\\e131';
    }

    .glyphicon-circle-arrow-left:before {
        content: '\\e132';
    }

    .glyphicon-circle-arrow-up:before {
        content: '\\e133';
    }

    .glyphicon-circle-arrow-down:before {
        content: '\\e134';
    }

    .glyphicon-globe:before {
        content: '\\e135';
    }

    .glyphicon-wrench:before {
        content: '\\e136';
    }

    .glyphicon-tasks:before {
        content: '\\e137';
    }

    .glyphicon-filter:before {
        content: '\\e138';
    }

    .glyphicon-briefcase:before {
        content: '\\e139';
    }

    .glyphicon-fullscreen:before {
        content: '\\e140';
    }

    .glyphicon-dashboard:before {
        content: '\\e141';
    }

    .glyphicon-paperclip:before {
        content: '\\e142';
    }

    .glyphicon-heart-empty:before {
        content: '\\e143';
    }

    .glyphicon-link:before {
        content: '\\e144';
    }

    .glyphicon-phone:before {
        content: '\\e145';
    }

    .glyphicon-pushpin:before {
        content: '\\e146';
    }

    .glyphicon-usd:before {
        content: '\\e148';
    }

    .glyphicon-gbp:before {
        content: '\\e149';
    }

    .glyphicon-sort:before {
        content: '\\e150';
    }

    .glyphicon-sort-by-alphabet:before {
        content: '\\e151';
    }

    .glyphicon-sort-by-alphabet-alt:before {
        content: '\\e152';
    }

    .glyphicon-sort-by-order:before {
        content: '\\e153';
    }

    .glyphicon-sort-by-order-alt:before {
        content: '\\e154';
    }

    .glyphicon-sort-by-attributes:before {
        content: '\\e155';
    }

    .glyphicon-sort-by-attributes-alt:before {
        content: '\\e156';
    }

    .glyphicon-unchecked:before {
        content: '\\e157';
    }

    .glyphicon-expand:before {
        content: '\\e158';
    }

    .glyphicon-collapse-down:before {
        content: '\\e159';
    }

    .glyphicon-collapse-up:before {
        content: '\\e160';
    }

    .glyphicon-log-in:before {
        content: '\\e161';
    }

    .glyphicon-flash:before {
        content: '\\e162';
    }

    .glyphicon-log-out:before {
        content: '\\e163';
    }

    .glyphicon-new-window:before {
        content: '\\e164';
    }

    .glyphicon-record:before {
        content: '\\e165';
    }

    .glyphicon-save:before {
        content: '\\e166';
    }

    .glyphicon-open:before {
        content: '\\e167';
    }

    .glyphicon-saved:before {
        content: '\\e168';
    }

    .glyphicon-import:before {
        content: '\\e169';
    }

    .glyphicon-export:before {
        content: '\\e170';
    }

    .glyphicon-send:before {
        content: '\\e171';
    }

    .glyphicon-floppy-disk:before {
        content: '\\e172';
    }

    .glyphicon-floppy-saved:before {
        content: '\\e173';
    }

    .glyphicon-floppy-remove:before {
        content: '\\e174';
    }

    .glyphicon-floppy-save:before {
        content: '\\e175';
    }

    .glyphicon-floppy-open:before {
        content: '\\e176';
    }

    .glyphicon-credit-card:before {
        content: '\\e177';
    }

    .glyphicon-transfer:before {
        content: '\\e178';
    }

    .glyphicon-cutlery:before {
        content: '\\e179';
    }

    .glyphicon-header:before {
        content: '\\e180';
    }

    .glyphicon-compressed:before {
        content: '\\e181';
    }

    .glyphicon-earphone:before {
        content: '\\e182';
    }

    .glyphicon-phone-alt:before {
        content: '\\e183';
    }

    .glyphicon-tower:before {
        content: '\\e184';
    }

    .glyphicon-stats:before {
        content: '\\e185';
    }

    .glyphicon-sd-video:before {
        content: '\\e186';
    }

    .glyphicon-hd-video:before {
        content: '\\e187';
    }

    .glyphicon-subtitles:before {
        content: '\\e188';
    }

    .glyphicon-sound-stereo:before {
        content: '\\e189';
    }

    .glyphicon-sound-dolby:before {
        content: '\\e190';
    }

    .glyphicon-sound-5-1:before {
        content: '\\e191';
    }

    .glyphicon-sound-6-1:before {
        content: '\\e192';
    }

    .glyphicon-sound-7-1:before {
        content: '\\e193';
    }

    .glyphicon-copyright-mark:before {
        content: '\\e194';
    }

    .glyphicon-registration-mark:before {
        content: '\\e195';
    }

    .glyphicon-cloud-download:before {
        content: '\\e197';
    }

    .glyphicon-cloud-upload:before {
        content: '\\e198';
    }

    .glyphicon-tree-conifer:before {
        content: '\\e199';
    }

    .glyphicon-tree-deciduous:before {
        content: '\\e200';
    }

    .glyphicon-cd:before {
        content: '\\e201';
    }

    .glyphicon-save-file:before {
        content: '\\e202';
    }

    .glyphicon-open-file:before {
        content: '\\e203';
    }

    .glyphicon-level-up:before {
        content: '\\e204';
    }

    .glyphicon-copy:before {
        content: '\\e205';
    }

    .glyphicon-paste:before {
        content: '\\e206';
    }

    .glyphicon-alert:before {
        content: '\\e209';
    }

    .glyphicon-equalizer:before {
        content: '\\e210';
    }

    .glyphicon-king:before {
        content: '\\e211';
    }

    .glyphicon-queen:before {
        content: '\\e212';
    }

    .glyphicon-pawn:before {
        content: '\\e213';
    }

    .glyphicon-bishop:before {
        content: '\\e214';
    }

    .glyphicon-knight:before {
        content: '\\e215';
    }

    .glyphicon-baby-formula:before {
        content: '\\e216';
    }

    .glyphicon-tent:before {
        content: '⛺';
    }

    .glyphicon-blackboard:before {
        content: '\\e218';
    }

    .glyphicon-bed:before {
        content: '\\e219';
    }

    .glyphicon-apple:before {
        content: '\\f8ff';
    }

    .glyphicon-erase:before {
        content: '\\e221';
    }

    .glyphicon-hourglass:before {
        content: '⌛';
    }

    .glyphicon-lamp:before {
        content: '\\e223';
    }

    .glyphicon-duplicate:before {
        content: '\\e224';
    }

    .glyphicon-piggy-bank:before {
        content: '\\e225';
    }

    .glyphicon-scissors:before {
        content: '\\e226';
    }

    .glyphicon-bitcoin:before {
        content: '\\e227';
    }

    .glyphicon-btc:before {
        content: '\\e227';
    }

    .glyphicon-xbt:before {
        content: '\\e227';
    }

    .glyphicon-yen:before {
        content: '¥';
    }

    .glyphicon-jpy:before {
        content: '¥';
    }

    .glyphicon-ruble:before {
        content: '₽';
    }

    .glyphicon-rub:before {
        content: '₽';
    }

    .glyphicon-scale:before {
        content: '\\e230';
    }

    .glyphicon-ice-lolly:before {
        content: '\\e231';
    }

    .glyphicon-ice-lolly-tasted:before {
        content: '\\e232';
    }

    .glyphicon-education:before {
        content: '\\e233';
    }

    .glyphicon-option-horizontal:before {
        content: '\\e234';
    }

    .glyphicon-option-vertical:before {
        content: '\\e235';
    }

    .glyphicon-menu-hamburger:before {
        content: '\\e236';
    }

    .glyphicon-modal-window:before {
        content: '\\e237';
    }

    .glyphicon-oil:before {
        content: '\\e238';
    }

    .glyphicon-grain:before {
        content: '\\e239';
    }

    .glyphicon-sunglasses:before {
        content: '\\e240';
    }

    .glyphicon-text-size:before {
        content: '\\e241';
    }

    .glyphicon-text-color:before {
        content: '\\e242';
    }

    .glyphicon-text-background:before {
        content: '\\e243';
    }

    .glyphicon-object-align-top:before {
        content: '\\e244';
    }

    .glyphicon-object-align-bottom:before {
        content: '\\e245';
    }

    .glyphicon-object-align-horizontal:before {
        content: '\\e246';
    }

    .glyphicon-object-align-left:before {
        content: '\\e247';
    }

    .glyphicon-object-align-vertical:before {
        content: '\\e248';
    }

    .glyphicon-object-align-right:before {
        content: '\\e249';
    }

    .glyphicon-triangle-right:before {
        content: '\\e250';
    }

    .glyphicon-triangle-left:before {
        content: '\\e251';
    }

    .glyphicon-triangle-bottom:before {
        content: '\\e252';
    }

    .glyphicon-triangle-top:before {
        content: '\\e253';
    }

    .glyphicon-console:before {
        content: '\\e254';
    }

    .glyphicon-superscript:before {
        content: '\\e255';
    }

    .glyphicon-subscript:before {
        content: '\\e256';
    }

    .glyphicon-menu-left:before {
        content: '\\e257';
    }

    .glyphicon-menu-right:before {
        content: '\\e258';
    }

    .glyphicon-menu-down:before {
        content: '\\e259';
    }

    .glyphicon-menu-up:before {
        content: '\\e260';
    }

    .ol-zoom {
        padding: 0;
        margin: 0;
        border: 1px #cbd2da solid;
        border-radius: 0;
        background: white;
        top: initial;
        left: initial;
        bottom: 10px;
        right: 10px;
    }
    .ol-zoom .ol-zoom-in,
    .ol-zoom .ol-zoom-out {
        color: #333332;
        background: white;
        width: 3.5rem;
        height: 3.5rem;
        margin: 0;
        border-radius: 0;
    }
    .ol-zoom .ol-zoom-in:hover,
    .ol-zoom .ol-zoom-out:hover {
        background-color: white;
        cursor: pointer;
    }
    .ol-zoom .ol-zoom-in:focus,
    .ol-zoom .ol-zoom-out:focus {
        outline: 0;
        border: 0.1rem solid #ffc515;
        box-shadow: inset 0 0 0 0.1rem #ffc515;
        background-color: white;
    }

    .ol-full-screen {
        padding: 0;
        margin: 0;
        border: 1px #cbd2da solid;
        border-radius: 0;
        background: white;
        top: initial;
        left: initial;
        right: 10px;
        bottom: 92px;
    }
    .ol-full-screen .ol-full-screen-false,
    .ol-full-screen .ol-full-screen-true {
        color: #333332;
        background: white;
        width: 3.5rem;
        height: 3.5rem;
        margin: 0;
        border-radius: 0;
    }
    .ol-full-screen .ol-full-screen-false:hover,
    .ol-full-screen .ol-full-screen-true:hover {
        background-color: white;
        cursor: pointer;
    }
    .ol-full-screen .ol-full-screen-false:focus,
    .ol-full-screen .ol-full-screen-true:focus {
        outline: 0;
        border: 0.1rem solid #ffc515;
        box-shadow: inset 0 0 0 0.1rem #ffc515;
        background-color: white;
    }

    .ol-scale-line {
        border: 1px solid #cbd2da;
        border-radius: 0;
        background-color: white;
    }
    .ol-scale-line .ol-scale-line-inner {
        border-color: #333332;
        color: #333332;
    }

    .ol-overviewmap {
        background: white;
        border: 1px solid #cbd2da;
        border-radius: 0;
        width: 7.2rem;
        height: 7.2rem;
        top: initial;
        left: initial;
        bottom: 10px;
        right: 55px;
    }
    .ol-overviewmap:not(.ol-collapsed) {
        background: white;
    }
    .ol-overviewmap .ol-overviewmap-map {
        border: none;
        cursor: pointer;
        box-sizing: border-box;
        margin: 0;
        width: 6.6rem;
        height: 6.6rem;
    }
    .ol-overviewmap .ol-overviewmap-map .ol-overviewmap-box {
        border: 1px dotted #333332;
    }
    .ol-overviewmap button {
        display: none;
    }

    .info-tooltip {
        position: relative;
        color: white;
        background-color: black;
        padding: 5px 10px;
        opacity: 0.8;
        border-radius: 5px;
        font-size: 0.8em;
    }
    .info-tooltip .icon {
        -animation: spin 0.7s infinite linear;
        -webkit-animation: spin2 0.7s infinite linear;
    }
    .info-tooltip .close {
        position: absolute;
        top: 5px;
        right: 5px;
        color: white;
        opacity: 0.6;
        font-size: 10px;
    }
    .info-tooltip .close:hover {
        opacity: 1;
    }
    @-webkit-keyframes spin2 {
        from {
            -webkit-transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(360deg);
        }
    }
    @keyframes spin {
        from {
            transform: scale(1) rotate(0deg);
        }
        to {
            transform: scale(1) rotate(360deg);
        }
    }
    .info-tooltip .arrow {
        position: absolute;
        display: block;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
        left: 50%;
        margin-left: -6px;
        border-bottom-width: 0;
        border-top-color: black;
        bottom: -11px;
        border-width: 6px;
    }

    .measure-tooltip {
        position: absolute;
        color: white;
        background-color: black;
        padding: 5px 10px;
        opacity: 0.8;
        border-radius: 5px;
        font-size: 0.8em;
        bottom: 20px;
        white-space: nowrap;
        pointer-events: none;
    }

    .ol-dragbox {
        border-color: rgb(2, 85, 204);
    }
`},"../../libs/map/src/actions/map/custom-map.ts":(e,i,o)=>{o.d(i,{A:()=>y});var t=o("../../node_modules/ol/control/Rotate.js"),l=o("../../node_modules/ol/control/ScaleLine.js"),r=o("../../node_modules/ol/control/Zoom.js"),a=o("../../node_modules/ol/control/OverviewMap.js"),n=o("../../node_modules/ol/extent.js"),w=o("../../node_modules/ol/format/GeoJSON.js"),s=o("../../node_modules/ol/Overlay.js"),T=o("../../node_modules/ol/proj.js"),M=o("../../node_modules/ol/View.js"),d=o("../../libs/map/src/utils/capabilities.ts"),x=o("../../libs/map/src/actions/map/map-with-actions.ts");class y extends x.y{constructor(e={}){e.layers=[e.customLayers.baseLayerGroup,e.customLayers.overlayGroup],e.controls=[new t.A,new l.A({minWidth:128})].concat(e.controls||[]),e.view=new M.Ay({extent:e.projection.getExtent(),projection:e.projection,maxZoom:16,minZoom:2,center:(0,n.q1)(e.projection.getExtent()),zoom:2,...e.view}),super(e),(void 0===e.defaultZoom||!0===e.defaultZoom)&&this.addControl(new r.A),this.projection=e.projection,this.view=e.view,this.geoJSONFormat=new w.A({dataProjection:this.projection}),this.custom=e.custom||{},e.customLayers.overviewMapLayers&&e.customLayers.overviewMapLayers.length>0&&this.createOverviewMapControl(e),this.baseLayers=e.customLayers.baseLayerGroup.getLayers().getArray(),this.maxZoomViewToExtent=e.maxZoomViewToExtent||16}createOverviewMapControl(e){let i=this,o=e=>{let o=e=>{let o=0;return i.baseLayers.forEach((e,i)=>{e.getVisible()&&(o=i)}),e[o+1>=e.length?0:o+1]};e||(e=o(i.baseLayers)),i.baseLayers.forEach(i=>i.setVisible(i==e));let t=i.overviewMapControl.getOverviewMap().getLayers().getArray(),l=o(t);t.forEach(e=>e.setVisible(e==l)),i.render(),i.overviewMapControl.getOverviewMap().render()};this.overviewMapLayers=e.customLayers.overviewMapLayers,this.overviewMapControl=new a.A({layers:this.overviewMapLayers,collapsed:!1,view:new M.Ay({projection:this.projection})}),this.overviewMapControl.element.addEventListener("click",()=>o(),!1),this.custom.toggleBaseLayer=o}addBaseLayerAndOverlayMapLayer(e,i){e.setVisible(0===this.baseLayers.length),this.baseLayers.push(e),this.overviewMapControl?this.overviewMapControl.getOverviewMap().getLayers().getArray().push(i):this.createOverviewMapControl({customLayers:{overviewMapLayers:[i]}}),i.setVisible(2===this.overviewMapControl.getOverviewMap().getLayers().getArray().length)}getBaseLayers(){return this.getLayerGroup().getLayers().getArray()[0].getLayers().getArray()}getOverlayLayers(){return this._getOverlayLayersCollection().getArray()}_getOverlayLayersCollection(){return this.getLayerGroup().getLayers().getArray()[1].getLayers()}addOverlayLayer(e){this._getOverlayLayersCollection().push(e)}removeOverlayLayer(e){this._getOverlayLayersCollection().remove(e)}initializeView(e,i){let o=(0,T.DI)((0,d.jr)(),(0,d.VV)(),this.projection.getCode());this.getView().fit(o,{size:this.getSize()}),this.zoomViewToExtent(this.getView(),e,i)}zoomToExtent(e,i){this.zoomViewToExtent(this.getView(),e,i)}zoomViewToExtent(e,i,o){i&&e.fit(i,{size:this.getSize()}),(o||this.maxZoomViewToExtent)&&e.getZoom()>(o||this.maxZoomViewToExtent)&&e.setZoom(o||this.maxZoomViewToExtent)}zoomToGeometry(e,i){this.zoomToExtent(this.geoJSONFormat.readFeatures({type:"FeatureCollection",features:[{type:"Feature",geometry:e}]})[0].getGeometry().getExtent(),i)}showInfo(e,i){let o=document.createElement("div");o.setAttribute("class","close"),o.onclick=()=>event.currentTarget.parentNode.remove();let t=document.createElement("div");t.innerHTML=`<span class='content'>${e}</span><div class='arrow'></div>`,t.setAttribute("class","info-tooltip"),t.appendChild(o);let l=new s.A({offset:[0,-5],positioning:"bottom-center",element:t});this.addOverlay(l),l.setPosition(i),t.parentNode.style.position="fixed"}}},"../../libs/map/src/actions/map/map-with-actions.ts":(e,i,o)=>{o.d(i,{y:()=>a});var t=o("../../node_modules/ol/interaction/defaults.js"),l=o("../../node_modules/ol/Map.js"),r=o("../../libs/map/src/vl-map.model.ts");class a extends l.A{static get CLICK_COUNT_TIMEOUT(){return 300}constructor(e={}){let{disableRotation:i,disableMouseWheelZoom:o,disableKeyboard:l}=e,r=!i,a=(0,t.N)({altShiftDragRotate:r,pinchRotate:r,mouseWheelZoom:!o,keyboard:!l});if(e&&e.interactions&&e.interactions.forEach(e=>a.push(e)),e.interactions=a,super(e),this.actions=[],e.actions.forEach(e=>{this.addAction(e)}),setTimeout(()=>{this.activateDefaultAction()}),!e.disableEscapeKey){let e=e=>{if(e&&e.keyCode&&27===e.keyCode){let e=this.getCurrentActiveAction();e?e.stop&&e.stop():this.activateDefaultAction()}};document.body.removeEventListener("keydown",e),document.body.addEventListener("keydown",e)}}getDefaultActiveAction(){return this.actions&&this.actions.find(e=>e.element._defaultActive)}getCurrentActiveAction(){return this.actions&&this.actions.find(e=>e.element._active)}getActionWithIdentifier(e){return this.actions&&this.actions.find(i=>i.element.identifier===e)}getControlsOfType(e){return this.getControls().getArray().filter(i=>i.get("element")&&i.get("element").type===e)}getActionControls(){return this.getControlsOfType(r.$c.ACTION)}getActionControlWithIdentifier(e){let i=this.getActionControls();return i&&i.find(i=>i.get("element")&&i.get("element").identifier===e)}getLayerActions(e){return this.actions&&this.actions.filter(i=>i.layer===e)}activateAction(e){this.timeout=setTimeout(()=>{e.activate()},a.CLICK_COUNT_TIMEOUT)}deactivateCurrentAction(){let e=this.getCurrentActiveAction();e&&(e.deactivate(),clearTimeout(this.timeout))}addAction(e){this.actions.push(e),e.map=this,e.interactions.forEach(i=>{this.addInteraction(i),i.map=e.map})}removeAction(e){this.getCurrentActiveAction()===e&&(e===this.getDefaultActiveAction()?e.element.deactivate():this.activateDefaultAction()),e.interactions.forEach(e=>{this.removeInteraction(e)}),e.element.reset(),this.actions.splice(this.actions.indexOf(e),1)}activateDefaultAction(){let e=this.getDefaultActiveAction();e&&e.element.activate()}}},"../../libs/map/src/components/baselayer/vl-map-base-layer.ts":(e,i,o)=>{o.d(i,{j:()=>K});var t=o("../../libs/common/utilities/src/index.ts"),l=o("../../node_modules/ol/extent.js"),r=o("../../node_modules/ol/format/GeoJSON.js"),a=o("../../node_modules/ol/layer/Tile.js"),n=o("../../node_modules/ol/layer/Vector.js"),w=o("../../node_modules/ol/layer/Group.js"),s=o("../../node_modules/ol/loadingstrategy.js"),T=o("../../node_modules/ol/source/WMTS.js"),M=o("../../node_modules/ol/source/Vector.js"),d=o("../../node_modules/ol/source/XYZ.js"),x=o("../../node_modules/ol/source/TileWMS.js"),y=o("../../node_modules/ol/style/Fill.js"),c=o("../../node_modules/ol/style/Stroke.js"),m=o("../../node_modules/ol/style/Style.js"),h=o("../../node_modules/ol/tilegrid/WMTS.js"),p=o("../../libs/map/src/utils/capabilities.ts"),g=o("../../libs/map/src/vl-map.ts");class K extends(0,t.H3)(HTMLElement){connectedCallback(){super.connectedCallback(),this._configureMap()}get type(){return this.getAttribute("type")||"wmts"}get url(){return this.getAttribute("url")||this._url}set url(e){this._url=e}get layer(){return this.getAttribute("layer")||this._layer}set layer(e){this._layer=e}get title(){return this.getAttribute("title")||this._title}set title(e){this._title=e}get _map(){if(this.parentNode)return this.parentNode.map}get _projection(){if(this.parentNode&&this.parentNode instanceof g.v)return this.parentNode._projection}get _WMTSSource(){return this._wmtsSource=this._wmtsSource||this._createWMTSSource(),this._wmtsSource}get _vectorSource(){return this._createdVectorSource=this._createdVectorSource||this._createVectorSource(),this._createdVectorSource}get _hasBackgroundLayer(){return this.hasAttribute("background-layer")}get _backgroundType(){return this.getAttribute("background-type")||void 0}get _backgroundOptions(){if(!this._hasBackgroundLayer)return;if(this._hasBackgroundLayer&&!this._backgroundType&&!this.hasAttribute("background-options"))return{url:"https://cartoweb.wms.ngi.be/service",params:{FORMAT:"image/png",LAYERS:"crossborder,topo"}};let e=this.getAttribute("background-options");try{return JSON.parse(e)}catch(e){console.warn("Invalid background-options JSON:",e);return}}get _extent(){return this._projection?.getExtent()}get _matrixSet(){switch(this._projection?.getCode()){case(0,p.$G)():return"BPL2008VL";case(0,p.Wc)():return"BPL72VL";default:return"WGS84VL"}}_configureMap(){this._map&&this._map.addBaseLayerAndOverlayMapLayer(this._createBaseLayer(),this._createBaseLayer())}_createWMTSSource(){let e=l.RG(this._extent)/256,i=Array(16),o=Array(16);for(let t=0;t<16;++t)i[t]=e/Math.pow(2,t),o[t]=t;return new T.A({url:this.url,layer:this.layer,matrixSet:this._matrixSet,format:"image/png",projection:this._projection,tileGrid:new h.A({extent:this._extent,origin:l.Py(this._extent),resolutions:i,matrixIds:o}),style:""})}_createVectorSource(){let e=this;return new M.A({format:new r.A({dataProjection:e._projection}),url:()=>`${e.url}&typeName=${e.layer}`,strategy:s.Qk})}_createBackgroundLayer(){let e=this._backgroundOptions;switch(this._backgroundType){case"xyz":return new a.A({source:new d.A(e),opacity:.3});case"wmts":return new a.A({source:new T.A(e),opacity:.3});case"vector":return new n.A({source:new M.A(e),opacity:.3});default:return new a.A({source:new x.A(e),opacity:.3})}}_createBaseLayer(){let e=this.hasAttribute("background-layer"),i=[];switch(e&&i.push(this._createBackgroundLayer()),this.type){case"wmts":i.push(new a.A({title:this.title,type:"base",source:this._WMTSSource}));break;case"wfs":i.push(new n.A({source:this._vectorSource,style:new m.Ay({stroke:new c.A({color:"rgba(0, 0, 0, 1.0)",width:1}),fill:new y.A({color:"rgba(255, 0, 0, 1.0)"})})}));break;default:return null}return new w.A({layers:i})}}K=function(e,i,o,t){var l,r=arguments.length,a=r<3?i:null===t?t=Object.getOwnPropertyDescriptor(i,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,i,o,t);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(a=(r<3?l(a):r>3?l(i,o,a):l(i,o))||a);return r>3&&a&&Object.defineProperty(i,o,a),a}([(0,t.M1)("vl-map-baselayer")],K)},"../../libs/map/src/components/layer-style/vl-map-layer-style.ts":(e,i,o)=>{o.d(i,{t:()=>T});var t=o("../../libs/common/utilities/src/index.ts"),l=o("../../node_modules/ol/Feature.js"),r=o("../../node_modules/ol/style/Fill.js"),a=o("../../node_modules/ol/style/Stroke.js"),n=o("../../node_modules/ol/style/Style.js"),w=o("../../node_modules/ol/style/Text.js"),s=o("../../libs/map/src/utils/ol-util.ts");class T extends(0,t.H3)(HTMLElement){connectedCallback(){super.connectedCallback(),this.mapElement=this.closest("vl-map"),this._setStyleOnParent()}get name(){return this.getAttribute("data-vl-name")}get color(){return this.getAttribute("color")||"rgba(2, 85, 204, 0.8)"}get borderColor(){return this.getAttribute("border-color")||"rgba(2, 85, 204, 1)"}get borderSize(){return this.getAttribute("border-size")||1}get textColor(){return this.getAttribute("text-color")||"#FFF"}get textBackgroundColor(){return this.getAttribute("text-background-color")||"rgba(0, 0, 0, 0)"}get textBorderColor(){return this.getAttribute("text-border-color")||"rgba(255, 255, 255, 0)"}get textBorderSize(){return Number(this.getAttribute("text-border-size")||1)}get textSize(){return this.getAttribute("text-size")||"10px"}get textFeatureAttributeName(){return this.getAttribute("text-feature-attribute-name")||null}get textOffsetX(){return this.getAttribute("text-offset-x")||0}get textOffsetY(){return this.getAttribute("text-offset-y")||0}get invalid(){return this.hasAttribute("invalid")}get style(){return(e,i)=>this.appliesTo(e)?this._styleFunction(e):null}get _styleFunction(){return e=>{let i=e instanceof l.A&&e?.getGeometry();if(this.invalid||!this.mapElement.invalidGeometryAllowed&&i&&s.P.geometryIsInvalid(i))return new n.Ay({fill:new r.A({color:"rgba(210, 55, 60, 0.3)"}),stroke:new a.A({color:"#d2373c",width:2,lineDash:[4,4]}),text:this._getTextStyle(e)});let o={fill:new r.A({color:this.color}),stroke:new a.A({color:this.borderColor,width:this.borderSize}),text:this._getTextStyle(e)};return new n.Ay(o)}}_getTextStyle(e,i){return new w.A({font:`${this.textSize} "Flanders Art Sans",sans-serif`,text:this.featureLabelFunction(e),fill:new r.A({color:i||this.textColor}),stroke:new a.A({color:this.textBorderColor,width:this.textBorderSize}),backgroundFill:new r.A({color:this.textBackgroundColor}),offsetX:this.textOffsetX,offsetY:this.textOffsetY})}appliesTo(e){return!0}get featureLabelFunction(){return this.textFeatureAttributeName?e=>e.get(this.textFeatureAttributeName):()=>""}_featureZIndex(e){return e&&e.get?e.get("zIndex"):0}_hasUniqueStyles(e){let i=this._getStyles(e);return i&&this._containsObject(i)&&this._areIdentical(i)}_containsStyle(e){return this._containsObject(e.map(e=>e.getStyle()))}_getStyles(e){return e.map(e=>e.getStyle())}_containsObject(e){return e.some(e=>!!e)}_areIdentical(e){return e.every((e,i,o)=>e==o[0])}_setStyleOnParent(){this.parentElement&&customElements.whenDefined(this.parentElement.tagName.toLowerCase()).then(()=>{this.parentElement.style=this})}constructor(...e){super(...e),this.mapElement=null}}T=function(e,i,o,t){var l,r=arguments.length,a=r<3?i:null===t?t=Object.getOwnPropertyDescriptor(i,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,i,o,t);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(a=(r<3?l(a):r>3?l(i,o,a):l(i,o))||a);return r>3&&a&&Object.defineProperty(i,o,a),a}([(0,t.M1)("vl-map-layer-style")],T)},"../../libs/map/src/components/layer/vl-map-layer.ts":(e,i,o)=>{o.d(i,{M:()=>a});var t=o("../../libs/common/utilities/src/index.ts"),l=o("../../libs/map/src/vl-map.ts"),r=o("../../libs/map/src/components/layer-style/vl-map-layer-style.ts");class a extends(0,t.H3)(HTMLElement){static get _observedAttributes(){return["hidden","opacity"]}constructor(){super(),a._counter=0,this.__counter=++a._counter,this.__ready=!1}async connectedCallback(){super.connectedCallback(),this.__setIsLayerMarkerAttribute(),this.mapElement&&(await this.mapElement.ready,this.mapElement.addLayer(this._layer)),this.__styleCount=this.getStyleCount(),this.__markAsReady()}getStyleCount(){let e=this.querySelectorAll(":scope > *");return Array.from(e)?.filter(e=>e instanceof r.t).length}disconnectedCallback(){this._layer?.dispose()}static get _counter(){return this.__counter}static set _counter(e){this.__counter=e}get layer(){return this._layer}get source(){return this._source}get visible(){return this._layer?.getVisible()}get title(){return this.get("title")}set visible(e){this._layer?.setVisible(e),this.rerender(),this.mapElement&&this.mapElement.handleLayerVisibilityChange(this)}get opacity(){return this._layer?.getOpacity()}set opacity(e){this._layer?.setOpacity(e)}get mapElement(){return this.parentNode&&this.parentNode instanceof l.v?this.parentNode:null}get ready(){return this.__ready}get _name(){return this.getAttribute("name")||"kaartlaag"}get _minResolution(){return this.getAttribute("min-resolution")||0}get _maxResolution(){return this.getAttribute("max-resolution")||1/0}get _opacity(){return Number(this.getAttribute("data-vl-opacity")||1)}get _visible(){return void 0==this.getAttribute("hidden")}get _styles(){return this.__styles.length>this.__styleCount&&(this.__styles=Array.from(new Set(this.__styles))),this.__styles}set _styles(e){this.__styles=e}get(e){return this._layer.get(e)}rerender(){this.mapElement&&this.mapElement.rerender()}isVisibleAtResolution(e){let i=parseFloat(this._layer.getMinResolution()),o=parseFloat(this._layer.getMaxResolution());return e>=i&&e<o}_hiddenChangedCallback(e,i){this._layer&&(this.visible=void 0==i)}_opacityChangedCallback(e,i){this.opacity=Number(i||1)}__setIsLayerMarkerAttribute(){this.dataset.vlIsLayer=!0}__markAsReady(){this.__ready=!0}}},"../../libs/map/src/utils/capabilities.ts":(e,i,o)=>{o.d(i,{jr:()=>x,$G:()=>w,Cz:()=>n,Wc:()=>M,nv:()=>T,VV:()=>y});var t=o("../../node_modules/ol/format/WMTSCapabilities.js");let l=`<?xml version="1.0" encoding="utf-8"?><Capabilities xsi:schemaLocation="http://www.opengis.net/wmts/1.0 http://schemas.opengis.net/wmts/1.0/wmtsGetCapabilities_response.xsd http://inspire.ec.europa.eu/schemas/inspire_vs_ows11/1.0 http://inspire.ec.europa.eu/schemas/inspire_vs_ows11/1.0/inspire_vs_ows_11.xsd" version="1.0.0" xmlns="http://www.opengis.net/wmts/1.0" xmlns:ows="http://www.opengis.net/ows/1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:gml="http://www.opengis.net/gml" xmlns:inspire_vs="http://inspire.ec.europa.eu/schemas/inspire_vs_ows11/1.0" xmlns:inspire_common="http://inspire.ec.europa.eu/schemas/common/1.0">
  <ows:ServiceIdentification>
    <ows:Title>WMTS GRB</ows:Title>
    <ows:Abstract>Web Map Tile Service voor het Grootschalig Referentiebestand (GRB)</ows:Abstract>
    <ows:Keywords>
      <ows:Keyword>GRB</ows:Keyword>
      <ows:Keyword>Grootschalig ReferentieBestand</ows:Keyword>
      <ows:Keyword>Basiskaart Vlaanderen</ows:Keyword>
      <ows:Keyword>actualisatie</ows:Keyword>
        <ows:Keyword>administratieve grens</ows:Keyword>
        <ows:Keyword>adres</ows:Keyword>
        <ows:Keyword>afdak</ows:Keyword>
        <ows:Keyword>afrit</ows:Keyword>
        <ows:Keyword>afrit</ows:Keyword>
        <ows:Keyword>anomalie</ows:Keyword>
        <ows:Keyword>as built</ows:Keyword>
        <ows:Keyword>atlas</ows:Keyword>
        <ows:Keyword>autosnelweg</ows:Keyword>
        <ows:Keyword>baangracht</ows:Keyword>
        <ows:Keyword>basiskaart</ows:Keyword>
        <ows:Keyword>beek</ows:Keyword>
        <ows:Keyword>bergplaats</ows:Keyword>
        <ows:Keyword>berm</ows:Keyword>
        <ows:Keyword>bevaarbaar</ows:Keyword>
        <ows:Keyword>boordsteen</ows:Keyword>
        <ows:Keyword>bouwsel</ows:Keyword>
        <ows:Keyword>brandkraan</ows:Keyword>
        <ows:Keyword>brug</ows:Keyword>
        <ows:Keyword>bushok</ows:Keyword>
        <ows:Keyword>cabine</ows:Keyword>
        <ows:Keyword>chemisch</ows:Keyword>
        <ows:Keyword>circulatiezone</ows:Keyword>
        <ows:Keyword>constructie</ows:Keyword>
        <ows:Keyword>corridor</ows:Keyword>
        <ows:Keyword>CRAB</ows:Keyword>
        <ows:Keyword>deksel</ows:Keyword>
        <ows:Keyword>dienstweg</ows:Keyword>
        <ows:Keyword>drempel</ows:Keyword>
        <ows:Keyword>elektriciteitspaal</ows:Keyword>
        <ows:Keyword>fietsstalling</ows:Keyword>
        <ows:Keyword>fietsweg</ows:Keyword>
        <ows:Keyword>FLEPOS</ows:Keyword>
        <ows:Keyword>flitspaal</ows:Keyword>
        <ows:Keyword>fontein</ows:Keyword>
        <ows:Keyword>fout</ows:Keyword>
        <ows:Keyword>garagetoegang</ows:Keyword>
        <ows:Keyword>GDF</ows:Keyword>
        <ows:Keyword>gebouw</ows:Keyword>
        <ows:Keyword>gemeentegrens</ows:Keyword>
        <ows:Keyword>gemeenteterritorium</ows:Keyword>
        <ows:Keyword>gevel</ows:Keyword>
        <ows:Keyword>gevellijn</ows:Keyword>
        <ows:Keyword>gevelpunt</ows:Keyword>
        <ows:Keyword>golfbreker</ows:Keyword>
        <ows:Keyword>gracht</ows:Keyword>
        <ows:Keyword>GRB gis</ows:Keyword>
        <ows:Keyword>GRB</ows:Keyword>
        <ows:Keyword>GRB-databank</ows:Keyword>
        <ows:Keyword>GRB-gis</ows:Keyword>
        <ows:Keyword>grenspaal</ows:Keyword>
        <ows:Keyword>grootschalig</ows:Keyword>
        <ows:Keyword>havendam</ows:Keyword>
        <ows:Keyword>huisnummer</ows:Keyword>
        <ows:Keyword>hydrografisch</ows:Keyword>
        <ows:Keyword>informatiesysteem</ows:Keyword>
        <ows:Keyword>inrit</ows:Keyword>
        <ows:Keyword>installatie</ows:Keyword>
        <ows:Keyword>kadaster</ows:Keyword>
        <ows:Keyword>kadastergrootschalig</ows:Keyword>
        <ows:Keyword>kadastraal</ows:Keyword>
        <ows:Keyword>kantsteen</ows:Keyword>
        <ows:Keyword>keermuur</ows:Keyword>
        <ows:Keyword>koeltoren</ows:Keyword>
        <ows:Keyword>kopmuur</ows:Keyword>
        <ows:Keyword>kunstwerk</ows:Keyword>
        <ows:Keyword>lokaal</ows:Keyword>
        <ows:Keyword>longitudinaal</ows:Keyword>
        <ows:Keyword>loopbrug</ows:Keyword>
        <ows:Keyword>luik</ows:Keyword>
        <ows:Keyword>mast</ows:Keyword>
        <ows:Keyword>meer</ows:Keyword>
        <ows:Keyword>meerpaal</ows:Keyword>
        <ows:Keyword>metro</ows:Keyword>
        <ows:Keyword>monument</ows:Keyword>
        <ows:Keyword>mutatie</ows:Keyword>
        <ows:Keyword>muur</ows:Keyword>
        <ows:Keyword>NIS</ows:Keyword>
        <ows:Keyword>nisocde</ows:Keyword>
        <ows:Keyword>nummer</ows:Keyword>
        <ows:Keyword>onbevaarbaar</ows:Keyword>
        <ows:Keyword>onderdak</ows:Keyword>
        <ows:Keyword>onderkeldering</ows:Keyword>
        <ows:Keyword>onverharde zone</ows:Keyword>
        <ows:Keyword>onvolledigheid</ows:Keyword>
        <ows:Keyword>oppervaktewater</ows:Keyword>
        <ows:Keyword>oprit</ows:Keyword>
        <ows:Keyword>opslagtank</ows:Keyword>
        <ows:Keyword>overbrugging</ows:Keyword>
        <ows:Keyword>paal bovenleiding telefoonpaal</ows:Keyword>
        <ows:Keyword>paal</ows:Keyword>
        <ows:Keyword>parallelweg</ows:Keyword>
        <ows:Keyword>perceel</ows:Keyword>
        <ows:Keyword>pijler</ows:Keyword>
        <ows:Keyword>planimetrisch</ows:Keyword>
        <ows:Keyword>praatpaal</ows:Keyword>
        <ows:Keyword>putdeksel</ows:Keyword>
        <ows:Keyword>rail</ows:Keyword>
        <ows:Keyword>referentiebestand</ows:Keyword>
        <ows:Keyword>rijbaan</ows:Keyword>
        <ows:Keyword>rijstrook</ows:Keyword>
        <ows:Keyword>rivier</ows:Keyword>
        <ows:Keyword>rooster</ows:Keyword>
        <ows:Keyword>rotonde</ows:Keyword>
        <ows:Keyword>schoorsteen</ows:Keyword>
        <ows:Keyword>silo</ows:Keyword>
        <ows:Keyword>sloot</ows:Keyword>
        <ows:Keyword>spoor</ows:Keyword>
        <ows:Keyword>spoorbaan</ows:Keyword>
        <ows:Keyword>spoorrail</ows:Keyword>
        <ows:Keyword>spoorstaaf</ows:Keyword>
        <ows:Keyword>staketsel</ows:Keyword>
        <ows:Keyword>standbeeld</ows:Keyword>
        <ows:Keyword>stootband</ows:Keyword>
        <ows:Keyword>straat</ows:Keyword>
        <ows:Keyword>straatnaam</ows:Keyword>
        <ows:Keyword>strandhoofd</ows:Keyword>
        <ows:Keyword>surplusgebied</ows:Keyword>
        <ows:Keyword>telefooncabine</ows:Keyword>
        <ows:Keyword>terrein</ows:Keyword>
        <ows:Keyword>territorium</ows:Keyword>
        <ows:Keyword>toegang</ows:Keyword>
        <ows:Keyword>tram</ows:Keyword>
        <ows:Keyword>tramrail</ows:Keyword>
        <ows:Keyword>tramweg</ows:Keyword>
        <ows:Keyword>transport</ows:Keyword>
        <ows:Keyword>trap</ows:Keyword>
        <ows:Keyword>trein</ows:Keyword>
        <ows:Keyword>tunnelmond</ows:Keyword>
        <ows:Keyword>uitrit</ows:Keyword>
        <ows:Keyword>vangrail</ows:Keyword>
        <ows:Keyword>ventweg</ows:Keyword>
        <ows:Keyword>verbinding</ows:Keyword>
        <ows:Keyword>verdieping</ows:Keyword>
        <ows:Keyword>verharding</ows:Keyword>
        <ows:Keyword>verhoging</ows:Keyword>
        <ows:Keyword>verkeer</ows:Keyword>
        <ows:Keyword>verkeersdrempel</ows:Keyword>
        <ows:Keyword>verkeerslicht</ows:Keyword>
        <ows:Keyword>verkeersplateau</ows:Keyword>
        <ows:Keyword>verkeersplein</ows:Keyword>
        <ows:Keyword>verlaging</ows:Keyword>
        <ows:Keyword>verlichtingspaal</ows:Keyword>
        <ows:Keyword>VHA</ows:Keyword>
        <ows:Keyword>vijver</ows:Keyword>
        <ows:Keyword>VMM</ows:Keyword>
        <ows:Keyword>voetpad</ows:Keyword>
        <ows:Keyword>wandelweg</ows:Keyword>
        <ows:Keyword>water</ows:Keyword>
        <ows:Keyword>watergang</ows:Keyword>
        <ows:Keyword>waterloop</ows:Keyword>
        <ows:Keyword>waterloopsegment</ows:Keyword>
        <ows:Keyword>wateroppervlak</ows:Keyword>
        <ows:Keyword>watertoren</ows:Keyword>
        <ows:Keyword>waterweg</ows:Keyword>
        <ows:Keyword>weg</ows:Keyword>
        <ows:Keyword>wegaanhorigheid</ows:Keyword>
        <ows:Keyword>wegbaan</ows:Keyword>
        <ows:Keyword>weggebruiker</ows:Keyword>
        <ows:Keyword>weginrichting</ows:Keyword>
        <ows:Keyword>wegknoop</ows:Keyword>
        <ows:Keyword>wegsegment</ows:Keyword>
    </ows:Keywords>
    <ows:ServiceType>OGC:WMTS</ows:ServiceType>
    <ows:ServiceTypeVersion>1.0.0</ows:ServiceTypeVersion>
    <ows:Fees>Het gebruik van de service is kosteloos.</ows:Fees>
    <ows:AccessConstraints>Het gebruiksrecht is te vinden op https://www.vlaanderen.be/digitaal-vlaanderen/onze-oplossingen/geografische-webdiensten/gebruiksrecht-en-privacyverklaring-geografische-webdiensten.</ows:AccessConstraints>
  </ows:ServiceIdentification>
  <ows:ServiceProvider>
    <ows:ProviderName>agentschap Digitaal Vlaanderen</ows:ProviderName>
    <ows:ProviderSite xlink:href="https://www.vlaanderen.be/digitaal-vlaanderen" />
    <ows:ServiceContact>
      <ows:ContactInfo>
        <ows:Phone>
          <ows:Voice>+32 9 276 15 00</ows:Voice>
        </ows:Phone>
        <ows:Address>
          <ows:DeliveryPoint>Havenlaan 88</ows:DeliveryPoint>
          <ows:City>Brussel</ows:City>
          <ows:AdministrativeArea />
          <ows:PostalCode>1000</ows:PostalCode>
          <ows:Country>Belgi\xeb</ows:Country>
          <ows:ElectronicMailAddress>digitaal.vlaanderen@vlaanderen.be</ows:ElectronicMailAddress>
        </ows:Address>
      </ows:ContactInfo>
    </ows:ServiceContact>
  </ows:ServiceProvider>
  <ows:OperationsMetadata>
    <ows:Operation name="GetCapabilities">
      <ows:DCP>
        <ows:HTTP>
          <ows:Get xlink:href="https://geo.api.vlaanderen.be/GRB/wmts?">
            <ows:Constraint name="GetEncoding">
              <ows:AllowedValues>
                <ows:Value>KVP</ows:Value>
              </ows:AllowedValues>
            </ows:Constraint>
          </ows:Get>
        </ows:HTTP>
      </ows:DCP>
      <ows:Parameter name="AcceptVersions">
        <ows:AllowedValues>
          <ows:Value>1.0.0</ows:Value>
        </ows:AllowedValues>
      </ows:Parameter>
      <ows:Parameter name="AcceptFormats">
        <ows:AllowedValues>
          <ows:Value>text/xml</ows:Value>
        </ows:AllowedValues>
      </ows:Parameter>
    </ows:Operation>
    <ows:Operation name="GetTile">
      <ows:DCP>
        <ows:HTTP>
          <ows:Get xlink:href="https://geo.api.vlaanderen.be/GRB/wmts?">
            <ows:Constraint name="GetEncoding">
              <ows:AllowedValues>
                <ows:Value>KVP</ows:Value>
              </ows:AllowedValues>
            </ows:Constraint>
          </ows:Get>
        </ows:HTTP>
      </ows:DCP>
    </ows:Operation>
    <inspire_vs:ExtendedCapabilities>
      <inspire_common:ResourceLocator>
        <inspire_common:URL>https://geo.api.vlaanderen.be/GRB/wmts?</inspire_common:URL>
        <inspire_common:MediaType>application/gml+xml</inspire_common:MediaType>
      </inspire_common:ResourceLocator>
      <inspire_common:ResourceType>service</inspire_common:ResourceType>
      <inspire_common:TemporalReference>
        <inspire_common:DateOfCreation>2022-08-11</inspire_common:DateOfCreation>
      </inspire_common:TemporalReference>
      <inspire_common:Conformity>
        <inspire_common:Specification xsi:type="inspire_common:citationInspireInteroperabilityRegulation_dut">
          <inspire_common:Title>VERORDENING (EU) Nr. 1089/2010 VAN DE COMMISSIE van 23 november 2010 ter uitvoering van Richtlijn 2007/2/EG van het Europees Parlement en de Raad betreffende de interoperabiliteit van verzamelingen ruimtelijke gegevens en van diensten met betrekking tot ruimtelijke gegevens</inspire_common:Title>
          <inspire_common:DateOfPublication>2010-12-08</inspire_common:DateOfPublication>
          <inspire_common:URI>OJ:L:2010:323:0011:0102:NL:PDF</inspire_common:URI>
          <inspire_common:ResourceLocator>
            <inspire_common:URL>http://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=OJ:L:2010:323:0011:0102:NL:PDF</inspire_common:URL>
            <inspire_common:MediaType>application/pdf</inspire_common:MediaType>
          </inspire_common:ResourceLocator>
        </inspire_common:Specification>
        <inspire_common:Degree>notEvaluated</inspire_common:Degree>
      </inspire_common:Conformity>
      <inspire_common:MetadataPointOfContact>
        <inspire_common:OrganisationName>agentschap Digitaal Vlaanderen</inspire_common:OrganisationName>
        <inspire_common:EmailAddress>digitaal.vlaanderen@vlaanderen.be</inspire_common:EmailAddress>
      </inspire_common:MetadataPointOfContact>
      <inspire_common:MetadataDate>2023-06-27</inspire_common:MetadataDate>
      <inspire_common:SpatialDataServiceType>view</inspire_common:SpatialDataServiceType>
      <inspire_common:MandatoryKeyword xsi:type="inspire_common:classificationOfSpatialDataService">
        <inspire_common:KeywordValue>infoMapAccessService</inspire_common:KeywordValue>
      </inspire_common:MandatoryKeyword>
      <inspire_common:SupportedLanguages>
        <inspire_common:DefaultLanguage>
          <inspire_common:Language>dut</inspire_common:Language>
        </inspire_common:DefaultLanguage>
      </inspire_common:SupportedLanguages>
      <inspire_common:ResponseLanguage>
        <inspire_common:Language>dut</inspire_common:Language>
      </inspire_common:ResponseLanguage>
      <inspire_common:MetadataUrl>
        <inspire_common:URL>https://metadata.vlaanderen.be/srv/dut/csw?request=GetRecordById&amp;service=CSW&amp;constraintLanguage=CQL_TEXT&amp;version=2.0.2&amp;resultType=results&amp;ElementSetName=full&amp;typenames=csw:Record&amp;id=9c49e23f-8ad8-4899-848e-37b8cbe27f89&amp;OUTPUTSCHEMA=http://www.isotc211.org/2005/gmd</inspire_common:URL>
        <inspire_common:MediaType>application/vnd.ogc.csw.GetRecordByIdResponse_xml</inspire_common:MediaType>
      </inspire_common:MetadataUrl>
    </inspire_vs:ExtendedCapabilities>
  </ows:OperationsMetadata>
  <Contents>
    <Layer>
      <ows:Title>GRB-basiskaart</ows:Title>
      <ows:Abstract>Deze laag toont alle (GRB-) entiteiten die zichtbaar zijn in de GRB-basiskaart</ows:Abstract>
      <ows:Keywords>
        <ows:Keyword>actualisatie</ows:Keyword>
        <ows:Keyword>administratieve grens</ows:Keyword>
        <ows:Keyword>adres</ows:Keyword>
        <ows:Keyword>afdak</ows:Keyword>
        <ows:Keyword>afrit</ows:Keyword>
        <ows:Keyword>afrit</ows:Keyword>
        <ows:Keyword>anomalie</ows:Keyword>
        <ows:Keyword>as built</ows:Keyword>
        <ows:Keyword>atlas</ows:Keyword>
        <ows:Keyword>autosnelweg</ows:Keyword>
        <ows:Keyword>baangracht</ows:Keyword>
        <ows:Keyword>basiskaart</ows:Keyword>
        <ows:Keyword>beek</ows:Keyword>
        <ows:Keyword>bergplaats</ows:Keyword>
        <ows:Keyword>berm</ows:Keyword>
        <ows:Keyword>bevaarbaar</ows:Keyword>
        <ows:Keyword>boordsteen</ows:Keyword>
        <ows:Keyword>bouwsel</ows:Keyword>
        <ows:Keyword>brandkraan</ows:Keyword>
        <ows:Keyword>brug</ows:Keyword>
        <ows:Keyword>bushok</ows:Keyword>
        <ows:Keyword>cabine</ows:Keyword>
        <ows:Keyword>chemisch</ows:Keyword>
        <ows:Keyword>circulatiezone</ows:Keyword>
        <ows:Keyword>constructie</ows:Keyword>
        <ows:Keyword>corridor</ows:Keyword>
        <ows:Keyword>CRAB</ows:Keyword>
        <ows:Keyword>deksel</ows:Keyword>
        <ows:Keyword>dienstweg</ows:Keyword>
        <ows:Keyword>drempel</ows:Keyword>
        <ows:Keyword>elektriciteitspaal</ows:Keyword>
        <ows:Keyword>fietsstalling</ows:Keyword>
        <ows:Keyword>fietsweg</ows:Keyword>
        <ows:Keyword>FLEPOS</ows:Keyword>
        <ows:Keyword>flitspaal</ows:Keyword>
        <ows:Keyword>fontein</ows:Keyword>
        <ows:Keyword>fout</ows:Keyword>
        <ows:Keyword>garagetoegang</ows:Keyword>
        <ows:Keyword>GDF</ows:Keyword>
        <ows:Keyword>gebouw</ows:Keyword>
        <ows:Keyword>gemeentegrens</ows:Keyword>
        <ows:Keyword>gemeenteterritorium</ows:Keyword>
        <ows:Keyword>gevel</ows:Keyword>
        <ows:Keyword>gevellijn</ows:Keyword>
        <ows:Keyword>gevelpunt</ows:Keyword>
        <ows:Keyword>golfbreker</ows:Keyword>
        <ows:Keyword>gracht</ows:Keyword>
        <ows:Keyword>GRB gis</ows:Keyword>
        <ows:Keyword>GRB</ows:Keyword>
        <ows:Keyword>GRB-databank</ows:Keyword>
        <ows:Keyword>GRB-gis</ows:Keyword>
        <ows:Keyword>grenspaal</ows:Keyword>
        <ows:Keyword>grootschalig</ows:Keyword>
        <ows:Keyword>havendam</ows:Keyword>
        <ows:Keyword>huisnummer</ows:Keyword>
        <ows:Keyword>hydrografisch</ows:Keyword>
        <ows:Keyword>informatiesysteem</ows:Keyword>
        <ows:Keyword>inrit</ows:Keyword>
        <ows:Keyword>installatie</ows:Keyword>
        <ows:Keyword>kadaster</ows:Keyword>
        <ows:Keyword>kadastergrootschalig</ows:Keyword>
        <ows:Keyword>kadastraal</ows:Keyword>
        <ows:Keyword>kantsteen</ows:Keyword>
        <ows:Keyword>keermuur</ows:Keyword>
        <ows:Keyword>koeltoren</ows:Keyword>
        <ows:Keyword>kopmuur</ows:Keyword>
        <ows:Keyword>kunstwerk</ows:Keyword>
        <ows:Keyword>lokaal</ows:Keyword>
        <ows:Keyword>longitudinaal</ows:Keyword>
        <ows:Keyword>loopbrug</ows:Keyword>
        <ows:Keyword>luik</ows:Keyword>
        <ows:Keyword>mast</ows:Keyword>
        <ows:Keyword>meer</ows:Keyword>
        <ows:Keyword>meerpaal</ows:Keyword>
        <ows:Keyword>metro</ows:Keyword>
        <ows:Keyword>monument</ows:Keyword>
        <ows:Keyword>mutatie</ows:Keyword>
        <ows:Keyword>muur</ows:Keyword>
        <ows:Keyword>NIS</ows:Keyword>
        <ows:Keyword>nisocde</ows:Keyword>
        <ows:Keyword>nummer</ows:Keyword>
        <ows:Keyword>onbevaarbaar</ows:Keyword>
        <ows:Keyword>onderdak</ows:Keyword>
        <ows:Keyword>onderkeldering</ows:Keyword>
        <ows:Keyword>onverharde zone</ows:Keyword>
        <ows:Keyword>onvolledigheid</ows:Keyword>
        <ows:Keyword>oppervaktewater</ows:Keyword>
        <ows:Keyword>oprit</ows:Keyword>
        <ows:Keyword>opslagtank</ows:Keyword>
        <ows:Keyword>overbrugging</ows:Keyword>
        <ows:Keyword>paal bovenleiding telefoonpaal</ows:Keyword>
        <ows:Keyword>paal</ows:Keyword>
        <ows:Keyword>parallelweg</ows:Keyword>
        <ows:Keyword>perceel</ows:Keyword>
        <ows:Keyword>pijler</ows:Keyword>
        <ows:Keyword>planimetrisch</ows:Keyword>
        <ows:Keyword>praatpaal</ows:Keyword>
        <ows:Keyword>putdeksel</ows:Keyword>
        <ows:Keyword>rail</ows:Keyword>
        <ows:Keyword>referentiebestand</ows:Keyword>
        <ows:Keyword>rijbaan</ows:Keyword>
        <ows:Keyword>rijstrook</ows:Keyword>
        <ows:Keyword>rivier</ows:Keyword>
        <ows:Keyword>rooster</ows:Keyword>
        <ows:Keyword>rotonde</ows:Keyword>
        <ows:Keyword>schoorsteen</ows:Keyword>
        <ows:Keyword>silo</ows:Keyword>
        <ows:Keyword>sloot</ows:Keyword>
        <ows:Keyword>spoor</ows:Keyword>
        <ows:Keyword>spoorbaan</ows:Keyword>
        <ows:Keyword>spoorrail</ows:Keyword>
        <ows:Keyword>spoorstaaf</ows:Keyword>
        <ows:Keyword>staketsel</ows:Keyword>
        <ows:Keyword>standbeeld</ows:Keyword>
        <ows:Keyword>stootband</ows:Keyword>
        <ows:Keyword>straat</ows:Keyword>
        <ows:Keyword>straatnaam</ows:Keyword>
        <ows:Keyword>strandhoofd</ows:Keyword>
        <ows:Keyword>surplusgebied</ows:Keyword>
        <ows:Keyword>telefooncabine</ows:Keyword>
        <ows:Keyword>terrein</ows:Keyword>
        <ows:Keyword>territorium</ows:Keyword>
        <ows:Keyword>toegang</ows:Keyword>
        <ows:Keyword>tram</ows:Keyword>
        <ows:Keyword>tramrail</ows:Keyword>
        <ows:Keyword>tramweg</ows:Keyword>
        <ows:Keyword>transport</ows:Keyword>
        <ows:Keyword>trap</ows:Keyword>
        <ows:Keyword>trein</ows:Keyword>
        <ows:Keyword>tunnelmond</ows:Keyword>
        <ows:Keyword>uitrit</ows:Keyword>
        <ows:Keyword>vangrail</ows:Keyword>
        <ows:Keyword>ventweg</ows:Keyword>
        <ows:Keyword>verbinding</ows:Keyword>
        <ows:Keyword>verdieping</ows:Keyword>
        <ows:Keyword>verharding</ows:Keyword>
        <ows:Keyword>verhoging</ows:Keyword>
        <ows:Keyword>verkeer</ows:Keyword>
        <ows:Keyword>verkeersdrempel</ows:Keyword>
        <ows:Keyword>verkeerslicht</ows:Keyword>
        <ows:Keyword>verkeersplateau</ows:Keyword>
        <ows:Keyword>verkeersplein</ows:Keyword>
        <ows:Keyword>verlaging</ows:Keyword>
        <ows:Keyword>verlichtingspaal</ows:Keyword>
        <ows:Keyword>VHA</ows:Keyword>
        <ows:Keyword>vijver</ows:Keyword>
        <ows:Keyword>VMM</ows:Keyword>
        <ows:Keyword>voetpad</ows:Keyword>
        <ows:Keyword>wandelweg</ows:Keyword>
        <ows:Keyword>water</ows:Keyword>
        <ows:Keyword>watergang</ows:Keyword>
        <ows:Keyword>waterloop</ows:Keyword>
        <ows:Keyword>waterloopsegment</ows:Keyword>
        <ows:Keyword>wateroppervlak</ows:Keyword>
        <ows:Keyword>watertoren</ows:Keyword>
        <ows:Keyword>waterweg</ows:Keyword>
        <ows:Keyword>weg</ows:Keyword>
        <ows:Keyword>wegaanhorigheid</ows:Keyword>
        <ows:Keyword>wegbaan</ows:Keyword>
        <ows:Keyword>weggebruiker</ows:Keyword>
        <ows:Keyword>weginrichting</ows:Keyword>
        <ows:Keyword>wegknoop</ows:Keyword>
        <ows:Keyword>wegsegment</ows:Keyword>
      </ows:Keywords>
      <ows:Identifier>grb_bsk</ows:Identifier>
      <ows:WGS84BoundingBox>
        <ows:LowerCorner>2.530000 50.685000</ows:LowerCorner>
        <ows:UpperCorner>5.920000 51.520000</ows:UpperCorner>
      </ows:WGS84BoundingBox>
      <ows:Metadata xlink:type="simple" xlink:href="https://metadata.vlaanderen.be/srv/dut/csw?request=GetRecordById&amp;service=CSW&amp;constraintLanguage=CQL_TEXT&amp;version=2.0.2&amp;resultType=results&amp;ElementSetName=full&amp;typenames=csw:Record&amp;id=7C823055-7BBF-4D62-B55E-F85C30D53162&amp;OUTPUTSCHEMA=http://www.isotc211.org/2005/gmd" />
      <ows:Metadata xlink:type="simple" xlink:href="https://metadata.vlaanderen.be/srv/dut/catalog.search#/metadata/7C823055-7BBF-4D62-B55E-F85C30D53162" />
      <ows:DatasetDescriptionSummary>
        <ows:Identifier>E2707D13-B366-4D25-A286-E1B1330CADF7</ows:Identifier>
      </ows:DatasetDescriptionSummary>
      <Style isDefault="true">
        <ows:Title>GRB-Basiskaart</ows:Title>
        <ows:Identifier />
      </Style>
      <Format>image/png</Format>
      <TileMatrixSetLink>
        <TileMatrixSet>GoogleMapsVL</TileMatrixSet>
        <TileMatrixSetLimits>
          <TileMatrixLimits>
            <TileMatrix>0</TileMatrix>
            <MinTileRow>0</MinTileRow>
            <MaxTileRow>0</MaxTileRow>
            <MinTileCol>0</MinTileCol>
            <MaxTileCol>0</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>1</TileMatrix>
            <MinTileRow>0</MinTileRow>
            <MaxTileRow>0</MaxTileRow>
            <MinTileCol>1</MinTileCol>
            <MaxTileCol>1</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>2</TileMatrix>
            <MinTileRow>1</MinTileRow>
            <MaxTileRow>1</MaxTileRow>
            <MinTileCol>2</MinTileCol>
            <MaxTileCol>2</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>3</TileMatrix>
            <MinTileRow>2</MinTileRow>
            <MaxTileRow>2</MaxTileRow>
            <MinTileCol>4</MinTileCol>
            <MaxTileCol>4</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>4</TileMatrix>
            <MinTileRow>5</MinTileRow>
            <MaxTileRow>5</MaxTileRow>
            <MinTileCol>8</MinTileCol>
            <MaxTileCol>8</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>5</TileMatrix>
            <MinTileRow>10</MinTileRow>
            <MaxTileRow>10</MaxTileRow>
            <MinTileCol>16</MinTileCol>
            <MaxTileCol>16</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>6</TileMatrix>
            <MinTileRow>21</MinTileRow>
            <MaxTileRow>21</MaxTileRow>
            <MinTileCol>32</MinTileCol>
            <MaxTileCol>33</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>7</TileMatrix>
            <MinTileRow>42</MinTileRow>
            <MaxTileRow>43</MaxTileRow>
            <MinTileCol>64</MinTileCol>
            <MaxTileCol>66</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>8</TileMatrix>
            <MinTileRow>85</MinTileRow>
            <MaxTileRow>86</MaxTileRow>
            <MinTileCol>129</MinTileCol>
            <MaxTileCol>132</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>9</TileMatrix>
            <MinTileRow>170</MinTileRow>
            <MaxTileRow>172</MaxTileRow>
            <MinTileCol>259</MinTileCol>
            <MaxTileCol>264</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>10</TileMatrix>
            <MinTileRow>340</MinTileRow>
            <MaxTileRow>344</MaxTileRow>
            <MinTileCol>519</MinTileCol>
            <MaxTileCol>528</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>11</TileMatrix>
            <MinTileRow>680</MinTileRow>
            <MaxTileRow>688</MaxTileRow>
            <MinTileCol>1038</MinTileCol>
            <MaxTileCol>1057</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>12</TileMatrix>
            <MinTileRow>1361</MinTileRow>
            <MaxTileRow>1377</MaxTileRow>
            <MinTileCol>2076</MinTileCol>
            <MaxTileCol>2115</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>13</TileMatrix>
            <MinTileRow>2723</MinTileRow>
            <MaxTileRow>2755</MaxTileRow>
            <MinTileCol>4153</MinTileCol>
            <MaxTileCol>4231</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>14</TileMatrix>
            <MinTileRow>5447</MinTileRow>
            <MaxTileRow>5510</MaxTileRow>
            <MinTileCol>8306</MinTileCol>
            <MaxTileCol>8462</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>15</TileMatrix>
            <MinTileRow>10895</MinTileRow>
            <MaxTileRow>11020</MaxTileRow>
            <MinTileCol>16613</MinTileCol>
            <MaxTileCol>16924</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>16</TileMatrix>
            <MinTileRow>21790</MinTileRow>
            <MaxTileRow>22041</MaxTileRow>
            <MinTileCol>33227</MinTileCol>
            <MaxTileCol>33849</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>17</TileMatrix>
            <MinTileRow>43580</MinTileRow>
            <MaxTileRow>44083</MaxTileRow>
            <MinTileCol>66455</MinTileCol>
            <MaxTileCol>67698</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>18</TileMatrix>
            <MinTileRow>87161</MinTileRow>
            <MaxTileRow>88167</MaxTileRow>
            <MinTileCol>132910</MinTileCol>
            <MaxTileCol>135396</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>19</TileMatrix>
            <MinTileRow>174322</MinTileRow>
            <MaxTileRow>176334</MaxTileRow>
            <MinTileCol>265821</MinTileCol>
            <MaxTileCol>270792</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>20</TileMatrix>
            <MinTileRow>348645</MinTileRow>
            <MaxTileRow>352669</MaxTileRow>
            <MinTileCol>531643</MinTileCol>
            <MaxTileCol>541585</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>21</TileMatrix>
            <MinTileRow>697290</MinTileRow>
            <MaxTileRow>705338</MaxTileRow>
            <MinTileCol>1063287</MinTileCol>
            <MaxTileCol>1083170</MaxTileCol>
          </TileMatrixLimits>
        </TileMatrixSetLimits>
      </TileMatrixSetLink>
      <TileMatrixSetLink>
        <TileMatrixSet>WGS84VL</TileMatrixSet>
        <TileMatrixSetLimits>
          <TileMatrixLimits>
            <TileMatrix>0</TileMatrix>
            <MinTileRow>0</MinTileRow>
            <MaxTileRow>0</MaxTileRow>
            <MinTileCol>0</MinTileCol>
            <MaxTileCol>0</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>1</TileMatrix>
            <MinTileRow>0</MinTileRow>
            <MaxTileRow>0</MaxTileRow>
            <MinTileCol>1</MinTileCol>
            <MaxTileCol>1</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>2</TileMatrix>
            <MinTileRow>0</MinTileRow>
            <MaxTileRow>0</MaxTileRow>
            <MinTileCol>2</MinTileCol>
            <MaxTileCol>2</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>3</TileMatrix>
            <MinTileRow>0</MinTileRow>
            <MaxTileRow>0</MaxTileRow>
            <MinTileCol>4</MinTileCol>
            <MaxTileCol>4</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>4</TileMatrix>
            <MinTileRow>1</MinTileRow>
            <MaxTileRow>1</MaxTileRow>
            <MinTileCol>8</MinTileCol>
            <MaxTileCol>8</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>5</TileMatrix>
            <MinTileRow>3</MinTileRow>
            <MaxTileRow>3</MaxTileRow>
            <MinTileCol>16</MinTileCol>
            <MaxTileCol>16</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>6</TileMatrix>
            <MinTileRow>6</MinTileRow>
            <MaxTileRow>6</MaxTileRow>
            <MinTileCol>32</MinTileCol>
            <MaxTileCol>33</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>7</TileMatrix>
            <MinTileRow>13</MinTileRow>
            <MaxTileRow>13</MaxTileRow>
            <MinTileCol>64</MinTileCol>
            <MaxTileCol>66</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>8</TileMatrix>
            <MinTileRow>27</MinTileRow>
            <MaxTileRow>27</MaxTileRow>
            <MinTileCol>129</MinTileCol>
            <MaxTileCol>132</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>9</TileMatrix>
            <MinTileRow>54</MinTileRow>
            <MaxTileRow>55</MaxTileRow>
            <MinTileCol>259</MinTileCol>
            <MaxTileCol>264</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>10</TileMatrix>
            <MinTileRow>109</MinTileRow>
            <MaxTileRow>111</MaxTileRow>
            <MinTileCol>519</MinTileCol>
            <MaxTileCol>528</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>11</TileMatrix>
            <MinTileRow>218</MinTileRow>
            <MaxTileRow>223</MaxTileRow>
            <MinTileCol>1038</MinTileCol>
            <MaxTileCol>1057</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>12</TileMatrix>
            <MinTileRow>437</MinTileRow>
            <MaxTileRow>447</MaxTileRow>
            <MinTileCol>2076</MinTileCol>
            <MaxTileCol>2115</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>13</TileMatrix>
            <MinTileRow>875</MinTileRow>
            <MaxTileRow>895</MaxTileRow>
            <MinTileCol>4153</MinTileCol>
            <MaxTileCol>4231</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>14</TileMatrix>
            <MinTileRow>1751</MinTileRow>
            <MaxTileRow>1791</MaxTileRow>
            <MinTileCol>8306</MinTileCol>
            <MaxTileCol>8462</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>15</TileMatrix>
            <MinTileRow>3503</MinTileRow>
            <MaxTileRow>3582</MaxTileRow>
            <MinTileCol>16613</MinTileCol>
            <MaxTileCol>16924</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>16</TileMatrix>
            <MinTileRow>7006</MinTileRow>
            <MaxTileRow>7164</MaxTileRow>
            <MinTileCol>33227</MinTileCol>
            <MaxTileCol>33849</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>17</TileMatrix>
            <MinTileRow>14012</MinTileRow>
            <MaxTileRow>14328</MaxTileRow>
            <MinTileCol>66455</MinTileCol>
            <MaxTileCol>67698</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>18</TileMatrix>
            <MinTileRow>28024</MinTileRow>
            <MaxTileRow>28656</MaxTileRow>
            <MinTileCol>132910</MinTileCol>
            <MaxTileCol>135396</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>19</TileMatrix>
            <MinTileRow>56048</MinTileRow>
            <MaxTileRow>57312</MaxTileRow>
            <MinTileCol>265821</MinTileCol>
            <MaxTileCol>270792</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>20</TileMatrix>
            <MinTileRow>112097</MinTileRow>
            <MaxTileRow>114625</MaxTileRow>
            <MinTileCol>531643</MinTileCol>
            <MaxTileCol>541585</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>21</TileMatrix>
            <MinTileRow>224194</MinTileRow>
            <MaxTileRow>229250</MaxTileRow>
            <MinTileCol>1063287</MinTileCol>
            <MaxTileCol>1083170</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>22</TileMatrix>
            <MinTileRow>448388</MinTileRow>
            <MaxTileRow>458500</MaxTileRow>
            <MinTileCol>2126575</MinTileCol>
            <MaxTileCol>2166341</MaxTileCol>
          </TileMatrixLimits>
        </TileMatrixSetLimits>
      </TileMatrixSetLink>
      <TileMatrixSetLink>
        <TileMatrixSet>BPL72VL</TileMatrixSet>
        <TileMatrixSetLimits>
          <TileMatrixLimits>
            <TileMatrix>0</TileMatrix>
            <MinTileRow>0</MinTileRow>
            <MaxTileRow>0</MaxTileRow>
            <MinTileCol>0</MinTileCol>
            <MaxTileCol>0</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>1</TileMatrix>
            <MinTileRow>0</MinTileRow>
            <MaxTileRow>1</MaxTileRow>
            <MinTileCol>0</MinTileCol>
            <MaxTileCol>1</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>2</TileMatrix>
            <MinTileRow>1</MinTileRow>
            <MaxTileRow>2</MaxTileRow>
            <MinTileCol>0</MinTileCol>
            <MaxTileCol>3</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>3</TileMatrix>
            <MinTileRow>2</MinTileRow>
            <MaxTileRow>5</MaxTileRow>
            <MinTileCol>0</MinTileCol>
            <MaxTileCol>7</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>4</TileMatrix>
            <MinTileRow>5</MinTileRow>
            <MaxTileRow>11</MaxTileRow>
            <MinTileCol>0</MinTileCol>
            <MaxTileCol>15</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>5</TileMatrix>
            <MinTileRow>10</MinTileRow>
            <MaxTileRow>22</MaxTileRow>
            <MinTileCol>1</MinTileCol>
            <MaxTileCol>30</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>6</TileMatrix>
            <MinTileRow>20</MinTileRow>
            <MaxTileRow>44</MaxTileRow>
            <MinTileCol>2</MinTileCol>
            <MaxTileCol>60</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>7</TileMatrix>
            <MinTileRow>41</MinTileRow>
            <MaxTileRow>88</MaxTileRow>
            <MinTileCol>5</MinTileCol>
            <MaxTileCol>121</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>8</TileMatrix>
            <MinTileRow>82</MinTileRow>
            <MaxTileRow>176</MaxTileRow>
            <MinTileCol>11</MinTileCol>
            <MaxTileCol>243</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>9</TileMatrix>
            <MinTileRow>164</MinTileRow>
            <MaxTileRow>352</MaxTileRow>
            <MinTileCol>23</MinTileCol>
            <MaxTileCol>486</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>10</TileMatrix>
            <MinTileRow>328</MinTileRow>
            <MaxTileRow>705</MaxTileRow>
            <MinTileCol>47</MinTileCol>
            <MaxTileCol>972</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>11</TileMatrix>
            <MinTileRow>656</MinTileRow>
            <MaxTileRow>1411</MaxTileRow>
            <MinTileCol>94</MinTileCol>
            <MaxTileCol>1945</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>12</TileMatrix>
            <MinTileRow>1313</MinTileRow>
            <MaxTileRow>2822</MaxTileRow>
            <MinTileCol>188</MinTileCol>
            <MaxTileCol>3891</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>13</TileMatrix>
            <MinTileRow>2627</MinTileRow>
            <MaxTileRow>5644</MaxTileRow>
            <MinTileCol>377</MinTileCol>
            <MaxTileCol>7783</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>14</TileMatrix>
            <MinTileRow>5254</MinTileRow>
            <MaxTileRow>11289</MaxTileRow>
            <MinTileCol>754</MinTileCol>
            <MaxTileCol>15566</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>15</TileMatrix>
            <MinTileRow>10509</MinTileRow>
            <MaxTileRow>22578</MaxTileRow>
            <MinTileCol>1509</MinTileCol>
            <MaxTileCol>31133</MaxTileCol>
          </TileMatrixLimits>
        </TileMatrixSetLimits>
      </TileMatrixSetLink>
    <TileMatrixSetLink><TileMatrixSet>BPL2008VL</TileMatrixSet><TileMatrixSetLimits><TileMatrixLimits><TileMatrix>0</TileMatrix><MinTileRow>0</MinTileRow><MaxTileRow>0</MaxTileRow><MinTileCol>0</MinTileCol><MaxTileCol>0</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>1</TileMatrix><MinTileRow>0</MinTileRow><MaxTileRow>1</MaxTileRow><MinTileCol>0</MinTileCol><MaxTileCol>1</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>2</TileMatrix><MinTileRow>0</MinTileRow><MaxTileRow>2</MaxTileRow><MinTileCol>0</MinTileCol><MaxTileCol>3</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>3</TileMatrix><MinTileRow>1</MinTileRow><MaxTileRow>4</MaxTileRow><MinTileCol>0</MinTileCol><MaxTileCol>7</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>4</TileMatrix><MinTileRow>3</MinTileRow><MaxTileRow>9</MaxTileRow><MinTileCol>1</MinTileCol><MaxTileCol>15</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>5</TileMatrix><MinTileRow>6</MinTileRow><MaxTileRow>18</MaxTileRow><MinTileCol>2</MinTileCol><MaxTileCol>31</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>6</TileMatrix><MinTileRow>13</MinTileRow><MaxTileRow>36</MaxTileRow><MinTileCol>5</MinTileCol><MaxTileCol>63</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>7</TileMatrix><MinTileRow>26</MinTileRow><MaxTileRow>73</MaxTileRow><MinTileCol>10</MinTileCol><MaxTileCol>126</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>8</TileMatrix><MinTileRow>53</MinTileRow><MaxTileRow>146</MaxTileRow><MinTileCol>21</MinTileCol><MaxTileCol>252</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>9</TileMatrix><MinTileRow>107</MinTileRow><MaxTileRow>292</MaxTileRow><MinTileCol>42</MinTileCol><MaxTileCol>505</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>10</TileMatrix><MinTileRow>214</MinTileRow><MaxTileRow>585</MaxTileRow><MinTileCol>85</MinTileCol><MaxTileCol>1011</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>11</TileMatrix><MinTileRow>429</MinTileRow><MaxTileRow>1171</MaxTileRow><MinTileCol>171</MinTileCol><MaxTileCol>2023</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>12</TileMatrix><MinTileRow>859</MinTileRow><MaxTileRow>2343</MaxTileRow><MinTileCol>343</MinTileCol><MaxTileCol>4046</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>13</TileMatrix><MinTileRow>1718</MinTileRow><MaxTileRow>4687</MaxTileRow><MinTileCol>687</MinTileCol><MaxTileCol>8093</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>14</TileMatrix><MinTileRow>3436</MinTileRow><MaxTileRow>9375</MaxTileRow><MinTileCol>1374</MinTileCol><MaxTileCol>16187</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>15</TileMatrix><MinTileRow>6873</MinTileRow><MaxTileRow>18751</MaxTileRow><MinTileCol>2748</MinTileCol><MaxTileCol>32375</MaxTileCol></TileMatrixLimits></TileMatrixSetLimits></TileMatrixSetLink></Layer>
    <Layer>
      <ows:Title>GRB-basiskaart grijs</ows:Title>
      <ows:Abstract>Deze laag toont alle (GRB-) entiteiten die zichtbaar zijn in de GRB-basiskaart, in grijstinten.</ows:Abstract>
      <ows:Keywords>
        <ows:Keyword>actualisatie</ows:Keyword>
        <ows:Keyword>administratieve grens</ows:Keyword>
        <ows:Keyword>adres</ows:Keyword>
        <ows:Keyword>afdak</ows:Keyword>
        <ows:Keyword>afrit</ows:Keyword>
        <ows:Keyword>afrit</ows:Keyword>
        <ows:Keyword>anomalie</ows:Keyword>
        <ows:Keyword>as built</ows:Keyword>
        <ows:Keyword>atlas</ows:Keyword>
        <ows:Keyword>autosnelweg</ows:Keyword>
        <ows:Keyword>baangracht</ows:Keyword>
        <ows:Keyword>basiskaart</ows:Keyword>
        <ows:Keyword>beek</ows:Keyword>
        <ows:Keyword>bergplaats</ows:Keyword>
        <ows:Keyword>berm</ows:Keyword>
        <ows:Keyword>bevaarbaar</ows:Keyword>
        <ows:Keyword>boordsteen</ows:Keyword>
        <ows:Keyword>bouwsel</ows:Keyword>
        <ows:Keyword>brandkraan</ows:Keyword>
        <ows:Keyword>brug</ows:Keyword>
        <ows:Keyword>bushok</ows:Keyword>
        <ows:Keyword>cabine</ows:Keyword>
        <ows:Keyword>chemisch</ows:Keyword>
        <ows:Keyword>circulatiezone</ows:Keyword>
        <ows:Keyword>constructie</ows:Keyword>
        <ows:Keyword>corridor</ows:Keyword>
        <ows:Keyword>CRAB</ows:Keyword>
        <ows:Keyword>deksel</ows:Keyword>
        <ows:Keyword>dienstweg</ows:Keyword>
        <ows:Keyword>drempel</ows:Keyword>
        <ows:Keyword>elektriciteitspaal</ows:Keyword>
        <ows:Keyword>fietsstalling</ows:Keyword>
        <ows:Keyword>fietsweg</ows:Keyword>
        <ows:Keyword>FLEPOS</ows:Keyword>
        <ows:Keyword>flitspaal</ows:Keyword>
        <ows:Keyword>fontein</ows:Keyword>
        <ows:Keyword>fout</ows:Keyword>
        <ows:Keyword>garagetoegang</ows:Keyword>
        <ows:Keyword>GDF</ows:Keyword>
        <ows:Keyword>gebouw</ows:Keyword>
        <ows:Keyword>gemeentegrens</ows:Keyword>
        <ows:Keyword>gemeenteterritorium</ows:Keyword>
        <ows:Keyword>gevel</ows:Keyword>
        <ows:Keyword>gevellijn</ows:Keyword>
        <ows:Keyword>gevelpunt</ows:Keyword>
        <ows:Keyword>golfbreker</ows:Keyword>
        <ows:Keyword>gracht</ows:Keyword>
        <ows:Keyword>GRB gis</ows:Keyword>
        <ows:Keyword>GRB</ows:Keyword>
        <ows:Keyword>GRB-databank</ows:Keyword>
        <ows:Keyword>GRB-gis</ows:Keyword>
        <ows:Keyword>grenspaal</ows:Keyword>
        <ows:Keyword>grootschalig</ows:Keyword>
        <ows:Keyword>havendam</ows:Keyword>
        <ows:Keyword>huisnummer</ows:Keyword>
        <ows:Keyword>hydrografisch</ows:Keyword>
        <ows:Keyword>informatiesysteem</ows:Keyword>
        <ows:Keyword>inrit</ows:Keyword>
        <ows:Keyword>installatie</ows:Keyword>
        <ows:Keyword>kadaster</ows:Keyword>
        <ows:Keyword>kadastergrootschalig</ows:Keyword>
        <ows:Keyword>kadastraal</ows:Keyword>
        <ows:Keyword>kantsteen</ows:Keyword>
        <ows:Keyword>keermuur</ows:Keyword>
        <ows:Keyword>koeltoren</ows:Keyword>
        <ows:Keyword>kopmuur</ows:Keyword>
        <ows:Keyword>kunstwerk</ows:Keyword>
        <ows:Keyword>lokaal</ows:Keyword>
        <ows:Keyword>longitudinaal</ows:Keyword>
        <ows:Keyword>loopbrug</ows:Keyword>
        <ows:Keyword>luik</ows:Keyword>
        <ows:Keyword>mast</ows:Keyword>
        <ows:Keyword>meer</ows:Keyword>
        <ows:Keyword>meerpaal</ows:Keyword>
        <ows:Keyword>metro</ows:Keyword>
        <ows:Keyword>monument</ows:Keyword>
        <ows:Keyword>mutatie</ows:Keyword>
        <ows:Keyword>muur</ows:Keyword>
        <ows:Keyword>NIS</ows:Keyword>
        <ows:Keyword>nisocde</ows:Keyword>
        <ows:Keyword>nummer</ows:Keyword>
        <ows:Keyword>onbevaarbaar</ows:Keyword>
        <ows:Keyword>onderdak</ows:Keyword>
        <ows:Keyword>onderkeldering</ows:Keyword>
        <ows:Keyword>onverharde zone</ows:Keyword>
        <ows:Keyword>onvolledigheid</ows:Keyword>
        <ows:Keyword>oppervaktewater</ows:Keyword>
        <ows:Keyword>oprit</ows:Keyword>
        <ows:Keyword>opslagtank</ows:Keyword>
        <ows:Keyword>overbrugging</ows:Keyword>
        <ows:Keyword>paal bovenleiding telefoonpaal</ows:Keyword>
        <ows:Keyword>paal</ows:Keyword>
        <ows:Keyword>parallelweg</ows:Keyword>
        <ows:Keyword>perceel</ows:Keyword>
        <ows:Keyword>pijler</ows:Keyword>
        <ows:Keyword>planimetrisch</ows:Keyword>
        <ows:Keyword>praatpaal</ows:Keyword>
        <ows:Keyword>putdeksel</ows:Keyword>
        <ows:Keyword>rail</ows:Keyword>
        <ows:Keyword>referentiebestand</ows:Keyword>
        <ows:Keyword>rijbaan</ows:Keyword>
        <ows:Keyword>rijstrook</ows:Keyword>
        <ows:Keyword>rivier</ows:Keyword>
        <ows:Keyword>rooster</ows:Keyword>
        <ows:Keyword>rotonde</ows:Keyword>
        <ows:Keyword>schoorsteen</ows:Keyword>
        <ows:Keyword>silo</ows:Keyword>
        <ows:Keyword>sloot</ows:Keyword>
        <ows:Keyword>spoor</ows:Keyword>
        <ows:Keyword>spoorbaan</ows:Keyword>
        <ows:Keyword>spoorrail</ows:Keyword>
        <ows:Keyword>spoorstaaf</ows:Keyword>
        <ows:Keyword>staketsel</ows:Keyword>
        <ows:Keyword>standbeeld</ows:Keyword>
        <ows:Keyword>stootband</ows:Keyword>
        <ows:Keyword>straat</ows:Keyword>
        <ows:Keyword>straatnaam</ows:Keyword>
        <ows:Keyword>strandhoofd</ows:Keyword>
        <ows:Keyword>surplusgebied</ows:Keyword>
        <ows:Keyword>telefooncabine</ows:Keyword>
        <ows:Keyword>terrein</ows:Keyword>
        <ows:Keyword>territorium</ows:Keyword>
        <ows:Keyword>toegang</ows:Keyword>
        <ows:Keyword>tram</ows:Keyword>
        <ows:Keyword>tramrail</ows:Keyword>
        <ows:Keyword>tramweg</ows:Keyword>
        <ows:Keyword>transport</ows:Keyword>
        <ows:Keyword>trap</ows:Keyword>
        <ows:Keyword>trein</ows:Keyword>
        <ows:Keyword>tunnelmond</ows:Keyword>
        <ows:Keyword>uitrit</ows:Keyword>
        <ows:Keyword>vangrail</ows:Keyword>
        <ows:Keyword>ventweg</ows:Keyword>
        <ows:Keyword>verbinding</ows:Keyword>
        <ows:Keyword>verdieping</ows:Keyword>
        <ows:Keyword>verharding</ows:Keyword>
        <ows:Keyword>verhoging</ows:Keyword>
        <ows:Keyword>verkeer</ows:Keyword>
        <ows:Keyword>verkeersdrempel</ows:Keyword>
        <ows:Keyword>verkeerslicht</ows:Keyword>
        <ows:Keyword>verkeersplateau</ows:Keyword>
        <ows:Keyword>verkeersplein</ows:Keyword>
        <ows:Keyword>verlaging</ows:Keyword>
        <ows:Keyword>verlichtingspaal</ows:Keyword>
        <ows:Keyword>VHA</ows:Keyword>
        <ows:Keyword>vijver</ows:Keyword>
        <ows:Keyword>VMM</ows:Keyword>
        <ows:Keyword>voetpad</ows:Keyword>
        <ows:Keyword>wandelweg</ows:Keyword>
        <ows:Keyword>water</ows:Keyword>
        <ows:Keyword>watergang</ows:Keyword>
        <ows:Keyword>waterloop</ows:Keyword>
        <ows:Keyword>waterloopsegment</ows:Keyword>
        <ows:Keyword>wateroppervlak</ows:Keyword>
        <ows:Keyword>watertoren</ows:Keyword>
        <ows:Keyword>waterweg</ows:Keyword>
        <ows:Keyword>weg</ows:Keyword>
        <ows:Keyword>wegaanhorigheid</ows:Keyword>
        <ows:Keyword>wegbaan</ows:Keyword>
        <ows:Keyword>weggebruiker</ows:Keyword>
        <ows:Keyword>weginrichting</ows:Keyword>
        <ows:Keyword>wegknoop</ows:Keyword>
        <ows:Keyword>wegsegment</ows:Keyword>
      </ows:Keywords>
      <ows:Identifier>grb_bsk_grijs</ows:Identifier>
      <ows:WGS84BoundingBox>
        <ows:LowerCorner>2.530000 50.685000</ows:LowerCorner>
        <ows:UpperCorner>5.920000 51.520000</ows:UpperCorner>
      </ows:WGS84BoundingBox>
      <ows:Metadata xlink:type="simple" xlink:href="https://metadata.vlaanderen.be/srv/dut/csw?request=GetRecordById&amp;service=CSW&amp;constraintLanguage=CQL_TEXT&amp;version=2.0.2&amp;resultType=results&amp;ElementSetName=full&amp;typenames=csw:Record&amp;id=7C823055-7BBF-4D62-B55E-F85C30D53162&amp;OUTPUTSCHEMA=http://www.isotc211.org/2005/gmd" />
      <ows:Metadata xlink:type="simple" xlink:href="https://metadata.vlaanderen.be/srv/dut/catalog.search#/metadata/7C823055-7BBF-4D62-B55E-F85C30D53162" />
      <ows:DatasetDescriptionSummary>
        <ows:Identifier>E2707D13-B366-4D25-A286-E1B1330CADF7</ows:Identifier>
      </ows:DatasetDescriptionSummary>
      <Style isDefault="true">
        <ows:Title>GRB-basiskaart-grijs</ows:Title>
        <ows:Identifier />
      </Style>
      <Format>image/png</Format>
      <TileMatrixSetLink>
        <TileMatrixSet>GoogleMapsVL</TileMatrixSet>
        <TileMatrixSetLimits>
          <TileMatrixLimits>
            <TileMatrix>0</TileMatrix>
            <MinTileRow>0</MinTileRow>
            <MaxTileRow>0</MaxTileRow>
            <MinTileCol>0</MinTileCol>
            <MaxTileCol>0</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>1</TileMatrix>
            <MinTileRow>0</MinTileRow>
            <MaxTileRow>0</MaxTileRow>
            <MinTileCol>1</MinTileCol>
            <MaxTileCol>1</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>2</TileMatrix>
            <MinTileRow>1</MinTileRow>
            <MaxTileRow>1</MaxTileRow>
            <MinTileCol>2</MinTileCol>
            <MaxTileCol>2</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>3</TileMatrix>
            <MinTileRow>2</MinTileRow>
            <MaxTileRow>2</MaxTileRow>
            <MinTileCol>4</MinTileCol>
            <MaxTileCol>4</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>4</TileMatrix>
            <MinTileRow>5</MinTileRow>
            <MaxTileRow>5</MaxTileRow>
            <MinTileCol>8</MinTileCol>
            <MaxTileCol>8</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>5</TileMatrix>
            <MinTileRow>10</MinTileRow>
            <MaxTileRow>10</MaxTileRow>
            <MinTileCol>16</MinTileCol>
            <MaxTileCol>16</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>6</TileMatrix>
            <MinTileRow>21</MinTileRow>
            <MaxTileRow>21</MaxTileRow>
            <MinTileCol>32</MinTileCol>
            <MaxTileCol>33</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>7</TileMatrix>
            <MinTileRow>42</MinTileRow>
            <MaxTileRow>43</MaxTileRow>
            <MinTileCol>64</MinTileCol>
            <MaxTileCol>66</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>8</TileMatrix>
            <MinTileRow>85</MinTileRow>
            <MaxTileRow>86</MaxTileRow>
            <MinTileCol>129</MinTileCol>
            <MaxTileCol>132</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>9</TileMatrix>
            <MinTileRow>170</MinTileRow>
            <MaxTileRow>172</MaxTileRow>
            <MinTileCol>259</MinTileCol>
            <MaxTileCol>264</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>10</TileMatrix>
            <MinTileRow>340</MinTileRow>
            <MaxTileRow>344</MaxTileRow>
            <MinTileCol>519</MinTileCol>
            <MaxTileCol>528</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>11</TileMatrix>
            <MinTileRow>680</MinTileRow>
            <MaxTileRow>688</MaxTileRow>
            <MinTileCol>1038</MinTileCol>
            <MaxTileCol>1057</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>12</TileMatrix>
            <MinTileRow>1361</MinTileRow>
            <MaxTileRow>1377</MaxTileRow>
            <MinTileCol>2076</MinTileCol>
            <MaxTileCol>2115</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>13</TileMatrix>
            <MinTileRow>2723</MinTileRow>
            <MaxTileRow>2755</MaxTileRow>
            <MinTileCol>4153</MinTileCol>
            <MaxTileCol>4231</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>14</TileMatrix>
            <MinTileRow>5447</MinTileRow>
            <MaxTileRow>5510</MaxTileRow>
            <MinTileCol>8306</MinTileCol>
            <MaxTileCol>8462</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>15</TileMatrix>
            <MinTileRow>10895</MinTileRow>
            <MaxTileRow>11020</MaxTileRow>
            <MinTileCol>16613</MinTileCol>
            <MaxTileCol>16924</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>16</TileMatrix>
            <MinTileRow>21790</MinTileRow>
            <MaxTileRow>22041</MaxTileRow>
            <MinTileCol>33227</MinTileCol>
            <MaxTileCol>33849</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>17</TileMatrix>
            <MinTileRow>43580</MinTileRow>
            <MaxTileRow>44083</MaxTileRow>
            <MinTileCol>66455</MinTileCol>
            <MaxTileCol>67698</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>18</TileMatrix>
            <MinTileRow>87161</MinTileRow>
            <MaxTileRow>88167</MaxTileRow>
            <MinTileCol>132910</MinTileCol>
            <MaxTileCol>135396</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>19</TileMatrix>
            <MinTileRow>174322</MinTileRow>
            <MaxTileRow>176334</MaxTileRow>
            <MinTileCol>265821</MinTileCol>
            <MaxTileCol>270792</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>20</TileMatrix>
            <MinTileRow>348645</MinTileRow>
            <MaxTileRow>352669</MaxTileRow>
            <MinTileCol>531643</MinTileCol>
            <MaxTileCol>541585</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>21</TileMatrix>
            <MinTileRow>697290</MinTileRow>
            <MaxTileRow>705338</MaxTileRow>
            <MinTileCol>1063287</MinTileCol>
            <MaxTileCol>1083170</MaxTileCol>
          </TileMatrixLimits>
        </TileMatrixSetLimits>
      </TileMatrixSetLink>
      <TileMatrixSetLink>
        <TileMatrixSet>WGS84VL</TileMatrixSet>
        <TileMatrixSetLimits>
          <TileMatrixLimits>
            <TileMatrix>0</TileMatrix>
            <MinTileRow>0</MinTileRow>
            <MaxTileRow>0</MaxTileRow>
            <MinTileCol>0</MinTileCol>
            <MaxTileCol>0</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>1</TileMatrix>
            <MinTileRow>0</MinTileRow>
            <MaxTileRow>0</MaxTileRow>
            <MinTileCol>1</MinTileCol>
            <MaxTileCol>1</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>2</TileMatrix>
            <MinTileRow>0</MinTileRow>
            <MaxTileRow>0</MaxTileRow>
            <MinTileCol>2</MinTileCol>
            <MaxTileCol>2</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>3</TileMatrix>
            <MinTileRow>0</MinTileRow>
            <MaxTileRow>0</MaxTileRow>
            <MinTileCol>4</MinTileCol>
            <MaxTileCol>4</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>4</TileMatrix>
            <MinTileRow>1</MinTileRow>
            <MaxTileRow>1</MaxTileRow>
            <MinTileCol>8</MinTileCol>
            <MaxTileCol>8</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>5</TileMatrix>
            <MinTileRow>3</MinTileRow>
            <MaxTileRow>3</MaxTileRow>
            <MinTileCol>16</MinTileCol>
            <MaxTileCol>16</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>6</TileMatrix>
            <MinTileRow>6</MinTileRow>
            <MaxTileRow>6</MaxTileRow>
            <MinTileCol>32</MinTileCol>
            <MaxTileCol>33</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>7</TileMatrix>
            <MinTileRow>13</MinTileRow>
            <MaxTileRow>13</MaxTileRow>
            <MinTileCol>64</MinTileCol>
            <MaxTileCol>66</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>8</TileMatrix>
            <MinTileRow>27</MinTileRow>
            <MaxTileRow>27</MaxTileRow>
            <MinTileCol>129</MinTileCol>
            <MaxTileCol>132</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>9</TileMatrix>
            <MinTileRow>54</MinTileRow>
            <MaxTileRow>55</MaxTileRow>
            <MinTileCol>259</MinTileCol>
            <MaxTileCol>264</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>10</TileMatrix>
            <MinTileRow>109</MinTileRow>
            <MaxTileRow>111</MaxTileRow>
            <MinTileCol>519</MinTileCol>
            <MaxTileCol>528</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>11</TileMatrix>
            <MinTileRow>218</MinTileRow>
            <MaxTileRow>223</MaxTileRow>
            <MinTileCol>1038</MinTileCol>
            <MaxTileCol>1057</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>12</TileMatrix>
            <MinTileRow>437</MinTileRow>
            <MaxTileRow>447</MaxTileRow>
            <MinTileCol>2076</MinTileCol>
            <MaxTileCol>2115</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>13</TileMatrix>
            <MinTileRow>875</MinTileRow>
            <MaxTileRow>895</MaxTileRow>
            <MinTileCol>4153</MinTileCol>
            <MaxTileCol>4231</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>14</TileMatrix>
            <MinTileRow>1751</MinTileRow>
            <MaxTileRow>1791</MaxTileRow>
            <MinTileCol>8306</MinTileCol>
            <MaxTileCol>8462</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>15</TileMatrix>
            <MinTileRow>3503</MinTileRow>
            <MaxTileRow>3582</MaxTileRow>
            <MinTileCol>16613</MinTileCol>
            <MaxTileCol>16924</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>16</TileMatrix>
            <MinTileRow>7006</MinTileRow>
            <MaxTileRow>7164</MaxTileRow>
            <MinTileCol>33227</MinTileCol>
            <MaxTileCol>33849</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>17</TileMatrix>
            <MinTileRow>14012</MinTileRow>
            <MaxTileRow>14328</MaxTileRow>
            <MinTileCol>66455</MinTileCol>
            <MaxTileCol>67698</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>18</TileMatrix>
            <MinTileRow>28024</MinTileRow>
            <MaxTileRow>28656</MaxTileRow>
            <MinTileCol>132910</MinTileCol>
            <MaxTileCol>135396</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>19</TileMatrix>
            <MinTileRow>56048</MinTileRow>
            <MaxTileRow>57312</MaxTileRow>
            <MinTileCol>265821</MinTileCol>
            <MaxTileCol>270792</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>20</TileMatrix>
            <MinTileRow>112097</MinTileRow>
            <MaxTileRow>114625</MaxTileRow>
            <MinTileCol>531643</MinTileCol>
            <MaxTileCol>541585</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>21</TileMatrix>
            <MinTileRow>224194</MinTileRow>
            <MaxTileRow>229250</MaxTileRow>
            <MinTileCol>1063287</MinTileCol>
            <MaxTileCol>1083170</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>22</TileMatrix>
            <MinTileRow>448388</MinTileRow>
            <MaxTileRow>458500</MaxTileRow>
            <MinTileCol>2126575</MinTileCol>
            <MaxTileCol>2166341</MaxTileCol>
          </TileMatrixLimits>
        </TileMatrixSetLimits>
      </TileMatrixSetLink>
      <TileMatrixSetLink>
        <TileMatrixSet>BPL72VL</TileMatrixSet>
        <TileMatrixSetLimits>
          <TileMatrixLimits>
            <TileMatrix>0</TileMatrix>
            <MinTileRow>0</MinTileRow>
            <MaxTileRow>0</MaxTileRow>
            <MinTileCol>0</MinTileCol>
            <MaxTileCol>0</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>1</TileMatrix>
            <MinTileRow>0</MinTileRow>
            <MaxTileRow>1</MaxTileRow>
            <MinTileCol>0</MinTileCol>
            <MaxTileCol>1</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>2</TileMatrix>
            <MinTileRow>1</MinTileRow>
            <MaxTileRow>2</MaxTileRow>
            <MinTileCol>0</MinTileCol>
            <MaxTileCol>3</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>3</TileMatrix>
            <MinTileRow>2</MinTileRow>
            <MaxTileRow>5</MaxTileRow>
            <MinTileCol>0</MinTileCol>
            <MaxTileCol>7</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>4</TileMatrix>
            <MinTileRow>5</MinTileRow>
            <MaxTileRow>11</MaxTileRow>
            <MinTileCol>0</MinTileCol>
            <MaxTileCol>15</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>5</TileMatrix>
            <MinTileRow>10</MinTileRow>
            <MaxTileRow>22</MaxTileRow>
            <MinTileCol>1</MinTileCol>
            <MaxTileCol>30</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>6</TileMatrix>
            <MinTileRow>20</MinTileRow>
            <MaxTileRow>44</MaxTileRow>
            <MinTileCol>2</MinTileCol>
            <MaxTileCol>60</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>7</TileMatrix>
            <MinTileRow>41</MinTileRow>
            <MaxTileRow>88</MaxTileRow>
            <MinTileCol>5</MinTileCol>
            <MaxTileCol>121</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>8</TileMatrix>
            <MinTileRow>82</MinTileRow>
            <MaxTileRow>176</MaxTileRow>
            <MinTileCol>11</MinTileCol>
            <MaxTileCol>243</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>9</TileMatrix>
            <MinTileRow>164</MinTileRow>
            <MaxTileRow>352</MaxTileRow>
            <MinTileCol>23</MinTileCol>
            <MaxTileCol>486</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>10</TileMatrix>
            <MinTileRow>328</MinTileRow>
            <MaxTileRow>705</MaxTileRow>
            <MinTileCol>47</MinTileCol>
            <MaxTileCol>972</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>11</TileMatrix>
            <MinTileRow>656</MinTileRow>
            <MaxTileRow>1411</MaxTileRow>
            <MinTileCol>94</MinTileCol>
            <MaxTileCol>1945</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>12</TileMatrix>
            <MinTileRow>1313</MinTileRow>
            <MaxTileRow>2822</MaxTileRow>
            <MinTileCol>188</MinTileCol>
            <MaxTileCol>3891</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>13</TileMatrix>
            <MinTileRow>2627</MinTileRow>
            <MaxTileRow>5644</MaxTileRow>
            <MinTileCol>377</MinTileCol>
            <MaxTileCol>7783</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>14</TileMatrix>
            <MinTileRow>5254</MinTileRow>
            <MaxTileRow>11289</MaxTileRow>
            <MinTileCol>754</MinTileCol>
            <MaxTileCol>15566</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>15</TileMatrix>
            <MinTileRow>10509</MinTileRow>
            <MaxTileRow>22578</MaxTileRow>
            <MinTileCol>1509</MinTileCol>
            <MaxTileCol>31133</MaxTileCol>
          </TileMatrixLimits>
        </TileMatrixSetLimits>
      </TileMatrixSetLink>
    <TileMatrixSetLink><TileMatrixSet>BPL2008VL</TileMatrixSet><TileMatrixSetLimits><TileMatrixLimits><TileMatrix>0</TileMatrix><MinTileRow>0</MinTileRow><MaxTileRow>0</MaxTileRow><MinTileCol>0</MinTileCol><MaxTileCol>0</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>1</TileMatrix><MinTileRow>0</MinTileRow><MaxTileRow>1</MaxTileRow><MinTileCol>0</MinTileCol><MaxTileCol>1</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>2</TileMatrix><MinTileRow>0</MinTileRow><MaxTileRow>2</MaxTileRow><MinTileCol>0</MinTileCol><MaxTileCol>3</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>3</TileMatrix><MinTileRow>1</MinTileRow><MaxTileRow>4</MaxTileRow><MinTileCol>0</MinTileCol><MaxTileCol>7</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>4</TileMatrix><MinTileRow>3</MinTileRow><MaxTileRow>9</MaxTileRow><MinTileCol>1</MinTileCol><MaxTileCol>15</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>5</TileMatrix><MinTileRow>6</MinTileRow><MaxTileRow>18</MaxTileRow><MinTileCol>2</MinTileCol><MaxTileCol>31</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>6</TileMatrix><MinTileRow>13</MinTileRow><MaxTileRow>36</MaxTileRow><MinTileCol>5</MinTileCol><MaxTileCol>63</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>7</TileMatrix><MinTileRow>26</MinTileRow><MaxTileRow>73</MaxTileRow><MinTileCol>10</MinTileCol><MaxTileCol>126</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>8</TileMatrix><MinTileRow>53</MinTileRow><MaxTileRow>146</MaxTileRow><MinTileCol>21</MinTileCol><MaxTileCol>252</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>9</TileMatrix><MinTileRow>107</MinTileRow><MaxTileRow>292</MaxTileRow><MinTileCol>42</MinTileCol><MaxTileCol>505</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>10</TileMatrix><MinTileRow>214</MinTileRow><MaxTileRow>585</MaxTileRow><MinTileCol>85</MinTileCol><MaxTileCol>1011</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>11</TileMatrix><MinTileRow>429</MinTileRow><MaxTileRow>1171</MaxTileRow><MinTileCol>171</MinTileCol><MaxTileCol>2023</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>12</TileMatrix><MinTileRow>859</MinTileRow><MaxTileRow>2343</MaxTileRow><MinTileCol>343</MinTileCol><MaxTileCol>4046</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>13</TileMatrix><MinTileRow>1718</MinTileRow><MaxTileRow>4687</MaxTileRow><MinTileCol>687</MinTileCol><MaxTileCol>8093</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>14</TileMatrix><MinTileRow>3436</MinTileRow><MaxTileRow>9375</MaxTileRow><MinTileCol>1374</MinTileCol><MaxTileCol>16187</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>15</TileMatrix><MinTileRow>6873</MinTileRow><MaxTileRow>18751</MaxTileRow><MinTileCol>2748</MinTileCol><MaxTileCol>32375</MaxTileCol></TileMatrixLimits></TileMatrixSetLimits></TileMatrixSetLink></Layer>
    <Layer>
      <ows:Title>GRB-basiskaart selectie</ows:Title>
      <ows:Abstract>Deze laag toont alle (GRB-) entiteiten die zichtbaar zijn in de GRB-basiskaart, met uitzondering van gebouwen, gebouwaanhorigheden, percelen, perceelsgrenzen en terreinen.</ows:Abstract>
      <ows:Keywords>
        <ows:Keyword>actualisatie</ows:Keyword>
        <ows:Keyword>administratieve grens</ows:Keyword>
        <ows:Keyword>adres</ows:Keyword>
        <ows:Keyword>afdak</ows:Keyword>
        <ows:Keyword>afrit</ows:Keyword>
        <ows:Keyword>afrit</ows:Keyword>
        <ows:Keyword>anomalie</ows:Keyword>
        <ows:Keyword>as built</ows:Keyword>
        <ows:Keyword>atlas</ows:Keyword>
        <ows:Keyword>autosnelweg</ows:Keyword>
        <ows:Keyword>baangracht</ows:Keyword>
        <ows:Keyword>basiskaart</ows:Keyword>
        <ows:Keyword>beek</ows:Keyword>
        <ows:Keyword>bergplaats</ows:Keyword>
        <ows:Keyword>berm</ows:Keyword>
        <ows:Keyword>bevaarbaar</ows:Keyword>
        <ows:Keyword>boordsteen</ows:Keyword>
        <ows:Keyword>bouwsel</ows:Keyword>
        <ows:Keyword>brandkraan</ows:Keyword>
        <ows:Keyword>brug</ows:Keyword>
        <ows:Keyword>bushok</ows:Keyword>
        <ows:Keyword>cabine</ows:Keyword>
        <ows:Keyword>chemisch</ows:Keyword>
        <ows:Keyword>circulatiezone</ows:Keyword>
        <ows:Keyword>constructie</ows:Keyword>
        <ows:Keyword>corridor</ows:Keyword>
        <ows:Keyword>CRAB</ows:Keyword>
        <ows:Keyword>deksel</ows:Keyword>
        <ows:Keyword>dienstweg</ows:Keyword>
        <ows:Keyword>drempel</ows:Keyword>
        <ows:Keyword>elektriciteitspaal</ows:Keyword>
        <ows:Keyword>fietsstalling</ows:Keyword>
        <ows:Keyword>fietsweg</ows:Keyword>
        <ows:Keyword>FLEPOS</ows:Keyword>
        <ows:Keyword>flitspaal</ows:Keyword>
        <ows:Keyword>fontein</ows:Keyword>
        <ows:Keyword>fout</ows:Keyword>
        <ows:Keyword>garagetoegang</ows:Keyword>
        <ows:Keyword>GDF</ows:Keyword>
        <ows:Keyword>gebouw</ows:Keyword>
        <ows:Keyword>gemeentegrens</ows:Keyword>
        <ows:Keyword>gemeenteterritorium</ows:Keyword>
        <ows:Keyword>gevel</ows:Keyword>
        <ows:Keyword>gevellijn</ows:Keyword>
        <ows:Keyword>gevelpunt</ows:Keyword>
        <ows:Keyword>golfbreker</ows:Keyword>
        <ows:Keyword>gracht</ows:Keyword>
        <ows:Keyword>GRB gis</ows:Keyword>
        <ows:Keyword>GRB</ows:Keyword>
        <ows:Keyword>GRB-databank</ows:Keyword>
        <ows:Keyword>GRB-gis</ows:Keyword>
        <ows:Keyword>grenspaal</ows:Keyword>
        <ows:Keyword>grootschalig</ows:Keyword>
        <ows:Keyword>havendam</ows:Keyword>
        <ows:Keyword>huisnummer</ows:Keyword>
        <ows:Keyword>hydrografisch</ows:Keyword>
        <ows:Keyword>informatiesysteem</ows:Keyword>
        <ows:Keyword>inrit</ows:Keyword>
        <ows:Keyword>installatie</ows:Keyword>
        <ows:Keyword>kadaster</ows:Keyword>
        <ows:Keyword>kadastergrootschalig</ows:Keyword>
        <ows:Keyword>kadastraal</ows:Keyword>
        <ows:Keyword>kantsteen</ows:Keyword>
        <ows:Keyword>keermuur</ows:Keyword>
        <ows:Keyword>koeltoren</ows:Keyword>
        <ows:Keyword>kopmuur</ows:Keyword>
        <ows:Keyword>kunstwerk</ows:Keyword>
        <ows:Keyword>lokaal</ows:Keyword>
        <ows:Keyword>longitudinaal</ows:Keyword>
        <ows:Keyword>loopbrug</ows:Keyword>
        <ows:Keyword>luik</ows:Keyword>
        <ows:Keyword>mast</ows:Keyword>
        <ows:Keyword>meer</ows:Keyword>
        <ows:Keyword>meerpaal</ows:Keyword>
        <ows:Keyword>metro</ows:Keyword>
        <ows:Keyword>monument</ows:Keyword>
        <ows:Keyword>mutatie</ows:Keyword>
        <ows:Keyword>muur</ows:Keyword>
        <ows:Keyword>NIS</ows:Keyword>
        <ows:Keyword>nisocde</ows:Keyword>
        <ows:Keyword>nummer</ows:Keyword>
        <ows:Keyword>onbevaarbaar</ows:Keyword>
        <ows:Keyword>onderdak</ows:Keyword>
        <ows:Keyword>onderkeldering</ows:Keyword>
        <ows:Keyword>onverharde zone</ows:Keyword>
        <ows:Keyword>onvolledigheid</ows:Keyword>
        <ows:Keyword>oppervaktewater</ows:Keyword>
        <ows:Keyword>oprit</ows:Keyword>
        <ows:Keyword>opslagtank</ows:Keyword>
        <ows:Keyword>overbrugging</ows:Keyword>
        <ows:Keyword>paal bovenleiding telefoonpaal</ows:Keyword>
        <ows:Keyword>paal</ows:Keyword>
        <ows:Keyword>parallelweg</ows:Keyword>
        <ows:Keyword>perceel</ows:Keyword>
        <ows:Keyword>pijler</ows:Keyword>
        <ows:Keyword>planimetrisch</ows:Keyword>
        <ows:Keyword>praatpaal</ows:Keyword>
        <ows:Keyword>putdeksel</ows:Keyword>
        <ows:Keyword>rail</ows:Keyword>
        <ows:Keyword>referentiebestand</ows:Keyword>
        <ows:Keyword>rijbaan</ows:Keyword>
        <ows:Keyword>rijstrook</ows:Keyword>
        <ows:Keyword>rivier</ows:Keyword>
        <ows:Keyword>rooster</ows:Keyword>
        <ows:Keyword>rotonde</ows:Keyword>
        <ows:Keyword>schoorsteen</ows:Keyword>
        <ows:Keyword>silo</ows:Keyword>
        <ows:Keyword>sloot</ows:Keyword>
        <ows:Keyword>spoor</ows:Keyword>
        <ows:Keyword>spoorbaan</ows:Keyword>
        <ows:Keyword>spoorrail</ows:Keyword>
        <ows:Keyword>spoorstaaf</ows:Keyword>
        <ows:Keyword>staketsel</ows:Keyword>
        <ows:Keyword>standbeeld</ows:Keyword>
        <ows:Keyword>stootband</ows:Keyword>
        <ows:Keyword>straat</ows:Keyword>
        <ows:Keyword>straatnaam</ows:Keyword>
        <ows:Keyword>strandhoofd</ows:Keyword>
        <ows:Keyword>surplusgebied</ows:Keyword>
        <ows:Keyword>telefooncabine</ows:Keyword>
        <ows:Keyword>terrein</ows:Keyword>
        <ows:Keyword>territorium</ows:Keyword>
        <ows:Keyword>toegang</ows:Keyword>
        <ows:Keyword>tram</ows:Keyword>
        <ows:Keyword>tramrail</ows:Keyword>
        <ows:Keyword>tramweg</ows:Keyword>
        <ows:Keyword>transport</ows:Keyword>
        <ows:Keyword>trap</ows:Keyword>
        <ows:Keyword>trein</ows:Keyword>
        <ows:Keyword>tunnelmond</ows:Keyword>
        <ows:Keyword>uitrit</ows:Keyword>
        <ows:Keyword>vangrail</ows:Keyword>
        <ows:Keyword>ventweg</ows:Keyword>
        <ows:Keyword>verbinding</ows:Keyword>
        <ows:Keyword>verdieping</ows:Keyword>
        <ows:Keyword>verharding</ows:Keyword>
        <ows:Keyword>verhoging</ows:Keyword>
        <ows:Keyword>verkeer</ows:Keyword>
        <ows:Keyword>verkeersdrempel</ows:Keyword>
        <ows:Keyword>verkeerslicht</ows:Keyword>
        <ows:Keyword>verkeersplateau</ows:Keyword>
        <ows:Keyword>verkeersplein</ows:Keyword>
        <ows:Keyword>verlaging</ows:Keyword>
        <ows:Keyword>verlichtingspaal</ows:Keyword>
        <ows:Keyword>VHA</ows:Keyword>
        <ows:Keyword>vijver</ows:Keyword>
        <ows:Keyword>VMM</ows:Keyword>
        <ows:Keyword>voetpad</ows:Keyword>
        <ows:Keyword>wandelweg</ows:Keyword>
        <ows:Keyword>water</ows:Keyword>
        <ows:Keyword>watergang</ows:Keyword>
        <ows:Keyword>waterloop</ows:Keyword>
        <ows:Keyword>waterloopsegment</ows:Keyword>
        <ows:Keyword>wateroppervlak</ows:Keyword>
        <ows:Keyword>watertoren</ows:Keyword>
        <ows:Keyword>waterweg</ows:Keyword>
        <ows:Keyword>weg</ows:Keyword>
        <ows:Keyword>wegaanhorigheid</ows:Keyword>
        <ows:Keyword>wegbaan</ows:Keyword>
        <ows:Keyword>weggebruiker</ows:Keyword>
        <ows:Keyword>weginrichting</ows:Keyword>
        <ows:Keyword>wegknoop</ows:Keyword>
        <ows:Keyword>wegsegment</ows:Keyword>
      </ows:Keywords>
      <ows:Identifier>grb_sel</ows:Identifier>
      <ows:WGS84BoundingBox>
        <ows:LowerCorner>2.530000 50.685000</ows:LowerCorner>
        <ows:UpperCorner>5.920000 51.520000</ows:UpperCorner>
      </ows:WGS84BoundingBox>
      <ows:Metadata xlink:type="simple" xlink:href="https://metadata.vlaanderen.be/srv/dut/csw?request=GetRecordById&amp;service=CSW&amp;constraintLanguage=CQL_TEXT&amp;version=2.0.2&amp;resultType=results&amp;ElementSetName=full&amp;typenames=csw:Record&amp;id=7C823055-7BBF-4D62-B55E-F85C30D53162&amp;OUTPUTSCHEMA=http://www.isotc211.org/2005/gmd" />
      <ows:Metadata xlink:type="simple" xlink:href="https://metadata.vlaanderen.be/srv/dut/catalog.search#/metadata/7C823055-7BBF-4D62-B55E-F85C30D53162" />
      <ows:DatasetDescriptionSummary>
        <ows:Identifier>E2707D13-B366-4D25-A286-E1B1330CADF7</ows:Identifier>
      </ows:DatasetDescriptionSummary>
      <Style isDefault="true">
        <ows:Title>GRB-Selectie</ows:Title>
        <ows:Identifier />
      </Style>
      <Format>image/png</Format>
      <TileMatrixSetLink>
        <TileMatrixSet>GoogleMapsVL</TileMatrixSet>
        <TileMatrixSetLimits>
          <TileMatrixLimits>
            <TileMatrix>0</TileMatrix>
            <MinTileRow>0</MinTileRow>
            <MaxTileRow>0</MaxTileRow>
            <MinTileCol>0</MinTileCol>
            <MaxTileCol>0</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>1</TileMatrix>
            <MinTileRow>0</MinTileRow>
            <MaxTileRow>0</MaxTileRow>
            <MinTileCol>1</MinTileCol>
            <MaxTileCol>1</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>2</TileMatrix>
            <MinTileRow>1</MinTileRow>
            <MaxTileRow>1</MaxTileRow>
            <MinTileCol>2</MinTileCol>
            <MaxTileCol>2</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>3</TileMatrix>
            <MinTileRow>2</MinTileRow>
            <MaxTileRow>2</MaxTileRow>
            <MinTileCol>4</MinTileCol>
            <MaxTileCol>4</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>4</TileMatrix>
            <MinTileRow>5</MinTileRow>
            <MaxTileRow>5</MaxTileRow>
            <MinTileCol>8</MinTileCol>
            <MaxTileCol>8</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>5</TileMatrix>
            <MinTileRow>10</MinTileRow>
            <MaxTileRow>10</MaxTileRow>
            <MinTileCol>16</MinTileCol>
            <MaxTileCol>16</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>6</TileMatrix>
            <MinTileRow>21</MinTileRow>
            <MaxTileRow>21</MaxTileRow>
            <MinTileCol>32</MinTileCol>
            <MaxTileCol>33</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>7</TileMatrix>
            <MinTileRow>42</MinTileRow>
            <MaxTileRow>43</MaxTileRow>
            <MinTileCol>64</MinTileCol>
            <MaxTileCol>66</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>8</TileMatrix>
            <MinTileRow>85</MinTileRow>
            <MaxTileRow>86</MaxTileRow>
            <MinTileCol>129</MinTileCol>
            <MaxTileCol>132</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>9</TileMatrix>
            <MinTileRow>170</MinTileRow>
            <MaxTileRow>172</MaxTileRow>
            <MinTileCol>259</MinTileCol>
            <MaxTileCol>264</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>10</TileMatrix>
            <MinTileRow>340</MinTileRow>
            <MaxTileRow>344</MaxTileRow>
            <MinTileCol>519</MinTileCol>
            <MaxTileCol>528</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>11</TileMatrix>
            <MinTileRow>680</MinTileRow>
            <MaxTileRow>688</MaxTileRow>
            <MinTileCol>1038</MinTileCol>
            <MaxTileCol>1057</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>12</TileMatrix>
            <MinTileRow>1361</MinTileRow>
            <MaxTileRow>1377</MaxTileRow>
            <MinTileCol>2076</MinTileCol>
            <MaxTileCol>2115</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>13</TileMatrix>
            <MinTileRow>2723</MinTileRow>
            <MaxTileRow>2755</MaxTileRow>
            <MinTileCol>4153</MinTileCol>
            <MaxTileCol>4231</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>14</TileMatrix>
            <MinTileRow>5447</MinTileRow>
            <MaxTileRow>5510</MaxTileRow>
            <MinTileCol>8306</MinTileCol>
            <MaxTileCol>8462</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>15</TileMatrix>
            <MinTileRow>10895</MinTileRow>
            <MaxTileRow>11020</MaxTileRow>
            <MinTileCol>16613</MinTileCol>
            <MaxTileCol>16924</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>16</TileMatrix>
            <MinTileRow>21790</MinTileRow>
            <MaxTileRow>22041</MaxTileRow>
            <MinTileCol>33227</MinTileCol>
            <MaxTileCol>33849</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>17</TileMatrix>
            <MinTileRow>43580</MinTileRow>
            <MaxTileRow>44083</MaxTileRow>
            <MinTileCol>66455</MinTileCol>
            <MaxTileCol>67698</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>18</TileMatrix>
            <MinTileRow>87161</MinTileRow>
            <MaxTileRow>88167</MaxTileRow>
            <MinTileCol>132910</MinTileCol>
            <MaxTileCol>135396</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>19</TileMatrix>
            <MinTileRow>174322</MinTileRow>
            <MaxTileRow>176334</MaxTileRow>
            <MinTileCol>265821</MinTileCol>
            <MaxTileCol>270792</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>20</TileMatrix>
            <MinTileRow>348645</MinTileRow>
            <MaxTileRow>352669</MaxTileRow>
            <MinTileCol>531643</MinTileCol>
            <MaxTileCol>541585</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>21</TileMatrix>
            <MinTileRow>697290</MinTileRow>
            <MaxTileRow>705338</MaxTileRow>
            <MinTileCol>1063287</MinTileCol>
            <MaxTileCol>1083170</MaxTileCol>
          </TileMatrixLimits>
        </TileMatrixSetLimits>
      </TileMatrixSetLink>
      <TileMatrixSetLink>
        <TileMatrixSet>WGS84VL</TileMatrixSet>
        <TileMatrixSetLimits>
          <TileMatrixLimits>
            <TileMatrix>0</TileMatrix>
            <MinTileRow>0</MinTileRow>
            <MaxTileRow>0</MaxTileRow>
            <MinTileCol>0</MinTileCol>
            <MaxTileCol>0</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>1</TileMatrix>
            <MinTileRow>0</MinTileRow>
            <MaxTileRow>0</MaxTileRow>
            <MinTileCol>1</MinTileCol>
            <MaxTileCol>1</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>2</TileMatrix>
            <MinTileRow>0</MinTileRow>
            <MaxTileRow>0</MaxTileRow>
            <MinTileCol>2</MinTileCol>
            <MaxTileCol>2</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>3</TileMatrix>
            <MinTileRow>0</MinTileRow>
            <MaxTileRow>0</MaxTileRow>
            <MinTileCol>4</MinTileCol>
            <MaxTileCol>4</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>4</TileMatrix>
            <MinTileRow>1</MinTileRow>
            <MaxTileRow>1</MaxTileRow>
            <MinTileCol>8</MinTileCol>
            <MaxTileCol>8</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>5</TileMatrix>
            <MinTileRow>3</MinTileRow>
            <MaxTileRow>3</MaxTileRow>
            <MinTileCol>16</MinTileCol>
            <MaxTileCol>16</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>6</TileMatrix>
            <MinTileRow>6</MinTileRow>
            <MaxTileRow>6</MaxTileRow>
            <MinTileCol>32</MinTileCol>
            <MaxTileCol>33</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>7</TileMatrix>
            <MinTileRow>13</MinTileRow>
            <MaxTileRow>13</MaxTileRow>
            <MinTileCol>64</MinTileCol>
            <MaxTileCol>66</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>8</TileMatrix>
            <MinTileRow>27</MinTileRow>
            <MaxTileRow>27</MaxTileRow>
            <MinTileCol>129</MinTileCol>
            <MaxTileCol>132</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>9</TileMatrix>
            <MinTileRow>54</MinTileRow>
            <MaxTileRow>55</MaxTileRow>
            <MinTileCol>259</MinTileCol>
            <MaxTileCol>264</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>10</TileMatrix>
            <MinTileRow>109</MinTileRow>
            <MaxTileRow>111</MaxTileRow>
            <MinTileCol>519</MinTileCol>
            <MaxTileCol>528</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>11</TileMatrix>
            <MinTileRow>218</MinTileRow>
            <MaxTileRow>223</MaxTileRow>
            <MinTileCol>1038</MinTileCol>
            <MaxTileCol>1057</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>12</TileMatrix>
            <MinTileRow>437</MinTileRow>
            <MaxTileRow>447</MaxTileRow>
            <MinTileCol>2076</MinTileCol>
            <MaxTileCol>2115</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>13</TileMatrix>
            <MinTileRow>875</MinTileRow>
            <MaxTileRow>895</MaxTileRow>
            <MinTileCol>4153</MinTileCol>
            <MaxTileCol>4231</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>14</TileMatrix>
            <MinTileRow>1751</MinTileRow>
            <MaxTileRow>1791</MaxTileRow>
            <MinTileCol>8306</MinTileCol>
            <MaxTileCol>8462</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>15</TileMatrix>
            <MinTileRow>3503</MinTileRow>
            <MaxTileRow>3582</MaxTileRow>
            <MinTileCol>16613</MinTileCol>
            <MaxTileCol>16924</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>16</TileMatrix>
            <MinTileRow>7006</MinTileRow>
            <MaxTileRow>7164</MaxTileRow>
            <MinTileCol>33227</MinTileCol>
            <MaxTileCol>33849</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>17</TileMatrix>
            <MinTileRow>14012</MinTileRow>
            <MaxTileRow>14328</MaxTileRow>
            <MinTileCol>66455</MinTileCol>
            <MaxTileCol>67698</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>18</TileMatrix>
            <MinTileRow>28024</MinTileRow>
            <MaxTileRow>28656</MaxTileRow>
            <MinTileCol>132910</MinTileCol>
            <MaxTileCol>135396</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>19</TileMatrix>
            <MinTileRow>56048</MinTileRow>
            <MaxTileRow>57312</MaxTileRow>
            <MinTileCol>265821</MinTileCol>
            <MaxTileCol>270792</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>20</TileMatrix>
            <MinTileRow>112097</MinTileRow>
            <MaxTileRow>114625</MaxTileRow>
            <MinTileCol>531643</MinTileCol>
            <MaxTileCol>541585</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>21</TileMatrix>
            <MinTileRow>224194</MinTileRow>
            <MaxTileRow>229250</MaxTileRow>
            <MinTileCol>1063287</MinTileCol>
            <MaxTileCol>1083170</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>22</TileMatrix>
            <MinTileRow>448388</MinTileRow>
            <MaxTileRow>458500</MaxTileRow>
            <MinTileCol>2126575</MinTileCol>
            <MaxTileCol>2166341</MaxTileCol>
          </TileMatrixLimits>
        </TileMatrixSetLimits>
      </TileMatrixSetLink>
      <TileMatrixSetLink>
        <TileMatrixSet>BPL72VL</TileMatrixSet>
        <TileMatrixSetLimits>
          <TileMatrixLimits>
            <TileMatrix>0</TileMatrix>
            <MinTileRow>0</MinTileRow>
            <MaxTileRow>0</MaxTileRow>
            <MinTileCol>0</MinTileCol>
            <MaxTileCol>0</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>1</TileMatrix>
            <MinTileRow>0</MinTileRow>
            <MaxTileRow>1</MaxTileRow>
            <MinTileCol>0</MinTileCol>
            <MaxTileCol>1</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>2</TileMatrix>
            <MinTileRow>1</MinTileRow>
            <MaxTileRow>2</MaxTileRow>
            <MinTileCol>0</MinTileCol>
            <MaxTileCol>3</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>3</TileMatrix>
            <MinTileRow>2</MinTileRow>
            <MaxTileRow>5</MaxTileRow>
            <MinTileCol>0</MinTileCol>
            <MaxTileCol>7</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>4</TileMatrix>
            <MinTileRow>5</MinTileRow>
            <MaxTileRow>11</MaxTileRow>
            <MinTileCol>0</MinTileCol>
            <MaxTileCol>15</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>5</TileMatrix>
            <MinTileRow>10</MinTileRow>
            <MaxTileRow>22</MaxTileRow>
            <MinTileCol>1</MinTileCol>
            <MaxTileCol>30</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>6</TileMatrix>
            <MinTileRow>20</MinTileRow>
            <MaxTileRow>44</MaxTileRow>
            <MinTileCol>2</MinTileCol>
            <MaxTileCol>60</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>7</TileMatrix>
            <MinTileRow>41</MinTileRow>
            <MaxTileRow>88</MaxTileRow>
            <MinTileCol>5</MinTileCol>
            <MaxTileCol>121</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>8</TileMatrix>
            <MinTileRow>82</MinTileRow>
            <MaxTileRow>176</MaxTileRow>
            <MinTileCol>11</MinTileCol>
            <MaxTileCol>243</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>9</TileMatrix>
            <MinTileRow>164</MinTileRow>
            <MaxTileRow>352</MaxTileRow>
            <MinTileCol>23</MinTileCol>
            <MaxTileCol>486</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>10</TileMatrix>
            <MinTileRow>328</MinTileRow>
            <MaxTileRow>705</MaxTileRow>
            <MinTileCol>47</MinTileCol>
            <MaxTileCol>972</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>11</TileMatrix>
            <MinTileRow>656</MinTileRow>
            <MaxTileRow>1411</MaxTileRow>
            <MinTileCol>94</MinTileCol>
            <MaxTileCol>1945</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>12</TileMatrix>
            <MinTileRow>1313</MinTileRow>
            <MaxTileRow>2822</MaxTileRow>
            <MinTileCol>188</MinTileCol>
            <MaxTileCol>3891</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>13</TileMatrix>
            <MinTileRow>2627</MinTileRow>
            <MaxTileRow>5644</MaxTileRow>
            <MinTileCol>377</MinTileCol>
            <MaxTileCol>7783</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>14</TileMatrix>
            <MinTileRow>5254</MinTileRow>
            <MaxTileRow>11289</MaxTileRow>
            <MinTileCol>754</MinTileCol>
            <MaxTileCol>15566</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>15</TileMatrix>
            <MinTileRow>10509</MinTileRow>
            <MaxTileRow>22578</MaxTileRow>
            <MinTileCol>1509</MinTileCol>
            <MaxTileCol>31133</MaxTileCol>
          </TileMatrixLimits>
        </TileMatrixSetLimits>
      </TileMatrixSetLink>
    <TileMatrixSetLink><TileMatrixSet>BPL2008VL</TileMatrixSet><TileMatrixSetLimits><TileMatrixLimits><TileMatrix>0</TileMatrix><MinTileRow>0</MinTileRow><MaxTileRow>0</MaxTileRow><MinTileCol>0</MinTileCol><MaxTileCol>0</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>1</TileMatrix><MinTileRow>0</MinTileRow><MaxTileRow>1</MaxTileRow><MinTileCol>0</MinTileCol><MaxTileCol>1</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>2</TileMatrix><MinTileRow>0</MinTileRow><MaxTileRow>2</MaxTileRow><MinTileCol>0</MinTileCol><MaxTileCol>3</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>3</TileMatrix><MinTileRow>1</MinTileRow><MaxTileRow>4</MaxTileRow><MinTileCol>0</MinTileCol><MaxTileCol>7</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>4</TileMatrix><MinTileRow>3</MinTileRow><MaxTileRow>9</MaxTileRow><MinTileCol>1</MinTileCol><MaxTileCol>15</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>5</TileMatrix><MinTileRow>6</MinTileRow><MaxTileRow>18</MaxTileRow><MinTileCol>2</MinTileCol><MaxTileCol>31</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>6</TileMatrix><MinTileRow>13</MinTileRow><MaxTileRow>36</MaxTileRow><MinTileCol>5</MinTileCol><MaxTileCol>63</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>7</TileMatrix><MinTileRow>26</MinTileRow><MaxTileRow>73</MaxTileRow><MinTileCol>10</MinTileCol><MaxTileCol>126</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>8</TileMatrix><MinTileRow>53</MinTileRow><MaxTileRow>146</MaxTileRow><MinTileCol>21</MinTileCol><MaxTileCol>252</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>9</TileMatrix><MinTileRow>107</MinTileRow><MaxTileRow>292</MaxTileRow><MinTileCol>42</MinTileCol><MaxTileCol>505</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>10</TileMatrix><MinTileRow>214</MinTileRow><MaxTileRow>585</MaxTileRow><MinTileCol>85</MinTileCol><MaxTileCol>1011</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>11</TileMatrix><MinTileRow>429</MinTileRow><MaxTileRow>1171</MaxTileRow><MinTileCol>171</MinTileCol><MaxTileCol>2023</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>12</TileMatrix><MinTileRow>859</MinTileRow><MaxTileRow>2343</MaxTileRow><MinTileCol>343</MinTileCol><MaxTileCol>4046</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>13</TileMatrix><MinTileRow>1718</MinTileRow><MaxTileRow>4687</MaxTileRow><MinTileCol>687</MinTileCol><MaxTileCol>8093</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>14</TileMatrix><MinTileRow>3436</MinTileRow><MaxTileRow>9375</MaxTileRow><MinTileCol>1374</MinTileCol><MaxTileCol>16187</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>15</TileMatrix><MinTileRow>6873</MinTileRow><MaxTileRow>18751</MaxTileRow><MinTileCol>2748</MinTileCol><MaxTileCol>32375</MaxTileCol></TileMatrixLimits></TileMatrixSetLimits></TileMatrixSetLink></Layer>
    <TileMatrixSet>
      <ows:Identifier>GoogleMapsVL</ows:Identifier>
      <ows:BoundingBox crs="EPSG:3857">
        <ows:LowerCorner>-20037508.342789 -20037508.342789</ows:LowerCorner>
        <ows:UpperCorner>20037508.342789 20037508.342789</ows:UpperCorner>
      </ows:BoundingBox>
      <ows:SupportedCRS>EPSG:3857</ows:SupportedCRS>
      <WellKnownScaleSet>urn:ogc:def:wkss:OGC:1.0:GoogleMapsCompatible</WellKnownScaleSet>
      <TileMatrix>
        <ows:Identifier>0</ows:Identifier>
        <ScaleDenominator>559082264.02871787548065185547</ScaleDenominator>
        <TopLeftCorner>-20037508.342789 20037508.342789</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>1</MatrixWidth>
        <MatrixHeight>1</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>1</ows:Identifier>
        <ScaleDenominator>279541132.01435887813568115234</ScaleDenominator>
        <TopLeftCorner>-20037508.342789 20037508.342789</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>2</MatrixWidth>
        <MatrixHeight>2</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>2</ows:Identifier>
        <ScaleDenominator>139770566.00717940926551818848</ScaleDenominator>
        <TopLeftCorner>-20037508.342789 20037508.342789</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>4</MatrixWidth>
        <MatrixHeight>4</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>3</ows:Identifier>
        <ScaleDenominator>69885283.00358971953392028809</ScaleDenominator>
        <TopLeftCorner>-20037508.342789 20037508.342789</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>8</MatrixWidth>
        <MatrixHeight>8</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>4</ows:Identifier>
        <ScaleDenominator>34942641.50179485976696014404</ScaleDenominator>
        <TopLeftCorner>-20037508.342789 20037508.342789</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>16</MatrixWidth>
        <MatrixHeight>16</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>5</ows:Identifier>
        <ScaleDenominator>17471320.75089742988348007202</ScaleDenominator>
        <TopLeftCorner>-20037508.342789 20037508.342789</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>32</MatrixWidth>
        <MatrixHeight>32</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>6</ows:Identifier>
        <ScaleDenominator>8735660.37544871494174003601</ScaleDenominator>
        <TopLeftCorner>-20037508.342789 20037508.342789</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>64</MatrixWidth>
        <MatrixHeight>64</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>7</ows:Identifier>
        <ScaleDenominator>4367830.18772435747087001801</ScaleDenominator>
        <TopLeftCorner>-20037508.342789 20037508.342789</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>128</MatrixWidth>
        <MatrixHeight>128</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>8</ows:Identifier>
        <ScaleDenominator>2183915.09386217873543500900</ScaleDenominator>
        <TopLeftCorner>-20037508.342789 20037508.342789</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>256</MatrixWidth>
        <MatrixHeight>256</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>9</ows:Identifier>
        <ScaleDenominator>1091957.54693108866922557354</ScaleDenominator>
        <TopLeftCorner>-20037508.342789 20037508.342789</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>512</MatrixWidth>
        <MatrixHeight>512</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>10</ows:Identifier>
        <ScaleDenominator>545978.77346554468385875225</ScaleDenominator>
        <TopLeftCorner>-20037508.342789 20037508.342789</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>1024</MatrixWidth>
        <MatrixHeight>1024</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>11</ows:Identifier>
        <ScaleDenominator>272989.38673277228372171521</ScaleDenominator>
        <TopLeftCorner>-20037508.342789 20037508.342789</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>2048</MatrixWidth>
        <MatrixHeight>2048</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>12</ows:Identifier>
        <ScaleDenominator>136494.69336638617096468806</ScaleDenominator>
        <TopLeftCorner>-20037508.342789 20037508.342789</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>4096</MatrixWidth>
        <MatrixHeight>4096</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>13</ows:Identifier>
        <ScaleDenominator>68247.34668319307093042880</ScaleDenominator>
        <TopLeftCorner>-20037508.342789 20037508.342789</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>8192</MatrixWidth>
        <MatrixHeight>8192</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>14</ows:Identifier>
        <ScaleDenominator>34123.67334159654274117202</ScaleDenominator>
        <TopLeftCorner>-20037508.342789 20037508.342789</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>16384</MatrixWidth>
        <MatrixHeight>16384</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>15</ows:Identifier>
        <ScaleDenominator>17061.83667079827137058601</ScaleDenominator>
        <TopLeftCorner>-20037508.342789 20037508.342789</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>32768</MatrixWidth>
        <MatrixHeight>32768</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>16</ows:Identifier>
        <ScaleDenominator>8530.91833539913568529300</ScaleDenominator>
        <TopLeftCorner>-20037508.342789 20037508.342789</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>65536</MatrixWidth>
        <MatrixHeight>65536</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>17</ows:Identifier>
        <ScaleDenominator>4265.45916769956784264650</ScaleDenominator>
        <TopLeftCorner>-20037508.342789 20037508.342789</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>131072</MatrixWidth>
        <MatrixHeight>131072</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>18</ows:Identifier>
        <ScaleDenominator>2132.72958384978392132325</ScaleDenominator>
        <TopLeftCorner>-20037508.342789 20037508.342789</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>262144</MatrixWidth>
        <MatrixHeight>262144</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>19</ows:Identifier>
        <ScaleDenominator>1066.36479192489309753000</ScaleDenominator>
        <TopLeftCorner>-20037508.342789 20037508.342789</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>524288</MatrixWidth>
        <MatrixHeight>524288</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>20</ows:Identifier>
        <ScaleDenominator>533.18239596244654876500</ScaleDenominator>
        <TopLeftCorner>-20037508.342789 20037508.342789</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>1048576</MatrixWidth>
        <MatrixHeight>1048576</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>21</ows:Identifier>
        <ScaleDenominator>266.59119798122287647857</ScaleDenominator>
        <TopLeftCorner>-20037508.342789 20037508.342789</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>2097152</MatrixWidth>
        <MatrixHeight>2097152</MatrixHeight>
      </TileMatrix>
    </TileMatrixSet>
    <TileMatrixSet>
      <ows:Identifier>BPL72VL</ows:Identifier>
      <ows:BoundingBox crs="urn:ogc:def:crs:EPSG:6.3:31370">
        <ows:LowerCorner>9928.000000 66928.000000</ows:LowerCorner>
        <ows:UpperCorner>272072.000000 329072.000000</ows:UpperCorner>
      </ows:BoundingBox>
      <ows:SupportedCRS>EPSG:31370</ows:SupportedCRS>
      <TileMatrix>
        <ows:Identifier>0</ows:Identifier>
        <ScaleDenominator>3657142.85714285727590322495</ScaleDenominator>
        <TopLeftCorner>9928.000000 329072.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>1</MatrixWidth>
        <MatrixHeight>1</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>1</ows:Identifier>
        <ScaleDenominator>1828571.42857142863795161247</ScaleDenominator>
        <TopLeftCorner>9928.000000 329072.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>2</MatrixWidth>
        <MatrixHeight>2</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>2</ows:Identifier>
        <ScaleDenominator>914285.71428571431897580624</ScaleDenominator>
        <TopLeftCorner>9928.000000 329072.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>4</MatrixWidth>
        <MatrixHeight>4</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>3</ows:Identifier>
        <ScaleDenominator>457142.85714285715948790312</ScaleDenominator>
        <TopLeftCorner>9928.000000 329072.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>8</MatrixWidth>
        <MatrixHeight>8</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>4</ows:Identifier>
        <ScaleDenominator>228571.42857142857974395156</ScaleDenominator>
        <TopLeftCorner>9928.000000 329072.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>16</MatrixWidth>
        <MatrixHeight>16</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>5</ows:Identifier>
        <ScaleDenominator>114285.71428571428987197578</ScaleDenominator>
        <TopLeftCorner>9928.000000 329072.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>32</MatrixWidth>
        <MatrixHeight>32</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>6</ows:Identifier>
        <ScaleDenominator>57142.85714285714493598789</ScaleDenominator>
        <TopLeftCorner>9928.000000 329072.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>64</MatrixWidth>
        <MatrixHeight>64</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>7</ows:Identifier>
        <ScaleDenominator>28571.42857142857246799394</ScaleDenominator>
        <TopLeftCorner>9928.000000 329072.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>128</MatrixWidth>
        <MatrixHeight>128</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>8</ows:Identifier>
        <ScaleDenominator>14285.71428571428623399697</ScaleDenominator>
        <TopLeftCorner>9928.000000 329072.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>256</MatrixWidth>
        <MatrixHeight>256</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>9</ows:Identifier>
        <ScaleDenominator>7142.85714285714311699849</ScaleDenominator>
        <TopLeftCorner>9928.000000 329072.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>512</MatrixWidth>
        <MatrixHeight>512</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>10</ows:Identifier>
        <ScaleDenominator>3571.42857142857155849924</ScaleDenominator>
        <TopLeftCorner>9928.000000 329072.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>1024</MatrixWidth>
        <MatrixHeight>1024</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>11</ows:Identifier>
        <ScaleDenominator>1785.71428571428577924962</ScaleDenominator>
        <TopLeftCorner>9928.000000 329072.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>2048</MatrixWidth>
        <MatrixHeight>2048</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>12</ows:Identifier>
        <ScaleDenominator>892.85714285714288962481</ScaleDenominator>
        <TopLeftCorner>9928.000000 329072.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>4096</MatrixWidth>
        <MatrixHeight>4096</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>13</ows:Identifier>
        <ScaleDenominator>446.42857142857144481241</ScaleDenominator>
        <TopLeftCorner>9928.000000 329072.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>8192</MatrixWidth>
        <MatrixHeight>8192</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>14</ows:Identifier>
        <ScaleDenominator>223.21428571428572240620</ScaleDenominator>
        <TopLeftCorner>9928.000000 329072.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>16384</MatrixWidth>
        <MatrixHeight>16384</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>15</ows:Identifier>
        <ScaleDenominator>111.60714285714286120310</ScaleDenominator>
        <TopLeftCorner>9928.000000 329072.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>32768</MatrixWidth>
        <MatrixHeight>32768</MatrixHeight>
      </TileMatrix>
    </TileMatrixSet>
    <TileMatrixSet>
      <ows:Identifier>WGS84VL</ows:Identifier>
      <ows:BoundingBox crs="urn:ogc:def:crs:EPSG:6.3:4326">
        <ows:LowerCorner>-180.000000 -90.000000</ows:LowerCorner>
        <ows:UpperCorner>180.000000 90.000000</ows:UpperCorner>
      </ows:BoundingBox>
      <ows:SupportedCRS>urn:ogc:def:crs:EPSG:6.3:4326</ows:SupportedCRS>
      <TileMatrix>
        <ows:Identifier>0</ows:Identifier>
        <ScaleDenominator>559082264.02871775627136230469</ScaleDenominator>
        <TopLeftCorner>90.000000 -180.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>1</MatrixWidth>
        <MatrixHeight>1</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>1</ows:Identifier>
        <ScaleDenominator>279541132.01435887813568115234</ScaleDenominator>
        <TopLeftCorner>90.000000 -180.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>2</MatrixWidth>
        <MatrixHeight>1</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>2</ows:Identifier>
        <ScaleDenominator>139770566.00717943906784057617</ScaleDenominator>
        <TopLeftCorner>90.000000 -180.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>4</MatrixWidth>
        <MatrixHeight>2</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>3</ows:Identifier>
        <ScaleDenominator>69885283.00358971953392028809</ScaleDenominator>
        <TopLeftCorner>90.000000 -180.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>8</MatrixWidth>
        <MatrixHeight>4</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>4</ows:Identifier>
        <ScaleDenominator>34942641.50179485976696014404</ScaleDenominator>
        <TopLeftCorner>90.000000 -180.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>16</MatrixWidth>
        <MatrixHeight>8</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>5</ows:Identifier>
        <ScaleDenominator>17471320.75089742988348007202</ScaleDenominator>
        <TopLeftCorner>90.000000 -180.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>32</MatrixWidth>
        <MatrixHeight>16</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>6</ows:Identifier>
        <ScaleDenominator>8735660.37544871494174003601</ScaleDenominator>
        <TopLeftCorner>90.000000 -180.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>64</MatrixWidth>
        <MatrixHeight>32</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>7</ows:Identifier>
        <ScaleDenominator>4367830.18772435747087001801</ScaleDenominator>
        <TopLeftCorner>90.000000 -180.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>128</MatrixWidth>
        <MatrixHeight>64</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>8</ows:Identifier>
        <ScaleDenominator>2183915.09386217873543500900</ScaleDenominator>
        <TopLeftCorner>90.000000 -180.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>256</MatrixWidth>
        <MatrixHeight>128</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>9</ows:Identifier>
        <ScaleDenominator>1091957.54693108936771750450</ScaleDenominator>
        <TopLeftCorner>90.000000 -180.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>512</MatrixWidth>
        <MatrixHeight>256</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>10</ows:Identifier>
        <ScaleDenominator>545978.77346554468385875225</ScaleDenominator>
        <TopLeftCorner>90.000000 -180.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>1024</MatrixWidth>
        <MatrixHeight>512</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>11</ows:Identifier>
        <ScaleDenominator>272989.38673277234192937613</ScaleDenominator>
        <TopLeftCorner>90.000000 -180.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>2048</MatrixWidth>
        <MatrixHeight>1024</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>12</ows:Identifier>
        <ScaleDenominator>136494.69336638617096468806</ScaleDenominator>
        <TopLeftCorner>90.000000 -180.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>4096</MatrixWidth>
        <MatrixHeight>2048</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>13</ows:Identifier>
        <ScaleDenominator>68247.34668319308548234403</ScaleDenominator>
        <TopLeftCorner>90.000000 -180.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>8192</MatrixWidth>
        <MatrixHeight>4096</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>14</ows:Identifier>
        <ScaleDenominator>34123.67334159654274117202</ScaleDenominator>
        <TopLeftCorner>90.000000 -180.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>16384</MatrixWidth>
        <MatrixHeight>8192</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>15</ows:Identifier>
        <ScaleDenominator>17061.83667079825318069197</ScaleDenominator>
        <TopLeftCorner>90.000000 -180.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>32768</MatrixWidth>
        <MatrixHeight>16384</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>16</ows:Identifier>
        <ScaleDenominator>8530.91833539912659034599</ScaleDenominator>
        <TopLeftCorner>90.000000 -180.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>65536</MatrixWidth>
        <MatrixHeight>32768</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>17</ows:Identifier>
        <ScaleDenominator>4265.45916769956329517299</ScaleDenominator>
        <TopLeftCorner>90.000000 -180.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>131072</MatrixWidth>
        <MatrixHeight>65536</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>18</ows:Identifier>
        <ScaleDenominator>2132.72958384978574031265</ScaleDenominator>
        <TopLeftCorner>90.000000 -180.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>262144</MatrixWidth>
        <MatrixHeight>131072</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>19</ows:Identifier>
        <ScaleDenominator>1066.36479192489287015633</ScaleDenominator>
        <TopLeftCorner>90.000000 -180.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>524288</MatrixWidth>
        <MatrixHeight>262144</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>20</ows:Identifier>
        <ScaleDenominator>533.18239596244643507816</ScaleDenominator>
        <TopLeftCorner>90.000000 -180.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>1048576</MatrixWidth>
        <MatrixHeight>524288</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>21</ows:Identifier>
        <ScaleDenominator>266.59119798122321753908</ScaleDenominator>
        <TopLeftCorner>90.000000 -180.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>2097152</MatrixWidth>
        <MatrixHeight>1048576</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>22</ows:Identifier>
        <ScaleDenominator>133.29559899061140981757</ScaleDenominator>
        <TopLeftCorner>90.000000 -180.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>4194304</MatrixWidth>
        <MatrixHeight>2097152</MatrixHeight>
      </TileMatrix>
    </TileMatrixSet>
  <TileMatrixSet><ows:Identifier>BPL2008VL</ows:Identifier><ows:BoundingBox crs="urn:ogc:def:crs:EPSG::3812"><ows:LowerCorner>500000.0 537856.0</ows:LowerCorner><ows:UpperCorner>762144.0 800000.0</ows:UpperCorner></ows:BoundingBox><ows:SupportedCRS>EPSG:3812</ows:SupportedCRS><TileMatrix><ows:Identifier>0</ows:Identifier><ScaleDenominator>3657142.8571428573</ScaleDenominator><TopLeftCorner>500000.0 800000.0</TopLeftCorner><TileWidth>256</TileWidth><TileHeight>256</TileHeight><MatrixWidth>1</MatrixWidth><MatrixHeight>1</MatrixHeight></TileMatrix><TileMatrix><ows:Identifier>1</ows:Identifier><ScaleDenominator>1828571.4285714286</ScaleDenominator><TopLeftCorner>500000.0 800000.0</TopLeftCorner><TileWidth>256</TileWidth><TileHeight>256</TileHeight><MatrixWidth>2</MatrixWidth><MatrixHeight>2</MatrixHeight></TileMatrix><TileMatrix><ows:Identifier>2</ows:Identifier><ScaleDenominator>914285.7142857143</ScaleDenominator><TopLeftCorner>500000.0 800000.0</TopLeftCorner><TileWidth>256</TileWidth><TileHeight>256</TileHeight><MatrixWidth>4</MatrixWidth><MatrixHeight>4</MatrixHeight></TileMatrix><TileMatrix><ows:Identifier>3</ows:Identifier><ScaleDenominator>457142.85714285716</ScaleDenominator><TopLeftCorner>500000.0 800000.0</TopLeftCorner><TileWidth>256</TileWidth><TileHeight>256</TileHeight><MatrixWidth>8</MatrixWidth><MatrixHeight>8</MatrixHeight></TileMatrix><TileMatrix><ows:Identifier>4</ows:Identifier><ScaleDenominator>228571.42857142858</ScaleDenominator><TopLeftCorner>500000.0 800000.0</TopLeftCorner><TileWidth>256</TileWidth><TileHeight>256</TileHeight><MatrixWidth>16</MatrixWidth><MatrixHeight>16</MatrixHeight></TileMatrix><TileMatrix><ows:Identifier>5</ows:Identifier><ScaleDenominator>114285.71428571429</ScaleDenominator><TopLeftCorner>500000.0 800000.0</TopLeftCorner><TileWidth>256</TileWidth><TileHeight>256</TileHeight><MatrixWidth>32</MatrixWidth><MatrixHeight>32</MatrixHeight></TileMatrix><TileMatrix><ows:Identifier>6</ows:Identifier><ScaleDenominator>57142.857142857145</ScaleDenominator><TopLeftCorner>500000.0 800000.0</TopLeftCorner><TileWidth>256</TileWidth><TileHeight>256</TileHeight><MatrixWidth>64</MatrixWidth><MatrixHeight>64</MatrixHeight></TileMatrix><TileMatrix><ows:Identifier>7</ows:Identifier><ScaleDenominator>28571.428571428572</ScaleDenominator><TopLeftCorner>500000.0 800000.0</TopLeftCorner><TileWidth>256</TileWidth><TileHeight>256</TileHeight><MatrixWidth>128</MatrixWidth><MatrixHeight>128</MatrixHeight></TileMatrix><TileMatrix><ows:Identifier>8</ows:Identifier><ScaleDenominator>14285.714285714286</ScaleDenominator><TopLeftCorner>500000.0 800000.0</TopLeftCorner><TileWidth>256</TileWidth><TileHeight>256</TileHeight><MatrixWidth>256</MatrixWidth><MatrixHeight>256</MatrixHeight></TileMatrix><TileMatrix><ows:Identifier>9</ows:Identifier><ScaleDenominator>7142.857142857143</ScaleDenominator><TopLeftCorner>500000.0 800000.0</TopLeftCorner><TileWidth>256</TileWidth><TileHeight>256</TileHeight><MatrixWidth>512</MatrixWidth><MatrixHeight>512</MatrixHeight></TileMatrix><TileMatrix><ows:Identifier>10</ows:Identifier><ScaleDenominator>3571.4285714285716</ScaleDenominator><TopLeftCorner>500000.0 800000.0</TopLeftCorner><TileWidth>256</TileWidth><TileHeight>256</TileHeight><MatrixWidth>1024</MatrixWidth><MatrixHeight>1024</MatrixHeight></TileMatrix><TileMatrix><ows:Identifier>11</ows:Identifier><ScaleDenominator>1785.7142857142858</ScaleDenominator><TopLeftCorner>500000.0 800000.0</TopLeftCorner><TileWidth>256</TileWidth><TileHeight>256</TileHeight><MatrixWidth>2048</MatrixWidth><MatrixHeight>2048</MatrixHeight></TileMatrix><TileMatrix><ows:Identifier>12</ows:Identifier><ScaleDenominator>892.8571428571429</ScaleDenominator><TopLeftCorner>500000.0 800000.0</TopLeftCorner><TileWidth>256</TileWidth><TileHeight>256</TileHeight><MatrixWidth>4096</MatrixWidth><MatrixHeight>4096</MatrixHeight></TileMatrix><TileMatrix><ows:Identifier>13</ows:Identifier><ScaleDenominator>446.42857142857144</ScaleDenominator><TopLeftCorner>500000.0 800000.0</TopLeftCorner><TileWidth>256</TileWidth><TileHeight>256</TileHeight><MatrixWidth>8192</MatrixWidth><MatrixHeight>8192</MatrixHeight></TileMatrix><TileMatrix><ows:Identifier>14</ows:Identifier><ScaleDenominator>223.21428571428572</ScaleDenominator><TopLeftCorner>500000.0 800000.0</TopLeftCorner><TileWidth>256</TileWidth><TileHeight>256</TileHeight><MatrixWidth>16384</MatrixWidth><MatrixHeight>16384</MatrixHeight></TileMatrix><TileMatrix><ows:Identifier>15</ows:Identifier><ScaleDenominator>111.60714285714286</ScaleDenominator><TopLeftCorner>500000.0 800000.0</TopLeftCorner><TileWidth>256</TileWidth><TileHeight>256</TileHeight><MatrixWidth>32768</MatrixWidth><MatrixHeight>32768</MatrixHeight></TileMatrix></TileMatrixSet></Contents>
  <ServiceMetadataURL xlink:href="https://metadata.vlaanderen.be/srv/dut/catalog.search#/metadata/bb99337d-2146-413e-8c68-b9930061dc25" />
</Capabilities>
    `,r=new t.A().read(l),a=()=>r.Contents.TileMatrixSet.find(({Identifier:e})=>"BPL2008VL"===e),n=()=>a()?.BoundingBox,w=()=>a()?.SupportedCRS||"EPSG:3812",s=()=>r.Contents.TileMatrixSet.find(({Identifier:e})=>"BPL72VL"===e),T=()=>s()?.BoundingBox,M=()=>s()?.SupportedCRS||"EPSG:31370",d=()=>r.Contents.Layer.find(({Identifier:e})=>"grb_bsk"===e),x=()=>d().WGS84BoundingBox,y=()=>"EPSG:4326"},"../../libs/map/src/utils/ol-util.ts":(e,i,o)=>{o.d(i,{P:()=>a});var t=o("../../node_modules/jsts/org/locationtech/jts/io.js"),l=o("../../node_modules/jsts/org/locationtech/jts/operation/valid.js"),r=o("../../node_modules/ol/format/GeoJSON.js");class a{static createDummyLayer(e,i){return{id:e,addEventListener:()=>{},getSource:()=>i||a.createDummySource()}}static createDummyLayerGroup(e){return{id:e,getLayers:()=>({getArray:()=>{}}),addEventListener:()=>{}}}static createDummySource(e){return{addEventListener:()=>{},getExtent:()=>{},getFeatures:()=>e,clear:()=>{},addFeatures:()=>{}}}static createClusterFeaturesObject(e){return{get:i=>{if("features"==i)return e}}}static geometryIsInvalid(e){if(!e)return!1;let i=new r.A,o=new t.LO,a=i.writeGeometryObject(e),n=o.read(a);return!l.q.isValid(n)}}},"../../libs/map/src/vl-map.model.ts":(e,i,o)=>{o.d(i,{$c:()=>l,cS:()=>r,ll:()=>t});let t={ACTIVE_ACTION_CHANGED:"vl-active-action-changed",LAYER_VISIBLE_CHANGED:"vl-layer-visible-changed"},l={ACTION:"action"},r={MEASURE:"measure"}},"../../libs/map/src/vl-map.ts":(e,i,o)=>{o.d(i,{v:()=>K});var t=o("../../libs/common/utilities/src/index.ts"),l=o("../../node_modules/ol/control/Zoom.js"),r=o("../../node_modules/ol/control/FullScreen.js"),a=o("../../node_modules/ol/layer/Group.js"),n=o("../../node_modules/ol/proj/Projection.js"),w=o("../../node_modules/ol/proj/proj4.js"),s=o("../../node_modules/proj4/lib/index.js"),T=o("../../libs/map/src/actions/map/custom-map.ts"),M=o("../../libs/map/src/components/layer/vl-map-layer.ts"),d=o("../../libs/map/src/utils/capabilities.ts"),x=o("../../libs/map/src/utils/ol-util.ts"),y=o("../../libs/map/src/vl-map.model.ts"),c=o("../../node_modules/lit/index.js"),m=o("../../libs/map/src/actions/map-actions.uig-css.ts"),h=o("../../libs/elements/src/index.ts");let p=(0,c.AH)`
    .ol-box {
        box-sizing: border-box;
        border-radius: 2px;
        border: 1.5px solid rgb(179, 197, 219);
        background-color: rgba(255, 255, 255, 0.4);
    }

    .ol-mouse-position {
        top: 8px;
        right: 8px;
        position: absolute;
    }

    .ol-scale-line {
        background: rgba(0, 60, 136, 0.3);
        border-radius: 4px;
        bottom: 8px;
        left: 8px;
        padding: 2px;
        position: absolute;
    }
    .ol-scale-line-inner {
        border: 1px solid #eee;
        border-top: none;
        color: #eee;
        font-size: 10px;
        text-align: center;
        margin: 1px;
        will-change: contents, width;
        transition: all 0.25s;
    }
    .ol-scale-bar {
        position: absolute;
        bottom: 8px;
        left: 8px;
    }
    .ol-scale-step-marker {
        width: 1px;
        height: 15px;
        background-color: #000000;
        float: right;
        z-index: 10;
    }
    .ol-scale-step-text {
        position: absolute;
        bottom: -5px;
        font-size: 12px;
        z-index: 11;
        color: #000000;
        text-shadow: -2px 0 #ffffff, 0 2px #ffffff, 2px 0 #ffffff, 0 -2px #ffffff;
    }
    .ol-scale-text {
        position: absolute;
        font-size: 14px;
        text-align: center;
        bottom: 25px;
        color: #000000;
        text-shadow: -2px 0 #ffffff, 0 2px #ffffff, 2px 0 #ffffff, 0 -2px #ffffff;
    }
    .ol-scale-singlebar {
        position: relative;
        height: 10px;
        z-index: 9;
        box-sizing: border-box;
        border: 1px solid black;
    }

    .ol-unsupported {
        display: none;
    }
    .ol-viewport,
    .ol-unselectable {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    .ol-viewport canvas {
        all: unset;
    }
    .ol-selectable {
        -webkit-touch-callout: default;
        -webkit-user-select: text;
        -moz-user-select: text;
        -ms-user-select: text;
        user-select: text;
    }
    .ol-grabbing {
        cursor: -webkit-grabbing;
        cursor: -moz-grabbing;
        cursor: grabbing;
    }
    .ol-grab {
        cursor: move;
        cursor: -webkit-grab;
        cursor: -moz-grab;
        cursor: grab;
    }
    .ol-control {
        position: absolute;
        background-color: rgba(255, 255, 255, 0.4);
        border-radius: 4px;
        padding: 2px;
    }
    .ol-control:hover {
        background-color: rgba(255, 255, 255, 0.6);
    }
    .ol-zoom {
        top: 0.5em;
        left: 0.5em;
    }
    .ol-rotate {
        top: 0.5em;
        right: 0.5em;
        transition: opacity 0.25s linear, visibility 0s linear;
    }
    .ol-rotate.ol-hidden {
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.25s linear, visibility 0s linear 0.25s;
    }
    .ol-zoom-extent {
        top: 4.643em;
        left: 0.5em;
    }
    .ol-full-screen {
        right: 0.5em;
        top: 0.5em;
    }

    .ol-control button {
        display: block;
        margin: 1px;
        padding: 0;
        color: white;
        font-weight: bold;
        text-decoration: none;
        font-size: inherit;
        text-align: center;
        height: 1.375em;
        width: 1.375em;
        line-height: 0.4em;
        background-color: rgba(0, 60, 136, 0.5);
        border: none;
        border-radius: 2px;
    }
    .ol-control button::-moz-focus-inner {
        border: none;
        padding: 0;
    }
    .ol-zoom-extent button {
        line-height: 1.4em;
    }
    .ol-compass {
        display: block;
        font-weight: normal;
        font-size: 1.2em;
        will-change: transform;
    }
    .ol-touch .ol-control button {
        font-size: 1.5em;
    }
    .ol-touch .ol-zoom-extent {
        top: 5.5em;
    }
    .ol-control button:hover,
    .ol-control button:focus {
        text-decoration: none;
        background-color: rgba(0, 60, 136, 0.7);
    }
    .ol-zoom .ol-zoom-in {
        border-radius: 2px 2px 0 0;
    }
    .ol-zoom .ol-zoom-out {
        border-radius: 0 0 2px 2px;
    }

    .ol-attribution {
        text-align: right;
        bottom: 0.5em;
        right: 0.5em;
        max-width: calc(100% - 1.3em);
        display: flex;
        flex-flow: row-reverse;
        align-items: center;
    }
    .ol-attribution a {
        color: rgba(0, 60, 136, 0.7);
        text-decoration: none;
    }
    .ol-attribution ul {
        margin: 0;
        padding: 1px 0.5em;
        color: #000;
        text-shadow: 0 0 2px #fff;
        font-size: 12px;
    }
    .ol-attribution li {
        display: inline;
        list-style: none;
    }
    .ol-attribution li:not(:last-child):after {
        content: ' ';
    }
    .ol-attribution img {
        max-height: 2em;
        max-width: inherit;
        vertical-align: middle;
    }
    .ol-attribution button {
        flex-shrink: 0;
    }
    .ol-attribution.ol-collapsed ul {
        display: none;
    }
    .ol-attribution:not(.ol-collapsed) {
        background: rgba(255, 255, 255, 0.8);
    }
    .ol-attribution.ol-uncollapsible {
        bottom: 0;
        right: 0;
        border-radius: 4px 0 0;
    }
    .ol-attribution.ol-uncollapsible img {
        margin-top: -0.2em;
        max-height: 1.6em;
    }
    .ol-attribution.ol-uncollapsible button {
        display: none;
    }

    .ol-zoomslider {
        top: 4.5em;
        left: 0.5em;
        height: 200px;
    }
    .ol-zoomslider button {
        position: relative;
        height: 10px;
    }

    .ol-touch .ol-zoomslider {
        top: 5.5em;
    }

    .ol-overviewmap {
        left: 0.5em;
        bottom: 0.5em;
    }
    .ol-overviewmap.ol-uncollapsible {
        bottom: 0;
        left: 0;
        border-radius: 0 4px 0 0;
    }
    .ol-overviewmap .ol-overviewmap-map,
    .ol-overviewmap button {
        display: block;
    }
    .ol-overviewmap .ol-overviewmap-map {
        border: 1px solid #7b98bc;
        height: 150px;
        margin: 2px;
        width: 150px;
    }
    .ol-overviewmap:not(.ol-collapsed) button {
        bottom: 2px;
        left: 2px;
        position: absolute;
    }
    .ol-overviewmap.ol-collapsed .ol-overviewmap-map,
    .ol-overviewmap.ol-uncollapsible button {
        display: none;
    }
    .ol-overviewmap:not(.ol-collapsed) {
        background: rgba(255, 255, 255, 0.8);
    }
    .ol-overviewmap-box {
        border: 2px dotted rgba(0, 60, 136, 0.7);
    }

    .ol-overviewmap .ol-overviewmap-box:hover {
        cursor: move;
    }
`,g=[(0,c.AH)`
    :host {
        display: none;
        position: relative;
        --vl-map--margin-top: 0px;
        border: 1px solid #cbd2da;
        height: calc(var(--vl-map-height, 500px) - var(--vl-map--margin-top));
    }

    :host(.vl-map--no-border) {
        border: none;
    }

    :host(.vl-map--full-height) {
        height: calc(100% - var(--vl-map--margin-top));
    }

    #map {
        position: relative;
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        overflow: hidden;
        background: white;
        z-index: 0;
    }
    #map .ol-zoom,
    #map .ol-rotate {
        margin-top: var(--vl-map--margin-top) !important;
    }
    #map .vl-map-search__overlaycontainer {
        display: initial !important;
        width: 100%;
    }
    #map .vl-map-search__overlaycontainer vl-map-search {
        --vl-search-width: 100%;
        position: absolute;
        margin: 10px;
        box-sizing: border-box;
    }
    @media screen and (max-width: 500px) {
        #map .vl-map-search__overlaycontainer vl-map-search {
            width: 100%;
        }
    }
    @media screen and (min-width: 500px) and (max-width: 767px) {
        #map .vl-map-search__overlaycontainer vl-map-search {
            width: 100%;
        }
    }
    @media screen and (min-width: 767px) and (max-width: 1023px) {
        #map .vl-map-search__overlaycontainer vl-map-search {
            width: 50%;
        }
    }
    @media screen and (min-width: 1023px) and (max-width: 1600px) {
        #map .vl-map-search__overlaycontainer vl-map-search {
            width: 50%;
        }
    }
    @media screen and (min-width: 1600px) {
        #map .vl-map-search__overlaycontainer vl-map-search {
            width: 50%;
        }
    }
    #map .vl-map-search__overlaycontainer vl-map-search.vl-map-search--with-offset {
        margin-left: 50px;
    }
`,...h.hF,p,m.A];class K extends(0,t.H3)(HTMLElement){static get _observedClassAttributes(){return["no-border","full-height"]}static get _observedAttributes(){return["lambert2008","allow-invalid-geometry"]}get _classPrefix(){return"vl-map--"}constructor(){super(`
          <style>
            ${g.join("")}
          </style>
          <div id='map'>
            <slot></slot>
          </div>
        `),this.__initializeCoordinateSystem(),this.__prepareReadyPromises()}get ready(){return this.__ready}__prepareReadyPromises(){this.__mapReady=new Promise(e=>this.__mapReadyResolver=e),this.__overviewMapReady=new Promise(e=>this.__overviewMapReadyResolver=e),this.__ready=Promise.all([this.__mapReady,this.__overviewMapReady])}get map(){return this._map}get resolution(){return this.map.getView().getResolution()}get nonBaseLayers(){return[...this.querySelectorAll(":scope > [data-vl-is-layer]")]}get disableEscapeKey(){return void 0!=this.getAttribute("disable-escape-key")}get disableRotation(){return void 0!=this.getAttribute("disable-rotation")}get disableMouseWheelZoom(){return void 0!=this.getAttribute("disable-mouse-wheel-zoom")}get disableKeyboard(){return void 0!=this.getAttribute("disable-keyboard")}get actions(){return this.map&&this.map.actions}get controls(){return this.map&&this.map.getControls().getArray()}get activeAction(){return this.map&&this.map.getCurrentActiveAction()}get defaultAction(){return this.map&&this.map.getDefaultActiveAction()}get _mapElement(){return this._shadow.querySelector("#map")}get _controls(){return void 0!=this.dataset.vlAllowFullscreen?[new r.A]:[]}get _projection(){return new n.A({code:this._code,extent:this._extent})}get isLambert2008(){return this.hasAttribute("lambert2008")}get _code(){return this.isLambert2008?(0,d.$G)():(0,d.Wc)()}get _extent(){return this.isLambert2008?(0,d.Cz)():(0,d.nv)()}get invalidGeometryAllowed(){return this.hasAttribute("allow-invalid-geometry")}hasInvalidGeometries(){return this.nonBaseLayers.some(e=>{let{layer:i}=e;return!!i?.getSource&&i.getSource().getFeatures().some(e=>{let i=e.getGeometry();return!!i&&x.P.geometryIsInvalid(i)})})}connectedCallback(){super.connectedCallback(),this.__initializeCoordinateSystem(),this._initializeMap()}_initializeMap(){this._map=new T.A({actions:[],disableEscapeKey:this.disableEscapeKey,disableRotation:this.disableRotation,disableMouseWheelZoom:this.disableMouseWheelZoom,disableKeyboard:this.disableKeyboard,customLayers:{baseLayerGroup:this.__createLayerGroup("Basis lagen",[]),overviewMapLayers:[],overlayGroup:this.__createLayerGroup("Lagen",[])},projection:this._projection,target:this._mapElement,controls:this._controls,defaultZoom:!1}),this._map.initializeView(),this.__updateMapSizeOnLoad(),this.__updateOverviewMapSizeOnLoad(),this._map.addControl(this.__createZoomControl()),this.observeRemovedMapLayers()}disconnectedCallback(){this.observer&&this.observer.disconnect(),this.map.setTarget(null)}observeRemovedMapLayers(){let e=this;this.observer=new MutationObserver(i=>{i.filter(({target:i})=>i===e).flatMap(({removedNodes:e})=>Array.from(e).filter(e=>e instanceof M.M)).forEach(e=>{this.map.removeOverlayLayer(e._layer)})}),this.observer.observe(e,{subtree:!0,childList:!0})}__createZoomControl(){let e={};return this.zoomInTipLabel&&(e.zoomInTipLabel=this.zoomInTipLabel),this.zoomOutTipLabel&&(e.zoomOutTipLabel=this.zoomOutTipLabel),new l.A(e)}get zoomInTipLabel(){return this.getAttribute("data-vl-zoomInTooltip")}get zoomOutTipLabel(){return this.getAttribute("data-vl-zoomOutTooltip")}addLayer(e){this.map.addOverlayLayer(e)}addAction(e){this.map.addAction(e)}addControl(e){this.map.addControl(e)}removeAction(e){this.map.removeAction(e)}_dispatchLayerVisibleChangedEvent(e){this.dispatchEvent(new CustomEvent(y.ll.LAYER_VISIBLE_CHANGED,{detail:{layer:e,visible:e.visible}}))}handleLayerVisibilityChange(e){this._dispatchLayerVisibleChangedEvent(e);let i=this.map.getLayerActions(e.layer);i&&i.forEach(i=>{e.visible?this.activeAction||i!==this.defaultAction||i.element.activate():i.element._active&&i.element.deactivate(),i.handleLayerVisibilityChange&&i.handleLayerVisibilityChange();let o=i.getControl();o&&o.get("element").setDisabled(!e.visible)})}_dispatchActiveActionChangedEvent(e,i){this.dispatchEvent(new CustomEvent(y.ll.ACTIVE_ACTION_CHANGED,{detail:{previous:e?e.element:e,current:i?i.element:i}}))}changeActiveAction(e){let i=this.activeAction,o=e||void 0;i&&(this.map.deactivateCurrentAction(),i.element._active=!1,i.getControl()&&i.getControl().get("element").setActive(!1)),o&&(this.map.activateAction(o),o.element._active=!0,o.getControl()&&o.getControl().get("element").setActive(!0)),(o||i)&&this._dispatchActiveActionChangedEvent(i,o)}activateAction(e){e&&e.element.activate()}deactivateAction(e){e&&e.element.deactivate()}zoomTo(e,i){Array.isArray(e)?this.map.zoomToExtent(e,i):e instanceof Object&&this.map.zoomToGeometry(e,i)}on(e,i){return this.map.on(e,i)}un(e,i){return this.map.un(e,i)}rerender(){this.map.render()}__updateMapSize(){this.style.display="block",this.map&&this.map.updateSize(),this.__mapReadyResolver()}__updateOverviewMapSize(){this.map.overviewMapControl&&this.map.overviewMapControl.getOverviewMap().updateSize(),this.__overviewMapReadyResolver()}__updateOverviewMapSizeOnLoad(){K.__callOnceOnLoad(this.__updateOverviewMapSize.bind(this))}__updateMapSizeOnLoad(){K.__callOnceOnLoad(this.__updateMapSize.bind(this))}__createLayerGroup(e,i){return new a.A({title:e,layers:i})}__initializeCoordinateSystem(){s.A.defs("EPSG:31370","+proj=lcc +lat_1=51.16666723333333 +lat_2=49.8333339 +lat_0=90 +lon_0=4.367486666666666 +x_0=150000.013 +y_0=5400088.438 +ellps=intl +towgs84=-106.869,52.2978,-103.724,0.3366,-0.457,1.8422,-1.2747 +units=m +no_defs"),s.A.defs("EPSG:3812","+proj=lcc +lat_0=50.797815 +lon_0=4.35921583333333 +lat_1=49.8333333333333 +lat_2=51.1666666666667 +x_0=649328 +y_0=665262 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs"),(0,w.kz)(s.A)}static __callOnceOnLoad(e){"complete"===document.readyState?e():window.addEventListener("load",e,{once:!0})}get featuresLayers(){return Array.from(this.querySelectorAll("vl-map-features-layer"))}get wfsLayers(){return Array.from(this.querySelectorAll("vl-map-wfs-layer"))}get wmsLayers(){return Array.from(this.querySelectorAll("vl-map-tiled-wms-layer, vl-map-image-wms-layer"))}}K=function(e,i,o,t){var l,r=arguments.length,a=r<3?i:null===t?t=Object.getOwnPropertyDescriptor(i,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,i,o,t);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(a=(r<3?l(a):r>3?l(i,o,a):l(i,o))||a);return r>3&&a&&Object.defineProperty(i,o,a),a}([(0,t.M1)("vl-map")],K)}}]);