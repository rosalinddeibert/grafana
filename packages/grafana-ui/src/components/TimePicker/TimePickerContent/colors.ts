import { GrafanaTheme } from '@grafana/data';
import { selectThemeVariant } from '../../../themes/selectThemeVariant';

export const getThemeColors = (theme: GrafanaTheme) => {
  return {
    border: selectThemeVariant(
      {
        light: theme.colors.gray4,
        dark: theme.colors.gray2,
      },
      theme.type
    ),
    background: selectThemeVariant(
      {
        light: theme.background.dropdown,
        dark: theme.colors.gray9,
      },
      theme.type
    ),
    shadow: selectThemeVariant(
      {
        light: theme.colors.gray85,
        dark: theme.colors.gray1,
      },
      theme.type
    ),
    formBackground: selectThemeVariant(
      {
        light: theme.colors.gray98,
        dark: theme.colors.white,
      },
      theme.type
    ),
  };
};
