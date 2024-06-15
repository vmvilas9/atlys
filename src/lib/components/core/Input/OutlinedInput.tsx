import React from 'react';
import {
  OutlinedInput as MuiOutlinedInput,
  OutlinedInputProps,
} from '@mui/material';

interface SanitizedOutlinedInputProps extends OutlinedInputProps {
  value?: string | number | null;
  hideSteps?: boolean;
}

const SanitizedOutlinedInput: React.FC<SanitizedOutlinedInputProps> = ({
  value,
  hideSteps,
  ...props
}) => {
  return (
    <MuiOutlinedInput
      {...props}
      sx={{
        ...props.sx,
        ...(hideSteps && {
          '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button':
            {
              display: 'none',
            },
          '& input[type=number]': {
            MozAppearance: 'textfield',
          },
        }),
      }}
      value={value}
    />
  );
};

export { SanitizedOutlinedInput as OutlinedInput };
