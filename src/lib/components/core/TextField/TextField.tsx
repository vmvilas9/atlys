import { TextField as MuiTextField, TextFieldProps } from '@mui/material';
import React from 'react';

const SanitizedTextField: React.FC<TextFieldProps> = ({
  value,
  InputProps,
  ...props
}) => {
  return (
    <MuiTextField
      {...props}
      value={value}
      InputProps={
        InputProps
          ? {
              ...InputProps,
              value: InputProps?.value ? InputProps.value : value,
            }
          : {}
      }
    />
  );
};

export { SanitizedTextField as TextField };
