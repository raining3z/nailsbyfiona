'use client';

import { styled } from '@pigment-css/react';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'ghost'
    | 'blackLink'
    | 'alert'
    | 'success'
    | 'neutral'
    | 'disabled';
}

const BaseButton = styled('button')<ButtonProps>(({ theme }) => ({
  padding: `${theme.spacing.md} ${theme.spacing.lg}`,
  fontSize: theme.fontSizes.smd,
  fontWeight: 500,
  borderRadius: theme.borderRadius.md,
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  variants: [
    {
      props: { variant: 'primary' },
      style: {
        background: theme.button.primary.background,
        color: theme.button.primary.color,
        '&:hover': {
          background: theme.button.primary.hover,
        },
      },
    },
    {
      props: { variant: 'secondary' },
      style: {
        background: theme.button.secondary.background,
        color: theme.button.secondary.color,
        '&:hover': {
          background: theme.button.secondary.hover,
        },
      },
    },
    {
      props: { variant: 'tertiary' },
      style: {
        background: theme.button.tertiary.background,
        color: theme.button.tertiary.color,
        border: theme.button.tertiary.border,
        '&:hover': {
          background: theme.button.tertiary.hover,
        },
      },
    },
    {
      props: { variant: 'ghost' },
      style: {
        background: theme.button.ghost.background,
        color: theme.button.ghost.color,
        border: theme.button.ghost.border,
        '&:hover': {
          background: theme.button.ghost.hover,
        },
      },
    },
    {
      props: { variant: 'blackLink' },
      style: {
        background: theme.button.blackLink.background,
        color: theme.button.blackLink.color,
        '&:hover': {
          background: theme.button.blackLink.hover,
        },
      },
    },
    {
      props: { variant: 'alert' },
      style: {
        background: theme.button.alert.background,
        color: theme.button.alert.color,
        '&:hover': {
          background: theme.button.alert.hover,
        },
      },
    },
    {
      props: { variant: 'success' },
      style: {
        background: theme.button.success.background,
        color: theme.button.success.color,
        '&:hover': {
          background: theme.button.success.hover,
        },
      },
    },
    {
      props: { variant: 'neutral' },
      style: {
        background: theme.button.neutral.background,
        color: theme.button.neutral.color,
        '&:hover': {
          background: theme.button.neutral.hover,
        },
      },
    },
    {
      props: { variant: 'disabled' },
      style: {
        background: theme.button.disabled.background,
        color: theme.button.disabled.color,
        cursor: 'not-allowed',
        pointerEvents: 'none',
      },
    },
  ],
}));

/*
const variantStyles = {
      primary: {
        background: theme.button.primary.background,
        color: theme.button.primary.color,
        '&:hover': {
          background: theme.button.primary.hover,
        },
      },
      secondary: {
        background: theme.button.secondary.background,
        color: theme.button.secondary.color,
        '&:hover': {
          background: theme.button.secondary.hover,
        },
      },
      tertiary: {
        background: theme.button.tertiary.background,
        color: theme.button.tertiary.color,
        border: theme.button.tertiary.border,
        '&:hover': {
          background: theme.button.tertiary.hover,
        },
      },
      ghost: {
        background: theme.button.ghost.background,
        color: theme.button.ghost.color,
        border: theme.button.ghost.border,
        '&:hover': {
          background: theme.button.ghost.hover,
        },
      },
      blackLink: {
        background: theme.button.blackLink.background,
        color: theme.button.blackLink.color,
        '&:hover': {
          background: theme.button.blackLink.hover,
        },
      },
      alert: {
        background: theme.button.alert.background,
        color: theme.button.alert.color,
        '&:hover': {
          background: theme.button.alert.hover,
        },
      },
      success: {
        background: theme.button.success.background,
        color: theme.button.success.color,
        '&:hover': {
          background: theme.button.success.hover,
        },
      },
      neutral: {
        background: theme.button.neutral.background,
        color: theme.button.neutral.color,
        '&:hover': {
          background: theme.button.neutral.hover,
        },
      },
      disabled: {
        background: theme.button.disabled.background,
        color: theme.button.disabled.color,
        cursor: 'not-allowed',
        pointerEvents: 'none',
      },
    };
*/

export default function Button({ variant = 'primary', ...props }: ButtonProps) {
  return <BaseButton variant={variant} {...props} />;
}
