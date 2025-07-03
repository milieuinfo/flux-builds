"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[1969],{"../../libs/map/src/actions/map-actions.uig-css.ts":(e,t,o)=>{o.d(t,{A:()=>r});var n=o("../../node_modules/lit/index.js");let r=(0,n.AH)`
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
`},"../../libs/map/src/actions/map/custom-map.ts":(e,t,o)=>{o.d(t,{A:()=>h});var n=o("../../node_modules/ol/format/GeoJSON.js"),r=o("../../node_modules/ol/View.js"),i=o("../../node_modules/ol/Overlay.js"),l=o("../../node_modules/ol/control/Rotate.js"),a=o("../../node_modules/ol/control/ScaleLine.js"),c=o("../../node_modules/ol/control/Zoom.js"),s=o("../../node_modules/ol/control/OverviewMap.js"),p=o("../../libs/map/src/actions/map/map-with-actions.ts");class h extends p.y{constructor(e){e.layers=[e.customLayers.baseLayerGroup,e.customLayers.overlayGroup],e.controls=[new l.A,new a.A({minWidth:128})].concat(e.controls||[]),e.view=new r.Ay({extent:e.projection.getExtent(),projection:e.projection,maxZoom:16,minZoom:2,center:[140860.69299028325,190532.7165957574],zoom:2,...e.view}),super(e),(void 0===e.defaultZoom||!0===e.defaultZoom)&&this.addControl(new c.A),this.projection=e.projection,this.view=e.view,this.geoJSONFormat=new n.A({dataProjection:this.projection}),this.custom=e.custom||{},e.customLayers.overviewMapLayers&&e.customLayers.overviewMapLayers.length>0&&this.createOverviewMapControl(e),this.baseLayers=e.customLayers.baseLayerGroup.getLayers().getArray(),this.maxZoomViewToExtent=e.maxZoomViewToExtent||16}createOverviewMapControl(e){let t=this,o=e=>{let o=e=>{let o=0;return t.baseLayers.forEach((e,t)=>{e.getVisible()&&(o=t)}),e[o+1>=e.length?0:o+1]};e||(e=o(t.baseLayers)),t.baseLayers.forEach(t=>t.setVisible(t==e));let n=t.overviewMapControl.getOverviewMap().getLayers().getArray(),r=o(n);n.forEach(e=>e.setVisible(e==r)),t.render(),t.overviewMapControl.getOverviewMap().render()};this.overviewMapLayers=e.customLayers.overviewMapLayers,this.overviewMapControl=new s.A({layers:this.overviewMapLayers,collapsed:!1,view:new r.Ay({projection:this.projection})}),this.overviewMapControl.element.addEventListener("click",()=>o(),!1),this.custom.toggleBaseLayer=o}addBaseLayerAndOverlayMapLayer(e,t){e.setVisible(0===this.baseLayers.length),this.baseLayers.push(e),this.overviewMapControl?this.overviewMapControl.getOverviewMap().getLayers().getArray().push(t):this.createOverviewMapControl({customLayers:{overviewMapLayers:[t]}}),t.setVisible(2===this.overviewMapControl.getOverviewMap().getLayers().getArray().length)}getBaseLayers(){return this.getLayerGroup().getLayers().getArray()[0].getLayers().getArray()}getOverlayLayers(){return this._getOverlayLayersCollection().getArray()}_getOverlayLayersCollection(){return this.getLayerGroup().getLayers().getArray()[1].getLayers()}addOverlayLayer(e){this._getOverlayLayersCollection().push(e)}removeOverlayLayer(e){this._getOverlayLayersCollection().remove(e)}initializeView(e,t){this.zoomViewToExtent(this.getView(),e,t)}zoomToExtent(e,t){this.zoomViewToExtent(this.getView(),e,t)}zoomViewToExtent(e,t,o){t&&e.fit(t,{size:this.getSize()}),(o||this.maxZoomViewToExtent)&&e.getZoom()>(o||this.maxZoomViewToExtent)&&e.setZoom(o||this.maxZoomViewToExtent)}zoomToGeometry(e,t){this.zoomToExtent(this.geoJSONFormat.readFeatures({type:"FeatureCollection",features:[{type:"Feature",geometry:e}]})[0].getGeometry().getExtent(),t)}showInfo(e,t){let o=document.createElement("div");o.setAttribute("class","close"),o.onclick=()=>event.currentTarget.parentNode.remove();let n=document.createElement("div");n.innerHTML=`<span class='content'>${e}</span><div class='arrow'></div>`,n.setAttribute("class","info-tooltip"),n.appendChild(o);let r=new i.A({offset:[0,-5],positioning:"bottom-center",element:n});this.addOverlay(r),r.setPosition(t),n.parentNode.style.position="fixed"}}},"../../libs/map/src/actions/map/map-with-actions.ts":(e,t,o)=>{o.d(t,{y:()=>l});var n=o("../../node_modules/ol/interaction/defaults.js"),r=o("../../node_modules/ol/Map.js"),i=o("../../libs/map/src/vl-map.model.ts");class l extends r.A{static get CLICK_COUNT_TIMEOUT(){return 300}constructor(e={}){let{disableRotation:t,disableMouseWheelZoom:o,disableKeyboard:r}=e,i=!t,l=(0,n.N)({altShiftDragRotate:i,pinchRotate:i,mouseWheelZoom:!o,keyboard:!r});if(e&&e.interactions&&e.interactions.forEach(e=>l.push(e)),e.interactions=l,super(e),this.actions=[],e.actions.forEach(e=>{this.addAction(e)}),setTimeout(()=>{this.activateDefaultAction()}),!e.disableEscapeKey){let e=e=>{if(e&&e.keyCode&&27===e.keyCode){let e=this.getCurrentActiveAction();e?e.stop&&e.stop():this.activateDefaultAction()}};document.body.removeEventListener("keydown",e),document.body.addEventListener("keydown",e)}}getDefaultActiveAction(){return this.actions&&this.actions.find(e=>e.element._defaultActive)}getCurrentActiveAction(){return this.actions&&this.actions.find(e=>e.element._active)}getActionWithIdentifier(e){return this.actions&&this.actions.find(t=>t.element.identifier===e)}getControlsOfType(e){return this.getControls().getArray().filter(t=>t.get("element")&&t.get("element").type===e)}getActionControls(){return this.getControlsOfType(i.$c.ACTION)}getActionControlWithIdentifier(e){let t=this.getActionControls();return t&&t.find(t=>t.get("element")&&t.get("element").identifier===e)}getLayerActions(e){return this.actions&&this.actions.filter(t=>t.layer===e)}activateAction(e){this.timeout=setTimeout(()=>{e.activate()},l.CLICK_COUNT_TIMEOUT)}deactivateCurrentAction(){let e=this.getCurrentActiveAction();e&&(e.deactivate(),clearTimeout(this.timeout))}addAction(e){this.actions.push(e),e.map=this,e.interactions.forEach(t=>{this.addInteraction(t),t.map=e.map})}removeAction(e){this.getCurrentActiveAction()===e&&(e===this.getDefaultActiveAction()?e.element.deactivate():this.activateDefaultAction()),e.interactions.forEach(e=>{this.removeInteraction(e)}),e.element.reset(),this.actions.splice(this.actions.indexOf(e),1)}activateDefaultAction(){let e=this.getDefaultActiveAction();e&&e.element.activate()}}},"../../libs/map/src/components/baselayer/vl-map-base-layer.ts":(e,t,o)=>{o.d(t,{j:()=>m});var n=o("../../libs/common/utilities/src/index.ts"),r=o("../../node_modules/ol/extent.js"),i=o("../../node_modules/ol/format/GeoJSON.js"),l=o("../../node_modules/ol/loadingstrategy.js"),a=o("../../node_modules/ol/source/WMTS.js"),c=o("../../node_modules/ol/source/Vector.js"),s=o("../../node_modules/ol/source/XYZ.js"),p=o("../../node_modules/ol/source/TileWMS.js"),h=o("../../node_modules/ol/style/Fill.js"),g=o("../../node_modules/ol/style/Stroke.js"),b=o("../../node_modules/ol/style/Style.js"),d=o("../../node_modules/ol/tilegrid/WMTS.js"),y=o("../../node_modules/ol/layer/Group.js"),u=o("../../node_modules/ol/layer/Tile.js"),f=o("../../node_modules/ol/layer/Vector.js");class m extends(0,n.H3)(HTMLElement){connectedCallback(){super.connectedCallback(),this._configureMap()}get type(){return this.getAttribute("type")||"wmts"}get url(){return this.getAttribute("url")||this._url}set url(e){this._url=e}get layer(){return this.getAttribute("layer")||this._layer}set layer(e){this._layer=e}get title(){return this.getAttribute("title")||this._title}set title(e){this._title=e}get _map(){if(this.parentNode)return this.parentNode.map}get _projection(){if(this.parentNode)return this.parentNode._projection}get _WMTSSource(){return this._wmtsSource=this._wmtsSource||this._createWMTSSource(),this._wmtsSource}get _vectorSource(){return this._createdVectorSource=this._createdVectorSource||this._createVectorSource(),this._createdVectorSource}get _hasBackgroundLayer(){return this.hasAttribute("background-layer")}get _backgroundType(){return this.getAttribute("background-type")||void 0}get _backgroundOptions(){if(!this._hasBackgroundLayer)return;if(this._hasBackgroundLayer&&!this._backgroundType&&!this.hasAttribute("background-options"))return{url:"https://cartoweb.wms.ngi.be/service",params:{FORMAT:"image/png",LAYERS:"crossborder,topo"}};let e=this.getAttribute("background-options");try{return JSON.parse(e)}catch(e){console.warn("Invalid background-options JSON:",e);return}}_configureMap(){this._map&&this._map.addBaseLayerAndOverlayMapLayer(this._createBaseLayer(),this._createBaseLayer())}_createWMTSSource(){let e=r.RG(this._projection.getExtent())/256,t=Array(16),o=Array(16);for(let n=0;n<16;++n)t[n]=e/Math.pow(2,n),o[n]=n;return new a.A({url:this.url,layer:this.layer,matrixSet:"BPL72VL",format:"image/png",projection:this._projection,tileGrid:new d.A({extent:this._projection.getExtent(),origin:r.Py(this._projection.getExtent()),resolutions:t,matrixIds:o}),style:""})}_createVectorSource(){let e=this;return new c.A({format:new i.A({dataProjection:e._projection}),url:()=>`${e.url}&typeName=${e.layer}`,strategy:l.Qk})}_createBackgroundLayer(){let e=this._backgroundOptions;switch(this._backgroundType){case"xyz":return new u.A({source:new s.A(e),opacity:.3});case"wmts":return new u.A({source:new a.A(e),opacity:.3});case"vector":return new f.A({source:new c.A(e),opacity:.3});default:return new u.A({source:new p.A(e),opacity:.3})}}_createBaseLayer(){let e=this.hasAttribute("background-layer"),t=[];switch(e&&t.push(this._createBackgroundLayer()),this.type){case"wmts":t.push(new u.A({title:this.title,type:"base",source:this._WMTSSource}));break;case"wfs":t.push(new f.A({source:this._vectorSource,style:new b.Ay({stroke:new g.A({color:"rgba(0, 0, 0, 1.0)",width:1}),fill:new h.A({color:"rgba(255, 0, 0, 1.0)"})})}));break;default:return null}return new y.A({layers:t})}}m=function(e,t,o,n){var r,i=arguments.length,l=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(i<3?r(l):i>3?r(t,o,l):r(t,o))||l);return i>3&&l&&Object.defineProperty(t,o,l),l}([(0,n.M1)("vl-map-baselayer")],m)},"../../libs/map/src/components/layer-style/vl-map-layer-style.ts":(e,t,o)=>{o.d(t,{t:()=>c});var n=o("../../libs/common/utilities/src/index.ts"),r=o("../../node_modules/ol/style/Fill.js"),i=o("../../node_modules/ol/style/Stroke.js"),l=o("../../node_modules/ol/style/Style.js"),a=o("../../node_modules/ol/style/Text.js");class c extends(0,n.H3)(HTMLElement){connectedCallback(){super.connectedCallback(),this._setStyleOnParent()}get name(){return this.getAttribute("data-vl-name")}get color(){return this.getAttribute("color")||"rgba(2, 85, 204, 0.8)"}get borderColor(){return this.getAttribute("border-color")||"rgba(2, 85, 204, 1)"}get borderSize(){return this.getAttribute("border-size")||1}get textColor(){return this.getAttribute("text-color")||"#FFF"}get textBackgroundColor(){return this.getAttribute("text-background-color")||"rgba(0, 0, 0, 0)"}get textBorderColor(){return this.getAttribute("text-border-color")||"rgba(255, 255, 255, 0)"}get textBorderSize(){return Number(this.getAttribute("text-border-size")||1)}get textSize(){return this.getAttribute("text-size")||"10px"}get textFeatureAttributeName(){return this.getAttribute("text-feature-attribute-name")||null}get textOffsetX(){return this.getAttribute("text-offset-x")||0}get textOffsetY(){return this.getAttribute("text-offset-y")||0}get style(){return(e,t)=>this.appliesTo(e)?this._styleFunction(e,t):null}get _styleFunction(){return(e,t)=>{let o={fill:new r.A({color:this.color}),stroke:new i.A({color:this.borderColor,width:this.borderSize}),text:void 0};return o.text=this._getTextStyle(e),new l.Ay(o)}}_getTextStyle(e,t){return new a.A({font:`${this.textSize} "Flanders Art Sans",sans-serif`,text:this.featureLabelFunction(e),fill:new r.A({color:t||this.textColor}),stroke:new i.A({color:this.textBorderColor,width:this.textBorderSize}),backgroundFill:new r.A({color:this.textBackgroundColor}),offsetX:this.textOffsetX,offsetY:this.textOffsetY})}appliesTo(e){return!0}get featureLabelFunction(){return this.textFeatureAttributeName?e=>e.get(this.textFeatureAttributeName):()=>""}_featureZIndex(e){return e&&e.get?e.get("zIndex"):0}_hasUniqueStyles(e){let t=this._getStyles(e);return t&&this._containsObject(t)&&this._areIdentical(t)}_containsStyle(e){return this._containsObject(e.map(e=>e.getStyle()))}_getStyles(e){return e.map(e=>e.getStyle())}_containsObject(e){return e.some(e=>!!e)}_areIdentical(e){return e.every((e,t,o)=>e==o[0])}_setStyleOnParent(){this.parentElement&&customElements.whenDefined(this.parentElement.tagName.toLowerCase()).then(()=>{this.parentElement.style=this})}}c=function(e,t,o,n){var r,i=arguments.length,l=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(i<3?r(l):i>3?r(t,o,l):r(t,o))||l);return i>3&&l&&Object.defineProperty(t,o,l),l}([(0,n.M1)("vl-map-layer-style")],c)},"../../libs/map/src/components/layer/vl-map-layer.ts":(e,t,o)=>{o.d(t,{M:()=>i});var n=o("../../libs/common/utilities/src/index.ts"),r=o("../../libs/map/src/components/layer-style/vl-map-layer-style.ts");class i extends(0,n.H3)(HTMLElement){static get _observedAttributes(){return["hidden","opacity"]}constructor(){super(),i._counter=0,this.__counter=++i._counter,this.__ready=!1}async connectedCallback(){super.connectedCallback(),this.__setIsLayerMarkerAttribute(),this.mapElement&&(await this.mapElement.ready,this.mapElement.addLayer(this._layer)),this.__styleCount=this.getStyleCount(),this.__markAsReady()}getStyleCount(){let e=this.querySelectorAll(":scope > *");return Array.from(e)?.filter(e=>e instanceof r.t).length}disconnectedCallback(){this._layer?.dispose()}static get _counter(){return this.__counter}static set _counter(e){this.__counter=e}get layer(){return this._layer}get source(){return this._source}get visible(){return this._layer?.getVisible()}get title(){return this.get("title")}set visible(e){this._layer?.setVisible(e),this.rerender(),this.mapElement&&this.mapElement.handleLayerVisibilityChange(this)}get opacity(){return this._layer?.getOpacity()}set opacity(e){this._layer?.setOpacity(e)}get mapElement(){return this.parentNode&&this.parentNode.map?this.parentNode:null}get ready(){return this.__ready}get _name(){return this.getAttribute("name")||"kaartlaag"}get _minResolution(){return this.getAttribute("min-resolution")||0}get _maxResolution(){return this.getAttribute("max-resolution")||1/0}get _opacity(){return Number(this.getAttribute("data-vl-opacity")||1)}get _visible(){return void 0==this.getAttribute("hidden")}get _styles(){return this.__styles.length>this.__styleCount&&(this.__styles=Array.from(new Set(this.__styles))),this.__styles}set _styles(e){this.__styles=e}get(e){return this._layer.get(e)}rerender(){this.mapElement&&this.mapElement.rerender()}isVisibleAtResolution(e){let t=parseFloat(this._layer.getMinResolution()),o=parseFloat(this._layer.getMaxResolution());return e>=t&&e<o}_hiddenChangedCallback(e,t){this._layer&&(this.visible=void 0==t)}_opacityChangedCallback(e,t){this.opacity=Number(t||1)}__setIsLayerMarkerAttribute(){this.dataset.vlIsLayer=!0}__markAsReady(){this.__ready=!0}}},"../../libs/map/src/vl-map.model.ts":(e,t,o)=>{o.d(t,{$c:()=>r,cS:()=>i,ll:()=>n});let n={ACTIVE_ACTION_CHANGED:"vl-active-action-changed",LAYER_VISIBLE_CHANGED:"vl-layer-visible-changed"},r={ACTION:"action"},i={MEASURE:"measure"}},"../../libs/map/src/vl-map.ts":(e,t,o)=>{o.d(t,{v:()=>m});var n=o("../../libs/common/utilities/src/index.ts"),r=o("../../node_modules/ol/control/Zoom.js"),i=o("../../node_modules/ol/control/FullScreen.js"),l=o("../../node_modules/ol/layer/Group.js"),a=o("../../node_modules/ol/proj/Projection.js"),c=o("../../node_modules/ol/proj/proj4.js"),s=o("../../node_modules/proj4/lib/index.js"),p=o("../../libs/map/src/actions/map/custom-map.ts"),h=o("../../libs/map/src/components/layer/vl-map-layer.ts"),g=o("../../libs/map/src/vl-map.model.ts"),b=o("../../node_modules/lit/index.js"),d=o("../../libs/map/src/actions/map-actions.uig-css.ts"),y=o("../../libs/elements/src/index.ts");let u=(0,b.AH)`
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
`,f=[(0,b.AH)`
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
`,...y.hF,u,d.A];class m extends(0,n.H3)(HTMLElement){static get _observedClassAttributes(){return["no-border","full-height"]}get _classPrefix(){return"vl-map--"}constructor(){super(`
          <style>
            ${f.join("")}
          </style>
          <div id='map'>
            <slot></slot>
          </div>
        `),this.__prepareReadyPromises()}get ready(){return this.__ready}__prepareReadyPromises(){this.__mapReady=new Promise(e=>this.__mapReadyResolver=e),this.__overviewMapReady=new Promise(e=>this.__overviewMapReadyResolver=e),this.__ready=Promise.all([this.__mapReady,this.__overviewMapReady])}get map(){return this._map}get resolution(){return this.map.getView().getResolution()}get nonBaseLayers(){return[...this.querySelectorAll(":scope > [data-vl-is-layer]")]}get disableEscapeKey(){return void 0!=this.getAttribute("disable-escape-key")}get disableRotation(){return void 0!=this.getAttribute("disable-rotation")}get disableMouseWheelZoom(){return void 0!=this.getAttribute("disable-mouse-wheel-zoom")}get disableKeyboard(){return void 0!=this.getAttribute("disable-keyboard")}get actions(){return this.map&&this.map.actions}get controls(){return this.map&&this.map.getControls().getArray()}get activeAction(){return this.map&&this.map.getCurrentActiveAction()}get defaultAction(){return this.map&&this.map.getDefaultActiveAction()}get _mapElement(){return this._shadow.querySelector("#map")}get _controls(){return void 0!=this.dataset.vlAllowFullscreen?[new i.A]:[]}get _projection(){return new a.A({code:"EPSG:31370",extent:this._extent,getPointResolution:e=>e})}get _extent(){return[9928,66928,272072,329072]}connectedCallback(){super.connectedCallback(),this.__initializeCoordinateSystem(),this._map=new p.A({actions:[],disableEscapeKey:this.disableEscapeKey,disableRotation:this.disableRotation,disableMouseWheelZoom:this.disableMouseWheelZoom,disableKeyboard:this.disableKeyboard,customLayers:{baseLayerGroup:this.__createLayerGroup("Basis lagen",[]),overviewMapLayers:[],overlayGroup:this.__createLayerGroup("Lagen",[])},projection:this._projection,target:this._mapElement,controls:this._controls,defaultZoom:!1}),this._map.initializeView(),this.__updateMapSizeOnLoad(),this.__updateOverviewMapSizeOnLoad(),this._map.addControl(this.__createZoomControl()),this.observeRemovedMapLayers()}disconnectedCallback(){this.observer&&this.observer.disconnect(),this.map.setTarget(null)}observeRemovedMapLayers(){let e=this;this.observer=new MutationObserver(t=>{t.filter(({target:t})=>t===e).flatMap(({removedNodes:e})=>Array.from(e).filter(e=>e instanceof h.M)).forEach(e=>{this.map.removeOverlayLayer(e._layer)})}),this.observer.observe(e,{subtree:!0,childList:!0})}__createZoomControl(){let e={};return this.zoomInTipLabel&&(e.zoomInTipLabel=this.zoomInTipLabel),this.zoomOutTipLabel&&(e.zoomOutTipLabel=this.zoomOutTipLabel),new r.A(e)}get zoomInTipLabel(){return this.getAttribute("data-vl-zoomInTooltip")}get zoomOutTipLabel(){return this.getAttribute("data-vl-zoomOutTooltip")}addLayer(e){this.map.addOverlayLayer(e)}addAction(e){this.map.addAction(e)}addControl(e){this.map.addControl(e)}removeAction(e){this.map.removeAction(e)}_dispatchLayerVisibleChangedEvent(e){this.dispatchEvent(new CustomEvent(g.ll.LAYER_VISIBLE_CHANGED,{detail:{layer:e,visible:e.visible}}))}handleLayerVisibilityChange(e){this._dispatchLayerVisibleChangedEvent(e);let t=this.map.getLayerActions(e.layer);t&&t.forEach(t=>{e.visible?this.activeAction||t!==this.defaultAction||t.element.activate():t.element._active&&t.element.deactivate(),t.handleLayerVisibilityChange&&t.handleLayerVisibilityChange();let o=t.getControl();o&&o.get("element").setDisabled(!e.visible)})}_dispatchActiveActionChangedEvent(e,t){this.dispatchEvent(new CustomEvent(g.ll.ACTIVE_ACTION_CHANGED,{detail:{previous:e?e.element:e,current:t?t.element:t}}))}changeActiveAction(e){let t=this.activeAction,o=e||void 0;t&&(this.map.deactivateCurrentAction(),t.element._active=!1,t.getControl()&&t.getControl().get("element").setActive(!1)),o&&(this.map.activateAction(o),o.element._active=!0,o.getControl()&&o.getControl().get("element").setActive(!0)),(o||t)&&this._dispatchActiveActionChangedEvent(t,o)}activateAction(e){e&&e.element.activate()}deactivateAction(e){e&&e.element.deactivate()}zoomTo(e,t){Array.isArray(e)?this.map.zoomToExtent(e,t):e instanceof Object&&this.map.zoomToGeometry(e,t)}on(e,t){return this.map.on(e,t)}un(e,t){return this.map.un(e,t)}rerender(){this.map.render()}__updateMapSize(){this.style.display="block",this.map&&this.map.updateSize(),this.__mapReadyResolver()}__updateOverviewMapSize(){this.map.overviewMapControl&&this.map.overviewMapControl.getOverviewMap().updateSize(),this.__overviewMapReadyResolver()}__updateOverviewMapSizeOnLoad(){m.__callOnceOnLoad(this.__updateOverviewMapSize.bind(this))}__updateMapSizeOnLoad(){m.__callOnceOnLoad(this.__updateMapSize.bind(this))}__createLayerGroup(e,t){return new l.A({title:e,layers:t})}__initializeCoordinateSystem(){s.A.defs("EPSG:31370","+proj=lcc +lat_1=51.16666723333333 +lat_2=49.8333339 +lat_0=90 +lon_0=4.367486666666666 +x_0=150000.013 +y_0=5400088.438 +ellps=intl +towgs84=-106.869,52.2978,-103.724,0.3366,-0.457,1.8422,-1.2747 +units=m +no_defs"),(0,c.kz)(s.A)}static __callOnceOnLoad(e){"complete"===document.readyState?e():window.addEventListener("load",e,{once:!0})}get featuresLayers(){return Array.from(this.querySelectorAll("vl-map-features-layer"))}get wfsLayers(){return Array.from(this.querySelectorAll("vl-map-wfs-layer"))}get wmsLayers(){return Array.from(this.querySelectorAll("vl-map-tiled-wms-layer, vl-map-image-wms-layer"))}}m=function(e,t,o,n){var r,i=arguments.length,l=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(i<3?r(l):i>3?r(t,o,l):r(t,o))||l);return i>3&&l&&Object.defineProperty(t,o,l),l}([(0,n.M1)("vl-map")],m)}}]);