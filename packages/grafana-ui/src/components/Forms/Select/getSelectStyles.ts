import { stylesFactory } from '../../../themes/stylesFactory';
import { css } from 'emotion';
import { GrafanaTheme } from '@grafana/data';

export const getSelectStyles = stylesFactory((theme: GrafanaTheme) => {
  const bgColor = theme.colors.white;
  const menuShadowColor = theme.colors.gray4;
  const optionBgHover = theme.colors.gray7;
  const multiValueContainerBg = theme.colors.gray6;
  const multiValueColor = theme.colors.gray25;

  return {
    menu: css`
      background: ${bgColor};
      box-shadow: 0px 4px 4px ${menuShadowColor};
      position: relative;
      min-width: 100%;
      z-index: 1;
    `,
    option: css`
      padding: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      white-space: nowrap;
      cursor: pointer;
      border-left: 2px solid transparent;
      &:hover {
        background: ${optionBgHover};
      }
    `,
    optionFocused: css`
      background: ${optionBgHover};
      border-left: ${theme.colors.orangeBase} solid 2px;
      border-top: 0;
      border-right: 0;
      border-bottom: 0;
    `,
    singleValue: css`
      color: ${theme.colors.formInputText};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      box-sizing: border-box;
      max-width: 100%;
    `,
    valueContainer: css`
      align-items: center;
      display: flex;
      position: relative;
      box-sizing: border-box;
      flex: 1 1 0%;
      outline: none;
      overflow: hidden;
    `,
    valueContainerMulti: css`
      flex-wrap: wrap;
    `,
    loadingMessage: css`
      padding: ${theme.spacing.sm};
      text-align: center;
      width: 100%;
    `,
    multiValueContainer: css`
      display: flex;
      align-items: center;
      line-height: 1;
      background: ${multiValueContainerBg};
      border-radius: ${theme.border.radius.sm};
      padding: ${theme.spacing.xs} ${theme.spacing.xxs} ${theme.spacing.xs} ${theme.spacing.sm};
      margin: ${theme.spacing.xxs} ${theme.spacing.xs} ${theme.spacing.xxs} 0;
      color: ${multiValueColor};
    `,
    multiValueRemove: css`
      margin-left: ${theme.spacing.xs};
    `,
  };
});
