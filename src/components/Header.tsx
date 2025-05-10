'use client';
import { styled } from '@pigment-css/react';
import Link from 'next/link';
import Image from 'next/image';

const HeaderContainer = styled.header(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing.md,
  backgroundColor: theme.colors.backgroundPrimary,
  borderBottom: `1px solid ${theme.colors.border}`,
  gap: theme.spacing.md,

  [`@media ${theme.media.mobile}`]: {
    flexDirection: 'column',
    textAlign: 'center',
  },
}));

const LogoSection = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing.sm,

  [`@media ${theme.media.mobile}`]: {
    justifyContent: 'center',
  },
}));

const LogoImage = styled(Image)(({ theme }) => ({
  borderRadius: theme.borderRadius.full,
}));

const SiteTitle = styled.h1(({ theme }) => ({
  fontSize: theme.fontSizes.lg,
  color: theme.colors.primary,
  margin: 0,
}));

const Nav = styled.nav(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing.md,

  [`@media ${theme.media.mobile}`]: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: theme.spacing.sm,
  },
}));

const NavLink = styled(Link)(({ theme }) => ({
  color: theme.colors.text,
  textDecoration: 'none',
  fontSize: theme.fontSizes.smd,

  '&:hover': {
    color: theme.colors.primary,
  },
}));

export default function Header() {
  return (
    <HeaderContainer>
      <LogoSection>
        <LogoImage
          src="https://cdn.midjourney.com/a1ab4150-f278-40fb-8fe6-5e6676b7ebe3/0_2.png" // 📸 Add this image to your public folder
          alt="Fiona smiling"
          width={50}
          height={50}
        />
        <SiteTitle>Nails By Fiona</SiteTitle>
      </LogoSection>

      <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
      </Nav>
    </HeaderContainer>
  );
}
