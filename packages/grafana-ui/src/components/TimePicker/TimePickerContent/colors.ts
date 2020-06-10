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
    background: theme.background.dropdown,
    shadow: theme.colors.gray8,
    formBackground: theme.colors.gray98,
  };
};
