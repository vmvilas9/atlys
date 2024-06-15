import {
  ButtonBase as MuiButtonBase,
  ButtonBaseProps as MuiButtonBaseProps,
} from '@mui/material';
import React from 'react';

interface BaseButtonProps extends MuiButtonBaseProps {
  disabledCursor?: boolean;
  href?: string;
  target?: string;
}

export const ButtonBase = ({
  children,
  disabledCursor = false,
  sx = {},
  ...props
}: BaseButtonProps) => {
  return (
    <MuiButtonBase {...props} sx={sx}>
      {children}
    </MuiButtonBase>
  );
};
