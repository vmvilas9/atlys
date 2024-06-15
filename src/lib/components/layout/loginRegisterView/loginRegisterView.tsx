import React, { useState } from 'react';
import { Box } from '@mui/material';
import { LoginView } from '../loginView';
import { RegisterView } from '../registerView';

type LoginRegisterViewProps = {
  onSubmitClick: () => void;
  showLogin?: boolean;
};

export const LoginRegisterView = ({
  onSubmitClick,
  showLogin = true,
}: LoginRegisterViewProps) => {
  const [loginView, setLoginView] = useState<boolean>(showLogin);

  const onRegisterClick = () => {
    setLoginView(false);
  };

  const onLoginClick = () => {
    setLoginView(true);
  };

  return (
    <Box>
      {loginView ? (
        <LoginView
          onRegisterClick={onRegisterClick}
          onSubmitClick={onSubmitClick}
        />
      ) : (
        <RegisterView
          onLoginClick={onLoginClick}
          onSubmitClick={onSubmitClick}
        />
      )}
    </Box>
  );
};
