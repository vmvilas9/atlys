import { Box, ButtonBase, Text } from '../../../../lib/components';
import { useTheme } from '@mui/material';
import { PostProps } from '../../types';
import { CommentsIcons, DotsHorizontal } from '../../../../lib/icons';

export const Post = ({
  post,
  onClick,
}: {
  post: PostProps;
  onClick: () => void;
}) => {
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
          marginTop: '15px',
        }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <img src={post.image} alt={'user'} width={'44px'} height={'44px'} />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginLeft: '20px',
              }}>
              <Text variant={'font3'} color={theme.colors.typography.grey3}>
                {post.user_name}
              </Text>
              <Text
                variant={'font1'}
                color={theme.colors.typography.grey2}
                textAlign={'start'}
                marginTop={'5px'}>
                {post.time} {post.edited ? ' • Edited' : ''}
              </Text>
            </Box>
          </Box>
          <img
            src={DotsHorizontal}
            alt={'menu'}
            width={'20px'}
            height={'20px'}
          />
        </Box>
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
            <Text>👋</Text>
          </Box>
          <Text
            width={'80%'}
            variant={'font5'}
            marginLeft={'20px'}
            textAlign={'start'}
            color={theme.colors.typography.grey2}>
            {post.post}
          </Text>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            marginTop: '20px',
          }}>
          <img
            src={CommentsIcons}
            alt={'comments'}
            width={'20px'}
            height={'20px'}
          />
          <Text
            variant={'font1'}
            color={theme.colors.typography.grey2}
            marginLeft={'10px'}>
            {post.commentsCount} comments
          </Text>
        </Box>
      </Box>
    </ButtonBase>
  );
};
