import {
  Box,
  ButtonBase,
  LoginRegisterView,
  Modal,
} from '../../../../lib/components';
import { theme } from '../../../../lib/theme/theme';
import { CrossIcon } from '../../../../lib/icons';
import React from 'react';

type AuthModalProps = {
  isModalOpen: boolean;
  onSubmitClick: () => void;
  onCloseClick: () => void;
};

export const AuthModal = ({
  isModalOpen,
  onSubmitClick,
  onCloseClick,
}: AuthModalProps) => {
  return (
    <Modal
      open={isModalOpen}
      sx={{
        width: '32%',
        alignSelf: 'center',
        justifySelf: 'center',
        borderRadius: '8px',
        overflow: 'hidden',
      }}>
      <Box sx={{ position: 'relative' }}>
        <LoginRegisterView onSubmitClick={onSubmitClick} showLogin={false} />
        <ButtonBase
          onClick={onCloseClick}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: 15,
            right: 15,
            borderRadius: '32px',
            width: '32px',
            height: '32px',
            backgroundColor: theme.colors.background.black2,
          }}>
          <img src={CrossIcon} alt={'close'} width={'16px'} height={'16px'} />
        </ButtonBase>
      </Box>
    </Modal>
  );
};
