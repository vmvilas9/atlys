import React from 'react';
import { Logo } from '../../lib/icons';
import { Box, LoginRegisterView } from '../../lib/components';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();

  const onSubmitClick = () => {
    navigate('/home');
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <img src={Logo} alt={'logo'} />
      <Box
        sx={{
          width: '32%',
          alignSelf: 'center',
          justifySelf: 'center',
          borderRadius: '8px',
          overflow: 'hidden',
          marginTop: '40px',
        }}>
        <LoginRegisterView onSubmitClick={onSubmitClick} />
      </Box>
    </div>
  );
};
