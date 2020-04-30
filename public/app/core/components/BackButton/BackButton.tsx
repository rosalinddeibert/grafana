import React, { ButtonHTMLAttributes } from 'react';
import { css } from 'emotion';
import { GrafanaTheme } from '@grafana/data';
import { stylesFactory, useTheme, Tooltip } from '@grafana/ui';

export type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const BackButton: React.FC<Props> = props => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <Tooltip content="Go back (Esc)" placement="bottom">
      <button className={'back-button ' + styles.wrapper} {...props}>
        <i className="gicon gicon-arrow-left" />
      </button>
    </Tooltip>
  );
};

BackButton.displayName = 'BackButton';

const getStyles = stylesFactory((theme: GrafanaTheme) => {
  return {
    wrapper: css`
      background: transparent;
      border: none;
      padding: 0;
      margin: 0;
      outline: none;
      box-shadow: none;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      .gicon {
        font-size: 26px;
      }
    `,
  };
});
