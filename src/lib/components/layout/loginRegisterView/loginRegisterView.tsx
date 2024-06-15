import React, { useState } from 'react';
import { Box } from '@mui/material';
import { LoginView } from '../loginView';
import { RegisterView } from '../registerView';

type LoginRegisterViewProps = {
  onSubmitClick: () => void;
};

export const LoginRegisterView = ({
  onSubmitClick,
}: LoginRegisterViewProps) => {
  const [loginView, setLoginView] = useState<boolean>(true);

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
