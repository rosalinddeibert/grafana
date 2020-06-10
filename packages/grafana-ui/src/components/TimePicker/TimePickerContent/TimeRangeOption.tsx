import React, { memo } from 'react';
import { css } from 'emotion';
import { GrafanaTheme, TimeOption } from '@grafana/data';
import { useTheme, stylesFactory } from '../../../themes';

const getStyles = stylesFactory((theme: GrafanaTheme) => {
  return {
    container: css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 7px 9px 7px 9px;
      border-left: 2px solid rgba(255, 255, 255, 0);

      &:hover {
        background: ${theme.colors.gray6};
        border-left: ${theme.colors.orangeBase} solid 2px;
        border-top: 0;
        border-right: 0;
        border-bottom: 0;
        cursor: pointer;
      }
    `,
  };
});

interface Props {
  value: TimeOption;
  selected?: boolean;
  onSelect: (option: TimeOption) => void;
}

export const TimeRangeOption = memo<Props>(({ value, onSelect, selected = false }) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <div className={styles.container} onClick={() => onSelect(value)} tabIndex={-1}>
      <span>{value.display}</span>
      {selected ? <i className="fa fa-check" /> : null}
    </div>
  );
});
