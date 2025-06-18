"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[2063],{"../../libs/components/src/form/select-rich/vl-select-rich.component.ts":(e,l,t)=>{t.d(l,{Al:()=>f});var i=t("../../libs/common/src/index.ts"),s=t("../../node_modules/@domg/govflanders-style/common/index.js"),o=t("../../node_modules/@domg/govflanders-style/component/index.js"),r=t("../../node_modules/choices.js/public/assets/scripts/choices.js"),c=t.n(r),n=t("../../node_modules/lit/index.js"),a=t("../../node_modules/lit/directives/class-map.js"),d=t("../../libs/components/src/form/form-control/index.ts"),p=t("../../libs/components/src/form/input-field/index.ts");let u=(0,n.AH)`
    .vl-pill {
        display: inline-flex;
        max-width: 100%;
        align-items: center;
        background-color: #fff;
        font-size: 1.4rem;
        font-weight: 500;
        color: #4d4d4b;
        text-decoration: none;
        vertical-align: middle;
        border-radius: 0.3rem;
        border: 0.1rem solid #687483;
        transition: color 0.2s, background-color 0.2s, box-shadow 0.2s;
        padding: 0 1.4rem;
        line-height: calc(2.4rem - 0.2rem);
        min-width: 0;
    }

    .vl-pill__text {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
    }

    .vl-pill__close {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: #05c;
        width: 2.4rem;
        height: 2.4rem;
        border: 0.1rem solid #687483;
        text-decoration: none;
        margin-left: 1.4rem;
        padding: 0;
        border-radius: 0 0.3rem 0.3rem 0;
        transition: color 0.2s, background-color 0.2s, box-shadow 0.2s;
        margin-top: -0.1rem;
        margin-right: -0.1rem;
        margin-bottom: -0.1rem;
        min-width: 2.4rem;
    }

    .vl-pill__close:hover:not([disabled]) {
        color: #003bb0;
        box-shadow: inset 0 0 0 0.1rem #05c;
        border: #05c 0.1rem solid;
        background-color: #e6eefa;
    }

    .vl-pill__close:focus {
        outline: transparent solid 0.2rem;
        border: #05c 0.1rem solid;
        box-shadow: 0 0 0 2px #fff, 0 0 0 5px rgba(0, 85, 204, 0.65), inset 0 0 0 0.1rem #05c;
    }

    [dir='rtl'] .vl-pill__close {
        border-left: 0;
        border-right: #687483 0.1rem solid;
    }

    .is-disabled .vl-pill__close,
    .vl-pill__close[disabled] {
        color: #687483;
        cursor: default;
    }

    .vl-pill__close__icon {
        line-height: 0;
    }

    .vl-pill__close__icon::before {
        display: inline-block;
        font-size: 0.8rem;
        text-indent: 0;
        line-height: 1;
        font-weight: bold;
    }

    .vl-pill--success {
        background-color: #e6f5ed;
        border-color: #009e47;
    }

    .vl-pill--warning {
        background-color: #fff6e7;
        border-color: #ffa10a;
    }

    .vl-pill--error {
        background-color: #fbebec;
        border-color: #d2373c;
    }

    .vl-pill--disabled {
        background-color: #cbd2d9;
        color: #687483;
    }

    .vl-pill--disabled:hover,
    .vl-pill--disabled:active {
        background-color: #cbd2d9;
        color: #687483;
    }

    .vl-pill--closable {
        padding-right: 0;
    }

    .vl-pill--clickable:not(.vl-pill--disabled) {
        color: #05c;
    }

    .vl-pill--clickable:not(.vl-pill--disabled):hover {
        background-color: #e6eefa;
        color: #003bb0;
        border-color: #5991de;
        box-shadow: inset 0 0 0 0.1rem #05c;
    }

    .vl-pill--clickable:not(.vl-pill--disabled):focus {
        outline: transparent solid 0.2rem;
        border-color: #5991de;
        box-shadow: 0 0 0 2px #fff, 0 0 0 5px rgba(0, 85, 204, 0.65), inset 0 0 0 0.1rem #05c;
    }

    .vl-multiselect .multiselect__loading-enter-active,
    .vl-multiselect .multiselect__loading-leave-active {
        transition: opacity 0.4s ease-in-out;
        opacity: 1;
    }

    .vl-multiselect .multiselect__loading-enter,
    .vl-multiselect .multiselect__loading-leave-active {
        opacity: 0;
    }

    .vl-multiselect .multiselect,
    .vl-multiselect .multiselect__input,
    .vl-multiselect .multiselect__single {
        font-size: 1.6rem;
        touch-action: manipulation;
    }

    .vl-multiselect .multiselect--disabled {
        opacity: 0.6;
    }

    .vl-multiselect .multiselect--active {
        z-index: var(--vl-z-layer--multiselect);
    }

    .vl-multiselect .multiselect--active .multiselect__input {
        position: relative !important;
        border: 0.1rem solid #687483;
    }

    .vl-multiselect .multiselect--active .multiselect__tags {
        border-radius: 0.3rem 0.3rem 0 0;
        border-bottom: 1px solid #8695a8;
    }

    .vl-multiselect .multiselect {
        display: block;
        position: relative;
        max-width: 100%;
        text-decoration: none;
        color: #333332;
        font-family: 'Flanders Art Sans', sans-serif;
        font-size: 1.6rem;
        -webkit-appearance: none;
    }

    .vl-multiselect .multiselect:focus::-ms-value {
        background: inherit;
        color: inherit;
    }

    .vl-multiselect .multiselect--active:not(.multiselect--above) .multiselect__current,
    .vl-multiselect .multiselect--active:not(.multiselect--above) .multiselect__tags {
        padding: 6px 45px 0 10px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }

    .vl-multiselect .multiselect--above--active .multiselect__current,
    .vl-multiselect .multiselect--above--active .multiselect__input,
    .vl-multiselect .multiselect--above--active .multiselect__tags {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }

    .vl-multiselect .multiselect--above--active .multiselect__input {
        display: inline-block;
    }

    .vl-multiselect .multiselect--disabled {
        pointer-events: none;
    }

    .vl-multiselect .multiselect--disabled .multiselect__tags {
        border-color: #8695a8;
        background-color: #f3f5f6;
    }

    .vl-multiselect .multiselect__input {
        margin: 10px 5px 15px 2px;
        display: inline-block;
        background: #fff;
        font-family: 'Flanders Art Sans', sans-serif;
        font-size: 1.6rem;
        color: #333332;
        max-width: 100%;
        height: 3.5rem;
        line-height: 3.5rem;
        border-radius: 0.3rem;
        border: 0;
        -webkit-appearance: none;
        padding: 0 1rem;
        transition: background-color 0.2s;
    }

    @media screen and (max-width: 767px) {
        .vl-multiselect .multiselect__input {
            font-size: 1.6rem;
        }
    }

    .vl-multiselect .multiselect__input:hover {
        border: 0.2rem solid rgba(0, 85, 204, 0.65);
        padding: 0 0.9rem;
    }

    .vl-multiselect .multiselect__input:hover.vl-input-field--error,
    .vl-multiselect .multiselect__input:hover.invalid.validated {
        border-color: #d2373c;
    }

    .vl-multiselect .multiselect__input:hover.vl-input-field--success {
        border-color: #009e47;
    }

    .vl-multiselect .multiselect__input:hover.vl-input-field--small {
        padding: 0 0.7rem;
    }

    .vl-multiselect .multiselect__input:focus,
    .vl-multiselect .multiselect__input--focus {
        box-shadow: 0 0 0 2px #fff, 0 0 0 5px rgba(0, 85, 204, 0.65);
        outline: transparent solid 0.2rem;
        border: 0.1rem solid #687483;
        padding: 0 1rem;
    }

    @supports (outline-offset: 2px) {
        .vl-multiselect .multiselect__input:focus,
        .vl-multiselect .multiselect__input--focus {
            box-shadow: none;
            outline: 3px solid rgba(0, 85, 204, 0.65);
            outline-offset: 2px;
        }
    }

    .vl-multiselect .multiselect__input:focus.vl-input-field--error,
    .vl-multiselect .multiselect__input:focus.invalid.validated,
    .vl-multiselect .multiselect__input--focus.vl-input-field--error,
    .vl-multiselect .multiselect__input--focus.invalid.validated {
        border-color: #d2373c;
    }

    .vl-multiselect .multiselect__input:focus.vl-input-field--success,
    .vl-multiselect .multiselect__input--focus.vl-input-field--success {
        border-color: #009e47;
    }

    .vl-multiselect .multiselect__input:focus:hover,
    .vl-multiselect .multiselect__input--focus:hover {
        padding: 0 1rem;
    }

    .vl-multiselect .multiselect__input:focus.vl-input-field--small,
    .vl-multiselect .multiselect__input--focus.vl-input-field--small {
        padding: 0 0.8rem;
    }

    .vl-multiselect .multiselect__input::placeholder {
        color: #687483;
    }

    .vl-multiselect .multiselect__input::-webkit-search-cancel-button {
        -webkit-appearance: none;
    }

    .vl-multiselect .multiselect__single {
        position: relative;
        display: inline-block;
        min-height: 20px;
        line-height: 20px;
        border: 0;
        border-radius: 5px;
        padding: 0 0 0 5px;
        margin-bottom: 8px;
        width: 100%;
        transition: border 0.1s ease;
        box-sizing: border-box;
        vertical-align: top;
        color: #687483;
    }

    .multiselect__tag ~ .vl-multiselect .multiselect__single {
        width: auto;
    }

    .vl-multiselect .multiselect__single:focus {
        outline: 0;
    }

    .vl-multiselect--single .multiselect__single {
        padding-top: 3px;
        min-height: 17px;
        line-height: 17px;
        color: #333332;
    }

    .vl-multiselect .multiselect__tags-wrap {
        display: inline;
    }

    .vl-multiselect .multiselect--active .multiselect__tags-wrap {
        margin: 0 -4px;
    }

    .vl-multiselect .multiselect__tags {
        min-height: 35px;
        display: block;
        padding: 6px 45px 0 6px;
        border: 1px solid #8695a8;
        background-color: #fff;
        font-size: 14px;
        border-radius: 3px;
    }

    .vl-multiselect .multiselect__tag {
        position: relative;
        display: inline-block;
        padding: 4px 30px 4px 10px;
        border-radius: 0.3rem;
        margin-right: 6px;
        line-height: 1;
        background: #fff;
        margin-bottom: 5px;
        white-space: nowrap;
        max-width: 100%;
        text-overflow: ellipsis;
        color: #333332;
        font-family: 'Flanders Art Sans', sans-serif;
        font-weight: 500;
        font-size: 1.4rem;
        vertical-align: middle;
        border: 1px solid #8695a8;
        transition: color 0.2s, background-color 0.2s, box-shadow 0.2s;
    }

    .vl-multiselect .multiselect__current {
        min-height: 40px;
        overflow: hidden;
        padding: 8px 12px 0;
        padding-right: 30px;
        white-space: nowrap;
        border-radius: 5px;
        border: 1px solid #e8ebee;
    }

    .vl-multiselect .multiselect__current,
    .vl-multiselect .multiselect__select {
        line-height: 16px;
        box-sizing: border-box;
        display: block;
        margin: 0;
        text-decoration: none;
        cursor: pointer;
    }

    .vl-multiselect .multiselect__select {
        position: absolute;
        width: 40px;
        right: 0;
        top: 0;
        height: 100%;
        padding: 4px 8px;
        text-align: center;
        transition: transform 0.2s ease;
    }

    .vl-multiselect .multiselect__placeholder {
        display: inline-block;
        padding: 0 0 0 5px;
        color: #687483;
        font-family: 'Flanders Art Sans', sans-serif;
        font-size: 1.6rem;
        white-space: nowrap;
        max-width: 100%;
        overflow: hidden;
    }

    .multiselect--active .vl-multiselect .multiselect__placeholder {
        display: none;
    }

    .vl-multiselect .multiselect__content-wrapper {
        position: absolute;
        display: block;
        background: #fff;
        width: 100%;
        max-height: 240px;
        overflow: auto;
        border: 1px solid #8695a8;
        border-top: 0;
        border-bottom-left-radius: 0.3rem;
        border-bottom-right-radius: 0.3rem;
        z-index: 1;
        -webkit-overflow-scrolling: touch;
    }

    .vl-multiselect .multiselect__content {
        list-style: none;
        display: inline-block;
        padding: 0;
        margin: -1px 0;
        min-width: 100%;
        vertical-align: top;
    }

    .vl-multiselect .multiselect__content::webkit-scrollbar {
        display: none;
    }

    .vl-multiselect .multiselect--above .multiselect__content-wrapper {
        bottom: 100%;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        border-bottom: none;
        border-top: 1px solid #f7f9fc;
    }

    .vl-multiselect .multiselect__element {
        display: block;
    }

    .vl-multiselect .multiselect__strong {
        margin-bottom: 8px;
        line-height: 20px;
        display: inline-block;
        vertical-align: top;
    }

    .vl-multiselect [dir='rtl'] .multiselect {
        text-align: right;
    }

    .vl-multiselect [dir='rtl'] .multiselect__select {
        right: auto;
        left: 1px;
    }

    .vl-multiselect [dir='rtl'] .multiselect__tags {
        padding: 8px 8px 0 40px;
    }

    .vl-multiselect [dir='rtl'] .multiselect__content {
        text-align: right;
    }

    .vl-multiselect [dir='rtl'] .multiselect__clear {
        right: auto;
        left: 12px;
    }

    .vl-multiselect [dir='rtl'] .multiselect__spinner {
        right: auto;
        left: 1px;
    }

    .vl-multiselect--error .multiselect__current,
    .vl-multiselect--error .multiselect__tags,
    .vl-multiselect.invalid.validated .multiselect__current,
    .vl-multiselect.invalid.validated .multiselect__tags {
        border-color: #d2373c;
        background-color: #fbebec;
    }

    .vl-multiselect--success .multiselect__current,
    .vl-multiselect--success .multiselect__tags,
    .vl-multiselect.valid.validated .multiselect__current,
    .vl-multiselect.valid.validated .multiselect__tags {
        border-color: #009e47;
        background-color: #e6f5ed;
    }
