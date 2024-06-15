import { Button as MuiButton, ButtonProps, useTheme } from '@mui/material';
import { Text } from '../Text';

export const Button = (props: ButtonProps) => {
  const theme = useTheme();
  return (
    <MuiButton
      {...props}
      sx={{ backgroundColor: theme.colors.button.blue, ...props.sx }}>
      <Text variant={'font3'} color={theme.colors.typography.white}>
        {props.children}
      </Text>
    </MuiButton>
  );
};
