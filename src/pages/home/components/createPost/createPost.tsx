import {
  Box,
  Button,
  ButtonBase,
  Text,
  TextField,
} from '../../../../lib/components';
import { useTheme } from '@mui/material';

type CreatePostProps = {
  onClick: () => void;
};

export const CreatePost = ({ onClick }: CreatePostProps) => {
  const theme = useTheme();

  return (
    <ButtonBase onClick={onClick}>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: theme.colors.background.grey,
          borderWidth: '2px',
          borderColor: theme.colors.border.grey2,
          borderRadius: '8px',
          borderStyle: 'solid',
          padding: '30px',
        }}>
        <Text variant={'font4'} color={theme.colors.typography.grey3}>
          Create post
        </Text>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '20px',
            backgroundColor: theme.colors.background.black,
            marginTop: '20px',
            borderRadius: '8px',
          }}>
          <Box
            sx={{
              backgroundColor: theme.colors.background.grey,
              width: '48px',
              height: '48px',
              borderRadius: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>💬</Text>
          </Box>
          <TextField
            variant={'standard'}
            placeholder={'How are you feeling today?'}
            InputProps={{
              disableUnderline: true,
              style: { color: theme.colors.typography.grey2 },
            }}
            sx={{ marginLeft: '20px', width: '100%' }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginTop: '20px',
          }}>
          <Button sx={{ width: '100px', height: '45px' }}>Post</Button>
        </Box>
      </Box>
    </ButtonBase>
  );
};
