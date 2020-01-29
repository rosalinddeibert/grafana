/* tslint:disable:max-line-length */

import { GrafanaTheme } from '@grafana/data';
import { renderGeneratedFileBanner } from '../utils/generatedFileBanner';

export const darkThemeVarsTemplate = (theme: GrafanaTheme) =>
  `${renderGeneratedFileBanner('grafana-ui/src/themes/dark.ts', 'grafana-ui/src/themes/_variables.dark.scss.tmpl.ts')}
// Global values
// --------------------------------------------------

$theme-name: light;

// New Colors
// -------------------------
$blue-faint: ${theme.colors.blueFaint};
$blue-light: ${theme.colors.blueLight};
$blue-base: ${theme.colors.blueBase};
$blue-shade: ${theme.colors.blueShade};
$red-base: ${theme.colors.redBase};
$red-shade: ${theme.colors.redShade};
$green-base: ${theme.colors.greenBase};
$green-shade: ${theme.colors.greenShade};
$orange-dark: ${theme.colors.orangeDark};

// Grays
// -------------------------
$black: ${theme.colors.black};
$dark-1: ${theme.colors.dark1};
$dark-2: ${theme.colors.dark2};
$dark-3: ${theme.colors.dark3};
$dark-4: ${theme.colors.dark4};
$dark-5: ${theme.colors.dark5};
$dark-6: ${theme.colors.dark6};
$dark-7: ${theme.colors.dark7};
$dark-8: ${theme.colors.dark8};
$dark-9: ${theme.colors.dark9};
$dark-10: ${theme.colors.dark10};
$gray-1: ${theme.colors.gray1};
$gray-2: ${theme.colors.gray2};
$gray-3: ${theme.colors.gray3};
$gray-4: ${theme.colors.gray4};
$gray-5: ${theme.colors.gray5};
$gray-6: ${theme.colors.gray6};
$gray-7: ${theme.colors.gray7};
$gray-8: ${theme.colors.gray8};

$gray-blue: ${theme.colors.grayBlue};
$input-black: #09090b;

$white: ${theme.colors.white};

// Accent colors
// -------------------------
$blue: ${theme.colors.blue};
$blue-light: ${theme.colors.blueLight};
$blue-highlight: #585eff;
$green: #3aa655;
$red: #ff7358;
$yellow: ${theme.colors.yellow};
$orange: ${theme.colors.orange};
$pink: #e671b8;
$purple: ${theme.colors.purple};
$variable: $blue;

$brand-primary: $orange;
$brand-success: $green;
$brand-warning: $orange;
$brand-danger: $red;

$query-red: $red;
$query-green: $green;
$query-purple: $purple;
$query-orange: $orange;
$query-keyword: ${theme.colors.queryKeyword};

// Status colors
// -------------------------
$online: ${theme.colors.online};
$warn: ${theme.colors.warn};
$critical: ${theme.colors.critical};

// Scaffolding
// -------------------------
$body-bg: ${theme.colors.bodyBg};
$page-bg: ${theme.colors.pageBg};

$body-color: ${theme.colors.body};
$text-color: ${theme.colors.text};
$text-color-strong: ${theme.colors.textStrong};
$text-color-weak: ${theme.colors.textWeak};
$text-color-faint: ${theme.colors.textFaint};
$text-color-emphasis: ${theme.colors.textEmphasis};

$text-shadow-strong: none;
$text-shadow-faint: none;
$textShadow: none;

// gradients
$brand-gradient: linear-gradient(to right, #ffd500 0%, #ff4400 99%, #ff4400 100%);
$brand-gradient-horizontal: linear-gradient(to right, #f05a28 30%, #fbca0a 99%);
$brand-gradient-vertical: linear-gradient(#f05a28 30%, #fbca0a 99%);
$page-gradient: $gray-7;
$edit-gradient: linear-gradient(180deg, $dark-2 50%, $input-black);

// Links
// -------------------------
$link-color: ${theme.colors.link};
$link-color-disabled: lighten($link-color, 30%);
$link-hover-color: darken($link-color, 20%);
$external-link-color: $blue-light;

// Typography
// -------------------------
$headings-color: $text-color;
$abbr-border-color: $gray-2 !default;
$text-muted: $text-color-weak;

// Hr border color
$hrBorder: $gray-3;
$hr-border-color: $dark-3! default;

// Panel
// -------------------------
$panel-bg: ${theme.colors.panelBg};
$panel-border-color: $gray-5;
$panel-border: none;
$panel-header-hover-bg: $gray-6;
$panel-corner: $panel-bg;

// page header
$page-header-bg: transparent;
$page-header-shadow: inset 0px -3px 10px $gray-6;
$page-header-border-color: $gray-4;

$divider-border-color: $gray-2;

// Graphite Target Editor
$tight-form-bg: #eaebee;
$tight-form-func-bg: $gray-5;
$tight-form-func-highlight-bg: $gray-6;

$modal-backdrop-bg: $body-bg;
$code-tag-bg: $gray-6;
$code-tag-border: darken($code-tag-bg, 3%);

// cards
$card-background: $gray-7;
$card-background-hover: darken($gray-7, 10%);
$card-shadow: -1px -1px 0 0 hsla(0, 0%, 100%, 0.1), 1px 1px 0 0 rgba(0, 0, 0, 0.1);

// Lists
$list-item-bg: darken($white, 10%); // $card-background;
$list-item-hover-bg: darken($white, 5%);
$list-item-link-color: darken($gray-8, 20%);
$list-item-shadow: $card-shadow;
$empty-list-cta-bg: $gray-8;

// Scrollbars
$scrollbarBackground: $gray-5;
$scrollbarBackground2: $gray-5;
$scrollbarBorder: $gray-4;

// Tables
// -------------------------
$table-bg: transparent; // overall background-color
$table-bg-accent: $gray-5; // for striping
$table-bg-hover: $gray-5; // for hover
$table-bg-active: $table-bg-hover !default; // for hover
$table-border: $gray-3; // table and cell border

$table-bg-odd: $gray-6;
$table-bg-hover: $gray-5;

// Buttons
// -------------------------
$btn-primary-bg: $brand-primary;
$btn-primary-bg-hl: lighten($brand-primary, 8%);

$btn-secondary-bg: $blue;
$btn-secondary-bg-hl: lighten($blue, 4%);

$btn-success-bg: lighten($green, 3%);
$btn-success-bg-hl: darken($green, 3%);

$btn-warning-bg: lighten($orange, 3%);
$btn-warning-bg-hl: darken($orange, 3%);

$btn-danger-bg: lighten($red, 3%);
$btn-danger-bg-hl: darken($red, 3%);

$btn-inverse-bg: $white;
$btn-inverse-bg-hl: darken($white, 5%);
$btn-inverse-text-color: $gray-8;
$btn-inverse-text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);

$btn-active-bg: $white;
$btn-active-text-color: $blue;

$btn-link-color: $gray-1;

$iconContainerBackground: $white;

$btn-divider-left: $gray-4;
$btn-divider-right: $gray-7;
$btn-drag-image: '../img/grab_light.svg';

$navbar-btn-gicon-brightness: brightness(0.5);

$btn-active-box-shadow: 0px 0px 4px rgba(255, 120, 10, 0.5);

// Forms
// -------------------------
$input-bg: $white;
$input-bg-disabled: $gray-5;

$input-color: $text-color;
$input-border-color: $gray-5;
$input-box-shadow: none;
$input-border-focus: $blue !default;
$input-box-shadow-focus: $blue !default;
$input-color-placeholder: $gray-4 !default;
$input-label-bg: $gray-5;
$input-label-border-color: $gray-5;
$input-color-select-arrow: $gray-1;

// Input placeholder text color
$placeholderText: $gray-2;

// Search
$search-shadow: 0 5px 30px 0 $gray-4;
$search-filter-box-bg: $gray-7;

// Typeahead
$typeahead-shadow: 0 5px 10px 0 $gray-5;
$typeahead-selected-bg: lighten($blue, 57%);
$typeahead-selected-color: $blue;

// Dropdowns
// -------------------------
$dropdownBackground: $white;
$dropdownBorder: $gray-4;
$dropdownDividerTop: $gray-6;
$dropdownDividerBottom: $white;
$dropdownDivider: $dropdownDividerTop;

$dropdownLinkColor: $dark-3;
$dropdownLinkColorHover: $link-color;
$dropdownLinkColorActive: $link-color;

$dropdownLinkBackgroundActive: $gray-6;
$dropdownLinkBackgroundHover: $gray-6;

// Horizontal forms & lists
// -------------------------
$horizontalComponentOffset: 180px;

// Navbar
// -------------------------
$navbarHeight: 52px;
$navbarBackground: $white;
$navbarBorder: 1px solid $gray-4;
$navbarShadow: 0 0 3px #c1c1c1;

$navbarLinkColor: #444;
$navbarBrandColor: $navbarLinkColor;

$navbarButtonBackground: lighten($navbarBackground, 3%);
$navbarButtonBackgroundHighlight: lighten($navbarBackground, 5%);

$navbar-button-border: none;

// Sidemenu
// -------------------------
$side-menu-bg: $white;
$side-menu-bg-mobile: $side-menu-bg;
$side-menu-item-hover-bg: darken($white, 10%);
$side-menu-item-hover-fg: $blue-highlight;
$side-menu-shadow: 5px 0px 10px -5px $gray-1;
$side-menu-link-color: darken($gray-8, 10%);

// Menu dropdowns
// -------------------------
$menu-dropdown-bg: $gray-7;
$menu-dropdown-hover-bg: $gray-6;
$menu-dropdown-shadow: 5px 5px 10px -5px $gray-1;

// Tabs
// -------------------------
$tab-border-color: $gray-5;

// Toolbar
$toolbar-bg: $input-black;

// Form states and alerts
// -------------------------
$warning-text-color: lighten($orange, 10%);
$error-text-color: lighten($red, 10%);
$success-text-color: lighten($green, 10%);
$info-text-color: $blue;

$alert-error-bg: linear-gradient(90deg, #d44939, #e04d3d);
$alert-success-bg: linear-gradient(90deg, $green, #47b274);
$alert-warning-bg: linear-gradient(90deg, #d44939, #e04d3d);
$alert-info-bg: $blue;

// popover
$popover-bg: $page-bg;
$popover-color: $text-color;
$popover-border-color: $gray-5;
$popover-header-bg: $dark-9;
$popover-shadow: 0 0 20px $white;

$popover-help-bg: $blue;
$popover-help-color: $gray-6;
$popover-error-bg: $btn-danger-bg;

// Tooltips and popovers
// -------------------------
$tooltipColor: $popover-help-color;
$tooltipBackground: $popover-help-bg;
$tooltipArrowWidth: 5px;
$tooltipArrowColor: $tooltipBackground;
$tooltipLinkColor: lighten($popover-help-color, 5%);
$graph-tooltip-bg: $gray-5;
$tooltipBackgroundError: $brand-danger;

// images
$checkboxImageUrl: '../img/checkbox_white.png';

// info box
$info-box-border-color: lighten($blue, 20%);

// footer
$footer-link-color: $gray-3;
$footer-link-hover: $dark-5;

// json-explorer
$json-explorer-default-color: $black;
$json-explorer-string-color: $green;
$json-explorer-number-color: $blue;
$json-explorer-boolean-color: $red;
$json-explorer-null-color: #855a00;
$json-explorer-undefined-color: rgb(202, 11, 105);
$json-explorer-function-color: #ff20ed;
$json-explorer-rotate-time: 100ms;
$json-explorer-toggler-opacity: 0.6;
$json-explorer-bracket-color: $blue;
$json-explorer-key-color: #00008b;
$json-explorer-url-color: $blue;

// Changelog and diff
// -------------------------
$diff-label-bg: $gray-5;
$diff-label-fg: $gray-2;

$diff-switch-bg: $gray-5;
$diff-switch-disabled: $gray-2;

$diff-arrow-color: $dark-3;
$diff-group-bg: $gray-7;

$diff-json-bg: $gray-5;
$diff-json-fg: $gray-2;

$diff-json-added: lighten(desaturate($green, 30%), 10%);
$diff-json-deleted: desaturate($red, 35%);

$diff-json-old: #5a372a;
$diff-json-new: #664e33;

$diff-json-changed-fg: $gray-6;
$diff-json-changed-num: $gray-4;
$diff-json-icon: $gray-4;

//Submenu
$variable-option-bg: $blue-light;

//Switch Slider
// -------------------------
$switch-bg: $input-bg;
$switch-slider-color: $dark-3;
$switch-slider-off-bg: $gray-1;
$switch-slider-on-bg: linear-gradient(90deg, #eb7b18, #d44a3a);
$switch-slider-shadow: 0 0 3px black;

//Checkbox
// -------------------------
$checkbox-bg: $dark-1;
$checkbox-border: 1px solid $gray-1;
$checkbox-checked-bg: linear-gradient(0deg, #eb7b18, #d44a3a);
$checkbox-color: $dark-1;

//Panel Edit
// -------------------------
$panel-editor-shadow: 0 0 20px black;
$panel-editor-side-menu-shadow: drop-shadow(0 0 10px $black);
$panel-editor-viz-item-shadow: 0 0 8px $dark-10;
$panel-editor-viz-item-border: 1px solid $dark-10;
$panel-editor-viz-item-shadow-hover: 0 0 4px $blue-light;
$panel-editor-viz-item-border-hover: 1px solid $blue-light;
$panel-editor-viz-item-bg: $input-black;
$panel-editor-tabs-line-color: #e3e3e3;

$panel-editor-viz-item-bg-hover: darken($blue-base, 46%);

$panel-options-group-border: none;
$panel-options-group-header-bg: $gray-blue;

$panel-grid-placeholder-bg: $blue-faint;
$panel-grid-placeholder-shadow: 0 0 4px $blue-shade;

// logs
$logs-color-unkown: $gray-2;

// toggle-group
$button-toggle-group-btn-active-bg: linear-gradient(90deg, #eb7b18, #d44a3a);
$button-toggle-group-btn-active-shadow: inset 0 0 4px $black;
$button-toggle-group-btn-seperator-border: 1px solid $dark-2;

$vertical-resize-handle-bg: $dark-10;
$vertical-resize-handle-dots: $gray-1;
$vertical-resize-handle-dots-hover: $gray-2;

// Calendar
$calendar-bg-days: $input-bg;
$calendar-bg-now: $dark-10;
`;