`;var m=t("../../libs/styles/src/index.ts");let v=(0,n.AH)`
    .js-vl-select .vl-select__inner {
        font-size: var(--vl-font-size--small);
        border-color: var(--vl-color--border-alt);
    }

    .js-vl-select .vl-select__inner .vl-select,
    .js-vl-select .vl-select__inner .vl-multiselect {
        display: none;
    }

    .js-vl-select .vl-select__item--choice.vl-select__placeholder {
        display: none;
    }

    .js-vl-select .vl-select__inner:has(select.vl-select--error) {
        border-color: #d2373c;
        background-color: #fbebec;
    }

    .js-vl-select .vl-select__inner:has(select.vl-select--success) {
        border-color: #009e47;
        background-color: #e6f5ed;
    }

    .js-vl-select .vl-select__item.vl-select__placeholder {
        opacity: 1;
        color: #687483;
    }

    .js-vl-select[data-type='select-one'] .vl-select__inner .vl-pill__close {
        margin: 0.1rem 0 0 auto;
        border-radius: 0.3rem;

        &:hover,
        &:focus {
            box-shadow: none;
            border: #05c 0.1rem solid;
            background-color: #e6eefa;
            color: #003bb0;
            outline: none;
        }
    }

    .js-vl-select .vl-select__list--dropdown .vl-select__list .vl-select__group {
        border-top: none;
    }

    .js-vl-select .vl-select__list--dropdown .vl-select__list .vl-select__group ~ .vl-select__group {
        border-top: 0.1rem solid rgb(104, 116, 131);
    }

    .js-vl-select
        .vl-select__list--dropdown
        .vl-select__list
        :not(.vl-select__group)
        .vl-select__item:not(.vl-select__placeholder) {
        border-top: none;
    }

    .js-vl-select
        .vl-select__list--dropdown
        .vl-select__list
        :not(.vl-select__group)
        .vl-select__item:not(.vl-select__placeholder)
        ~ .vl-select__item {
        border-top: 0.1rem solid rgb(104, 116, 131);
    }

    .js-vl-select.vl-vi.vl-vi-nav-down:before {
        color: #6e7985;
        position: absolute;
        right: 1.3rem;
        font-size: 1.3rem;
        top: 50%;
        transform: translateY(-50%);
    }

    .js-vl-select.is-disabled .vl-select__list--multiple .vl-select__item {
        padding-right: 1.4rem;

        .vl-pill__close {
            display: none;
        }
    }

    .js-vl-select:not(.is-disabled) {
        &:focus,
        &.is-focused,
        &.is-open {
            ${(0,m._L)()}
            &:hover .vl-select__inner {
                box-shadow: none;
                border-color: var(--vl-color--border-alt);
            }
        }
    }
