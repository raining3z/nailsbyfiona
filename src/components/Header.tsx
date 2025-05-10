'use client';

import Link from 'next/link';
import { useState } from 'react';
import { styled } from '@pigment-css/react';
import { FaHome, FaBars, FaTimes } from 'react-icons/fa';
import { useIsMobile } from '@/utils/useIsMobile';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Events', href: '/events' },
  { label: 'Directory', href: '/directory' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
];

const HeaderContainer = styled.header(({ theme }) => ({
  padding: `${theme.spacing.lg} ${theme.spacing.xxl}`,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',

  [`@media ${theme.media.mobile}`]: {
    padding: `${theme.spacing.md}`,
  },
}));

const LogoLink = styled(Link)(({ theme }) => ({
  fontWeight: 700,
  fontSize: theme.fontSizes.smd,
  display: 'flex',
  textTransform: 'uppercase',
  gap: theme.spacing.md,
  alignItems: 'center',

  [`@media ${theme.media.mobile}`]: {
    justifyContent: 'center',
    flex: 1,
  },
}));

const LogoText = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

const LogoTextLarge = styled.span(({ theme }) => ({
  fontSize: theme.fontSizes.lg,
}));

const LogoTextSmall = styled.span(({ theme }) => ({
  fontSize: theme.fontSizes.sm,
}));

const NavList = styled.ul(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing.xl,
  listStyle: 'none',
  margin: 0,
  padding: 0,

  [`@media ${theme.media.mobile}`]: {
    display: 'none',
  },
}));

const NavItem = styled.li(() => ({}));

const Hamburger = styled.button(({ theme }) => ({
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: `${theme.spacing.sm}`,
  position: 'absolute',
  top: '35px',
  left: '30px',
}));

const CloseIcon = styled(Hamburger)(() => ({
  right: '20px',
  left: 'auto',
  top: '20px',
}));

interface DrawerProps {
  open: boolean;
}

const Drawer = styled.nav<DrawerProps>(({ theme }) => ({
  position: 'fixed',
  top: 0,
  width: '250px',
  height: '100vh',
  background: theme.colors.backgroundPrimary,
  padding: theme.spacing.lg,
  boxShadow: '2px 0 5px rgba(0,0,0,0.2)',
  transition: 'left 0.3s ease',
  zIndex: 1000,
  variants: [
    {
      props: { open: true },
      style: { left: 0 },
    },
    {
      props: { open: false },
      style: { left: '-100%' },
    },
  ],
}));

const DrawerList = styled.ul(() => ({
  listStyle: 'none',
  padding: 0,
  marginTop: '2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
}));

export default function Header() {
  const isMobile = useIsMobile();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <HeaderContainer>
        {isMobile && (
          <Hamburger onClick={() => setDrawerOpen(true)}>
            <FaBars size={20} />
          </Hamburger>
        )}

        <LogoLink href="/">
          <FaHome size={30} />
          <LogoText>
            <LogoTextLarge>HILLSDALE</LogoTextLarge>
            <LogoTextSmall>FARM WEST</LogoTextSmall>
          </LogoText>
        </LogoLink>

        {!isMobile && (
          <nav>
            <NavList>
              {navItems.map(({ label, href }) => (
                <NavItem key={href}>
                  <Link href={href} onClick={() => setDrawerOpen(false)}>
                    {label}
                  </Link>
                </NavItem>
              ))}
            </NavList>
          </nav>
        )}
      </HeaderContainer>

      {isMobile && (
        <Drawer open={drawerOpen}>
          <CloseIcon onClick={() => setDrawerOpen(false)}>
            <FaTimes size={20} />
          </CloseIcon>
          <DrawerList>
            {navItems.map(({ label, href }) => (
              <li key={href}>
                <Link href={href} onClick={() => setDrawerOpen(false)}>
                  {label}
                </Link>
              </li>
            ))}
          </DrawerList>
        </Drawer>
      )}
    </>
  );
}
