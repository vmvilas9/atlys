import { Box, Button, ButtonBase, Text, TextField } from '../../core';
import { InputAdornment, useTheme } from '@mui/material';
import { EyeIcon } from '../../../icons';
import React, { useState } from 'react';

type LoginViewProps = {
  onRegisterClick: () => void;
  onSubmitClick: () => void;
};

export const LoginView = ({
  onRegisterClick,
  onSubmitClick,
}: LoginViewProps) => {
  const theme = useTheme();
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  return (
    <Box
      style={{
        backgroundColor: theme.colors.background.grey,
        background: 'linear-gradient(to bottom right, #969696, #343434) 30',
        borderImage: 'linear-gradient(to bottom right, #969696, #343434) 30',
        borderStyle: 'solid',
        borderWidth: '2px',
        borderRadius: '8px',
        padding: '30px',
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}>
        <Text color={theme.colors.typography.grey} variant={'font1'}>
          WELCOME BACK
        </Text>
        <Text
          color={theme.colors.typography.white}
          variant={'font2'}
          marginTop={'10px'}>
          Login into your account
        </Text>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            alignItems: 'flex-start',
            marginTop: '30px',
          }}>
          <Text
            color={theme.colors.typography.grey3}
            variant={'font1'}
            marginTop={'20px'}>
            Email or Username
          </Text>
          <TextField
            sx={{
              width: '100%',
              borderWidth: '1.5px',
              borderRadius: '4px',
              marginTop: '10px',
            }}
            InputProps={{
              style: { color: theme.colors.typography.grey3 },
            }}
            placeholder={'Enter your email or username'}
          />
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
            marginTop={'20px'}>
            <Text color={theme.colors.typography.grey3} variant={'font1'}>
              Password
            </Text>
            <Text color={theme.colors.typography.grey3} variant={'font1'}>
              Forgot password?
            </Text>
          </Box>
          <TextField
            sx={{
              width: '100%',
              borderRadius: '4px',
              marginTop: '10px',
              borderColor: theme.colors.border.grey,
              color: theme.colors.typography.grey3,
            }}
            type={passwordVisible ? 'text' : 'password'}
            InputProps={{
              style: { color: theme.colors.typography.grey3 },
              endAdornment: (
                <InputAdornment position="end">
                  <ButtonBase
                    onClick={() =>
                      setPasswordVisible((prevState) => !prevState)
                    }>
                    <img
                      src={EyeIcon}
                      alt={'show password'}
                      width={'30px'}
                      height={'30px'}
                    />
                  </ButtonBase>
                </InputAdornment>
              ),
            }}
            placeholder={'Enter your password'}
          />
          <Button
            onClick={onSubmitClick}
            sx={{
              width: '100%',
              height: '45px',
              marginTop: '30px',
            }}>
            Login now
          </Button>
          <ButtonBase
            sx={{ color: theme.colors.typography.grey3 }}
            onClick={onRegisterClick}>
            <Text
              marginTop={'20px'}
              variant={'font1'}
              color={theme.colors.typography.grey2}>
              Not registered yet?{' '}
              <span style={{ color: theme.colors.typography.grey3 }}>
                {'Register →'}
              </span>
            </Text>
          </ButtonBase>
        </Box>
      </Box>
    </Box>
  );
};
