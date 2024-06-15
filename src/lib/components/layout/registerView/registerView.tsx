import { Box, Button, ButtonBase, Text, TextField } from '../../core';
import { InputAdornment, useTheme } from '@mui/material';
import { EyeIcon } from '../../../icons';
import React, { useState } from 'react';

type RegisterViewProps = {
  onLoginClick: () => void;
  onSubmitClick: () => void;
};

export const RegisterView = ({
  onLoginClick,
  onSubmitClick,
}: RegisterViewProps) => {
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
          SIGN UP
        </Text>
        <Text
          color={theme.colors.typography.white}
          variant={'font2'}
          marginTop={'10px'}>
          Create an account to continue
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
            marginTop={'10px'}>
            Email
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
            placeholder={'Enter your email'}
          />
          <Text
            color={theme.colors.typography.grey3}
            variant={'font1'}
            marginTop={'20px'}>
            Username
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
            placeholder={'Choose your preferred username'}
          />
          <Text
            color={theme.colors.typography.grey3}
            variant={'font1'}
            marginTop={'20px'}>
            Password
          </Text>
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
            placeholder={'Choose your strong password'}
          />
          <Button
            onClick={onSubmitClick}
            sx={{
              width: '100%',
              height: '45px',
              marginTop: '30px',
            }}>
            Continue
          </Button>
          <ButtonBase
            sx={{ color: theme.colors.typography.grey3 }}
            onClick={onLoginClick}>
            <Text
              marginTop={'20px'}
              variant={'font1'}
              color={theme.colors.typography.grey2}>
              Already have an account?{' '}
              <span style={{ color: theme.colors.typography.grey3 }}>
                {'Login →'}
              </span>
            </Text>
          </ButtonBase>
        </Box>
      </Box>
    </Box>
  );
};