`,h=(0,n.AH)`
    .vl-select:focus::-ms-value {
        background: inherit;
        color: inherit;
    }

    .vl-select::-ms-expand {
        display: none;
    }

    .vl-select:hover:not([disabled]) {
        border: 0.2rem solid rgba(0, 85, 204, 0.65);
        padding: 0 3.9rem 0 1.4rem;
        line-height: 3.2rem;
        background-position: calc(100% - 1.4rem) 50%;
    }

    .vl-select:hover:not([disabled]).vl-select--error,
    .vl-select:hover:not([disabled]).invalid.validated {
        border-color: #d2373c;
    }

    .vl-select:hover:not([disabled]).vl-select--success,
    .vl-select:hover:not([disabled]).valid.validated {
        border-color: #009e47;
    }

    .vl-select:focus {
        box-shadow: 0 0 0 2px #fff, 0 0 0 5px rgba(0, 85, 204, 0.65);
        outline: transparent solid 0.2rem;
    }

    @supports (outline-offset: 2px) {
        .vl-select:focus {
            box-shadow: none;
            outline: 3px solid rgba(0, 85, 204, 0.65);
            outline-offset: 2px;
        }
    }

    .vl-select[disabled],
    .vl-select--disabled {
        border-color: #8695a8;
        background-color: #f3f5f6;
        color: var(--vl-theme-fg-color-70);
    }

    .vl-select--block {
        display: block;
        width: 100%;
    }

    @media screen and (max-width: 767px) {
        .vl-select {
            height: 3.5rem;
            line-height: 3.5rem;
            font-size: 1.6rem;
        }
    }
    @media all and (min-width: 0\\0) and (min-resolution: 0.001dpcm) {
        .vl-select {
            padding-right: 0;
            background-image: none;
        }
    }

    .no-js [select]:focus::-ms-value {
        background: inherit;
        color: inherit;
    }

    .js-vl-select {
        position: relative;
        border-radius: 0.3rem;
        z-index: var(--vl-z-layer--select-dropdown);
    }

    .js-vl-select.is-disabled {
        border-color: #687483;
        background-color: #f3f5f6 !important;
        outline: 0;
    }

    .js-vl-select.is-disabled .vl-select__inner {
        border-color: #8695a8;
    }

    .js-vl-select.is-disabled .vl-select__item {
        color: var(--vl-theme-fg-color-70);
        cursor: default;
    }

    .js-vl-select.is-focused {
        box-shadow: 0 0 0 2px #fff, 0 0 0 5px rgba(0, 85, 204, 0.65);
        outline: transparent solid 0.2rem;
    }

    @supports (outline-offset: 2px) {
        .js-vl-select.is-focused {
            box-shadow: none;
            outline: 3px solid rgba(0, 85, 204, 0.65);
            outline-offset: 2px;
        }
    }

    .js-vl-select.is-open {
        z-index: var(--vl-z-layer--select-dropdown-open);
    }

    .js-vl-select.is-open .vl-select__inner {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }

    .js-vl-select.is-open::after {
        transform: translateY(-0.75rem);
        border-color: transparent transparent #000;
    }

    .js-vl-select.is-flipped .vl-select__inner {
        border-radius: 0 0 0.3rem 0.3rem;
    }

    .js-vl-select.is-flipped .vl-select__list--dropdown {
        top: auto;
        bottom: 100%;
        transform: translateY(0.1rem);
        border-radius: 0.3rem 0.3rem 0 0;
    }

    .js-vl-select:hover:not(.is-disabled) .vl-select__inner {
        border-color: rgba(0, 85, 204, 0.65);
        box-shadow: inset 0 0 0 0.1rem rgba(0, 85, 204, 0.65);
    }

    .js-vl-select[data-type*='select-one'] .vl-input-field {
        display: block;
        padding: 0;
        color: #333332;
        overflow: hidden;
        white-space: nowrap;
    }

    .js-vl-select[data-type*='select-one'] .vl-select__list--dropdown .vl-input-field {
        width: calc(100% - (2 * 2rem));
        margin: 2rem;
        padding: 0 1rem;
        border: 0.1rem solid #687483;
    }

    .js-vl-select[data-type*='select-one'] .vl-select__item--selectable {
        min-height: calc(3.5rem - 1.2rem);
        height: calc(3.5rem - 1.2rem);
    }

    .js-vl-select[data-type*='select-one'] .vl-select__inner {
        height: 3.5rem;
        line-height: 3.5rem;
        padding-right: 3.5rem;
    }

    .js-vl-select[data-type*='select-one'][dir='rtl']::after {
        right: auto;
        left: 1.15rem;
    }

    .js-vl-select[data-type*='select-one'][dir='rtl'] .vl-pill__close {
        margin-right: auto;
        margin-left: 0;
    }

    .js-vl-select[data-type*='select-one'] .vl-pill__close {
        border: 0;
        display: inline-flex;
        margin-left: auto;
    }

    .js-vl-select[data-type*='select-one'] .vl-pill__close:hover,
    .js-vl-select[data-type*='select-one'] .vl-pill__close:focus,
    .js-vl-select[data-type*='select-one'] .vl-pill__close:active {
        color: #003bb0;
    }

    .js-vl-select[data-type*='select-one'].is-disabled .vl-pill__close,
    .js-vl-select[data-type*='select-one'] .vl-select__placeholder .vl-pill__close {
        display: none;
    }

    .js-vl-select[data-type*='select-multiple'],
    .js-vl-select[data-type*='text'] {
        background-color: #fff;
    }

    .js-vl-select[data-type*='select-multiple'] .vl-select__inner,
    .js-vl-select[data-type*='text'] .vl-select__inner {
        cursor: text;
    }

    .js-vl-select[data-type*='select-multiple'] .vl-input-field,
    .js-vl-select[data-type*='text'] .vl-input-field {
        display: inline;
        padding: 0;
        line-height: 2.2rem;
        height: 2.4rem;
    }

    .js-vl-select[data-type*='select-multiple'] .vl-input-field:focus,
    .js-vl-select[data-type*='text'] .vl-input-field:focus {
        outline: 0;
        box-shadow: none;
    }

    .js-vl-select__group {
        padding: 0.3rem 0.5rem 0.3rem 0;
        border-top: 0.1rem solid #687483;
        text-decoration: none;
    }

    .js-vl-select .vl-select__inner {
        padding: 0.5rem 6rem 0.4rem 1rem;
        border: 0.1rem solid #687483;
        border-radius: 0.3rem;
        color: #666;
        font-family: 'Flanders Art Sans', sans-serif;
        overflow: hidden;
    }

    .is-open .js-vl-select .vl-select__inner {
        border-bottom: 0;
    }

    .js-vl-select .vl-select__list {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .js-vl-select .vl-select__list--single {
        display: inline-block;
        width: 100%;
    }

    [dir='rtl'] .js-vl-select .vl-select__list--single {
        padding-right: 0.5rem;
        padding-left: 1.5rem;
    }

    .js-vl-select .vl-select__list--multiple {
        display: inline-flex;
        align-content: center;
        max-width: 100%;
    }

    .js-vl-select .vl-select__list--multiple .vl-select__item {
        margin: 0.2rem 0.6rem 0.5rem 0;
        display: inline-flex;
    }

    .js-vl-select .vl-select__list--multiple .vl-select__item[data-deletable] {
        padding-right: 0;
    }

    [dir='rtl'] .js-vl-select .vl-select__list--multiple--multiple {
        margin-right: 0;
        margin-left: 0.375rem;
    }

    .js-vl-select .vl-select__list--multiple .vl-input-field {
        padding: 0.4rem 0 0.4rem 0.2rem;
    }

    .js-vl-select .vl-select__list--dropdown {
        display: none;
        position: absolute;
        top: 100%;
        width: 100%;
        transform: translateY(-0.1rem);
        border: 0.1rem #687483 solid;
        background-color: #fff;
        z-index: 1;
        border-bottom-left-radius: 0.3rem;
        border-bottom-right-radius: 0.3rem;
    }

    .js-vl-select .vl-select__list--dropdown.is-active {
        display: block;
    }

    .js-vl-select .vl-select__list--dropdown .vl-select__list {
        position: relative;
        max-height: 35vh;
        overflow: auto;
        will-change: scroll-position;
        -webkit-overflow-scrolling: touch;
    }

    .js-vl-select .vl-select__list--dropdown .vl-input-field + .vl-select__list {
        border-top: 0.1rem solid #687483;
    }

    .js-vl-select .vl-select__list--dropdown .vl-select__item {
        width: 100%;
        min-height: 0;
        height: auto;
        padding-top: 0.8rem;
        padding-bottom: 0.8rem;
        padding-left: 3rem;
        border: 0;
        color: #000;
        font-weight: normal;
        text-decoration: none;
    }

    .js-vl-select .vl-select__list--dropdown .vl-select__item:not(:first-of-type) {
        border-top: 0.1rem #cbd2da solid;
    }

    [dir='rtl'] .js-vl-select .vl-select__list--dropdown .vl-select__item {
        text-align: right;
    }

    @media screen and (min-width: 767px) {
        .js-vl-select .vl-select__list--dropdown .vl-select__item--selectable {
            padding-right: 10rem;
        }

        .js-vl-select .vl-select__list--dropdown .vl-select__item--selectable::after {
            position: absolute;
            top: 50%;
            right: 1rem;
            transform: translateY(-50%);
            content: attr('data-select-text');
            opacity: 0.5;
        }

        [dir='rtl'] .js-vl-select .vl-select__list--dropdown .vl-select__item--selectable {
            padding-right: 1rem;
            padding-left: 10rem;
            text-align: right;
        }

        [dir='rtl'] .js-vl-select .vl-select__list--dropdown .vl-select__item--selectable::after {
            right: auto;
            left: 1rem;
        }
    }

    .js-vl-select .vl-select__list--dropdown .vl-select__item--selectable.is-highlighted {
        position: relative;
        background-color: rgba(179, 207, 245, 0.3);
    }

    .js-vl-select .vl-select__list--dropdown .vl-select__item[aria-selected='true'] {
        background-color: rgba(179, 207, 245, 0.3);
    }

    .js-vl-select .vl-select__item {
        cursor: default;
        display: flex;
        align-items: center;
    }

    .js-vl-select .vl-select__item--disabled {
        background-color: #f3f5f6 !important;
        border-color: #8695a8;
        color: var(--vl-theme-fg-color-70) !important;
        cursor: not-allowed;
        user-select: none;
    }

    .js-vl-select .vl-select__item--disabled:hover {
        background-color: #f3f5f6;
    }

    .js-vl-select .vl-select__item span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .js-vl-select .vl-input-field {
        display: inline-block;
        max-width: 100%;
        border: 0;
        background-color: transparent;
        vertical-align: baseline;
    }

    [dir='rtl'] .js-vl-select .vl-input-field {
        padding-right: 0.2rem;
        padding-left: 0;
    }

    .js-vl-select .vl-select__placeholder {
        opacity: 0.5;
    }

    .js-vl-select .vl-select__group {
        display: block;
    }

    .js-vl-select .vl-select__group:not(:first-of-type) {
        border-top: 0.1rem solid #687483;
    }

    .js-vl-select .vl-select__group .vl-select__heading {
        padding: 0.6rem 2rem;
        color: #4d4d4b;
        font-weight: 500;
    }

    .vl-select--error .js-vl-select {
        background-color: #d2373c;
        border: 0.2rem solid #d2373c;
        box-shadow: inset 0 0 0 0.1rem #d2373c;
    }

    .vl-select--error .js-vl-select:focus {
        background-color: #fff;
    }

    .vl-select--success .js-vl-select {
        border-color: #009e47;
        background-color: #e6f5ed;
        border-width: 0.2rem;
        border-style: solid;
    }
`;var _=t("../../libs/components/src/form/select-rich/vl-select-rich.defaults.ts");let b=r.DEFAULT_CLASSNAMES,g=c();class f extends d.M{constructor(){super(),this.options=_.X.options,this.placeholder=_.X.placeholder,this.search=_.X.search,this.searchPlaceholder=_.X.searchPlaceholder,this.choices=null,this.notDeletable=_.X.notDeletable,this.multiple=_.X.multiple,this.position=_.X.position,this.resultLimit=_.X.resultLimit,this.noResultsText=_.X.noResultsText,this.noChoicesText=_.X.noChoicesText,this.value=null,this.dispatchInput=!1,this.initialOptions=[],this.onClickChoices=e=>{e.stopPropagation(),this.disabled||this.choices?.showDropdown()},this.onSearchInput=e=>{let l=e?.target?.value;this.dispatchEvent(new CustomEvent("vl-select-search",{bubbles:!0,composed:!0,detail:{value:l}}))},this.submitFormOnEnter=!1}static get styles(){return[s.h8,s.BI,p.N,h,u,o.py,v]}static get properties(){return{options:{type:Array},placeholder:{type:String},notDeletable:{type:Boolean,attribute:"not-deletable"},multiple:{type:Boolean},search:{type:Boolean},position:{type:String},resultLimit:{type:Number,attribute:"result-limit"},noResultsText:{type:String,attribute:"no-results-text"},noChoicesText:{type:String,attribute:"no-choices-text"},searchPlaceholder:{type:String,attribute:"search-placeholder"},value:{type:FormData,state:!0,hasChanged:(e,l)=>e instanceof FormData&&l instanceof FormData?JSON.stringify([...e.entries()])!==JSON.stringify([...l.entries()]):e!==l}}}get validationTarget(){return this.shadowRoot?.querySelector("select")}firstUpdated(e){super.firstUpdated(e),this.choices=new g(this.validationTarget,this.getChoicesConfig()),this.initialOptions=[...JSON.parse(JSON.stringify(this.options))],setTimeout(()=>{this.getChoicesElement()?.addEventListener("click",this.onClickChoices),this.internals.labels[0]?.addEventListener("click",this.onClickChoices),this.value||this.setValue(null),this.choices?.input?.element?.addEventListener("input",this.onSearchInput)},0)}updated(e){if(super.updated(e),this.choices){if(e.has("options")&&(this.choices.clearStore(),this.choices.setChoices(this.getOptions(),"value","label",!0),this.onChange()),e.has("value")){let e={value:this.getSelected()};this.setValue(this.value),this.dispatchEvent(new CustomEvent("vl-change",{bubbles:!0,composed:!0,detail:e})),this.dispatchInput&&(this.dispatchEvent(new CustomEvent("vl-input",{bubbles:!0,composed:!0,detail:e})),this.dispatchInput=!1),this.dispatchEventIfValid(e)}e.has("disabled")&&(this.disabled?this.choices.disable():this.choices.enable()),e.has("error")&&this.internals.setValidity({customError:this.error},"custom-error"),e.has("resultLimit")&&(this.choices.config.searchResultLimit=this.resultLimit)}}disconnectedCallback(){super.disconnectedCallback(),this.getChoicesElement()?.removeEventListener("click",this.onClickChoices),this.internals.labels[0]?.removeEventListener("click",this.onClickChoices),this.choices?.input?.element?.removeEventListener("input",this.onSearchInput)}render(){let e={"vl-select":!this.multiple,"vl-multiselect":this.multiple,"vl-select--disabled":this.disabled,"vl-select--error":this.isInvalid||this.error,"vl-select--success":this.success};return(0,n.qy)`
            <select
                id=${this.id||n.s6}
                name=${this.name||n.s6}
                class=${(0,a.H)(e)}
                aria-label=${this.label||n.s6}
                aria-invalid=${this.isInvalid||n.s6}
                ?required=${this.required}
                ?disabled=${this.disabled}
                ?error=${this.error}
                ?multiple=${this.multiple}
                @change=${this.onChange}
                @choice=${this.onSelect}
                @removeItem=${this.onSelect}
            ></select>
        `}resetFormControl(){super.resetFormControl(),this.options=[...this.initialOptions]}getSelected(){return this.multiple?this.getSelectedValues():this.getSelectedValues()[0]||null}onKeydown(e){e.stopPropagation(),super.onKeydown(e)}getSelectedValues(){return Array.from(this.validationTarget.selectedOptions).filter(e=>e.value).map(e=>e.value)}collectFormData(){let e=this.name||this.id,l=this.getSelectedValues();return l?.length?l.reduce((l,t,i)=>(i?l.append(e,t):l.set(e,t),l),new FormData):null}getChoicesElement(){return this.shadowRoot?.querySelector(".js-vl-select")}getChoicesConfig(){return{shouldSort:!1,removeItemButton:!this.notDeletable,removeItems:!this.notDeletable,searchEnabled:this.search,placeholder:!!this.placeholder,placeholderValue:this.placeholder,position:this.position,noResultsText:this.noResultsText,searchResultLimit:this.resultLimit,noChoicesText:this.noChoicesText,searchPlaceholderValue:this.searchPlaceholder,classNames:{...b,containerOuter:"js-vl-select",containerInner:"vl-select__inner",input:"vl-input-field",inputCloned:"vl-input-field-cloned",list:"vl-select__list",listItems:"vl-select__list--multiple",listSingle:"vl-select__list--single",listDropdown:"vl-select__list--dropdown",item:"vl-select__item",itemSelectable:"vl-select__item--selectable",itemDisabled:"vl-select__item--disabled",itemChoice:"vl-select__item--choice",placeholder:"vl-select__placeholder",group:"vl-select__group",groupHeading:"vl-select__heading",button:"vl-select__button"},callbackOnCreateTemplates:e=>({containerOuter:()=>e(`<div
                                class="js-vl-select vl-vi vl-vi-nav-down"
                                data-type="${this.multiple?"select-multiple":"select-one"}"
                                ${this.search?'aria-autocomplete="list"':""}
                                role="combobox"
                                part="vl-select-rich__combobox"
                                aria-haspopup="true"
                                aria-expanded="false"
                                tabindex="0"
                                aria-controls="vl-select__list"
                                aria-label="${this.multiple?"selecteer één of meerdere opties":"selecteer één optie"}">
                            </div>`),item:(l,t)=>this.notDeletable?e(`
                            <div class="vl-select__item
                                ${t.highlighted?"is-highlighted":"vl-select__item--selectable"}
                                ${this.multiple?"vl-pill":""}
                                ${t.placeholder?"vl-select__placeholder":""}"
                                data-item
                                data-id="${t.id}"
                                data-value="${t.value}"
                                ${t.disabled?'aria-disabled="true"':""}
                            >
                                ${t.label}
                            </div>
                        `):e(`<div class="
                                    vl-select__item
                                    ${t.highlighted?"is-highlighted":""}
                                    ${t.disabled?"":"vl-select__item--selectable"}
                                    ${this.multiple?"vl-pill":""}
                                    ${t.placeholder?"vl-select__placeholder":""}"
                                    data-item
                                    data-id="${t.id}"
                                    data-value="${t.value}"
                                    ${t.disabled?'aria-disabled="true"':"data-deletable"}
                                >
                                    <span>${t.label}</span>
                                    <button type="button" class="vl-pill__close ${this.multiple?"":"vl-vi vl-vi-close"}" data-button aria-label="verwijder">
                                        ${this.multiple?'<span class="vl-pill__close__icon vl-vi vl-vi-close" aria-hidden="true"></span>':""}
                                    </button>
                                </div>`),itemList:()=>this.multiple?e('<div class="vl-input-field vl-select__list--multiple"></div>'):e('<div class="vl-input-field"></div>'),input:()=>e(`<input
                                    type="text"
                                    class="vl-input-field vl-input-field-cloned"
                                    autocomplete="off"
                                    autocapitalize="off"
                                    spellcheck="false"
                                    role="textbox"
                                    aria-autocomplete="list"
                                    aria-label="zoek item">`),dropdown:()=>e('<div class="vl-select__list vl-select__list--dropdown" role="group" id="vl-select__list"></div>'),choiceList:()=>e('<div class="vl-select__list" role="listbox" aria-label="item lijst" tabindex="0"></div>')})}}getOptions(){let e=[...this.options];if(this.placeholder&&!this.multiple){let l={value:"",label:this.placeholder,placeholder:!0,disabled:!0,selected:!0};e.unshift(l)}return e}onChange(){this.value=this.collectFormData()}onSelect(){this.dispatchInput=!0}}f=function(e,l,t,i){var s,o=arguments.length,r=o<3?l:null===i?i=Object.getOwnPropertyDescriptor(l,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,l,t,i);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(r=(o<3?s(r):o>3?s(l,t,r):s(l,t))||r);return o>3&&r&&Object.defineProperty(l,t,r),r}([(0,i.M1)("vl-select-rich")],f)},"../../libs/components/src/form/select-rich/vl-select-rich.defaults.ts":(e,l,t)=>{t.d(l,{X:()=>o});var i=t("../../libs/components/src/form/form-control/form-control.defaults.ts"),s=t("../../libs/components/src/form/select-rich/vl-select-rich.model.ts");let o={...i.i,options:[],placeholder:"",notDeletable:!1,multiple:!1,search:!1,position:s.u.AUTO,resultLimit:4,noResultsText:"Geen resultaten gevonden",noChoicesText:"Geen resterende opties gevonden",searchPlaceholder:"Zoek item"}},"../../libs/components/src/form/select-rich/vl-select-rich.model.ts":(e,l,t)=>{t.d(l,{u:()=>i});let i={AUTO:"auto",TOP:"top",BOTTOM:"bottom"}}}]);