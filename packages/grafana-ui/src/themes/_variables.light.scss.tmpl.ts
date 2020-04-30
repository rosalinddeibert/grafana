/* eslint-disable max-len */

import { GrafanaTheme } from '@grafana/data';
import { renderGeneratedFileBanner } from '../utils/generatedFileBanner';

export const lightThemeVarsTemplate = (theme: GrafanaTheme) =>
  `${renderGeneratedFileBanner('grafana-ui/src/themes/light.ts', 'grafana-ui/src/themes/_variable.light.scss.tmpl.ts')}
// Global values
// --------------------------------------------------

$theme-name: light;

// New Colors
// -------------------------
$blue: ${theme.colors.blueBase};
$blue-faint: ${theme.colors.blueFaint};
$blue-light: ${theme.colors.blueLight};
$blue-shade: ${theme.colors.blueShade};
$red: ${theme.colors.redBase};
$red-shade: ${theme.colors.redShade};
$green: ${theme.colors.greenBase};
$green-shade: ${theme.colors.greenShade};
$orange: ${theme.colors.orangeBase};
$orange-shade: ${theme.colors.orangeShade};

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
$gray-9: ${theme.colors.gray9};

$white: ${theme.colors.white};

// Accent colors
// -------------------------
$yellow: ${theme.colors.yellow};
$purple: ${theme.colors.purple};
$variable: ${theme.colors.blueBase};

$brand-primary: $orange;
$brand-primary-shade: $orange-shade;
$brand-success: ${theme.colors.brandSuccess};
$brand-warning: ${theme.colors.brandWarning};
$brand-danger: ${theme.colors.brandDanger};

$query-red: ${theme.colors.queryRed};
$query-green: ${theme.colors.queryGreen};
$query-purple: ${theme.colors.queryPurple};
$query-orange: ${theme.colors.orangeBase};
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

$text-shadow-faint: none;

// gradients
$brand-gradient-horizontal: linear-gradient(to right, #f05a28 30%, #fbca0a 99%);
$brand-gradient-vertical: linear-gradient(#f05a28 30%, #fbca0a 99%);
$page-bg: $gray-7;

// Links
// -------------------------
$link-color: ${theme.colors.link};
$link-color-disabled: ${theme.colors.linkDisabled};
$link-hover-color: ${theme.colors.linkHover};
$external-link-color: ${theme.colors.linkExternal};

// Typography
// -------------------------
$headings-color: ${theme.colors.headingColor};
$abbr-border-color: $gray-2 !default;
$text-muted: $text-color-weak;

$hr-border-color: $gray-4 !default;

// Panel
// -------------------------
$panel-bg: ${theme.colors.panelBg};
$panel-border: none;
$panel-header-hover-bg: $gray-6;
$panel-corner: $gray-4;

// Page header
$page-header-bg: transparent;
$page-header-shadow: inset 0px -3px 10px $gray-6;
$page-header-border-color: $gray-4;

$divider-border-color: $gray-2;

// Graphite Target Editor
$tight-form-func-bg: $gray-5;
$tight-form-func-highlight-bg: $gray-6;

$modal-backdrop-bg: $body-bg;
$code-tag-bg: $gray-6;
$code-tag-border: $gray-4;

// cards
$card-background: $gray-7;
$card-background-hover: darken($gray-7, 10%);
$card-shadow: -1px -1px 0 0 hsla(0, 0%, 100%, 0.1), 1px 1px 0 0 rgba(0, 0, 0, 0.1);

// Lists
$list-item-bg: darken($white, 10%);
$list-item-hover-bg: darken($white, 5%);
$list-item-link-color: darken($gray-8, 20%);
$list-item-shadow: $card-shadow;

$empty-list-cta-bg: $gray-8;

// Scrollbars
$scrollbarBackground: $gray-4;
$scrollbarBackground2: $gray-4;
$scrollbarBorder: $gray-7;

// Tables
// -------------------------
$table-bg-accent: darken($gray-7, 10%); // for striping
$table-bg-hover: $gray-7;
$table-bg-active: $table-bg-hover !default;
$table-border: $gray-3; // table and cell border

$table-bg-odd: darken($gray-7, 10%);

// Buttons
// -------------------------
$btn-primary-bg: $brand-primary-shade;
$btn-primary-bg-hl: $brand-primary;

$btn-secondary-bg: $blue;
$btn-secondary-bg-hl: $blue-shade;

$btn-success-bg: $green;
$btn-success-bg-hl: $green-shade;

$btn-danger-bg: $red;
$btn-danger-bg-hl: $red-shade;

$btn-inverse-bg: $white;
$btn-inverse-bg-hl: darken($white, 5%);
$btn-inverse-text-color: $gray-8;
$btn-inverse-text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);

$btn-active-text-color: $orange;

$btn-link-color: $gray-1;

$iconContainerBackground: $white;

$btn-divider-left: $gray-4;
$btn-divider-right: $gray-7;

$btn-drag-image: '../img/grab_light.svg';

$navbar-btn-gicon-brightness: brightness(1.5);

$btn-active-box-shadow: 0px 0px 4px rgba(234, 161, 51, 0.6);

// Forms
// -------------------------
$input-bg: $white;
$input-bg-disabled: $gray-5;

$input-color: $text-color;
$input-border-color: $gray-5;
$input-border-focus: $orange solid 1px !default;
$input-box-shadow: none;
$input-box-shadow-focus: 0 0 4px $orange !default;
$input-box-shadow-bottom-focus: 0px 4px 4px -4px $orange;
$input-color-placeholder: $gray-4 !default;
$input-label-bg: $white;
$input-label-border-color: $gray-5;
$input-color-select-arrow: $gray-1;

// Input placeholder text color
$placeholderText: $gray-2;

// search
$search-shadow: 0 1px 5px 0 $gray-5;
$search-filter-box-bg: $gray-7;

// Typeahead
$typeahead-shadow: 0 5px 10px 0 $gray-5;
$typeahead-selected-bg: $gray-6;
$typeahead-selected-color: $yellow;

// Dropdowns
// -------------------------
$dropdownBackground: $white;
$dropdownBorder: $gray-4;
$dropdownDividerTop: $gray-6;
$dropdownDividerBottom: $white;

$dropdownLinkColor: $dark-2;
$dropdownLinkColorHover: $link-color;
$dropdownLinkColorActive: $link-color;

$dropdownLinkBackgroundHover: $gray-6;

// Horizontal forms & lists
// -------------------------
$horizontalComponentOffset: 180px;

// Navbar
// -------------------------
$navbarHeight: 52px;

$navbarBackground: $white;
$navbarBorder: 1px solid $gray-5;
$navbarRoundedBorder: 4px;
$navbarShadow: $gray-9 2px 2px 4px;

$navbarButtonBackground: lighten($navbarBackground, 3%);
$navbarButtonBackgroundHighlight: lighten($navbarBackground, 5%);

$navbar-button-border: none;

// Sidemenu
// -------------------------
$side-menu-bg: $white;
$side-menu-bg-mobile: $white; //$gray-6;
$side-menu-item-hover-bg: darken($white, 10%);
$side-menu-item-hover-fg: $orange;
$side-menu-shadow: 5px 0px 10px -5px $gray-1;
$side-menu-link-color: darken($gray-8, 10%);

// Menu dropdowns
// -------------------------
$menu-dropdown-bg: $side-menu-item-hover-bg;
$menu-dropdown-hover-bg: $gray-6;
$menu-dropdown-shadow: 5px 5px 10px -5px $gray-1;
$menu-dropdown-text: $gray-1;

// Tabs
// -------------------------
$tab-border-color: $gray-5;

// Toolbar
$toolbar-bg: white;

// Form states and alerts
// -------------------------
$warning-text-color: lighten($orange, 10%);
$error-text-color: $red-shade;
$success-text-color: lighten($green, 10%);

$alert-error-bg: linear-gradient(90deg, $red, $red-shade);
$alert-success-bg: linear-gradient(90deg, $green, $green-shade);
$alert-warning-bg: linear-gradient(90deg, $red, $red-shade);
$alert-info-bg: linear-gradient(100deg, $blue, $blue-shade);

// popover
$popover-bg: $page-bg;
$popover-color: $text-color;
$popover-border-color: $gray-5;
$popover-header-bg: $gray-5;
$popover-shadow: 0 0 20px $white;

$popover-help-bg: $btn-secondary-bg;
$popover-help-color: $gray-6;

$popover-error-bg: $btn-danger-bg;

// Tooltips and popovers
// -------------------------
$tooltipColor: $popover-help-color;
$tooltipArrowWidth: 5px;
$tooltipLinkColor: lighten($popover-help-color, 5%);
$graph-tooltip-bg: $gray-5;

$tooltipBackground: $gray-1;
$tooltipColor: $gray-7;
$tooltipArrowColor: $tooltipBackground; // Used by Angular tooltip
$tooltipBackgroundError: $brand-danger;

// images
$checkboxImageUrl: '../img/checkbox_white.png';

// info box
$info-box-border-color: $blue;

// footer
$footer-link-color: $gray-3;
$footer-link-hover: $dark-2;

// json explorer
$json-explorer-default-color: black;
$json-explorer-string-color: green;
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
$diff-label-bg: $gray-7;
$diff-label-fg: $gray-2;

$diff-arrow-color: $dark-2;
$diff-group-bg: $gray-6;

$diff-json-bg: $gray-6;
$diff-json-fg: $gray-1;

$diff-json-added: $blue-shade;
$diff-json-deleted: $red-shade;

$diff-json-old: #5a372a;
$diff-json-new: #664e33;

$diff-json-changed-fg: $gray-7;
$diff-json-changed-num: $gray-4;

$diff-json-icon: $gray-4;

//Submenu
$variable-option-bg: $dropdownLinkBackgroundHover;

//Switch Slider
// -------------------------
$switch-bg: $white;
$switch-slider-color: $gray-7;
$switch-slider-off-bg: $gray-5;
$switch-slider-on-bg: linear-gradient(90deg, #ff9830, #e55400);
$switch-slider-shadow: 0 0 3px $dark-2;

//Checkbox
// -------------------------
$checkbox-bg: $gray-6;
$checkbox-border: 1px solid $gray-3;
$checkbox-checked-bg: linear-gradient(0deg, #ff9830, #e55400);
$checkbox-color: $gray-7;

//Panel Edit
// -------------------------
$panel-editor-shadow: 0px 0px 8px $gray-3;
$panel-editor-side-menu-shadow: drop-shadow(0 0 2px $gray-3);
$panel-editor-viz-item-shadow: 0 0 4px $gray-3;
$panel-editor-viz-item-border: 1px solid $gray-3;
$panel-editor-viz-item-shadow-hover: 0 0 4px $blue-light;
$panel-editor-viz-item-border-hover: 1px solid $blue-light;
$panel-editor-viz-item-bg: $white;
$panel-editor-tabs-line-color: $dark-2;

$panel-editor-viz-item-bg-hover: lighten($blue, 45%);

$panel-options-group-border: none;
$panel-options-group-header-bg: $gray-5;

$panel-grid-placeholder-bg: $blue-faint;
$panel-grid-placeholder-shadow: 0 0 4px $blue-light;

// logs
$logs-color-unkown: $gray-5;

// toggle-group
$button-toggle-group-btn-active-bg: $brand-primary;
$button-toggle-group-btn-active-shadow: inset 0 0 4px $white;
$button-toggle-group-btn-seperator-border: 1px solid $gray-6;

$vertical-resize-handle-bg: $gray-4;
$vertical-resize-handle-dots: $gray-3;
$vertical-resize-handle-dots-hover: $gray-2;

// Calendar
$calendar-bg-days: $white;
$calendar-bg-now: $gray-6;
`;
