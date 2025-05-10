'use client';

import { styled } from '@pigment-css/react';
import Link from 'next/link';
import { useState } from 'react';
import { FaFacebookF, FaEnvelope } from 'react-icons/fa';
import Button from './Button';

const FooterContainer = styled.footer(({ theme }) => ({
  backgroundColor: theme.colors.backgroundPrimary,
  padding: theme.spacing.xxl,
  fontFamily: 'sans-serif',
  borderTop: `1px solid ${theme.colors.border}`,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.lg,

  [`@media ${theme.media.mobile}`]: {
    padding: theme.spacing.lg,
    gap: theme.spacing.md,
  },
}));

const FooterGrid = styled.div(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 2fr 1fr',
  alignItems: 'center',
  gap: theme.spacing.lg,

  [`@media ${theme.media.mobile}`]: {
    gridTemplateColumns: '1fr',
    textAlign: 'center',
  },
}));

const Logo = styled.div(({ theme }) => ({
  fontWeight: 700,
  fontSize: theme.fontSizes.md,
  color: theme.colors.heading,
}));

const SignupForm = styled.form(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing.sm,

  input: {
    padding: `${theme.spacing.sm} ${theme.spacing.md}`,
    border: `1px solid ${theme.colors.border}`,
    borderRadius: theme.borderRadius.sm,
    fontSize: theme.fontSizes.smd,
    minWidth: '180px',
  },

  [`@media ${theme.media.mobile}`]: {
    flexDirection: 'column',
    alignItems: 'center',

    input: {
      width: '100%',
    },
    button: {
      width: '100%',
    },
  },
}));

const RightSection = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: theme.spacing.sm,

  a: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: theme.colors.text,
    textDecoration: 'none',
    fontWeight: 500,

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  span: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },

  [`@media ${theme.media.mobile}`]: {
    alignItems: 'center',
  },
}));

const Copy = styled.p(({ theme }) => ({
  fontSize: theme.fontSizes.xs,
  color: theme.colors.mutedText,
  textAlign: 'center',
  marginTop: theme.spacing.lg,
}));

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    alert(`Signed up with: ${email}`);
    setEmail('');
  };

  return (
    <FooterContainer>
      <FooterGrid>
        <Logo>Hillsdale Farm West</Logo>

        <SignupForm onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit">Sign Up</Button>
        </SignupForm>

        <RightSection>
          <Link href="/contact">
            <FaEnvelope />
            Contact
          </Link>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
            Facebook
          </a>
        </RightSection>
      </FooterGrid>

      <Copy>© {new Date().getFullYear()} hillsdalefarmwest.com</Copy>
    </FooterContainer>
  );
}
