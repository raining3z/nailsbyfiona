'use client';

import { ReactNode } from 'react';
import { styled } from '@pigment-css/react';
import { FaTimes } from 'react-icons/fa';

interface ModalProps {
  children: ReactNode;
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}

const Backdrop = styled.div(() => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: 'rgba(0, 0, 0, 0.5)',
  zIndex: 999,
}));

const ModalWrapper = styled.div(({ theme }) => ({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: theme.colors.backgroundPrimary,
  padding: theme.spacing.xl,
  borderRadius: theme.spacing.md,
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
  zIndex: 1000,
  minWidth: '300px',
  maxWidth: '800px',
}));

const CloseButton = styled(FaTimes)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing.md,
  right: theme.spacing.md,
  border: 'none',
  background: 'transparent',
  fontSize: '24px',
  cursor: 'pointer',
}));

export default function Modal({
  children,
  isModalOpen,
  setIsModalOpen,
}: ModalProps) {
  if (!isModalOpen) return null;

  return (
    <>
      <Backdrop onClick={() => setIsModalOpen(false)} />
      <ModalWrapper>
        <CloseButton onClick={() => setIsModalOpen(false)} />
        {children}
      </ModalWrapper>
    </>
  );
}
