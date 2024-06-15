import { Box, Text } from '../../../../lib/components';
import { useTheme } from '@mui/material';
import { mockUser } from '../../mockUser';

export const Header = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '50px',
      }}>
      <Text variant={'font6'} color={theme.colors.typography.grey3}>
        Hello {mockUser.name}
      </Text>
      <Text
        width={'60%'}
        variant={'font5'}
        color={theme.colors.typography.grey2}
        marginTop={'20px'}>
        How are you doing today? Would you like to share something with the
        community 🤗
      </Text>
    </Box>
  );
};
